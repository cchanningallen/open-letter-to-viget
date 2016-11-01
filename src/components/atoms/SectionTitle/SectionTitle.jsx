import './SectionTitle.scss';

import React, {PureComponent, PropTypes} from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';

@cxHelpers class SectionTitle extends PureComponent {
  static propTypes = {};

  render() {
    const { onClick, icon, children } = this.props;
    return (
      <a onClick={onClick}>
        <h6 className={this.cx()}>
          {children}
          <div className={this.cxEl('icon')}>{icon}</div>
          <hr className={this.cxEl('line')}/>
        </h6>
      </a>
    );
  }
}

export default SectionTitle;
