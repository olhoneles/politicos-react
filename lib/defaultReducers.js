'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cityDuck = require('./select/cityDuck');

var _cityDuck2 = _interopRequireDefault(_cityDuck);

var _educationDuck = require('./select/educationDuck');

var _educationDuck2 = _interopRequireDefault(_educationDuck);

var _electedDuck = require('./select/electedDuck');

var _electedDuck2 = _interopRequireDefault(_electedDuck);

var _electionDuck = require('./select/electionDuck');

var _electionDuck2 = _interopRequireDefault(_electionDuck);

var _genderDuck = require('./select/genderDuck');

var _genderDuck2 = _interopRequireDefault(_genderDuck);

var _maritalStatusDuck = require('./select/maritalStatusDuck');

var _maritalStatusDuck2 = _interopRequireDefault(_maritalStatusDuck);

var _occupationDuck = require('./select/occupationDuck');

var _occupationDuck2 = _interopRequireDefault(_occupationDuck);

var _politiciansDuck = require('./select/politiciansDuck');

var _politiciansDuck2 = _interopRequireDefault(_politiciansDuck);

var _politicianDuck = require('./select/politicianDuck');

var _politicianDuck2 = _interopRequireDefault(_politicianDuck);

var _politicalPartyDuck = require('./select/politicalPartyDuck');

var _politicalPartyDuck2 = _interopRequireDefault(_politicalPartyDuck);

var _politicalOfficeDuck = require('./select/politicalOfficeDuck');

var _politicalOfficeDuck2 = _interopRequireDefault(_politicalOfficeDuck);

var _stateDuck = require('./select/stateDuck');

var _stateDuck2 = _interopRequireDefault(_stateDuck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var defaultReducers = {
  city: _cityDuck2.default,
  education: _educationDuck2.default,
  elected: _electedDuck2.default,
  election: _electionDuck2.default,
  gender: _genderDuck2.default,
  maritalStatus: _maritalStatusDuck2.default,
  occupation: _occupationDuck2.default,
  politicalOffice: _politicalOfficeDuck2.default,
  politicalParty: _politicalPartyDuck2.default,
  politician: _politicianDuck2.default,
  politicians: _politiciansDuck2.default,
  state: _stateDuck2.default
};

exports.default = defaultReducers;