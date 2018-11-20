import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: props.color
    }
  }

  handleClick = (event) => {
    //grab Matrix's state via getColor
    this.setState({color:this.props.getColor()})

    //set our state = Matrix's state
  }

  render() {
    return (
      <div className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }

}
