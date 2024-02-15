import { api_base } from "./Constants"

// helper function to fetch data from the server
async function Fetch(url, stuff) {
  console.log('FETCH ->', url, JSON.stringify(stuff))
  const resp = await fetch(url, stuff)
  return resp
}

// this is a generic function to fetch data or post data or delete data from the server
// method: GET, POST, DELETE etc path will be the path of the api endpoint
// get: the query parameters
// post: the body of the request
export async function fetchX(method, path, get, post) {
  console.log('fetchX ->', path, JSON.stringify(get))
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
  console.log('getX ->', path, JSON.stringify(filter))
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
      
    }
  })
  const j = await r.json()
  return j
}



// generic function for POST requests
export async function postX(path, filter, body) {
  console.log('postX ->', path, JSON.stringify(filter), JSON.stringify(body))
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
  console.log('deleteX ->', path)
  var url = `${api_base}/${path}/`
  
  const r = await Fetch(url, {
    method: 'DELETE',
    headers: {
      
    }
  })
  const j = await r.json()
  return j
}



export async function getBooks(filter){
  const j = await getX('books', filter);
  return j;
}
