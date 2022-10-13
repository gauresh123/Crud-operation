import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Read = () => {
    const[data,setData]=useState([]);
    const navi = useNavigate();
    const[chng,setChng]=useState("");


  async function getdata(){
    const res = await axios.get("https://628dd8d6a339dfef87a18694.mockapi.io/Crud");
    setData(res.data);
    console.log(res.data);
    }
    useEffect(()=>{
        getdata();
    },[]);
    const update = (val)=>{
      
      navi(`/update/${val.id}`);
      
    }

    const delet = (val)=>{
      async function del(){
        await axios.delete(`https://628dd8d6a339dfef87a18694.mockapi.io/Crud/${val.id}`).then(()=>{getdata();}).catch((val)=>console.log(val))
      }
      del();
    }
   
  return (
    <div style={{paddingLeft:"20px",paddingRight:"20px"}}>
      <input type="text"  style={{width:'300px',height:'40px',borderRadius:"6px"}}
       placeholder="Search Names"
       onChange={(e)=>setChng(e.target.value)}/><br /><br />
       <button type="button" class="btn btn-primary" onClick={()=>navi("/")}>Back</button><br /><br />
     <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th> 
      <th scope="col">City</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>

    {
      data.filter((ele)=>{
        if(ele === ""){
          return ele;
        }
        else{
          return(ele.name.includes(chng))
        }
      })
        .map((val,i)=>{
            return(
              
  <tbody>
    <tr>
      <th scope="row">{val.id}</th>
      <td>{val.name}</td>
      <td>{val.city}</td>
      <td><button type="button" className="btn btn-primary" onClick={()=>update(val)}>Update</button></td>
      <td><button type="button" className="btn btn-danger" onClick={()=>delet(val)}>Delete</button></td>
    </tr>
    
  </tbody>





    
            )
        })
    }
    </table>
    
    </div>
    
  )
   }




export default Read;