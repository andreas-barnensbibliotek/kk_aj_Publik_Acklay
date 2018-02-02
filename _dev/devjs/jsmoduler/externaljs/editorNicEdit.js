﻿var jQuery = require("jquery");

module.exports = {
    init: function () {
 /* NicEdit - Micro Inline WYSIWYG
 * Copyright 2007-2008 Brian Kirchoff
 *
 * NicEdit is distributed under the terms of the MIT license
 * For more information visit http://nicedit.com/
 * Do not remove this copyright message
 */
        
        bkLib.onDomLoaded(function () {
            window.nicObj = new nicEditor();
            window.nicObj.panelInstance('arr_presentation');
        });

    },//end init
    test: function () {
        //window.nicObj.instanceById('arr_presentation').saveContent();
        window.nicObj.findEditor('arr_presentation').saveContent();
    }
} //end moduleexport




var bkExtend = function () { var A = arguments; if (A.length == 1) { A = [this, A[0]] } for (var B in A[1]) { A[0][B] = A[1][B] } return A[0] }; function bkClass() { } bkClass.prototype.construct = function () { }; bkClass.extend = function (C) { var A = function () { if (arguments[0] !== bkClass) { return this.construct.apply(this, arguments) } }; var B = new this(bkClass); bkExtend(B, C); A.prototype = B; A.extend = this.extend; return A }; var bkElement = bkClass.extend({ construct: function (B, A) { if (typeof (B) == "string") { B = (A || document).createElement(B) } B = $BK(B); return B }, appendTo: function (A) { A.appendChild(this); return this }, appendBefore: function (A) { A.parentNode.insertBefore(this, A); return this }, addEvent: function (B, A) { bkLib.addEvent(this, B, A); return this }, setContent: function (A) { this.innerHTML = A; return this }, pos: function () { var C = curtop = 0; var B = obj = this; if (obj.offsetParent) { do { C += obj.offsetLeft; curtop += obj.offsetTop } while (obj = obj.offsetParent) } var A = (!window.opera) ? parseInt(this.getStyle("border-width") || this.style.border) || 0 : 0; return [C + A, curtop + A + this.offsetHeight] }, noSelect: function () { bkLib.noSelect(this); return this }, parentTag: function (A) { var B = this; do { if (B && B.nodeName && B.nodeName.toUpperCase() == A) { return B } B = B.parentNode } while (B); return false }, hasClass: function (A) { return this.className.match(new RegExp("(\\s|^)nicEdit-" + A + "(\\s|$)")) }, addClass: function (A) { if (!this.hasClass(A)) { this.className += " nicEdit-" + A } return this }, removeClass: function (A) { if (this.hasClass(A)) { this.className = this.className.replace(new RegExp("(\\s|^)nicEdit-" + A + "(\\s|$)"), " ") } return this }, setStyle: function (A) { var B = this.style; for (var C in A) { switch (C) { case "float": B.cssFloat = B.styleFloat = A[C]; break; case "opacity": B.opacity = A[C]; B.filter = "alpha(opacity=" + Math.round(A[C] * 100) + ")"; break; case "className": this.className = A[C]; break; default: B[C] = A[C] } } return this }, getStyle: function (A, C) { var B = (!C) ? document.defaultView : C; if (this.nodeType == 1) { return (B && B.getComputedStyle) ? B.getComputedStyle(this, null).getPropertyValue(A) : this.currentStyle[bkLib.camelize(A)] } }, remove: function () { this.parentNode.removeChild(this); return this }, setAttributes: function (A) { for (var B in A) { this[B] = A[B] } return this } }); var bkLib = { isMSIE: (navigator.appVersion.indexOf("MSIE") != -1), addEvent: function (C, B, A) { (C.addEventListener) ? C.addEventListener(B, A, false) : C.attachEvent("on" + B, A) }, toArray: function (C) { var B = C.length, A = new Array(B); while (B--) { A[B] = C[B] } return A }, noSelect: function (B) { if (B.setAttribute && B.nodeName.toLowerCase() != "input" && B.nodeName.toLowerCase() != "textarea") { B.setAttribute("unselectable", "on") } for (var A = 0; A < B.childNodes.length; A++) { bkLib.noSelect(B.childNodes[A]) } }, camelize: function (A) { return A.replace(/\-(.)/g, function (B, C) { return C.toUpperCase() }) }, inArray: function (A, B) { return (bkLib.search(A, B) != null) }, search: function (A, C) { for (var B = 0; B < A.length; B++) { if (A[B] == C) { return B } } return null }, cancelEvent: function (A) { A = A || window.event; if (A.preventDefault && A.stopPropagation) { A.preventDefault(); A.stopPropagation() } return false }, domLoad: [], domLoaded: function () { if (arguments.callee.done) { return } arguments.callee.done = true; for (i = 0; i < bkLib.domLoad.length; i++) { bkLib.domLoad[i]() } }, onDomLoaded: function (A) { this.domLoad.push(A); if (document.addEventListener) { document.addEventListener("DOMContentLoaded", bkLib.domLoaded, null) } else { if (bkLib.isMSIE) { document.write("<style>.nicEdit-main p { margin: 0; }</style><script id=__ie_onload defer " + ((location.protocol == "https:") ? "src='javascript:void(0)'" : "src=//0") + "><\/script>"); $BK("__ie_onload").onreadystatechange = function () { if (this.readyState == "complete") { bkLib.domLoaded() } } } } window.onload = bkLib.domLoaded } }; function $BK(A) { if (typeof (A) == "string") { A = document.getElementById(A) } return (A && !A.appendTo) ? bkExtend(A, bkElement.prototype) : A } var bkEvent = { addEvent: function (A, B) { if (B) { this.eventList = this.eventList || {}; this.eventList[A] = this.eventList[A] || []; this.eventList[A].push(B) } return this }, fireEvent: function () { var A = bkLib.toArray(arguments), C = A.shift(); if (this.eventList && this.eventList[C]) { for (var B = 0; B < this.eventList[C].length; B++) { this.eventList[C][B].apply(this, A) } } } }; function __(A) { return A } Function.prototype.closure = function () { var A = this, B = bkLib.toArray(arguments), C = B.shift(); return function () { if (typeof (bkLib) != "undefined") { return A.apply(C, B.concat(bkLib.toArray(arguments))) } } }; Function.prototype.closureListener = function () { var A = this, C = bkLib.toArray(arguments), B = C.shift(); return function (E) { E = E || window.event; if (E.target) { var D = E.target } else { var D = E.srcElement } return A.apply(B, [E, D].concat(C)) } };



