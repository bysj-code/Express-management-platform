(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-peisongkuaidi-add-or-update"],{1565:function(r,i,e){"use strict";var o=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a481"),e("c5f6"),e("f559"),e("ac6a"),e("28a5"),e("96cf");var t=o(e("3b8d")),a=o(e("e2b1")),n={data:function(){return{cross:"",ruleForm:{kuaididanhao:"",kuaidimingcheng:"",tupian:"",yonghuzhanghao:"",yonghuxingming:"",yonghushouji:"",kuaidiweizhi:"",peisongleixing:"",zhidingweizhi:"",peisongfei:"5",fabushijian:"",yaoqiushijian:"",yonghubeizhu:"",peisongzhuangtai:"待取",crossuserid:"",crossrefid:"",userid:""},peisongleixingOptions:[],peisongleixingIndex:0,peisongzhuangtaiOptions:[],peisongzhuangtaiIndex:0,user:{},ro:{kuaididanhao:!1,kuaidimingcheng:!1,tupian:!1,yonghuzhanghao:!1,yonghuxingming:!1,yonghushouji:!1,kuaidiweizhi:!1,peisongleixing:!1,zhidingweizhi:!1,peisongfei:!1,fabushijian:!1,yaoqiushijian:!1,yonghubeizhu:!1,peisongzhuangtai:!1,crossuserid:!1,crossrefid:!1,userid:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(i){var e,o,t,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDateTime(),e=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(e);case 4:if(o=r.sent,this.user=o.data,this.ro.peisongzhuangtai=!0,this.peisongleixingOptions="上门,代放".split(","),this.peisongzhuangtaiOptions="已接取,待取".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){r.next=17;break}return this.ruleForm.id=i.id,r.next=15,this.$api.info("peisongkuaidi",this.ruleForm.id);case 15:o=r.sent,this.ruleForm=o.data;case 17:if(this.cross=i.cross,!i.cross){r.next=93;break}t=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(t);case 21:if((r.t1=r.t0()).done){r.next=93;break}if(a=r.t1.value,"kuaididanhao"!=a){r.next=27;break}return this.ruleForm.kuaididanhao=t[a],this.ro.kuaididanhao=!0,r.abrupt("continue",21);case 27:if("kuaidimingcheng"!=a){r.next=31;break}return this.ruleForm.kuaidimingcheng=t[a],this.ro.kuaidimingcheng=!0,r.abrupt("continue",21);case 31:if("tupian"!=a){r.next=35;break}return this.ruleForm.tupian=t[a],this.ro.tupian=!0,r.abrupt("continue",21);case 35:if("yonghuzhanghao"!=a){r.next=39;break}return this.ruleForm.yonghuzhanghao=t[a],this.ro.yonghuzhanghao=!0,r.abrupt("continue",21);case 39:if("yonghuxingming"!=a){r.next=43;break}return this.ruleForm.yonghuxingming=t[a],this.ro.yonghuxingming=!0,r.abrupt("continue",21);case 43:if("yonghushouji"!=a){r.next=47;break}return this.ruleForm.yonghushouji=t[a],this.ro.yonghushouji=!0,r.abrupt("continue",21);case 47:if("kuaidiweizhi"!=a){r.next=51;break}return this.ruleForm.kuaidiweizhi=t[a],this.ro.kuaidiweizhi=!0,r.abrupt("continue",21);case 51:if("peisongleixing"!=a){r.next=55;break}return this.ruleForm.peisongleixing=t[a],this.ro.peisongleixing=!0,r.abrupt("continue",21);case 55:if("zhidingweizhi"!=a){r.next=59;break}return this.ruleForm.zhidingweizhi=t[a],this.ro.zhidingweizhi=!0,r.abrupt("continue",21);case 59:if("peisongfei"!=a){r.next=63;break}return this.ruleForm.peisongfei=t[a],this.ro.peisongfei=!0,r.abrupt("continue",21);case 63:if("fabushijian"!=a){r.next=67;break}return this.ruleForm.fabushijian=t[a],this.ro.fabushijian=!0,r.abrupt("continue",21);case 67:if("yaoqiushijian"!=a){r.next=71;break}return this.ruleForm.yaoqiushijian=t[a],this.ro.yaoqiushijian=!0,r.abrupt("continue",21);case 71:if("yonghubeizhu"!=a){r.next=75;break}return this.ruleForm.yonghubeizhu=t[a],this.ro.yonghubeizhu=!0,r.abrupt("continue",21);case 75:if("peisongzhuangtai"!=a){r.next=79;break}return this.ruleForm.peisongzhuangtai=t[a],this.ro.peisongzhuangtai=!0,r.abrupt("continue",21);case 79:if("crossuserid"!=a){r.next=83;break}return this.ruleForm.crossuserid=t[a],this.ro.crossuserid=!0,r.abrupt("continue",21);case 83:if("crossrefid"!=a){r.next=87;break}return this.ruleForm.crossrefid=t[a],this.ro.crossrefid=!0,r.abrupt("continue",21);case 87:if("userid"!=a){r.next=91;break}return this.ruleForm.userid=t[a],this.ro.userid=!0,r.abrupt("continue",21);case 91:r.next=21;break;case 93:this.styleChange();case 94:case"end":return r.stop()}}),r,this)})));function i(i){return r.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(r){console.log(r),this.ruleForm.fabushijian=r.result,this.$forceUpdate()},yaoqiushijianConfirm:function(r){console.log(r),this.ruleForm.yaoqiushijian=r.result,this.$forceUpdate()},peisongleixingChange:function(r){this.peisongleixingIndex=r.target.value,this.ruleForm.peisongleixing=this.peisongleixingOptions[this.peisongleixingIndex]},peisongzhuangtaiChange:function(r){this.peisongzhuangtaiIndex=r.target.value,this.ruleForm.peisongzhuangtai=this.peisongzhuangtaiOptions[this.peisongzhuangtaiIndex]},tupianTap:function(){var r=this;this.$api.upload((function(i){r.ruleForm.tupian="upload/"+i.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){var i,e,o,t,a,n,d,s,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.peisongleixing){r.next=3;break}return this.$utils.msg("配送类型不能为空"),r.abrupt("return");case 3:if(this.ruleForm.zhidingweizhi){r.next=6;break}return this.$utils.msg("指定位置不能为空"),r.abrupt("return");case 6:if(!this.ruleForm.peisongfei||this.$validate.isIntNumer(this.ruleForm.peisongfei)){r.next=9;break}return this.$utils.msg("配送费应输入整数"),r.abrupt("return");case 9:if(!this.cross){r.next=25;break}if(t=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==t){r.next=25;break}if(n=uni.getStorageSync("crossObj"),t.startsWith("[")){r.next=21;break}for(d in n)d==t&&(n[d]=a);return s=uni.getStorageSync("crossTable"),r.next=19,this.$api.update("".concat(s),n);case 19:r.next=25;break;case 21:i=Number(uni.getStorageSync("userid")),e=n["id"],o=uni.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 25:if(!e||!i){r.next=47;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=e,u={page:1,limit:10,crossuserid:i,crossrefid:e},r.next=31,this.$api.list("peisongkuaidi",u);case 31:if(l=r.sent,!(l.data.total>=o)){r.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!this.ruleForm.id){r.next=42;break}return r.next=40,this.$api.update("peisongkuaidi",this.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,this.$api.add("peisongkuaidi",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:r.next=55;break;case 47:if(!this.ruleForm.id){r.next=52;break}return r.next=50,this.$api.update("peisongkuaidi",this.ruleForm);case 50:r.next=54;break;case 52:return r.next=54,this.$api.add("peisongkuaidi",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return r.stop()}}),r,this)})));function i(){return r.apply(this,arguments)}return i}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var i=new Date,e=i.getFullYear(),o=i.getMonth()+1,t=i.getDate();return"start"===r?e-=60:"end"===r&&(e+=2),o=o>9?o:"0"+o,t=t>9?t:"0"+t,"".concat(e,"-").concat(o,"-").concat(t)},toggleTab:function(r){this.$refs[r].show()}}};i.default=n},"1f6d":function(r,i,e){"use strict";e.r(i);var o=e("89ec"),t=e("9333");for(var a in t)"default"!==a&&function(r){e.d(i,r,(function(){return t[r]}))}(a);e("52ab");var n,d=e("f0c5"),s=Object(d["a"])(t["default"],o["b"],o["c"],!1,null,"48d2bc30",null,!1,o["a"],n);i["default"]=s.exports},"52ab":function(r,i,e){"use strict";var o=e("5641"),t=e.n(o);t.a},5641:function(r,i,e){var o=e("a752");"string"===typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);var t=e("4f06").default;t("4068cac4",o,!0,{sourceMap:!1,shadowMode:!1})},"89ec":function(r,i,e){"use strict";var o={"w-picker":e("e2b1").default},t=function(){var r=this,i=r.$createElement,e=r._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-form",{staticClass:"app-update-pv"},[e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("快递单号")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.kuaididanhao,placeholder:"快递单号"},model:{value:r.ruleForm.kuaididanhao,callback:function(i){r.$set(r.ruleForm,"kuaididanhao",i)},expression:"ruleForm.kuaididanhao"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("快递名称")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.kuaidimingcheng,placeholder:"快递名称"},model:{value:r.ruleForm.kuaidimingcheng,callback:function(i){r.$set(r.ruleForm,"kuaidimingcheng",i)},expression:"ruleForm.kuaidimingcheng"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"88rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.tupianTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"#fff",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("图片")]),e("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.tupian?e("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"80rpx",borderStyle:"solid",height:"80rpx"},attrs:{src:r.baseUrl+r.ruleForm.tupian,mode:"aspectFill"}}):e("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"12rpx 0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"80rpx",borderStyle:"solid",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户账号")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:r.ruleForm.yonghuzhanghao,callback:function(i){r.$set(r.ruleForm,"yonghuzhanghao",i)},expression:"ruleForm.yonghuzhanghao"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户姓名")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:r.ruleForm.yonghuxingming,callback:function(i){r.$set(r.ruleForm,"yonghuxingming",i)},expression:"ruleForm.yonghuxingming"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户手机")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.yonghushouji,placeholder:"用户手机"},model:{value:r.ruleForm.yonghushouji,callback:function(i){r.$set(r.ruleForm,"yonghushouji",i)},expression:"ruleForm.yonghushouji"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("快递位置")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.kuaidiweizhi,placeholder:"快递位置"},model:{value:r.ruleForm.kuaidiweizhi,callback:function(i){r.$set(r.ruleForm,"kuaidiweizhi",i)},expression:"ruleForm.kuaidiweizhi"}})],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 24rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("配送类型")]),e("v-uni-picker",{attrs:{value:r.peisongleixingIndex,range:r.peisongleixingOptions},on:{change:function(i){arguments[0]=i=r.$handleEvent(i),r.peisongleixingChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(220, 220, 220, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 240rpx)",lineHeight:"52rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.peisongleixing?r.ruleForm.peisongleixing:"请选择配送类型"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("指定位置")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.zhidingweizhi,placeholder:"指定位置"},model:{value:r.ruleForm.zhidingweizhi,callback:function(i){r.$set(r.ruleForm,"zhidingweizhi",i)},expression:"ruleForm.zhidingweizhi"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("配送费")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{disabled:r.ro.peisongfei,placeholder:"配送费"},model:{value:r.ruleForm.peisongfei,callback:function(i){r.$set(r.ruleForm,"peisongfei",i)},expression:"ruleForm.peisongfei"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("发布时间")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{placeholder:"发布时间"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.toggleTab("fabushijian")}},model:{value:r.ruleForm.fabushijian,callback:function(i){r.$set(r.ruleForm,"fabushijian",i)},expression:"ruleForm.fabushijian"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("要求时间")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(220, 220, 220, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"88rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"52rpx"},attrs:{placeholder:"要求时间"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.toggleTab("yaoqiushijian")}},model:{value:r.ruleForm.yaoqiushijian,callback:function(i){r.$set(r.ruleForm,"yaoqiushijian",i)},expression:"ruleForm.yaoqiushijian"}})],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 24rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"50rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"80rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("配送状态")]),e("v-uni-picker",{attrs:{value:r.peisongzhuangtaiIndex,disabled:!0,range:r.peisongzhuangtaiOptions},on:{change:function(i){arguments[0]=i=r.$handleEvent(i),r.peisongzhuangtaiChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(220, 220, 220, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 240rpx)",lineHeight:"52rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.peisongzhuangtai?r.ruleForm.peisongzhuangtai:"请选择配送状态"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户备注")]),e("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(220, 220, 220, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"2rpx",width:"calc(100% - 240rpx)",fontSize:"28rpx",borderStyle:"solid",height:"180rpx"},attrs:{placeholder:"用户备注"},model:{value:r.ruleForm.yonghubeizhu,callback:function(i){r.$set(r.ruleForm,"yonghubeizhu",i)},expression:"ruleForm.yonghubeizhu"}})],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(123, 226, 205, 1)",borderColor:"#409EFF",borderRadius:"88rpx",color:"#fff",borderWidth:"0",width:"80%",fontSize:"30rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(i){arguments[0]=i=r.$handleEvent(i),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),e("w-picker",{ref:"fabushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=r.$handleEvent(i),r.fabushijianConfirm.apply(void 0,arguments)}}}),e("w-picker",{ref:"yaoqiushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=r.$handleEvent(i),r.yaoqiushijianConfirm.apply(void 0,arguments)}}})],1)},a=[];e.d(i,"b",(function(){return t})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return o}))},9333:function(r,i,e){"use strict";e.r(i);var o=e("1565"),t=e.n(o);for(var a in o)"default"!==a&&function(r){e.d(i,r,(function(){return o[r]}))}(a);i["default"]=t.a},a752:function(r,i,e){var o=e("24fb");i=o(!1),i.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-48d2bc30]{padding:%?20?%}.content[data-v-48d2bc30]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220215/b9bd41c7f1fc4430b1972688b894f238.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-48d2bc30]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-48d2bc30]{width:%?180?%}.avator[data-v-48d2bc30]{width:%?150?%;height:%?60?%}.right-input[data-v-48d2bc30]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-48d2bc30]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-48d2bc30]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-48d2bc30]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-48d2bc30]{border:0}.cu-form-group uni-input[data-v-48d2bc30]{padding:0 %?30?%}.uni-input[data-v-48d2bc30]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-48d2bc30]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-48d2bc30]::after{line-height:%?52?%}.select .uni-input[data-v-48d2bc30]{line-height:%?52?%}.input .right-input[data-v-48d2bc30]{line-height:%?52?%}',""]),r.exports=i}}]);