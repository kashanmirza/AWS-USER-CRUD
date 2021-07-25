export default {
    "type": "mysql",
    "host": "localhost",
    "port": "3306",
    "username": "kashan",
    "password": "@Password1",
    "database": "aws-crud",
    "synchronize": false,
    "logging": true,
    "entities": ["src//*.entity.ts", "dist//*entity.ts"]
  }