// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// // import { Typography } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// // import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// // import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { updateIntialValue } from '../../slices/deviceSlice'
// import { updateDeviceField, resetDeviceForm, submitDeviceForm } from '../../actions/deviceActions'


// import PageContainer from 'src/components/container/PageContainer';
// import DashboardCard from '../../components/shared/DashboardCard';
// import { useSelector, useDispatch, connect } from 'react-redux';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


// const SamplePage = () => {
//   const dispatch = useDispatch();
//   // const userDetails = useSelector((state) => state.persistentSlice.user);
//   // const deviceInitialState = useSelector((state) => state.reducer.inputFiled);
//   const inputFields = useSelector(state => state.reducer.inputFields);
//   console.log(inputFields, "inputFields");

//   // CSS on radio error text
//   const radioTextCss = {
//     fontSize: "0.75rem",
//     marginLeft: "14px",
//     marginRight: "14px",
//     marginBottom: "0px",
//     marginTop: "3px",
//     lineHeight: "1.66",
//     color: "#FA896B"
//   }

//   // // State to manage select value
//   // const [device, setDevice] = useState({
//   //   "selectedDevice": '',
//   //   "selectedModel": '',
//   //   "deviceBoxIncluded": '',
//   //   "deviceHasIssue": '',
//   //   "isInWarranty": '',
//   //   "deviceColor": '',
//   //   "devicePrice": '',
//   //   "serialOrImei": '',
//   //   "issueDescription": '',
//   //   "warrantyValidity": ''
//   // });

//   const [errors, setErrors] = useState({});

//   // useEffect(() => {
//   //   console.log("component re-render with update state", { deviceColor });
//   // }, [deviceColor])

//   // Handle for text input change
//   const handleTextChange = (event) => {
//     const { name, value } = event.target;
//     dispatch(updateDeviceField(name, value));

//     return
//     if (setErrors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }

//   }

//   // Handler for radio button change
//   const handleRadioChange = (event) => {
//     const { name, value } = event.target;
//     // setDevice({ ...device, [name]: value });
//   }

//   // Handler for select change                                         
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     // setDevice({ ...device, [name]: value });
//   };

//   // checking data for submitting
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // const formData = deviceColor;
//     // submitDeviceForm(formData)
//   };


//   // const validateSelectedOption = (option) => {
//   //   return !!option;
//   // };

//   // Handle for cancel
//   // const handleClickCancel = () => {
//   //   setDevice({
//   //     "selectedDevice": '',
//   //     "selectedModel": '',
//   //     "deviceBoxIncluded": '',
//   //     "deviceHasIssue": '',
//   //     "isInWarranty": '',
//   //     "deviceColor": '',
//   //     "devicePrice": '',
//   //     "serialOrImei": '',
//   //     "issueDescription": '',
//   //     "warrantyValidity": ''
//   //   });
//   //   console.log("cancel");
//   // }

//   // Handler for submit
//   // const handleClickSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const newErrors = validateForm(device);
//   //   if (Object.keys(newErrors).length === 0) {
//   //     try {
//   //       const response = await fetch('http://localhost:3001/api/v1/device/submit-device-details', {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json'
//   //         },
//   //         body: JSON.stringify(device)
//   //       });

//   //       if (!response.ok) {
//   //         throw new Error('Network response was not ok');
//   //       }

//   //       const data = await response.json();
//   //       console.log('Form data submitted:', data);
//   //     } catch (error) {
//   //       console.error('There was a problem with your fetch operation:', error);
//   //     }
//   //   } else {
//   //     setErrors(newErrors);
//   //   }
//   // }

//   // // validation on forms
//   // const validateForm = (data) => {
//   //   let errors = {}
//   //   let isValid = true;

//   //   if (!data.selectedDevice) {
//   //     errors.selectedDevice = "Please select device name."
//   //     isValid = false;
//   //   }

