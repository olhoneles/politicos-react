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

export const CITY_LIST = "CITY_LIST";
export const CITY_SELECTED = "CITY_SELECTED";

// Action creators
export const changeCityList = list => ({
  type: CITY_LIST,
  list
});

export const changeCitySelected = selected => ({
  type: CITY_SELECTED,
  selected
});

// Side-effects / thunks

export const fetchCity = selected => {
  return dispatch => {
    const filter = selected !== "" ? "?q=" + selected : "";
    return HTTPClient.get("/cities/search/" + filter).then(response => {
      dispatch(changeCityList(response.data));
    });
  };
};

// Reducer
const INITIAL_STATE = {
  list: null,
  selected: null,
  query: "candidacies__city__name__in"
};

const cityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CITY_LIST:
      return {
        ...state,
        list: action.list
      };
    case CITY_SELECTED:
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default cityReducer;
