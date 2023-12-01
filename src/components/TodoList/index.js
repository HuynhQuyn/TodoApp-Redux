import {Select } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import { addTodo } from '../../redux/actions';
import {v4 as uuidv4} from 'uuid';
import {todoRemainingSelector } from '../../redux/selectors';

function TodoList() {
    const [todoName , setTodoName] = useState('');
    const [priority , setPriority] = useState('Medium');

    const todoList = useSelector(todoRemainingSelector);
    // const searchText = useSelector(searchTextSelector)


    const dispatch = useDispatch();
    const handleAddButtonClick = () => {
        //dispatch
        dispatch(addTodo({
            id: uuidv4(),
            name:todoName,
            priority:priority,
            completed: false,
        }))
        setTodoName('')
    }

    const handleInputChange = (e) => {
       setTodoName(e.target.value)
    }

    const handlePriorityChang = (value) => {
       setPriority(value)
    }

    return (
        <div style={{display: 'flex', flexDirection:'column', justifyContent:'space-between', width:'100%', height:'100%'}}>
            <div>
                {todoList.map((todo) => (<Todo key={todo.id} name={todo.name} priority={todo.priority} completed= {todo.completed}/>))}
                {/* <Todo name='Learn React' prioriry='High' ground= 'red'></Todo>
                <Todo name='Learn Redux' prioriry='Medium' ground= 'blue' ></Todo>
                <Todo name='Learn JavaScript' prioriry='Low'></Todo> */}
            </div>
            <div style={{display:'flex', width:'100%'}}>
                <input value={todoName} onChange={handleInputChange}
                style={{width: 300}}></input>
                <Select style={{width: 160,}} defaultValue={priority} onChange={handlePriorityChang}>
                    <Select.Option style={{color:'##cf1322', backgroundColor:'#fff1f0', borderColor:'#ffa39e'}} value="High"></Select.Option>
                    <Select.Option style={{color:'#0958d9', backgroundColor:'#e6f4ff', borderColor:'#91caff'}}value="Medium">Medium</Select.Option>
                    <Select.Option style={{color:'white', backgroundColor:'gray'}} value="Low">Low</Select.Option>
                </Select>
                <button onClick={handleAddButtonClick}
                >Add</button>
            </div>
        </div>
      );
}

export default TodoList