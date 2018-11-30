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

import React from "react";
import PropTypes from "prop-types";

import _ from "lodash";

const PoliticianCandidacies = props => {
  // FIXME: remove lodash
  const candidacies = _.groupBy(props.data, x => x.ano_eleicao);
  const candidacyYears = Object.keys(candidacies).map(year => {
    return <CandidacyYear key={year} year={year} candidacies={candidacies} />;
  });

  return (
    <div>
      <h3 className="panel-title">Candidaturas</h3>
      {<div className="panel-body">{candidacyYears}</div>}
    </div>
  );
};

PoliticianCandidacies.propTypes = {
  data: PropTypes.array
};

export default PoliticianCandidacies;

const CandidacyYear = props => {
  return (
    <dl>
      <dt>{props.year}</dt>
      <CandidacyList candidacies={props.candidacies[props.year]} />
    </dl>
  );
};

CandidacyYear.propTypes = {
  year: PropTypes.string,
  candidacies: PropTypes.object
};

const CandidacyList = ({ candidacies }) => {
  const candidacyItems = candidacies.map(candidacy => {
    return <CandidacyListItem key={candidacy.id} candidacy={candidacy} />;
  });

  return <React.Fragment>{candidacyItems}</React.Fragment>;
};

CandidacyList.propTypes = {
  candidacies: PropTypes.array
};

const CandidacyListItem = ({ candidacy }) => {
  const status =
    candidacy.ds_sit_tot_turno === "ELEITO" ? "Eleito" : "Não eleito";
  const round_number = candidacy.nr_turno;

  let info = "";
  if (candidacy.nm_ue && candidacy.sg_uf) {
    info = `em ${candidacy.nm_ue}/${candidacy.sg_uf}`;
  } else if (candidacy.sg_uf) {
    info = `em ${candidacy.sg_uf}`;
  }

  return (
    <dd
      style={{
        marginBottom: 10
      }}
    >
      {status} no {round_number}
      &deg; turno para {candidacy.ds_cargo} {info}
    </dd>
  );
};

CandidacyListItem.propTypes = {
  candidacy: PropTypes.object
};
