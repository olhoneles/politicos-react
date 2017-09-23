'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPolitician = exports.changePoliticianSelected = exports.changePoliticianList = exports.POLITICIAN_SELECTED = exports.POLITICIAN_LIST = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
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

var _HTTPClient = require('../HTTPClient');

var _HTTPClient2 = _interopRequireDefault(_HTTPClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var POLITICIAN_LIST = exports.POLITICIAN_LIST = 'POLITICIAN_LIST';
var POLITICIAN_SELECTED = exports.POLITICIAN_SELECTED = 'POLITICIAN_SELECTED';

// Action creators
var changePoliticianList = exports.changePoliticianList = function changePoliticianList(list) {
  return {
    type: POLITICIAN_LIST,
    list: list
  };
};

var changePoliticianSelected = exports.changePoliticianSelected = function changePoliticianSelected(selected) {
  return {
    type: POLITICIAN_SELECTED,
    selected: selected
  };
};

// Side-effects / thunks

var fetchPolitician = exports.fetchPolitician = function fetchPolitician(selected) {
  return function (dispatch) {
    var filter = selected != '' ? '?q=' + selected : '';
    return _HTTPClient2.default.get('/politicians/search/' + filter).then(function (response) {
      dispatch(changePoliticianList(response.data));
    });
  };
};

// Reducer
var INITIAL_STATE = {
  list: null,
  selected: null,
  query: 'name__in'
};

var politicianReducer = function politicianReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case POLITICIAN_LIST:
      return _extends({}, state, {
        list: action.list
      });
    case POLITICIAN_SELECTED:
      return _extends({}, state, {
        selected: action.selected
      });
    default:
      return state;
  }
};

exports.default = politicianReducer;