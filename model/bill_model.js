var db=require('../dbconnection');
var bill={
    getAllBills:function(callback){
        return db.query("select * from  bill_tbl",callback);
    },
    // getProductById:function(pro_id,callback){
    //     return db.query("select * from product_tbl  where pro_id=?",[pro_id],callback);
    // },
    GetBillById:function(fk_user_id,callback){
        return db.query("select * from bill_tbl where fk_user_id=?",[fk_user_id],callback);
    },
    GetPastOrder:function(id,callback){
        return db.query("select bd.*,p.* from bill_details_tbl bd,product_tbl p where bd.fk_product_id=p.pro_id and fk_bill_id=?",[id],callback);
    },
    addNewBill:function(item,callback){
        var d=new Date(Date.now());
        
        // return db.query("insert into bill_tbl values(?,?,?,?,?,?,?)",[item.bill_id,item.bill_amount,d,item.delivery_date,item.fk_user_id,item.fk_pro_id,item.qty],callback);
        return db.query("insert into bill_tbl(bill_amount,date,fk_user_id,bill_type) values(?,?,?,?)",[item.bill_amount,d,item.fk_user_id,item.bill_type],callback);
    },
    addNewBillOffline:function(item,callback){
        var d=new Date(Date.now());
        
        // return db.query("insert into bill_tbl values(?,?,?,?,?,?,?)",[item.bill_id,item.bill_amount,d,item.delivery_date,item.fk_user_id,item.fk_pro_id,item.qty],callback);
        return db.query("insert into bill_tbl(bill_amount,date,fk_pro_id,qty,name) values(?,?,?,?,?)",[item.bill_amount,d,item.fk_pro_id,item.qty,item.name],callback);
    },
    getUserNameByBill:function(callback){
        return db.query("select b.*,u.* from bill_tbl b,user_tbl u where u.user_id=b.fk_user_id",callback);
    },
};
module.exports=bill;