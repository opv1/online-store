import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import * as Pages from 'pages/index'

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/' exact component={Pages.Main} />
        <Route path='/production' component={Pages.Production} />
        <Route path='/garment' component={Pages.Garment} />
        <Route path='/cart' component={Pages.Cart} />
        <Route path='/checkout' component={Pages.Checkout} />
        <Redirect to='/' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/' exact component={Pages.Main} />
      <Route path='/auth/:action' component={Pages.Auth} />
      <Route path='/admin' component={Pages.Admin} />
      <Redirect to='/' />
    </Switch>
  )
}
