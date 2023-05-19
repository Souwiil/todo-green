import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskLabel: "",
    };
  }

  setNewTaskLabel(newTaskLabel) {
    this.setState({
      newTaskLabel: newTaskLabel,
    });
  }

  render() {
    const { addTask } = this.props;
    const { newTaskLabel } = this.state;

    return (
      <form
        className="TodoForm"
        onSubmit={(event) => {
          event.preventDefault();
          addTask(newTaskLabel);
          this.setNewTaskLabel("");
        }}
      >
       
        <input
          type="text"
          className="TodoForm-input w-full text-white text-2xl bg-green-900 border border-green-800 shadow-inner p-4"
          placeholder="Ajouter une tâche"
          value={newTaskLabel}
          onChange={(event) => {
            this.setNewTaskLabel(event.target.value);
          }}
        />
      </form>
    );
  }
}

export default TodoForm;
