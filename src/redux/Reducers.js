import { combineReducers } from "redux";
import tasks from "./tasks/reducer";

export default combineReducers({
  taskList: tasks,
});
