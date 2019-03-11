var db=require('../dbconnection');
var orderdet={
  
    GetOrderDetails:function(callback){
        return db.query("select * from order_details_tbl",callback);
    },
    InsertOrderDetails:function(item,callback){
        console.log(item);
        // console.log(item.length);
        var value=[];
        for(let i=0;i<item.length;i++)
        {
            value[i]=[item[i].fk_order_id,item[i].fk_pro_id,item[i].qty,item[i].price];
            console.log(value[i]);
        }
        console.log(value);
        return db.query("insert into order_details_tbl(fk_order_id,fk_pro_id,qty,price) VALUES ?",[value],callback);
    }   ,
    getOrderDetailsWithId:function(fk_order_id,callback)
    {
        return db.query("select o.*,od.* from order_tbl o,order_details_tbl od where od.fk_order_id=o.order_id and fk_order_id=?",[fk_order_id],callback);
    },
    GetOrderDetailsByfkoid:function(fk_order_id,callback){
        return db.query("select * from order_details_tbl where fk_order_id=?",[fk_order_id],callback);
    }
};
module.exports=orderdet;