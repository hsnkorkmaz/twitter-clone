
import React from 'react'
import MainContainer from './layout/MainContainer' 
import LeftSide from './layout/LeftSide'
import RightSide from './layout/RightSide'
import Feed from './layout/Feed'

const App = () => {
  return (
    <MainContainer>
      <LeftSide />
      <Feed />
      <RightSide />
    </MainContainer>
  )
}

export default App