import React from 'react'
import { View } from 'react-native'

// cell component
import Cell from './cell'

const initialState = {
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  componentDidMount() {}

  // render cell logic
  renderCells() {
    const { size } = this.props

    // random values loaded in array, one for each cell in the board
    for (var board = [], i = 0; i < 64; ++i) board[i] = i

    const rowViews = []
    const cellSize = size / 8

    // process each cell of the board
    board.forEach((cell, index) => {
      const rowIndex = Math.floor(index / 8)
      const columnIndex = index % 8

      if (!rowViews[rowIndex]) {
        rowViews[rowIndex] = []
      }
      rowViews[rowIndex].push(
        <Cell
          key={index}
          size={cellSize}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        />
      )
    })

    const boardView = rowViews.map((row, index) => {
      return (
        <View key={index} style={{ flexDirection: 'row' }}>
            {row}
        </View>
      )
    })

    boardView.reverse()

    return boardView
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'column' }}>{this.renderCells()}</View>
      </View>
    )
  }
}

export default Board
