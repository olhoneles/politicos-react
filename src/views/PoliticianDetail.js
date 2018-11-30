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
      this.politician.nm_urna_candidato &&
      this.politician.nm_candidato !== this.politician.nm_urna_candidato
    ) {
      return `${this.politician.nm_urna_candidato} (${
        this.politician.nm_candidato
      })`;
    }
    return this.politician.nm_urna_candidato;
  }

  getPoliticalParties() {
    return `${this.politician.sg_partido} (${this.politician.nm_partido})`;
  }

  getPicture() {
    if (!this.politician.foto_url) {
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
          src={this.politician.foto_url}
          className="politician-picture"
        />
      );
    }
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
            <p>Sexo: {this.politician.ds_genero}</p>
            <p>Partido: {this.getPoliticalParties()}</p>
            <p>Estado civil: {this.politician.ds_estado_civil}</p>
            <p>Ocupação: {this.politician.ds_ocupacao}</p>
            <p>Escolaridade: {this.politician.ds_grau_instrucao}</p>
            <p>Data de nascimento: {this.politician.dt_nascimento}</p>
            <p>Nacionalidade: {this.politician.ds_nacionalidade}</p>
            <p>Naturalidade: {this.politician.nm_municipio_nascimento}</p>
            <p>Nomes Alternativos: {this.politician.nm_urna_candidato}</p>
            <p>Cor/Raça: {this.politician.ds_cor_raca}</p>
            <p>Email: {this.politician.nm_email}</p>
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
