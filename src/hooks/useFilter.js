import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"

export function useFilter(dataList, callback) {
    // query from data
    const [query, setQuery] = useLocalStorage('query', '')
    const filteredData = dataList.filter((data) =>  
        callback(data).toLowerCase().includes(query)
    )

    return [filteredData, setQuery]
}
