import { types } from "./reducer";

export const addTask = (payload) => ({
  type: types.ADD_TASK,
  payload: { name: payload.name, id: `${Date.now()}` },
});
export const bulkDelete = (payload) => ({
  type: types.BULK_DELETE,
  payload: { ids: payload.ids },
});
