import { ADD_CINEMA, FETCH_CINEMAS } from "../constants/action-types";
export const addMovie = cinema => ({ type: ADD_CINEMA, payload: cinema });
export const fetchMovies = cinemas => ({ type: FETCH_CINEMAS, payload: cinemas});

export function changeCustomerName(name) {
    return {
        type: 'CHANGE_CUSTOMER_NAME',
        customerName: name
    };
}

export function changeCustomerEmail(email) {
    return {
        type: 'CHANGE_CUSTOMER_EMAIL',
        customerEmail: email
    };
}

export function changeCustomerNationalId(nationalId) {
    return {
        type: 'CHANGE_NATIONAL_ID',
        customerNationalId: nationalId
    };
}

export function changeCustomerCreateEditVisible(value) {
    return {
        type: 'CHANGE_CUSTOMER_CREATE_EDIT_VISIBLE',
        customerCreateEditVisible: value
    };
}

export function submitBooking() {
    return (dispatch, getState) => {
      console.log("asdasdads asdass ")
      const { user } = getState();
      console.log('statee')
      console.log(getState())
      console.log(getState().movieName)
      var http_method = 'post' ;
      var payload = {"name": getState().movieName,	"description" : getState().movieDescription}
      var id = getState().movieId
      if(id != null && id != ''){
        http_method = 'PUT'
        payload = {"id": id ,"name": getState().movieName,	"description" : getState().movieDescription, "image_url": getState().movieImageUrl}
      }
      console.log(http_method)
      console.log(payload)


    };
}

function createPerson(person){
  var payload = {"name": getState().customerName,	"email" : getState().customerEmail, "national_id": getState().customerNationalId}
  fetch('http://localhost:3000/people',
  {
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
  })
      .then((response) => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          

          return response;
      })
      .then((response) => response.json())
      //.then((itemUpdate) => dispatch(itemUpdateListSuccess(itemUpdate)))
      //.then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(function(err) {
          console.log(err.message);
          dispatch(itemsHasErrored(true))
        })
        dispatch(createEditVisible(false));
        dispatch(changeId(''));
        dispatch(changeName(''));
        dispatch(changeDescription(''));
        dispatch(changeImageUrl(''));
        dispatch(itemsFetchData());
  return
}

export function changeId(id) {
    return {
        type: 'CHANGE_ID',
        id: id
    };
}

export function changeName(name) {
    return {
        type: 'CHANGE_NAME',
        name: name
    };
}

export function changeDescription(description) {
    return {
        type: 'CHANGE_DESCRIPTION',
        description: description
    };
}

export function changeImageUrl(image_url) {
    return {
        type: 'CHANGE_IMAGE_URL',
        image_url: image_url
    };
}


export function createEditVisible(bool) {
    return {
        type: 'CREATE_EDIT_VISIBLE',
        createEditVisible: bool
    };
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}


export function itemsFetchData() {
    return (dispatch, getState) => {

        dispatch(itemsIsLoading(true));

        fetch('http://localhost:3000/movies',
        {
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            method: 'GET'
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(function(err) {
                console.log('Error ' + err.message +'.,'+ JSON.stringify(err));
                dispatch(itemsHasErrored(true))
              });
    };
}

export function saveMovieRemote() {
    return (dispatch, getState) => {

      const { user } = getState();
      console.log('statee')
      console.log(getState())
      console.log(getState().movieName)
      var http_method = 'post' ;
      var payload = {"name": getState().movieName,	"description" : getState().movieDescription}
      var id = getState().movieId
      if(id != null && id != ''){
        http_method = 'PUT'
        payload = {"id": id ,"name": getState().movieName,	"description" : getState().movieDescription, "image_url": getState().movieImageUrl}
      }
      console.log(http_method)
      console.log(payload)

        fetch('http://localhost:3000/movies/'+id,
        {
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            method: http_method,
            body: JSON.stringify(payload)
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsFetchData());
                //dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            //.then((itemUpdate) => dispatch(itemUpdateListSuccess(itemUpdate)))
            //.then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(function(err) {
                console.log(err.message);
                dispatch(itemsHasErrored(true))
              })
              dispatch(createEditVisible(false));
              dispatch(changeId(''));
              dispatch(changeName(''));
              dispatch(changeDescription(''));
              dispatch(changeImageUrl(''));
              dispatch(itemsFetchData());
    };
}

export function itemUpdateListSuccess(itemUpdate){
  return (dispatch, getState) => {
    console.log('statee')
    console.log(getState())
    console.log('itemUpdate')
    console.log(itemUpdate)
    var listItems = getState().items
    for (var i = 0; i < listItems.length; i++) {
      if(listItems[i].id == itemUpdate.id){
          listItems[i].name = itemUpdate.name;
          listItems[i].description = itemUpdate.description;
          listItems[i].image_url = itemUpdate.image_url;
      }
    }
    console.log('listItems')
    console.log(listItems)
    dispatch(itemsFetchDataSuccess(listItems));
    /*
    dispatch(changeId(''));
    dispatch(changeName(''));
    dispatch(changeDescription(''));
    dispatch(createEditVisible(false));
    */
  };
}
export function loadNewMovie() {
    return (dispatch, getState) => {

      dispatch(changeId(''));
      dispatch(changeName(''));
      dispatch(changeDescription(''));
      dispatch(changeImageUrl(''))
      dispatch(createEditVisible(true));
    };
}
export function loadMovieById(id) {
    return (dispatch, getState) => {
      var selectedMovie = null;
      var listMovies = getState().items;
      for (var i = 0; i < listMovies.length; i++) {
        if(listMovies[i].id == id){
          selectedMovie = listMovies[i];
          break;
        }
      }
      dispatch(createEditVisible(true));
      dispatch(changeId(selectedMovie.id));
      dispatch(changeName(selectedMovie.name));
      dispatch(changeDescription(selectedMovie.description));
      dispatch(changeImageUrl(selectedMovie.image_url))
    };
}
export function showBooking(id){
  return (dispatch, getState) => {
    console.log('yeahh ...jous32 continue here' + id )
    dispatch(changeCustomerCreateEditVisible(true));
  }
}

export function deleteMovieRemote(id) {
    return (dispatch, getState) => {
      dispatch(changeId(''));
      dispatch(changeName(''));
      dispatch(changeDescription(''));
      dispatch(changeImageUrl(''));
      dispatch(createEditVisible(false));
        fetch('http://localhost:3000/movies/'+id,
        {
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            method: "delete",
            body: JSON.stringify({"id": id})
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
            dispatch(itemsFetchData());
    };
}
