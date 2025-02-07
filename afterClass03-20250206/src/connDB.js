import { Sequelize } from "sequelize"

// Option 3: Passing parameters separately (other dialects)
// export const sequelize = new Sequelize('testDB', 'root', '123', {
//     host: 'localhost',
//     dialect: 'mysql', 
//     // logging: false,
// });

export const sequelize = new Sequelize('mysql://root:123@localhost:3306/testDB')

try {
    await sequelize.authenticate();
    console.log('DB online!');
} catch (error) {
    console.error('Unable to connect to the database:', error.message);
}