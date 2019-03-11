var db=require('../dbconnection');
var repair={
    getAllRepair:function(callback){
        return db.query("select * from  repair_tbl",callback);
    },
    addRepairing:function(item,callback){
        return db.query("insert into repair_tbl(fk_user_id,fk_cat_id,model_no,problem_spec,status,approve) values(?,?,?,?,?,?)",[item.fk_user_id,item.fk_cat_id,item.model_no,item.problem_spec,item.status,item.approve],callback);
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
        return db.query("update repair_tbl set repair_amt=? where repair_id=?",[item.amt,item.id],callback);
    }
}
module.exports=repair;