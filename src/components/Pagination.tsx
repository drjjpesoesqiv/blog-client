import React from 'react';

interface Props {
  page:number;
  count:number;
  perPage:number;
  callback:Function;
}

interface State {
  page:number;
}

class Pagination extends React.Component<Props,State> {
  maxPage:number = 0;

  constructor(props:any) {
    super(props);
    this.state = {
      page: this.props.page
    }
  }

  componentWillReceiveProps(props:any) {
    this.maxPage = Math.ceil(props.count / props.perPage);
  }

  prevPage = () => {
    this.setState({
      page: this.state.page - 1
    }, () => this.props.callback(this.state.page));
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    }, () => this.props.callback(this.state.page));
  }

  goToPage = (e:any) => {
    this.setState({
      page: parseInt(e.target.dataset.value)
    }, () => this.props.callback(this.state.page));
  }

  render() {
    const prev = (this.state.page > 1)
      ? <span className="link" onClick={() => this.prevPage()}>&lt;</span>
      : '';

    const next = (this.state.page < this.maxPage)
      ? <span className="link" onClick={() => this.nextPage()}>&gt;</span>
      : '';

    var start = this.state.page - 3;
    if (start < 1) start = 1;

    var end = +this.state.page + 3;
    if (end > this.maxPage) end = this.maxPage;

    var links = [];
    for (var i:number = start; i <= end; i++) {
      var link = (i !== this.state.page)
        ? <span
          key={i}
          className="link"
          data-value={i}
          onClick={this.goToPage}>{i}</span>
        : <span key={i} className="link">{i}</span>;
      links.push(link);
    }

    return(
      <div className="pagination">
        {prev}
        {links}
        {next}
      </div>
    )
  }
}

export default Pagination;
