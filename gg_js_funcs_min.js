var ggSiteAddClass=function(){var e;switch(ggGetSiteName()){case"gf":e="gg_fortune";break;case"gs":e="gg_grandsmile";break;case"gl":e="gg_labyrinth";break;case"gt":e="gg_torotan";break;default:e="gg_---"}var t=document.getElementsByTagName("body")[0];t.classList.add(e),(t=document.getElementsByClassName("opa0")[0])&&(t.classList.remove("opa0"),t.classList.add("opa1"))};ggSetDOMContentLoadedCallback(ggSiteAddClass);var ggLinkTile=function(){var e=[[["天気","https://weather.yahoo.co.jp/",0],["地震","https://typhoon.yahoo.co.jp/weather/jp/earthquake/kyoshin/",0],["地図","https://www.google.co.jp/maps",0],["駅探","https://ekitan.com",0],["運行","https://transit.yahoo.co.jp/traininfo/top",0],["辞書","https://dictionary.goo.ne.jp/",0],["翻訳","https://translate.google.com",0]],[["本買取","https://click.linksynergy.com/fs-bin/click?id=z4B/61BA6K0&offerid=289732.10001168&type=4&subid=0",1],["買取","https://amzn.to/2A8TVIa",1],["リコマース","https://px.a8.net/svt/ejp?a8mat=3HRDXP+1UOM2Q+3XHM+5YRHE",1],["タウンワーク","https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2697727&pid=884955469",1],["FromA","https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2697727&pid=884955472",1]],[["YouTube","https://www.youtube.com/",0],["写真プリント","https://px.a8.net/svt/ejp?a8mat=1ZKF1I+2BY6MA+1LGW+5YJRM",1],["送信","https://gigafile.nu/#upload_panel",0],["占い","https://www.tcs-asp.net/alink?AC=C99684&LC=FUNF1&SQ=0&isq=100",1]],[["一休.com","https://px.a8.net/svt/ejp?a8mat=OCX6R+AC3ZEQ+1OK+5YJRM",1],["じゃらんnet","https://px.a8.net/svt/ejp?a8mat=1HY05J+4JQ8WQ+14CS+64JTE",1],["Expedia","https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2697727&pid=884651092&vc_url=https%3A%2F%2Fwww.expedia.co.jp%2F%3Feapid%3D0-28%26affcid%3Djp.network.valuecommerce.general_mylink.",1],["Relux","https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2697727&pid=887547841",1],["エアトリ","https://px.a8.net/svt/ejp?a8mat=356Z5U+D8W9VM+2YGS+64RJ6",1]],[["Amazon","https://af.moshimo.com/af/c/click?a_id=626057&p_id=170&pc_id=185&pl_id=4062&guid=ON",1],["楽天","https://af.moshimo.com/af/c/click?a_id=626056&p_id=54&pc_id=54&pl_id=621&guid=ON",1],["Yahoo","https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2697727&pid=886736692",1],["ヨドバシ","https://www.yodobashi.com/",0],["ビックカメラ","https://www.biccamera.com/bc/main/",0],["ハピタス","https://hapitas.jp/register?i=20388374&route=pcText",1]],[["ふるさと納税","https://hb.afl.rakuten.co.jp/hgc/00195404.3eef8886.0a296fea.6b35e5a6/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E3%2581%25B5%25E3%2582%258B%25E3%2581%2595%25E3%2581%25A8%25E7%25B4%258D%25E7%25A8%258E%2F",1],["Amazonアウトレット","https://amzn.to/3w6aUZp",1],["Audible","https://www.amazon.co.jp/b/ref=adbl_JP_as_0068?ie=UTF8&node=5816607051&tag=gogotorotan-22",1],["kindle unlimited","https://www.amazon.co.jp/kindle-dbs/hz/signup?tag=gogotorotan-22",1],["PrimeVideo","https://www.amazon.co.jp/gp/video/storefront?benefitId=default&tag=gogotorotan-22",1]]],t=["ハピタス","ヨドバシ","ビックカメラ","写真プリント","リコマース","タウンワーク"],a=ggGetSiteName();console.log(a);for(var n=document.createDocumentFragment(),o=0;o<e.length;o++){var l=document.createElement("div");l.className="gg_linktile_row";for(var i=0;i<e[o].length;i++){var g=document.createElement("a");g.href=e[o][i][1],1==e[o][i][2]&&(g.rel="nofollow"),g.setAttribute("target","_blank"),g.setAttribute("onClick",ggMakeGtag(e[o][i][0]));var s=document.createTextNode(e[o][i][0]);0<=t.indexOf(e[o][i][0])&&(g.className="gg_small_space"),g.appendChild(s),l.appendChild(g)}n.appendChild(l)}a=document.createElement("p"),s=document.createTextNode("※本ブログはプロモーションを含みます");a.appendChild(s),a.className="gg_adinfo",n.appendChild(a);a=document.getElementsByClassName("js_linktile")[0];a&&a.appendChild(n)};ggSetDOMContentLoadedCallback(ggLinkTile);var ggLinkAmz=function(){for(var e=ggGetSiteName(),t={},a=document.getElementsByClassName("js_amz"),n=0;n<a.length;n++){var o=a[n].textContent,l=a[n].getAttribute("amz_key")||o;t[o]=l,(c=document.createElement("a")).href=ggMakeShopLink(e,"Amazon",o,l),c.setAttribute("target","_blank"),c.appendChild(document.createTextNode(o)),a[n].textContent=null,a[n].appendChild(c)}var i,g=[["楽天","楽天"],["Amazon","Amazon"],["Yahoo","Yahoo"],["Happi+","H+"]],s=document.createElement("ul");for(i in t){var r=document.createElement("li");(c=document.createElement("a")).href=ggMakeShopLink(e,"Amazon",i,t[i]),c.rel="nofollow",c.setAttribute("target","_blank"),c.setAttribute("onClick",ggMakeGtag("Amazon "+t[i])),c.appendChild(document.createTextNode(i)),r.appendChild(c);for(var c,n=0;n<g.length;n++)(c=document.createElement("a")).className="gg_btn gg_btn_clear",c.href=ggMakeShopLink(e,g[n][0],i,t[i]),c.setAttribute("target","_blank"),c.setAttribute("onClick",ggMakeGtag(g[n][0]+" "+t[i])),c.title=g[n][0],c.appendChild(document.createTextNode(g[n][1])),r.appendChild(c);s.appendChild(r)}var p=document.getElementsByClassName("js_shoplink")[0];p&&p.appendChild(s)},ggMakeShopLink=function(e,t,a,n){var o,l;switch(t){case"楽天":o=n?(o="https://search.rakuten.co.jp/search/mall/",o+=encodeURIComponent(n),"https://af.moshimo.com/af/c/click?a_id=626056&p_id=54&pc_id=54&pl_id=616&url="+encodeURIComponent(o)):"https://af.moshimo.com/af/c/click?a_id=626056&p_id=54&pc_id=54&pl_id=621&guid=ON";break;case"Yahoo":o=n?(o="https://shopping.yahoo.co.jp/search?first=1&tab_ex=commerce&p=",o+=encodeURIComponent(n),"https://af.moshimo.com/af/c/click?a_id=2505069&p_id=1225&pc_id=1925&pl_id=18502&url="+encodeURIComponent(o)):"https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2697727&pid=886736692";break;case"Happi+":o="https://hapitas.jp/register?i=20388374&route=pcText";break;case"ビックカメラ":n?(o="https://www.biccamera.com/bc/category/?q=",l=Encoding.convert(Encoding.stringToCode(n),"SJIS"),o+=n=Encoding.urlEncode(l)):o="https://www.biccamera.com/bc/main/";break;case"ヨドバシ":n?(o="https://www.yodobashi.com/?word=",o+=encodeURIComponent(n)):o="https://www.yodobashi.com/";break;case"メルカリ":n?(o="https://jp.mercari.com/search?keyword=",o+=encodeURIComponent(n),o+="&afid=0081080931"):o="https://jp.mercari.com/";break;case"ラクマ":n?(o="https://fril.jp/s?query=",o+=encodeURIComponent(n)):o="https://fril.jp/";break;case"Yahoo!フリマ":n?(o="https://paypayfleamarket.yahoo.co.jp/search/",o+=encodeURIComponent(n)):o="https://paypayfleamarket.yahoo.co.jp/";break;default:o=n?(o="https://www.amazon.co.jp/s/ref=nb_sb_noss_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=",o+=encodeURIComponent(n),"https://af.moshimo.com/af/c/click?a_id=626057&p_id=170&pc_id=185&pl_id=4062&url="+encodeURIComponent(o)):"https://af.moshimo.com/af/c/click?a_id=626057&p_id=170&pc_id=185&pl_id=4062&guid=ON"}return o};ggSetDOMContentLoadedCallback(ggLinkAmz);var ggShopSearchOpen=function(sel){eval(ggMakeGtag(sel));var fm=document.forms.form_shop_search_Link,key=fm.key.value,site=ggGetSiteName();uu=ggMakeShopLink(site,sel,key,key),window.open(uu,"_blank")},ggShopSearchLinkBtn=function(){var e=document.createElement("form");e.name="form_shop_search_Link";var t=document.createElement("input");t.type="text",t.name="key",t.placeholder="Keyword Search...",e.appendChild(t);for(var a=["Amazon","楽天","Yahoo","ビックカメラ","ヨドバシ","メルカリ","ラクマ","Yahoo!フリマ"],n=0;n<a.length;n++)(t=document.createElement("input")).type="submit",t.value=a[n],t.setAttribute("onClick",`ggShopSearchOpen("${a[n]}");`),t.className="gg_shop_search_btn",e.appendChild(t);"app"==ggGetSiteName()&&(t=document.createElement("p"),o=document.createTextNode("複数開く場合は、Ctrlキーを押しながらクリック"),t.appendChild(o),t.className="gg_shop_search_p",e.appendChild(t));var o=document.getElementsByClassName("js_shop_search_link_btn")[0];o&&o.appendChild(e)};ggSetDOMContentLoadedCallback(ggShopSearchLinkBtn);var ggText2Link=function(){var e=[["SBI証券","https://www.tcs-asp.net/alink?AC=C99684&LC=SBI99&SQ=0&isq=1"],["マネックス証券","https://www.tcs-asp.net/alink?AC=C99684&LC=MXSEC1&SQ=0&isq=1"],["楽天証券","https://www.tcs-asp.net/alink?AC=C99684&LC=RSEC1&SQ=0&isq=1"]],t=['<a href="','" rel="nofollow" target="_blank">',"</a>"],a=document.getElementsByClassName("gg_postbody")[0];if(a){for(var n=a.innerHTML,o=0;o<e.length;o++)var l=new RegExp("("+e[o][0]+")|(<a .*?>(.*?)</a>)","g"),n=n.replace(l,function(){return arguments[2]||(arguments[1]?t[0]+e[o][1]+t[1]+e[o][0]+t[2]:void 0)});a.innerHTML=n}};ggSetDOMContentLoadedCallback(ggText2Link);var ggSnsShare=function(){var e=document.createDocumentFragment(),t=encodeURIComponent(location.href),a=encodeURIComponent(document.title),n=document.createElement("div");n.className="gg_sns_row";var o=document.createElement("a");o.className="gg_sns_twitter",o.href="https://twitter.com/share?url="+t,o.href+="&text="+a,o.title="X post",o.rel="nofollow",o.setAttribute("target","_blank"),o.setAttribute("onClick",ggMakeGtag("SnsShare_twitter"));var l=document.createElement("i");l.className="fa-brands fa-x-twitter",o.appendChild(l),n.appendChild(o),(o=document.createElement("a")).className="gg_sns_facebook",o.href="https://www.facebook.com/sharer/sharer.php?u="+t,o.href+="&t="+a,o.title="Facebook",o.rel="nofollow",o.setAttribute("target","_blank"),o.setAttribute("onClick",ggMakeGtag("SnsShare_facebook")),(l=document.createElement("i")).className="fab fa-facebook-f",o.appendChild(l),n.appendChild(o),(o=document.createElement("a")).className="gg_sns_hatebu",o.href="https://b.hatena.ne.jp/entry/"+t,o.title="Hatena Bookmark",o.rel="nofollow",o.setAttribute("target","_blank"),o.setAttribute("onClick",ggMakeGtag("SnsShare_hatebu")),o.text="B!",n.appendChild(o),e.appendChild(n),(n=document.createElement("div")).className="gg_sns_row",(o=document.createElement("a")).className="gg_sns_slack",o.href="https://slack.com/signin",o.title="Slack",o.rel="nofollow",o.setAttribute("target","_blank"),o.setAttribute("onClick",ggMakeGtag("SnsShare_slack")),(l=document.createElement("i")).className="fab fa-slack",o.appendChild(l),n.appendChild(o),(o=document.createElement("a")).className="gg_sns_get-pocket",o.href="https://getpocket.com/edit?url="+t,o.href+="&title="+a,o.title="Pocket",o.rel="nofollow",o.setAttribute("target","_blank"),o.setAttribute("onClick",ggMakeGtag("SnsShare_get")),(l=document.createElement("i")).className="fab fa-get-pocket",o.appendChild(l),n.appendChild(o),(o=document.createElement("a")).className="gg_sns_copy",o.title="Title & URL copy",o.setAttribute("onClick","ggCopyUrlTitle()"),(l=document.createElement("i")).className="fas fa-copy",l.className="far fa-copy",o.appendChild(l),n.appendChild(o),e.appendChild(n);n=document.getElementsByClassName("js_sns_share")[0];n&&n.appendChild(e)};ggSetDOMContentLoadedCallback(ggSnsShare);var ggCopyUrlTitle=function(){navigator.clipboard.writeText(document.title+"\n"+location.href),gtag("event",this.href,{event_category:location.href,event_label:"copy"})},ggBlogSearch=function(){var e=document.createElement("i");e.className="fas fa-search";var t=document.createElement("button");t.type="submit",t.appendChild(e);var a=document.createElement("input");a.type="text",a.placeholder="Blog Search...",a.name="q";e=document.createElement("form");e.action="/search",e.method="get",e.appendChild(a),e.appendChild(t);t=document.getElementsByClassName("js_blog_search")[0];t&&t.appendChild(e)};ggSetDOMContentLoadedCallback(ggBlogSearch);var gglinkbtn=function(){var e=[[["窓の杜","https://forest.watch.impress.co.jp/",1],["Vector","https://www.vector.co.jp/",1],["ｋ本的に無料ソフト","https://www.gigafree.net/faq/freesoft.html",1]],[["PanRolling本","https://amzn.to/3m0bkvG",1],["ウィザードブック","https://amzn.to/3uAIuF6",1],["岡三RSS","https://www.okasan-online.co.jp/ont/rss/manual/",1],["kabuステーション API","https://kabucom.github.io/kabusapi/ptal/index.html",1]],[["自己啓発本","https://amzn.to/3dMrqWb",1]],[["O'REILLY本","https://amzn.to/3cyd2l0",1],["Can I use","https://caniuse.com/",1],["PyPI","https://pypi.org/",1],["RubyGems","https://rubygems.org/",1],["BestGems","https://bestgems.org/",1],["npm","https://www.npmjs.com/",1],["GitHub","https://github.co.jp/",1]]],t=[[["ハピタス","https://hapitas.jp/register?i=20388374&route=pcText",1],["Amazonベストセラー","https://amzn.to/2O6aJfw",1],["Amazonギフト券","https://amzn.to/31q7i6b",1],["Amazonアウトレット","https://amzn.to/3w6aUZp",1],["ふるさと納税 ランキング","https://hb.afl.rakuten.co.jp/hgc/00195404.3eef8886.0a296fea.6b35e5a6/?pc=https%3A%2F%2Fevent.rakuten.co.jp%2Ffurusato%2Franking%2Fall.html%3Fl-id%3Dfurusato_pc_top_headmenu_ranking",1],["ふるさと納税 定期便","https://hb.afl.rakuten.co.jp/hgc/00195404.3eef8886.0a296fea.6b35e5a6/?pc=https%3A%2F%2Fevent.rakuten.co.jp%2Ffurusato%2Fregular%2F",1],["楽天モバイル","https://px.a8.net/svt/ejp?a8mat=2NDQIG+CV7AYQ+399O+626XU",1],["IIJmio","https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2697727&pid=887041102",1]],[["ハピタス","https://hapitas.jp/register?i=20388374&route=pcText",1],["SBI証券","https://www.tcs-asp.net/alink?AC=C99684&LC=SBI99&SQ=0&isq=1",1],["マネックス証券","https://www.tcs-asp.net/alink?AC=C99684&LC=MXSEC1&SQ=0&isq=1",1],["楽天証券","https://www.tcs-asp.net/alink?AC=C99684&LC=RSEC1&SQ=0&isq=1",1],["DMM.com証券","https://www.tcs-asp.net/alink?AC=C99684&LC=DMM2&SQ=0&isq=6",1],["トライオート","https://www.tcs-asp.net/alink?AC=C99684&LC=INV12&SQ=0&isq=101",1],["みんなのシストレ","https://www.tcs-asp.net/alink?AC=C99684&LC=MIN14&SQ=0&isq=101",1]],[["ハピタス","https://hapitas.jp/register?i=20388374&route=pcText",1],["Amazonベストセラー","https://amzn.to/2O6aJfw",1],["Amazonギフト券","https://amzn.to/31q7i6b",1],["Amazonアウトレット","https://amzn.to/3w6aUZp",1],["ふるさと納税 ランキング","https://hb.afl.rakuten.co.jp/hgc/00195404.3eef8886.0a296fea.6b35e5a6/?pc=https%3A%2F%2Fevent.rakuten.co.jp%2Ffurusato%2Franking%2Fall.html%3Fl-id%3Dfurusato_pc_top_headmenu_ranking",1],["ふるさと納税 定期便","https://hb.afl.rakuten.co.jp/hgc/00195404.3eef8886.0a296fea.6b35e5a6/?pc=https%3A%2F%2Fevent.rakuten.co.jp%2Ffurusato%2Fregular%2F",1],["楽天モバイル","https://px.a8.net/svt/ejp?a8mat=2NDQIG+CV7AYQ+399O+626XU",1],["IIJmio","https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2697727&pid=887041102",1]],[["ハピタス","https://hapitas.jp/register?i=20388374&route=pcText",1],["Amazonベストセラー","https://amzn.to/2O6aJfw",1]]],a=0;switch(ggGetSiteName()){case"gf":a=1;break;case"gs":a=2;break;case"gl":a=3;break;default:a=0}for(var n=document.createDocumentFragment(),o=(document.createElement("div"),0);o<e[a].length;o++){(g=document.createElement("a")).className="gg_btn gg_normal",g.href=e[a][o][1],1==e[a][o][2]&&(g.rel="nofollow"),g.setAttribute("target","_blank"),g.setAttribute("onClick",ggMakeGtag(e[a][o][0]));var l=document.createTextNode(e[a][o][0]);g.appendChild(l),n.appendChild(g),n.appendChild(document.createTextNode("\n"))}t[a].shuffle();var i=t[a].length;3<i&&(i=3);for(var g,s=Math.floor(Math.random()*i),o=0;o<i;o++){(g=document.createElement("a")).className=o==s?"gg_btn":"gg_btn gg_normal",g.href=t[a][o][1],1==t[a][o][2]&&(g.rel="nofollow"),g.setAttribute("target","_blank"),g.setAttribute("onClick",ggMakeGtag(t[a][o][0]));l=document.createTextNode(t[a][o][0]);g.appendChild(l),n.appendChild(g),n.appendChild(document.createTextNode("\n"))}var r=document.getElementsByClassName("js_linkbtn")[0];r&&r.appendChild(n)};ggSetDOMContentLoadedCallback(gglinkbtn);var gg_g_relation_tag_cnt=0,gg_g_relation_tags=[],ggRelationTag=function(e){var t=(-1==gg_g_relation_tag_cnt?e:document).getElementsByClassName("gg_tags")[0],e=ggGetBlogSys();if(t){var a=t.getElementsByTagName("a");if(gg_g_relation_tag_cnt=a.length,gg_g_relation_tags=[],"tb"==e)for(var n=0;n<a.length;n++){var o=a[n].href+"/rss";ggXMLHttpRequest(o,ggRelationTagCallback,a[n])}else{for(n=0;n<a.length;n++){o=a[n].href.replace("/search/label/","/feeds/posts/default/-/")+"?alt=json-in-script&max-results=500&redirect=false&callback=ggRelationTagCallback";ggLoadJsonp(o)}setTimeout(function(){ggRelationTagCallback(null,null,1)},1e4)}}else"tb"==e&&(e=window.location.protocol+"//"+window.location.hostname+"/random",ggXMLHttpRequest(e,ggRelationTagRandomCallback,null))},ggRelationTagRandomCallback=function(e,t,a){a||(gg_g_relation_tag_cnt=-1,ggRelationTag(e))},ggRelationTagCallback=function(e,t,a){if(a)gg_g_relation_tag_cnt=0;else{gg_g_relation_tag_cnt--;var n,a=ggGetBlogSys(),o=window.location.href,l=[];if("tb"==a){n=t.href,C=t.text;for(var i=e.getElementsByTagName("item"),g=0;g<i.length;g++)if((f={}).link=i[g].getElementsByTagName("link")[0].textContent,-1==o.indexOf(f.link)){f.ttl=i[g].getElementsByTagName("title")[0].textContent;for(var s=i[g].getElementsByTagName("category"),r=[],c=0;c<s.length;c++)r[c]=s[c].textContent;f.tags=r,l.push(f),gg_g_relation_tags.push(f)}}else{n=e.feed.link[2].href,C=decodeURIComponent(e.feed.link[2].href.split("/").pop());for(g=0;g<e.feed.entry.length;g++)if((f={}).link=e.feed.entry[g].link[2].href,-1==o.indexOf(f.link)){f.ttl=e.feed.entry[g].title.$t;for(s=e.feed.entry[g].category,r=[],c=0;c<s.length;c++)r[c]=s[c].term;f.tags=r,l.push(f),gg_g_relation_tags.push(f)}}if(l.length){var p=document.createDocumentFragment(),m=document.createElement("h3");(k=document.createElement("a")).href=n,k.text=C,m.appendChild(k),p.appendChild(m),l.shuffle();for(var d=document.createElement("ul"),g=0;g<l.length;g++){var h=document.createElement("li");if((k=document.createElement("a")).href=l[g].link,k.appendChild(document.createTextNode(l[g].ttl)),h.appendChild(k),d.appendChild(h),2<=g)break}p.appendChild(d),(u=document.getElementsByClassName("js_relation_tag")[0])&&u.appendChild(p)}}if(gg_g_relation_tag_cnt<=0&&gg_g_relation_tags.length){var u;if(u=document.getElementsByClassName("js_relation")[0]){for(var f={},g=0;g<gg_g_relation_tags.length;g++)f[gg_g_relation_tags[g].link]=gg_g_relation_tags[g];var _,l=[];for(_ in f)l.push(f[_]);l.shuffle(),org_tags=[];var C=document.getElementsByClassName("gg_tags")[0];if(C){s=C.getElementsByTagName("a");for(g=0;g<s.length;g++)org_tags.push(s[g].text)}for(g=0;g<l.length;g++)for(c=l[g].tag_cnt=0;c<org_tags.length;c++)-1!=l[g].tags.indexOf(org_tags[c])&&l[g].tag_cnt++;l.sort(function(e,t){return e.tag_cnt<t.tag_cnt?1:e.tag_cnt>t.tag_cnt?-1:0});p=document.createDocumentFragment();(m=document.createElement("h3")).appendChild(document.createTextNode("関連記事")),p.appendChild(m);for(d=document.createElement("ul"),g=0;g<l.length;g++){var k,h=document.createElement("li");if((k=document.createElement("a")).href=l[g].link,k.appendChild(document.createTextNode(l[g].ttl)),h.appendChild(k),d.appendChild(h),4<=g)break}p.appendChild(d),u.appendChild(p)}gg_g_relation_tags=[]}};ggSetDOMContentLoadedCallback(ggRelationTag);var ggBlogLink=function(){for(var e=[["gg_blog_gt","gogoToRoTAN","https://gogotorotan.blogspot.com/2010/01/gogotorotan.html"],["gg_blog_gs","gogoGrandSmile","https://gogograndsmile.blogspot.com/2011/11/grand-smile.html"],["gg_blog_gf","gogoFortune","https://gogofortune.blogspot.com/2018/08/gogofortune.html"],["gg_blog_gl","gogoLabyrinth","https://gogolabyrinth.blogspot.com/2021/06/gogolabyrinth.html"],["gg_mag_gs","まぐまぐ！","https://www.mag2.com/m/0001303517.html"]],t=document.createDocumentFragment(),a=0;a<e.length;a++){var n=document.createElement("a");n.className=e[a][0],n.href=e[a][2],n.setAttribute("target","_blank"),n.setAttribute("onClick",ggMakeGtag(e[a][1]));var o=document.createTextNode(e[a][1]);n.appendChild(o),t.appendChild(n),t.appendChild(document.createTextNode("\n"))}var l=document.getElementsByClassName("js_bloglink")[0];l&&l.appendChild(t)};ggSetDOMContentLoadedCallback(ggBlogLink);var ggCopyWrite=function(){var e=document.createDocumentFragment(),t=document.createTextNode("© 2010 ");e.appendChild(t),(n=document.createElement("a")).href="https://gogotorotan.blogspot.com/2010/01/gogotorotan.html",n.title="Profile",n.setAttribute("target","_blank"),n.setAttribute("onClick",ggMakeGtag("torotan")),t=document.createTextNode("torotan"),n.appendChild(t),e.appendChild(n),(n=document.createElement("a")).href="https://mailform.mface.jp/frms/torotan/avpl02aqjmvi",n.title="Mail",n.setAttribute("target","_blank"),n.setAttribute("onClick",ggMakeGtag("mailform"));var a=document.createElement("i");a.className="far fa-envelope",n.appendChild(a),e.appendChild(n),(n=document.createElement("a")).href="https://twitter.com/gogotorotan",n.title="X follow",n.rel="nofollow",n.setAttribute("target","_blank"),n.setAttribute("onClick",ggMakeGtag("SnsFollow_twitterf")),(a=document.createElement("i")).className="fa-brands fa-x-twitter",n.appendChild(a),e.appendChild(n);var n=document.createElement("a"),t="/"+location.protocol+"//"+location.hostname+"/feeds/posts/default",t=encodeURIComponent(t);n.href="https://feedly.com/i/subscription/feed"+t,n.title="feedly",n.rel="nofollow",n.setAttribute("target","_blank"),n.setAttribute("onClick",ggMakeGtag("SnsFollow_feedly")),(a=document.createElement("i")).className="fas fa-rss",n.appendChild(a),e.appendChild(n);n=document.getElementsByClassName("js_copywrite")[0];n&&n.appendChild(e)};ggSetDOMContentLoadedCallback(ggCopyWrite);var ggAnalogWatch=function(){var e=document.getElementById("js_analog_watch");if(e){e.style.position="relative",e.style.fontFamily="Arial",e.style.opacity=.8;var t,a=document.createDocumentFragment();for(ii=0;ii<12;ii++)(t=document.createElement("div")).id="gg_aw_moji"+ii,t.textContent="・",t.style.position="absolute",t.style.width="10px",t.style.height="10px",t.style.fontSize="10px",t.style.color="#999",t.style.textAlign="center",a.appendChild(t);for(ii=0;ii<4;ii++)(t=document.createElement("div")).id="gg_aw_hour"+ii,t.style.position="absolute",t.style.width="2px",t.style.height="2px",t.style.fontSize="2px",t.style.backgroundColor="#c99",a.appendChild(t);for(ii=0;ii<5;ii++)(t=document.createElement("div")).id="gg_aw_min"+ii,t.style.position="absolute",t.style.width="2px",t.style.height="2px",t.style.fontSize="2px",t.style.backgroundColor="#99c",a.appendChild(t);e.appendChild(a),ggSetAnalogWatch()}},gg_g_analogwatch_fg=0,ggSetAnalogWatch=function(){gg_g_analogwatch_fg=1;var e=new Date,t=e.getFullYear(),a=t-2018,n=e.getMonth()+1,o=e.getDate(),l=["日","月","火","水","木","金","土"][e.getDay()],i=e.getHours(),g=e.getMinutes(),s=(e.getSeconds(),Math.PI/2*(g/15-1)),r=Math.PI/2*(i/3+g/180-1),g="R"+a+"  "+t+"/"+n+"/"+o+" "+l+"  "+i+":"+(g=("0"+g).slice(-2));document.getElementsByClassName("js_datetime")[0].textContent=g,document.getElementById("js_analog_watch").setAttribute("title",g),12<=i&&(i-=12);g=(i=0==i?12:i)-1;for(0==g&&(g=12),document.getElementById("gg_aw_moji"+(g-1)).textContent="・",document.getElementById("gg_aw_moji"+(i-1)).textContent=i,ii=0;ii<12;ii++){var c=Math.PI/6*(ii-2);(p=document.getElementById("gg_aw_moji"+ii).style).left=25*Math.cos(c)-26+"px",p.top=25*Math.sin(c)-7+"px"}var p;for(ii=0;ii<4;ii++)(p=document.getElementById("gg_aw_hour"+ii).style).left=5*ii*Math.cos(r)-22+"px",p.top=5*ii*Math.sin(r)-2+"px";for(ii=0;ii<5;ii++)(p=document.getElementById("gg_aw_min"+ii).style).left=5*ii*Math.cos(s)-22+"px",p.top=5*ii*Math.sin(s)-2+"px";800<=window.innerWidth?setTimeout("ggSetAnalogWatch()",9e3):gg_g_analogwatch_fg=0},ggSetAnalogWatchResize=function(){0==gg_g_analogwatch_fg&&ggSetAnalogWatch()};ggSetDOMContentLoadedCallback(ggAnalogWatch),ggSetResizeCallback(ggSetAnalogWatchResize),ggSetDOMContentLoadedCallback(hljs.highlightAll);