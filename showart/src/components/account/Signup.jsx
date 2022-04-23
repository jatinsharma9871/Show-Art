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

export const Signup = ()=>{
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
            <div className='regNav'>
                <div style={{cursor:'pointer', display:"flex", fontSize:"30px", fontWeight:"700"}}>
                            <div style={{color:"black"}}>Show</div>
                            <div style={{color:"green"}}>Art</div>
                </div>
            </div>
        <div className='inputbox'>
        <Box component="form" sx={{'& > :not(style)': { m: 1 },}} noValidate autoComplete="off">
            <div style={{display:"flex", justifyContent:'center'}}> <h2>Register </h2></div>
            <div className='inputdiv'>
                <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Name</InputLabel>
                    <FilledInput id="component-filled"  onChange={handleChange} />
                </FormControl>
                <TextField id="email"  label="email" type="email" autoComplete="off" variant="filled"/>
            </div>
            <div className='inputdiv'>
                <TextField id="filled-password-input"  label="Password" type="password" autoComplete="current-password" variant="filled"/>
                <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Country</InputLabel>
                    <FilledInput id="component-filled"  onChange={handleChange} />
                </FormControl>
            </div>
            <div className='filediv'>
                <input type="file" accept='jpeg,jpg,png' name="" id="" />
            </div>
        </Box>
            <div className='filediv' style={{padding:'20px 0 10px'}}>
                <ColorButton variant="contained">Submit</ColorButton>
            </div>
            <div className='filediv'>
                <div>Already have an account,<Link to={'/login'}>click here</Link></div>
            </div>
        </div>
        </div>
    )

}