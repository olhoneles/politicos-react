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
import PoliticianListItem from './politician_list_item';

const PoliticianList = (props) => {
  const politicianItems = props.politicians.map((politician) => {
    return (
      <PoliticianListItem
        onPoliticianSelect={props.onPoliticianSelect}
        key={politician.id}
        politician={politician} />
    );
  });

  return (
    <ul className="col-lg-12 list-group politicians">
      {politicianItems}
    </ul>
  );
};

export default PoliticianList;
