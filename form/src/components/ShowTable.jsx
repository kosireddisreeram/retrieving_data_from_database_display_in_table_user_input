import React, { useMemo } from 'react'
import AppendInTable from './AppendInTable';
import Table from './Tabe';

function ShowTable(props) {
    const {name}=props
    const columns = useMemo(
        () => [
        
          {
            // Second group - Details
            Header: "Details",
            // Second group columns
            columns: [
              {
                Header: "Language",
                accessor: "name"
              },
              {
                Header: "Genre(s)",
                accessor: "show.genres"
              },
              {
                Header: "Runtime",
                accessor: "show.runtime"
              },
              {
                Header: "Status",
                accessor: "show.status"
              }
            ]
          }
        ],
        []
      );
      return (
        <div className="App">
        <Table columns={columns} />
        </div>
      );
}

