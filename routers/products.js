const a0_0x3a2624=a0_0x4ded;(function(_0xec4f1b,_0x249e9d){const _0xcbefeb=a0_0x4ded,_0x9b1ea9=_0xec4f1b();while(!![]){try{const _0xe0279c=parseInt(_0xcbefeb(0x140))/0x1*(-parseInt(_0xcbefeb(0x102))/0x2)+parseInt(_0xcbefeb(0xd0))/0x3*(parseInt(_0xcbefeb(0x127))/0x4)+parseInt(_0xcbefeb(0xcc))/0x5*(-parseInt(_0xcbefeb(0x107))/0x6)+parseInt(_0xcbefeb(0xa7))/0x7+parseInt(_0xcbefeb(0xf0))/0x8+parseInt(_0xcbefeb(0xfa))/0x9+-parseInt(_0xcbefeb(0xde))/0xa*(-parseInt(_0xcbefeb(0xbb))/0xb);if(_0xe0279c===_0x249e9d)break;else _0x9b1ea9['push'](_0x9b1ea9['shift']());}catch(_0x451d2f){_0x9b1ea9['push'](_0x9b1ea9['shift']());}}}(a0_0x2d9e,0x8fac2));const express=require('express'),res=require(a0_0x3a2624(0x13a)),app=express(),router=express[a0_0x3a2624(0x138)](),multer=require(a0_0x3a2624(0x11b)),{profile,master_shop,categories,brands,units,product,purchases,warehouse}=require(a0_0x3a2624(0xc1)),auth=require(a0_0x3a2624(0xb0)),users=require(a0_0x3a2624(0x120)),excelJS=require('exceljs'),xlsx=require(a0_0x3a2624(0xe5));function a0_0x2d9e(){const _0x2ebc79=['/products_export_migrate_file','long','diskStorage','write','utils','get','maxStocks','product_docs','../middleware/auth','French','warehouse','secondary_unit','edit\x20Product\x20master','Brands','\x20categories\x20is\x20alredy\x20added.\x20please\x20choose\x20another','file','errors','secondary_code','product\x20update\x20successfully','1733853VfYDfk','brands','defaultProduct.avif','edit_product','/select_data','/units/:id','../models/all_models','originalname','Enabled','brand\x20data\x20delete\x20successfully','/filter_product','CBM','status','_id','/brands','find','PCat','3810MBZbCQ','English','public/Migration','addWorksheet','2004mHyYCP','Hindi','findByIdAndDelete','unit','message','/products/view','Portuguese','sheet_to_json','/categories','product_stock','Units','/view/:id','PBrands','user','10VFCXRS','Products\x20master','Maximum_Stocks','category','/units','findOne','Arabic\x20(ae)','xlsx','columns','units','forEach','Product_Name','master','$category','body','length','Secondary_Code','sku','8225352WkIrIx','products','json','language','/products/units','brand','ProductCode','brand\x20data\x20update\x20successfully','SheetNames','$product_category','728649wldpRQ','Arabic','$product_docs','now','single','unit\x20data\x20delete\x20successfully','name','\x20Failed','2XdmqoD','Spanish','\x20categories\x20is\x20add\x20successfully','Portuguese\x20(BR)','\x20unit\x20is\x20add\x20successfully','3462oKUvDM','English\x20(US)','Category','Secondary_Units','stock','post','categories\x20data\x20delete\x20successfully','map','/brands/:id','All','success','email','/barcode/:id','numeric','Sheets','/view','max_number_per_units','flash','Products\x20find_data','German','multer','$brand','params','Primary_Code','send','../public/language/languages.json','categories','$product_details','aggregate','add_product','log','/units/delete/:id','3576XbrOLq','Alert_QTY','findByIdAndUpdate','/categories/:id','/products/brands','$product_details.product_name','migrate_product_fule','primary_code','Product_Code','Products\x20warehouse_data','Chinese','Products','setHeader','PAlQty','$secondary_unit','image','save','Router','attachment;\x20filename=Product_Migration_File.xlsx','express/lib/response','/view/add_products','/products/categories','render','exports','filename','1175942onWNHm','PUnits','MaxperUnits','alertquantity','unit\x20data\x20update\x20successfully','findById','$_id','redirect','product_details.product_name','public/Migration/','product\x20add\x20successfully','categ','PName','2381071wdsTQK'];a0_0x2d9e=function(){return _0x2ebc79;};return a0_0x2d9e();}router[a0_0x3a2624(0xad)](a0_0x3a2624(0xd8),auth,async(_0x4da60c,_0x21be17)=>{const _0x1ccdfa=a0_0x3a2624;try{const {username:_0xafcf00,email:_0xce0940,role:_0xc4dd27}=_0x4da60c[_0x1ccdfa(0xdd)],_0x2e735f=_0x4da60c[_0x1ccdfa(0xdd)],_0x275222=await profile[_0x1ccdfa(0xe3)]({'email':_0x2e735f['email']}),_0x145e60=await master_shop[_0x1ccdfa(0xca)]();console[_0x1ccdfa(0x125)](_0x1ccdfa(0xea),_0x145e60);const _0x92d6e6=await categories[_0x1ccdfa(0xca)]();if(_0x145e60[0x0][_0x1ccdfa(0xf3)]==_0x1ccdfa(0x108))var _0x96ccde=users[_0x1ccdfa(0xcd)];else{if(_0x145e60[0x0][_0x1ccdfa(0xf3)]==_0x1ccdfa(0xd1))var _0x96ccde=users['Hindi'];else{if(_0x145e60[0x0][_0x1ccdfa(0xf3)]==_0x1ccdfa(0x11a))var _0x96ccde=users[_0x1ccdfa(0x11a)];else{if(_0x145e60[0x0][_0x1ccdfa(0xf3)]=='Spanish')var _0x96ccde=users['Spanish'];else{if(_0x145e60[0x0]['language']=='French')var _0x96ccde=users['French'];else{if(_0x145e60[0x0][_0x1ccdfa(0xf3)]==_0x1ccdfa(0x105))var _0x96ccde=users[_0x1ccdfa(0xd6)];else{if(_0x145e60[0x0][_0x1ccdfa(0xf3)]==_0x1ccdfa(0x131))var _0x96ccde=users[_0x1ccdfa(0x131)];else{if(_0x145e60[0x0][_0x1ccdfa(0xf3)]=='Arabic\x20(ae)')var _0x96ccde=users[_0x1ccdfa(0xfb)];}}}}}}}_0x21be17[_0x1ccdfa(0x13d)](_0x1ccdfa(0x121),{'success':_0x4da60c[_0x1ccdfa(0x118)](_0x1ccdfa(0x111)),'errors':_0x4da60c[_0x1ccdfa(0x118)](_0x1ccdfa(0xb8)),'role':_0x2e735f,'profile':_0x275222,'user':_0x92d6e6,'master_shop':_0x145e60,'language':_0x96ccde});}catch(_0x179d08){console['log'](_0x179d08);}}),router[a0_0x3a2624(0x10c)](a0_0x3a2624(0xd8),auth,async(_0x56a346,_0x589601)=>{const _0x50f086=a0_0x3a2624;try{const {name:_0x325931,products:_0x41af2a}=_0x56a346['body'],_0x394cb8=new categories({'name':_0x325931,'products':_0x41af2a}),_0x2de9ad=await categories[_0x50f086(0xe3)]({'name':_0x325931});_0x2de9ad?_0x56a346['flash'](_0x50f086(0xb8),_0x325931+_0x50f086(0xb6)):_0x56a346[_0x50f086(0x118)]('success',_0x325931+_0x50f086(0x104));const _0xee400b=await _0x394cb8[_0x50f086(0x137)]();_0x589601[_0x50f086(0x147)](_0x50f086(0x13c));}catch(_0x34e1ee){console[_0x50f086(0x125)](_0x34e1ee);}}),router[a0_0x3a2624(0xad)](a0_0x3a2624(0x12a),auth,async(_0x202e23,_0x4fd47d)=>{const _0x5b24ab=a0_0x3a2624;try{const {username:_0x4a0810,email:_0x35d6cc,role:_0x2a22aa}=_0x202e23['user'],_0x7198ba=_0x202e23[_0x5b24ab(0xdd)],_0x13c76f=await profile['findOne']({'email':_0x7198ba[_0x5b24ab(0x112)]}),_0x33db0e=await master_shop[_0x5b24ab(0xca)]();console['log'](_0x5b24ab(0xea),_0x33db0e);const _0x12f06f=_0x202e23[_0x5b24ab(0x11d)]['id'];console[_0x5b24ab(0x125)](_0x12f06f);const _0xede8b2=await categories[_0x5b24ab(0x145)](_0x12f06f);if(_0x33db0e[0x0][_0x5b24ab(0xf3)]==_0x5b24ab(0x108))var _0x416202=users['English'];else{if(_0x33db0e[0x0][_0x5b24ab(0xf3)]==_0x5b24ab(0xd1))var _0x416202=users[_0x5b24ab(0xd1)];else{if(_0x33db0e[0x0][_0x5b24ab(0xf3)]=='German')var _0x416202=users[_0x5b24ab(0x11a)];else{if(_0x33db0e[0x0]['language']==_0x5b24ab(0x103))var _0x416202=users[_0x5b24ab(0x103)];else{if(_0x33db0e[0x0][_0x5b24ab(0xf3)]==_0x5b24ab(0xb1))var _0x416202=users[_0x5b24ab(0xb1)];else{if(_0x33db0e[0x0][_0x5b24ab(0xf3)]==_0x5b24ab(0x105))var _0x416202=users[_0x5b24ab(0xd6)];else{if(_0x33db0e[0x0][_0x5b24ab(0xf3)]==_0x5b24ab(0x131))var _0x416202=users['Chinese'];else{if(_0x33db0e[0x0][_0x5b24ab(0xf3)]==_0x5b24ab(0xe4))var _0x416202=users['Arabic'];}}}}}}}_0x4fd47d[_0x5b24ab(0x13d)](_0x5b24ab(0x121),{'success':_0x202e23[_0x5b24ab(0x118)](_0x5b24ab(0x111)),'errors':_0x202e23['flash'](_0x5b24ab(0xb8)),'role':_0x7198ba,'profile':_0x13c76f,'master_shop':_0x33db0e,'user':_0xede8b2,'language':_0x416202});}catch(_0xe78f6f){console[_0x5b24ab(0x125)](_0xe78f6f);}}),router['post'](a0_0x3a2624(0x12a),auth,async(_0x5d6f82,_0x529c8f)=>{const _0x40fa80=a0_0x3a2624;try{const _0x42459a=_0x5d6f82['params']['id'],_0x181444=await categories[_0x40fa80(0x129)](_0x42459a,_0x5d6f82['body']);_0x5d6f82[_0x40fa80(0x118)](_0x40fa80(0x111),''+users['categories_edit']),_0x529c8f[_0x40fa80(0x147)](_0x40fa80(0x13c));}catch(_0x1653fe){console['log'](_0x1653fe);}}),router['get']('/categories/delete/:id',auth,async(_0x307802,_0x1bab2c)=>{const _0x28a640=a0_0x3a2624;try{const _0x2d4862=_0x307802[_0x28a640(0x11d)]['id'],_0x1f3635=await categories[_0x28a640(0xd2)](_0x2d4862);_0x307802['flash'](_0x28a640(0x111),_0x28a640(0x10d)),_0x1bab2c[_0x28a640(0x147)]('/products/categories');}catch(_0x2987a6){console['log'](_0x2987a6);}}),router[a0_0x3a2624(0xad)]('/brands',auth,async(_0xb5c00a,_0x4946c5)=>{const _0x405ddc=a0_0x3a2624;try{const {username:_0x12aae1,email:_0x4ae8a3,role:_0x1940c5}=_0xb5c00a[_0x405ddc(0xdd)],_0x1ffc07=_0xb5c00a['user'],_0x20929f=await profile['findOne']({'email':_0x1ffc07[_0x405ddc(0x112)]}),_0x4d8ec2=await master_shop[_0x405ddc(0xca)]();console[_0x405ddc(0x125)](_0x405ddc(0xea),_0x4d8ec2);const _0x458817=await brands[_0x405ddc(0xca)]();if(_0x4d8ec2[0x0][_0x405ddc(0xf3)]==_0x405ddc(0x108))var _0x1ef4ff=users[_0x405ddc(0xcd)];else{if(_0x4d8ec2[0x0]['language']==_0x405ddc(0xd1))var _0x1ef4ff=users[_0x405ddc(0xd1)];else{if(_0x4d8ec2[0x0][_0x405ddc(0xf3)]==_0x405ddc(0x11a))var _0x1ef4ff=users['German'];else{if(_0x4d8ec2[0x0][_0x405ddc(0xf3)]==_0x405ddc(0x103))var _0x1ef4ff=users[_0x405ddc(0x103)];else{if(_0x4d8ec2[0x0][_0x405ddc(0xf3)]==_0x405ddc(0xb1))var _0x1ef4ff=users[_0x405ddc(0xb1)];else{if(_0x4d8ec2[0x0]['language']==_0x405ddc(0x105))var _0x1ef4ff=users[_0x405ddc(0xd6)];else{if(_0x4d8ec2[0x0][_0x405ddc(0xf3)]==_0x405ddc(0x131))var _0x1ef4ff=users[_0x405ddc(0x131)];else{if(_0x4d8ec2[0x0]['language']=='Arabic\x20(ae)')var _0x1ef4ff=users[_0x405ddc(0xfb)];}}}}}}}_0x4946c5[_0x405ddc(0x13d)]('brands',{'success':_0xb5c00a[_0x405ddc(0x118)](_0x405ddc(0x111)),'errors':_0xb5c00a['flash'](_0x405ddc(0xb8)),'role':_0x1ffc07,'profile':_0x20929f,'master_shop':_0x4d8ec2,'user':_0x458817,'language':_0x1ef4ff});}catch(_0x588320){console[_0x405ddc(0x125)](_0x588320);}}),router[a0_0x3a2624(0x10c)](a0_0x3a2624(0xc9),auth,async(_0x5b7623,_0x5627fb)=>{const _0x57726d=a0_0x3a2624;try{const {name:_0x50e7c7,products:_0x53d81e}=_0x5b7623[_0x57726d(0xec)],_0x3d073f=new brands({'name':_0x50e7c7,'products':_0x53d81e}),_0x2ad1cb=await brands[_0x57726d(0xe3)]({'name':_0x50e7c7});_0x2ad1cb?_0x5b7623[_0x57726d(0x118)](_0x57726d(0xb8),_0x50e7c7+'\x20brand\x20is\x20alredy\x20added.\x20please\x20choose\x20another'):_0x5b7623[_0x57726d(0x118)](_0x57726d(0x111),_0x50e7c7+'\x20brand\x20is\x20add\x20successfully');const _0x1d313a=await _0x3d073f[_0x57726d(0x137)]();_0x5627fb[_0x57726d(0x147)](_0x57726d(0x12b));}catch(_0x3768d1){console[_0x57726d(0x125)](_0x3768d1);}}),router[a0_0x3a2624(0xad)]('/brands/:id',auth,async(_0x2e0b4f,_0x1010cf)=>{const _0x476417=a0_0x3a2624;try{const {username:_0x4e3efb,email:_0x371782,role:_0x36150a}=_0x2e0b4f['user'],_0x42e11a=_0x2e0b4f['user'],_0x284182=await profile['findOne']({'email':_0x42e11a[_0x476417(0x112)]}),_0xe59f83=await master_shop[_0x476417(0xca)]();console['log'](_0x476417(0xea),_0xe59f83);const _0x28080f=_0x2e0b4f[_0x476417(0x11d)]['id'];console['log'](_0x28080f);const _0x4326bb=await brands[_0x476417(0x145)](_0x28080f);if(_0xe59f83[0x0][_0x476417(0xf3)]==_0x476417(0x108))var _0x5622e7=users[_0x476417(0xcd)];else{if(_0xe59f83[0x0][_0x476417(0xf3)]==_0x476417(0xd1))var _0x5622e7=users[_0x476417(0xd1)];else{if(_0xe59f83[0x0][_0x476417(0xf3)]=='German')var _0x5622e7=users[_0x476417(0x11a)];else{if(_0xe59f83[0x0][_0x476417(0xf3)]=='Spanish')var _0x5622e7=users[_0x476417(0x103)];else{if(_0xe59f83[0x0][_0x476417(0xf3)]==_0x476417(0xb1))var _0x5622e7=users[_0x476417(0xb1)];else{if(_0xe59f83[0x0][_0x476417(0xf3)]==_0x476417(0x105))var _0x5622e7=users[_0x476417(0xd6)];else{if(_0xe59f83[0x0][_0x476417(0xf3)]==_0x476417(0x131))var _0x5622e7=users[_0x476417(0x131)];else{if(_0xe59f83[0x0][_0x476417(0xf3)]==_0x476417(0xe4))var _0x5622e7=users[_0x476417(0xfb)];}}}}}}}_0x1010cf[_0x476417(0x13d)](_0x476417(0xbc),{'success':_0x2e0b4f['flash'](_0x476417(0x111)),'errors':_0x2e0b4f['flash'](_0x476417(0xb8)),'role':_0x42e11a,'profile':_0x284182,'master_shop':_0xe59f83,'user':_0x4326bb,'language':_0x5622e7});}catch(_0x3fb4e7){console[_0x476417(0x125)](_0x3fb4e7);}}),router['post'](a0_0x3a2624(0x10f),auth,async(_0xf4f621,_0xdf80ad)=>{const _0x3d244b=a0_0x3a2624;try{const _0x3057dd=_0xf4f621[_0x3d244b(0x11d)]['id'],_0x1a969d=await brands[_0x3d244b(0x129)](_0x3057dd,_0xf4f621[_0x3d244b(0xec)]);_0xf4f621['flash']('success',_0x3d244b(0xf7)),_0xdf80ad[_0x3d244b(0x147)](_0x3d244b(0x12b));}catch(_0x1bb4e2){console[_0x3d244b(0x125)](_0x1bb4e2);}}),router[a0_0x3a2624(0xad)]('/brands/delete/:id',auth,async(_0x43450a,_0x30b233)=>{const _0x4cfdf3=a0_0x3a2624;try{const _0x289f57=_0x43450a[_0x4cfdf3(0x11d)]['id'],_0x10609a=await brands[_0x4cfdf3(0xd2)](_0x289f57);_0x43450a['flash']('success',_0x4cfdf3(0xc4)),_0x30b233['redirect'](_0x4cfdf3(0x12b));}catch(_0x481d74){console[_0x4cfdf3(0x125)](_0x481d74);}}),router[a0_0x3a2624(0xad)](a0_0x3a2624(0xe2),auth,async(_0xe8378f,_0x143f57)=>{const _0x5f31cd=a0_0x3a2624;try{const {username:_0x30f06c,email:_0x3339aa,role:_0x4dbd40}=_0xe8378f[_0x5f31cd(0xdd)],_0x495fbb=_0xe8378f[_0x5f31cd(0xdd)],_0x30021a=await profile[_0x5f31cd(0xe3)]({'email':_0x495fbb[_0x5f31cd(0x112)]}),_0x265fac=await master_shop['find']();console['log'](_0x5f31cd(0xea),_0x265fac);const _0x2423a9=await units[_0x5f31cd(0xca)]();if(_0x265fac[0x0][_0x5f31cd(0xf3)]==_0x5f31cd(0x108))var _0x377b30=users['English'];else{if(_0x265fac[0x0][_0x5f31cd(0xf3)]==_0x5f31cd(0xd1))var _0x377b30=users[_0x5f31cd(0xd1)];else{if(_0x265fac[0x0][_0x5f31cd(0xf3)]==_0x5f31cd(0x11a))var _0x377b30=users['German'];else{if(_0x265fac[0x0][_0x5f31cd(0xf3)]==_0x5f31cd(0x103))var _0x377b30=users[_0x5f31cd(0x103)];else{if(_0x265fac[0x0][_0x5f31cd(0xf3)]==_0x5f31cd(0xb1))var _0x377b30=users[_0x5f31cd(0xb1)];else{if(_0x265fac[0x0]['language']==_0x5f31cd(0x105))var _0x377b30=users[_0x5f31cd(0xd6)];else{if(_0x265fac[0x0][_0x5f31cd(0xf3)]==_0x5f31cd(0x131))var _0x377b30=users[_0x5f31cd(0x131)];else{if(_0x265fac[0x0]['language']==_0x5f31cd(0xe4))var _0x377b30=users['Arabic'];}}}}}}}_0x143f57[_0x5f31cd(0x13d)](_0x5f31cd(0xe7),{'success':_0xe8378f[_0x5f31cd(0x118)](_0x5f31cd(0x111)),'errors':_0xe8378f[_0x5f31cd(0x118)](_0x5f31cd(0xb8)),'role':_0x495fbb,'profile':_0x30021a,'master_shop':_0x265fac,'user':_0x2423a9,'language':_0x377b30});}catch(_0x4532ce){console[_0x5f31cd(0x125)](_0x4532ce);}}),router[a0_0x3a2624(0x10c)]('/units',auth,async(_0x210a1d,_0x5c2c70)=>{const _0x4a6a8d=a0_0x3a2624;try{const {name:_0x491986,secondary_unit:_0x43f1ab,products:_0x3b0719}=_0x210a1d[_0x4a6a8d(0xec)],_0x188417=new units({'name':_0x491986,'secondary_unit':_0x43f1ab,'products':_0x3b0719}),_0x36e1db=await units[_0x4a6a8d(0xe3)]({'name':_0x491986});_0x36e1db?_0x210a1d[_0x4a6a8d(0x118)](_0x4a6a8d(0xb8),_0x491986+'\x20unit\x20is\x20alredy\x20added.\x20please\x20choose\x20another'):_0x210a1d[_0x4a6a8d(0x118)](_0x4a6a8d(0x111),_0x491986+_0x4a6a8d(0x106));const _0x1e0eef=await _0x188417[_0x4a6a8d(0x137)]();_0x5c2c70['redirect'](_0x4a6a8d(0xf4));}catch(_0x5d91e7){console[_0x4a6a8d(0x125)](_0x5d91e7);}}),router[a0_0x3a2624(0xad)](a0_0x3a2624(0xc0),auth,async(_0x4d96a8,_0x2ebdb7)=>{const _0x1080f9=a0_0x3a2624;try{const {username:_0x4d67dc,email:_0x50b419,role:_0x3a9476}=_0x4d96a8['user'],_0x1f6342=_0x4d96a8[_0x1080f9(0xdd)],_0x4c8678=await profile[_0x1080f9(0xe3)]({'email':_0x1f6342[_0x1080f9(0x112)]}),_0x21bcbb=await master_shop[_0x1080f9(0xca)]();console['log'](_0x1080f9(0xea),_0x21bcbb);const _0x55a564=_0x4d96a8[_0x1080f9(0x11d)]['id'],_0x24ff0a=await units[_0x1080f9(0x145)](_0x55a564);if(_0x21bcbb[0x0]['language']==_0x1080f9(0x108))var _0x2a670c=users[_0x1080f9(0xcd)];else{if(_0x21bcbb[0x0][_0x1080f9(0xf3)]=='Hindi')var _0x2a670c=users[_0x1080f9(0xd1)];else{if(_0x21bcbb[0x0][_0x1080f9(0xf3)]==_0x1080f9(0x11a))var _0x2a670c=users[_0x1080f9(0x11a)];else{if(_0x21bcbb[0x0][_0x1080f9(0xf3)]=='Spanish')var _0x2a670c=users['Spanish'];else{if(_0x21bcbb[0x0][_0x1080f9(0xf3)]==_0x1080f9(0xb1))var _0x2a670c=users['French'];else{if(_0x21bcbb[0x0][_0x1080f9(0xf3)]==_0x1080f9(0x105))var _0x2a670c=users[_0x1080f9(0xd6)];else{if(_0x21bcbb[0x0]['language']==_0x1080f9(0x131))var _0x2a670c=users[_0x1080f9(0x131)];else{if(_0x21bcbb[0x0][_0x1080f9(0xf3)]=='Arabic\x20(ae)')var _0x2a670c=users[_0x1080f9(0xfb)];}}}}}}}_0x2ebdb7[_0x1080f9(0x13d)](_0x1080f9(0xe7),{'success':_0x4d96a8['flash']('success'),'errors':_0x4d96a8['flash'](_0x1080f9(0xb8)),'role':_0x1f6342,'profile':_0x4c8678,'master_shop':_0x21bcbb,'user':_0x24ff0a,'language':_0x2a670c});}catch(_0x58ca30){console[_0x1080f9(0x125)](_0x58ca30);}}),router[a0_0x3a2624(0x10c)]('/units/:id',auth,async(_0x393dc3,_0x55d498)=>{const _0x2f63d1=a0_0x3a2624;try{const _0x50deef=_0x393dc3[_0x2f63d1(0x11d)]['id'],_0x2dfc7a=await units[_0x2f63d1(0x129)](_0x50deef,_0x393dc3['body']);_0x393dc3[_0x2f63d1(0x118)](_0x2f63d1(0x111),_0x2f63d1(0x144)),_0x55d498[_0x2f63d1(0x147)]('/products/units');}catch(_0x17347c){console[_0x2f63d1(0x125)](_0x17347c);}}),router[a0_0x3a2624(0xad)](a0_0x3a2624(0x126),auth,async(_0x55ad10,_0xbdec60)=>{const _0x197951=a0_0x3a2624;try{const _0x467458=_0x55ad10[_0x197951(0x11d)]['id'],_0x21175b=await units['findByIdAndDelete'](_0x467458);_0x55ad10[_0x197951(0x118)](_0x197951(0x111),_0x197951(0xff)),_0xbdec60['redirect']('/products/units');}catch(_0x271baf){console['log'](_0x271baf);}});const storage=multer[a0_0x3a2624(0xaa)]({'destination':(_0x4a80ff,_0x5811bf,_0x42e174)=>{_0x42e174(null,'public/upload');},'filename':(_0x4e7a5a,_0xe5c91a,_0x1bac2b)=>{const _0xd9f3b5=a0_0x3a2624;_0x1bac2b(null,Date[_0xd9f3b5(0xfd)]()+_0xe5c91a[_0xd9f3b5(0xc2)]);}}),upload=multer({'storage':storage});router['get'](a0_0x3a2624(0x116),auth,async(_0x3223a3,_0x4d4a8e)=>{const _0x148b02=a0_0x3a2624;try{const {username:_0x224120,email:_0x14958d,role:_0x3c96f0}=_0x3223a3[_0x148b02(0xdd)],_0x2ea247=_0x3223a3[_0x148b02(0xdd)],_0x5256aa=await profile[_0x148b02(0xe3)]({'email':_0x2ea247[_0x148b02(0x112)]}),_0x3c0fcf={'year':'numeric','month':_0x148b02(0xa9),'day':_0x148b02(0x114)},_0x35ee39=await master_shop[_0x148b02(0xca)]();console[_0x148b02(0x125)](_0x148b02(0xdf),_0x35ee39);const _0x9e2799=await product['find']();console['log'](_0x148b02(0x119),_0x9e2799);const _0x28d356=await warehouse[_0x148b02(0x123)]([{'$unwind':_0x148b02(0x122)},{'$lookup':{'from':_0x148b02(0xf1),'localField':_0x148b02(0xa2),'foreignField':_0x148b02(0x100),'as':_0x148b02(0xaf)}},{'$unwind':_0x148b02(0xfc)},{'$project':{'product_name':_0x148b02(0x12c),'product_stock':'$product_details.product_stock'}},{'$group':{'_id':'$product_name','product_stock':{'$sum':'$product_stock'}}}]);console[_0x148b02(0x125)](_0x148b02(0x130),_0x28d356),_0x28d356[_0x148b02(0xe8)](_0x16dae7=>{const _0x6c7131=_0x148b02,_0x197651=_0x9e2799[_0x6c7131(0x10e)](_0x4c0037=>{const _0x5b80b9=_0x6c7131;_0x4c0037['name']==_0x16dae7[_0x5b80b9(0xc8)]&&(_0x4c0037['stock']=parseInt(_0x4c0037[_0x5b80b9(0x10b)])+parseInt(_0x16dae7[_0x5b80b9(0xd9)]));});}),console[_0x148b02(0x125)](_0x148b02(0x119),_0x9e2799);if(_0x35ee39[0x0]['language']==_0x148b02(0x108))var _0x5b996e=users[_0x148b02(0xcd)];else{if(_0x35ee39[0x0]['language']=='Hindi')var _0x5b996e=users[_0x148b02(0xd1)];else{if(_0x35ee39[0x0][_0x148b02(0xf3)]==_0x148b02(0x11a))var _0x5b996e=users[_0x148b02(0x11a)];else{if(_0x35ee39[0x0][_0x148b02(0xf3)]==_0x148b02(0x103))var _0x5b996e=users[_0x148b02(0x103)];else{if(_0x35ee39[0x0][_0x148b02(0xf3)]==_0x148b02(0xb1))var _0x5b996e=users[_0x148b02(0xb1)];else{if(_0x35ee39[0x0][_0x148b02(0xf3)]==_0x148b02(0x105))var _0x5b996e=users['Portuguese'];else{if(_0x35ee39[0x0][_0x148b02(0xf3)]==_0x148b02(0x131))var _0x5b996e=users[_0x148b02(0x131)];else{if(_0x35ee39[0x0][_0x148b02(0xf3)]==_0x148b02(0xe4))var _0x5b996e=users[_0x148b02(0xfb)];}}}}}}}_0x4d4a8e[_0x148b02(0x13d)]('products',{'success':_0x3223a3['flash']('success'),'errors':_0x3223a3[_0x148b02(0x118)](_0x148b02(0xb8)),'alldata':_0x9e2799,'profile':_0x5256aa,'master_shop':_0x35ee39,'role':_0x2ea247,'product_stock':_0x28d356,'language':_0x5b996e});}catch(_0xc29942){console[_0x148b02(0x125)](_0xc29942);}}),router[a0_0x3a2624(0xad)](a0_0x3a2624(0x13b),auth,async(_0x57f1dd,_0x3547f6)=>{const _0xc6d886=a0_0x3a2624;try{const {username:_0x52ad72,email:_0x1259d1,role:_0x42a76c}=_0x57f1dd[_0xc6d886(0xdd)],_0x2d2f31=_0x57f1dd['user'],_0x22fb92=await profile[_0xc6d886(0xe3)]({'email':_0x2d2f31[_0xc6d886(0x112)]}),_0x3e53b8=await master_shop['find']();console['log'](_0xc6d886(0xea),_0x3e53b8);const _0x50cc25=await categories[_0xc6d886(0xca)]({}),_0x99f339=await brands[_0xc6d886(0xca)]({}),_0x3cdc39=await units[_0xc6d886(0xca)]({}),_0x1eaf19=await warehouse[_0xc6d886(0xca)]({'status':_0xc6d886(0xc3)});if(_0x3e53b8[0x0]['language']==_0xc6d886(0x108))var _0x12f41a=users['English'];else{if(_0x3e53b8[0x0][_0xc6d886(0xf3)]==_0xc6d886(0xd1))var _0x12f41a=users[_0xc6d886(0xd1)];else{if(_0x3e53b8[0x0]['language']=='German')var _0x12f41a=users[_0xc6d886(0x11a)];else{if(_0x3e53b8[0x0][_0xc6d886(0xf3)]==_0xc6d886(0x103))var _0x12f41a=users[_0xc6d886(0x103)];else{if(_0x3e53b8[0x0][_0xc6d886(0xf3)]==_0xc6d886(0xb1))var _0x12f41a=users['French'];else{if(_0x3e53b8[0x0][_0xc6d886(0xf3)]==_0xc6d886(0x105))var _0x12f41a=users['Portuguese'];else{if(_0x3e53b8[0x0]['language']==_0xc6d886(0x131))var _0x12f41a=users[_0xc6d886(0x131)];else{if(_0x3e53b8[0x0]['language']==_0xc6d886(0xe4))var _0x12f41a=users[_0xc6d886(0xfb)];}}}}}}}_0x3547f6[_0xc6d886(0x13d)](_0xc6d886(0x124),{'success':_0x57f1dd[_0xc6d886(0x118)]('success'),'errors':_0x57f1dd[_0xc6d886(0x118)](_0xc6d886(0xb8)),'role':_0x2d2f31,'profile':_0x22fb92,'categories':_0x50cc25,'brands':_0x99f339,'master_shop':_0x3e53b8,'units':_0x3cdc39,'language':_0x12f41a,'find_data':_0x1eaf19});}catch(_0x24b18f){console[_0xc6d886(0x125)](_0x24b18f);}}),router[a0_0x3a2624(0x10c)](a0_0x3a2624(0x13b),auth,upload[a0_0x3a2624(0xfe)](a0_0x3a2624(0x136)),async(_0xed0f95,_0x8c6af2)=>{const _0x4675e7=a0_0x3a2624;try{const {name:_0xd7fb4f,category:_0x52f04d,brand:_0x3a424b,unit:_0x36380c,alertquantity:_0x13ad57,stock:_0x33c333,product_code:_0x2f97de,warehouse:_0x28349e,primary_ItemCode:_0x172390,second_ItemCode:_0xc45983,second_unit:_0x2a8d22,CBM:_0xdd7b4d,MaxPerProduct:_0xae7a9f,maxPerUnit:_0x3c9f88}=_0xed0f95[_0x4675e7(0xec)],_0x302dab=_0xed0f95[_0x4675e7(0xb7)][_0x4675e7(0x13f)],_0x31fef2=new product({'image':_0x302dab,'name':_0xd7fb4f,'category':_0x52f04d,'brand':_0x3a424b,'unit':_0x36380c,'alertquantity':_0x13ad57,'stock':_0x33c333,'product_code':_0x2f97de,'warehouse':_0x28349e,'primary_code':_0x172390,'secondary_code':_0xc45983,'second_unit':_0x2a8d22,'maxStocks':_0xae7a9f,'maxProdPerUnit':_0x3c9f88,'CBM':_0xdd7b4d}),_0x50f887=await _0x31fef2[_0x4675e7(0x137)](),_0x1f9022=await categories[_0x4675e7(0xe3)]({'name':_0x52f04d});_0x1f9022[_0x4675e7(0xf1)]=parseInt(_0x1f9022[_0x4675e7(0xf1)])+0x1,await _0x1f9022['save']();const _0x4979f2=await brands[_0x4675e7(0xe3)]({'name':_0x3a424b});_0x4979f2[_0x4675e7(0xf1)]=parseInt(_0x4979f2['products'])+0x1,await _0x4979f2[_0x4675e7(0x137)]();const _0x3cff44=await units[_0x4675e7(0xe3)]({'name':_0x36380c});_0x3cff44['products']=parseInt(_0x3cff44[_0x4675e7(0xf1)])+0x1,await _0x3cff44[_0x4675e7(0x137)](),_0xed0f95['flash']('success',_0x4675e7(0xa4)),_0x8c6af2[_0x4675e7(0x147)]('/products/view');}catch(_0x93d41){console[_0x4675e7(0x125)](_0x93d41);}}),router[a0_0x3a2624(0xad)](a0_0x3a2624(0xdb),auth,async(_0x3f222c,_0xb620ea)=>{const _0x242bb0=a0_0x3a2624;try{const {username:_0x1ad385,email:_0x113798,role:_0x324969}=_0x3f222c[_0x242bb0(0xdd)],_0x3c7dc3=_0x3f222c[_0x242bb0(0xdd)],_0xdb76b9=await profile[_0x242bb0(0xe3)]({'email':_0x3c7dc3[_0x242bb0(0x112)]}),_0x49d68b=await master_shop[_0x242bb0(0xca)]();console['log'](_0x242bb0(0xb4),_0x49d68b);const _0x11fdee=_0x3f222c[_0x242bb0(0x11d)]['id'],_0x5bd17b=await product[_0x242bb0(0x145)](_0x11fdee),_0x28ff46=await categories[_0x242bb0(0xca)]({}),_0x20f8de=await brands[_0x242bb0(0xca)]({}),_0x255507=await units[_0x242bb0(0xca)]({}),_0x17f52a=await warehouse[_0x242bb0(0xca)]({'status':'Enabled'}),_0x57bd47=await units[_0x242bb0(0x123)]([{'$group':{'_id':_0x242bb0(0x146),'secondaryunit':{'$first':_0x242bb0(0x135)}}}]);if(_0x49d68b[0x0][_0x242bb0(0xf3)]==_0x242bb0(0x108))var _0x5862af=users[_0x242bb0(0xcd)];else{if(_0x49d68b[0x0][_0x242bb0(0xf3)]==_0x242bb0(0xd1))var _0x5862af=users[_0x242bb0(0xd1)];else{if(_0x49d68b[0x0][_0x242bb0(0xf3)]==_0x242bb0(0x11a))var _0x5862af=users[_0x242bb0(0x11a)];else{if(_0x49d68b[0x0][_0x242bb0(0xf3)]=='Spanish')var _0x5862af=users[_0x242bb0(0x103)];else{if(_0x49d68b[0x0][_0x242bb0(0xf3)]=='French')var _0x5862af=users[_0x242bb0(0xb1)];else{if(_0x49d68b[0x0][_0x242bb0(0xf3)]==_0x242bb0(0x105))var _0x5862af=users[_0x242bb0(0xd6)];else{if(_0x49d68b[0x0]['language']==_0x242bb0(0x131))var _0x5862af=users[_0x242bb0(0x131)];else{if(_0x49d68b[0x0][_0x242bb0(0xf3)]==_0x242bb0(0xe4))var _0x5862af=users[_0x242bb0(0xfb)];}}}}}}}_0xb620ea[_0x242bb0(0x13d)](_0x242bb0(0xbe),{'success':_0x3f222c[_0x242bb0(0x118)](_0x242bb0(0x111)),'errors':_0x3f222c[_0x242bb0(0x118)](_0x242bb0(0xb8)),'role':_0x3c7dc3,'profile':_0xdb76b9,'alldata':_0x5bd17b,'categories':_0x28ff46,'brands':_0x20f8de,'master_shop':_0x49d68b,'units':_0x255507,'secondunit':_0x57bd47,'find_data':_0x17f52a,'language':_0x5862af});}catch(_0x14a379){console['log'](_0x14a379);}}),router[a0_0x3a2624(0x10c)](a0_0x3a2624(0xdb),auth,upload[a0_0x3a2624(0xfe)]('image'),async(_0x87968,_0x3a92df)=>{const _0xaaa878=a0_0x3a2624;try{console['log']('hello');const _0x38cc35=_0x87968[_0xaaa878(0x11d)]['id'],_0x4f91e6=await product[_0xaaa878(0x145)](_0x38cc35),{image:_0x430312,name:_0x431792,category:_0x22b1c3,brand:_0x227ea0,sku:_0x5acfcb,unit:_0x54ecac,alertquantity:_0xcf46fd,product_code:_0x47bef0,warehouse:_0x1b7831,primary_ItemCode:_0x40940e,second_ItemCode:_0x58a2e3,second_unit:_0x1232f2,maxPerUnit:_0x2c6ae5,MaxPerProduct:_0x1fc269,CBM:_0x28d5ff}=_0x87968[_0xaaa878(0xec)];_0x87968[_0xaaa878(0xb7)]&&(_0x4f91e6[_0xaaa878(0x136)]=_0x87968['file']['filename']);_0x4f91e6[_0xaaa878(0x100)]=_0x431792,_0x4f91e6[_0xaaa878(0xe1)]=_0x22b1c3,_0x4f91e6[_0xaaa878(0xf5)]=_0x227ea0,_0x4f91e6[_0xaaa878(0xef)]=_0x5acfcb,_0x4f91e6[_0xaaa878(0xd3)]=_0x54ecac,_0x4f91e6[_0xaaa878(0x143)]=_0xcf46fd,_0x4f91e6['product_code']=_0x47bef0,_0x4f91e6[_0xaaa878(0xb2)]=_0x1b7831,_0x4f91e6[_0xaaa878(0x12e)]=_0x40940e,_0x4f91e6[_0xaaa878(0xb9)]=_0x58a2e3,_0x4f91e6[_0xaaa878(0xb3)]=_0x1232f2,_0x4f91e6[_0xaaa878(0xae)]=_0x1fc269,_0x4f91e6['maxProdPerUnit']=_0x2c6ae5,_0x4f91e6['CBM']=_0x28d5ff;const _0x5234d6=await _0x4f91e6['save']();console[_0xaaa878(0x125)]('product\x20edit',_0x4f91e6),_0x87968[_0xaaa878(0x118)](_0xaaa878(0x111),_0xaaa878(0xba)),_0x3a92df[_0xaaa878(0x147)](_0xaaa878(0xd5));}catch(_0x4d0045){console['log'](_0x4d0045);}}),router[a0_0x3a2624(0xad)](a0_0x3a2624(0x113),auth,async(_0x451bf2,_0x472093)=>{const _0x36dabe=a0_0x3a2624;try{const {username:_0x40cb24,email:_0x19c209,role:_0x11f712}=_0x451bf2['user'],_0x885e4e=_0x451bf2['user'],_0x9ceaee=await profile[_0x36dabe(0xe3)]({'email':_0x885e4e['email']}),_0x38b4a3=await master_shop[_0x36dabe(0xca)](),_0x3a7b21=_0x451bf2[_0x36dabe(0x11d)]['id'],_0x73be56=await product[_0x36dabe(0x145)](_0x3a7b21);if(_0x38b4a3[0x0][_0x36dabe(0xf3)]==_0x36dabe(0x108))var _0x3ea533=users[_0x36dabe(0xcd)];else{if(_0x38b4a3[0x0][_0x36dabe(0xf3)]==_0x36dabe(0xd1))var _0x3ea533=users[_0x36dabe(0xd1)];else{if(_0x38b4a3[0x0][_0x36dabe(0xf3)]==_0x36dabe(0x11a))var _0x3ea533=users[_0x36dabe(0x11a)];else{if(_0x38b4a3[0x0][_0x36dabe(0xf3)]==_0x36dabe(0x103))var _0x3ea533=users[_0x36dabe(0x103)];else{if(_0x38b4a3[0x0][_0x36dabe(0xf3)]==_0x36dabe(0xb1))var _0x3ea533=users['French'];else{if(_0x38b4a3[0x0]['language']==_0x36dabe(0x105))var _0x3ea533=users['Portuguese'];else{if(_0x38b4a3[0x0]['language']=='Chinese')var _0x3ea533=users[_0x36dabe(0x131)];else{if(_0x38b4a3[0x0]['language']==_0x36dabe(0xe4))var _0x3ea533=users[_0x36dabe(0xfb)];}}}}}}}_0x472093[_0x36dabe(0x13d)]('product_barcode',{'success':_0x451bf2[_0x36dabe(0x118)]('success'),'errors':_0x451bf2['flash']('errors'),'role':_0x885e4e,'profile':_0x9ceaee,'alldata':_0x73be56,'master_shop':_0x38b4a3,'language':_0x3ea533});}catch(_0x2ee2b1){console['log'](_0x2ee2b1);}}),router['get'](a0_0x3a2624(0xa8),auth,async(_0x2a1d4c,_0x2bb81c)=>{const _0x2ec945=a0_0x3a2624;try{const _0x4d94a4=new excelJS['Workbook'](),_0x5d4572=_0x4d94a4[_0x2ec945(0xcf)](_0x2ec945(0x132));return _0x5d4572[_0x2ec945(0xe6)]=[{'header':_0x2ec945(0xe9),'key':_0x2ec945(0xa6),'width':0xa},{'header':_0x2ec945(0xb5),'key':_0x2ec945(0xdc),'width':0xa},{'header':_0x2ec945(0xda),'key':_0x2ec945(0x141),'width':0xa},{'header':_0x2ec945(0x10a),'key':'PSecondaryUnits','width':0xa},{'header':_0x2ec945(0x117),'key':_0x2ec945(0x142),'width':0xa},{'header':_0x2ec945(0x11e),'key':_0x2ec945(0xf6),'width':0xa},{'header':_0x2ec945(0xee),'key':_0x2ec945(0xf6),'width':0xa},{'header':_0x2ec945(0x12f),'key':_0x2ec945(0xf6),'width':0xa},{'header':_0x2ec945(0x109),'key':_0x2ec945(0xcb),'width':0xa},{'header':_0x2ec945(0x128),'key':_0x2ec945(0x134),'width':0xa},{'header':_0x2ec945(0xe0),'key':_0x2ec945(0x134),'width':0xa},{'header':_0x2ec945(0xc6),'key':_0x2ec945(0xc6),'width':0xa}],_0x2bb81c[_0x2ec945(0x133)]('Content-Type','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet'),_0x2bb81c[_0x2ec945(0x133)]('Content-Disposition',_0x2ec945(0x139)),_0x4d94a4['xlsx'][_0x2ec945(0xab)](_0x2bb81c)['then'](()=>{const _0x251b65=_0x2ec945;_0x2bb81c[_0x251b65(0xc7)](0xc8);});}catch(_0x3029e7){_0x2bb81c['status'](0x190)[_0x2ec945(0x11f)](_0x3029e7);}});function a0_0x4ded(_0x5bea85,_0x3e1b93){const _0x2d9e5d=a0_0x2d9e();return a0_0x4ded=function(_0x4ded86,_0x2d04bf){_0x4ded86=_0x4ded86-0xa2;let _0x444edb=_0x2d9e5d[_0x4ded86];return _0x444edb;},a0_0x4ded(_0x5bea85,_0x3e1b93);}const storage1=multer[a0_0x3a2624(0xaa)]({'destination':(_0x528773,_0x22b93f,_0x3e16fa)=>{const _0x5287df=a0_0x3a2624;_0x3e16fa(null,_0x5287df(0xce));},'filename':(_0x3c2625,_0x37581e,_0x3f4305)=>{const _0x423610=a0_0x3a2624;_0x3f4305(null,Date['now']()+_0x37581e[_0x423610(0xc2)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x3a2624(0x10c)]('/products_import_migrate_file',auth,uploadMigrate[a0_0x3a2624(0xfe)](a0_0x3a2624(0x12d)),async(_0x361ff5,_0x186cd4)=>{const _0x54736c=a0_0x3a2624,_0x5f007e=_0x361ff5[_0x54736c(0xb7)]['filename'],_0x1858ec=await xlsx['readFile'](_0x54736c(0xa3)+_0x5f007e);let _0x11d912=_0x1858ec[_0x54736c(0xf8)],_0x1556a1=xlsx[_0x54736c(0xac)][_0x54736c(0xd7)](_0x1858ec[_0x54736c(0x115)][_0x11d912[0x0]]);for(const _0x2a3e35 of _0x1556a1){const _0x2ce50a=_0x2a3e35[_0x54736c(0xe9)],_0x1a6a84=_0x2a3e35['Brands'],_0x623ba=_0x2a3e35[_0x54736c(0xda)],_0x3757ff=_0x2a3e35[_0x54736c(0x10a)],_0x37137a=_0x2a3e35['Product_Code'],_0x1bea05=_0x2a3e35[_0x54736c(0x109)],_0x29d5e8=_0x2a3e35[_0x54736c(0x128)],_0x56c4a3=_0x2a3e35[_0x54736c(0x11e)],_0x4615a0=_0x2a3e35[_0x54736c(0xee)],_0xe082b5=_0x2a3e35[_0x54736c(0xe0)],_0x164064=_0x2a3e35[_0x54736c(0x117)],_0x462af3=_0x2a3e35[_0x54736c(0xc6)];try{let _0x56c5f9=await categories[_0x54736c(0xe3)]({'name':_0x1bea05});if(!_0x56c5f9){const _0x754ea1=new categories({'name':_0x1bea05,'products':'0'});_0x56c5f9=await _0x754ea1['save']();}let _0x440f3d=await brands[_0x54736c(0xe3)]({'name':_0x1a6a84});if(!_0x440f3d){const _0x49e32c=new brands({'name':_0x1a6a84,'products':'0'});_0x440f3d=await _0x49e32c[_0x54736c(0x137)]();}let _0x15a47e=await units[_0x54736c(0xe3)]({'name':_0x623ba,'secondary_unit':_0x3757ff});if(!_0x15a47e){const _0x41a95c=new units({'name':_0x623ba,'secondary_unit':_0x3757ff,'products':'0'});_0x15a47e=await _0x41a95c[_0x54736c(0x137)]();}const _0x3f819a=await product[_0x54736c(0xca)]({'name':_0x2ce50a,'category':_0x56c5f9[_0x54736c(0x100)],'brand':_0x440f3d['name'],'secondary_unit':_0x15a47e[_0x54736c(0xb3)],'product_code':_0x37137a});if(_0x3f819a[_0x54736c(0xed)]===0x0){const _0x4b51f1=new product({'image':_0x54736c(0xbd),'name':_0x2ce50a,'category':_0x56c5f9[_0x54736c(0x100)],'brand':_0x440f3d[_0x54736c(0x100)],'unit':_0x15a47e['name'],'alertquantity':_0x29d5e8,'product_code':_0x37137a,'secondary_unit':_0x15a47e['secondary_unit'],'primary_code':_0x56c4a3,'secondary_code':_0x4615a0,'maxStocks':_0xe082b5,'maxProdPerUnit':_0x164064,'CBM':_0x462af3}),_0x5c377e=await _0x4b51f1['save']();_0x56c5f9[_0x54736c(0xf1)]=parseInt(_0x56c5f9[_0x54736c(0xf1)])+0x1,await _0x56c5f9[_0x54736c(0x137)](),_0x440f3d[_0x54736c(0xf1)]=parseInt(_0x440f3d[_0x54736c(0xf1)])+0x1,await _0x440f3d[_0x54736c(0x137)](),_0x15a47e['products']=parseInt(_0x15a47e[_0x54736c(0xf1)])+0x1,await _0x15a47e[_0x54736c(0x137)](),_0x361ff5[_0x54736c(0x118)](_0x54736c(0x111),_0x2ce50a+'\x20added\x20successfully');}else _0x361ff5[_0x54736c(0x118)]('error',_0x2ce50a+_0x54736c(0x101));}catch(_0x2e8dda){_0x186cd4[_0x54736c(0xc7)](0x1f4)[_0x54736c(0xf2)]({'proderror':_0x2e8dda['message'],'aproduct':_0x2ce50a});}}_0x186cd4['redirect'](_0x54736c(0xd5));}),router['post'](a0_0x3a2624(0xbf),auth,async(_0x7937c6,_0x12f62a)=>{const _0x3f34a9=a0_0x3a2624;try{const {datachoose:_0x52ef7d}=_0x7937c6[_0x3f34a9(0xec)];console[_0x3f34a9(0x125)](_0x52ef7d);var _0xd3471c;if(_0x52ef7d=='prod_categ')_0xd3471c=await product['aggregate']([{'$group':{'_id':_0x3f34a9(0xf9)}}]);else{if(_0x52ef7d=='brands')_0xd3471c=await product[_0x3f34a9(0x123)]([{'$group':{'_id':_0x3f34a9(0x11c)}}]);else{if(_0x52ef7d==_0x3f34a9(0xa5))_0xd3471c=await product[_0x3f34a9(0x123)]([{'$group':{'_id':_0x3f34a9(0xeb)}}]);else _0x52ef7d==_0x3f34a9(0x110)&&(_0xd3471c=[{'_id':_0x3f34a9(0x110)}]);}}_0x12f62a[_0x3f34a9(0xf2)](_0xd3471c);}catch(_0x5028a5){_0x12f62a['json']({'message':_0x5028a5['message']});}}),router[a0_0x3a2624(0x10c)](a0_0x3a2624(0xc5),auth,async(_0x51f12a,_0x369dc2)=>{const _0x3cfe62=a0_0x3a2624;try{const {data_choosing:_0x2d8562,data_selected:_0x2e736b}=_0x51f12a['body'];var _0x257dd0;if(_0x2d8562=='prod_categ')_0x257dd0=await product[_0x3cfe62(0x123)]([{'$match':{'product_category':_0x2e736b}}]);else{if(_0x2d8562=='brands')_0x257dd0=await product['aggregate']([{'$match':{'brand':_0x2e736b}}]);else{if(_0x2d8562==_0x3cfe62(0xa5))_0x257dd0=await product[_0x3cfe62(0x123)]([{'$match':{'category':_0x2e736b}}]);else _0x2d8562==_0x3cfe62(0x110)&&(_0x257dd0=await product[_0x3cfe62(0xca)]());}}_0x369dc2[_0x3cfe62(0xf2)](_0x257dd0);}catch(_0x38c18b){_0x369dc2[_0x3cfe62(0xf2)]({'message':_0x38c18b[_0x3cfe62(0xd4)]});}}),module[a0_0x3a2624(0x13e)]=router;