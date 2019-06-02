const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '',
  database: 'reviews',
});
connection.connect();

const getMessages = (callback) => {
  const query = `SELECT * FROM messages WHERE listing_id = ${Math.floor(Math.random() * 100)}`;
  connection.query(query, (error, data) => {
    if (error) {
      console.log('Error when querying database', error);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  connection,
  getMessages,
};
