import 'dotenv/config'
import pool from "./../bd.js"
// import md5 from 'md5'

export const insertUser = async function (obj) {
    try {
        var query = "insert into usuarios set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getUsernameAndPassword = async function(user){
    try{
        var query = 'select * from usuarios where user = ? limit 1';
        var rows = await pool.query(query, [user]);
        console.log(rows[0])
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

export const getUserById = async function (id) {
    var query = 'select * from usuarios where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

