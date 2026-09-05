var xu=Object.defineProperty;var vu=(i,e,t)=>e in i?xu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Tt=(i,e,t)=>vu(i,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="attached",yu="detached";const Dt="srgb",an="srgb-linear",Nr="linear",Et="srgb";const Eo="300 es";class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const Is=Math.PI/180,ns=180/Math.PI;function Tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Qa(i,e){return(i%e+e)%e}function Mu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Su(i,e,t){return i!==e?(t-i)/(e-i):0}function Ls(i,e,t){return(1-t)*i+t*e}function Eu(i,e,t,n){return Ls(i,e,1-Math.exp(-t*n))}function Au(i,e=1){return e-Math.abs(Qa(i,e*2)-e)}function Tu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ru(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cu(i,e){return i+Math.random()*(e-i)}function Pu(i){return i*(.5-Math.random())}function Iu(i){i!==void 0&&(Ao=i);let e=Ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lu(i){return i*Is}function Du(i){return i*ns}function Fu(i){return(i&i-1)===0&&i!==0}function Nu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ou(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ku={DEG2RAD:Is,RAD2DEG:ns,generateUUID:Tn,clamp:dt,euclideanModulo:Qa,mapLinear:Mu,inverseLerp:Su,lerp:Ls,damp:Eu,pingpong:Au,smoothstep:Tu,smootherstep:wu,randInt:Ru,randFloat:Cu,randFloatSpread:Pu,seededRandom:Iu,degToRad:Lu,radToDeg:Du,isPowerOfTwo:Fu,ceilPowerOfTwo:Nu,floorPowerOfTwo:Uu,setQuaternionFromProperEuler:Ou,normalize:St,denormalize:En};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,n,s,r,a,o,c,l){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],E=s[4],x=s[7],I=s[2],T=s[5],P=s[8];return r[0]=a*_+o*y+c*I,r[3]=a*m+o*E+c*T,r[6]=a*p+o*x+c*P,r[1]=l*_+u*y+h*I,r[4]=l*m+u*E+h*T,r[7]=l*p+u*x+h*P,r[2]=d*_+f*y+g*I,r[5]=d*m+f*E+g*T,r[8]=d*p+f*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($r.makeScale(e,t)),this}rotate(e){return this.premultiply($r.makeRotation(-e)),this}translate(e,t){return this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new it;function ih(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=Fs("canvas");return i.style.display="block",i}const To={};function Zi(i){i in To||(To[i]=!0,console.warn(i))}function Gu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function zu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wo=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ro=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vu(){const i={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Nr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[an]:{primaries:e,whitePoint:n,transfer:Nr,toXYZ:wo,fromXYZ:Ro,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:wo,fromXYZ:Ro,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}const gt=Vu();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class Wu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=Fs("canvas")),Fi.width=e.width,Fi.height=e.height;const n=Fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xu=0;class sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zr(s[a].image)):r.push(Zr(s[a]))}else r=Zr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ju=0;class kt extends Ii{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,c=1009,l=kt.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Tn(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=300;kt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,x=(f+1)/2,I=(p+1)/2,T=(u+d)/4,P=(h+_)/4,N=(g+m)/4;return E>x&&E>I?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=P/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=N/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=N/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends qu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rh extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ku extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const I=Math.sqrt(E),T=Math.atan2(I,p*y);m=Math.sin(m*T)/I,o=Math.sin(o*T)/I}const x=o*y;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jr.copy(this).projectOnVector(e),this.sub(Jr)}reflect(e){return this.sub(Jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new B,Co=new wn;class fn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Ws.subVectors(this.max,ps),Ni.subVectors(e.a,ps),Ui.subVectors(e.b,ps),Oi.subVectors(e.c,ps),Jn.subVectors(Ui,Ni),Qn.subVectors(Oi,Ui),ui.subVectors(Ni,Oi);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-ui.z,ui.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,ui.z,0,-ui.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-ui.y,ui.x,0];return!Qr(t,Ni,Ui,Oi,Ws)||(t=[1,0,0,0,1,0,0,0,1],!Qr(t,Ni,Ui,Oi,Ws))?!1:(Xs.crossVectors(Jn,Qn),t=[Xs.x,Xs.y,Xs.z],Qr(t,Ni,Ui,Oi,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new B,new B,new B,new B,new B,new B,new B,new B],vn=new B,Vs=new fn,Ni=new B,Ui=new B,Oi=new B,Jn=new B,Qn=new B,ui=new B,ps=new B,Ws=new B,Xs=new B,di=new B;function Qr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Yu=new fn,ms=new B,ea=new B;class Fn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(ea)),this.expandByPoint(ms.copy(e.center).sub(ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new B,ta=new B,js=new B,ei=new B,na=new B,qs=new B,ia=new B;class Xr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ta.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(ta);const r=e.distanceTo(t)*.5,a=-this.direction.dot(js),o=ei.dot(this.direction),c=-ei.dot(js),l=ei.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ta).addScaledVector(js,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){na.subVectors(t,e),qs.subVectors(n,e),ia.crossVectors(na,qs);let a=this.direction.dot(ia),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);const c=o*this.direction.dot(qs.crossVectors(ei,qs));if(c<0)return null;const l=o*this.direction.dot(na.cross(ei));if(l<0||c+l>a)return null;const u=-o*ei.dot(ia);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,g,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,_,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($u,e,Zu)}lookAt(e,t,n){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ti.crossVectors(n,un),ti.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ti.crossVectors(n,un)),ti.normalize(),Ks.crossVectors(un,ti),s[0]=ti.x,s[4]=Ks.x,s[8]=un.x,s[1]=ti.y,s[5]=Ks.y,s[9]=un.y,s[2]=ti.z,s[6]=Ks.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],E=n[7],x=n[11],I=n[15],T=s[0],P=s[4],N=s[8],A=s[12],M=s[1],L=s[5],K=s[9],q=s[13],V=s[2],D=s[6],z=s[10],Z=s[14],j=s[3],re=s[7],ae=s[11],ge=s[15];return r[0]=a*T+o*M+c*V+l*j,r[4]=a*P+o*L+c*D+l*re,r[8]=a*N+o*K+c*z+l*ae,r[12]=a*A+o*q+c*Z+l*ge,r[1]=u*T+h*M+d*V+f*j,r[5]=u*P+h*L+d*D+f*re,r[9]=u*N+h*K+d*z+f*ae,r[13]=u*A+h*q+d*Z+f*ge,r[2]=g*T+_*M+m*V+p*j,r[6]=g*P+_*L+m*D+p*re,r[10]=g*N+_*K+m*z+p*ae,r[14]=g*A+_*q+m*Z+p*ge,r[3]=y*T+E*M+x*V+I*j,r[7]=y*P+E*L+x*D+I*re,r[11]=y*N+E*K+x*z+I*ae,r[15]=y*A+E*q+x*Z+I*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*l-_*d*l+_*c*f-o*m*f-h*c*p+o*d*p,E=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,x=u*_*l-g*h*l+g*o*f-a*_*f-u*o*p+a*h*p,I=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,T=t*y+n*E+s*x+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=y*P,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*P,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*P,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*f-n*c*f)*P,e[4]=E*P,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*P,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*P,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*f+t*c*f)*P,e[8]=x*P,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*P,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*P,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*P,e[12]=I*P,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*P,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*P,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,y=c*l,E=c*u,x=c*h,I=n.x,T=n.y,P=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+x)*I,s[2]=(g-E)*I,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+E)*P,s[9]=(m-y)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const l=1/r,u=1/a,h=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=2e3){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(o===2e3)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===2001)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=2e3){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*l,f=(n+s)*u;let g,_;if(o===2e3)g=(a+r)*h,_=-2*h;else if(o===2001)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new B,yn=new st,$u=new B(0,0,0),Zu=new B(1,1,1),ti=new B,Ks=new B,un=new B,Po=new st,Io=new wn;class Pn{constructor(e=0,t=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Io.setFromEuler(this),this.setFromQuaternion(Io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ju=0;const Lo=new B,Bi=new wn,Bn=new st,Ys=new B,gs=new B,Qu=new B,ed=new wn,Do=new B(1,0,0),Fo=new B(0,1,0),No=new B(0,0,1),Uo={type:"added"},td={type:"removed"},Gi={type:"childadded",child:null},sa={type:"childremoved",child:null};class It extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new B,t=new Pn,n=new wn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new it}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Do,e)}rotateY(e){return this.rotateOnAxis(Fo,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,t){return Lo.copy(e).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Do,e)}translateY(e){return this.translateOnAxis(Fo,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(gs,Ys,this.up):Bn.lookAt(Ys,gs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uo),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),sa.child=e,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uo),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,Qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new B(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new B,Gn=new B,ra=new B,zn=new B,zi=new B,Hi=new B,Oo=new B,aa=new B,oa=new B,ca=new B,la=new xt,ha=new xt,ua=new xt;class An{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),Gn.subVectors(n,t),ra.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(Gn),c=Mn.dot(ra),l=Gn.dot(Gn),u=Gn.dot(ra),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return la.setScalar(0),ha.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(e,t),ha.fromBufferAttribute(e,n),ua.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(la,r.x),a.addScaledVector(ha,r.y),a.addScaledVector(ua,r.z),a}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),Gn.subVectors(e,t),Mn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),Hi.subVectors(r,n),aa.subVectors(e,n);const c=zi.dot(aa),l=Hi.dot(aa);if(c<=0&&l<=0)return t.copy(n);oa.subVectors(e,s);const u=zi.dot(oa),h=Hi.dot(oa);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(zi,a);ca.subVectors(e,r);const f=zi.dot(ca),g=Hi.dot(ca);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Hi,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Oo.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Oo,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(zi,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},$s={h:0,s:0,l:0};function da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=Qa(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=da(a,r,e+1/3),this.g=da(a,r,e),this.b=da(a,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return gt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(dt(Yt.r*255,0,255))*65536+Math.round(dt(Yt.g*255,0,255))*256+Math.round(dt(Yt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Dt){gt.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL($s);const n=Ls(ni.h,$s.h,t),s=Ls(ni.s,$s.s,t),r=Ls(ni.l,$s.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ke;Ke.NAMES=oh;let nd=0;class Rn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zt extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new B,Zs=new Ze;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class ch extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lh extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let id=0;const mn=new st,fa=new It,Vi=new B,dn=new fn,_s=new fn,Vt=new B;class Jt extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?lh:ch)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(dn.min,_s.min),dn.expandByPoint(Vt),Vt.addVectors(dn.max,_s.max),dn.expandByPoint(Vt)):(dn.expandByPoint(_s.min),dn.expandByPoint(_s.max))}dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Vt.fromBufferAttribute(o,l),c&&(Vi.fromBufferAttribute(e,l),Vt.add(Vi)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new B,c[N]=new B;const l=new B,u=new B,h=new B,d=new Ze,f=new Ze,g=new Ze,_=new B,m=new B;function p(N,A,M){l.fromBufferAttribute(n,N),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[N].add(_),o[A].add(_),o[M].add(_),c[N].add(m),c[A].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,A=y.length;N<A;++N){const M=y[N],L=M.start,K=M.count;for(let q=L,V=L+K;q<V;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const E=new B,x=new B,I=new B,T=new B;function P(N){I.fromBufferAttribute(s,N),T.copy(I);const A=o[N];E.copy(A),E.sub(I.multiplyScalar(I.dot(A))).normalize(),x.crossVectors(T,A);const L=x.dot(c[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,L)}for(let N=0,A=y.length;N<A;++N){const M=y[N],L=M.start,K=M.count;for(let q=L,V=L+K;q<V;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Pt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new st,fi=new Xr,Js=new Fn,Bo=new B,Qs=new B,er=new B,tr=new B,pa=new B,nr=new B,Go=new B,ir=new B;class wt extends It{constructor(e=new Jt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(pa.fromBufferAttribute(h,e),a?nr.addScaledVector(pa,u):nr.addScaledVector(pa.sub(t),u))}t.add(nr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(Js.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Js,Bo)===null||fi.origin.distanceToSquared(Bo)>(e.far-e.near)**2))&&(ko.copy(r).invert(),fi.copy(e.ray).applyMatrix4(ko),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,I=E;x<I;x+=3){const T=o.getX(x),P=o.getX(x+1),N=o.getX(x+2);s=sr(this,p,e,n,l,u,h,T,P,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=sr(this,a,e,n,l,u,h,y,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,I=E;x<I;x+=3){const T=x,P=x+1,N=x+2;s=sr(this,p,e,n,l,u,h,T,P,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,x=m+2;s=sr(this,a,e,n,l,u,h,y,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function sd(i,e,t,n,s,r,a,o){let c;if(e.side===1?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===0,o),c===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ir);return l<t.near||l>t.far?null:{distance:l,point:ir.clone(),object:i}}function sr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Qs),i.getVertexPosition(c,er),i.getVertexPosition(l,tr);const u=sd(i,e,t,n,Qs,er,tr,Go);if(u){const h=new B;An.getBarycoord(Go,Qs,er,tr,h),s&&(u.uv=An.getInterpolatedAttribute(s,o,c,l,h,new Ze)),r&&(u.uv1=An.getInterpolatedAttribute(r,o,c,l,h,new Ze)),a&&(u.normal=An.getInterpolatedAttribute(a,o,c,l,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new B,materialIndex:0};An.getNormal(Qs,er,tr,d.normal),u.face=d,u.barycoord=h}return u}class cs extends Jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function g(_,m,p,y,E,x,I,T,P,N,A){const M=x/P,L=I/N,K=x/2,q=I/2,V=T/2,D=P+1,z=N+1;let Z=0,j=0;const re=new B;for(let ae=0;ae<z;ae++){const ge=ae*L-q;for(let Ce=0;Ce<D;Ce++){const ze=Ce*M-K;re[_]=ze*y,re[m]=ge*E,re[p]=V,l.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=T>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ce/P),h.push(1-ae/N),Z+=1}}for(let ae=0;ae<N;ae++)for(let ge=0;ge<P;ge++){const Ce=d+ge+D*ae,ze=d+ge+D*(ae+1),Q=d+(ge+1)+D*(ae+1),le=d+(ge+1)+D*ae;c.push(Ce,ze,le),c.push(ze,Q,le),j+=6}o.addGroup(f,j,A),f+=j,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=is(i[t]);for(const s in n)e[s]=n[s]}return e}function rd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const ad={clone:is,merge:sn};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uh extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new B,zo=new Ze,Ho=new Ze;class rn extends uh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,zo,Ho),t.subVectors(Ho,zo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class ld extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const r=new rn(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const a=new rn(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new rn(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const c=new rn(Wi,Xi,e,t);c.layers=this.layers,this.add(c);const l=new rn(Wi,Xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dh extends kt{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hd extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new dh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cs(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const a=new wt(s,r),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new ld(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class ud extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new B;class eo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vo=new B,Wo=new xt,Xo=new xt,fd=new B,jo=new st,rr=new B,ma=new Fn,qo=new st,ga=new Xr;class pd extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=So,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rr),this.boundingBox.expandByPoint(rr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rr),this.boundingSphere.expandByPoint(rr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(s),e.ray.intersectsSphere(ma)!==!1&&(qo.copy(s).invert(),ga.copy(e.ray).applyMatrix4(qo),!(this.boundingBox!==null&&ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ga)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===So?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Wo.fromBufferAttribute(s.attributes.skinIndex,e),Xo.fromBufferAttribute(s.attributes.skinWeight,e),Vo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Xo.getComponent(r);if(a!==0){const o=Wo.getComponent(r);jo.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fd.copy(Vo).applyMatrix4(jo),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fh extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ph extends kt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=1003,u=1003,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ko=new st,md=new st;class to{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:md;Ko.multiplyMatrices(o,t[r]),Ko.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new to(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ph(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new fh),this.bones.push(a),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Ha extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new st,Yo=new st,ar=[],$o=new fn,gd=new st,bs=new wt,xs=new Fn;class _d extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),$o.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union($o)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),xs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),e.ray.intersectsSphere(xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),Yo.multiplyMatrices(n,ji),bs.matrixWorld=Yo,bs.raycast(e,ar);for(let a=0,o=ar.length;a<o;a++){const c=ar[a];c.instanceId=r,c.object=this,t.push(c)}ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ph(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const _a=new B,bd=new B,xd=new it;class Mi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_a.subVectors(n,t).cross(bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xd.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Fn,or=new B;class no{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],E=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+a,d+u,m+g,x+y).normalize(),n[3].setComponents(c-a,d-u,m-g,x-y).normalize(),n[4].setComponents(c-o,d-h,m-_,x-E).normalize(),t===2e3)n[5].setComponents(c+o,d+h,m+_,x+E).normalize();else if(t===2001)n[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(or.x=s.normal.x>0?e.max.x:e.min.x,or.y=s.normal.y>0?e.max.y:e.min.y,or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mh extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ur=new B,Or=new B,Zo=new st,vs=new Xr,cr=new Fn,ba=new B,Jo=new B;class io extends It{constructor(e=new Jt,t=new mh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ur.fromBufferAttribute(t,s-1),Or.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Or);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;Zo.copy(s).invert(),vs.copy(e.ray).applyMatrix4(Zo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),y=u.getX(_+1),E=lr(this,e,vs,c,p,y);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=lr(this,e,vs,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=lr(this,e,vs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=lr(this,e,vs,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lr(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Ur.fromBufferAttribute(a,s),Or.fromBufferAttribute(a,r),t.distanceSqToSegment(Ur,Or,ba,Jo)>n)return;ba.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ba);if(!(c<e.near||c>e.far))return{distance:c,point:Jo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Qo=new B,ec=new B;class vd extends io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Qo.fromBufferAttribute(t,s),ec.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qo.distanceTo(ec);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yd extends io{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gh extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tc=new st,Va=new Xr,hr=new Fn,ur=new B;class Md extends It{constructor(e=new Jt,t=new gh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,e.ray.intersectsSphere(hr)===!1)return;tc.copy(s).invert(),Va.copy(e.ray).applyMatrix4(tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);ur.fromBufferAttribute(h,m),nc(ur,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)ur.fromBufferAttribute(h,g),nc(ur,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nc(i,e,t,n,s,r,a){const o=Va.distanceSqToPoint(i);if(o<t){const c=new B;Va.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class jn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Li extends kt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _h extends kt{constructor(e,t,n,s,r,a,o,c,l,u=1026){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1014),n===void 0&&u===1027&&(n=1020),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class so extends Jt{constructor(e=[new Ze(0,-.5),new Ze(.5,0),new Ze(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=dt(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/t,h=new B,d=new Ze,f=new B,g=new B,_=new B;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=t;y++){const E=n+y*u*s,x=Math.sin(E),I=Math.cos(E);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*x,h.y=e[T].y,h.z=e[T].x*I,a.push(h.x,h.y,h.z),d.x=y/t,d.y=T/(e.length-1),o.push(d.x,d.y);const P=c[3*T+0]*x,N=c[3*T+1],A=c[3*T+0]*I;l.push(P,N,A)}}for(let y=0;y<t;y++)for(let E=0;E<e.length-1;E++){const x=E+y*e.length,I=x,T=x+e.length,P=x+e.length+1,N=x+1;r.push(I,T,N),r.push(P,N,T)}this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("uv",new Xt(o,2)),this.setAttribute("normal",new Xt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.points,e.segments,e.phiStart,e.phiLength)}}class ro extends Jt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new B,u=new Ze;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yn extends Jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let E=0;E<l;E++){const x=E*h-r;g.push(x,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const E=y+l*p,x=y+l*(p+1),I=y+1+l*(p+1),T=y+1+l*p;f.push(E,x,T),f.push(x,I,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ao extends Jt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new B,g=new Ze;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,E=y,x=y+n+1,I=y+n+2,T=y+1;o.push(E,x,T),o.push(x,I,T)}}this.setIndex(o),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bs extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends Bs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sd extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ed extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ad extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function dr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Td(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wd(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ic(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function bh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Gs{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rd extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=e,o=2*t-n;break;case 2402:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,c=2*n-t;break;case 2402:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let I=0;I!==o;++I)r[I]=p*a[u+I]+y*a[l+I]+E*a[c+I]+x*a[h+I];return r}}class xh extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class Cd extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dr(t,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dr(e.times,Array),values:dr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Td(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=2301;class ls extends Un{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=2300;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class vh extends Un{}vh.prototype.ValueTypeName="color";class ss extends Un{}ss.prototype.ValueTypeName="number";class Pd extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)wn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class rs extends Un{InterpolantFactoryMethodLinear(e){return new Pd(this.times,this.values,this.getValueSize(),e)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends Un{constructor(e,t,n){super(e,t,n)}}hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=2300;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends Un{}as.prototype.ValueTypeName="vector";class Wa{constructor(e="",t=-1,n=[],s=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ld(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=wd(c);c=ic(c,1,u),l=ic(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ss(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];bh(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const E=d[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}s.push(new ss(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(as,f+".position",d,"pos",s),n(rs,f+".quaternion",d,"rot",s),n(as,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Id(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return vh;case"quaternion":return rs;case"bool":case"boolean":return ls;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ld(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Id(i.type);if(i.times===void 0){const t=[],n=[];bh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const oi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Dd{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Fd=new Dd;class us{constructor(e){this.manager=e!==void 0?e:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class Nd extends Error{constructor(e,t){super(e),this.response=t}}class yh extends us{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=oi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:s});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Hn[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:E,value:x})=>{if(E)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,P=u.length;T<P;T++){const N=u[T];N.onProgress&&N.onProgress(I)}p.enqueue(x),y()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Nd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{oi.add(e,l);const u=Hn[e];delete Hn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Hn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Hn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ud extends us{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=oi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Fs("img");function c(){u(),oi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Od extends us{constructor(e){super(e)}load(e,t,n,s){const r=new kt,a=new Ud(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class jr extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kd extends jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xa=new st,sc=new B,rc=new B;class oo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rc),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bd extends oo{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ns*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gd extends jr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ac=new st,ys=new B,va=new B;class zd extends oo{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(ys),va.copy(n.position),va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(va),n.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac)}}class Hd extends jr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class co extends uh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vd extends oo{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mh extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ds{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wd extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=oi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return oi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),oi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});oi.add(e,c),r.manager.itemStart(e)}}class Xd extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jd{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){wn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;wn.multiplyQuaternionsFlat(e,a,e,t,e,n),wn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const lo="\\[\\]\\.:\\/",qd=new RegExp("["+lo+"]","g"),ho="[^"+lo+"]",Kd="[^"+lo.replace("\\.","")+"]",Yd=/((?:WC+[\/:])*)/.source.replace("WC",ho),$d=/(WCOD+)?/.source.replace("WCOD",Kd),Zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ho),Jd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ho),Qd=new RegExp("^"+Yd+$d+Zd+Jd+"$"),ef=["material","materials","bones","map"];class tf{constructor(e,t,n){const s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qd,"")}static parseTrackName(e){const t=Qd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ef.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=tf;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nf{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:2400,endingEnd:2400};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case 2501:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case 2500:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===2202;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(e?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,t?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const sf=new Float32Array(1);class rf extends Ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new jd(vt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new xh(new Float32Array(2),new Float32Array(2),1,sf),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Wa.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=2500),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new nf(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Wa.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function oc(i,e,t,n){const s=af(n);switch(t){case 1021:return i*e;case 1024:return i*e;case 1025:return i*e*2;case 1028:return i*e/s.components*s.byteLength;case 1029:return i*e/s.components*s.byteLength;case 1030:return i*e*2/s.components*s.byteLength;case 1031:return i*e*2/s.components*s.byteLength;case 1022:return i*e*3/s.components*s.byteLength;case 1023:return i*e*4/s.components*s.byteLength;case 1033:return i*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function af(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function of(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
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
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
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
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,If=`#define PI 3.141592653589793
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
} // validated`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Df=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,ap=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_p=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,vm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define PHONG
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
}`,Pm=`#define PHONG
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
}`,Im=`#define STANDARD
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
}`,Lm=`#define STANDARD
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
}`,Dm=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:cf,alphahash_pars_fragment:lf,alphamap_fragment:hf,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:bf,beginnormal_vertex:xf,bsdfs:vf,iridescence_fragment:yf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Tf,color_fragment:wf,color_pars_fragment:Rf,color_pars_vertex:Cf,color_vertex:Pf,common:If,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Df,displacementmap_pars_vertex:Ff,displacementmap_vertex:Nf,emissivemap_fragment:Uf,emissivemap_pars_fragment:Of,colorspace_fragment:kf,colorspace_pars_fragment:Bf,envmap_fragment:Gf,envmap_common_pars_fragment:zf,envmap_pars_fragment:Hf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:ep,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:jf,fog_fragment:qf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:$f,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:cp,lights_fragment_end:lp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:_p,metalnessmap_fragment:bp,metalnessmap_pars_fragment:xp,morphinstance_vertex:vp,morphcolor_vertex:yp,morphnormal_vertex:Mp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Ep,normal_fragment_begin:Ap,normal_fragment_maps:Tp,normal_pars_fragment:wp,normal_pars_vertex:Rp,normal_vertex:Cp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Dp,iridescence_pars_fragment:Fp,opaque_fragment:Np,packing:Up,premultiplied_alpha_fragment:Op,project_vertex:kp,dithering_fragment:Bp,dithering_pars_fragment:Gp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:jp,skinbase_vertex:qp,skinning_pars_vertex:Kp,skinning_vertex:Yp,skinnormal_vertex:$p,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:cm,backgroundCube_vert:lm,backgroundCube_frag:hm,cube_vert:um,cube_frag:dm,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:_m,equirect_frag:bm,linedashed_vert:xm,linedashed_frag:vm,meshbasic_vert:ym,meshbasic_frag:Mm,meshlambert_vert:Sm,meshlambert_frag:Em,meshmatcap_vert:Am,meshmatcap_frag:Tm,meshnormal_vert:wm,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Pm,meshphysical_vert:Im,meshphysical_frag:Lm,meshtoon_vert:Dm,meshtoon_frag:Fm,points_vert:Nm,points_frag:Um,shadow_vert:Om,shadow_frag:km,sprite_vert:Bm,sprite_frag:Gm},Le={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Dn={basic:{uniforms:sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:sn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:sn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:sn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:sn([Le.points,Le.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:sn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:sn([Le.common,Le.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:sn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:sn([Le.sprite,Le.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:sn([Le.common,Le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:sn([Le.lights,Le.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Dn.physical={uniforms:sn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const fr={r:0,b:0,g:0},mi=new Pn,zm=new st;function Hm(i,e,t,n,s,r,a){const o=new Ke(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function _(E){let x=!1;const I=g(E);I===null?p(o,c):I&&I.isColor&&(p(I,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===306)?(u===void 0&&(u=new wt(new cs(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:is(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),mi.copy(x.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(mi)),u.material.toneMapped=gt.getTransfer(I.colorSpace)!==Et,(h!==I||d!==I.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new wt(new Yn(2,2),new li({name:"BackgroundMaterial",uniforms:is(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=gt.getTransfer(I.colorSpace)!==Et,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,d=I.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,x){E.getRGB(fr,hh(i)),n.buffers.color.setClear(fr.r,fr.g,fr.b,x,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:m,dispose:y}}function Vm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,L,K,q,V){let D=!1;const z=h(q,K,L);r!==z&&(r=z,l(r.object)),D=f(M,q,K,V),D&&g(M,q,K,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,x(M,L,K,q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,L,K){const q=K.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let D=V[L.id];D===void 0&&(D={},V[L.id]=D);let z=D[q];return z===void 0&&(z=d(c()),D[q]=z),z}function d(M){const L=[],K=[],q=[];for(let V=0;V<t;V++)L[V]=0,K[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:K,attributeDivisors:q,object:M,attributes:{},index:null}}function f(M,L,K,q){const V=r.attributes,D=L.attributes;let z=0;const Z=K.getAttributes();for(const j in Z)if(Z[j].location>=0){const ae=V[j];let ge=D[j];if(ge===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;z++}return r.attributesNum!==z||r.index!==q}function g(M,L,K,q){const V={},D=L.attributes;let z=0;const Z=K.getAttributes();for(const j in Z)if(Z[j].location>=0){let ae=D[j];ae===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),V[j]=ge,z++}r.attributes=V,r.attributesNum=z,r.index=q}function _(){const M=r.newAttributes;for(let L=0,K=M.length;L<K;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const K=r.newAttributes,q=r.enabledAttributes,V=r.attributeDivisors;K[M]=1,q[M]===0&&(i.enableVertexAttribArray(M),q[M]=1),V[M]!==L&&(i.vertexAttribDivisor(M,L),V[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let K=0,q=L.length;K<q;K++)L[K]!==M[K]&&(i.disableVertexAttribArray(K),L[K]=0)}function E(M,L,K,q,V,D,z){z===!0?i.vertexAttribIPointer(M,L,K,V,D):i.vertexAttribPointer(M,L,K,q,V,D)}function x(M,L,K,q){_();const V=q.attributes,D=K.getAttributes(),z=L.defaultAttributeValues;for(const Z in D){const j=D[Z];if(j.location>=0){let re=V[Z];if(re===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const ae=re.normalized,ge=re.itemSize,Ce=e.get(re);if(Ce===void 0)continue;const ze=Ce.buffer,Q=Ce.type,le=Ce.bytesPerElement,Me=Q===i.INT||Q===i.UNSIGNED_INT||re.gpuType===1013;if(re.isInterleavedBufferAttribute){const J=re.data,oe=J.stride,ce=re.offset;if(J.isInstancedInterleavedBuffer){for(let he=0;he<j.locationSize;he++)p(j.location+he,J.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<j.locationSize;he++)m(j.location+he);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let he=0;he<j.locationSize;he++)E(j.location+he,ge/j.locationSize,Q,ae,oe*le,(ce+ge/j.locationSize*he)*le,Me)}else{if(re.isInstancedBufferAttribute){for(let J=0;J<j.locationSize;J++)p(j.location+J,re.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let J=0;J<j.locationSize;J++)m(j.location+J);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let J=0;J<j.locationSize;J++)E(j.location+J,ge/j.locationSize,Q,ae,ge*le,ge/j.locationSize*J*le,Me)}}else if(z!==void 0){const ae=z[Z];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(j.location,ae);break;case 3:i.vertexAttrib3fv(j.location,ae);break;case 4:i.vertexAttrib4fv(j.location,ae);break;default:i.vertexAttrib1fv(j.location,ae)}}}}y()}function I(){N();for(const M in n){const L=n[M];for(const K in L){const q=L[K];for(const V in q)u(q[V].object),delete q[V];delete L[K]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const K in L){const q=L[K];for(const V in q)u(q[V].object),delete q[V];delete L[K]}delete n[M.id]}function P(M){for(const L in n){const K=n[L];if(K[M.id]===void 0)continue;const q=K[M.id];for(const V in q)u(q[V].object),delete q[V];delete K[M.id]}}function N(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Wm(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==1023&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const N=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!N)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:I,maxSamples:T}}function jm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Mi,o=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,E=y*4;let x=p.clippingState||null;c.value=x,x=u(g,d,E,f);for(let I=0;I!==E;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==_;++E,x+=4)a.copy(h[E]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function qm(i){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new hd(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ji=4,cc=[.125,.215,.35,.446,.526,.582],Ai=20,ya=new co,lc=new Ke;let Ma=null,Sa=0,Ea=0,Aa=!1;const Si=(1+Math.sqrt(5))/2,qi=1/Si,hc=[new B(-Si,qi,0),new B(Si,qi,0),new B(-qi,0,Si),new B(qi,0,Si),new B(0,Si,-qi),new B(0,Si,qi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,Sa,Ea),this._renderer.xr.enabled=Aa,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:an,depthBuffer:!1},s=dc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(r)),this._blurMaterial=Ym(r,e,t)}return s}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,s){const o=new rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(lc),u.toneMapping=0,u.autoClear=!1;const f=new Zt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new wt(new cs,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(lc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const E=this._cubeSize;pr(s,y*E,p>2?E:0,E,E),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;pr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hc[(s-r-1)%hc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let y=0;for(let P=0;P<Ai;++P){const N=P/_,A=Math.exp(-N*N/2);p.push(A),P===0?y+=A:P<m&&(y+=2*A)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const x=this._sizeLods[s],I=3*x*(s>E-Ji?s-E+Ji:0),T=4*(this._cubeSize-x);pr(t,I,T,3*x,2*x),c.setRenderTarget(t),c.render(h,ya)}}function Km(i){const e=[],t=[],n=[];let s=i;const r=i-Ji+1+cc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ji?c=cc[a-i+Ji-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),E=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,N=T>2?0:-1,A=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];y.set(A,_*g*T),E.set(d,m*g*T);const M=[T,T,T,T,T,T];x.set(M,p*g*T)}const I=new Jt;I.setAttribute("position",new Pt(y,_)),I.setAttribute("uv",new Pt(E,m)),I.setAttribute("faceIndex",new Pt(x,p)),e.push(I),s>Ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dc(i,e,t){const n=new Pi(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ym(i,e,t){const n=new Float32Array(Ai),s=new B(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function fc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function pc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uo(){return`

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
	`}function $m(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===303||c===304,u=c===301||c===302;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new uc(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new uc(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jm(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let E=0,x=y.length;E<x;E+=3){const I=y[E+0],T=y[E+1],P=y[E+2];d.push(I,T,T,P,P,I)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const I=E+0,T=E+1,P=E+2;d.push(I,T,T,P,P,I)}}else return;const m=new(ih(d)?lh:ch)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Qm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function eg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tg(i,e,t){const n=new WeakMap,s=new xt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let A=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let x=o.attributes.position.count*E,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*I*4*h),P=new rh(T,x,I,h);P.type=1015,P.needsUpdate=!0;const N=E*4;for(let M=0;M<h;M++){const L=m[M],K=p[M],q=y[M],V=x*I*4*M;for(let D=0;D<L.count;D++){const z=D*N;f===!0&&(s.fromBufferAttribute(L,D),T[V+z+0]=s.x,T[V+z+1]=s.y,T[V+z+2]=s.z,T[V+z+3]=0),g===!0&&(s.fromBufferAttribute(K,D),T[V+z+4]=s.x,T[V+z+5]=s.y,T[V+z+6]=s.z,T[V+z+7]=0),_===!0&&(s.fromBufferAttribute(q,D),T[V+z+8]=s.x,T[V+z+9]=s.y,T[V+z+10]=s.z,T[V+z+11]=q.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new Ze(x,I)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ng(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Eh=new kt,mc=new _h(1,1),Ah=new rh,Th=new Ku,wh=new dh,gc=[],_c=[],bc=new Float32Array(16),xc=new Float32Array(9),vc=new Float32Array(4);function ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=gc[s];if(r===void 0&&(r=new Float32Array(s),gc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qr(i,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function og(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Bt(t,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),Gt(t,n)}}function cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Bt(t,n))return;xc.set(n),i.uniformMatrix3fv(this.addr,!1,xc),Gt(t,n)}}function lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Bt(t,n))return;bc.set(n),i.uniformMatrix4fv(this.addr,!1,bc),Gt(t,n)}}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function bg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=515,r=mc):r=Eh,t.setTexture2D(e||r,s)}function xg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Th,s)}function vg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wh,s)}function yg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ah,s)}function Mg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return yg}}function Sg(i,e){i.uniform1fv(this.addr,e)}function Eg(i,e){const t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function Ag(i,e){const t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function Tg(i,e){const t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function wg(i,e){const t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rg(i,e){const t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cg(i,e){const t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pg(i,e){i.uniform1iv(this.addr,e)}function Ig(i,e){i.uniform2iv(this.addr,e)}function Lg(i,e){i.uniform3iv(this.addr,e)}function Dg(i,e){i.uniform4iv(this.addr,e)}function Fg(i,e){i.uniform1uiv(this.addr,e)}function Ng(i,e){i.uniform2uiv(this.addr,e)}function Ug(i,e){i.uniform3uiv(this.addr,e)}function Og(i,e){i.uniform4uiv(this.addr,e)}function kg(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Eh,r[a])}function Bg(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Th,r[a])}function Gg(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wh,r[a])}function zg(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ah,r[a])}function Hg(i){switch(i){case 5126:return Sg;case 35664:return Eg;case 35665:return Ag;case 35666:return Tg;case 35674:return wg;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Fg;case 36294:return Ng;case 36295:return Ug;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return zg}}class Vg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mg(t.type)}}class Wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}}class Xg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function yc(i,e){i.seq.push(e),i.map[e.id]=e}function jg(i,e,t){const n=i.name,s=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),a=Ta.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yc(t,l===void 0?new Vg(o,i,e):new Wg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Xg(o),yc(t,h)),t=h}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);jg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Mc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const qg=37297;let Kg=0;function Yg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Sc=new it;function $g(i){gt._getMatrix(Sc,gt.workingColorSpace,i);const e=`mat3( ${Sc.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Nr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ec(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yg(i.getShaderSource(e),a)}else return s}function Zg(i,e){const t=$g(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jg(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mr=new B;function Qg(){gt.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),e=mr.y.toFixed(4),t=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function t_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ps(i){return i!==""}function Ac(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(i){return i.replace(i_,r_)}const s_=new Map;function r_(i,e){let t=ot[e];if(t===void 0){const n=s_.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xa(t)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(a_,o_)}function o_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rc(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function l_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function u_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function d_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function f_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=c_(t),l=l_(t),u=h_(t),h=u_(t),d=d_(t),f=e_(t),g=t_(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(m=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?ot.tonemapping_pars_fragment:"",t.toneMapping!==0?Jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Zg("linearToOutputTexel",t.outputColorSpace),Qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Xa(a),a=Ac(a,t),a=Tc(a,t),o=Xa(o),o=Ac(o,t),o=Tc(o,t),a=wc(a),o=wc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,x=y+p+o,I=Mc(s,s.VERTEX_SHADER,E),T=Mc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,I),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(L){if(i.debug.checkShaderErrors){const K=s.getProgramInfoLog(_).trim(),q=s.getShaderInfoLog(I).trim(),V=s.getShaderInfoLog(T).trim();let D=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,T);else{const Z=Ec(s,I,"vertex"),j=Ec(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+Z+`
`+j)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||V==="")&&(z=!1);z&&(L.diagnostics={runnable:D,programLog:K,vertexShader:{log:q,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(I),s.deleteShader(T),N=new Pr(s,_),A=n_(s,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,qg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=T,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new g_(e),t.set(e,n)),n}}class g_{constructor(e){this.id=p_++,this.code=e,this.usedTimes=0}}function __(i,e,t,n,s,r,a){const o=new ah,c=new m_,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,M,L,K,q){const V=K.fog,D=q.geometry,z=A.isMeshStandardMaterial?K.environment:null,Z=(A.isMeshStandardMaterial?t:e).get(A.envMap||z),j=Z&&Z.mapping===306?Z.image.height:null,re=g[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));const ae=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ge=ae!==void 0?ae.length:0;let Ce=0;D.morphAttributes.position!==void 0&&(Ce=1),D.morphAttributes.normal!==void 0&&(Ce=2),D.morphAttributes.color!==void 0&&(Ce=3);let ze,Q,le,Me;if(re){const de=Dn[re];ze=de.vertexShader,Q=de.fragmentShader}else ze=A.vertexShader,Q=A.fragmentShader,c.update(A),le=c.getVertexShaderID(A),Me=c.getFragmentShaderID(A);const J=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),ce=q.isInstancedMesh===!0,he=q.isBatchedMesh===!0,Oe=!!A.map,Ve=!!A.matcap,Ye=!!Z,U=!!A.aoMap,pt=!!A.lightMap,We=!!A.bumpMap,be=!!A.normalMap,Pe=!!A.displacementMap,rt=!!A.emissiveMap,Se=!!A.metalnessMap,R=!!A.roughnessMap,S=A.anisotropy>0,O=A.clearcoat>0,ee=A.dispersion>0,te=A.iridescence>0,se=A.sheen>0,Ie=A.transmission>0,xe=S&&!!A.anisotropyMap,we=O&&!!A.clearcoatMap,Qe=O&&!!A.clearcoatNormalMap,me=O&&!!A.clearcoatRoughnessMap,Te=te&&!!A.iridescenceMap,Ee=te&&!!A.iridescenceThicknessMap,Ne=se&&!!A.sheenColorMap,ve=se&&!!A.sheenRoughnessMap,C=!!A.specularMap,b=!!A.specularColorMap,ne=!!A.specularIntensityMap,w=Ie&&!!A.transmissionMap,F=Ie&&!!A.thicknessMap,G=!!A.gradientMap,W=!!A.alphaMap,X=A.alphaTest>0,ie=!!A.alphaHash,_e=!!A.extensions;let ye=0;A.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ye=i.toneMapping);const Ae={shaderID:re,shaderType:A.type,shaderName:A.name,vertexShader:ze,fragmentShader:Q,defines:A.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:he,batchingColor:he&&q._colorsTexture!==null,instancing:ce,instancingColor:ce&&q.instanceColor!==null,instancingMorph:ce&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:an,alphaToCoverage:!!A.alphaToCoverage,map:Oe,matcap:Ve,envMap:Ye,envMapMode:Ye&&Z.mapping,envMapCubeUVHeight:j,aoMap:U,lightMap:pt,bumpMap:We,normalMap:be,displacementMap:d&&Pe,emissiveMap:rt,normalMapObjectSpace:be&&A.normalMapType===1,normalMapTangentSpace:be&&A.normalMapType===0,metalnessMap:Se,roughnessMap:R,anisotropy:S,anisotropyMap:xe,clearcoat:O,clearcoatMap:we,clearcoatNormalMap:Qe,clearcoatRoughnessMap:me,dispersion:ee,iridescence:te,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:se,sheenColorMap:Ne,sheenRoughnessMap:ve,specularMap:C,specularColorMap:b,specularIntensityMap:ne,transmission:Ie,transmissionMap:w,thicknessMap:F,gradientMap:G,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:W,alphaTest:X,alphaHash:ie,combine:A.combine,mapUv:Oe&&_(A.map.channel),aoMapUv:U&&_(A.aoMap.channel),lightMapUv:pt&&_(A.lightMap.channel),bumpMapUv:We&&_(A.bumpMap.channel),normalMapUv:be&&_(A.normalMap.channel),displacementMapUv:Pe&&_(A.displacementMap.channel),emissiveMapUv:rt&&_(A.emissiveMap.channel),metalnessMapUv:Se&&_(A.metalnessMap.channel),roughnessMapUv:R&&_(A.roughnessMap.channel),anisotropyMapUv:xe&&_(A.anisotropyMap.channel),clearcoatMapUv:we&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(A.sheenRoughnessMap.channel),specularMapUv:C&&_(A.specularMap.channel),specularColorMapUv:b&&_(A.specularColorMap.channel),specularIntensityMapUv:ne&&_(A.specularIntensityMap.channel),transmissionMapUv:w&&_(A.transmissionMap.channel),thicknessMapUv:F&&_(A.thicknessMap.channel),alphaMapUv:W&&_(A.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(be||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!D.attributes.uv&&(Oe||W),fog:!!V,useFog:A.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:oe,skinning:q.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:Oe&&A.map.isVideoTexture===!0&&gt.getTransfer(A.map.colorSpace)===Et,decodeVideoTextureEmissive:rt&&A.emissiveMap.isVideoTexture===!0&&gt.getTransfer(A.emissiveMap.colorSpace)===Et,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:_e&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&A.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)M.push(L),M.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(y(M,A),E(M,A),M.push(i.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function y(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function E(A,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),A.push(o.mask)}function x(A){const M=g[A.type];let L;if(M){const K=Dn[M];L=ad.clone(K.uniforms)}else L=A.uniforms;return L}function I(A,M){let L;for(let K=0,q=u.length;K<q;K++){const V=u[K];if(V.cacheKey===M){L=V,++L.usedTimes;break}}return L===void 0&&(L=new f_(i,M,A,r),u.push(L)),L}function T(A){if(--A.usedTimes===0){const M=u.indexOf(A);u[M]=u[u.length-1],u.pop(),A.destroy()}}function P(A){c.remove(A)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:N}}function b_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function x_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||x_),n.length>1&&n.sort(d||Cc),s.length>1&&s.sort(d||Cc)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function v_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Pc,i.set(n,[a])):s>=r.length?(a=new Pc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function y_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ke};break;case"SpotLight":t={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function M_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let S_=0;function E_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function A_(i){const e=new y_,t=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const s=new B,r=new st,a=new st;function o(l){let u=0,h=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,E=0,x=0,I=0,T=0,P=0;l.sort(E_);for(let A=0,M=l.length;A<M;A++){const L=l[A],K=L.color,q=L.intensity,V=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=K.r*q,h+=K.g*q,d+=K.b*q;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],q);P++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,j=t.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=z,f++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(K).multiplyScalar(q),z.distance=V,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[_]=z;const Z=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,Z.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=Z.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=D,x++}_++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(K).multiplyScalar(q),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const Z=L.shadow,j=t.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=z,g++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(q),z.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==y||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==I||N.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=y,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=I,N.numLightProbes=P,n.version=S_++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const E=l[p];if(E.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Ic(i){const e=new A_(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function T_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ic(i),e.set(s,[o])):r>=a.length?(o=new Ic(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
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
}`;function C_(i,e,t){let n=new no;const s=new Ze,r=new Ze,a=new xt,o=new Ed({depthPacking:3201}),c=new Ad,l={},u=t.maxTextureSize,h={0:1,1:0,2:2},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:w_,fragmentShader:R_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(T,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const A=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),K=i.state;K.setBlending(0),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const q=p!==3&&this.type===3,V=p===3&&this.type!==3;for(let D=0,z=T.length;D<z;D++){const Z=T[D],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const re=j.getFrameExtents();if(s.multiply(re),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,j.mapSize.y=r.y)),j.map===null||q===!0||V===!0){const ge=this.type!==3?{minFilter:1003,magFilter:1003}:{};j.map!==null&&j.map.dispose(),j.map=new Pi(s.x,s.y,ge),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const ae=j.getViewportCount();for(let ge=0;ge<ae;ge++){const Ce=j.getViewport(ge);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),K.viewport(a),j.updateMatrices(Z,ge),n=j.getFrustum(),x(P,N,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===3&&y(j,N),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,M,L)};function y(T,P){const N=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,N,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,N,f,_,null)}function E(T,P,N,A){let M=null;const L=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=N.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const K=M.uuid,q=P.uuid;let V=l[K];V===void 0&&(V={},l[K]=V);let D=V[q];D===void 0&&(D=M.clone(),V[q]=D,P.addEventListener("dispose",I)),M=D}if(M.visible=P.visible,M.wireframe=P.wireframe,A===3?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const K=i.properties.get(M);K.light=N}return M}function x(T,P,N,A,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const q=e.update(T),V=T.material;if(Array.isArray(V)){const D=q.groups;for(let z=0,Z=D.length;z<Z;z++){const j=D[z],re=V[j.materialIndex];if(re&&re.visible){const ae=E(T,re,A,M);T.onBeforeShadow(i,T,P,N,q,ae,j),i.renderBufferDirect(N,null,q,ae,T,j),T.onAfterShadow(i,T,P,N,q,ae,j)}}}else if(V.visible){const D=E(T,V,A,M);T.onBeforeShadow(i,T,P,N,q,D,null),i.renderBufferDirect(N,null,q,D,T,null),T.onAfterShadow(i,T,P,N,q,D,null)}}const K=T.children;for(let q=0,V=K.length;q<V;q++)x(K[q],P,N,A,M)}function I(T){T.target.removeEventListener("dispose",I);for(const N in l){const A=l[N],M=T.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}const P_={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function I_(i,e){function t(){let w=!1;const F=new xt;let G=null;const W=new xt(0,0,0,0);return{setMask:function(X){G!==X&&!w&&(i.colorMask(X,X,X,X),G=X)},setLocked:function(X){w=X},setClear:function(X,ie,_e,ye,Ae){Ae===!0&&(X*=ye,ie*=ye,_e*=ye),F.set(X,ie,_e,ye),W.equals(F)===!1&&(i.clearColor(X,ie,_e,ye),W.copy(F))},reset:function(){w=!1,G=null,W.set(-1,0,0,0)}}}function n(){let w=!1,F=!1,G=null,W=null,X=null;return{setReversed:function(ie){if(F!==ie){const _e=e.get("EXT_clip_control");F?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT);const ye=X;X=null,this.setClear(ye)}F=ie},getReversed:function(){return F},setTest:function(ie){ie?J(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(ie){G!==ie&&!w&&(i.depthMask(ie),G=ie)},setFunc:function(ie){if(F&&(ie=P_[ie]),W!==ie){switch(ie){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=ie}},setLocked:function(ie){w=ie},setClear:function(ie){X!==ie&&(F&&(ie=1-ie),i.clearDepth(ie),X=ie)},reset:function(){w=!1,G=null,W=null,X=null,F=!1}}}function s(){let w=!1,F=null,G=null,W=null,X=null,ie=null,_e=null,ye=null,Ae=null;return{setTest:function(de){w||(de?J(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(de){F!==de&&!w&&(i.stencilMask(de),F=de)},setFunc:function(de,Re,De){(G!==de||W!==Re||X!==De)&&(i.stencilFunc(de,Re,De),G=de,W=Re,X=De)},setOp:function(de,Re,De){(ie!==de||_e!==Re||ye!==De)&&(i.stencilOp(de,Re,De),ie=de,_e=Re,ye=De)},setLocked:function(de){w=de},setClear:function(de){Ae!==de&&(i.clearStencil(de),Ae=de)},reset:function(){w=!1,F=null,G=null,W=null,X=null,ie=null,_e=null,ye=null,Ae=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,E=null,x=null,I=null,T=null,P=new Ke(0,0,0),N=0,A=!1,M=null,L=null,K=null,q=null,V=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=Z>=2);let re=null,ae={};const ge=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),ze=new xt().fromArray(ge),Q=new xt().fromArray(Ce);function le(w,F,G,W){const X=new Uint8Array(4),ie=i.createTexture();i.bindTexture(w,ie),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<G;_e++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(F,0,i.RGBA,1,1,W,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(F+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return ie}const Me={};Me[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(3),We(!1),be(1),J(i.CULL_FACE),U(0);function J(w){u[w]!==!0&&(i.enable(w),u[w]=!0)}function oe(w){u[w]!==!1&&(i.disable(w),u[w]=!1)}function ce(w,F){return h[w]!==F?(i.bindFramebuffer(w,F),h[w]=F,w===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=F),w===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=F),!0):!1}function he(w,F){let G=f,W=!1;if(w){G=d.get(F),G===void 0&&(G=[],d.set(F,G));const X=w.textures;if(G.length!==X.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,_e=X.length;ie<_e;ie++)G[ie]=i.COLOR_ATTACHMENT0+ie;G.length=X.length,W=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,W=!0);W&&i.drawBuffers(G)}function Oe(w){return g!==w?(i.useProgram(w),g=w,!0):!1}const Ve={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Ve[103]=i.MIN,Ve[104]=i.MAX;const Ye={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function U(w,F,G,W,X,ie,_e,ye,Ae,de){if(w===0){_===!0&&(oe(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),w!==5){if(w!==m||de!==A){if((p!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,x=100),de)switch(w){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}y=null,E=null,I=null,T=null,P.set(0,0,0),N=0,m=w,A=de}return}X=X||F,ie=ie||G,_e=_e||W,(F!==p||X!==x)&&(i.blendEquationSeparate(Ve[F],Ve[X]),p=F,x=X),(G!==y||W!==E||ie!==I||_e!==T)&&(i.blendFuncSeparate(Ye[G],Ye[W],Ye[ie],Ye[_e]),y=G,E=W,I=ie,T=_e),(ye.equals(P)===!1||Ae!==N)&&(i.blendColor(ye.r,ye.g,ye.b,Ae),P.copy(ye),N=Ae),m=w,A=!1}function pt(w,F){w.side===2?oe(i.CULL_FACE):J(i.CULL_FACE);let G=w.side===1;F&&(G=!G),We(G),w.blending===1&&w.transparent===!1?U(0):U(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),r.setMask(w.colorWrite);const W=w.stencilWrite;o.setTest(W),W&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),rt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(w){M!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),M=w)}function be(w){w!==0?(J(i.CULL_FACE),w!==L&&(w===1?i.cullFace(i.BACK):w===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),L=w}function Pe(w){w!==K&&(z&&i.lineWidth(w),K=w)}function rt(w,F,G){w?(J(i.POLYGON_OFFSET_FILL),(q!==F||V!==G)&&(i.polygonOffset(F,G),q=F,V=G)):oe(i.POLYGON_OFFSET_FILL)}function Se(w){w?J(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function R(w){w===void 0&&(w=i.TEXTURE0+D-1),re!==w&&(i.activeTexture(w),re=w)}function S(w,F,G){G===void 0&&(re===null?G=i.TEXTURE0+D-1:G=re);let W=ae[G];W===void 0&&(W={type:void 0,texture:void 0},ae[G]=W),(W.type!==w||W.texture!==F)&&(re!==G&&(i.activeTexture(G),re=G),i.bindTexture(w,F||Me[w]),W.type=w,W.texture=F)}function O(){const w=ae[re];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ne(w){ze.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),ze.copy(w))}function ve(w){Q.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),Q.copy(w))}function C(w,F){let G=l.get(F);G===void 0&&(G=new WeakMap,l.set(F,G));let W=G.get(w);W===void 0&&(W=i.getUniformBlockIndex(F,w.name),G.set(w,W))}function b(w,F){const W=l.get(F).get(w);c.get(F)!==W&&(i.uniformBlockBinding(F,W,w.__bindingPointIndex),c.set(F,W))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,ae={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,E=null,x=null,I=null,T=null,P=new Ke(0,0,0),N=0,A=!1,M=null,L=null,K=null,q=null,V=null,ze.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:oe,bindFramebuffer:ce,drawBuffers:he,useProgram:Oe,setBlending:U,setMaterial:pt,setFlipSided:We,setCullFace:be,setLineWidth:Pe,setPolygonOffset:rt,setScissorTest:Se,activeTexture:R,bindTexture:S,unbindTexture:O,compressedTexImage2D:ee,compressedTexImage3D:te,texImage2D:Te,texImage3D:Ee,updateUBOMapping:C,uniformBlockBinding:b,texStorage2D:Qe,texStorage3D:me,texSubImage2D:se,texSubImage3D:Ie,compressedTexSubImage2D:xe,compressedTexSubImage3D:we,scissor:Ne,viewport:ve,reset:ne}}function L_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):Fs("canvas")}function _(R,S,O){let ee=1;const te=Se(R);if((te.width>O||te.height>O)&&(ee=O/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(ee*te.width),Ie=Math.floor(ee*te.height);h===void 0&&(h=g(se,Ie));const xe=S?g(se,Ie):h;return xe.width=se,xe.height=Ie,xe.getContext("2d").drawImage(R,0,0,se,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+se+"x"+Ie+")."),xe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,S,O,ee,te=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=S;if(S===i.RED&&(O===i.FLOAT&&(se=i.R32F),O===i.HALF_FLOAT&&(se=i.R16F),O===i.UNSIGNED_BYTE&&(se=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(se=i.R8UI),O===i.UNSIGNED_SHORT&&(se=i.R16UI),O===i.UNSIGNED_INT&&(se=i.R32UI),O===i.BYTE&&(se=i.R8I),O===i.SHORT&&(se=i.R16I),O===i.INT&&(se=i.R32I)),S===i.RG&&(O===i.FLOAT&&(se=i.RG32F),O===i.HALF_FLOAT&&(se=i.RG16F),O===i.UNSIGNED_BYTE&&(se=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(se=i.RG8UI),O===i.UNSIGNED_SHORT&&(se=i.RG16UI),O===i.UNSIGNED_INT&&(se=i.RG32UI),O===i.BYTE&&(se=i.RG8I),O===i.SHORT&&(se=i.RG16I),O===i.INT&&(se=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(se=i.RGB8UI),O===i.UNSIGNED_SHORT&&(se=i.RGB16UI),O===i.UNSIGNED_INT&&(se=i.RGB32UI),O===i.BYTE&&(se=i.RGB8I),O===i.SHORT&&(se=i.RGB16I),O===i.INT&&(se=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),O===i.UNSIGNED_INT&&(se=i.RGBA32UI),O===i.BYTE&&(se=i.RGBA8I),O===i.SHORT&&(se=i.RGBA16I),O===i.INT&&(se=i.RGBA32I)),S===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),S===i.RGBA){const Ie=te?Nr:gt.getTransfer(ee);O===i.FLOAT&&(se=i.RGBA32F),O===i.HALF_FLOAT&&(se=i.RGBA16F),O===i.UNSIGNED_BYTE&&(se=Ie===Et?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(R,S){let O;return R?S===null||S===1014||S===1020?O=i.DEPTH24_STENCIL8:S===1015?O=i.DEPTH32F_STENCIL8:S===1012&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===1014||S===1020?O=i.DEPTH_COMPONENT24:S===1015?O=i.DEPTH_COMPONENT32F:S===1012&&(O=i.DEPTH_COMPONENT16),O}function I(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),N(S),S.isVideoTexture&&u.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),M(S)}function N(R){const S=n.get(R);if(S.__webglInit===void 0)return;const O=R.source,ee=d.get(O);if(ee){const te=ee[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(R),Object.keys(ee).length===0&&d.delete(O)}n.remove(R)}function A(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const O=R.source,ee=d.get(O);delete ee[S.__cacheKey],a.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let te=0;te<S.__webglFramebuffer[ee].length;te++)i.deleteFramebuffer(S.__webglFramebuffer[ee][te]);else i.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[ee]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=R.textures;for(let ee=0,te=O.length;ee<te;ee++){const se=n.get(O[ee]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(O[ee])}n.remove(R)}let L=0;function K(){L=0}function q(){const R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function V(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function D(R,S){const O=n.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(O,R,S);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function z(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Q(O,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function Z(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Q(O,R,S);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function j(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){le(O,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}const re={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},ae={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ge={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Ce(R,S){if(S.type===1015&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===1006||S.magFilter===1007||S.magFilter===1005||S.magFilter===1008||S.minFilter===1006||S.minFilter===1007||S.minFilter===1005||S.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,re[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ze(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const ee=S.source;let te=d.get(ee);te===void 0&&(te={},d.set(ee,te));const se=V(S);if(se!==R.__cacheKey){te[se]===void 0&&(te[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[se].usedTimes++;const Ie=te[R.__cacheKey];Ie!==void 0&&(te[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&A(S)),R.__cacheKey=se,R.__webglTexture=te[se].texture}return O}function Q(R,S,O){let ee=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=i.TEXTURE_3D);const te=ze(R,S),se=S.source;t.bindTexture(ee,R.__webglTexture,i.TEXTURE0+O);const Ie=n.get(se);if(se.version!==Ie.__version||te===!0){t.activeTexture(i.TEXTURE0+O);const xe=gt.getPrimaries(gt.workingColorSpace),we=S.colorSpace===""?null:gt.getPrimaries(S.colorSpace),Qe=S.colorSpace===""||xe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let me=_(S.image,!1,s.maxTextureSize);me=rt(S,me);const Te=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type);let Ne=E(S.internalFormat,Te,Ee,S.colorSpace,S.isVideoTexture);Ce(ee,S);let ve;const C=S.mipmaps,b=S.isVideoTexture!==!0,ne=Ie.__version===void 0||te===!0,w=se.dataReady,F=I(S,me);if(S.isDepthTexture)Ne=x(S.format===1027,S.type),ne&&(b?t.texStorage2D(i.TEXTURE_2D,1,Ne,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ne,me.width,me.height,0,Te,Ee,null));else if(S.isDataTexture)if(C.length>0){b&&ne&&t.texStorage2D(i.TEXTURE_2D,F,Ne,C[0].width,C[0].height);for(let G=0,W=C.length;G<W;G++)ve=C[G],b?w&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,ve.width,ve.height,Te,Ee,ve.data):t.texImage2D(i.TEXTURE_2D,G,Ne,ve.width,ve.height,0,Te,Ee,ve.data);S.generateMipmaps=!1}else b?(ne&&t.texStorage2D(i.TEXTURE_2D,F,Ne,me.width,me.height),w&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Te,Ee,me.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,me.width,me.height,0,Te,Ee,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){b&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,F,Ne,C[0].width,C[0].height,me.depth);for(let G=0,W=C.length;G<W;G++)if(ve=C[G],S.format!==1023)if(Te!==null)if(b){if(w)if(S.layerUpdates.size>0){const X=oc(ve.width,ve.height,S.format,S.type);for(const ie of S.layerUpdates){const _e=ve.data.subarray(ie*X/ve.data.BYTES_PER_ELEMENT,(ie+1)*X/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ie,ve.width,ve.height,1,Te,_e)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,me.depth,Te,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ne,ve.width,ve.height,me.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else b?w&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,me.depth,Te,Ee,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Ne,ve.width,ve.height,me.depth,0,Te,Ee,ve.data)}else{b&&ne&&t.texStorage2D(i.TEXTURE_2D,F,Ne,C[0].width,C[0].height);for(let G=0,W=C.length;G<W;G++)ve=C[G],S.format!==1023?Te!==null?b?w&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ve.width,ve.height,Te,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?w&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,ve.width,ve.height,Te,Ee,ve.data):t.texImage2D(i.TEXTURE_2D,G,Ne,ve.width,ve.height,0,Te,Ee,ve.data)}else if(S.isDataArrayTexture)if(b){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,F,Ne,me.width,me.height,me.depth),w)if(S.layerUpdates.size>0){const G=oc(me.width,me.height,S.format,S.type);for(const W of S.layerUpdates){const X=me.data.subarray(W*G/me.data.BYTES_PER_ELEMENT,(W+1)*G/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,me.width,me.height,1,Te,Ee,X)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Te,Ee,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,me.width,me.height,me.depth,0,Te,Ee,me.data);else if(S.isData3DTexture)b?(ne&&t.texStorage3D(i.TEXTURE_3D,F,Ne,me.width,me.height,me.depth),w&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Te,Ee,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,me.width,me.height,me.depth,0,Te,Ee,me.data);else if(S.isFramebufferTexture){if(ne)if(b)t.texStorage2D(i.TEXTURE_2D,F,Ne,me.width,me.height);else{let G=me.width,W=me.height;for(let X=0;X<F;X++)t.texImage2D(i.TEXTURE_2D,X,Ne,G,W,0,Te,Ee,null),G>>=1,W>>=1}}else if(C.length>0){if(b&&ne){const G=Se(C[0]);t.texStorage2D(i.TEXTURE_2D,F,Ne,G.width,G.height)}for(let G=0,W=C.length;G<W;G++)ve=C[G],b?w&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Te,Ee,ve):t.texImage2D(i.TEXTURE_2D,G,Ne,Te,Ee,ve);S.generateMipmaps=!1}else if(b){if(ne){const G=Se(me);t.texStorage2D(i.TEXTURE_2D,F,Ne,G.width,G.height)}w&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ee,me)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Te,Ee,me);m(S)&&p(ee),Ie.__version=se.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function le(R,S,O){if(S.image.length!==6)return;const ee=ze(R,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const se=n.get(te);if(te.version!==se.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const Ie=gt.getPrimaries(gt.workingColorSpace),xe=S.colorSpace===""?null:gt.getPrimaries(S.colorSpace),we=S.colorSpace===""||Ie===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let W=0;W<6;W++)!Qe&&!me?Te[W]=_(S.image[W],!0,s.maxCubemapSize):Te[W]=me?S.image[W].image:S.image[W],Te[W]=rt(S,Te[W]);const Ee=Te[0],Ne=r.convert(S.format,S.colorSpace),ve=r.convert(S.type),C=E(S.internalFormat,Ne,ve,S.colorSpace),b=S.isVideoTexture!==!0,ne=se.__version===void 0||ee===!0,w=te.dataReady;let F=I(S,Ee);Ce(i.TEXTURE_CUBE_MAP,S);let G;if(Qe){b&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,F,C,Ee.width,Ee.height);for(let W=0;W<6;W++){G=Te[W].mipmaps;for(let X=0;X<G.length;X++){const ie=G[X];S.format!==1023?Ne!==null?b?w&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,X,0,0,ie.width,ie.height,Ne,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,X,C,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,X,0,0,ie.width,ie.height,Ne,ve,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,X,C,ie.width,ie.height,0,Ne,ve,ie.data)}}}else{if(G=S.mipmaps,b&&ne){G.length>0&&F++;const W=Se(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,F,C,W.width,W.height)}for(let W=0;W<6;W++)if(me){b?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Te[W].width,Te[W].height,Ne,ve,Te[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,C,Te[W].width,Te[W].height,0,Ne,ve,Te[W].data);for(let X=0;X<G.length;X++){const _e=G[X].image[W].image;b?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,X+1,0,0,_e.width,_e.height,Ne,ve,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,X+1,C,_e.width,_e.height,0,Ne,ve,_e.data)}}else{b?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ne,ve,Te[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,C,Ne,ve,Te[W]);for(let X=0;X<G.length;X++){const ie=G[X];b?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,X+1,0,0,Ne,ve,ie.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,X+1,C,Ne,ve,ie.image[W])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),se.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Me(R,S,O,ee,te,se){const Ie=r.convert(O.format,O.colorSpace),xe=r.convert(O.type),we=E(O.internalFormat,Ie,xe,O.colorSpace),Qe=n.get(S),me=n.get(O);if(me.__renderTarget=S,!Qe.__hasExternalTextures){const Te=Math.max(1,S.width>>se),Ee=Math.max(1,S.height>>se);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,se,we,Te,Ee,S.depth,0,Ie,xe,null):t.texImage2D(te,se,we,Te,Ee,0,Ie,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,te,me.__webglTexture,0,We(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,te,me.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function J(R,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const ee=S.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,se=x(S.stencilBuffer,te),Ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=We(S);be(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,se,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,R)}else{const ee=S.textures;for(let te=0;te<ee.length;te++){const se=ee[te],Ie=r.convert(se.format,se.colorSpace),xe=r.convert(se.type),we=E(se.internalFormat,Ie,xe,se.colorSpace),Qe=We(S);O&&be(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,we,S.width,S.height):be(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,we,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,we,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(S.depthTexture);ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const te=ee.__webglTexture,se=We(S);if(S.depthTexture.format===1026)be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(S.depthTexture.format===1027)be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ce(R){const S=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",te)};ee.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=ee}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,R)}else if(O){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=i.createRenderbuffer(),J(S.__webglDepthbuffer[ee],R,!1);else{const te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),J(S.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(R,S,O){const ee=n.get(R);S!==void 0&&Me(ee.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ce(R)}function Oe(R){const S=R.texture,O=n.get(R),ee=n.get(S);R.addEventListener("dispose",P);const te=R.textures,se=R.isWebGLCubeRenderTarget===!0,Ie=te.length>1;if(Ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=S.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[xe]=[];for(let we=0;we<S.mipmaps.length;we++)O.__webglFramebuffer[xe][we]=i.createFramebuffer()}else O.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)O.__webglFramebuffer[xe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let xe=0,we=te.length;xe<we;xe++){const Qe=n.get(te[xe]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&be(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xe=0;xe<te.length;xe++){const we=te[xe];O.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[xe]);const Qe=r.convert(we.format,we.colorSpace),me=r.convert(we.type),Te=E(we.internalFormat,Qe,me,we.colorSpace,R.isXRRenderTarget===!0),Ee=We(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Te,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,O.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),J(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)Me(O.__webglFramebuffer[xe][we],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else Me(O.__webglFramebuffer[xe],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let xe=0,we=te.length;xe<we;xe++){const Qe=te[xe],me=n.get(Qe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Ce(i.TEXTURE_2D,Qe),Me(O.__webglFramebuffer,R,Qe,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(Qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,ee.__webglTexture),Ce(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)Me(O.__webglFramebuffer[we],R,S,i.COLOR_ATTACHMENT0,xe,we);else Me(O.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,xe,0);m(S)&&p(xe),t.unbindTexture()}R.depthBuffer&&ce(R)}function Ve(R){const S=R.textures;for(let O=0,ee=S.length;O<ee;O++){const te=S[O];if(m(te)){const se=y(R),Ie=n.get(te).__webglTexture;t.bindTexture(se,Ie),p(se),t.unbindTexture()}}}const Ye=[],U=[];function pt(R){if(R.samples>0){if(be(R)===!1){const S=R.textures,O=R.width,ee=R.height;let te=i.COLOR_BUFFER_BIT;const se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(R),xe=S.length>1;if(xe)for(let we=0;we<S.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let we=0;we<S.length;we++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const Qe=n.get(S[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,O,ee,0,0,O,ee,te,i.NEAREST),c===!0&&(Ye.length=0,U.length=0,Ye.push(i.COLOR_ATTACHMENT0+we),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ye.push(se),U.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let we=0;we<S.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const Qe=n.get(S[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function We(R){return Math.min(s.maxSamples,R.samples)}function be(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function rt(R,S){const O=R.colorSpace,ee=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==an&&O!==""&&(gt.getTransfer(O)===Et?(ee!==1023||te!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=D,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=he,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=be}function D_(i,e){function t(n,s=""){let r;const a=gt.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const F_={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new li({vertexShader:N_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k_ extends Ii{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new O_,m=t.getContextAttributes();let p=null,y=null;const E=[],x=[],I=new Ze;let T=null;const P=new rn;P.viewport=new xt;const N=new rn;N.viewport=new xt;const A=[P,N],M=new Xd;let L=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=E[Q];return le===void 0&&(le=new wa,E[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=E[Q];return le===void 0&&(le=new wa,E[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=E[Q];return le===void 0&&(le=new wa,E[Q]=le),le.getHandSpace()};function q(Q){const le=x.indexOf(Q.inputSource);if(le===-1)return;const Me=E[le];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,l||a),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",D);for(let Q=0;Q<E.length;Q++){const le=x[Q];le!==null&&(x[Q]=null,E[Q].disconnect(le))}L=null,K=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Pi(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,Me=null,J=null;m.depth&&(J=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?1027:1026,Me=m.stencil?1020:1014);const oe={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Pi(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new _h(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D(Q){for(let le=0;le<Q.removed.length;le++){const Me=Q.removed[le],J=x.indexOf(Me);J>=0&&(x[J]=null,E[J].disconnect(Me))}for(let le=0;le<Q.added.length;le++){const Me=Q.added[le];let J=x.indexOf(Me);if(J===-1){for(let ce=0;ce<E.length;ce++)if(ce>=x.length){x.push(Me),J=ce;break}else if(x[ce]===null){x[ce]=Me,J=ce;break}if(J===-1)break}const oe=E[J];oe&&oe.connect(Me)}}const z=new B,Z=new B;function j(Q,le,Me){z.setFromMatrixPosition(le.matrixWorld),Z.setFromMatrixPosition(Me.matrixWorld);const J=z.distanceTo(Z),oe=le.projectionMatrix.elements,ce=Me.projectionMatrix.elements,he=oe[14]/(oe[10]-1),Oe=oe[14]/(oe[10]+1),Ve=(oe[9]+1)/oe[5],Ye=(oe[9]-1)/oe[5],U=(oe[8]-1)/oe[0],pt=(ce[8]+1)/ce[0],We=he*U,be=he*pt,Pe=J/(-U+pt),rt=Pe*-U;if(le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(rt),Q.translateZ(Pe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),oe[10]===-1)Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Se=he+Pe,R=Oe+Pe,S=We-rt,O=be+(J-rt),ee=Ve*Oe/R*Se,te=Ye*Oe/R*Se;Q.projectionMatrix.makePerspective(S,O,ee,te,Se,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function re(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let le=Q.near,Me=Q.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),M.near=N.near=P.near=le,M.far=N.far=P.far=Me,(L!==M.near||K!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,K=M.far),P.layers.mask=Q.layers.mask|2,N.layers.mask=Q.layers.mask|4,M.layers.mask=P.layers.mask|N.layers.mask;const J=Q.parent,oe=M.cameras;re(M,J);for(let ce=0;ce<oe.length;ce++)re(oe[ce],J);oe.length===2?j(M,P,N):M.projectionMatrix.copy(P.projectionMatrix),ae(Q,M,J)};function ae(Q,le,Me){Me===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ns*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ge=null;function Ce(Q,le){if(u=le.getViewerPose(l||a),g=le,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let J=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let ce=0;ce<Me.length;ce++){const he=Me[ce];let Oe=null;if(f!==null)Oe=f.getViewport(he);else{const Ye=h.getViewSubImage(d,he);Oe=Ye.viewport,ce===0&&(e.setRenderTargetTextures(y,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(y))}let Ve=A[ce];Ve===void 0&&(Ve=new rn,Ve.layers.enable(ce),Ve.viewport=new xt,A[ce]=Ve),Ve.matrix.fromArray(he.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(he.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ce===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),J===!0&&M.cameras.push(Ve)}const oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const ce=h.getDepthInformation(Me[0]);ce&&ce.isValid&&ce.texture&&_.init(e,ce,s.renderState)}}for(let Me=0;Me<E.length;Me++){const J=x[Me],oe=E[Me];J!==null&&oe!==void 0&&oe.update(J,le,l||a)}ge&&ge(Q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const ze=new Sh;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){ge=Q},this.dispose=function(){}}}const gi=new Pn,B_=new st;function G_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,gi.copy(x),gi.x*=-1,gi.y*=-1,gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(gi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const x=E.program;n.uniformBlockBinding(y,x)}function l(y,E){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(y,I);const T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function u(y){const E=h();y.__bindingPointIndex=E;const x=i.createBuffer(),I=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=s[y.id],x=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,P=x.length;T<P;T++){const N=Array.isArray(x[T])?x[T]:[x[T]];for(let A=0,M=N.length;A<M;A++){const L=N[A];if(f(L,T,A,I)===!0){const K=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let D=0;D<q.length;D++){const z=q[D],Z=_(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,K+V,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,x,I){const T=y.value,P=E+"_"+x;if(I[P]===void 0)return typeof T=="number"||typeof T=="boolean"?I[P]=T:I[P]=T.clone(),!0;{const N=I[P];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return I[P]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function g(y){const E=y.uniforms;let x=0;const I=16;for(let P=0,N=E.length;P<N;P++){const A=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,L=A.length;M<L;M++){const K=A[M],q=Array.isArray(K.value)?K.value:[K.value];for(let V=0,D=q.length;V<D;V++){const z=q[V],Z=_(z),j=x%I,re=j%Z.boundary,ae=j+re;x+=re,ae!==0&&I-ae<Z.storage&&(x+=I-ae),K.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=x,x+=Z.storage}}}const T=x%I;return T>0&&(x+=I-T),y.__size=x,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class H_{constructor(e={}){const{canvas:t=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let I=!1,T=0,P=0,N=null,A=-1,M=null;const L=new xt,K=new xt;let q=null;const V=new Ke(0);let D=0,z=t.width,Z=t.height,j=1,re=null,ae=null;const ge=new xt(0,0,z,Z),Ce=new xt(0,0,z,Z);let ze=!1;const Q=new no;let le=!1,Me=!1;const J=new st,oe=new st,ce=new B,he=new xt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ye(){return N===null?j:1}let U=n;function pt(v,k){return t.getContext(v,k)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r171"),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",ie,!1),U===null){const k="webgl2";if(U=pt(k,v),U===null)throw pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let We,be,Pe,rt,Se,R,S,O,ee,te,se,Ie,xe,we,Qe,me,Te,Ee,Ne,ve,C,b,ne,w;function F(){We=new Zm(U),We.init(),b=new D_(U,We),be=new Xm(U,We,e,b),Pe=new I_(U,We),be.reverseDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),rt=new eg(U),Se=new b_,R=new L_(U,We,Pe,Se,be,b,rt),S=new qm(x),O=new $m(x),ee=new of(U),ne=new Vm(U,ee),te=new Jm(U,ee,rt,ne),se=new ng(U,te,ee,rt),Ne=new tg(U,be,R),me=new jm(Se),Ie=new __(x,S,O,We,be,ne,me),xe=new G_(x,Se),we=new v_,Qe=new T_(We),Ee=new Hm(x,S,O,Pe,se,f,c),Te=new C_(x,se,be),w=new z_(U,rt,be,Pe),ve=new Wm(U,We,rt),C=new Qm(U,We,rt),rt.programs=Ie.programs,x.capabilities=be,x.extensions=We,x.properties=Se,x.renderLists=we,x.shadowMap=Te,x.state=Pe,x.info=rt}F();const G=new k_(x,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=We.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=We.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(z,Z,!1))},this.getSize=function(v){return v.set(z,Z)},this.setSize=function(v,k,Y=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=v,Z=k,t.width=Math.floor(v*j),t.height=Math.floor(k*j),Y===!0&&(t.style.width=v+"px",t.style.height=k+"px"),this.setViewport(0,0,v,k)},this.getDrawingBufferSize=function(v){return v.set(z*j,Z*j).floor()},this.setDrawingBufferSize=function(v,k,Y){z=v,Z=k,j=Y,t.width=Math.floor(v*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,v,k)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(ge)},this.setViewport=function(v,k,Y,$){v.isVector4?ge.set(v.x,v.y,v.z,v.w):ge.set(v,k,Y,$),Pe.viewport(L.copy(ge).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(Ce)},this.setScissor=function(v,k,Y,$){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,k,Y,$),Pe.scissor(K.copy(Ce).multiplyScalar(j).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(v){Pe.setScissorTest(ze=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){ae=v},this.getClearColor=function(v){return v.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(v=!0,k=!0,Y=!0){let $=0;if(v){let H=!1;if(N!==null){const ue=N.texture.format;H=ue===1033||ue===1031||ue===1029}if(H){const ue=N.texture.type,fe=ue===1009||ue===1014||ue===1012||ue===1020||ue===1017||ue===1018,Fe=Ee.getClearColor(),Ue=Ee.getClearAlpha(),ke=Fe.r,Xe=Fe.g,Be=Fe.b;fe?(g[0]=ke,g[1]=Xe,g[2]=Be,g[3]=Ue,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=ke,_[1]=Xe,_[2]=Be,_[3]=Ue,U.clearBufferiv(U.COLOR,0,_))}else $|=U.COLOR_BUFFER_BIT}k&&($|=U.DEPTH_BUFFER_BIT),Y&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Ee.dispose(),we.dispose(),Qe.dispose(),Se.dispose(),S.dispose(),O.dispose(),se.dispose(),ne.dispose(),w.dispose(),Ie.dispose(),G.dispose(),G.removeEventListener("sessionstart",Ge),G.removeEventListener("sessionend",lt),$e.stop()};function W(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const v=rt.autoReset,k=Te.enabled,Y=Te.autoUpdate,$=Te.needsUpdate,H=Te.type;F(),rt.autoReset=v,Te.enabled=k,Te.autoUpdate=Y,Te.needsUpdate=$,Te.type=H}function ie(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function _e(v){const k=v.target;k.removeEventListener("dispose",_e),ye(k)}function ye(v){Ae(v),Se.remove(v)}function Ae(v){const k=Se.get(v).programs;k!==void 0&&(k.forEach(function(Y){Ie.releaseProgram(Y)}),v.isShaderMaterial&&Ie.releaseShaderCache(v))}this.renderBufferDirect=function(v,k,Y,$,H,ue){k===null&&(k=Oe);const fe=H.isMesh&&H.matrixWorld.determinant()<0,Fe=je(v,k,Y,$,H);Pe.setMaterial($,fe);let Ue=Y.index,ke=1;if($.wireframe===!0){if(Ue=te.getWireframeAttribute(Y),Ue===void 0)return;ke=2}const Xe=Y.drawRange,Be=Y.attributes.position;let et=Xe.start*ke,ct=(Xe.start+Xe.count)*ke;ue!==null&&(et=Math.max(et,ue.start*ke),ct=Math.min(ct,(ue.start+ue.count)*ke)),Ue!==null?(et=Math.max(et,0),ct=Math.min(ct,Ue.count)):Be!=null&&(et=Math.max(et,0),ct=Math.min(ct,Be.count));const bt=ct-et;if(bt<0||bt===1/0)return;ne.setup(H,$,Fe,Y,Ue);let At,tt=ve;if(Ue!==null&&(At=ee.get(Ue),tt=C,tt.setIndex(At)),H.isMesh)$.wireframe===!0?(Pe.setLineWidth($.wireframeLinewidth*Ye()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(H.isLine){let He=$.linewidth;He===void 0&&(He=1),Pe.setLineWidth(He*Ye()),H.isLineSegments?tt.setMode(U.LINES):H.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else H.isPoints?tt.setMode(U.POINTS):H.isSprite&&tt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const He=H._multiDrawStarts,yt=H._multiDrawCounts,at=H._multiDrawCount,Ht=Ue?ee.get(Ue).bytesPerElement:1,jt=Se.get($).currentProgram.getUniforms();for(let Ot=0;Ot<at;Ot++)jt.setValue(U,"_gl_DrawID",Ot),tt.render(He[Ot]/Ht,yt[Ot])}else if(H.isInstancedMesh)tt.renderInstances(et,bt,H.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,yt=Math.min(Y.instanceCount,He);tt.renderInstances(et,bt,yt)}else tt.render(et,bt)};function de(v,k,Y){v.transparent===!0&&v.side===2&&v.forceSinglePass===!1?(v.side=1,v.needsUpdate=!0,on(v,k,Y),v.side=0,v.needsUpdate=!0,on(v,k,Y),v.side=2):on(v,k,Y)}this.compile=function(v,k,Y=null){Y===null&&(Y=v),p=Qe.get(Y),p.init(k),E.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),v!==Y&&v.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const $=new Set;return v.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let fe=0;fe<ue.length;fe++){const Fe=ue[fe];de(Fe,Y,H),$.add(Fe)}else de(ue,Y,H),$.add(ue)}),E.pop(),p=null,$},this.compileAsync=function(v,k,Y=null){const $=this.compile(v,k,Y);return new Promise(H=>{function ue(){if($.forEach(function(fe){Se.get(fe).currentProgram.isReady()&&$.delete(fe)}),$.size===0){H(v);return}setTimeout(ue,10)}We.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Re=null;function De(v){Re&&Re(v)}function Ge(){$e.stop()}function lt(){$e.start()}const $e=new Sh;$e.setAnimationLoop(De),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(v){Re=v,G.setAnimationLoop(v),v===null?$e.stop():$e.start()},G.addEventListener("sessionstart",Ge),G.addEventListener("sessionend",lt),this.render=function(v,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(k),k=G.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,k,N),p=Qe.get(v,E.length),p.init(k),E.push(p),oe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(oe),Me=this.localClippingEnabled,le=me.init(this.clippingPlanes,Me),m=we.get(v,y.length),m.init(),y.push(m),G.enabled===!0&&G.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&mt(ue,k,-1/0,x.sortObjects)}mt(v,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(re,ae),Ve=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ve&&Ee.addToRenderList(m,v),this.info.render.frame++,le===!0&&me.beginShadows();const Y=p.state.shadowsArray;Te.render(Y,v,k),le===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ue=k.cameras;if(H.length>0)for(let fe=0,Fe=ue.length;fe<Fe;fe++){const Ue=ue[fe];zt($,H,v,Ue)}Ve&&Ee.render(v);for(let fe=0,Fe=ue.length;fe<Fe;fe++){const Ue=ue[fe];Ft(m,v,Ue,Ue.viewport)}}else H.length>0&&zt($,H,v,k),Ve&&Ee.render(v),Ft(m,v,k);N!==null&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(x,v,k),ne.resetDefaultState(),A=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],le===!0&&me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function mt(v,k,Y,$){if(v.visible===!1)return;if(v.layers.test(k.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(k);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Q.intersectsSprite(v)){$&&he.setFromMatrixPosition(v.matrixWorld).applyMatrix4(oe);const fe=se.update(v),Fe=v.material;Fe.visible&&m.push(v,fe,Fe,Y,he.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Q.intersectsObject(v))){const fe=se.update(v),Fe=v.material;if($&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),he.copy(v.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),he.copy(fe.boundingSphere.center)),he.applyMatrix4(v.matrixWorld).applyMatrix4(oe)),Array.isArray(Fe)){const Ue=fe.groups;for(let ke=0,Xe=Ue.length;ke<Xe;ke++){const Be=Ue[ke],et=Fe[Be.materialIndex];et&&et.visible&&m.push(v,fe,et,Y,he.z,Be)}}else Fe.visible&&m.push(v,fe,Fe,Y,he.z,null)}}const ue=v.children;for(let fe=0,Fe=ue.length;fe<Fe;fe++)mt(ue[fe],k,Y,$)}function Ft(v,k,Y,$){const H=v.opaque,ue=v.transmissive,fe=v.transparent;p.setupLightsView(Y),le===!0&&me.setGlobalState(x.clippingPlanes,Y),$&&Pe.viewport(L.copy($)),H.length>0&&pn(H,k,Y),ue.length>0&&pn(ue,k,Y),fe.length>0&&pn(fe,k,Y),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function zt(v,k,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Pi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[$.id],fe=$.viewport||L;ue.setSize(fe.z,fe.w);const Fe=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(V),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&Ee.render(Y);const Ue=x.toneMapping;x.toneMapping=0;const ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),le===!0&&me.setGlobalState(x.clippingPlanes,$),pn(v,Y,$),R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue),We.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Be=0,et=k.length;Be<et;Be++){const ct=k[Be],bt=ct.object,At=ct.geometry,tt=ct.material,He=ct.group;if(tt.side===2&&bt.layers.test($.layers)){const yt=tt.side;tt.side=1,tt.needsUpdate=!0,ht(bt,Y,$,At,tt,He),tt.side=yt,tt.needsUpdate=!0,Xe=!0}}Xe===!0&&(R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue))}x.setRenderTarget(Fe),x.setClearColor(V,D),ke!==void 0&&($.viewport=ke),x.toneMapping=Ue}function pn(v,k,Y){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ue=v.length;H<ue;H++){const fe=v[H],Fe=fe.object,Ue=fe.geometry,ke=$===null?fe.material:$,Xe=fe.group;Fe.layers.test(Y.layers)&&ht(Fe,k,Y,Ue,ke,Xe)}}function ht(v,k,Y,$,H,ue){v.onBeforeRender(x,k,Y,$,H,ue),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(x,k,Y,$,v,ue),H.transparent===!0&&H.side===2&&H.forceSinglePass===!1?(H.side=1,H.needsUpdate=!0,x.renderBufferDirect(Y,k,$,H,v,ue),H.side=0,H.needsUpdate=!0,x.renderBufferDirect(Y,k,$,H,v,ue),H.side=2):x.renderBufferDirect(Y,k,$,H,v,ue),v.onAfterRender(x,k,Y,$,H,ue)}function on(v,k,Y){k.isScene!==!0&&(k=Oe);const $=Se.get(v),H=p.state.lights,ue=p.state.shadowsArray,fe=H.state.version,Fe=Ie.getParameters(v,H.state,ue,k,Y),Ue=Ie.getProgramCacheKey(Fe);let ke=$.programs;$.environment=v.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(v.isMeshStandardMaterial?O:S).get(v.envMap||$.environment),$.envMapRotation=$.environment!==null&&v.envMap===null?k.environmentRotation:v.envMapRotation,ke===void 0&&(v.addEventListener("dispose",_e),ke=new Map,$.programs=ke);let Xe=ke.get(Ue);if(Xe!==void 0){if($.currentProgram===Xe&&$.lightsStateVersion===fe)return nt(v,Fe),Xe}else Fe.uniforms=Ie.getUniforms(v),v.onBeforeCompile(Fe,x),Xe=Ie.acquireProgram(Fe,Ue),ke.set(Ue,Xe),$.uniforms=Fe.uniforms;const Be=$.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Be.clippingPlanes=me.uniform),nt(v,Fe),$.needsLights=_t(v),$.lightsStateVersion=fe,$.needsLights&&(Be.ambientLightColor.value=H.state.ambient,Be.lightProbe.value=H.state.probe,Be.directionalLights.value=H.state.directional,Be.directionalLightShadows.value=H.state.directionalShadow,Be.spotLights.value=H.state.spot,Be.spotLightShadows.value=H.state.spotShadow,Be.rectAreaLights.value=H.state.rectArea,Be.ltc_1.value=H.state.rectAreaLTC1,Be.ltc_2.value=H.state.rectAreaLTC2,Be.pointLights.value=H.state.point,Be.pointLightShadows.value=H.state.pointShadow,Be.hemisphereLights.value=H.state.hemi,Be.directionalShadowMap.value=H.state.directionalShadowMap,Be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Be.spotShadowMap.value=H.state.spotShadowMap,Be.spotLightMatrix.value=H.state.spotLightMatrix,Be.spotLightMap.value=H.state.spotLightMap,Be.pointShadowMap.value=H.state.pointShadowMap,Be.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Xe,$.uniformsList=null,Xe}function pe(v){if(v.uniformsList===null){const k=v.currentProgram.getUniforms();v.uniformsList=Pr.seqWithValue(k.seq,v.uniforms)}return v.uniformsList}function nt(v,k){const Y=Se.get(v);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function je(v,k,Y,$,H){k.isScene!==!0&&(k=Oe),R.resetTextureUnits();const ue=k.fog,fe=$.isMeshStandardMaterial?k.environment:null,Fe=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:an,Ue=($.isMeshStandardMaterial?O:S).get($.envMap||fe),ke=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,ct=!!Y.morphAttributes.color;let bt=0;$.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(bt=x.toneMapping);const At=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tt=At!==void 0?At.length:0,He=Se.get($),yt=p.state.lights;if(le===!0&&(Me===!0||v!==M)){const qt=v===M&&$.id===A;me.setState($,v,qt)}let at=!1;$.version===He.__version?(He.needsLights&&He.lightsStateVersion!==yt.state.version||He.outputColorSpace!==Fe||H.isBatchedMesh&&He.batching===!1||!H.isBatchedMesh&&He.batching===!0||H.isBatchedMesh&&He.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&He.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||H.isInstancedMesh&&He.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&He.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&He.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&He.instancingMorph===!1&&H.morphTexture!==null||He.envMap!==Ue||$.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==me.numPlanes||He.numIntersection!==me.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Xe||He.morphTargets!==Be||He.morphNormals!==et||He.morphColors!==ct||He.toneMapping!==bt||He.morphTargetsCount!==tt)&&(at=!0):(at=!0,He.__version=$.version);let Ht=He.currentProgram;at===!0&&(Ht=on($,k,H));let jt=!1,Ot=!1,In=!1;const Mt=Ht.getUniforms(),Qt=He.uniforms;if(Pe.useProgram(Ht.program)&&(jt=!0,Ot=!0,In=!0),$.id!==A&&(A=$.id,Ot=!0),jt||M!==v){Pe.buffers.depth.getReversed()?(J.copy(v.projectionMatrix),zu(J),Hu(J),Mt.setValue(U,"projectionMatrix",J)):Mt.setValue(U,"projectionMatrix",v.projectionMatrix),Mt.setValue(U,"viewMatrix",v.matrixWorldInverse);const cn=Mt.map.cameraPosition;cn!==void 0&&cn.setValue(U,ce.setFromMatrixPosition(v.matrixWorld)),be.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ot=!0,In=!0)}if(H.isSkinnedMesh){Mt.setOptional(U,H,"bindMatrix"),Mt.setOptional(U,H,"bindMatrixInverse");const qt=H.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Mt.setValue(U,"boneTexture",qt.boneTexture,R))}H.isBatchedMesh&&(Mt.setOptional(U,H,"batchingTexture"),Mt.setValue(U,"batchingTexture",H._matricesTexture,R),Mt.setOptional(U,H,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",H._indirectTexture,R),Mt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",H._colorsTexture,R));const en=Y.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Ne.update(H,Y,Ht),(Ot||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,Mt.setValue(U,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Qt.envMap.value=Ue,Qt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Qt.envMapIntensity.value=k.environmentIntensity),Ot&&(Mt.setValue(U,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Je(Qt,In),ue&&$.fog===!0&&xe.refreshFogUniforms(Qt,ue),xe.refreshMaterialUniforms(Qt,$,j,Z,p.state.transmissionRenderTarget[v.id]),Pr.upload(U,pe(He),Qt,R)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pr.upload(U,pe(He),Qt,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(U,"center",H.center),Mt.setValue(U,"modelViewMatrix",H.modelViewMatrix),Mt.setValue(U,"normalMatrix",H.normalMatrix),Mt.setValue(U,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qt=$.uniformsGroups;for(let cn=0,Yr=qt.length;cn<Yr;cn++){const hi=qt[cn];w.update(hi,Ht),w.bind(hi,Ht)}}return Ht}function Je(v,k){v.ambientLightColor.needsUpdate=k,v.lightProbe.needsUpdate=k,v.directionalLights.needsUpdate=k,v.directionalLightShadows.needsUpdate=k,v.pointLights.needsUpdate=k,v.pointLightShadows.needsUpdate=k,v.spotLights.needsUpdate=k,v.spotLightShadows.needsUpdate=k,v.rectAreaLights.needsUpdate=k,v.hemisphereLights.needsUpdate=k}function _t(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,k,Y){Se.get(v.texture).__webglTexture=k,Se.get(v.depthTexture).__webglTexture=Y;const $=Se.get(v);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,k){const Y=Se.get(v);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(v,k=0,Y=0){N=v,T=k,P=Y;let $=!0,H=null,ue=!1,fe=!1;if(v){const Ue=Se.get(v);if(Ue.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(U.FRAMEBUFFER,null),$=!1;else if(Ue.__webglFramebuffer===void 0)R.setupRenderTarget(v);else if(Ue.__hasExternalTextures)R.rebindTextures(v,Se.get(v.texture).__webglTexture,Se.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Be=v.depthTexture;if(Ue.__boundDepthTexture!==Be){if(Be!==null&&Se.has(Be)&&(v.width!==Be.image.width||v.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(v)}}const ke=v.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(fe=!0);const Xe=Se.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Xe[k])?H=Xe[k][Y]:H=Xe[k],ue=!0):v.samples>0&&R.useMultisampledRTT(v)===!1?H=Se.get(v).__webglMultisampledFramebuffer:Array.isArray(Xe)?H=Xe[Y]:H=Xe,L.copy(v.viewport),K.copy(v.scissor),q=v.scissorTest}else L.copy(ge).multiplyScalar(j).floor(),K.copy(Ce).multiplyScalar(j).floor(),q=ze;if(Pe.bindFramebuffer(U.FRAMEBUFFER,H)&&$&&Pe.drawBuffers(v,H),Pe.viewport(L),Pe.scissor(K),Pe.setScissorTest(q),ue){const Ue=Se.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,Y)}else if(fe){const Ue=Se.get(v.texture),ke=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,ke)}A=-1},this.readRenderTargetPixels=function(v,k,Y,$,H,ue,fe){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&fe!==void 0&&(Fe=Fe[fe]),Fe){Pe.bindFramebuffer(U.FRAMEBUFFER,Fe);try{const Ue=v.texture,ke=Ue.format,Xe=Ue.type;if(!be.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=v.width-$&&Y>=0&&Y<=v.height-H&&U.readPixels(k,Y,$,H,b.convert(ke),b.convert(Xe),ue)}finally{const Ue=N!==null?Se.get(N).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(v,k,Y,$,H,ue,fe){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Se.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&fe!==void 0&&(Fe=Fe[fe]),Fe){const Ue=v.texture,ke=Ue.format,Xe=Ue.type;if(!be.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=v.width-$&&Y>=0&&Y<=v.height-H){Pe.bindFramebuffer(U.FRAMEBUFFER,Fe);const Be=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Be),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(k,Y,$,H,b.convert(ke),b.convert(Xe),0);const et=N!==null?Se.get(N).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,et);const ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gu(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Be),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.deleteBuffer(Be),U.deleteSync(ct),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,k=null,Y=0){v.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1]);const $=Math.pow(2,-Y),H=Math.floor(v.image.width*$),ue=Math.floor(v.image.height*$),fe=k!==null?k.x:0,Fe=k!==null?k.y:0;R.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,fe,Fe,H,ue),Pe.unbindTexture()};const ut=U.createFramebuffer(),Nt=U.createFramebuffer();this.copyTextureToTexture=function(v,k,Y=null,$=null,H=0,ue=null){v.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,v=arguments[1],k=arguments[2],ue=arguments[3]||0,Y=null),ue===null&&(H!==0?(Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=H,H=0):ue=0);let fe,Fe,Ue,ke,Xe,Be,et,ct,bt;const At=v.isCompressedTexture?v.mipmaps[ue]:v.image;if(Y!==null)fe=Y.max.x-Y.min.x,Fe=Y.max.y-Y.min.y,Ue=Y.isBox3?Y.max.z-Y.min.z:1,ke=Y.min.x,Xe=Y.min.y,Be=Y.isBox3?Y.min.z:0;else{const en=Math.pow(2,-H);fe=Math.floor(At.width*en),Fe=Math.floor(At.height*en),v.isDataArrayTexture?Ue=At.depth:v.isData3DTexture?Ue=Math.floor(At.depth*en):Ue=1,ke=0,Xe=0,Be=0}$!==null?(et=$.x,ct=$.y,bt=$.z):(et=0,ct=0,bt=0);const tt=b.convert(k.format),He=b.convert(k.type);let yt;k.isData3DTexture?(R.setTexture3D(k,0),yt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),yt=U.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const at=U.getParameter(U.UNPACK_ROW_LENGTH),Ht=U.getParameter(U.UNPACK_IMAGE_HEIGHT),jt=U.getParameter(U.UNPACK_SKIP_PIXELS),Ot=U.getParameter(U.UNPACK_SKIP_ROWS),In=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,At.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be);const Mt=v.isDataArrayTexture||v.isData3DTexture,Qt=k.isDataArrayTexture||k.isData3DTexture;if(v.isDepthTexture){const en=Se.get(v),qt=Se.get(k),cn=Se.get(en.__renderTarget),Yr=Se.get(qt.__renderTarget);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,cn.__webglFramebuffer),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let hi=0;hi<Ue;hi++)Mt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(v).__webglTexture,H,Be+hi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(k).__webglTexture,ue,bt+hi)),U.blitFramebuffer(ke,Xe,fe,Fe,et,ct,fe,Fe,U.DEPTH_BUFFER_BIT,U.NEAREST);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||v.isRenderTargetTexture||Se.has(v)){const en=Se.get(v),qt=Se.get(k);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,ut),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Nt);for(let cn=0;cn<Ue;cn++)Mt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,H,Be+cn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,H),Qt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,ue,bt+cn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,ue),H!==0?U.blitFramebuffer(ke,Xe,fe,Fe,et,ct,fe,Fe,U.COLOR_BUFFER_BIT,U.NEAREST):Qt?U.copyTexSubImage3D(yt,ue,et,ct,bt+cn,ke,Xe,fe,Fe):U.copyTexSubImage2D(yt,ue,et,ct,ke,Xe,fe,Fe);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Qt?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(yt,ue,et,ct,bt,fe,Fe,Ue,tt,He,At.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,ue,et,ct,bt,fe,Fe,Ue,tt,At.data):U.texSubImage3D(yt,ue,et,ct,bt,fe,Fe,Ue,tt,He,At):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,et,ct,fe,Fe,tt,He,At.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,et,ct,At.width,At.height,tt,At.data):U.texSubImage2D(U.TEXTURE_2D,ue,et,ct,fe,Fe,tt,He,At);U.pixelStorei(U.UNPACK_ROW_LENGTH,at),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ht),U.pixelStorei(U.UNPACK_SKIP_PIXELS,jt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,In),ue===0&&k.generateMipmaps&&U.generateMipmap(yt),Pe.unbindTexture()},this.copyTextureToTexture3D=function(v,k,Y=null,$=null,H=0){return v.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,v=arguments[2],k=arguments[3],H=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,k,Y,$,H)},this.initRenderTarget=function(v){Se.get(v).__webglFramebuffer===void 0&&R.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?R.setTextureCube(v,0):v.isData3DTexture?R.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?R.setTexture2DArray(v,0):R.setTexture2D(v,0),Pe.unbindTexture()},this.resetState=function(){T=0,P=0,N=null,Pe.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}function Lc(i,e){if(e===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===2||e===1){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===2)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class V_ extends us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new K_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new cb(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ds.extractUrlBase(e);a=Ds.resolveURL(l,this.path)}else a=Ds.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new yh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rh){try{a[ft.KHR_BINARY_GLTF]=new lb(e)}catch(h){s&&s(h);return}r=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Mb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new j_;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new hb(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new ub;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new db;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function W_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X_{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ke(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],an);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mh(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Hd(u),l.distance=h;break;case"spot":l=new Gd(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class j_{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(e,t,n){const s=[];e.color=new Ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],an),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(s)}}class q_{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class K_{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(o,o)}return Promise.all(r)}}class Y_{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class $_{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],an)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Dt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class J_{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Q_{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(o[0],o[1],o[2],an),Promise.all(r)}}class eb{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class tb{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(o[0],o[1],o[2],an),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Dt)),Promise.all(r)}}class nb{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class ib{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class sb{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class rb{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ab{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ob{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class cb{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new st,m=new B,p=new wn,y=new B(1,1,1),E=new _d(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&y.fromBufferAttribute(c.SCALE,x),E.setMatrixAt(x,_.compose(m,p,y));for(const x in c)if(x==="_COLOR_0"){const I=c[x];E.instanceColor=new Ha(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);It.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Rh="glTF",Ms=12,Dc={JSON:1313821514,BIN:5130562};class lb{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ms,r=new DataView(e,Ms);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Dc.JSON){const l=new Uint8Array(e,Ms+a,o);this.content=n.decode(l)}else if(c===Dc.BIN){const l=Ms+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=ja[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=ja[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=ts[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},o,l,an,d)})})}}class ub{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class db{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class Ch extends Gs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,E=p-d+h;for(let x=0;x!==o;x++){const I=a[_+x+o],T=a[_+x+c]*u,P=a[g+x+o],N=a[g+x]*u;r[x]=y*I+E*T+m*P+p*N}return r}}const fb=new wn;class pb extends Ch{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return fb.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fc={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},Nc={33071:1001,33648:1002,10497:1e3},Ra={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ja={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mb={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},Ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Bs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function _i(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _b(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function bb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xb(i){let e;const t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pa(t.attributes):e=i.indices+":"+Pa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Pa(i.targets[n]);return e}function Pa(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function qa(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yb=new st;class Mb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Od(this.options.manager):this.textureLoader=new Wd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return _i(r,o,s),Wn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Ds.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Ra[s.type],o=ts[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Pt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Ra[s.type],l=ts[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let E=t.cache.get(y);E||(_=new l(o,p*f,s.count*f/u),E=new dd(_,f/u),t.cache.add(y,E)),m=new eo(E,c,d%f/u,g)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),m=new Pt(_,c,g);if(s.sparse!==void 0){const p=Ra.SCALAR,y=ts[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,I=new y(a[1],E,s.sparse.count*p),T=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,N=I.length;P<N;P++){const A=I[P];if(m.setX(A,T[P*c]),c>=2&&m.setY(A,T[P*c+1]),c>=3&&m.setZ(A,T[P*c+2]),c>=4&&m.setW(A,T[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Fc[d.magFilter]||1006,u.minFilter=Fc[d.minFilter]||1008,u.wrapS=Nc[d.wrapS]||1e3,u.wrapT=Nc[d.wrapT]||1e3,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==1003&&u.minFilter!==1006,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new kt(_);m.needsUpdate=!0,d(m)}),t.load(Ds.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Wn(h,a),h.userData.mimeType=a.mimeType||vb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new gh,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new mh,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bs}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){const h=s[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ke(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],an),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=2);const u=r.alphaMode||Ca.OPAQUE;if(u===Ca.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ca.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Zt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Zt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Zt){const h=r.emissiveFactor;o.emissive=new Ke().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&a!==Zt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Wn(h,r),t.associations.set(h,{materials:e}),r.extensions&&_i(s,h,r),h})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Uc(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=xb(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Uc(new Jt,l,t),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?gb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=a[f];let p;const y=l[f];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new pd(_,y):new wt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=Lc(p.geometry,1):m.mode===xn.TRIANGLE_FAN&&(p.geometry=Lc(p.geometry,2));else if(m.mode===xn.LINES)p=new vd(_,y);else if(m.mode===xn.LINE_STRIP)p=new io(_,y);else if(m.mode===xn.LINE_LOOP)p=new yd(_,y);else if(m.mode===xn.POINTS)p=new Md(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&bb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Wn(p,r),m.extensions&&_i(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&_i(s,h[0],r),h[0];const d=new jn;r.extensions&&_i(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(ku.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new co(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new st;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new to(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,E=d.length;y<E;y++){const x=d[y],I=f[y],T=g[y],P=_[y],N=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const A=n._createAnimationTracks(x,I,T,P,N);if(A)for(let M=0;M<A.length;M++)p.push(A[M])}return new Wa(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,yb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new fh:l.length>1?u=new jn:l.length===1?u=l[0]:u=new It,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Wn(u,r),r.extensions&&_i(n,u,r),r.matrix!==void 0){const h=new st;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new jn;n.name&&(r.name=s.createUniqueName(n.name)),Wn(r,n),n.extensions&&_i(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Rn||d instanceof kt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];si[r.path]===si.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(si[r.path]){case si.weights:l=ss;break;case si.rotation:l=rs;break;case si.position:case si.scale:l=as;break;default:switch(n.itemSize){case 1:l=ss;break;case 2:case 3:default:l=as;break}break}const u=s.interpolation!==void 0?mb[s.interpolation]:2301,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+si[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=qa(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof rs?pb:Ch;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Sb(i,e,t){const n=e.attributes,s=new fn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new B(c[0],c[1],c[2]),new B(l[0],l[1],l[2])),o.normalized){const u=qa(ts[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new B,c=new B;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=qa(ts[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Fn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Uc(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=ja[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return gt.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Wn(i,e),Sb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_b(i,e.targets,t):i})}var Eb=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),E=0;E<p.length;++E){var x=p.charCodeAt(E);y[E]=x>96?x-97:x>64?x-39:x+4}for(var I=0,E=0;E<p.length;++E)y[I++]=y[E]<60?n[y[E]]:(y[E]-60)*64+y[++E];return y.buffer.slice(0,I)}function c(p,y,E,x,I,T){var P=r.exports.sbrk,N=E+3&-4,A=P(N*x),M=P(I.length),L=new Uint8Array(r.exports.memory.buffer);L.set(I,M);var K=p(A,E,x,M,I.length);if(K==0&&T&&T(A,N,x),y.set(L.subarray(A,A+E*x)),P(A-P(0)),K!=0)throw new Error("Malformed buffer data: "+K)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(E){var x=E.data;y.pending-=x.count,y.requests[x.id][x.action](x.value),delete y.requests[x.id]},y}function g(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),E=new Blob([y],{type:"text/javascript"}),x=URL.createObjectURL(E),I=0;I<p;++I)h[I]=f(x);URL.revokeObjectURL(x)}function _(p,y,E,x,I){for(var T=h[0],P=1;P<h.length;++P)h[P].pending<T.pending&&(T=h[P]);return new Promise(function(N,A){var M=new Uint8Array(E),L=d++;T.pending+=p,T.requests[L]={resolve:N,reject:A},T.object.postMessage({id:L,count:p,size:y,source:M,mode:x,filter:I},[M.buffer])})}function m(p){a.then(function(){var y=p.data;try{var E=new Uint8Array(y.count*y.size);c(r.exports[y.mode],E,y.count,y.size,y.source,r.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:E},[E.buffer])}catch(x){self.postMessage({id:y.id,count:y.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,E,x,I){c(r.exports.meshopt_decodeVertexBuffer,p,y,E,x,r.exports[l[I]])},decodeIndexBuffer:function(p,y,E,x){c(r.exports.meshopt_decodeIndexBuffer,p,y,E,x)},decodeIndexSequence:function(p,y,E,x){c(r.exports.meshopt_decodeIndexSequence,p,y,E,x)},decodeGltfBuffer:function(p,y,E,x,I,T){c(r.exports[u[I]],p,y,E,x,r.exports[l[T]])},decodeGltfBufferAsync:function(p,y,E,x,I){return h.length>0?_(p,y,E,u[x],l[I]):a.then(function(){var T=new Uint8Array(p*y);return c(r.exports[u[x]],T,p,y,E,r.exports[l[I]]),T})}}})();function fo(){return new V_().setMeshoptDecoder(Eb)}let Ph="";function Ab(i){Ph=i===""||i.endsWith("/")?i:`${i}/`}const Di=i=>`${Ph}${i}`,Tb=.001,wb=.5,Oc={playing:!1,settling:!1,stillFor:0,pending:1},Ih=i=>i.playing||i.settling||i.pending>0,Rb=i=>!i.playing&&!i.settling,Cb=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),Pb=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,Ib=i=>Ih(i)?i:{...i,pending:1};function Lb(i,e,t){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=e<Tb?i.stillFor+t:0;return{...i,pending:n,stillFor:s,settling:s<wb}}function kc(i,e,t){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:t||(e.innerWidth>0&&e.innerHeight>0?{width:e.innerWidth,height:e.innerHeight}:{width:1280,height:720})}const Bc=new B(10,20,8).normalize();function Db(i){const e=new fn().setFromPoints(i).getCenter(new B);let t=0;for(const r of i)t=Math.max(t,r.distanceTo(e));const n=Math.max(t*1.15,8),s=n*2;return{centre:e,radius:n,distance:s,far:s+n}}function po(i,e=()=>new H_({antialias:!0})){const t=e();t.setPixelRatio(Math.min(devicePixelRatio,2));let s=kc(i,window);const r=new Set;t.setSize(s.width,s.height,!1);const a=t.domElement;a.style.width="100%",a.style.height="100%",a.style.display="block",t.shadowMap.enabled=!0,t.shadowMap.type=2,i.appendChild(a);const o=new ud;o.background=new Ke(922903);const c=new rn(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const l=new Mh(16772564,4.8);l.position.copy(Bc).multiplyScalar(40),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.radius=4,o.add(l,l.target,new kd(12571874,2902572,.9));let u=Math.min(devicePixelRatio,2);function h(){const D=kc(i,window,s),z=Math.min(devicePixelRatio,2),Z=z!==u;if(Z&&(u=z,t.setPixelRatio(u)),D.width!==s.width||D.height!==s.height){s=D,c.aspect=s.width/s.height,c.updateProjectionMatrix(),t.setSize(s.width,s.height,!1),A();for(const j of[...r])j()}else Z&&(t.setSize(s.width,s.height,!1),A())}const d=typeof ResizeObserver=="function"?new ResizeObserver(h):null;d?d.observe(i):addEventListener("resize",h);let f=null;const g=()=>{_(),h()};function _(){f==null||f.removeEventListener("change",g),f=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,f==null||f.addEventListener("change",g)}_();let m=!0,p=!1,y=0;function E(){p||(p=!0,y=requestAnimationFrame(q))}function x(){m=!document.hidden,m&&(L=-1,E())}document.addEventListener("visibilitychange",x);let I=!0,T=Oc,P=0;const N=new B;function A(){T=Ib(T),m&&(p||(L=-1),E())}let M=()=>{},L=-1;function K(D,z){M(D,z),t.render(o,c),P++}function q(D){if(p=!1,!m)return;const z=L<0?0:(D-L)/1e3;L=D,N.copy(c.position),K(z,D),T=Lb(T,N.distanceTo(c.position),z),I||Ih(T)?E():L=-1}function V(D){if(!D.length)return;const{centre:z,radius:Z,distance:j,far:re}=Db(D);l.target.position.copy(z),l.target.updateMatrixWorld(),l.position.copy(Bc).multiplyScalar(j).add(z);const ae=l.shadow.camera;ae.left=-Z,ae.right=Z,ae.top=Z,ae.bottom=-Z,ae.near=.5,ae.far=re,ae.updateProjectionMatrix()}return{scene:o,camera:c,renderer:t,fitShadow:V,size:()=>({...s}),remeasure:h,onBox(D){return r.add(D),()=>{r.delete(D)}},start(D){M=D,E()},park(D){M===D&&(cancelAnimationFrame(y),p=!1,M=()=>{},T=Oc,P=0,L=-1)},step(D,z=performance.now()){K(D,z)},frames:()=>P,rule:{enable(){I=!1},play(){T=Cb(T),A()},pause(){T=Pb(T),A()},wake:A,snap:()=>Rb(T)},dispose(){m=!1,r.clear(),f==null||f.removeEventListener("change",g),d?d.disconnect():removeEventListener("resize",h),document.removeEventListener("visibilitychange",x),t.dispose(),t.forceContextLoss(),t.domElement.remove()}}}function Fb(i,e){for(const t of e)t.traverse(n=>{var r;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of Dh(s))a.userData.drillOwned&&a.dispose()}),i.remove(t);Lh(i)}function Lh(i){i.traverse(e=>{var n;const t=e;(n=t.geometry)==null||n.dispose();for(const s of Dh(t)){for(const r of Object.values(s)){const a=r;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}s.dispose()}})}const Dh=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function Nb(i){const e=new Map,t=new Map,n=i.clone();return Fh(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Fh(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Fh(i.children[n],e.children[n],t)}const Ub=["shirt","jersey","top","tshirt"];let bi=null;async function Ob(i,e,t=Di("assets/ochi.glb"),n){if(!bi||bi.url!==t){const r=await fo().loadAsync(t),a=r.scene.children.filter(o=>{let c=!1;return o.traverse(l=>{c||(c=l.isSkinnedMesh)}),c});bi={variants:a.length?a:[r.scene],clips:r.animations,url:t}}const s=[];for(let r=0;r<e;r++){const a=bi.variants.length>1,o=Nb(bi.variants[r%bi.variants.length]);o.traverse(l=>{l.castShadow=l.type==="SkinnedMesh",a&&l.isBone&&(l.name=l.name.replace(/_\d+$/,""))}),i.add(o);const c=new rf(o);s.push({root:o,mixer:c,clips:new Map(bi.clips.map(l=>[l.name,l]))})}return s}const Gc=new WeakMap;function kb(i){let e=Gc.get(i.root);return e===void 0&&(e=null,i.root.traverse(t=>{t.isBone&&t.name==="spine006"&&(e=t)}),Gc.set(i.root,e)),e}function Bb(i,e){i.root.traverse(t=>{const n=t;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).forEach((r,a)=>{const o=(r.name||n.name).toLowerCase();if(Ub.some(c=>o.includes(c))){const c=r.clone();c.userData.drillOwned=!0,c.color=new Ke(e),Array.isArray(n.material)?n.material[a]=c:n.material=c}})})}const zc=["technical","tactical","physical","social"],Hc=["auto","authored","off"],Vc=["save","beaten"],gr=["throw","roll","kick"],Wc=["lofted","ground"],Gb=3.35,zb=1,Xc=12,Ka=["walk","jog","run","sprint"],jc=["walk","jog","run"],Hb=new Set(["move","dribble","pass","shoot","tackle","collect"]),qc=/^#[0-9a-fA-F]{6}$/;function qe(i,e){throw new Error(`DrillScene3D ${i}: ${e}`)}function ri(i,e){return(!Array.isArray(i)||i.length!==2||i.some(t=>typeof t!="number"))&&qe(e,"expected [x, y] numbers"),i}function Vb(i){var a,o,c,l,u;const e=i;e.version!==1&&qe("version","must be 1"),((a=e.pitch)==null?void 0:a.width)>0&&((o=e.pitch)==null?void 0:o.length)>0||qe("pitch","width/length > 0 required"),(typeof e.duration!="number"||e.duration<=0)&&qe("duration","seconds > 0 required"),(typeof e.teams!="object"||e.teams===null||Array.isArray(e.teams))&&qe("teams","expected an object of team -> { kit }");const t=new Set(Object.keys(e.teams));t.size||qe("teams","at least one team");for(const h of t){const d=(l=(c=e.teams[h])==null?void 0:c.kit)==null?void 0:l.primary;(typeof d!="string"||!qc.test(d))&&qe(`teams.${h}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(e.players)||qe("players","expected an array");const n=new Set,s=new Set;e.players.forEach((h,d)=>{(!h.id||n.has(h.id))&&qe(`players[${d}].id`,"missing or duplicate"),n.add(h.id),t.has(h.team)||qe(`players[${d}].team`,`unknown team ${h.team}`),ri(h.start,`players[${d}].start`),h.role!==void 0&&h.role!=="keeper"&&qe(`players[${d}].role`,`expected "keeper" or absent, got ${String(h.role)}`),h.role==="keeper"&&s.add(h.id)}),ri((u=e.ball)==null?void 0:u.start,"ball.start"),e.ball.static!==void 0&&typeof e.ball.static!="boolean"&&qe("ball.static","expected a boolean or absent"),(e.equipment??[]).forEach((h,d)=>{h.type!=="cone"&&h.type!=="goal"&&qe(`equipment[${d}].type`,String(h.type)),ri(h.at,`equipment[${d}].at`)});const r=(h,d)=>{n.has(h)||qe(d,`unknown player ${h}`)};if(Array.isArray(e.events)||qe("events","expected an array"),e.events.forEach((h,d)=>{var f;if((typeof h.t!="number"||h.t<0)&&qe(`events[${d}].t`,"seconds >= 0 required"),Hb.has(h.type)||qe(`events[${d}].type`,`unknown type ${h.type}`),h.type==="move"&&(r(h.player,`events[${d}].player`),ri(h.to,`events[${d}].to`),h.gait!==void 0&&!Ka.includes(h.gait)&&qe(`events[${d}].gait`,`expected one of ${Ka.join("|")}, got ${String(h.gait)}`)),h.type==="dribble"&&(r(h.player,`events[${d}].player`),ri(h.to,`events[${d}].to`),h.gait!==void 0&&!jc.includes(h.gait)&&qe(`events[${d}].gait`,`expected one of ${jc.join("|")}, got ${String(h.gait)}`)),(h.type==="move"||h.type==="dribble")&&h.runPath!==void 0&&typeof h.runPath!="boolean"&&qe(`events[${d}].runPath`,`expected a boolean, got ${String(h.runPath)}`),h.type==="pass"){if(r(h.from,`events[${d}].from`),r(h.to,`events[${d}].to`),h.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(h.flightStyle)&&qe(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(h.flightStyle)}`),h.loft!==void 0&&!(typeof h.loft=="number"&&h.loft>0)&&qe(`events[${d}].loft`,"expected a number > 0 (metres)"),h.style!==void 0&&(gr.includes(h.style)||qe(`events[${d}].style`,`expected one of ${gr.join("|")}, got ${String(h.style)}`),s.has(h.from)||qe(`events[${d}].style`,`distribution styles are keeper-only; ${h.from} is not a keeper`)),h.toFeet!==void 0&&(typeof h.toFeet!="boolean"&&qe(`events[${d}].toFeet`,`expected a boolean, got ${String(h.toFeet)}`),s.has(h.to)||qe(`events[${d}].toFeet`,`toFeet is keeper-only; ${h.to} is not a keeper`),h.toFeet&&h.flightStyle!==void 0&&h.flightStyle!=="ground")){let g=[...((f=e.players.find(_=>_.id===h.to))==null?void 0:f.start)??[0,0]];for(let _=0;_<d;_++){const m=e.events[_];(m.type==="move"||m.type==="dribble")&&m.player===h.to&&(g=[...m.to])}for(const _ of e.equipment??[]){if(_.type!=="goal")continue;const m=Math.hypot(g[0]-_.at[0],g[1]-_.at[1]);m<Xc&&qe(`events[${d}].toFeet`,`a ${h.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${h.to} meets it ${m.toFixed(1)} m from the goal at [${_.at[0]}, ${_.at[1]}] (needs ${Xc} m)`)}}h.fromFeet!==void 0&&(typeof h.fromFeet!="boolean"&&qe(`events[${d}].fromFeet`,`expected a boolean, got ${String(h.fromFeet)}`),s.has(h.from)||qe(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${h.from} is not a keeper`),h.fromFeet&&e.events.some((g,_)=>_<d&&g.type!=="move")&&qe(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((h.type==="pass"||h.type==="shoot")&&h.deflect!==void 0){const g=h.deflect;(typeof g!="object"||g===null||Array.isArray(g))&&qe(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),ri(g.to,`events[${d}].deflect.to`),Wc.includes(g.style)||qe(`events[${d}].deflect.style`,`expected one of ${Wc.join("|")}, got ${String(g.style)}`),h.type==="pass"&&!s.has(h.to)&&qe(`events[${d}].deflect`,`deflections are keeper-only; ${h.to} is not a keeper`),h.type==="shoot"&&!(h.flightStyle==="ground"&&g.style==="ground")&&!s.size&&qe(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const _ of e.equipment??[]){if(_.type!=="goal"||Math.abs(g.to[0]-_.at[0])>Gb)continue;(_.at[1]<=e.pitch.length/2?g.to[1]-_.at[1]:_.at[1]-g.to[1])<=zb&&qe(`events[${d}].deflect.to`,`[${g.to[0]}, ${g.to[1]}] is inside the goal mouth at [${_.at[0]}, ${_.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}h.type==="tackle"&&(r(h.player,`events[${d}].player`),r(h.from,`events[${d}].from`),h.from===h.player&&qe(`events[${d}].from`,"a player cannot tackle himself")),h.type==="collect"&&r(h.player,`events[${d}].player`),h.type==="shoot"&&(r(h.player,`events[${d}].player`),ri(h.at,`events[${d}].at`),h.flight!==void 0&&!(typeof h.flight=="number"&&h.flight>0)&&qe(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),h.corner!==void 0&&h.corner!=="left"&&h.corner!=="right"&&qe(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(h.corner)}`),h.flightStyle!==void 0&&h.flightStyle!=="ground"&&qe(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(h.flightStyle)}`),h.style!==void 0&&(gr.includes(h.style)||qe(`events[${d}].style`,`expected one of ${gr.join("|")}, got ${String(h.style)}`),s.has(h.player)||qe(`events[${d}].style`,`distribution styles are keeper-only; ${h.player} is not a keeper`),h.flightStyle!=="ground"&&qe(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(h.type==="pass"||h.type==="shoot")&&h.header!==void 0&&typeof h.header!="boolean"&&qe(`events[${d}].header`,`expected a boolean, got ${String(h.header)}`)}),e.overlays!==void 0){const h=e.overlays;(typeof h!="object"||h===null||Array.isArray(h))&&qe("overlays","expected an object"),h.runPaths!==void 0&&!Hc.includes(h.runPaths)&&qe("overlays.runPaths",`expected one of ${Hc.join("|")}, got ${String(h.runPaths)}`),h.zones!==void 0&&(Array.isArray(h.zones)||qe("overlays.zones","expected an array"),h.zones.forEach((d,f)=>{ri(d.at,`overlays.zones[${f}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||qe(`overlays.zones[${f}]`,"w/h metres > 0 required"),d.color!==void 0&&!zc.includes(d.color)&&!qc.test(d.color)&&qe(`overlays.zones[${f}].color`,`expected ${zc.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&qe(`overlays.zones[${f}].label`,"expected a string")}))}return e.keeper!==void 0&&((typeof e.keeper!="object"||e.keeper===null||Array.isArray(e.keeper))&&qe("keeper","expected { outcome: save | beaten }"),Vc.includes(e.keeper.outcome)||qe("keeper.outcome",`expected one of ${Vc.join("|")}, got ${String(e.keeper.outcome)}`)),e}const mo=(i,e)=>Math.hypot(e[0]-i[0],e[1]-i[1]);function zs(i){const e=mo(i.from,i.to),t=i.accel,n=i.cruise,s=i.endSpeed??0;if(e<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const r=n*n/(2*t),a=(n*n-s*s)/(2*t);if(r+a<=e){const c=e-r-a;return{D:e,t1:n/t,t2:c/n,t3:(n-s)/t,d1:r,d2:c,peak:n}}const o=Math.sqrt(t*e+s*s/2);return{D:e,t1:o/t,t2:0,t3:(o-s)/t,d1:o*o/(2*t),d2:0,peak:o}}function Ct(i){const e=zs(i);return e.t1+e.t2+e.t3}function Cn(i,e){const t=zs(i),n=t.t1+t.t2+t.t3,s=Math.min(Math.max(e-i.t0,0),n),r=i.accel;let a,o;if(s<=t.t1)a=.5*r*s*s,o=r*s;else if(s<=t.t1+t.t2)a=t.d1+t.peak*(s-t.t1),o=t.peak;else{const l=s-t.t1-t.t2;a=t.d1+t.d2+t.peak*l-.5*r*l*l,o=t.peak-r*l}const c=t.D>0?a/t.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*c,i.from[1]+(i.to[1]-i.from[1])*c],speed:o}}const Wb=.25,Nh=8*Math.PI/180,Xb=6*Math.PI/180,Kc=5*Math.PI/180,Yc=Nh/4;function $c(i,e){let t=[0,0];for(const n of i)if(e>=n.t0){if(e>n.t0+Ct(n)){t=[0,0];continue}const s=mo(n.from,n.to);if(s<=0){t=[0,0];continue}const{speed:r}=Cn(n,e);t=[(n.to[0]-n.from[0])/s*r,(n.to[1]-n.from[1])/s*r]}return t}function jb(i,e,t=Wb){const n=$c(i,e),s=$c(i,e-t);return[(n[0]-s[0])/t,(n[1]-s[1])/t]}function qb(i,e){const t=i[0]*Math.sin(e)+i[1]*Math.cos(e),n=i[0]*Math.cos(e)-i[1]*Math.sin(e);return{pitch:Math.min(Nh,Math.max(-Xb,t*Yc)),roll:Math.min(Kc,Math.max(-Kc,-n*Yc))}}const Kb=2.5;function Yb(i,e){let t=0;for(const n of i)e>=n.t0&&(t=zs(n).peak);return Math.min(1,t/Kb)}const $b=.035,Zb=.1,Zc=.4,Jb=1;function Qb(i,e){let t=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||mo(s.from,s.to)<Jb)continue;const r=s.t0+Ct(s)-Zb,a=(e-r)/Zc;a<=0||a>=1||i.some(o=>o.t0>s.t0&&o.t0<=r+Zc)||(t=Math.max(t,$b*.5*(1-Math.cos(2*Math.PI*a))))}return t}function Lt(i,e){return Math.atan2(e[0]-i[0],e[1]-i[1])}function e0(i,e=0){return i-e}function go(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function t0(i,e=58*Math.PI/180,t=.85){const n=go(i);return Math.min(e,Math.max(-e,n))*t}const n0=1.2,Ia=180*Math.PI/180,La=120*Math.PI/180,Jc=70*Math.PI/180;function Uh(i){return i<=0?Ia:i<=2.3?Ia+(La-Ia)*i/2.3:i>=5.48?Jc:La+(Jc-La)*(i-2.3)/(5.48-2.3)}const i0=.12,Qc=15*Math.PI/180;function s0(i){return Math.max(-Qc,Math.min(Qc,i*i0))}const r0=.001;function Ti(i,e){return Math.hypot(e[0]-i[0],e[1]-i[1])>=r0}function a0(i,e,t,n){return t||n||!Ti(i,e)?null:Lt(i,e)}function el(i,e,t,n=Math.PI*2){const s=e-i,r=go(s),a=r===Math.PI&&s<0?-Math.PI:r,o=n*t;return Math.abs(a)<=o?i+a:i+Math.sign(a)*o}const o0=2.3,_r=1.1,c0=1.15,tl=.6,nl=1.2,Ir=.88,l0=1-Ir,h0=.15,br=.28;function u0(i,e){const t=Math.min(Math.max((e-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*t-(1-s)*t*t)/(1+s):1-Math.pow(1-t,n==="shot"?c0:o0),a=i.fromHeight??0,o=i.toHeight??(n==="shot"?tl:0),c=a*(1-t)+o*t;let l;if(n==="clipped"){const u=i.loft??nl;l=(t<Ir?u*Math.sin(Math.PI*t/Ir):h0*u*Math.sin(Math.PI*(t-Ir)/l0))+c}else if(n==="lofted")l=(i.loft??nl)*Math.sin(Math.PI*t)+c;else if(n==="shot")l=c;else if(n==="headed"){const u=i.loft??0;l=t<=br?a+(u-a)*Math.sin(Math.PI/2*(t/br)):o+(u-o)*Math.cos(Math.PI/2*((t-br)/(1-br)))}else n==="drop"?l=(i.fromHeight??tl)*(1-t*t):l=(i.loft??0)*Math.sin(Math.PI*t)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:l,done:t>=1}}const bn=2.52,xi=4,Ss=.8,xr=1,Ki=.3,Es=.6,gn=.15,d0=.5,Ln=.45,Oh=.4,kh=.7,il=Math.PI/12,Yi=4,f0=.6,sl=.4,p0=.3,m0=.15,g0=.4,_0=.35,vr=.3,b0=Math.PI/4,x0={left:"gk_dive_a",right:"gk_dive_b"},Bh=4,v0=.12,y0=.25,M0=.35;function rl(i){return Math.min(y0,Math.max(v0,i*M0))}const S0=1.3,E0=.15;function al(i,e,t){const n=i-E0,s=i+e-n,r=Math.min(S0,Math.max(1,t/s));return{t0:Math.max(i+e-t/r,n),timeScale:r}}const A0=1.8,ol=.3,T0=.7,w0=.9,R0=2.5,hn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},yr={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},C0=.8;function P0(i,e,t){const n=Bh*i,s=Math.sqrt(Math.max(0,n*n-t*t));return Math.max(0,s-(Ns-jh)*e)}const I0=3;function L0(i,e,t){if(e<=0)return null;const n=Math.min(I0,Math.floor(Math.abs(i)/e));return n<1?null:{side:i*t>0?"left":"right",steps:n}}const Sn=1,Mr=.25,Da=.5,cl=.8,D0=.4,Gh=3,F0=.6,N0=2.3,ll=.9,$i=.3,hl=.4,U0=12,O0=8,k0=3,B0=.25;function ul(i,e,t,n,s){const r=Math.hypot(t.to[0]-i[0],t.to[1]-i[1]);if(t.style==="ground")return{from:i,to:[...t.to],t0:n,duration:Math.max(Ya,r/O0),style:"ground",...e?{fromHeight:e}:{}};const a=Math.max(B0*r,k0)*s;return{from:i,to:[...t.to],t0:n,duration:Math.max(Ya,r/U0),style:"lofted",loft:Math.max(.1,a-e/2),...e?{fromHeight:e}:{}}}const G0=.6,Ya=.2;function z0(i,e,t){const n=G0*i/e;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${e.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Ya,t/n)}const dl=16,H0=2.44;function Lr(i,e,t){let n=null;for(const s of i)s.player===e&&t>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function zh(i,e,t){const n=Lr(i,e,t);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,a=s.rise?Math.min(1,Math.max(0,(t-n.at)/s.rise)):1;return r+(s.height-r)*(a*a*(3-2*a))}const Fa=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],fl="jog_back_a",As=.5,V0=.5,pl=.5,W0=.2,ml=.8,X0=.5,j0=1.6,Sr={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},q0=3,K0=.1,gl=["walk","jog","run"],Y0=.5,$0=1.5*Y0,Z0=12,J0=.15;function Q0(i,e=1){const t=[];for(const n of i??[]){if(n.type!=="goal"){t.push([...n.at]);continue}const s=Ns*e;t.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return t}function ex(i,e,t){let n=[...i];for(let s=0;s<8;s++){let r=null,a=0;for(const l of e){const u=Math.hypot(n[0]-l[0],n[1]-l[1]);t-u>a+1e-9&&(a=t-u,r=l)}if(!r)return n;const o=[n[0]-r[0],n[1]-r[1]],c=Math.hypot(o[0],o[1])>1e-6?Wt(o):[1,0];n=[r[0]+t*c[0],r[1]+t*c[1]]}return n}function _l(i,e,t,n){const s=Math.hypot(e[0]-i[0],e[1]-i[1]),r=4*s/(n*n);return{from:i,to:e,t0:t,cruise:Math.sqrt(r*s),accel:r}}function bl(i,e,t){let n=null;for(const s of i)s.t0<=t&&(!n||s.t0>=n.t0)&&(n=s);return n?{at:[...n.to],moving:t<n.t0+n.duration}:{at:[...e],moving:!1}}function tx(i,e,t){const n=Math.hypot(e[0]-i[0],e[1]-i[1]),s=n>1e-6?Wt([e[0]-i[0],e[1]-i[1]]):[0,1],r=n<=Rt+K0?null:[e[0]-Rt*s[0],e[1]-Rt*s[1]],a=t?Wt([t[0]-e[0],t[1]-e[1]]):s,o=Math.min(Math.max(Rt,Oh),kh);return{stepTo:r,set:[e[0]+o*a[0],e[1]+o*a[1]],faceAt:t??[e[0]+s[0],e[1]+s[1]]}}function nx(i){return i<15?"roll":i<30?"throw":"kick"}function Hh(i,e,t){const n=[t[0]-e[0],t[1]-e[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-e[0])*n[0]+(i[1]-e[1])*n[1])/s)):0,a=[e[0]+r*n[0],e[1]+r*n[1]];return{reach:Math.hypot(a[0]-i[0],a[1]-i[1]),at:a}}function ix(i,e,t,n,s){const{reach:r,at:a}=Hh(i,t,n);if(r>Gh*s)return null;const o=Wt([t[0]-i[0],t[1]-i[1]]);if(r<=F0*s)return{kind:"catch",clip:hn.catch.id,clipDuration:hn.catch.duration,contactOffset:hn.catch.contact,contact:[i[0]+Rt*o[0],i[1]+Rt*o[1]],travelTo:null};const c=Kh(i,e,n),l=hn.dive[c],u=Wt([a[0]-i[0],a[1]-i[1]]),h=Math.min(N0*s,Math.max(0,r-l.reach*s));return{kind:"dive",clip:l.id,clipDuration:l.duration,contactOffset:l.contact,contact:a,side:c,travelTo:[i[0]+h*u[0],i[1]+h*u[1]]}}function sx(i,e,t,n=1){const s=[t[0]-e[0],t[1]-e[1]],r=s[0]*s[0]+s[1]*s[1],a=r>1e-12?Math.min(1,Math.max(0,((i[0]-e[0])*s[0]+(i[1]-e[1])*s[1])/r)):0,o=[e[0]+a*s[0],e[1]+a*s[1]];let c=[i[0]-o[0],i[1]-o[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const l=Wt(c);return[o[0]+ol*n*l[0],o[1]+ol*n*l[1]]}function Vh(i,e){const t=Math.min(1,Math.max(0,(e-i.t0)/i.duration)),n=1-(1-t)*(1-t);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function Wh(i,e,t,n){let s=null;for(const r of i){if(r.player!==t||n<r.t0)continue;let a=1/0;for(const o of e??[])o.t0>=r.t0&&o.t0<a&&(a=o.t0);n<a&&(s=Vh(r,n))}return s}const rx=[{id:"header_a",duration:1.9,contact:1}],ax=1.57,xl=.1,vl=.6,Na=2,Er=.02,Ua=.6,ox=2.5,cx=.22,lx=3,hx=6.5;function Oa(i,e){return Math.min(Math.max(cx*i,lx),hx)*e}const ux=10,dx=1.7;function fx(i,e,t,n){const s=t??[e[0],e[1]],r=Wt([s[0]-i[0],s[1]-i[1]]),a=[i[0]+xl*n*r[0],i[1]+xl*n*r[1]],o=rx[0];return{contact:a,height:ax*n,clip:o,set:[i[0]+Rt*r[0],i[1]+Rt*r[1]],faceAt:s}}const yl=.4,px=.3,mx=18,gx=10,_x=.45,bx=.8,Dr={id:"strike_jog_a",contact:.4},xx=1,vx={strike_jog_a:{loop:!1,category:"shoot",ballContact:Dr.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function Xh(i){var e;for(const[t,n]of Object.entries(vx))(e=i.clips)!=null&&e[t]&&Object.assign(i.clips[t],n);return i}const Ml=.15,yx=.2,Ns=3.35,jh=.5;function Mx(i,e,t,n,s=1){let r=null,a=1/0;for(const f of t){const g=Math.hypot(f[0]-e[0],f[1]-e[1]);g<a&&(a=g,r=f)}if(!r||a>Ns*s+1)return[...e];const o=(Ns-jh)*s,c=[[r[0]-o,r[1]],[r[0]+o,r[1]]];if(n){const f=Lt(i,r),g=_=>(_[0]-i[0])*Math.cos(f)-(_[1]-i[1])*Math.sin(f);return c.sort((_,m)=>g(m)-g(_)),n==="left"?c[0]:c[1]}const l=Math.hypot(c[0][0]-i[0],c[0][1]-i[1]),u=Math.hypot(c[1][0]-i[0],c[1][1]-i[1]);if(Math.abs(l-u)>1e-6)return l>u?c[0]:c[1];const h=Math.hypot(c[0][0]-e[0],c[0][1]-e[1]),d=Math.hypot(c[1][0]-e[0],c[1][1]-e[1]);return h<d-1e-6?c[0]:c[1]}function Sx(i,e){var t;return e==="keeper"&&((t=i.groups.gk_ready)!=null&&t.length)?i.groups.gk_ready:i.groups.idle}const qh=.35;let Rt=qh;function Sl(i){Rt=i}function Ex(){return Rt/qh}function vi(i,e){return[i[0]+Rt*Math.sin(e),i[1]+Rt*Math.cos(e)]}function Kh(i,e,t){return(t[0]-i[0])*Math.cos(e)-(t[1]-i[1])*Math.sin(e)>1e-9?"left":"right"}function Wt(i){const e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function El(i,e){const t=Math.cos(e),n=Math.sin(e);return[i[0]*t-i[1]*n,i[0]*n+i[1]*t]}function Ax(i,e,t){const n=Wt([e[0]-i[0],e[1]-i[1]]);let s,r;if(t){s=Wt([t[0]-i[0],t[1]-i[1]]);const f=n[0]*s[1]-n[1]*s[0];r=Math.abs(f)<1e-6?1:Math.sign(f)}else r=1,s=El([-n[0],-n[1]],-r*il);const a=El(n,r*il),o=[i[0]+Rt*a[0],i[1]+Rt*a[1]],c=[i[0]+Rt*s[0],i[1]+Rt*s[1]],l=[c[0]-o[0],c[1]-o[1]],u=Math.hypot(l[0],l[1]),h=u>1e-6?[l[0]/u,l[1]/u]:s,d=Math.min(Math.max(u,Oh),kh);return{contact:o,set:[o[0]+d*h[0],o[1]+d*h[1]],faceAt:t??[i[0]+s[0],i[1]+s[1]]}}const Tx=.5,wx=1.4,Al={walk:.8,jog:1.2,run:2.2},Rx=.25,Cx=.7,Px=.3,Ix=2,Ts=.4,Lx=10,Dx=8,Fx=2.5,Tl=6,Nx=2,wl=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],Rl=1.4;function Cl(i,e,t){const n=i.t0+Ct(i),s=ka(i,e);let r=0,a=Math.max(n-e,.001);if(ka(i,e+a)-s<=t)return a;for(let o=0;o<48;o++){const c=(r+a)/2;ka(i,e+c)-s>=t?a=c:r=c}return Math.max(a,.001)}function ka(i,e){const t=Cn(i,e).pos;return Math.hypot(t[0]-i.from[0],t[1]-i.from[1])}function Ux(i,e,t,n,s,r={}){const a=Ct(i);if(a<=0)return{flights:[],touches:[],restEnd:i.t0};const o=Wt([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=Lt(i.from,i.to),l=[Math.cos(c),-Math.sin(c)],u=P=>(P[0]-i.from[0])*o[0]+(P[1]-i.from[1])*o[1],h=i.t0+a,d=u(t),f=Ex(),g=(r.others??[]).filter(P=>Math.abs((P[0]-i.from[0])*Math.cos(c)-(P[1]-i.from[1])*Math.sin(c))<=Nx).map(P=>u(P)),_=Cx*f,m=Rx*f,p=P=>u(Cn(i,P).pos),y=[],E=[];let x=i.t0,I=[...e];const T=Math.ceil(zs(i).D/(.5*Math.min(n,Ts*3)))+8;for(let P=0;;P++){E.push(x);const N=u(I),A=d-N,M=r.turnOut?Ts:n,L=Ts*(1+Rl),K=P===0&&!!r.turnIn||!!r.turnOut&&A<=L,q=K?Rt:_;if(A<=Rl*M||P===T-1||d-(p(x)+q)<.05){const U=Math.hypot(t[0]-I[0],t[1]-I[1]);let pt=x;if(U>1e-6){const We=Math.max(Cn(i,x).speed,Tx*i.cruise),be=Math.min(2*U/(We+_r*(U/We)/2),Math.max(h-x,.2));y.push({from:I,to:[...t],t0:x,duration:be,style:"push",endFrac:0}),pt=x+be}return pt<h&&y.push({from:[...t],to:[...t],t0:pt,duration:h-pt,style:"ground"}),{flights:y,touches:E,restEnd:Math.max(pt,h)}}let V=K?Ts:n;if(!K&&A>Lx){let U=A;for(const pt of g)pt>N&&(U=Math.min(U,pt-N));V*=Math.min(Math.max(U/Dx,1),Fx)}const D=V;V*=1+wl[P%wl.length],!K&&r.turnOut&&A-V<L&&(V=Math.max(A-L,Ts));const z=Math.min(V,wx*i.cruise*i.cruise/_r),Z=Cl(i,x,z),j=Math.max(i.cruise*Z-z,0),re=Math.min(q,N-p(x)+j),ae=p(x)+re,ge=Math.max(N,ae),Ce=D>Ix?s:s*(P%2?-1:1),ze=Math.min(m,Px*z),Q=(I[0]-i.from[0])*l[0]+(I[1]-i.from[1])*l[1],le=Math.abs(Ce*ze-Q),Me=Math.sqrt(Math.max(Tl*Tl-le*le,0)),J=Math.min(ge+z,N+Me,d),oe=Cl(i,x,J-ae),ce=(J-N)/oe,he=ce+_r*oe/2,Oe=ce-_r*oe/2,Ve=[i.from[0]+o[0]*J+l[0]*Ce*ze,i.from[1]+o[1]*J+l[1]*Ce*ze],Ye={from:I,to:Ve,t0:x,duration:oe,style:"push",endFrac:Math.max(Oe,0)/he};y.push(Ye),I=[...Ve],x+=oe}}function $n(i){return[...i].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,0)}function Vn(i,e,t){const n=$n(e);return i[Math.abs(n+Math.floor(t*10))%i.length]}const Ox=.3;function Yh(i){const e=Ka.filter(t=>{var n;return(n=i.groups[t])==null?void 0:n.length}).map(t=>({gait:t,clipSpeed:i.clips[i.groups[t][0]].speed??bn})).sort((t,n)=>t.clipSpeed-n.clipSpeed);return e.map((t,n)=>({gait:t.gait,min:n===0?Ox:Math.sqrt(e[n-1].clipSpeed*t.clipSpeed),clipSpeed:t.clipSpeed}))}function $h(i,e){let t=null;for(const n of i)e>=n.min&&(t=n);return t}function kx(i,e){const t=zs(i),n=t.t1+t.t2+t.t3;if(n<=0||!e.length)return[];const s=i.endSpeed??0,r=new Set([0,n]);for(const c of e)c.min>t.peak||(r.add(c.min/i.accel),c.min>s&&r.add(n-(c.min-s)/i.accel));const a=[...r].sort((c,l)=>c-l),o=[];for(let c=0;c+1<a.length;c++){if(a[c+1]-a[c]<1e-9)continue;const l=$h(e,Cn(i,i.t0+(a[c]+a[c+1])/2).speed);if(!l)continue;const u=o[o.length-1];u&&u.gait===l.gait&&Math.abs(u.t1-(i.t0+a[c]))<1e-9?u.t1=i.t0+a[c+1]:o.push({gait:l.gait,t0:i.t0+a[c],t1:i.t0+a[c+1]})}return Gx(o)}const Bx=.3;function Gx(i){const e=i.map(t=>({...t}));for(let t=0;t<32&&e.length>1;t++){let n=-1,s=Bx;for(let o=0;o<e.length;o++){const c=e[o].t1-e[o].t0;c<s-1e-9&&(s=c,n=o)}if(n<0)break;const r=e[n-1],a=e[n+1];a&&(!r||a.t1-a.t0>r.t1-r.t0)?a.t0=e[n].t0:r.t1=e[n].t1,e.splice(n,1);for(let o=0;o+1<e.length;)e[o].gait===e[o+1].gait?(e[o].t1=e[o+1].t1,e.splice(o+1,1)):o++}return e}const _o=.85,ci=1.15,Pl=.5;function Zh(i){return Pl+(_o-Pl)*Math.min(1,Math.max(0,i))}function zx(i,e){const t=i/e;return t>ci?ci:Math.max(Zh(t),t)}function Hx(i,e){return Math.min(ci,Math.max(_o,i/e))}function Vx(i,e,t){const n=i.findIndex(l=>l.gait===t);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=e/s.clipSpeed;if(r>=_o&&r<=ci)return{timeScale:r,partner:null,weight:0};const a=i[r>ci?n+1:n-1];if(!a)return{timeScale:r>ci?ci:Math.max(Zh(r),r),partner:null,weight:0};const o=Math.min(1,Math.max(0,(e-s.clipSpeed)/(a.clipSpeed-s.clipSpeed))),c=(1-o)*s.clipSpeed+o*a.clipSpeed;return{timeScale:Hx(e,c),partner:a.gait,weight:o}}const Wx=new Set(["pass","shoot","receive","header","defensive"]),kr=new Set(["turn","transition"]),Zn=.15,Xx=.1,jx=.3,qx=.45,Kx=.2,Yx=.12,$x=.6;function bo(i,e){var t;return Wx.has(((t=i.clips[e])==null?void 0:t.category)??"")||e.startsWith("header_")}function Jh(i,e,t){var r,a;if(bo(i,e))return Xx;const n=(r=i.clips[e])==null?void 0:r.category,s=t?(a=i.clips[t])==null?void 0:a.category:void 0;return kr.has(n??"")?Zn:n==="idle"?s==="idle"?$x:s==="locomotion"?Yx:Br:n==="locomotion"&&s==="locomotion"?Kx:kr.has(s??"")?Zn:Br}function Qh(i,e){var n;const t=(n=i.clips[e])==null?void 0:n.category;return t==="receive"?qx:kr.has(t??"")?Zn:bo(i,e)?jx:Br}function Zx(i,e,t){var n;return bo(i,e)||kr.has(((n=i.clips[e])==null?void 0:n.category)??"")?Qh(i,e):Jh(i,t,e)}const $t=Math.PI/180,Xn={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*$t,t50:.567,t90:.8,peak:159*$t,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*$t,t50:.533,t90:.8,peak:213*$t,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*$t,t50:.4,t90:.6,peak:366*$t,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*$t,t50:.767,t90:1.033,peak:192*$t,standing:!1}};function Ba(i,e){const t=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(e<=0)return 0;for(let n=0;n+1<t.length;n++){const[s,r]=t[n],[a,o]=t[n+1];if(e<=a)return a-s>1e-9?r+(o-r)*(e-s)/(a-s):o}return 1}function eu(i,e,t){let n=null;for(const s of i)s.player===e&&t>=s.t0&&t<s.end+Zn&&(n=s);return n}function Jx(i,e,t,n){const s=eu(i,e,t);if(!s)return null;const r=Xn[s.clip],a=s.end-s.t0,o=s.offset+Math.min(t-s.t0,a),c=Ba(r,s.offset),l=Ba(r,s.offset+a),u=Ba(r,o),h=l-c>1e-9?(u-c)/(l-c):1,d=n??s.from,f=n===void 0?s.to-s.from:Ei(n,s.to),g=Math.min(1,(t-s.t0)/Zn),_=t<=s.end?1:Math.max(0,1-(t-s.end)/Zn),m=Math.max(0,Math.min(g,_));return{heading:d+f*h,clipYaw:r.yaw*u*m}}function Qx(i,e){return i.peak+Uh(e)}function ev(i,e,t){const n=Math.abs(i);return n<$a?null:n>uv&&(e==="jog"||e==="run"||e==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const $a=45*$t,Il=60*$t,tv=.3,nv=.5,iv=.7,sv=130*$t,Ar=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],Ll={left:"strafe_l_a",right:"strafe_r_a"},rv=3.2,av=3.2,tu=60*$t,ov=120*$t,Dl=[{id:"jog_back_diag_a",axis:225.5*$t,speed:2.04},{id:"jog_back_diag_b",axis:135.5*$t,speed:2.27}],cv=3;function lv(i,e){if(Math.abs(i)>tu)return null;const t=i>=0?Dl[0]:Dl[1];return e<=t.speed*ci?{id:t.id,axis:t.axis}:null}function hv(i,e){const t=Math.abs(i);return t<=tu?e>rv?null:e>(Ar[0].speed+Ar[1].speed)/2?Ar[1].id:Ar[0].id:t>ov||e>av?null:i>0?Ll.right:Ll.left}const uv=120*$t;function Ei(i,e){return go(e-i)}const Br=.25;function Qi(i,e){const t=i.clips[e.clip];if(e.loopUntil!==void 0)return e.loopUntil;const n=t.category==="shoot"?yx:0,s=e.contact??t.ballContact??0,r=e.offset??0,a=e.timeScale??1,o=Qh(i,e.clip);return Math.max(e.t0,0)+Math.max((t.duration-r)/a-(t.loop?0:o)+n,(s-r)/a)}function dv(i,e,t){return(i==null?void 0:i.clip)!==e||i.offset!==(t==null?void 0:t.offset)}function fv(i,e,t,n){let s=null;for(const r of i)r.player===t&&n>=Math.max(r.t0,0)&&n<Qi(e,r)&&(s=r);return s}const pv=.15;function mv(i,e,t){let n=null;for(const s of i)s.player===e&&t>=s.t0&&(n=s.headUntil!==void 0&&t<s.headUntil?[...s.at]:null);return n}const gv=.06,Fl=2,_v=6,bv=.4;function Gr(i,e){let t=(i^e)>>>0;return t=Math.imul(t^t>>>16,73244475)>>>0,t=Math.imul(t^t>>>16,73244475)>>>0,((t^t>>>16)>>>0)/4294967296}function xv(i,e){return Gr($n(i),20973)*e}function vv(i){return 1+gv*(2*Gr($n(i),10196)-1)}function yv(i,e){return(Fl+Gr($n(i),7047)*(_v-Fl))*(1+bv*(2*Gr($n(i)+e*2654435761,28490)-1))}function Mv(i,e){let t=0;for(let n=0;n<64;n++)if(t+=yv(i,n),e<t)return n;return 64}function Sv(i,e,t){const n=i.length;if(n<=1)return i[0];const s=$n(e);let r=s%n;for(let a=1;a<=t;a++){const o=s+a*2654435761>>>0;r=(r+1+o%(n-1))%n}return i[r]}function Ev(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}function Av(i,e,t=1){var S,O,ee,te,se,Ie,xe,we,Qe,me,Te,Ee,Ne,ve;Ev(e),Xh(e);const n=Yh(e),s={};i.players.forEach(C=>s[C.id]=[...C.start]);const r={},a=[],o=[],c=[],l=[],u=[],h=[],d=[],f=[],g={},_={},m={},p={},y={},E={};function x(C){c.push(C),m[C.player]=C.t0,Ti(s[C.player],C.at)&&(I[C.player]=Lt(s[C.player],C.at))}const I={},T={},P={};function N(C){const b=g[C];let ne=Math.max(b?b.t0+Ct(b):0,T[C]??0,0);for(const w of o)w.player===C&&e.clips[w.clip]&&(ne=Math.max(ne,Qi(e,w)));return ne}function A(C,b,ne,w){if(Oe.has(C)||!Ti(s[C],ne))return null;const F=I[C]??0,G=Ei(F,Lt(s[C],ne));if(Math.abs(G)<Il)return null;const W=Xn[G>0?"turn_l90_a":"turn_r90_a"];if(!e.clips[W.id])return null;const X=M(W),ie=N(C),_e=Math.max(ie,Math.min(b,w-X));return _e+X>w+1e-9?null:(L(C,W,_e,0,F,F+G),_e)}function M(C,b=0){return C.duration-b-Zn}function L(C,b,ne,w,F,G,W){const X=W??M(b,w),ie={player:C,clip:b.id,t0:ne,offset:w,end:ne+X,from:F,to:G},_e={player:C,clip:b.id,t0:ne,...w?{offset:w}:{},...W!==void 0?{loopUntil:ne+X}:{}};d.push(ie),o.push(_e),P[C]={span:ie,cue:_e},T[C]=ie.end+Zn}function K(C,b){const ne=P[C];return!ne||ne.span.end<=b+1e-9?!0:b-ne.span.t0<tv?!1:(ne.span.end=b,ne.cue.loopUntil=b,T[C]=b+Zn,!0)}function q(C,b){if(K(C,b))return;const ne=P[C];d.splice(d.indexOf(ne.span),1);const w=o.indexOf(ne.cue);w>=0&&o.splice(w,1),delete P[C],T[C]=0}function V(C,b=1/0){const ne=A(C.player,C.t0,C.at,b);x(ne===null?C:{...C,t0:ne})}const D=[];function z(C){var b;for(let ne=0;ne<D.length;ne++){const w=D[ne];w.afterT>=C||(D.splice(ne--,1),(r[b=w.player]??(r[b]=[])).push(w.move),g[w.player]=w.move,_[w.player]=j(w.move,w.player),x({player:w.player,at:w.faceBall,t0:w.move.t0}),x({player:w.player,at:w.faceSettle,t0:w.arrival}),s[w.player]=[...w.move.to])}}function Z(C,b,ne){let w=[...s[C]],F=[...s[C]];const G=g[C];let W=Math.max(G?G.t0+Ct(G):0,p[C]??0),X=-1/0,ie=null;for(let _e=b+1;_e<be.length;_e++){const ye=be[_e];if(ye.t>=ne)break;if((ye.type==="pass"?ye.from:ye.player)!==C)continue;if(ye.type!=="move"){ie=`${ye.type} at t=${ye.t}`;break}const de=e.groups[ye.gait??"jog"]??e.groups.jog,Re=e.clips[Vn(de,C,ye.t)].speed??bn,De={from:w,to:[...ye.to],t0:ye.t,cruise:Re,accel:xi},Ge=ye.t+Ct(De);W=Math.max(W,Ge),w=[...ye.to],F=Ge>ne?Cn(De,ne).pos:[...ye.to],X=ye.t}return{expected:w,atArrival:F,busyUntil:W,afterT:X,blocked:ie}}function j(C,b){const ne=kx(C,n).map(F=>({player:b,clip:Vn(e.groups[F.gait],b,C.t0),t0:F.t0,loopUntil:F.t1})),w=P[b];if(w){let F=1/0;for(const G of ne)G.t0>w.span.t0+1e-9&&G.t0<w.span.end-1e-9&&(F=Math.min(F,G.t0));F<1/0&&q(b,F)}return o.push(...ne),ne}function re(C,b,ne="event"){(U[C]??0)>b&&console.warn(`[engine3d] ${C} is on the ground until t=${U[C].toFixed(2)}s but has a ${ne} at t=${b} — schedule it later`);const w=g[C];if(!w)return;const F=w.t0+Ct(w);if(b<F){const G=`buildSchedule: player ${C} has an event at t=${b} while still moving from a move started at t=${w.t0} (in flight until t=${F.toFixed(3)})`;if(pt.has(C))console.warn(`[engine3d] ${G} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(G)}}function ae(C){let b=null,ne=-1/0;for(const w of f)w.t<=C&&w.t>=ne&&(b=w.player,ne=w.t);return b}const ge=Object.fromEntries(i.players.map(C=>[C.id,C.team]));function Ce(C,b,ne,w,F){const G=ae(w);if(!G||G===C||Oe.has(C)||ge[C]==="coach"||ge[G]===ge[C])return null;const W=s[G]?[...s[G]]:bl(a,i.ball.start,w).at;if(!Ti(b,W)||!Ti(b,ne))return null;const X=Lt(b,ne),ie=Ei(Lt(W,b),X),_e=Math.hypot(W[0]-b[0],W[1]-b[1])<=cv?lv(ie,F):null;if(_e&&e.clips[_e.id]){const Ae=X-_e.axis,de=Math.hypot(W[0]-b[0],W[1]-b[1])||1;return{clip:_e.id,ball:[b[0]+de*Math.sin(Ae),b[1]+de*Math.cos(Ae)]}}const ye=hv(ie,F);return ye&&e.clips[ye]?{clip:ye,ball:W}:null}const ze={};for(const C of i.events)C.type==="move"&&(ze[S=C.player]??(ze[S]=[])).push(C.t);function Q(C,b,ne){for(const w of ce){const F=w.id;if(!Pe.length||ae(C)===F||!e.clips[yr.left.id]||!e.clips[yr.right.id])continue;const G=g[F],W=Math.max(C,Ye[F]??0,G?G.t0+Ct(G):0);if(h.some(lt=>lt.player===F))continue;const X=Pe.reduce((lt,$e)=>Math.hypot($e[0]-w.start[0],$e[1]-w.start[1])<Math.hypot(lt[0]-w.start[0],lt[1]-w.start[1])?$e:lt,Pe[0]),ie=P0(he,t,Math.abs(s[F][1]-X[1])),ye=X[0]+Math.min(ie,Math.max(-ie,(ne[0]-X[0])*C0))-s[F][0],Ae=Lt(X,[i.pitch.width/2,i.pitch.length/2]),de=L0(ye,yr[ye*Math.cos(Ae)>0?"left":"right"].dist*he,Math.sign(Math.cos(Ae))||1);if(!de)continue;const Re=yr[de.side],De=Math.min(b,i.duration)-de.steps*Re.duration;if(De<W-1e-9||(ze[F]??[]).some(lt=>lt>=De-1e-9))continue;const Ge=Math.sign(ye)*Re.dist*he;for(let lt=0;lt<de.steps;lt++){const $e=[...s[F]],mt=_l($e,[$e[0]+Ge,$e[1]],De+lt*Re.duration,Re.duration);(r[F]??(r[F]=[])).push(mt),s[F]=[...mt.to],g[F]=mt}o.push({player:F,clip:Re.id,t0:De,loopUntil:De+de.steps*Re.duration}),_[F]=[]}}function le(C,b){var G;const ne=(G=i.players.find(W=>W.id===C))==null?void 0:G.start;if(!ne||!Pe.length)return!1;let w=Pe[0],F=1/0;for(const W of Pe){const X=Math.hypot(W[0]-ne[0],W[1]-ne[1]);X<F&&(F=X,w=W)}return Math.hypot(b[0]-w[0],b[1]-w[1])<=Z0*he}function Me(C,b){const ne=g[C];if(!ne||ne.endSpeed)return;const w=ne.t0+Ct(ne);if(b-w>=xr)return;ne.endSpeed=Ss;const F=ne.t0+Ct(ne);for(const G of _[C]??[]){const W=o.indexOf(G);W>=0&&o.splice(W,1)}if(_[C]=j(ne,C),F>b-Ki){if(pt.has(C)){console.warn(`[engine3d] player ${C}'s move started at t=${ne.t0} still arrives at t=${F.toFixed(3)}, less than ${Ki}s before their action at t=${b} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${C}'s move started at t=${ne.t0} still arrives at t=${F.toFixed(3)} even flowing into their action at ${Ss} m/s, less than ${Ki}s before their action at t=${b} — move the event later or start the approach move earlier`)}}function J(C,b,ne,w){const F=g[C],G=F?F.t0+Ct(F):0;if(F&&(F.endSpeed!==void 0||b-G<xr))return null;const W=Lt(s[C],ne)+Math.PI+b0,X=[s[C][0]+vr*Math.sin(W),s[C][1]+vr*Math.cos(W)],ie=e.groups.walk,_e=ie!=null&&ie.length?e.clips[ie[0]].speed??bn:bn,ye={from:[...s[C]],to:X,t0:0,cruise:_e,accel:xi};let Ae=b-w-Ct(ye);return Ae<Math.max(G,p[C]??0)||!K(C,Ae)?null:(ye.t0=Ae,(r[C]??(r[C]=[])).push(ye),g[C]=ye,_[C]=j(ye,C),s[C]=[...X],Ae)}function oe(C,b,ne){const w=bl(a,i.ball.start,b);{const Ae=ex(w.at,rt,$0*he);if(Math.hypot(Ae[0]-w.at[0],Ae[1]-w.at[1])>1e-6){const de=a.filter(Re=>Re.t0<=b&&Math.hypot(Re.to[0]-w.at[0],Re.to[1]-w.at[1])<1e-9);if(de.length){for(const Re of de)Math.hypot(Re.from[0]-w.at[0],Re.from[1]-w.at[1])<1e-9&&(Re.from=[...Ae]),Re.to=[...Ae];w.at=Ae}}}const F=ae(b);F&&F!==C&&f.push({t:b,player:null}),w.moving&&console.warn(`[engine3d] collect for ${C} at t=${b.toFixed(2)}s: the ball is still moving — he sets off for where it will stop; schedule it later`);let G=null;for(let Ae=ne+1;Ae<be.length;Ae++){const de=R[Ae];if(!(!de||de.actor!==C)){de.t-b<=Yi+3&&(G=de.target);break}}const W=tx(s[C],w.at,G);let X=1/0;for(let Ae=ne+1;Ae<be.length;Ae++){const de=be[Ae];if((de.type==="pass"?de.from:de.player)===C){X=de.t;break}}let ie=b;if(W.stepTo){const Ae=Math.hypot(W.stepTo[0]-s[C][0],W.stepTo[1]-s[C][1]);let de;for(let Re=Ae<q0?0:1;Re<gl.length;Re++){const De=e.groups[gl[Re]]??e.groups.jog,Ge=e.clips[Vn(De,C,b)].speed??bn;if(de={from:[...s[C]],to:W.stepTo,t0:b,cruise:Ge,accel:xi,endSpeed:Ss},b+Ct(de)+Ln+Ki<=X)break}(r[C]??(r[C]=[])).push(de),pt.set(C,b),g[C]=de,_[C]=j(de,C),ie=b+Ct(de),s[C]=[...W.stepTo]}x({player:C,at:[...w.at],t0:Math.max(b,m[C]??0),lock:[ie-gn,ie+gn]});const _e=Ae=>{for(const de of _[C]??[]){const Re=o.indexOf(de);de.t0>=Ae?Re>=0&&o.splice(Re,1):(de.loopUntil??0)>Ae&&(de.loopUntil=Ae)}};if(Oe.has(C)&&le(C,w.at)){const Ae=hn.scoop[0],de=ie-Ae.contact;return de<b&&console.warn(`[engine3d] keeper ${C}'s scoop at t=${ie.toFixed(2)}s wants to start at t=${de.toFixed(2)}s, before his collect at t=${b.toFixed(2)}s — schedule the collect earlier`),_e(Math.max(de,0)),o.push({player:C,clip:Ae.id,t0:Math.max(de,0),contact:Ae.contact}),x({player:C,at:[...W.faceAt],t0:ie}),f.push({t:ie,player:C}),u.push({player:C,at:ie,carry:[...w.at],hand:{height:Sn*he,from:J0*he,rise:cl,follow:!0}}),p[C]=ie,Ye[C]=Math.max(de,0)+Ae.duration+$i,ie}const ye=Vn(e.groups.pass,C,ie);return _e(ie-(e.clips[ye].ballContact??0)),o.push({player:C,clip:ye,t0:ie-(e.clips[ye].ballContact??0)}),a.push({from:[...w.at],to:W.set,t0:ie,duration:Ln,style:"ground"}),x({player:C,at:[...W.faceAt],t0:ie}),f.push({t:ie,player:C}),u.push({player:C,at:ie+Ln,carry:W.set}),p[C]=ie+Ln,ie+Ln}const ce=i.players.filter(C=>C.role==="keeper"),he=t,Oe=new Set(ce.map(C=>C.id));i.players.forEach(C=>I[C.id]=C.role==="keeper"?Lt(C.start,i.ball.start):0);const Ve=((O=i.keeper)==null?void 0:O.outcome)==="save",Ye={},U={},pt=new Map,We={},be=[...i.events].sort((C,b)=>C.t-b.t);if(!i.ball.static){const C=i.ball.start,b=i.players.reduce((F,G)=>Math.hypot(G.start[0]-C[0],G.start[1]-C[1])<Math.hypot(F.start[0]-C[0],F.start[1]-C[1])?G:F,i.players[0]),ne=be.find(F=>F.type!=="move"||F.player===(b==null?void 0:b.id)&&Oe.has(F.player)),w=ne?ne.type==="pass"?ne.from:ne.player:null;if((ne==null?void 0:ne.type)!=="collect")if(w&&Oe.has(w))f.push({t:0,player:w}),p[w]=0,(ne==null?void 0:ne.type)==="pass"&&!!ne.fromFeet||u.push({player:w,at:0,carry:[...i.ball.start],hand:{height:Sn*he,follow:!0}});else{const F=i.players.filter(X=>X.role!=="keeper"),G=F.length?F:i.players,W=G.reduce((X,ie)=>Math.hypot(ie.start[0]-i.ball.start[0],ie.start[1]-i.ball.start[1])<Math.hypot(s[X.id][0]-i.ball.start[0],s[X.id][1]-i.ball.start[1])?ie:X,G[0]).id;f.push({t:0,player:W}),p[W]=0}}const Pe=(i.equipment??[]).filter(C=>C.type==="goal").map(C=>C.at),rt=Q0(i.equipment,t),Se={};i.players.forEach(C=>Se[C.id]=[...C.start]);const R=be.map(C=>{if(C.type==="move")return Se[C.player]=[...C.to],null;if(C.type==="dribble")return Se[C.player]=[...C.to],{actor:C.player,target:[...C.to],t:C.t};if(C.type==="collect"||C.type==="tackle")return null;const b=C.type==="pass"?C.from:C.player,ne=C.type==="pass"?[...Se[C.to]]:C.flightStyle==="ground"?[...C.at]:Mx(Se[C.player],C.at,Pe,C.corner,t);return{actor:b,target:ne,t:C.t}});for(let C=0;C<be.length;C++){const b=be[C];z(b.t);const ne=b.type==="pass"?b.from:b.player;if(b.type!=="dribble"&&b.type!=="move"&&delete E[ne],b.type==="move"){re(b.player,b.t,b.type);const F=Oe.has(b.player)&&(((te=(ee=Lr(u,b.player,b.t))==null?void 0:ee.hand)==null?void 0:te.height)??0)>0;ae(b.t)===b.player&&!F&&console.warn(`[engine3d] move event for ${b.player} at t=${b.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const G=e.groups[b.gait??"jog"]??e.groups.jog,W=e.clips[Vn(G,b.player,b.t)].speed??bn,X=y[b.player],_e={from:X&&b.t<X.t0?[...X.at]:[...s[b.player]],to:b.to,t0:b.t,cruise:W,accel:xi},ye=Ce(b.player,_e.from,b.to,b.t,W),Ae=ye?null:(()=>{const de=$h(n,W);if((de==null?void 0:de.gait)!=="run"&&(de==null?void 0:de.gait)!=="sprint"||!e.clips[Xn.turn_to_run_a.id]||Oe.has(b.player)||N(b.player)>b.t+1e-9||!Ti(_e.from,b.to))return null;const Re=Ei(I[b.player]??0,Lt(_e.from,b.to));return Math.abs(Re)>=Il?{delta:Re,gait:de.gait}:null})();if((r[se=b.player]??(r[se]=[])).push(_e),g[b.player]=_e,_[b.player]=j(_e,b.player),ye){for(const Re of _[b.player]??[]){const De=o.indexOf(Re);De>=0&&o.splice(De,1)}const de={player:b.player,clip:ye.clip,t0:b.t,loopUntil:b.t+Ct(_e)};o.push(de),_[b.player]=[de],x({player:b.player,at:ye.ball,t0:b.t,until:b.t+Ct(_e)})}else{if(Ae){const de=Math.abs(Ae.delta)>sv,Re=Ae.gait==="run"?Xn.turn_180_a:null,De=de&&Re&&e.clips[Re.id]?Re:Xn.turn_to_run_a,Ge=De.id===Xn.turn_to_run_a.id?nv:0,lt=De.id===Xn.turn_to_run_a.id?iv:M(De,Ge),$e=I[b.player]??0;L(b.player,De,b.t,Ge,$e,$e+Ae.delta,lt);const mt=b.t+lt;_[b.player]=(_[b.player]??[]).filter(Ft=>{if(Ft.t0>=mt-1e-9)return!0;if((Ft.loopUntil??1/0)<=mt+1e-9){const zt=o.indexOf(Ft);return zt>=0&&o.splice(zt,1),!1}return Ft.t0=mt,!0})}x({player:b.player,at:b.to,t0:b.t})}s[b.player]=[...b.to]}else if(b.type==="dribble"){re(b.player,b.t,b.type),ae(b.t)!==b.player&&console.warn(`[engine3d] dribble event for ${b.player} at t=${b.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const F=b.gait??"jog",G=e.groups[F]??e.groups.jog,W=e.clips[Vn(G,b.player,b.t)].speed??bn,X=Lt(s[b.player],b.to),ie=(((xe=(Ie=Lr(u,b.player,b.t))==null?void 0:Ie.hand)==null?void 0:xe.height)??0)>0,_e=ie?zh(u,b.player,b.t):0,ye=ie?b.t+hl:b.t,Ae={from:[...s[b.player]],to:[...b.to],t0:ye,cruise:W,accel:xi};let de=null;for(let je=C+1;je<be.length;je++){const Je=R[je];if(!(!Je||Je.actor!==b.player)){de={target:Je.target,t:Je.t};break}}const Re=ye+Ct(Ae);let De=null;for(let je=C+1;je<be.length;je++){const Je=be[je];if((Je.type==="pass"?Je.from:Je.player)===b.player){De=Je;break}}let Ge=null;if((De==null?void 0:De.type)==="dribble"&&De.t-Re<=Yi){const je=Ei(X,Lt(b.to,De.to)),Je=ev(je,F),_t=Je?Xn[Je]:null;if(_t&&e.clips[_t.id]){const ut=_t.standing?Re:ye+Ct({...Ae,endSpeed:Ss});De.t-ut>=M(_t)-1e-9&&(Ge={c:_t,delta:je})}}de&&de.t-Re<xr&&!(Ge!=null&&Ge.c.standing)&&(Ae.endSpeed=Ss),Ge&&L(b.player,Ge.c,De.t-M(Ge.c),0,X,X+Ge.delta),(r[we=b.player]??(r[we]=[])).push(Ae),g[b.player]=Ae,_[b.player]=j(Ae,b.player),x({player:b.player,at:[...b.to],t0:b.t});let lt=null;for(const je of u)je.player===b.player&&(!lt||je.at>lt.at)&&(lt=je);lt&&lt.at>b.t+1e-9&&console.warn(`[engine3d] dribble for ${b.player} at t=${b.t.toFixed(2)}s starts during their settle (ends t=${lt.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let $e=lt?[...lt.carry]:vi(s[b.player],X);ie&&($e=vi(s[b.player],X),u.push({player:b.player,at:b.t,carry:[...$e],hand:{height:0,from:_e,rise:hl,follow:!0}}),p[b.player]=b.t);const mt=de&&de.t-Re<=Yi?vi(b.to,Lt(b.to,de.target)):vi(b.to,X),Ft=$n(b.player)%2===0?1:-1;let zt=Ft,pn=!1;for(let je=C+1;je<be.length;je++){const Je=be[je];if((Je.type==="pass"?Je.from:Je.player)===b.player){if(Je.type==="dribble"&&Je.t-Re<=Yi){const ut=Wt([b.to[0]-Ae.from[0],b.to[1]-Ae.from[1]]),Nt=Wt([Je.to[0]-b.to[0],Je.to[1]-b.to[1]]),v=ut[0]*Nt[1]-ut[1]*Nt[0],k=v<0?1:-1;Math.abs(v)>.05&&k===-Ft&&(zt=k),pn=Math.abs(Ei(Lt(Ae.from,b.to),Lt(b.to,Je.to)))>$a}break}}const ht=E[b.player],on=!!ht&&ye-ht.end<=Yi&&Math.abs(Ei(ht.h,X))>$a;E[b.player]={h:X,end:Re};const pe=Object.entries(s).filter(([je])=>je!==b.player).map(([,je])=>[...je]),nt=Ux(Ae,$e,mt,Al[F]??Al.jog,zt,{turnIn:on,turnOut:pn,others:pe});a.push(...nt.flights),u.push({player:b.player,at:nt.restEnd,carry:[...mt]}),p[b.player]=nt.restEnd,s[b.player]=[...b.to],Q(nt.restEnd,((Qe=be[C+1])==null?void 0:Qe.t)??i.duration,[...mt])}else if(b.type==="collect")re(b.player,b.t,b.type),oe(b.player,b.t,C);else if(b.type==="tackle"){re(b.player,b.t,b.type),Me(b.player,b.t);const F=b.from;ae(b.t)!==F&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s from ${F}, but ${ae(b.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const G=Oe.has(b.player)&&!!e.clips[Sr.id],W=b.t+(G?Sr:Fa[0]).contact;let X=null,ie=-1/0;for(const De of u)De.player===F&&De.at<=W&&De.at>ie&&(ie=De.at,X=[...De.carry]);X||(X=vi(s[F],Lt(s[F],s[b.player])));const _e=Math.hypot(X[0]-s[b.player][0],X[1]-s[b.player][1]),ye=G?Sr.reach:j0;_e>ye*he&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: the ball is ${_e.toFixed(2)} m away (reach ${(ye*he).toFixed(2)}) — move the tackler closer first`);const Ae=G?Sr:Fa[Math.abs($n(b.player)+Math.floor(b.t*10))%Fa.length],de=b.t+Ae.contact,Re={player:b.player,clip:Ae.id,t0:b.t,contact:Ae.contact};if(o.push(Re),x({player:b.player,at:X,t0:Math.max(b.t-Es,0,m[b.player]??0),lock:[b.t,b.t+Ae.duration]}),G){const De=Qi(e,Re),Ge=vi(s[b.player],Lt(s[b.player],X));f.push({t:de,player:b.player}),u.push({player:b.player,at:de,carry:[...X],hand:{height:Mr*he,follow:!0}}),u.push({player:b.player,at:De,carry:Ge,hand:{height:Sn*he,from:Mr*he,rise:Da,follow:!0}}),p[b.player]=de,Ye[b.player]=b.t+Ae.duration+$i}if(!G){const De=Wt([s[F][0]-s[b.player][0],s[F][1]-s[b.player][1]]),Ge=[-De[1],De[0]],lt=(X[0]-s[F][0])*Ge[0]+(X[1]-s[F][1])*Ge[1]>=0?1:-1,$e=[s[F][0]+lt*pl*he*Ge[0]+ml*he*De[0],s[F][1]+lt*pl*he*Ge[1]+ml*he*De[1]];a.push({from:X,to:$e,t0:de,duration:X0,style:"ground",pop:!0}),f.push({t:de,player:null})}if(e.clips[fl]){let De=1/0;for(let Ft=C+1;Ft<be.length;Ft++){const zt=be[Ft];if((zt.type==="pass"?zt.from:zt.player)===F){De=zt.t;break}}const Ge=Wt([s[F][0]-X[0],s[F][1]-X[1]]),lt=V0*he,$e=de+W0,mt=_l([...s[F]],[s[F][0]+lt*Ge[0],s[F][1]+lt*Ge[1]],$e,As);if($e+As+Ki<=De){(r[F]??(r[F]=[])).push(mt),g[F]=mt,o.push({player:F,clip:fl,t0:$e,loopUntil:$e+As}),_[F]=[];const Ft=Math.max($e,m[F]??0);Ft<$e+As&&x({player:F,at:[...X],t0:Ft,until:$e+As}),s[F]=[...mt.to]}}G||oe(b.player,Qi(e,Re),C)}else{const F=b.type==="pass"?b.from:b.player,G=We[F],W=!!G&&b.t>=G.at-Er&&b.t-G.at<=Na;G&&!W&&console.warn(`[engine3d] header for ${F} at t=${b.t} does not meet the cross at their forehead (t=${G.at.toFixed(2)}s) — played as an ordinary ${b.type}`),delete We[F],W&&b.t-G.at>vl&&console.warn(`[engine3d] header for ${F} at t=${b.t} pulled to the ball's arrival (t=${G.at.toFixed(2)}s) — the ball cannot wait in the air`),re(F,b.t,b.type),W||Me(F,b.t);const X=b.type==="pass"?s[b.to]:R[C].target,ie=b.type==="shoot"&&b.flightStyle!=="ground",_e=ie?_x:_0,ye=ie?bx:Es,Ae=Oe.has(F)&&ae(b.t)===F&&(((Te=(me=Lr(u,F,b.t))==null?void 0:me.hand)==null?void 0:Te.height)??0)>0;Oe.has(F)&&(Ye[F]??0)>b.t&&console.warn(`[engine3d] keeper ${F} is busy until t=${Ye[F].toFixed(2)}s (save / catch clip still playing) but has a ${b.type} at t=${b.t} — schedule it later`);const de=pe=>{if(!W)return null;const nt=Math.hypot(pe[0]-ht[0],pe[1]-ht[1]);return nt>=ux?{style:"headed",loft:Oa(nt,he)}:null};let Re=b.t;if(b.type==="shoot"){const pe=g[F],nt=pe?pe.t0+Ct(pe):-1/0;pe&&(pe.endSpeed??0)>0&&b.t-nt>Ml&&b.t-nt<xr&&(Re=nt-Ml)}let De="",Ge,lt,$e=0,mt=null,Ft=null;if(W)Ge=G.at,$e=G.height;else if(Ae&&(b.type==="pass"||b.flightStyle==="ground")){mt=b.style??nx(Math.hypot(X[0]-s[F][0],X[1]-s[F][1]));const pe=hn[mt];De=pe.id,lt=pe.contact,Ge=b.t+pe.contact,$e=pe.release*he,Ye[F]=b.t+pe.duration+$i}else{const pe=g[F],nt=b.type==="shoot"&&pe&&(pe.endSpeed??0)>0&&Re<=pe.t0+Ct(pe)+1e-9?Cn(pe,Re).speed:0;Ft=J(F,Re,X,_e),nt>xx&&e.clips[Dr.id]?(De=Dr.id,lt=Dr.contact):De=Vn(e.groups[ie?"shoot":"pass"],F,b.t),Ge=Re+(lt??e.clips[De].ballContact??0)}let zt=null;W||(zt={player:F,clip:De,t0:Re,...lt!==void 0?{contact:lt}:{}},o.push(zt),V({player:F,at:[...X],t0:Math.max(Re-ye,0,m[F]??0),lock:[Re,Ge+gn],until:Ge+gn,headUntil:Ge-pv},Math.min(Re,Ft??1/0)));const pn=Lt(s[F],X),ht=W?[...G.from]:vi(s[F],pn),on=b.type!=="pass"?0:mt==="throw"?Math.max(.4,Math.hypot(X[0]-ht[0],X[1]-ht[1])/dl):b.flight;if(!W){const pe=Math.max(Re-d0,p[F]??0);pe>Ge&&console.warn(`[engine3d] departure window for ${F} is inverted (starts t=${pe.toFixed(2)}s, ball contact t=${Ge.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),l.push({player:F,windowStart:pe,contact:Ge,heading:pn,...mt?{toHeight:$e}:{}})}if(b.type==="pass"&&Oe.has(b.to)&&!b.toFeet){const pe=Ge+on,nt=Z(b.to,C,pe);nt.blocked&&console.warn(`[engine3d] ball to the keeper ${b.to} at t=${b.t}: their authored ${nt.blocked} runs during the flight, so where they stand at t=${pe.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const je=nt.atArrival,Je=Wt([ht[0]-je[0],ht[1]-je[1]]),_t=[je[0]+Rt*Je[0],je[1]+Rt*Je[1]],ut=b.flightStyle==="clipped"||b.flightStyle==="lofted",Nt=((Ee=b.deflect)==null?void 0:Ee.style)==="lofted",v=ut?(b.loft??0)>R0||Nt?hn.catchHigh:hn.catch:hn.scoop[Math.abs($n(b.to)+Math.floor(pe*10))%hn.scoop.length],k=ut?Math.min(Sn*(v===hn.catchHigh?2:1),H0)*he:0,Y=pe-v.contact;Y<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${Y.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),Y<nt.busyUntil&&console.warn(`[engine3d] catch cue for ${b.to} at t=${pe.toFixed(2)}s wants t0=${Y.toFixed(2)}s but their move is still running (until t=${nt.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),Y<Ge&&console.warn(`[engine3d] catch cue for ${b.to} at t=${pe.toFixed(2)}s wants t0=${Y.toFixed(2)}s, before the ball leaves ${F} at t=${Ge.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),o.push({player:b.to,clip:v.id,t0:Y,contact:v.contact});const $=b.flightStyle==="lofted"?Oa(Math.hypot(_t[0]-ht[0],_t[1]-ht[1]),he)-($e+k)/2:b.loft;a.push({from:ht,to:_t,t0:Ge,duration:on,style:mt==="kick"?"clipped":ut||mt==="throw"?"lofted":"ground",...$!==void 0?{loft:$}:{},...k?{toHeight:k}:{},...$e?{fromHeight:$e}:{}}),x({player:b.to,at:[...s[F]],t0:b.t,lock:[pe-gn,pe+gn]}),b.deflect?(a.push(ul(_t,k,b.deflect,pe,he)),p[b.to]=pe):(f.push({t:pe,player:b.to}),u.push({player:b.to,at:pe,carry:_t,hand:ut?{height:Sn*he,from:k,rise:Da,follow:!0}:{height:Sn*he,from:0,rise:cl,follow:!0}}),p[b.to]=pe),Ye[b.to]=Y+v.duration+$i}else if(b.type==="pass"&&!b.toFeet&&b.flightStyle==="lofted"&&(b.loft??ox)>=dx){const pe=Ge+on;let nt=null,je=1/0,Je=!1,_t=!1,ut;for(let H=C+1;H<be.length;H++){const ue=R[H],fe=be[H];if((fe.type==="move"||fe.type==="collect")&&fe.player===b.to&&ut===void 0&&fe.t>=pe-Er&&(ut=fe.t),!(!ue||ue.actor!==b.to)){nt=ue.target,je=ue.t,_t=fe.type==="pass"||fe.type==="shoot",Je=_t&&!!fe.header;break}}ut!==void 0&&_t&&je-pe<=Na&&console.warn(`[engine3d] ${b.to} has a move at t=${ut.toFixed(2)}s between the cross landing on their forehead (t=${pe.toFixed(2)}s) and their strike at t=${je} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const Nt=_t&&ut===void 0&&je>=pe-Er&&(je-pe<=vl||Je&&je-pe<=Na),v=Z(b.to,C,pe);v.blocked&&!Nt&&console.warn(`[engine3d] cross to ${b.to} at t=${b.t}: their authored ${v.blocked} runs during the flight, so where they stand at t=${pe.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const k=fx(v.atArrival,ht,nt,he),Y=pe-k.clip.contact;Y<0&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${Y.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),Y<v.busyUntil&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${Y.toFixed(2)}s but their move is still running (until t=${v.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),o.push({player:b.to,clip:k.clip.id,t0:Y,contact:k.clip.contact});const $=Math.hypot(k.contact[0]-ht[0],k.contact[1]-ht[1]);a.push({from:ht,to:k.contact,t0:Ge,duration:on,style:"lofted",loft:Oa($,he)-($e+k.height)/2,toHeight:k.height,...$e?{fromHeight:$e}:{}}),Nt?(We[b.to]={at:pe,from:k.contact,height:k.height},x({player:b.to,at:[...nt],t0:Math.max(Y-Es,0,m[b.to]??0),lock:[Y,pe+gn],until:pe+gn})):(_t&&je<pe-Er?console.warn(`[engine3d] ${b.to}'s own strike at t=${je} is ${(pe-je).toFixed(2)}s BEFORE the cross reaches their forehead (t=${pe.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):Je&&console.warn(`[engine3d] header for ${b.to} at t=${je} is ${(je-pe).toFixed(2)}s after the ball arrives (t=${pe.toFixed(2)}s) — ignored, cushioned instead`),x({player:b.to,at:[...s[F]],t0:b.t,lock:[pe-gn,pe+gn]}),a.push({from:k.contact,to:k.set,t0:pe,duration:Ua,style:"drop",fromHeight:k.height}),x({player:b.to,at:[...k.faceAt],t0:pe}),f.push({t:pe,player:b.to}),p[b.to]=pe+Ua,u.push({player:b.to,at:pe+Ua,carry:k.set}))}else if(b.type==="pass"){const pe=Ge+on,nt=Vn(e.groups.receive,b.to,pe),je=e.clips[nt];let Je=null,_t=1/0;for(let $=C+1;$<be.length;$++){const H=be[$];(H.type==="pass"?H.from:H.player)===b.to&&_t===1/0&&(_t=H.t);const fe=R[$];if(!(!fe||fe.actor!==b.to)){fe.t-pe<=Yi&&(Je=fe.target);break}}const ut=Ax(X,ht,Je);let Nt=b.t;{const $=Z(b.to,C,pe),H=$.expected,ue=Math.max(b.t,$.busyUntil),fe=Math.max($.afterT,b.t),Fe=$.blocked;Nt=ue;const Ue=Math.hypot(ut.contact[0]-H[0],ut.contact[1]-H[1]);if(Ue>f0)if(Fe)console.warn(`[engine3d] receive for ${b.to}: the ball lands ${Ue.toFixed(2)}m away at t=${pe.toFixed(2)}s, but their authored ${Fe} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const ke=Wt([ut.contact[0]-H[0],ut.contact[1]-H[1]]),Xe=[ut.contact[0]-Rt*ke[0],ut.contact[1]-Rt*ke[1]],Be=e.groups.walk,et=Be!=null&&Be.length?e.clips[Be[0]].speed??bn:bn,ct={from:H,to:Xe,t0:0,cruise:et,accel:xi},bt=pe-sl-Ct(ct);bt<ue-1e-9?console.warn(`[engine3d] receive adjustment for ${b.to}: the ${(Ue-Rt).toFixed(2)}m walk to the contact point would need to start at t=${bt.toFixed(2)}s but they're busy until t=${ue.toFixed(2)}s — skipped (the standing stretch stays)`):(ct.t0=bt,Nt=pe-sl,D.push({player:b.to,afterT:fe,move:ct,faceBall:[...ht],faceSettle:[...ut.faceAt],arrival:pe}))}}const v=je.ballContact??0,k=Math.min(v,Math.max(m0,Math.min(p0,g0*on,pe-(Nt+Br)))),Y=pe-k;Y<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${Y.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),o.push({player:b.to,clip:nt,t0:Y,...v>k?{offset:v-k}:{}}),a.push({from:ht,to:ut.contact,t0:Ge,duration:on,style:mt==="throw"||b.flightStyle==="lofted"?"lofted":mt==="kick"||b.flightStyle==="clipped"?"clipped":"ground",...mt==="throw"?{loft:Math.max(1.5,b.loft??0)}:mt==="kick"?{loft:Math.max(3,b.loft??0)}:b.loft!==void 0?{loft:b.loft}:{},...$e?{fromHeight:$e}:{},...de(ut.contact)??{}}),a.push({from:ut.contact,to:ut.set,t0:pe,duration:Ln,style:"ground"}),x({player:b.to,at:[...s[F]],t0:b.t,lock:[pe-gn,pe+gn]}),V({player:b.to,at:[...ut.faceAt],t0:pe},_t),f.push({t:pe,player:b.to}),p[b.to]=pe+Ln,u.push({player:b.to,at:pe+Ln,carry:ut.set}),Q(pe+Ln,((Ne=be[C+1])==null?void 0:Ne.t)??i.duration,ut.set)}else if(b.flightStyle==="ground"){const pe=Math.hypot(X[0]-ht[0],X[1]-ht[1]),nt=b.flight??(mt==="throw"?Math.max(.4,pe/dl):pe/gx);if(a.push({from:ht,to:[...X],t0:Ge,duration:nt,style:mt==="throw"?"lofted":mt==="kick"?"clipped":"ground",...mt==="throw"?{loft:1.5}:mt==="kick"?{loft:3}:{},...$e?{fromHeight:$e}:{},...de(X)??{}}),b.deflect){const je=Math.hypot(b.deflect.to[0]-X[0],b.deflect.to[1]-X[1]);a.push({from:[...X],to:[...b.deflect.to],t0:Ge+nt,style:"ground",duration:z0(pe,nt,je)})}}else{const pe=Math.hypot(X[0]-ht[0],X[1]-ht[1]),nt=b.flight??pe/mx,je=Wt([X[0]-ht[0],X[1]-ht[1]]),Je=[X[0]+yl*je[0],X[1]+yl*je[1]],_t=Ge+nt,ut=a.length;a.push({from:ht,to:Je,t0:Ge,duration:nt,style:"shot",...$e?{fromHeight:$e}:{}}),a.push({from:Je,to:Je,t0:_t,duration:px,style:"drop"}),Q(((ve=be[C-1])==null?void 0:ve.t)??0,Re,ht);let Nt=!1;for(const v of ce){const k=tt=>{const He=Z(v.id,C,tt);if(He.afterT>-1/0)return He.atArrival;const yt=g[v.id];return yt&&tt<yt.t0+Ct(yt)?Cn(yt,tt).pos:[...s[v.id]]},Y=Ge+rl(Math.max(nt,ll)),$=al(Ge,nt,hn.dive.left.contact).t0,H=b.type==="shoot"?b.deflect:void 0,ue=Ve||!!H,fe=k(ue?Y:$),Fe=[X[0]-fe[0],X[1]-fe[1]],Ue=Lt(fe,ht),ke=ue?ix(fe,Ue,ht,Je,he):null;if(H&&!ke&&console.warn(`[engine3d] deflect on the shot at t=${b.t} is dropped: ${v.id} is ${Hh(fe,ht,Je).reach.toFixed(2)} m off the ball line at body scale ${he} (his reach is ${(Gh*he).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!ke){if(Math.hypot(Fe[0],Fe[1])>Bh*he)continue;const tt=Kh(fe,Ue,Je),He=x0[tt],yt=e.clips[He],{t0:at,timeScale:Ht}=al(Ge,nt,hn.dive[tt].contact);if(x({player:v.id,at:[...ht],t0:Math.max(Re-Es,0,m[v.id]??0),...yt?{lock:[Re,at+yt.duration/Ht]}:{}}),yt){o.push({player:v.id,clip:He,t0:at,...Ht>1?{timeScale:Ht}:{}});const jt=k(at),Ot=sx(jt,ht,Je,he),In=[Ot[0]-jt[0],Ot[1]-jt[1]],Mt=Math.hypot(In[0],In[1]),Qt=Math.min(Mt,A0*he),en=Mt>1e-9?[jt[0]+In[0]/Mt*Qt,jt[1]+In[1]/Mt*Qt]:[...jt],qt=Math.min(w0,Math.max(T0,_t-at));h.push({player:v.id,from:jt,to:en,t0:at,duration:qt}),y[v.id]={t0:at,at:[...s[v.id]]},s[v.id]=[...en]}continue}if(Nt)continue;Nt=!0;const Xe=a[ut];a.splice(ut+1,1);let Be,et=ke.contact,ct=Sn*he;if(ke.kind==="dive"){Xe.duration=Math.max(Xe.duration,ll),Be=Ge+rl(Xe.duration);const tt=Ge+Xe.duration,He={player:v.id,from:[...fe],to:ke.travelTo,t0:Be,duration:ke.contactOffset};h.push(He);const yt=Vh(He,tt),at=Math.min(1,(tt-Be)/ke.contactOffset),Ht=hn.dive[ke.side],jt=at*Ht.reach*he,Ot=Wt([ke.contact[0]-fe[0],ke.contact[1]-fe[1]]);et=[yt[0]+jt*Ot[0],yt[1]+jt*Ot[1]],ct=(Sn+(Ht.hand-Sn)*at)*he,y[v.id]={t0:Be,at:[...s[v.id]]},s[v.id]=[...ke.travelTo]}else Be=Math.max(Re,Ge+Xe.duration-ke.contactOffset);const bt=Ge+Xe.duration;Xe.to=et,Xe.toHeight=ct,o.push({player:v.id,clip:ke.clip,t0:Be,contact:ke.contactOffset});const At=Be+ke.clipDuration;if(x({player:v.id,at:[...ht],t0:Math.max(Re-Es,0,m[v.id]??0),lock:[Re,At]}),H){a.push(ul(et,ct,H,bt,he)),p[v.id]=bt,Ye[v.id]=At+$i;continue}f.push({t:bt,player:v.id}),ke.kind==="catch"?u.push({player:v.id,at:bt,carry:et,hand:{height:Sn*he,follow:!0}}):(u.push({player:v.id,at:bt,carry:et,hand:{height:Mr*he,from:ct,rise:D0,follow:!0}}),u.push({player:v.id,at:At,carry:et,hand:{height:Sn*he,from:Mr*he,rise:Da,follow:!0}})),p[v.id]=bt,Ye[v.id]=At+$i}}if(b.type==="pass"&&!mt&&zt){const pe=e.groups.walk,nt=pe!=null&&pe.length?e.clips[pe[0]].speed??bn:bn,je=Qi(e,zt),Je=[s[F][0]+vr*Math.sin(pn),s[F][1]+vr*Math.cos(pn)],_t={from:[...s[F]],to:Je,t0:je,cruise:nt,accel:xi};let ut=1/0;for(let Nt=C+1;Nt<be.length;Nt++){const v=be[Nt];if((v.type==="pass"?v.from:v.player)===F){ut=v.t;break}}je+Ct(_t)+Ki<=ut&&((r[F]??(r[F]=[])).push(_t),g[F]=_t,_[F]=j(_t,F),s[F]=[...Je])}f.push({t:Ge,player:null})}const w=pt.get(ne);w!==void 0&&w<b.t&&pt.delete(ne)}return z(1/0),f.sort((C,b)=>C.t-b.t),o.sort((C,b)=>C.t0-b.t0),{moves:r,flights:a,anims:o,faces:c,departures:l,arrivals:u,dives:h,turns:d,attachTo(C){let b=null;for(const ne of f)ne.t<=C&&(b=ne.player);return b}}}function Tv(i,e,t){const n=h=>Qi(i,h),s=(h,d)=>fv(e,i,h,d);function r(h,d){let f=0;for(const g of e){if(g.player!==h)continue;const _=n(g);_<=d&&_>f&&(f=_)}return f}const a=new Map,o=new Map,c=Yh(i),l=new Map;for(const h of c)for(const d of i.groups[h.gait]??[])l.set(d,h.gait);function u(h,d,f,g,_){const m=s(h,f),p=(m==null?void 0:m.clip)??Sv(Sx(i,t.get(h)),h,Mv(h,f-r(h,f))),y=a.get(h);if(dv(y,p,m)){const A=i.clips[p],M=d.mixer.clipAction(d.clips.get(p));M.reset(),M.loop=A.loop?2201:2200,M.clampWhenFinished=!0,m!=null&&m.offset&&(M.time=m.offset),y&&y.action!==M&&(y.action.fadeOut(Zx(i,y.clip,p)),M.fadeIn(Jh(i,p,y.clip))),M.play(),a.set(h,{clip:p,offset:m==null?void 0:m.offset,action:M})}const E=a.get(h).action,x=!!m&&m.timeScale===void 0&&i.clips[p].category==="locomotion",I=x?l.get(p):void 0,T=x?I?Vx(c,_,I):{timeScale:zx(_,i.clips[p].speed??bn),partner:null,weight:0}:null,P=T!=null&&T.partner&&m?Vn(i.groups[T.partner],h,m.t0):null,N=o.get(h);if(N&&N.clip!==P&&(N.clip!==p&&(N.action.weight=0,N.action.stop()),o.delete(h)),m)if(m.timeScale!==void 0)E.timeScale=m.timeScale,E.weight=1;else if(T){if(E.timeScale=T.timeScale,E.weight=1-T.weight,P){let A=o.get(h);if(!A){const K=d.mixer.clipAction(d.clips.get(P));K.reset(),K.loop=2201,K.play(),A={clip:P,action:K},o.set(h,A)}A.action.weight=T.weight,A.action.timeScale=T.timeScale;const M=i.clips[p].duration,L=i.clips[P].duration;M>0&&(A.action.time=E.time/M%1*L)}}else E.timeScale=1,E.weight=1;else{E.weight=1,E.timeScale=vv(h);const A=i.clips[p].duration;E.time=((xv(h,A)+f*E.timeScale)%A+A)%A}d.mixer.update(g)}return{applyAnim:u,cueAt:s}}class wv{constructor(e,t){Tt(this,"_t",0);Tt(this,"_playing",!1);Tt(this,"speed",1);Tt(this,"loopCbs",[]);Tt(this,"endCbs",[]);if(this.duration=e,this.loop=t,!Number.isFinite(e)||e<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${e})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(e){this.speed=e}seek(e){this._t=Math.min(Math.max(e,0),this.duration)}onLoop(e){this.loopCbs.push(e)}onEnd(e){this.endCbs.push(e)}advance(e){if(this._playing)for(this._t+=e*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(t=>t());return}this._t-=this.duration,this.loopCbs.forEach(t=>t())}}}function Rv(i,e){const t=new Map(e),n=new Map,s=new Map;function r(a,o,c,l,u,h,d){const f=t.get(a)??0,g=eu(i,a,o);let _;if(g){const E=s.get(a);E&&E.span===g?_=E.from:(_=f,s.set(a,{span:g,from:_}))}else s.delete(a);const m=g?Jx(i,a,o,_):null,p=m?Qx(Xn[g.clip],l):d?n0:Uh(l),y=m?el(f,m.heading,c,p):h?f:el(f,u,c,p);return n.set(a,c>0?(y-f)/c:0),t.set(a,y),{h:y,clipYaw:(m==null?void 0:m.clipYaw)??0}}return{heading:t,rateOf:n,step:r}}function Cv(i,e,t){const n=e[0]-i[0],s=e[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const a=n/r;return{axis:[s/r,0,-a],angle:r/t}}function zr(i){const e=Math.min(Math.max(i,0),1);return e*e*(3-2*e)}function Pv(i){var r;const e=[i.root[0]+Rt*Math.sin(i.heading),i.root[1]+Rt*Math.cos(i.heading)];let t=e,n=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!n||a.at>=n.at)&&(n=a);if(n)if((r=n.hand)!=null&&r.follow){const a=n.hand.rise?zr((i.t-n.at)/n.hand.rise):1;t=[n.carry[0]+(e[0]-n.carry[0])*a,n.carry[1]+(e[1]-n.carry[1])*a]}else t=n.carry;const s=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(s){const a=[i.root[0]+Rt*Math.sin(s.heading),i.root[1]+Rt*Math.cos(s.heading)],o=zr((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[t[0]+(a[0]-t[0])*o,t[1]+(a[1]-t[1])*o]}return t}function Iv(i){let e=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!e||o.at>=e.at)&&(e=o);if(!(e!=null&&e.hand))return 0;const t=e.hand,n=t.from??t.height,s=t.rise?zr((i.t-e.at)/t.rise):1;let r=n+(t.height-n)*s;const a=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(a&&a.toHeight!==void 0){const o=zr((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6));r+=(a.toHeight-r)*o}return r}function Za(i){let e=null;for(const t of i.flights)i.t>=t.t0&&(e=u0(t,i.t));if(e&&!e.done)return{pos:e.pos,height:e.height};if(i.holderId&&i.holderRoot){const t={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:Pv(t),height:Iv(t)}}return e?{pos:e.pos,height:0}:{pos:i.ballStart,height:0}}const ws=new B;function _n(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;ws.copy(e),ws[n]=0,ws.normalize();const l=.5*a/(a+o),u=1-ws.angleTo(i)/c;return Math.sign(ws[t])===1?u*l:o/(a+o)+l+l*(1-u)}class Lv extends cs{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new B,c=new B,l=new B(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,g=new B,_=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(o.fromArray(u,m),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[m+0]=l.x*Math.sign(o.x)+c.x*r,u[m+1]=l.y*Math.sign(o.y)+c.y*r,u[m+2]=l.z*Math.sign(o.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=_n(g,c,"z","y",r,n),d[p+1]=1-_n(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-_n(g,c,"z","y",r,n),d[p+1]=1-_n(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-_n(g,c,"x","z",r,e),d[p+1]=_n(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-_n(g,c,"x","z",r,e),d[p+1]=1-_n(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-_n(g,c,"x","y",r,e),d[p+1]=1-_n(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=_n(g,c,"x","y",r,e),d[p+1]=1-_n(g,c,"y","x",r,t);break}}}const os="#c8f323";function Dv(i){const e=parseInt(i.slice(1),16);return[e>>16&255,e>>8&255,e&255]}const Fv=Dv(os),Nv=os,Uv="#7aa2ff",Ov="#ffb340",kv="#b18cff",Bv=os;function Gv(i){const e=new Bs({color:Bv,roughness:.6}),t=new jn,n=new wt(new Lv(.42,.09,.42,4,.035),e);n.position.y=.045;const s=[new Ze(.17,.06),new Ze(.15,.1)];for(let a=0;a<=8;a++)s.push(new Ze(.15-.11*a/8,.1+.31*a/8));for(let a=1;a<=4;a++){const o=a/4*(Math.PI/2);s.push(new Ze(.04*Math.cos(o),.41+.04*Math.sin(o)))}const r=new wt(new so(s,24),e);return t.add(n,r),t.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),t.scale.setScalar(i),t}function nu(i,e,t,n,s,r){let a=r;const o=()=>(a=a*1103515245+12345&2147483647)/2147483647,c=t/n,l=5*c;for(let u=Math.floor(s/5)*5;u<s+n;u+=5){const h=(u-s)*c,d=i.createLinearGradient(0,h,0,h+l);(Math.floor(u/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,h,e,l+1)}for(let u=0;u<20;u++){const h=(u%5+.15+o()*.7)*(e/5),d=(Math.floor(u/5)+.15+o()*.7)*(t/4),f=(40+o()*120)*(e/1024),g=o()>.5,_=i.createRadialGradient(h,d,0,h,d,f);_.addColorStop(0,g?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(h-f,d-f,2*f,2*f)}for(let u=0;u<6400;u++){const h=o()>.5;i.fillStyle=h?"rgba(175,220,185,0.05)":"rgba(0,16,4,0.07)",i.fillRect(o()*e,o()*t,6+o()*22,1)}for(let u=0;u<9600;u++){const h=o()>.5;i.fillStyle=h?"rgba(180,220,190,0.04)":"rgba(0,12,3,0.05)",i.fillRect(o()*e,o()*t,2+o()*5,1)}}function zv(i,e){const t=document.createElement("canvas");t.width=1024,t.height=1024;const n=t.getContext("2d");nu(n,1024,1024,e,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),iu(n);const s=new Li(t);return s.colorSpace=Dt,s.flipY=!1,s}function iu(i,e=1,t=1,n=.18){i.save(),i.translate(512,512),i.scale(e,t);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const Hv=2.5;function su(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}const wi=6;function Vv(i,e,t){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");nu(s,1024,1024,e+2*t,-t,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),iu(s,i/(i+2*t),e/(e+2*t));const r=t/(i+2*t)*1024,a=t/(e+2*t)*1024,o=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,a],[0,1024,0,1024-a]];for(const[u,h,d,f]of o){const g=s.createLinearGradient(u,h,d,f);g.addColorStop(0,"rgba(0,0,0,0.55)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(0,0,1024,1024)}const c=Hv*2/(i+e+4*t)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",su(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const l=new Li(n);return l.colorSpace=Dt,l.flipY=!1,l}function Wv(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.filter="blur(14px)",e.fillStyle="rgba(0,0,0,0.9)",su(e,40,40,176,176,34),e.fill();const t=new Li(i);return t.flipY=!1,t}let Rs=null;function Xv(){if(Rs)return Rs;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.6,"rgba(0,0,0,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Rs=new Li(i),Rs.userData.shared=!0,Rs}function Nl(i){const e=new wt(new ro(i/2,24).rotateX(-Math.PI/2),new Zt({map:Xv(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return e.position.y=.005,e.renderOrder=1,e}const qn={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},jv=.5;function Us(i,e){const t=new Map;for(const r of i.equipment??[])r.type==="goal"&&t.set(r.at[1],(t.get(r.at[1])??0)+1);if(!t.size)return e;const n=Math.max(...t.values()),s=n+(n-1)*jv;return Math.min(e,i.pitch.width/(2*qn.halfW*s))}let Ul=null;function qv(i){return Ul??(Ul=i.loadAsync(Di("assets/goal.glb")).then(e=>e.scene).catch(e=>{throw Ul=null,e}))}let Ol=!1;function Kv(i,e){if(Ol||!e)return;Ol=!0;const t=new fn().setFromObject(i),n=Math.max(Math.abs(t.max.x-i.position.x),Math.abs(t.min.x-i.position.x))/e,s=(t.max.y-i.position.y)/e;(Math.abs(n-qn.halfW)>.05||Math.abs(s-qn.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${qn.halfW}, top ${s.toFixed(3)} vs ${qn.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function Yv(i){const{width:e,length:t}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new B(n*(e/2+wi),0,s*(t/2+wi)))}function Ja(i,e){const{width:t,length:n}=i.pitch,s=Us(i,e),r=[];for(const a of i.equipment??[]){if(a.type!=="goal")continue;const o=a.at[0]-t/2,c=a.at[1]-n/2,l=a.at[1]>n/2?-1:1,u=[qn.zMin*s*l,qn.zMax*s*l];for(const h of[-3.348*s,qn.halfW*s])for(const d of[0,qn.top*s])for(const f of u)r.push(new B(o+h,d,c+f))}return r}async function $v(i,e,t=1,n=1){const s=Us(e,n),{width:r,length:a}=e.pitch,o=(_,m=0)=>new B(_[0]-r/2,m,_[1]-a/2),c=_=>(_.anisotropy=t,_),l=new wt(new Yn(r+2*wi,a+2*wi).rotateX(-Math.PI/2),new Sd({map:c(Vv(r,a,wi)),transparent:!0}));l.position.y=-.02,l.renderOrder=-1,l.receiveShadow=!0;const u=new wt(new Yn((r+2*wi)*1.5,(a+2*wi)*1.5).rotateX(-Math.PI/2),new Zt({map:Wv(),transparent:!0,depthWrite:!1}));u.position.y=-.35,u.renderOrder=-2,i.add(u);const h=new wt(new Yn(r,a).rotateX(-Math.PI/2),new Bs({map:c(zv(r,a)),roughness:.9}));h.receiveShadow=!0,i.add(l,h);const d=fo(),f=[],g=[];for(const _ of e.equipment??[])if(_.type==="cone"){const m=Gv(n);m.position.copy(o(_.at,0)),i.add(m),g.push(m)}else{const m=(await qv(d)).clone();m.position.copy(o(_.at)),_.at[1]>a/2&&(m.rotation.y=Math.PI),m.scale.setScalar(s),i.add(m),f.push(m),Kv(m,s)}return{toWorld:o,goals:f,cones:g}}const Zv=1.2,Jv=40;function ru(i,e,t){let n=i.starts[e]??[0,0];for(const s of i.moves[e]??[])t>=s.t0&&(n=Cn(s,t).pos);return Wh(i.dives,i.moves[e],e,t)??n}function kl(i,e){const t=i.attachTo(e),n=Za({t:e,holderId:t,holderRoot:t?ru(i,t,e):null,holderHeading:t?i.headingAt(t):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const au=.55,Qv=.3,Bl=.6,ey=.6,ou=.4,xo=i=>Math.min(Math.max(i,0),1);function ty(i,e){if(e<=i.t0)return 0;if(e>=i.t0+Ct(i))return 1;const t=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(t<=0)return 1;const n=Cn(i,e).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/t}function cu(i,e,t,n,s,r,a){const o=Math.hypot(e[0]-i[0],e[1]-i[1]);if(o<1e-6)return[];const c=(e[0]-i[0])/o,l=(e[1]-i[1])/o,u=-l,h=c,d=o-s-.1,f=_=>{const m=t?t*Math.sin(2*Math.PI*_/n):0;return[i[0]+c*_+u*m,i[1]+l*_+h*m]},g=[];for(let _=.15;_+r*.5<=d;_+=r+a){const m=Math.min(_+r,d),[p,y]=f(_),[E,x]=f(m);g.push({ax:p,ay:y,bx:E,by:x,k:(_+m)/2/o})}return g}function Gl(i,e,t=1){const n=Math.hypot(e[0]-i[0],e[1]-i[1])||1,s=(e[0]-i[0])/n,r=(e[1]-i[1])/n,a=au*t,o=Qv*t,c=e[0]-a*s,l=e[1]-a*r;return[[e[0],e[1]],[c-r*o,l+s*o],[c+r*o,l-s*o]]}const zl=1.6,Tr=2.2,ny=5,iy=5,sy=6,Hl=14,ry=4,lu=20,ay="#E8ECEF",oy="#8D949B",cy="#C8F323",ly=1.2,hy=3,uy=.4;function hu(i,e,t,n){const s=Math.hypot(t[0]-e[0],t[1]-e[1]);if(s<1e-6)return null;const r=Math.min(sy*n,s*.5),a=i==="dribble",o=i==="pass"?lu*n:a?Hl*n/8:ny*n;return{dashes:cu(e,t,a?ry*n:0,Hl*n,r,o,i==="move"?iy*n:0),headScale:r/au}}function dy(i,e,t){return Math.hypot(e[0]-i[0],e[1]-i[1])<1e-6?null:{dashes:cu(i,e,0,1,-.1,lu*t,0),headScale:0}}function fy(i,e){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const t=i.t0+(i.duration??0);return e.some(n=>n.hand!==void 0&&Math.abs(n.at-t)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function py(i,e,t,n=0){const s=e[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,a=0,o=1/0;for(const u of t){const h=(u.y-i[1])/s;!(h>1)||!isFinite(h)||h-1<o&&(o=h-1,a=h,r=u)}if(!r)return null;const c=Math.max(r.halfW-n,0),l=i[0]+(e[0]-i[0])*a;return[Math.min(Math.max(l,r.x-c),r.x+c),r.y]}function my(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=ly}function gy(i,e,t){const n=[];for(const s of i){if(!my(s))continue;const r=t!==void 0&&fy(s,t.arrivals),a=r?dy(s.from,s.to,e):hu("pass",s.from,s.to,e);a&&n.push({from:s.from,to:s.to,t0:s.t0,...a,...r?{save:{stub:py(s.from,s.to,t.goals,t.clearance??0)}}:{},...s.pop?{dashes:[],pop:!0}:{}})}return n}function _y(i,e,t){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===t);return s?s.team:n.reduce((r,a)=>{const o=Math.hypot(a.start[0]-e[0],a.start[1]-e[1]);return o<r.d?{team:a.team,d:o}:r},{d:1/0}).team}function by(i,e){return xo((i-e)/ou)}function Vl(i,e){const t=xo((i-e)/.06);return Bl+(1-Bl)*t}function xy(i,e){return xo((i-(e-ey))/ou)}const vy=.35;function yy(i,e,t){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+vy}));for(const s of e){const r=t.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const a=Math.max(s.t0,0);n.push({player:s.player,t0:a,t1:a+(r.ballContact??0)+Ln})}return n.sort((s,r)=>s.t0-r.t0)}function My(i,e,t){let n=null;for(const s of i)t>=s.t0&&t<=s.t1&&(n=s.player);return n??e(t)}const Wl=1e-6;function Xl(i,e,t){return zh(i,e,t)>0}function Sy(i,e,t){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||t<s.t0||t>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-Wl);if(r&&Xl(i.arrivals,r,s.t0-Wl))return{kind:"halo"}}const n=My(e,i.attachTo,t);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(a=>t>=a.t0&&t<a.t0+a.duration),r=i.arrivals.some(a=>a.at>t);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(t)===n&&Xl(i.arrivals,n,t)?{kind:"halo"}:{kind:"ring",player:n}}function Ey(i,e){const t=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=t.get("runpaths");return{trail:t.get("trail")!=="off",highlight:t.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:e??"auto",zones:t.get("zones")!=="off"}}const Ay=.85;function Ty(i,e){return i>0?{draw:e>=i*Ay,maxWidth:Math.min(i,e)}:{draw:!1,maxWidth:0}}const wy=.055,Ry=.17,ln=.015,jl=2.1,Cy=.16,Py=1.8,Iy=.15,Ly=.1,Dy=1.6,Fy=.45,Ny=.11,Uy={technical:Nv,tactical:Uv,physical:Ov,social:kv};function Oy(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.62,"rgba(255,255,255,0)"),t.addColorStop(.76,"rgba(255,255,255,0.9)"),t.addColorStop(.84,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Li(i)}function ky(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function By(i){const e=document.createElement("canvas"),t=48;e.width=Math.max(64,Math.round(i.w*t)),e.height=Math.max(64,Math.round(i.h*t));const n=e.getContext("2d"),s=i.color!==void 0?Uy[i.color]??i.color:os,r=Math.min(e.width,e.height)*.14;if(ky(n,3,3,e.width-6,e.height-6,r),n.globalAlpha=Cy,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const o=i.label.toUpperCase(),c=Ty(n.measureText(o).width,e.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(o,18,34,c.maxWidth))}const a=new Li(e);return a.colorSpace=Dt,a}function Gy(i){var y,E;const{scene:e,drill:t,schedule:n}=i,s=i.pathM??Ly,r=x=>x*s*(i.pathWidthK??1),a=Ey(i.search??location.search,(y=t.overlays)==null?void 0:y.runPaths),{width:o,length:c}=t.pitch,l=x=>x[0]-o/2,u=x=>x[1]-c/2,h={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(t.players.map(x=>[x.id,x.start])),ballStart:t.ball.start,headingAt:i.headingAt},d=_y(t.players,t.ball.start,n.attachTo(0)),f=new Map(t.players.map(x=>[x.id,x.team])),g=x=>f.get(x)===d?ay:oy,_=[];{const x=Jv,I=new Float32Array(x*3),T=new Jt;T.setAttribute("position",new Pt(new Float32Array(x*2*3),3)),T.setAttribute("color",new Pt(new Float32Array(x*2*3),3));const P=new Float32Array(x*2*2);for(let D=0;D<x;D++)P.set([0,D/(x-1),1,D/(x-1)],D*4);T.setAttribute("uv",new Pt(P,2));const N=new Uint16Array((x-1)*6);for(let D=0;D<x-1;D++){const z=D*2;N.set([z,z+1,z+2,z+1,z+3,z+2],D*6)}T.setIndex(new Pt(N,1));const A=(()=>{const D=document.createElement("canvas");D.width=64,D.height=1;const z=D.getContext("2d"),[Z,j,re]=Fv,ae=z.createLinearGradient(0,0,64,0);ae.addColorStop(0,`rgba(${Z},${j},${re},0)`),ae.addColorStop(.28,`rgba(${Z},${j},${re},0.28)`),ae.addColorStop(.44,"rgba(216,247,120,0.8)"),ae.addColorStop(.5,"rgba(255,255,255,1)"),ae.addColorStop(.56,"rgba(216,247,120,0.8)"),ae.addColorStop(.72,`rgba(${Z},${j},${re},0.28)`),ae.addColorStop(1,`rgba(${Z},${j},${re},0)`),z.fillStyle=ae,z.fillRect(0,0,64,1);const ge=new Li(D);return ge.colorSpace=Dt,ge})(),M=new wt(T,new Zt({map:A,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));M.frustumCulled=!1,M.renderOrder=6,e.add(M);const L=new B,K=new B,q=new B,V=Zv/(x-1);_.push((D,z)=>{if(M.visible=a.trail,!a.trail)return;for(let re=0;re<x;re++){const ae=kl(h,D-re*V);I[re*3]=l(ae.pos),I[re*3+1]=wy+ae.height,I[re*3+2]=u(ae.pos)}const Z=T.getAttribute("position"),j=T.getAttribute("color");q.set(1,0,0);for(let re=0;re<x;re++){const ae=Math.min(re,x-2);L.set(I[ae*3]-I[ae*3+3],I[ae*3+1]-I[ae*3+4],I[ae*3+2]-I[ae*3+5]),K.set(I[re*3],I[re*3+1],I[re*3+2]).sub(z.position),L.lengthSq()>1e-10&&(L.cross(K),L.lengthSq()>1e-10&&q.copy(L.normalize()));const ge=Math.pow(1-re/(x-1),1.2),Ce=Ry*(.35+.65*ge),ze=I[re*3],Q=I[re*3+1],le=I[re*3+2];Z.setXYZ(re*2,ze+q.x*Ce,Q+q.y*Ce,le+q.z*Ce),Z.setXYZ(re*2+1,ze-q.x*Ce,Q-q.y*Ce,le-q.z*Ce);const Me=ge;j.setXYZ(re*2,Me,Me,Me),j.setXYZ(re*2+1,Me,Me,Me)}Z.needsUpdate=j.needsUpdate=!0})}{const x=[];let I=0,T=0;for(const P of t.events){if(P.type!=="move"&&P.type!=="dribble")continue;const N=(n.moves[P.player]??[]).find(L=>L.t0===P.t&&L.to[0]===P.to[0]&&L.to[1]===P.to[1]);if(!N)continue;const A=hu(P.type,N.from,N.to,s);if(!A)continue;const M=new Ke(g(P.player));x.push({m:N,authored:P.runPath===!0,stroke:A,baseR:M.r,baseG:M.g,baseB:M.b,baseA:1,vert0:I,vertCount:A.dashes.length*4+3}),I+=A.dashes.length*4+3,T+=A.dashes.length*6+3}if(x.length){const P=new Float32Array(I*3),N=new Float32Array(I*4),A=new Uint16Array(T);let M=0,L=0;const K=r(zl)/2;for(const z of x){const Z=Math.hypot(z.m.to[0]-z.m.from[0],z.m.to[1]-z.m.from[1])||1,j=-(z.m.to[1]-z.m.from[1])/Z,re=(z.m.to[0]-z.m.from[0])/Z;for(const Q of z.stroke.dashes){const le=M/3;P.set([l([Q.ax+j*K,0]),ln,u([0,Q.ay+re*K]),l([Q.ax-j*K,0]),ln,u([0,Q.ay-re*K]),l([Q.bx+j*K,0]),ln,u([0,Q.by+re*K]),l([Q.bx-j*K,0]),ln,u([0,Q.by-re*K])],M),M+=12,A.set([le,le+1,le+2,le+1,le+3,le+2],L),L+=6}const[ae,ge,Ce]=Gl(z.m.from,z.m.to,z.stroke.headScale),ze=M/3;P.set([l(ae),ln,u(ae),l(ge),ln,u(ge),l(Ce),ln,u(Ce)],M),M+=9,A.set([ze,ze+1,ze+2],L),L+=3}const q=new Jt;q.setAttribute("position",new Pt(P,3)),q.setAttribute("color",new Pt(N,4)),q.setIndex(new Pt(A,1));const V=new wt(q,new Zt({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));V.renderOrder=2,e.add(V);const D=q.getAttribute("color");_.push(z=>{if(V.visible=a.runPaths!=="off",!!V.visible){for(const Z of x){const j=a.runPaths==="authored"&&!Z.authored?0:xy(z,Z.m.t0),re=ty(Z.m,z);let ae=Z.vert0;for(const Ce of Z.stroke.dashes){const ze=Z.baseA*j*Vl(Ce.k,re);for(let Q=0;Q<4;Q++)D.setXYZW(ae++,Z.baseR,Z.baseG,Z.baseB,ze)}const ge=Z.baseA*j*Vl(1,re);for(let Ce=0;Ce<3;Ce++)D.setXYZW(ae++,Z.baseR,Z.baseG,Z.baseB,ge)}D.needsUpdate=!0}})}}{const x=[];let I=0,T=0;const P=(t.equipment??[]).filter(L=>L.type==="goal").map(L=>({x:L.at[0],y:L.at[1],halfW:Ns*i.goalScale})),N=gy(n.flights,s,{arrivals:n.arrivals,goals:P,clearance:r(Tr)}),A=L=>L.save?8:L.pop?7:3,M=L=>L.save?12:L.pop?9:3;for(const L of N)I+=L.dashes.length*4+A(L),T+=L.dashes.length*6+M(L);if(N.length){const L=(ae,ge,Ce)=>{const ze=new Float32Array(I*3),Q=new Float32Array(I*4),le=new Uint16Array(T);let Me=0,J=0;for(const ce of N){Ce||x.push({t0:ce.t0,vert0:Me/3,vertCount:ce.dashes.length*4+A(ce)});const he=Math.hypot(ce.to[0]-ce.from[0],ce.to[1]-ce.from[1])||1,Oe=-(ce.to[1]-ce.from[1])/he,Ve=(ce.to[0]-ce.from[0])/he,Ye=Ve,U=-Oe,pt=(We,be,Pe,rt,Se)=>{const R=Me/3;ze.set([l([We+Oe*Se,0]),ln,u([0,be+Ve*Se]),l([We-Oe*Se,0]),ln,u([0,be-Ve*Se]),l([Pe+Oe*Se,0]),ln,u([0,rt+Ve*Se]),l([Pe-Oe*Se,0]),ln,u([0,rt-Ve*Se])],Me),Me+=12,le.set([R,R+1,R+2,R+1,R+3,R+2],J),J+=6};for(const We of ce.dashes)pt(We.ax,We.ay,We.bx,We.by,ae);if(ce.pop&&pt(ce.from[0],ce.from[1],ce.to[0],ce.to[1],zl/Tr*ge),ce.save){const We=hy*2*ge/2,be=ge;pt(ce.to[0]-Ye*be,ce.to[1]-U*be,ce.to[0]+Ye*be,ce.to[1]+U*be,We);const Pe=ce.save.stub??ce.to;pt(ce.to[0],ce.to[1],Pe[0],Pe[1],uy*ge)}else{const[We,be,Pe]=Gl(ce.from,ce.to,ce.headScale),rt=Me/3;ze.set([l(We),ln,u(We),l(be),ln,u(be),l(Pe),ln,u(Pe)],Me),Me+=9,le.set([rt,rt+1,rt+2],J),J+=3}}const oe=new Jt;return oe.setAttribute("position",new Pt(ze,3)),oe.setAttribute("color",new Pt(Q,4)),oe.setIndex(new Pt(le,1)),oe},K=r(Tr)/2,q=L(K*Py,K,!0),V=L(K,K,!1),D=new Ke(cy),z=new wt(q,new Zt({vertexColors:!0,transparent:!0,depthWrite:!1,blending:2,side:2})),Z=new wt(V,new Zt({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));z.renderOrder=2,Z.renderOrder=3,e.add(z,Z);const j=V.getAttribute("color"),re=q.getAttribute("color");_.push(ae=>{Z.visible=z.visible=a.runPaths==="auto",Z.visible&&(N.forEach((ge,Ce)=>{const ze=by(ae,ge.t0);let Q=x[Ce].vert0;for(let le=0;le<x[Ce].vertCount;le++,Q++)j.setXYZW(Q,D.r,D.g,D.b,ze),re.setXYZW(Q,D.r,D.g,D.b,ze*Iy)}),j.needsUpdate=re.needsUpdate=!0)})}}{const x=yy(n.departures,n.anims,i.clips),I={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:t.ball.static===!0},T=new Zt({map:Oy(),color:os,blending:2,transparent:!0,depthWrite:!1}),P=new wt(new Yn(jl,jl).rotateX(-Math.PI/2),T);P.position.y=.02,P.renderOrder=3,e.add(P);const N=i.ballRadius??Ny,A=Dy*N,M=Tr*s,L=new Zt({color:os,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),K=new wt(new ao(Math.max(A-M/2,1e-4),A+M/2,40),L);K.frustumCulled=!1,K.renderOrder=8,e.add(K),_.push((q,V)=>{const D=Sy(I,x,q);P.visible=a.highlight&&D.kind==="ring",K.visible=a.highlight&&(D.kind==="halo"||D.kind==="free");const z=Math.sin(q*2*Math.PI/1.6);if(D.kind==="ring"){const Z=ru(h,D.player,q);P.position.x=l(Z),P.position.z=u(Z);const j=1+.05*z;P.scale.x=P.scale.z=j,T.opacity=.72+.18*z}else if(D.kind==="halo"||D.kind==="free"){const Z=kl(h,q);K.position.set(l(Z.pos),N+Z.height,u(Z.pos)),K.quaternion.copy(V.quaternion),L.opacity=D.kind==="free"?Fy:.72+.18*z}})}const m=[];for(const x of((E=t.overlays)==null?void 0:E.zones)??[]){const I=new wt(new Yn(x.w,x.h).rotateX(-Math.PI/2).rotateY(Math.PI),new Zt({map:By(x),transparent:!0,depthWrite:!1}));I.position.set(l(x.at),.004,u(x.at)),I.renderOrder=.5,e.add(I),m.push(I)}const p=()=>{for(const x of m)x.visible=a.zones};return p(),{update(x,I){for(const T of _)T(x,I)},set(x){Object.assign(a,x),p()}}}const zy=new B(0,1,0),Hy=.04,Vy=8,Os=.1,fs=46,Hs=25,ql=70;function Hr(i,e){return new B(Math.cos(i)*Math.sin(e),Math.sin(i),-Math.cos(i)*Math.cos(e))}function Kr(i){const e=i.fov*Math.PI/360;return{vHalf:e,hHalf:Math.atan(Math.tan(e)*i.aspect)}}let Ri=new Float64Array(64),wr=new Float64Array(64),Rr=new Float64Array(64);const Wy=new B,Xy=new B,Cr=new B;function Kl(i,e,t){let n=-1/0,s=-1/0;for(let r=0;r<e;r++)n=Math.max(n,i[r]/(2*t)+Ri[r]/2),s=Math.max(s,-i[r]/(2*t)+Ri[r]/2);return n+s}function Yl(i,e,t,n){let s=-1/0,r=1/0;for(let a=0;a<e;a++)s=Math.max(s,i[a]-(n-Ri[a])*t),r=Math.min(r,i[a]+(n-Ri[a])*t);return(s+r)/2}function Vr(i,e,t,n,s){const r=i.length;Ri.length<r&&(Ri=new Float64Array(r),wr=new Float64Array(r),Rr=new Float64Array(r));const a=Wy.crossVectors(zy,t).normalize(),o=Xy.crossVectors(t,a).normalize(),c=Math.tan(s),l=Math.tan(n);for(let h=0;h<r;h++)Cr.subVectors(i[h],e),Ri[h]=Cr.dot(t),wr[h]=Cr.dot(a),Rr[h]=Cr.dot(o);const u=Math.max(Math.max(Kl(wr,r,c),Kl(Rr,r,l))*(1+Hy),Vy);return{dist:u,offset:new B().addScaledVector(a,Yl(wr,r,c,u)).addScaledVector(o,Yl(Rr,r,l,u))}}function uu(i,e,t,n){const[s,r]=t?[i,e]:[e,i];return s>r*(1+Os)?!0:r>s*(1+Os)?!1:n}function du(i,e,t=fs,n=Hs){const s=new fn().setFromPoints(i),r=s.getCenter(new B),a=s.getSize(new B),{vHalf:o,hHalf:c}=Kr(e),l=t*Math.PI/180,u=n*Math.PI/180,h=Vr(i,r,Hr(l,u),o,c).dist,d=Vr(i,r,Hr(l,u+Math.PI/2),o,c).dist,f=uu(a.x,a.z,e.aspect<1,d<h*(1-Os));return{dist:f?d:h,alt:f}}function Ga(i,e,t,n=fs,s=Hs){const{dist:r}=du(i,e,n,s);return 2*r*Math.tan(Kr(e).vHalf)/t}function $l(i=fs){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}class jy{constructor(e,t=fs,n=Hs){Tt(this,"target",new B);Tt(this,"wanted",new B);Tt(this,"useAlt",!1);this.camera=e,this.elevDeg=t,this.azDeg=n}setElev(e){this.elevDeg=e}get elev(){return this.elevDeg}setAz(e){this.azDeg=e}get az(){return this.azDeg}frame(e,t){if(!e.length)return;const n=new fn().setFromPoints(e),s=n.getCenter(new B),r=n.getSize(new B),{vHalf:a,hHalf:o}=Kr(this.camera),c=this.elevDeg*Math.PI/180,l=this.azDeg*Math.PI/180,u=l+Math.PI/2,h=Hr(c,l),d=Hr(c,u),f=Vr(e,s,h,a,o),g=Vr(e,s,d,a,o);!this.useAlt&&g.dist<f.dist*(1-Os)?this.useAlt=!0:this.useAlt&&f.dist<g.dist*(1-Os)?this.useAlt=!1:this.useAlt=uu(r.x,r.z,this.camera.aspect<1,this.useAlt);const _=this.useAlt?g:f,m=this.useAlt?d:h,p=s.clone().add(_.offset);this.wanted.copy(m).multiplyScalar(_.dist).add(p);const y=Math.min(t*2.5,1);this.camera.position.lerp(this.wanted,y),this.target.lerp(p,y),this.camera.lookAt(this.target)}}const qy=1.8,Ky=34,Yy=844,$y=1,fu=4;function Zl(i,e,t=fs,n=Hs){const{vHalf:s}=Kr(e),r=t*Math.PI/180,{dist:a}=du(i,e,t,n),o=Ky*2*a*Math.tan(s)/(Yy*qy*Math.cos(r));return Math.min(fu,Math.max($y,o))}function Zy(i,e,t,n=fs,s=Hs,r=fu){const a=u=>Us(i,Math.min(r,u));let o=a(Zl(e,t,n,s)),c=0,l=0;for(let u=0;u<8;u++){c++;const h=a(Zl([...e,...Ja(i,o)],t,n,s));if(l=Math.abs(h-o)/o,o=h,l<=.005)break}return{scale:o,rounds:c,residual:l,framed:[...e,...Ja(i,o)]}}class Jy{constructor(){Tt(this,"last",-1);Tt(this,"dts",[])}tick(e){this.last>=0&&(this.dts.push(e-this.last),this.dts.length>120&&this.dts.shift()),this.last=e}get avg(){return this.dts.length?1e3/(this.dts.reduce((e,t)=>e+t)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const ai={clips:0,schedule:0,build:0};let Jl=null;function Qy(){return Jl??(Jl=fetch(Di("assets/clips_ochi.json")).then(i=>i.json()).then(i=>Xh(i)).catch(i=>{throw Jl=null,i}))}let Ql=null;function eM(i){return Ql??(Ql=fo().loadAsync(Di("assets/ball.glb")).then(e=>(e.scene.traverse(t=>{const n=t.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),e.scene)).catch(e=>{throw Ql=null,e}))}function tM(i,e,t){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=e)}async function pu(i,e,t={}){var R,S;const n=performance.now(),s=Vb(i),r=await Qy();ai.clips=performance.now()-n;const a=t.stage??po(e),o=new jn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([O,ee])=>new B(O*s.pitch.width/2,0,ee*s.pitch.length/2)),l=s.players.map(O=>new B(O.start[0]-s.pitch.width/2,0,O.start[1]-s.pitch.length/2)),u=[...c,...l],h=()=>t.bodyScale??Zy(s,u,a.camera,t.elev,t.az).scale,d=O=>[...u,...Ja(s,O)],f=a.size();let g=h(),_=d(g);Sl(.35*g);let m=Us(s,g);const p=performance.now(),y=((R=t.schedules)==null?void 0:R.get(m))??Av(s,r,m);(S=t.schedules)==null||S.set(m,y),ai.schedule=performance.now()-p;const E=Yv(s),x=(O=t.elev??0)=>O>=ql?[..._,...E]:_;let I=Ga(x(),a.camera,a.size().height,t.elev,t.az),T=$l(t.elev);const{toWorld:P,goals:N,cones:A}=await $v(o,s,a.renderer.capabilities.getMaxAnisotropy(),g);let M=_.slice(u.length);a.fitShadow(_);const L=await Ob(o,s.players.length),K=new Map,q=new Map;s.players.forEach((O,ee)=>{const te=L[ee];K.set(O.id,te),te.root.rotation.order="YXZ",te.root.scale.setScalar(g),Bb(te,s.teams[O.team].kit.primary),te.root.position.copy(P(O.start));const se=Nl(.9);se.scale.setScalar(g),se.position.x=te.root.position.x,se.position.z=te.root.position.z,o.add(se),q.set(O.id,se)});const V=(await eM()).clone();V.scale.setScalar(g),o.add(V);const D=Nl(.3);D.scale.setScalar(g),o.add(D);const z=new jy(a.camera,t.elev,t.az),Z=new wv(s.duration,t.loop??!0),j=new Jy,re=new Map(s.players.map(O=>[O.id,O.role])),{applyAnim:ae,cueAt:ge}=Tv(r,y.anims,re),Ce=Rv(y.turns,s.players.map(O=>[O.id,O.role==="keeper"?Lt(O.start,s.ball.start):0])),ze=Ce.heading,Q=Ce.rateOf,le=new Map(s.players.map(O=>[O.id,O.start]));function Me(){const O=new Set(o.children);return{built:Gy({scene:o,drill:s,schedule:y,clips:r,headingAt:te=>ze.get(te)??0,search:t.search,pathM:I,pathWidthK:T,ballRadius:.11*g,goalScale:m}),owned:o.children.filter(te=>!O.has(te))}}let J=Me();const oe={},ce={update:(O,ee)=>J.built.update(O,ee),set:O=>{Object.assign(oe,O),J.built.set(O)}};function he(){for(const O of J.owned)o.remove(O),Lh(O);J=Me(),J.built.set(oe)}function Oe(){const O=h();if(O!==g){g=O,_=d(g),M=_.slice(u.length),m=Us(s,g),Sl(.35*g);for(const ee of K.values())ee.root.scale.setScalar(g);for(const ee of q.values())ee.scale.setScalar(g);V.scale.setScalar(g),D.scale.setScalar(g);for(const ee of A)ee.scale.setScalar(g);for(const ee of N)ee.scale.setScalar(m);a.fitShadow(_)}I=Ga(x(z.elev),a.camera,a.size().height,z.elev,z.az),he(),a.rule.wake()}let Ve=0;const Ye=a.onBox(()=>{Ve||(Ve=requestAnimationFrame(()=>{Ve=0,Oe()}))}),U=a.size();(U.width!==f.width||U.height!==f.height)&&Oe(),t.embed||Object.assign(window,{__world:{byId:K,heading:ze,camera:a.camera,ball:V,schedule:y,goals:N,bodyScale:g},__pathMetrics:()=>({metresPerPx:I,widthK:T,runHalfM:1.6*I*T/2,passHalfM:2.2*I*T/2})});function pt(O,ee=30,te=.12,se=4,Ie=1){const xe=[];for(const[C,b]of K)b.root.traverse(ne=>{ne.isBone&&/foot/i.test(ne.name)&&xe.push({id:C,name:ne.name,bone:ne})});Z.pause(),Z.seek(0);for(let C=0;C<90;C++)a.step(1/60);Z.play();const we=1/ee,Qe=Math.min(O??s.duration,s.duration),me=Math.max(0,Math.round(Qe*ee)-1),Te=xe.map(()=>[]),Ee=new B;for(let C=0;C<=me;C++){for(let b=0;b<xe.length;b++){const ne=xe[b].bone.matrixWorld.elements;Ee.set(ne[12],ne[13],ne[14]);const w=K.get(xe[b].id).root.worldToLocal(Ee.clone());Te[b].push([C*we,ne[12],ne[13],ne[14],w.x,w.z])}a.step(we)}Z.pause();const Ne=(C,b)=>{var ne;return((ne=ge(C,b))==null?void 0:ne.clip)??"idle"},ve=[];return xe.forEach((C,b)=>{const ne=(G,W)=>{if(W-G<se)return;const X=Te[b].slice(G,W);let ie=0,_e=0;for(let ye=1;ye<X.length;ye++)ie=Math.max(ie,Math.hypot(X[ye][1]-X[0][1],X[ye][3]-X[0][3])),_e+=Math.hypot(X[ye][4]-X[ye-1][4],X[ye][5]-X[ye-1][5])/we;ve.push({player:C.id,foot:C.name,t0:+X[0][0].toFixed(2),t1:+X[X.length-1][0].toFixed(2),drift:+ie.toFixed(3),localSpeed:+(_e/(X.length-1)).toFixed(2),clip0:Ne(C.id,X[0][0]),clip1:Ne(C.id,X[X.length-1][0])})},w=Te[b].map((G,W)=>W===0?1/0:Math.hypot(G[1]-Te[b][W-1][1],G[3]-Te[b][W-1][3])/we);let F=-1;Te[b].forEach((G,W)=>{const X=G[2]<te,ie=W>0&&Ne(C.id,G[0])!==Ne(C.id,Te[b][W-1][0]),_e=w[W]>Ie&&W>0&&w[W-1]>Ie;F>=0&&(!X||ie||_e)&&(ne(F,W),F=-1),F<0&&X&&w[W]<Ie&&(F=W)}),F>=0&&ne(F,Te[b].length)}),ve.sort((C,b)=>b.drift-C.drift),{feet:xe.map(C=>({id:C.id,name:C.name})),hPlant:te,fps:ee,phases:ve}}t.embed||Object.assign(window,{__footAudit:pt}),t.embed&&a.rule.enable();const We=new Map;let be=null;a.scene.add(o);const Pe=(O,ee)=>{var Te;Z.advance(O);const te=Z.t,se=Z.playing?O:0,Ie=y.attachTo(te),xe=Za({t:te,holderId:Ie,holderRoot:Ie?le.get(Ie):null,holderHeading:Ie?ze.get(Ie):0,ballStart:s.ball.start,flights:y.flights,departures:y.departures,arrivals:y.arrivals}).pos;for(const Ee of s.players){const Ne=K.get(Ee.id);let ve=Ee.start,C=0;for(const De of y.moves[Ee.id]??[])if(te>=De.t0){const Ge=Cn(De,te);ve=Ge.pos,C=Ge.speed}const b=Wh(y.dives,y.moves[Ee.id],Ee.id,te),ne=b!==null;b&&(ve=b),Ne.root.position.copy(P(ve));const w=y.moves[Ee.id]??[],F=ne?{pitch:0,roll:0}:qb(jb(w,te),ze.get(Ee.id)),G=ne?0:Yb(w,te);Ne.root.rotation.x=F.pitch*G,Ne.root.rotation.z=F.roll*G,ne||(Ne.root.position.y-=Qb(w,te)),le.set(Ee.id,ve);const W=q.get(Ee.id);W.position.x=Ne.root.position.x,W.position.z=Ne.root.position.z;let X=null,ie=!1;for(const De of y.faces)De.player===Ee.id&&te>=De.t0&&(X=De.until===void 0||te<=De.until?De.at:null,De.lock&&te>=De.lock[0]&&te<=De.lock[1]&&(ie=!0));const _e=X!==null&&Ti(ve,X),ye=a0(ve,xe,_e,Ee.id===Ie),Ae=_e?Lt(ve,X):ye??ze.get(Ee.id),{h:de,clipYaw:Re}=Ce.step(Ee.id,te,se,C,Ae,ie,!_e&&ye!==null);Ne.root.rotation.y=e0(de,Re),ae(Ee.id,Ne,te,se,C)}const we=Za({t:te,holderId:Ie,holderRoot:Ie?le.get(Ie):null,holderHeading:Ie?ze.get(Ie):0,ballStart:s.ball.start,flights:y.flights,departures:y.departures,arrivals:y.arrivals});V.position.copy(P(we.pos,.11*g+we.height));const Qe=we.height>.02;if(D.visible=!Qe,Qe||(D.position.x=V.position.x,D.position.z=V.position.z),be&&!Qe){const Ee=V.position.x-be.x,Ne=V.position.z-be.z;if(Math.hypot(Ee,Ne)<2){const{axis:ve,angle:C}=Cv([be.x,be.z],[V.position.x,V.position.z],.11*g);C>0&&V.rotateOnWorldAxis(new B(...ve),C)}}be=V.position.clone(),ce.update(te,a.camera);for(const Ee of s.players){const Ne=K.get(Ee.id),ve=kb(Ne);if(!ve)continue;const C=mv(y.faces,Ee.id,te),b=C?P(C):V.position,ne=t0(Math.atan2(b.x-Ne.root.position.x,b.z-Ne.root.position.z)-ze.get(Ee.id)+s0(Q.get(Ee.id)??0)),w=We.get(Ee.id)??0,F=se>0?w+(ne-w)*.3:w;We.set(Ee.id,F),ve.rotation.y-=F}const me=[...K.values()].map(Ee=>new B(Ee.root.position.x,0,Ee.root.position.z));me.push(...c,...M),z.elev>=ql&&me.push(...E),z.frame([...me,V.position.clone()],a.rule.snap()?1/0:O),j.tick(ee),tM(!!t.embed,`t ${te.toFixed(1)}s  fps ${j.avg.toFixed(0)}
[space] play/pause  [r] restart`),(Te=t.onFrame)==null||Te.call(t,te,ee)};a.start(Pe);const rt=O=>{O.code==="Space"&&(Z.playing?Z.pause():Z.play()),O.code==="KeyR"&&Z.seek(0)};t.embed||addEventListener("keydown",rt);function Se(O,ee=z.az){O===z.elev&&ee===z.az||(z.setElev(O),z.setAz(ee),I=Ga(x(O),a.camera,a.size().height,O,ee),T=$l(O),he(),a.rule.wake())}return ai.build=performance.now()-n-ai.clips-ai.schedule,{timeline:Z,step:O=>a.step(O),stage:a,overlays:ce,setCamera:Se,dispose(){removeEventListener("keydown",rt),Ye(),Ve&&(cancelAnimationFrame(Ve),Ve=0),a.scene.remove(o),Fb(o,[...L.map(O=>O.root),V,...N]),t.stage?a.park(Pe):a.dispose()}}}const eh="edc0f788",mu=24,nM=/^[\w-]+$/,iM=async i=>await(await fetch(Di(`drills/${i}.json`))).json();class sM{constructor(e=iM,t=null,n=mu){Tt(this,"mem",new Map);Tt(this,"inflight",new Map);this.fetchJson=e,this.db=t,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(e){const t=this.mem.get(e);return t===void 0?null:(this.mem.delete(e),this.mem.set(e,t),t)}put(e,t){const s=this.mem.get(e)??{json:t,schedules:new Map};s.json=t,this.mem.delete(e),this.mem.set(e,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(e){const t=this.peek(e);if(t)return t;let n=this.inflight.get(e);return n||(n=this.miss(e).finally(()=>this.inflight.delete(e)),this.inflight.set(e,n)),n}async miss(e){var r;const t=this.db?await this.db.read(e).catch(()=>null):null;if(t&&t.build===eh)return this.put(e,t.json);const n=await this.fetchJson(e),s=this.put(e,n);return(r=this.db)==null||r.write(e,{build:eh,json:n}).catch(()=>{}),s}async warm(e){const t=e.filter(n=>typeof n=="string"&&nM.test(n)).slice(0,this.cap);for(const n of t)try{await this.take(n)}catch{}for(const n of[...t].reverse())this.peek(n)}}const rM="tactivo-engine",yi="drills",th=i=>new Promise((e,t)=>{i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)});function aM(){try{return globalThis.indexedDB}catch{return}}function oM(i=aM()){if(!i)return null;let e=null;const t=()=>e??(e=new Promise((n,s)=>{const r=i.open(rM,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(yi)&&r.result.deleteObjectStore(yi),r.result.createObjectStore(yi)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw e=null,n}));return{async read(n){try{const r=(await t()).transaction(yi,"readonly").objectStore(yi);return await th(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await t();await th(r.transaction(yi,"readwrite").objectStore(yi).put(s,n))}catch{}}}}const vo=.5,cM=5,lM={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},hM=100,Wr=1/0,uM=2e3,za=/^[\w-]+$/,dM=30,fM=85,pM=i=>Math.min(Math.max(i,dM),fM),Ci=i=>({state:i,effects:[],out:[]}),Fr=(i,e,t)=>({state:i,effects:[],out:[{type:"error",code:e,message:t}]}),mM=new Set(["auto","authored","off"]),gM=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply"]);function _M(i){return Array.isArray(i)?i.map(e=>{const t=e,n=typeof(t==null?void 0:t.text)=="string"&&t.text!==""?t.text:null,s=typeof(t==null?void 0:t.t)=="number"&&Number.isFinite(t.t)?t.t:1/0,r=t==null?void 0:t.hold,a=typeof r=="number"&&Number.isFinite(r)&&r>0?gu(r):0,o=typeof(t==null?void 0:t.beat)=="string"?t.beat:void 0;return{t:n===null?1/0:s,text:n,hold:a,...o?{beat:o}:{}}}):[]}const gu=i=>Math.min(Math.max(i,vo),cM);function _u(i,e){let t=-1;for(let n=0;n<i.length;n++)i[n].t<=e&&(t=n);return t}const yo=(i,e)=>{var t;return((t=i[e])==null?void 0:t.hold)??0},Mo=(i,e)=>{var n;const t=yo(i,e);return{type:"cue",index:e,text:((n=i[e])==null?void 0:n.text)??null,...t>0?{hold:t}:{}}},nn=i=>({error:i,code:"bad_message"});function bM(i){if(typeof i!="object"||i===null)return null;const e=i;if(typeof e.type!="string"||gM.has(e.type))return null;switch(e.type){case"load":{const t=e.drill;if(typeof t!="object"||t===null)return nn("load: drill must be a DrillScene3D object or {key}");if(e.loop!==void 0&&typeof e.loop!="boolean")return nn("load: loop must be a boolean");const n=t;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!za.test(n.key)))return{error:`load: key must match ${za.source}`,code:"bad_key"};let s;if(e.intro!==void 0){const r=e.intro;if(typeof r!="object"||r===null)return nn("load: intro must be {text, hold}");if(typeof r.text!="string"||r.text==="")return nn("load: intro.text must be a non-empty string");if(typeof r.hold!="number"||!Number.isFinite(r.hold))return nn("load: intro.hold must be a finite number");s={text:r.text,hold:gu(r.hold)}}return{type:"load",drill:t,loop:e.loop!==!1,...s?{intro:s}:{}}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:e.type};case"setAudio":return typeof e.enabled!="boolean"?nn("setAudio: enabled must be a boolean"):{type:"setAudio",enabled:e.enabled};case"warm":return Array.isArray(e.keys)?{type:"warm",keys:e.keys.filter(t=>typeof t=="string"&&za.test(t)).slice(0,mu)}:nn("warm: keys must be an array of drill keys");case"seek":return typeof e.t!="number"||!Number.isFinite(e.t)?nn("seek: t must be a finite number"):{type:"seek",t:e.t};case"setSpeed":return typeof e.x!="number"||!Number.isFinite(e.x)||e.x<=0?nn("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:e.x};case"setCamera":return e.elev!==void 0?typeof e.elev!="number"||!Number.isFinite(e.elev)?nn("setCamera: elev must be a finite number"):e.az!==void 0&&(typeof e.az!="number"||!Number.isFinite(e.az))?nn("setCamera: az must be a finite number"):{type:"setCamera",elev:e.elev,...e.az!==void 0?{az:e.az}:{}}:typeof e.mode!="string"?nn("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:e.mode};case"setOverlays":{const t={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(e[n]!==void 0){if(typeof e[n]!="boolean")return nn(`setOverlays: ${n} must be a boolean`);t[n]=e[n]}if(e.runPaths!==void 0){if(typeof e.runPaths!="string"||!mM.has(e.runPaths))return nn("setOverlays: runPaths must be auto|authored|off");t.runPaths=e.runPaths}return t}default:return nn(`unknown message type: ${e.type}`)}}function xM(i,e,t=0){if(e.type==="load"){const s=i.seq+1,r="key"in e.drill&&typeof e.drill.key=="string"&&Object.keys(e.drill).length===1?{key:e.drill.key}:{json:e.drill};return{state:{...i,phase:"loading",playing:!1,loop:e.loop,duration:0,seq:s,narration:[],cue:-1,intro:e.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:e.loop}],out:[]}}if(e.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(e.type==="warm")return{state:i,effects:[{kind:"warm",keys:e.keys}],out:[]};if(e.type==="setAudio")return{state:i,effects:[{kind:"setAudio",enabled:e.enabled}],out:[]};if(e.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(e.type==="unload")return i.phase==="idle"?Ci(i):{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return Fr(i,"not_loaded",`${e.type}: no drill loaded`);if(i.phase==="loading")return Fr(i,"still_loading",`${e.type}: still loading`);const n=i.holdUntilMs!==null;switch(e.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(e.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:e.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"elev"in e?{state:i,effects:[{kind:"setCamera",elev:pM(e.elev),...e.az!==void 0?{az:e.az}:{}}],out:[]}:e.mode==="tactical"?Ci(i):Fr(i,"bad_camera",`setCamera: unknown mode ${e.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=e;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function Cs(i,e,t=0){switch(e.kind){case"loaded":if(e.seq!==i.seq||i.phase!=="loading")return Ci(i);{const n=e.narration??[],s=typeof e.hookHold=="number"&&Number.isFinite(e.hookHold),r=e.voiced&&!s?null:i.intro,a=r?-1:_u(n,0),o=r?s?Math.max(e.hookHold,vo):r.hold:0,c=r?o:yo(n,a),l=s?Wr:c>0?t+c*1e3:null,u={type:"ready",duration:e.duration,...e.key!==void 0?{key:e.key}:{}};return{state:{...i,phase:"ready",duration:e.duration,narration:n,cue:a,intro:null,holdUntilMs:l,hookCeilingMs:s?t+e.hookHold*1e3+uM:0,introSkip:r!==null},effects:l!==null?[{kind:"hold",on:!0}]:[],out:[u,r?{type:"cue",index:-1,text:r.text,hold:o}:Mo(n,a)]}}case"loadFailed":return e.seq!==i.seq||i.phase!=="loading"?Ci(i):Fr({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${e.message}`);case"hookEnded":return i.holdUntilMs!==Wr?Ci(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:e.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:e.t}]}}}function vM(i,e,t){if(i.holdUntilMs!==null){const c=i.holdUntilMs===Wr?i.hookCeilingMs:i.holdUntilMs;return t<c?Ci(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=_u(i.narration,e),s=i.playing&&t-i.lastTimeMs>=hM;if(n===i.cue&&!s)return Ci(i);const r=n!==i.cue,a=r&&i.introSkip&&n===0,o=r&&!a?yo(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:t}:{},...o>0?{holdUntilMs:t+o*1e3}:{}},effects:o>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[Mo(i.narration,n)]:[],...s?[{type:"time",t:e}]:[]]}}const bu="assets/narration/",yM=new Set(["progression","why"]),ks=1.15;function MM(i,e,t){let n=0,s=-1;const r=[],a=e.map((l,u)=>{const h=l.beat==="action"?`action-${++n}`:l.beat,d=i&&h?`${i}-${h}`:null,f=d?t[d]:void 0,g=typeof f=="number"&&Number.isFinite(f)&&f>0?d:null,_={index:u,clip:g,hold:g?f/ks:l.hold??0,tail:yM.has(l.beat??"")};return l.beat==="hook"?s=u:_.tail&&r.push(_),_}),o=s<0?null:a[s],c=a.filter(l=>l!==o&&l.clip!==null);return{lines:a,hook:o,tail:r,queue:c,script:[...o!=null&&o.clip?[o.clip]:[],...c.map(l=>l.clip)],hasAudio:a.some(l=>l.clip!==null)}}async function SM(i=Di(bu)){try{const e=await fetch(`${i}index.json`);if(!e.ok)return{};const t=await e.json();return t&&typeof t=="object"?t:{}}catch{return{}}}const EM=.0056,AM=.01;function TM(i){const e=i.length,t=i.sampleRate,n=Math.max(1,Math.round(t*AM)),s=[];for(let c=0;c<i.numberOfChannels;c++)s.push(i.getChannelData(c));const r=c=>{const l=Math.min(c+n,e);let u=0,h=0;for(const d of s)for(let f=c;f<l;f++)u+=d[f]*d[f],h++;return h>0&&Math.sqrt(u/h)>EM};let a=-1,o=-1;for(let c=0;c<e;c+=n)if(r(c)){a=c;break}if(a<0)return{lead:0,tail:0,end:e/t};for(let c=Math.floor((e-1)/n)*n;c>=0;c-=n)if(r(c)){o=Math.min(c+n,e);break}return{lead:a/t,tail:Math.max((e-o)/t,0),end:o/t}}function nh(i,e,t){return e&&t?Math.max(i-(t.lead+t.tail)/ks,0):i}const wM=40,RM=3;class CM{constructor(e=Di(bu),t=n=>new Audio(n)){Tt(this,"blocked",!1);Tt(this,"el",null);Tt(this,"finish",null);Tt(this,"held",new Map);Tt(this,"inflight",new Set);Tt(this,"trims",new Map);Tt(this,"ctx",null);Tt(this,"noCtx",!1);Tt(this,"gen",0);Tt(this,"walks",0);Tt(this,"playing",null);Tt(this,"arm",null);Tt(this,"onTrim",null);this.dir=e,this.make=t}fetched(){return[...this.held.keys()]}newGeneration(){this.gen++}trim(e){return this.trims.get(e)}remaining(e){const t=this.el;if(!t||this.playing!==e)return;const n=this.trims.get(e),s=n&&n.tail>0?Math.min(n.end,t.duration):t.duration;if(Number.isFinite(s))return Math.max((s-(t.currentTime||0))/(t.playbackRate||1),0)}closeCtx(){const e=this.ctx;this.ctx=null;try{Promise.resolve(e==null?void 0:e.close()).catch(()=>{})}catch{}}async measure(e,t){var n,s;if(!(this.trims.has(e)||this.noCtx))try{if(!this.ctx){const o=globalThis,c=o.AudioContext??o.webkitAudioContext;if(!c){this.noCtx=!0;return}this.ctx=new c}const r=await this.ctx.decodeAudioData((await t.arrayBuffer()).slice(0));if(!r)return;const a=TM(r);this.trims.set(e,a),this.playing===e&&((n=this.arm)==null||n.call(this,a),(s=this.onTrim)==null||s.call(this,e,a))}catch{}}touch(e){const t=this.held.get(e);if(t!==void 0)return this.held.delete(e),this.held.set(e,t),t}async prefetch(e){if(!(this.touch(e)!==void 0||this.inflight.has(e))){this.inflight.add(e);try{const t=await fetch(`${this.dir}${e}.mp3`);if(!t.ok)return;const n=await t.blob(),s=URL.createObjectURL(n);this.held.set(e,s),await this.measure(e,n);for(const r of[...this.held.keys()]){if(this.held.size<=wM)break;if(r===this.playing)continue;const a=this.held.get(r);this.held.delete(r);try{URL.revokeObjectURL(a)}catch{}}}catch{}finally{this.inflight.delete(e)}}}async prefetchAll(e){const t=this.gen;this.walks++;try{for(const n of e){if(t!==this.gen)return;await this.prefetch(n)}}finally{this.walks--}this.walks===0&&this.inflight.size===0&&this.closeCtx()}play(e,t=0){this.stop();let n;try{n=this.make(this.touch(e)??`${this.dir}${e}.mp3`)}catch{return Promise.resolve()}try{n.preservesPitch=!0,n.webkitPreservesPitch=!0,n.playbackRate=ks}catch{}this.el=n;const s=this.trims.get(e);return new Promise(r=>{let a,o,c=()=>{},l,u,h;const d=(m,p)=>{if(p)try{n.removeEventListener(m,p)}catch{}},f=()=>{a!==void 0&&(clearTimeout(a),a=void 0),o!==void 0&&(clearTimeout(o),o=void 0),d("timeupdate",l),l=void 0,d("playing",u),u=void 0,d("loadedmetadata",h),h=void 0,this.el===n&&(this.el=null,this.finish=null,this.arm=null,this.playing=null),r()};this.finish=f,n.addEventListener("ended",f),n.addEventListener("error",f);let g=!1;const _=m=>{if(g||!(m.lead>0||m.tail>0))return;g=!0;const p=()=>{if(m.lead>n.currentTime)try{n.currentTime=m.lead}catch{}const y=Math.min(m.end,n.duration);if(!(m.tail>0)||!Number.isFinite(y)||y<=0)return;let E=-1;const x=()=>{if(n.currentTime>E&&n.currentTime<y){I();return}try{n.pause()}catch{}f()},I=()=>{a!==void 0&&clearTimeout(a),E=n.currentTime||0;const T=(y-E)/(n.playbackRate||1);a=setTimeout(x,Math.max(T,0)*1e3)};l=()=>{n.currentTime>=y?x():n.currentTime>0&&I()},n.addEventListener("timeupdate",l),u=()=>{I(),c()},n.addEventListener("playing",u),I()};(n.readyState??0)>=1?p():(h=p,n.addEventListener("loadedmetadata",h))};this.playing=e,this.arm=_,s&&_(s);{const m=Number.isFinite(n.duration)&&n.duration>0?n.duration:t;if(m>0){let p=-1;const y=()=>{if(n.currentTime>p){c();return}try{n.pause()}catch{}f()};c=()=>{o!==void 0&&clearTimeout(o),p=n.currentTime||0;const E=Math.max(m-p,0)/(n.playbackRate||1);o=setTimeout(y,(E+RM)*1e3)},c()}}try{Promise.resolve(n.play()).catch(()=>{this.blocked=!0,f()})}catch{this.blocked=!0,f()}})}stop(){const e=this.el,t=this.finish;this.el=null,this.finish=null,this.playing=null,this.arm=null;try{e==null||e.pause()}catch{}t==null||t()}}function PM(i=window,e={createStage:po,runDrill:pu}){const t=e.warm??new sM(void 0,oM()),n=e.narrator??new CM;let s=null;const r=()=>s??(s=(e.audioIndex??SM)());let a=null,o=new Set,c=!0,l=[],u=!1,h=[];const d=()=>c&&!n.blocked,f=()=>({type:"audio",state:c?n.blocked?"blocked":"playing":"muted"}),g=()=>d()&&(a==null?void 0:a.hasAudio)===!0,_=J=>{var oe;return g()&&(J<0||((oe=a==null?void 0:a.lines[J])==null?void 0:oe.clip)!=null)};function m(J){if(a)for(const oe of a.lines){const ce=J[oe.index];ce&&(ce.hold=g()?0:l[oe.index]??0)}}function p(){!n.blocked||u||(u=!0,m(V.narration),ge([{type:"audio",state:"blocked"}]))}let y=Promise.resolve(),E=!1,x=0,I=null,T=null,P=!1;n.onTrim=J=>{if(!E||J!==I)return;const oe=n.remaining(J);oe!==void 0&&(x=performance.now()+oe*1e3,P&&T!==null&&ge([{type:"cue",index:-1,text:T,hold:Math.max(oe,vo)}]))};let N=0,A=!1,M=[];const L=()=>{const J=M;M=[];for(const oe of J)oe()},K=(J,oe)=>new Promise(ce=>{const he=()=>{J!==V.seq?ce(!1):oe()?ce(!0):M.push(he)};he()});async function q(J){var ce;const oe=(a==null?void 0:a.queue)??[];for(;J===V.seq&&N<oe.length;){const he=oe[N],Oe=he.clip;if(!Oe||o.has(Oe)){N++;continue}if(!d()){const Ve=!c;if(!await K(J,d))return;if(Ve){const Ye=oe.findIndex(U=>U.index===V.cue);Ye>N&&(N=Ye)}continue}if(o.add(Oe),ge([{type:"cue",index:he.index,text:((ce=V.narration[he.index])==null?void 0:ce.text)??null,hold:nh(he.hold,Oe,n.trim(Oe))}]),await n.play(Oe,he.hold*ks),J!==V.seq)return;if(n.blocked){o.delete(Oe),p();continue}p(),N++}J===V.seq&&oe.length>0&&N>=oe.length&&(A=!0,ge([{type:"cue",index:-1,text:null}]))}let V=lM,D=null,z=null,Z=Promise.resolve(),j=null,re={},ae=0;function ge(J){if(j)for(const oe of J)j.source.postMessage(oe,{targetOrigin:j.origin==="null"||!j.origin?"*":j.origin})}function Ce(J,oe=!1){V=J.state;for(const ce of J.effects)ze(ce);ge(oe?J.out.filter(ce=>!(ce.type==="cue"&&_(ce.index))):J.out)}function ze(J){switch(J.kind){case"dispose":{n.stop(),n.newGeneration(),n.closeCtx(),E=!1,L();const oe=performance.now();D==null||D.dispose(),D=null,ae=performance.now()-oe,V.phase==="idle"&&(z==null||z.dispose(),z=null);return}case"unload":{n.stop(),n.newGeneration(),E=!1,L(),D==null||D.dispose(),D=null;return}case"load":{n.stop(),n.newGeneration(),a=null,o=new Set,l=[],N=0,E=!1,I=null,T=null,P=!1,A=!1,L(),y=Q(J.seq,J.source),Z=Z.catch(()=>{}).then(()=>Me(J.seq,J.source,J.loop));return}case"play":D==null||D.timeline.play(),D==null||D.stage.rule.play();return;case"pause":D==null||D.timeline.pause(),D==null||D.stage.rule.pause();return;case"seek":D==null||D.timeline.seek(J.t),D==null||D.stage.rule.wake();return;case"setSpeed":D==null||D.timeline.setSpeed(J.x);return;case"setOverlays":D==null||D.overlays.set(J.flags),D==null||D.stage.rule.wake();return;case"setCamera":D==null||D.setCamera(J.elev,J.az);return;case"hold":J.on?(D==null||D.timeline.pause(),D==null||D.stage.rule.play()):V.playing?(D==null||D.timeline.play(),D==null||D.stage.rule.play()):D==null||D.stage.rule.pause();return;case"warm":{const oe=J.keys;h=oe.slice(0,3);const ce=V.seq;Z.catch(()=>{}).then(()=>t.warm(oe)).then(()=>le(h,ce)).catch(()=>{});return}case"setAudio":{c=J.enabled,c?(n.blocked=!1,u=!1,V.holdUntilMs!==null&&V.holdUntilMs!==Wr&&(V={...V,holdUntilMs:null},ze({kind:"hold",on:!1})),a!=null&&a.script.length&&n.prefetchAll(a.script.filter(oe=>{var ce;return!o.has(oe)&&oe!==((ce=a==null?void 0:a.hook)==null?void 0:ce.clip)})),h.length&&le(h,V.seq)):(n.stop(),n.newGeneration()),m(V.narration),ge([f()]),!c&&V.phase==="ready"&&!(P&&E)&&ge([Mo(V.narration,V.cue)]),c&&V.phase==="ready"&&A&&ge([{type:"cue",index:-1,text:null}]),L();return}case"stats":ge([{type:"statsReply",frames:(D==null?void 0:D.stage.frames())??0,t:(D==null?void 0:D.timeline.t)??0,playing:V.playing,phases:{...re},warm:t.keys().length}]);return}}async function Q(J,oe){if(!("key"in oe))return;const ce=`${oe.key}-hook`,he=await r();if(J!==V.seq||!(he[ce]>0)||!d())return;o.add(ce),E=!0,I=ce;const Oe=n.trim(ce);x=performance.now()+nh(he[ce]/ks,ce,Oe)*1e3,await n.play(ce,he[ce]),E=!1,p(),J===V.seq&&Ce(Cs(V,{kind:"hookEnded"}))}async function le(J,oe){if(!c)return;const ce=await r();if(oe!==V.seq)return;const he=[];for(const Oe of J)for(const Ve of["hook","picture"]){const Ye=`${Oe}-${Ve}`;ce[Ye]>0&&he.push(Ye)}await n.prefetchAll(he)}async function Me(J,oe,ce){var rt;let he,Oe=[];const Ve=performance.now();let Ye=Ve,U=0;try{let Se=null,R;if("key"in oe?(Se=await t.take(oe.key),R=Se.json):R=oe.json,J!==V.seq)return;Ye=performance.now(),Oe=_M(R==null?void 0:R.narration),l=Oe.map(ee=>ee.hold??0);const S=await r();if(J!==V.seq)return;a=MM("key"in oe?oe.key:null,Oe,S),c&&a.script.length&&n.prefetchAll(a.script),m(Oe);const O=z!==null;z??(z=e.createStage(i.document.body)),z.remeasure(),U=O?0:performance.now()-Ye,he=await e.runDrill(R,i.document.body,{loop:ce,embed:!0,search:"",stage:z,...Se?{schedules:Se.schedules}:{},onFrame:(ee,te)=>Ce(vM(V,ee,te),!0)})}catch(Se){Ce(Cs(V,{kind:"loadFailed",seq:J,message:Se instanceof Error?Se.message:String(Se)},performance.now()));return}if(J!==V.seq||V.phase!=="loading"){he.dispose();return}D=he;const pt=performance.now();D.step(0),re={dispose:ae,fetch:Ye-Ve+ai.clips,stage:U,schedule:ai.schedule,build:ai.build,firstFrame:performance.now()-pt,total:ae+performance.now()-Ve},ae=0;let We=0;if(D.timeline.onLoop(()=>Ce(Cs(V,{kind:"looped",n:++We}))),D.timeline.onEnd(()=>{D==null||D.stage.rule.pause(),Ce(Cs(V,{kind:"ended",t:(D==null?void 0:D.timeline.t)??0}))}),E&&I!==null){const Se=n.remaining(I);Se!==void 0&&(x=performance.now()+Se*1e3)}const be=E?Math.max((x-performance.now())/1e3,0):void 0;T=((rt=V.intro)==null?void 0:rt.text)??null;const Pe=be!==void 0&&T!==null;m(Oe),Ce(Cs(V,{kind:"loaded",seq:J,duration:D.timeline.duration,narration:Oe,voiced:g(),...be!==void 0?{hookHold:be}:{},..."key"in oe?{key:oe.key}:{}},performance.now())),P=Pe,y.then(()=>{J===V.seq&&q(J)})}i.addEventListener("message",J=>{if(J.source===i)return;const oe=bM(J.data);if(oe!==null){if(J.source&&(j={source:J.source,origin:J.origin}),"error"in oe){ge([{type:"error",code:oe.code,message:oe.error}]);return}Ce(xM(V,oe,(D==null?void 0:D.timeline.t)??0))}}),i.parent&&i.parent!==i&&i.parent.postMessage({type:"hello"},"*")}function IM(i,e={}){const t=e.mountEmbed??PM,n=new Set;let s=null,r=!1;const a={stages:0,mounts:0,reparents:0},o=i.doc.createElement("div");o.style.position="absolute",o.style.inset="0",o.style.pointerEvents="none";const c=i.doc.createElement("div");c.style.display="none",i.doc.body.appendChild(c),c.appendChild(o);function l(f){f.type==="hello"&&(r=!0);for(const g of[...n])try{g(f)}catch(_){console.error("tactivo3d: listener failed",_),setTimeout(()=>{throw _})}}const u={postMessage(f){queueMicrotask(()=>l(f))}},h={document:{body:o},parent:u,addEventListener(f,g){f==="message"&&(s=g)},removeEventListener(){}};let d=!1;return{mount(f,g){a.mounts++,o.parentElement!==f&&(f.appendChild(o),d&&a.reparents++),!d&&(Ab((g==null?void 0:g.base)??i.base),t(h,{createStage:_=>(a.stages++,po(_)),runDrill:pu,...e.warm?{warm:e.warm}:{},...e.narrator?{narrator:e.narrator}:{},...e.audioIndex?{audioIndex:e.audioIndex}:{}}),d=!0)},unmount(){c.appendChild(o)},post(f){s==null||s({data:f,source:u,origin:""})},onMessage(f){return n.add(f),r&&queueMicrotask(()=>{n.has(f)&&f({type:"hello"})}),()=>{n.delete(f)}},stats:()=>({...a})}}typeof window<"u"&&typeof document<"u"&&(window.tactivo3d??(window.tactivo3d=IM({doc:document,base:new URL("./",import.meta.url).href})));
