import React from 'react'
import {store} from 'store'
import {Route, Router, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {Provider as ReduxProvider} from 'react-redux'
//pages
import MainPage from 'views/pages/MainPage'
import SubmitPage from 'views/pages/SubmitPage'
import SuccessPage from 'views/pages/SuccessPage'

const history = createBrowserHistory()

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <Router history={history}>
        <div className="app-wrapper">
          <div className="container">
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route path="/submit" component={SubmitPage}/>
              <Route path="/success" component={SuccessPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    </ReduxProvider>
  )
}

export default App