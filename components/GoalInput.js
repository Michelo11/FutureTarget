import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, } from "react-native"

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };
    
    function addGoalHandler() {
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText("")
    }

    return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your goals' placeholderTextColor="#404040" onChangeText={goalInputHandler} value={enteredGoalText}/>
                <Pressable onPress={addGoalHandler} style={styles.addButton}><Text>Add new</Text></Pressable>
            </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 7,
        padding: 4,
        width: '75%',
        borderColor:'#404040',
        borderWidth: 2,
        backgroundColor: '#171717',
        paddingLeft: 10,
        color: '#404040',
    },
    addButton: {
        backgroundColor: '#007AFF',
        borderColor: '#004896',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
    },
});