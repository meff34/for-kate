import React from 'react';
import styled from 'styled-components'

const VisitedMember = styled.span`
  color: green;
`

const NotVisitedMember = styled.span`
  color: red;
`

export default (props) => (
  <ul>
    {Object.keys(props.members)
      .sort((a, b) => a - b)
      .map(memberId => {
        const member = props.members[memberId]

        return (
          member.visited
            ? (
              <li key={member.id}>
                был: <VisitedMember key={member.id}>{member.name}</VisitedMember>
              </li>
            )
            : (
              <li key={member.id}>
                не был: <NotVisitedMember key={member.id}>{member.name}</NotVisitedMember>
              </li>
            )
        )
      })
    }
  </ul>
)
