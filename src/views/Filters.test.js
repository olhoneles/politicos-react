/*
 * Copyright (c) 2017, Marcelo Jorge Vieira <metal@alucinados.com>
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
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import { Filters } from './Filters'
import {
  changePoliticiansList,
  resetPoliticiansList,
} from '../select/politiciansDuck'

describe('<Filters />', () => {
  const mockStore = configureMockStore()
  const storeStateMock = {
    city: { list: { objects: [] } },
    education: { list: { objects: [] } },
    elected: { list: [] },
    election: { list: { objects: [] } },
    gender: { list: [] },
    maritalStatus: { list: { objects: [] } },
    occupation: { list: { objects: [] } },
    politicalOffice: { list: { objects: [] } },
    politicalParty: { list: { objects: [] } },
    politician: { list: { objects: [] } },
    state: { list: { objects: [] } },
  }
  const store = mockStore(storeStateMock)

  it('renders without crashing', () => {
    const HTTPClient = { get: () => Promise.resolve({}) }
    const component = renderer.create(
      <Provider store={store}>
        <Filters HTTPClient={HTTPClient} />
      </Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should not call dispatches when there is no selected item', () => {
    const state = { metal: {} }
    const dispatchMock = jest.fn()
    const HTTPClient = { get: () => Promise.resolve({}) }
    const component = mount(
      <Provider store={store}>
        <Filters
          dispatch={dispatchMock}
          state={state}
          HTTPClient={HTTPClient}
        />
      </Provider>
    )
    component.find('.btn-filter').simulate('click')

    expect(dispatchMock).toHaveBeenCalledTimes(0)
  })

  it('should call dispatches when there is selected item', () => {
    const state = { metal: { selected: [{ value: 123 }], query: 'q' } }
    const result = { data: { metal: 123 } }
    const HTTPClient = {
      get: jest.fn(() => {
        return {
          then: fn => fn(result),
        }
      }),
    }
    const dispatchMock = jest.fn()
    const component = mount(
      <Provider store={store}>
        <Filters
          dispatch={dispatchMock}
          state={state}
          HTTPClient={HTTPClient}
        />
      </Provider>
    )
    component.find('.btn-filter').simulate('click')

    expect(dispatchMock).toHaveBeenCalledWith(resetPoliticiansList())
    expect(dispatchMock).toHaveBeenCalledWith(
      changePoliticiansList(result.data)
    )
  })
})
