var a0_0x24a166=a0_0x1c67;(function(_0x3ec63b,_0x3489b3){var _0xa25bb3=a0_0x1c67,_0x72f5ef=_0x3ec63b();while(!![]){try{var _0x899ad9=-parseInt(_0xa25bb3(0xda))/0x1*(-parseInt(_0xa25bb3(0xbd))/0x2)+-parseInt(_0xa25bb3(0xd2))/0x3*(parseInt(_0xa25bb3(0xd3))/0x4)+parseInt(_0xa25bb3(0xb0))/0x5*(parseInt(_0xa25bb3(0x9b))/0x6)+-parseInt(_0xa25bb3(0xa2))/0x7+parseInt(_0xa25bb3(0xa6))/0x8*(parseInt(_0xa25bb3(0xcb))/0x9)+-parseInt(_0xa25bb3(0xc5))/0xa*(-parseInt(_0xa25bb3(0xc9))/0xb)+-parseInt(_0xa25bb3(0xf7))/0xc*(parseInt(_0xa25bb3(0xba))/0xd);if(_0x899ad9===_0x3489b3)break;else _0x72f5ef['push'](_0x72f5ef['shift']());}catch(_0x3e7005){_0x72f5ef['push'](_0x72f5ef['shift']());}}}(a0_0x407e,0x60713));const express=require(a0_0x24a166(0xdd)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data,sales_return_finished}=require('../models/all_models'),auth=require(a0_0x24a166(0xb8)),users=require(a0_0x24a166(0x88));router[a0_0x24a166(0xd6)]('/view',auth,async(_0x565b61,_0x16c5c6)=>{var _0x586713=a0_0x24a166;try{const {username:_0x3ea92a,email:_0x7814c7,role:_0x23f6be}=_0x565b61[_0x586713(0x9e)],_0x1b5013=_0x565b61[_0x586713(0x9e)],_0x20fbdc=await profile[_0x586713(0xf4)]({'email':_0x1b5013[_0x586713(0xbb)]}),_0xfe7613=await master_shop[_0x586713(0xb3)](),_0x2566c0=await sales_return_finished[_0x586713(0xe9)]([{'$lookup':{'from':_0x586713(0xc6),'localField':'customer','foreignField':'name','as':_0x586713(0x86)}},{'$unwind':_0x586713(0x81)}]);if(_0xfe7613[0x0][_0x586713(0xd4)]==_0x586713(0xe2)){var _0x285430=users[_0x586713(0xc4)];console[_0x586713(0x94)](_0x285430);}else{if(_0xfe7613[0x0][_0x586713(0xd4)]==_0x586713(0xe5))var _0x285430=users['Hindi'];else{if(_0xfe7613[0x0][_0x586713(0xd4)]==_0x586713(0xeb))var _0x285430=users[_0x586713(0xeb)];else{if(_0xfe7613[0x0]['language']==_0x586713(0xab))var _0x285430=users[_0x586713(0xab)];else{if(_0xfe7613[0x0]['language']==_0x586713(0xea))var _0x285430=users[_0x586713(0xea)];else{if(_0xfe7613[0x0][_0x586713(0xd4)]==_0x586713(0xf5))var _0x285430=users[_0x586713(0x8c)];else{if(_0xfe7613[0x0][_0x586713(0xd4)]==_0x586713(0xcf))var _0x285430=users[_0x586713(0xcf)];else{if(_0xfe7613[0x0]['language']==_0x586713(0xf8))var _0x285430=users[_0x586713(0xde)];}}}}}}}_0x16c5c6['render'](_0x586713(0xad),{'success':_0x565b61[_0x586713(0xb9)](_0x586713(0xc2)),'errors':_0x565b61[_0x586713(0xb9)](_0x586713(0x91)),'role':_0x1b5013,'profile':_0x20fbdc,'master_shop':_0xfe7613,'user':_0x2566c0,'language':_0x285430});}catch(_0x585042){console[_0x586713(0x94)](_0x585042);}}),router['get'](a0_0x24a166(0x83),auth,async(_0xd1c07c,_0x5aa323)=>{var _0x5152f5=a0_0x24a166;try{const {username:_0x178fb5,email:_0x2d3577,role:_0x5779be}=_0xd1c07c[_0x5152f5(0x9e)],_0x200d5a=_0xd1c07c['user'],_0x5343af=await profile[_0x5152f5(0xf4)]({'email':_0x200d5a[_0x5152f5(0xbb)]}),_0x473c95=await master_shop['find']();console[_0x5152f5(0x94)](_0x5152f5(0xf6),_0x473c95);const _0x399dd3=_0xd1c07c['params']['id'];console[_0x5152f5(0x94)](_0x399dd3);var _0x3bf363=[_0x5152f5(0x95)];const _0x358424=await sales_return_finished['findById'](_0x399dd3),_0x1817ec=await warehouse[_0x5152f5(0xe9)]([{'$match':{'name':_0x358424[_0x5152f5(0xe7)],'room':_0x358424[_0x5152f5(0x82)]}},{'$unwind':_0x5152f5(0x98)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x5152f5(0xcd)},'product_stock':{'$first':_0x5152f5(0x92)},'bay':{'$first':_0x5152f5(0xb1)},'bin':{'$first':_0x5152f5(0xe6)},'type':{'$first':_0x5152f5(0xe0)},'floorlevel':{'$first':_0x5152f5(0xa4)},'primary_code':{'$first':_0x5152f5(0x8d)},'secondary_code':{'$first':_0x5152f5(0x85)},'product_code':{'$first':_0x5152f5(0xe3)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x5152f5(0xa5)}}}]);console[_0x5152f5(0x94)](_0x1817ec);const _0x322630=await warehouse[_0x5152f5(0xe9)]([{'$match':{'status':'Enabled','warehouse_category':'Finished\x20Goods'}},{'$group':{'_id':_0x5152f5(0x99),'name':{'$first':_0x5152f5(0x99)}}},{'$sort':{'name':0x1}}]),_0x53900b=await warehouse[_0x5152f5(0xe9)]([{'$match':{'status':_0x5152f5(0x90),'name':'QA\x20Warehouse'}},{'$group':{'_id':_0x5152f5(0x99),'name':{'$first':_0x5152f5(0x99)}}},{'$sort':{'name':0x1}}]),_0x579690=await product[_0x5152f5(0xb3)]({});if(_0x473c95[0x0][_0x5152f5(0xd4)]==_0x5152f5(0xe2)){var _0xaff108=users[_0x5152f5(0xc4)];console[_0x5152f5(0x94)](_0xaff108);}else{if(_0x473c95[0x0][_0x5152f5(0xd4)]==_0x5152f5(0xe5))var _0xaff108=users[_0x5152f5(0xe5)];else{if(_0x473c95[0x0]['language']==_0x5152f5(0xeb))var _0xaff108=users[_0x5152f5(0xeb)];else{if(_0x473c95[0x0][_0x5152f5(0xd4)]==_0x5152f5(0xab))var _0xaff108=users['Spanish'];else{if(_0x473c95[0x0][_0x5152f5(0xd4)]==_0x5152f5(0xea))var _0xaff108=users[_0x5152f5(0xea)];else{if(_0x473c95[0x0][_0x5152f5(0xd4)]==_0x5152f5(0xf5))var _0xaff108=users[_0x5152f5(0x8c)];else{if(_0x473c95[0x0][_0x5152f5(0xd4)]==_0x5152f5(0xcf))var _0xaff108=users[_0x5152f5(0xcf)];else{if(_0x473c95[0x0][_0x5152f5(0xd4)]==_0x5152f5(0xf8))var _0xaff108=users[_0x5152f5(0xde)];}}}}}}}_0x5aa323[_0x5152f5(0xd7)](_0x5152f5(0xc3),{'success':_0xd1c07c[_0x5152f5(0xb9)](_0x5152f5(0xc2)),'errors':_0xd1c07c[_0x5152f5(0xb9)](_0x5152f5(0x91)),'role':_0x200d5a,'profile':_0x5343af,'master_shop':_0x473c95,'user':_0x358424,'stock':_0x1817ec,'unit':_0x579690,'language':_0xaff108,'warehouses':_0x322630,'rooms':_0x3bf363,'warehouse_QA':_0x53900b});}catch(_0x51da69){console[_0x5152f5(0x94)](_0x51da69);}}),router[a0_0x24a166(0xa3)](a0_0x24a166(0x83),auth,async(_0x5bb54d,_0x17723d)=>{var _0x372f56=a0_0x24a166;if(_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xb4)]=='QA')try{const _0x3f499d=_0x5bb54d[_0x372f56(0xf1)]['id'],_0x21bc01=await sales_return[_0x372f56(0xf4)]({'invoice':_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0x9f)]}),_0x3e7aae=await warehouse[_0x372f56(0xf4)]({'name':_0x21bc01[_0x372f56(0xe7)],'room':_0x21bc01[_0x372f56(0x82)]}),{invoice:_0x330087,customer:_0x9c7452,date:_0x1c263d,warehouse_name:_0x48da67,product_name:_0xfb3f8e,primary_code:_0x258918,secondary_code:_0x821759,product_code:_0x1acdfa,sales_quantity:_0x69ce4,stocks:_0x420c48,return_qty:_0x476db1,note:_0x4fce3c,to_warehouse_name_QA:_0x1178dc,to_Room_name_QA:_0x719ceb}=_0x5bb54d[_0x372f56(0xdf)];if(typeof product_name_QA==_0x372f56(0xef))var _0x488fd3=[_0x5bb54d['body']['product_name_QA']],_0x483c7a=[_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xee)]],_0x231f3a=[_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0x8b)]],_0x28c0a7=[_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0x84)]],_0x23332f=[_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0x89)]],_0x383ed6=[_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xbe)]],_0x5774cc=[_0x5bb54d[_0x372f56(0xdf)]['return_qty_QA']];else var _0x488fd3=[..._0x5bb54d['body'][_0x372f56(0x96)]],_0x483c7a=[..._0x5bb54d['body'][_0x372f56(0xee)]],_0x231f3a=[..._0x5bb54d['body'][_0x372f56(0x8b)]],_0x28c0a7=[..._0x5bb54d[_0x372f56(0xdf)][_0x372f56(0x84)]],_0x23332f=[..._0x5bb54d[_0x372f56(0xdf)][_0x372f56(0x89)]],_0x383ed6=[..._0x5bb54d['body'][_0x372f56(0xbe)]],_0x5774cc=[..._0x5bb54d[_0x372f56(0xdf)]['return_qty_QA']];const _0x19e9cd=_0x488fd3[_0x372f56(0xaf)](_0x3a8985=>{return _0x3a8985={'product_name':_0x3a8985};});_0x483c7a[_0x372f56(0xe4)]((_0x7a11f3,_0x584d54)=>{_0x19e9cd[_0x584d54]['primary_code']=_0x7a11f3;}),_0x231f3a['forEach']((_0x227ae1,_0x3b31a4)=>{var _0x7fdc73=_0x372f56;_0x19e9cd[_0x3b31a4][_0x7fdc73(0xdc)]=_0x227ae1;}),_0x28c0a7['forEach']((_0x1beb53,_0x970a6e)=>{var _0x16c67e=_0x372f56;_0x19e9cd[_0x970a6e][_0x16c67e(0xf0)]=_0x1beb53;}),_0x23332f[_0x372f56(0xe4)]((_0x3d2d55,_0x966072)=>{var _0x3211f4=_0x372f56;_0x19e9cd[_0x966072][_0x3211f4(0xd0)]=_0x3d2d55;}),_0x383ed6[_0x372f56(0xe4)]((_0x126e8c,_0x4aefc3)=>{var _0x2c6930=_0x372f56;_0x19e9cd[_0x4aefc3][_0x2c6930(0xca)]=_0x126e8c;}),_0x5774cc[_0x372f56(0xe4)]((_0x61484e,_0x14038c)=>{var _0x28373f=_0x372f56;_0x19e9cd[_0x14038c][_0x28373f(0xd1)]=_0x61484e;}),_0x21bc01[_0x372f56(0x8a)][_0x372f56(0xe4)](_0x34db37=>{var _0x23f7be=_0x372f56;const _0x2c33d1=_0x3e7aae[_0x23f7be(0xec)][_0x23f7be(0xaf)](_0xe513f6=>{var _0x509ed7=_0x23f7be;_0xe513f6[_0x509ed7(0xc1)]==_0x34db37[_0x509ed7(0xc1)]&&(_0xe513f6[_0x509ed7(0xd8)]=parseInt(_0xe513f6[_0x509ed7(0xd8)])+parseInt(_0x34db37[_0x509ed7(0xd1)]));});}),await _0x3e7aae[_0x372f56(0x8f)](),_0x21bc01[_0x372f56(0x9f)]=_0x330087,_0x21bc01[_0x372f56(0xbc)]=_0x9c7452,_0x21bc01[_0x372f56(0xf2)]=_0x1c263d,_0x21bc01['warehouse_name']=_0x48da67,_0x21bc01[_0x372f56(0x8a)]=_0x19e9cd,_0x21bc01[_0x372f56(0x97)]=_0x4fce3c,_0x21bc01[_0x372f56(0xe7)]=_0x1178dc,_0x21bc01['ToRoom']=_0x719ceb;const _0x422eff=await _0x21bc01[_0x372f56(0x8f)](),_0x3128ec=await c_payment_data['findOne']({'invoice':_0x5bb54d['body']['invoice'],'reason':_0x372f56(0x80)});_0x3128ec[_0x372f56(0xc8)]=_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xc8)],_0x3128ec['date']=_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xf2)],await _0x3128ec[_0x372f56(0x8f)](),_0x5bb54d[_0x372f56(0xb9)]('success',_0x372f56(0xa1)),_0x17723d['redirect'](_0x372f56(0x9a));}catch(_0x1f8f6d){console[_0x372f56(0x94)](_0x1f8f6d),_0x17723d[_0x372f56(0xc0)](0xc8)[_0x372f56(0x9c)]({'message':_0x1f8f6d[_0x372f56(0xa9)]});}else try{const _0x4ca903=_0x5bb54d[_0x372f56(0xf1)]['id'];console[_0x372f56(0x94)](_0x4ca903);const _0x54f0ed=await sales_return['findOne']({'invoice':_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0x9f)]});console[_0x372f56(0x94)](_0x372f56(0xa0),_0x54f0ed);const _0x43dbc3=await warehouse[_0x372f56(0xf4)]({'name':_0x54f0ed[_0x372f56(0xe7)],'room':_0x54f0ed[_0x372f56(0x82)]});console[_0x372f56(0x94)]('old_warehouse_data',_0x43dbc3);const {invoice:_0x4bab91,customer:_0xfe6a50,date:_0x4afdb9,warehouse_name:_0x7b7a61,product_name:_0xe58209,primary_code:_0x4569c9,secondary_code:_0x2a0941,product_code:_0x3f3679,sales_quantity:_0x341793,stocks:_0x3ec352,return_qty:_0x403d45,note:_0x12355b,to_warehouse_name:_0x5c3e5c,to_Room_name:_0x89ee4}=_0x5bb54d[_0x372f56(0xdf)];console[_0x372f56(0x94)](_0x5bb54d[_0x372f56(0xdf)]);if(typeof _0xe58209==_0x372f56(0xef))var _0x488fd3=[_0x5bb54d['body'][_0x372f56(0xc1)]],_0x483c7a=[_0x5bb54d['body'][_0x372f56(0xed)]],_0x231f3a=[_0x5bb54d[_0x372f56(0xdf)]['secondary_code']],_0x28c0a7=[_0x5bb54d[_0x372f56(0xdf)]['product_code']],_0x23332f=[_0x5bb54d['body'][_0x372f56(0xaa)]],_0x383ed6=[_0x5bb54d[_0x372f56(0xdf)]['stocks']],_0x5774cc=[_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xd1)]],_0x51c78f=[_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0x9d)]],_0x5d59d7=[_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xd9)]],_0x5f4c83=[_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xa7)]],_0x484ae7=[_0x5bb54d['body']['floorlevel']];else var _0x488fd3=[..._0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xc1)]],_0x483c7a=[..._0x5bb54d[_0x372f56(0xdf)]['primary_code']],_0x231f3a=[..._0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xdc)]],_0x28c0a7=[..._0x5bb54d['body'][_0x372f56(0xf0)]],_0x23332f=[..._0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xaa)]],_0x383ed6=[..._0x5bb54d[_0x372f56(0xdf)][_0x372f56(0x93)]],_0x5774cc=[..._0x5bb54d['body']['return_qty']],_0x51c78f=[..._0x5bb54d[_0x372f56(0xdf)]['bay']],_0x5d59d7=[..._0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xd9)]],_0x5f4c83=[..._0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xa7)]],_0x484ae7=[..._0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xf3)]];const _0x4d0e65=_0x488fd3['map'](_0x3e67fe=>{return _0x3e67fe={'product_name':_0x3e67fe};});_0x483c7a[_0x372f56(0xe4)]((_0x22a497,_0x19e389)=>{var _0x373e62=_0x372f56;_0x4d0e65[_0x19e389][_0x373e62(0xed)]=_0x22a497;}),_0x231f3a[_0x372f56(0xe4)]((_0x400625,_0x1cb15a)=>{var _0x2c324a=_0x372f56;_0x4d0e65[_0x1cb15a][_0x2c324a(0xdc)]=_0x400625;}),_0x28c0a7[_0x372f56(0xe4)]((_0x272efa,_0x18d8ca)=>{var _0x52684c=_0x372f56;_0x4d0e65[_0x18d8ca][_0x52684c(0xf0)]=_0x272efa;}),_0x23332f[_0x372f56(0xe4)]((_0x19d22c,_0x435a3e)=>{_0x4d0e65[_0x435a3e]['sale_qty']=_0x19d22c;}),_0x383ed6[_0x372f56(0xe4)]((_0x6eef58,_0x2344cf)=>{_0x4d0e65[_0x2344cf]['stock']=_0x6eef58;}),_0x5774cc['forEach']((_0x488379,_0x2f3a08)=>{var _0x3d2d2e=_0x372f56;_0x4d0e65[_0x2f3a08][_0x3d2d2e(0xd1)]=_0x488379;}),_0x51c78f[_0x372f56(0xe4)]((_0x217c0f,_0x24e0bc)=>{_0x4d0e65[_0x24e0bc]['bay']=_0x217c0f;}),_0x5d59d7[_0x372f56(0xe4)]((_0x272398,_0x4eecfc)=>{var _0x3b4bdc=_0x372f56;_0x4d0e65[_0x4eecfc][_0x3b4bdc(0xd9)]=_0x272398;}),_0x5f4c83[_0x372f56(0xe4)]((_0x24015e,_0x97f9c)=>{var _0x4550bb=_0x372f56;_0x4d0e65[_0x97f9c][_0x4550bb(0xd5)]=_0x24015e;}),_0x484ae7[_0x372f56(0xe4)]((_0x43ce75,_0x35efcc)=>{var _0x59d25f=_0x372f56;_0x4d0e65[_0x35efcc][_0x59d25f(0xf3)]=_0x43ce75;});var _0x12f757=0x0;_0x4d0e65['forEach'](_0x2baf18=>{var _0x3d55d5=_0x372f56;console[_0x3d55d5(0x94)](_0x3d55d5(0xb2),_0x2baf18),(parseInt(_0x2baf18['sale_qty'])<parseInt(_0x2baf18[_0x3d55d5(0xd1)])||parseInt(_0x2baf18[_0x3d55d5(0xca)])<parseInt(_0x2baf18[_0x3d55d5(0xd1)])&&parseInt(_0x2baf18[_0x3d55d5(0xd0)])>parseInt(_0x2baf18[_0x3d55d5(0xd1)])||parseInt(_0x2baf18[_0x3d55d5(0xd1)])==0x0)&&_0x12f757++;});if(_0x12f757!=0x0)return _0x5bb54d[_0x372f56(0xb9)](_0x372f56(0x91),_0x372f56(0xb6)),_0x17723d[_0x372f56(0x7f)](_0x372f56(0xce));_0x54f0ed['return_sale'][_0x372f56(0xe4)](_0x328081=>{var _0x5836e7=_0x372f56;const _0x3737e3=_0x43dbc3['product_details'][_0x5836e7(0xaf)](_0xbaa8f=>{var _0x153be3=_0x5836e7;_0xbaa8f[_0x153be3(0xc1)]==_0x328081[_0x153be3(0xc1)]&&_0xbaa8f[_0x153be3(0xf3)]==_0x328081[_0x153be3(0xf3)]&&_0xbaa8f[_0x153be3(0xd5)]==_0x328081[_0x153be3(0xd5)]&&_0xbaa8f[_0x153be3(0xd9)]==_0x328081[_0x153be3(0xd9)]&&_0xbaa8f[_0x153be3(0x9d)]==_0x328081[_0x153be3(0x9d)]&&(_0xbaa8f[_0x153be3(0xd8)]=parseInt(_0xbaa8f[_0x153be3(0xd8)])+parseInt(_0x328081[_0x153be3(0xd1)]));});}),console[_0x372f56(0x94)](_0x372f56(0xe1),_0x43dbc3),await _0x43dbc3['save'](),_0x54f0ed[_0x372f56(0x9f)]=_0x4bab91,_0x54f0ed[_0x372f56(0xbc)]=_0xfe6a50,_0x54f0ed['date']=_0x4afdb9,_0x54f0ed['warehouse_name']=_0x7b7a61,_0x54f0ed[_0x372f56(0xcc)]=_0x4d0e65,_0x54f0ed[_0x372f56(0x97)]=_0x12355b,_0x54f0ed[_0x372f56(0xe7)]=_0x5c3e5c,_0x54f0ed['ToRoom']=_0x89ee4;const _0xfe1779=await _0x54f0ed[_0x372f56(0x8f)]();console[_0x372f56(0x94)](_0x372f56(0xf9),_0xfe1779);const _0x3edde2=await c_payment_data[_0x372f56(0xf4)]({'invoice':_0x5bb54d[_0x372f56(0xdf)]['invoice'],'reason':_0x372f56(0x80)});_0x3edde2[_0x372f56(0xc8)]=_0x5bb54d[_0x372f56(0xdf)][_0x372f56(0xc8)],_0x3edde2[_0x372f56(0xf2)]=_0x5bb54d['body'][_0x372f56(0xf2)],await _0x3edde2[_0x372f56(0x8f)](),_0x5bb54d[_0x372f56(0xb9)](_0x372f56(0xc2),'purchase\x20return\x20successfully'),_0x17723d['redirect'](_0x372f56(0x87));}catch(_0x3532b6){console[_0x372f56(0x94)](_0x3532b6),_0x17723d['status'](0xc8)['json']({'message':_0x3532b6['message']});}}),router['post']('/give_payment/:id',auth,async(_0x304fb8,_0x5647d2)=>{var _0x24e409=a0_0x24a166;try{const _0x173d1b=_0x304fb8[_0x24e409(0xf1)]['id'],{invoice:_0xe2d62a,customer:_0x4b6bcf,payable_to_customer:_0x1dec44,paid_amount:_0x406b68}=_0x304fb8[_0x24e409(0xdf)],_0x48ba9c=await sales_return[_0x24e409(0x8e)](_0x173d1b);console['log'](_0x24e409(0xc7),_0x48ba9c),console['log'](_0x1dec44),console[_0x24e409(0x94)](_0x406b68);var _0x2e68b9=_0x1dec44-_0x406b68;console['log'](_0x24e409(0xb7),_0x2e68b9),_0x48ba9c[_0x24e409(0xe8)]=parseFloat(_0x406b68)+parseFloat(_0x48ba9c[_0x24e409(0xe8)]),_0x48ba9c[_0x24e409(0xdb)]=_0x2e68b9,console['log'](_0x48ba9c);const _0x319584=await _0x48ba9c[_0x24e409(0x8f)]();console['log'](0x1b207);const _0x1f03de=await c_payment_data[_0x24e409(0xf4)]({'invoice':_0x304fb8[_0x24e409(0xdf)][_0x24e409(0x9f)],'reason':_0x24e409(0x80)});console['log']('c_payment',_0x1f03de),_0x1f03de['amount']=_0x2e68b9,await _0x1f03de[_0x24e409(0x8f)]();let _0x3e178c=new Date(),_0x578e88=('0'+_0x3e178c['getDate']())['slice'](-0x2),_0x3a3233=('0'+(_0x3e178c[_0x24e409(0xac)]()+0x1))[_0x24e409(0xb5)](-0x2),_0x19618b=_0x3e178c[_0x24e409(0xa8)](),_0xc720e5=_0x19618b+'-'+_0x3a3233+'-'+_0x578e88;const _0x471b29=new customer_payment({'invoice':_0xe2d62a,'date':_0x19618b+'-'+_0x3a3233+'-'+_0x578e88,'customer':_0x4b6bcf,'reason':'Returned\x20Payment\x20For\x20Sale\x20Return','amount':_0x406b68}),_0x4e6b7a=await _0x471b29[_0x24e409(0x8f)]();_0x304fb8[_0x24e409(0xb9)]('success','payment\x20successfull'),_0x5647d2[_0x24e409(0x7f)](_0x24e409(0x87));}catch(_0x2a1cfe){console[_0x24e409(0x94)](_0x2a1cfe);}}),router['get'](a0_0x24a166(0xae),auth,async(_0x19dbed,_0x1ab670)=>{var _0x15acef=a0_0x24a166;try{const {username:_0x307416,email:_0x5a5756,role:_0x3a0d51}=_0x19dbed[_0x15acef(0x9e)],_0x4ca0c1=_0x19dbed['user'],_0x459cec=await profile[_0x15acef(0xf4)]({'email':_0x4ca0c1[_0x15acef(0xbb)]}),_0x48e9ac=await master_shop[_0x15acef(0xb3)]();console[_0x15acef(0x94)]('master',_0x48e9ac);const _0x1d3c4f=_0x19dbed['params']['id'],_0x5bbefd=await sales_return[_0x15acef(0x8e)](_0x1d3c4f);console[_0x15acef(0x94)](_0x5bbefd);const _0x563495=await customer[_0x15acef(0xf4)]({'name':_0x5bbefd[_0x15acef(0xbc)]});console[_0x15acef(0x94)](_0x563495);if(_0x48e9ac[0x0]['language']=='English\x20(US)'){var _0x51a8f4=users['English'];console[_0x15acef(0x94)](_0x51a8f4);}else{if(_0x48e9ac[0x0][_0x15acef(0xd4)]==_0x15acef(0xe5))var _0x51a8f4=users[_0x15acef(0xe5)];else{if(_0x48e9ac[0x0][_0x15acef(0xd4)]==_0x15acef(0xeb))var _0x51a8f4=users['German'];else{if(_0x48e9ac[0x0][_0x15acef(0xd4)]==_0x15acef(0xab))var _0x51a8f4=users[_0x15acef(0xab)];else{if(_0x48e9ac[0x0]['language']==_0x15acef(0xea))var _0x51a8f4=users[_0x15acef(0xea)];else{if(_0x48e9ac[0x0][_0x15acef(0xd4)]==_0x15acef(0xf5))var _0x51a8f4=users[_0x15acef(0x8c)];else{if(_0x48e9ac[0x0][_0x15acef(0xd4)]==_0x15acef(0xcf))var _0x51a8f4=users['Chinese'];else{if(_0x48e9ac[0x0][_0x15acef(0xd4)]==_0x15acef(0xf8))var _0x51a8f4=users[_0x15acef(0xde)];}}}}}}}_0x1ab670[_0x15acef(0xd7)]('sales_return_invoice',{'success':_0x19dbed['flash'](_0x15acef(0xc2)),'errors':_0x19dbed[_0x15acef(0xb9)](_0x15acef(0x91)),'role':_0x4ca0c1,'profile':_0x459cec,'master_shop':_0x48e9ac,'customers':_0x563495,'sales':_0x5bbefd,'language':_0x51a8f4});}catch(_0x5ee9ec){console[_0x15acef(0x94)](_0x5ee9ec);}}),module[a0_0x24a166(0xbf)]=router;function a0_0x1c67(_0x15d2ee,_0x5712f2){var _0x407e2c=a0_0x407e();return a0_0x1c67=function(_0x1c6737,_0x559d47){_0x1c6737=_0x1c6737-0x7f;var _0x559aeb=_0x407e2c[_0x1c6737];return _0x559aeb;},a0_0x1c67(_0x15d2ee,_0x5712f2);}function a0_0x407e(){var _0x457c66=['json','bay','user','invoice','old_data','purchase\x20return\x20successfully','3130190iDJtOw','post','$product_details.floorlevel','$product_details.rack','21136NcdnrF','types','getFullYear','message','sales_quantity','Spanish','getMonth','sales_return_finished','/invoice/:id','map','190765wPXsMI','$product_details.bay','foreach\x20newproduct','find','for_categorize','slice','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','subtract','../middleware/auth','flash','627263fEfJjf','email','customer','1447222ACkuIN','stocks_QA','exports','status','product_name','success','return_sale_edit_finished','English','4780cZUhsn','customers','data','suppliers','16302DdXCPw','stock','576PClnUt','return_sale','$product_details.product_name','back','Chinese','sale_qty','return_qty','1462047QYINpz','4jWrkUl','language','type','get','render','product_stock','bin','1uTeghB','due_amount','secondary_code','express','Arabic','body','$product_details.type','old_warehouse_data','English\x20(US)','$product_details.product_code','forEach','Hindi','$product_details.bin','ToWarehouse','paid_amount','aggregate','French','German','product_details','primary_code','primary_code_QA','string','product_code','params','date','floorlevel','findOne','Portuguese\x20(BR)','master','96DqdwVw','Arabic\x20(ae)','new\x20new_data','redirect','Sale\x20Return','$customer_docs','ToRoom','/view/:id','product_code_QA','$product_details.secondary_code','customer_docs','/sales_return/view','../public/language/languages.json','sales_quantity_QA','return_sale_QA','secondary_code_QA','Portuguese','$product_details.primary_code','findById','save','Enabled','errors','$product_details.product_stock','stocks','log','Return\x20Rooms','product_name_QA','note','$product_details','$name','/sales_return_finished/view','18FaTQsc'];a0_0x407e=function(){return _0x457c66;};return a0_0x407e();}