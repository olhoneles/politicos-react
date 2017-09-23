'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptionsCallback = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOptionsCallback = exports.getOptionsCallback = function getOptionsCallback(input, callback, opts) {
  setTimeout(function () {
    callback(null, { options: opts, complete: true });
  }, 500);
}; /*
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

var Multiselect = function Multiselect(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      value = _ref.value,
      loadOptions = _ref.loadOptions,
      onChange = _ref.onChange,
      onInputChange = _ref.onInputChange;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      label
    ),
    _react2.default.createElement(_reactSelect2.default.Async, {
      placeholder: placeholder,
      multi: true,
      value: value,
      loadOptions: loadOptions,
      onChange: onChange,
      onInputChange: onInputChange
    })
  );
};

Multiselect.propTypes = {
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.array,
  loadOptions: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onInputChange: _propTypes2.default.func
};

exports.default = Multiselect;