var nicEditorConfig = bkClass.extend({
    buttons: {
        'bold': { name: __('Click to Bold'), command: 'Bold', tags: ['B', 'STRONG'], css: { 'font-weight': 'bold' }, key: 'b' },
        'italic': { name: __('Click to Italic'), command: 'Italic', tags: ['EM', 'I'], css: { 'font-style': 'italic' }, key: 'i' },
        'underline': { name: __('Click to Underline'), command: 'Underline', tags: ['U'], css: { 'text-decoration': 'underline' }, key: 'u' },
        'left': { name: __('Left Align'), command: 'justifyleft', noActive: true },
        'center': { name: __('Center Align'), command: 'justifycenter', noActive: true },
        'right': { name: __('Right Align'), command: 'justifyright', noActive: true },
        'justify': { name: __('Justify Align'), command: 'justifyfull', noActive: true },
        'ol': { name: __('Insert Ordered List'), command: 'insertorderedlist', tags: ['OL'] },
        'ul': { name: __('Insert Unordered List'), command: 'insertunorderedlist', tags: ['UL'] },
        'subscript': { name: __('Click to Subscript'), command: 'subscript', tags: ['SUB'] },
        'superscript': { name: __('Click to Superscript'), command: 'superscript', tags: ['SUP'] },
        'strikethrough': { name: __('Click to Strike Through'), command: 'strikeThrough', css: { 'text-decoration': 'line-through' } },
        'removeformat': { name: __('Remove Formatting'), command: 'removeformat', noActive: true },
        'indent': { name: __('Indent Text'), command: 'indent', noActive: true },
        'outdent': { name: __('Remove Indent'), command: 'outdent', noActive: true },
        'hr': { name: __('Horizontal Rule'), command: 'insertHorizontalRule', noActive: true }
    },
    iconsPath: '/Portals/_default/Skins/kk_aj_Publik_Acklay/public/nicEditIcons-latest.gif',
    buttonList: ['save', 'bold', 'italic', 'underline', 'left', 'center', 'right', 'justify', 'ol', 'ul', 'fontSize', 'fontFamily', 'fontFormat', 'indent', 'outdent', 'image', 'upload', 'link', 'unlink', 'forecolor', 'bgcolor'],
    iconList: { "bold": 1, "center": 2, "hr": 3, "indent": 4, "italic": 5, "justify": 6, "left": 7, "ol": 8, "outdent": 9, "removeformat": 10, "right": 11, "save": 12, "strikethrough": 13, "subscript": 14, "superscript": 15, "ul": 16, "underline": 17, "image": 18, "link": 19, "unlink": 20, "close": 21 }

});
;
var nicEditors = { nicPlugins: [], editors: [], registerPlugin: function (B, A) { this.nicPlugins.push({ p: B, o: A }) }, allTextAreas: function (C) { var A = document.getElementsByTagName("textarea"); for (var B = 0; B < A.length; B++) { nicEditors.editors.push(new nicEditor(C).panelInstance(A[B])) } return nicEditors.editors }, findEditor: function (C) { var B = nicEditors.editors; for (var A = 0; A < B.length; A++) { if (B[A].instanceById(C)) { return B[A].instanceById(C) } } } }; var nicEditor = bkClass.extend({ construct: function (C) { this.options = new nicEditorConfig(); bkExtend(this.options, C); this.nicInstances = new Array(); this.loadedPlugins = new Array(); var A = nicEditors.nicPlugins; for (var B = 0; B < A.length; B++) { this.loadedPlugins.push(new A[B].p(this, A[B].o)) } nicEditors.editors.push(this); bkLib.addEvent(document.body, "mousedown", this.selectCheck.closureListener(this)) }, panelInstance: function (B, C) { B = this.checkReplace($BK(B)); var A = new bkElement("DIV").setStyle({ width: (parseInt(B.getStyle("width")) || B.clientWidth) + "px" }).appendBefore(B); this.setPanel(A); return this.addInstance(B, C) }, checkReplace: function (B) { var A = nicEditors.findEditor(B); if (A) { A.removeInstance(B); A.removePanel() } return B }, addInstance: function (B, C) { B = this.checkReplace($BK(B)); if (B.contentEditable || !!window.opera) { var A = new nicEditorInstance(B, C, this) } else { var A = new nicEditorIFrameInstance(B, C, this) } this.nicInstances.push(A); return this }, removeInstance: function (C) { C = $BK(C); var B = this.nicInstances; for (var A = 0; A < B.length; A++) { if (B[A].e == C) { B[A].remove(); this.nicInstances.splice(A, 1) } } }, removePanel: function (A) { if (this.nicPanel) { this.nicPanel.remove(); this.nicPanel = null } }, instanceById: function (C) { C = $BK(C); var B = this.nicInstances; for (var A = 0; A < B.length; A++) { if (B[A].e == C) { return B[A] } } }, setPanel: function (A) { this.nicPanel = new nicEditorPanel($BK(A), this.options, this); this.fireEvent("panel", this.nicPanel); return this }, nicCommand: function (B, A) { if (this.selectedInstance) { this.selectedInstance.nicCommand(B, A) } }, getIcon: function (D, A) { var C = this.options.iconList[D]; var B = (A.iconFiles) ? A.iconFiles[D] : ""; return { backgroundImage: "url('" + ((C) ? this.options.iconsPath : B) + "')", backgroundPosition: ((C) ? ((C - 1) * -18) : 0) + "px 0px" } }, selectCheck: function (C, A) { var B = false; do { if (A.className && A.className.indexOf("nicEdit") != -1) { return false } } while (A = A.parentNode); this.fireEvent("blur", this.selectedInstance, A); this.lastSelectedInstance = this.selectedInstance; this.selectedInstance = null; return false } }); nicEditor = nicEditor.extend(bkEvent);
var nicEditorInstance = bkClass.extend({ isSelected: false, construct: function (G, D, C) { this.ne = C; this.elm = this.e = G; this.options = D || {}; newX = parseInt(G.getStyle("width")) || G.clientWidth; newY = parseInt(G.getStyle("height")) || G.clientHeight; this.initialHeight = newY - 8; var H = (G.nodeName.toLowerCase() == "textarea"); if (H || this.options.hasPanel) { var B = (bkLib.isMSIE && !((typeof document.body.style.maxHeight != "undefined") && document.compatMode == "CSS1Compat")); var E = { width: newX + "px", border: "1px solid #ccc", borderTop: 0, overflowY: "auto", overflowX: "hidden" }; E[(B) ? "height" : "maxHeight"] = (this.ne.options.maxHeight) ? this.ne.options.maxHeight + "px" : null; this.editorContain = new bkElement("DIV").setStyle(E).appendBefore(G); var A = new bkElement("DIV").setStyle({ width: (newX - 8) + "px", margin: "4px", minHeight: newY + "px" }).addClass("main").appendTo(this.editorContain); G.setStyle({ display: "none" }); A.innerHTML = G.innerHTML; if (H) { A.setContent(G.value); this.copyElm = G; var F = G.parentTag("FORM"); if (F) { bkLib.addEvent(F, "submit", this.saveContent.closure(this)) } } A.setStyle((B) ? { height: newY + "px" } : { overflow: "hidden" }); this.elm = A } this.ne.addEvent("blur", this.blur.closure(this)); this.init(); this.blur() }, init: function () { this.elm.setAttribute("contentEditable", "true"); if (this.getContent() == "") { this.setContent("<br />") } this.instanceDoc = document.defaultView; this.elm.addEvent("mousedown", this.selected.closureListener(this)).addEvent("keypress", this.keyDown.closureListener(this)).addEvent("focus", this.selected.closure(this)).addEvent("blur", this.blur.closure(this)).addEvent("keyup", this.selected.closure(this)); this.ne.fireEvent("add", this) }, remove: function () { this.saveContent(); if (this.copyElm || this.options.hasPanel) { this.editorContain.remove(); this.e.setStyle({ display: "block" }); this.ne.removePanel() } this.disable(); this.ne.fireEvent("remove", this) }, disable: function () { this.elm.setAttribute("contentEditable", "false") }, getSel: function () { return (window.getSelection) ? window.getSelection() : document.selection }, getRng: function () { var A = this.getSel(); if (!A || A.rangeCount === 0) { return } return (A.rangeCount > 0) ? A.getRangeAt(0) : A.createRange() }, selRng: function (A, B) { if (window.getSelection) { B.removeAllRanges(); B.addRange(A) } else { A.select() } }, selElm: function () { var C = this.getRng(); if (!C) { return } if (C.startContainer) { var D = C.startContainer; if (C.cloneContents().childNodes.length == 1) { for (var B = 0; B < D.childNodes.length; B++) { var A = D.childNodes[B].ownerDocument.createRange(); A.selectNode(D.childNodes[B]); if (C.compareBoundaryPoints(Range.START_TO_START, A) != 1 && C.compareBoundaryPoints(Range.END_TO_END, A) != -1) { return $BK(D.childNodes[B]) } } } return $BK(D) } else { return $BK((this.getSel().type == "Control") ? C.item(0) : C.parentElement()) } }, saveRng: function () { this.savedRange = this.getRng(); this.savedSel = this.getSel() }, restoreRng: function () { if (this.savedRange) { this.selRng(this.savedRange, this.savedSel) } }, keyDown: function (B, A) { if (B.ctrlKey) { this.ne.fireEvent("key", this, B) } }, selected: function (C, A) { if (!A && !(A = this.selElm)) { A = this.selElm() } if (!C.ctrlKey) { var B = this.ne.selectedInstance; if (B != this) { if (B) { this.ne.fireEvent("blur", B, A) } this.ne.selectedInstance = this; this.ne.fireEvent("focus", B, A) } this.ne.fireEvent("selected", B, A); this.isFocused = true; this.elm.addClass("selected") } return false }, blur: function () { this.isFocused = false; this.elm.removeClass("selected") }, saveContent: function () { if (this.copyElm || this.options.hasPanel) { this.ne.fireEvent("save", this); (this.copyElm) ? this.copyElm.value = this.getContent() : this.e.innerHTML = this.getContent() } }, getElm: function () { return this.elm }, getContent: function () { this.content = this.getElm().innerHTML; this.ne.fireEvent("get", this); return this.content }, setContent: function (A) { this.content = A; this.ne.fireEvent("set", this); this.elm.innerHTML = this.content }, nicCommand: function (B, A) { document.execCommand(B, false, A) } });
var nicEditorIFrameInstance = nicEditorInstance.extend({ savedStyles: [], init: function () { var B = this.elm.innerHTML.replace(/^\s+|\s+$/g, ""); this.elm.innerHTML = ""; (!B) ? B = "<br />" : B; this.initialContent = B; this.elmFrame = new bkElement("iframe").setAttributes({ src: "javascript:;", frameBorder: 0, allowTransparency: "true", scrolling: "no" }).setStyle({ height: "100px", width: "100%" }).addClass("frame").appendTo(this.elm); if (this.copyElm) { this.elmFrame.setStyle({ width: (this.elm.offsetWidth - 4) + "px" }) } var A = ["font-size", "font-family", "font-weight", "color"]; for (itm in A) { this.savedStyles[bkLib.camelize(itm)] = this.elm.getStyle(itm) } setTimeout(this.initFrame.closure(this), 50) }, disable: function () { this.elm.innerHTML = this.getContent() }, initFrame: function () { var B = $BK(this.elmFrame.contentWindow.document); B.designMode = "on"; B.open(); var A = this.ne.options.externalCSS; B.write("<html><head>" + ((A) ? '<link href="' + A + '" rel="stylesheet" type="text/css" />' : "") + '</head><body id="nicEditContent" style="margin: 0 !important; background-color: transparent !important;">' + this.initialContent + "</body></html>"); B.close(); this.frameDoc = B; this.frameWin = $BK(this.elmFrame.contentWindow); this.frameContent = $BK(this.frameWin.document.body).setStyle(this.savedStyles); this.instanceDoc = this.frameWin.document.defaultView; this.heightUpdate(); this.frameDoc.addEvent("mousedown", this.selected.closureListener(this)).addEvent("keyup", this.heightUpdate.closureListener(this)).addEvent("keydown", this.keyDown.closureListener(this)).addEvent("keyup", this.selected.closure(this)); this.ne.fireEvent("add", this) }, getElm: function () { return this.frameContent }, setContent: function (A) { this.content = A; this.ne.fireEvent("set", this); this.frameContent.innerHTML = this.content; this.heightUpdate() }, getSel: function () { return (this.frameWin) ? this.frameWin.getSelection() : this.frameDoc.selection }, heightUpdate: function () { this.elmFrame.style.height = Math.max(this.frameContent.offsetHeight, this.initialHeight) + "px" }, nicCommand: function (B, A) { this.frameDoc.execCommand(B, false, A); setTimeout(this.heightUpdate.closure(this), 100) } });
var nicEditorPanel = bkClass.extend({ construct: function (E, B, A) { this.elm = E; this.options = B; this.ne = A; this.panelButtons = new Array(); this.buttonList = bkExtend([], this.ne.options.buttonList); this.panelContain = new bkElement("DIV").setStyle({ overflow: "hidden", width: "100%", border: "1px solid #cccccc", backgroundColor: "#efefef" }).addClass("panelContain"); this.panelElm = new bkElement("DIV").setStyle({ margin: "2px", marginTop: "0px", zoom: 1, overflow: "hidden" }).addClass("panel").appendTo(this.panelContain); this.panelContain.appendTo(E); var C = this.ne.options; var D = C.buttons; for (button in D) { this.addButton(button, C, true) } this.reorder(); E.noSelect() }, addButton: function (buttonName, options, noOrder) { var button = options.buttons[buttonName]; var type = (button.type) ? eval("(typeof(" + button.type + ') == "undefined") ? null : ' + button.type + ";") : nicEditorButton; var hasButton = bkLib.inArray(this.buttonList, buttonName); if (type && (hasButton || this.ne.options.fullPanel)) { this.panelButtons.push(new type(this.panelElm, buttonName, options, this.ne)); if (!hasButton) { this.buttonList.push(buttonName) } } }, findButton: function (B) { for (var A = 0; A < this.panelButtons.length; A++) { if (this.panelButtons[A].name == B) { return this.panelButtons[A] } } }, reorder: function () { var C = this.buttonList; for (var B = 0; B < C.length; B++) { var A = this.findButton(C[B]); if (A) { this.panelElm.appendChild(A.margin) } } }, remove: function () { this.elm.remove() } });
var nicEditorButton = bkClass.extend({ construct: function (D, A, C, B) { this.options = C.buttons[A]; this.name = A; this.ne = B; this.elm = D; this.margin = new bkElement("DIV").setStyle({ "float": "left", marginTop: "2px" }).appendTo(D); this.contain = new bkElement("DIV").setStyle({ width: "20px", height: "20px" }).addClass("buttonContain").appendTo(this.margin); this.border = new bkElement("DIV").setStyle({ backgroundColor: "#efefef", border: "1px solid #efefef" }).appendTo(this.contain); this.button = new bkElement("DIV").setStyle({ width: "18px", height: "18px", overflow: "hidden", zoom: 1, cursor: "pointer" }).addClass("button").setStyle(this.ne.getIcon(A, C)).appendTo(this.border); this.button.addEvent("mouseover", this.hoverOn.closure(this)).addEvent("mouseout", this.hoverOff.closure(this)).addEvent("mousedown", this.mouseClick.closure(this)).noSelect(); if (!window.opera) { this.button.onmousedown = this.button.onclick = bkLib.cancelEvent } B.addEvent("selected", this.enable.closure(this)).addEvent("blur", this.disable.closure(this)).addEvent("key", this.key.closure(this)); this.disable(); this.init() }, init: function () { }, hide: function () { this.contain.setStyle({ display: "none" }) }, updateState: function () { if (this.isDisabled) { this.setBg() } else { if (this.isHover) { this.setBg("hover") } else { if (this.isActive) { this.setBg("active") } else { this.setBg() } } } }, setBg: function (A) { switch (A) { case "hover": var B = { border: "1px solid #666", backgroundColor: "#ddd" }; break; case "active": var B = { border: "1px solid #666", backgroundColor: "#ccc" }; break; default: var B = { border: "1px solid #efefef", backgroundColor: "#efefef" } } this.border.setStyle(B).addClass("button-" + A) }, checkNodes: function (A) { var B = A; do { if (this.options.tags && bkLib.inArray(this.options.tags, B.nodeName)) { this.activate(); return true } } while (B = B.parentNode && B.className != "nicEdit"); B = $BK(A); while (B.nodeType == 3) { B = $BK(B.parentNode) } if (this.options.css) { for (itm in this.options.css) { if (B.getStyle(itm, this.ne.selectedInstance.instanceDoc) == this.options.css[itm]) { this.activate(); return true } } } this.deactivate(); return false }, activate: function () { if (!this.isDisabled) { this.isActive = true; this.updateState(); this.ne.fireEvent("buttonActivate", this) } }, deactivate: function () { this.isActive = false; this.updateState(); if (!this.isDisabled) { this.ne.fireEvent("buttonDeactivate", this) } }, enable: function (A, B) { this.isDisabled = false; this.contain.setStyle({ opacity: 1 }).addClass("buttonEnabled"); this.updateState(); this.checkNodes(B) }, disable: function (A, B) { this.isDisabled = true; this.contain.setStyle({ opacity: 0.6 }).removeClass("buttonEnabled"); this.updateState() }, toggleActive: function () { (this.isActive) ? this.deactivate() : this.activate() }, hoverOn: function () { if (!this.isDisabled) { this.isHover = true; this.updateState(); this.ne.fireEvent("buttonOver", this) } }, hoverOff: function () { this.isHover = false; this.updateState(); this.ne.fireEvent("buttonOut", this) }, mouseClick: function () { if (this.options.command) { this.ne.nicCommand(this.options.command, this.options.commandArgs); if (!this.options.noActive) { this.toggleActive() } } this.ne.fireEvent("buttonClick", this) }, key: function (A, B) { if (this.options.key && B.ctrlKey && String.fromCharCode(B.keyCode || B.charCode).toLowerCase() == this.options.key) { this.mouseClick(); if (B.preventDefault) { B.preventDefault() } } } });
var nicPlugin = bkClass.extend({ construct: function (B, A) { this.options = A; this.ne = B; this.ne.addEvent("panel", this.loadPanel.closure(this)); this.init() }, loadPanel: function (C) { var B = this.options.buttons; for (var A in B) { C.addButton(A, this.options) } C.reorder() }, init: function () { } });


