require('ignore-styles')

require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  ignore: [/(node_modules)/],
  plugins: ["@babel/plugin-proposal-class-properties"],
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
})

require('./index')