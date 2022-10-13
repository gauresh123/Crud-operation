import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const[name,setName]=useState("");
    const[city,setCity]=useState("");
    const navigate = useNavigate();

    const submit = ()=>{
        async function see(){
             await axios.post(`https://628dd8d6a339dfef87a18694.mockapi.io/Crud`,{
                name,
                city
            })
        }
        see();
        navigate("/read");
    }
  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={()=>navigate("/read")}>Go to Users</button><br /><br />

        <div class="input-group mb-3" style={{width:"20vw",border:"1px solid black",borderRadius:"5px"}}>
  <input type="text" class="form-control" placeholder="Enter Name" value={name} aria-label="name" aria-describedby="basic-addon1" onChange={(e)=>setName(e.target.value)}/>
</div>
<div class="input-group mb-3" style={{width:"20vw",border:"1px solid black",borderRadius:"5px"}}>
  <input type="text" class="form-control" placeholder="Enter City" value={city} aria-label="city" aria-describedby="basic-addon1" onChange={(e)=>setCity(e.target.value)}/>
</div>
<div>
<button type="button" class="btn btn-primary" onClick={submit}>Submit</button>
</div>
    </div>
  )
}

export default Create