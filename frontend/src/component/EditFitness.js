import { useParams } from "react-router-dom";
import FitnessForm from "./FitnessForm";
import { useEffect, useState } from "react";
import Axios from "axios";


export default function EditFitness(){
    const{id}=useParams();
    const[initialValue,setInitialValue]=useState({userId:"6689815184fc8fda2b573136",date:"",type:"",duration:""})
    const [newData,setNewData]=useState([]);
   
    useEffect(()=>{
        Axios.get("http://localhost:4000/fitnessRoute/update-fitness/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {userId,date,type,duration}=res.data;
                setInitialValue({userId,date,type,duration});
            }  
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    },[id])

    const getState=(childData)=>{
        setNewData(childData);
    }

    const handleSubmit =()=>{
        const data={userId:"6689815184fc8fda2b573136",date:newData[1],type:newData[2],duration:newData[3]}
        Axios.put("http://localhost:4000/fitnessRoute/update-fitness/"+id,data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record updated")
            else
                Promise.reject()
        })
        .catch((err)=> alert(err));
    }
   

  
    return(
        <form onSubmit={handleSubmit}>
            <FitnessForm getState={getState}
                         userIdValue={initialValue.userId}
                         dateValue={initialValue.date}
                         typeValue={initialValue.type}
                         durationValue={initialValue.duration}
                         > Update form
                         </FitnessForm>
        </form>
    )
}