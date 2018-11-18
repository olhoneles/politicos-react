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
import { changeEducationList, changeEducationSelected } from "./educationDuck";

class SelectEducation extends Component {
  componentDidMount() {
    this.props.HTTPClient.get("/educations/").then(result => {
      this.props.dispatch(changeEducationList(result.data));
    });
  }

  getOptions(input, callback) {
    const education = this.props.list.objects.map(item => {
      return { label: item.name, value: item.name };
    });
    return getOptionsCallback(input, callback, education);
  }

  render() {
    if (!this.props.list) {
      return null;
    }

    return (
      <Multiselect
        label="Escolaridades"
        placeholder="Escolha uma ou várias escolaridades..."
        loadOptions={this.getOptions.bind(this)}
        onChange={selected =>
          this.props.dispatch(changeEducationSelected(selected))
        }
        value={this.props.selected}
      />
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = ({ education }) => {
  return {
    list: education.list,
    selected: education.selected
  };
};

SelectEducation.propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.object,
  selected: PropTypes.array,
  HTTPClient: PropTypes.object
};

export default connect(mapStateToProps)(SelectEducation);
