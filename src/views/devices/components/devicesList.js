import React, { useEffect, useState } from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Button,
    Stack,
    TablePagination,
    TableFooter,
    IconButton
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DashboardCard from '../../../components/shared/DashboardCard';
import Swal from 'sweetalert2';
import axios from 'axios';
import { apis, backendApp } from 'src/configs/apiConfig';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

const RequestedDevices = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState(0)
    const [limit, setLimit] = useState(50)
    const [rowsPerPage, setRowsPerPage] = React.useState(50);


    const userDetails = useSelector((state) => state.persistentSlice.user)

    const getDevices = async () => {
        try {
            const response = await axios.get(`${backendApp.url}${apis.devices}`, {
                params: {
                    page,
                    limit,
                    userId: userDetails._id
                }
            });
            setTotal(response?.data?.total)
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    useEffect(() => {
        getDevices()
    }, [page])


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
                        {products?.length > 0 && products?.map((product, index) => (
                            <TableRow key={product.deviceName}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {(page) * limit + index + 1}
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
                                    <Button disabled={!(product.status === 'submitted')} variant="outlined" color='error' onClick={() => handleReject(product.id)}>
                                        Reject
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button disabled={!(product.status === 'submitted')} variant="outlined" color='warning' onClick={() => handleHold(product.id)}>
                                        Hold
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button disabled={!(product.status === 'submitted')} variant="outlined" color='success' onClick={() => handleApprove(product.id)}>
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
                                        {product.deviceBoxIncluded ? 'Yes' : 'No'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.deviceHasIssue ? 'Yes' : 'No'}
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
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                rowsPerPage={rowsPerPage}
                                colSpan={3}
                                count={total}
                                page={page}
                                onPageChange={handleChangePage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>

                {products?.length === 0 && (
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: 'brown' }}>
                        No Records Found
                    </Typography>
                )}

            </Box>
        </DashboardCard>
    );
};

export default RequestedDevices;
