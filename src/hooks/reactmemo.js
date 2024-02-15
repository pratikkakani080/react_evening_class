import React, { useState } from 'react'
import Child from './components/Child'

export default function Reactmemo() {
    const [text, setText] = useState('')
    const [text2, setText2] = useState('')

    return (
        <div>
            text 1: <input type='text' value={text} onChange={(e) => setText(e.target.value)} /><br />
            text 2: <input type='text' value={text2} onChange={(e) => setText2(e.target.value)} /><br />
            <Child text={text} />
        </div>
    )
}
