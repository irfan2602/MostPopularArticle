import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(url)?.then((datas) => 
             datas.json()
        ).then((res) => {
            setData(res)
        })
    },[url])
    return [data]
}

export default useFetch

