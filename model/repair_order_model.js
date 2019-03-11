var db=require('../dbconnection');
var repair={
    getAllRepairOrder:function(callback){
        return db.query("select * from  repair_order_tbl",callback);
    },
    getAllOrderFromRepairing:function(callback)
    {
        //console.log(fk_repair_id);
        return db.query("select r.*,ro.* from repair_tbl r,repair_order_tbl ro where ro.fk_repair_id=r.repair_id",callback);
        
    },
    addRepairingOrder:function(item,callback){
        var d=new Date(Date.now());
        return db.query("insert into repair_order_tbl(repair_order_amt,repair_order_date,fk_repair_id) values(?,?,?)",[item.repair_order_amt,d,item.fk_repair_id],callback);
    },
    deleteRepairingOrder:function(id,callback){
   
        return db.query("delete from repair_order_tbl where repair_order_id in (?)",[id],callback);
    },
    deleteAllRepairOrder:function(item,callback){
        console.log(item);
        var delarr=[];
        for(i=0;i<item.length;i++)
        {
            delarr[i]=item[i].repair_order_id;
           
        }
    return db.query("delete from repair_order_tbl where repair_order_id in (?)",[delarr],callback);
    }
}
module.exports=repair;