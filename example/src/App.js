import React, { Component } from 'react'
import styled from 'styled-components'

import CypherText from 'react-cypher-text'

export default class App extends Component {
  render() {
    return (
      <div>
        <CypherText textList={['React', 'Cypher', 'Text']} />
      </div>
    )
  }
}
