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
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [total, setTotal] = useState(0)
    const [limit, setLimit] = useState(10)


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
            console.log(response);
            setProducts(response?.data?.devices)
        } catch (err) {
            Swal.fire({
                title: `${err?.response?.data?.message}`,
                icon: "error"
            });
        }
    };

    const updateStatus = async (productId, statusType) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: `Yes, ${statusType} it!`
            }).then(async (result) => {
                if(result.isConfirmed) {
                    const response = await axios.patch(`${backendApp.url}${apis.updateStatus}`, {
                        deviceId: productId,
                        status: statusType
                    });
                    getDevices()
                    if (response) {
                        Swal.fire({
                            title: "Updated!",
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1)
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
                                    Status
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
                                        {(page - 1) * limit + index + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center" sx={{textTransform: 'capitalize', fontWeight: 'bold', color: product.status === 'approved' ? 'green' : product.status === 'hold' ? 'brown':'red'}}>
                                    {product.status === 'submitted' ? (
                                        <>
                                            <Stack direction="row" spacing={2}>
                                                <Button variant="contained" onClick={() => updateStatus(product._id, 'approved')}>Approve</Button>
                                                <Button variant="contained" color='warning' onClick={() => updateStatus(product._id, 'hold')}>
                                                    Hold
                                                </Button>
                                                <Button variant="contained" color='error' onClick={() => updateStatus(product._id, 'rejected')}>
                                                    Reject
                                                </Button>
                                            </Stack>
                                        </>
                                    ) : (
                                        product.status
                                    )}
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
                                        {product.issueDescription ? product.issueDescription : '-'}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.isInWarranty ? 'Yes' : 'No'}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.warrantyValidity ? product.warrantyValidity : '-'}
                                    </Typography>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                    {products?.length > 0 && (
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    rowsPerPage={rowsPerPage}
                                    colSpan={3}
                                    count={total}
                                    page={page - 1}
                                    onPageChange={handleChangePage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    )}
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
