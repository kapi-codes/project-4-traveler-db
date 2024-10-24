/* Establish the DB connection pool here. */
import pg from 'pg';
const config = {
};
export const pool = new pg.Pool(config);