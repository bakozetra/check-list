import React, { createContext, useState, useEffect } from 'react'
const Context = createContext();
const URL = `https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`

function ContextProvider({ children }) {
    const [list, setlist] = useState([]);
    const fetchData = async () => {
        const Api = `${URL}`;
        const res = await fetch(Api);
        const data = await res.json();
        console.log(data);
        setlist(data);
    }
    useEffect(() => {
        fetchData()
    }, [])

    return <Context.Provider value={{ setlist, list, fetchData }}>
        {children}
    </Context.Provider>
}
export { Context, ContextProvider }
