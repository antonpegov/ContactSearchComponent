class SearchResult extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.search();
    this.props.communicator.subscribe('inputChange', (data) =>
      this.search(data.input ? `&${data.mode.id}=${data.input}` : '')
    )
  }

  render(){
    let output;
    if (!this.state.results) 
      return <p className="warning">Loading results compnent...</p>;
    else if (!this.state.results.length) 
      return <p className="warning">No appropriate results!</p>;
    else return(
      <ul className="search-result">
        {this.state.results.map(item => <SearchResultItem  {...item}/>)}
      </ul>
    )
  }

  search(suffix = ''){
    fetch(`${this.props.settings.api}?_sort=lname&_limit=${this.props.settings.maxCount+suffix}`)
      .then(res => res.json())
      .then(results => this.setState({results}))
  }
}