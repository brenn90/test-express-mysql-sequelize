# Express RESTful APIs with mysql and sequelize

### Prerequisite
- node.js
- Mysql
- sequelize-cli

### How to run
- `npm install` to install dependencies
- `npm start` to run application
- `sequelize db:seed:all` to migrate intial seed data

### Database config
- DB config for local
```
  "development": {
    "username": "root",
    "password": "12345678",
    "database": "tutorial",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```

### TODO
- DB should be configured for other environments like `test` and `prod`
- DB migration and other deployment should be done automatically by using docker
