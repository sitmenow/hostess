import React from 'react';
import ReactDOM from 'react-dom';

// May need
import ListContainer from './components/waiting-list/ListContainer';
import Header from './components/Header';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ListContainer/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
