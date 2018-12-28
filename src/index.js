import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Openable from './Openable.js'
import Menu from './Menu.js'
import MeetingWrap from './MeetingWrap.js';

const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`

class App extends Component {
  state = {
    memberState: 'active'
  }

  onMemberStateSelect = evt =>
    this.setState({
      memberState: evt.target.value
    })

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Menu
            onMemberStateSelect={this.onMemberStateSelect}
            memberState={this.state.memberState}
          />

          <Openable>
            <MeetingWrap memberState={this.state.memberState} />
          </Openable>
        </Layout>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
