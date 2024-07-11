import { useEffect, useState } from "react"
import FitnessListRow from "./FitnessListRow";
import Axios from "axios";


export default function FitnessList(){
   
    const [arr,setArr]=useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:4000/fitnessRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[])


    const ListItems =()=>{
        return arr.map((val,ind)=>{
            return <FitnessListRow obj={val} key={ind} />
        })
    }
    return(
        <table style={{maxWidth:"60%", margin:"50px auto"}} class="table table-bordered table-secondary table-striped">
            <thead>
                <tr>
                    <th class="text-center">Id</th>
                    <th class="text-center">Date</th>
                    <th class="text-center">Type</th>
                    <th class="text-center">Duration</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                    {ListItems()}
            </tbody>
        </table>
    )
   
}