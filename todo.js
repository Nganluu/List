import React from 'react';
import ReactDOM from 'react-dom';



class ToDoList extends React.Component{
	constructor(props){
		super(props);
	}
	// var todo = this.props.list.map((todo)=><ul>{todo}</ul>);
	
	render(){
		const {list, onRemove, key1} = this.props;
		return(
			<div>
				<h2>To do list</h2>
			<ul>
				  {list.map((todo, index)=>
				  	<li key={todo}>
				  <input type="checkbox" onClick={event => onRemove(key1, index)}/>{todo}
					</li>)}
			</ul>
			</div>
			);
			}
}

export default ToDoList