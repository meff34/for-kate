import React from 'react';
import styled from 'styled-components'



export default (props) => (
  <ul>
    {Object.keys(props.members)
      .sort((a, b) => a - b)
      .map(memberId => {
        const member = props.members[memberId]

        return (
          <li key={member.id}>
            <label>
              <input type="checkbox" checked={member.visited} onChange={() => props.onClick(member.id)} />
              {member.name}
            </label>
          </li>
        )
      })}
  </ul>
)
