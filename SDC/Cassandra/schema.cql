DROP KEYSPACE IF EXISTS reviews;

CREATE KEYSPACE reviews WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE reviews;

CREATE TABLE bnbReview (
  id INT,
  message TEXT,
  time_made TEXT,
  accuracy_rating INT,
  communication_rating INT,
  cleanliness_rating INT,
  location_rating INT,
  check_in_rating INT,
  value_rating INT,
  listing_id INT,
  username TEXT,
  profile_pic_url TEXT,
  user_id INT,
  PRIMARY KEY (listing_id, id)
);

COPY reviews.bnbReview (time_made,accuracy_rating,communication_rating,cleanliness_rating,location_rating,check_in_rating,value_rating,message,listing_id,user_id,username,profile_pic_url,id) FROM '/Users/rogerdunn/Desktop/Programming/HRSF117/SDC/Review-module/SDC/DataGenerator/dataSets/fakeDataNoSQL4.csv' WITH HEADER = true;

