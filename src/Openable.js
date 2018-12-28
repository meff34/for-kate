import React from "react"
import styled from "styled-components"

const Button = styled.button`
  font-size: 20px;
`


export default class Meeting extends React.Component {
  state = {
    isOpen: true,
  }

  onOpenChange = () =>
    this.setState(state => ({
      isOpen: !state.isOpen
    }))

  render() {
    return (
      <div>
        <label>
          <Button onClick={this.onOpenChange}>
            {this.state.isOpen ? '🔓' : '🔒'}
          </Button>
        </label>

        {this.state.isOpen && this.props.children}

      </div>
    )
  }
}
