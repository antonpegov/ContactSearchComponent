const EventEmitter = function() {
  const _events = {};
  return {
    dispatch: function (event, data) {
        if (!_events[event]) return; // no one is listening to this event
        for (var i = 0; i < _events[event].length; i++)
            _events[event][i](data);
    },
    subscribe: function (event, callback) {
      if (!_events[event]) _events[event] = []; // new event
      _events[event].push(callback);
    }
  }
  // we do not handle unsubscribe here
}
const settings = {
  api: `http://localhost:4000/people`,
  maxCount: 10
}
const communicator = EventEmitter();

class Search extends React.Component {
  constructor (props) {
    super();
    this.searchInputInput = {communicator},
    this.searchResultInput = {settings, communicator}
  }
  render(){
    return(
      <div className="card">
        <div className="card-header">
          <SearchInput {...this.searchInputInput}/>
        </div>
        <div className="card-body">
          <SearchResult {...this.searchResultInput}/>
        </div>
        <div className="card-footer">
          God bless React.js
        </div>
      </div>
    )}
    
  onChange(string) { debugger
    settings.string = string; 
    return
  }
}