var nicPaneOptions = {};

var nicEditorPane = bkClass.extend({ construct: function (D, C, B, A) { this.ne = C; this.elm = D; this.pos = D.pos(); this.contain = new bkElement("div").setStyle({ zIndex: "99999", overflow: "hidden", position: "absolute", left: this.pos[0] + "px", top: this.pos[1] + "px" }); this.pane = new bkElement("div").setStyle({ fontSize: "12px", border: "1px solid #ccc", overflow: "hidden", padding: "4px", textAlign: "left", backgroundColor: "#ffffc9" }).addClass("pane").setStyle(B).appendTo(this.contain); if (A && !A.options.noClose) { this.close = new bkElement("div").setStyle({ "float": "right", height: "16px", width: "16px", cursor: "pointer" }).setStyle(this.ne.getIcon("close", nicPaneOptions)).addEvent("mousedown", A.removePane.closure(this)).appendTo(this.pane) } this.contain.noSelect().appendTo(document.body); this.position(); this.init() }, init: function () { }, position: function () { if (this.ne.nicPanel) { var B = this.ne.nicPanel.elm; var A = B.pos(); var C = A[0] + parseInt(B.getStyle("width")) - (parseInt(this.pane.getStyle("width")) + 8); if (C < this.pos[0]) { this.contain.setStyle({ left: C + "px" }) } } }, toggle: function () { this.isVisible = !this.isVisible; this.contain.setStyle({ display: ((this.isVisible) ? "block" : "none") }) }, remove: function () { if (this.contain) { this.contain.remove(); this.contain = null } }, append: function (A) { A.appendTo(this.pane) }, setContent: function (A) { this.pane.setContent(A) } });

