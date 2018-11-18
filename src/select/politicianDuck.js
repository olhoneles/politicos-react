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

import HTTPClient from "../HTTPClient";

export const POLITICIAN_LIST = "POLITICIAN_LIST";
export const POLITICIAN_SELECTED = "POLITICIAN_SELECTED";

// Action creators
export const changePoliticianList = list => ({
  type: POLITICIAN_LIST,
  list
});

export const changePoliticianSelected = selected => ({
  type: POLITICIAN_SELECTED,
  selected
});

// Side-effects / thunks

export const fetchPolitician = selected => {
  return dispatch => {
    const filter = selected !== "" ? "?q=" + selected : "";
    return HTTPClient.get("/politicians/search/" + filter).then(response => {
      dispatch(changePoliticianList(response.data));
    });
  };
};

// Reducer
const INITIAL_STATE = {
  list: null,
  selected: null,
  query: "name__in"
};

const politicianReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POLITICIAN_LIST:
      return {
        ...state,
        list: action.list
      };
    case POLITICIAN_SELECTED:
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default politicianReducer;
