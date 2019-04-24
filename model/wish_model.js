var db=require('../dbconnection');
var wish={
        getAllWishList:function(callback){
            return db.query("select * from  wish_tbl",callback);
        },
        addWishList:function(item,callback){
            return db.query("insert into wish_tbl(fk_pro_id,fk_user_id) values(?,?)",[item.fk_pro_id,item.fk_user_id],callback);
        },
        getWishByUserid:function(fk_user_id,callback){
            return db.query("select p.*,w.*,u.* from product_tbl p,wish_tbl w,user_tbl u where w.fk_pro_id=p.pro_id And w.fk_user_id=u.user_id And w.fk_user_id=?",[fk_user_id],callback);
        },
        deleteAllWishList:function(item,callback){
            console.log(item);
            var delarr=[];
            for(i=0;i<item.length;i++)
            {
                delarr[i]=item[i].wish_id;
               
            }
            console.log(delarr);
            return db.query("delete from wish_tbl where wish_id in (?)",[delarr],callback);
        },
        deleteWish:function(id,callback){
       
            return db.query("delete from wish_tbl where wish_id in (?)",[id],callback);
        },
        AllDeleteWish:function(id,callback){
       
            return db.query("delete from wish_tbl where fk_user_id=?",[id],callback);
        },
        CheckWish:function(item,callback){
            return db.query("select * from wish_tbl where fk_pro_id=? and fk_user_id=?",[item.fk_pro_id,item.fk_user_id],callback);
        }


    }
    module.exports=wish;