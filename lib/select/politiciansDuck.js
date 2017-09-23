'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var POLITICIANS_CHANGE = exports.POLITICIANS_CHANGE = 'POLITICIANS_CHANGE';
var POLITICIANS_RESET = exports.POLITICIANS_RESET = 'POLITICIANS_RESET';

// Action creators
var changePoliticiansList = exports.changePoliticiansList = function changePoliticiansList(politicians) {
  return {
    type: POLITICIANS_CHANGE,
    politicians: politicians
  };
};

var resetPoliticiansList = exports.resetPoliticiansList = function resetPoliticiansList() {
  return {
    type: POLITICIANS_RESET
  };
};

// Reducer
var INITIAL_STATE = {};

var listPoliticiansReducer = function listPoliticiansReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case POLITICIANS_CHANGE:
      return _extends({}, state, {
        objects: action.politicians.objects,
        meta: action.politicians.meta
      });
    case POLITICIANS_RESET:
      return _extends({}, state, {
        meta: null,
        objects: null
      });
    default:
      return state;
  }
};

exports.default = listPoliticiansReducer;