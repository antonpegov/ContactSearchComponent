class SearchResultItem extends React.Component {
  constructor (props) {
    super();
  }
  render(){
    return(
      <li className="search-result-item">
        <img src={this.props.avatar}></img>
        <h3 className="search-result-item-name">{this.props.fname} {this.props.lname}</h3>
        <p className="search-result-item-phone"><b>Phone:</b> {this.props.phone}</p>
        <span className="search-result-item-address item">{this.props.adress}, {this.props.city}</span>
      </li>
    )}
}