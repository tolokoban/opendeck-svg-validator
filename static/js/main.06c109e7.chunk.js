(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,r){e.exports=r.p+"static/media/OpenDeck.cd1bbcfc.svg"},17:function(e,t,r){e.exports=r(55)},51:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),a=r.n(o),c=r(10),s=r.n(c),i=r(2),l=r(8),p=r.n(l),u=r(11),h=r(9),f=r(3),j=r(4),v=r(6),b=r(5),m=r(7),d=(r(51),function(e){function t(){var e,r;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(r=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).content="",r.ref=a.a.createRef(),r}return Object(m.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"componentDidUpdate",value:function(){this.refresh()}},{key:"refresh",value:function(){var e=this,t=this.props.content,r=this.ref.current;if(r&&this.content!==t){this.content=t,r.innerHTML=t;for(var o=["Off","Mono","Stereo","Busy","Error"],a=function(t){var a=r.querySelector("#projector".concat(t));if(!a)return e.props.onError("Missing SVG ID: #projector".concat(t)),"continue";n.a.Gesture(a).on({down:e.onProjectorClick.bind(e,t)}),o.forEach(function(n){var o="#projector".concat(t).concat(n);r.querySelector(o)||e.props.onError("Missing SVG ID: ".concat(o))})},c=1;c<8;c++)a(c);var s=r.querySelector("#floor");s?n.a.Gesture(s).on({down:this.onProjectorClick.bind(this,0)}):this.props.onError("Missing SVG ID: #floor"),o.forEach(function(t){var n="#floor".concat(t);r.querySelector(n)||e.props.onError("Missing SVG ID: ".concat(n))});var i=r.querySelectorAll("image");i.length>0&&this.props.onError("Pleae avoid <image> elements. I've found ".concat(i.length," of them."))}}},{key:"onProjectorClick",value:function(e){this.props.onWallClicked(e)}},{key:"getClasses",value:function(e,t){var r=[];return t.busy?r.push("".concat(e,"Busy")):(t.power?t.stereo?r.push("".concat(e,"Stereo")):r.push("".concat(e,"Mono")):r.push("".concat(e,"Off")),(t.errors.length>0||t.warnings.length>0)&&r.push("".concat(e,"Error"))),r}},{key:"render",value:function(){var e=this.props.projectors,t=["openDeck-view-hardwareDashboard-Canvas"];return t.push.apply(t,Object(i.a)(this.getClasses("projector1",e[1]))),t.push.apply(t,Object(i.a)(this.getClasses("projector2",e[2]))),t.push.apply(t,Object(i.a)(this.getClasses("projector3",e[3]))),t.push.apply(t,Object(i.a)(this.getClasses("projector4",e[4]))),t.push.apply(t,Object(i.a)(this.getClasses("projector5",e[5]))),t.push.apply(t,Object(i.a)(this.getClasses("projector6",e[6]))),t.push.apply(t,Object(i.a)(this.getClasses("projector7",e[7]))),t.push.apply(t,Object(i.a)(this.getClasses("floor",e[0]))),a.a.createElement("div",{className:t.join(" "),ref:this.ref})}}]),t}(a.a.Component)),y=(r(52),n.a.View.InputFile),g=function(e){function t(){var e,r;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={},r.handleClick=function(){var e=Object(u.a)(p.a.mark(function e(t){var n,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.info("files=",t),n=t[0]){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,y.readFileAsText(n);case 6:o=e.sent,r.props.onLoad(o);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),r}return Object(m.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=["view-Errors"].concat(Object(i.a)(n.a.Converter.StringArray(this.props.className,[])));return a.a.createElement("div",{className:e.join(" ")},a.a.createElement(y,{accept:".svg",wide:!0,label:"Select an SVG file",icon:"import",onClick:this.handleClick}),a.a.createElement("div",{className:"body thm-bg2 thm-ele-bar"},this.props.errors.map(function(e,t){return a.a.createElement("div",{key:"error-".concat(t)},e)})))}}]),t}(a.a.Component),O=r(12),w=(r(53),n.a.View.Checkbox),C=function(e){function t(){var e,r;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={},r}return Object(m.a)(t,e),Object(j.a)(t,[{key:"swap",value:function(e,t){var r=Object(h.a)({},this.props.projector,Object(O.a)({},e,"errors"===e?t?["error"]:[]:t));this.props.onChange(r)}},{key:"render",value:function(){var e=this,t=this.props,r=t.label,o=t.projector,c=["view-ProjectorState","thm-bg2","thm-ele-button"].concat(Object(i.a)(n.a.Converter.StringArray(this.props.className,[])));return a.a.createElement("div",{className:c.join(" ")},a.a.createElement("label",null,r),a.a.createElement(w,{label:"Busy",value:o.busy,onChange:function(t){return e.swap("busy",t)}}),a.a.createElement(w,{label:"Power",value:o.power,onChange:function(t){return e.swap("power",t)}}),a.a.createElement(w,{label:"3D",value:o.stereo,onChange:function(t){return e.swap("stereo",t)}}),a.a.createElement(w,{label:"Error",value:o.errors.length>0,onChange:function(t){return e.swap("errors",t)}}))}}]),t}(a.a.Component),E=(r(54),r(16)),k=r.n(E),S=function(e){function t(){var e,r;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={projectors:[x(),x(),x(),x(),x(),x(),x(),x()],content:"",errors:[]},r.handleWallClicked=function(e){var t=r.state.projectors.slice(),n=Object(h.a)({},t[e]);n.power?n.stereo=!n.stereo:n.power=!0,t[e]=n,r.setState({projectors:t})},r.handleNewError=function(e){var t=r.state.errors.slice();t.push(e),r.setState({errors:t})},r}return Object(m.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.Util.loadTextFromURL(k.a);case 2:t=e.sent,this.setState({content:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateProjector",value:function(e,t){console.info("projector, index=",e,t);var r=this.state.projectors.slice();r[t]=Object(h.a)({},e),this.setState({projectors:r})}},{key:"render",value:function(){var e=this,t=this.state,r=t.projectors,o=t.content,c=t.errors,s=["App","thm-bg0"].concat(Object(i.a)(n.a.Converter.StringArray(this.props.className,[])));return a.a.createElement("div",{className:s.join(" ")},a.a.createElement("div",null,a.a.createElement("div",{className:"projectors"},["floor","projector 1","projector 1","projector 3","projector 4","projector 5","projector 6","projector 7"].map(function(t,n){return a.a.createElement(C,{key:"proj-".concat(n),label:t,projector:r[n],onChange:function(t){return e.updateProjector(t,n)}})})),a.a.createElement(d,{content:o,projectors:r,onError:this.handleNewError,onWallClicked:this.handleWallClicked})),a.a.createElement(g,{errors:c,onLoad:function(t){return e.setState({content:t,errors:[]})}}))}}]),t}(a.a.Component);function x(){return{busy:D(),errors:D()?["error"]:[],name:"proj",power:D(),serverError:"",stereo:D(),warnings:[]}}function D(){return Math.random()<.5}n.a.Theme.register("default",{bg0:"#000",bg3:"#678"}),n.a.Theme.apply("default");var N=document.getElementById("root");s.a.render(a.a.createElement(S,null),N)}},[[17,1,2]]]);
//# sourceMappingURL=main.06c109e7.chunk.js.map