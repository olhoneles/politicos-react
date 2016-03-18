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

import React from 'react';

const PoliticianDetail = ({politician}) => {

  if (!politician || politician.length <= 0) {
    return <div>Loading...</div>;
  }

  const alternativeNames = politician.alternative_names.map((item) => {
    return item.name;
  });

  const politicalParties = politician.political_parties.map((item) => {
    return item.political_party.siglum;
  });

  let picture = ''
  if (!politician.picture) {
    picture = <div><span className="glyphicon glyphicon-user" aria-hidden="true"></span>Sem Foto</div>;
  } else {
    picture = <img src={politician.picture} className="politician-picture" />;
  }

  return (
    <div className="">
      <div className="col-lg-4">{picture}</div>
      <div className="col-lg-8">
        <div className="politician-name">{politician.name}</div>
        <div className="details">
          <p>Sexo: {politician.gender == 'M' ? 'Masculino' : 'Feminino'}</p>
          <p>Nacionalidade: {politician.nationality.name}</p>
          <p>Partido: {politicalParties}</p>
          <p>Estado civil: {politician.marital_status.name}</p>
          <p>Ocupação: {politician.occupation.name}</p>
          <p>Escolaridade: {politician.education.name}</p>
          <p>Data de nascimento: {politician.date_of_birth}</p>
          <p>Nacionalidade: {politician.nationality.name}</p>
          <p>Naturalidade: {politician.place_of_birth}/{politician.state.name}</p>
          <p>Nomes Alternativos: {alternativeNames}</p>
          <p>Cor/Raça: {politician.ethnicity ? politician.ethnicity.name : null}</p>
          <p>Email: {politician.email}</p>
          <p>Website: {politician.website}</p>
        </div>
      </div>
    </div>
  );
};

export default PoliticianDetail;
