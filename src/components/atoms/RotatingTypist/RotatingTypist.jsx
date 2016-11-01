import './RotatingTypist.scss';

import React, {PureComponent, PropTypes} from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Typist from 'react-typist';

@cxHelpers
class RotatingTypist extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentItemIndex: 0
    }
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    startDelay: PropTypes.number,
    endDelay: PropTypes.number,
    avgTypingDelay: PropTypes.number
  };

  static defaultProps = {
    startDelay: 250,
    endDelay: 2000,
    avgTypingDelay: 125
  };

  handleTypingDone = () => {
    const { currentItemIndex } = this.state;
    const { items, endDelay } = this.props;

    // Break when last item has been reached.
    if (currentItemIndex == items.length - 1) { return }

    setTimeout(() => {
      this.setState({ currentItemIndex: currentItemIndex + 1 })
    }, endDelay);
  };

  renderItems() {
    const { currentItemIndex } = this.state;
    const { items, startDelay, endDelay, avgTypingDelay } = this.props;
    const typistProps = {
      className: this.cxEl('text'),
      startDelay,
      avgTypingDelay,
      cursor: {
        hideWhenDone: true,
        hideWhenDoneDelay: endDelay
      },
      onTypingDone: this.handleTypingDone
    };

    return items.map((item, i) => {
      // Slight pause on first name for added effect.
      if (currentItemIndex === 0) { typistProps.startDelay = startDelay * 3 }

      return currentItemIndex === i
        ? <Typist key={i} {...typistProps}>{item}</Typist>
        : null
    })
  }

  render() {

    const { endDelay } = this.props;

    return (
      <span className={this.cx()}>
        {this.renderItems()}
      </span>
    );
  }
}

export default RotatingTypist;
