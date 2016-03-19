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
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import PoliticianList from './components/politician_list';
import Filters from './components/filters';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      politicians: [],
      selectedPoliticalParties: [],
      selectedPoliticalOffices: [],
      selectedEducations: [],
      selectedElections: [],
      selectedPoliticians: [],
      query: ''
    };

    this.URL = "http://politicos.olhoneles.org/api/v0"

    this.onChange = (state) => this.setState(state);

    // FIXME: Iniial query
    axios.get(this.URL + "/politicians/").then((result) => {
      this.onChange({
        politicians: result.data.objects,
      });
    });

  }

  render() {

    return (
      <div className="container">
        <Filters
           onChange={this.onChange.bind(this)}
           url={this.URL}
           politicians={this.state.politicians}
           selectedPoliticalParties={this.state.selectedPoliticalParties}
           selectedPoliticalOffices={this.state.selectedPoliticalOffices}
           selectedEducations={this.state.selectedEducations}
           selectedElections={this.state.selectedElections}
           selectedPoliticians={this.state.selectedPoliticians}
           query={this.state.query} />

        <PoliticianList politicians={this.state.politicians} />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.main'));
