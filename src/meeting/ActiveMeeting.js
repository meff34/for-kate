import React from 'react';
import styled from 'styled-components'
import NewMember from '../atoms/NewMember';

export default (props) => (
  <ul>
    {Object.keys(props.members).length > 0
      ? Object.keys(props.members)
        .sort((a, b) => a - b)
        .map(memberId => {
          const member = props.members[memberId]
          return <li key={member.id}>{member.name}</li>
        })
      : <div>Тут пока никого нет</div>
    }

    <NewMember onAddMember={props.onAddMember} />
  </ul>
)
