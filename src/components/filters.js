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

import axios from "axios";
import debounce from "es6-promise-debounce";
import React, {Component} from "react";
import Multiselect from "./Multiselect";


class Filters extends Component {
  constructor(props) {
    super(props);
  }

  getOptions(url, func) {
    return axios.get(this.props.url + url).then((response) => {
      return response.data;
    }).then((json) => {
      const options = json.objects.map(func);
      return {options};
    });
  }

  getOptionsCallback = (input, callback, opts) =>  {
    setTimeout(() => {callback(null, {options: opts, complete: true});}, 500);
  }

  // Political Parties
  getPoliticalParties() {
    const func = (item) => {return {"label": item.siglum + " (" + item.name + ")", "value": item.siglum};};
    return this.getOptions("/political-parties/", func);
  }

  // Political Offices
  getPoliticalOffices() {
    const func = (item) => {return {"label": item.name, "value": item.slug};};
    return this.getOptions("/political-offices/", func);
  }

  // Educations
  getEducations() {
    const func = (item) => {return {"label": item.name, "value": item.name};};
    return this.getOptions("/educations/", func);
  }

  // Elections
  getElections() {
    const func = (item) => {return {"label": item.year, "value": item.year};};
    return this.getOptions("/elections/", func);
  }

  // Politicians
  searchPoliticians(term) {
    const func = (item) => {return {"label": item.name, "value": item.name};};
    return this.getOptions("/politicians/?name__istartswith=" + term, func);
  }

  // Cities
  getCities(term) {
    const func = (item) => {return {"label": item.name, "value": item.name};};
    return this.getOptions("/cities/?name__istartswith=" + term, func);
  }

  // States
  getStates() {
    const func = (item) => {return {"label": item.name, "value": item.slug};};
    return this.getOptions("/states/", func);
  }

  // Elected
  getElected = (input, callback) =>  {
    const options = [
      {"label": "Eleito", "value": 1},
      {"label": "Não Eleito", "value": 0}
    ];
    return this.getOptionsCallback(input, callback, options);
  }

  // Gender
  getGender = (input, callback) =>  {
    const options = [
      {"'label": "Masculino", "value": "M"},
      {"label": "Feminino", "value": "F"}
    ];
    return this.getOptionsCallback(input, callback, options);
  }

  // Occupations
  getOccupations(term) {
    const func = (item) => {return {"label": item.name, "value": item.slug};};
    return this.getOptions("/occupations/?name__istartswith=" + term, func);
  }

  // MaritalStatus
  getMaritalStatus() {
    const func = (item) => {return {"label": item.name, "value": item.slug};};
    return this.getOptions("/marital-status/", func);
  }

  render() {
    return (
      <div>
         <div className="filter-row row">
           <div className="col-md-12">
             <Multiselect
               label="Políticos"
               placeholder="Escolha uma ou vários políticos..."
               loadOptions={debounce(this.searchPoliticians.bind(this), 500)}
               onChange={(selectedPoliticians) => this.props.onChange({selectedPoliticians})}
               value={this.props.selectedPoliticians} />
           </div>
         </div>
         <div className="filter-row row">
           <div className="col-lg-6">
             <Multiselect
               label="Partidos"
               placeholder="Escolha um ou vários partidos..."
               loadOptions={this.getPoliticalParties.bind(this)}
               onChange={(selectedPoliticalParties) => this.props.onChange({selectedPoliticalParties})}
               value={this.props.selectedPoliticalParties} />
           </div>
           <div className="col-lg-6">
             <Multiselect
               label="Cargos"
               placeholder="Escolha um ou vários cargos..."
               loadOptions={this.getPoliticalOffices.bind(this)}
               onChange={(selectedPoliticalOffices) => this.props.onChange({selectedPoliticalOffices})}
               value={this.props.selectedPoliticalOffices} />
           </div>
         </div>
         <div className="filter-row row">
           <div className="col-lg-6">
             <Multiselect
               label="Escolaridades"
               placeholder="Escolha uma ou várias escolaridades..."
               loadOptions={this.getEducations.bind(this)}
               onChange={(selectedEducations) => this.props.onChange({selectedEducations})}
               value={this.props.selectedEducations} />
           </div>
           <div className="col-lg-6">
             <Multiselect
               label="Eleições"
               placeholder="Escolha uma ou várias eleições..."
               loadOptions={this.getElections.bind(this)}
               onChange={(selectedElections) => this.props.onChange({selectedElections})}
               value={this.props.selectedElections} />
           </div>
         </div>
         <div className="filter-row row">
           <div className="col-lg-6">
             <Multiselect
               label="Estados"
               placeholder="Escolha um ou vários estados..."
               loadOptions={this.getStates.bind(this)}
               onChange={(selectedStates) => this.props.onChange({selectedStates})}
               value={this.props.selectedStates} />
           </div>
            <div className="col-lg-6">
             <Multiselect
               label="Cidades"
               placeholder="Escolha uma ou várias cidades..."
               loadOptions={debounce(this.getCities.bind(this), 500)}
               onChange={(selectedCities) => this.props.onChange({selectedCities})}
               value={this.props.selectedCities} />
           </div>
          </div>
          <div className="filter-row row">
            <div className="col-lg-6">
              <Multiselect
                label="Eleito"
                placeholder="Filtre quem foi eleito ou não..."
                loadOptions={this.getElected}
                onChange={(selectedElected) => this.props.onChange({selectedElected})}
                value={this.props.selectedElected} />
            </div>
             <div className="col-lg-6">
              <Multiselect
                label="Sexo"
                placeholder="Escolha o sexo..."
                loadOptions={this.getGender}
                onChange={(selectedGender) => this.props.onChange({selectedGender})}
                value={this.props.selectedGender} />
            </div>
          </div>
          <div className="filter-row row">
            <div className="col-lg-6">
              <Multiselect
                label="Profissões"
                placeholder="Escolha uma ou mais profissões..."
                loadOptions={debounce(this.getOccupations.bind(this), 500)}
                onChange={(selectedOccupations) => this.props.onChange({selectedOccupations})}
                value={this.props.selectedOccupations} />
            </div>
             <div className="col-lg-6">
              <Multiselect
                label="Estado Civil"
                placeholder="Escolha um estado civil..."
                loadOptions={this.getMaritalStatus.bind(this)}
                onChange={(selectedMaritalStatus) => this.props.onChange({selectedMaritalStatus})}
                value={this.props.selectedMaritalStatus} />
            </div>
          </div>
          <div className="filter-row row">
          <div className="col-md-6">
            <button className="btn btn-primary" onClick={this.props.onChangeQuery}>Filtrar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
