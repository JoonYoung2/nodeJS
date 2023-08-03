const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");

oracledb.autoCommit = true;

/*
    - oracledb.outFormat -
    설정하지 않으면 2차원 배열로 들어오기 때문에 KEY, VALUE를 사용할 수 없다.
    [[값,값,값], [값,값,값]...]
*/

const getMember = async (body) => {
    oracledb.outFormat = oracledb.OBJECT;
    const con = await oracledb.getConnection(dbConfig);
    const sql = `select * from members02 where id='${body.id}'`;
    let member;

    try{
        member = await con.execute(sql);
        console.log(member);
    }catch(err){
        console.log(err);
    }
    console.log(member);
    return member.rows[0];
}

const list = async () => {
    oracledb.outFormat = oracledb.OBJECT;
    const con = await oracledb.getConnection(dbConfig);
    const sql = "select * from members02";
    let member;
    try{
        member = await con.execute(sql);
        console.log(member);
    }catch(err){
        console.log(err);
    }
    
    return member.rows;
}

const memberInfo = async (query) => {
    oracledb.outFormat = oracledb.OBJECT;
    const sql = `select * from members02 where id=${query.id}`;
    const con = await oracledb.getConnection(dbConfig);
    let member;
    try{
        member = await con.execute(sql);
    }catch(err){
        console.log(err);
    }

    return member.rows[0];
}

module.exports = {getMember, list, memberInfo};