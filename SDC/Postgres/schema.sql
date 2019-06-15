DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE bnbUsers (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  profile_pic_url TEXT
);

CREATE TABLE bnbReview (
  id SERIAL PRIMARY KEY,
  message TEXT NOT NULL,
  time_made TEXT NOT NULL,
  accuracy_rating INT NOT NULL,
  communication_rating INT NOT NULL,
  cleanliness_rating INT NOT NULL,
  location_rating INT NOT NULL,
  check_in_rating INT NOT NULL,
  value_rating INT NOT NULL,
  user_id INT NOT NULL REFERENCES bnbUsers(id),
  listing_id INT NOT NULL 
);

\COPY bnbUsers (username, profile_pic_url) FROM '/home/ubuntu/PG/usersTable.csv' DELIMITERS ',' CSV HEADER;
\COPY bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) FROM '/home/ubuntu/PG/fakeDataSQL1.csv' DELIMITERS ',' CSV HEADER;
\COPY bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) FROM '/home/ubuntu/PG/fakeDataSQL2.csv' DELIMITERS ',' CSV HEADER;
