export function changeDate(state = [], action) {
    switch (action.type) {
        case 'CHANGE_DATE':
            return action.changeDate;
        default:
            return state;
    }
}

export function movieName(state = [], action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
}

export function movieId(state = [], action) {
    switch (action.type) {
        case 'CHANGE_ID':
            return action.id;
        default:
            return state;
    }
}

export function movieDescription(state = [], action) {
    switch (action.type) {
        case 'CHANGE_DESCRIPTION':
            return action.description;
        default:
            return state;
    }
}

export function movieImageUrl(state = [], action) {
    switch (action.type) {
        case 'CHANGE_IMAGE_URL':
            return action.image_url;
        default:
            return state;
    }
}
