(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(t,e,r){var content=r(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("927bb7fc",content,!0,{sourceMap:!1})},111:function(t,e,r){var content=r(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("6d15b34e",content,!0,{sourceMap:!1})},112:function(t,e,r){var content=r(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("d6a0b78a",content,!0,{sourceMap:!1})},126:function(t,e,r){"use strict";var n=r(1),o=r(66),c=n.a.extend({name:"DefaultLayout",components:{GlobalHeader:o.a}}),l=(r(183),r(14)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"default"},[e("GlobalHeader"),this._v(" "),e("nuxt",{staticClass:"root"})],1)}),[],!1,null,"9c7c95c0",null);e.a=component.exports},127:function(t,e,r){"use strict";var n=r(1),o=r(66),c=n.a.extend({components:{GlobalHeader:o.a}}),l=(r(185),r(14)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top"},[e("GlobalHeader"),this._v(" "),this._m(0),this._v(" "),e("nuxt",{staticClass:"root"})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-img"},[e("img",{staticClass:"hero",attrs:{src:"images/top.jpg",alt:"青空文庫"}}),this._v(" "),e("p",{staticClass:"text"},[this._v("\n      青空のように\n      自由な、\n      インターネット\n      電子図書館。\n    ")])])}],!1,null,"6a7c23df",null);e.a=component.exports},131:function(t,e,r){r(132),t.exports=r(133)},179:function(t,e,r){var content=r(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("43cd68d9",content,!0,{sourceMap:!1})},180:function(t,e,r){(e=r(32)(!1)).push([t.i,'body{font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue","Yu Gothic",YuGothic,Verdana,Meiryo,"M+ 1p",sans-serif;background-color:#f3ede8;min-height:100vh;color:#4c4a48;margin:0}a,h1,h2,h3,h4,h5,h6,p,span{margin:0;padding:0;word-break:break-all}button{-webkit-appearance:button;-moz-appearance:button;appearance:button;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;display:inline-block;align-items:flex-start;box-sizing:border-box;margin:0;padding:0;background:none;border:none;outline:none}ul{list-style-type:none;padding:0}iframe{border:0}.desc a{display:inline-block;vertical-align:middle}',""]),t.exports=e},181:function(t,e,r){"use strict";r(110)},182:function(t,e,r){(e=r(32)(!1)).push([t.i,".global-header[data-v-147c4b65]{height:4.2rem;display:flex;align-items:center;justify-content:center;font-family:serif;color:#0c64ac;border-bottom:1px solid #b4b4af;background-color:#fff}.global-header .logo[data-v-147c4b65]{width:41.667%;margin:1rem 1rem .5rem;text-align:center}.global-header .logo .logo-img[data-v-147c4b65]{height:2.7rem}.global-header .search[data-v-147c4b65]{height:100%;flex:auto;border-right:1px solid #b4b4af;border-left:1px solid #b4b4af;display:flex;align-items:center;justify-content:center;text-align:center}.global-header .search .glass[data-v-147c4b65]{height:1.2rem;margin:.5rem .2rem .5rem .5rem}.global-header .search .text[data-v-147c4b65]{letter-spacing:.1rem;font-weight:700;flex-direction:column;margin:.2rem}.global-header .menu[data-v-147c4b65]{width:70px;text-align:center}.global-header .menu .three-lines[data-v-147c4b65]{height:1.5rem}@media screen and (max-width:360px){.search .text[data-v-147c4b65]{display:flex}}",""]),t.exports=e},183:function(t,e,r){"use strict";r(111)},184:function(t,e,r){(e=r(32)(!1)).push([t.i,".root[data-v-9c7c95c0]{padding:2rem 0;overflow:hidden}",""]),t.exports=e},185:function(t,e,r){"use strict";r(112)},186:function(t,e,r){(e=r(32)(!1)).push([t.i,".top-img[data-v-6a7c23df]{overflow:hidden;height:80vh;width:100%;max-width:none;position:relative}.top-img .hero[data-v-6a7c23df]{max-height:100%;min-width:100%;position:absolute;right:0}.top-img .text[data-v-6a7c23df]{-ms-writing-mode:tb-rl;writing-mode:vertical-rl;white-space:pre-line;padding-top:14vh;padding-left:15vw;color:#fff;font-weight:700;font-family:serif;font-size:1.4rem;letter-spacing:.2rem;position:absolute;top:0}.root[data-v-6a7c23df]{padding:2rem 1.2rem}",""]),t.exports=e},187:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"getters",(function(){return c})),r.d(e,"mutations",(function(){return l})),r.d(e,"actions",(function(){return d}));r(31);var n=r(2),o=(r(128),function(){return{personDetailsArray:[],personDetails:{},worksArray:[],works:{}}}),c={getAuthor:function(t){return function(e){var r=t.personDetails[e];return r||t.personDetailsArray.find((function(t){return t.id==e}))}},getWork:function(t){return function(e){var r=t.works[e];return r||t.worksArray.find((function(t){return t.title.work_id==e}))}},isPersonDetailsInited:function(t){return t.personDetailsArray.length>0},isWorksInited:function(t){return t.worksArray.length>0}},l={setPersonDetailsArray:function(t,e){return t.personDetailsArray=e},setPersonDetail:function(t,e){var r=e.id,n=e.author;return t.personDetails[r]=n},setWorksArray:function(t,e){return t.worksArray=e},setWork:function(t,e){var r=e.id,n=e.work;return t.works[r]=n}},d={initPersonDetails:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$get("https://raw.githubusercontent.com/takahashim/aozora_json_scrape/master/person_detail.json");case 4:o=r.sent,n("setPersonDetailsArray",o),o.forEach((function(t){n("setPersonDetail",{id:t.id,author:t})})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},initWorks:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$get("https://raw.githubusercontent.com/takahashim/aozora_json_scrape/master/card.json");case 4:o=r.sent,n("setWorksArray",o),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()}}},66:function(t,e,r){"use strict";var n=r(1).a.extend({name:"GlobalHeader"}),o=(r(181),r(14)),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"global-header"},[e("div",{staticClass:"logo"},[e("img",{staticClass:"logo-img",attrs:{src:"images/mobile/logo.png",alt:"ロゴ"}})]),this._v(" "),e("div",{staticClass:"search"},[e("img",{staticClass:"glass",attrs:{src:"images/mobile/glass.png",alt:"検索"}}),this._v(" "),e("span",{staticClass:"text"},[e("span",[this._v("作品")]),e("span",[this._v("検索")])])]),this._v(" "),e("div",{staticClass:"menu"},[e("img",{staticClass:"three-lines",attrs:{src:"images/mobile/three-lines.png",alt:"メニュー"}})])])}],!1,null,"147c4b65",null);e.a=component.exports}},[[131,5,1,6]]]);