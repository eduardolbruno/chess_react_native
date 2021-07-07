import React from 'react';
import { View } from 'react-native';

class Cell extends React.Component {

    render() {
        const {
            size,
            rowIndex,
            columnIndex,
        } = this.props;

        // flag to check if cell is odd/even
        const isBlack = (rowIndex + columnIndex) % 2 === 0;
        
        // colored cell
        let backgroundColor = isBlack ? '#F0D9B5' : '#B58863';

        return (
            <View style={{ backgroundColor, width: size, height: size }}>
            </View>
        );
    }
}

export default Cell;
