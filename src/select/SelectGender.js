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
import { changeGenderList, changeGenderSelected } from "./genderDuck";

class SelectGender extends Component {
  componentDidMount() {
    const options = [
      { label: "Masculino", value: "M" },
      { label: "Feminino", value: "F" },
      { label: "Não informado", value: "N" }
    ];
    this.props.dispatch(changeGenderList(options));
  }

  getOptions(input, callback) {
    const gender = this.props.list;
    return getOptionsCallback(input, callback, gender);
  }

  render() {
    if (!this.props.list) {
      return null;
    }

    return (
      <Multiselect
        label="Sexo"
        placeholder="Escolha o sexo..."
        loadOptions={this.getOptions.bind(this)}
        onChange={selected =>
          this.props.dispatch(changeGenderSelected(selected))
        }
        value={this.props.selected}
      />
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = ({ gender }) => {
  return {
    list: gender.list,
    selected: gender.selected
  };
};

SelectGender.propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.array,
  selected: PropTypes.array
};

export default connect(mapStateToProps)(SelectGender);
