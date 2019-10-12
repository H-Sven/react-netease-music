/*
 * @Author: Siwen
 * @Date: 2019-09-16 10:47:29
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-12 13:53:59
 * @Description: 
 */
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Routers from './router'
import Loading from './components/Loading'
import './App.scss'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Redirect to='/recommend' from='/' exact />
          {Routers.map((item, index) => {
            return <Route path={item.path} key={index} exact render={(props) =>
              (
                <Suspense fallback={<Loading />}>
                  <item.component {...props} />
                </Suspense>
              )
            }></Route>
          })}
        </Switch>
      </Router>
    </>
  )
}

export default App