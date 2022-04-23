import { Link, useNavigate } from 'react-router-dom'
import './signup.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#0063cc"),
    backgroundColor: "#0063cc",
    '&:hover': {
      backgroundColor: "#0063cc",
    },
  }));

export const Signin = ()=>{
    const navigate = useNavigate();

    const [name, setName] = React.useState('Composed TextField');

  const handleChange = (event) => {
    setName(event.target.value);
  };

    const inputHandle = ()=>{

    }
    const handleSubmit = ()=>{

    }
    return (
        <div className='register'>
            <Link to={'/'}>
                <div className='regNav'>
                <div style={{cursor:'pointer', display:"flex", fontSize:"30px", fontWeight:"700"}}>
                            <div style={{color:"black"}}>Show</div>
                            <div style={{color:"green"}}>Art</div>
                </div>
                </div>
            </Link>
                
        <div className='inputbox'>
        <Box component="form" sx={{'& > :not(style)': { m: 1 },}} noValidate autoComplete="off">
        <div style={{display:"flex", justifyContent:'center'}}> <h2>Signin </h2></div>
            <div className='inputdiv'>
                <TextField id="email"  label="email" type="email" autoComplete="off" variant="filled"/>
                <TextField id="filled-password-input"  label="Password" type="password" autoComplete="current-password" variant="filled"/>
            </div>
        </Box>
            <div className='filediv' style={{padding:'20px 0'}}>
                <ColorButton variant="contained">Submit</ColorButton>
            </div>
            <div style={{display:'flex', justifyContent:"center"}}>
            Create a new account,<Link to={'/register'}>click here</Link>
            </div>
        </div>
        </div>
    )

}