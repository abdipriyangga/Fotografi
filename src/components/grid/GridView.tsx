import { FC } from "react"
import { View, StyleSheet } from 'react-native'

interface Props<T> {
    data: T[];
    renderItem(item: T): JSX.Element;
    col?: number
}

const GridView = <T extends any>(props: Props<T>) => {
    const { data, renderItem, col = 2 } = props
    return (
        <View style={styles.container}>
            {data.map((item, index) => {
                return <View key={index} style={{ width: 100 / col + '%' }}>{renderItem(item)}</View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap"
    },
});

export default GridView