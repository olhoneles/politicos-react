'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PoliticiansList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _HTTPClient = require('../HTTPClient');

var _HTTPClient2 = _interopRequireDefault(_HTTPClient);

var _PoliticiansListItem = require('./PoliticiansListItem');

var _PoliticiansListItem2 = _interopRequireDefault(_PoliticiansListItem);

var _politiciansDuck = require('../select/politiciansDuck');

var _Loading = require('../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

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

var PoliticiansList = exports.PoliticiansList = function (_Component) {
  _inherits(PoliticiansList, _Component);

  function PoliticiansList() {
    _classCallCheck(this, PoliticiansList);

    return _possibleConstructorReturn(this, (PoliticiansList.__proto__ || Object.getPrototypeOf(PoliticiansList)).apply(this, arguments));
  }

  _createClass(PoliticiansList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _HTTPClient2.default.get('/politicians/').then(function (politicians) {
        _this2.props.dispatch((0, _politiciansDuck.changePoliticiansList)(politicians.data));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.props.data) {
        return _react2.default.createElement(_Loading2.default, null);
      }

      var politicianItems = this.props.data.map(function (politician) {
        return _react2.default.createElement(_PoliticiansListItem2.default, {
          onPoliticianSelect: _this3.props.onPoliticianSelect,
          key: politician.id,
          politician: politician
        });
      });

      return _react2.default.createElement(
        'ul',
        { className: 'col-lg-12 list-group politicians' },
        politicianItems
      );
    }
  }]);

  return PoliticiansList;
}(_react.Component);

/* istanbul ignore next */


var mapStateToProps = function mapStateToProps(_ref) {
  var politicians = _ref.politicians;

  return {
    data: politicians.objects
  };
};

PoliticiansList.propTypes = {
  data: _propTypes2.default.array,
  dispatch: _propTypes2.default.func,
  onPoliticianSelect: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PoliticiansList);