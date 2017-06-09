/*! pulltorefresh 2.0.0 @copyright dailc https://github.com/dailc/pullToRefresh-h5-iscroll */
!function(t){function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}var s={};i.m=t,i.c=s,i.i=function(t){return t},i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:e})},i.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="https://github.com/dailc/pullToRefresh-h5-iscroll/dist/",i(i.s=6)}({6:function(t,i,s){"use strict";var e,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*! iScroll v5.2.0-snapshot ~ (c) 2008-2017 Matteo Spinelli ~ http://cubiq.org/license */
!function(n,r,h){function a(t,i){this.wrapper="string"==typeof t?r.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!d.hasPointer,disableTouch:d.hasPointer||!d.hasTouch,disableMouse:d.hasPointer||d.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===n.onmousedown};for(var s in i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&d.hasPerspective?" translateZ(0)":"",this.options.useTransition=d.hasTransition&&this.options.useTransition,this.options.useTransform=d.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?d.ease[this.options.bounceEasing]||d.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,3==this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function l(t,i,s){var e=r.createElement("div"),o=r.createElement("div");return s===!0&&(e.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator","h"==t?(s===!0&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),e.className="iScrollHorizontalScrollbar"):(s===!0&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),e.className="iScrollVerticalScrollbar"),e.style.cssText+=";overflow:hidden",i||(e.style.pointerEvents="none"),e.appendChild(o),e}function c(t,i){this.wrapper="string"==typeof i.el?r.querySelector(i.el):i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var s in i)this.options[s]=i[s];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(d.addEvent(this.indicator,"touchstart",this),d.addEvent(n,"touchend",this)),this.options.disablePointer||(d.addEvent(this.indicator,d.prefixPointerEvent("pointerdown"),this),d.addEvent(n,d.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(d.addEvent(this.indicator,"mousedown",this),d.addEvent(n,"mouseup",this))),this.options.fade){this.wrapperStyle[d.style.transform]=this.scroller.translateZ;var e=d.style.transitionDuration;if(!e)return;this.wrapperStyle[e]=d.isBadAndroid?"0.0001ms":"0ms";var o=this;d.isBadAndroid&&p(function(){"0.0001ms"===o.wrapperStyle[e]&&(o.wrapperStyle[e]="0s")}),this.wrapperStyle.opacity="0"}}var p=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(t){n.setTimeout(t,1e3/60)};n.requestAnimationFrame=p;var d=function(){function t(t){return e!==!1&&(""===e?t:e+t.charAt(0).toUpperCase()+t.substr(1))}var i={},s=r.createElement("div").style,e=function(){for(var t=["t","webkitT","MozT","msT","OT"],i=0,e=t.length;i<e;i++)if(t[i]+"ransform"in s)return t[i].substr(0,t[i].length-1);return!1}();i.getTime=Date.now||function(){return(new Date).getTime()},i.extend=function(t,i){for(var s in i)t[s]=i[s]},i.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},i.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},i.prefixPointerEvent=function(t){return n.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},i.momentum=function(t,i,s,e,o,n){var r,a,l=t-i,c=h.abs(l)/s;return n=void 0===n?6e-4:n,r=t+c*c/(2*n)*(l<0?-1:1),a=c/n,r<e?(r=o?e-o/2.5*(c/8):e,l=h.abs(r-t),a=l/c):r>0&&(r=o?o/2.5*(c/8):0,l=h.abs(t)+r,a=l/c),{destination:h.round(r),duration:a}};var a=t("transform");t("transition");return i.extend(i,{hasTransform:a!==!1,hasPerspective:t("perspective")in s,hasTouch:"ontouchstart"in n,hasPointer:!(!n.PointerEvent&&!n.MSPointerEvent),hasTransition:t("transition")in s}),i.isBadAndroid=function(){var t=n.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"===(void 0===i?"undefined":o(i))&&i.length>=2)||parseFloat(i[1])<535.19}return!1}(),i.extend(i.style={},{transform:a,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin"),touchAction:t("touchAction")}),i.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},i.addClass=function(t,s){if(!i.hasClass(t,s)){var e=t.className.split(" ");e.push(s),t.className=e.join(" ")}},i.removeClass=function(t,s){if(i.hasClass(t,s)){var e=new RegExp("(^|\\s)"+s+"(\\s|$)","g");t.className=t.className.replace(e," ")}},i.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},i.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},i.extend(i.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),i.extend(i.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return h.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var i=.22;return 0===t?0:1==t?1:.4*h.pow(2,-10*t)*h.sin((t-i/4)*(2*h.PI)/i)+1}}}),i.tap=function(t,i){var s=r.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},i.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||(i=r.createEvent(n.MouseEvent?"MouseEvents":"Event"),i.initEvent("click",!0,!0),i.view=t.view||n,i.detail=1,i.screenX=s.screenX||0,i.screenY=s.screenY||0,i.clientX=s.clientX||0,i.clientY=s.clientY||0,i.ctrlKey=!!t.ctrlKey,i.altKey=!!t.altKey,i.shiftKey=!!t.shiftKey,i.metaKey=!!t.metaKey,i.button=0,i.relatedTarget=null,i._constructed=!0,s.dispatchEvent(i))},i.getTouchAction=function(t,i){var s="none";return"vertical"===t?s="pan-y":"horizontal"===t&&(s="pan-x"),i&&"none"!=s&&(s+=" pinch-zoom"),s},i.getRect=function(t){if(t instanceof SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}},i}();a.prototype={version:"5.2.0-snapshot",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=d.eventType[t.type]){if(0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return}if(this.enabled&&(!this.initiated||d.eventType[t.type]===this.initiated)){!this.options.preventDefault||d.isBadAndroid||d.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=d.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=d.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(h.round(i.x),h.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&d.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,o,n=t.touches?t.touches[0]:t,r=n.pageX-this.pointX,a=n.pageY-this.pointY,l=d.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=r,this.distY+=a,e=h.abs(this.distX),o=h.abs(this.distY),!(l-this.endTime>300&&e<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(e>o+this.options.directionLockThreshold?this.directionLocked="h":o>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);a=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}r=this.hasHorizontalScroll?r:0,a=this.hasVerticalScroll?a:0,i=this.x+r,s=this.y+a,(i>this.minScrollY||i<this.maxScrollX)&&(i=this.options.bounce?this.x+r/3:i>0?0:this.maxScrollX),(s>this.minScrollY||s<this.maxScrollY)&&(s=this.options.bounce?this.y+a/3:s>this.minScrollY?this.minScrollY:this.maxScrollY),this.directionX=r>0?-1:r<0?1:0,this.directionY=a>0?-1:a<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),l-this.startTime>300&&(this.startTime=l,this.startX=this.x,this.startY=this.y,1==this.options.probeType&&this._execEvent("scroll")),this.options.probeType>1&&this._execEvent("scroll")}}},_end:function(t){if(this.enabled&&d.eventType[t.type]===this.initiated){this.options.preventDefault&&!d.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault(),this._execEvent("touchEnd");var i,s,e=(t.changedTouches&&t.changedTouches[0],d.getTime()-this.startTime),o=h.round(this.x),n=h.round(this.y),r=h.abs(o-this.startX),a=h.abs(n-this.startY),l=0,c="";if(this.isInTransition=0,this.initiated=0,this.endTime=d.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&d.tap(t,this.options.tap),this.options.click&&d.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&e<200&&r<100&&a<100)return void this._execEvent("flick");if(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?d.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},s=this.hasVerticalScroll?d.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=i.destination,n=s.destination,l=h.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var p=this._nearestSnap(o,n);this.currentPage=p,l=this.options.snapSpeed||h.max(h.max(h.min(h.abs(o-p.x),1e3),h.min(h.abs(n-p.y),1e3)),300),o=p.x,n=p.y,this.directionX=0,this.directionY=0,c=this.options.bounceEasing}if(o!=this.x||n!=this.y)return(o>0||o<this.maxScrollX||n>this.minScrollY||n<this.maxScrollY)&&(c=d.ease.quadratic),void this.scrollTo(o,n,l,c);this._execEvent("scrollEnd")}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>this.minScrollY?s=this.minScrollY:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){d.getRect(this.wrapper),this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight;var t=d.getRect(this.scroller);this.scrollerWidth=t.width,this.scrollerHeight=t.height,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.minScrollY=this.minScrollY||0,this.maxScrollY>this.minScrollY&&(this.maxScrollY=this.minScrollY),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,d.hasPointer&&!this.options.disablePointer&&(this.wrapper.style[d.style.touchAction]=d.getTouchAction(this.options.eventPassthrough,!0),this.wrapper.style[d.style.touchAction]||(this.wrapper.style[d.style.touchAction]=d.getTouchAction(this.options.eventPassthrough,!1))),this.wrapperOffset=d.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);s>-1&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||d.ease.circular,this.isInTransition=this.options.useTransition&&s>0;var o=this.options.useTransition&&e.style;!s||o?(o&&(this._transitionTimingFunction(e.style),this._transitionTime(s)),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,e,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=d.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top;var r=d.getRect(t),a=d.getRect(this.wrapper);s===!0&&(s=h.round(r.width/2-a.width/2)),e===!0&&(e=h.round(r.height/2-a.height/2)),n.left-=s||0,n.top-=e||0,n.left=n.left>0?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>0?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=void 0===i||null===i||"auto"===i?h.max(h.abs(this.x-n.left),h.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}},_transitionTime:function(t){if(this.options.useTransition){t=t||0;var i=d.style.transitionDuration;if(i){if(this.scrollerStyle[i]=t+"ms",!t&&d.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var s=this;p(function(){"0.0001ms"===s.scrollerStyle[i]&&(s.scrollerStyle[i]="0s")})}if(this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)}}},_transitionTimingFunction:function(t){if(this.scrollerStyle[d.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[d.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=h.round(t),i=h.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(t){var i=t?d.removeEvent:d.addEvent,s=this.options.bindToWrapper?this.wrapper:n;i(n,"orientationchange",this),i(n,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),d.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,d.prefixPointerEvent("pointerdown"),this),i(s,d.prefixPointerEvent("pointermove"),this),i(s,d.prefixPointerEvent("pointercancel"),this),i(s,d.prefixPointerEvent("pointerup"),this)),d.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,s=n.getComputedStyle(this.scroller,null);return this.options.useTransform?(s=s[d.style.transform].split(")")[0].split(", "),t=+(s[12]||s[4]),i=+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),i=+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){function t(t){if(n.indicators)for(var i=n.indicators.length;i--;)t.call(n.indicators[i])}var i,s=this.options.interactiveScrollbars,e="string"!=typeof this.options.scrollbars,o=[],n=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(i={el:l("v",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,customStyle:e,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(i.el),o.push(i)),this.options.scrollX&&(i={el:l("h",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,customStyle:e,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(i.el),o.push(i))),this.options.indicators&&(o=o.concat(this.options.indicators));for(var r=o.length;r--;)this.indicators.push(new c(this,o[r]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){t(function(){this.fade()})}),this.on("scrollCancel",function(){t(function(){this.fade()})}),this.on("scrollStart",function(){t(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){t(function(){this.fade(1,!0)})})),this.on("refresh",function(){t(function(){this.refresh()})}),this.on("destroy",function(){t(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){d.addEvent(this.wrapper,"wheel",this),d.addEvent(this.wrapper,"mousewheel",this),d.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,d.removeEvent(this.wrapper,"wheel",this),d.removeEvent(this.wrapper,"mousewheel",this),d.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault();var i,s,e,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n.options.snap||n._execEvent("scrollEnd"),n.wheelTimeout=void 0},400),"deltaX"in t)1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,s=-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,s=-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return e=this.currentPage.pageX,o=this.currentPage.pageY,i>0?e--:i<0&&e++,s>0?o--:s<0&&o++,void this.goToPage(e,o);e=this.x+h.round(this.hasHorizontalScroll?i:0),o=this.y+h.round(this.hasVerticalScroll?s:0),this.directionX=i>0?-1:i<0?1:0,this.directionY=s>0?-1:s<0?1:0,e>0?e=0:e<this.maxScrollX&&(e=this.maxScrollX),o>this.minScrollY?o=this.minScrollY:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(e,o,0),this.options.probeType>1&&this._execEvent("scroll")}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,e,o,n,r,a=0,l=0,c=0,p=this.options.snapStepX||this.wrapperWidth,u=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(this.options.snap===!0)for(s=h.round(p/2),e=h.round(u/2);c>-this.scrollerWidth;){for(this.pages[a]=[],t=0,o=0;o>-this.scrollerHeight;)this.pages[a][t]={x:h.max(c,this.maxScrollX),y:h.max(o,this.maxScrollY),width:p,height:u,cx:c-s,cy:o-e},o-=u,t++;c-=p,a++}else for(n=this.options.snap,t=n.length,i=-1;a<t;a++)r=d.getRect(n[a]),(0===a||r.left<=d.getRect(n[a-1]).left)&&(l=0,i++),this.pages[l]||(this.pages[l]=[]),c=h.max(-r.left,this.maxScrollX),o=h.max(-r.top,this.maxScrollY),s=c-h.round(r.width/2),e=o-h.round(r.height/2),this.pages[l][i]={x:c,y:o,width:r.width,height:r.height,cx:s,cy:e},c>this.maxScrollX&&l++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=h.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=h.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||h.max(h.max(h.min(h.abs(this.x-this.startX),1e3),h.min(h.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var s=0,e=this.pages.length,o=0;if(h.abs(t-this.absStartX)<this.snapThresholdX&&h.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>this.minScrollY?i=this.minScrollY:i<this.maxScrollY&&(i=this.maxScrollY);s<e;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}for(e=this.pages[s].length;o<e;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return s==this.currentPage.pageX&&(s+=this.directionX,s<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),o==this.currentPage.pageY&&(o+=this.directionY,o<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:s,pageY:o}},goToPage:function(t,i,s,e){e=e||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var o=this.pages[t][i].x,n=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||h.max(h.max(h.min(h.abs(o-this.x),1e3),h.min(h.abs(n-this.y),1e3)),300):s,this.currentPage={x:o,y:n,pageX:t,pageY:i},this.scrollTo(o,n,s,e)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s++,s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s--,s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(t){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==o(this.options.keyBindings))for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];d.addEvent(n,"keydown",this),this.on("destroy",function(){d.removeEvent(n,"keydown",this)})},_key:function(t){if(this.enabled){var i,s=this.options.snap,e=s?this.currentPage.pageX:this.x,o=s?this.currentPage.pageY:this.y,n=d.getTime(),r=this.keyTime||0,a=.25;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(h.round(i.x),h.round(i.y)),this.isInTransition=!1),this.keyAcceleration=n-r<200?h.min(this.keyAcceleration+a,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?e+=s?1:this.wrapperWidth:o+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?e-=s?1:this.wrapperWidth:o-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:e=s?this.pages.length-1:this.maxScrollX,o=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:e=0,o=0;break;case this.options.keyBindings.left:e+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:o+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:e-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:o-=s?1:5+this.keyAcceleration>>0;break;default:return}if(s)return void this.goToPage(e,o);e>0?(e=0,this.keyAcceleration=0):e<this.maxScrollX&&(e=this.maxScrollX,this.keyAcceleration=0),o>this.minScrollY?(o=this.minScrollY,this.keyAcceleration=0):o<this.maxScrollY&&(o=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(e,o,0),this.keyTime=n}},_animate:function(t,i,s,e){function o(){var c,u,m,f=d.getTime();if(f>=l)return n.isAnimating=!1,n._translate(t,i),void(n.resetPosition(n.options.bounceTime)||n._execEvent("scrollEnd"));f=(f-a)/s,m=e(f),c=(t-r)*m+r,u=(i-h)*m+h,n._translate(c,u),n.isAnimating&&p(o),3==n.options.probeType&&n._execEvent("scroll")}var n=this,r=this.x,h=this.y,a=d.getTime(),l=a+s;this.isAnimating=!0,o()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},c.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(d.removeEvent(this.indicator,"touchstart",this),d.removeEvent(this.indicator,d.prefixPointerEvent("pointerdown"),this),d.removeEvent(this.indicator,"mousedown",this),d.removeEvent(n,"touchmove",this),d.removeEvent(n,d.prefixPointerEvent("pointermove"),this),d.removeEvent(n,"mousemove",this),d.removeEvent(n,"touchend",this),d.removeEvent(n,d.prefixPointerEvent("pointerup"),this),d.removeEvent(n,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=d.getTime(),this.options.disableTouch||d.addEvent(n,"touchmove",this),this.options.disablePointer||d.addEvent(n,d.prefixPointerEvent("pointermove"),this),this.options.disableMouse||d.addEvent(n,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t,r=d.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),1==this.scroller.options.probeType&&r-this.startTime>300?(this.startTime=r,this.scroller._execEvent("scroll")):this.scroller.options.probeType>1&&this.scroller._execEvent("scroll"),t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),d.removeEvent(n,"touchmove",this),d.removeEvent(n,d.prefixPointerEvent("pointermove"),this),d.removeEvent(n,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),s=this.options.snapSpeed||h.max(h.max(h.min(h.abs(this.scroller.x-i.x),1e3),h.min(h.abs(this.scroller.y-i.y),1e3)),300);this.scroller.x==i.x&&this.scroller.y==i.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,s,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0;var i=d.style.transitionDuration;if(i&&(this.indicatorStyle[i]=t+"ms",!t&&d.isBadAndroid)){this.indicatorStyle[i]="0.0001ms";var s=this;p(function(){"0.0001ms"===s.indicatorStyle[i]&&(s.indicatorStyle[i]="0s")})}},transitionTimingFunction:function(t){this.indicatorStyle[d.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(d.addClass(this.wrapper,"iScrollBothScrollbars"),d.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(d.removeClass(this.wrapper,"iScrollBothScrollbars"),d.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px")),d.getRect(this.wrapper),this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=h.max(h.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=h.max(h.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&h.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&h.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=h.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=h.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=h.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=h.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",i=this.maxPosY+this.indicatorHeight-this.height):i=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[d.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?h.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?h.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[d.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},a.utils=d,void 0!==t&&t.exports?t.exports=a:void 0!==(e=function(){return a}.call(i,s,i,t))&&(t.exports=e),n.IScroll=a}(window,document,Math)}});