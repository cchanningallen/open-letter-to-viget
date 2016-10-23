import './Tag.scss';

import React, {PropTypes, Component} from 'react';
import cx from 'classnames';
import { COLORS } from 'theme/constants';

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
      <small className={cx('Tag', {[`Tag--${color}`]: color})}>
        {children}
      </small>
    );
  }
}

export default Tag;
