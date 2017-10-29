/*
 * Copyright (c) 2016, Marcelo Jorge Vieira <metal@alucinados.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import defaultReducers from './defaultReducers'
import HTTPClient from './HTTPClient'
import PoliticiansList from './views/PoliticiansList'
import Filters from './views/Filters'

const App = () => {
  const rootReducers = combineReducers({
    ...defaultReducers,
  })
  const store = createStore(rootReducers, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <div className="container">
        <Filters HTTPClient={HTTPClient} />
        <PoliticiansList HTTPClient={HTTPClient} />
      </div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('.main'))
