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
import React from 'react'

const CandidacyListItem = ({ candidacy }) => {
  const status = candidacy.elected ? 'Eleito' : 'Não eleito'
  const round_number = candidacy.election_round.round_number

  let info = ''
  if (candidacy.city && candidacy.state) {
    info = 'em ' + candidacy.city.name + '/' + candidacy.state.siglum
  } else if (candidacy.state) {
    info = 'em ' + candidacy.state.name
  }

  return (
    <div className="candidacy-list-item">
      {status} no {round_number}&deg; turno para{' '}
      {candidacy.political_office.name} {info}
    </div>
  )
}

const CandidacyList = ({ candidacies }) => {
  const candidacyItems = candidacies.map(candidacy => {
    return <CandidacyListItem key={candidacy.id} candidacy={candidacy} />
  })

  return <dd>{candidacyItems}</dd>
}

const CandidacyYear = props => {
  return (
    <dl className="dl-horizontal">
      <dt>{props.year}</dt>
      <CandidacyList candidacies={props.candidacies[props.year]} />
    </dl>
  )
}

const PoliticianCandidacies = props => {
  const candidacies = _.groupBy(props.data, x => {
    return new Date(x.election_round.date).getFullYear()
  })
  const candidacyYears = Object.keys(candidacies).map(year => {
    return <CandidacyYear key={year} year={year} candidacies={candidacies} />
  })

  return (
    <div className="panel panel-info candidacies">
      <div className="panel-heading">
        <h3 className="panel-title">Candidaturas</h3>
      </div>
      <div className="panel-body">{candidacyYears}</div>
    </div>
  )
}

export default PoliticianCandidacies
