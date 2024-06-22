import React from 'react';
import Task from './Task';
import CreCreateTaskInput from './CreateTaskInput';
import { createTask, fetchTaskList, updateTask, deleteTask } from './taskGateway';

class TasksList extends React.PureComponent {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.fetchTasks();
  }

  onCreate = text => {
    const newTask = {
      text,
      done: false
    };
    createTask(newTask).then(() => this.fetchTasks());
  };

  fetchTasks = () => {
    fetchTaskList().then(tasksList => {
      this.setState({
        tasks: tasksList
      });
    });
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreCreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default TasksList;
