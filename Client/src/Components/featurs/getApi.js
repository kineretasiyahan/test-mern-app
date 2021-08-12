import { useState } from "react"

export default function GetApi(){
    const [data,setData] = useState("")
    fetch("http://localhost:8080/")
    .then(res=>{return res})
    .then(result=>{return setData(result)})
    .catch(error=>{return(error)})
    return data;
}