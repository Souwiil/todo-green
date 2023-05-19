import React from "react";



import tasksData from "../../data/tasks";

import TodoCounter from "../TodoCounter/TodoCounter";
import TodoForm from "../TodoForm/TodoForm";
import TodoTasks from "../TodoTasks/TodoTasks";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasksData,
    };
  }

  addTask(newTaskLabel) {
    
    const { tasks } = this.state;
    const tasksIds = tasks.map((task) => task.id);
    const maxId = Math.max(...tasksIds);
    const newTaskId = maxId + 1;
    
    const newTask = {
      id: newTaskId,
      label: newTaskLabel,
      done: false,
    };

    
    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  
  toggleTask(taskId) {
    const { tasks } = this.state;

    
    const updatedTasks = tasks.map((task) => {
      
      if (task.id === taskId) {
        
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    const { tasks } = this.state;
    const tasksRemaining = tasks.filter((task) => !task.done).length;

    return (
      <div className="App w-[90%] max-w-[500px] mx-auto my-8">
        <TodoForm
          addTask={(newTaskLabel) => {
            this.addTask(newTaskLabel);
          }}
        />
        <TodoCounter tasksRemaining={tasksRemaining} />
        <TodoTasks
          tasks={tasks}
          toggleTask={(taskId) => {
            this.toggleTask(taskId);
          }}
        />
      </div>
    );
  }
}

export default App;