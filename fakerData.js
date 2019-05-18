const faker = require('faker');

const db = require('./database/index.js');

const listings = () => {
  for (let i = 1; i < 101; i += 1) {
    const query = `INSERT INTO listings (listings_id) VALUES ("${i}")`;
    db.connection.query(query, (error) => {
      if (error) {
        console.log('failed to send listing', error);
      } else {
        console.log('listings made');
      }
    });
  }
};

const messages = () => {
  for (let i = 0; i < 300; i += 1) {
    const years = ['2016', '2017', '2018', '2019'];
    const randomMessage = faker.lorem.paragraphs();
    const randomListingId = faker.random.number(100);
    const accuracyRating = faker.random.number(5);
    const communicationRating = faker.random.number(5);
    const cleanlinessRating = faker.random.number(5);
    const locationRating = faker.random.number(5);
    const checkInRating = faker.random.number(5);
    const valueRating = faker.random.number(5);
    const randomDate = `${faker.date.month()} ${years[faker.random.number(3)]}`;
    const fakeName = faker.name.findName();
    const fakeProfilePic = faker.image.avatar();
    const query = `INSERT INTO messages (message, time_made, listing_id, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, username, profile_pic_url) VALUES ("${randomMessage}", "${randomDate}", "${randomListingId}", "${accuracyRating}", "${communicationRating}",  "${cleanlinessRating}", "${locationRating}", "${checkInRating}", "${valueRating}", "${fakeName}", "${fakeProfilePic}")`;
    db.connection.query(query, (error) => {
      if (error) {
        console.log('failed to send message', error);
      } else {
        console.log('message made');
      }
    });
  }
};

listings();
messages();
