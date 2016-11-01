import './Tag.scss';

import React, {PropTypes, Component} from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import { COLORS } from 'theme/constants';

@cxHelpers
class Tag extends Component {
  static propTypes = {
    color: PropTypes.oneOf(COLORS)
  };

  static defaultProps = {
    color: COLORS[0]
  };

  render() {
    const { color, children } = this.props;

    return (
      <small className={this.cx(color)}>
        {children}
      </small>
    );
  }
}

export default Tag;
