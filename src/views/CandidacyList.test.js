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

import { shallow } from 'enzyme'

import CandidacyList from './CandidacyList'

describe('<CandidacyList />', () => {
  let component, candidacies
  beforeEach(() => {
    candidacies = [
      {
        candidacy_status: {
          id: 1,
          name: 'Deferido',
          resource_uri: '/api/v0/candidacies-status/1/',
        },
        city: {
          id: 1978,
          logo: null,
          name: 'Moju',
          resource_uri: '/api/v0/cities/1978/',
          state: '/api/v0/states/14/',
        },
        elected: false,
        election_round: {
          date: '2000-10-01',
          election: '/api/v0/elections/1/',
          id: 1,
          politician: null,
          resource_uri: '/api/v0/election-rounds/1/',
          round_number: '1',
        },
        id: 1424288,
        institution: {
          id: 3939,
          logo: null,
          name: 'Camara Municipal Moju',
          political_offices: [
            {
              description: '',
              id: 10,
              name: 'Vereador',
              resource_uri: '/api/v0/political-offices/10/',
              slug: 'vereador',
              term: 4,
              wikipedia: null,
            },
          ],
          resource_uri: '/api/v0/institutions/3939/',
          siglum: 'CMM',
          website: null,
          wikipedia: null,
        },
        political_office: {
          description: '',
          id: 10,
          name: 'Vereador',
          resource_uri: '/api/v0/political-offices/10/',
          slug: 'vereador',
          term: 4,
          wikipedia: null,
        },
        resource_uri: '/api/v0/candidacies/1424288/',
        state: {
          country: '/api/v0/countries/31/',
          id: 14,
          logo: null,
          name: 'Pará',
          resource_uri: '/api/v0/states/14/',
          siglum: 'PA',
          slug: 'para',
          wikipedia: null,
        },
      },
    ]
    component = shallow(<CandidacyList candidacies={candidacies} />)
  })

  it('renders without crashing', () => {
    expect(component).toMatchSnapshot()
  })
})
