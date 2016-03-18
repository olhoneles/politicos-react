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

import _ from 'lodash'
import axios from 'axios'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import PoliticianList from './components/politician_list';
import PoliticianDetail from './components/politician_details';
import Multiselect from './components/Multiselect';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      politicians: [],
      selectedPolitician: [],
      selectedPoliticalParties: [],
      selectedPoliticalOffices: [],
      selectedEducations: [],
      selectedElections: [],
      selectedPoliticians: [],
      query: ''
    };

    this.URL = "http://politicos.olhoneles.org/api/v0"

    // FIXME: Iniial query
    axios.get(this.URL + "/politicians/").then((result) => {
      this.setState({
        politicians: result.data.objects,
        selectedPolitician: result.data.objects[0]
      });
    });
  }

  // FIXME
  onChangeQuery() {

    const politicians = this.state.selectedPoliticians.map((item) => {
        return 'politician__name__in=' + item.value;
    });

    const elections = this.state.selectedElections.map((item) => {
      return 'election_round__election__year__in=' + item.value;
    });

    const educations = this.state.selectedEducations.map((item) => {
      return 'politician__education__name__in=' + item.value;
    });

    const political_parties = this.state.selectedPoliticalParties.map((item) => {
      return 'politician__political_parties__political_party__siglum__in=' + item.value;
    });

    const political_offices = this.state.selectedPoliticalOffices.map((item) => {
      return 'political_office__slug__in=' + item.value;
    });

    let query = [].concat.call(politicians, elections, educations, political_parties, political_offices);

    this.setState({query});

    axios.get(this.URL + "/candidacies/?" + query.join('&')).then((result) => {
      this.setState({
        politicians: result.data.objects.map((item) => {
          return item.politician;
        })
      });
    });
  }

  // Political Parties
  getPoliticalParties() {
    return axios.get(this.URL + "/political-parties/").then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.siglum + " (" + item.name + ")", "value": item.siglum};
      });
      return {options};
    });
  }

  onChangePoliticalParties(selectedPoliticalParties) {
    this.setState({selectedPoliticalParties});
  }

  // Political Offices
  getPoliticalOffices() {
    return axios.get(this.URL + "/political-offices/").then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.slug};
      });
      return {options};
    });
  }

  onChangePoliticalOffices(selectedPoliticalOffices) {
    this.setState({selectedPoliticalOffices});
  }

  // Educations
  getEducations() {
    return axios.get(this.URL + "/educations/").then((response) => {
      return response.data
    }).then((json) => {
     const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.name};
      });
      return {options};
    });
  }

  onChangeEducations(selectedEducations) {
    this.setState({selectedEducations});
  }

  // Elections
  getElections() {
    return axios.get(this.URL + "/elections/").then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.year, "value": item.year};
      });
      return {options};
    });
  }

  onChangeElections(selectedElections) {
    this.setState({selectedElections});
  }

  // Politicians
  searchPoliticians(term) {
    /// FIXME: Fazer decode do term ele chega com %20 no lugar do espaço
    return axios.get(this.URL + "/politicians/?name__istartswith=" + term).then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.name};
      });
      return {options};
    });
  }
  onChangePoliticians(selectedPoliticians) {
    this.setState({selectedPoliticians});
  }

  render() {

    const politicianSearch = _.debounce((term) => {this.politicianSearch(term)}, 300);

    return (
      <div className="container">
        <div className="filter-row row">
          <div className="col-lg-6">
            <Multiselect
              label="Partidos"
              placeholder="Escolha um ou vários partidos..."
              loadOptions={this.getPoliticalParties.bind(this)}
              onChange={this.onChangePoliticalParties.bind(this)}
              value={this.state.selectedPoliticalParties} />
          </div>
          <div className="col-lg-6">
            <Multiselect
              label="Cargos"
              placeholder="Escolha um ou vários cargos..."
              loadOptions={this.getPoliticalOffices.bind(this)}
              onChange={this.onChangePoliticalOffices.bind(this)}
              value={this.state.selectedPoliticalOffices} />
          </div>
        </div>
        <div className="filter-row row">
          <div className="col-lg-6">
            <Multiselect
              label="Escolaridades"
              placeholder="Escolha uma ou várias escolaridades..."
              loadOptions={this.getEducations.bind(this)}
              onChange={this.onChangeEducations.bind(this)}
              value={this.state.selectedEducations} />
          </div>
          <div className="col-lg-6">
            <Multiselect
              label="Eleições"
              placeholder="Escolha uma ou várias eleições..."
              loadOptions={this.getElections.bind(this)}
              onChange={this.onChangeElections.bind(this)}
              value={this.state.selectedElections} />
          </div>
        </div>
        <div className="filter-row row">
          <div className="col-md-12">
            <Multiselect
              label="Políticos"
              placeholder="Escolha uma ou vários políticos..."
              loadOptions={this.searchPoliticians.bind(this)}
              onChange={this.onChangePoliticians.bind(this)}
              value={this.state.selectedPoliticians} />
          </div>
        </div>
        <div className="filter-row row">
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={this.onChangeQuery.bind(this)}>Filtrar</button>
          </div>
        </div>

        <PoliticianDetail politician={this.state.selectedPolitician} />

        <PoliticianList
          onPoliticianSelect={selectedPolitician => this.setState({selectedPolitician})}
          politicians={this.state.politicians} />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.main'));
