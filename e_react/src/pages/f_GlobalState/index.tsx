import React from 'react'
import Context from './Context'
import Zustand01 from './Zustand01'
import Zustand02 from './Zustand02'

export default function Index() {
  return (
    <div>
      <h1>리액트 전역 상태관리 (Context API / Zustand)</h1>
      <Context />

      <hr />
      <Zustand01 />
      <Zustand02 />
    </div>
  )
}
