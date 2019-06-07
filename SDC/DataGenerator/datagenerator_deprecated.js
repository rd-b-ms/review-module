const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var writer1 = csvWriter();
var writer2 = csvWriter();

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

// const randomDataGenerator = () => {
//   return {
//     time_made:faker.date.month() + " " + faker.random.number({min: 2016, max: 2018}), //0 time_made
//     accuracy_rating:faker.random.number({min: 1, max: 5}), //1 accuracy_rating
//     communication_rating:faker.random.number({min: 1, max: 5}), //2 communication_rating
//     cleanliness_rating:faker.random.number({min: 1, max: 5}), //3 cleanliness_rating
//     location_rating:faker.random.number({min: 1, max: 5}), //4 location_rating
//     check_in_rating:faker.random.number({min: 1, max: 5}), //5 check_in_rating
//     value_rating:faker.random.number({min: 1, max: 5}), //6 value_rating
//     message:faker.lorem.paragraph(faker.random.number({min: 1, max: 5})), //7 message
//     listing_id:faker.random.number({min: 1, max: 10}), //8 listing_id
//   }
// };

const saveToFile = async (numbOfReviews) => {
  writer.pipe(fs.createWriteStream('./dataSets/usersTable.csv'));
  writer1.pipe(fs.createWriteStream('./dataSets/fakeDataSQL.csv'));
  writer2.pipe(fs.createWriteStream('./dataSets/fakeDataNoSQL.csv'));
  let revIdx = 0;
  let user_id = 1;
  while (revIdx < numbOfReviews) {
    let username = generatedData.username[(Math.floor(Math.random()*100))];
    let profile_pic_url = generatedData.profile_pic_url[(Math.floor(Math.random()*100))];
    let curUsrReviewCount = 0;
    let revPerUser = Math.floor(Math.random()*10)+1;
    if (!writer.write({username, profile_pic_url})) {
      await new Promise(resolve => writer.once('drain', resolve));
      console.log('AAAAAAAAAAAAAAAAA')
    }
    while (curUsrReviewCount < revPerUser) {
      let randomData = randomDataGenerator();
      randomData.user_id = user_id;
      if (!writer1.write(randomData)) {
        // await new Promise(resolve => writer1.once('drain', resolve));
        // console.log('BBBBBBBBBBBBBBBBB')
      }
      randomData.username = username;
      randomData.profile_pic_url = profile_pic_url;
      randomData.id = revIdx;
      // delete randomData.user_id;
      if (!writer2.write(randomData)) {
        // await new Promise(resolve => writer2.once('drain', resolve));
        // console.log('CCCCCCCCCCCCCCCCCCCC')
      }
      curUsrReviewCount++;
      revIdx++;
      if (user_id%1000 === 0) {
        console.log(user_id);
      }
    }
    user_id++;
  }
  writer.end();
  writer1.end();
  writer2.end();
}

saveToFile(1e7)


// SQL:
// id (auto)
//0 time_made faker.date.past()
//1 accuracy_rating faker.random.number({min: 1, max: 5})
//2 communication_rating faker.random.number({min: 1, max: 5})
//3 cleanliness_rating faker.random.number({min: 1, max: 5})
//4 location_rating faker.random.number({min: 1, max: 5})
//5 check_in_rating faker.random.number({min: 1, max: 5})
//6 value_rating faker.random.number({min: 1, max: 5})
//7 user_id
//8 listing_id
//9 message faker.lorem.paragraph(INT)

// id (auto)
//10 username faker.name.firstName()
//11 profile_pic_url faker.image.avatar()


// NOSQL:
// id (auto)
//0 time_made faker.date.past()
//1 accuracy_rating faker.random.number({min: 1, max: 5})
//2 communication_rating faker.random.number({min: 1, max: 5})
//3 cleanliness_rating faker.random.number({min: 1, max: 5})
//4 location_rating faker.random.number({min: 1, max: 5})
//5 check_in_rating faker.random.number({min: 1, max: 5})
//6 value_rating faker.random.number({min: 1, max: 5})
//7 listing_id faker.random.number({min: 1, max: 10000})
//8 message faker.lorem.paragraph(INT)
//9 username faker.name.firstName()
//10 profile_pic_url faker.image.avatar()