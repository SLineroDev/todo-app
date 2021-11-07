import AsyncStorage from '@react-native-async-storage/async-storage'
import { TaskModel } from '../models/Task'

export const storeData = async (tasks: TaskModel[]) => {
  try {
    await AsyncStorage.setItem('@todo-app:taks',JSON.stringify(tasks))
  } catch (error) {
    // Error saving data
  }
}

export const getData = async (): Promise<TaskModel[] | undefined> => {
  return AsyncStorage.getItem('@todo-app:taks').then((task: string | null) => task ? JSON.parse(task) : null).catch(error => undefined)
}

export const removeData = async (id: string) => {
  try {
    await AsyncStorage.removeItem(id)
  } catch (error) {
    // Error saving data
  }
}
