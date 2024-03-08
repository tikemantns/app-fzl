import { UPDATE_DEVICE_FIELD, RESET_DEVICE_FIELD, SUBMIT_OLD_DEVICE_FORM } from './actionTypes';

export const updateDeviceField = (fieldName, value) => ({
  type: UPDATE_DEVICE_FIELD,
  payload: { fieldName, value },
});

export const resetDeviceForm = () => ({
  type: RESET_DEVICE_FIELD,
});

export const submitDeviceForm = (formDeviceData) => ({
  type: SUBMIT_OLD_DEVICE_FORM,
  payload: formDeviceData,
});
