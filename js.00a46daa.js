// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":[function(require,module,exports) {
var define;
/*!
  * Bootstrap v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},n=t=>{const i=e(t);return i?document.querySelector(i):null},s=e=>{e.dispatchEvent(new Event(t))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},m=t=>{"function"==typeof t&&t()},_=(e,i,n=!0)=>{if(!n)return void m(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(i)+5;let r=!1;const a=({target:n})=>{n===i&&(r=!0,i.removeEventListener(t,a),m(e))};i.addEventListener(t,a),setTimeout((()=>{r||s(i)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=N(t);return C.has(o)||(o=t),[n,s,o]}function D(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return j(s,{delegateTarget:r}),n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return j(n,{delegateTarget:t}),i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function S(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function I(t,e,i,n){const s=e[i]||{};for(const o of Object.keys(s))if(o.includes(n)){const n=s[o];S(t,e,i,n.callable,n.delegationSelector)}}function N(t){return t=t.replace(y,""),T[t]||t}const P={on(t,e,i,n){D(t,e,i,n,!1)},one(t,e,i,n){D(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))I(t,l,i,e.slice(1));for(const i of Object.keys(c)){const n=i.replace(w,"");if(!a||e.includes(n)){const e=c[i];S(t,l,r,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;S(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==N(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=j(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function j(t,e){for(const[i,n]of Object.entries(e||{}))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}const M=new Map,H={set(t,e,i){M.has(t)||M.set(t,new Map);const n=M.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>M.has(t)&&M.get(t).get(e)||null,remove(t,e){if(!M.has(t))return;const i=M.get(t);i.delete(e),0===i.size&&M.delete(t)}};function $(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function W(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${W(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${W(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=$(t.dataset[n])}return e},getDataAttribute:(t,e)=>$(t.getAttribute(`data-bs-${W(e)}`))};class F{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?B.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const s=e[n],r=t[n],a=o(r)?"element":null==(i=r)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}var i}}class z extends F{constructor(t,e){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(e),H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return H.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;P.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const o=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))};class q extends z{static get NAME(){return"alert"}close(){if(P.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),P.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(q,"close"),g(q);const V='[data-bs-toggle="button"]';class K extends z{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=K.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}P.on(document,"click.bs.button.data-api",V,(t=>{t.preventDefault();const e=t.target.closest(V);K.getOrCreateInstance(e).toggle()})),g(K);const Q={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))}},X={endCallback:null,leftCallback:null,rightCallback:null},Y={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class U extends F{constructor(t,e){super(),this._element=t,t&&U.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return X}static get DefaultType(){return Y}static get NAME(){return"swipe"}dispose(){P.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),m(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&m(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),P.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),P.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),P.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const G="next",J="prev",Z="left",tt="right",et="slid.bs.carousel",it="carousel",nt="active",st={ArrowLeft:tt,ArrowRight:Z},ot={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class at extends z{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===it&&this.cycle()}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"carousel"}next(){this._slide(G)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(J)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?P.one(this._element,et,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void P.one(this._element,et,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?G:J;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),P.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&U.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of Q.find(".carousel-item img",this._element))P.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(Z)),rightCallback:()=>this._slide(this._directionToOrder(tt)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new U(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=st[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Q.findOne(".active",this._indicatorsElement);e.classList.remove(nt),e.removeAttribute("aria-current");const i=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(nt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===G,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>P.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(nt),i.classList.remove(nt,c,l),this._isSliding=!1,r(et)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Q.findOne(".active.carousel-item",this._element)}_getItems(){return Q.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===Z?J:G:t===Z?G:J}_orderToDirection(t){return p()?t===J?Z:tt:t===J?tt:Z}static jQueryInterface(t){return this.each((function(){const e=at.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=n(this);if(!e||!e.classList.contains(it))return;t.preventDefault();const i=at.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),P.on(window,"load.bs.carousel.data-api",(()=>{const t=Q.find('[data-bs-ride="carousel"]');for(const e of t)at.getOrCreateInstance(e)})),g(at);const lt="show",ct="collapse",ht="collapsing",dt='[data-bs-toggle="collapse"]',ut={parent:null,toggle:!0},ft={parent:"(null|element)",toggle:"boolean"};class pt extends z{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=Q.find(dt);for(const t of n){const e=i(t),n=Q.find(e).filter((t=>t===this._element));null!==e&&n.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ut}static get DefaultType(){return ft}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>pt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(ht),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct,lt),this._element.style[e]="",P.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(ht),this._element.classList.remove(ct,lt);for(const t of this._triggerArray){const e=n(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct),P.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(lt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(dt);for(const e of t){const t=n(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=Q.find(":scope .collapse .collapse",this._config.parent);return Q.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}P.on(document,"click.bs.collapse.data-api",dt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=i(this),n=Q.find(e);for(const t of n)pt.getOrCreateInstance(t,{toggle:!1}).toggle()})),g(pt);var gt="top",mt="bottom",_t="right",bt="left",vt="auto",yt=[gt,mt,_t,bt],wt="start",At="end",Et="clippingParents",Tt="viewport",Ct="popper",Ot="reference",xt=yt.reduce((function(t,e){return t.concat([e+"-"+wt,e+"-"+At])}),[]),kt=[].concat(yt,[vt]).reduce((function(t,e){return t.concat([e,e+"-"+wt,e+"-"+At])}),[]),Lt="beforeRead",Dt="read",St="afterRead",It="beforeMain",Nt="main",Pt="afterMain",jt="beforeWrite",Mt="write",Ht="afterWrite",$t=[Lt,Dt,St,It,Nt,Pt,jt,Mt,Ht];function Wt(t){return t?(t.nodeName||"").toLowerCase():null}function Bt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ft(t){return t instanceof Bt(t).Element||t instanceof Element}function zt(t){return t instanceof Bt(t).HTMLElement||t instanceof HTMLElement}function Rt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Bt(t).ShadowRoot||t instanceof ShadowRoot)}const qt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];zt(s)&&Wt(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});zt(n)&&Wt(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Vt(t){return t.split("-")[0]}var Kt=Math.max,Qt=Math.min,Xt=Math.round;function Yt(t,e){void 0===e&&(e=!1);var i=t.getBoundingClientRect(),n=1,s=1;if(zt(t)&&e){var o=t.offsetHeight,r=t.offsetWidth;r>0&&(n=Xt(i.width)/r||1),o>0&&(s=Xt(i.height)/o||1)}return{width:i.width/n,height:i.height/s,top:i.top/s,right:i.right/n,bottom:i.bottom/s,left:i.left/n,x:i.left/n,y:i.top/s}}function Ut(t){var e=Yt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Gt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&Rt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Jt(t){return Bt(t).getComputedStyle(t)}function Zt(t){return["table","td","th"].indexOf(Wt(t))>=0}function te(t){return((Ft(t)?t.ownerDocument:t.document)||window.document).documentElement}function ee(t){return"html"===Wt(t)?t:t.assignedSlot||t.parentNode||(Rt(t)?t.host:null)||te(t)}function ie(t){return zt(t)&&"fixed"!==Jt(t).position?t.offsetParent:null}function ne(t){for(var e=Bt(t),i=ie(t);i&&Zt(i)&&"static"===Jt(i).position;)i=ie(i);return i&&("html"===Wt(i)||"body"===Wt(i)&&"static"===Jt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&zt(t)&&"fixed"===Jt(t).position)return null;var i=ee(t);for(Rt(i)&&(i=i.host);zt(i)&&["html","body"].indexOf(Wt(i))<0;){var n=Jt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function se(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function oe(t,e,i){return Kt(t,Qt(e,i))}function re(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ae(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const le={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=Vt(i.placement),l=se(a),c=[bt,_t].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return re("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ae(t,yt))}(s.padding,i),d=Ut(o),u="y"===l?gt:bt,f="y"===l?mt:_t,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=ne(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=oe(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Gt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(t){return t.split("-")[1]}var he={top:"auto",right:"auto",bottom:"auto",left:"auto"};function de(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,g=void 0===p?0:p,m="function"==typeof h?h({x:f,y:g}):{x:f,y:g};f=m.x,g=m.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=bt,y=gt,w=window;if(c){var A=ne(i),E="clientHeight",T="clientWidth";A===Bt(i)&&"static"!==Jt(A=te(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===gt||(s===bt||s===_t)&&o===At)&&(y=mt,g-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,g*=l?1:-1),s!==bt&&(s!==gt&&s!==mt||o!==At)||(v=_t,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&he),x=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:Xt(e*n)/n||0,y:Xt(i*n)/n||0}}({x:f,y:g}):{x:f,y:g};return f=x.x,g=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?g+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const ue={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:Vt(e.placement),variation:ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,de(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,de(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var fe={passive:!0};const pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=Bt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,fe)})),a&&l.addEventListener("resize",i.update,fe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,fe)})),a&&l.removeEventListener("resize",i.update,fe)}},data:{}};var ge={left:"right",right:"left",bottom:"top",top:"bottom"};function me(t){return t.replace(/left|right|bottom|top/g,(function(t){return ge[t]}))}var _e={start:"end",end:"start"};function be(t){return t.replace(/start|end/g,(function(t){return _e[t]}))}function ve(t){var e=Bt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ye(t){return Yt(te(t)).left+ve(t).scrollLeft}function we(t){var e=Jt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ae(t){return["html","body","#document"].indexOf(Wt(t))>=0?t.ownerDocument.body:zt(t)&&we(t)?t:Ae(ee(t))}function Ee(t,e){var i;void 0===e&&(e=[]);var n=Ae(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Bt(n),r=s?[o].concat(o.visualViewport||[],we(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Ee(ee(r)))}function Te(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ce(t,e){return e===Tt?Te(function(t){var e=Bt(t),i=te(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+ye(t),y:a}}(t)):Ft(e)?function(t){var e=Yt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Te(function(t){var e,i=te(t),n=ve(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=Kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=Kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+ye(t),l=-n.scrollTop;return"rtl"===Jt(s||i).direction&&(a+=Kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(te(t)))}function Oe(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?Vt(s):null,r=s?ce(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case gt:e={x:a,y:i.y-n.height};break;case mt:e={x:a,y:i.y+i.height};break;case _t:e={x:i.x+i.width,y:l};break;case bt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?se(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case wt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case At:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function xe(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?Et:o,a=i.rootBoundary,l=void 0===a?Tt:a,c=i.elementContext,h=void 0===c?Ct:c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,g=re("number"!=typeof p?p:ae(p,yt)),m=h===Ct?Ot:Ct,_=t.rects.popper,b=t.elements[u?m:h],v=function(t,e,i){var n="clippingParents"===e?function(t){var e=Ee(ee(t)),i=["absolute","fixed"].indexOf(Jt(t).position)>=0&&zt(t)?ne(t):t;return Ft(i)?e.filter((function(t){return Ft(t)&&Gt(t,i)&&"body"!==Wt(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Ce(t,i);return e.top=Kt(n.top,e.top),e.right=Qt(n.right,e.right),e.bottom=Qt(n.bottom,e.bottom),e.left=Kt(n.left,e.left),e}),Ce(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(Ft(b)?b:b.contextElement||te(t.elements.popper),r,l),y=Yt(t.elements.reference),w=Oe({reference:y,element:_,strategy:"absolute",placement:s}),A=Te(Object.assign({},_,w)),E=h===Ct?A:y,T={top:v.top-E.top+g.top,bottom:E.bottom-v.bottom+g.bottom,left:v.left-E.left+g.left,right:E.right-v.right+g.right},C=t.modifiersData.offset;if(h===Ct&&C){var O=C[s];Object.keys(T).forEach((function(t){var e=[_t,mt].indexOf(t)>=0?1:-1,i=[gt,mt].indexOf(t)>=0?"y":"x";T[t]+=O[i]*e}))}return T}function ke(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?kt:l,h=ce(n),d=h?a?xt:xt.filter((function(t){return ce(t)===h})):yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=xe(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[Vt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const Le={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,g=i.allowedAutoPlacements,m=e.options.placement,_=Vt(m),b=l||(_!==m&&p?function(t){if(Vt(t)===vt)return[];var e=me(t);return[be(t),e,be(e)]}(m):[me(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat(Vt(i)===vt?ke(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=Vt(O),k=ce(O)===wt,L=[gt,mt].indexOf(x)>=0,D=L?"width":"height",S=xe(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=L?k?_t:bt:k?mt:gt;y[D]>w[D]&&(I=me(I));var N=me(I),P=[];if(o&&P.push(S[x]<=0),a&&P.push(S[I]<=0,S[N]<=0),P.every((function(t){return t}))){T=O,E=!1;break}A.set(O,P)}if(E)for(var j=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function De(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Se(t){return[gt,_t,mt,bt].some((function(e){return t[e]>=0}))}const Ie={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=xe(e,{elementContext:"reference"}),a=xe(e,{altBoundary:!0}),l=De(r,n),c=De(a,s,o),h=Se(l),d=Se(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},Ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=kt.reduce((function(t,i){return t[i]=function(t,e,i){var n=Vt(t),s=[bt,gt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[bt,_t].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},Pe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Oe({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},je={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,g=void 0===p?0:p,m=xe(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=Vt(e.placement),b=ce(e.placement),v=!b,y=se(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,D="y"===y?gt:bt,S="y"===y?mt:_t,I="y"===y?"height":"width",N=A[y],P=N+m[D],j=N-m[S],M=f?-T[I]/2:0,H=b===wt?E[I]:T[I],$=b===wt?-T[I]:-E[I],W=e.elements.arrow,B=f&&W?Ut(W):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=F[D],R=F[S],q=oe(0,E[I],B[I]),V=v?E[I]/2-M-q-z-O.mainAxis:H-q-z-O.mainAxis,K=v?-E[I]/2+M+q+R+O.mainAxis:$+q+R+O.mainAxis,Q=e.elements.arrow&&ne(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=N+K-Y,G=oe(f?Qt(P,N+V-Y-X):P,N,f?Kt(j,U):j);A[y]=G,k[y]=G-N}if(a){var J,Z="x"===y?gt:bt,tt="x"===y?mt:_t,et=A[w],it="y"===w?"height":"width",nt=et+m[Z],st=et-m[tt],ot=-1!==[gt,bt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=oe(t,e,i);return n>i?i:n}(at,et,lt):oe(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function Me(t,e,i){void 0===i&&(i=!1);var n,s,o=zt(e),r=zt(e)&&function(t){var e=t.getBoundingClientRect(),i=Xt(e.width)/t.offsetWidth||1,n=Xt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=te(e),l=Yt(t,r),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==Wt(e)||we(a))&&(c=(n=e)!==Bt(n)&&zt(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:ve(n)),zt(e)?((h=Yt(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=ye(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function He(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var $e={placement:"bottom",modifiers:[],strategy:"absolute"};function We(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Be(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?$e:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},$e,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:Ft(t)?Ee(t):t.contextElement?Ee(t.contextElement):[],popper:Ee(e)};var r,c,u=function(t){var e=He(t);return $t.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(We(e,i)){a.rects={reference:Me(e,ne(i),"fixed"===a.options.strategy),popper:Ut(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!We(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var Fe=Be(),ze=Be({defaultModifiers:[pe,Pe,ue,qt]}),Re=Be({defaultModifiers:[pe,Pe,ue,qt,Ne,Le,je,le,Ie]});const qe=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Be,detectOverflow:xe,createPopperBase:Fe,createPopper:Re,createPopperLite:ze,top:gt,bottom:mt,right:_t,left:bt,auto:vt,basePlacements:yt,start:wt,end:At,clippingParents:Et,viewport:Tt,popper:Ct,reference:Ot,variationPlacements:xt,placements:kt,beforeRead:Lt,read:Dt,afterRead:St,beforeMain:It,main:Nt,afterMain:Pt,beforeWrite:jt,write:Mt,afterWrite:Ht,modifierPhases:$t,applyStyles:qt,arrow:le,computeStyles:ue,eventListeners:pe,flip:Le,hide:Ie,offset:Ne,popperOffsets:Pe,preventOverflow:je},Symbol.toStringTag,{value:"Module"})),Ve="dropdown",Ke="ArrowUp",Qe="ArrowDown",Xe="click.bs.dropdown.data-api",Ye="keydown.bs.dropdown.data-api",Ue="show",Ge='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Je=`${Ge}.show`,Ze=".dropdown-menu",ti=p()?"top-end":"top-start",ei=p()?"top-start":"top-end",ii=p()?"bottom-end":"bottom-start",ni=p()?"bottom-start":"bottom-end",si=p()?"left-start":"right-start",oi=p()?"right-start":"left-start",ri={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ai={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class li extends z{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.findOne(Ze,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ri}static get DefaultType(){return ai}static get NAME(){return Ve}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ue),this._element.classList.add(Ue),P.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ue),this._element.classList.remove(Ue),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===qe)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Re(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ue)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return si;if(t.classList.contains("dropstart"))return oi;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ei:ti:e?ni:ii}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Qe,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=li.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=Q.find(Je);for(const i of e){const e=li.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ke,Qe].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=Q.findOne(Ge,t.delegateTarget.parentNode),o=li.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}P.on(document,Ye,Ge,li.dataApiKeydownHandler),P.on(document,Ye,Ze,li.dataApiKeydownHandler),P.on(document,Xe,li.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",li.clearMenus),P.on(document,Xe,Ge,(function(t){t.preventDefault(),li.getOrCreateInstance(this).toggle()})),g(li);const ci=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",hi=".sticky-top",di="padding-right",ui="margin-right";class fi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,di,(e=>e+t)),this._setElementAttributes(ci,di,(e=>e+t)),this._setElementAttributes(hi,ui,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,di),this._resetElementAttributes(ci,di),this._resetElementAttributes(hi,ui)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&B.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e);null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of Q.find(t,this._element))e(i)}}const pi="show",gi="mousedown.bs.backdrop",mi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_i={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class bi extends F{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return mi}static get DefaultType(){return _i}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void m(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(pi),this._emulateAnimation((()=>{m(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(pi),this._emulateAnimation((()=>{this.dispose(),m(t)}))):m(t)}dispose(){this._isAppended&&(P.off(this._element,gi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),P.on(t,gi,(()=>{m(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const vi=".bs.focustrap",yi="backward",wi={autofocus:!0,trapElement:null},Ai={autofocus:"boolean",trapElement:"element"};class Ei extends F{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return wi}static get DefaultType(){return Ai}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,vi),P.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),P.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,vi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=Q.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===yi?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?yi:"forward")}}const Ti="hidden.bs.modal",Ci="show.bs.modal",Oi="modal-open",xi="show",ki="modal-static",Li={backdrop:!0,focus:!0,keyboard:!0},Di={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Si extends z{constructor(t,e){super(t,e),this._dialog=Q.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new fi,this._addEventListeners()}static get Default(){return Li}static get DefaultType(){return Di}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,Ci,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Oi),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(P.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(xi),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])P.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new bi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ei({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Q.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(xi),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),P.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),P.on(this._element,"mousedown.dismiss.bs.modal",(t=>{t.target===t.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Oi),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,Ti)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(ki)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ki),this._queueCallback((()=>{this._element.classList.remove(ki),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Si.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=n(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,Ci,(t=>{t.defaultPrevented||P.one(e,Ti,(()=>{a(this)&&this.focus()}))}));const i=Q.findOne(".modal.show");i&&Si.getInstance(i).hide(),Si.getOrCreateInstance(e).toggle(this)})),R(Si),g(Si);const Ii="show",Ni="showing",Pi="hiding",ji=".offcanvas.show",Mi="hidePrevented.bs.offcanvas",Hi="hidden.bs.offcanvas",$i={backdrop:!0,keyboard:!0,scroll:!1},Wi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Bi extends z{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return $i}static get DefaultType(){return Wi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new fi).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ni),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ii),this._element.classList.remove(Ni),P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Pi),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Ii,Pi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new fi).reset(),P.trigger(this._element,Hi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new bi({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():P.trigger(this._element,Mi)}:null})}_initializeFocusTrap(){return new Ei({trapElement:this._element})}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():P.trigger(this._element,Mi))}))}static jQueryInterface(t){return this.each((function(){const e=Bi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=n(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;P.one(e,Hi,(()=>{a(this)&&this.focus()}));const i=Q.findOne(ji);i&&i!==e&&Bi.getInstance(i).hide(),Bi.getOrCreateInstance(e).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of Q.find(ji))Bi.getOrCreateInstance(t).show()})),P.on(window,"resize.bs.offcanvas",(()=>{for(const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Bi.getOrCreateInstance(t).hide()})),R(Bi),g(Bi);const Fi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),zi=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ri=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,qi=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Fi.has(i)||Boolean(zi.test(t.nodeValue)||Ri.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Vi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ki={allowList:Vi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Qi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Xi={entry:"(string|element|function|null)",selector:"(string|element)"};class Yi extends F{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Ki}static get DefaultType(){return Qi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Xi)}_setContent(t,e,i){const n=Q.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)qi(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ui=new Set(["sanitize","allowList","sanitizeFn"]),Gi="fade",Ji="show",Zi=".modal",tn="hide.bs.modal",en="hover",nn="focus",sn={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},on={allowList:Vi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},rn={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class an extends z{constructor(t,e){if(void 0===qe)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=!1,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return on}static get DefaultType(){return rn}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled){if(t){const e=this._initializeOnDelegatedTarget(t);return e._activeTrigger.click=!e._activeTrigger.click,void(e._isWithActiveTrigger()?e._enter():e._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(Zi),tn,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this.tip&&(this.tip.remove(),this.tip=null);const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),P.trigger(this._element,this.constructor.eventName("inserted"))),this._popper?this._popper.update():this._popper=this._createPopper(i),i.classList.add(Ji),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._queueCallback((()=>{const t=this._isHovered;this._isHovered=!1,P.trigger(this._element,this.constructor.eventName("shown")),t&&this._leave()}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if(P.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(Ji),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=!1,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName("hidden")),this._disposePopper())}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Gi,Ji),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Gi),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Yi({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Gi)}_isShown(){return this.tip&&this.tip.classList.contains(Ji)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,i=sn[e.toUpperCase()];return Re(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)P.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>this.toggle(t)));else if("manual"!==e){const t=e===en?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===en?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");P.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?nn:en]=!0,e._enter()})),P.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?nn:en]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(Zi),tn,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._config.originalTitle;t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Ui.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.originalTitle=this._element.getAttribute("title")||"","number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=an.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(an);const ln={...an.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},cn={...an.DefaultType,content:"(null|string|element|function)"};class hn extends an{static get Default(){return ln}static get DefaultType(){return cn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=hn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(hn);const dn="click.bs.scrollspy",un="active",fn="[href]",pn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null},gn={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element"};class mn extends z{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return pn}static get DefaultType(){return gn}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,dn),P.on(this._config.target,dn,fn,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:[.1,.5,1],rootMargin:this._getRootMargin()};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_getRootMargin(){return this._config.offset?`${this._config.offset}px 0px -30%`:this._config.rootMargin}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(fn,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=Q.findOne(e.hash,this._element);a(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(un),this._activateParents(t),P.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))Q.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(un);else for(const e of Q.parents(t,".nav, .list-group"))for(const t of Q.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(un)}_clearActiveClass(t){t.classList.remove(un);const e=Q.find("[href].active",t);for(const t of e)t.classList.remove(un)}static jQueryInterface(t){return this.each((function(){const e=mn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of Q.find('[data-bs-spy="scroll"]'))mn.getOrCreateInstance(t)})),g(mn);const _n="ArrowLeft",bn="ArrowRight",vn="ArrowUp",yn="ArrowDown",wn="active",An="fade",En="show",Tn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Cn=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Tn}`;class On extends z{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?P.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;P.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(wn),this._activate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),P.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(En)}),t,t.classList.contains(An)))}_deactivate(t,e){t&&(t.classList.remove(wn),t.blur(),this._deactivate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),P.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(En)}),t,t.classList.contains(An)))}_keydown(t){if(![_n,bn,vn,yn].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[bn,yn].includes(t.key),i=b(this._getChildren().filter((t=>!l(t))),t.target,e,!0);i&&On.getOrCreateInstance(i).show()}_getChildren(){return Q.find(Cn,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=n(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=Q.findOne(t,i);s&&s.classList.toggle(n,e)};n(".dropdown-toggle",wn),n(".dropdown-menu",En),n(".dropdown-item",wn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(wn)}_getInnerElement(t){return t.matches(Cn)?t:Q.findOne(Cn,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=On.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab",Tn,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||On.getOrCreateInstance(this).show()})),P.on(window,"load.bs.tab",(()=>{for(const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))On.getOrCreateInstance(t)})),g(On);const xn="hide",kn="show",Ln="showing",Dn={animation:"boolean",autohide:"boolean",delay:"number"},Sn={animation:!0,autohide:!0,delay:5e3};class In extends z{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Sn}static get DefaultType(){return Dn}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(xn),d(this._element),this._element.classList.add(kn,Ln),this._queueCallback((()=>{this._element.classList.remove(Ln),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Ln),this._queueCallback((()=>{this._element.classList.add(xn),this._element.classList.remove(Ln,kn),P.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(kn),super.dispose()}isShown(){return this._element.classList.contains(kn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),P.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=In.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(In),g(In),{Alert:q,Button:K,Carousel:at,Collapse:pt,Dropdown:li,Modal:Si,Offcanvas:Bi,Popover:hn,ScrollSpy:mn,Tab:On,Toast:In,Tooltip:an}}));

},{}],"../node_modules/qs/lib/utils.js":[function(require,module,exports) {
'use strict';

var has = Object.prototype.hasOwnProperty;

var hexTable = function () {
  var array = [];

  for (var i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }

  return array;
}();

var compactQueue = function compactQueue(queue) {
  var obj;

  while (queue.length) {
    var item = queue.pop();
    obj = item.obj[item.prop];

    if (Array.isArray(obj)) {
      var compacted = [];

      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== 'undefined') {
          compacted.push(obj[j]);
        }
      }

      item.obj[item.prop] = compacted;
    }
  }

  return obj;
};

var arrayToObject = function arrayToObject(source, options) {
  var obj = options && options.plainObjects ? Object.create(null) : {};

  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== 'undefined') {
      obj[i] = source[i];
    }
  }

  return obj;
};

var merge = function merge(target, source, options) {
  if (!source) {
    return target;
  }

  if (typeof source !== 'object') {
    if (Array.isArray(target)) {
      target.push(source);
    } else if (target && typeof target === 'object') {
      if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }

    return target;
  }

  if (!target || typeof target !== 'object') {
    return [target].concat(source);
  }

  var mergeTarget = target;

  if (Array.isArray(target) && !Array.isArray(source)) {
    mergeTarget = arrayToObject(target, options);
  }

  if (Array.isArray(target) && Array.isArray(source)) {
    source.forEach(function (item, i) {
      if (has.call(target, i)) {
        var targetItem = target[i];

        if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
          target[i] = merge(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }

  return Object.keys(source).reduce(function (acc, key) {
    var value = source[key];

    if (has.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }

    return acc;
  }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function (acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};

var decode = function (str) {
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch (e) {
    return str;
  }
};

var encode = function encode(str) {
  // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
  // It has been adapted here for stricter adherence to RFC 3986
  if (str.length === 0) {
    return str;
  }

  var string = typeof str === 'string' ? str : String(str);
  var out = '';

  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);

    if (c === 0x2D // -
    || c === 0x2E // .
    || c === 0x5F // _
    || c === 0x7E // ~
    || c >= 0x30 && c <= 0x39 // 0-9
    || c >= 0x41 && c <= 0x5A // a-z
    || c >= 0x61 && c <= 0x7A // A-Z
    ) {
      out += string.charAt(i);
      continue;
    }

    if (c < 0x80) {
      out = out + hexTable[c];
      continue;
    }

    if (c < 0x800) {
      out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    if (c < 0xD800 || c >= 0xE000) {
      out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    i += 1;
    c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
    /* eslint operator-linebreak: [2, "before"] */

    out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
  }

  return out;
};

var compact = function compact(value) {
  var queue = [{
    obj: {
      o: value
    },
    prop: 'o'
  }];
  var refs = [];

  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);

    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];

      if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
        queue.push({
          obj: obj,
          prop: key
        });
        refs.push(val);
      }
    }
  }

  return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
  if (obj === null || typeof obj === 'undefined') {
    return false;
  }

  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
  arrayToObject: arrayToObject,
  assign: assign,
  compact: compact,
  decode: decode,
  encode: encode,
  isBuffer: isBuffer,
  isRegExp: isRegExp,
  merge: merge
};
},{}],"../node_modules/qs/lib/formats.js":[function(require,module,exports) {
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;
module.exports = {
  'default': 'RFC3986',
  formatters: {
    RFC1738: function (value) {
      return replace.call(value, percentTwenties, '+');
    },
    RFC3986: function (value) {
      return String(value);
    }
  },
  RFC1738: 'RFC1738',
  RFC3986: 'RFC3986'
};
},{}],"../node_modules/qs/lib/stringify.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');

var formats = require('./formats');

var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + '[]';
  },
  indices: function indices(prefix, key) {
    return prefix + '[' + key + ']';
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray = Array.isArray;
var push = Array.prototype.push;

var pushToArray = function (arr, valueOrArray) {
  push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;
var defaults = {
  delimiter: '&',
  encode: true,
  encoder: utils.encode,
  encodeValuesOnly: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};

var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly) {
  var obj = object;

  if (typeof filter === 'function') {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate(obj);
  }

  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
    }

    obj = '';
  }

  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
      return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
    }

    return [formatter(prefix) + '=' + formatter(String(obj))];
  }

  var values = [];

  if (typeof obj === 'undefined') {
    return values;
  }

  var objKeys;

  if (isArray(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (skipNulls && obj[key] === null) {
      continue;
    }

    if (isArray(obj)) {
      pushToArray(values, stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
    } else {
      pushToArray(values, stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
    }
  }

  return values;
};

module.exports = function (object, opts) {
  var obj = object;
  var options = opts ? utils.assign({}, opts) : {};

  if (options.encoder !== null && typeof options.encoder !== 'undefined' && typeof options.encoder !== 'function') {
    throw new TypeError('Encoder has to be a function.');
  }

  var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
  var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
  var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
  var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
  var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
  var sort = typeof options.sort === 'function' ? options.sort : null;
  var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
  var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
  var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;

  if (typeof options.format === 'undefined') {
    options.format = formats['default'];
  } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
    throw new TypeError('Unknown format option provided.');
  }

  var formatter = formats.formatters[options.format];
  var objKeys;
  var filter;

  if (typeof options.filter === 'function') {
    filter = options.filter;
    obj = filter('', obj);
  } else if (isArray(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }

  var keys = [];

  if (typeof obj !== 'object' || obj === null) {
    return '';
  }

  var arrayFormat;

  if (options.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = options.arrayFormat;
  } else if ('indices' in options) {
    arrayFormat = options.indices ? 'indices' : 'repeat';
  } else {
    arrayFormat = 'indices';
  }

  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

  if (!objKeys) {
    objKeys = Object.keys(obj);
  }

  if (sort) {
    objKeys.sort(sort);
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (skipNulls && obj[key] === null) {
      continue;
    }

    pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encode ? encoder : null, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly));
  }

  var joined = keys.join(delimiter);
  var prefix = options.addQueryPrefix === true ? '?' : '';
  return joined.length > 0 ? prefix + joined : '';
};
},{"./utils":"../node_modules/qs/lib/utils.js","./formats":"../node_modules/qs/lib/formats.js"}],"../node_modules/qs/lib/parse.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;
var defaults = {
  allowDots: false,
  allowPrototypes: false,
  arrayLimit: 20,
  decoder: utils.decode,
  delimiter: '&',
  depth: 5,
  parameterLimit: 1000,
  plainObjects: false,
  strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
  var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);

  for (var i = 0; i < parts.length; ++i) {
    var part = parts[i];
    var bracketEqualsPos = part.indexOf(']=');
    var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
    var key, val;

    if (pos === -1) {
      key = options.decoder(part, defaults.decoder);
      val = options.strictNullHandling ? null : '';
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder);
      val = options.decoder(part.slice(pos + 1), defaults.decoder);
    }

    if (has.call(obj, key)) {
      obj[key] = [].concat(obj[key]).concat(val);
    } else {
      obj[key] = val;
    }
  }

  return obj;
};

var parseObject = function (chain, val, options) {
  var leaf = val;

  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];

    if (root === '[]' && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? Object.create(null) : {};
      var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
      var index = parseInt(cleanRoot, 10);

      if (!options.parseArrays && cleanRoot === '') {
        obj = {
          0: leaf
        };
      } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
        obj = [];
        obj[index] = leaf;
      } else if (cleanRoot !== '__proto__') {
        obj[cleanRoot] = leaf;
      }
    }

    leaf = obj;
  }

  return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
  if (!givenKey) {
    return;
  } // Transform dot notation to bracket notation


  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey; // The regex chunks

  var brackets = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g; // Get the parent

  var segment = brackets.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key; // Stash the parent if it exists

  var keys = [];

  if (parent) {
    // If we aren't using plain objects, optionally prefix keys
    // that would overwrite object prototype properties
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(parent);
  } // Loop through children appending to the array until we hit depth


  var i = 0;

  while ((segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;

    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(segment[1]);
  } // If there's a remainder, just add whatever is left


  if (segment) {
    keys.push('[' + key.slice(segment.index) + ']');
  }

  return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
  var options = opts ? utils.assign({}, opts) : {};

  if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
    throw new TypeError('Decoder has to be a function.');
  }

  options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
  options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
  options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
  options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
  options.parseArrays = options.parseArrays !== false;
  options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
  options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
  options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
  options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
  options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
  options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

  if (str === '' || str === null || typeof str === 'undefined') {
    return options.plainObjects ? Object.create(null) : {};
  }

  var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
  var obj = options.plainObjects ? Object.create(null) : {}; // Iterate over the keys and setup the new object

  var keys = Object.keys(tempObj);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options);
    obj = utils.merge(obj, newObj, options);
  }

  return utils.compact(obj);
};
},{"./utils":"../node_modules/qs/lib/utils.js"}],"../node_modules/qs/lib/index.js":[function(require,module,exports) {
'use strict';

var stringify = require('./stringify');

var parse = require('./parse');

var formats = require('./formats');

module.exports = {
  formats: formats,
  parse: parse,
  stringify: stringify
};
},{"./stringify":"../node_modules/qs/lib/stringify.js","./parse":"../node_modules/qs/lib/parse.js","./formats":"../node_modules/qs/lib/formats.js"}],"../node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"../node_modules/axios/lib/utils.js":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};

},{"./helpers/bind":"../node_modules/axios/lib/helpers/bind.js"}],"../node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/AxiosError.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

var prototype = AxiosError.prototype;
var descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED'
// eslint-disable-next-line func-names
].forEach(function(code) {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = function(error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

module.exports = AxiosError;

},{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/defaults/transitional.js":[function(require,module,exports) {
'use strict';

module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

},{}],"../node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"../node_modules/ieee754/index.js":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"../node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"../node_modules/base64-js/index.js","ieee754":"../node_modules/ieee754/index.js","isarray":"../node_modules/isarray/index.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/axios/lib/helpers/toFormData.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
'use strict';

var utils = require('../utils');

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/

function toFormData(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();

  var stack = [];

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  function build(data, parentKey) {
    if (utils.isPlainObject(data) || utils.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }

      stack.push(data);

      utils.forEach(data, function each(value, key) {
        if (utils.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;

        if (value && !parentKey && typeof value === 'object') {
          if (utils.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function(el) {
              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }

        build(value, fullKey);
      });

      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }

  build(obj);

  return formData;
}

module.exports = toFormData;

},{"../utils":"../node_modules/axios/lib/utils.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
'use strict';

var AxiosError = require('./AxiosError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
};

},{"./AxiosError":"../node_modules/axios/lib/core/AxiosError.js"}],"../node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

},{}],"../node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"../node_modules/axios/lib/core/buildFullPath.js":[function(require,module,exports) {
'use strict';

