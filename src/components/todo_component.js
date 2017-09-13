import React, {Component} from 'react';
import TodoContainerComponent  from  '../container/todo_components';


class TodoComponent extends Component {

    constructor() {
        super();
        this.state = {
            myTodo : "",
            myTodoArr: []
        }

        this.submitTodo = this.submitTodo.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitTodo(e) {
        
        console.log(this.state.myTodo);
        e.preventDefault();
        this.setState({
            myTodoArr: [...this.state.myTodoArr, this.state.myTodo],
            myTodo: ''
        });
        console.log(this.state.myTodoArr);
    }

    editTodo(index) {
        console.log(this.state.myTodoArr[index]);
        this.setState({
            myTodo: this.state.myTodoArr[index]
        });
    }

    deleteTodo(index) {
        console.log(this.state.myTodoArr[index]);
        this.setState(this.state.myTodoArr.splice(index, 1));
    }

    render() {
        return(
            <div>
                <p>Todo Component  </p>
                <form onSubmit={this.submitTodo}>
                    <input type="text" name="myTodo" value={this.state.myTodo}  onChange={this.inputChange}/>
                    <button>Submit</button>

                </form>

                {
                    this.state.myTodoArr.map((item, index) => <li key={index}>
                        {item} 
                        <button onClick={() =>  this.editTodo(index)}>Edit</button>     
                        <button onClick={() =>  this.deleteTodo(index)}>delete</button> 
                    </li>
                    )
                    
                }

            </div>
        );
    }

}

export default TodoComponent;