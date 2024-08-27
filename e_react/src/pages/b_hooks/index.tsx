import React from 'react'
import UseState01 from './a_UseState/UseState01';

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: 'black', color: 'white' }}> 
        리액트 Hook
      </h1>

      <h2>리액트 Hooks - useState</h2>
      <UseState01 />
    </div>
  );
}

export default Index;