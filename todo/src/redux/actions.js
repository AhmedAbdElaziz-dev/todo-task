import { GET_ALL, ADD, EDIT, DELETE } from "./constants";
import * as apis from "./apis";

export const add = (todoBody) => {
  return async (dispatch) => {
    const { data } = await apis.add(todoBody);

    dispatch(addResult(data));
  };
};
export const addResult = (todoItem) => ({ type: ADD, todoItem });

export const edit = (id, todoItem) => {
  return async (dispatch) => {
    const { data } = await apis.edit(id, todoItem);
    dispatch(editResult(data));
  };
};
export const editResult = (todoItem) => ({ type: EDIT, todoItem });

export const getAll = () => {
  return async (dispatch) => {
    const { data } = await apis.getAll();
    dispatch(getAllResult(data));
  };
};
export const getAllResult = (itemsList) => ({ type: GET_ALL, itemsList });

export const deleteItem = (id) => {
  return async (dispatch) => {
    const { data } = await apis.deleteItem(id);
    dispatch(deleteItemResult(data));
  };
};
export const deleteItemResult = (todoItem) => ({ type: DELETE, todoItem });
