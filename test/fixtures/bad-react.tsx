import React from 'react';

// Missing type definitions
export const badButton = (props) => {
  let isDisabled = false;

  // Using var instead of const/let
  const handleClick = function () {
    console.log('Button clicked');
    isDisabled = true;
  };

  // Not using self-closing tag
  if (props.hidden) {
    return <div></div>;
  }

  // Using double quotes, not using boolean shorthand, not sorting props
  return (
    <button type="button" disabled={isDisabled === true} onClick={handleClick} className={props.className}>
      {props.children}
    </button>
  );
};

// Class component instead of function component
export class BadClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Using non-arrow function
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    // Using unnecessary fragment
    return (
      <>
        <div>Count: {this.state.count}</div>
      </>
    );
  }
}
