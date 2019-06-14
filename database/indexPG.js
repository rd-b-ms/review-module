const {Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reviews',
  password: 'hackreactor',
  port: 5432,
});
// client.connect();

const getMessages = (listing_id, callback) => {
  let sql = 'SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = $1';
  pool.query(sql, [listing_id], (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result.rows);
  });
};

const createMessage = ({message, time_made, listing_id, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, user_id}, callback) => {
  let sql = 'INSERT INTO bnbReview (message, time_made, listing_id, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  pool.query(sql, [message, time_made, listing_id, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, user_id], (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result);
  });
};

const updateMessage = ({message, id}, callback) => {
  const sql = 'UPDATE bnbReview SET message = $1 WHERE id = $2';
  pool.query(sql, [message, id], (err, result) => {
    if (err) {
      callback(err);
      return;
    }
      callback(null, result);
  });
};

const deleteMessage = ({id}, callback) => {
  let sql = 'DELETE FROM bnbReview WHERE id = $1';
  pool.query(sql, [id], (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result);
  });
};

module.exports ={
  getMessages,
  createMessage,
  deleteMessage,
  updateMessage
}