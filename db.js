import knex from 'knex'
import dotenv from 'dotenv'
dotenv.config() 

export const db = knex({
    client: 'pg',
    connection: {

        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        dialect:'postgres'

        // host: 'surus.db.elephantsql.com',
        // port: '5432',
        // user: 'btigvhlt',
        // password: 'B7HPjOySSkIv0qeQbmoZ-DSiHuvjHh18',
        // database: 'btigvhlt'
    }
})

db('users')
    .select('id', 'username', 'email', 'password')
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e);
    })
