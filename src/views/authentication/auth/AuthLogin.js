import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox
} from '@mui/material';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from 'react-redux';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import {backendApp, auth} from '../../../configs/apiConfig'
import { updateUserDetails } from 'src/slices/persistentSlice';

const AuthLogin = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${backendApp.url}${auth.login}`, {
                email: email,
                password: password
            })
            if(response) {
                dispatch(updateUserDetails(response?.data?.user))
                navigate('/devices');
            }
        } catch (err) {
            Swal.fire({
                title: `${err?.response?.data?.message}`,
                icon: "error"
            });
        }
    };

    return (
        <>
            <Typography align='center' variant="h6" mb={1}>
                iTech Service
            </Typography>

            <Stack>
                <Box>
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='username' mb="5px">Email</Typography>
                    <CustomTextField
                        id="username"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box mt="25px">
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                    <CustomTextField
                        id="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>
                <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Remember this Device"
                        />
                    </FormGroup>
                    <Typography
                        to="/"
                        fontWeight="500"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Forgot Password ?
                    </Typography>
                </Stack>
            </Stack>
            <Box>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
            </Box>
        </>
    );
};

export default AuthLogin;
