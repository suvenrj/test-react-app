import React, { useState , useRef} from 'react';
import { TextField, Button, Typography, MenuItem , Box, Paper} from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { enableVisibility, disableVisibility } from '../state/formSlice';


const Chat = () => {
    const dispatch = useDispatch();
    const chatRef = useRef<HTMLInputElement>(null);
    const handleSubmit = () => {
        if (chatRef.current){
            console.log(chatRef.current.value);
            let inputText: string = chatRef.current.value;
            fetch('http://localhost:3001/query', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query:  inputText})
              })
              .then(response => response.json())
              .then(data => {
                if (data.verdict === "show"){
                    dispatch(enableVisibility());
                }
                else if (data.verdict === "hide"){
                    dispatch(disableVisibility());
                }                
                console.log(data);
              })
              .catch(error => {
                // Handle error
                console.error('Error posting data:', error);
              });
        }
    }
    return (
        <Grid container spacing={1} sx={{p:2}}>
        <Grid item xs={12}>
        <Paper elevation={3}>
        <Typography variant="h4" component="div" align="center" style={{ padding: '20px' }}>
            DESCO-CHAT
        </Typography>
        </Paper>
        </Grid>
        <Grid item xs={9}>
        <TextField id="chat-field" label="Enter your query" variant="outlined" inputRef = {chatRef} fullWidth/>
        </Grid>
        <Grid item xs={3}><Button variant="contained" onClick={handleSubmit} fullWidth>Ask</Button></Grid>
        </Grid>
    );
}

export default Chat;