var nicEditorAdvancedButton = nicEditorButton.extend({ init: function () { this.ne.addEvent("selected", this.removePane.closure(this)).addEvent("blur", this.removePane.closure(this)) }, mouseClick: function () { if (!this.isDisabled) { if (this.pane && this.pane.pane) { this.removePane() } else { this.pane = new nicEditorPane(this.contain, this.ne, { width: (this.width || "270px"), backgroundColor: "#fff" }, this); this.addPane(); this.ne.selectedInstance.saveRng() } } }, addForm: function (C, G) { this.form = new bkElement("form").addEvent("submit", this.submit.closureListener(this)); this.pane.append(this.form); this.inputs = {}; for (itm in C) { var D = C[itm]; var F = ""; if (G) { F = G.getAttribute(itm) } if (!F) { F = D.value || "" } var A = C[itm].type; if (A == "title") { new bkElement("div").setContent(D.txt).setStyle({ fontSize: "14px", fontWeight: "bold", padding: "0px", margin: "2px 0" }).appendTo(this.form) } else { var B = new bkElement("div").setStyle({ overflow: "hidden", clear: "both" }).appendTo(this.form); if (D.txt) { new bkElement("label").setAttributes({ "for": itm }).setContent(D.txt).setStyle({ margin: "2px 4px", fontSize: "13px", width: "50px", lineHeight: "20px", textAlign: "right", "float": "left" }).appendTo(B) } switch (A) { case "text": this.inputs[itm] = new bkElement("input").setAttributes({ id: itm, value: F, type: "text" }).setStyle({ margin: "2px 0", fontSize: "13px", "float": "left", height: "20px", border: "1px solid #ccc", overflow: "hidden" }).setStyle(D.style).appendTo(B); break; case "select": this.inputs[itm] = new bkElement("select").setAttributes({ id: itm }).setStyle({ border: "1px solid #ccc", "float": "left", margin: "2px 0" }).appendTo(B); for (opt in D.options) { var E = new bkElement("option").setAttributes({ value: opt, selected: (opt == F) ? "selected" : "" }).setContent(D.options[opt]).appendTo(this.inputs[itm]) } break; case "content": this.inputs[itm] = new bkElement("textarea").setAttributes({ id: itm }).setStyle({ border: "1px solid #ccc", "float": "left" }).setStyle(D.style).appendTo(B); this.inputs[itm].value = F } } } new bkElement("input").setAttributes({ type: "submit" }).setStyle({ backgroundColor: "#efefef", border: "1px solid #ccc", margin: "3px 0", "float": "left", clear: "both" }).appendTo(this.form); this.form.onsubmit = bkLib.cancelEvent }, submit: function () { }, findElm: function (B, A, E) { var D = this.ne.selectedInstance.getElm().getElementsByTagName(B); for (var C = 0; C < D.length; C++) { if (D[C].getAttribute(A) == E) { return $BK(D[C]) } } }, removePane: function () { if (this.pane) { this.pane.remove(); this.pane = null; this.ne.selectedInstance.restoreRng() } } });

