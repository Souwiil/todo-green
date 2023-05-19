
function TodoCounter({ tasksRemaining }) {
  return <p 
  className="TodoCounter text-[1.5em] text-white mt-8 mb-4 mx-0 px-0 py-2 border-b-white border-b border-solid">{tasksRemaining} tâches en cours</p>;
}

export default TodoCounter;