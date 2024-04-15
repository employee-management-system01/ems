import React from 'react';
import Box from '@mui/material/Box';
import Card1 from '@mui/material/Card';
import Card2 from '@mui/material/Card';
import Card3 from '@mui/material/Card';
import Card4 from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const card1 = (
  <Box sx={{ width: '275px' }}>
    
    <CardContent>
      <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.primary" gutterBottom>
        Admine
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Select</Button>
    </CardActions>
    
  </Box>
);


const card2 = (
  <Box sx={{ width: '275px' }}>
    
    <CardContent>
      <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.primary" gutterBottom>
        Employees
      </Typography>
    </CardContent>
    <CardActions>
      
    </CardActions>
    
  </Box>
);

const card3 = (
  <Box sx={{ width: '275px' }}>
    
    <CardContent>
      <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.primary" gutterBottom>
       Attendance
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Select</Button>
    </CardActions>
    
  </Box>
);

const card4 = (
  <Box sx={{ width: '275px' }}>
    
    <CardContent>
      <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.primary" gutterBottom>
       Total salary
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Select</Button>
    </CardActions>
    
  </Box>
);

export default function Cards2() {
  return (
    <Box sx={{ Width: '900px', display: 'flex', justifyContent: "space-between", }}>
      <Card1 variant="outlined" sx={{ width: 250, height: '160px' }}>{card1}</Card1>
      <Card2 variant="outlined" sx={{ width: 250, height: '160px' }}>{card2}</Card2>
      <Card3 variant="outlined" sx={{ width: 250, height: '160px' }}>{card3}</Card3>
      <Card4 variant="outlined" sx={{ width: 250, height: '160px' }}>{card4}</Card4>
    </Box>
  );
}

// export default Cards2