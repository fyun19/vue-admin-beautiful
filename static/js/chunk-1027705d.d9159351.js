/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-6-30 17:34:02
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1027705d"],{b5d6:function(e,t,a){"use strict";var r=a("ffb1"),n=a.n(r);n.a},d2ec:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"permissions-container"},[a("el-divider",{attrs:{"content-position":"left"}},[e._v(" intelligence模式,前端根据permissions拦截路由(演示环境,默认使用此方案) ")]),a("el-form",{ref:"form",attrs:{model:e.form,inline:!0}},[a("el-form-item",{attrs:{label:"切换账号"}},[a("el-radio-group",{model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}},[a("el-radio",{attrs:{label:"admin"}},[e._v("admin")]),a("el-radio",{attrs:{label:"editor"}},[e._v("editor")]),a("el-radio",{attrs:{label:"test"}},[e._v("test")])],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleChangePermission}},[e._v("切换权限 ")])],1),a("el-form-item",{attrs:{label:"当前账号拥有的权限"}},[e._v(" "+e._s(JSON.stringify(e.permissions))+" ")])],1),a("el-divider",{attrs:{"content-position":"left"}},[e._v(" 按钮级权限演示 ")]),a("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["admin"],expression:"['admin']"}],attrs:{type:"primary"}},[e._v(' 我是拥有["admin"]权限的按钮 ')]),a("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["editor"],expression:"['editor']"}],attrs:{type:"primary"}},[e._v(' 我是拥有["editor"]权限的按钮 ')]),a("el-button",{directives:[{name:"permissions",rawName:"v-permissions",value:["test"],expression:"['test']"}],attrs:{type:"primary"}},[e._v(' 我是拥有["test"]权限的按钮 ')]),a("br"),a("br"),a("el-divider",{attrs:{"content-position":"left"}},[e._v(" all模式,路由以及view文件引入全部交给后端(权限复杂,且随时变更,建议使用此方案) ")]),a("p",[e._v(" settings.js配置authentication为all即可完全交由后端控制,mock中有后端接口示例,权限繁琐,有几十种权限的项目直接用这种, 由于演示环境是mock数据模拟,可能无法展现此功能的配置,只做如下展示,便于您的理解 ")]),a("br"),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("el-table",{attrs:{data:e.tableData,"row-key":"path",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{prop:"name",label:"name"}}),a("el-table-column",{attrs:{prop:"path",label:"path"}}),a("el-table-column",{attrs:{prop:"component",label:"component"}}),a("el-table-column",{attrs:{prop:"redirect",label:"redirect"}}),a("el-table-column",{attrs:{prop:"meta.title",label:"标题"}}),a("el-table-column",{attrs:{label:"图标"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?a("span",[t.row.meta.icon?a("vab-icon",{attrs:{icon:["fas",t.row.meta.icon]}}):e._e()],1):e._e()]}}])}),a("el-table-column",{attrs:{label:"是否固定"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?a("span",[e._v(" "+e._s(t.row.meta.affix)+" ")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"是否无缓存"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?a("span",[e._v(" "+e._s(t.row.meta.noKeepAlive)+" ")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"badge"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.meta?a("span",[e._v(" "+e._s(t.row.meta.badge)+" ")]):e._e()]}}])})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("json-editor",{attrs:{value:e.res}})],1)],1)],1)},n=[],s=(a("b449"),a("6648")),o=a("9b6e"),i=a("9f3a"),l=a("778c"),c=a("2033"),u=a("fa7e"),m={name:"Permissions",components:{JsonEditor:u["default"]},data:function(){return{form:{account:""},tableData:[],res:[]}},computed:Object(o["a"])({},Object(i["c"])({userName:"user/userName",permissions:"user/permissions"})),created:function(){this.fetchData()},mounted:function(){this.form.account=this.userName},methods:{handleChangePermission:function(){localStorage.setItem(l["tokenTableName"],"".concat(this.form.account,"-accessToken")),location.reload()},fetchData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["getRouterList"])();case 2:a=t.sent,e.tableData=a.data,e.res=a;case 5:case"end":return t.stop()}}),t)})))()}}},d=m,f=a("9ca4"),p=Object(f["a"])(d,r,n,!1,null,null,null);t["default"]=p.exports},fa7e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"json-editor"},[a("label",[a("textarea",{ref:"textarea"})])])},n=[],s=a("4f54"),o=a("444e"),i=a.n(o);a("a1be"),a("1f94"),a("4162"),a("3f24"),a("3299"),a("9c02");a("548c");var l={name:"JsonEditor",props:{value:{type:[Array,Object],default:function(){return null}}},data:function(){return{jsonEditor:!1}},watch:{value:function(e){var t=this.jsonEditor.getValue();t?this.$emit("change",t):this.$baseMessage("JSON不能为空,否则无法生成表格","error"),e!==t&&this.jsonEditor.setValue(JSON.stringify(this.value,null,2))}},mounted:function(){var e=this;this.jsonEditor=i.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.jsonEditor.setValue(JSON.stringify(this.value,null,2)),this.jsonEditor.on("change",(function(t){e.isJsonString(t.getValue())&&e.$emit("change",t.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()},isJsonString:function(e){try{if("object"==Object(s["a"])(JSON.parse(e)))return!0}catch(t){}return!1}}},c=l,u=(a("b5d6"),a("9ca4")),m=Object(u["a"])(c,r,n,!1,null,"763e05ce",null);t["default"]=m.exports},ffb1:function(e,t,a){}}]);