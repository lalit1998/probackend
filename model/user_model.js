var db=require('../dbconnection');
var User={
        
    getAllUser:function(type,callback){
        let type1="User";
        return db.query("Select * from user_tbl where type=?",[type1],callback)
        },
        getLogin:function(email_id,item,callback){
                console.log(item);
                   return db.query("Select * from user_tbl where email_id=? And password=?",[email_id,item.password],callback);
                   
                },
        getForgetPassword:function(email_id,callback){
         
                return db.query("Select * from user_tbl where email_id=?",[email_id],callback);
        },
        changepassword:function(item,callback){
                return db.query("update user_tbl set password=? where email_id=?",[item.password,item.email_id],callback);
            },
        AddUser:function(item,callback){
        let type='User';
                return db.query("insert into user_tbl(email_id,user_name,password,address,mobile_no,gender,city,type) values(?,?,?,?,?,?,?,?)",[item.email_id,item.user_name,item.password,item.address,item.mobile_no,item.gender,item.city,type],callback);
        },
        
        UpdateUser:function(id,item,callback){
                let type='user';
                 return db.query("update user_tbl set email_id=?,user_name=?,address=?,mobile_no=?,gender=?,city=?,type=? where user_id=?",[item.email_id,item.user_name,item.address,item.mobile_no,item.gender,item.city,type,id],callback)
        },
        UpdateUsers:function(email_id,item,callback){
                let type='user';
          return db.query("update user_tbl set user_name=?,address=?,mobile_no=?,gender=?,city=?,type=? where email_id=?",[item.user_name,item.address,item.mobile_no,item.gender,item.city,type,email_id],callback)
 },

        deleteUser:function(id,callback){
           
                return db.query("delete from user_tbl where user_id in (?)",[id],callback);
          } ,
     
        deleteAllUser:function(item,callback){
                var delarr=[];
                for(i=0;i<item.length;i++)
                {
                    delarr[i]=item[i].user_id;
                }
            return db.query("delete from user_tbl where user_id in (?)",[delarr],callback);
            },
        
        
         getAdminByName:function(email_id,callback){
                return db.query("select * from user_tbl where email_id=?",[email_id],callback);
        },
        UpdateAdmin:function(email_id,item,callback){
                       let type='admin';
                 return db.query("update user_tbl set user_name=?,address=?,mobile_no=?,gender=?,city=?,type=? where email_id=?",[item.user_name,item.address,item.mobile_no,item.gender,item.city,type,email_id],callback)
        },

        
        getUserById:function(id,callback){
                return db.query("select * from user_tbl where user_id=?",[id],callback);
        },
        UpdatePassword:function(item,callback){
                return db.query("update user_tbl set password=? where email_id=?",[item.password,item.email_id],callback);
        },

       
        
}
module.exports=User;
