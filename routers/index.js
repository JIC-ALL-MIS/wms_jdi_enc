const a0_0x3a0717=a0_0x2b0e;(function(_0x1ccc4f,_0x533635){const _0x55af94=a0_0x2b0e,_0x4a5f28=_0x1ccc4f();while(!![]){try{const _0x1b13b2=parseInt(_0x55af94(0x18e))/0x1*(parseInt(_0x55af94(0x1a5))/0x2)+-parseInt(_0x55af94(0x180))/0x3+parseInt(_0x55af94(0x173))/0x4+-parseInt(_0x55af94(0x199))/0x5*(parseInt(_0x55af94(0x17e))/0x6)+-parseInt(_0x55af94(0x196))/0x7*(-parseInt(_0x55af94(0x19e))/0x8)+-parseInt(_0x55af94(0x183))/0x9*(parseInt(_0x55af94(0x171))/0xa)+-parseInt(_0x55af94(0x18f))/0xb*(-parseInt(_0x55af94(0x181))/0xc);if(_0x1b13b2===_0x533635)break;else _0x4a5f28['push'](_0x4a5f28['shift']());}catch(_0x3a1cd9){_0x4a5f28['push'](_0x4a5f28['shift']());}}}(a0_0x5357,0x5492d));function a0_0x5357(){const _0x4635dc=['Arabic','1CKJvmj','7313141SbYbLN','index','findOne','../middleware/auth','$product','$product.to_quantity','$product.quantity','847nxmOdW','$sale_product','English','925885rGbSiE','find','$sale_product.quantity','render','$total_amount','15384QHTsuY','Hindi','$product.from_quantity','$return_product','express','German','/index','305958urzSNY','2510uYliZz','flash','476320wyMSXc','errors','French','../models/all_models','$from_warehouse','language','$return_sale.return_qty','user','Chinese','Spanish','length','18nDabNy','email','1323006YbYrxZ','24xyugEt','Portuguese','17622DmcPFO','$total_price','English\x20(US)','Arabic\x20(ae)','$return_sale','aggregate','../public/language/languages.json','$to_warehouse','$product.product_name','Portuguese\x20(BR)'];a0_0x5357=function(){return _0x4635dc;};return a0_0x5357();}function a0_0x2b0e(_0x533960,_0x1dc1a2){const _0x5357d7=a0_0x5357();return a0_0x2b0e=function(_0x2b0e3b,_0x4d130a){_0x2b0e3b=_0x2b0e3b-0x171;let _0x1a41fa=_0x5357d7[_0x2b0e3b];return _0x1a41fa;},a0_0x2b0e(_0x533960,_0x1dc1a2);}const express=require(a0_0x3a0717(0x1a2)),app=express(),router=express['Router'](),auth=require(a0_0x3a0717(0x192)),{profile,sales,sales_return,purchases,purchases_return,categories,product,suppliers,customer,master_shop,transfers,purchases_finished,sales_finished,sales_return_finished,purchases_return_finished,transfers_finished}=require(a0_0x3a0717(0x176)),users=require(a0_0x3a0717(0x189));router['get'](a0_0x3a0717(0x1a4),auth,async(_0x459cfa,_0x344dd5)=>{const _0x3a5dbd=a0_0x3a0717;try{const {username:_0x6a0da5,email:_0x3cdaaf,role:_0x116009}=_0x459cfa['user'],_0x4e8788=_0x459cfa[_0x3a5dbd(0x17a)],_0x5adc49=await profile[_0x3a5dbd(0x191)]({'email':_0x4e8788[_0x3a5dbd(0x17f)]}),_0x1d37d6=await master_shop[_0x3a5dbd(0x19a)](),_0xb32dcf=await sales_finished[_0x3a5dbd(0x188)]([{'$group':{'_id':null,'total_price':{'$sum':_0x3a5dbd(0x184)}}}]),_0x15bf2c=await sales_finished[_0x3a5dbd(0x188)]([{'$unwind':_0x3a5dbd(0x197)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x3a5dbd(0x19b)}}}]),_0x338aaa=await sales_return_finished[_0x3a5dbd(0x188)]([{'$group':{'_id':null,'total':{'$sum':_0x3a5dbd(0x19d)}}}]),_0x16586f=await sales_return_finished[_0x3a5dbd(0x188)]([{'$unwind':_0x3a5dbd(0x187)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x3a5dbd(0x179)}}}]),_0x5f384b=await purchases_finished[_0x3a5dbd(0x188)]([{'$group':{'_id':null,'total_amount':{'$sum':_0x3a5dbd(0x19d)}}}]),_0xc5f05=await purchases_return_finished[_0x3a5dbd(0x188)]([{'$group':{'_id':null,'total':{'$sum':_0x3a5dbd(0x19d)}}}]),_0x457008=await purchases_return_finished[_0x3a5dbd(0x188)]([{'$unwind':_0x3a5dbd(0x1a1)},{'$group':{'_id':null,'totalQuantity':{'$sum':'$return_product.return_qty'}}}]),_0x1bb6d8=await purchases_finished[_0x3a5dbd(0x188)]([{'$unwind':_0x3a5dbd(0x193)},{'$group':{'_id':null,'totalQuantity':{'$sum':_0x3a5dbd(0x195)}}}]),_0xe1441=await purchases_finished[_0x3a5dbd(0x188)]([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x586a59=await sales_finished['aggregate']([{'$sort':{'invoice':-0x1}},{'$limit':0x5},{'$sort':{'invoice':0x1}}]),_0x2ac722=await transfers_finished[_0x3a5dbd(0x188)]([{'$unwind':_0x3a5dbd(0x193)},{'$group':{'_id':_0x3a5dbd(0x18b),'fromWarehouse':{'$first':_0x3a5dbd(0x177)},'toWareHouse':{'$first':_0x3a5dbd(0x18a)},'FromtotalQuantity':{'$sum':_0x3a5dbd(0x1a0)},'TototalQuantity':{'$sum':_0x3a5dbd(0x194)}}}]),_0x54278a=await categories[_0x3a5dbd(0x19a)](),_0xcfae37=await product[_0x3a5dbd(0x19a)](),_0x45b47e=await suppliers[_0x3a5dbd(0x19a)](),_0x14fc36=await customer['find']();if(_0x1d37d6[0x0][_0x3a5dbd(0x178)]==_0x3a5dbd(0x185))var _0x4c0c8b=users[_0x3a5dbd(0x198)];else{if(_0x1d37d6[0x0][_0x3a5dbd(0x178)]==_0x3a5dbd(0x19f))var _0x4c0c8b=users['Hindi'];else{if(_0x1d37d6[0x0][_0x3a5dbd(0x178)]==_0x3a5dbd(0x1a3))var _0x4c0c8b=users['German'];else{if(_0x1d37d6[0x0][_0x3a5dbd(0x178)]==_0x3a5dbd(0x17c))var _0x4c0c8b=users[_0x3a5dbd(0x17c)];else{if(_0x1d37d6[0x0][_0x3a5dbd(0x178)]==_0x3a5dbd(0x175))var _0x4c0c8b=users[_0x3a5dbd(0x175)];else{if(_0x1d37d6[0x0][_0x3a5dbd(0x178)]==_0x3a5dbd(0x18c))var _0x4c0c8b=users[_0x3a5dbd(0x182)];else{if(_0x1d37d6[0x0][_0x3a5dbd(0x178)]=='Chinese')var _0x4c0c8b=users[_0x3a5dbd(0x17b)];else{if(_0x1d37d6[0x0]['language']==_0x3a5dbd(0x186))var _0x4c0c8b=users[_0x3a5dbd(0x18d)];}}}}}}}_0x344dd5[_0x3a5dbd(0x19c)](_0x3a5dbd(0x190),{'success':_0x459cfa[_0x3a5dbd(0x172)]('success'),'errors':_0x459cfa[_0x3a5dbd(0x172)](_0x3a5dbd(0x174)),'role':_0x4e8788,'profile':_0x5adc49,'sale':_0xb32dcf[0x0],'sales_return':_0x338aaa[0x0],'purchases':_0x5f384b[0x0],'purchases_return':_0xc5f05[0x0],'purchases_table':_0xe1441,'sales_table':_0x586a59,'categories':_0x54278a[_0x3a5dbd(0x17d)],'product':_0xcfae37[_0x3a5dbd(0x17d)],'suppliers':_0x45b47e['length'],'customer':_0x14fc36[_0x3a5dbd(0x17d)],'master_shop':_0x1d37d6,'language':_0x4c0c8b,'sale_QTY':_0x15bf2c[0x0],'purchases_QTY':_0x1bb6d8[0x0],'sales_return_QTY':_0x16586f[0x0],'purchases_return_QTY':_0x457008[0x0],'transfer_table':_0x2ac722});}catch(_0x44f54f){console['log'](_0x44f54f);}}),module['exports']=router;