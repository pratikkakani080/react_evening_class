import React, { useEffect, useRef, useState } from 'react'
import ChildComponent from './components/ChildComponent'

export default function UseRef() {
    const [text, setText] = useState('')
    const ref = useRef(null)
    const elementRef = useRef({})

    elementRef.current = {
        name: 'test',
        email: 'test@gmail.com',
        slug: text
    }

    console.log('ref**', ref);
    console.log('text**', text);
    useEffect(() => {
        // console.log('***', ref)
        elementRef.current = {
            name: 'test',
            email: 'test@gmail.com',
            slug: text
        }
        // ref.current.style.backgroundColor = 'green'
    }, [text])


    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <input type='text' value={text} onChange={(e) => handleOnChange(e)} />
            <ChildComponent ref={ref} />
            <button onClick={() => ref.current.style.backgroundColor = 'green'}>Submit</button>
        </div>
    )
}
