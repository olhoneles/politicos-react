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

export const EDUCATION_LIST = "EDUCATION_LIST";
export const EDUCATION_SELECTED = "EDUCATION_SELECTED";

// Action creators
export const changeEducationList = list => ({
  type: EDUCATION_LIST,
  list
});

export const changeEducationSelected = selected => ({
  type: EDUCATION_SELECTED,
  selected
});

// Reducer
const INITIAL_STATE = {
  list: null,
  selected: null,
  query: "education__name__in"
};

const educationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDUCATION_LIST:
      return {
        ...state,
        list: action.list
      };
    case EDUCATION_SELECTED:
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default educationReducer;