//   //   if (!data.selectedModel) {
//   //     errors.selectedModel = "Please select device model.";
//   //     isValid = false;
//   //   }

//   //   if (!data.deviceColor.trim()) {
//   //     errors.deviceColor = "Input field is required!";
//   //     isValid = false;
//   //   };

//   //   if (!data.devicePrice.trim()) {
//   //     errors.devicePrice = "devicePrice must be field!";
//   //     isValid = false;
//   //   } else if (!(/^\d*\.?\d{0,2}$/.test(data.devicePrice)) || data.devicePrice === '') {
//   //     errors.devicePrice = "Invalid devicePrice format";
//   //     isValid = false;
//   //   };

//   //   // if (!(/^[A-Za-z0-9]{10}$/.test(data.serialOrImei)) || !(/^\d{15}$/.test(data.serialOrImei))) {
//   //   //   errors.serialOrImei = "Invalid Serial Number / IMEI Number";
//   //   //   isValid = false;
//   //   // };

//   //   if (!data.deviceBoxIncluded) {
//   //     errors.deviceBoxIncluded = "Please select an option.";
//   //     isValid = false;
//   //   }

//   //   if (!data.deviceHasIssue) {
//   //     errors.deviceHasIssue = "Please select an option.";
//   //     isValid = false;
//   //   }

//   //   if (!data.issueDescription.trim()) {
//   //     errors.issueDescription = "Input field is required!";
//   //     isValid = false;
//   //   }

//   //   if (!data.isInWarranty) {
//   //     errors.isInWarranty = "Please select an option.";
//   //     isValid = false;
//   //   }

//   //   if (!data.warrantyValidity.trim()) {
//   //     errors.warrantyValidity = "Input field is required!";
//   //     isValid = false;
//   //   }

//   //   console.log("errors", errors);
//   //   return errors;
//   // }
    
//   return (
//     <PageContainer title="Sell Old Device" description="Sell your old apple devices">
//       <DashboardCard title="Sell Old Device">
//         <Box sx={{ flexGrow: 1 }} component="form"
//           noValidate
//           autoComplete="off">
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <FormControl fullWidth>
//                 {/* <InputLabel id="demo-simple-select-label">Select Devices</InputLabel> */}
//                 <TextField
//                   // labelid="demo-simple-select-label"
//                   select
//                   required
//                   id="demo-simple-select"
//                   name="selectedDevice"
//                   value={inputFields?.selectedDevice}
//                   label="Select Devices"
//                   onChange={handleChange}
//                   error={!!errors.selectedDevice}
//                   helperText={errors.selectedDevice}
//                 >
//                   <MenuItem value="">None</MenuItem>
//                   <MenuItem value="iphone6">Iphone 6</MenuItem>
//                   <MenuItem value="iphone10pro">Iphone 10 pro</MenuItem>
//                   <MenuItem value="iphone12">Iphone 12</MenuItem>
//                   <MenuItem value="ipad">IPad</MenuItem>
//                   <MenuItem value="iwatch">IWatch</MenuItem>
//                 </TextField>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12}>
//               <FormControl fullWidth>
//                 {/* <InputLabel id="demo-simple-select-label">Select Model</InputLabel> */}
//                 <TextField
//                   // labelId="demo-simple-select-label"
//                   select
//                   required
//                   id="demo-simple-select"
//                   name="selectedModel"
//                   value={inputFields?.selectedModel}
//                   label="Select Model"
//                   onChange={handleChange}
//                   error={!!errors.selectedModel}
//                   helperText={errors.selectedModel}
//                 >
//                   <MenuItem value="">None</MenuItem>
//                   <MenuItem value="iphone6pro">Iphone 6 Pro</MenuItem>
//                   <MenuItem value="iphone10pro345">Iphone 10 Pro 345</MenuItem>
//                   <MenuItem value="iphone12max">Iphone 12 max</MenuItem>
//                   <MenuItem value="A2013ipadpro">A2013 on the iPad Pro Wi-Fi + Cellular</MenuItem>
//                   <MenuItem value="A2435iwatchpro12-inch">A2435 on iwatch Pro 12-inch</MenuItem>
//                 </TextField>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 required
//                 id="outlined-required"
//                 name="deviceColor"
//                 label="Device Color"
//                 value={inputFields?.deviceColor}
//                 onChange={handleTextChange}
//                 error={!!errors.deviceColor}
//                 helperText={errors.deviceColor}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="outlined-basic"
//                 name="devicePrice"
//                 label="Price"
//                 variant="outlined"
//                 value={inputFields?.devicePrice}
//                 onChange={handleTextChange}
//                 error={errors.devicePrice}
//                 helperText={errors.devicePrice}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="outlined-required"
//                 name="serialOrImei"
//                 label="Serial No/ IMEI NO"
//                 value={inputFields?.serialOrImei}
//                 onChange={handleTextChange}
//                 error={!!errors.serialOrImei}
//                 helperText={errors.serialOrImei}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <FormControl>
//                 <FormLabel id="demo-row-radio-buttons-group-label">Device Box Included</FormLabel>
//                 <RadioGroup
//                   row
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="deviceBoxIncluded"
//                   value={inputFields?.deviceBoxIncluded}
//                   onChange={handleRadioChange}
//                 >
//                   <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                   <FormControlLabel value="no" control={<Radio />} label="No" />
//                 </RadioGroup>
//                 {errors.deviceBoxIncluded && (<span style={radioTextCss}>{errors.deviceBoxIncluded}</span>)}
//               </FormControl>
//             </Grid>

