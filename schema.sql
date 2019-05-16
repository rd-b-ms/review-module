DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;


CREATE TABLE users (
  users_id int NOT NULL AUTO_INCREMENT,
  username varchar(500),
  profile_pic_url varchar(500),
  PRIMARY KEY (users_id)
);
CREATE TABLE listings (
  listings_id int NOT NULL AUTO_INCREMENT,
  listings_name varchar(500),
  
   PRIMARY KEY (listings_id)
);
CREATE TABLE messages (
  message_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  message varchar(5000) NOT NULL,
  time_made DATE,
  host_responce varchar(5000),
  host_id int NOT NULL,
  listing_id int NOT NULL,
  accuracy_rating int NOT NULL,
  communication_rating int NOT NULL,
  cleanliness_rating int NOT NULL,
  location_rating int NOT NULL,
  check_in_rating int NOT NULL,
  value_rating int NOT NULL,
  PRIMARY KEY (message_id),
  FOREIGN KEY (host_id) REFERENCES users(users_id),
  FOREIGN KEY (user_id) REFERENCES users(users_id),
  FOREIGN KEY (listing_id) REFERENCES listings(listings_id)
);