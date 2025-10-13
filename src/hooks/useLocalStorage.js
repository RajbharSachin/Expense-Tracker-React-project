import { useEffect, useState } from "react"

export function useLocalStorage(key, initialData) {
    const [data, setData] = useState(initialData)

    // run one time if existing data     then Set Existing Data
    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem(key))
        if (existingData) {
            setData(existingData)
        } else {
            localStorage.setItem(key, JSON.stringify(initialData))
        }
    }, [])

    // update local storage   when setNewData render For function OR Normal data
    const updateLocalStorage = (newData) => {
        if(typeof newData === 'function') {
            localStorage.setItem(key, JSON.stringify(newData(data)))
        } else {
            localStorage.setItem(key, JSON.stringify(newData))
        }
        setData(newData)
    }  
     
    return [data, updateLocalStorage]
}