var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

},{"../helpers/isAbsoluteURL":"../node_modules/axios/lib/helpers/isAbsoluteURL.js","../helpers/combineURLs":"../node_modules/axios/lib/helpers/combineURLs.js"}],"../node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/cancel/CanceledError.js":[function(require,module,exports) {
'use strict';

var AxiosError = require('../core/AxiosError');
var utils = require('../utils');

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function CanceledError(message) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

module.exports = CanceledError;

},{"../core/AxiosError":"../node_modules/axios/lib/core/AxiosError.js","../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/parseProtocol.js":[function(require,module,exports) {
'use strict';

module.exports = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
};

},{}],"../node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var transitionalDefaults = require('../defaults/transitional');
var AxiosError = require('../core/AxiosError');
var CanceledError = require('../cancel/CanceledError');
var parseProtocol = require('../helpers/parseProtocol');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    var protocol = parseProtocol(fullPath);

    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData);
  });
};

},{"./../utils":"../node_modules/axios/lib/utils.js","./../core/settle":"../node_modules/axios/lib/core/settle.js","./../helpers/cookies":"../node_modules/axios/lib/helpers/cookies.js","./../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","../core/buildFullPath":"../node_modules/axios/lib/core/buildFullPath.js","./../helpers/parseHeaders":"../node_modules/axios/lib/helpers/parseHeaders.js","./../helpers/isURLSameOrigin":"../node_modules/axios/lib/helpers/isURLSameOrigin.js","../defaults/transitional":"../node_modules/axios/lib/defaults/transitional.js","../core/AxiosError":"../node_modules/axios/lib/core/AxiosError.js","../cancel/CanceledError":"../node_modules/axios/lib/cancel/CanceledError.js","../helpers/parseProtocol":"../node_modules/axios/lib/helpers/parseProtocol.js"}],"../node_modules/axios/lib/helpers/null.js":[function(require,module,exports) {
// eslint-disable-next-line strict
module.exports = null;

},{}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/axios/lib/defaults/index.js":[function(require,module,exports) {
var process = require("process");
'use strict';

var utils = require('../utils');
var normalizeHeaderName = require('../helpers/normalizeHeaderName');
var AxiosError = require('../core/AxiosError');
var transitionalDefaults = require('./transitional');
var toFormData = require('../helpers/toFormData');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('../adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('../adapters/http');
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils.isObject(data);
    var contentType = headers && headers['Content-Type'];

    var isFileList;

    if ((isFileList = utils.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: require('./env/FormData')
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

},{"../utils":"../node_modules/axios/lib/utils.js","../helpers/normalizeHeaderName":"../node_modules/axios/lib/helpers/normalizeHeaderName.js","../core/AxiosError":"../node_modules/axios/lib/core/AxiosError.js","./transitional":"../node_modules/axios/lib/defaults/transitional.js","../helpers/toFormData":"../node_modules/axios/lib/helpers/toFormData.js","../adapters/xhr":"../node_modules/axios/lib/adapters/xhr.js","../adapters/http":"../node_modules/axios/lib/adapters/xhr.js","./env/FormData":"../node_modules/axios/lib/helpers/null.js","process":"../node_modules/process/browser.js"}],"../node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var defaults = require('../defaults');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

},{"./../utils":"../node_modules/axios/lib/utils.js","../defaults":"../node_modules/axios/lib/defaults/index.js"}],"../node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"../node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var CanceledError = require('../cancel/CanceledError');

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"../node_modules/axios/lib/utils.js","./transformData":"../node_modules/axios/lib/core/transformData.js","../cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","../defaults":"../node_modules/axios/lib/defaults/index.js","../cancel/CanceledError":"../node_modules/axios/lib/cancel/CanceledError.js"}],"../node_modules/axios/lib/core/mergeConfig.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

},{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/env/data.js":[function(require,module,exports) {
module.exports = {
  "version": "0.27.2"
};
},{}],"../node_modules/axios/lib/helpers/validator.js":[function(require,module,exports) {
'use strict';

var VERSION = require('../env/data').version;
var AxiosError = require('../core/AxiosError');

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};

},{"../env/data":"../node_modules/axios/lib/env/data.js","../core/AxiosError":"../node_modules/axios/lib/core/AxiosError.js"}],"../node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');
var buildFullPath = require('./buildFullPath');
var validator = require('../helpers/validator');

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

module.exports = Axios;

},{"./../utils":"../node_modules/axios/lib/utils.js","../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","./InterceptorManager":"../node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"../node_modules/axios/lib/core/dispatchRequest.js","./mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js","./buildFullPath":"../node_modules/axios/lib/core/buildFullPath.js","../helpers/validator":"../node_modules/axios/lib/helpers/validator.js"}],"../node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
'use strict';

var CanceledError = require('./CanceledError');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./CanceledError":"../node_modules/axios/lib/cancel/CanceledError.js"}],"../node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"../node_modules/axios/lib/helpers/isAxiosError.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = require('./cancel/CanceledError');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');
axios.VERSION = require('./env/data').version;
axios.toFormData = require('./helpers/toFormData');

// Expose AxiosError class
axios.AxiosError = require('../lib/core/AxiosError');

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"../node_modules/axios/lib/utils.js","./helpers/bind":"../node_modules/axios/lib/helpers/bind.js","./core/Axios":"../node_modules/axios/lib/core/Axios.js","./core/mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js","./defaults":"../node_modules/axios/lib/defaults/index.js","./cancel/CanceledError":"../node_modules/axios/lib/cancel/CanceledError.js","./cancel/CancelToken":"../node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","./env/data":"../node_modules/axios/lib/env/data.js","./helpers/toFormData":"../node_modules/axios/lib/helpers/toFormData.js","../lib/core/AxiosError":"../node_modules/axios/lib/core/AxiosError.js","./helpers/spread":"../node_modules/axios/lib/helpers/spread.js","./helpers/isAxiosError":"../node_modules/axios/lib/helpers/isAxiosError.js"}],"../node_modules/axios/index.js":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"../node_modules/axios/lib/axios.js"}],"js/asset/getToken.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _qs = _interopRequireDefault(require("qs"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  config: {
    tdxClientId: 'YjkxMTE0MjYtMjQyZTkwNGEtNThiZS00NjI4',
    tdxClientSecret: 'ZWFiYzJmNTItMzIyYi00MjUxLTliNDUtMWZmY2FkN2UxNjU3'
  },
  getCookieToken: function getCookieToken() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)tdxToken\s*\=\s*([^;]*).*$)|^.*$/, '$1'); // 從cookie取token
  },
  getAuthorizationHeader: function getAuthorizationHeader() {
    var parameter = {
      grant_type: 'client_credentials',
      client_id: Buffer.from(this.config.tdxClientId, 'base64'),
      client_secret: Buffer.from(this.config.tdxClientSecret, 'base64')
    };
    var authUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
    var options = {
      method: 'POST',
      url: authUrl,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: _qs.default.stringify(parameter)
    };
    return (0, _axios.default)(options);
  }
};
exports.default = _default;
},{"qs":"../node_modules/qs/lib/index.js","axios":"../node_modules/axios/index.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/swiper/swiper-bundle.min.js":[function(require,module,exports) {
var define;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Swiper 8.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 13, 2022
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function t(s, a) {
    void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach(i => {
      void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }

  const s = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: {
      blur: function () {},
      nodeName: ""
    },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({
      initEvent: function () {}
    }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function () {},
      getElementsByTagName: () => []
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }

  const i = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {}
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: () => ({
      getPropertyValue: () => ""
    }),
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: () => ({}),
    requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame: function (e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }

  class n extends Array {
    constructor(e) {
      "number" == typeof e ? super(e) : (super(...(e || [])), function (e) {
        const t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: () => t,
          set: function (e) {
            t.__proto__ = e;
          }
        });
      }(this));
    }

  }

  function l(e) {
    void 0 === e && (e = []);
    const t = [];
    return e.forEach(e => {
      Array.isArray(e) ? t.push(...l(e)) : t.push(e);
    }), t;
  }

  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function d(e, t) {
    const s = r(),
          i = a();
    let l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);

    if ("string" == typeof e) {
      const s = e.trim();

      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;

        for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e]);
      } else l = function (e, t) {
        if ("string" != typeof e) return [e];
        const s = [],
              a = t.querySelectorAll(e);

        for (let e = 0; e < a.length; e += 1) s.push(a[e]);

        return s;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }

    return new n(function (e) {
      const t = [];

      for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);

      return t;
    }(l));
  }

  d.fn = n.prototype;
  const c = {
    addClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

      const a = l(t.map(e => e.split(" ")));
      return this.forEach(e => {
        e.classList.add(...a);
      }), this;
    },
    removeClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

      const a = l(t.map(e => e.split(" ")));
      return this.forEach(e => {
        e.classList.remove(...a);
      }), this;
    },
    hasClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

      const a = l(t.map(e => e.split(" ")));
      return o(this, e => a.filter(t => e.classList.contains(t)).length > 0).length > 0;
    },
    toggleClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

      const a = l(t.map(e => e.split(" ")));
      this.forEach(e => {
        a.forEach(t => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) this[s].setAttribute(e, t);else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);

      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);

      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;

      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;

      return this;
    },
    on: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

      let [a, i, r, n] = t;

      function l(e) {
        const t = e.target;
        if (!t) return;
        const s = e.target.dom7EventData || [];
        if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s);else {
          const e = d(t).parents();

          for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s);
        }
      }

      function o(e) {
        const t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
      const c = a.split(" ");
      let p;

      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i) for (p = 0; p < c.length; p += 1) {
          const e = c[p];
          t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
            listener: r,
            proxyListener: l
          }), t.addEventListener(e, l, n);
        } else for (p = 0; p < c.length; p += 1) {
          const e = c[p];
          t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
            listener: r,
            proxyListener: o
          }), t.addEventListener(e, o, n);
        }
      }

      return this;
    },
    off: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];

      let [a, i, r, n] = t;
      "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
      const l = a.split(" ");

      for (let e = 0; e < l.length; e += 1) {
        const t = l[e];

        for (let e = 0; e < this.length; e += 1) {
          const s = this[e];
          let a;
          if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) {
            const i = a[e];
            r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1));
          }
        }
      }

      return this;
    },
    trigger: function () {
      const e = r();

      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];

      const i = s[0].split(" "),
            n = s[1];

      for (let t = 0; t < i.length; t += 1) {
        const a = i[t];

        for (let t = 0; t < this.length; t += 1) {
          const i = this[t];

          if (e.CustomEvent) {
            const t = new e.CustomEvent(a, {
              detail: n,
              bubbles: !0,
              cancelable: !0
            });
            i.dom7EventData = s.filter((e, t) => t > 0), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return e && t.on("transitionend", function s(a) {
        a.target === this && (e.call(this, a), t.off("transitionend", s));
      }), this;
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function () {
      const e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = r(),
              t = a(),
              s = this[0],
              i = s.getBoundingClientRect(),
              n = t.body,
              l = s.clientTop || n.clientTop || 0,
              o = s.clientLeft || n.clientLeft || 0,
              d = s === e ? e.scrollY : s.scrollTop,
              c = s === e ? e.scrollX : s.scrollLeft;
        return {
          top: i.top + d - l,
          left: i.left + c - o
        };
      }

      return null;
    },
    css: function (e, t) {
      const s = r();
      let a;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;

        return this;
      }

      return this;
    },
    each: function (e) {
      return e ? (this.forEach((t, s) => {
        e.apply(t, [t, s]);
      }), this) : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;

      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;

      return this;
    },
    is: function (e) {
      const t = r(),
            s = a(),
            i = this[0];
      let l, o;
      if (!i || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);

        for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;

        return !1;
      }

      if (e === s) return i === s;
      if (e === t) return i === t;

      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return !0;

        return !1;
      }

      return !1;
    },
    index: function () {
      let e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);

        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return d([]);

      if (e < 0) {
        const s = t + e;
        return d(s < 0 ? [] : [this[s]]);
      }

      return d([this[e]]);
    },
    append: function () {
      let e;
      const t = a();

      for (let s = 0; s < arguments.length; s += 1) {
        e = s < 0 || arguments.length <= s ? void 0 : arguments[s];

        for (let s = 0; s < this.length; s += 1) if ("string" == typeof e) {
          const a = t.createElement("div");

          for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild);
        } else if (e instanceof n) for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);else this[s].appendChild(e);
      }

      return this;
    },
    prepend: function (e) {
      const t = a();
      let s, i;

      for (s = 0; s < this.length; s += 1) if ("string" == typeof e) {
        const a = t.createElement("div");

        for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
      } else if (e instanceof n) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);else this[s].insertBefore(e, this[s].childNodes[0]);

      return this;
    },
    next: function (e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);

      for (; s.nextElementSibling;) {
        const a = s.nextElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), s = a;
      }

      return d(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([]);
      }

      return d([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);

      for (; s.previousElementSibling;) {
        const a = s.previousElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), s = a;
      }

      return d(t);
    },
    parent: function (e) {
      const t = [];

      for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));

      return d(t);
    },
    parents: function (e) {
      const t = [];

      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].parentNode;

        for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
      }

      return d(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];

      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].querySelectorAll(e);

        for (let e = 0; e < a.length; e += 1) t.push(a[e]);
      }

      return d(t);
    },
    children: function (e) {
      const t = [];

      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].children;

        for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s]);
      }

      return d(t);
    },
    filter: function (e) {
      return d(o(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);

      return this;
    }
  };

  function p(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function u() {
    return Date.now();
  }

  function h(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;

    const l = function (e) {
      const t = r();
      let s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);

    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }

  function m(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function f(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }

  function g() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];

    for (let s = 1; s < arguments.length; s += 1) {
      const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];

      if (null != a && !f(a)) {
        const s = Object.keys(Object(a)).filter(e => t.indexOf(e) < 0);

        for (let t = 0, i = s.length; t < i; t += 1) {
          const i = s[t],
                r = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i]);
        }
      }
    }

    return e;
  }

  function v(e, t, s) {
    e.style.setProperty(t, s);
  }

  function w(e) {
    let {
      swiper: t,
      targetPosition: s,
      side: a
    } = e;
    const i = r(),
          n = -t.translate;
    let l,
        o = null;
    const d = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);

    const c = s > n ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
      l = new Date().getTime(), null === o && (o = l);
      const e = Math.max(Math.min((l - o) / d, 1), 0),
            r = .5 - Math.cos(e * Math.PI) / 2;
      let c = n + r * (s - n);
      if (p(c, s) && (c = s), t.wrapperEl.scrollTo(_defineProperty({}, a, c)), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(_defineProperty({}, a, c));
      }), void i.cancelAnimationFrame(t.cssModeFrameID);
      t.cssModeFrameID = i.requestAnimationFrame(u);
    };

    u();
  }

  let b, x, y;

  function E() {
    return b || (b = function () {
      const e = r(),
            t = a();
      return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function () {
          let t = !1;

          try {
            const s = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, s);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), b;
  }

  function C(e) {
    return void 0 === e && (e = {}), x || (x = function (e) {
      let {
        userAgent: t
      } = void 0 === e ? {} : e;
      const s = E(),
            a = r(),
            i = a.navigator.platform,
            n = t || a.navigator.userAgent,
            l = {
        ios: !1,
        android: !1
      },
            o = a.screen.width,
            d = a.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
      let p = n.match(/(iPad).*OS\s([\d_]+)/);
      const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === i;
      let f = "MacIntel" === i;
      return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(o, "x").concat(d)) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l;
    }(e)), x;
  }

  function T() {
    return y || (y = function () {
      const e = r();
      return {
        isSafari: function () {
          const t = e.navigator.userAgent.toLowerCase();
          return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
        }(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      };
    }()), y;
  }

  Object.keys(c).forEach(e => {
    Object.defineProperty(d.fn, e, {
      value: c[e],
      writable: !0
    });
  });
  var $ = {
    on: function (e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return e.split(" ").forEach(e => {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
      }), a;
    },
    once: function (e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;

      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;

        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];

        t.apply(a, r);
      }

      return i.__emitterProxy = t, a.on(e, i, s);
    },
    onAny: function (e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny: function (e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function (e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(e => {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i) => {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
        });
      }), s) : s;
    },
    emit: function () {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;

      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];

      "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
      return (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
          e.apply(a, [t, ...s]);
        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
          e.apply(a, s);
        });
      }), e;
    }
  };
  var S = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.$el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function () {
      const e = this;

      function t(t) {
        return e.isHorizontal() ? t : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[t];
      }

      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }

      const a = e.params,
            {
        $wrapperEl: i,
        size: r,
        rtlTranslate: n,
        wrongRTL: l
      } = e,
            o = e.virtual && a.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            c = i.children(".".concat(e.params.slideClass)),
            p = o ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
            m = [];
      let f = a.slidesOffsetBefore;
      "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
      let g = a.slidesOffsetAfter;
      "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
      const w = e.snapGrid.length,
            b = e.slidesGrid.length;
      let x = a.spaceBetween,
          y = -f,
          E = 0,
          C = 0;
      if (void 0 === r) return;
      "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
      }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
      }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const T = a.grid && a.grid.rows > 1 && e.grid;
      let $;
      T && e.grid.initSlides(p);
      const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(e => void 0 !== a.breakpoints[e].slidesPerView).length > 0;

      for (let i = 0; i < p; i += 1) {
        $ = 0;
        const n = c.eq(i);

        if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
          if ("auto" === a.slidesPerView) {
            S && (c[i].style[t("width")] = "");
            const r = getComputedStyle(n[0]),
                  l = n[0].style.transform,
                  o = n[0].style.webkitTransform;
            if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);else {
              const e = s(r, "width"),
                    t = s(r, "padding-left"),
                    a = s(r, "padding-right"),
                    i = s(r, "margin-left"),
                    l = s(r, "margin-right"),
                    o = r.getPropertyValue("box-sizing");
              if (o && "border-box" === o) $ = e + i + l;else {
                const {
                  clientWidth: s,
                  offsetWidth: r
                } = n[0];
                $ = e + t + a + i + l + (r - s);
              }
            }
            l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($));
          } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = "".concat($, "px"));

          c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1;
        }
      }

      if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
        width: "".concat(e.virtualSize + a.spaceBetween, "px")
      }), a.setWrapperSize && i.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + a.spaceBetween, "px"))), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
        const t = [];

        for (let s = 0; s < u.length; s += 1) {
          let i = u[s];
          a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i);
        }

        u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
      }

      if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
        const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !a.cssMode || t !== c.length - 1).css(_defineProperty({}, s, "".concat(x, "px")));
      }

      if (a.centeredSlides && a.centeredSlidesBounds) {
        let e = 0;
        m.forEach(t => {
          e += t + (a.spaceBetween ? a.spaceBetween : 0);
        }), e -= a.spaceBetween;
        const t = e - r;
        u = u.map(e => e < 0 ? -f : e > t ? t + g : e);
      }

      if (a.centerInsufficientSlides) {
        let e = 0;

        if (m.forEach(t => {
          e += t + (a.spaceBetween ? a.spaceBetween : 0);
        }), e -= a.spaceBetween, e < r) {
          const t = (r - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }), h.forEach((e, s) => {
            h[s] = e + t;
          });
        }
      }

      if (Object.assign(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: h,
        slidesSizesGrid: m
      }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
        v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
        const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + s);
      }

      if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
        const t = "".concat(a.containerModifierClass, "backface-hidden"),
              s = e.$el.hasClass(t);
        p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
            s = [],
            a = t.virtual && t.params.virtual.enabled;
      let i,
          r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

      const n = e => a ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];

      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || d([])).each(e => {
          s.push(e);
        });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          const e = t.activeIndex + i;
          if (e > t.slides.length && !a) break;
          s.push(n(e));
        }
      } else s.push(n(t.activeIndex));

      for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
        const e = s[i].offsetHeight;
        r = e > r ? e : r;
      }

      (r || 0 === r) && t.$wrapperEl.css("height", "".concat(r, "px"));
    },
    updateSlidesOffset: function () {
      const e = this,
            t = e.slides;

      for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      const t = this,
            s = t.params,
            {
        slides: a,
        rtlTranslate: i,
        snapGrid: r
      } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

      for (let e = 0; e < a.length; e += 1) {
        const l = a[e];
        let o = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
        const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
              c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
              p = -(n - o),
              u = p + t.slidesSizesGrid[e];
        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c;
      }

      t.visibleSlides = d(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;

      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * s || 0;
      }

      const s = t.params,
            a = t.maxTranslate() - t.minTranslate();
      let {
        progress: i,
        isBeginning: r,
        isEnd: n
      } = t;
      const l = r,
            o = n;
      0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
        progress: i,
        isBeginning: r,
        isEnd: n
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
            {
        slides: t,
        params: s,
        $wrapperEl: a,
        activeIndex: i,
        realIndex: r
      } = e,
            n = e.virtual && s.virtual.enabled;
      let l;
      t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), l = n ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass));
      let o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
      let d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
      s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
        slidesGrid: a,
        snapGrid: i,
        params: r,
        activeIndex: n,
        realIndex: l,
        snapIndex: o
      } = t;
      let d,
          c = e;

      if (void 0 === c) {
        for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);

        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }

      if (i.indexOf(s) >= 0) d = i.indexOf(s);else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
      const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: n,
        activeIndex: c
      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
            s = t.params,
            a = d(e).closest(".".concat(s.slideClass))[0];
      let i,
          r = !1;
      if (a) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === a) {
        r = !0, i = e;
        break;
      }
      if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var M = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const {
        params: t,
        rtlTranslate: s,
        translate: a,
        $wrapperEl: i
      } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = h(i[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
            {
        rtlTranslate: a,
        params: i,
        $wrapperEl: r,
        wrapperEl: n,
        progress: l
      } = s;
      let o,
          d = 0,
          c = 0;
      s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform("translate3d(".concat(d, "px, ").concat(c, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
      const p = s.maxTranslate() - s.minTranslate();
      o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
      const r = this,
            {
        params: n,
        wrapperEl: l
      } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
            d = r.maxTranslate();
      let c;

      if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;else {
          var _l$scrollTo;

          if (!r.support.smoothScroll) return w({
            swiper: r,
            targetPosition: -c,
            side: e ? "left" : "top"
          }), !0;
          l.scrollTo((_l$scrollTo = {}, _defineProperty(_l$scrollTo, e ? "left" : "top", -c), _defineProperty(_l$scrollTo, "behavior", "smooth"), _l$scrollTo));
        }
        return !0;
      }

      return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
    }
  };

  function P(e) {
    let {
      swiper: t,
      runCallbacks: s,
      direction: a,
      step: i
    } = e;
    const {
      activeIndex: r,
      previousIndex: n
    } = t;
    let l = a;

    if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit("transition".concat(i)), s && r !== n) {
      if ("reset" === l) return void t.emit("slideResetTransition".concat(i));
      t.emit("slideChangeTransition".concat(i)), "next" === l ? t.emit("slideNextTransition".concat(i)) : t.emit("slidePrevTransition".concat(i));
    }
  }

  var k = {
    slideTo: function (e, t, s, a, i) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));

      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
        e = t;
      }

      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: m
      } = r;
      if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
      const f = Math.min(r.params.slidesPerGroupSkip, n);
      let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
      const v = -o[g];
      if (r.updateProgress(v), l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
        const t = -Math.floor(100 * v),
              s = Math.floor(100 * d[e]),
              a = Math.floor(100 * d[e + 1]);
        void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e);
      }

      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1;
      }

      let b;
      if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;

      if (l.cssMode) {
        const e = r.isHorizontal(),
              s = u ? v : -v;

        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(() => {
            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
          });
        } else {
          var _h$scrollTo;

          if (!r.support.smoothScroll) return w({
            swiper: r,
            targetPosition: s,
            side: e ? "left" : "top"
          }), !0;
          h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, e ? "left" : "top", s), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
        }

        return !0;
      }

      return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0;
    },
    slideToLoop: function (e, t, s, a) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
        e = t;
      }

      const i = this;
      let r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
            {
        animating: i,
        enabled: r,
        params: n
      } = a;
      if (!r) return a;
      let l = n.slidesPerGroup;
      "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;

      if (n.loop) {
        if (i && n.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
      }

      return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
            {
        params: i,
        animating: r,
        snapGrid: n,
        slidesGrid: l,
        rtlTranslate: o,
        enabled: d
      } = a;
      if (!d) return a;

      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
      }

      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      const p = c(o ? a.translate : -a.translate),
            u = n.map(e => c(e));
      let h = n[u.indexOf(p) - 1];

      if (void 0 === h && i.cssMode) {
        let e;
        n.forEach((t, s) => {
          p >= t && (e = s);
        }), void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
      }

      let m = 0;

      if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
        const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }

      return a.slideTo(m, e, t, s);
    },
    slideReset: function (e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / i.params.slidesPerGroup),
            o = i.rtlTranslate ? i.translate : -i.translate;

      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }

      return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function () {
      const e = this,
            {
        params: t,
        $wrapperEl: s
      } = e,
            a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      let i,
          r = e.clickedIndex;

      if (t.loop) {
        if (e.animating) return;
        i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(() => {
          e.slideTo(r);
        })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(() => {
          e.slideTo(r);
        })) : e.slideTo(r);
      } else e.slideTo(r);
    }
  };
  var z = {
    loopCreate: function () {
      const e = this,
            t = a(),
            {
        params: s,
        $wrapperEl: i
      } = e,
            r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
      r.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
      let n = r.children(".".concat(s.slideClass));

      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - n.length % s.slidesPerGroup;

        if (e !== s.slidesPerGroup) {
          for (let a = 0; a < e; a += 1) {
            const e = d(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));
            r.append(e);
          }

          n = r.children(".".concat(s.slideClass));
        }
      }

      "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
      const l = [],
            o = [];
      n.each((t, s) => {
        const a = d(t);
        s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s);
      });

      for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));

      for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: a,
        allowSlidePrev: i,
        allowSlideNext: r,
        snapGrid: n,
        rtlTranslate: l
      } = e;
      let o;
      e.allowSlidePrev = !0, e.allowSlideNext = !0;
      const d = -n[t] - e.getTranslate();

      if (t < a) {
        o = s.length - 3 * a + t, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= s.length - a) {
        o = -s.length + t + a, o += a;
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      }

      e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
    },
    loopDestroy: function () {
      const {
        $wrapperEl: e,
        params: t,
        slides: s
      } = this;
      e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
    }
  };

  function L(e) {
    const t = this,
          s = a(),
          i = r(),
          n = t.touchEventsData,
          {
      params: l,
      touches: o,
      enabled: c
    } = t;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let h = d(p.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
    if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
    if (!n.isTouchEvent && "button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
    const m = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
          f = !(!p.target || !p.target.shadowRoot);
    if (l.noSwiping && (f ? function (e, t) {
      return void 0 === t && (t = this), function t(s) {
        if (!s || s === a() || s === r()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const i = s.closest(e);
        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
      }(t);
    }(m, h[0]) : h.closest(m)[0])) return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
    const g = o.currentX,
          v = o.currentY,
          w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
          b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;

    if (w && (g <= b || g >= i.innerWidth - b)) {
      if ("prevent" !== w) return;
      e.preventDefault();
    }

    if (Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
      let e = !0;
      h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
      const a = e && t.allowTouchMove && l.touchStartPreventDefault;
      !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault();
    }

    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
  }

  function O(e) {
    const t = a(),
          s = this,
          i = s.touchEventsData,
          {
      params: r,
      touches: n,
      rtlTranslate: l,
      enabled: o
    } = s;
    if (!o) return;
    let c = e;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
          h = "touchmove" === c.type ? p.pageX : c.pageX,
          m = "touchmove" === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
    if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
      startX: h,
      startY: m,
      currentX: h,
      currentY: m
    }), i.touchStartTime = u()));
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
    if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    n.currentX = h, n.currentY = m;
    const f = n.currentX - n.startX,
          g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;

    if (void 0 === i.isScrolling) {
      let e;
      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
    }

    if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
    let v = s.isHorizontal() ? f : g;
    n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    let w = !0,
        b = r.resistanceRatio;

    if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }

    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }

  function I(e) {
    const t = this,
          s = t.touchEventsData,
          {
      params: a,
      touches: i,
      rtlTranslate: r,
      slidesGrid: n,
      enabled: l
    } = t;
    if (!l) return;
    let o = e;
    if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const d = u(),
          c = d - s.touchStartTime;

    if (t.allowClick) {
      const e = o.path || o.composedPath && o.composedPath();
      t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
    }

    if (s.lastClickTime = u(), p(() => {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    let h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
    if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    let m = 0,
        f = t.slidesSizesGrid[0];

    for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2]);
    }

    let g = null,
        v = null;
    a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
    const w = (h - n[m]) / f,
          b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
    }
  }

  function A() {
    const e = this,
          {
      params: t,
      el: s
    } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const {
      allowSlideNext: a,
      allowSlidePrev: i,
      snapGrid: r
    } = e;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }

  function D(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function G() {
    const e = this,
          {
      wrapperEl: t,
      rtlTranslate: s,
      enabled: a
    } = e;
    if (!a) return;
    let i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }

  let N = !1;

  function B() {}

  const H = (e, t) => {
    const s = a(),
          {
      params: i,
      touchEvents: r,
      el: n,
      wrapperEl: l,
      device: o,
      support: d
    } = e,
          c = !!i.nested,
          p = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;

    if (d.touch) {
      const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
        passive: !1,
        capture: c
      } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t);
    } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);

    (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0);
  };

  var X = {
    attachEvents: function () {
      const e = this,
            t = a(),
            {
        params: s,
        support: i
      } = e;
      e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on");
    },
    detachEvents: function () {
      H(this, "off");
    }
  };

  const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;

  var R = {
    addClasses: function () {
      const e = this,
            {
        classNames: t,
        params: s,
        rtl: a,
        $el: i,
        device: r,
        support: n
      } = e,
            l = function (e, t) {
        const s = [];
        return e.forEach(e => {
          "object" == _typeof(e) ? Object.keys(e).forEach(a => {
            e[a] && s.push(t + a);
          }) : "string" == typeof e && s.push(t + e);
        }), s;
      }(["initialized", s.direction, {
        "pointer-events": !n.touch
      }, {
        "free-mode": e.params.freeMode && s.freeMode.enabled
      }, {
        autoheight: s.autoHeight
      }, {
        rtl: a
      }, {
        grid: s.grid && s.grid.rows > 1
      }, {
        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
      }, {
        android: r.android
      }, {
        ios: r.ios
      }, {
        "css-mode": s.cssMode
      }, {
        centered: s.cssMode && s.centeredSlides
      }, {
        "watch-progress": s.watchSlidesProgress
      }], s.containerModifierClass);

      t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const {
        $el: e,
        classNames: t
      } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    }
  };
  var W = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function j(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
            i = s[a];
      "object" == _typeof(i) && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
        auto: !0
      }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
        enabled: !0
      }), "object" != _typeof(e[a]) || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
        enabled: !1
      }), g(t, s)) : g(t, s)) : g(t, s);
    };
  }

  const _ = {
    eventsEmitter: $,
    update: S,
    translate: M,
    transition: {
      setTransition: function (e, t) {
        const s = this;
        s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
              {
          params: a
        } = s;
        a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }));
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
              {
          params: a
        } = s;
        s.animating = !1, a.cssMode || (s.setTransition(0), P({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "End"
        }));
      }
    },
    slide: k,
    loop: z,
    grabCursor: {
      setGrabCursor: function (e) {
        const t = this;
        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
        const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab";
      },
      unsetGrabCursor: function () {
        const e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      }
    },
    events: X,
    breakpoints: {
      setBreakpoint: function () {
        const e = this,
              {
          activeIndex: t,
          initialized: s,
          loopedSlides: a = 0,
          params: i,
          $el: r
        } = e,
              n = i.breakpoints;
        if (!n || n && 0 === Object.keys(n).length) return;
        const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        const o = (l in n ? n[l] : void 0) || e.originalParams,
              d = Y(e, i),
              c = Y(e, o),
              p = i.enabled;
        d && !c ? (r.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && c && (r.addClass("".concat(i.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
          const s = i[t] && i[t].enabled,
                a = o[t] && o[t].enabled;
          s && !a && e[t].disable(), !s && a && e[t].enable();
        });
        const u = o.direction && o.direction !== i.direction,
              h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), g(e.params, o);
        const m = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
      },
      getBreakpoint: function (e, t, s) {
        if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
        let a = !1;
        const i = r(),
              n = "window" === t ? i.innerHeight : s.clientHeight,
              l = Object.keys(e).map(e => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return {
              value: n * t,
              point: e
            };
          }

          return {
            value: e,
            point: e
          };
        });
        l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));

        for (let e = 0; e < l.length; e += 1) {
          const {
            point: r,
            value: n
          } = l[e];
          "window" === t ? i.matchMedia("(min-width: ".concat(n, "px)")).matches && (a = r) : n <= s.clientWidth && (a = r);
        }

        return a || "max";
      }
    },
    checkOverflow: {
      checkOverflow: function () {
        const e = this,
              {
          isLocked: t,
          params: s
        } = e,
              {
          slidesOffsetBefore: a
        } = s;

        if (a) {
          const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
          e.isLocked = e.size > s;
        } else e.isLocked = 1 === e.snapGrid.length;

        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      }
    },
    classes: R,
    images: {
      loadImage: function (e, t, s, a, i, n) {
        const l = r();
        let o;

        function c() {
          n && n();
        }

        d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image(), o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
      },
      preloadImages: function () {
        const e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (let s = 0; s < e.imagesToLoad.length; s += 1) {
          const a = e.imagesToLoad[s];
          e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
        q = {};

  class V {
    constructor() {
      let e, t;

      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];

      if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
        const e = [];
        return d(t.el).each(s => {
          const a = g({}, t, {
            el: s
          });
          e.push(new V(a));
        }), e;
      }

      const r = this;
      r.__swiper__ = !0, r.support = E(), r.device = C({
        userAgent: t.userAgent
      }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const n = {};
      r.modules.forEach(e => {
        e({
          swiper: r,
          extendParams: j(t, n),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r)
        });
      });
      const l = g({}, W, n);
      return r.params = g({}, l, q, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
        r.on(e, r.params.on[e]);
      }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
        enabled: r.params.enabled,
        el: e,
        classNames: [],
        slides: d(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: () => "horizontal" === r.params.direction,
        isVertical: () => "vertical" === r.params.direction,
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEvents: function () {
          const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
          return r.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2],
            cancel: e[3]
          }, r.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: u(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), r.emit("_swiper"), r.params.init && r.init(), r;
    }

    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }

    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }

    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
            i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }

    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
      e.emit("_containerClasses", t.join(" "));
    }

    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
    }

    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each(s => {
        const a = e.getSlideClasses(s);
        t.push({
          slideEl: s,
          classNames: a
        }), e.emit("_slideClass", s, a);
      }), e.emit("_slideClasses", t);
    }

    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l
      } = this;
      let o = 1;

      if (s.centeredSlides) {
        let e,
            t = a[l].swiperSlideSize;

        for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));

        for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
      } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
        (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
      } else for (let e = l - 1; e >= 0; e -= 1) {
        i[l] - i[e] < n && (o += 1);
      }

      return o;
    }

    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const {
        snapGrid: t,
        params: s
      } = e;

      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      let i;
      s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }

    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
            a = s.params.direction;
      return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass("".concat(s.params.containerModifierClass).concat(a)).addClass("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.each(t => {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), s.emit("changeDirection"), t && s.update()), s;
    }

    changeLanguageDirection(e) {
      const t = this;
      t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.$el.removeClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update());
    }

    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = d(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;

      const i = () => ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));

      let r = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = d(e.shadowRoot.querySelector(i()));
          return t.children = e => s.children(e), t;
        }

        return s.children ? s.children(i()) : d(s).children(i());
      })();

      if (0 === r.length && t.params.createElements) {
        const e = a().createElement("div");
        r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(".".concat(t.params.slideClass)).each(e => {
          r.append(e);
        });
      }

      return Object.assign(t, {
        $el: s,
        el: e,
        $wrapperEl: r,
        wrapperEl: r[0],
        mounted: !0,
        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
        wrongRTL: "-webkit-box" === r.css("display")
      }), !0;
    }

    init(e) {
      const t = this;
      if (t.initialized) return t;
      return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
    }

    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
            {
        params: a,
        $el: i,
        $wrapperEl: r,
        slides: n
      } = s;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
        s.off(e);
      }), !1 !== e && (s.$el[0].swiper = null, function (e) {
        const t = e;
        Object.keys(t).forEach(e => {
          try {
            t[e] = null;
          } catch (e) {}

          try {
            delete t[e];
          } catch (e) {}
        });
      }(s)), s.destroyed = !0), null;
    }

    static extendDefaults(e) {
      g(q, e);
    }

    static get extendedDefaults() {
      return q;
    }

    static get defaults() {
      return W;
    }

    static installModule(e) {
      V.prototype.__modules__ || (V.prototype.__modules__ = []);
      const t = V.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }

    static use(e) {
      return Array.isArray(e) ? (e.forEach(e => V.installModule(e)), V) : (V.installModule(e), V);
    }

  }

  function F(e, t, s, i) {
    const r = a();
    return e.params.createElements && Object.keys(i).forEach(a => {
      if (!s[a] && !0 === s.auto) {
        let n = e.$el.children(".".concat(i[a]))[0];
        n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n;
      }
    }), s;
  }

  function U(e) {
    return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."));
  }

  function K(e) {
    const t = this,
          {
      $wrapperEl: s,
      params: a
    } = t;
    if (a.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }

  function Z(e) {
    const t = this,
          {
      params: s,
      $wrapperEl: a,
      activeIndex: i
    } = t;
    s.loop && t.loopDestroy();
    let r = i + 1;

    if ("object" == _typeof(e) && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);

      r = i + e.length;
    } else a.prepend(e);

    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }

  function Q(e, t) {
    const s = this,
          {
      $wrapperEl: a,
      params: i,
      activeIndex: r
    } = s;
    let n = r;
    i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(".".concat(i.slideClass)));
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];

    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides.eq(t);
      e.remove(), d.unshift(e);
    }

    if ("object" == _typeof(t) && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);

      o = n > e ? n + t.length : n;
    } else a.append(t);

    for (let e = 0; e < d.length; e += 1) a.append(d[e]);

    i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }

  function J(e) {
    const t = this,
          {
      params: s,
      $wrapperEl: a,
      activeIndex: i
    } = t;
    let r = i;
    s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(".".concat(s.slideClass)));
    let n,
        l = r;

    if ("object" == _typeof(e) && "length" in e) {
      for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);

      l = Math.max(l, 0);
    } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);

    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }

  function ee() {
    const e = this,
          t = [];

    for (let s = 0; s < e.slides.length; s += 1) t.push(s);

    e.removeSlide(t);
  }

  function te(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d
    } = e;
    let c;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push("".concat(s.params.containerModifierClass).concat(t)), l && l() && s.classNames.push("".concat(s.params.containerModifierClass, "3d"));
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }), a("setTranslate", () => {
      s.params.effect === t && i();
    }), a("setTransition", (e, a) => {
      s.params.effect === t && r(a);
    }), a("transitionEnd", () => {
      if (s.params.effect === t && o) {
        if (!d || !d().slideShadows) return;
        s.slides.each(e => {
          s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
        }), o();
      }
    }), a("virtualUpdate", () => {
      s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(() => {
        c && s.slides && s.slides.length && (i(), c = !1);
      }));
    });
  }

  function se(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    }) : t;
  }

  function ae(e) {
    let {
      swiper: t,
      duration: s,
      transformEl: a,
      allSlides: i
    } = e;
    const {
      slides: r,
      activeIndex: n,
      $wrapperEl: l
    } = t;

    if (t.params.virtualTranslate && 0 !== s) {
      let e,
          s = !1;
      e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd(() => {
        if (s) return;
        if (!t || t.destroyed) return;
        s = !0, t.animating = !1;
        const e = ["webkitTransitionEnd", "transitionend"];

        for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
      });
    }
  }

  function ie(e, t, s) {
    const a = "swiper-slide-shadow" + (s ? "-".concat(s) : ""),
          i = e.transformEl ? t.find(e.transformEl) : t;
    let r = i.children(".".concat(a));
    return r.length || (r = d("<div class=\"swiper-slide-shadow".concat(s ? "-".concat(s) : "", "\"></div>")), i.append(r)), r;
  }

  Object.keys(_).forEach(e => {
    Object.keys(_[e]).forEach(t => {
      V.prototype[t] = _[e][t];
    });
  }), V.use([function (e) {
    let {
      swiper: t,
      on: s,
      emit: a
    } = e;
    const i = r();
    let n = null,
        l = null;

    const o = () => {
      t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
    },
          d = () => {
      t && !t.destroyed && t.initialized && a("orientationchange");
    };

    s("init", () => {
      t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver(e => {
        l = i.requestAnimationFrame(() => {
          const {
            width: s,
            height: a
          } = t;
          let i = s,
              r = a;
          e.forEach(e => {
            let {
              contentBoxSize: s,
              contentRect: a,
              target: n
            } = e;
            n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
          }), i === s && r === a || o();
        });
      }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
    }), s("destroy", () => {
      l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;

    const n = [],
          l = r(),
          o = function (e, t) {
      void 0 === t && (t = {});
      const s = new (l.MutationObserver || l.WebkitMutationObserver)(e => {
        if (1 === e.length) return void i("observerUpdate", e[0]);

        const t = function () {
          i("observerUpdate", e[0]);
        };

        l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), n.push(s);
    };

    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), a("init", () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const e = t.$el.parents();

          for (let t = 0; t < e.length; t += 1) o(e[t]);
        }

        o(t.$el[0], {
          childList: t.params.observeSlideChildren
        }), o(t.$wrapperEl[0], {
          attributes: !1
        });
      }
    }), a("destroy", () => {
      n.forEach(e => {
        e.disconnect();
      }), n.splice(0, n.length);
    });
  }]);
  const re = [function (e) {
    let t,
        {
      swiper: s,
      extendParams: a,
      on: i,
      emit: r
    } = e;

    function n(e, t) {
      const a = s.params.virtual;
      if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
      const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d("<div class=\"".concat(s.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
      return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i;
    }

    function l(e) {
      const {
        slidesPerView: t,
        slidesPerGroup: a,
        centeredSlides: i
      } = s.params,
            {
        addSlidesBefore: l,
        addSlidesAfter: o
      } = s.params.virtual,
            {
        from: d,
        to: c,
        slides: p,
        slidesGrid: u,
        offset: h
      } = s.virtual;
      s.params.cssMode || s.updateActiveIndex();
      const m = s.activeIndex || 0;
      let f, g, v;
      f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
      const w = Math.max((m || 0) - v, 0),
            b = Math.min((m || 0) + g, p.length - 1),
            x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

      function y() {
        s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate");
      }

      if (Object.assign(s.virtual, {
        from: w,
        to: b,
        offset: x,
        slidesGrid: s.slidesGrid
      }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, "".concat(x, "px")), s.updateProgress(), void r("virtualUpdate");
      if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
        offset: x,
        from: w,
        to: b,
        slides: function () {
          const e = [];

          for (let t = w; t <= b; t += 1) e.push(p[t]);

          return e;
        }()
      }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
      const E = [],
            C = [];
      if (e) s.$wrapperEl.find(".".concat(s.params.slideClass)).remove();else for (let e = d; e <= c; e += 1) (e < w || e > b) && s.$wrapperEl.find(".".concat(s.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).remove();

      for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));

      C.forEach(e => {
        s.$wrapperEl.append(n(p[e], e));
      }), E.sort((e, t) => t - e).forEach(e => {
        s.$wrapperEl.prepend(n(p[e], e));
      }), s.$wrapperEl.children(".swiper-slide").css(f, "".concat(x, "px")), y();
    }

    a({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    }), s.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    }, i("beforeInit", () => {
      s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push("".concat(s.params.containerModifierClass, "virtual")), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l());
    }), i("setTranslate", () => {
      s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
        l();
      }, 100)) : l());
    }), i("init update resize", () => {
      s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", "".concat(s.virtualSize, "px"));
    }), Object.assign(s.virtual, {
      appendSlide: function (e) {
        if ("object" == _typeof(e) && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);
        l(!0);
      },
      prependSlide: function (e) {
        const t = s.activeIndex;
        let a = t + 1,
            i = 1;

        if (Array.isArray(e)) {
          for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);

          a = t + e.length, i = e.length;
        } else s.virtual.slides.unshift(e);

        if (s.params.virtual.cache) {
          const e = s.virtual.cache,
                t = {};
          Object.keys(e).forEach(s => {
            const a = e[s],
                  r = a.attr("data-swiper-slide-index");
            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a;
          }), s.virtual.cache = t;
        }

        l(!0), s.slideTo(a, 0);
      },
      removeSlide: function (e) {
        if (null == e) return;
        let t = s.activeIndex;
        if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0);else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        l(!0), s.slideTo(t, 0);
      },
      removeAllSlides: function () {
        s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0);
      },
      update: l
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: i,
      emit: n
    } = e;
    const l = a(),
          o = r();

    function c(e) {
      if (!t.enabled) return;
      const {
        rtlTranslate: s
      } = t;
      let a = e;
      a.originalEvent && (a = a.originalEvent);
      const i = a.keyCode || a.charCode,
            r = t.params.keyboard.pageUpDown,
            d = r && 33 === i,
            c = r && 34 === i,
            p = 37 === i,
            u = 39 === i,
            h = 38 === i,
            m = 40 === i;
      if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
          let e = !1;
          if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;
          const a = t.$el,
                i = a[0].clientWidth,
                r = a[0].clientHeight,
                n = o.innerWidth,
                l = o.innerHeight,
                d = t.$el.offset();
          s && (d.left -= t.$el[0].scrollLeft);
          const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];

          for (let t = 0; t < c.length; t += 1) {
            const s = c[t];

            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
              if (0 === s[0] && 0 === s[1]) continue;
              e = !0;
            }
          }

          if (!e) return;
        }

        t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i);
      }
    }

    function p() {
      t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0);
    }

    function u() {
      t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1);
    }

    t.keyboard = {
      enabled: !1
    }, s({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), i("init", () => {
      t.params.keyboard.enabled && p();
    }), i("destroy", () => {
      t.keyboard.enabled && u();
    }), Object.assign(t.keyboard, {
      enable: p,
      disable: u
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const n = r();
    let l;
    s({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    }), t.mousewheel = {
      enabled: !1
    };
    let o,
        c = u();
    const h = [];

    function m() {
      t.enabled && (t.mouseEntered = !0);
    }

    function f() {
      t.enabled && (t.mouseEntered = !1);
    }

    function g(e) {
      return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = new n.Date().getTime(), !1));
    }

    function v(e) {
      let s = e,
          a = !0;
      if (!t.enabled) return;
      const r = t.params.mousewheel;
      t.params.cssMode && s.preventDefault();
      let n = t.$el;
      if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      let c = 0;

      const m = t.rtlTranslate ? -1 : 1,
            f = function (e) {
        let t = 0,
            s = 0,
            a = 0,
            i = 0;
        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
          spinX: t,
          spinY: s,
          pixelX: a,
          pixelY: i
        };
      }(s);

      if (r.forceToAxis) {
        if (t.isHorizontal()) {
          if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
          c = -f.pixelX * m;
        } else {
          if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
          c = -f.pixelY;
        }
      } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
      if (0 === c) return !0;
      r.invert && (c = -c);
      let v = t.getTranslate() + c * r.sensitivity;

      if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
        const e = {
          time: u(),
          delta: Math.abs(c),
          direction: Math.sign(c)
        },
              a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;

        if (!a) {
          o = void 0, t.params.loop && t.loopFix();
          let n = t.getTranslate() + c * r.sensitivity;
          const d = t.isBeginning,
                u = t.isEnd;

          if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
            clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
            const s = h.length ? h[h.length - 1] : void 0,
                  a = h[0];
            if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0);else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
              const s = c > 0 ? .8 : .2;
              o = e, h.splice(0), l = p(() => {
                t.slideToClosest(t.params.speed, !0, void 0, s);
              }, 0);
            }
            l || (l = p(() => {
              o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0;
        }
      } else {
        const s = {
          time: u(),
          delta: Math.abs(c),
          direction: Math.sign(c),
          raw: e
        };
        h.length >= 2 && h.shift();
        const a = h.length ? h[h.length - 1] : void 0;
        if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function (e) {
          const s = t.params.mousewheel;

          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;

          return !1;
        }(s)) return !0;
      }

      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
    }

    function w(e) {
      let s = t.$el;
      "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v);
    }

    function b() {
      return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0);
    }

    function x() {
      return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0);
    }

    a("init", () => {
      !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b();
    }), a("destroy", () => {
      t.params.cssMode && b(), t.mousewheel.enabled && x();
    }), Object.assign(t.mousewheel, {
      enable: b,
      disable: x
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;

    function r(e) {
      let s;
      return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
    }

    function n(e, s) {
      const a = t.params.navigation;
      e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
    }

    function l() {
      if (t.params.loop) return;
      const {
        $nextEl: e,
        $prevEl: s
      } = t.navigation;
      n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
    }

    function o(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
    }

    function c(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
    }

    function p() {
      const e = t.params.navigation;
      if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !e.nextEl && !e.prevEl) return;
      const s = r(e.nextEl),
            a = r(e.prevEl);
      s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
        $nextEl: s,
        nextEl: s && s[0],
        $prevEl: a,
        prevEl: a && a[0]
      }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
    }

    function u() {
      const {
        $nextEl: e,
        $prevEl: s
      } = t.navigation;
      e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
    }

    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), t.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    }, a("init", () => {
      !1 === t.params.navigation.enabled ? h() : (p(), l());
    }), a("toEdge fromEdge lock unlock", () => {
      l();
    }), a("destroy", () => {
      u();
    }), a("enable disable", () => {
      const {
        $nextEl: e,
        $prevEl: s
      } = t.navigation;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
    }), a("click", (e, s) => {
      const {
        $nextEl: a,
        $prevEl: r
      } = t.navigation,
            n = s.target;

      if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
        let e;
        a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass);
      }
    });

    const h = () => {
      t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
    };

    Object.assign(t.navigation, {
      enable: () => {
        t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l();
      },
      disable: h,
      update: l,
      init: p,
      destroy: u
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const r = "swiper-pagination";
    let n;
    s({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: e => e,
        formatFractionTotal: e => e,
        bulletClass: "".concat(r, "-bullet"),
        bulletActiveClass: "".concat(r, "-bullet-active"),
        modifierClass: "".concat(r, "-"),
        currentClass: "".concat(r, "-current"),
        totalClass: "".concat(r, "-total"),
        hiddenClass: "".concat(r, "-hidden"),
        progressbarFillClass: "".concat(r, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(r, "-progressbar-opposite"),
        clickableClass: "".concat(r, "-clickable"),
        lockClass: "".concat(r, "-lock"),
        horizontalClass: "".concat(r, "-horizontal"),
        verticalClass: "".concat(r, "-vertical"),
        paginationDisabledClass: "".concat(r, "-disabled")
      }
    }), t.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    let l = 0;

    function o() {
      return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
    }

    function c(e, s) {
      const {
        bulletActiveClass: a
      } = t.params.pagination;
      e[s]().addClass("".concat(a, "-").concat(s))[s]().addClass("".concat(a, "-").concat(s, "-").concat(s));
    }

    function p() {
      const e = t.rtl,
            s = t.params.pagination;
      if (o()) return;
      const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            r = t.pagination.$el;
      let p;
      const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

      if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
        const a = t.pagination.bullets;
        let i, o, u;
        if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => "".concat(s.bulletActiveClass).concat(e)).join(" ")), r.length > 1) a.each(e => {
          const t = d(e),
                a = t.index();
          a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass("".concat(s.bulletActiveClass, "-main")), a === i && c(t, "prev"), a === o && c(t, "next"));
        });else {
          const e = a.eq(p),
                r = e.index();

          if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
            const e = a.eq(i),
                  n = a.eq(o);

            for (let e = i; e <= o; e += 1) a.eq(e).addClass("".concat(s.bulletActiveClass, "-main"));

            if (t.params.loop) {
              if (r >= a.length) {
                for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass("".concat(s.bulletActiveClass, "-main"));

                a.eq(a.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
              } else c(e, "prev"), c(n, "next");
            } else c(e, "prev"), c(n, "next");
          }
        }

        if (s.dynamicBullets) {
          const i = Math.min(a.length, s.dynamicMainBullets + 4),
                r = (n * i - n) / 2 - u * n,
                l = e ? "right" : "left";
          a.css(t.isHorizontal() ? l : "top", "".concat(r, "px"));
        }
      }

      if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
        let e;
        e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
        const a = (p + 1) / u;
        let i = 1,
            n = 1;
        "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(i, ") scaleY(").concat(n, ")")).transition(t.params.speed);
      }

      "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }

    function u() {
      const e = t.params.pagination;
      if (o()) return;
      const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            a = t.pagination.$el;
      let r = "";

      if ("bullets" === e.type) {
        let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);

        for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += "<".concat(e.bulletElement, " class=\"").concat(e.bulletClass, "\"></").concat(e.bulletElement, ">");

        a.html(r), t.pagination.bullets = a.find(U(e.bulletClass));
      }

      "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : "<span class=\"".concat(e.currentClass, "\"></span> / <span class=\"").concat(e.totalClass, "\"></span>"), a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : "<span class=\"".concat(e.progressbarFillClass, "\"></span>"), a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
    }

    function h() {
      t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      const e = t.params.pagination;
      if (!e.el) return;
      let s = d(e.el);
      0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter(e => d(e).parents(".swiper")[0] === t.el))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass("".concat(e.modifierClass).concat(e.type, "-dynamic")), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), function (e) {
        e.preventDefault();
        let s = d(this).index() * t.params.slidesPerGroup;
        t.params.loop && (s += t.loopedSlides), t.slideTo(s);
      }), Object.assign(t.pagination, {
        $el: s,
        el: s[0]
      }), t.enabled || s.addClass(e.lockClass));
    }

    function m() {
      const e = t.params.pagination;
      if (o()) return;
      const s = t.pagination.$el;
      s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass));
    }

    a("init", () => {
      !1 === t.params.pagination.enabled ? f() : (h(), u(), p());
    }), a("activeIndexChange", () => {
      (t.params.loop || void 0 === t.snapIndex) && p();
    }), a("snapIndexChange", () => {
      t.params.loop || p();
    }), a("slidesLengthChange", () => {
      t.params.loop && (u(), p());
    }), a("snapGridLengthChange", () => {
      t.params.loop || (u(), p());
    }), a("destroy", () => {
      m();
    }), a("enable disable", () => {
      const {
        $el: e
      } = t.pagination;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
    }), a("lock unlock", () => {
      p();
    }), a("click", (e, s) => {
      const a = s.target,
            {
        $el: r
      } = t.pagination;

      if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
        const e = r.hasClass(t.params.pagination.hiddenClass);
        i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass);
      }
    });

    const f = () => {
      t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m();
    };

    Object.assign(t.pagination, {
      enable: () => {
        t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p();
      },
      disable: f,
      render: u,
      update: p,
      init: h,
      destroy: m
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: i,
      emit: r
    } = e;
    const n = a();
    let l,
        o,
        c,
        u,
        h = !1,
        m = null,
        f = null;

    function g() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const {
        scrollbar: e,
        rtlTranslate: s,
        progress: a
      } = t,
            {
        $dragEl: i,
        $el: r
      } = e,
            n = t.params.scrollbar;
      let l = o,
          d = (c - o) * a;
      s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform("translate3d(".concat(d, "px, 0, 0)")), i[0].style.width = "".concat(l, "px")) : (i.transform("translate3d(0px, ".concat(d, "px, 0)")), i[0].style.height = "".concat(l, "px")), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout(() => {
        r[0].style.opacity = 0, r.transition(400);
      }, 1e3));
    }

    function v() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const {
        scrollbar: e
      } = t,
            {
        $dragEl: s,
        $el: a
      } = e;
      s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = "".concat(o, "px") : s[0].style.height = "".concat(o, "px"), a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
    }

    function w(e) {
      return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    }

    function b(e) {
      const {
        scrollbar: s,
        rtlTranslate: a
      } = t,
            {
        $el: i
      } = s;
      let r;
      r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
      t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
    }

    function x(e) {
      const s = t.params.scrollbar,
            {
        scrollbar: a,
        $wrapperEl: i
      } = t,
            {
        $el: n,
        $dragEl: o
      } = a;
      h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e);
    }

    function y(e) {
      const {
        scrollbar: s,
        $wrapperEl: a
      } = t,
            {
        $el: i,
        $dragEl: n
      } = s;
      h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e));
    }

    function E(e) {
      const s = t.params.scrollbar,
            {
        scrollbar: a,
        $wrapperEl: i
      } = t,
            {
        $el: n
      } = a;
      h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p(() => {
        n.css("opacity", 0), n.transition(400);
      }, 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
    }

    function C(e) {
      const {
        scrollbar: s,
        touchEventsTouch: a,
        touchEventsDesktop: i,
        params: r,
        support: l
      } = t,
            o = s.$el;
      if (!o) return;
      const d = o[0],
            c = !(!l.passiveListener || !r.passiveListeners) && {
        passive: !1,
        capture: !1
      },
            p = !(!l.passiveListener || !r.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      if (!d) return;
      const u = "on" === e ? "addEventListener" : "removeEventListener";
      l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p));
    }

    function T() {
      const {
        scrollbar: e,
        $el: s
      } = t;
      t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      const a = t.params.scrollbar;
      if (!a.el) return;
      let i = d(a.el);
      t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
      let r = i.find(".".concat(t.params.scrollbar.dragClass));
      0 === r.length && (r = d("<div class=\"".concat(t.params.scrollbar.dragClass, "\"></div>")), i.append(r)), Object.assign(e, {
        $el: i,
        el: i[0],
        $dragEl: r,
        dragEl: r[0]
      }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
    }

    function $() {
      const e = t.params.scrollbar,
            s = t.scrollbar.$el;
      s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off");
    }

    s({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    }), t.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null
    }, i("init", () => {
      !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g());
    }), i("update resize observerUpdate lock unlock", () => {
      v();
    }), i("setTranslate", () => {
      g();
    }), i("setTransition", (e, s) => {
      !function (e) {
        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
      }(s);
    }), i("enable disable", () => {
      const {
        $el: e
      } = t.scrollbar;
      e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
    }), i("destroy", () => {
      $();
    });

    const S = () => {
      t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $();
    };

    Object.assign(t.scrollbar, {
      enable: () => {
        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g();
      },
      disable: S,
      updateSize: v,
      setTranslate: g,
      init: T,
      destroy: $
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      parallax: {
        enabled: !1
      }
    });

    const i = (e, s) => {
      const {
        rtl: a
      } = t,
            i = d(e),
            r = a ? -1 : 1,
            n = i.attr("data-swiper-parallax") || "0";
      let l = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y");
      const c = i.attr("data-swiper-parallax-scale"),
            p = i.attr("data-swiper-parallax-opacity");

      if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
        const e = p - (p - 1) * (1 - Math.abs(s));
        i[0].style.opacity = e;
      }

      if (null == c) i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));else {
        const e = c - (c - 1) * (1 - Math.abs(s));
        i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(e, ")"));
      }
    },
          r = () => {
      const {
        $el: e,
        slides: s,
        progress: a,
        snapGrid: r
      } = t;
      e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
        i(e, a);
      }), s.each((e, s) => {
        let n = e.progress;
        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
          i(e, n);
        });
      });
    };

    a("beforeInit", () => {
      t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
    }), a("init", () => {
      t.params.parallax.enabled && r();
    }), a("setTranslate", () => {
      t.params.parallax.enabled && r();
    }), a("setTransition", (e, s) => {
      t.params.parallax.enabled && function (e) {
        void 0 === e && (e = t.params.speed);
        const {
          $el: s
        } = t;
        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
          const s = d(t);
          let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (a = 0), s.transition(a);
        });
      }(s);
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const n = r();
    s({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), t.zoom = {
      enabled: !1
    };
    let l,
        o,
        c,
        p = 1,
        u = !1;
    const m = {
      $slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      $imageEl: void 0,
      $imageWrapEl: void 0,
      maxRatio: 3
    },
          f = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    },
          g = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    let v = 1;

    function w(e) {
      if (e.targetTouches.length < 2) return 1;
      const t = e.targetTouches[0].pageX,
            s = e.targetTouches[0].pageY,
            a = e.targetTouches[1].pageX,
            i = e.targetTouches[1].pageY;
      return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
    }

    function b(e) {
      const s = t.support,
            a = t.params.zoom;

      if (o = !1, c = !1, !s.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        o = !0, m.scaleStart = w(e);
      }

      m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(".".concat(t.params.slideClass)), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(a.containerClass)), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0;
    }

    function x(e) {
      const s = t.support,
            a = t.params.zoom,
            i = t.zoom;

      if (!s.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        c = !0, m.scaleMove = w(e);
      }

      m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")"))) : "gesturechange" === e.type && b(e);
    }

    function y(e) {
      const s = t.device,
            a = t.support,
            i = t.params.zoom,
            r = t.zoom;

      if (!a.gestures) {
        if (!o || !c) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
        o = !1, c = !1;
      }

      m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(".concat(r.scale, ")")), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0));
    }

    function E(e) {
      const s = t.zoom;
      if (!m.$imageEl || 0 === m.$imageEl.length) return;
      if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
      f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
      const a = f.width * s.scale,
            i = f.height * s.scale;

      if (!(a < m.slideWidth && i < m.slideHeight)) {
        if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
          if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
          if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1);
        }

        e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform("translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
      }
    }

    function C() {
      const e = t.zoom;
      m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0);
    }

    function T(e) {
      const s = t.zoom,
            a = t.params.zoom;
      if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(".".concat(t.params.slideClass))), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(a.containerClass))), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
      let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
      t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass("".concat(a.zoomedSlideClass)), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform("translate3d(".concat(h, "px, ").concat(g, "px,0)")), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
    }

    function $() {
      const e = t.zoom,
            s = t.params.zoom;
      m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(".".concat(s.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(".".concat(s.containerClass))), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass("".concat(s.zoomedSlideClass)), m.$slideEl = void 0);
    }

    function S(e) {
      const s = t.zoom;
      s.scale && 1 !== s.scale ? $() : T(e);
    }

    function M() {
      const e = t.support;
      return {
        passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !e.passiveListener || {
          passive: !1,
          capture: !0
        }
      };
    }

    function P() {
      return ".".concat(t.params.slideClass);
    }

    function k(e) {
      const {
        passiveListener: s
      } = M(),
            a = P();
      t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s);
    }

    function z() {
      l || (l = !0, k("on"));
    }

    function L() {
      l && (l = !1, k("off"));
    }

    function O() {
      const e = t.zoom;
      if (e.enabled) return;
      e.enabled = !0;
      const s = t.support,
            {
        passiveListener: a,
        activeListenerWithCapture: i
      } = M(),
            r = P();
      s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), E, i);
    }

    function I() {
      const e = t.zoom;
      if (!e.enabled) return;
      const s = t.support;
      e.enabled = !1;
      const {
        passiveListener: a,
        activeListenerWithCapture: i
      } = M(),
            r = P();
      s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), E, i);
    }

    Object.defineProperty(t.zoom, "scale", {
      get: () => v,
      set: function (e) {
        if (v !== e) {
          const t = m.$imageEl ? m.$imageEl[0] : void 0,
                s = m.$slideEl ? m.$slideEl[0] : void 0;
          i("zoomChange", e, t, s);
        }

        v = e;
      }
    }), a("init", () => {
      t.params.zoom.enabled && O();
    }), a("destroy", () => {
      I();
    }), a("touchStart", (e, s) => {
      t.zoom.enabled && function (e) {
        const s = t.device;
        m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      }(s);
    }), a("touchEnd", (e, s) => {
      t.zoom.enabled && function () {
        const e = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
        f.isTouched = !1, f.isMoved = !1;
        let s = 300,
            a = 300;
        const i = g.x * s,
              r = f.currentX + i,
              n = g.y * a,
              l = f.currentY + n;
        0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
        const o = Math.max(s, a);
        f.currentX = r, f.currentY = l;
        const d = f.width * e.scale,
              c = f.height * e.scale;
        f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform("translate3d(".concat(f.currentX, "px, ").concat(f.currentY, "px,0)"));
      }();
    }), a("doubleTap", (e, s) => {
      !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s);
    }), a("transitionEnd", () => {
      t.zoom.enabled && t.params.zoom.enabled && C();
    }), a("slideChange", () => {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
    }), Object.assign(t.zoom, {
      enable: O,
      disable: I,
      in: T,
      out: $,
      toggle: S
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    s({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    }), t.lazy = {};
    let n = !1,
        l = !1;

    function o(e, s) {
      void 0 === s && (s = !0);
      const a = t.params.lazy;
      if (void 0 === e) return;
      if (0 === t.slides.length) return;
      const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : t.slides.eq(e),
            n = r.find(".".concat(a.elementClass, ":not(.").concat(a.loadedClass, "):not(.").concat(a.loadingClass, ")"));
      !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each(e => {
        const n = d(e);
        n.addClass(a.loadingClass);
        const l = n.attr("data-background"),
              c = n.attr("data-src"),
              p = n.attr("data-srcset"),
              u = n.attr("data-sizes"),
              h = n.parent("picture");
        t.loadImage(n[0], c || l, p, u, !1, () => {
          if (null != t && t && (!t || t.params) && !t.destroyed) {
            if (l ? (n.css("background-image", "url(\"".concat(l, "\")")), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each(e => {
              const t = d(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
            }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(".".concat(a.preloaderClass)).remove(), t.params.loop && s) {
              const e = r.attr("data-swiper-slide-index");

              if (r.hasClass(t.params.slideDuplicateClass)) {
                o(t.$wrapperEl.children("[data-swiper-slide-index=\"".concat(e, "\"]:not(.").concat(t.params.slideDuplicateClass, ")")).index(), !1);
              } else {
                o(t.$wrapperEl.children(".".concat(t.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).index(), !1);
              }
            }

            i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight();
          }
        }), i("lazyImageLoad", r[0], n[0]);
      });
    }

    function c() {
      const {
        $wrapperEl: e,
        params: s,
        slides: a,
        activeIndex: i
      } = t,
            r = t.virtual && s.virtual.enabled,
            n = s.lazy;
      let c = s.slidesPerView;

      function p(t) {
        if (r) {
          if (e.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(t, "\"]")).length) return !0;
        } else if (a[t]) return !0;

        return !1;
      }

      function u(e) {
        return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
      }

      if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(".".concat(s.slideVisibleClass)).each(e => {
        o(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
      });else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e);else o(i);
      if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        const e = n.loadPrevNextAmount,
              t = Math.ceil(c),
              s = Math.min(i + t + Math.max(e, t), a.length),
              r = Math.max(i - Math.max(t, e), 0);

        for (let e = i + t; e < s; e += 1) p(e) && o(e);

        for (let e = r; e < i; e += 1) p(e) && o(e);
      } else {
        const t = e.children(".".concat(s.slideNextClass));
        t.length > 0 && o(u(t));
        const a = e.children(".".concat(s.slidePrevClass));
        a.length > 0 && o(u(a));
      }
    }

    function p() {
      const e = r();
      if (!t || t.destroyed) return;
      const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
            a = s[0] === e,
            i = a ? e.innerWidth : s[0].offsetWidth,
            l = a ? e.innerHeight : s[0].offsetHeight,
            o = t.$el.offset(),
            {
        rtlTranslate: u
      } = t;
      let h = !1;
      u && (o.left -= t.$el[0].scrollLeft);
      const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];

      for (let e = 0; e < m.length; e += 1) {
        const t = m[e];

        if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
          if (0 === t[0] && 0 === t[1]) continue;
          h = !0;
        }
      }

      const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f));
    }

    a("beforeInit", () => {
      t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
    }), a("init", () => {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
    }), a("scroll", () => {
      t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
    }), a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
      t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
    }), a("transitionStart", () => {
      t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c());
    }), a("transitionEnd", () => {
      t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c());
    }), a("slideChange", () => {
      const {
        lazy: e,
        cssMode: s,
        watchSlidesProgress: a,
        touchReleaseOnEdges: i,
        resistanceRatio: r
      } = t.params;
      e.enabled && (s || a && (i || 0 === r)) && c();
    }), a("destroy", () => {
      t.$el && t.$el.find(".".concat(t.params.lazy.loadingClass)).removeClass(t.params.lazy.loadingClass);
    }), Object.assign(t.lazy, {
      load: c,
      loadInSlide: o
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;

    function i(e, t) {
      const s = function () {
        let e, t, s;
        return (a, i) => {
          for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;

          return e;
        };
      }();

      let a, i;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
      }, this;
    }

    function r() {
      t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
    }

    s({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), t.controller = {
      control: void 0
    }, a("beforeInit", () => {
      t.controller.control = t.params.controller.control;
    }), a("update", () => {
      r();
    }), a("resize", () => {
      r();
    }), a("observerUpdate", () => {
      r();
    }), a("setTranslate", (e, s, a) => {
      t.controller.control && t.controller.setTranslate(s, a);
    }), a("setTransition", (e, s, a) => {
      t.controller.control && t.controller.setTransition(s, a);
    }), Object.assign(t.controller, {
      setTranslate: function (e, s) {
        const a = t.controller.control;
        let r, n;
        const l = t.constructor;

        function o(e) {
          const s = t.rtlTranslate ? -t.translate : t.translate;
          "slide" === t.params.controller.by && (!function (e) {
            t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid));
          }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);else a instanceof l && s !== a && o(a);
      },
      setTransition: function (e, s) {
        const a = t.constructor,
              i = t.controller.control;
        let r;

        function n(s) {
          s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p(() => {
            s.updateAutoHeight();
          }), s.$wrapperEl.transitionEnd(() => {
            i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd());
          }));
        }

        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);else i instanceof a && s !== i && n(i);
      }
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null
      }
    });
    let i = null;

    function r(e) {
      const t = i;
      0 !== t.length && (t.html(""), t.html(e));
    }

    function n(e) {
      e.attr("tabIndex", "0");
    }

    function l(e) {
      e.attr("tabIndex", "-1");
    }

    function o(e, t) {
      e.attr("role", t);
    }

    function c(e, t) {
      e.attr("aria-roledescription", t);
    }

    function p(e, t) {
      e.attr("aria-label", t);
    }

    function u(e) {
      e.attr("aria-disabled", !0);
    }

    function h(e) {
      e.attr("aria-disabled", !1);
    }

    function m(e) {
      if (13 !== e.keyCode && 32 !== e.keyCode) return;
      const s = t.params.a11y,
            a = d(e.target);
      t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click();
    }

    function f() {
      return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
    }

    function g() {
      return f() && t.params.pagination.clickable;
    }

    const v = (e, t, s) => {
      n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function (e, t) {
        e.attr("aria-controls", t);
      }(e, t);
    },
          w = e => {
      const s = e.target.closest(".".concat(t.params.slideClass));
      if (!s || !t.slides.includes(s)) return;
      const a = t.slides.indexOf(s) === t.activeIndex,
            i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
      a || i || t.slideTo(t.slides.indexOf(s), 0);
    },
          b = () => {
      const e = t.params.a11y;
      e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
      const s = t.params.loop ? t.slides.filter(e => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
      e.slideLabelMessage && t.slides.each((a, i) => {
        const r = d(a),
              n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
        p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s));
      });
    },
          x = () => {
      const e = t.params.a11y;
      t.$el.append(i);
      const s = t.$el;
      e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
      const a = t.$wrapperEl,
            r = e.id || a.attr("id") || "swiper-wrapper-".concat((n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, () => Math.round(16 * Math.random()).toString(16))));
      var n;
      const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
      var o;
      let d, u;
      o = r, a.attr("id", o), function (e, t) {
        e.attr("aria-live", t);
      }(a, l), b(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", w, !0);
    };

    a("beforeInit", () => {
      i = d("<span class=\"".concat(t.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
    }), a("afterInit", () => {
      t.params.a11y.enabled && x();
    }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      t.params.a11y.enabled && b();
    }), a("fromEdge toEdge afterInit lock unlock", () => {
      t.params.a11y.enabled && function () {
        if (t.params.loop || t.params.rewind || !t.navigation) return;
        const {
          $nextEl: e,
          $prevEl: s
        } = t.navigation;
        s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
      }();
    }), a("paginationUpdate", () => {
      t.params.a11y.enabled && function () {
        const e = t.params.a11y;
        f() && t.pagination.bullets.each(s => {
          const a = d(s);
          t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(".".concat(t.params.pagination.bulletActiveClass)) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
        });
      }();
    }), a("destroy", () => {
      t.params.a11y.enabled && function () {
        let e, s;
        i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", w, !0);
      }();
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1
      }
    });
    let i = !1,
        n = {};

    const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
          o = e => {
      const t = r();
      let s;
      s = e ? new URL(e) : t.location;
      const a = s.pathname.slice(1).split("/").filter(e => "" !== e),
            i = a.length;
      return {
        key: a[i - 2],
        value: a[i - 1]
      };
    },
          d = (e, s) => {
      const a = r();
      if (!i || !t.params.history.enabled) return;
      let n;
      n = t.params.url ? new URL(t.params.url) : a.location;
      const o = t.slides.eq(s);
      let d = l(o.attr("data-history"));

      if (t.params.history.root.length > 0) {
        let s = t.params.history.root;
        "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = "".concat(s, "/").concat(e, "/").concat(d);
      } else n.pathname.includes(e) || (d = "".concat(e, "/").concat(d));

      t.params.history.keepQuery && (d += n.search);
      const c = a.history.state;
      c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
        value: d
      }, null, d) : a.history.pushState({
        value: d
      }, null, d));
    },
          c = (e, s, a) => {
      if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
        const r = t.slides.eq(i);

        if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
          const s = r.index();
          t.slideTo(s, e, a);
        }
      } else t.slideTo(0, e, a);
    },
          p = () => {
      n = o(t.params.url), c(t.params.speed, n.value, !1);
    };

    a("init", () => {
      t.params.history.enabled && (() => {
        const e = r();

        if (t.params.history) {
          if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
          i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p));
        }
      })();
    }), a("destroy", () => {
      t.params.history.enabled && (() => {
        const e = r();
        t.params.history.replaceState || e.removeEventListener("popstate", p);
      })();
    }), a("transitionEnd _freeModeNoMomentumRelease", () => {
      i && d(t.params.history.key, t.activeIndex);
    }), a("slideChange", () => {
      i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      emit: i,
      on: n
    } = e,
        l = !1;
    const o = a(),
          c = r();
    s({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    });

    const p = () => {
      i("hashChange");
      const e = o.location.hash.replace("#", "");

      if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
        const s = t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-hash=\"").concat(e, "\"]")).index();
        if (void 0 === s) return;
        t.slideTo(s);
      }
    },
          u = () => {
      if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, "#".concat(t.slides.eq(t.activeIndex).attr("data-hash")) || ""), i("hashSet");else {
        const e = t.slides.eq(t.activeIndex),
              s = e.attr("data-hash") || e.attr("data-history");
        o.location.hash = s || "", i("hashSet");
      }
    };

    n("init", () => {
      t.params.hashNavigation.enabled && (() => {
        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
        l = !0;
        const e = o.location.hash.replace("#", "");

        if (e) {
          const s = 0;

          for (let a = 0, i = t.slides.length; a < i; a += 1) {
            const i = t.slides.eq(a);

            if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
              const e = i.index();
              t.slideTo(e, s, t.params.runCallbacksOnInit, !0);
            }
          }
        }

        t.params.hashNavigation.watchState && d(c).on("hashchange", p);
      })();
    }), n("destroy", () => {
      t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p);
    }), n("transitionEnd _freeModeNoMomentumRelease", () => {
      l && u();
    }), n("slideChange", () => {
      l && t.params.cssMode && u();
    });
  }, function (e) {
    let t,
        {
      swiper: s,
      extendParams: i,
      on: r,
      emit: n
    } = e;

    function l() {
      const e = s.slides.eq(s.activeIndex);
      let a = s.params.autoplay.delay;
      e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p(() => {
        let e;
        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l();
      }, a);
    }

    function o() {
      return void 0 === t && !s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0);
    }

    function d() {
      return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0);
    }

    function c(e) {
      s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
        s.$wrapperEl[0].addEventListener(e, h);
      }) : (s.autoplay.paused = !1, l())));
    }

    function u() {
      const e = a();
      "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1);
    }

    function h(e) {
      s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
        s.$wrapperEl[0].removeEventListener(e, h);
      }), s.autoplay.paused = !1, s.autoplay.running ? l() : d());
    }

    function m() {
      s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(e => {
        s.$wrapperEl[0].removeEventListener(e, h);
      });
    }

    function f() {
      s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l());
    }

    s.autoplay = {
      running: !1,
      paused: !1
    }, i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    }), r("init", () => {
      if (s.params.autoplay.enabled) {
        o();
        a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
      }
    }), r("beforeTransitionStart", (e, t, a) => {
      s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
    }), r("sliderFirstMove", () => {
      s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c());
    }), r("touchEnd", () => {
      s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
    }), r("destroy", () => {
      s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
      a().removeEventListener("visibilitychange", u);
    }), Object.assign(s.autoplay, {
      pause: c,
      run: l,
      start: o,
      stop: d
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    let i = !1,
        r = !1;

    function n() {
      const e = t.thumbs.swiper;
      if (!e || e.destroyed) return;
      const s = e.clickedIndex,
            a = e.clickedSlide;
      if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      let i;

      if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
        let e = t.activeIndex;
        t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
        const s = t.slides.eq(e).prevAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index(),
              a = t.slides.eq(e).nextAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index();
        i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
      }

      t.slideTo(i);
    }

    function l() {
      const {
        thumbs: e
      } = t.params;
      if (i) return !1;
      i = !0;
      const s = t.constructor;
      if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(t.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      });else if (m(e.swiper)) {
        const a = Object.assign({}, e.swiper);
        Object.assign(a, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), t.thumbs.swiper = new s(a), r = !0;
      }
      return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0;
    }

    function o(e) {
      const s = t.thumbs.swiper;
      if (!s || s.destroyed) return;
      const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
      let i = 1;
      const r = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(t.realIndex + e, "\"]")).addClass(r);else for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
      const n = t.params.thumbs.autoScrollOffset,
            l = n && !s.params.loop;

      if (t.realIndex !== s.realIndex || l) {
        let i,
            r,
            o = s.activeIndex;

        if (s.params.loop) {
          s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
          const e = s.slides.eq(o).prevAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index(),
                a = s.slides.eq(o).nextAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index();
          i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev";
        } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev";

        l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0));
      }
    }

    t.thumbs = {
      swiper: null
    }, a("beforeInit", () => {
      const {
        thumbs: e
      } = t.params;
      e && e.swiper && (l(), o(!0));
    }), a("slideChange update resize observerUpdate", () => {
      o();
    }), a("setTransition", (e, s) => {
      const a = t.thumbs.swiper;
      a && !a.destroyed && a.setTransition(s);
    }), a("beforeDestroy", () => {
      const e = t.thumbs.swiper;
      e && !e.destroyed && r && e.destroy();
    }), Object.assign(t.thumbs, {
      init: l,
      update: o
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      emit: a,
      once: i
    } = e;
    s({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(t, {
      freeMode: {
        onTouchStart: function () {
          const e = t.getTranslate();
          t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
          });
        },
        onTouchMove: function () {
          const {
            touchEventsData: e,
            touches: s
          } = t;
          0 === e.velocities.length && e.velocities.push({
            position: s[t.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: s[t.isHorizontal() ? "currentX" : "currentY"],
            time: u()
          });
        },
        onTouchEnd: function (e) {
          let {
            currentPos: s
          } = e;
          const {
            params: r,
            $wrapperEl: n,
            rtlTranslate: l,
            snapGrid: o,
            touchEventsData: d
          } = t,
                c = u() - d.touchStartTime;
          if (s < -t.minTranslate()) t.slideTo(t.activeIndex);else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);else {
            if (r.freeMode.momentum) {
              if (d.velocities.length > 1) {
                const e = d.velocities.pop(),
                      s = d.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;

              t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
              let e = 1e3 * r.freeMode.momentumRatio;
              const s = t.velocity * e;
              let c = t.translate + s;
              l && (c = -c);
              let p,
                  h = !1;
              const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
              let f;
              if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);else if (r.freeMode.sticky) {
                let e;

                for (let t = 0; t < o.length; t += 1) if (o[t] > -c) {
                  e = t;
                  break;
                }

                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c;
              }

              if (f && i("transitionEnd", () => {
                t.loopFix();
              }), 0 !== t.velocity) {
                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                  const s = Math.abs((l ? -c : c) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                  e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeMode.sticky) return void t.slideToClosest();

              r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(() => {
                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(() => {
                  t.setTranslate(p), n.transitionEnd(() => {
                    t && !t.destroyed && t.transitionEnd();
                  });
                }, 0));
              })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(() => {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses();
            } else {
              if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode && a("_freeModeNoMomentumRelease");
            }

            (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          }
        }
      }
    });
  }, function (e) {
    let t,
        s,
        a,
        {
      swiper: i,
      extendParams: r
    } = e;
    r({
      grid: {
        rows: 1,
        fill: "column"
      }
    }), i.grid = {
      initSlides: e => {
        const {
          slidesPerView: r
        } = i.params,
              {
          rows: n,
          fill: l
        } = i.params.grid;
        s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n));
      },
      updateSlide: (e, r, n, l) => {
        const {
          slidesPerGroup: o,
          spaceBetween: d
        } = i.params,
              {
          rows: c,
          fill: p
        } = i.params.grid;
        let u, h, m;

        if ("row" === p && o > 1) {
          const s = Math.floor(e / (o * c)),
                a = e - c * o * s,
                i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
          m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({
            "-webkit-order": u,
            order: u
          });
        } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);

        r.css(l("margin-top"), 0 !== m ? d && "".concat(d, "px") : "");
      },
      updateWrapperSize: (e, s, a) => {
        const {
          spaceBetween: r,
          centeredSlides: n,
          roundLengths: l
        } = i.params,
              {
          rows: o
        } = i.params.grid;

        if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css(_defineProperty({}, a("width"), "".concat(i.virtualSize + r, "px"))), n) {
          s.splice(0, s.length);
          const e = [];

          for (let t = 0; t < s.length; t += 1) {
            let a = s[t];
            l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a);
          }

          s.push(...e);
        }
      }
    };
  }, function (e) {
    let {
      swiper: t
    } = e;
    Object.assign(t, {
      appendSlide: K.bind(t),
      prependSlide: Z.bind(t),
      addSlide: Q.bind(t),
      removeSlide: J.bind(t),
      removeAllSlides: ee.bind(t)
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      fadeEffect: {
        crossFade: !1,
        transformEl: null
      }
    }), te({
      effect: "fade",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
          slides: e
        } = t,
              s = t.params.fadeEffect;

        for (let a = 0; a < e.length; a += 1) {
          const e = t.slides.eq(a);
          let i = -e[0].swiperSlideOffset;
          t.params.virtualTranslate || (i -= t.translate);
          let r = 0;
          t.isHorizontal() || (r = i, i = 0);
          const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
          se(s, e).css({
            opacity: n
          }).transform("translate3d(".concat(i, "px, ").concat(r, "px, 0px)"));
        }
      },
      setTransition: e => {
        const {
          transformEl: s
        } = t.params.fadeEffect;
        (s ? t.slides.find(s) : t.slides).transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s,
          allSlides: !0
        });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    });

    const i = (e, t, s) => {
      let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
          i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
      0 === a.length && (a = d("<div class=\"swiper-slide-shadow-".concat(s ? "left" : "top", "\"></div>")), e.append(a)), 0 === i.length && (i = d("<div class=\"swiper-slide-shadow-".concat(s ? "right" : "bottom", "\"></div>")), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0));
    };

    te({
      effect: "cube",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
          $el: e,
          $wrapperEl: s,
          slides: a,
          width: r,
          height: n,
          rtlTranslate: l,
          size: o,
          browser: c
        } = t,
              p = t.params.cubeEffect,
              u = t.isHorizontal(),
              h = t.virtual && t.params.virtual.enabled;
        let m,
            f = 0;
        p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({
          height: "".concat(r, "px")
        })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));

        for (let e = 0; e < a.length; e += 1) {
          const t = a.eq(e);
          let s = e;
          h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
          let r = 90 * s,
              n = Math.floor(r / 360);
          l && (r = -r, n = Math.floor(-r / 360));
          const d = Math.max(Math.min(t[0].progress, 1), -1);
          let c = 0,
              m = 0,
              g = 0;
          s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
          const v = "rotateX(".concat(u ? 0 : -r, "deg) rotateY(").concat(u ? r : 0, "deg) translate3d(").concat(c, "px, ").concat(m, "px, ").concat(g, "px)");
          d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u);
        }

        if (s.css({
          "-webkit-transform-origin": "50% 50% -".concat(o / 2, "px"),
          "transform-origin": "50% 50% -".concat(o / 2, "px")
        }), p.shadow) if (u) m.transform("translate3d(0px, ".concat(r / 2 + p.shadowOffset, "px, ").concat(-r / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(p.shadowScale, ")"));else {
          const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                s = p.shadowScale,
                a = p.shadowScale / t,
                i = p.shadowOffset;
          m.transform("scale3d(".concat(s, ", 1, ").concat(a, ") translate3d(0px, ").concat(n / 2 + i, "px, ").concat(-n / 2 / a, "px) rotateX(-90deg)"));
        }
        const g = c.isSafari || c.isWebView ? -o / 2 : 0;
        s.transform("translate3d(0px,0,".concat(g, "px) rotateX(").concat(t.isHorizontal() ? 0 : f, "deg) rotateY(").concat(t.isHorizontal() ? -f : 0, "deg)")), s[0].style.setProperty("--swiper-cube-translate-z", "".concat(g, "px"));
      },
      setTransition: e => {
        const {
          $el: s,
          slides: a
        } = t;
        a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
      },
      recreateShadows: () => {
        const e = t.isHorizontal();
        t.slides.each(t => {
          const s = Math.max(Math.min(t.progress, 1), -1);
          i(d(t), s, e);
        });
      },
      getEffectParams: () => t.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0,
        transformEl: null
      }
    });

    const i = (e, s, a) => {
      let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
          r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
      0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0));
    };

    te({
      effect: "flip",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
          slides: e,
          rtlTranslate: s
        } = t,
              a = t.params.flipEffect;

        for (let r = 0; r < e.length; r += 1) {
          const n = e.eq(r);
          let l = n[0].progress;
          t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
          const o = n[0].swiperSlideOffset;
          let d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
          t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
          const h = "translate3d(".concat(p, "px, ").concat(u, "px, 0px) rotateX(").concat(c, "deg) rotateY(").concat(d, "deg)");
          se(a, n).transform(h);
        }
      },
      setTransition: e => {
        const {
          transformEl: s
        } = t.params.flipEffect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s
        });
      },
      recreateShadows: () => {
        const e = t.params.flipEffect;
        t.slides.each(s => {
          const a = d(s);
          let r = a[0].progress;
          t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e);
        });
      },
      getEffectParams: () => t.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null
      }
    }), te({
      effect: "coverflow",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
          width: e,
          height: s,
          slides: a,
          slidesSizesGrid: i
        } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;

        for (let e = 0, t = a.length; e < t; e += 1) {
          const t = a.eq(e),
                s = i[e],
                l = (o - t[0].swiperSlideOffset - s / 2) / s,
                p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
          let u = n ? d * p : 0,
              h = n ? 0 : d * p,
              m = -c * Math.abs(p),
              f = r.stretch;
          "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
          let g = n ? 0 : f * p,
              v = n ? f * p : 0,
              w = 1 - (1 - r.scale) * Math.abs(p);
          Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
          const b = "translate3d(".concat(v, "px,").concat(g, "px,").concat(m, "px)  rotateX(").concat(h, "deg) rotateY(").concat(u, "deg) scale(").concat(w, ")");

          if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
            let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
            0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
          }
        }
      },
      setTransition: e => {
        const {
          transformEl: s
        } = t.params.coverflowEffect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });

    const i = e => "string" == typeof e ? e : "".concat(e, "px");

    te({
      effect: "creative",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
          slides: e,
          $wrapperEl: s,
          slidesSizesGrid: a
        } = t,
              r = t.params.creativeEffect,
              {
          progressMultiplier: n
        } = r,
              l = t.params.centeredSlides;

        if (l) {
          const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
          s.transform("translateX(calc(50% - ".concat(e, "px))"));
        }

        for (let s = 0; s < e.length; s += 1) {
          const a = e.eq(s),
                o = a[0].progress,
                d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
          let c = d;
          l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
          const p = a[0].swiperSlideOffset,
                u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                h = [0, 0, 0];
          let m = !1;
          t.isHorizontal() || (u[1] = u[0], u[0] = 0);
          let f = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach((e, t) => {
            u[t] = "calc(".concat(e, "px + (").concat(i(f.translate[t]), " * ").concat(Math.abs(d * n), "))");
          }), h.forEach((e, t) => {
            h[t] = f.rotate[t] * Math.abs(d * n);
          }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
          const g = u.join(", "),
                v = "rotateX(".concat(h[0], "deg) rotateY(").concat(h[1], "deg) rotateZ(").concat(h[2], "deg)"),
                w = c < 0 ? "scale(".concat(1 + (1 - f.scale) * c * n, ")") : "scale(".concat(1 - (1 - f.scale) * c * n, ")"),
                b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                x = "translate3d(".concat(g, ") ").concat(v, " ").concat(w);

          if (m && f.shadow || !m) {
            let e = a.children(".swiper-slide-shadow");

            if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
              const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
              e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
            }
          }

          const y = se(r, a);
          y.transform(x).css({
            opacity: b
          }), f.origin && y.css("transform-origin", f.origin);
        }
      },
      setTransition: e => {
        const {
          transformEl: s
        } = t.params.creativeEffect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s,
          allSlides: !0
        });
      },
      perspective: () => t.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0
      }
    }), te({
      effect: "cards",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
          slides: e,
          activeIndex: s
        } = t,
              a = t.params.cardsEffect,
              {
          startTranslate: i,
          isTouched: r
        } = t.touchEventsData,
              n = t.translate;

        for (let l = 0; l < e.length; l += 1) {
          const o = e.eq(l),
                d = o[0].progress,
                c = Math.min(Math.max(d, -4), 4);
          let p = o[0].swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform("translateX(".concat(t.minTranslate(), "px)")), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
          let u = t.params.cssMode ? -p - t.translate : -p,
              h = 0;
          const m = -100 * Math.abs(c);
          let f = 1,
              g = -2 * c,
              v = 8 - .75 * Math.abs(c);
          const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;

          if (b || x) {
            const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
            g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%";
          }

          if (u = c < 0 ? "calc(".concat(u, "px + (").concat(v * Math.abs(c), "%))") : c > 0 ? "calc(".concat(u, "px + (-").concat(v * Math.abs(c), "%))") : "".concat(u, "px"), !t.isHorizontal()) {
            const e = h;
            h = u, u = e;
          }

          const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                E = "\n        translate3d(".concat(u, ", ").concat(h, ", ").concat(m, "px)\n        rotateZ(").concat(a.rotate ? g : 0, "deg)\n        scale(").concat(y, ")\n      ");

          if (a.slideShadows) {
            let e = o.find(".swiper-slide-shadow");
            0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1));
          }

          o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
          se(a, o).transform(E);
        }
      },
      setTransition: e => {
        const {
          transformEl: s
        } = t.params.cardsEffect;
        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
          swiper: t,
          duration: e,
          transformEl: s
        });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }];
  return V.use(re), V;
});
},{}],"js/asset/swiper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSwiper = createSwiper;

