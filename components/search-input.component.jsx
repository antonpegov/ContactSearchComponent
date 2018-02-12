class SearchInput extends React.Component {
  constructor (props) {
    super(props);
    this.timer = null;
    this.modes = [
      { key: 0, id: 'lname', title: 'Last Name'},
      { key: 1, id: 'fname', title: 'First Name'},
      { key: 2, id: 'city', title: 'City'}
    ],
    this.initialState = {input: ''};
    this.state = Object.assign({}, this.initialState, { mode: this.modes[0]}); // set serach mode to 'Last Name'
  }

  render(){
    return(
      <div className="search-input input-group">
        <span className="input-group-btn">
          <button className="btn btn-default search-button" title="Press here to chahge seach mode"
              onClick={this.changeMode}>{this.state.mode.title}</button>
        </span>
        <input type="text" className="form-control input" placeholder="Search for..." 
                onKeyUp={this.handleSubmit} value={this.state.input} onChange={this.handleChange} name="input"/>  
        <span className="reset" hidden={!this.state.input} onClick={this.reset}>X</span>
      </div>
  )}

  handleSubmit = (event) => {
    let timeStamp = Date.now();
    this.timer = timeStamp;
    setTimeout(() => 
      this.timer === timeStamp ? this.props.communicator.dispatch('inputChange', this.state) : null,
      500
    )
  }

  handleChange = (event) => {
    let newState = {}; 
    newState[event ? event.target.name : 'input'] = event ? event.target.value : '';
    this.setState(prevState => Object.assign({}, prevState, newState));  
  }
  
  changeMode = () => {
    const len = this.modes.length;
    let newModeIndex = this.state.mode.key >= len - 1 ? 0 : this.state.mode.key + 1;
    this.setState(prevState => Object.assign({}, prevState, {mode: this.modes[newModeIndex]}));
    this.handleSubmit();
  }

  reset = () => {
    this.setState(prevState => Object.assign({}, prevState, this.initialState));
    setTimeout(() => this.handleSubmit(), 1000);
  }
}