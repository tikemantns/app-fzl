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
                  <MenuItem value="iphone">iPhone</MenuItem>
                  <MenuItem value="ipad">iPad</MenuItem>
                  <MenuItem value="macBook">MacBook</MenuItem>
                  <MenuItem value="iwatch">iWatch</MenuItem>
                  <MenuItem value="iMac">iMac</MenuItem>
                  <MenuItem value="macmini">Mac Mini</MenuItem>
                  <MenuItem value="macpro">Mac Pro</MenuItem>
                  <MenuItem value="appleTV">Apple TV</MenuItem>
                  <MenuItem value="airPods">AirPods</MenuItem>
                  <MenuItem value="homePod">HomePod</MenuItem>
                  <MenuItem value="iPod">iPod</MenuItem>
                  <MenuItem value="applePencil">Apple Pencil</MenuItem>
                  <MenuItem value="magicKeyboard">Magic Keyboard</MenuItem>
                  <MenuItem value="magicMouse">Magic Mouse</MenuItem>
                  <MenuItem value="magicTrackpad">Magic Trackpad</MenuItem>
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
                  <MenuItem value="iPhone13ProMax">iPhone 13 Pro Max</MenuItem>
                  <MenuItem value="iPhone13Pro">iPhone 13 Pro</MenuItem>
                  <MenuItem value="iPhone13">iPhone 13</MenuItem>
                  <MenuItem value="iPhone13mini">iPhone 13 mini</MenuItem>
                  <MenuItem value="iPhoneSE2ndgeneration">iPhone SE (2nd generation)</MenuItem>
                  <MenuItem value="iPhone12ProMax">iPhone 12 Pro Max</MenuItem>
                  <MenuItem value="iPhone12Pro">iPhone 12 Pro</MenuItem>
                  <MenuItem value="iPhone12">iPhone 12</MenuItem>
                  <MenuItem value="iPhone12mini">iPhone 12 mini</MenuItem>
                  <MenuItem value="iPhoneSE">iPhone SE</MenuItem>
                  <MenuItem value="iPhone11ProMax">iPhone 11 Pro Max</MenuItem>
                  <MenuItem value="iPhone11Pro">iPhone 11 Pro</MenuItem>
                  <MenuItem value="iPhone11">iPhone 11</MenuItem>
                  <MenuItem value="iPhoneXR">iPhone XR</MenuItem>
                  <MenuItem value="iPhoneXSMax">iPhone XS Max</MenuItem>
                  <MenuItem value="iPhoneXS">iPhone XS</MenuItem>
                  <MenuItem value="iPhoneX">iPhone X</MenuItem>
                  <MenuItem value="iPhone8Plus">iPhone 8 Plus</MenuItem>
                  <MenuItem value="iPhone8">iPhone 8</MenuItem>
                  <MenuItem value="iPhone7Plus">iPhone 7 Plus</MenuItem>
                  <MenuItem value="iPhone7">iPhone 7</MenuItem>
                  <MenuItem value="iPhoneSE1stgeneration">iPhone SE (1st generation)</MenuItem>
                  <MenuItem value="iPhone6sPlus">iPhone 6s Plus</MenuItem>
                  <MenuItem value="iPhone6s">iPhone 6s</MenuItem>
                  <MenuItem value="iPhone6Plus">iPhone 6 Plus</MenuItem>
                  <MenuItem value="iPhone6">iPhone 6</MenuItem>
                  <MenuItem value="iPhone5s">iPhone 5s</MenuItem>
                  <MenuItem value="iPhone5c">iPhone 5c</MenuItem>
                  <MenuItem value="iPhone5">iPhone 5</MenuItem>
                  <MenuItem value="iPhone4s">iPhone 4s</MenuItem>
                  <MenuItem value="iPhone4">iPhone 4</MenuItem>
                  <MenuItem value="iPadPro12.9-inch5thgeneration">iPad Pro (12.9-inch) (5th generation)</MenuItem>
                  <MenuItem value="iPadPro11-inch3rdgeneration">iPad Pro (11-inch) (3rd generation)</MenuItem>
                  <MenuItem value="iPadPro12.9-inch4thgeneration">iPad Pro (12.9-inch) (4th generation)</MenuItem>
                  <MenuItem value="iPadPro11-inch2ndgeneration">iPad Pro (11-inch) (2nd generation)</MenuItem>
                  <MenuItem value="iPadPro12.9-inch3rdgeneration">iPad Pro (12.9-inch) (3rd generation)</MenuItem>
                  <MenuItem value="iPadPro11-inch1stgeneration">iPad Pro (11-inch) (1st generation)</MenuItem>
                  <MenuItem value="iPadPro12.9-inch2ndgeneration">iPad Pro (12.9-inch) (2nd generation)</MenuItem>
                  <MenuItem value="iPadPro12.9-inch1stgeneration">iPad Pro (12.9-inch) (1st generation)</MenuItem>
                  <MenuItem value="iPadAir4thgeneration">iPad Air (4th generation)</MenuItem>
                  <MenuItem value="iPadAir3rdgeneration">iPad Air (3rd generation)</MenuItem>
                  <MenuItem value="iPadAir2ndgeneration">iPad Air (2nd generation)</MenuItem>
                  <MenuItem value="iPadAir">iPad Air</MenuItem>
                  <MenuItem value="iPad9thgeneration">iPad (9th generation)</MenuItem>
                  <MenuItem value="iPad8thgeneration">iPad (8th generation)</MenuItem>
                  <MenuItem value="iPad7thgeneration">iPad (7th generation)</MenuItem>
                  <MenuItem value="iPad6thgeneration">iPad (6th generation)</MenuItem>
                  <MenuItem value="iPad5thgeneration">iPad (5th generation)</MenuItem>
                  <MenuItem value="iPadmini6thgeneration">iPad mini (6th generation)</MenuItem>
                  <MenuItem value="iPadmini5thgeneration">iPad mini (5th generation)</MenuItem>
                  <MenuItem value="iPadmini4">iPad mini 4</MenuItem>
                  <MenuItem value="iPadmini3">iPad mini 3</MenuItem>
                  <MenuItem value="iPadmini2">iPad mini 2</MenuItem>
                  <MenuItem value="iPadmini">iPad mini</MenuItem>
                  <MenuItem value="MacBookAirM12020">MacBook Air (M1, 2020)</MenuItem>
                  <MenuItem value="MacBookAirRetina2020">MacBook Air (Retina, 2020)</MenuItem>
                  <MenuItem value="MacBookAir13-inch2017">MacBook Air (13-inch, 2017)</MenuItem>
                  <MenuItem value="MacBookAir11-inch2015">MacBook Air (11-inch, 2015)</MenuItem>
                  <MenuItem value="MacBookPro14-inch2021">MacBook Pro (14-inch, 2021)</MenuItem>
                  <MenuItem value="MacBookPro16-inch2021">MacBook Pro (16-inch, 2021)</MenuItem>
                  <MenuItem value="MacBookPro13-inchM12020">MacBook Pro (13-inch, M1, 2020)</MenuItem>
                  <MenuItem value="MacBookPro13-inch2020">MacBook Pro (13-inch, 2020)</MenuItem>
                  <MenuItem value="MacBookPro13-inch2019">MacBook Pro (13-inch, 2019)</MenuItem>
                  <MenuItem value="MacBookPro13-inch2017">MacBook Pro (13-inch, 2017)</MenuItem>
                  <MenuItem value="MacBookPro15-inch2019">MacBook Pro (15-inch, 2019)</MenuItem>
                  <MenuItem value="MacBookPro15-inch2018">MacBook Pro (15-inch, 2018)</MenuItem>
                  <MenuItem value="MacBookPro15-inch2017">MacBook Pro (15-inch, 2017)</MenuItem>
                  <MenuItem value="MacBookProRetina15-inchMid2015">MacBook Pro (Retina, 15-inch, Mid 2015)</MenuItem>
                  <MenuItem value="MacBookProRetina13-inchEarly2015">MacBook Pro (Retina, 13-inch, Early 2015)</MenuItem>
                  <MenuItem value="MacBookProRetina13-inchEarly2013">MacBook Pro (Retina, 13-inch, Early 2013)</MenuItem>
                  <MenuItem value="MacBookRetina12-inchEarly2016">MacBook (Retina, 12-inch, Early 2016)</MenuItem>
                  <MenuItem value="MacBookRetina12-inchEarly2015">MacBook (Retina, 12-inch, Early 2015)</MenuItem>
                  <MenuItem value="iMac24-inchM12021">iMac (24-inch, M1, 2021)</MenuItem>
                  <MenuItem value="iMac27-inch2020">iMac (27-inch, 2020)</MenuItem>
                  <MenuItem value="iMac21.5-inch2019">iMac (21.5-inch, 2019)</MenuItem>
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
                fullWidth
                required
                id="outlined-required"
                name="deviceStorage"
                label="Device Storage"
                value={inputFields?.deviceStorage}
                onChange={handleTextChange}
                error={!!errors.deviceStorage}
                helperText={errors.deviceStorage}
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
                <FormLabel id="demo-row-radio-buttons-group-label">Device Box & Charger Available ?</FormLabel>
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