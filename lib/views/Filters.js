'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filters = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _HTTPClient = require('../HTTPClient');

var _HTTPClient2 = _interopRequireDefault(_HTTPClient);

var _politiciansDuck = require('../select/politiciansDuck');

var _select = require('../select');

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

var Filters = exports.Filters = function (_Component) {
  _inherits(Filters, _Component);

  function Filters() {
    _classCallCheck(this, Filters);

    return _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).apply(this, arguments));
  }

  _createClass(Filters, [{
    key: 'onChangeQuery',
    value: function onChangeQuery() {
      var _this2 = this;

      this.props.dispatch((0, _politiciansDuck.resetPoliticiansList)());

      var state = this.props.state;
      var queryString = new URLSearchParams();

      // FIXME: only select component
      Object.keys(state).map(function (objectKey) {
        var obj = state[objectKey];
        if (!obj.selected) {
          return;
        }
        obj.selected.map(function (item) {
          return queryString.set(obj.query, item.value);
        });
      });

      _HTTPClient2.default.get('/politicians?' + queryString.toString()).then(function (result) {
        _this2.props.dispatch((0, _politiciansDuck.changePoliticiansList)(result.data));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'filter-row row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(_select.SelectPolitician, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'filter-row row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectPoliticalParty, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectPoliticalOffice, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'filter-row row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectEducation, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectElection, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'filter-row row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectState, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectCity, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'filter-row row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectElected, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectGender, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'filter-row row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectOccupation, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-lg-6' },
            _react2.default.createElement(_select.SelectMaritalStatus, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'filter-row row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-primary',
                onClick: this.onChangeQuery.bind(this)
              },
              'Filtrar'
            )
          )
        )
      );
    }
  }]);

  return Filters;
}(_react.Component);

/* istanbul ignore next */


var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

Filters.propTypes = {
  state: _propTypes2.default.object,
  dispatch: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Filters);