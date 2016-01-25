'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

const {React} = require('react-for-atom');
const {PropTypes} = React;

class HomeFeatureComponent extends React.Component {

  render(): ReactElement {
    const {title, command} = this.props;
    return (
      <details className="nuclide-home-card">
        <summary className={`nuclide-home-summary icon icon-${this.props.icon}`}>
          {title}
          {command ? <button
            className="pull-right btn btn-sm nuclide-home-tryit"
            onClick={() => atom.commands.dispatch(atom.views.getView(atom.workspace), command)}>
            Try it
          </button> : null}
        </summary>
        <div className="nuclide-home-detail">
          {this.props.description}
        </div>
      </details>
    );
  }

}

HomeFeatureComponent.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  command: PropTypes.string,
};

module.exports = HomeFeatureComponent;
