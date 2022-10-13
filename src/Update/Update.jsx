import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const[name,setName]=useState("");
    const[city,setCity]=useState("");
    const navigate = useNavigate();
    const {id} = useParams();
   console.log({id});
    async function see(){
      const res = await axios.get(`https://628dd8d6a339dfef87a18694.mockapi.io/Crud/${id}`);
    setName(res.data.name);
    setCity(res.data.city);
    
    }

    useEffect(()=>{
      see();
    },[])
    const update = (e)=>{
      e.preventDefault();
      async function foo(){
        await axios.put(`https://628dd8d6a339dfef87a18694.mockapi.io/Crud/${id}`,{
          name,
          city
        })
      }
      foo();
      navigate("/read");
    }
  return (
    <div>
      <div>
        <div class="input-group mb-3" style={{width:"20vw",border:"1px solid black",borderRadius:"5px"}}>
  <input type="text" class="form-control" placeholder="Enter Name" value={name} aria-label="name" aria-describedby="basic-addon1" onChange={(e)=>setName(e.target.value)}/>
</div>
<div class="input-group mb-3" style={{width:"20vw",border:"1px solid black",borderRadius:"5px"}}>
  <input type="text" class="form-control" placeholder="Enter City" value={city} aria-label="city" aria-describedby="basic-addon1" onChange={(e)=>setCity(e.target.value)}/>
</div>
<div>
<button type="button" class="btn btn-primary" onClick={update}>Update</button>
</div>
    </div>
    </div>
  )
}

export default Update