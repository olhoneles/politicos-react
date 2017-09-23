'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _es6PromiseDebounce = require('es6-promise-debounce');

var _es6PromiseDebounce2 = _interopRequireDefault(_es6PromiseDebounce);

var _HTTPClient = require('../HTTPClient');

var _HTTPClient2 = _interopRequireDefault(_HTTPClient);

var _Multiselect = require('../components/Multiselect');

var _Multiselect2 = _interopRequireDefault(_Multiselect);

var _politicianDuck = require('./politicianDuck');

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

var SelectPolitician = function (_Component) {
  _inherits(SelectPolitician, _Component);

  function SelectPolitician() {
    _classCallCheck(this, SelectPolitician);

    return _possibleConstructorReturn(this, (SelectPolitician.__proto__ || Object.getPrototypeOf(SelectPolitician)).apply(this, arguments));
  }

  _createClass(SelectPolitician, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _HTTPClient2.default.get('/politicians/search').then(function (result) {
        _this2.props.dispatch((0, _politicianDuck.changePoliticianList)(result.data));
      });
    }
  }, {
    key: 'getOptions',
    value: function getOptions(input, callback) {
      var politician = this.props.list.objects.map(function (item) {
        return { label: item.name, value: item.name };
      });
      return (0, _Multiselect.getOptionsCallback)(input, callback, politician);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.props.list) {
        return null;
      }

      return _react2.default.createElement(_Multiselect2.default, {
        label: 'Pol\xEDticos',
        placeholder: 'Escolha uma ou v\xE1rios pol\xEDticos...',
        loadOptions: this.getOptions.bind(this),
        onChange: function onChange(selected) {
          return _this3.props.dispatch((0, _politicianDuck.changePoliticianSelected)(selected));
        },
        onInputChange: (0, _es6PromiseDebounce2.default)(function (selected) {
          return _this3.props.dispatch((0, _politicianDuck.fetchPolitician)(selected));
        }, 500),
        value: this.props.selected
      });
    }
  }]);

  return SelectPolitician;
}(_react.Component);

/* istanbul ignore next */


var mapStateToProps = function mapStateToProps(_ref) {
  var politician = _ref.politician;

  return {
    list: politician.list,
    selected: politician.selected
  };
};

SelectPolitician.propTypes = {
  dispatch: _propTypes2.default.func,
  list: _propTypes2.default.object,
  selected: _propTypes2.default.array
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SelectPolitician);