var _swiperBundle = _interopRequireDefault(require("swiper/swiper-bundle.min"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSwiper() {
  var pageSetting = function pageSetting(index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  }; // 分頁按鈕添加號碼樣式


  $('.swiper-container').each(function (idx, item) {
    this.classList.add('swiper' + (idx + 1));
    var wrapper = $(this).find('.swiper-wrapper');
    var prevBtn = $(this).find('.swiper-button-prev');
    var nextBtn = $(this).find('.swiper-button-next');
    var pagination = $(this).find('.swiper-pagination');

    if (wrapper) {
      wrapper.addClass('swiper-wrapper-' + (idx + 1));
    }

    if (prevBtn) {
      prevBtn.addClass('swiper-button-prev-' + (idx + 1));
    }

    if (nextBtn) {
      nextBtn.addClass('swiper-button-next-' + (idx + 1));
    }

    if (pagination) {
      pagination.addClass('swiper-pagination-' + (idx + 1));
    }

    new _swiperBundle.default('.swiper' + (idx + 1), {
      direction: 'horizontal',
      loop: true,
      slidesPerView: idx === 0 ? 1 : 4,
      spaceBetween: idx === 0 ? 0 : 20,
      slidesPerGroup: idx === 0 ? 1 : 4,
      breakpoints: {
        320: {
          slidesPerView: idx === 0 ? 1 : 1,
          spaceBetween: idx === 0 ? 0 : 3,
          slidesPerGroup: idx === 0 ? 1 : 1,
          autoplay: false
        },
        768: {
          slidesPerView: idx === 0 ? 1 : 3,
          spaceBetween: idx === 0 ? 0 : 5,
          slidesPerGroup: idx === 0 ? 1 : 3
        },
        1024: {
          slidesPerView: idx === 0 ? 1 : 4,
          spaceBetween: idx === 0 ? 0 : 10,
          slidesPerGroup: idx === 0 ? 1 : 4
        }
      },
      navigation: {
        nextEl: '.swiper-button-next-' + (idx + 1),
        prevEl: '.swiper-button-prev-' + (idx + 1)
      },
      pagination: {
        el: '.swiper-pagination-' + (idx + 1),
        clickable: true,
        renderBullet: idx === 0 ? pageSetting : null
      },
      effect: idx === 0 ? 'fade' : 'slide',
      autoplay: idx === 0 ? {
        delay: 1000
      } : {
        delay: 4000
      }
    });
  });
}
},{"swiper/swiper-bundle.min":"../node_modules/swiper/swiper-bundle.min.js"}],"js/asset/getData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterCityData = filterCityData;
exports.filterData = filterData;
exports.getCity = getCity;
exports.getData = getData;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios.default.defaults.method = 'get';

