import React, { useEffect, useState } from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Button
} from '@mui/material';
import DashboardCard from '../../components/shared/DashboardCard';
import { apis, auth, backendApp } from 'src/configs/apiConfig';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

const Users = () => {
    const [users, setUsers] = useState([])

    const loggedInUser = useSelector( (state) => state.persistentSlice.user) 

    const getUsers = async () => {
        try {
            const response = await axios.get(`${backendApp.url}${apis.users}`)
            setUsers(response?.data?.users)
        } catch (err) {
            Swal.fire({
                title: `${err?.response?.data?.message}`,
                icon: "error"
            });
        }
    };

    const deleteUser = async (userId) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: `Yes, Delete it!`
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const response = await axios.delete(`${backendApp.url}${apis.deleteUser}`, {
                        data: {
                            userId: userId
                        }
                    });
                    getUsers()
                    if (response) {
                        Swal.fire({
                            title: "Deleted!",
                            text: `${response.data.message}`,
                            icon: "success"
                        });
                    }
                }
            });
        } catch (err) {
            Swal.fire({
                title: 'Error',
                text: `${err?.response?.data?.message}`,
                icon: "error"
            });
        }
    };

    useEffect(() => {
        getUsers()
    }, [])

    return (

        <DashboardCard title="Users">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Sr. No
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Phone
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Email
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Is Admin
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Address
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Adhar Number
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Alternate Contact
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Actions
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((user, index) => (
                            <TableRow key={user.deviceName}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {index + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {user.name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {user.phone}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {user.email}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {user.isAdmin ? 'Yes' : 'No'}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {user.address}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {user.adharNumber}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {user.alternateContact}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    {(loggedInUser.isAdmin && loggedInUser._id !== user._id) && (
                                        <Button variant="outlined" color='error' onClick={() => deleteUser(user._id)}>
                                            Delete
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default Users;
