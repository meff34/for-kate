import React from 'react'

export default class NewMember extends React.Component {
  state = {
    memberName: '',
  }

  onMemberNameChange = (evt) => this.setState({
    memberName: evt.target.value,
  })

  onAdd = () => {
    this.props.onAddMember(this.state.memberName)
    this.setState({memberName: ''})
  }

  render() {
    return (
      <React.Fragment>
        <input placeholder="new member" type="text" value={this.state.memberName} onChange={this.onMemberNameChange} />
        <button onClick={this.onAdd}>add</button>
      </React.Fragment>
    )
  }
}
