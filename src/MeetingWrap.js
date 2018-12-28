import React from 'react';
import DisabledMeeting from './meeting/DisabledMeeting';
import ActiveMeeting from './meeting/ActiveMeeting';
import CheckboxMeeting from './meeting/CheckboxMeeting';


const defaultMembers = {
  '0': {
    name: 'Лол',
    id: 0,
    visited: false,
  },
  '1': {
    name: 'Кек',
    id: 1,
    visited: true,
  },
  '2': {
    name: 'Чебурек',
    id: 2,
    visited: false,
  }
};

export default class MeetingWrap extends React.Component {
  state = {
    members: defaultMembers,
  }

  onAddMember = (member) => this.setState(state => ({
    members: [...state.members, {
      name: member,
      id: Object.keys(state.members).length,
      visited: false,
    }],
  }))

  onMemberVisitedChange = memberId => {
    const member = this.state.members[memberId]
    const oldMembers = Object.assign({}, this.state.members)

    delete oldMembers[memberId]

    const newMember = {
      ...member,
      visited: !member.visited,
    }

    this.setState(state => ({
      members: {...oldMembers, [memberId]: newMember}
    }))
  }

  render() {
    let View = DisabledMeeting;

    switch (this.props.memberState) {
      case 'active':
        View = () => <ActiveMeeting members={this.state.members} onAddMember={this.onAddMember} />
        break
      case 'checkbox':
        View = () => <CheckboxMeeting members={this.state.members} onClick={this.onMemberVisitedChange} />
        break
      case 'disabled':
        View = () => <DisabledMeeting members={this.state.members} />
        break
      default:
        throw new Error('memberState must be one of "active"/"disabled"/"checkbox"')
    }

    return (
      <React.Fragment>
        <p>current state: {this.props.memberState}</p>

        <View />
      </React.Fragment>
    )
  }

}
