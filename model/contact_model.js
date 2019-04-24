var db=require('../dbconnection');
var Contact={
    AddContact(item,callback){
        return db.query("insert into contact_tbl(Name,Email,Mobile_no,Message) values(?,?,?,?)",[item.Name,item.Email,item.Mobile_no,item.Message],callback);
    }
}
module.exports=Contact;