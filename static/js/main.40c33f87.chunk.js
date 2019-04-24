(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(281)},126:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),s=a.n(l),i=a(31),u=a(32),c=a(46),o=a(43),m=a(47),d=(a(126),a(110)),p=a.n(d),E=a(16),h=a(111),f=a.n(h),v=a(14),y=a(44),g=a.n(y),x=a(33),b=a.n(x),k=a(112),I=a.n(k),T=a(113),L=a.n(T),C=a(114),j=a.n(C),O=a(115),R=a.n(O),w=function(e){var t=e;return r.a.createElement("div",null,function(e){var t=[];return e.forEach(function(e,a){t.push(r.a.createElement("list",{key:a},r.a.createElement(v.ListItem,{primaryText:e.company,leftIcon:r.a.createElement(I.a,null)}),r.a.createElement(v.ListItem,{primaryText:"Position:"+e.position,leftIcon:r.a.createElement(j.a,null)}),r.a.createElement(v.ListItem,{primaryText:"Activities:"+e.activities,leftIcon:r.a.createElement(L.a,null)}),r.a.createElement(v.ListItem,{primaryText:"Period:"+e.period,leftIcon:r.a.createElement(R.a,null)}))),t.push(r.a.createElement(b.a,{key:a+e}))}),t}(t)," ")},S=a(116),A=a.n(S),D={chip:{margin:4},wrapper:{display:"flex",flexWrap:"wrap"}},q=a(45),P=a.n(q),N=function(e){var t=e;return r.a.createElement("div",null,function(e){var t=[];return e.forEach(function(e,a){t.push(r.a.createElement(v.List,{key:a},r.a.createElement(v.ListItem,{primaryText:e.institution,leftIcon:r.a.createElement(P.a,null)}),r.a.createElement(v.ListItem,{primaryText:e.studyType,leftIcon:r.a.createElement(g.a,null)}))),t.push(r.a.createElement(b.a,{key:a+e}))}),t}(t))},B=a(117),U=a.n(B),_={get:!0,post:!0,put:!0,delete:!0,options:!0},M=function(){function e(){Object(i.a)(this,e),this.handleError=function(e){return Promise.reject({data:null,errorMessage:e.message||"not messages available",requestStatus:e.response.status})};var t=U.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASEURL});t.interceptors.response.use(this.handleSuccess,this.handleError),this.service=t}return Object(u.a)(e,[{key:"makeRequest",value:function(e,t,a,n,r){return _[e]?this.service[e](t,a).then(function(e){return n?n(e):null}).catch(function(e){return r?r(e):null}):r?r({data:null,errorMessage:"this type of request is not available ".concat(e),requestStatus:null}):null}},{key:"handleSuccess",value:function(e){return e?{data:e.data,error:null,requestStatus:e.status}:{data:null,errorMessage:null,requestStatus:null}}},{key:"get",value:function(e,t,a){return this.makeRequest("get",e,null,t,a)}},{key:"post",value:function(e,t,a,n){return this.makeRequest("post",e,{responseType:"json",data:t},a,n)}},{key:"delete",value:function(e,t,a,n){return this.makeRequest("delete",e,{responseType:"json",data:t},a,n)}},{key:"put",value:function(e,t,a,n){return this.makeRequest("put",e,{responseType:"json",data:t},a,n)}}]),e}(),H=a(118),J=a.n(H),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).handleExpandChange=function(e){a.setState({expanded:e})},a.handleToggle=function(e,t){a.setState({expanded:t})},a.handleExpand=function(){a.setState({expanded:!0})},a.handleReduce=function(){a.setState({expanded:!1})},a.state={expanded:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){this.props.data;return r.a.createElement(E.Card,{expanded:this.state.expanded,onExpandChange:this.handleExpandChange},r.a.createElement(E.CardHeader,{title:this.props.title,subtitle:"",avatar:this.props.Icon,actAsExpander:!0,showExpandableButton:!0}),r.a.createElement(E.CardText,null,r.a.createElement(J.a,{toggled:this.state.expanded,onToggle:this.handleToggle,labelPosition:"right",label:""})),r.a.createElement(E.CardTitle,{title:"",subtitle:"",expandable:!0}),r.a.createElement(E.CardText,{expandable:!0},this.props.children))}}]),t}(r.a.Component),W=a(119),z=a.n(W),F=a(120),G=a.n(F),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={isLoadingResume:!0,resumeData:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new M).get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASEURL,"/resume"),function(t){e.setState({isLoadingResume:!1,resumeData:t.data||null})},function(t){e.setState({isLoadingResume:!1,resumeData:null})})}},{key:"render",value:function(){return this.state.isLoadingResume?r.a.createElement("div",null,"Loading..."):this.state.resumeData?r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,function(e){var t=e;return r.a.createElement(E.Card,null,r.a.createElement(E.CardHeader,{title:"ABOUT",subtitle:t.name,avatar:r.a.createElement(f.a,null),actAsExpander:!0,showExpandableButton:!0}),r.a.createElement(E.CardTitle,{title:t.legalName,subtitle:t.tittle}),r.a.createElement(E.CardText,null,r.a.createElement("div",{className:"box"},r.a.createElement("div",null,r.a.createElement("img",{className:"pic",src:t.photo,role:"presentation"})),r.a.createElement("div",null,t.profiles.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("list",{key:t},r.a.createElement(v.ListItem,{primaryText:e.network,leftIcon:r.a.createElement("img",{src:e.logo,role:"presentation"})}),r.a.createElement(v.ListItem,{primaryText:r.a.createElement("a",{href:e.url},e.url),leftIcon:r.a.createElement(g.a,null)})),r.a.createElement(b.a,{key:t+e}))})))))}(this.state.resumeData.about),r.a.createElement(V,{title:"Work",Icon:r.a.createElement(z.a,null)},w(this.state.resumeData.work)),r.a.createElement(V,{title:"Skills",Icon:r.a.createElement(G.a,null)},function(e){var t=e;return r.a.createElement("div",{style:D.wrapper},t.map(function(e,t){return r.a.createElement(A.a,{key:t,style:D.chip},e)}))}(this.state.resumeData.skills)),r.a.createElement(V,{title:"ACADEMIC",Icon:r.a.createElement(P.a,null)},N(this.state.resumeData.education)))):r.a.createElement("div",null,"No data available")}}]),t}(n.Component);a(280);s.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.40c33f87.chunk.js.map