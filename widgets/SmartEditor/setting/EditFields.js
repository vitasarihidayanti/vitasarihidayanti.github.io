// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/SmartEditor/setting/EditFields.html":'\x3cdiv\x3e\r\n    \x3cdiv class\x3d"settingsDesc" data-dojo-attach-point\x3d"fieldsDesc"\x3e${nls.fieldsPage.description}\x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-attach-point\x3d"fieldsTable"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"settingsNotes" data-dojo-attach-point\x3d"fieldsNotes"\x3e${nls.fieldsPage.fieldsNotes}\x3c/div\x3e\r\n    \x3cdiv class\x3d"attachmentsDesc" data-dojo-attach-point\x3d"attachmentsValidation"\x3e${nls.fieldsPage.smartAttachmentText}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-style dojo/dom-construct dojo/on dojo/query dojo/text!./EditFields.html ./FieldValidation ./CopyAttributes dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup esri/lang".split(" "),function(p,q,c,e,h,k,f,l,r,m,t,u,v,w,x,g){return p([v,q,u],{baseClass:"jimu-widget-smartEditor-setting-fields",templateString:r,_configInfo:null,_fieldValid:null,_fieldValidations:null,_fieldValues:null,_attachmentValidations:null,
__layerName:null,postCreate:function(){this.inherited(arguments);this._initFieldsTable();this._setFiedsTable(this._configInfo.fieldInfos);this._fieldValidations=void 0===this._configInfo.fieldValidations?{}:c.clone(this._configInfo.fieldValidations);this._fieldValues=void 0===this._configInfo.fieldValues?{}:c.clone(this._configInfo.fieldValues);this._attachmentValidations=void 0===this._configInfo.attachmentValidations?{}:c.clone(this._configInfo.attachmentValidations);this.own(f(this.attachmentsValidation,
"click",c.hitch(this,function(){this._onAttachmentsValidationClicked()})));this._configInfo.layerInfo.layerObject.hasAttachments?h.set(this.attachmentsValidation,"display","block"):h.set(this.attachmentsValidation,"display","none")},popupEditPage:function(){var a=new x({titleLabel:g.substitute({layername:this._layerName},this.nls.fieldsPage.title),width:972,maxHeight:700,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){this._validateTable()&&(this._resetFieldInfos(),
this._configInfo.fieldValidations=this._fieldValidations,this._configInfo.fieldValues=this._fieldValues,this._configInfo.attachmentValidations=this._attachmentValidations,a.close())})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:c.hitch(this,function(){a.close()})}],onClose:c.hitch(this,function(){})})},_initFieldsTable:function(){this._fieldsTable=new w({fields:[{name:"required",title:"",type:"text","class":"required"},{name:"visible",title:this.nls.fieldsPage.fieldsSettingsTable.display,
type:"checkbox","class":"visible",width:"15%"},{name:"isEditable",title:this.nls.fieldsPage.fieldsSettingsTable.edit,type:"checkbox","class":"editable",width:"15%"},{name:"fieldName",title:this.nls.fieldsPage.fieldsSettingsTable.fieldName,type:"text","class":"fieldName",width:"30%"},{name:"label",title:this.nls.fieldsPage.fieldsSettingsTable.fieldAlias,type:"text",editable:!1,"class":"fieldLabel",width:"30%"},{name:"actions",title:this.nls.fieldsPage.fieldsSettingsTable.actions,type:"actions",actions:["up",
"down","edit","copy"],"class":"actions",width:"10%"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._fieldsTable.placeAt(this.fieldsTable);this._fieldsTable.startup();l("th.simple-table-field",this._fieldsTable.domNode).forEach(function(a){switch(void 0===a.innerText||""===a.innerText?"":a.innerText.replace(/(\r\n|\n|\r)/gm,"")){case this.nls.fieldsPage.fieldsSettingsTable.display:a.title=this.nls.fieldsPage.fieldsSettingsTable.displayTip;break;case this.nls.fieldsPage.fieldsSettingsTable.edit:a.title=
this.nls.fieldsPage.fieldsSettingsTable.editTip;break;case this.nls.fieldsPage.fieldsSettingsTable.fieldName:a.title=this.nls.fieldsPage.fieldsSettingsTable.fieldNameTip;break;case this.nls.fieldsPage.fieldsSettingsTable.fieldAlias:a.title=this.nls.fieldsPage.fieldsSettingsTable.fieldAliasTip;break;case this.nls.fieldsPage.fieldsSettingsTable.actions:a.title=this.nls.fieldsPage.fieldsSettingsTable.actionsTip}},this);this.own(f(this._fieldsTable,"actions-edit",c.hitch(this,this._onEditFieldInfoClick)))},
_validateTable:function(){var a=this._fieldsTable.getRows();return 0===a.length?!1:e.some(a,function(a){return this._fieldsTable.getRowData(a).isEditable},this)},_onEditFieldInfoClick:function(a){a=this._fieldsTable.getRowData(a);var b=g.substitute({fieldname:a.fieldName},this.nls.actionPage.smartActionTitle),d={fields:c.clone(this._configInfo.layerInfo.layerObject.fields)};this._fieldValid=new m({nls:this.nls,_layerDefinition:d,_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,
_fieldValidations:this._fieldValidations,_fieldName:a.fieldName,_fieldAlias:a.label,popupTitle:b});this._fieldValid.popupActionsPage()},_onCopyAttrButtonClick:function(a){var b=this._fieldsTable.getRowData(a),d={fields:c.clone(this._configInfo.layerInfo.layerObject.fields)};this._copyAttr=new t({nls:this.nls,_layerDefinition:d,_fieldInfos:this._configInfo.fieldInfos,_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,_fieldName:b.fieldName,_fieldAlias:b.label,
_fieldValues:this._fieldValues,_geocoderSettings:this._geocoderSettings,_configuredPresetInfos:this._configuredPresetInfos,layerInfos:this.layerInfos,isRelatedLayer:this.isRelatedLayer,map:this.map,_fieldType:a.fieldType});this._copyAttr.popupActionsPage();this.own(f(this._copyAttr,"SetGeocoder",c.hitch(this,function(){this.emit("SetGeocoder")})))},_onAttachmentsValidationClicked:function(){var a=g.substitute({layername:this._layerName},this.nls.fieldsPage.smartAttachmentPopupTitle),b={fields:c.clone(this._configInfo.layerInfo.layerObject.fields)};
this._attachmentFieldValidation=new m({nls:this.nls,_layerDefinition:b,_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,_fieldValidations:this._attachmentValidations,_fieldName:"Actions",_fieldAlias:"",popupTitle:a});this._attachmentFieldValidation.popupActionsPage()},_setFiedsTable:function(a){var b,d,n;e.forEach(a,function(a){var c=a.visible;"esriFieldTypeGeometry"!==a.type&&"esriFieldTypeOID"!==a.type&&"esriFieldTypeBlob"!==a.type&&"esriFieldTypeGlobalID"!==
a.type&&"esriFieldTypeRaster"!==a.type&&"esriFieldTypeXML"!==a.type&&(!1===a.visible&&!0===a.isEditable&&(c=!0),c={fieldName:a.fieldName,isEditable:a.isEditable,label:a.label,visible:c},a.hasOwnProperty("nullable")&&!1===a.nullable?c.required="*":c.required="",b=this._fieldsTable.addRow(c).tr,n=l(".jimu-icon-edit",b)[0],n.title=this.nls.fieldsPage.editActionTip,d=b.children[b.children.length-1],b.fieldType=a.type,this._addNewAction(d.children[0],b))},this);setTimeout(c.hitch(this,function(){e.forEach(this._fieldsTable.fields,
function(a){"visible"===a.name?a.onChange=c.hitch(this,this._onDisplayFieldChanged):"isEditable"===a.name&&(a.onChange=c.hitch(this,this._onIsEditableFieldChanged))},this)}),300)},_addNewAction:function(a,b){var d;d=k.create("div",{"class":"esriCTCopyAction",title:this.nls.fieldsPage.copyActionTip});f(d,"click",c.hitch(this,this._onCopyAttrButtonClick,b));k.place(d,a,"last")},_onDisplayFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);!b.visible&&b.isEditable&&(b.isEditable=!1,this._fieldsTable.editRow(a,
b))},_onIsEditableFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);b.isEditable&&!b.visible&&(b.visible=!0,this._fieldsTable.editRow(a,b))},_resetFieldInfos:function(){var a=[],b=this._fieldsTable.getData();e.forEach(b,c.hitch(this,function(b){var d={isEditable:null===b.isEditable?!0:b.isEditable,visible:null===b.visible?!0:b.visible};b=this._getFieldInfoByFieldName(this._configInfo.fieldInfos,b.fieldName);c.mixin(b,d);a.push(b)}));this._configInfo.fieldInfos=a},_getFieldInfoByFieldName:function(a,
b){var c;e.some(a,function(a){if(a.name===b)return c=a,!0});return c},geocoderConfigured:function(){this._copyAttr.geocoderConfigured()}})});