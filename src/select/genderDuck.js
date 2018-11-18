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

export const GENDER_LIST = "GENDER_LIST";
export const GENDER_SELECTED = "GENDER_SELECTED";

// Action creators
export const changeGenderList = list => ({
  type: GENDER_LIST,
  list
});

export const changeGenderSelected = selected => ({
  type: GENDER_SELECTED,
  selected
});

// Reducer
const INITIAL_STATE = {
  list: null,
  selected: null,
  query: "gender__in"
};

const genderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENDER_LIST:
      return {
        ...state,
        list: action.list
      };
    case GENDER_SELECTED:
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
};

export default genderReducer;