function getData(token, section) {
  var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
  _axios.default.defaults.headers.common.authorization = 'Bearer ' + token;
  var apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/".concat(section, "?$top=").concat(top, "&$format=JSON");

  var instance = _axios.default.create();

  return instance({
    headers: {
      authorization: 'Bearer ' + token
    },
    url: apiUrl
  });
}

function filterData(token, section, top, option, content) {
  _axios.default.defaults.headers.common.authorization = 'Bearer ' + token;
  _axios.default.defaults.method = 'get';
  var apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/".concat(section, "?$filter=contains(").concat(option, ",'").concat(content, "')&$top=").concat(top, "&$format=JSON");
  var allUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/".concat(section, "?$filter=contains(").concat(option, ",'").concat(content, "')&$format=JSON");

  var instance = _axios.default.create();

  return instance({
    headers: {
      authorization: 'Bearer ' + token
    },
    url: top ? apiUrl : allUrl
  });
}

function filterCityData(token, section, city, option, content) {
  _axios.default.defaults.headers.common.authorization = 'Bearer ' + token;
  var apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/".concat(section, "/").concat(city, "?$filter=contains(").concat(option, ",'").concat(content, "')&$format=JSON");

  var instance = _axios.default.create();

  return instance({
    headers: {
      authorization: 'Bearer ' + token
    },
    url: apiUrl
  });
}

