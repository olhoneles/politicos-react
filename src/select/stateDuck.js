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

export const STATE_LIST = "STATE_LIST";
export const STATE_SELECTED = "STATE_SELECTED";

// Action creators
export const changeStateList = list => ({
  type: STATE_LIST,
  list
});

export const changeStateSelected = selected => ({
  type: STATE_SELECTED,
  selected
});

// Reducer
const INITIAL_STATE = {
  list: null,
  selected: null,
  query: "candidacies__state__slug__in"
};

const stateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STATE_LIST:
      return {
        ...state,
        list: action.list
      };
    case STATE_SELECTED:
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default stateReducer;
