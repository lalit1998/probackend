var db=require('../dbconnection');
var repair={
    getAllRepair:function(callback){
        return db.query("select * from  repair_tbl",callback);
    },
    
    addRepairing:function(item,callback){
        var status='pending';
        var approve='approve';
        var repair_amt=0;
        var repair_date="";
        return db.query("insert into repair_tbl(fk_user_id,fk_cat_id,model_no,problem_spec,status,approve,repair_amt,repair_date) values(?,?,?,?,?,?,?,?)",[item.fk_user_id,item.fk_cat_id,item.model_no,item.problem_spec,status,approve,repair_amt,repair_date],callback);
    },
    addRepair:function(item,callback){
        return db.query("insert into repair_tbl(fk_user_id,fk_cat_id,model_no,problem_spec) values(?,?,?,?)",[item.fk_user_id,item.fk_cat_id,item.model_no,item.problem_spec],callback);
    },
    deleteAllRepairingOrder:function(item,callback){
        console.log(item);
        var delarr=[];
        for(i=0;i<item.length;i++)
        {
            delarr[i]=item[i].repair_id;
           
        }
    return db.query("delete from repair_tbl where repair_id in (?)",[delarr],callback);
    },
    deleteRepairOrder:function(id,callback){
   
        return db.query("delete from repair_tbl where repair_id in (?)",[id],callback);
    },
    getRepairById:function(repair_id,callback){
        return db.query("select * from repair_tbl  where repair_id=?",[repair_id],callback);
    },
    updateRepairAmt:function(item,callback){  
        console.log(item);
        return db.query("update repair_tbl set repair_amt=?,repair_date=? where repair_id=?",[item.amt,item.date,item.id],callback);
    },
    getRepairOrderById:function(fk_user_id,callback){
        return db.query("select r.*,u.* from repair_tbl r,user_tbl u where u.user_id=r.fk_user_id And r.fk_user_id=?",[fk_user_id],callback);
    },
}
module.exports=repair;