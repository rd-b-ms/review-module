\c reviews;
\COPY bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) FROM '/home/ubuntu/PG/fakeDataSQL3.csv' DELIMITERS ',' CSV HEADER;
\COPY bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) FROM '/home/ubuntu/PG/fakeDataSQL4.csv' DELIMITERS ',' CSV HEADER;
\COPY bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) FROM '/home/ubuntu/PG/fakeDataSQL5.csv' DELIMITERS ',' CSV HEADER;


-- \COPY bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) FROM '/Users/rogerdunn/Desktop/Programming/HRSF117/SDC/Review-module/SDC/DataGenerator/dataSets/fakeDataSQL5.CSV' DELIMITERS ',' CSV HEADER;
