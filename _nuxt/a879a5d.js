(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{214:function(t,e,n){var r=n(5),o=n(35),c=n(12),f=n(215),d="["+f+"]",l=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(t,e,n){var o={},d=c((function(){return!!f[t]()||"​"!="​"[t]()})),l=o[t]=d?e(_):f[t];n&&(o[n]=l),r(r.P+r.F*d,"String",o)},_=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},215:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},216:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",c="date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(f){return{M:u,y:o,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:a}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",v={};v[_]=l;var M=function(t){return t instanceof y},$=function(t,e,n){var r;if(!t)return _;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(_=r),r||!n&&_},w=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},g=m;g.l=$,g.i=M,g.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function l(t){this.$L=$(t.locale,null,!0),this.parse(t)}var h=l.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return w(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<w(t)},h.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,a){var f=this,d=!!g.u(a)||a,l=g.p(t),h=function(t,e){var n=g.w(f.$u?Date.UTC(f.$y,e,t):new Date(f.$y,e,t),f);return d?n:n.endOf(i)},m=function(t,e){return g.w(f.toDate()[t].apply(f.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),f)},_=this.$W,v=this.$M,M=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case o:return d?h(1,0):h(31,11);case u:return d?h(1,v):h(0,v+1);case s:var w=this.$locale().weekStart||0,y=(_<w?_+7:_)-w;return h(d?M-y:M+(6-y),v);case i:case c:return m($+"Hours",0);case r:return m($+"Minutes",1);case n:return m($+"Seconds",2);case e:return m($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,a){var f,d=g.p(s),l="set"+(this.$u?"UTC":""),h=(f={},f[i]=l+"Date",f[c]=l+"Date",f[u]=l+"Month",f[o]=l+"FullYear",f[r]=l+"Hours",f[n]=l+"Minutes",f[e]=l+"Seconds",f[t]=l+"Milliseconds",f)[d],m=d===i?this.$D+(a-this.$W):a;if(d===u||d===o){var _=this.clone().set(c,1);_.$d[h](m),_.init(),this.$d=_.set(c,Math.min(this.$D,_.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[g.p(t)]()},h.add=function(t,a){var c,f=this;t=Number(t);var d=g.p(a),l=function(e){var n=w(f);return g.w(n.date(n.date()+Math.round(e*t)),f)};if(d===u)return this.set(u,this.$M+t);if(d===o)return this.set(o,this.$y+t);if(d===i)return l(1);if(d===s)return l(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,m=this.$d.getTime()+t*h;return g.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,c=i.months,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},l=function(t){return g.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:f(i.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:l(1),hh:l(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||m[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,f){var d,l=g.p(c),h=w(t),m=6e4*(h.utcOffset()-this.utcOffset()),_=this-h,v=g.m(this,h);return v=(d={},d[o]=v/12,d[u]=v,d[a]=v/3,d[s]=(_-m)/6048e5,d[i]=(_-m)/864e5,d[r]=_/36e5,d[n]=_/6e4,d[e]=_/1e3,d)[l]||_,f?v:g.a(v)},h.daysInMonth=function(){return this.endOf(u).$D},h.$locale=function(){return v[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},l}(),p=y.prototype;return w.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",c]].forEach((function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,y,w),t.$i=!0),w},w.locale=$,w.isDayjs=M,w.unix=function(t){return w(1e3*t)},w.en=v[_],w.Ls=v,w.p={},w}()},217:function(t,e,n){var content=n(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("071fd21a",content,!0,{sourceMap:!1})},219:function(t,e,n){"use strict";var r=n(4),o=n(21),c=n(34),f=n(129),d=n(68),l=n(12),h=n(53).f,m=n(69).f,_=n(9).f,v=n(214).trim,M=r.Number,$=M,w=M.prototype,y="Number"==c(n(84)(w)),Y="trim"in String.prototype,D=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=Y?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,f=e.slice(2),i=0,l=f.length;i<l;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,r)}}return+e};if(!M(" 0o1")||!M("0b1")||M("+0x1")){M=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof M&&(y?l((function(){w.valueOf.call(n)})):"Number"!=c(n))?f(new $(D(e)),n,M):D(e)};for(var k,S=n(7)?h($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;S.length>L;L++)o($,k=S[L])&&!o(M,k)&&_(M,k,m($,k));M.prototype=w,w.constructor=M,n(13)(r,"Number",M)}},220:function(t,e,n){var r=n(5),o=n(221);r(r.S+r.F*(Number.parseInt!=o),"Number",{parseInt:o})},221:function(t,e,n){var r=n(4).parseInt,o=n(214).trim,c=n(215),f=/^[-+]?0[xX]/;t.exports=8!==r(c+"08")||22!==r(c+"0x16")?function(t,e){var n=o(String(t),3);return r(n,e>>>0||(f.test(n)?16:10))}:r},222:function(t,e,n){t.exports=function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(t){return t<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return t.locale(e,null,!0),e}(n(216))},223:function(t,e,n){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,n,r){var o=n.prototype,c=o.format;r.en.formats=t,o.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,r=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,o){var c=o&&o.toUpperCase();return r||n[o]||t[o]||n[c].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))}(e,void 0===n?{}:n);return c.call(this,r)}}}()},224:function(t,e,n){"use strict";n(217)},225:function(t,e,n){(e=n(32)(!1)).push([t.i,".author[data-v-2c7952e4]{padding:1.2rem}h1.page-title[data-v-2c7952e4]{font-size:2rem;font-weight:700}.title-caption[data-v-2c7952e4]{font-size:.7rem;font-weight:400;margin-bottom:.5rem}.title-caption .kana[data-v-2c7952e4]{margin-right:1rem}.date[data-v-2c7952e4]{font-size:.7rem;margin:1rem 0 2rem}.description .head[data-v-2c7952e4]{font-weight:700;font-size:1.1em;margin-bottom:.2rem}h2.section-title[data-v-2c7952e4]{font-size:1.8rem;font-family:serif;letter-spacing:.2rem;border-bottom:1px solid #b4b4af;color:#0c64ac;font-weight:700;margin-top:2rem;margin-bottom:1rem}.works .title[data-v-2c7952e4]{font-size:1rem;font-weight:400;display:block;text-decoration:underline;margin-bottom:1rem}.works .workings .title[data-v-2c7952e4]{text-decoration:none}",""]),t.exports=e},234:function(t,e,n){"use strict";n.r(e);n(52),n(128),n(219),n(220),n(31);var r=n(2),o=n(1),c=n(216),f=n.n(c);n(222);f.a.locale("ja");var d=n(223);f.a.extend(d);var l=o.a.extend({name:"Author",components:{},validate:function(t){var e=t.params;return/\d+/.test(e.id)},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,d,l,h,m,_,desc;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,r=t.payload,t.store,o=t.$axios,c=Number.parseInt(n.id),e.t1=r,e.t1){e.next=7;break}return e.next=6,o.$get("https://raw.githubusercontent.com/takahashim/aozora_json_scrape/master/person_detail.json");case 6:e.t1=e.sent;case 7:if(e.t0=e.t1,e.t0){e.next=10;break}e.t0=[];case 10:if(d=e.t0,l=r||d.find((function(t){return t.id===c}))){e.next=14;break}return e.abrupt("return",{author:void 0});case 14:return h=function(t){var title="".concat(t.title," ").concat(t.subtitle||""),e=t.needKanaType?" （".concat(t.kana_type,"）"):"";t.titleToDisplay="".concat(title).concat(e)},(m=(l.work||[]).concat(l.wip||[]).sort((function(a,b){return a.work_id>b.work_id?1:-1}))).forEach((function(t){m.forEach((function(e){t.work_id>e.work_id||(t.title===e.title&&t.subtitle===e.subtitle&&t.work_id!==e.work_id&&(t.needKanaType=!0,e.needKanaType=!0),h(t),h(e))}))})),_=function(t){try{if(!t)return;return f()(t).format("LL")}catch(e){return t}},desc=(desc=(l.desc||"").trim()).replace(/src="\.\.\/images\/wikipedia_logo_rounded\.png"/g,'src="'.concat("/aozorabunko-re-design_pages/",'images/wikipedia_logo_rounded.png"')),e.abrupt("return",{author:l,desc:desc,showDesc:desc.length>0,bornOn:_(l.born_on),diedOn:_(l.died_on)});case 21:case"end":return e.stop()}}),e)})))()}}),h=(n(224),n(14)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.author?n("section",{staticClass:"author"},[n("header",{staticClass:"header"},[n("div",{staticClass:"title"},[n("h1",{staticClass:"page-title"},[t._v("\n        "+t._s(t.author.name)+"\n      ")]),t._v(" "),n("p",{staticClass:"title-caption"},[n("span",{staticClass:"kana"},[t._v(t._s(t.author.name_kana))]),t._v(" "),n("span",{staticClass:"en"},[t._v(t._s(t.author.name_en))])])]),t._v(" "),n("div",{staticClass:"date"},[t._v("\n      (\n      "),n("span",{staticClass:"birth"},[t._v(t._s(t.bornOn))]),t._v("\n      〜\n      "),n("span",{staticClass:"passaway"},[t._v(t._s(t.diedOn))]),t._v("\n      )\n    ")]),t._v(" "),t.showDesc?n("div",{staticClass:"description"},[n("h2",{staticClass:"head"},[t._v("\n        作家について\n      ")]),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.desc)}})]):t._e()]),t._v(" "),n("div",{staticClass:"works"},[n("div",{staticClass:"published"},[n("h2",{staticClass:"section-title"},[t._v("\n        公開中の作品\n      ")]),t._v(" "),Array.isArray(t.author.work)&&t.author.work.length>0?n("ul",t._l(t.author.work,(function(e){return n("li",{key:e.work_id},[n("nuxt-link",{staticClass:"title published-link",attrs:{to:"/book/"+e.work_id}},[t._v("\n            "+t._s(e.titleToDisplay)+"\n          ")])],1)})),0):n("span",[t._v("（なし）")])]),t._v(" "),n("div",{staticClass:"workings"},[n("h2",{staticClass:"section-title"},[t._v("\n        作業中の作品\n      ")]),t._v(" "),Array.isArray(t.author.wip)&&t.author.wip.length>0?n("ul",[n("li",t._l(t.author.wip,(function(e){return n("span",{key:e.work_id,staticClass:"title working-text"},[t._v(t._s(e.titleToDisplay))])})),0)]):n("span",[t._v("（なし）")])])])]):t._e()}),[],!1,null,"2c7952e4",null);e.default=component.exports}}]);