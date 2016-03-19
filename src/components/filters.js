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
import Multiselect from './Multiselect';


class Filters extends Component {
  constructor(props) {
    super(props);
  }

  // FIXME
  onChangeQuery() {
    const politicians = this.props.selectedPoliticians.map((item) => {
        return 'politician__name__in=' + item.value;
    });

    const elections = this.props.selectedElections.map((item) => {
      return 'election_round__election__year__in=' + item.value;
    });

    const educations = this.props.selectedEducations.map((item) => {
      return 'politician__education__name__in=' + item.value;
    });

    const political_parties = this.props.selectedPoliticalParties.map((item) => {
      return 'politician__political_parties__political_party__siglum__in=' + item.value;
    });

    const political_offices = this.props.selectedPoliticalOffices.map((item) => {
      return 'political_office__slug__in=' + item.value;
    });

    let query = [].concat.call(politicians, elections, educations, political_parties, political_offices);

    this.props.onChange({query});

    axios.get(this.props.url + "/candidacies/?" + query.join('&')).then((result) => {
      this.props.onChange({
        politicians: result.data.objects.map((item) => {
          return item.politician;
        })
      });
    });
  }

  // Political Parties
  getPoliticalParties() {
    return axios.get(this.props.url + "/political-parties/").then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.siglum + " (" + item.name + ")", "value": item.siglum};
      });
      return {options};
    });
  }

  onChangePoliticalParties(selectedPoliticalParties) {
    this.props.onChange({selectedPoliticalParties});
  }

  // Political Offices
  getPoliticalOffices() {
    return axios.get(this.props.url + "/political-offices/").then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.slug};
      });
      return {options};
    });
  }

  onChangePoliticalOffices(selectedPoliticalOffices) {
    this.props.onChange({selectedPoliticalOffices});
  }

  // Educations
  getEducations() {
    return axios.get(this.props.url + "/educations/").then((response) => {
      return response.data
    }).then((json) => {
     const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.name};
      });
      return {options};
    });
  }

  onChangeEducations(selectedEducations) {
    this.props.onChange({selectedEducations});
  }

  // Elections
  getElections() {
    return axios.get(this.props.url + "/elections/").then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.year, "value": item.year};
      });
      return {options};
    });
  }

  onChangeElections(selectedElections) {
    this.props.onChange({selectedElections});
  }

  // Politicians
  searchPoliticians(term) {
    return axios.get(this.props.url + "/politicians/?name__istartswith=" + term).then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.name};
      });
      return {options};
    });
  }

  onChangePoliticians(selectedPoliticians) {
    this.props.onChange({selectedPoliticians});
  }

  render() {
    const searchPoliticians = _.debounce((term) => {this.searchPoliticians(term)}, 300);

    return (
      <div>
         <div className="filter-row row">
           <div className="col-lg-6">
             <Multiselect
               label="Partidos"
               placeholder="Escolha um ou vários partidos..."
               loadOptions={this.getPoliticalParties.bind(this)}
               onChange={this.onChangePoliticalParties.bind(this)}
               value={this.props.selectedPoliticalParties} />
           </div>
           <div className="col-lg-6">
             <Multiselect
               label="Cargos"
               placeholder="Escolha um ou vários cargos..."
               loadOptions={this.getPoliticalOffices.bind(this)}
               onChange={this.onChangePoliticalOffices.bind(this)}
               value={this.props.selectedPoliticalOffices} />
           </div>
         </div>
         <div className="filter-row row">
           <div className="col-lg-6">
             <Multiselect
               label="Escolaridades"
               placeholder="Escolha uma ou várias escolaridades..."
               loadOptions={this.getEducations.bind(this)}
               onChange={this.onChangeEducations.bind(this)}
               value={this.props.selectedEducations} />
           </div>
           <div className="col-lg-6">
             <Multiselect
               label="Eleições"
               placeholder="Escolha uma ou várias eleições..."
               loadOptions={this.getElections.bind(this)}
               onChange={this.onChangeElections.bind(this)}
               value={this.props.selectedElections} />
           </div>
         </div>
         <div className="filter-row row">
           <div className="col-md-12">
             <Multiselect
               label="Políticos"
               placeholder="Escolha uma ou vários políticos..."
               loadOptions={this.searchPoliticians.bind(this)}
               onChange={this.onChangePoliticians.bind(this)}
               value={this.props.selectedPoliticians} />
           </div>
         </div>
         <div className="filter-row row">
           <div className="col-md-12">
             <button className="btn btn-primary" onClick={this.onChangeQuery.bind(this)}>Filtrar</button>
           </div>
         </div>
       </div>
    );
  }
}

export default Filters;
