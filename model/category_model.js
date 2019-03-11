var db=require('../dbconnection');
var category={
    getAllCategory:function(callback){
        return db.query("select * from  category_tbl",callback);
    },
    getCategoryById:function(cat_id,callback){
        return db.query("select * from category_tbl  where cat_id=?",[cat_id],callback);
    },
    addCategory:function(item,callback){
        return db.query("insert into category_tbl values(?,?)",[item.cat_id,item.cat_name],callback);
    },
    updateCategory:function(id,item,callback){
        return db.query("update  category_tbl set cat_name=? where cat_id=?",[item.cat_name,id],callback);
    },
    deleteAllCategory:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++)
        {
            delarr[i]=item[i].cat_id;
        }
    return db.query("delete from category_tbl where cat_id in (?)",[delarr],callback);
    },
    deleteCategory:function(id,callback){
   
         return db.query("delete from category_tbl where cat_id in (?)",[id],callback);
   }, 
   


};
module.exports=category;