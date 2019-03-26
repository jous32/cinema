export function bookings(state = [], action) {
    switch (action.type) {
        case 'BOOKINGS_FETCH_DATA_SUCCESS':
            return action.bookings;

        default:
            return state;
    }
}
