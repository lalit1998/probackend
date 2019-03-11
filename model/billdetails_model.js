var db=require('../dbconnection');
var billdet={
  
    GetBillDetails:function(callback){
        return db.query("select * from bill_details_tbl",callback);
    },
    InsertBillDetails:function(item,callback){
        console.log(item);
        // console.log(item.length);
        var value=[];
        for(let i=0;i<item.length;i++)
        {
            value[i]=[item[i].fk_bill_id,item[i].fk_product_id,item[i].price,item[i].qty];
            console.log(value[i]);
        }
        console.log(value);
        return db.query("insert into bill_details_tbl(fk_bill_id,fk_product_id,price,qty) VALUES ?",[value],callback);
    },
    getAllPassBillDetail:function(fk_bill_id,callback)
    {
        return db.query("select bd.*,p.* from bill_details_tbl bd,product_tbl p where bd.fk_product_id=p.pro_id and fk_bill_id=?",[fk_bill_id],callback);
    } 
    
};
module.exports=billdet;