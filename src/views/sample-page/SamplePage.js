import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { updateDeviceField, resetDeviceForm } from '../../actions/deviceActions';
import { validateForm } from './InputValidations';
import Swal from 'sweetalert2';
import Autocomplete from '@mui/material/Autocomplete';

import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { apis, backendApp } from 'src/configs/apiConfig';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const SamplePage = () => {

  // CSS on radio error text
  const radioTextCss = {
    fontSize: "0.75rem",
    marginLeft: "14px",
    marginRight: "14px",
    marginBottom: "0px",
    marginTop: "3px",
    lineHeight: "1.66",
    color: "#FA896B"
  };

  // select inputFiled of devices
  const selectInputDevice = [
    { label: "IPhone 6" },
    { label: "Iphone 10 pro" },
    { label: "IPad" },
    { label: "Iphone 12" },
    { label: "IWatch" }
  ];

  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.persistentSlice.user);
  const inputFields = useSelector(state => state.reducer.inputFields);
  console.log(inputFields);
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  // Handle for text input change
  const handleTextChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateDeviceField(name, value));
  }

  // Handler for radio button change
  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateDeviceField(name, value));
  }

  // Handler for select change                                         
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateDeviceField(name, value));
  };

  // Remove all input field data
  const handleCancel = () => {
    dispatch(resetDeviceForm());
  }

  // Data for submitting
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors: newErrors } = await validateForm(inputFields, isDisabled);

    setErrors(newErrors);

    if (isValid) {
      // All validations passed, submit the form
      try {
        // API endpoint
        const url = `${backendApp.url}${apis.submitDeviceDetails}`
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...inputFields, userId: userDetails._id, status: 'submitted' }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // // popup for successFully submit the form
        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: "top-end",
        //   showConfirmButton: false,
        //   timer: 4000,
        //   timerProgressBar: true,
        //   didOpen: (toast) => {
        //     toast.onmouseenter = Swal.stopTimer;
        //     toast.onmouseleave = Swal.resumeTimer;
        //   }
        // });
        // Toast.fire({
        //   icon: "success",
        //   title: "Submitted successfully"
        // }).then(()=> {
        //   navigate('/devices');
        // })

        Swal.fire({
          icon: "success",
          title: "Submitted successfully",
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });

        // Reset the form or navigate to a success page
        dispatch(resetDeviceForm()); // This line reset action
        console.log('Form data submitted:', data);

        // This timer will delay between two popup fire
        await new Promise(resolve => setTimeout(resolve, 4000));

        // Wait for the SweetAlert to close and then navigate to the devices page
        Swal.fire({
          icon: "success",
          title: "Redirecting to Devices Page...",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate('/devices'); // This line navigate to devices page
        });

      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: error,
        });
      }
    }
  };

  return (
    <PageContainer title="Sell Old Device" description="Sell your old apple devices">
      <DashboardCard title="Sell Old Device">
        <Box sx={{ flexGrow: 1 }} component="form"
          noValidate
          autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {/* <FormControl fullWidth> */}
              {/* <Autocomplete
                  required
                  disablePortal
                  id="combo-box-demo"
                  options={selectInputDevice}
                  name="selectedDevice"
                  value={inputFields?.selectedDevice}
                  onChange={handleChange}
                  error={!!errors.selectedDevice}
                  helperText={errors.selectedDevice}
                  // sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Select Devices" />}
                /> */}
              <FormControl fullWidth>
                <TextField
                  select
                  required
                  id="demo-simple-select"
                  name="selectedDevice"
                  value={inputFields?.selectedDevice}
                  label="Select Devices"
                  onChange={handleChange}
                  error={!!errors.selectedDevice}
                  helperText={errors.selectedDevice}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="iphone6">Iphone 6</MenuItem>
                  <MenuItem value="iphone10pro">Iphone 10 pro</MenuItem>
                  <MenuItem value="iphone12">Iphone 12</MenuItem>
                  <MenuItem value="ipad">IPad</MenuItem>
                  <MenuItem value="iwatch">IWatch</MenuItem>
                </TextField>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Select Model</InputLabel> */}
                <TextField
                  // labelId="demo-simple-select-label"
                  select
                  required
                  id="demo-simple-select"
                  name="selectedModel"
                  value={inputFields?.selectedModel}
                  label="Select Model"
                  onChange={handleChange}
                  error={!!errors.selectedModel}
                  helperText={errors.selectedModel}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="iphone6pro">Iphone 6 Pro</MenuItem>
                  <MenuItem value="iphone10pro345">Iphone 10 Pro 345</MenuItem>
                  <MenuItem value="iphone12max">Iphone 12 max</MenuItem>
                  <MenuItem value="A2013ipadpro">A2013 on the iPad Pro Wi-Fi + Cellular</MenuItem>
                  <MenuItem value="A2435iwatchpro12-inch">A2435 on iwatch Pro 12-inch</MenuItem>
                </TextField>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                name="deviceColor"
                label="Device Color"
                value={inputFields?.deviceColor}
                onChange={handleTextChange}
                error={!!errors.deviceColor}
                helperText={errors.deviceColor}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-basic"
                name="devicePrice"
                label="Price"
                variant="outlined"
                value={inputFields?.devicePrice}
                onChange={handleTextChange}
                error={errors.devicePrice}
                helperText={errors.devicePrice} validateForm
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                name="serialOrImei"
                label="Serial No/ IMEI NO"
                value={inputFields?.serialOrImei}
                onChange={handleTextChange}
                error={!!errors.serialOrImei}
                helperText={errors.serialOrImei}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Device Box Included</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="deviceBoxIncluded"
                  value={inputFields?.deviceBoxIncluded}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.deviceBoxIncluded && (<span style={radioTextCss}>{errors.deviceBoxIncluded}</span>)}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Does Device Has Any Issue?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="deviceHasIssue"
                  value={inputFields?.deviceHasIssue}
                  onChange={(event) => {
                    handleRadioChange(event);
                    setIsDisabled(event.target.value === "no");
                  }}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.deviceHasIssue && (<span style={radioTextCss}>{errors.deviceHasIssue}</span>)}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                name="issueDescription"
                label="Issue with device"
                value={inputFields?.issueDescription}
                onChange={handleTextChange}
                error={!!errors.issueDescription}
                helperText={errors.issueDescription}
                disabled={isDisabled}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">is Device in the warranty?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="isInWarranty"
                  value={inputFields?.isInWarranty}
                  onChange={(event) => {
                    handleRadioChange(event);
                    setIsDisabled(event.target.value === "no");
                  }}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.isInWarranty && (<span style={radioTextCss}>{errors.isInWarranty}</span>)}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                name="warrantyValidity"
                label="Warranty Validity"
                value={inputFields?.warrantyValidity}
                onChange={handleTextChange}
                error={!!errors.warrantyValidity}
                helperText={errors.warrantyValidity}
                disabled={isDisabled}
              />
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={2} direction="row" sx={{ float: 'right', margin: 1 }}>
                <Button variant="contained" color='error' onClick={handleCancel}>Cancel</Button>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
              </Stack>
            </Grid>

          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage