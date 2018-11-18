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

export const ELECTED_LIST = "ELECTED_LIST";
export const ELECTED_SELECTED = "ELECTED_SELECTED";

// Action creators
export const changeElectedList = list => ({
  type: ELECTED_LIST,
  list
});

export const changeElectedSelected = selected => ({
  type: ELECTED_SELECTED,
  selected
});

// Reducer
const INITIAL_STATE = {
  list: null,
  selected: null,
  query: "candidacies__elected__in"
};

const electedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ELECTED_LIST:
      return {
        ...state,
        list: action.list
      };
    case ELECTED_SELECTED:
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default electedReducer;
