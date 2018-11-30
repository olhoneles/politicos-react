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
import { changeElectedList, changeElectedSelected } from "./electedDuck";

class SelectElected extends Component {
  componentDidMount() {
    this.props.HTTPClient.get("/candidacies-status/suggest/").then(result => {
      this.props.dispatch(changeElectedList(result.data));
    });
  }

  getOptions(input, callback) {
    const elected =
      this.props.list &&
      this.props.list.map(item => {
        return { label: item.ds_sit_tot_turno, value: item.cd_sit_tot_turno };
      });
    return getOptionsCallback(input, callback, elected);
  }

  render() {
    if (!this.props.list) {
      return null;
    }

    return (
      <Multiselect
        label="Status da candidatura"
        placeholder="Filtre quem foi eleito ou não..."
        loadOptions={this.getOptions.bind(this)}
        onChange={selected =>
          this.props.dispatch(changeElectedSelected(selected))
        }
        value={this.props.selected}
      />
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = ({ elected }) => {
  return {
    list: elected.list,
    selected: elected.selected
  };
};

SelectElected.propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.array,
  selected: PropTypes.array
};

export default connect(mapStateToProps)(SelectElected);
