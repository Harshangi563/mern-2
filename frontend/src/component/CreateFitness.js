import { useState } from "react";
import FitnessForm from "./FitnessForm.js";
import FitnessList from "./FitnessList.js";
import Axios from "axios"

//import { useNavigate } from "react-router-dom";

export default function CreateFitness(){
    const[arr,setArr]=useState([])
    //const navigate=useNavigate();



    const getState =(childData)=>{
        setArr(childData);
    }


    const handleSubmit = (event)=>{
        const data ={userId:arr[0],date:arr[1],type:arr[2],duration:arr[3]};
        Axios.post("http://localhost:4000/fitnessRoute/create-fitness",data)
        .then((res)=>{
            if(res.status === 200)
                alert("new record added")
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
        //navigate('/fitness-list');
        event.target.reset();
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <FitnessForm getState={getState} 
            userId="668980f284fc8fda2b573134"
            date=''
            type=''
            duration=''
            />
            <FitnessList />
        </form>
    )
}