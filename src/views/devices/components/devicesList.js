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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DashboardCard from '../../../components/shared/DashboardCard';
import Swal from 'sweetalert2';
import axios from 'axios';
import { apis, backendApp } from 'src/configs/apiConfig';
import { useSelector } from 'react-redux';

const RequestedDevices = () => {
    const [products, setProducts] = useState([])

    const userDetails = useSelector((state) => state.persistentSlice.user)
    
    const getDevices = async () => {
        try {
            const response = await axios.get(`${backendApp.url}${apis.devices}`, {
                params: {
                    userId: userDetails._id
                }
            });
            setProducts(response?.data?.devices)
        } catch (err) {
            Swal.fire({
                title: `${err?.response?.data?.message}`,
                icon: "error"
            });
        }
    };

    const handleReject = (productId) => {
        // Handle reject action for the product with productId
        console.log(`Reject product with id: ${productId}`);
    };

    const handleHold = (productId) => {
        // Handle hold action for the product with productId
        console.log(`Hold product with id: ${productId}`);
    };

    const handleApprove = (productId) => {
        // Handle approve action for the product with productId
        console.log(`Approve product with id: ${productId}`);
    };

    useEffect(() => {
        getDevices()
    }, [])


    return (

        <DashboardCard title="Devices Requested">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2,
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Sr. No
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    View
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Reject
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Hold
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Approve
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Device Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Device Model
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Device Color
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Device Price
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Storage
                                </Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Serial No/IMEI NO
                                </Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Box Included
                                </Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Has Issue
                                </Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Device Issues
                                </Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Device Warranty
                                </Typography>
                            </TableCell>

                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Warranty Validity
                                </Typography>
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((product, index) => (
                            <TableRow key={product.deviceName}>
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

                                <TableCell align="center">
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <RemoveRedEyeIcon />
                                    </Typography>
                                </TableCell>

                                <TableCell align="center">
                                    <Button variant="outlined" color='error' onClick={() => handleReject(product.id)}>
                                        Reject
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color='warning' onClick={() => handleHold(product.id)}>
                                        Hold
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color='success' onClick={() => handleApprove(product.id)}>
                                        Approve
                                    </Button>
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
                                                {product.selectedDevice}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.selectedModel}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product?.deviceColor}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.devicePrice}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.storage}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.serialOrImei}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.deviceBoxIncluded ? 'Yes':'No'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.deviceHasIssue ? 'Yes':'No'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.issueDescription}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.isInWarranty}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.warrantyValidity}
                                    </Typography>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default RequestedDevices;
