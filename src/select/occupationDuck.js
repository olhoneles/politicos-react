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

export const OCCUPATION_LIST = "OCCUPATION_LIST";
export const OCCUPATION_SELECTED = "OCCUPATION_SELECTED";

// Action creators
export const changeOccupationList = list => ({
  type: OCCUPATION_LIST,
  list
});

export const changeOccupationSelected = selected => ({
  type: OCCUPATION_SELECTED,
  selected
});

// Side-effects / thunks

export const fetchOccupation = selected => {
  return dispatch => {
    const filter = selected !== "" ? "?q=" + selected : "";
    return HTTPClient.get("/occupations/search/" + filter).then(response => {
      dispatch(changeOccupationList(response.data));
    });
  };
};

// Reducer
const INITIAL_STATE = {
  list: null,
  selected: null,
  query: "occupation__slug__in"
};

const occupationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OCCUPATION_LIST:
      return {
        ...state,
        list: action.list
      };
    case OCCUPATION_SELECTED:
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default occupationReducer;
