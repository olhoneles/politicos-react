'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PoliticianCandidacies = require('./PoliticianCandidacies');

var _PoliticianCandidacies2 = _interopRequireDefault(_PoliticianCandidacies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var PoliticianDetail = function (_Component) {
  _inherits(PoliticianDetail, _Component);

  function PoliticianDetail(props) {
    _classCallCheck(this, PoliticianDetail);

    var _this = _possibleConstructorReturn(this, (PoliticianDetail.__proto__ || Object.getPrototypeOf(PoliticianDetail)).call(this, props));

    _this.politician = _this.props.politician;
    return _this;
  }

  _createClass(PoliticianDetail, [{
    key: 'render',
    value: function render() {
      if (!this.politician || this.politician.length <= 0) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }

      var alternativeNames = this.politician.alternative_names.map(function (item) {
        return item.name;
      });

      var politicalParties = this.politician.political_parties.map(function (item) {
        return item.political_party.siglum;
      }).join(', ');

      var picture = '';
      if (!this.politician.picture) {
        picture = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-user', 'aria-hidden': 'true' }),
          'Sem Foto'
        );
      } else {
        picture = _react2.default.createElement('img', { src: this.politician.picture, className: 'politician-picture' });
      }

      var politicianName = void 0;
      if (this.politician.alternative_names && this.politician.name != this.politician.alternative_names[0].name) {
        politicianName = this.politician.alternative_names[0].name + ' (' + this.politician.name + ')';
      } else {
        politicianName = this.politician.name;
      }

      var gender = void 0;
      if (this.politician.gender == 'M') {
        gender = 'Masculino';
      } else if (this.politician.gender == 'F') {
        gender = 'Feminino';
      } else {
        gender = 'Não informado';
      }

      return _react2.default.createElement(
        'div',
        { className: '' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement(
              'div',
              { className: 'politician-name' },
              politicianName
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-3' },
            picture
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-5' },
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement(
                'p',
                null,
                'Sexo: ',
                gender
              ),
              _react2.default.createElement(
                'p',
                null,
                'Partido: ',
                politicalParties
              ),
              _react2.default.createElement(
                'p',
                null,
                'Estado civil: ',
                this.politician.marital_status.name
              ),
              _react2.default.createElement(
                'p',
                null,
                'Ocupa\xE7\xE3o: ',
                this.politician.occupation.name
              ),
              _react2.default.createElement(
                'p',
                null,
                'Escolaridade: ',
                this.politician.education.name
              ),
              _react2.default.createElement(
                'p',
                null,
                'Data de nascimento: ',
                this.politician.date_of_birth
              ),
              _react2.default.createElement(
                'p',
                null,
                'Nacionalidade: ',
                this.politician.nationality.name
              ),
              _react2.default.createElement(
                'p',
                null,
                'Naturalidade: ',
                this.politician.place_of_birth,
                '/',
                this.politician.state ? this.politician.state.name : null
              ),
              _react2.default.createElement(
                'p',
                null,
                'Nomes Alternativos: ',
                alternativeNames
              ),
              _react2.default.createElement(
                'p',
                null,
                'Cor/Ra\xE7a:',
                ' ',
                this.politician.ethnicity ? this.politician.ethnicity.name : null
              ),
              _react2.default.createElement(
                'p',
                null,
                'Email: ',
                this.politician.email
              ),
              _react2.default.createElement(
                'p',
                null,
                'Website: ',
                this.politician.website
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-4' },
            _react2.default.createElement(_PoliticianCandidacies2.default, { data: this.politician.candidacies })
          )
        )
      );
    }
  }]);

  return PoliticianDetail;
}(_react.Component);

PoliticianDetail.propTypes = {
  politician: _propTypes2.default.object
};

exports.default = PoliticianDetail;