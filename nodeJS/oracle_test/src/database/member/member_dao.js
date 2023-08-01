const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");


oracledb.autoCommit = true; // 자동 커밋

const getList = async () => {
    oracledb.outFormat = oracledb.OBJECT;                               // DB에서 가져온 결과값을 2차배열 -> 1차배열로 바꿔줌
    let con = await oracledb.getConnection(dbConfig);                     // DB실행 모든 것은 다 비동기로 실행하게 됌.
    console.log("con : ", con);
    let result = await con.execute("select * from members02");
    console.log("result => ", result);
    return result;
}

const insert = async (body) => {
    console.log("id ===> ", body);
    let con = await oracledb.getConnection(dbConfig);
    const sql = `insert into members02(id, pwd, name, addr) values(:id, :pwd, :name, :addr)`;

    let result = 0;

    try{
        result = await con.execute(sql, body);      //문제 발생 시 0, 정상이면 Object
        console.log("dao insert : ", result);
    }catch(err){
        console.log(err)
    }
    
    return result.rowsAffected;
}

const getMember = async (mId) => {
    const sql = "select * from members02 where id=:id";
    let con = await oracledb.getConnection(dbConfig);
    let member;
    try{
        member = await con.execute(sql, mId);
        console.log("dao getMember => ", member.rows[0]);
    }catch(err){
        console.log(err);
    }
    return member.rows[0];
}

const modify = async (body) => {
    const sql = `update members02 set pwd='${body.pwd}', name='${body.name}', addr='${body.addr}' where id='${body.id}'`;
    let con = await oracledb.getConnection(dbConfig);
    let result = 0;
    try{
        result = await con.execute(sql);
    }catch(err){
        console.log(err);
    }

    return result;
}

const deleteMember = async (body) => {
    // const sql = `delete from members02 where id=${body.id}`;
    const sql = "delete from members02 where id=:id";
    let con = await oracledb.getConnection(dbConfig);
    let result = 0;
    try{
        result = await con.execute(sql, body);
    }catch(err){
        console.log(err);
    }

    return result;
}

module.exports = {getList, insert, getMember, modify, deleteMember};