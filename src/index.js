import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

const CypherText = ({ textList, delay, ...props }) => {
  const [CypherText, setCypherText] = useState('')
  const placeholderChars = '________-_\\/[]{}—=+*^?#!<>'

  let textIndex = 0
  let queue = []

  let frameRequest
  let frame
  let resolvePromise

  const setText = newText => {
    const oldText =
      textList[textIndex === 0 ? textList.length - 1 : textIndex - 1]
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise(resolve => (resolvePromise = resolve))
    queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      queue.push({ from, to, start, end })
    }
    window.cancelAnimationFrame(frameRequest)
    frame = 0
    update()
    return promise
  }

  const update = () => {
    let complete = 0

    const output = queue.map((item, i) => {
      let { from, to, start, end, char } = item
      if (frame >= end) {
        complete++
        return <React.Fragment key={i}>{to}</React.Fragment>
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar(placeholderChars)
          item.char = char
        }
        return (
          <span key={i} style={{ color: '#909090' }}>
            {char}
          </span>
        )
      } else {
        return <React.Fragment key={i}>{from}</React.Fragment>
      }
    })

    setCypherText(output)

    if (complete === queue.length) {
      resolvePromise()
    } else {
      frameRequest = window.requestAnimationFrame(update)
      frame++
    }
  }

  const randomChar = string => string[Math.floor(Math.random() * string.length)]

  const next = () => {
    setText(textList[textIndex]).then(() => {
      setTimeout(next, delay)
    })

    textIndex = (textIndex + 1) % textList.length
  }

  useEffect(() => {
    next()
    return () => {
      clearTimeout(next)
      window.cancelAnimationFrame(frameRequest)
    }
  }, [])

  return <div {...props}>{CypherText}</div>
}

CypherText.propTypes = {
  textList: PropTypes.array.isRequired,
  delay: PropTypes.number,
  randomOrder: PropTypes.bool
}

CypherText.defaultProps = {
  delay: 800
}

export default CypherText
