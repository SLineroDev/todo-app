import {
  Marcellus_400Regular, useFonts
} from '@expo-google-fonts/marcellus'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { TaskModel } from '../models/Task'
import { removeData, getData, storeData } from '../services/localStorage.service'
import PlusSvg from './svg/Plus'
import TaskList from './TaskList'

export default function Card() {

  const [tasks, setTasks] = React.useState<TaskModel[]>([])
  const [inputText, setInputText] = React.useState<string>('')
  const inputRef = React.useRef<TextInput>(null)

  React.useEffect(() => {
    readItemFromStorage();
  }, []);

  const readItemFromStorage = async () => {
    await getData().then(data => {
      if (data) {
        setTasks(data)
      }
    })
  }

  const buttonClickedHandler = async () => {
    if (inputText.length > 0) {
      setTasks([...tasks, {
        id: Math.random().toString(),
        text: inputText,
        checked: false
      }])
      setInputText('')
      await storeData(tasks)
    }
  }

  const handleChangeText = (text: string) => {
    setInputText(text)
  }

  const onTaskPressed = (task: TaskModel) => {
    setTasks(tasks.map(t => {
      if (t.id === task.id) {
        t.checked = !t.checked
      }
      return t
    }))
  }

  const onDeletePressed = async (task: TaskModel) => {
    setTasks(tasks.filter(t => t.id !== task.id))
    await removeData(task.id)
  }

  let [fontsLoaded] = useFonts({
    Marcellus_400Regular
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.header} >to do</Text>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Today´s Tasks</Text>
          <TaskList tasks={tasks} onTaskPressed={onTaskPressed} onDeletePressed={onDeletePressed} />
          <View style={styles.cardForm}>
            <TextInput ref={inputRef} style={styles.cardInput} placeholder="Add a task" value={inputText} onChangeText={handleChangeText} />
            <TouchableOpacity
              onPress={buttonClickedHandler}
              style={styles.roundButton}>
              <PlusSvg style={styles.plusSign} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'flex-start',
    color: '#D2CEFF',
    fontFamily: 'Marcellus_400Regular',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 14,
    textDecorationColor: "#D2CEFF",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  card: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    flex: 1,
    width: '100%',
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -2 },
    shadowColor: 'rgba(0,0,0,0.3)',
    elevation: 10,
  },
  cardHeader: {
    color: '#A199FF',
    fontFamily: 'Marcellus_400Regular',
    fontSize: 20,
    padding: 20,
  },
  cardForm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  cardInput: {
    backgroundColor: '#D1E5F7',
    borderRadius: 10,
    fontFamily: 'Marcellus_400Regular',
    fontSize: 20,
    padding: 20,
    marginRight: 20,
    width: '80%',
    color: '#6C6C6C94'
  },
  roundButton: {
    minHeight: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusSign: {
    height: '100%'
  }
})
