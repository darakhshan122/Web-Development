
import {React,memo } from 'react'

function child({learning}) {
    console.log("child")
  return (
    <div>child</div>
  )
}

export default memo(child)