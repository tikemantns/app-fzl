import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const SamplePage = () => {
  // State to manage radio button value
  // const [selectedRadio, setSelectedRadio] = useState({
  //   "row-radio-buttons-group1": '',
  //   "row-radio-buttons-group2": '',
  //   "row-radio-buttons-group3": ''
  // });

  // State to manage select value
  const [device, setDevice] = React.useState({
    "deviceName": '',
    "deviceModel": '',
    "row-radio-buttons-group1": '',
    "row-radio-buttons-group2": '',
    "row-radio-buttons-group3": '',
    "device-color": '',
    "price": '',
    "serial no/imei no": '',
    "device issue": '',
    "warranty validity": ''
  });

  // State to manage text input chnage
  // const [inputText, setInputText] = useState({
  //   "device-color": '',
  //   "price": '',
  //   "serial no/imei no": '',
  //   "device issue": '',
  //   "warranty validity": ''
  // });

  // Handle for text input change
  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setDevice({ ...device, [name]: value });

  }

  // Handler for radio button change
  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setDevice({ ...device, [name]: value });
  }

  // Handler for select change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDevice({ ...device, [name]: value });
  };

  // Handler for submit
  const handleClick = () => {
    // console.log("input text: ", inputText);
    // console.log("Radio button value: ", selectedRadio);
    console.log("select value: ", device);
  }

  return (
    <PageContainer title="Sell Old Device" description="Sell your old apple devices">
      <DashboardCard title="Sell Old Device">
        <Box sx={{ flexGrow: 1 }} component="form"
          noValidate
          autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Devices</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="deviceName"
                  value={device.deviceName}
                  label="Iphone"
                  onChange={handleChange}
                >
                  <MenuItem value="iphone6">Iphone 6</MenuItem>
                  <MenuItem value="ipad">IPad</MenuItem>
                  <MenuItem value="iwatch">IWatch</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="deviceModel"
                  value={device.deviceModel}
                  label="Iphone"
                  onChange={handleChange}
                >
                  <MenuItem value="iphone6pro">Iphone 6 Pro</MenuItem>
                  <MenuItem value="A2013ipadpro">A2013 on the iPad Pro Wi-Fi + Cellular</MenuItem>
                  <MenuItem value="A2435iwatchpro12-inch">A2435 on iwatch Pro 12-inch</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                name="device-color"
                label="Device Color"
                onChange={handleTextChange}
              // defaultValue="Device Color"
              />
            </Grid>

            {/* <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={device}
                  label="Iphone"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Iphone 6</MenuItem>
                  <MenuItem value={20}>iPad</MenuItem>
                  <MenuItem value={30}>iWatch</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-basic"
                name="price"
                label="Price"
                variant="outlined"
                onChange={handleTextChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                name="serial no/imei no"
                label="Serial No/ IMEI NO"
                onChange={handleTextChange}
              // defaultValue="Serial No/ IMEI NO"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Device Box Included</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group1"
                  value={device.radio1}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Does Device Has Any Issue?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group2"
                  value={device.radio2}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                name="device issue"
                label="Issue with device"
                onChange={handleTextChange}
              // defaultValue="Issue with device"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">is Device in the warranty?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group3"
                  value={device.radio3}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                name="warranty validity"
                label="Warranty Validity"
                onChange={handleTextChange}
              // defaultValue="Warranty Validity"
              />
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={2} direction="row" sx={{ float: 'right', margin: 1 }}>
                <Button variant="contained" color='error'>Cancel</Button>
                <Button variant="contained" onClick={handleClick}>Submit</Button>
              </Stack>
            </Grid>

          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
