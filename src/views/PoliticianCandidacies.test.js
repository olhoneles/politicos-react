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

import PoliticianCandidacies from './PoliticianCandidacies'

describe('<PoliticianCandidacies />', () => {
  it('renders without crashing', () => {
    const data = [
      {
        city: {
          name: 'Moju',
        },
        elected: false,
        election_round: {
          date: '2000-10-01',
          round_number: '1',
        },
        id: 1424288,
        political_office: {
          name: 'Vereador',
        },
        state: {
          siglum: 'PA',
        },
      },
    ]

    const component = renderer.create(<PoliticianCandidacies data={data} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
