import { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [newYearGoals, setNewYearGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length == 0) {
      Alert.alert('Ooops', 'Write Something')
      return;
    }
    setNewYearGoals(( currentNewYearGoals ) => [
      ...currentNewYearGoals, 
      {text: enteredGoalText.trimStart(), id: Math.random().toString()},
    ]);
  };

  function deleteGoalHandler(id) {
    setNewYearGoals(currentNewYearGoals =>  {
      return currentNewYearGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light'/>
        <View style={styles.appContainer}>
          <GoalInput addGoalHandler={addGoalHandler} />
          <FlatList data={newYearGoals} renderItem={(itemData) => {
            return <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />;
          }} alwaysBounceVertical={false} />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#292929',
    height: '100%'

  },
});