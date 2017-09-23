'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CandidacyListItem = function CandidacyListItem(_ref) {
  var candidacy = _ref.candidacy;

  var status = candidacy.elected ? 'Eleito' : 'Não eleito';
  var round_number = candidacy.election_round.round_number;

  var info = '';
  if (candidacy.city && candidacy.state) {
    info = 'em ' + candidacy.city.name + '/' + candidacy.state.siglum;
  } else if (candidacy.state) {
    info = 'em ' + candidacy.state.name;
  }

  return _react2.default.createElement(
    'div',
    { className: 'candidacy-list-item' },
    status,
    ' no ',
    round_number,
    '\xB0 turno para',
    ' ',
    candidacy.political_office.name,
    ' ',
    info
  );
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

CandidacyListItem.propTypes = {
  candidacy: _propTypes2.default.object
};

var CandidacyList = function CandidacyList(_ref2) {
  var candidacies = _ref2.candidacies;

  var candidacyItems = candidacies.map(function (candidacy) {
    return _react2.default.createElement(CandidacyListItem, { key: candidacy.id, candidacy: candidacy });
  });

  return _react2.default.createElement(
    'dd',
    null,
    candidacyItems
  );
};

CandidacyList.propTypes = {
  candidacies: _propTypes2.default.array
};

var CandidacyYear = function CandidacyYear(props) {
  return _react2.default.createElement(
    'dl',
    { className: 'dl-horizontal' },
    _react2.default.createElement(
      'dt',
      null,
      props.year
    ),
    _react2.default.createElement(CandidacyList, { candidacies: props.candidacies[props.year] })
  );
};

CandidacyYear.propTypes = {
  year: _propTypes2.default.string,
  candidacies: _propTypes2.default.object
};

var PoliticianCandidacies = function PoliticianCandidacies(props) {
  var candidacies = _lodash2.default.groupBy(props.data, function (x) {
    return new Date(x.election_round.date).getFullYear();
  });
  var candidacyYears = Object.keys(candidacies).map(function (year) {
    return _react2.default.createElement(CandidacyYear, { key: year, year: year, candidacies: candidacies });
  });

  return _react2.default.createElement(
    'div',
    { className: 'panel panel-info candidacies' },
    _react2.default.createElement(
      'div',
      { className: 'panel-heading' },
      _react2.default.createElement(
        'h3',
        { className: 'panel-title' },
        'Candidaturas'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'panel-body' },
      candidacyYears
    )
  );
};

PoliticianCandidacies.propTypes = {
  candidacy: _propTypes2.default.object,
  candidacies: _propTypes2.default.object,
  year: _propTypes2.default.number,
  data: _propTypes2.default.array
};

exports.default = PoliticianCandidacies;