/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import { useTable } from 'react-table';
import ReactTable from "react-table";  
//  import "react-table/react-table.css";

function Example() {


    const data = [{  
        msg: 'Hello',  
        num: 1  
        },{  
        msg: 'Hey',  
        num: 2  
        },{  
        msg: 'Hi',  
        num: 3   
        },{  
        msg: 'Bye',  
        num: 4  
        },{  
        msg: 'Welcome',  
        num: 5  
        },{  
        msg: 'Thanks',  
        num: 6  
        }]

        const columns = [{  
            Header: 'Message',  
                   accessor: 'msg'  
                  },{  
                  Header: 'Number',  
                  accessor: 'num'  
                  }]
return (  
     <div>  
        <ReactTable  
            data={data}  
            columns={columns}  
            defaultPageSize = {2}  
            pageSizeOptions = {[2,4, 6]}  
         />  
     </div>        
)
}

