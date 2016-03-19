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

    const cities = this.props.selectedCities.map((item) => {
      return 'city__name__in=' + item.value;
    });

    const states = this.props.selectedStates.map((item) => {
      return 'state__slug__in=' + item.value;
    });

    const elected = this.props.selectedElected.map((item) => {
      return 'elected__in=' + item.value;
    });

    const gender = this.props.selectedGender.map((item) => {
      return 'politician__gender__in=' + item.value;
    });

    const occupations = this.props.selectedOccupations.map((item) => {
      return 'politician__occupation__slug__in=' + item.value;
    });

    const marital_status = this.props.selectedMaritalStatus.map((item) => {
      return 'politician__marital_status__slug__in=' + item.value;
    });

    let query = [].concat.call(
      politicians, elections, educations, political_parties, political_offices,
      cities, states, elected, gender, occupations, marital_status
    );

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

  // Cities
  getCities(term) {
    return axios.get(this.props.url + "/cities/?name__istartswith=" + term).then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.name};
      });
      return {options};
    });
  }

  onChangeCities(selectedCities) {
    this.props.onChange({selectedCities});
  }

  // States
  getStates() {
    return axios.get(this.props.url + "/states/").then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.slug};
      });
      return {options};
    });
  }

  onChangeStates(selectedStates) {
    this.props.onChange({selectedStates});
  }

  // Elected
  getElected = (input, callback) =>  {
    setTimeout(() => {
      callback(null, {
          options: [
            {"label": "Eleito", "value": 1},
            {"label": "Não Eleito", "value": 0}
          ],
          complete: true
      });
    }, 500);
  };

  onChangeElected(selectedElected) {
    this.props.onChange({selectedElected});
  }

  // Gender
  getGender = (input, callback) =>  {
    setTimeout(() => {
      callback(null, {
          options: [
            {'label': "Masculino", "value": "M"},
            {'label': "Feminino", "value": "F"}
          ],
          complete: true
      });
    }, 500);
  };

  onChangeGender(selectedGender) {
    this.props.onChange({selectedGender});
  }

  // Occupations
  getOccupations() {
    return axios.get(this.props.url + "/occupations/").then((response) => {
      return response.data
    }).then((json) => {
      console.log(json);
      const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.slug};
      });
      return {options};
    });
  }

  onChangeOccupations(selectedOccupations) {
    this.props.onChange({selectedOccupations});
  }

  // MaritalStatus
  getMaritalStatus() {
    return axios.get(this.props.url + "/marital-status/").then((response) => {
      return response.data
    }).then((json) => {
      const options = json.objects.map((item) => {
        return {"label": item.name, "value": item.slug};
      });
      return {options};
    });
  }

  onChangeMaritalStatus(selectedMaritalStatus) {
    this.props.onChange({selectedMaritalStatus});
  }

  render() {
    const searchPoliticians = _.debounce((term) => {this.searchPoliticians(term)}, 300);

    return (
      <div>
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
           <div className="col-lg-6">
             <Multiselect
               label="Estados"
               placeholder="Escolha um ou vários estados..."
               loadOptions={this.getStates.bind(this)}
               onChange={this.onChangeStates.bind(this)}
               value={this.props.selectedStates} />
           </div>
            <div className="col-lg-6">
             <Multiselect
               label="Cidades"
               placeholder="Escolha uma ou várias cidades..."
               loadOptions={this.getCities.bind(this)}
               onChange={this.onChangeCities.bind(this)}
               value={this.props.selectedCities} />
           </div>
          </div>
          <div className="filter-row row">
            <div className="col-lg-6">
              <Multiselect
                label="Eleito"
                placeholder="Filtre quem foi eleito ou não..."
                loadOptions={this.getElected}
                onChange={this.onChangeElected.bind(this)}
                value={this.props.selectedElected} />
            </div>
             <div className="col-lg-6">
              <Multiselect
                label="Sexo"
                placeholder="Escolha o sexo..."
                loadOptions={this.getGender}
                onChange={this.onChangeGender.bind(this)}
                value={this.props.selectedGender} />
            </div>
          </div>
          <div className="filter-row row">
            <div className="col-lg-6">
              <Multiselect
                label="Profissões"
                placeholder="Escolha uma ou mais profissões..."
                loadOptions={this.getOccupations.bind(this)}
                onChange={this.onChangeOccupations.bind(this)}
                value={this.props.selectedOccupations} />
            </div>
             <div className="col-lg-6">
              <Multiselect
                label="Estado Civil"
                placeholder="Escolha um estado civil..."
                loadOptions={this.getMaritalStatus.bind(this)}
                onChange={this.onChangeMaritalStatus.bind(this)}
                value={this.props.selectedMaritalStatus} />
            </div>
          </div>
          <div className="filter-row row">
          <div className="col-md-6">
            <button className="btn btn-primary" onClick={this.onChangeQuery.bind(this)}>Filtrar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
