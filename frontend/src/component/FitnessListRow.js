import Axios from "axios";
import {Link} from "react-router-dom";



export default function FitnessListRow(props){
    const {_id,userId,date,type,duration} =props.obj;


    const handleClick =()=>{
        Axios.delete("http://localhost:4000/fitnessRoute/delete-fitness/" +_id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record is deleted");
                window.location.reload();
            }  
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    }


    return(
        <tr>
            <td>{userId}</td>
            <td>{date}</td>
            <td>{type}</td>
            <td>{duration}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light" to={"/edit-fitness/"+_id}>
                <button class="btn btn-success">
                Edit
                </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}