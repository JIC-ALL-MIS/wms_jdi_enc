const a0_0x3e7be4=a0_0x1ee0;(function(_0x2ee060,_0x3b00ce){const _0x67d6b7=a0_0x1ee0,_0x4f6312=_0x2ee060();while(!![]){try{const _0x4fbaae=parseInt(_0x67d6b7(0x174))/0x1+parseInt(_0x67d6b7(0x187))/0x2+-parseInt(_0x67d6b7(0x18b))/0x3*(-parseInt(_0x67d6b7(0x17f))/0x4)+parseInt(_0x67d6b7(0x189))/0x5*(-parseInt(_0x67d6b7(0x190))/0x6)+parseInt(_0x67d6b7(0x171))/0x7+-parseInt(_0x67d6b7(0x178))/0x8*(-parseInt(_0x67d6b7(0x18c))/0x9)+parseInt(_0x67d6b7(0x180))/0xa*(-parseInt(_0x67d6b7(0x182))/0xb);if(_0x4fbaae===_0x3b00ce)break;else _0x4f6312['push'](_0x4f6312['shift']());}catch(_0x1ea8a9){_0x4f6312['push'](_0x4f6312['shift']());}}}(a0_0x59d5,0xe2dbe));function a0_0x1ee0(_0x4f93db,_0x9424c0){const _0x59d56f=a0_0x59d5();return a0_0x1ee0=function(_0x1ee03b,_0xeb328b){_0x1ee03b=_0x1ee03b-0x171;let _0x4e1097=_0x59d56f[_0x1ee03b];return _0x4e1097;},a0_0x1ee0(_0x4f93db,_0x9424c0);}const express=require(a0_0x3e7be4(0x188)),app=express(),router=express[a0_0x3e7be4(0x17e)](),bcrypt=require(a0_0x3e7be4(0x184)),{sing_up,staff,profile,master_shop}=require('../models/all_models'),auth=require('../middleware/auth');router[a0_0x3e7be4(0x17b)]('/sing_up',(_0x29214c,_0x50ead6)=>{const _0x56cae9=a0_0x3e7be4;_0x50ead6[_0x56cae9(0x183)]('sing_up',{'success':_0x29214c['flash'](_0x56cae9(0x17c)),'errors':_0x29214c[_0x56cae9(0x179)](_0x56cae9(0x175))});}),router[a0_0x3e7be4(0x173)](a0_0x3e7be4(0x17d),async(_0x42b6fd,_0x3a2c06)=>{const _0xd0b73f=a0_0x3e7be4;try{console['log'](_0x42b6fd[_0xd0b73f(0x17a)]);const {name:_0x79aa64,email:_0x3816ad,password:_0x528ec7,role:_0x1483d7}=_0x42b6fd[_0xd0b73f(0x17a)];console['log'](_0x1483d7);const _0x50e401=await bcrypt[_0xd0b73f(0x181)](_0x528ec7,0xa),_0x123714=new sing_up({'name':_0x79aa64,'email':_0x3816ad,'password':_0x50e401,'role':'admin'}),_0x19bf6c=await _0x123714[_0xd0b73f(0x18d)](),_0x314801=new profile({'firstname':_0x79aa64,'email':_0x3816ad}),_0x257068=await _0x314801[_0xd0b73f(0x18d)]();_0x42b6fd[_0xd0b73f(0x179)](_0xd0b73f(0x17c),_0xd0b73f(0x172)+_0x79aa64),_0x3a2c06['redirect'](_0xd0b73f(0x176));}catch(_0x557054){console[_0xd0b73f(0x185)](_0x557054);}}),router[a0_0x3e7be4(0x17b)](a0_0x3e7be4(0x177),async(_0x3e381a,_0x504eb6)=>{const _0x353848=a0_0x3e7be4;try{const _0x11b7f1=await master_shop['find']();console[_0x353848(0x185)](_0x353848(0x186),_0x11b7f1),_0x504eb6[_0x353848(0x183)](_0x353848(0x18f),{'success':_0x3e381a['flash'](_0x353848(0x17c)),'errors':_0x3e381a[_0x353848(0x179)](_0x353848(0x175)),'master_shop':_0x11b7f1});}catch(_0x19da04){console['log'](_0x19da04);}}),router[a0_0x3e7be4(0x173)](a0_0x3e7be4(0x177),async(_0x332683,_0x4192e4)=>{const _0xfe2002=a0_0x3e7be4;try{console[_0xfe2002(0x185)](_0x332683['body']);const {name:_0x25d7c7,email:_0x388a79,password:_0x2158a4,mobile:_0x89b77c}=_0x332683[_0xfe2002(0x17a)],_0x29e710=await bcrypt[_0xfe2002(0x181)](_0x2158a4,0xa),_0x247e0b=new sing_up({'name':_0x25d7c7,'email':_0x388a79,'password':_0x29e710,'mobile':_0x89b77c,'role':_0xfe2002(0x18a)}),_0x34b4ba=await _0x247e0b[_0xfe2002(0x18d)](),_0x2ae2ef=new staff({'name':_0x25d7c7,'email':_0x388a79,'mobile':_0x89b77c,'status':'Disabled'}),_0x58e04a=await _0x2ae2ef[_0xfe2002(0x18d)](),_0x1e78ab=new profile({'firstname':_0x25d7c7,'email':_0x388a79}),_0x367f82=await _0x1e78ab['save']();_0x332683[_0xfe2002(0x179)](_0xfe2002(0x17c),_0xfe2002(0x18e)),_0x4192e4['redirect']('/sing_up_staff');}catch(_0x49df46){console['log'](_0x49df46);}}),module['exports']=router;function a0_0x59d5(){const _0x1d6c59=['/sing_up','Router','148YEOYup','3295790pebOtw','hash','143rcqHlK','render','bcryptjs','log','login\x20master','1965972gGUgWu','express','1632595gcISxG','staff','133521rnmsHv','1260DCiCrb','save','Your\x20information\x20will\x20be\x20sent\x20to\x20the\x20administration\x20for\x20approval.!','sing_up_staff','6aqjpsW','9355297dBslvj','welcome\x20','post','1254704viZpTc','errors','/login','/sing_up_staff','18248Emhkeb','flash','body','get','success'];a0_0x59d5=function(){return _0x1d6c59;};return a0_0x59d5();}