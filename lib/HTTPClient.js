'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var politicosAPIURL = 'http://politicos.olhoneles.org/api/v0'; /*
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

var HTTPClient = {
  get: function get(url) {
    return _axios2.default.get(politicosAPIURL + url);
  }
};

exports.default = HTTPClient;