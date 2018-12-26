webpackJsonp([10],{"/rEA":function(e,t,i){"use strict";(function(e){function n(e,t,i){this.name="ApiError",this.message=e||"Default Message",this.errorType=t||p.Default,this.innerError=i,this.stack=(new Error).stack}var a=i("//Fk"),o=i.n(a),r=i("mvHQ"),s=i.n(r),l=i("OvRC"),d=i.n(l),m=i("mtWM"),u=i.n(m),c=i("mw3O"),f=i.n(c),h=i("bzuE"),p={Default:"default",Sysetem:"sysetem"};(n.prototype=d()(Error.prototype)).constructor=n;var v=u.a.create({baseURL:h.a,timeout:2e4,responseType:"json",withCredentials:!0});v.interceptors.request.use(function(e){return"post"===e.method||"put"===e.method||"patch"===e.method?(e.headers={"Content-Type":"application/json; charset=UTF-8"},e.data=s()(e.data)):"delete"!==e.method&&"get"!==e.method&&"head"!==e.method||(e.paramsSerializer=function(e){return f.a.stringify(e,{arrayFormat:"indices"})}),localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e},function(e){return e}),v.interceptors.response.use(function(t){if(-1===t.headers["content-type"].indexOf("json"))return t;var i=void 0;if("arraybuffer"===t.request.responseType&&"[object ArrayBuffer]"===t.data.toString()){var a=e.from(t.data).toString("utf8");console.log(a),i=JSON.parse(a)}else i=t.data;if(i)if(i.url)top.location=i.url;else if(200!==i.code)return console.log(i),o.a.reject(new n(i.message));return t},function(e){return o.a.reject(new n(e.message,p.Sysetem,e))}),t.a={install:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.httpClient=v,e.prototype.$httpClient=v}}}).call(t,i("EuP9").Buffer)},NAu6:function(e,t,i){"use strict";var n=i("VsUZ"),a=i("M4fF"),o=i.n(a);t.a={data:function(){return{isLoading:!1,activeTabName:"first",treeData:null,treeDefaultProps:{children:"children",label:"name",value:"id"},filterText:null,removeActive:null,moveActive:null,moveFormDialogVisible:!1,editActive:null,mainFormDialogVisible:!1,mainForm:{groupId:null,name:null,roleIds:[],permissionIds:null,availableRoleIds:[],parentIdPath:[],parentId:null,isContainsUser:null,isDisabled:null},moveForm:{sourceId:null,targetIdPath:null,targetId:null,isChild:!1,movingLocation:0},mainFormRules:{name:[{required:!0,message:"请输入分组名称",trigger:"blur"},{max:50,message:"最多支持50个字符",trigger:"blur"}]},moveFormRules:{targetIdPath:[{required:!0,type:"array",message:"请选择目标节点",trigger:"change"}]},editPermissionTreeData:null,editPermissionTreeDefaultProps:{children:"children",label:"name"},editRoleListData:null,editParentTreeData:null,editParentTreeDefaultProps:{children:"children",value:"id",label:"name"}}},mounted:function(){this.getTree(),this.getRoleBases(),this.getPermissionTree()},computed:{mainTableEmptyText:function(){return this.isLoading?"加载中...":"暂无数据"}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{getTree:function(){var e=this;this.isLoading=!0,n.a.getGroupTree().then(function(t){e.isLoading=!1,e.treeData=t.data.tree},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},getRoleBases:function(){var e=this;n.a.getRoleBases().then(function(t){e.editRoleListData=t.data.list},function(t){e.showErrorMessage(t.message)})},getPermissionTree:function(){var e=this;n.a.getPermissionTree().then(function(t){e.editPermissionTreeData=t.data.tree},function(t){e.showErrorMessage(t.message)})},handleAdd:function(e,t){var i=this;if(console.log("handleAdd",e,t),this.validateBaseData()){var n=[];t&&(n=t.parentIdPath?t.parentIdPath:[]).push(t.id),this.activeTabName="first",this.editActive=null,this.generateParentTree(null),this.mainFormDialogVisible=!0,this.mainForm.groupId=null,this.mainForm.name=null,this.mainForm.parentIdPath=n,this.mainForm.parentId=t?t.id:null,this.mainForm.roleIds=[],this.mainForm.permissionIds=null,this.mainForm.availableRoleIds=[],this.mainForm.isContainsUser=!0,this.mainForm.isDisabled=!1,this.$nextTick(function(){i.$refs.editPermissionTree.setCheckedKeys([],!0),i.clearValidate("mainForm")})}},handleEdit:function(e,t){var i=this;console.log("handleEdit",e,t),this.validateBaseData()&&t&&(this.activeTabName="first",this.editActive=t,this.generateParentTree(t),this.mainFormDialogVisible=!0,this.mainForm.groupId=t.id,this.mainForm.name=t.name,this.mainForm.parentIdPath=t.parentIdPath,this.mainForm.parentId=t.parentId,this.mainForm.roleIds=t.roles.map(function(e){return e.roleId}),this.mainForm.permissionIds=t.permissions.map(function(e){return e.permissionId}),this.mainForm.availableRoleIds=t.availableRoles.map(function(e){return e.roleId}),this.mainForm.isContainsUser=t.isContainsUser,this.mainForm.isDisabled=t.isDisabled,this.$nextTick(function(){i.$refs.editPermissionTree.setCheckedKeys(i.mainForm.permissionIds,!0),i.clearValidate("mainForm")}))},handleMainFormSure:function(e){console.log("handleMainFormSure",e),e?this.editActive?this.edit():this.add():this.mainFormDialogVisible=!1},handleRemove:function(e,t){var i=this;this.removeActive=t,this.$confirm("删除该分组后，相关的数据也将被删除。是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.remove()}).catch(function(){i.removeActive=null})},handleMove:function(e,t){var i=this;console.log("handleMove",e,t),this.validateBaseData()&&t&&(this.moveActive=t,this.generateParentTree(t),this.moveFormDialogVisible=!0,this.moveForm.sourceId=t.id,this.moveForm.targetIdPath=[],this.moveForm.movingLocation=0,this.moveForm.isChild=!1,this.$nextTick(function(){i.clearValidate("moveForm")}))},handleMoveFormSure:function(e){console.log("handleMoveFormSure",e),e?this.move():(this.moveFormDialogVisible=!1,this.moveActive=null)},add:function(){var e=this;this.$refs.mainForm.validate(function(t){if(!t)return!1;e.isLoading=!0,e.mainForm.parentId=e.mainForm.parentIdPath&&e.mainForm.parentIdPath.length?e.mainForm.parentIdPath[e.mainForm.parentIdPath.length-1]:null;var i=e.mainForm;n.a.addGroup(i).then(function(t){e.isLoading=!1,e.mainFormDialogVisible=!1,e.getTree()},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})})},edit:function(){var e=this;this.editActive?this.$refs.mainForm.validate(function(t){if(!t)return!1;e.isLoading=!0,e.mainForm.parentId=e.mainForm.parentIdPath&&e.mainForm.parentIdPath.length?e.mainForm.parentIdPath[e.mainForm.parentIdPath.length-1]:null;var i=e.mainForm;n.a.editGroup(i).then(function(t){e.isLoading=!1,e.editActive=null,e.mainFormDialogVisible=!1,e.getTree()},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})}):this.showErrorMessage("异常：无编辑目标")},remove:function(){var e=this;if(this.removeActive){var t={groupId:this.removeActive.id};this.isLoading=!0,n.a.removeGroup(t).then(function(t){e.isLoading=!1,e.removeActive=null,e.getTree()},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})}},move:function(){var e=this;this.moveActive&&this.$refs.moveForm.validate(function(t){if(!t)return!1;var i={sourceId:e.moveActive.id,targetId:e.moveForm.targetIdPath[e.moveForm.targetIdPath.length-1],isChild:0===e.moveForm.movingLocation?e.moveForm.isChild:null,movingLocation:e.moveForm.movingLocation};console.log(e.moveForm),e.isLoading=!0,n.a.moveGroup(i).then(function(t){e.isLoading=!1,e.moveFormDialogVisible=!1,e.moveActive=null,e.getTree()},function(t){e.isLoading=!1,e.showErrorMessage(t.message)})})},moveQuickly:function(e,t,i,a){var o=this,r={sourceId:e,targetId:t,isChild:i,movingLocation:a};this.isLoading=!0,n.a.moveGroup(r).then(function(e){o.isLoading=!1,o.getTree()},function(e){o.isLoading=!1,o.showErrorMessage(e.message)})},validateBaseData:function(){return this.editRoleListData?!!this.editPermissionTreeData||(this.showErrorMessage("基础数据缺失：权限列表"),!1):(this.showErrorMessage("基础数据缺失：角色列表"),!1)},handlePermissionTreeCheckChange:function(e,t,i){this.mainForm.permissionIds=this.$refs.editPermissionTree.getCheckedKeys()},generateParentTree:function(e){this.treeData?e?(this.editParentTreeData=o.a.cloneDeep(this.treeData),this.editParentTreeData=this.editParentTreeData.filter(function(e,t,i){return!e.isSystem}),this.filterTree(this.editParentTreeData,e)):this.editParentTreeData=this.treeData.filter(function(e,t,i){return!e.isSystem}):this.editParentTreeData=[]},filterTree:function(e,t){for(var i=0;i<e.length;i++){var n=e[i];if(n.id===t.id){e.splice(i,1);break}n.children&&this.filterTree(n.children,t)}},resetForm:function(e){this.$refs[e].resetFields()},clearValidate:function(e){this.$refs[e].clearValidate()},showErrorMessage:function(e){this.$message({message:e,type:"error"})},renderContent:function(e,t){var i=this,n=t.node,a=t.data;t.store;return e("span",{style:"flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 10px;"},[e("span",[e("span",{class:"el-tree-node__label"},[n.label," ",e("font-awesome-icon",{slot:"prefix",attrs:{icon:"user-times"},directives:[{name:"show",value:!a.isContainsUser}]})])]),e("span",[e("span",{style:"font-size: 12px;"},[" ",a.availableRoles?a.availableRoles.map(function(e){return e.name}).join(" "):""," "])]),e("span",{directives:[{name:"show",value:!a.isSystem}]},[e("span",{style:"font-size: 12px;",directives:[{name:"show",value:a.isDisabled}]},["[停用] "]),e("el-button",{style:"font-size: 12px;",attrs:{type:"text",icon:"el-icon-edit-outline"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),i.handleEdit(n,a)}}},["编辑"]),e("el-button",{style:"font-size: 12px;",attrs:{type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),i.handleAdd(n,a)}}},["添加"]),e("el-button",{style:"font-size: 12px;",attrs:{type:"text",icon:"el-icon-rank"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),i.handleMove(n,a)}}},["移动"]),e("el-button",{style:"font-size: 12px;",attrs:{type:"text",icon:"el-icon-remove-outline"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),i.handleRemove(n,a)}}},["删除"])])])},handleDragStart:function(e,t){},handleDragEnter:function(e,t,i){},handleDragLeave:function(e,t,i){},handleDragOver:function(e,t,i){},handleDragEnd:function(e,t,i,n){},handleDrop:function(e,t,i,n){this.moveQuickly(e.data.id,t.data.id,"before"===i?null:"inner"===i,"before"===i?1:0)},allowDrop:function(e,t,i){return!t.data.isSystem},allowDrag:function(e){return!e.data.isSystem}}}},Otnz:function(e,t){},VsUZ:function(e,t,i){"use strict";var n=i("7+uW");t.a={login:function(e){return n.default.httpClient.post("/admin/login",e)},logout:function(){return n.default.httpClient.post("/admin/logout")},getProfile:function(){return n.default.httpClient.get("/admin/getProfile")},changeProfile:function(e){return n.default.httpClient.post("/admin/changeProfile",e)},changePassword:function(e){return n.default.httpClient.post("/admin/changePassword",e)},getMenus:function(){return n.default.httpClient.get("/admin/getMenus")},getBulletin:function(){return n.default.httpClient.get("/admin/getBulletin")},editBulletin:function(e){return n.default.httpClient.post("/admin/editBulletin",e)},getModulePermissions:function(){return n.default.httpClient.get("/admin/getModulePermissions")},extractModulePermissions:function(){return n.default.httpClient.get("/admin/extractModulePermissions")},clearModulePermissions:function(){return n.default.httpClient.get("/admin/clearModulePermissions")},getRoles:function(){return n.default.httpClient.get("/admin/getRoles")},addRole:function(e){return n.default.httpClient.post("/admin/addRole",e)},editRole:function(e){return n.default.httpClient.post("/admin/editRole",e)},removeRole:function(e){return n.default.httpClient.post("/admin/removeRole",e)},moveRole:function(e){return n.default.httpClient.post("/admin/moveRole",e)},saveRoleName:function(e){return n.default.httpClient.post("/admin/saveRoleName",e)},getGroupTree:function(){return n.default.httpClient.get("/admin/getGroupTree")},addGroup:function(e){return n.default.httpClient.post("/admin/addGroup",e)},editGroup:function(e){return n.default.httpClient.post("/admin/editGroup",e)},removeGroup:function(e){return n.default.httpClient.post("/admin/removeGroup",e)},moveGroup:function(e){return n.default.httpClient.post("/admin/moveGroup",e)},getUsers:function(e){return n.default.httpClient.post("/admin/getUsers",e)},addUser:function(e){return n.default.httpClient.post("/admin/addUser",e)},editUser:function(e){return n.default.httpClient.post("/admin/editUser",e)},removeUser:function(e){return n.default.httpClient.post("/admin/removeUser",e)},getUserStatus:function(){return n.default.httpClient.get("/admin/getUserStatus")},getNotificationsForManager:function(e){return n.default.httpClient.post("/admin/getNotificationsForManager",e)},addNotification:function(e){return n.default.httpClient.post("/admin/addNotification",e)},editNotification:function(e){return n.default.httpClient.post("/admin/editNotification",e)},removeNotification:function(e){return n.default.httpClient.post("/admin/removeNotification",e)},getNotifications:function(e){return n.default.httpClient.post("/admin/getNotifications",e)},readNotifications:function(e){return n.default.httpClient.post("/admin/readNotifications",e)},deleteNotifications:function(e){return n.default.httpClient.post("/admin/deleteNotifications",e)},getNewestNotification:function(e){return n.default.httpClient.post("/admin/getNewestNotification",e)},getGroups:function(){return n.default.httpClient.get("/admin/getGroups")},getRoleBases:function(){return n.default.httpClient.get("/admin/getRoleBases")},getPermissionTree:function(){return n.default.httpClient.get("/admin/getPermissionTree")},callDirectly:function(e){return n.default.httpClient.get(e)},download:function(e,t){return n.default.httpClient.post(e,t,{responseType:"arraybuffer"})}}},XlYP:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("tvR6"),a=(i.n(n),i("qBF2")),o=i.n(a),r=i("7+uW"),s=i("/rEA"),l=i("uN2V"),d=(i.n(l),i("lrRg")),m=i("C/JF"),u=i("fhbW"),c=i("1e6/");m.c.add(u.d,u.c),r.default.config.productionTip=!1,r.default.use(s.a),r.default.use(o.a,{size:"mini"}),r.default.component("font-awesome-icon",c.a),new r.default({el:"#app",render:function(e){return e(d.a)}})},auAS:function(e,t,i){"use strict";var n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}]},[i("el-header",{staticClass:"header"},[i("el-breadcrumb",{staticClass:"breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",[e._v("用户管理")]),e._v(" "),i("el-breadcrumb-item",[e._v("分组列表")])],1)],1),e._v(" "),i("el-main",{staticClass:"main"},[i("el-row",[i("el-input",{staticClass:"filterText",attrs:{placeholder:"输入关键字进行过滤",clearable:""},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){e.handleAdd()}}},[e._v("添加")])],1),e._v(" "),i("el-row",[i("el-tree",{ref:"tree",attrs:{data:e.treeData,props:e.treeDefaultProps,"empty-text":e.mainTableEmptyText,"node-key":"id","filter-node-method":e.filterNode,"render-content":e.renderContent,"default-expand-all":!0,draggable:"","allow-drop":e.allowDrop,"allow-drag":e.allowDrag},on:{"node-drag-start":e.handleDragStart,"node-drag-enter":e.handleDragEnter,"node-drag-leave":e.handleDragLeave,"node-drag-over":e.handleDragOver,"node-drag-end":e.handleDragEnd,"node-drop":e.handleDrop}})],1),e._v(" "),i("el-dialog",{attrs:{visible:e.mainFormDialogVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.mainFormDialogVisible=t}},nativeOn:{submit:function(e){e.preventDefault()}}},[i("span",{attrs:{slot:"title"},slot:"title"},[e._v("\n        "+e._s(e.editActive?"编辑":"添加")+"\n      ")]),e._v(" "),i("el-form",{ref:"mainForm",attrs:{model:e.mainForm,rules:e.mainFormRules,"label-position":"right","label-width":"120px"}},[i("el-tabs",{attrs:{type:"card"},model:{value:e.activeTabName,callback:function(t){e.activeTabName=t},expression:"activeTabName"}},[i("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[i("el-form-item",{attrs:{label:"所属分组"}},[i("el-cascader",{attrs:{options:e.editParentTreeData,props:e.editParentTreeDefaultProps,clearable:"","change-on-select":""},model:{value:e.mainForm.parentIdPath,callback:function(t){e.$set(e.mainForm,"parentIdPath",t)},expression:"mainForm.parentIdPath"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"分组名称",prop:"name"}},[i("el-input",{ref:"name",attrs:{autocomplete:"off",placeholder:"请输入分组名称"},model:{value:e.mainForm.name,callback:function(t){e.$set(e.mainForm,"name","string"==typeof t?t.trim():t)},expression:"mainForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"是否包含用户"}},[i("el-switch",{model:{value:e.mainForm.isContainsUser,callback:function(t){e.$set(e.mainForm,"isContainsUser",t)},expression:"mainForm.isContainsUser"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"是否停用"}},[i("el-switch",{model:{value:e.mainForm.isDisabled,callback:function(t){e.$set(e.mainForm,"isDisabled",t)},expression:"mainForm.isDisabled"}})],1)],1),e._v(" "),i("el-tab-pane",{attrs:{label:"限制角色",name:"second"}},[i("el-form-item",{attrs:{label:"限制角色"}},[i("el-checkbox-group",{model:{value:e.mainForm.availableRoleIds,callback:function(t){e.$set(e.mainForm,"availableRoleIds",t)},expression:"mainForm.availableRoleIds"}},e._l(e.editRoleListData,function(t){return i("el-checkbox",{key:t.roleId,attrs:{label:t.roleId}},[e._v(e._s(t.name))])}),1)],1)],1),e._v(" "),i("el-tab-pane",{attrs:{label:"包含角色",name:"third"}},[i("el-form-item",{attrs:{label:"包含角色"}},[i("el-checkbox-group",{model:{value:e.mainForm.roleIds,callback:function(t){e.$set(e.mainForm,"roleIds",t)},expression:"mainForm.roleIds"}},e._l(e.editRoleListData,function(t){return i("el-checkbox",{key:t.roleId,attrs:{label:t.roleId}},[e._v(e._s(t.name))])}),1)],1)],1),e._v(" "),i("el-tab-pane",{attrs:{label:"包含权限",name:"fourth"}},[i("el-form-item",{attrs:{label:"包含权限"}},[i("el-tree",{ref:"editPermissionTree",attrs:{data:e.editPermissionTreeData,props:e.editPermissionTreeDefaultProps,"node-key":"id","empty-text":"","show-checkbox":"","default-expand-all":"","check-strictly":""},on:{"check-change":e.handlePermissionTreeCheckChange}})],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.handleMainFormSure(!1)}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleMainFormSure(!0)}}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.moveFormDialogVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.moveFormDialogVisible=t}},nativeOn:{submit:function(e){e.preventDefault()}}},[i("span",{attrs:{slot:"title"},slot:"title"},[e._v("\n        移动节点: "+e._s(e.moveActive?e.moveActive.name:null)+"\n      ")]),e._v(" "),i("el-form",{ref:"moveForm",attrs:{model:e.moveForm,rules:e.moveFormRules,"label-position":"right","label-width":"100px"}},[i("el-form-item",{attrs:{label:"目标节点",prop:"targetIdPath"}},[i("el-cascader",{attrs:{options:e.editParentTreeData,props:e.editParentTreeDefaultProps,clearable:"","change-on-select":""},model:{value:e.moveForm.targetIdPath,callback:function(t){e.$set(e.moveForm,"targetIdPath",t)},expression:"moveForm.targetIdPath"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"位置"}},[[i("el-radio",{attrs:{label:0,border:""},model:{value:e.moveForm.movingLocation,callback:function(t){e.$set(e.moveForm,"movingLocation",t)},expression:"moveForm.movingLocation"}},[e._v("目标之下")]),e._v(" "),i("el-radio",{attrs:{label:1,border:""},model:{value:e.moveForm.movingLocation,callback:function(t){e.$set(e.moveForm,"movingLocation",t)},expression:"moveForm.movingLocation"}},[e._v("目标之上")])]],2),e._v(" "),0===e.moveForm.movingLocation?i("el-form-item",{attrs:{label:"作为子节点"}},[i("el-switch",{model:{value:e.moveForm.isChild,callback:function(t){e.$set(e.moveForm,"isChild",t)},expression:"moveForm.isChild"}})],1):e._e()],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.handleMoveFormSure(!1)}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleMoveFormSure(!0)}}},[e._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]};t.a=n},bzuE:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a}),i.d(t,"c",function(){return o});var n="/api",a="",o=""},lrRg:function(e,t,i){"use strict";var n=i("NAu6"),a=i("auAS"),o=function(e){i("Otnz")},r=i("VU/8")(n.a,a.a,!1,o,"data-v-1e44e71b",null);t.a=r.exports},tvR6:function(e,t){},uN2V:function(e,t){}},["XlYP"]);
//# sourceMappingURL=group.js.map