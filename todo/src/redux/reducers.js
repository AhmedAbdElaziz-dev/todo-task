import { GET_ALL, ADD, EDIT, DELETE } from "./constants";

const initialState = {
  itemsList: [],
  todoItem: "",
};

export default (state = initialState, action) => {
  let itemsList;
  let item;
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        itemsList: action.itemsList,
      };
    case EDIT:
      itemsList = state.itemsList.map((todoItem) =>
        todoItem._id === action.todoItem._id ? action.todoItem : todoItem
      );
      return {
        ...state,
        itemsList,
      };
    case ADD:
      itemsList = [...state.itemsList];
      item = action.todoItem;
      itemsList.push(item);
      return {
        ...state,
        todoItem: action.todoItem,
        itemsList,
      };
    case DELETE:
      item = action.todoItem;
      itemsList = state.itemsList.filter(
        (item) => item._id !== action.todoItem._id
      );
      return {
        ...state,
        todoItem: action.todoItem,
        itemsList,
      };
    default:
      return {
        ...state,
      };
  }
};
