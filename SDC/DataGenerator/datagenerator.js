const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var writer1 = csvWriter();
var writer2 = csvWriter();


const randomDataGenerator = () => {
  return {
    time_made:faker.date.month() + " " + faker.random.number({min: 2016, max: 2018}), //0 time_made
    accuracy_rating:faker.random.number({min: 1, max: 5}), //1 accuracy_rating
    communication_rating:faker.random.number({min: 1, max: 5}), //2 communication_rating
    cleanliness_rating:faker.random.number({min: 1, max: 5}), //3 cleanliness_rating
    location_rating:faker.random.number({min: 1, max: 5}), //4 location_rating
    check_in_rating:faker.random.number({min: 1, max: 5}), //5 check_in_rating
    value_rating:faker.random.number({min: 1, max: 5}), //6 value_rating
    message:faker.lorem.paragraph(faker.random.number({min: 1, max: 5})), //7 message
    listing_id:faker.random.number({min: 1, max: 10}), //8 listing_id
    // user_id:faker.random.number({min: 1, max: 9}), //9 user_id
  }
};

// const randomUsersGenerator = (numbOfUsers) => {
//   let users = [];
//   writer.pipe(fs.createWriteStream('./dataSets/usersTable.csv'));
//   for (let i = 0; i < numbOfUsers; i++) {
//     let user = {
//       username: faker.name.firstName(), //10 username
//       profile_pic_url: faker.image.avatar(), //11 profile_pic_url
//     };
//     users.push(user);
//     writer.write(user);
//   }
//   writer.end();
//   return users;
// }

// var users = randomUsersGenerator(10)

const saveToFile = (numbOfReviews) => {
  writer.pipe(fs.createWriteStream('./dataSets/usersTable.csv'));
  writer1.pipe(fs.createWriteStream('./dataSets/fakeDataSQL.csv'));
  writer2.pipe(fs.createWriteStream('./dataSets/fakeDataNoSQL.csv'));
  let revIdx = 0;
  let user_id = 1;
  while (revIdx < numbOfReviews) {
    let username = faker.name.firstName();
    let profile_pic_url = faker.image.avatar();
    let curUsrReviewCount = 0;
    let revPerUser = faker.random.number({min: 1, max: 10});
    writer.write({username, profile_pic_url});
    while (curUsrReviewCount < revPerUser) {
      console.log('count:', curUsrReviewCount,'rev:', revPerUser,'i:', revIdx)
      let randomData = randomDataGenerator();
      randomData.user_id = user_id;
      writer1.write(randomData);
      delete randomData.user_id;
      randomData.username = username;
      randomData.profile_pic_url = profile_pic_url;
      writer2.write(randomData);
      curUsrReviewCount++;
      revIdx++;
    }
    user_id++;
  }
  writer.end();
  writer1.end();
  writer2.end();
}

saveToFile(10)

// const randomDataGenerator = () => {
//   return [
//     faker.date.month() + " " + faker.random.number({min: 2016, max: 2018}), //0 time_made
//     faker.random.number({min: 1, max: 5}), //1 accuracy_rating
//     faker.random.number({min: 1, max: 5}), //2 communication_rating
//     faker.random.number({min: 1, max: 5}), //3 cleanliness_rating
//     faker.random.number({min: 1, max: 5}), //4 location_rating
//     faker.random.number({min: 1, max: 5}), //5 check_in_rating
//     faker.random.number({min: 1, max: 5}), //6 value_rating
//     faker.lorem.paragraph(faker.random.number({min: 1, max: 5})), //7 message
//     faker.random.number({min: 1, max: 10}), //8 listing_id
//     faker.random.number({min: 1, max: 9}), //9 user_id
//   ]
// };

// const randomUsersGenerator = (numbOfUsers) => {
//   let users = [];
//   for (let i = 0; i < numbOfUsers; i++) {
//     let newUser = [
//       faker.name.firstName(), //10 username
//       faker.image.avatar(), //11 profile_pic_url
//     ];
//     users.push(newUser);
//     if (i === 0) {
//       fs.writeFileSync('usersTable.csv', newUser + "\n", (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     } else {
//       fs.appendFileSync('usersTable.csv', newUser + "\n", (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     }
//   }
//   return users;
// };

// //change number of users
// const userArr = randomUsersGenerator(10);

// const saveToFile = (numbOfReviews) => {
//   for (let i = 0; i < numbOfReviews; i++) {
//     let randomData = randomDataGenerator();
//     if (i === 0) {
//       fs.writeFileSync('fakeDataSQL.csv', `${randomData}\n`, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//       let userID = randomData.pop();
//       randomData = randomData.concat(userArr[userID].slice(1));
//       fs.writeFileSync('fakeDataNoSQL.csv', `${randomData}\n`, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     } else {
//       fs.appendFileSync('fakeDataSQL.csv', `${randomData}\n`, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//       let userID = randomData.pop();
//       randomData = randomData.concat(userArr[userID].slice(1));
//       fs.appendFileSync('fakeDataNoSQL.csv', `${randomData}\n`, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     };
//     }
// };

// //change number of reviews
// saveToFile(10);


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