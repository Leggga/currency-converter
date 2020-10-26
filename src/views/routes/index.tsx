import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import history from 'views/routes/history'
import {store} from 'store'
//pages
import MainPage from 'views/pages/MainPage'
import SubmitPage from 'views/pages/SubmitPage'
import SuccessPage from 'views/pages/SuccessPage'

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