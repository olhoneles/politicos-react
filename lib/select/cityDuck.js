'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCity = exports.changeCitySelected = exports.changeCityList = exports.CITY_SELECTED = exports.CITY_LIST = undefined;

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

var CITY_LIST = exports.CITY_LIST = 'CITY_LIST';
var CITY_SELECTED = exports.CITY_SELECTED = 'CITY_SELECTED';

// Action creators
var changeCityList = exports.changeCityList = function changeCityList(list) {
  return {
    type: CITY_LIST,
    list: list
  };
};

var changeCitySelected = exports.changeCitySelected = function changeCitySelected(selected) {
  return {
    type: CITY_SELECTED,
    selected: selected
  };
};

// Side-effects / thunks

var fetchCity = exports.fetchCity = function fetchCity(selected) {
  return function (dispatch) {
    var filter = selected != '' ? '?q=' + selected : '';
    return _HTTPClient2.default.get('/cities/search/' + filter).then(function (response) {
      dispatch(changeCityList(response.data));
    });
  };
};

// Reducer
var INITIAL_STATE = {
  list: null,
  selected: null,
  query: 'candidacies__city__name__in'
};

var cityReducer = function cityReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case CITY_LIST:
      return _extends({}, state, {
        list: action.list
      });
    case CITY_SELECTED:
      return _extends({}, state, {
        selected: action.selected
      });
    default:
      return state;
  }
};

exports.default = cityReducer;