import React from "react";
import { Component } from "react";
import Todo from "../../components/Todo";
import { connect } from "react-redux";
import { add, getAll } from "../../redux/actions";

class Home extends Component {
  state = { body: "" };
  inputHandler = (event) => {
    event.preventDefault();
    const body = event.target.value;
    this.setState({ body });
  };
  addHandler = () => {
    this.props.addTodo(this.state.body);
    this.setState({ body: "" });
  };

  componentDidMount() {
    this.props.getTodoList();
  }
  render() {
    return (
      <div className="todoList">
        <div className="cover-img">
          <div className="cover-inner">
            <h3>Vacation</h3>
          </div>
        </div>
        <div className="content">
          <form className="add">
            <input
              type="text"
              name="add"
              placeholder="Add item..."
              onChange={this.inputHandler}
              value={this.state.body}
            />
            <div className="input-buttons">
              <a href="#0" className="add-todo">
                <i className="fas fa-plus add" onClick={this.addHandler}></i>
              </a>
            </div>
          </form>
          <ul className="todos">
            {this.props.todoList.map((todoItem) => {
              return <Todo todoItem={todoItem} key={todoItem._id} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (body) => dispatch(add(body)),
    getTodoList: () => dispatch(getAll()),
  };
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.itemsList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
