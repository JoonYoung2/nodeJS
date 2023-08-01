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

const login = async (body) => {
    oracledb.outFormat = oracledb.OBJECT;
    const sql = `select * from members02 where id=${body.id}`;
    let con = await oracledb.getConnection(dbConfig);
    let idCheck = "";
    try{
        console.log("==>", await con.execute(sql));
        idCheck = await con.execute(sql);
        console.log(idCheck.rows.length);
        
    }catch(err){
        console.log(err);
    }

    if(idCheck.rows.length == 1){
        if(idCheck.rows[0].PWD == body.pwd){
            return 1;
        }else{
            return 2;
        }
    }else
        return 0;
}

const getMemberInfo = async (query) => {
    oracledb.outFormat = oracledb.OBJECT;
    const sql = `select * from members02 where id=${query.id}`;
    let con = await oracledb.getConnection(dbConfig);
    try{
        const member = await con.execute(sql);   
        return member;
    }catch(err){
        console.log(err);   
    }   
    return null;
}

const deleteMember = async (params, userId) => {
    const sql = `delete from members02 where id=${params.id}`;
    let con = await oracledb.getConnection(dbConfig);

    try{
        await con.execute(sql);
    }catch(err){
        console.log(err);
    }
    var sessionId = userId;
    var listId = params.id;
    console.log(userId);
    console.log(params.id);
    if(sessionId === listId){
        return 0;
    }else{
        return 1;
    }
}

const memberUpdate = async (body) => {
    const sql = `update members02 set pwd='${body.pwd}', name='${body.name}', addr='${body.addr}' where id='${body.id}'`
    let con = await oracledb.getConnection(dbConfig);

    try{
        await con.execute(sql);
    }catch(err){
        console.log(err);
    }
}

module.exports = {getList, insert, login, getMemberInfo, deleteMember, memberUpdate};