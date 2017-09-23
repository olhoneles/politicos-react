"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("span", { className: "glyphicon glyphicon-refresh glyphicon-refresh-animate" }),
    _react2.default.createElement(
      "span",
      null,
      "Loading..."
    )
  );
}; /*
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

exports.default = Loading;