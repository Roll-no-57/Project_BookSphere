import { api_base } from "./Constants"


// helper function to fetch data from the server
async function Fetch(url, stuff) {
    // console.log('FETCH ->', url, JSON.stringify(stuff))
    const resp = await fetch(url, stuff)
    return resp
}

// this is a generic function to fetch data or post data or delete data from the server
// method: GET, POST, DELETE etc path will be the path of the api endpoint
// get: the query parameters
// post: the body of the request
export async function fetchX(method, path, get, post) {
    // console.log('fetchX ->', path, JSON.stringify(get))
    var url = `${api_base}/${path}/?`

    try {
        Object.keys(get).forEach(x => {
            url = url + x + '=' + get[x] + '&'
        })
    }

    catch { }
    const r = await Fetch(url, {
        method: method,
        mode: 'cors',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    const j = await r.json()
    return j
}




// generic function for GET requests
export async function getX(path, filter) {
    // console.log('getX ->', path, JSON.stringify(filter))
    var url = `${api_base}/${path}/?`
    try {
        Object.keys(filter).forEach(x => {
            url = url + x + '=' + filter[x] + '&'
        })
    }
    catch { }
    const r = await Fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
        }
    })
    const j = await r.json()
    return j
}



// generic function for POST requests
export async function postX(path, filter, body) {
    // console.log('postX ->', path, JSON.stringify(filter), JSON.stringify(body))
    var url = `${api_base}/${path}/?`
    try {
        Object.keys(filter).forEach(x => {
            url = url + x + '=' + filter[x] + '&'
        })
    }
    catch { }
    const r = await Fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const j = await r.json()
    return j
}


// generic function for DELETE requests
export async function deleteX(path) {
    // console.log('deleteX ->', path)
    var url = `${api_base}/${path}/`

    const r = await Fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
    const j = await r.json()
    return j
}




// login register and logout functions

// these function are used in login page 
export async function getLogin(user) {

    const j = await postX('login', {}, user);
    console.log(j);
    return j;

}

export async function getRegister(user) {
    const j = await postX('register', {}, user);
    console.log(j);
    return j;
}

export async function getUsers() {
    const j = await getX(`users`, {});
    return j;
}

// these function are used in user 
export async function getUser() {
    const j = await getX(`users/current`, {});
    return j;
}

export async function getAllBooks() {
    const j = await getX(`books`, {});
    return j;
}


export async function getYearlyEarning(){
    const j = await getX(`statistics/YearlyEarning`, {});
    return j;
}

export async function getMonthlyOrder(){
    const j = await getX(`statistics/MonthlyOrder`, {});
    return j;
}
export async function getYearlyOrder(){
    const j = await getX(`statistics/YearlyOrder`, {});
    return j;
}


export async function getMonthlyIncomeByYear(){
    const j = await getX(`statistics/AllMonthlyIncomByYear`, {});
    return j;
}


export async function getAllOrders(){
    const j = await getX(`orders`, {});
    return j;
}

export async function UpdateState(orderID,newState){
    console.log({state:newState});
    const j = await postX(`orders/${orderID}`, {}, {state:newState});
    return j;
}

export async function addBook(bookData){
    const j = await postX(`books`, {}, bookData);
    return j;
}


export async function getAllAuthors(){
    const j = await getX(`authors`, {});
    return j;
}