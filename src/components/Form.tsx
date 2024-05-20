import React, { useState } from 'react';
import { TextField, Button, Typography, MenuItem , Box} from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../state/store';

const genders = [{key:"Male", value: "Male"}, {key:"Female", value: "Female"}]

const Form = () => {
    const isVisible = useSelector((state: RootState) => state.form.isVisible);
    
    return (
        <Box sx={{my: 2, visibility: isVisible ? 'visible' : 'hidden'}}>
        <Grid container spacing = {5} sx = {{p: 2}}>
        <Grid item xs={6} >
        <TextField required id="name-field" label="Name" variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6} >
        <TextField required id="mobile-field" label="Mobile" variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6} >
        <TextField id="address-field" label="Address" variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6} >
        <TextField select id="gender-field" label="Gender" variant="outlined" fullWidth>
            {
                genders.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))
            }
        </TextField>
        </Grid>
        <Grid item xs={12} ><Button variant="contained" fullWidth>Submit</Button></Grid>
        </Grid>
        </Box>
    );
}

export default Form;