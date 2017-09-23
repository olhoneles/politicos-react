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

var POLITICAL_PARTY_LIST = exports.POLITICAL_PARTY_LIST = 'POLITICAL_PARTY_LIST';
var POLITICAL_PARTY_SELECTED = exports.POLITICAL_PARTY_SELECTED = 'POLITICAL_PARTY_SELECTED';

// Action creators
var changePoliticalPartyList = exports.changePoliticalPartyList = function changePoliticalPartyList(list) {
  return {
    type: POLITICAL_PARTY_LIST,
    list: list
  };
};

var changePoliticalPartySelected = exports.changePoliticalPartySelected = function changePoliticalPartySelected(selected) {
  return {
    type: POLITICAL_PARTY_SELECTED,
    selected: selected
  };
};

// Reducer
var INITIAL_STATE = {
  list: null,
  selected: null,
  query: 'political_parties__political_party__siglum__in'
};

var politicalPartyReducer = function politicalPartyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case POLITICAL_PARTY_LIST:
      return _extends({}, state, {
        list: action.list
      });
    case POLITICAL_PARTY_SELECTED:
      return _extends({}, state, {
        selected: action.selected
      });
    default:
      return state;
  }
};

exports.default = politicalPartyReducer;