var nicButtonTips = bkClass.extend({ construct: function (A) { this.ne = A; A.addEvent("buttonOver", this.show.closure(this)).addEvent("buttonOut", this.hide.closure(this)) }, show: function (A) { this.timer = setTimeout(this.create.closure(this, A), 400) }, create: function (A) { this.timer = null; if (!this.pane) { this.pane = new nicEditorPane(A.button, this.ne, { fontSize: "12px", marginTop: "5px" }); this.pane.setContent(A.options.name) } }, hide: function (A) { if (this.timer) { clearTimeout(this.timer) } if (this.pane) { this.pane = this.pane.remove() } } }); nicEditors.registerPlugin(nicButtonTips);


var nicLinkOptions = {
    buttons: {
        'link': { name: 'Add Link', type: 'nicLinkButton', tags: ['A'] },
        'unlink': { name: 'Remove Link', command: 'unlink', noActive: true }
    }
};

var nicLinkButton = nicEditorAdvancedButton.extend({ addPane: function () { this.ln = this.ne.selectedInstance.selElm().parentTag("A"); this.addForm({ "": { type: "title", txt: "Add/Edit Link" }, href: { type: "text", txt: "URL", value: "http://", style: { width: "150px" } }, title: { type: "text", txt: "Title" }, target: { type: "select", txt: "Open In", options: { "": "Current Window", _blank: "New Window" }, style: { width: "100px" } } }, this.ln) }, submit: function (C) { var A = this.inputs.href.value; if (A == "http://" || A == "") { alert("You must enter a URL to Create a Link"); return false } this.removePane(); if (!this.ln) { var B = "javascript:nicTemp();"; this.ne.nicCommand("createlink", B); this.ln = this.findElm("A", "href", B) } if (this.ln) { this.ln.setAttributes({ href: this.inputs.href.value, title: this.inputs.title.value, target: this.inputs.target.options[this.inputs.target.selectedIndex].value }) } } }); nicEditors.registerPlugin(nicPlugin, nicLinkOptions);


var nicImageOptions = {
    buttons: {
        'image': { name: 'Add Image', type: 'nicImageButton', tags: ['IMG'] }
    }

};

var nicImageButton = nicEditorAdvancedButton.extend({ addPane: function () { this.im = this.ne.selectedInstance.selElm().parentTag("IMG"); this.addForm({ "": { type: "title", txt: "Add/Edit Image" }, src: { type: "text", txt: "URL", value: "http://", style: { width: "150px" } }, alt: { type: "text", txt: "Alt Text", style: { width: "100px" } }, align: { type: "select", txt: "Align", options: { none: "Default", left: "Left", right: "Right" } } }, this.im) }, submit: function (B) { var C = this.inputs.src.value; if (C == "" || C == "http://") { alert("You must enter a Image URL to insert"); return false } this.removePane(); if (!this.im) { var A = "javascript:nicImTemp();"; this.ne.nicCommand("insertImage", A); this.im = this.findElm("IMG", "src", A) } if (this.im) { this.im.setAttributes({ src: this.inputs.src.value, alt: this.inputs.alt.value, align: this.inputs.align.value }) } } }); nicEditors.registerPlugin(nicPlugin, nicImageOptions);


