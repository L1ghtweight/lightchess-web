import {Sequelize} from "sequelize";

const db = new Sequelize('test','monty','pass',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
