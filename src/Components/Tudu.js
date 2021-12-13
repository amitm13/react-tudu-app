import React from 'react';
import { Component } from 'react/cjs/react.development';
import TuduItem from './TuduItem';

class Tudu extends Component {
    state = {
        todoItemText:'',
        todoItem: []
    }

    handleChange(e) {
        this.setState({ todoItemText: e.target.value });
    }
    
    addItem = () => {
        if (!this.state.todoItemText) {
            alert('Please enter some text in title!');
            return;
        }
        let todoArr = [...this.state.todoItem];
        todoArr.push({ id: Math.floor(Math.random(10000,90000)*1000), title: this.state.todoItemText, isCompleted:false });
        this.setState({ todoItemText: '', todoItem: todoArr });
    }

    markAsDone = todo => {
        let todoArr = [...this.state.todoItem];
        todoArr[todoArr.indexOf(todo)].isCompleted = (todoArr[todoArr.indexOf(todo)].isCompleted) ? false : true;
        this.setState({ todoItem: todoArr });  
    }

    removeItem = todo => {
        let todoArr = [...this.state.todoItem];
        todoArr = todoArr.filter(t => t.id !== todo.id);
        this.setState({ todoItem: todoArr });  
    }

    resetAll = () => {
        this.setState({ todoItemText:'', todoItem: [] }); 
    }

    render() {
        return (
            <div>
                <div className="bg-white w-6/12 h-300 mx-auto mt-10 rounded shadow p-5">
                    <label htmlFor='tuduInput'>Tudu Title</label><br/>
                    <input
                        type="text"
                        id='tuduInput'
                        className='p-2 w-full h-30 border-2 border-gray-500 rounded'
                        value={this.state.todoItemText} 
                        onChange={ this.handleChange.bind(this) } 
                        placeholder="Write a Task..."
                    />
                    <button className='w-3/12 bg-blue-600 text-white rounded p-3 mt-3 hover:bg-blue-700' onClick={this.addItem}>Add</button>
                    <button onClick={this.resetAll} className='bg-red-500 text-white p-3 rounded shadow shadow-lg ml-3'>Reset</button>
                </div>
                {this.state.todoItem.map(todo => <TuduItem key={todo.id} todo={todo} removeItem={this.removeItem} markAsDone={ this.markAsDone }/>) }
            </div>
        )
    }
}

export default Tudu;