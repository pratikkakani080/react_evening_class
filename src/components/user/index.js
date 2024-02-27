import React, { useEffect, useState } from 'react'
import ButtonCustomComponent from '../button'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { decremented, getData, incremented } from '../../redux/reducers/userReducer'
export default function User({ setButtonLabel }) {
    const dispatch = useDispatch()
    const [todoData, setTodoData] = useState([])

    const getTodoList = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodoData(json))
    }

    useEffect(() => {
        getTodoList()
    }, [])

    // console.log('todoData**', todoData);

    const handleDelete = (item) => {
        const index = todoData.findIndex(el => el.id === item.id)
        todoData.splice(index, 1)
        // console.log('newdata(****', todoData)
        setTodoData([...todoData])
    }

    useEffect(() => {
      dispatch(getData())
    }, [])
    

    return (
        <div>
            <Button variant="contained" color='primary' onClick={() => dispatch(incremented(5))} >Increment</Button>
            <Button variant="contained" color='warning' onClick={() => dispatch(decremented())} >Decrement</Button>
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Title
                    </th>
                </tr>
                {
                    todoData.map(el => {
                        return (
                            <tr>
                                <td>
                                    {el.id}
                                </td>
                                <td>
                                    {el.title}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(el)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <ButtonCustomComponent setButtonLabel={setButtonLabel} />
        </div>
    )
}
