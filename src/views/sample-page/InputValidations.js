// validation on forms
export const validateForm = (data, isDisabled) => {
    let errors = {};
    let isValid = true;

    // Validate selectedDevice
    if (!data.selectedDevice) {
        errors.selectedDevice = "Please select the type of device.";
        isValid = false;
    }

    // Validate selectedModel
    if (!data.selectedModel) {
        errors.selectedModel = "Please select the specific model of the device.";
        isValid = false;
    }

    // Validate deviceColor
    if (!data.deviceColor.trim()) {
        errors.deviceColor = "Please specify the color of the device.";
        isValid = false;
    }

    // Validate devicePrice
    if (!data.devicePrice.trim()) {
        errors.devicePrice = "Please enter the selling price for the device.";
        isValid = false;
    } else if (!/^\d+(\.\d{1,2})?$/.test(data.devicePrice)) {
        errors.devicePrice = "Invalid price format. Use up to 2 decimal places.";
        isValid = false;
    }

    // Validate serialOrImei
    if (!data.serialOrImei.trim()) {
        errors.serialOrImei = "Please enter the Serial Number or IMEI Number.";
        isValid = false;
    } else if (!/^[A-Za-z0-9]{10}$|^\d{15}$/.test(data.serialOrImei)) {
        errors.serialOrImei = "Invalid Serial Number / IMEI Number. Should be 10 alphanumeric characters or 15 digits.";
        isValid = false;
    }

    // Validate deviceBoxIncluded
    if (data.deviceBoxIncluded !== 'yes' && data.deviceBoxIncluded !== 'no') {
        errors.deviceBoxIncluded = "Please indicate whether the device box is included.";
        isValid = false;
    }

    // Validate deviceHasIssue
    if (data.deviceHasIssue !== 'yes' && data.deviceHasIssue !== 'no') {
        errors.deviceHasIssue = "Please indicate whether the device has any issues.";
        isValid = false;
    }

    // Validate issueDescription
    if (!isDisabled) {
        if (!data.issueDescription.trim()) {
            errors.issueDescription = "Please provide a description of any issues with the device.";
            isValid = false;
        }
    }

    // Validate isInWarranty
    if (data.isInWarranty !== 'yes' && data.isInWarranty !== 'no') {
        errors.isInWarranty = "Please indicate whether the device is in warranty.";
        isValid = false;
    }

    // Validate warrantyValidity
    if (!isDisabled) {
        if (!data.warrantyValidity.trim()) {
            errors.warrantyValidity = "Please specify the warranty validity period.";
            isValid = false;
        }
    }

    isValid = Object.keys(errors).length === 0;

    return { isValid, errors };
}

// export default ValidateForm;