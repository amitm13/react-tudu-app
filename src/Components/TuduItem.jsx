import React from "react";

class tuduItem extends React.Component {
    render() { 
        return (
            <div className="bg-white rounded-md shadow mt-3 mx-auto w-6/12 h-30 p-2">
                <input type="checkbox" checked={this.props.todo.isCompleted ? 'checked' : ''} className="ml-2 mr-2" onChange={()=>this.props.markAsDone(this.props.todo)} />
                <span className={this.props.todo.isCompleted ? 'font-bold line-through text-green-600' : ''}>{this.props.todo.title}</span>
                <span className="bg-red-500 hover:bg-red-700 text-white px-1 rounded shadow float-right " onClick={()=> this.props.removeItem(this.props.todo)}>Delete</span>
            </div>
        );
    }
}
 
export default tuduItem;