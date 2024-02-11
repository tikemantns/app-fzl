import React from 'react';
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

const users = [
    {
        id: "1",
        name: "John Doe",
        phone: "1234567890",
        email: "john.doe@example.com",
        isAdmin: "Yes",
        address: "New York, NY",
        addharNo: "1234567890123456",
        alternatePhone: "9876543210",
    },
    {
        id: "2",
        name: "Jane Smith",
        phone: "9876543210",
        email: "jane.smith@example.com",
        isAdmin: "No",
        address: "Los Angeles, CA",
        addharNo: "9876543210123456",
        alternatePhone: "1234567890",
    },
    {
        id: "3",
        name: "Alice Johnson",
        phone: "5555555555",
        email: "alice.johnson@example.com",
        isAdmin: "Yes",
        address: "Chicago, IL",
        addharNo: "1111222233334444",
        alternatePhone: "9999999999",
    },
    {
        id: "4",
        name: "Bob Williams",
        phone: "1111111111",
        email: "bob.williams@example.com",
        isAdmin: "No",
        address: "San Francisco, CA",
        addharNo: "4444333322221111",
        alternatePhone: "8888888888",
    },
    {
        id: "5",
        name: "Eva Davis",
        phone: "9999999999",
        email: "eva.davis@example.com",
        isAdmin: "Yes",
        address: "Miami, FL",
        addharNo: "5555666677778888",
        alternatePhone: "2222222222",
    },
    {
        id: "6",
        name: "Michael Brown",
        phone: "4444444444",
        email: "michael.brown@example.com",
        isAdmin: "No",
        address: "Seattle, WA",
        addharNo: "7777666655554444",
        alternatePhone: "3333333333",
    },
    {
        id: "7",
        name: "Olivia Miller",
        phone: "2222222222",
        email: "olivia.miller@example.com",
        isAdmin: "Yes",
        address: "Dallas, TX",
        addharNo: "8888777766665555",
        alternatePhone: "6666666666",
    },
    {
        id: "8",
        name: "David Wilson",
        phone: "6666666666",
        email: "david.wilson@example.com",
        isAdmin: "No",
        address: "Denver, CO",
        addharNo: "2222111133334444",
        alternatePhone: "5555555555",
    },
    {
        id: "9",
        name: "Sophia Taylor",
        phone: "3333333333",
        email: "sophia.taylor@example.com",
        isAdmin: "Yes",
        address: "Atlanta, GA",
        addharNo: "9999888877776666",
        alternatePhone: "4444444444",
    },
    {
        id: "10",
        name: "William Anderson",
        phone: "8888888888",
        email: "william.anderson@example.com",
        isAdmin: "No",
        address: "Houston, TX",
        addharNo: "4444555566667777",
        alternatePhone: "1111111111",
    },
];


const Users = () => {

    const handleEdit = (userId) => {
        // Handle edit action for the user with userId
        console.log(`Edit user with id: ${userId}`);
    };

    const handleDelete = (userId) => {
        // Handle delete action for the user with userId
        console.log(`Delete user with id: ${userId}`);
    };


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
                                    Id
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
                        {users.map((user) => (
                            <TableRow key={user.deviceName}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {user.id}
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
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {user.post}
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
                                        {user.isAdmin}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {user.address}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {user.addharNo}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {user.alternatePhone}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button variant="outlined" onClick={() => handleEdit(user.id)}>
                                        Edit
                                    </Button>
                                    <Button variant="outlined" onClick={() => handleDelete(user.id)}>
                                        Delete
                                    </Button>
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
