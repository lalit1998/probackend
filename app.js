var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var category=require('./routes/category_routes');
var categorybyid=require('./routes/categorybyid_routes');
var deleteallcategory=require('./routes/multideletecategory_route');
var product=require('./routes/product_route');
var deleteallproduct=require('./routes/multideleteproduct_route');
var productbyid=require('./routes/productbyid_route');
var updateproduct=require('./routes/Update_product_route');
var productbycatname=require('./routes/productBycatname_route');
var userlogin=require('./routes/user_route');
var forgetpass=require('./routes/forgetpass_route');
var changepass=require('./routes/changepass_route');
var email=require('./routes/email_routes');
var updateuser=require('./routes/updateusers_route');
var order=require('./routes/order_route');
var orderdetail=require('./routes/order_detail_route');
var orderbyuname=require('./routes/orderbyusername_route');
var todaysorder=require('./routes/todays_order_route');
var toporder=require('./routes/toporder_route');
var insertorder=require('./routes/insert_order_route');
var addrepair=require('./routes/addrepair_route');
var addrepairing=require('./routes/addrep_route');
var repair=require('./routes/repair_route');
var repairorder=require('./routes/repair_order_route');
var repairorderby=require('./routes/repaibyorder_route');
var repairorderbyid=require('./routes/repairorderbyid_route');
var deleteallrepair=require('./routes/deleteallrepairing_route');
var deletealluser=require('./routes/multideleteuser_route');
var bill=require('./routes/bill_route');
var billdetails=require('./routes/billdetails_route');
var getAdmin=require('./routes/getAdminByName_route');
var billoffline=require('./routes/billoffline_route');
var getAllUser=require('./routes/getAllUser_route');
var getAllProductOfHighRate=require('./routes/offer_route');
var Cart=require('./routes/addcart_route');
var CartByproid=require('./routes/addcartbypro_id_route');
var multideletecart=require('./routes/multideletecart_route');
var CartCountById=require('./routes/cartcountbyid_route');
var review=require('./routes/review_route');
var displayproduct=require('./routes/displayproduct_route');
var changeqty=require('./routes/changeqty_route');
var Checkintocart=require('./routes/checkcart_route');
var billbyuserid=require('./routes/billbyuserid_route');
var pastorder=require('./routes/past_order_route');
var topfiveSellProduct=require('./routes/topfivesellproduct_route');
var wish=require('./routes/wish_route');
var wishlistbyid=require('./routes/wishlistbyuserid_route');
var checkwish=require('./routes/checkwish_route');
var Contact=require('./routes/contact_route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category',category);
app.use('/categorybyid',categorybyid);
app.use('/deleteallcategory',deleteallcategory);
app.use('/product',product);
app.use('/deleteallproduct',deleteallproduct);
app.use('/productbyid',productbyid);
app.use('/updateproduct',updateproduct);
app.use('/productbycatname',productbycatname);
app.use('/userlogin',userlogin);
app.use('/updateuser',updateuser);
app.use('/forgetpass',forgetpass);
app.use('/changepass',changepass);
app.use('/email',email);
app.use('/order',order);
app.use('/todaysorder',todaysorder);
app.use('/orderdetail',orderdetail);
app.use('/orderbyusername',orderbyuname);
app.use('/toporder',toporder);
app.use('/insertorder',insertorder);
app.use('/repair',repair);
app.use('/addrepair',addrepair);
app.use('/addrepairing',addrepairing);
app.use('/repairorder',repairorder);
app.use('/repairorderbyid',repairorderbyid);

app.use('/deleteallrepair',deleteallrepair);
app.use('/repairorderby',repairorderby);
app.use('/bill',bill);
app.use('/billdetails',billdetails);
app.use('/getadmin',getAdmin);
app.use('/billoffline',billoffline);
app.use('/deletealluser',deletealluser);
app.use('/getalluser',getAllUser);
app.use('/highrateproduct',getAllProductOfHighRate);
app.use('/cart',Cart);
app.use('/cartbyproid',CartByproid);
app.use('/multideletecart',multideletecart);
app.use('/cartcountbyid',CartCountById);
app.use('/review',review);
app.use('/displayproduct',displayproduct);
app.use('/changeqty',changeqty);
app.use('/Checkintocart',Checkintocart);
app.use('/pastorder',pastorder);
app.use('/billbyuserid',billbyuserid);
app.use('/topfivesellproduct',topfiveSellProduct);
app.use('/wishlist',wish);
app.use('/wishlistbyid',wishlistbyid);
app.use('/checkwish',checkwish);
app.use('/contact',Contact);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
