import React, { Component, createRef } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

// RULE
// Component will re-render only when prop change or state change

// Mouting
// -> Constructor
// -> getDerivedStateFromProps
// -> render
// -> ComponentDidMount

// Update
// -> getDerivedStateFromProps
// -> shouldComponentUpdate
// -> render
// -> getSnapshotBeforeUpdate
// -> componentDidUpdate

// UnMount
// -> componentwillunmount

// Error
// -> getDerivedStateFromError
// -> componentDidCatch

class Modal extends Component {
  state = {
    isOpen: true,
  };

  h1Ref = createRef();

  // call only once when in render this component
  constructor(props) {
    super(props);
    // console.log("constructor");
    // fetch data from server
    // this.state = {
    //   isOpen: true,
    //   desc: `${props.description} and modal.js`,
    // };
    this.closeModal = this.closeModal.bind(this);
  }

  // whe ever my prop value or state value change that time this will call
  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps");
    return {
      ...state,
      desc: `${props.description} and modal.js`,
    };
  }

  // calls only once
  // to register events
  // fetch data
  // manipulat DOM
  componentDidMount() {
    document.addEventListener('mousemove', () => {
      console.log('mousemove');
    });

    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);

    this.h1Ref.current.style = 'color:green';
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate() {
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove');
    clearInterval(this.interval);
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  // to render HTML
  render() {
    // console.log("render");
    const { isOpen, desc } = this.state;
    return (
      <dialog open={isOpen}>
        <h1 ref={this.h1Ref}>{desc}</h1>
        <Button onClick={this.closeModal}>Close</Button>
        <Input type="text" />
      </dialog>
    );
  }
}

export default Modal;