//             <Grid item xs={12}>
//               <FormControl>
//                 <FormLabel id="demo-row-radio-buttons-group-label">Does Device Has Any Issue?</FormLabel>
//                 <RadioGroup
//                   row
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="deviceHasIssue"
//                   value={inputFields?.deviceHasIssue}
//                   onChange={handleRadioChange}
//                 >
//                   <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                   <FormControlLabel value="no" control={<Radio />} label="No" />
//                 </RadioGroup>
//                 {errors.deviceHasIssue && (<span style={radioTextCss}>{errors.deviceHasIssue}</span>)}
//               </FormControl>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="outlined-required"
//                 name="issueDescription"
//                 label="Issue with device"
//                 value={inputFields?.issueDescription}
//                 onChange={handleTextChange}
//                 error={!!errors.issueDescription}
//                 helperText={errors.issueDescription}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <FormControl>
//                 <FormLabel id="demo-row-radio-buttons-group-label">is Device in the warranty?</FormLabel>
//                 <RadioGroup
//                   row
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="isInWarranty"
//                   value={inputFields?.isInWarranty}
//                   onChange={handleRadioChange}
//                 >
//                   <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                   <FormControlLabel value="no" control={<Radio />} label="No" />
//                 </RadioGroup>
//                 {errors.isInWarranty && (<span style={radioTextCss}>{errors.isInWarranty}</span>)}
//               </FormControl>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="outlined-required"
//                 name="warrantyValidity"
//                 label="Warranty Validity"
//                 value={inputFields?.warrantyValidity}
//                 onChange={handleTextChange}
//                 error={!!errors.warrantyValidity}
//                 helperText={errors.warrantyValidity}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Stack spacing={2} direction="row" sx={{ float: 'right', margin: 1 }}>
//                 {/* <Button variant="contained" color='error' onClick={handleClickCancel}>Cancel</Button> */}
//                 {/* <Button variant="contained" onClick={handleClickSubmit}>Submit</Button> */}
//                 <Button variant="contained" onClick={handleSubmit}>Submit</Button>
//               </Stack>
//             </Grid>

//           </Grid>
//         </Box>
//       </DashboardCard>
//     </PageContainer>
//   );
// };

// export default SamplePage