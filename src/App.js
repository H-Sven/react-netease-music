/*
 * @Author: Siwen
 * @Date: 2019-09-16 10:47:29
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-10 14:17:02
 * @Description: 
 */
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routers from './router'
function App() {
  return (
    <>
      <Router>
        <Switch>
          { Routers.map((item, index) => {
            return <Route path={item.path} key={index} exact render={(props) =>
              (
                <Suspense fallback={null}>
                  <item.component {...props} />
                </Suspense>
              )
            }></Route>
          }) }
        </Switch>
      </Router>
    </>
  )
}

export default App