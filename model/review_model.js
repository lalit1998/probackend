var db=require('../dbconnection');
var offer={
    getAllReview:function(fk_pro_id,callback){
        return db.query("select * from  review_tbl  where fk_pro_id=?",[fk_pro_id],callback);
    },
    addReview:function(item,callback){
        console.log(item);
        return db.query("insert into review_tbl(email_id,user_name,review,fk_pro_id) values(?,?,?,?)",[item.email_id,item.user_name,item.review,item.fk_pro_id],callback);
        
        }
   
};
module.exports=offer;