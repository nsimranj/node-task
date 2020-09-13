# Appiness Node Task 1

Making the first user who registers, as Admin.

## Prerequisites

[Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/)

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```
npm install 
```

## Dependencies

[Express.js](https://expressjs.com/) and [Mongoose](https://mongoosejs.com/)

## Usage

Whenever /api/users/register endpoint is hit, it creates a user and assigns a role to it.  
If the first user registers, then role is set to admin otherwise the role is user.

Sample JSON for register POST API (eg: localhost:3000/api/users/register) is,  
{
    "name": "Simran N",
    "phone": 8744125613,
    "email": "simran@gmail.com",
    "address": "Bengaluru"
}  
  
Note: email field should be unique for each user.

To run the node server, please set PORT environment variable if port 3000 is not available.

```
node index.js
```
