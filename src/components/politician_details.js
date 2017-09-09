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

import React, { Component } from 'react'
import PoliticianCandidacies from './politician_candidacies'

class PoliticianDetail extends Component {
  constructor(props) {
    super(props)
    this.politician = this.props.politician
  }

  render() {
    if (!this.politician || this.politician.length <= 0) {
      return <div>Loading...</div>
    }

    const alternativeNames = this.politician.alternative_names.map(item => {
      return item.name
    })

    const politicalParties = this.politician.political_parties
      .map(item => {
        return item.political_party.siglum
      })
      .join(', ')

    let picture = ''
    if (!this.politician.picture) {
      picture = (
        <div>
          <span className="glyphicon glyphicon-user" aria-hidden="true" />Sem
          Foto
        </div>
      )
    } else {
      picture = (
        <img src={this.politician.picture} className="politician-picture" />
      )
    }

    let politicianName
    if (
      this.politician.alternative_names &&
      this.politician.name != this.politician.alternative_names[0].name
    ) {
      politicianName = `${this.politician.alternative_names[0].name} (${this
        .politician.name})`
    } else {
      politicianName = this.politician.name
    }

    let gender
    if (this.politician.gender == 'M') {
      gender = 'Masculino'
    } else if (this.politician.gender == 'F') {
      gender = 'Feminino'
    } else {
      gender = 'Não informado'
    }

    return (
      <div className="">
        <div className="row">
          <div className="col-lg-12">
            <div className="politician-name">{politicianName}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">{picture}</div>
          <div className="col-lg-5">
            <div className="details">
              <p>Sexo: {gender}</p>
              <p>Partido: {politicalParties}</p>
              <p>Estado civil: {this.politician.marital_status.name}</p>
              <p>Ocupação: {this.politician.occupation.name}</p>
              <p>Escolaridade: {this.politician.education.name}</p>
              <p>Data de nascimento: {this.politician.date_of_birth}</p>
              <p>Nacionalidade: {this.politician.nationality.name}</p>
              <p>
                Naturalidade: {this.politician.place_of_birth}/{this.politician.state ? this.politician.state.name : null}
              </p>
              <p>Nomes Alternativos: {alternativeNames}</p>
              <p>
                Cor/Raça:{' '}
                {this.politician.ethnicity
                  ? this.politician.ethnicity.name
                  : null}
              </p>
              <p>Email: {this.politician.email}</p>
              <p>Website: {this.politician.website}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <PoliticianCandidacies data={this.politician.candidacies} />
          </div>
        </div>
      </div>
    )
  }
}

export default PoliticianDetail
