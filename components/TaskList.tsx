import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { TaskModel } from "../models/Task"
import Task from "./Task"

interface TaskListProps {
  tasks: TaskModel[],
  onTaskPressed: (task: TaskModel) => void,
  onDeletePressed: (task: TaskModel) => void,
}

export default function TaskList({ tasks, onTaskPressed, onDeletePressed }: TaskListProps) {

  const scrollViewRef = React.useRef<ScrollView>(null)

  return (
    <ScrollView ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef?.current?.scrollToEnd({ animated: true })} style={styles.listContainer} >
      {tasks.map(task => (
        <Task key={task.id} task={task} onTaskPressed={onTaskPressed} onDeletePressed={onDeletePressed} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
  }
})