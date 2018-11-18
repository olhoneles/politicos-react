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

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Multiselect, { getOptionsCallback } from "../components/Multiselect";
import {
  changePoliticalOfficeList,
  changePoliticalOfficeSelected
} from "./politicalOfficeDuck";

class SelectPoliticalOffice extends Component {
  componentDidMount() {
    this.props.HTTPClient.get("/political-offices/").then(result => {
      this.props.dispatch(changePoliticalOfficeList(result.data));
    });
  }

  getOptions(input, callback) {
    const politicalOffice = this.props.list.objects.map(item => {
      return { label: item.name, value: item.slug };
    });
    return getOptionsCallback(input, callback, politicalOffice);
  }

  render() {
    if (!this.props.list) {
      return null;
    }

    return (
      <Multiselect
        label="Cargos"
        placeholder="Escolha um ou vários cargos..."
        loadOptions={this.getOptions.bind(this)}
        onChange={selected =>
          this.props.dispatch(changePoliticalOfficeSelected(selected))
        }
        value={this.props.selected}
      />
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = ({ politicalOffice }) => {
  return {
    list: politicalOffice.list,
    selected: politicalOffice.selected
  };
};

SelectPoliticalOffice.propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.object,
  selected: PropTypes.array,
  HTTPClient: PropTypes.object
};

export default connect(mapStateToProps)(SelectPoliticalOffice);
