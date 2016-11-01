import './Section.scss';

import React, {PureComponent, PropTypes} from 'react';
import FA from 'react-fontawesome';

import cxHelpers from 'lib/decorators/classNameHelpers';
import SectionTitle from 'components/atoms/SectionTitle';

@cxHelpers("Section")
class Section extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    expandable: PropTypes.bool
  };

  static defaultProps = {
    expandable: true
  };

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { expanded } = this.state;
    const { title, children, expandable } = this.props;

    return (
      <div className={this.cx()}>
        <SectionTitle
          className={this.cxEl('title')}
          onClick={this.handleClick}
          icon={expandable ? <FA name={expanded ? "minus" : "plus"} /> : null}>
          {title}
        </SectionTitle>
        <div className={this.cxEl('content', !expandable || expanded ? 'expanded' : '')}>
          {children}
        </div>
        { expandable
          ? <a onClick={this.handleClick}>
              <div className={this.cxEl('footer')}>
                <FA className={this.cxEl('footer-icon')} name={expanded ? 'angle-up' : 'angle-down'}/>
              </div>
            </a>
          : null
        }
      </div>
    );
  }
}

export default Section;
