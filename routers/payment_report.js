function a0_0x2ddc(_0x227fa0,_0x47bc2c){const _0x4ed245=a0_0x4ed2();return a0_0x2ddc=function(_0x2ddc10,_0x122b7d){_0x2ddc10=_0x2ddc10-0x196;let _0x247ebc=_0x4ed245[_0x2ddc10];return _0x247ebc;},a0_0x2ddc(_0x227fa0,_0x47bc2c);}const a0_0x22125f=a0_0x2ddc;(function(_0x2f124f,_0x206ecf){const _0x6af140=a0_0x2ddc,_0x20b446=_0x2f124f();while(!![]){try{const _0x2b8f25=-parseInt(_0x6af140(0x1b7))/0x1+parseInt(_0x6af140(0x1a6))/0x2+parseInt(_0x6af140(0x197))/0x3+-parseInt(_0x6af140(0x1b6))/0x4+-parseInt(_0x6af140(0x1aa))/0x5+-parseInt(_0x6af140(0x19c))/0x6+parseInt(_0x6af140(0x1a8))/0x7;if(_0x2b8f25===_0x206ecf)break;else _0x20b446['push'](_0x20b446['shift']());}catch(_0x5ccb2e){_0x20b446['push'](_0x20b446['shift']());}}}(a0_0x4ed2,0xa1552));const express=require(a0_0x22125f(0x1ae)),app=express(),router=express[a0_0x22125f(0x1a5)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require(a0_0x22125f(0x1ad)),auth=require(a0_0x22125f(0x1a2)),users=require(a0_0x22125f(0x19e));router[a0_0x22125f(0x1ac)](a0_0x22125f(0x1a4),auth,async(_0x3d2768,_0x35a6cc)=>{const _0x534029=a0_0x22125f;try{const {username:_0x45457f,email:_0x4bcbe8,role:_0x14501d}=_0x3d2768[_0x534029(0x1a0)],_0x1dc96e=_0x3d2768[_0x534029(0x1a0)],_0x65180a=await profile[_0x534029(0x1a7)]({'email':_0x1dc96e['email']}),_0x5b63a1=await master_shop[_0x534029(0x19a)]();console[_0x534029(0x1b8)](_0x534029(0x1b5),_0x5b63a1);const _0x235545=await suppliers_payment[_0x534029(0x19a)]();console['log'](_0x235545);if(_0x5b63a1[0x0][_0x534029(0x1b9)]=='English\x20(US)'){var _0x4645d9=users[_0x534029(0x1af)];console[_0x534029(0x1b8)](_0x4645d9);}else{if(_0x5b63a1[0x0][_0x534029(0x1b9)]==_0x534029(0x199))var _0x4645d9=users[_0x534029(0x199)];else{if(_0x5b63a1[0x0][_0x534029(0x1b9)]==_0x534029(0x1ab))var _0x4645d9=users[_0x534029(0x1ab)];else{if(_0x5b63a1[0x0][_0x534029(0x1b9)]==_0x534029(0x1b0))var _0x4645d9=users[_0x534029(0x1b0)];else{if(_0x5b63a1[0x0]['language']==_0x534029(0x198))var _0x4645d9=users[_0x534029(0x198)];else{if(_0x5b63a1[0x0][_0x534029(0x1b9)]==_0x534029(0x1b4))var _0x4645d9=users[_0x534029(0x1ba)];else{if(_0x5b63a1[0x0][_0x534029(0x1b9)]==_0x534029(0x1a1))var _0x4645d9=users[_0x534029(0x1a1)];else{if(_0x5b63a1[0x0]['language']==_0x534029(0x1a3))var _0x4645d9=users[_0x534029(0x1b1)];}}}}}}}_0x35a6cc[_0x534029(0x196)](_0x534029(0x1a9),{'success':_0x3d2768['flash'](_0x534029(0x1bb)),'errors':_0x3d2768[_0x534029(0x1b2)](_0x534029(0x19f)),'role':_0x1dc96e,'profile':_0x65180a,'suppliers_data':_0x235545,'master_shop':_0x5b63a1,'language':_0x4645d9});}catch(_0x29149e){console[_0x534029(0x1b8)](_0x29149e);}}),router[a0_0x22125f(0x1ac)](a0_0x22125f(0x19d),auth,async(_0x4247cb,_0x2fd487)=>{const _0xa3fea=a0_0x22125f;try{const {username:_0x38bce5,email:_0xae6f34,role:_0x59c562}=_0x4247cb['user'],_0xe35584=_0x4247cb[_0xa3fea(0x1a0)],_0x52038a=await profile['findOne']({'email':_0xe35584['email']}),_0x312563=await master_shop[_0xa3fea(0x19a)]();console[_0xa3fea(0x1b8)](_0xa3fea(0x1b5),_0x312563);const _0x15b16a=await customer_payment[_0xa3fea(0x19a)]();console[_0xa3fea(0x1b8)](_0x15b16a);if(_0x312563[0x0][_0xa3fea(0x1b9)]==_0xa3fea(0x1b3)){var _0x41f08e=users[_0xa3fea(0x1af)];console[_0xa3fea(0x1b8)](_0x41f08e);}else{if(_0x312563[0x0]['language']==_0xa3fea(0x199))var _0x41f08e=users['Hindi'];else{if(_0x312563[0x0][_0xa3fea(0x1b9)]==_0xa3fea(0x1ab))var _0x41f08e=users[_0xa3fea(0x1ab)];else{if(_0x312563[0x0]['language']==_0xa3fea(0x1b0))var _0x41f08e=users[_0xa3fea(0x1b0)];else{if(_0x312563[0x0][_0xa3fea(0x1b9)]==_0xa3fea(0x198))var _0x41f08e=users[_0xa3fea(0x198)];else{if(_0x312563[0x0][_0xa3fea(0x1b9)]==_0xa3fea(0x1b4))var _0x41f08e=users[_0xa3fea(0x1ba)];else{if(_0x312563[0x0][_0xa3fea(0x1b9)]==_0xa3fea(0x1a1))var _0x41f08e=users[_0xa3fea(0x1a1)];else{if(_0x312563[0x0][_0xa3fea(0x1b9)]=='Arabic\x20(ae)')var _0x41f08e=users[_0xa3fea(0x1b1)];}}}}}}}_0x2fd487[_0xa3fea(0x196)]('customer_payment_report',{'success':_0x4247cb[_0xa3fea(0x1b2)](_0xa3fea(0x1bb)),'errors':_0x4247cb[_0xa3fea(0x1b2)]('errors'),'role':_0xe35584,'profile':_0x52038a,'customer_data':_0x15b16a,'master_shop':_0x312563,'language':_0x41f08e});}catch(_0x2d29ae){console[_0xa3fea(0x1b8)](_0x2d29ae);}}),module[a0_0x22125f(0x19b)]=router;function a0_0x4ed2(){const _0x5f00e7=['/supplier','Router','427358UCZVhk','findOne','8189356GyhrgU','supplier_payment_report','1231565atnyxg','German','get','../models/all_models','express','English','Spanish','Arabic','flash','English\x20(US)','Portuguese\x20(BR)','master','2384288GDsbYv','379813kuQarj','log','language','Portuguese','success','render','1676640pRLRmU','French','Hindi','find','exports','356706kRbcvr','/customer','../public/language/languages.json','errors','user','Chinese','../middleware/auth','Arabic\x20(ae)'];a0_0x4ed2=function(){return _0x5f00e7;};return a0_0x4ed2();}