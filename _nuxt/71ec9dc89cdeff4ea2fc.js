(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,n,e){var content=e(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(20).default)("12f3e535",content,!0,{sourceMap:!1})},199:function(t,n,e){t.exports=function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:h,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+h(r,2,"0")+":"+h(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:a,w:s,d:i,D:"date",h:r,m:e,s:n,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",_={};_[m]=f;var v=function(t){return t instanceof y},$=function(t,n,e){var r;if(!t)return m;if("string"==typeof t)_[t]&&(r=t),n&&(_[t]=n,r=t);else{var i=t.name;_[i]=t,r=i}return!e&&r&&(m=r),r||!e&&m},g=function(t,n,e){if(v(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new y(r)},M=d;M.l=$,M.i=v,M.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var y=function(){function h(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var d=h.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(M.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(c);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return M},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return M.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var c=this,l=!!M.u(o)||o,h=M.p(t),d=function(t,n){var e=M.w(c.$u?Date.UTC(c.$y,n,t):new Date(c.$y,n,t),c);return l?e:e.endOf(i)},f=function(t,n){return M.w(c.toDate()[t].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(n)),c)},m=this.$W,_=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case a:return l?d(1,0):d(31,11);case u:return l?d(1,_):d(0,_+1);case s:var g=this.$locale().weekStart||0,y=(m<g?m+7:m)-g;return d(l?v-y:v+(6-y),_);case i:case"date":return f($+"Hours",0);case r:return f($+"Minutes",1);case e:return f($+"Seconds",2);case n:return f($+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var c,l=M.p(s),h="set"+(this.$u?"UTC":""),d=(c={},c.day=h+"Date",c.date=h+"Date",c[u]=h+"Month",c[a]=h+"FullYear",c[r]=h+"Hours",c[e]=h+"Minutes",c[n]=h+"Seconds",c[t]=h+"Milliseconds",c)[l],f=l===i?this.$D+(o-this.$W):o;if(l===u||l===a){var m=this.clone().set("date",1);m.$d[d](f),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else d&&this.$d[d](f);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[M.p(t)]()},d.add=function(t,o){var c,l=this;t=Number(t);var h=M.p(o),d=function(n){var e=g(l);return M.w(e.date(e.date()+Math.round(n*t)),l)};if(h===u)return this.set(u,this.$M+t);if(h===a)return this.set(a,this.$y+t);if(h===i)return d(1);if(h===s)return d(7);var f=(c={},c[e]=6e4,c[r]=36e5,c[n]=1e3,c)[h]||1,m=this.$d.getTime()+t*f;return M.w(m,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,c=i.months,h=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return M.s(s%12||12,t,"0")},f=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:h(i.monthsShort,o,c,3),MMMM:c[o]||c(this,e),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,a,2),ddd:h(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:M.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,u,!0),A:f(s,u,!1),m:String(u),mm:M.s(u,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:r};return e.replace(l,(function(t,n){return n||m[t]||r.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,c,l){var h,d=M.p(c),f=g(t),m=6e4*(f.utcOffset()-this.utcOffset()),_=this-f,v=M.m(this,f);return v=(h={},h[a]=v/12,h[u]=v,h[o]=v/3,h[s]=(_-m)/6048e5,h.day=(_-m)/864e5,h[r]=_/36e5,h[e]=_/6e4,h[n]=_/1e3,h)[d]||_,l?v:M.a(v)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return _[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=$(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return M.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},h}();return g.prototype=y.prototype,g.extend=function(t,n){return t(n,y,g),g},g.locale=$,g.isDayjs=v,g.unix=function(t){return g(1e3*t)},g.en=_[m],g.Ls=_,g}()},200:function(t,n,e){t.exports=function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var n={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(t){return t<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return t.locale(n,null,!0),n}(e(199))},201:function(t,n,e){t.exports=function(){"use strict";return function(t,n,e){var r=n.prototype,o=r.format,c={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};e.en.formats=c,r.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,e=void 0===n?{}:n,r=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||e[r]||c[r]||e[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,n,e){return n||e.slice(1)}))}));return o.call(this,r)}}}()},202:function(t,n,e){"use strict";var r=e(198);e.n(r).a},203:function(t,n,e){(n=e(19)(!1)).push([t.i,"h1.page-title[data-v-46799479]{font-size:2rem;font-weight:700}.title-caption[data-v-46799479]{font-size:.7rem;font-weight:400;margin:.5rem 0}.title-caption .kana[data-v-46799479]{margin-right:1rem}.date[data-v-46799479]{font-size:.7rem;margin:1.5rem 0}.description h3.head[data-v-46799479]{font-weight:700;font-size:1.1em;margin-bottom:.2rem}h2.section-title[data-v-46799479]{font-size:1.8rem;font-family:serif;letter-spacing:.2rem;border-bottom:1px solid #b4b4af;color:#0c64ac;font-weight:700;margin-top:2rem;margin-bottom:1rem}.works .title[data-v-46799479]{font-size:1rem;font-weight:400;display:block;text-decoration:underline;margin-bottom:1rem}",""]),t.exports=n},204:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(199),c=e.n(o);e(200);c.a.locale("ja");var l=e(201);c.a.extend(l);var h=r.a.extend({name:"Author",components:{},filters:{parseDate:function(t){try{return c()(t).format("LL")}catch(n){return t}}},asyncData:function(t){var n=t.params,e=t.payload,r=t.store;console.log(e&&e.id);var o=n.id;if(o||e){var c=e||r.state.personDetail[o],l=function(t){t.forEach((function(t){t.titleToDisplay="".concat(t.title," ").concat(t.subtitle||"")}))};l(c.work),l(c.wip);var h=(c.work||[]).concat(c.wip||[]);return h.forEach((function(t){h.map((function(n){return t.work_id!==n.work_id&&(t.titleToDisplay===n.titleToDisplay?(n.titleToDisplay="".concat(n.titleToDisplay,"（").concat(n.kana_type,"）"),!0):void 0)})).some((function(t){return t}))&&(t.titleToDisplay="".concat(t.titleToDisplay,"（").concat(t.kana_type,"）"))})),{author:c}}}}),d=(e(202),e(13)),component=Object(d.a)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"author"},[e("header",{staticClass:"header"},[e("div",{staticClass:"title"},[e("h1",{staticClass:"page-title"},[t._v("\n        "+t._s(t.author.name)+"\n      ")]),t._v(" "),e("p",{staticClass:"title-caption"},[e("span",{staticClass:"kana"},[t._v(t._s(t.author.name_kana))]),t._v(" "),e("span",{staticClass:"en"},[t._v(t._s(t.author.name_en))])])]),t._v(" "),e("div",{staticClass:"date"},[t._v("\n      (\n      "),e("span",{staticClass:"birth"},[t._v(t._s(t._f("parseDate")(t.author.born_on)))]),t._v("\n      〜\n      "),e("span",{staticClass:"passaway"},[t._v(t._s(t._f("parseDate")(t.author.died_on)))]),t._v("\n      )\n    ")]),t._v(" "),e("div",{staticClass:"description"},[e("h3",{staticClass:"head"},[t._v("\n        作家について\n      ")]),t._v(" "),e("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.author.desc)}})])]),t._v(" "),e("div",{staticClass:"works"},[e("div",{staticClass:"published"},[e("h2",{staticClass:"section-title"},[t._v("\n        公開中の作品\n      ")]),t._v(" "),e("ul",[e("li",t._l(t.author.work,(function(n){return e("nuxt-link",{key:n.work_id,staticClass:"title published-link",attrs:{to:"/book/"+n.work_id}},[t._v("\n            "+t._s(n.titleToDisplay)+"\n          ")])})),1)])]),t._v(" "),e("div",{staticClass:"workings"},[e("h2",{staticClass:"section-title"},[t._v("\n        作業中の作品\n      ")]),t._v(" "),e("ul",[e("li",t._l(t.author.wip,(function(n){return e("span",{key:n.work_id,staticClass:"title working-text"},[t._v(t._s(n.titleToDisplay))])})),0)])])])])}),[],!1,null,"46799479",null);n.default=component.exports}}]);