import React, { useState } from 'react'
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button
} from '@material-ui/core';
import { authenticate } from '../context/auth';
const Login = () => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        authenticate({username,password})
    }
    return (
        <div style={{ padding: 30 }}>
            <Paper>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField label="Username" onChange={handleUsernameChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" onChange={handlePasswordChange} type={'password'}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth onClick={handleSubmit}> Login </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Login