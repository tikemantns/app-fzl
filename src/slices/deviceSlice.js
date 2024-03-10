import { createSlice } from '@reduxjs/toolkit';
import { UPDATE_DEVICE_FIELD, RESET_DEVICE_FIELD, SUBMIT_OLD_DEVICE_FORM } from 'src/actions/actionTypes';

const initialState = {
  inputFields: {
    selectedDevice: '',
    selectedModel: '',
    deviceBoxIncluded: '',
    deviceHasIssue: '',
    isInWarranty: '',
    deviceColor: '',
    deviceStorage: '',
    devicePrice: '',
    serialOrImei: '',
    issueDescription: '',
    warrantyValidity: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DEVICE_FIELD:
      const { fieldName, value } = action.payload;
      return {
        ...state,
        inputFields: {
          ...state.inputFields,
          [fieldName]: value,
        },
      };
    case RESET_DEVICE_FIELD:
      return {
        ...state,
        inputFields: initialState.inputFields,
      };
    default:
      return state;
  }
};

// const deviceSlice = createSlice({
//     name: 'deviceSlice',
//     initialState,
//     reducers: {
//         updateIntialValue(state = initialState, action) {
//             // console.log(action, "++++++");
//             switch (action.type) {
//                 case UPDATE_DEVICE_FIELD:
//                     return {
//                         ...state,
//                         deviceColor: action.payload,
//                     };
//                 case RESET_DEVICE_FIELD:
//                     return initialState;
//                 case SUBMIT_OLD_DEVICE_FORM:
//                     // You can handle form submission logic here
//                     // For example, you might make an API call to register the user
//                     // and update the state accordingly based on success or failure
//                     return {
//                         ...state
//                     }
//                 default:
//                     return state;
//             }
//             // state = { ...state, ...action.payload };
//         }
//     }
// });

// export const { updateIntialValue } = deviceSlice.actions;

// export default deviceSlice.reducer;
export default reducer;
