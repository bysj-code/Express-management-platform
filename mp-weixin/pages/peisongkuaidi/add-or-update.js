(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peisongkuaidi/add-or-update"],{"91ad":function(e,n,i){"use strict";(function(e){i("43d0");r(i("66fd"));var n=r(i("b439"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},b439:function(e,n,i){"use strict";i.r(n);var r=i("bd75"),t=i("d78a");for(var a in t)"default"!==a&&function(e){i.d(n,e,(function(){return t[e]}))}(a);i("f416");var u,o=i("f0c5"),s=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"577336e3",null,!1,r["a"],u);n["default"]=s.exports},bd75:function(e,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"a05d"))}},t=function(){var e=this,n=e.$createElement;e._self._c},a=[]},c8fb:function(e,n,i){},d78a:function(e,n,i){"use strict";i.r(n);var r=i("f96f"),t=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(n,e,(function(){return r[e]}))}(a);n["default"]=t.a},f416:function(e,n,i){"use strict";var r=i("c8fb"),t=i.n(r);t.a},f96f:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(i("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function a(e,n,i,r,t,a,u){try{var o=e[a](u),s=o.value}catch(c){return void i(c)}o.done?n(s):Promise.resolve(s).then(r,t)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(r,t){var u=e.apply(n,i);function o(e){a(u,r,t,o,s,"next",e)}function s(e){a(u,r,t,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("a05d"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{cross:"",ruleForm:{kuaididanhao:"",kuaidimingcheng:"",tupian:"",yonghuzhanghao:"",yonghuxingming:"",yonghushouji:"",kuaidiweizhi:"",peisongleixing:"",zhidingweizhi:"",peisongfei:"5",fabushijian:"",yaoqiushijian:"",yonghubeizhu:"",peisongzhuangtai:"待取",crossuserid:"",crossrefid:"",userid:""},peisongleixingOptions:[],peisongleixingIndex:0,peisongzhuangtaiOptions:[],peisongzhuangtaiIndex:0,user:{},ro:{kuaididanhao:!1,kuaidimingcheng:!1,tupian:!1,yonghuzhanghao:!1,yonghuxingming:!1,yonghushouji:!1,kuaidiweizhi:!1,peisongleixing:!1,zhidingweizhi:!1,peisongfei:!1,fabushijian:!1,yaoqiushijian:!1,yonghubeizhu:!1,peisongzhuangtai:!1,crossuserid:!1,crossrefid:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var i=this;return u(r.default.mark((function t(){var a,u,o,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i.ruleForm.fabushijian=i.$utils.getCurDateTime(),a=e.getStorageSync("nowTable"),t.next=4,i.$api.session(a);case 4:if(u=t.sent,i.user=u.data,i.ro.peisongzhuangtai=!0,i.peisongleixingOptions="上门,代放".split(","),i.peisongzhuangtaiOptions="已接取,待取".split(","),i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=17;break}return i.ruleForm.id=n.id,t.next=15,i.$api.info("peisongkuaidi",i.ruleForm.id);case 15:u=t.sent,i.ruleForm=u.data;case 17:if(i.cross=n.cross,!n.cross){t.next=93;break}o=e.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 21:if((t.t1=t.t0()).done){t.next=93;break}if(s=t.t1.value,"kuaididanhao"!=s){t.next=27;break}return i.ruleForm.kuaididanhao=o[s],i.ro.kuaididanhao=!0,t.abrupt("continue",21);case 27:if("kuaidimingcheng"!=s){t.next=31;break}return i.ruleForm.kuaidimingcheng=o[s],i.ro.kuaidimingcheng=!0,t.abrupt("continue",21);case 31:if("tupian"!=s){t.next=35;break}return i.ruleForm.tupian=o[s],i.ro.tupian=!0,t.abrupt("continue",21);case 35:if("yonghuzhanghao"!=s){t.next=39;break}return i.ruleForm.yonghuzhanghao=o[s],i.ro.yonghuzhanghao=!0,t.abrupt("continue",21);case 39:if("yonghuxingming"!=s){t.next=43;break}return i.ruleForm.yonghuxingming=o[s],i.ro.yonghuxingming=!0,t.abrupt("continue",21);case 43:if("yonghushouji"!=s){t.next=47;break}return i.ruleForm.yonghushouji=o[s],i.ro.yonghushouji=!0,t.abrupt("continue",21);case 47:if("kuaidiweizhi"!=s){t.next=51;break}return i.ruleForm.kuaidiweizhi=o[s],i.ro.kuaidiweizhi=!0,t.abrupt("continue",21);case 51:if("peisongleixing"!=s){t.next=55;break}return i.ruleForm.peisongleixing=o[s],i.ro.peisongleixing=!0,t.abrupt("continue",21);case 55:if("zhidingweizhi"!=s){t.next=59;break}return i.ruleForm.zhidingweizhi=o[s],i.ro.zhidingweizhi=!0,t.abrupt("continue",21);case 59:if("peisongfei"!=s){t.next=63;break}return i.ruleForm.peisongfei=o[s],i.ro.peisongfei=!0,t.abrupt("continue",21);case 63:if("fabushijian"!=s){t.next=67;break}return i.ruleForm.fabushijian=o[s],i.ro.fabushijian=!0,t.abrupt("continue",21);case 67:if("yaoqiushijian"!=s){t.next=71;break}return i.ruleForm.yaoqiushijian=o[s],i.ro.yaoqiushijian=!0,t.abrupt("continue",21);case 71:if("yonghubeizhu"!=s){t.next=75;break}return i.ruleForm.yonghubeizhu=o[s],i.ro.yonghubeizhu=!0,t.abrupt("continue",21);case 75:if("peisongzhuangtai"!=s){t.next=79;break}return i.ruleForm.peisongzhuangtai=o[s],i.ro.peisongzhuangtai=!0,t.abrupt("continue",21);case 79:if("crossuserid"!=s){t.next=83;break}return i.ruleForm.crossuserid=o[s],i.ro.crossuserid=!0,t.abrupt("continue",21);case 83:if("crossrefid"!=s){t.next=87;break}return i.ruleForm.crossrefid=o[s],i.ro.crossrefid=!0,t.abrupt("continue",21);case 87:if("userid"!=s){t.next=91;break}return i.ruleForm.userid=o[s],i.ro.userid=!0,t.abrupt("continue",21);case 91:t.next=21;break;case 93:i.styleChange();case 94:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},yaoqiushijianConfirm:function(e){console.log(e),this.ruleForm.yaoqiushijian=e.result,this.$forceUpdate()},peisongleixingChange:function(e){this.peisongleixingIndex=e.target.value,this.ruleForm.peisongleixing=this.peisongleixingOptions[this.peisongleixingIndex]},peisongzhuangtaiChange:function(e){this.peisongzhuangtaiIndex=e.target.value,this.ruleForm.peisongzhuangtai=this.peisongzhuangtaiOptions[this.peisongzhuangtaiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function i(){var t,a,u,o,s,c,g,d,l,f;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n.ruleForm.peisongleixing){i.next=3;break}return n.$utils.msg("配送类型不能为空"),i.abrupt("return");case 3:if(n.ruleForm.zhidingweizhi){i.next=6;break}return n.$utils.msg("指定位置不能为空"),i.abrupt("return");case 6:if(!n.ruleForm.peisongfei||n.$validate.isIntNumer(n.ruleForm.peisongfei)){i.next=9;break}return n.$utils.msg("配送费应输入整数"),i.abrupt("return");case 9:if(!n.cross){i.next=25;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){i.next=25;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){i.next=21;break}for(g in c)g==o&&(c[g]=s);return d=e.getStorageSync("crossTable"),i.next=19,n.$api.update("".concat(d),c);case 19:i.next=25;break;case 21:t=Number(e.getStorageSync("userid")),a=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 25:if(!a||!t){i.next=47;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:t,crossrefid:a},i.next=31,n.$api.list("peisongkuaidi",l);case 31:if(f=i.sent,!(f.data.total>=u)){i.next=37;break}return n.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 37:if(!n.ruleForm.id){i.next=42;break}return i.next=40,n.$api.update("peisongkuaidi",n.ruleForm);case 40:i.next=44;break;case 42:return i.next=44,n.$api.add("peisongkuaidi",n.ruleForm);case 44:n.$utils.msgBack("提交成功");case 45:i.next=55;break;case 47:if(!n.ruleForm.id){i.next=52;break}return i.next=50,n.$api.update("peisongkuaidi",n.ruleForm);case 50:i.next=54;break;case 52:return i.next=54,n.$api.add("peisongkuaidi",n.ruleForm);case 54:n.$utils.msgBack("提交成功");case 55:case"end":return i.stop()}}),i)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),r=n.getMonth()+1,t=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(i,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,i("543d")["default"])}},[["91ad","common/runtime","common/vendor"]]]);