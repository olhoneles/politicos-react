/*
 * Copyright (c) 2017, Marcelo Jorge Vieira <metal@alucinados.com>
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

export const POLITICAL_PARTY_LIST = "POLITICAL_PARTY_LIST";
export const POLITICAL_PARTY_SELECTED = "POLITICAL_PARTY_SELECTED";

// Action creators
export const changePoliticalPartyList = list => ({
  type: POLITICAL_PARTY_LIST,
  list
});

export const changePoliticalPartySelected = selected => ({
  type: POLITICAL_PARTY_SELECTED,
  selected
});

// Reducer
const INITIAL_STATE = {
  list: null,
  selected: null,
  query: "political_parties__political_party__siglum__in"
};

const politicalPartyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POLITICAL_PARTY_LIST:
      return {
        ...state,
        list: action.list
      };
    case POLITICAL_PARTY_SELECTED:
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default politicalPartyReducer;
