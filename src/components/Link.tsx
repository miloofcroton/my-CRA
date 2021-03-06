import React from 'react';

enum Status {
  hovered = 'hovered',
  normal = 'normal',
};

interface LinkProps {
  /** equivalent to href */
  page?: string,

  /** a default React property */
  children?: React.ReactNode,
  className?: string,
}

interface LinkState {
  class?: keyof typeof Status,
}

export default class Link extends React.Component<LinkProps, LinkState, {}> {
  state = {
    class: Status.normal,
  };

  onMouseEnter = () => {
    this.setState({ class: Status.hovered });
  }

  onMouseLeave = () => {
    this.setState({ class: Status.normal });
  }

  render(): React.ReactElement {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}
