import express from 'express';

const PORT = 3000;
const path = require('path');
const fs = require("fs");

const app = express();

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App.tsx';

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res, next) => {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
  
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }
    
    const html = ReactDOMServer.renderToString(<App initialPath={req.path} />);
    
    return res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})