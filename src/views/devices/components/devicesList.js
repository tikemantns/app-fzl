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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DashboardCard from '../../../components/shared/DashboardCard';

const products = [
    {
        id: "1",
        deviceName: "Iphone 12 Mini",
        deviceModel: "Iphone 12",
        deviceColor: "White",
        storage: "8/64 GB",
        serialNo: "IMEI2334392938829382233",
        isBoxIncluded: "No",
        isDevicehasIssues: "Yes",
        deviceIssues: "Screen is not working",
        isdeviceInWarranty: "Yes",
        warrantyValidity: "6 Months",
    },
    {
        id: "2",
        deviceName: "Iphone 12 Mini",
        deviceModel: "Iphone 12",
        deviceColor: "White",
        storage: "8/64 GB",
        serialNo: "IMEI2334392938829382233",
        isBoxIncluded: "No",
        isDevicehasIssues: "Yes",
        deviceIssues: "Screen is not working",
        isdeviceInWarranty: "Yes",
        warrantyValidity: "6 Months",
    },
    {
        id: "3",
        deviceName: "Iphone 12 Mini",
        deviceModel: "Iphone 12",
        deviceColor: "White",
        storage: "8/64 GB",
        serialNo: "IMEI2334392938829382233",
        isBoxIncluded: "No",
        isDevicehasIssues: "Yes",
        deviceIssues: "Screen is not working",
        isdeviceInWarranty: "Yes",
        warrantyValidity: "6 Months",
    },
    {
        id: "4",
        deviceName: "Iphone 12 Mini",
        deviceModel: "Iphone 12",
        deviceColor: "White",
        storage: "8/64 GB",
        serialNo: "IMEI2334392938829382233",
        isBoxIncluded: "No",
        isDevicehasIssues: "Yes",
        deviceIssues: "Screen is not working",
        isdeviceInWarranty: "Yes",
        warrantyValidity: "6 Months",
    },
];


const RequestedDevices = () => {

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
                                    Id
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
                        {products.map((product) => (
                            <TableRow key={product.deviceName}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
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
                                                {product.deviceName}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.deviceModel}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.deviceColor}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.storage}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.serialNo}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.isBoxIncluded}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.isDevicehasIssues}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.deviceIssues}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.isdeviceInWarranty}
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
