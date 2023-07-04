# Movie Review API

This is an API that allows you to fetch reviewer pairs who rated the same movie. 

## Requirements

* Node.js
* MySQL
* npm

## Setup

1. Clone this repository: `git clone https://github.com/kyhinds/sqlMovieReview`
2. Install dependencies: `npm install`
3. Setup the database: Import the `database.sql` file into your MySQL database.
4. Start the server: `npm start`

## Testing

To test the API, you can use the following cURL command:

```bash
curl -X GET 'http://localhost:3000/api/reviewerPairs'
