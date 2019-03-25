export function customerName(state = [], action) {
    switch (action.type) {
        case 'CHANGE_CUSTOMER_NAME':
            return action.customerName;
        default:
            return state;
    }
}
export function customerEmail(state = [], action) {
    switch (action.type) {
        case 'CHANGE_CUSTOMER_EMAIL':
            return action.customerEmail;
        default:
            return state;
    }
}

export function customerNationalId(state = [], action) {
    switch (action.type) {
        case 'CHANGE_NATIONAL_ID':
            return action.customerNationalId;
        default:
            return state;
    }
}


export function customerCreateEditVisible(state = false, action) {
    switch (action.type) {
        case 'CHANGE_CUSTOMER_CREATE_EDIT_VISIBLE':
            return action.customerCreateEditVisible;

        default:
            return state;
    }
}
