import React, { memo, useEffect, useMemo } from 'react'

function Child({ text }) {

    const test = useMemo(() => text, [text])


    console.log('called_out****', test);

    return (
        <div>
            child: {text}
        </div>
    )
}

export default Child