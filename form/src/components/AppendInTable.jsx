/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import Form from './Form';
import ShowTable from './ShowTable';

import Table from "./Tabe";

function AppendInTable() {
    const [formData, setfrom] = React.useState([]);
    const ondata = (data) => {
        setfrom([...formData, data]);
      };

    useEffect(() => {
        const func = async () => {
          try {
            let res = await fetch("http://localhost:3000/form1");
            let forDa = await res.json();
             console.log(forDa);
             setfrom(forDa);
          } catch (e) {
            console.log(e);
          }
        };
        func();
      }, []);
  return (
   <>
   <Form onTable={ondata}/>

   {
       formData.map((formData)=> 
       <ShowTable key={formData.id} {...formData} />)
      
   }
   
   </>
  )
}

export default AppendInTable