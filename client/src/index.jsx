import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    //AJAX POST to Express Server
    const searchTerm = JSON.stringify({username: term});

    $.ajax({
      url: '/repos',
      method: 'POST',
      data: searchTerm,
      contentType: 'application/json',
      processData: false,
      error: function(errObj, errString, excpObj) {
        console.log('ERROR:', errString);
      },
      success: function(data, status, obj) {
        console.log('SUCCESS', data);
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));