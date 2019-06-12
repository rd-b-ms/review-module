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
  let sql = `SELECT * FROM bnbReview LEFT JOIN bnbUsers ON bnbReview.user_id = bnbUsers.id WHERE listing_id = ${listing_id}`;
  pool.query(sql, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result.rows);
  });
};

const createMessage = ({message, time_made, listing_id, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, user_id}, callback) => {
  let sql = `INSERT INTO bnbReview (message, time_made, listing_id, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, user_id) VALUES ('${message}', '${time_made}', ${listing_id}, ${accuracy_rating}, ${communication_rating}, ${cleanliness_rating}, ${location_rating}, ${check_in_rating}, ${value_rating}, ${user_id})`;
  pool.query(sql, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result);
  });
};

const updateMessage = ({message, id}, callback) => {
  const sql = `UPDATE bnbReview SET message = '${message}' WHERE id = ${id}`;
  pool.query(sql, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
      callback(null, result);
  });
};

const deleteMessage = ({id}, callback) => {
  let sql = `DELETE FROM bnbReview WHERE id = ${id}`;
  pool.query(sql, (err, result) => {
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