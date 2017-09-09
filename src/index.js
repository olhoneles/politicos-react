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

import axios from 'axios'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PoliticianList from './components/politician_list'
import Filters from './components/filters'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      politicians: [],
      selectedPoliticalParties: [],
      selectedPoliticalOffices: [],
      selectedEducations: [],
      selectedElections: [],
      selectedPoliticians: [],
      selectedCities: [],
      selectedStates: [],
      selectedElected: [],
      selectedGender: [],
      selectedOccupations: [],
      selectedMaritalStatus: [],
      query: '',
    }

    this.URL = 'http://politicos.olhoneles.org/api/v0'

    this.onChange = state => this.setState(state)

    // FIXME: Iniial query
    axios.get(this.URL + '/politicians/').then(result => {
      this.onChange({
        politicians: result.data.objects,
      })
    })
  }

  // FIXME
  onChangeQuery() {
    const politicians = this.state.selectedPoliticians.map(item => {
      return 'name__in=' + item.value
    })

    const elections = this.state.selectedElections.map(item => {
      return 'candidacies__election_round__election__year__in=' + item.value
    })

    const educations = this.state.selectedEducations.map(item => {
      return 'education__name__in=' + item.value
    })

    const political_parties = this.state.selectedPoliticalParties.map(item => {
      return 'political_parties__political_party__siglum__in=' + item.value
    })

    const political_offices = this.state.selectedPoliticalOffices.map(item => {
      return 'candidacies__political_office__slug__in=' + item.value
    })

    const cities = this.state.selectedCities.map(item => {
      return 'candidacies__city__name__in=' + item.value
    })

    const states = this.state.selectedStates.map(item => {
      return 'candidacies__state__slug__in=' + item.value
    })

    const elected = this.state.selectedElected.map(item => {
      return 'candidacies__elected__in=' + item.value
    })

    const gender = this.state.selectedGender.map(item => {
      return 'gender__in=' + item.value
    })

    const occupations = this.state.selectedOccupations.map(item => {
      return 'occupation__slug__in=' + item.value
    })

    const marital_status = this.state.selectedMaritalStatus.map(item => {
      return 'marital_status__slug__in=' + item.value
    })

    let query = [].concat.call(
      politicians,
      elections,
      educations,
      political_parties,
      political_offices,
      cities,
      states,
      elected,
      gender,
      occupations,
      marital_status
    )

    this.onChange({ query })

    axios.get(this.URL + '/politicians/?' + query.join('&')).then(result => {
      this.onChange({
        politicians: result.data.objects.map(item => {
          return item
        }),
      })
    })
  }

  render() {
    return (
      <div className="container">
        <Filters
          onChangeQuery={this.onChangeQuery.bind(this)}
          onChange={this.onChange.bind(this)}
          url={this.URL}
          politicians={this.state.politicians}
          selectedPoliticalParties={this.state.selectedPoliticalParties}
          selectedPoliticalOffices={this.state.selectedPoliticalOffices}
          selectedEducations={this.state.selectedEducations}
          selectedElections={this.state.selectedElections}
          selectedPoliticians={this.state.selectedPoliticians}
          selectedCities={this.state.selectedCities}
          selectedStates={this.state.selectedStates}
          selectedElected={this.state.selectedElected}
          selectedGender={this.state.selectedGender}
          selectedOccupations={this.state.selectedOccupations}
          selectedMaritalStatus={this.state.selectedMaritalStatus}
          query={this.state.query}
        />

        <PoliticianList politicians={this.state.politicians} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.main'))
