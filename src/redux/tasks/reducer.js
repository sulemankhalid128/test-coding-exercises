export const types = {
  ADD_TASK: "ADD_TASK",
  BULK_DELETE: "BULK_DELETE",
};

let initialState = {
  tasks: [
    {
      name: "new task",
      id: `${Date.now}`,
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case types.BULK_DELETE:
      let items = state.tasks;
      let valuesToRemove = action.payload.ids;
      items = items.filter((i) => !valuesToRemove.includes(i.id));
      return {
        ...state,
        tasks: [...items],
      };
    default:
      return state;
  }
};

export default taskReducer;
