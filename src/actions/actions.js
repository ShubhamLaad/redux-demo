export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    payload: message,
  };
}

export function addTask(task) {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
}