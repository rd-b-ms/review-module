CREATE:
POST /messages
Query String:
  message: string 
  time_made: string
  listing_id: int 
  accuracy_rating: int 
  communication_rating: int 
  cleanliness_rating: int 
  location_rating: int 
  check_in_rating: int 
  value_rating: int 
  username: string 
  profile_pic_url: string
  Example:
    {
    "message": "this is the new message", 
    "time_made":"time123", 
    "listing_id":"1", 
    "accuracy_rating":"2", 
    "communication_rating":"3", 
    "cleanliness_rating":"4", 
    "location_rating":"5", 
    "check_in_rating":"1", 
    "value_rating":"2", 
    "username":"roger", 
    "profile_pic_url":"http://example.com"
    }
Responses:
  Success: 201
    Object
    {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 10002,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
  Failure: 500

READ:
GET /messages/:id
Responses:
  Success: 200
    Array
    [
      {
          "message_id": 287,
          "message": "Officiis deleniti at vel nostrum. Quidem beatae laudantium sunt. Ipsam possimus qui voluptas id aut qui sint sunt. Ut est autem architecto cumque labore. Autem officia possimus voluptatem voluptatem esse voluptate.\n \rEa hic expedita nihil quo expedita itaque. Distinctio earum sed ut architecto suscipit consequatur quos. Laborum suscipit qui.\n \rEt voluptatibus veniam et suscipit dignissimos incidunt. Et nemo ratione dolore qui. Incidunt ut quas voluptas. Dolore et sint.",
          "time_made": "May 2018",
          "listing_id": 1,
          "accuracy_rating": 3,
          "communication_rating": 1,
          "cleanliness_rating": 2,
          "location_rating": 1,
          "check_in_rating": 5,
          "value_rating": 5,
          "username": "Alek Muller",
          "profile_pic_url": "https://s3.amazonaws.com/uifaces/faces/twitter/flashmurphy/128.jpg"
      },
      {...}
    ]
  Failure: 200

UPDATE:
PUT /messages
Query String:
  message_id: number
  message: string
  Example:
  {
	  "message":"this is updated text",
	  "message_id":"10002"
  }
Responses:
  Success: 202
    Object
    {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
  Failure: 500

DELETE:
DELETE /messages
Query String:
  message_id: number
  Example:
  {
	  "message_id": "10002"
  }
Responses:
  Success: 200
  Object
  {
      "fieldCount": 0,
      "affectedRows": 1,
      "insertId": 0,
      "serverStatus": 2,
      "warningCount": 0,
      "message": "",
      "protocol41": true,
      "changedRows": 0
  }
  Failure: 500