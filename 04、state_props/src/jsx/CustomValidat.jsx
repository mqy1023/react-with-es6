import React from 'react';

class CustomValidate extends React.Component {
  render() {
    return <Title text="12345" />
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`); // 没找到属性
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was too short`); // 属性值的长度太短
    }
  }
}

export default CustomValidate;