function getCity(token) {
  var apiUrl = 'https://tdx.transportdata.tw/api/basic/v2/Basic/City?%24format=JSON';

  var instance = _axios.default.create();

  return instance({
    headers: {
      authorization: 'Bearer ' + token
    },
    url: apiUrl
  });
}
},{"axios":"../node_modules/axios/index.js"}],"js/asset/location.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.location = location;

function location() {
  var last = window.location.pathname.split('/').length - 1;
  return window.location.pathname.split('/')[last].split('.')[0];
}
},{}],"js/asset/createCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCard = createCard;
exports.createSwiperCard = createSwiperCard;
exports.createTopicClass = createTopicClass;
exports.filterCardData = filterCardData;

var _location = require("./location");

function createSwiperCard(data, section) {
  var str = '';
  data.forEach(function (item) {
    var startTime = null;
    var endTime = null;
    startTime = item.StartTime.split('T');
    endTime = item.EndTime.split('T');
    var times = startTime[0].split('-').join('/') + ' - ' + endTime[0].split('-').join('/');
    str +=
    /* html */
    "\n    <div class=\"swiper-slide h-auto\">\n      <div class=\"card cardContainer h-100 bg-gray-100\"  data-title = ".concat(section, " data-city = ").concat(item.City || city, ">\n        <div class=\"card-imageContainer overflow-hidden\">\n          <img class=\"card-image object-fix w-100\" src=\"").concat(item.Picture.PictureUrl1, "\" class=\"card-img-top\" alt=\"...\">\n        </div>\n            <div class=\"card-body d-flex flex-column px-2\">\n              <p class=\"text-secondary \">").concat(times, "</p>\n              <h5 class=\"card-text mt-2 mb-3\">").concat(item.ActivityName, "</h5>\n                <div class=\"row mt-auto\">\n                <p class=\"col-6 text-secondary\"><i class=\"bi bi-geo-alt\"></i>").concat(item.City, "</p>\n                <a class=\"col-6 text-end\" href=\"javascript:;\">\u8A73\u7D30\u4ECB\u7D39\n                <i class=\"bi bi-chevron-right\"></i></a>\n                </div>\n            </div>\n      </div>\n    </div>\n    ");
  });
  $('.swiper-wrapper').eq(1).html(str);
}

