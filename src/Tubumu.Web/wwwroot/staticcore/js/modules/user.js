webpackJsonp([1],{"/rEA":function(e,t,a){"use strict";(function(e){function r(e,t,a){this.name="ApiError",this.message=e||"Default Message",this.errorType=t||f.Default,this.innerError=a,this.stack=(new Error).stack}var i=a("//Fk"),n=a.n(i),o=a("mvHQ"),l=a.n(o),s=a("OvRC"),u=a.n(s),m=a("mtWM"),c=a.n(m),d=a("mw3O"),p=a.n(d),h=a("bzuE"),f={Default:"default",Sysetem:"sysetem"};(r.prototype=u()(Error.prototype)).constructor=r;var g=c.a.create({baseURL:h.a,timeout:2e4,responseType:"json",withCredentials:!0});g.interceptors.request.use(function(e){return"post"===e.method||"put"===e.method||"patch"===e.method?(e.headers={"Content-Type":"application/json; charset=UTF-8"},e.data=l()(e.data)):"delete"!==e.method&&"get"!==e.method&&"head"!==e.method||(e.paramsSerializer=function(e){return p.a.stringify(e,{arrayFormat:"indices"})}),localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e},function(e){return e}),g.interceptors.response.use(function(t){if(-1===t.headers["content-type"].indexOf("json"))return t;var a=void 0;if("arraybuffer"===t.request.responseType&&"[object ArrayBuffer]"===t.data.toString()){var i=e.from(t.data).toString("utf8");console.log(i),a=JSON.parse(i)}else a=t.data;if(a)if(a.url)top.location=a.url;else if(200!==a.code)return console.log(a),n.a.reject(new r(a.message));return t},function(e){return n.a.reject(new r(e.message,f.Sysetem,e))}),t.a={install:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.httpClient=g,e.prototype.$httpClient=g}}}).call(t,a("EuP9").Buffer)},"1yV8":function(e,t,a){"use strict";var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-cascader",{attrs:{options:e.treeData,props:e.defaultProps,clearable:"",filterable:"",placeholder:"选择分组","change-on-select":""},on:{change:e.handleChange,"active-item-change":e.handleActiveItemChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})},staticRenderFns:[]};t.a=r},"47Lh":function(e,t,a){"use strict";t.a={name:"XLUserStatusRadioGroup",props:{value:{type:String,default:"Normal"}},data:function(){return{currentValue:this.value,userStatusData:[{label:"默认",value:"Normal"},{label:"待审",value:"PendingApproval"},{label:"删除",value:"Removed"}]}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e)}}}},"9Q83":function(e,t){},CPfC:function(e,t,a){"use strict";var r=a("Ss4G"),i=a("1yV8"),n=a("VU/8")(r.a,i.a,!1,null,null,null);t.a=n.exports},"D+l0":function(e,t,a){"use strict";var r=a("lY/r"),i=a("fNq0"),n=function(e){a("9Q83")},o=a("VU/8")(r.a,i.a,!1,n,null,null);t.a=o.exports},DUa8:function(e,t,a){"use strict";var r=a("vT38"),i=a("RdGK"),n=a("VU/8")(r.a,i.a,!1,null,null,null);t.a=n.exports},IlS5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("tvR6"),i=(a.n(r),a("qBF2")),n=a.n(i),o=a("7+uW"),l=a("/rEA"),s=a("t7Yk"),u=a("YNH2"),m=a("CPfC"),c=a("DUa8"),d=a("uN2V"),p=(a.n(d),a("D+l0"));o.default.config.productionTip=!1,o.default.use(l.a),o.default.use(n.a,{size:"mini"}),o.default.component("xl-userStatusSelect",s.a),o.default.component("xl-userStatusRadioGroup",u.a),o.default.component("xl-groupCascader",m.a),o.default.component("xl-datePicker",c.a),new o.default({el:"#app",render:function(e){return e(p.a)}})},"N0+e":function(e,t,a){"use strict";t.a={name:"XLUserStatusSelect",props:{value:{type:String,default:"Normal"}},data:function(){return{currentValue:this.value,userStatusData:[{label:"默认",value:"Normal"},{label:"待审",value:"PendingApproval"},{label:"删除",value:"Removed"}]}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e)}}}},RdGK:function(e,t,a){"use strict";var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",{attrs:{"picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":"创建日期开始","end-placeholder":"创建日期结束",align:"right"},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})},staticRenderFns:[]};t.a=r},Ss4G:function(e,t,a){"use strict";var r=a("VsUZ");t.a={name:"XLGroupCascader",props:{value:{type:Array}},data:function(){return{currentValue:this.value,treeData:[],defaultProps:{children:"children",value:"id",label:"name"}}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e)}},mounted:function(){this.getGroupTree()},methods:{getGroupTree:function(){var e=this;r.a.getGroupTree().then(function(t){e.treeData=t.data.tree},function(t){e.$message({message:t.message,type:"error"})})},handleChange:function(e){this.$emit("change",e)},handleActiveItemChange:function(e){this.$emit("active-item-change",e)}}}},VsUZ:function(e,t,a){"use strict";var r=a("7+uW");t.a={login:function(e){return r.default.httpClient.post("/admin/login",e)},logout:function(){return r.default.httpClient.post("/admin/logout")},getProfile:function(){return r.default.httpClient.get("/admin/getProfile")},changeProfile:function(e){return r.default.httpClient.post("/admin/changeProfile",e)},changePassword:function(e){return r.default.httpClient.post("/admin/changePassword",e)},getMenus:function(){return r.default.httpClient.get("/admin/getMenus")},getBulletin:function(){return r.default.httpClient.get("/admin/getBulletin")},editBulletin:function(e){return r.default.httpClient.post("/admin/editBulletin",e)},getModulePermissions:function(){return r.default.httpClient.get("/admin/getModulePermissions")},extractModulePermissions:function(){return r.default.httpClient.get("/admin/extractModulePermissions")},clearModulePermissions:function(){return r.default.httpClient.get("/admin/clearModulePermissions")},getRoles:function(){return r.default.httpClient.get("/admin/getRoles")},addRole:function(e){return r.default.httpClient.post("/admin/addRole",e)},editRole:function(e){return r.default.httpClient.post("/admin/editRole",e)},removeRole:function(e){return r.default.httpClient.post("/admin/removeRole",e)},moveRole:function(e){return r.default.httpClient.post("/admin/moveRole",e)},saveRoleName:function(e){return r.default.httpClient.post("/admin/saveRoleName",e)},getGroupTree:function(){return r.default.httpClient.get("/admin/getGroupTree")},addGroup:function(e){return r.default.httpClient.post("/admin/addGroup",e)},editGroup:function(e){return r.default.httpClient.post("/admin/editGroup",e)},removeGroup:function(e){return r.default.httpClient.post("/admin/removeGroup",e)},moveGroup:function(e){return r.default.httpClient.post("/admin/moveGroup",e)},getUsers:function(e){return r.default.httpClient.post("/admin/getUsers",e)},addUser:function(e){return r.default.httpClient.post("/admin/addUser",e)},editUser:function(e){return r.default.httpClient.post("/admin/editUser",e)},removeUser:function(e){return r.default.httpClient.post("/admin/removeUser",e)},getUserStatus:function(){return r.default.httpClient.get("/admin/getUserStatus")},getNotificationsForManager:function(e){return r.default.httpClient.post("/admin/getNotificationsForManager",e)},addNotification:function(e){return r.default.httpClient.post("/admin/addNotification",e)},editNotification:function(e){return r.default.httpClient.post("/admin/editNotification",e)},removeNotification:function(e){return r.default.httpClient.post("/admin/removeNotification",e)},getNotifications:function(e){return r.default.httpClient.post("/admin/getNotifications",e)},readNotifications:function(e){return r.default.httpClient.post("/admin/readNotifications",e)},deleteNotifications:function(e){return r.default.httpClient.post("/admin/deleteNotifications",e)},getNewestNotification:function(e){return r.default.httpClient.post("/admin/getNewestNotification",e)},getGroups:function(){return r.default.httpClient.get("/admin/getGroups")},getRoleBases:function(){return r.default.httpClient.get("/admin/getRoleBases")},getPermissionTree:function(){return r.default.httpClient.get("/admin/getPermissionTree")},callDirectly:function(e){return r.default.httpClient.get(e)},download:function(e,t){return r.default.httpClient.post(e,t,{responseType:"arraybuffer"})}}},YNH2:function(e,t,a){"use strict";var r=a("47Lh"),i=a("hm6y"),n=a("VU/8")(r.a,i.a,!1,null,null,null);t.a=n.exports},bzuE:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return n});var r="/api",i="",n=""},fNq0:function(e,t,a){"use strict";var r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}]},[a("el-header",{staticClass:"header"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("用户管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("用户列表")])],1)],1),e._v(" "),a("el-main",{staticClass:"main"},[a("el-form",{ref:"searchCriteriaForm",staticClass:"searchCriteriaForm",attrs:{model:e.searchCriteriaForm,inline:""}},[a("el-row",[a("el-form-item",[a("el-input",{staticClass:"filterText",attrs:{placeholder:"关键字(用户名/真实名称/昵称/邮箱/手机号)",clearable:""},model:{value:e.searchCriteriaForm.keyword,callback:function(t){e.$set(e.searchCriteriaForm,"keyword",t)},expression:"searchCriteriaForm.keyword"}})],1),e._v(" "),a("el-form-item",[a("el-cascader",{attrs:{options:e.editGroupTreeData,props:e.editGroupTreeDefaultProps,clearable:"","change-on-select":"",filterable:"",placeholder:"分组"},model:{value:e.searchCriteriaForm.groupIdPath,callback:function(t){e.$set(e.searchCriteriaForm,"groupIdPath",t)},expression:"searchCriteriaForm.groupIdPath"}})],1),e._v(" "),a("el-form-item",[a("xl-userStatusSelect",{model:{value:e.searchCriteriaForm.status,callback:function(t){e.$set(e.searchCriteriaForm,"status",t)},expression:"searchCriteriaForm.status"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",icon:e.isSearchCriteriaFormExpand?"el-icon-caret-top":"el-icon-caret-bottom"},on:{click:function(t){e.isSearchCriteriaFormExpand=!e.isSearchCriteriaFormExpand}}}),e._v(" "),a("el-button-group",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.handleSearch()}}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.handleSearchAll()}}},[e._v("全部")])],1),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){e.handleAdd()}}},[e._v("添加")])],1)],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.isSearchCriteriaFormExpand,expression:"isSearchCriteriaFormExpand"}]},[a("el-form-item",[a("xl-datePicker",{model:{value:e.searchCriteriaForm.creationDate,callback:function(t){e.$set(e.searchCriteriaForm,"creationDate",t)},expression:"searchCriteriaForm.creationDate"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.page.list,"empty-text":e.mainTableEmptyText},on:{"sort-change":e.handleSortChange}},[a("el-table-column",{attrs:{prop:"userId",label:"#",width:"60",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名",width:"160",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"group.name",label:"分组",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"角色",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.role?t.row.role.name:""))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"displayName",label:"昵称",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"真实名称",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.realName&&!t.row.realNameIsValid,expression:"scope.row.realName && !scope.row.realNameIsValid"}],staticClass:"el-icon-question"}),e._v(" "),a("span",[e._v(e._s(t.row.realName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号码",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.mobile&&!t.row.mobileIsValid,expression:"scope.row.mobile && !scope.row.mobileIsValid"}],staticClass:"el-icon-question"}),e._v(" "),a("span",[e._v(e._s(t.row.mobile))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Email",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.email&&!t.row.emailIsValid,expression:"scope.row.email && !scope.row.emailIsValid"}],staticClass:"el-icon-question"}),e._v(" "),a("span",[e._v(e._s(t.row.email))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"statusText",label:"状态",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"creationDate",label:"创建时间",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"开发",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.isDeveloper?"√":"×")+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"测试",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.isTester?"√":"×")+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",fixed:"right",width:"84"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(a){e.handleEdit(t.row)}}}),e._v(" "),a("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-delete"},on:{click:function(a){e.handleRemove(t.row)}}})]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.mainFormDialogVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.mainFormDialogVisible=t}},nativeOn:{submit:function(e){e.preventDefault()}}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("\n        "+e._s(e.editActive?"编辑":"添加")+"\n      ")]),e._v(" "),a("el-form",{ref:"mainForm",attrs:{model:e.mainForm,rules:e.mainFormRules,"label-position":"right","label-width":"160px"}},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeTabName,callback:function(t){e.activeTabName=t},expression:"activeTabName"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[a("el-form-item",{attrs:{label:"分组",prop:"groupIdPath"}},[a("el-cascader",{attrs:{options:e.editGroupTreeData,props:e.editGroupTreeDefaultProps,clearable:"","change-on-select":"",filterable:"",placeholder:"请选择分组"},on:{change:e.handleGroupCascaderChange},model:{value:e.mainForm.groupIdPath,callback:function(t){e.$set(e.mainForm,"groupIdPath",t)},expression:"mainForm.groupIdPath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色",prop:"roleId"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择角色"},model:{value:e.mainForm.roleId,callback:function(t){e.$set(e.mainForm,"roleId",t)},expression:"mainForm.roleId"}},e._l(e.editGroupRoleListData,function(e){return a("el-option",{key:e.roleId,attrs:{label:e.name,value:e.roleId}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{ref:"username",attrs:{autocomplete:"off",placeholder:"请输入用户名"},model:{value:e.mainForm.username,callback:function(t){e.$set(e.mainForm,"username","string"==typeof t?t.trim():t)},expression:"mainForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",required:!0}},[a("xl-userStatusRadioGroup",{model:{value:e.mainForm.status,callback:function(t){e.$set(e.mainForm,"status",t)},expression:"mainForm.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"登录密码",prop:"password",required:!e.editActive}},[a("el-input",{attrs:{type:"password",placeholder:e.editActive?"如果不修改密码，请保持为空":"请输入登录密码"},model:{value:e.mainForm.password,callback:function(t){e.$set(e.mainForm,"password",t)},expression:"mainForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"passwordConfirm",required:!e.editActive}},[a("el-input",{attrs:{type:"password",placeholder:e.editActive?"如果不修改密码，请保持为空":"请输入确认密码"},model:{value:e.mainForm.passwordConfirm,callback:function(t){e.$set(e.mainForm,"passwordConfirm",t)},expression:"mainForm.passwordConfirm"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{attrs:{type:"text"},model:{value:e.mainForm.displayName,callback:function(t){e.$set(e.mainForm,"displayName",t)},expression:"mainForm.displayName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"真实名称"}},[a("el-input",{attrs:{type:"text"},model:{value:e.mainForm.realName,callback:function(t){e.$set(e.mainForm,"realName",t)},expression:"mainForm.realName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"真实名称是否验证"}},[a("el-switch",{model:{value:e.mainForm.realNameIsValid,callback:function(t){e.$set(e.mainForm,"realNameIsValid",t)},expression:"mainForm.realNameIsValid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{type:"text"},model:{value:e.mainForm.email,callback:function(t){e.$set(e.mainForm,"email",t)},expression:"mainForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱是否验证"}},[a("el-switch",{model:{value:e.mainForm.emailIsValid,callback:function(t){e.$set(e.mainForm,"emailIsValid",t)},expression:"mainForm.emailIsValid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[a("el-input",{attrs:{type:"text"},model:{value:e.mainForm.mobile,callback:function(t){e.$set(e.mainForm,"mobile",t)},expression:"mainForm.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号码是否验证"}},[a("el-switch",{model:{value:e.mainForm.mobileIsValid,callback:function(t){e.$set(e.mainForm,"mobileIsValid",t)},expression:"mainForm.mobileIsValid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.mainForm.description,callback:function(t){e.$set(e.mainForm,"description","string"==typeof t?t.trim():t)},expression:"mainForm.description"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"头像",prop:"headUrl"}},[a("el-input",{ref:"headUrl",attrs:{autocomplete:"off",placeholder:"请输入头像 Url"},model:{value:e.mainForm.headUrl,callback:function(t){e.$set(e.mainForm,"headUrl","string"==typeof t?t.trim():t)},expression:"mainForm.headUrl"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleChangeHeadUrlBrowser},slot:"append"})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Logo",prop:"logoUrl"}},[a("el-input",{ref:"logoUrl",attrs:{autocomplete:"off",placeholder:"请输入Logo Url"},model:{value:e.mainForm.logoUrl,callback:function(t){e.$set(e.mainForm,"logoUrl","string"==typeof t?t.trim():t)},expression:"mainForm.logoUrl"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleChangeLogoUrlBrowser},slot:"append"})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"是否是开发人员"}},[a("el-switch",{model:{value:e.mainForm.isDeveloper,callback:function(t){e.$set(e.mainForm,"isDeveloper",t)},expression:"mainForm.isDeveloper"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否是测试人员"}},[a("el-switch",{model:{value:e.mainForm.isTester,callback:function(t){e.$set(e.mainForm,"isTester",t)},expression:"mainForm.isTester"}})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"附加分组",name:"second"}},[a("el-form-item",{attrs:{label:"附加分组"}},[a("el-tree",{ref:"editGroupTree",attrs:{data:e.editGroupTreeData,props:e.editGroupTreeDefaultProps,"node-key":"id","empty-text":"","show-checkbox":"","default-expand-all":"","check-strictly":""},on:{"check-change":e.handleGroupTreeCheckChange}})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"附加角色",name:"third"}},[a("el-form-item",{attrs:{label:"附加角色"}},[a("el-checkbox-group",{model:{value:e.mainForm.roleIds,callback:function(t){e.$set(e.mainForm,"roleIds",t)},expression:"mainForm.roleIds"}},e._l(e.editRoleListData,function(t){return a("el-checkbox",{key:t.roleId,attrs:{label:t.roleId}},[e._v(e._s(t.name))])}),1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"附加权限",name:"fourth"}},[a("el-form-item",{attrs:{label:"附加权限"}},[a("el-tree",{ref:"editPermissionTree",attrs:{data:e.editPermissionTreeData,props:e.editPermissionTreeDefaultProps,"node-key":"id","empty-text":"","show-checkbox":"","default-expand-all":"","check-strictly":""},on:{"check-change":e.handlePermissionTreeCheckChange}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.handleMainFormSure(!1)}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleMainFormSure(!0)}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.fileManagerDialogVisible,"close-on-click-modal":!1,width:"800px"},on:{"update:visible":function(t){e.fileManagerDialogVisible=t}},nativeOn:{submit:function(e){e.preventDefault()}}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("\n        "+e._s("选择图片")+"\n      ")]),e._v(" "),a("iframe",{staticClass:"el-main-content",attrs:{src:e.fileManagerUrl,scrolling:"no",frameBorder:"0",width:"760",height:"560"}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleCloseFileManager()}}},[e._v("关 闭")])],1)])],1),e._v(" "),a("el-footer",{staticClass:"footer"},[e.page.totalItemCount?a("el-pagination",{attrs:{"current-page":e.searchCriteriaForm.pagingInfo.pageNumber,"page-sizes":[20,50,100,200,400],"page-size":e.searchCriteriaForm.pagingInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.totalItemCount},on:{"size-change":e.handlePaginationSizeChange,"current-change":e.handlePaginationCurrentChange}}):e._e()],1)],1)},staticRenderFns:[]};t.a=r},hm6y:function(e,t,a){"use strict";var r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-radio-group",{model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.userStatusData,function(t){return a("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}),1)},staticRenderFns:[]};t.a=r},"lY/r":function(e,t,a){"use strict";var r=a("BO1k"),i=a.n(r),n=a("VsUZ"),o=a("M4fF"),l=a.n(o),s=a("NC6I"),u=a.n(s);t.a={data:function(){var e=this;return{isLoading:!1,activeTabName:"first",page:{list:null,totalItemCount:null,totalPageCount:null},isSearchCriteriaFormExpand:!1,searchCriteriaForm:{keyword:null,groupIds:null,creationDate:null,creationDateBegin:null,creationDateEnd:null,status:null,groupIdPath:[],pagingInfo:{pageNumber:1,pageSize:20,isExcludeMetaData:!1,sortInfo:{sort:"userId",sortDir:"ASC"}}},removeActive:null,editActive:null,mainFormDialogVisible:!1,mainForm:{userId:null,status:null,username:null,displayName:null,realName:null,realNameIsValid:!1,email:null,emailIsValid:!1,mobile:null,mobileIsValid:!1,groupIdPath:[],groupId:null,groupIds:[],roleId:null,roleIds:[],permissionIds:null,password:null,passwordConfirm:null,description:null,headUrl:null,logoUrl:null,isDeveloper:!1,isTester:!1},mainFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{max:20,message:"最多支持20个字符",trigger:"blur"}],displayName:[{max:20,message:"最多支持20个字符",trigger:"blur"}],realName:[{max:100,message:"最多支持100个字符",trigger:"blur"}],mobile:[{pattern:/^1\d{10}$/,message:"请输入正确的手机号码",trigger:"blur"}],email:[{pattern:/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,message:"请输入正确的邮箱",trigger:"blur"}],groupIdPath:[{required:!0,type:"array",message:"请选择分组",trigger:"change"}],password:[{validator:function(t,a,r){!e.editActive||a&&0!==a.length||r(),a?a.length<6?r(new Error("请输入至少6位密码")):a.length>32?r(new Error("密码请保持在32位以内")):r():r(new Error("请输入登录密码"))},trigger:"blur"}],passwordConfirm:[{validator:function(t,a,r){!e.editActive||e.mainForm.password&&0!==e.mainForm.password.length||r(),a?a!==e.mainForm.password?r(new Error("两次输入密码不一致!")):r():r(new Error("请输入确认密码"))},trigger:"blur"}]},editPermissionTreeData:null,editPermissionTreeDefaultProps:{children:"children",label:"name"},editGroupRoleListData:null,editRoleListData:null,editGroupTreeData:[],editGroupTreeDefaultProps:{children:"children",value:"id",label:"name"},fileManagerDialogVisible:!1,fileManagerUrlFormat:"http://localhost:5000/lib/fileman/index.html?integration=custom&noselect=true&field=",fileManagerUrl:null}},mounted:function(){this.getPage(),this.getGroupTree(),this.getRoleBases(),this.getPermissionTree()},computed:{mainTableEmptyText:function(){return this.isLoading?"加载中...":"暂无数据"}},watch:{},methods:{getPage:function(){var e=this;this.isLoading=!0;var t=this.searchCriteriaForm;n.a.getUsers(t).then(function(t){e.isLoading=!1,e.page=t.data.page},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})},handlePaginationSizeChange:function(e){this.searchCriteriaForm.pagingInfo.pageSize=e,this.searchCriteriaForm.pagingInfo.pageNumber=1,this.getPage()},handlePaginationCurrentChange:function(e){this.searchCriteriaForm.pagingInfo.pageNumber=e,this.getPage()},getGroupTree:function(){var e=this;n.a.getGroupTree().then(function(t){e.editGroupTreeData=t.data.tree},function(t){e.showErrorMessage(t.message)})},getRoleBases:function(){var e=this;n.a.getRoleBases().then(function(t){e.editRoleListData=t.data.list},function(t){e.showErrorMessage(t.message)})},getPermissionTree:function(){var e=this;n.a.getPermissionTree().then(function(t){e.editPermissionTreeData=t.data.tree},function(t){e.showErrorMessage(t.message)})},handleSearchAll:function(){this.searchCriteriaForm.pagingInfo.pageNumber=1,this.searchCriteriaForm.keyword=null,this.searchCriteriaForm.groupIds=null,this.searchCriteriaForm.creationDate=null,this.searchCriteriaForm.creationDateBegin=null,this.searchCriteriaForm.creationDateEnd=null,this.searchCriteriaForm.status=null,this.searchCriteriaForm.groupIdPath=[],this.getPage()},handleSearch:function(){this.searchCriteriaForm.pagingInfo.pageNumber=1,this.searchCriteriaForm.creationDate&&2===this.searchCriteriaForm.creationDate.length&&(this.searchCriteriaForm.creationDateBegin=this.searchCriteriaForm.creationDate[0],this.searchCriteriaForm.creationDateEnd=this.searchCriteriaForm.creationDate[1]),this.searchCriteriaForm.groupIds=this.searchCriteriaForm.groupIdPath&&this.searchCriteriaForm.groupIdPath.length?[this.searchCriteriaForm.groupIdPath[this.searchCriteriaForm.groupIdPath.length-1]]:null,this.getPage()},handleAdd:function(){var e=this;this.validateBaseData()&&(this.activeTabName="first",this.editActive=null,this.mainFormDialogVisible=!0,this.mainForm.userId=null,this.mainForm.status="Normal",this.mainForm.username=null,this.mainForm.displayName=null,this.mainForm.realName=null,this.mainForm.realNameIsValid=!1,this.mainForm.email=null,this.mainForm.emailIsValid=!1,this.mainForm.mobile=null,this.mainForm.mobileIsValid=!1,this.mainForm.groupIdPath=[],this.mainForm.groupId=null,this.mainForm.groupIds=[],this.mainForm.roleId=null,this.editGroupRoleListData=[],this.mainForm.roleIds=[],this.mainForm.permissionIds=null,this.mainForm.password=null,this.mainForm.passwordConfirm=null,this.mainForm.description=null,this.mainForm.headUrl=null,this.mainForm.logoUrl=null,this.mainForm.isDeveloper=!1,this.mainForm.isTester=!1,this.$nextTick(function(){e.$refs.editGroupTree.setCheckedKeys([],!0),e.$refs.editPermissionTree.setCheckedKeys([],!0),e.clearValidate("mainForm")}))},handleEdit:function(e){var t=this;console.log("handleEdit",e),this.validateBaseData()&&e&&(this.activeTabName="first",this.editActive=e,this.mainFormDialogVisible=!0,this.mainForm.userId=e.userId,this.mainForm.status=e.status,this.mainForm.username=e.username,this.mainForm.displayName=e.displayName,this.mainForm.realName=e.realName,this.mainForm.realNameIsValid=e.realNameIsValid,this.mainForm.email=e.email,this.mainForm.emailIsValid=e.emailIsValid,this.mainForm.mobile=e.mobile,this.mainForm.mobileIsValid=e.mobileIsValid,this.getGroupIdPath(this.editGroupTreeData,e.group.groupId),this.mainForm.groupId=e.group.groupId,this.mainForm.groupIds=e.groups.map(function(e){return e.groupId}),this.mainForm.roleId=e.role?e.role.roleId:null,this.getGroupAvailableRoles(this.editGroupTreeData,e.group.groupId),this.mainForm.roleIds=e.roles.map(function(e){return e.roleId}),this.mainForm.permissionIds=e.permissions.map(function(e){return e.permissionId}),this.mainForm.password=null,this.mainForm.passwordConfirm=null,this.mainForm.description=e.description,this.mainForm.headUrl=e.headUrl,this.mainForm.logoUrl=e.logoUrl,this.mainForm.isDeveloper=e.isDeveloper,this.mainForm.isTester=e.isTester,this.$nextTick(function(){t.$refs.editGroupTree.setCheckedKeys(t.mainForm.groupIds,!0),t.$refs.editPermissionTree.setCheckedKeys(t.mainForm.permissionIds,!0),t.clearValidate("mainForm")}))},handleMainFormSure:function(e){console.log("handleMainFormSure",e),e?this.editActive?this.edit():this.add():this.mainFormDialogVisible=!1},handleRemove:function(e){var t=this;this.removeActive=e,this.$confirm("删除该用户后，相关的数据也将被删除。是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.remove()}).catch(function(){t.removeActive=null})},handleGroupCascaderChange:function(e){console.log(e),this.mainForm.roleId=null,this.editGroupRoleListData=[],0!==e.length&&this.getGroupAvailableRoles(this.editGroupTreeData,e[e.length-1])},add:function(){var e=this;this.$refs.mainForm.validate(function(t){if(!t)return!1;e.isLoading=!0,e.mainForm.groupId=e.mainForm.groupIdPath[e.mainForm.groupIdPath.length-1];var a=l.a.cloneDeep(e.mainForm);e.params.password&&(a.password=u()(a.password)),a.passwordConfirm&&(a.passwordConfirm=u()(a.passwordConfirm)),n.a.addUser(a).then(function(t){e.isLoading=!1,e.mainFormDialogVisible=!1,e.getPage()},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})})},edit:function(){var e=this;this.editActive?this.$refs.mainForm.validate(function(t){if(!t)return!1;e.isLoading=!0,e.mainForm.groupId=e.mainForm.groupIdPath[e.mainForm.groupIdPath.length-1];var a=l.a.cloneDeep(e.mainForm);a.password&&(a.password=u()(a.password)),a.passwordConfirm&&(a.passwordConfirm=u()(a.passwordConfirm)),n.a.editUser(a).then(function(t){e.isLoading=!1,e.editActive=null,e.mainFormDialogVisible=!1,e.getPage()},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})}):this.showErrorMessage("异常：无编辑目标")},remove:function(){var e=this;if(this.removeActive){var t={userId:this.removeActive.userId};this.isLoading=!0,n.a.removeUser(t).then(function(t){e.isLoading=!1,e.removeActive=null,e.getPage()},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})}},validateBaseData:function(){return this.editGroupTreeData&&0!==this.editGroupTreeData.length?this.editRoleListData?!!this.editPermissionTreeData||(this.showErrorMessage("基础数据缺失：权限列表"),!1):(this.showErrorMessage("基础数据缺失：角色列表"),!1):(this.showErrorMessage("基础数据缺失：分组列表"),!1)},handleGroupTreeCheckChange:function(e,t,a){this.mainForm.groupIds=this.$refs.editGroupTree.getCheckedKeys()},handlePermissionTreeCheckChange:function(e,t,a){this.mainForm.permissionIds=this.$refs.editPermissionTree.getCheckedKeys()},getGroupIdPath:function(e,t){if(e){var a=!0,r=!1,n=void 0;try{for(var o,l=i()(e);!(a=(o=l.next()).done);a=!0){var s=o.value;if(s.id===t){this.mainForm.groupIdPath=s.parentIdPath?s.parentIdPath.concat():[],this.mainForm.groupIdPath.push(t);break}this.getGroupIdPath(s.children,t)}}catch(e){r=!0,n=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw n}}}},getGroupAvailableRoles:function(e,t){if(this.editGroupRoleListData=[],e){var a=!0,r=!1,n=void 0;try{for(var o,l=i()(e);!(a=(o=l.next()).done);a=!0){var s=o.value;if(s.id===t){this.editGroupRoleListData=s.availableRoles;break}this.getGroupAvailableRoles(s.children,t)}}catch(e){r=!0,n=e}finally{try{!a&&l.return&&l.return()}finally{if(r)throw n}}}},resetForm:function(e){this.$refs[e].resetFields()},clearValidate:function(e){this.$refs[e].clearValidate()},showErrorMessage:function(e){this.$message({message:e,type:"error"})},handleSortChange:function(e){this.searchCriteriaForm.pagingInfo.sortInfo.sort=e.prop,this.searchCriteriaForm.pagingInfo.sortInfo.sortDir="descending"===e.order?"DESC":"ASC",this.searchCriteriaForm.pagingInfo.pageNumber=1,this.getPage()},handleCloseFileManager:function(){this.fileManagerDialogVisible=!1},handleChangeHeadUrlBrowser:function(){this.fileManagerUrlFileld="headUrl",this.popupFileManager()},handleChangeLogoUrlBrowser:function(){this.fileManagerUrlFileld="logoUrl",this.popupFileManager()},popupFileManager:function(e){this.fileManagerUrl=this.fileManagerUrlFormat+this.fileManagerUrlFileld,this.fileManagerDialogVisible=!0}}}},t7Yk:function(e,t,a){"use strict";var r=a("N0+e"),i=a("uCBo"),n=a("VU/8")(r.a,i.a,!1,null,null,null);t.a=n.exports},tvR6:function(e,t){},uCBo:function(e,t,a){"use strict";var r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{attrs:{clearable:"",placeholder:"状态"},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.userStatusData,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)},staticRenderFns:[]};t.a=r},uN2V:function(e,t){},vT38:function(e,t,a){"use strict";t.a={name:"XLDatePicker",props:{value:{type:Array}},data:function(){return{currentValue:this.value,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近两周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-12096e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近两个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-5184e6),e.$emit("pick",[a,t])}}]}}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e)}}}}},["IlS5"]);
//# sourceMappingURL=user.js.map