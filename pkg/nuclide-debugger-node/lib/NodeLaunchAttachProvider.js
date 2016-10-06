Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var _nuclideDebuggerBase2;

function _nuclideDebuggerBase() {
  return _nuclideDebuggerBase2 = require('../../nuclide-debugger-base');
}

var _reactForAtom2;

function _reactForAtom() {
  return _reactForAtom2 = require('react-for-atom');
}

var _LaunchAttachDispatcher2;

function _LaunchAttachDispatcher() {
  return _LaunchAttachDispatcher2 = _interopRequireDefault(require('./LaunchAttachDispatcher'));
}

var _LaunchAttachStore2;

function _LaunchAttachStore() {
  return _LaunchAttachStore2 = require('./LaunchAttachStore');
}

var _AttachUIComponent2;

function _AttachUIComponent() {
  return _AttachUIComponent2 = require('./AttachUIComponent');
}

var _LaunchAttachActions2;

function _LaunchAttachActions() {
  return _LaunchAttachActions2 = require('./LaunchAttachActions');
}

var NodeLaunchAttachProvider = (function (_DebuggerLaunchAttachProvider) {
  _inherits(NodeLaunchAttachProvider, _DebuggerLaunchAttachProvider);

  function NodeLaunchAttachProvider(debuggingTypeName, targetUri) {
    _classCallCheck(this, NodeLaunchAttachProvider);

    _get(Object.getPrototypeOf(NodeLaunchAttachProvider.prototype), 'constructor', this).call(this, debuggingTypeName, targetUri);
    this._dispatcher = new (_LaunchAttachDispatcher2 || _LaunchAttachDispatcher()).default();
    this._actions = new (_LaunchAttachActions2 || _LaunchAttachActions()).LaunchAttachActions(this._dispatcher, this.getTargetUri());
    this._store = new (_LaunchAttachStore2 || _LaunchAttachStore()).LaunchAttachStore(this._dispatcher);
  }

  _createClass(NodeLaunchAttachProvider, [{
    key: 'getActions',
    value: function getActions() {
      return ['Attach'];
    }
  }, {
    key: 'getComponent',
    value: function getComponent(action) {
      if (action === 'Attach') {
        this._actions.updateAttachTargetList();
        return (_reactForAtom2 || _reactForAtom()).React.createElement((_AttachUIComponent2 || _AttachUIComponent()).AttachUIComponent, { store: this._store, actions: this._actions });
      } else {
        return null;
      }
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      this._store.dispose();
      this._actions.dispose();
    }
  }]);

  return NodeLaunchAttachProvider;
})((_nuclideDebuggerBase2 || _nuclideDebuggerBase()).DebuggerLaunchAttachProvider);

exports.NodeLaunchAttachProvider = NodeLaunchAttachProvider;