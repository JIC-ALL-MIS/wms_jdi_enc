const a0_0x1c51d9=a0_0x14ea;(function(_0x3f6ec6,_0x4a1475){const _0x5403b7=a0_0x14ea,_0x55b334=_0x3f6ec6();while(!![]){try{const _0x5b4ff0=-parseInt(_0x5403b7(0xd8))/0x1*(parseInt(_0x5403b7(0xf1))/0x2)+parseInt(_0x5403b7(0xf4))/0x3+parseInt(_0x5403b7(0xe9))/0x4+-parseInt(_0x5403b7(0xee))/0x5+-parseInt(_0x5403b7(0xea))/0x6*(-parseInt(_0x5403b7(0xb4))/0x7)+parseInt(_0x5403b7(0xe5))/0x8+-parseInt(_0x5403b7(0xba))/0x9;if(_0x5b4ff0===_0x4a1475)break;else _0x55b334['push'](_0x55b334['shift']());}catch(_0x13fd7f){_0x55b334['push'](_0x55b334['shift']());}}}(a0_0x9d3b,0x9e6b7));function a0_0x14ea(_0x1803e9,_0x3c9e1c){const _0x9d3b45=a0_0x9d3b();return a0_0x14ea=function(_0x14eaab,_0x4d5dc8){_0x14eaab=_0x14eaab-0xb2;let _0x494045=_0x9d3b45[_0x14eaab];return _0x494045;},a0_0x14ea(_0x1803e9,_0x3c9e1c);}const express=require('express'),app=express(),router=express['Router'](),multer=require(a0_0x1c51d9(0xc1)),{profile,master_shop,email_settings,supervisor_settings}=require(a0_0x1c51d9(0xc6)),auth=require('../middleware/auth');var timezones=require('timezones-list');function a0_0x9d3b(){const _0x5468de=['10TKxyYt','Chinese','/master_shop/view/email','1149888tBtsPi','English','./public/upload','host','Portuguese','save','99064dwFnuT','/view/email','image','currency','1111111','master','6890301oXQReN','Portuguese\x20(BR)','/view/supervisors_settings','single','/master_shop/view','/view/supervisors','flash','multer','body','/view/email/edit_settings','shop\x20setting\x20edit\x20successfully','currency_placement','../models/all_models','now','German','RMSName','Arabic','/view','French','hidden','render','get','originalname','en-US','file','post','exports','password','log','master_shop_data','80800UfHfaC','success','params','redirect','email','user','diskStorage','toLocaleString','RMSEmail','Spanish','Hindi','find','findOne','8578800IGLoix','errors','/view/edit_settings','email_settings','1454564xaELRa','276bbgKpC','language','timezone','English\x20(US)','3259015kzKIbA','supervisor_settings','Arabic\x20(ae)'];a0_0x9d3b=function(){return _0x5468de;};return a0_0x9d3b();}const users=require('../public/language/languages.json'),storage=multer[a0_0x1c51d9(0xde)]({'destination':(_0x561140,_0x4a2646,_0x37391b)=>{const _0x462efa=a0_0x1c51d9;console['log'](_0x462efa(0xb8),_0x4a2646[_0x462efa(0xd0)]),_0x37391b(null,_0x462efa(0xf6));},'filename':(_0x329aa7,_0x58f50c,_0x39b902)=>{const _0x43e90e=a0_0x1c51d9;_0x39b902(null,Date[_0x43e90e(0xc7)]()+_0x58f50c[_0x43e90e(0xd0)]);}}),upload=multer({'storage':storage});router['get'](a0_0x1c51d9(0xcb),auth,async(_0x5f2b84,_0x4d24a8)=>{const _0xdc4f39=a0_0x1c51d9;try{const {username:_0x5a9bc0,email:_0x312acb,role:_0x1cd528}=_0x5f2b84['user'],_0x2368e0=_0x5f2b84['user'],_0x3efccd=await profile[_0xdc4f39(0xe4)]({'email':_0x2368e0[_0xdc4f39(0xdc)]}),_0x5d063e=await master_shop[_0xdc4f39(0xe3)]();console[_0xdc4f39(0xd6)](_0xdc4f39(0xb9),_0x5d063e);const _0x5dc0a1=new Date()[_0xdc4f39(0xdf)]('en-US',{'timeZone':_0x5d063e[0x0][_0xdc4f39(0xec)]});console[_0xdc4f39(0xd6)](_0xdc4f39(0xec),_0x5dc0a1);if(_0x5d063e[0x0][_0xdc4f39(0xeb)]==_0xdc4f39(0xed)){var _0x5a47e4=users[_0xdc4f39(0xf5)];console[_0xdc4f39(0xd6)](_0x5a47e4);}else{if(_0x5d063e[0x0][_0xdc4f39(0xeb)]==_0xdc4f39(0xe2))var _0x5a47e4=users['Hindi'];else{if(_0x5d063e[0x0][_0xdc4f39(0xeb)]==_0xdc4f39(0xc8))var _0x5a47e4=users[_0xdc4f39(0xc8)];else{if(_0x5d063e[0x0][_0xdc4f39(0xeb)]=='Spanish')var _0x5a47e4=users[_0xdc4f39(0xe1)];else{if(_0x5d063e[0x0][_0xdc4f39(0xeb)]==_0xdc4f39(0xcc))var _0x5a47e4=users[_0xdc4f39(0xcc)];else{if(_0x5d063e[0x0][_0xdc4f39(0xeb)]==_0xdc4f39(0xbb))var _0x5a47e4=users[_0xdc4f39(0xb2)];else{if(_0x5d063e[0x0][_0xdc4f39(0xeb)]=='Chinese')var _0x5a47e4=users[_0xdc4f39(0xf2)];else{if(_0x5d063e[0x0]['language']=='Arabic\x20(ae)')var _0x5a47e4=users[_0xdc4f39(0xca)];}}}}}}}_0x4d24a8[_0xdc4f39(0xce)]('master_settings',{'success':_0x5f2b84['flash']('success'),'errors':_0x5f2b84[_0xdc4f39(0xc0)](_0xdc4f39(0xe6)),'role':_0x2368e0,'profile':_0x3efccd,'master_shop':_0x5d063e,'timezones':timezones,'language':_0x5a47e4});}catch(_0x563be1){console[_0xdc4f39(0xd6)](_0x563be1);}}),router[a0_0x1c51d9(0xcf)]('/:id',auth,async(_0xf0a924,_0x2fe817)=>{const _0x4952e8=a0_0x1c51d9;try{console[_0x4952e8(0xd6)](_0x4952e8(0xeb)),console[_0x4952e8(0xd6)](_0xf0a924[_0x4952e8(0xda)]['id']);const _0x2d36df=await master_shop[_0x4952e8(0xe4)]();_0x2d36df[_0x4952e8(0xeb)]=_0xf0a924[_0x4952e8(0xda)]['id'],await _0x2d36df[_0x4952e8(0xb3)](),console[_0x4952e8(0xd6)](_0x4952e8(0xb9),_0x2d36df);}catch(_0x3ef0d0){console[_0x4952e8(0xd6)](_0x3ef0d0);}}),router['post'](a0_0x1c51d9(0xe7),auth,upload[a0_0x1c51d9(0xbd)](a0_0x1c51d9(0xb6)),async(_0x3b0948,_0x286e84)=>{const _0x20a3de=a0_0x1c51d9;try{const {site_title:_0x13a2dd,currency:_0x5e377c,currency_placement:_0x14bf7e,timezone:_0x25b612}=_0x3b0948['body'];if(_0x3b0948[_0x20a3de(0xc2)][_0x20a3de(0xcd)]==0x0){const _0xa3bb5d=await master_shop['findOne']();console['log'](_0x20a3de(0xd7),_0xa3bb5d);if(_0xa3bb5d==''){const _0x55a37d=new master_shop({'site_title':_0x13a2dd,'image':image,'currency':_0x5e377c,'currency_placement':_0x14bf7e,'timezone':_0x25b612}),_0x468d67=await _0x55a37d[_0x20a3de(0xb3)]();}else _0xa3bb5d['site_title']=_0x13a2dd,_0xa3bb5d[_0x20a3de(0xb7)]=_0x5e377c,_0xa3bb5d['currency_placement']=_0x14bf7e,_0xa3bb5d[_0x20a3de(0xec)]=_0x25b612,await _0xa3bb5d['save']();}else{const _0x5d1a84=_0x3b0948[_0x20a3de(0xd2)]['filename'],_0x21ca74=await master_shop[_0x20a3de(0xe4)]();console['log']('2nd\x20master_shop_data',_0x21ca74);if(_0x21ca74==null){console[_0x20a3de(0xd6)]('1',_0x13a2dd);const _0x23015f=new master_shop({'site_title':_0x13a2dd,'image':_0x5d1a84,'currency':_0x5e377c,'currency_placement':_0x14bf7e,'timezone':_0x25b612}),_0xfab3bd=await _0x23015f['save']();}else console[_0x20a3de(0xd6)]('2',_0x13a2dd),_0x21ca74['site_title']=_0x13a2dd,_0x21ca74['image']=_0x5d1a84,_0x21ca74[_0x20a3de(0xb7)]=_0x5e377c,_0x21ca74[_0x20a3de(0xc5)]=_0x14bf7e,_0x21ca74[_0x20a3de(0xec)]=_0x25b612,await _0x21ca74[_0x20a3de(0xb3)]();}_0x3b0948['flash'](_0x20a3de(0xd9),_0x20a3de(0xc4)),_0x286e84[_0x20a3de(0xdb)](_0x20a3de(0xbe));}catch(_0x4b7d01){console[_0x20a3de(0xd6)](_0x4b7d01);}}),router[a0_0x1c51d9(0xcf)](a0_0x1c51d9(0xb5),auth,async(_0xa7d3a9,_0x2f8f40)=>{const _0x46c2d1=a0_0x1c51d9;try{const {username:_0xb1cc3d,email:_0x5dbc19,role:_0x44e5cc}=_0xa7d3a9[_0x46c2d1(0xdd)],_0x515b6d=_0xa7d3a9['user'],_0x805ff=await profile[_0x46c2d1(0xe4)]({'email':_0x515b6d[_0x46c2d1(0xdc)]}),_0x523d87=await master_shop[_0x46c2d1(0xe3)]();console['log'](_0x46c2d1(0xb9),_0x523d87);const _0x5e82eb=await email_settings[_0x46c2d1(0xe4)]();console[_0x46c2d1(0xd6)]('master\x20settings\x20email_data',_0x5e82eb);if(_0x523d87[0x0]['language']==_0x46c2d1(0xed)){var _0x50b8db=users[_0x46c2d1(0xf5)];console[_0x46c2d1(0xd6)](_0x50b8db);}else{if(_0x523d87[0x0][_0x46c2d1(0xeb)]==_0x46c2d1(0xe2))var _0x50b8db=users[_0x46c2d1(0xe2)];else{if(_0x523d87[0x0][_0x46c2d1(0xeb)]==_0x46c2d1(0xc8))var _0x50b8db=users[_0x46c2d1(0xc8)];else{if(_0x523d87[0x0][_0x46c2d1(0xeb)]==_0x46c2d1(0xe1))var _0x50b8db=users[_0x46c2d1(0xe1)];else{if(_0x523d87[0x0]['language']==_0x46c2d1(0xcc))var _0x50b8db=users['French'];else{if(_0x523d87[0x0][_0x46c2d1(0xeb)]==_0x46c2d1(0xbb))var _0x50b8db=users['Portuguese'];else{if(_0x523d87[0x0][_0x46c2d1(0xeb)]=='Chinese')var _0x50b8db=users[_0x46c2d1(0xf2)];else{if(_0x523d87[0x0][_0x46c2d1(0xeb)]==_0x46c2d1(0xf0))var _0x50b8db=users[_0x46c2d1(0xca)];}}}}}}}_0x2f8f40['render'](_0x46c2d1(0xe8),{'success':_0xa7d3a9[_0x46c2d1(0xc0)]('success'),'errors':_0xa7d3a9[_0x46c2d1(0xc0)](_0x46c2d1(0xe6)),'role':_0x515b6d,'profile':_0x805ff,'master_shop':_0x523d87,'email':_0x5e82eb,'language':_0x50b8db});}catch(_0x3a60f4){console[_0x46c2d1(0xd6)](_0x3a60f4);}}),router[a0_0x1c51d9(0xd3)](a0_0x1c51d9(0xc3),auth,async(_0x3af332,_0x59f7d2)=>{const _0x1dffb8=a0_0x1c51d9;try{const {host:_0x57629a,port:_0x76e36a,email:_0xc54e5d,password:_0xde1793}=_0x3af332[_0x1dffb8(0xc2)],_0x40175e=await email_settings[_0x1dffb8(0xe4)]();if(_0x40175e==null){const _0x1838d3=new email_settings({'host':_0x57629a,'port':_0x76e36a,'email':_0xc54e5d,'password':_0xde1793});await _0x1838d3[_0x1dffb8(0xb3)]();}else _0x40175e[_0x1dffb8(0xf7)]=_0x57629a,_0x40175e['port']=_0x76e36a,_0x40175e[_0x1dffb8(0xdc)]=_0xc54e5d,_0x40175e[_0x1dffb8(0xd5)]=_0xde1793,await _0x40175e[_0x1dffb8(0xb3)]();_0x3af332[_0x1dffb8(0xc0)](_0x1dffb8(0xd9),'shop\x20setting\x20edit\x20successfully'),_0x59f7d2['redirect'](_0x1dffb8(0xf3));}catch(_0x5b3eec){console[_0x1dffb8(0xd6)](_0x5b3eec);}}),router[a0_0x1c51d9(0xcf)](a0_0x1c51d9(0xbf),auth,async(_0x54683e,_0x2f4b54)=>{const _0x196bb1=a0_0x1c51d9;try{const {username:_0xdacb83,email:_0x38413e,role:_0x486856}=_0x54683e[_0x196bb1(0xdd)],_0x56de5a=_0x54683e[_0x196bb1(0xdd)],_0x4349b7=await supervisor_settings[_0x196bb1(0xe3)](),_0x423bbc=await profile[_0x196bb1(0xe4)]({'email':_0x56de5a[_0x196bb1(0xdc)]}),_0x193789=await master_shop[_0x196bb1(0xe3)](),_0x1859d5=new Date()[_0x196bb1(0xdf)](_0x196bb1(0xd1),{'timeZone':_0x193789[0x0][_0x196bb1(0xec)]});console[_0x196bb1(0xd6)](_0x196bb1(0xec),_0x1859d5);if(_0x193789[0x0][_0x196bb1(0xeb)]=='English\x20(US)'){var _0x56d2cc=users[_0x196bb1(0xf5)];console[_0x196bb1(0xd6)](_0x56d2cc);}else{if(_0x193789[0x0][_0x196bb1(0xeb)]==_0x196bb1(0xe2))var _0x56d2cc=users['Hindi'];else{if(_0x193789[0x0][_0x196bb1(0xeb)]=='German')var _0x56d2cc=users[_0x196bb1(0xc8)];else{if(_0x193789[0x0][_0x196bb1(0xeb)]=='Spanish')var _0x56d2cc=users['Spanish'];else{if(_0x193789[0x0][_0x196bb1(0xeb)]==_0x196bb1(0xcc))var _0x56d2cc=users[_0x196bb1(0xcc)];else{if(_0x193789[0x0][_0x196bb1(0xeb)]=='Portuguese\x20(BR)')var _0x56d2cc=users[_0x196bb1(0xb2)];else{if(_0x193789[0x0][_0x196bb1(0xeb)]=='Chinese')var _0x56d2cc=users['Chinese'];else{if(_0x193789[0x0][_0x196bb1(0xeb)]==_0x196bb1(0xf0))var _0x56d2cc=users[_0x196bb1(0xca)];}}}}}}}_0x2f4b54[_0x196bb1(0xce)](_0x196bb1(0xef),{'success':_0x54683e[_0x196bb1(0xc0)](_0x196bb1(0xd9)),'errors':_0x54683e['flash'](_0x196bb1(0xe6)),'role':_0x56de5a,'profile':_0x423bbc,'master_shop':_0x193789,'supervisor_data':_0x4349b7[0x0],'timezones':timezones,'language':_0x56d2cc});}catch(_0x3b2669){console[_0x196bb1(0xd6)](_0x3b2669);}}),router[a0_0x1c51d9(0xd3)](a0_0x1c51d9(0xbc),auth,async(_0x127391,_0x3f2cb8)=>{const _0x3bcf84=a0_0x1c51d9;try{const {rm_name:_0x341a13,rm_email:_0x1d953b,rm_mobilenum:_0x1bb050}=_0x127391[_0x3bcf84(0xc2)],_0x58af6c=await supervisor_settings[_0x3bcf84(0xe4)]();if(_0x58af6c==null){const _0x433fd8=new supervisor_settings({'RMSName':_0x341a13,'RMSEmail':_0x1d953b,'RMSnumber':_0x1bb050});await _0x433fd8['save']();}else _0x58af6c[_0x3bcf84(0xc9)]=_0x341a13,_0x58af6c[_0x3bcf84(0xe0)]=_0x1d953b,_0x58af6c['RMSnumber']=_0x1bb050,await _0x58af6c[_0x3bcf84(0xb3)]();_0x127391[_0x3bcf84(0xc0)](_0x3bcf84(0xd9),_0x3bcf84(0xc4)),_0x3f2cb8[_0x3bcf84(0xdb)]('/master_shop/view/supervisors');}catch(_0x21428b){console['log'](_0x21428b);}}),module[a0_0x1c51d9(0xd4)]=router;