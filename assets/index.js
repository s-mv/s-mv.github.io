var le=Object.defineProperty;var ie=(t,e,n)=>e in t?le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $=(t,e,n)=>(ie(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var I,d,X,C,G,Y,B,E={},Z=[],se=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,R=Array.isArray;function P(t,e){for(var n in e)t[n]=e[n];return t}function ee(t){var e=t.parentNode;e&&e.removeChild(t)}function ce(t,e,n){var l,r,o,s={};for(o in e)o=="key"?l=e[o]:o=="ref"?r=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?I.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return U(t,s,l,r,null)}function U(t,e,n,l,r){var o={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++X};return r==null&&d.vnode!=null&&d.vnode(o),o}function W(t){return t.children}function T(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?D(t):null}function te(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return te(t)}}function V(t){(!t.__d&&(t.__d=!0)&&C.push(t)&&!H.__r++||G!==d.debounceRendering)&&((G=d.debounceRendering)||Y)(H)}function H(){var t,e,n,l,r,o,s,f,c;for(C.sort(B);t=C.shift();)t.__d&&(e=C.length,l=void 0,r=void 0,o=void 0,f=(s=(n=t).__v).__e,(c=n.__P)&&(l=[],r=[],(o=P({},s)).__v=s.__v+1,j(c,s,o,n.__n,c.ownerSVGElement!==void 0,s.__h!=null?[f]:null,l,f??D(s),s.__h,r),re(l,s,r),s.__e!=f&&te(s)),C.length>e&&C.sort(B));H.__r=0}function ne(t,e,n,l,r,o,s,f,c,g,h){var _,m,u,i,a,N,p,v,w,k=0,y=l&&l.__k||Z,O=y.length,x=O,L=e.length;for(n.__k=[],_=0;_<L;_++)(i=n.__k[_]=(i=e[_])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?U(null,i,null,null,i):R(i)?U(W,{children:i},null,null,null):i.__b>0?U(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=n,i.__b=n.__b+1,(v=fe(i,y,p=_+k,x))===-1?u=E:(u=y[v]||E,y[v]=void 0,x--),j(t,i,u,r,o,s,f,c,g,h),a=i.__e,(m=i.ref)&&u.ref!=m&&(u.ref&&z(u.ref,null,i),h.push(m,i.__c||a,i)),a!=null&&(N==null&&(N=a),(w=u===E||u.__v===null)?v==-1&&k--:v!==p&&(v===p+1?k++:v>p?x>L-p?k+=v-p:k--:k=v<p&&v==p-1?v-p:0),p=_+k,typeof i.type!="function"||v===p&&u.__k!==i.__k?typeof i.type=="function"||v===p&&!w?i.__d!==void 0?(c=i.__d,i.__d=void 0):c=a.nextSibling:c=oe(t,a,c):c=_e(i,c,t),typeof n.type=="function"&&(n.__d=c))):(u=y[_])&&u.key==null&&u.__e&&(u.__e==c&&(c=D(u)),F(u,u,!1),y[_]=null);for(n.__e=N,_=O;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=y[_].__e.nextSibling),F(y[_],y[_]))}function _e(t,e,n){for(var l,r=t.__k,o=0;r&&o<r.length;o++)(l=r[o])&&(l.__=t,e=typeof l.type=="function"?_e(l,e,n):oe(n,l.__e,e));return e}function oe(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function fe(t,e,n,l){var r=t.key,o=t.type,s=n-1,f=n+1,c=e[n];if(c===null||c&&r==c.key&&o===c.type)return n;if(l>(c!=null?1:0))for(;s>=0||f<e.length;){if(s>=0){if((c=e[s])&&r==c.key&&o===c.type)return s;s--}if(f<e.length){if((c=e[f])&&r==c.key&&o===c.type)return f;f++}}return-1}function ue(t,e,n,l,r){var o;for(o in n)o==="children"||o==="key"||o in e||A(t,o,null,n[o],l);for(o in e)r&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||A(t,o,e[o],n[o],l)}function q(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||se.test(e)?n:n+"px"}function A(t,e,n,l,r){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||q(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||q(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?l||t.addEventListener(e,o?K:J,o):t.removeEventListener(e,o?K:J,o);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function J(t){return this.l[t.type+!1](d.event?d.event(t):t)}function K(t){return this.l[t.type+!0](d.event?d.event(t):t)}function j(t,e,n,l,r,o,s,f,c,g){var h,_,m,u,i,a,N,p,v,w,k,y,O,x,L,S=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,f=e.__e=n.__e,e.__h=null,o=[f]),(h=d.__b)&&h(e);e:if(typeof S=="function")try{if(p=e.props,v=(h=S.contextType)&&l[h.__c],w=h?v?v.props.value:h.__:l,n.__c?N=(_=e.__c=n.__c).__=_.__E:("prototype"in S&&S.prototype.render?e.__c=_=new S(p,w):(e.__c=_=new T(p,w),_.constructor=S,_.render=pe),v&&v.sub(_),_.props=p,_.state||(_.state={}),_.context=w,_.__n=l,m=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),S.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=P({},_.__s)),P(_.__s,S.getDerivedStateFromProps(p,_.__s))),u=_.props,i=_.state,_.__v=e,m)S.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(S.getDerivedStateFromProps==null&&p!==u&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(p,w),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(p,_.__s,w)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(_.props=p,_.state=_.__s,_.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(M){M&&(M.__=e)}),k=0;k<_._sb.length;k++)_.__h.push(_._sb[k]);_._sb=[],_.__h.length&&s.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(p,_.__s,w),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(u,i,a)})}if(_.context=w,_.props=p,_.__P=t,_.__e=!1,y=d.__r,O=0,"prototype"in S&&S.prototype.render){for(_.state=_.__s,_.__d=!1,y&&y(e),h=_.render(_.props,_.state,_.context),x=0;x<_._sb.length;x++)_.__h.push(_._sb[x]);_._sb=[]}else do _.__d=!1,y&&y(e),h=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++O<25);_.state=_.__s,_.getChildContext!=null&&(l=P(P({},l),_.getChildContext())),m||_.getSnapshotBeforeUpdate==null||(a=_.getSnapshotBeforeUpdate(u,i)),ne(t,R(L=h!=null&&h.type===W&&h.key==null?h.props.children:h)?L:[L],e,n,l,r,o,s,f,c,g),_.base=e.__e,e.__h=null,_.__h.length&&s.push(_),N&&(_.__E=_.__=null)}catch(M){e.__v=null,(c||o!=null)&&(e.__e=f,e.__h=!!c,o[o.indexOf(f)]=null),d.__e(M,e,n)}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ae(n.__e,e,n,l,r,o,s,c,g);(h=d.diffed)&&h(e)}function re(t,e,n){for(var l=0;l<n.length;l++)z(n[l],n[++l],n[++l]);d.__c&&d.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){d.__e(o,r.__v)}})}function ae(t,e,n,l,r,o,s,f,c){var g,h,_,m=n.props,u=e.props,i=e.type,a=0;if(i==="svg"&&(r=!0),o!=null){for(;a<o.length;a++)if((g=o[a])&&"setAttribute"in g==!!i&&(i?g.localName===i:g.nodeType===3)){t=g,o[a]=null;break}}if(t==null){if(i===null)return document.createTextNode(u);t=r?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,u.is&&u),o=null,f=!1}if(i===null)m===u||f&&t.data===u||(t.data=u);else{if(o=o&&I.call(t.childNodes),h=(m=n.props||E).dangerouslySetInnerHTML,_=u.dangerouslySetInnerHTML,!f){if(o!=null)for(m={},a=0;a<t.attributes.length;a++)m[t.attributes[a].name]=t.attributes[a].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(ue(t,u,m,r,f),_)e.__k=[];else if(ne(t,R(a=e.props.children)?a:[a],e,n,l,r&&i!=="foreignObject",o,s,o?o[0]:n.__k&&D(n,0),f,c),o!=null)for(a=o.length;a--;)o[a]!=null&&ee(o[a]);f||("value"in u&&(a=u.value)!==void 0&&(a!==t.value||i==="progress"&&!a||i==="option"&&a!==m.value)&&A(t,"value",a,m.value,!1),"checked"in u&&(a=u.checked)!==void 0&&a!==t.checked&&A(t,"checked",a,m.checked,!1))}return t}function z(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(l){d.__e(l,n)}}function F(t,e,n){var l,r;if(d.unmount&&d.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||z(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(o){d.__e(o,e)}l.base=l.__P=null,t.__c=void 0}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&F(l[r],e,n||typeof t.type!="function");n||t.__e==null||ee(t.__e),t.__=t.__e=t.__d=void 0}function pe(t,e,n){return this.constructor(t,n)}function de(t,e,n){var l,r,o,s;d.__&&d.__(t,e),r=(l=typeof n=="function")?null:n&&n.__k||e.__k,o=[],s=[],j(e,t=(!l&&n||e).__k=ce(W,null,[t]),r||E,E,e.ownerSVGElement!==void 0,!l&&n?[n]:r?null:e.firstChild?I.call(e.childNodes):null,o,!l&&n?n:r?r.__e:e.firstChild,l,s),re(o,t,s)}I=Z.slice,d={__e:function(t,e,n,l){for(var r,o,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,l||{}),s=r.__d),s)return r.__E=r}catch(f){t=f}throw t}},X=0,T.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof t=="function"&&(t=t(P({},n),this.props)),t&&P(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),V(this))},T.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),V(this))},T.prototype.render=W,C=[],Y=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B=function(t,e){return t.__v.__b-e.__v.__b},H.__r=0;const he="/assets/linkedin.svg",ve="/assets/github.svg";var ye=0;function b(t,e,n,l,r,o){var s,f,c={};for(f in e)f=="ref"?s=e[f]:c[f]=e[f];var g={type:t,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ye,__source:r,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(f in s)c[f]===void 0&&(c[f]=s[f]);return d.vnode&&d.vnode(g),g}const Q={[he]:"https://www.linkedin.com/in/shreerang-vaidya-7aa1a0269/",[ve]:"https://github.com/s-mv/"};class me extends T{constructor(n){super(n);$(this,"render",()=>b("div",{class:"nav",children:[b("div",{class:"nav-sec right",style:{fontWeight:"bold"},children:"SMV"}),b("div",{class:"nav-sec center",children:[b("div",{className:"nav-item",children:"HOME"}),b("div",{className:"nav-item",children:"PROJECTS"}),b("div",{className:"nav-item",children:"BLOG"})]}),b("div",{class:"nav-sec left",children:Object.keys(Q).map(n=>b("a",{target:"_blank",class:"nav-item",href:Q[n],children:b("img",{class:"nav-img",src:n})}))})]}))}}class ge extends T{constructor(n){super(n);$(this,"render",()=>b("div",{className:"main",children:[b(me,{}),b("div",{class:"content",children:"Hello, world!"})]}))}}de(b(ge,{}),document.getElementById("app"));
