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

export const POLITICAL_OFFICE_LIST = "POLITICAL_OFFICE_LIST";
export const POLITICAL_OFFICE_SELECTED = "POLITICAL_OFFICE_SELECTED";

// Action creators
export const changePoliticalOfficeList = list => ({
  type: POLITICAL_OFFICE_LIST,
  list
});

export const changePoliticalOfficeSelected = selected => ({
  type: POLITICAL_OFFICE_SELECTED,
  selected
});

// Reducer
const INITIAL_STATE = {
  list: null,
  selected: null,
  query: "candidacies__political_office__slug__in"
};

const politicalOfficeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POLITICAL_OFFICE_LIST:
      return {
        ...state,
        list: action.list
      };
    case POLITICAL_OFFICE_SELECTED:
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default politicalOfficeReducer;
