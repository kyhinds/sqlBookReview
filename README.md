# Movie Review API

This is an API that allows you to fetch reviewer pairs who rated the same movie. 

## Requirements

* Docker
* Docker Compose

## Setup

1. Clone this repository: `git clone https://github.com/kyhinds/sqlMovieReview`
2. Navigate into the cloned repository: `cd sqlMovieReview`
3. Build the Docker image and start the services: `docker-compose up`

Docker Compose will start the PostgreSQL database and the Node.js application inside Docker containers. The database is automatically initialized with data from the `database.sql` file.

## Testing

To test the API, you can use the following cURL commands:

# To fetch all reviewer pairs who rated the same movie:
curl -X GET 'http://localhost:3000/api/reviewerPairs'

# To fetch reviewers who rated a specific movie (replace :id with the ID of a movie):
curl -X GET 'http://localhost:3000/api/movies/:id/reviewers'

The API should respond with a JSON array of reviewer pairs or reviewers, depending on the endpoint you called.
There is also a basic html page with links to test the API endpoints

# Stopping the Services
To stop the running services, press CTRL+C in the terminal window where docker-compose up is running. Then, run docker-compose down to clean up the environment.

# Note
The PostgreSQL password is hardcoded as "password" in the docker-compose.yml file for development purposes. If you were deploying this to a production environment, you would want to make sure this password is securely stored and retrieved from a secure environment variable or a secure secrets storage system. It's good practice never to hardcode sensitive data like passwords in your source code.

This README explains how to clone the repository, start the Docker containers, test the API, and clean up the environment. It also includes a note about the hardcoded PostgreSQL password.
