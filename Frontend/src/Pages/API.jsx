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
      'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
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
  console.log('deleteX ->', path)
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


// this function is used in AllBooks Page
export async function getBooks(filter) {
  const j = await getX('books', filter);
  return j;
}

// these functions are used in BookPage
export async function getBookByID(id, filter) {
  const j = await getX(`books/${id}`, {});
  return j;
}

export async function getReviewsByBookID(id, filter) {
  const j = await getX(`reviews/${id}`, {});
  return j;
}

export async function SendReview(bookID, review) {
  const j = await postX(`reviews/${bookID}`, {}, review);
  return j;
}

export async function UpdateReview(bookID, review) {
  const j = await fetchX('PUT', `reviews/user/${bookID}`, {}, review);
  return j;
}

export async function getReviewsByBookIDofUser(bookID) {
  const j = await getX(`reviews/user/${bookID}`, {});
  return j;
}

// these functions are used in AllAuthors Page
export async function getAllAuthors(filter) {
  const j = await getX('authors', filter);
  return j;
}


// these functions are used in AuthorDetailPage
export async function getAuthorByID(id) {
  const j = await getX(`authors/${id} `, {});
  return j;
}
export async function getBooksByAuthorID(id) {
  const j = await getX(`books/author/${id}`, {});
  return j;
}

// these functions are used in AllPublisher Page
export async function getAllPublishers(filter) {
  const j = await getX('publishers', {});
  return j;
}

// these functions are used in PublisherDetailPage
export async function getPublisherByID(id) {
  const j = await getX(`publishers/${id}`, {});
  return j;
}

export async function getBooksByPublisherID(id) {
  const j = await getX(`books/publisher/${id}`, {});
  return j;
}

// these functions are used in AllReviews Page
export async function getReviewsByUserID() {
  const j = await getX(`reviews/user`);
  return j;
}

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


// these functions are used in Wishlist Page
export async function getWishlistByUserID() {
  const j = await getX(`wishlist/user`, {});
  return j;
}

export async function getwishlistBybookIDandUserID(bookID) {
  const j = await getX(`wishlist/user/${bookID}`, {});
  return j;
}

export async function addBookToWishlist(bookID) {
  const j = await postX(`wishlist/user/${bookID}`, {}, {});
  return j;
}

export async function deleteBookFromWishlist(bookID) {
  const j = await deleteX(`wishlist/user/${bookID}`);
  return j;
}


// these function are used in user 
export async function getUser() {
  const j = await getX(`users/current`, {});
  return j;
}



// these fucntions are for category page 
export async function getCategories() {
  const j = await getX(`books/category`, {});
  return j;
}

export async function getBooksByCategoryID(id) {
  const j = await getX(`books/category/${id}`, {});
  return j;
}

// these functions are used in cart page
export async function getUserPickedBooks() {
  const j = await getX(`cart/picked`, {});
  return j;
}

export async function addBookToCart(bookID) {
  const j = await postX(`cart/${bookID}`, {}, {});
  return j;
}

export async function getPickedBookByUser(bookID) {
  const j = await getX(`cart/${bookID}`);
  return j;
}

export async function updateQty(pickedID, qty){
  const j = await fetchX('PUT', `cart/${pickedID}`, {}, {amount: qty});
  return j;
}


export async function deletePicked(pickedID) {
  const j = await deleteX(`cart/${pickedID}`);
  return j;
}


// get all the users
export async function getAllUsers() {
  const j = await getX(`users`, {});
  return j;
}


// update the user 
export async function updateUser(user) {
  const j = await fetchX('PUT', `users`, {}, user);
  return j;
}


export async function ConfirmOrder(data) {
  const j = await postX(`orders`, {}, data);
  return j;
}


export async function getValidVoucher(voucher) {
  const j = await getX(`voucher/${voucher}`, {});
  return j;
}


export async function getUserOrders() {
  const j = await getX(`orders`, {});
  return j;
}



export async function getSearchBooks(search) {
  const j = await getX(`books/search/${search}`, {});
  return j;
}

export async function getSearchAuthors(search) {
  const j = await getX(`authors/search/${search}`, {});
  return j;
}


export async function getSearchCategories(search) {
  const j = await getX(`books/category/search/${search}`, {});
  return j;
}


export async function getBestSellerBook() {
  const j = await getX(`statistics/bestSellerBook`, {});
  return j;
}

export async function getBestSellerAuthor() {
  const j = await getX(`statistics/bestSellerAuthor`, {});
  return j;
}

export async function getMostReviewed() {
  const j = await getX(`statistics/mostReviewed`, {});
  return j;
}