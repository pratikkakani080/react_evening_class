import React, { useContext } from 'react'
import Context from '../../helper/fileContext'
import { useNavigate } from 'react-router-dom'

export default function Button(props) {
    const contextData = useContext(Context)
    const navigate = useNavigate()

    return (
        <button onClick={() => { contextData.setButtonLabel('click me'); navigate('/form') }}>Click me</button>
    )
}
