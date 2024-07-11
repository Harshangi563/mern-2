import { useState,useEffect } from "react"


export default function FitnessForm(props){
    const[userId,setuserId] =useState("6689815184fc8fda2b573136")
    const[date,setdate] =useState(props.date)
    const[type,settype] =useState(props.type)
    const[duration,setduration] =useState(props.duration)

    useEffect(()=>{
        setuserId("6689815184fc8fda2b573136")
        setdate(props.dateValue)
        settype(props.typeValue)
        setduration(props.durationValue)
    },[props.userIdValue,props.dateValue,props.typeValue,props.durationValue])


    const arr=[userId,date,type,duration];


    const handleClick =()=>{
        props.getState(arr);
    }


    return(
        <div style={{maxWidth:"40%", margin:"0px auto"}}>
            
            <input defaultValue={props.dateValue} onChange={(event)=>setdate(event.target.value)} class="form-control" type="date" placeholder="Date" />
            <input defaultValue={props.typeValue} onChange={(event)=>settype(event.target.value)} class="form-control" type="text" placeholder="Type" />
            <input defaultValue={props.durationValue} onChange={(event)=>setduration(event.target.value)} class="form-control" type="Number" placeholder="Duration" />
            <button onClick={handleClick} type="submit" class="btn btn-warning d-block mx-auto my-3">Submit</button>
        </div>
    )
}

