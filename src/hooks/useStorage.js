import React from 'react'

export default function useStorage() {
    const setLocalData = (key, value) => {
        localStorage.setItem(key, value)
    }
    const getLocalData = (key) => {
        const data = localStorage.getItem(key)
        return data
    }
    return { setLocalData, getLocalData }
}
