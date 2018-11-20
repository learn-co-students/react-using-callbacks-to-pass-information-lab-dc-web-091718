import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  clickFn = () => {
    debugger
    const newColor = this.props.getColor()
    this.setState({
      color: newColor
    })
  }


  render() {
    return (
      <div className="cell" onClick={this.clickFn} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
