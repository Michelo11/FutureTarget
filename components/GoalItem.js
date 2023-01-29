import { StyleSheet, Text, View, Pressable, } from "react-native"

function GoalItem(props) {


    console.log(props.item)
    return (
    <View style={styles.goalItem}>    
        <Pressable onPress={() => props.onDeleteItem(props.item.id)}>
            <Text style={{color: '#404040'}}>{props.item.text}</Text>
        </Pressable>
    </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        padding: 15,
        backgroundColor: '#171717',
        borderRadius: 7,
        borderColor:'#404040',
        borderWidth: 1,
        marginTop: 20,
    },
});