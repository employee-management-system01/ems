import Card from 'react-bootstrap/Card';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Cards() {

const[data,setData] = useState([])

async function getData (){
  let res = await axios.get('http://localhost:6060/cards')
  console.log(res.data);
  setData(res.data)
}
useEffect(()=>{
  getData()
},[])




  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    {data.map((item,index) => {
      return (
        <>
          <Card style={{ width: '15rem' ,height:'130px', backgroundColor:'#B0EBB4'}}>
            <Card.Body  >
              <Card.Title> <ManageAccountsIcon/></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Admin
              </Card.Subtitle>
              <Card.Text>
                  1
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Card style={{ width: '15rem',height:'130px ', backgroundColor:'#FFEC9E'}}>
            <Card.Body>
              <GroupsIcon/>
              <Card.Subtitle className="mb-2 text-muted">
                Employee
              </Card.Subtitle>
              <Card.Title>
              </Card.Title>
              <Card.Text>
                {item.emp_rows}
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Card style={{ width: '15rem',height:'130px',backgroundColor:'#FFEBD8' }}>
            <Card.Body>
              <Card.Title> <EmojiPeopleIcon/> </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Attendance
              </Card.Subtitle>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      );
    })}
  </div>
  );
}

export default Cards;