function createCard(data, section) {
  var str = '';
  data.forEach(function (item) {
    var _item$Address;

    var city = (_item$Address = item.Address) === null || _item$Address === void 0 ? void 0 : _item$Address.split('').slice(0, 3).join('');
    str +=
    /* html */
    "\n      <div class=\"col\">\n        <div class=\"card h-100 bg-gray-100\" data-title = ".concat(section, " data-city = ").concat(item.City || city, ">\n          <div class=\"card-imageContainer overflow-hidden\">\n            <img class=\"card-image object-fix w-100 h-100\"  src=\"").concat(item.Picture.PictureUrl1, "\" class=\"card-img-top\" alt=\"...\">\n          </div>\n          <div class=\"card-body d-flex flex-column overflow-hidden\">\n            <h5 class=\"card-text mb-2\">").concat(item.ScenicSpotName || item.RestaurantName || item.ActivityName, "</h5>\n            <p class=\"text-secondary mt-auto\"><i class=\"bi bi-geo-alt\"></i>").concat(item.City || city, "</p>\n          </div>\n        </div>\n      </div>\n      ");
  });
  return str;
}

function createTopicClass() {
  var url = (0, _location.location)();
  var str = '';
  var obj = {
    scene: ['自然風景類', '觀光工廠類', '遊憩類', '休閒農業類', '生態類', '溫泉類', '古蹟類'],
    activity: ['節慶活動', '自行車活動', '遊憩活動', '產業文化活動', '年度活動', '四季活動'],
    food: ['地方特產', '中式美食', '甜點冰品', '異國料理', '伴手禮', '素食']
  };

  if (url === 'scenePage') {
    create(1, obj.scene);
  } else if (url === 'activityPage') {
    create(8, obj.activity);
  } else if (url === 'foodPage') {
    create(14, obj.food);
  }

  function create(num, arr) {
    arr.forEach(function (item, idx) {
      str +=
      /* html */
      "\n      <div class=\"col\">\n        <div class=\"card card-h h-100 \">\n          <div class=\"card-imageContainer overflow-hidden\">\n            <img class=\"card-image object-fix w-100 h-100\"  src=\"./topics-".concat(idx + num, ".jpg\" class=\"card-img-top\" alt=\"...\">\n          </div>\n          <h3 class=\"topics-title\">").concat(item, "</h3>\n        </div>\n      </div>\n      ");
    });
  }

  return str;
}

function filterCardData(data) {
  var filterData = [];
  var filterPicData = data.filter(function (item) {
    return item.Picture.PictureUrl1 !== undefined;
  }); // 過濾沒有圖片資料

  filterPicData.forEach(function (item) {
    var Pic1 = item.Picture.PictureUrl1.split('/').indexOf('travel.nantou.gov.tw');
    var Pic2 = item.Picture.PictureUrl1.split('/').indexOf('210.69.151.212'); // 濾掉沒圖片的網址

    if (Pic1 === -1 && Pic2 === -1) {
      filterData.push(item);
    }
  });
  return filterData;
}
},{"./location":"js/asset/location.js"}],"js/asset/cardEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardEvent = cardEvent;

var _getToken = _interopRequireDefault(require("./getToken"));

var _getData = require("./getData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cardEvent(isNear) {
  var token = _getToken.default.getCookieToken();

  $('.cardContainer').find('.card-imageContainer').on('click', function (e) {
    e.stopPropagation();
    var title = $(this).parent().find('.card-text').text();
    var theme = $(this).parent().attr('data-title');
    sessionStorage.setItem('theme', JSON.stringify(theme));
    var breadArray = JSON.parse(sessionStorage.getItem('breadcrumb'));

    if (isNear) {
      breadArray.pop();
    }

    console.log('breadArray', breadArray);
    console.log('title', title);
    breadArray.push(title);
    sessionStorage.setItem('breadcrumb', JSON.stringify(breadArray));
    var themeName = theme + 'Name';
    (0, _getData.filterData)(token, theme, '', themeName, title).then(function (res) {
      sessionStorage.setItem('selectData', JSON.stringify(res.data));
      window.location.assign('./contentPage.html');
    });
  });
}
},{"./getToken":"js/asset/getToken.js","./getData":"js/asset/getData.js"}],"js/asset/changeSelection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeSelection = changeSelection;

function changeSelection(data) {
  if (data) {
    $('select').find('option').eq(0).html('-全部縣市-');
    $('select').find('option').eq(0).siblings().remove();
    data.forEach(function (item) {
      $('<option />', {
        value: item.City,
        text: item.CityName
      }).appendTo($('select'));
    });
  }

  $('select').each(function () {
    var selectEl = $(this);
    var numberOfOptions = $(this).children('option').length;
    selectEl.addClass('select-hidden');
    selectEl.wrap('<div class="select fs-5 text-center"></div>');
    selectEl.after('<div class="select-styled  pe-3"></div>');
    var styledSelect = selectEl.next('.select-styled');
    styledSelect.text(selectEl.children('option').eq(0).text());
    var listEl = $('<ul/>', {
      class: 'select-options'
    }).insertAfter(styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: selectEl.children('option').eq(i).text(),
        rel: selectEl.children('option').eq(i).val()
      }).appendTo(listEl);
    }

    styledSelect.on('click', function (e) {
      e.stopPropagation();
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });
    var listItems = listEl.children('li');
    listItems.on('click', function (e) {
      e.stopPropagation();
      styledSelect.text($(this).text()).removeClass('active');
      selectEl.val($(this).attr('rel'));
      listEl.hide();
    });
    $(document).on('click', function (e) {
      e.stopPropagation();
      styledSelect.removeClass('active');
      listEl.hide();
    });
  });

  if (data) {
    $('.select-options').addClass('select-overflowY');
  } else {
    $('.select-options').removeClass('select-overflowY');
  }
}
},{}],"js/components/searchComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getData = require("../asset/getData");

var _changeSelection = require("../asset/changeSelection");

var _getToken = _interopRequireDefault(require("../asset/getToken"));

var _location = require("../asset/location");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  calendarSetting: {
    closeText: "關閉",
    prevText: "上個月",
    nextText: "下個月",
    currentText: "今天",
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayNamesShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    weekHeader: "週",
    dateFormat: "yy-mm-dd",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: "年"
  },
  focus: function focus() {
    $('.search-input').trigger('focus');
  },
  changeSelect: function changeSelect() {
    if ((0, _location.location)() !== 'index' && (0, _location.location)() !== '') {
      (0, _getData.getCity)(_getToken.default.getCookieToken()).then(function (res) {
        (0, _changeSelection.changeSelection)(res.data);
      }).catch(function (err) {
        console.log(err);
      });
    } else {
      (0, _changeSelection.changeSelection)();
    }
  },
  switchDateSearch: function switchDateSearch() {
    $('.main-search').removeClass('col-lg-8').addClass('col-lg-6');
    var calendar =
    /*html*/
    "\n    <div class=\"col-lg-2 col-12\">\n      <div class=\"position-relative\">\n      <input type=\"text\" id=\"datepicker\" class=\"dateInput form-control fs-5 h-100\" placeholder='\u8D77\u59CB\u65E5\u671F' onfocus=\"this.blur()\">\n      <div class=\"date-alert alert\"><i class=\"bi bi-exclamation-circle-fill  me-2 text-danger\"></i>\u8ACB\u9078\u64C7\u65E5\u671F</div>\n      </div>\n    </div>";
    $('.main-search').before(calendar);
    $("#datepicker").datepicker(this.calendarSetting);
  },
  search: function search() {
    var searchOption = '';

    var token = _getToken.default.getCookieToken();

    $('.search-btn').on('click', function (e) {
      e.stopPropagation();
      var val = $('.search-input').val().trim();
      var themeVal = $('select').val();
      var dateData = $('.dateInput').val();
      validate(themeVal, val, dateData);
    });
    $('.search-input').on('keydown', function (e) {
      var themeVal = $('select').val();
      var val = $(this).val().trim();
      $('.search-alert').fadeOut(200);

      if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        validate(themeVal, val);
      }
    });

    function validate(themeVal, val, dateData) {
      var theme = JSON.parse(sessionStorage.getItem('theme'));

      if (themeVal === 'hide' || val === '' || dateData === '') {
        themeVal === 'hide' ? $('.select-alert').fadeIn(200) : $('.select-alert').fadeOut(200);
        dateData === '' ? $('.date-alert').fadeIn(200) : $('.date-alert').fadeOut(200); //判斷是否是活動收尋,關鍵字非必須條件

        if (theme !== 'Activity') {
          val === '' ? $('.search-alert').fadeIn(200) : $('.search-alert').fadeOut(200);
        } else {
          activitySearch(dateData);
        }

        setTimeout(function () {
          $('.search-alert').fadeOut(200);
          $('.select-alert').fadeOut(200);
          $('.date-alert').fadeOut(200);
        }, 2000);
      } else {
        if ((0, _location.location)() === 'index') {
          sessionStorage.setItem('theme', JSON.stringify(themeVal));
          themeVal === 'ScenicSpot' ? searchOption = 'DescriptionDetail' : searchOption = 'Description';
          var searchData = (0, _getData.filterData)(token, themeVal, '', searchOption, val);
          searchData.then(function (res) {
            sessionStorage.setItem('filterData', JSON.stringify(res.data));
            window.location.assign('./searchPage.html');
          });
        } else {
          var _theme = JSON.parse(sessionStorage.getItem('theme'));

          _theme === 'ScenicSpot' ? searchOption = 'DescriptionDetail' : searchOption = 'Description';

          var _searchData = (0, _getData.filterCityData)(token, _theme, themeVal, searchOption, val);

          _searchData.then(function (res) {
            sessionStorage.setItem('filterData', JSON.stringify(res.data));
            window.location.assign('./searchPage.html');
          });
        }
      }

      function activitySearch(dateData) {
        var searchData = (0, _getData.filterCityData)(token, theme, themeVal, 'Description', val);
        searchData.then(function (res) {
          var selectTime = parseInt(dateData.split('-').join(''));
          var filterDate = res.data.filter(function (item) {
            var itemTime = parseInt(item['StartTime'].split('T')[0].split('-').join(''));
            return itemTime >= selectTime;
          });
          sessionStorage.setItem('filterData', JSON.stringify(filterDate));
          window.location.assign('./searchPage.html');
        });
      }
    }
  },
  init: function init() {
    var theme = JSON.parse(sessionStorage.getItem('theme'));

    if (theme === 'Activity') {
      this.switchDateSearch();
    }

    if ((0, _location.location)() === '' || (0, _location.location)() === 'index') {
      this.focus();
    } else {
      $('.select-alert').html('<i class="bi bi-exclamation-circle-fill  me-2 text-danger"></i>請選擇城市');
    }

    this.changeSelect();
    this.search();
  }
};
exports.default = _default;
},{"../asset/getData":"js/asset/getData.js","../asset/changeSelection":"js/asset/changeSelection.js","../asset/getToken":"js/asset/getToken.js","../asset/location":"js/asset/location.js"}],"js/components/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  init: function init() {
    $('.sceneLink,.activityLink,.foodLink').on('click', function () {
      var theme = $(this).attr('data-id');
      sessionStorage.setItem('theme', JSON.stringify(theme));
    });
    $('.hamburger-btn').on('click', function () {
      $('.hamburger-menu').toggleClass('active');
    });
  }
};
exports.default = _default;
},{}],"js/components/scrollTop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  init: function init() {
    $(window).on('scroll', function () {
      var pageHight = $(window).innerHeight();
      var scrollPos = $(window).scrollTop();

      if (scrollPos > pageHight / 2) {
        $('.fixTop').fadeIn(500);
      } else {
        $('.fixTop').fadeOut(500);
      }

      $('.fixTop').on('click', function () {
        $('html,body').scrollTop(0);
      });
    });
  }
};
exports.default = _default;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

require("bootstrap/dist/js/bootstrap.bundle.min");

var _getToken = _interopRequireDefault(require("./asset/getToken"));

var _swiper = require("./asset/swiper");

var _getData = require("./asset/getData");

var _createCard = require("./asset/createCard");

var _cardEvent = require("./asset/cardEvent");

var _searchComponent = _interopRequireDefault(require("./components/searchComponent"));

var _header = _interopRequireDefault(require("./components/header"));

var _scrollTop = _interopRequireDefault(require("./components/scrollTop"));

var _header2 = _interopRequireDefault(require("../html/components/header.html"));

var _footer = _interopRequireDefault(require("../html/components/footer.html"));

var _scrollTop2 = _interopRequireDefault(require("../html/components/scrollTop.html"));

var _searchComponent2 = _interopRequireDefault(require("../html/components/searchComponent.html"));

var _card = _interopRequireDefault(require("../html/components/card.html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// library
// resource
// component
// html components
$(function () {
  $('#header').html(_header2.default);
  $('#footer').html(_footer.default);
  $('#search').html(_searchComponent2.default);
  $('#scrollTop').html(_scrollTop2.default);
  $('.tastyFood, .hotPoint').html(_card.default);
  sessionStorage.setItem('breadcrumb', JSON.stringify([]));
  sessionStorage.removeItem('theme');

  _scrollTop.default.init();

  _searchComponent.default.init();

  _header.default.init(); // 判斷是否有token


  if (_getToken.default.getCookieToken() === '') {
    var tokenPromise = _getToken.default.getAuthorizationHeader();

    tokenPromise.then(function (res) {
      var _res$data = res.data,
          access_token = _res$data.access_token,
          expires_in = _res$data.expires_in;
      document.cookie = "tdxToken=".concat(access_token, ";max-age=").concat(expires_in); // 將token存入cookie

      renderCard(access_token);
    }).catch(function (err) {
      console.log(err);
    });
  } else {
    renderCard(_getToken.default.getCookieToken());
  } // 渲染首頁畫面


  function renderCard(token) {
    var data1 = (0, _getData.getData)(token, 'Activity', 40);
    var data2 = (0, _getData.filterData)(token, 'ScenicSpot', 30, 'DescriptionDetail', '熱門打卡');
    var data3 = (0, _getData.filterData)(token, 'Restaurant', 30, 'Description', '老店');
    Promise.all([data1, data2, data3]).then(function (res) {
      var filterCard1 = (0, _createCard.filterCardData)(res[0].data);
      var filterCard2 = (0, _createCard.filterCardData)(res[1].data);
      var filterCard3 = (0, _createCard.filterCardData)(res[2].data);
      (0, _createCard.createSwiperCard)(filterCard1, 'Activity'); // 創建swiper card dom元素

      var str1 = (0, _createCard.createCard)(filterCard2, 'ScenicSpot');
      var str2 = (0, _createCard.createCard)(filterCard3, 'Restaurant');
      $('.hotPoint').find('.sectionTitle').text('熱門打卡景點');
      $('.hotPoint').find('.moreLink').html('查看更多景點<i class="bi bi-chevron-right"></i>').attr('href', '../scenePage.html');
      $('.hotPoint').find('.card-content').html(str1);
      $('.tastyFood').find('.sectionTitle').text('一再回訪美食');
      $('.tastyFood').find('.moreLink').html('查看更多美食<i class="bi bi-chevron-right"></i>').attr('href', '../foodPage.html');
      $('.tastyFood').find('.card-content').html(str2); // 將卡片賦予事件

      (0, _cardEvent.cardEvent)();
    }).then(function () {
      (0, _swiper.createSwiper)(); // 創建swiper實體
    });
  }
});
},{"bootstrap/dist/js/bootstrap.bundle.min":"../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js","./asset/getToken":"js/asset/getToken.js","./asset/swiper":"js/asset/swiper.js","./asset/getData":"js/asset/getData.js","./asset/createCard":"js/asset/createCard.js","./asset/cardEvent":"js/asset/cardEvent.js","./components/searchComponent":"js/components/searchComponent.js","./components/header":"js/components/header.js","./components/scrollTop":"js/components/scrollTop.js","../html/components/header.html":"html/components/header.html","../html/components/footer.html":"html/components/footer.html","../html/components/scrollTop.html":"html/components/scrollTop.html","../html/components/searchComponent.html":"html/components/searchComponent.html","../html/components/card.html":"html/components/card.html"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57684" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/html-loader.js":[function(require,module,exports) {
module.exports = function loadHTMLBundle(bundle) {
  return fetch(bundle).then(function (res) {
    return res.text();
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("html",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/html-loader.js"));b.load([["header.70c8671a.html","html/components/header.html"],["footer.a4fc5f39.html","html/components/footer.html"],["scrollTop.ebbedd64.html","html/components/scrollTop.html"],["searchComponent.fe3712b3.html","html/components/searchComponent.html"],["card.de535f08.html","html/components/card.html"]]).then(function(){require("js/index.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/js.00a46daa.js.map