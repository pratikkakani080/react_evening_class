import React, { useEffect, useState } from 'react'
import Button from '../button'
export default function User({ setButtonLabel }) {

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

    return (
        <div>
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
            <Button setButtonLabel={setButtonLabel} />
        </div>
    )
}
