const faker = require('faker');
const path = require('path');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writerUser = csvWriter();
var writerCsvSql = csvWriter();
var writerCsvNoSql = csvWriter();

const dataGenerator = () => {
  const output = {
    time_made: [], //0 time_made
    message: [], //7 message
    username: [],
    profile_pic_url: []
  }
  for (let i = 0; i < 100; i++) {
    output.time_made.push(faker.date.month() + " " + faker.random.number({min: 2016, max: 2018}));
    output.message.push(faker.lorem.paragraph(faker.random.number({min: 1, max: 5})));
    output.username.push(faker.name.firstName());
    output.profile_pic_url.push(faker.image.avatar());
  }
  return output;
}

const generatedData = dataGenerator();

const randomDataGenerator = () => {
  return {
    time_made: generatedData.time_made[Math.floor(Math.random()*100)], //0 time_made
    accuracy_rating: Math.floor(Math.random()*5)+1, //1 accuracy_rating
    communication_rating: Math.floor(Math.random()*5)+1, //2 communication_rating
    cleanliness_rating: Math.floor(Math.random()*5)+1, //3 cleanliness_rating
    location_rating: Math.floor(Math.random()*5)+1, //4 location_rating
    check_in_rating: Math.floor(Math.random()*5)+1, //5 check_in_rating
    value_rating: Math.floor(Math.random()*5)+1, //6 value_rating
    message: generatedData.message[Math.floor(Math.random()*100)], //7 message
    listing_id: Math.floor(Math.random()*10000000), //8 listing_id
  }
};

const saveUserToFile = (numbOfUsers) => {
  writerUser.pipe(fs.createWriteStream(path.join(__dirname,'./dataSets/usersTable.csv')));
  for (let i = 1; i <= numbOfUsers; i++) {
    let username = generatedData.username[(Math.floor(Math.random()*100))];
    let profile_pic_url = generatedData.profile_pic_url[(Math.floor(Math.random()*100))];
    writer.write({username, profile_pic_url})
  }
  writer.end();
};

saveUserToFile(1000);

const saveDataToFile = (numbOfReviews) => {
  fs.readFile(path.join(__dirname, './dataSets/usersTable.csv'), 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    let userList = {};
    let resultArray = result.split('\n');
    for (let i = 0; i < resultArray.length; i++) {
      userList[i] = resultArray[i].split(',');
    } 
    writerCsvSql.pipe(fs.createWriteStream(path.join(__dirname,'./dataSets/fakeDataSQL.csv')));
    writerCsvNoSql.pipe(fs.createWriteStream(path.join(__dirname,'./dataSets/fakeDataNoSQL.csv')));
    let revCount = 0;
    while (revCount < numbOfReviews) {
      let randomData = randomDataGenerator();
      let user_id = Math.floor(Math.random()*1000)+1
      randomData.user_id = user_id;
      writer1.write(randomData)
      randomData.username = userList[user_id][0];
      randomData.profile_pic_url = userList[user_id][1];
      randomData.id = revCount;
      writer2.write(randomData)
      revCount++;
      if (revCount%100000 === 0) {
        console.log(revCount);
      }
    }
    writer1.end();
    writer2.end();
  });
}

setTimeout(() => saveDataToFile(10000000), 1000);