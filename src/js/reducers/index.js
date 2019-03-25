import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading,createEditVisible } from './items';
import { movieName,movieId,movieDescription,movieImageUrl } from './cinemas';
import { customerName,customerEmail,customerNationalId,customerCreateEditVisible } from './customer';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    movieName,
    movieId,
    movieDescription,
    movieImageUrl,
    createEditVisible,
    customerName,
    customerEmail,
    customerNationalId,
    customerCreateEditVisible
});
