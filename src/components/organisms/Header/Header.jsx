import './Header.scss';

import React, {PureComponent, PropTypes} from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import RotatingTypist from 'components/atoms/RotatingTypist';

const ABOUT_PAGE_URI = "https://www.viget.com/about";

@cxHelpers
class Header extends PureComponent {
  static propTypes = {
    day: PropTypes.string.isRequired,
    names: PropTypes.array.isRequired
  };

  render() {
    const { day, names } = this.props;

    return (
      <div className={this.cx()}>
        <h3 className={this.cxEl('title')}>
          Happy {day}, <RotatingTypist items={names} />
        </h3>
        <small className={this.cxEl('title-subtext')}>
          Scraped with ♥ from your <a target="_window" href={ABOUT_PAGE_URI}>about page</a>
        </small>
      </div>
    );
  }
}

export default Header;
