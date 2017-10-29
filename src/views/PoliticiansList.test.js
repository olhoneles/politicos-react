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
import { shallow } from 'enzyme'

import { changePoliticiansList } from '../select/politiciansDuck'
import { PoliticiansList } from './PoliticiansList'

describe('<PoliticiansList />', () => {
  it('renders without crashing', () => {
    const HTTPClient = { get: () => Promise.resolve({}) }
    const data = [
      {
        id: 123,
        name: 'Metal',
        alternative_names: ['Marcelo'],
        political_parties: [{ political_party: { siglum: 'rock' } }],
        marital_status: { name: 'single' },
        occupation: { name: 'Developer' },
        education: { name: 'rock' },
        date_of_birth: '1800-01-01',
        nationality: { name: 'rock' },
        place_of_birth: 'heavy metal',
        state: { name: 'rock' },
        ethnicity: { name: 'rock' },
        email: 'rock@rock.com',
        website: 'https://rock.com',
      },
    ]
    const component = renderer.create(
      <PoliticiansList HTTPClient={HTTPClient} data={data} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders <Loading /> when there is no data', () => {
    const HTTPClient = { get: () => Promise.resolve({}) }
    const component = renderer.create(
      <PoliticiansList HTTPClient={HTTPClient} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('.componentDidMount', () => {
    it("calls HTTPClient with 'politicians' URL", () => {
      const dispatchMock = jest.fn()
      const HTTPClient = { get: () => Promise.resolve({}) }
      const spy = jest.spyOn(HTTPClient, 'get')
      const component = shallow(
        <PoliticiansList HTTPClient={HTTPClient} dispatch={dispatchMock} />
      )

      component.instance().componentDidMount()
      expect(spy).toHaveBeenCalledWith('/politicians/')
      expect(dispatchMock).toHaveBeenCalledTimes(0)

      spy.mockReset()
      spy.mockRestore()
    })

    it('calls changePoliticiansList', () => {
      const result = { data: {} }
      const HTTPClient = {
        get: jest.fn(() => {
          return {
            then: fn => fn(result),
          }
        }),
      }
      const dispatchMock = jest.fn()
      const component = shallow(
        <PoliticiansList HTTPClient={HTTPClient} dispatch={dispatchMock} />
      )
      component.instance().componentDidMount()

      expect(dispatchMock).toHaveBeenCalledWith(
        changePoliticiansList(result.data)
      )
    })
  })
})
