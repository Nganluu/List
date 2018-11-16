import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo'


class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todoList1: ['Buy Milk', "Walking", "Learning English"],
			todoList2: ['Buy Milk', "Walking", "Learning English", "sadfjklsdjf"]
		}
		this.onRemove = this.onRemove.bind(this)
	}

	onRemove(key, index) {
		console.log(key)
		let updatedList = this.state[key];
		updatedList.splice(index, 1);
		this.setState(() => ({
			[key]: updatedList
		}))
	}

	render(){
		const {todoList1, todoList2} = this.state
		return(
			<div>
			<TodoList list={todoList1} onRemove={this.onRemove} key1={'todoList1'} />
			<TodoList list={todoList2} onRemove={this.onRemove} key1={'todoList2'} />
			</div>
		)
	}
}
ReactDOM.render(<div><Main  /></div>, document.getElementById('root'));
