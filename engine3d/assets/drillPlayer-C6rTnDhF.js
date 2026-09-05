var of=Object.defineProperty;var cf=(i,t,e)=>t in i?of(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Sn=(i,t,e)=>cf(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="171",lf=0,Qc=1,hf=2,Uu=1,Fu=2,Kn=3,ai=0,un=1,sn=2,vi=0,gs=1,us=2,tl=3,el=4,uf=5,Oi=100,df=101,ff=102,pf=103,mf=104,gf=200,_f=201,bf=202,xf=203,To=204,wo=205,vf=206,Mf=207,yf=208,Sf=209,Ef=210,Af=211,Tf=212,wf=213,Rf=214,Ro=0,Co=1,Po=2,vs=3,Io=4,Lo=5,Do=6,Uo=7,Ec=0,Cf=1,Pf=2,Mi=0,If=1,Lf=2,Df=3,Uf=4,Ff=5,Nf=6,Of=7,nl="attached",kf="detached",Nu=300,Ms=301,ys=302,Fo=303,No=304,Ta=306,Ss=1e3,_i=1001,pa=1002,rn=1003,Ou=1004,tr=1005,pn=1006,sa=1007,Zn=1008,oi=1009,ku=1010,Bu=1011,rr=1012,Ac=1013,Gi=1014,Pn=1015,dr=1016,Tc=1017,wc=1018,Es=1020,zu=35902,Hu=1021,Gu=1022,yn=1023,Vu=1024,Wu=1025,_s=1026,As=1027,Rc=1028,Cc=1029,Xu=1030,Pc=1031,Ic=1033,ra=33776,aa=33777,oa=33778,ca=33779,Oo=35840,ko=35841,Bo=35842,zo=35843,Ho=36196,Go=37492,Vo=37496,Wo=37808,Xo=37809,jo=37810,qo=37811,Ko=37812,Yo=37813,$o=37814,Jo=37815,Zo=37816,Qo=37817,tc=37818,ec=37819,nc=37820,ic=37821,la=36492,sc=36494,rc=36495,ju=36283,ac=36284,oc=36285,cc=36286,qu=2200,lc=2201,Bf=2202,ar=2300,or=2301,Da=2302,ds=2400,fs=2401,ma=2402,Lc=2500,zf=2501,Hf=0,Ku=1,hc=2,Gf=3200,Vf=3201,Dc=0,Wf=1,gi="",Le="srgb",an="srgb-linear",ga="linear",Ee="srgb",ji=7680,il=519,Xf=512,jf=513,qf=514,Yu=515,Kf=516,Yf=517,$f=518,Jf=519,uc=35044,sl="300 es",Qn=2e3,_a=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const nr=Math.PI/180,Ts=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function Uc(i,t){return(i%t+t)%t}function Zf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qf(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function tp(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function ep(i,t=1){return t-Math.abs(Uc(i,t*2)-t)}function np(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function sp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rp(i,t){return i+Math.random()*(t-i)}function ap(i){return i*(.5-Math.random())}function op(i){i!==void 0&&(rl=i);let t=rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cp(i){return i*nr}function lp(i){return i*Ts}function hp(i){return(i&i-1)===0&&i!==0}function up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pp={DEG2RAD:nr,RAD2DEG:Ts,generateUUID:In,clamp:ue,euclideanModulo:Uc,mapLinear:Zf,inverseLerp:Qf,lerp:ir,damp:tp,pingpong:ep,smoothstep:np,smootherstep:ip,randInt:sp,randFloat:rp,randFloatSpread:ap,seededRandom:op,degToRad:cp,radToDeg:lp,isPowerOfTwo:hp,ceilPowerOfTwo:up,floorPowerOfTwo:dp,setQuaternionFromProperEuler:fp,normalize:Se,denormalize:Rn};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,s,r,a,o,c,l){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],E=s[4],x=s[7],I=s[2],w=s[5],P=s[8];return r[0]=a*_+o*y+c*I,r[3]=a*m+o*E+c*w,r[6]=a*f+o*x+c*P,r[1]=l*_+u*y+h*I,r[4]=l*m+u*E+h*w,r[7]=l*f+u*x+h*P,r[2]=d*_+p*y+g*I,r[5]=d*m+p*E+g*w,r[8]=d*f+p*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new ne;function $u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mp(){const i=cr("canvas");return i.style.display="block",i}const al={};function hs(i){i in al||(al[i]=!0,console.warn(i))}function gp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function _p(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ol=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cl=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xp(){const i={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ee&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ee&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?ga:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[an]:{primaries:t,whitePoint:n,transfer:ga,toXYZ:ol,fromXYZ:cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:ol,fromXYZ:cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}const ge=xp();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class vp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=cr("canvas")),qi.width=t.width,qi.height=t.height;const n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mp=0;class Ju{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fa(s[a].image)):r.push(Fa(s[a]))}else r=Fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yp=0;class Oe extends Wi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=_i,s=_i,r=pn,a=Zn,o=yn,c=oi,l=Oe.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=In(),this.name="",this.source=new Ju(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ss:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ss:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Nu;Oe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,x=(p+1)/2,I=(f+1)/2,w=(u+d)/4,P=(h+_)/4,U=(g+m)/4;return E>x&&E>I?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=P/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=U/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sp extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ju(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Sp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-o;const f=c*d+l*p+u*g+h*_,y=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const I=Math.sqrt(E),w=Math.atan2(I,f*y);m=Math.sin(m*w)/I,o=Math.sin(o*w)/I}const x=o*y;if(c=c*m+d*x,l=l*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-o*p,t[e+2]=l*g+u*p+o*d-c*h,t[e+3]=u*g-o*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new k,ll=new Ln;class mn{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),br.subVectors(this.max,ks),Ki.subVectors(t.a,ks),Yi.subVectors(t.b,ks),$i.subVectors(t.c,ks),ci.subVectors(Yi,Ki),li.subVectors($i,Yi),Ei.subVectors(Ki,$i);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ei.z,Ei.y,ci.z,0,-ci.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!Oa(e,Ki,Yi,$i,br)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Ki,Yi,$i,br))?!1:(xr.crossVectors(ci,li),e=[xr.x,xr.y,xr.z],Oa(e,Ki,Yi,$i,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,_r=new mn,Ki=new k,Yi=new k,$i=new k,ci=new k,li=new k,Ei=new k,ks=new k,br=new k,xr=new k,Ai=new k;function Oa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);const o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),u=n.dot(Ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ap=new mn,Bs=new k,ka=new k;class Bn{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(ka)),this.expandByPoint(Bs.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new k,Ba=new k,vr=new k,hi=new k,za=new k,Mr=new k,Ha=new k;class wa{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ba.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot(vr),o=hi.dot(this.direction),c=-hi.dot(vr),l=hi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ba).addScaledVector(vr,d),p}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){za.subVectors(e,t),Mr.subVectors(n,t),Ha.crossVectors(za,Mr);let a=this.direction.dot(Ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,t);const c=o*this.direction.dot(Mr.crossVectors(hi,Mr));if(c<0)return null;const l=o*this.direction.dot(za.cross(hi));if(l<0||c+l>a)return null;const u=-o*hi.dot(Ha);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,a,o,c,l,u,h,d,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,d,p,g,_,m)}set(t,e,n,s,r,a,o,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tp,t,wp)}lookAt(t,e,n){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ui.crossVectors(n,dn),ui.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ui.crossVectors(n,dn)),ui.normalize(),yr.crossVectors(dn,ui),s[0]=ui.x,s[4]=yr.x,s[8]=dn.x,s[1]=ui.y,s[5]=yr.y,s[9]=dn.y,s[2]=ui.z,s[6]=yr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],E=n[7],x=n[11],I=n[15],w=s[0],P=s[4],U=s[8],A=s[12],M=s[1],L=s[5],q=s[9],j=s[13],$=s[2],W=s[6],G=s[10],J=s[14],K=s[3],st=s[7],rt=s[11],yt=s[15];return r[0]=a*w+o*M+c*$+l*K,r[4]=a*P+o*L+c*W+l*st,r[8]=a*U+o*q+c*G+l*rt,r[12]=a*A+o*j+c*J+l*yt,r[1]=u*w+h*M+d*$+p*K,r[5]=u*P+h*L+d*W+p*st,r[9]=u*U+h*q+d*G+p*rt,r[13]=u*A+h*j+d*J+p*yt,r[2]=g*w+_*M+m*$+f*K,r[6]=g*P+_*L+m*W+f*st,r[10]=g*U+_*q+m*G+f*rt,r[14]=g*A+_*j+m*J+f*yt,r[3]=y*w+E*M+x*$+I*K,r[7]=y*P+E*L+x*W+I*st,r[11]=y*U+E*q+x*G+I*rt,r[15]=y*A+E*j+x*J+I*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+_*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+m*(+e*l*h-e*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-s*o*u-e*c*h+e*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=h*m*l-_*d*l+_*c*p-o*m*p-h*c*f+o*d*f,E=g*d*l-u*m*l-g*c*p+a*m*p+u*c*f-a*d*f,x=u*_*l-g*h*l+g*o*p-a*_*p-u*o*f+a*h*f,I=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,w=e*y+n*E+s*x+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return t[0]=y*P,t[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*f-n*d*f)*P,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*f+n*c*f)*P,t[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*P,t[4]=E*P,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*P,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*f-e*c*f)*P,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*p+e*c*p)*P,t[8]=x*P,t[9]=(g*h*r-u*_*r-g*n*p+e*_*p+u*n*f-e*h*f)*P,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*P,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*p-e*o*p)*P,t[12]=I*P,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*m+e*h*m)*P,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*P,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*d+e*o*d)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,g=r*h,_=a*u,m=a*h,f=o*h,y=c*l,E=c*u,x=c*h,I=n.x,w=n.y,P=n.z;return s[0]=(1-(_+f))*I,s[1]=(p+x)*I,s[2]=(g-E)*I,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(d+f))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+E)*P,s[9]=(m-y)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);const l=1/r,u=1/a,h=1/o;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,e.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Qn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===Qn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===_a)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Qn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*l,p=(n+s)*u;let g,_;if(o===Qn)g=(a+r)*h,_=-2*h;else if(o===_a)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new k,An=new ie,Tp=new k(0,0,0),wp=new k(1,1,1),ui=new k,yr=new k,dn=new k,hl=new ie,ul=new Ln;class Fn{constructor(t=0,e=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rp=0;const dl=new k,Zi=new Ln,Wn=new ie,Sr=new k,zs=new k,Cp=new k,Pp=new Ln,fl=new k(1,0,0),pl=new k(0,1,0),ml=new k(0,0,1),gl={type:"added"},Ip={type:"removed"},Qi={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Pe extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new k,e=new Fn,n=new Ln,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new ne}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return dl.copy(t).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(zs,Sr,this.up):Wn.lookAt(Sr,zs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gl),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ip),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gl),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Pp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new k(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new k,Xn=new k,Va=new k,jn=new k,ts=new k,es=new k,_l=new k,Wa=new k,Xa=new k,ja=new k,qa=new xe,Ka=new xe,Ya=new xe;class Cn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Xn.subVectors(n,e),Va.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(Xn),c=Tn.dot(Va),l=Xn.dot(Xn),u=Xn.dot(Va),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return qa.setScalar(0),Ka.setScalar(0),Ya.setScalar(0),qa.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qa,r.x),a.addScaledVector(Ka,r.y),a.addScaledVector(Ya,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Xn.subVectors(t,e),Tn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Tn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,n),es.subVectors(r,n),Wa.subVectors(t,n);const c=ts.dot(Wa),l=es.dot(Wa);if(c<=0&&l<=0)return e.copy(n);Xa.subVectors(t,s);const u=ts.dot(Xa),h=es.dot(Xa);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(ts,a);ja.subVectors(t,r);const p=ts.dot(ja),g=es.dot(ja);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(es,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return _l.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(_l,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Er={h:0,s:0,l:0};function $a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Uc(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$a(a,r,t+1/3),this.g=$a(a,r,t),this.b=$a(a,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ge.fromWorkingColorSpace(Ke.copy(this),t),Math.round(ue(Ke.r*255,0,255))*65536+Math.round(ue(Ke.g*255,0,255))*256+Math.round(ue(Ke.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Le){ge.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Er);const n=ir(di.h,Er.h,e),s=ir(di.s,Er.s,e),r=ir(di.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new qt;qt.NAMES=td;let Lp=0;class Dn extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=In(),this.name="",this.type="Material",this.blending=gs,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=wo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==To&&(n.blendSrc=this.blendSrc),this.blendDst!==wo&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $e extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new k,Ar=new $t;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}}class ed extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nd extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class We extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dp=0;const _n=new ie,Ja=new Pe,ns=new k,fn=new mn,Hs=new mn,Ge=new k;class Je extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($u(t)?nd:ed)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(fn.min,Hs.min),fn.expandByPoint(Ge),Ge.addVectors(fn.max,Hs.max),fn.expandByPoint(Ge)):(fn.expandByPoint(Hs.min),fn.expandByPoint(Hs.max))}fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ge.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(t,l),Ge.add(ns)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new k,c[U]=new k;const l=new k,u=new k,h=new k,d=new $t,p=new $t,g=new $t,_=new k,m=new k;function f(U,A,M){l.fromBufferAttribute(n,U),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[U].add(_),o[A].add(_),o[M].add(_),c[U].add(m),c[A].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let U=0,A=y.length;U<A;++U){const M=y[U],L=M.start,q=M.count;for(let j=L,$=L+q;j<$;j+=3)f(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const E=new k,x=new k,I=new k,w=new k;function P(U){I.fromBufferAttribute(s,U),w.copy(I);const A=o[U];E.copy(A),E.sub(I.multiplyScalar(I.dot(A))).normalize(),x.crossVectors(w,A);const L=x.dot(c[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,L)}for(let U=0,A=y.length;U<A;++U){const M=y[U],L=M.start,q=M.count;for(let j=L,$=L+q;j<$;j+=3)P(t.getX(j+0)),P(t.getX(j+1)),P(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,u=new k,h=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Ce(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new ie,Ti=new wa,Tr=new Bn,xl=new k,wr=new k,Rr=new k,Cr=new k,Za=new k,Pr=new k,vl=new k,Ir=new k;class Te extends Pe{constructor(t=new Je,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Za.fromBufferAttribute(h,t),a?Pr.addScaledVector(Za,u):Pr.addScaledVector(Za.sub(e),u))}e.add(Pr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Tr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Tr,xl)===null||Ti.origin.distanceToSquared(xl)>(t.far-t.near)**2))&&(bl.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(bl),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,I=E;x<I;x+=3){const w=o.getX(x),P=o.getX(x+1),U=o.getX(x+2);s=Lr(this,f,t,n,l,u,h,w,P,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=Lr(this,a,t,n,l,u,h,y,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,I=E;x<I;x+=3){const w=x,P=x+1,U=x+2;s=Lr(this,f,t,n,l,u,h,w,P,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,E=m+1,x=m+2;s=Lr(this,a,t,n,l,u,h,y,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Up(i,t,e,n,s,r,a,o){let c;if(t.side===un?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ai,o),c===null)return null;Ir.copy(o),Ir.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ir);return l<e.near||l>e.far?null:{distance:l,point:Ir.clone(),object:i}}function Lr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,wr),i.getVertexPosition(c,Rr),i.getVertexPosition(l,Cr);const u=Up(i,t,e,n,wr,Rr,Cr,vl);if(u){const h=new k;Cn.getBarycoord(vl,wr,Rr,Cr,h),s&&(u.uv=Cn.getInterpolatedAttribute(s,o,c,l,h,new $t)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,o,c,l,h,new $t)),a&&(u.normal=Cn.getInterpolatedAttribute(a,o,c,l,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new k,materialIndex:0};Cn.getNormal(wr,Rr,Cr,d.normal),u.face=d,u.barycoord=h}return u}class Ls extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2));function g(_,m,f,y,E,x,I,w,P,U,A){const M=x/P,L=I/U,q=x/2,j=I/2,$=w/2,W=P+1,G=U+1;let J=0,K=0;const st=new k;for(let rt=0;rt<G;rt++){const yt=rt*L-j;for(let Ft=0;Ft<W;Ft++){const zt=Ft*M-q;st[_]=zt*y,st[m]=yt*E,st[f]=$,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[f]=w>0?1:-1,u.push(st.x,st.y,st.z),h.push(Ft/P),h.push(1-rt/U),J+=1}}for(let rt=0;rt<U;rt++)for(let yt=0;yt<P;yt++){const Ft=d+yt+W*rt,zt=d+yt+W*(rt+1),Z=d+(yt+1)+W*(rt+1),at=d+(yt+1)+W*rt;c.push(Ft,zt,at),c.push(zt,Z,at),K+=6}o.addGroup(p,K,A),p+=K,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=ws(i[e]);for(const s in n)t[s]=n[s]}return t}function Fp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function id(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Np={clone:ws,merge:en};var Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sd extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new k,Ml=new $t,yl=new $t;class nn extends sd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Ml,yl),e.subVectors(yl,Ml)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class Bp extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new nn(is,ss,t,e);r.layers=this.layers,this.add(r);const a=new nn(is,ss,t,e);a.layers=this.layers,this.add(a);const o=new nn(is,ss,t,e);o.layers=this.layers,this.add(o);const c=new nn(is,ss,t,e);c.layers=this.layers,this.add(c);const l=new nn(is,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rd extends Oe{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zp extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ls(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:vi});r.uniforms.tEquirect.value=e;const a=new Te(s,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=pn),new Bp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Hp extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new k;class Fc{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sl=new k,El=new xe,Al=new xe,Vp=new k,Tl=new ie,Dr=new k,Qa=new Bn,wl=new ie,to=new wa;class Wp extends Te{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nl,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(s),t.ray.intersectsSphere(Qa)!==!1&&(wl.copy(s).invert(),to.copy(t.ray).applyMatrix4(wl),!(this.boundingBox!==null&&to.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,to)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;El.fromBufferAttribute(s.attributes.skinIndex,t),Al.fromBufferAttribute(s.attributes.skinWeight,t),Sl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Al.getComponent(r);if(a!==0){const o=El.getComponent(r);Tl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Vp.copy(Sl).applyMatrix4(Tl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class ad extends Pe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class od extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=rn,u=rn,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rl=new ie,Xp=new ie;class Nc{constructor(t=[],e=[]){this.uuid=In(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Xp;Rl.multiplyMatrices(o,e[r]),Rl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Nc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new od(e,t,t,yn,Pn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ad),this.bones.push(a),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class dc extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const rs=new ie,Cl=new ie,Ur=[],Pl=new mn,jp=new ie,Gs=new Te,Vs=new Bn;class qp extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Pl.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(Pl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Vs.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),t.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rs),Cl.multiplyMatrices(n,rs),Gs.matrixWorld=Cl,Gs.raycast(t,Ur);for(let a=0,o=Ur.length;a<o;a++){const c=Ur[a];c.instanceId=r,c.object=this,e.push(c)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new od(new Float32Array(s*this.count),s,this.count,Rc,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const eo=new k,Kp=new k,Yp=new ne;class Ui{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=eo.subVectors(n,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yp.getNormalMatrix(t),s=this.coplanarPoint(eo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Bn,Fr=new k;class Oc{constructor(t=new Ui,e=new Ui,n=new Ui,s=new Ui,r=new Ui,a=new Ui){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],y=s[13],E=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-p,x-f).normalize(),n[1].setComponents(c+r,d+l,m+p,x+f).normalize(),n[2].setComponents(c+a,d+u,m+g,x+y).normalize(),n[3].setComponents(c-a,d-u,m-g,x-y).normalize(),n[4].setComponents(c-o,d-h,m-_,x-E).normalize(),e===Qn)n[5].setComponents(c+o,d+h,m+_,x+E).normalize();else if(e===_a)n[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cd extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ba=new k,xa=new k,Il=new ie,Ws=new wa,Nr=new Bn,no=new k,Ll=new k;class kc extends Pe{constructor(t=new Je,e=new cd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ba.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ba.distanceTo(xa);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;Il.copy(s).invert(),Ws.copy(t.ray).applyMatrix4(Il);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=u.getX(_),y=u.getX(_+1),E=Or(this,t,Ws,c,f,y);E&&e.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Or(this,t,Ws,c,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=Or(this,t,Ws,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Or(this,t,Ws,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Or(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(ba.fromBufferAttribute(a,s),xa.fromBufferAttribute(a,r),e.distanceSqToSegment(ba,xa,no,Ll)>n)return;no.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(no);if(!(c<t.near||c>t.far))return{distance:c,point:Ll.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Dl=new k,Ul=new k;class $p extends kc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Dl.fromBufferAttribute(e,s),Ul.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Dl.distanceTo(Ul);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jp extends kc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ld extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fl=new ie,fc=new wa,kr=new Bn,Br=new k;class Zp extends Pe{constructor(t=new Je,e=new ld){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Fl.copy(s).invert(),fc.copy(t.ray).applyMatrix4(Fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Br.fromBufferAttribute(h,m),Nl(Br,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Br.fromBufferAttribute(h,g),Nl(Br,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nl(i,t,e,n,s,r,a){const o=fc.distanceSqToPoint(i);if(o<e){const c=new k;fc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ti extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Xi extends Oe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hd extends Oe{constructor(t,e,n,s,r,a,o,c,l,u=_s){if(u!==_s&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_s&&(n=Gi),n===void 0&&u===As&&(n=Es),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bc extends Je{constructor(t=[new $t(0,-.5),new $t(.5,0),new $t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ue(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,h=new k,d=new $t,p=new k,g=new k,_=new k;let m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=e;y++){const E=n+y*u*s,x=Math.sin(E),I=Math.cos(E);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*x,h.y=t[w].y,h.z=t[w].x*I,a.push(h.x,h.y,h.z),d.x=y/e,d.y=w/(t.length-1),o.push(d.x,d.y);const P=c[3*w+0]*x,U=c[3*w+1],A=c[3*w+0]*I;l.push(P,U,A)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){const x=E+y*t.length,I=x,w=x+t.length,P=x+t.length+1,U=x+1;r.push(I,w,U),r.push(P,U,w)}this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("uv",new We(o,2)),this.setAttribute("normal",new We(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.points,t.segments,t.phiStart,t.phiLength)}}class zc extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new k,u=new $t;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ii extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const y=f*d-a;for(let E=0;E<l;E++){const x=E*h-r;g.push(x,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const E=y+l*f,x=y+l*(f+1),I=y+1+l*(f+1),w=y+1+l*f;p.push(E,x,w),p.push(x,I,w)}this.setIndex(p),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hc extends Je{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,p=new k,g=new $t;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const y=f+m,E=y,x=y+n+1,I=y+n+2,w=y+1;o.push(E,x,w),o.push(x,I,w)}}this.setIndex(o),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fr extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zn extends fr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qp extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tm extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class em extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function zr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function im(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Ol(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)s[a++]=i[o+c]}return s}function ud(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}class pr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sm extends pr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ds,endingEnd:ds}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fs:r=t,o=2*e-n;break;case ma:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fs:a=t,c=2*n-e;break;case ma:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let I=0;I!==o;++I)r[I]=f*a[u+I]+y*a[l+I]+E*a[c+I]+x*a[h+I];return r}}class dd extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class rm extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Hn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case or:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&nm(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[d+g]||_!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=or;class Ds extends Hn{constructor(t,e,n){super(t,e,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ar;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class fd extends Hn{}fd.prototype.ValueTypeName="color";class Rs extends Hn{}Rs.prototype.ValueTypeName="number";class am extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e);let l=t*o;for(let u=l+o;l!==u;l+=4)Ln.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Cs extends Hn{InterpolantFactoryMethodLinear(t){return new am(this.times,this.values,this.getValueSize(),t)}}Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Hn{constructor(t,e,n){super(t,e,n)}}Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=ar;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends Hn{}Ps.prototype.ValueTypeName="vector";class pc{constructor(t="",e=-1,n=[],s=Lc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(cm(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=im(c);c=Ol(c,1,u),l=Ol(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Rs(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];ud(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let y=0;y!==d[g].morphTargets.length;++y){const E=d[g];m.push(E.time),f.push(E.morphTarget===_?1:0)}s.push(new Rs(".morphTargetInfluence["+_+"]",m,f))}c=p.length*a}else{const p=".bones["+e[h].name+"]";n(Ps,p+".position",d,"pos",s),n(Cs,p+".quaternion",d,"rot",s),n(Ps,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function om(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Ps;case"color":return fd;case"quaternion":return Cs;case"bool":case"boolean":return Ds;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function cm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=om(i.type);if(i.times===void 0){const e=[],n=[];ud(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lm{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const hm=new lm;class Fs{constructor(t){this.manager=t!==void 0?t:hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class um extends Error{constructor(t,e){super(t),this.response=e}}class pd extends Fs{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=bi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:s});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=qn[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){y();function y(){h.read().then(({done:E,value:x})=>{if(E)f.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,P=u.length;w<P;w++){const U=u[w];U.onProgress&&U.onProgress(I)}f.enqueue(x),y()}},E=>{f.error(E)})}}});return new Response(m)}else throw new um(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{bi.add(t,l);const u=qn[t];delete qn[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=qn[t];if(u===void 0)throw this.manager.itemError(t),l;delete qn[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class dm extends Fs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=bi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=cr("img");function c(){u(),bi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class fm extends Fs{constructor(t){super(t)}load(t,e,n,s){const r=new Oe,a=new dm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ra extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pm extends Ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const io=new ie,kl=new k,Bl=new k;class Gc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bl),e.updateMatrixWorld(),io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mm extends Gc{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ts*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class gm extends Ra{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new mm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const zl=new ie,Xs=new k,so=new k;class _m extends Gc{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Xs),so.copy(n.position),so.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(so),n.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl)}}class bm extends Ra{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _m}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vc extends sd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xm extends Gc{constructor(){super(new Vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class md extends Ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new xm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class vm extends Fs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=bi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),bi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});bi.add(t,c),r.manager.itemStart(t)}}class Mm extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ym{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){Ln.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const a=this._workIndex*r;Ln.multiplyQuaternionsFlat(t,a,t,e,t,n),Ln.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*s}}}const Wc="\\[\\]\\.:\\/",Sm=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",Em="[^"+Wc.replace("\\.","")+"]",Am=/((?:WC+[\/:])*)/.source.replace("WC",Xc),Tm=/(WCOD+)?/.source.replace("WCOD",Em),wm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),Rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),Cm=new RegExp("^"+Am+Tm+wm+Rm+"$"),Pm=["material","materials","bones","map"];class Im{constructor(t,e,n){const s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ve{constructor(t,e,n){this.path=e,this.parsedPath=n||ve.parseTrackName(e),this.node=ve.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ve.Composite(t,e,n):new ve(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sm,"")}static parseTrackName(t){const e=Cm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ve.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[s];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ve.Composite=Im;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Lm{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:ds,endingEnd:ds};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case zf:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Lc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const a=n===Bf;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===qu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=fs,s.endingEnd=fs):(t?s.endingStart=this.zeroSlopeAtStart?fs:ds:s.endingStart=ma,e?s.endingEnd=this.zeroSlopeAtEnd?fs:ds:s.endingEnd=ma)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=n,this}}const Dm=new Float32Array(1);class Um extends Wi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],p=d.name;let g=u[p];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;g=new ym(ve.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new dd(new Float32Array(2),new Float32Array(2),1,Dm),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?pc.findByName(s,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Lc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new Lm(this,a,e,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?pc.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function Hl(i,t,e,n){const s=Fm(n);switch(e){case Hu:return i*t;case Vu:return i*t;case Wu:return i*t*2;case Rc:return i*t/s.components*s.byteLength;case Cc:return i*t/s.components*s.byteLength;case Xu:return i*t*2/s.components*s.byteLength;case Pc:return i*t*2/s.components*s.byteLength;case Gu:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Ic:return i*t*4/s.components*s.byteLength;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:case zo:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case Bo:return Math.max(i,8)*Math.max(t,8)/2;case Ho:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case la:case sc:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ju:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fm(i){switch(i){case oi:case ku:return{byteLength:1,components:1};case rr:case Bu:case dr:return{byteLength:2,components:1};case Tc:case wc:return{byteLength:2,components:4};case Gi:case Ac:case Pn:return{byteLength:4,components:1};case zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nm(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$m=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ag=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ug=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ib=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ob=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:Om,alphahash_pars_fragment:km,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:Hm,alphatest_pars_fragment:Gm,aomap_fragment:Vm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:jm,begin_vertex:qm,beginnormal_vertex:Km,bsdfs:Ym,iridescence_fragment:$m,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:tg,clipping_planes_vertex:eg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:ag,cube_uv_reflection_fragment:og,defaultnormal_vertex:cg,displacementmap_pars_vertex:lg,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:dg,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:_g,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Cg,envmap_vertex:xg,fog_vertex:vg,fog_pars_vertex:Mg,fog_fragment:yg,fog_pars_fragment:Sg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:Ag,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:wg,lights_pars_begin:Rg,lights_toon_fragment:Pg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Lg,lights_phong_pars_fragment:Dg,lights_physical_fragment:Ug,lights_physical_pars_fragment:Fg,lights_fragment_begin:Ng,lights_fragment_maps:Og,lights_fragment_end:kg,logdepthbuf_fragment:Bg,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:Gg,map_fragment:Vg,map_pars_fragment:Wg,map_particle_fragment:Xg,map_particle_pars_fragment:jg,metalnessmap_fragment:qg,metalnessmap_pars_fragment:Kg,morphinstance_vertex:Yg,morphcolor_vertex:$g,morphnormal_vertex:Jg,morphtarget_pars_vertex:Zg,morphtarget_vertex:Qg,normal_fragment_begin:t_,normal_fragment_maps:e_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:s_,normalmap_pars_fragment:r_,clearcoat_normal_fragment_begin:a_,clearcoat_normal_fragment_maps:o_,clearcoat_pars_fragment:c_,iridescence_pars_fragment:l_,opaque_fragment:h_,packing:u_,premultiplied_alpha_fragment:d_,project_vertex:f_,dithering_fragment:p_,dithering_pars_fragment:m_,roughnessmap_fragment:g_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:b_,shadowmap_pars_vertex:x_,shadowmap_vertex:v_,shadowmask_pars_fragment:M_,skinbase_vertex:y_,skinning_pars_vertex:S_,skinning_vertex:E_,skinnormal_vertex:A_,specularmap_fragment:T_,specularmap_pars_fragment:w_,tonemapping_fragment:R_,tonemapping_pars_fragment:C_,transmission_fragment:P_,transmission_pars_fragment:I_,uv_pars_fragment:L_,uv_pars_vertex:D_,uv_vertex:U_,worldpos_vertex:F_,background_vert:N_,background_frag:O_,backgroundCube_vert:k_,backgroundCube_frag:B_,cube_vert:z_,cube_frag:H_,depth_vert:G_,depth_frag:V_,distanceRGBA_vert:W_,distanceRGBA_frag:X_,equirect_vert:j_,equirect_frag:q_,linedashed_vert:K_,linedashed_frag:Y_,meshbasic_vert:$_,meshbasic_frag:J_,meshlambert_vert:Z_,meshlambert_frag:Q_,meshmatcap_vert:tb,meshmatcap_frag:eb,meshnormal_vert:nb,meshnormal_frag:ib,meshphong_vert:sb,meshphong_frag:rb,meshphysical_vert:ab,meshphysical_frag:ob,meshtoon_vert:cb,meshtoon_frag:lb,points_vert:hb,points_frag:ub,shadow_vert:db,shadow_frag:fb,sprite_vert:pb,sprite_frag:mb},Rt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},kn={basic:{uniforms:en([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:en([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:en([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:en([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:en([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:en([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:en([Rt.points,Rt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:en([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:en([Rt.common,Rt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:en([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:en([Rt.sprite,Rt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:en([Rt.common,Rt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:en([Rt.lights,Rt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};kn.physical={uniforms:en([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const Hr={r:0,b:0,g:0},Ri=new Fn,gb=new ie;function _b(i,t,e,n,s,r,a){const o=new qt(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const I=g(E);I===null?f(o,c):I&&I.isColor&&(f(I,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===Ta)?(u===void 0&&(u=new Te(new Ls(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:ws(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ri.copy(x.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gb.makeRotationFromEuler(Ri)),u.material.toneMapped=ge.getTransfer(I.colorSpace)!==Ee,(h!==I||d!==I.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Te(new ii(2,2),new yi({name:"BackgroundMaterial",uniforms:ws(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ge.getTransfer(I.colorSpace)!==Ee,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,d=I.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,x){E.getRGB(Hr,id(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,x,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:_,addToRenderList:m,dispose:y}}function bb(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,L,q,j,$){let W=!1;const G=h(j,q,L);r!==G&&(r=G,l(r.object)),W=p(M,j,q,$),W&&g(M,j,q,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(M,L,q,j),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,L,q){const j=q.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let W=$[L.id];W===void 0&&(W={},$[L.id]=W);let G=W[j];return G===void 0&&(G=d(c()),W[j]=G),G}function d(M){const L=[],q=[],j=[];for(let $=0;$<e;$++)L[$]=0,q[$]=0,j[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:j,object:M,attributes:{},index:null}}function p(M,L,q,j){const $=r.attributes,W=L.attributes;let G=0;const J=q.getAttributes();for(const K in J)if(J[K].location>=0){const rt=$[K];let yt=W[K];if(yt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),rt===void 0||rt.attribute!==yt||yt&&rt.data!==yt.data)return!0;G++}return r.attributesNum!==G||r.index!==j}function g(M,L,q,j){const $={},W=L.attributes;let G=0;const J=q.getAttributes();for(const K in J)if(J[K].location>=0){let rt=W[K];rt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));const yt={};yt.attribute=rt,rt&&rt.data&&(yt.data=rt.data),$[K]=yt,G++}r.attributes=$,r.attributesNum=G,r.index=j}function _(){const M=r.newAttributes;for(let L=0,q=M.length;L<q;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const q=r.newAttributes,j=r.enabledAttributes,$=r.attributeDivisors;q[M]=1,j[M]===0&&(i.enableVertexAttribArray(M),j[M]=1),$[M]!==L&&(i.vertexAttribDivisor(M,L),$[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let q=0,j=L.length;q<j;q++)L[q]!==M[q]&&(i.disableVertexAttribArray(q),L[q]=0)}function E(M,L,q,j,$,W,G){G===!0?i.vertexAttribIPointer(M,L,q,$,W):i.vertexAttribPointer(M,L,q,j,$,W)}function x(M,L,q,j){_();const $=j.attributes,W=q.getAttributes(),G=L.defaultAttributeValues;for(const J in W){const K=W[J];if(K.location>=0){let st=$[J];if(st===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const rt=st.normalized,yt=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;const zt=Ft.buffer,Z=Ft.type,at=Ft.bytesPerElement,Mt=Z===i.INT||Z===i.UNSIGNED_INT||st.gpuType===Ac;if(st.isInterleavedBufferAttribute){const dt=st.data,kt=dt.stride,bt=st.offset;if(dt.isInstancedInterleavedBuffer){for(let pt=0;pt<K.locationSize;pt++)f(K.location+pt,dt.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let pt=0;pt<K.locationSize;pt++)m(K.location+pt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let pt=0;pt<K.locationSize;pt++)E(K.location+pt,yt/K.locationSize,Z,rt,kt*at,(bt+yt/K.locationSize*pt)*at,Mt)}else{if(st.isInstancedBufferAttribute){for(let dt=0;dt<K.locationSize;dt++)f(K.location+dt,st.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let dt=0;dt<K.locationSize;dt++)m(K.location+dt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let dt=0;dt<K.locationSize;dt++)E(K.location+dt,yt/K.locationSize,Z,rt,yt*at,yt/K.locationSize*dt*at,Mt)}}else if(G!==void 0){const rt=G[J];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(K.location,rt);break;case 3:i.vertexAttrib3fv(K.location,rt);break;case 4:i.vertexAttrib4fv(K.location,rt);break;default:i.vertexAttrib1fv(K.location,rt)}}}}y()}function I(){U();for(const M in n){const L=n[M];for(const q in L){const j=L[q];for(const $ in j)u(j[$].object),delete j[$];delete L[q]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const q in L){const j=L[q];for(const $ in j)u(j[$].object),delete j[$];delete L[q]}delete n[M.id]}function P(M){for(const L in n){const q=n[L];if(q[M.id]===void 0)continue;const j=q[M.id];for(const $ in j)u(j[$].object),delete j[$];delete q[M.id]}}function U(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function xb(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function vb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==yn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==oi&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pn&&!U)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:I,maxSamples:w}}function Mb(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ui,o=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,E=y*4;let x=f.clippingState||null;c.value=x,x=u(g,d,E,p);for(let I=0;I!==E;++I)x[I]=e[I];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,x=p;E!==_;++E,x+=4)a.copy(h[E]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function yb(i){let t=new WeakMap;function e(a,o){return o===Fo?a.mapping=Ms:o===No&&(a.mapping=ys),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fo||o===No)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new zp(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ps=4,Gl=[.125,.215,.35,.446,.526,.582],ki=20,ro=new Vc,Vl=new qt;let ao=null,oo=0,co=0,lo=!1;const Fi=(1+Math.sqrt(5))/2,as=1/Fi,Wl=[new k(-Fi,as,0),new k(Fi,as,0),new k(-as,0,Fi),new k(as,0,Fi),new k(0,Fi,-as),new k(0,Fi,as),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,oo,co),this._renderer.xr.enabled=lo,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:dr,format:yn,colorSpace:an,depthBuffer:!1},s=jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sb(r)),this._blurMaterial=Eb(r,t,e)}return s}_compileMaterial(t){const e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,n,s){const o=new nn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Vl),u.toneMapping=Mi,u.autoClear=!1;const p=new $e({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Te(new Ls,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Vl),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const E=this._cubeSize;Gr(s,y*E,f>2?E:0,E,E),u.setRenderTarget(s),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ms||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Gr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ro)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wl[(s-r-1)%Wl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Te(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const f=[];let y=0;for(let P=0;P<ki;++P){const U=P/_,A=Math.exp(-U*U/2);f.push(A),P===0?y+=A:P<m&&(y+=2*A)}for(let P=0;P<f.length;P++)f[P]=f[P]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const x=this._sizeLods[s],I=3*x*(s>E-ps?s-E+ps:0),w=4*(this._cubeSize-x);Gr(e,I,w,3*x,2*x),c.setRenderTarget(e),c.render(h,ro)}}function Sb(i){const t=[],e=[],n=[];let s=i;const r=i-ps+1+Gl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ps?c=Gl[a-i+ps-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),E=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,U=w>2?0:-1,A=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];y.set(A,_*g*w),E.set(d,m*g*w);const M=[w,w,w,w,w,w];x.set(M,f*g*w)}const I=new Je;I.setAttribute("position",new Ce(y,_)),I.setAttribute("uv",new Ce(E,m)),I.setAttribute("faceIndex",new Ce(x,f)),t.push(I),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jl(i,t,e){const n=new Vi(i,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Eb(i,t,e){const n=new Float32Array(ki),s=new k(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ql(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Kl(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ab(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Fo||c===No,u=c===Ms||c===ys;if(l||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Xl(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Xl(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Tb(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&hs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wb(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let E=0,x=y.length;E<x;E+=3){const I=y[E+0],w=y[E+1],P=y[E+2];d.push(I,w,w,P,P,I)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const I=E+0,w=E+1,P=E+2;d.push(I,w,w,P,P,I)}}else return;const m=new($u(d)?nd:ed)(d,1);m.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Rb(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cb(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pb(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let A=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let x=o.attributes.position.count*E,I=1;x>t.maxTextureSize&&(I=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const w=new Float32Array(x*I*4*h),P=new Zu(w,x,I,h);P.type=Pn,P.needsUpdate=!0;const U=E*4;for(let M=0;M<h;M++){const L=m[M],q=f[M],j=y[M],$=x*I*4*M;for(let W=0;W<L.count;W++){const G=W*U;p===!0&&(s.fromBufferAttribute(L,W),w[$+G+0]=s.x,w[$+G+1]=s.y,w[$+G+2]=s.z,w[$+G+3]=0),g===!0&&(s.fromBufferAttribute(q,W),w[$+G+4]=s.x,w[$+G+5]=s.y,w[$+G+6]=s.z,w[$+G+7]=0),_===!0&&(s.fromBufferAttribute(j,W),w[$+G+8]=s.x,w[$+G+9]=s.y,w[$+G+10]=s.z,w[$+G+11]=j.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new $t(x,I)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ib(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const _d=new Oe,Yl=new hd(1,1),bd=new Zu,xd=new Ep,vd=new rd,$l=[],Jl=[],Zl=new Float32Array(16),Ql=new Float32Array(9),th=new Float32Array(4);function Ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=$l[s];if(r===void 0&&(r=new Float32Array(s),$l[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ca(i,t){let e=Jl[t];e===void 0&&(e=new Int32Array(t),Jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Db(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function Ub(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Fb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Nb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;th.set(n),i.uniformMatrix2fv(this.addr,!1,th),Be(e,n)}}function Ob(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Ql.set(n),i.uniformMatrix3fv(this.addr,!1,Ql),Be(e,n)}}function kb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Zl.set(n),i.uniformMatrix4fv(this.addr,!1,Zl),Be(e,n)}}function Bb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Hb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Gb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Vb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function Xb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function jb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function qb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=Yu,r=Yl):r=_d,e.setTexture2D(t||r,s)}function Kb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xd,s)}function Yb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vd,s)}function $b(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bd,s)}function Jb(i){switch(i){case 5126:return Lb;case 35664:return Db;case 35665:return Ub;case 35666:return Fb;case 35674:return Nb;case 35675:return Ob;case 35676:return kb;case 5124:case 35670:return Bb;case 35667:case 35671:return zb;case 35668:case 35672:return Hb;case 35669:case 35673:return Gb;case 5125:return Vb;case 36294:return Wb;case 36295:return Xb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return $b}}function Zb(i,t){i.uniform1fv(this.addr,t)}function Qb(i,t){const e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function t0(i,t){const e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function e0(i,t){const e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function n0(i,t){const e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function i0(i,t){const e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function s0(i,t){const e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r0(i,t){i.uniform1iv(this.addr,t)}function a0(i,t){i.uniform2iv(this.addr,t)}function o0(i,t){i.uniform3iv(this.addr,t)}function c0(i,t){i.uniform4iv(this.addr,t)}function l0(i,t){i.uniform1uiv(this.addr,t)}function h0(i,t){i.uniform2uiv(this.addr,t)}function u0(i,t){i.uniform3uiv(this.addr,t)}function d0(i,t){i.uniform4uiv(this.addr,t)}function f0(i,t,e){const n=this.cache,s=t.length,r=Ca(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||_d,r[a])}function p0(i,t,e){const n=this.cache,s=t.length,r=Ca(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xd,r[a])}function m0(i,t,e){const n=this.cache,s=t.length,r=Ca(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vd,r[a])}function g0(i,t,e){const n=this.cache,s=t.length,r=Ca(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bd,r[a])}function _0(i){switch(i){case 5126:return Zb;case 35664:return Qb;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return c0;case 5125:return l0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}class b0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jb(e.type)}}class x0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_0(e.type)}}class v0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function eh(i,t){i.seq.push(t),i.map[t.id]=t}function M0(i,t,e){const n=i.name,s=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),a=ho.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){eh(e,l===void 0?new b0(o,i,t):new x0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new v0(o),eh(e,h)),e=h}}}class ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);M0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function nh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const y0=37297;let S0=0;function E0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ih=new ne;function A0(i){ge._getMatrix(ih,ge.workingColorSpace,i);const t=`mat3( ${ih.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case ga:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+E0(i.getShaderSource(t),a)}else return s}function T0(i,t){const e=A0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function w0(i,t){let e;switch(t){case If:e="Linear";break;case Lf:e="Reinhard";break;case Df:e="Cineon";break;case Uf:e="ACESFilmic";break;case Nf:e="AgX";break;case Of:e="Neutral";break;case Ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vr=new k;function R0(){ge.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function P0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function er(i){return i!==""}function rh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ah(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L0=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(i){return i.replace(L0,U0)}const D0=new Map;function U0(i,t){let e=re[t];if(e===void 0){const n=D0.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mc(e)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(i){return i.replace(F0,N0)}function N0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function O0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function k0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case ys:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function z0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ec:t="ENVMAP_BLENDING_MULTIPLY";break;case Cf:t="ENVMAP_BLENDING_MIX";break;case Pf:t="ENVMAP_BLENDING_ADD";break}return t}function H0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function G0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=O0(e),l=k0(e),u=B0(e),h=z0(e),d=H0(e),p=C0(e),g=P0(r),_=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),f.length>0&&(f+=`
`)):(m=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),f=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?re.tonemapping_pars_fragment:"",e.toneMapping!==Mi?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,T0("linearToOutputTexel",e.outputColorSpace),R0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=mc(a),a=rh(a,e),a=ah(a,e),o=mc(o),o=rh(o,e),o=ah(o,e),a=oh(a),o=oh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=y+m+a,x=y+f+o,I=nh(s,s.VERTEX_SHADER,E),w=nh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,I),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(L){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(_).trim(),j=s.getShaderInfoLog(I).trim(),$=s.getShaderInfoLog(w).trim();let W=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,w);else{const J=sh(s,I,"vertex"),K=sh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+J+`
`+K)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(j===""||$==="")&&(G=!1);G&&(L.diagnostics={runnable:W,programLog:q,vertexShader:{log:j,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(I),s.deleteShader(w),U=new ha(s,_),A=I0(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,y0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}let V0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new X0(t),e.set(t,n)),n}}class X0{constructor(t){this.id=V0++,this.code=t,this.usedTimes=0}}function j0(i,t,e,n,s,r,a){const o=new Qu,c=new W0,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,M,L,q,j){const $=q.fog,W=j.geometry,G=A.isMeshStandardMaterial?q.environment:null,J=(A.isMeshStandardMaterial?e:t).get(A.envMap||G),K=J&&J.mapping===Ta?J.image.height:null,st=g[A.type];A.precision!==null&&(p=s.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=rt!==void 0?rt.length:0;let Ft=0;W.morphAttributes.position!==void 0&&(Ft=1),W.morphAttributes.normal!==void 0&&(Ft=2),W.morphAttributes.color!==void 0&&(Ft=3);let zt,Z,at,Mt;if(st){const ct=kn[st];zt=ct.vertexShader,Z=ct.fragmentShader}else zt=A.vertexShader,Z=A.fragmentShader,c.update(A),at=c.getVertexShaderID(A),Mt=c.getFragmentShaderID(A);const dt=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),bt=j.isInstancedMesh===!0,pt=j.isBatchedMesh===!0,Yt=!!A.map,Wt=!!A.matcap,oe=!!J,F=!!A.aoMap,me=!!A.lightMap,Gt=!!A.bumpMap,vt=!!A.normalMap,Ct=!!A.displacementMap,de=!!A.emissiveMap,Lt=!!A.metalnessMap,C=!!A.roughnessMap,S=A.anisotropy>0,O=A.clearcoat>0,et=A.dispersion>0,tt=A.iridescence>0,it=A.sheen>0,wt=A.transmission>0,mt=S&&!!A.anisotropyMap,At=O&&!!A.clearcoatMap,Zt=O&&!!A.clearcoatNormalMap,ut=O&&!!A.clearcoatRoughnessMap,Et=tt&&!!A.iridescenceMap,xt=tt&&!!A.iridescenceThicknessMap,Dt=it&&!!A.sheenColorMap,gt=it&&!!A.sheenRoughnessMap,R=!!A.specularMap,b=!!A.specularColorMap,Q=!!A.specularIntensityMap,T=wt&&!!A.transmissionMap,D=wt&&!!A.thicknessMap,B=!!A.gradientMap,H=!!A.alphaMap,V=A.alphaTest>0,nt=!!A.alphaHash,ft=!!A.extensions;let _t=Mi;A.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(_t=i.toneMapping);const St={shaderID:st,shaderType:A.type,shaderName:A.name,vertexShader:zt,fragmentShader:Z,defines:A.defines,customVertexShaderID:at,customFragmentShaderID:Mt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:pt,batchingColor:pt&&j._colorsTexture!==null,instancing:bt,instancingColor:bt&&j.instanceColor!==null,instancingMorph:bt&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:an,alphaToCoverage:!!A.alphaToCoverage,map:Yt,matcap:Wt,envMap:oe,envMapMode:oe&&J.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:me,bumpMap:Gt,normalMap:vt,displacementMap:d&&Ct,emissiveMap:de,normalMapObjectSpace:vt&&A.normalMapType===Wf,normalMapTangentSpace:vt&&A.normalMapType===Dc,metalnessMap:Lt,roughnessMap:C,anisotropy:S,anisotropyMap:mt,clearcoat:O,clearcoatMap:At,clearcoatNormalMap:Zt,clearcoatRoughnessMap:ut,dispersion:et,iridescence:tt,iridescenceMap:Et,iridescenceThicknessMap:xt,sheen:it,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:R,specularColorMap:b,specularIntensityMap:Q,transmission:wt,transmissionMap:T,thicknessMap:D,gradientMap:B,opaque:A.transparent===!1&&A.blending===gs&&A.alphaToCoverage===!1,alphaMap:H,alphaTest:V,alphaHash:nt,combine:A.combine,mapUv:Yt&&_(A.map.channel),aoMapUv:F&&_(A.aoMap.channel),lightMapUv:me&&_(A.lightMap.channel),bumpMapUv:Gt&&_(A.bumpMap.channel),normalMapUv:vt&&_(A.normalMap.channel),displacementMapUv:Ct&&_(A.displacementMap.channel),emissiveMapUv:de&&_(A.emissiveMap.channel),metalnessMapUv:Lt&&_(A.metalnessMap.channel),roughnessMapUv:C&&_(A.roughnessMap.channel),anisotropyMapUv:mt&&_(A.anisotropyMap.channel),clearcoatMapUv:At&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(A.sheenRoughnessMap.channel),specularMapUv:R&&_(A.specularMap.channel),specularColorMapUv:b&&_(A.specularColorMap.channel),specularIntensityMapUv:Q&&_(A.specularIntensityMap.channel),transmissionMapUv:T&&_(A.transmissionMap.channel),thicknessMapUv:D&&_(A.thicknessMap.channel),alphaMapUv:H&&_(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(vt||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!W.attributes.uv&&(Yt||H),fog:!!$,useFog:A.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:kt,skinning:j.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:Yt&&A.map.isVideoTexture===!0&&ge.getTransfer(A.map.colorSpace)===Ee,decodeVideoTextureEmissive:de&&A.emissiveMap.isVideoTexture===!0&&ge.getTransfer(A.emissiveMap.colorSpace)===Ee,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===sn,flipSided:A.side===un,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ft&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&A.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function f(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)M.push(L),M.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(y(M,A),E(M,A),M.push(i.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function y(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function E(A,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),A.push(o.mask)}function x(A){const M=g[A.type];let L;if(M){const q=kn[M];L=Np.clone(q.uniforms)}else L=A.uniforms;return L}function I(A,M){let L;for(let q=0,j=u.length;q<j;q++){const $=u[q];if($.cacheKey===M){L=$,++L.usedTimes;break}}return L===void 0&&(L=new G0(i,M,A,r),u.push(L)),L}function w(A){if(--A.usedTimes===0){const M=u.indexOf(A);u[M]=u[u.length-1],u.pop(),A.destroy()}}function P(A){c.remove(A)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:I,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:U}}function q0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function K0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||K0),n.length>1&&n.sort(d||lh),s.length>1&&s.sort(d||lh)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Y0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new hh,i.set(n,[a])):s>=r.length?(a=new hh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new qt};break;case"SpotLight":e={position:new k,direction:new k,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function J0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Z0=0;function Q0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tx(i){const t=new $0,e=J0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const s=new k,r=new ie,a=new ie;function o(l){let u=0,h=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,E=0,x=0,I=0,w=0,P=0;l.sort(Q0);for(let A=0,M=l.length;A<M;A++){const L=l[A],q=L.color,j=L.intensity,$=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=q.r*j,h+=q.g*j,d+=q.b*j;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],j);P++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,K=e.get(L);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=L.shadow.matrix,y++}n.directional[p]=G,p++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(q).multiplyScalar(j),G.distance=$,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[_]=G;const J=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,J.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=J.matrix,L.castShadow){const K=e.get(L);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=W,x++}_++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(q).multiplyScalar(j),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const J=L.shadow,K=e.get(L);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(j),G.groundColor.copy(L.groundColor).multiplyScalar(j),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==y||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==I||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=y,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=I,U.numLightProbes=P,n.version=Z0++)}function c(l,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const E=l[f];if(E.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function uh(i){const t=new tx(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ex(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new uh(i),t.set(s,[o])):r>=a.length?(o=new uh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sx(i,t,e){let n=new Oc;const s=new $t,r=new $t,a=new xe,o=new tm({depthPacking:Vf}),c=new em,l={},u=e.maxTextureSize,h={[ai]:un,[un]:ai,[sn]:sn},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:nx,fragmentShader:ix}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let f=this.type;this.render=function(w,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const A=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),q=i.state;q.setBlending(vi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const j=f!==Kn&&this.type===Kn,$=f===Kn&&this.type!==Kn;for(let W=0,G=w.length;W<G;W++){const J=w[W],K=J.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const st=K.getFrameExtents();if(s.multiply(st),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,K.mapSize.y=r.y)),K.map===null||j===!0||$===!0){const yt=this.type!==Kn?{minFilter:rn,magFilter:rn}:{};K.map!==null&&K.map.dispose(),K.map=new Vi(s.x,s.y,yt),K.map.texture.name=J.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const rt=K.getViewportCount();for(let yt=0;yt<rt;yt++){const Ft=K.getViewport(yt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),q.viewport(a),K.updateMatrices(J,yt),n=K.getFrustum(),x(P,U,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===Kn&&y(K,U),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(A,M,L)};function y(w,P){const U=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,U,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,U,p,_,null)}function E(w,P,U,A){let M=null;const L=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=U.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const q=M.uuid,j=P.uuid;let $=l[q];$===void 0&&($={},l[q]=$);let W=$[j];W===void 0&&(W=M.clone(),$[j]=W,P.addEventListener("dispose",I)),M=W}if(M.visible=P.visible,M.wireframe=P.wireframe,A===Kn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=U}return M}function x(w,P,U,A,M){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const j=t.update(w),$=w.material;if(Array.isArray($)){const W=j.groups;for(let G=0,J=W.length;G<J;G++){const K=W[G],st=$[K.materialIndex];if(st&&st.visible){const rt=E(w,st,A,M);w.onBeforeShadow(i,w,P,U,j,rt,K),i.renderBufferDirect(U,null,j,rt,w,K),w.onAfterShadow(i,w,P,U,j,rt,K)}}}else if($.visible){const W=E(w,$,A,M);w.onBeforeShadow(i,w,P,U,j,W,null),i.renderBufferDirect(U,null,j,W,w,null),w.onAfterShadow(i,w,P,U,j,W,null)}}const q=w.children;for(let j=0,$=q.length;j<$;j++)x(q[j],P,U,A,M)}function I(w){w.target.removeEventListener("dispose",I);for(const U in l){const A=l[U],M=w.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}const rx={[Ro]:Co,[Po]:Do,[Io]:Uo,[vs]:Lo,[Co]:Ro,[Do]:Po,[Uo]:Io,[Lo]:vs};function ax(i,t){function e(){let T=!1;const D=new xe;let B=null;const H=new xe(0,0,0,0);return{setMask:function(V){B!==V&&!T&&(i.colorMask(V,V,V,V),B=V)},setLocked:function(V){T=V},setClear:function(V,nt,ft,_t,St){St===!0&&(V*=_t,nt*=_t,ft*=_t),D.set(V,nt,ft,_t),H.equals(D)===!1&&(i.clearColor(V,nt,ft,_t),H.copy(D))},reset:function(){T=!1,B=null,H.set(-1,0,0,0)}}}function n(){let T=!1,D=!1,B=null,H=null,V=null;return{setReversed:function(nt){if(D!==nt){const ft=t.get("EXT_clip_control");D?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const _t=V;V=null,this.setClear(_t)}D=nt},getReversed:function(){return D},setTest:function(nt){nt?dt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(nt){B!==nt&&!T&&(i.depthMask(nt),B=nt)},setFunc:function(nt){if(D&&(nt=rx[nt]),H!==nt){switch(nt){case Ro:i.depthFunc(i.NEVER);break;case Co:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Io:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Do:i.depthFunc(i.GREATER);break;case Uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=nt}},setLocked:function(nt){T=nt},setClear:function(nt){V!==nt&&(D&&(nt=1-nt),i.clearDepth(nt),V=nt)},reset:function(){T=!1,B=null,H=null,V=null,D=!1}}}function s(){let T=!1,D=null,B=null,H=null,V=null,nt=null,ft=null,_t=null,St=null;return{setTest:function(ct){T||(ct?dt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(ct){D!==ct&&!T&&(i.stencilMask(ct),D=ct)},setFunc:function(ct,Tt,Pt){(B!==ct||H!==Tt||V!==Pt)&&(i.stencilFunc(ct,Tt,Pt),B=ct,H=Tt,V=Pt)},setOp:function(ct,Tt,Pt){(nt!==ct||ft!==Tt||_t!==Pt)&&(i.stencilOp(ct,Tt,Pt),nt=ct,ft=Tt,_t=Pt)},setLocked:function(ct){T=ct},setClear:function(ct){St!==ct&&(i.clearStencil(ct),St=ct)},reset:function(){T=!1,D=null,B=null,H=null,V=null,nt=null,ft=null,_t=null,St=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,E=null,x=null,I=null,w=null,P=new qt(0,0,0),U=0,A=!1,M=null,L=null,q=null,j=null,$=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=J>=1):K.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=J>=2);let st=null,rt={};const yt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),zt=new xe().fromArray(yt),Z=new xe().fromArray(Ft);function at(T,D,B,H){const V=new Uint8Array(4),nt=i.createTexture();i.bindTexture(T,nt),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<B;ft++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(D,0,i.RGBA,1,1,H,0,i.RGBA,i.UNSIGNED_BYTE,V):i.texImage2D(D+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,V);return nt}const Mt={};Mt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),a.setFunc(vs),Gt(!1),vt(Qc),dt(i.CULL_FACE),F(vi);function dt(T){u[T]!==!0&&(i.enable(T),u[T]=!0)}function kt(T){u[T]!==!1&&(i.disable(T),u[T]=!1)}function bt(T,D){return h[T]!==D?(i.bindFramebuffer(T,D),h[T]=D,T===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=D),T===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=D),!0):!1}function pt(T,D){let B=p,H=!1;if(T){B=d.get(D),B===void 0&&(B=[],d.set(D,B));const V=T.textures;if(B.length!==V.length||B[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,ft=V.length;nt<ft;nt++)B[nt]=i.COLOR_ATTACHMENT0+nt;B.length=V.length,H=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,H=!0);H&&i.drawBuffers(B)}function Yt(T){return g!==T?(i.useProgram(T),g=T,!0):!1}const Wt={[Oi]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};Wt[pf]=i.MIN,Wt[mf]=i.MAX;const oe={[gf]:i.ZERO,[_f]:i.ONE,[bf]:i.SRC_COLOR,[To]:i.SRC_ALPHA,[Ef]:i.SRC_ALPHA_SATURATE,[yf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[wo]:i.ONE_MINUS_SRC_ALPHA,[Sf]:i.ONE_MINUS_DST_COLOR,[Mf]:i.ONE_MINUS_DST_ALPHA,[Af]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[wf]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function F(T,D,B,H,V,nt,ft,_t,St,ct){if(T===vi){_===!0&&(kt(i.BLEND),_=!1);return}if(_===!1&&(dt(i.BLEND),_=!0),T!==uf){if(T!==m||ct!==A){if((f!==Oi||x!==Oi)&&(i.blendEquation(i.FUNC_ADD),f=Oi,x=Oi),ct)switch(T){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case us:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case us:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}y=null,E=null,I=null,w=null,P.set(0,0,0),U=0,m=T,A=ct}return}V=V||D,nt=nt||B,ft=ft||H,(D!==f||V!==x)&&(i.blendEquationSeparate(Wt[D],Wt[V]),f=D,x=V),(B!==y||H!==E||nt!==I||ft!==w)&&(i.blendFuncSeparate(oe[B],oe[H],oe[nt],oe[ft]),y=B,E=H,I=nt,w=ft),(_t.equals(P)===!1||St!==U)&&(i.blendColor(_t.r,_t.g,_t.b,St),P.copy(_t),U=St),m=T,A=!1}function me(T,D){T.side===sn?kt(i.CULL_FACE):dt(i.CULL_FACE);let B=T.side===un;D&&(B=!B),Gt(B),T.blending===gs&&T.transparent===!1?F(vi):F(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);const H=T.stencilWrite;o.setTest(H),H&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),de(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(T){M!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),M=T)}function vt(T){T!==lf?(dt(i.CULL_FACE),T!==L&&(T===Qc?i.cullFace(i.BACK):T===hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),L=T}function Ct(T){T!==q&&(G&&i.lineWidth(T),q=T)}function de(T,D,B){T?(dt(i.POLYGON_OFFSET_FILL),(j!==D||$!==B)&&(i.polygonOffset(D,B),j=D,$=B)):kt(i.POLYGON_OFFSET_FILL)}function Lt(T){T?dt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function C(T){T===void 0&&(T=i.TEXTURE0+W-1),st!==T&&(i.activeTexture(T),st=T)}function S(T,D,B){B===void 0&&(st===null?B=i.TEXTURE0+W-1:B=st);let H=rt[B];H===void 0&&(H={type:void 0,texture:void 0},rt[B]=H),(H.type!==T||H.texture!==D)&&(st!==B&&(i.activeTexture(B),st=B),i.bindTexture(T,D||Mt[T]),H.type=T,H.texture=D)}function O(){const T=rt[st];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Dt(T){zt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),zt.copy(T))}function gt(T){Z.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Z.copy(T))}function R(T,D){let B=l.get(D);B===void 0&&(B=new WeakMap,l.set(D,B));let H=B.get(T);H===void 0&&(H=i.getUniformBlockIndex(D,T.name),B.set(T,H))}function b(T,D){const H=l.get(D).get(T);c.get(D)!==H&&(i.uniformBlockBinding(D,H,T.__bindingPointIndex),c.set(D,H))}function Q(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,rt={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,E=null,x=null,I=null,w=null,P=new qt(0,0,0),U=0,A=!1,M=null,L=null,q=null,j=null,$=null,zt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:kt,bindFramebuffer:bt,drawBuffers:pt,useProgram:Yt,setBlending:F,setMaterial:me,setFlipSided:Gt,setCullFace:vt,setLineWidth:Ct,setPolygonOffset:de,setScissorTest:Lt,activeTexture:C,bindTexture:S,unbindTexture:O,compressedTexImage2D:et,compressedTexImage3D:tt,texImage2D:Et,texImage3D:xt,updateUBOMapping:R,uniformBlockBinding:b,texStorage2D:Zt,texStorage3D:ut,texSubImage2D:it,texSubImage3D:wt,compressedTexSubImage2D:mt,compressedTexSubImage3D:At,scissor:Dt,viewport:gt,reset:Q}}function ox(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):cr("canvas")}function _(C,S,O){let et=1;const tt=Lt(C);if((tt.width>O||tt.height>O)&&(et=O/Math.max(tt.width,tt.height)),et<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const it=Math.floor(et*tt.width),wt=Math.floor(et*tt.height);h===void 0&&(h=g(it,wt));const mt=S?g(it,wt):h;return mt.width=it,mt.height=wt,mt.getContext("2d").drawImage(C,0,0,it,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+it+"x"+wt+")."),mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,S,O,et,tt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let it=S;if(S===i.RED&&(O===i.FLOAT&&(it=i.R32F),O===i.HALF_FLOAT&&(it=i.R16F),O===i.UNSIGNED_BYTE&&(it=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.R8UI),O===i.UNSIGNED_SHORT&&(it=i.R16UI),O===i.UNSIGNED_INT&&(it=i.R32UI),O===i.BYTE&&(it=i.R8I),O===i.SHORT&&(it=i.R16I),O===i.INT&&(it=i.R32I)),S===i.RG&&(O===i.FLOAT&&(it=i.RG32F),O===i.HALF_FLOAT&&(it=i.RG16F),O===i.UNSIGNED_BYTE&&(it=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.RG8UI),O===i.UNSIGNED_SHORT&&(it=i.RG16UI),O===i.UNSIGNED_INT&&(it=i.RG32UI),O===i.BYTE&&(it=i.RG8I),O===i.SHORT&&(it=i.RG16I),O===i.INT&&(it=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.RGB8UI),O===i.UNSIGNED_SHORT&&(it=i.RGB16UI),O===i.UNSIGNED_INT&&(it=i.RGB32UI),O===i.BYTE&&(it=i.RGB8I),O===i.SHORT&&(it=i.RGB16I),O===i.INT&&(it=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),O===i.UNSIGNED_INT&&(it=i.RGBA32UI),O===i.BYTE&&(it=i.RGBA8I),O===i.SHORT&&(it=i.RGBA16I),O===i.INT&&(it=i.RGBA32I)),S===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),S===i.RGBA){const wt=tt?ga:ge.getTransfer(et);O===i.FLOAT&&(it=i.RGBA32F),O===i.HALF_FLOAT&&(it=i.RGBA16F),O===i.UNSIGNED_BYTE&&(it=wt===Ee?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(C,S){let O;return C?S===null||S===Gi||S===Es?O=i.DEPTH24_STENCIL8:S===Pn?O=i.DEPTH32F_STENCIL8:S===rr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===Es?O=i.DEPTH_COMPONENT24:S===Pn?O=i.DEPTH_COMPONENT32F:S===rr&&(O=i.DEPTH_COMPONENT16),O}function I(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==pn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){const S=C.target;S.removeEventListener("dispose",w),U(S),S.isVideoTexture&&u.delete(S)}function P(C){const S=C.target;S.removeEventListener("dispose",P),M(S)}function U(C){const S=n.get(C);if(S.__webglInit===void 0)return;const O=C.source,et=d.get(O);if(et){const tt=et[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&A(C),Object.keys(et).length===0&&d.delete(O)}n.remove(C)}function A(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const O=C.source,et=d.get(O);delete et[S.__cacheKey],a.memory.textures--}function M(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let tt=0;tt<S.__webglFramebuffer[et].length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[et][tt]);else i.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)i.deleteFramebuffer(S.__webglFramebuffer[et]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=C.textures;for(let et=0,tt=O.length;et<tt;et++){const it=n.get(O[et]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(O[et])}n.remove(C)}let L=0;function q(){L=0}function j(){const C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function $(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){const O=n.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const et=C.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,C,S);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function G(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){Z(O,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function J(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){Z(O,C,S);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function K(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){at(O,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}const st={[Ss]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},rt={[rn]:i.NEAREST,[Ou]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},yt={[Xf]:i.NEVER,[Jf]:i.ALWAYS,[jf]:i.LESS,[Yu]:i.LEQUAL,[qf]:i.EQUAL,[$f]:i.GEQUAL,[Kf]:i.GREATER,[Yf]:i.NOTEQUAL};function Ft(C,S){if(S.type===Pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===pn||S.magFilter===sa||S.magFilter===tr||S.magFilter===Zn||S.minFilter===pn||S.minFilter===sa||S.minFilter===tr||S.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,st[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,st[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,st[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,rt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==tr&&S.minFilter!==Zn||S.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function zt(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));const et=S.source;let tt=d.get(et);tt===void 0&&(tt={},d.set(et,tt));const it=$(S);if(it!==C.__cacheKey){tt[it]===void 0&&(tt[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[it].usedTimes++;const wt=tt[C.__cacheKey];wt!==void 0&&(tt[C.__cacheKey].usedTimes--,wt.usedTimes===0&&A(S)),C.__cacheKey=it,C.__webglTexture=tt[it].texture}return O}function Z(C,S,O){let et=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=i.TEXTURE_3D);const tt=zt(C,S),it=S.source;e.bindTexture(et,C.__webglTexture,i.TEXTURE0+O);const wt=n.get(it);if(it.version!==wt.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const mt=ge.getPrimaries(ge.workingColorSpace),At=S.colorSpace===gi?null:ge.getPrimaries(S.colorSpace),Zt=S.colorSpace===gi||mt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ut=_(S.image,!1,s.maxTextureSize);ut=de(S,ut);const Et=r.convert(S.format,S.colorSpace),xt=r.convert(S.type);let Dt=E(S.internalFormat,Et,xt,S.colorSpace,S.isVideoTexture);Ft(et,S);let gt;const R=S.mipmaps,b=S.isVideoTexture!==!0,Q=wt.__version===void 0||tt===!0,T=it.dataReady,D=I(S,ut);if(S.isDepthTexture)Dt=x(S.format===As,S.type),Q&&(b?e.texStorage2D(i.TEXTURE_2D,1,Dt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ut.width,ut.height,0,Et,xt,null));else if(S.isDataTexture)if(R.length>0){b&&Q&&e.texStorage2D(i.TEXTURE_2D,D,Dt,R[0].width,R[0].height);for(let B=0,H=R.length;B<H;B++)gt=R[B],b?T&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,gt.width,gt.height,Et,xt,gt.data):e.texImage2D(i.TEXTURE_2D,B,Dt,gt.width,gt.height,0,Et,xt,gt.data);S.generateMipmaps=!1}else b?(Q&&e.texStorage2D(i.TEXTURE_2D,D,Dt,ut.width,ut.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Et,xt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,ut.width,ut.height,0,Et,xt,ut.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){b&&Q&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,Dt,R[0].width,R[0].height,ut.depth);for(let B=0,H=R.length;B<H;B++)if(gt=R[B],S.format!==yn)if(Et!==null)if(b){if(T)if(S.layerUpdates.size>0){const V=Hl(gt.width,gt.height,S.format,S.type);for(const nt of S.layerUpdates){const ft=gt.data.subarray(nt*V/gt.data.BYTES_PER_ELEMENT,(nt+1)*V/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,nt,gt.width,gt.height,1,Et,ft)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,gt.width,gt.height,ut.depth,Et,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Dt,gt.width,gt.height,ut.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else b?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,gt.width,gt.height,ut.depth,Et,xt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,Dt,gt.width,gt.height,ut.depth,0,Et,xt,gt.data)}else{b&&Q&&e.texStorage2D(i.TEXTURE_2D,D,Dt,R[0].width,R[0].height);for(let B=0,H=R.length;B<H;B++)gt=R[B],S.format!==yn?Et!==null?b?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,gt.width,gt.height,Et,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,B,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?T&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,gt.width,gt.height,Et,xt,gt.data):e.texImage2D(i.TEXTURE_2D,B,Dt,gt.width,gt.height,0,Et,xt,gt.data)}else if(S.isDataArrayTexture)if(b){if(Q&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,Dt,ut.width,ut.height,ut.depth),T)if(S.layerUpdates.size>0){const B=Hl(ut.width,ut.height,S.format,S.type);for(const H of S.layerUpdates){const V=ut.data.subarray(H*B/ut.data.BYTES_PER_ELEMENT,(H+1)*B/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,H,ut.width,ut.height,1,Et,xt,V)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,xt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ut.width,ut.height,ut.depth,0,Et,xt,ut.data);else if(S.isData3DTexture)b?(Q&&e.texStorage3D(i.TEXTURE_3D,D,Dt,ut.width,ut.height,ut.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,xt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ut.width,ut.height,ut.depth,0,Et,xt,ut.data);else if(S.isFramebufferTexture){if(Q)if(b)e.texStorage2D(i.TEXTURE_2D,D,Dt,ut.width,ut.height);else{let B=ut.width,H=ut.height;for(let V=0;V<D;V++)e.texImage2D(i.TEXTURE_2D,V,Dt,B,H,0,Et,xt,null),B>>=1,H>>=1}}else if(R.length>0){if(b&&Q){const B=Lt(R[0]);e.texStorage2D(i.TEXTURE_2D,D,Dt,B.width,B.height)}for(let B=0,H=R.length;B<H;B++)gt=R[B],b?T&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Et,xt,gt):e.texImage2D(i.TEXTURE_2D,B,Dt,Et,xt,gt);S.generateMipmaps=!1}else if(b){if(Q){const B=Lt(ut);e.texStorage2D(i.TEXTURE_2D,D,Dt,B.width,B.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,xt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Et,xt,ut);m(S)&&f(et),wt.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function at(C,S,O){if(S.image.length!==6)return;const et=zt(C,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);const it=n.get(tt);if(tt.version!==it.__version||et===!0){e.activeTexture(i.TEXTURE0+O);const wt=ge.getPrimaries(ge.workingColorSpace),mt=S.colorSpace===gi?null:ge.getPrimaries(S.colorSpace),At=S.colorSpace===gi||wt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,ut=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let H=0;H<6;H++)!Zt&&!ut?Et[H]=_(S.image[H],!0,s.maxCubemapSize):Et[H]=ut?S.image[H].image:S.image[H],Et[H]=de(S,Et[H]);const xt=Et[0],Dt=r.convert(S.format,S.colorSpace),gt=r.convert(S.type),R=E(S.internalFormat,Dt,gt,S.colorSpace),b=S.isVideoTexture!==!0,Q=it.__version===void 0||et===!0,T=tt.dataReady;let D=I(S,xt);Ft(i.TEXTURE_CUBE_MAP,S);let B;if(Zt){b&&Q&&e.texStorage2D(i.TEXTURE_CUBE_MAP,D,R,xt.width,xt.height);for(let H=0;H<6;H++){B=Et[H].mipmaps;for(let V=0;V<B.length;V++){const nt=B[V];S.format!==yn?Dt!==null?b?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,V,0,0,nt.width,nt.height,Dt,nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,V,R,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,V,0,0,nt.width,nt.height,Dt,gt,nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,V,R,nt.width,nt.height,0,Dt,gt,nt.data)}}}else{if(B=S.mipmaps,b&&Q){B.length>0&&D++;const H=Lt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,D,R,H.width,H.height)}for(let H=0;H<6;H++)if(ut){b?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Et[H].width,Et[H].height,Dt,gt,Et[H].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,R,Et[H].width,Et[H].height,0,Dt,gt,Et[H].data);for(let V=0;V<B.length;V++){const ft=B[V].image[H].image;b?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,V+1,0,0,ft.width,ft.height,Dt,gt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,V+1,R,ft.width,ft.height,0,Dt,gt,ft.data)}}else{b?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Dt,gt,Et[H]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,R,Dt,gt,Et[H]);for(let V=0;V<B.length;V++){const nt=B[V];b?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,V+1,0,0,Dt,gt,nt.image[H]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,V+1,R,Dt,gt,nt.image[H])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),it.__version=tt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Mt(C,S,O,et,tt,it){const wt=r.convert(O.format,O.colorSpace),mt=r.convert(O.type),At=E(O.internalFormat,wt,mt,O.colorSpace),Zt=n.get(S),ut=n.get(O);if(ut.__renderTarget=S,!Zt.__hasExternalTextures){const Et=Math.max(1,S.width>>it),xt=Math.max(1,S.height>>it);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,it,At,Et,xt,S.depth,0,wt,mt,null):e.texImage2D(tt,it,At,Et,xt,0,wt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),vt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,tt,ut.__webglTexture,0,Gt(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,tt,ut.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(C,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const et=S.depthTexture,tt=et&&et.isDepthTexture?et.type:null,it=x(S.stencilBuffer,tt),wt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Gt(S);vt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,it,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,it,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,it,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,C)}else{const et=S.textures;for(let tt=0;tt<et.length;tt++){const it=et[tt],wt=r.convert(it.format,it.colorSpace),mt=r.convert(it.type),At=E(it.internalFormat,wt,mt,it.colorSpace),Zt=Gt(S);O&&vt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,At,S.width,S.height):vt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(S.depthTexture);et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const tt=et.__webglTexture,it=Gt(S);if(S.depthTexture.format===_s)vt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(S.depthTexture.format===As)vt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function bt(C){const S=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const et=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",tt)};et.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=et}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");kt(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=i.createRenderbuffer(),dt(S.__webglDepthbuffer[et],C,!1);else{const tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),dt(S.__webglDepthbuffer,C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(C,S,O){const et=n.get(C);S!==void 0&&Mt(et.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&bt(C)}function Yt(C){const S=C.texture,O=n.get(C),et=n.get(S);C.addEventListener("dispose",P);const tt=C.textures,it=C.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=S.version,a.memory.textures++),it){O.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[mt]=[];for(let At=0;At<S.mipmaps.length;At++)O.__webglFramebuffer[mt][At]=i.createFramebuffer()}else O.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let mt=0;mt<S.mipmaps.length;mt++)O.__webglFramebuffer[mt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let mt=0,At=tt.length;mt<At;mt++){const Zt=n.get(tt[mt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&vt(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let mt=0;mt<tt.length;mt++){const At=tt[mt];O.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[mt]);const Zt=r.convert(At.format,At.colorSpace),ut=r.convert(At.type),Et=E(At.internalFormat,Zt,ut,At.colorSpace,C.isXRRenderTarget===!0),xt=Gt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,Et,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,O.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,S);for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Mt(O.__webglFramebuffer[mt][At],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At);else Mt(O.__webglFramebuffer[mt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let mt=0,At=tt.length;mt<At;mt++){const Zt=tt[mt],ut=n.get(Zt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),Ft(i.TEXTURE_2D,Zt),Mt(O.__webglFramebuffer,C,Zt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(Zt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,et.__webglTexture),Ft(mt,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)Mt(O.__webglFramebuffer[At],C,S,i.COLOR_ATTACHMENT0,mt,At);else Mt(O.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,mt,0);m(S)&&f(mt),e.unbindTexture()}C.depthBuffer&&bt(C)}function Wt(C){const S=C.textures;for(let O=0,et=S.length;O<et;O++){const tt=S[O];if(m(tt)){const it=y(C),wt=n.get(tt).__webglTexture;e.bindTexture(it,wt),f(it),e.unbindTexture()}}}const oe=[],F=[];function me(C){if(C.samples>0){if(vt(C)===!1){const S=C.textures,O=C.width,et=C.height;let tt=i.COLOR_BUFFER_BIT;const it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(C),mt=S.length>1;if(mt)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const Zt=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,O,et,0,0,O,et,tt,i.NEAREST),c===!0&&(oe.length=0,F.length=0,oe.push(i.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(oe.push(it),F.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const Zt=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Gt(C){return Math.min(s.maxSamples,C.samples)}function vt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function de(C,S){const O=C.colorSpace,et=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==an&&O!==gi&&(ge.getTransfer(O)===Ee?(et!==yn||tt!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=pt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=vt}function cx(i,t){function e(n,s=gi){let r;const a=ge.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===Tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.BYTE;if(n===Bu)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===Hu)return i.ALPHA;if(n===Gu)return i.RGB;if(n===yn)return i.RGBA;if(n===Vu)return i.LUMINANCE;if(n===Wu)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Rc)return i.RED;if(n===Cc)return i.RED_INTEGER;if(n===Xu)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Ic)return i.RGBA_INTEGER;if(n===ra||n===aa||n===oa||n===ca)if(a===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===ko||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Go||n===Vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ho||n===Go)return a===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===jo||n===qo||n===Ko||n===Yo||n===$o||n===Jo||n===Zo||n===Qo||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===sc||n===rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return a===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ju||n===ac||n===oc||n===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===la)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const lx={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yi({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fx extends Wi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=new dx,m=e.getContextAttributes();let f=null,y=null;const E=[],x=[],I=new $t;let w=null;const P=new nn;P.viewport=new xe;const U=new nn;U.viewport=new xe;const A=[P,U],M=new Mm;let L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let at=E[Z];return at===void 0&&(at=new uo,E[Z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Z){let at=E[Z];return at===void 0&&(at=new uo,E[Z]=at),at.getGripSpace()},this.getHand=function(Z){let at=E[Z];return at===void 0&&(at=new uo,E[Z]=at),at.getHandSpace()};function j(Z){const at=x.indexOf(Z.inputSource);if(at===-1)return;const Mt=E[at];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,l||a),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",W);for(let Z=0;Z<E.length;Z++){const at=x[Z];at!==null&&(x[Z]=null,E[Z].disconnect(at))}L=null,q=null,_.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,y=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",$),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Vi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Mt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?As:_s,Mt=m.stencil?Es:Gi);const kt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Vi(d.textureWidth,d.textureHeight,{format:yn,type:oi,depthTexture:new hd(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(Z){for(let at=0;at<Z.removed.length;at++){const Mt=Z.removed[at],dt=x.indexOf(Mt);dt>=0&&(x[dt]=null,E[dt].disconnect(Mt))}for(let at=0;at<Z.added.length;at++){const Mt=Z.added[at];let dt=x.indexOf(Mt);if(dt===-1){for(let bt=0;bt<E.length;bt++)if(bt>=x.length){x.push(Mt),dt=bt;break}else if(x[bt]===null){x[bt]=Mt,dt=bt;break}if(dt===-1)break}const kt=E[dt];kt&&kt.connect(Mt)}}const G=new k,J=new k;function K(Z,at,Mt){G.setFromMatrixPosition(at.matrixWorld),J.setFromMatrixPosition(Mt.matrixWorld);const dt=G.distanceTo(J),kt=at.projectionMatrix.elements,bt=Mt.projectionMatrix.elements,pt=kt[14]/(kt[10]-1),Yt=kt[14]/(kt[10]+1),Wt=(kt[9]+1)/kt[5],oe=(kt[9]-1)/kt[5],F=(kt[8]-1)/kt[0],me=(bt[8]+1)/bt[0],Gt=pt*F,vt=pt*me,Ct=dt/(-F+me),de=Ct*-F;if(at.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(de),Z.translateZ(Ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),kt[10]===-1)Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Lt=pt+Ct,C=Yt+Ct,S=Gt-de,O=vt+(dt-de),et=Wt*Yt/C*Lt,tt=oe*Yt/C*Lt;Z.projectionMatrix.makePerspective(S,O,et,tt,Lt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function st(Z,at){at===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(at.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let at=Z.near,Mt=Z.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),M.near=U.near=P.near=at,M.far=U.far=P.far=Mt,(L!==M.near||q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,q=M.far),P.layers.mask=Z.layers.mask|2,U.layers.mask=Z.layers.mask|4,M.layers.mask=P.layers.mask|U.layers.mask;const dt=Z.parent,kt=M.cameras;st(M,dt);for(let bt=0;bt<kt.length;bt++)st(kt[bt],dt);kt.length===2?K(M,P,U):M.projectionMatrix.copy(P.projectionMatrix),rt(Z,M,dt)};function rt(Z,at,Mt){Mt===null?Z.matrix.copy(at.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(at.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ts*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let yt=null;function Ft(Z,at){if(u=at.getViewerPose(l||a),g=at,u!==null){const Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let dt=!1;Mt.length!==M.cameras.length&&(M.cameras.length=0,dt=!0);for(let bt=0;bt<Mt.length;bt++){const pt=Mt[bt];let Yt=null;if(p!==null)Yt=p.getViewport(pt);else{const oe=h.getViewSubImage(d,pt);Yt=oe.viewport,bt===0&&(t.setRenderTargetTextures(y,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(y))}let Wt=A[bt];Wt===void 0&&(Wt=new nn,Wt.layers.enable(bt),Wt.viewport=new xe,A[bt]=Wt),Wt.matrix.fromArray(pt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(pt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),bt===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),dt===!0&&M.cameras.push(Wt)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const bt=h.getDepthInformation(Mt[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,s.renderState)}}for(let Mt=0;Mt<E.length;Mt++){const dt=x[Mt],kt=E[Mt];dt!==null&&kt!==void 0&&kt.update(dt,at,l||a)}yt&&yt(Z,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const zt=new gd;zt.setAnimationLoop(Ft),this.setAnimationLoop=function(Z){yt=Z},this.dispose=function(){}}}const Ci=new Fn,px=new ie;function mx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,id(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,E,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,Ci.copy(x),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(Ci)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const x=E.program;n.uniformBlockBinding(y,x)}function l(y,E){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(y,I);const w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function u(y){const E=h();y.__bindingPointIndex=E;const x=i.createBuffer(),I=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=s[y.id],x=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,P=x.length;w<P;w++){const U=Array.isArray(x[w])?x[w]:[x[w]];for(let A=0,M=U.length;A<M;A++){const L=U[A];if(p(L,w,A,I)===!0){const q=L.__offset,j=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let W=0;W<j.length;W++){const G=j[W],J=_(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,q+$,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,E,x,I){const w=y.value,P=E+"_"+x;if(I[P]===void 0)return typeof w=="number"||typeof w=="boolean"?I[P]=w:I[P]=w.clone(),!0;{const U=I[P];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return I[P]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(y){const E=y.uniforms;let x=0;const I=16;for(let P=0,U=E.length;P<U;P++){const A=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,L=A.length;M<L;M++){const q=A[M],j=Array.isArray(q.value)?q.value:[q.value];for(let $=0,W=j.length;$<W;$++){const G=j[$],J=_(G),K=x%I,st=K%J.boundary,rt=K+st;x+=st,rt!==0&&I-rt<J.storage&&(x+=I-rt),q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=x,x+=J.storage}}}const w=x%I;return w>0&&(x+=I-w),y.__size=x,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class _x{constructor(t={}){const{canvas:e=mp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let I=!1,w=0,P=0,U=null,A=-1,M=null;const L=new xe,q=new xe;let j=null;const $=new qt(0);let W=0,G=e.width,J=e.height,K=1,st=null,rt=null;const yt=new xe(0,0,G,J),Ft=new xe(0,0,G,J);let zt=!1;const Z=new Oc;let at=!1,Mt=!1;const dt=new ie,kt=new ie,bt=new k,pt=new xe,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function oe(){return U===null?K:1}let F=n;function me(v,N){return e.getContext(v,N)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",H,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",nt,!1),F===null){const N="webgl2";if(F=me(N,v),F===null)throw me(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Gt,vt,Ct,de,Lt,C,S,O,et,tt,it,wt,mt,At,Zt,ut,Et,xt,Dt,gt,R,b,Q,T;function D(){Gt=new Tb(F),Gt.init(),b=new cx(F,Gt),vt=new vb(F,Gt,t,b),Ct=new ax(F,Gt),vt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),de=new Cb(F),Lt=new q0,C=new ox(F,Gt,Ct,Lt,vt,b,de),S=new yb(x),O=new Ab(x),et=new Nm(F),Q=new bb(F,et),tt=new wb(F,et,de,Q),it=new Ib(F,tt,et,de),Dt=new Pb(F,vt,C),ut=new Mb(Lt),wt=new j0(x,S,O,Gt,vt,Q,ut),mt=new mx(x,Lt),At=new Y0,Zt=new ex(Gt),xt=new _b(x,S,O,Ct,it,p,c),Et=new sx(x,it,vt),T=new gx(F,de,vt,Ct),gt=new xb(F,Gt,de),R=new Rb(F,Gt,de),de.programs=wt.programs,x.capabilities=vt,x.extensions=Gt,x.properties=Lt,x.renderLists=At,x.shadowMap=Et,x.state=Ct,x.info=de}D();const B=new fx(x,F);this.xr=B,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const v=Gt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Gt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(v){v!==void 0&&(K=v,this.setSize(G,J,!1))},this.getSize=function(v){return v.set(G,J)},this.setSize=function(v,N,X=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,J=N,e.width=Math.floor(v*K),e.height=Math.floor(N*K),X===!0&&(e.style.width=v+"px",e.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(G*K,J*K).floor()},this.setDrawingBufferSize=function(v,N,X){G=v,J=N,K=X,e.width=Math.floor(v*X),e.height=Math.floor(N*X),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(yt)},this.setViewport=function(v,N,X,Y){v.isVector4?yt.set(v.x,v.y,v.z,v.w):yt.set(v,N,X,Y),Ct.viewport(L.copy(yt).multiplyScalar(K).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,N,X,Y){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,N,X,Y),Ct.scissor(q.copy(Ft).multiplyScalar(K).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(v){Ct.setScissorTest(zt=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){rt=v},this.getClearColor=function(v){return v.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(v=!0,N=!0,X=!0){let Y=0;if(v){let z=!1;if(U!==null){const ot=U.texture.format;z=ot===Ic||ot===Pc||ot===Cc}if(z){const ot=U.texture.type,lt=ot===oi||ot===Gi||ot===rr||ot===Es||ot===Tc||ot===wc,It=xt.getClearColor(),Ut=xt.getClearAlpha(),Nt=It.r,Vt=It.g,Ot=It.b;lt?(g[0]=Nt,g[1]=Vt,g[2]=Ot,g[3]=Ut,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Nt,_[1]=Vt,_[2]=Ot,_[3]=Ut,F.clearBufferiv(F.COLOR,0,_))}else Y|=F.COLOR_BUFFER_BIT}N&&(Y|=F.DEPTH_BUFFER_BIT),X&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",H,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),xt.dispose(),At.dispose(),Zt.dispose(),Lt.dispose(),S.dispose(),O.dispose(),it.dispose(),Q.dispose(),T.dispose(),wt.dispose(),B.dispose(),B.removeEventListener("sessionstart",Bt),B.removeEventListener("sessionend",ce),Kt.stop()};function H(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const v=de.autoReset,N=Et.enabled,X=Et.autoUpdate,Y=Et.needsUpdate,z=Et.type;D(),de.autoReset=v,Et.enabled=N,Et.autoUpdate=X,Et.needsUpdate=Y,Et.type=z}function nt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ft(v){const N=v.target;N.removeEventListener("dispose",ft),_t(N)}function _t(v){St(v),Lt.remove(v)}function St(v){const N=Lt.get(v).programs;N!==void 0&&(N.forEach(function(X){wt.releaseProgram(X)}),v.isShaderMaterial&&wt.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,X,Y,z,ot){N===null&&(N=Yt);const lt=z.isMesh&&z.matrixWorld.determinant()<0,It=Xt(v,N,X,Y,z);Ct.setMaterial(Y,lt);let Ut=X.index,Nt=1;if(Y.wireframe===!0){if(Ut=tt.getWireframeAttribute(X),Ut===void 0)return;Nt=2}const Vt=X.drawRange,Ot=X.attributes.position;let Qt=Vt.start*Nt,ae=(Vt.start+Vt.count)*Nt;ot!==null&&(Qt=Math.max(Qt,ot.start*Nt),ae=Math.min(ae,(ot.start+ot.count)*Nt)),Ut!==null?(Qt=Math.max(Qt,0),ae=Math.min(ae,Ut.count)):Ot!=null&&(Qt=Math.max(Qt,0),ae=Math.min(ae,Ot.count));const be=ae-Qt;if(be<0||be===1/0)return;Q.setup(z,Y,It,X,Ut);let Ae,te=gt;if(Ut!==null&&(Ae=et.get(Ut),te=R,te.setIndex(Ae)),z.isMesh)Y.wireframe===!0?(Ct.setLineWidth(Y.wireframeLinewidth*oe()),te.setMode(F.LINES)):te.setMode(F.TRIANGLES);else if(z.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),Ct.setLineWidth(Ht*oe()),z.isLineSegments?te.setMode(F.LINES):z.isLineLoop?te.setMode(F.LINE_LOOP):te.setMode(F.LINE_STRIP)}else z.isPoints?te.setMode(F.POINTS):z.isSprite&&te.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)te.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ht=z._multiDrawStarts,Me=z._multiDrawCounts,se=z._multiDrawCount,He=Ut?et.get(Ut).bytesPerElement:1,Xe=Lt.get(Y).currentProgram.getUniforms();for(let Ne=0;Ne<se;Ne++)Xe.setValue(F,"_gl_DrawID",Ne),te.render(Ht[Ne]/He,Me[Ne])}else if(z.isInstancedMesh)te.renderInstances(Qt,be,z.count);else if(X.isInstancedBufferGeometry){const Ht=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Me=Math.min(X.instanceCount,Ht);te.renderInstances(Qt,be,Me)}else te.render(Qt,be)};function ct(v,N,X){v.transparent===!0&&v.side===sn&&v.forceSinglePass===!1?(v.side=un,v.needsUpdate=!0,on(v,N,X),v.side=ai,v.needsUpdate=!0,on(v,N,X),v.side=sn):on(v,N,X)}this.compile=function(v,N,X=null){X===null&&(X=v),f=Zt.get(X),f.init(N),E.push(f),X.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),v!==X&&v.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const Y=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ot=z.material;if(ot)if(Array.isArray(ot))for(let lt=0;lt<ot.length;lt++){const It=ot[lt];ct(It,X,z),Y.add(It)}else ct(ot,X,z),Y.add(ot)}),E.pop(),f=null,Y},this.compileAsync=function(v,N,X=null){const Y=this.compile(v,N,X);return new Promise(z=>{function ot(){if(Y.forEach(function(lt){Lt.get(lt).currentProgram.isReady()&&Y.delete(lt)}),Y.size===0){z(v);return}setTimeout(ot,10)}Gt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Tt=null;function Pt(v){Tt&&Tt(v)}function Bt(){Kt.stop()}function ce(){Kt.start()}const Kt=new gd;Kt.setAnimationLoop(Pt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(v){Tt=v,B.setAnimationLoop(v),v===null?Kt.stop():Kt.start()},B.addEventListener("sessionstart",Bt),B.addEventListener("sessionend",ce),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(N),N=B.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,N,U),f=Zt.get(v,E.length),f.init(N),E.push(f),kt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(kt),Mt=this.localClippingEnabled,at=ut.init(this.clippingPlanes,Mt),m=At.get(v,y.length),m.init(),y.push(m),B.enabled===!0&&B.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&pe(ot,N,-1/0,x.sortObjects)}pe(v,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,rt),Wt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Wt&&xt.addToRenderList(m,v),this.info.render.frame++,at===!0&&ut.beginShadows();const X=f.state.shadowsArray;Et.render(X,v,N),at===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ot=N.cameras;if(z.length>0)for(let lt=0,It=ot.length;lt<It;lt++){const Ut=ot[lt];ze(Y,z,v,Ut)}Wt&&xt.render(v);for(let lt=0,It=ot.length;lt<It;lt++){const Ut=ot[lt];De(m,v,Ut,Ut.viewport)}}else z.length>0&&ze(Y,z,v,N),Wt&&xt.render(v),De(m,v,N);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(x,v,N),Q.resetDefaultState(),A=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],at===!0&&ut.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function pe(v,N,X,Y){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Z.intersectsSprite(v)){Y&&pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(kt);const lt=it.update(v),It=v.material;It.visible&&m.push(v,lt,It,X,pt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Z.intersectsObject(v))){const lt=it.update(v),It=v.material;if(Y&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),pt.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),pt.copy(lt.boundingSphere.center)),pt.applyMatrix4(v.matrixWorld).applyMatrix4(kt)),Array.isArray(It)){const Ut=lt.groups;for(let Nt=0,Vt=Ut.length;Nt<Vt;Nt++){const Ot=Ut[Nt],Qt=It[Ot.materialIndex];Qt&&Qt.visible&&m.push(v,lt,Qt,X,pt.z,Ot)}}else It.visible&&m.push(v,lt,It,X,pt.z,null)}}const ot=v.children;for(let lt=0,It=ot.length;lt<It;lt++)pe(ot[lt],N,X,Y)}function De(v,N,X,Y){const z=v.opaque,ot=v.transmissive,lt=v.transparent;f.setupLightsView(X),at===!0&&ut.setGlobalState(x.clippingPlanes,X),Y&&Ct.viewport(L.copy(Y)),z.length>0&&gn(z,N,X),ot.length>0&&gn(ot,N,X),lt.length>0&&gn(lt,N,X),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ze(v,N,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Vi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?dr:oi,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const ot=f.state.transmissionRenderTarget[Y.id],lt=Y.viewport||L;ot.setSize(lt.z,lt.w);const It=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor($),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&xt.render(X);const Ut=x.toneMapping;x.toneMapping=Mi;const Nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),at===!0&&ut.setGlobalState(x.clippingPlanes,Y),gn(v,X,Y),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ot=0,Qt=N.length;Ot<Qt;Ot++){const ae=N[Ot],be=ae.object,Ae=ae.geometry,te=ae.material,Ht=ae.group;if(te.side===sn&&be.layers.test(Y.layers)){const Me=te.side;te.side=un,te.needsUpdate=!0,le(be,X,Y,Ae,te,Ht),te.side=Me,te.needsUpdate=!0,Vt=!0}}Vt===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}x.setRenderTarget(It),x.setClearColor($,W),Nt!==void 0&&(Y.viewport=Nt),x.toneMapping=Ut}function gn(v,N,X){const Y=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ot=v.length;z<ot;z++){const lt=v[z],It=lt.object,Ut=lt.geometry,Nt=Y===null?lt.material:Y,Vt=lt.group;It.layers.test(X.layers)&&le(It,N,X,Ut,Nt,Vt)}}function le(v,N,X,Y,z,ot){v.onBeforeRender(x,N,X,Y,z,ot),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(x,N,X,Y,v,ot),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=un,z.needsUpdate=!0,x.renderBufferDirect(X,N,Y,z,v,ot),z.side=ai,z.needsUpdate=!0,x.renderBufferDirect(X,N,Y,z,v,ot),z.side=sn):x.renderBufferDirect(X,N,Y,z,v,ot),v.onAfterRender(x,N,X,Y,z,ot)}function on(v,N,X){N.isScene!==!0&&(N=Yt);const Y=Lt.get(v),z=f.state.lights,ot=f.state.shadowsArray,lt=z.state.version,It=wt.getParameters(v,z.state,ot,N,X),Ut=wt.getProgramCacheKey(It);let Nt=Y.programs;Y.environment=v.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(v.isMeshStandardMaterial?O:S).get(v.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Nt===void 0&&(v.addEventListener("dispose",ft),Nt=new Map,Y.programs=Nt);let Vt=Nt.get(Ut);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===lt)return ee(v,It),Vt}else It.uniforms=wt.getUniforms(v),v.onBeforeCompile(It,x),Vt=wt.acquireProgram(It,Ut),Nt.set(Ut,Vt),Y.uniforms=It.uniforms;const Ot=Y.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ot.clippingPlanes=ut.uniform),ee(v,It),Y.needsLights=_e(v),Y.lightsStateVersion=lt,Y.needsLights&&(Ot.ambientLightColor.value=z.state.ambient,Ot.lightProbe.value=z.state.probe,Ot.directionalLights.value=z.state.directional,Ot.directionalLightShadows.value=z.state.directionalShadow,Ot.spotLights.value=z.state.spot,Ot.spotLightShadows.value=z.state.spotShadow,Ot.rectAreaLights.value=z.state.rectArea,Ot.ltc_1.value=z.state.rectAreaLTC1,Ot.ltc_2.value=z.state.rectAreaLTC2,Ot.pointLights.value=z.state.point,Ot.pointLightShadows.value=z.state.pointShadow,Ot.hemisphereLights.value=z.state.hemi,Ot.directionalShadowMap.value=z.state.directionalShadowMap,Ot.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ot.spotShadowMap.value=z.state.spotShadowMap,Ot.spotLightMatrix.value=z.state.spotLightMatrix,Ot.spotLightMap.value=z.state.spotLightMap,Ot.pointShadowMap.value=z.state.pointShadowMap,Ot.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function ht(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=ha.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function ee(v,N){const X=Lt.get(v);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Xt(v,N,X,Y,z){N.isScene!==!0&&(N=Yt),C.resetTextureUnits();const ot=N.fog,lt=Y.isMeshStandardMaterial?N.environment:null,It=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:an,Ut=(Y.isMeshStandardMaterial?O:S).get(Y.envMap||lt),Nt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!X.morphAttributes.position,Qt=!!X.morphAttributes.normal,ae=!!X.morphAttributes.color;let be=Mi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(be=x.toneMapping);const Ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=Ae!==void 0?Ae.length:0,Ht=Lt.get(Y),Me=f.state.lights;if(at===!0&&(Mt===!0||v!==M)){const je=v===M&&Y.id===A;ut.setState(Y,v,je)}let se=!1;Y.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Me.state.version||Ht.outputColorSpace!==It||z.isBatchedMesh&&Ht.batching===!1||!z.isBatchedMesh&&Ht.batching===!0||z.isBatchedMesh&&Ht.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ht.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ht.instancing===!1||!z.isInstancedMesh&&Ht.instancing===!0||z.isSkinnedMesh&&Ht.skinning===!1||!z.isSkinnedMesh&&Ht.skinning===!0||z.isInstancedMesh&&Ht.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ht.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ht.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ht.instancingMorph===!1&&z.morphTexture!==null||Ht.envMap!==Ut||Y.fog===!0&&Ht.fog!==ot||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ut.numPlanes||Ht.numIntersection!==ut.numIntersection)||Ht.vertexAlphas!==Nt||Ht.vertexTangents!==Vt||Ht.morphTargets!==Ot||Ht.morphNormals!==Qt||Ht.morphColors!==ae||Ht.toneMapping!==be||Ht.morphTargetsCount!==te)&&(se=!0):(se=!0,Ht.__version=Y.version);let He=Ht.currentProgram;se===!0&&(He=on(Y,N,z));let Xe=!1,Ne=!1,Nn=!1;const ye=He.getUniforms(),Ze=Ht.uniforms;if(Ct.useProgram(He.program)&&(Xe=!0,Ne=!0,Nn=!0),Y.id!==A&&(A=Y.id,Ne=!0),Xe||M!==v){Ct.buffers.depth.getReversed()?(dt.copy(v.projectionMatrix),_p(dt),bp(dt),ye.setValue(F,"projectionMatrix",dt)):ye.setValue(F,"projectionMatrix",v.projectionMatrix),ye.setValue(F,"viewMatrix",v.matrixWorldInverse);const cn=ye.map.cameraPosition;cn!==void 0&&cn.setValue(F,bt.setFromMatrixPosition(v.matrixWorld)),vt.logarithmicDepthBuffer&&ye.setValue(F,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ye.setValue(F,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ne=!0,Nn=!0)}if(z.isSkinnedMesh){ye.setOptional(F,z,"bindMatrix"),ye.setOptional(F,z,"bindMatrixInverse");const je=z.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),ye.setValue(F,"boneTexture",je.boneTexture,C))}z.isBatchedMesh&&(ye.setOptional(F,z,"batchingTexture"),ye.setValue(F,"batchingTexture",z._matricesTexture,C),ye.setOptional(F,z,"batchingIdTexture"),ye.setValue(F,"batchingIdTexture",z._indirectTexture,C),ye.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&ye.setValue(F,"batchingColorTexture",z._colorsTexture,C));const Qe=X.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&Dt.update(z,X,He),(Ne||Ht.receiveShadow!==z.receiveShadow)&&(Ht.receiveShadow=z.receiveShadow,ye.setValue(F,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ze.envMap.value=Ut,Ze.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(Ze.envMapIntensity.value=N.environmentIntensity),Ne&&(ye.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&Jt(Ze,Nn),ot&&Y.fog===!0&&mt.refreshFogUniforms(Ze,ot),mt.refreshMaterialUniforms(Ze,Y,K,J,f.state.transmissionRenderTarget[v.id]),ha.upload(F,ht(Ht),Ze,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ha.upload(F,ht(Ht),Ze,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ye.setValue(F,"center",z.center),ye.setValue(F,"modelViewMatrix",z.modelViewMatrix),ye.setValue(F,"normalMatrix",z.normalMatrix),ye.setValue(F,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const je=Y.uniformsGroups;for(let cn=0,La=je.length;cn<La;cn++){const Si=je[cn];T.update(Si,He),T.bind(Si,He)}}return He}function Jt(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function _e(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,N,X){Lt.get(v.texture).__webglTexture=N,Lt.get(v.depthTexture).__webglTexture=X;const Y=Lt.get(v);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,N){const X=Lt.get(v);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,X=0){U=v,w=N,P=X;let Y=!0,z=null,ot=!1,lt=!1;if(v){const Ut=Lt.get(v);if(Ut.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(Ut.__webglFramebuffer===void 0)C.setupRenderTarget(v);else if(Ut.__hasExternalTextures)C.rebindTextures(v,Lt.get(v.texture).__webglTexture,Lt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ot=v.depthTexture;if(Ut.__boundDepthTexture!==Ot){if(Ot!==null&&Lt.has(Ot)&&(v.width!==Ot.image.width||v.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(v)}}const Nt=v.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(lt=!0);const Vt=Lt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Vt[N])?z=Vt[N][X]:z=Vt[N],ot=!0):v.samples>0&&C.useMultisampledRTT(v)===!1?z=Lt.get(v).__webglMultisampledFramebuffer:Array.isArray(Vt)?z=Vt[X]:z=Vt,L.copy(v.viewport),q.copy(v.scissor),j=v.scissorTest}else L.copy(yt).multiplyScalar(K).floor(),q.copy(Ft).multiplyScalar(K).floor(),j=zt;if(Ct.bindFramebuffer(F.FRAMEBUFFER,z)&&Y&&Ct.drawBuffers(v,z),Ct.viewport(L),Ct.scissor(q),Ct.setScissorTest(j),ot){const Ut=Lt.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ut.__webglTexture,X)}else if(lt){const Ut=Lt.get(v.texture),Nt=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,X||0,Nt)}A=-1},this.readRenderTargetPixels=function(v,N,X,Y,z,ot,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Lt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(It=It[lt]),It){Ct.bindFramebuffer(F.FRAMEBUFFER,It);try{const Ut=v.texture,Nt=Ut.format,Vt=Ut.type;if(!vt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-Y&&X>=0&&X<=v.height-z&&F.readPixels(N,X,Y,z,b.convert(Nt),b.convert(Vt),ot)}finally{const Ut=U!==null?Lt.get(U).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(v,N,X,Y,z,ot,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Lt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(It=It[lt]),It){const Ut=v.texture,Nt=Ut.format,Vt=Ut.type;if(!vt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=v.width-Y&&X>=0&&X<=v.height-z){Ct.bindFramebuffer(F.FRAMEBUFFER,It);const Ot=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ot),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(N,X,Y,z,b.convert(Nt),b.convert(Vt),0);const Qt=U!==null?Lt.get(U).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,Qt);const ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await gp(F,ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ot),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(Ot),F.deleteSync(ae),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,N=null,X=0){v.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,v=arguments[1]);const Y=Math.pow(2,-X),z=Math.floor(v.image.width*Y),ot=Math.floor(v.image.height*Y),lt=N!==null?N.x:0,It=N!==null?N.y:0;C.setTexture2D(v,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,lt,It,z,ot),Ct.unbindTexture()};const he=F.createFramebuffer(),Ue=F.createFramebuffer();this.copyTextureToTexture=function(v,N,X=null,Y=null,z=0,ot=null){v.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,v=arguments[1],N=arguments[2],ot=arguments[3]||0,X=null),ot===null&&(z!==0?(hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=z,z=0):ot=0);let lt,It,Ut,Nt,Vt,Ot,Qt,ae,be;const Ae=v.isCompressedTexture?v.mipmaps[ot]:v.image;if(X!==null)lt=X.max.x-X.min.x,It=X.max.y-X.min.y,Ut=X.isBox3?X.max.z-X.min.z:1,Nt=X.min.x,Vt=X.min.y,Ot=X.isBox3?X.min.z:0;else{const Qe=Math.pow(2,-z);lt=Math.floor(Ae.width*Qe),It=Math.floor(Ae.height*Qe),v.isDataArrayTexture?Ut=Ae.depth:v.isData3DTexture?Ut=Math.floor(Ae.depth*Qe):Ut=1,Nt=0,Vt=0,Ot=0}Y!==null?(Qt=Y.x,ae=Y.y,be=Y.z):(Qt=0,ae=0,be=0);const te=b.convert(N.format),Ht=b.convert(N.type);let Me;N.isData3DTexture?(C.setTexture3D(N,0),Me=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Me=F.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Me=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const se=F.getParameter(F.UNPACK_ROW_LENGTH),He=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xe=F.getParameter(F.UNPACK_SKIP_PIXELS),Ne=F.getParameter(F.UNPACK_SKIP_ROWS),Nn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ot);const ye=v.isDataArrayTexture||v.isData3DTexture,Ze=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const Qe=Lt.get(v),je=Lt.get(N),cn=Lt.get(Qe.__renderTarget),La=Lt.get(je.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,La.__webglFramebuffer);for(let Si=0;Si<Ut;Si++)ye&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get(v).__webglTexture,z,Ot+Si),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.get(N).__webglTexture,ot,be+Si)),F.blitFramebuffer(Nt,Vt,lt,It,Qt,ae,lt,It,F.DEPTH_BUFFER_BIT,F.NEAREST);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||Lt.has(v)){const Qe=Lt.get(v),je=Lt.get(N);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,he),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ue);for(let cn=0;cn<Ut;cn++)ye?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qe.__webglTexture,z,Ot+cn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qe.__webglTexture,z),Ze?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,je.__webglTexture,ot,be+cn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,je.__webglTexture,ot),z!==0?F.blitFramebuffer(Nt,Vt,lt,It,Qt,ae,lt,It,F.COLOR_BUFFER_BIT,F.NEAREST):Ze?F.copyTexSubImage3D(Me,ot,Qt,ae,be+cn,Nt,Vt,lt,It):F.copyTexSubImage2D(Me,ot,Qt,ae,Nt,Vt,lt,It);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ze?v.isDataTexture||v.isData3DTexture?F.texSubImage3D(Me,ot,Qt,ae,be,lt,It,Ut,te,Ht,Ae.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,ot,Qt,ae,be,lt,It,Ut,te,Ae.data):F.texSubImage3D(Me,ot,Qt,ae,be,lt,It,Ut,te,Ht,Ae):v.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ot,Qt,ae,lt,It,te,Ht,Ae.data):v.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ot,Qt,ae,Ae.width,Ae.height,te,Ae.data):F.texSubImage2D(F.TEXTURE_2D,ot,Qt,ae,lt,It,te,Ht,Ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,He),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Nn),ot===0&&N.generateMipmaps&&F.generateMipmap(Me),Ct.unbindTexture()},this.copyTextureToTexture3D=function(v,N,X=null,Y=null,z=0){return v.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,v=arguments[2],N=arguments[3],z=arguments[4]||0),hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,N,X,Y,z)},this.initRenderTarget=function(v){Lt.get(v).__webglFramebuffer===void 0&&C.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?C.setTextureCube(v,0):v.isData3DTexture?C.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?C.setTexture2DArray(v,0):C.setTexture2D(v,0),Ct.unbindTexture()},this.resetState=function(){w=0,P=0,U=null,Ct.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}function dh(i,t){if(t===Hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===hc||t===Ku){let e=i.getIndex();if(e===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===hc)for(let a=1;a<=n;a++)s.push(e.getX(0)),s.push(e.getX(a)),s.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(e.getX(a)),s.push(e.getX(a+1)),s.push(e.getX(a+2))):(s.push(e.getX(a+2)),s.push(e.getX(a+1)),s.push(e.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class bx extends Fs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Sx(e)}),this.register(function(e){return new Ex(e)}),this.register(function(e){return new Dx(e)}),this.register(function(e){return new Ux(e)}),this.register(function(e){return new Fx(e)}),this.register(function(e){return new Tx(e)}),this.register(function(e){return new wx(e)}),this.register(function(e){return new Rx(e)}),this.register(function(e){return new Cx(e)}),this.register(function(e){return new yx(e)}),this.register(function(e){return new Px(e)}),this.register(function(e){return new Ax(e)}),this.register(function(e){return new Lx(e)}),this.register(function(e){return new Ix(e)}),this.register(function(e){return new vx(e)}),this.register(function(e){return new Nx(e)}),this.register(function(e){return new Ox(e)})}load(t,e,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=sr.extractUrlBase(t);a=sr.resolveURL(l,this.path)}else a=sr.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new pd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(u){e(u),r.manager.itemEnd(t)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Md){try{a[fe.KHR_BINARY_GLTF]=new kx(t)}catch(h){s&&s(h);return}r=JSON.parse(a[fe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Jx(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case fe.KHR_MATERIALS_UNLIT:a[h]=new Mx;break;case fe.KHR_DRACO_MESH_COMPRESSION:a[h]=new Bx(r,this.dracoLoader);break;case fe.KHR_TEXTURE_TRANSFORM:a[h]=new zx;break;case fe.KHR_MESH_QUANTIZATION:a[h]=new Hx;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function xx(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class vx{constructor(t){this.parser=t,this.name=fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const u=new qt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],an);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new md(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new bm(u),l.distance=h;break;case"spot":l=new gm(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,$n(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class Mx{constructor(){this.name=fe.KHR_MATERIALS_UNLIT}getMaterialType(){return $e}extendParams(t,e,n){const s=[];t.color=new qt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],an),t.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Le))}return Promise.all(s)}}class yx{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Sx{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new $t(o,o)}return Promise.all(r)}}class Ex{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ax{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Tx{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new qt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],an)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Le)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class wx{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Rx{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new qt().setRGB(o[0],o[1],o[2],an),Promise.all(r)}}class Cx{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Px{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new qt().setRGB(o[0],o[1],o[2],an),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Le)),Promise.all(r)}}class Ix{constructor(t){this.parser=t,this.name=fe.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Lx{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Dx{constructor(t){this.parser=t,this.name=fe.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class Ux{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Fx{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Nx{constructor(t){this.name=fe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}}class Ox{constructor(t){this.name=fe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const g of h){const _=new ie,m=new k,f=new Ln,y=new k(1,1,1),E=new qp(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,x),c.SCALE&&y.fromBufferAttribute(c.SCALE,x),E.setMatrixAt(x,_.compose(m,f,y));for(const x in c)if(x==="_COLOR_0"){const I=c[x];E.instanceColor=new dc(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Pe.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),p.push(E)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Md="glTF",js=12,fh={JSON:1313821514,BIN:5130562};class kx{constructor(t){this.name=fe.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Md)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-js,r=new DataView(t,js);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===fh.JSON){const l=new Uint8Array(t,js+a,o);this.content=n.decode(l)}else if(c===fh.BIN){const l=js+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Bx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=fe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=gc[u]||u.toLowerCase();o[h]=a[u]}for(const u in t.attributes){const h=gc[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[t.attributes[u]],p=xs[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(p)},o,l,an,d)})})}}class zx{constructor(){this.name=fe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Hx{constructor(){this.name=fe.KHR_MESH_QUANTIZATION}}class yd extends pr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let a=0;a!==s;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-e,h=(n-e)/u,d=h*h,p=d*h,g=t*l,_=g-l,m=-2*p+3*d,f=p-d,y=1-m,E=f-d+h;for(let x=0;x!==o;x++){const I=a[_+x+o],w=a[_+x+c]*u,P=a[g+x+o],U=a[g+x]*u;r[x]=y*I+E*w+m*P+f*U}return r}}const Gx=new Ln;class Vx extends yd{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return Gx.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ph={9728:rn,9729:pn,9984:Ou,9985:sa,9986:tr,9987:Zn},mh={33071:_i,33648:pa,10497:Ss},fo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wx={CUBICSPLINE:void 0,LINEAR:or,STEP:ar},po={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),i.DefaultMaterial}function Pi(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function $n(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function jx(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,u=t.length;l<u;l++){const h=t[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function qx(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kx(i){let t;const e=i.extensions&&i.extensions[fe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+mo(e.attributes):t=i.indices+":"+mo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+mo(i.targets[n]);return t}function mo(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function _c(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $x=new ie;class Jx{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new xx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new fm(this.options.manager):this.textureLoader=new vm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Pi(r,o,s),$n(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const a=e[s].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const a=t[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[fe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(sr.resolveURL(e.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const a=fo[s.type],o=xs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ce(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=fo[s.type],l=xs[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let E=e.cache.get(y);E||(_=new l(o,f*p,s.count*p/u),E=new Gp(_,p/u),e.cache.add(y,E)),m=new Fc(E,c,d%p/u,g)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),m=new Ce(_,c,g);if(s.sparse!==void 0){const f=fo.SCALAR,y=xs[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,I=new y(a[1],E,s.sparse.count*f),w=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new Ce(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,U=I.length;P<U;P++){const A=I[P];if(m.setX(A,w[P*c]),c>=2&&m.setY(A,w[P*c+1]),c>=3&&m.setZ(A,w[P*c+2]),c>=4&&m.setW(A,w[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const s=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=ph[d.magFilter]||pn,u.minFilter=ph[d.minFilter]||Zn,u.wrapS=mh[d.wrapS]||Ss,u.wrapT=mh[d.wrapT]||Ss,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==rn&&u.minFilter!==pn,s.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const a=s.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Oe(_);m.needsUpdate=!0,d(m)}),e.load(sr.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),$n(h,a),h.userData.mimeType=a.mimeType||Yx(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[fe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[fe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[fe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ld,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new cd,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return fr}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},l=[];if(c[fe.KHR_MATERIALS_UNLIT]){const h=s[fe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,e))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new qt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],an),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",h.baseColorTexture,Le)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=sn);const u=r.alphaMode||po.OPAQUE;if(u===po.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===po.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==$e&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new $t(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==$e&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==$e){const h=r.emissiveFactor;o.emissive=new qt().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&a!==$e&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Le)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),$n(h,r),e.associations.set(h,{materials:t}),r.extensions&&Pi(s,h,r),h})}createUniqueName(t){const e=ve.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return gh(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],u=Kx(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[fe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=gh(new Je,l,e),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?Xx(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=a[p];let f;const y=l[p];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Wp(_,y):new Te(_,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?f.geometry=dh(f.geometry,Ku):m.mode===Mn.TRIANGLE_FAN&&(f.geometry=dh(f.geometry,hc));else if(m.mode===Mn.LINES)f=new $p(_,y);else if(m.mode===Mn.LINE_STRIP)f=new kc(_,y);else if(m.mode===Mn.LINE_LOOP)f=new Jp(_,y);else if(m.mode===Mn.POINTS)f=new Zp(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&qx(f,r),f.name=e.createUniqueName(r.name||"mesh_"+t),$n(f,r),m.extensions&&Pi(s,f,m),e.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)e.associations.set(h[p],{meshes:t,primitives:p});if(h.length===1)return r.extensions&&Pi(s,h[0],r),h[0];const d=new ti;r.extensions&&Pi(s,d,r),e.associations.set(d,{meshes:t});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new nn(pp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Vc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),$n(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new ie;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Nc(o,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const p=s.channels[h],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],_=h[3],m=h[4],f=[];for(let y=0,E=d.length;y<E;y++){const x=d[y],I=p[y],w=g[y],P=_[y],U=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const A=n._createAnimationTracks(x,I,w,P,U);if(A)for(let M=0;M<A.length;M++)f.push(A[M])}return new pc(r,void 0,f)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,$x)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new ad:l.length>1?u=new ti:l.length===1?u=l[0]:u=new Pe,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),$n(u,r),r.extensions&&Pi(n,u,r),r.matrix!==void 0){const h=new ie;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new ti;n.name&&(r.name=s.createUniqueName(n.name)),$n(r,n),n.extensions&&Pi(e,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Dn||d instanceof Oe)&&h.set(d,p);return u.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){const a=[],o=t.name?t.name:t.uuid,c=[];pi[r.path]===pi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(pi[r.path]){case pi.weights:l=Rs;break;case pi.rotation:l=Cs;break;case pi.position:case pi.scale:l=Ps;break;default:switch(n.itemSize){case 1:l=Rs;break;case 2:case 3:default:l=Ps;break}break}const u=s.interpolation!==void 0?Wx[s.interpolation]:or,h=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+pi[r.path],e.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=_c(e.constructor),s=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Cs?Vx:yd;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Zx(i,t,e){const n=t.attributes,s=new mn;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new k(c[0],c[1],c[2]),new k(l[0],l[1],l[2])),o.normalized){const u=_c(xs[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new k,c=new k;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=_c(xs[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Bn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function gh(i,t,e){const n=t.attributes,s=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=gc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(t.indices!==void 0&&!i.index){const a=e.getDependency("accessor",t.indices).then(function(o){i.setIndex(o)});s.push(a)}return ge.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ge.workingColorSpace}" not supported.`),$n(i,t),Zx(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?jx(i,t.targets,e):i})}var Qx=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var y=new Uint8Array(f.length),E=0;E<f.length;++E){var x=f.charCodeAt(E);y[E]=x>96?x-97:x>64?x-39:x+4}for(var I=0,E=0;E<f.length;++E)y[I++]=y[E]<60?n[y[E]]:(y[E]-60)*64+y[++E];return y.buffer.slice(0,I)}function c(f,y,E,x,I,w){var P=r.exports.sbrk,U=E+3&-4,A=P(U*x),M=P(I.length),L=new Uint8Array(r.exports.memory.buffer);L.set(I,M);var q=f(A,E,x,M,I.length);if(q==0&&w&&w(A,U,x),y.set(L.subarray(A,A+E*x)),P(A-P(0)),q!=0)throw new Error("Malformed buffer data: "+q)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function p(f){var y={object:new Worker(f),pending:0,requests:{}};return y.object.onmessage=function(E){var x=E.data;y.pending-=x.count,y.requests[x.id][x.action](x.value),delete y.requests[x.id]},y}function g(f){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),E=new Blob([y],{type:"text/javascript"}),x=URL.createObjectURL(E),I=0;I<f;++I)h[I]=p(x);URL.revokeObjectURL(x)}function _(f,y,E,x,I){for(var w=h[0],P=1;P<h.length;++P)h[P].pending<w.pending&&(w=h[P]);return new Promise(function(U,A){var M=new Uint8Array(E),L=d++;w.pending+=f,w.requests[L]={resolve:U,reject:A},w.object.postMessage({id:L,count:f,size:y,source:M,mode:x,filter:I},[M.buffer])})}function m(f){a.then(function(){var y=f.data;try{var E=new Uint8Array(y.count*y.size);c(r.exports[y.mode],E,y.count,y.size,y.source,r.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:E},[E.buffer])}catch(x){self.postMessage({id:y.id,count:y.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,y,E,x,I){c(r.exports.meshopt_decodeVertexBuffer,f,y,E,x,r.exports[l[I]])},decodeIndexBuffer:function(f,y,E,x){c(r.exports.meshopt_decodeIndexBuffer,f,y,E,x)},decodeIndexSequence:function(f,y,E,x){c(r.exports.meshopt_decodeIndexSequence,f,y,E,x)},decodeGltfBuffer:function(f,y,E,x,I,w){c(r.exports[u[I]],f,y,E,x,r.exports[l[w]])},decodeGltfBufferAsync:function(f,y,E,x,I){return h.length>0?_(f,y,E,u[x],l[I]):a.then(function(){var w=new Uint8Array(f*y);return c(r.exports[u[x]],w,f,y,E,r.exports[l[I]]),w})}}})();function qc(){return new bx().setMeshoptDecoder(Qx)}let tv="";const Pa=i=>`${tv}${i}`,ev=.001,nv=.5,_h={playing:!1,settling:!1,stillFor:0,pending:1},Sd=i=>i.playing||i.settling||i.pending>0,iv=i=>!i.playing&&!i.settling,sv=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),rv=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,av=i=>Sd(i)?i:{...i,pending:1};function ov(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<ev?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<nv}}function bh(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const xh=new k(10,20,8).normalize();function cv(i){const t=new mn().setFromPoints(i).getCenter(new k);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function lv(i,t=()=>new _x({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=bh(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const a=e.domElement;a.style.width="100%",a.style.height="100%",a.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=Fu,i.appendChild(a);const o=new Hp;o.background=new qt(922903);const c=new nn(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const l=new md(16772564,4.8);l.position.copy(xh).multiplyScalar(40),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.radius=4,o.add(l,l.target,new pm(12571874,2902572,.9));let u=Math.min(devicePixelRatio,2);function h(){const W=bh(i,window,s),G=Math.min(devicePixelRatio,2),J=G!==u;if(J&&(u=G,e.setPixelRatio(u)),W.width!==s.width||W.height!==s.height){s=W,c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),A();for(const K of[...r])K()}else J&&(e.setSize(s.width,s.height,!1),A())}const d=typeof ResizeObserver=="function"?new ResizeObserver(h):null;d?d.observe(i):addEventListener("resize",h);let p=null;const g=()=>{_(),h()};function _(){p==null||p.removeEventListener("change",g),p=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,p==null||p.addEventListener("change",g)}_();let m=!0,f=!1,y=0;function E(){f||(f=!0,y=requestAnimationFrame(j))}function x(){m=!document.hidden,m&&(L=-1,E())}document.addEventListener("visibilitychange",x);let I=!0,w=_h,P=0;const U=new k;function A(){w=av(w),m&&(f||(L=-1),E())}let M=()=>{},L=-1;function q(W,G){M(W,G),e.render(o,c),P++}function j(W){if(f=!1,!m)return;const G=L<0?0:(W-L)/1e3;L=W,U.copy(c.position),q(G,W),w=ov(w,U.distanceTo(c.position),G),I||Sd(w)?E():L=-1}function $(W){if(!W.length)return;const{centre:G,radius:J,distance:K,far:st}=cv(W);l.target.position.copy(G),l.target.updateMatrixWorld(),l.position.copy(xh).multiplyScalar(K).add(G);const rt=l.shadow.camera;rt.left=-J,rt.right=J,rt.top=J,rt.bottom=-J,rt.near=.5,rt.far=st,rt.updateProjectionMatrix()}return{scene:o,camera:c,renderer:e,fitShadow:$,size:()=>({...s}),remeasure:h,onBox(W){return r.add(W),()=>{r.delete(W)}},start(W){M=W,E()},park(W){M===W&&(cancelAnimationFrame(y),f=!1,M=()=>{},w=_h,P=0,L=-1)},step(W,G=performance.now()){q(W,G)},frames:()=>P,rule:{enable(){I=!1},play(){w=sv(w),A()},pause(){w=rv(w),A()},wake:A,snap:()=>iv(w)},dispose(){m=!1,r.clear(),p==null||p.removeEventListener("change",g),d?d.disconnect():removeEventListener("resize",h),document.removeEventListener("visibilitychange",x),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function hv(i,t){for(const e of t)e.traverse(n=>{var r;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of Ad(s))a.userData.drillOwned&&a.dispose()}),i.remove(e);Ed(i)}function Ed(i){i.traverse(t=>{var n;const e=t;(n=e.geometry)==null||n.dispose();for(const s of Ad(e)){for(const r of Object.values(s)){const a=r;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}s.dispose()}})}const Ad=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function uv(i){const t=new Map,e=new Map,n=i.clone();return Td(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Td(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Td(i.children[n],t.children[n],e)}const dv=["shirt","jersey","top","tshirt"];let Ii=null;async function fv(i,t,e=Pa("assets/ochi.glb"),n){if(!Ii||Ii.url!==e){const r=await qc().loadAsync(e),a=r.scene.children.filter(o=>{let c=!1;return o.traverse(l=>{c||(c=l.isSkinnedMesh)}),c});Ii={variants:a.length?a:[r.scene],clips:r.animations,url:e}}const s=[];for(let r=0;r<t;r++){const a=Ii.variants.length>1,o=uv(Ii.variants[r%Ii.variants.length]);o.traverse(l=>{l.castShadow=l.type==="SkinnedMesh",a&&l.isBone&&(l.name=l.name.replace(/_\d+$/,""))}),i.add(o);const c=new Um(o);s.push({root:o,mixer:c,clips:new Map(Ii.clips.map(l=>[l.name,l]))})}return s}const vh=new WeakMap;function pv(i){let t=vh.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),vh.set(i.root,t)),t}function mv(i,t){i.root.traverse(e=>{const n=e;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).forEach((r,a)=>{const o=(r.name||n.name).toLowerCase();if(dv.some(c=>o.includes(c))){const c=r.clone();c.userData.drillOwned=!0,c.color=new qt(t),Array.isArray(n.material)?n.material[a]=c:n.material=c}})})}const Mh=["technical","tactical","physical","social"],yh=["auto","authored","off"],Sh=["save","beaten"],Wr=["throw","roll","kick"],Eh=["lofted","ground"],gv=3.35,_v=1,Ah=12,bc=["walk","jog","run","sprint"],Th=["walk","jog","run"],bv=new Set(["move","dribble","pass","shoot","tackle","collect"]),wh=/^#[0-9a-fA-F]{6}$/;function jt(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function mi(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&jt(t,"expected [x, y] numbers"),i}function xv(i){var a,o,c,l,u;const t=i;t.version!==1&&jt("version","must be 1"),((a=t.pitch)==null?void 0:a.width)>0&&((o=t.pitch)==null?void 0:o.length)>0||jt("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&jt("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&jt("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||jt("teams","at least one team");for(const h of e){const d=(l=(c=t.teams[h])==null?void 0:c.kit)==null?void 0:l.primary;(typeof d!="string"||!wh.test(d))&&jt(`teams.${h}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||jt("players","expected an array");const n=new Set,s=new Set;t.players.forEach((h,d)=>{(!h.id||n.has(h.id))&&jt(`players[${d}].id`,"missing or duplicate"),n.add(h.id),e.has(h.team)||jt(`players[${d}].team`,`unknown team ${h.team}`),mi(h.start,`players[${d}].start`),h.role!==void 0&&h.role!=="keeper"&&jt(`players[${d}].role`,`expected "keeper" or absent, got ${String(h.role)}`),h.role==="keeper"&&s.add(h.id)}),mi((u=t.ball)==null?void 0:u.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&jt("ball.static","expected a boolean or absent"),(t.equipment??[]).forEach((h,d)=>{h.type!=="cone"&&h.type!=="goal"&&jt(`equipment[${d}].type`,String(h.type)),mi(h.at,`equipment[${d}].at`)});const r=(h,d)=>{n.has(h)||jt(d,`unknown player ${h}`)};if(Array.isArray(t.events)||jt("events","expected an array"),t.events.forEach((h,d)=>{var p;if((typeof h.t!="number"||h.t<0)&&jt(`events[${d}].t`,"seconds >= 0 required"),bv.has(h.type)||jt(`events[${d}].type`,`unknown type ${h.type}`),h.type==="move"&&(r(h.player,`events[${d}].player`),mi(h.to,`events[${d}].to`),h.gait!==void 0&&!bc.includes(h.gait)&&jt(`events[${d}].gait`,`expected one of ${bc.join("|")}, got ${String(h.gait)}`)),h.type==="dribble"&&(r(h.player,`events[${d}].player`),mi(h.to,`events[${d}].to`),h.gait!==void 0&&!Th.includes(h.gait)&&jt(`events[${d}].gait`,`expected one of ${Th.join("|")}, got ${String(h.gait)}`)),(h.type==="move"||h.type==="dribble")&&h.runPath!==void 0&&typeof h.runPath!="boolean"&&jt(`events[${d}].runPath`,`expected a boolean, got ${String(h.runPath)}`),h.type==="pass"){if(r(h.from,`events[${d}].from`),r(h.to,`events[${d}].to`),h.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(h.flightStyle)&&jt(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(h.flightStyle)}`),h.loft!==void 0&&!(typeof h.loft=="number"&&h.loft>0)&&jt(`events[${d}].loft`,"expected a number > 0 (metres)"),h.style!==void 0&&(Wr.includes(h.style)||jt(`events[${d}].style`,`expected one of ${Wr.join("|")}, got ${String(h.style)}`),s.has(h.from)||jt(`events[${d}].style`,`distribution styles are keeper-only; ${h.from} is not a keeper`)),h.toFeet!==void 0&&(typeof h.toFeet!="boolean"&&jt(`events[${d}].toFeet`,`expected a boolean, got ${String(h.toFeet)}`),s.has(h.to)||jt(`events[${d}].toFeet`,`toFeet is keeper-only; ${h.to} is not a keeper`),h.toFeet&&h.flightStyle!==void 0&&h.flightStyle!=="ground")){let g=[...((p=t.players.find(_=>_.id===h.to))==null?void 0:p.start)??[0,0]];for(let _=0;_<d;_++){const m=t.events[_];(m.type==="move"||m.type==="dribble")&&m.player===h.to&&(g=[...m.to])}for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const m=Math.hypot(g[0]-_.at[0],g[1]-_.at[1]);m<Ah&&jt(`events[${d}].toFeet`,`a ${h.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${h.to} meets it ${m.toFixed(1)} m from the goal at [${_.at[0]}, ${_.at[1]}] (needs ${Ah} m)`)}}h.fromFeet!==void 0&&(typeof h.fromFeet!="boolean"&&jt(`events[${d}].fromFeet`,`expected a boolean, got ${String(h.fromFeet)}`),s.has(h.from)||jt(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${h.from} is not a keeper`),h.fromFeet&&t.events.some((g,_)=>_<d&&g.type!=="move")&&jt(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((h.type==="pass"||h.type==="shoot")&&h.deflect!==void 0){const g=h.deflect;(typeof g!="object"||g===null||Array.isArray(g))&&jt(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),mi(g.to,`events[${d}].deflect.to`),Eh.includes(g.style)||jt(`events[${d}].deflect.style`,`expected one of ${Eh.join("|")}, got ${String(g.style)}`),h.type==="pass"&&!s.has(h.to)&&jt(`events[${d}].deflect`,`deflections are keeper-only; ${h.to} is not a keeper`),h.type==="shoot"&&!(h.flightStyle==="ground"&&g.style==="ground")&&!s.size&&jt(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const _ of t.equipment??[]){if(_.type!=="goal"||Math.abs(g.to[0]-_.at[0])>gv)continue;(_.at[1]<=t.pitch.length/2?g.to[1]-_.at[1]:_.at[1]-g.to[1])<=_v&&jt(`events[${d}].deflect.to`,`[${g.to[0]}, ${g.to[1]}] is inside the goal mouth at [${_.at[0]}, ${_.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}h.type==="tackle"&&(r(h.player,`events[${d}].player`),r(h.from,`events[${d}].from`),h.from===h.player&&jt(`events[${d}].from`,"a player cannot tackle himself")),h.type==="collect"&&r(h.player,`events[${d}].player`),h.type==="shoot"&&(r(h.player,`events[${d}].player`),mi(h.at,`events[${d}].at`),h.flight!==void 0&&!(typeof h.flight=="number"&&h.flight>0)&&jt(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),h.corner!==void 0&&h.corner!=="left"&&h.corner!=="right"&&jt(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(h.corner)}`),h.flightStyle!==void 0&&h.flightStyle!=="ground"&&jt(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(h.flightStyle)}`),h.style!==void 0&&(Wr.includes(h.style)||jt(`events[${d}].style`,`expected one of ${Wr.join("|")}, got ${String(h.style)}`),s.has(h.player)||jt(`events[${d}].style`,`distribution styles are keeper-only; ${h.player} is not a keeper`),h.flightStyle!=="ground"&&jt(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(h.type==="pass"||h.type==="shoot")&&h.header!==void 0&&typeof h.header!="boolean"&&jt(`events[${d}].header`,`expected a boolean, got ${String(h.header)}`)}),t.overlays!==void 0){const h=t.overlays;(typeof h!="object"||h===null||Array.isArray(h))&&jt("overlays","expected an object"),h.runPaths!==void 0&&!yh.includes(h.runPaths)&&jt("overlays.runPaths",`expected one of ${yh.join("|")}, got ${String(h.runPaths)}`),h.zones!==void 0&&(Array.isArray(h.zones)||jt("overlays.zones","expected an array"),h.zones.forEach((d,p)=>{mi(d.at,`overlays.zones[${p}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||jt(`overlays.zones[${p}]`,"w/h metres > 0 required"),d.color!==void 0&&!Mh.includes(d.color)&&!wh.test(d.color)&&jt(`overlays.zones[${p}].color`,`expected ${Mh.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&jt(`overlays.zones[${p}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&jt("keeper","expected { outcome: save | beaten }"),Sh.includes(t.keeper.outcome)||jt("keeper.outcome",`expected one of ${Sh.join("|")}, got ${String(t.keeper.outcome)}`)),t}const Kc=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function mr(i){const t=Kc(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0;if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const r=n*n/(2*e),a=(n*n-s*s)/(2*e);if(r+a<=t){const c=t-r-a;return{D:t,t1:n/e,t2:c/n,t3:(n-s)/e,d1:r,d2:c,peak:n}}const o=Math.sqrt(e*t+s*s/2);return{D:t,t1:o/e,t2:0,t3:(o-s)/e,d1:o*o/(2*e),d2:0,peak:o}}function Re(i){const t=mr(i);return t.t1+t.t2+t.t3}function Un(i,t){const e=mr(i),n=e.t1+e.t2+e.t3,s=Math.min(Math.max(t-i.t0,0),n),r=i.accel;let a,o;if(s<=e.t1)a=.5*r*s*s,o=r*s;else if(s<=e.t1+e.t2)a=e.d1+e.peak*(s-e.t1),o=e.peak;else{const l=s-e.t1-e.t2;a=e.d1+e.d2+e.peak*l-.5*r*l*l,o=e.peak-r*l}const c=e.D>0?a/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*c,i.from[1]+(i.to[1]-i.from[1])*c],speed:o}}const vv=.25,wd=8*Math.PI/180,Mv=6*Math.PI/180,Rh=5*Math.PI/180,Ch=wd/4;function Ph(i,t){let e=[0,0];for(const n of i)if(t>=n.t0){if(t>n.t0+Re(n)){e=[0,0];continue}const s=Kc(n.from,n.to);if(s<=0){e=[0,0];continue}const{speed:r}=Un(n,t);e=[(n.to[0]-n.from[0])/s*r,(n.to[1]-n.from[1])/s*r]}return e}function yv(i,t,e=vv){const n=Ph(i,t),s=Ph(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}function Sv(i,t){const e=i[0]*Math.sin(t)+i[1]*Math.cos(t),n=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:Math.min(wd,Math.max(-Mv,e*Ch)),roll:Math.min(Rh,Math.max(-Rh,-n*Ch))}}const Ev=2.5;function Av(i,t){let e=0;for(const n of i)t>=n.t0&&(e=mr(n).peak);return Math.min(1,e/Ev)}const Tv=.035,wv=.1,Ih=.4,Rv=1;function Cv(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||Kc(s.from,s.to)<Rv)continue;const r=s.t0+Re(s)-wv,a=(t-r)/Ih;a<=0||a>=1||i.some(o=>o.t0>s.t0&&o.t0<=r+Ih)||(e=Math.max(e,Tv*.5*(1-Math.cos(2*Math.PI*a))))}return e}function Ie(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function Pv(i,t=0){return i-t}function Yc(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function Iv(i,t=58*Math.PI/180,e=.85){const n=Yc(i);return Math.min(t,Math.max(-t,n))*e}const Lv=1.2,go=180*Math.PI/180,_o=120*Math.PI/180,Lh=70*Math.PI/180;function Rd(i){return i<=0?go:i<=2.3?go+(_o-go)*i/2.3:i>=5.48?Lh:_o+(Lh-_o)*(i-2.3)/(5.48-2.3)}const Dv=.12,Dh=15*Math.PI/180;function Uv(i){return Math.max(-Dh,Math.min(Dh,i*Dv))}const Fv=.001;function Bi(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=Fv}function Nv(i,t,e,n){return e||n||!Bi(i,t)?null:Ie(i,t)}function Uh(i,t,e,n=Math.PI*2){const s=t-i,r=Yc(s),a=r===Math.PI&&s<0?-Math.PI:r,o=n*e;return Math.abs(a)<=o?i+a:i+Math.sign(a)*o}const Ov=2.3,Xr=1.1,kv=1.15,Fh=.6,Nh=1.2,ua=.88,Bv=1-ua,zv=.15,jr=.28;function Hv(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?kv:Ov),a=i.fromHeight??0,o=i.toHeight??(n==="shot"?Fh:0),c=a*(1-e)+o*e;let l;if(n==="clipped"){const u=i.loft??Nh;l=(e<ua?u*Math.sin(Math.PI*e/ua):zv*u*Math.sin(Math.PI*(e-ua)/Bv))+c}else if(n==="lofted")l=(i.loft??Nh)*Math.sin(Math.PI*e)+c;else if(n==="shot")l=c;else if(n==="headed"){const u=i.loft??0;l=e<=jr?a+(u-a)*Math.sin(Math.PI/2*(e/jr)):o+(u-o)*Math.cos(Math.PI/2*((e-jr)/(1-jr)))}else n==="drop"?l=(i.fromHeight??Fh)*(1-e*e):l=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:l,done:e>=1}}const vn=2.52,Li=4,qs=.8,qr=1,os=.3,Ks=.6,bn=.15,Gv=.5,On=.45,Cd=.4,Pd=.7,Oh=Math.PI/12,cs=4,Vv=.6,kh=.4,Wv=.3,Xv=.15,jv=.4,qv=.35,Kr=.3,Kv=Math.PI/4,Yv={left:"gk_dive_a",right:"gk_dive_b"},Id=4,$v=.12,Jv=.25,Zv=.35;function Bh(i){return Math.min(Jv,Math.max($v,i*Zv))}const Qv=1.3,tM=.15;function zh(i,t,e){const n=i-tM,s=i+t-n,r=Math.min(Qv,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const eM=1.8,Hh=.3,nM=.7,iM=.9,sM=2.5,hn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},Yr={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},rM=.8;function aM(i,t,e){const n=Id*i,s=Math.sqrt(Math.max(0,n*n-e*e));return Math.max(0,s-(lr-kd)*t)}const oM=3;function cM(i,t,e){if(t<=0)return null;const n=Math.min(oM,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const wn=1,$r=.25,bo=.5,Gh=.8,lM=.4,Ld=3,hM=.6,uM=2.3,Vh=.9,ls=.3,Wh=.4,dM=12,fM=8,pM=3,mM=.25;function Xh(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(xc,r/fM),style:"ground",...t?{fromHeight:t}:{}};const a=Math.max(mM*r,pM)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(xc,r/dM),style:"lofted",loft:Math.max(.1,a-t/2),...t?{fromHeight:t}:{}}}const gM=.6,xc=.2;function _M(i,t,e){const n=gM*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(xc,e/n)}const jh=16,bM=2.44;function da(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function Dd(i,t,e){const n=da(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,a=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(a*a*(3-2*a))}const xo=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],qh="jog_back_a",Ys=.5,xM=.5,Kh=.5,vM=.2,Yh=.8,MM=.5,yM=1.6,Jr={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},SM=3,EM=.1,$h=["walk","jog","run"],AM=.5,TM=1.5*AM,wM=12,RM=.15;function CM(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=lr*t;e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function PM(i,t,e){let n=[...i];for(let s=0;s<8;s++){let r=null,a=0;for(const l of t){const u=Math.hypot(n[0]-l[0],n[1]-l[1]);e-u>a+1e-9&&(a=e-u,r=l)}if(!r)return n;const o=[n[0]-r[0],n[1]-r[1]],c=Math.hypot(o[0],o[1])>1e-6?Ve(o):[1,0];n=[r[0]+e*c[0],r[1]+e*c[1]]}return n}function Jh(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function Zh(i,t,e){let n=null;for(const s of i)s.t0<=e&&(!n||s.t0>=n.t0)&&(n=s);return n?{at:[...n.to],moving:e<n.t0+n.duration}:{at:[...t],moving:!1}}function IM(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?Ve([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=we+EM?null:[t[0]-we*s[0],t[1]-we*s[1]],a=e?Ve([e[0]-t[0],e[1]-t[1]]):s,o=Math.min(Math.max(we,Cd),Pd);return{stepTo:r,set:[t[0]+o*a[0],t[1]+o*a[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function LM(i){return i<15?"roll":i<30?"throw":"kick"}function Ud(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,a=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(a[0]-i[0],a[1]-i[1]),at:a}}function DM(i,t,e,n,s){const{reach:r,at:a}=Ud(i,e,n);if(r>Ld*s)return null;const o=Ve([e[0]-i[0],e[1]-i[1]]);if(r<=hM*s)return{kind:"catch",clip:hn.catch.id,clipDuration:hn.catch.duration,contactOffset:hn.catch.contact,contact:[i[0]+we*o[0],i[1]+we*o[1]],travelTo:null};const c=zd(i,t,n),l=hn.dive[c],u=Ve([a[0]-i[0],a[1]-i[1]]),h=Math.min(uM*s,Math.max(0,r-l.reach*s));return{kind:"dive",clip:l.id,clipDuration:l.duration,contactOffset:l.contact,contact:a,side:c,travelTo:[i[0]+h*u[0],i[1]+h*u[1]]}}function UM(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],a=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,o=[t[0]+a*s[0],t[1]+a*s[1]];let c=[i[0]-o[0],i[1]-o[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const l=Ve(c);return[o[0]+Hh*n*l[0],o[1]+Hh*n*l[1]]}function Fd(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function Nd(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let a=1/0;for(const o of t??[])o.t0>=r.t0&&o.t0<a&&(a=o.t0);n<a&&(s=Fd(r,n))}return s}const FM=[{id:"header_a",duration:1.9,contact:1}],NM=1.57,Qh=.1,tu=.6,vo=2,Zr=.02,Mo=.6,OM=2.5,kM=.22,BM=3,zM=6.5;function yo(i,t){return Math.min(Math.max(kM*i,BM),zM)*t}const HM=10,GM=1.7;function VM(i,t,e,n){const s=e??[t[0],t[1]],r=Ve([s[0]-i[0],s[1]-i[1]]),a=[i[0]+Qh*n*r[0],i[1]+Qh*n*r[1]],o=FM[0];return{contact:a,height:NM*n,clip:o,set:[i[0]+we*r[0],i[1]+we*r[1]],faceAt:s}}const eu=.4,WM=.3,XM=18,jM=10,qM=.45,KM=.8,fa={id:"strike_jog_a",contact:.4},YM=1,$M={strike_jog_a:{loop:!1,category:"shoot",ballContact:fa.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function Od(i){var t;for(const[e,n]of Object.entries($M))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const nu=.15,JM=.2,lr=3.35,kd=.5;function ZM(i,t,e,n,s=1){let r=null,a=1/0;for(const p of e){const g=Math.hypot(p[0]-t[0],p[1]-t[1]);g<a&&(a=g,r=p)}if(!r||a>lr*s+1)return[...t];const o=(lr-kd)*s,c=[[r[0]-o,r[1]],[r[0]+o,r[1]]];if(n){const p=Ie(i,r),g=_=>(_[0]-i[0])*Math.cos(p)-(_[1]-i[1])*Math.sin(p);return c.sort((_,m)=>g(m)-g(_)),n==="left"?c[0]:c[1]}const l=Math.hypot(c[0][0]-i[0],c[0][1]-i[1]),u=Math.hypot(c[1][0]-i[0],c[1][1]-i[1]);if(Math.abs(l-u)>1e-6)return l>u?c[0]:c[1];const h=Math.hypot(c[0][0]-t[0],c[0][1]-t[1]),d=Math.hypot(c[1][0]-t[0],c[1][1]-t[1]);return h<d-1e-6?c[0]:c[1]}function QM(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const Bd=.35;let we=Bd;function iu(i){we=i}function ty(){return we/Bd}function Di(i,t){return[i[0]+we*Math.sin(t),i[1]+we*Math.cos(t)]}function zd(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function Ve(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function su(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function ey(i,t,e){const n=Ve([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=Ve([e[0]-i[0],e[1]-i[1]]);const p=n[0]*s[1]-n[1]*s[0];r=Math.abs(p)<1e-6?1:Math.sign(p)}else r=1,s=su([-n[0],-n[1]],-r*Oh);const a=su(n,r*Oh),o=[i[0]+we*a[0],i[1]+we*a[1]],c=[i[0]+we*s[0],i[1]+we*s[1]],l=[c[0]-o[0],c[1]-o[1]],u=Math.hypot(l[0],l[1]),h=u>1e-6?[l[0]/u,l[1]/u]:s,d=Math.min(Math.max(u,Cd),Pd);return{contact:o,set:[o[0]+d*h[0],o[1]+d*h[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const ny=.5,iy=1.4,ru={walk:.8,jog:1.2,run:2.2},sy=.25,ry=.7,ay=.3,oy=2,$s=.4,cy=10,ly=8,hy=2.5,au=6,uy=2,ou=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],cu=1.4;function lu(i,t,e){const n=i.t0+Re(i),s=So(i,t);let r=0,a=Math.max(n-t,.001);if(So(i,t+a)-s<=e)return a;for(let o=0;o<48;o++){const c=(r+a)/2;So(i,t+c)-s>=e?a=c:r=c}return Math.max(a,.001)}function So(i,t){const e=Un(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function dy(i,t,e,n,s,r={}){const a=Re(i);if(a<=0)return{flights:[],touches:[],restEnd:i.t0};const o=Ve([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=Ie(i.from,i.to),l=[Math.cos(c),-Math.sin(c)],u=P=>(P[0]-i.from[0])*o[0]+(P[1]-i.from[1])*o[1],h=i.t0+a,d=u(e),p=ty(),g=(r.others??[]).filter(P=>Math.abs((P[0]-i.from[0])*Math.cos(c)-(P[1]-i.from[1])*Math.sin(c))<=uy).map(P=>u(P)),_=ry*p,m=sy*p,f=P=>u(Un(i,P).pos),y=[],E=[];let x=i.t0,I=[...t];const w=Math.ceil(mr(i).D/(.5*Math.min(n,$s*3)))+8;for(let P=0;;P++){E.push(x);const U=u(I),A=d-U,M=r.turnOut?$s:n,L=$s*(1+cu),q=P===0&&!!r.turnIn||!!r.turnOut&&A<=L,j=q?we:_;if(A<=cu*M||P===w-1||d-(f(x)+j)<.05){const F=Math.hypot(e[0]-I[0],e[1]-I[1]);let me=x;if(F>1e-6){const Gt=Math.max(Un(i,x).speed,ny*i.cruise),vt=Math.min(2*F/(Gt+Xr*(F/Gt)/2),Math.max(h-x,.2));y.push({from:I,to:[...e],t0:x,duration:vt,style:"push",endFrac:0}),me=x+vt}return me<h&&y.push({from:[...e],to:[...e],t0:me,duration:h-me,style:"ground"}),{flights:y,touches:E,restEnd:Math.max(me,h)}}let $=q?$s:n;if(!q&&A>cy){let F=A;for(const me of g)me>U&&(F=Math.min(F,me-U));$*=Math.min(Math.max(F/ly,1),hy)}const W=$;$*=1+ou[P%ou.length],!q&&r.turnOut&&A-$<L&&($=Math.max(A-L,$s));const G=Math.min($,iy*i.cruise*i.cruise/Xr),J=lu(i,x,G),K=Math.max(i.cruise*J-G,0),st=Math.min(j,U-f(x)+K),rt=f(x)+st,yt=Math.max(U,rt),Ft=W>oy?s:s*(P%2?-1:1),zt=Math.min(m,ay*G),Z=(I[0]-i.from[0])*l[0]+(I[1]-i.from[1])*l[1],at=Math.abs(Ft*zt-Z),Mt=Math.sqrt(Math.max(au*au-at*at,0)),dt=Math.min(yt+G,U+Mt,d),kt=lu(i,x,dt-rt),bt=(dt-U)/kt,pt=bt+Xr*kt/2,Yt=bt-Xr*kt/2,Wt=[i.from[0]+o[0]*dt+l[0]*Ft*zt,i.from[1]+o[1]*dt+l[1]*Ft*zt],oe={from:I,to:Wt,t0:x,duration:kt,style:"push",endFrac:Math.max(Yt,0)/pt};y.push(oe),I=[...Wt],x+=kt}}function si(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function Yn(i,t,e){const n=si(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const fy=.3;function Hd(i){const t=bc.filter(e=>{var n;return(n=i.groups[e])==null?void 0:n.length}).map(e=>({gait:e,clipSpeed:i.clips[i.groups[e][0]].speed??vn})).sort((e,n)=>e.clipSpeed-n.clipSpeed);return t.map((e,n)=>({gait:e.gait,min:n===0?fy:Math.sqrt(t[n-1].clipSpeed*e.clipSpeed),clipSpeed:e.clipSpeed}))}function Gd(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function py(i,t){const e=mr(i),n=e.t1+e.t2+e.t3;if(n<=0||!t.length)return[];const s=i.endSpeed??0,r=new Set([0,n]);for(const c of t)c.min>e.peak||(r.add(c.min/i.accel),c.min>s&&r.add(n-(c.min-s)/i.accel));const a=[...r].sort((c,l)=>c-l),o=[];for(let c=0;c+1<a.length;c++){if(a[c+1]-a[c]<1e-9)continue;const l=Gd(t,Un(i,i.t0+(a[c]+a[c+1])/2).speed);if(!l)continue;const u=o[o.length-1];u&&u.gait===l.gait&&Math.abs(u.t1-(i.t0+a[c]))<1e-9?u.t1=i.t0+a[c+1]:o.push({gait:l.gait,t0:i.t0+a[c],t1:i.t0+a[c+1]})}return gy(o)}const my=.3;function gy(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=my;for(let o=0;o<t.length;o++){const c=t[o].t1-t[o].t0;c<s-1e-9&&(s=c,n=o)}if(n<0)break;const r=t[n-1],a=t[n+1];a&&(!r||a.t1-a.t0>r.t1-r.t0)?a.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let o=0;o+1<t.length;)t[o].gait===t[o+1].gait?(t[o].t1=t[o+1].t1,t.splice(o+1,1)):o++}return t}const $c=.85,xi=1.15,hu=.5;function Vd(i){return hu+($c-hu)*Math.min(1,Math.max(0,i))}function _y(i,t){const e=i/t;return e>xi?xi:Math.max(Vd(e),e)}function by(i,t){return Math.min(xi,Math.max($c,i/t))}function xy(i,t,e){const n=i.findIndex(l=>l.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=$c&&r<=xi)return{timeScale:r,partner:null,weight:0};const a=i[r>xi?n+1:n-1];if(!a)return{timeScale:r>xi?xi:Math.max(Vd(r),r),partner:null,weight:0};const o=Math.min(1,Math.max(0,(t-s.clipSpeed)/(a.clipSpeed-s.clipSpeed))),c=(1-o)*s.clipSpeed+o*a.clipSpeed;return{timeScale:by(t,c),partner:a.gait,weight:o}}const vy=new Set(["pass","shoot","receive","header","defensive"]),va=new Set(["turn","transition"]),ri=.15,My=.1,yy=.3,Sy=.45,Ey=.2,Ay=.12,Ty=.6;function Jc(i,t){var e;return vy.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function Wd(i,t,e){var r,a;if(Jc(i,t))return My;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(a=i.clips[e])==null?void 0:a.category:void 0;return va.has(n??"")?ri:n==="idle"?s==="idle"?Ty:s==="locomotion"?Ay:Ma:n==="locomotion"&&s==="locomotion"?Ey:va.has(s??"")?ri:Ma}function Xd(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?Sy:va.has(e??"")?ri:Jc(i,t)?yy:Ma}function wy(i,t,e){var n;return Jc(i,t)||va.has(((n=i.clips[t])==null?void 0:n.category)??"")?Xd(i,t):Wd(i,e,t)}const Ye=Math.PI/180,Jn={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*Ye,t50:.567,t90:.8,peak:159*Ye,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*Ye,t50:.533,t90:.8,peak:213*Ye,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*Ye,t50:.4,t90:.6,peak:366*Ye,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*Ye,t50:.767,t90:1.033,peak:192*Ye,standing:!1}};function Eo(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[a,o]=e[n+1];if(t<=a)return a-s>1e-9?r+(o-r)*(t-s)/(a-s):o}return 1}function jd(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+ri&&(n=s);return n}function Ry(i,t,e,n){const s=jd(i,t,e);if(!s)return null;const r=Jn[s.clip],a=s.end-s.t0,o=s.offset+Math.min(e-s.t0,a),c=Eo(r,s.offset),l=Eo(r,s.offset+a),u=Eo(r,o),h=l-c>1e-9?(u-c)/(l-c):1,d=n??s.from,p=n===void 0?s.to-s.from:Ni(n,s.to),g=Math.min(1,(e-s.t0)/ri),_=e<=s.end?1:Math.max(0,1-(e-s.end)/ri),m=Math.max(0,Math.min(g,_));return{heading:d+p*h,clipYaw:r.yaw*u*m}}function Cy(i,t){return i.peak+Rd(t)}function Py(i,t,e){const n=Math.abs(i);return n<vc?null:n>Hy&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const vc=45*Ye,uu=60*Ye,Iy=.3,Ly=.5,Dy=.7,Uy=130*Ye,Qr=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],du={left:"strafe_l_a",right:"strafe_r_a"},Fy=3.2,Ny=3.2,qd=60*Ye,Oy=120*Ye,fu=[{id:"jog_back_diag_a",axis:225.5*Ye,speed:2.04},{id:"jog_back_diag_b",axis:135.5*Ye,speed:2.27}],ky=3;function By(i,t){if(Math.abs(i)>qd)return null;const e=i>=0?fu[0]:fu[1];return t<=e.speed*xi?{id:e.id,axis:e.axis}:null}function zy(i,t){const e=Math.abs(i);return e<=qd?t>Fy?null:t>(Qr[0].speed+Qr[1].speed)/2?Qr[1].id:Qr[0].id:e>Oy||t>Ny?null:i>0?du.right:du.left}const Hy=120*Ye;function Ni(i,t){return Yc(t-i)}const Ma=.25;function ms(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?JM:0,s=t.contact??e.ballContact??0,r=t.offset??0,a=t.timeScale??1,o=Xd(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/a-(e.loop?0:o)+n,(s-r)/a)}function Gy(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function Vy(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<ms(t,r)&&(s=r);return s}const Wy=.15;function Xy(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const jy=.06,pu=2,qy=6,Ky=.4;function ya(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function Yy(i,t){return ya(si(i),20973)*t}function $y(i){return 1+jy*(2*ya(si(i),10196)-1)}function Jy(i,t){return(pu+ya(si(i),7047)*(qy-pu))*(1+Ky*(2*ya(si(i)+t*2654435761,28490)-1))}function Zy(i,t){let e=0;for(let n=0;n<64;n++)if(e+=Jy(i,n),t<e)return n;return 64}function Qy(i,t,e){const n=i.length;if(n<=1)return i[0];const s=si(t);let r=s%n;for(let a=1;a<=e;a++){const o=s+a*2654435761>>>0;r=(r+1+o%(n-1))%n}return i[r]}function tS(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}function eS(i,t,e=1){var S,O,et,tt,it,wt,mt,At,Zt,ut,Et,xt,Dt,gt;tS(t),Od(t);const n=Hd(t),s={};i.players.forEach(R=>s[R.id]=[...R.start]);const r={},a=[],o=[],c=[],l=[],u=[],h=[],d=[],p=[],g={},_={},m={},f={},y={},E={};function x(R){c.push(R),m[R.player]=R.t0,Bi(s[R.player],R.at)&&(I[R.player]=Ie(s[R.player],R.at))}const I={},w={},P={};function U(R){const b=g[R];let Q=Math.max(b?b.t0+Re(b):0,w[R]??0,0);for(const T of o)T.player===R&&t.clips[T.clip]&&(Q=Math.max(Q,ms(t,T)));return Q}function A(R,b,Q,T){if(Yt.has(R)||!Bi(s[R],Q))return null;const D=I[R]??0,B=Ni(D,Ie(s[R],Q));if(Math.abs(B)<uu)return null;const H=Jn[B>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[H.id])return null;const V=M(H),nt=U(R),ft=Math.max(nt,Math.min(b,T-V));return ft+V>T+1e-9?null:(L(R,H,ft,0,D,D+B),ft)}function M(R,b=0){return R.duration-b-ri}function L(R,b,Q,T,D,B,H){const V=H??M(b,T),nt={player:R,clip:b.id,t0:Q,offset:T,end:Q+V,from:D,to:B},ft={player:R,clip:b.id,t0:Q,...T?{offset:T}:{},...H!==void 0?{loopUntil:Q+V}:{}};d.push(nt),o.push(ft),P[R]={span:nt,cue:ft},w[R]=nt.end+ri}function q(R,b){const Q=P[R];return!Q||Q.span.end<=b+1e-9?!0:b-Q.span.t0<Iy?!1:(Q.span.end=b,Q.cue.loopUntil=b,w[R]=b+ri,!0)}function j(R,b){if(q(R,b))return;const Q=P[R];d.splice(d.indexOf(Q.span),1);const T=o.indexOf(Q.cue);T>=0&&o.splice(T,1),delete P[R],w[R]=0}function $(R,b=1/0){const Q=A(R.player,R.t0,R.at,b);x(Q===null?R:{...R,t0:Q})}const W=[];function G(R){var b;for(let Q=0;Q<W.length;Q++){const T=W[Q];T.afterT>=R||(W.splice(Q--,1),(r[b=T.player]??(r[b]=[])).push(T.move),g[T.player]=T.move,_[T.player]=K(T.move,T.player),x({player:T.player,at:T.faceBall,t0:T.move.t0}),x({player:T.player,at:T.faceSettle,t0:T.arrival}),s[T.player]=[...T.move.to])}}function J(R,b,Q){let T=[...s[R]],D=[...s[R]];const B=g[R];let H=Math.max(B?B.t0+Re(B):0,f[R]??0),V=-1/0,nt=null;for(let ft=b+1;ft<vt.length;ft++){const _t=vt[ft];if(_t.t>=Q)break;if((_t.type==="pass"?_t.from:_t.player)!==R)continue;if(_t.type!=="move"){nt=`${_t.type} at t=${_t.t}`;break}const ct=t.groups[_t.gait??"jog"]??t.groups.jog,Tt=t.clips[Yn(ct,R,_t.t)].speed??vn,Pt={from:T,to:[..._t.to],t0:_t.t,cruise:Tt,accel:Li},Bt=_t.t+Re(Pt);H=Math.max(H,Bt),T=[..._t.to],D=Bt>Q?Un(Pt,Q).pos:[..._t.to],V=_t.t}return{expected:T,atArrival:D,busyUntil:H,afterT:V,blocked:nt}}function K(R,b){const Q=py(R,n).map(D=>({player:b,clip:Yn(t.groups[D.gait],b,R.t0),t0:D.t0,loopUntil:D.t1})),T=P[b];if(T){let D=1/0;for(const B of Q)B.t0>T.span.t0+1e-9&&B.t0<T.span.end-1e-9&&(D=Math.min(D,B.t0));D<1/0&&j(b,D)}return o.push(...Q),Q}function st(R,b,Q="event"){(F[R]??0)>b&&console.warn(`[engine3d] ${R} is on the ground until t=${F[R].toFixed(2)}s but has a ${Q} at t=${b} — schedule it later`);const T=g[R];if(!T)return;const D=T.t0+Re(T);if(b<D){const B=`buildSchedule: player ${R} has an event at t=${b} while still moving from a move started at t=${T.t0} (in flight until t=${D.toFixed(3)})`;if(me.has(R))console.warn(`[engine3d] ${B} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(B)}}function rt(R){let b=null,Q=-1/0;for(const T of p)T.t<=R&&T.t>=Q&&(b=T.player,Q=T.t);return b}const yt=Object.fromEntries(i.players.map(R=>[R.id,R.team]));function Ft(R,b,Q,T,D){const B=rt(T);if(!B||B===R||Yt.has(R)||yt[R]==="coach"||yt[B]===yt[R])return null;const H=s[B]?[...s[B]]:Zh(a,i.ball.start,T).at;if(!Bi(b,H)||!Bi(b,Q))return null;const V=Ie(b,Q),nt=Ni(Ie(H,b),V),ft=Math.hypot(H[0]-b[0],H[1]-b[1])<=ky?By(nt,D):null;if(ft&&t.clips[ft.id]){const St=V-ft.axis,ct=Math.hypot(H[0]-b[0],H[1]-b[1])||1;return{clip:ft.id,ball:[b[0]+ct*Math.sin(St),b[1]+ct*Math.cos(St)]}}const _t=zy(nt,D);return _t&&t.clips[_t]?{clip:_t,ball:H}:null}const zt={};for(const R of i.events)R.type==="move"&&(zt[S=R.player]??(zt[S]=[])).push(R.t);function Z(R,b,Q){for(const T of bt){const D=T.id;if(!Ct.length||rt(R)===D||!t.clips[Yr.left.id]||!t.clips[Yr.right.id])continue;const B=g[D],H=Math.max(R,oe[D]??0,B?B.t0+Re(B):0);if(h.some(ce=>ce.player===D))continue;const V=Ct.reduce((ce,Kt)=>Math.hypot(Kt[0]-T.start[0],Kt[1]-T.start[1])<Math.hypot(ce[0]-T.start[0],ce[1]-T.start[1])?Kt:ce,Ct[0]),nt=aM(pt,e,Math.abs(s[D][1]-V[1])),_t=V[0]+Math.min(nt,Math.max(-nt,(Q[0]-V[0])*rM))-s[D][0],St=Ie(V,[i.pitch.width/2,i.pitch.length/2]),ct=cM(_t,Yr[_t*Math.cos(St)>0?"left":"right"].dist*pt,Math.sign(Math.cos(St))||1);if(!ct)continue;const Tt=Yr[ct.side],Pt=Math.min(b,i.duration)-ct.steps*Tt.duration;if(Pt<H-1e-9||(zt[D]??[]).some(ce=>ce>=Pt-1e-9))continue;const Bt=Math.sign(_t)*Tt.dist*pt;for(let ce=0;ce<ct.steps;ce++){const Kt=[...s[D]],pe=Jh(Kt,[Kt[0]+Bt,Kt[1]],Pt+ce*Tt.duration,Tt.duration);(r[D]??(r[D]=[])).push(pe),s[D]=[...pe.to],g[D]=pe}o.push({player:D,clip:Tt.id,t0:Pt,loopUntil:Pt+ct.steps*Tt.duration}),_[D]=[]}}function at(R,b){var B;const Q=(B=i.players.find(H=>H.id===R))==null?void 0:B.start;if(!Q||!Ct.length)return!1;let T=Ct[0],D=1/0;for(const H of Ct){const V=Math.hypot(H[0]-Q[0],H[1]-Q[1]);V<D&&(D=V,T=H)}return Math.hypot(b[0]-T[0],b[1]-T[1])<=wM*pt}function Mt(R,b){const Q=g[R];if(!Q||Q.endSpeed)return;const T=Q.t0+Re(Q);if(b-T>=qr)return;Q.endSpeed=qs;const D=Q.t0+Re(Q);for(const B of _[R]??[]){const H=o.indexOf(B);H>=0&&o.splice(H,1)}if(_[R]=K(Q,R),D>b-os){if(me.has(R)){console.warn(`[engine3d] player ${R}'s move started at t=${Q.t0} still arrives at t=${D.toFixed(3)}, less than ${os}s before their action at t=${b} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${R}'s move started at t=${Q.t0} still arrives at t=${D.toFixed(3)} even flowing into their action at ${qs} m/s, less than ${os}s before their action at t=${b} — move the event later or start the approach move earlier`)}}function dt(R,b,Q,T){const D=g[R],B=D?D.t0+Re(D):0;if(D&&(D.endSpeed!==void 0||b-B<qr))return null;const H=Ie(s[R],Q)+Math.PI+Kv,V=[s[R][0]+Kr*Math.sin(H),s[R][1]+Kr*Math.cos(H)],nt=t.groups.walk,ft=nt!=null&&nt.length?t.clips[nt[0]].speed??vn:vn,_t={from:[...s[R]],to:V,t0:0,cruise:ft,accel:Li};let St=b-T-Re(_t);return St<Math.max(B,f[R]??0)||!q(R,St)?null:(_t.t0=St,(r[R]??(r[R]=[])).push(_t),g[R]=_t,_[R]=K(_t,R),s[R]=[...V],St)}function kt(R,b,Q){const T=Zh(a,i.ball.start,b);{const St=PM(T.at,de,TM*pt);if(Math.hypot(St[0]-T.at[0],St[1]-T.at[1])>1e-6){const ct=a.filter(Tt=>Tt.t0<=b&&Math.hypot(Tt.to[0]-T.at[0],Tt.to[1]-T.at[1])<1e-9);if(ct.length){for(const Tt of ct)Math.hypot(Tt.from[0]-T.at[0],Tt.from[1]-T.at[1])<1e-9&&(Tt.from=[...St]),Tt.to=[...St];T.at=St}}}const D=rt(b);D&&D!==R&&p.push({t:b,player:null}),T.moving&&console.warn(`[engine3d] collect for ${R} at t=${b.toFixed(2)}s: the ball is still moving — he sets off for where it will stop; schedule it later`);let B=null;for(let St=Q+1;St<vt.length;St++){const ct=C[St];if(!(!ct||ct.actor!==R)){ct.t-b<=cs+3&&(B=ct.target);break}}const H=IM(s[R],T.at,B);let V=1/0;for(let St=Q+1;St<vt.length;St++){const ct=vt[St];if((ct.type==="pass"?ct.from:ct.player)===R){V=ct.t;break}}let nt=b;if(H.stepTo){const St=Math.hypot(H.stepTo[0]-s[R][0],H.stepTo[1]-s[R][1]);let ct;for(let Tt=St<SM?0:1;Tt<$h.length;Tt++){const Pt=t.groups[$h[Tt]]??t.groups.jog,Bt=t.clips[Yn(Pt,R,b)].speed??vn;if(ct={from:[...s[R]],to:H.stepTo,t0:b,cruise:Bt,accel:Li,endSpeed:qs},b+Re(ct)+On+os<=V)break}(r[R]??(r[R]=[])).push(ct),me.set(R,b),g[R]=ct,_[R]=K(ct,R),nt=b+Re(ct),s[R]=[...H.stepTo]}x({player:R,at:[...T.at],t0:Math.max(b,m[R]??0),lock:[nt-bn,nt+bn]});const ft=St=>{for(const ct of _[R]??[]){const Tt=o.indexOf(ct);ct.t0>=St?Tt>=0&&o.splice(Tt,1):(ct.loopUntil??0)>St&&(ct.loopUntil=St)}};if(Yt.has(R)&&at(R,T.at)){const St=hn.scoop[0],ct=nt-St.contact;return ct<b&&console.warn(`[engine3d] keeper ${R}'s scoop at t=${nt.toFixed(2)}s wants to start at t=${ct.toFixed(2)}s, before his collect at t=${b.toFixed(2)}s — schedule the collect earlier`),ft(Math.max(ct,0)),o.push({player:R,clip:St.id,t0:Math.max(ct,0),contact:St.contact}),x({player:R,at:[...H.faceAt],t0:nt}),p.push({t:nt,player:R}),u.push({player:R,at:nt,carry:[...T.at],hand:{height:wn*pt,from:RM*pt,rise:Gh,follow:!0}}),f[R]=nt,oe[R]=Math.max(ct,0)+St.duration+ls,nt}const _t=Yn(t.groups.pass,R,nt);return ft(nt-(t.clips[_t].ballContact??0)),o.push({player:R,clip:_t,t0:nt-(t.clips[_t].ballContact??0)}),a.push({from:[...T.at],to:H.set,t0:nt,duration:On,style:"ground"}),x({player:R,at:[...H.faceAt],t0:nt}),p.push({t:nt,player:R}),u.push({player:R,at:nt+On,carry:H.set}),f[R]=nt+On,nt+On}const bt=i.players.filter(R=>R.role==="keeper"),pt=e,Yt=new Set(bt.map(R=>R.id));i.players.forEach(R=>I[R.id]=R.role==="keeper"?Ie(R.start,i.ball.start):0);const Wt=((O=i.keeper)==null?void 0:O.outcome)==="save",oe={},F={},me=new Map,Gt={},vt=[...i.events].sort((R,b)=>R.t-b.t);if(!i.ball.static){const R=i.ball.start,b=i.players.reduce((D,B)=>Math.hypot(B.start[0]-R[0],B.start[1]-R[1])<Math.hypot(D.start[0]-R[0],D.start[1]-R[1])?B:D,i.players[0]),Q=vt.find(D=>D.type!=="move"||D.player===(b==null?void 0:b.id)&&Yt.has(D.player)),T=Q?Q.type==="pass"?Q.from:Q.player:null;if((Q==null?void 0:Q.type)!=="collect")if(T&&Yt.has(T))p.push({t:0,player:T}),f[T]=0,(Q==null?void 0:Q.type)==="pass"&&!!Q.fromFeet||u.push({player:T,at:0,carry:[...i.ball.start],hand:{height:wn*pt,follow:!0}});else{const D=i.players.filter(V=>V.role!=="keeper"),B=D.length?D:i.players,H=B.reduce((V,nt)=>Math.hypot(nt.start[0]-i.ball.start[0],nt.start[1]-i.ball.start[1])<Math.hypot(s[V.id][0]-i.ball.start[0],s[V.id][1]-i.ball.start[1])?nt:V,B[0]).id;p.push({t:0,player:H}),f[H]=0}}const Ct=(i.equipment??[]).filter(R=>R.type==="goal").map(R=>R.at),de=CM(i.equipment,e),Lt={};i.players.forEach(R=>Lt[R.id]=[...R.start]);const C=vt.map(R=>{if(R.type==="move")return Lt[R.player]=[...R.to],null;if(R.type==="dribble")return Lt[R.player]=[...R.to],{actor:R.player,target:[...R.to],t:R.t};if(R.type==="collect"||R.type==="tackle")return null;const b=R.type==="pass"?R.from:R.player,Q=R.type==="pass"?[...Lt[R.to]]:R.flightStyle==="ground"?[...R.at]:ZM(Lt[R.player],R.at,Ct,R.corner,e);return{actor:b,target:Q,t:R.t}});for(let R=0;R<vt.length;R++){const b=vt[R];G(b.t);const Q=b.type==="pass"?b.from:b.player;if(b.type!=="dribble"&&b.type!=="move"&&delete E[Q],b.type==="move"){st(b.player,b.t,b.type);const D=Yt.has(b.player)&&(((tt=(et=da(u,b.player,b.t))==null?void 0:et.hand)==null?void 0:tt.height)??0)>0;rt(b.t)===b.player&&!D&&console.warn(`[engine3d] move event for ${b.player} at t=${b.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const B=t.groups[b.gait??"jog"]??t.groups.jog,H=t.clips[Yn(B,b.player,b.t)].speed??vn,V=y[b.player],ft={from:V&&b.t<V.t0?[...V.at]:[...s[b.player]],to:b.to,t0:b.t,cruise:H,accel:Li},_t=Ft(b.player,ft.from,b.to,b.t,H),St=_t?null:(()=>{const ct=Gd(n,H);if((ct==null?void 0:ct.gait)!=="run"&&(ct==null?void 0:ct.gait)!=="sprint"||!t.clips[Jn.turn_to_run_a.id]||Yt.has(b.player)||U(b.player)>b.t+1e-9||!Bi(ft.from,b.to))return null;const Tt=Ni(I[b.player]??0,Ie(ft.from,b.to));return Math.abs(Tt)>=uu?{delta:Tt,gait:ct.gait}:null})();if((r[it=b.player]??(r[it]=[])).push(ft),g[b.player]=ft,_[b.player]=K(ft,b.player),_t){for(const Tt of _[b.player]??[]){const Pt=o.indexOf(Tt);Pt>=0&&o.splice(Pt,1)}const ct={player:b.player,clip:_t.clip,t0:b.t,loopUntil:b.t+Re(ft)};o.push(ct),_[b.player]=[ct],x({player:b.player,at:_t.ball,t0:b.t,until:b.t+Re(ft)})}else{if(St){const ct=Math.abs(St.delta)>Uy,Tt=St.gait==="run"?Jn.turn_180_a:null,Pt=ct&&Tt&&t.clips[Tt.id]?Tt:Jn.turn_to_run_a,Bt=Pt.id===Jn.turn_to_run_a.id?Ly:0,ce=Pt.id===Jn.turn_to_run_a.id?Dy:M(Pt,Bt),Kt=I[b.player]??0;L(b.player,Pt,b.t,Bt,Kt,Kt+St.delta,ce);const pe=b.t+ce;_[b.player]=(_[b.player]??[]).filter(De=>{if(De.t0>=pe-1e-9)return!0;if((De.loopUntil??1/0)<=pe+1e-9){const ze=o.indexOf(De);return ze>=0&&o.splice(ze,1),!1}return De.t0=pe,!0})}x({player:b.player,at:b.to,t0:b.t})}s[b.player]=[...b.to]}else if(b.type==="dribble"){st(b.player,b.t,b.type),rt(b.t)!==b.player&&console.warn(`[engine3d] dribble event for ${b.player} at t=${b.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const D=b.gait??"jog",B=t.groups[D]??t.groups.jog,H=t.clips[Yn(B,b.player,b.t)].speed??vn,V=Ie(s[b.player],b.to),nt=(((mt=(wt=da(u,b.player,b.t))==null?void 0:wt.hand)==null?void 0:mt.height)??0)>0,ft=nt?Dd(u,b.player,b.t):0,_t=nt?b.t+Wh:b.t,St={from:[...s[b.player]],to:[...b.to],t0:_t,cruise:H,accel:Li};let ct=null;for(let Xt=R+1;Xt<vt.length;Xt++){const Jt=C[Xt];if(!(!Jt||Jt.actor!==b.player)){ct={target:Jt.target,t:Jt.t};break}}const Tt=_t+Re(St);let Pt=null;for(let Xt=R+1;Xt<vt.length;Xt++){const Jt=vt[Xt];if((Jt.type==="pass"?Jt.from:Jt.player)===b.player){Pt=Jt;break}}let Bt=null;if((Pt==null?void 0:Pt.type)==="dribble"&&Pt.t-Tt<=cs){const Xt=Ni(V,Ie(b.to,Pt.to)),Jt=Py(Xt,D),_e=Jt?Jn[Jt]:null;if(_e&&t.clips[_e.id]){const he=_e.standing?Tt:_t+Re({...St,endSpeed:qs});Pt.t-he>=M(_e)-1e-9&&(Bt={c:_e,delta:Xt})}}ct&&ct.t-Tt<qr&&!(Bt!=null&&Bt.c.standing)&&(St.endSpeed=qs),Bt&&L(b.player,Bt.c,Pt.t-M(Bt.c),0,V,V+Bt.delta),(r[At=b.player]??(r[At]=[])).push(St),g[b.player]=St,_[b.player]=K(St,b.player),x({player:b.player,at:[...b.to],t0:b.t});let ce=null;for(const Xt of u)Xt.player===b.player&&(!ce||Xt.at>ce.at)&&(ce=Xt);ce&&ce.at>b.t+1e-9&&console.warn(`[engine3d] dribble for ${b.player} at t=${b.t.toFixed(2)}s starts during their settle (ends t=${ce.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let Kt=ce?[...ce.carry]:Di(s[b.player],V);nt&&(Kt=Di(s[b.player],V),u.push({player:b.player,at:b.t,carry:[...Kt],hand:{height:0,from:ft,rise:Wh,follow:!0}}),f[b.player]=b.t);const pe=ct&&ct.t-Tt<=cs?Di(b.to,Ie(b.to,ct.target)):Di(b.to,V),De=si(b.player)%2===0?1:-1;let ze=De,gn=!1;for(let Xt=R+1;Xt<vt.length;Xt++){const Jt=vt[Xt];if((Jt.type==="pass"?Jt.from:Jt.player)===b.player){if(Jt.type==="dribble"&&Jt.t-Tt<=cs){const he=Ve([b.to[0]-St.from[0],b.to[1]-St.from[1]]),Ue=Ve([Jt.to[0]-b.to[0],Jt.to[1]-b.to[1]]),v=he[0]*Ue[1]-he[1]*Ue[0],N=v<0?1:-1;Math.abs(v)>.05&&N===-De&&(ze=N),gn=Math.abs(Ni(Ie(St.from,b.to),Ie(b.to,Jt.to)))>vc}break}}const le=E[b.player],on=!!le&&_t-le.end<=cs&&Math.abs(Ni(le.h,V))>vc;E[b.player]={h:V,end:Tt};const ht=Object.entries(s).filter(([Xt])=>Xt!==b.player).map(([,Xt])=>[...Xt]),ee=dy(St,Kt,pe,ru[D]??ru.jog,ze,{turnIn:on,turnOut:gn,others:ht});a.push(...ee.flights),u.push({player:b.player,at:ee.restEnd,carry:[...pe]}),f[b.player]=ee.restEnd,s[b.player]=[...b.to],Z(ee.restEnd,((Zt=vt[R+1])==null?void 0:Zt.t)??i.duration,[...pe])}else if(b.type==="collect")st(b.player,b.t,b.type),kt(b.player,b.t,R);else if(b.type==="tackle"){st(b.player,b.t,b.type),Mt(b.player,b.t);const D=b.from;rt(b.t)!==D&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s from ${D}, but ${rt(b.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const B=Yt.has(b.player)&&!!t.clips[Jr.id],H=b.t+(B?Jr:xo[0]).contact;let V=null,nt=-1/0;for(const Pt of u)Pt.player===D&&Pt.at<=H&&Pt.at>nt&&(nt=Pt.at,V=[...Pt.carry]);V||(V=Di(s[D],Ie(s[D],s[b.player])));const ft=Math.hypot(V[0]-s[b.player][0],V[1]-s[b.player][1]),_t=B?Jr.reach:yM;ft>_t*pt&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: the ball is ${ft.toFixed(2)} m away (reach ${(_t*pt).toFixed(2)}) — move the tackler closer first`);const St=B?Jr:xo[Math.abs(si(b.player)+Math.floor(b.t*10))%xo.length],ct=b.t+St.contact,Tt={player:b.player,clip:St.id,t0:b.t,contact:St.contact};if(o.push(Tt),x({player:b.player,at:V,t0:Math.max(b.t-Ks,0,m[b.player]??0),lock:[b.t,b.t+St.duration]}),B){const Pt=ms(t,Tt),Bt=Di(s[b.player],Ie(s[b.player],V));p.push({t:ct,player:b.player}),u.push({player:b.player,at:ct,carry:[...V],hand:{height:$r*pt,follow:!0}}),u.push({player:b.player,at:Pt,carry:Bt,hand:{height:wn*pt,from:$r*pt,rise:bo,follow:!0}}),f[b.player]=ct,oe[b.player]=b.t+St.duration+ls}if(!B){const Pt=Ve([s[D][0]-s[b.player][0],s[D][1]-s[b.player][1]]),Bt=[-Pt[1],Pt[0]],ce=(V[0]-s[D][0])*Bt[0]+(V[1]-s[D][1])*Bt[1]>=0?1:-1,Kt=[s[D][0]+ce*Kh*pt*Bt[0]+Yh*pt*Pt[0],s[D][1]+ce*Kh*pt*Bt[1]+Yh*pt*Pt[1]];a.push({from:V,to:Kt,t0:ct,duration:MM,style:"ground",pop:!0}),p.push({t:ct,player:null})}if(t.clips[qh]){let Pt=1/0;for(let De=R+1;De<vt.length;De++){const ze=vt[De];if((ze.type==="pass"?ze.from:ze.player)===D){Pt=ze.t;break}}const Bt=Ve([s[D][0]-V[0],s[D][1]-V[1]]),ce=xM*pt,Kt=ct+vM,pe=Jh([...s[D]],[s[D][0]+ce*Bt[0],s[D][1]+ce*Bt[1]],Kt,Ys);if(Kt+Ys+os<=Pt){(r[D]??(r[D]=[])).push(pe),g[D]=pe,o.push({player:D,clip:qh,t0:Kt,loopUntil:Kt+Ys}),_[D]=[];const De=Math.max(Kt,m[D]??0);De<Kt+Ys&&x({player:D,at:[...V],t0:De,until:Kt+Ys}),s[D]=[...pe.to]}}B||kt(b.player,ms(t,Tt),R)}else{const D=b.type==="pass"?b.from:b.player,B=Gt[D],H=!!B&&b.t>=B.at-Zr&&b.t-B.at<=vo;B&&!H&&console.warn(`[engine3d] header for ${D} at t=${b.t} does not meet the cross at their forehead (t=${B.at.toFixed(2)}s) — played as an ordinary ${b.type}`),delete Gt[D],H&&b.t-B.at>tu&&console.warn(`[engine3d] header for ${D} at t=${b.t} pulled to the ball's arrival (t=${B.at.toFixed(2)}s) — the ball cannot wait in the air`),st(D,b.t,b.type),H||Mt(D,b.t);const V=b.type==="pass"?s[b.to]:C[R].target,nt=b.type==="shoot"&&b.flightStyle!=="ground",ft=nt?qM:qv,_t=nt?KM:Ks,St=Yt.has(D)&&rt(b.t)===D&&(((Et=(ut=da(u,D,b.t))==null?void 0:ut.hand)==null?void 0:Et.height)??0)>0;Yt.has(D)&&(oe[D]??0)>b.t&&console.warn(`[engine3d] keeper ${D} is busy until t=${oe[D].toFixed(2)}s (save / catch clip still playing) but has a ${b.type} at t=${b.t} — schedule it later`);const ct=ht=>{if(!H)return null;const ee=Math.hypot(ht[0]-le[0],ht[1]-le[1]);return ee>=HM?{style:"headed",loft:yo(ee,pt)}:null};let Tt=b.t;if(b.type==="shoot"){const ht=g[D],ee=ht?ht.t0+Re(ht):-1/0;ht&&(ht.endSpeed??0)>0&&b.t-ee>nu&&b.t-ee<qr&&(Tt=ee-nu)}let Pt="",Bt,ce,Kt=0,pe=null,De=null;if(H)Bt=B.at,Kt=B.height;else if(St&&(b.type==="pass"||b.flightStyle==="ground")){pe=b.style??LM(Math.hypot(V[0]-s[D][0],V[1]-s[D][1]));const ht=hn[pe];Pt=ht.id,ce=ht.contact,Bt=b.t+ht.contact,Kt=ht.release*pt,oe[D]=b.t+ht.duration+ls}else{const ht=g[D],ee=b.type==="shoot"&&ht&&(ht.endSpeed??0)>0&&Tt<=ht.t0+Re(ht)+1e-9?Un(ht,Tt).speed:0;De=dt(D,Tt,V,ft),ee>YM&&t.clips[fa.id]?(Pt=fa.id,ce=fa.contact):Pt=Yn(t.groups[nt?"shoot":"pass"],D,b.t),Bt=Tt+(ce??t.clips[Pt].ballContact??0)}let ze=null;H||(ze={player:D,clip:Pt,t0:Tt,...ce!==void 0?{contact:ce}:{}},o.push(ze),$({player:D,at:[...V],t0:Math.max(Tt-_t,0,m[D]??0),lock:[Tt,Bt+bn],until:Bt+bn,headUntil:Bt-Wy},Math.min(Tt,De??1/0)));const gn=Ie(s[D],V),le=H?[...B.from]:Di(s[D],gn),on=b.type!=="pass"?0:pe==="throw"?Math.max(.4,Math.hypot(V[0]-le[0],V[1]-le[1])/jh):b.flight;if(!H){const ht=Math.max(Tt-Gv,f[D]??0);ht>Bt&&console.warn(`[engine3d] departure window for ${D} is inverted (starts t=${ht.toFixed(2)}s, ball contact t=${Bt.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),l.push({player:D,windowStart:ht,contact:Bt,heading:gn,...pe?{toHeight:Kt}:{}})}if(b.type==="pass"&&Yt.has(b.to)&&!b.toFeet){const ht=Bt+on,ee=J(b.to,R,ht);ee.blocked&&console.warn(`[engine3d] ball to the keeper ${b.to} at t=${b.t}: their authored ${ee.blocked} runs during the flight, so where they stand at t=${ht.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const Xt=ee.atArrival,Jt=Ve([le[0]-Xt[0],le[1]-Xt[1]]),_e=[Xt[0]+we*Jt[0],Xt[1]+we*Jt[1]],he=b.flightStyle==="clipped"||b.flightStyle==="lofted",Ue=((xt=b.deflect)==null?void 0:xt.style)==="lofted",v=he?(b.loft??0)>sM||Ue?hn.catchHigh:hn.catch:hn.scoop[Math.abs(si(b.to)+Math.floor(ht*10))%hn.scoop.length],N=he?Math.min(wn*(v===hn.catchHigh?2:1),bM)*pt:0,X=ht-v.contact;X<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${X.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),X<ee.busyUntil&&console.warn(`[engine3d] catch cue for ${b.to} at t=${ht.toFixed(2)}s wants t0=${X.toFixed(2)}s but their move is still running (until t=${ee.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),X<Bt&&console.warn(`[engine3d] catch cue for ${b.to} at t=${ht.toFixed(2)}s wants t0=${X.toFixed(2)}s, before the ball leaves ${D} at t=${Bt.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),o.push({player:b.to,clip:v.id,t0:X,contact:v.contact});const Y=b.flightStyle==="lofted"?yo(Math.hypot(_e[0]-le[0],_e[1]-le[1]),pt)-(Kt+N)/2:b.loft;a.push({from:le,to:_e,t0:Bt,duration:on,style:pe==="kick"?"clipped":he||pe==="throw"?"lofted":"ground",...Y!==void 0?{loft:Y}:{},...N?{toHeight:N}:{},...Kt?{fromHeight:Kt}:{}}),x({player:b.to,at:[...s[D]],t0:b.t,lock:[ht-bn,ht+bn]}),b.deflect?(a.push(Xh(_e,N,b.deflect,ht,pt)),f[b.to]=ht):(p.push({t:ht,player:b.to}),u.push({player:b.to,at:ht,carry:_e,hand:he?{height:wn*pt,from:N,rise:bo,follow:!0}:{height:wn*pt,from:0,rise:Gh,follow:!0}}),f[b.to]=ht),oe[b.to]=X+v.duration+ls}else if(b.type==="pass"&&!b.toFeet&&b.flightStyle==="lofted"&&(b.loft??OM)>=GM){const ht=Bt+on;let ee=null,Xt=1/0,Jt=!1,_e=!1,he;for(let z=R+1;z<vt.length;z++){const ot=C[z],lt=vt[z];if((lt.type==="move"||lt.type==="collect")&&lt.player===b.to&&he===void 0&&lt.t>=ht-Zr&&(he=lt.t),!(!ot||ot.actor!==b.to)){ee=ot.target,Xt=ot.t,_e=lt.type==="pass"||lt.type==="shoot",Jt=_e&&!!lt.header;break}}he!==void 0&&_e&&Xt-ht<=vo&&console.warn(`[engine3d] ${b.to} has a move at t=${he.toFixed(2)}s between the cross landing on their forehead (t=${ht.toFixed(2)}s) and their strike at t=${Xt} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const Ue=_e&&he===void 0&&Xt>=ht-Zr&&(Xt-ht<=tu||Jt&&Xt-ht<=vo),v=J(b.to,R,ht);v.blocked&&!Ue&&console.warn(`[engine3d] cross to ${b.to} at t=${b.t}: their authored ${v.blocked} runs during the flight, so where they stand at t=${ht.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const N=VM(v.atArrival,le,ee,pt),X=ht-N.clip.contact;X<0&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${X.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),X<v.busyUntil&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${X.toFixed(2)}s but their move is still running (until t=${v.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),o.push({player:b.to,clip:N.clip.id,t0:X,contact:N.clip.contact});const Y=Math.hypot(N.contact[0]-le[0],N.contact[1]-le[1]);a.push({from:le,to:N.contact,t0:Bt,duration:on,style:"lofted",loft:yo(Y,pt)-(Kt+N.height)/2,toHeight:N.height,...Kt?{fromHeight:Kt}:{}}),Ue?(Gt[b.to]={at:ht,from:N.contact,height:N.height},x({player:b.to,at:[...ee],t0:Math.max(X-Ks,0,m[b.to]??0),lock:[X,ht+bn],until:ht+bn})):(_e&&Xt<ht-Zr?console.warn(`[engine3d] ${b.to}'s own strike at t=${Xt} is ${(ht-Xt).toFixed(2)}s BEFORE the cross reaches their forehead (t=${ht.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):Jt&&console.warn(`[engine3d] header for ${b.to} at t=${Xt} is ${(Xt-ht).toFixed(2)}s after the ball arrives (t=${ht.toFixed(2)}s) — ignored, cushioned instead`),x({player:b.to,at:[...s[D]],t0:b.t,lock:[ht-bn,ht+bn]}),a.push({from:N.contact,to:N.set,t0:ht,duration:Mo,style:"drop",fromHeight:N.height}),x({player:b.to,at:[...N.faceAt],t0:ht}),p.push({t:ht,player:b.to}),f[b.to]=ht+Mo,u.push({player:b.to,at:ht+Mo,carry:N.set}))}else if(b.type==="pass"){const ht=Bt+on,ee=Yn(t.groups.receive,b.to,ht),Xt=t.clips[ee];let Jt=null,_e=1/0;for(let Y=R+1;Y<vt.length;Y++){const z=vt[Y];(z.type==="pass"?z.from:z.player)===b.to&&_e===1/0&&(_e=z.t);const lt=C[Y];if(!(!lt||lt.actor!==b.to)){lt.t-ht<=cs&&(Jt=lt.target);break}}const he=ey(V,le,Jt);let Ue=b.t;{const Y=J(b.to,R,ht),z=Y.expected,ot=Math.max(b.t,Y.busyUntil),lt=Math.max(Y.afterT,b.t),It=Y.blocked;Ue=ot;const Ut=Math.hypot(he.contact[0]-z[0],he.contact[1]-z[1]);if(Ut>Vv)if(It)console.warn(`[engine3d] receive for ${b.to}: the ball lands ${Ut.toFixed(2)}m away at t=${ht.toFixed(2)}s, but their authored ${It} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const Nt=Ve([he.contact[0]-z[0],he.contact[1]-z[1]]),Vt=[he.contact[0]-we*Nt[0],he.contact[1]-we*Nt[1]],Ot=t.groups.walk,Qt=Ot!=null&&Ot.length?t.clips[Ot[0]].speed??vn:vn,ae={from:z,to:Vt,t0:0,cruise:Qt,accel:Li},be=ht-kh-Re(ae);be<ot-1e-9?console.warn(`[engine3d] receive adjustment for ${b.to}: the ${(Ut-we).toFixed(2)}m walk to the contact point would need to start at t=${be.toFixed(2)}s but they're busy until t=${ot.toFixed(2)}s — skipped (the standing stretch stays)`):(ae.t0=be,Ue=ht-kh,W.push({player:b.to,afterT:lt,move:ae,faceBall:[...le],faceSettle:[...he.faceAt],arrival:ht}))}}const v=Xt.ballContact??0,N=Math.min(v,Math.max(Xv,Math.min(Wv,jv*on,ht-(Ue+Ma)))),X=ht-N;X<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${X.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),o.push({player:b.to,clip:ee,t0:X,...v>N?{offset:v-N}:{}}),a.push({from:le,to:he.contact,t0:Bt,duration:on,style:pe==="throw"||b.flightStyle==="lofted"?"lofted":pe==="kick"||b.flightStyle==="clipped"?"clipped":"ground",...pe==="throw"?{loft:Math.max(1.5,b.loft??0)}:pe==="kick"?{loft:Math.max(3,b.loft??0)}:b.loft!==void 0?{loft:b.loft}:{},...Kt?{fromHeight:Kt}:{},...ct(he.contact)??{}}),a.push({from:he.contact,to:he.set,t0:ht,duration:On,style:"ground"}),x({player:b.to,at:[...s[D]],t0:b.t,lock:[ht-bn,ht+bn]}),$({player:b.to,at:[...he.faceAt],t0:ht},_e),p.push({t:ht,player:b.to}),f[b.to]=ht+On,u.push({player:b.to,at:ht+On,carry:he.set}),Z(ht+On,((Dt=vt[R+1])==null?void 0:Dt.t)??i.duration,he.set)}else if(b.flightStyle==="ground"){const ht=Math.hypot(V[0]-le[0],V[1]-le[1]),ee=b.flight??(pe==="throw"?Math.max(.4,ht/jh):ht/jM);if(a.push({from:le,to:[...V],t0:Bt,duration:ee,style:pe==="throw"?"lofted":pe==="kick"?"clipped":"ground",...pe==="throw"?{loft:1.5}:pe==="kick"?{loft:3}:{},...Kt?{fromHeight:Kt}:{},...ct(V)??{}}),b.deflect){const Xt=Math.hypot(b.deflect.to[0]-V[0],b.deflect.to[1]-V[1]);a.push({from:[...V],to:[...b.deflect.to],t0:Bt+ee,style:"ground",duration:_M(ht,ee,Xt)})}}else{const ht=Math.hypot(V[0]-le[0],V[1]-le[1]),ee=b.flight??ht/XM,Xt=Ve([V[0]-le[0],V[1]-le[1]]),Jt=[V[0]+eu*Xt[0],V[1]+eu*Xt[1]],_e=Bt+ee,he=a.length;a.push({from:le,to:Jt,t0:Bt,duration:ee,style:"shot",...Kt?{fromHeight:Kt}:{}}),a.push({from:Jt,to:Jt,t0:_e,duration:WM,style:"drop"}),Z(((gt=vt[R-1])==null?void 0:gt.t)??0,Tt,le);let Ue=!1;for(const v of bt){const N=te=>{const Ht=J(v.id,R,te);if(Ht.afterT>-1/0)return Ht.atArrival;const Me=g[v.id];return Me&&te<Me.t0+Re(Me)?Un(Me,te).pos:[...s[v.id]]},X=Bt+Bh(Math.max(ee,Vh)),Y=zh(Bt,ee,hn.dive.left.contact).t0,z=b.type==="shoot"?b.deflect:void 0,ot=Wt||!!z,lt=N(ot?X:Y),It=[V[0]-lt[0],V[1]-lt[1]],Ut=Ie(lt,le),Nt=ot?DM(lt,Ut,le,Jt,pt):null;if(z&&!Nt&&console.warn(`[engine3d] deflect on the shot at t=${b.t} is dropped: ${v.id} is ${Ud(lt,le,Jt).reach.toFixed(2)} m off the ball line at body scale ${pt} (his reach is ${(Ld*pt).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!Nt){if(Math.hypot(It[0],It[1])>Id*pt)continue;const te=zd(lt,Ut,Jt),Ht=Yv[te],Me=t.clips[Ht],{t0:se,timeScale:He}=zh(Bt,ee,hn.dive[te].contact);if(x({player:v.id,at:[...le],t0:Math.max(Tt-Ks,0,m[v.id]??0),...Me?{lock:[Tt,se+Me.duration/He]}:{}}),Me){o.push({player:v.id,clip:Ht,t0:se,...He>1?{timeScale:He}:{}});const Xe=N(se),Ne=UM(Xe,le,Jt,pt),Nn=[Ne[0]-Xe[0],Ne[1]-Xe[1]],ye=Math.hypot(Nn[0],Nn[1]),Ze=Math.min(ye,eM*pt),Qe=ye>1e-9?[Xe[0]+Nn[0]/ye*Ze,Xe[1]+Nn[1]/ye*Ze]:[...Xe],je=Math.min(iM,Math.max(nM,_e-se));h.push({player:v.id,from:Xe,to:Qe,t0:se,duration:je}),y[v.id]={t0:se,at:[...s[v.id]]},s[v.id]=[...Qe]}continue}if(Ue)continue;Ue=!0;const Vt=a[he];a.splice(he+1,1);let Ot,Qt=Nt.contact,ae=wn*pt;if(Nt.kind==="dive"){Vt.duration=Math.max(Vt.duration,Vh),Ot=Bt+Bh(Vt.duration);const te=Bt+Vt.duration,Ht={player:v.id,from:[...lt],to:Nt.travelTo,t0:Ot,duration:Nt.contactOffset};h.push(Ht);const Me=Fd(Ht,te),se=Math.min(1,(te-Ot)/Nt.contactOffset),He=hn.dive[Nt.side],Xe=se*He.reach*pt,Ne=Ve([Nt.contact[0]-lt[0],Nt.contact[1]-lt[1]]);Qt=[Me[0]+Xe*Ne[0],Me[1]+Xe*Ne[1]],ae=(wn+(He.hand-wn)*se)*pt,y[v.id]={t0:Ot,at:[...s[v.id]]},s[v.id]=[...Nt.travelTo]}else Ot=Math.max(Tt,Bt+Vt.duration-Nt.contactOffset);const be=Bt+Vt.duration;Vt.to=Qt,Vt.toHeight=ae,o.push({player:v.id,clip:Nt.clip,t0:Ot,contact:Nt.contactOffset});const Ae=Ot+Nt.clipDuration;if(x({player:v.id,at:[...le],t0:Math.max(Tt-Ks,0,m[v.id]??0),lock:[Tt,Ae]}),z){a.push(Xh(Qt,ae,z,be,pt)),f[v.id]=be,oe[v.id]=Ae+ls;continue}p.push({t:be,player:v.id}),Nt.kind==="catch"?u.push({player:v.id,at:be,carry:Qt,hand:{height:wn*pt,follow:!0}}):(u.push({player:v.id,at:be,carry:Qt,hand:{height:$r*pt,from:ae,rise:lM,follow:!0}}),u.push({player:v.id,at:Ae,carry:Qt,hand:{height:wn*pt,from:$r*pt,rise:bo,follow:!0}})),f[v.id]=be,oe[v.id]=Ae+ls}}if(b.type==="pass"&&!pe&&ze){const ht=t.groups.walk,ee=ht!=null&&ht.length?t.clips[ht[0]].speed??vn:vn,Xt=ms(t,ze),Jt=[s[D][0]+Kr*Math.sin(gn),s[D][1]+Kr*Math.cos(gn)],_e={from:[...s[D]],to:Jt,t0:Xt,cruise:ee,accel:Li};let he=1/0;for(let Ue=R+1;Ue<vt.length;Ue++){const v=vt[Ue];if((v.type==="pass"?v.from:v.player)===D){he=v.t;break}}Xt+Re(_e)+os<=he&&((r[D]??(r[D]=[])).push(_e),g[D]=_e,_[D]=K(_e,D),s[D]=[...Jt])}p.push({t:Bt,player:null})}const T=me.get(Q);T!==void 0&&T<b.t&&me.delete(Q)}return G(1/0),p.sort((R,b)=>R.t-b.t),o.sort((R,b)=>R.t0-b.t0),{moves:r,flights:a,anims:o,faces:c,departures:l,arrivals:u,dives:h,turns:d,attachTo(R){let b=null;for(const Q of p)Q.t<=R&&(b=Q.player);return b}}}function nS(i,t,e){const n=h=>ms(i,h),s=(h,d)=>Vy(t,i,h,d);function r(h,d){let p=0;for(const g of t){if(g.player!==h)continue;const _=n(g);_<=d&&_>p&&(p=_)}return p}const a=new Map,o=new Map,c=Hd(i),l=new Map;for(const h of c)for(const d of i.groups[h.gait]??[])l.set(d,h.gait);function u(h,d,p,g,_){const m=s(h,p),f=(m==null?void 0:m.clip)??Qy(QM(i,e.get(h)),h,Zy(h,p-r(h,p))),y=a.get(h);if(Gy(y,f,m)){const A=i.clips[f],M=d.mixer.clipAction(d.clips.get(f));M.reset(),M.loop=A.loop?lc:qu,M.clampWhenFinished=!0,m!=null&&m.offset&&(M.time=m.offset),y&&y.action!==M&&(y.action.fadeOut(wy(i,y.clip,f)),M.fadeIn(Wd(i,f,y.clip))),M.play(),a.set(h,{clip:f,offset:m==null?void 0:m.offset,action:M})}const E=a.get(h).action,x=!!m&&m.timeScale===void 0&&i.clips[f].category==="locomotion",I=x?l.get(f):void 0,w=x?I?xy(c,_,I):{timeScale:_y(_,i.clips[f].speed??vn),partner:null,weight:0}:null,P=w!=null&&w.partner&&m?Yn(i.groups[w.partner],h,m.t0):null,U=o.get(h);if(U&&U.clip!==P&&(U.clip!==f&&(U.action.weight=0,U.action.stop()),o.delete(h)),m)if(m.timeScale!==void 0)E.timeScale=m.timeScale,E.weight=1;else if(w){if(E.timeScale=w.timeScale,E.weight=1-w.weight,P){let A=o.get(h);if(!A){const q=d.mixer.clipAction(d.clips.get(P));q.reset(),q.loop=lc,q.play(),A={clip:P,action:q},o.set(h,A)}A.action.weight=w.weight,A.action.timeScale=w.timeScale;const M=i.clips[f].duration,L=i.clips[P].duration;M>0&&(A.action.time=E.time/M%1*L)}}else E.timeScale=1,E.weight=1;else{E.weight=1,E.timeScale=$y(h);const A=i.clips[f].duration;E.time=((Yy(h,A)+p*E.timeScale)%A+A)%A}d.mixer.update(g)}return{applyAnim:u,cueAt:s}}class iS{constructor(t,e){Sn(this,"_t",0);Sn(this,"_playing",!1);Sn(this,"speed",1);Sn(this,"loopCbs",[]);Sn(this,"endCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration)}onLoop(t){this.loopCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function sS(i,t){const e=new Map(t),n=new Map,s=new Map;function r(a,o,c,l,u,h,d){const p=e.get(a)??0,g=jd(i,a,o);let _;if(g){const E=s.get(a);E&&E.span===g?_=E.from:(_=p,s.set(a,{span:g,from:_}))}else s.delete(a);const m=g?Ry(i,a,o,_):null,f=m?Cy(Jn[g.clip],l):d?Lv:Rd(l),y=m?Uh(p,m.heading,c,f):h?p:Uh(p,u,c,f);return n.set(a,c>0?(y-p)/c:0),e.set(a,y),{h:y,clipYaw:(m==null?void 0:m.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}function rS(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const a=n/r;return{axis:[s/r,0,-a],angle:r/e}}function Sa(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function aS(i){var r;const t=[i.root[0]+we*Math.sin(i.heading),i.root[1]+we*Math.cos(i.heading)];let e=t,n=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!n||a.at>=n.at)&&(n=a);if(n)if((r=n.hand)!=null&&r.follow){const a=n.hand.rise?Sa((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*a,n.carry[1]+(t[1]-n.carry[1])*a]}else e=n.carry;const s=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(s){const a=[i.root[0]+we*Math.sin(s.heading),i.root[1]+we*Math.cos(s.heading)],o=Sa((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(a[0]-e[0])*o,e[1]+(a[1]-e[1])*o]}return e}function oS(i){let t=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!t||o.at>=t.at)&&(t=o);if(!(t!=null&&t.hand))return 0;const e=t.hand,n=e.from??e.height,s=e.rise?Sa((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const a=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(a&&a.toHeight!==void 0){const o=Sa((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6));r+=(a.toHeight-r)*o}return r}function Mc(i){let t=null;for(const e of i.flights)i.t>=e.t0&&(t=Hv(e,i.t));if(t&&!t.done)return{pos:t.pos,height:t.height};if(i.holderId&&i.holderRoot){const e={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:aS(e),height:oS(e)}}return t?{pos:t.pos,height:0}:{pos:i.ballStart,height:0}}const Js=new k;function xn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Js.copy(t),Js[n]=0,Js.normalize();const l=.5*a/(a+o),u=1-Js.angleTo(i)/c;return Math.sign(Js[e])===1?u*l:o/(a+o)+l+l*(1-u)}class cS extends Ls{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new k,c=new k,l=new k(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new k,_=.5/s;for(let m=0,f=0;m<u.length;m+=3,f+=2)switch(o.fromArray(u,m),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[m+0]=l.x*Math.sign(o.x)+c.x*r,u[m+1]=l.y*Math.sign(o.y)+c.y*r,u[m+2]=l.z*Math.sign(o.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=xn(g,c,"z","y",r,n),d[f+1]=1-xn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-xn(g,c,"z","y",r,n),d[f+1]=1-xn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-xn(g,c,"x","z",r,t),d[f+1]=xn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-xn(g,c,"x","z",r,t),d[f+1]=1-xn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-xn(g,c,"x","y",r,t),d[f+1]=1-xn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=xn(g,c,"x","y",r,t),d[f+1]=1-xn(g,c,"y","x",r,e);break}}}const Is="#c8f323";function lS(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const hS=lS(Is),uS=Is,dS="#7aa2ff",fS="#ffb340",pS="#b18cff",mS=Is;function gS(i){const t=new fr({color:mS,roughness:.6}),e=new ti,n=new Te(new cS(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new $t(.17,.06),new $t(.15,.1)];for(let a=0;a<=8;a++)s.push(new $t(.15-.11*a/8,.1+.31*a/8));for(let a=1;a<=4;a++){const o=a/4*(Math.PI/2);s.push(new $t(.04*Math.cos(o),.41+.04*Math.sin(o)))}const r=new Te(new Bc(s,24),t);return e.add(n,r),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e.scale.setScalar(i),e}function Kd(i,t,e,n,s,r){let a=r;const o=()=>(a=a*1103515245+12345&2147483647)/2147483647,c=e/n,l=5*c;for(let u=Math.floor(s/5)*5;u<s+n;u+=5){const h=(u-s)*c,d=i.createLinearGradient(0,h,0,h+l);(Math.floor(u/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,h,t,l+1)}for(let u=0;u<20;u++){const h=(u%5+.15+o()*.7)*(t/5),d=(Math.floor(u/5)+.15+o()*.7)*(e/4),p=(40+o()*120)*(t/1024),g=o()>.5,_=i.createRadialGradient(h,d,0,h,d,p);_.addColorStop(0,g?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(h-p,d-p,2*p,2*p)}for(let u=0;u<6400;u++){const h=o()>.5;i.fillStyle=h?"rgba(175,220,185,0.05)":"rgba(0,16,4,0.07)",i.fillRect(o()*t,o()*e,6+o()*22,1)}for(let u=0;u<9600;u++){const h=o()>.5;i.fillStyle=h?"rgba(180,220,190,0.04)":"rgba(0,12,3,0.05)",i.fillRect(o()*t,o()*e,2+o()*5,1)}}function _S(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");Kd(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),Yd(n);const s=new Xi(e);return s.colorSpace=Le,s.flipY=!1,s}function Yd(i,t=1,e=1,n=.18){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const bS=2.5;function $d(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const zi=6;function xS(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");Kd(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),Yd(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,a=e/(t+2*e)*1024,o=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,a],[0,1024,0,1024-a]];for(const[u,h,d,p]of o){const g=s.createLinearGradient(u,h,d,p);g.addColorStop(0,"rgba(0,0,0,0.55)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(0,0,1024,1024)}const c=bS*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",$d(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const l=new Xi(n);return l.colorSpace=Le,l.flipY=!1,l}function vS(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",$d(t,40,40,176,176,34),t.fill();const e=new Xi(i);return e.flipY=!1,e}let Zs=null;function MS(){if(Zs)return Zs;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Zs=new Xi(i),Zs.userData.shared=!0,Zs}function mu(i){const t=new Te(new zc(i/2,24).rotateX(-Math.PI/2),new $e({map:MS(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const ei={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},yS=.5;function hr(i,t){const e=new Map;for(const r of i.equipment??[])r.type==="goal"&&e.set(r.at[1],(e.get(r.at[1])??0)+1);if(!e.size)return t;const n=Math.max(...e.values()),s=n+(n-1)*yS;return Math.min(t,i.pitch.width/(2*ei.halfW*s))}let gu=null;function SS(i){return gu??(gu=i.loadAsync(Pa("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw gu=null,t}))}let _u=!1;function ES(i,t){if(_u||!t)return;_u=!0;const e=new mn().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-ei.halfW)>.05||Math.abs(s-ei.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${ei.halfW}, top ${s.toFixed(3)} vs ${ei.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function AS(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new k(n*(t/2+zi),0,s*(e/2+zi)))}function yc(i,t){const{width:e,length:n}=i.pitch,s=hr(i,t),r=[];for(const a of i.equipment??[]){if(a.type!=="goal")continue;const o=a.at[0]-e/2,c=a.at[1]-n/2,l=a.at[1]>n/2?-1:1,u=[ei.zMin*s*l,ei.zMax*s*l];for(const h of[-3.348*s,ei.halfW*s])for(const d of[0,ei.top*s])for(const p of u)r.push(new k(o+h,d,c+p))}return r}async function TS(i,t,e=1,n=1){const s=hr(t,n),{width:r,length:a}=t.pitch,o=(_,m=0)=>new k(_[0]-r/2,m,_[1]-a/2),c=_=>(_.anisotropy=e,_),l=new Te(new ii(r+2*zi,a+2*zi).rotateX(-Math.PI/2),new Qp({map:c(xS(r,a,zi)),transparent:!0}));l.position.y=-.02,l.renderOrder=-1,l.receiveShadow=!0;const u=new Te(new ii((r+2*zi)*1.5,(a+2*zi)*1.5).rotateX(-Math.PI/2),new $e({map:vS(),transparent:!0,depthWrite:!1}));u.position.y=-.35,u.renderOrder=-2,i.add(u);const h=new Te(new ii(r,a).rotateX(-Math.PI/2),new fr({map:c(_S(r,a)),roughness:.9}));h.receiveShadow=!0,i.add(l,h);const d=qc(),p=[],g=[];for(const _ of t.equipment??[])if(_.type==="cone"){const m=gS(n);m.position.copy(o(_.at,0)),i.add(m),g.push(m)}else{const m=(await SS(d)).clone();m.position.copy(o(_.at)),_.at[1]>a/2&&(m.rotation.y=Math.PI),m.scale.setScalar(s),i.add(m),p.push(m),ES(m,s)}return{toWorld:o,goals:p,cones:g}}const wS=1.2,RS=40;function Jd(i,t,e){let n=i.starts[t]??[0,0];for(const s of i.moves[t]??[])e>=s.t0&&(n=Un(s,e).pos);return Nd(i.dives,i.moves[t],t,e)??n}function bu(i,t){const e=i.attachTo(t),n=Mc({t,holderId:e,holderRoot:e?Jd(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const Zd=.55,CS=.3,xu=.6,PS=.6,Qd=.4,Zc=i=>Math.min(Math.max(i,0),1);function IS(i,t){if(t<=i.t0)return 0;if(t>=i.t0+Re(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=Un(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function tf(i,t,e,n,s,r,a){const o=Math.hypot(t[0]-i[0],t[1]-i[1]);if(o<1e-6)return[];const c=(t[0]-i[0])/o,l=(t[1]-i[1])/o,u=-l,h=c,d=o-s-.1,p=_=>{const m=e?e*Math.sin(2*Math.PI*_/n):0;return[i[0]+c*_+u*m,i[1]+l*_+h*m]},g=[];for(let _=.15;_+r*.5<=d;_+=r+a){const m=Math.min(_+r,d),[f,y]=p(_),[E,x]=p(m);g.push({ax:f,ay:y,bx:E,by:x,k:(_+m)/2/o})}return g}function vu(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,a=Zd*e,o=CS*e,c=t[0]-a*s,l=t[1]-a*r;return[[t[0],t[1]],[c-r*o,l+s*o],[c+r*o,l-s*o]]}const Mu=1.6,ta=2.2,LS=5,DS=5,US=6,yu=14,FS=4,ef=20,NS="#E8ECEF",OS="#8D949B",kS="#C8F323",BS=1.2,zS=3,HS=.4;function nf(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(US*n,s*.5),a=i==="dribble",o=i==="pass"?ef*n:a?yu*n/8:LS*n;return{dashes:tf(t,e,a?FS*n:0,yu*n,r,o,i==="move"?DS*n:0),headScale:r/Zd}}function GS(i,t,e){return Math.hypot(t[0]-i[0],t[1]-i[1])<1e-6?null:{dashes:tf(i,t,0,1,-.1,ef*e,0),headScale:0}}function VS(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function WS(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,a=0,o=1/0;for(const u of e){const h=(u.y-i[1])/s;!(h>1)||!isFinite(h)||h-1<o&&(o=h-1,a=h,r=u)}if(!r)return null;const c=Math.max(r.halfW-n,0),l=i[0]+(t[0]-i[0])*a;return[Math.min(Math.max(l,r.x-c),r.x+c),r.y]}function XS(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=BS}function jS(i,t,e){const n=[];for(const s of i){if(!XS(s))continue;const r=e!==void 0&&VS(s,e.arrivals),a=r?GS(s.from,s.to,t):nf("pass",s.from,s.to,t);a&&n.push({from:s.from,to:s.to,t0:s.t0,...a,...r?{save:{stub:WS(s.from,s.to,e.goals,e.clearance??0)}}:{},...s.pop?{dashes:[],pop:!0}:{}})}return n}function qS(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,a)=>{const o=Math.hypot(a.start[0]-t[0],a.start[1]-t[1]);return o<r.d?{team:a.team,d:o}:r},{d:1/0}).team}function KS(i,t){return Zc((i-t)/Qd)}function Su(i,t){const e=Zc((i-t)/.06);return xu+(1-xu)*e}function YS(i,t){return Zc((i-(t-PS))/Qd)}const $S=.35;function JS(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+$S}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const a=Math.max(s.t0,0);n.push({player:s.player,t0:a,t1:a+(r.ballContact??0)+On})}return n.sort((s,r)=>s.t0-r.t0)}function ZS(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const Eu=1e-6;function Au(i,t,e){return Dd(i,t,e)>0}function QS(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-Eu);if(r&&Au(i.arrivals,r,s.t0-Eu))return{kind:"halo"}}const n=ZS(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(a=>e>=a.t0&&e<a.t0+a.duration),r=i.arrivals.some(a=>a.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&Au(i.arrivals,n,e)?{kind:"halo"}:{kind:"ring",player:n}}function tE(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const eE=.85;function nE(i,t){return i>0?{draw:t>=i*eE,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const iE=.055,sE=.17,ln=.015,Tu=2.1,rE=.16,aE=1.8,oE=.15,cE=.1,lE=1.6,hE=.45,uE=.11,dE={technical:uS,tactical:dS,physical:fS,social:pS};function fE(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.76,"rgba(255,255,255,0.9)"),e.addColorStop(.84,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new Xi(i)}function pE(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function mE(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?dE[i.color]??i.color:Is,r=Math.min(t.width,t.height)*.14;if(pE(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=rE,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const o=i.label.toUpperCase(),c=nE(n.measureText(o).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(o,18,34,c.maxWidth))}const a=new Xi(t);return a.colorSpace=Le,a}function gE(i){var y,E;const{scene:t,drill:e,schedule:n}=i,s=i.pathM??cE,r=x=>x*s*(i.pathWidthK??1),a=tE(i.search??location.search,(y=e.overlays)==null?void 0:y.runPaths),{width:o,length:c}=e.pitch,l=x=>x[0]-o/2,u=x=>x[1]-c/2,h={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(x=>[x.id,x.start])),ballStart:e.ball.start,headingAt:i.headingAt},d=qS(e.players,e.ball.start,n.attachTo(0)),p=new Map(e.players.map(x=>[x.id,x.team])),g=x=>p.get(x)===d?NS:OS,_=[];{const x=RS,I=new Float32Array(x*3),w=new Je;w.setAttribute("position",new Ce(new Float32Array(x*2*3),3)),w.setAttribute("color",new Ce(new Float32Array(x*2*3),3));const P=new Float32Array(x*2*2);for(let W=0;W<x;W++)P.set([0,W/(x-1),1,W/(x-1)],W*4);w.setAttribute("uv",new Ce(P,2));const U=new Uint16Array((x-1)*6);for(let W=0;W<x-1;W++){const G=W*2;U.set([G,G+1,G+2,G+1,G+3,G+2],W*6)}w.setIndex(new Ce(U,1));const A=(()=>{const W=document.createElement("canvas");W.width=64,W.height=1;const G=W.getContext("2d"),[J,K,st]=hS,rt=G.createLinearGradient(0,0,64,0);rt.addColorStop(0,`rgba(${J},${K},${st},0)`),rt.addColorStop(.28,`rgba(${J},${K},${st},0.28)`),rt.addColorStop(.44,"rgba(216,247,120,0.8)"),rt.addColorStop(.5,"rgba(255,255,255,1)"),rt.addColorStop(.56,"rgba(216,247,120,0.8)"),rt.addColorStop(.72,`rgba(${J},${K},${st},0.28)`),rt.addColorStop(1,`rgba(${J},${K},${st},0)`),G.fillStyle=rt,G.fillRect(0,0,64,1);const yt=new Xi(W);return yt.colorSpace=Le,yt})(),M=new Te(w,new $e({map:A,vertexColors:!0,blending:us,transparent:!0,depthWrite:!1,side:sn}));M.frustumCulled=!1,M.renderOrder=6,t.add(M);const L=new k,q=new k,j=new k,$=wS/(x-1);_.push((W,G)=>{if(M.visible=a.trail,!a.trail)return;for(let st=0;st<x;st++){const rt=bu(h,W-st*$);I[st*3]=l(rt.pos),I[st*3+1]=iE+rt.height,I[st*3+2]=u(rt.pos)}const J=w.getAttribute("position"),K=w.getAttribute("color");j.set(1,0,0);for(let st=0;st<x;st++){const rt=Math.min(st,x-2);L.set(I[rt*3]-I[rt*3+3],I[rt*3+1]-I[rt*3+4],I[rt*3+2]-I[rt*3+5]),q.set(I[st*3],I[st*3+1],I[st*3+2]).sub(G.position),L.lengthSq()>1e-10&&(L.cross(q),L.lengthSq()>1e-10&&j.copy(L.normalize()));const yt=Math.pow(1-st/(x-1),1.2),Ft=sE*(.35+.65*yt),zt=I[st*3],Z=I[st*3+1],at=I[st*3+2];J.setXYZ(st*2,zt+j.x*Ft,Z+j.y*Ft,at+j.z*Ft),J.setXYZ(st*2+1,zt-j.x*Ft,Z-j.y*Ft,at-j.z*Ft);const Mt=yt;K.setXYZ(st*2,Mt,Mt,Mt),K.setXYZ(st*2+1,Mt,Mt,Mt)}J.needsUpdate=K.needsUpdate=!0})}{const x=[];let I=0,w=0;for(const P of e.events){if(P.type!=="move"&&P.type!=="dribble")continue;const U=(n.moves[P.player]??[]).find(L=>L.t0===P.t&&L.to[0]===P.to[0]&&L.to[1]===P.to[1]);if(!U)continue;const A=nf(P.type,U.from,U.to,s);if(!A)continue;const M=new qt(g(P.player));x.push({m:U,authored:P.runPath===!0,stroke:A,baseR:M.r,baseG:M.g,baseB:M.b,baseA:1,vert0:I,vertCount:A.dashes.length*4+3}),I+=A.dashes.length*4+3,w+=A.dashes.length*6+3}if(x.length){const P=new Float32Array(I*3),U=new Float32Array(I*4),A=new Uint16Array(w);let M=0,L=0;const q=r(Mu)/2;for(const G of x){const J=Math.hypot(G.m.to[0]-G.m.from[0],G.m.to[1]-G.m.from[1])||1,K=-(G.m.to[1]-G.m.from[1])/J,st=(G.m.to[0]-G.m.from[0])/J;for(const Z of G.stroke.dashes){const at=M/3;P.set([l([Z.ax+K*q,0]),ln,u([0,Z.ay+st*q]),l([Z.ax-K*q,0]),ln,u([0,Z.ay-st*q]),l([Z.bx+K*q,0]),ln,u([0,Z.by+st*q]),l([Z.bx-K*q,0]),ln,u([0,Z.by-st*q])],M),M+=12,A.set([at,at+1,at+2,at+1,at+3,at+2],L),L+=6}const[rt,yt,Ft]=vu(G.m.from,G.m.to,G.stroke.headScale),zt=M/3;P.set([l(rt),ln,u(rt),l(yt),ln,u(yt),l(Ft),ln,u(Ft)],M),M+=9,A.set([zt,zt+1,zt+2],L),L+=3}const j=new Je;j.setAttribute("position",new Ce(P,3)),j.setAttribute("color",new Ce(U,4)),j.setIndex(new Ce(A,1));const $=new Te(j,new $e({vertexColors:!0,transparent:!0,depthWrite:!1,side:sn}));$.renderOrder=2,t.add($);const W=j.getAttribute("color");_.push(G=>{if($.visible=a.runPaths!=="off",!!$.visible){for(const J of x){const K=a.runPaths==="authored"&&!J.authored?0:YS(G,J.m.t0),st=IS(J.m,G);let rt=J.vert0;for(const Ft of J.stroke.dashes){const zt=J.baseA*K*Su(Ft.k,st);for(let Z=0;Z<4;Z++)W.setXYZW(rt++,J.baseR,J.baseG,J.baseB,zt)}const yt=J.baseA*K*Su(1,st);for(let Ft=0;Ft<3;Ft++)W.setXYZW(rt++,J.baseR,J.baseG,J.baseB,yt)}W.needsUpdate=!0}})}}{const x=[];let I=0,w=0;const P=(e.equipment??[]).filter(L=>L.type==="goal").map(L=>({x:L.at[0],y:L.at[1],halfW:lr*i.goalScale})),U=jS(n.flights,s,{arrivals:n.arrivals,goals:P,clearance:r(ta)}),A=L=>L.save?8:L.pop?7:3,M=L=>L.save?12:L.pop?9:3;for(const L of U)I+=L.dashes.length*4+A(L),w+=L.dashes.length*6+M(L);if(U.length){const L=(rt,yt,Ft)=>{const zt=new Float32Array(I*3),Z=new Float32Array(I*4),at=new Uint16Array(w);let Mt=0,dt=0;for(const bt of U){Ft||x.push({t0:bt.t0,vert0:Mt/3,vertCount:bt.dashes.length*4+A(bt)});const pt=Math.hypot(bt.to[0]-bt.from[0],bt.to[1]-bt.from[1])||1,Yt=-(bt.to[1]-bt.from[1])/pt,Wt=(bt.to[0]-bt.from[0])/pt,oe=Wt,F=-Yt,me=(Gt,vt,Ct,de,Lt)=>{const C=Mt/3;zt.set([l([Gt+Yt*Lt,0]),ln,u([0,vt+Wt*Lt]),l([Gt-Yt*Lt,0]),ln,u([0,vt-Wt*Lt]),l([Ct+Yt*Lt,0]),ln,u([0,de+Wt*Lt]),l([Ct-Yt*Lt,0]),ln,u([0,de-Wt*Lt])],Mt),Mt+=12,at.set([C,C+1,C+2,C+1,C+3,C+2],dt),dt+=6};for(const Gt of bt.dashes)me(Gt.ax,Gt.ay,Gt.bx,Gt.by,rt);if(bt.pop&&me(bt.from[0],bt.from[1],bt.to[0],bt.to[1],Mu/ta*yt),bt.save){const Gt=zS*2*yt/2,vt=yt;me(bt.to[0]-oe*vt,bt.to[1]-F*vt,bt.to[0]+oe*vt,bt.to[1]+F*vt,Gt);const Ct=bt.save.stub??bt.to;me(bt.to[0],bt.to[1],Ct[0],Ct[1],HS*yt)}else{const[Gt,vt,Ct]=vu(bt.from,bt.to,bt.headScale),de=Mt/3;zt.set([l(Gt),ln,u(Gt),l(vt),ln,u(vt),l(Ct),ln,u(Ct)],Mt),Mt+=9,at.set([de,de+1,de+2],dt),dt+=3}}const kt=new Je;return kt.setAttribute("position",new Ce(zt,3)),kt.setAttribute("color",new Ce(Z,4)),kt.setIndex(new Ce(at,1)),kt},q=r(ta)/2,j=L(q*aE,q,!0),$=L(q,q,!1),W=new qt(kS),G=new Te(j,new $e({vertexColors:!0,transparent:!0,depthWrite:!1,blending:us,side:sn})),J=new Te($,new $e({vertexColors:!0,transparent:!0,depthWrite:!1,side:sn}));G.renderOrder=2,J.renderOrder=3,t.add(G,J);const K=$.getAttribute("color"),st=j.getAttribute("color");_.push(rt=>{J.visible=G.visible=a.runPaths==="auto",J.visible&&(U.forEach((yt,Ft)=>{const zt=KS(rt,yt.t0);let Z=x[Ft].vert0;for(let at=0;at<x[Ft].vertCount;at++,Z++)K.setXYZW(Z,W.r,W.g,W.b,zt),st.setXYZW(Z,W.r,W.g,W.b,zt*oE)}),K.needsUpdate=st.needsUpdate=!0)})}}{const x=JS(n.departures,n.anims,i.clips),I={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:e.ball.static===!0},w=new $e({map:fE(),color:Is,blending:us,transparent:!0,depthWrite:!1}),P=new Te(new ii(Tu,Tu).rotateX(-Math.PI/2),w);P.position.y=.02,P.renderOrder=3,t.add(P);const U=i.ballRadius??uE,A=lE*U,M=ta*s,L=new $e({color:Is,blending:us,transparent:!0,depthWrite:!1,depthTest:!1,side:sn}),q=new Te(new Hc(Math.max(A-M/2,1e-4),A+M/2,40),L);q.frustumCulled=!1,q.renderOrder=8,t.add(q),_.push((j,$)=>{const W=QS(I,x,j);P.visible=a.highlight&&W.kind==="ring",q.visible=a.highlight&&(W.kind==="halo"||W.kind==="free");const G=Math.sin(j*2*Math.PI/1.6);if(W.kind==="ring"){const J=Jd(h,W.player,j);P.position.x=l(J),P.position.z=u(J);const K=1+.05*G;P.scale.x=P.scale.z=K,w.opacity=.72+.18*G}else if(W.kind==="halo"||W.kind==="free"){const J=bu(h,j);q.position.set(l(J.pos),U+J.height,u(J.pos)),q.quaternion.copy($.quaternion),L.opacity=W.kind==="free"?hE:.72+.18*G}})}const m=[];for(const x of((E=e.overlays)==null?void 0:E.zones)??[]){const I=new Te(new ii(x.w,x.h).rotateX(-Math.PI/2).rotateY(Math.PI),new $e({map:mE(x),transparent:!0,depthWrite:!1}));I.position.set(l(x.at),.004,u(x.at)),I.renderOrder=.5,t.add(I),m.push(I)}const f=()=>{for(const x of m)x.visible=a.zones};return f(),{update(x,I){for(const w of _)w(x,I)},set(x){Object.assign(a,x),f()}}}const _E=new k(0,1,0),bE=.04,xE=8,ur=.1,Os=46,gr=25,wu=70;function Ea(i,t){return new k(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function Ia(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let Hi=new Float64Array(64),ea=new Float64Array(64),na=new Float64Array(64);const vE=new k,ME=new k,ia=new k;function Ru(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+Hi[r]/2),s=Math.max(s,-i[r]/(2*e)+Hi[r]/2);return n+s}function Cu(i,t,e,n){let s=-1/0,r=1/0;for(let a=0;a<t;a++)s=Math.max(s,i[a]-(n-Hi[a])*e),r=Math.min(r,i[a]+(n-Hi[a])*e);return(s+r)/2}function Aa(i,t,e,n,s){const r=i.length;Hi.length<r&&(Hi=new Float64Array(r),ea=new Float64Array(r),na=new Float64Array(r));const a=vE.crossVectors(_E,e).normalize(),o=ME.crossVectors(e,a).normalize(),c=Math.tan(s),l=Math.tan(n);for(let h=0;h<r;h++)ia.subVectors(i[h],t),Hi[h]=ia.dot(e),ea[h]=ia.dot(a),na[h]=ia.dot(o);const u=Math.max(Math.max(Ru(ea,r,c),Ru(na,r,l))*(1+bE),xE);return{dist:u,offset:new k().addScaledVector(a,Cu(ea,r,c,u)).addScaledVector(o,Cu(na,r,l,u))}}function sf(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+ur)?!0:r>s*(1+ur)?!1:n}function rf(i,t,e=Os,n=gr){const s=new mn().setFromPoints(i),r=s.getCenter(new k),a=s.getSize(new k),{vHalf:o,hHalf:c}=Ia(t),l=e*Math.PI/180,u=n*Math.PI/180,h=Aa(i,r,Ea(l,u),o,c).dist,d=Aa(i,r,Ea(l,u+Math.PI/2),o,c).dist,p=sf(a.x,a.z,t.aspect<1,d<h*(1-ur));return{dist:p?d:h,alt:p}}function Ao(i,t,e,n=Os,s=gr){const{dist:r}=rf(i,t,n,s);return 2*r*Math.tan(Ia(t).vHalf)/e}function Pu(i=Os){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}class yE{constructor(t,e=Os,n=gr){Sn(this,"target",new k);Sn(this,"wanted",new k);Sn(this,"useAlt",!1);this.camera=t,this.elevDeg=e,this.azDeg=n}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}frame(t,e){if(!t.length)return;const n=new mn().setFromPoints(t),s=n.getCenter(new k),r=n.getSize(new k),{vHalf:a,hHalf:o}=Ia(this.camera),c=this.elevDeg*Math.PI/180,l=this.azDeg*Math.PI/180,u=l+Math.PI/2,h=Ea(c,l),d=Ea(c,u),p=Aa(t,s,h,a,o),g=Aa(t,s,d,a,o);!this.useAlt&&g.dist<p.dist*(1-ur)?this.useAlt=!0:this.useAlt&&p.dist<g.dist*(1-ur)?this.useAlt=!1:this.useAlt=sf(r.x,r.z,this.camera.aspect<1,this.useAlt);const _=this.useAlt?g:p,m=this.useAlt?d:h,f=s.clone().add(_.offset);this.wanted.copy(m).multiplyScalar(_.dist).add(f);const y=Math.min(e*2.5,1);this.camera.position.lerp(this.wanted,y),this.target.lerp(f,y),this.camera.lookAt(this.target)}}const SE=1.8,EE=34,AE=844,TE=1,af=4;function Iu(i,t,e=Os,n=gr){const{vHalf:s}=Ia(t),r=e*Math.PI/180,{dist:a}=rf(i,t,e,n),o=EE*2*a*Math.tan(s)/(AE*SE*Math.cos(r));return Math.min(af,Math.max(TE,o))}function wE(i,t,e,n=Os,s=gr,r=af){const a=u=>hr(i,Math.min(r,u));let o=a(Iu(t,e,n,s)),c=0,l=0;for(let u=0;u<8;u++){c++;const h=a(Iu([...t,...yc(i,o)],e,n,s));if(l=Math.abs(h-o)/o,o=h,l<=.005)break}return{scale:o,rounds:c,residual:l,framed:[...t,...yc(i,o)]}}class RE{constructor(){Sn(this,"last",-1);Sn(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const Qs={clips:0,schedule:0,build:0};let Lu=null;function CE(){return Lu??(Lu=fetch(Pa("assets/clips_ochi.json")).then(i=>i.json()).then(i=>Od(i)).catch(i=>{throw Lu=null,i}))}let Du=null;function PE(i){return Du??(Du=qc().loadAsync(Pa("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw Du=null,t}))}function IE(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}async function DE(i,t,e={}){var C,S;const n=performance.now(),s=xv(i),r=await CE();Qs.clips=performance.now()-n;const a=e.stage??lv(t),o=new ti,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([O,et])=>new k(O*s.pitch.width/2,0,et*s.pitch.length/2)),l=s.players.map(O=>new k(O.start[0]-s.pitch.width/2,0,O.start[1]-s.pitch.length/2)),u=[...c,...l],h=()=>e.bodyScale??wE(s,u,a.camera,e.elev,e.az).scale,d=O=>[...u,...yc(s,O)],p=a.size();let g=h(),_=d(g);iu(.35*g);let m=hr(s,g);const f=performance.now(),y=((C=e.schedules)==null?void 0:C.get(m))??eS(s,r,m);(S=e.schedules)==null||S.set(m,y),Qs.schedule=performance.now()-f;const E=AS(s),x=(O=e.elev??0)=>O>=wu?[..._,...E]:_;let I=Ao(x(),a.camera,a.size().height,e.elev,e.az),w=Pu(e.elev);const{toWorld:P,goals:U,cones:A}=await TS(o,s,a.renderer.capabilities.getMaxAnisotropy(),g);let M=_.slice(u.length);a.fitShadow(_);const L=await fv(o,s.players.length),q=new Map,j=new Map;s.players.forEach((O,et)=>{const tt=L[et];q.set(O.id,tt),tt.root.rotation.order="YXZ",tt.root.scale.setScalar(g),mv(tt,s.teams[O.team].kit.primary),tt.root.position.copy(P(O.start));const it=mu(.9);it.scale.setScalar(g),it.position.x=tt.root.position.x,it.position.z=tt.root.position.z,o.add(it),j.set(O.id,it)});const $=(await PE()).clone();$.scale.setScalar(g),o.add($);const W=mu(.3);W.scale.setScalar(g),o.add(W);const G=new yE(a.camera,e.elev,e.az),J=new iS(s.duration,e.loop??!0),K=new RE,st=new Map(s.players.map(O=>[O.id,O.role])),{applyAnim:rt,cueAt:yt}=nS(r,y.anims,st),Ft=sS(y.turns,s.players.map(O=>[O.id,O.role==="keeper"?Ie(O.start,s.ball.start):0])),zt=Ft.heading,Z=Ft.rateOf,at=new Map(s.players.map(O=>[O.id,O.start]));function Mt(){const O=new Set(o.children);return{built:gE({scene:o,drill:s,schedule:y,clips:r,headingAt:tt=>zt.get(tt)??0,search:e.search,pathM:I,pathWidthK:w,ballRadius:.11*g,goalScale:m}),owned:o.children.filter(tt=>!O.has(tt))}}let dt=Mt();const kt={},bt={update:(O,et)=>dt.built.update(O,et),set:O=>{Object.assign(kt,O),dt.built.set(O)}};function pt(){for(const O of dt.owned)o.remove(O),Ed(O);dt=Mt(),dt.built.set(kt)}function Yt(){const O=h();if(O!==g){g=O,_=d(g),M=_.slice(u.length),m=hr(s,g),iu(.35*g);for(const et of q.values())et.root.scale.setScalar(g);for(const et of j.values())et.scale.setScalar(g);$.scale.setScalar(g),W.scale.setScalar(g);for(const et of A)et.scale.setScalar(g);for(const et of U)et.scale.setScalar(m);a.fitShadow(_)}I=Ao(x(G.elev),a.camera,a.size().height,G.elev,G.az),pt(),a.rule.wake()}let Wt=0;const oe=a.onBox(()=>{Wt||(Wt=requestAnimationFrame(()=>{Wt=0,Yt()}))}),F=a.size();(F.width!==p.width||F.height!==p.height)&&Yt(),e.embed||Object.assign(window,{__world:{byId:q,heading:zt,camera:a.camera,ball:$,schedule:y,goals:U,bodyScale:g},__pathMetrics:()=>({metresPerPx:I,widthK:w,runHalfM:1.6*I*w/2,passHalfM:2.2*I*w/2})});function me(O,et=30,tt=.12,it=4,wt=1){const mt=[];for(const[R,b]of q)b.root.traverse(Q=>{Q.isBone&&/foot/i.test(Q.name)&&mt.push({id:R,name:Q.name,bone:Q})});J.pause(),J.seek(0);for(let R=0;R<90;R++)a.step(1/60);J.play();const At=1/et,Zt=Math.min(O??s.duration,s.duration),ut=Math.max(0,Math.round(Zt*et)-1),Et=mt.map(()=>[]),xt=new k;for(let R=0;R<=ut;R++){for(let b=0;b<mt.length;b++){const Q=mt[b].bone.matrixWorld.elements;xt.set(Q[12],Q[13],Q[14]);const T=q.get(mt[b].id).root.worldToLocal(xt.clone());Et[b].push([R*At,Q[12],Q[13],Q[14],T.x,T.z])}a.step(At)}J.pause();const Dt=(R,b)=>{var Q;return((Q=yt(R,b))==null?void 0:Q.clip)??"idle"},gt=[];return mt.forEach((R,b)=>{const Q=(B,H)=>{if(H-B<it)return;const V=Et[b].slice(B,H);let nt=0,ft=0;for(let _t=1;_t<V.length;_t++)nt=Math.max(nt,Math.hypot(V[_t][1]-V[0][1],V[_t][3]-V[0][3])),ft+=Math.hypot(V[_t][4]-V[_t-1][4],V[_t][5]-V[_t-1][5])/At;gt.push({player:R.id,foot:R.name,t0:+V[0][0].toFixed(2),t1:+V[V.length-1][0].toFixed(2),drift:+nt.toFixed(3),localSpeed:+(ft/(V.length-1)).toFixed(2),clip0:Dt(R.id,V[0][0]),clip1:Dt(R.id,V[V.length-1][0])})},T=Et[b].map((B,H)=>H===0?1/0:Math.hypot(B[1]-Et[b][H-1][1],B[3]-Et[b][H-1][3])/At);let D=-1;Et[b].forEach((B,H)=>{const V=B[2]<tt,nt=H>0&&Dt(R.id,B[0])!==Dt(R.id,Et[b][H-1][0]),ft=T[H]>wt&&H>0&&T[H-1]>wt;D>=0&&(!V||nt||ft)&&(Q(D,H),D=-1),D<0&&V&&T[H]<wt&&(D=H)}),D>=0&&Q(D,Et[b].length)}),gt.sort((R,b)=>b.drift-R.drift),{feet:mt.map(R=>({id:R.id,name:R.name})),hPlant:tt,fps:et,phases:gt}}e.embed||Object.assign(window,{__footAudit:me}),e.embed&&a.rule.enable();const Gt=new Map;let vt=null;a.scene.add(o);const Ct=(O,et)=>{var Et;J.advance(O);const tt=J.t,it=J.playing?O:0,wt=y.attachTo(tt),mt=Mc({t:tt,holderId:wt,holderRoot:wt?at.get(wt):null,holderHeading:wt?zt.get(wt):0,ballStart:s.ball.start,flights:y.flights,departures:y.departures,arrivals:y.arrivals}).pos;for(const xt of s.players){const Dt=q.get(xt.id);let gt=xt.start,R=0;for(const Pt of y.moves[xt.id]??[])if(tt>=Pt.t0){const Bt=Un(Pt,tt);gt=Bt.pos,R=Bt.speed}const b=Nd(y.dives,y.moves[xt.id],xt.id,tt),Q=b!==null;b&&(gt=b),Dt.root.position.copy(P(gt));const T=y.moves[xt.id]??[],D=Q?{pitch:0,roll:0}:Sv(yv(T,tt),zt.get(xt.id)),B=Q?0:Av(T,tt);Dt.root.rotation.x=D.pitch*B,Dt.root.rotation.z=D.roll*B,Q||(Dt.root.position.y-=Cv(T,tt)),at.set(xt.id,gt);const H=j.get(xt.id);H.position.x=Dt.root.position.x,H.position.z=Dt.root.position.z;let V=null,nt=!1;for(const Pt of y.faces)Pt.player===xt.id&&tt>=Pt.t0&&(V=Pt.until===void 0||tt<=Pt.until?Pt.at:null,Pt.lock&&tt>=Pt.lock[0]&&tt<=Pt.lock[1]&&(nt=!0));const ft=V!==null&&Bi(gt,V),_t=Nv(gt,mt,ft,xt.id===wt),St=ft?Ie(gt,V):_t??zt.get(xt.id),{h:ct,clipYaw:Tt}=Ft.step(xt.id,tt,it,R,St,nt,!ft&&_t!==null);Dt.root.rotation.y=Pv(ct,Tt),rt(xt.id,Dt,tt,it,R)}const At=Mc({t:tt,holderId:wt,holderRoot:wt?at.get(wt):null,holderHeading:wt?zt.get(wt):0,ballStart:s.ball.start,flights:y.flights,departures:y.departures,arrivals:y.arrivals});$.position.copy(P(At.pos,.11*g+At.height));const Zt=At.height>.02;if(W.visible=!Zt,Zt||(W.position.x=$.position.x,W.position.z=$.position.z),vt&&!Zt){const xt=$.position.x-vt.x,Dt=$.position.z-vt.z;if(Math.hypot(xt,Dt)<2){const{axis:gt,angle:R}=rS([vt.x,vt.z],[$.position.x,$.position.z],.11*g);R>0&&$.rotateOnWorldAxis(new k(...gt),R)}}vt=$.position.clone(),bt.update(tt,a.camera);for(const xt of s.players){const Dt=q.get(xt.id),gt=pv(Dt);if(!gt)continue;const R=Xy(y.faces,xt.id,tt),b=R?P(R):$.position,Q=Iv(Math.atan2(b.x-Dt.root.position.x,b.z-Dt.root.position.z)-zt.get(xt.id)+Uv(Z.get(xt.id)??0)),T=Gt.get(xt.id)??0,D=it>0?T+(Q-T)*.3:T;Gt.set(xt.id,D),gt.rotation.y-=D}const ut=[...q.values()].map(xt=>new k(xt.root.position.x,0,xt.root.position.z));ut.push(...c,...M),G.elev>=wu&&ut.push(...E),G.frame([...ut,$.position.clone()],a.rule.snap()?1/0:O),K.tick(et),IE(!!e.embed,`t ${tt.toFixed(1)}s  fps ${K.avg.toFixed(0)}
[space] play/pause  [r] restart`),(Et=e.onFrame)==null||Et.call(e,tt,et)};a.start(Ct);const de=O=>{O.code==="Space"&&(J.playing?J.pause():J.play()),O.code==="KeyR"&&J.seek(0)};e.embed||addEventListener("keydown",de);function Lt(O,et=G.az){O===G.elev&&et===G.az||(G.setElev(O),G.setAz(et),I=Ao(x(O),a.camera,a.size().height,O,et),w=Pu(O),pt(),a.rule.wake())}return Qs.build=performance.now()-n-Qs.clips-Qs.schedule,{timeline:J,step:O=>a.step(O),stage:a,overlays:bt,setCamera:Lt,dispose(){removeEventListener("keydown",de),oe(),Wt&&(cancelAnimationFrame(Wt),Wt=0),a.scene.remove(o),hv(o,[...L.map(O=>O.root),$,...U]),e.stage?a.park(Ct):a.dispose()}}}export{Is as B,nn as P,_x as W,Pa as a,Qs as b,lv as c,mn as d,Fu as e,DE as r};
