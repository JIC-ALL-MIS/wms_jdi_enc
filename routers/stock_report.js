var a0_0x4e37ad=a0_0x576f;function a0_0x576f(_0x47d17e,_0x1da729){var _0x315981=a0_0x3159();return a0_0x576f=function(_0x576f1f,_0x1e948e){_0x576f1f=_0x576f1f-0xe5;var _0xb764fd=_0x315981[_0x576f1f];return _0xb764fd;},a0_0x576f(_0x47d17e,_0x1da729);}(function(_0x4c4f50,_0x180540){var _0x139737=a0_0x576f,_0x5148bf=_0x4c4f50();while(!![]){try{var _0x511230=parseInt(_0x139737(0xe7))/0x1*(parseInt(_0x139737(0xf7))/0x2)+-parseInt(_0x139737(0xfe))/0x3*(-parseInt(_0x139737(0x105))/0x4)+parseInt(_0x139737(0x11f))/0x5*(parseInt(_0x139737(0x108))/0x6)+-parseInt(_0x139737(0x10a))/0x7*(-parseInt(_0x139737(0xfb))/0x8)+parseInt(_0x139737(0x10e))/0x9+parseInt(_0x139737(0x119))/0xa*(parseInt(_0x139737(0xf1))/0xb)+-parseInt(_0x139737(0x114))/0xc;if(_0x511230===_0x180540)break;else _0x5148bf['push'](_0x5148bf['shift']());}catch(_0x5d2493){_0x5148bf['push'](_0x5148bf['shift']());}}}(a0_0x3159,0x500f5));const express=require(a0_0x4e37ad(0x115)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require(a0_0x4e37ad(0xf4)),auth=require(a0_0x4e37ad(0xe9)),users=require(a0_0x4e37ad(0xee));function a0_0x3159(){var _0x2d1659=['1309315vxAWnu','$product_docs.sku','exports','/Reports','5366286sxIcFZ','product_docs','render','/view/warehouse/:id','find','$product_details.product_stock','13637904WuBRiW','express','log','$product_docs.unit','$product_docs.category','140sYCWOc','params','$product_docs','$product_details','aggregate','Arabic','210fXSXlo','product_details.rak_name','stock_report','post','language','French','success','English','Portuguese\x20(BR)','flash','email','2IqwVpo','product_details.product_name','../middleware/auth','products','json','errors','name','../public/language/languages.json','Portuguese','/view/product/:id','219252tfOICT','/view/:id','role_data','../models/all_models','warehouse_data','German','46vkIuYf','findOne','Chinese','status','16sivDAE','get','English\x20(US)','5223hjtWxO','111','body','Hindi','master','warehouse','Arabic\x20(ae)','332WBtbjo','Spanish','user','10068rQbVsH','All'];a0_0x3159=function(){return _0x2d1659;};return a0_0x3159();}router['get']('/view',auth,async(_0x1886ec,_0x40c390)=>{var _0x3e0bb8=a0_0x4e37ad;try{const _0x3b4fe2=_0x1886ec[_0x3e0bb8(0x107)];console[_0x3e0bb8(0x116)](_0x3e0bb8(0xf3),_0x1886ec[_0x3e0bb8(0x107)]);const _0x3592d7=await profile['findOne']({'email':_0x3b4fe2[_0x3e0bb8(0xe6)]}),_0x3a2a31=await master_shop['find']();console['log'](_0x3e0bb8(0x102),_0x3a2a31);const _0x6f1e91=await warehouse[_0x3e0bb8(0x112)]({}),_0x656f4d=await product[_0x3e0bb8(0x112)]({});if(_0x3a2a31[0x0][_0x3e0bb8(0x123)]==_0x3e0bb8(0xfd)){var _0x393bb1=users[_0x3e0bb8(0x126)];console['log'](_0x393bb1);}else{if(_0x3a2a31[0x0]['language']==_0x3e0bb8(0x101))var _0x393bb1=users[_0x3e0bb8(0x101)];else{if(_0x3a2a31[0x0][_0x3e0bb8(0x123)]==_0x3e0bb8(0xf6))var _0x393bb1=users['German'];else{if(_0x3a2a31[0x0][_0x3e0bb8(0x123)]=='Spanish')var _0x393bb1=users[_0x3e0bb8(0x106)];else{if(_0x3a2a31[0x0][_0x3e0bb8(0x123)]==_0x3e0bb8(0x124))var _0x393bb1=users[_0x3e0bb8(0x124)];else{if(_0x3a2a31[0x0][_0x3e0bb8(0x123)]==_0x3e0bb8(0x127))var _0x393bb1=users[_0x3e0bb8(0xef)];else{if(_0x3a2a31[0x0][_0x3e0bb8(0x123)]==_0x3e0bb8(0xf9))var _0x393bb1=users[_0x3e0bb8(0xf9)];else{if(_0x3a2a31[0x0][_0x3e0bb8(0x123)]==_0x3e0bb8(0x104))var _0x393bb1=users[_0x3e0bb8(0x11e)];}}}}}}}_0x40c390[_0x3e0bb8(0x110)](_0x3e0bb8(0x121),{'success':_0x1886ec[_0x3e0bb8(0xe5)](_0x3e0bb8(0x125)),'errors':_0x1886ec[_0x3e0bb8(0xe5)](_0x3e0bb8(0xec)),'role':_0x3b4fe2,'profile':_0x3592d7,'master_shop':_0x3a2a31,'warehouse':_0x6f1e91,'product':_0x656f4d,'warehouse_doc':[],'product_doc':[],'language':_0x393bb1});}catch(_0x290a67){console[_0x3e0bb8(0x116)](_0x290a67);}}),router[a0_0x4e37ad(0xfc)](a0_0x4e37ad(0xf2),auth,async(_0x2d1b7e,_0x3a384b)=>{var _0x23bdee=a0_0x4e37ad;try{const _0x148a02=await master_shop[_0x23bdee(0x112)]();console[_0x23bdee(0x116)](_0x23bdee(0x102),_0x148a02);if(_0x2d1b7e['params']['id']=='warehouse'){const _0x43f8ff=await warehouse['find']();console[_0x23bdee(0x116)](_0x43f8ff);if(_0x148a02[0x0]['language']==_0x23bdee(0xfd)){var _0x53d3bb=users['English'];console[_0x23bdee(0x116)](_0x53d3bb);}else{if(_0x148a02[0x0]['language']==_0x23bdee(0x101))var _0x53d3bb=users['Hindi'];else{if(_0x148a02[0x0]['language']==_0x23bdee(0xf6))var _0x53d3bb=users[_0x23bdee(0xf6)];else{if(_0x148a02[0x0][_0x23bdee(0x123)]=='Spanish')var _0x53d3bb=users[_0x23bdee(0x106)];else{if(_0x148a02[0x0][_0x23bdee(0x123)]=='French')var _0x53d3bb=users[_0x23bdee(0x124)];else{if(_0x148a02[0x0][_0x23bdee(0x123)]==_0x23bdee(0x127))var _0x53d3bb=users['Portuguese'];else{if(_0x148a02[0x0][_0x23bdee(0x123)]==_0x23bdee(0xf9))var _0x53d3bb=users[_0x23bdee(0xf9)];else{if(_0x148a02[0x0]['language']==_0x23bdee(0x104))var _0x53d3bb=users[_0x23bdee(0x11e)];}}}}}}}_0x3a384b[_0x23bdee(0xfa)](0xc8)[_0x23bdee(0xeb)]({'data':_0x43f8ff,'language':_0x53d3bb[_0x23bdee(0x103)]});}else{const _0x912583=await product[_0x23bdee(0x112)]();console['log'](_0x23bdee(0xff),_0x912583);if(_0x148a02[0x0][_0x23bdee(0x123)]=='English\x20(US)'){var _0x53d3bb=users['English'];console[_0x23bdee(0x116)](_0x53d3bb);}else{if(_0x148a02[0x0][_0x23bdee(0x123)]=='Hindi')var _0x53d3bb=users['Hindi'];else{if(_0x148a02[0x0][_0x23bdee(0x123)]=='German')var _0x53d3bb=users[_0x23bdee(0xf6)];else{if(_0x148a02[0x0][_0x23bdee(0x123)]==_0x23bdee(0x106))var _0x53d3bb=users[_0x23bdee(0x106)];else{if(_0x148a02[0x0][_0x23bdee(0x123)]=='French')var _0x53d3bb=users[_0x23bdee(0x124)];else{if(_0x148a02[0x0][_0x23bdee(0x123)]==_0x23bdee(0x127))var _0x53d3bb=users[_0x23bdee(0xef)];else{if(_0x148a02[0x0][_0x23bdee(0x123)]=='Chinese')var _0x53d3bb=users['Chinese'];else{if(_0x148a02[0x0][_0x23bdee(0x123)]==_0x23bdee(0x104))var _0x53d3bb=users[_0x23bdee(0x11e)];}}}}}}}_0x3a384b[_0x23bdee(0xfa)](0xc8)[_0x23bdee(0xeb)]({'data':_0x912583,'language':_0x53d3bb[_0x23bdee(0xea)]});}}catch(_0x4fe6cc){console[_0x23bdee(0x116)](_0x4fe6cc);}}),router[a0_0x4e37ad(0xfc)](a0_0x4e37ad(0x111),auth,async(_0x49fa7f,_0x2088df)=>{var _0x161257=a0_0x4e37ad;try{const _0x2fece3=_0x49fa7f[_0x161257(0x11a)]['id'];console[_0x161257(0x116)](_0x2fece3);const _0x46c33d=await master_shop[_0x161257(0x112)]();console[_0x161257(0x116)](_0x161257(0x102),_0x46c33d);const _0x37a56b=await warehouse[_0x161257(0x11d)]([{'$match':{'name':_0x2fece3}},{'$unwind':_0x161257(0x11c)},{'$lookup':{'from':_0x161257(0xea),'localField':_0x161257(0xe8),'foreignField':_0x161257(0xed),'as':_0x161257(0x10f)}},{'$unwind':_0x161257(0x11b)},{'$project':{'name':0x1,'product_name':'$product_details.product_name','product_stock':_0x161257(0x113),'category':_0x161257(0x118),'brand':'$product_docs.brand','sku':_0x161257(0x10b),'unit':_0x161257(0x117),'rak':_0x161257(0x120),'bin':'product_details.bin_name'}}]);console[_0x161257(0x116)](_0x37a56b);if(_0x46c33d[0x0][_0x161257(0x123)]=='English\x20(US)'){var _0x275b19=users['English'];console[_0x161257(0x116)](_0x275b19);}else{if(_0x46c33d[0x0][_0x161257(0x123)]==_0x161257(0x101))var _0x275b19=users['Hindi'];else{if(_0x46c33d[0x0][_0x161257(0x123)]==_0x161257(0xf6))var _0x275b19=users['German'];else{if(_0x46c33d[0x0][_0x161257(0x123)]=='Spanish')var _0x275b19=users['Spanish'];else{if(_0x46c33d[0x0][_0x161257(0x123)]==_0x161257(0x124))var _0x275b19=users[_0x161257(0x124)];else{if(_0x46c33d[0x0][_0x161257(0x123)]=='Portuguese\x20(BR)')var _0x275b19=users[_0x161257(0xef)];else{if(_0x46c33d[0x0][_0x161257(0x123)]==_0x161257(0xf9))var _0x275b19=users[_0x161257(0xf9)];else{if(_0x46c33d[0x0][_0x161257(0x123)]==_0x161257(0x104))var _0x275b19=users['Arabic'];}}}}}}}_0x2088df['status'](0xc8)['json']({'data':_0x37a56b,'language':_0x275b19});}catch(_0x289c51){console['log'](_0x289c51);}}),router['get'](a0_0x4e37ad(0xf0),auth,async(_0x5651e4,_0x1548c1)=>{var _0x462c5c=a0_0x4e37ad;try{const _0x39f0d8=_0x5651e4['params']['id'];console[_0x462c5c(0x116)](_0x39f0d8);const _0x5765d4=await master_shop[_0x462c5c(0x112)]();console[_0x462c5c(0x116)](_0x462c5c(0x102),_0x5765d4);const _0x4f035a=await product[_0x462c5c(0xf8)]({'name':_0x39f0d8});console['log']('product_data',_0x4f035a);const _0x2e77bd=await warehouse['aggregate']([{'$unwind':_0x462c5c(0x11c)},{'$match':{'product_details.product_name':_0x39f0d8}},{'$project':{'name':0x1,'product_name':'$product_details.product_name','product_stock':'$product_details.product_stock'}}]);console[_0x462c5c(0x116)](_0x462c5c(0xf5),_0x2e77bd);if(_0x5765d4[0x0][_0x462c5c(0x123)]==_0x462c5c(0xfd)){var _0x296e35=users['English'];console[_0x462c5c(0x116)](_0x296e35);}else{if(_0x5765d4[0x0][_0x462c5c(0x123)]==_0x462c5c(0x101))var _0x296e35=users[_0x462c5c(0x101)];else{if(_0x5765d4[0x0][_0x462c5c(0x123)]==_0x462c5c(0xf6))var _0x296e35=users[_0x462c5c(0xf6)];else{if(_0x5765d4[0x0][_0x462c5c(0x123)]==_0x462c5c(0x106))var _0x296e35=users[_0x462c5c(0x106)];else{if(_0x5765d4[0x0][_0x462c5c(0x123)]==_0x462c5c(0x124))var _0x296e35=users[_0x462c5c(0x124)];else{if(_0x5765d4[0x0]['language']==_0x462c5c(0x127))var _0x296e35=users[_0x462c5c(0xef)];else{if(_0x5765d4[0x0][_0x462c5c(0x123)]==_0x462c5c(0xf9))var _0x296e35=users[_0x462c5c(0xf9)];else{if(_0x5765d4[0x0][_0x462c5c(0x123)]=='Arabic\x20(ae)')var _0x296e35=users[_0x462c5c(0x11e)];}}}}}}}_0x1548c1[_0x462c5c(0xfa)](0xc8)[_0x462c5c(0xeb)]({'product_data':_0x4f035a,'warehouse_data':_0x2e77bd,'language':_0x296e35});}catch(_0x442a7a){console[_0x462c5c(0x116)](_0x442a7a);}}),router[a0_0x4e37ad(0x122)](a0_0x4e37ad(0x10d),async(_0x340c12,_0x4f2770)=>{var _0x6de1f5=a0_0x4e37ad;const {warehouseNew:_0x5e6d41,rooms:_0x4c4ee2,Type:_0x96b631}=_0x340c12[_0x6de1f5(0x100)];let _0x4386f0;_0x5e6d41==_0x6de1f5(0x109)?_0x4c4ee2=='All'?_0x4386f0=await warehouse[_0x6de1f5(0x11d)]([{'$unwind':_0x6de1f5(0x11c)},{'$match':{'product_details.type':_0x96b631,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x4386f0=await warehouse['aggregate']([{'$match':{'room':_0x4c4ee2}},{'$unwind':_0x6de1f5(0x11c)},{'$match':{'product_details.type':_0x96b631,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x4c4ee2==_0x6de1f5(0x109)?_0x4386f0=await warehouse[_0x6de1f5(0x11d)]([{'$match':{'name':_0x5e6d41}},{'$unwind':_0x6de1f5(0x11c)},{'$match':{'product_details.type':_0x96b631,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x4386f0=await warehouse[_0x6de1f5(0x11d)]([{'$match':{'name':_0x5e6d41,'room':_0x4c4ee2}},{'$unwind':_0x6de1f5(0x11c)},{'$match':{'product_details.type':_0x96b631,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]),_0x4f2770[_0x6de1f5(0xeb)](_0x4386f0);}),router[a0_0x4e37ad(0x122)]('/Reports_product',async(_0x57ab8d,_0x3e674a)=>{var _0x5c2275=a0_0x4e37ad;const {warehouseNew:_0x3951c5,rooms:_0x5d4d98,Type:_0x258445,process_cat:_0x505829,room_cat:_0x266a19}=_0x57ab8d[_0x5c2275(0x100)],_0x223045=await product['find']();_0x3e674a[_0x5c2275(0xeb)](_0x223045);}),module[a0_0x4e37ad(0x10c)]=router;