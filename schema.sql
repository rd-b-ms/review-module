DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;


CREATE TABLE listings (
  listings_id int NOT NULL,
  PRIMARY KEY (listings_id)
);
CREATE TABLE messages (
  message_id int NOT NULL AUTO_INCREMENT,
  message varchar(5000) NOT NULL,
  time_made varchar(500),
  listing_id int NOT NULL,
  accuracy_rating int NOT NULL,
  communication_rating int NOT NULL,
  cleanliness_rating int NOT NULL,
  location_rating int NOT NULL,
  check_in_rating int NOT NULL,
  value_rating int NOT NULL,
  username varchar(500),
  profile_pic_url varchar(500),
  PRIMARY KEY (message_id),
  FOREIGN KEY (listing_id) REFERENCES listings(listings_id)
);
