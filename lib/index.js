'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * Copyright (c) 2016, Marcelo Jorge Vieira <metal@alucinados.com>
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _defaultReducers = require('./defaultReducers');

var _defaultReducers2 = _interopRequireDefault(_defaultReducers);

var _PoliticiansList = require('./views/PoliticiansList');

var _PoliticiansList2 = _interopRequireDefault(_PoliticiansList);

var _Filters = require('./views/Filters');

var _Filters2 = _interopRequireDefault(_Filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  var rootReducers = (0, _redux.combineReducers)(_extends({}, _defaultReducers2.default));
  var store = (0, _redux.createStore)(rootReducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(_Filters2.default, null),
      _react2.default.createElement(_PoliticiansList2.default, null)
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('.main'));