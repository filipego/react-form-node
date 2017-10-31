import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

import NotFound from './NotFound'
import Home from './Home' 


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
