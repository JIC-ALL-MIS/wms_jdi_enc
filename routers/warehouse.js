function a0_0x2db8(){const _0x53c22a=['40XbTtbj','1533UGHfKH','Spanish','5sjliub','290yzXBtC','Arabic\x20(ae)','exports','../middleware/auth','English','express','Router','success','name','Hindi','errors','master','findOne','Chinese','../public/language/languages.json','Portuguese','email','get','findById','Ambient','Portuguese\x20(BR)','flash','2059263WsJQoP','3743621jzXpMu','redirect','28259aviFnh','201972XtksXm','8RSWVaK','body','params','German','English\x20(US)','address','412YWJbpH','\x20warehouse\x20is\x20alredy\x20added.\x20please\x20choose\x20another','edit\x20warehouse\x20warehouse_data','language','save','2743GHOHci','/view/:id','Arabic','log','\x20warehouse\x20is\x20add\x20successfully','edit\x20warehouse\x20purchases_data','warehouse','3861192VqQISg','warehouse\x20data\x20update\x20successfully','/view','render','find','edit\x20warehouse\x20data','room','French'];a0_0x2db8=function(){return _0x53c22a;};return a0_0x2db8();}function a0_0x5b87(_0xd9b45f,_0xdb027a){const _0x2db865=a0_0x2db8();return a0_0x5b87=function(_0x5b8745,_0x5e649d){_0x5b8745=_0x5b8745-0xd3;let _0x282943=_0x2db865[_0x5b8745];return _0x282943;},a0_0x5b87(_0xd9b45f,_0xdb027a);}const a0_0x3b78b0=a0_0x5b87;(function(_0x366a5d,_0x308c13){const _0x9e85e5=a0_0x5b87,_0x1d47f0=_0x366a5d();while(!![]){try{const _0x27a6d7=-parseInt(_0x9e85e5(0xd9))/0x1*(-parseInt(_0x9e85e5(0xd4))/0x2)+-parseInt(_0x9e85e5(0xe9))/0x3*(parseInt(_0x9e85e5(0xe8))/0x4)+-parseInt(_0x9e85e5(0xeb))/0x5*(-parseInt(_0x9e85e5(0xe0))/0x6)+parseInt(_0x9e85e5(0x103))/0x7*(-parseInt(_0x9e85e5(0x107))/0x8)+-parseInt(_0x9e85e5(0x102))/0x9+-parseInt(_0x9e85e5(0xec))/0xa*(parseInt(_0x9e85e5(0x105))/0xb)+parseInt(_0x9e85e5(0x106))/0xc;if(_0x27a6d7===_0x308c13)break;else _0x1d47f0['push'](_0x1d47f0['shift']());}catch(_0x48e89a){_0x1d47f0['push'](_0x1d47f0['shift']());}}}(a0_0x2db8,0x5d4f8));const express=require(a0_0x3b78b0(0xf1)),app=express(),router=express[a0_0x3b78b0(0xf2)](),{profile,master_shop,categories,brands,units,product,warehouse,purchases}=require('../models/all_models'),auth=require(a0_0x3b78b0(0xef)),users=require(a0_0x3b78b0(0xfa));router[a0_0x3b78b0(0xfd)](a0_0x3b78b0(0xe2),auth,async(_0x80d1f,_0x3ba9dc)=>{const _0x1d73d1=a0_0x3b78b0;try{const {username:_0x1a55b0,email:_0x46ac39,role:_0x58c8a6}=_0x80d1f['user'],_0x1b1bc3=_0x80d1f['user'],_0x13309f=await profile['findOne']({'email':_0x1b1bc3[_0x1d73d1(0xfc)]}),_0x499316=await master_shop['find']();console[_0x1d73d1(0xdc)]('master',_0x499316);const _0x10a258=await warehouse['find']();var _0xca5dfc=[_0x1d73d1(0xff),'Enclosed'];if(_0x499316[0x0]['language']==_0x1d73d1(0x10b)){var _0x4fb973=users[_0x1d73d1(0xf0)];console['log'](_0x4fb973);}else{if(_0x499316[0x0]['language']==_0x1d73d1(0xf5))var _0x4fb973=users[_0x1d73d1(0xf5)];else{if(_0x499316[0x0]['language']==_0x1d73d1(0x10a))var _0x4fb973=users[_0x1d73d1(0x10a)];else{if(_0x499316[0x0][_0x1d73d1(0xd7)]==_0x1d73d1(0xea))var _0x4fb973=users[_0x1d73d1(0xea)];else{if(_0x499316[0x0][_0x1d73d1(0xd7)]==_0x1d73d1(0xe7))var _0x4fb973=users['French'];else{if(_0x499316[0x0][_0x1d73d1(0xd7)]==_0x1d73d1(0x100))var _0x4fb973=users['Portuguese'];else{if(_0x499316[0x0][_0x1d73d1(0xd7)]==_0x1d73d1(0xf9))var _0x4fb973=users[_0x1d73d1(0xf9)];else{if(_0x499316[0x0][_0x1d73d1(0xd7)]=='Arabic\x20(ae)')var _0x4fb973=users[_0x1d73d1(0xdb)];}}}}}}}_0x3ba9dc[_0x1d73d1(0xe3)](_0x1d73d1(0xdf),{'success':_0x80d1f[_0x1d73d1(0x101)]('success'),'errors':_0x80d1f[_0x1d73d1(0x101)]('errors'),'user':_0x10a258,'profile':_0x13309f,'master_shop':_0x499316,'role':_0x1b1bc3,'language':_0x4fb973,'rooms_data':_0xca5dfc});}catch(_0x5bb40e){console[_0x1d73d1(0xdc)](_0x5bb40e);}}),router['post'](a0_0x3b78b0(0xe2),auth,async(_0x20afc4,_0x35641b)=>{const _0x10d395=a0_0x3b78b0;try{const {name:_0x3da0c8,address:_0x32fc8b,status:_0x18e66d,Room_name:_0x4539e6}=_0x20afc4[_0x10d395(0x108)],_0x1ef742=new warehouse({'name':_0x3da0c8,'address':_0x32fc8b,'status':_0x18e66d,'room':_0x4539e6}),_0x49e770=await warehouse[_0x10d395(0xf8)]({'name':_0x3da0c8,'room':_0x4539e6});_0x49e770?_0x20afc4[_0x10d395(0x101)](_0x10d395(0xf6),_0x3da0c8+_0x10d395(0xd5)):_0x20afc4[_0x10d395(0x101)]('success',_0x3da0c8+_0x10d395(0xdd));const _0x27674a=await _0x1ef742[_0x10d395(0xd8)]();_0x35641b['redirect']('/warehouse/view');}catch(_0x5a5b9d){console[_0x10d395(0xdc)](_0x5a5b9d);}}),router[a0_0x3b78b0(0xfd)]('/view/:id',auth,async(_0x47ab1f,_0x27eb81)=>{const _0x14e10b=a0_0x3b78b0;try{const _0x36cd19=_0x47ab1f[_0x14e10b(0x109)]['id'],_0x53ce41=await master_shop[_0x14e10b(0xe4)]();console[_0x14e10b(0xdc)](_0x14e10b(0xf7),_0x53ce41);const _0x4b4ecf=await warehouse[_0x14e10b(0xfe)](_0x36cd19);if(_0x53ce41[0x0][_0x14e10b(0xd7)]==_0x14e10b(0x10b)){var _0x3937fa=users[_0x14e10b(0xf0)];console[_0x14e10b(0xdc)](_0x3937fa);}else{if(_0x53ce41[0x0][_0x14e10b(0xd7)]=='Hindi')var _0x3937fa=users['Hindi'];else{if(_0x53ce41[0x0][_0x14e10b(0xd7)]==_0x14e10b(0x10a))var _0x3937fa=users[_0x14e10b(0x10a)];else{if(_0x53ce41[0x0]['language']==_0x14e10b(0xea))var _0x3937fa=users[_0x14e10b(0xea)];else{if(_0x53ce41[0x0]['language']=='French')var _0x3937fa=users[_0x14e10b(0xe7)];else{if(_0x53ce41[0x0][_0x14e10b(0xd7)]==_0x14e10b(0x100))var _0x3937fa=users[_0x14e10b(0xfb)];else{if(_0x53ce41[0x0]['language']=='Chinese')var _0x3937fa=users[_0x14e10b(0xf9)];else{if(_0x53ce41[0x0][_0x14e10b(0xd7)]==_0x14e10b(0xed))var _0x3937fa=users[_0x14e10b(0xdb)];}}}}}}}_0x27eb81['render'](_0x14e10b(0xdf),{'success':_0x47ab1f['flash'](_0x14e10b(0xf3)),'errors':_0x47ab1f[_0x14e10b(0x101)](_0x14e10b(0xf6)),'master_shop':_0x53ce41,'user':_0x4b4ecf,'language':_0x3937fa});}catch(_0x1a6756){console[_0x14e10b(0xdc)](_0x1a6756);}}),router['post'](a0_0x3b78b0(0xda),auth,async(_0x1aba9c,_0x29f7a9)=>{const _0x1a8c8a=a0_0x3b78b0;try{const _0x4a66ea=_0x1aba9c[_0x1a8c8a(0x109)]['id'],_0x53228f=await warehouse[_0x1a8c8a(0xfe)](_0x4a66ea);console[_0x1a8c8a(0xdc)](_0x1a8c8a(0xe5),_0x53228f[_0x1a8c8a(0xf4)]);const {name:_0x13bf36,address:_0x39f533,status:_0x42f5f4,Room_name:_0x1b19a7}=_0x1aba9c['body'],_0x255940=await warehouse[_0x1a8c8a(0xfe)](_0x4a66ea);console[_0x1a8c8a(0xdc)](_0x1a8c8a(0xd6),_0x255940);const _0x3842cc=await purchases[_0x1a8c8a(0xe4)]({'warehouse_name':_0x53228f[_0x1a8c8a(0xf4)],'room':_0x1b19a7});console[_0x1a8c8a(0xdc)](_0x1a8c8a(0xde),_0x3842cc),_0x53228f[_0x1a8c8a(0xf4)]=_0x13bf36,_0x53228f[_0x1a8c8a(0xd3)]=_0x39f533,_0x53228f['status']=_0x42f5f4,_0x53228f[_0x1a8c8a(0xe6)]=_0x1b19a7;const _0x4b1a29=await _0x53228f[_0x1a8c8a(0xd8)]();_0x1aba9c[_0x1a8c8a(0x101)](_0x1a8c8a(0xf3),_0x1a8c8a(0xe1)),_0x29f7a9[_0x1a8c8a(0x104)]('/warehouse/view');}catch(_0x30f72a){console[_0x1a8c8a(0xdc)](_0x30f72a);}}),module[a0_0x3b78b0(0xee)]=router;