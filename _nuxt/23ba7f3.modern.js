(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(t,e,o){var content=o(163);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("2dc68b6c",content,!0,{sourceMap:!1})},162:function(t,e,o){"use strict";o(157)},163:function(t,e,o){(e=o(17)(!1)).push([t.i,"section.detail[data-v-6c2e7a3c],section.icons[data-v-6c2e7a3c]{z-index:100;position:relative;background-color:#f3ede8;padding:1.2rem}.titles[data-v-6c2e7a3c]{margin-bottom:.5rem}.titles .book-title[data-v-6c2e7a3c]{font-size:2rem;font-weight:700}.titles .book-subtitle[data-v-6c2e7a3c]{font-size:1.2rem;font-weight:700}.caption[data-v-6c2e7a3c]{font-size:.7rem;font-weight:400;margin-bottom:2rem}.caption span[data-v-6c2e7a3c]{display:inline-block}.date[data-v-6c2e7a3c]{font-size:.7rem;margin:1.5rem 0}.description[data-v-6c2e7a3c]{margin-top:2rem}.description .head[data-v-6c2e7a3c]{font-weight:700;font-size:1.1em;margin-bottom:.2rem}.description .text[data-v-6c2e7a3c]{white-space:normal;word-wrap:break-word;word-break:break-all;margin:.5rem 0 2rem}h2.section-title[data-v-6c2e7a3c]{font-size:1.8rem;font-family:serif;letter-spacing:.2rem;color:#0c64ac;font-weight:700;margin-top:2rem;margin-bottom:1rem}h2.section-title[data-v-6c2e7a3c],section.icons[data-v-6c2e7a3c]{border-bottom:1px solid #b4b4af}section.icons[data-v-6c2e7a3c]{padding:1.2rem 1.2rem 0;margin-bottom:.5rem}section.icons h2[data-v-6c2e7a3c]{font-weight:700;font-size:1.1em;margin-bottom:.2rem}section.icons .circles[data-v-6c2e7a3c]{display:flex;justify-content:space-around;margin:0}section.icons li.icon[data-v-6c2e7a3c]{border:2px solid #4c4a48;border-radius:50%;height:50px;width:50px}section.icons li.icon .link[data-v-6c2e7a3c]{height:100%;width:100%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;align-content:center}section.icons li.icon .link img[data-v-6c2e7a3c]{max-width:75%;max-height:75%}section.icons li.icon .link img.amazon[data-v-6c2e7a3c]{max-width:90%}section.icons li.icon .link img.twitter[data-v-6c2e7a3c]{max-width:100%;max-height:100%;border-radius:50%}section.icons p.excuse[data-v-6c2e7a3c]{font-size:.9rem;margin:1rem 0 3rem}section.icons p.excuse span[data-v-6c2e7a3c]{display:inline-block}.text-body[data-v-6c2e7a3c]{position:relative;left:-10%;width:120%;overflow:hidden}.text-body h2[data-v-6c2e7a3c]{padding-left:10%;position:relative;z-index:0}.text-body iframe[data-v-6c2e7a3c]{border:1px solid #b4b4af;border-top:none;width:100%;height:calc(100vh + 150px);position:relative;z-index:10;top:-250px;overflow:scroll;padding-bottom:.5rem}.text-body iframe.with-subtitle[data-v-6c2e7a3c]{top:-350px;height:calc(100vh + 250px)}",""]),t.exports=e},165:function(t,e,o){"use strict";o.r(e);o(59),o(46),o(60);var n=o(2),c=o(1).a.extend({name:"Book",components:{},validate(t){var{params:e}=t;return/\d+/.test(e.id)},asyncData:t=>Object(n.a)((function*(){var{params:e,payload:o,$axios:n}=t;try{var c=Number.parseInt(e.id),r=o||(yield n.$get("https://raw.githubusercontent.com/takahashim/aozora_json_scrape/master/card.json"))||[],l=o||r.find(t=>t.title.work_id===c),d=l.title.author_id.toString(),m=l.title.work_id,h="000000".concat(d).slice(d.length),w="https://www.aozora.gr.jp/cards/".concat(h,"/files/"),v=(l.download||[]).find(t=>t.filename&&t.filename.endsWith("html")),k=v?"".concat(w).concat(v.filename):void 0,f=(l.download||[]).find(t=>t.filetype.startsWith("テキストファイル")),_=f?"".concat(w).concat(f.filename):void 0,x=l.work,y=x.note?x.note.replace(/<[^>]*>?(\n)?/gm,""):"",z=[x.work_note,y,x.first_appearance].some(t=>t&&t.length>0),C=l.author.map(a=>a.author_name),j=l.title.title.split(" ").join("+");return{book:l,work:x,note:y,showDescription:z,workHTMLURL:k,icons:[{name:"青空inBrowser",key:"aozora_in_browser",filename:"vertical-document.png",url:"http://aozora.binb.jp/reader/main.html?cid=".concat(m)},{name:"えあ草紙",key:"air_zoshi",filename:"opened-book.png",url:"https://www.satokazzz.com/airzoshi/reader.php?action=aozora&id=".concat(m)},{name:"AmazonKindle",key:"amazon",filename:"amazon.png",url:"https://www.amazon.co.jp/s?rh=n%3A2275256051&k=".concat(C.join("+"),"+").concat(j)},{name:"ダウンロード",key:"download",filename:"download.png",url:_,download:!0},{name:"ツイッター",key:"twitter",filename:"twitter_white.png"}]}}catch(t){console.error(t)}}))(),data:()=>({book:void 0,workHTMLBody:"",workHTMLURL:""}),methods:{shareOnTwitter(){var t=this.book.author.map(a=>a.author_name),e=this.book.title.title.split(" ").join("+");return window.open("https://twitter.com/intent/tweet?text=".concat("".concat(t,"『").concat(e,"』%0a").concat(window.location,"%0a"),"&hashtags=青空文庫,AozoraBunko"))}}}),r=(o(162),o(9)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.book?o("section",{staticClass:"book"},[o("section",{staticClass:"detail"},[t.book.title?o("div",{staticClass:"title"},[o("div",{staticClass:"titles"},[o("h1",{staticClass:"book-title"},[t._v("\n          "+t._s(t.book.title.title)+"\n        ")]),t._v(" "),o("h2",{staticClass:"book-subtitle"},[t._v("\n          "+t._s(t.book.title.subtitle)+"\n        ")])]),t._v(" "),o("p",{staticClass:"caption"},[o("span",{staticClass:"title-caption"},[t._v("\n          "+t._s(t.book.title.title_kana)+"\n        ")]),t._v(" "),o("span",{staticClass:"title-caption"},[t._v("\n          "+t._s(t.book.title.subtitle_kana)+"\n        ")])]),t._v(" "),o("nuxt-link",{staticClass:"author",attrs:{to:"/author/"+t.book.title.person_id}},[t._v("\n        "+t._s(t.book.title.person_name)+"\n      ")])],1):t._e(),t._v(" "),t.showDescription?o("div",{staticClass:"description"},[o("h2",{staticClass:"head"},[t._v("\n        作品について\n      ")]),t._v(" "),o("div",{staticClass:"text"},[o("p",{directives:[{name:"show",rawName:"v-show",value:t.work.work_note,expression:"work.work_note"}],staticClass:"work_note"},[t._v("\n          "+t._s(t.work.work_note)+"\n        ")]),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:t.work.note,expression:"work.note"}],staticClass:"note"},[t._v("\n          "+t._s(t.note)+"\n        ")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.work.first_appearance,expression:"work.first_appearance"}],staticClass:"first-edition"},[o("p",[t._v("初出： "+t._s(t.work.first_appearance))])])]):t._e()]),t._v(" "),o("section",{staticClass:"icons"},[o("h2",[t._v("縦書き表示・ダウンロード・シェア")]),t._v(" "),o("ul",{staticClass:"circles"},t._l(t.icons,(function(e){return o("li",{key:e.name,staticClass:"icon"},["twitter"===e.key?o("button",{staticClass:"link",on:{click:t.shareOnTwitter}},[o("img",{class:e.key,attrs:{src:"images/"+e.filename,alt:e.name}})]):e.download?o("button",{staticClass:"link",attrs:{href:e.url,download:!0}},[o("img",{class:e.key,attrs:{src:"images/"+e.filename,alt:e.name}})]):o("a",{staticClass:"link",attrs:{target:"_blank",rel:"noreferrer",href:e.url}},[o("img",{class:e.key,attrs:{src:"images/"+e.filename,alt:e.name}})])])})),0),t._v(" "),t._m(0),t._v(" "),o("h2",[t._v("本文")])]),t._v(" "),o("section",{staticClass:"text-body"},[o("iframe",{class:{"with-subtitle":t.book.title.subtitle},attrs:{src:t.workHTMLURL,title:t.book.title.title+"の本文",loading:"lazy",frameborder:"0"}})])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"excuse"},[e("span",[this._v(" ファイルのご利用については、")]),this._v(" "),e("span",[this._v("「"),e("a",{attrs:{href:"https://www.aozora.gr.jp/guide/kijyunn.html"}},[this._v("収録ファイルの取扱い基準")]),this._v("」をご確認ください。")])])}],!1,null,"6c2e7a3c",null);e.default=component.exports}}]);