\c reviews;
\timing

SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 3192020;
SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 9167895;
SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 4406975;
SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 2746494;
SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 9192627;
SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 2523060;
SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 5113616;
SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 5978217;
SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 5137631;
SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = 8855648;


INSERT INTO bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) VALUES ('May 2017',1,3,1,3,1,1,'Eum voluptatem eos consequatur magni ad ad cum quis. Enim optio quis. Quis temporibus a et quam quasi et et et adipisci.',7315825,150);
INSERT INTO bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) VALUES ('April 2016',2,4,5,1,4,4,'Eligendi est ut quo dolorum sequi corrupti. Sed tempora aut illo. Occaecati nemo et quia dolorum aut voluptates laboriosam ut aut. Et eius enim eligendi laudantium sed.',9584725,16);
INSERT INTO bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) VALUES ('December 2016',1,4,1,2,5,3,'Laborum repellat rerum architecto dolor. Non quasi aspernatur nesciunt est ullam sit perferendis.',6014824,884);
INSERT INTO bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) VALUES ('May 2017',1,3,1,3,1,1,'Eum voluptatem eos consequatur magni ad ad cum quis. Enim optio quis. Quis temporibus a et quam quasi et et et adipisci.',7315825,150);
INSERT INTO bnbReview (time_made, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, message, listing_id, user_id) VALUES ('April 2016',2,4,5,1,4,4,'Eligendi est ut quo dolorum sequi corrupti. Sed tempora aut illo. Occaecati nemo et quia dolorum aut voluptates laboriosam ut aut. Et eius enim eligendi laudantium sed.',9584725,16);


UPDATE bnbReview SET message = 'Quis a cum officiis porro laboriosam ipsa et tempore sequi. Doloremque perferendis consequatur tempore voluptate ut veritatis sequi praesentium. Odit velit qui consequatur. Voluptatem vero eum ea rerum est qui dolor. Quo reiciendis quos. Illum ipsum deserunt velit commodi at eligendi repellendus ut. Quae corrupti dolores illum cupiditate a distinctio numquam.' WHERE id = 24016126;
UPDATE bnbReview SET message = 'Quis a cum officiis porro laboriosam ipsa et tempore sequi. Doloremque perferendis consequatur tempore voluptate ut veritatis sequi praesentium. Odit velit qui consequatur. Voluptatem vero eum ea rerum est qui dolor. Quo reiciendis quos. Illum ipsum deserunt velit commodi at eligendi repellendus ut. Quae corrupti dolores illum cupiditate a distinctio numquam.' WHERE id = 42386937;
UPDATE bnbReview SET message = 'Quis a cum officiis porro laboriosam ipsa et tempore sequi. Doloremque perferendis consequatur tempore voluptate ut veritatis sequi praesentium. Odit velit qui consequatur. Voluptatem vero eum ea rerum est qui dolor. Quo reiciendis quos. Illum ipsum deserunt velit commodi at eligendi repellendus ut. Quae corrupti dolores illum cupiditate a distinctio numquam.' WHERE id = 29055278;
UPDATE bnbReview SET message = 'Quis a cum officiis porro laboriosam ipsa et tempore sequi. Doloremque perferendis consequatur tempore voluptate ut veritatis sequi praesentium. Odit velit qui consequatur. Voluptatem vero eum ea rerum est qui dolor. Quo reiciendis quos. Illum ipsum deserunt velit commodi at eligendi repellendus ut. Quae corrupti dolores illum cupiditate a distinctio numquam.' WHERE id = 49844988;
UPDATE bnbReview SET message = 'Quis a cum officiis porro laboriosam ipsa et tempore sequi. Doloremque perferendis consequatur tempore voluptate ut veritatis sequi praesentium. Odit velit qui consequatur. Voluptatem vero eum ea rerum est qui dolor. Quo reiciendis quos. Illum ipsum deserunt velit commodi at eligendi repellendus ut. Quae corrupti dolores illum cupiditate a distinctio numquam.' WHERE id = 15151934;

DELETE FROM bnbReview WHERE id = 38148485;
DELETE FROM bnbReview WHERE id = 8970309;
DELETE FROM bnbReview WHERE id = 12294374;
DELETE FROM bnbReview WHERE id = 2371809;
DELETE FROM bnbReview WHERE id = 41244551;
