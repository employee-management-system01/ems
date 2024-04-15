import Card from 'react-bootstrap/Card';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';


function Cards() {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <Card style={{ width: '15rem' ,height:'130px'}}>
      <Card.Body>
        <Card.Title> <ManageAccountsIcon/></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
             Admin
        </Card.Subtitle>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '15rem',height:'130px '}}>
    <Card.Body>
      <Card.Title>
        <GroupsIcon/>
      </Card.Title>
      
      <Card.Text>
      
      </Card.Text>
     
    </Card.Body>
  </Card>

  <Card style={{ width: '15rem',height:'130px' }}>
  <Card.Body>
    <Card.Title> <EmojiPeopleIcon/> </Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
  );
}

export default Cards;