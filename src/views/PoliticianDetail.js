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

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import PoliticianCandidacies from "./PoliticianCandidacies";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class PoliticianDetail extends Component {
  constructor(props) {
    super(props);
    this.politician = this.props.politician;
  }

  getPoliticianName() {
    if (
      this.politician.alternative_names &&
      this.politician.alternative_names[0] &&
      this.politician.name !== this.politician.alternative_names[0].name
    ) {
      return `${this.politician.alternative_names[0].name} (${
        this.politician.name
      })`;
    }
    return this.politician.name;
  }

  getGender() {
    if (this.politician.gender === "M") {
      return "Masculino";
    } else if (this.politician.gender === "F") {
      return "Feminino";
    } else {
      return "Não informado";
    }
  }

  getPoliticalParties() {
    return this.politician.political_parties
      .map(item => {
        return item.political_party.siglum;
      })
      .join(", ");
  }

  getPicture() {
    if (!this.politician.picture) {
      return (
        <div>
          <span className="glyphicon glyphicon-user" aria-hidden="true" />
          Sem Foto
        </div>
      );
    } else {
      return (
        <img
          alt={`Foto: ${this.getPoliticianName()}`}
          src={this.politician.picture}
          className="politician-picture"
        />
      );
    }
  }

  getAlternativeNames() {
    return this.politician.alternative_names.map(item => {
      return item.name;
    });
  }

  getEthnicity() {
    return this.politician.ethnicity ? this.politician.ethnicity.name : "";
  }

  getPlaceOfBirth() {
    const state = this.politician.state ? `/${this.politician.state.name}` : "";
    return `${this.politician.place_of_birth}${state}`;
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {this.getPoliticianName()}
        </Typography>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flexGrow: 1, width: "33%" }}>{this.getPicture()}</div>
          <div style={{ flexGrow: 1, width: "33%" }}>
            <p>Sexo: {this.getGender()}</p>
            <p>Partido: {this.getPoliticalParties()}</p>
            <p>Estado civil: {this.politician.marital_status.name}</p>
            <p>Ocupação: {this.politician.occupation.name}</p>
            <p>Escolaridade: {this.politician.education.name}</p>
            <p>Data de nascimento: {this.politician.date_of_birth}</p>
            <p>Nacionalidade: {this.politician.nationality.name}</p>
            <p>Naturalidade: {this.getPlaceOfBirth()}</p>
            <p>Nomes Alternativos: {this.getAlternativeNames()}</p>
            <p>Cor/Raça: {this.getEthnicity()}</p>
            <p>Email: {this.politician.email}</p>
            <p>Website: {this.politician.website}</p>
          </div>
          <div style={{ flexGrow: 1, width: "33%" }}>
            <PoliticianCandidacies data={this.politician.candidacies} />
          </div>
        </div>
      </Paper>
    );
  }
}

PoliticianDetail.propTypes = {
  politician: PropTypes.object
};

export default withStyles(styles)(PoliticianDetail);
