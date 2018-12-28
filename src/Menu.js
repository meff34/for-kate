import React from "react"
import styled from "styled-components"

const Layout = styled.div`
  padding: 10px;

  label {
    display: inline-block;
    padding-right: 5px;
  }
`

export default props => (
  <Layout>
    <label htmlFor="memberState">
      memberState:
    </label>

    <select
      onChange={props.onMemberStateSelect}
      name="memberState"
      id="memberState"
      value={props.memberState}
    >
      <option value="active">active</option>
      <option value="checkbox">checkbox</option>
      <option value="disabled">disabled</option>
    </select>
  </Layout>
)
