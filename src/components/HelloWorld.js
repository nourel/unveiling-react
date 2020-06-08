import React, { Component } from 'react'

class HelloWorld extends Component {
  // UNSAFE_componentWillMount()
  componentDidMount() {
    console.log('HelloWorld Component Mounted!')
  }

  // UNSAFE_componentWillUpdate()
  // UNSAFE_componentWillReceiveProps()
  componentDidUpdate() {
    console.log('HelloWorld Component Updated!')
  }

  componentWillUnmount() {
    console.log('HelloWorld Component Unmounted!')
  }


  render() {
    const { text } = this.props
    return (
      <div className="component">Hello World ! {text}</div>
    )
  }
}

export default HelloWorld;