var a0_0x25f3c6=a0_0x27f0;(function(_0x44cfe3,_0x83b822){var _0x277a6d=a0_0x27f0,_0xf599e7=_0x44cfe3();while(!![]){try{var _0x252cc3=parseInt(_0x277a6d(0x1df))/0x1+parseInt(_0x277a6d(0x1d9))/0x2+parseInt(_0x277a6d(0x16b))/0x3*(-parseInt(_0x277a6d(0x19f))/0x4)+parseInt(_0x277a6d(0x146))/0x5*(-parseInt(_0x277a6d(0x14f))/0x6)+parseInt(_0x277a6d(0x1fa))/0x7*(-parseInt(_0x277a6d(0x170))/0x8)+-parseInt(_0x277a6d(0x18f))/0x9+parseInt(_0x277a6d(0x175))/0xa*(parseInt(_0x277a6d(0x154))/0xb);if(_0x252cc3===_0x83b822)break;else _0xf599e7['push'](_0xf599e7['shift']());}catch(_0x133c12){_0xf599e7['push'](_0xf599e7['shift']());}}}(a0_0x4810,0xc1a3d));const express=require(a0_0x25f3c6(0x1b2)),app=express(),router=express['Router'](),auth=require(a0_0x25f3c6(0x1e0)),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses,adjustment,adjustment_finished,email_settings,supervisor_settings}=require(a0_0x25f3c6(0x206)),users=require(a0_0x25f3c6(0x1bc)),nodemailer=require('nodemailer');router[a0_0x25f3c6(0x15d)](a0_0x25f3c6(0x190),auth,async(_0x147b1f,_0x5920fc)=>{var _0x263434=a0_0x25f3c6;try{const {username:_0x3634ee,email:_0x1e688f,role:_0x3d5a6a}=_0x147b1f[_0x263434(0x1e8)],_0x340cac=_0x147b1f['user'],_0x4890d6=await profile[_0x263434(0x19b)]({'email':_0x340cac[_0x263434(0x1ba)]}),_0x4d3254=await master_shop[_0x263434(0x1a4)]();let _0x549e32;if(_0x340cac[_0x263434(0x1a9)]==_0x263434(0x1fb)){const _0x1da1ac=await staff[_0x263434(0x19b)]({'email':_0x340cac['email']});_0x549e32=await warehouse[_0x263434(0x1a4)]({'status':'Enabled','name':_0x1da1ac[_0x263434(0x163)]});}else _0x549e32=await warehouse[_0x263434(0x1a4)]({'status':'Enabled'});const _0x4c4445=await product['find']();let _0x521b4b;if(_0x340cac[_0x263434(0x1a9)]==_0x263434(0x1fb)){const _0x4b739d=await staff[_0x263434(0x19b)]({'email':_0x340cac[_0x263434(0x1ba)]});_0x521b4b=await adjustment_finished['find']({'warehouse_name':_0x4b739d[_0x263434(0x163)]});}else _0x521b4b=await adjustment_finished[_0x263434(0x1bd)]([{'$unwind':'$product'},{'$group':{'_id':_0x263434(0x140),'invoice':{'$first':_0x263434(0x148)},'date':{'$first':_0x263434(0x1d4)},'warehouse_name':{'$first':'$warehouse_name'},'room':{'$addToSet':_0x263434(0x1cc)},'finalize':{'$first':_0x263434(0x1d5)}}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'finalize':0x1}}]);if(_0x4d3254[0x0][_0x263434(0x1dd)]==_0x263434(0x1ec)){var _0x3b61ea=users[_0x263434(0x138)];console[_0x263434(0x177)](_0x3b61ea);}else{if(_0x4d3254[0x0][_0x263434(0x1dd)]==_0x263434(0x13a))var _0x3b61ea=users[_0x263434(0x13a)];else{if(_0x4d3254[0x0]['language']==_0x263434(0x1e1))var _0x3b61ea=users['German'];else{if(_0x4d3254[0x0][_0x263434(0x1dd)]=='Spanish')var _0x3b61ea=users[_0x263434(0x18c)];else{if(_0x4d3254[0x0][_0x263434(0x1dd)]==_0x263434(0x1b3))var _0x3b61ea=users[_0x263434(0x1b3)];else{if(_0x4d3254[0x0][_0x263434(0x1dd)]==_0x263434(0x1f8))var _0x3b61ea=users[_0x263434(0x13e)];else{if(_0x4d3254[0x0][_0x263434(0x1dd)]==_0x263434(0x141))var _0x3b61ea=users[_0x263434(0x141)];else{if(_0x4d3254[0x0][_0x263434(0x1dd)]==_0x263434(0x139))var _0x3b61ea=users[_0x263434(0x150)];}}}}}}}_0x5920fc['render'](_0x263434(0x197),{'success':_0x147b1f['flash'](_0x263434(0x195)),'errors':_0x147b1f[_0x263434(0x189)](_0x263434(0x145)),'role':_0x340cac,'profile':_0x4890d6,'warehouse':_0x549e32,'product':_0x4c4445,'adjustment':_0x521b4b,'master_shop':_0x4d3254,'language':_0x3b61ea});}catch(_0x125393){console[_0x263434(0x177)](_0x125393);}});async function getRandom8DigitNumber(){var _0x7957d5=a0_0x25f3c6;const _0x3bce91=0x989680,_0x1e6a87=0x5f5e0ff,_0x5d5d89=Math['floor'](Math['random']()*(_0x1e6a87-_0x3bce91+0x1))+_0x3bce91;var _0x2ea1d8;const _0x573cf4=await adjustment_finished['findOne']({'invoice':_0x7957d5(0x1b6)+_0x5d5d89});return _0x573cf4&&_0x573cf4[_0x7957d5(0x1a6)]>0x0?_0x2ea1d8=_0x7957d5(0x1b6)+_0x5d5d89:_0x2ea1d8='ADJ-'+_0x5d5d89,_0x2ea1d8;}function a0_0x4810(){var _0x5efbe7=['status','unit','4568652vXqNzm','/view','$product_details.type','note','Return\x20Goods','purchases_data','success','$name','adjustment_finished','level','room_names','$product_details.product_code','findOne','Adjustment\x20Finalize\x20Successfully','</tbody>','There\x27s\x20a\x20error\x20in\x20this\x20transaction','128MZPamV','<div>','exports','<strong>\x20Regards\x20</strong>','/../public','find','post','length','<hr\x20class=\x22my-3\x22>','sendMail','role','/adjustment_finished/view','$product_details.maxPerUnit','invoice','add','<thead\x20style=\x22width:\x20100%\x20!important;\x22>','stock','bay','error','express','French','port','$product_details.CBM','ADJ-','maxPerUnit','Email\x20sent\x20successfully','image','email','Primary_Units','../public/language/languages.json','aggregate','Enclosed','/preview/:id','stockBefore','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','forEach','$product_details.invoice','</body></html>','/view/:id','<tr>','params','$product_details.storage','product_code','save','RMSEmail','$product.room_names','prod_invoice','/barcode_scanner','$product_details.isle','master','</thead>','getFullYear','secondary_unit','$date','$finalize','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20of\x20measure\x20</th>','adjustment\x20data\x20update\x20successfully','Sale\x20Product\x20Mail','2439272gJycEp','site_title','You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200','new_adjust_qty','language','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','1360000auCjfQ','../middleware/auth','German','</table>','secondary_code','push','<h5>','Secondary_units','/picking_list/PDF_adjustmentFinal/','user','primary_code','$product_details.rack','logo','English\x20(US)','map','back','</div>','slice','$product.product_name','split','$product_details.product_name','<span\x20style=\x22float:\x20right;\x22>','</td>','password','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','Portuguese\x20(BR)','JO_number','532TjpFEX','staff','Rooms','edit_adjustment_finished','$product_details._id','$product_details.bay','\x20Order\x20Number\x20:\x20','pallet','adjust_qty','$product_details.secondary_code','$product_details.primary_code','$product_details.expiry_date','../models/all_models','getMonth','_id','warehouse_name','</head><body>','$product_details.production_date','Ambient','json','English','Arabic\x20(ae)','Hindi','An\x20error\x20occurred.','New_Qty_Converted','render','Portuguese','</h5>','$_id','Chinese','$product_details.batch_code','product_name','date','errors','5fJlxbC','type','$invoice','prod_code','add_adjustment_finished','product_stock','<tbody\x20style=\x22text-align:\x20center;\x22>','prod_name','$product_details.floorlevel','320820USBFbs','Arabic','</tr>','types','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Level\x20</th>','144463VgjLPf','\x20</h2>','product','$product_details.unit','$product_details.product_stock','adjustment\x20add\x20successfull','expiry_date','True','/view/add_adjustment','get','$product_details.pallet','$product','New_Qty_Converted_adj','product_date','room','warehouse','$product_details','all','</span>','finalize','findById','minus','/adjustment_finished/preview/','66729uQEbIz','then','padStart','isle','<h2>\x20','124568nDWWfc','/CheckingWarehouse','Return\x20Rooms','CBM','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Quantity\x20</th>','510OoEZJB','host','log','body','batch_code','$product_details.maxProducts','/upload/','production_date','prod_cat','Logo.png','message','product_details','Enabled','toString','<h5\x20style=\x22text-align:\x20left;\x22>','redirect','$product_details.secondary_unit','string','createTransport','$room','flash','filter','getDate','Spanish'];a0_0x4810=function(){return _0x5efbe7;};return a0_0x4810();}function a0_0x27f0(_0x1f46df,_0x1f6cb2){var _0x4810d4=a0_0x4810();return a0_0x27f0=function(_0x27f092,_0x334f36){_0x27f092=_0x27f092-0x134;var _0x1eaa3b=_0x4810d4[_0x27f092];return _0x1eaa3b;},a0_0x27f0(_0x1f46df,_0x1f6cb2);}router[a0_0x25f3c6(0x15d)](a0_0x25f3c6(0x15c),auth,async(_0x3c7b4f,_0x18cc47)=>{var _0x557a9b=a0_0x25f3c6;try{const {username:_0x32f734,email:_0x39b293,role:_0x579eaa}=_0x3c7b4f[_0x557a9b(0x1e8)],_0x2baff8=_0x3c7b4f['user'],_0x461d0f=await profile[_0x557a9b(0x19b)]({'email':_0x2baff8['email']}),_0x30bc74=await master_shop['find']();let _0x474e97;if(_0x2baff8['role']==_0x557a9b(0x1fb)){const _0xfdac9d=await staff['findOne']({'email':_0x2baff8[_0x557a9b(0x1ba)]});_0x474e97=await warehouse[_0x557a9b(0x1bd)]([{'$match':{'status':_0x557a9b(0x181),'name':_0xfdac9d[_0x557a9b(0x163)],'name':{'$ne':_0x557a9b(0x193)}}},{'$group':{'_id':_0x557a9b(0x196),'name':{'$first':'$name'}}}]);}else _0x474e97=await warehouse[_0x557a9b(0x1bd)]([{'$match':{'status':_0x557a9b(0x181),'name':{'$ne':_0x557a9b(0x193)}}},{'$group':{'_id':'$name','name':{'$first':'$name'}}}]);const _0x13efa9=await product[_0x557a9b(0x1a4)]({}),_0x1e2ef4=await adjustment_finished[_0x557a9b(0x1a4)]({}),_0x2d4a97=_0x1e2ef4[_0x557a9b(0x1a6)]+0x1,_0x517518='ADJ-'+_0x2d4a97[_0x557a9b(0x182)]()[_0x557a9b(0x16d)](0x5,'0');var _0x102f54=[_0x557a9b(0x136),'Enclosed',_0x557a9b(0x172)];if(_0x30bc74[0x0][_0x557a9b(0x1dd)]=='English\x20(US)')var _0x2664e8=users['English'];else{if(_0x30bc74[0x0][_0x557a9b(0x1dd)]==_0x557a9b(0x13a))var _0x2664e8=users[_0x557a9b(0x13a)];else{if(_0x30bc74[0x0]['language']==_0x557a9b(0x1e1))var _0x2664e8=users[_0x557a9b(0x1e1)];else{if(_0x30bc74[0x0]['language']==_0x557a9b(0x18c))var _0x2664e8=users['Spanish'];else{if(_0x30bc74[0x0][_0x557a9b(0x1dd)]==_0x557a9b(0x1b3))var _0x2664e8=users[_0x557a9b(0x1b3)];else{if(_0x30bc74[0x0]['language']=='Portuguese\x20(BR)')var _0x2664e8=users[_0x557a9b(0x13e)];else{if(_0x30bc74[0x0][_0x557a9b(0x1dd)]==_0x557a9b(0x141))var _0x2664e8=users['Chinese'];else{if(_0x30bc74[0x0]['language']=='Arabic\x20(ae)')var _0x2664e8=users[_0x557a9b(0x150)];}}}}}}}const _0x12f1bf=getRandom8DigitNumber();_0x12f1bf[_0x557a9b(0x16c)](_0x266135=>{var _0x538a8a=_0x557a9b;_0x18cc47[_0x538a8a(0x13d)](_0x538a8a(0x14a),{'success':_0x3c7b4f[_0x538a8a(0x189)]('success'),'errors':_0x3c7b4f[_0x538a8a(0x189)](_0x538a8a(0x145)),'role':_0x2baff8,'profile':_0x461d0f,'warehouse':_0x474e97,'product':_0x13efa9,'master_shop':_0x30bc74,'language':_0x2664e8,'rooms_data':_0x102f54,'invoice_no':_0x266135});})['catch'](_0x37983c=>{var _0x3435a6=_0x557a9b;_0x3c7b4f[_0x3435a6(0x189)](_0x3435a6(0x145),_0x3435a6(0x19e)),_0x18cc47[_0x3435a6(0x184)](_0x3435a6(0x1aa));});}catch(_0x37cc84){console[_0x557a9b(0x177)](_0x37cc84);}}),router[a0_0x25f3c6(0x1a5)](a0_0x25f3c6(0x15c),auth,async(_0x3be08e,_0x3485c3)=>{var _0x428a7c=a0_0x25f3c6;try{const {warehouse_name:_0x4cde73,date:_0x4c2174,prod_name:_0x5bb8de,level:_0x2b6e51,isle:_0x2cbaee,pallet:_0x3fcb92,stock:_0x24e25c,types:_0x5c02ba,adjust_qty:_0x2082b9,new_adjust_qty:_0x19f16f,note:_0x43c5ee,Room_name:_0xc7f4ad,invoice:_0x3da366,JO_number:_0x3293de,expiry_date:_0x377bad,PO_number:_0x39709c,ReqBy:_0x20e8a8,dateofreq:_0x3b6367,typeservicesData:_0x2ab5a0,destination:_0x309d62,deliverydate:_0x5d4d8a,driver:_0x2e6282,plate:_0x33930a,van:_0x510aab,DRSI:_0x4200ac,typevehicle:_0x4eaaf2,TSU:_0x64fcaa,TFU:_0x33e93d}=_0x3be08e[_0x428a7c(0x178)];if(typeof _0x5bb8de==_0x428a7c(0x186))var _0x2dd2fe=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x14d)]],_0x571bab=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x198)]],_0xfff042=[_0x3be08e[_0x428a7c(0x178)]['stock']],_0x2950b7=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x152)]],_0x50abf1=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x160)]],_0x35397d=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x13c)]],_0x5479eb=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x1bb)]],_0x574a99=[_0x3be08e['body'][_0x428a7c(0x1e6)]],_0x219a4d=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x149)]],_0x4a26bb=[_0x3be08e['body'][_0x428a7c(0x179)]],_0x280f85=[_0x3be08e[_0x428a7c(0x178)]['expiry_date']],_0x5aa302=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x161)]],_0x44ed56=[_0x3be08e[_0x428a7c(0x178)]['prod_cat']],_0x43dec4=[_0x3be08e['body'][_0x428a7c(0x1fc)]],_0x1d33bf=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x1b7)]],_0x4d2897=[_0x3be08e['body'][_0x428a7c(0x147)]],_0xa94362=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x1e9)]],_0xf073e9=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x1e3)]],_0x168271=[_0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x173)]],_0x333ac8=[_0x3be08e[_0x428a7c(0x178)]['prod_invoice']];else var _0x2dd2fe=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x14d)]],_0x571bab=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x198)]],_0xfff042=[..._0x3be08e[_0x428a7c(0x178)]['stock']],_0x2950b7=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x152)]],_0x50abf1=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x160)]],_0x35397d=[..._0x3be08e[_0x428a7c(0x178)]['New_Qty_Converted']],_0x5479eb=[..._0x3be08e['body'][_0x428a7c(0x1bb)]],_0x574a99=[..._0x3be08e[_0x428a7c(0x178)]['Secondary_units']],_0x219a4d=[..._0x3be08e[_0x428a7c(0x178)]['prod_code']],_0x4a26bb=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x179)]],_0x280f85=[..._0x3be08e[_0x428a7c(0x178)]['expiry_date']],_0x5aa302=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x161)]],_0x44ed56=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x17d)]],_0x43dec4=[..._0x3be08e['body'][_0x428a7c(0x1fc)]],_0x1d33bf=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x1b7)]],_0x4d2897=[..._0x3be08e['body'][_0x428a7c(0x147)]],_0xa94362=[..._0x3be08e[_0x428a7c(0x178)]['primary_code']],_0xf073e9=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x1e3)]],_0x168271=[..._0x3be08e['body'][_0x428a7c(0x173)]],_0x333ac8=[..._0x3be08e[_0x428a7c(0x178)][_0x428a7c(0x1cd)]];const _0x3b6fd7=_0x2dd2fe[_0x428a7c(0x1ed)](_0x1ace9b=>{return _0x1ace9b={'product_name':_0x1ace9b};});_0xa94362[_0x428a7c(0x1c2)]((_0xce29e0,_0x188c61)=>{_0x3b6fd7[_0x188c61]['primary_code']=_0xce29e0;}),_0xf073e9[_0x428a7c(0x1c2)]((_0x58acb5,_0x111337)=>{var _0x42a03b=_0x428a7c;_0x3b6fd7[_0x111337][_0x42a03b(0x1e3)]=_0x58acb5;}),_0x571bab[_0x428a7c(0x1c2)]((_0x382cb4,_0x254354)=>{var _0x235b4e=_0x428a7c,_0x17356e=_0x382cb4[_0x235b4e(0x1f0)](0x1);_0x3b6fd7[_0x254354][_0x235b4e(0x16e)]=_0x382cb4[0x0],_0x3b6fd7[_0x254354][_0x235b4e(0x201)]=_0x17356e;}),_0x4d2897[_0x428a7c(0x1c2)]((_0x578315,_0x173a21)=>{_0x3b6fd7[_0x173a21]['level']=_0x578315;}),_0xfff042[_0x428a7c(0x1c2)]((_0x502be3,_0x5af76e)=>{var _0x290e29=_0x428a7c;_0x3b6fd7[_0x5af76e][_0x290e29(0x1c0)]=_0x502be3;}),_0x2950b7[_0x428a7c(0x1c2)]((_0x232b0e,_0x106b02)=>{var _0x6fe15=_0x428a7c;_0x3b6fd7[_0x106b02][_0x6fe15(0x152)]=_0x232b0e;}),_0x50abf1[_0x428a7c(0x1c2)]((_0x28a255,_0x3bd02f)=>{var _0x15082b=_0x428a7c;_0x3b6fd7[_0x3bd02f][_0x15082b(0x202)]=_0x28a255;}),_0x35397d[_0x428a7c(0x1c2)]((_0x4a0ab2,_0x10e17d)=>{_0x3b6fd7[_0x10e17d]['new_adjust_qty']=_0x4a0ab2;}),_0x5479eb[_0x428a7c(0x1c2)]((_0x29559f,_0xf65b5c)=>{_0x3b6fd7[_0xf65b5c]['unit']=_0x29559f;}),_0x574a99[_0x428a7c(0x1c2)]((_0x3a9764,_0x205c4b)=>{var _0x55725b=_0x428a7c;_0x3b6fd7[_0x205c4b][_0x55725b(0x1d3)]=_0x3a9764;}),_0x219a4d[_0x428a7c(0x1c2)]((_0x131712,_0x4bc386)=>{var _0x472f04=_0x428a7c;_0x3b6fd7[_0x4bc386][_0x472f04(0x1c9)]=_0x131712;}),_0x4a26bb[_0x428a7c(0x1c2)]((_0x4597d7,_0x209965)=>{_0x3b6fd7[_0x209965]['batch_code']=_0x4597d7;}),_0x280f85['forEach']((_0x147969,_0x3f4f1b)=>{var _0x2aa363=_0x428a7c;_0x3b6fd7[_0x3f4f1b][_0x2aa363(0x15a)]=_0x147969;}),_0x5aa302[_0x428a7c(0x1c2)]((_0x3b535b,_0x3be4f7)=>{_0x3b6fd7[_0x3be4f7]['production_date']=_0x3b535b;}),_0x44ed56[_0x428a7c(0x1c2)]((_0x3380b9,_0x2f39cc)=>{var _0x2d8867=_0x428a7c;_0x3b6fd7[_0x2f39cc][_0x2d8867(0x17d)]=_0x3380b9;}),_0x43dec4[_0x428a7c(0x1c2)]((_0x261a16,_0x26c54e)=>{var _0xbc5ea6=_0x428a7c;_0x3b6fd7[_0x26c54e][_0xbc5ea6(0x199)]=_0x261a16;}),_0x1d33bf[_0x428a7c(0x1c2)]((_0x38001c,_0x4fe61f)=>{var _0x511e58=_0x428a7c;_0x3b6fd7[_0x4fe61f][_0x511e58(0x1b7)]=_0x38001c;}),_0x168271['forEach']((_0x83bfd1,_0x18cb43)=>{var _0x2a173f=_0x428a7c;_0x3b6fd7[_0x18cb43][_0x2a173f(0x173)]=_0x83bfd1;}),_0x333ac8[_0x428a7c(0x1c2)]((_0x45bf21,_0x27e553)=>{var _0x23ad90=_0x428a7c;_0x3b6fd7[_0x27e553][_0x23ad90(0x1ac)]=_0x45bf21;});const _0xb71510=_0x3b6fd7['filter'](_0x8cfd0d=>_0x8cfd0d['new_adjust_qty']!=='0'&&_0x8cfd0d[_0x428a7c(0x1dc)]!=='');var _0x29b42e=0x0;_0xb71510[_0x428a7c(0x1c2)](_0x8dcd05=>{var _0x351ca7=_0x428a7c;console['log']('foreach\x20newproduct',_0x8dcd05),parseInt(_0x8dcd05[_0x351ca7(0x1dc)])<0x0&&_0x29b42e++;});if(_0x29b42e!=0x0)return _0x3be08e[_0x428a7c(0x189)](_0x428a7c(0x145),_0x428a7c(0x1db)),_0x3485c3[_0x428a7c(0x184)]('back');const _0x20379f=new adjustment_finished({'warehouse_name':_0x4cde73,'date':_0x4c2174,'product':_0xb71510,'note':_0x43c5ee,'room':_0xc7f4ad,'invoice':_0x3da366,'JO_number':_0x3293de,'expiry_date':_0x377bad,'PO_number':_0x39709c,'RequestedBy':_0x20e8a8,'DateofRequest':_0x3b6367,'typeservices':_0x2ab5a0,'destination':_0x309d62,'deliverydate':_0x5d4d8a,'driver':_0x2e6282,'plate':_0x33930a,'van':_0x510aab,'DRSI':_0x4200ac,'typevehicle':_0x4eaaf2,'TSU':_0x64fcaa,'TFU':_0x33e93d}),_0x538a09=await _0x20379f['save']();_0x3be08e['flash'](_0x428a7c(0x195),_0x428a7c(0x159)),_0x3485c3['redirect'](_0x428a7c(0x16a)+_0x538a09[_0x428a7c(0x208)]);}catch(_0x3d3c9b){console['log'](_0x3d3c9b),_0x3485c3[_0x428a7c(0x18d)](0xc8)['json']({'message':_0x3d3c9b[_0x428a7c(0x17f)]});}}),router[a0_0x25f3c6(0x15d)](a0_0x25f3c6(0x1bf),auth,async(_0x2f8e17,_0x35e881)=>{var _0x3316e3=a0_0x25f3c6;try{const {username:_0x468975,email:_0x359327,role:_0x1236d9}=_0x2f8e17[_0x3316e3(0x1e8)],_0x2aa4a0=_0x2f8e17[_0x3316e3(0x1e8)],_0x1ac1a9=await profile[_0x3316e3(0x19b)]({'email':_0x2aa4a0[_0x3316e3(0x1ba)]}),_0x16d8b0=await master_shop['find'](),_0x3399fb=_0x2f8e17[_0x3316e3(0x1c7)]['id'],_0x3971da=await adjustment_finished[_0x3316e3(0x168)]({'_id':_0x3399fb}),_0x222445=await purchases['aggregate']([{'$match':{'warehouse_name':_0x3971da[_0x3316e3(0x209)]}},{'$unwind':_0x3316e3(0x15f)},{'$group':{'_id':_0x3316e3(0x1f1)}}]),_0x3cd7f8=await product[_0x3316e3(0x1a4)]({}),_0xca68=await warehouse[_0x3316e3(0x1bd)]([{'$match':{'name':_0x3971da['warehouse_name']}},{'$unwind':_0x3316e3(0x164)},{'$group':{'_id':_0x3316e3(0x1fe),'name':{'$first':_0x3316e3(0x1f3)},'product_stock':{'$first':_0x3316e3(0x158)},'level':{'$first':'$product_details.level'},'isle':{'$first':'$product_details.isle'},'pallet':{'$first':_0x3316e3(0x15e)},'primary_code':{'$first':_0x3316e3(0x204)},'secondary_code':{'$first':_0x3316e3(0x203)},'product_code':{'$first':_0x3316e3(0x19a)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x3316e3(0x1ea)},'expiry_date':{'$first':_0x3316e3(0x205)},'production_date':{'$first':'$product_details.production_date'},'batch_code':{'$first':_0x3316e3(0x142)},'maxPerUnit':{'$first':_0x3316e3(0x1ab)},'room':{'$first':_0x3316e3(0x188)}}}]);if(_0x16d8b0[0x0][_0x3316e3(0x1dd)]=='English\x20(US)'){var _0xccbb41=users[_0x3316e3(0x138)];console['log'](_0xccbb41);}else{if(_0x16d8b0[0x0][_0x3316e3(0x1dd)]==_0x3316e3(0x13a))var _0xccbb41=users[_0x3316e3(0x13a)];else{if(_0x16d8b0[0x0]['language']==_0x3316e3(0x1e1))var _0xccbb41=users[_0x3316e3(0x1e1)];else{if(_0x16d8b0[0x0][_0x3316e3(0x1dd)]==_0x3316e3(0x18c))var _0xccbb41=users['Spanish'];else{if(_0x16d8b0[0x0][_0x3316e3(0x1dd)]==_0x3316e3(0x1b3))var _0xccbb41=users[_0x3316e3(0x1b3)];else{if(_0x16d8b0[0x0]['language']==_0x3316e3(0x1f8))var _0xccbb41=users[_0x3316e3(0x13e)];else{if(_0x16d8b0[0x0][_0x3316e3(0x1dd)]==_0x3316e3(0x141))var _0xccbb41=users[_0x3316e3(0x141)];else{if(_0x16d8b0[0x0][_0x3316e3(0x1dd)]==_0x3316e3(0x139))var _0xccbb41=users[_0x3316e3(0x150)];}}}}}}}_0x35e881[_0x3316e3(0x13d)]('edit_adjustment_finished_view',{'success':_0x2f8e17[_0x3316e3(0x189)](_0x3316e3(0x195)),'errors':_0x2f8e17[_0x3316e3(0x189)]('errors'),'role':_0x2aa4a0,'profile':_0x1ac1a9,'adjustment':_0x3971da,'stock':_0xca68,'master_shop':_0x16d8b0,'warehouse_name':_0x222445,'unit':_0x3cd7f8,'language':_0xccbb41});}catch(_0x2ec3b8){console[_0x3316e3(0x177)](_0x2ec3b8),_0x35e881[_0x3316e3(0x18d)](0xc8)[_0x3316e3(0x137)]({'message':_0x2ec3b8[_0x3316e3(0x17f)]});}}),router['post']('/preview/:id',auth,async(_0x1d4694,_0x52dfe9)=>{var _0x25e4c=a0_0x25f3c6;try{const {invoice:_0x1a3116,warehouse_name:_0x239168,Room_name:_0x90541d}=_0x1d4694[_0x25e4c(0x178)],_0x33a627=_0x1d4694[_0x25e4c(0x1c7)]['id'],_0x2f4612=await adjustment_finished[_0x25e4c(0x168)]({'_id':_0x33a627});var _0x135b34;const _0x3c68e5=_0x2f4612['product'][_0x25e4c(0x1ed)](async _0x2f9083=>{var _0x265eef=_0x25e4c;if(_0x2f9083[_0x265eef(0x202)]>0x0){_0x135b34=await warehouse[_0x265eef(0x19b)]({'name':_0x239168,'room':_0x2f9083[_0x265eef(0x199)]});const _0x2f1fb3=_0x135b34[_0x265eef(0x180)][_0x265eef(0x1ed)](_0x5d9c32=>{var _0x53fb13=_0x265eef;console[_0x53fb13(0x177)](_0x2f9083[_0x53fb13(0x152)]);if(_0x2f9083[_0x53fb13(0x152)]==_0x53fb13(0x169))_0x5d9c32[_0x53fb13(0x143)]==_0x2f9083[_0x53fb13(0x143)]&&_0x5d9c32[_0x53fb13(0x198)]==_0x2f9083[_0x53fb13(0x198)]&&_0x5d9c32[_0x53fb13(0x16e)]==_0x2f9083['isle']&&_0x5d9c32[_0x53fb13(0x201)]==_0x2f9083[_0x53fb13(0x201)]&&_0x5d9c32[_0x53fb13(0x15a)]==_0x2f9083['expiry_date']&&_0x5d9c32[_0x53fb13(0x17c)]==_0x2f9083[_0x53fb13(0x17c)]&&_0x5d9c32[_0x53fb13(0x179)]==_0x2f9083['batch_code']&&_0x5d9c32[_0x53fb13(0x1ac)]==_0x2f9083[_0x53fb13(0x1ac)]&&(_0x5d9c32[_0x53fb13(0x14b)]=_0x5d9c32[_0x53fb13(0x14b)]-_0x2f9083['adjust_qty']);else _0x2f9083['types']==_0x53fb13(0x1ad)&&(_0x5d9c32[_0x53fb13(0x143)]==_0x2f9083[_0x53fb13(0x143)]&&_0x5d9c32[_0x53fb13(0x198)]==_0x2f9083[_0x53fb13(0x198)]&&_0x5d9c32[_0x53fb13(0x16e)]==_0x2f9083[_0x53fb13(0x16e)]&&_0x5d9c32[_0x53fb13(0x201)]==_0x2f9083[_0x53fb13(0x201)]&&_0x5d9c32['expiry_date']==_0x2f9083[_0x53fb13(0x15a)]&&_0x5d9c32['production_date']==_0x2f9083[_0x53fb13(0x17c)]&&_0x5d9c32[_0x53fb13(0x179)]==_0x2f9083[_0x53fb13(0x179)]&&_0x5d9c32[_0x53fb13(0x1ac)]==_0x2f9083[_0x53fb13(0x1ac)]&&(_0x5d9c32[_0x53fb13(0x14b)]=_0x5d9c32[_0x53fb13(0x14b)]+_0x2f9083[_0x53fb13(0x202)]));});}return _0x135b34;});Promise[_0x25e4c(0x165)](_0x3c68e5)['then'](async _0x2442c0=>{var _0xf6d690=_0x25e4c;try{for(const _0x3f48a5 of _0x2442c0){await _0x3f48a5[_0xf6d690(0x1ca)]();}_0x2f4612[_0xf6d690(0x167)]=_0xf6d690(0x15b);const _0x29bdcf=await _0x2f4612[_0xf6d690(0x1ca)]();var _0x85eaaa=_0x2f4612[_0xf6d690(0x156)];const _0x172974=await master_shop[_0xf6d690(0x1a4)](),_0x728159=await email_settings['findOne'](),_0x28788b=await supervisor_settings[_0xf6d690(0x1a4)]();let _0x5a555f=nodemailer[_0xf6d690(0x187)]({'host':_0x728159[_0xf6d690(0x176)],'port':Number(_0x728159[_0xf6d690(0x1b4)]),'secure':![],'auth':{'user':_0x728159[_0xf6d690(0x1ba)],'pass':_0x728159[_0xf6d690(0x1f6)]}});var _0x3edf6c='',_0x52e956;for(_0x52e956 in _0x85eaaa){_0x3edf6c+=_0xf6d690(0x1c6)+_0xf6d690(0x1c1)+_0x85eaaa[_0x52e956][_0xf6d690(0x143)]+_0xf6d690(0x1f5)+_0xf6d690(0x1c1)+_0x85eaaa[_0x52e956][_0xf6d690(0x1dc)]+_0xf6d690(0x1f5)+_0xf6d690(0x1c1)+_0x85eaaa[_0x52e956]['unit']+_0xf6d690(0x1f5)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x85eaaa[_0x52e956][_0xf6d690(0x199)]+_0xf6d690(0x1f5)+_0xf6d690(0x1c1)+_0x85eaaa[_0x52e956][_0xf6d690(0x198)]+_0xf6d690(0x1f5)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x85eaaa[_0x52e956][_0xf6d690(0x16e)]+_0x85eaaa[_0x52e956][_0xf6d690(0x201)]+_0xf6d690(0x1f5)+_0xf6d690(0x151);}let _0x59166a={'from':_0x728159['email'],'to':_0x28788b[0x0][_0xf6d690(0x1cb)],'subject':_0xf6d690(0x1d8),'attachments':[{'filename':_0xf6d690(0x17e),'path':__dirname+_0xf6d690(0x1a3)+_0xf6d690(0x17b)+_0x172974[0x0][_0xf6d690(0x1b9)],'cid':_0xf6d690(0x1eb)}],'html':'<!DOCTYPE\x20html>'+'<html><head><title></title>'+_0xf6d690(0x134)+_0xf6d690(0x1a0)+_0xf6d690(0x1f7)+_0xf6d690(0x1a0)+_0xf6d690(0x1de)+_0xf6d690(0x1ef)+_0xf6d690(0x1a0)+_0xf6d690(0x16f)+_0x172974[0x0][_0xf6d690(0x1da)]+_0xf6d690(0x155)+_0xf6d690(0x1ef)+_0xf6d690(0x1ef)+_0xf6d690(0x1a7)+_0xf6d690(0x1a0)+_0xf6d690(0x183)+_0xf6d690(0x200)+_0x2f4612[_0xf6d690(0x1ac)]+'\x20'+_0xf6d690(0x1f4)+'\x20Order\x20Date\x20:\x20'+_0x2f4612[_0xf6d690(0x144)]+'\x20'+_0xf6d690(0x166)+_0xf6d690(0x13f)+'</div>'+'<table\x20style=\x22width:\x20100%\x20!important;\x22>'+_0xf6d690(0x1ae)+'<tr>'+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>'+_0xf6d690(0x174)+_0xf6d690(0x1d6)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Room\x20</th>'+_0xf6d690(0x153)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Location\x20</th>'+_0xf6d690(0x151)+_0xf6d690(0x1d1)+_0xf6d690(0x14c)+'\x20'+_0x3edf6c+'\x20'+_0xf6d690(0x19d)+_0xf6d690(0x1e2)+_0xf6d690(0x1a0)+_0xf6d690(0x1a2)+_0xf6d690(0x1e5)+_0x172974[0x0][_0xf6d690(0x1da)]+_0xf6d690(0x13f)+_0xf6d690(0x1ef)+_0xf6d690(0x1ef)+_0xf6d690(0x1c4)};_0x5a555f[_0xf6d690(0x1a8)](_0x59166a,function(_0x2e42f9,_0x4a8832){var _0x3b4fc1=_0xf6d690;_0x2e42f9?(console[_0x3b4fc1(0x177)](_0x2e42f9),console[_0x3b4fc1(0x177)]('Error\x20Occurs')):console[_0x3b4fc1(0x177)](_0x3b4fc1(0x1b8));}),_0x1d4694['flash'](_0xf6d690(0x195),_0xf6d690(0x19c)),_0x52dfe9[_0xf6d690(0x184)](_0xf6d690(0x1e7)+_0x29bdcf[_0xf6d690(0x208)]);}catch(_0x54c33f){console[_0xf6d690(0x1b1)](_0x54c33f),_0x52dfe9[_0xf6d690(0x18d)](0x1f4)[_0xf6d690(0x137)]({'error':'An\x20error\x20occurred\x20while\x20saving\x20data.'});}})['catch'](_0x344ff0=>{var _0x349688=_0x25e4c;console[_0x349688(0x1b1)](_0x344ff0),_0x52dfe9[_0x349688(0x18d)](0x1f4)[_0x349688(0x137)]({'error':_0x349688(0x13b)});});}catch(_0x8bc6bc){_0x52dfe9['json']({'message':_0x8bc6bc[_0x25e4c(0x17f)]});}}),router['get']('/view/:id',auth,async(_0x2496ae,_0xd04619)=>{var _0x37ef3f=a0_0x25f3c6;try{const {username:_0x34ecdb,email:_0x2dd8ae,role:_0x136334}=_0x2496ae[_0x37ef3f(0x1e8)],_0x1b5cba=_0x2496ae[_0x37ef3f(0x1e8)],_0x303238=await profile[_0x37ef3f(0x19b)]({'email':_0x1b5cba[_0x37ef3f(0x1ba)]}),_0x36c52c=await master_shop[_0x37ef3f(0x1a4)]();console[_0x37ef3f(0x177)](_0x37ef3f(0x1d0),_0x36c52c);const _0x1397ec=_0x2496ae[_0x37ef3f(0x1c7)]['id'],_0xf1bb44=await adjustment_finished[_0x37ef3f(0x168)]({'_id':_0x1397ec});let _0x257afc=new Date(_0xf1bb44['expiry_date']),_0x649f53=('0'+_0x257afc[_0x37ef3f(0x18b)]())[_0x37ef3f(0x1f0)](-0x2),_0x547b57=('0'+(_0x257afc[_0x37ef3f(0x207)]()+0x1))[_0x37ef3f(0x1f0)](-0x2),_0x23ca8f=_0x257afc[_0x37ef3f(0x1d2)](),_0x5364d6=_0x23ca8f+'-'+_0x547b57+'-'+_0x649f53;var _0x2fe63e=[_0x37ef3f(0x136),_0x37ef3f(0x1be),'Return\x20Rooms'];const _0xdf3f47=await purchases['aggregate']([{'$match':{'warehouse_name':_0xf1bb44[_0x37ef3f(0x209)]}},{'$unwind':'$product'},{'$group':{'_id':'$product.product_name'}}]);console[_0x37ef3f(0x177)](_0x37ef3f(0x194),_0xdf3f47);const _0x1e146c=await product[_0x37ef3f(0x1a4)]({}),_0x593265=await warehouse[_0x37ef3f(0x1bd)]([{'$match':{'name':_0xf1bb44[_0x37ef3f(0x209)],'room':_0xf1bb44[_0x37ef3f(0x162)]}},{'$unwind':_0x37ef3f(0x164)},{'$group':{'_id':_0x37ef3f(0x1fe),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x37ef3f(0x1ff)},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x37ef3f(0x191)},'floorlevel':{'$first':_0x37ef3f(0x14e)},'primary_code':{'$first':_0x37ef3f(0x204)},'secondary_code':{'$first':_0x37ef3f(0x203)},'product_code':{'$first':_0x37ef3f(0x19a)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x37ef3f(0x1ea)}}}]);if(_0x36c52c[0x0][_0x37ef3f(0x1dd)]=='English\x20(US)'){var _0x4f366a=users['English'];console['log'](_0x4f366a);}else{if(_0x36c52c[0x0][_0x37ef3f(0x1dd)]==_0x37ef3f(0x13a))var _0x4f366a=users[_0x37ef3f(0x13a)];else{if(_0x36c52c[0x0][_0x37ef3f(0x1dd)]==_0x37ef3f(0x1e1))var _0x4f366a=users[_0x37ef3f(0x1e1)];else{if(_0x36c52c[0x0][_0x37ef3f(0x1dd)]==_0x37ef3f(0x18c))var _0x4f366a=users['Spanish'];else{if(_0x36c52c[0x0][_0x37ef3f(0x1dd)]==_0x37ef3f(0x1b3))var _0x4f366a=users[_0x37ef3f(0x1b3)];else{if(_0x36c52c[0x0][_0x37ef3f(0x1dd)]==_0x37ef3f(0x1f8))var _0x4f366a=users[_0x37ef3f(0x13e)];else{if(_0x36c52c[0x0][_0x37ef3f(0x1dd)]=='Chinese')var _0x4f366a=users[_0x37ef3f(0x141)];else{if(_0x36c52c[0x0][_0x37ef3f(0x1dd)]==_0x37ef3f(0x139))var _0x4f366a=users[_0x37ef3f(0x150)];}}}}}}}_0xd04619[_0x37ef3f(0x13d)](_0x37ef3f(0x1fd),{'success':_0x2496ae[_0x37ef3f(0x189)]('success'),'errors':_0x2496ae[_0x37ef3f(0x189)](_0x37ef3f(0x145)),'role':_0x1b5cba,'profile':_0x303238,'adjustment':_0xf1bb44,'stock':_0x593265,'master_shop':_0x36c52c,'warehouse_name':_0xdf3f47,'unit':_0x1e146c,'language':_0x4f366a,'rooms_data':_0x2fe63e,'ed_fullDate':_0x5364d6});}catch(_0x36bc89){console['log'](_0x36bc89),_0xd04619[_0x37ef3f(0x18d)](0xc8)[_0x37ef3f(0x137)]({'message':_0x36bc89[_0x37ef3f(0x17f)]});}}),router[a0_0x25f3c6(0x1a5)](a0_0x25f3c6(0x1c5),auth,async(_0x5b655b,_0x20036b)=>{var _0x4dc72f=a0_0x25f3c6;try{const _0x1ff645=_0x5b655b[_0x4dc72f(0x1c7)]['id'],_0x2d6c16=await adjustment_finished[_0x4dc72f(0x168)]({'_id':_0x1ff645}),_0x580d72=await warehouse[_0x4dc72f(0x19b)]({'name':_0x2d6c16[_0x4dc72f(0x209)],'room':_0x2d6c16[_0x4dc72f(0x162)]}),{warehouse_name:_0x56db6b,date:_0x356592,prod_name:_0x1bcc99,level:_0x59c33f,isle:_0xe82525,pallet:_0x36e065,stock:_0xc4e9d,types:_0x50214d,adjust_qty:_0x1bc077,new_adjust_qty:_0x3a4600,note:_0x3f32f0,Room_name:_0x5b54e4,invoice:_0x1977d8,JO_number:_0x5adb96}=_0x5b655b[_0x4dc72f(0x178)];if(typeof _0x1bcc99==_0x4dc72f(0x186))var _0x5c5749=[_0x5b655b['body'][_0x4dc72f(0x14d)]],_0x452aab=[_0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x198)]],_0x5a3918=[_0x5b655b['body'][_0x4dc72f(0x1af)]],_0x397ad5=[_0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x152)]],_0xf7bf25=[_0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x202)]],_0x50d352=[_0x5b655b[_0x4dc72f(0x178)]['new_adjust_qty']],_0x5a731d=[_0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x149)]],_0x3c31c6=[_0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x18e)]],_0x183a10=[_0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x1e6)]],_0x30ebb1=[_0x5b655b['body']['batch_code']],_0x5d46da=[_0x5b655b[_0x4dc72f(0x178)]['expiry_date']];else var _0x5c5749=[..._0x5b655b['body'][_0x4dc72f(0x14d)]],_0x452aab=[..._0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x198)]],_0x5a3918=[..._0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x1af)]],_0x397ad5=[..._0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x152)]],_0xf7bf25=[..._0x5b655b['body'][_0x4dc72f(0x202)]],_0x50d352=[..._0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x1dc)]],_0x5a731d=[..._0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x149)]],_0x3c31c6=[..._0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x18e)]],_0x183a10=[..._0x5b655b['body']['Secondary_units']],_0x30ebb1=[..._0x5b655b[_0x4dc72f(0x178)][_0x4dc72f(0x179)]],_0x5d46da=[..._0x5b655b['body'][_0x4dc72f(0x15a)]];const _0xff8b3a=_0x5c5749['map'](_0x4e63fb=>{return _0x4e63fb={'product_name':_0x4e63fb};});_0x452aab[_0x4dc72f(0x1c2)]((_0x485d1f,_0x19a8f2)=>{_0xff8b3a[_0x19a8f2]['bay']=_0x485d1f;}),_0x5a3918[_0x4dc72f(0x1c2)]((_0x39f454,_0x48cc51)=>{_0xff8b3a[_0x48cc51]['stockBefore']=_0x39f454;}),_0x397ad5[_0x4dc72f(0x1c2)]((_0x380487,_0x351086)=>{_0xff8b3a[_0x351086]['types']=_0x380487;}),_0xf7bf25[_0x4dc72f(0x1c2)]((_0x24c684,_0x19aa5e)=>{var _0x931ecd=_0x4dc72f;_0xff8b3a[_0x19aa5e][_0x931ecd(0x202)]=_0x24c684;}),_0x50d352[_0x4dc72f(0x1c2)]((_0x28113f,_0x2317ad)=>{_0xff8b3a[_0x2317ad]['new_adjust_qty']=_0x28113f;}),_0x3c31c6[_0x4dc72f(0x1c2)]((_0x5a2219,_0x9228bf)=>{_0xff8b3a[_0x9228bf]['unit']=_0x5a2219;}),_0x183a10[_0x4dc72f(0x1c2)]((_0x46f6a3,_0x2612ef)=>{_0xff8b3a[_0x2612ef]['secondary_unit']=_0x46f6a3;}),_0x5a731d['forEach']((_0x2d1874,_0xbfe7d3)=>{var _0x463e61=_0x4dc72f;_0xff8b3a[_0xbfe7d3][_0x463e61(0x1c9)]=_0x2d1874;}),_0x30ebb1[_0x4dc72f(0x1c2)]((_0xe784d4,_0x1376cd)=>{var _0x324642=_0x4dc72f;_0xff8b3a[_0x1376cd][_0x324642(0x179)]=_0xe784d4;}),_0x5d46da['forEach']((_0x173f4f,_0x5f09be)=>{var _0x121bd2=_0x4dc72f;_0xff8b3a[_0x5f09be][_0x121bd2(0x15a)]=_0x173f4f;});const _0x58db7a=_0xff8b3a[_0x4dc72f(0x18a)](_0x61420a=>_0x61420a[_0x4dc72f(0x202)]!=='0'&&_0x61420a[_0x4dc72f(0x202)]!=='');var _0x5c18da=0x0;_0x58db7a[_0x4dc72f(0x1c2)](_0x3252b5=>{var _0x6410d9=_0x4dc72f;console[_0x6410d9(0x177)]('foreach\x20newproduct',_0x3252b5),parseInt(_0x3252b5[_0x6410d9(0x202)])<=0x0&&_0x5c18da++;});if(_0x5c18da!=0x0)return _0x5b655b[_0x4dc72f(0x189)](_0x4dc72f(0x145),'You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200'),_0x20036b[_0x4dc72f(0x184)](_0x4dc72f(0x1ee));_0x2d6c16[_0x4dc72f(0x209)]=_0x56db6b,_0x2d6c16[_0x4dc72f(0x144)]=_0x356592,_0x2d6c16['product']=_0x58db7a,_0x2d6c16[_0x4dc72f(0x192)]=_0x3f32f0,_0x2d6c16[_0x4dc72f(0x162)]=_0x5b54e4,_0x2d6c16[_0x4dc72f(0x1ac)]=_0x1977d8,_0x2d6c16[_0x4dc72f(0x1f9)]=_0x5adb96;const _0x1159a8=await _0x2d6c16[_0x4dc72f(0x1ca)](),_0x8d3bb3=await warehouse[_0x4dc72f(0x19b)]({'name':_0x56db6b,'room':_0x5b54e4});_0x1159a8[_0x4dc72f(0x156)][_0x4dc72f(0x1c2)](_0x3ba96b=>{var _0x263196=_0x4dc72f;const _0x58925d=_0x8d3bb3['product_details'][_0x263196(0x1ed)](_0x5b6b4e=>{var _0x4f6b83=_0x263196;_0x3ba96b['types']==_0x4f6b83(0x169)?_0x5b6b4e['product_name']==_0x3ba96b['product_name']&&_0x5b6b4e['bay']==_0x3ba96b[_0x4f6b83(0x1b0)]&&(_0x5b6b4e[_0x4f6b83(0x14b)]=parseInt(_0x5b6b4e[_0x4f6b83(0x14b)])-parseInt(_0x3ba96b['adjust_qty'])):_0x5b6b4e[_0x4f6b83(0x143)]==_0x3ba96b[_0x4f6b83(0x143)]&&_0x5b6b4e[_0x4f6b83(0x1b0)]==_0x3ba96b['bay']&&(_0x5b6b4e[_0x4f6b83(0x14b)]=parseInt(_0x5b6b4e[_0x4f6b83(0x14b)])+parseInt(_0x3ba96b[_0x4f6b83(0x202)]));});}),await _0x8d3bb3[_0x4dc72f(0x1ca)](),_0x5b655b[_0x4dc72f(0x189)]('success',_0x4dc72f(0x1d7)),_0x20036b[_0x4dc72f(0x184)]('/adjustment_finished/view');}catch(_0x9e1ab7){console[_0x4dc72f(0x177)](_0x9e1ab7);}}),router[a0_0x25f3c6(0x1a5)](a0_0x25f3c6(0x1ce),async(_0x419065,_0x18ff26)=>{var _0x162a12=a0_0x25f3c6;const {primary_code:_0x1991f4,warehouse_data:_0x1b7570,rooms_data:_0x2d35bc,Roomslist:_0xbc54c6}=_0x419065['body'],_0x249ac=_0xbc54c6[_0x162a12(0x1f2)](','),_0x3f7234=[];async function _0x4ea1a1(_0x31fec0){var _0x3028b0=_0x162a12;const _0x37669b=await warehouse[_0x3028b0(0x1bd)]([{'$match':{'name':_0x1b7570,'room':_0x31fec0}},{'$unwind':'$product_details'},{'$match':{'product_details.primary_code':_0x1991f4}},{'$group':{'_id':_0x3028b0(0x1fe),'name':{'$first':_0x3028b0(0x1f3)},'product_stock':{'$first':_0x3028b0(0x158)},'primary_code':{'$first':_0x3028b0(0x204)},'secondary_code':{'$first':_0x3028b0(0x203)},'product_code':{'$first':_0x3028b0(0x19a)},'level':{'$first':'$product_details.level'},'isle':{'$first':_0x3028b0(0x1cf)},'pallet':{'$first':_0x3028b0(0x15e)},'unit':{'$first':_0x3028b0(0x157)},'secondary_unit':{'$first':_0x3028b0(0x185)},'storage':{'$first':_0x3028b0(0x1c8)},'rack':{'$first':_0x3028b0(0x1ea)},'expiry_date':{'$first':'$product_details.expiry_date'},'production_date':{'$first':_0x3028b0(0x135)},'batch_code':{'$first':'$product_details.batch_code'},'product_cat':{'$first':'P'},'maxPerUnit':{'$first':_0x3028b0(0x1ab)},'roomNamed':{'$first':_0x3028b0(0x188)},'CBM':{'$first':{'$toDouble':_0x3028b0(0x1b5)}},'maxProducts':{'$first':_0x3028b0(0x17a)},'invoice':{'$first':_0x3028b0(0x1c3)}}}]),_0x2d8022=await warehouse[_0x3028b0(0x1bd)]([{'$match':{'name':_0x1b7570,'room':_0x31fec0}},{'$unwind':_0x3028b0(0x164)},{'$match':{'product_details.secondary_code':_0x1991f4}},{'$group':{'_id':_0x3028b0(0x1fe),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x3028b0(0x158)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x3028b0(0x19a)},'level':{'$first':'$product_details.level'},'isle':{'$first':_0x3028b0(0x1cf)},'pallet':{'$first':_0x3028b0(0x15e)},'unit':{'$first':_0x3028b0(0x157)},'secondary_unit':{'$first':_0x3028b0(0x185)},'storage':{'$first':_0x3028b0(0x1c8)},'rack':{'$first':_0x3028b0(0x1ea)},'expiry_date':{'$first':_0x3028b0(0x205)},'production_date':{'$first':_0x3028b0(0x135)},'batch_code':{'$first':_0x3028b0(0x142)},'product_cat':{'$first':'S'},'maxPerUnit':{'$first':_0x3028b0(0x1ab)},'roomNamed':{'$first':'$room'},'CBM':{'$first':{'$toDouble':_0x3028b0(0x1b5)}},'maxProducts':{'$first':'$product_details.maxProducts'},'invoice':{'$first':_0x3028b0(0x1c3)}}}]);if(_0x37669b['length']>0x0)_0x3f7234[_0x3028b0(0x1e4)](_0x37669b);else _0x2d8022[_0x3028b0(0x1a6)]>0x0&&_0x3f7234[_0x3028b0(0x1e4)](_0x2d8022);}const _0x5275a0=_0x249ac[_0x162a12(0x1ed)](_0x4d0878=>_0x4ea1a1(_0x4d0878));await Promise['all'](_0x5275a0),_0x18ff26['json'](_0x3f7234);}),router[a0_0x25f3c6(0x1a5)](a0_0x25f3c6(0x171),async(_0x5a61ec,_0x1a0166)=>{var _0x3d5107=a0_0x25f3c6;const {productCode:_0x55d9b1,bay:_0xecb3b4,warehouses:_0x194a42,room:_0x5bdbb5}=_0x5a61ec['body'];console['log'](_0x5a61ec['body']);try{const _0x2cf7a6=await warehouse[_0x3d5107(0x1bd)]([{'$match':{'name':_0x194a42,'room':_0x5bdbb5}},{'$unwind':'$product_details'},{'$match':{'product_details.bay':parseInt(_0xecb3b4)}},{'$group':{'_id':_0x3d5107(0x1fe),'name':{'$first':_0x3d5107(0x1f3)},'product_stock':{'$first':_0x3d5107(0x158)},'bay':{'$first':_0x3d5107(0x1ff)},'maxProducts':{'$first':_0x3d5107(0x17a)}}}]);_0x1a0166['status'](0xc8)[_0x3d5107(0x137)](_0x2cf7a6);}catch(_0x3bbf3e){_0x1a0166[_0x3d5107(0x18d)](0x194)[_0x3d5107(0x137)]({'message':_0x3bbf3e[_0x3d5107(0x17f)]});}}),module[a0_0x25f3c6(0x1a1)]=router;