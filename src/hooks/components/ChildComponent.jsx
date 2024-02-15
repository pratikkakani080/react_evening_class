import React, { forwardRef } from 'react'

export default forwardRef(function ChildComponent(props, ref) {
    return (
        <div ref={ref}>
            this is children component
        </div>
    )
})
