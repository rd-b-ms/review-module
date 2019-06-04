const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hackreactor',
  database: 'reviews',
});
connection.connect();

//create
const createMessage = ({message, time_made, listing_id, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, username, profile_pic_url}, callback) => {

  const query = `INSERT INTO messages (message, time_made, listing_id, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, username, profile_pic_url) VALUES ("${message}", "${time_made}", "${listing_id}", "${accuracy_rating}", "${communication_rating}",  "${cleanliness_rating}", "${location_rating}", "${check_in_rating}", "${value_rating}", "${username}", "${profile_pic_url}")`;
  connection.query(query, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result);
  });
};

//read
const getMessages = (listing_id, callback) => {
  const query = `SELECT * FROM messages WHERE listing_id = ${listing_id}`;
  connection.query(query, (err, data) => {
    if (err) {
      callback(err);
      console.log('Error when querying database', error);
    } else {
      callback(null, data);
    }
  });
};

//delete
const deleteMessage = ({message_id}, callback) => {
  const query = `DELETE FROM messages WHERE message_id = "${message_id}"`;
  connection.query(query, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result);
  });
};

//update
const updateMessage = ({message, message_id}, callback) => {
  const query = `UPDATE messages SET message = "${message}" WHERE message_id="${message_id}"`;
  connection.query(query, (err, result) => {
    if (err) {
      callback(err);
      return;
    }
      callback(null, result);
  });
};

module.exports = {
  connection,
  getMessages,
  updateMessage,
  deleteMessage,
  createMessage,
};
