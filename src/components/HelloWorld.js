import React, { Component } from 'react'

// functional component
const HelloWorld = (props) => {
  const { text } = props

  return (
    <div className="component">Hello World ! {text}</div>
  )
}

export default HelloWorld;