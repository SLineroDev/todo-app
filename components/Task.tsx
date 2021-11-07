import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TaskModel } from "../models/Task"
import CheckSvg from "./svg/Check"
import TrashSvg from "./svg/Trash"
import UnCheckSvg from "./svg/UnCheck"

interface TaskProps {
  task: TaskModel,
  onTaskPressed: (task: TaskModel) => void,
  onDeletePressed: (task: TaskModel) => void,
}

export default function Task({ task, onTaskPressed, onDeletePressed }: TaskProps) {

  return (
    <TouchableOpacity onPress={() => onTaskPressed(task)}>
      <View style={styles.taskContainer}>
        {task.checked ? <CheckSvg style={styles.alignCenter} /> : <UnCheckSvg style={styles.alignCenter} />}
        <Text style={!task.checked ? styles.text : styles.checkedText}>{task.text}</Text>
        <TouchableOpacity style={styles.trashSvg} onPress={() => onDeletePressed(task)}><TrashSvg /></TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#D1E5F7',
    borderRadius: 10,
    paddingLeft: 10,
    flex: 1,
    minHeight: 24,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  text: {
    paddingLeft: 10,
    flex: 1,
    alignSelf: 'center',
  },
  checkedText: {
    paddingLeft: 10,
    textDecorationLine: 'line-through',
    flex: 1,
    alignSelf: 'center',
  },
  trashSvg: {
    height: '100%',
    padding: 10
  },
  alignCenter: {
    alignSelf: 'center',
  }
})