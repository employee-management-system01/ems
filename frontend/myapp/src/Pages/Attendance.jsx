import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { textAlign, width } from '@mui/system';

function Attendance() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    const res = await axios.get('http://localhost:6060/getAttendance');
    setData(res.data);
    setFilteredData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = data.filter(item => 
      item.emp_name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const tableCustomStyles = {
    headCells: {
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
      
        // justifyContent: 'center',
        backgroundColor: '#F0F8FF'
      },
    },
  }

  const columns = [
   {
    name: "Sno",
    cell :(row ,index)=> index+1,
    width: '80px'

   },
    {
      name: 'Emp Id',
      selector: row => row.emp_id,
      width: '80px', // Correcting innerWidth to width
      center: true,  // Center aligns both header and cell content
    },
    {
      name: 'Name',
      selector: row => row.emp_name
    },
    {
      name: 'Check In',
      selector: row => row.check_in
    },
    {
      name: 'Check Out',
      selector: row => row.check_out
    },
    {
      name: 'Status',
      selector: row => row.status
    },
    {
      name: 'Total time',
      selector: row => row.timedifference
    }
  ];

  return (
    <>
     <div className="d-flex">

        <input
          className="form-control me-2 m"
          type="search"
          placeholder="Search by name..."
          aria-label="Search"
          onChange={handleSearch}
          value={search}
          style={{marginBottom:'7px'}}
          />
          <br/>
     </div>
        <DataTable columns={columns} data={filteredData} pagination    paginationRowsPerPageOptions={[6, 10, 15, 20]} customStyles={tableCustomStyles}/>
     
    </>
  );
}

export default Attendance;
