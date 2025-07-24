import { createContext,useState } from "react";

export const TodoContext=createContext();

export const TodoProvider = ({ children }) => {  

    let [todos,setTodos]=useState([])  
    let data={
        todos,
        setTodos
    }

return <TodoContext.Provider value={data}> {children} </TodoContext.Provider>;

};