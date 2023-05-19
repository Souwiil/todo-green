
function TodoTasks({ tasks, toggleTask }) {
  return (
    <ul className="TodoTasks">
      {tasks.map((task) => (
        <li key={task.id}>
          {/* Merci ©Erwann® */}
          <label
            className={`TodoTasks-task block bg-gray-300 rounded-2xl p-4 my-3  ${
              task.done ? "opacity-50 line-through" : ""
            }`}
          >
            <input
            className="mr-3"
              type="checkbox"
              checked={task.done}
              onChange={() => {
                toggleTask(task.id);
              }}
            />
            {task.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TodoTasks;