import React, { useContext } from 'react'
import Context from '../../helper/fileContext'

export default function Button(props) {
    const contextData = useContext(Context)

    return (
        <button onClick={() => contextData.setButtonLabel('click me')}>Click me</button>
    )
}
