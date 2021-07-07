import React from 'react'
import { StyleSheet, SafeAreaView, View, Dimensions } from 'react-native'
import styled from 'styled-components/native'

// board component
import Board from './components/board'

const { width, height } = Dimensions.get('window')
const size = Math.min(width, height, 375)

const Wrapper = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Game = styled(View)`
  max-width: 375px;
`

export default function App() {
  return (
    <Wrapper>
      <Game>
        <Board size={size} />
      </Game>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
