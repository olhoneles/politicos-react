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

import PoliticianDetail from './PoliticianDetail'

describe('<PoliticianDetail />', () => {
  let politician
  beforeEach(() => {
    politician = {
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
      picture: 'https://rock.com/me.png',
      gender: 'M',
    }
  })

  it('renders without crashing', () => {
    const component = renderer.create(
      <PoliticianDetail politician={politician} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders <Loading /> when there is no data', () => {
    const component = renderer.create(<PoliticianDetail />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('Details', () => {
    it('renders gender Female', () => {
      politician['gender'] = 'F'
      const component = renderer.create(
        <PoliticianDetail politician={politician} />
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders politician name without alternative names', () => {
      politician.alternative_names = []
      const component = renderer.create(
        <PoliticianDetail politician={politician} />
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders politician name without state', () => {
      delete politician.state
      const component = renderer.create(
        <PoliticianDetail politician={politician} />
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders politician name without ethnicity', () => {
      delete politician.ethnicity
      const component = renderer.create(
        <PoliticianDetail politician={politician} />
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
