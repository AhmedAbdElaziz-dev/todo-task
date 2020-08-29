import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, edit } from "../../redux/actions";

class Todo extends Component {
  state = { todoItem: {}, isEdited: false };
  componentDidMount() {
    this.setState({ todoItem: this.props.todoItem });
  }
  inputHandler = (event) => {
    const body = event.target.value;
    const todoItem = { ...this.state.todoItem, body };
    this.setState({ todoItem });
  };
  checkBoxHandler = (event) => {
    const isDone = event.target.checked;
    const todoItem = { ...this.state.todoItem, isDone };
    this.setState({ todoItem });
    this.props.editTodo(event.target.id, todoItem);
  };
  editHandler = (todoItem) => {
    this.setState({ todoItem, isEdited: true });
  };
  cancelHandler = (event, todoItem) => {
    event.preventDefault();
    const isEdited = !this.state.isEdited;
    this.setState({ todoItem, isEdited });
  };
  saveHandler = (event) => {
    event.preventDefault();
    const todoItem = { ...this.state.todoItem };
    this.props.editTodo(this.state.todoItem._id, todoItem);
    const isEdited = !this.state.isEdited;
    this.setState({ ...todoItem, isEdited });
  };
  render() {
    return (
      <React.Fragment>
        <li style={{ display: this.state.isEdited ? "none" : "flex" }}>
          <input
            type="checkbox"
            id={this.props.todoItem._id}
            onChange={this.checkBoxHandler}
            checked={this.props.todoItem.isDone}
          />
          <label htmlFor={this.props.todoItem._id}>
            <span className="check"></span>
            <span>{this.props.todoItem.body}</span>
          </label>
          <span>
            <i
              className="far fa-edit"
              onClick={() => this.editHandler(this.props.todoItem)}
            ></i>
            <i
              className="far fa-trash-alt delete"
              onClick={() => this.props.deleteTodo(this.props.todoItem._id)}
            ></i>
          </span>
        </li>
        <li style={{ display: !this.state.isEdited ? "none" : "flex" }}>
          <form>
            <input
              type="text"
              value={this.state.todoItem.body}
              onChange={this.inputHandler}
              style={{ width: "170px" }}
            />
            <button onClick={this.saveHandler}>save</button>
            <button
              onClick={(event) =>
                this.cancelHandler(event, this.props.todoItem)
              }
            >
              cancel
            </button>
          </form>
        </li>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteItem(id)),
    editTodo: (id, todoItem) => dispatch(edit(id, todoItem)),
  };
};
const mapStateToProps = (state) => {
  return {
    todoList: state.todo.itemsList,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
