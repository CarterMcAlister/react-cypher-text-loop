import React, { Component } from 'react'
import styled from 'styled-components'

import CypherText from 'react-cypher-text-loop'

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <CypherTextStyled textList={['React', 'Cypher', 'Text', 'Loop']} />
        </Container>

        <Container>
          <LinkButton
            className="link"
            target="_blank"
            href="https://github.com/CarterMcAlister/react-cypher-text-loop"
          >
            View on GitHub
          </LinkButton>
          <LinkButton
            className="link"
            target="_blank"
            href="https://www.npmjs.com/package/react-cypher-text-loop"
          >
            View on NPM
          </LinkButton>
        </Container>
      </Wrapper>
    )
  }
}

const CypherTextStyled = styled(CypherText)`
  color: #fff;
  font-size: 3rem;
`

const Wrapper = styled.div`
  background: #373f51;
  height: 80vh;
  padding-top: 20vh;
  font-family: 'Courier New', Courier, monospace;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
const LinkButton = styled.a`
  background-color: #f6f9fc;
  color: black;
  padding: 1em 1.5em;
  text-decoration: none;
  margin: 10px;
  border-radius: 0.25rem;
  min-width: 140px;
  display: flex;
  justify-content: center;
`
