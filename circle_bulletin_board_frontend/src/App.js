

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EntryPage from './EntryPage';
import CircleList from './CircleList';
import NewsList from './NewsList';
import BoardList from './BoardList';
import TopBar from './component/TopBar';
import CircleDetail from './CircleDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={EntryPage} exact={true} />
            <Route path='/entry' component={TopBar} exact={true} />
            <Route path='/circle' component={CircleList} exact={true} />
            <Route path='/news' component={NewsList} />
            <Route path='/board' component={BoardList} />
            <Route path='/circle/detail' component={CircleDetail} exact={true} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;