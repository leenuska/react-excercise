export const formIsValid = (form) => {
    // IE does not support reportValidity so let's check if that's not available and handle our validation report ourselves
    if (form && !HTMLFormElement.prototype.reportValidity) {
        if (!form.checkValidity()) {
            const submitButtons = form.querySelectorAll('button, input[type=submit]');
            for (let i = 0, n = submitButtons.length; i < n; i++) {
                if (submitButtons[i].type === 'submit') {
                    submitButtons[i].click();
                    return false;
                }
            }
            return false;
        }
    } else if (form && !form.reportValidity()) {
        return false;
    }
    return true;
}
