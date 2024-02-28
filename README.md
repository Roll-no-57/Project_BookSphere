# Book Sphere

## Description

Briefly describe the purpose and functionality of the project.

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open the application in your browser: `http://localhost:3000`

## Routes

### Public Routes

- `/`: Home
- `/login`: Login
- `/reg`: SignupCard
- `/books`: BOOKS
- `/books/:id`: BOOKPage (sorting and filtering)
- `/author`: Authors
- `/author/:id`: AuthorPage (sorting and filtering)
- `/publisher`: Publishers
- `/publisher/:id`: PublisherPage (sorting and filtering)

### Private Routes

- `/myprofile/:id`: ProfilePage
- `/Mywishlist`: WishlistPage
- `/Myorders`: OrdersPage
- `/cart`: CartPage
- `/checkout`: CheckoutPage
- `/myratings`: MyRatingsPage
- `/trackOrder`: OrderTrackingPage

### Admin Routes

- `/admin/home`: Admin Home
- `/admin/books`: Admin Books
- `/admin/authors`: Admin Authors
- `/admin/orders`: Admin Orders
- `/admin/vouchers`: Admin Vouchers

## Sidebar Features

### Sorting

- Price High to Low
- Price Low to High
- New Releases
- Best Sellers

### Filtering

- Category
- Publisher
- Price
- Language
- Rating

## Technologies Used

- React
- React Router
- React Bootstrap
- Node.js
- Express.js
- Oracle DB

## Contributing

If you'd like to contribute to this project, please follow these guidelines:
1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
