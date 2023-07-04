-- Create the 'movies' table
CREATE TABLE IF NOT EXISTS movies (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    year INT,
    director VARCHAR(255)
);

-- Insert sample data into 'movies' table
INSERT INTO movies (id, title, year, director) VALUES
(101, 'A Tale Of Two Cities', 1859, 'Charles Dickens'),
(102, 'The Lord of the Rings', 1955, 'J. R. R. Tolkien'),
(103, 'The Godfather', 1972, 'Francis Ford Coppola'),
(104, 'The Shawshank Redemption', 1994, 'Frank Darabont');

-- Create the 'reviewers' table
CREATE TABLE IF NOT EXISTS reviewers (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Insert sample data into 'reviewers' table
INSERT INTO reviewers (id, name) VALUES
(15201, 'Steve Jobs'),
(53202, 'Elon Musk'),
(44203, 'Bill Gates');

-- Create the 'ratings' table
CREATE TABLE IF NOT EXISTS ratings (
    reviewer_id INT,
    movie_id INT,
    rating INT,
    rating_date DATE
);

-- Insert sample data into 'ratings' table
INSERT INTO ratings (reviewer_id, movie_id, rating, rating_date) VALUES
(15201, 101, 2, '2015-02-11'),
(15201, 101, 4, '2015-06-16'),
(53202, 103, 4, '2015-07-01'),
(44203, 102, 5, '2015-07-02'),
(44203, 103, 3, '2015-08-10');
