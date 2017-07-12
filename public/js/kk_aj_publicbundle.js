!function(a,b,c,d){"use strict";function e(a){return("string"==typeof a||a instanceof String)&&(a=a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),a}function f(a){this.selector=a,this.query=""}var g=function(b){var c=a("head");c.prepend(a.map(b,function(a){return 0===c.has("."+a).length?'<meta class="'+a+'" />':void 0}))};g(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),a(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof c.body&&FastClick.attach(c.body)});var h=function(b,d){if("string"==typeof b){if(d){var e;if(d.jquery){if(e=d[0],!e)return d}else e=d;return a(e.querySelectorAll(b))}return a(c.querySelectorAll(b))}return a(b,d)},i=function(a){var b=[];return a||b.push("data"),this.namespace.length>0&&b.push(this.namespace),b.push(this.name),b.join("-")},j=function(a){for(var b=a.split("-"),c=b.length,d=[];c--;)0!==c?d.push(b[c]):this.namespace.length>0?d.push(this.namespace,b[c]):d.push(b[c]);return d.reverse().join("-")},k=function(b,c){var d=this,e=function(){var e=h(this),f=!e.data(d.attr_name(!0)+"-init");e.data(d.attr_name(!0)+"-init",a.extend({},d.settings,c||b,d.data_options(e))),f&&d.events(this)};return h(this.scope).is("["+this.attr_name()+"]")?e.call(this.scope):h("["+this.attr_name()+"]",this.scope).each(e),"string"==typeof b?this[b].call(this,c):void 0},l=function(a,b){function c(){b(a[0])}function d(){if(this.one("load",c),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=this.attr("src"),b=a.match(/\?/)?"&":"?";b+="random="+(new Date).getTime(),this.attr("src",a+b)}}return a.attr("src")?void(a[0].complete||4===a[0].readyState?c():d.call(a)):void c()};/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
b.matchMedia||(b.matchMedia=function(){var a=b.styleMedia||b.media;if(!a){var d=c.createElement("style"),e=c.getElementsByTagName("script")[0],f=null;d.type="text/css",d.id="matchmediajs-test",e.parentNode.insertBefore(d,e),f="getComputedStyle"in b&&b.getComputedStyle(d,null)||d.currentStyle,a={matchMedium:function(a){var b="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return d.styleSheet?d.styleSheet.cssText=b:d.textContent=b,"1px"===f.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a){function c(){d&&(g(c),i&&a.fx.tick())}for(var d,e=0,f=["webkit","moz"],g=b.requestAnimationFrame,h=b.cancelAnimationFrame,i="undefined"!=typeof a.fx;e<f.length&&!g;e++)g=b[f[e]+"RequestAnimationFrame"],h=h||b[f[e]+"CancelAnimationFrame"]||b[f[e]+"CancelRequestAnimationFrame"];g?(b.requestAnimationFrame=g,b.cancelAnimationFrame=h,i&&(a.fx.timer=function(b){b()&&a.timers.push(b)&&!d&&(d=!0,c())},a.fx.stop=function(){d=!1})):(b.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-e)),f=b.setTimeout(function(){a(c+d)},d);return e=c+d,f},b.cancelAnimationFrame=function(a){clearTimeout(a)})}(a),f.prototype.toString=function(){return this.query||(this.query=h(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""))},b.Foundation={name:"Foundation",version:"5.5.3",media_queries:{small:new f(".foundation-mq-small"),"small-only":new f(".foundation-mq-small-only"),medium:new f(".foundation-mq-medium"),"medium-only":new f(".foundation-mq-medium-only"),large:new f(".foundation-mq-large"),"large-only":new f(".foundation-mq-large-only"),xlarge:new f(".foundation-mq-xlarge"),"xlarge-only":new f(".foundation-mq-xlarge-only"),xxlarge:new f(".foundation-mq-xxlarge")},stylesheet:a("<style></style>").appendTo("head")[0].sheet,global:{namespace:d},init:function(a,c,d,e,f){var g=[a,d,e,f],i=[];if(this.rtl=/rtl/i.test(h("html").attr("dir")),this.scope=a||this.scope,this.set_namespace(),c&&"string"==typeof c&&!/reflow/i.test(c))this.libs.hasOwnProperty(c)&&i.push(this.init_lib(c,g));else for(var j in this.libs)i.push(this.init_lib(j,c));return h(b).load(function(){h(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),a},init_lib:function(b,c){return this.libs.hasOwnProperty(b)?(this.patch(this.libs[b]),c&&c.hasOwnProperty(b)?("undefined"!=typeof this.libs[b].settings?a.extend(!0,this.libs[b].settings,c[b]):"undefined"!=typeof this.libs[b].defaults&&a.extend(!0,this.libs[b].defaults,c[b]),this.libs[b].init.apply(this.libs[b],[this.scope,c[b]])):(c=c instanceof Array?c:new Array(c),this.libs[b].init.apply(this.libs[b],c))):function(){}},patch:function(a){a.scope=this.scope,a.namespace=this.global.namespace,a.rtl=this.rtl,a.data_options=this.utils.data_options,a.attr_name=i,a.add_namespace=j,a.bindings=k,a.S=this.utils.S},inherit:function(a,b){for(var c=b.split(" "),d=c.length;d--;)this.utils.hasOwnProperty(c[d])&&(a[c[d]]=this.utils[c[d]])},set_namespace:function(){var b=this.global.namespace===d?a(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=b===d||/false/i.test(b)?"":b},libs:{},utils:{S:h,throttle:function(a,b){var c=null;return function(){var d=this,e=arguments;null==c&&(c=setTimeout(function(){a.apply(d,e),c=null},b))}},debounce:function(a,b,c){var d,e;return function(){var f=this,g=arguments,h=function(){d=null,c||(e=a.apply(f,g))},i=c&&!d;return clearTimeout(d),d=setTimeout(h,b),i&&(e=a.apply(f,g)),e}},data_options:function(b,c){function d(a){return!isNaN(a-0)&&null!==a&&""!==a&&a!==!1&&a!==!0}function e(b){return"string"==typeof b?a.trim(b):b}c=c||"options";var f,g,h,i={},j=function(a){var b=Foundation.global.namespace;return b.length>0?a.data(b+"-"+c):a.data(c)},k=j(b);if("object"==typeof k)return k;for(h=(k||":").split(";"),f=h.length;f--;)g=h[f].split(":"),g=[g[0],g.slice(1).join(":")],/true/i.test(g[1])&&(g[1]=!0),/false/i.test(g[1])&&(g[1]=!1),d(g[1])&&(-1===g[1].indexOf(".")?g[1]=parseInt(g[1],10):g[1]=parseFloat(g[1])),2===g.length&&g[0].length>0&&(i[e(g[0])]=e(g[1]));return i},register_media:function(b,c){Foundation.media_queries[b]===d&&(a("head").append('<meta class="'+c+'"/>'),Foundation.media_queries[b]=e(a("."+c).css("font-family")))},add_custom_rule:function(a,b){if(b===d&&Foundation.stylesheet)Foundation.stylesheet.insertRule(a,Foundation.stylesheet.cssRules.length);else{var c=Foundation.media_queries[b];c!==d&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[b]+"{ "+a+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(a,b){function c(a){for(var b=a.length,c=b-1;c>=0;c--)if(a.attr("height")===d)return!1;return!0}var e=this,f=a.length;(0===f||c(a))&&b(a),a.each(function(){l(e.S(this),function(){f-=1,0===f&&b(a)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(a){return b.matchMedia(a).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},a.fn.foundation=function(){var a=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(a)),this})}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.abide={name:"abide",version:"5.5.3",settings:{live_validate:!0,validate_on_blur:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(a,b,d){var e=c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,f=a.value,g=e===f;return g}}},timer:null,init:function(a,b,c){this.bindings(b,c)},events:function(b){function c(a,b){clearTimeout(d.timer),d.timer=setTimeout(function(){d.validate([a],b)}.bind(a),f.timeout)}var d=this,e=d.S(b).attr("novalidate","novalidate"),f=e.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),e.off(".abide").on("submit.fndtn.abide",function(a){var b=/ajax/i.test(d.S(this).attr(d.attr_name()));return d.validate(d.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(),a,b)}).on("validate.fndtn.abide",function(a){"manual"===f.validate_on&&d.validate([a.target],a)}).on("reset",function(b){return d.reset(a(this),b)}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(a){var b=this.getAttribute("id"),d=e.find('[data-equalto="'+b+'"]');f.validate_on_blur&&f.validate_on_blur===!0&&c(this,a),"undefined"!=typeof d.get(0)&&d.val().length&&c(d.get(0),a),"change"===f.validate_on&&c(this,a)}).on("keydown.fndtn.abide",function(a){var b=this.getAttribute("id"),d=e.find('[data-equalto="'+b+'"]');f.live_validate&&f.live_validate===!0&&9!=a.which&&c(this,a),"undefined"!=typeof d.get(0)&&d.val().length&&c(d.get(0),a),"tab"===f.validate_on&&9===a.which?c(this,a):"change"===f.validate_on&&c(this,a)}).on("focus",function(b){navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)&&a("html, body").animate({scrollTop:a(b.target).offset().top},100)})},reset:function(b,c){var d=this;b.removeAttr(d.invalid_attr),a("["+d.invalid_attr+"]",b).removeAttr(d.invalid_attr),a("."+d.settings.error_class,b).not("small").removeClass(d.settings.error_class),a(":input",b).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(d.invalid_attr)},validate:function(a,b,c){for(var d=this.parse_patterns(a),e=d.length,f=this.S(a[0]).closest("form"),g=/submit/.test(b.type),h=0;e>h;h++)if(!d[h]&&(g||c))return this.settings.focus_on_invalid&&a[h].focus(),f.trigger("invalid.fndtn.abide"),this.S(a[h]).closest("form").attr(this.invalid_attr,""),!1;return(g||c)&&f.trigger("valid.fndtn.abide"),f.removeAttr(this.invalid_attr),c?!1:!0},parse_patterns:function(a){for(var b=a.length,c=[];b--;)c.push(this.pattern(a[b]));return this.check_validation_and_apply_styles(c)},pattern:function(a){var b=a.getAttribute("type"),c="string"==typeof a.getAttribute("required"),d=a.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(d)&&d.length>0?[a,this.settings.patterns[d],c]:d.length>0?[a,new RegExp(d),c]:this.settings.patterns.hasOwnProperty(b)?[a,this.settings.patterns[b],c]:(d=/.*/,[a,d,c])},check_validation_and_apply_styles:function(b){var c=b.length,d=[];if(0==c)return d;var e=this.S(b[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(e.data(this.attr_name(!0)+"-init")||{};c--;){var f,g,h=b[c][0],i=b[c][2],j=h.value.trim(),k=this.S(h).parent(),l=h.getAttribute(this.add_namespace("data-abide-validator")),m="radio"===h.type,n="checkbox"===h.type,o=this.S('label[for="'+h.getAttribute("id")+'"]'),p=i?h.value.length>0:!0,q=[];if(h.getAttribute(this.add_namespace("data-equalto"))&&(l="equalTo"),f=k.is("label")?k.parent():k,m&&i)q.push(this.valid_radio(h,i));else if(n&&i)q.push(this.valid_checkbox(h,i));else if(l){for(var r=l.split(" "),s=!0,t=!0,u=0;u<r.length;u++)g=this.settings.validators[r[u]].apply(this,[h,i,f]),q.push(g),t=g&&s,s=g;t?(this.S(h).removeAttr(this.invalid_attr),f.removeClass("error"),o.length>0&&this.settings.error_labels&&o.removeClass(this.settings.error_class).removeAttr("role"),a(h).triggerHandler("valid")):(this.S(h).attr(this.invalid_attr,""),f.addClass("error"),o.length>0&&this.settings.error_labels&&o.addClass(this.settings.error_class).attr("role","alert"),a(h).triggerHandler("invalid"))}else if(b[c][1].test(j)&&p||!i&&h.value.length<1||a(h).attr("disabled")?q.push(!0):q.push(!1),q=[q.every(function(a){return a})],q[0])this.S(h).removeAttr(this.invalid_attr),h.setAttribute("aria-invalid","false"),h.removeAttribute("aria-describedby"),f.removeClass(this.settings.error_class),o.length>0&&this.settings.error_labels&&o.removeClass(this.settings.error_class).removeAttr("role"),a(h).triggerHandler("valid");else{this.S(h).attr(this.invalid_attr,""),h.setAttribute("aria-invalid","true");var v=f.find("small."+this.settings.error_class,"span."+this.settings.error_class),w=v.length>0?v[0].id:"";w.length>0&&h.setAttribute("aria-describedby",w),f.addClass(this.settings.error_class),o.length>0&&this.settings.error_labels&&o.addClass(this.settings.error_class).attr("role","alert"),a(h).triggerHandler("invalid")}d=d.concat(q)}return d},valid_checkbox:function(b,c){var b=this.S(b),d=b.is(":checked")||!c||b.get(0).getAttribute("disabled");return d?(b.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),a(b).triggerHandler("valid")):(b.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),a(b).triggerHandler("invalid")),d},valid_radio:function(b,c){for(var d=b.getAttribute("name"),e=this.S(b).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+d+"']"),f=e.length,g=!1,h=!1,i=0;f>i;i++)e[i].getAttribute("disabled")?(h=!0,g=!0):e[i].checked?g=!0:h&&(g=!1);for(var i=0;f>i;i++)g?(this.S(e[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),a(e[i]).triggerHandler("valid")):(this.S(e[i]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),a(e[i]).triggerHandler("invalid"));return g},valid_equal:function(a,b,d){var e=c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,f=a.value,g=e===f;return g?(this.S(a).removeAttr(this.invalid_attr),d.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(a).attr(this.invalid_attr,""),d.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),g},valid_oneof:function(a,b,c,d){var a=this.S(a),e=this.S("["+this.add_namespace("data-oneof")+"]"),f=e.filter(":checked").length>0;if(f?a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):a.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!d){var g=this;e.each(function(){g.valid_oneof.call(g,this,null,null,!0)})}return f},reflow:function(a,b){var c=this,d=c.S("["+this.attr_name()+"]").attr("novalidate","novalidate");c.S(d).each(function(a,b){c.events(b)})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.3",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(a,b,c){this.bindings(b,c)},events:function(b){var c=this,d=this.S;c.create(this.S(b)),d(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(b){var e=d(this).closest("["+c.attr_name()+"]"),f=c.attr_name()+"="+e.attr(c.attr_name()),g=e.data(c.attr_name(!0)+"-init")||c.settings,h=d("#"+this.href.split("#")[1]),i=a("> dd, > li",e),j=i.children("."+g.content_class),k=j.filter("."+g.active_class);return b.preventDefault(),e.attr(c.attr_name())&&(j=j.add("["+f+"] dd > ."+g.content_class+", ["+f+"] li > ."+g.content_class),i=i.add("["+f+"] dd, ["+f+"] li")),g.toggleable&&h.is(k)?(h.parent("dd, li").toggleClass(g.active_class,!1),h.toggleClass(g.active_class,!1),d(this).attr("aria-expanded",function(a,b){return"true"===b?"false":"true"}),g.callback(h),h.triggerHandler("toggled",[e]),void e.triggerHandler("toggled",[h])):(g.multi_expand||(j.removeClass(g.active_class),i.removeClass(g.active_class),i.children("a").attr("aria-expanded","false")),h.addClass(g.active_class).parent().addClass(g.active_class),g.callback(h),h.triggerHandler("toggled",[e]),e.triggerHandler("toggled",[h]),void d(this).attr("aria-expanded","true"))})},create:function(b){var c=this,d=b,e=a("> .accordion-navigation",d),f=d.data(c.attr_name(!0)+"-init")||c.settings;e.children("a").attr("aria-expanded","false"),e.has("."+f.content_class+"."+f.active_class).addClass(f.active_class).children("a").attr("aria-expanded","true"),f.multi_expand&&b.attr("aria-multiselectable","true")},toggle:function(a){var a="undefined"!=typeof a?a:{},c="undefined"!=typeof a.selector?a.selector:"",d="undefined"!=typeof a.toggle_state?a.toggle_state:"",e="undefined"!=typeof a.$accordion?a.$accordion:this.S(this.scope).closest("["+this.attr_name()+"]"),f=e.find("> dd"+c+", > li"+c);if(f.length<1)return b.console&&console.error("Selection not found.",c),!1;var g=this.S,h=this.settings.active_class;f.each(function(){var a=g(this),b=a.hasClass(h);(b&&"close"===d||!b&&"open"===d||""===d)&&a.find("> a").trigger("click.fndtn.accordion")})},open:function(a){var a="undefined"!=typeof a?a:{};a.toggle_state="open",this.toggle(a)},close:function(a){var a="undefined"!=typeof a?a:{};a.toggle_state="close",this.toggle(a)},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.alert={name:"alert",version:"5.5.3",settings:{callback:function(){}},init:function(a,b,c){this.bindings(b,c)},events:function(){var b=this,c=this.S;a(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(a){var d=c(this).closest("["+b.attr_name()+"]"),e=d.data(b.attr_name(!0)+"-init")||b.settings;a.preventDefault(),Modernizr.csstransitions?(d.addClass("alert-close"),d.on("transitionend webkitTransitionEnd oTransitionEnd",function(a){c(this).trigger("close.fndtn.alert").remove(),e.callback()})):d.fadeOut(300,function(){c(this).trigger("close.fndtn.alert").remove(),e.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.3",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(a,b,c){var d=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(b,c),d.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(d.S("li",this.scope)):d.S("["+this.attr_name()+"]",this.scope).each(function(){d.assemble(d.S("li",this))})},events:function(d){var e=this,f=e.S,g=a(".scroll-container");g.length>0&&(this.scope=g),f(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(a,b,c){var b=b||f(this),c=c||b,d=b.next("li"),g=b.closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init"),h=f(a.target);a.preventDefault(),g||(e.init(),g=b.closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init")),c.hasClass("visible")&&b[0]===c[0]&&d.length>0&&e.is_open(b)&&(c=d,h=f("img",c)),e.open(h,b,c),e.update_paddles(c)}).on("click.fndtn.clearing",".clearing-main-next",function(a){e.nav(a,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(a){e.nav(a,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(a){Foundation.libs.clearing.close(a,this)}),a(c).on("keydown.fndtn.clearing",function(a){e.keydown(a)}),f(b).off(".clearing").on("resize.fndtn.clearing",function(){e.resize()}),this.swipe_events(d)},swipe_events:function(a){var b=this,c=b.S;c(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(a){a.touches||(a=a.originalEvent);var b={start_page_x:a.touches[0].pageX,start_page_y:a.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:d};c(this).data("swipe-transition",b),a.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(a){if(a.touches||(a=a.originalEvent),!(a.touches.length>1||a.scale&&1!==a.scale)){var d=c(this).data("swipe-transition");if("undefined"==typeof d&&(d={}),d.delta_x=a.touches[0].pageX-d.start_page_x,Foundation.rtl&&(d.delta_x=-d.delta_x),"undefined"==typeof d.is_scrolling&&(d.is_scrolling=!!(d.is_scrolling||Math.abs(d.delta_x)<Math.abs(a.touches[0].pageY-d.start_page_y))),!d.is_scrolling&&!d.active){a.preventDefault();var e=d.delta_x<0?"next":"prev";d.active=!0,b.nav(a,e)}}}).on("touchend.fndtn.clearing",".visible-img",function(a){c(this).data("swipe-transition",{}),a.stopPropagation()})},assemble:function(b){var c=b.parent();if(!c.parent().hasClass("carousel")){c.after('<div id="foundationClearingHolder"></div>');var d=c.detach(),e="";if(null!=d[0]){e=d[0].outerHTML;var f=this.S("#foundationClearingHolder"),g=c.data(this.attr_name(!0)+"-init"),h={grid:'<div class="carousel">'+e+"</div>",viewing:g.templates.viewing},i='<div class="clearing-assembled"><div>'+h.viewing+h.grid+"</div></div>",j=this.settings.touch_label;Modernizr.touch&&(i=a(i).find(".clearing-touch-label").html(j).end()),f.after(i).remove()}}},open:function(b,d,e){function f(){setTimeout(function(){this.image_loaded(m,function(){1!==m.outerWidth()||o?g.call(this,m):f.call(this)}.bind(this))}.bind(this),100)}function g(b){var c=a(b);c.css("visibility","visible"),c.trigger("imageVisible"),i.css("overflow","hidden"),j.addClass("clearing-blackout"),k.addClass("clearing-container"),l.show(),this.fix_height(e).caption(h.S(".clearing-caption",l),h.S("img",e)).center_and_label(b,n).shift(d,e,function(){e.closest("li").siblings().removeClass("visible"),e.closest("li").addClass("visible")}),l.trigger("opened.fndtn.clearing")}var h=this,i=a(c.body),j=e.closest(".clearing-assembled"),k=h.S("div",j).first(),l=h.S(".visible-img",k),m=h.S("img",l).not(b),n=h.S(".clearing-touch-label",k),o=!1,p={};a("body").on("touchmove",function(a){a.preventDefault()}),m.error(function(){o=!0}),this.locked()||(l.trigger("open.fndtn.clearing"),p=this.load(b),p.interchange?m.attr("data-interchange",p.interchange).foundation("interchange","reflow"):m.attr("src",p.src).attr("data-interchange",""),m.css("visibility","hidden"),f.call(this))},close:function(b,d){b.preventDefault();var e,f,g=function(a){return/blackout/.test(a.selector)?a:a.closest(".clearing-blackout")}(a(d)),h=a(c.body);return d===b.target&&g&&(h.css("overflow",""),e=a("div",g).first(),f=a(".visible-img",e),f.trigger("close.fndtn.clearing"),this.settings.prev_index=0,a("ul["+this.attr_name()+"]",g).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),e.removeClass("clearing-container"),f.hide(),f.trigger("closed.fndtn.clearing")),a("body").off("touchmove"),!1},is_open:function(a){return a.parent().prop("style").length>0},keydown:function(b){var c=a(".clearing-blackout ul["+this.attr_name()+"]"),d=this.rtl?37:39,e=this.rtl?39:37,f=27;b.which===d&&this.go(c,"next"),b.which===e&&this.go(c,"prev"),b.which===f&&this.S("a.clearing-close").trigger("click.fndtn.clearing")},nav:function(b,c){var d=a("ul["+this.attr_name()+"]",".clearing-blackout");b.preventDefault(),this.go(d,c)},resize:function(){var b=a("img",".clearing-blackout .visible-img"),c=a(".clearing-touch-label",".clearing-blackout");b.length&&(this.center_and_label(b,c),b.trigger("resized.fndtn.clearing"))},fix_height:function(a){var b=a.parent().children(),c=this;return b.each(function(){var a=c.S(this),b=a.find("img");a.height()>b.outerHeight()&&a.addClass("fix-height")}).closest("ul").width(100*b.length+"%"),this},update_paddles:function(a){a=a.closest("li");var b=a.closest(".carousel").siblings(".visible-img");a.next().length>0?this.S(".clearing-main-next",b).removeClass("disabled"):this.S(".clearing-main-next",b).addClass("disabled"),a.prev().length>0?this.S(".clearing-main-prev",b).removeClass("disabled"):this.S(".clearing-main-prev",b).addClass("disabled")},center_and_label:function(a,b){return!this.rtl&&b.length>0?b.css({marginLeft:-(b.outerWidth()/2),marginTop:-(a.outerHeight()/2)-b.outerHeight()-10}):b.css({marginRight:-(b.outerWidth()/2),marginTop:-(a.outerHeight()/2)-b.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(a){var b,c,d;return"A"===a[0].nodeName?(b=a.attr("href"),c=a.data("clearing-interchange")):(d=a.closest("a"),b=d.attr("href"),c=d.data("clearing-interchange")),this.preload(a),{src:b?b:a.attr("src"),interchange:b?c:a.data("clearing-interchange")}},preload:function(a){this.img(a.closest("li").next(),"next").img(a.closest("li").prev(),"prev")},img:function(b,c){if(b.length){var d,e,f,g=a(".clearing-preload-"+c),h=this.S("a",b);h.length?(d=h.attr("href"),e=h.data("clearing-interchange")):(f=this.S("img",b),d=f.attr("src"),e=f.data("clearing-interchange")),e?g.attr("data-interchange",e):(g.attr("src",d),g.attr("data-interchange",""))}return this},caption:function(a,b){var c=b.attr("data-caption");if(c){var d=a.get(0);d.innerHTML=c,a.show()}else a.text("").hide();return this},go:function(a,b){var c=this.S(".visible",a),d=c[b]();this.settings.skip_selector&&0!=d.find(this.settings.skip_selector).length&&(d=d[b]()),d.length&&this.S("img",d).trigger("click.fndtn.clearing",[c,d]).trigger("change.fndtn.clearing")},shift:function(a,b,c){var d,e=b.parent(),f=this.settings.prev_index||b.index(),g=this.direction(e,a,b),h=this.rtl?"right":"left",i=parseInt(e.css("left"),10),j=b.outerWidth(),k={};b.index()===f||/skip/.test(g)?/skip/.test(g)&&(d=b.index()-this.settings.up_count,this.lock(),d>0?(k[h]=-(d*j),e.animate(k,300,this.unlock())):(k[h]=0,e.animate(k,300,this.unlock()))):/left/.test(g)?(this.lock(),k[h]=i+j,e.animate(k,300,this.unlock())):/right/.test(g)&&(this.lock(),k[h]=i-j,e.animate(k,300,this.unlock())),c()},direction:function(a,b,c){var d,e=this.S("li",a),f=e.outerWidth()+e.outerWidth()/4,g=Math.floor(this.S(".clearing-container").outerWidth()/f)-1,h=e.index(c);return this.settings.up_count=g,d=this.adjacent(this.settings.prev_index,h)?h>g&&h>this.settings.prev_index?"right":h>g-1&&h<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=h,d},adjacent:function(a,b){for(var c=b+1;c>=b-1;c--)if(c===a)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(b).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.5.3",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,hover_timeout:150,opened:function(){},closed:function(){}},init:function(b,c,d){Foundation.inherit(this,"throttle"),a.extend(!0,this.settings,c,d),this.bindings(c,d)},events:function(d){var e=this,f=e.S;f(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(b){var c=f(this).data(e.attr_name(!0)+"-init")||e.settings;(!c.is_hover||Modernizr.touch)&&(b.preventDefault(),f(this).parent("[data-reveal-id]").length&&b.stopPropagation(),e.toggle(a(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(a){var b,c,d=f(this);clearTimeout(e.timeout),d.data(e.data_attr())?(b=f("#"+d.data(e.data_attr())),c=d):(b=d,c=f("["+e.attr_name()+'="'+b.attr("id")+'"]'));var g=c.data(e.attr_name(!0)+"-init")||e.settings;f(a.currentTarget).data(e.data_attr())&&g.is_hover&&e.closeall.call(e),g.is_hover&&e.open.apply(e,[b,c])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(a){var b,c=f(this);if(c.data(e.data_attr()))b=c.data(e.data_attr(!0)+"-init")||e.settings;else var d=f("["+e.attr_name()+'="'+f(this).attr("id")+'"]'),b=d.data(e.attr_name(!0)+"-init")||e.settings;e.timeout=setTimeout(function(){c.data(e.data_attr())?b.is_hover&&e.close.call(e,f("#"+c.data(e.data_attr()))):b.is_hover&&e.close.call(e,c)}.bind(this),b.hover_timeout)}).on("click.fndtn.dropdown",function(b){var d=f(b.target).closest("["+e.attr_name()+"-content]"),g=d.find("a");return g.length>0&&"false"!==d.attr("aria-autoclose")&&e.close.call(e,f("["+e.attr_name()+"-content]")),b.target!==c&&!a.contains(c.documentElement,b.target)||f(b.target).closest("["+e.attr_name()+"]").length>0?void 0:!f(b.target).data("revealId")&&d.length>0&&(f(b.target).is("["+e.attr_name()+"-content]")||a.contains(d.first()[0],b.target))?void b.stopPropagation():void e.close.call(e,f("["+e.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+e.attr_name()+"-content]",function(){e.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+e.attr_name()+"-content]",function(){e.settings.closed.call(this)}),f(b).off(".dropdown").on("resize.fndtn.dropdown",e.throttle(function(){e.resize.call(e)},50)),this.resize()},close:function(b){var c=this;b.each(function(d){var e=a("["+c.attr_name()+"="+b[d].id+"]")||a("aria-controls="+b[d].id+"]");e.attr("aria-expanded","false"),c.S(this).hasClass(c.settings.active_class)&&(c.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(c.settings.active_class).prev("["+c.attr_name()+"]").removeClass(c.settings.active_class).removeData("target"),c.S(this).trigger("closed.fndtn.dropdown",[b]))}),b.removeClass("f-open-"+this.attr_name(!0))},closeall:function(){var b=this;a.each(b.S(".f-open-"+this.attr_name(!0)),function(){b.close.call(b,b.S(this))})},open:function(a,b){this.css(a.addClass(this.settings.active_class),b),a.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),a.data("target",b.get(0)).trigger("opened.fndtn.dropdown",[a,b]),a.attr("aria-hidden","false"),b.attr("aria-expanded","true"),a.focus(),a.addClass("f-open-"+this.attr_name(!0))},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(a){if(!a.hasClass(this.settings.disabled_class)){var b=this.S("#"+a.data(this.data_attr()));0!==b.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(b)),b.hasClass(this.settings.active_class)?(this.close.call(this,b),b.data("target")!==a.get(0)&&this.open.call(this,b,a)):this.open.call(this,b,a))}},resize:function(){var b=this.S("["+this.attr_name()+"-content].open"),c=a(b.data("target"));b.length&&c.length&&this.css(b,c)},css:function(a,b){var c=Math.max((b.width()-a.width())/2,8),d=b.data(this.attr_name(!0)+"-init")||this.settings,e=a.parent().css("overflow-y")||a.parent().css("overflow");if(this.clear_idx(),this.small()){var f=this.dirs.bottom.call(a,b,d);a.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:f.top}),a.css(Foundation.rtl?"right":"left",c)}else if("visible"!==e){var g=b[0].offsetTop+b[0].offsetHeight;a.attr("style","").css({position:"absolute",top:g}),a.css(Foundation.rtl?"right":"left",c)}else this.style(a,b,d);return a},style:function(b,c,d){var e=a.extend({position:"absolute"},this.dirs[d.align].call(b,c,d));b.attr("style","").css(e)},dirs:{_base:function(a,d){var e=this.offsetParent(),f=e.offset(),g=a.offset();g.top-=f.top,g.left-=f.left,g.missRight=!1,g.missTop=!1,g.missLeft=!1,g.leftRightFlag=!1;var h,i=b.innerWidth;h=c.getElementsByClassName("row")[0]?c.getElementsByClassName("row")[0].clientWidth:i;var j=(i-h)/2,k=h;if(!this.hasClass("mega")&&!d.ignore_repositioning){var l=this.outerWidth(),m=a.offset().left;a.offset().top<=this.outerHeight()&&(g.missTop=!0,k=i-j,g.leftRightFlag=!0),m+l>m+j&&m-j>l&&(g.missRight=!0,g.missLeft=!1),0>=m-l&&(g.missLeft=!0,g.missRight=!1)}return g},top:function(a,b){var c=Foundation.libs.dropdown,d=c.dirs._base.call(this,a,b);return this.addClass("drop-top"),1==d.missTop&&(d.top=d.top+a.outerHeight()+this.outerHeight(),
this.removeClass("drop-top")),1==d.missRight&&(d.left=d.left-this.outerWidth()+a.outerWidth()),(a.outerWidth()<this.outerWidth()||c.small()||this.hasClass(b.mega_menu))&&c.adjust_pip(this,a,b,d),Foundation.rtl?{left:d.left-this.outerWidth()+a.outerWidth(),top:d.top-this.outerHeight()}:{left:d.left,top:d.top-this.outerHeight()}},bottom:function(a,b){var c=Foundation.libs.dropdown,d=c.dirs._base.call(this,a,b);return 1==d.missRight&&(d.left=d.left-this.outerWidth()+a.outerWidth()),(a.outerWidth()<this.outerWidth()||c.small()||this.hasClass(b.mega_menu))&&c.adjust_pip(this,a,b,d),c.rtl?{left:d.left-this.outerWidth()+a.outerWidth(),top:d.top+a.outerHeight()}:{left:d.left,top:d.top+a.outerHeight()}},left:function(a,b){var c=Foundation.libs.dropdown.dirs._base.call(this,a,b);return this.addClass("drop-left"),1==c.missLeft&&(c.left=c.left+this.outerWidth(),c.top=c.top+a.outerHeight(),this.removeClass("drop-left")),{left:c.left-this.outerWidth(),top:c.top}},right:function(a,b){var c=Foundation.libs.dropdown.dirs._base.call(this,a,b);this.addClass("drop-right"),1==c.missRight?(c.left=c.left-this.outerWidth(),c.top=c.top+a.outerHeight(),this.removeClass("drop-right")):c.triggeredRight=!0;var d=Foundation.libs.dropdown;return(a.outerWidth()<this.outerWidth()||d.small()||this.hasClass(b.mega_menu))&&d.adjust_pip(this,a,b,c),{left:c.left+a.outerWidth(),top:c.top}}},adjust_pip:function(a,b,c,d){var e=Foundation.stylesheet,f=8;a.hasClass(c.mega_class)?f=d.left+b.outerWidth()/2-8:this.small()&&(f+=d.left-8),this.rule_idx=e.cssRules.length;var g=".f-dropdown.open:before",h=".f-dropdown.open:after",i="left: "+f+"px;",j="left: "+(f-1)+"px;";1==d.missRight&&(f=a.outerWidth()-23,g=".f-dropdown.open:before",h=".f-dropdown.open:after",i="left: "+f+"px;",j="left: "+(f-1)+"px;"),1==d.triggeredRight&&(g=".f-dropdown.open:before",h=".f-dropdown.open:after",i="left:-12px;",j="left:-14px;"),e.insertRule?(e.insertRule([g,"{",i,"}"].join(" "),this.rule_idx),e.insertRule([h,"{",j,"}"].join(" "),this.rule_idx+1)):(e.addRule(g,i,this.rule_idx),e.addRule(h,j,this.rule_idx+1))},clear_idx:function(){var a=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(a.deleteRule(this.rule_idx),a.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(b).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.3",settings:{use_tallest:!0,before_height_change:a.noop,after_height_change:a.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(a,b,c){Foundation.inherit(this,"image_loaded"),this.bindings(b,c),this.reflow()},events:function(){this.S(b).off(".equalizer").on("resize.fndtn.equalizer",function(a){this.reflow()}.bind(this))},equalize:function(b){var c,d,e=!1,f=b.data("equalizer"),g=b.data(this.attr_name(!0)+"-init")||this.settings;if(c=g.act_on_hidden_el?f?b.find("["+this.attr_name()+'-watch="'+f+'"]'):b.find("["+this.attr_name()+"-watch]"):f?b.find("["+this.attr_name()+'-watch="'+f+'"]:visible'):b.find("["+this.attr_name()+"-watch]:visible"),0!==c.length&&(g.before_height_change(),b.trigger("before-height-change.fndth.equalizer"),c.height("inherit"),g.equalize_on_stack!==!1||(d=c.first().offset().top,c.each(function(){return a(this).offset().top!==d?(e=!0,!1):void 0}),!e))){var h=c.map(function(){return a(this).outerHeight(!1)}).get();if(g.use_tallest){var i=Math.max.apply(null,h);c.css("height",i)}else{var j=Math.min.apply(null,h);c.css("height",j)}g.after_height_change(),b.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var b=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var c=a(this),d=c.data("equalizer-mq"),e=!0;d&&(d="is_"+d.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(d)&&(e=!1)),b.image_loaded(b.S("img",this),function(){if(e||Foundation.utils[d]())b.equalize(c);else{var a=c.find("["+b.attr_name()+"-watch]:visible");a.css("height","auto")}})})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.3",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(b,c,d){if(null!==b&&/IMG/.test(b[0].nodeName)){var e=a.each(b,function(){this.src=c});if(new RegExp(c,"i").test(e))return;return b.attr("src",c),d(b[0].src)}var f=b.data(this.data_attr+"-last-path"),g=this;if(f!=c)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c)?(a(b).css("background-image","url("+c+")"),b.data("interchange-last-path",c),d(c)):a.get(c,function(a){b.html(a),b.data(g.data_attr+"-last-path",c),d()})}}},init:function(b,c,d){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),a.extend(!0,this.settings,c,d),this.bindings(c,d),this.reflow()},get_media_hash:function(){var a="";for(var b in this.settings.named_queries)a+=matchMedia(this.settings.named_queries[b]).matches.toString();return a},events:function(){var c,d=this;return a(b).off(".interchange").on("resize.fndtn.interchange",d.throttle(function(){var a=d.get_media_hash();a!==c&&d.resize(),c=a},50)),this},resize:function(){var b=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(a.proxy(this.resize,this),50);for(var c in b)if(b.hasOwnProperty(c)){var d=this.results(c,b[c]);d&&this.settings.directives[d.scenario[1]].call(this,d.el,d.scenario[0],function(a){if(arguments[0]instanceof Array)var b=arguments[0];else var b=Array.prototype.slice.call(arguments,0);return function(){a.el.trigger(a.scenario[1],b)}}(d))}},results:function(a,b){var c=b.length;if(c>0)for(var d=this.S("["+this.add_namespace("data-uuid")+'="'+a+'"]');c--;){var e,f=b[c][2];if(e=this.settings.named_queries.hasOwnProperty(f)?matchMedia(this.settings.named_queries[f]):matchMedia(f),e.matches)return{el:d,scenario:b[c]}}return!1},load:function(a,b){return("undefined"==typeof this["cached_"+a]||b)&&this["update_"+a](),this["cached_"+a]},update_images:function(){var a=this.S("img["+this.data_attr+"]"),b=a.length,c=b,d=0,e=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===b;c--;){if(d++,a[c]){var f=a[c].getAttribute(e)||"";f.length>0&&this.cached_images.push(a[c])}d===b&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var a=this.S("["+this.data_attr+"]").not("img"),b=a.length,c=b,d=0,e=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===b;c--;){d++;var f=a[c].getAttribute(e)||"";f.length>0&&this.cached_nodes.push(a[c]),d===b&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(c){for(var d=this["cached_"+c].length;d--;)this.object(a(this["cached_"+c][d]));return a(b).trigger("resize.fndtn.interchange")},convert_directive:function(a){var b=this.trim(a);return b.length>0?b:"replace"},parse_scenario:function(a){var b=a[0].match(/(.+),\s*(\w+)\s*$/),c=a[1].match(/(.*)\)/);if(b)var d=b[1],e=b[2];else var f=a[0].split(/,\s*$/),d=f[0],e="";return[this.trim(d),this.convert_directive(e),this.trim(c[1])]},object:function(a){var b=this.parse_data_attr(a),c=[],d=b.length;if(d>0)for(;d--;){var e=b[d].split(/,\s?\(/);if(e.length>1){var f=this.parse_scenario(e);c.push(f)}}return this.store(a,c)},store:function(a,b){var c=this.random_str(),d=a.data(this.add_namespace("uuid",!0));return this.cache[d]?this.cache[d]:(a.attr(this.add_namespace("data-uuid"),c),this.cache[c]=b)},trim:function(b){return"string"==typeof b?a.trim(b):b},set_data_attr:function(a){return a?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(a){for(var b=a.attr(this.attr_name()).split(/\[(.*?)\]/),c=b.length,d=[];c--;)b[c].replace(/[\W\d]+/,"").length>4&&d.push(b[c]);return d},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.5.3",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(b,c,d){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||a.extend({},this.defaults,d||c),this.bindings(c,d)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var c=this;a(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(a){a.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(a){a.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(a){a.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(a){if(this.settings.keyboard&&this.settings.riding)switch(a.which){case 39:a.preventDefault(),this.go_next();break;case 37:a.preventDefault(),this.go_prev();break;case 27:a.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),a(b).off(".joyride").on("resize.fndtn.joyride",c.throttle(function(){if(a("["+c.attr_name()+"]").length>0&&c.settings.$next_tip&&c.settings.riding){if(c.settings.exposed.length>0){var b=a(c.settings.exposed);b.each(function(){var b=a(this);c.un_expose(b),c.expose(b)})}c.is_phone()?c.pos_phone():c.pos_default(!1)}},100))},start:function(){var b=this,c=a("["+this.attr_name()+"]",this.scope),d=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],e=d.length;!c.length>0||(this.settings.init||this.events(),this.settings=c.data(this.attr_name(!0)+"-init"),this.settings.$content_el=c,this.settings.$body=a(this.settings.tip_container),this.settings.body_offset=a(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof a.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!a.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(c){var f=a(this);this.settings=a.extend({},b.defaults,b.data_options(f));for(var g=e;g--;)b.settings[d[g]]=parseInt(b.settings[d[g]],10);b.create({$li:f,index:c})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(b){var c,d;return b.tip_class=b.tip_class||"",c=a(this.settings.template.tip).addClass(b.tip_class),d=a.trim(a(b.li).html())+this.prev_button_text(b.prev_button_text,b.index)+this.button_text(b.button_text)+this.settings.template.link+this.timer_instance(b.index),c.append(a(this.settings.template.wrapper)),c.first().attr(this.add_namespace("data-index"),b.index),a(".joyride-content-wrapper",c).append(d),c[0]},timer_instance:function(b){var c;return c=0===b&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":a(this.settings.template.timer)[0].outerHTML},button_text:function(b){return this.settings.tip_settings.next_button?(b=a.trim(b)||"Next",b=a(this.settings.template.button).append(b)[0].outerHTML):b="",b},prev_button_text:function(b,c){return this.settings.tip_settings.prev_button?(b=a.trim(b)||"Previous",b=0==c?a(this.settings.template.prev_button).append(b).addClass("disabled")[0].outerHTML:a(this.settings.template.prev_button).append(b)[0].outerHTML):b="",b},create:function(b){this.settings.tip_settings=a.extend({},this.settings,this.data_options(b.$li));var c=b.$li.attr(this.add_namespace("data-button"))||b.$li.attr(this.add_namespace("data-text")),d=b.$li.attr(this.add_namespace("data-button-prev"))||b.$li.attr(this.add_namespace("data-prev-text")),e=b.$li.attr("class"),f=a(this.tip_template({tip_class:e,index:b.index,button_text:c,prev_button_text:d,li:b.$li}));a(this.settings.tip_container).append(f)},show:function(b,c){var e=null;if(this.settings.$li===d||-1===a.inArray(this.settings.$li.index(),this.settings.pause_after))if(this.settings.paused?this.settings.paused=!1:this.set_li(b,c),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0){if(b&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=a.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],!/body/i.test(this.settings.$target.selector)&&!this.settings.expose){var f=a(".joyride-modal-bg");/pop/i.test(this.settings.tipAnimation)?f.hide():f.fadeOut(this.settings.tipAnimationFadeSpeed),this.scroll_to()}this.is_phone()?this.pos_phone(!0):this.pos_default(!0),e=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(e.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){e.animate({width:e.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(e.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){e.animate({width:e.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip}else this.settings.$li&&this.settings.$target.length<1?this.show(b,c):this.end();else this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||a(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(a.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(a,b){a?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(b?this.settings.$li=this.settings.$li.prev():this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=a(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var b=this.settings.$li.attr(this.add_namespace("data-class")),d=this.settings.$li.attr(this.add_namespace("data-id")),e=function(){return d?a(c.getElementById(d)):b?a("."+b).first():a("body")};this.settings.$target=e()},scroll_to:function(){var c,d;c=a(b).height()/2,d=Math.ceil(this.settings.$target.offset().top-c+this.settings.$next_tip.outerHeight()),0!=d&&a("html, body").stop().animate({scrollTop:d},this.settings.scroll_speed,"swing")},paused:function(){return-1===a.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=d,this.show("init")},pos_default:function(a){var b=this.settings.$next_tip.find(".joyride-nub"),c=Math.ceil(b.outerWidth()/2),d=Math.ceil(b.outerHeight()/2),e=a||!1;if(e&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(b);else{var f=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,g=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+d+this.settings.$target.outerHeight()+f,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+g}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+d+this.settings.$target.outerHeight()+f,left:this.settings.$target.offset().left+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-d+f,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-d+f,left:this.settings.$target.offset().left+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+f,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+c+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+f,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-c+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(b.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}e&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(b){var c=this.settings.$next_tip.outerHeight(),d=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),e=a(".joyride-nub",this.settings.$next_tip),f=Math.ceil(e.outerHeight()/2),g=b||!1;e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),g&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(e):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-c-f}),e.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+d+f}),e.addClass("top")),g&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(a){this.center(),a.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var b=a(".joyride-modal-bg");if(b.length<1){var b=a(this.settings.template.modal);b.appendTo("body")}/pop/i.test(this.settings.tip_animation)?b.show():b.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var c,d,e,f,g,h="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof a)e=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;e=this.settings.$target}return e.length<1?(b.console&&console.error("element not valid",e),!1):(c=a(this.settings.template.expose),this.settings.$body.append(c),c.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)}),d=a(this.settings.template.expose_cover),f={zIndex:e.css("z-index"),position:e.css("position")},g=null==e.attr("class")?"":e.attr("class"),e.css("z-index",parseInt(c.css("z-index"))+1),"static"==f.position&&e.css("position","relative"),e.data("expose-css",f),e.data("orig-class",g),e.attr("class",g+" "+this.settings.expose_add_class),d.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(d),c.addClass(h),d.addClass(h),e.data("expose",h),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,e),void this.add_exposed(e))},un_expose:function(){var c,d,e,f,g,h=!1;if(arguments.length>0&&arguments[0]instanceof a)d=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;d=this.settings.$target}return d.length<1?(b.console&&console.error("element not valid",d),!1):(c=d.data("expose"),e=a("."+c),arguments.length>1&&(h=arguments[1]),h===!0?a(".joyride-expose-wrapper,.joyride-expose-cover").remove():e.remove(),f=d.data("expose-css"),"auto"==f.zIndex?d.css("z-index",""):d.css("z-index",f.zIndex),f.position!=d.css("position")&&("static"==f.position?d.css("position",""):d.css("position",f.position)),g=d.data("orig-class"),d.attr("class",g),d.removeData("orig-classes"),d.removeData("expose"),d.removeData("expose-z-index"),void this.remove_exposed(d))},add_exposed:function(b){this.settings.exposed=this.settings.exposed||[],b instanceof a||"object"==typeof b?this.settings.exposed.push(b[0]):"string"==typeof b&&this.settings.exposed.push(b)},remove_exposed:function(b){var c,d;for(b instanceof a?c=b[0]:"string"==typeof b&&(c=b),this.settings.exposed=this.settings.exposed||[],d=this.settings.exposed.length;d--;)if(this.settings.exposed[d]==c)return void this.settings.exposed.splice(d,1)},center:function(){var c=a(b);return this.settings.$next_tip.css({top:(c.height()-this.settings.$next_tip.outerHeight())/2+c.scrollTop(),left:(c.width()-this.settings.$next_tip.outerWidth())/2+c.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(c){if(0===c.length)return[!1,!1,!1,!1];var d=a(b),e=d.height()/2,f=Math.ceil(this.settings.$target.offset().top-e+this.settings.$next_tip.outerHeight()),g=d.width()+d.scrollLeft(),h=d.height()+f,i=d.height()+d.scrollTop(),j=d.scrollTop();return j>f&&(j=0>f?0:f),h>i&&(i=h),[c.offset().top<j,g<c.offset().left+c.outerWidth(),i<c.offset().top+c.outerHeight(),d.scrollLeft()>c.offset().left]},visible:function(a){for(var b=a.length;b--;)if(a[b])return!1;return!0},nub_position:function(a,b,c){"auto"===b?a.addClass(c):a.addClass(b)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(b){this.settings.cookie_monster&&a.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),a(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,a(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof b||b===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),a(".joyride-tip-guide").remove()},off:function(){a(this.scope).off(".joyride"),a(b).off(".joyride"),a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),a(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate)},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.3",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(a,b,c){Foundation.inherit(this,"throttle"),this.bindings(b,c)},events:function(){var b=this,c=b.S,d=b.settings;b.set_expedition_position(),c(b.scope).off(".magellan").on("click.fndtn.magellan","["+b.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(c){var d=this.hostname===location.hostname||!this.hostname,e=b.filterPathname(location.pathname)===b.filterPathname(this.pathname),f=this.hash.replace(/(:|\.|\/)/g,"\\$1"),g=this;if(d&&e&&f){c.preventDefault();var h=a(this).closest("["+b.attr_name()+"]"),i=h.data("magellan-expedition-init"),j=this.hash.split("#").join(""),k=a('a[name="'+j+'"]');0===k.length&&(k=a("#"+j));var l=k.offset().top-i.destination_threshold+1;i.offset_by_height&&(l-=h.outerHeight()),a("html, body").stop().animate({scrollTop:l},i.duration,i.easing,function(){history.pushState?history.pushState(null,null,g.pathname+g.search+"#"+j):location.hash=g.pathname+g.search+"#"+j})}}).on("scroll.fndtn.magellan",b.throttle(this.check_for_arrivals.bind(this),d.throttle_delay))},check_for_arrivals:function(){var a=this;a.update_arrivals(),a.update_expedition_positions()},set_expedition_position:function(){var b=this;a("["+this.attr_name()+"=fixed]",b.scope).each(function(c,d){var e,f,g=a(this),h=g.data("magellan-expedition-init"),i=g.attr("styles");g.attr("style",""),e=g.offset().top+h.threshold,f=parseInt(g.data("magellan-fixed-top")),isNaN(f)||(b.settings.fixed_top=f),g.data(b.data_attr("magellan-top-offset"),e),g.attr("style",i)})},update_expedition_positions:function(){var c=this,d=a(b).scrollTop();a("["+this.attr_name()+"=fixed]",c.scope).each(function(){var b=a(this),e=b.data("magellan-expedition-init"),f=b.attr("style"),g=b.data("magellan-top-offset");if(d+c.settings.fixed_top>=g){var h=b.prev("["+c.add_namespace("data-magellan-expedition-clone")+"]");0===h.length&&(h=b.clone(),h.removeAttr(c.attr_name()),h.attr(c.add_namespace("data-magellan-expedition-clone"),""),b.before(h)),b.css({position:"fixed",top:e.fixed_top}).addClass("fixed")}else b.prev("["+c.add_namespace("data-magellan-expedition-clone")+"]").remove(),b.attr("style",f).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var c=this,d=a(b).scrollTop();a("["+this.attr_name()+"]",c.scope).each(function(){var b=a(this),e=b.data(c.attr_name(!0)+"-init"),f=c.offsets(b,d),g=b.find("["+c.add_namespace("data-magellan-arrival")+"]"),h=!1;f.each(function(a,d){if(d.viewport_offset>=d.top_offset){var f=b.find("["+c.add_namespace("data-magellan-arrival")+"]");return f.not(d.arrival).removeClass(e.active_class),d.arrival.addClass(e.active_class),h=!0,!0}}),h||g.removeClass(e.active_class)})},offsets:function(b,c){var d=this,e=b.data(d.attr_name(!0)+"-init"),f=c;return b.find("["+d.add_namespace("data-magellan-arrival")+"]").map(function(c,g){var h=a(this).data(d.data_attr("magellan-arrival")),i=a("["+d.add_namespace("data-magellan-destination")+"="+h+"]");if(i.length>0){var j=i.offset().top-e.destination_threshold;return e.offset_by_height&&(j-=b.outerHeight()),j=Math.floor(j),{destination:i,arrival:a(this),top_offset:j,viewport_offset:f}}}).sort(function(a,b){return a.top_offset<b.top_offset?-1:a.top_offset>b.top_offset?1:0})},data_attr:function(a){return this.namespace.length>0?this.namespace+"-"+a:a},off:function(){this.S(this.scope).off(".magellan"),this.S(b).off(".magellan")},filterPathname:function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var b=this;a("["+b.add_namespace("data-magellan-expedition-clone")+"]",b.scope).remove()}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.3",settings:{open_method:"move",close_on_click:!1},init:function(a,b,c){this.bindings(b,c)},events:function(){var b=this,c=b.S,d="",e="",f="",g="",h="";"move"===this.settings.open_method?(d="move-",e="right",f="left",g="top",h="bottom"):"overlap_single"===this.settings.open_method?(d="offcanvas-overlap-",e="right",f="left",g="top",h="bottom"):"overlap"===this.settings.open_method&&(d="offcanvas-overlap"),c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(f){b.click_toggle_class(f,d+e),"overlap"!==b.settings.open_method&&c(".left-submenu").removeClass(d+e),a(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(f){var g=b.get_settings(f),h=c(this).parent();!g.close_on_click||h.hasClass("has-submenu")||h.hasClass("back")?c(this).parent().hasClass("has-submenu")?(f.preventDefault(),c(this).siblings(".left-submenu").toggleClass(d+e)):h.hasClass("back")&&(f.preventDefault(),h.parent().removeClass(d+e)):(b.hide.call(b,d+e,b.get_wrapper(f)),h.parent().removeClass(d+e)),a(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(e){b.click_toggle_class(e,d+f),"overlap"!==b.settings.open_method&&c(".right-submenu").removeClass(d+f),a(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(e){var g=b.get_settings(e),h=c(this).parent();!g.close_on_click||h.hasClass("has-submenu")||h.hasClass("back")?c(this).parent().hasClass("has-submenu")?(e.preventDefault(),c(this).siblings(".right-submenu").toggleClass(d+f)):h.hasClass("back")&&(e.preventDefault(),h.parent().removeClass(d+f)):(b.hide.call(b,d+f,b.get_wrapper(e)),h.parent().removeClass(d+f)),a(".right-off-canvas-toggle").attr("aria-expanded","true");
}).on("click.fndtn.offcanvas",".top-off-canvas-toggle",function(e){b.click_toggle_class(e,d+h),"overlap"!==b.settings.open_method&&c(".top-submenu").removeClass(d+h),a(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-menu a",function(e){var f=b.get_settings(e),g=c(this).parent();!f.close_on_click||g.hasClass("has-submenu")||g.hasClass("back")?c(this).parent().hasClass("has-submenu")?(e.preventDefault(),c(this).siblings(".top-submenu").toggleClass(d+h)):g.hasClass("back")&&(e.preventDefault(),g.parent().removeClass(d+h)):(b.hide.call(b,d+h,b.get_wrapper(e)),g.parent().removeClass(d+h)),a(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-toggle",function(e){b.click_toggle_class(e,d+g),"overlap"!==b.settings.open_method&&c(".bottom-submenu").removeClass(d+g),a(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-menu a",function(e){var f=b.get_settings(e),h=c(this).parent();!f.close_on_click||h.hasClass("has-submenu")||h.hasClass("back")?c(this).parent().hasClass("has-submenu")?(e.preventDefault(),c(this).siblings(".bottom-submenu").toggleClass(d+g)):h.hasClass("back")&&(e.preventDefault(),h.parent().removeClass(d+g)):(b.hide.call(b,d+g,b.get_wrapper(e)),h.parent().removeClass(d+g)),a(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(g){b.click_remove_class(g,d+f),c(".right-submenu").removeClass(d+f),e&&(b.click_remove_class(g,d+e),c(".left-submenu").removeClass(d+f)),a(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(c){b.click_remove_class(c,d+f),a(".left-off-canvas-toggle").attr("aria-expanded","false"),e&&(b.click_remove_class(c,d+e),a(".right-off-canvas-toggle").attr("aria-expanded","false"))}).on("click.fndtn.offcanvas",".exit-off-canvas",function(e){b.click_remove_class(e,d+g),c(".bottom-submenu").removeClass(d+g),h&&(b.click_remove_class(e,d+h),c(".top-submenu").removeClass(d+g)),a(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(c){b.click_remove_class(c,d+g),a(".top-off-canvas-toggle").attr("aria-expanded","false"),h&&(b.click_remove_class(c,d+h),a(".bottom-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(a,b){b=b||this.get_wrapper(),b.is("."+a)?this.hide(a,b):this.show(a,b)},show:function(a,b){b=b||this.get_wrapper(),b.trigger("open.fndtn.offcanvas"),b.addClass(a)},hide:function(a,b){b=b||this.get_wrapper(),b.trigger("close.fndtn.offcanvas"),b.removeClass(a)},click_toggle_class:function(a,b){a.preventDefault();var c=this.get_wrapper(a);this.toggle(b,c)},click_remove_class:function(a,b){a.preventDefault();var c=this.get_wrapper(a);this.hide(b,c)},get_settings:function(a){var b=this.S(a.target).closest("["+this.attr_name()+"]");return b.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(a){var b=this.S(a?a.target:this.scope).closest(".off-canvas-wrap");return 0===b.length&&(b=this.S(".off-canvas-wrap")),b},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";var e=function(){},f=function(e,f){if(e.hasClass(f.slides_container_class))return this;var j,k,l,m,n,o,p=this,q=e,r=0,s=!1;p.slides=function(){return q.children(f.slide_selector)},p.slides().first().addClass(f.active_slide_class),p.update_slide_number=function(b){f.slide_number&&(k.find("span:first").text(parseInt(b)+1),k.find("span:last").text(p.slides().length)),f.bullets&&(l.children().removeClass(f.bullets_active_class),a(l.children().get(b)).addClass(f.bullets_active_class))},p.update_active_link=function(b){var c=a('[data-orbit-link="'+p.slides().eq(b).attr("data-orbit-slide")+'"]');c.siblings().removeClass(f.bullets_active_class),c.addClass(f.bullets_active_class)},p.build_markup=function(){q.wrap('<div class="'+f.container_class+'"></div>'),j=q.parent(),q.addClass(f.slides_container_class),f.stack_on_small&&j.addClass(f.stack_on_small_class),f.navigation_arrows&&(j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)),j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))),f.timer&&(m=a("<div>").addClass(f.timer_container_class),m.append("<span>"),m.append(a("<div>").addClass(f.timer_progress_class)),m.addClass(f.timer_paused_class),j.append(m)),f.slide_number&&(k=a("<div>").addClass(f.slide_number_class),k.append("<span></span> "+f.slide_number_text+" <span></span>"),j.append(k)),f.bullets&&(l=a("<ol>").addClass(f.bullets_container_class),j.append(l),l.wrap('<div class="orbit-bullets-container"></div>'),p.slides().each(function(b,c){var d=a("<li>").attr("data-orbit-slide",b).on("click",p.link_bullet);l.append(d)}))},p._goto=function(b,c){if(b===r)return!1;"object"==typeof o&&o.restart();var d=p.slides(),e="next";if(s=!0,r>b&&(e="prev"),b>=d.length){if(!f.circular)return!1;b=0}else if(0>b){if(!f.circular)return!1;b=d.length-1}var g=a(d.get(r)),h=a(d.get(b));g.css("zIndex",2),g.removeClass(f.active_slide_class),h.css("zIndex",4).addClass(f.active_slide_class),q.trigger("before-slide-change.fndtn.orbit"),f.before_slide_change(),p.update_active_link(b);var i=function(){var a=function(){r=b,s=!1,c===!0&&(o=p.create_timer(),o.start()),p.update_slide_number(r),q.trigger("after-slide-change.fndtn.orbit",[{slide_number:r,total_slides:d.length}]),f.after_slide_change(r,d.length)};q.outerHeight()!=h.outerHeight()&&f.variable_height?q.animate({height:h.outerHeight()},250,"linear",a):a()};if(1===d.length)return i(),!1;var j=function(){"next"===e&&n.next(g,h,i),"prev"===e&&n.prev(g,h,i)};h.outerHeight()>q.outerHeight()&&f.variable_height?q.animate({height:h.outerHeight()},250,"linear",j):j()},p.next=function(a){a.stopImmediatePropagation(),a.preventDefault(),p._goto(r+1)},p.prev=function(a){a.stopImmediatePropagation(),a.preventDefault(),p._goto(r-1)},p.link_custom=function(b){b.preventDefault();var c=a(this).attr("data-orbit-link");if("string"==typeof c&&""!=(c=a.trim(c))){var d=j.find("[data-orbit-slide="+c+"]");-1!=d.index()&&p._goto(d.index())}},p.link_bullet=function(b){var c=a(this).attr("data-orbit-slide");if("string"==typeof c&&""!=(c=a.trim(c)))if(isNaN(parseInt(c))){var d=j.find("[data-orbit-slide="+c+"]");-1!=d.index()&&p._goto(d.index()+1)}else p._goto(parseInt(c))},p.timer_callback=function(){p._goto(r+1,!0)},p.compute_dimensions=function(){var b=a(p.slides().get(r)),c=b.outerHeight();f.variable_height||p.slides().each(function(){a(this).outerHeight()>c&&(c=a(this).outerHeight())}),q.height(c)},p.create_timer=function(){var a=new g(j.find("."+f.timer_container_class),f,p.timer_callback);return a},p.stop_timer=function(){"object"==typeof o&&o.stop()},p.toggle_timer=function(){var a=j.find("."+f.timer_container_class);a.hasClass(f.timer_paused_class)?("undefined"==typeof o&&(o=p.create_timer()),o.start()):"object"==typeof o&&o.stop()},p.init=function(){p.build_markup(),f.timer&&(o=p.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),o.start)),n=new i(f,q),"slide"===f.animation&&(n=new h(f,q)),j.on("click","."+f.next_class,p.next),j.on("click","."+f.prev_class,p.prev),f.next_on_click&&j.on("click","."+f.slides_container_class+" [data-orbit-slide]",p.link_bullet),j.on("click",p.toggle_timer),f.swipe&&j.on("touchstart.fndtn.orbit",function(a){a.touches||(a=a.originalEvent);var b={start_page_x:a.touches[0].pageX,start_page_y:a.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:d};j.data("swipe-transition",b),a.stopPropagation()}).on("touchmove.fndtn.orbit",function(a){if(a.touches||(a=a.originalEvent),!(a.touches.length>1||a.scale&&1!==a.scale)){var b=j.data("swipe-transition");if("undefined"==typeof b&&(b={}),b.delta_x=a.touches[0].pageX-b.start_page_x,"undefined"==typeof b.is_scrolling&&(b.is_scrolling=!!(b.is_scrolling||Math.abs(b.delta_x)<Math.abs(a.touches[0].pageY-b.start_page_y))),!b.is_scrolling&&!b.active){a.preventDefault();var c=b.delta_x<0?r+1:r-1;b.active=!0,p._goto(c)}}}).on("touchend.fndtn.orbit",function(a){j.data("swipe-transition",{}),a.stopPropagation()}),j.on("mouseenter.fndtn.orbit",function(a){f.timer&&f.pause_on_hover&&p.stop_timer()}).on("mouseleave.fndtn.orbit",function(a){f.timer&&f.resume_on_mouseout&&o.start()}),a(c).on("click","[data-orbit-link]",p.link_custom),a(b).on("load resize",p.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),p.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){j.prev("."+f.preloader_class).css("display","none"),p.update_slide_number(0),p.update_active_link(0),q.trigger("ready.fndtn.orbit")})},p.init()},g=function(a,b,c){var d,e,f=this,g=b.timer_speed,h=a.find("."+b.timer_progress_class),i=-1;this.update_progress=function(a){var b=h.clone();b.attr("style",""),b.css("width",a+"%"),h.replaceWith(b),h=b},this.restart=function(){clearTimeout(e),a.addClass(b.timer_paused_class),i=-1,f.update_progress(0)},this.start=function(){return a.hasClass(b.timer_paused_class)?(i=-1===i?g:i,a.removeClass(b.timer_paused_class),d=(new Date).getTime(),h.animate({width:"100%"},i,"linear"),e=setTimeout(function(){f.restart(),c()},i),void a.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(a.hasClass(b.timer_paused_class))return!0;clearTimeout(e),a.addClass(b.timer_paused_class);var c=(new Date).getTime();i-=c-d;var h=100-i/g*100;f.update_progress(h),a.trigger("timer-stopped.fndtn.orbit")}},h=function(b,c){var d=b.animation_speed,e=1===a("html[dir=rtl]").length,f=e?"marginRight":"marginLeft",g={};g[f]="0%",this.next=function(a,b,c){a.animate({marginLeft:"-100%"},d),b.animate(g,d,function(){a.css(f,"100%"),c()})},this.prev=function(a,b,c){a.animate({marginLeft:"100%"},d),b.css(f,"-100%"),b.animate(g,d,function(){a.css(f,"100%"),c()})}},i=function(b,c){var d=b.animation_speed;1===a("html[dir=rtl]").length;this.next=function(a,b,c){b.css({margin:"0%",opacity:"0.01"}),b.animate({opacity:"1"},d,"linear",function(){a.css("margin","100%"),c()})},this.prev=function(a,b,c){b.css({margin:"0%",opacity:"0.01"}),b.animate({opacity:"1"},d,"linear",function(){a.css("margin","100%"),c()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.5.3",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:e,after_slide_change:e},init:function(a,b,c){this.bindings(b,c)},events:function(a){var b=new f(this.S(a),this.S(a).data("orbit-init"));this.S(a).data(this.name+"-instance",b)},reflow:function(){var a=this;if(a.S(a.scope).is("[data-orbit]")){var b=a.S(a.scope),c=b.data(a.name+"-instance");c.compute_dimensions()}else a.S("[data-orbit]",a.scope).each(function(b,c){var d=a.S(c),e=(a.data_options(d),d.data(a.name+"-instance"));e.compute_dimensions()})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";function e(a){var b=/fade/i.test(a),c=/pop/i.test(a);return{animate:b||c,pop:c,fade:b}}var f=[];Foundation.libs.reveal={name:"reveal",version:"5.5.3",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",multiple_opened:!1,bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},on_ajax_error:a.noop,bg:a(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(b,c,d){a.extend(!0,this.settings,c,d),this.bindings(c,d)},events:function(a){var b=this,d=b.S;return d(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(a){if(a.preventDefault(),!b.locked){var c=d(this),e=c.data(b.data_attr("reveal-ajax")),f=c.data(b.data_attr("reveal-replace-content"));if(b.locked=!0,"undefined"==typeof e)b.open.call(b,c);else{var g=e===!0?c.attr("href"):e;b.open.call(b,c,{url:g},{replaceContentSel:f})}}}),d(c).on("click.fndtn.reveal",this.close_targets(),function(a){if(a.preventDefault(),!b.locked){var c=d("["+b.attr_name()+"].open").data(b.attr_name(!0)+"-init")||b.settings,e=d(a.target)[0]===d("."+c.bg_class)[0];if(e){if(!c.close_on_background_click)return;a.stopPropagation()}b.locked=!0,b.close.call(b,e?d("["+b.attr_name()+"].open:not(.toback)"):d(this).closest("["+b.attr_name()+"]"))}}),d("["+b.attr_name()+"]",this.scope).length>0?d(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):d(this.scope).on("open.fndtn.reveal","["+b.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+b.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+b.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+b.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+b.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+b.attr_name()+"]",this.close_video),!0},key_up_on:function(a){var b=this;return b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(a){var c=b.S("["+b.attr_name()+"].open"),d=c.data(b.attr_name(!0)+"-init")||b.settings;d&&27===a.which&&d.close_on_esc&&!b.locked&&b.close.call(b,c)}),!0},key_up_off:function(a){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(c,e){var g,h=this;c?"undefined"!=typeof c.selector?g=h.S("#"+c.data(h.data_attr("reveal-id"))).first():(g=h.S(this.scope),e=c):g=h.S(this.scope);var i=g.data(h.attr_name(!0)+"-init");if(i=i||this.settings,g.hasClass("open")&&c!==d&&c.attr("data-reveal-id")==g.attr("id"))return h.close(g);if(!g.hasClass("open")){var j=h.S("["+h.attr_name()+"].open");"undefined"==typeof g.data("css-top")&&g.data("css-top",parseInt(g.css("top"),10)).data("offset",this.cache_offset(g)),g.attr("tabindex","0").attr("aria-hidden","false"),this.key_up_on(g),g.on("open.fndtn.reveal",function(a){"fndtn.reveal"!==a.namespace}),g.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),j.length<1&&this.toggle_bg(g,!0),"string"==typeof e&&(e={url:e});var k=function(){j.length>0&&(i.multiple_opened?h.to_back(j):h.hide(j,i.css.close)),i.multiple_opened&&f.push(g),h.show(g,i.css.open)};if("undefined"!=typeof e&&e.url){var l="undefined"!=typeof e.success?e.success:null;a.extend(e,{success:function(b,c,d){if(a.isFunction(l)){var e=l(b,c,d);"string"==typeof e&&(b=e)}"undefined"!=typeof options&&"undefined"!=typeof options.replaceContentSel?g.find(options.replaceContentSel).html(b):g.html(b),h.S(g).foundation("section","reflow"),h.S(g).children().foundation(),k()}}),i.on_ajax_error!==a.noop&&a.extend(e,{error:i.on_ajax_error}),a.ajax(e)}else k()}h.S(b).trigger("resize")},close:function(b){var b=b&&b.length?b:this.S(this.scope),c=this.S("["+this.attr_name()+"].open"),d=b.data(this.attr_name(!0)+"-init")||this.settings,e=this;if(c.length>0)if(b.removeAttr("tabindex","0").attr("aria-hidden","true"),this.locked=!0,this.key_up_off(b),b.trigger("close.fndtn.reveal"),(d.multiple_opened&&1===c.length||!d.multiple_opened||b.length>1)&&(e.toggle_bg(b,!1),e.to_front(b)),d.multiple_opened){var g=b.is(":not(.toback)");e.hide(b,d.css.close,d),g?f.pop():f=a.grep(f,function(a){var c=a[0]===b[0];return c&&e.to_front(b),!c}),f.length>0&&e.to_front(f[f.length-1])}else e.hide(c,d.css.close,d)},close_targets:function(){var a="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?a+", ."+this.settings.bg_class:a},toggle_bg:function(b,c){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=a("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var e=this.settings.bg.filter(":visible").length>0;c!=e&&((c==d?e:!c)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(c,d){if(d){var f=c.data(this.attr_name(!0)+"-init")||this.settings,g=f.root_element,h=this;if(0===c.parent(g).length){var i=c.wrap('<div style="display: none;" />').parent();c.on("closed.fndtn.reveal.wrapped",function(){c.detach().appendTo(i),c.unwrap().unbind("closed.fndtn.reveal.wrapped")}),c.detach().appendTo(g)}var j=e(f.animation);if(j.animate||(this.locked=!1),j.pop){d.top=a(b).scrollTop()-c.data("offset")+"px";var k={top:a(b).scrollTop()+c.data("css-top")+"px",opacity:1};return setTimeout(function(){return c.css(d).animate(k,f.animation_speed,"linear",function(){h.locked=!1,c.trigger("opened.fndtn.reveal")}).addClass("open")},f.animation_speed/2)}if(d.top=a(b).scrollTop()+c.data("css-top")+"px",j.fade){var k={opacity:1};return setTimeout(function(){return c.css(d).animate(k,f.animation_speed,"linear",function(){h.locked=!1,c.trigger("opened.fndtn.reveal")}).addClass("open")},f.animation_speed/2)}return c.css(d).show().css({opacity:1}).addClass("open").trigger("opened.fndtn.reveal")}var f=this.settings;return e(f.animation).fade?c.fadeIn(f.animation_speed/2):(this.locked=!1,c.show())},to_back:function(a){a.addClass("toback")},to_front:function(a){a.removeClass("toback")},hide:function(c,d){if(d){var f=c.data(this.attr_name(!0)+"-init"),g=this;f=f||this.settings;var h=e(f.animation);if(h.animate||(this.locked=!1),h.pop){var i={top:-a(b).scrollTop()-c.data("offset")+"px",opacity:0};return setTimeout(function(){return c.animate(i,f.animation_speed,"linear",function(){g.locked=!1,c.css(d).trigger("closed.fndtn.reveal")}).removeClass("open")},f.animation_speed/2)}if(h.fade){var i={opacity:0};return setTimeout(function(){return c.animate(i,f.animation_speed,"linear",function(){g.locked=!1,c.css(d).trigger("closed.fndtn.reveal")}).removeClass("open")},f.animation_speed/2)}return c.hide().css(d).removeClass("open").trigger("closed.fndtn.reveal")}var f=this.settings;return e(f.animation).fade?c.fadeOut(f.animation_speed/2):c.hide()},close_video:function(b){var c=a(".flex-video",b.target),d=a("iframe",c);d.length>0&&(d.attr("data-src",d[0].src),d.attr("src",d.attr("src")),c.hide())},open_video:function(b){var c=a(".flex-video",b.target),e=c.find("iframe");if(e.length>0){var f=e.attr("data-src");if("string"==typeof f)e[0].src=e.attr("data-src");else{var g=e[0].src;e[0].src=d,e[0].src=g}c.show()}},data_attr:function(a){return this.namespace.length>0?this.namespace+"-"+a:a},cache_offset:function(a){var b=a.show().height()+parseInt(a.css("top"),10)+a.scrollY;return a.hide(),b},off:function(){a(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.3",settings:{start:0,end:100,step:1,precision:2,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(a,b,c){Foundation.inherit(this,"throttle"),this.bindings(b,c),this.reflow()},events:function(){var c=this;a(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+c.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(b){c.cache.active||(b.preventDefault(),c.set_active_slider(a(b.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(d){if(c.cache.active)if(d.preventDefault(),a.data(c.cache.active[0],"settings").vertical){var e=0;d.pageY||(e=b.scrollY),c.calculate_position(c.cache.active,c.get_cursor_position(d,"y")+e)}else c.calculate_position(c.cache.active,c.get_cursor_position(d,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(d){if(!c.cache.active){var e="slider"===a(d.target).attr("role")?a(d.target):a(d.target).closest(".range-slider").find("[role='slider']");if(e.length&&!e.parent().hasClass("disabled")&&!e.parent().attr("disabled"))if(c.set_active_slider(e),a.data(c.cache.active[0],"settings").vertical){var f=0;d.pageY||(f=b.scrollY),c.calculate_position(c.cache.active,c.get_cursor_position(d,"y")+f)}else c.calculate_position(c.cache.active,c.get_cursor_position(d,"x"))}c.remove_active_slider()}).on("change.fndtn.slider",function(a){c.settings.on_change()}),c.S(b).on("resize.fndtn.slider",c.throttle(function(a){c.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var b=a(this),d=b.children(".range-slider-handle")[0],e=c.initialize_settings(d);""!=e.display_selector&&a(e.display_selector).each(function(){a(this).attr("value")&&a(this).off("change").on("change",function(){b.foundation("slider","set_value",a(this).val())})})})},get_cursor_position:function(a,b){var c,d="page"+b.toUpperCase(),e="client"+b.toUpperCase();return"undefined"!=typeof a[d]?c=a[d]:"undefined"!=typeof a.originalEvent[e]?c=a.originalEvent[e]:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0][e]?c=a.originalEvent.touches[0][e]:a.currentPoint&&"undefined"!=typeof a.currentPoint[b]&&(c=a.currentPoint[b]),c},set_active_slider:function(a){this.cache.active=a},remove_active_slider:function(){this.cache.active=null},calculate_position:function(b,c){var d=this,e=a.data(b[0],"settings"),f=(a.data(b[0],"handle_l"),a.data(b[0],"handle_o"),a.data(b[0],"bar_l")),g=a.data(b[0],"bar_o");requestAnimationFrame(function(){var a;a=Foundation.rtl&&!e.vertical?d.limit_to((g+f-c)/f,0,1):d.limit_to((c-g)/f,0,1),a=e.vertical?1-a:a;var h=d.normalized_value(a,e.start,e.end,e.step,e.precision);d.set_ui(b,h)})},set_ui:function(b,c){var d=a.data(b[0],"settings"),e=a.data(b[0],"handle_l"),f=a.data(b[0],"bar_l"),g=this.normalized_percentage(c,d.start,d.end),h=g*(f-e)-1,i=100*g,j=b.parent(),k=b.parent().children("input[type=hidden]");Foundation.rtl&&!d.vertical&&(h=-h),h=d.vertical?-h+f-e+1:h,this.set_translate(b,h,d.vertical),d.vertical?b.siblings(".range-slider-active-segment").css("height",i+"%"):b.siblings(".range-slider-active-segment").css("width",i+"%"),j.attr(this.attr_name(),c).trigger("change.fndtn.slider"),k.val(c),d.trigger_input_change&&k.trigger("change.fndtn.slider"),b[0].hasAttribute("aria-valuemin")||b.attr({"aria-valuemin":d.start,"aria-valuemax":d.end}),b.attr("aria-valuenow",c),""!=d.display_selector&&a(d.display_selector).each(function(){this.hasAttribute("value")?a(this).val(c):a(this).text(c)})},normalized_percentage:function(a,b,c){return Math.min(1,(a-b)/(c-b))},normalized_value:function(a,b,c,d,e){var f=c-b,g=a*f,h=(g-g%d)/d,i=g%d,j=i>=.5*d?d:0;return(h*d+j+b).toFixed(e)},set_translate:function(b,c,d){d?a(b).css("-webkit-transform","translateY("+c+"px)").css("-moz-transform","translateY("+c+"px)").css("-ms-transform","translateY("+c+"px)").css("-o-transform","translateY("+c+"px)").css("transform","translateY("+c+"px)"):a(b).css("-webkit-transform","translateX("+c+"px)").css("-moz-transform","translateX("+c+"px)").css("-ms-transform","translateX("+c+"px)").css("-o-transform","translateX("+c+"px)").css("transform","translateX("+c+"px)")},limit_to:function(a,b,c){return Math.min(Math.max(a,b),c)},initialize_settings:function(b){var c,d=a.extend({},this.settings,this.data_options(a(b).parent()));return null===d.precision&&(c=(""+d.step).match(/\.([\d]*)/),d.precision=c&&c[1]?c[1].length:0),d.vertical?(a.data(b,"bar_o",a(b).parent().offset().top),a.data(b,"bar_l",a(b).parent().outerHeight()),a.data(b,"handle_o",a(b).offset().top),a.data(b,"handle_l",a(b).outerHeight())):(a.data(b,"bar_o",a(b).parent().offset().left),a.data(b,"bar_l",a(b).parent().outerWidth()),a.data(b,"handle_o",a(b).offset().left),a.data(b,"handle_l",a(b).outerWidth())),a.data(b,"bar",a(b).parent()),a.data(b,"settings",d)},set_initial_position:function(b){var c=a.data(b.children(".range-slider-handle")[0],"settings"),d="number"!=typeof c.initial||isNaN(c.initial)?Math.floor(.5*(c.end-c.start)/c.step)*c.step+c.start:c.initial,e=b.children(".range-slider-handle");this.set_ui(e,d)},set_value:function(b){var c=this;a("["+c.attr_name()+"]",this.scope).each(function(){a(this).attr(c.attr_name(),b)}),a(this.scope).attr(c.attr_name())&&a(this.scope).attr(c.attr_name(),b),c.reflow()},reflow:function(){var b=this;b.S("["+this.attr_name()+"]").each(function(){var c=a(this).children(".range-slider-handle")[0],d=a(this).attr(b.attr_name());b.initialize_settings(c),d?b.set_ui(a(c),parseFloat(d)):b.set_initial_position(a(this))})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.3",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(a,b,c){var d=this,e=this.S;e("["+this.attr_name()+"] > .active > a",this.scope).each(function(){d.default_tab_hashes.push(this.hash)}),this.bindings(b,c),this.handle_location_hash_change()},events:function(){var a=this,c=this.S,d=function(b,d){var e=c(d).closest("["+a.attr_name()+"]").data(a.attr_name(!0)+"-init");if(!e.is_hover||Modernizr.touch){var f=b.keyCode||b.which;9!==f&&(b.preventDefault(),b.stopPropagation()),a.toggle_active_tab(c(d).parent())}};c(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(a){var b=a.keyCode||a.which;if(13===b||32===b){var c=this;d(a,c)}}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(a){var b=this;d(a,b)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(b){var d=c(this).closest("["+a.attr_name()+"]").data(a.attr_name(!0)+"-init");d.is_hover&&a.toggle_active_tab(c(this).parent())}),c(b).on("hashchange.fndtn.tab",function(b){b.preventDefault(),a.handle_location_hash_change()})},handle_location_hash_change:function(){var b=this,c=this.S;c("["+this.attr_name()+"]",this.scope).each(function(){var e=c(this).data(b.attr_name(!0)+"-init");if(e.deep_linking){var f;if(f=e.scroll_to_content?b.scope.location.hash:b.scope.location.hash.replace("fndtn-",""),""!=f){var g=c(f);if(g.hasClass("content")&&g.parent().hasClass("tabs-content"))b.toggle_active_tab(a("["+b.attr_name()+"] > * > a[href="+f+"]").parent());else{var h=g.closest(".content").attr("id");h!=d&&b.toggle_active_tab(a("["+b.attr_name()+"] > * > a[href=#"+h+"]").parent(),f)}}else for(var i=0;i<b.default_tab_hashes.length;i++)b.toggle_active_tab(a("["+b.attr_name()+"] > * > a[href="+b.default_tab_hashes[i]+"]").parent())}})},toggle_active_tab:function(e,f){var g=this,h=g.S,i=e.closest("["+this.attr_name()+"]"),j=e.find("a"),k=e.children("a").first(),l="#"+k.attr("href").split("#")[1],m=h(l),n=e.siblings(),o=i.data(this.attr_name(!0)+"-init"),p=function(b){var d,e=a(this),f=a(this).parents("li").prev().children('[role="tab"]'),g=a(this).parents("li").next().children('[role="tab"]');switch(b.keyCode){case 37:d=f;break;case 39:d=g;break;default:d=!1}d.length&&(e.attr({tabindex:"-1","aria-selected":null}),d.attr({tabindex:"0","aria-selected":!0}).focus()),a('[role="tabpanel"]').attr("aria-hidden","true"),a("#"+a(c.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},q=function(a){var c=o.scroll_to_content?g.default_tab_hashes[0]:"fndtn-"+g.default_tab_hashes[0].replace("#","");(a!==c||b.location.hash)&&(b.location.hash=a)};k.data("tab-content")&&(l="#"+k.data("tab-content").split("#")[1],m=h(l)),o.deep_linking&&(o.scroll_to_content?(q(f||l),f==d||f==l?e.parent()[0].scrollIntoView():h(l)[0].scrollIntoView()):q(f!=d?"fndtn-"+f.replace("#",""):"fndtn-"+l.replace("#",""))),e.addClass(o.active_class).triggerHandler("opened"),j.attr({"aria-selected":"true",tabindex:0}),n.removeClass(o.active_class),n.find("a").attr({"aria-selected":"false"}),m.siblings().removeClass(o.active_class).attr({"aria-hidden":"true"}),m.addClass(o.active_class).attr("aria-hidden","false").removeAttr("tabindex"),o.callback(e),m.triggerHandler("toggled",[m]),i.triggerHandler("toggled",[e]),j.off("keydown").on("keydown",p)},data_attr:function(a){return this.namespace.length>0?this.namespace+"-"+a:a},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.3",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,fade_in_duration:150,fade_out_duration:150,show_on:"all",tip_template:function(a,b){return'<span data-selector="'+a+'" id="'+a+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+b+'<span class="nub"></span></span>'}},cache:{},init:function(a,b,c){Foundation.inherit(this,"random_str"),this.bindings(b,c)},should_show:function(b,c){var d=a.extend({},this.settings,this.data_options(b));return"all"===d.show_on?!0:this.small()&&"small"===d.show_on?!0:this.medium()&&"medium"===d.show_on?!0:this.large()&&"large"===d.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(b){function c(a,b,c){a.timer||(c?(a.timer=null,e.showTip(b)):a.timer=setTimeout(function(){a.timer=null,e.showTip(b)}.bind(a),e.settings.hover_delay))}function d(a,b){a.timer&&(clearTimeout(a.timer),a.timer=null),e.hide(b)}var e=this,f=e.S;e.create(this.S(b)),a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(b){var g=f(this),h=a.extend({},e.settings,e.data_options(g)),i=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type)&&f(b.target).is("a"))return!1;if(/mouse/i.test(b.type)&&e.ie_touch(b))return!1;if(g.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type)&&b.preventDefault(),e.hide(g);else{if(h.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type))return;if(!h.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type)&&(b.preventDefault(),f(h.tooltip_class+".open").hide(),i=!0,a(".open["+e.attr_name()+"]").length>0)){var j=f(a(".open["+e.attr_name()+"]")[0]);e.hide(j)}/enter|over/i.test(b.type)?c(this,g):"mouseout"===b.type||"mouseleave"===b.type?d(this,g):c(this,g,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(b){return/mouse/i.test(b.type)&&e.ie_touch(b)?!1:void(("touch"!=a(this).data("tooltip-open-event-type")||"mouseleave"!=b.type)&&("mouse"==a(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(b.type)?e.convert_to_touch(a(this)):d(this,a(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(a){d(this,f(this))})},ie_touch:function(a){return!1},showTip:function(a){var b=this.getTip(a);return this.should_show(a,b)?this.show(a):void 0},getTip:function(b){var c=this.selector(b),d=a.extend({},this.settings,this.data_options(b)),e=null;return c&&(e=this.S('span[data-selector="'+c+'"]'+d.tooltip_class)),"object"==typeof e?e:!1},selector:function(a){var b=a.attr(this.attr_name())||a.attr("data-selector");return"string"!=typeof b&&(b=this.random_str(6),a.attr("data-selector",b).attr("aria-describedby",b)),b},create:function(c){var d=this,e=a.extend({},this.settings,this.data_options(c)),f=this.settings.tip_template;"string"==typeof e.tip_template&&b.hasOwnProperty(e.tip_template)&&(f=b[e.tip_template]);
var g=a(f(this.selector(c),a("<div></div>").html(c.attr("title")).html())),h=this.inheritable_classes(c);g.addClass(h).appendTo(e.append_to),Modernizr.touch&&(g.append('<span class="tap-to-close">'+e.touch_close_text+"</span>"),g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(a){d.hide(c)})),c.removeAttr("title").attr("title","")},reposition:function(b,c,d){var e,f,g,h,i;c.css("visibility","hidden").show(),e=b.data("width"),f=c.children(".nub"),g=f.outerHeight(),h=f.outerWidth(),this.small()?c.css({width:"100%"}):c.css({width:e?e:"auto"}),i=function(a,b,c,d,e,f){return a.css({top:b?b:"auto",bottom:d?d:"auto",left:e?e:"auto",right:c?c:"auto"}).end()};var j=b.offset().top,k=b.offset().left,l=b.outerHeight();if(i(c,j+l+10,"auto","auto",k),this.small())i(c,j+l+10,"auto","auto",12.5,a(this.scope).width()),c.addClass("tip-override"),i(f,-g,"auto","auto",k);else{Foundation.rtl&&(f.addClass("rtl"),k=k+b.outerWidth()-c.outerWidth()),i(c,j+l+10,"auto","auto",k),f.attr("style")&&f.removeAttr("style"),c.removeClass("tip-override");var m=c.outerHeight();d&&d.indexOf("tip-top")>-1?(Foundation.rtl&&f.addClass("rtl"),i(c,j-m,"auto","auto",k).removeClass("tip-override")):d&&d.indexOf("tip-left")>-1?(i(c,j+l/2-m/2,"auto","auto",k-c.outerWidth()-g).removeClass("tip-override"),f.removeClass("rtl")):d&&d.indexOf("tip-right")>-1&&(i(c,j+l/2-m/2,"auto","auto",k+b.outerWidth()+g).removeClass("tip-override"),f.removeClass("rtl"))}c.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(b){var c=a.extend({},this.settings,this.data_options(b)),d=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(c.additional_inheritable_classes),e=b.attr("class"),f=e?a.map(e.split(" "),function(b,c){return-1!==a.inArray(b,d)?b:void 0}).join(" "):"";return a.trim(f)},convert_to_touch:function(b){var c=this,d=c.getTip(b),e=a.extend({},c.settings,c.data_options(b));0===d.find(".tap-to-close").length&&(d.append('<span class="tap-to-close">'+e.touch_close_text+"</span>"),d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(a){c.hide(b)})),b.data("tooltip-open-event-type","touch")},show:function(a){var b=this.getTip(a);"touch"==a.data("tooltip-open-event-type")&&this.convert_to_touch(a),this.reposition(a,b,a.attr("class")),a.addClass("open"),b.fadeIn(this.settings.fade_in_duration)},hide:function(a){var b=this.getTip(a);b.fadeOut(this.settings.fade_out_duration,function(){b.find(".tap-to-close").remove(),b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),a.removeClass("open")})},off:function(){var b=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(c){a("["+b.attr_name()+"]").eq(c).attr("title",a(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.3",settings:{index:0,start_offset:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all",dropdown_autoclose:!0},init:function(b,c,d){Foundation.inherit(this,"add_custom_rule register_media throttle");var e=this;e.register_media("topbar","foundation-mq-topbar"),this.bindings(c,d),e.S("["+this.attr_name()+"]",this.scope).each(function(){var b=a(this),c=b.data(e.attr_name(!0)+"-init");e.S("section, .top-bar-section",this);b.data("index",0);var d=b.parent();d.hasClass("fixed")||e.is_sticky(b,d,c)?(e.settings.sticky_class=c.sticky_class,e.settings.sticky_topbar=b,b.data("height",d.outerHeight()),b.data("stickyoffset",d.offset().top)):b.data("height",b.outerHeight()),c.assembled||e.assemble(b),c.is_hover?e.S(".has-dropdown",b).addClass("not-click"):e.S(".has-dropdown",b).removeClass("not-click"),e.add_custom_rule(".f-topbar-fixed { padding-top: "+b.data("height")+"px }"),d.hasClass("fixed")&&e.S("body").addClass("f-topbar-fixed")})},is_sticky:function(a,b,c){var d=b.hasClass(c.sticky_class),e=matchMedia(Foundation.media_queries.small).matches,f=matchMedia(Foundation.media_queries.medium).matches,g=matchMedia(Foundation.media_queries.large).matches;return d&&"all"===c.sticky_on?!0:d&&this.small()&&-1!==c.sticky_on.indexOf("small")&&e&&!f&&!g?!0:d&&this.medium()&&-1!==c.sticky_on.indexOf("medium")&&e&&f&&!g?!0:d&&this.large()&&-1!==c.sticky_on.indexOf("large")&&e&&f&&g?!0:!1},toggle:function(c){var d,e=this;d=c?e.S(c).closest("["+this.attr_name()+"]"):e.S("["+this.attr_name()+"]");var f=d.data(this.attr_name(!0)+"-init"),g=e.S("section, .top-bar-section",d);e.breakpoint()&&(e.rtl?(g.css({right:"0%"}),a(">.name",g).css({right:"100%"})):(g.css({left:"0%"}),a(">.name",g).css({left:"100%"})),e.S("li.moved",g).removeClass("moved"),d.data("index",0),d.toggleClass("expanded").css("height","")),f.scrolltop?d.hasClass("expanded")?d.parent().hasClass("fixed")&&(f.scrolltop?(d.parent().removeClass("fixed"),d.addClass("fixed"),e.S("body").removeClass("f-topbar-fixed"),b.scrollTo(0,0)):d.parent().removeClass("expanded")):d.hasClass("fixed")&&(d.parent().addClass("fixed"),d.removeClass("fixed"),e.S("body").addClass("f-topbar-fixed")):(e.is_sticky(d,d.parent(),f)&&d.parent().addClass("fixed"),d.parent().hasClass("fixed")&&(d.hasClass("expanded")?(d.addClass("fixed"),d.parent().addClass("expanded"),e.S("body").addClass("f-topbar-fixed")):(d.removeClass("fixed"),d.parent().removeClass("expanded"),e.update_sticky_positioning())))},timer:null,events:function(c){var d=this,e=this.S;e(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(a){a.preventDefault(),d.toggle(this)}).on("click.fndtn.topbar contextmenu.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(b){var c=a(this).closest("li"),e=c.closest("["+d.attr_name()+"]"),f=e.data(d.attr_name(!0)+"-init");if(f.dropdown_autoclose&&f.is_hover){var g=a(this).closest(".hover");g.removeClass("hover")}!d.breakpoint()||c.hasClass("back")||c.hasClass("has-dropdown")||d.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(b){var c=e(this),f=e(b.target),g=c.closest("["+d.attr_name()+"]"),h=g.data(d.attr_name(!0)+"-init");return f.data("revealId")?void d.toggle():void(d.breakpoint()||(!h.is_hover||Modernizr.touch)&&(b.stopImmediatePropagation(),c.hasClass("hover")?(c.removeClass("hover").find("li").removeClass("hover"),c.parents("li.hover").removeClass("hover")):(c.addClass("hover"),a(c).siblings().removeClass("hover"),"A"===f[0].nodeName&&f.parent().hasClass("has-dropdown")&&b.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(a){if(d.breakpoint()){a.preventDefault();var b=e(this),c=b.closest("["+d.attr_name()+"]"),f=c.find("section, .top-bar-section"),g=(b.next(".dropdown").outerHeight(),b.closest("li"));c.data("index",c.data("index")+1),g.addClass("moved"),d.rtl?(f.css({right:-(100*c.data("index"))+"%"}),f.find(">.name").css({right:100*c.data("index")+"%"})):(f.css({left:-(100*c.data("index"))+"%"}),f.find(">.name").css({left:100*c.data("index")+"%"})),c.css("height",b.siblings("ul").outerHeight(!0)+c.data("height"))}}),e(b).off(".topbar").on("resize.fndtn.topbar",d.throttle(function(){d.resize.call(d)},50)).trigger("resize.fndtn.topbar").load(function(){e(this).trigger("resize.fndtn.topbar")}),e("body").off(".topbar").on("click.fndtn.topbar",function(a){var b=e(a.target).closest("li").closest("li.hover");b.length>0||e("["+d.attr_name()+"] li.hover").removeClass("hover")}),e(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(a){a.preventDefault();var b=e(this),c=b.closest("["+d.attr_name()+"]"),f=c.find("section, .top-bar-section"),g=(c.data(d.attr_name(!0)+"-init"),b.closest("li.moved")),h=g.parent();c.data("index",c.data("index")-1),d.rtl?(f.css({right:-(100*c.data("index"))+"%"}),f.find(">.name").css({right:100*c.data("index")+"%"})):(f.css({left:-(100*c.data("index"))+"%"}),f.find(">.name").css({left:100*c.data("index")+"%"})),0===c.data("index")?c.css("height",""):c.css("height",h.outerHeight(!0)+c.data("height")),setTimeout(function(){g.removeClass("moved")},300)}),e(this.scope).find(".dropdown a").focus(function(){a(this).parents(".has-dropdown").addClass("hover")}).blur(function(){a(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var a=this;a.S("["+this.attr_name()+"]").each(function(){var b,d=a.S(this),e=d.data(a.attr_name(!0)+"-init"),f=d.parent("."+a.settings.sticky_class);if(!a.breakpoint()){var g=d.hasClass("expanded");d.css("height","").removeClass("expanded").find("li").removeClass("hover"),g&&a.toggle(d)}a.is_sticky(d,f,e)&&(f.hasClass("fixed")?(f.removeClass("fixed"),b=f.offset().top,a.S(c.body).hasClass("f-topbar-fixed")&&(b-=d.data("height")),d.data("stickyoffset",b),f.addClass("fixed")):(b=f.offset().top,d.data("stickyoffset",b)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(b){var c=this,d=b.data(this.attr_name(!0)+"-init"),e=c.S("section, .top-bar-section",b);e.detach(),c.S(".has-dropdown>a",e).each(function(){var b,e=c.S(this),f=e.siblings(".dropdown"),g=e.attr("href");f.find(".title.back").length||(b=a(1==d.mobile_show_parent_link&&g?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="'+g+'">'+e.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),1==d.custom_back_text?a("h5>a",b).html(d.back_text):a("h5>a",b).html("&laquo; "+e.html()),f.prepend(b))}),e.appendTo(b),this.sticky(),this.assembled(b)},assembled:function(b){b.data(this.attr_name(!0),a.extend({},b.data(this.attr_name(!0)),{assembled:!0}))},height:function(b){var c=0,d=this;return a("> li",b).each(function(){c+=d.S(this).outerHeight(!0)}),c},sticky:function(){var a=this;this.S(b).on("scroll",function(){a.update_sticky_positioning()})},update_sticky_positioning:function(){var a="."+this.settings.sticky_class,c=this.S(b),d=this;if(d.settings.sticky_topbar&&d.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var e=this.settings.sticky_topbar.data("stickyoffset")+this.settings.start_offset;d.S(a).hasClass("expanded")||(c.scrollTop()>e?d.S(a).hasClass("fixed")||(d.S(a).addClass("fixed"),d.S("body").addClass("f-topbar-fixed")):c.scrollTop()<=e&&d.S(a).hasClass("fixed")&&(d.S(a).removeClass("fixed"),d.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(b).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document);
/**!
ANDREAS HANDLEBARS
 @license
 handlebars v4.0.10

Copyright (C) 2011-2016 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap ANDREAS HANDLEBARS
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(35);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(36);

	var _handlebarsCompilerCompiler = __webpack_require__(41);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(42);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(39);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(21);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(22);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(18);

	var _logger = __webpack_require__(20);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.10';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(13);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(14);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(15);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(16);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(17);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(19);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(23)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(30).Object.seal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(26);

	__webpack_require__(27)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(28)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(30)
	  , ctx       = __webpack_require__(31)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(37);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(38);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(40);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
	        /**/) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
	        /**/) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(39);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(35);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          this.options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(43);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;
/*
 * easy-autocomplete ANDREAS
 * jQuery plugin for autocompletion
 * 
 * @author Łukasz Pawełczak (http://github.com/pawelczak)
 * @version 1.3.5
 * Copyright  License: 
 */

/*
 * EasyAutocomplete - Configuration 
 */
var EasyAutocomplete = (function(scope){

	scope.Configuration = function Configuration(options) {
		var defaults = {
			data: "list-required",
			url: "list-required",
			dataType: "json",

			listLocation: function(data) {
				return data;
			},

			xmlElementName: "",

			getValue: function(element) {
				return element;
			},

			autocompleteOff: true,

			placeholder: false,

			ajaxCallback: function() {},

			matchResponseProperty: false,

			list: {
				sort: {
					enabled: false,
					method: function(a, b) {
						a = defaults.getValue(a);
						b = defaults.getValue(b);
						if (a < b) {
							return -1;
						}
						if (a > b) {
							return 1;
						}
						return 0;
					}
				},

				maxNumberOfElements: 6,

				hideOnEmptyPhrase: true,

				match: {
					enabled: false,
					caseSensitive: false,
					method: function(element, phrase) {

						if (element.search(phrase) > -1) {
							return true;
						} else {
							return false;
						}
					}
				},

				showAnimation: {
					type: "normal", //normal|slide|fade
					time: 400,
					callback: function() {}
				},

				hideAnimation: {
					type: "normal",
					time: 400,
					callback: function() {}
				},

				/* Events */
				onClickEvent: function() {},
				onSelectItemEvent: function() {},
				onLoadEvent: function() {},
				onChooseEvent: function() {},
				onKeyEnterEvent: function() {},
				onMouseOverEvent: function() {},
				onMouseOutEvent: function() {},	
				onShowListEvent: function() {},
				onHideListEvent: function() {}
			},

			highlightPhrase: true,

			theme: "",

			cssClasses: "",

			minCharNumber: 0,

			requestDelay: 0,

			adjustWidth: true,

			ajaxSettings: {},

			preparePostData: function(data, inputPhrase) {return data;},

			loggerEnabled: true,

			template: "",

			categoriesAssigned: false,

			categories: [{
				maxNumberOfElements: 4
			}]

		};
		
		var externalObjects = ["ajaxSettings", "template"];

		this.get = function(propertyName) {
			return defaults[propertyName];
		};

		this.equals = function(name, value) {
			if (isAssigned(name)) {
				if (defaults[name] === value) {
					return true;
				}
			} 
			
			return false;
		};

		this.checkDataUrlProperties = function() {
			if (defaults.url === "list-required" && defaults.data === "list-required") {
				return false;
			}
			return true;
		};
		this.checkRequiredProperties = function() {
			for (var propertyName in defaults) {
				if (defaults[propertyName] === "required") {
					logger.error("Option " + propertyName + " must be defined");
					return false;
				}
			}
			return true;
		};

		this.printPropertiesThatDoesntExist = function(consol, optionsToCheck) {
			printPropertiesThatDoesntExist(consol, optionsToCheck);
		};


		prepareDefaults();

		mergeOptions();

		if (defaults.loggerEnabled === true) {
			printPropertiesThatDoesntExist(console, options);	
		}

		addAjaxSettings();

		processAfterMerge();
		function prepareDefaults() {

			if (options.dataType === "xml") {
				
				if (!options.getValue) {

					options.getValue = function(element) {
						return $(element).text();
					};
				}

				
				if (!options.list) {

					options.list = {};
				} 

				if (!options.list.sort) {
					options.list.sort = {};
				}


				options.list.sort.method = function(a, b) {
					a = options.getValue(a);
					b = options.getValue(b);
					if (a < b) {
						return -1;
					}
					if (a > b) {
						return 1;
					}
					return 0;
				};

				if (!options.list.match) {
					options.list.match = {};
				}

				options.list.match.method = function(element, phrase) {

					if (element.search(phrase) > -1) {
						return true;
					} else {
						return false;
					}
				};

			}
			if (options.categories !== undefined && options.categories instanceof Array) {

				var categories = [];

				for (var i = 0, length = options.categories.length; i < length; i += 1) { 

					var category = options.categories[i];

					for (var property in defaults.categories[0]) {

						if (category[property] === undefined) {
							category[property] = defaults.categories[0][property];
						}
					}

					categories.push(category);
				}

				options.categories = categories;
			}
		}

		function mergeOptions() {

			defaults = mergeObjects(defaults, options);

			function mergeObjects(source, target) {
				var mergedObject = source || {};

				for (var propertyName in source) {
					if (target[propertyName] !== undefined && target[propertyName] !== null) {

						if (typeof target[propertyName] !== "object" || 
								target[propertyName] instanceof Array) {
							mergedObject[propertyName] = target[propertyName];
						} else {
							mergeObjects(source[propertyName], target[propertyName]);
						}
					}
				}
			
				/* If data is an object */
				if (target.data !== undefined && target.data !== null && typeof target.data === "object") {
					mergedObject.data = target.data;
				}

				return mergedObject;
			}
		}	


		function processAfterMerge() {
			
			if (defaults.url !== "list-required" && typeof defaults.url !== "function") {
				var defaultUrl = defaults.url;
				defaults.url = function() {
					return defaultUrl;
				};
			}

			if (defaults.ajaxSettings.url !== undefined && typeof defaults.ajaxSettings.url !== "function") {
				var defaultUrl = defaults.ajaxSettings.url;
				defaults.ajaxSettings.url = function() {
					return defaultUrl;
				};
			}

			if (typeof defaults.listLocation === "string") {
				var defaultlistLocation = defaults.listLocation;

				if (defaults.dataType.toUpperCase() === "XML") {
					defaults.listLocation = function(data) {
						return $(data).find(defaultlistLocation);
					};
				} else {
					defaults.listLocation = function(data) {
						return data[defaultlistLocation];
					};	
				}
			}

			if (typeof defaults.getValue === "string") {
				var defaultsGetValue = defaults.getValue;
				defaults.getValue = function(element) {
					return element[defaultsGetValue];
				};
			}

			if (options.categories !== undefined) {
				defaults.categoriesAssigned = true;
			}

		}

		function addAjaxSettings() {

			if (options.ajaxSettings !== undefined && typeof options.ajaxSettings === "object") {
				defaults.ajaxSettings = options.ajaxSettings;
			} else {
				defaults.ajaxSettings = {};	
			}
			
		}

		function isAssigned(name) {
			if (defaults[name] !== undefined && defaults[name] !== null) {
				return true;
			} else {
				return false;
			}
		}
		function printPropertiesThatDoesntExist(consol, optionsToCheck) {
			
			checkPropertiesIfExist(defaults, optionsToCheck);

			function checkPropertiesIfExist(source, target) {
				for(var property in target) {
					if (source[property] === undefined) {
						consol.log("Property '" + property + "' does not exist in EasyAutocomplete options API.");		
					}

					if (typeof source[property] === "object" && $.inArray(property, externalObjects) === -1) {
						checkPropertiesIfExist(source[property], target[property]);
					}
				}	
			}
		}
	};

	return scope;

})(EasyAutocomplete || {});


/*
 * EasyAutocomplete - Logger 
 */
var EasyAutocomplete = (function(scope){
	
	scope.Logger = function Logger() {

		this.error = function(message) {
			console.log("ERROR: " + message);
		};

		this.warning = function(message) {
			console.log("WARNING: " + message);
		};
	};

	return scope;

})(EasyAutocomplete || {});
	

/*
 * EasyAutocomplete - Constans
 */
var EasyAutocomplete = (function(scope){	
	
	scope.Constans = function Constans() {
		var constants = {
			CONTAINER_CLASS: "easy-autocomplete-container",
			CONTAINER_ID: "eac-container-",

			WRAPPER_CSS_CLASS: "easy-autocomplete"
		};

		this.getValue = function(propertyName) {
			return constants[propertyName];
		};

	};

	return scope;

})(EasyAutocomplete || {});

/*
 * EasyAutocomplete - ListBuilderService 
 *
 * @author Łukasz Pawełczak 
 *
 */
var EasyAutocomplete = (function(scope) {

	scope.ListBuilderService = function ListBuilderService(configuration, proccessResponseData) {


		this.init = function(data) {
			var listBuilder = [],
				builder = {};

			builder.data = configuration.get("listLocation")(data);
			builder.getValue = configuration.get("getValue");
			builder.maxListSize = configuration.get("list").maxNumberOfElements;

				
			listBuilder.push(builder);

			return listBuilder;
		};

		this.updateCategories = function(listBuilder, data) {
			
			if (configuration.get("categoriesAssigned")) {

				listBuilder = [];

				for(var i = 0; i < configuration.get("categories").length; i += 1) {

					var builder = convertToListBuilder(configuration.get("categories")[i], data);

					listBuilder.push(builder);
				}

			} 

			return listBuilder;
		};

		this.convertXml = function(listBuilder) {
			if(configuration.get("dataType").toUpperCase() === "XML") {

				for(var i = 0; i < listBuilder.length; i += 1) {
					listBuilder[i].data = convertXmlToList(listBuilder[i]);
				}
			}

			return listBuilder;
		};

		this.processData = function(listBuilder, inputPhrase) {

			for(var i = 0, length = listBuilder.length; i < length; i+=1) {
				listBuilder[i].data = proccessResponseData(configuration, listBuilder[i], inputPhrase);
			}

			return listBuilder;
		};

		this.checkIfDataExists = function(listBuilders) {

			for(var i = 0, length = listBuilders.length; i < length; i += 1) {

				if (listBuilders[i].data !== undefined && listBuilders[i].data instanceof Array) {
					if (listBuilders[i].data.length > 0) {
						return true;
					}
				} 
			}

			return false;
		};


		function convertToListBuilder(category, data) {

			var builder = {};

			if(configuration.get("dataType").toUpperCase() === "XML") {

				builder = convertXmlToListBuilder();
			} else {

				builder = convertDataToListBuilder();
			}
			

			if (category.header !== undefined) {
				builder.header = category.header;
			}

			if (category.maxNumberOfElements !== undefined) {
				builder.maxNumberOfElements = category.maxNumberOfElements;
			}

			if (configuration.get("list").maxNumberOfElements !== undefined) {

				builder.maxListSize = configuration.get("list").maxNumberOfElements;
			}

			if (category.getValue !== undefined) {

				if (typeof category.getValue === "string") {
					var defaultsGetValue = category.getValue;
					builder.getValue = function(element) {
						return element[defaultsGetValue];
					};
				} else if (typeof category.getValue === "function") {
					builder.getValue = category.getValue;
				}

			} else {
				builder.getValue = configuration.get("getValue");	
			}
			

			return builder;


			function convertXmlToListBuilder() {

				var builder = {},
					listLocation;

				if (category.xmlElementName !== undefined) {
					builder.xmlElementName = category.xmlElementName;
				}

				if (category.listLocation !== undefined) {

					listLocation = category.listLocation;
				} else if (configuration.get("listLocation") !== undefined) {

					listLocation = configuration.get("listLocation");
				}

				if (listLocation !== undefined) {
					if (typeof listLocation === "string") {
						builder.data = $(data).find(listLocation);
					} else if (typeof listLocation === "function") {

						builder.data = listLocation(data);
					}
				} else {

					builder.data = data;
				}

				return builder;
			}


			function convertDataToListBuilder() {

				var builder = {};

				if (category.listLocation !== undefined) {

					if (typeof category.listLocation === "string") {
						builder.data = data[category.listLocation];
					} else if (typeof category.listLocation === "function") {
						builder.data = category.listLocation(data);
					}
				} else {
					builder.data = data;
				}

				return builder;
			}
		}

		function convertXmlToList(builder) {
			var simpleList = [];

			if (builder.xmlElementName === undefined) {
				builder.xmlElementName = configuration.get("xmlElementName");
			}


			$(builder.data).find(builder.xmlElementName).each(function() {
				simpleList.push(this);
			});

			return simpleList;
		}

	};

	return scope;

})(EasyAutocomplete || {});


/*
 * EasyAutocomplete - Data proccess module
 *
 * Process list to display:
 * - sort 
 * - decrease number to specific number
 * - show only matching list
 *
 */
var EasyAutocomplete = (function(scope) {

	scope.proccess = function proccessData(config, listBuilder, phrase) {

		scope.proccess.match = match;

		var list = listBuilder.data,
			inputPhrase = phrase;//TODO REFACTOR

		list = findMatch(list, inputPhrase);
		list = reduceElementsInList(list);
		list = sort(list);

		return list;


		function findMatch(list, phrase) {
			var preparedList = [],
				value = "";

			if (config.get("list").match.enabled) {

				for(var i = 0, length = list.length; i < length; i += 1) {

					value = config.get("getValue")(list[i]);
					
					if (match(value, phrase)) {
						preparedList.push(list[i]);	
					}
					
				}

			} else {
				preparedList = list;
			}

			return preparedList;
		}

		function match(value, phrase) {

			if (!config.get("list").match.caseSensitive) {

				if (typeof value === "string") {
					value = value.toLowerCase();	
				}
				
				phrase = phrase.toLowerCase();
			}
			if (config.get("list").match.method(value, phrase)) {
				return true;
			} else {
				return false;
			}
		}

		function reduceElementsInList(list) {
			if (listBuilder.maxNumberOfElements !== undefined && list.length > listBuilder.maxNumberOfElements) {
				list = list.slice(0, listBuilder.maxNumberOfElements);
			}

			return list;
		}

		function sort(list) {
			if (config.get("list").sort.enabled) {
				list.sort(config.get("list").sort.method);
			}

			return list;
		}
		
	};


	return scope;


})(EasyAutocomplete || {});


/*
 * EasyAutocomplete - Template 
 *
 * 
 *
 */
var EasyAutocomplete = (function(scope){

	scope.Template = function Template(options) {


		var genericTemplates = {
			basic: {
				type: "basic",
				method: function(element) { return element; },
				cssClass: ""
			},
			description: {
				type: "description",
				fields: {
					description: "description"
				},
				method: function(element) {	return element + " - description"; },
				cssClass: "eac-description"
			},
			iconLeft: {
				type: "iconLeft",
				fields: {
					icon: ""
				},
				method: function(element) {
					return element;
				},
				cssClass: "eac-icon-left"
			},
			iconRight: {
				type: "iconRight",
				fields: {
					iconSrc: ""
				},
				method: function(element) {
					return element;
				},
				cssClass: "eac-icon-right"
			},
			links: {
				type: "links",
				fields: {
					link: ""
				},
				method: function(element) {
					return element;
				},
				cssClass: ""
			},
			custom: {
				type: "custom",
				method: function() {},
				cssClass: ""
			}
		},



		/*
		 * Converts method with {{text}} to function
		 */
		convertTemplateToMethod = function(template) {


			var _fields = template.fields,
				buildMethod;

			if (template.type === "description") {

				buildMethod = genericTemplates.description.method; 

				if (typeof _fields.description === "string") {
					buildMethod = function(elementValue, element) {
						return elementValue + " - <span>" + element[_fields.description] + "</span>";
					};					
				} else if (typeof _fields.description === "function") {
					buildMethod = function(elementValue, element) {
						return elementValue + " - <span>" + _fields.description(element) + "</span>";
					};	
				}

				return buildMethod;
			}

			if (template.type === "iconRight") {

				if (typeof _fields.iconSrc === "string") {
					buildMethod = function(elementValue, element) {
						return elementValue + "<img class='eac-icon' src='" + element[_fields.iconSrc] + "' />" ;
					};					
				} else if (typeof _fields.iconSrc === "function") {
					buildMethod = function(elementValue, element) {
						return elementValue + "<img class='eac-icon' src='" + _fields.iconSrc(element) + "' />" ;
					};
				}

				return buildMethod;
			}


			if (template.type === "iconLeft") {

				if (typeof _fields.iconSrc === "string") {
					buildMethod = function(elementValue, element) {
						return "<img class='eac-icon' src='" + element[_fields.iconSrc] + "' />" + elementValue;
					};					
				} else if (typeof _fields.iconSrc === "function") {
					buildMethod = function(elementValue, element) {
						return "<img class='eac-icon' src='" + _fields.iconSrc(element) + "' />" + elementValue;
					};
				}

				return buildMethod;
			}

			if(template.type === "links") {

				if (typeof _fields.link === "string") {
					buildMethod = function(elementValue, element) {
						return "<a href='" + element[_fields.link] + "' >" + elementValue + "</a>";
					};					
				} else if (typeof _fields.link === "function") {
					buildMethod = function(elementValue, element) {
						return "<a href='" + _fields.link(element) + "' >" + elementValue + "</a>";
					};
				}

				return buildMethod;
			}


			if (template.type === "custom") {

				return template.method;
			}

			return genericTemplates.basic.method;

		},


		prepareBuildMethod = function(options) {
			if (!options || !options.type) {

				return genericTemplates.basic.method;
			}

			if (options.type && genericTemplates[options.type]) {

				return convertTemplateToMethod(options);
			} else {

				return genericTemplates.basic.method;
			}

		},

		templateClass = function(options) {
			var emptyStringFunction = function() {return "";};

			if (!options || !options.type) {

				return emptyStringFunction;
			}

			if (options.type && genericTemplates[options.type]) {
				return (function () { 
					var _cssClass = genericTemplates[options.type].cssClass;
					return function() { return _cssClass;};
				})();
			} else {
				return emptyStringFunction;
			}
		};


		this.getTemplateClass = templateClass(options);

		this.build = prepareBuildMethod(options);


	};

	return scope;

})(EasyAutocomplete || {});


/*
 * EasyAutocomplete - jQuery plugin for autocompletion
 *
 */
var EasyAutocomplete = (function(scope) {

	
	scope.main = function Core($input, options) {
				
		var module = {
				name: "EasyAutocomplete",
				shortcut: "eac"
			};

		var consts = new scope.Constans(),
			config = new scope.Configuration(options),
			logger = new scope.Logger(),
			template = new scope.Template(options.template),
			listBuilderService = new scope.ListBuilderService(config, scope.proccess),
			checkParam = config.equals,

			$field = $input, 
			$container = "",
			elementsList = [],
			selectedElement = -1,
			requestDelayTimeoutId;

		scope.consts = consts;

		this.getConstants = function() {
			return consts;
		};

		this.getConfiguration = function() {
			return config;
		};

		this.getContainer = function() {
			return $container;
		};

		this.getSelectedItemIndex = function() {
			return selectedElement;
		};

		this.getItems = function () {
			return elementsList;
		};

		this.getItemData = function(index) {

			if (elementsList.length < index || elementsList[index] === undefined) {
				return -1;
			} else {
				return elementsList[index];
			}
		};

		this.getSelectedItemData = function() {
			return this.getItemData(selectedElement);
		};

		this.build = function() {
			prepareField();
		};

		this.init = function() {
			init();
		};
		function init() {

			if ($field.length === 0) {
				logger.error("Input field doesn't exist.");
				return;
			}

			if (!config.checkDataUrlProperties()) {
				logger.error("One of options variables 'data' or 'url' must be defined.");
				return;
			}

			if (!config.checkRequiredProperties()) {
				logger.error("Will not work without mentioned properties.");
				return;
			}


			prepareField();
			bindEvents();	

		}
		function prepareField() {

				
			if ($field.parent().hasClass(consts.getValue("WRAPPER_CSS_CLASS"))) {
				removeContainer();
				removeWrapper();
			} 
			
			createWrapper();
			createContainer();	

			$container = $("#" + getContainerId());
			if (config.get("placeholder")) {
				$field.attr("placeholder", config.get("placeholder"));
			}


			function createWrapper() {
				var $wrapper = $("<div>"),
					classes = consts.getValue("WRAPPER_CSS_CLASS");

			
				if (config.get("theme") && config.get("theme") !== "") {
					classes += " eac-" + config.get("theme");
				}

				if (config.get("cssClasses") && config.get("cssClasses") !== "") {
					classes += " " + config.get("cssClasses");
				}

				if (template.getTemplateClass() !== "") {
					classes += " " + template.getTemplateClass();
				}
				

				$wrapper
					.addClass(classes);
				$field.wrap($wrapper);


				if (config.get("adjustWidth") === true) {
					adjustWrapperWidth();	
				}
				

			}

			function adjustWrapperWidth() {
				var fieldWidth = $field.outerWidth();

				$field.parent().css("width", fieldWidth);				
			}

			function removeWrapper() {
				$field.unwrap();
			}

			function createContainer() {
				var $elements_container = $("<div>").addClass(consts.getValue("CONTAINER_CLASS"));

				$elements_container
						.attr("id", getContainerId())
						.prepend($("<ul>"));


				(function() {

					$elements_container
						/* List show animation */
						.on("show.eac", function() {

							switch(config.get("list").showAnimation.type) {

								case "slide":
									var animationTime = config.get("list").showAnimation.time,
										callback = config.get("list").showAnimation.callback;

									$elements_container.find("ul").slideDown(animationTime, callback);
								break;

								case "fade":
									var animationTime = config.get("list").showAnimation.time,
										callback = config.get("list").showAnimation.callback;

									$elements_container.find("ul").fadeIn(animationTime), callback;
								break;

								default:
									$elements_container.find("ul").show();
								break;
							}

							config.get("list").onShowListEvent();
							
						})
						/* List hide animation */
						.on("hide.eac", function() {

							switch(config.get("list").hideAnimation.type) {

								case "slide":
									var animationTime = config.get("list").hideAnimation.time,
										callback = config.get("list").hideAnimation.callback;

									$elements_container.find("ul").slideUp(animationTime, callback);
								break;

								case "fade":
									var animationTime = config.get("list").hideAnimation.time,
										callback = config.get("list").hideAnimation.callback;

									$elements_container.find("ul").fadeOut(animationTime, callback);
								break;

								default:
									$elements_container.find("ul").hide();
								break;
							}

							config.get("list").onHideListEvent();

						})
						.on("selectElement.eac", function() {
							$elements_container.find("ul li").removeClass("selected");
							$elements_container.find("ul li").eq(selectedElement).addClass("selected");

							config.get("list").onSelectItemEvent();
						})
						.on("loadElements.eac", function(event, listBuilders, phrase) {
			

							var $item = "",
								$listContainer = $elements_container.find("ul");

							$listContainer
								.empty()
								.detach();

							elementsList = [];
							var counter = 0;
							for(var builderIndex = 0, listBuildersLength = listBuilders.length; builderIndex < listBuildersLength; builderIndex += 1) {

								var listData = listBuilders[builderIndex].data;

								if (listData.length === 0) {
									continue;
								}

								if (listBuilders[builderIndex].header !== undefined && listBuilders[builderIndex].header.length > 0) {
									$listContainer.append("<div class='eac-category' >" + listBuilders[builderIndex].header + "</div>");
								}

								for(var i = 0, listDataLength = listData.length; i < listDataLength && counter < listBuilders[builderIndex].maxListSize; i += 1) {
									$item = $("<li><div class='eac-item'></div></li>");
									

									(function() {
										var j = i,
											itemCounter = counter,
											elementsValue = listBuilders[builderIndex].getValue(listData[j]);

										$item.find(" > div")
											.on("click", function() {

												$field.val(elementsValue).trigger("change");

												selectedElement = itemCounter;
												selectElement(itemCounter);

												config.get("list").onClickEvent();
												config.get("list").onChooseEvent();
											})
											.mouseover(function() {

												selectedElement = itemCounter;
												selectElement(itemCounter);	

												config.get("list").onMouseOverEvent();
											})
											.mouseout(function() {
												config.get("list").onMouseOutEvent();
											})
											.html(template.build(highlight(elementsValue, phrase), listData[j]));
									})();

									$listContainer.append($item);
									elementsList.push(listData[i]);
									counter += 1;
								}
							}

							$elements_container.append($listContainer);

							config.get("list").onLoadEvent();
						});

				})();

				$field.after($elements_container);
			}

			function removeContainer() {
				$field.next("." + consts.getValue("CONTAINER_CLASS")).remove();
			}

			function highlight(string, phrase) {

				if(config.get("highlightPhrase") && phrase !== "") {
					return highlightPhrase(string, phrase);	
				} else {
					return string;
				}
					
			}

			function escapeRegExp(str) {
				return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
 			}

			function highlightPhrase(string, phrase) {
				var escapedPhrase = escapeRegExp(phrase);
				return (string + "").replace(new RegExp("(" + escapedPhrase + ")", "gi") , "<b>$1</b>");
			}



		}
		function getContainerId() {
			
			var elementId = $field.attr("id");

			elementId = consts.getValue("CONTAINER_ID") + elementId;

			return elementId;
		}
		function bindEvents() {

			bindAllEvents();
			

			function bindAllEvents() {
				if (checkParam("autocompleteOff", true)) {
					removeAutocomplete();
				}

				bindFocusOut();
				bindKeyup();
				bindKeydown();
				bindKeypress();
				bindFocus();
				bindBlur();
			}

			function bindFocusOut() {
				$field.focusout(function () {

					var fieldValue = $field.val(),
						phrase;

					if (!config.get("list").match.caseSensitive) {
						fieldValue = fieldValue.toLowerCase();
					}

					for (var i = 0, length = elementsList.length; i < length; i += 1) {

						phrase = config.get("getValue")(elementsList[i]);
						if (!config.get("list").match.caseSensitive) {
							phrase = phrase.toLowerCase();
						}

						if (phrase === fieldValue) {
							selectedElement = i;
							selectElement(selectedElement);
							return;
						}
					}
				});
			}

			function bindKeyup() {
				$field
				.off("keyup")
				.keyup(function(event) {

					switch(event.keyCode) {

						case 27:

							hideContainer();
							loseFieldFocus();
						break;

						case 38:

							event.preventDefault();

							if(elementsList.length > 0 && selectedElement > 0) {

								selectedElement -= 1;

								$field.val(config.get("getValue")(elementsList[selectedElement]));

								selectElement(selectedElement);

							}						
						break;

						case 40:

							event.preventDefault();

							if(elementsList.length > 0 && selectedElement < elementsList.length - 1) {

								selectedElement += 1;

								$field.val(config.get("getValue")(elementsList[selectedElement]));

								selectElement(selectedElement);
								
							}

						break;

						default:

							if (event.keyCode > 40 || event.keyCode === 8) {

								var inputPhrase = $field.val();

								if (!(config.get("list").hideOnEmptyPhrase === true && event.keyCode === 8 && inputPhrase === "")) {

									if (config.get("requestDelay") > 0) {
										if (requestDelayTimeoutId !== undefined) {
											clearTimeout(requestDelayTimeoutId);
										}

										requestDelayTimeoutId = setTimeout(function () { loadData(inputPhrase);}, config.get("requestDelay"));
									} else {
										loadData(inputPhrase);
									}

								} else {
									hideContainer();
								}
								
							}


						break;
					}
				

					function loadData(inputPhrase) {


						if (inputPhrase.length < config.get("minCharNumber")) {
							return;
						}


						if (config.get("data") !== "list-required") {

							var data = config.get("data");

							var listBuilders = listBuilderService.init(data);

							listBuilders = listBuilderService.updateCategories(listBuilders, data);
							
							listBuilders = listBuilderService.processData(listBuilders, inputPhrase);

							loadElements(listBuilders, inputPhrase);

							if ($field.parent().find("li").length > 0) {
								showContainer();	
							} else {
								hideContainer();
							}

						}

						var settings = createAjaxSettings();

						if (settings.url === undefined || settings.url === "") {
							settings.url = config.get("url");
						}

						if (settings.dataType === undefined || settings.dataType === "") {
							settings.dataType = config.get("dataType");
						}


						if (settings.url !== undefined && settings.url !== "list-required") {

							settings.url = settings.url(inputPhrase);

							settings.data = config.get("preparePostData")(settings.data, inputPhrase);

							$.ajax(settings) 
								.done(function(data) {

									var listBuilders = listBuilderService.init(data);

									listBuilders = listBuilderService.updateCategories(listBuilders, data);
									
									listBuilders = listBuilderService.convertXml(listBuilders);
									if (checkInputPhraseMatchResponse(inputPhrase, data)) {

										listBuilders = listBuilderService.processData(listBuilders, inputPhrase);

										loadElements(listBuilders, inputPhrase);	
																				
									}

									if (listBuilderService.checkIfDataExists(listBuilders) && $field.parent().find("li").length > 0) {
										showContainer();	
									} else {
										hideContainer();
									}

									config.get("ajaxCallback")();

								})
								.fail(function() {
									logger.warning("Fail to load response data");
								})
								.always(function() {

								});
						}

						

						function createAjaxSettings() {

							var settings = {},
								ajaxSettings = config.get("ajaxSettings") || {};

							for (var set in ajaxSettings) {
								settings[set] = ajaxSettings[set];
							}

							return settings;
						}

						function checkInputPhraseMatchResponse(inputPhrase, data) {

							if (config.get("matchResponseProperty") !== false) {
								if (typeof config.get("matchResponseProperty") === "string") {
									return (data[config.get("matchResponseProperty")] === inputPhrase);
								}

								if (typeof config.get("matchResponseProperty") === "function") {
									return (config.get("matchResponseProperty")(data) === inputPhrase);
								}

								return true;
							} else {
								return true;
							}

						}

					}


				});
			}

			function bindKeydown() {
				$field
					.on("keydown", function(evt) {
	        		    evt = evt || window.event;
	        		    var keyCode = evt.keyCode;
	        		    if (keyCode === 38) {
	        		        suppressKeypress = true; 
	        		        return false;
	        		    }
		        	})
					.keydown(function(event) {

						if (event.keyCode === 13 && selectedElement > -1) {

							$field.val(config.get("getValue")(elementsList[selectedElement]));

							config.get("list").onKeyEnterEvent();
							config.get("list").onChooseEvent();

							selectedElement = -1;
							hideContainer();

							event.preventDefault();
						}
					});
			}

			function bindKeypress() {
				$field
				.off("keypress");
			}

			function bindFocus() {
				$field.focus(function() {

					if ($field.val() !== "" && elementsList.length > 0) {
						
						selectedElement = -1;
						showContainer();	
					}
									
				});
			}

			function bindBlur() {
				$field.blur(function() {
					setTimeout(function() { 
						
						selectedElement = -1;
						hideContainer();
					}, 250);
				});
			}

			function removeAutocomplete() {
				$field.attr("autocomplete","off");
			}

		}

		function showContainer() {
			$container.trigger("show.eac");
		}

		function hideContainer() {
			$container.trigger("hide.eac");
		}

		function selectElement(index) {
			
			$container.trigger("selectElement.eac", index);
		}

		function loadElements(list, phrase) {
			$container.trigger("loadElements.eac", [list, phrase]);
		}

		function loseFieldFocus() {
			$field.trigger("blur");
		}


	};
	scope.eacHandles = [];

	scope.getHandle = function(id) {
		return scope.eacHandles[id];
	};

	scope.inputHasId = function(input) {

		if($(input).attr("id") !== undefined && $(input).attr("id").length > 0) {
			return true;
		} else {
			return false;
		}

	};

	scope.assignRandomId = function(input) {

		var fieldId = "";

		do {
			fieldId = "eac-" + Math.floor(Math.random() * 10000);		
		} while ($("#" + fieldId).length !== 0);
		
		elementId = scope.consts.getValue("CONTAINER_ID") + fieldId;

		$(input).attr("id", fieldId);
 
	};

	scope.setHandle = function(handle, id) {
		scope.eacHandles[id] = handle;
	};


	return scope;

})(EasyAutocomplete || {});

(function($) {

	$.fn.easyAutocomplete = function(options) {

		return this.each(function() {
			var $this = $(this),
				eacHandle = new EasyAutocomplete.main($this, options);

			if (!EasyAutocomplete.inputHasId($this)) {
				EasyAutocomplete.assignRandomId($this);
			}

			eacHandle.init();

			EasyAutocomplete.setHandle(eacHandle, $this.attr("id"));

		});
	};

	$.fn.getSelectedItemIndex = function() {

		var inputId = $(this).attr("id");

		if (inputId !== undefined) {
			return EasyAutocomplete.getHandle(inputId).getSelectedItemIndex();
		}

		return -1;
	};

	$.fn.getItems = function () {

		var inputId = $(this).attr("id");

		if (inputId !== undefined) {
			return EasyAutocomplete.getHandle(inputId).getItems();
		}

		return -1;
	};

	$.fn.getItemData = function(index) {

		var inputId = $(this).attr("id");

		if (inputId !== undefined && index > -1) {
			return EasyAutocomplete.getHandle(inputId).getItemData(index);
		}

		return -1;
	};

	$.fn.getSelectedItemData = function() {

		var inputId = $(this).attr("id");

		if (inputId !== undefined) {
			return EasyAutocomplete.getHandle(inputId).getSelectedItemData();
		}

		return -1;
	};

})(jQuery);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var msg = __webpack_require__(1);

	//  ANDREAS EGEN!!!!
	$(function () {
	    $('body').foundation();
	    $("#mainapp").attr('style','background:#fff;')
	        .html("funkar! eller");    
	    alert('Foundation Core Version: ' + Foundation.version);
	    
	    msg.testar("ja du det funkar tror jag det eller JOR�");
	});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	
	module.exports = {
	    testar: function (msg) {
	        alert(msg);
	    }
	}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvdW5kYXRpb24ubWluLmpzIiwiaGFuZGxlYmFycy5qcyIsImpxdWVyeS5lYXN5LWF1dG9jb21wbGV0ZS5qcyIsImtrX2FqX2t1bHR1cmthdGFsb2dlbldlYnBhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdnVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoia2tfYWpfcHVibGljYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoYSl7cmV0dXJuKFwic3RyaW5nXCI9PXR5cGVvZiBhfHxhIGluc3RhbmNlb2YgU3RyaW5nKSYmKGE9YS5yZXBsYWNlKC9eWydcXFxcL1wiXSt8KDtcXHM/fSkrfFsnXFxcXC9cIl0rJC9nLFwiXCIpKSxhfWZ1bmN0aW9uIGYoYSl7dGhpcy5zZWxlY3Rvcj1hLHRoaXMucXVlcnk9XCJcIn12YXIgZz1mdW5jdGlvbihiKXt2YXIgYz1hKFwiaGVhZFwiKTtjLnByZXBlbmQoYS5tYXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMD09PWMuaGFzKFwiLlwiK2EpLmxlbmd0aD8nPG1ldGEgY2xhc3M9XCInK2ErJ1wiIC8+Jzp2b2lkIDB9KSl9O2coW1wiZm91bmRhdGlvbi1tcS1zbWFsbFwiLFwiZm91bmRhdGlvbi1tcS1zbWFsbC1vbmx5XCIsXCJmb3VuZGF0aW9uLW1xLW1lZGl1bVwiLFwiZm91bmRhdGlvbi1tcS1tZWRpdW0tb25seVwiLFwiZm91bmRhdGlvbi1tcS1sYXJnZVwiLFwiZm91bmRhdGlvbi1tcS1sYXJnZS1vbmx5XCIsXCJmb3VuZGF0aW9uLW1xLXhsYXJnZVwiLFwiZm91bmRhdGlvbi1tcS14bGFyZ2Utb25seVwiLFwiZm91bmRhdGlvbi1tcS14eGxhcmdlXCIsXCJmb3VuZGF0aW9uLWRhdGEtYXR0cmlidXRlLW5hbWVzcGFjZVwiXSksYShmdW5jdGlvbigpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBGYXN0Q2xpY2smJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBjLmJvZHkmJkZhc3RDbGljay5hdHRhY2goYy5ib2R5KX0pO3ZhciBoPWZ1bmN0aW9uKGIsZCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKGQpe3ZhciBlO2lmKGQuanF1ZXJ5KXtpZihlPWRbMF0sIWUpcmV0dXJuIGR9ZWxzZSBlPWQ7cmV0dXJuIGEoZS5xdWVyeVNlbGVjdG9yQWxsKGIpKX1yZXR1cm4gYShjLnF1ZXJ5U2VsZWN0b3JBbGwoYikpfXJldHVybiBhKGIsZCl9LGk9ZnVuY3Rpb24oYSl7dmFyIGI9W107cmV0dXJuIGF8fGIucHVzaChcImRhdGFcIiksdGhpcy5uYW1lc3BhY2UubGVuZ3RoPjAmJmIucHVzaCh0aGlzLm5hbWVzcGFjZSksYi5wdXNoKHRoaXMubmFtZSksYi5qb2luKFwiLVwiKX0saj1mdW5jdGlvbihhKXtmb3IodmFyIGI9YS5zcGxpdChcIi1cIiksYz1iLmxlbmd0aCxkPVtdO2MtLTspMCE9PWM/ZC5wdXNoKGJbY10pOnRoaXMubmFtZXNwYWNlLmxlbmd0aD4wP2QucHVzaCh0aGlzLm5hbWVzcGFjZSxiW2NdKTpkLnB1c2goYltjXSk7cmV0dXJuIGQucmV2ZXJzZSgpLmpvaW4oXCItXCIpfSxrPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9dGhpcyxlPWZ1bmN0aW9uKCl7dmFyIGU9aCh0aGlzKSxmPSFlLmRhdGEoZC5hdHRyX25hbWUoITApK1wiLWluaXRcIik7ZS5kYXRhKGQuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIsYS5leHRlbmQoe30sZC5zZXR0aW5ncyxjfHxiLGQuZGF0YV9vcHRpb25zKGUpKSksZiYmZC5ldmVudHModGhpcyl9O3JldHVybiBoKHRoaXMuc2NvcGUpLmlzKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIpP2UuY2FsbCh0aGlzLnNjb3BlKTpoKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIsdGhpcy5zY29wZSkuZWFjaChlKSxcInN0cmluZ1wiPT10eXBlb2YgYj90aGlzW2JdLmNhbGwodGhpcyxjKTp2b2lkIDB9LGw9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7YihhWzBdKX1mdW5jdGlvbiBkKCl7aWYodGhpcy5vbmUoXCJsb2FkXCIsYyksL01TSUUgKFxcZCtcXC5cXGQrKTsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpe3ZhciBhPXRoaXMuYXR0cihcInNyY1wiKSxiPWEubWF0Y2goL1xcPy8pP1wiJlwiOlwiP1wiO2IrPVwicmFuZG9tPVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLHRoaXMuYXR0cihcInNyY1wiLGErYil9fXJldHVybiBhLmF0dHIoXCJzcmNcIik/dm9pZChhWzBdLmNvbXBsZXRlfHw0PT09YVswXS5yZWFkeVN0YXRlP2MoKTpkLmNhbGwoYSkpOnZvaWQgYygpfTsvKiEgbWF0Y2hNZWRpYSgpIHBvbHlmaWxsIC0gVGVzdCBhIENTUyBtZWRpYSB0eXBlL3F1ZXJ5IGluIEpTLiBBdXRob3JzICYgY29weXJpZ2h0IChjKSAyMDEyOiBTY290dCBKZWhsLCBQYXVsIElyaXNoLCBOaWNob2xhcyBaYWthcywgRGF2aWQgS25pZ2h0LiBEdWFsIE1JVC9CU0QgbGljZW5zZSAqL1xyXG5iLm1hdGNoTWVkaWF8fChiLm1hdGNoTWVkaWE9ZnVuY3Rpb24oKXt2YXIgYT1iLnN0eWxlTWVkaWF8fGIubWVkaWE7aWYoIWEpe3ZhciBkPWMuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLGU9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXSxmPW51bGw7ZC50eXBlPVwidGV4dC9jc3NcIixkLmlkPVwibWF0Y2htZWRpYWpzLXRlc3RcIixlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGQsZSksZj1cImdldENvbXB1dGVkU3R5bGVcImluIGImJmIuZ2V0Q29tcHV0ZWRTdHlsZShkLG51bGwpfHxkLmN1cnJlbnRTdHlsZSxhPXttYXRjaE1lZGl1bTpmdW5jdGlvbihhKXt2YXIgYj1cIkBtZWRpYSBcIithK1wieyAjbWF0Y2htZWRpYWpzLXRlc3QgeyB3aWR0aDogMXB4OyB9IH1cIjtyZXR1cm4gZC5zdHlsZVNoZWV0P2Quc3R5bGVTaGVldC5jc3NUZXh0PWI6ZC50ZXh0Q29udGVudD1iLFwiMXB4XCI9PT1mLndpZHRofX19cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybnttYXRjaGVzOmEubWF0Y2hNZWRpdW0oYnx8XCJhbGxcIiksbWVkaWE6Ynx8XCJhbGxcIn19fSgpKSxmdW5jdGlvbihhKXtmdW5jdGlvbiBjKCl7ZCYmKGcoYyksaSYmYS5meC50aWNrKCkpfWZvcih2YXIgZCxlPTAsZj1bXCJ3ZWJraXRcIixcIm1velwiXSxnPWIucmVxdWVzdEFuaW1hdGlvbkZyYW1lLGg9Yi5jYW5jZWxBbmltYXRpb25GcmFtZSxpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmZ4O2U8Zi5sZW5ndGgmJiFnO2UrKylnPWJbZltlXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSxoPWh8fGJbZltlXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHxiW2ZbZV0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07Zz8oYi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZyxiLmNhbmNlbEFuaW1hdGlvbkZyYW1lPWgsaSYmKGEuZngudGltZXI9ZnVuY3Rpb24oYil7YigpJiZhLnRpbWVycy5wdXNoKGIpJiYhZCYmKGQ9ITAsYygpKX0sYS5meC5zdG9wPWZ1bmN0aW9uKCl7ZD0hMX0pKTooYi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSl7dmFyIGM9KG5ldyBEYXRlKS5nZXRUaW1lKCksZD1NYXRoLm1heCgwLDE2LShjLWUpKSxmPWIuc2V0VGltZW91dChmdW5jdGlvbigpe2EoYytkKX0sZCk7cmV0dXJuIGU9YytkLGZ9LGIuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSl7Y2xlYXJUaW1lb3V0KGEpfSl9KGEpLGYucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucXVlcnl8fCh0aGlzLnF1ZXJ5PWgodGhpcy5zZWxlY3RvcikuY3NzKFwiZm9udC1mYW1pbHlcIikucmVwbGFjZSgvXltcXC9cXFxcJ1wiXSt8KDtcXHM/fSkrfFtcXC9cXFxcJ1wiXSskL2csXCJcIikpfSxiLkZvdW5kYXRpb249e25hbWU6XCJGb3VuZGF0aW9uXCIsdmVyc2lvbjpcIjUuNS4zXCIsbWVkaWFfcXVlcmllczp7c21hbGw6bmV3IGYoXCIuZm91bmRhdGlvbi1tcS1zbWFsbFwiKSxcInNtYWxsLW9ubHlcIjpuZXcgZihcIi5mb3VuZGF0aW9uLW1xLXNtYWxsLW9ubHlcIiksbWVkaXVtOm5ldyBmKFwiLmZvdW5kYXRpb24tbXEtbWVkaXVtXCIpLFwibWVkaXVtLW9ubHlcIjpuZXcgZihcIi5mb3VuZGF0aW9uLW1xLW1lZGl1bS1vbmx5XCIpLGxhcmdlOm5ldyBmKFwiLmZvdW5kYXRpb24tbXEtbGFyZ2VcIiksXCJsYXJnZS1vbmx5XCI6bmV3IGYoXCIuZm91bmRhdGlvbi1tcS1sYXJnZS1vbmx5XCIpLHhsYXJnZTpuZXcgZihcIi5mb3VuZGF0aW9uLW1xLXhsYXJnZVwiKSxcInhsYXJnZS1vbmx5XCI6bmV3IGYoXCIuZm91bmRhdGlvbi1tcS14bGFyZ2Utb25seVwiKSx4eGxhcmdlOm5ldyBmKFwiLmZvdW5kYXRpb24tbXEteHhsYXJnZVwiKX0sc3R5bGVzaGVldDphKFwiPHN0eWxlPjwvc3R5bGU+XCIpLmFwcGVuZFRvKFwiaGVhZFwiKVswXS5zaGVldCxnbG9iYWw6e25hbWVzcGFjZTpkfSxpbml0OmZ1bmN0aW9uKGEsYyxkLGUsZil7dmFyIGc9W2EsZCxlLGZdLGk9W107aWYodGhpcy5ydGw9L3J0bC9pLnRlc3QoaChcImh0bWxcIikuYXR0cihcImRpclwiKSksdGhpcy5zY29wZT1hfHx0aGlzLnNjb3BlLHRoaXMuc2V0X25hbWVzcGFjZSgpLGMmJlwic3RyaW5nXCI9PXR5cGVvZiBjJiYhL3JlZmxvdy9pLnRlc3QoYykpdGhpcy5saWJzLmhhc093blByb3BlcnR5KGMpJiZpLnB1c2godGhpcy5pbml0X2xpYihjLGcpKTtlbHNlIGZvcih2YXIgaiBpbiB0aGlzLmxpYnMpaS5wdXNoKHRoaXMuaW5pdF9saWIoaixjKSk7cmV0dXJuIGgoYikubG9hZChmdW5jdGlvbigpe2goYikudHJpZ2dlcihcInJlc2l6ZS5mbmR0bi5jbGVhcmluZ1wiKS50cmlnZ2VyKFwicmVzaXplLmZuZHRuLmRyb3Bkb3duXCIpLnRyaWdnZXIoXCJyZXNpemUuZm5kdG4uZXF1YWxpemVyXCIpLnRyaWdnZXIoXCJyZXNpemUuZm5kdG4uaW50ZXJjaGFuZ2VcIikudHJpZ2dlcihcInJlc2l6ZS5mbmR0bi5qb3lyaWRlXCIpLnRyaWdnZXIoXCJyZXNpemUuZm5kdG4ubWFnZWxsYW5cIikudHJpZ2dlcihcInJlc2l6ZS5mbmR0bi50b3BiYXJcIikudHJpZ2dlcihcInJlc2l6ZS5mbmR0bi5zbGlkZXJcIil9KSxhfSxpbml0X2xpYjpmdW5jdGlvbihiLGMpe3JldHVybiB0aGlzLmxpYnMuaGFzT3duUHJvcGVydHkoYik/KHRoaXMucGF0Y2godGhpcy5saWJzW2JdKSxjJiZjLmhhc093blByb3BlcnR5KGIpPyhcInVuZGVmaW5lZFwiIT10eXBlb2YgdGhpcy5saWJzW2JdLnNldHRpbmdzP2EuZXh0ZW5kKCEwLHRoaXMubGlic1tiXS5zZXR0aW5ncyxjW2JdKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgdGhpcy5saWJzW2JdLmRlZmF1bHRzJiZhLmV4dGVuZCghMCx0aGlzLmxpYnNbYl0uZGVmYXVsdHMsY1tiXSksdGhpcy5saWJzW2JdLmluaXQuYXBwbHkodGhpcy5saWJzW2JdLFt0aGlzLnNjb3BlLGNbYl1dKSk6KGM9YyBpbnN0YW5jZW9mIEFycmF5P2M6bmV3IEFycmF5KGMpLHRoaXMubGlic1tiXS5pbml0LmFwcGx5KHRoaXMubGlic1tiXSxjKSkpOmZ1bmN0aW9uKCl7fX0scGF0Y2g6ZnVuY3Rpb24oYSl7YS5zY29wZT10aGlzLnNjb3BlLGEubmFtZXNwYWNlPXRoaXMuZ2xvYmFsLm5hbWVzcGFjZSxhLnJ0bD10aGlzLnJ0bCxhLmRhdGFfb3B0aW9ucz10aGlzLnV0aWxzLmRhdGFfb3B0aW9ucyxhLmF0dHJfbmFtZT1pLGEuYWRkX25hbWVzcGFjZT1qLGEuYmluZGluZ3M9ayxhLlM9dGhpcy51dGlscy5TfSxpbmhlcml0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuc3BsaXQoXCIgXCIpLGQ9Yy5sZW5ndGg7ZC0tOyl0aGlzLnV0aWxzLmhhc093blByb3BlcnR5KGNbZF0pJiYoYVtjW2RdXT10aGlzLnV0aWxzW2NbZF1dKX0sc2V0X25hbWVzcGFjZTpmdW5jdGlvbigpe3ZhciBiPXRoaXMuZ2xvYmFsLm5hbWVzcGFjZT09PWQ/YShcIi5mb3VuZGF0aW9uLWRhdGEtYXR0cmlidXRlLW5hbWVzcGFjZVwiKS5jc3MoXCJmb250LWZhbWlseVwiKTp0aGlzLmdsb2JhbC5uYW1lc3BhY2U7dGhpcy5nbG9iYWwubmFtZXNwYWNlPWI9PT1kfHwvZmFsc2UvaS50ZXN0KGIpP1wiXCI6Yn0sbGliczp7fSx1dGlsczp7UzpoLHRocm90dGxlOmZ1bmN0aW9uKGEsYil7dmFyIGM9bnVsbDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZD10aGlzLGU9YXJndW1lbnRzO251bGw9PWMmJihjPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmFwcGx5KGQsZSksYz1udWxsfSxiKSl9fSxkZWJvdW5jZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZj10aGlzLGc9YXJndW1lbnRzLGg9ZnVuY3Rpb24oKXtkPW51bGwsY3x8KGU9YS5hcHBseShmLGcpKX0saT1jJiYhZDtyZXR1cm4gY2xlYXJUaW1lb3V0KGQpLGQ9c2V0VGltZW91dChoLGIpLGkmJihlPWEuYXBwbHkoZixnKSksZX19LGRhdGFfb3B0aW9uczpmdW5jdGlvbihiLGMpe2Z1bmN0aW9uIGQoYSl7cmV0dXJuIWlzTmFOKGEtMCkmJm51bGwhPT1hJiZcIlwiIT09YSYmYSE9PSExJiZhIT09ITB9ZnVuY3Rpb24gZShiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYj9hLnRyaW0oYik6Yn1jPWN8fFwib3B0aW9uc1wiO3ZhciBmLGcsaCxpPXt9LGo9ZnVuY3Rpb24oYSl7dmFyIGI9Rm91bmRhdGlvbi5nbG9iYWwubmFtZXNwYWNlO3JldHVybiBiLmxlbmd0aD4wP2EuZGF0YShiK1wiLVwiK2MpOmEuZGF0YShjKX0saz1qKGIpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBrKXJldHVybiBrO2ZvcihoPShrfHxcIjpcIikuc3BsaXQoXCI7XCIpLGY9aC5sZW5ndGg7Zi0tOylnPWhbZl0uc3BsaXQoXCI6XCIpLGc9W2dbMF0sZy5zbGljZSgxKS5qb2luKFwiOlwiKV0sL3RydWUvaS50ZXN0KGdbMV0pJiYoZ1sxXT0hMCksL2ZhbHNlL2kudGVzdChnWzFdKSYmKGdbMV09ITEpLGQoZ1sxXSkmJigtMT09PWdbMV0uaW5kZXhPZihcIi5cIik/Z1sxXT1wYXJzZUludChnWzFdLDEwKTpnWzFdPXBhcnNlRmxvYXQoZ1sxXSkpLDI9PT1nLmxlbmd0aCYmZ1swXS5sZW5ndGg+MCYmKGlbZShnWzBdKV09ZShnWzFdKSk7cmV0dXJuIGl9LHJlZ2lzdGVyX21lZGlhOmZ1bmN0aW9uKGIsYyl7Rm91bmRhdGlvbi5tZWRpYV9xdWVyaWVzW2JdPT09ZCYmKGEoXCJoZWFkXCIpLmFwcGVuZCgnPG1ldGEgY2xhc3M9XCInK2MrJ1wiLz4nKSxGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXNbYl09ZShhKFwiLlwiK2MpLmNzcyhcImZvbnQtZmFtaWx5XCIpKSl9LGFkZF9jdXN0b21fcnVsZTpmdW5jdGlvbihhLGIpe2lmKGI9PT1kJiZGb3VuZGF0aW9uLnN0eWxlc2hlZXQpRm91bmRhdGlvbi5zdHlsZXNoZWV0Lmluc2VydFJ1bGUoYSxGb3VuZGF0aW9uLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtlbHNle3ZhciBjPUZvdW5kYXRpb24ubWVkaWFfcXVlcmllc1tiXTtjIT09ZCYmRm91bmRhdGlvbi5zdHlsZXNoZWV0Lmluc2VydFJ1bGUoXCJAbWVkaWEgXCIrRm91bmRhdGlvbi5tZWRpYV9xdWVyaWVzW2JdK1wieyBcIithK1wiIH1cIixGb3VuZGF0aW9uLnN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKX19LGltYWdlX2xvYWRlZDpmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7Zm9yKHZhciBiPWEubGVuZ3RoLGM9Yi0xO2M+PTA7Yy0tKWlmKGEuYXR0cihcImhlaWdodFwiKT09PWQpcmV0dXJuITE7cmV0dXJuITB9dmFyIGU9dGhpcyxmPWEubGVuZ3RoOygwPT09Znx8YyhhKSkmJmIoYSksYS5lYWNoKGZ1bmN0aW9uKCl7bChlLlModGhpcyksZnVuY3Rpb24oKXtmLT0xLDA9PT1mJiZiKGEpfSl9KX0scmFuZG9tX3N0cjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmZpZHh8fCh0aGlzLmZpZHg9MCksdGhpcy5wcmVmaXg9dGhpcy5wcmVmaXh8fFt0aGlzLm5hbWV8fFwiRlwiLCgrbmV3IERhdGUpLnRvU3RyaW5nKDM2KV0uam9pbihcIi1cIiksdGhpcy5wcmVmaXgrKHRoaXMuZmlkeCsrKS50b1N0cmluZygzNil9LG1hdGNoOmZ1bmN0aW9uKGEpe3JldHVybiBiLm1hdGNoTWVkaWEoYSkubWF0Y2hlc30saXNfc21hbGxfdXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXRjaChGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMuc21hbGwpfSxpc19tZWRpdW1fdXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXRjaChGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMubWVkaXVtKX0saXNfbGFyZ2VfdXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXRjaChGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMubGFyZ2UpfSxpc194bGFyZ2VfdXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXRjaChGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMueGxhcmdlKX0saXNfeHhsYXJnZV91cDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hdGNoKEZvdW5kYXRpb24ubWVkaWFfcXVlcmllcy54eGxhcmdlKX0saXNfc21hbGxfb25seTpmdW5jdGlvbigpe3JldHVybiEodGhpcy5pc19tZWRpdW1fdXAoKXx8dGhpcy5pc19sYXJnZV91cCgpfHx0aGlzLmlzX3hsYXJnZV91cCgpfHx0aGlzLmlzX3h4bGFyZ2VfdXAoKSl9LGlzX21lZGl1bV9vbmx5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNfbWVkaXVtX3VwKCkmJiF0aGlzLmlzX2xhcmdlX3VwKCkmJiF0aGlzLmlzX3hsYXJnZV91cCgpJiYhdGhpcy5pc194eGxhcmdlX3VwKCl9LGlzX2xhcmdlX29ubHk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc19tZWRpdW1fdXAoKSYmdGhpcy5pc19sYXJnZV91cCgpJiYhdGhpcy5pc194bGFyZ2VfdXAoKSYmIXRoaXMuaXNfeHhsYXJnZV91cCgpfSxpc194bGFyZ2Vfb25seTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlzX21lZGl1bV91cCgpJiZ0aGlzLmlzX2xhcmdlX3VwKCkmJnRoaXMuaXNfeGxhcmdlX3VwKCkmJiF0aGlzLmlzX3h4bGFyZ2VfdXAoKX0saXNfeHhsYXJnZV9vbmx5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNfbWVkaXVtX3VwKCkmJnRoaXMuaXNfbGFyZ2VfdXAoKSYmdGhpcy5pc194bGFyZ2VfdXAoKSYmdGhpcy5pc194eGxhcmdlX3VwKCl9fX0sYS5mbi5mb3VuZGF0aW9uPWZ1bmN0aW9uKCl7dmFyIGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyZXR1cm4gRm91bmRhdGlvbi5pbml0LmFwcGx5KEZvdW5kYXRpb24sW3RoaXNdLmNvbmNhdChhKSksdGhpc30pfX0oalF1ZXJ5LHdpbmRvdyx3aW5kb3cuZG9jdW1lbnQpLGZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO0ZvdW5kYXRpb24ubGlicy5hYmlkZT17bmFtZTpcImFiaWRlXCIsdmVyc2lvbjpcIjUuNS4zXCIsc2V0dGluZ3M6e2xpdmVfdmFsaWRhdGU6ITAsdmFsaWRhdGVfb25fYmx1cjohMCxmb2N1c19vbl9pbnZhbGlkOiEwLGVycm9yX2xhYmVsczohMCxlcnJvcl9jbGFzczpcImVycm9yXCIsdGltZW91dDoxZTMscGF0dGVybnM6e2FscGhhOi9eW2EtekEtWl0rJC8sYWxwaGFfbnVtZXJpYzovXlthLXpBLVowLTldKyQvLGludGVnZXI6L15bLStdP1xcZCskLyxudW1iZXI6L15bLStdP1xcZCooPzpbXFwuXFwsXVxcZCspPyQvLGNhcmQ6L14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9KSQvLGN2djovXihbMC05XSl7Myw0fSQvLGVtYWlsOi9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKyQvLHVybDovXihodHRwcz98ZnRwfGZpbGV8c3NoKTpcXC9cXC8oWy07OiY9XFwrXFwkLFxcd10rQHsxfSk/KFstQS1aYS16MC05XFwuXSspKzo/KFxcZCspPygoXFwvWy1cXCt+JVxcL1xcLlxcd10rKT9cXD8/KFstXFwrPSY7JUBcXC5cXHddKyk/Iz8oW1xcd10rKT8pPy8sZG9tYWluOi9eKFthLXpBLVowLTldKFthLXpBLVowLTlcXC1dezAsNjF9W2EtekEtWjAtOV0pP1xcLikrW2EtekEtWl17Miw4fSQvLGRhdGV0aW1lOi9eKFswLTJdWzAtOV17M30pXFwtKFswLTFdWzAtOV0pXFwtKFswLTNdWzAtOV0pVChbMC01XVswLTldKVxcOihbMC01XVswLTldKVxcOihbMC01XVswLTldKShafChbXFwtXFwrXShbMC0xXVswLTldKVxcOjAwKSkkLyxkYXRlOi8oPzoxOXwyMClbMC05XXsyfS0oPzooPzowWzEtOV18MVswLTJdKS0oPzowWzEtOV18MVswLTldfDJbMC05XSl8KD86KD8hMDIpKD86MFsxLTldfDFbMC0yXSktKD86MzApKXwoPzooPzowWzEzNTc4XXwxWzAyXSktMzEpKSQvLHRpbWU6L14oMFswLTldfDFbMC05XXwyWzAtM10pKDpbMC01XVswLTldKXsyfSQvLGRhdGVJU086L15cXGR7NH1bXFwvXFwtXVxcZHsxLDJ9W1xcL1xcLV1cXGR7MSwyfSQvLG1vbnRoX2RheV95ZWFyOi9eKDBbMS05XXwxWzAxMl0pWy0gXFwvLl0oMFsxLTldfFsxMl1bMC05XXwzWzAxXSlbLSBcXC8uXVxcZHs0fSQvLGRheV9tb250aF95ZWFyOi9eKDBbMS05XXxbMTJdWzAtOV18M1swMV0pWy0gXFwvLl0oMFsxLTldfDFbMDEyXSlbLSBcXC8uXVxcZHs0fSQvLGNvbG9yOi9eIz8oW2EtZkEtRjAtOV17Nn18W2EtZkEtRjAtOV17M30pJC99LHZhbGlkYXRvcnM6e2VxdWFsVG86ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPWMuZ2V0RWxlbWVudEJ5SWQoYS5nZXRBdHRyaWJ1dGUodGhpcy5hZGRfbmFtZXNwYWNlKFwiZGF0YS1lcXVhbHRvXCIpKSkudmFsdWUsZj1hLnZhbHVlLGc9ZT09PWY7cmV0dXJuIGd9fX0sdGltZXI6bnVsbCxpbml0OmZ1bmN0aW9uKGEsYixjKXt0aGlzLmJpbmRpbmdzKGIsYyl9LGV2ZW50czpmdW5jdGlvbihiKXtmdW5jdGlvbiBjKGEsYil7Y2xlYXJUaW1lb3V0KGQudGltZXIpLGQudGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe2QudmFsaWRhdGUoW2FdLGIpfS5iaW5kKGEpLGYudGltZW91dCl9dmFyIGQ9dGhpcyxlPWQuUyhiKS5hdHRyKFwibm92YWxpZGF0ZVwiLFwibm92YWxpZGF0ZVwiKSxmPWUuZGF0YSh0aGlzLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKXx8e307dGhpcy5pbnZhbGlkX2F0dHI9dGhpcy5hZGRfbmFtZXNwYWNlKFwiZGF0YS1pbnZhbGlkXCIpLGUub2ZmKFwiLmFiaWRlXCIpLm9uKFwic3VibWl0LmZuZHRuLmFiaWRlXCIsZnVuY3Rpb24oYSl7dmFyIGI9L2FqYXgvaS50ZXN0KGQuUyh0aGlzKS5hdHRyKGQuYXR0cl9uYW1lKCkpKTtyZXR1cm4gZC52YWxpZGF0ZShkLlModGhpcykuZmluZChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpLm5vdChcIjpoaWRkZW4sIFtkYXRhLWFiaWRlLWlnbm9yZV1cIikuZ2V0KCksYSxiKX0pLm9uKFwidmFsaWRhdGUuZm5kdG4uYWJpZGVcIixmdW5jdGlvbihhKXtcIm1hbnVhbFwiPT09Zi52YWxpZGF0ZV9vbiYmZC52YWxpZGF0ZShbYS50YXJnZXRdLGEpfSkub24oXCJyZXNldFwiLGZ1bmN0aW9uKGIpe3JldHVybiBkLnJlc2V0KGEodGhpcyksYil9KS5maW5kKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikubm90KFwiOmhpZGRlbiwgW2RhdGEtYWJpZGUtaWdub3JlXVwiKS5vZmYoXCIuYWJpZGVcIikub24oXCJibHVyLmZuZHRuLmFiaWRlIGNoYW5nZS5mbmR0bi5hYmlkZVwiLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZ2V0QXR0cmlidXRlKFwiaWRcIiksZD1lLmZpbmQoJ1tkYXRhLWVxdWFsdG89XCInK2IrJ1wiXScpO2YudmFsaWRhdGVfb25fYmx1ciYmZi52YWxpZGF0ZV9vbl9ibHVyPT09ITAmJmModGhpcyxhKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgZC5nZXQoMCkmJmQudmFsKCkubGVuZ3RoJiZjKGQuZ2V0KDApLGEpLFwiY2hhbmdlXCI9PT1mLnZhbGlkYXRlX29uJiZjKHRoaXMsYSl9KS5vbihcImtleWRvd24uZm5kdG4uYWJpZGVcIixmdW5jdGlvbihhKXt2YXIgYj10aGlzLmdldEF0dHJpYnV0ZShcImlkXCIpLGQ9ZS5maW5kKCdbZGF0YS1lcXVhbHRvPVwiJytiKydcIl0nKTtmLmxpdmVfdmFsaWRhdGUmJmYubGl2ZV92YWxpZGF0ZT09PSEwJiY5IT1hLndoaWNoJiZjKHRoaXMsYSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGQuZ2V0KDApJiZkLnZhbCgpLmxlbmd0aCYmYyhkLmdldCgwKSxhKSxcInRhYlwiPT09Zi52YWxpZGF0ZV9vbiYmOT09PWEud2hpY2g/Yyh0aGlzLGEpOlwiY2hhbmdlXCI9PT1mLnZhbGlkYXRlX29uJiZjKHRoaXMsYSl9KS5vbihcImZvY3VzXCIsZnVuY3Rpb24oYil7bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZHxpUGhvbmV8QW5kcm9pZHxCbGFja0JlcnJ5fFdpbmRvd3MgUGhvbmV8d2ViT1MvaSkmJmEoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDphKGIudGFyZ2V0KS5vZmZzZXQoKS50b3B9LDEwMCl9KX0scmVzZXQ6ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzO2IucmVtb3ZlQXR0cihkLmludmFsaWRfYXR0ciksYShcIltcIitkLmludmFsaWRfYXR0citcIl1cIixiKS5yZW1vdmVBdHRyKGQuaW52YWxpZF9hdHRyKSxhKFwiLlwiK2Quc2V0dGluZ3MuZXJyb3JfY2xhc3MsYikubm90KFwic21hbGxcIikucmVtb3ZlQ2xhc3MoZC5zZXR0aW5ncy5lcnJvcl9jbGFzcyksYShcIjppbnB1dFwiLGIpLm5vdChcIjpidXR0b24sIDpzdWJtaXQsIDpyZXNldCwgOmhpZGRlbiwgW2RhdGEtYWJpZGUtaWdub3JlXVwiKS52YWwoXCJcIikucmVtb3ZlQXR0cihkLmludmFsaWRfYXR0cil9LHZhbGlkYXRlOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9dGhpcy5wYXJzZV9wYXR0ZXJucyhhKSxlPWQubGVuZ3RoLGY9dGhpcy5TKGFbMF0pLmNsb3Nlc3QoXCJmb3JtXCIpLGc9L3N1Ym1pdC8udGVzdChiLnR5cGUpLGg9MDtlPmg7aCsrKWlmKCFkW2hdJiYoZ3x8YykpcmV0dXJuIHRoaXMuc2V0dGluZ3MuZm9jdXNfb25faW52YWxpZCYmYVtoXS5mb2N1cygpLGYudHJpZ2dlcihcImludmFsaWQuZm5kdG4uYWJpZGVcIiksdGhpcy5TKGFbaF0pLmNsb3Nlc3QoXCJmb3JtXCIpLmF0dHIodGhpcy5pbnZhbGlkX2F0dHIsXCJcIiksITE7cmV0dXJuKGd8fGMpJiZmLnRyaWdnZXIoXCJ2YWxpZC5mbmR0bi5hYmlkZVwiKSxmLnJlbW92ZUF0dHIodGhpcy5pbnZhbGlkX2F0dHIpLGM/ITE6ITB9LHBhcnNlX3BhdHRlcm5zOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1hLmxlbmd0aCxjPVtdO2ItLTspYy5wdXNoKHRoaXMucGF0dGVybihhW2JdKSk7cmV0dXJuIHRoaXMuY2hlY2tfdmFsaWRhdGlvbl9hbmRfYXBwbHlfc3R5bGVzKGMpfSxwYXR0ZXJuOmZ1bmN0aW9uKGEpe3ZhciBiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSxjPVwic3RyaW5nXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIpLGQ9YS5nZXRBdHRyaWJ1dGUoXCJwYXR0ZXJuXCIpfHxcIlwiO3JldHVybiB0aGlzLnNldHRpbmdzLnBhdHRlcm5zLmhhc093blByb3BlcnR5KGQpJiZkLmxlbmd0aD4wP1thLHRoaXMuc2V0dGluZ3MucGF0dGVybnNbZF0sY106ZC5sZW5ndGg+MD9bYSxuZXcgUmVnRXhwKGQpLGNdOnRoaXMuc2V0dGluZ3MucGF0dGVybnMuaGFzT3duUHJvcGVydHkoYik/W2EsdGhpcy5zZXR0aW5ncy5wYXR0ZXJuc1tiXSxjXTooZD0vLiovLFthLGQsY10pfSxjaGVja192YWxpZGF0aW9uX2FuZF9hcHBseV9zdHlsZXM6ZnVuY3Rpb24oYil7dmFyIGM9Yi5sZW5ndGgsZD1bXTtpZigwPT1jKXJldHVybiBkO3ZhciBlPXRoaXMuUyhiWzBdWzBdKS5jbG9zZXN0KFwiW2RhdGEtXCIrdGhpcy5hdHRyX25hbWUoITApK1wiXVwiKTtmb3IoZS5kYXRhKHRoaXMuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpfHx7fTtjLS07KXt2YXIgZixnLGg9YltjXVswXSxpPWJbY11bMl0saj1oLnZhbHVlLnRyaW0oKSxrPXRoaXMuUyhoKS5wYXJlbnQoKSxsPWguZ2V0QXR0cmlidXRlKHRoaXMuYWRkX25hbWVzcGFjZShcImRhdGEtYWJpZGUtdmFsaWRhdG9yXCIpKSxtPVwicmFkaW9cIj09PWgudHlwZSxuPVwiY2hlY2tib3hcIj09PWgudHlwZSxvPXRoaXMuUygnbGFiZWxbZm9yPVwiJytoLmdldEF0dHJpYnV0ZShcImlkXCIpKydcIl0nKSxwPWk/aC52YWx1ZS5sZW5ndGg+MDohMCxxPVtdO2lmKGguZ2V0QXR0cmlidXRlKHRoaXMuYWRkX25hbWVzcGFjZShcImRhdGEtZXF1YWx0b1wiKSkmJihsPVwiZXF1YWxUb1wiKSxmPWsuaXMoXCJsYWJlbFwiKT9rLnBhcmVudCgpOmssbSYmaSlxLnB1c2godGhpcy52YWxpZF9yYWRpbyhoLGkpKTtlbHNlIGlmKG4mJmkpcS5wdXNoKHRoaXMudmFsaWRfY2hlY2tib3goaCxpKSk7ZWxzZSBpZihsKXtmb3IodmFyIHI9bC5zcGxpdChcIiBcIikscz0hMCx0PSEwLHU9MDt1PHIubGVuZ3RoO3UrKylnPXRoaXMuc2V0dGluZ3MudmFsaWRhdG9yc1tyW3VdXS5hcHBseSh0aGlzLFtoLGksZl0pLHEucHVzaChnKSx0PWcmJnMscz1nO3Q/KHRoaXMuUyhoKS5yZW1vdmVBdHRyKHRoaXMuaW52YWxpZF9hdHRyKSxmLnJlbW92ZUNsYXNzKFwiZXJyb3JcIiksby5sZW5ndGg+MCYmdGhpcy5zZXR0aW5ncy5lcnJvcl9sYWJlbHMmJm8ucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvcl9jbGFzcykucmVtb3ZlQXR0cihcInJvbGVcIiksYShoKS50cmlnZ2VySGFuZGxlcihcInZhbGlkXCIpKToodGhpcy5TKGgpLmF0dHIodGhpcy5pbnZhbGlkX2F0dHIsXCJcIiksZi5hZGRDbGFzcyhcImVycm9yXCIpLG8ubGVuZ3RoPjAmJnRoaXMuc2V0dGluZ3MuZXJyb3JfbGFiZWxzJiZvLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JfY2xhc3MpLmF0dHIoXCJyb2xlXCIsXCJhbGVydFwiKSxhKGgpLnRyaWdnZXJIYW5kbGVyKFwiaW52YWxpZFwiKSl9ZWxzZSBpZihiW2NdWzFdLnRlc3QoaikmJnB8fCFpJiZoLnZhbHVlLmxlbmd0aDwxfHxhKGgpLmF0dHIoXCJkaXNhYmxlZFwiKT9xLnB1c2goITApOnEucHVzaCghMSkscT1bcS5ldmVyeShmdW5jdGlvbihhKXtyZXR1cm4gYX0pXSxxWzBdKXRoaXMuUyhoKS5yZW1vdmVBdHRyKHRoaXMuaW52YWxpZF9hdHRyKSxoLnNldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiLFwiZmFsc2VcIiksaC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpLGYucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvcl9jbGFzcyksby5sZW5ndGg+MCYmdGhpcy5zZXR0aW5ncy5lcnJvcl9sYWJlbHMmJm8ucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvcl9jbGFzcykucmVtb3ZlQXR0cihcInJvbGVcIiksYShoKS50cmlnZ2VySGFuZGxlcihcInZhbGlkXCIpO2Vsc2V7dGhpcy5TKGgpLmF0dHIodGhpcy5pbnZhbGlkX2F0dHIsXCJcIiksaC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWludmFsaWRcIixcInRydWVcIik7dmFyIHY9Zi5maW5kKFwic21hbGwuXCIrdGhpcy5zZXR0aW5ncy5lcnJvcl9jbGFzcyxcInNwYW4uXCIrdGhpcy5zZXR0aW5ncy5lcnJvcl9jbGFzcyksdz12Lmxlbmd0aD4wP3ZbMF0uaWQ6XCJcIjt3Lmxlbmd0aD4wJiZoLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIix3KSxmLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JfY2xhc3MpLG8ubGVuZ3RoPjAmJnRoaXMuc2V0dGluZ3MuZXJyb3JfbGFiZWxzJiZvLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JfY2xhc3MpLmF0dHIoXCJyb2xlXCIsXCJhbGVydFwiKSxhKGgpLnRyaWdnZXJIYW5kbGVyKFwiaW52YWxpZFwiKX1kPWQuY29uY2F0KHEpfXJldHVybiBkfSx2YWxpZF9jaGVja2JveDpmdW5jdGlvbihiLGMpe3ZhciBiPXRoaXMuUyhiKSxkPWIuaXMoXCI6Y2hlY2tlZFwiKXx8IWN8fGIuZ2V0KDApLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpO3JldHVybiBkPyhiLnJlbW92ZUF0dHIodGhpcy5pbnZhbGlkX2F0dHIpLnBhcmVudCgpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JfY2xhc3MpLGEoYikudHJpZ2dlckhhbmRsZXIoXCJ2YWxpZFwiKSk6KGIuYXR0cih0aGlzLmludmFsaWRfYXR0cixcIlwiKS5wYXJlbnQoKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yX2NsYXNzKSxhKGIpLnRyaWdnZXJIYW5kbGVyKFwiaW52YWxpZFwiKSksZH0sdmFsaWRfcmFkaW86ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9Yi5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLGU9dGhpcy5TKGIpLmNsb3Nlc3QoXCJbZGF0YS1cIit0aGlzLmF0dHJfbmFtZSghMCkrXCJdXCIpLmZpbmQoXCJbbmFtZT0nXCIrZCtcIiddXCIpLGY9ZS5sZW5ndGgsZz0hMSxoPSExLGk9MDtmPmk7aSsrKWVbaV0uZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIik/KGg9ITAsZz0hMCk6ZVtpXS5jaGVja2VkP2c9ITA6aCYmKGc9ITEpO2Zvcih2YXIgaT0wO2Y+aTtpKyspZz8odGhpcy5TKGVbaV0pLnJlbW92ZUF0dHIodGhpcy5pbnZhbGlkX2F0dHIpLnBhcmVudCgpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JfY2xhc3MpLGEoZVtpXSkudHJpZ2dlckhhbmRsZXIoXCJ2YWxpZFwiKSk6KHRoaXMuUyhlW2ldKS5hdHRyKHRoaXMuaW52YWxpZF9hdHRyLFwiXCIpLnBhcmVudCgpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JfY2xhc3MpLGEoZVtpXSkudHJpZ2dlckhhbmRsZXIoXCJpbnZhbGlkXCIpKTtyZXR1cm4gZ30sdmFsaWRfZXF1YWw6ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPWMuZ2V0RWxlbWVudEJ5SWQoYS5nZXRBdHRyaWJ1dGUodGhpcy5hZGRfbmFtZXNwYWNlKFwiZGF0YS1lcXVhbHRvXCIpKSkudmFsdWUsZj1hLnZhbHVlLGc9ZT09PWY7cmV0dXJuIGc/KHRoaXMuUyhhKS5yZW1vdmVBdHRyKHRoaXMuaW52YWxpZF9hdHRyKSxkLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JfY2xhc3MpLGxhYmVsLmxlbmd0aD4wJiZzZXR0aW5ncy5lcnJvcl9sYWJlbHMmJmxhYmVsLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JfY2xhc3MpKToodGhpcy5TKGEpLmF0dHIodGhpcy5pbnZhbGlkX2F0dHIsXCJcIiksZC5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yX2NsYXNzKSxsYWJlbC5sZW5ndGg+MCYmc2V0dGluZ3MuZXJyb3JfbGFiZWxzJiZsYWJlbC5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yX2NsYXNzKSksZ30sdmFsaWRfb25lb2Y6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGE9dGhpcy5TKGEpLGU9dGhpcy5TKFwiW1wiK3RoaXMuYWRkX25hbWVzcGFjZShcImRhdGEtb25lb2ZcIikrXCJdXCIpLGY9ZS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGg+MDtpZihmP2EucmVtb3ZlQXR0cih0aGlzLmludmFsaWRfYXR0cikucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvcl9jbGFzcyk6YS5hdHRyKHRoaXMuaW52YWxpZF9hdHRyLFwiXCIpLnBhcmVudCgpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JfY2xhc3MpLCFkKXt2YXIgZz10aGlzO2UuZWFjaChmdW5jdGlvbigpe2cudmFsaWRfb25lb2YuY2FsbChnLHRoaXMsbnVsbCxudWxsLCEwKX0pfXJldHVybiBmfSxyZWZsb3c6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy5TKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIpLmF0dHIoXCJub3ZhbGlkYXRlXCIsXCJub3ZhbGlkYXRlXCIpO2MuUyhkKS5lYWNoKGZ1bmN0aW9uKGEsYil7Yy5ldmVudHMoYil9KX19fShqUXVlcnksd2luZG93LHdpbmRvdy5kb2N1bWVudCksZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7Rm91bmRhdGlvbi5saWJzLmFjY29yZGlvbj17bmFtZTpcImFjY29yZGlvblwiLHZlcnNpb246XCI1LjUuM1wiLHNldHRpbmdzOntjb250ZW50X2NsYXNzOlwiY29udGVudFwiLGFjdGl2ZV9jbGFzczpcImFjdGl2ZVwiLG11bHRpX2V4cGFuZDohMSx0b2dnbGVhYmxlOiEwLGNhbGxiYWNrOmZ1bmN0aW9uKCl7fX0saW5pdDpmdW5jdGlvbihhLGIsYyl7dGhpcy5iaW5kaW5ncyhiLGMpfSxldmVudHM6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPXRoaXMuUztjLmNyZWF0ZSh0aGlzLlMoYikpLGQodGhpcy5zY29wZSkub2ZmKFwiLmZuZHRuLmFjY29yZGlvblwiKS5vbihcImNsaWNrLmZuZHRuLmFjY29yZGlvblwiLFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdID4gZGQgPiBhLCBbXCIrdGhpcy5hdHRyX25hbWUoKStcIl0gPiBsaSA+IGFcIixmdW5jdGlvbihiKXt2YXIgZT1kKHRoaXMpLmNsb3Nlc3QoXCJbXCIrYy5hdHRyX25hbWUoKStcIl1cIiksZj1jLmF0dHJfbmFtZSgpK1wiPVwiK2UuYXR0cihjLmF0dHJfbmFtZSgpKSxnPWUuZGF0YShjLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKXx8Yy5zZXR0aW5ncyxoPWQoXCIjXCIrdGhpcy5ocmVmLnNwbGl0KFwiI1wiKVsxXSksaT1hKFwiPiBkZCwgPiBsaVwiLGUpLGo9aS5jaGlsZHJlbihcIi5cIitnLmNvbnRlbnRfY2xhc3MpLGs9ai5maWx0ZXIoXCIuXCIrZy5hY3RpdmVfY2xhc3MpO3JldHVybiBiLnByZXZlbnREZWZhdWx0KCksZS5hdHRyKGMuYXR0cl9uYW1lKCkpJiYoaj1qLmFkZChcIltcIitmK1wiXSBkZCA+IC5cIitnLmNvbnRlbnRfY2xhc3MrXCIsIFtcIitmK1wiXSBsaSA+IC5cIitnLmNvbnRlbnRfY2xhc3MpLGk9aS5hZGQoXCJbXCIrZitcIl0gZGQsIFtcIitmK1wiXSBsaVwiKSksZy50b2dnbGVhYmxlJiZoLmlzKGspPyhoLnBhcmVudChcImRkLCBsaVwiKS50b2dnbGVDbGFzcyhnLmFjdGl2ZV9jbGFzcywhMSksaC50b2dnbGVDbGFzcyhnLmFjdGl2ZV9jbGFzcywhMSksZCh0aGlzKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuXCJ0cnVlXCI9PT1iP1wiZmFsc2VcIjpcInRydWVcIn0pLGcuY2FsbGJhY2soaCksaC50cmlnZ2VySGFuZGxlcihcInRvZ2dsZWRcIixbZV0pLHZvaWQgZS50cmlnZ2VySGFuZGxlcihcInRvZ2dsZWRcIixbaF0pKTooZy5tdWx0aV9leHBhbmR8fChqLnJlbW92ZUNsYXNzKGcuYWN0aXZlX2NsYXNzKSxpLnJlbW92ZUNsYXNzKGcuYWN0aXZlX2NsYXNzKSxpLmNoaWxkcmVuKFwiYVwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIikpLGguYWRkQ2xhc3MoZy5hY3RpdmVfY2xhc3MpLnBhcmVudCgpLmFkZENsYXNzKGcuYWN0aXZlX2NsYXNzKSxnLmNhbGxiYWNrKGgpLGgudHJpZ2dlckhhbmRsZXIoXCJ0b2dnbGVkXCIsW2VdKSxlLnRyaWdnZXJIYW5kbGVyKFwidG9nZ2xlZFwiLFtoXSksdm9pZCBkKHRoaXMpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpKX0pfSxjcmVhdGU6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPWIsZT1hKFwiPiAuYWNjb3JkaW9uLW5hdmlnYXRpb25cIixkKSxmPWQuZGF0YShjLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKXx8Yy5zZXR0aW5ncztlLmNoaWxkcmVuKFwiYVwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksZS5oYXMoXCIuXCIrZi5jb250ZW50X2NsYXNzK1wiLlwiK2YuYWN0aXZlX2NsYXNzKS5hZGRDbGFzcyhmLmFjdGl2ZV9jbGFzcykuY2hpbGRyZW4oXCJhXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpLGYubXVsdGlfZXhwYW5kJiZiLmF0dHIoXCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiLFwidHJ1ZVwiKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3ZhciBhPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhP2E6e30sYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5zZWxlY3Rvcj9hLnNlbGVjdG9yOlwiXCIsZD1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS50b2dnbGVfc3RhdGU/YS50b2dnbGVfc3RhdGU6XCJcIixlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLiRhY2NvcmRpb24/YS4kYWNjb3JkaW9uOnRoaXMuUyh0aGlzLnNjb3BlKS5jbG9zZXN0KFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIpLGY9ZS5maW5kKFwiPiBkZFwiK2MrXCIsID4gbGlcIitjKTtpZihmLmxlbmd0aDwxKXJldHVybiBiLmNvbnNvbGUmJmNvbnNvbGUuZXJyb3IoXCJTZWxlY3Rpb24gbm90IGZvdW5kLlwiLGMpLCExO3ZhciBnPXRoaXMuUyxoPXRoaXMuc2V0dGluZ3MuYWN0aXZlX2NsYXNzO2YuZWFjaChmdW5jdGlvbigpe3ZhciBhPWcodGhpcyksYj1hLmhhc0NsYXNzKGgpOyhiJiZcImNsb3NlXCI9PT1kfHwhYiYmXCJvcGVuXCI9PT1kfHxcIlwiPT09ZCkmJmEuZmluZChcIj4gYVwiKS50cmlnZ2VyKFwiY2xpY2suZm5kdG4uYWNjb3JkaW9uXCIpfSl9LG9wZW46ZnVuY3Rpb24oYSl7dmFyIGE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGE/YTp7fTthLnRvZ2dsZV9zdGF0ZT1cIm9wZW5cIix0aGlzLnRvZ2dsZShhKX0sY2xvc2U6ZnVuY3Rpb24oYSl7dmFyIGE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGE/YTp7fTthLnRvZ2dsZV9zdGF0ZT1cImNsb3NlXCIsdGhpcy50b2dnbGUoYSl9LG9mZjpmdW5jdGlvbigpe30scmVmbG93OmZ1bmN0aW9uKCl7fX19KGpRdWVyeSx3aW5kb3csd2luZG93LmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtGb3VuZGF0aW9uLmxpYnMuYWxlcnQ9e25hbWU6XCJhbGVydFwiLHZlcnNpb246XCI1LjUuM1wiLHNldHRpbmdzOntjYWxsYmFjazpmdW5jdGlvbigpe319LGluaXQ6ZnVuY3Rpb24oYSxiLGMpe3RoaXMuYmluZGluZ3MoYixjKX0sZXZlbnRzOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPXRoaXMuUzthKHRoaXMuc2NvcGUpLm9mZihcIi5hbGVydFwiKS5vbihcImNsaWNrLmZuZHRuLmFsZXJ0XCIsXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIl0gLmNsb3NlXCIsZnVuY3Rpb24oYSl7dmFyIGQ9Yyh0aGlzKS5jbG9zZXN0KFwiW1wiK2IuYXR0cl9uYW1lKCkrXCJdXCIpLGU9ZC5kYXRhKGIuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpfHxiLnNldHRpbmdzO2EucHJldmVudERlZmF1bHQoKSxNb2Rlcm5penIuY3NzdHJhbnNpdGlvbnM/KGQuYWRkQ2xhc3MoXCJhbGVydC1jbG9zZVwiKSxkLm9uKFwidHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oYSl7Yyh0aGlzKS50cmlnZ2VyKFwiY2xvc2UuZm5kdG4uYWxlcnRcIikucmVtb3ZlKCksZS5jYWxsYmFjaygpfSkpOmQuZmFkZU91dCgzMDAsZnVuY3Rpb24oKXtjKHRoaXMpLnRyaWdnZXIoXCJjbG9zZS5mbmR0bi5hbGVydFwiKS5yZW1vdmUoKSxlLmNhbGxiYWNrKCl9KX0pfSxyZWZsb3c6ZnVuY3Rpb24oKXt9fX0oalF1ZXJ5LHdpbmRvdyx3aW5kb3cuZG9jdW1lbnQpLGZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO0ZvdW5kYXRpb24ubGlicy5jbGVhcmluZz17bmFtZTpcImNsZWFyaW5nXCIsdmVyc2lvbjpcIjUuNS4zXCIsc2V0dGluZ3M6e3RlbXBsYXRlczp7dmlld2luZzonPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNsZWFyaW5nLWNsb3NlXCI+JnRpbWVzOzwvYT48ZGl2IGNsYXNzPVwidmlzaWJsZS1pbWdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48ZGl2IGNsYXNzPVwiY2xlYXJpbmctdG91Y2gtbGFiZWxcIj48L2Rpdj48aW1nIHNyYz1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBQUQvQUN3QUFBQUFBUUFCQUFBQ0FEcyUzRFwiIGFsdD1cIlwiIC8+PHAgY2xhc3M9XCJjbGVhcmluZy1jYXB0aW9uXCI+PC9wPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjbGVhcmluZy1tYWluLXByZXZcIj48c3Bhbj48L3NwYW4+PC9hPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjbGVhcmluZy1tYWluLW5leHRcIj48c3Bhbj48L3NwYW4+PC9hPjwvZGl2PjxpbWcgY2xhc3M9XCJjbGVhcmluZy1wcmVsb2FkLW5leHRcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiBzcmM9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFEL0FDd0FBQUFBQVFBQkFBQUNBRHMlM0RcIiBhbHQ9XCJcIiAvPjxpbWcgY2xhc3M9XCJjbGVhcmluZy1wcmVsb2FkLXByZXZcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiBzcmM9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFEL0FDd0FBQUFBQVFBQkFBQUNBRHMlM0RcIiBhbHQ9XCJcIiAvPid9LGNsb3NlX3NlbGVjdG9yczpcIi5jbGVhcmluZy1jbG9zZSwgZGl2LmNsZWFyaW5nLWJsYWNrb3V0XCIsb3Blbl9zZWxlY3RvcnM6XCJcIixza2lwX3NlbGVjdG9yOlwiXCIsdG91Y2hfbGFiZWw6XCJcIixpbml0OiExLGxvY2tlZDohMX0saW5pdDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcztGb3VuZGF0aW9uLmluaGVyaXQodGhpcyxcInRocm90dGxlIGltYWdlX2xvYWRlZFwiKSx0aGlzLmJpbmRpbmdzKGIsYyksZC5TKHRoaXMuc2NvcGUpLmlzKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIpP3RoaXMuYXNzZW1ibGUoZC5TKFwibGlcIix0aGlzLnNjb3BlKSk6ZC5TKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIsdGhpcy5zY29wZSkuZWFjaChmdW5jdGlvbigpe2QuYXNzZW1ibGUoZC5TKFwibGlcIix0aGlzKSl9KX0sZXZlbnRzOmZ1bmN0aW9uKGQpe3ZhciBlPXRoaXMsZj1lLlMsZz1hKFwiLnNjcm9sbC1jb250YWluZXJcIik7Zy5sZW5ndGg+MCYmKHRoaXMuc2NvcGU9ZyksZih0aGlzLnNjb3BlKS5vZmYoXCIuY2xlYXJpbmdcIikub24oXCJjbGljay5mbmR0bi5jbGVhcmluZ1wiLFwidWxbXCIrdGhpcy5hdHRyX25hbWUoKStcIl0gbGkgXCIrdGhpcy5zZXR0aW5ncy5vcGVuX3NlbGVjdG9ycyxmdW5jdGlvbihhLGIsYyl7dmFyIGI9Ynx8Zih0aGlzKSxjPWN8fGIsZD1iLm5leHQoXCJsaVwiKSxnPWIuY2xvc2VzdChcIltcIitlLmF0dHJfbmFtZSgpK1wiXVwiKS5kYXRhKGUuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpLGg9ZihhLnRhcmdldCk7YS5wcmV2ZW50RGVmYXVsdCgpLGd8fChlLmluaXQoKSxnPWIuY2xvc2VzdChcIltcIitlLmF0dHJfbmFtZSgpK1wiXVwiKS5kYXRhKGUuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpKSxjLmhhc0NsYXNzKFwidmlzaWJsZVwiKSYmYlswXT09PWNbMF0mJmQubGVuZ3RoPjAmJmUuaXNfb3BlbihiKSYmKGM9ZCxoPWYoXCJpbWdcIixjKSksZS5vcGVuKGgsYixjKSxlLnVwZGF0ZV9wYWRkbGVzKGMpfSkub24oXCJjbGljay5mbmR0bi5jbGVhcmluZ1wiLFwiLmNsZWFyaW5nLW1haW4tbmV4dFwiLGZ1bmN0aW9uKGEpe2UubmF2KGEsXCJuZXh0XCIpfSkub24oXCJjbGljay5mbmR0bi5jbGVhcmluZ1wiLFwiLmNsZWFyaW5nLW1haW4tcHJldlwiLGZ1bmN0aW9uKGEpe2UubmF2KGEsXCJwcmV2XCIpfSkub24oXCJjbGljay5mbmR0bi5jbGVhcmluZ1wiLHRoaXMuc2V0dGluZ3MuY2xvc2Vfc2VsZWN0b3JzLGZ1bmN0aW9uKGEpe0ZvdW5kYXRpb24ubGlicy5jbGVhcmluZy5jbG9zZShhLHRoaXMpfSksYShjKS5vbihcImtleWRvd24uZm5kdG4uY2xlYXJpbmdcIixmdW5jdGlvbihhKXtlLmtleWRvd24oYSl9KSxmKGIpLm9mZihcIi5jbGVhcmluZ1wiKS5vbihcInJlc2l6ZS5mbmR0bi5jbGVhcmluZ1wiLGZ1bmN0aW9uKCl7ZS5yZXNpemUoKX0pLHRoaXMuc3dpcGVfZXZlbnRzKGQpfSxzd2lwZV9ldmVudHM6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuUztjKHRoaXMuc2NvcGUpLm9uKFwidG91Y2hzdGFydC5mbmR0bi5jbGVhcmluZ1wiLFwiLnZpc2libGUtaW1nXCIsZnVuY3Rpb24oYSl7YS50b3VjaGVzfHwoYT1hLm9yaWdpbmFsRXZlbnQpO3ZhciBiPXtzdGFydF9wYWdlX3g6YS50b3VjaGVzWzBdLnBhZ2VYLHN0YXJ0X3BhZ2VfeTphLnRvdWNoZXNbMF0ucGFnZVksc3RhcnRfdGltZToobmV3IERhdGUpLmdldFRpbWUoKSxkZWx0YV94OjAsaXNfc2Nyb2xsaW5nOmR9O2ModGhpcykuZGF0YShcInN3aXBlLXRyYW5zaXRpb25cIixiKSxhLnN0b3BQcm9wYWdhdGlvbigpfSkub24oXCJ0b3VjaG1vdmUuZm5kdG4uY2xlYXJpbmdcIixcIi52aXNpYmxlLWltZ1wiLGZ1bmN0aW9uKGEpe2lmKGEudG91Y2hlc3x8KGE9YS5vcmlnaW5hbEV2ZW50KSwhKGEudG91Y2hlcy5sZW5ndGg+MXx8YS5zY2FsZSYmMSE9PWEuc2NhbGUpKXt2YXIgZD1jKHRoaXMpLmRhdGEoXCJzd2lwZS10cmFuc2l0aW9uXCIpO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBkJiYoZD17fSksZC5kZWx0YV94PWEudG91Y2hlc1swXS5wYWdlWC1kLnN0YXJ0X3BhZ2VfeCxGb3VuZGF0aW9uLnJ0bCYmKGQuZGVsdGFfeD0tZC5kZWx0YV94KSxcInVuZGVmaW5lZFwiPT10eXBlb2YgZC5pc19zY3JvbGxpbmcmJihkLmlzX3Njcm9sbGluZz0hIShkLmlzX3Njcm9sbGluZ3x8TWF0aC5hYnMoZC5kZWx0YV94KTxNYXRoLmFicyhhLnRvdWNoZXNbMF0ucGFnZVktZC5zdGFydF9wYWdlX3kpKSksIWQuaXNfc2Nyb2xsaW5nJiYhZC5hY3RpdmUpe2EucHJldmVudERlZmF1bHQoKTt2YXIgZT1kLmRlbHRhX3g8MD9cIm5leHRcIjpcInByZXZcIjtkLmFjdGl2ZT0hMCxiLm5hdihhLGUpfX19KS5vbihcInRvdWNoZW5kLmZuZHRuLmNsZWFyaW5nXCIsXCIudmlzaWJsZS1pbWdcIixmdW5jdGlvbihhKXtjKHRoaXMpLmRhdGEoXCJzd2lwZS10cmFuc2l0aW9uXCIse30pLGEuc3RvcFByb3BhZ2F0aW9uKCl9KX0sYXNzZW1ibGU6ZnVuY3Rpb24oYil7dmFyIGM9Yi5wYXJlbnQoKTtpZighYy5wYXJlbnQoKS5oYXNDbGFzcyhcImNhcm91c2VsXCIpKXtjLmFmdGVyKCc8ZGl2IGlkPVwiZm91bmRhdGlvbkNsZWFyaW5nSG9sZGVyXCI+PC9kaXY+Jyk7dmFyIGQ9Yy5kZXRhY2goKSxlPVwiXCI7aWYobnVsbCE9ZFswXSl7ZT1kWzBdLm91dGVySFRNTDt2YXIgZj10aGlzLlMoXCIjZm91bmRhdGlvbkNsZWFyaW5nSG9sZGVyXCIpLGc9Yy5kYXRhKHRoaXMuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpLGg9e2dyaWQ6JzxkaXYgY2xhc3M9XCJjYXJvdXNlbFwiPicrZStcIjwvZGl2PlwiLHZpZXdpbmc6Zy50ZW1wbGF0ZXMudmlld2luZ30saT0nPGRpdiBjbGFzcz1cImNsZWFyaW5nLWFzc2VtYmxlZFwiPjxkaXY+JytoLnZpZXdpbmcraC5ncmlkK1wiPC9kaXY+PC9kaXY+XCIsaj10aGlzLnNldHRpbmdzLnRvdWNoX2xhYmVsO01vZGVybml6ci50b3VjaCYmKGk9YShpKS5maW5kKFwiLmNsZWFyaW5nLXRvdWNoLWxhYmVsXCIpLmh0bWwoaikuZW5kKCkpLGYuYWZ0ZXIoaSkucmVtb3ZlKCl9fX0sb3BlbjpmdW5jdGlvbihiLGQsZSl7ZnVuY3Rpb24gZigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLmltYWdlX2xvYWRlZChtLGZ1bmN0aW9uKCl7MSE9PW0ub3V0ZXJXaWR0aCgpfHxvP2cuY2FsbCh0aGlzLG0pOmYuY2FsbCh0aGlzKX0uYmluZCh0aGlzKSl9LmJpbmQodGhpcyksMTAwKX1mdW5jdGlvbiBnKGIpe3ZhciBjPWEoYik7Yy5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJ2aXNpYmxlXCIpLGMudHJpZ2dlcihcImltYWdlVmlzaWJsZVwiKSxpLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIiksai5hZGRDbGFzcyhcImNsZWFyaW5nLWJsYWNrb3V0XCIpLGsuYWRkQ2xhc3MoXCJjbGVhcmluZy1jb250YWluZXJcIiksbC5zaG93KCksdGhpcy5maXhfaGVpZ2h0KGUpLmNhcHRpb24oaC5TKFwiLmNsZWFyaW5nLWNhcHRpb25cIixsKSxoLlMoXCJpbWdcIixlKSkuY2VudGVyX2FuZF9sYWJlbChiLG4pLnNoaWZ0KGQsZSxmdW5jdGlvbigpe2UuY2xvc2VzdChcImxpXCIpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJ2aXNpYmxlXCIpLGUuY2xvc2VzdChcImxpXCIpLmFkZENsYXNzKFwidmlzaWJsZVwiKX0pLGwudHJpZ2dlcihcIm9wZW5lZC5mbmR0bi5jbGVhcmluZ1wiKX12YXIgaD10aGlzLGk9YShjLmJvZHkpLGo9ZS5jbG9zZXN0KFwiLmNsZWFyaW5nLWFzc2VtYmxlZFwiKSxrPWguUyhcImRpdlwiLGopLmZpcnN0KCksbD1oLlMoXCIudmlzaWJsZS1pbWdcIixrKSxtPWguUyhcImltZ1wiLGwpLm5vdChiKSxuPWguUyhcIi5jbGVhcmluZy10b3VjaC1sYWJlbFwiLGspLG89ITEscD17fTthKFwiYm9keVwiKS5vbihcInRvdWNobW92ZVwiLGZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQoKX0pLG0uZXJyb3IoZnVuY3Rpb24oKXtvPSEwfSksdGhpcy5sb2NrZWQoKXx8KGwudHJpZ2dlcihcIm9wZW4uZm5kdG4uY2xlYXJpbmdcIikscD10aGlzLmxvYWQoYikscC5pbnRlcmNoYW5nZT9tLmF0dHIoXCJkYXRhLWludGVyY2hhbmdlXCIscC5pbnRlcmNoYW5nZSkuZm91bmRhdGlvbihcImludGVyY2hhbmdlXCIsXCJyZWZsb3dcIik6bS5hdHRyKFwic3JjXCIscC5zcmMpLmF0dHIoXCJkYXRhLWludGVyY2hhbmdlXCIsXCJcIiksbS5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIiksZi5jYWxsKHRoaXMpKX0sY2xvc2U6ZnVuY3Rpb24oYixkKXtiLnByZXZlbnREZWZhdWx0KCk7dmFyIGUsZixnPWZ1bmN0aW9uKGEpe3JldHVybi9ibGFja291dC8udGVzdChhLnNlbGVjdG9yKT9hOmEuY2xvc2VzdChcIi5jbGVhcmluZy1ibGFja291dFwiKX0oYShkKSksaD1hKGMuYm9keSk7cmV0dXJuIGQ9PT1iLnRhcmdldCYmZyYmKGguY3NzKFwib3ZlcmZsb3dcIixcIlwiKSxlPWEoXCJkaXZcIixnKS5maXJzdCgpLGY9YShcIi52aXNpYmxlLWltZ1wiLGUpLGYudHJpZ2dlcihcImNsb3NlLmZuZHRuLmNsZWFyaW5nXCIpLHRoaXMuc2V0dGluZ3MucHJldl9pbmRleD0wLGEoXCJ1bFtcIit0aGlzLmF0dHJfbmFtZSgpK1wiXVwiLGcpLmF0dHIoXCJzdHlsZVwiLFwiXCIpLmNsb3Nlc3QoXCIuY2xlYXJpbmctYmxhY2tvdXRcIikucmVtb3ZlQ2xhc3MoXCJjbGVhcmluZy1ibGFja291dFwiKSxlLnJlbW92ZUNsYXNzKFwiY2xlYXJpbmctY29udGFpbmVyXCIpLGYuaGlkZSgpLGYudHJpZ2dlcihcImNsb3NlZC5mbmR0bi5jbGVhcmluZ1wiKSksYShcImJvZHlcIikub2ZmKFwidG91Y2htb3ZlXCIpLCExfSxpc19vcGVuOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudCgpLnByb3AoXCJzdHlsZVwiKS5sZW5ndGg+MH0sa2V5ZG93bjpmdW5jdGlvbihiKXt2YXIgYz1hKFwiLmNsZWFyaW5nLWJsYWNrb3V0IHVsW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIpLGQ9dGhpcy5ydGw/Mzc6MzksZT10aGlzLnJ0bD8zOTozNyxmPTI3O2Iud2hpY2g9PT1kJiZ0aGlzLmdvKGMsXCJuZXh0XCIpLGIud2hpY2g9PT1lJiZ0aGlzLmdvKGMsXCJwcmV2XCIpLGIud2hpY2g9PT1mJiZ0aGlzLlMoXCJhLmNsZWFyaW5nLWNsb3NlXCIpLnRyaWdnZXIoXCJjbGljay5mbmR0bi5jbGVhcmluZ1wiKX0sbmF2OmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YShcInVsW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIsXCIuY2xlYXJpbmctYmxhY2tvdXRcIik7Yi5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZ28oZCxjKX0scmVzaXplOmZ1bmN0aW9uKCl7dmFyIGI9YShcImltZ1wiLFwiLmNsZWFyaW5nLWJsYWNrb3V0IC52aXNpYmxlLWltZ1wiKSxjPWEoXCIuY2xlYXJpbmctdG91Y2gtbGFiZWxcIixcIi5jbGVhcmluZy1ibGFja291dFwiKTtiLmxlbmd0aCYmKHRoaXMuY2VudGVyX2FuZF9sYWJlbChiLGMpLGIudHJpZ2dlcihcInJlc2l6ZWQuZm5kdG4uY2xlYXJpbmdcIikpfSxmaXhfaGVpZ2h0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50KCkuY2hpbGRyZW4oKSxjPXRoaXM7cmV0dXJuIGIuZWFjaChmdW5jdGlvbigpe3ZhciBhPWMuUyh0aGlzKSxiPWEuZmluZChcImltZ1wiKTthLmhlaWdodCgpPmIub3V0ZXJIZWlnaHQoKSYmYS5hZGRDbGFzcyhcImZpeC1oZWlnaHRcIil9KS5jbG9zZXN0KFwidWxcIikud2lkdGgoMTAwKmIubGVuZ3RoK1wiJVwiKSx0aGlzfSx1cGRhdGVfcGFkZGxlczpmdW5jdGlvbihhKXthPWEuY2xvc2VzdChcImxpXCIpO3ZhciBiPWEuY2xvc2VzdChcIi5jYXJvdXNlbFwiKS5zaWJsaW5ncyhcIi52aXNpYmxlLWltZ1wiKTthLm5leHQoKS5sZW5ndGg+MD90aGlzLlMoXCIuY2xlYXJpbmctbWFpbi1uZXh0XCIsYikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTp0aGlzLlMoXCIuY2xlYXJpbmctbWFpbi1uZXh0XCIsYikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxhLnByZXYoKS5sZW5ndGg+MD90aGlzLlMoXCIuY2xlYXJpbmctbWFpbi1wcmV2XCIsYikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTp0aGlzLlMoXCIuY2xlYXJpbmctbWFpbi1wcmV2XCIsYikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKX0sY2VudGVyX2FuZF9sYWJlbDpmdW5jdGlvbihhLGIpe3JldHVybiF0aGlzLnJ0bCYmYi5sZW5ndGg+MD9iLmNzcyh7bWFyZ2luTGVmdDotKGIub3V0ZXJXaWR0aCgpLzIpLG1hcmdpblRvcDotKGEub3V0ZXJIZWlnaHQoKS8yKS1iLm91dGVySGVpZ2h0KCktMTB9KTpiLmNzcyh7bWFyZ2luUmlnaHQ6LShiLm91dGVyV2lkdGgoKS8yKSxtYXJnaW5Ub3A6LShhLm91dGVySGVpZ2h0KCkvMiktYi5vdXRlckhlaWdodCgpLTEwLGxlZnQ6XCJhdXRvXCIscmlnaHQ6XCI1MCVcIn0pLHRoaXN9LGxvYWQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkO3JldHVyblwiQVwiPT09YVswXS5ub2RlTmFtZT8oYj1hLmF0dHIoXCJocmVmXCIpLGM9YS5kYXRhKFwiY2xlYXJpbmctaW50ZXJjaGFuZ2VcIikpOihkPWEuY2xvc2VzdChcImFcIiksYj1kLmF0dHIoXCJocmVmXCIpLGM9ZC5kYXRhKFwiY2xlYXJpbmctaW50ZXJjaGFuZ2VcIikpLHRoaXMucHJlbG9hZChhKSx7c3JjOmI/YjphLmF0dHIoXCJzcmNcIiksaW50ZXJjaGFuZ2U6Yj9jOmEuZGF0YShcImNsZWFyaW5nLWludGVyY2hhbmdlXCIpfX0scHJlbG9hZDpmdW5jdGlvbihhKXt0aGlzLmltZyhhLmNsb3Nlc3QoXCJsaVwiKS5uZXh0KCksXCJuZXh0XCIpLmltZyhhLmNsb3Nlc3QoXCJsaVwiKS5wcmV2KCksXCJwcmV2XCIpfSxpbWc6ZnVuY3Rpb24oYixjKXtpZihiLmxlbmd0aCl7dmFyIGQsZSxmLGc9YShcIi5jbGVhcmluZy1wcmVsb2FkLVwiK2MpLGg9dGhpcy5TKFwiYVwiLGIpO2gubGVuZ3RoPyhkPWguYXR0cihcImhyZWZcIiksZT1oLmRhdGEoXCJjbGVhcmluZy1pbnRlcmNoYW5nZVwiKSk6KGY9dGhpcy5TKFwiaW1nXCIsYiksZD1mLmF0dHIoXCJzcmNcIiksZT1mLmRhdGEoXCJjbGVhcmluZy1pbnRlcmNoYW5nZVwiKSksZT9nLmF0dHIoXCJkYXRhLWludGVyY2hhbmdlXCIsZSk6KGcuYXR0cihcInNyY1wiLGQpLGcuYXR0cihcImRhdGEtaW50ZXJjaGFuZ2VcIixcIlwiKSl9cmV0dXJuIHRoaXN9LGNhcHRpb246ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLmF0dHIoXCJkYXRhLWNhcHRpb25cIik7aWYoYyl7dmFyIGQ9YS5nZXQoMCk7ZC5pbm5lckhUTUw9YyxhLnNob3coKX1lbHNlIGEudGV4dChcIlwiKS5oaWRlKCk7cmV0dXJuIHRoaXN9LGdvOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5TKFwiLnZpc2libGVcIixhKSxkPWNbYl0oKTt0aGlzLnNldHRpbmdzLnNraXBfc2VsZWN0b3ImJjAhPWQuZmluZCh0aGlzLnNldHRpbmdzLnNraXBfc2VsZWN0b3IpLmxlbmd0aCYmKGQ9ZFtiXSgpKSxkLmxlbmd0aCYmdGhpcy5TKFwiaW1nXCIsZCkudHJpZ2dlcihcImNsaWNrLmZuZHRuLmNsZWFyaW5nXCIsW2MsZF0pLnRyaWdnZXIoXCJjaGFuZ2UuZm5kdG4uY2xlYXJpbmdcIil9LHNoaWZ0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPWIucGFyZW50KCksZj10aGlzLnNldHRpbmdzLnByZXZfaW5kZXh8fGIuaW5kZXgoKSxnPXRoaXMuZGlyZWN0aW9uKGUsYSxiKSxoPXRoaXMucnRsP1wicmlnaHRcIjpcImxlZnRcIixpPXBhcnNlSW50KGUuY3NzKFwibGVmdFwiKSwxMCksaj1iLm91dGVyV2lkdGgoKSxrPXt9O2IuaW5kZXgoKT09PWZ8fC9za2lwLy50ZXN0KGcpPy9za2lwLy50ZXN0KGcpJiYoZD1iLmluZGV4KCktdGhpcy5zZXR0aW5ncy51cF9jb3VudCx0aGlzLmxvY2soKSxkPjA/KGtbaF09LShkKmopLGUuYW5pbWF0ZShrLDMwMCx0aGlzLnVubG9jaygpKSk6KGtbaF09MCxlLmFuaW1hdGUoaywzMDAsdGhpcy51bmxvY2soKSkpKTovbGVmdC8udGVzdChnKT8odGhpcy5sb2NrKCksa1toXT1pK2osZS5hbmltYXRlKGssMzAwLHRoaXMudW5sb2NrKCkpKTovcmlnaHQvLnRlc3QoZykmJih0aGlzLmxvY2soKSxrW2hdPWktaixlLmFuaW1hdGUoaywzMDAsdGhpcy51bmxvY2soKSkpLGMoKX0sZGlyZWN0aW9uOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMuUyhcImxpXCIsYSksZj1lLm91dGVyV2lkdGgoKStlLm91dGVyV2lkdGgoKS80LGc9TWF0aC5mbG9vcih0aGlzLlMoXCIuY2xlYXJpbmctY29udGFpbmVyXCIpLm91dGVyV2lkdGgoKS9mKS0xLGg9ZS5pbmRleChjKTtyZXR1cm4gdGhpcy5zZXR0aW5ncy51cF9jb3VudD1nLGQ9dGhpcy5hZGphY2VudCh0aGlzLnNldHRpbmdzLnByZXZfaW5kZXgsaCk/aD5nJiZoPnRoaXMuc2V0dGluZ3MucHJldl9pbmRleD9cInJpZ2h0XCI6aD5nLTEmJmg8PXRoaXMuc2V0dGluZ3MucHJldl9pbmRleD9cImxlZnRcIjohMTpcInNraXBcIix0aGlzLnNldHRpbmdzLnByZXZfaW5kZXg9aCxkfSxhZGphY2VudDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1iKzE7Yz49Yi0xO2MtLSlpZihjPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sbG9jazpmdW5jdGlvbigpe3RoaXMuc2V0dGluZ3MubG9ja2VkPSEwfSx1bmxvY2s6ZnVuY3Rpb24oKXt0aGlzLnNldHRpbmdzLmxvY2tlZD0hMX0sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0dGluZ3MubG9ja2VkfSxvZmY6ZnVuY3Rpb24oKXt0aGlzLlModGhpcy5zY29wZSkub2ZmKFwiLmZuZHRuLmNsZWFyaW5nXCIpLHRoaXMuUyhiKS5vZmYoXCIuZm5kdG4uY2xlYXJpbmdcIil9LHJlZmxvdzpmdW5jdGlvbigpe3RoaXMuaW5pdCgpfX19KGpRdWVyeSx3aW5kb3csd2luZG93LmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtGb3VuZGF0aW9uLmxpYnMuZHJvcGRvd249e25hbWU6XCJkcm9wZG93blwiLHZlcnNpb246XCI1LjUuM1wiLHNldHRpbmdzOnthY3RpdmVfY2xhc3M6XCJvcGVuXCIsZGlzYWJsZWRfY2xhc3M6XCJkaXNhYmxlZFwiLG1lZ2FfY2xhc3M6XCJtZWdhXCIsYWxpZ246XCJib3R0b21cIixpc19ob3ZlcjohMSxob3Zlcl90aW1lb3V0OjE1MCxvcGVuZWQ6ZnVuY3Rpb24oKXt9LGNsb3NlZDpmdW5jdGlvbigpe319LGluaXQ6ZnVuY3Rpb24oYixjLGQpe0ZvdW5kYXRpb24uaW5oZXJpdCh0aGlzLFwidGhyb3R0bGVcIiksYS5leHRlbmQoITAsdGhpcy5zZXR0aW5ncyxjLGQpLHRoaXMuYmluZGluZ3MoYyxkKX0sZXZlbnRzOmZ1bmN0aW9uKGQpe3ZhciBlPXRoaXMsZj1lLlM7Zih0aGlzLnNjb3BlKS5vZmYoXCIuZHJvcGRvd25cIikub24oXCJjbGljay5mbmR0bi5kcm9wZG93blwiLFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIsZnVuY3Rpb24oYil7dmFyIGM9Zih0aGlzKS5kYXRhKGUuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpfHxlLnNldHRpbmdzOyghYy5pc19ob3Zlcnx8TW9kZXJuaXpyLnRvdWNoKSYmKGIucHJldmVudERlZmF1bHQoKSxmKHRoaXMpLnBhcmVudChcIltkYXRhLXJldmVhbC1pZF1cIikubGVuZ3RoJiZiLnN0b3BQcm9wYWdhdGlvbigpLGUudG9nZ2xlKGEodGhpcykpKX0pLm9uKFwibW91c2VlbnRlci5mbmR0bi5kcm9wZG93blwiLFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdLCBbXCIrdGhpcy5hdHRyX25hbWUoKStcIi1jb250ZW50XVwiLGZ1bmN0aW9uKGEpe3ZhciBiLGMsZD1mKHRoaXMpO2NsZWFyVGltZW91dChlLnRpbWVvdXQpLGQuZGF0YShlLmRhdGFfYXR0cigpKT8oYj1mKFwiI1wiK2QuZGF0YShlLmRhdGFfYXR0cigpKSksYz1kKTooYj1kLGM9ZihcIltcIitlLmF0dHJfbmFtZSgpKyc9XCInK2IuYXR0cihcImlkXCIpKydcIl0nKSk7dmFyIGc9Yy5kYXRhKGUuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpfHxlLnNldHRpbmdzO2YoYS5jdXJyZW50VGFyZ2V0KS5kYXRhKGUuZGF0YV9hdHRyKCkpJiZnLmlzX2hvdmVyJiZlLmNsb3NlYWxsLmNhbGwoZSksZy5pc19ob3ZlciYmZS5vcGVuLmFwcGx5KGUsW2IsY10pfSkub24oXCJtb3VzZWxlYXZlLmZuZHRuLmRyb3Bkb3duXCIsXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIl0sIFtcIit0aGlzLmF0dHJfbmFtZSgpK1wiLWNvbnRlbnRdXCIsZnVuY3Rpb24oYSl7dmFyIGIsYz1mKHRoaXMpO2lmKGMuZGF0YShlLmRhdGFfYXR0cigpKSliPWMuZGF0YShlLmRhdGFfYXR0cighMCkrXCItaW5pdFwiKXx8ZS5zZXR0aW5ncztlbHNlIHZhciBkPWYoXCJbXCIrZS5hdHRyX25hbWUoKSsnPVwiJytmKHRoaXMpLmF0dHIoXCJpZFwiKSsnXCJdJyksYj1kLmRhdGEoZS5hdHRyX25hbWUoITApK1wiLWluaXRcIil8fGUuc2V0dGluZ3M7ZS50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjLmRhdGEoZS5kYXRhX2F0dHIoKSk/Yi5pc19ob3ZlciYmZS5jbG9zZS5jYWxsKGUsZihcIiNcIitjLmRhdGEoZS5kYXRhX2F0dHIoKSkpKTpiLmlzX2hvdmVyJiZlLmNsb3NlLmNhbGwoZSxjKX0uYmluZCh0aGlzKSxiLmhvdmVyX3RpbWVvdXQpfSkub24oXCJjbGljay5mbmR0bi5kcm9wZG93blwiLGZ1bmN0aW9uKGIpe3ZhciBkPWYoYi50YXJnZXQpLmNsb3Nlc3QoXCJbXCIrZS5hdHRyX25hbWUoKStcIi1jb250ZW50XVwiKSxnPWQuZmluZChcImFcIik7cmV0dXJuIGcubGVuZ3RoPjAmJlwiZmFsc2VcIiE9PWQuYXR0cihcImFyaWEtYXV0b2Nsb3NlXCIpJiZlLmNsb3NlLmNhbGwoZSxmKFwiW1wiK2UuYXR0cl9uYW1lKCkrXCItY29udGVudF1cIikpLGIudGFyZ2V0IT09YyYmIWEuY29udGFpbnMoYy5kb2N1bWVudEVsZW1lbnQsYi50YXJnZXQpfHxmKGIudGFyZ2V0KS5jbG9zZXN0KFwiW1wiK2UuYXR0cl9uYW1lKCkrXCJdXCIpLmxlbmd0aD4wP3ZvaWQgMDohZihiLnRhcmdldCkuZGF0YShcInJldmVhbElkXCIpJiZkLmxlbmd0aD4wJiYoZihiLnRhcmdldCkuaXMoXCJbXCIrZS5hdHRyX25hbWUoKStcIi1jb250ZW50XVwiKXx8YS5jb250YWlucyhkLmZpcnN0KClbMF0sYi50YXJnZXQpKT92b2lkIGIuc3RvcFByb3BhZ2F0aW9uKCk6dm9pZCBlLmNsb3NlLmNhbGwoZSxmKFwiW1wiK2UuYXR0cl9uYW1lKCkrXCItY29udGVudF1cIikpfSkub24oXCJvcGVuZWQuZm5kdG4uZHJvcGRvd25cIixcIltcIitlLmF0dHJfbmFtZSgpK1wiLWNvbnRlbnRdXCIsZnVuY3Rpb24oKXtlLnNldHRpbmdzLm9wZW5lZC5jYWxsKHRoaXMpfSkub24oXCJjbG9zZWQuZm5kdG4uZHJvcGRvd25cIixcIltcIitlLmF0dHJfbmFtZSgpK1wiLWNvbnRlbnRdXCIsZnVuY3Rpb24oKXtlLnNldHRpbmdzLmNsb3NlZC5jYWxsKHRoaXMpfSksZihiKS5vZmYoXCIuZHJvcGRvd25cIikub24oXCJyZXNpemUuZm5kdG4uZHJvcGRvd25cIixlLnRocm90dGxlKGZ1bmN0aW9uKCl7ZS5yZXNpemUuY2FsbChlKX0sNTApKSx0aGlzLnJlc2l6ZSgpfSxjbG9zZTpmdW5jdGlvbihiKXt2YXIgYz10aGlzO2IuZWFjaChmdW5jdGlvbihkKXt2YXIgZT1hKFwiW1wiK2MuYXR0cl9uYW1lKCkrXCI9XCIrYltkXS5pZCtcIl1cIil8fGEoXCJhcmlhLWNvbnRyb2xzPVwiK2JbZF0uaWQrXCJdXCIpO2UuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLGMuUyh0aGlzKS5oYXNDbGFzcyhjLnNldHRpbmdzLmFjdGl2ZV9jbGFzcykmJihjLlModGhpcykuY3NzKEZvdW5kYXRpb24ucnRsP1wicmlnaHRcIjpcImxlZnRcIixcIi05OTk5OXB4XCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKS5yZW1vdmVDbGFzcyhjLnNldHRpbmdzLmFjdGl2ZV9jbGFzcykucHJldihcIltcIitjLmF0dHJfbmFtZSgpK1wiXVwiKS5yZW1vdmVDbGFzcyhjLnNldHRpbmdzLmFjdGl2ZV9jbGFzcykucmVtb3ZlRGF0YShcInRhcmdldFwiKSxjLlModGhpcykudHJpZ2dlcihcImNsb3NlZC5mbmR0bi5kcm9wZG93blwiLFtiXSkpfSksYi5yZW1vdmVDbGFzcyhcImYtb3Blbi1cIit0aGlzLmF0dHJfbmFtZSghMCkpfSxjbG9zZWFsbDpmdW5jdGlvbigpe3ZhciBiPXRoaXM7YS5lYWNoKGIuUyhcIi5mLW9wZW4tXCIrdGhpcy5hdHRyX25hbWUoITApKSxmdW5jdGlvbigpe2IuY2xvc2UuY2FsbChiLGIuUyh0aGlzKSl9KX0sb3BlbjpmdW5jdGlvbihhLGIpe3RoaXMuY3NzKGEuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5hY3RpdmVfY2xhc3MpLGIpLGEucHJldihcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiXVwiKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmFjdGl2ZV9jbGFzcyksYS5kYXRhKFwidGFyZ2V0XCIsYi5nZXQoMCkpLnRyaWdnZXIoXCJvcGVuZWQuZm5kdG4uZHJvcGRvd25cIixbYSxiXSksYS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpLGIuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIiksYS5mb2N1cygpLGEuYWRkQ2xhc3MoXCJmLW9wZW4tXCIrdGhpcy5hdHRyX25hbWUoITApKX0sZGF0YV9hdHRyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubmFtZXNwYWNlLmxlbmd0aD4wP3RoaXMubmFtZXNwYWNlK1wiLVwiK3RoaXMubmFtZTp0aGlzLm5hbWV9LHRvZ2dsZTpmdW5jdGlvbihhKXtpZighYS5oYXNDbGFzcyh0aGlzLnNldHRpbmdzLmRpc2FibGVkX2NsYXNzKSl7dmFyIGI9dGhpcy5TKFwiI1wiK2EuZGF0YSh0aGlzLmRhdGFfYXR0cigpKSk7MCE9PWIubGVuZ3RoJiYodGhpcy5jbG9zZS5jYWxsKHRoaXMsdGhpcy5TKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCItY29udGVudF1cIikubm90KGIpKSxiLmhhc0NsYXNzKHRoaXMuc2V0dGluZ3MuYWN0aXZlX2NsYXNzKT8odGhpcy5jbG9zZS5jYWxsKHRoaXMsYiksYi5kYXRhKFwidGFyZ2V0XCIpIT09YS5nZXQoMCkmJnRoaXMub3Blbi5jYWxsKHRoaXMsYixhKSk6dGhpcy5vcGVuLmNhbGwodGhpcyxiLGEpKX19LHJlc2l6ZTpmdW5jdGlvbigpe3ZhciBiPXRoaXMuUyhcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiLWNvbnRlbnRdLm9wZW5cIiksYz1hKGIuZGF0YShcInRhcmdldFwiKSk7Yi5sZW5ndGgmJmMubGVuZ3RoJiZ0aGlzLmNzcyhiLGMpfSxjc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1NYXRoLm1heCgoYi53aWR0aCgpLWEud2lkdGgoKSkvMiw4KSxkPWIuZGF0YSh0aGlzLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKXx8dGhpcy5zZXR0aW5ncyxlPWEucGFyZW50KCkuY3NzKFwib3ZlcmZsb3cteVwiKXx8YS5wYXJlbnQoKS5jc3MoXCJvdmVyZmxvd1wiKTtpZih0aGlzLmNsZWFyX2lkeCgpLHRoaXMuc21hbGwoKSl7dmFyIGY9dGhpcy5kaXJzLmJvdHRvbS5jYWxsKGEsYixkKTthLmF0dHIoXCJzdHlsZVwiLFwiXCIpLnJlbW92ZUNsYXNzKFwiZHJvcC1sZWZ0IGRyb3AtcmlnaHQgZHJvcC10b3BcIikuY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsd2lkdGg6XCI5NSVcIixcIm1heC13aWR0aFwiOlwibm9uZVwiLHRvcDpmLnRvcH0pLGEuY3NzKEZvdW5kYXRpb24ucnRsP1wicmlnaHRcIjpcImxlZnRcIixjKX1lbHNlIGlmKFwidmlzaWJsZVwiIT09ZSl7dmFyIGc9YlswXS5vZmZzZXRUb3ArYlswXS5vZmZzZXRIZWlnaHQ7YS5hdHRyKFwic3R5bGVcIixcIlwiKS5jc3Moe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6Z30pLGEuY3NzKEZvdW5kYXRpb24ucnRsP1wicmlnaHRcIjpcImxlZnRcIixjKX1lbHNlIHRoaXMuc3R5bGUoYSxiLGQpO3JldHVybiBhfSxzdHlsZTpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5leHRlbmQoe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIn0sdGhpcy5kaXJzW2QuYWxpZ25dLmNhbGwoYixjLGQpKTtiLmF0dHIoXCJzdHlsZVwiLFwiXCIpLmNzcyhlKX0sZGlyczp7X2Jhc2U6ZnVuY3Rpb24oYSxkKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudCgpLGY9ZS5vZmZzZXQoKSxnPWEub2Zmc2V0KCk7Zy50b3AtPWYudG9wLGcubGVmdC09Zi5sZWZ0LGcubWlzc1JpZ2h0PSExLGcubWlzc1RvcD0hMSxnLm1pc3NMZWZ0PSExLGcubGVmdFJpZ2h0RmxhZz0hMTt2YXIgaCxpPWIuaW5uZXJXaWR0aDtoPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJvd1wiKVswXT9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyb3dcIilbMF0uY2xpZW50V2lkdGg6aTt2YXIgaj0oaS1oKS8yLGs9aDtpZighdGhpcy5oYXNDbGFzcyhcIm1lZ2FcIikmJiFkLmlnbm9yZV9yZXBvc2l0aW9uaW5nKXt2YXIgbD10aGlzLm91dGVyV2lkdGgoKSxtPWEub2Zmc2V0KCkubGVmdDthLm9mZnNldCgpLnRvcDw9dGhpcy5vdXRlckhlaWdodCgpJiYoZy5taXNzVG9wPSEwLGs9aS1qLGcubGVmdFJpZ2h0RmxhZz0hMCksbStsPm0raiYmbS1qPmwmJihnLm1pc3NSaWdodD0hMCxnLm1pc3NMZWZ0PSExKSwwPj1tLWwmJihnLm1pc3NMZWZ0PSEwLGcubWlzc1JpZ2h0PSExKX1yZXR1cm4gZ30sdG9wOmZ1bmN0aW9uKGEsYil7dmFyIGM9Rm91bmRhdGlvbi5saWJzLmRyb3Bkb3duLGQ9Yy5kaXJzLl9iYXNlLmNhbGwodGhpcyxhLGIpO3JldHVybiB0aGlzLmFkZENsYXNzKFwiZHJvcC10b3BcIiksMT09ZC5taXNzVG9wJiYoZC50b3A9ZC50b3ArYS5vdXRlckhlaWdodCgpK3RoaXMub3V0ZXJIZWlnaHQoKSxcclxudGhpcy5yZW1vdmVDbGFzcyhcImRyb3AtdG9wXCIpKSwxPT1kLm1pc3NSaWdodCYmKGQubGVmdD1kLmxlZnQtdGhpcy5vdXRlcldpZHRoKCkrYS5vdXRlcldpZHRoKCkpLChhLm91dGVyV2lkdGgoKTx0aGlzLm91dGVyV2lkdGgoKXx8Yy5zbWFsbCgpfHx0aGlzLmhhc0NsYXNzKGIubWVnYV9tZW51KSkmJmMuYWRqdXN0X3BpcCh0aGlzLGEsYixkKSxGb3VuZGF0aW9uLnJ0bD97bGVmdDpkLmxlZnQtdGhpcy5vdXRlcldpZHRoKCkrYS5vdXRlcldpZHRoKCksdG9wOmQudG9wLXRoaXMub3V0ZXJIZWlnaHQoKX06e2xlZnQ6ZC5sZWZ0LHRvcDpkLnRvcC10aGlzLm91dGVySGVpZ2h0KCl9fSxib3R0b206ZnVuY3Rpb24oYSxiKXt2YXIgYz1Gb3VuZGF0aW9uLmxpYnMuZHJvcGRvd24sZD1jLmRpcnMuX2Jhc2UuY2FsbCh0aGlzLGEsYik7cmV0dXJuIDE9PWQubWlzc1JpZ2h0JiYoZC5sZWZ0PWQubGVmdC10aGlzLm91dGVyV2lkdGgoKSthLm91dGVyV2lkdGgoKSksKGEub3V0ZXJXaWR0aCgpPHRoaXMub3V0ZXJXaWR0aCgpfHxjLnNtYWxsKCl8fHRoaXMuaGFzQ2xhc3MoYi5tZWdhX21lbnUpKSYmYy5hZGp1c3RfcGlwKHRoaXMsYSxiLGQpLGMucnRsP3tsZWZ0OmQubGVmdC10aGlzLm91dGVyV2lkdGgoKSthLm91dGVyV2lkdGgoKSx0b3A6ZC50b3ArYS5vdXRlckhlaWdodCgpfTp7bGVmdDpkLmxlZnQsdG9wOmQudG9wK2Eub3V0ZXJIZWlnaHQoKX19LGxlZnQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1Gb3VuZGF0aW9uLmxpYnMuZHJvcGRvd24uZGlycy5fYmFzZS5jYWxsKHRoaXMsYSxiKTtyZXR1cm4gdGhpcy5hZGRDbGFzcyhcImRyb3AtbGVmdFwiKSwxPT1jLm1pc3NMZWZ0JiYoYy5sZWZ0PWMubGVmdCt0aGlzLm91dGVyV2lkdGgoKSxjLnRvcD1jLnRvcCthLm91dGVySGVpZ2h0KCksdGhpcy5yZW1vdmVDbGFzcyhcImRyb3AtbGVmdFwiKSkse2xlZnQ6Yy5sZWZ0LXRoaXMub3V0ZXJXaWR0aCgpLHRvcDpjLnRvcH19LHJpZ2h0OmZ1bmN0aW9uKGEsYil7dmFyIGM9Rm91bmRhdGlvbi5saWJzLmRyb3Bkb3duLmRpcnMuX2Jhc2UuY2FsbCh0aGlzLGEsYik7dGhpcy5hZGRDbGFzcyhcImRyb3AtcmlnaHRcIiksMT09Yy5taXNzUmlnaHQ/KGMubGVmdD1jLmxlZnQtdGhpcy5vdXRlcldpZHRoKCksYy50b3A9Yy50b3ArYS5vdXRlckhlaWdodCgpLHRoaXMucmVtb3ZlQ2xhc3MoXCJkcm9wLXJpZ2h0XCIpKTpjLnRyaWdnZXJlZFJpZ2h0PSEwO3ZhciBkPUZvdW5kYXRpb24ubGlicy5kcm9wZG93bjtyZXR1cm4oYS5vdXRlcldpZHRoKCk8dGhpcy5vdXRlcldpZHRoKCl8fGQuc21hbGwoKXx8dGhpcy5oYXNDbGFzcyhiLm1lZ2FfbWVudSkpJiZkLmFkanVzdF9waXAodGhpcyxhLGIsYykse2xlZnQ6Yy5sZWZ0K2Eub3V0ZXJXaWR0aCgpLHRvcDpjLnRvcH19fSxhZGp1c3RfcGlwOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPUZvdW5kYXRpb24uc3R5bGVzaGVldCxmPTg7YS5oYXNDbGFzcyhjLm1lZ2FfY2xhc3MpP2Y9ZC5sZWZ0K2Iub3V0ZXJXaWR0aCgpLzItODp0aGlzLnNtYWxsKCkmJihmKz1kLmxlZnQtOCksdGhpcy5ydWxlX2lkeD1lLmNzc1J1bGVzLmxlbmd0aDt2YXIgZz1cIi5mLWRyb3Bkb3duLm9wZW46YmVmb3JlXCIsaD1cIi5mLWRyb3Bkb3duLm9wZW46YWZ0ZXJcIixpPVwibGVmdDogXCIrZitcInB4O1wiLGo9XCJsZWZ0OiBcIisoZi0xKStcInB4O1wiOzE9PWQubWlzc1JpZ2h0JiYoZj1hLm91dGVyV2lkdGgoKS0yMyxnPVwiLmYtZHJvcGRvd24ub3BlbjpiZWZvcmVcIixoPVwiLmYtZHJvcGRvd24ub3BlbjphZnRlclwiLGk9XCJsZWZ0OiBcIitmK1wicHg7XCIsaj1cImxlZnQ6IFwiKyhmLTEpK1wicHg7XCIpLDE9PWQudHJpZ2dlcmVkUmlnaHQmJihnPVwiLmYtZHJvcGRvd24ub3BlbjpiZWZvcmVcIixoPVwiLmYtZHJvcGRvd24ub3BlbjphZnRlclwiLGk9XCJsZWZ0Oi0xMnB4O1wiLGo9XCJsZWZ0Oi0xNHB4O1wiKSxlLmluc2VydFJ1bGU/KGUuaW5zZXJ0UnVsZShbZyxcIntcIixpLFwifVwiXS5qb2luKFwiIFwiKSx0aGlzLnJ1bGVfaWR4KSxlLmluc2VydFJ1bGUoW2gsXCJ7XCIsaixcIn1cIl0uam9pbihcIiBcIiksdGhpcy5ydWxlX2lkeCsxKSk6KGUuYWRkUnVsZShnLGksdGhpcy5ydWxlX2lkeCksZS5hZGRSdWxlKGgsaix0aGlzLnJ1bGVfaWR4KzEpKX0sY2xlYXJfaWR4OmZ1bmN0aW9uKCl7dmFyIGE9Rm91bmRhdGlvbi5zdHlsZXNoZWV0O1widW5kZWZpbmVkXCIhPXR5cGVvZiB0aGlzLnJ1bGVfaWR4JiYoYS5kZWxldGVSdWxlKHRoaXMucnVsZV9pZHgpLGEuZGVsZXRlUnVsZSh0aGlzLnJ1bGVfaWR4KSxkZWxldGUgdGhpcy5ydWxlX2lkeCl9LHNtYWxsOmZ1bmN0aW9uKCl7cmV0dXJuIG1hdGNoTWVkaWEoRm91bmRhdGlvbi5tZWRpYV9xdWVyaWVzLnNtYWxsKS5tYXRjaGVzJiYhbWF0Y2hNZWRpYShGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMubWVkaXVtKS5tYXRjaGVzfSxvZmY6ZnVuY3Rpb24oKXt0aGlzLlModGhpcy5zY29wZSkub2ZmKFwiLmZuZHRuLmRyb3Bkb3duXCIpLHRoaXMuUyhcImh0bWwsIGJvZHlcIikub2ZmKFwiLmZuZHRuLmRyb3Bkb3duXCIpLHRoaXMuUyhiKS5vZmYoXCIuZm5kdG4uZHJvcGRvd25cIiksdGhpcy5TKFwiW2RhdGEtZHJvcGRvd24tY29udGVudF1cIikub2ZmKFwiLmZuZHRuLmRyb3Bkb3duXCIpfSxyZWZsb3c6ZnVuY3Rpb24oKXt9fX0oalF1ZXJ5LHdpbmRvdyx3aW5kb3cuZG9jdW1lbnQpLGZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO0ZvdW5kYXRpb24ubGlicy5lcXVhbGl6ZXI9e25hbWU6XCJlcXVhbGl6ZXJcIix2ZXJzaW9uOlwiNS41LjNcIixzZXR0aW5nczp7dXNlX3RhbGxlc3Q6ITAsYmVmb3JlX2hlaWdodF9jaGFuZ2U6YS5ub29wLGFmdGVyX2hlaWdodF9jaGFuZ2U6YS5ub29wLGVxdWFsaXplX29uX3N0YWNrOiExLGFjdF9vbl9oaWRkZW5fZWw6ITF9LGluaXQ6ZnVuY3Rpb24oYSxiLGMpe0ZvdW5kYXRpb24uaW5oZXJpdCh0aGlzLFwiaW1hZ2VfbG9hZGVkXCIpLHRoaXMuYmluZGluZ3MoYixjKSx0aGlzLnJlZmxvdygpfSxldmVudHM6ZnVuY3Rpb24oKXt0aGlzLlMoYikub2ZmKFwiLmVxdWFsaXplclwiKS5vbihcInJlc2l6ZS5mbmR0bi5lcXVhbGl6ZXJcIixmdW5jdGlvbihhKXt0aGlzLnJlZmxvdygpfS5iaW5kKHRoaXMpKX0sZXF1YWxpemU6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPSExLGY9Yi5kYXRhKFwiZXF1YWxpemVyXCIpLGc9Yi5kYXRhKHRoaXMuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpfHx0aGlzLnNldHRpbmdzO2lmKGM9Zy5hY3Rfb25faGlkZGVuX2VsP2Y/Yi5maW5kKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrJy13YXRjaD1cIicrZisnXCJdJyk6Yi5maW5kKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCItd2F0Y2hdXCIpOmY/Yi5maW5kKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrJy13YXRjaD1cIicrZisnXCJdOnZpc2libGUnKTpiLmZpbmQoXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIi13YXRjaF06dmlzaWJsZVwiKSwwIT09Yy5sZW5ndGgmJihnLmJlZm9yZV9oZWlnaHRfY2hhbmdlKCksYi50cmlnZ2VyKFwiYmVmb3JlLWhlaWdodC1jaGFuZ2UuZm5kdGguZXF1YWxpemVyXCIpLGMuaGVpZ2h0KFwiaW5oZXJpdFwiKSxnLmVxdWFsaXplX29uX3N0YWNrIT09ITF8fChkPWMuZmlyc3QoKS5vZmZzZXQoKS50b3AsYy5lYWNoKGZ1bmN0aW9uKCl7cmV0dXJuIGEodGhpcykub2Zmc2V0KCkudG9wIT09ZD8oZT0hMCwhMSk6dm9pZCAwfSksIWUpKSl7dmFyIGg9Yy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzKS5vdXRlckhlaWdodCghMSl9KS5nZXQoKTtpZihnLnVzZV90YWxsZXN0KXt2YXIgaT1NYXRoLm1heC5hcHBseShudWxsLGgpO2MuY3NzKFwiaGVpZ2h0XCIsaSl9ZWxzZXt2YXIgaj1NYXRoLm1pbi5hcHBseShudWxsLGgpO2MuY3NzKFwiaGVpZ2h0XCIsail9Zy5hZnRlcl9oZWlnaHRfY2hhbmdlKCksYi50cmlnZ2VyKFwiYWZ0ZXItaGVpZ2h0LWNoYW5nZS5mbmR0bi5lcXVhbGl6ZXJcIil9fSxyZWZsb3c6ZnVuY3Rpb24oKXt2YXIgYj10aGlzO3RoaXMuUyhcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiXVwiLHRoaXMuc2NvcGUpLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5kYXRhKFwiZXF1YWxpemVyLW1xXCIpLGU9ITA7ZCYmKGQ9XCJpc19cIitkLnJlcGxhY2UoLy0vZyxcIl9cIiksRm91bmRhdGlvbi51dGlscy5oYXNPd25Qcm9wZXJ0eShkKSYmKGU9ITEpKSxiLmltYWdlX2xvYWRlZChiLlMoXCJpbWdcIix0aGlzKSxmdW5jdGlvbigpe2lmKGV8fEZvdW5kYXRpb24udXRpbHNbZF0oKSliLmVxdWFsaXplKGMpO2Vsc2V7dmFyIGE9Yy5maW5kKFwiW1wiK2IuYXR0cl9uYW1lKCkrXCItd2F0Y2hdOnZpc2libGVcIik7YS5jc3MoXCJoZWlnaHRcIixcImF1dG9cIil9fSl9KX19fShqUXVlcnksd2luZG93LHdpbmRvdy5kb2N1bWVudCksZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7Rm91bmRhdGlvbi5saWJzLmludGVyY2hhbmdlPXtuYW1lOlwiaW50ZXJjaGFuZ2VcIix2ZXJzaW9uOlwiNS41LjNcIixjYWNoZTp7fSxpbWFnZXNfbG9hZGVkOiExLG5vZGVzX2xvYWRlZDohMSxzZXR0aW5nczp7bG9hZF9hdHRyOlwiaW50ZXJjaGFuZ2VcIixuYW1lZF9xdWVyaWVzOntcImRlZmF1bHRcIjpcIm9ubHkgc2NyZWVuXCIsc21hbGw6Rm91bmRhdGlvbi5tZWRpYV9xdWVyaWVzLnNtYWxsLFwic21hbGwtb25seVwiOkZvdW5kYXRpb24ubWVkaWFfcXVlcmllc1tcInNtYWxsLW9ubHlcIl0sbWVkaXVtOkZvdW5kYXRpb24ubWVkaWFfcXVlcmllcy5tZWRpdW0sXCJtZWRpdW0tb25seVwiOkZvdW5kYXRpb24ubWVkaWFfcXVlcmllc1tcIm1lZGl1bS1vbmx5XCJdLGxhcmdlOkZvdW5kYXRpb24ubWVkaWFfcXVlcmllcy5sYXJnZSxcImxhcmdlLW9ubHlcIjpGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXNbXCJsYXJnZS1vbmx5XCJdLHhsYXJnZTpGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMueGxhcmdlLFwieGxhcmdlLW9ubHlcIjpGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXNbXCJ4bGFyZ2Utb25seVwiXSx4eGxhcmdlOkZvdW5kYXRpb24ubWVkaWFfcXVlcmllcy54eGxhcmdlLGxhbmRzY2FwZTpcIm9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIixwb3J0cmFpdDpcIm9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVwiLHJldGluYTpcIm9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweClcIn0sZGlyZWN0aXZlczp7cmVwbGFjZTpmdW5jdGlvbihiLGMsZCl7aWYobnVsbCE9PWImJi9JTUcvLnRlc3QoYlswXS5ub2RlTmFtZSkpe3ZhciBlPWEuZWFjaChiLGZ1bmN0aW9uKCl7dGhpcy5zcmM9Y30pO2lmKG5ldyBSZWdFeHAoYyxcImlcIikudGVzdChlKSlyZXR1cm47cmV0dXJuIGIuYXR0cihcInNyY1wiLGMpLGQoYlswXS5zcmMpfXZhciBmPWIuZGF0YSh0aGlzLmRhdGFfYXR0citcIi1sYXN0LXBhdGhcIiksZz10aGlzO2lmKGYhPWMpcmV0dXJuL1xcLihnaWZ8anBnfGpwZWd8dGlmZnxwbmcpKFs/I10uKik/L2kudGVzdChjKT8oYShiKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ1cmwoXCIrYytcIilcIiksYi5kYXRhKFwiaW50ZXJjaGFuZ2UtbGFzdC1wYXRoXCIsYyksZChjKSk6YS5nZXQoYyxmdW5jdGlvbihhKXtiLmh0bWwoYSksYi5kYXRhKGcuZGF0YV9hdHRyK1wiLWxhc3QtcGF0aFwiLGMpLGQoKX0pfX19LGluaXQ6ZnVuY3Rpb24oYixjLGQpe0ZvdW5kYXRpb24uaW5oZXJpdCh0aGlzLFwidGhyb3R0bGUgcmFuZG9tX3N0clwiKSx0aGlzLmRhdGFfYXR0cj10aGlzLnNldF9kYXRhX2F0dHIoKSxhLmV4dGVuZCghMCx0aGlzLnNldHRpbmdzLGMsZCksdGhpcy5iaW5kaW5ncyhjLGQpLHRoaXMucmVmbG93KCl9LGdldF9tZWRpYV9oYXNoOmZ1bmN0aW9uKCl7dmFyIGE9XCJcIjtmb3IodmFyIGIgaW4gdGhpcy5zZXR0aW5ncy5uYW1lZF9xdWVyaWVzKWErPW1hdGNoTWVkaWEodGhpcy5zZXR0aW5ncy5uYW1lZF9xdWVyaWVzW2JdKS5tYXRjaGVzLnRvU3RyaW5nKCk7cmV0dXJuIGF9LGV2ZW50czpmdW5jdGlvbigpe3ZhciBjLGQ9dGhpcztyZXR1cm4gYShiKS5vZmYoXCIuaW50ZXJjaGFuZ2VcIikub24oXCJyZXNpemUuZm5kdG4uaW50ZXJjaGFuZ2VcIixkLnRocm90dGxlKGZ1bmN0aW9uKCl7dmFyIGE9ZC5nZXRfbWVkaWFfaGFzaCgpO2EhPT1jJiZkLnJlc2l6ZSgpLGM9YX0sNTApKSx0aGlzfSxyZXNpemU6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLmNhY2hlO2lmKCF0aGlzLmltYWdlc19sb2FkZWR8fCF0aGlzLm5vZGVzX2xvYWRlZClyZXR1cm4gdm9pZCBzZXRUaW1lb3V0KGEucHJveHkodGhpcy5yZXNpemUsdGhpcyksNTApO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPXRoaXMucmVzdWx0cyhjLGJbY10pO2QmJnRoaXMuc2V0dGluZ3MuZGlyZWN0aXZlc1tkLnNjZW5hcmlvWzFdXS5jYWxsKHRoaXMsZC5lbCxkLnNjZW5hcmlvWzBdLGZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50c1swXWluc3RhbmNlb2YgQXJyYXkpdmFyIGI9YXJndW1lbnRzWzBdO2Vsc2UgdmFyIGI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApO3JldHVybiBmdW5jdGlvbigpe2EuZWwudHJpZ2dlcihhLnNjZW5hcmlvWzFdLGIpfX0oZCkpfX0scmVzdWx0czpmdW5jdGlvbihhLGIpe3ZhciBjPWIubGVuZ3RoO2lmKGM+MClmb3IodmFyIGQ9dGhpcy5TKFwiW1wiK3RoaXMuYWRkX25hbWVzcGFjZShcImRhdGEtdXVpZFwiKSsnPVwiJythKydcIl0nKTtjLS07KXt2YXIgZSxmPWJbY11bMl07aWYoZT10aGlzLnNldHRpbmdzLm5hbWVkX3F1ZXJpZXMuaGFzT3duUHJvcGVydHkoZik/bWF0Y2hNZWRpYSh0aGlzLnNldHRpbmdzLm5hbWVkX3F1ZXJpZXNbZl0pOm1hdGNoTWVkaWEoZiksZS5tYXRjaGVzKXJldHVybntlbDpkLHNjZW5hcmlvOmJbY119fXJldHVybiExfSxsb2FkOmZ1bmN0aW9uKGEsYil7cmV0dXJuKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0aGlzW1wiY2FjaGVkX1wiK2FdfHxiKSYmdGhpc1tcInVwZGF0ZV9cIithXSgpLHRoaXNbXCJjYWNoZWRfXCIrYV19LHVwZGF0ZV9pbWFnZXM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLlMoXCJpbWdbXCIrdGhpcy5kYXRhX2F0dHIrXCJdXCIpLGI9YS5sZW5ndGgsYz1iLGQ9MCxlPXRoaXMuZGF0YV9hdHRyO2Zvcih0aGlzLmNhY2hlPXt9LHRoaXMuY2FjaGVkX2ltYWdlcz1bXSx0aGlzLmltYWdlc19sb2FkZWQ9MD09PWI7Yy0tOyl7aWYoZCsrLGFbY10pe3ZhciBmPWFbY10uZ2V0QXR0cmlidXRlKGUpfHxcIlwiO2YubGVuZ3RoPjAmJnRoaXMuY2FjaGVkX2ltYWdlcy5wdXNoKGFbY10pfWQ9PT1iJiYodGhpcy5pbWFnZXNfbG9hZGVkPSEwLHRoaXMuZW5oYW5jZShcImltYWdlc1wiKSl9cmV0dXJuIHRoaXN9LHVwZGF0ZV9ub2RlczpmdW5jdGlvbigpe3ZhciBhPXRoaXMuUyhcIltcIit0aGlzLmRhdGFfYXR0citcIl1cIikubm90KFwiaW1nXCIpLGI9YS5sZW5ndGgsYz1iLGQ9MCxlPXRoaXMuZGF0YV9hdHRyO2Zvcih0aGlzLmNhY2hlZF9ub2Rlcz1bXSx0aGlzLm5vZGVzX2xvYWRlZD0wPT09YjtjLS07KXtkKys7dmFyIGY9YVtjXS5nZXRBdHRyaWJ1dGUoZSl8fFwiXCI7Zi5sZW5ndGg+MCYmdGhpcy5jYWNoZWRfbm9kZXMucHVzaChhW2NdKSxkPT09YiYmKHRoaXMubm9kZXNfbG9hZGVkPSEwLHRoaXMuZW5oYW5jZShcIm5vZGVzXCIpKX1yZXR1cm4gdGhpc30sZW5oYW5jZTpmdW5jdGlvbihjKXtmb3IodmFyIGQ9dGhpc1tcImNhY2hlZF9cIitjXS5sZW5ndGg7ZC0tOyl0aGlzLm9iamVjdChhKHRoaXNbXCJjYWNoZWRfXCIrY11bZF0pKTtyZXR1cm4gYShiKS50cmlnZ2VyKFwicmVzaXplLmZuZHRuLmludGVyY2hhbmdlXCIpfSxjb252ZXJ0X2RpcmVjdGl2ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnRyaW0oYSk7cmV0dXJuIGIubGVuZ3RoPjA/YjpcInJlcGxhY2VcIn0scGFyc2Vfc2NlbmFyaW86ZnVuY3Rpb24oYSl7dmFyIGI9YVswXS5tYXRjaCgvKC4rKSxcXHMqKFxcdyspXFxzKiQvKSxjPWFbMV0ubWF0Y2goLyguKilcXCkvKTtpZihiKXZhciBkPWJbMV0sZT1iWzJdO2Vsc2UgdmFyIGY9YVswXS5zcGxpdCgvLFxccyokLyksZD1mWzBdLGU9XCJcIjtyZXR1cm5bdGhpcy50cmltKGQpLHRoaXMuY29udmVydF9kaXJlY3RpdmUoZSksdGhpcy50cmltKGNbMV0pXX0sb2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMucGFyc2VfZGF0YV9hdHRyKGEpLGM9W10sZD1iLmxlbmd0aDtpZihkPjApZm9yKDtkLS07KXt2YXIgZT1iW2RdLnNwbGl0KC8sXFxzP1xcKC8pO2lmKGUubGVuZ3RoPjEpe3ZhciBmPXRoaXMucGFyc2Vfc2NlbmFyaW8oZSk7Yy5wdXNoKGYpfX1yZXR1cm4gdGhpcy5zdG9yZShhLGMpfSxzdG9yZTpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMucmFuZG9tX3N0cigpLGQ9YS5kYXRhKHRoaXMuYWRkX25hbWVzcGFjZShcInV1aWRcIiwhMCkpO3JldHVybiB0aGlzLmNhY2hlW2RdP3RoaXMuY2FjaGVbZF06KGEuYXR0cih0aGlzLmFkZF9uYW1lc3BhY2UoXCJkYXRhLXV1aWRcIiksYyksdGhpcy5jYWNoZVtjXT1iKX0sdHJpbTpmdW5jdGlvbihiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYj9hLnRyaW0oYik6Yn0sc2V0X2RhdGFfYXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gYT90aGlzLm5hbWVzcGFjZS5sZW5ndGg+MD90aGlzLm5hbWVzcGFjZStcIi1cIit0aGlzLnNldHRpbmdzLmxvYWRfYXR0cjp0aGlzLnNldHRpbmdzLmxvYWRfYXR0cjp0aGlzLm5hbWVzcGFjZS5sZW5ndGg+MD9cImRhdGEtXCIrdGhpcy5uYW1lc3BhY2UrXCItXCIrdGhpcy5zZXR0aW5ncy5sb2FkX2F0dHI6XCJkYXRhLVwiK3RoaXMuc2V0dGluZ3MubG9hZF9hdHRyfSxwYXJzZV9kYXRhX2F0dHI6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWEuYXR0cih0aGlzLmF0dHJfbmFtZSgpKS5zcGxpdCgvXFxbKC4qPylcXF0vKSxjPWIubGVuZ3RoLGQ9W107Yy0tOyliW2NdLnJlcGxhY2UoL1tcXFdcXGRdKy8sXCJcIikubGVuZ3RoPjQmJmQucHVzaChiW2NdKTtyZXR1cm4gZH0scmVmbG93OmZ1bmN0aW9uKCl7dGhpcy5sb2FkKFwiaW1hZ2VzXCIsITApLHRoaXMubG9hZChcIm5vZGVzXCIsITApfX19KGpRdWVyeSx3aW5kb3csd2luZG93LmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtGb3VuZGF0aW9uLmxpYnMuam95cmlkZT17bmFtZTpcImpveXJpZGVcIix2ZXJzaW9uOlwiNS41LjNcIixkZWZhdWx0czp7ZXhwb3NlOiExLG1vZGFsOiEwLGtleWJvYXJkOiEwLHRpcF9sb2NhdGlvbjpcImJvdHRvbVwiLG51Yl9wb3NpdGlvbjpcImF1dG9cIixzY3JvbGxfc3BlZWQ6MTUwMCxzY3JvbGxfYW5pbWF0aW9uOlwibGluZWFyXCIsdGltZXI6MCxzdGFydF90aW1lcl9vbl9jbGljazohMCxzdGFydF9vZmZzZXQ6MCxuZXh0X2J1dHRvbjohMCxwcmV2X2J1dHRvbjohMCx0aXBfYW5pbWF0aW9uOlwiZmFkZVwiLHBhdXNlX2FmdGVyOltdLGV4cG9zZWQ6W10sdGlwX2FuaW1hdGlvbl9mYWRlX3NwZWVkOjMwMCxjb29raWVfbW9uc3RlcjohMSxjb29raWVfbmFtZTpcImpveXJpZGVcIixjb29raWVfZG9tYWluOiExLGNvb2tpZV9leHBpcmVzOjM2NSx0aXBfY29udGFpbmVyOlwiYm9keVwiLGFib3J0X29uX2Nsb3NlOiEwLHRpcF9sb2NhdGlvbl9wYXR0ZXJuczp7dG9wOltcImJvdHRvbVwiXSxib3R0b206W10sbGVmdDpbXCJyaWdodFwiLFwidG9wXCIsXCJib3R0b21cIl0scmlnaHQ6W1wibGVmdFwiLFwidG9wXCIsXCJib3R0b21cIl19LHBvc3RfcmlkZV9jYWxsYmFjazpmdW5jdGlvbigpe30scG9zdF9zdGVwX2NhbGxiYWNrOmZ1bmN0aW9uKCl7fSxwcmVfc3RlcF9jYWxsYmFjazpmdW5jdGlvbigpe30scHJlX3JpZGVfY2FsbGJhY2s6ZnVuY3Rpb24oKXt9LHBvc3RfZXhwb3NlX2NhbGxiYWNrOmZ1bmN0aW9uKCl7fSx0ZW1wbGF0ZTp7bGluazonPGEgaHJlZj1cIiNjbG9zZVwiIGNsYXNzPVwiam95cmlkZS1jbG9zZS10aXBcIj4mdGltZXM7PC9hPicsdGltZXI6JzxkaXYgY2xhc3M9XCJqb3lyaWRlLXRpbWVyLWluZGljYXRvci13cmFwXCI+PHNwYW4gY2xhc3M9XCJqb3lyaWRlLXRpbWVyLWluZGljYXRvclwiPjwvc3Bhbj48L2Rpdj4nLHRpcDonPGRpdiBjbGFzcz1cImpveXJpZGUtdGlwLWd1aWRlXCI+PHNwYW4gY2xhc3M9XCJqb3lyaWRlLW51YlwiPjwvc3Bhbj48L2Rpdj4nLHdyYXBwZXI6JzxkaXYgY2xhc3M9XCJqb3lyaWRlLWNvbnRlbnQtd3JhcHBlclwiPjwvZGl2PicsYnV0dG9uOic8YSBocmVmPVwiI1wiIGNsYXNzPVwic21hbGwgYnV0dG9uIGpveXJpZGUtbmV4dC10aXBcIj48L2E+JyxwcmV2X2J1dHRvbjonPGEgaHJlZj1cIiNcIiBjbGFzcz1cInNtYWxsIGJ1dHRvbiBqb3lyaWRlLXByZXYtdGlwXCI+PC9hPicsbW9kYWw6JzxkaXYgY2xhc3M9XCJqb3lyaWRlLW1vZGFsLWJnXCI+PC9kaXY+JyxleHBvc2U6JzxkaXYgY2xhc3M9XCJqb3lyaWRlLWV4cG9zZS13cmFwcGVyXCI+PC9kaXY+JyxleHBvc2VfY292ZXI6JzxkaXYgY2xhc3M9XCJqb3lyaWRlLWV4cG9zZS1jb3ZlclwiPjwvZGl2Pid9LGV4cG9zZV9hZGRfY2xhc3M6XCJcIn0saW5pdDpmdW5jdGlvbihiLGMsZCl7Rm91bmRhdGlvbi5pbmhlcml0KHRoaXMsXCJ0aHJvdHRsZSByYW5kb21fc3RyXCIpLHRoaXMuc2V0dGluZ3M9dGhpcy5zZXR0aW5nc3x8YS5leHRlbmQoe30sdGhpcy5kZWZhdWx0cyxkfHxjKSx0aGlzLmJpbmRpbmdzKGMsZCl9LGdvX25leHQ6ZnVuY3Rpb24oKXt0aGlzLnNldHRpbmdzLiRsaS5uZXh0KCkubGVuZ3RoPDE/dGhpcy5lbmQoKTp0aGlzLnNldHRpbmdzLnRpbWVyPjA/KGNsZWFyVGltZW91dCh0aGlzLnNldHRpbmdzLmF1dG9tYXRlKSx0aGlzLmhpZGUoKSx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKSk6KHRoaXMuaGlkZSgpLHRoaXMuc2hvdygpKX0sZ29fcHJldjpmdW5jdGlvbigpe3RoaXMuc2V0dGluZ3MuJGxpLnByZXYoKS5sZW5ndGg8MXx8KHRoaXMuc2V0dGluZ3MudGltZXI+MD8oY2xlYXJUaW1lb3V0KHRoaXMuc2V0dGluZ3MuYXV0b21hdGUpLHRoaXMuaGlkZSgpLHRoaXMuc2hvdyhudWxsLCEwKSx0aGlzLnN0YXJ0VGltZXIoKSk6KHRoaXMuaGlkZSgpLHRoaXMuc2hvdyhudWxsLCEwKSkpfSxldmVudHM6ZnVuY3Rpb24oKXt2YXIgYz10aGlzO2EodGhpcy5zY29wZSkub2ZmKFwiLmpveXJpZGVcIikub24oXCJjbGljay5mbmR0bi5qb3lyaWRlXCIsXCIuam95cmlkZS1uZXh0LXRpcCwgLmpveXJpZGUtbW9kYWwtYmdcIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCksdGhpcy5nb19uZXh0KCl9LmJpbmQodGhpcykpLm9uKFwiY2xpY2suZm5kdG4uam95cmlkZVwiLFwiLmpveXJpZGUtcHJldi10aXBcIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCksdGhpcy5nb19wcmV2KCl9LmJpbmQodGhpcykpLm9uKFwiY2xpY2suZm5kdG4uam95cmlkZVwiLFwiLmpveXJpZGUtY2xvc2UtdGlwXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZW5kKHRoaXMuc2V0dGluZ3MuYWJvcnRfb25fY2xvc2UpfS5iaW5kKHRoaXMpKS5vbihcImtleXVwLmZuZHRuLmpveXJpZGVcIixmdW5jdGlvbihhKXtpZih0aGlzLnNldHRpbmdzLmtleWJvYXJkJiZ0aGlzLnNldHRpbmdzLnJpZGluZylzd2l0Y2goYS53aGljaCl7Y2FzZSAzOTphLnByZXZlbnREZWZhdWx0KCksdGhpcy5nb19uZXh0KCk7YnJlYWs7Y2FzZSAzNzphLnByZXZlbnREZWZhdWx0KCksdGhpcy5nb19wcmV2KCk7YnJlYWs7Y2FzZSAyNzphLnByZXZlbnREZWZhdWx0KCksdGhpcy5lbmQodGhpcy5zZXR0aW5ncy5hYm9ydF9vbl9jbG9zZSl9fS5iaW5kKHRoaXMpKSxhKGIpLm9mZihcIi5qb3lyaWRlXCIpLm9uKFwicmVzaXplLmZuZHRuLmpveXJpZGVcIixjLnRocm90dGxlKGZ1bmN0aW9uKCl7aWYoYShcIltcIitjLmF0dHJfbmFtZSgpK1wiXVwiKS5sZW5ndGg+MCYmYy5zZXR0aW5ncy4kbmV4dF90aXAmJmMuc2V0dGluZ3MucmlkaW5nKXtpZihjLnNldHRpbmdzLmV4cG9zZWQubGVuZ3RoPjApe3ZhciBiPWEoYy5zZXR0aW5ncy5leHBvc2VkKTtiLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpO2MudW5fZXhwb3NlKGIpLGMuZXhwb3NlKGIpfSl9Yy5pc19waG9uZSgpP2MucG9zX3Bob25lKCk6Yy5wb3NfZGVmYXVsdCghMSl9fSwxMDApKX0sc3RhcnQ6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGM9YShcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiXVwiLHRoaXMuc2NvcGUpLGQ9W1widGltZXJcIixcInNjcm9sbFNwZWVkXCIsXCJzdGFydE9mZnNldFwiLFwidGlwQW5pbWF0aW9uRmFkZVNwZWVkXCIsXCJjb29raWVFeHBpcmVzXCJdLGU9ZC5sZW5ndGg7IWMubGVuZ3RoPjB8fCh0aGlzLnNldHRpbmdzLmluaXR8fHRoaXMuZXZlbnRzKCksdGhpcy5zZXR0aW5ncz1jLmRhdGEodGhpcy5hdHRyX25hbWUoITApK1wiLWluaXRcIiksdGhpcy5zZXR0aW5ncy4kY29udGVudF9lbD1jLHRoaXMuc2V0dGluZ3MuJGJvZHk9YSh0aGlzLnNldHRpbmdzLnRpcF9jb250YWluZXIpLHRoaXMuc2V0dGluZ3MuYm9keV9vZmZzZXQ9YSh0aGlzLnNldHRpbmdzLnRpcF9jb250YWluZXIpLnBvc2l0aW9uKCksdGhpcy5zZXR0aW5ncy4kdGlwX2NvbnRlbnQ9dGhpcy5zZXR0aW5ncy4kY29udGVudF9lbC5maW5kKFwiPiBsaVwiKSx0aGlzLnNldHRpbmdzLnBhdXNlZD0hMSx0aGlzLnNldHRpbmdzLmF0dGVtcHRzPTAsdGhpcy5zZXR0aW5ncy5yaWRpbmc9ITAsXCJmdW5jdGlvblwiIT10eXBlb2YgYS5jb29raWUmJih0aGlzLnNldHRpbmdzLmNvb2tpZV9tb25zdGVyPSExKSwoIXRoaXMuc2V0dGluZ3MuY29va2llX21vbnN0ZXJ8fHRoaXMuc2V0dGluZ3MuY29va2llX21vbnN0ZXImJiFhLmNvb2tpZSh0aGlzLnNldHRpbmdzLmNvb2tpZV9uYW1lKSkmJih0aGlzLnNldHRpbmdzLiR0aXBfY29udGVudC5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBmPWEodGhpcyk7dGhpcy5zZXR0aW5ncz1hLmV4dGVuZCh7fSxiLmRlZmF1bHRzLGIuZGF0YV9vcHRpb25zKGYpKTtmb3IodmFyIGc9ZTtnLS07KWIuc2V0dGluZ3NbZFtnXV09cGFyc2VJbnQoYi5zZXR0aW5nc1tkW2ddXSwxMCk7Yi5jcmVhdGUoeyRsaTpmLGluZGV4OmN9KX0pLCF0aGlzLnNldHRpbmdzLnN0YXJ0X3RpbWVyX29uX2NsaWNrJiZ0aGlzLnNldHRpbmdzLnRpbWVyPjA/KHRoaXMuc2hvdyhcImluaXRcIiksdGhpcy5zdGFydFRpbWVyKCkpOnRoaXMuc2hvdyhcImluaXRcIikpKX0scmVzdW1lOmZ1bmN0aW9uKCl7dGhpcy5zZXRfbGkoKSx0aGlzLnNob3coKX0sdGlwX3RlbXBsYXRlOmZ1bmN0aW9uKGIpe3ZhciBjLGQ7cmV0dXJuIGIudGlwX2NsYXNzPWIudGlwX2NsYXNzfHxcIlwiLGM9YSh0aGlzLnNldHRpbmdzLnRlbXBsYXRlLnRpcCkuYWRkQ2xhc3MoYi50aXBfY2xhc3MpLGQ9YS50cmltKGEoYi5saSkuaHRtbCgpKSt0aGlzLnByZXZfYnV0dG9uX3RleHQoYi5wcmV2X2J1dHRvbl90ZXh0LGIuaW5kZXgpK3RoaXMuYnV0dG9uX3RleHQoYi5idXR0b25fdGV4dCkrdGhpcy5zZXR0aW5ncy50ZW1wbGF0ZS5saW5rK3RoaXMudGltZXJfaW5zdGFuY2UoYi5pbmRleCksYy5hcHBlbmQoYSh0aGlzLnNldHRpbmdzLnRlbXBsYXRlLndyYXBwZXIpKSxjLmZpcnN0KCkuYXR0cih0aGlzLmFkZF9uYW1lc3BhY2UoXCJkYXRhLWluZGV4XCIpLGIuaW5kZXgpLGEoXCIuam95cmlkZS1jb250ZW50LXdyYXBwZXJcIixjKS5hcHBlbmQoZCksY1swXX0sdGltZXJfaW5zdGFuY2U6ZnVuY3Rpb24oYil7dmFyIGM7cmV0dXJuIGM9MD09PWImJnRoaXMuc2V0dGluZ3Muc3RhcnRfdGltZXJfb25fY2xpY2smJnRoaXMuc2V0dGluZ3MudGltZXI+MHx8MD09PXRoaXMuc2V0dGluZ3MudGltZXI/XCJcIjphKHRoaXMuc2V0dGluZ3MudGVtcGxhdGUudGltZXIpWzBdLm91dGVySFRNTH0sYnV0dG9uX3RleHQ6ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuc2V0dGluZ3MudGlwX3NldHRpbmdzLm5leHRfYnV0dG9uPyhiPWEudHJpbShiKXx8XCJOZXh0XCIsYj1hKHRoaXMuc2V0dGluZ3MudGVtcGxhdGUuYnV0dG9uKS5hcHBlbmQoYilbMF0ub3V0ZXJIVE1MKTpiPVwiXCIsYn0scHJldl9idXR0b25fdGV4dDpmdW5jdGlvbihiLGMpe3JldHVybiB0aGlzLnNldHRpbmdzLnRpcF9zZXR0aW5ncy5wcmV2X2J1dHRvbj8oYj1hLnRyaW0oYil8fFwiUHJldmlvdXNcIixiPTA9PWM/YSh0aGlzLnNldHRpbmdzLnRlbXBsYXRlLnByZXZfYnV0dG9uKS5hcHBlbmQoYikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKVswXS5vdXRlckhUTUw6YSh0aGlzLnNldHRpbmdzLnRlbXBsYXRlLnByZXZfYnV0dG9uKS5hcHBlbmQoYilbMF0ub3V0ZXJIVE1MKTpiPVwiXCIsYn0sY3JlYXRlOmZ1bmN0aW9uKGIpe3RoaXMuc2V0dGluZ3MudGlwX3NldHRpbmdzPWEuZXh0ZW5kKHt9LHRoaXMuc2V0dGluZ3MsdGhpcy5kYXRhX29wdGlvbnMoYi4kbGkpKTt2YXIgYz1iLiRsaS5hdHRyKHRoaXMuYWRkX25hbWVzcGFjZShcImRhdGEtYnV0dG9uXCIpKXx8Yi4kbGkuYXR0cih0aGlzLmFkZF9uYW1lc3BhY2UoXCJkYXRhLXRleHRcIikpLGQ9Yi4kbGkuYXR0cih0aGlzLmFkZF9uYW1lc3BhY2UoXCJkYXRhLWJ1dHRvbi1wcmV2XCIpKXx8Yi4kbGkuYXR0cih0aGlzLmFkZF9uYW1lc3BhY2UoXCJkYXRhLXByZXYtdGV4dFwiKSksZT1iLiRsaS5hdHRyKFwiY2xhc3NcIiksZj1hKHRoaXMudGlwX3RlbXBsYXRlKHt0aXBfY2xhc3M6ZSxpbmRleDpiLmluZGV4LGJ1dHRvbl90ZXh0OmMscHJldl9idXR0b25fdGV4dDpkLGxpOmIuJGxpfSkpO2EodGhpcy5zZXR0aW5ncy50aXBfY29udGFpbmVyKS5hcHBlbmQoZil9LHNob3c6ZnVuY3Rpb24oYixjKXt2YXIgZT1udWxsO2lmKHRoaXMuc2V0dGluZ3MuJGxpPT09ZHx8LTE9PT1hLmluQXJyYXkodGhpcy5zZXR0aW5ncy4kbGkuaW5kZXgoKSx0aGlzLnNldHRpbmdzLnBhdXNlX2FmdGVyKSlpZih0aGlzLnNldHRpbmdzLnBhdXNlZD90aGlzLnNldHRpbmdzLnBhdXNlZD0hMTp0aGlzLnNldF9saShiLGMpLHRoaXMuc2V0dGluZ3MuYXR0ZW1wdHM9MCx0aGlzLnNldHRpbmdzLiRsaS5sZW5ndGgmJnRoaXMuc2V0dGluZ3MuJHRhcmdldC5sZW5ndGg+MCl7aWYoYiYmKHRoaXMuc2V0dGluZ3MucHJlX3JpZGVfY2FsbGJhY2sodGhpcy5zZXR0aW5ncy4kbGkuaW5kZXgoKSx0aGlzLnNldHRpbmdzLiRuZXh0X3RpcCksdGhpcy5zZXR0aW5ncy5tb2RhbCYmdGhpcy5zaG93X21vZGFsKCkpLHRoaXMuc2V0dGluZ3MucHJlX3N0ZXBfY2FsbGJhY2sodGhpcy5zZXR0aW5ncy4kbGkuaW5kZXgoKSx0aGlzLnNldHRpbmdzLiRuZXh0X3RpcCksdGhpcy5zZXR0aW5ncy5tb2RhbCYmdGhpcy5zZXR0aW5ncy5leHBvc2UmJnRoaXMuZXhwb3NlKCksdGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3M9YS5leHRlbmQoe30sdGhpcy5zZXR0aW5ncyx0aGlzLmRhdGFfb3B0aW9ucyh0aGlzLnNldHRpbmdzLiRsaSkpLHRoaXMuc2V0dGluZ3MudGltZXI9cGFyc2VJbnQodGhpcy5zZXR0aW5ncy50aW1lciwxMCksdGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MudGlwX2xvY2F0aW9uX3BhdHRlcm49dGhpcy5zZXR0aW5ncy50aXBfbG9jYXRpb25fcGF0dGVybnNbdGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MudGlwX2xvY2F0aW9uXSwhL2JvZHkvaS50ZXN0KHRoaXMuc2V0dGluZ3MuJHRhcmdldC5zZWxlY3RvcikmJiF0aGlzLnNldHRpbmdzLmV4cG9zZSl7dmFyIGY9YShcIi5qb3lyaWRlLW1vZGFsLWJnXCIpOy9wb3AvaS50ZXN0KHRoaXMuc2V0dGluZ3MudGlwQW5pbWF0aW9uKT9mLmhpZGUoKTpmLmZhZGVPdXQodGhpcy5zZXR0aW5ncy50aXBBbmltYXRpb25GYWRlU3BlZWQpLHRoaXMuc2Nyb2xsX3RvKCl9dGhpcy5pc19waG9uZSgpP3RoaXMucG9zX3Bob25lKCEwKTp0aGlzLnBvc19kZWZhdWx0KCEwKSxlPXRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLmZpbmQoXCIuam95cmlkZS10aW1lci1pbmRpY2F0b3JcIiksL3BvcC9pLnRlc3QodGhpcy5zZXR0aW5ncy50aXBfYW5pbWF0aW9uKT8oZS53aWR0aCgwKSx0aGlzLnNldHRpbmdzLnRpbWVyPjA/KHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLnNob3coKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5hbmltYXRlKHt3aWR0aDplLnBhcmVudCgpLndpZHRoKCl9LHRoaXMuc2V0dGluZ3MudGltZXIsXCJsaW5lYXJcIil9LmJpbmQodGhpcyksdGhpcy5zZXR0aW5ncy50aXBfYW5pbWF0aW9uX2ZhZGVfc3BlZWQpKTp0aGlzLnNldHRpbmdzLiRuZXh0X3RpcC5zaG93KCkpOi9mYWRlL2kudGVzdCh0aGlzLnNldHRpbmdzLnRpcF9hbmltYXRpb24pJiYoZS53aWR0aCgwKSx0aGlzLnNldHRpbmdzLnRpbWVyPjA/KHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLmZhZGVJbih0aGlzLnNldHRpbmdzLnRpcF9hbmltYXRpb25fZmFkZV9zcGVlZCkuc2hvdygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmFuaW1hdGUoe3dpZHRoOmUucGFyZW50KCkud2lkdGgoKX0sdGhpcy5zZXR0aW5ncy50aW1lcixcImxpbmVhclwiKX0uYmluZCh0aGlzKSx0aGlzLnNldHRpbmdzLnRpcF9hbmltYXRpb25fZmFkZV9zcGVlZCkpOnRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLmZhZGVJbih0aGlzLnNldHRpbmdzLnRpcF9hbmltYXRpb25fZmFkZV9zcGVlZCkpLHRoaXMuc2V0dGluZ3MuJGN1cnJlbnRfdGlwPXRoaXMuc2V0dGluZ3MuJG5leHRfdGlwfWVsc2UgdGhpcy5zZXR0aW5ncy4kbGkmJnRoaXMuc2V0dGluZ3MuJHRhcmdldC5sZW5ndGg8MT90aGlzLnNob3coYixjKTp0aGlzLmVuZCgpO2Vsc2UgdGhpcy5zZXR0aW5ncy5wYXVzZWQ9ITB9LGlzX3Bob25lOmZ1bmN0aW9uKCl7cmV0dXJuIG1hdGNoTWVkaWEoRm91bmRhdGlvbi5tZWRpYV9xdWVyaWVzLnNtYWxsKS5tYXRjaGVzJiYhbWF0Y2hNZWRpYShGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMubWVkaXVtKS5tYXRjaGVzfSxoaWRlOmZ1bmN0aW9uKCl7dGhpcy5zZXR0aW5ncy5tb2RhbCYmdGhpcy5zZXR0aW5ncy5leHBvc2UmJnRoaXMudW5fZXhwb3NlKCksdGhpcy5zZXR0aW5ncy5tb2RhbHx8YShcIi5qb3lyaWRlLW1vZGFsLWJnXCIpLmhpZGUoKSx0aGlzLnNldHRpbmdzLiRjdXJyZW50X3RpcC5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIiksc2V0VGltZW91dChhLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy5oaWRlKCksdGhpcy5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJ2aXNpYmxlXCIpfSx0aGlzLnNldHRpbmdzLiRjdXJyZW50X3RpcCksMCksdGhpcy5zZXR0aW5ncy5wb3N0X3N0ZXBfY2FsbGJhY2sodGhpcy5zZXR0aW5ncy4kbGkuaW5kZXgoKSx0aGlzLnNldHRpbmdzLiRjdXJyZW50X3RpcCl9LHNldF9saTpmdW5jdGlvbihhLGIpe2E/KHRoaXMuc2V0dGluZ3MuJGxpPXRoaXMuc2V0dGluZ3MuJHRpcF9jb250ZW50LmVxKHRoaXMuc2V0dGluZ3Muc3RhcnRfb2Zmc2V0KSx0aGlzLnNldF9uZXh0X3RpcCgpLHRoaXMuc2V0dGluZ3MuJGN1cnJlbnRfdGlwPXRoaXMuc2V0dGluZ3MuJG5leHRfdGlwKTooYj90aGlzLnNldHRpbmdzLiRsaT10aGlzLnNldHRpbmdzLiRsaS5wcmV2KCk6dGhpcy5zZXR0aW5ncy4kbGk9dGhpcy5zZXR0aW5ncy4kbGkubmV4dCgpLHRoaXMuc2V0X25leHRfdGlwKCkpLHRoaXMuc2V0X3RhcmdldCgpfSxzZXRfbmV4dF90aXA6ZnVuY3Rpb24oKXt0aGlzLnNldHRpbmdzLiRuZXh0X3RpcD1hKFwiLmpveXJpZGUtdGlwLWd1aWRlXCIpLmVxKHRoaXMuc2V0dGluZ3MuJGxpLmluZGV4KCkpLHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLmRhdGEoXCJjbG9zZWRcIixcIlwiKX0sc2V0X3RhcmdldDpmdW5jdGlvbigpe3ZhciBiPXRoaXMuc2V0dGluZ3MuJGxpLmF0dHIodGhpcy5hZGRfbmFtZXNwYWNlKFwiZGF0YS1jbGFzc1wiKSksZD10aGlzLnNldHRpbmdzLiRsaS5hdHRyKHRoaXMuYWRkX25hbWVzcGFjZShcImRhdGEtaWRcIikpLGU9ZnVuY3Rpb24oKXtyZXR1cm4gZD9hKGMuZ2V0RWxlbWVudEJ5SWQoZCkpOmI/YShcIi5cIitiKS5maXJzdCgpOmEoXCJib2R5XCIpfTt0aGlzLnNldHRpbmdzLiR0YXJnZXQ9ZSgpfSxzY3JvbGxfdG86ZnVuY3Rpb24oKXt2YXIgYyxkO2M9YShiKS5oZWlnaHQoKS8yLGQ9TWF0aC5jZWlsKHRoaXMuc2V0dGluZ3MuJHRhcmdldC5vZmZzZXQoKS50b3AtYyt0aGlzLnNldHRpbmdzLiRuZXh0X3RpcC5vdXRlckhlaWdodCgpKSwwIT1kJiZhKFwiaHRtbCwgYm9keVwiKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOmR9LHRoaXMuc2V0dGluZ3Muc2Nyb2xsX3NwZWVkLFwic3dpbmdcIil9LHBhdXNlZDpmdW5jdGlvbigpe3JldHVybi0xPT09YS5pbkFycmF5KHRoaXMuc2V0dGluZ3MuJGxpLmluZGV4KCkrMSx0aGlzLnNldHRpbmdzLnBhdXNlX2FmdGVyKX0scmVzdGFydDpmdW5jdGlvbigpe3RoaXMuaGlkZSgpLHRoaXMuc2V0dGluZ3MuJGxpPWQsdGhpcy5zaG93KFwiaW5pdFwiKX0scG9zX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zZXR0aW5ncy4kbmV4dF90aXAuZmluZChcIi5qb3lyaWRlLW51YlwiKSxjPU1hdGguY2VpbChiLm91dGVyV2lkdGgoKS8yKSxkPU1hdGguY2VpbChiLm91dGVySGVpZ2h0KCkvMiksZT1hfHwhMTtpZihlJiYodGhpcy5zZXR0aW5ncy4kbmV4dF90aXAuY3NzKFwidmlzaWJpbGl0eVwiLFwiaGlkZGVuXCIpLHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLnNob3coKSksL2JvZHkvaS50ZXN0KHRoaXMuc2V0dGluZ3MuJHRhcmdldC5zZWxlY3RvcikpdGhpcy5zZXR0aW5ncy4kbGkubGVuZ3RoJiZ0aGlzLnBvc19tb2RhbChiKTtlbHNle3ZhciBmPXRoaXMuc2V0dGluZ3MudGlwX3NldHRpbmdzLnRpcEFkanVzdG1lbnRZP3BhcnNlSW50KHRoaXMuc2V0dGluZ3MudGlwX3NldHRpbmdzLnRpcEFkanVzdG1lbnRZKTowLGc9dGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MudGlwQWRqdXN0bWVudFg/cGFyc2VJbnQodGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MudGlwQWRqdXN0bWVudFgpOjA7dGhpcy5ib3R0b20oKT8odGhpcy5ydGw/dGhpcy5zZXR0aW5ncy4kbmV4dF90aXAuY3NzKHt0b3A6dGhpcy5zZXR0aW5ncy4kdGFyZ2V0Lm9mZnNldCgpLnRvcCtkK3RoaXMuc2V0dGluZ3MuJHRhcmdldC5vdXRlckhlaWdodCgpK2YsbGVmdDp0aGlzLnNldHRpbmdzLiR0YXJnZXQub2Zmc2V0KCkubGVmdCt0aGlzLnNldHRpbmdzLiR0YXJnZXQub3V0ZXJXaWR0aCgpLXRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLm91dGVyV2lkdGgoKStnfSk6dGhpcy5zZXR0aW5ncy4kbmV4dF90aXAuY3NzKHt0b3A6dGhpcy5zZXR0aW5ncy4kdGFyZ2V0Lm9mZnNldCgpLnRvcCtkK3RoaXMuc2V0dGluZ3MuJHRhcmdldC5vdXRlckhlaWdodCgpK2YsbGVmdDp0aGlzLnNldHRpbmdzLiR0YXJnZXQub2Zmc2V0KCkubGVmdCtnfSksdGhpcy5udWJfcG9zaXRpb24oYix0aGlzLnNldHRpbmdzLnRpcF9zZXR0aW5ncy5udWJfcG9zaXRpb24sXCJ0b3BcIikpOnRoaXMudG9wKCk/KHRoaXMucnRsP3RoaXMuc2V0dGluZ3MuJG5leHRfdGlwLmNzcyh7dG9wOnRoaXMuc2V0dGluZ3MuJHRhcmdldC5vZmZzZXQoKS50b3AtdGhpcy5zZXR0aW5ncy4kbmV4dF90aXAub3V0ZXJIZWlnaHQoKS1kK2YsbGVmdDp0aGlzLnNldHRpbmdzLiR0YXJnZXQub2Zmc2V0KCkubGVmdCt0aGlzLnNldHRpbmdzLiR0YXJnZXQub3V0ZXJXaWR0aCgpLXRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLm91dGVyV2lkdGgoKX0pOnRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLmNzcyh7dG9wOnRoaXMuc2V0dGluZ3MuJHRhcmdldC5vZmZzZXQoKS50b3AtdGhpcy5zZXR0aW5ncy4kbmV4dF90aXAub3V0ZXJIZWlnaHQoKS1kK2YsbGVmdDp0aGlzLnNldHRpbmdzLiR0YXJnZXQub2Zmc2V0KCkubGVmdCtnfSksdGhpcy5udWJfcG9zaXRpb24oYix0aGlzLnNldHRpbmdzLnRpcF9zZXR0aW5ncy5udWJfcG9zaXRpb24sXCJib3R0b21cIikpOnRoaXMucmlnaHQoKT8odGhpcy5zZXR0aW5ncy4kbmV4dF90aXAuY3NzKHt0b3A6dGhpcy5zZXR0aW5ncy4kdGFyZ2V0Lm9mZnNldCgpLnRvcCtmLGxlZnQ6dGhpcy5zZXR0aW5ncy4kdGFyZ2V0Lm91dGVyV2lkdGgoKSt0aGlzLnNldHRpbmdzLiR0YXJnZXQub2Zmc2V0KCkubGVmdCtjK2d9KSx0aGlzLm51Yl9wb3NpdGlvbihiLHRoaXMuc2V0dGluZ3MudGlwX3NldHRpbmdzLm51Yl9wb3NpdGlvbixcImxlZnRcIikpOnRoaXMubGVmdCgpJiYodGhpcy5zZXR0aW5ncy4kbmV4dF90aXAuY3NzKHt0b3A6dGhpcy5zZXR0aW5ncy4kdGFyZ2V0Lm9mZnNldCgpLnRvcCtmLGxlZnQ6dGhpcy5zZXR0aW5ncy4kdGFyZ2V0Lm9mZnNldCgpLmxlZnQtdGhpcy5zZXR0aW5ncy4kbmV4dF90aXAub3V0ZXJXaWR0aCgpLWMrZ30pLHRoaXMubnViX3Bvc2l0aW9uKGIsdGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MubnViX3Bvc2l0aW9uLFwicmlnaHRcIikpLCF0aGlzLnZpc2libGUodGhpcy5jb3JuZXJzKHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwKSkmJnRoaXMuc2V0dGluZ3MuYXR0ZW1wdHM8dGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MudGlwX2xvY2F0aW9uX3BhdHRlcm4ubGVuZ3RoJiYoYi5yZW1vdmVDbGFzcyhcImJvdHRvbVwiKS5yZW1vdmVDbGFzcyhcInRvcFwiKS5yZW1vdmVDbGFzcyhcInJpZ2h0XCIpLnJlbW92ZUNsYXNzKFwibGVmdFwiKSx0aGlzLnNldHRpbmdzLnRpcF9zZXR0aW5ncy50aXBfbG9jYXRpb249dGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MudGlwX2xvY2F0aW9uX3BhdHRlcm5bdGhpcy5zZXR0aW5ncy5hdHRlbXB0c10sdGhpcy5zZXR0aW5ncy5hdHRlbXB0cysrLHRoaXMucG9zX2RlZmF1bHQoKSl9ZSYmKHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLmhpZGUoKSx0aGlzLnNldHRpbmdzLiRuZXh0X3RpcC5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJ2aXNpYmxlXCIpKX0scG9zX3Bob25lOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLm91dGVySGVpZ2h0KCksZD0odGhpcy5zZXR0aW5ncy4kbmV4dF90aXAub2Zmc2V0KCksdGhpcy5zZXR0aW5ncy4kdGFyZ2V0Lm91dGVySGVpZ2h0KCkpLGU9YShcIi5qb3lyaWRlLW51YlwiLHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwKSxmPU1hdGguY2VpbChlLm91dGVySGVpZ2h0KCkvMiksZz1ifHwhMTtlLnJlbW92ZUNsYXNzKFwiYm90dG9tXCIpLnJlbW92ZUNsYXNzKFwidG9wXCIpLnJlbW92ZUNsYXNzKFwicmlnaHRcIikucmVtb3ZlQ2xhc3MoXCJsZWZ0XCIpLGcmJih0aGlzLnNldHRpbmdzLiRuZXh0X3RpcC5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIiksdGhpcy5zZXR0aW5ncy4kbmV4dF90aXAuc2hvdygpKSwvYm9keS9pLnRlc3QodGhpcy5zZXR0aW5ncy4kdGFyZ2V0LnNlbGVjdG9yKT90aGlzLnNldHRpbmdzLiRsaS5sZW5ndGgmJnRoaXMucG9zX21vZGFsKGUpOnRoaXMudG9wKCk/KHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLm9mZnNldCh7dG9wOnRoaXMuc2V0dGluZ3MuJHRhcmdldC5vZmZzZXQoKS50b3AtYy1mfSksZS5hZGRDbGFzcyhcImJvdHRvbVwiKSk6KHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLm9mZnNldCh7dG9wOnRoaXMuc2V0dGluZ3MuJHRhcmdldC5vZmZzZXQoKS50b3ArZCtmfSksZS5hZGRDbGFzcyhcInRvcFwiKSksZyYmKHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLmhpZGUoKSx0aGlzLnNldHRpbmdzLiRuZXh0X3RpcC5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJ2aXNpYmxlXCIpKX0scG9zX21vZGFsOmZ1bmN0aW9uKGEpe3RoaXMuY2VudGVyKCksYS5oaWRlKCksdGhpcy5zaG93X21vZGFsKCl9LHNob3dfbW9kYWw6ZnVuY3Rpb24oKXtpZighdGhpcy5zZXR0aW5ncy4kbmV4dF90aXAuZGF0YShcImNsb3NlZFwiKSl7dmFyIGI9YShcIi5qb3lyaWRlLW1vZGFsLWJnXCIpO2lmKGIubGVuZ3RoPDEpe3ZhciBiPWEodGhpcy5zZXR0aW5ncy50ZW1wbGF0ZS5tb2RhbCk7Yi5hcHBlbmRUbyhcImJvZHlcIil9L3BvcC9pLnRlc3QodGhpcy5zZXR0aW5ncy50aXBfYW5pbWF0aW9uKT9iLnNob3coKTpiLmZhZGVJbih0aGlzLnNldHRpbmdzLnRpcF9hbmltYXRpb25fZmFkZV9zcGVlZCl9fSxleHBvc2U6ZnVuY3Rpb24oKXt2YXIgYyxkLGUsZixnLGg9XCJleHBvc2UtXCIrdGhpcy5yYW5kb21fc3RyKDYpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdaW5zdGFuY2VvZiBhKWU9YXJndW1lbnRzWzBdO2Vsc2V7aWYoIXRoaXMuc2V0dGluZ3MuJHRhcmdldHx8L2JvZHkvaS50ZXN0KHRoaXMuc2V0dGluZ3MuJHRhcmdldC5zZWxlY3RvcikpcmV0dXJuITE7ZT10aGlzLnNldHRpbmdzLiR0YXJnZXR9cmV0dXJuIGUubGVuZ3RoPDE/KGIuY29uc29sZSYmY29uc29sZS5lcnJvcihcImVsZW1lbnQgbm90IHZhbGlkXCIsZSksITEpOihjPWEodGhpcy5zZXR0aW5ncy50ZW1wbGF0ZS5leHBvc2UpLHRoaXMuc2V0dGluZ3MuJGJvZHkuYXBwZW5kKGMpLGMuY3NzKHt0b3A6ZS5vZmZzZXQoKS50b3AsbGVmdDplLm9mZnNldCgpLmxlZnQsd2lkdGg6ZS5vdXRlcldpZHRoKCEwKSxoZWlnaHQ6ZS5vdXRlckhlaWdodCghMCl9KSxkPWEodGhpcy5zZXR0aW5ncy50ZW1wbGF0ZS5leHBvc2VfY292ZXIpLGY9e3pJbmRleDplLmNzcyhcInotaW5kZXhcIikscG9zaXRpb246ZS5jc3MoXCJwb3NpdGlvblwiKX0sZz1udWxsPT1lLmF0dHIoXCJjbGFzc1wiKT9cIlwiOmUuYXR0cihcImNsYXNzXCIpLGUuY3NzKFwiei1pbmRleFwiLHBhcnNlSW50KGMuY3NzKFwiei1pbmRleFwiKSkrMSksXCJzdGF0aWNcIj09Zi5wb3NpdGlvbiYmZS5jc3MoXCJwb3NpdGlvblwiLFwicmVsYXRpdmVcIiksZS5kYXRhKFwiZXhwb3NlLWNzc1wiLGYpLGUuZGF0YShcIm9yaWctY2xhc3NcIixnKSxlLmF0dHIoXCJjbGFzc1wiLGcrXCIgXCIrdGhpcy5zZXR0aW5ncy5leHBvc2VfYWRkX2NsYXNzKSxkLmNzcyh7dG9wOmUub2Zmc2V0KCkudG9wLGxlZnQ6ZS5vZmZzZXQoKS5sZWZ0LHdpZHRoOmUub3V0ZXJXaWR0aCghMCksaGVpZ2h0OmUub3V0ZXJIZWlnaHQoITApfSksdGhpcy5zZXR0aW5ncy5tb2RhbCYmdGhpcy5zaG93X21vZGFsKCksdGhpcy5zZXR0aW5ncy4kYm9keS5hcHBlbmQoZCksYy5hZGRDbGFzcyhoKSxkLmFkZENsYXNzKGgpLGUuZGF0YShcImV4cG9zZVwiLGgpLHRoaXMuc2V0dGluZ3MucG9zdF9leHBvc2VfY2FsbGJhY2sodGhpcy5zZXR0aW5ncy4kbGkuaW5kZXgoKSx0aGlzLnNldHRpbmdzLiRuZXh0X3RpcCxlKSx2b2lkIHRoaXMuYWRkX2V4cG9zZWQoZSkpfSx1bl9leHBvc2U6ZnVuY3Rpb24oKXt2YXIgYyxkLGUsZixnLGg9ITE7aWYoYXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF1pbnN0YW5jZW9mIGEpZD1hcmd1bWVudHNbMF07ZWxzZXtpZighdGhpcy5zZXR0aW5ncy4kdGFyZ2V0fHwvYm9keS9pLnRlc3QodGhpcy5zZXR0aW5ncy4kdGFyZ2V0LnNlbGVjdG9yKSlyZXR1cm4hMTtkPXRoaXMuc2V0dGluZ3MuJHRhcmdldH1yZXR1cm4gZC5sZW5ndGg8MT8oYi5jb25zb2xlJiZjb25zb2xlLmVycm9yKFwiZWxlbWVudCBub3QgdmFsaWRcIixkKSwhMSk6KGM9ZC5kYXRhKFwiZXhwb3NlXCIpLGU9YShcIi5cIitjKSxhcmd1bWVudHMubGVuZ3RoPjEmJihoPWFyZ3VtZW50c1sxXSksaD09PSEwP2EoXCIuam95cmlkZS1leHBvc2Utd3JhcHBlciwuam95cmlkZS1leHBvc2UtY292ZXJcIikucmVtb3ZlKCk6ZS5yZW1vdmUoKSxmPWQuZGF0YShcImV4cG9zZS1jc3NcIiksXCJhdXRvXCI9PWYuekluZGV4P2QuY3NzKFwiei1pbmRleFwiLFwiXCIpOmQuY3NzKFwiei1pbmRleFwiLGYuekluZGV4KSxmLnBvc2l0aW9uIT1kLmNzcyhcInBvc2l0aW9uXCIpJiYoXCJzdGF0aWNcIj09Zi5wb3NpdGlvbj9kLmNzcyhcInBvc2l0aW9uXCIsXCJcIik6ZC5jc3MoXCJwb3NpdGlvblwiLGYucG9zaXRpb24pKSxnPWQuZGF0YShcIm9yaWctY2xhc3NcIiksZC5hdHRyKFwiY2xhc3NcIixnKSxkLnJlbW92ZURhdGEoXCJvcmlnLWNsYXNzZXNcIiksZC5yZW1vdmVEYXRhKFwiZXhwb3NlXCIpLGQucmVtb3ZlRGF0YShcImV4cG9zZS16LWluZGV4XCIpLHZvaWQgdGhpcy5yZW1vdmVfZXhwb3NlZChkKSl9LGFkZF9leHBvc2VkOmZ1bmN0aW9uKGIpe3RoaXMuc2V0dGluZ3MuZXhwb3NlZD10aGlzLnNldHRpbmdzLmV4cG9zZWR8fFtdLGIgaW5zdGFuY2VvZiBhfHxcIm9iamVjdFwiPT10eXBlb2YgYj90aGlzLnNldHRpbmdzLmV4cG9zZWQucHVzaChiWzBdKTpcInN0cmluZ1wiPT10eXBlb2YgYiYmdGhpcy5zZXR0aW5ncy5leHBvc2VkLnB1c2goYil9LHJlbW92ZV9leHBvc2VkOmZ1bmN0aW9uKGIpe3ZhciBjLGQ7Zm9yKGIgaW5zdGFuY2VvZiBhP2M9YlswXTpcInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YiksdGhpcy5zZXR0aW5ncy5leHBvc2VkPXRoaXMuc2V0dGluZ3MuZXhwb3NlZHx8W10sZD10aGlzLnNldHRpbmdzLmV4cG9zZWQubGVuZ3RoO2QtLTspaWYodGhpcy5zZXR0aW5ncy5leHBvc2VkW2RdPT1jKXJldHVybiB2b2lkIHRoaXMuc2V0dGluZ3MuZXhwb3NlZC5zcGxpY2UoZCwxKX0sY2VudGVyOmZ1bmN0aW9uKCl7dmFyIGM9YShiKTtyZXR1cm4gdGhpcy5zZXR0aW5ncy4kbmV4dF90aXAuY3NzKHt0b3A6KGMuaGVpZ2h0KCktdGhpcy5zZXR0aW5ncy4kbmV4dF90aXAub3V0ZXJIZWlnaHQoKSkvMitjLnNjcm9sbFRvcCgpLGxlZnQ6KGMud2lkdGgoKS10aGlzLnNldHRpbmdzLiRuZXh0X3RpcC5vdXRlcldpZHRoKCkpLzIrYy5zY3JvbGxMZWZ0KCl9KSwhMH0sYm90dG9tOmZ1bmN0aW9uKCl7cmV0dXJuL2JvdHRvbS9pLnRlc3QodGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MudGlwX2xvY2F0aW9uKX0sdG9wOmZ1bmN0aW9uKCl7cmV0dXJuL3RvcC9pLnRlc3QodGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MudGlwX2xvY2F0aW9uKX0scmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4vcmlnaHQvaS50ZXN0KHRoaXMuc2V0dGluZ3MudGlwX3NldHRpbmdzLnRpcF9sb2NhdGlvbil9LGxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4vbGVmdC9pLnRlc3QodGhpcy5zZXR0aW5ncy50aXBfc2V0dGluZ3MudGlwX2xvY2F0aW9uKX0sY29ybmVyczpmdW5jdGlvbihjKXtpZigwPT09Yy5sZW5ndGgpcmV0dXJuWyExLCExLCExLCExXTt2YXIgZD1hKGIpLGU9ZC5oZWlnaHQoKS8yLGY9TWF0aC5jZWlsKHRoaXMuc2V0dGluZ3MuJHRhcmdldC5vZmZzZXQoKS50b3AtZSt0aGlzLnNldHRpbmdzLiRuZXh0X3RpcC5vdXRlckhlaWdodCgpKSxnPWQud2lkdGgoKStkLnNjcm9sbExlZnQoKSxoPWQuaGVpZ2h0KCkrZixpPWQuaGVpZ2h0KCkrZC5zY3JvbGxUb3AoKSxqPWQuc2Nyb2xsVG9wKCk7cmV0dXJuIGo+ZiYmKGo9MD5mPzA6ZiksaD5pJiYoaT1oKSxbYy5vZmZzZXQoKS50b3A8aixnPGMub2Zmc2V0KCkubGVmdCtjLm91dGVyV2lkdGgoKSxpPGMub2Zmc2V0KCkudG9wK2Mub3V0ZXJIZWlnaHQoKSxkLnNjcm9sbExlZnQoKT5jLm9mZnNldCgpLmxlZnRdfSx2aXNpYmxlOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1hLmxlbmd0aDtiLS07KWlmKGFbYl0pcmV0dXJuITE7cmV0dXJuITB9LG51Yl9wb3NpdGlvbjpmdW5jdGlvbihhLGIsYyl7XCJhdXRvXCI9PT1iP2EuYWRkQ2xhc3MoYyk6YS5hZGRDbGFzcyhiKX0sc3RhcnRUaW1lcjpmdW5jdGlvbigpe3RoaXMuc2V0dGluZ3MuJGxpLmxlbmd0aD90aGlzLnNldHRpbmdzLmF1dG9tYXRlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLmhpZGUoKSx0aGlzLnNob3coKSx0aGlzLnN0YXJ0VGltZXIoKX0uYmluZCh0aGlzKSx0aGlzLnNldHRpbmdzLnRpbWVyKTpjbGVhclRpbWVvdXQodGhpcy5zZXR0aW5ncy5hdXRvbWF0ZSl9LGVuZDpmdW5jdGlvbihiKXt0aGlzLnNldHRpbmdzLmNvb2tpZV9tb25zdGVyJiZhLmNvb2tpZSh0aGlzLnNldHRpbmdzLmNvb2tpZV9uYW1lLFwicmlkZGVuXCIse2V4cGlyZXM6dGhpcy5zZXR0aW5ncy5jb29raWVfZXhwaXJlcyxkb21haW46dGhpcy5zZXR0aW5ncy5jb29raWVfZG9tYWlufSksdGhpcy5zZXR0aW5ncy50aW1lcj4wJiZjbGVhclRpbWVvdXQodGhpcy5zZXR0aW5ncy5hdXRvbWF0ZSksdGhpcy5zZXR0aW5ncy5tb2RhbCYmdGhpcy5zZXR0aW5ncy5leHBvc2UmJnRoaXMudW5fZXhwb3NlKCksYSh0aGlzLnNjb3BlKS5vZmYoXCJrZXl1cC5qb3lyaWRlXCIpLHRoaXMuc2V0dGluZ3MuJG5leHRfdGlwLmRhdGEoXCJjbG9zZWRcIiwhMCksdGhpcy5zZXR0aW5ncy5yaWRpbmc9ITEsYShcIi5qb3lyaWRlLW1vZGFsLWJnXCIpLmhpZGUoKSx0aGlzLnNldHRpbmdzLiRjdXJyZW50X3RpcC5oaWRlKCksKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBifHxiPT09ITEpJiYodGhpcy5zZXR0aW5ncy5wb3N0X3N0ZXBfY2FsbGJhY2sodGhpcy5zZXR0aW5ncy4kbGkuaW5kZXgoKSx0aGlzLnNldHRpbmdzLiRjdXJyZW50X3RpcCksdGhpcy5zZXR0aW5ncy5wb3N0X3JpZGVfY2FsbGJhY2sodGhpcy5zZXR0aW5ncy4kbGkuaW5kZXgoKSx0aGlzLnNldHRpbmdzLiRjdXJyZW50X3RpcCkpLGEoXCIuam95cmlkZS10aXAtZ3VpZGVcIikucmVtb3ZlKCl9LG9mZjpmdW5jdGlvbigpe2EodGhpcy5zY29wZSkub2ZmKFwiLmpveXJpZGVcIiksYShiKS5vZmYoXCIuam95cmlkZVwiKSxhKFwiLmpveXJpZGUtY2xvc2UtdGlwLCAuam95cmlkZS1uZXh0LXRpcCwgLmpveXJpZGUtbW9kYWwtYmdcIikub2ZmKFwiLmpveXJpZGVcIiksYShcIi5qb3lyaWRlLXRpcC1ndWlkZSwgLmpveXJpZGUtbW9kYWwtYmdcIikucmVtb3ZlKCksY2xlYXJUaW1lb3V0KHRoaXMuc2V0dGluZ3MuYXV0b21hdGUpfSxyZWZsb3c6ZnVuY3Rpb24oKXt9fX0oalF1ZXJ5LHdpbmRvdyx3aW5kb3cuZG9jdW1lbnQpLGZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO0ZvdW5kYXRpb24ubGlic1tcIm1hZ2VsbGFuLWV4cGVkaXRpb25cIl09e25hbWU6XCJtYWdlbGxhbi1leHBlZGl0aW9uXCIsdmVyc2lvbjpcIjUuNS4zXCIsc2V0dGluZ3M6e2FjdGl2ZV9jbGFzczpcImFjdGl2ZVwiLHRocmVzaG9sZDowLGRlc3RpbmF0aW9uX3RocmVzaG9sZDoyMCx0aHJvdHRsZV9kZWxheTozMCxmaXhlZF90b3A6MCxvZmZzZXRfYnlfaGVpZ2h0OiEwLGR1cmF0aW9uOjcwMCxlYXNpbmc6XCJzd2luZ1wifSxpbml0OmZ1bmN0aW9uKGEsYixjKXtGb3VuZGF0aW9uLmluaGVyaXQodGhpcyxcInRocm90dGxlXCIpLHRoaXMuYmluZGluZ3MoYixjKX0sZXZlbnRzOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPWIuUyxkPWIuc2V0dGluZ3M7Yi5zZXRfZXhwZWRpdGlvbl9wb3NpdGlvbigpLGMoYi5zY29wZSkub2ZmKFwiLm1hZ2VsbGFuXCIpLm9uKFwiY2xpY2suZm5kdG4ubWFnZWxsYW5cIixcIltcIitiLmFkZF9uYW1lc3BhY2UoXCJkYXRhLW1hZ2VsbGFuLWFycml2YWxcIikrXCJdIGFbaHJlZio9I11cIixmdW5jdGlvbihjKXt2YXIgZD10aGlzLmhvc3RuYW1lPT09bG9jYXRpb24uaG9zdG5hbWV8fCF0aGlzLmhvc3RuYW1lLGU9Yi5maWx0ZXJQYXRobmFtZShsb2NhdGlvbi5wYXRobmFtZSk9PT1iLmZpbHRlclBhdGhuYW1lKHRoaXMucGF0aG5hbWUpLGY9dGhpcy5oYXNoLnJlcGxhY2UoLyg6fFxcLnxcXC8pL2csXCJcXFxcJDFcIiksZz10aGlzO2lmKGQmJmUmJmYpe2MucHJldmVudERlZmF1bHQoKTt2YXIgaD1hKHRoaXMpLmNsb3Nlc3QoXCJbXCIrYi5hdHRyX25hbWUoKStcIl1cIiksaT1oLmRhdGEoXCJtYWdlbGxhbi1leHBlZGl0aW9uLWluaXRcIiksaj10aGlzLmhhc2guc3BsaXQoXCIjXCIpLmpvaW4oXCJcIiksaz1hKCdhW25hbWU9XCInK2orJ1wiXScpOzA9PT1rLmxlbmd0aCYmKGs9YShcIiNcIitqKSk7dmFyIGw9ay5vZmZzZXQoKS50b3AtaS5kZXN0aW5hdGlvbl90aHJlc2hvbGQrMTtpLm9mZnNldF9ieV9oZWlnaHQmJihsLT1oLm91dGVySGVpZ2h0KCkpLGEoXCJodG1sLCBib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6bH0saS5kdXJhdGlvbixpLmVhc2luZyxmdW5jdGlvbigpe2hpc3RvcnkucHVzaFN0YXRlP2hpc3RvcnkucHVzaFN0YXRlKG51bGwsbnVsbCxnLnBhdGhuYW1lK2cuc2VhcmNoK1wiI1wiK2opOmxvY2F0aW9uLmhhc2g9Zy5wYXRobmFtZStnLnNlYXJjaCtcIiNcIitqfSl9fSkub24oXCJzY3JvbGwuZm5kdG4ubWFnZWxsYW5cIixiLnRocm90dGxlKHRoaXMuY2hlY2tfZm9yX2Fycml2YWxzLmJpbmQodGhpcyksZC50aHJvdHRsZV9kZWxheSkpfSxjaGVja19mb3JfYXJyaXZhbHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2EudXBkYXRlX2Fycml2YWxzKCksYS51cGRhdGVfZXhwZWRpdGlvbl9wb3NpdGlvbnMoKX0sc2V0X2V4cGVkaXRpb25fcG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2EoXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIj1maXhlZF1cIixiLnNjb3BlKS5lYWNoKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZixnPWEodGhpcyksaD1nLmRhdGEoXCJtYWdlbGxhbi1leHBlZGl0aW9uLWluaXRcIiksaT1nLmF0dHIoXCJzdHlsZXNcIik7Zy5hdHRyKFwic3R5bGVcIixcIlwiKSxlPWcub2Zmc2V0KCkudG9wK2gudGhyZXNob2xkLGY9cGFyc2VJbnQoZy5kYXRhKFwibWFnZWxsYW4tZml4ZWQtdG9wXCIpKSxpc05hTihmKXx8KGIuc2V0dGluZ3MuZml4ZWRfdG9wPWYpLGcuZGF0YShiLmRhdGFfYXR0cihcIm1hZ2VsbGFuLXRvcC1vZmZzZXRcIiksZSksZy5hdHRyKFwic3R5bGVcIixpKX0pfSx1cGRhdGVfZXhwZWRpdGlvbl9wb3NpdGlvbnM6ZnVuY3Rpb24oKXt2YXIgYz10aGlzLGQ9YShiKS5zY3JvbGxUb3AoKTthKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCI9Zml4ZWRdXCIsYy5zY29wZSkuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksZT1iLmRhdGEoXCJtYWdlbGxhbi1leHBlZGl0aW9uLWluaXRcIiksZj1iLmF0dHIoXCJzdHlsZVwiKSxnPWIuZGF0YShcIm1hZ2VsbGFuLXRvcC1vZmZzZXRcIik7aWYoZCtjLnNldHRpbmdzLmZpeGVkX3RvcD49Zyl7dmFyIGg9Yi5wcmV2KFwiW1wiK2MuYWRkX25hbWVzcGFjZShcImRhdGEtbWFnZWxsYW4tZXhwZWRpdGlvbi1jbG9uZVwiKStcIl1cIik7MD09PWgubGVuZ3RoJiYoaD1iLmNsb25lKCksaC5yZW1vdmVBdHRyKGMuYXR0cl9uYW1lKCkpLGguYXR0cihjLmFkZF9uYW1lc3BhY2UoXCJkYXRhLW1hZ2VsbGFuLWV4cGVkaXRpb24tY2xvbmVcIiksXCJcIiksYi5iZWZvcmUoaCkpLGIuY3NzKHtwb3NpdGlvbjpcImZpeGVkXCIsdG9wOmUuZml4ZWRfdG9wfSkuYWRkQ2xhc3MoXCJmaXhlZFwiKX1lbHNlIGIucHJldihcIltcIitjLmFkZF9uYW1lc3BhY2UoXCJkYXRhLW1hZ2VsbGFuLWV4cGVkaXRpb24tY2xvbmVcIikrXCJdXCIpLnJlbW92ZSgpLGIuYXR0cihcInN0eWxlXCIsZikuY3NzKFwicG9zaXRpb25cIixcIlwiKS5jc3MoXCJ0b3BcIixcIlwiKS5yZW1vdmVDbGFzcyhcImZpeGVkXCIpfSl9LHVwZGF0ZV9hcnJpdmFsczpmdW5jdGlvbigpe3ZhciBjPXRoaXMsZD1hKGIpLnNjcm9sbFRvcCgpO2EoXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIl1cIixjLnNjb3BlKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxlPWIuZGF0YShjLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKSxmPWMub2Zmc2V0cyhiLGQpLGc9Yi5maW5kKFwiW1wiK2MuYWRkX25hbWVzcGFjZShcImRhdGEtbWFnZWxsYW4tYXJyaXZhbFwiKStcIl1cIiksaD0hMTtmLmVhY2goZnVuY3Rpb24oYSxkKXtpZihkLnZpZXdwb3J0X29mZnNldD49ZC50b3Bfb2Zmc2V0KXt2YXIgZj1iLmZpbmQoXCJbXCIrYy5hZGRfbmFtZXNwYWNlKFwiZGF0YS1tYWdlbGxhbi1hcnJpdmFsXCIpK1wiXVwiKTtyZXR1cm4gZi5ub3QoZC5hcnJpdmFsKS5yZW1vdmVDbGFzcyhlLmFjdGl2ZV9jbGFzcyksZC5hcnJpdmFsLmFkZENsYXNzKGUuYWN0aXZlX2NsYXNzKSxoPSEwLCEwfX0pLGh8fGcucmVtb3ZlQ2xhc3MoZS5hY3RpdmVfY2xhc3MpfSl9LG9mZnNldHM6ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLGU9Yi5kYXRhKGQuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpLGY9YztyZXR1cm4gYi5maW5kKFwiW1wiK2QuYWRkX25hbWVzcGFjZShcImRhdGEtbWFnZWxsYW4tYXJyaXZhbFwiKStcIl1cIikubWFwKGZ1bmN0aW9uKGMsZyl7dmFyIGg9YSh0aGlzKS5kYXRhKGQuZGF0YV9hdHRyKFwibWFnZWxsYW4tYXJyaXZhbFwiKSksaT1hKFwiW1wiK2QuYWRkX25hbWVzcGFjZShcImRhdGEtbWFnZWxsYW4tZGVzdGluYXRpb25cIikrXCI9XCIraCtcIl1cIik7aWYoaS5sZW5ndGg+MCl7dmFyIGo9aS5vZmZzZXQoKS50b3AtZS5kZXN0aW5hdGlvbl90aHJlc2hvbGQ7cmV0dXJuIGUub2Zmc2V0X2J5X2hlaWdodCYmKGotPWIub3V0ZXJIZWlnaHQoKSksaj1NYXRoLmZsb29yKGopLHtkZXN0aW5hdGlvbjppLGFycml2YWw6YSh0aGlzKSx0b3Bfb2Zmc2V0Omosdmlld3BvcnRfb2Zmc2V0OmZ9fX0pLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS50b3Bfb2Zmc2V0PGIudG9wX29mZnNldD8tMTphLnRvcF9vZmZzZXQ+Yi50b3Bfb2Zmc2V0PzE6MH0pfSxkYXRhX2F0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubmFtZXNwYWNlLmxlbmd0aD4wP3RoaXMubmFtZXNwYWNlK1wiLVwiK2E6YX0sb2ZmOmZ1bmN0aW9uKCl7dGhpcy5TKHRoaXMuc2NvcGUpLm9mZihcIi5tYWdlbGxhblwiKSx0aGlzLlMoYikub2ZmKFwiLm1hZ2VsbGFuXCIpfSxmaWx0ZXJQYXRobmFtZTpmdW5jdGlvbihhKXtyZXR1cm4gYT1hfHxcIlwiLGEucmVwbGFjZSgvXlxcLy8sXCJcIikucmVwbGFjZSgvKD86aW5kZXh8ZGVmYXVsdCkuW2EtekEtWl17Myw0fSQvLFwiXCIpLnJlcGxhY2UoL1xcLyQvLFwiXCIpfSxyZWZsb3c6ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2EoXCJbXCIrYi5hZGRfbmFtZXNwYWNlKFwiZGF0YS1tYWdlbGxhbi1leHBlZGl0aW9uLWNsb25lXCIpK1wiXVwiLGIuc2NvcGUpLnJlbW92ZSgpfX19KGpRdWVyeSx3aW5kb3csd2luZG93LmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtGb3VuZGF0aW9uLmxpYnMub2ZmY2FudmFzPXtuYW1lOlwib2ZmY2FudmFzXCIsdmVyc2lvbjpcIjUuNS4zXCIsc2V0dGluZ3M6e29wZW5fbWV0aG9kOlwibW92ZVwiLGNsb3NlX29uX2NsaWNrOiExfSxpbml0OmZ1bmN0aW9uKGEsYixjKXt0aGlzLmJpbmRpbmdzKGIsYyl9LGV2ZW50czpmdW5jdGlvbigpe3ZhciBiPXRoaXMsYz1iLlMsZD1cIlwiLGU9XCJcIixmPVwiXCIsZz1cIlwiLGg9XCJcIjtcIm1vdmVcIj09PXRoaXMuc2V0dGluZ3Mub3Blbl9tZXRob2Q/KGQ9XCJtb3ZlLVwiLGU9XCJyaWdodFwiLGY9XCJsZWZ0XCIsZz1cInRvcFwiLGg9XCJib3R0b21cIik6XCJvdmVybGFwX3NpbmdsZVwiPT09dGhpcy5zZXR0aW5ncy5vcGVuX21ldGhvZD8oZD1cIm9mZmNhbnZhcy1vdmVybGFwLVwiLGU9XCJyaWdodFwiLGY9XCJsZWZ0XCIsZz1cInRvcFwiLGg9XCJib3R0b21cIik6XCJvdmVybGFwXCI9PT10aGlzLnNldHRpbmdzLm9wZW5fbWV0aG9kJiYoZD1cIm9mZmNhbnZhcy1vdmVybGFwXCIpLGModGhpcy5zY29wZSkub2ZmKFwiLm9mZmNhbnZhc1wiKS5vbihcImNsaWNrLmZuZHRuLm9mZmNhbnZhc1wiLFwiLmxlZnQtb2ZmLWNhbnZhcy10b2dnbGVcIixmdW5jdGlvbihmKXtiLmNsaWNrX3RvZ2dsZV9jbGFzcyhmLGQrZSksXCJvdmVybGFwXCIhPT1iLnNldHRpbmdzLm9wZW5fbWV0aG9kJiZjKFwiLmxlZnQtc3VibWVudVwiKS5yZW1vdmVDbGFzcyhkK2UpLGEoXCIubGVmdC1vZmYtY2FudmFzLXRvZ2dsZVwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwidHJ1ZVwiKX0pLm9uKFwiY2xpY2suZm5kdG4ub2ZmY2FudmFzXCIsXCIubGVmdC1vZmYtY2FudmFzLW1lbnUgYVwiLGZ1bmN0aW9uKGYpe3ZhciBnPWIuZ2V0X3NldHRpbmdzKGYpLGg9Yyh0aGlzKS5wYXJlbnQoKTshZy5jbG9zZV9vbl9jbGlja3x8aC5oYXNDbGFzcyhcImhhcy1zdWJtZW51XCIpfHxoLmhhc0NsYXNzKFwiYmFja1wiKT9jKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKFwiaGFzLXN1Ym1lbnVcIik/KGYucHJldmVudERlZmF1bHQoKSxjKHRoaXMpLnNpYmxpbmdzKFwiLmxlZnQtc3VibWVudVwiKS50b2dnbGVDbGFzcyhkK2UpKTpoLmhhc0NsYXNzKFwiYmFja1wiKSYmKGYucHJldmVudERlZmF1bHQoKSxoLnBhcmVudCgpLnJlbW92ZUNsYXNzKGQrZSkpOihiLmhpZGUuY2FsbChiLGQrZSxiLmdldF93cmFwcGVyKGYpKSxoLnBhcmVudCgpLnJlbW92ZUNsYXNzKGQrZSkpLGEoXCIubGVmdC1vZmYtY2FudmFzLXRvZ2dsZVwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwidHJ1ZVwiKX0pLm9uKFwiY2xpY2suZm5kdG4ub2ZmY2FudmFzXCIsXCIucmlnaHQtb2ZmLWNhbnZhcy10b2dnbGVcIixmdW5jdGlvbihlKXtiLmNsaWNrX3RvZ2dsZV9jbGFzcyhlLGQrZiksXCJvdmVybGFwXCIhPT1iLnNldHRpbmdzLm9wZW5fbWV0aG9kJiZjKFwiLnJpZ2h0LXN1Ym1lbnVcIikucmVtb3ZlQ2xhc3MoZCtmKSxhKFwiLnJpZ2h0LW9mZi1jYW52YXMtdG9nZ2xlXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpfSkub24oXCJjbGljay5mbmR0bi5vZmZjYW52YXNcIixcIi5yaWdodC1vZmYtY2FudmFzLW1lbnUgYVwiLGZ1bmN0aW9uKGUpe3ZhciBnPWIuZ2V0X3NldHRpbmdzKGUpLGg9Yyh0aGlzKS5wYXJlbnQoKTshZy5jbG9zZV9vbl9jbGlja3x8aC5oYXNDbGFzcyhcImhhcy1zdWJtZW51XCIpfHxoLmhhc0NsYXNzKFwiYmFja1wiKT9jKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKFwiaGFzLXN1Ym1lbnVcIik/KGUucHJldmVudERlZmF1bHQoKSxjKHRoaXMpLnNpYmxpbmdzKFwiLnJpZ2h0LXN1Ym1lbnVcIikudG9nZ2xlQ2xhc3MoZCtmKSk6aC5oYXNDbGFzcyhcImJhY2tcIikmJihlLnByZXZlbnREZWZhdWx0KCksaC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhkK2YpKTooYi5oaWRlLmNhbGwoYixkK2YsYi5nZXRfd3JhcHBlcihlKSksaC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhkK2YpKSxhKFwiLnJpZ2h0LW9mZi1jYW52YXMtdG9nZ2xlXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpO1xyXG59KS5vbihcImNsaWNrLmZuZHRuLm9mZmNhbnZhc1wiLFwiLnRvcC1vZmYtY2FudmFzLXRvZ2dsZVwiLGZ1bmN0aW9uKGUpe2IuY2xpY2tfdG9nZ2xlX2NsYXNzKGUsZCtoKSxcIm92ZXJsYXBcIiE9PWIuc2V0dGluZ3Mub3Blbl9tZXRob2QmJmMoXCIudG9wLXN1Ym1lbnVcIikucmVtb3ZlQ2xhc3MoZCtoKSxhKFwiLnRvcC1vZmYtY2FudmFzLXRvZ2dsZVwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwidHJ1ZVwiKX0pLm9uKFwiY2xpY2suZm5kdG4ub2ZmY2FudmFzXCIsXCIudG9wLW9mZi1jYW52YXMtbWVudSBhXCIsZnVuY3Rpb24oZSl7dmFyIGY9Yi5nZXRfc2V0dGluZ3MoZSksZz1jKHRoaXMpLnBhcmVudCgpOyFmLmNsb3NlX29uX2NsaWNrfHxnLmhhc0NsYXNzKFwiaGFzLXN1Ym1lbnVcIil8fGcuaGFzQ2xhc3MoXCJiYWNrXCIpP2ModGhpcykucGFyZW50KCkuaGFzQ2xhc3MoXCJoYXMtc3VibWVudVwiKT8oZS5wcmV2ZW50RGVmYXVsdCgpLGModGhpcykuc2libGluZ3MoXCIudG9wLXN1Ym1lbnVcIikudG9nZ2xlQ2xhc3MoZCtoKSk6Zy5oYXNDbGFzcyhcImJhY2tcIikmJihlLnByZXZlbnREZWZhdWx0KCksZy5wYXJlbnQoKS5yZW1vdmVDbGFzcyhkK2gpKTooYi5oaWRlLmNhbGwoYixkK2gsYi5nZXRfd3JhcHBlcihlKSksZy5wYXJlbnQoKS5yZW1vdmVDbGFzcyhkK2gpKSxhKFwiLnRvcC1vZmYtY2FudmFzLXRvZ2dsZVwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwidHJ1ZVwiKX0pLm9uKFwiY2xpY2suZm5kdG4ub2ZmY2FudmFzXCIsXCIuYm90dG9tLW9mZi1jYW52YXMtdG9nZ2xlXCIsZnVuY3Rpb24oZSl7Yi5jbGlja190b2dnbGVfY2xhc3MoZSxkK2cpLFwib3ZlcmxhcFwiIT09Yi5zZXR0aW5ncy5vcGVuX21ldGhvZCYmYyhcIi5ib3R0b20tc3VibWVudVwiKS5yZW1vdmVDbGFzcyhkK2cpLGEoXCIuYm90dG9tLW9mZi1jYW52YXMtdG9nZ2xlXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpfSkub24oXCJjbGljay5mbmR0bi5vZmZjYW52YXNcIixcIi5ib3R0b20tb2ZmLWNhbnZhcy1tZW51IGFcIixmdW5jdGlvbihlKXt2YXIgZj1iLmdldF9zZXR0aW5ncyhlKSxoPWModGhpcykucGFyZW50KCk7IWYuY2xvc2Vfb25fY2xpY2t8fGguaGFzQ2xhc3MoXCJoYXMtc3VibWVudVwiKXx8aC5oYXNDbGFzcyhcImJhY2tcIik/Yyh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcyhcImhhcy1zdWJtZW51XCIpPyhlLnByZXZlbnREZWZhdWx0KCksYyh0aGlzKS5zaWJsaW5ncyhcIi5ib3R0b20tc3VibWVudVwiKS50b2dnbGVDbGFzcyhkK2cpKTpoLmhhc0NsYXNzKFwiYmFja1wiKSYmKGUucHJldmVudERlZmF1bHQoKSxoLnBhcmVudCgpLnJlbW92ZUNsYXNzKGQrZykpOihiLmhpZGUuY2FsbChiLGQrZyxiLmdldF93cmFwcGVyKGUpKSxoLnBhcmVudCgpLnJlbW92ZUNsYXNzKGQrZykpLGEoXCIuYm90dG9tLW9mZi1jYW52YXMtdG9nZ2xlXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpfSkub24oXCJjbGljay5mbmR0bi5vZmZjYW52YXNcIixcIi5leGl0LW9mZi1jYW52YXNcIixmdW5jdGlvbihnKXtiLmNsaWNrX3JlbW92ZV9jbGFzcyhnLGQrZiksYyhcIi5yaWdodC1zdWJtZW51XCIpLnJlbW92ZUNsYXNzKGQrZiksZSYmKGIuY2xpY2tfcmVtb3ZlX2NsYXNzKGcsZCtlKSxjKFwiLmxlZnQtc3VibWVudVwiKS5yZW1vdmVDbGFzcyhkK2YpKSxhKFwiLnJpZ2h0LW9mZi1jYW52YXMtdG9nZ2xlXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpfSkub24oXCJjbGljay5mbmR0bi5vZmZjYW52YXNcIixcIi5leGl0LW9mZi1jYW52YXNcIixmdW5jdGlvbihjKXtiLmNsaWNrX3JlbW92ZV9jbGFzcyhjLGQrZiksYShcIi5sZWZ0LW9mZi1jYW52YXMtdG9nZ2xlXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJmYWxzZVwiKSxlJiYoYi5jbGlja19yZW1vdmVfY2xhc3MoYyxkK2UpLGEoXCIucmlnaHQtb2ZmLWNhbnZhcy10b2dnbGVcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpKX0pLm9uKFwiY2xpY2suZm5kdG4ub2ZmY2FudmFzXCIsXCIuZXhpdC1vZmYtY2FudmFzXCIsZnVuY3Rpb24oZSl7Yi5jbGlja19yZW1vdmVfY2xhc3MoZSxkK2cpLGMoXCIuYm90dG9tLXN1Ym1lbnVcIikucmVtb3ZlQ2xhc3MoZCtnKSxoJiYoYi5jbGlja19yZW1vdmVfY2xhc3MoZSxkK2gpLGMoXCIudG9wLXN1Ym1lbnVcIikucmVtb3ZlQ2xhc3MoZCtnKSksYShcIi5ib3R0b20tb2ZmLWNhbnZhcy10b2dnbGVcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIil9KS5vbihcImNsaWNrLmZuZHRuLm9mZmNhbnZhc1wiLFwiLmV4aXQtb2ZmLWNhbnZhc1wiLGZ1bmN0aW9uKGMpe2IuY2xpY2tfcmVtb3ZlX2NsYXNzKGMsZCtnKSxhKFwiLnRvcC1vZmYtY2FudmFzLXRvZ2dsZVwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksaCYmKGIuY2xpY2tfcmVtb3ZlX2NsYXNzKGMsZCtoKSxhKFwiLmJvdHRvbS1vZmYtY2FudmFzLXRvZ2dsZVwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIikpfSl9LHRvZ2dsZTpmdW5jdGlvbihhLGIpe2I9Ynx8dGhpcy5nZXRfd3JhcHBlcigpLGIuaXMoXCIuXCIrYSk/dGhpcy5oaWRlKGEsYik6dGhpcy5zaG93KGEsYil9LHNob3c6ZnVuY3Rpb24oYSxiKXtiPWJ8fHRoaXMuZ2V0X3dyYXBwZXIoKSxiLnRyaWdnZXIoXCJvcGVuLmZuZHRuLm9mZmNhbnZhc1wiKSxiLmFkZENsYXNzKGEpfSxoaWRlOmZ1bmN0aW9uKGEsYil7Yj1ifHx0aGlzLmdldF93cmFwcGVyKCksYi50cmlnZ2VyKFwiY2xvc2UuZm5kdG4ub2ZmY2FudmFzXCIpLGIucmVtb3ZlQ2xhc3MoYSl9LGNsaWNrX3RvZ2dsZV9jbGFzczpmdW5jdGlvbihhLGIpe2EucHJldmVudERlZmF1bHQoKTt2YXIgYz10aGlzLmdldF93cmFwcGVyKGEpO3RoaXMudG9nZ2xlKGIsYyl9LGNsaWNrX3JlbW92ZV9jbGFzczpmdW5jdGlvbihhLGIpe2EucHJldmVudERlZmF1bHQoKTt2YXIgYz10aGlzLmdldF93cmFwcGVyKGEpO3RoaXMuaGlkZShiLGMpfSxnZXRfc2V0dGluZ3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5TKGEudGFyZ2V0KS5jbG9zZXN0KFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIpO3JldHVybiBiLmRhdGEodGhpcy5hdHRyX25hbWUoITApK1wiLWluaXRcIil8fHRoaXMuc2V0dGluZ3N9LGdldF93cmFwcGVyOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuUyhhP2EudGFyZ2V0OnRoaXMuc2NvcGUpLmNsb3Nlc3QoXCIub2ZmLWNhbnZhcy13cmFwXCIpO3JldHVybiAwPT09Yi5sZW5ndGgmJihiPXRoaXMuUyhcIi5vZmYtY2FudmFzLXdyYXBcIikpLGJ9LHJlZmxvdzpmdW5jdGlvbigpe319fShqUXVlcnksd2luZG93LHdpbmRvdy5kb2N1bWVudCksZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ZnVuY3Rpb24oKXt9LGY9ZnVuY3Rpb24oZSxmKXtpZihlLmhhc0NsYXNzKGYuc2xpZGVzX2NvbnRhaW5lcl9jbGFzcykpcmV0dXJuIHRoaXM7dmFyIGosayxsLG0sbixvLHA9dGhpcyxxPWUscj0wLHM9ITE7cC5zbGlkZXM9ZnVuY3Rpb24oKXtyZXR1cm4gcS5jaGlsZHJlbihmLnNsaWRlX3NlbGVjdG9yKX0scC5zbGlkZXMoKS5maXJzdCgpLmFkZENsYXNzKGYuYWN0aXZlX3NsaWRlX2NsYXNzKSxwLnVwZGF0ZV9zbGlkZV9udW1iZXI9ZnVuY3Rpb24oYil7Zi5zbGlkZV9udW1iZXImJihrLmZpbmQoXCJzcGFuOmZpcnN0XCIpLnRleHQocGFyc2VJbnQoYikrMSksay5maW5kKFwic3BhbjpsYXN0XCIpLnRleHQocC5zbGlkZXMoKS5sZW5ndGgpKSxmLmJ1bGxldHMmJihsLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoZi5idWxsZXRzX2FjdGl2ZV9jbGFzcyksYShsLmNoaWxkcmVuKCkuZ2V0KGIpKS5hZGRDbGFzcyhmLmJ1bGxldHNfYWN0aXZlX2NsYXNzKSl9LHAudXBkYXRlX2FjdGl2ZV9saW5rPWZ1bmN0aW9uKGIpe3ZhciBjPWEoJ1tkYXRhLW9yYml0LWxpbms9XCInK3Auc2xpZGVzKCkuZXEoYikuYXR0cihcImRhdGEtb3JiaXQtc2xpZGVcIikrJ1wiXScpO2Muc2libGluZ3MoKS5yZW1vdmVDbGFzcyhmLmJ1bGxldHNfYWN0aXZlX2NsYXNzKSxjLmFkZENsYXNzKGYuYnVsbGV0c19hY3RpdmVfY2xhc3MpfSxwLmJ1aWxkX21hcmt1cD1mdW5jdGlvbigpe3Eud3JhcCgnPGRpdiBjbGFzcz1cIicrZi5jb250YWluZXJfY2xhc3MrJ1wiPjwvZGl2PicpLGo9cS5wYXJlbnQoKSxxLmFkZENsYXNzKGYuc2xpZGVzX2NvbnRhaW5lcl9jbGFzcyksZi5zdGFja19vbl9zbWFsbCYmai5hZGRDbGFzcyhmLnN0YWNrX29uX3NtYWxsX2NsYXNzKSxmLm5hdmlnYXRpb25fYXJyb3dzJiYoai5hcHBlbmQoYSgnPGEgaHJlZj1cIiNcIj48c3Bhbj48L3NwYW4+PC9hPicpLmFkZENsYXNzKGYucHJldl9jbGFzcykpLGouYXBwZW5kKGEoJzxhIGhyZWY9XCIjXCI+PHNwYW4+PC9zcGFuPjwvYT4nKS5hZGRDbGFzcyhmLm5leHRfY2xhc3MpKSksZi50aW1lciYmKG09YShcIjxkaXY+XCIpLmFkZENsYXNzKGYudGltZXJfY29udGFpbmVyX2NsYXNzKSxtLmFwcGVuZChcIjxzcGFuPlwiKSxtLmFwcGVuZChhKFwiPGRpdj5cIikuYWRkQ2xhc3MoZi50aW1lcl9wcm9ncmVzc19jbGFzcykpLG0uYWRkQ2xhc3MoZi50aW1lcl9wYXVzZWRfY2xhc3MpLGouYXBwZW5kKG0pKSxmLnNsaWRlX251bWJlciYmKGs9YShcIjxkaXY+XCIpLmFkZENsYXNzKGYuc2xpZGVfbnVtYmVyX2NsYXNzKSxrLmFwcGVuZChcIjxzcGFuPjwvc3Bhbj4gXCIrZi5zbGlkZV9udW1iZXJfdGV4dCtcIiA8c3Bhbj48L3NwYW4+XCIpLGouYXBwZW5kKGspKSxmLmJ1bGxldHMmJihsPWEoXCI8b2w+XCIpLmFkZENsYXNzKGYuYnVsbGV0c19jb250YWluZXJfY2xhc3MpLGouYXBwZW5kKGwpLGwud3JhcCgnPGRpdiBjbGFzcz1cIm9yYml0LWJ1bGxldHMtY29udGFpbmVyXCI+PC9kaXY+JykscC5zbGlkZXMoKS5lYWNoKGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YShcIjxsaT5cIikuYXR0cihcImRhdGEtb3JiaXQtc2xpZGVcIixiKS5vbihcImNsaWNrXCIscC5saW5rX2J1bGxldCk7bC5hcHBlbmQoZCl9KSl9LHAuX2dvdG89ZnVuY3Rpb24oYixjKXtpZihiPT09cilyZXR1cm4hMTtcIm9iamVjdFwiPT10eXBlb2YgbyYmby5yZXN0YXJ0KCk7dmFyIGQ9cC5zbGlkZXMoKSxlPVwibmV4dFwiO2lmKHM9ITAscj5iJiYoZT1cInByZXZcIiksYj49ZC5sZW5ndGgpe2lmKCFmLmNpcmN1bGFyKXJldHVybiExO2I9MH1lbHNlIGlmKDA+Yil7aWYoIWYuY2lyY3VsYXIpcmV0dXJuITE7Yj1kLmxlbmd0aC0xfXZhciBnPWEoZC5nZXQocikpLGg9YShkLmdldChiKSk7Zy5jc3MoXCJ6SW5kZXhcIiwyKSxnLnJlbW92ZUNsYXNzKGYuYWN0aXZlX3NsaWRlX2NsYXNzKSxoLmNzcyhcInpJbmRleFwiLDQpLmFkZENsYXNzKGYuYWN0aXZlX3NsaWRlX2NsYXNzKSxxLnRyaWdnZXIoXCJiZWZvcmUtc2xpZGUtY2hhbmdlLmZuZHRuLm9yYml0XCIpLGYuYmVmb3JlX3NsaWRlX2NoYW5nZSgpLHAudXBkYXRlX2FjdGl2ZV9saW5rKGIpO3ZhciBpPWZ1bmN0aW9uKCl7dmFyIGE9ZnVuY3Rpb24oKXtyPWIscz0hMSxjPT09ITAmJihvPXAuY3JlYXRlX3RpbWVyKCksby5zdGFydCgpKSxwLnVwZGF0ZV9zbGlkZV9udW1iZXIocikscS50cmlnZ2VyKFwiYWZ0ZXItc2xpZGUtY2hhbmdlLmZuZHRuLm9yYml0XCIsW3tzbGlkZV9udW1iZXI6cix0b3RhbF9zbGlkZXM6ZC5sZW5ndGh9XSksZi5hZnRlcl9zbGlkZV9jaGFuZ2UocixkLmxlbmd0aCl9O3Eub3V0ZXJIZWlnaHQoKSE9aC5vdXRlckhlaWdodCgpJiZmLnZhcmlhYmxlX2hlaWdodD9xLmFuaW1hdGUoe2hlaWdodDpoLm91dGVySGVpZ2h0KCl9LDI1MCxcImxpbmVhclwiLGEpOmEoKX07aWYoMT09PWQubGVuZ3RoKXJldHVybiBpKCksITE7dmFyIGo9ZnVuY3Rpb24oKXtcIm5leHRcIj09PWUmJm4ubmV4dChnLGgsaSksXCJwcmV2XCI9PT1lJiZuLnByZXYoZyxoLGkpfTtoLm91dGVySGVpZ2h0KCk+cS5vdXRlckhlaWdodCgpJiZmLnZhcmlhYmxlX2hlaWdodD9xLmFuaW1hdGUoe2hlaWdodDpoLm91dGVySGVpZ2h0KCl9LDI1MCxcImxpbmVhclwiLGopOmooKX0scC5uZXh0PWZ1bmN0aW9uKGEpe2Euc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksYS5wcmV2ZW50RGVmYXVsdCgpLHAuX2dvdG8ocisxKX0scC5wcmV2PWZ1bmN0aW9uKGEpe2Euc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksYS5wcmV2ZW50RGVmYXVsdCgpLHAuX2dvdG8oci0xKX0scC5saW5rX2N1c3RvbT1mdW5jdGlvbihiKXtiLnByZXZlbnREZWZhdWx0KCk7dmFyIGM9YSh0aGlzKS5hdHRyKFwiZGF0YS1vcmJpdC1saW5rXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBjJiZcIlwiIT0oYz1hLnRyaW0oYykpKXt2YXIgZD1qLmZpbmQoXCJbZGF0YS1vcmJpdC1zbGlkZT1cIitjK1wiXVwiKTstMSE9ZC5pbmRleCgpJiZwLl9nb3RvKGQuaW5kZXgoKSl9fSxwLmxpbmtfYnVsbGV0PWZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuYXR0cihcImRhdGEtb3JiaXQtc2xpZGVcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGMmJlwiXCIhPShjPWEudHJpbShjKSkpaWYoaXNOYU4ocGFyc2VJbnQoYykpKXt2YXIgZD1qLmZpbmQoXCJbZGF0YS1vcmJpdC1zbGlkZT1cIitjK1wiXVwiKTstMSE9ZC5pbmRleCgpJiZwLl9nb3RvKGQuaW5kZXgoKSsxKX1lbHNlIHAuX2dvdG8ocGFyc2VJbnQoYykpfSxwLnRpbWVyX2NhbGxiYWNrPWZ1bmN0aW9uKCl7cC5fZ290byhyKzEsITApfSxwLmNvbXB1dGVfZGltZW5zaW9ucz1mdW5jdGlvbigpe3ZhciBiPWEocC5zbGlkZXMoKS5nZXQocikpLGM9Yi5vdXRlckhlaWdodCgpO2YudmFyaWFibGVfaGVpZ2h0fHxwLnNsaWRlcygpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLm91dGVySGVpZ2h0KCk+YyYmKGM9YSh0aGlzKS5vdXRlckhlaWdodCgpKX0pLHEuaGVpZ2h0KGMpfSxwLmNyZWF0ZV90aW1lcj1mdW5jdGlvbigpe3ZhciBhPW5ldyBnKGouZmluZChcIi5cIitmLnRpbWVyX2NvbnRhaW5lcl9jbGFzcyksZixwLnRpbWVyX2NhbGxiYWNrKTtyZXR1cm4gYX0scC5zdG9wX3RpbWVyPWZ1bmN0aW9uKCl7XCJvYmplY3RcIj09dHlwZW9mIG8mJm8uc3RvcCgpfSxwLnRvZ2dsZV90aW1lcj1mdW5jdGlvbigpe3ZhciBhPWouZmluZChcIi5cIitmLnRpbWVyX2NvbnRhaW5lcl9jbGFzcyk7YS5oYXNDbGFzcyhmLnRpbWVyX3BhdXNlZF9jbGFzcyk/KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBvJiYobz1wLmNyZWF0ZV90aW1lcigpKSxvLnN0YXJ0KCkpOlwib2JqZWN0XCI9PXR5cGVvZiBvJiZvLnN0b3AoKX0scC5pbml0PWZ1bmN0aW9uKCl7cC5idWlsZF9tYXJrdXAoKSxmLnRpbWVyJiYobz1wLmNyZWF0ZV90aW1lcigpLEZvdW5kYXRpb24udXRpbHMuaW1hZ2VfbG9hZGVkKHRoaXMuc2xpZGVzKCkuY2hpbGRyZW4oXCJpbWdcIiksby5zdGFydCkpLG49bmV3IGkoZixxKSxcInNsaWRlXCI9PT1mLmFuaW1hdGlvbiYmKG49bmV3IGgoZixxKSksai5vbihcImNsaWNrXCIsXCIuXCIrZi5uZXh0X2NsYXNzLHAubmV4dCksai5vbihcImNsaWNrXCIsXCIuXCIrZi5wcmV2X2NsYXNzLHAucHJldiksZi5uZXh0X29uX2NsaWNrJiZqLm9uKFwiY2xpY2tcIixcIi5cIitmLnNsaWRlc19jb250YWluZXJfY2xhc3MrXCIgW2RhdGEtb3JiaXQtc2xpZGVdXCIscC5saW5rX2J1bGxldCksai5vbihcImNsaWNrXCIscC50b2dnbGVfdGltZXIpLGYuc3dpcGUmJmoub24oXCJ0b3VjaHN0YXJ0LmZuZHRuLm9yYml0XCIsZnVuY3Rpb24oYSl7YS50b3VjaGVzfHwoYT1hLm9yaWdpbmFsRXZlbnQpO3ZhciBiPXtzdGFydF9wYWdlX3g6YS50b3VjaGVzWzBdLnBhZ2VYLHN0YXJ0X3BhZ2VfeTphLnRvdWNoZXNbMF0ucGFnZVksc3RhcnRfdGltZToobmV3IERhdGUpLmdldFRpbWUoKSxkZWx0YV94OjAsaXNfc2Nyb2xsaW5nOmR9O2ouZGF0YShcInN3aXBlLXRyYW5zaXRpb25cIixiKSxhLnN0b3BQcm9wYWdhdGlvbigpfSkub24oXCJ0b3VjaG1vdmUuZm5kdG4ub3JiaXRcIixmdW5jdGlvbihhKXtpZihhLnRvdWNoZXN8fChhPWEub3JpZ2luYWxFdmVudCksIShhLnRvdWNoZXMubGVuZ3RoPjF8fGEuc2NhbGUmJjEhPT1hLnNjYWxlKSl7dmFyIGI9ai5kYXRhKFwic3dpcGUtdHJhbnNpdGlvblwiKTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgYiYmKGI9e30pLGIuZGVsdGFfeD1hLnRvdWNoZXNbMF0ucGFnZVgtYi5zdGFydF9wYWdlX3gsXCJ1bmRlZmluZWRcIj09dHlwZW9mIGIuaXNfc2Nyb2xsaW5nJiYoYi5pc19zY3JvbGxpbmc9ISEoYi5pc19zY3JvbGxpbmd8fE1hdGguYWJzKGIuZGVsdGFfeCk8TWF0aC5hYnMoYS50b3VjaGVzWzBdLnBhZ2VZLWIuc3RhcnRfcGFnZV95KSkpLCFiLmlzX3Njcm9sbGluZyYmIWIuYWN0aXZlKXthLnByZXZlbnREZWZhdWx0KCk7dmFyIGM9Yi5kZWx0YV94PDA/cisxOnItMTtiLmFjdGl2ZT0hMCxwLl9nb3RvKGMpfX19KS5vbihcInRvdWNoZW5kLmZuZHRuLm9yYml0XCIsZnVuY3Rpb24oYSl7ai5kYXRhKFwic3dpcGUtdHJhbnNpdGlvblwiLHt9KSxhLnN0b3BQcm9wYWdhdGlvbigpfSksai5vbihcIm1vdXNlZW50ZXIuZm5kdG4ub3JiaXRcIixmdW5jdGlvbihhKXtmLnRpbWVyJiZmLnBhdXNlX29uX2hvdmVyJiZwLnN0b3BfdGltZXIoKX0pLm9uKFwibW91c2VsZWF2ZS5mbmR0bi5vcmJpdFwiLGZ1bmN0aW9uKGEpe2YudGltZXImJmYucmVzdW1lX29uX21vdXNlb3V0JiZvLnN0YXJ0KCl9KSxhKGMpLm9uKFwiY2xpY2tcIixcIltkYXRhLW9yYml0LWxpbmtdXCIscC5saW5rX2N1c3RvbSksYShiKS5vbihcImxvYWQgcmVzaXplXCIscC5jb21wdXRlX2RpbWVuc2lvbnMpLEZvdW5kYXRpb24udXRpbHMuaW1hZ2VfbG9hZGVkKHRoaXMuc2xpZGVzKCkuY2hpbGRyZW4oXCJpbWdcIikscC5jb21wdXRlX2RpbWVuc2lvbnMpLEZvdW5kYXRpb24udXRpbHMuaW1hZ2VfbG9hZGVkKHRoaXMuc2xpZGVzKCkuY2hpbGRyZW4oXCJpbWdcIiksZnVuY3Rpb24oKXtqLnByZXYoXCIuXCIrZi5wcmVsb2FkZXJfY2xhc3MpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIikscC51cGRhdGVfc2xpZGVfbnVtYmVyKDApLHAudXBkYXRlX2FjdGl2ZV9saW5rKDApLHEudHJpZ2dlcihcInJlYWR5LmZuZHRuLm9yYml0XCIpfSl9LHAuaW5pdCgpfSxnPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9dGhpcyxnPWIudGltZXJfc3BlZWQsaD1hLmZpbmQoXCIuXCIrYi50aW1lcl9wcm9ncmVzc19jbGFzcyksaT0tMTt0aGlzLnVwZGF0ZV9wcm9ncmVzcz1mdW5jdGlvbihhKXt2YXIgYj1oLmNsb25lKCk7Yi5hdHRyKFwic3R5bGVcIixcIlwiKSxiLmNzcyhcIndpZHRoXCIsYStcIiVcIiksaC5yZXBsYWNlV2l0aChiKSxoPWJ9LHRoaXMucmVzdGFydD1mdW5jdGlvbigpe2NsZWFyVGltZW91dChlKSxhLmFkZENsYXNzKGIudGltZXJfcGF1c2VkX2NsYXNzKSxpPS0xLGYudXBkYXRlX3Byb2dyZXNzKDApfSx0aGlzLnN0YXJ0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuaGFzQ2xhc3MoYi50aW1lcl9wYXVzZWRfY2xhc3MpPyhpPS0xPT09aT9nOmksYS5yZW1vdmVDbGFzcyhiLnRpbWVyX3BhdXNlZF9jbGFzcyksZD0obmV3IERhdGUpLmdldFRpbWUoKSxoLmFuaW1hdGUoe3dpZHRoOlwiMTAwJVwifSxpLFwibGluZWFyXCIpLGU9c2V0VGltZW91dChmdW5jdGlvbigpe2YucmVzdGFydCgpLGMoKX0saSksdm9pZCBhLnRyaWdnZXIoXCJ0aW1lci1zdGFydGVkLmZuZHRuLm9yYml0XCIpKTohMH0sdGhpcy5zdG9wPWZ1bmN0aW9uKCl7aWYoYS5oYXNDbGFzcyhiLnRpbWVyX3BhdXNlZF9jbGFzcykpcmV0dXJuITA7Y2xlYXJUaW1lb3V0KGUpLGEuYWRkQ2xhc3MoYi50aW1lcl9wYXVzZWRfY2xhc3MpO3ZhciBjPShuZXcgRGF0ZSkuZ2V0VGltZSgpO2ktPWMtZDt2YXIgaD0xMDAtaS9nKjEwMDtmLnVwZGF0ZV9wcm9ncmVzcyhoKSxhLnRyaWdnZXIoXCJ0aW1lci1zdG9wcGVkLmZuZHRuLm9yYml0XCIpfX0saD1mdW5jdGlvbihiLGMpe3ZhciBkPWIuYW5pbWF0aW9uX3NwZWVkLGU9MT09PWEoXCJodG1sW2Rpcj1ydGxdXCIpLmxlbmd0aCxmPWU/XCJtYXJnaW5SaWdodFwiOlwibWFyZ2luTGVmdFwiLGc9e307Z1tmXT1cIjAlXCIsdGhpcy5uZXh0PWZ1bmN0aW9uKGEsYixjKXthLmFuaW1hdGUoe21hcmdpbkxlZnQ6XCItMTAwJVwifSxkKSxiLmFuaW1hdGUoZyxkLGZ1bmN0aW9uKCl7YS5jc3MoZixcIjEwMCVcIiksYygpfSl9LHRoaXMucHJldj1mdW5jdGlvbihhLGIsYyl7YS5hbmltYXRlKHttYXJnaW5MZWZ0OlwiMTAwJVwifSxkKSxiLmNzcyhmLFwiLTEwMCVcIiksYi5hbmltYXRlKGcsZCxmdW5jdGlvbigpe2EuY3NzKGYsXCIxMDAlXCIpLGMoKX0pfX0saT1mdW5jdGlvbihiLGMpe3ZhciBkPWIuYW5pbWF0aW9uX3NwZWVkOzE9PT1hKFwiaHRtbFtkaXI9cnRsXVwiKS5sZW5ndGg7dGhpcy5uZXh0PWZ1bmN0aW9uKGEsYixjKXtiLmNzcyh7bWFyZ2luOlwiMCVcIixvcGFjaXR5OlwiMC4wMVwifSksYi5hbmltYXRlKHtvcGFjaXR5OlwiMVwifSxkLFwibGluZWFyXCIsZnVuY3Rpb24oKXthLmNzcyhcIm1hcmdpblwiLFwiMTAwJVwiKSxjKCl9KX0sdGhpcy5wcmV2PWZ1bmN0aW9uKGEsYixjKXtiLmNzcyh7bWFyZ2luOlwiMCVcIixvcGFjaXR5OlwiMC4wMVwifSksYi5hbmltYXRlKHtvcGFjaXR5OlwiMVwifSxkLFwibGluZWFyXCIsZnVuY3Rpb24oKXthLmNzcyhcIm1hcmdpblwiLFwiMTAwJVwiKSxjKCl9KX19O0ZvdW5kYXRpb24ubGlicz1Gb3VuZGF0aW9uLmxpYnN8fHt9LEZvdW5kYXRpb24ubGlicy5vcmJpdD17bmFtZTpcIm9yYml0XCIsdmVyc2lvbjpcIjUuNS4zXCIsc2V0dGluZ3M6e2FuaW1hdGlvbjpcInNsaWRlXCIsdGltZXJfc3BlZWQ6MWU0LHBhdXNlX29uX2hvdmVyOiEwLHJlc3VtZV9vbl9tb3VzZW91dDohMSxuZXh0X29uX2NsaWNrOiEwLGFuaW1hdGlvbl9zcGVlZDo1MDAsc3RhY2tfb25fc21hbGw6ITEsbmF2aWdhdGlvbl9hcnJvd3M6ITAsc2xpZGVfbnVtYmVyOiEwLHNsaWRlX251bWJlcl90ZXh0Olwib2ZcIixjb250YWluZXJfY2xhc3M6XCJvcmJpdC1jb250YWluZXJcIixzdGFja19vbl9zbWFsbF9jbGFzczpcIm9yYml0LXN0YWNrLW9uLXNtYWxsXCIsbmV4dF9jbGFzczpcIm9yYml0LW5leHRcIixwcmV2X2NsYXNzOlwib3JiaXQtcHJldlwiLHRpbWVyX2NvbnRhaW5lcl9jbGFzczpcIm9yYml0LXRpbWVyXCIsdGltZXJfcGF1c2VkX2NsYXNzOlwicGF1c2VkXCIsdGltZXJfcHJvZ3Jlc3NfY2xhc3M6XCJvcmJpdC1wcm9ncmVzc1wiLHNsaWRlc19jb250YWluZXJfY2xhc3M6XCJvcmJpdC1zbGlkZXMtY29udGFpbmVyXCIscHJlbG9hZGVyX2NsYXNzOlwicHJlbG9hZGVyXCIsc2xpZGVfc2VsZWN0b3I6XCIqXCIsYnVsbGV0c19jb250YWluZXJfY2xhc3M6XCJvcmJpdC1idWxsZXRzXCIsYnVsbGV0c19hY3RpdmVfY2xhc3M6XCJhY3RpdmVcIixzbGlkZV9udW1iZXJfY2xhc3M6XCJvcmJpdC1zbGlkZS1udW1iZXJcIixjYXB0aW9uX2NsYXNzOlwib3JiaXQtY2FwdGlvblwiLGFjdGl2ZV9zbGlkZV9jbGFzczpcImFjdGl2ZVwiLG9yYml0X3RyYW5zaXRpb25fY2xhc3M6XCJvcmJpdC10cmFuc2l0aW9uaW5nXCIsYnVsbGV0czohMCxjaXJjdWxhcjohMCx0aW1lcjohMCx2YXJpYWJsZV9oZWlnaHQ6ITEsc3dpcGU6ITAsYmVmb3JlX3NsaWRlX2NoYW5nZTplLGFmdGVyX3NsaWRlX2NoYW5nZTplfSxpbml0OmZ1bmN0aW9uKGEsYixjKXt0aGlzLmJpbmRpbmdzKGIsYyl9LGV2ZW50czpmdW5jdGlvbihhKXt2YXIgYj1uZXcgZih0aGlzLlMoYSksdGhpcy5TKGEpLmRhdGEoXCJvcmJpdC1pbml0XCIpKTt0aGlzLlMoYSkuZGF0YSh0aGlzLm5hbWUrXCItaW5zdGFuY2VcIixiKX0scmVmbG93OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcztpZihhLlMoYS5zY29wZSkuaXMoXCJbZGF0YS1vcmJpdF1cIikpe3ZhciBiPWEuUyhhLnNjb3BlKSxjPWIuZGF0YShhLm5hbWUrXCItaW5zdGFuY2VcIik7Yy5jb21wdXRlX2RpbWVuc2lvbnMoKX1lbHNlIGEuUyhcIltkYXRhLW9yYml0XVwiLGEuc2NvcGUpLmVhY2goZnVuY3Rpb24oYixjKXt2YXIgZD1hLlMoYyksZT0oYS5kYXRhX29wdGlvbnMoZCksZC5kYXRhKGEubmFtZStcIi1pbnN0YW5jZVwiKSk7ZS5jb21wdXRlX2RpbWVuc2lvbnMoKX0pfX19KGpRdWVyeSx3aW5kb3csd2luZG93LmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGEpe3ZhciBiPS9mYWRlL2kudGVzdChhKSxjPS9wb3AvaS50ZXN0KGEpO3JldHVybnthbmltYXRlOmJ8fGMscG9wOmMsZmFkZTpifX12YXIgZj1bXTtGb3VuZGF0aW9uLmxpYnMucmV2ZWFsPXtuYW1lOlwicmV2ZWFsXCIsdmVyc2lvbjpcIjUuNS4zXCIsbG9ja2VkOiExLHNldHRpbmdzOnthbmltYXRpb246XCJmYWRlQW5kUG9wXCIsYW5pbWF0aW9uX3NwZWVkOjI1MCxjbG9zZV9vbl9iYWNrZ3JvdW5kX2NsaWNrOiEwLGNsb3NlX29uX2VzYzohMCxkaXNtaXNzX21vZGFsX2NsYXNzOlwiY2xvc2UtcmV2ZWFsLW1vZGFsXCIsbXVsdGlwbGVfb3BlbmVkOiExLGJnX2NsYXNzOlwicmV2ZWFsLW1vZGFsLWJnXCIscm9vdF9lbGVtZW50OlwiYm9keVwiLG9wZW46ZnVuY3Rpb24oKXt9LG9wZW5lZDpmdW5jdGlvbigpe30sY2xvc2U6ZnVuY3Rpb24oKXt9LGNsb3NlZDpmdW5jdGlvbigpe30sb25fYWpheF9lcnJvcjphLm5vb3AsYmc6YShcIi5yZXZlYWwtbW9kYWwtYmdcIiksY3NzOntvcGVuOntvcGFjaXR5OjAsdmlzaWJpbGl0eTpcInZpc2libGVcIixkaXNwbGF5OlwiYmxvY2tcIn0sY2xvc2U6e29wYWNpdHk6MSx2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcIm5vbmVcIn19fSxpbml0OmZ1bmN0aW9uKGIsYyxkKXthLmV4dGVuZCghMCx0aGlzLnNldHRpbmdzLGMsZCksdGhpcy5iaW5kaW5ncyhjLGQpfSxldmVudHM6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxkPWIuUztyZXR1cm4gZCh0aGlzLnNjb3BlKS5vZmYoXCIucmV2ZWFsXCIpLm9uKFwiY2xpY2suZm5kdG4ucmV2ZWFsXCIsXCJbXCIrdGhpcy5hZGRfbmFtZXNwYWNlKFwiZGF0YS1yZXZlYWwtaWRcIikrXCJdOm5vdChbZGlzYWJsZWRdKVwiLGZ1bmN0aW9uKGEpe2lmKGEucHJldmVudERlZmF1bHQoKSwhYi5sb2NrZWQpe3ZhciBjPWQodGhpcyksZT1jLmRhdGEoYi5kYXRhX2F0dHIoXCJyZXZlYWwtYWpheFwiKSksZj1jLmRhdGEoYi5kYXRhX2F0dHIoXCJyZXZlYWwtcmVwbGFjZS1jb250ZW50XCIpKTtpZihiLmxvY2tlZD0hMCxcInVuZGVmaW5lZFwiPT10eXBlb2YgZSliLm9wZW4uY2FsbChiLGMpO2Vsc2V7dmFyIGc9ZT09PSEwP2MuYXR0cihcImhyZWZcIik6ZTtiLm9wZW4uY2FsbChiLGMse3VybDpnfSx7cmVwbGFjZUNvbnRlbnRTZWw6Zn0pfX19KSxkKGMpLm9uKFwiY2xpY2suZm5kdG4ucmV2ZWFsXCIsdGhpcy5jbG9zZV90YXJnZXRzKCksZnVuY3Rpb24oYSl7aWYoYS5wcmV2ZW50RGVmYXVsdCgpLCFiLmxvY2tlZCl7dmFyIGM9ZChcIltcIitiLmF0dHJfbmFtZSgpK1wiXS5vcGVuXCIpLmRhdGEoYi5hdHRyX25hbWUoITApK1wiLWluaXRcIil8fGIuc2V0dGluZ3MsZT1kKGEudGFyZ2V0KVswXT09PWQoXCIuXCIrYy5iZ19jbGFzcylbMF07aWYoZSl7aWYoIWMuY2xvc2Vfb25fYmFja2dyb3VuZF9jbGljaylyZXR1cm47YS5zdG9wUHJvcGFnYXRpb24oKX1iLmxvY2tlZD0hMCxiLmNsb3NlLmNhbGwoYixlP2QoXCJbXCIrYi5hdHRyX25hbWUoKStcIl0ub3Blbjpub3QoLnRvYmFjaylcIik6ZCh0aGlzKS5jbG9zZXN0KFwiW1wiK2IuYXR0cl9uYW1lKCkrXCJdXCIpKX19KSxkKFwiW1wiK2IuYXR0cl9uYW1lKCkrXCJdXCIsdGhpcy5zY29wZSkubGVuZ3RoPjA/ZCh0aGlzLnNjb3BlKS5vbihcIm9wZW4uZm5kdG4ucmV2ZWFsXCIsdGhpcy5zZXR0aW5ncy5vcGVuKS5vbihcIm9wZW5lZC5mbmR0bi5yZXZlYWxcIix0aGlzLnNldHRpbmdzLm9wZW5lZCkub24oXCJvcGVuZWQuZm5kdG4ucmV2ZWFsXCIsdGhpcy5vcGVuX3ZpZGVvKS5vbihcImNsb3NlLmZuZHRuLnJldmVhbFwiLHRoaXMuc2V0dGluZ3MuY2xvc2UpLm9uKFwiY2xvc2VkLmZuZHRuLnJldmVhbFwiLHRoaXMuc2V0dGluZ3MuY2xvc2VkKS5vbihcImNsb3NlZC5mbmR0bi5yZXZlYWxcIix0aGlzLmNsb3NlX3ZpZGVvKTpkKHRoaXMuc2NvcGUpLm9uKFwib3Blbi5mbmR0bi5yZXZlYWxcIixcIltcIitiLmF0dHJfbmFtZSgpK1wiXVwiLHRoaXMuc2V0dGluZ3Mub3Blbikub24oXCJvcGVuZWQuZm5kdG4ucmV2ZWFsXCIsXCJbXCIrYi5hdHRyX25hbWUoKStcIl1cIix0aGlzLnNldHRpbmdzLm9wZW5lZCkub24oXCJvcGVuZWQuZm5kdG4ucmV2ZWFsXCIsXCJbXCIrYi5hdHRyX25hbWUoKStcIl1cIix0aGlzLm9wZW5fdmlkZW8pLm9uKFwiY2xvc2UuZm5kdG4ucmV2ZWFsXCIsXCJbXCIrYi5hdHRyX25hbWUoKStcIl1cIix0aGlzLnNldHRpbmdzLmNsb3NlKS5vbihcImNsb3NlZC5mbmR0bi5yZXZlYWxcIixcIltcIitiLmF0dHJfbmFtZSgpK1wiXVwiLHRoaXMuc2V0dGluZ3MuY2xvc2VkKS5vbihcImNsb3NlZC5mbmR0bi5yZXZlYWxcIixcIltcIitiLmF0dHJfbmFtZSgpK1wiXVwiLHRoaXMuY2xvc2VfdmlkZW8pLCEwfSxrZXlfdXBfb246ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gYi5TKFwiYm9keVwiKS5vZmYoXCJrZXl1cC5mbmR0bi5yZXZlYWxcIikub24oXCJrZXl1cC5mbmR0bi5yZXZlYWxcIixmdW5jdGlvbihhKXt2YXIgYz1iLlMoXCJbXCIrYi5hdHRyX25hbWUoKStcIl0ub3BlblwiKSxkPWMuZGF0YShiLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKXx8Yi5zZXR0aW5ncztkJiYyNz09PWEud2hpY2gmJmQuY2xvc2Vfb25fZXNjJiYhYi5sb2NrZWQmJmIuY2xvc2UuY2FsbChiLGMpfSksITB9LGtleV91cF9vZmY6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuUyhcImJvZHlcIikub2ZmKFwia2V5dXAuZm5kdG4ucmV2ZWFsXCIpLCEwfSxvcGVuOmZ1bmN0aW9uKGMsZSl7dmFyIGcsaD10aGlzO2M/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGMuc2VsZWN0b3I/Zz1oLlMoXCIjXCIrYy5kYXRhKGguZGF0YV9hdHRyKFwicmV2ZWFsLWlkXCIpKSkuZmlyc3QoKTooZz1oLlModGhpcy5zY29wZSksZT1jKTpnPWguUyh0aGlzLnNjb3BlKTt2YXIgaT1nLmRhdGEoaC5hdHRyX25hbWUoITApK1wiLWluaXRcIik7aWYoaT1pfHx0aGlzLnNldHRpbmdzLGcuaGFzQ2xhc3MoXCJvcGVuXCIpJiZjIT09ZCYmYy5hdHRyKFwiZGF0YS1yZXZlYWwtaWRcIik9PWcuYXR0cihcImlkXCIpKXJldHVybiBoLmNsb3NlKGcpO2lmKCFnLmhhc0NsYXNzKFwib3BlblwiKSl7dmFyIGo9aC5TKFwiW1wiK2guYXR0cl9uYW1lKCkrXCJdLm9wZW5cIik7XCJ1bmRlZmluZWRcIj09dHlwZW9mIGcuZGF0YShcImNzcy10b3BcIikmJmcuZGF0YShcImNzcy10b3BcIixwYXJzZUludChnLmNzcyhcInRvcFwiKSwxMCkpLmRhdGEoXCJvZmZzZXRcIix0aGlzLmNhY2hlX29mZnNldChnKSksZy5hdHRyKFwidGFiaW5kZXhcIixcIjBcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSx0aGlzLmtleV91cF9vbihnKSxnLm9uKFwib3Blbi5mbmR0bi5yZXZlYWxcIixmdW5jdGlvbihhKXtcImZuZHRuLnJldmVhbFwiIT09YS5uYW1lc3BhY2V9KSxnLm9uKFwib3Blbi5mbmR0bi5yZXZlYWxcIikudHJpZ2dlcihcIm9wZW4uZm5kdG4ucmV2ZWFsXCIpLGoubGVuZ3RoPDEmJnRoaXMudG9nZ2xlX2JnKGcsITApLFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT17dXJsOmV9KTt2YXIgaz1mdW5jdGlvbigpe2oubGVuZ3RoPjAmJihpLm11bHRpcGxlX29wZW5lZD9oLnRvX2JhY2soaik6aC5oaWRlKGosaS5jc3MuY2xvc2UpKSxpLm11bHRpcGxlX29wZW5lZCYmZi5wdXNoKGcpLGguc2hvdyhnLGkuY3NzLm9wZW4pfTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmZS51cmwpe3ZhciBsPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnN1Y2Nlc3M/ZS5zdWNjZXNzOm51bGw7YS5leHRlbmQoZSx7c3VjY2VzczpmdW5jdGlvbihiLGMsZCl7aWYoYS5pc0Z1bmN0aW9uKGwpKXt2YXIgZT1sKGIsYyxkKTtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGI9ZSl9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG9wdGlvbnMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBvcHRpb25zLnJlcGxhY2VDb250ZW50U2VsP2cuZmluZChvcHRpb25zLnJlcGxhY2VDb250ZW50U2VsKS5odG1sKGIpOmcuaHRtbChiKSxoLlMoZykuZm91bmRhdGlvbihcInNlY3Rpb25cIixcInJlZmxvd1wiKSxoLlMoZykuY2hpbGRyZW4oKS5mb3VuZGF0aW9uKCksaygpfX0pLGkub25fYWpheF9lcnJvciE9PWEubm9vcCYmYS5leHRlbmQoZSx7ZXJyb3I6aS5vbl9hamF4X2Vycm9yfSksYS5hamF4KGUpfWVsc2UgaygpfWguUyhiKS50cmlnZ2VyKFwicmVzaXplXCIpfSxjbG9zZTpmdW5jdGlvbihiKXt2YXIgYj1iJiZiLmxlbmd0aD9iOnRoaXMuUyh0aGlzLnNjb3BlKSxjPXRoaXMuUyhcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiXS5vcGVuXCIpLGQ9Yi5kYXRhKHRoaXMuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpfHx0aGlzLnNldHRpbmdzLGU9dGhpcztpZihjLmxlbmd0aD4wKWlmKGIucmVtb3ZlQXR0cihcInRhYmluZGV4XCIsXCIwXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSx0aGlzLmxvY2tlZD0hMCx0aGlzLmtleV91cF9vZmYoYiksYi50cmlnZ2VyKFwiY2xvc2UuZm5kdG4ucmV2ZWFsXCIpLChkLm11bHRpcGxlX29wZW5lZCYmMT09PWMubGVuZ3RofHwhZC5tdWx0aXBsZV9vcGVuZWR8fGIubGVuZ3RoPjEpJiYoZS50b2dnbGVfYmcoYiwhMSksZS50b19mcm9udChiKSksZC5tdWx0aXBsZV9vcGVuZWQpe3ZhciBnPWIuaXMoXCI6bm90KC50b2JhY2spXCIpO2UuaGlkZShiLGQuY3NzLmNsb3NlLGQpLGc/Zi5wb3AoKTpmPWEuZ3JlcChmLGZ1bmN0aW9uKGEpe3ZhciBjPWFbMF09PT1iWzBdO3JldHVybiBjJiZlLnRvX2Zyb250KGIpLCFjfSksZi5sZW5ndGg+MCYmZS50b19mcm9udChmW2YubGVuZ3RoLTFdKX1lbHNlIGUuaGlkZShjLGQuY3NzLmNsb3NlLGQpfSxjbG9zZV90YXJnZXRzOmZ1bmN0aW9uKCl7dmFyIGE9XCIuXCIrdGhpcy5zZXR0aW5ncy5kaXNtaXNzX21vZGFsX2NsYXNzO3JldHVybiB0aGlzLnNldHRpbmdzLmNsb3NlX29uX2JhY2tncm91bmRfY2xpY2s/YStcIiwgLlwiK3RoaXMuc2V0dGluZ3MuYmdfY2xhc3M6YX0sdG9nZ2xlX2JnOmZ1bmN0aW9uKGIsYyl7MD09PXRoaXMuUyhcIi5cIit0aGlzLnNldHRpbmdzLmJnX2NsYXNzKS5sZW5ndGgmJih0aGlzLnNldHRpbmdzLmJnPWEoXCI8ZGl2IC8+XCIse1wiY2xhc3NcIjp0aGlzLnNldHRpbmdzLmJnX2NsYXNzfSkuYXBwZW5kVG8oXCJib2R5XCIpLmhpZGUoKSk7dmFyIGU9dGhpcy5zZXR0aW5ncy5iZy5maWx0ZXIoXCI6dmlzaWJsZVwiKS5sZW5ndGg+MDtjIT1lJiYoKGM9PWQ/ZTohYyk/dGhpcy5oaWRlKHRoaXMuc2V0dGluZ3MuYmcpOnRoaXMuc2hvdyh0aGlzLnNldHRpbmdzLmJnKSl9LHNob3c6ZnVuY3Rpb24oYyxkKXtpZihkKXt2YXIgZj1jLmRhdGEodGhpcy5hdHRyX25hbWUoITApK1wiLWluaXRcIil8fHRoaXMuc2V0dGluZ3MsZz1mLnJvb3RfZWxlbWVudCxoPXRoaXM7aWYoMD09PWMucGFyZW50KGcpLmxlbmd0aCl7dmFyIGk9Yy53cmFwKCc8ZGl2IHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIiAvPicpLnBhcmVudCgpO2Mub24oXCJjbG9zZWQuZm5kdG4ucmV2ZWFsLndyYXBwZWRcIixmdW5jdGlvbigpe2MuZGV0YWNoKCkuYXBwZW5kVG8oaSksYy51bndyYXAoKS51bmJpbmQoXCJjbG9zZWQuZm5kdG4ucmV2ZWFsLndyYXBwZWRcIil9KSxjLmRldGFjaCgpLmFwcGVuZFRvKGcpfXZhciBqPWUoZi5hbmltYXRpb24pO2lmKGouYW5pbWF0ZXx8KHRoaXMubG9ja2VkPSExKSxqLnBvcCl7ZC50b3A9YShiKS5zY3JvbGxUb3AoKS1jLmRhdGEoXCJvZmZzZXRcIikrXCJweFwiO3ZhciBrPXt0b3A6YShiKS5zY3JvbGxUb3AoKStjLmRhdGEoXCJjc3MtdG9wXCIpK1wicHhcIixvcGFjaXR5OjF9O3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGMuY3NzKGQpLmFuaW1hdGUoayxmLmFuaW1hdGlvbl9zcGVlZCxcImxpbmVhclwiLGZ1bmN0aW9uKCl7aC5sb2NrZWQ9ITEsYy50cmlnZ2VyKFwib3BlbmVkLmZuZHRuLnJldmVhbFwiKX0pLmFkZENsYXNzKFwib3BlblwiKX0sZi5hbmltYXRpb25fc3BlZWQvMil9aWYoZC50b3A9YShiKS5zY3JvbGxUb3AoKStjLmRhdGEoXCJjc3MtdG9wXCIpK1wicHhcIixqLmZhZGUpe3ZhciBrPXtvcGFjaXR5OjF9O3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGMuY3NzKGQpLmFuaW1hdGUoayxmLmFuaW1hdGlvbl9zcGVlZCxcImxpbmVhclwiLGZ1bmN0aW9uKCl7aC5sb2NrZWQ9ITEsYy50cmlnZ2VyKFwib3BlbmVkLmZuZHRuLnJldmVhbFwiKX0pLmFkZENsYXNzKFwib3BlblwiKX0sZi5hbmltYXRpb25fc3BlZWQvMil9cmV0dXJuIGMuY3NzKGQpLnNob3coKS5jc3Moe29wYWNpdHk6MX0pLmFkZENsYXNzKFwib3BlblwiKS50cmlnZ2VyKFwib3BlbmVkLmZuZHRuLnJldmVhbFwiKX12YXIgZj10aGlzLnNldHRpbmdzO3JldHVybiBlKGYuYW5pbWF0aW9uKS5mYWRlP2MuZmFkZUluKGYuYW5pbWF0aW9uX3NwZWVkLzIpOih0aGlzLmxvY2tlZD0hMSxjLnNob3coKSl9LHRvX2JhY2s6ZnVuY3Rpb24oYSl7YS5hZGRDbGFzcyhcInRvYmFja1wiKX0sdG9fZnJvbnQ6ZnVuY3Rpb24oYSl7YS5yZW1vdmVDbGFzcyhcInRvYmFja1wiKX0saGlkZTpmdW5jdGlvbihjLGQpe2lmKGQpe3ZhciBmPWMuZGF0YSh0aGlzLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKSxnPXRoaXM7Zj1mfHx0aGlzLnNldHRpbmdzO3ZhciBoPWUoZi5hbmltYXRpb24pO2lmKGguYW5pbWF0ZXx8KHRoaXMubG9ja2VkPSExKSxoLnBvcCl7dmFyIGk9e3RvcDotYShiKS5zY3JvbGxUb3AoKS1jLmRhdGEoXCJvZmZzZXRcIikrXCJweFwiLG9wYWNpdHk6MH07cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gYy5hbmltYXRlKGksZi5hbmltYXRpb25fc3BlZWQsXCJsaW5lYXJcIixmdW5jdGlvbigpe2cubG9ja2VkPSExLGMuY3NzKGQpLnRyaWdnZXIoXCJjbG9zZWQuZm5kdG4ucmV2ZWFsXCIpfSkucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpfSxmLmFuaW1hdGlvbl9zcGVlZC8yKX1pZihoLmZhZGUpe3ZhciBpPXtvcGFjaXR5OjB9O3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGMuYW5pbWF0ZShpLGYuYW5pbWF0aW9uX3NwZWVkLFwibGluZWFyXCIsZnVuY3Rpb24oKXtnLmxvY2tlZD0hMSxjLmNzcyhkKS50cmlnZ2VyKFwiY2xvc2VkLmZuZHRuLnJldmVhbFwiKX0pLnJlbW92ZUNsYXNzKFwib3BlblwiKX0sZi5hbmltYXRpb25fc3BlZWQvMil9cmV0dXJuIGMuaGlkZSgpLmNzcyhkKS5yZW1vdmVDbGFzcyhcIm9wZW5cIikudHJpZ2dlcihcImNsb3NlZC5mbmR0bi5yZXZlYWxcIil9dmFyIGY9dGhpcy5zZXR0aW5ncztyZXR1cm4gZShmLmFuaW1hdGlvbikuZmFkZT9jLmZhZGVPdXQoZi5hbmltYXRpb25fc3BlZWQvMik6Yy5oaWRlKCl9LGNsb3NlX3ZpZGVvOmZ1bmN0aW9uKGIpe3ZhciBjPWEoXCIuZmxleC12aWRlb1wiLGIudGFyZ2V0KSxkPWEoXCJpZnJhbWVcIixjKTtkLmxlbmd0aD4wJiYoZC5hdHRyKFwiZGF0YS1zcmNcIixkWzBdLnNyYyksZC5hdHRyKFwic3JjXCIsZC5hdHRyKFwic3JjXCIpKSxjLmhpZGUoKSl9LG9wZW5fdmlkZW86ZnVuY3Rpb24oYil7dmFyIGM9YShcIi5mbGV4LXZpZGVvXCIsYi50YXJnZXQpLGU9Yy5maW5kKFwiaWZyYW1lXCIpO2lmKGUubGVuZ3RoPjApe3ZhciBmPWUuYXR0cihcImRhdGEtc3JjXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBmKWVbMF0uc3JjPWUuYXR0cihcImRhdGEtc3JjXCIpO2Vsc2V7dmFyIGc9ZVswXS5zcmM7ZVswXS5zcmM9ZCxlWzBdLnNyYz1nfWMuc2hvdygpfX0sZGF0YV9hdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5hbWVzcGFjZS5sZW5ndGg+MD90aGlzLm5hbWVzcGFjZStcIi1cIithOmF9LGNhY2hlX29mZnNldDpmdW5jdGlvbihhKXt2YXIgYj1hLnNob3coKS5oZWlnaHQoKStwYXJzZUludChhLmNzcyhcInRvcFwiKSwxMCkrYS5zY3JvbGxZO3JldHVybiBhLmhpZGUoKSxifSxvZmY6ZnVuY3Rpb24oKXthKHRoaXMuc2NvcGUpLm9mZihcIi5mbmR0bi5yZXZlYWxcIil9LHJlZmxvdzpmdW5jdGlvbigpe319fShqUXVlcnksd2luZG93LHdpbmRvdy5kb2N1bWVudCksZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7Rm91bmRhdGlvbi5saWJzLnNsaWRlcj17bmFtZTpcInNsaWRlclwiLHZlcnNpb246XCI1LjUuM1wiLHNldHRpbmdzOntzdGFydDowLGVuZDoxMDAsc3RlcDoxLHByZWNpc2lvbjoyLGluaXRpYWw6bnVsbCxkaXNwbGF5X3NlbGVjdG9yOlwiXCIsdmVydGljYWw6ITEsdHJpZ2dlcl9pbnB1dF9jaGFuZ2U6ITEsb25fY2hhbmdlOmZ1bmN0aW9uKCl7fX0sY2FjaGU6e30saW5pdDpmdW5jdGlvbihhLGIsYyl7Rm91bmRhdGlvbi5pbmhlcml0KHRoaXMsXCJ0aHJvdHRsZVwiKSx0aGlzLmJpbmRpbmdzKGIsYyksdGhpcy5yZWZsb3coKX0sZXZlbnRzOmZ1bmN0aW9uKCl7dmFyIGM9dGhpczthKHRoaXMuc2NvcGUpLm9mZihcIi5zbGlkZXJcIikub24oXCJtb3VzZWRvd24uZm5kdG4uc2xpZGVyIHRvdWNoc3RhcnQuZm5kdG4uc2xpZGVyIHBvaW50ZXJkb3duLmZuZHRuLnNsaWRlclwiLFwiW1wiK2MuYXR0cl9uYW1lKCkrXCJdOm5vdCguZGlzYWJsZWQsIFtkaXNhYmxlZF0pIC5yYW5nZS1zbGlkZXItaGFuZGxlXCIsZnVuY3Rpb24oYil7Yy5jYWNoZS5hY3RpdmV8fChiLnByZXZlbnREZWZhdWx0KCksYy5zZXRfYWN0aXZlX3NsaWRlcihhKGIudGFyZ2V0KSkpfSkub24oXCJtb3VzZW1vdmUuZm5kdG4uc2xpZGVyIHRvdWNobW92ZS5mbmR0bi5zbGlkZXIgcG9pbnRlcm1vdmUuZm5kdG4uc2xpZGVyXCIsZnVuY3Rpb24oZCl7aWYoYy5jYWNoZS5hY3RpdmUpaWYoZC5wcmV2ZW50RGVmYXVsdCgpLGEuZGF0YShjLmNhY2hlLmFjdGl2ZVswXSxcInNldHRpbmdzXCIpLnZlcnRpY2FsKXt2YXIgZT0wO2QucGFnZVl8fChlPWIuc2Nyb2xsWSksYy5jYWxjdWxhdGVfcG9zaXRpb24oYy5jYWNoZS5hY3RpdmUsYy5nZXRfY3Vyc29yX3Bvc2l0aW9uKGQsXCJ5XCIpK2UpfWVsc2UgYy5jYWxjdWxhdGVfcG9zaXRpb24oYy5jYWNoZS5hY3RpdmUsYy5nZXRfY3Vyc29yX3Bvc2l0aW9uKGQsXCJ4XCIpKX0pLm9uKFwibW91c2V1cC5mbmR0bi5zbGlkZXIgdG91Y2hlbmQuZm5kdG4uc2xpZGVyIHBvaW50ZXJ1cC5mbmR0bi5zbGlkZXJcIixmdW5jdGlvbihkKXtpZighYy5jYWNoZS5hY3RpdmUpe3ZhciBlPVwic2xpZGVyXCI9PT1hKGQudGFyZ2V0KS5hdHRyKFwicm9sZVwiKT9hKGQudGFyZ2V0KTphKGQudGFyZ2V0KS5jbG9zZXN0KFwiLnJhbmdlLXNsaWRlclwiKS5maW5kKFwiW3JvbGU9J3NsaWRlciddXCIpO2lmKGUubGVuZ3RoJiYhZS5wYXJlbnQoKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpJiYhZS5wYXJlbnQoKS5hdHRyKFwiZGlzYWJsZWRcIikpaWYoYy5zZXRfYWN0aXZlX3NsaWRlcihlKSxhLmRhdGEoYy5jYWNoZS5hY3RpdmVbMF0sXCJzZXR0aW5nc1wiKS52ZXJ0aWNhbCl7dmFyIGY9MDtkLnBhZ2VZfHwoZj1iLnNjcm9sbFkpLGMuY2FsY3VsYXRlX3Bvc2l0aW9uKGMuY2FjaGUuYWN0aXZlLGMuZ2V0X2N1cnNvcl9wb3NpdGlvbihkLFwieVwiKStmKX1lbHNlIGMuY2FsY3VsYXRlX3Bvc2l0aW9uKGMuY2FjaGUuYWN0aXZlLGMuZ2V0X2N1cnNvcl9wb3NpdGlvbihkLFwieFwiKSl9Yy5yZW1vdmVfYWN0aXZlX3NsaWRlcigpfSkub24oXCJjaGFuZ2UuZm5kdG4uc2xpZGVyXCIsZnVuY3Rpb24oYSl7Yy5zZXR0aW5ncy5vbl9jaGFuZ2UoKX0pLGMuUyhiKS5vbihcInJlc2l6ZS5mbmR0bi5zbGlkZXJcIixjLnRocm90dGxlKGZ1bmN0aW9uKGEpe2MucmVmbG93KCl9LDMwMCkpLHRoaXMuUyhcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxkPWIuY2hpbGRyZW4oXCIucmFuZ2Utc2xpZGVyLWhhbmRsZVwiKVswXSxlPWMuaW5pdGlhbGl6ZV9zZXR0aW5ncyhkKTtcIlwiIT1lLmRpc3BsYXlfc2VsZWN0b3ImJmEoZS5kaXNwbGF5X3NlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS5hdHRyKFwidmFsdWVcIikmJmEodGhpcykub2ZmKFwiY2hhbmdlXCIpLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtiLmZvdW5kYXRpb24oXCJzbGlkZXJcIixcInNldF92YWx1ZVwiLGEodGhpcykudmFsKCkpfSl9KX0pfSxnZXRfY3Vyc29yX3Bvc2l0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1cInBhZ2VcIitiLnRvVXBwZXJDYXNlKCksZT1cImNsaWVudFwiK2IudG9VcHBlckNhc2UoKTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYVtkXT9jPWFbZF06XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEub3JpZ2luYWxFdmVudFtlXT9jPWEub3JpZ2luYWxFdmVudFtlXTphLm9yaWdpbmFsRXZlbnQudG91Y2hlcyYmYS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXVtlXT9jPWEub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdW2VdOmEuY3VycmVudFBvaW50JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5jdXJyZW50UG9pbnRbYl0mJihjPWEuY3VycmVudFBvaW50W2JdKSxjfSxzZXRfYWN0aXZlX3NsaWRlcjpmdW5jdGlvbihhKXt0aGlzLmNhY2hlLmFjdGl2ZT1hfSxyZW1vdmVfYWN0aXZlX3NsaWRlcjpmdW5jdGlvbigpe3RoaXMuY2FjaGUuYWN0aXZlPW51bGx9LGNhbGN1bGF0ZV9wb3NpdGlvbjpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMsZT1hLmRhdGEoYlswXSxcInNldHRpbmdzXCIpLGY9KGEuZGF0YShiWzBdLFwiaGFuZGxlX2xcIiksYS5kYXRhKGJbMF0sXCJoYW5kbGVfb1wiKSxhLmRhdGEoYlswXSxcImJhcl9sXCIpKSxnPWEuZGF0YShiWzBdLFwiYmFyX29cIik7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dmFyIGE7YT1Gb3VuZGF0aW9uLnJ0bCYmIWUudmVydGljYWw/ZC5saW1pdF90bygoZytmLWMpL2YsMCwxKTpkLmxpbWl0X3RvKChjLWcpL2YsMCwxKSxhPWUudmVydGljYWw/MS1hOmE7dmFyIGg9ZC5ub3JtYWxpemVkX3ZhbHVlKGEsZS5zdGFydCxlLmVuZCxlLnN0ZXAsZS5wcmVjaXNpb24pO2Quc2V0X3VpKGIsaCl9KX0sc2V0X3VpOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5kYXRhKGJbMF0sXCJzZXR0aW5nc1wiKSxlPWEuZGF0YShiWzBdLFwiaGFuZGxlX2xcIiksZj1hLmRhdGEoYlswXSxcImJhcl9sXCIpLGc9dGhpcy5ub3JtYWxpemVkX3BlcmNlbnRhZ2UoYyxkLnN0YXJ0LGQuZW5kKSxoPWcqKGYtZSktMSxpPTEwMCpnLGo9Yi5wYXJlbnQoKSxrPWIucGFyZW50KCkuY2hpbGRyZW4oXCJpbnB1dFt0eXBlPWhpZGRlbl1cIik7Rm91bmRhdGlvbi5ydGwmJiFkLnZlcnRpY2FsJiYoaD0taCksaD1kLnZlcnRpY2FsPy1oK2YtZSsxOmgsdGhpcy5zZXRfdHJhbnNsYXRlKGIsaCxkLnZlcnRpY2FsKSxkLnZlcnRpY2FsP2Iuc2libGluZ3MoXCIucmFuZ2Utc2xpZGVyLWFjdGl2ZS1zZWdtZW50XCIpLmNzcyhcImhlaWdodFwiLGkrXCIlXCIpOmIuc2libGluZ3MoXCIucmFuZ2Utc2xpZGVyLWFjdGl2ZS1zZWdtZW50XCIpLmNzcyhcIndpZHRoXCIsaStcIiVcIiksai5hdHRyKHRoaXMuYXR0cl9uYW1lKCksYykudHJpZ2dlcihcImNoYW5nZS5mbmR0bi5zbGlkZXJcIiksay52YWwoYyksZC50cmlnZ2VyX2lucHV0X2NoYW5nZSYmay50cmlnZ2VyKFwiY2hhbmdlLmZuZHRuLnNsaWRlclwiKSxiWzBdLmhhc0F0dHJpYnV0ZShcImFyaWEtdmFsdWVtaW5cIil8fGIuYXR0cih7XCJhcmlhLXZhbHVlbWluXCI6ZC5zdGFydCxcImFyaWEtdmFsdWVtYXhcIjpkLmVuZH0pLGIuYXR0cihcImFyaWEtdmFsdWVub3dcIixjKSxcIlwiIT1kLmRpc3BsYXlfc2VsZWN0b3ImJmEoZC5kaXNwbGF5X3NlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9hKHRoaXMpLnZhbChjKTphKHRoaXMpLnRleHQoYyl9KX0sbm9ybWFsaXplZF9wZXJjZW50YWdlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTWF0aC5taW4oMSwoYS1iKS8oYy1iKSl9LG5vcm1hbGl6ZWRfdmFsdWU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1jLWIsZz1hKmYsaD0oZy1nJWQpL2QsaT1nJWQsaj1pPj0uNSpkP2Q6MDtyZXR1cm4oaCpkK2orYikudG9GaXhlZChlKX0sc2V0X3RyYW5zbGF0ZTpmdW5jdGlvbihiLGMsZCl7ZD9hKGIpLmNzcyhcIi13ZWJraXQtdHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVZKFwiK2MrXCJweClcIikuY3NzKFwiLW1vei10cmFuc2Zvcm1cIixcInRyYW5zbGF0ZVkoXCIrYytcInB4KVwiKS5jc3MoXCItbXMtdHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVZKFwiK2MrXCJweClcIikuY3NzKFwiLW8tdHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVZKFwiK2MrXCJweClcIikuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVZKFwiK2MrXCJweClcIik6YShiKS5jc3MoXCItd2Via2l0LXRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWChcIitjK1wicHgpXCIpLmNzcyhcIi1tb3otdHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVYKFwiK2MrXCJweClcIikuY3NzKFwiLW1zLXRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWChcIitjK1wicHgpXCIpLmNzcyhcIi1vLXRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWChcIitjK1wicHgpXCIpLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWChcIitjK1wicHgpXCIpfSxsaW1pdF90bzpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGEsYiksYyl9LGluaXRpYWxpemVfc2V0dGluZ3M6ZnVuY3Rpb24oYil7dmFyIGMsZD1hLmV4dGVuZCh7fSx0aGlzLnNldHRpbmdzLHRoaXMuZGF0YV9vcHRpb25zKGEoYikucGFyZW50KCkpKTtyZXR1cm4gbnVsbD09PWQucHJlY2lzaW9uJiYoYz0oXCJcIitkLnN0ZXApLm1hdGNoKC9cXC4oW1xcZF0qKS8pLGQucHJlY2lzaW9uPWMmJmNbMV0/Y1sxXS5sZW5ndGg6MCksZC52ZXJ0aWNhbD8oYS5kYXRhKGIsXCJiYXJfb1wiLGEoYikucGFyZW50KCkub2Zmc2V0KCkudG9wKSxhLmRhdGEoYixcImJhcl9sXCIsYShiKS5wYXJlbnQoKS5vdXRlckhlaWdodCgpKSxhLmRhdGEoYixcImhhbmRsZV9vXCIsYShiKS5vZmZzZXQoKS50b3ApLGEuZGF0YShiLFwiaGFuZGxlX2xcIixhKGIpLm91dGVySGVpZ2h0KCkpKTooYS5kYXRhKGIsXCJiYXJfb1wiLGEoYikucGFyZW50KCkub2Zmc2V0KCkubGVmdCksYS5kYXRhKGIsXCJiYXJfbFwiLGEoYikucGFyZW50KCkub3V0ZXJXaWR0aCgpKSxhLmRhdGEoYixcImhhbmRsZV9vXCIsYShiKS5vZmZzZXQoKS5sZWZ0KSxhLmRhdGEoYixcImhhbmRsZV9sXCIsYShiKS5vdXRlcldpZHRoKCkpKSxhLmRhdGEoYixcImJhclwiLGEoYikucGFyZW50KCkpLGEuZGF0YShiLFwic2V0dGluZ3NcIixkKX0sc2V0X2luaXRpYWxfcG9zaXRpb246ZnVuY3Rpb24oYil7dmFyIGM9YS5kYXRhKGIuY2hpbGRyZW4oXCIucmFuZ2Utc2xpZGVyLWhhbmRsZVwiKVswXSxcInNldHRpbmdzXCIpLGQ9XCJudW1iZXJcIiE9dHlwZW9mIGMuaW5pdGlhbHx8aXNOYU4oYy5pbml0aWFsKT9NYXRoLmZsb29yKC41KihjLmVuZC1jLnN0YXJ0KS9jLnN0ZXApKmMuc3RlcCtjLnN0YXJ0OmMuaW5pdGlhbCxlPWIuY2hpbGRyZW4oXCIucmFuZ2Utc2xpZGVyLWhhbmRsZVwiKTt0aGlzLnNldF91aShlLGQpfSxzZXRfdmFsdWU6ZnVuY3Rpb24oYil7dmFyIGM9dGhpczthKFwiW1wiK2MuYXR0cl9uYW1lKCkrXCJdXCIsdGhpcy5zY29wZSkuZWFjaChmdW5jdGlvbigpe2EodGhpcykuYXR0cihjLmF0dHJfbmFtZSgpLGIpfSksYSh0aGlzLnNjb3BlKS5hdHRyKGMuYXR0cl9uYW1lKCkpJiZhKHRoaXMuc2NvcGUpLmF0dHIoYy5hdHRyX25hbWUoKSxiKSxjLnJlZmxvdygpfSxyZWZsb3c6ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2IuUyhcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiXVwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKS5jaGlsZHJlbihcIi5yYW5nZS1zbGlkZXItaGFuZGxlXCIpWzBdLGQ9YSh0aGlzKS5hdHRyKGIuYXR0cl9uYW1lKCkpO2IuaW5pdGlhbGl6ZV9zZXR0aW5ncyhjKSxkP2Iuc2V0X3VpKGEoYykscGFyc2VGbG9hdChkKSk6Yi5zZXRfaW5pdGlhbF9wb3NpdGlvbihhKHRoaXMpKX0pfX19KGpRdWVyeSx3aW5kb3csd2luZG93LmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtGb3VuZGF0aW9uLmxpYnMudGFiPXtuYW1lOlwidGFiXCIsdmVyc2lvbjpcIjUuNS4zXCIsc2V0dGluZ3M6e2FjdGl2ZV9jbGFzczpcImFjdGl2ZVwiLGNhbGxiYWNrOmZ1bmN0aW9uKCl7fSxkZWVwX2xpbmtpbmc6ITEsc2Nyb2xsX3RvX2NvbnRlbnQ6ITAsaXNfaG92ZXI6ITF9LGRlZmF1bHRfdGFiX2hhc2hlczpbXSxpbml0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9dGhpcy5TO2UoXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIl0gPiAuYWN0aXZlID4gYVwiLHRoaXMuc2NvcGUpLmVhY2goZnVuY3Rpb24oKXtkLmRlZmF1bHRfdGFiX2hhc2hlcy5wdXNoKHRoaXMuaGFzaCl9KSx0aGlzLmJpbmRpbmdzKGIsYyksdGhpcy5oYW5kbGVfbG9jYXRpb25faGFzaF9jaGFuZ2UoKX0sZXZlbnRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxjPXRoaXMuUyxkPWZ1bmN0aW9uKGIsZCl7dmFyIGU9YyhkKS5jbG9zZXN0KFwiW1wiK2EuYXR0cl9uYW1lKCkrXCJdXCIpLmRhdGEoYS5hdHRyX25hbWUoITApK1wiLWluaXRcIik7aWYoIWUuaXNfaG92ZXJ8fE1vZGVybml6ci50b3VjaCl7dmFyIGY9Yi5rZXlDb2RlfHxiLndoaWNoOzkhPT1mJiYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCkpLGEudG9nZ2xlX2FjdGl2ZV90YWIoYyhkKS5wYXJlbnQoKSl9fTtjKHRoaXMuc2NvcGUpLm9mZihcIi50YWJcIikub24oXCJrZXlkb3duLmZuZHRuLnRhYlwiLFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdID4gKiA+IGFcIixmdW5jdGlvbihhKXt2YXIgYj1hLmtleUNvZGV8fGEud2hpY2g7aWYoMTM9PT1ifHwzMj09PWIpe3ZhciBjPXRoaXM7ZChhLGMpfX0pLm9uKFwiY2xpY2suZm5kdG4udGFiXCIsXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIl0gPiAqID4gYVwiLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7ZChhLGIpfSkub24oXCJtb3VzZWVudGVyLmZuZHRuLnRhYlwiLFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdID4gKiA+IGFcIixmdW5jdGlvbihiKXt2YXIgZD1jKHRoaXMpLmNsb3Nlc3QoXCJbXCIrYS5hdHRyX25hbWUoKStcIl1cIikuZGF0YShhLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKTtkLmlzX2hvdmVyJiZhLnRvZ2dsZV9hY3RpdmVfdGFiKGModGhpcykucGFyZW50KCkpfSksYyhiKS5vbihcImhhc2hjaGFuZ2UuZm5kdG4udGFiXCIsZnVuY3Rpb24oYil7Yi5wcmV2ZW50RGVmYXVsdCgpLGEuaGFuZGxlX2xvY2F0aW9uX2hhc2hfY2hhbmdlKCl9KX0saGFuZGxlX2xvY2F0aW9uX2hhc2hfY2hhbmdlOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPXRoaXMuUztjKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIsdGhpcy5zY29wZSkuZWFjaChmdW5jdGlvbigpe3ZhciBlPWModGhpcykuZGF0YShiLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKTtpZihlLmRlZXBfbGlua2luZyl7dmFyIGY7aWYoZj1lLnNjcm9sbF90b19jb250ZW50P2Iuc2NvcGUubG9jYXRpb24uaGFzaDpiLnNjb3BlLmxvY2F0aW9uLmhhc2gucmVwbGFjZShcImZuZHRuLVwiLFwiXCIpLFwiXCIhPWYpe3ZhciBnPWMoZik7aWYoZy5oYXNDbGFzcyhcImNvbnRlbnRcIikmJmcucGFyZW50KCkuaGFzQ2xhc3MoXCJ0YWJzLWNvbnRlbnRcIikpYi50b2dnbGVfYWN0aXZlX3RhYihhKFwiW1wiK2IuYXR0cl9uYW1lKCkrXCJdID4gKiA+IGFbaHJlZj1cIitmK1wiXVwiKS5wYXJlbnQoKSk7ZWxzZXt2YXIgaD1nLmNsb3Nlc3QoXCIuY29udGVudFwiKS5hdHRyKFwiaWRcIik7aCE9ZCYmYi50b2dnbGVfYWN0aXZlX3RhYihhKFwiW1wiK2IuYXR0cl9uYW1lKCkrXCJdID4gKiA+IGFbaHJlZj0jXCIraCtcIl1cIikucGFyZW50KCksZil9fWVsc2UgZm9yKHZhciBpPTA7aTxiLmRlZmF1bHRfdGFiX2hhc2hlcy5sZW5ndGg7aSsrKWIudG9nZ2xlX2FjdGl2ZV90YWIoYShcIltcIitiLmF0dHJfbmFtZSgpK1wiXSA+ICogPiBhW2hyZWY9XCIrYi5kZWZhdWx0X3RhYl9oYXNoZXNbaV0rXCJdXCIpLnBhcmVudCgpKX19KX0sdG9nZ2xlX2FjdGl2ZV90YWI6ZnVuY3Rpb24oZSxmKXt2YXIgZz10aGlzLGg9Zy5TLGk9ZS5jbG9zZXN0KFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIpLGo9ZS5maW5kKFwiYVwiKSxrPWUuY2hpbGRyZW4oXCJhXCIpLmZpcnN0KCksbD1cIiNcIitrLmF0dHIoXCJocmVmXCIpLnNwbGl0KFwiI1wiKVsxXSxtPWgobCksbj1lLnNpYmxpbmdzKCksbz1pLmRhdGEodGhpcy5hdHRyX25hbWUoITApK1wiLWluaXRcIikscD1mdW5jdGlvbihiKXt2YXIgZCxlPWEodGhpcyksZj1hKHRoaXMpLnBhcmVudHMoXCJsaVwiKS5wcmV2KCkuY2hpbGRyZW4oJ1tyb2xlPVwidGFiXCJdJyksZz1hKHRoaXMpLnBhcmVudHMoXCJsaVwiKS5uZXh0KCkuY2hpbGRyZW4oJ1tyb2xlPVwidGFiXCJdJyk7c3dpdGNoKGIua2V5Q29kZSl7Y2FzZSAzNzpkPWY7YnJlYWs7Y2FzZSAzOTpkPWc7YnJlYWs7ZGVmYXVsdDpkPSExfWQubGVuZ3RoJiYoZS5hdHRyKHt0YWJpbmRleDpcIi0xXCIsXCJhcmlhLXNlbGVjdGVkXCI6bnVsbH0pLGQuYXR0cih7dGFiaW5kZXg6XCIwXCIsXCJhcmlhLXNlbGVjdGVkXCI6ITB9KS5mb2N1cygpKSxhKCdbcm9sZT1cInRhYnBhbmVsXCJdJykuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLGEoXCIjXCIrYShjLmFjdGl2ZUVsZW1lbnQpLmF0dHIoXCJocmVmXCIpLnN1YnN0cmluZygxKSkuYXR0cihcImFyaWEtaGlkZGVuXCIsbnVsbCl9LHE9ZnVuY3Rpb24oYSl7dmFyIGM9by5zY3JvbGxfdG9fY29udGVudD9nLmRlZmF1bHRfdGFiX2hhc2hlc1swXTpcImZuZHRuLVwiK2cuZGVmYXVsdF90YWJfaGFzaGVzWzBdLnJlcGxhY2UoXCIjXCIsXCJcIik7KGEhPT1jfHxiLmxvY2F0aW9uLmhhc2gpJiYoYi5sb2NhdGlvbi5oYXNoPWEpfTtrLmRhdGEoXCJ0YWItY29udGVudFwiKSYmKGw9XCIjXCIray5kYXRhKFwidGFiLWNvbnRlbnRcIikuc3BsaXQoXCIjXCIpWzFdLG09aChsKSksby5kZWVwX2xpbmtpbmcmJihvLnNjcm9sbF90b19jb250ZW50PyhxKGZ8fGwpLGY9PWR8fGY9PWw/ZS5wYXJlbnQoKVswXS5zY3JvbGxJbnRvVmlldygpOmgobClbMF0uc2Nyb2xsSW50b1ZpZXcoKSk6cShmIT1kP1wiZm5kdG4tXCIrZi5yZXBsYWNlKFwiI1wiLFwiXCIpOlwiZm5kdG4tXCIrbC5yZXBsYWNlKFwiI1wiLFwiXCIpKSksZS5hZGRDbGFzcyhvLmFjdGl2ZV9jbGFzcykudHJpZ2dlckhhbmRsZXIoXCJvcGVuZWRcIiksai5hdHRyKHtcImFyaWEtc2VsZWN0ZWRcIjpcInRydWVcIix0YWJpbmRleDowfSksbi5yZW1vdmVDbGFzcyhvLmFjdGl2ZV9jbGFzcyksbi5maW5kKFwiYVwiKS5hdHRyKHtcImFyaWEtc2VsZWN0ZWRcIjpcImZhbHNlXCJ9KSxtLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3Moby5hY3RpdmVfY2xhc3MpLmF0dHIoe1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0pLG0uYWRkQ2xhc3Moby5hY3RpdmVfY2xhc3MpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIikucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpLG8uY2FsbGJhY2soZSksbS50cmlnZ2VySGFuZGxlcihcInRvZ2dsZWRcIixbbV0pLGkudHJpZ2dlckhhbmRsZXIoXCJ0b2dnbGVkXCIsW2VdKSxqLm9mZihcImtleWRvd25cIikub24oXCJrZXlkb3duXCIscCl9LGRhdGFfYXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5uYW1lc3BhY2UubGVuZ3RoPjA/dGhpcy5uYW1lc3BhY2UrXCItXCIrYTphfSxvZmY6ZnVuY3Rpb24oKXt9LHJlZmxvdzpmdW5jdGlvbigpe319fShqUXVlcnksd2luZG93LHdpbmRvdy5kb2N1bWVudCksZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7Rm91bmRhdGlvbi5saWJzLnRvb2x0aXA9e25hbWU6XCJ0b29sdGlwXCIsdmVyc2lvbjpcIjUuNS4zXCIsc2V0dGluZ3M6e2FkZGl0aW9uYWxfaW5oZXJpdGFibGVfY2xhc3NlczpbXSx0b29sdGlwX2NsYXNzOlwiLnRvb2x0aXBcIixhcHBlbmRfdG86XCJib2R5XCIsdG91Y2hfY2xvc2VfdGV4dDpcIlRhcCBUbyBDbG9zZVwiLGRpc2FibGVfZm9yX3RvdWNoOiExLGhvdmVyX2RlbGF5OjIwMCxmYWRlX2luX2R1cmF0aW9uOjE1MCxmYWRlX291dF9kdXJhdGlvbjoxNTAsc2hvd19vbjpcImFsbFwiLHRpcF90ZW1wbGF0ZTpmdW5jdGlvbihhLGIpe3JldHVybic8c3BhbiBkYXRhLXNlbGVjdG9yPVwiJythKydcIiBpZD1cIicrYSsnXCIgY2xhc3M9XCInK0ZvdW5kYXRpb24ubGlicy50b29sdGlwLnNldHRpbmdzLnRvb2x0aXBfY2xhc3Muc3Vic3RyaW5nKDEpKydcIiByb2xlPVwidG9vbHRpcFwiPicrYisnPHNwYW4gY2xhc3M9XCJudWJcIj48L3NwYW4+PC9zcGFuPid9fSxjYWNoZTp7fSxpbml0OmZ1bmN0aW9uKGEsYixjKXtGb3VuZGF0aW9uLmluaGVyaXQodGhpcyxcInJhbmRvbV9zdHJcIiksdGhpcy5iaW5kaW5ncyhiLGMpfSxzaG91bGRfc2hvdzpmdW5jdGlvbihiLGMpe3ZhciBkPWEuZXh0ZW5kKHt9LHRoaXMuc2V0dGluZ3MsdGhpcy5kYXRhX29wdGlvbnMoYikpO3JldHVyblwiYWxsXCI9PT1kLnNob3dfb24/ITA6dGhpcy5zbWFsbCgpJiZcInNtYWxsXCI9PT1kLnNob3dfb24/ITA6dGhpcy5tZWRpdW0oKSYmXCJtZWRpdW1cIj09PWQuc2hvd19vbj8hMDp0aGlzLmxhcmdlKCkmJlwibGFyZ2VcIj09PWQuc2hvd19vbj8hMDohMX0sbWVkaXVtOmZ1bmN0aW9uKCl7cmV0dXJuIG1hdGNoTWVkaWEoRm91bmRhdGlvbi5tZWRpYV9xdWVyaWVzLm1lZGl1bSkubWF0Y2hlc30sbGFyZ2U6ZnVuY3Rpb24oKXtyZXR1cm4gbWF0Y2hNZWRpYShGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMubGFyZ2UpLm1hdGNoZXN9LGV2ZW50czpmdW5jdGlvbihiKXtmdW5jdGlvbiBjKGEsYixjKXthLnRpbWVyfHwoYz8oYS50aW1lcj1udWxsLGUuc2hvd1RpcChiKSk6YS50aW1lcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS50aW1lcj1udWxsLGUuc2hvd1RpcChiKX0uYmluZChhKSxlLnNldHRpbmdzLmhvdmVyX2RlbGF5KSl9ZnVuY3Rpb24gZChhLGIpe2EudGltZXImJihjbGVhclRpbWVvdXQoYS50aW1lciksYS50aW1lcj1udWxsKSxlLmhpZGUoYil9dmFyIGU9dGhpcyxmPWUuUztlLmNyZWF0ZSh0aGlzLlMoYikpLGEodGhpcy5zY29wZSkub2ZmKFwiLnRvb2x0aXBcIikub24oXCJtb3VzZWVudGVyLmZuZHRuLnRvb2x0aXAgbW91c2VsZWF2ZS5mbmR0bi50b29sdGlwIHRvdWNoc3RhcnQuZm5kdG4udG9vbHRpcCBNU1BvaW50ZXJEb3duLmZuZHRuLnRvb2x0aXBcIixcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiXVwiLGZ1bmN0aW9uKGIpe3ZhciBnPWYodGhpcyksaD1hLmV4dGVuZCh7fSxlLnNldHRpbmdzLGUuZGF0YV9vcHRpb25zKGcpKSxpPSExO2lmKE1vZGVybml6ci50b3VjaCYmL3RvdWNoc3RhcnR8TVNQb2ludGVyRG93bi9pLnRlc3QoYi50eXBlKSYmZihiLnRhcmdldCkuaXMoXCJhXCIpKXJldHVybiExO2lmKC9tb3VzZS9pLnRlc3QoYi50eXBlKSYmZS5pZV90b3VjaChiKSlyZXR1cm4hMTtpZihnLmhhc0NsYXNzKFwib3BlblwiKSlNb2Rlcm5penIudG91Y2gmJi90b3VjaHN0YXJ0fE1TUG9pbnRlckRvd24vaS50ZXN0KGIudHlwZSkmJmIucHJldmVudERlZmF1bHQoKSxlLmhpZGUoZyk7ZWxzZXtpZihoLmRpc2FibGVfZm9yX3RvdWNoJiZNb2Rlcm5penIudG91Y2gmJi90b3VjaHN0YXJ0fE1TUG9pbnRlckRvd24vaS50ZXN0KGIudHlwZSkpcmV0dXJuO2lmKCFoLmRpc2FibGVfZm9yX3RvdWNoJiZNb2Rlcm5penIudG91Y2gmJi90b3VjaHN0YXJ0fE1TUG9pbnRlckRvd24vaS50ZXN0KGIudHlwZSkmJihiLnByZXZlbnREZWZhdWx0KCksZihoLnRvb2x0aXBfY2xhc3MrXCIub3BlblwiKS5oaWRlKCksaT0hMCxhKFwiLm9wZW5bXCIrZS5hdHRyX25hbWUoKStcIl1cIikubGVuZ3RoPjApKXt2YXIgaj1mKGEoXCIub3BlbltcIitlLmF0dHJfbmFtZSgpK1wiXVwiKVswXSk7ZS5oaWRlKGopfS9lbnRlcnxvdmVyL2kudGVzdChiLnR5cGUpP2ModGhpcyxnKTpcIm1vdXNlb3V0XCI9PT1iLnR5cGV8fFwibW91c2VsZWF2ZVwiPT09Yi50eXBlP2QodGhpcyxnKTpjKHRoaXMsZywhMCl9fSkub24oXCJtb3VzZWxlYXZlLmZuZHRuLnRvb2x0aXAgdG91Y2hzdGFydC5mbmR0bi50b29sdGlwIE1TUG9pbnRlckRvd24uZm5kdG4udG9vbHRpcFwiLFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdLm9wZW5cIixmdW5jdGlvbihiKXtyZXR1cm4vbW91c2UvaS50ZXN0KGIudHlwZSkmJmUuaWVfdG91Y2goYik/ITE6dm9pZCgoXCJ0b3VjaFwiIT1hKHRoaXMpLmRhdGEoXCJ0b29sdGlwLW9wZW4tZXZlbnQtdHlwZVwiKXx8XCJtb3VzZWxlYXZlXCIhPWIudHlwZSkmJihcIm1vdXNlXCI9PWEodGhpcykuZGF0YShcInRvb2x0aXAtb3Blbi1ldmVudC10eXBlXCIpJiYvTVNQb2ludGVyRG93bnx0b3VjaHN0YXJ0L2kudGVzdChiLnR5cGUpP2UuY29udmVydF90b190b3VjaChhKHRoaXMpKTpkKHRoaXMsYSh0aGlzKSkpKX0pLm9uKFwiRE9NTm9kZVJlbW92ZWQgRE9NQXR0ck1vZGlmaWVkXCIsXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIl06bm90KGEpXCIsZnVuY3Rpb24oYSl7ZCh0aGlzLGYodGhpcykpfSl9LGllX3RvdWNoOmZ1bmN0aW9uKGEpe3JldHVybiExfSxzaG93VGlwOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZ2V0VGlwKGEpO3JldHVybiB0aGlzLnNob3VsZF9zaG93KGEsYik/dGhpcy5zaG93KGEpOnZvaWQgMH0sZ2V0VGlwOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuc2VsZWN0b3IoYiksZD1hLmV4dGVuZCh7fSx0aGlzLnNldHRpbmdzLHRoaXMuZGF0YV9vcHRpb25zKGIpKSxlPW51bGw7cmV0dXJuIGMmJihlPXRoaXMuUygnc3BhbltkYXRhLXNlbGVjdG9yPVwiJytjKydcIl0nK2QudG9vbHRpcF9jbGFzcykpLFwib2JqZWN0XCI9PXR5cGVvZiBlP2U6ITF9LHNlbGVjdG9yOmZ1bmN0aW9uKGEpe3ZhciBiPWEuYXR0cih0aGlzLmF0dHJfbmFtZSgpKXx8YS5hdHRyKFwiZGF0YS1zZWxlY3RvclwiKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYiYmKGI9dGhpcy5yYW5kb21fc3RyKDYpLGEuYXR0cihcImRhdGEtc2VsZWN0b3JcIixiKS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLGIpKSxifSxjcmVhdGU6ZnVuY3Rpb24oYyl7dmFyIGQ9dGhpcyxlPWEuZXh0ZW5kKHt9LHRoaXMuc2V0dGluZ3MsdGhpcy5kYXRhX29wdGlvbnMoYykpLGY9dGhpcy5zZXR0aW5ncy50aXBfdGVtcGxhdGU7XCJzdHJpbmdcIj09dHlwZW9mIGUudGlwX3RlbXBsYXRlJiZiLmhhc093blByb3BlcnR5KGUudGlwX3RlbXBsYXRlKSYmKGY9YltlLnRpcF90ZW1wbGF0ZV0pO1xyXG52YXIgZz1hKGYodGhpcy5zZWxlY3RvcihjKSxhKFwiPGRpdj48L2Rpdj5cIikuaHRtbChjLmF0dHIoXCJ0aXRsZVwiKSkuaHRtbCgpKSksaD10aGlzLmluaGVyaXRhYmxlX2NsYXNzZXMoYyk7Zy5hZGRDbGFzcyhoKS5hcHBlbmRUbyhlLmFwcGVuZF90byksTW9kZXJuaXpyLnRvdWNoJiYoZy5hcHBlbmQoJzxzcGFuIGNsYXNzPVwidGFwLXRvLWNsb3NlXCI+JytlLnRvdWNoX2Nsb3NlX3RleHQrXCI8L3NwYW4+XCIpLGcub24oXCJ0b3VjaHN0YXJ0LmZuZHRuLnRvb2x0aXAgTVNQb2ludGVyRG93bi5mbmR0bi50b29sdGlwXCIsZnVuY3Rpb24oYSl7ZC5oaWRlKGMpfSkpLGMucmVtb3ZlQXR0cihcInRpdGxlXCIpLmF0dHIoXCJ0aXRsZVwiLFwiXCIpfSxyZXBvc2l0aW9uOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaCxpO2MuY3NzKFwidmlzaWJpbGl0eVwiLFwiaGlkZGVuXCIpLnNob3coKSxlPWIuZGF0YShcIndpZHRoXCIpLGY9Yy5jaGlsZHJlbihcIi5udWJcIiksZz1mLm91dGVySGVpZ2h0KCksaD1mLm91dGVyV2lkdGgoKSx0aGlzLnNtYWxsKCk/Yy5jc3Moe3dpZHRoOlwiMTAwJVwifSk6Yy5jc3Moe3dpZHRoOmU/ZTpcImF1dG9cIn0pLGk9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3JldHVybiBhLmNzcyh7dG9wOmI/YjpcImF1dG9cIixib3R0b206ZD9kOlwiYXV0b1wiLGxlZnQ6ZT9lOlwiYXV0b1wiLHJpZ2h0OmM/YzpcImF1dG9cIn0pLmVuZCgpfTt2YXIgaj1iLm9mZnNldCgpLnRvcCxrPWIub2Zmc2V0KCkubGVmdCxsPWIub3V0ZXJIZWlnaHQoKTtpZihpKGMsaitsKzEwLFwiYXV0b1wiLFwiYXV0b1wiLGspLHRoaXMuc21hbGwoKSlpKGMsaitsKzEwLFwiYXV0b1wiLFwiYXV0b1wiLDEyLjUsYSh0aGlzLnNjb3BlKS53aWR0aCgpKSxjLmFkZENsYXNzKFwidGlwLW92ZXJyaWRlXCIpLGkoZiwtZyxcImF1dG9cIixcImF1dG9cIixrKTtlbHNle0ZvdW5kYXRpb24ucnRsJiYoZi5hZGRDbGFzcyhcInJ0bFwiKSxrPWsrYi5vdXRlcldpZHRoKCktYy5vdXRlcldpZHRoKCkpLGkoYyxqK2wrMTAsXCJhdXRvXCIsXCJhdXRvXCIsayksZi5hdHRyKFwic3R5bGVcIikmJmYucmVtb3ZlQXR0cihcInN0eWxlXCIpLGMucmVtb3ZlQ2xhc3MoXCJ0aXAtb3ZlcnJpZGVcIik7dmFyIG09Yy5vdXRlckhlaWdodCgpO2QmJmQuaW5kZXhPZihcInRpcC10b3BcIik+LTE/KEZvdW5kYXRpb24ucnRsJiZmLmFkZENsYXNzKFwicnRsXCIpLGkoYyxqLW0sXCJhdXRvXCIsXCJhdXRvXCIsaykucmVtb3ZlQ2xhc3MoXCJ0aXAtb3ZlcnJpZGVcIikpOmQmJmQuaW5kZXhPZihcInRpcC1sZWZ0XCIpPi0xPyhpKGMsaitsLzItbS8yLFwiYXV0b1wiLFwiYXV0b1wiLGstYy5vdXRlcldpZHRoKCktZykucmVtb3ZlQ2xhc3MoXCJ0aXAtb3ZlcnJpZGVcIiksZi5yZW1vdmVDbGFzcyhcInJ0bFwiKSk6ZCYmZC5pbmRleE9mKFwidGlwLXJpZ2h0XCIpPi0xJiYoaShjLGorbC8yLW0vMixcImF1dG9cIixcImF1dG9cIixrK2Iub3V0ZXJXaWR0aCgpK2cpLnJlbW92ZUNsYXNzKFwidGlwLW92ZXJyaWRlXCIpLGYucmVtb3ZlQ2xhc3MoXCJydGxcIikpfWMuY3NzKFwidmlzaWJpbGl0eVwiLFwidmlzaWJsZVwiKS5oaWRlKCl9LHNtYWxsOmZ1bmN0aW9uKCl7cmV0dXJuIG1hdGNoTWVkaWEoRm91bmRhdGlvbi5tZWRpYV9xdWVyaWVzLnNtYWxsKS5tYXRjaGVzJiYhbWF0Y2hNZWRpYShGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMubWVkaXVtKS5tYXRjaGVzfSxpbmhlcml0YWJsZV9jbGFzc2VzOmZ1bmN0aW9uKGIpe3ZhciBjPWEuZXh0ZW5kKHt9LHRoaXMuc2V0dGluZ3MsdGhpcy5kYXRhX29wdGlvbnMoYikpLGQ9W1widGlwLXRvcFwiLFwidGlwLWxlZnRcIixcInRpcC1ib3R0b21cIixcInRpcC1yaWdodFwiLFwicmFkaXVzXCIsXCJyb3VuZFwiXS5jb25jYXQoYy5hZGRpdGlvbmFsX2luaGVyaXRhYmxlX2NsYXNzZXMpLGU9Yi5hdHRyKFwiY2xhc3NcIiksZj1lP2EubWFwKGUuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIsYyl7cmV0dXJuLTEhPT1hLmluQXJyYXkoYixkKT9iOnZvaWQgMH0pLmpvaW4oXCIgXCIpOlwiXCI7cmV0dXJuIGEudHJpbShmKX0sY29udmVydF90b190b3VjaDpmdW5jdGlvbihiKXt2YXIgYz10aGlzLGQ9Yy5nZXRUaXAoYiksZT1hLmV4dGVuZCh7fSxjLnNldHRpbmdzLGMuZGF0YV9vcHRpb25zKGIpKTswPT09ZC5maW5kKFwiLnRhcC10by1jbG9zZVwiKS5sZW5ndGgmJihkLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJ0YXAtdG8tY2xvc2VcIj4nK2UudG91Y2hfY2xvc2VfdGV4dCtcIjwvc3Bhbj5cIiksZC5vbihcImNsaWNrLmZuZHRuLnRvb2x0aXAudGFwY2xvc2UgdG91Y2hzdGFydC5mbmR0bi50b29sdGlwLnRhcGNsb3NlIE1TUG9pbnRlckRvd24uZm5kdG4udG9vbHRpcC50YXBjbG9zZVwiLGZ1bmN0aW9uKGEpe2MuaGlkZShiKX0pKSxiLmRhdGEoXCJ0b29sdGlwLW9wZW4tZXZlbnQtdHlwZVwiLFwidG91Y2hcIil9LHNob3c6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nZXRUaXAoYSk7XCJ0b3VjaFwiPT1hLmRhdGEoXCJ0b29sdGlwLW9wZW4tZXZlbnQtdHlwZVwiKSYmdGhpcy5jb252ZXJ0X3RvX3RvdWNoKGEpLHRoaXMucmVwb3NpdGlvbihhLGIsYS5hdHRyKFwiY2xhc3NcIikpLGEuYWRkQ2xhc3MoXCJvcGVuXCIpLGIuZmFkZUluKHRoaXMuc2V0dGluZ3MuZmFkZV9pbl9kdXJhdGlvbil9LGhpZGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nZXRUaXAoYSk7Yi5mYWRlT3V0KHRoaXMuc2V0dGluZ3MuZmFkZV9vdXRfZHVyYXRpb24sZnVuY3Rpb24oKXtiLmZpbmQoXCIudGFwLXRvLWNsb3NlXCIpLnJlbW92ZSgpLGIub2ZmKFwiY2xpY2suZm5kdG4udG9vbHRpcC50YXBjbG9zZSBNU1BvaW50ZXJEb3duLmZuZHRuLnRhcGNsb3NlXCIpLGEucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpfSl9LG9mZjpmdW5jdGlvbigpe3ZhciBiPXRoaXM7dGhpcy5TKHRoaXMuc2NvcGUpLm9mZihcIi5mbmR0bi50b29sdGlwXCIpLHRoaXMuUyh0aGlzLnNldHRpbmdzLnRvb2x0aXBfY2xhc3MpLmVhY2goZnVuY3Rpb24oYyl7YShcIltcIitiLmF0dHJfbmFtZSgpK1wiXVwiKS5lcShjKS5hdHRyKFwidGl0bGVcIixhKHRoaXMpLnRleHQoKSl9KS5yZW1vdmUoKX0scmVmbG93OmZ1bmN0aW9uKCl7fX19KGpRdWVyeSx3aW5kb3csd2luZG93LmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtGb3VuZGF0aW9uLmxpYnMudG9wYmFyPXtuYW1lOlwidG9wYmFyXCIsdmVyc2lvbjpcIjUuNS4zXCIsc2V0dGluZ3M6e2luZGV4OjAsc3RhcnRfb2Zmc2V0OjAsc3RpY2t5X2NsYXNzOlwic3RpY2t5XCIsY3VzdG9tX2JhY2tfdGV4dDohMCxiYWNrX3RleHQ6XCJCYWNrXCIsbW9iaWxlX3Nob3dfcGFyZW50X2xpbms6ITAsaXNfaG92ZXI6ITAsc2Nyb2xsdG9wOiEwLHN0aWNreV9vbjpcImFsbFwiLGRyb3Bkb3duX2F1dG9jbG9zZTohMH0saW5pdDpmdW5jdGlvbihiLGMsZCl7Rm91bmRhdGlvbi5pbmhlcml0KHRoaXMsXCJhZGRfY3VzdG9tX3J1bGUgcmVnaXN0ZXJfbWVkaWEgdGhyb3R0bGVcIik7dmFyIGU9dGhpcztlLnJlZ2lzdGVyX21lZGlhKFwidG9wYmFyXCIsXCJmb3VuZGF0aW9uLW1xLXRvcGJhclwiKSx0aGlzLmJpbmRpbmdzKGMsZCksZS5TKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIsdGhpcy5zY29wZSkuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1iLmRhdGEoZS5hdHRyX25hbWUoITApK1wiLWluaXRcIik7ZS5TKFwic2VjdGlvbiwgLnRvcC1iYXItc2VjdGlvblwiLHRoaXMpO2IuZGF0YShcImluZGV4XCIsMCk7dmFyIGQ9Yi5wYXJlbnQoKTtkLmhhc0NsYXNzKFwiZml4ZWRcIil8fGUuaXNfc3RpY2t5KGIsZCxjKT8oZS5zZXR0aW5ncy5zdGlja3lfY2xhc3M9Yy5zdGlja3lfY2xhc3MsZS5zZXR0aW5ncy5zdGlja3lfdG9wYmFyPWIsYi5kYXRhKFwiaGVpZ2h0XCIsZC5vdXRlckhlaWdodCgpKSxiLmRhdGEoXCJzdGlja3lvZmZzZXRcIixkLm9mZnNldCgpLnRvcCkpOmIuZGF0YShcImhlaWdodFwiLGIub3V0ZXJIZWlnaHQoKSksYy5hc3NlbWJsZWR8fGUuYXNzZW1ibGUoYiksYy5pc19ob3Zlcj9lLlMoXCIuaGFzLWRyb3Bkb3duXCIsYikuYWRkQ2xhc3MoXCJub3QtY2xpY2tcIik6ZS5TKFwiLmhhcy1kcm9wZG93blwiLGIpLnJlbW92ZUNsYXNzKFwibm90LWNsaWNrXCIpLGUuYWRkX2N1c3RvbV9ydWxlKFwiLmYtdG9wYmFyLWZpeGVkIHsgcGFkZGluZy10b3A6IFwiK2IuZGF0YShcImhlaWdodFwiKStcInB4IH1cIiksZC5oYXNDbGFzcyhcImZpeGVkXCIpJiZlLlMoXCJib2R5XCIpLmFkZENsYXNzKFwiZi10b3BiYXItZml4ZWRcIil9KX0saXNfc3RpY2t5OmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iLmhhc0NsYXNzKGMuc3RpY2t5X2NsYXNzKSxlPW1hdGNoTWVkaWEoRm91bmRhdGlvbi5tZWRpYV9xdWVyaWVzLnNtYWxsKS5tYXRjaGVzLGY9bWF0Y2hNZWRpYShGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMubWVkaXVtKS5tYXRjaGVzLGc9bWF0Y2hNZWRpYShGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMubGFyZ2UpLm1hdGNoZXM7cmV0dXJuIGQmJlwiYWxsXCI9PT1jLnN0aWNreV9vbj8hMDpkJiZ0aGlzLnNtYWxsKCkmJi0xIT09Yy5zdGlja3lfb24uaW5kZXhPZihcInNtYWxsXCIpJiZlJiYhZiYmIWc/ITA6ZCYmdGhpcy5tZWRpdW0oKSYmLTEhPT1jLnN0aWNreV9vbi5pbmRleE9mKFwibWVkaXVtXCIpJiZlJiZmJiYhZz8hMDpkJiZ0aGlzLmxhcmdlKCkmJi0xIT09Yy5zdGlja3lfb24uaW5kZXhPZihcImxhcmdlXCIpJiZlJiZmJiZnPyEwOiExfSx0b2dnbGU6ZnVuY3Rpb24oYyl7dmFyIGQsZT10aGlzO2Q9Yz9lLlMoYykuY2xvc2VzdChcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiXVwiKTplLlMoXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIl1cIik7dmFyIGY9ZC5kYXRhKHRoaXMuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpLGc9ZS5TKFwic2VjdGlvbiwgLnRvcC1iYXItc2VjdGlvblwiLGQpO2UuYnJlYWtwb2ludCgpJiYoZS5ydGw/KGcuY3NzKHtyaWdodDpcIjAlXCJ9KSxhKFwiPi5uYW1lXCIsZykuY3NzKHtyaWdodDpcIjEwMCVcIn0pKTooZy5jc3Moe2xlZnQ6XCIwJVwifSksYShcIj4ubmFtZVwiLGcpLmNzcyh7bGVmdDpcIjEwMCVcIn0pKSxlLlMoXCJsaS5tb3ZlZFwiLGcpLnJlbW92ZUNsYXNzKFwibW92ZWRcIiksZC5kYXRhKFwiaW5kZXhcIiwwKSxkLnRvZ2dsZUNsYXNzKFwiZXhwYW5kZWRcIikuY3NzKFwiaGVpZ2h0XCIsXCJcIikpLGYuc2Nyb2xsdG9wP2QuaGFzQ2xhc3MoXCJleHBhbmRlZFwiKT9kLnBhcmVudCgpLmhhc0NsYXNzKFwiZml4ZWRcIikmJihmLnNjcm9sbHRvcD8oZC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImZpeGVkXCIpLGQuYWRkQ2xhc3MoXCJmaXhlZFwiKSxlLlMoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiZi10b3BiYXItZml4ZWRcIiksYi5zY3JvbGxUbygwLDApKTpkLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiZXhwYW5kZWRcIikpOmQuaGFzQ2xhc3MoXCJmaXhlZFwiKSYmKGQucGFyZW50KCkuYWRkQ2xhc3MoXCJmaXhlZFwiKSxkLnJlbW92ZUNsYXNzKFwiZml4ZWRcIiksZS5TKFwiYm9keVwiKS5hZGRDbGFzcyhcImYtdG9wYmFyLWZpeGVkXCIpKTooZS5pc19zdGlja3koZCxkLnBhcmVudCgpLGYpJiZkLnBhcmVudCgpLmFkZENsYXNzKFwiZml4ZWRcIiksZC5wYXJlbnQoKS5oYXNDbGFzcyhcImZpeGVkXCIpJiYoZC5oYXNDbGFzcyhcImV4cGFuZGVkXCIpPyhkLmFkZENsYXNzKFwiZml4ZWRcIiksZC5wYXJlbnQoKS5hZGRDbGFzcyhcImV4cGFuZGVkXCIpLGUuUyhcImJvZHlcIikuYWRkQ2xhc3MoXCJmLXRvcGJhci1maXhlZFwiKSk6KGQucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKSxkLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiZXhwYW5kZWRcIiksZS51cGRhdGVfc3RpY2t5X3Bvc2l0aW9uaW5nKCkpKSl9LHRpbWVyOm51bGwsZXZlbnRzOmZ1bmN0aW9uKGMpe3ZhciBkPXRoaXMsZT10aGlzLlM7ZSh0aGlzLnNjb3BlKS5vZmYoXCIudG9wYmFyXCIpLm9uKFwiY2xpY2suZm5kdG4udG9wYmFyXCIsXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIl0gLnRvZ2dsZS10b3BiYXJcIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCksZC50b2dnbGUodGhpcyl9KS5vbihcImNsaWNrLmZuZHRuLnRvcGJhciBjb250ZXh0bWVudS5mbmR0bi50b3BiYXJcIiwnLnRvcC1iYXIgLnRvcC1iYXItc2VjdGlvbiBsaSBhW2hyZWZePVwiI1wiXSxbJyt0aGlzLmF0dHJfbmFtZSgpKyddIC50b3AtYmFyLXNlY3Rpb24gbGkgYVtocmVmXj1cIiNcIl0nLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuY2xvc2VzdChcImxpXCIpLGU9Yy5jbG9zZXN0KFwiW1wiK2QuYXR0cl9uYW1lKCkrXCJdXCIpLGY9ZS5kYXRhKGQuYXR0cl9uYW1lKCEwKStcIi1pbml0XCIpO2lmKGYuZHJvcGRvd25fYXV0b2Nsb3NlJiZmLmlzX2hvdmVyKXt2YXIgZz1hKHRoaXMpLmNsb3Nlc3QoXCIuaG92ZXJcIik7Zy5yZW1vdmVDbGFzcyhcImhvdmVyXCIpfSFkLmJyZWFrcG9pbnQoKXx8Yy5oYXNDbGFzcyhcImJhY2tcIil8fGMuaGFzQ2xhc3MoXCJoYXMtZHJvcGRvd25cIil8fGQudG9nZ2xlKCl9KS5vbihcImNsaWNrLmZuZHRuLnRvcGJhclwiLFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdIGxpLmhhcy1kcm9wZG93blwiLGZ1bmN0aW9uKGIpe3ZhciBjPWUodGhpcyksZj1lKGIudGFyZ2V0KSxnPWMuY2xvc2VzdChcIltcIitkLmF0dHJfbmFtZSgpK1wiXVwiKSxoPWcuZGF0YShkLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKTtyZXR1cm4gZi5kYXRhKFwicmV2ZWFsSWRcIik/dm9pZCBkLnRvZ2dsZSgpOnZvaWQoZC5icmVha3BvaW50KCl8fCghaC5pc19ob3Zlcnx8TW9kZXJuaXpyLnRvdWNoKSYmKGIuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksYy5oYXNDbGFzcyhcImhvdmVyXCIpPyhjLnJlbW92ZUNsYXNzKFwiaG92ZXJcIikuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwiaG92ZXJcIiksYy5wYXJlbnRzKFwibGkuaG92ZXJcIikucmVtb3ZlQ2xhc3MoXCJob3ZlclwiKSk6KGMuYWRkQ2xhc3MoXCJob3ZlclwiKSxhKGMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJob3ZlclwiKSxcIkFcIj09PWZbMF0ubm9kZU5hbWUmJmYucGFyZW50KCkuaGFzQ2xhc3MoXCJoYXMtZHJvcGRvd25cIikmJmIucHJldmVudERlZmF1bHQoKSkpKX0pLm9uKFwiY2xpY2suZm5kdG4udG9wYmFyXCIsXCJbXCIrdGhpcy5hdHRyX25hbWUoKStcIl0gLmhhcy1kcm9wZG93bj5hXCIsZnVuY3Rpb24oYSl7aWYoZC5icmVha3BvaW50KCkpe2EucHJldmVudERlZmF1bHQoKTt2YXIgYj1lKHRoaXMpLGM9Yi5jbG9zZXN0KFwiW1wiK2QuYXR0cl9uYW1lKCkrXCJdXCIpLGY9Yy5maW5kKFwic2VjdGlvbiwgLnRvcC1iYXItc2VjdGlvblwiKSxnPShiLm5leHQoXCIuZHJvcGRvd25cIikub3V0ZXJIZWlnaHQoKSxiLmNsb3Nlc3QoXCJsaVwiKSk7Yy5kYXRhKFwiaW5kZXhcIixjLmRhdGEoXCJpbmRleFwiKSsxKSxnLmFkZENsYXNzKFwibW92ZWRcIiksZC5ydGw/KGYuY3NzKHtyaWdodDotKDEwMCpjLmRhdGEoXCJpbmRleFwiKSkrXCIlXCJ9KSxmLmZpbmQoXCI+Lm5hbWVcIikuY3NzKHtyaWdodDoxMDAqYy5kYXRhKFwiaW5kZXhcIikrXCIlXCJ9KSk6KGYuY3NzKHtsZWZ0Oi0oMTAwKmMuZGF0YShcImluZGV4XCIpKStcIiVcIn0pLGYuZmluZChcIj4ubmFtZVwiKS5jc3Moe2xlZnQ6MTAwKmMuZGF0YShcImluZGV4XCIpK1wiJVwifSkpLGMuY3NzKFwiaGVpZ2h0XCIsYi5zaWJsaW5ncyhcInVsXCIpLm91dGVySGVpZ2h0KCEwKStjLmRhdGEoXCJoZWlnaHRcIikpfX0pLGUoYikub2ZmKFwiLnRvcGJhclwiKS5vbihcInJlc2l6ZS5mbmR0bi50b3BiYXJcIixkLnRocm90dGxlKGZ1bmN0aW9uKCl7ZC5yZXNpemUuY2FsbChkKX0sNTApKS50cmlnZ2VyKFwicmVzaXplLmZuZHRuLnRvcGJhclwiKS5sb2FkKGZ1bmN0aW9uKCl7ZSh0aGlzKS50cmlnZ2VyKFwicmVzaXplLmZuZHRuLnRvcGJhclwiKX0pLGUoXCJib2R5XCIpLm9mZihcIi50b3BiYXJcIikub24oXCJjbGljay5mbmR0bi50b3BiYXJcIixmdW5jdGlvbihhKXt2YXIgYj1lKGEudGFyZ2V0KS5jbG9zZXN0KFwibGlcIikuY2xvc2VzdChcImxpLmhvdmVyXCIpO2IubGVuZ3RoPjB8fGUoXCJbXCIrZC5hdHRyX25hbWUoKStcIl0gbGkuaG92ZXJcIikucmVtb3ZlQ2xhc3MoXCJob3ZlclwiKX0pLGUodGhpcy5zY29wZSkub24oXCJjbGljay5mbmR0bi50b3BiYXJcIixcIltcIit0aGlzLmF0dHJfbmFtZSgpK1wiXSAuaGFzLWRyb3Bkb3duIC5iYWNrXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBiPWUodGhpcyksYz1iLmNsb3Nlc3QoXCJbXCIrZC5hdHRyX25hbWUoKStcIl1cIiksZj1jLmZpbmQoXCJzZWN0aW9uLCAudG9wLWJhci1zZWN0aW9uXCIpLGc9KGMuZGF0YShkLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKSxiLmNsb3Nlc3QoXCJsaS5tb3ZlZFwiKSksaD1nLnBhcmVudCgpO2MuZGF0YShcImluZGV4XCIsYy5kYXRhKFwiaW5kZXhcIiktMSksZC5ydGw/KGYuY3NzKHtyaWdodDotKDEwMCpjLmRhdGEoXCJpbmRleFwiKSkrXCIlXCJ9KSxmLmZpbmQoXCI+Lm5hbWVcIikuY3NzKHtyaWdodDoxMDAqYy5kYXRhKFwiaW5kZXhcIikrXCIlXCJ9KSk6KGYuY3NzKHtsZWZ0Oi0oMTAwKmMuZGF0YShcImluZGV4XCIpKStcIiVcIn0pLGYuZmluZChcIj4ubmFtZVwiKS5jc3Moe2xlZnQ6MTAwKmMuZGF0YShcImluZGV4XCIpK1wiJVwifSkpLDA9PT1jLmRhdGEoXCJpbmRleFwiKT9jLmNzcyhcImhlaWdodFwiLFwiXCIpOmMuY3NzKFwiaGVpZ2h0XCIsaC5vdXRlckhlaWdodCghMCkrYy5kYXRhKFwiaGVpZ2h0XCIpKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zy5yZW1vdmVDbGFzcyhcIm1vdmVkXCIpfSwzMDApfSksZSh0aGlzLnNjb3BlKS5maW5kKFwiLmRyb3Bkb3duIGFcIikuZm9jdXMoZnVuY3Rpb24oKXthKHRoaXMpLnBhcmVudHMoXCIuaGFzLWRyb3Bkb3duXCIpLmFkZENsYXNzKFwiaG92ZXJcIil9KS5ibHVyKGZ1bmN0aW9uKCl7YSh0aGlzKS5wYXJlbnRzKFwiLmhhcy1kcm9wZG93blwiKS5yZW1vdmVDbGFzcyhcImhvdmVyXCIpfSl9LHJlc2l6ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXM7YS5TKFwiW1wiK3RoaXMuYXR0cl9uYW1lKCkrXCJdXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkPWEuUyh0aGlzKSxlPWQuZGF0YShhLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKSxmPWQucGFyZW50KFwiLlwiK2Euc2V0dGluZ3Muc3RpY2t5X2NsYXNzKTtpZighYS5icmVha3BvaW50KCkpe3ZhciBnPWQuaGFzQ2xhc3MoXCJleHBhbmRlZFwiKTtkLmNzcyhcImhlaWdodFwiLFwiXCIpLnJlbW92ZUNsYXNzKFwiZXhwYW5kZWRcIikuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwiaG92ZXJcIiksZyYmYS50b2dnbGUoZCl9YS5pc19zdGlja3koZCxmLGUpJiYoZi5oYXNDbGFzcyhcImZpeGVkXCIpPyhmLnJlbW92ZUNsYXNzKFwiZml4ZWRcIiksYj1mLm9mZnNldCgpLnRvcCxhLlMoYy5ib2R5KS5oYXNDbGFzcyhcImYtdG9wYmFyLWZpeGVkXCIpJiYoYi09ZC5kYXRhKFwiaGVpZ2h0XCIpKSxkLmRhdGEoXCJzdGlja3lvZmZzZXRcIixiKSxmLmFkZENsYXNzKFwiZml4ZWRcIikpOihiPWYub2Zmc2V0KCkudG9wLGQuZGF0YShcInN0aWNreW9mZnNldFwiLGIpKSl9KX0sYnJlYWtwb2ludDpmdW5jdGlvbigpe3JldHVybiFtYXRjaE1lZGlhKEZvdW5kYXRpb24ubWVkaWFfcXVlcmllcy50b3BiYXIpLm1hdGNoZXN9LHNtYWxsOmZ1bmN0aW9uKCl7cmV0dXJuIG1hdGNoTWVkaWEoRm91bmRhdGlvbi5tZWRpYV9xdWVyaWVzLnNtYWxsKS5tYXRjaGVzfSxtZWRpdW06ZnVuY3Rpb24oKXtyZXR1cm4gbWF0Y2hNZWRpYShGb3VuZGF0aW9uLm1lZGlhX3F1ZXJpZXMubWVkaXVtKS5tYXRjaGVzfSxsYXJnZTpmdW5jdGlvbigpe3JldHVybiBtYXRjaE1lZGlhKEZvdW5kYXRpb24ubWVkaWFfcXVlcmllcy5sYXJnZSkubWF0Y2hlc30sYXNzZW1ibGU6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPWIuZGF0YSh0aGlzLmF0dHJfbmFtZSghMCkrXCItaW5pdFwiKSxlPWMuUyhcInNlY3Rpb24sIC50b3AtYmFyLXNlY3Rpb25cIixiKTtlLmRldGFjaCgpLGMuUyhcIi5oYXMtZHJvcGRvd24+YVwiLGUpLmVhY2goZnVuY3Rpb24oKXt2YXIgYixlPWMuUyh0aGlzKSxmPWUuc2libGluZ3MoXCIuZHJvcGRvd25cIiksZz1lLmF0dHIoXCJocmVmXCIpO2YuZmluZChcIi50aXRsZS5iYWNrXCIpLmxlbmd0aHx8KGI9YSgxPT1kLm1vYmlsZV9zaG93X3BhcmVudF9saW5rJiZnPyc8bGkgY2xhc3M9XCJ0aXRsZSBiYWNrIGpzLWdlbmVyYXRlZFwiPjxoNT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+PC9hPjwvaDU+PC9saT48bGkgY2xhc3M9XCJwYXJlbnQtbGluayBoaWRlLWZvci1tZWRpdW0tdXBcIj48YSBjbGFzcz1cInBhcmVudC1saW5rIGpzLWdlbmVyYXRlZFwiIGhyZWY9XCInK2crJ1wiPicrZS5odG1sKCkrXCI8L2E+PC9saT5cIjonPGxpIGNsYXNzPVwidGl0bGUgYmFjayBqcy1nZW5lcmF0ZWRcIj48aDU+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjwvYT48L2g1PicpLDE9PWQuY3VzdG9tX2JhY2tfdGV4dD9hKFwiaDU+YVwiLGIpLmh0bWwoZC5iYWNrX3RleHQpOmEoXCJoNT5hXCIsYikuaHRtbChcIiZsYXF1bzsgXCIrZS5odG1sKCkpLGYucHJlcGVuZChiKSl9KSxlLmFwcGVuZFRvKGIpLHRoaXMuc3RpY2t5KCksdGhpcy5hc3NlbWJsZWQoYil9LGFzc2VtYmxlZDpmdW5jdGlvbihiKXtiLmRhdGEodGhpcy5hdHRyX25hbWUoITApLGEuZXh0ZW5kKHt9LGIuZGF0YSh0aGlzLmF0dHJfbmFtZSghMCkpLHthc3NlbWJsZWQ6ITB9KSl9LGhlaWdodDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9dGhpcztyZXR1cm4gYShcIj4gbGlcIixiKS5lYWNoKGZ1bmN0aW9uKCl7Yys9ZC5TKHRoaXMpLm91dGVySGVpZ2h0KCEwKX0pLGN9LHN0aWNreTpmdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy5TKGIpLm9uKFwic2Nyb2xsXCIsZnVuY3Rpb24oKXthLnVwZGF0ZV9zdGlja3lfcG9zaXRpb25pbmcoKX0pfSx1cGRhdGVfc3RpY2t5X3Bvc2l0aW9uaW5nOmZ1bmN0aW9uKCl7dmFyIGE9XCIuXCIrdGhpcy5zZXR0aW5ncy5zdGlja3lfY2xhc3MsYz10aGlzLlMoYiksZD10aGlzO2lmKGQuc2V0dGluZ3Muc3RpY2t5X3RvcGJhciYmZC5pc19zdGlja3kodGhpcy5zZXR0aW5ncy5zdGlja3lfdG9wYmFyLHRoaXMuc2V0dGluZ3Muc3RpY2t5X3RvcGJhci5wYXJlbnQoKSx0aGlzLnNldHRpbmdzKSl7dmFyIGU9dGhpcy5zZXR0aW5ncy5zdGlja3lfdG9wYmFyLmRhdGEoXCJzdGlja3lvZmZzZXRcIikrdGhpcy5zZXR0aW5ncy5zdGFydF9vZmZzZXQ7ZC5TKGEpLmhhc0NsYXNzKFwiZXhwYW5kZWRcIil8fChjLnNjcm9sbFRvcCgpPmU/ZC5TKGEpLmhhc0NsYXNzKFwiZml4ZWRcIil8fChkLlMoYSkuYWRkQ2xhc3MoXCJmaXhlZFwiKSxkLlMoXCJib2R5XCIpLmFkZENsYXNzKFwiZi10b3BiYXItZml4ZWRcIikpOmMuc2Nyb2xsVG9wKCk8PWUmJmQuUyhhKS5oYXNDbGFzcyhcImZpeGVkXCIpJiYoZC5TKGEpLnJlbW92ZUNsYXNzKFwiZml4ZWRcIiksZC5TKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImYtdG9wYmFyLWZpeGVkXCIpKSl9fSxvZmY6ZnVuY3Rpb24oKXt0aGlzLlModGhpcy5zY29wZSkub2ZmKFwiLmZuZHRuLnRvcGJhclwiKSx0aGlzLlMoYikub2ZmKFwiLmZuZHRuLnRvcGJhclwiKX0scmVmbG93OmZ1bmN0aW9uKCl7fX19KGpRdWVyeSx3aW5kb3csd2luZG93LmRvY3VtZW50KTsiLCIvKiohXG5BTkRSRUFTIEhBTkRMRUJBUlNcbiBAbGljZW5zZVxuIGhhbmRsZWJhcnMgdjQuMC4xMFxuXG5Db3B5cmlnaHQgKEMpIDIwMTEtMjAxNiBieSBZZWh1ZGEgS2F0elxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIYW5kbGViYXJzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhhbmRsZWJhcnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwIEFORFJFQVMgSEFORExFQkFSU1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNSdW50aW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHQvLyBDb21waWxlciBpbXBvcnRzXG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJBc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckFzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzQ29tcGlsZXJBc3QpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlciA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0NvbXBpbGVySmF2YXNjcmlwdENvbXBpbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlckphdmFzY3JpcHRDb21waWxlcik7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cblx0dmFyIF9oYW5kbGViYXJzQ29tcGlsZXJWaXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IpO1xuXG5cdHZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcblxuXHR2YXIgX2NyZWF0ZSA9IF9oYW5kbGViYXJzUnVudGltZTJbJ2RlZmF1bHQnXS5jcmVhdGU7XG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBfY3JlYXRlKCk7XG5cblx0ICBoYi5jb21waWxlID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XG5cdCAgICByZXR1cm4gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLmNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGhiKTtcblx0ICB9O1xuXHQgIGhiLnByZWNvbXBpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAgIHJldHVybiBfaGFuZGxlYmFyc0NvbXBpbGVyQ29tcGlsZXIucHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgaGIpO1xuXHQgIH07XG5cblx0ICBoYi5BU1QgPSBfaGFuZGxlYmFyc0NvbXBpbGVyQXN0MlsnZGVmYXVsdCddO1xuXHQgIGhiLkNvbXBpbGVyID0gX2hhbmRsZWJhcnNDb21waWxlckNvbXBpbGVyLkNvbXBpbGVyO1xuXHQgIGhiLkphdmFTY3JpcHRDb21waWxlciA9IF9oYW5kbGViYXJzQ29tcGlsZXJKYXZhc2NyaXB0Q29tcGlsZXIyWydkZWZhdWx0J107XG5cdCAgaGIuUGFyc2VyID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2VyO1xuXHQgIGhiLnBhcnNlID0gX2hhbmRsZWJhcnNDb21waWxlckJhc2UucGFyc2U7XG5cblx0ICByZXR1cm4gaGI7XG5cdH1cblxuXHR2YXIgaW5zdCA9IGNyZWF0ZSgpO1xuXHRpbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxuXHRfaGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cblx0aW5zdC5WaXNpdG9yID0gX2hhbmRsZWJhcnNDb21waWxlclZpc2l0b3IyWydkZWZhdWx0J107XG5cblx0aW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcblx0ICAgIFwiZGVmYXVsdFwiOiBvYmpcblx0ICB9O1xuXHR9O1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2hhbmRsZWJhcnNCYXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXHR2YXIgYmFzZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzQmFzZSk7XG5cblx0Ly8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuXHQvLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuXG5cdHZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNTYWZlU3RyaW5nKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzRXhjZXB0aW9uKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0dmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNVdGlscyk7XG5cblx0dmFyIF9oYW5kbGViYXJzUnVudGltZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXG5cdHZhciBydW50aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxuXHR2YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCk7XG5cblx0dmFyIF9oYW5kbGViYXJzTm9Db25mbGljdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzTm9Db25mbGljdCk7XG5cblx0Ly8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG5cdGZ1bmN0aW9uIGNyZWF0ZSgpIHtcblx0ICB2YXIgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuXHQgIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG5cdCAgaGIuU2FmZVN0cmluZyA9IF9oYW5kbGViYXJzU2FmZVN0cmluZzJbJ2RlZmF1bHQnXTtcblx0ICBoYi5FeGNlcHRpb24gPSBfaGFuZGxlYmFyc0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXTtcblx0ICBoYi5VdGlscyA9IFV0aWxzO1xuXHQgIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cdCAgaGIuVk0gPSBydW50aW1lO1xuXHQgIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24gKHNwZWMpIHtcblx0ICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcblx0ICB9O1xuXG5cdCAgcmV0dXJuIGhiO1xuXHR9XG5cblx0dmFyIGluc3QgPSBjcmVhdGUoKTtcblx0aW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cblx0X2hhbmRsZWJhcnNOb0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5cdGluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gaW5zdDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuXHQgIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcblx0ICAgIHJldHVybiBvYmo7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhciBuZXdPYmogPSB7fTtcblxuXHQgICAgaWYgKG9iaiAhPSBudWxsKSB7XG5cdCAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0ICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXHQgICAgcmV0dXJuIG5ld09iajtcblx0ICB9XG5cdH07XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuSGFuZGxlYmFyc0Vudmlyb25tZW50ID0gSGFuZGxlYmFyc0Vudmlyb25tZW50O1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5cdHZhciBfZGVjb3JhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXG5cdHZhciBfbG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cblx0dmFyIF9sb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nZ2VyKTtcblxuXHR2YXIgVkVSU0lPTiA9ICc0LjAuMTAnO1xuXHRleHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xuXHR2YXIgQ09NUElMRVJfUkVWSVNJT04gPSA3O1xuXG5cdGV4cG9ydHMuQ09NUElMRVJfUkVWSVNJT04gPSBDT01QSUxFUl9SRVZJU0lPTjtcblx0dmFyIFJFVklTSU9OX0NIQU5HRVMgPSB7XG5cdCAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcblx0ICAyOiAnPT0gMS4wLjAtcmMuMycsXG5cdCAgMzogJz09IDEuMC4wLXJjLjQnLFxuXHQgIDQ6ICc9PSAxLngueCcsXG5cdCAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuXHQgIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuXHQgIDc6ICc+PSA0LjAuMCdcblx0fTtcblxuXHRleHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xuXHR2YXIgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5cdGZ1bmN0aW9uIEhhbmRsZWJhcnNFbnZpcm9ubWVudChoZWxwZXJzLCBwYXJ0aWFscywgZGVjb3JhdG9ycykge1xuXHQgIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG5cdCAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuXHQgIHRoaXMuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnMgfHwge307XG5cblx0ICBfaGVscGVycy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuXHQgIF9kZWNvcmF0b3JzLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG5cdH1cblxuXHRIYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuXHQgIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cblx0ICBsb2dnZXI6IF9sb2dnZXIyWydkZWZhdWx0J10sXG5cdCAgbG9nOiBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZyxcblxuXHQgIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcihuYW1lLCBmbikge1xuXHQgICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG5cdCAgICAgIGlmIChmbikge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcblx0ICAgICAgfVxuXHQgICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcblx0ICAgIH1cblx0ICB9LFxuXHQgIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uIHVucmVnaXN0ZXJIZWxwZXIobmFtZSkge1xuXHQgICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcblx0ICB9LFxuXG5cdCAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiByZWdpc3RlclBhcnRpYWwobmFtZSwgcGFydGlhbCkge1xuXHQgICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG5cdCAgICAgIF91dGlscy5leHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0F0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIicgKyBuYW1lICsgJ1wiIGFzIHVuZGVmaW5lZCcpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHVucmVnaXN0ZXJQYXJ0aWFsKG5hbWUpIHtcblx0ICAgIGRlbGV0ZSB0aGlzLnBhcnRpYWxzW25hbWVdO1xuXHQgIH0sXG5cblx0ICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IobmFtZSwgZm4pIHtcblx0ICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuXHQgICAgICBpZiAoZm4pIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBkZWNvcmF0b3JzJyk7XG5cdCAgICAgIH1cblx0ICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmRlY29yYXRvcnMsIG5hbWUpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG5cdCAgICB9XG5cdCAgfSxcblx0ICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiB1bnJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUpIHtcblx0ICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG5cdCAgfVxuXHR9O1xuXG5cdHZhciBsb2cgPSBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZztcblxuXHRleHBvcnRzLmxvZyA9IGxvZztcblx0ZXhwb3J0cy5jcmVhdGVGcmFtZSA9IF91dGlscy5jcmVhdGVGcmFtZTtcblx0ZXhwb3J0cy5sb2dnZXIgPSBfbG9nZ2VyMlsnZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5cdGV4cG9ydHMuaW5kZXhPZiA9IGluZGV4T2Y7XG5cdGV4cG9ydHMuZXNjYXBlRXhwcmVzc2lvbiA9IGVzY2FwZUV4cHJlc3Npb247XG5cdGV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5cdGV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcblx0ZXhwb3J0cy5ibG9ja1BhcmFtcyA9IGJsb2NrUGFyYW1zO1xuXHRleHBvcnRzLmFwcGVuZENvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGg7XG5cdHZhciBlc2NhcGUgPSB7XG5cdCAgJyYnOiAnJmFtcDsnLFxuXHQgICc8JzogJyZsdDsnLFxuXHQgICc+JzogJyZndDsnLFxuXHQgICdcIic6ICcmcXVvdDsnLFxuXHQgIFwiJ1wiOiAnJiN4Mjc7Jyxcblx0ICAnYCc6ICcmI3g2MDsnLFxuXHQgICc9JzogJyYjeDNEOydcblx0fTtcblxuXHR2YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2A9XS9nLFxuXHQgICAgcG9zc2libGUgPSAvWyY8PlwiJ2A9XS87XG5cblx0ZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcblx0ICByZXR1cm4gZXNjYXBlW2Nocl07XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG5cdCAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0ICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcblx0ICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcblx0ICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIG9iajtcblx0fVxuXG5cdHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cblx0ZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuXHQvLyBTb3VyY2VkIGZyb20gbG9kYXNoXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcblx0LyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xuXHR2YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcblx0ICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuXHR9O1xuXHQvLyBmYWxsYmFjayBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmlcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0aWYgKGlzRnVuY3Rpb24oL3gvKSkge1xuXHQgIGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdCAgfTtcblx0fVxuXHRleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5cdC8qIGVzbGludC1lbmFibGUgZnVuYy1zdHlsZSAqL1xuXG5cdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG5cdH07XG5cblx0ZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblx0Ly8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cblxuXHRmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuXHQgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuXHQgICAgICByZXR1cm4gaTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIC0xO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcblx0ICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0ICAgIC8vIGRvbid0IGVzY2FwZSBTYWZlU3RyaW5ncywgc2luY2UgdGhleSdyZSBhbHJlYWR5IHNhZmVcblx0ICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuXHQgICAgICByZXR1cm4gc3RyaW5nLnRvSFRNTCgpO1xuXHQgICAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gJyc7XG5cdCAgICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcblx0ICAgICAgcmV0dXJuIHN0cmluZyArICcnO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcblx0ICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuXHQgICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG5cdCAgICBzdHJpbmcgPSAnJyArIHN0cmluZztcblx0ICB9XG5cblx0ICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuXHQgICAgcmV0dXJuIHN0cmluZztcblx0ICB9XG5cdCAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcblx0ICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcblx0ICB2YXIgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG5cdCAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcblx0ICByZXR1cm4gZnJhbWU7XG5cdH1cblxuXHRmdW5jdGlvbiBibG9ja1BhcmFtcyhwYXJhbXMsIGlkcykge1xuXHQgIHBhcmFtcy5wYXRoID0gaWRzO1xuXHQgIHJldHVybiBwYXJhbXM7XG5cdH1cblxuXHRmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcblx0ICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcblx0fVxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cblx0ZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcblx0ICB2YXIgbG9jID0gbm9kZSAmJiBub2RlLmxvYyxcblx0ICAgICAgbGluZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgY29sdW1uID0gdW5kZWZpbmVkO1xuXHQgIGlmIChsb2MpIHtcblx0ICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcblx0ICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cblx0ICAgIG1lc3NhZ2UgKz0gJyAtICcgKyBsaW5lICsgJzonICsgY29sdW1uO1xuXHQgIH1cblxuXHQgIHZhciB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuXHQgIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuXHQgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuXHQgICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG5cdCAgfVxuXG5cdCAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcblx0ICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEV4Y2VwdGlvbik7XG5cdCAgfVxuXG5cdCAgdHJ5IHtcblx0ICAgIGlmIChsb2MpIHtcblx0ICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuXHQgICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcblx0ICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICAgICAgaWYgKF9PYmplY3QkZGVmaW5lUHJvcGVydHkpIHtcblx0ICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcblx0ICAgICAgICAgIHZhbHVlOiBjb2x1bW4sXG5cdCAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9IGNhdGNoIChub3ApIHtcblx0ICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cblx0ICB9XG5cdH1cblxuXHRFeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gRXhjZXB0aW9uO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcblx0ICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHR2YXIgJE9iamVjdCA9IE9iamVjdDtcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG5cdCAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcblx0ICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcblx0ICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcblx0ICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuXHQgIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcblx0ICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG5cdCAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuXHQgIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuXHQgIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcblx0fTtcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHRleHBvcnRzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMgPSByZWdpc3RlckRlZmF1bHRIZWxwZXJzO1xuXG5cdHZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5cdHZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nKTtcblxuXHR2YXIgX2hlbHBlcnNFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cblx0dmFyIF9oZWxwZXJzRWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzRWFjaCk7XG5cblx0dmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZyA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXG5cdHZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0hlbHBlck1pc3NpbmcpO1xuXG5cdHZhciBfaGVscGVyc0lmID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cblx0dmFyIF9oZWxwZXJzSWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0lmKTtcblxuXHR2YXIgX2hlbHBlcnNMb2cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblxuXHR2YXIgX2hlbHBlcnNMb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvZyk7XG5cblx0dmFyIF9oZWxwZXJzTG9va3VwID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cblx0dmFyIF9oZWxwZXJzTG9va3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb29rdXApO1xuXG5cdHZhciBfaGVscGVyc1dpdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxuXHR2YXIgX2hlbHBlcnNXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNXaXRoKTtcblxuXHRmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG5cdCAgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzRWFjaDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0lmMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcblx0ICBfaGVscGVyc0xvZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdCAgX2hlbHBlcnNMb29rdXAyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuXHQgIF9oZWxwZXJzV2l0aDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuXHQgICAgdmFyIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG5cdCAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG5cdCAgICBpZiAoY29udGV4dCA9PT0gdHJ1ZSkge1xuXHQgICAgICByZXR1cm4gZm4odGhpcyk7XG5cdCAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcblx0ICAgIH0gZWxzZSBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcblx0ICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuXHQgICAgICAgIGlmIChvcHRpb25zLmlkcykge1xuXHQgICAgICAgICAgb3B0aW9ucy5pZHMgPSBbb3B0aW9ucy5uYW1lXTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVycy5lYWNoKGNvbnRleHQsIG9wdGlvbnMpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG5cdCAgICAgICAgdmFyIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcblx0ICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgX2V4Y2VwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0dmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAoIW9wdGlvbnMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSBvcHRpb25zLmZuLFxuXHQgICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG5cdCAgICAgICAgaSA9IDAsXG5cdCAgICAgICAgcmV0ID0gJycsXG5cdCAgICAgICAgZGF0YSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBjb250ZXh0UGF0aCA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuXHQgICAgICBjb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcblx0ICAgIH1cblxuXHQgICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG5cdCAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChvcHRpb25zLmRhdGEpIHtcblx0ICAgICAgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuXHQgICAgICBpZiAoZGF0YSkge1xuXHQgICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG5cdCAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuXHQgICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcblx0ICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cblx0ICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcblx0ICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXG5cdCAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG5cdCAgICAgICAgZGF0YTogZGF0YSxcblx0ICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLCBbY29udGV4dFBhdGggKyBmaWVsZCwgbnVsbF0pXG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNvbnRleHQpKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG5cdCAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdmFyIHByaW9yS2V5ID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbnRleHQpIHtcblx0ICAgICAgICAgIGlmIChjb250ZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0ICAgICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG5cdCAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcblx0ICAgICAgICAgICAgLy8gYW4gaXRlcm1lZGlhdGUga2V5cyBhcnJheS5cblx0ICAgICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG5cdCAgICAgICAgICAgIGkrKztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgaWYgKGkgPT09IDApIHtcblx0ICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdoZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKCkgLyogW2FyZ3MsIF1vcHRpb25zICove1xuXHQgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcblx0ICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG5cdCAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcblx0ICAgIH1cblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuXHQgICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkge1xuXHQgICAgICBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cblx0ICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG5cdCAgICAvLyBiZWhhdmlvciBvZiBpc0VtcHR5LiBFZmZlY3RpdmVseSB0aGlzIGRldGVybWluZXMgaWYgMCBpcyBoYW5kbGVkIGJ5IHRoZSBwb3NpdGl2ZSBwYXRoIG9yIG5lZ2F0aXZlLlxuXHQgICAgaWYgKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsIHx8IF91dGlscy5pc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG5cdCAgICB9XG5cdCAgfSk7XG5cblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG5cdCAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7IGZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaCB9KTtcblx0ICB9KTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb2cnLCBmdW5jdGlvbiAoKSAvKiBtZXNzYWdlLCBvcHRpb25zICove1xuXHQgICAgdmFyIGFyZ3MgPSBbdW5kZWZpbmVkXSxcblx0ICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHQgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGxldmVsID0gMTtcblx0ICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuXHQgICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcblx0ICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YS5sZXZlbCAhPSBudWxsKSB7XG5cdCAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuXHQgICAgfVxuXHQgICAgYXJnc1swXSA9IGxldmVsO1xuXG5cdCAgICBpbnN0YW5jZS5sb2cuYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdCAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvb2t1cCcsIGZ1bmN0aW9uIChvYmosIGZpZWxkKSB7XG5cdCAgICByZXR1cm4gb2JqICYmIG9ialtmaWVsZF07XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0ICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignd2l0aCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcblx0ICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblxuXHQgICAgaWYgKCFfdXRpbHMuaXNFbXB0eShjb250ZXh0KSkge1xuXHQgICAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblx0ICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuXHQgICAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcblx0ICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIHtcblx0ICAgICAgICBkYXRhOiBkYXRhLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcblx0ICAgICAgfSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuXHQgICAgfVxuXHQgIH0pO1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyA9IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnM7XG5cblx0dmFyIF9kZWNvcmF0b3JzSW5saW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cblx0dmFyIF9kZWNvcmF0b3JzSW5saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRvcnNJbmxpbmUpO1xuXG5cdGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMoaW5zdGFuY2UpIHtcblx0ICBfZGVjb3JhdG9yc0lubGluZTJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAxOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHQgIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbiAoZm4sIHByb3BzLCBjb250YWluZXIsIG9wdGlvbnMpIHtcblx0ICAgIHZhciByZXQgPSBmbjtcblx0ICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcblx0ICAgICAgcHJvcHMucGFydGlhbHMgPSB7fTtcblx0ICAgICAgcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cblx0ICAgICAgICB2YXIgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gX3V0aWxzLmV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcblx0ICAgICAgICB2YXIgcmV0ID0gZm4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG5cdCAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgbG9nZ2VyID0ge1xuXHQgIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcblx0ICBsZXZlbDogJ2luZm8nLFxuXG5cdCAgLy8gTWFwcyBhIGdpdmVuIGxldmVsIHZhbHVlIHRvIHRoZSBgbWV0aG9kTWFwYCBpbmRleGVzIGFib3ZlLlxuXHQgIGxvb2t1cExldmVsOiBmdW5jdGlvbiBsb29rdXBMZXZlbChsZXZlbCkge1xuXHQgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgdmFyIGxldmVsTWFwID0gX3V0aWxzLmluZGV4T2YobG9nZ2VyLm1ldGhvZE1hcCwgbGV2ZWwudG9Mb3dlckNhc2UoKSk7XG5cdCAgICAgIGlmIChsZXZlbE1hcCA+PSAwKSB7XG5cdCAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBsZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGxldmVsO1xuXHQgIH0sXG5cblx0ICAvLyBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuXHQgIGxvZzogZnVuY3Rpb24gbG9nKGxldmVsKSB7XG5cdCAgICBsZXZlbCA9IGxvZ2dlci5sb29rdXBMZXZlbChsZXZlbCk7XG5cblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcblx0ICAgICAgdmFyIG1ldGhvZCA9IGxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuXHQgICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuXHQgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHQgICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuXHQgICAgICB9XG5cblx0ICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2UgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgICAgbWVzc2FnZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICAgIH1cblxuXHQgICAgICBjb25zb2xlW21ldGhvZF0uYXBwbHkoY29uc29sZSwgbWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBsb2dnZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG5cdCAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG5cdH1cblxuXHRTYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IFNhZmVTdHJpbmcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uICgpIHtcblx0ICByZXR1cm4gJycgKyB0aGlzLnN0cmluZztcblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBTYWZlU3RyaW5nO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX09iamVjdCRzZWFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMylbJ2RlZmF1bHQnXTtcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcblx0ZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRleHBvcnRzLndyYXBQcm9ncmFtID0gd3JhcFByb2dyYW07XG5cdGV4cG9ydHMucmVzb2x2ZVBhcnRpYWwgPSByZXNvbHZlUGFydGlhbDtcblx0ZXhwb3J0cy5pbnZva2VQYXJ0aWFsID0gaW52b2tlUGFydGlhbDtcblx0ZXhwb3J0cy5ub29wID0gbm9vcDtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfYmFzZSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cblx0ZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcblx0ICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcblx0ICAgICAgY3VycmVudFJldmlzaW9uID0gX2Jhc2UuQ09NUElMRVJfUkVWSVNJT047XG5cblx0ICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG5cdCAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuXHQgICAgICB2YXIgcnVudGltZVZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuXHQgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBydW50aW1lVmVyc2lvbnMgKyAnKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKCcgKyBjb21waWxlclZlcnNpb25zICsgJykuJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBjb21waWxlckluZm9bMV0gKyAnKS4nKTtcblx0ICAgIH1cblx0ICB9XG5cdH1cblxuXHRmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgaWYgKCFlbnYpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcblx0ICB9XG5cdCAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcblx0ICB9XG5cblx0ICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG5cdCAgLy8gTm90ZTogVXNpbmcgZW52LlZNIHJlZmVyZW5jZXMgcmF0aGVyIHRoYW4gbG9jYWwgdmFyIHJlZmVyZW5jZXMgdGhyb3VnaG91dCB0aGlzIHNlY3Rpb24gdG8gYWxsb3dcblx0ICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxuXHQgIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cblx0ICBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsV3JhcHBlcihwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG5cdCAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG5cdCAgICAgIGlmIChvcHRpb25zLmlkcykge1xuXHQgICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgICB2YXIgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG5cdCAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG5cdCAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgIH1cblx0ICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuXHQgICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcblx0ICAgICAgICB2YXIgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXG5cdCAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIC8vIEp1c3QgYWRkIHdhdGVyXG5cdCAgdmFyIGNvbnRhaW5lciA9IHtcblx0ICAgIHN0cmljdDogZnVuY3Rpb24gc3RyaWN0KG9iaiwgbmFtZSkge1xuXHQgICAgICBpZiAoIShuYW1lIGluIG9iaikpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gb2JqW25hbWVdO1xuXHQgICAgfSxcblx0ICAgIGxvb2t1cDogZnVuY3Rpb24gbG9va3VwKGRlcHRocywgbmFtZSkge1xuXHQgICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcblx0ICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9LFxuXHQgICAgbGFtYmRhOiBmdW5jdGlvbiBsYW1iZGEoY3VycmVudCwgY29udGV4dCkge1xuXHQgICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuXHQgICAgfSxcblxuXHQgICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcblx0ICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG5cdCAgICBmbjogZnVuY3Rpb24gZm4oaSkge1xuXHQgICAgICB2YXIgcmV0ID0gdGVtcGxhdGVTcGVjW2ldO1xuXHQgICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0sXG5cblx0ICAgIHByb2dyYW1zOiBbXSxcblx0ICAgIHByb2dyYW06IGZ1bmN0aW9uIHByb2dyYW0oaSwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuXHQgICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuXHQgICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuXHQgICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuXHQgICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuXHQgICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG5cdCAgICB9LFxuXG5cdCAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKHZhbHVlLCBkZXB0aCkge1xuXHQgICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xuXHQgICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gdmFsdWU7XG5cdCAgICB9LFxuXHQgICAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKHBhcmFtLCBjb21tb24pIHtcblx0ICAgICAgdmFyIG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuXHQgICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcblx0ICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIG9iajtcblx0ICAgIH0sXG5cdCAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG5cdCAgICBudWxsQ29udGV4dDogX09iamVjdCRzZWFsKHt9KSxcblxuXHQgICAgbm9vcDogZW52LlZNLm5vb3AsXG5cdCAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuXHQgIH07XG5cblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCkge1xuXHQgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cblx0ICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG5cdCAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuXHQgICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG5cdCAgICB9XG5cdCAgICB2YXIgZGVwdGhzID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGJsb2NrUGFyYW1zID0gdGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zID8gW10gOiB1bmRlZmluZWQ7XG5cdCAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuXHQgICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcblx0ICAgICAgICBkZXB0aHMgPSBjb250ZXh0ICE9IG9wdGlvbnMuZGVwdGhzWzBdID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBvcHRpb25zLmRlcHRocztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gbWFpbihjb250ZXh0IC8qLCBvcHRpb25zKi8pIHtcblx0ICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICAgIH1cblx0ICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyh0ZW1wbGF0ZVNwZWMubWFpbiwgbWFpbiwgY29udGFpbmVyLCBvcHRpb25zLmRlcHRocyB8fCBbXSwgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXHQgICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgfVxuXHQgIHJldC5pc1RvcCA9IHRydWU7XG5cblx0ICByZXQuX3NldHVwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0ICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG5cdCAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuaGVscGVycywgZW52LmhlbHBlcnMpO1xuXG5cdCAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuXHQgICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCB8fCB0ZW1wbGF0ZVNwZWMudXNlRGVjb3JhdG9ycykge1xuXHQgICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcblx0ICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcblx0ICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBvcHRpb25zLmRlY29yYXRvcnM7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcblx0ICAgIH1cblx0ICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgfTtcblx0ICByZXR1cm4gcmV0O1xuXHR9XG5cblx0ZnVuY3Rpb24gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgIGZ1bmN0aW9uIHByb2coY29udGV4dCkge1xuXHQgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgdmFyIGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG5cdCAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT0gZGVwdGhzWzBdICYmICEoY29udGV4dCA9PT0gY29udGFpbmVyLm51bGxDb250ZXh0ICYmIGRlcHRoc1swXSA9PT0gbnVsbCkpIHtcblx0ICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIGZuKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBjdXJyZW50RGVwdGhzKTtcblx0ICB9XG5cblx0ICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cblx0ICBwcm9nLnByb2dyYW0gPSBpO1xuXHQgIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcblx0ICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuXHQgIHJldHVybiBwcm9nO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzb2x2ZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuXHQgIGlmICghcGFydGlhbCkge1xuXHQgICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuXHQgICAgICBwYXJ0aWFsID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuXHQgICAgfVxuXHQgIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG5cdCAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcblx0ICAgIG9wdGlvbnMubmFtZSA9IHBhcnRpYWw7XG5cdCAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcblx0ICB9XG5cdCAgcmV0dXJuIHBhcnRpYWw7XG5cdH1cblxuXHRmdW5jdGlvbiBpbnZva2VQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcblx0ICAvLyBVc2UgdGhlIGN1cnJlbnQgY2xvc3VyZSBjb250ZXh0IHRvIHNhdmUgdGhlIHBhcnRpYWwtYmxvY2sgaWYgdGhpcyBwYXJ0aWFsXG5cdCAgdmFyIGN1cnJlbnRQYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG5cdCAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcblx0ICBpZiAob3B0aW9ucy5pZHMpIHtcblx0ICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCA9IG9wdGlvbnMuaWRzWzBdIHx8IG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aDtcblx0ICB9XG5cblx0ICB2YXIgcGFydGlhbEJsb2NrID0gdW5kZWZpbmVkO1xuXHQgIGlmIChvcHRpb25zLmZuICYmIG9wdGlvbnMuZm4gIT09IG5vb3ApIHtcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIG9wdGlvbnMuZGF0YSA9IF9iYXNlLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgIC8vIFdyYXBwZXIgZnVuY3Rpb24gdG8gZ2V0IGFjY2VzcyB0byBjdXJyZW50UGFydGlhbEJsb2NrIGZyb20gdGhlIGNsb3N1cmVcblx0ICAgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblx0ICAgICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQpIHtcblx0ICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuXHQgICAgICAgIC8vIGkuZS4gdGhlIHBhcnQgaW5zaWRlIHRoZSBibG9jayBvZiB0aGUgcGFydGlhbCBjYWxsLlxuXHQgICAgICAgIG9wdGlvbnMuZGF0YSA9IF9iYXNlLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG5cdCAgICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuXHQgICAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcblx0ICAgICAgfTtcblx0ICAgICAgaWYgKGZuLnBhcnRpYWxzKSB7XG5cdCAgICAgICAgb3B0aW9ucy5wYXJ0aWFscyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucy5wYXJ0aWFscywgZm4ucGFydGlhbHMpO1xuXHQgICAgICB9XG5cdCAgICB9KSgpO1xuXHQgIH1cblxuXHQgIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQgJiYgcGFydGlhbEJsb2NrKSB7XG5cdCAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuXHQgIH1cblxuXHQgIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcblx0ICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHQgICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG5cdCAgfVxuXHR9XG5cblx0ZnVuY3Rpb24gbm9vcCgpIHtcblx0ICByZXR1cm4gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG5cdCAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG5cdCAgICBkYXRhID0gZGF0YSA/IF9iYXNlLmNyZWF0ZUZyYW1lKGRhdGEpIDoge307XG5cdCAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuXHQgIH1cblx0ICByZXR1cm4gZGF0YTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcblx0ICBpZiAoZm4uZGVjb3JhdG9yKSB7XG5cdCAgICB2YXIgcHJvcHMgPSB7fTtcblx0ICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG5cdCAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuXHQgIH1cblx0ICByZXR1cm4gcHJvZztcblx0fVxuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCkuT2JqZWN0LnNlYWw7XG5cbi8qKiovIH0pLFxuLyogMjUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvLyAxOS4xLjIuMTcgT2JqZWN0LnNlYWwoTylcblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyNykoJ3NlYWwnLCBmdW5jdGlvbigkc2VhbCl7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpe1xuXHQgICAgcmV0dXJuICRzZWFsICYmIGlzT2JqZWN0KGl0KSA/ICRzZWFsKGl0KSA6IGl0O1xuXHQgIH07XG5cdH0pO1xuXG4vKioqLyB9KSxcbi8qIDI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG5cdCAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcblx0fTtcblxuLyoqKi8gfSksXG4vKiAyNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xuXHR2YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpXG5cdCAgLCBjb3JlICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMClcblx0ICAsIGZhaWxzICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuXHQgIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cblx0ICAgICwgZXhwID0ge307XG5cdCAgZXhwW0tFWV0gPSBleGVjKGZuKTtcblx0ICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZ2xvYmFsICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSlcblx0ICAsIGNvcmUgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMzApXG5cdCAgLCBjdHggICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKVxuXHQgICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cblx0dmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuXHQgIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG5cdCAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkdcblx0ICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuXHQgICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG5cdCAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcblx0ICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuXHQgICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuXHQgICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG5cdCAgICAsIGtleSwgb3duLCBvdXQ7XG5cdCAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG5cdCAgZm9yKGtleSBpbiBzb3VyY2Upe1xuXHQgICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG5cdCAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuXHQgICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuXHQgICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcblx0ICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG5cdCAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcblx0ICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG5cdCAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuXHQgICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcblx0ICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG5cdCAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuXHQgICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcblx0ICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcblx0ICAgICAgfTtcblx0ICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuXHQgICAgICByZXR1cm4gRjtcblx0ICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuXHQgICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuXHQgICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuXHQgIH1cblx0fTtcblx0Ly8gdHlwZSBiaXRtYXBcblx0JGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuXHQkZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG5cdCRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcblx0JGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG5cdCRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG5cdCRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5cdG1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuLyoqKi8gfSksXG4vKiAyOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5cdHZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuXHQgID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0aWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuLyoqKi8gfSksXG4vKiAzMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdHZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5cdGlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4vKioqLyB9KSxcbi8qIDMxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5cdHZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcblx0ICBhRnVuY3Rpb24oZm4pO1xuXHQgIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG5cdCAgc3dpdGNoKGxlbmd0aCl7XG5cdCAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcblx0ICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG5cdCAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuXHQgICAgfTtcblx0ICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuXHQgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcblx0ICAgIH07XG5cdCAgfVxuXHQgIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcblx0ICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuXHQgIH07XG5cdH07XG5cbi8qKiovIH0pLFxuLyogMzIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcblx0ICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHQgIHJldHVybiBpdDtcblx0fTtcblxuLyoqKi8gfSksXG4vKiAzMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG5cdCAgdHJ5IHtcblx0ICAgIHJldHVybiAhIWV4ZWMoKTtcblx0ICB9IGNhdGNoKGUpe1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHR9O1xuXG4vKioqLyB9KSxcbi8qIDM0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgey8qIGdsb2JhbCB3aW5kb3cgKi9cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMpIHtcblx0ICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG5cdCAgICAgICRIYW5kbGViYXJzID0gcm9vdC5IYW5kbGViYXJzO1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgSGFuZGxlYmFycy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgaWYgKHJvb3QuSGFuZGxlYmFycyA9PT0gSGFuZGxlYmFycykge1xuXHQgICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcblx0ICAgIH1cblx0ICAgIHJldHVybiBIYW5kbGViYXJzO1xuXHQgIH07XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSksXG4vKiAzNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXHR2YXIgQVNUID0ge1xuXHQgIC8vIFB1YmxpYyBBUEkgdXNlZCB0byBldmFsdWF0ZSBkZXJpdmVkIGF0dHJpYnV0ZXMgcmVnYXJkaW5nIEFTVCBub2Rlc1xuXHQgIGhlbHBlcnM6IHtcblx0ICAgIC8vIGEgbXVzdGFjaGUgaXMgZGVmaW5pdGVseSBhIGhlbHBlciBpZjpcblx0ICAgIC8vICogaXQgaXMgYW4gZWxpZ2libGUgaGVscGVyLCBhbmRcblx0ICAgIC8vICogaXQgaGFzIGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIgb3IgaGFzaCBzZWdtZW50XG5cdCAgICBoZWxwZXJFeHByZXNzaW9uOiBmdW5jdGlvbiBoZWxwZXJFeHByZXNzaW9uKG5vZGUpIHtcblx0ICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nIHx8IChub2RlLnR5cGUgPT09ICdNdXN0YWNoZVN0YXRlbWVudCcgfHwgbm9kZS50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSAmJiAhIShub2RlLnBhcmFtcyAmJiBub2RlLnBhcmFtcy5sZW5ndGggfHwgbm9kZS5oYXNoKTtcblx0ICAgIH0sXG5cblx0ICAgIHNjb3BlZElkOiBmdW5jdGlvbiBzY29wZWRJZChwYXRoKSB7XG5cdCAgICAgIHJldHVybiAoL15cXC58dGhpc1xcYi8udGVzdChwYXRoLm9yaWdpbmFsKVxuXHQgICAgICApO1xuXHQgICAgfSxcblxuXHQgICAgLy8gYW4gSUQgaXMgc2ltcGxlIGlmIGl0IG9ubHkgaGFzIG9uZSBwYXJ0LCBhbmQgdGhhdCBwYXJ0IGlzIG5vdFxuXHQgICAgLy8gYC4uYCBvciBgdGhpc2AuXG5cdCAgICBzaW1wbGVJZDogZnVuY3Rpb24gc2ltcGxlSWQocGF0aCkge1xuXHQgICAgICByZXR1cm4gcGF0aC5wYXJ0cy5sZW5ndGggPT09IDEgJiYgIUFTVC5oZWxwZXJzLnNjb3BlZElkKHBhdGgpICYmICFwYXRoLmRlcHRoO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHQvLyBNdXN0IGJlIGV4cG9ydGVkIGFzIGFuIG9iamVjdCByYXRoZXIgdGhhbiB0aGUgcm9vdCBvZiB0aGUgbW9kdWxlIGFzIHRoZSBqaXNvbiBsZXhlclxuXHQvLyBtdXN0IG1vZGlmeSB0aGUgb2JqZWN0IHRvIG9wZXJhdGUgcHJvcGVybHkuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFTVDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMzYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuXHR2YXIgX3BhcnNlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xuXG5cdHZhciBfcGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlcik7XG5cblx0dmFyIF93aGl0ZXNwYWNlQ29udHJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpO1xuXG5cdHZhciBfd2hpdGVzcGFjZUNvbnRyb2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2hpdGVzcGFjZUNvbnRyb2wpO1xuXG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xuXG5cdHZhciBIZWxwZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcnMpO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdGV4cG9ydHMucGFyc2VyID0gX3BhcnNlcjJbJ2RlZmF1bHQnXTtcblxuXHR2YXIgeXkgPSB7fTtcblx0X3V0aWxzLmV4dGVuZCh5eSwgSGVscGVycyk7XG5cblx0ZnVuY3Rpb24gcGFyc2UoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAvLyBKdXN0IHJldHVybiBpZiBhbiBhbHJlYWR5LWNvbXBpbGVkIEFTVCB3YXMgcGFzc2VkIGluLlxuXHQgIGlmIChpbnB1dC50eXBlID09PSAnUHJvZ3JhbScpIHtcblx0ICAgIHJldHVybiBpbnB1dDtcblx0ICB9XG5cblx0ICBfcGFyc2VyMlsnZGVmYXVsdCddLnl5ID0geXk7XG5cblx0ICAvLyBBbHRlcmluZyB0aGUgc2hhcmVkIG9iamVjdCBoZXJlLCBidXQgdGhpcyBpcyBvayBhcyBwYXJzZXIgaXMgYSBzeW5jIG9wZXJhdGlvblxuXHQgIHl5LmxvY0luZm8gPSBmdW5jdGlvbiAobG9jSW5mbykge1xuXHQgICAgcmV0dXJuIG5ldyB5eS5Tb3VyY2VMb2NhdGlvbihvcHRpb25zICYmIG9wdGlvbnMuc3JjTmFtZSwgbG9jSW5mbyk7XG5cdCAgfTtcblxuXHQgIHZhciBzdHJpcCA9IG5ldyBfd2hpdGVzcGFjZUNvbnRyb2wyWydkZWZhdWx0J10ob3B0aW9ucyk7XG5cdCAgcmV0dXJuIHN0cmlwLmFjY2VwdChfcGFyc2VyMlsnZGVmYXVsdCddLnBhcnNlKGlucHV0KSk7XG5cdH1cblxuLyoqKi8gfSksXG4vKiAzNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIEZpbGUgaWdub3JlZCBpbiBjb3ZlcmFnZSB0ZXN0cyB2aWEgc2V0dGluZyBpbiAuaXN0YW5idWwueW1sXG5cdC8qIEppc29uIGdlbmVyYXRlZCBwYXJzZXIgKi9cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0dmFyIGhhbmRsZWJhcnMgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIHBhcnNlciA9IHsgdHJhY2U6IGZ1bmN0aW9uIHRyYWNlKCkge30sXG5cdCAgICAgICAgeXk6IHt9LFxuXHQgICAgICAgIHN5bWJvbHNfOiB7IFwiZXJyb3JcIjogMiwgXCJyb290XCI6IDMsIFwicHJvZ3JhbVwiOiA0LCBcIkVPRlwiOiA1LCBcInByb2dyYW1fcmVwZXRpdGlvbjBcIjogNiwgXCJzdGF0ZW1lbnRcIjogNywgXCJtdXN0YWNoZVwiOiA4LCBcImJsb2NrXCI6IDksIFwicmF3QmxvY2tcIjogMTAsIFwicGFydGlhbFwiOiAxMSwgXCJwYXJ0aWFsQmxvY2tcIjogMTIsIFwiY29udGVudFwiOiAxMywgXCJDT01NRU5UXCI6IDE0LCBcIkNPTlRFTlRcIjogMTUsIFwib3BlblJhd0Jsb2NrXCI6IDE2LCBcInJhd0Jsb2NrX3JlcGV0aXRpb25fcGx1czBcIjogMTcsIFwiRU5EX1JBV19CTE9DS1wiOiAxOCwgXCJPUEVOX1JBV19CTE9DS1wiOiAxOSwgXCJoZWxwZXJOYW1lXCI6IDIwLCBcIm9wZW5SYXdCbG9ja19yZXBldGl0aW9uMFwiOiAyMSwgXCJvcGVuUmF3QmxvY2tfb3B0aW9uMFwiOiAyMiwgXCJDTE9TRV9SQVdfQkxPQ0tcIjogMjMsIFwib3BlbkJsb2NrXCI6IDI0LCBcImJsb2NrX29wdGlvbjBcIjogMjUsIFwiY2xvc2VCbG9ja1wiOiAyNiwgXCJvcGVuSW52ZXJzZVwiOiAyNywgXCJibG9ja19vcHRpb24xXCI6IDI4LCBcIk9QRU5fQkxPQ0tcIjogMjksIFwib3BlbkJsb2NrX3JlcGV0aXRpb24wXCI6IDMwLCBcIm9wZW5CbG9ja19vcHRpb24wXCI6IDMxLCBcIm9wZW5CbG9ja19vcHRpb24xXCI6IDMyLCBcIkNMT1NFXCI6IDMzLCBcIk9QRU5fSU5WRVJTRVwiOiAzNCwgXCJvcGVuSW52ZXJzZV9yZXBldGl0aW9uMFwiOiAzNSwgXCJvcGVuSW52ZXJzZV9vcHRpb24wXCI6IDM2LCBcIm9wZW5JbnZlcnNlX29wdGlvbjFcIjogMzcsIFwib3BlbkludmVyc2VDaGFpblwiOiAzOCwgXCJPUEVOX0lOVkVSU0VfQ0hBSU5cIjogMzksIFwib3BlbkludmVyc2VDaGFpbl9yZXBldGl0aW9uMFwiOiA0MCwgXCJvcGVuSW52ZXJzZUNoYWluX29wdGlvbjBcIjogNDEsIFwib3BlbkludmVyc2VDaGFpbl9vcHRpb24xXCI6IDQyLCBcImludmVyc2VBbmRQcm9ncmFtXCI6IDQzLCBcIklOVkVSU0VcIjogNDQsIFwiaW52ZXJzZUNoYWluXCI6IDQ1LCBcImludmVyc2VDaGFpbl9vcHRpb24wXCI6IDQ2LCBcIk9QRU5fRU5EQkxPQ0tcIjogNDcsIFwiT1BFTlwiOiA0OCwgXCJtdXN0YWNoZV9yZXBldGl0aW9uMFwiOiA0OSwgXCJtdXN0YWNoZV9vcHRpb24wXCI6IDUwLCBcIk9QRU5fVU5FU0NBUEVEXCI6IDUxLCBcIm11c3RhY2hlX3JlcGV0aXRpb24xXCI6IDUyLCBcIm11c3RhY2hlX29wdGlvbjFcIjogNTMsIFwiQ0xPU0VfVU5FU0NBUEVEXCI6IDU0LCBcIk9QRU5fUEFSVElBTFwiOiA1NSwgXCJwYXJ0aWFsTmFtZVwiOiA1NiwgXCJwYXJ0aWFsX3JlcGV0aXRpb24wXCI6IDU3LCBcInBhcnRpYWxfb3B0aW9uMFwiOiA1OCwgXCJvcGVuUGFydGlhbEJsb2NrXCI6IDU5LCBcIk9QRU5fUEFSVElBTF9CTE9DS1wiOiA2MCwgXCJvcGVuUGFydGlhbEJsb2NrX3JlcGV0aXRpb24wXCI6IDYxLCBcIm9wZW5QYXJ0aWFsQmxvY2tfb3B0aW9uMFwiOiA2MiwgXCJwYXJhbVwiOiA2MywgXCJzZXhwclwiOiA2NCwgXCJPUEVOX1NFWFBSXCI6IDY1LCBcInNleHByX3JlcGV0aXRpb24wXCI6IDY2LCBcInNleHByX29wdGlvbjBcIjogNjcsIFwiQ0xPU0VfU0VYUFJcIjogNjgsIFwiaGFzaFwiOiA2OSwgXCJoYXNoX3JlcGV0aXRpb25fcGx1czBcIjogNzAsIFwiaGFzaFNlZ21lbnRcIjogNzEsIFwiSURcIjogNzIsIFwiRVFVQUxTXCI6IDczLCBcImJsb2NrUGFyYW1zXCI6IDc0LCBcIk9QRU5fQkxPQ0tfUEFSQU1TXCI6IDc1LCBcImJsb2NrUGFyYW1zX3JlcGV0aXRpb25fcGx1czBcIjogNzYsIFwiQ0xPU0VfQkxPQ0tfUEFSQU1TXCI6IDc3LCBcInBhdGhcIjogNzgsIFwiZGF0YU5hbWVcIjogNzksIFwiU1RSSU5HXCI6IDgwLCBcIk5VTUJFUlwiOiA4MSwgXCJCT09MRUFOXCI6IDgyLCBcIlVOREVGSU5FRFwiOiA4MywgXCJOVUxMXCI6IDg0LCBcIkRBVEFcIjogODUsIFwicGF0aFNlZ21lbnRzXCI6IDg2LCBcIlNFUFwiOiA4NywgXCIkYWNjZXB0XCI6IDAsIFwiJGVuZFwiOiAxIH0sXG5cdCAgICAgICAgdGVybWluYWxzXzogeyAyOiBcImVycm9yXCIsIDU6IFwiRU9GXCIsIDE0OiBcIkNPTU1FTlRcIiwgMTU6IFwiQ09OVEVOVFwiLCAxODogXCJFTkRfUkFXX0JMT0NLXCIsIDE5OiBcIk9QRU5fUkFXX0JMT0NLXCIsIDIzOiBcIkNMT1NFX1JBV19CTE9DS1wiLCAyOTogXCJPUEVOX0JMT0NLXCIsIDMzOiBcIkNMT1NFXCIsIDM0OiBcIk9QRU5fSU5WRVJTRVwiLCAzOTogXCJPUEVOX0lOVkVSU0VfQ0hBSU5cIiwgNDQ6IFwiSU5WRVJTRVwiLCA0NzogXCJPUEVOX0VOREJMT0NLXCIsIDQ4OiBcIk9QRU5cIiwgNTE6IFwiT1BFTl9VTkVTQ0FQRURcIiwgNTQ6IFwiQ0xPU0VfVU5FU0NBUEVEXCIsIDU1OiBcIk9QRU5fUEFSVElBTFwiLCA2MDogXCJPUEVOX1BBUlRJQUxfQkxPQ0tcIiwgNjU6IFwiT1BFTl9TRVhQUlwiLCA2ODogXCJDTE9TRV9TRVhQUlwiLCA3MjogXCJJRFwiLCA3MzogXCJFUVVBTFNcIiwgNzU6IFwiT1BFTl9CTE9DS19QQVJBTVNcIiwgNzc6IFwiQ0xPU0VfQkxPQ0tfUEFSQU1TXCIsIDgwOiBcIlNUUklOR1wiLCA4MTogXCJOVU1CRVJcIiwgODI6IFwiQk9PTEVBTlwiLCA4MzogXCJVTkRFRklORURcIiwgODQ6IFwiTlVMTFwiLCA4NTogXCJEQVRBXCIsIDg3OiBcIlNFUFwiIH0sXG5cdCAgICAgICAgcHJvZHVjdGlvbnNfOiBbMCwgWzMsIDJdLCBbNCwgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzcsIDFdLCBbNywgMV0sIFs3LCAxXSwgWzEzLCAxXSwgWzEwLCAzXSwgWzE2LCA1XSwgWzksIDRdLCBbOSwgNF0sIFsyNCwgNl0sIFsyNywgNl0sIFszOCwgNl0sIFs0MywgMl0sIFs0NSwgM10sIFs0NSwgMV0sIFsyNiwgM10sIFs4LCA1XSwgWzgsIDVdLCBbMTEsIDVdLCBbMTIsIDNdLCBbNTksIDVdLCBbNjMsIDFdLCBbNjMsIDFdLCBbNjQsIDVdLCBbNjksIDFdLCBbNzEsIDNdLCBbNzQsIDNdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbMjAsIDFdLCBbNTYsIDFdLCBbNTYsIDFdLCBbNzksIDJdLCBbNzgsIDFdLCBbODYsIDNdLCBbODYsIDFdLCBbNiwgMF0sIFs2LCAyXSwgWzE3LCAxXSwgWzE3LCAyXSwgWzIxLCAwXSwgWzIxLCAyXSwgWzIyLCAwXSwgWzIyLCAxXSwgWzI1LCAwXSwgWzI1LCAxXSwgWzI4LCAwXSwgWzI4LCAxXSwgWzMwLCAwXSwgWzMwLCAyXSwgWzMxLCAwXSwgWzMxLCAxXSwgWzMyLCAwXSwgWzMyLCAxXSwgWzM1LCAwXSwgWzM1LCAyXSwgWzM2LCAwXSwgWzM2LCAxXSwgWzM3LCAwXSwgWzM3LCAxXSwgWzQwLCAwXSwgWzQwLCAyXSwgWzQxLCAwXSwgWzQxLCAxXSwgWzQyLCAwXSwgWzQyLCAxXSwgWzQ2LCAwXSwgWzQ2LCAxXSwgWzQ5LCAwXSwgWzQ5LCAyXSwgWzUwLCAwXSwgWzUwLCAxXSwgWzUyLCAwXSwgWzUyLCAyXSwgWzUzLCAwXSwgWzUzLCAxXSwgWzU3LCAwXSwgWzU3LCAyXSwgWzU4LCAwXSwgWzU4LCAxXSwgWzYxLCAwXSwgWzYxLCAyXSwgWzYyLCAwXSwgWzYyLCAxXSwgWzY2LCAwXSwgWzY2LCAyXSwgWzY3LCAwXSwgWzY3LCAxXSwgWzcwLCAxXSwgWzcwLCAyXSwgWzc2LCAxXSwgWzc2LCAyXV0sXG5cdCAgICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgeXksIHl5c3RhdGUsICQkLCBfJFxuXHQgICAgICAgIC8qKi8pIHtcblxuXHQgICAgICAgICAgICB2YXIgJDAgPSAkJC5sZW5ndGggLSAxO1xuXHQgICAgICAgICAgICBzd2l0Y2ggKHl5c3RhdGUpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCRbJDAgLSAxXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUHJvZ3JhbSgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0NvbW1lbnRTdGF0ZW1lbnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeXkuc3RyaXBDb21tZW50KCQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwXSwgJCRbJDBdKSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdDb250ZW50U3RhdGVtZW50Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWw6ICQkWyQwXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICQkWyQwXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUmF3QmxvY2soJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBwYXRoOiAkJFskMCAtIDNdLCBwYXJhbXM6ICQkWyQwIC0gMl0sIGhhc2g6ICQkWyQwIC0gMV0gfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgZmFsc2UsIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlQmxvY2soJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDBdLCB0cnVlLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBvcGVuOiAkJFskMCAtIDVdLCBwYXRoOiAkJFskMCAtIDRdLCBwYXJhbXM6ICQkWyQwIC0gM10sIGhhc2g6ICQkWyQwIC0gMl0sIGJsb2NrUGFyYW1zOiAkJFskMCAtIDFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDVdLCAkJFskMF0pIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSA0XSwgcGFyYW1zOiAkJFskMCAtIDNdLCBoYXNoOiAkJFskMCAtIDJdLCBibG9ja1BhcmFtczogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA1XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gNF0sIHBhcmFtczogJCRbJDAgLSAzXSwgaGFzaDogJCRbJDAgLSAyXSwgYmxvY2tQYXJhbXM6ICQkWyQwIC0gMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNV0sICQkWyQwXSkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMCAtIDFdLCAkJFskMCAtIDFdKSwgcHJvZ3JhbTogJCRbJDBdIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE5OlxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBpbnZlcnNlID0geXkucHJlcGFyZUJsb2NrKCQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwXSwgJCRbJDBdLCBmYWxzZSwgdGhpcy5fJCksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0gPSB5eS5wcmVwYXJlUHJvZ3JhbShbaW52ZXJzZV0sICQkWyQwIC0gMV0ubG9jKTtcblx0ICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLmNoYWluZWQgPSB0cnVlO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyBzdHJpcDogJCRbJDAgLSAyXS5zdHJpcCwgcHJvZ3JhbTogcHJvZ3JhbSwgY2hhaW46IHRydWUgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgcGF0aDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSAyXSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlTXVzdGFjaGUoJCRbJDAgLSAzXSwgJCRbJDAgLSAyXSwgJCRbJDAgLSAxXSwgJCRbJDAgLSA0XSwgeXkuc3RyaXBGbGFncygkJFskMCAtIDRdLCAkJFskMF0pLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjM6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZU11c3RhY2hlKCQkWyQwIC0gM10sICQkWyQwIC0gMl0sICQkWyQwIC0gMV0sICQkWyQwIC0gNF0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSwgdGhpcy5fJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BhcnRpYWxTdGF0ZW1lbnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAkJFskMCAtIDNdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6ICQkWyQwIC0gMl0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6ICQkWyQwIC0gMV0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGluZGVudDogJycsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwIC0gNF0sICQkWyQwXSksXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geXkucHJlcGFyZVBhcnRpYWxCbG9jaygkJFskMCAtIDJdLCAkJFskMCAtIDFdLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHBhdGg6ICQkWyQwIC0gM10sIHBhcmFtczogJCRbJDAgLSAyXSwgaGFzaDogJCRbJDAgLSAxXSwgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAgLSA0XSwgJCRbJDBdKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjk6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU3ViRXhwcmVzc2lvbicsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICQkWyQwIC0gM10sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogJCRbJDAgLSAyXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogJCRbJDAgLSAxXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdIYXNoJywgcGFpcnM6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHsgdHlwZTogJ0hhc2hQYWlyJywga2V5OiB5eS5pZCgkJFskMCAtIDJdKSwgdmFsdWU6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IHl5LmlkKCQkWyQwIC0gMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSAkJFskMF07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM0OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzU6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnU3RyaW5nTGl0ZXJhbCcsIHZhbHVlOiAkJFskMF0sIG9yaWdpbmFsOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdOdW1iZXJMaXRlcmFsJywgdmFsdWU6IE51bWJlcigkJFskMF0pLCBvcmlnaW5hbDogTnVtYmVyKCQkWyQwXSksIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdCb29sZWFuTGl0ZXJhbCcsIHZhbHVlOiAkJFskMF0gPT09ICd0cnVlJywgb3JpZ2luYWw6ICQkWyQwXSA9PT0gJ3RydWUnLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCkgfTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0geyB0eXBlOiAnVW5kZWZpbmVkTGl0ZXJhbCcsIG9yaWdpbmFsOiB1bmRlZmluZWQsIHZhbHVlOiB1bmRlZmluZWQsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKSB9O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzOTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB7IHR5cGU6ICdOdWxsTGl0ZXJhbCcsIG9yaWdpbmFsOiBudWxsLCB2YWx1ZTogbnVsbCwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpIH07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9ICQkWyQwXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDE6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gJCRbJDBdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUGF0aCh0cnVlLCAkJFskMF0sIHRoaXMuXyQpO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Mzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSB5eS5wcmVwYXJlUGF0aChmYWxzZSwgJCRbJDBdLCB0aGlzLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAyXS5wdXNoKHsgcGFydDogeXkuaWQoJCRbJDBdKSwgb3JpZ2luYWw6ICQkWyQwXSwgc2VwYXJhdG9yOiAkJFskMCAtIDFdIH0pO3RoaXMuJCA9ICQkWyQwIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFt7IHBhcnQ6IHl5LmlkKCQkWyQwXSksIG9yaWdpbmFsOiAkJFskMF0gfV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ2OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0Nzpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDg6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gWyQkWyQwXV07XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ5OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNTE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDU4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDY1OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3MDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNzE6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc4OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA3OTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODI6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDgzOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4Njpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgODc6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDkwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5MTpcblx0ICAgICAgICAgICAgICAgICAgICAkJFskMCAtIDFdLnB1c2goJCRbJDBdKTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy4kID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDk1OlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA5ODpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTk6XG5cdCAgICAgICAgICAgICAgICAgICAgJCRbJDAgLSAxXS5wdXNoKCQkWyQwXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwMDpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiQgPSBbJCRbJDBdXTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTAxOlxuXHQgICAgICAgICAgICAgICAgICAgICQkWyQwIC0gMV0ucHVzaCgkJFskMF0pO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICB0YWJsZTogW3sgMzogMSwgNDogMiwgNTogWzIsIDQ2XSwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0ODogWzIsIDQ2XSwgNTE6IFsyLCA0Nl0sIDU1OiBbMiwgNDZdLCA2MDogWzIsIDQ2XSB9LCB7IDE6IFszXSB9LCB7IDU6IFsxLCA0XSB9LCB7IDU6IFsyLCAyXSwgNzogNSwgODogNiwgOTogNywgMTA6IDgsIDExOiA5LCAxMjogMTAsIDEzOiAxMSwgMTQ6IFsxLCAxMl0sIDE1OiBbMSwgMjBdLCAxNjogMTcsIDE5OiBbMSwgMjNdLCAyNDogMTUsIDI3OiAxNiwgMjk6IFsxLCAyMV0sIDM0OiBbMSwgMjJdLCAzOTogWzIsIDJdLCA0NDogWzIsIDJdLCA0NzogWzIsIDJdLCA0ODogWzEsIDEzXSwgNTE6IFsxLCAxNF0sIDU1OiBbMSwgMThdLCA1OTogMTksIDYwOiBbMSwgMjRdIH0sIHsgMTogWzIsIDFdIH0sIHsgNTogWzIsIDQ3XSwgMTQ6IFsyLCA0N10sIDE1OiBbMiwgNDddLCAxOTogWzIsIDQ3XSwgMjk6IFsyLCA0N10sIDM0OiBbMiwgNDddLCAzOTogWzIsIDQ3XSwgNDQ6IFsyLCA0N10sIDQ3OiBbMiwgNDddLCA0ODogWzIsIDQ3XSwgNTE6IFsyLCA0N10sIDU1OiBbMiwgNDddLCA2MDogWzIsIDQ3XSB9LCB7IDU6IFsyLCAzXSwgMTQ6IFsyLCAzXSwgMTU6IFsyLCAzXSwgMTk6IFsyLCAzXSwgMjk6IFsyLCAzXSwgMzQ6IFsyLCAzXSwgMzk6IFsyLCAzXSwgNDQ6IFsyLCAzXSwgNDc6IFsyLCAzXSwgNDg6IFsyLCAzXSwgNTE6IFsyLCAzXSwgNTU6IFsyLCAzXSwgNjA6IFsyLCAzXSB9LCB7IDU6IFsyLCA0XSwgMTQ6IFsyLCA0XSwgMTU6IFsyLCA0XSwgMTk6IFsyLCA0XSwgMjk6IFsyLCA0XSwgMzQ6IFsyLCA0XSwgMzk6IFsyLCA0XSwgNDQ6IFsyLCA0XSwgNDc6IFsyLCA0XSwgNDg6IFsyLCA0XSwgNTE6IFsyLCA0XSwgNTU6IFsyLCA0XSwgNjA6IFsyLCA0XSB9LCB7IDU6IFsyLCA1XSwgMTQ6IFsyLCA1XSwgMTU6IFsyLCA1XSwgMTk6IFsyLCA1XSwgMjk6IFsyLCA1XSwgMzQ6IFsyLCA1XSwgMzk6IFsyLCA1XSwgNDQ6IFsyLCA1XSwgNDc6IFsyLCA1XSwgNDg6IFsyLCA1XSwgNTE6IFsyLCA1XSwgNTU6IFsyLCA1XSwgNjA6IFsyLCA1XSB9LCB7IDU6IFsyLCA2XSwgMTQ6IFsyLCA2XSwgMTU6IFsyLCA2XSwgMTk6IFsyLCA2XSwgMjk6IFsyLCA2XSwgMzQ6IFsyLCA2XSwgMzk6IFsyLCA2XSwgNDQ6IFsyLCA2XSwgNDc6IFsyLCA2XSwgNDg6IFsyLCA2XSwgNTE6IFsyLCA2XSwgNTU6IFsyLCA2XSwgNjA6IFsyLCA2XSB9LCB7IDU6IFsyLCA3XSwgMTQ6IFsyLCA3XSwgMTU6IFsyLCA3XSwgMTk6IFsyLCA3XSwgMjk6IFsyLCA3XSwgMzQ6IFsyLCA3XSwgMzk6IFsyLCA3XSwgNDQ6IFsyLCA3XSwgNDc6IFsyLCA3XSwgNDg6IFsyLCA3XSwgNTE6IFsyLCA3XSwgNTU6IFsyLCA3XSwgNjA6IFsyLCA3XSB9LCB7IDU6IFsyLCA4XSwgMTQ6IFsyLCA4XSwgMTU6IFsyLCA4XSwgMTk6IFsyLCA4XSwgMjk6IFsyLCA4XSwgMzQ6IFsyLCA4XSwgMzk6IFsyLCA4XSwgNDQ6IFsyLCA4XSwgNDc6IFsyLCA4XSwgNDg6IFsyLCA4XSwgNTE6IFsyLCA4XSwgNTU6IFsyLCA4XSwgNjA6IFsyLCA4XSB9LCB7IDU6IFsyLCA5XSwgMTQ6IFsyLCA5XSwgMTU6IFsyLCA5XSwgMTk6IFsyLCA5XSwgMjk6IFsyLCA5XSwgMzQ6IFsyLCA5XSwgMzk6IFsyLCA5XSwgNDQ6IFsyLCA5XSwgNDc6IFsyLCA5XSwgNDg6IFsyLCA5XSwgNTE6IFsyLCA5XSwgNTU6IFsyLCA5XSwgNjA6IFsyLCA5XSB9LCB7IDIwOiAyNSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogMzYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogMzcsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgMzk6IFsyLCA0Nl0sIDQ0OiBbMiwgNDZdLCA0NzogWzIsIDQ2XSwgNDg6IFsyLCA0Nl0sIDUxOiBbMiwgNDZdLCA1NTogWzIsIDQ2XSwgNjA6IFsyLCA0Nl0gfSwgeyA0OiAzOCwgNjogMywgMTQ6IFsyLCA0Nl0sIDE1OiBbMiwgNDZdLCAxOTogWzIsIDQ2XSwgMjk6IFsyLCA0Nl0sIDM0OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMTM6IDQwLCAxNTogWzEsIDIwXSwgMTc6IDM5IH0sIHsgMjA6IDQyLCA1NjogNDEsIDY0OiA0MywgNjU6IFsxLCA0NF0sIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogNDUsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNTogWzIsIDEwXSwgMTQ6IFsyLCAxMF0sIDE1OiBbMiwgMTBdLCAxODogWzIsIDEwXSwgMTk6IFsyLCAxMF0sIDI5OiBbMiwgMTBdLCAzNDogWzIsIDEwXSwgMzk6IFsyLCAxMF0sIDQ0OiBbMiwgMTBdLCA0NzogWzIsIDEwXSwgNDg6IFsyLCAxMF0sIDUxOiBbMiwgMTBdLCA1NTogWzIsIDEwXSwgNjA6IFsyLCAxMF0gfSwgeyAyMDogNDYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDQ3LCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA0OCwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNDIsIDU2OiA0OSwgNjQ6IDQzLCA2NTogWzEsIDQ0XSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzIsIDc4XSwgNDk6IDUwLCA2NTogWzIsIDc4XSwgNzI6IFsyLCA3OF0sIDgwOiBbMiwgNzhdLCA4MTogWzIsIDc4XSwgODI6IFsyLCA3OF0sIDgzOiBbMiwgNzhdLCA4NDogWzIsIDc4XSwgODU6IFsyLCA3OF0gfSwgeyAyMzogWzIsIDMzXSwgMzM6IFsyLCAzM10sIDU0OiBbMiwgMzNdLCA2NTogWzIsIDMzXSwgNjg6IFsyLCAzM10sIDcyOiBbMiwgMzNdLCA3NTogWzIsIDMzXSwgODA6IFsyLCAzM10sIDgxOiBbMiwgMzNdLCA4MjogWzIsIDMzXSwgODM6IFsyLCAzM10sIDg0OiBbMiwgMzNdLCA4NTogWzIsIDMzXSB9LCB7IDIzOiBbMiwgMzRdLCAzMzogWzIsIDM0XSwgNTQ6IFsyLCAzNF0sIDY1OiBbMiwgMzRdLCA2ODogWzIsIDM0XSwgNzI6IFsyLCAzNF0sIDc1OiBbMiwgMzRdLCA4MDogWzIsIDM0XSwgODE6IFsyLCAzNF0sIDgyOiBbMiwgMzRdLCA4MzogWzIsIDM0XSwgODQ6IFsyLCAzNF0sIDg1OiBbMiwgMzRdIH0sIHsgMjM6IFsyLCAzNV0sIDMzOiBbMiwgMzVdLCA1NDogWzIsIDM1XSwgNjU6IFsyLCAzNV0sIDY4OiBbMiwgMzVdLCA3MjogWzIsIDM1XSwgNzU6IFsyLCAzNV0sIDgwOiBbMiwgMzVdLCA4MTogWzIsIDM1XSwgODI6IFsyLCAzNV0sIDgzOiBbMiwgMzVdLCA4NDogWzIsIDM1XSwgODU6IFsyLCAzNV0gfSwgeyAyMzogWzIsIDM2XSwgMzM6IFsyLCAzNl0sIDU0OiBbMiwgMzZdLCA2NTogWzIsIDM2XSwgNjg6IFsyLCAzNl0sIDcyOiBbMiwgMzZdLCA3NTogWzIsIDM2XSwgODA6IFsyLCAzNl0sIDgxOiBbMiwgMzZdLCA4MjogWzIsIDM2XSwgODM6IFsyLCAzNl0sIDg0OiBbMiwgMzZdLCA4NTogWzIsIDM2XSB9LCB7IDIzOiBbMiwgMzddLCAzMzogWzIsIDM3XSwgNTQ6IFsyLCAzN10sIDY1OiBbMiwgMzddLCA2ODogWzIsIDM3XSwgNzI6IFsyLCAzN10sIDc1OiBbMiwgMzddLCA4MDogWzIsIDM3XSwgODE6IFsyLCAzN10sIDgyOiBbMiwgMzddLCA4MzogWzIsIDM3XSwgODQ6IFsyLCAzN10sIDg1OiBbMiwgMzddIH0sIHsgMjM6IFsyLCAzOF0sIDMzOiBbMiwgMzhdLCA1NDogWzIsIDM4XSwgNjU6IFsyLCAzOF0sIDY4OiBbMiwgMzhdLCA3MjogWzIsIDM4XSwgNzU6IFsyLCAzOF0sIDgwOiBbMiwgMzhdLCA4MTogWzIsIDM4XSwgODI6IFsyLCAzOF0sIDgzOiBbMiwgMzhdLCA4NDogWzIsIDM4XSwgODU6IFsyLCAzOF0gfSwgeyAyMzogWzIsIDM5XSwgMzM6IFsyLCAzOV0sIDU0OiBbMiwgMzldLCA2NTogWzIsIDM5XSwgNjg6IFsyLCAzOV0sIDcyOiBbMiwgMzldLCA3NTogWzIsIDM5XSwgODA6IFsyLCAzOV0sIDgxOiBbMiwgMzldLCA4MjogWzIsIDM5XSwgODM6IFsyLCAzOV0sIDg0OiBbMiwgMzldLCA4NTogWzIsIDM5XSB9LCB7IDIzOiBbMiwgNDNdLCAzMzogWzIsIDQzXSwgNTQ6IFsyLCA0M10sIDY1OiBbMiwgNDNdLCA2ODogWzIsIDQzXSwgNzI6IFsyLCA0M10sIDc1OiBbMiwgNDNdLCA4MDogWzIsIDQzXSwgODE6IFsyLCA0M10sIDgyOiBbMiwgNDNdLCA4MzogWzIsIDQzXSwgODQ6IFsyLCA0M10sIDg1OiBbMiwgNDNdLCA4NzogWzEsIDUxXSB9LCB7IDcyOiBbMSwgMzVdLCA4NjogNTIgfSwgeyAyMzogWzIsIDQ1XSwgMzM6IFsyLCA0NV0sIDU0OiBbMiwgNDVdLCA2NTogWzIsIDQ1XSwgNjg6IFsyLCA0NV0sIDcyOiBbMiwgNDVdLCA3NTogWzIsIDQ1XSwgODA6IFsyLCA0NV0sIDgxOiBbMiwgNDVdLCA4MjogWzIsIDQ1XSwgODM6IFsyLCA0NV0sIDg0OiBbMiwgNDVdLCA4NTogWzIsIDQ1XSwgODc6IFsyLCA0NV0gfSwgeyA1MjogNTMsIDU0OiBbMiwgODJdLCA2NTogWzIsIDgyXSwgNzI6IFsyLCA4Ml0sIDgwOiBbMiwgODJdLCA4MTogWzIsIDgyXSwgODI6IFsyLCA4Ml0sIDgzOiBbMiwgODJdLCA4NDogWzIsIDgyXSwgODU6IFsyLCA4Ml0gfSwgeyAyNTogNTQsIDM4OiA1NiwgMzk6IFsxLCA1OF0sIDQzOiA1NywgNDQ6IFsxLCA1OV0sIDQ1OiA1NSwgNDc6IFsyLCA1NF0gfSwgeyAyODogNjAsIDQzOiA2MSwgNDQ6IFsxLCA1OV0sIDQ3OiBbMiwgNTZdIH0sIHsgMTM6IDYzLCAxNTogWzEsIDIwXSwgMTg6IFsxLCA2Ml0gfSwgeyAxNTogWzIsIDQ4XSwgMTg6IFsyLCA0OF0gfSwgeyAzMzogWzIsIDg2XSwgNTc6IDY0LCA2NTogWzIsIDg2XSwgNzI6IFsyLCA4Nl0sIDgwOiBbMiwgODZdLCA4MTogWzIsIDg2XSwgODI6IFsyLCA4Nl0sIDgzOiBbMiwgODZdLCA4NDogWzIsIDg2XSwgODU6IFsyLCA4Nl0gfSwgeyAzMzogWzIsIDQwXSwgNjU6IFsyLCA0MF0sIDcyOiBbMiwgNDBdLCA4MDogWzIsIDQwXSwgODE6IFsyLCA0MF0sIDgyOiBbMiwgNDBdLCA4MzogWzIsIDQwXSwgODQ6IFsyLCA0MF0sIDg1OiBbMiwgNDBdIH0sIHsgMzM6IFsyLCA0MV0sIDY1OiBbMiwgNDFdLCA3MjogWzIsIDQxXSwgODA6IFsyLCA0MV0sIDgxOiBbMiwgNDFdLCA4MjogWzIsIDQxXSwgODM6IFsyLCA0MV0sIDg0OiBbMiwgNDFdLCA4NTogWzIsIDQxXSB9LCB7IDIwOiA2NSwgNzI6IFsxLCAzNV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyNjogNjYsIDQ3OiBbMSwgNjddIH0sIHsgMzA6IDY4LCAzMzogWzIsIDU4XSwgNjU6IFsyLCA1OF0sIDcyOiBbMiwgNThdLCA3NTogWzIsIDU4XSwgODA6IFsyLCA1OF0sIDgxOiBbMiwgNThdLCA4MjogWzIsIDU4XSwgODM6IFsyLCA1OF0sIDg0OiBbMiwgNThdLCA4NTogWzIsIDU4XSB9LCB7IDMzOiBbMiwgNjRdLCAzNTogNjksIDY1OiBbMiwgNjRdLCA3MjogWzIsIDY0XSwgNzU6IFsyLCA2NF0sIDgwOiBbMiwgNjRdLCA4MTogWzIsIDY0XSwgODI6IFsyLCA2NF0sIDgzOiBbMiwgNjRdLCA4NDogWzIsIDY0XSwgODU6IFsyLCA2NF0gfSwgeyAyMTogNzAsIDIzOiBbMiwgNTBdLCA2NTogWzIsIDUwXSwgNzI6IFsyLCA1MF0sIDgwOiBbMiwgNTBdLCA4MTogWzIsIDUwXSwgODI6IFsyLCA1MF0sIDgzOiBbMiwgNTBdLCA4NDogWzIsIDUwXSwgODU6IFsyLCA1MF0gfSwgeyAzMzogWzIsIDkwXSwgNjE6IDcxLCA2NTogWzIsIDkwXSwgNzI6IFsyLCA5MF0sIDgwOiBbMiwgOTBdLCA4MTogWzIsIDkwXSwgODI6IFsyLCA5MF0sIDgzOiBbMiwgOTBdLCA4NDogWzIsIDkwXSwgODU6IFsyLCA5MF0gfSwgeyAyMDogNzUsIDMzOiBbMiwgODBdLCA1MDogNzIsIDYzOiA3MywgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDc0LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyA3MjogWzEsIDgwXSB9LCB7IDIzOiBbMiwgNDJdLCAzMzogWzIsIDQyXSwgNTQ6IFsyLCA0Ml0sIDY1OiBbMiwgNDJdLCA2ODogWzIsIDQyXSwgNzI6IFsyLCA0Ml0sIDc1OiBbMiwgNDJdLCA4MDogWzIsIDQyXSwgODE6IFsyLCA0Ml0sIDgyOiBbMiwgNDJdLCA4MzogWzIsIDQyXSwgODQ6IFsyLCA0Ml0sIDg1OiBbMiwgNDJdLCA4NzogWzEsIDUxXSB9LCB7IDIwOiA3NSwgNTM6IDgxLCA1NDogWzIsIDg0XSwgNjM6IDgyLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogODMsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDI2OiA4NCwgNDc6IFsxLCA2N10gfSwgeyA0NzogWzIsIDU1XSB9LCB7IDQ6IDg1LCA2OiAzLCAxNDogWzIsIDQ2XSwgMTU6IFsyLCA0Nl0sIDE5OiBbMiwgNDZdLCAyOTogWzIsIDQ2XSwgMzQ6IFsyLCA0Nl0sIDM5OiBbMiwgNDZdLCA0NDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgNDc6IFsyLCAyMF0gfSwgeyAyMDogODYsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgNDogODcsIDY6IDMsIDE0OiBbMiwgNDZdLCAxNTogWzIsIDQ2XSwgMTk6IFsyLCA0Nl0sIDI5OiBbMiwgNDZdLCAzNDogWzIsIDQ2XSwgNDc6IFsyLCA0Nl0sIDQ4OiBbMiwgNDZdLCA1MTogWzIsIDQ2XSwgNTU6IFsyLCA0Nl0sIDYwOiBbMiwgNDZdIH0sIHsgMjY6IDg4LCA0NzogWzEsIDY3XSB9LCB7IDQ3OiBbMiwgNTddIH0sIHsgNTogWzIsIDExXSwgMTQ6IFsyLCAxMV0sIDE1OiBbMiwgMTFdLCAxOTogWzIsIDExXSwgMjk6IFsyLCAxMV0sIDM0OiBbMiwgMTFdLCAzOTogWzIsIDExXSwgNDQ6IFsyLCAxMV0sIDQ3OiBbMiwgMTFdLCA0ODogWzIsIDExXSwgNTE6IFsyLCAxMV0sIDU1OiBbMiwgMTFdLCA2MDogWzIsIDExXSB9LCB7IDE1OiBbMiwgNDldLCAxODogWzIsIDQ5XSB9LCB7IDIwOiA3NSwgMzM6IFsyLCA4OF0sIDU4OiA4OSwgNjM6IDkwLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTEsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDY1OiBbMiwgOTRdLCA2NjogOTIsIDY4OiBbMiwgOTRdLCA3MjogWzIsIDk0XSwgODA6IFsyLCA5NF0sIDgxOiBbMiwgOTRdLCA4MjogWzIsIDk0XSwgODM6IFsyLCA5NF0sIDg0OiBbMiwgOTRdLCA4NTogWzIsIDk0XSB9LCB7IDU6IFsyLCAyNV0sIDE0OiBbMiwgMjVdLCAxNTogWzIsIDI1XSwgMTk6IFsyLCAyNV0sIDI5OiBbMiwgMjVdLCAzNDogWzIsIDI1XSwgMzk6IFsyLCAyNV0sIDQ0OiBbMiwgMjVdLCA0NzogWzIsIDI1XSwgNDg6IFsyLCAyNV0sIDUxOiBbMiwgMjVdLCA1NTogWzIsIDI1XSwgNjA6IFsyLCAyNV0gfSwgeyAyMDogOTMsIDcyOiBbMSwgMzVdLCA3ODogMjYsIDc5OiAyNywgODA6IFsxLCAyOF0sIDgxOiBbMSwgMjldLCA4MjogWzEsIDMwXSwgODM6IFsxLCAzMV0sIDg0OiBbMSwgMzJdLCA4NTogWzEsIDM0XSwgODY6IDMzIH0sIHsgMjA6IDc1LCAzMTogOTQsIDMzOiBbMiwgNjBdLCA2MzogOTUsIDY0OiA3NiwgNjU6IFsxLCA0NF0sIDY5OiA5NiwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3NTogWzIsIDYwXSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDIwOiA3NSwgMzM6IFsyLCA2Nl0sIDM2OiA5NywgNjM6IDk4LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogOTksIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzU6IFsyLCA2Nl0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDIyOiAxMDAsIDIzOiBbMiwgNTJdLCA2MzogMTAxLCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogMTAyLCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAyMDogNzUsIDMzOiBbMiwgOTJdLCA2MjogMTAzLCA2MzogMTA0LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA2OTogMTA1LCA3MDogNzcsIDcxOiA3OCwgNzI6IFsxLCA3OV0sIDc4OiAyNiwgNzk6IDI3LCA4MDogWzEsIDI4XSwgODE6IFsxLCAyOV0sIDgyOiBbMSwgMzBdLCA4MzogWzEsIDMxXSwgODQ6IFsxLCAzMl0sIDg1OiBbMSwgMzRdLCA4NjogMzMgfSwgeyAzMzogWzEsIDEwNl0gfSwgeyAzMzogWzIsIDc5XSwgNjU6IFsyLCA3OV0sIDcyOiBbMiwgNzldLCA4MDogWzIsIDc5XSwgODE6IFsyLCA3OV0sIDgyOiBbMiwgNzldLCA4MzogWzIsIDc5XSwgODQ6IFsyLCA3OV0sIDg1OiBbMiwgNzldIH0sIHsgMzM6IFsyLCA4MV0gfSwgeyAyMzogWzIsIDI3XSwgMzM6IFsyLCAyN10sIDU0OiBbMiwgMjddLCA2NTogWzIsIDI3XSwgNjg6IFsyLCAyN10sIDcyOiBbMiwgMjddLCA3NTogWzIsIDI3XSwgODA6IFsyLCAyN10sIDgxOiBbMiwgMjddLCA4MjogWzIsIDI3XSwgODM6IFsyLCAyN10sIDg0OiBbMiwgMjddLCA4NTogWzIsIDI3XSB9LCB7IDIzOiBbMiwgMjhdLCAzMzogWzIsIDI4XSwgNTQ6IFsyLCAyOF0sIDY1OiBbMiwgMjhdLCA2ODogWzIsIDI4XSwgNzI6IFsyLCAyOF0sIDc1OiBbMiwgMjhdLCA4MDogWzIsIDI4XSwgODE6IFsyLCAyOF0sIDgyOiBbMiwgMjhdLCA4MzogWzIsIDI4XSwgODQ6IFsyLCAyOF0sIDg1OiBbMiwgMjhdIH0sIHsgMjM6IFsyLCAzMF0sIDMzOiBbMiwgMzBdLCA1NDogWzIsIDMwXSwgNjg6IFsyLCAzMF0sIDcxOiAxMDcsIDcyOiBbMSwgMTA4XSwgNzU6IFsyLCAzMF0gfSwgeyAyMzogWzIsIDk4XSwgMzM6IFsyLCA5OF0sIDU0OiBbMiwgOThdLCA2ODogWzIsIDk4XSwgNzI6IFsyLCA5OF0sIDc1OiBbMiwgOThdIH0sIHsgMjM6IFsyLCA0NV0sIDMzOiBbMiwgNDVdLCA1NDogWzIsIDQ1XSwgNjU6IFsyLCA0NV0sIDY4OiBbMiwgNDVdLCA3MjogWzIsIDQ1XSwgNzM6IFsxLCAxMDldLCA3NTogWzIsIDQ1XSwgODA6IFsyLCA0NV0sIDgxOiBbMiwgNDVdLCA4MjogWzIsIDQ1XSwgODM6IFsyLCA0NV0sIDg0OiBbMiwgNDVdLCA4NTogWzIsIDQ1XSwgODc6IFsyLCA0NV0gfSwgeyAyMzogWzIsIDQ0XSwgMzM6IFsyLCA0NF0sIDU0OiBbMiwgNDRdLCA2NTogWzIsIDQ0XSwgNjg6IFsyLCA0NF0sIDcyOiBbMiwgNDRdLCA3NTogWzIsIDQ0XSwgODA6IFsyLCA0NF0sIDgxOiBbMiwgNDRdLCA4MjogWzIsIDQ0XSwgODM6IFsyLCA0NF0sIDg0OiBbMiwgNDRdLCA4NTogWzIsIDQ0XSwgODc6IFsyLCA0NF0gfSwgeyA1NDogWzEsIDExMF0gfSwgeyA1NDogWzIsIDgzXSwgNjU6IFsyLCA4M10sIDcyOiBbMiwgODNdLCA4MDogWzIsIDgzXSwgODE6IFsyLCA4M10sIDgyOiBbMiwgODNdLCA4MzogWzIsIDgzXSwgODQ6IFsyLCA4M10sIDg1OiBbMiwgODNdIH0sIHsgNTQ6IFsyLCA4NV0gfSwgeyA1OiBbMiwgMTNdLCAxNDogWzIsIDEzXSwgMTU6IFsyLCAxM10sIDE5OiBbMiwgMTNdLCAyOTogWzIsIDEzXSwgMzQ6IFsyLCAxM10sIDM5OiBbMiwgMTNdLCA0NDogWzIsIDEzXSwgNDc6IFsyLCAxM10sIDQ4OiBbMiwgMTNdLCA1MTogWzIsIDEzXSwgNTU6IFsyLCAxM10sIDYwOiBbMiwgMTNdIH0sIHsgMzg6IDU2LCAzOTogWzEsIDU4XSwgNDM6IDU3LCA0NDogWzEsIDU5XSwgNDU6IDExMiwgNDY6IDExMSwgNDc6IFsyLCA3Nl0gfSwgeyAzMzogWzIsIDcwXSwgNDA6IDExMywgNjU6IFsyLCA3MF0sIDcyOiBbMiwgNzBdLCA3NTogWzIsIDcwXSwgODA6IFsyLCA3MF0sIDgxOiBbMiwgNzBdLCA4MjogWzIsIDcwXSwgODM6IFsyLCA3MF0sIDg0OiBbMiwgNzBdLCA4NTogWzIsIDcwXSB9LCB7IDQ3OiBbMiwgMThdIH0sIHsgNTogWzIsIDE0XSwgMTQ6IFsyLCAxNF0sIDE1OiBbMiwgMTRdLCAxOTogWzIsIDE0XSwgMjk6IFsyLCAxNF0sIDM0OiBbMiwgMTRdLCAzOTogWzIsIDE0XSwgNDQ6IFsyLCAxNF0sIDQ3OiBbMiwgMTRdLCA0ODogWzIsIDE0XSwgNTE6IFsyLCAxNF0sIDU1OiBbMiwgMTRdLCA2MDogWzIsIDE0XSB9LCB7IDMzOiBbMSwgMTE0XSB9LCB7IDMzOiBbMiwgODddLCA2NTogWzIsIDg3XSwgNzI6IFsyLCA4N10sIDgwOiBbMiwgODddLCA4MTogWzIsIDg3XSwgODI6IFsyLCA4N10sIDgzOiBbMiwgODddLCA4NDogWzIsIDg3XSwgODU6IFsyLCA4N10gfSwgeyAzMzogWzIsIDg5XSB9LCB7IDIwOiA3NSwgNjM6IDExNiwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjc6IDExNSwgNjg6IFsyLCA5Nl0sIDY5OiAxMTcsIDcwOiA3NywgNzE6IDc4LCA3MjogWzEsIDc5XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDMzOiBbMSwgMTE4XSB9LCB7IDMyOiAxMTksIDMzOiBbMiwgNjJdLCA3NDogMTIwLCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDU5XSwgNjU6IFsyLCA1OV0sIDcyOiBbMiwgNTldLCA3NTogWzIsIDU5XSwgODA6IFsyLCA1OV0sIDgxOiBbMiwgNTldLCA4MjogWzIsIDU5XSwgODM6IFsyLCA1OV0sIDg0OiBbMiwgNTldLCA4NTogWzIsIDU5XSB9LCB7IDMzOiBbMiwgNjFdLCA3NTogWzIsIDYxXSB9LCB7IDMzOiBbMiwgNjhdLCAzNzogMTIyLCA3NDogMTIzLCA3NTogWzEsIDEyMV0gfSwgeyAzMzogWzIsIDY1XSwgNjU6IFsyLCA2NV0sIDcyOiBbMiwgNjVdLCA3NTogWzIsIDY1XSwgODA6IFsyLCA2NV0sIDgxOiBbMiwgNjVdLCA4MjogWzIsIDY1XSwgODM6IFsyLCA2NV0sIDg0OiBbMiwgNjVdLCA4NTogWzIsIDY1XSB9LCB7IDMzOiBbMiwgNjddLCA3NTogWzIsIDY3XSB9LCB7IDIzOiBbMSwgMTI0XSB9LCB7IDIzOiBbMiwgNTFdLCA2NTogWzIsIDUxXSwgNzI6IFsyLCA1MV0sIDgwOiBbMiwgNTFdLCA4MTogWzIsIDUxXSwgODI6IFsyLCA1MV0sIDgzOiBbMiwgNTFdLCA4NDogWzIsIDUxXSwgODU6IFsyLCA1MV0gfSwgeyAyMzogWzIsIDUzXSB9LCB7IDMzOiBbMSwgMTI1XSB9LCB7IDMzOiBbMiwgOTFdLCA2NTogWzIsIDkxXSwgNzI6IFsyLCA5MV0sIDgwOiBbMiwgOTFdLCA4MTogWzIsIDkxXSwgODI6IFsyLCA5MV0sIDgzOiBbMiwgOTFdLCA4NDogWzIsIDkxXSwgODU6IFsyLCA5MV0gfSwgeyAzMzogWzIsIDkzXSB9LCB7IDU6IFsyLCAyMl0sIDE0OiBbMiwgMjJdLCAxNTogWzIsIDIyXSwgMTk6IFsyLCAyMl0sIDI5OiBbMiwgMjJdLCAzNDogWzIsIDIyXSwgMzk6IFsyLCAyMl0sIDQ0OiBbMiwgMjJdLCA0NzogWzIsIDIyXSwgNDg6IFsyLCAyMl0sIDUxOiBbMiwgMjJdLCA1NTogWzIsIDIyXSwgNjA6IFsyLCAyMl0gfSwgeyAyMzogWzIsIDk5XSwgMzM6IFsyLCA5OV0sIDU0OiBbMiwgOTldLCA2ODogWzIsIDk5XSwgNzI6IFsyLCA5OV0sIDc1OiBbMiwgOTldIH0sIHsgNzM6IFsxLCAxMDldIH0sIHsgMjA6IDc1LCA2MzogMTI2LCA2NDogNzYsIDY1OiBbMSwgNDRdLCA3MjogWzEsIDM1XSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDU6IFsyLCAyM10sIDE0OiBbMiwgMjNdLCAxNTogWzIsIDIzXSwgMTk6IFsyLCAyM10sIDI5OiBbMiwgMjNdLCAzNDogWzIsIDIzXSwgMzk6IFsyLCAyM10sIDQ0OiBbMiwgMjNdLCA0NzogWzIsIDIzXSwgNDg6IFsyLCAyM10sIDUxOiBbMiwgMjNdLCA1NTogWzIsIDIzXSwgNjA6IFsyLCAyM10gfSwgeyA0NzogWzIsIDE5XSB9LCB7IDQ3OiBbMiwgNzddIH0sIHsgMjA6IDc1LCAzMzogWzIsIDcyXSwgNDE6IDEyNywgNjM6IDEyOCwgNjQ6IDc2LCA2NTogWzEsIDQ0XSwgNjk6IDEyOSwgNzA6IDc3LCA3MTogNzgsIDcyOiBbMSwgNzldLCA3NTogWzIsIDcyXSwgNzg6IDI2LCA3OTogMjcsIDgwOiBbMSwgMjhdLCA4MTogWzEsIDI5XSwgODI6IFsxLCAzMF0sIDgzOiBbMSwgMzFdLCA4NDogWzEsIDMyXSwgODU6IFsxLCAzNF0sIDg2OiAzMyB9LCB7IDU6IFsyLCAyNF0sIDE0OiBbMiwgMjRdLCAxNTogWzIsIDI0XSwgMTk6IFsyLCAyNF0sIDI5OiBbMiwgMjRdLCAzNDogWzIsIDI0XSwgMzk6IFsyLCAyNF0sIDQ0OiBbMiwgMjRdLCA0NzogWzIsIDI0XSwgNDg6IFsyLCAyNF0sIDUxOiBbMiwgMjRdLCA1NTogWzIsIDI0XSwgNjA6IFsyLCAyNF0gfSwgeyA2ODogWzEsIDEzMF0gfSwgeyA2NTogWzIsIDk1XSwgNjg6IFsyLCA5NV0sIDcyOiBbMiwgOTVdLCA4MDogWzIsIDk1XSwgODE6IFsyLCA5NV0sIDgyOiBbMiwgOTVdLCA4MzogWzIsIDk1XSwgODQ6IFsyLCA5NV0sIDg1OiBbMiwgOTVdIH0sIHsgNjg6IFsyLCA5N10gfSwgeyA1OiBbMiwgMjFdLCAxNDogWzIsIDIxXSwgMTU6IFsyLCAyMV0sIDE5OiBbMiwgMjFdLCAyOTogWzIsIDIxXSwgMzQ6IFsyLCAyMV0sIDM5OiBbMiwgMjFdLCA0NDogWzIsIDIxXSwgNDc6IFsyLCAyMV0sIDQ4OiBbMiwgMjFdLCA1MTogWzIsIDIxXSwgNTU6IFsyLCAyMV0sIDYwOiBbMiwgMjFdIH0sIHsgMzM6IFsxLCAxMzFdIH0sIHsgMzM6IFsyLCA2M10gfSwgeyA3MjogWzEsIDEzM10sIDc2OiAxMzIgfSwgeyAzMzogWzEsIDEzNF0gfSwgeyAzMzogWzIsIDY5XSB9LCB7IDE1OiBbMiwgMTJdIH0sIHsgMTQ6IFsyLCAyNl0sIDE1OiBbMiwgMjZdLCAxOTogWzIsIDI2XSwgMjk6IFsyLCAyNl0sIDM0OiBbMiwgMjZdLCA0NzogWzIsIDI2XSwgNDg6IFsyLCAyNl0sIDUxOiBbMiwgMjZdLCA1NTogWzIsIDI2XSwgNjA6IFsyLCAyNl0gfSwgeyAyMzogWzIsIDMxXSwgMzM6IFsyLCAzMV0sIDU0OiBbMiwgMzFdLCA2ODogWzIsIDMxXSwgNzI6IFsyLCAzMV0sIDc1OiBbMiwgMzFdIH0sIHsgMzM6IFsyLCA3NF0sIDQyOiAxMzUsIDc0OiAxMzYsIDc1OiBbMSwgMTIxXSB9LCB7IDMzOiBbMiwgNzFdLCA2NTogWzIsIDcxXSwgNzI6IFsyLCA3MV0sIDc1OiBbMiwgNzFdLCA4MDogWzIsIDcxXSwgODE6IFsyLCA3MV0sIDgyOiBbMiwgNzFdLCA4MzogWzIsIDcxXSwgODQ6IFsyLCA3MV0sIDg1OiBbMiwgNzFdIH0sIHsgMzM6IFsyLCA3M10sIDc1OiBbMiwgNzNdIH0sIHsgMjM6IFsyLCAyOV0sIDMzOiBbMiwgMjldLCA1NDogWzIsIDI5XSwgNjU6IFsyLCAyOV0sIDY4OiBbMiwgMjldLCA3MjogWzIsIDI5XSwgNzU6IFsyLCAyOV0sIDgwOiBbMiwgMjldLCA4MTogWzIsIDI5XSwgODI6IFsyLCAyOV0sIDgzOiBbMiwgMjldLCA4NDogWzIsIDI5XSwgODU6IFsyLCAyOV0gfSwgeyAxNDogWzIsIDE1XSwgMTU6IFsyLCAxNV0sIDE5OiBbMiwgMTVdLCAyOTogWzIsIDE1XSwgMzQ6IFsyLCAxNV0sIDM5OiBbMiwgMTVdLCA0NDogWzIsIDE1XSwgNDc6IFsyLCAxNV0sIDQ4OiBbMiwgMTVdLCA1MTogWzIsIDE1XSwgNTU6IFsyLCAxNV0sIDYwOiBbMiwgMTVdIH0sIHsgNzI6IFsxLCAxMzhdLCA3NzogWzEsIDEzN10gfSwgeyA3MjogWzIsIDEwMF0sIDc3OiBbMiwgMTAwXSB9LCB7IDE0OiBbMiwgMTZdLCAxNTogWzIsIDE2XSwgMTk6IFsyLCAxNl0sIDI5OiBbMiwgMTZdLCAzNDogWzIsIDE2XSwgNDQ6IFsyLCAxNl0sIDQ3OiBbMiwgMTZdLCA0ODogWzIsIDE2XSwgNTE6IFsyLCAxNl0sIDU1OiBbMiwgMTZdLCA2MDogWzIsIDE2XSB9LCB7IDMzOiBbMSwgMTM5XSB9LCB7IDMzOiBbMiwgNzVdIH0sIHsgMzM6IFsyLCAzMl0gfSwgeyA3MjogWzIsIDEwMV0sIDc3OiBbMiwgMTAxXSB9LCB7IDE0OiBbMiwgMTddLCAxNTogWzIsIDE3XSwgMTk6IFsyLCAxN10sIDI5OiBbMiwgMTddLCAzNDogWzIsIDE3XSwgMzk6IFsyLCAxN10sIDQ0OiBbMiwgMTddLCA0NzogWzIsIDE3XSwgNDg6IFsyLCAxN10sIDUxOiBbMiwgMTddLCA1NTogWzIsIDE3XSwgNjA6IFsyLCAxN10gfV0sXG5cdCAgICAgICAgZGVmYXVsdEFjdGlvbnM6IHsgNDogWzIsIDFdLCA1NTogWzIsIDU1XSwgNTc6IFsyLCAyMF0sIDYxOiBbMiwgNTddLCA3NDogWzIsIDgxXSwgODM6IFsyLCA4NV0sIDg3OiBbMiwgMThdLCA5MTogWzIsIDg5XSwgMTAyOiBbMiwgNTNdLCAxMDU6IFsyLCA5M10sIDExMTogWzIsIDE5XSwgMTEyOiBbMiwgNzddLCAxMTc6IFsyLCA5N10sIDEyMDogWzIsIDYzXSwgMTIzOiBbMiwgNjldLCAxMjQ6IFsyLCAxMl0sIDEzNjogWzIsIDc1XSwgMTM3OiBbMiwgMzJdIH0sXG5cdCAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcblx0ICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuXHQgICAgICAgICAgICAgICAgc3RhY2sgPSBbMF0sXG5cdCAgICAgICAgICAgICAgICB2c3RhY2sgPSBbbnVsbF0sXG5cdCAgICAgICAgICAgICAgICBsc3RhY2sgPSBbXSxcblx0ICAgICAgICAgICAgICAgIHRhYmxlID0gdGhpcy50YWJsZSxcblx0ICAgICAgICAgICAgICAgIHl5dGV4dCA9IFwiXCIsXG5cdCAgICAgICAgICAgICAgICB5eWxpbmVubyA9IDAsXG5cdCAgICAgICAgICAgICAgICB5eWxlbmcgPSAwLFxuXHQgICAgICAgICAgICAgICAgcmVjb3ZlcmluZyA9IDAsXG5cdCAgICAgICAgICAgICAgICBURVJST1IgPSAyLFxuXHQgICAgICAgICAgICAgICAgRU9GID0gMTtcblx0ICAgICAgICAgICAgdGhpcy5sZXhlci5zZXRJbnB1dChpbnB1dCk7XG5cdCAgICAgICAgICAgIHRoaXMubGV4ZXIueXkgPSB0aGlzLnl5O1xuXHQgICAgICAgICAgICB0aGlzLnl5LmxleGVyID0gdGhpcy5sZXhlcjtcblx0ICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIgPSB0aGlzO1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubGV4ZXIueXlsbG9jID09IFwidW5kZWZpbmVkXCIpIHRoaXMubGV4ZXIueXlsbG9jID0ge307XG5cdCAgICAgICAgICAgIHZhciB5eWxvYyA9IHRoaXMubGV4ZXIueXlsbG9jO1xuXHQgICAgICAgICAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG5cdCAgICAgICAgICAgIHZhciByYW5nZXMgPSB0aGlzLmxleGVyLm9wdGlvbnMgJiYgdGhpcy5sZXhlci5vcHRpb25zLnJhbmdlcztcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnl5LnBhcnNlRXJyb3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5wYXJzZUVycm9yID0gdGhpcy55eS5wYXJzZUVycm9yO1xuXHQgICAgICAgICAgICBmdW5jdGlvbiBwb3BTdGFjayhuKSB7XG5cdCAgICAgICAgICAgICAgICBzdGFjay5sZW5ndGggPSBzdGFjay5sZW5ndGggLSAyICogbjtcblx0ICAgICAgICAgICAgICAgIHZzdGFjay5sZW5ndGggPSB2c3RhY2subGVuZ3RoIC0gbjtcblx0ICAgICAgICAgICAgICAgIGxzdGFjay5sZW5ndGggPSBsc3RhY2subGVuZ3RoIC0gbjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBmdW5jdGlvbiBsZXgoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgdG9rZW47XG5cdCAgICAgICAgICAgICAgICB0b2tlbiA9IHNlbGYubGV4ZXIubGV4KCkgfHwgMTtcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwibnVtYmVyXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHNlbGYuc3ltYm9sc19bdG9rZW5dIHx8IHRva2VuO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciBzeW1ib2wsXG5cdCAgICAgICAgICAgICAgICBwcmVFcnJvclN5bWJvbCxcblx0ICAgICAgICAgICAgICAgIHN0YXRlLFxuXHQgICAgICAgICAgICAgICAgYWN0aW9uLFxuXHQgICAgICAgICAgICAgICAgYSxcblx0ICAgICAgICAgICAgICAgIHIsXG5cdCAgICAgICAgICAgICAgICB5eXZhbCA9IHt9LFxuXHQgICAgICAgICAgICAgICAgcCxcblx0ICAgICAgICAgICAgICAgIGxlbixcblx0ICAgICAgICAgICAgICAgIG5ld1N0YXRlLFxuXHQgICAgICAgICAgICAgICAgZXhwZWN0ZWQ7XG5cdCAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB0YWJsZVtzdGF0ZV0gJiYgdGFibGVbc3RhdGVdW3N5bWJvbF07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGVyclN0ciA9IFwiXCI7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvdmVyaW5nKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiB0YWJsZVtzdGF0ZV0pIGlmICh0aGlzLnRlcm1pbmFsc19bcF0gJiYgcCA+IDIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goXCInXCIgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyBcIidcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJTdHIgPSBcIlBhcnNlIGVycm9yIG9uIGxpbmUgXCIgKyAoeXlsaW5lbm8gKyAxKSArIFwiOlxcblwiICsgdGhpcy5sZXhlci5zaG93UG9zaXRpb24oKSArIFwiXFxuRXhwZWN0aW5nIFwiICsgZXhwZWN0ZWQuam9pbihcIiwgXCIpICsgXCIsIGdvdCAnXCIgKyAodGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sKSArIFwiJ1wiO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gMSA/IFwiZW5kIG9mIGlucHV0XCIgOiBcIidcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHsgdGV4dDogdGhpcy5sZXhlci5tYXRjaCwgdG9rZW46IHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCwgbGluZTogdGhpcy5sZXhlci55eWxpbmVubywgbG9jOiB5eWxvYywgZXhwZWN0ZWQ6IGV4cGVjdGVkIH0pO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmIChhY3Rpb25bMF0gaW5zdGFuY2VvZiBBcnJheSAmJiBhY3Rpb24ubGVuZ3RoID4gMSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvblswXSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2c3RhY2sucHVzaCh0aGlzLmxleGVyLnl5dGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjay5wdXNoKHRoaXMubGV4ZXIueXlsbG9jKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBudWxsO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByZUVycm9yU3ltYm9sKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eWxlbmcgPSB0aGlzLmxleGVyLnl5bGVuZztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHl5dGV4dCA9IHRoaXMubGV4ZXIueXl0ZXh0O1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsaW5lbm8gPSB0aGlzLmxleGVyLnl5bGluZW5vO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlsb2MgPSB0aGlzLmxleGVyLnl5bGxvYztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvdmVyaW5nID4gMCkgcmVjb3ZlcmluZy0tO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gcHJlRXJyb3JTeW1ib2w7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVFcnJvclN5bWJvbCA9IG51bGw7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSB0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzFdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC5fJCA9IHsgZmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLCBsYXN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9saW5lLCBmaXJzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfY29sdW1uLCBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtbiB9O1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eXZhbC5fJC5yYW5nZSA9IFtsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLnJhbmdlWzBdLCBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIDFdLnJhbmdlWzFdXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwoeXl2YWwsIHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgdGhpcy55eSwgYWN0aW9uWzFdLCB2c3RhY2ssIGxzdGFjayk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgciAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlbikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5zbGljZSgwLCAtMSAqIGxlbiAqIDIpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjayA9IGxzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdnN0YWNrLnB1c2goeXl2YWwuJCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxzdGFjay5wdXNoKHl5dmFsLl8kKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5ld1N0YXRlKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHQgICAgLyogSmlzb24gZ2VuZXJhdGVkIGxleGVyICovXG5cdCAgICB2YXIgbGV4ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBsZXhlciA9IHsgRU9GOiAxLFxuXHQgICAgICAgICAgICBwYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMueXkucGFyc2VyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uIHNldElucHV0KGlucHV0KSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9IHRoaXMuX2xlc3MgPSB0aGlzLmRvbmUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9IHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2ggPSAnJztcblx0ICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbJ0lOSVRJQUwnXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jID0geyBmaXJzdF9saW5lOiAxLCBmaXJzdF9jb2x1bW46IDAsIGxhc3RfbGluZTogMSwgbGFzdF9jb2x1bW46IDAgfTtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB0aGlzLnl5bGxvYy5yYW5nZSA9IFswLCAwXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gaW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggPSB0aGlzLl9pbnB1dFswXTtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcrKztcblx0ICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0Kys7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IGNoO1xuXHQgICAgICAgICAgICAgICAgdmFyIGxpbmVzID0gY2gubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuXHQgICAgICAgICAgICAgICAgaWYgKGxpbmVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxpbmVubysrO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbisrO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSk7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gY2g7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHVucHV0OiBmdW5jdGlvbiB1bnB1dChjaCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgIHZhciBsaW5lcyA9IGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG5cblx0ICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gY2ggKyB0aGlzLl9pbnB1dDtcblx0ICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGxlbiAtIDEpO1xuXHQgICAgICAgICAgICAgICAgLy90aGlzLnl5bGVuZyAtPSBsZW47XG5cdCAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG5cdCAgICAgICAgICAgICAgICB2YXIgb2xkTGluZXMgPSB0aGlzLm1hdGNoLnNwbGl0KC8oPzpcXHJcXG4/fFxcbikvZyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLm1hdGNoID0gdGhpcy5tYXRjaC5zdWJzdHIoMCwgdGhpcy5tYXRjaC5sZW5ndGggLSAxKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xuXG5cdCAgICAgICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoIC0gMSkgdGhpcy55eWxpbmVubyAtPSBsaW5lcy5sZW5ndGggLSAxO1xuXHQgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcblxuXHQgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MgPSB7IGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG5cdCAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vICsgMSxcblx0ICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbixcblx0ICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyAobGluZXMubGVuZ3RoID09PSBvbGRMaW5lcy5sZW5ndGggPyB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gOiAwKSArIG9sZExpbmVzW29sZExpbmVzLmxlbmd0aCAtIGxpbmVzLmxlbmd0aF0ubGVuZ3RoIC0gbGluZXNbMF0ubGVuZ3RoIDogdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gbGVuXG5cdCAgICAgICAgICAgICAgICB9O1xuXG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gW3JbMF0sIHJbMF0gKyB0aGlzLnl5bGVuZyAtIGxlbl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgbW9yZTogZnVuY3Rpb24gbW9yZSgpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uIGxlc3Mobikge1xuXHQgICAgICAgICAgICAgICAgdGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKG4pKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcGFzdElucHV0OiBmdW5jdGlvbiBwYXN0SW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiAocGFzdC5sZW5ndGggPiAyMCA/ICcuLi4nIDogJycpICsgcGFzdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHVwY29taW5nSW5wdXQ6IGZ1bmN0aW9uIHVwY29taW5nSW5wdXQoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG5cdCAgICAgICAgICAgICAgICBpZiAobmV4dC5sZW5ndGggPCAyMCkge1xuXHQgICAgICAgICAgICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwIC0gbmV4dC5sZW5ndGgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLCAyMCkgKyAobmV4dC5sZW5ndGggPiAyMCA/ICcuLi4nIDogJycpKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHNob3dQb3NpdGlvbjogZnVuY3Rpb24gc2hvd1Bvc2l0aW9uKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIHByZSA9IHRoaXMucGFzdElucHV0KCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcHJlICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgYyArIFwiXlwiO1xuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5wdXQpIHRoaXMuZG9uZSA9IHRydWU7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0b2tlbiwgbWF0Y2gsIHRlbXBNYXRjaCwgaW5kZXgsIGNvbCwgbGluZXM7XG5cdCAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21vcmUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5dGV4dCA9ICcnO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggPSAnJztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHZhciBydWxlcyA9IHRoaXMuX2N1cnJlbnRSdWxlcygpO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRlbXBNYXRjaCA9IHRoaXMuX2lucHV0Lm1hdGNoKHRoaXMucnVsZXNbcnVsZXNbaV1dKTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGVtcE1hdGNoICYmICghbWF0Y2ggfHwgdGVtcE1hdGNoWzBdLmxlbmd0aCA+IG1hdGNoWzBdLmxlbmd0aCkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0ZW1wTWF0Y2g7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbGluZXMgPSBtYXRjaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVzKSB0aGlzLnl5bGluZW5vICs9IGxpbmVzLmxlbmd0aDtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHsgZmlyc3RfbGluZTogdGhpcy55eWxsb2MubGFzdF9saW5lLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9jb2x1bW46IHRoaXMueXlsbG9jLmxhc3RfY29sdW1uLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5sZW5ndGggLSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aCB9O1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMueXl0ZXh0ICs9IG1hdGNoWzBdO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2ggKz0gbWF0Y2hbMF07XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxlbmcgPSB0aGlzLnl5dGV4dC5sZW5ndGg7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZWQgKz0gbWF0Y2hbMF07XG5cdCAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBydWxlc1tpbmRleF0sIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSk7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSAmJiB0aGlzLl9pbnB1dCkgdGhpcy5kb25lID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuKSByZXR1cm4gdG9rZW47ZWxzZSByZXR1cm47XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5wdXQgPT09IFwiXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRXJyb3IoJ0xleGljYWwgZXJyb3Igb24gbGluZSAnICsgKHRoaXMueXlsaW5lbm8gKyAxKSArICcuIFVucmVjb2duaXplZCB0ZXh0LlxcbicgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7IHRleHQ6IFwiXCIsIHRva2VuOiBudWxsLCBsaW5lOiB0aGlzLnl5bGluZW5vIH0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBsZXg6IGZ1bmN0aW9uIGxleCgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxleCgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICBiZWdpbjogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrLnB1c2goY29uZGl0aW9uKTtcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIF9jdXJyZW50UnVsZXM6IGZ1bmN0aW9uIF9jdXJyZW50UnVsZXMoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zW3RoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXV0ucnVsZXM7XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbiB0b3BTdGF0ZSgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMl07XG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG5cdCAgICAgICAgICAgIH0gfTtcblx0ICAgICAgICBsZXhlci5vcHRpb25zID0ge307XG5cdCAgICAgICAgbGV4ZXIucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uIGFub255bW91cyh5eSwgeXlfLCAkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLCBZWV9TVEFSVFxuXHQgICAgICAgIC8qKi8pIHtcblxuXHQgICAgICAgICAgICBmdW5jdGlvbiBzdHJpcChzdGFydCwgZW5kKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4geXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc3Vic3RyKHN0YXJ0LCB5eV8ueXlsZW5nIC0gZW5kKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHZhciBZWVNUQVRFID0gWVlfU1RBUlQ7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAwOlxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0yKSA9PT0gXCJcXFxcXFxcXFwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwKDAsIDEpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwibXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5eV8ueXl0ZXh0LnNsaWNlKC0xKSA9PT0gXCJcXFxcXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwgMSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJlbXVcIik7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcIm11XCIpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICBpZiAoeXlfLnl5dGV4dCkgcmV0dXJuIDE1O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTU7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtyZXR1cm4gMTU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSB1c2luZyBgdGhpcy50b3BTdGF0ZSgpYCBiZWxvdywgYnV0IGl0IGN1cnJlbnRseVxuXHQgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybnMgdGhlIHNlY29uZCB0b3AgaW5zdGVhZCBvZiB0aGUgZmlyc3QgdG9wLiBPcGVuZWQgYW5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSBhYm91dCBpdCBhdCBodHRwczovL2dpdGh1Yi5jb20vemFhY2gvamlzb24vaXNzdWVzLzI5MVxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV0gPT09ICdyYXcnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zdWJzdHIoNSwgeXlfLnl5bGVuZyAtIDkpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0VORF9SQVdfQkxPQ0snO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE0O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDc6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA2ODtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgOTpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTk7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKCdyYXcnKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjM7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTE6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxMjpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNjA7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDEzOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAyOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ3O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNTpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNjpcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7cmV0dXJuIDQ0O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAxNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMzQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiAzOTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMTk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDUxO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyMDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNDg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIxOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudW5wdXQoeXlfLnl5dGV4dCk7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ2NvbScpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDIyOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTQ7XG5cblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDQ4O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMjY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDcyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAyNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI4OlxuXHQgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB3aGl0ZXNwYWNlXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDI5OlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gNTQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMwOlxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtyZXR1cm4gMzM7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDMxOlxuXHQgICAgICAgICAgICAgICAgICAgIHl5Xy55eXRleHQgPSBzdHJpcCgxLCAyKS5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJyk7cmV0dXJuIDgwO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzMjpcblx0ICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0gc3RyaXAoMSwgMikucmVwbGFjZSgvXFxcXCcvZywgXCInXCIpO3JldHVybiA4MDtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDg1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM1OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzY6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDgzO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAzNzpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gODQ7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDM4OlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA4MTtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgMzk6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDc1O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSA0MDpcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gNzc7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlIDQxOlxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDI6XG5cdCAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQucmVwbGFjZSgvXFxcXChbXFxcXFxcXV0pL2csICckMScpO3JldHVybiA3Mjtcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDM6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdJTlZBTElEJztcblx0ICAgICAgICAgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDU7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIGxleGVyLnJ1bGVzID0gWy9eKD86W15cXHgwMF0qPyg/PShcXHtcXHspKSkvLCAvXig/OlteXFx4MDBdKykvLCAvXig/OlteXFx4MDBdezIsfT8oPz0oXFx7XFx7fFxcXFxcXHtcXHt8XFxcXFxcXFxcXHtcXHt8JCkpKS8sIC9eKD86XFx7XFx7XFx7XFx7KD89W15cXC9dKSkvLCAvXig/Olxce1xce1xce1xce1xcL1teXFxzIVwiIyUtLFxcLlxcLzstPkBcXFstXFxeYFxcey1+XSsoPz1bPX1cXHNcXC8uXSlcXH1cXH1cXH1cXH0pLywgL14oPzpbXlxceDAwXSo/KD89KFxce1xce1xce1xceykpKS8sIC9eKD86W1xcc1xcU10qPy0tKH4pP1xcfVxcfSkvLCAvXig/OlxcKCkvLCAvXig/OlxcKSkvLCAvXig/Olxce1xce1xce1xceykvLCAvXig/OlxcfVxcfVxcfVxcfSkvLCAvXig/Olxce1xceyh+KT8+KS8sIC9eKD86XFx7XFx7KH4pPyM+KS8sIC9eKD86XFx7XFx7KH4pPyNcXCo/KS8sIC9eKD86XFx7XFx7KH4pP1xcLykvLCAvXig/Olxce1xceyh+KT9cXF5cXHMqKH4pP1xcfVxcfSkvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxccyoofik/XFx9XFx9KS8sIC9eKD86XFx7XFx7KH4pP1xcXikvLCAvXig/Olxce1xceyh+KT9cXHMqZWxzZVxcYikvLCAvXig/Olxce1xceyh+KT9cXHspLywgL14oPzpcXHtcXHsofik/JikvLCAvXig/Olxce1xceyh+KT8hLS0pLywgL14oPzpcXHtcXHsofik/IVtcXHNcXFNdKj9cXH1cXH0pLywgL14oPzpcXHtcXHsofik/XFwqPykvLCAvXig/Oj0pLywgL14oPzpcXC5cXC4pLywgL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pfF0pKSkvLCAvXig/OltcXC8uXSkvLCAvXig/OlxccyspLywgL14oPzpcXH0ofik/XFx9XFx9KS8sIC9eKD86KH4pP1xcfVxcfSkvLCAvXig/OlwiKFxcXFxbXCJdfFteXCJdKSpcIikvLCAvXig/OicoXFxcXFsnXXxbXiddKSonKS8sIC9eKD86QCkvLCAvXig/OnRydWUoPz0oW359XFxzKV0pKSkvLCAvXig/OmZhbHNlKD89KFt+fVxccyldKSkpLywgL14oPzp1bmRlZmluZWQoPz0oW359XFxzKV0pKSkvLCAvXig/Om51bGwoPz0oW359XFxzKV0pKSkvLCAvXig/Oi0/WzAtOV0rKD86XFwuWzAtOV0rKT8oPz0oW359XFxzKV0pKSkvLCAvXig/OmFzXFxzK1xcfCkvLCAvXig/OlxcfCkvLCAvXig/OihbXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89KFs9fn1cXHNcXC8uKXxdKSkpKS8sIC9eKD86XFxbKFxcXFxcXF18W15cXF1dKSpcXF0pLywgL14oPzouKS8sIC9eKD86JCkvXTtcblx0ICAgICAgICBsZXhlci5jb25kaXRpb25zID0geyBcIm11XCI6IHsgXCJydWxlc1wiOiBbNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJlbXVcIjogeyBcInJ1bGVzXCI6IFsyXSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJjb21cIjogeyBcInJ1bGVzXCI6IFs2XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJyYXdcIjogeyBcInJ1bGVzXCI6IFszLCA0LCA1XSwgXCJpbmNsdXNpdmVcIjogZmFsc2UgfSwgXCJJTklUSUFMXCI6IHsgXCJydWxlc1wiOiBbMCwgMSwgNDRdLCBcImluY2x1c2l2ZVwiOiB0cnVlIH0gfTtcblx0ICAgICAgICByZXR1cm4gbGV4ZXI7XG5cdCAgICB9KSgpO1xuXHQgICAgcGFyc2VyLmxleGVyID0gbGV4ZXI7XG5cdCAgICBmdW5jdGlvbiBQYXJzZXIoKSB7XG5cdCAgICAgICAgdGhpcy55eSA9IHt9O1xuXHQgICAgfVBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXI7cGFyc2VyLlBhcnNlciA9IFBhcnNlcjtcblx0ICAgIHJldHVybiBuZXcgUGFyc2VyKCk7XG5cdH0pKCk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBoYW5kbGViYXJzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG4vKioqLyB9KSxcbi8qIDM4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblx0dmFyIF92aXNpdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cblx0dmFyIF92aXNpdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Zpc2l0b3IpO1xuXG5cdGZ1bmN0aW9uIFdoaXRlc3BhY2VDb250cm9sKCkge1xuXHQgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cblx0ICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZSA9IG5ldyBfdmlzaXRvcjJbJ2RlZmF1bHQnXSgpO1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Qcm9ncmFtID0gZnVuY3Rpb24gKHByb2dyYW0pIHtcblx0ICB2YXIgZG9TdGFuZGFsb25lID0gIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lO1xuXG5cdCAgdmFyIGlzUm9vdCA9ICF0aGlzLmlzUm9vdFNlZW47XG5cdCAgdGhpcy5pc1Jvb3RTZWVuID0gdHJ1ZTtcblxuXHQgIHZhciBib2R5ID0gcHJvZ3JhbS5ib2R5O1xuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gYm9keS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIHZhciBjdXJyZW50ID0gYm9keVtpXSxcblx0ICAgICAgICBzdHJpcCA9IHRoaXMuYWNjZXB0KGN1cnJlbnQpO1xuXG5cdCAgICBpZiAoIXN0cmlwKSB7XG5cdCAgICAgIGNvbnRpbnVlO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgX2lzUHJldldoaXRlc3BhY2UgPSBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgX2lzTmV4dFdoaXRlc3BhY2UgPSBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG5cdCAgICAgICAgb3BlblN0YW5kYWxvbmUgPSBzdHJpcC5vcGVuU3RhbmRhbG9uZSAmJiBfaXNQcmV2V2hpdGVzcGFjZSxcblx0ICAgICAgICBjbG9zZVN0YW5kYWxvbmUgPSBzdHJpcC5jbG9zZVN0YW5kYWxvbmUgJiYgX2lzTmV4dFdoaXRlc3BhY2UsXG5cdCAgICAgICAgaW5saW5lU3RhbmRhbG9uZSA9IHN0cmlwLmlubGluZVN0YW5kYWxvbmUgJiYgX2lzUHJldldoaXRlc3BhY2UgJiYgX2lzTmV4dFdoaXRlc3BhY2U7XG5cblx0ICAgIGlmIChzdHJpcC5jbG9zZSkge1xuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoc3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChib2R5LCBpLCB0cnVlKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKGRvU3RhbmRhbG9uZSAmJiBpbmxpbmVTdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodChib2R5LCBpKTtcblxuXHQgICAgICBpZiAob21pdExlZnQoYm9keSwgaSkpIHtcblx0ICAgICAgICAvLyBJZiB3ZSBhcmUgb24gYSBzdGFuZGFsb25lIG5vZGUsIHNhdmUgdGhlIGluZGVudCBpbmZvIGZvciBwYXJ0aWFsc1xuXHQgICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09ICdQYXJ0aWFsU3RhdGVtZW50Jykge1xuXHQgICAgICAgICAgLy8gUHVsbCBvdXQgdGhlIHdoaXRlc3BhY2UgZnJvbSB0aGUgZmluYWwgbGluZVxuXHQgICAgICAgICAgY3VycmVudC5pbmRlbnQgPSAvKFsgXFx0XSskKS8uZXhlYyhib2R5W2kgLSAxXS5vcmlnaW5hbClbMV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIG9wZW5TdGFuZGFsb25lKSB7XG5cdCAgICAgIG9taXRSaWdodCgoY3VycmVudC5wcm9ncmFtIHx8IGN1cnJlbnQuaW52ZXJzZSkuYm9keSk7XG5cblx0ICAgICAgLy8gU3RyaXAgb3V0IHRoZSBwcmV2aW91cyBjb250ZW50IG5vZGUgaWYgaXQncyB3aGl0ZXNwYWNlIG9ubHlcblx0ICAgICAgb21pdExlZnQoYm9keSwgaSk7XG5cdCAgICB9XG5cdCAgICBpZiAoZG9TdGFuZGFsb25lICYmIGNsb3NlU3RhbmRhbG9uZSkge1xuXHQgICAgICAvLyBBbHdheXMgc3RyaXAgdGhlIG5leHQgbm9kZVxuXHQgICAgICBvbWl0UmlnaHQoYm9keSwgaSk7XG5cblx0ICAgICAgb21pdExlZnQoKGN1cnJlbnQuaW52ZXJzZSB8fCBjdXJyZW50LnByb2dyYW0pLmJvZHkpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiBwcm9ncmFtO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5CbG9ja1N0YXRlbWVudCA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3JCbG9jayA9IFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5QYXJ0aWFsQmxvY2tTdGF0ZW1lbnQgPSBmdW5jdGlvbiAoYmxvY2spIHtcblx0ICB0aGlzLmFjY2VwdChibG9jay5wcm9ncmFtKTtcblx0ICB0aGlzLmFjY2VwdChibG9jay5pbnZlcnNlKTtcblxuXHQgIC8vIEZpbmQgdGhlIGludmVyc2UgcHJvZ3JhbSB0aGF0IGlzIGludm9sZWQgd2l0aCB3aGl0ZXNwYWNlIHN0cmlwcGluZy5cblx0ICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0gfHwgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgaW52ZXJzZSA9IGJsb2NrLnByb2dyYW0gJiYgYmxvY2suaW52ZXJzZSxcblx0ICAgICAgZmlyc3RJbnZlcnNlID0gaW52ZXJzZSxcblx0ICAgICAgbGFzdEludmVyc2UgPSBpbnZlcnNlO1xuXG5cdCAgaWYgKGludmVyc2UgJiYgaW52ZXJzZS5jaGFpbmVkKSB7XG5cdCAgICBmaXJzdEludmVyc2UgPSBpbnZlcnNlLmJvZHlbMF0ucHJvZ3JhbTtcblxuXHQgICAgLy8gV2FsayB0aGUgaW52ZXJzZSBjaGFpbiB0byBmaW5kIHRoZSBsYXN0IGludmVyc2UgdGhhdCBpcyBhY3R1YWxseSBpbiB0aGUgY2hhaW4uXG5cdCAgICB3aGlsZSAobGFzdEludmVyc2UuY2hhaW5lZCkge1xuXHQgICAgICBsYXN0SW52ZXJzZSA9IGxhc3RJbnZlcnNlLmJvZHlbbGFzdEludmVyc2UuYm9keS5sZW5ndGggLSAxXS5wcm9ncmFtO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHZhciBzdHJpcCA9IHtcblx0ICAgIG9wZW46IGJsb2NrLm9wZW5TdHJpcC5vcGVuLFxuXHQgICAgY2xvc2U6IGJsb2NrLmNsb3NlU3RyaXAuY2xvc2UsXG5cblx0ICAgIC8vIERldGVybWluZSB0aGUgc3RhbmRhbG9uZSBjYW5kaWFjeS4gQmFzaWNhbGx5IGZsYWcgb3VyIGNvbnRlbnQgYXMgYmVpbmcgcG9zc2libHkgc3RhbmRhbG9uZVxuXHQgICAgLy8gc28gb3VyIHBhcmVudCBjYW4gZGV0ZXJtaW5lIGlmIHdlIGFjdHVhbGx5IGFyZSBzdGFuZGFsb25lXG5cdCAgICBvcGVuU3RhbmRhbG9uZTogaXNOZXh0V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpLFxuXHQgICAgY2xvc2VTdGFuZGFsb25lOiBpc1ByZXZXaGl0ZXNwYWNlKChmaXJzdEludmVyc2UgfHwgcHJvZ3JhbSkuYm9keSlcblx0ICB9O1xuXG5cdCAgaWYgKGJsb2NrLm9wZW5TdHJpcC5jbG9zZSkge1xuXHQgICAgb21pdFJpZ2h0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgaWYgKGludmVyc2UpIHtcblx0ICAgIHZhciBpbnZlcnNlU3RyaXAgPSBibG9jay5pbnZlcnNlU3RyaXA7XG5cblx0ICAgIGlmIChpbnZlcnNlU3RyaXAub3Blbikge1xuXHQgICAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZVN0cmlwLmNsb3NlKSB7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgICB9XG5cdCAgICBpZiAoYmxvY2suY2xvc2VTdHJpcC5vcGVuKSB7XG5cdCAgICAgIG9taXRMZWZ0KGxhc3RJbnZlcnNlLmJvZHksIG51bGwsIHRydWUpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGaW5kIHN0YW5kYWxvbmUgZWxzZSBzdGF0bWVudHNcblx0ICAgIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmUgJiYgaXNQcmV2V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpICYmIGlzTmV4dFdoaXRlc3BhY2UoZmlyc3RJbnZlcnNlLmJvZHkpKSB7XG5cdCAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSk7XG5cdCAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSk7XG5cdCAgICB9XG5cdCAgfSBlbHNlIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcblx0ICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHN0cmlwO1xuXHR9O1xuXG5cdFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3IgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuTXVzdGFjaGVTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobXVzdGFjaGUpIHtcblx0ICByZXR1cm4gbXVzdGFjaGUuc3RyaXA7XG5cdH07XG5cblx0V2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlBhcnRpYWxTdGF0ZW1lbnQgPSBXaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuQ29tbWVudFN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICB2YXIgc3RyaXAgPSBub2RlLnN0cmlwIHx8IHt9O1xuXHQgIHJldHVybiB7XG5cdCAgICBpbmxpbmVTdGFuZGFsb25lOiB0cnVlLFxuXHQgICAgb3Blbjogc3RyaXAub3Blbixcblx0ICAgIGNsb3NlOiBzdHJpcC5jbG9zZVxuXHQgIH07XG5cdH07XG5cblx0ZnVuY3Rpb24gaXNQcmV2V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcblx0ICBpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICBpID0gYm9keS5sZW5ndGg7XG5cdCAgfVxuXG5cdCAgLy8gTm9kZXMgdGhhdCBlbmQgd2l0aCBuZXdsaW5lcyBhcmUgY29uc2lkZXJlZCB3aGl0ZXNwYWNlIChidXQgYXJlIHNwZWNpYWxcblx0ICAvLyBjYXNlZCBmb3Igc3RyaXAgb3BlcmF0aW9ucylcblx0ICB2YXIgcHJldiA9IGJvZHlbaSAtIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpIC0gMl07XG5cdCAgaWYgKCFwcmV2KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChwcmV2LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXFxyP1xcblxccyo/JC8gOiAvKF58XFxyP1xcbilcXHMqPyQvKS50ZXN0KHByZXYub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXHRmdW5jdGlvbiBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCkge1xuXHQgIGlmIChpID09PSB1bmRlZmluZWQpIHtcblx0ICAgIGkgPSAtMTtcblx0ICB9XG5cblx0ICB2YXIgbmV4dCA9IGJvZHlbaSArIDFdLFxuXHQgICAgICBzaWJsaW5nID0gYm9keVtpICsgMl07XG5cdCAgaWYgKCFuZXh0KSB7XG5cdCAgICByZXR1cm4gaXNSb290O1xuXHQgIH1cblxuXHQgIGlmIChuZXh0LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuXHQgICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAvXlxccyo/XFxyP1xcbi8gOiAvXlxccyo/KFxccj9cXG58JCkvKS50ZXN0KG5leHQub3JpZ2luYWwpO1xuXHQgIH1cblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSByaWdodCBvZiB0aGUgcG9zaXRpb24gYXMgb21pdHRlZC5cblx0Ly8gSS5lLiB7e2Zvb319JyAnIHdpbGwgbWFyayB0aGUgJyAnIG5vZGUgYXMgb21pdHRlZC5cblx0Ly9cblx0Ly8gSWYgaSBpcyB1bmRlZmluZWQsIHRoZW4gdGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0UmlnaHQoYm9keSwgaSwgbXVsdGlwbGUpIHtcblx0ICB2YXIgY3VycmVudCA9IGJvZHlbaSA9PSBudWxsID8gMCA6IGkgKyAxXTtcblx0ICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC50eXBlICE9PSAnQ29udGVudFN0YXRlbWVudCcgfHwgIW11bHRpcGxlICYmIGN1cnJlbnQucmlnaHRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIHZhciBvcmlnaW5hbCA9IGN1cnJlbnQudmFsdWU7XG5cdCAgY3VycmVudC52YWx1ZSA9IGN1cnJlbnQudmFsdWUucmVwbGFjZShtdWx0aXBsZSA/IC9eXFxzKy8gOiAvXlsgXFx0XSpcXHI/XFxuPy8sICcnKTtcblx0ICBjdXJyZW50LnJpZ2h0U3RyaXBwZWQgPSBjdXJyZW50LnZhbHVlICE9PSBvcmlnaW5hbDtcblx0fVxuXG5cdC8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSBsZWZ0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuXHQvLyBJLmUuICcgJ3t7Zm9vfX0gd2lsbCBtYXJrIHRoZSAnICcgbm9kZSBhcyBvbWl0dGVkLlxuXHQvL1xuXHQvLyBJZiBpIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBsYXN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG5cdC8vXG5cdC8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG5cdC8vIGNvbnRlbnQgaXMgbWV0LlxuXHRmdW5jdGlvbiBvbWl0TGVmdChib2R5LCBpLCBtdWx0aXBsZSkge1xuXHQgIHZhciBjdXJyZW50ID0gYm9keVtpID09IG51bGwgPyBib2R5Lmxlbmd0aCAtIDEgOiBpIC0gMV07XG5cdCAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ0NvbnRlbnRTdGF0ZW1lbnQnIHx8ICFtdWx0aXBsZSAmJiBjdXJyZW50LmxlZnRTdHJpcHBlZCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblxuXHQgIC8vIFdlIG9taXQgdGhlIGxhc3Qgbm9kZSBpZiBpdCdzIHdoaXRlc3BhY2Ugb25seSBhbmQgbm90IHByZWNlZWRlZCBieSBhIG5vbi1jb250ZW50IG5vZGUuXG5cdCAgdmFyIG9yaWdpbmFsID0gY3VycmVudC52YWx1ZTtcblx0ICBjdXJyZW50LnZhbHVlID0gY3VycmVudC52YWx1ZS5yZXBsYWNlKG11bHRpcGxlID8gL1xccyskLyA6IC9bIFxcdF0rJC8sICcnKTtcblx0ICBjdXJyZW50LmxlZnRTdHJpcHBlZCA9IGN1cnJlbnQudmFsdWUgIT09IG9yaWdpbmFsO1xuXHQgIHJldHVybiBjdXJyZW50LmxlZnRTdHJpcHBlZDtcblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFdoaXRlc3BhY2VDb250cm9sO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSlbJ2RlZmF1bHQnXTtcblxuXHRleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdGZ1bmN0aW9uIFZpc2l0b3IoKSB7XG5cdCAgdGhpcy5wYXJlbnRzID0gW107XG5cdH1cblxuXHRWaXNpdG9yLnByb3RvdHlwZSA9IHtcblx0ICBjb25zdHJ1Y3RvcjogVmlzaXRvcixcblx0ICBtdXRhdGluZzogZmFsc2UsXG5cblx0ICAvLyBWaXNpdHMgYSBnaXZlbiB2YWx1ZS4gSWYgbXV0YXRpbmcsIHdpbGwgcmVwbGFjZSB0aGUgdmFsdWUgaWYgbmVjZXNzYXJ5LlxuXHQgIGFjY2VwdEtleTogZnVuY3Rpb24gYWNjZXB0S2V5KG5vZGUsIG5hbWUpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHRoaXMuYWNjZXB0KG5vZGVbbmFtZV0pO1xuXHQgICAgaWYgKHRoaXMubXV0YXRpbmcpIHtcblx0ICAgICAgLy8gSGFja3kgc2FuaXR5IGNoZWNrOiBUaGlzIG1heSBoYXZlIGEgZmV3IGZhbHNlIHBvc2l0aXZlcyBmb3IgdHlwZSBmb3IgdGhlIGhlbHBlclxuXHQgICAgICAvLyBtZXRob2RzIGJ1dCB3aWxsIGdlbmVyYWxseSBkbyB0aGUgcmlnaHQgdGhpbmcgd2l0aG91dCBhIGxvdCBvZiBvdmVyaGVhZC5cblx0ICAgICAgaWYgKHZhbHVlICYmICFWaXNpdG9yLnByb3RvdHlwZVt2YWx1ZS50eXBlXSkge1xuXHQgICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIG5vZGUgdHlwZSBcIicgKyB2YWx1ZS50eXBlICsgJ1wiIGZvdW5kIHdoZW4gYWNjZXB0aW5nICcgKyBuYW1lICsgJyBvbiAnICsgbm9kZS50eXBlKTtcblx0ICAgICAgfVxuXHQgICAgICBub2RlW25hbWVdID0gdmFsdWU7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFBlcmZvcm1zIGFuIGFjY2VwdCBvcGVyYXRpb24gd2l0aCBhZGRlZCBzYW5pdHkgY2hlY2sgdG8gZW5zdXJlXG5cdCAgLy8gcmVxdWlyZWQga2V5cyBhcmUgbm90IHJlbW92ZWQuXG5cdCAgYWNjZXB0UmVxdWlyZWQ6IGZ1bmN0aW9uIGFjY2VwdFJlcXVpcmVkKG5vZGUsIG5hbWUpIHtcblx0ICAgIHRoaXMuYWNjZXB0S2V5KG5vZGUsIG5hbWUpO1xuXG5cdCAgICBpZiAoIW5vZGVbbmFtZV0pIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10obm9kZS50eXBlICsgJyByZXF1aXJlcyAnICsgbmFtZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFRyYXZlcnNlcyBhIGdpdmVuIGFycmF5LiBJZiBtdXRhdGluZywgZW1wdHkgcmVzcG5zZXMgd2lsbCBiZSByZW1vdmVkXG5cdCAgLy8gZm9yIGNoaWxkIGVsZW1lbnRzLlxuXHQgIGFjY2VwdEFycmF5OiBmdW5jdGlvbiBhY2NlcHRBcnJheShhcnJheSkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgdGhpcy5hY2NlcHRLZXkoYXJyYXksIGkpO1xuXG5cdCAgICAgIGlmICghYXJyYXlbaV0pIHtcblx0ICAgICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgaS0tO1xuXHQgICAgICAgIGwtLTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBhY2NlcHQ6IGZ1bmN0aW9uIGFjY2VwdChvYmplY3QpIHtcblx0ICAgIGlmICghb2JqZWN0KSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG5cdCAgICBpZiAoIXRoaXNbb2JqZWN0LnR5cGVdKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmtub3duIHR5cGU6ICcgKyBvYmplY3QudHlwZSwgb2JqZWN0KTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMuY3VycmVudCkge1xuXHQgICAgICB0aGlzLnBhcmVudHMudW5zaGlmdCh0aGlzLmN1cnJlbnQpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5jdXJyZW50ID0gb2JqZWN0O1xuXG5cdCAgICB2YXIgcmV0ID0gdGhpc1tvYmplY3QudHlwZV0ob2JqZWN0KTtcblxuXHQgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYXJlbnRzLnNoaWZ0KCk7XG5cblx0ICAgIGlmICghdGhpcy5tdXRhdGluZyB8fCByZXQpIHtcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0gZWxzZSBpZiAocmV0ICE9PSBmYWxzZSkge1xuXHQgICAgICByZXR1cm4gb2JqZWN0O1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHRoaXMuYWNjZXB0QXJyYXkocHJvZ3JhbS5ib2R5KTtcblx0ICB9LFxuXG5cdCAgTXVzdGFjaGVTdGF0ZW1lbnQ6IHZpc2l0U3ViRXhwcmVzc2lvbixcblx0ICBEZWNvcmF0b3I6IHZpc2l0U3ViRXhwcmVzc2lvbixcblxuXHQgIEJsb2NrU3RhdGVtZW50OiB2aXNpdEJsb2NrLFxuXHQgIERlY29yYXRvckJsb2NrOiB2aXNpdEJsb2NrLFxuXG5cdCAgUGFydGlhbFN0YXRlbWVudDogdmlzaXRQYXJ0aWFsLFxuXHQgIFBhcnRpYWxCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbEJsb2NrU3RhdGVtZW50KHBhcnRpYWwpIHtcblx0ICAgIHZpc2l0UGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwpO1xuXG5cdCAgICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAncHJvZ3JhbScpO1xuXHQgIH0sXG5cblx0ICBDb250ZW50U3RhdGVtZW50OiBmdW5jdGlvbiBDb250ZW50U3RhdGVtZW50KCkgLyogY29udGVudCAqL3t9LFxuXHQgIENvbW1lbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbW1lbnRTdGF0ZW1lbnQoKSAvKiBjb21tZW50ICove30sXG5cblx0ICBTdWJFeHByZXNzaW9uOiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cblx0ICBQYXRoRXhwcmVzc2lvbjogZnVuY3Rpb24gUGF0aEV4cHJlc3Npb24oKSAvKiBwYXRoICove30sXG5cblx0ICBTdHJpbmdMaXRlcmFsOiBmdW5jdGlvbiBTdHJpbmdMaXRlcmFsKCkgLyogc3RyaW5nICove30sXG5cdCAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24gTnVtYmVyTGl0ZXJhbCgpIC8qIG51bWJlciAqL3t9LFxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbCgpIC8qIGJvb2wgKi97fSxcblx0ICBVbmRlZmluZWRMaXRlcmFsOiBmdW5jdGlvbiBVbmRlZmluZWRMaXRlcmFsKCkgLyogbGl0ZXJhbCAqL3t9LFxuXHQgIE51bGxMaXRlcmFsOiBmdW5jdGlvbiBOdWxsTGl0ZXJhbCgpIC8qIGxpdGVyYWwgKi97fSxcblxuXHQgIEhhc2g6IGZ1bmN0aW9uIEhhc2goaGFzaCkge1xuXHQgICAgdGhpcy5hY2NlcHRBcnJheShoYXNoLnBhaXJzKTtcblx0ICB9LFxuXHQgIEhhc2hQYWlyOiBmdW5jdGlvbiBIYXNoUGFpcihwYWlyKSB7XG5cdCAgICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhaXIsICd2YWx1ZScpO1xuXHQgIH1cblx0fTtcblxuXHRmdW5jdGlvbiB2aXNpdFN1YkV4cHJlc3Npb24obXVzdGFjaGUpIHtcblx0ICB0aGlzLmFjY2VwdFJlcXVpcmVkKG11c3RhY2hlLCAncGF0aCcpO1xuXHQgIHRoaXMuYWNjZXB0QXJyYXkobXVzdGFjaGUucGFyYW1zKTtcblx0ICB0aGlzLmFjY2VwdEtleShtdXN0YWNoZSwgJ2hhc2gnKTtcblx0fVxuXHRmdW5jdGlvbiB2aXNpdEJsb2NrKGJsb2NrKSB7XG5cdCAgdmlzaXRTdWJFeHByZXNzaW9uLmNhbGwodGhpcywgYmxvY2spO1xuXG5cdCAgdGhpcy5hY2NlcHRLZXkoYmxvY2ssICdwcm9ncmFtJyk7XG5cdCAgdGhpcy5hY2NlcHRLZXkoYmxvY2ssICdpbnZlcnNlJyk7XG5cdH1cblx0ZnVuY3Rpb24gdmlzaXRQYXJ0aWFsKHBhcnRpYWwpIHtcblx0ICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhcnRpYWwsICduYW1lJyk7XG5cdCAgdGhpcy5hY2NlcHRBcnJheShwYXJ0aWFsLnBhcmFtcyk7XG5cdCAgdGhpcy5hY2NlcHRLZXkocGFydGlhbCwgJ2hhc2gnKTtcblx0fVxuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFZpc2l0b3I7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVsnZGVmYXVsdCddO1xuXG5cdGV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cdGV4cG9ydHMuU291cmNlTG9jYXRpb24gPSBTb3VyY2VMb2NhdGlvbjtcblx0ZXhwb3J0cy5pZCA9IGlkO1xuXHRleHBvcnRzLnN0cmlwRmxhZ3MgPSBzdHJpcEZsYWdzO1xuXHRleHBvcnRzLnN0cmlwQ29tbWVudCA9IHN0cmlwQ29tbWVudDtcblx0ZXhwb3J0cy5wcmVwYXJlUGF0aCA9IHByZXBhcmVQYXRoO1xuXHRleHBvcnRzLnByZXBhcmVNdXN0YWNoZSA9IHByZXBhcmVNdXN0YWNoZTtcblx0ZXhwb3J0cy5wcmVwYXJlUmF3QmxvY2sgPSBwcmVwYXJlUmF3QmxvY2s7XG5cdGV4cG9ydHMucHJlcGFyZUJsb2NrID0gcHJlcGFyZUJsb2NrO1xuXHRleHBvcnRzLnByZXBhcmVQcm9ncmFtID0gcHJlcGFyZVByb2dyYW07XG5cdGV4cG9ydHMucHJlcGFyZVBhcnRpYWxCbG9jayA9IHByZXBhcmVQYXJ0aWFsQmxvY2s7XG5cblx0dmFyIF9leGNlcHRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5cdHZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cblx0ZnVuY3Rpb24gdmFsaWRhdGVDbG9zZShvcGVuLCBjbG9zZSkge1xuXHQgIGNsb3NlID0gY2xvc2UucGF0aCA/IGNsb3NlLnBhdGgub3JpZ2luYWwgOiBjbG9zZTtcblxuXHQgIGlmIChvcGVuLnBhdGgub3JpZ2luYWwgIT09IGNsb3NlKSB7XG5cdCAgICB2YXIgZXJyb3JOb2RlID0geyBsb2M6IG9wZW4ucGF0aC5sb2MgfTtcblxuXHQgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10ob3Blbi5wYXRoLm9yaWdpbmFsICsgXCIgZG9lc24ndCBtYXRjaCBcIiArIGNsb3NlLCBlcnJvck5vZGUpO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIFNvdXJjZUxvY2F0aW9uKHNvdXJjZSwgbG9jSW5mbykge1xuXHQgIHRoaXMuc291cmNlID0gc291cmNlO1xuXHQgIHRoaXMuc3RhcnQgPSB7XG5cdCAgICBsaW5lOiBsb2NJbmZvLmZpcnN0X2xpbmUsXG5cdCAgICBjb2x1bW46IGxvY0luZm8uZmlyc3RfY29sdW1uXG5cdCAgfTtcblx0ICB0aGlzLmVuZCA9IHtcblx0ICAgIGxpbmU6IGxvY0luZm8ubGFzdF9saW5lLFxuXHQgICAgY29sdW1uOiBsb2NJbmZvLmxhc3RfY29sdW1uXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlkKHRva2VuKSB7XG5cdCAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KHRva2VuKSkge1xuXHQgICAgcmV0dXJuIHRva2VuLnN1YnN0cigxLCB0b2tlbi5sZW5ndGggLSAyKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIHRva2VuO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHN0cmlwRmxhZ3Mob3BlbiwgY2xvc2UpIHtcblx0ICByZXR1cm4ge1xuXHQgICAgb3Blbjogb3Blbi5jaGFyQXQoMikgPT09ICd+Jyxcblx0ICAgIGNsb3NlOiBjbG9zZS5jaGFyQXQoY2xvc2UubGVuZ3RoIC0gMykgPT09ICd+J1xuXHQgIH07XG5cdH1cblxuXHRmdW5jdGlvbiBzdHJpcENvbW1lbnQoY29tbWVudCkge1xuXHQgIHJldHVybiBjb21tZW50LnJlcGxhY2UoL15cXHtcXHt+P1xcIS0/LT8vLCAnJykucmVwbGFjZSgvLT8tP34/XFx9XFx9JC8sICcnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXRoKGRhdGEsIHBhcnRzLCBsb2MpIHtcblx0ICBsb2MgPSB0aGlzLmxvY0luZm8obG9jKTtcblxuXHQgIHZhciBvcmlnaW5hbCA9IGRhdGEgPyAnQCcgOiAnJyxcblx0ICAgICAgZGlnID0gW10sXG5cdCAgICAgIGRlcHRoID0gMCxcblx0ICAgICAgZGVwdGhTdHJpbmcgPSAnJztcblxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdCAgICB2YXIgcGFydCA9IHBhcnRzW2ldLnBhcnQsXG5cblx0ICAgIC8vIElmIHdlIGhhdmUgW10gc3ludGF4IHRoZW4gd2UgZG8gbm90IHRyZWF0IHBhdGggcmVmZXJlbmNlcyBhcyBvcGVyYXRvcnMsXG5cdCAgICAvLyBpLmUuIGZvby5bdGhpc10gcmVzb2x2ZXMgdG8gYXBwcm94aW1hdGVseSBjb250ZXh0LmZvb1sndGhpcyddXG5cdCAgICBpc0xpdGVyYWwgPSBwYXJ0c1tpXS5vcmlnaW5hbCAhPT0gcGFydDtcblx0ICAgIG9yaWdpbmFsICs9IChwYXJ0c1tpXS5zZXBhcmF0b3IgfHwgJycpICsgcGFydDtcblxuXHQgICAgaWYgKCFpc0xpdGVyYWwgJiYgKHBhcnQgPT09ICcuLicgfHwgcGFydCA9PT0gJy4nIHx8IHBhcnQgPT09ICd0aGlzJykpIHtcblx0ICAgICAgaWYgKGRpZy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgcGF0aDogJyArIG9yaWdpbmFsLCB7IGxvYzogbG9jIH0pO1xuXHQgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcblx0ICAgICAgICBkZXB0aCsrO1xuXHQgICAgICAgIGRlcHRoU3RyaW5nICs9ICcuLi8nO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBkaWcucHVzaChwYXJ0KTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgIGRhdGE6IGRhdGEsXG5cdCAgICBkZXB0aDogZGVwdGgsXG5cdCAgICBwYXJ0czogZGlnLFxuXHQgICAgb3JpZ2luYWw6IG9yaWdpbmFsLFxuXHQgICAgbG9jOiBsb2Ncblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZU11c3RhY2hlKHBhdGgsIHBhcmFtcywgaGFzaCwgb3Blbiwgc3RyaXAsIGxvY0luZm8pIHtcblx0ICAvLyBNdXN0IHVzZSBjaGFyQXQgdG8gc3VwcG9ydCBJRSBwcmUtMTBcblx0ICB2YXIgZXNjYXBlRmxhZyA9IG9wZW4uY2hhckF0KDMpIHx8IG9wZW4uY2hhckF0KDIpLFxuXHQgICAgICBlc2NhcGVkID0gZXNjYXBlRmxhZyAhPT0gJ3snICYmIGVzY2FwZUZsYWcgIT09ICcmJztcblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW4pO1xuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yJyA6ICdNdXN0YWNoZVN0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBwYXRoLFxuXHQgICAgcGFyYW1zOiBwYXJhbXMsXG5cdCAgICBoYXNoOiBoYXNoLFxuXHQgICAgZXNjYXBlZDogZXNjYXBlZCxcblx0ICAgIHN0cmlwOiBzdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVSYXdCbG9jayhvcGVuUmF3QmxvY2ssIGNvbnRlbnRzLCBjbG9zZSwgbG9jSW5mbykge1xuXHQgIHZhbGlkYXRlQ2xvc2Uob3BlblJhd0Jsb2NrLCBjbG9zZSk7XG5cblx0ICBsb2NJbmZvID0gdGhpcy5sb2NJbmZvKGxvY0luZm8pO1xuXHQgIHZhciBwcm9ncmFtID0ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogY29udGVudHMsXG5cdCAgICBzdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHR5cGU6ICdCbG9ja1N0YXRlbWVudCcsXG5cdCAgICBwYXRoOiBvcGVuUmF3QmxvY2sucGF0aCxcblx0ICAgIHBhcmFtczogb3BlblJhd0Jsb2NrLnBhcmFtcyxcblx0ICAgIGhhc2g6IG9wZW5SYXdCbG9jay5oYXNoLFxuXHQgICAgcHJvZ3JhbTogcHJvZ3JhbSxcblx0ICAgIG9wZW5TdHJpcDoge30sXG5cdCAgICBpbnZlcnNlU3RyaXA6IHt9LFxuXHQgICAgY2xvc2VTdHJpcDoge30sXG5cdCAgICBsb2M6IGxvY0luZm9cblx0ICB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZUJsb2NrKG9wZW5CbG9jaywgcHJvZ3JhbSwgaW52ZXJzZUFuZFByb2dyYW0sIGNsb3NlLCBpbnZlcnRlZCwgbG9jSW5mbykge1xuXHQgIGlmIChjbG9zZSAmJiBjbG9zZS5wYXRoKSB7XG5cdCAgICB2YWxpZGF0ZUNsb3NlKG9wZW5CbG9jaywgY2xvc2UpO1xuXHQgIH1cblxuXHQgIHZhciBkZWNvcmF0b3IgPSAvXFwqLy50ZXN0KG9wZW5CbG9jay5vcGVuKTtcblxuXHQgIHByb2dyYW0uYmxvY2tQYXJhbXMgPSBvcGVuQmxvY2suYmxvY2tQYXJhbXM7XG5cblx0ICB2YXIgaW52ZXJzZSA9IHVuZGVmaW5lZCxcblx0ICAgICAgaW52ZXJzZVN0cmlwID0gdW5kZWZpbmVkO1xuXG5cdCAgaWYgKGludmVyc2VBbmRQcm9ncmFtKSB7XG5cdCAgICBpZiAoZGVjb3JhdG9yKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmV4cGVjdGVkIGludmVyc2UgYmxvY2sgb24gZGVjb3JhdG9yJywgaW52ZXJzZUFuZFByb2dyYW0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaW52ZXJzZUFuZFByb2dyYW0uY2hhaW4pIHtcblx0ICAgICAgaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbS5ib2R5WzBdLmNsb3NlU3RyaXAgPSBjbG9zZS5zdHJpcDtcblx0ICAgIH1cblxuXHQgICAgaW52ZXJzZVN0cmlwID0gaW52ZXJzZUFuZFByb2dyYW0uc3RyaXA7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbTtcblx0ICB9XG5cblx0ICBpZiAoaW52ZXJ0ZWQpIHtcblx0ICAgIGludmVydGVkID0gaW52ZXJzZTtcblx0ICAgIGludmVyc2UgPSBwcm9ncmFtO1xuXHQgICAgcHJvZ3JhbSA9IGludmVydGVkO1xuXHQgIH1cblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiBkZWNvcmF0b3IgPyAnRGVjb3JhdG9yQmxvY2snIDogJ0Jsb2NrU3RhdGVtZW50Jyxcblx0ICAgIHBhdGg6IG9wZW5CbG9jay5wYXRoLFxuXHQgICAgcGFyYW1zOiBvcGVuQmxvY2sucGFyYW1zLFxuXHQgICAgaGFzaDogb3BlbkJsb2NrLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgaW52ZXJzZTogaW52ZXJzZSxcblx0ICAgIG9wZW5TdHJpcDogb3BlbkJsb2NrLnN0cmlwLFxuXHQgICAgaW52ZXJzZVN0cmlwOiBpbnZlcnNlU3RyaXAsXG5cdCAgICBjbG9zZVN0cmlwOiBjbG9zZSAmJiBjbG9zZS5zdHJpcCxcblx0ICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQcm9ncmFtKHN0YXRlbWVudHMsIGxvYykge1xuXHQgIGlmICghbG9jICYmIHN0YXRlbWVudHMubGVuZ3RoKSB7XG5cdCAgICB2YXIgZmlyc3RMb2MgPSBzdGF0ZW1lbnRzWzBdLmxvYyxcblx0ICAgICAgICBsYXN0TG9jID0gc3RhdGVtZW50c1tzdGF0ZW1lbnRzLmxlbmd0aCAtIDFdLmxvYztcblxuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICAgIGlmIChmaXJzdExvYyAmJiBsYXN0TG9jKSB7XG5cdCAgICAgIGxvYyA9IHtcblx0ICAgICAgICBzb3VyY2U6IGZpcnN0TG9jLnNvdXJjZSxcblx0ICAgICAgICBzdGFydDoge1xuXHQgICAgICAgICAgbGluZTogZmlyc3RMb2Muc3RhcnQubGluZSxcblx0ICAgICAgICAgIGNvbHVtbjogZmlyc3RMb2Muc3RhcnQuY29sdW1uXG5cdCAgICAgICAgfSxcblx0ICAgICAgICBlbmQ6IHtcblx0ICAgICAgICAgIGxpbmU6IGxhc3RMb2MuZW5kLmxpbmUsXG5cdCAgICAgICAgICBjb2x1bW46IGxhc3RMb2MuZW5kLmNvbHVtblxuXHQgICAgICAgIH1cblx0ICAgICAgfTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4ge1xuXHQgICAgdHlwZTogJ1Byb2dyYW0nLFxuXHQgICAgYm9keTogc3RhdGVtZW50cyxcblx0ICAgIHN0cmlwOiB7fSxcblx0ICAgIGxvYzogbG9jXG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByZXBhcmVQYXJ0aWFsQmxvY2sob3BlbiwgcHJvZ3JhbSwgY2xvc2UsIGxvY0luZm8pIHtcblx0ICB2YWxpZGF0ZUNsb3NlKG9wZW4sIGNsb3NlKTtcblxuXHQgIHJldHVybiB7XG5cdCAgICB0eXBlOiAnUGFydGlhbEJsb2NrU3RhdGVtZW50Jyxcblx0ICAgIG5hbWU6IG9wZW4ucGF0aCxcblx0ICAgIHBhcmFtczogb3Blbi5wYXJhbXMsXG5cdCAgICBoYXNoOiBvcGVuLmhhc2gsXG5cdCAgICBwcm9ncmFtOiBwcm9ncmFtLFxuXHQgICAgb3BlblN0cmlwOiBvcGVuLnN0cmlwLFxuXHQgICAgY2xvc2VTdHJpcDogY2xvc2UgJiYgY2xvc2Uuc3RyaXAsXG5cdCAgICBsb2M6IHRoaXMubG9jSW5mbyhsb2NJbmZvKVxuXHQgIH07XG5cdH1cblxuLyoqKi8gfSksXG4vKiA0MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblx0ZXhwb3J0cy5Db21waWxlciA9IENvbXBpbGVyO1xuXHRleHBvcnRzLnByZWNvbXBpbGUgPSBwcmVjb21waWxlO1xuXHRleHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfYXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSk7XG5cblx0dmFyIF9hc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXN0KTtcblxuXHR2YXIgc2xpY2UgPSBbXS5zbGljZTtcblxuXHRmdW5jdGlvbiBDb21waWxlcigpIHt9XG5cblx0Ly8gdGhlIGZvdW5kSGVscGVyIHJlZ2lzdGVyIHdpbGwgZGlzYW1iaWd1YXRlIGhlbHBlciBsb29rdXAgZnJvbSBmaW5kaW5nIGFcblx0Ly8gZnVuY3Rpb24gaW4gYSBjb250ZXh0LiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgbXVzdGFjaGUgY29tcGF0aWJpbGl0eSwgd2hpY2hcblx0Ly8gcmVxdWlyZXMgdGhhdCBjb250ZXh0IGZ1bmN0aW9ucyBpbiBibG9ja3MgYXJlIGV2YWx1YXRlZCBieSBibG9ja0hlbHBlck1pc3NpbmcsXG5cdC8vIGFuZCB0aGVuIHByb2NlZWQgYXMgaWYgdGhlIHJlc3VsdGluZyB2YWx1ZSB3YXMgcHJvdmlkZWQgdG8gYmxvY2tIZWxwZXJNaXNzaW5nLlxuXG5cdENvbXBpbGVyLnByb3RvdHlwZSA9IHtcblx0ICBjb21waWxlcjogQ29tcGlsZXIsXG5cblx0ICBlcXVhbHM6IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuXHQgICAgdmFyIGxlbiA9IHRoaXMub3Bjb2Rlcy5sZW5ndGg7XG5cdCAgICBpZiAob3RoZXIub3Bjb2Rlcy5sZW5ndGggIT09IGxlbikge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgdmFyIG9wY29kZSA9IHRoaXMub3Bjb2Rlc1tpXSxcblx0ICAgICAgICAgIG90aGVyT3Bjb2RlID0gb3RoZXIub3Bjb2Rlc1tpXTtcblx0ICAgICAgaWYgKG9wY29kZS5vcGNvZGUgIT09IG90aGVyT3Bjb2RlLm9wY29kZSB8fCAhYXJnRXF1YWxzKG9wY29kZS5hcmdzLCBvdGhlck9wY29kZS5hcmdzKSkge1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBXZSBrbm93IHRoYXQgbGVuZ3RoIGlzIHRoZSBzYW1lIGJldHdlZW4gdGhlIHR3byBhcnJheXMgYmVjYXVzZSB0aGV5IGFyZSBkaXJlY3RseSB0aWVkXG5cdCAgICAvLyB0byB0aGUgb3Bjb2RlIGJlaGF2aW9yIGFib3ZlLlxuXHQgICAgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmICghdGhpcy5jaGlsZHJlbltpXS5lcXVhbHMob3RoZXIuY2hpbGRyZW5baV0pKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH0sXG5cblx0ICBndWlkOiAwLFxuXG5cdCAgY29tcGlsZTogZnVuY3Rpb24gY29tcGlsZShwcm9ncmFtLCBvcHRpb25zKSB7XG5cdCAgICB0aGlzLnNvdXJjZU5vZGUgPSBbXTtcblx0ICAgIHRoaXMub3Bjb2RlcyA9IFtdO1xuXHQgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gb3B0aW9ucy5zdHJpbmdQYXJhbXM7XG5cdCAgICB0aGlzLnRyYWNrSWRzID0gb3B0aW9ucy50cmFja0lkcztcblxuXHQgICAgb3B0aW9ucy5ibG9ja1BhcmFtcyA9IG9wdGlvbnMuYmxvY2tQYXJhbXMgfHwgW107XG5cblx0ICAgIC8vIFRoZXNlIGNoYW5nZXMgd2lsbCBwcm9wYWdhdGUgdG8gdGhlIG90aGVyIGNvbXBpbGVyIGNvbXBvbmVudHNcblx0ICAgIHZhciBrbm93bkhlbHBlcnMgPSBvcHRpb25zLmtub3duSGVscGVycztcblx0ICAgIG9wdGlvbnMua25vd25IZWxwZXJzID0ge1xuXHQgICAgICAnaGVscGVyTWlzc2luZyc6IHRydWUsXG5cdCAgICAgICdibG9ja0hlbHBlck1pc3NpbmcnOiB0cnVlLFxuXHQgICAgICAnZWFjaCc6IHRydWUsXG5cdCAgICAgICdpZic6IHRydWUsXG5cdCAgICAgICd1bmxlc3MnOiB0cnVlLFxuXHQgICAgICAnd2l0aCc6IHRydWUsXG5cdCAgICAgICdsb2cnOiB0cnVlLFxuXHQgICAgICAnbG9va3VwJzogdHJ1ZVxuXHQgICAgfTtcblx0ICAgIGlmIChrbm93bkhlbHBlcnMpIHtcblx0ICAgICAgZm9yICh2YXIgX25hbWUgaW4ga25vd25IZWxwZXJzKSB7XG5cdCAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblx0ICAgICAgICBpZiAoX25hbWUgaW4ga25vd25IZWxwZXJzKSB7XG5cdCAgICAgICAgICB0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzW19uYW1lXSA9IGtub3duSGVscGVyc1tfbmFtZV07XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0aGlzLmFjY2VwdChwcm9ncmFtKTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZVByb2dyYW06IGZ1bmN0aW9uIGNvbXBpbGVQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHZhciBjaGlsZENvbXBpbGVyID0gbmV3IHRoaXMuY29tcGlsZXIoKSxcblx0ICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0ICAgIHJlc3VsdCA9IGNoaWxkQ29tcGlsZXIuY29tcGlsZShwcm9ncmFtLCB0aGlzLm9wdGlvbnMpLFxuXHQgICAgICAgIGd1aWQgPSB0aGlzLmd1aWQrKztcblxuXHQgICAgdGhpcy51c2VQYXJ0aWFsID0gdGhpcy51c2VQYXJ0aWFsIHx8IHJlc3VsdC51c2VQYXJ0aWFsO1xuXG5cdCAgICB0aGlzLmNoaWxkcmVuW2d1aWRdID0gcmVzdWx0O1xuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCByZXN1bHQudXNlRGVwdGhzO1xuXG5cdCAgICByZXR1cm4gZ3VpZDtcblx0ICB9LFxuXG5cdCAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQobm9kZSkge1xuXHQgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG5cdCAgICBpZiAoIXRoaXNbbm9kZS50eXBlXSkge1xuXHQgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0eXBlOiAnICsgbm9kZS50eXBlLCBub2RlKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnVuc2hpZnQobm9kZSk7XG5cdCAgICB2YXIgcmV0ID0gdGhpc1tub2RlLnR5cGVdKG5vZGUpO1xuXHQgICAgdGhpcy5zb3VyY2VOb2RlLnNoaWZ0KCk7XG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKHByb2dyYW0pIHtcblx0ICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy51bnNoaWZ0KHByb2dyYW0uYmxvY2tQYXJhbXMpO1xuXG5cdCAgICB2YXIgYm9keSA9IHByb2dyYW0uYm9keSxcblx0ICAgICAgICBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHlMZW5ndGg7IGkrKykge1xuXHQgICAgICB0aGlzLmFjY2VwdChib2R5W2ldKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zLnNoaWZ0KCk7XG5cblx0ICAgIHRoaXMuaXNTaW1wbGUgPSBib2R5TGVuZ3RoID09PSAxO1xuXHQgICAgdGhpcy5ibG9ja1BhcmFtcyA9IHByb2dyYW0uYmxvY2tQYXJhbXMgPyBwcm9ncmFtLmJsb2NrUGFyYW1zLmxlbmd0aCA6IDA7XG5cblx0ICAgIHJldHVybiB0aGlzO1xuXHQgIH0sXG5cblx0ICBCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gQmxvY2tTdGF0ZW1lbnQoYmxvY2spIHtcblx0ICAgIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoYmxvY2spO1xuXG5cdCAgICB2YXIgcHJvZ3JhbSA9IGJsb2NrLnByb2dyYW0sXG5cdCAgICAgICAgaW52ZXJzZSA9IGJsb2NrLmludmVyc2U7XG5cblx0ICAgIHByb2dyYW0gPSBwcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0ocHJvZ3JhbSk7XG5cdCAgICBpbnZlcnNlID0gaW52ZXJzZSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKGludmVyc2UpO1xuXG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihibG9jayk7XG5cblx0ICAgIGlmICh0eXBlID09PSAnaGVscGVyJykge1xuXHQgICAgICB0aGlzLmhlbHBlclNleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NpbXBsZScpIHtcblx0ICAgICAgdGhpcy5zaW1wbGVTZXhwcihibG9jayk7XG5cblx0ICAgICAgLy8gbm93IHRoYXQgdGhlIHNpbXBsZSBtdXN0YWNoZSBpcyByZXNvbHZlZCwgd2UgbmVlZCB0b1xuXHQgICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2Bcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXHQgICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdibG9ja1ZhbHVlJywgYmxvY2sucGF0aC5vcmlnaW5hbCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblxuXHQgICAgICAvLyBub3cgdGhhdCB0aGUgc2ltcGxlIG11c3RhY2hlIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvXG5cdCAgICAgIC8vIGV2YWx1YXRlIGl0IGJ5IGV4ZWN1dGluZyBgYmxvY2tIZWxwZXJNaXNzaW5nYFxuXHQgICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FtYmlndW91c0Jsb2NrVmFsdWUnKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgIH0sXG5cblx0ICBEZWNvcmF0b3JCbG9jazogZnVuY3Rpb24gRGVjb3JhdG9yQmxvY2soZGVjb3JhdG9yKSB7XG5cdCAgICB2YXIgcHJvZ3JhbSA9IGRlY29yYXRvci5wcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0oZGVjb3JhdG9yLnByb2dyYW0pO1xuXHQgICAgdmFyIHBhcmFtcyA9IHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoZGVjb3JhdG9yLCBwcm9ncmFtLCB1bmRlZmluZWQpLFxuXHQgICAgICAgIHBhdGggPSBkZWNvcmF0b3IucGF0aDtcblxuXHQgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgIHRoaXMub3Bjb2RlKCdyZWdpc3RlckRlY29yYXRvcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwpO1xuXHQgIH0sXG5cblx0ICBQYXJ0aWFsU3RhdGVtZW50OiBmdW5jdGlvbiBQYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWwpIHtcblx0ICAgIHRoaXMudXNlUGFydGlhbCA9IHRydWU7XG5cblx0ICAgIHZhciBwcm9ncmFtID0gcGFydGlhbC5wcm9ncmFtO1xuXHQgICAgaWYgKHByb2dyYW0pIHtcblx0ICAgICAgcHJvZ3JhbSA9IHRoaXMuY29tcGlsZVByb2dyYW0ocGFydGlhbC5wcm9ncmFtKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIHBhcmFtcyA9IHBhcnRpYWwucGFyYW1zO1xuXHQgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAxKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbnN1cHBvcnRlZCBudW1iZXIgb2YgcGFydGlhbCBhcmd1bWVudHM6ICcgKyBwYXJhbXMubGVuZ3RoLCBwYXJ0aWFsKTtcblx0ICAgIH0gZWxzZSBpZiAoIXBhcmFtcy5sZW5ndGgpIHtcblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHBsaWNpdFBhcnRpYWxDb250ZXh0KSB7XG5cdCAgICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ3VuZGVmaW5lZCcpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHBhcmFtcy5wdXNoKHsgdHlwZTogJ1BhdGhFeHByZXNzaW9uJywgcGFydHM6IFtdLCBkZXB0aDogMCB9KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcGFydGlhbE5hbWUgPSBwYXJ0aWFsLm5hbWUub3JpZ2luYWwsXG5cdCAgICAgICAgaXNEeW5hbWljID0gcGFydGlhbC5uYW1lLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJztcblx0ICAgIGlmIChpc0R5bmFtaWMpIHtcblx0ICAgICAgdGhpcy5hY2NlcHQocGFydGlhbC5uYW1lKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhwYXJ0aWFsLCBwcm9ncmFtLCB1bmRlZmluZWQsIHRydWUpO1xuXG5cdCAgICB2YXIgaW5kZW50ID0gcGFydGlhbC5pbmRlbnQgfHwgJyc7XG5cdCAgICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRJbmRlbnQgJiYgaW5kZW50KSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgaW5kZW50KTtcblx0ICAgICAgaW5kZW50ID0gJyc7XG5cdCAgICB9XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdpbnZva2VQYXJ0aWFsJywgaXNEeW5hbWljLCBwYXJ0aWFsTmFtZSwgaW5kZW50KTtcblx0ICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcblx0ICB9LFxuXHQgIFBhcnRpYWxCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24gUGFydGlhbEJsb2NrU3RhdGVtZW50KHBhcnRpYWxCbG9jaykge1xuXHQgICAgdGhpcy5QYXJ0aWFsU3RhdGVtZW50KHBhcnRpYWxCbG9jayk7XG5cdCAgfSxcblxuXHQgIE11c3RhY2hlU3RhdGVtZW50OiBmdW5jdGlvbiBNdXN0YWNoZVN0YXRlbWVudChtdXN0YWNoZSkge1xuXHQgICAgdGhpcy5TdWJFeHByZXNzaW9uKG11c3RhY2hlKTtcblxuXHQgICAgaWYgKG11c3RhY2hlLmVzY2FwZWQgJiYgIXRoaXMub3B0aW9ucy5ub0VzY2FwZSkge1xuXHQgICAgICB0aGlzLm9wY29kZSgnYXBwZW5kRXNjYXBlZCcpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgRGVjb3JhdG9yOiBmdW5jdGlvbiBEZWNvcmF0b3IoZGVjb3JhdG9yKSB7XG5cdCAgICB0aGlzLkRlY29yYXRvckJsb2NrKGRlY29yYXRvcik7XG5cdCAgfSxcblxuXHQgIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIENvbnRlbnRTdGF0ZW1lbnQoY29udGVudCkge1xuXHQgICAgaWYgKGNvbnRlbnQudmFsdWUpIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZENvbnRlbnQnLCBjb250ZW50LnZhbHVlKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24gQ29tbWVudFN0YXRlbWVudCgpIHt9LFxuXG5cdCAgU3ViRXhwcmVzc2lvbjogZnVuY3Rpb24gU3ViRXhwcmVzc2lvbihzZXhwcikge1xuXHQgICAgdHJhbnNmb3JtTGl0ZXJhbFRvUGF0aChzZXhwcik7XG5cdCAgICB2YXIgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihzZXhwcik7XG5cblx0ICAgIGlmICh0eXBlID09PSAnc2ltcGxlJykge1xuXHQgICAgICB0aGlzLnNpbXBsZVNleHByKHNleHByKTtcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hlbHBlcicpIHtcblx0ICAgICAgdGhpcy5oZWxwZXJTZXhwcihzZXhwcik7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLmFtYmlndW91c1NleHByKHNleHByKTtcblx0ICAgIH1cblx0ICB9LFxuXHQgIGFtYmlndW91c1NleHByOiBmdW5jdGlvbiBhbWJpZ3VvdXNTZXhwcihzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSkge1xuXHQgICAgdmFyIHBhdGggPSBzZXhwci5wYXRoLFxuXHQgICAgICAgIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIGlzQmxvY2sgPSBwcm9ncmFtICE9IG51bGwgfHwgaW52ZXJzZSAhPSBudWxsO1xuXG5cdCAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIHBhdGguZGVwdGgpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBwYXRoLnN0cmljdCA9IHRydWU7XG5cdCAgICB0aGlzLmFjY2VwdChwYXRoKTtcblxuXHQgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUFtYmlndW91cycsIG5hbWUsIGlzQmxvY2spO1xuXHQgIH0sXG5cblx0ICBzaW1wbGVTZXhwcjogZnVuY3Rpb24gc2ltcGxlU2V4cHIoc2V4cHIpIHtcblx0ICAgIHZhciBwYXRoID0gc2V4cHIucGF0aDtcblx0ICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcblx0ICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ3Jlc29sdmVQb3NzaWJsZUxhbWJkYScpO1xuXHQgIH0sXG5cblx0ICBoZWxwZXJTZXhwcjogZnVuY3Rpb24gaGVscGVyU2V4cHIoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcblx0ICAgIHZhciBwYXJhbXMgPSB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSxcblx0ICAgICAgICBwYXRoID0gc2V4cHIucGF0aCxcblx0ICAgICAgICBuYW1lID0gcGF0aC5wYXJ0c1swXTtcblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbbmFtZV0pIHtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUtub3duSGVscGVyJywgcGFyYW1zLmxlbmd0aCwgbmFtZSk7XG5cdCAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNPbmx5KSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3Ugc3BlY2lmaWVkIGtub3duSGVscGVyc09ubHksIGJ1dCB1c2VkIHRoZSB1bmtub3duIGhlbHBlciAnICsgbmFtZSwgc2V4cHIpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuXHQgICAgICBwYXRoLmZhbHN5ID0gdHJ1ZTtcblxuXHQgICAgICB0aGlzLmFjY2VwdChwYXRoKTtcblx0ICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwsIF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zaW1wbGVJZChwYXRoKSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIFBhdGhFeHByZXNzaW9uOiBmdW5jdGlvbiBQYXRoRXhwcmVzc2lvbihwYXRoKSB7XG5cdCAgICB0aGlzLmFkZERlcHRoKHBhdGguZGVwdGgpO1xuXHQgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBwYXRoLmRlcHRoKTtcblxuXHQgICAgdmFyIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuXHQgICAgICAgIHNjb3BlZCA9IF9hc3QyWydkZWZhdWx0J10uaGVscGVycy5zY29wZWRJZChwYXRoKSxcblx0ICAgICAgICBibG9ja1BhcmFtSWQgPSAhcGF0aC5kZXB0aCAmJiAhc2NvcGVkICYmIHRoaXMuYmxvY2tQYXJhbUluZGV4KG5hbWUpO1xuXG5cdCAgICBpZiAoYmxvY2tQYXJhbUlkKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBCbG9ja1BhcmFtJywgYmxvY2tQYXJhbUlkLCBwYXRoLnBhcnRzKTtcblx0ICAgIH0gZWxzZSBpZiAoIW5hbWUpIHtcblx0ICAgICAgLy8gQ29udGV4dCByZWZlcmVuY2UsIGkuZS4gYHt7Zm9vIC59fWAgb3IgYHt7Zm9vIC4ufX1gXG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoQ29udGV4dCcpO1xuXHQgICAgfSBlbHNlIGlmIChwYXRoLmRhdGEpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wY29kZSgnbG9va3VwRGF0YScsIHBhdGguZGVwdGgsIHBhdGgucGFydHMsIHBhdGguc3RyaWN0KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBPbkNvbnRleHQnLCBwYXRoLnBhcnRzLCBwYXRoLmZhbHN5LCBwYXRoLnN0cmljdCwgc2NvcGVkKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgU3RyaW5nTGl0ZXJhbDogZnVuY3Rpb24gU3RyaW5nTGl0ZXJhbChzdHJpbmcpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nJywgc3RyaW5nLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24gTnVtYmVyTGl0ZXJhbChudW1iZXIpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIG51bWJlci52YWx1ZSk7XG5cdCAgfSxcblxuXHQgIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbiBCb29sZWFuTGl0ZXJhbChib29sKSB7XG5cdCAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCBib29sLnZhbHVlKTtcblx0ICB9LFxuXG5cdCAgVW5kZWZpbmVkTGl0ZXJhbDogZnVuY3Rpb24gVW5kZWZpbmVkTGl0ZXJhbCgpIHtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICd1bmRlZmluZWQnKTtcblx0ICB9LFxuXG5cdCAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uIE51bGxMaXRlcmFsKCkge1xuXHQgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ251bGwnKTtcblx0ICB9LFxuXG5cdCAgSGFzaDogZnVuY3Rpb24gSGFzaChoYXNoKSB7XG5cdCAgICB2YXIgcGFpcnMgPSBoYXNoLnBhaXJzLFxuXHQgICAgICAgIGkgPSAwLFxuXHQgICAgICAgIGwgPSBwYWlycy5sZW5ndGg7XG5cblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoSGFzaCcpO1xuXG5cdCAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYWlyc1tpXS52YWx1ZSk7XG5cdCAgICB9XG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdhc3NpZ25Ub0hhc2gnLCBwYWlyc1tpXS5rZXkpO1xuXHQgICAgfVxuXHQgICAgdGhpcy5vcGNvZGUoJ3BvcEhhc2gnKTtcblx0ICB9LFxuXG5cdCAgLy8gSEVMUEVSU1xuXHQgIG9wY29kZTogZnVuY3Rpb24gb3Bjb2RlKG5hbWUpIHtcblx0ICAgIHRoaXMub3Bjb2Rlcy5wdXNoKHsgb3Bjb2RlOiBuYW1lLCBhcmdzOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGxvYzogdGhpcy5zb3VyY2VOb2RlWzBdLmxvYyB9KTtcblx0ICB9LFxuXG5cdCAgYWRkRGVwdGg6IGZ1bmN0aW9uIGFkZERlcHRoKGRlcHRoKSB7XG5cdCAgICBpZiAoIWRlcHRoKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0cnVlO1xuXHQgIH0sXG5cblx0ICBjbGFzc2lmeVNleHByOiBmdW5jdGlvbiBjbGFzc2lmeVNleHByKHNleHByKSB7XG5cdCAgICB2YXIgaXNTaW1wbGUgPSBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2ltcGxlSWQoc2V4cHIucGF0aCk7XG5cblx0ICAgIHZhciBpc0Jsb2NrUGFyYW0gPSBpc1NpbXBsZSAmJiAhIXRoaXMuYmxvY2tQYXJhbUluZGV4KHNleHByLnBhdGgucGFydHNbMF0pO1xuXG5cdCAgICAvLyBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBpZjpcblx0ICAgIC8vICogaXRzIGlkIGlzIHNpbXBsZSAoYSBzaW5nbGUgcGFydCwgbm90IGB0aGlzYCBvciBgLi5gKVxuXHQgICAgdmFyIGlzSGVscGVyID0gIWlzQmxvY2tQYXJhbSAmJiBfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuaGVscGVyRXhwcmVzc2lvbihzZXhwcik7XG5cblx0ICAgIC8vIGlmIGEgbXVzdGFjaGUgaXMgYW4gZWxpZ2libGUgaGVscGVyIGJ1dCBub3QgYSBkZWZpbml0ZVxuXHQgICAgLy8gaGVscGVyLCBpdCBpcyBhbWJpZ3VvdXMsIGFuZCB3aWxsIGJlIHJlc29sdmVkIGluIGEgbGF0ZXJcblx0ICAgIC8vIHBhc3Mgb3IgYXQgcnVudGltZS5cblx0ICAgIHZhciBpc0VsaWdpYmxlID0gIWlzQmxvY2tQYXJhbSAmJiAoaXNIZWxwZXIgfHwgaXNTaW1wbGUpO1xuXG5cdCAgICAvLyBpZiBhbWJpZ3VvdXMsIHdlIGNhbiBwb3NzaWJseSByZXNvbHZlIHRoZSBhbWJpZ3VpdHkgbm93XG5cdCAgICAvLyBBbiBlbGlnaWJsZSBoZWxwZXIgaXMgb25lIHRoYXQgZG9lcyBub3QgaGF2ZSBhIGNvbXBsZXggcGF0aCwgaS5lLiBgdGhpcy5mb29gLCBgLi4vZm9vYCBldGMuXG5cdCAgICBpZiAoaXNFbGlnaWJsZSAmJiAhaXNIZWxwZXIpIHtcblx0ICAgICAgdmFyIF9uYW1lMiA9IHNleHByLnBhdGgucGFydHNbMF0sXG5cdCAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdCAgICAgIGlmIChvcHRpb25zLmtub3duSGVscGVyc1tfbmFtZTJdKSB7XG5cdCAgICAgICAgaXNIZWxwZXIgPSB0cnVlO1xuXHQgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuXHQgICAgICAgIGlzRWxpZ2libGUgPSBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAoaXNIZWxwZXIpIHtcblx0ICAgICAgcmV0dXJuICdoZWxwZXInO1xuXHQgICAgfSBlbHNlIGlmIChpc0VsaWdpYmxlKSB7XG5cdCAgICAgIHJldHVybiAnYW1iaWd1b3VzJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiAnc2ltcGxlJztcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHVzaFBhcmFtczogZnVuY3Rpb24gcHVzaFBhcmFtcyhwYXJhbXMpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGFyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHQgICAgICB0aGlzLnB1c2hQYXJhbShwYXJhbXNbaV0pO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwdXNoUGFyYW06IGZ1bmN0aW9uIHB1c2hQYXJhbSh2YWwpIHtcblx0ICAgIHZhciB2YWx1ZSA9IHZhbC52YWx1ZSAhPSBudWxsID8gdmFsLnZhbHVlIDogdmFsLm9yaWdpbmFsIHx8ICcnO1xuXG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcblx0ICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14oXFwuP1xcLlxcLykqL2csICcnKS5yZXBsYWNlKC9cXC8vZywgJy4nKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICh2YWwuZGVwdGgpIHtcblx0ICAgICAgICB0aGlzLmFkZERlcHRoKHZhbC5kZXB0aCk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCB2YWwuZGVwdGggfHwgMCk7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nUGFyYW0nLCB2YWx1ZSwgdmFsLnR5cGUpO1xuXG5cdCAgICAgIGlmICh2YWwudHlwZSA9PT0gJ1N1YkV4cHJlc3Npb24nKSB7XG5cdCAgICAgICAgLy8gU3ViRXhwcmVzc2lvbnMgZ2V0IGV2YWx1YXRlZCBhbmQgcGFzc2VkIGluXG5cdCAgICAgICAgLy8gaW4gc3RyaW5nIHBhcmFtcyBtb2RlLlxuXHQgICAgICAgIHRoaXMuYWNjZXB0KHZhbCk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgICAgdmFyIGJsb2NrUGFyYW1JbmRleCA9IHVuZGVmaW5lZDtcblx0ICAgICAgICBpZiAodmFsLnBhcnRzICYmICFfYXN0MlsnZGVmYXVsdCddLmhlbHBlcnMuc2NvcGVkSWQodmFsKSAmJiAhdmFsLmRlcHRoKSB7XG5cdCAgICAgICAgICBibG9ja1BhcmFtSW5kZXggPSB0aGlzLmJsb2NrUGFyYW1JbmRleCh2YWwucGFydHNbMF0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoYmxvY2tQYXJhbUluZGV4KSB7XG5cdCAgICAgICAgICB2YXIgYmxvY2tQYXJhbUNoaWxkID0gdmFsLnBhcnRzLnNsaWNlKDEpLmpvaW4oJy4nKTtcblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCAnQmxvY2tQYXJhbScsIGJsb2NrUGFyYW1JbmRleCwgYmxvY2tQYXJhbUNoaWxkKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdmFsdWUgPSB2YWwub3JpZ2luYWwgfHwgdmFsdWU7XG5cdCAgICAgICAgICBpZiAodmFsdWUucmVwbGFjZSkge1xuXHQgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL150aGlzKD86XFwufCQpLywgJycpLnJlcGxhY2UoL15cXC5cXC8vLCAnJykucmVwbGFjZSgvXlxcLiQvLCAnJyk7XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCB2YWwudHlwZSwgdmFsdWUpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLmFjY2VwdCh2YWwpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtczogZnVuY3Rpb24gc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoc2V4cHIsIHByb2dyYW0sIGludmVyc2UsIG9taXRFbXB0eSkge1xuXHQgICAgdmFyIHBhcmFtcyA9IHNleHByLnBhcmFtcztcblx0ICAgIHRoaXMucHVzaFBhcmFtcyhwYXJhbXMpO1xuXG5cdCAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcblx0ICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuXG5cdCAgICBpZiAoc2V4cHIuaGFzaCkge1xuXHQgICAgICB0aGlzLmFjY2VwdChzZXhwci5oYXNoKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnLCBvbWl0RW1wdHkpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcGFyYW1zO1xuXHQgIH0sXG5cblx0ICBibG9ja1BhcmFtSW5kZXg6IGZ1bmN0aW9uIGJsb2NrUGFyYW1JbmRleChuYW1lKSB7XG5cdCAgICBmb3IgKHZhciBkZXB0aCA9IDAsIGxlbiA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5sZW5ndGg7IGRlcHRoIDwgbGVuOyBkZXB0aCsrKSB7XG5cdCAgICAgIHZhciBibG9ja1BhcmFtcyA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtc1tkZXB0aF0sXG5cdCAgICAgICAgICBwYXJhbSA9IGJsb2NrUGFyYW1zICYmIF91dGlscy5pbmRleE9mKGJsb2NrUGFyYW1zLCBuYW1lKTtcblx0ICAgICAgaWYgKGJsb2NrUGFyYW1zICYmIHBhcmFtID49IDApIHtcblx0ICAgICAgICByZXR1cm4gW2RlcHRoLCBwYXJhbV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdH07XG5cblx0ZnVuY3Rpb24gcHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgZW52KSB7XG5cdCAgaWYgKGlucHV0ID09IG51bGwgfHwgdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyAmJiBpbnB1dC50eXBlICE9PSAnUHJvZ3JhbScpIHtcblx0ICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMucHJlY29tcGlsZS4gWW91IHBhc3NlZCAnICsgaW5wdXQpO1xuXHQgIH1cblxuXHQgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQgIGlmICghKCdkYXRhJyBpbiBvcHRpb25zKSkge1xuXHQgICAgb3B0aW9ucy5kYXRhID0gdHJ1ZTtcblx0ICB9XG5cdCAgaWYgKG9wdGlvbnMuY29tcGF0KSB7XG5cdCAgICBvcHRpb25zLnVzZURlcHRocyA9IHRydWU7XG5cdCAgfVxuXG5cdCAgdmFyIGFzdCA9IGVudi5wYXJzZShpbnB1dCwgb3B0aW9ucyksXG5cdCAgICAgIGVudmlyb25tZW50ID0gbmV3IGVudi5Db21waWxlcigpLmNvbXBpbGUoYXN0LCBvcHRpb25zKTtcblx0ICByZXR1cm4gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGVudikge1xuXHQgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSB7fTtcblxuXHQgIGlmIChpbnB1dCA9PSBudWxsIHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSB7XG5cdCAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnWW91IG11c3QgcGFzcyBhIHN0cmluZyBvciBIYW5kbGViYXJzIEFTVCB0byBIYW5kbGViYXJzLmNvbXBpbGUuIFlvdSBwYXNzZWQgJyArIGlucHV0KTtcblx0ICB9XG5cblx0ICBvcHRpb25zID0gX3V0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG5cdCAgaWYgKCEoJ2RhdGEnIGluIG9wdGlvbnMpKSB7XG5cdCAgICBvcHRpb25zLmRhdGEgPSB0cnVlO1xuXHQgIH1cblx0ICBpZiAob3B0aW9ucy5jb21wYXQpIHtcblx0ICAgIG9wdGlvbnMudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICB9XG5cblx0ICB2YXIgY29tcGlsZWQgPSB1bmRlZmluZWQ7XG5cblx0ICBmdW5jdGlvbiBjb21waWxlSW5wdXQoKSB7XG5cdCAgICB2YXIgYXN0ID0gZW52LnBhcnNlKGlucHV0LCBvcHRpb25zKSxcblx0ICAgICAgICBlbnZpcm9ubWVudCA9IG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyksXG5cdCAgICAgICAgdGVtcGxhdGVTcGVjID0gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCB1bmRlZmluZWQsIHRydWUpO1xuXHQgICAgcmV0dXJuIGVudi50ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMpO1xuXHQgIH1cblxuXHQgIC8vIFRlbXBsYXRlIGlzIG9ubHkgY29tcGlsZWQgb24gZmlyc3QgdXNlIGFuZCBjYWNoZWQgYWZ0ZXIgdGhhdCBwb2ludC5cblx0ICBmdW5jdGlvbiByZXQoY29udGV4dCwgZXhlY09wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5jYWxsKHRoaXMsIGNvbnRleHQsIGV4ZWNPcHRpb25zKTtcblx0ICB9XG5cdCAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChzZXR1cE9wdGlvbnMpIHtcblx0ICAgIGlmICghY29tcGlsZWQpIHtcblx0ICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBjb21waWxlZC5fc2V0dXAoc2V0dXBPcHRpb25zKTtcblx0ICB9O1xuXHQgIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuXHQgICAgaWYgKCFjb21waWxlZCkge1xuXHQgICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIGNvbXBpbGVkLl9jaGlsZChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcblx0ICB9O1xuXHQgIHJldHVybiByZXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBhcmdFcXVhbHMoYSwgYikge1xuXHQgIGlmIChhID09PSBiKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cblx0ICBpZiAoX3V0aWxzLmlzQXJyYXkoYSkgJiYgX3V0aWxzLmlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgaWYgKCFhcmdFcXVhbHMoYVtpXSwgYltpXSkpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiB0cnVlO1xuXHQgIH1cblx0fVxuXG5cdGZ1bmN0aW9uIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoc2V4cHIpIHtcblx0ICBpZiAoIXNleHByLnBhdGgucGFydHMpIHtcblx0ICAgIHZhciBsaXRlcmFsID0gc2V4cHIucGF0aDtcblx0ICAgIC8vIENhc3RpbmcgdG8gc3RyaW5nIGhlcmUgdG8gbWFrZSBmYWxzZSBhbmQgMCBsaXRlcmFsIHZhbHVlcyBwbGF5IG5pY2VseSB3aXRoIHRoZSByZXN0XG5cdCAgICAvLyBvZiB0aGUgc3lzdGVtLlxuXHQgICAgc2V4cHIucGF0aCA9IHtcblx0ICAgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcblx0ICAgICAgZGF0YTogZmFsc2UsXG5cdCAgICAgIGRlcHRoOiAwLFxuXHQgICAgICBwYXJ0czogW2xpdGVyYWwub3JpZ2luYWwgKyAnJ10sXG5cdCAgICAgIG9yaWdpbmFsOiBsaXRlcmFsLm9yaWdpbmFsICsgJycsXG5cdCAgICAgIGxvYzogbGl0ZXJhbC5sb2Ncblx0ICAgIH07XG5cdCAgfVxuXHR9XG5cbi8qKiovIH0pLFxuLyogNDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpWydkZWZhdWx0J107XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX2Jhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG5cdHZhciBfZXhjZXB0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5cdHZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5cdHZhciBfY29kZUdlbiA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXG5cdHZhciBfY29kZUdlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2RlR2VuKTtcblxuXHRmdW5jdGlvbiBMaXRlcmFsKHZhbHVlKSB7XG5cdCAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gSmF2YVNjcmlwdENvbXBpbGVyKCkge31cblxuXHRKYXZhU2NyaXB0Q29tcGlsZXIucHJvdG90eXBlID0ge1xuXHQgIC8vIFBVQkxJQyBBUEk6IFlvdSBjYW4gb3ZlcnJpZGUgdGhlc2UgbWV0aG9kcyBpbiBhIHN1YmNsYXNzIHRvIHByb3ZpZGVcblx0ICAvLyBhbHRlcm5hdGl2ZSBjb21waWxlZCBmb3JtcyBmb3IgbmFtZSBsb29rdXAgYW5kIGJ1ZmZlcmluZyBzZW1hbnRpY3Ncblx0ICBuYW1lTG9va3VwOiBmdW5jdGlvbiBuYW1lTG9va3VwKHBhcmVudCwgbmFtZSAvKiAsIHR5cGUqLykge1xuXHQgICAgaWYgKEphdmFTY3JpcHRDb21waWxlci5pc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZShuYW1lKSkge1xuXHQgICAgICByZXR1cm4gW3BhcmVudCwgJy4nLCBuYW1lXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBbcGFyZW50LCAnWycsIEpTT04uc3RyaW5naWZ5KG5hbWUpLCAnXSddO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgZGVwdGhlZExvb2t1cDogZnVuY3Rpb24gZGVwdGhlZExvb2t1cChuYW1lKSB7XG5cdCAgICByZXR1cm4gW3RoaXMuYWxpYXNhYmxlKCdjb250YWluZXIubG9va3VwJyksICcoZGVwdGhzLCBcIicsIG5hbWUsICdcIiknXTtcblx0ICB9LFxuXG5cdCAgY29tcGlsZXJJbmZvOiBmdW5jdGlvbiBjb21waWxlckluZm8oKSB7XG5cdCAgICB2YXIgcmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTixcblx0ICAgICAgICB2ZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbcmV2aXNpb25dO1xuXHQgICAgcmV0dXJuIFtyZXZpc2lvbiwgdmVyc2lvbnNdO1xuXHQgIH0sXG5cblx0ICBhcHBlbmRUb0J1ZmZlcjogZnVuY3Rpb24gYXBwZW5kVG9CdWZmZXIoc291cmNlLCBsb2NhdGlvbiwgZXhwbGljaXQpIHtcblx0ICAgIC8vIEZvcmNlIGEgc291cmNlIGFzIHRoaXMgc2ltcGxpZmllcyB0aGUgbWVyZ2UgbG9naWMuXG5cdCAgICBpZiAoIV91dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcblx0ICAgICAgc291cmNlID0gW3NvdXJjZV07XG5cdCAgICB9XG5cdCAgICBzb3VyY2UgPSB0aGlzLnNvdXJjZS53cmFwKHNvdXJjZSwgbG9jYXRpb24pO1xuXG5cdCAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xuXHQgICAgICByZXR1cm4gWydyZXR1cm4gJywgc291cmNlLCAnOyddO1xuXHQgICAgfSBlbHNlIGlmIChleHBsaWNpdCkge1xuXHQgICAgICAvLyBUaGlzIGlzIGEgY2FzZSB3aGVyZSB0aGUgYnVmZmVyIG9wZXJhdGlvbiBvY2N1cnMgYXMgYSBjaGlsZCBvZiBhbm90aGVyXG5cdCAgICAgIC8vIGNvbnN0cnVjdCwgZ2VuZXJhbGx5IGJyYWNlcy4gV2UgaGF2ZSB0byBleHBsaWNpdGx5IG91dHB1dCB0aGVzZSBidWZmZXJcblx0ICAgICAgLy8gb3BlcmF0aW9ucyB0byBlbnN1cmUgdGhhdCB0aGUgZW1pdHRlZCBjb2RlIGdvZXMgaW4gdGhlIGNvcnJlY3QgbG9jYXRpb24uXG5cdCAgICAgIHJldHVybiBbJ2J1ZmZlciArPSAnLCBzb3VyY2UsICc7J107XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBzb3VyY2UuYXBwZW5kVG9CdWZmZXIgPSB0cnVlO1xuXHQgICAgICByZXR1cm4gc291cmNlO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBpbml0aWFsaXplQnVmZmVyOiBmdW5jdGlvbiBpbml0aWFsaXplQnVmZmVyKCkge1xuXHQgICAgcmV0dXJuIHRoaXMucXVvdGVkU3RyaW5nKCcnKTtcblx0ICB9LFxuXHQgIC8vIEVORCBQVUJMSUMgQVBJXG5cblx0ICBjb21waWxlOiBmdW5jdGlvbiBjb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCBjb250ZXh0LCBhc09iamVjdCkge1xuXHQgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuXHQgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0ICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gdGhpcy5vcHRpb25zLnN0cmluZ1BhcmFtcztcblx0ICAgIHRoaXMudHJhY2tJZHMgPSB0aGlzLm9wdGlvbnMudHJhY2tJZHM7XG5cdCAgICB0aGlzLnByZWNvbXBpbGUgPSAhYXNPYmplY3Q7XG5cblx0ICAgIHRoaXMubmFtZSA9IHRoaXMuZW52aXJvbm1lbnQubmFtZTtcblx0ICAgIHRoaXMuaXNDaGlsZCA9ICEhY29udGV4dDtcblx0ICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge1xuXHQgICAgICBkZWNvcmF0b3JzOiBbXSxcblx0ICAgICAgcHJvZ3JhbXM6IFtdLFxuXHQgICAgICBlbnZpcm9ubWVudHM6IFtdXG5cdCAgICB9O1xuXG5cdCAgICB0aGlzLnByZWFtYmxlKCk7XG5cblx0ICAgIHRoaXMuc3RhY2tTbG90ID0gMDtcblx0ICAgIHRoaXMuc3RhY2tWYXJzID0gW107XG5cdCAgICB0aGlzLmFsaWFzZXMgPSB7fTtcblx0ICAgIHRoaXMucmVnaXN0ZXJzID0geyBsaXN0OiBbXSB9O1xuXHQgICAgdGhpcy5oYXNoZXMgPSBbXTtcblx0ICAgIHRoaXMuY29tcGlsZVN0YWNrID0gW107XG5cdCAgICB0aGlzLmlubGluZVN0YWNrID0gW107XG5cdCAgICB0aGlzLmJsb2NrUGFyYW1zID0gW107XG5cblx0ICAgIHRoaXMuY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKTtcblxuXHQgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBlbnZpcm9ubWVudC51c2VEZXB0aHMgfHwgZW52aXJvbm1lbnQudXNlRGVjb3JhdG9ycyB8fCB0aGlzLm9wdGlvbnMuY29tcGF0O1xuXHQgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgZW52aXJvbm1lbnQudXNlQmxvY2tQYXJhbXM7XG5cblx0ICAgIHZhciBvcGNvZGVzID0gZW52aXJvbm1lbnQub3Bjb2Rlcyxcblx0ICAgICAgICBvcGNvZGUgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgZmlyc3RMb2MgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgaSA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBsID0gdW5kZWZpbmVkO1xuXG5cdCAgICBmb3IgKGkgPSAwLCBsID0gb3Bjb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgb3Bjb2RlID0gb3Bjb2Rlc1tpXTtcblxuXHQgICAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSBvcGNvZGUubG9jO1xuXHQgICAgICBmaXJzdExvYyA9IGZpcnN0TG9jIHx8IG9wY29kZS5sb2M7XG5cdCAgICAgIHRoaXNbb3Bjb2RlLm9wY29kZV0uYXBwbHkodGhpcywgb3Bjb2RlLmFyZ3MpO1xuXHQgICAgfVxuXG5cdCAgICAvLyBGbHVzaCBhbnkgdHJhaWxpbmcgY29udGVudCB0aGF0IG1pZ2h0IGJlIHBlbmRpbmcuXG5cdCAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSBmaXJzdExvYztcblx0ICAgIHRoaXMucHVzaFNvdXJjZSgnJyk7XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICBpZiAodGhpcy5zdGFja1Nsb3QgfHwgdGhpcy5pbmxpbmVTdGFjay5sZW5ndGggfHwgdGhpcy5jb21waWxlU3RhY2subGVuZ3RoKSB7XG5cdCAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdDb21waWxlIGNvbXBsZXRlZCB3aXRoIGNvbnRlbnQgbGVmdCBvbiBzdGFjaycpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoIXRoaXMuZGVjb3JhdG9ycy5pc0VtcHR5KCkpIHtcblx0ICAgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblxuXHQgICAgICB0aGlzLmRlY29yYXRvcnMucHJlcGVuZCgndmFyIGRlY29yYXRvcnMgPSBjb250YWluZXIuZGVjb3JhdG9ycztcXG4nKTtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goJ3JldHVybiBmbjsnKTtcblxuXHQgICAgICBpZiAoYXNPYmplY3QpIHtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMgPSBGdW5jdGlvbi5hcHBseSh0aGlzLCBbJ2ZuJywgJ3Byb3BzJywgJ2NvbnRhaW5lcicsICdkZXB0aDAnLCAnZGF0YScsICdibG9ja1BhcmFtcycsICdkZXB0aHMnLCB0aGlzLmRlY29yYXRvcnMubWVyZ2UoKV0pO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wcmVwZW5kKCdmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGgwLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XFxuJyk7XG5cdCAgICAgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goJ31cXG4nKTtcblx0ICAgICAgICB0aGlzLmRlY29yYXRvcnMgPSB0aGlzLmRlY29yYXRvcnMubWVyZ2UoKTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5kZWNvcmF0b3JzID0gdW5kZWZpbmVkO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgZm4gPSB0aGlzLmNyZWF0ZUZ1bmN0aW9uQ29udGV4dChhc09iamVjdCk7XG5cdCAgICBpZiAoIXRoaXMuaXNDaGlsZCkge1xuXHQgICAgICB2YXIgcmV0ID0ge1xuXHQgICAgICAgIGNvbXBpbGVyOiB0aGlzLmNvbXBpbGVySW5mbygpLFxuXHQgICAgICAgIG1haW46IGZuXG5cdCAgICAgIH07XG5cblx0ICAgICAgaWYgKHRoaXMuZGVjb3JhdG9ycykge1xuXHQgICAgICAgIHJldC5tYWluX2QgPSB0aGlzLmRlY29yYXRvcnM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG5cdCAgICAgICAgcmV0LnVzZURlY29yYXRvcnMgPSB0cnVlO1xuXHQgICAgICB9XG5cblx0ICAgICAgdmFyIF9jb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXHQgICAgICB2YXIgcHJvZ3JhbXMgPSBfY29udGV4dC5wcm9ncmFtcztcblx0ICAgICAgdmFyIGRlY29yYXRvcnMgPSBfY29udGV4dC5kZWNvcmF0b3JzO1xuXG5cdCAgICAgIGZvciAoaSA9IDAsIGwgPSBwcm9ncmFtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgICBpZiAocHJvZ3JhbXNbaV0pIHtcblx0ICAgICAgICAgIHJldFtpXSA9IHByb2dyYW1zW2ldO1xuXHQgICAgICAgICAgaWYgKGRlY29yYXRvcnNbaV0pIHtcblx0ICAgICAgICAgICAgcmV0W2kgKyAnX2QnXSA9IGRlY29yYXRvcnNbaV07XG5cdCAgICAgICAgICAgIHJldC51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC51c2VQYXJ0aWFsKSB7XG5cdCAgICAgICAgcmV0LnVzZVBhcnRpYWwgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0YSkge1xuXHQgICAgICAgIHJldC51c2VEYXRhID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgICByZXQudXNlRGVwdGhzID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy51c2VCbG9ja1BhcmFtcykge1xuXHQgICAgICAgIHJldC51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcblx0ICAgICAgICByZXQuY29tcGF0ID0gdHJ1ZTtcblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICghYXNPYmplY3QpIHtcblx0ICAgICAgICByZXQuY29tcGlsZXIgPSBKU09OLnN0cmluZ2lmeShyZXQuY29tcGlsZXIpO1xuXG5cdCAgICAgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0geyBzdGFydDogeyBsaW5lOiAxLCBjb2x1bW46IDAgfSB9O1xuXHQgICAgICAgIHJldCA9IHRoaXMub2JqZWN0TGl0ZXJhbChyZXQpO1xuXG5cdCAgICAgICAgaWYgKG9wdGlvbnMuc3JjTmFtZSkge1xuXHQgICAgICAgICAgcmV0ID0gcmV0LnRvU3RyaW5nV2l0aFNvdXJjZU1hcCh7IGZpbGU6IG9wdGlvbnMuZGVzdE5hbWUgfSk7XG5cdCAgICAgICAgICByZXQubWFwID0gcmV0Lm1hcCAmJiByZXQubWFwLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJldCA9IHJldC50b1N0cmluZygpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXQuY29tcGlsZXJPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBmbjtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcHJlYW1ibGU6IGZ1bmN0aW9uIHByZWFtYmxlKCkge1xuXHQgICAgLy8gdHJhY2sgdGhlIGxhc3QgY29udGV4dCBwdXNoZWQgaW50byBwbGFjZSB0byBhbGxvdyBza2lwcGluZyB0aGVcblx0ICAgIC8vIGdldENvbnRleHQgb3Bjb2RlIHdoZW4gaXQgd291bGQgYmUgYSBub29wXG5cdCAgICB0aGlzLmxhc3RDb250ZXh0ID0gMDtcblx0ICAgIHRoaXMuc291cmNlID0gbmV3IF9jb2RlR2VuMlsnZGVmYXVsdCddKHRoaXMub3B0aW9ucy5zcmNOYW1lKTtcblx0ICAgIHRoaXMuZGVjb3JhdG9ycyA9IG5ldyBfY29kZUdlbjJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMuc3JjTmFtZSk7XG5cdCAgfSxcblxuXHQgIGNyZWF0ZUZ1bmN0aW9uQ29udGV4dDogZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25Db250ZXh0KGFzT2JqZWN0KSB7XG5cdCAgICB2YXIgdmFyRGVjbGFyYXRpb25zID0gJyc7XG5cblx0ICAgIHZhciBsb2NhbHMgPSB0aGlzLnN0YWNrVmFycy5jb25jYXQodGhpcy5yZWdpc3RlcnMubGlzdCk7XG5cdCAgICBpZiAobG9jYWxzLmxlbmd0aCA+IDApIHtcblx0ICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsICcgKyBsb2NhbHMuam9pbignLCAnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gR2VuZXJhdGUgbWluaW1pemVyIGFsaWFzIG1hcHBpbmdzXG5cdCAgICAvL1xuXHQgICAgLy8gV2hlbiB1c2luZyB0cnVlIFNvdXJjZU5vZGVzLCB0aGlzIHdpbGwgdXBkYXRlIGFsbCByZWZlcmVuY2VzIHRvIHRoZSBnaXZlbiBhbGlhc1xuXHQgICAgLy8gYXMgdGhlIHNvdXJjZSBub2RlcyBhcmUgcmV1c2VkIGluIHNpdHUuIEZvciB0aGUgbm9uLXNvdXJjZSBub2RlIGNvbXBpbGF0aW9uIG1vZGUsXG5cdCAgICAvLyBhbGlhc2VzIHdpbGwgbm90IGJlIHVzZWQsIGJ1dCB0aGlzIGNhc2UgaXMgYWxyZWFkeSBiZWluZyBydW4gb24gdGhlIGNsaWVudCBhbmRcblx0ICAgIC8vIHdlIGFyZW4ndCBjb25jZXJuIGFib3V0IG1pbmltaXppbmcgdGhlIHRlbXBsYXRlIHNpemUuXG5cdCAgICB2YXIgYWxpYXNDb3VudCA9IDA7XG5cdCAgICBmb3IgKHZhciBhbGlhcyBpbiB0aGlzLmFsaWFzZXMpIHtcblx0ICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cblx0ICAgICAgdmFyIG5vZGUgPSB0aGlzLmFsaWFzZXNbYWxpYXNdO1xuXG5cdCAgICAgIGlmICh0aGlzLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoYWxpYXMpICYmIG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5yZWZlcmVuY2VDb3VudCA+IDEpIHtcblx0ICAgICAgICB2YXJEZWNsYXJhdGlvbnMgKz0gJywgYWxpYXMnICsgKythbGlhc0NvdW50ICsgJz0nICsgYWxpYXM7XG5cdCAgICAgICAgbm9kZS5jaGlsZHJlblswXSA9ICdhbGlhcycgKyBhbGlhc0NvdW50O1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHZhciBwYXJhbXMgPSBbJ2NvbnRhaW5lcicsICdkZXB0aDAnLCAnaGVscGVycycsICdwYXJ0aWFscycsICdkYXRhJ107XG5cblx0ICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcblx0ICAgIH1cblxuXHQgICAgLy8gUGVyZm9ybSBhIHNlY29uZCBwYXNzIG92ZXIgdGhlIG91dHB1dCB0byBtZXJnZSBjb250ZW50IHdoZW4gcG9zc2libGVcblx0ICAgIHZhciBzb3VyY2UgPSB0aGlzLm1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucyk7XG5cblx0ICAgIGlmIChhc09iamVjdCkge1xuXHQgICAgICBwYXJhbXMucHVzaChzb3VyY2UpO1xuXG5cdCAgICAgIHJldHVybiBGdW5jdGlvbi5hcHBseSh0aGlzLCBwYXJhbXMpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuc291cmNlLndyYXAoWydmdW5jdGlvbignLCBwYXJhbXMuam9pbignLCcpLCAnKSB7XFxuICAnLCBzb3VyY2UsICd9J10pO1xuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWVyZ2VTb3VyY2U6IGZ1bmN0aW9uIG1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucykge1xuXHQgICAgdmFyIGlzU2ltcGxlID0gdGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSxcblx0ICAgICAgICBhcHBlbmRPbmx5ID0gIXRoaXMuZm9yY2VCdWZmZXIsXG5cdCAgICAgICAgYXBwZW5kRmlyc3QgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgc291cmNlU2VlbiA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJTdGFydCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBidWZmZXJFbmQgPSB1bmRlZmluZWQ7XG5cdCAgICB0aGlzLnNvdXJjZS5lYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG5cdCAgICAgIGlmIChsaW5lLmFwcGVuZFRvQnVmZmVyKSB7XG5cdCAgICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgICBsaW5lLnByZXBlbmQoJyAgKyAnKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgYnVmZmVyU3RhcnQgPSBsaW5lO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBidWZmZXJFbmQgPSBsaW5lO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmIChidWZmZXJTdGFydCkge1xuXHQgICAgICAgICAgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgICAgIGFwcGVuZEZpcnN0ID0gdHJ1ZTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ2J1ZmZlciArPSAnKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgICAgIGJ1ZmZlclN0YXJ0ID0gYnVmZmVyRW5kID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHNvdXJjZVNlZW4gPSB0cnVlO1xuXHQgICAgICAgIGlmICghaXNTaW1wbGUpIHtcblx0ICAgICAgICAgIGFwcGVuZE9ubHkgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBpZiAoYXBwZW5kT25seSkge1xuXHQgICAgICBpZiAoYnVmZmVyU3RhcnQpIHtcblx0ICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdyZXR1cm4gJyk7XG5cdCAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xuXHQgICAgICB9IGVsc2UgaWYgKCFzb3VyY2VTZWVuKSB7XG5cdCAgICAgICAgdGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIFwiXCI7Jyk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCBidWZmZXIgPSAnICsgKGFwcGVuZEZpcnN0ID8gJycgOiB0aGlzLmluaXRpYWxpemVCdWZmZXIoKSk7XG5cblx0ICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG5cdCAgICAgICAgYnVmZmVyU3RhcnQucHJlcGVuZCgncmV0dXJuIGJ1ZmZlciArICcpO1xuXHQgICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKCdyZXR1cm4gYnVmZmVyOycpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmICh2YXJEZWNsYXJhdGlvbnMpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHJlcGVuZCgndmFyICcgKyB2YXJEZWNsYXJhdGlvbnMuc3Vic3RyaW5nKDIpICsgKGFwcGVuZEZpcnN0ID8gJycgOiAnO1xcbicpKTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRoaXMuc291cmNlLm1lcmdlKCk7XG5cdCAgfSxcblxuXHQgIC8vIFtibG9ja1ZhbHVlXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJldHVybiB2YWx1ZSBvZiBibG9ja0hlbHBlck1pc3Npbmdcblx0ICAvL1xuXHQgIC8vIFRoZSBwdXJwb3NlIG9mIHRoaXMgb3Bjb2RlIGlzIHRvIHRha2UgYSBibG9jayBvZiB0aGUgZm9ybVxuXHQgIC8vIGB7eyN0aGlzLmZvb319Li4ue3svdGhpcy5mb299fWAsIHJlc29sdmUgdGhlIHZhbHVlIG9mIGBmb29gLCBhbmRcblx0ICAvLyByZXBsYWNlIGl0IG9uIHRoZSBzdGFjayB3aXRoIHRoZSByZXN1bHQgb2YgcHJvcGVybHlcblx0ICAvLyBpbnZva2luZyBibG9ja0hlbHBlck1pc3NpbmcuXG5cdCAgYmxvY2tWYWx1ZTogZnVuY3Rpb24gYmxvY2tWYWx1ZShuYW1lKSB7XG5cdCAgICB2YXIgYmxvY2tIZWxwZXJNaXNzaW5nID0gdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuYmxvY2tIZWxwZXJNaXNzaW5nJyksXG5cdCAgICAgICAgcGFyYW1zID0gW3RoaXMuY29udGV4dE5hbWUoMCldO1xuXHQgICAgdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgMCwgcGFyYW1zKTtcblxuXHQgICAgdmFyIGJsb2NrTmFtZSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIHBhcmFtcy5zcGxpY2UoMSwgMCwgYmxvY2tOYW1lKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFthbWJpZ3VvdXNCbG9ja1ZhbHVlXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcblx0ICAvLyBDb21waWxlciB2YWx1ZSwgYmVmb3JlOiBsYXN0SGVscGVyPXZhbHVlIG9mIGxhc3QgZm91bmQgaGVscGVyLCBpZiBhbnlcblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXIsIGlmIG5vIGxhc3RIZWxwZXI6IHNhbWUgYXMgW2Jsb2NrVmFsdWVdXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyLCBpZiBsYXN0SGVscGVyOiB2YWx1ZVxuXHQgIGFtYmlndW91c0Jsb2NrVmFsdWU6IGZ1bmN0aW9uIGFtYmlndW91c0Jsb2NrVmFsdWUoKSB7XG5cdCAgICAvLyBXZSdyZSBiZWluZyBhIGJpdCBjaGVla3kgYW5kIHJldXNpbmcgdGhlIG9wdGlvbnMgdmFsdWUgZnJvbSB0aGUgcHJpb3IgZXhlY1xuXHQgICAgdmFyIGJsb2NrSGVscGVyTWlzc2luZyA9IHRoaXMuYWxpYXNhYmxlKCdoZWxwZXJzLmJsb2NrSGVscGVyTWlzc2luZycpLFxuXHQgICAgICAgIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcblx0ICAgIHRoaXMuc2V0dXBIZWxwZXJBcmdzKCcnLCAwLCBwYXJhbXMsIHRydWUpO1xuXG5cdCAgICB0aGlzLmZsdXNoSW5saW5lKCk7XG5cblx0ICAgIHZhciBjdXJyZW50ID0gdGhpcy50b3BTdGFjaygpO1xuXHQgICAgcGFyYW1zLnNwbGljZSgxLCAwLCBjdXJyZW50KTtcblxuXHQgICAgdGhpcy5wdXNoU291cmNlKFsnaWYgKCEnLCB0aGlzLmxhc3RIZWxwZXIsICcpIHsgJywgY3VycmVudCwgJyA9ICcsIHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChibG9ja0hlbHBlck1pc3NpbmcsICdjYWxsJywgcGFyYW1zKSwgJ30nXSk7XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRDb250ZW50XVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIEFwcGVuZHMgdGhlIHN0cmluZyB2YWx1ZSBvZiBgY29udGVudGAgdG8gdGhlIGN1cnJlbnQgYnVmZmVyXG5cdCAgYXBwZW5kQ29udGVudDogZnVuY3Rpb24gYXBwZW5kQ29udGVudChjb250ZW50KSB7XG5cdCAgICBpZiAodGhpcy5wZW5kaW5nQ29udGVudCkge1xuXHQgICAgICBjb250ZW50ID0gdGhpcy5wZW5kaW5nQ29udGVudCArIGNvbnRlbnQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnBlbmRpbmdMb2NhdGlvbiA9IHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IGNvbnRlbnQ7XG5cdCAgfSxcblxuXHQgIC8vIFthcHBlbmRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cblx0ICAvL1xuXHQgIC8vIENvZXJjZXMgYHZhbHVlYCB0byBhIFN0cmluZyBhbmQgYXBwZW5kcyBpdCB0byB0aGUgY3VycmVudCBidWZmZXIuXG5cdCAgLy9cblx0ICAvLyBJZiBgdmFsdWVgIGlzIHRydXRoeSwgb3IgMCwgaXQgaXMgY29lcmNlZCBpbnRvIGEgc3RyaW5nIGFuZCBhcHBlbmRlZFxuXHQgIC8vIE90aGVyd2lzZSwgdGhlIGVtcHR5IHN0cmluZyBpcyBhcHBlbmRlZFxuXHQgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xuXHQgICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuXHQgICAgICB0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbiAoY3VycmVudCkge1xuXHQgICAgICAgIHJldHVybiBbJyAhPSBudWxsID8gJywgY3VycmVudCwgJyA6IFwiXCInXTtcblx0ICAgICAgfSk7XG5cblx0ICAgICAgdGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5wb3BTdGFjaygpKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXIgbG9jYWwgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIHRoaXMucHVzaFNvdXJjZShbJ2lmICgnLCBsb2NhbCwgJyAhPSBudWxsKSB7ICcsIHRoaXMuYXBwZW5kVG9CdWZmZXIobG9jYWwsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcblx0ICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUpIHtcblx0ICAgICAgICB0aGlzLnB1c2hTb3VyY2UoWydlbHNlIHsgJywgdGhpcy5hcHBlbmRUb0J1ZmZlcihcIicnXCIsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbYXBwZW5kRXNjYXBlZF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vXG5cdCAgLy8gRXNjYXBlIGB2YWx1ZWAgYW5kIGFwcGVuZCBpdCB0byB0aGUgYnVmZmVyXG5cdCAgYXBwZW5kRXNjYXBlZDogZnVuY3Rpb24gYXBwZW5kRXNjYXBlZCgpIHtcblx0ICAgIHRoaXMucHVzaFNvdXJjZSh0aGlzLmFwcGVuZFRvQnVmZmVyKFt0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24nKSwgJygnLCB0aGlzLnBvcFN0YWNrKCksICcpJ10pKTtcblx0ICB9LFxuXG5cdCAgLy8gW2dldENvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuXHQgIC8vIENvbXBpbGVyIHZhbHVlLCBhZnRlcjogbGFzdENvbnRleHQ9ZGVwdGhcblx0ICAvL1xuXHQgIC8vIFNldCB0aGUgdmFsdWUgb2YgdGhlIGBsYXN0Q29udGV4dGAgY29tcGlsZXIgdmFsdWUgdG8gdGhlIGRlcHRoXG5cdCAgZ2V0Q29udGV4dDogZnVuY3Rpb24gZ2V0Q29udGV4dChkZXB0aCkge1xuXHQgICAgdGhpcy5sYXN0Q29udGV4dCA9IGRlcHRoO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaENvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0LCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2hlcyB0aGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgY29udGV4dCBvbnRvIHRoZSBzdGFjay5cblx0ICBwdXNoQ29udGV4dDogZnVuY3Rpb24gcHVzaENvbnRleHQoKSB7XG5cdCAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5jb250ZXh0TmFtZSh0aGlzLmxhc3RDb250ZXh0KSk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBPbkNvbnRleHRdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0W25hbWVdLCAuLi5cblx0ICAvL1xuXHQgIC8vIExvb2tzIHVwIHRoZSB2YWx1ZSBvZiBgbmFtZWAgb24gdGhlIGN1cnJlbnQgY29udGV4dCBhbmQgcHVzaGVzXG5cdCAgLy8gaXQgb250byB0aGUgc3RhY2suXG5cdCAgbG9va3VwT25Db250ZXh0OiBmdW5jdGlvbiBsb29rdXBPbkNvbnRleHQocGFydHMsIGZhbHN5LCBzdHJpY3QsIHNjb3BlZCkge1xuXHQgICAgdmFyIGkgPSAwO1xuXG5cdCAgICBpZiAoIXNjb3BlZCAmJiB0aGlzLm9wdGlvbnMuY29tcGF0ICYmICF0aGlzLmxhc3RDb250ZXh0KSB7XG5cdCAgICAgIC8vIFRoZSBkZXB0aGVkIHF1ZXJ5IGlzIGV4cGVjdGVkIHRvIGhhbmRsZSB0aGUgdW5kZWZpbmVkIGxvZ2ljIGZvciB0aGUgcm9vdCBsZXZlbCB0aGF0XG5cdCAgICAgIC8vIGlzIGltcGxlbWVudGVkIGJlbG93LCBzbyB3ZSBldmFsdWF0ZSB0aGF0IGRpcmVjdGx5IGluIGNvbXBhdCBtb2RlXG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLmRlcHRoZWRMb29rdXAocGFydHNbaSsrXSkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoQ29udGV4dCgpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnJlc29sdmVQYXRoKCdjb250ZXh0JywgcGFydHMsIGksIGZhbHN5LCBzdHJpY3QpO1xuXHQgIH0sXG5cblx0ICAvLyBbbG9va3VwQmxvY2tQYXJhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogYmxvY2tQYXJhbVtuYW1lXSwgLi4uXG5cdCAgLy9cblx0ICAvLyBMb29rcyB1cCB0aGUgdmFsdWUgb2YgYHBhcnRzYCBvbiB0aGUgZ2l2ZW4gYmxvY2sgcGFyYW0gYW5kIHB1c2hlc1xuXHQgIC8vIGl0IG9udG8gdGhlIHN0YWNrLlxuXHQgIGxvb2t1cEJsb2NrUGFyYW06IGZ1bmN0aW9uIGxvb2t1cEJsb2NrUGFyYW0oYmxvY2tQYXJhbUlkLCBwYXJ0cykge1xuXHQgICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG5cblx0ICAgIHRoaXMucHVzaChbJ2Jsb2NrUGFyYW1zWycsIGJsb2NrUGFyYW1JZFswXSwgJ11bJywgYmxvY2tQYXJhbUlkWzFdLCAnXSddKTtcblx0ICAgIHRoaXMucmVzb2x2ZVBhdGgoJ2NvbnRleHQnLCBwYXJ0cywgMSk7XG5cdCAgfSxcblxuXHQgIC8vIFtsb29rdXBEYXRhXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBkYXRhLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2ggdGhlIGRhdGEgbG9va3VwIG9wZXJhdG9yXG5cdCAgbG9va3VwRGF0YTogZnVuY3Rpb24gbG9va3VwRGF0YShkZXB0aCwgcGFydHMsIHN0cmljdCkge1xuXHQgICAgaWYgKCFkZXB0aCkge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ2RhdGEnKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnY29udGFpbmVyLmRhdGEoZGF0YSwgJyArIGRlcHRoICsgJyknKTtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5yZXNvbHZlUGF0aCgnZGF0YScsIHBhcnRzLCAwLCB0cnVlLCBzdHJpY3QpO1xuXHQgIH0sXG5cblx0ICByZXNvbHZlUGF0aDogZnVuY3Rpb24gcmVzb2x2ZVBhdGgodHlwZSwgcGFydHMsIGksIGZhbHN5LCBzdHJpY3QpIHtcblx0ICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cblx0ICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cblx0ICAgIGlmICh0aGlzLm9wdGlvbnMuc3RyaWN0IHx8IHRoaXMub3B0aW9ucy5hc3N1bWVPYmplY3RzKSB7XG5cdCAgICAgIHRoaXMucHVzaChzdHJpY3RMb29rdXAodGhpcy5vcHRpb25zLnN0cmljdCAmJiBzdHJpY3QsIHRoaXMsIHBhcnRzLCB0eXBlKSk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdmFyIGxlbiA9IHBhcnRzLmxlbmd0aDtcblx0ICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cdCAgICAgIHRoaXMucmVwbGFjZVN0YWNrKGZ1bmN0aW9uIChjdXJyZW50KSB7XG5cdCAgICAgICAgdmFyIGxvb2t1cCA9IF90aGlzLm5hbWVMb29rdXAoY3VycmVudCwgcGFydHNbaV0sIHR5cGUpO1xuXHQgICAgICAgIC8vIFdlIHdhbnQgdG8gZW5zdXJlIHRoYXQgemVybyBhbmQgZmFsc2UgYXJlIGhhbmRsZWQgcHJvcGVybHkgaWYgdGhlIGNvbnRleHQgKGZhbHN5IGZsYWcpXG5cdCAgICAgICAgLy8gbmVlZHMgdG8gaGF2ZSB0aGUgc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhlc2UgdmFsdWVzLlxuXHQgICAgICAgIGlmICghZmFsc3kpIHtcblx0ICAgICAgICAgIHJldHVybiBbJyAhPSBudWxsID8gJywgbG9va3VwLCAnIDogJywgY3VycmVudF07XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW4gdXNlIGdlbmVyaWMgZmFsc3kgaGFuZGxpbmdcblx0ICAgICAgICAgIHJldHVybiBbJyAmJiAnLCBsb29rdXBdO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cdCAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIC8vIFtyZXNvbHZlUG9zc2libGVMYW1iZGFdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXNvbHZlZCB2YWx1ZSwgLi4uXG5cdCAgLy9cblx0ICAvLyBJZiB0aGUgYHZhbHVlYCBpcyBhIGxhbWJkYSwgcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgYnlcblx0ICAvLyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBsYW1iZGFcblx0ICByZXNvbHZlUG9zc2libGVMYW1iZGE6IGZ1bmN0aW9uIHJlc29sdmVQb3NzaWJsZUxhbWJkYSgpIHtcblx0ICAgIHRoaXMucHVzaChbdGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5sYW1iZGEnKSwgJygnLCB0aGlzLnBvcFN0YWNrKCksICcsICcsIHRoaXMuY29udGV4dE5hbWUoMCksICcpJ10pO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaFN0cmluZ1BhcmFtXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBzdHJpbmcsIGN1cnJlbnRDb250ZXh0LCAuLi5cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3Bjb2RlIGlzIGRlc2lnbmVkIGZvciB1c2UgaW4gc3RyaW5nIG1vZGUsIHdoaWNoXG5cdCAgLy8gcHJvdmlkZXMgdGhlIHN0cmluZyB2YWx1ZSBvZiBhIHBhcmFtZXRlciBhbG9uZyB3aXRoIGl0c1xuXHQgIC8vIGRlcHRoIHJhdGhlciB0aGFuIHJlc29sdmluZyBpdCBpbW1lZGlhdGVseS5cblx0ICBwdXNoU3RyaW5nUGFyYW06IGZ1bmN0aW9uIHB1c2hTdHJpbmdQYXJhbShzdHJpbmcsIHR5cGUpIHtcblx0ICAgIHRoaXMucHVzaENvbnRleHQoKTtcblx0ICAgIHRoaXMucHVzaFN0cmluZyh0eXBlKTtcblxuXHQgICAgLy8gSWYgaXQncyBhIHN1YmV4cHJlc3Npb24sIHRoZSBzdHJpbmcgcmVzdWx0XG5cdCAgICAvLyB3aWxsIGJlIHB1c2hlZCBhZnRlciB0aGlzIG9wY29kZS5cblx0ICAgIGlmICh0eXBlICE9PSAnU3ViRXhwcmVzc2lvbicpIHtcblx0ICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU3RyaW5nKHN0cmluZyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHN0cmluZyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgZW1wdHlIYXNoOiBmdW5jdGlvbiBlbXB0eUhhc2gob21pdEVtcHR5KSB7XG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hJZHNcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hDb250ZXh0c1xuXHQgICAgICB0aGlzLnB1c2goJ3t9Jyk7IC8vIGhhc2hUeXBlc1xuXHQgICAgfVxuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG9taXRFbXB0eSA/ICd1bmRlZmluZWQnIDogJ3t9Jyk7XG5cdCAgfSxcblx0ICBwdXNoSGFzaDogZnVuY3Rpb24gcHVzaEhhc2goKSB7XG5cdCAgICBpZiAodGhpcy5oYXNoKSB7XG5cdCAgICAgIHRoaXMuaGFzaGVzLnB1c2godGhpcy5oYXNoKTtcblx0ICAgIH1cblx0ICAgIHRoaXMuaGFzaCA9IHsgdmFsdWVzOiBbXSwgdHlwZXM6IFtdLCBjb250ZXh0czogW10sIGlkczogW10gfTtcblx0ICB9LFxuXHQgIHBvcEhhc2g6IGZ1bmN0aW9uIHBvcEhhc2goKSB7XG5cdCAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblx0ICAgIHRoaXMuaGFzaCA9IHRoaXMuaGFzaGVzLnBvcCgpO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2guaWRzKSk7XG5cdCAgICB9XG5cdCAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChoYXNoLmNvbnRleHRzKSk7XG5cdCAgICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC50eXBlcykpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGhhc2gudmFsdWVzKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoU3RyaW5nXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiBxdW90ZWRTdHJpbmcoc3RyaW5nKSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIGEgcXVvdGVkIHZlcnNpb24gb2YgYHN0cmluZ2Agb250byB0aGUgc3RhY2tcblx0ICBwdXNoU3RyaW5nOiBmdW5jdGlvbiBwdXNoU3RyaW5nKHN0cmluZykge1xuXHQgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucXVvdGVkU3RyaW5nKHN0cmluZykpO1xuXHQgIH0sXG5cblx0ICAvLyBbcHVzaExpdGVyYWxdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHZhbHVlLCAuLi5cblx0ICAvL1xuXHQgIC8vIFB1c2hlcyBhIHZhbHVlIG9udG8gdGhlIHN0YWNrLiBUaGlzIG9wZXJhdGlvbiBwcmV2ZW50c1xuXHQgIC8vIHRoZSBjb21waWxlciBmcm9tIGNyZWF0aW5nIGEgdGVtcG9yYXJ5IHZhcmlhYmxlIHRvIGhvbGRcblx0ICAvLyBpdC5cblx0ICBwdXNoTGl0ZXJhbDogZnVuY3Rpb24gcHVzaExpdGVyYWwodmFsdWUpIHtcblx0ICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh2YWx1ZSk7XG5cdCAgfSxcblxuXHQgIC8vIFtwdXNoUHJvZ3JhbV1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcHJvZ3JhbShndWlkKSwgLi4uXG5cdCAgLy9cblx0ICAvLyBQdXNoIGEgcHJvZ3JhbSBleHByZXNzaW9uIG9udG8gdGhlIHN0YWNrLiBUaGlzIHRha2VzXG5cdCAgLy8gYSBjb21waWxlLXRpbWUgZ3VpZCBhbmQgY29udmVydHMgaXQgaW50byBhIHJ1bnRpbWUtYWNjZXNzaWJsZVxuXHQgIC8vIGV4cHJlc3Npb24uXG5cdCAgcHVzaFByb2dyYW06IGZ1bmN0aW9uIHB1c2hQcm9ncmFtKGd1aWQpIHtcblx0ICAgIGlmIChndWlkICE9IG51bGwpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucHJvZ3JhbUV4cHJlc3Npb24oZ3VpZCkpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKG51bGwpO1xuXHQgICAgfVxuXHQgIH0sXG5cblx0ICAvLyBbcmVnaXN0ZXJEZWNvcmF0b3JdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG5cdCAgLy9cblx0ICAvLyBQb3BzIG9mZiB0aGUgZGVjb3JhdG9yJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgZGVjb3JhdG9yLFxuXHQgIC8vIGFuZCBpbnNlcnRzIHRoZSBkZWNvcmF0b3IgaW50byB0aGUgZGVjb3JhdG9ycyBsaXN0LlxuXHQgIHJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihwYXJhbVNpemUsIG5hbWUpIHtcblx0ICAgIHZhciBmb3VuZERlY29yYXRvciA9IHRoaXMubmFtZUxvb2t1cCgnZGVjb3JhdG9ycycsIG5hbWUsICdkZWNvcmF0b3InKSxcblx0ICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplKTtcblxuXHQgICAgdGhpcy5kZWNvcmF0b3JzLnB1c2goWydmbiA9ICcsIHRoaXMuZGVjb3JhdG9ycy5mdW5jdGlvbkNhbGwoZm91bmREZWNvcmF0b3IsICcnLCBbJ2ZuJywgJ3Byb3BzJywgJ2NvbnRhaW5lcicsIG9wdGlvbnNdKSwgJyB8fCBmbjsnXSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VIZWxwZXJdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuXHQgIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGhlbHBlciBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBQb3BzIG9mZiB0aGUgaGVscGVyJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgaGVscGVyLFxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIGhlbHBlcidzIHJldHVybiB2YWx1ZSBvbnRvIHRoZSBzdGFjay5cblx0ICAvL1xuXHQgIC8vIElmIHRoZSBoZWxwZXIgaXMgbm90IGZvdW5kLCBgaGVscGVyTWlzc2luZ2AgaXMgY2FsbGVkLlxuXHQgIGludm9rZUhlbHBlcjogZnVuY3Rpb24gaW52b2tlSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSwgaXNTaW1wbGUpIHtcblx0ICAgIHZhciBub25IZWxwZXIgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUpLFxuXHQgICAgICAgIHNpbXBsZSA9IGlzU2ltcGxlID8gW2hlbHBlci5uYW1lLCAnIHx8ICddIDogJyc7XG5cblx0ICAgIHZhciBsb29rdXAgPSBbJygnXS5jb25jYXQoc2ltcGxlLCBub25IZWxwZXIpO1xuXHQgICAgaWYgKCF0aGlzLm9wdGlvbnMuc3RyaWN0KSB7XG5cdCAgICAgIGxvb2t1cC5wdXNoKCcgfHwgJywgdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuaGVscGVyTWlzc2luZycpKTtcblx0ICAgIH1cblx0ICAgIGxvb2t1cC5wdXNoKCcpJyk7XG5cblx0ICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwobG9va3VwLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFtpbnZva2VLbm93bkhlbHBlcl1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG5cdCAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgaGVscGVyIGludm9jYXRpb25cblx0ICAvL1xuXHQgIC8vIFRoaXMgb3BlcmF0aW9uIGlzIHVzZWQgd2hlbiB0aGUgaGVscGVyIGlzIGtub3duIHRvIGV4aXN0LFxuXHQgIC8vIHNvIGEgYGhlbHBlck1pc3NpbmdgIGZhbGxiYWNrIGlzIG5vdCByZXF1aXJlZC5cblx0ICBpbnZva2VLbm93bkhlbHBlcjogZnVuY3Rpb24gaW52b2tlS25vd25IZWxwZXIocGFyYW1TaXplLCBuYW1lKSB7XG5cdCAgICB2YXIgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcihwYXJhbVNpemUsIG5hbWUpO1xuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChoZWxwZXIubmFtZSwgJ2NhbGwnLCBoZWxwZXIuY2FsbFBhcmFtcykpO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlQW1iaWd1b3VzXVxuXHQgIC8vXG5cdCAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBkaXNhbWJpZ3VhdGlvblxuXHQgIC8vXG5cdCAgLy8gVGhpcyBvcGVyYXRpb24gaXMgdXNlZCB3aGVuIGFuIGV4cHJlc3Npb24gbGlrZSBge3tmb299fWBcblx0ICAvLyBpcyBwcm92aWRlZCwgYnV0IHdlIGRvbid0IGtub3cgYXQgY29tcGlsZS10aW1lIHdoZXRoZXIgaXRcblx0ICAvLyBpcyBhIGhlbHBlciBvciBhIHBhdGguXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBlbWl0cyBtb3JlIGNvZGUgdGhhbiB0aGUgb3RoZXIgb3B0aW9ucyxcblx0ICAvLyBhbmQgY2FuIGJlIGF2b2lkZWQgYnkgcGFzc2luZyB0aGUgYGtub3duSGVscGVyc2AgYW5kXG5cdCAgLy8gYGtub3duSGVscGVyc09ubHlgIGZsYWdzIGF0IGNvbXBpbGUtdGltZS5cblx0ICBpbnZva2VBbWJpZ3VvdXM6IGZ1bmN0aW9uIGludm9rZUFtYmlndW91cyhuYW1lLCBoZWxwZXJDYWxsKSB7XG5cdCAgICB0aGlzLnVzZVJlZ2lzdGVyKCdoZWxwZXInKTtcblxuXHQgICAgdmFyIG5vbkhlbHBlciA9IHRoaXMucG9wU3RhY2soKTtcblxuXHQgICAgdGhpcy5lbXB0eUhhc2goKTtcblx0ICAgIHZhciBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKDAsIG5hbWUsIGhlbHBlckNhbGwpO1xuXG5cdCAgICB2YXIgaGVscGVyTmFtZSA9IHRoaXMubGFzdEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKTtcblxuXHQgICAgdmFyIGxvb2t1cCA9IFsnKCcsICcoaGVscGVyID0gJywgaGVscGVyTmFtZSwgJyB8fCAnLCBub25IZWxwZXIsICcpJ107XG5cdCAgICBpZiAoIXRoaXMub3B0aW9ucy5zdHJpY3QpIHtcblx0ICAgICAgbG9va3VwWzBdID0gJyhoZWxwZXIgPSAnO1xuXHQgICAgICBsb29rdXAucHVzaCgnICE9IG51bGwgPyBoZWxwZXIgOiAnLCB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5oZWxwZXJNaXNzaW5nJykpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLnB1c2goWycoJywgbG9va3VwLCBoZWxwZXIucGFyYW1zSW5pdCA/IFsnKSwoJywgaGVscGVyLnBhcmFtc0luaXRdIDogW10sICcpLCcsICcodHlwZW9mIGhlbHBlciA9PT0gJywgdGhpcy5hbGlhc2FibGUoJ1wiZnVuY3Rpb25cIicpLCAnID8gJywgdGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKCdoZWxwZXInLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSwgJyA6IGhlbHBlcikpJ10pO1xuXHQgIH0sXG5cblx0ICAvLyBbaW52b2tlUGFydGlhbF1cblx0ICAvL1xuXHQgIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGNvbnRleHQsIC4uLlxuXHQgIC8vIE9uIHN0YWNrIGFmdGVyOiByZXN1bHQgb2YgcGFydGlhbCBpbnZvY2F0aW9uXG5cdCAgLy9cblx0ICAvLyBUaGlzIG9wZXJhdGlvbiBwb3BzIG9mZiBhIGNvbnRleHQsIGludm9rZXMgYSBwYXJ0aWFsIHdpdGggdGhhdCBjb250ZXh0LFxuXHQgIC8vIGFuZCBwdXNoZXMgdGhlIHJlc3VsdCBvZiB0aGUgaW52b2NhdGlvbiBiYWNrLlxuXHQgIGludm9rZVBhcnRpYWw6IGZ1bmN0aW9uIGludm9rZVBhcnRpYWwoaXNEeW5hbWljLCBuYW1lLCBpbmRlbnQpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBbXSxcblx0ICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhuYW1lLCAxLCBwYXJhbXMpO1xuXG5cdCAgICBpZiAoaXNEeW5hbWljKSB7XG5cdCAgICAgIG5hbWUgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICAgIGRlbGV0ZSBvcHRpb25zLm5hbWU7XG5cdCAgICB9XG5cblx0ICAgIGlmIChpbmRlbnQpIHtcblx0ICAgICAgb3B0aW9ucy5pbmRlbnQgPSBKU09OLnN0cmluZ2lmeShpbmRlbnQpO1xuXHQgICAgfVxuXHQgICAgb3B0aW9ucy5oZWxwZXJzID0gJ2hlbHBlcnMnO1xuXHQgICAgb3B0aW9ucy5wYXJ0aWFscyA9ICdwYXJ0aWFscyc7XG5cdCAgICBvcHRpb25zLmRlY29yYXRvcnMgPSAnY29udGFpbmVyLmRlY29yYXRvcnMnO1xuXG5cdCAgICBpZiAoIWlzRHluYW1pYykge1xuXHQgICAgICBwYXJhbXMudW5zaGlmdCh0aGlzLm5hbWVMb29rdXAoJ3BhcnRpYWxzJywgbmFtZSwgJ3BhcnRpYWwnKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBwYXJhbXMudW5zaGlmdChuYW1lKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcblx0ICAgICAgb3B0aW9ucy5kZXB0aHMgPSAnZGVwdGhzJztcblx0ICAgIH1cblx0ICAgIG9wdGlvbnMgPSB0aGlzLm9iamVjdExpdGVyYWwob3B0aW9ucyk7XG5cdCAgICBwYXJhbXMucHVzaChvcHRpb25zKTtcblxuXHQgICAgdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbCgnY29udGFpbmVyLmludm9rZVBhcnRpYWwnLCAnJywgcGFyYW1zKSk7XG5cdCAgfSxcblxuXHQgIC8vIFthc3NpZ25Ub0hhc2hdXG5cdCAgLy9cblx0ICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uLCBoYXNoLCAuLi5cblx0ICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLiwgaGFzaCwgLi4uXG5cdCAgLy9cblx0ICAvLyBQb3BzIGEgdmFsdWUgb2ZmIHRoZSBzdGFjayBhbmQgYXNzaWducyBpdCB0byB0aGUgY3VycmVudCBoYXNoXG5cdCAgYXNzaWduVG9IYXNoOiBmdW5jdGlvbiBhc3NpZ25Ub0hhc2goa2V5KSB7XG5cdCAgICB2YXIgdmFsdWUgPSB0aGlzLnBvcFN0YWNrKCksXG5cdCAgICAgICAgY29udGV4dCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICB0eXBlID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIGlkID0gdW5kZWZpbmVkO1xuXG5cdCAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICBpZCA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICB0eXBlID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBjb250ZXh0ID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcblx0ICAgIGlmIChjb250ZXh0KSB7XG5cdCAgICAgIGhhc2guY29udGV4dHNba2V5XSA9IGNvbnRleHQ7XG5cdCAgICB9XG5cdCAgICBpZiAodHlwZSkge1xuXHQgICAgICBoYXNoLnR5cGVzW2tleV0gPSB0eXBlO1xuXHQgICAgfVxuXHQgICAgaWYgKGlkKSB7XG5cdCAgICAgIGhhc2guaWRzW2tleV0gPSBpZDtcblx0ICAgIH1cblx0ICAgIGhhc2gudmFsdWVzW2tleV0gPSB2YWx1ZTtcblx0ICB9LFxuXG5cdCAgcHVzaElkOiBmdW5jdGlvbiBwdXNoSWQodHlwZSwgbmFtZSwgY2hpbGQpIHtcblx0ICAgIGlmICh0eXBlID09PSAnQmxvY2tQYXJhbScpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdibG9ja1BhcmFtc1snICsgbmFtZVswXSArICddLnBhdGhbJyArIG5hbWVbMV0gKyAnXScgKyAoY2hpbGQgPyAnICsgJyArIEpTT04uc3RyaW5naWZ5KCcuJyArIGNoaWxkKSA6ICcnKSk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdQYXRoRXhwcmVzc2lvbicpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RyaW5nKG5hbWUpO1xuXHQgICAgfSBlbHNlIGlmICh0eXBlID09PSAnU3ViRXhwcmVzc2lvbicpIHtcblx0ICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCd0cnVlJyk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ251bGwnKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgLy8gSEVMUEVSU1xuXG5cdCAgY29tcGlsZXI6IEphdmFTY3JpcHRDb21waWxlcixcblxuXHQgIGNvbXBpbGVDaGlsZHJlbjogZnVuY3Rpb24gY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKSB7XG5cdCAgICB2YXIgY2hpbGRyZW4gPSBlbnZpcm9ubWVudC5jaGlsZHJlbixcblx0ICAgICAgICBjaGlsZCA9IHVuZGVmaW5lZCxcblx0ICAgICAgICBjb21waWxlciA9IHVuZGVmaW5lZDtcblxuXHQgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcblx0ICAgICAgY29tcGlsZXIgPSBuZXcgdGhpcy5jb21waWxlcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblxuXHQgICAgICB2YXIgZXhpc3RpbmcgPSB0aGlzLm1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKTtcblxuXHQgICAgICBpZiAoZXhpc3RpbmcgPT0gbnVsbCkge1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5wcm9ncmFtcy5wdXNoKCcnKTsgLy8gUGxhY2Vob2xkZXIgdG8gcHJldmVudCBuYW1lIGNvbmZsaWN0cyBmb3IgbmVzdGVkIGNoaWxkcmVuXG5cdCAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jb250ZXh0LnByb2dyYW1zLmxlbmd0aDtcblx0ICAgICAgICBjaGlsZC5pbmRleCA9IGluZGV4O1xuXHQgICAgICAgIGNoaWxkLm5hbWUgPSAncHJvZ3JhbScgKyBpbmRleDtcblx0ICAgICAgICB0aGlzLmNvbnRleHQucHJvZ3JhbXNbaW5kZXhdID0gY29tcGlsZXIuY29tcGlsZShjaGlsZCwgb3B0aW9ucywgdGhpcy5jb250ZXh0LCAhdGhpcy5wcmVjb21waWxlKTtcblx0ICAgICAgICB0aGlzLmNvbnRleHQuZGVjb3JhdG9yc1tpbmRleF0gPSBjb21waWxlci5kZWNvcmF0b3JzO1xuXHQgICAgICAgIHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaW5kZXhdID0gY2hpbGQ7XG5cblx0ICAgICAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGNvbXBpbGVyLnVzZURlcHRocztcblx0ICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBjb21waWxlci51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgICBjaGlsZC51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocztcblx0ICAgICAgICBjaGlsZC51c2VCbG9ja1BhcmFtcyA9IHRoaXMudXNlQmxvY2tQYXJhbXM7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgY2hpbGQuaW5kZXggPSBleGlzdGluZy5pbmRleDtcblx0ICAgICAgICBjaGlsZC5uYW1lID0gJ3Byb2dyYW0nICsgZXhpc3RpbmcuaW5kZXg7XG5cblx0ICAgICAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGV4aXN0aW5nLnVzZURlcHRocztcblx0ICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBleGlzdGluZy51c2VCbG9ja1BhcmFtcztcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cdCAgbWF0Y2hFeGlzdGluZ1Byb2dyYW06IGZ1bmN0aW9uIG1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jb250ZXh0LmVudmlyb25tZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgZW52aXJvbm1lbnQgPSB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2ldO1xuXHQgICAgICBpZiAoZW52aXJvbm1lbnQgJiYgZW52aXJvbm1lbnQuZXF1YWxzKGNoaWxkKSkge1xuXHQgICAgICAgIHJldHVybiBlbnZpcm9ubWVudDtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0sXG5cblx0ICBwcm9ncmFtRXhwcmVzc2lvbjogZnVuY3Rpb24gcHJvZ3JhbUV4cHJlc3Npb24oZ3VpZCkge1xuXHQgICAgdmFyIGNoaWxkID0gdGhpcy5lbnZpcm9ubWVudC5jaGlsZHJlbltndWlkXSxcblx0ICAgICAgICBwcm9ncmFtUGFyYW1zID0gW2NoaWxkLmluZGV4LCAnZGF0YScsIGNoaWxkLmJsb2NrUGFyYW1zXTtcblxuXHQgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgdGhpcy51c2VEZXB0aHMpIHtcblx0ICAgICAgcHJvZ3JhbVBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG5cdCAgICAgIHByb2dyYW1QYXJhbXMucHVzaCgnZGVwdGhzJyk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiAnY29udGFpbmVyLnByb2dyYW0oJyArIHByb2dyYW1QYXJhbXMuam9pbignLCAnKSArICcpJztcblx0ICB9LFxuXG5cdCAgdXNlUmVnaXN0ZXI6IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyKG5hbWUpIHtcblx0ICAgIGlmICghdGhpcy5yZWdpc3RlcnNbbmFtZV0pIHtcblx0ICAgICAgdGhpcy5yZWdpc3RlcnNbbmFtZV0gPSB0cnVlO1xuXHQgICAgICB0aGlzLnJlZ2lzdGVycy5saXN0LnB1c2gobmFtZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHB1c2g6IGZ1bmN0aW9uIHB1c2goZXhwcikge1xuXHQgICAgaWYgKCEoZXhwciBpbnN0YW5jZW9mIExpdGVyYWwpKSB7XG5cdCAgICAgIGV4cHIgPSB0aGlzLnNvdXJjZS53cmFwKGV4cHIpO1xuXHQgICAgfVxuXG5cdCAgICB0aGlzLmlubGluZVN0YWNrLnB1c2goZXhwcik7XG5cdCAgICByZXR1cm4gZXhwcjtcblx0ICB9LFxuXG5cdCAgcHVzaFN0YWNrTGl0ZXJhbDogZnVuY3Rpb24gcHVzaFN0YWNrTGl0ZXJhbChpdGVtKSB7XG5cdCAgICB0aGlzLnB1c2gobmV3IExpdGVyYWwoaXRlbSkpO1xuXHQgIH0sXG5cblx0ICBwdXNoU291cmNlOiBmdW5jdGlvbiBwdXNoU291cmNlKHNvdXJjZSkge1xuXHQgICAgaWYgKHRoaXMucGVuZGluZ0NvbnRlbnQpIHtcblx0ICAgICAgdGhpcy5zb3VyY2UucHVzaCh0aGlzLmFwcGVuZFRvQnVmZmVyKHRoaXMuc291cmNlLnF1b3RlZFN0cmluZyh0aGlzLnBlbmRpbmdDb250ZW50KSwgdGhpcy5wZW5kaW5nTG9jYXRpb24pKTtcblx0ICAgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IHVuZGVmaW5lZDtcblx0ICAgIH1cblxuXHQgICAgaWYgKHNvdXJjZSkge1xuXHQgICAgICB0aGlzLnNvdXJjZS5wdXNoKHNvdXJjZSk7XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHJlcGxhY2VTdGFjazogZnVuY3Rpb24gcmVwbGFjZVN0YWNrKGNhbGxiYWNrKSB7XG5cdCAgICB2YXIgcHJlZml4ID0gWycoJ10sXG5cdCAgICAgICAgc3RhY2sgPSB1bmRlZmluZWQsXG5cdCAgICAgICAgY3JlYXRlZFN0YWNrID0gdW5kZWZpbmVkLFxuXHQgICAgICAgIHVzZWRMaXRlcmFsID0gdW5kZWZpbmVkO1xuXG5cdCAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHQgICAgaWYgKCF0aGlzLmlzSW5saW5lKCkpIHtcblx0ICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ3JlcGxhY2VTdGFjayBvbiBub24taW5saW5lJyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIFdlIHdhbnQgdG8gbWVyZ2UgdGhlIGlubGluZSBzdGF0ZW1lbnQgaW50byB0aGUgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHZpYSAnLCdcblx0ICAgIHZhciB0b3AgPSB0aGlzLnBvcFN0YWNrKHRydWUpO1xuXG5cdCAgICBpZiAodG9wIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuXHQgICAgICAvLyBMaXRlcmFscyBkbyBub3QgbmVlZCB0byBiZSBpbmxpbmVkXG5cdCAgICAgIHN0YWNrID0gW3RvcC52YWx1ZV07XG5cdCAgICAgIHByZWZpeCA9IFsnKCcsIHN0YWNrXTtcblx0ICAgICAgdXNlZExpdGVyYWwgPSB0cnVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gR2V0IG9yIGNyZWF0ZSB0aGUgY3VycmVudCBzdGFjayBuYW1lIGZvciB1c2UgYnkgdGhlIGlubGluZVxuXHQgICAgICBjcmVhdGVkU3RhY2sgPSB0cnVlO1xuXHQgICAgICB2YXIgX25hbWUgPSB0aGlzLmluY3JTdGFjaygpO1xuXG5cdCAgICAgIHByZWZpeCA9IFsnKCgnLCB0aGlzLnB1c2goX25hbWUpLCAnID0gJywgdG9wLCAnKSddO1xuXHQgICAgICBzdGFjayA9IHRoaXMudG9wU3RhY2soKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIGl0ZW0gPSBjYWxsYmFjay5jYWxsKHRoaXMsIHN0YWNrKTtcblxuXHQgICAgaWYgKCF1c2VkTGl0ZXJhbCkge1xuXHQgICAgICB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cdCAgICBpZiAoY3JlYXRlZFN0YWNrKSB7XG5cdCAgICAgIHRoaXMuc3RhY2tTbG90LS07XG5cdCAgICB9XG5cdCAgICB0aGlzLnB1c2gocHJlZml4LmNvbmNhdChpdGVtLCAnKScpKTtcblx0ICB9LFxuXG5cdCAgaW5jclN0YWNrOiBmdW5jdGlvbiBpbmNyU3RhY2soKSB7XG5cdCAgICB0aGlzLnN0YWNrU2xvdCsrO1xuXHQgICAgaWYgKHRoaXMuc3RhY2tTbG90ID4gdGhpcy5zdGFja1ZhcnMubGVuZ3RoKSB7XG5cdCAgICAgIHRoaXMuc3RhY2tWYXJzLnB1c2goJ3N0YWNrJyArIHRoaXMuc3RhY2tTbG90KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzLnRvcFN0YWNrTmFtZSgpO1xuXHQgIH0sXG5cdCAgdG9wU3RhY2tOYW1lOiBmdW5jdGlvbiB0b3BTdGFja05hbWUoKSB7XG5cdCAgICByZXR1cm4gJ3N0YWNrJyArIHRoaXMuc3RhY2tTbG90O1xuXHQgIH0sXG5cdCAgZmx1c2hJbmxpbmU6IGZ1bmN0aW9uIGZsdXNoSW5saW5lKCkge1xuXHQgICAgdmFyIGlubGluZVN0YWNrID0gdGhpcy5pbmxpbmVTdGFjaztcblx0ICAgIHRoaXMuaW5saW5lU3RhY2sgPSBbXTtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpbmxpbmVTdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICB2YXIgZW50cnkgPSBpbmxpbmVTdGFja1tpXTtcblx0ICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cdCAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgICB0aGlzLmNvbXBpbGVTdGFjay5wdXNoKGVudHJ5KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLmluY3JTdGFjaygpO1xuXHQgICAgICAgIHRoaXMucHVzaFNvdXJjZShbc3RhY2ssICcgPSAnLCBlbnRyeSwgJzsnXSk7XG5cdCAgICAgICAgdGhpcy5jb21waWxlU3RhY2sucHVzaChzdGFjayk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9LFxuXHQgIGlzSW5saW5lOiBmdW5jdGlvbiBpc0lubGluZSgpIHtcblx0ICAgIHJldHVybiB0aGlzLmlubGluZVN0YWNrLmxlbmd0aDtcblx0ICB9LFxuXG5cdCAgcG9wU3RhY2s6IGZ1bmN0aW9uIHBvcFN0YWNrKHdyYXBwZWQpIHtcblx0ICAgIHZhciBpbmxpbmUgPSB0aGlzLmlzSW5saW5lKCksXG5cdCAgICAgICAgaXRlbSA9IChpbmxpbmUgPyB0aGlzLmlubGluZVN0YWNrIDogdGhpcy5jb21waWxlU3RhY2spLnBvcCgpO1xuXG5cdCAgICBpZiAoIXdyYXBwZWQgJiYgaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcblx0ICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpZiAoIWlubGluZSkge1xuXHQgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgICAgICAgaWYgKCF0aGlzLnN0YWNrU2xvdCkge1xuXHQgICAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0ludmFsaWQgc3RhY2sgcG9wJyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRoaXMuc3RhY2tTbG90LS07XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGl0ZW07XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIHRvcFN0YWNrOiBmdW5jdGlvbiB0b3BTdGFjaygpIHtcblx0ICAgIHZhciBzdGFjayA9IHRoaXMuaXNJbmxpbmUoKSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjayxcblx0ICAgICAgICBpdGVtID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cblx0ICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuXHQgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBMaXRlcmFsKSB7XG5cdCAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGl0ZW07XG5cdCAgICB9XG5cdCAgfSxcblxuXHQgIGNvbnRleHROYW1lOiBmdW5jdGlvbiBjb250ZXh0TmFtZShjb250ZXh0KSB7XG5cdCAgICBpZiAodGhpcy51c2VEZXB0aHMgJiYgY29udGV4dCkge1xuXHQgICAgICByZXR1cm4gJ2RlcHRoc1snICsgY29udGV4dCArICddJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiAnZGVwdGgnICsgY29udGV4dDtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgcXVvdGVkU3RyaW5nOiBmdW5jdGlvbiBxdW90ZWRTdHJpbmcoc3RyKSB7XG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2UucXVvdGVkU3RyaW5nKHN0cik7XG5cdCAgfSxcblxuXHQgIG9iamVjdExpdGVyYWw6IGZ1bmN0aW9uIG9iamVjdExpdGVyYWwob2JqKSB7XG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2Uub2JqZWN0TGl0ZXJhbChvYmopO1xuXHQgIH0sXG5cblx0ICBhbGlhc2FibGU6IGZ1bmN0aW9uIGFsaWFzYWJsZShuYW1lKSB7XG5cdCAgICB2YXIgcmV0ID0gdGhpcy5hbGlhc2VzW25hbWVdO1xuXHQgICAgaWYgKHJldCkge1xuXHQgICAgICByZXQucmVmZXJlbmNlQ291bnQrKztcblx0ICAgICAgcmV0dXJuIHJldDtcblx0ICAgIH1cblxuXHQgICAgcmV0ID0gdGhpcy5hbGlhc2VzW25hbWVdID0gdGhpcy5zb3VyY2Uud3JhcChuYW1lKTtcblx0ICAgIHJldC5hbGlhc2FibGUgPSB0cnVlO1xuXHQgICAgcmV0LnJlZmVyZW5jZUNvdW50ID0gMTtcblxuXHQgICAgcmV0dXJuIHJldDtcblx0ICB9LFxuXG5cdCAgc2V0dXBIZWxwZXI6IGZ1bmN0aW9uIHNldHVwSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSwgYmxvY2tIZWxwZXIpIHtcblx0ICAgIHZhciBwYXJhbXMgPSBbXSxcblx0ICAgICAgICBwYXJhbXNJbml0ID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplLCBwYXJhbXMsIGJsb2NrSGVscGVyKTtcblx0ICAgIHZhciBmb3VuZEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKSxcblx0ICAgICAgICBjYWxsQ29udGV4dCA9IHRoaXMuYWxpYXNhYmxlKHRoaXMuY29udGV4dE5hbWUoMCkgKyAnICE9IG51bGwgPyAnICsgdGhpcy5jb250ZXh0TmFtZSgwKSArICcgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KScpO1xuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBwYXJhbXM6IHBhcmFtcyxcblx0ICAgICAgcGFyYW1zSW5pdDogcGFyYW1zSW5pdCxcblx0ICAgICAgbmFtZTogZm91bmRIZWxwZXIsXG5cdCAgICAgIGNhbGxQYXJhbXM6IFtjYWxsQ29udGV4dF0uY29uY2F0KHBhcmFtcylcblx0ICAgIH07XG5cdCAgfSxcblxuXHQgIHNldHVwUGFyYW1zOiBmdW5jdGlvbiBzZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKSB7XG5cdCAgICB2YXIgb3B0aW9ucyA9IHt9LFxuXHQgICAgICAgIGNvbnRleHRzID0gW10sXG5cdCAgICAgICAgdHlwZXMgPSBbXSxcblx0ICAgICAgICBpZHMgPSBbXSxcblx0ICAgICAgICBvYmplY3RBcmdzID0gIXBhcmFtcyxcblx0ICAgICAgICBwYXJhbSA9IHVuZGVmaW5lZDtcblxuXHQgICAgaWYgKG9iamVjdEFyZ3MpIHtcblx0ICAgICAgcGFyYW1zID0gW107XG5cdCAgICB9XG5cblx0ICAgIG9wdGlvbnMubmFtZSA9IHRoaXMucXVvdGVkU3RyaW5nKGhlbHBlcik7XG5cdCAgICBvcHRpb25zLmhhc2ggPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIG9wdGlvbnMuaGFzaElkcyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgIH1cblx0ICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuXHQgICAgICBvcHRpb25zLmhhc2hUeXBlcyA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgb3B0aW9ucy5oYXNoQ29udGV4dHMgPSB0aGlzLnBvcFN0YWNrKCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBpbnZlcnNlID0gdGhpcy5wb3BTdGFjaygpLFxuXHQgICAgICAgIHByb2dyYW0gPSB0aGlzLnBvcFN0YWNrKCk7XG5cblx0ICAgIC8vIEF2b2lkIHNldHRpbmcgZm4gYW5kIGludmVyc2UgaWYgbmVpdGhlciBhcmUgc2V0LiBUaGlzIGFsbG93c1xuXHQgICAgLy8gaGVscGVycyB0byBkbyBhIGNoZWNrIGZvciBgaWYgKG9wdGlvbnMuZm4pYFxuXHQgICAgaWYgKHByb2dyYW0gfHwgaW52ZXJzZSkge1xuXHQgICAgICBvcHRpb25zLmZuID0gcHJvZ3JhbSB8fCAnY29udGFpbmVyLm5vb3AnO1xuXHQgICAgICBvcHRpb25zLmludmVyc2UgPSBpbnZlcnNlIHx8ICdjb250YWluZXIubm9vcCc7XG5cdCAgICB9XG5cblx0ICAgIC8vIFRoZSBwYXJhbWV0ZXJzIGdvIG9uIHRvIHRoZSBzdGFjayBpbiBvcmRlciAobWFraW5nIHN1cmUgdGhhdCB0aGV5IGFyZSBldmFsdWF0ZWQgaW4gb3JkZXIpXG5cdCAgICAvLyBzbyB3ZSBuZWVkIHRvIHBvcCB0aGVtIG9mZiB0aGUgc3RhY2sgaW4gcmV2ZXJzZSBvcmRlclxuXHQgICAgdmFyIGkgPSBwYXJhbVNpemU7XG5cdCAgICB3aGlsZSAoaS0tKSB7XG5cdCAgICAgIHBhcmFtID0gdGhpcy5wb3BTdGFjaygpO1xuXHQgICAgICBwYXJhbXNbaV0gPSBwYXJhbTtcblxuXHQgICAgICBpZiAodGhpcy50cmFja0lkcykge1xuXHQgICAgICAgIGlkc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcblx0ICAgICAgICB0eXBlc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgICBjb250ZXh0c1tpXSA9IHRoaXMucG9wU3RhY2soKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAob2JqZWN0QXJncykge1xuXHQgICAgICBvcHRpb25zLmFyZ3MgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHBhcmFtcyk7XG5cdCAgICB9XG5cblx0ICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG5cdCAgICAgIG9wdGlvbnMuaWRzID0gdGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShpZHMpO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG5cdCAgICAgIG9wdGlvbnMudHlwZXMgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHR5cGVzKTtcblx0ICAgICAgb3B0aW9ucy5jb250ZXh0cyA9IHRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkoY29udGV4dHMpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcblx0ICAgICAgb3B0aW9ucy5kYXRhID0gJ2RhdGEnO1xuXHQgICAgfVxuXHQgICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMpIHtcblx0ICAgICAgb3B0aW9ucy5ibG9ja1BhcmFtcyA9ICdibG9ja1BhcmFtcyc7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gb3B0aW9ucztcblx0ICB9LFxuXG5cdCAgc2V0dXBIZWxwZXJBcmdzOiBmdW5jdGlvbiBzZXR1cEhlbHBlckFyZ3MoaGVscGVyLCBwYXJhbVNpemUsIHBhcmFtcywgdXNlUmVnaXN0ZXIpIHtcblx0ICAgIHZhciBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKTtcblx0ICAgIG9wdGlvbnMgPSB0aGlzLm9iamVjdExpdGVyYWwob3B0aW9ucyk7XG5cdCAgICBpZiAodXNlUmVnaXN0ZXIpIHtcblx0ICAgICAgdGhpcy51c2VSZWdpc3Rlcignb3B0aW9ucycpO1xuXHQgICAgICBwYXJhbXMucHVzaCgnb3B0aW9ucycpO1xuXHQgICAgICByZXR1cm4gWydvcHRpb25zPScsIG9wdGlvbnNdO1xuXHQgICAgfSBlbHNlIGlmIChwYXJhbXMpIHtcblx0ICAgICAgcGFyYW1zLnB1c2gob3B0aW9ucyk7XG5cdCAgICAgIHJldHVybiAnJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBvcHRpb25zO1xuXHQgICAgfVxuXHQgIH1cblx0fTtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgIHZhciByZXNlcnZlZFdvcmRzID0gKCdicmVhayBlbHNlIG5ldyB2YXInICsgJyBjYXNlIGZpbmFsbHkgcmV0dXJuIHZvaWQnICsgJyBjYXRjaCBmb3Igc3dpdGNoIHdoaWxlJyArICcgY29udGludWUgZnVuY3Rpb24gdGhpcyB3aXRoJyArICcgZGVmYXVsdCBpZiB0aHJvdycgKyAnIGRlbGV0ZSBpbiB0cnknICsgJyBkbyBpbnN0YW5jZW9mIHR5cGVvZicgKyAnIGFic3RyYWN0IGVudW0gaW50IHNob3J0JyArICcgYm9vbGVhbiBleHBvcnQgaW50ZXJmYWNlIHN0YXRpYycgKyAnIGJ5dGUgZXh0ZW5kcyBsb25nIHN1cGVyJyArICcgY2hhciBmaW5hbCBuYXRpdmUgc3luY2hyb25pemVkJyArICcgY2xhc3MgZmxvYXQgcGFja2FnZSB0aHJvd3MnICsgJyBjb25zdCBnb3RvIHByaXZhdGUgdHJhbnNpZW50JyArICcgZGVidWdnZXIgaW1wbGVtZW50cyBwcm90ZWN0ZWQgdm9sYXRpbGUnICsgJyBkb3VibGUgaW1wb3J0IHB1YmxpYyBsZXQgeWllbGQgYXdhaXQnICsgJyBudWxsIHRydWUgZmFsc2UnKS5zcGxpdCgnICcpO1xuXG5cdCAgdmFyIGNvbXBpbGVyV29yZHMgPSBKYXZhU2NyaXB0Q29tcGlsZXIuUkVTRVJWRURfV09SRFMgPSB7fTtcblxuXHQgIGZvciAodmFyIGkgPSAwLCBsID0gcmVzZXJ2ZWRXb3Jkcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0ICAgIGNvbXBpbGVyV29yZHNbcmVzZXJ2ZWRXb3Jkc1tpXV0gPSB0cnVlO1xuXHQgIH1cblx0fSkoKTtcblxuXHRKYXZhU2NyaXB0Q29tcGlsZXIuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuXHQgIHJldHVybiAhSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTW25hbWVdICYmIC9eW2EtekEtWl8kXVswLTlhLXpBLVpfJF0qJC8udGVzdChuYW1lKTtcblx0fTtcblxuXHRmdW5jdGlvbiBzdHJpY3RMb29rdXAocmVxdWlyZVRlcm1pbmFsLCBjb21waWxlciwgcGFydHMsIHR5cGUpIHtcblx0ICB2YXIgc3RhY2sgPSBjb21waWxlci5wb3BTdGFjaygpLFxuXHQgICAgICBpID0gMCxcblx0ICAgICAgbGVuID0gcGFydHMubGVuZ3RoO1xuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIGxlbi0tO1xuXHQgIH1cblxuXHQgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgIHN0YWNrID0gY29tcGlsZXIubmFtZUxvb2t1cChzdGFjaywgcGFydHNbaV0sIHR5cGUpO1xuXHQgIH1cblxuXHQgIGlmIChyZXF1aXJlVGVybWluYWwpIHtcblx0ICAgIHJldHVybiBbY29tcGlsZXIuYWxpYXNhYmxlKCdjb250YWluZXIuc3RyaWN0JyksICcoJywgc3RhY2ssICcsICcsIGNvbXBpbGVyLnF1b3RlZFN0cmluZyhwYXJ0c1tpXSksICcpJ107XG5cdCAgfSBlbHNlIHtcblx0ICAgIHJldHVybiBzdGFjaztcblx0ICB9XG5cdH1cblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBKYXZhU2NyaXB0Q29tcGlsZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDQzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogZ2xvYmFsIGRlZmluZSAqL1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXHR2YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuXHR2YXIgU291cmNlTm9kZSA9IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHQgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdCAgaWYgKGZhbHNlKSB7XG5cdCAgICAvLyBXZSBkb24ndCBzdXBwb3J0IHRoaXMgaW4gQU1EIGVudmlyb25tZW50cy4gRm9yIHRoZXNlIGVudmlyb25tZW50cywgd2UgYXN1c21lIHRoYXRcblx0ICAgIC8vIHRoZXkgYXJlIHJ1bm5pbmcgb24gdGhlIGJyb3dzZXIgYW5kIHRodXMgaGF2ZSBubyBuZWVkIGZvciB0aGUgc291cmNlLW1hcCBsaWJyYXJ5LlxuXHQgICAgdmFyIFNvdXJjZU1hcCA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAnKTtcblx0ICAgIFNvdXJjZU5vZGUgPSBTb3VyY2VNYXAuU291cmNlTm9kZTtcblx0ICB9XG5cdH0gY2F0Y2ggKGVycikge31cblx0LyogTk9QICovXG5cblx0LyogaXN0YW5idWwgaWdub3JlIGlmOiB0ZXN0ZWQgYnV0IG5vdCBjb3ZlcmVkIGluIGlzdGFuYnVsIGR1ZSB0byBkaXN0IGJ1aWxkICAqL1xuXHRpZiAoIVNvdXJjZU5vZGUpIHtcblx0ICBTb3VyY2VOb2RlID0gZnVuY3Rpb24gKGxpbmUsIGNvbHVtbiwgc3JjRmlsZSwgY2h1bmtzKSB7XG5cdCAgICB0aGlzLnNyYyA9ICcnO1xuXHQgICAgaWYgKGNodW5rcykge1xuXHQgICAgICB0aGlzLmFkZChjaHVua3MpO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ICBTb3VyY2VOb2RlLnByb3RvdHlwZSA9IHtcblx0ICAgIGFkZDogZnVuY3Rpb24gYWRkKGNodW5rcykge1xuXHQgICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY2h1bmtzKSkge1xuXHQgICAgICAgIGNodW5rcyA9IGNodW5rcy5qb2luKCcnKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnNyYyArPSBjaHVua3M7XG5cdCAgICB9LFxuXHQgICAgcHJlcGVuZDogZnVuY3Rpb24gcHJlcGVuZChjaHVua3MpIHtcblx0ICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rcykpIHtcblx0ICAgICAgICBjaHVua3MgPSBjaHVua3Muam9pbignJyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zcmMgPSBjaHVua3MgKyB0aGlzLnNyYztcblx0ICAgIH0sXG5cdCAgICB0b1N0cmluZ1dpdGhTb3VyY2VNYXA6IGZ1bmN0aW9uIHRvU3RyaW5nV2l0aFNvdXJjZU1hcCgpIHtcblx0ICAgICAgcmV0dXJuIHsgY29kZTogdGhpcy50b1N0cmluZygpIH07XG5cdCAgICB9LFxuXHQgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHQgICAgICByZXR1cm4gdGhpcy5zcmM7XG5cdCAgICB9XG5cdCAgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNhc3RDaHVuayhjaHVuaywgY29kZUdlbiwgbG9jKSB7XG5cdCAgaWYgKF91dGlscy5pc0FycmF5KGNodW5rKSkge1xuXHQgICAgdmFyIHJldCA9IFtdO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2h1bmsubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgcmV0LnB1c2goY29kZUdlbi53cmFwKGNodW5rW2ldLCBsb2MpKTtcblx0ICAgIH1cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgY2h1bmsgPT09ICdudW1iZXInKSB7XG5cdCAgICAvLyBIYW5kbGUgcHJpbWl0aXZlcyB0aGF0IHRoZSBTb3VyY2VOb2RlIHdpbGwgdGhyb3cgdXAgb25cblx0ICAgIHJldHVybiBjaHVuayArICcnO1xuXHQgIH1cblx0ICByZXR1cm4gY2h1bms7XG5cdH1cblxuXHRmdW5jdGlvbiBDb2RlR2VuKHNyY0ZpbGUpIHtcblx0ICB0aGlzLnNyY0ZpbGUgPSBzcmNGaWxlO1xuXHQgIHRoaXMuc291cmNlID0gW107XG5cdH1cblxuXHRDb2RlR2VuLnByb3RvdHlwZSA9IHtcblx0ICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuXHQgICAgcmV0dXJuICF0aGlzLnNvdXJjZS5sZW5ndGg7XG5cdCAgfSxcblx0ICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKHNvdXJjZSwgbG9jKSB7XG5cdCAgICB0aGlzLnNvdXJjZS51bnNoaWZ0KHRoaXMud3JhcChzb3VyY2UsIGxvYykpO1xuXHQgIH0sXG5cdCAgcHVzaDogZnVuY3Rpb24gcHVzaChzb3VyY2UsIGxvYykge1xuXHQgICAgdGhpcy5zb3VyY2UucHVzaCh0aGlzLndyYXAoc291cmNlLCBsb2MpKTtcblx0ICB9LFxuXG5cdCAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKCkge1xuXHQgICAgdmFyIHNvdXJjZSA9IHRoaXMuZW1wdHkoKTtcblx0ICAgIHRoaXMuZWFjaChmdW5jdGlvbiAobGluZSkge1xuXHQgICAgICBzb3VyY2UuYWRkKFsnICAnLCBsaW5lLCAnXFxuJ10pO1xuXHQgICAgfSk7XG5cdCAgICByZXR1cm4gc291cmNlO1xuXHQgIH0sXG5cblx0ICBlYWNoOiBmdW5jdGlvbiBlYWNoKGl0ZXIpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLnNvdXJjZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpdGVyKHRoaXMuc291cmNlW2ldKTtcblx0ICAgIH1cblx0ICB9LFxuXG5cdCAgZW1wdHk6IGZ1bmN0aW9uIGVtcHR5KCkge1xuXHQgICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudExvY2F0aW9uIHx8IHsgc3RhcnQ6IHt9IH07XG5cdCAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSk7XG5cdCAgfSxcblx0ICB3cmFwOiBmdW5jdGlvbiB3cmFwKGNodW5rKSB7XG5cdCAgICB2YXIgbG9jID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jdXJyZW50TG9jYXRpb24gfHwgeyBzdGFydDoge30gfSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgaWYgKGNodW5rIGluc3RhbmNlb2YgU291cmNlTm9kZSkge1xuXHQgICAgICByZXR1cm4gY2h1bms7XG5cdCAgICB9XG5cblx0ICAgIGNodW5rID0gY2FzdENodW5rKGNodW5rLCB0aGlzLCBsb2MpO1xuXG5cdCAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSwgY2h1bmspO1xuXHQgIH0sXG5cblx0ICBmdW5jdGlvbkNhbGw6IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbChmbiwgdHlwZSwgcGFyYW1zKSB7XG5cdCAgICBwYXJhbXMgPSB0aGlzLmdlbmVyYXRlTGlzdChwYXJhbXMpO1xuXHQgICAgcmV0dXJuIHRoaXMud3JhcChbZm4sIHR5cGUgPyAnLicgKyB0eXBlICsgJygnIDogJygnLCBwYXJhbXMsICcpJ10pO1xuXHQgIH0sXG5cblx0ICBxdW90ZWRTdHJpbmc6IGZ1bmN0aW9uIHF1b3RlZFN0cmluZyhzdHIpIHtcblx0ICAgIHJldHVybiAnXCInICsgKHN0ciArICcnKS5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykucmVwbGFjZSgvXFxyL2csICdcXFxccicpLnJlcGxhY2UoL1xcdTIwMjgvZywgJ1xcXFx1MjAyOCcpIC8vIFBlciBFY21hLTI2MiA3LjMgKyA3LjguNFxuXHQgICAgLnJlcGxhY2UoL1xcdTIwMjkvZywgJ1xcXFx1MjAyOScpICsgJ1wiJztcblx0ICB9LFxuXG5cdCAgb2JqZWN0TGl0ZXJhbDogZnVuY3Rpb24gb2JqZWN0TGl0ZXJhbChvYmopIHtcblx0ICAgIHZhciBwYWlycyA9IFtdO1xuXG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdCAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgICAgIHZhciB2YWx1ZSA9IGNhc3RDaHVuayhvYmpba2V5XSwgdGhpcyk7XG5cdCAgICAgICAgaWYgKHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuXHQgICAgICAgICAgcGFpcnMucHVzaChbdGhpcy5xdW90ZWRTdHJpbmcoa2V5KSwgJzonLCB2YWx1ZV0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICB2YXIgcmV0ID0gdGhpcy5nZW5lcmF0ZUxpc3QocGFpcnMpO1xuXHQgICAgcmV0LnByZXBlbmQoJ3snKTtcblx0ICAgIHJldC5hZGQoJ30nKTtcblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfSxcblxuXHQgIGdlbmVyYXRlTGlzdDogZnVuY3Rpb24gZ2VuZXJhdGVMaXN0KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmVtcHR5KCk7XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmIChpKSB7XG5cdCAgICAgICAgcmV0LmFkZCgnLCcpO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0LmFkZChjYXN0Q2h1bmsoZW50cmllc1tpXSwgdGhpcykpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cblx0ICBnZW5lcmF0ZUFycmF5OiBmdW5jdGlvbiBnZW5lcmF0ZUFycmF5KGVudHJpZXMpIHtcblx0ICAgIHZhciByZXQgPSB0aGlzLmdlbmVyYXRlTGlzdChlbnRyaWVzKTtcblx0ICAgIHJldC5wcmVwZW5kKCdbJyk7XG5cdCAgICByZXQuYWRkKCddJyk7XG5cblx0ICAgIHJldHVybiByZXQ7XG5cdCAgfVxuXHR9O1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvZGVHZW47XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuOyIsIi8qXHJcbiAqIGVhc3ktYXV0b2NvbXBsZXRlIEFORFJFQVNcclxuICogalF1ZXJ5IHBsdWdpbiBmb3IgYXV0b2NvbXBsZXRpb25cclxuICogXHJcbiAqIEBhdXRob3IgxYF1a2FzeiBQYXdlxYJjemFrIChodHRwOi8vZ2l0aHViLmNvbS9wYXdlbGN6YWspXHJcbiAqIEB2ZXJzaW9uIDEuMy41XHJcbiAqIENvcHlyaWdodCAgTGljZW5zZTogXHJcbiAqL1xyXG5cclxuLypcclxuICogRWFzeUF1dG9jb21wbGV0ZSAtIENvbmZpZ3VyYXRpb24gXHJcbiAqL1xyXG52YXIgRWFzeUF1dG9jb21wbGV0ZSA9IChmdW5jdGlvbihzY29wZSl7XHJcblxyXG5cdHNjb3BlLkNvbmZpZ3VyYXRpb24gPSBmdW5jdGlvbiBDb25maWd1cmF0aW9uKG9wdGlvbnMpIHtcclxuXHRcdHZhciBkZWZhdWx0cyA9IHtcclxuXHRcdFx0ZGF0YTogXCJsaXN0LXJlcXVpcmVkXCIsXHJcblx0XHRcdHVybDogXCJsaXN0LXJlcXVpcmVkXCIsXHJcblx0XHRcdGRhdGFUeXBlOiBcImpzb25cIixcclxuXHJcblx0XHRcdGxpc3RMb2NhdGlvbjogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0eG1sRWxlbWVudE5hbWU6IFwiXCIsXHJcblxyXG5cdFx0XHRnZXRWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRcdHJldHVybiBlbGVtZW50O1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0YXV0b2NvbXBsZXRlT2ZmOiB0cnVlLFxyXG5cclxuXHRcdFx0cGxhY2Vob2xkZXI6IGZhbHNlLFxyXG5cclxuXHRcdFx0YWpheENhbGxiYWNrOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuXHRcdFx0bWF0Y2hSZXNwb25zZVByb3BlcnR5OiBmYWxzZSxcclxuXHJcblx0XHRcdGxpc3Q6IHtcclxuXHRcdFx0XHRzb3J0OiB7XHJcblx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZSxcclxuXHRcdFx0XHRcdG1ldGhvZDogZnVuY3Rpb24oYSwgYikge1xyXG5cdFx0XHRcdFx0XHRhID0gZGVmYXVsdHMuZ2V0VmFsdWUoYSk7XHJcblx0XHRcdFx0XHRcdGIgPSBkZWZhdWx0cy5nZXRWYWx1ZShiKTtcclxuXHRcdFx0XHRcdFx0aWYgKGEgPCBiKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChhID4gYikge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdG1heE51bWJlck9mRWxlbWVudHM6IDYsXHJcblxyXG5cdFx0XHRcdGhpZGVPbkVtcHR5UGhyYXNlOiB0cnVlLFxyXG5cclxuXHRcdFx0XHRtYXRjaDoge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2UsXHJcblx0XHRcdFx0XHRjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcclxuXHRcdFx0XHRcdG1ldGhvZDogZnVuY3Rpb24oZWxlbWVudCwgcGhyYXNlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5zZWFyY2gocGhyYXNlKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0c2hvd0FuaW1hdGlvbjoge1xyXG5cdFx0XHRcdFx0dHlwZTogXCJub3JtYWxcIiwgLy9ub3JtYWx8c2xpZGV8ZmFkZVxyXG5cdFx0XHRcdFx0dGltZTogNDAwLFxyXG5cdFx0XHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRoaWRlQW5pbWF0aW9uOiB7XHJcblx0XHRcdFx0XHR0eXBlOiBcIm5vcm1hbFwiLFxyXG5cdFx0XHRcdFx0dGltZTogNDAwLFxyXG5cdFx0XHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHQvKiBFdmVudHMgKi9cclxuXHRcdFx0XHRvbkNsaWNrRXZlbnQ6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0b25TZWxlY3RJdGVtRXZlbnQ6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0b25Mb2FkRXZlbnQ6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0b25DaG9vc2VFdmVudDogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRvbktleUVudGVyRXZlbnQ6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0b25Nb3VzZU92ZXJFdmVudDogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRvbk1vdXNlT3V0RXZlbnQ6IGZ1bmN0aW9uKCkge30sXHRcclxuXHRcdFx0XHRvblNob3dMaXN0RXZlbnQ6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0b25IaWRlTGlzdEV2ZW50OiBmdW5jdGlvbigpIHt9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRoaWdobGlnaHRQaHJhc2U6IHRydWUsXHJcblxyXG5cdFx0XHR0aGVtZTogXCJcIixcclxuXHJcblx0XHRcdGNzc0NsYXNzZXM6IFwiXCIsXHJcblxyXG5cdFx0XHRtaW5DaGFyTnVtYmVyOiAwLFxyXG5cclxuXHRcdFx0cmVxdWVzdERlbGF5OiAwLFxyXG5cclxuXHRcdFx0YWRqdXN0V2lkdGg6IHRydWUsXHJcblxyXG5cdFx0XHRhamF4U2V0dGluZ3M6IHt9LFxyXG5cclxuXHRcdFx0cHJlcGFyZVBvc3REYXRhOiBmdW5jdGlvbihkYXRhLCBpbnB1dFBocmFzZSkge3JldHVybiBkYXRhO30sXHJcblxyXG5cdFx0XHRsb2dnZXJFbmFibGVkOiB0cnVlLFxyXG5cclxuXHRcdFx0dGVtcGxhdGU6IFwiXCIsXHJcblxyXG5cdFx0XHRjYXRlZ29yaWVzQXNzaWduZWQ6IGZhbHNlLFxyXG5cclxuXHRcdFx0Y2F0ZWdvcmllczogW3tcclxuXHRcdFx0XHRtYXhOdW1iZXJPZkVsZW1lbnRzOiA0XHJcblx0XHRcdH1dXHJcblxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0dmFyIGV4dGVybmFsT2JqZWN0cyA9IFtcImFqYXhTZXR0aW5nc1wiLCBcInRlbXBsYXRlXCJdO1xyXG5cclxuXHRcdHRoaXMuZ2V0ID0gZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XHJcblx0XHRcdHJldHVybiBkZWZhdWx0c1twcm9wZXJ0eU5hbWVdO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmVxdWFscyA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XHJcblx0XHRcdGlmIChpc0Fzc2lnbmVkKG5hbWUpKSB7XHJcblx0XHRcdFx0aWYgKGRlZmF1bHRzW25hbWVdID09PSB2YWx1ZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IFxyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmNoZWNrRGF0YVVybFByb3BlcnRpZXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGRlZmF1bHRzLnVybCA9PT0gXCJsaXN0LXJlcXVpcmVkXCIgJiYgZGVmYXVsdHMuZGF0YSA9PT0gXCJsaXN0LXJlcXVpcmVkXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5jaGVja1JlcXVpcmVkUHJvcGVydGllcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gZGVmYXVsdHMpIHtcclxuXHRcdFx0XHRpZiAoZGVmYXVsdHNbcHJvcGVydHlOYW1lXSA9PT0gXCJyZXF1aXJlZFwiKSB7XHJcblx0XHRcdFx0XHRsb2dnZXIuZXJyb3IoXCJPcHRpb24gXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIiBtdXN0IGJlIGRlZmluZWRcIik7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnByaW50UHJvcGVydGllc1RoYXREb2VzbnRFeGlzdCA9IGZ1bmN0aW9uKGNvbnNvbCwgb3B0aW9uc1RvQ2hlY2spIHtcclxuXHRcdFx0cHJpbnRQcm9wZXJ0aWVzVGhhdERvZXNudEV4aXN0KGNvbnNvbCwgb3B0aW9uc1RvQ2hlY2spO1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0cHJlcGFyZURlZmF1bHRzKCk7XHJcblxyXG5cdFx0bWVyZ2VPcHRpb25zKCk7XHJcblxyXG5cdFx0aWYgKGRlZmF1bHRzLmxvZ2dlckVuYWJsZWQgPT09IHRydWUpIHtcclxuXHRcdFx0cHJpbnRQcm9wZXJ0aWVzVGhhdERvZXNudEV4aXN0KGNvbnNvbGUsIG9wdGlvbnMpO1x0XHJcblx0XHR9XHJcblxyXG5cdFx0YWRkQWpheFNldHRpbmdzKCk7XHJcblxyXG5cdFx0cHJvY2Vzc0FmdGVyTWVyZ2UoKTtcclxuXHRcdGZ1bmN0aW9uIHByZXBhcmVEZWZhdWx0cygpIHtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLmRhdGFUeXBlID09PSBcInhtbFwiKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCFvcHRpb25zLmdldFZhbHVlKSB7XHJcblxyXG5cdFx0XHRcdFx0b3B0aW9ucy5nZXRWYWx1ZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICQoZWxlbWVudCkudGV4dCgpO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICghb3B0aW9ucy5saXN0KSB7XHJcblxyXG5cdFx0XHRcdFx0b3B0aW9ucy5saXN0ID0ge307XHJcblx0XHRcdFx0fSBcclxuXHJcblx0XHRcdFx0aWYgKCFvcHRpb25zLmxpc3Quc29ydCkge1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5saXN0LnNvcnQgPSB7fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRvcHRpb25zLmxpc3Quc29ydC5tZXRob2QgPSBmdW5jdGlvbihhLCBiKSB7XHJcblx0XHRcdFx0XHRhID0gb3B0aW9ucy5nZXRWYWx1ZShhKTtcclxuXHRcdFx0XHRcdGIgPSBvcHRpb25zLmdldFZhbHVlKGIpO1xyXG5cdFx0XHRcdFx0aWYgKGEgPCBiKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChhID4gYikge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmICghb3B0aW9ucy5saXN0Lm1hdGNoKSB7XHJcblx0XHRcdFx0XHRvcHRpb25zLmxpc3QubWF0Y2ggPSB7fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMubGlzdC5tYXRjaC5tZXRob2QgPSBmdW5jdGlvbihlbGVtZW50LCBwaHJhc2UpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5zZWFyY2gocGhyYXNlKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChvcHRpb25zLmNhdGVnb3JpZXMgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmNhdGVnb3JpZXMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cclxuXHRcdFx0XHR2YXIgY2F0ZWdvcmllcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb3B0aW9ucy5jYXRlZ29yaWVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7IFxyXG5cclxuXHRcdFx0XHRcdHZhciBjYXRlZ29yeSA9IG9wdGlvbnMuY2F0ZWdvcmllc1tpXTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBkZWZhdWx0cy5jYXRlZ29yaWVzWzBdKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoY2F0ZWdvcnlbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRjYXRlZ29yeVtwcm9wZXJ0eV0gPSBkZWZhdWx0cy5jYXRlZ29yaWVzWzBdW3Byb3BlcnR5XTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRvcHRpb25zLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gbWVyZ2VPcHRpb25zKCkge1xyXG5cclxuXHRcdFx0ZGVmYXVsdHMgPSBtZXJnZU9iamVjdHMoZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gbWVyZ2VPYmplY3RzKHNvdXJjZSwgdGFyZ2V0KSB7XHJcblx0XHRcdFx0dmFyIG1lcmdlZE9iamVjdCA9IHNvdXJjZSB8fCB7fTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHNvdXJjZSkge1xyXG5cdFx0XHRcdFx0aWYgKHRhcmdldFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQgJiYgdGFyZ2V0W3Byb3BlcnR5TmFtZV0gIT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BlcnR5TmFtZV0gIT09IFwib2JqZWN0XCIgfHwgXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRbcHJvcGVydHlOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdFx0XHRcdFx0bWVyZ2VkT2JqZWN0W3Byb3BlcnR5TmFtZV0gPSB0YXJnZXRbcHJvcGVydHlOYW1lXTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRtZXJnZU9iamVjdHMoc291cmNlW3Byb3BlcnR5TmFtZV0sIHRhcmdldFtwcm9wZXJ0eU5hbWVdKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFx0LyogSWYgZGF0YSBpcyBhbiBvYmplY3QgKi9cclxuXHRcdFx0XHRpZiAodGFyZ2V0LmRhdGEgIT09IHVuZGVmaW5lZCAmJiB0YXJnZXQuZGF0YSAhPT0gbnVsbCAmJiB0eXBlb2YgdGFyZ2V0LmRhdGEgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRcdG1lcmdlZE9iamVjdC5kYXRhID0gdGFyZ2V0LmRhdGE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gbWVyZ2VkT2JqZWN0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHRcclxuXHJcblxyXG5cdFx0ZnVuY3Rpb24gcHJvY2Vzc0FmdGVyTWVyZ2UoKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZGVmYXVsdHMudXJsICE9PSBcImxpc3QtcmVxdWlyZWRcIiAmJiB0eXBlb2YgZGVmYXVsdHMudXJsICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHR2YXIgZGVmYXVsdFVybCA9IGRlZmF1bHRzLnVybDtcclxuXHRcdFx0XHRkZWZhdWx0cy51cmwgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJldHVybiBkZWZhdWx0VXJsO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChkZWZhdWx0cy5hamF4U2V0dGluZ3MudXJsICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGRlZmF1bHRzLmFqYXhTZXR0aW5ncy51cmwgIT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHZhciBkZWZhdWx0VXJsID0gZGVmYXVsdHMuYWpheFNldHRpbmdzLnVybDtcclxuXHRcdFx0XHRkZWZhdWx0cy5hamF4U2V0dGluZ3MudXJsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZGVmYXVsdFVybDtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGRlZmF1bHRzLmxpc3RMb2NhdGlvbiA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHZhciBkZWZhdWx0bGlzdExvY2F0aW9uID0gZGVmYXVsdHMubGlzdExvY2F0aW9uO1xyXG5cclxuXHRcdFx0XHRpZiAoZGVmYXVsdHMuZGF0YVR5cGUudG9VcHBlckNhc2UoKSA9PT0gXCJYTUxcIikge1xyXG5cdFx0XHRcdFx0ZGVmYXVsdHMubGlzdExvY2F0aW9uID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJChkYXRhKS5maW5kKGRlZmF1bHRsaXN0TG9jYXRpb24pO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGVmYXVsdHMubGlzdExvY2F0aW9uID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZGF0YVtkZWZhdWx0bGlzdExvY2F0aW9uXTtcclxuXHRcdFx0XHRcdH07XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0eXBlb2YgZGVmYXVsdHMuZ2V0VmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHR2YXIgZGVmYXVsdHNHZXRWYWx1ZSA9IGRlZmF1bHRzLmdldFZhbHVlO1xyXG5cdFx0XHRcdGRlZmF1bHRzLmdldFZhbHVlID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnRbZGVmYXVsdHNHZXRWYWx1ZV07XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuY2F0ZWdvcmllcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0ZGVmYXVsdHMuY2F0ZWdvcmllc0Fzc2lnbmVkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhZGRBamF4U2V0dGluZ3MoKSB7XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy5hamF4U2V0dGluZ3MgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5hamF4U2V0dGluZ3MgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRkZWZhdWx0cy5hamF4U2V0dGluZ3MgPSBvcHRpb25zLmFqYXhTZXR0aW5ncztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkZWZhdWx0cy5hamF4U2V0dGluZ3MgPSB7fTtcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGlzQXNzaWduZWQobmFtZSkge1xyXG5cdFx0XHRpZiAoZGVmYXVsdHNbbmFtZV0gIT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0c1tuYW1lXSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gcHJpbnRQcm9wZXJ0aWVzVGhhdERvZXNudEV4aXN0KGNvbnNvbCwgb3B0aW9uc1RvQ2hlY2spIHtcclxuXHRcdFx0XHJcblx0XHRcdGNoZWNrUHJvcGVydGllc0lmRXhpc3QoZGVmYXVsdHMsIG9wdGlvbnNUb0NoZWNrKTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGNoZWNrUHJvcGVydGllc0lmRXhpc3Qoc291cmNlLCB0YXJnZXQpIHtcclxuXHRcdFx0XHRmb3IodmFyIHByb3BlcnR5IGluIHRhcmdldCkge1xyXG5cdFx0XHRcdFx0aWYgKHNvdXJjZVtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2wubG9nKFwiUHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgZG9lcyBub3QgZXhpc3QgaW4gRWFzeUF1dG9jb21wbGV0ZSBvcHRpb25zIEFQSS5cIik7XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICh0eXBlb2Ygc291cmNlW3Byb3BlcnR5XSA9PT0gXCJvYmplY3RcIiAmJiAkLmluQXJyYXkocHJvcGVydHksIGV4dGVybmFsT2JqZWN0cykgPT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdGNoZWNrUHJvcGVydGllc0lmRXhpc3Qoc291cmNlW3Byb3BlcnR5XSwgdGFyZ2V0W3Byb3BlcnR5XSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gc2NvcGU7XHJcblxyXG59KShFYXN5QXV0b2NvbXBsZXRlIHx8IHt9KTtcclxuXHJcblxyXG4vKlxyXG4gKiBFYXN5QXV0b2NvbXBsZXRlIC0gTG9nZ2VyIFxyXG4gKi9cclxudmFyIEVhc3lBdXRvY29tcGxldGUgPSAoZnVuY3Rpb24oc2NvcGUpe1xyXG5cdFxyXG5cdHNjb3BlLkxvZ2dlciA9IGZ1bmN0aW9uIExvZ2dlcigpIHtcclxuXHJcblx0XHR0aGlzLmVycm9yID0gZnVuY3Rpb24obWVzc2FnZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiArIG1lc3NhZ2UpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLndhcm5pbmcgPSBmdW5jdGlvbihtZXNzYWdlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiV0FSTklORzogXCIgKyBtZXNzYWdlKTtcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHNjb3BlO1xyXG5cclxufSkoRWFzeUF1dG9jb21wbGV0ZSB8fCB7fSk7XHJcblx0XHJcblxyXG4vKlxyXG4gKiBFYXN5QXV0b2NvbXBsZXRlIC0gQ29uc3RhbnNcclxuICovXHJcbnZhciBFYXN5QXV0b2NvbXBsZXRlID0gKGZ1bmN0aW9uKHNjb3BlKXtcdFxyXG5cdFxyXG5cdHNjb3BlLkNvbnN0YW5zID0gZnVuY3Rpb24gQ29uc3RhbnMoKSB7XHJcblx0XHR2YXIgY29uc3RhbnRzID0ge1xyXG5cdFx0XHRDT05UQUlORVJfQ0xBU1M6IFwiZWFzeS1hdXRvY29tcGxldGUtY29udGFpbmVyXCIsXHJcblx0XHRcdENPTlRBSU5FUl9JRDogXCJlYWMtY29udGFpbmVyLVwiLFxyXG5cclxuXHRcdFx0V1JBUFBFUl9DU1NfQ0xBU1M6IFwiZWFzeS1hdXRvY29tcGxldGVcIlxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmdldFZhbHVlID0gZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XHJcblx0XHRcdHJldHVybiBjb25zdGFudHNbcHJvcGVydHlOYW1lXTtcclxuXHRcdH07XHJcblxyXG5cdH07XHJcblxyXG5cdHJldHVybiBzY29wZTtcclxuXHJcbn0pKEVhc3lBdXRvY29tcGxldGUgfHwge30pO1xyXG5cclxuLypcclxuICogRWFzeUF1dG9jb21wbGV0ZSAtIExpc3RCdWlsZGVyU2VydmljZSBcclxuICpcclxuICogQGF1dGhvciDFgXVrYXN6IFBhd2XFgmN6YWsgXHJcbiAqXHJcbiAqL1xyXG52YXIgRWFzeUF1dG9jb21wbGV0ZSA9IChmdW5jdGlvbihzY29wZSkge1xyXG5cclxuXHRzY29wZS5MaXN0QnVpbGRlclNlcnZpY2UgPSBmdW5jdGlvbiBMaXN0QnVpbGRlclNlcnZpY2UoY29uZmlndXJhdGlvbiwgcHJvY2Nlc3NSZXNwb25zZURhdGEpIHtcclxuXHJcblxyXG5cdFx0dGhpcy5pbml0ID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHR2YXIgbGlzdEJ1aWxkZXIgPSBbXSxcclxuXHRcdFx0XHRidWlsZGVyID0ge307XHJcblxyXG5cdFx0XHRidWlsZGVyLmRhdGEgPSBjb25maWd1cmF0aW9uLmdldChcImxpc3RMb2NhdGlvblwiKShkYXRhKTtcclxuXHRcdFx0YnVpbGRlci5nZXRWYWx1ZSA9IGNvbmZpZ3VyYXRpb24uZ2V0KFwiZ2V0VmFsdWVcIik7XHJcblx0XHRcdGJ1aWxkZXIubWF4TGlzdFNpemUgPSBjb25maWd1cmF0aW9uLmdldChcImxpc3RcIikubWF4TnVtYmVyT2ZFbGVtZW50cztcclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdGxpc3RCdWlsZGVyLnB1c2goYnVpbGRlcik7XHJcblxyXG5cdFx0XHRyZXR1cm4gbGlzdEJ1aWxkZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMudXBkYXRlQ2F0ZWdvcmllcyA9IGZ1bmN0aW9uKGxpc3RCdWlsZGVyLCBkYXRhKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoY29uZmlndXJhdGlvbi5nZXQoXCJjYXRlZ29yaWVzQXNzaWduZWRcIikpIHtcclxuXHJcblx0XHRcdFx0bGlzdEJ1aWxkZXIgPSBbXTtcclxuXHJcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNvbmZpZ3VyYXRpb24uZ2V0KFwiY2F0ZWdvcmllc1wiKS5sZW5ndGg7IGkgKz0gMSkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBidWlsZGVyID0gY29udmVydFRvTGlzdEJ1aWxkZXIoY29uZmlndXJhdGlvbi5nZXQoXCJjYXRlZ29yaWVzXCIpW2ldLCBkYXRhKTtcclxuXHJcblx0XHRcdFx0XHRsaXN0QnVpbGRlci5wdXNoKGJ1aWxkZXIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gXHJcblxyXG5cdFx0XHRyZXR1cm4gbGlzdEJ1aWxkZXI7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuY29udmVydFhtbCA9IGZ1bmN0aW9uKGxpc3RCdWlsZGVyKSB7XHJcblx0XHRcdGlmKGNvbmZpZ3VyYXRpb24uZ2V0KFwiZGF0YVR5cGVcIikudG9VcHBlckNhc2UoKSA9PT0gXCJYTUxcIikge1xyXG5cclxuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdEJ1aWxkZXIubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdFx0XHRcdGxpc3RCdWlsZGVyW2ldLmRhdGEgPSBjb252ZXJ0WG1sVG9MaXN0KGxpc3RCdWlsZGVyW2ldKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBsaXN0QnVpbGRlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5wcm9jZXNzRGF0YSA9IGZ1bmN0aW9uKGxpc3RCdWlsZGVyLCBpbnB1dFBocmFzZSkge1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdEJ1aWxkZXIubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKz0xKSB7XHJcblx0XHRcdFx0bGlzdEJ1aWxkZXJbaV0uZGF0YSA9IHByb2NjZXNzUmVzcG9uc2VEYXRhKGNvbmZpZ3VyYXRpb24sIGxpc3RCdWlsZGVyW2ldLCBpbnB1dFBocmFzZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBsaXN0QnVpbGRlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5jaGVja0lmRGF0YUV4aXN0cyA9IGZ1bmN0aW9uKGxpc3RCdWlsZGVycykge1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdEJ1aWxkZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcblxyXG5cdFx0XHRcdGlmIChsaXN0QnVpbGRlcnNbaV0uZGF0YSAhPT0gdW5kZWZpbmVkICYmIGxpc3RCdWlsZGVyc1tpXS5kYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0XHRcdGlmIChsaXN0QnVpbGRlcnNbaV0uZGF0YS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdGZ1bmN0aW9uIGNvbnZlcnRUb0xpc3RCdWlsZGVyKGNhdGVnb3J5LCBkYXRhKSB7XHJcblxyXG5cdFx0XHR2YXIgYnVpbGRlciA9IHt9O1xyXG5cclxuXHRcdFx0aWYoY29uZmlndXJhdGlvbi5nZXQoXCJkYXRhVHlwZVwiKS50b1VwcGVyQ2FzZSgpID09PSBcIlhNTFwiKSB7XHJcblxyXG5cdFx0XHRcdGJ1aWxkZXIgPSBjb252ZXJ0WG1sVG9MaXN0QnVpbGRlcigpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRidWlsZGVyID0gY29udmVydERhdGFUb0xpc3RCdWlsZGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblxyXG5cdFx0XHRpZiAoY2F0ZWdvcnkuaGVhZGVyICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRidWlsZGVyLmhlYWRlciA9IGNhdGVnb3J5LmhlYWRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNhdGVnb3J5Lm1heE51bWJlck9mRWxlbWVudHMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGJ1aWxkZXIubWF4TnVtYmVyT2ZFbGVtZW50cyA9IGNhdGVnb3J5Lm1heE51bWJlck9mRWxlbWVudHM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChjb25maWd1cmF0aW9uLmdldChcImxpc3RcIikubWF4TnVtYmVyT2ZFbGVtZW50cyAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0XHRcdGJ1aWxkZXIubWF4TGlzdFNpemUgPSBjb25maWd1cmF0aW9uLmdldChcImxpc3RcIikubWF4TnVtYmVyT2ZFbGVtZW50cztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNhdGVnb3J5LmdldFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdFx0aWYgKHR5cGVvZiBjYXRlZ29yeS5nZXRWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0dmFyIGRlZmF1bHRzR2V0VmFsdWUgPSBjYXRlZ29yeS5nZXRWYWx1ZTtcclxuXHRcdFx0XHRcdGJ1aWxkZXIuZ2V0VmFsdWUgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50W2RlZmF1bHRzR2V0VmFsdWVdO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjYXRlZ29yeS5nZXRWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0XHRidWlsZGVyLmdldFZhbHVlID0gY2F0ZWdvcnkuZ2V0VmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidWlsZGVyLmdldFZhbHVlID0gY29uZmlndXJhdGlvbi5nZXQoXCJnZXRWYWx1ZVwiKTtcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0cmV0dXJuIGJ1aWxkZXI7XHJcblxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY29udmVydFhtbFRvTGlzdEJ1aWxkZXIoKSB7XHJcblxyXG5cdFx0XHRcdHZhciBidWlsZGVyID0ge30sXHJcblx0XHRcdFx0XHRsaXN0TG9jYXRpb247XHJcblxyXG5cdFx0XHRcdGlmIChjYXRlZ29yeS54bWxFbGVtZW50TmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRidWlsZGVyLnhtbEVsZW1lbnROYW1lID0gY2F0ZWdvcnkueG1sRWxlbWVudE5hbWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoY2F0ZWdvcnkubGlzdExvY2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdFx0XHRsaXN0TG9jYXRpb24gPSBjYXRlZ29yeS5saXN0TG9jYXRpb247XHJcblx0XHRcdFx0fSBlbHNlIGlmIChjb25maWd1cmF0aW9uLmdldChcImxpc3RMb2NhdGlvblwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0XHRcdFx0bGlzdExvY2F0aW9uID0gY29uZmlndXJhdGlvbi5nZXQoXCJsaXN0TG9jYXRpb25cIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobGlzdExvY2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgbGlzdExvY2F0aW9uID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRcdGJ1aWxkZXIuZGF0YSA9ICQoZGF0YSkuZmluZChsaXN0TG9jYXRpb24pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgbGlzdExvY2F0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHJcblx0XHRcdFx0XHRcdGJ1aWxkZXIuZGF0YSA9IGxpc3RMb2NhdGlvbihkYXRhKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGJ1aWxkZXIuZGF0YSA9IGRhdGE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gYnVpbGRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGNvbnZlcnREYXRhVG9MaXN0QnVpbGRlcigpIHtcclxuXHJcblx0XHRcdFx0dmFyIGJ1aWxkZXIgPSB7fTtcclxuXHJcblx0XHRcdFx0aWYgKGNhdGVnb3J5Lmxpc3RMb2NhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjYXRlZ29yeS5saXN0TG9jYXRpb24gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdFx0YnVpbGRlci5kYXRhID0gZGF0YVtjYXRlZ29yeS5saXN0TG9jYXRpb25dO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY2F0ZWdvcnkubGlzdExvY2F0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdFx0YnVpbGRlci5kYXRhID0gY2F0ZWdvcnkubGlzdExvY2F0aW9uKGRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRidWlsZGVyLmRhdGEgPSBkYXRhO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGJ1aWxkZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjb252ZXJ0WG1sVG9MaXN0KGJ1aWxkZXIpIHtcclxuXHRcdFx0dmFyIHNpbXBsZUxpc3QgPSBbXTtcclxuXHJcblx0XHRcdGlmIChidWlsZGVyLnhtbEVsZW1lbnROYW1lID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRidWlsZGVyLnhtbEVsZW1lbnROYW1lID0gY29uZmlndXJhdGlvbi5nZXQoXCJ4bWxFbGVtZW50TmFtZVwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdCQoYnVpbGRlci5kYXRhKS5maW5kKGJ1aWxkZXIueG1sRWxlbWVudE5hbWUpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2ltcGxlTGlzdC5wdXNoKHRoaXMpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBzaW1wbGVMaXN0O1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gc2NvcGU7XHJcblxyXG59KShFYXN5QXV0b2NvbXBsZXRlIHx8IHt9KTtcclxuXHJcblxyXG4vKlxyXG4gKiBFYXN5QXV0b2NvbXBsZXRlIC0gRGF0YSBwcm9jY2VzcyBtb2R1bGVcclxuICpcclxuICogUHJvY2VzcyBsaXN0IHRvIGRpc3BsYXk6XHJcbiAqIC0gc29ydCBcclxuICogLSBkZWNyZWFzZSBudW1iZXIgdG8gc3BlY2lmaWMgbnVtYmVyXHJcbiAqIC0gc2hvdyBvbmx5IG1hdGNoaW5nIGxpc3RcclxuICpcclxuICovXHJcbnZhciBFYXN5QXV0b2NvbXBsZXRlID0gKGZ1bmN0aW9uKHNjb3BlKSB7XHJcblxyXG5cdHNjb3BlLnByb2NjZXNzID0gZnVuY3Rpb24gcHJvY2Nlc3NEYXRhKGNvbmZpZywgbGlzdEJ1aWxkZXIsIHBocmFzZSkge1xyXG5cclxuXHRcdHNjb3BlLnByb2NjZXNzLm1hdGNoID0gbWF0Y2g7XHJcblxyXG5cdFx0dmFyIGxpc3QgPSBsaXN0QnVpbGRlci5kYXRhLFxyXG5cdFx0XHRpbnB1dFBocmFzZSA9IHBocmFzZTsvL1RPRE8gUkVGQUNUT1JcclxuXHJcblx0XHRsaXN0ID0gZmluZE1hdGNoKGxpc3QsIGlucHV0UGhyYXNlKTtcclxuXHRcdGxpc3QgPSByZWR1Y2VFbGVtZW50c0luTGlzdChsaXN0KTtcclxuXHRcdGxpc3QgPSBzb3J0KGxpc3QpO1xyXG5cclxuXHRcdHJldHVybiBsaXN0O1xyXG5cclxuXHJcblx0XHRmdW5jdGlvbiBmaW5kTWF0Y2gobGlzdCwgcGhyYXNlKSB7XHJcblx0XHRcdHZhciBwcmVwYXJlZExpc3QgPSBbXSxcclxuXHRcdFx0XHR2YWx1ZSA9IFwiXCI7XHJcblxyXG5cdFx0XHRpZiAoY29uZmlnLmdldChcImxpc3RcIikubWF0Y2guZW5hYmxlZCkge1xyXG5cclxuXHRcdFx0XHRmb3IodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFsdWUgPSBjb25maWcuZ2V0KFwiZ2V0VmFsdWVcIikobGlzdFtpXSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChtYXRjaCh2YWx1ZSwgcGhyYXNlKSkge1xyXG5cdFx0XHRcdFx0XHRwcmVwYXJlZExpc3QucHVzaChsaXN0W2ldKTtcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwcmVwYXJlZExpc3QgPSBsaXN0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcHJlcGFyZWRMaXN0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG1hdGNoKHZhbHVlLCBwaHJhc2UpIHtcclxuXHJcblx0XHRcdGlmICghY29uZmlnLmdldChcImxpc3RcIikubWF0Y2guY2FzZVNlbnNpdGl2ZSkge1xyXG5cclxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cGhyYXNlID0gcGhyYXNlLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGNvbmZpZy5nZXQoXCJsaXN0XCIpLm1hdGNoLm1ldGhvZCh2YWx1ZSwgcGhyYXNlKSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlZHVjZUVsZW1lbnRzSW5MaXN0KGxpc3QpIHtcclxuXHRcdFx0aWYgKGxpc3RCdWlsZGVyLm1heE51bWJlck9mRWxlbWVudHMgIT09IHVuZGVmaW5lZCAmJiBsaXN0Lmxlbmd0aCA+IGxpc3RCdWlsZGVyLm1heE51bWJlck9mRWxlbWVudHMpIHtcclxuXHRcdFx0XHRsaXN0ID0gbGlzdC5zbGljZSgwLCBsaXN0QnVpbGRlci5tYXhOdW1iZXJPZkVsZW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGxpc3Q7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc29ydChsaXN0KSB7XHJcblx0XHRcdGlmIChjb25maWcuZ2V0KFwibGlzdFwiKS5zb3J0LmVuYWJsZWQpIHtcclxuXHRcdFx0XHRsaXN0LnNvcnQoY29uZmlnLmdldChcImxpc3RcIikuc29ydC5tZXRob2QpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH07XHJcblxyXG5cclxuXHRyZXR1cm4gc2NvcGU7XHJcblxyXG5cclxufSkoRWFzeUF1dG9jb21wbGV0ZSB8fCB7fSk7XHJcblxyXG5cclxuLypcclxuICogRWFzeUF1dG9jb21wbGV0ZSAtIFRlbXBsYXRlIFxyXG4gKlxyXG4gKiBcclxuICpcclxuICovXHJcbnZhciBFYXN5QXV0b2NvbXBsZXRlID0gKGZ1bmN0aW9uKHNjb3BlKXtcclxuXHJcblx0c2NvcGUuVGVtcGxhdGUgPSBmdW5jdGlvbiBUZW1wbGF0ZShvcHRpb25zKSB7XHJcblxyXG5cclxuXHRcdHZhciBnZW5lcmljVGVtcGxhdGVzID0ge1xyXG5cdFx0XHRiYXNpYzoge1xyXG5cdFx0XHRcdHR5cGU6IFwiYmFzaWNcIixcclxuXHRcdFx0XHRtZXRob2Q6IGZ1bmN0aW9uKGVsZW1lbnQpIHsgcmV0dXJuIGVsZW1lbnQ7IH0sXHJcblx0XHRcdFx0Y3NzQ2xhc3M6IFwiXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVzY3JpcHRpb246IHtcclxuXHRcdFx0XHR0eXBlOiBcImRlc2NyaXB0aW9uXCIsXHJcblx0XHRcdFx0ZmllbGRzOiB7XHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtZXRob2Q6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcdHJldHVybiBlbGVtZW50ICsgXCIgLSBkZXNjcmlwdGlvblwiOyB9LFxyXG5cdFx0XHRcdGNzc0NsYXNzOiBcImVhYy1kZXNjcmlwdGlvblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGljb25MZWZ0OiB7XHJcblx0XHRcdFx0dHlwZTogXCJpY29uTGVmdFwiLFxyXG5cdFx0XHRcdGZpZWxkczoge1xyXG5cdFx0XHRcdFx0aWNvbjogXCJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bWV0aG9kOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudDtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNzc0NsYXNzOiBcImVhYy1pY29uLWxlZnRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpY29uUmlnaHQ6IHtcclxuXHRcdFx0XHR0eXBlOiBcImljb25SaWdodFwiLFxyXG5cdFx0XHRcdGZpZWxkczoge1xyXG5cdFx0XHRcdFx0aWNvblNyYzogXCJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bWV0aG9kOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudDtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNzc0NsYXNzOiBcImVhYy1pY29uLXJpZ2h0XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlua3M6IHtcclxuXHRcdFx0XHR0eXBlOiBcImxpbmtzXCIsXHJcblx0XHRcdFx0ZmllbGRzOiB7XHJcblx0XHRcdFx0XHRsaW5rOiBcIlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtZXRob2Q6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y3NzQ2xhc3M6IFwiXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3VzdG9tOiB7XHJcblx0XHRcdFx0dHlwZTogXCJjdXN0b21cIixcclxuXHRcdFx0XHRtZXRob2Q6IGZ1bmN0aW9uKCkge30sXHJcblx0XHRcdFx0Y3NzQ2xhc3M6IFwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblxyXG5cclxuXHRcdC8qXHJcblx0XHQgKiBDb252ZXJ0cyBtZXRob2Qgd2l0aCB7e3RleHR9fSB0byBmdW5jdGlvblxyXG5cdFx0ICovXHJcblx0XHRjb252ZXJ0VGVtcGxhdGVUb01ldGhvZCA9IGZ1bmN0aW9uKHRlbXBsYXRlKSB7XHJcblxyXG5cclxuXHRcdFx0dmFyIF9maWVsZHMgPSB0ZW1wbGF0ZS5maWVsZHMsXHJcblx0XHRcdFx0YnVpbGRNZXRob2Q7XHJcblxyXG5cdFx0XHRpZiAodGVtcGxhdGUudHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XHJcblxyXG5cdFx0XHRcdGJ1aWxkTWV0aG9kID0gZ2VuZXJpY1RlbXBsYXRlcy5kZXNjcmlwdGlvbi5tZXRob2Q7IFxyXG5cclxuXHRcdFx0XHRpZiAodHlwZW9mIF9maWVsZHMuZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdGJ1aWxkTWV0aG9kID0gZnVuY3Rpb24oZWxlbWVudFZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50VmFsdWUgKyBcIiAtIDxzcGFuPlwiICsgZWxlbWVudFtfZmllbGRzLmRlc2NyaXB0aW9uXSArIFwiPC9zcGFuPlwiO1xyXG5cdFx0XHRcdFx0fTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgX2ZpZWxkcy5kZXNjcmlwdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0XHRidWlsZE1ldGhvZCA9IGZ1bmN0aW9uKGVsZW1lbnRWYWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudFZhbHVlICsgXCIgLSA8c3Bhbj5cIiArIF9maWVsZHMuZGVzY3JpcHRpb24oZWxlbWVudCkgKyBcIjwvc3Bhbj5cIjtcclxuXHRcdFx0XHRcdH07XHRcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBidWlsZE1ldGhvZDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRlbXBsYXRlLnR5cGUgPT09IFwiaWNvblJpZ2h0XCIpIHtcclxuXHJcblx0XHRcdFx0aWYgKHR5cGVvZiBfZmllbGRzLmljb25TcmMgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdGJ1aWxkTWV0aG9kID0gZnVuY3Rpb24oZWxlbWVudFZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50VmFsdWUgKyBcIjxpbWcgY2xhc3M9J2VhYy1pY29uJyBzcmM9J1wiICsgZWxlbWVudFtfZmllbGRzLmljb25TcmNdICsgXCInIC8+XCIgO1xyXG5cdFx0XHRcdFx0fTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgX2ZpZWxkcy5pY29uU3JjID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdGJ1aWxkTWV0aG9kID0gZnVuY3Rpb24oZWxlbWVudFZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50VmFsdWUgKyBcIjxpbWcgY2xhc3M9J2VhYy1pY29uJyBzcmM9J1wiICsgX2ZpZWxkcy5pY29uU3JjKGVsZW1lbnQpICsgXCInIC8+XCIgO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBidWlsZE1ldGhvZDtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdGlmICh0ZW1wbGF0ZS50eXBlID09PSBcImljb25MZWZ0XCIpIHtcclxuXHJcblx0XHRcdFx0aWYgKHR5cGVvZiBfZmllbGRzLmljb25TcmMgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdGJ1aWxkTWV0aG9kID0gZnVuY3Rpb24oZWxlbWVudFZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBcIjxpbWcgY2xhc3M9J2VhYy1pY29uJyBzcmM9J1wiICsgZWxlbWVudFtfZmllbGRzLmljb25TcmNdICsgXCInIC8+XCIgKyBlbGVtZW50VmFsdWU7XHJcblx0XHRcdFx0XHR9O1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBfZmllbGRzLmljb25TcmMgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdFx0YnVpbGRNZXRob2QgPSBmdW5jdGlvbihlbGVtZW50VmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiPGltZyBjbGFzcz0nZWFjLWljb24nIHNyYz0nXCIgKyBfZmllbGRzLmljb25TcmMoZWxlbWVudCkgKyBcIicgLz5cIiArIGVsZW1lbnRWYWx1ZTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gYnVpbGRNZXRob2Q7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRlbXBsYXRlLnR5cGUgPT09IFwibGlua3NcIikge1xyXG5cclxuXHRcdFx0XHRpZiAodHlwZW9mIF9maWVsZHMubGluayA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0YnVpbGRNZXRob2QgPSBmdW5jdGlvbihlbGVtZW50VmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiPGEgaHJlZj0nXCIgKyBlbGVtZW50W19maWVsZHMubGlua10gKyBcIicgPlwiICsgZWxlbWVudFZhbHVlICsgXCI8L2E+XCI7XHJcblx0XHRcdFx0XHR9O1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBfZmllbGRzLmxpbmsgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdFx0YnVpbGRNZXRob2QgPSBmdW5jdGlvbihlbGVtZW50VmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiPGEgaHJlZj0nXCIgKyBfZmllbGRzLmxpbmsoZWxlbWVudCkgKyBcIicgPlwiICsgZWxlbWVudFZhbHVlICsgXCI8L2E+XCI7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGJ1aWxkTWV0aG9kO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0aWYgKHRlbXBsYXRlLnR5cGUgPT09IFwiY3VzdG9tXCIpIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlLm1ldGhvZDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGdlbmVyaWNUZW1wbGF0ZXMuYmFzaWMubWV0aG9kO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdHByZXBhcmVCdWlsZE1ldGhvZCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0aWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnR5cGUpIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGdlbmVyaWNUZW1wbGF0ZXMuYmFzaWMubWV0aG9kO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy50eXBlICYmIGdlbmVyaWNUZW1wbGF0ZXNbb3B0aW9ucy50eXBlXSkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gY29udmVydFRlbXBsYXRlVG9NZXRob2Qob3B0aW9ucyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBnZW5lcmljVGVtcGxhdGVzLmJhc2ljLm1ldGhvZDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dGVtcGxhdGVDbGFzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0dmFyIGVtcHR5U3RyaW5nRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtyZXR1cm4gXCJcIjt9O1xyXG5cclxuXHRcdFx0aWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnR5cGUpIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGVtcHR5U3RyaW5nRnVuY3Rpb247XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvcHRpb25zLnR5cGUgJiYgZ2VuZXJpY1RlbXBsYXRlc1tvcHRpb25zLnR5cGVdKSB7XHJcblx0XHRcdFx0cmV0dXJuIChmdW5jdGlvbiAoKSB7IFxyXG5cdFx0XHRcdFx0dmFyIF9jc3NDbGFzcyA9IGdlbmVyaWNUZW1wbGF0ZXNbb3B0aW9ucy50eXBlXS5jc3NDbGFzcztcclxuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9jc3NDbGFzczt9O1xyXG5cdFx0XHRcdH0pKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGVtcHR5U3RyaW5nRnVuY3Rpb247XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cclxuXHRcdHRoaXMuZ2V0VGVtcGxhdGVDbGFzcyA9IHRlbXBsYXRlQ2xhc3Mob3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5idWlsZCA9IHByZXBhcmVCdWlsZE1ldGhvZChvcHRpb25zKTtcclxuXHJcblxyXG5cdH07XHJcblxyXG5cdHJldHVybiBzY29wZTtcclxuXHJcbn0pKEVhc3lBdXRvY29tcGxldGUgfHwge30pO1xyXG5cclxuXHJcbi8qXHJcbiAqIEVhc3lBdXRvY29tcGxldGUgLSBqUXVlcnkgcGx1Z2luIGZvciBhdXRvY29tcGxldGlvblxyXG4gKlxyXG4gKi9cclxudmFyIEVhc3lBdXRvY29tcGxldGUgPSAoZnVuY3Rpb24oc2NvcGUpIHtcclxuXHJcblx0XHJcblx0c2NvcGUubWFpbiA9IGZ1bmN0aW9uIENvcmUoJGlucHV0LCBvcHRpb25zKSB7XHJcblx0XHRcdFx0XHJcblx0XHR2YXIgbW9kdWxlID0ge1xyXG5cdFx0XHRcdG5hbWU6IFwiRWFzeUF1dG9jb21wbGV0ZVwiLFxyXG5cdFx0XHRcdHNob3J0Y3V0OiBcImVhY1wiXHJcblx0XHRcdH07XHJcblxyXG5cdFx0dmFyIGNvbnN0cyA9IG5ldyBzY29wZS5Db25zdGFucygpLFxyXG5cdFx0XHRjb25maWcgPSBuZXcgc2NvcGUuQ29uZmlndXJhdGlvbihvcHRpb25zKSxcclxuXHRcdFx0bG9nZ2VyID0gbmV3IHNjb3BlLkxvZ2dlcigpLFxyXG5cdFx0XHR0ZW1wbGF0ZSA9IG5ldyBzY29wZS5UZW1wbGF0ZShvcHRpb25zLnRlbXBsYXRlKSxcclxuXHRcdFx0bGlzdEJ1aWxkZXJTZXJ2aWNlID0gbmV3IHNjb3BlLkxpc3RCdWlsZGVyU2VydmljZShjb25maWcsIHNjb3BlLnByb2NjZXNzKSxcclxuXHRcdFx0Y2hlY2tQYXJhbSA9IGNvbmZpZy5lcXVhbHMsXHJcblxyXG5cdFx0XHQkZmllbGQgPSAkaW5wdXQsIFxyXG5cdFx0XHQkY29udGFpbmVyID0gXCJcIixcclxuXHRcdFx0ZWxlbWVudHNMaXN0ID0gW10sXHJcblx0XHRcdHNlbGVjdGVkRWxlbWVudCA9IC0xLFxyXG5cdFx0XHRyZXF1ZXN0RGVsYXlUaW1lb3V0SWQ7XHJcblxyXG5cdFx0c2NvcGUuY29uc3RzID0gY29uc3RzO1xyXG5cclxuXHRcdHRoaXMuZ2V0Q29uc3RhbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBjb25zdHM7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZ2V0Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gY29uZmlnO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJGNvbnRhaW5lcjtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5nZXRTZWxlY3RlZEl0ZW1JbmRleCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRFbGVtZW50O1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmdldEl0ZW1zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gZWxlbWVudHNMaXN0O1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmdldEl0ZW1EYXRhID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcblx0XHRcdGlmIChlbGVtZW50c0xpc3QubGVuZ3RoIDwgaW5kZXggfHwgZWxlbWVudHNMaXN0W2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBlbGVtZW50c0xpc3RbaW5kZXhdO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZ2V0U2VsZWN0ZWRJdGVtRGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRJdGVtRGF0YShzZWxlY3RlZEVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmJ1aWxkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHByZXBhcmVGaWVsZCgpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmluaXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0aW5pdCgpO1xyXG5cdFx0fTtcclxuXHRcdGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG5cdFx0XHRpZiAoJGZpZWxkLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdGxvZ2dlci5lcnJvcihcIklucHV0IGZpZWxkIGRvZXNuJ3QgZXhpc3QuXCIpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFjb25maWcuY2hlY2tEYXRhVXJsUHJvcGVydGllcygpKSB7XHJcblx0XHRcdFx0bG9nZ2VyLmVycm9yKFwiT25lIG9mIG9wdGlvbnMgdmFyaWFibGVzICdkYXRhJyBvciAndXJsJyBtdXN0IGJlIGRlZmluZWQuXCIpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFjb25maWcuY2hlY2tSZXF1aXJlZFByb3BlcnRpZXMoKSkge1xyXG5cdFx0XHRcdGxvZ2dlci5lcnJvcihcIldpbGwgbm90IHdvcmsgd2l0aG91dCBtZW50aW9uZWQgcHJvcGVydGllcy5cIik7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0cHJlcGFyZUZpZWxkKCk7XHJcblx0XHRcdGJpbmRFdmVudHMoKTtcdFxyXG5cclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIHByZXBhcmVGaWVsZCgpIHtcclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdGlmICgkZmllbGQucGFyZW50KCkuaGFzQ2xhc3MoY29uc3RzLmdldFZhbHVlKFwiV1JBUFBFUl9DU1NfQ0xBU1NcIikpKSB7XHJcblx0XHRcdFx0cmVtb3ZlQ29udGFpbmVyKCk7XHJcblx0XHRcdFx0cmVtb3ZlV3JhcHBlcigpO1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRcclxuXHRcdFx0Y3JlYXRlV3JhcHBlcigpO1xyXG5cdFx0XHRjcmVhdGVDb250YWluZXIoKTtcdFxyXG5cclxuXHRcdFx0JGNvbnRhaW5lciA9ICQoXCIjXCIgKyBnZXRDb250YWluZXJJZCgpKTtcclxuXHRcdFx0aWYgKGNvbmZpZy5nZXQoXCJwbGFjZWhvbGRlclwiKSkge1xyXG5cdFx0XHRcdCRmaWVsZC5hdHRyKFwicGxhY2Vob2xkZXJcIiwgY29uZmlnLmdldChcInBsYWNlaG9sZGVyXCIpKTtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXIoKSB7XHJcblx0XHRcdFx0dmFyICR3cmFwcGVyID0gJChcIjxkaXY+XCIpLFxyXG5cdFx0XHRcdFx0Y2xhc3NlcyA9IGNvbnN0cy5nZXRWYWx1ZShcIldSQVBQRVJfQ1NTX0NMQVNTXCIpO1xyXG5cclxuXHRcdFx0XHJcblx0XHRcdFx0aWYgKGNvbmZpZy5nZXQoXCJ0aGVtZVwiKSAmJiBjb25maWcuZ2V0KFwidGhlbWVcIikgIT09IFwiXCIpIHtcclxuXHRcdFx0XHRcdGNsYXNzZXMgKz0gXCIgZWFjLVwiICsgY29uZmlnLmdldChcInRoZW1lXCIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGNvbmZpZy5nZXQoXCJjc3NDbGFzc2VzXCIpICYmIGNvbmZpZy5nZXQoXCJjc3NDbGFzc2VzXCIpICE9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgY29uZmlnLmdldChcImNzc0NsYXNzZXNcIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGVtcGxhdGUuZ2V0VGVtcGxhdGVDbGFzcygpICE9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRjbGFzc2VzICs9IFwiIFwiICsgdGVtcGxhdGUuZ2V0VGVtcGxhdGVDbGFzcygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0JHdyYXBwZXJcclxuXHRcdFx0XHRcdC5hZGRDbGFzcyhjbGFzc2VzKTtcclxuXHRcdFx0XHQkZmllbGQud3JhcCgkd3JhcHBlcik7XHJcblxyXG5cclxuXHRcdFx0XHRpZiAoY29uZmlnLmdldChcImFkanVzdFdpZHRoXCIpID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRhZGp1c3RXcmFwcGVyV2lkdGgoKTtcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGFkanVzdFdyYXBwZXJXaWR0aCgpIHtcclxuXHRcdFx0XHR2YXIgZmllbGRXaWR0aCA9ICRmaWVsZC5vdXRlcldpZHRoKCk7XHJcblxyXG5cdFx0XHRcdCRmaWVsZC5wYXJlbnQoKS5jc3MoXCJ3aWR0aFwiLCBmaWVsZFdpZHRoKTtcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiByZW1vdmVXcmFwcGVyKCkge1xyXG5cdFx0XHRcdCRmaWVsZC51bndyYXAoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKCkge1xyXG5cdFx0XHRcdHZhciAkZWxlbWVudHNfY29udGFpbmVyID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKGNvbnN0cy5nZXRWYWx1ZShcIkNPTlRBSU5FUl9DTEFTU1wiKSk7XHJcblxyXG5cdFx0XHRcdCRlbGVtZW50c19jb250YWluZXJcclxuXHRcdFx0XHRcdFx0LmF0dHIoXCJpZFwiLCBnZXRDb250YWluZXJJZCgpKVxyXG5cdFx0XHRcdFx0XHQucHJlcGVuZCgkKFwiPHVsPlwiKSk7XHJcblxyXG5cclxuXHRcdFx0XHQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0JGVsZW1lbnRzX2NvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHQvKiBMaXN0IHNob3cgYW5pbWF0aW9uICovXHJcblx0XHRcdFx0XHRcdC5vbihcInNob3cuZWFjXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2goY29uZmlnLmdldChcImxpc3RcIikuc2hvd0FuaW1hdGlvbi50eXBlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcInNsaWRlXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBhbmltYXRpb25UaW1lID0gY29uZmlnLmdldChcImxpc3RcIikuc2hvd0FuaW1hdGlvbi50aW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gY29uZmlnLmdldChcImxpc3RcIikuc2hvd0FuaW1hdGlvbi5jYWxsYmFjaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdCRlbGVtZW50c19jb250YWluZXIuZmluZChcInVsXCIpLnNsaWRlRG93bihhbmltYXRpb25UaW1lLCBjYWxsYmFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiZmFkZVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYW5pbWF0aW9uVGltZSA9IGNvbmZpZy5nZXQoXCJsaXN0XCIpLnNob3dBbmltYXRpb24udGltZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYWxsYmFjayA9IGNvbmZpZy5nZXQoXCJsaXN0XCIpLnNob3dBbmltYXRpb24uY2FsbGJhY2s7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxlbWVudHNfY29udGFpbmVyLmZpbmQoXCJ1bFwiKS5mYWRlSW4oYW5pbWF0aW9uVGltZSksIGNhbGxiYWNrO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsZW1lbnRzX2NvbnRhaW5lci5maW5kKFwidWxcIikuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRjb25maWcuZ2V0KFwibGlzdFwiKS5vblNob3dMaXN0RXZlbnQoKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LyogTGlzdCBoaWRlIGFuaW1hdGlvbiAqL1xyXG5cdFx0XHRcdFx0XHQub24oXCJoaWRlLmVhY1wiLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoKGNvbmZpZy5nZXQoXCJsaXN0XCIpLmhpZGVBbmltYXRpb24udHlwZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJzbGlkZVwiOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYW5pbWF0aW9uVGltZSA9IGNvbmZpZy5nZXQoXCJsaXN0XCIpLmhpZGVBbmltYXRpb24udGltZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYWxsYmFjayA9IGNvbmZpZy5nZXQoXCJsaXN0XCIpLmhpZGVBbmltYXRpb24uY2FsbGJhY2s7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxlbWVudHNfY29udGFpbmVyLmZpbmQoXCJ1bFwiKS5zbGlkZVVwKGFuaW1hdGlvblRpbWUsIGNhbGxiYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJmYWRlXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBhbmltYXRpb25UaW1lID0gY29uZmlnLmdldChcImxpc3RcIikuaGlkZUFuaW1hdGlvbi50aW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gY29uZmlnLmdldChcImxpc3RcIikuaGlkZUFuaW1hdGlvbi5jYWxsYmFjaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdCRlbGVtZW50c19jb250YWluZXIuZmluZChcInVsXCIpLmZhZGVPdXQoYW5pbWF0aW9uVGltZSwgY2FsbGJhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsZW1lbnRzX2NvbnRhaW5lci5maW5kKFwidWxcIikuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRjb25maWcuZ2V0KFwibGlzdFwiKS5vbkhpZGVMaXN0RXZlbnQoKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5vbihcInNlbGVjdEVsZW1lbnQuZWFjXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdCRlbGVtZW50c19jb250YWluZXIuZmluZChcInVsIGxpXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0ZWRcIik7XHJcblx0XHRcdFx0XHRcdFx0JGVsZW1lbnRzX2NvbnRhaW5lci5maW5kKFwidWwgbGlcIikuZXEoc2VsZWN0ZWRFbGVtZW50KS5hZGRDbGFzcyhcInNlbGVjdGVkXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjb25maWcuZ2V0KFwibGlzdFwiKS5vblNlbGVjdEl0ZW1FdmVudCgpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oXCJsb2FkRWxlbWVudHMuZWFjXCIsIGZ1bmN0aW9uKGV2ZW50LCBsaXN0QnVpbGRlcnMsIHBocmFzZSkge1xyXG5cdFx0XHRcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyICRpdGVtID0gXCJcIixcclxuXHRcdFx0XHRcdFx0XHRcdCRsaXN0Q29udGFpbmVyID0gJGVsZW1lbnRzX2NvbnRhaW5lci5maW5kKFwidWxcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdCRsaXN0Q29udGFpbmVyXHJcblx0XHRcdFx0XHRcdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRldGFjaCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50c0xpc3QgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgY291bnRlciA9IDA7XHJcblx0XHRcdFx0XHRcdFx0Zm9yKHZhciBidWlsZGVySW5kZXggPSAwLCBsaXN0QnVpbGRlcnNMZW5ndGggPSBsaXN0QnVpbGRlcnMubGVuZ3RoOyBidWlsZGVySW5kZXggPCBsaXN0QnVpbGRlcnNMZW5ndGg7IGJ1aWxkZXJJbmRleCArPSAxKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGxpc3REYXRhID0gbGlzdEJ1aWxkZXJzW2J1aWxkZXJJbmRleF0uZGF0YTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobGlzdERhdGEubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsaXN0QnVpbGRlcnNbYnVpbGRlckluZGV4XS5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBsaXN0QnVpbGRlcnNbYnVpbGRlckluZGV4XS5oZWFkZXIubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQkbGlzdENvbnRhaW5lci5hcHBlbmQoXCI8ZGl2IGNsYXNzPSdlYWMtY2F0ZWdvcnknID5cIiArIGxpc3RCdWlsZGVyc1tidWlsZGVySW5kZXhdLmhlYWRlciArIFwiPC9kaXY+XCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZvcih2YXIgaSA9IDAsIGxpc3REYXRhTGVuZ3RoID0gbGlzdERhdGEubGVuZ3RoOyBpIDwgbGlzdERhdGFMZW5ndGggJiYgY291bnRlciA8IGxpc3RCdWlsZGVyc1tidWlsZGVySW5kZXhdLm1heExpc3RTaXplOyBpICs9IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JGl0ZW0gPSAkKFwiPGxpPjxkaXYgY2xhc3M9J2VhYy1pdGVtJz48L2Rpdj48L2xpPlwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGogPSBpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbUNvdW50ZXIgPSBjb3VudGVyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudHNWYWx1ZSA9IGxpc3RCdWlsZGVyc1tidWlsZGVySW5kZXhdLmdldFZhbHVlKGxpc3REYXRhW2pdKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGl0ZW0uZmluZChcIiA+IGRpdlwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZmllbGQudmFsKGVsZW1lbnRzVmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZEVsZW1lbnQgPSBpdGVtQ291bnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0RWxlbWVudChpdGVtQ291bnRlcik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25maWcuZ2V0KFwibGlzdFwiKS5vbkNsaWNrRXZlbnQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlnLmdldChcImxpc3RcIikub25DaG9vc2VFdmVudCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tb3VzZW92ZXIoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZEVsZW1lbnQgPSBpdGVtQ291bnRlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0RWxlbWVudChpdGVtQ291bnRlcik7XHRcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJsaXN0XCIpLm9uTW91c2VPdmVyRXZlbnQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW91c2VvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJsaXN0XCIpLm9uTW91c2VPdXRFdmVudCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5odG1sKHRlbXBsYXRlLmJ1aWxkKGhpZ2hsaWdodChlbGVtZW50c1ZhbHVlLCBwaHJhc2UpLCBsaXN0RGF0YVtqXSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0JGxpc3RDb250YWluZXIuYXBwZW5kKCRpdGVtKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudHNMaXN0LnB1c2gobGlzdERhdGFbaV0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb3VudGVyICs9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQkZWxlbWVudHNfY29udGFpbmVyLmFwcGVuZCgkbGlzdENvbnRhaW5lcik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJsaXN0XCIpLm9uTG9hZEV2ZW50KCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KSgpO1xyXG5cclxuXHRcdFx0XHQkZmllbGQuYWZ0ZXIoJGVsZW1lbnRzX2NvbnRhaW5lcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIHJlbW92ZUNvbnRhaW5lcigpIHtcclxuXHRcdFx0XHQkZmllbGQubmV4dChcIi5cIiArIGNvbnN0cy5nZXRWYWx1ZShcIkNPTlRBSU5FUl9DTEFTU1wiKSkucmVtb3ZlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGhpZ2hsaWdodChzdHJpbmcsIHBocmFzZSkge1xyXG5cclxuXHRcdFx0XHRpZihjb25maWcuZ2V0KFwiaGlnaGxpZ2h0UGhyYXNlXCIpICYmIHBocmFzZSAhPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGhpZ2hsaWdodFBocmFzZShzdHJpbmcsIHBocmFzZSk7XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0cmluZztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xyXG5cdFx0XHRcdHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csIFwiXFxcXCQmXCIpO1xyXG4gXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gaGlnaGxpZ2h0UGhyYXNlKHN0cmluZywgcGhyYXNlKSB7XHJcblx0XHRcdFx0dmFyIGVzY2FwZWRQaHJhc2UgPSBlc2NhcGVSZWdFeHAocGhyYXNlKTtcclxuXHRcdFx0XHRyZXR1cm4gKHN0cmluZyArIFwiXCIpLnJlcGxhY2UobmV3IFJlZ0V4cChcIihcIiArIGVzY2FwZWRQaHJhc2UgKyBcIilcIiwgXCJnaVwiKSAsIFwiPGI+JDE8L2I+XCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHJcblx0XHR9XHJcblx0XHRmdW5jdGlvbiBnZXRDb250YWluZXJJZCgpIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBlbGVtZW50SWQgPSAkZmllbGQuYXR0cihcImlkXCIpO1xyXG5cclxuXHRcdFx0ZWxlbWVudElkID0gY29uc3RzLmdldFZhbHVlKFwiQ09OVEFJTkVSX0lEXCIpICsgZWxlbWVudElkO1xyXG5cclxuXHRcdFx0cmV0dXJuIGVsZW1lbnRJZDtcclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XHJcblxyXG5cdFx0XHRiaW5kQWxsRXZlbnRzKCk7XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gYmluZEFsbEV2ZW50cygpIHtcclxuXHRcdFx0XHRpZiAoY2hlY2tQYXJhbShcImF1dG9jb21wbGV0ZU9mZlwiLCB0cnVlKSkge1xyXG5cdFx0XHRcdFx0cmVtb3ZlQXV0b2NvbXBsZXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRiaW5kRm9jdXNPdXQoKTtcclxuXHRcdFx0XHRiaW5kS2V5dXAoKTtcclxuXHRcdFx0XHRiaW5kS2V5ZG93bigpO1xyXG5cdFx0XHRcdGJpbmRLZXlwcmVzcygpO1xyXG5cdFx0XHRcdGJpbmRGb2N1cygpO1xyXG5cdFx0XHRcdGJpbmRCbHVyKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGJpbmRGb2N1c091dCgpIHtcclxuXHRcdFx0XHQkZmllbGQuZm9jdXNvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBmaWVsZFZhbHVlID0gJGZpZWxkLnZhbCgpLFxyXG5cdFx0XHRcdFx0XHRwaHJhc2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFjb25maWcuZ2V0KFwibGlzdFwiKS5tYXRjaC5jYXNlU2Vuc2l0aXZlKSB7XHJcblx0XHRcdFx0XHRcdGZpZWxkVmFsdWUgPSBmaWVsZFZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGVsZW1lbnRzTGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xyXG5cclxuXHRcdFx0XHRcdFx0cGhyYXNlID0gY29uZmlnLmdldChcImdldFZhbHVlXCIpKGVsZW1lbnRzTGlzdFtpXSk7XHJcblx0XHRcdFx0XHRcdGlmICghY29uZmlnLmdldChcImxpc3RcIikubWF0Y2guY2FzZVNlbnNpdGl2ZSkge1xyXG5cdFx0XHRcdFx0XHRcdHBocmFzZSA9IHBocmFzZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAocGhyYXNlID09PSBmaWVsZFZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRFbGVtZW50ID0gaTtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RFbGVtZW50KHNlbGVjdGVkRWxlbWVudCk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGJpbmRLZXl1cCgpIHtcclxuXHRcdFx0XHQkZmllbGRcclxuXHRcdFx0XHQub2ZmKFwia2V5dXBcIilcclxuXHRcdFx0XHQua2V5dXAoZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSAyNzpcclxuXHJcblx0XHRcdFx0XHRcdFx0aGlkZUNvbnRhaW5lcigpO1xyXG5cdFx0XHRcdFx0XHRcdGxvc2VGaWVsZEZvY3VzKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSAzODpcclxuXHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoZWxlbWVudHNMaXN0Lmxlbmd0aCA+IDAgJiYgc2VsZWN0ZWRFbGVtZW50ID4gMCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkRWxlbWVudCAtPSAxO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdCRmaWVsZC52YWwoY29uZmlnLmdldChcImdldFZhbHVlXCIpKGVsZW1lbnRzTGlzdFtzZWxlY3RlZEVsZW1lbnRdKSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0RWxlbWVudChzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSA0MDpcclxuXHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoZWxlbWVudHNMaXN0Lmxlbmd0aCA+IDAgJiYgc2VsZWN0ZWRFbGVtZW50IDwgZWxlbWVudHNMaXN0Lmxlbmd0aCAtIDEpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZEVsZW1lbnQgKz0gMTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQkZmllbGQudmFsKGNvbmZpZy5nZXQoXCJnZXRWYWx1ZVwiKShlbGVtZW50c0xpc3Rbc2VsZWN0ZWRFbGVtZW50XSkpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdEVsZW1lbnQoc2VsZWN0ZWRFbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPiA0MCB8fCBldmVudC5rZXlDb2RlID09PSA4KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGlucHV0UGhyYXNlID0gJGZpZWxkLnZhbCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmICghKGNvbmZpZy5nZXQoXCJsaXN0XCIpLmhpZGVPbkVtcHR5UGhyYXNlID09PSB0cnVlICYmIGV2ZW50LmtleUNvZGUgPT09IDggJiYgaW5wdXRQaHJhc2UgPT09IFwiXCIpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY29uZmlnLmdldChcInJlcXVlc3REZWxheVwiKSA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVxdWVzdERlbGF5VGltZW91dElkICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dChyZXF1ZXN0RGVsYXlUaW1lb3V0SWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWVzdERlbGF5VGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGxvYWREYXRhKGlucHV0UGhyYXNlKTt9LCBjb25maWcuZ2V0KFwicmVxdWVzdERlbGF5XCIpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkRGF0YShpbnB1dFBocmFzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoaWRlQ29udGFpbmVyKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gbG9hZERhdGEoaW5wdXRQaHJhc2UpIHtcclxuXHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaW5wdXRQaHJhc2UubGVuZ3RoIDwgY29uZmlnLmdldChcIm1pbkNoYXJOdW1iZXJcIikpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoY29uZmlnLmdldChcImRhdGFcIikgIT09IFwibGlzdC1yZXF1aXJlZFwiKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBkYXRhID0gY29uZmlnLmdldChcImRhdGFcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBsaXN0QnVpbGRlcnMgPSBsaXN0QnVpbGRlclNlcnZpY2UuaW5pdChkYXRhKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0bGlzdEJ1aWxkZXJzID0gbGlzdEJ1aWxkZXJTZXJ2aWNlLnVwZGF0ZUNhdGVnb3JpZXMobGlzdEJ1aWxkZXJzLCBkYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRsaXN0QnVpbGRlcnMgPSBsaXN0QnVpbGRlclNlcnZpY2UucHJvY2Vzc0RhdGEobGlzdEJ1aWxkZXJzLCBpbnB1dFBocmFzZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGxvYWRFbGVtZW50cyhsaXN0QnVpbGRlcnMsIGlucHV0UGhyYXNlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCRmaWVsZC5wYXJlbnQoKS5maW5kKFwibGlcIikubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd0NvbnRhaW5lcigpO1x0XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGhpZGVDb250YWluZXIoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgc2V0dGluZ3MgPSBjcmVhdGVBamF4U2V0dGluZ3MoKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChzZXR0aW5ncy51cmwgPT09IHVuZGVmaW5lZCB8fCBzZXR0aW5ncy51cmwgPT09IFwiXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRzZXR0aW5ncy51cmwgPSBjb25maWcuZ2V0KFwidXJsXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoc2V0dGluZ3MuZGF0YVR5cGUgPT09IHVuZGVmaW5lZCB8fCBzZXR0aW5ncy5kYXRhVHlwZSA9PT0gXCJcIikge1xyXG5cdFx0XHRcdFx0XHRcdHNldHRpbmdzLmRhdGFUeXBlID0gY29uZmlnLmdldChcImRhdGFUeXBlXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHNldHRpbmdzLnVybCAhPT0gdW5kZWZpbmVkICYmIHNldHRpbmdzLnVybCAhPT0gXCJsaXN0LXJlcXVpcmVkXCIpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MudXJsID0gc2V0dGluZ3MudXJsKGlucHV0UGhyYXNlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MuZGF0YSA9IGNvbmZpZy5nZXQoXCJwcmVwYXJlUG9zdERhdGFcIikoc2V0dGluZ3MuZGF0YSwgaW5wdXRQaHJhc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQkLmFqYXgoc2V0dGluZ3MpIFxyXG5cdFx0XHRcdFx0XHRcdFx0LmRvbmUoZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGxpc3RCdWlsZGVycyA9IGxpc3RCdWlsZGVyU2VydmljZS5pbml0KGRhdGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdEJ1aWxkZXJzID0gbGlzdEJ1aWxkZXJTZXJ2aWNlLnVwZGF0ZUNhdGVnb3JpZXMobGlzdEJ1aWxkZXJzLCBkYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3RCdWlsZGVycyA9IGxpc3RCdWlsZGVyU2VydmljZS5jb252ZXJ0WG1sKGxpc3RCdWlsZGVycyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjaGVja0lucHV0UGhyYXNlTWF0Y2hSZXNwb25zZShpbnB1dFBocmFzZSwgZGF0YSkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGlzdEJ1aWxkZXJzID0gbGlzdEJ1aWxkZXJTZXJ2aWNlLnByb2Nlc3NEYXRhKGxpc3RCdWlsZGVycywgaW5wdXRQaHJhc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkRWxlbWVudHMobGlzdEJ1aWxkZXJzLCBpbnB1dFBocmFzZSk7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAobGlzdEJ1aWxkZXJTZXJ2aWNlLmNoZWNrSWZEYXRhRXhpc3RzKGxpc3RCdWlsZGVycykgJiYgJGZpZWxkLnBhcmVudCgpLmZpbmQoXCJsaVwiKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NvbnRhaW5lcigpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGlkZUNvbnRhaW5lcigpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25maWcuZ2V0KFwiYWpheENhbGxiYWNrXCIpKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdC5mYWlsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsb2dnZXIud2FybmluZyhcIkZhaWwgdG8gbG9hZCByZXNwb25zZSBkYXRhXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdC5hbHdheXMoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gY3JlYXRlQWpheFNldHRpbmdzKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgc2V0dGluZ3MgPSB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdGFqYXhTZXR0aW5ncyA9IGNvbmZpZy5nZXQoXCJhamF4U2V0dGluZ3NcIikgfHwge307XHJcblxyXG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIHNldCBpbiBhamF4U2V0dGluZ3MpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldHRpbmdzW3NldF0gPSBhamF4U2V0dGluZ3Nbc2V0XTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXR0aW5ncztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gY2hlY2tJbnB1dFBocmFzZU1hdGNoUmVzcG9uc2UoaW5wdXRQaHJhc2UsIGRhdGEpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGNvbmZpZy5nZXQoXCJtYXRjaFJlc3BvbnNlUHJvcGVydHlcIikgIT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGNvbmZpZy5nZXQoXCJtYXRjaFJlc3BvbnNlUHJvcGVydHlcIikgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChkYXRhW2NvbmZpZy5nZXQoXCJtYXRjaFJlc3BvbnNlUHJvcGVydHlcIildID09PSBpbnB1dFBocmFzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBjb25maWcuZ2V0KFwibWF0Y2hSZXNwb25zZVByb3BlcnR5XCIpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChjb25maWcuZ2V0KFwibWF0Y2hSZXNwb25zZVByb3BlcnR5XCIpKGRhdGEpID09PSBpbnB1dFBocmFzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gYmluZEtleWRvd24oKSB7XHJcblx0XHRcdFx0JGZpZWxkXHJcblx0XHRcdFx0XHQub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdCAgICAgICAgXHRcdCAgICBldnQgPSBldnQgfHwgd2luZG93LmV2ZW50O1xyXG5cdCAgICAgICAgXHRcdCAgICB2YXIga2V5Q29kZSA9IGV2dC5rZXlDb2RlO1xyXG5cdCAgICAgICAgXHRcdCAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHtcclxuXHQgICAgICAgIFx0XHQgICAgICAgIHN1cHByZXNzS2V5cHJlc3MgPSB0cnVlOyBcclxuXHQgICAgICAgIFx0XHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgICAgIFx0XHQgICAgfVxyXG5cdFx0ICAgICAgICBcdH0pXHJcblx0XHRcdFx0XHQua2V5ZG93bihmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IDEzICYmIHNlbGVjdGVkRWxlbWVudCA+IC0xKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdCRmaWVsZC52YWwoY29uZmlnLmdldChcImdldFZhbHVlXCIpKGVsZW1lbnRzTGlzdFtzZWxlY3RlZEVsZW1lbnRdKSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJsaXN0XCIpLm9uS2V5RW50ZXJFdmVudCgpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJsaXN0XCIpLm9uQ2hvb3NlRXZlbnQoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRFbGVtZW50ID0gLTE7XHJcblx0XHRcdFx0XHRcdFx0aGlkZUNvbnRhaW5lcigpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gYmluZEtleXByZXNzKCkge1xyXG5cdFx0XHRcdCRmaWVsZFxyXG5cdFx0XHRcdC5vZmYoXCJrZXlwcmVzc1wiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gYmluZEZvY3VzKCkge1xyXG5cdFx0XHRcdCRmaWVsZC5mb2N1cyhmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoJGZpZWxkLnZhbCgpICE9PSBcIlwiICYmIGVsZW1lbnRzTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZEVsZW1lbnQgPSAtMTtcclxuXHRcdFx0XHRcdFx0c2hvd0NvbnRhaW5lcigpO1x0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBiaW5kQmx1cigpIHtcclxuXHRcdFx0XHQkZmllbGQuYmx1cihmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0c2VsZWN0ZWRFbGVtZW50ID0gLTE7XHJcblx0XHRcdFx0XHRcdGhpZGVDb250YWluZXIoKTtcclxuXHRcdFx0XHRcdH0sIDI1MCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIHJlbW92ZUF1dG9jb21wbGV0ZSgpIHtcclxuXHRcdFx0XHQkZmllbGQuYXR0cihcImF1dG9jb21wbGV0ZVwiLFwib2ZmXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNob3dDb250YWluZXIoKSB7XHJcblx0XHRcdCRjb250YWluZXIudHJpZ2dlcihcInNob3cuZWFjXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGhpZGVDb250YWluZXIoKSB7XHJcblx0XHRcdCRjb250YWluZXIudHJpZ2dlcihcImhpZGUuZWFjXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNlbGVjdEVsZW1lbnQoaW5kZXgpIHtcclxuXHRcdFx0XHJcblx0XHRcdCRjb250YWluZXIudHJpZ2dlcihcInNlbGVjdEVsZW1lbnQuZWFjXCIsIGluZGV4KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBsb2FkRWxlbWVudHMobGlzdCwgcGhyYXNlKSB7XHJcblx0XHRcdCRjb250YWluZXIudHJpZ2dlcihcImxvYWRFbGVtZW50cy5lYWNcIiwgW2xpc3QsIHBocmFzZV0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGxvc2VGaWVsZEZvY3VzKCkge1xyXG5cdFx0XHQkZmllbGQudHJpZ2dlcihcImJsdXJcIik7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9O1xyXG5cdHNjb3BlLmVhY0hhbmRsZXMgPSBbXTtcclxuXHJcblx0c2NvcGUuZ2V0SGFuZGxlID0gZnVuY3Rpb24oaWQpIHtcclxuXHRcdHJldHVybiBzY29wZS5lYWNIYW5kbGVzW2lkXTtcclxuXHR9O1xyXG5cclxuXHRzY29wZS5pbnB1dEhhc0lkID0gZnVuY3Rpb24oaW5wdXQpIHtcclxuXHJcblx0XHRpZigkKGlucHV0KS5hdHRyKFwiaWRcIikgIT09IHVuZGVmaW5lZCAmJiAkKGlucHV0KS5hdHRyKFwiaWRcIikubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0c2NvcGUuYXNzaWduUmFuZG9tSWQgPSBmdW5jdGlvbihpbnB1dCkge1xyXG5cclxuXHRcdHZhciBmaWVsZElkID0gXCJcIjtcclxuXHJcblx0XHRkbyB7XHJcblx0XHRcdGZpZWxkSWQgPSBcImVhYy1cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKTtcdFx0XHJcblx0XHR9IHdoaWxlICgkKFwiI1wiICsgZmllbGRJZCkubGVuZ3RoICE9PSAwKTtcclxuXHRcdFxyXG5cdFx0ZWxlbWVudElkID0gc2NvcGUuY29uc3RzLmdldFZhbHVlKFwiQ09OVEFJTkVSX0lEXCIpICsgZmllbGRJZDtcclxuXHJcblx0XHQkKGlucHV0KS5hdHRyKFwiaWRcIiwgZmllbGRJZCk7XHJcbiBcclxuXHR9O1xyXG5cclxuXHRzY29wZS5zZXRIYW5kbGUgPSBmdW5jdGlvbihoYW5kbGUsIGlkKSB7XHJcblx0XHRzY29wZS5lYWNIYW5kbGVzW2lkXSA9IGhhbmRsZTtcclxuXHR9O1xyXG5cclxuXHJcblx0cmV0dXJuIHNjb3BlO1xyXG5cclxufSkoRWFzeUF1dG9jb21wbGV0ZSB8fCB7fSk7XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQkLmZuLmVhc3lBdXRvY29tcGxldGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRlYWNIYW5kbGUgPSBuZXcgRWFzeUF1dG9jb21wbGV0ZS5tYWluKCR0aGlzLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdGlmICghRWFzeUF1dG9jb21wbGV0ZS5pbnB1dEhhc0lkKCR0aGlzKSkge1xyXG5cdFx0XHRcdEVhc3lBdXRvY29tcGxldGUuYXNzaWduUmFuZG9tSWQoJHRoaXMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRlYWNIYW5kbGUuaW5pdCgpO1xyXG5cclxuXHRcdFx0RWFzeUF1dG9jb21wbGV0ZS5zZXRIYW5kbGUoZWFjSGFuZGxlLCAkdGhpcy5hdHRyKFwiaWRcIikpO1xyXG5cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdCQuZm4uZ2V0U2VsZWN0ZWRJdGVtSW5kZXggPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHR2YXIgaW5wdXRJZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG5cclxuXHRcdGlmIChpbnB1dElkICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuIEVhc3lBdXRvY29tcGxldGUuZ2V0SGFuZGxlKGlucHV0SWQpLmdldFNlbGVjdGVkSXRlbUluZGV4KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblxyXG5cdCQuZm4uZ2V0SXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0dmFyIGlucHV0SWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuXHJcblx0XHRpZiAoaW5wdXRJZCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHJldHVybiBFYXN5QXV0b2NvbXBsZXRlLmdldEhhbmRsZShpbnB1dElkKS5nZXRJdGVtcygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAtMTtcclxuXHR9O1xyXG5cclxuXHQkLmZuLmdldEl0ZW1EYXRhID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcblx0XHR2YXIgaW5wdXRJZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG5cclxuXHRcdGlmIChpbnB1dElkICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPiAtMSkge1xyXG5cdFx0XHRyZXR1cm4gRWFzeUF1dG9jb21wbGV0ZS5nZXRIYW5kbGUoaW5wdXRJZCkuZ2V0SXRlbURhdGEoaW5kZXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAtMTtcclxuXHR9O1xyXG5cclxuXHQkLmZuLmdldFNlbGVjdGVkSXRlbURhdGEgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHR2YXIgaW5wdXRJZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG5cclxuXHRcdGlmIChpbnB1dElkICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuIEVhc3lBdXRvY29tcGxldGUuZ2V0SGFuZGxlKGlucHV0SWQpLmdldFNlbGVjdGVkSXRlbURhdGEoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcbiIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIG1zZyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XHJcblxyXG5cdC8vICBBTkRSRUFTIEVHRU4hISEhXHJcblx0JChmdW5jdGlvbiAoKSB7XHJcblx0ICAgICQoJ2JvZHknKS5mb3VuZGF0aW9uKCk7XHJcblx0ICAgICQoXCIjbWFpbmFwcFwiKS5hdHRyKCdzdHlsZScsJ2JhY2tncm91bmQ6I2ZmZjsnKVxyXG5cdCAgICAgICAgLmh0bWwoXCJmdW5rYXIhIGVsbGVyXCIpOyAgICBcclxuXHQgICAgYWxlcnQoJ0ZvdW5kYXRpb24gQ29yZSBWZXJzaW9uOiAnICsgRm91bmRhdGlvbi52ZXJzaW9uKTtcclxuXHQgICAgXHJcblx0ICAgIG1zZy50ZXN0YXIoXCJqYSBkdSBkZXQgZnVua2FyIHRyb3IgamFnIGRldCBlbGxlciBKT1Lvv71cIik7XHJcblx0fSk7XHJcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcclxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHQgICAgdGVzdGFyOiBmdW5jdGlvbiAobXNnKSB7XHJcblx0ICAgICAgICBhbGVydChtc2cpO1xyXG5cdCAgICB9XHJcblx0fVxyXG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pOyJdfQ==
