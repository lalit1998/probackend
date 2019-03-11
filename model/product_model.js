var db=require('../dbconnection');
var product={
    getAllProduct:function(callback){
        return db.query("select * from  product_tbl",callback);
    },
    getProductById:function(pro_id,callback){
        return db.query("select * from product_tbl  where pro_id=?",[pro_id],callback);
    },
    addProduct:function(item,filename,callback){
    return db.query("insert into product_tbl(pro_name,pro_img,pro_color,pro_price,pro_soh,pro_mfg,pro_desc,fk_cat_id) values(?,?,?,?,?,?,?,?)",[item.pro_name,filename,item.pro_color,item.pro_price,item.pro_soh,item.pro_mfg,item.pro_desc,item.fk_cat_id],callback);
    },
    getProductByCatName:function(cat_name,callback){
        return db.query("select p.*,c.* from product_tbl p,category_tbl c where c.cat_id=p.fk_cat_id and c.cat_name=?",[cat_name],callback);
    },
    updateProduct:function(item,filename,callback){
        console.log(item);
        return db.query("update product_tbl set pro_name=?,pro_img=?,pro_color=?,pro_price=?,pro_soh=?,pro_mfg=?,pro_desc=?,fk_cat_id=? where pro_id=?",[item.pro_name,filename,item.pro_color,item.pro_price,item.pro_soh,item.pro_mfg,item.pro_desc,item.fk_cat_id,item.pro_id],callback);
    },
    updateProductWithoutimg:function(pro_id,item,callback){
        return db.query("update product_tbl set pro_name=?,pro_color=?,pro_price=?,pro_soh=?,pro_mfg=?,pro_desc=?,fk_cat_id=? where pro_id=?",[item.pro_name,item.pro_color,item.pro_price,item.pro_soh,item.pro_mfg,item.pro_desc,item.fk_cat_id,pro_id],callback);
    },
    deleteAllProduct:function(item,callback){
        console.log(item);
        var delarr=[];
        for(i=0;i<item.length;i++)
        {
            delarr[i]=item[i].pro_id;
           
        }
        console.log(delarr);
    return db.query("delete from product_tbl where pro_id in (?)",[delarr],callback);
    },
    deleteProduct:function(id,callback){
   
         return db.query("delete from product_tbl where pro_id in (?)",[id],callback);
   },
   getAllCataByNotId:function(cat_id,pro_id,callback){
 
    return db.query("select * from product_tbl where fk_cat_id=? and pro_id NOT IN (?)",[cat_id,pro_id],callback);
     }, 

    displayProduct:function(cat_id,callback){
   
        return db.query("select * from product_tbl where fk_cat_id = ?",[cat_id],callback);
    },
    UpdateQty:function(item,callback){
   
        return db.query("update product_tbl set pro_soh=? where pro_id=?",[item.pro_soh,item.pro_id],callback);
    },
 
    
};
module.exports=product;