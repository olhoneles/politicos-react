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

export const POLITICIANS_CHANGE = "POLITICIANS_CHANGE";
export const POLITICIANS_RESET = "POLITICIANS_RESET";

// Action creators
export const changePoliticiansList = politicians => ({
  type: POLITICIANS_CHANGE,
  politicians
});

export const resetPoliticiansList = () => ({
  type: POLITICIANS_RESET
});

// Reducer
const INITIAL_STATE = {};

const listPoliticiansReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POLITICIANS_CHANGE:
      return {
        ...state,
        objects: action.politicians.objects,
        meta: action.politicians.meta
      };
    case POLITICIANS_RESET:
      return {
        ...state,
        meta: null,
        objects: null
      };
    default:
      return state;
  }
};

export default listPoliticiansReducer;
