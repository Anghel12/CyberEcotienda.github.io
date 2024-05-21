(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{79742:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],i=t[1];return(r+i)*3/4-i},t.toByteArray=function(e){var t,r,o=l(e),a=o[0],s=o[1],c=new n((a+s)*3/4-s),u=0,d=s>0?a-4:a;for(r=0;r<d;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,i=e.length,n=i%3,o=[],a=0,s=i-n;a<s;a+=16383)o.push(function(e,t,i){for(var n,o=[],a=t;a<i;a+=3)o.push(r[(n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+r[n>>12&63]+r[n>>6&63]+r[63&n]);return o.join("")}(e,a,a+16383>s?s:a+16383));return 1===n?o.push(r[(t=e[i-1])>>2]+r[t<<4&63]+"=="):2===n&&o.push(r[(t=(e[i-2]<<8)+e[i-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),o.join("")};for(var r=[],i=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=o.length;a<s;++a)r[a]=o[a],i[o.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var i=r===t?0:4-r%4;return[r,i]}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},48764:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let i=r(79742),n=r(80645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|f(e,t),i=a(r),n=i.write(e,t);return n!==r&&(i=i.slice(0,n)),i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(L(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(L(e,ArrayBuffer)||e&&L(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(L(e,SharedArrayBuffer)||e&&L(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return s.from(i,t,r);let n=function(e){var t;if(s.isBuffer(e)){let t=0|p(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?a(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),a(e<0?0:0|p(e))}function d(e){let t=e.length<0?0:0|p(e.length),r=a(t);for(let i=0;i<t;i+=1)r[i]=255&e[i];return r}function h(e,t,r){let i;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),i}function p(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function f(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||L(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;let n=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return N(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return j(e).length;default:if(n)return i?-1:N(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);let n="";for(let i=t;i<r;++i)n+=B[e[i]];return n}(this,t,r);case"utf8":case"utf-8":return v(this,t,r);case"ascii":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(127&e[n]);return i}(this,t,r);case"latin1":case"binary":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(e[n]);return i}(this,t,r);case"base64":var o,a;return o=t,a=r,0===o&&a===this.length?i.fromByteArray(this):i.fromByteArray(this.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let i=e.slice(t,r),n="";for(let e=0;e<i.length-1;e+=2)n+=String.fromCharCode(i[e]+256*i[e+1]);return n}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function w(e,t,r){let i=e[t];e[t]=e[r],e[r]=i}function m(e,t,r,i,n){var o;if(0===e.length)return -1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(n)return -1;r=e.length-1}else if(r<0){if(!n)return -1;r=0}if("string"==typeof t&&(t=s.from(t,i)),s.isBuffer(t))return 0===t.length?-1:b(e,t,r,i,n);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?n?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,i,n);throw TypeError("val must be string, number or Buffer")}function b(e,t,r,i,n){let o,a=1,s=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return -1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(n){let i=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*a}else -1!==i&&(o-=o-i),i=-1}else for(r+l>s&&(r=s-l),o=r;o>=0;o--){let r=!0;for(let i=0;i<l;i++)if(c(e,o+i)!==c(t,i)){r=!1;break}if(r)return o}return -1}function v(e,t,r){r=Math.min(e.length,r);let i=[],n=t;for(;n<r;){let t=e[n],o=null,a=t>239?4:t>223?3:t>191?2:1;if(n+a<=r){let r,i,s,l;switch(a){case 1:t<128&&(o=t);break;case 2:(192&(r=e[n+1]))==128&&(l=(31&t)<<6|63&r)>127&&(o=l);break;case 3:r=e[n+1],i=e[n+2],(192&r)==128&&(192&i)==128&&(l=(15&t)<<12|(63&r)<<6|63&i)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:r=e[n+1],i=e[n+2],s=e[n+3],(192&r)==128&&(192&i)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&i)<<6|63&s)>65535&&l<1114112&&(o=l)}}null===o?(o=65533,a=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),n+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",i=0;for(;i<t;)r+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return r}(i)}function y(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function C(e,t,r,i,n,o){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<o)throw RangeError('"value" argument is out of bounds');if(r+i>e.length)throw RangeError("Index out of range")}function x(e,t,r,i,n){O(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function k(e,t,r,i,n){O(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function E(e,t,r,i,n,o){if(r+i>e.length||r<0)throw RangeError("Index out of range")}function _(e,t,r,i,o){return t=+t,r>>>=0,o||E(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,i,23,4),r+4}function A(e,t,r,i,o){return t=+t,r>>>=0,o||E(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,i,52,8),r+8}t.Buffer=s,t.SlowBuffer=function(e){return+e!=e&&(e=0),s.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(L(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),L(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,i=t.length;for(let n=0,o=Math.min(r,i);n<o;++n)if(e[n]!==t[n]){r=e[n],i=t[n];break}return r<i?-1:i<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let i=s.allocUnsafe(t),n=0;for(r=0;r<e.length;++r){let t=e[r];if(L(t,Uint8Array))n+t.length>i.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(i,n)):Uint8Array.prototype.set.call(i,t,n);else if(s.isBuffer(t))t.copy(i,n);else throw TypeError('"list" argument must be an Array of Buffers');n+=t.length}return i},s.byteLength=f,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?v(this,0,e):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(s.prototype[o]=s.prototype.inspect),s.prototype.compare=function(e,t,r,i,n){if(L(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),t<0||r>e.length||i<0||n>this.length)throw RangeError("out of range index");if(i>=n&&t>=r)return 0;if(i>=n)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,i>>>=0,n>>>=0,this===e)return 0;let o=n-i,a=r-t,l=Math.min(o,a),c=this.slice(i,n),u=e.slice(t,r);for(let e=0;e<l;++e)if(c[e]!==u[e]){o=c[e],a=u[e];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return m(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return m(this,e,t,r,!1)},s.prototype.write=function(e,t,r,i){var n,o,a,s,l,c,u,d;if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let p=!1;for(;;)switch(i){case"hex":return function(e,t,r,i){let n;r=Number(r)||0;let o=e.length-r;i?(i=Number(i))>o&&(i=o):i=o;let a=t.length;for(i>a/2&&(i=a/2),n=0;n<i;++n){let i=parseInt(t.substr(2*n,2),16);if(i!=i)break;e[r+n]=i}return n}(this,e,t,r);case"utf8":case"utf-8":return n=t,o=r,M(N(e,this.length-n),this,n,o);case"ascii":case"latin1":case"binary":return a=t,s=r,M(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":return l=t,c=r,M(j(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,M(function(e,t){let r,i;let n=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)i=(r=e.charCodeAt(o))>>8,n.push(r%256),n.push(i);return n}(e,this.length-u),this,u,d);default:if(p)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),p=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,s.prototype),i},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return i},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let i=this[e+--t],n=1;for(;t>0&&(n*=256);)i+=this[e+--t]*n;return i},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||y(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||y(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||y(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||y(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||y(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=D(function(e){T(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let i=t+256*this[++e]+65536*this[++e]+16777216*this[++e],n=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(i)+(BigInt(n)<<BigInt(32))}),s.prototype.readBigUInt64BE=D(function(e){T(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let i=16777216*t+65536*this[++e]+256*this[++e]+this[++e],n=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(i)<<BigInt(32))+BigInt(n)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*t)),i},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||y(e,t,this.length);let i=t,n=1,o=this[e+--i];for(;i>0&&(n*=256);)o+=this[e+--i]*n;return o>=(n*=128)&&(o-=Math.pow(2,8*t)),o},s.prototype.readInt8=function(e,t){return(e>>>=0,t||y(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||y(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||y(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||y(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||y(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=D(function(e){T(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&P(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=D(function(e){T(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&P(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||y(e,4,this.length),n.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||y(e,4,this.length),n.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||y(e,8,this.length),n.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||y(e,8,this.length),n.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;C(this,e,t,r,i,0)}let n=1,o=0;for(this[t]=255&e;++o<r&&(n*=256);)this[t+o]=e/n&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;C(this,e,t,r,i,0)}let n=r-1,o=1;for(this[t+n]=255&e;--n>=0&&(o*=256);)this[t+n]=e/o&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=D(function(e,t=0){return x(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=D(function(e,t=0){return k(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);C(this,e,t,r,i-1,-i)}let n=0,o=1,a=0;for(this[t]=255&e;++n<r&&(o*=256);)e<0&&0===a&&0!==this[t+n-1]&&(a=1),this[t+n]=(e/o>>0)-a&255;return t+r},s.prototype.writeIntBE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);C(this,e,t,r,i-1,-i)}let n=r-1,o=1,a=0;for(this[t+n]=255&e;--n>=0&&(o*=256);)e<0&&0===a&&0!==this[t+n+1]&&(a=1),this[t+n]=(e/o>>0)-a&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=D(function(e,t=0){return x(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=D(function(e,t=0){return k(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return _(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return _(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return A(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return A(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,i){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);let n=i-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,i):Uint8Array.prototype.set.call(e,this.subarray(r,i),t),n},s.prototype.fill=function(e,t,r,i){let n;if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!s.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===e.length){let t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{let o=s.isBuffer(e)?e:s.from(e,i),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=o[n%a]}return this};let S={};function R(e,t,r){S[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function $(e){let t="",r=e.length,i="-"===e[0]?1:0;for(;r>=i+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function O(e,t,r,i,n,o){if(e>r||e<t){let i;let n="bigint"==typeof t?"n":"";throw i=o>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${(o+1)*8}${n}`:`>= -(2${n} ** ${(o+1)*8-1}${n}) and < 2 ** ${(o+1)*8-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new S.ERR_OUT_OF_RANGE("value",i,e)}T(n,"offset"),(void 0===i[n]||void 0===i[n+o])&&P(n,i.length-(o+1))}function T(e,t){if("number"!=typeof e)throw new S.ERR_INVALID_ARG_TYPE(t,"number",e)}function P(e,t,r){if(Math.floor(e)!==e)throw T(e,r),new S.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new S.ERR_BUFFER_OUT_OF_BOUNDS;throw new S.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}R("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),R("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),R("ERR_OUT_OF_RANGE",function(e,t,r){let i=`The value of "${e}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?n=$(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=$(n)),n+="n"),i+=` It must be ${t}. Received ${n}`},RangeError);let I=/[^+/0-9A-Za-z-_]/g;function N(e,t){let r;t=t||1/0;let i=e.length,n=null,o=[];for(let a=0;a<i;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!n){if(r>56319||a+1===i){(t-=3)>-1&&o.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&(t-=3)>-1&&o.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function j(e){return i.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(I,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function M(e,t,r,i){let n;for(n=0;n<i&&!(n+r>=t.length)&&!(n>=e.length);++n)t[n+r]=e[n];return n}function L(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let B=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let i=16*r;for(let n=0;n<16;++n)t[i+n]=e[r]+e[n]}return t}();function D(e){return"undefined"==typeof BigInt?U:e}function U(){throw Error("BigInt not supported")}},27484:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",i="hour",n="week",o="month",a="quarter",s="year",l="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},p="en",f={};f[p]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var g="$isDayjsObject",w=function(e){return e instanceof y||!(!e||!e[g])},m=function e(t,r,i){var n;if(!t)return p;if("string"==typeof t){var o=t.toLowerCase();f[o]&&(n=o),r&&(f[o]=r,n=o);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var s=t.name;f[s]=t,n=s}return!i&&n&&(p=n),n||!i&&p},b=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new y(r)},v={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(i,o),a=r-n<0,s=t.clone().add(i+(a?-1:1),o);return+(-(i+(r-n)/(a?n-s:s-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:o,y:s,w:n,d:"day",D:l,h:i,m:r,s:t,ms:e,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};v.l=m,v.i=w,v.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function h(e){this.$L=m(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var p=h.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var n=i[2]-1||0,o=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return v},p.isValid=function(){return this.$d.toString()!==c},p.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},p.isAfter=function(e,t){return b(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<b(e)},p.$g=function(e,t,r){return v.u(e)?this[t]:this.set(r,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,a){var c=this,u=!!v.u(a)||a,d=v.p(e),h=function(e,t){var r=v.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?r:r.endOf("day")},p=function(e,t){return v.w(c.toDate()[e].apply(c.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},f=this.$W,g=this.$M,w=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case s:return u?h(1,0):h(31,11);case o:return u?h(1,g):h(0,g+1);case n:var b=this.$locale().weekStart||0,y=(f<b?f+7:f)-b;return h(u?w-y:w+(6-y),g);case"day":case l:return p(m+"Hours",0);case i:return p(m+"Minutes",1);case r:return p(m+"Seconds",2);case t:return p(m+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(n,a){var c,u=v.p(n),d="set"+(this.$u?"UTC":""),h=((c={}).day=d+"Date",c[l]=d+"Date",c[o]=d+"Month",c[s]=d+"FullYear",c[i]=d+"Hours",c[r]=d+"Minutes",c[t]=d+"Seconds",c[e]=d+"Milliseconds",c)[u],p="day"===u?this.$D+(a-this.$W):a;if(u===o||u===s){var f=this.clone().set(l,1);f.$d[h](p),f.init(),this.$d=f.set(l,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[v.p(e)]()},p.add=function(e,a){var l,c=this;e=Number(e);var u=v.p(a),d=function(t){var r=b(c);return v.w(r.date(r.date()+Math.round(t*e)),c)};if(u===o)return this.set(o,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return d(1);if(u===n)return d(7);var h=((l={})[r]=6e4,l[i]=36e5,l[t]=1e3,l)[u]||1,p=this.$d.getTime()+e*h;return v.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var i=e||"YYYY-MM-DDTHH:mm:ssZ",n=v.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,u=r.months,h=r.meridiem,p=function(e,r,n,o){return e&&(e[r]||e(t,i))||n[r].slice(0,o)},f=function(e){return v.s(o%12||12,e,"0")},g=h||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(d,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return v.s(t.$y,4,"0");case"M":return s+1;case"MM":return v.s(s+1,2,"0");case"MMM":return p(r.monthsShort,s,u,3);case"MMMM":return p(u,s);case"D":return t.$D;case"DD":return v.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(r.weekdaysMin,t.$W,l,2);case"ddd":return p(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return v.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return v.s(a,2,"0");case"s":return String(t.$s);case"ss":return v.s(t.$s,2,"0");case"SSS":return v.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,l,c){var u,d=this,h=v.p(l),p=b(e),f=(p.utcOffset()-this.utcOffset())*6e4,g=this-p,w=function(){return v.m(d,p)};switch(h){case s:u=w()/12;break;case o:u=w();break;case a:u=w()/3;break;case n:u=(g-f)/6048e5;break;case"day":u=(g-f)/864e5;break;case i:u=g/36e5;break;case r:u=g/6e4;break;case t:u=g/1e3;break;default:u=g}return c?u:v.a(u)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return f[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=m(e,t,!0);return i&&(r.$L=i),r},p.clone=function(){return v.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},h}(),C=y.prototype;return b.prototype=C,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W","day"],["$M",o],["$y",s],["$D",l]].forEach(function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),b.extend=function(e,t){return e.$i||(e(t,y,b),e.$i=!0),b},b.locale=m,b.isDayjs=w,b.unix=function(e){return b(1e3*e)},b.en=f[p],b.Ls=f,b.p={},b},e.exports=t()},84110:function(e){var t;t=function(){return function(e,t,r){e=e||{};var i=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,n){return i.fromToBase(e,t,r,n)}r.en.relativeTime=n,i.fromToBase=function(t,i,o,a,s){for(var l,c,u,d=o.$locale().relativeTime||n,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,f=0;f<p;f+=1){var g=h[f];g.d&&(l=a?r(t).diff(o,g.d,!0):o.diff(t,g.d,!0));var w=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,w<=g.r||!g.r){w<=1&&f>0&&(g=h[f-1]);var m=d[g.l];s&&(w=s(""+w)),c="string"==typeof m?m.replace("%d",w):m(w,i,g.l,u);break}}if(i)return c;var b=u?d.future:d.past;return"function"==typeof b?b(c):b.replace("%s",c)},i.to=function(e,t){return o(e,t,this,!0)},i.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}},e.exports=t()},70660:function(e){var t;t=function(){return function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}},e.exports=t()},65987:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,i){var n,o,a,s,l,c,u,d={},h={};h[r]=0;var p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(a in o=(n=p.pop()).value,s=n.cost,l=e[o]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=h[a],(void 0===h[a]||u>c)&&(h[a]=c,p.push(a,c),d[a]=o));if(void 0!==i&&void 0===h[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var n=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(n,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,n={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=e.sorter||i.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},62378:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,i=0;i<r;i++){var n=e.charCodeAt(i);if(n>=55296&&n<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(n=(n-55296)*1024+o-56320+65536,i+=1)}if(n<128){t.push(n);continue}if(n<2048){t.push(n>>6|192),t.push(63&n|128);continue}if(n<55296||n>=57344&&n<65536){t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128);continue}if(n>=65536&&n<=1114111){t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},26729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function i(){}function n(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,i,o,a){if("function"!=typeof i)throw TypeError("The listener must be a function");var s=new n(i,o||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,i,n=[];if(0===this._eventsCount)return n;for(i in e=this._events)t.call(e,i)&&n.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=r?r+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,o=i.length,a=Array(o);n<o;n++)a[n]=i[n].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,n,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,n),!0;case 5:return u.fn.call(u.context,t,i,n,o),!0;case 6:return u.fn.call(u.context,t,i,n,o,a),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,p=u.length;for(c=0;c<p;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,i);break;case 4:u[c].fn.call(u[c].context,t,i,n);break;default:if(!l)for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,i,n){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||n&&!s.once||i&&s.context!==i||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||n&&!s[l].once||i&&s[l].context!==i)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},80645:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,i,n){var o,a,s=8*n-i-1,l=(1<<s)-1,c=l>>1,u=-7,d=r?n-1:0,h=r?-1:1,p=e[t+d];for(d+=h,o=p&(1<<-u)-1,p>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=i;u>0;a=256*a+e[t+d],d+=h,u-=8);if(0===o)o=1-c;else{if(o===l)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,i),o-=c}return(p?-1:1)*a*Math.pow(2,o-i)},t.write=function(e,t,r,i,n,o){var a,s,l,c=8*o-n-1,u=(1<<c)-1,d=u>>1,h=23===n?5960464477539062e-23:0,p=i?0:o-1,f=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+d>=1?t+=h/l:t+=h*Math.pow(2,1-d),t*l>=2&&(a++,l/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*l-1)*Math.pow(2,n),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,n),a=0));n>=8;e[r+p]=255&s,p+=f,s/=256,n-=8);for(a=a<<n|s,c+=n;c>0;e[r+p]=255&a,p+=f,a/=256,c-=8);e[r+p-f]|=128*g}},83454:function(e,t,r){"use strict";var i,n;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(77663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(71392)}])},71392:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var i=r(85893);r(75322);var n=r(67294),o=r(11163),a=r(27088),s=r(69782),l=r(56147),c=r(99931),u=r(24139),d=r(56888),h=r(27037),p=r(7506),f=class extends p.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let i=t.queryKey,n=t.queryHash??(0,u.Rm)(i,t),o=this.get(n);return o||(o=new d.A({cache:this,queryKey:i,queryHash:n,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){h.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,u._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,u._x)(e,t)):t}notify(e){h.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){h.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){h.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},g=r(59289),w=class extends p.l{constructor(e={}){super(),this.config=e,this.#t=[],this.#r=0}#t;#r;#i;build(e,t,r){let i=new g.m({mutationCache:this,mutationId:++this.#r,options:e.defaultMutationOptions(t),state:r});return this.add(i),i}add(e){this.#t.push(e),this.notify({type:"added",mutation:e})}remove(e){this.#t=this.#t.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){h.V.batch(()=>{this.#t.forEach(e=>{this.remove(e)})})}getAll(){return this.#t}find(e){let t={exact:!0,...e};return this.#t.find(e=>(0,u.X7)(t,e))}findAll(e={}){return this.#t.filter(t=>(0,u.X7)(e,t))}notify(e){h.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){return this.#i=(this.#i??Promise.resolve()).then(()=>{let e=this.#t.filter(e=>e.state.isPaused);return h.V.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(u.ZT)),Promise.resolve()))}).then(()=>{this.#i=void 0}),this.#i}},m=r(66474),b=r(14304);function v(e,{pages:t,pageParams:r}){let i=t.length-1;return e.getNextPageParam(t[i],t,r[i],r)}var y=class{#n;#o;#a;#s;#l;#c;#u;#d;constructor(e={}){this.#n=e.queryCache||new f,this.#o=e.mutationCache||new w,this.#a=e.defaultOptions||{},this.#s=new Map,this.#l=new Map,this.#c=0}mount(){this.#c++,1===this.#c&&(this.#u=m.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#n.onFocus())}),this.#d=b.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#n.onOnline())}))}unmount(){this.#c--,0===this.#c&&(this.#u?.(),this.#u=void 0,this.#d?.(),this.#d=void 0)}isFetching(e){return this.#n.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#o.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#n.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let r=this.defaultQueryOptions(e),i=this.#n.build(this,r);return e.revalidateIfStale&&i.isStaleByTime(r.staleTime)&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.#n.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let i=this.defaultQueryOptions({queryKey:e}),n=this.#n.get(i.queryHash),o=n?.state.data,a=(0,u.SE)(t,o);if(void 0!==a)return this.#n.build(this,i).setData(a,{...r,manual:!0})}setQueriesData(e,t,r){return h.V.batch(()=>this.#n.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#n.get(t.queryHash)?.state}removeQueries(e){let t=this.#n;h.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#n,i={type:"active",...e};return h.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(i,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t};return Promise.all(h.V.batch(()=>this.#n.findAll(e).map(e=>e.cancel(r)))).then(u.ZT).catch(u.ZT)}invalidateQueries(e={},t={}){return h.V.batch(()=>{if(this.#n.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(h.V.batch(()=>this.#n.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(u.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(u.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#n.build(this,t);return r.isStaleByTime(t.staleTime)?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(u.ZT).catch(u.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let i=async()=>{let r;let i=e.options,n=e.fetchOptions?.meta?.fetchMore?.direction,o=e.state.data?.pages||[],a=e.state.data?.pageParams||[],s=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)})},c=e.options.queryFn&&e.options.queryFn!==u.CN?e.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`)),d=async(t,r,i)=>{if(s)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let n={queryKey:e.queryKey,pageParam:r,direction:i?"backward":"forward",meta:e.options.meta};l(n);let o=await c(n),{maxPages:a}=e.options,d=i?u.Ht:u.VX;return{pages:d(t.pages,o,a),pageParams:d(t.pageParams,r,a)}};if(n&&o.length){let e="backward"===n,t={pages:o,pageParams:a},s=(e?function(e,{pages:t,pageParams:r}){return e.getPreviousPageParam?.(t[0],t,r[0],r)}:v)(i,t);r=await d(t,s,e)}else{r=await d({pages:[],pageParams:[]},a[0]??i.initialPageParam);let e=t??o.length;for(let t=1;t<e;t++){let e=v(i,r);r=await d(r,e)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(i,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=i}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(u.ZT).catch(u.ZT)}resumePausedMutations(){return b.N.isOnline()?this.#o.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#n}getMutationCache(){return this.#o}getDefaultOptions(){return this.#a}setDefaultOptions(e){this.#a=e}setQueryDefaults(e,t){this.#s.set((0,u.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#s.values()],r={};return t.forEach(t=>{(0,u.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#l.set((0,u.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#l.values()],r={};return t.forEach(t=>{(0,u.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#a.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,u.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===u.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#a.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#n.clear(),this.#o.clear()}},C=r(30202);function x(e){let{children:t}=e,r=new y;if(!l.S)throw Error("Project ID is not defined");return(0,s.OY)({wagmiConfig:l.v,projectId:l.S,enableAnalytics:!0,enableOnramp:!0,enableWalletFeatures:!0,featuredWalletIds:[],includeWalletIds:[],excludeWalletIds:[]}),(0,i.jsx)(c.F,{config:l.v,children:(0,i.jsx)(C.aH,{client:r,children:t})})}var k=r(50259),E=r(6484),_=r(17740),A=r(5121),S=r(92321);function R(e){let{children:t}=e,r=(0,_.R)(a.S),i=(0,S.m)();return(0,n.useEffect)(()=>{i.address&&A.Z.post("/api/utm",{wallet:i.address,utm:r.utm}).catch(e=>console.log(e))},[i.address]),t}function $(e){let{Component:t,pageProps:r}=e,{query:s}=(0,o.useRouter)();return(0,n.useEffect)(()=>(0,E.yN)(),[]),(0,n.useEffect)(()=>{s&&(a.S.utm=JSON.stringify(s))},[s]),(0,i.jsx)(x,{children:(0,i.jsx)(R,{children:(0,i.jsx)(k.pm,{reCaptchaKey:"6LdvB50pAAAAAD3ojSS_ePYT7WSXbXbc_SOxycmR",scriptProps:{async:!1,defer:!1,appendTo:"head",nonce:void 0},children:(0,i.jsx)(t,{...r})})})})}},27088:function(e,t,r){"use strict";r.d(t,{S:function(){return o}});var i=r(86949);let n=(0,i.sj)({chainId:56,swapSendCoin:null,swapValue:"",fiatSendValue:0,rate:0,choPrice:0,receiveValue:"0",fiatReceiveValue:0,fiatPercentValue:0,gasFee:null,coinSelectModal:!1,coinsList:[],balances:{},swapTxHash:void 0,swapSuccess:!1,swapApproveValue:"0",swapError:null}),o=(0,i.sj)({utm:void 0,modalVipForm:!1,formSubscribeTotal:0,subscribeEmail:"",stageData:{endCounter:!0,nowDate:void 0,remainingTime:void 0,stage:void 0,timerFontColor:"#fff"},swap:n})},6484:function(e,t,r){"use strict";r.d(t,{Hn:function(){return a},Sv:function(){return s},th:function(){return l},yN:function(){return o}});var i=r(5121),n=r(27088);function o(){i.Z.get("/api/time").then(e=>{n.S.stageData=e.data.data})}function a(e){let t=e.slice(0,4),r=e.slice(-4);return"".concat(t,"...").concat(r)}function s(e){switch(e){case 1:return"/pic/chains/etherium.svg";case 56:return"/pic/chains/binance-smart-chain.svg"}}function l(e,t){!function(e,t){i.Z.post("/api/analytics",{name:e,params:t}).catch(e=>console.error(e))}(e,t)}},56147:function(e,t,r){"use strict";let i;r.d(t,{v:function(){return q},S:function(){return Z}});var n,o=r(17897),a=r(87675),s=r(45775),l=r(39028),c=r(92106);function u(e){let t,i;let n=e.isNewChainsStale??!0,d="eip155";return h=>({id:"walletConnect",name:"WalletConnect",type:u.type,async setup(){let e=await this.getProvider().catch(()=>null);e&&(e.on("connect",this.onConnect.bind(this)),e.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:e,...t}={}){try{let r=await this.getProvider();if(!r)throw new o.M;r.on("display_uri",this.onDisplayUri);let i=e;if(!i){let e=await h.storage?.getItem("state")??{};i=h.chains.some(t=>t.id===e.chainId)?e.chainId:h.chains[0]?.id}if(!i)throw Error("No chains found on connector.");let n=await this.isChainsStale();if(r.session&&n&&await r.disconnect(),!r.session||n){let e=h.chains.filter(e=>e.id!==i).map(e=>e.id);await r.connect({optionalChains:[i,...e],..."pairingTopic"in t?{pairingTopic:t.pairingTopic}:{}}),this.setRequestedChainsIds(h.chains.map(e=>e.id))}let a=(await r.enable()).map(e=>(0,s.K)(e)),l=await this.getChainId();return r.removeListener("display_uri",this.onDisplayUri),r.removeListener("connect",this.onConnect.bind(this)),r.on("accountsChanged",this.onAccountsChanged.bind(this)),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect.bind(this)),r.on("session_delete",this.onSessionDelete.bind(this)),{accounts:a,chainId:l}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new l.ab(e);throw e}},async disconnect(){let e=await this.getProvider();try{await e?.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{e?.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),e?.removeListener("chainChanged",this.onChainChanged),e?.removeListener("disconnect",this.onDisconnect.bind(this)),e?.removeListener("session_delete",this.onSessionDelete.bind(this)),e?.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(e=>(0,s.K)(e))},async getProvider({chainId:n}={}){async function o(){let t=h.chains.map(e=>e.id);if(!t.length)return;let{EthereumProvider:i}=await Promise.all([r.e(688),r.e(883)]).then(r.bind(r,33138));return await i.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(h.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),showQrModal:e.showQrModal??!0})}return t||(i||(i=o()),t=await i,t?.events.setMaxListeners(1/0)),n&&await this.switchChain?.({chainId:n}),t},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;if(await this.isChainsStale()&&t.session)return await t.disconnect().catch(()=>{}),!1;return!0}catch{return!1}},async switchChain({chainId:e}){let t=h.chains.find(t=>t.id===e);if(!t)throw new l.x3(new a.X4);try{let r=await this.getProvider(),i=this.getNamespaceChainsIds(),n=this.getNamespaceMethods();if(!i.includes(e)&&n.includes("wallet_addEthereumChain")){await r.request({method:"wallet_addEthereumChain",params:[{chainId:(0,c.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let i=await this.getRequestedChainsIds();this.setRequestedChainsIds([...i,e])}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,c.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new l.ab(t);throw new l.x3(t)}},onAccountsChanged(e){0===e.length?this.onDisconnect():h.emitter.emit("change",{accounts:e.map(e=>(0,s.K)(e))})},onChainChanged(e){let t=Number(e);h.emitter.emit("change",{chainId:t})},async onConnect(e){let t=Number(e.chainId),r=await this.getAccounts();h.emitter.emit("connect",{accounts:r,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),h.emitter.emit("disconnect");let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.removeListener("session_delete",this.onSessionDelete.bind(this)),t.on("connect",this.onConnect.bind(this))},onDisplayUri(e){h.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds:()=>t?t.session?.namespaces[d]?.chains?.map(e=>parseInt(e.split(":")[1]||""))??[]:[],getNamespaceMethods:()=>t?t.session?.namespaces[d]?.methods??[]:[],async getRequestedChainsIds(){return await h.storage?.getItem(this.requestedChainsStorageKey)??[]},async isChainsStale(){if(this.getNamespaceMethods().includes("wallet_addEthereumChain")||!n)return!1;let e=h.chains.map(e=>e.id),t=this.getNamespaceChainsIds();if(t.length&&!t.some(t=>e.includes(t)))return!1;let r=await this.getRequestedChainsIds();return!e.every(e=>r.includes(e))},async setRequestedChainsIds(e){await h.storage?.setItem(this.requestedChainsStorageKey,e)},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}function d(e){let t,i,n,o,u;return h=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",type:d.type,async connect({chainId:e}={}){try{let t=await this.getProvider(),r=(await t.request({method:"eth_requestAccounts"})).map(e=>(0,s.K)(e));n||(n=this.onAccountsChanged.bind(this),t.on("accountsChanged",n)),o||(o=this.onChainChanged.bind(this),t.on("chainChanged",o)),u||(u=this.onDisconnect.bind(this),t.on("disconnect",u));let i=await this.getChainId();if(e&&i!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===l.ab.code)throw e;return{id:i}});i=t?.id??i}return{accounts:r,chainId:i}}catch(e){if(/(user closed modal|accounts received is empty|user denied account)/i.test(e.message))throw new l.ab(e);throw e}},async disconnect(){let e=await this.getProvider();n&&(e.removeListener("accountsChanged",n),n=void 0),o&&(e.removeListener("chainChanged",o),o=void 0),u&&(e.removeListener("disconnect",u),u=void 0),e.disconnect(),e.close()},async getAccounts(){let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,s.K)(e))},async getChainId(){let e=await this.getProvider();return Number(await e.request({method:"eth_chainId"}))},async getProvider(){if(!i){let{default:n}=await Promise.all([r.e(811),r.e(878)]).then(r.t.bind(r,45811,19));t=new("function"!=typeof n&&"function"==typeof n.default?n.default:n)({reloadOnDisconnect:!1,...e});let o=t.walletExtension?.getChainId(),a=h.chains.find(t=>e.chainId?t.id===e.chainId:t.id===o)||h.chains[0],s=e.chainId||a?.id,l=e.jsonRpcUrl||a?.rpcUrls.default.http[0];i=t.makeWeb3Provider(l,s)}return i},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({chainId:e}){let t=h.chains.find(t=>t.id===e);if(!t)throw new l.x3(new a.X4);let r=await this.getProvider(),i=(0,c.eC)(t.id);try{return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),t}catch(e){if(4902===e.code)try{return await r.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[t.rpcUrls.default?.http[0]??""],blockExplorerUrls:[t.blockExplorers?.default.url]}]}),t}catch(e){throw new l.ab(e)}throw new l.x3(e)}},onAccountsChanged(e){0===e.length?this.onDisconnect():h.emitter.emit("change",{accounts:e.map(e=>(0,s.K)(e))})},onChainChanged(e){let t=Number(e);h.emitter.emit("change",{chainId:t})},async onDisconnect(e){h.emitter.emit("disconnect");let t=await this.getProvider();n&&(t.removeListener("accountsChanged",n),n=void 0),o&&(t.removeListener("chainChanged",o),o=void 0),u&&(t.removeListener("disconnect",u),u=void 0)}})}u.type="walletConnect",d.type="coinbaseWallet";var h=r(16189);let p=e=>(t,r,i)=>{let n=i.subscribe;return i.subscribe=(e,t,r)=>{let o=e;if(t){let n=(null==r?void 0:r.equalityFn)||Object.is,a=e(i.getState());o=r=>{let i=e(r);if(!n(a,i)){let e=a;t(a=i,e)}},(null==r?void 0:r.fireImmediately)&&t(a,a)}return n(o)},e(t,r,i)},f=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>f(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>f(t)(e)}}},g=(e,t)=>(r,i,n)=>{let o,a,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set;try{o=s.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},i,n);let d=f(s.serialize),h=()=>{let e;let t=d({state:s.partialize({...i()}),version:s.version}).then(e=>o.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return t},p=n.setState;n.setState=(e,t)=>{p(e,t),h()};let g=e((...e)=>{r(...e),h()},i,n),w=()=>{var e;if(!o)return;l=!1,c.forEach(e=>e(i()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,i()))||void 0;return f(o.getItem.bind(o))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=i())?t:g),!0),h()}).then(()=>{null==t||t(a,void 0),l=!0,u.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return n.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>w(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},w(),a||g},w=(e,t)=>(r,i,n)=>{let o,a={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var t;let i=e=>null===e?null:JSON.parse(e,void 0),n=null!=(t=r.getItem(e))?t:null;return n instanceof Promise?n.then(i):i(n)},setItem:(e,t)=>r.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,u=a.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},i,n);let d=()=>{let e=a.partialize({...i()});return u.setItem(a.name,{state:e,version:a.version})},h=n.setState;n.setState=(e,t)=>{h(e,t),d()};let p=e((...e)=>{r(...e),d()},i,n),g=()=>{var e,t;if(!u)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=i())?t:p)});let n=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=i())?e:p))||void 0;return f(u.getItem.bind(u))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(o=a.merge(e,null!=(t=i())?t:p),!0),d()}).then(()=>{null==n||n(o,void 0),o=i(),s=!0,c.forEach(e=>e(o))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{a={...a,...e},e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>g(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},a.skipHydration||g(),o||p},m=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),g(e,t)):w(e,t),b=e=>{let t;let r=new Set,i=(e,i)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=i?i:"object"!=typeof n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,o={setState:i,getState:n,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(i,n,o),o},v=e=>e?b(e):b;var y=r(97933);function C(e,{errorInstance:t=Error("timed out"),timeout:r,signal:i}){return new Promise((n,o)=>{(async()=>{let a;try{let s=new AbortController;r>0&&(a=setTimeout(()=>{i?s.abort():o(t)},r)),n(await e({signal:s?.signal||null}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()})}let x={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:E(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>E(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:E(e,"isPhantom")}};function k(e={}){let t,r,i,n;let{shimDisconnect:u=!0,unstable_shimAsyncInject:d}=e;function h(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...x[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return p=>({get icon(){return h().icon},get id(){return h().id},get name(){return h().name},type:k.type,async setup(){let r=await this.getProvider();r&&e.target&&(i||(i=this.onConnect.bind(this),r.on("connect",i)),t||(t=this.onAccountsChanged.bind(this),r.on("accountsChanged",t)))},async connect({chainId:a,isReconnecting:c}={}){let d=await this.getProvider();if(!d)throw new o.M;let h=[];if(c)h=await this.getAccounts().catch(()=>[]);else if(u)try{let e=await d.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});h=e[0]?.caveats?.[0]?.value?.map(e=>s.K(e))}catch(e){if(e.code===l.ab.code)throw new l.ab(e);if(e.code===l.pT.code)throw e}try{h?.length||c||(h=(await d.request({method:"eth_requestAccounts"})).map(e=>(0,s.K)(e))),i&&(d.removeListener("connect",i),i=void 0),t||(t=this.onAccountsChanged.bind(this),d.on("accountsChanged",t)),r||(r=this.onChainChanged.bind(this),d.on("chainChanged",r)),n||(n=this.onDisconnect.bind(this),d.on("disconnect",n));let o=await this.getChainId();if(a&&o!==a){let e=await this.switchChain({chainId:a}).catch(e=>{if(e.code===l.ab.code)throw e;return{id:o}});o=e?.id??o}return u&&(await p.storage?.removeItem(`${this.id}.disconnected`),e.target||await p.storage?.setItem("injected.connected",!0)),{accounts:h,chainId:o}}catch(e){if(e.code===l.ab.code)throw new l.ab(e);if(e.code===l.pT.code)throw new l.pT(e);throw e}},async disconnect(){let t=await this.getProvider();if(!t)throw new o.M;r&&(t.removeListener("chainChanged",r),r=void 0),n&&(t.removeListener("disconnect",n),n=void 0),i||(i=this.onConnect.bind(this),t.on("connect",i)),u&&(await p.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await p.storage?.removeItem("injected.connected"))},async getAccounts(){let e=await this.getProvider();if(!e)throw new o.M;return(await e.request({method:"eth_accounts"})).map(e=>(0,s.K)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new o.M;return Number(await e.request({method:"eth_chainId"}))},async getProvider(){let e;if("undefined"==typeof window)return;let t=h();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?E(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{if(u&&await p.storage?.getItem(`${this.id}.disconnected`)||!e.target&&!await p.storage?.getItem("injected.connected"))return!1;if(!await this.getProvider()){if(void 0!==d&&!1!==d){let e=async()=>("undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e),!!await this.getProvider()),t="number"==typeof d?d:1e3;if(await Promise.race([..."undefined"!=typeof window?[new Promise(t=>window.addEventListener("ethereum#initialized",()=>t(e()),{once:!0}))]:[],new Promise(r=>setTimeout(()=>r(e()),t))]))return!0}throw new o.M}return!!(await (0,y.J)(()=>C(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({chainId:e}){let t=await this.getProvider();if(!t)throw new o.M;let r=p.chains.find(t=>t.id===e);if(!r)throw new l.x3(new a.X4);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,c.eC)(e)}]}),new Promise(r=>{let i=n=>{console.log("[injected] switchChain.listener",{data:n,chainId:e}),Number(n)===e&&(t.removeListener("chainChanged",i),r())};t.on("chainChanged",i)})]),r}catch(i){if(4902===i.code||i?.data?.originalError?.code===4902)try{let i;let{default:n,...o}=r.blockExplorers??{};if(n&&(i=[n.url,...Object.values(o).map(e=>e.url)]),await t.request({method:"wallet_addEthereumChain",params:[{chainId:(0,c.eC)(e),chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:[r.rpcUrls.default?.http[0]??""],blockExplorerUrls:i}]}),await this.getChainId()!==e)throw new l.ab(Error("User rejected switch after adding network."));return r}catch(e){throw new l.ab(e)}if(i.code===l.ab.code)throw new l.ab(i);throw new l.x3(i)}},async onAccountsChanged(e){if(console.log("[injected] onAccountsChanged",e),0===e.length)this.onDisconnect();else if(p.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),u&&await p.storage?.removeItem(`${this.id}.disconnected`)}else p.emitter.emit("change",{accounts:e.map(e=>(0,s.K)(e))})},onChainChanged(e){console.log("[injected] onChainChanged",e);let t=Number(e);p.emitter.emit("change",{chainId:t})},async onConnect(e){let o=await this.getAccounts();if(0===o.length)return;let a=Number(e.chainId);p.emitter.emit("connect",{accounts:o,chainId:a});let s=await this.getProvider();s&&(i&&(s.removeListener("connect",i),i=void 0),t||(t=this.onAccountsChanged.bind(this),s.on("accountsChanged",t)),r||(r=this.onChainChanged.bind(this),s.on("chainChanged",r)),n||(n=this.onDisconnect.bind(this),s.on("disconnect",n)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(p.emitter.emit("disconnect"),t&&(r&&(t.removeListener("chainChanged",r),r=void 0),n&&(t.removeListener("disconnect",n),n=void 0),i||(i=this.onConnect.bind(this),t.on("connect",i))))}})}function E(e,t){function r(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let i=e.ethereum;return i?.providers?i.providers.find(e=>r(e)):i&&r(i)?i:void 0}k.type="injected";var _=r(26729),A=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class S{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),n.set(this,new _)}on(e,t){A(this,n,"f").on(e,t)}once(e,t){A(this,n,"f").once(e,t)}off(e,t){A(this,n,"f").off(e,t)}emit(e,...t){let r=t[0];A(this,n,"f").emit(e,{uid:this.uid,...r})}listenerCount(e){return A(this,n,"f").listenerCount(e)}}function R(e,t){return JSON.parse(e,(e,r)=>{let i=r;return i?.__type==="bigint"&&(i=BigInt(i.value)),i?.__type==="Map"&&(i=new Map(i.value)),t?.(e,i)??i})}function $(e,t){return e.slice(0,t).join(".")||"."}function O(e,t){let{length:r}=e;for(let i=0;i<r;++i)if(e[i]===t)return i+1;return 0}function T(e,t,r,i){return JSON.stringify(e,function(e,t){let r="function"==typeof e,i="function"==typeof t,n=[],o=[];return function(a,s){if("object"==typeof s){if(n.length){let e=O(n,this);0===e?n[n.length]=this:(n.splice(e),o.splice(e)),o[o.length]=a;let r=O(n,s);if(0!==r)return i?t.call(this,a,s,$(o,r)):`[ref=${$(o,r)}]`}else n[0]=s,o[0]=a}return r?e.call(this,a,s):s}}((e,r)=>{let i=r;return"bigint"==typeof i&&(i={__type:"bigint",value:r.toString()}),i instanceof Map&&(i={__type:"Map",value:Array.from(r.entries())}),t?.(e,i)??i},i),r??void 0)}n=new WeakMap;let P={getItem:()=>null,setItem:()=>{},removeItem:()=>{}},I=256;var N=r(79983),j=r(78863),M=r(62027);class L extends M.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var B=r(32357),D=r(96070);let U={current:0,take(){return this.current++},reset(){this.current=0}};var z=r(91628);function F(e,t={}){let{batch:r,fetchOptions:i,key:n="http",name:o="HTTP JSON-RPC",onFetchRequest:a,onFetchResponse:s,retryDelay:l}=t;return({chain:c,retryCount:u,timeout:d})=>{let{batchSize:h=1e3,wait:p=0}="object"==typeof r?r:{},f=t.retryCount??u,g=d??t.timeout??1e4,w=e||c?.rpcUrls.default.http[0];if(!w)throw new L;let m=function(e,t={}){return{async request(r){let{body:i,fetchOptions:n={},onRequest:o=t.onRequest,onResponse:a=t.onResponse,timeout:s=t.timeout??1e4}=r,{headers:l,method:c,signal:u}={...t.fetchOptions,...n};try{let t;let r=await C(async({signal:t})=>{let r=new Request(e,{...n,body:Array.isArray(i)?(0,D.P)(i.map(e=>({jsonrpc:"2.0",id:e.id??U.take(),...e}))):(0,D.P)({jsonrpc:"2.0",id:i.id??U.take(),...i}),headers:{...l,"Content-Type":"application/json"},method:c||"POST",signal:u||(s>0?t:null)});return o&&await o(r),await fetch(r)},{errorInstance:new j.W5({body:i,url:e}),timeout:s,signal:!0});if(a&&await a(r),t=r.headers.get("Content-Type")?.startsWith("application/json")?await r.json():await r.text(),!r.ok)throw new j.Gg({body:i,details:(0,D.P)(t.error)||r.statusText,headers:r.headers,status:r.status,url:e});return t}catch(t){if(t instanceof j.Gg||t instanceof j.W5)throw t;throw new j.Gg({body:i,details:t.message,url:e})}}}}(w,{fetchOptions:i,onRequest:a,onResponse:s,timeout:g});return(0,z.q)({key:n,name:o,async request({method:t,params:i}){let n={method:t,params:i},{schedule:o}=(0,B.S)({id:`${e}`,wait:p,shouldSplitBatch:e=>e.length>h,fn:e=>m.request({body:e}),sort:(e,t)=>e.id-t.id}),a=async e=>r?o(e):[await m.request({body:e})],[{error:s,result:l}]=await a(n);if(s)throw new j.bs({body:n,error:s,url:w});return l},retryCount:f,retryDelay:l,timeout:g,type:"http"},{fetchOptions:i,url:w})}}var W=r(66403);let H=(0,r(86164).a)({id:56,name:"BNB Smart Chain",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{default:{name:"BscScan",url:"https://bscscan.com",apiUrl:"https://api.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}}),Z="d1ecb37128629dfca4c6cef527b39952";if(!Z)throw Error("Project ID is not defined");let V={name:"Choise.ai",description:"The countdown has begun. In less then 10 days, the world will witness a revolution in CHO tokenomics, that will change the rules of the game. Prepare to join us on this historic journey.",url:"https://choise.ai",icons:["https://choise.ai/pic/wallet-avatar.png"]},q=function(e){let t;let{multiInjectedProviderDiscovery:r=!0,storage:n=function(e){let{deserialize:t=R,key:r="wagmi",serialize:i=T,storage:n=P}=e;function o(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...n,key:r,async getItem(e,i){let a=n.getItem(`${r}.${e}`),s=await o(a);return s?t(s)??null:i??null},async setItem(e,t){let a=`${r}.${e}`;null===t?await o(n.removeItem(a)):await o(n.setItem(a,i(t)))},async removeItem(e){await o(n.removeItem(`${r}.${e}`))}}}({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:P}),syncConnectedChain:o=!0,ssr:s,...l}=e,c="undefined"!=typeof window&&r?function(){let e=new Set,t=[],r=()=>(function(e){let t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)})(r=>{t.some(({info:e})=>e.uuid===r.info.uuid)||(t=[...t,r],e.forEach(e=>e(t,{added:[r]})))}),i=r();return{_listeners:()=>e,clear(){e.forEach(e=>e([],{removed:[...t]})),t=[]},destroy(){this.clear(),e.clear(),i()},findProvider:({rdns:e})=>t.find(t=>t.info.rdns===e),getProviders:()=>t,reset(){this.clear(),i(),i=r()},subscribe:(r,{emitImmediately:i}={})=>(e.add(r),i&&r(t,{added:t}),()=>e.delete(r))}}():void 0,u=v(()=>l.chains),d=v(()=>[...l.connectors??[],...s?[]:c?.getProviders().map(g)??[]].map(f));function f(e){let t=new S(function(e=11){if(!i||I+e>512){i="",I=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(I,I+++e)}()),r={...e({emitter:t,chains:u.getState(),storage:n}),emitter:t,uid:t.uid};return t.on("connect",E),r.setup?.(),r}function g(e){let{info:t}=e,r=e.provider;return k({target:{...t,id:t.rdns,provider:r}})}let w=new Map;function b(){return{chainId:u.getState()[0].id,connections:new Map,current:void 0,status:"disconnected"}}let y="0.0.0-canary-";t=N.i.startsWith(y)?parseInt(N.i.replace(y,"")):parseInt(N.i.split(".")[0]??"0");let C=v(p(n?m(b,{migrate(e,r){if(r===t)return e;let i=b(),n=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId?e.chainId:i.chainId;return{...i,chainId:n}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:r,name:i,type:n,uid:o}=t.connector;return[e,{...t,connector:{id:r,name:i,type:n,uid:o}}]})},chainId:e.chainId,current:e.current}),skipHydration:s,storage:n,version:t}):b));function x(e){C.setState(t=>{let r=t.connections.get(e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??r.accounts,chainId:e.chainId??r.chainId,connector:r.connector})}:t})}function E(e){"connecting"!==C.getState().status&&"reconnecting"!==C.getState().status&&C.setState(t=>{let r=d.getState().find(t=>t.uid===e.uid);return r?(r.emitter.listenerCount("connect")&&r.emitter.off("connect",x),r.emitter.listenerCount("change")||r.emitter.on("change",x),r.emitter.listenerCount("disconnect")||r.emitter.on("disconnect",_),{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:r}),current:e.uid,status:"connected"}):t})}function _(e){C.setState(t=>{let r=t.connections.get(e.uid);if(r){let e=r.connector;e.emitter.listenerCount("change")&&r.connector.emitter.off("change",x),e.emitter.listenerCount("disconnect")&&r.connector.emitter.off("disconnect",_),e.emitter.listenerCount("connect")||r.connector.emitter.on("connect",E)}if(t.connections.delete(e.uid),0===t.connections.size)return{...t,connections:new Map,current:void 0,status:"disconnected"};let i=t.connections.values().next().value;return{...t,connections:new Map(t.connections),current:i.connector.uid}})}return o&&C.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{if(u.getState().some(t=>t.id===e))return C.setState(t=>({...t,chainId:e??t.chainId}))}),c?.subscribe(e=>{let t=new Map;for(let e of d.getState())t.set(e.id,!0);let r=[];for(let i of e){let e=f(g(i));t.has(e.id)||r.push(e)}(!n||C.persist.hasHydrated())&&d.setState(e=>[...e,...r],!0)}),{get chains(){return u.getState()},get connectors(){return d.getState()},storage:n,getClient:function(e={}){let t;let r=e.chainId??C.getState().chainId,i=u.getState().find(e=>e.id===r);if(e.chainId&&!i)throw new a.X4;{let e=w.get(C.getState().chainId);if(e&&!i)return e;if(!i)throw new a.X4}{let e=w.get(r);if(e)return e}if(l.client)t=l.client({chain:i});else{let e=i.id,r=u.getState().map(e=>e.id),n={};for(let[t,i]of Object.entries(l))if("chains"!==t&&"client"!==t&&"connectors"!==t&&"transports"!==t){if("object"==typeof i){if(e in i)n[t]=i[e];else{if(r.some(e=>e in i))continue;n[t]=i}}else n[t]=i}t=(0,h.e)({...n,chain:i,batch:n.batch??{multicall:!0},transport:t=>l.transports[e]({...t,connectors:d})})}return w.set(r,t),t},get state(){return C.getState()},setState(e){let t;t="function"==typeof e?e(C.getState()):e;let r=b();"object"!=typeof t&&(t=r),Object.keys(r).some(e=>!(e in t))&&(t=r),C.setState(t,!0)},subscribe:(e,t,r)=>C.subscribe(e,t,r?{...r,fireImmediately:r.emitImmediately}:void 0),_internal:{mipd:c,store:C,ssr:!!s,syncConnectedChain:o,transports:l.transports,chains:{setState(e){let t="function"==typeof e?e(u.getState()):e;if(0!==t.length)return u.setState(t,!0)},subscribe:e=>u.subscribe(e)},connectors:{providerDetailToConnector:g,setup:f,setState:e=>d.setState("function"==typeof e?e(d.getState()):e,!0),subscribe:e=>d.subscribe(e)},events:{change:x,connect:E,disconnect:_}}}}({chains:[W.R,H],connectors:[u({projectId:Z,metadata:V,showQrModal:!1}),d({appName:V.name,appLogoUrl:V.icons[0]})],ssr:!0,transports:{[W.R.id]:F("https://mainnet.infura.io/v3/".concat("acbb52464d93476aae4d314f146fcf1f")),[H.id]:F("https://bsc-dataseed.binance.org")}})},75322:function(){},77663:function(e){!function(){var t={229:function(e){var t,r,i,n=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function d(){c&&i&&(c=!1,i.length?l=i.concat(l):u=-1,l.length&&h())}function h(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,i),a=!1}finally{a&&delete r[e]}return o.exports}i.ab="//";var n=i(229);e.exports=n}()},11163:function(e,t,r){e.exports=r(9090)},72478:function(e,t,r){"use strict";r.d(t,{DM:function(){return h},h8:function(){return w},jc:function(){return g},ln:function(){return p},o5:function(){return f}});let i=Symbol(),n=Symbol(),o=(e,t)=>new Proxy(e,t),a=Object.getPrototypeOf,s=new WeakMap,l=e=>e&&(s.has(e)?s.get(e):a(e)===Object.prototype||a(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,u=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(a(e),t)},d=e=>e[n]||e,h=(e,t,r,a)=>{if(!l(e))return e;let s=a&&a.get(e);if(!s){let t=d(e);s=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,u(t)]:[t],null==a||a.set(e,s)}let[c,p]=s,f=r&&r.get(c);return f&&!!p===f[1].f||((f=((e,t)=>{let r={f:t},o=!1,a=(t,i)=>{if(!o){let n=r.a.get(e);if(n||(n={},r.a.set(e,n)),"w"===t)n.w=!0;else{let e=n[t];e||(e=new Set,n[t]=e),e.add(i)}}},s={get:(t,i)=>i===n?e:(a("k",i),h(Reflect.get(t,i),r.a,r.c,r.t)),has:(t,n)=>n===i?(o=!0,r.a.delete(e),!0):(a("h",n),Reflect.has(t,n)),getOwnPropertyDescriptor:(e,t)=>(a("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(a("w"),Reflect.ownKeys(e))};return t&&(s.set=s.deleteProperty=()=>!1),[s,r]})(c,!!p))[1].p=o(p||c,f[0]),r&&r.set(c,f)),f[1].a=t,f[1].c=r,f[1].t=a,f[1].p},p=(e,t,r,i,n=Object.is)=>{if(n(e,t))return!1;if(!c(e)||!c(t))return!0;let o=r.get(d(e));if(!o)return!0;if(i){let r=i.get(e);if(r&&r.n===t)return r.g;i.set(e,{n:t,g:!1})}let a=null;try{for(let r of o.h||[])if(a=Reflect.has(e,r)!==Reflect.has(t,r))return a;if(!0===o.w){if(a=((e,t)=>{let r=Reflect.ownKeys(e),i=Reflect.ownKeys(t);return r.length!==i.length||r.some((e,t)=>e!==i[t])})(e,t))return a}else for(let r of o.o||[])if(a=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r))return a;for(let s of o.k||[])if(a=p(e[s],t[s],r,i,n))return a;return null===a&&(a=!0),a}finally{i&&i.set(e,{n:t,g:a})}},f=e=>l(e)&&e[n]||null,g=(e,t=!0)=>{s.set(e,t)},w=(e,t,r)=>{let i=[],n=new WeakSet,o=(e,a)=>{if(n.has(e))return;c(e)&&n.add(e);let s=c(e)&&t.get(d(e));if(s){var l,u,h;if(null==(l=s.h)||l.forEach(e=>{let t=`:has(${String(e)})`;i.push(a?[...a,t]:[t])}),!0===s.w){let e=":ownKeys";i.push(a?[...a,e]:[e])}else null==(h=s.o)||h.forEach(e=>{let t=`:hasOwn(${String(e)})`;i.push(a?[...a,t]:[t])});null==(u=s.k)||u.forEach(t=>{(!r||"value"in(Object.getOwnPropertyDescriptor(e,t)||{}))&&o(e[t],a?[...a,t]:[t])})}else a&&i.push(a)};return o(e),i}},92592:function(e,t,r){let i=r(47138),n=r(95115),o=r(6907),a=r(93776);function s(e,t,r,o,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!i())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=o=void 0):3===l&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=o=void 0):2!==l||t.getContext||(o=r,r=t,t=void 0),new Promise(function(i,a){try{let a=n.create(r,o);i(e(a,t,o))}catch(e){a(e)}})}try{let i=n.create(r,o);a(null,e(i,t,o))}catch(e){a(e)}}t.create=n.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return a.render(e,r)})},47138:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},21845:function(e,t,r){let i=r(10242).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=i(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-n;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],i=t.getRowColCoords(e),n=i.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&r.push([i[e],i[t]]);return r}},8260:function(e,t,r){let i=r(76910),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=o},97245:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},73280:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){let n=e*this.size+t;this.data[n]=r,i&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},43424:function(e,t,r){let i=r(62378),n=r(76910);function o(e){this.mode=n.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},35393:function(e,t,r){let i=r(64908),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return n[(e-1)*4+0];case i.M:return n[(e-1)*4+1];case i.Q:return n[(e-1)*4+2];case i.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return o[(e-1)*4+0];case i.M:return o[(e-1)*4+1];case i.Q:return o[(e-1)*4+2];case i.H:return o[(e-1)*4+3];default:return}}},64908:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},76526:function(e,t,r){let i=r(10242).getSymbolSize;t.getPositions=function(e){let t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},61642:function(e,t,r){let i=r(10242),n=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;i.getBCHDigit(o)-n>=0;)o^=1335<<i.getBCHDigit(o)-n;return(r<<10|o)^21522}},69729:function(e,t){let r=new Uint8Array(512),i=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},35442:function(e,t,r){let i=r(76910),n=r(10242);function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},27126:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,n=0,o=0,a=null,s=null;for(let l=0;l<t;l++){n=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?n++:(n>=5&&(i+=r.N1+(n-5)),a=t,n=1),(t=e.get(c,l))===s?o++:(o>=5&&(i+=r.N1+(o-5)),s=t,o=1)}n>=5&&(i+=r.N1+(n-5)),o>=5&&(i+=r.N1+(o-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let n=0;n<t-1;n++){let t=e.get(r,n)+e.get(r,n+1)+e.get(r+1,n)+e.get(r+1,n+1);(4===t||0===t)&&i++}return i*r.N2},t.getPenaltyN3=function(e){let t=e.size,i=0,n=0,o=0;for(let r=0;r<t;r++){n=o=0;for(let a=0;a<t;a++)n=n<<1&2047|e.get(r,a),a>=10&&(1488===n||93===n)&&i++,o=o<<1&2047|e.get(a,r),a>=10&&(1488===o||93===o)&&i++}return i*r.N3},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/i/5)-10)*r.N4},t.applyMask=function(e,r){let i=r.size;for(let n=0;n<i;n++)for(let o=0;o<i;o++)r.isReserved(o,n)||r.xor(o,n,function(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,n))},t.getBestMask=function(e,r){let i=Object.keys(t.Patterns).length,n=0,o=1/0;for(let a=0;a<i;a++){r(a),t.applyMask(a,e);let i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),i<o&&(o=i,n=a)}return n}},76910:function(e,t,r){let i=r(43114),n=r(7007);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!i.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},41085:function(e,t,r){let i=r(76910);function n(e){this.mode=i.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let i=this.data.length-t;i>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*i+1))},e.exports=n},26143:function(e,t,r){let i=r(69729);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let o=0;o<t.length;o++)r[n+o]^=i.mul(e[n],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let n=0;n<t.length;n++)r[n]^=i.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,i.exp(n)]));return r}},95115:function(e,t,r){let i=r(10242),n=r(64908),o=r(97245),a=r(73280),s=r(21845),l=r(76526),c=r(27126),u=r(35393),d=r(52882),h=r(23103),p=r(61642),f=r(76910),g=r(16130);function w(e,t,r){let i,n;let o=e.size,a=p.getEncodedBits(t,r);for(i=0;i<15;i++)n=(a>>i&1)==1,i<6?e.set(i,8,n,!0):i<8?e.set(i+1,8,n,!0):e.set(o-15+i,8,n,!0),i<8?e.set(8,o-i-1,n,!0):i<9?e.set(8,15-i-1+1,n,!0):e.set(8,15-i-1,n,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,p;if(void 0===e||""===e)throw Error("No input text");let m=n.M;return void 0!==t&&(m=n.from(t.errorCorrectionLevel,n.M),r=h.from(t.version),p=c.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),function(e,t,r,n){let p;if(Array.isArray(e))p=g.fromArray(e);else if("string"==typeof e){let i=t;if(!i){let t=g.rawSplit(e);i=h.getBestVersionForData(t,r)}p=g.fromString(e,i||40)}else throw Error("Invalid data");let m=h.getBestVersionForData(p,r);if(!m)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<m)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+m+".\n")}else t=m;let b=function(e,t,r){let n=new o;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(n)});let a=(i.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t))*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let s=(a-n.getLengthInBits())/8;for(let e=0;e<s;e++)n.put(e%2?17:236,8);return function(e,t,r){let n,o;let a=i.getSymbolTotalCodewords(t),s=a-u.getTotalCodewordsCount(t,r),l=u.getBlocksCount(t,r),c=a%l,h=l-c,p=Math.floor(a/l),f=Math.floor(s/l),g=f+1,w=p-f,m=new d(w),b=0,v=Array(l),y=Array(l),C=0,x=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<h?f:g;v[e]=x.slice(b,b+t),y[e]=m.encode(v[e]),b+=t,C=Math.max(C,t)}let k=new Uint8Array(a),E=0;for(n=0;n<C;n++)for(o=0;o<l;o++)n<v[o].length&&(k[E++]=v[o][n]);for(n=0;n<w;n++)for(o=0;o<l;o++)k[E++]=y[o][n];return k}(n,e,t)}(t,r,p),v=new a(i.getSymbolSize(t));return function(e,t){let r=e.size,i=l.getPositions(t);for(let t=0;t<i.length;t++){let n=i[t][0],o=i[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(r<=n+t))for(let i=-1;i<=7;i++)o+i<=-1||r<=o+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(n+t,o+i,!0,!0):e.set(n+t,o+i,!1,!0))}}(v,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(v),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,n+r,!0,!0):e.set(i+t,n+r,!1,!0)}}(v,t),w(v,r,0),t>=7&&function(e,t){let r,i,n;let o=e.size,a=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),i=t%3+o-8-3,n=(a>>t&1)==1,e.set(r,i,n,!0),e.set(i,r,n,!0)}(v,t),function(e,t){let r=e.size,i=-1,n=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,s-r)){let i=!1;a<t.length&&(i=(t[a]>>>o&1)==1),e.set(n,s-r,i),-1==--o&&(a++,o=7)}if((n+=i)<0||r<=n){n-=i,i=-i;break}}}(v,b),isNaN(n)&&(n=c.getBestMask(v,w.bind(null,v,r))),c.applyMask(n,v),w(v,r,n),{modules:v,version:t,errorCorrectionLevel:r,maskPattern:n,segments:p}}(e,r,m,p)}},52882:function(e,t,r){let i=r(26143);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=i.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},7007:function(e,t){let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(i=i.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+i+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},16130:function(e,t,r){let i=r(76910),n=r(41085),o=r(8260),a=r(43424),s=r(35442),l=r(7007),c=r(10242),u=r(65987);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let i;let n=[];for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function p(e){let t,r;let n=h(l.NUMERIC,i.NUMERIC,e),o=h(l.ALPHANUMERIC,i.ALPHANUMERIC,e);return c.isKanjiModeEnabled()?(t=h(l.BYTE,i.BYTE,e),r=h(l.KANJI,i.KANJI,e)):(t=h(l.BYTE_KANJI,i.BYTE,e),r=[]),n.concat(o,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,t){switch(t){case i.NUMERIC:return n.getBitsLength(e);case i.ALPHANUMERIC:return o.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;let l=i.getBestModeForData(e);if((r=i.from(t,l))!==i.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(l));switch(r!==i.KANJI||c.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new n(e);case i.ALPHANUMERIC:return new o(e);case i.KANJI:return new s(e);case i.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,r){let n=function(e,t){let r={},n={start:{}},o=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},n[u]={};for(let e=0;e<o.length;e++){let a=o[e];r[a]&&r[a].node.mode===c.mode?(n[a][u]=f(r[a].lastCount+c.length,c.mode)-f(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),n[a][u]=f(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,t))}}o=l}for(let e=0;e<o.length;e++)n[o[e]].end=0;return{map:n,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];switch(n.mode){case i.NUMERIC:t.push([n,{data:n.data,mode:i.ALPHANUMERIC,length:n.length},{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.ALPHANUMERIC:t.push([n,{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.KANJI:t.push([n,{data:n.data,mode:i.BYTE,length:d(n.data)}]);break;case i.BYTE:t.push([{data:n.data,mode:i.BYTE,length:d(n.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),r),o=u.find_path(n.map,"start","end"),a=[];for(let e=1;e<o.length-1;e++)a.push(n.table[o[e]].node);return t.fromArray(a.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},10242:function(e,t){let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},43114:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},23103:function(e,t,r){let i=r(10242),n=r(35393),o=r(64908),a=r(76910),s=r(43114),l=i.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let o=(i.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t))*8;if(r===a.MIXED)return o;let l=o-c(r,e);switch(r){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){let i;let n=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++)if(function(e,t){let r=0;return e.forEach(function(e){let i=c(e.mode,t);r+=i+e.getBitsLength()}),r}(e,i)<=t.getCapacity(i,r,a.MIXED))return i}(e,n);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,i,e))return n}(i.mode,i.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-l>=0;)t^=7973<<i.getBCHDigit(t)-l;return e<<12|t}},6907:function(e,t,r){let i=r(89653);t.render=function(e,t,r){var n;let o=r,a=t;void 0!==o||t&&t.getContext||(o=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),o=i.getOptions(o);let s=i.getImageWidth(e.modules.size,o),l=a.getContext("2d"),c=l.createImageData(s,s);return i.qrToImageData(c.data,e,o),n=a,l.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,i){let n=i;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});let o=t.render(e,r,n),a=n.type||"image/png",s=n.rendererOpts||{};return o.toDataURL(a,s.quality)}},93776:function(e,t,r){let i=r(89653);function n(e,t){let r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function o(e,t,r){let i=e+t;return void 0!==r&&(i+=" "+r),i}t.render=function(e,t,r){let a=i.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+n(a.color.dark,"stroke")+' d="'+function(e,t,r){let i="",n=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(i+=a?o("M",c+r,.5+u+r):o("m",n,0),n=0,a=!1),c+1<t&&e[l+1]||(i+=o("h",s),s=0)):n++}return i}(l,s,a.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,h),h}},89653:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:i,scale:i?4:n,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let i=t.getScale(e,r);return Math.floor((e+2*r.margin)*i)},t.qrToImageData=function(e,r,i){let n=r.modules.size,o=r.modules.data,a=t.getScale(n,i),s=Math.floor((n+2*i.margin)*a),l=i.margin*a,c=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,d=i.color.light;t>=l&&r>=l&&t<s-l&&r<s-l&&(d=c[o[Math.floor((t-l)/a)*n+Math.floor((r-l)/a)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},50259:function(e,t,r){"use strict";r.d(t,{pm:function(){return h},xX:function(){return p}});var i,n=r(67294),o=r(83454),a=function(){return(a=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e){var t;e?function(e){if(e)for(;e.lastChild;)e.lastChild.remove()}("string"==typeof e?document.getElementById(e):e):(t=document.querySelector(".grecaptcha-badge"))&&t.parentNode&&document.body.removeChild(t.parentNode)},l=function(e,t){s(t),window.___grecaptcha_cfg=void 0;var r,i=document.querySelector("#"+e);i&&i.remove(),(r=document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]'))&&r.remove()},c=function(e){var t=e.render,r=e.onLoadCallbackName,i=e.language,n=e.onLoad,o=e.useRecaptchaNet,a=e.useEnterprise,s=e.scriptProps,l=void 0===s?{}:s,c=l.nonce,u=void 0===c?"":c,d=l.defer,h=l.async,p=l.id,f=l.appendTo,g=(void 0===p?"":p)||"google-recaptcha-v3";if(document.querySelector("#"+g))n();else{var w,m="https://www."+((w={useEnterprise:a,useRecaptchaNet:o}).useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(w.useEnterprise?"enterprise.js":"api.js"),b=document.createElement("script");b.id=g,b.src=m+"?render="+t+("explicit"===t?"&onload="+r:"")+(i?"&hl="+i:""),u&&(b.nonce=u),b.defer=!!(void 0!==d&&d),b.async=!!(void 0!==h&&h),b.onload=n,("body"===f?document.body:document.getElementsByTagName("head")[0]).appendChild(b)}},u=function(e){void 0===o||o.env,console.warn(e)};(i||(i={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var d=(0,n.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});function h(e){var t=e.reCaptchaKey,r=e.useEnterprise,o=void 0!==r&&r,s=e.useRecaptchaNet,h=void 0!==s&&s,p=e.scriptProps,f=e.language,g=e.container,w=e.children,m=(0,n.useState)(null),b=m[0],v=m[1],y=(0,n.useRef)(t),C=JSON.stringify(p),x=JSON.stringify(null==g?void 0:g.parameters);(0,n.useEffect)(function(){if(t){var e=(null==p?void 0:p.id)||"google-recaptcha-v3",r=(null==p?void 0:p.onLoadCallbackName)||"onRecaptchaLoadCallback";return window[r]=function(){var e=o?window.grecaptcha.enterprise:window.grecaptcha,r=a({badge:"inline",size:"invisible",sitekey:t},(null==g?void 0:g.parameters)||{});y.current=e.render(null==g?void 0:g.element,r)},c({render:(null==g?void 0:g.element)?"explicit":t,onLoadCallbackName:r,useEnterprise:o,useRecaptchaNet:h,scriptProps:p,language:f,onLoad:function(){if(window&&window.grecaptcha){var e=o?window.grecaptcha.enterprise:window.grecaptcha;e.ready(function(){v(e)})}else u("<GoogleRecaptchaProvider /> "+i.SCRIPT_NOT_AVAILABLE)},onError:function(){u("Error loading google recaptcha script")}}),function(){l(e,null==g?void 0:g.element)}}u("<GoogleReCaptchaProvider /> recaptcha key not provided")},[o,h,C,x,f,t,null==g?void 0:g.element]);var k=(0,n.useCallback)(function(e){if(!b||!b.execute)throw Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return b.execute(y.current,{action:e})},[b,y]),E=(0,n.useMemo)(function(){return{executeRecaptcha:b?k:void 0,container:null==g?void 0:g.element}},[k,b,null==g?void 0:g.element]);return n.createElement(d.Provider,{value:E},w)}d.Consumer;var p=function(){return(0,n.useContext)(d)};function f(e,t){return e(t={exports:{}},t.exports),t.exports;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var g="function"==typeof Symbol&&Symbol.for,w=g?Symbol.for("react.element"):60103,m=g?Symbol.for("react.portal"):60106,b=g?Symbol.for("react.fragment"):60107,v=g?Symbol.for("react.strict_mode"):60108,y=g?Symbol.for("react.profiler"):60114,C=g?Symbol.for("react.provider"):60109,x=g?Symbol.for("react.context"):60110,k=g?Symbol.for("react.async_mode"):60111,E=g?Symbol.for("react.concurrent_mode"):60111,_=g?Symbol.for("react.forward_ref"):60112,A=g?Symbol.for("react.suspense"):60113,S=g?Symbol.for("react.suspense_list"):60120,R=g?Symbol.for("react.memo"):60115,$=g?Symbol.for("react.lazy"):60116,O=g?Symbol.for("react.block"):60121,T=g?Symbol.for("react.fundamental"):60117,P=g?Symbol.for("react.responder"):60118,I=g?Symbol.for("react.scope"):60119;function N(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case w:switch(e=e.type){case k:case E:case b:case y:case v:case A:return e;default:switch(e=e&&e.$$typeof){case x:case _:case $:case R:case C:return e;default:return t}}case m:return t}}}function j(e){return N(e)===E}var M={AsyncMode:k,ConcurrentMode:E,ContextConsumer:x,ContextProvider:C,Element:w,ForwardRef:_,Fragment:b,Lazy:$,Memo:R,Portal:m,Profiler:y,StrictMode:v,Suspense:A,isAsyncMode:function(e){return j(e)||N(e)===k},isConcurrentMode:j,isContextConsumer:function(e){return N(e)===x},isContextProvider:function(e){return N(e)===C},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===w},isForwardRef:function(e){return N(e)===_},isFragment:function(e){return N(e)===b},isLazy:function(e){return N(e)===$},isMemo:function(e){return N(e)===R},isPortal:function(e){return N(e)===m},isProfiler:function(e){return N(e)===y},isStrictMode:function(e){return N(e)===v},isSuspense:function(e){return N(e)===A},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===b||e===E||e===y||e===v||e===A||e===S||"object"==typeof e&&null!==e&&(e.$$typeof===$||e.$$typeof===R||e.$$typeof===C||e.$$typeof===x||e.$$typeof===_||e.$$typeof===T||e.$$typeof===P||e.$$typeof===I||e.$$typeof===O)},typeOf:N},L=f(function(e,t){}),B=(L.AsyncMode,L.ConcurrentMode,L.ContextConsumer,L.ContextProvider,L.Element,L.ForwardRef,L.Fragment,L.Lazy,L.Memo,L.Portal,L.Profiler,L.StrictMode,L.Suspense,L.isAsyncMode,L.isConcurrentMode,L.isContextConsumer,L.isContextProvider,L.isElement,L.isForwardRef,L.isFragment,L.isLazy,L.isMemo,L.isPortal,L.isProfiler,L.isStrictMode,L.isSuspense,L.isValidElementType,L.typeOf,f(function(e){e.exports=M})),D={};D[B.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},D[B.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0}},53250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=r(67294),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useState,a=i.useEffect,s=i.useLayoutEffect,l=i.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),i=o({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return s(function(){n.value=r,n.getSnapshot=t,c(n)&&u({inst:n})},[e,r,t]),a(function(){return c(n)&&u({inst:n}),e(function(){c(n)&&u({inst:n})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:u},50139:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=r(67294),n=r(61688),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useSyncExternalStore,s=i.useRef,l=i.useEffect,c=i.useMemo,u=i.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var d=s(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;var p=a(e,(d=c(function(){function e(e){if(!l){if(l=!0,a=e,e=i(e),void 0!==n&&h.hasValue){var t=h.value;if(n(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var r=i(e);return void 0!==n&&n(t,r)?t:(a=e,s=r)}var a,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,i,n]))[0],d[1]);return l(function(){h.hasValue=!0,h.value=p},[p]),u(p),p}},61688:function(e,t,r){"use strict";e.exports=r(53250)},52798:function(e,t,r){"use strict";e.exports=r(50139)},66474:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});var i=r(7506),n=r(24139),o=new class extends i.l{#h;#p;#f;constructor(){super(),this.#f=e=>{if(!n.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#p||this.setEventListener(this.#f)}onUnsubscribe(){this.hasListeners()||(this.#p?.(),this.#p=void 0)}setEventListener(e){this.#f=e,this.#p?.(),this.#p=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.#h!==e&&(this.#h=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return"boolean"==typeof this.#h?this.#h:globalThis.document?.visibilityState!=="hidden"}}},59289:function(e,t,r){"use strict";r.d(t,{R:function(){return s},m:function(){return a}});var i=r(27037),n=r(48907),o=r(72008),a=class extends n.F{#g;#a;#o;#w;constructor(e){super(),this.mutationId=e.mutationId,this.#a=e.defaultOptions,this.#o=e.mutationCache,this.#g=[],this.state=e.state||s(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.#a,...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#g.includes(e)||(this.#g.push(e),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#g=this.#g.filter(t=>t!==e),this.scheduleGc(),this.#o.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#g.length||("pending"===this.state.status?this.scheduleGc():this.#o.remove(this))}continue(){return this.#w?.continue()??this.execute(this.state.variables)}async execute(e){let t="pending"===this.state.status;try{if(!t){this.#m({type:"pending",variables:e}),await this.#o.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#m({type:"pending",context:t,variables:e})}let r=await (this.#w=(0,o.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#m({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#m({type:"pause"})},onContinue:()=>{this.#m({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#w.promise);return await this.#o.config.onSuccess?.(r,e,this.state.context,this),await this.options.onSuccess?.(r,e,this.state.context),await this.#o.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,e,this.state.context),this.#m({type:"success",data:r}),r}catch(t){try{throw await this.#o.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#o.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#m({type:"error",error:t})}}}#m(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,o.Kw)(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),i.V.batch(()=>{this.#g.forEach(t=>{t.onMutationUpdate(e)}),this.#o.notify({mutation:this,type:"updated",action:e})})}};function s(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},27037:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var i=function(){let e=[],t=0,r=e=>{e()},i=e=>{e()},n=e=>setTimeout(e,0),o=i=>{t?e.push(i):n(()=>{r(i)})},a=()=>{let t=e;e=[],t.length&&n(()=>{i(()=>{t.forEach(e=>{r(e)})})})};return{batch:e=>{let r;t++;try{r=e()}finally{--t||a()}return r},batchCalls:e=>(...t)=>{o(()=>{e(...t)})},schedule:o,setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{i=e},setScheduler:e=>{n=e}}}()},14304:function(e,t,r){"use strict";r.d(t,{N:function(){return o}});var i=r(7506),n=r(24139),o=new class extends i.l{#b=!0;#p;#f;constructor(){super(),this.#f=e=>{if(!n.sk&&window.addEventListener){let t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#p||this.setEventListener(this.#f)}onUnsubscribe(){this.hasListeners()||(this.#p?.(),this.#p=void 0)}setEventListener(e){this.#f=e,this.#p?.(),this.#p=e(this.setOnline.bind(this))}setOnline(e){this.#b!==e&&(this.#b=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#b}}},56888:function(e,t,r){"use strict";r.d(t,{A:function(){return s},z:function(){return l}});var i=r(24139),n=r(27037),o=r(72008),a=r(48907),s=class extends a.F{#v;#y;#C;#w;#g;#a;#x;constructor(e){super(),this.#x=!1,this.#a=e.defaultOptions,this.setOptions(e.options),this.#g=[],this.#C=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#v=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,i=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#v,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.#a,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#g.length||"idle"!==this.state.fetchStatus||this.#C.remove(this)}setData(e,t){let r=(0,i.oE)(this.state.data,e,this.options);return this.#m({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),r}setState(e,t){this.#m({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#w?.promise;return this.#w?.cancel(e),t?t.then(i.ZT).catch(i.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#v)}isActive(){return this.#g.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.#g.some(e=>e.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(e=0){return this.state.isInvalidated||void 0===this.state.data||!(0,i.Kp)(this.state.dataUpdatedAt,e)}onFocus(){let e=this.#g.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#w?.continue()}onOnline(){let e=this.#g.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#w?.continue()}addObserver(e){this.#g.includes(e)||(this.#g.push(e),this.clearGcTimeout(),this.#C.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.#g.includes(e)&&(this.#g=this.#g.filter(t=>t!==e),this.#g.length||(this.#w&&(this.#x?this.#w.cancel({revert:!0}):this.#w.cancelRetry()),this.scheduleGc()),this.#C.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.#g.length}invalidate(){this.state.isInvalidated||this.#m({type:"invalidate"})}fetch(e,t){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#w)return this.#w.continueRetry(),this.#w.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.#g.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let r=new AbortController,n={queryKey:this.queryKey,meta:this.meta},a=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#x=!0,r.signal)})};a(n);let s={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn&&this.options.queryFn!==i.CN?(this.#x=!1,this.options.persister)?this.options.persister(this.options.queryFn,n,this):this.options.queryFn(n):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};a(s),this.options.behavior?.onFetch(s,this),this.#y=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==s.fetchOptions?.meta)&&this.#m({type:"fetch",meta:s.fetchOptions?.meta});let l=e=>{(0,o.DV)(e)&&e.silent||this.#m({type:"error",error:e}),(0,o.DV)(e)||(this.#C.config.onError?.(e,this),this.#C.config.onSettled?.(this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#w=(0,o.Mz)({fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:e=>{if(void 0===e){l(Error(`${this.queryHash} data is undefined`));return}this.setData(e),this.#C.config.onSuccess?.(e,this),this.#C.config.onSettled?.(e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(e,t)=>{this.#m({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#m({type:"pause"})},onContinue:()=>{this.#m({type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode}),this.#w.promise}#m(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...l(t.data,this.options),fetchMeta:e.meta??null};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=e.error;if((0,o.DV)(r)&&r.revert&&this.#y)return{...this.#y,fetchStatus:"idle"};return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),n.V.batch(()=>{this.#g.forEach(e=>{e.onQueryUpdate()}),this.#C.notify({query:this,type:"updated",action:e})})}};function l(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,o.Kw)(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}},48907:function(e,t,r){"use strict";r.d(t,{F:function(){return n}});var i=r(24139),n=class{#k;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.PN)(this.gcTime)&&(this.#k=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(i.sk?1/0:3e5))}clearGcTimeout(){this.#k&&(clearTimeout(this.#k),this.#k=void 0)}}},72008:function(e,t,r){"use strict";r.d(t,{DV:function(){return c},Kw:function(){return s},Mz:function(){return u}});var i=r(66474),n=r(14304),o=r(24139);function a(e){return Math.min(1e3*2**e,3e4)}function s(e){return(e??"online")!=="online"||n.N.isOnline()}var l=class{constructor(e){this.revert=e?.revert,this.silent=e?.silent}};function c(e){return e instanceof l}function u(e){let t,r,c,u=!1,d=0,h=!1,p=new Promise((e,t)=>{r=e,c=t}),f=()=>!i.j.isFocused()||"always"!==e.networkMode&&!n.N.isOnline(),g=i=>{h||(h=!0,e.onSuccess?.(i),t?.(),r(i))},w=r=>{h||(h=!0,e.onError?.(r),t?.(),c(r))},m=()=>new Promise(r=>{t=e=>{let t=h||!f();return t&&r(e),t},e.onPause?.()}).then(()=>{t=void 0,h||e.onContinue?.()}),b=()=>{let t;if(!h){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(g).catch(t=>{if(h)return;let r=e.retry??(o.sk?0:3),i=e.retryDelay??a,n="function"==typeof i?i(d,t):i,s=!0===r||"number"==typeof r&&d<r||"function"==typeof r&&r(d,t);if(u||!s){w(t);return}d++,e.onFail?.(d,t),(0,o._v)(n).then(()=>{if(f())return m()}).then(()=>{u?w(t):b()})})}};return s(e.networkMode)?b():m().then(b),{promise:p,cancel:t=>{h||(w(new l(t)),e.abort?.())},continue:()=>t?.()?p:Promise.resolve(),cancelRetry:()=>{u=!0},continueRetry:()=>{u=!1}}}},7506:function(e,t,r){"use strict";r.d(t,{l:function(){return i}});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},24139:function(e,t,r){"use strict";r.d(t,{CN:function(){return x},Ht:function(){return C},Kp:function(){return s},PN:function(){return a},Q$:function(){return p},Rm:function(){return u},SE:function(){return o},VS:function(){return f},VX:function(){return y},X7:function(){return c},Ym:function(){return d},ZT:function(){return n},_v:function(){return b},_x:function(){return l},oE:function(){return v},sk:function(){return i},to:function(){return h}});var i="undefined"==typeof window||"Deno"in globalThis;function n(){}function o(e,t){return"function"==typeof e?e(t):e}function a(e){return"number"==typeof e&&e>=0&&e!==1/0}function s(e,t){return Math.max(e+(t||0)-Date.now(),0)}function l(e,t){let{type:r="all",exact:i,fetchStatus:n,predicate:o,queryKey:a,stale:s}=e;if(a){if(i){if(t.queryHash!==u(a,t.options))return!1}else if(!h(t.queryKey,a))return!1}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(!n||n===t.state.fetchStatus)&&(!o||!!o(t))}function c(e,t){let{exact:r,status:i,predicate:n,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(r){if(d(t.options.mutationKey)!==d(o))return!1}else if(!h(t.options.mutationKey,o))return!1}return(!i||t.state.status===i)&&(!n||!!n(t))}function u(e,t){return(t?.queryKeyHashFn||d)(e)}function d(e){return JSON.stringify(e,(e,t)=>w(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function h(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!h(e[r],t[r]))}function p(e,t){if(e===t)return e;let r=g(e)&&g(t);if(r||w(e)&&w(t)){let i=r?e:Object.keys(e),n=i.length,o=r?t:Object.keys(t),a=o.length,s=r?[]:{},l=0;for(let n=0;n<a;n++){let a=r?n:o[n];!r&&void 0===e[a]&&void 0===t[a]&&i.includes(a)?(s[a]=void 0,l++):(s[a]=p(e[a],t[a]),s[a]===e[a]&&void 0!==e[a]&&l++)}return n===a&&l===n?e:s}return t}function f(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function g(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function w(e){if(!m(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(m(r)&&r.hasOwnProperty("isPrototypeOf"))}function m(e){return"[object Object]"===Object.prototype.toString.call(e)}function b(e){return new Promise(t=>{setTimeout(t,e)})}function v(e,t,r){return"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?p(e,t):t}function y(e,t,r=0){let i=[...e,t];return r&&i.length>r?i.slice(1):i}function C(e,t,r=0){let i=[t,...e];return r&&i.length>r?i.slice(0,-1):i}var x=Symbol()},30202:function(e,t,r){"use strict";r.d(t,{NL:function(){return a},aH:function(){return s}});var i=r(67294),n=r(85893),o=i.createContext(void 0),a=e=>{let t=i.useContext(o);if(e)return e;if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},s=({client:e,children:t})=>(i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,n.jsx)(o.Provider,{value:e,children:t}))},6590:function(e,t,r){"use strict";async function i(e,t={}){let r;if(t.connector)r=t.connector;else{let{connections:t,current:i}=e.state,n=t.get(i);r=n?.connector}let i=e.state.connections;r&&(await r.disconnect(),r.emitter.off("change",e._internal.events.change),r.emitter.off("disconnect",e._internal.events.disconnect),r.emitter.on("connect",e._internal.events.connect),i.delete(r.uid)),e.setState(e=>{if(0===i.size)return{...e,connections:new Map,current:void 0,status:"disconnected"};let t=i.values().next().value;return{...e,connections:new Map(i),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let r=e.state.connections.get(t)?.connector;if(!r)return;await e.storage?.setItem("recentConnectorId",r.id)}}r.d(t,{z:function(){return i}})},52425:function(e,t,r){"use strict";function i(e){let t=e.state.current,r=e.state.connections.get(t),i=r?.accounts,n=i?.[0],o=e.chains.find(e=>e.id===r?.chainId),a=e.state.status;switch(a){case"connected":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:a};case"reconnecting":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!!n,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:a};case"connecting":return{address:n,addresses:i,chain:o,chainId:r?.chainId,connector:r?.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:a};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:a}}}r.d(t,{D:function(){return i}})},35001:function(e,t,r){"use strict";r.d(t,{s:function(){return _}});var i=r(97405),n=r(95946),o=r(61836),a=r(15229),s=r(92106);async function l(e,{address:t,blockNumber:r,blockTag:i="latest"}){let n=r?(0,s.eC)(r):void 0;return BigInt(await e.request({method:"eth_getBalance",params:[t,n||i]}))}var c=r(81946),u=r(84192);function d(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(u.Bd[e])}var h=r(16693),p=r(57412),f=r(62027),g=r(7210),w=r(55629),m=r(47864),b=r(72365),v=r(93714),y=r(88819);async function C(e,t){let{allowFailure:r=!0,batchSize:n,blockNumber:o,blockTag:a,multicallAddress:s,stateOverride:l}=t,c=t.contracts,u=n??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),d=s;if(!d){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");d=(0,m.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let C=[[]],x=0,k=0;for(let e=0;e<c.length;e++){let{abi:t,address:i,args:n,functionName:o}=c[e];try{let e=(0,w.R)({abi:t,args:n,functionName:o});k+=(e.length-2)/2,u>0&&k>u&&C[x].length>0&&(x++,k=(e.length-2)/2,C[x]=[]),C[x]=[...C[x],{allowFailure:!0,callData:e,target:i}]}catch(a){let e=(0,b.S)(a,{abi:t,address:i,args:n,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw e;C[x]=[...C[x],{allowFailure:!0,callData:"0x",target:i}]}}let E=await Promise.allSettled(C.map(t=>(0,v.s)(e,y.L,"readContract")({abi:h.F8,address:d,args:[t],blockNumber:o,blockTag:a,functionName:"aggregate3",stateOverride:l}))),_=[];for(let e=0;e<E.length;e++){let t=E[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<C[e].length;r++)_.push({status:"failure",error:t.reason,result:void 0});continue}let n=t.value;for(let t=0;t<n.length;t++){let{returnData:o,success:a}=n[t],{callData:s}=C[e][t],{abi:l,address:u,functionName:d,args:h}=c[_.length];try{if("0x"===s)throw new p.wb;if(!a)throw new i.VQ({data:o});let e=(0,g.k)({abi:l,args:h,data:o,functionName:d});_.push(r?{result:e,status:"success"}:e)}catch(t){let e=(0,b.S)(t,{abi:l,address:u,args:h,docsPath:"/docs/contract/multicall",functionName:d});if(!r)throw e;_.push({error:e,result:void 0,status:"failure"})}}}if(_.length!==c.length)throw new f.G("multicall results mismatch");return _}async function x(e,t){let{allowFailure:r=!0,chainId:i,contracts:n,...o}=t,a=e.getClient({chainId:i});return(0,c.s)(a,C,"multicall")({allowFailure:r,contracts:n,...o})}var k=r(37003);async function E(e,t){let{allowFailure:r=!0,blockNumber:n,blockTag:o,...a}=t,s=t.contracts;try{let t=s.reduce((t,r,i)=>{let n=r.chainId??e.state.chainId;return{...t,[n]:[...t[n]||[],{contract:r,index:i}]}},{}),i=(await Promise.all(Object.entries(t).map(([t,i])=>x(e,{...a,allowFailure:r,blockNumber:n,blockTag:o,chainId:parseInt(t),contracts:i.map(({contract:e})=>e)})))).flat(),l=Object.values(t).flatMap(e=>e.map(({index:e})=>e));return i.reduce((e,t,r)=>(e&&(e[l[r]]=t),e),[])}catch(a){if(a instanceof i.uq)throw a;let t=()=>s.map(t=>(0,k.L)(e,{...t,blockNumber:n,blockTag:o}));if(r)return(await Promise.allSettled(t())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(t())}}async function _(e,t){let{address:r,blockNumber:s,blockTag:u,chainId:h,token:p,unit:f="ether"}=t;if(p)try{return A(e,{balanceAddress:r,chainId:h,symbolType:"string",tokenAddress:p})}catch(t){if(t instanceof i.uq){let t=await A(e,{balanceAddress:r,chainId:h,symbolType:"bytes32",tokenAddress:p}),i=(0,n.rR)((0,o.f)(t.symbol,{dir:"right"}));return{...t,symbol:i}}throw t}let g=e.getClient({chainId:h}),w=(0,c.s)(g,l,"getBalance"),m=await w(s?{address:r,blockNumber:s}:{address:r,blockTag:u}),b=e.chains.find(e=>e.id===h)??g.chain;return{decimals:b.nativeCurrency.decimals,formatted:(0,a.b)(m,d(f)),symbol:b.nativeCurrency.symbol,value:m}}async function A(e,t){let{balanceAddress:r,chainId:i,symbolType:n,tokenAddress:o,unit:s}=t,l={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:n}]}],address:o},[c,u,h]=await E(e,{allowFailure:!1,contracts:[{...l,functionName:"balanceOf",args:[r],chainId:i},{...l,functionName:"decimals",chainId:i},{...l,functionName:"symbol",chainId:i}]}),p=(0,a.b)(c??"0",d(s??u));return{decimals:u,formatted:p,symbol:h,value:c}}},75230:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var i=r(16189),n=r(91628),o=r(14503),a=r(45775),s=r(87675);async function l(e,t={}){let r;if(t.connector){let{connector:e}=t,[i,n]=await Promise.all([e.getAccounts(),e.getChainId()]);r={accounts:i,chainId:n,connector:e}}else r=e.state.connections.get(e.state.current);if(!r)throw new s.aH;let l=t.chainId??r.chainId,c=r.connector;if(c.getClient)return c.getClient({chainId:l});let u=(0,o.T)(t.account??r.accounts[0]);u.address=(0,a.K)(u.address);let d=e.chains.find(e=>e.id===l),h=await r.connector.getProvider({chainId:l});if(t.account&&!r.accounts.includes(u.address))throw new s.JK({address:u.address,connector:c});return(0,i.e)({account:u,chain:d,name:"Connector Client",transport:e=>(function(e,t={}){let{key:r="custom",name:i="Custom Provider",retryDelay:o}=t;return({retryCount:a})=>(0,n.q)({key:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:o,type:"custom"})})(h)({...e,retryCount:0})})}},37003:function(e,t,r){"use strict";r.d(t,{L:function(){return o}});var i=r(88819),n=r(81946);function o(e,t){let{chainId:r,...o}=t,a=e.getClient({chainId:r});return(0,n.s)(a,i.L,"readContract")(o)}},23510:function(e,t,r){"use strict";r.d(t,{c:function(){return o}});var i=r(87675),n=r(17897);async function o(e,t){let{chainId:r}=t,o=e.state.connections.get(t.connector?.uid??e.state.current);if(o){let e=o.connector;if(!e.switchChain)throw new n.O({connector:e});return await e.switchChain({chainId:r})}let a=e.chains.find(e=>e.id===r);if(!a)throw new i.X4;return e.setState(e=>({...e,chainId:r})),a}},33397:function(e,t,r){"use strict";r.d(t,{u:function(){return o}});var i=r(74751),n=r(52425);function o(e,t){let{onChange:r}=t;return e.subscribe(()=>(0,n.D)(e),r,{equalityFn(e,t){let{connector:r,...n}=e,{connector:o,...a}=t;return(0,i.v)(n,a)&&r?.id===o?.id&&r?.uid===o?.uid}})}},7066:function(e,t,r){"use strict";r.d(t,{G:function(){return l}});var i,n,o=r(79983);let a=()=>`@wagmi/core@${o.i}`;var s=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class l extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return a()}constructor(e,t={}){super(),i.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let r=t.cause instanceof l?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof l&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: ${this.docsBaseUrl}${n}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return s(this,i,"m",n).call(this,this,e)}}i=new WeakSet,n=function e(t,r){return r?.(t)?t:t.cause?s(this,i,"m",e).call(this,t.cause,r):t}},87675:function(e,t,r){"use strict";r.d(t,{JK:function(){return s},X4:function(){return n},aH:function(){return a},wi:function(){return o}});var i=r(7066);class n extends i.G{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class o extends i.G{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class a extends i.G{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class s extends i.G{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}},17897:function(e,t,r){"use strict";r.d(t,{M:function(){return n},O:function(){return o}});var i=r(7066);class n extends i.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class o extends i.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},74751:function(e,t,r){"use strict";r.d(t,{v:function(){return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let i,n;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((i=t.length)!==r.length)return!1;for(n=i;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let o=Object.keys(t);if((i=o.length)!==Object.keys(r).length)return!1;for(n=i;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,o[n]))return!1;for(n=i;0!=n--;){let i=o[n];if(i&&!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}}})},81946:function(e,t,r){"use strict";function i(e,t,r){let i=e[t.name];if("function"==typeof i)return i;let n=e[r];return"function"==typeof n?n:r=>t(e,r)}r.d(t,{s:function(){return i}})},79983:function(e,t,r){"use strict";r.d(t,{i:function(){return i}});let i="2.6.16"},77832:function(e,t,r){"use strict";r.d(t,{Em:function(){return a},p1:function(){return s},C6:function(){return x}});var i=r(27484),n=r(70660),o=r(84110);i.extend(o),i.extend(n),i.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let a={getYear:(e=new Date().toISOString())=>i(e).year(),getRelativeDateFromNow:e=>i(e).fromNow(!0),formatDate:(e,t="DD MMM")=>i(e).format(t)},s={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0};var l=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,c=Math.ceil,u=Math.floor,d="[BigNumber Error] ",h=d+"Number primitive has more than 15 significant digits: ",p=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];function f(e){var t=0|e;return e>0||e===t?t:t-1}function g(e){for(var t,r,i=1,n=e.length,o=e[0]+"";i<n;){for(r=14-(t=e[i++]+"").length;r--;t="0"+t);o+=t}for(n=o.length;48===o.charCodeAt(--n););return o.slice(0,n+1||1)}function w(e,t){var r,i,n=e.c,o=t.c,a=e.s,s=t.s,l=e.e,c=t.e;if(!a||!s)return null;if(r=n&&!n[0],i=o&&!o[0],r||i)return r?i?0:-s:a;if(a!=s)return a;if(r=a<0,i=l==c,!n||!o)return i?0:!n^r?1:-1;if(!i)return l>c^r?1:-1;for(a=0,s=(l=n.length)<(c=o.length)?l:c;a<s;a++)if(n[a]!=o[a])return n[a]>o[a]^r?1:-1;return l==c?0:l>c^r?1:-1}function m(e,t,r,i){if(e<t||e>r||e!==u(e))throw Error(d+(i||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function b(e){var t=e.c.length-1;return f(e.e/14)==t&&e.c[t]%2!=0}function v(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function y(e,t,r){var i,n;if(t<0){for(n=r+".";++t;n+=r);e=n+e}else if(i=e.length,++t>i){for(n=r,t-=i;--t;n+=r);e+=n}else t<i&&(e=e.slice(0,t)+"."+e.slice(t));return e}var C=function e(t){var r,i,n,o,a,s,C,x,k,E=B.prototype={constructor:B,toString:null,valueOf:null},_=new B(1),A=20,S=4,R=-7,$=21,O=-1e7,T=1e7,P=!1,I=1,N=0,j={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},M="0123456789abcdefghijklmnopqrstuvwxyz",L=!0;function B(e,t){var r,i,n,o,a,s,c,d,p=this;if(!(p instanceof B))return new B(e,t);if(null==t){if(e&&!0===e._isBigNumber){p.s=e.s,!e.c||e.e>T?p.c=p.e=null:e.e<O?p.c=[p.e=0]:(p.e=e.e,p.c=e.c.slice());return}if((s="number"==typeof e)&&0*e==0){if(p.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,a=e;a>=10;a/=10,o++);o>T?p.c=p.e=null:(p.e=o,p.c=[e]);return}d=String(e)}else{if(!l.test(d=String(e)))return k(p,d,s);p.s=45==d.charCodeAt(0)?(d=d.slice(1),-1):1}(o=d.indexOf("."))>-1&&(d=d.replace(".","")),(a=d.search(/e/i))>0?(o<0&&(o=a),o+=+d.slice(a+1),d=d.substring(0,a)):o<0&&(o=d.length)}else{if(m(t,2,M.length,"Base"),10==t&&L)return F(p=new B(e),A+p.e+1,S);if(d=String(e),s="number"==typeof e){if(0*e!=0)return k(p,d,s,t);if(p.s=1/e<0?(d=d.slice(1),-1):1,B.DEBUG&&d.replace(/^0\.0*|\./,"").length>15)throw Error(h+e)}else p.s=45===d.charCodeAt(0)?(d=d.slice(1),-1):1;for(r=M.slice(0,t),o=a=0,c=d.length;a<c;a++)if(0>r.indexOf(i=d.charAt(a))){if("."==i){if(a>o){o=c;continue}}else if(!n&&(d==d.toUpperCase()&&(d=d.toLowerCase())||d==d.toLowerCase()&&(d=d.toUpperCase()))){n=!0,a=-1,o=0;continue}return k(p,String(e),s,t)}s=!1,(o=(d=x(d,t,10,p.s)).indexOf("."))>-1?d=d.replace(".",""):o=d.length}for(a=0;48===d.charCodeAt(a);a++);for(c=d.length;48===d.charCodeAt(--c););if(d=d.slice(a,++c)){if(c-=a,s&&B.DEBUG&&c>15&&(e>9007199254740991||e!==u(e)))throw Error(h+p.s*e);if((o=o-a-1)>T)p.c=p.e=null;else if(o<O)p.c=[p.e=0];else{if(p.e=o,p.c=[],a=(o+1)%14,o<0&&(a+=14),a<c){for(a&&p.c.push(+d.slice(0,a)),c-=14;a<c;)p.c.push(+d.slice(a,a+=14));a=14-(d=d.slice(a)).length}else a-=c;for(;a--;d+="0");p.c.push(+d)}}else p.c=[p.e=0]}function D(e,t,r,i){var n,o,a,s,l;if(null==r?r=S:m(r,0,8),!e.c)return e.toString();if(n=e.c[0],a=e.e,null==t)l=g(e.c),l=1==i||2==i&&(a<=R||a>=$)?v(l,a):y(l,a,"0");else if(o=(e=F(new B(e),t,r)).e,s=(l=g(e.c)).length,1==i||2==i&&(t<=o||o<=R)){for(;s<t;l+="0",s++);l=v(l,o)}else if(t-=a,l=y(l,o,"0"),o+1>s){if(--t>0)for(l+=".";t--;l+="0");}else if((t+=o-s)>0)for(o+1==s&&(l+=".");t--;l+="0");return e.s<0&&n?"-"+l:l}function U(e,t){for(var r,i,n=1,o=new B(e[0]);n<e.length;n++)(i=new B(e[n])).s&&(r=w(o,i))!==t&&(0!==r||o.s!==t)||(o=i);return o}function z(e,t,r){for(var i=1,n=t.length;!t[--n];t.pop());for(n=t[0];n>=10;n/=10,i++);return(r=i+14*r-1)>T?e.c=e.e=null:r<O?e.c=[e.e=0]:(e.e=r,e.c=t),e}function F(e,t,r,i){var n,o,a,s,l,d,h,f=e.c;if(f){e:{for(n=1,s=f[0];s>=10;s/=10,n++);if((o=t-n)<0)o+=14,a=t,h=u((l=f[d=0])/p[n-a-1]%10);else if((d=c((o+1)/14))>=f.length){if(i){for(;f.length<=d;f.push(0));l=h=0,n=1,o%=14,a=o-14+1}else break e}else{for(n=1,l=s=f[d];s>=10;s/=10,n++);o%=14,h=(a=o-14+n)<0?0:u(l/p[n-a-1]%10)}if(i=i||t<0||null!=f[d+1]||(a<0?l:l%p[n-a-1]),i=r<4?(h||i)&&(0==r||r==(e.s<0?3:2)):h>5||5==h&&(4==r||i||6==r&&(o>0?a>0?l/p[n-a]:0:f[d-1])%10&1||r==(e.s<0?8:7)),t<1||!f[0])return f.length=0,i?(t-=e.e+1,f[0]=p[(14-t%14)%14],e.e=-t||0):f[0]=e.e=0,e;if(0==o?(f.length=d,s=1,d--):(f.length=d+1,s=p[14-o],f[d]=a>0?u(l/p[n-a]%p[a])*s:0),i)for(;;){if(0==d){for(o=1,a=f[0];a>=10;a/=10,o++);for(a=f[0]+=s,s=1;a>=10;a/=10,s++);o!=s&&(e.e++,1e14==f[0]&&(f[0]=1));break}if(f[d]+=s,1e14!=f[d])break;f[d--]=0,s=1}for(o=f.length;0===f[--o];f.pop());}e.e>T?e.c=e.e=null:e.e<O&&(e.c=[e.e=0])}return e}function W(e){var t,r=e.e;return null===r?e.toString():(t=g(e.c),t=r<=R||r>=$?v(t,r):y(t,r,"0"),e.s<0?"-"+t:t)}return B.clone=e,B.ROUND_UP=0,B.ROUND_DOWN=1,B.ROUND_CEIL=2,B.ROUND_FLOOR=3,B.ROUND_HALF_UP=4,B.ROUND_HALF_DOWN=5,B.ROUND_HALF_EVEN=6,B.ROUND_HALF_CEIL=7,B.ROUND_HALF_FLOOR=8,B.EUCLID=9,B.config=B.set=function(e){var t,r;if(null!=e){if("object"==typeof e){if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(m(r=e[t],0,1e9,t),A=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(m(r=e[t],0,8,t),S=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(m(r[0],-1e9,0,t),m(r[1],0,1e9,t),R=r[0],$=r[1]):(m(r,-1e9,1e9,t),R=-($=r<0?-r:r))),e.hasOwnProperty(t="RANGE")){if((r=e[t])&&r.pop)m(r[0],-1e9,-1,t),m(r[1],1,1e9,t),O=r[0],T=r[1];else if(m(r,-1e9,1e9,t),r)O=-(T=r<0?-r:r);else throw Error(d+t+" cannot be zero: "+r)}if(e.hasOwnProperty(t="CRYPTO")){if(!!(r=e[t])===r){if(r){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))P=r;else throw P=!r,Error(d+"crypto unavailable")}else P=r}else throw Error(d+t+" not true or false: "+r)}if(e.hasOwnProperty(t="MODULO_MODE")&&(m(r=e[t],0,9,t),I=r),e.hasOwnProperty(t="POW_PRECISION")&&(m(r=e[t],0,1e9,t),N=r),e.hasOwnProperty(t="FORMAT")){if("object"==typeof(r=e[t]))j=r;else throw Error(d+t+" not an object: "+r)}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(d+t+" invalid: "+r);L="0123456789"==r.slice(0,10),M=r}}else throw Error(d+"Object expected: "+e)}return{DECIMAL_PLACES:A,ROUNDING_MODE:S,EXPONENTIAL_AT:[R,$],RANGE:[O,T],CRYPTO:P,MODULO_MODE:I,POW_PRECISION:N,FORMAT:j,ALPHABET:M}},B.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!B.DEBUG)return!0;var t,r,i=e.c,n=e.e,o=e.s;e:if("[object Array]"==({}).toString.call(i)){if((1===o||-1===o)&&n>=-1e9&&n<=1e9&&n===u(n)){if(0===i[0]){if(0===n&&1===i.length)return!0;break e}if((t=(n+1)%14)<1&&(t+=14),String(i[0]).length==t){for(t=0;t<i.length;t++)if((r=i[t])<0||r>=1e14||r!==u(r))break e;if(0!==r)return!0}}}else if(null===i&&null===n&&(null===o||1===o||-1===o))return!0;throw Error(d+"Invalid BigNumber: "+e)},B.maximum=B.max=function(){return U(arguments,-1)},B.minimum=B.min=function(){return U(arguments,1)},B.random=(r=9007199254740992*Math.random()&2097151?function(){return u(9007199254740992*Math.random())}:function(){return(1073741824*Math.random()|0)*8388608+(8388608*Math.random()|0)},function(e){var t,i,n,o,a,s=0,l=[],h=new B(_);if(null==e?e=A:m(e,0,1e9),o=c(e/14),P){if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(o*=2));s<o;)(a=131072*t[s]+(t[s+1]>>>11))>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),t[s]=i[0],t[s+1]=i[1]):(l.push(a%1e14),s+=2);s=o/2}else if(crypto.randomBytes){for(t=crypto.randomBytes(o*=7);s<o;)(a=(31&t[s])*281474976710656+1099511627776*t[s+1]+4294967296*t[s+2]+16777216*t[s+3]+(t[s+4]<<16)+(t[s+5]<<8)+t[s+6])>=9e15?crypto.randomBytes(7).copy(t,s):(l.push(a%1e14),s+=7);s=o/7}else throw P=!1,Error(d+"crypto unavailable")}if(!P)for(;s<o;)(a=r())<9e15&&(l[s++]=a%1e14);for(o=l[--s],e%=14,o&&e&&(a=p[14-e],l[s]=u(o/a)*a);0===l[s];l.pop(),s--);if(s<0)l=[n=0];else{for(n=-1;0===l[0];l.splice(0,1),n-=14);for(s=1,a=l[0];a>=10;a/=10,s++);s<14&&(n-=14-s)}return h.e=n,h.c=l,h}),B.sum=function(){for(var e=1,t=arguments,r=new B(t[0]);e<t.length;)r=r.plus(t[e++]);return r},x=function(){var e="0123456789";function t(e,t,r,i){for(var n,o,a=[0],s=0,l=e.length;s<l;){for(o=a.length;o--;a[o]*=t);for(a[0]+=i.indexOf(e.charAt(s++)),n=0;n<a.length;n++)a[n]>r-1&&(null==a[n+1]&&(a[n+1]=0),a[n+1]+=a[n]/r|0,a[n]%=r)}return a.reverse()}return function(r,i,n,o,a){var s,l,c,u,d,h,p,f,w=r.indexOf("."),m=A,b=S;for(w>=0&&(u=N,N=0,r=r.replace(".",""),h=(f=new B(i)).pow(r.length-w),N=u,f.c=t(y(g(h.c),h.e,"0"),10,n,e),f.e=f.c.length),c=u=(p=t(r,i,n,a?(s=M,e):(s=e,M))).length;0==p[--u];p.pop());if(!p[0])return s.charAt(0);if(w<0?--c:(h.c=p,h.e=c,h.s=o,p=(h=C(h,f,m,b,n)).c,d=h.r,c=h.e),w=p[l=c+m+1],u=n/2,d=d||l<0||null!=p[l+1],d=b<4?(null!=w||d)&&(0==b||b==(h.s<0?3:2)):w>u||w==u&&(4==b||d||6==b&&1&p[l-1]||b==(h.s<0?8:7)),l<1||!p[0])r=d?y(s.charAt(1),-m,s.charAt(0)):s.charAt(0);else{if(p.length=l,d)for(--n;++p[--l]>n;)p[l]=0,l||(++c,p=[1].concat(p));for(u=p.length;!p[--u];);for(w=0,r="";w<=u;r+=s.charAt(p[w++]));r=y(r,c,s.charAt(0))}return r}}(),C=function(){function e(e,t,r){var i,n,o,a,s=0,l=e.length,c=t%1e7,u=t/1e7|0;for(e=e.slice();l--;)i=u*(o=e[l]%1e7)+(a=e[l]/1e7|0)*c,s=((n=c*o+i%1e7*1e7+s)/r|0)+(i/1e7|0)+u*a,e[l]=n%r;return s&&(e=[s].concat(e)),e}function t(e,t,r,i){var n,o;if(r!=i)o=r>i?1:-1;else for(n=o=0;n<r;n++)if(e[n]!=t[n]){o=e[n]>t[n]?1:-1;break}return o}function r(e,t,r,i){for(var n=0;r--;)e[r]-=n,n=e[r]<t[r]?1:0,e[r]=n*i+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,n,o,a,s){var l,c,d,h,p,g,w,m,b,v,y,C,x,k,E,_,A,S=i.s==n.s?1:-1,R=i.c,$=n.c;if(!R||!R[0]||!$||!$[0])return new B(i.s&&n.s&&(R?!$||R[0]!=$[0]:$)?R&&0==R[0]||!$?0*S:S/0:NaN);for(b=(m=new B(S)).c=[],S=o+(c=i.e-n.e)+1,s||(s=1e14,c=f(i.e/14)-f(n.e/14),S=S/14|0),d=0;$[d]==(R[d]||0);d++);if($[d]>(R[d]||0)&&c--,S<0)b.push(1),h=!0;else{for(k=R.length,_=$.length,d=0,S+=2,(p=u(s/($[0]+1)))>1&&($=e($,p,s),R=e(R,p,s),_=$.length,k=R.length),x=_,y=(v=R.slice(0,_)).length;y<_;v[y++]=0);A=[0].concat(A=$.slice()),E=$[0],$[1]>=s/2&&E++;do{if(p=0,(l=t($,v,_,y))<0){if(C=v[0],_!=y&&(C=C*s+(v[1]||0)),(p=u(C/E))>1)for(p>=s&&(p=s-1),w=(g=e($,p,s)).length,y=v.length;1==t(g,v,w,y);)p--,r(g,_<w?A:$,w,s),w=g.length,l=1;else 0==p&&(l=p=1),w=(g=$.slice()).length;if(w<y&&(g=[0].concat(g)),r(v,g,y,s),y=v.length,-1==l)for(;1>t($,v,_,y);)p++,r(v,_<y?A:$,y,s),y=v.length}else 0===l&&(p++,v=[0]);b[d++]=p,v[0]?v[y++]=R[x]||0:(v=[R[x]],y=1)}while((x++<k||null!=v[0])&&S--);h=null!=v[0],b[0]||b.splice(0,1)}if(1e14==s){for(d=1,S=b[0];S>=10;S/=10,d++);F(m,o+(m.e=d+14*c-1)+1,a,h)}else m.e=c,m.r=+h;return m}}(),i=/^(-?)0([xbo])(?=\w[\w.]*$)/i,n=/^([^.]+)\.$/,o=/^\.([^.]+)$/,a=/^-?(Infinity|NaN)$/,s=/^\s*\+(?=[\w.])|^\s+|\s+$/g,k=function(e,t,r,l){var c,u=r?t:t.replace(s,"");if(a.test(u))e.s=isNaN(u)?null:u<0?-1:1;else{if(!r&&(u=u.replace(i,function(e,t,r){return c="x"==(r=r.toLowerCase())?16:"b"==r?2:8,l&&l!=c?e:t}),l&&(c=l,u=u.replace(n,"$1").replace(o,"0.$1")),t!=u))return new B(u,c);if(B.DEBUG)throw Error(d+"Not a"+(l?" base "+l:"")+" number: "+t);e.s=null}e.c=e.e=null},E.absoluteValue=E.abs=function(){var e=new B(this);return e.s<0&&(e.s=1),e},E.comparedTo=function(e,t){return w(this,new B(e,t))},E.decimalPlaces=E.dp=function(e,t){var r,i,n;if(null!=e)return m(e,0,1e9),null==t?t=S:m(t,0,8),F(new B(this),e+this.e+1,t);if(!(r=this.c))return null;if(i=((n=r.length-1)-f(this.e/14))*14,n=r[n])for(;n%10==0;n/=10,i--);return i<0&&(i=0),i},E.dividedBy=E.div=function(e,t){return C(this,new B(e,t),A,S)},E.dividedToIntegerBy=E.idiv=function(e,t){return C(this,new B(e,t),0,1)},E.exponentiatedBy=E.pow=function(e,t){var r,i,n,o,a,s,l,h,p,f=this;if((e=new B(e)).c&&!e.isInteger())throw Error(d+"Exponent not an integer: "+W(e));if(null!=t&&(t=new B(t)),s=e.e>14,!f.c||!f.c[0]||1==f.c[0]&&!f.e&&1==f.c.length||!e.c||!e.c[0])return p=new B(Math.pow(+W(f),s?e.s*(2-b(e)):+W(e))),t?p.mod(t):p;if(l=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new B(NaN);(i=!l&&f.isInteger()&&t.isInteger())&&(f=f.mod(t))}else{if(e.e>9&&(f.e>0||f.e<-1||(0==f.e?f.c[0]>1||s&&f.c[1]>=24e7:f.c[0]<8e13||s&&f.c[0]<=9999975e7)))return o=f.s<0&&b(e)?-0:0,f.e>-1&&(o=1/o),new B(l?1/o:o);N&&(o=c(N/14+2))}for(s?(r=new B(.5),l&&(e.s=1),h=b(e)):h=(n=Math.abs(+W(e)))%2,p=new B(_);;){if(h){if(!(p=p.times(f)).c)break;o?p.c.length>o&&(p.c.length=o):i&&(p=p.mod(t))}if(n){if(0===(n=u(n/2)))break;h=n%2}else if(F(e=e.times(r),e.e+1,1),e.e>14)h=b(e);else{if(0==(n=+W(e)))break;h=n%2}f=f.times(f),o?f.c&&f.c.length>o&&(f.c.length=o):i&&(f=f.mod(t))}return i?p:(l&&(p=_.div(p)),t?p.mod(t):o?F(p,N,S,a):p)},E.integerValue=function(e){var t=new B(this);return null==e?e=S:m(e,0,8),F(t,t.e+1,e)},E.isEqualTo=E.eq=function(e,t){return 0===w(this,new B(e,t))},E.isFinite=function(){return!!this.c},E.isGreaterThan=E.gt=function(e,t){return w(this,new B(e,t))>0},E.isGreaterThanOrEqualTo=E.gte=function(e,t){return 1===(t=w(this,new B(e,t)))||0===t},E.isInteger=function(){return!!this.c&&f(this.e/14)>this.c.length-2},E.isLessThan=E.lt=function(e,t){return 0>w(this,new B(e,t))},E.isLessThanOrEqualTo=E.lte=function(e,t){return -1===(t=w(this,new B(e,t)))||0===t},E.isNaN=function(){return!this.s},E.isNegative=function(){return this.s<0},E.isPositive=function(){return this.s>0},E.isZero=function(){return!!this.c&&0==this.c[0]},E.minus=function(e,t){var r,i,n,o,a=this.s;if(t=(e=new B(e,t)).s,!a||!t)return new B(NaN);if(a!=t)return e.s=-t,this.plus(e);var s=this.e/14,l=e.e/14,c=this.c,u=e.c;if(!s||!l){if(!c||!u)return c?(e.s=-t,e):new B(u?this:NaN);if(!c[0]||!u[0])return u[0]?(e.s=-t,e):new B(c[0]?this:3==S?-0:0)}if(s=f(s),l=f(l),c=c.slice(),a=s-l){for((o=a<0)?(a=-a,n=c):(l=s,n=u),n.reverse(),t=a;t--;n.push(0));n.reverse()}else for(i=(o=(a=c.length)<(t=u.length))?a:t,a=t=0;t<i;t++)if(c[t]!=u[t]){o=c[t]<u[t];break}if(o&&(n=c,c=u,u=n,e.s=-e.s),(t=(i=u.length)-(r=c.length))>0)for(;t--;c[r++]=0);for(t=1e14-1;i>a;){if(c[--i]<u[i]){for(r=i;r&&!c[--r];c[r]=t);--c[r],c[i]+=1e14}c[i]-=u[i]}for(;0==c[0];c.splice(0,1),--l);return c[0]?z(e,c,l):(e.s=3==S?-1:1,e.c=[e.e=0],e)},E.modulo=E.mod=function(e,t){var r,i;return(e=new B(e,t),this.c&&e.s&&(!e.c||e.c[0]))?e.c&&(!this.c||this.c[0])?(9==I?(i=e.s,e.s=1,r=C(this,e,0,3),e.s=i,r.s*=i):r=C(this,e,0,I),(e=this.minus(r.times(e))).c[0]||1!=I||(e.s=this.s),e):new B(this):new B(NaN)},E.multipliedBy=E.times=function(e,t){var r,i,n,o,a,s,l,c,u,d,h,p,g,w=this.c,m=(e=new B(e,t)).c;if(!w||!m||!w[0]||!m[0])return this.s&&e.s&&(!w||w[0]||m)&&(!m||m[0]||w)?(e.s*=this.s,w&&m?(e.c=[0],e.e=0):e.c=e.e=null):e.c=e.e=e.s=null,e;for(i=f(this.e/14)+f(e.e/14),e.s*=this.s,(l=w.length)<(d=m.length)&&(g=w,w=m,m=g,n=l,l=d,d=n),n=l+d,g=[];n--;g.push(0));for(n=d;--n>=0;){for(r=0,h=m[n]%1e7,p=m[n]/1e7|0,o=n+(a=l);o>n;)s=p*(c=w[--a]%1e7)+(u=w[a]/1e7|0)*h,r=((c=h*c+s%1e7*1e7+g[o]+r)/1e14|0)+(s/1e7|0)+p*u,g[o--]=c%1e14;g[o]=r}return r?++i:g.splice(0,1),z(e,g,i)},E.negated=function(){var e=new B(this);return e.s=-e.s||null,e},E.plus=function(e,t){var r,i=this.s;if(t=(e=new B(e,t)).s,!i||!t)return new B(NaN);if(i!=t)return e.s=-t,this.minus(e);var n=this.e/14,o=e.e/14,a=this.c,s=e.c;if(!n||!o){if(!a||!s)return new B(i/0);if(!a[0]||!s[0])return s[0]?e:new B(a[0]?this:0*i)}if(n=f(n),o=f(o),a=a.slice(),i=n-o){for(i>0?(o=n,r=s):(i=-i,r=a),r.reverse();i--;r.push(0));r.reverse()}for((i=a.length)-(t=s.length)<0&&(r=s,s=a,a=r,t=i),i=0;t;)i=(a[--t]=a[t]+s[t]+i)/1e14|0,a[t]=1e14===a[t]?0:a[t]%1e14;return i&&(a=[i].concat(a),++o),z(e,a,o)},E.precision=E.sd=function(e,t){var r,i,n;if(null!=e&&!!e!==e)return m(e,1,1e9),null==t?t=S:m(t,0,8),F(new B(this),e,t);if(!(r=this.c))return null;if(i=14*(n=r.length-1)+1,n=r[n]){for(;n%10==0;n/=10,i--);for(n=r[0];n>=10;n/=10,i++);}return e&&this.e+1>i&&(i=this.e+1),i},E.shiftedBy=function(e){return m(e,-9007199254740991,9007199254740991),this.times("1e"+e)},E.squareRoot=E.sqrt=function(){var e,t,r,i,n,o=this.c,a=this.s,s=this.e,l=A+4,c=new B("0.5");if(1!==a||!o||!o[0])return new B(!a||a<0&&(!o||o[0])?NaN:o?this:1/0);if(0==(a=Math.sqrt(+W(this)))||a==1/0?(((t=g(o)).length+s)%2==0&&(t+="0"),a=Math.sqrt(+t),s=f((s+1)/2)-(s<0||s%2),r=new B(t=a==1/0?"5e"+s:(t=a.toExponential()).slice(0,t.indexOf("e")+1)+s)):r=new B(a+""),r.c[0]){for((a=(s=r.e)+l)<3&&(a=0);;)if(n=r,r=c.times(n.plus(C(this,n,l,1))),g(n.c).slice(0,a)===(t=g(r.c)).slice(0,a)){if(r.e<s&&--a,"9999"!=(t=t.slice(a-3,a+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(F(r,r.e+A+2,1),e=!r.times(r).eq(this));break}if(!i&&(F(n,n.e+A+2,0),n.times(n).eq(this))){r=n;break}l+=4,a+=4,i=1}}return F(r,r.e+A+1,S,e)},E.toExponential=function(e,t){return null!=e&&(m(e,0,1e9),e++),D(this,e,t,1)},E.toFixed=function(e,t){return null!=e&&(m(e,0,1e9),e=e+this.e+1),D(this,e,t)},E.toFormat=function(e,t,r){var i;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=j;else if("object"!=typeof r)throw Error(d+"Argument not an object: "+r);if(i=this.toFixed(e,t),this.c){var n,o=i.split("."),a=+r.groupSize,s=+r.secondaryGroupSize,l=r.groupSeparator||"",c=o[0],u=o[1],h=this.s<0,p=h?c.slice(1):c,f=p.length;if(s&&(n=a,a=s,s=n,f-=n),a>0&&f>0){for(n=f%a||a,c=p.substr(0,n);n<f;n+=a)c+=l+p.substr(n,a);s>0&&(c+=l+p.slice(n)),h&&(c="-"+c)}i=u?c+(r.decimalSeparator||"")+((s=+r.fractionGroupSize)?u.replace(RegExp("\\d{"+s+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):u):c}return(r.prefix||"")+i+(r.suffix||"")},E.toFraction=function(e){var t,r,i,n,o,a,s,l,c,u,h,f,w=this.c;if(null!=e&&(!(s=new B(e)).isInteger()&&(s.c||1!==s.s)||s.lt(_)))throw Error(d+"Argument "+(s.isInteger()?"out of range: ":"not an integer: ")+W(s));if(!w)return new B(this);for(t=new B(_),c=r=new B(_),i=l=new B(_),f=g(w),o=t.e=f.length-this.e-1,t.c[0]=p[(a=o%14)<0?14+a:a],e=!e||s.comparedTo(t)>0?o>0?t:c:s,a=T,T=1/0,s=new B(f),l.c[0]=0;u=C(s,t,0,1),1!=(n=r.plus(u.times(i))).comparedTo(e);)r=i,i=n,c=l.plus(u.times(n=c)),l=n,t=s.minus(u.times(n=t)),s=n;return n=C(e.minus(r),i,0,1),l=l.plus(n.times(c)),r=r.plus(n.times(i)),l.s=c.s=this.s,o*=2,h=1>C(c,i,o,S).minus(this).abs().comparedTo(C(l,r,o,S).minus(this).abs())?[c,i]:[l,r],T=a,h},E.toNumber=function(){return+W(this)},E.toPrecision=function(e,t){return null!=e&&m(e,1,1e9),D(this,e,t,2)},E.toString=function(e){var t,r=this,i=r.s,n=r.e;return null===n?i?(t="Infinity",i<0&&(t="-"+t)):t="NaN":(null==e?t=n<=R||n>=$?v(g(r.c),n):y(g(r.c),n,"0"):10===e&&L?t=y(g((r=F(new B(r),A+n+1,S)).c),r.e,"0"):(m(e,2,M.length,"Base"),t=x(y(g(r.c),n,"0"),10,e,i,!0)),i<0&&r.c[0]&&(t="-"+t)),t},E.valueOf=E.toJSON=function(){return W(this)},E._isBigNumber=!0,E[Symbol.toStringTag]="BigNumber",E[Symbol.for("nodejs.util.inspect.custom")]=E.valueOf,null!=t&&B.set(t),B}();let x={bigNumber:e=>new C(e),multiply(e,t){if(void 0===e||void 0===t)return C(0);let r=new C(e),i=new C(t);return r.multipliedBy(i)}}},9482:function(e,t,r){"use strict";r.d(t,{AccountController:function(){return T},ApiController:function(){return ee},WM:function(){return B},fz:function(){return eg},Lr:function(){return S},ConnectionController:function(){return eh},ConnectorController:function(){return F},bq:function(){return y},j1:function(){return C},Xs:function(){return G},IN:function(){return en},NetworkController:function(){return X},ph:function(){return el},OptionsController:function(){return E},Ie:function(){return H},RouterController:function(){return er},_4:function(){return ew},Si:function(){return ef},SnackController:function(){return $},MO:function(){return M},ThemeController:function(){return U},sl:function(){return eu}}),Symbol();let i=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,a=e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype),s=e=>a(e)&&e[i]||null,l=(e,t=!0)=>{o.set(e,t)},c=e=>"object"==typeof e&&null!==e,u=new WeakMap,d=new WeakSet,[h]=((e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,o=(e,t,r=i)=>{let a=n.get(e);if((null==a?void 0:a[0])===t)return a[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(s,!0),n.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let i=Reflect.get(e,t),n={value:i,enumerable:!0,configurable:!0};if(d.has(i))l(i,!1);else if(i instanceof Promise)delete n.value,n.get=()=>r(i);else if(u.has(i)){let[e,t]=u.get(i);n.value=o(e,t(),r)}Object.defineProperty(s,t,n)}),Object.preventExtensions(s)},a=new WeakMap,h=[1,1],p=i=>{if(!c(i))throw Error("object required");let n=a.get(i);if(n)return n;let l=h[0],f=new Set,g=(e,t=++h[0])=>{l!==t&&(l=t,f.forEach(r=>r(e,t)))},w=h[1],m=(e=++h[1])=>(w===e||f.size||(w=e,v.forEach(([t])=>{let r=t[1](e);r>l&&(l=r)})),l),b=e=>(t,r)=>{let i=[...t];i[1]=[e,...i[1]],g(i,r)},v=new Map,y=(e,t)=>{if(v.has(e))throw Error("prop listener already exists");if(f.size){let r=t[3](b(e));v.set(e,[t,r])}else v.set(e,[t])},C=e=>{var t;let r=v.get(e);r&&(v.delete(e),null==(t=r[1])||t.call(r))},x=e=>{f.add(e),1===f.size&&v.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let i=e[3](b(r));v.set(r,[e,i])});let t=()=>{f.delete(e),0===f.size&&v.forEach(([e,t],r)=>{t&&(t(),v.set(r,[e]))})};return t},k=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),E={deleteProperty(e,t){let r=Reflect.get(e,t);C(t);let i=Reflect.deleteProperty(e,t);return i&&g(["delete",[t],r]),i},set(t,i,n,o){let l=Reflect.has(t,i),h=Reflect.get(t,i,o);if(l&&(e(h,n)||a.has(n)&&e(h,a.get(n))))return!0;C(i),c(n)&&(n=s(n)||n);let f=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,g(["resolve",[i],e])}).catch(e=>{n.status="rejected",n.reason=e,g(["reject",[i],e])});else{!u.has(n)&&r(n)&&(f=p(n));let e=!d.has(f)&&u.get(f);e&&y(i,e)}return Reflect.set(t,i,f,o),g(["set",[i],n,h]),!0}},_=t(k,E);a.set(i,_);let A=[k,m,o,x];return u.set(_,A),Reflect.ownKeys(i).forEach(e=>{let t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(_[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(k,e,t)}),_})=>[p,u,d,e,t,r,i,n,o,a,h])();function p(e={}){return h(e)}function f(e,t,r){let i;let n=u.get(e);n||console.warn("Please use proxy object");let o=[],a=n[3],s=!1,l=a(e=>{if(o.push(e),r){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&t(o.splice(0))}))});return s=!0,()=>{s=!1,l()}}function g(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[i,n,o]=r;return o(i,n(),t)}function w(e){return d.add(e),e}function m(e,t,r,i){let n=e[t];return f(e,()=>{let i=e[t];Object.is(n,i)||r(n=i)},i)}Symbol();let b="https://secure.walletconnect.com",v=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],y={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:b,SECURE_SITE_DASHBOARD:`${b}/dashboard`,SECURE_SITE_FAVICON:`${b}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e"},C={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),checkCaipNetwork:(e,t="")=>e?.id.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){let e=window.navigator.userAgent.toLowerCase();return C.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return C.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=y.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=y.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+y.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...i)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(C.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(e,t){if(!C.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(e,t,r){window.open(e,t,r||"noreferrer noopener")},preloadImage:async e=>Promise.race([new Promise((t,r)=>{let i=new Image;i.onload=t,i.onerror=r,i.crossOrigin="anonymous",i.src=e}),C.wait(2e3)]),formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t??""}`:`0.000 ${t??""}`},formatBalance2(e,t){let r;if("0"===e)r="0";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:r??"0",rest:"0"===r?"000":"",symbol:t}},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return y.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>C.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>C.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>C.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){let r={};return t&&e&&(e.forEach((e,t)=>{r[e]=t}),t.sort((e,t)=>{let i=r[e.id],n=r[t.id];return void 0!==i&&void 0!==n?i-n:void 0!==i?-1:void 0!==n?1:0})),t},calculateBalance(e){let t=0;for(let r of e)t+=r.value??0;return t},formatTokenBalance(e){let[t,r]=e.toFixed(2).split(".");return{dollars:t,pennies:r}},isAddress:e=>!!(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e)))};class x{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"GET",headers:e,signal:t,cache:"no-cache"})).json()}async getBlob({headers:e,signal:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:r,...i}){let n=this.createUrl(i);return(await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async put({body:e,headers:t,signal:r,...i}){let n=this.createUrl(i);return(await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}async delete({body:e,headers:t,signal:r,...i}){let n=this.createUrl(i);return(await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r})).json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let k=p({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),E={state:k,subscribeKey:(e,t)=>m(k,e,t),setProjectId(e){k.projectId=e},setAllWallets(e){k.allWallets=e},setIncludeWalletIds(e){k.includeWalletIds=e},setExcludeWalletIds(e){k.excludeWalletIds=e},setFeaturedWalletIds(e){k.featuredWalletIds=e},setTokens(e){k.tokens=e},setTermsConditionsUrl(e){k.termsConditionsUrl=e},setPrivacyPolicyUrl(e){k.privacyPolicyUrl=e},setCustomWallets(e){k.customWallets=e},setIsSiweEnabled(e){k.isSiweEnabled=e},setEnableAnalytics(e){k.enableAnalytics=e},setSdkVersion(e){k.sdkVersion=e},setMetadata(e){k.metadata=e},setOnrampEnabled(e){k.enableOnramp=e},setWalletFeaturesEnabled(e){k.enableWalletFeatures=e}},_={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},A=new x({baseUrl:C.getBlockchainApiUrl()}),S={fetchIdentity:({caipChainId:e,address:t})=>A.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:E.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:r,onramp:i,signal:n})=>A.get({path:`/v1/account/${e}/history?projectId=${t}${i?`&onramp=${i}`:""}`,params:r?{cursor:r}:{},signal:n}),getBalance:async e=>A.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",projectId:E.state.projectId}}),generateOnRampURL:async({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:i,paymentAmount:n})=>(await A.post({path:`/v1/generators/onrampurl?projectId=${E.state.projectId}`,body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:n}})).url,async getOnrampOptions(){try{return await A.get({path:`/v1/onramp/options?projectId=${E.state.projectId}`})}catch(e){return _}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}){try{return await A.post({path:`/v1/onramp/quote?projectId=${E.state.projectId}`,body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}})}catch(e){return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}}},R=p({message:"",variant:"success",open:!1}),$={state:R,subscribeKey:(e,t)=>m(R,e,t),showSuccess(e){R.message=e,R.variant="success",R.open=!0},showError(e){let t=C.parseError(e);R.message=t,R.variant="error",R.open=!0},hide(){R.open=!1}},O=p({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),T={state:O,subscribe:e=>f(O,()=>e(O)),subscribeKey:(e,t)=>m(O,e,t),setIsConnected(e){O.isConnected=e},setCaipAddress(e){O.caipAddress=e,O.address=e?C.getPlainAddress(e):void 0},setBalance(e,t){O.balance=e,O.balanceSymbol=t},setProfileName(e){O.profileName=e},setProfileImage(e){O.profileImage=e},setAddressExplorerUrl(e){O.addressExplorerUrl=e},setSmartAccountDeployed(e){O.smartAccountDeployed=e},setCurrentTab(e){O.currentTab=e},setTokenBalance(e){e&&(O.tokenBalance=w(e))},setConnectedWalletInfo(e){O.connectedWalletInfo=e},async fetchTokenBalance(){try{if(O.address){let e=await S.getBalance(O.address);this.setTokenBalance(e.balances)}}catch(e){$.showError("Failed to fetch token balance")}},resetAccount(){O.isConnected=!1,O.smartAccountDeployed=!1,O.currentTab=0,O.caipAddress=void 0,O.address=void 0,O.balance=void 0,O.balanceSymbol=void 0,O.profileName=void 0,O.profileImage=void 0,O.addressExplorerUrl=void 0,O.tokenBalance=[],O.connectedWalletInfo=void 0}},P="WALLETCONNECT_DEEPLINK_CHOICE",I="@w3m/recent",N="@w3m/connected_wallet_image_url",j="@w3m/connected_connector",M={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(P,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(P);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(P)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=M.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(I,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(I);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(N,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(N)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(j,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(j)}catch{console.info("Unable to get Connected Connector")}}},L=p({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),B={state:L,subscribeNetworkImages:e=>f(L.networkImages,()=>e(L.networkImages)),subscribeKey:(e,t)=>m(L,e,t),subscribe:e=>f(L,()=>e(L)),setWalletImage(e,t){L.walletImages[e]=t},setNetworkImage(e,t){L.networkImages[e]=t},setConnectorImage(e,t){L.connectorImages[e]=t},setTokenImage(e,t){L.tokenImages[e]=t},setCurrencyImage(e,t){L.currencyImages[e]=t}},D=p({themeMode:"dark",themeVariables:{}}),U={state:D,subscribe:e=>f(D,()=>e(D)),setThemeMode(e){D.themeMode=e;try{let e=F.getEmailConnector();e&&e.provider.syncTheme({themeMode:U.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(e){D.themeVariables={...D.themeVariables,...e};try{let e=F.getEmailConnector();e&&e.provider.syncTheme({themeVariables:U.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot:()=>g(D)},z=p({connectors:[]}),F={state:z,subscribeKey:(e,t)=>m(z,e,t),setConnectors(e){z.connectors=e.map(e=>w(e))},addConnector(e){if(z.connectors.push(w(e)),"w3mEmail"===e.id){let t=g(E.state);e?.provider?.syncDappData?.({metadata:t.metadata,sdkVersion:t.sdkVersion,projectId:t.projectId}),e.provider.syncTheme({themeMode:U.getSnapshot().themeMode,themeVariables:U.getSnapshot().themeVariables})}},getEmailConnector:()=>z.connectors.find(e=>"EMAIL"===e.type),getAnnouncedConnectorRdns:()=>z.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>z.connectors,getConnector:(e,t)=>z.connectors.find(r=>r.explorerId===e||r.info?.rdns===t)},W=p({open:!1,selectedNetworkId:void 0}),H={state:W,subscribe:e=>f(W,()=>e(W)),set(e){Object.assign(W,{...W,...e})}},Z=new x({baseUrl:C.getAnalyticsUrl()}),V=["MODAL_CREATED"],q=p({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),G={state:q,subscribe:e=>f(q,()=>e(q)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=E.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(V.includes(e.data.event)||"undefined"==typeof window)return;await Z.post({path:"/e",headers:G._getApiHeaders(),body:{eventId:C.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){q.timestamp=Date.now(),q.data=e,E.state.enableAnalytics&&G._sendAnalyticsEvent(q)}};var Y=r(77832);let K=p({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),X={state:K,subscribe:e=>f(K,()=>e(K)),subscribeKey:(e,t)=>m(K,e,t),_getClient(){if(!K._client)throw Error("NetworkController client not set");return K._client},setClient(e){K._client=w(e)},setCaipNetwork(e){K.caipNetwork=e,H.set({selectedNetworkId:e?.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(e){K.caipNetwork=e,H.set({selectedNetworkId:e?.id}),K.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){K.requestedCaipNetworks=e},setAllowUnsupportedChain(e){K.allowUnsupportedChain=e},setSmartAccountEnabledNetworks(e){K.smartAccountEnabledNetworks=e},getRequestedCaipNetworks(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=K;return C.sortRequestedNetworks(e,t)},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();K.supportsAllNetworks=e.supportsAllNetworks,K.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),K.caipNetwork=e,e&&G.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.id}})},checkIfSupportedNetwork(){K.isUnsupportedChain=!K.requestedCaipNetworks?.some(e=>e.id===K.caipNetwork?.id),K.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){let e=Y.p1.caipNetworkIdToNumber(K.caipNetwork?.id);return!!e&&!!K.smartAccountEnabledNetworks?.includes(e)},resetNetwork(){K.isDefaultCaipNetwork||(K.caipNetwork=void 0),K.approvedCaipNetworkIds=void 0,K.supportsAllNetworks=!0,K.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout(()=>{en.open({view:"UnsupportedChain"})},300)}},J=new x({baseUrl:C.getApiUrl()}),Q=p({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),ee={state:Q,subscribeKey:(e,t)=>m(Q,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=E.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${J.baseUrl}/getWalletImage/${e}`,r=await J.getBlob({path:t,headers:ee._getApiHeaders()});B.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${J.baseUrl}/public/getAssetImage/${e}`,r=await J.getBlob({path:t,headers:ee._getApiHeaders()});B.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${J.baseUrl}/public/getAssetImage/${e}`,r=await J.getBlob({path:t,headers:ee._getApiHeaders()});B.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){let t=`${J.baseUrl}/public/getCurrencyImage/${e}`,r=await J.getBlob({path:t,headers:ee._getApiHeaders()});B.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){let t=`${J.baseUrl}/public/getTokenImage/${e}`,r=await J.getBlob({path:t,headers:ee._getApiHeaders()});B.setTokenImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=X.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>ee._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=F.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>ee._fetchConnectorImage(e)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(e=>ee._fetchCurrencyImage(e)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(e=>ee._fetchTokenImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=E.state;if(e?.length){let{data:t}=await J.get({path:"/getWallets",headers:ee._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>ee._fetchWalletImage(e))),Q.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=E.state,i=[...t??[],...r??[]].filter(Boolean),{data:n,count:o}=await J.get({path:"/getWallets",headers:ee._getApiHeaders(),params:{page:"1",chains:X.state.caipNetwork?.id,entries:"4",include:e?.join(","),exclude:i?.join(",")}}),a=M.getRecentWallets(),s=n.map(e=>e.image_id).filter(Boolean),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>ee._fetchWalletImage(e))),Q.recommended=n,Q.count=o??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:i}=E.state,n=[...Q.recommended.map(({id:e})=>e),...r??[],...i??[]].filter(Boolean),{data:o,count:a}=await J.get({path:"/getWallets",headers:ee._getApiHeaders(),params:{page:String(e),entries:"40",chains:X.state.caipNetwork?.id,include:t?.join(","),exclude:n.join(",")}}),s=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s.map(e=>ee._fetchWalletImage(e)),C.wait(300)]),Q.wallets=[...Q.wallets,...o],Q.count=a>Q.count?a:Q.count,Q.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=E.state;Q.search=[];let{data:i}=await J.get({path:"/getWallets",headers:ee._getApiHeaders(),params:{page:"1",entries:"100",search:e,chains:X.state.caipNetwork?.id,include:t?.join(","),exclude:r?.join(",")}}),n=i.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...n.map(e=>ee._fetchWalletImage(e)),C.wait(300)]),Q.search=i},async reFetchWallets(){Q.page=1,Q.wallets=[],await ee.fetchFeaturedWallets(),await ee.fetchRecommendedWallets()},prefetch(){let e=[ee.fetchFeaturedWallets(),ee.fetchRecommendedWallets(),ee.fetchNetworkImages(),ee.fetchConnectorImages()];void 0===E.state.enableAnalytics&&e.push(ee.fetchAnalyticsConfig()),Q.prefetchPromise=Promise.race([Promise.allSettled(e),C.wait(3e3)])},async fetchAnalyticsConfig(){let{isAnalyticsEnabled:e}=await J.get({path:"/getAnalyticsConfig",headers:ee._getApiHeaders()});E.setEnableAnalytics(e)}},et=p({view:"Connect",history:["Connect"]}),er={state:et,subscribeKey:(e,t)=>m(et,e,t),push(e,t){e!==et.view&&(et.view=e,et.history.push(e),et.data=t)},reset(e){et.view=e,et.history=[e]},replace(e,t){et.history.length>1&&et.history.at(-1)!==e&&(et.view=e,et.history[et.history.length-1]=e,et.data=t)},goBack(){if(et.history.length>1){et.history.pop();let[e]=et.history.slice(-1);e&&(et.view=e)}},goBackToIndex(e){if(et.history.length>1){et.history=et.history.slice(0,e+1);let[t]=et.history.slice(-1);t&&(et.view=t)}}},ei=p({loading:!1,open:!1}),en={state:ei,subscribe:e=>f(ei,()=>e(ei)),subscribeKey:(e,t)=>m(ei,e,t),async open(e){await ee.state.prefetchPromise;let t=T.state.isConnected;e?.view?er.reset(e.view):t?er.reset("Account"):er.reset("Connect"),ei.open=!0,H.set({open:!0}),G.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:t}})},close(){let e=T.state.isConnected;ei.open=!1,H.set({open:!1}),G.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){ei.loading=e}},eo={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},ea={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},es=p({providers:v,selectedProvider:null,error:null,purchaseCurrency:eo,paymentCurrency:ea,purchaseCurrencies:[eo],paymentCurrencies:[],quotesLoading:!1}),el={state:es,subscribe:e=>f(es,()=>e(es)),subscribeKey:(e,t)=>m(es,e,t),setSelectedProvider(e){es.selectedProvider=e},setPurchaseCurrency(e){es.purchaseCurrency=e},setPaymentCurrency(e){es.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){let e=await S.getOnrampOptions();es.purchaseCurrencies=e.purchaseCurrencies,es.paymentCurrencies=e.paymentCurrencies,es.paymentCurrency=e.paymentCurrencies[0]||ea,es.purchaseCurrency=e.purchaseCurrencies[0]||eo,await ee.fetchCurrencyImages(e.paymentCurrencies.map(e=>e.id)),await ee.fetchTokenImages(e.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){es.quotesLoading=!0;try{let e=await S.getOnrampQuote({purchaseCurrency:es.purchaseCurrency,paymentCurrency:es.paymentCurrency,amount:es.paymentAmount?.toString()||"0",network:es.purchaseCurrency?.symbol});return es.quotesLoading=!1,es.purchaseAmount=Number(e.purchaseAmount.amount),e}catch(e){return es.error=e.message,es.quotesLoading=!1,null}finally{es.quotesLoading=!1}},resetState(){es.providers=v,es.selectedProvider=null,es.error=null,es.purchaseCurrency=eo,es.paymentCurrency=ea,es.purchaseCurrencies=[eo],es.paymentCurrencies=[],es.paymentAmount=void 0,es.purchaseAmount=void 0,es.quotesLoading=!1}},ec=p({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),eu={state:ec,subscribe:e=>f(ec,()=>e(ec)),async fetchTransactions(e,t){let{projectId:r}=E.state;if(!r||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");ec.loading=!0;try{let i=await S.fetchTransactions({account:e,projectId:r,cursor:ec.next,onramp:t}),n=this.filterSpamTransactions(i.data),o=[...ec.transactions,...n];ec.loading=!1,"coinbase"===t?ec.coinbaseTransactions=this.groupTransactionsByYearAndMonth(ec.coinbaseTransactions,i.data):(ec.transactions=o,ec.transactionsByYear=this.groupTransactionsByYearAndMonth(ec.transactionsByYear,n)),ec.empty=0===o.length,ec.next=i.next?i.next:void 0}catch(t){G.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:r,cursor:ec.next}}),$.showError("Failed to fetch transactions"),ec.loading=!1,ec.empty=!0,ec.next=void 0}},groupTransactionsByYearAndMonth:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear(),i=new Date(t.metadata.minedAt).getMonth(),n=e[r]??{},o=(n[i]??[]).filter(e=>e.id!==t.id);e[r]={...n,[i]:[...o,t].sort((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime())}}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),clearCursor(){ec.next=void 0},resetTransactions(){ec.transactions=[],ec.transactionsByYear={},ec.loading=!1,ec.empty=!1,ec.next=void 0}},ed=p({wcError:!1,buffering:!1}),eh={state:ed,subscribeKey:(e,t)=>m(ed,e,t),_getClient(){if(!ed._client)throw Error("ConnectionController client not set");return ed._client},setClient(e){ed._client=w(e)},connectWalletConnect(){ed.wcPromise=this._getClient().connectWalletConnect(e=>{ed.wcUri=e,ed.wcPairingExpiry=C.getPairingExpiry()}),M.setConnectedConnector("WALLET_CONNECT")},async connectExternal(e){await this._getClient().connectExternal?.(e),M.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){ed.wcUri=void 0,ed.wcPairingExpiry=void 0,ed.wcPromise=void 0,ed.wcLinking=void 0,ed.recentWallet=void 0,eu.resetTransactions(),M.deleteWalletConnectDeepLink()},setWcLinking(e){ed.wcLinking=e},setWcError(e){ed.wcError=e,ed.buffering=!1},setRecentWallet(e){ed.recentWallet=e},setBuffering(e){ed.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},ep=p({}),ef={state:ep,subscribe:e=>f(ep,()=>e(ep)),subscribeKey:(e,t)=>m(ep,e,t),setToken(e){e&&(ep.token=w(e))},setTokenAmount(e){ep.sendTokenAmount=e},setReceiverAddress(e){ep.receiverAddress=e},setReceiverProfileImageUrl(e){ep.receiverProfileImageUrl=e},setReceiverProfileName(e){ep.receiverProfileName=e},resetSend(){ep.token=void 0,ep.sendTokenAmount=void 0,ep.receiverAddress=void 0,ep.receiverProfileImageUrl=void 0,ep.receiverProfileName=void 0}},eg={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?B.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?B.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?B.state.connectorImages[e.imageId]:void 0},ew={goBackOrCloseModal(){er.state.history.length>1?er.goBack():en.close()},navigateAfterNetworkSwitch(){let{history:e}=er.state,t=e.findIndex(e=>"Networks"===e);t>=1?er.goBackToIndex(t-1):en.close()}}},90078:function(e,t,r){"use strict";r.r(t),r.d(t,{W3mModal:function(){return u}});var i=r(9482),n=r(28080),o=r(77996),a=r(37380),s=(0,o.iv)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let c="scroll-lock",u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.IN.state.open,this.caipAddress=i.AccountController.state.caipAddress,this.isSiweEnabled=i.OptionsController.state.isSiweEnabled,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),i.AccountController.subscribe(e=>this.onNewAccountState(e))),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?(0,o.dy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){let{SIWEController:e}=await r.e(707).then(r.bind(r,20707));"success"!==e.state.status&&await i.ConnectionController.disconnect()}i.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=i.ThemeController.state,r=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,i.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){let{isConnected:t,caipAddress:i}=e;if(this.isSiweEnabled){let{SIWEController:e}=await r.e(707).then(r.bind(r,20707));t&&!this.caipAddress&&(this.caipAddress=i),t&&i&&this.caipAddress!==i&&(await e.signOut(),this.onSiweNavigation(),this.caipAddress=i);try{let r=await e.getSession();r&&!t?await e.signOut():t&&!r&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?i.RouterController.push("ConnectingSiwe"):i.IN.open({view:"ConnectingSiwe"})}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),l([(0,a.SB)()],u.prototype,"caipAddress",void 0),l([(0,a.SB)()],u.prototype,"isSiweEnabled",void 0),u=l([(0,n.customElement)("w3m-modal")],u)},28080:function(e,t,r){"use strict";let i,n,o;r.r(t),r.d(t,{TransactionUtil:function(){return nb},UiHelperUtil:function(){return tv},WuiAccountButton:function(){return tT},WuiAllWalletsImage:function(){return tL},WuiAvatar:function(){return t_},WuiBalance:function(){return iq},WuiBanner:function(){return i4},WuiButton:function(){return tz},WuiCard:function(){return y},WuiCardSelect:function(){return tQ},WuiCardSelectLoader:function(){return tZ},WuiChip:function(){return t2},WuiChipButton:function(){return iQ},WuiCompatibleNetwork:function(){return i2},WuiConnectButton:function(){return t4},WuiCtaButton:function(){return t9},WuiDetailsGroup:function(){return re},WuiDetailsGroupItem:function(){return ri},WuiEmailInput:function(){return ru},WuiFlex:function(){return tx},WuiGrid:function(){return nh},WuiIcon:function(){return eM},WuiIconBox:function(){return tR},WuiIconLink:function(){return rp},WuiImage:function(){return eD},WuiInputAmount:function(){return na},WuiInputElement:function(){return rw},WuiInputNumeric:function(){return rv},WuiInputText:function(){return rs},WuiLink:function(){return rx},WuiListAccordion:function(){return ix},WuiListContent:function(){return i_},WuiListDescription:function(){return nt},WuiListItem:function(){return r_},WuiListNetwork:function(){return iR},WuiListToken:function(){return i9},WuiListWallet:function(){return rD},WuiListWalletTransaction:function(){return iT},WuiLoadingHexagon:function(){return ez},WuiLoadingSpinner:function(){return eH},WuiLoadingThumbnail:function(){return eq},WuiLogo:function(){return rF},WuiLogoSelect:function(){return rZ},WuiNetworkButton:function(){return rG},WuiNetworkImage:function(){return tK},WuiNoticeCard:function(){return iv},WuiOnRampActivityItem:function(){return ij},WuiOnRampProviderItem:function(){return iB},WuiOtp:function(){return rX},WuiPreviewItem:function(){return nc},WuiProfileButton:function(){return iK},WuiPromo:function(){return iz},WuiQrCode:function(){return r3},WuiSearchBar:function(){return r4},WuiSeparator:function(){return ng},WuiShimmer:function(){return eK},WuiSnackbar:function(){return r9},WuiTabs:function(){return it},WuiTag:function(){return rM},WuiText:function(){return e2},WuiTokenButton:function(){return io},WuiTokenListItem:function(){return ih},WuiTooltip:function(){return il},WuiTooltipSelect:function(){return iH},WuiTransactionListItem:function(){return rT},WuiTransactionListItemLoader:function(){return rI},WuiTransactionVisual:function(){return rR},WuiVisual:function(){return tm},WuiVisualThumbnail:function(){return iw},WuiWalletImage:function(){return tN},convertInputMaskBottomSvg:function(){return c},convertInputMaskTopSvg:function(){return u},customElement:function(){return b},initializeTheming:function(){return d},setColorTheme:function(){return h},setThemeVariables:function(){return p}});var a,s,l=r(77996);let c=(0,l.YP)`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,u=(0,l.YP)`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;function d(e,t){i=document.createElement("style"),n=document.createElement("style"),o=document.createElement("style"),i.textContent=f(e).core.cssText,n.textContent=f(e).dark.cssText,o.textContent=f(e).light.cssText,document.head.appendChild(i),document.head.appendChild(n),document.head.appendChild(o),h(t)}function h(e){n&&o&&("light"===e?(n.removeAttribute("media"),o.media="enabled"):(o.removeAttribute("media"),n.media="enabled"))}function p(e){i&&n&&o&&(i.textContent=f(e).core.cssText,n.textContent=f(e).dark.cssText,o.textContent=f(e).light.cssText)}function f(e){return{core:(0,l.iv)`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${(0,l.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,l.$m)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,l.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,l.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,l.$m)(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:(0,l.iv)`
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:(0,l.iv)`
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}let g=(0,l.iv)`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,w=(0,l.iv)`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,m=(0,l.iv)`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function b(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var v=(0,l.iv)`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let y=class extends l.oi{render(){return(0,l.dy)`<slot></slot>`}};y.styles=[g,v],y=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([b("wui-card")],y);var C=r(37380),x=(0,l.iv)`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let k=(0,l.YP)`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,E=(0,l.YP)`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,_=(0,l.YP)`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,A=(0,l.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,S=(0,l.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,R=(0,l.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,$=(0,l.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,O=(0,l.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,T=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,P=(0,l.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,I=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,N=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,j=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,M=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,L=(0,l.YP)`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,B=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,D=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,U=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,z=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,F=(0,l.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,W=(0,l.YP)`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,H=(0,l.YP)` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Z=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,V=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,q=(0,l.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,G=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Y=(0,l.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,K=(0,l.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,X=(0,l.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,J=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Q=(0,l.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ee=(0,l.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,et=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,er=(0,l.YP)`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,ei=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,en=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,eo=(0,l.YP)`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ea=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,es=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,el=(0,l.YP)` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ec=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,eu=(0,l.YP)`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,ed=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,eh=(0,l.YP)`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,ep=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ef=(0,l.YP)`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,eg=(0,l.YP)`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,ew=(0,l.YP)`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,em=(0,l.YP)`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eb=(0,l.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,ev=(0,l.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ey=(0,l.YP)`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,eC=(0,l.YP)`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,ex=(0,l.YP)`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,ek=(0,l.YP)`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,eE=(0,l.YP)`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,e_=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,eA=(0,l.YP)`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,eS=(0,l.YP)`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,eR=(0,l.YP)`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,e$=(0,l.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,eO=(0,l.YP)`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,eT=(0,l.YP)`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,eP=(0,l.YP)`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,eI=(0,l.YP)`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var eN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ej={add:W,allWallets:k,arrowBottomCircle:E,appStore:_,apple:A,arrowBottom:S,arrowLeft:R,arrowRight:$,arrowTop:O,bank:e$,browser:T,card:eO,checkmark:P,chevronBottom:I,checkmarkBold:eI,chevronLeft:N,chevronRight:j,chevronTop:M,chromeStore:L,clock:B,close:D,compass:z,coinPlaceholder:U,copy:F,cursor:H,cursorTransparent:eP,desktop:Z,disconnect:V,discord:q,etherscan:G,extension:Y,externalLink:K,facebook:X,filters:J,github:Q,google:ee,helpCircle:et,infoCircle:er,mail:ei,mobile:en,networkPlaceholder:eo,nftPlaceholder:ea,off:es,playStore:el,plus:eT,qrCode:ec,recycleHorizontal:eR,refresh:eu,search:ed,send:eh,swapHorizontal:ep,swapHorizontalMedium:eg,swapHorizontalBold:ef,swapVertical:em,swapHorizontalRoundedBold:ew,telegram:eb,twitch:ev,twitter:ey,twitterIcon:eC,verify:ex,verifyFilled:ek,wallet:e_,walletConnect:eA,walletPlaceholder:eE,warningCircle:eS},eM=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,(0,l.dy)`${ej[this.name]}`}};eM.styles=[g,m,x],eN([(0,C.Cb)()],eM.prototype,"size",void 0),eN([(0,C.Cb)()],eM.prototype,"name",void 0),eN([(0,C.Cb)()],eM.prototype,"color",void 0),eM=eN([b("wui-icon")],eM);var eL=(0,l.iv)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,eB=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eD=class extends l.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,l.dy)`<img src=${this.src} alt=${this.alt} />`}};eD.styles=[g,m,eL],eB([(0,C.Cb)()],eD.prototype,"src",void 0),eB([(0,C.Cb)()],eD.prototype,"alt",void 0),eB([(0,C.Cb)()],eD.prototype,"size",void 0),eD=eB([b("wui-image")],eD);var eU=(0,l.iv)`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let ez=class extends l.oi{render(){return(0,l.dy)`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};ez.styles=[g,eU],ez=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([b("wui-loading-hexagon")],ez);var eF=(0,l.iv)`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,eW=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eH=class extends l.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,(0,l.dy)`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};eH.styles=[g,eF],eW([(0,C.Cb)()],eH.prototype,"color",void 0),eW([(0,C.Cb)()],eH.prototype,"size",void 0),eH=eW([b("wui-loading-spinner")],eH);var eZ=(0,l.iv)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eV=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eq=class extends l.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return(0,l.dy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};eq.styles=[g,eZ],eV([(0,C.Cb)({type:Number})],eq.prototype,"radius",void 0),eq=eV([b("wui-loading-thumbnail")],eq);var eG=(0,l.iv)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,eY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eK=class extends l.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,l.dy)`<slot></slot>`}};eK.styles=[eG],eY([(0,C.Cb)()],eK.prototype,"width",void 0),eY([(0,C.Cb)()],eK.prototype,"height",void 0),eY([(0,C.Cb)()],eK.prototype,"borderRadius",void 0),eK=eY([b("wui-shimmer")],eK);var eX=r(69699),eJ=r(48476);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eQ=(0,eJ.XM)(class extends eJ.Xe{constructor(e){if(super(e),e.type!==eJ.pX.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return eX.Jb}});var e0=(0,l.iv)`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,e1=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let e2=class extends l.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,(0,l.dy)`<slot class=${eQ(e)}></slot>`}};e2.styles=[g,e0],e1([(0,C.Cb)()],e2.prototype,"variant",void 0),e1([(0,C.Cb)()],e2.prototype,"color",void 0),e1([(0,C.Cb)()],e2.prototype,"align",void 0),e2=e1([b("wui-text")],e2);let e3=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,e5=(0,l.YP)`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,e4=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,e6=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,e8=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,e9=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,e7=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,te=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,tt=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,tr=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,ti=(0,l.YP)`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tn=(0,l.YP)`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,to=(0,l.YP)`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,ta=(0,l.YP)`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,ts=(0,l.YP)`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,tl=(0,l.YP)`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,tc=(0,l.YP)`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,tu=(0,l.YP)`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,td=(0,l.YP)`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,th=(0,l.YP)`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,tp=(0,l.YP)`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;var tf=(0,l.iv)`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`,tg=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tw={browser:e3,dao:e5,defi:e4,defiAlt:e6,eth:e8,layers:e9,lock:e7,login:te,network:tt,nft:tr,noun:ti,profile:tn,system:to,coinbase:ta,onrampCard:tu,moonpay:ts,stripe:tl,paypal:tc,google:td,pencil:th,lightbulb:tp},tm=class extends l.oi{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,(0,l.dy)`${tw[this.name]}`}};tm.styles=[g,tf],tg([(0,C.Cb)()],tm.prototype,"name",void 0),tg([(0,C.Cb)()],tm.prototype,"size",void 0),tm=tg([b("wui-visual")],tm);var tb=r(35592);let tv={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(i?.replace("px","")),o=`${n}% ${n}% at 65% 40%`,a=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);a.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${a[0]};
    --local-color-2: ${a[1]};
    --local-color-3: ${a[2]};
    --local-color-4: ${a[3]};
    --local-color-5: ${a[4]};
    --local-radial-circle: ${o}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,i,n]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(e){let t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber:(e,t,r)=>Math.abs(e)>=t?Number(e.toFixed(r)):e,formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})};var ty=(0,l.iv)`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,tC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tx=class extends l.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tv.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tv.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tv.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tv.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tv.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tv.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tv.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tv.getSpacingStyles(this.margin,3)};
    `,(0,l.dy)`<slot></slot>`}};tx.styles=[g,ty],tC([(0,C.Cb)()],tx.prototype,"flexDirection",void 0),tC([(0,C.Cb)()],tx.prototype,"flexWrap",void 0),tC([(0,C.Cb)()],tx.prototype,"flexBasis",void 0),tC([(0,C.Cb)()],tx.prototype,"flexGrow",void 0),tC([(0,C.Cb)()],tx.prototype,"flexShrink",void 0),tC([(0,C.Cb)()],tx.prototype,"alignItems",void 0),tC([(0,C.Cb)()],tx.prototype,"justifyContent",void 0),tC([(0,C.Cb)()],tx.prototype,"columnGap",void 0),tC([(0,C.Cb)()],tx.prototype,"rowGap",void 0),tC([(0,C.Cb)()],tx.prototype,"gap",void 0),tC([(0,C.Cb)()],tx.prototype,"padding",void 0),tC([(0,C.Cb)()],tx.prototype,"margin",void 0),tx=tC([b("wui-flex")],tx);var tk=(0,l.iv)`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,tE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t_=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return(0,l.dy)`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",(0,l.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=tv.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};t_.styles=[g,tk],tE([(0,C.Cb)()],t_.prototype,"imageSrc",void 0),tE([(0,C.Cb)()],t_.prototype,"alt",void 0),tE([(0,C.Cb)()],t_.prototype,"address",void 0),t_=tE([b("wui-avatar")],t_);var tA=(0,l.iv)`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,tS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tR=class extends l.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,i="gray"===this.background,n="opaque"===this.background,o="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n,a=`var(--wui-color-${this.backgroundColor})`;return o?a=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(a=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${a};
       --local-bg-mix: ${o||i?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":r?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,(0,l.dy)` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};tR.styles=[g,w,tA],tS([(0,C.Cb)()],tR.prototype,"size",void 0),tS([(0,C.Cb)()],tR.prototype,"backgroundColor",void 0),tS([(0,C.Cb)()],tR.prototype,"iconColor",void 0),tS([(0,C.Cb)()],tR.prototype,"iconSize",void 0),tS([(0,C.Cb)()],tR.prototype,"background",void 0),tS([(0,C.Cb)({type:Boolean})],tR.prototype,"border",void 0),tS([(0,C.Cb)()],tR.prototype,"borderColor",void 0),tS([(0,C.Cb)()],tR.prototype,"icon",void 0),tR=tS([b("wui-icon-box")],tR);var t$=(0,l.iv)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,tO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tT=class extends l.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return(0,l.dy)`
      <button
        ?disabled=${this.disabled}
        class=${(0,tb.o)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?tv.getTruncateString({string:this.isProfileName?this.profileName:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return(0,l.dy)` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?(0,l.dy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,l.dy)`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return(0,l.dy)`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};tT.styles=[g,w,t$],tO([(0,C.Cb)()],tT.prototype,"networkSrc",void 0),tO([(0,C.Cb)()],tT.prototype,"avatarSrc",void 0),tO([(0,C.Cb)()],tT.prototype,"balance",void 0),tO([(0,C.Cb)({type:Boolean})],tT.prototype,"isUnsupportedChain",void 0),tO([(0,C.Cb)({type:Boolean})],tT.prototype,"disabled",void 0),tO([(0,C.Cb)({type:Boolean})],tT.prototype,"isProfileName",void 0),tO([(0,C.Cb)()],tT.prototype,"address",void 0),tO([(0,C.Cb)()],tT.prototype,"profileName",void 0),tO([(0,C.Cb)()],tT.prototype,"charsStart",void 0),tO([(0,C.Cb)()],tT.prototype,"charsEnd",void 0),tT=tO([b("wui-account-button")],tT);var tP=(0,l.iv)`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`,tI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tN=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),(0,l.dy)`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?(0,l.dy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?(0,l.dy)`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:(0,l.dy)`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tN.styles=[g,tP],tI([(0,C.Cb)()],tN.prototype,"size",void 0),tI([(0,C.Cb)()],tN.prototype,"name",void 0),tI([(0,C.Cb)()],tN.prototype,"imageSrc",void 0),tI([(0,C.Cb)()],tN.prototype,"walletIcon",void 0),tI([(0,C.Cb)({type:Boolean})],tN.prototype,"installed",void 0),tI([(0,C.Cb)()],tN.prototype,"badgeSize",void 0),tN=tI([b("wui-wallet-image")],tN);var tj=(0,l.iv)`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,tM=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tL=class extends l.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return(0,l.dy)`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>(0,l.dy)`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,tb.o)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>(0,l.dy)` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};tL.styles=[g,tj],tM([(0,C.Cb)({type:Array})],tL.prototype,"walletImages",void 0),tL=tM([b("wui-all-wallets-image")],tL);var tB=(0,l.iv)`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,tD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tU={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"},tz=class extends l.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let e=this.textVariant??tU[this.size];return(0,l.dy)`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?(0,l.dy)`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:(0,l.dy)``}};tz.styles=[g,w,tB],tD([(0,C.Cb)()],tz.prototype,"size",void 0),tD([(0,C.Cb)({type:Boolean})],tz.prototype,"disabled",void 0),tD([(0,C.Cb)({type:Boolean})],tz.prototype,"fullWidth",void 0),tD([(0,C.Cb)({type:Boolean})],tz.prototype,"loading",void 0),tD([(0,C.Cb)()],tz.prototype,"variant",void 0),tD([(0,C.Cb)({type:Boolean})],tz.prototype,"hasIconLeft",void 0),tD([(0,C.Cb)({type:Boolean})],tz.prototype,"hasIconRight",void 0),tD([(0,C.Cb)()],tz.prototype,"borderRadius",void 0),tD([(0,C.Cb)()],tz.prototype,"textVariant",void 0),tz=tD([b("wui-button")],tz);let tF=(0,l.YP)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tW=(0,l.iv)`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,tH=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tZ=class extends l.oi{constructor(){super(...arguments),this.type="wallet"}render(){return(0,l.dy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?(0,l.dy)` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tF}`:(0,l.dy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tZ.styles=[g,w,tW],tH([(0,C.Cb)()],tZ.prototype,"type",void 0),tZ=tH([b("wui-card-select-loader")],tZ);let tV=(0,l.YP)`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,tq=(0,l.YP)`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var tG=(0,l.iv)`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,tY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tK=class extends l.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,(0,l.dy)`${this.templateVisual()} ${({sm:tV,md:tF,lg:tq})[this.size]}`}templateVisual(){return this.imageSrc?(0,l.dy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:(0,l.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tK.styles=[g,tG],tY([(0,C.Cb)()],tK.prototype,"size",void 0),tY([(0,C.Cb)()],tK.prototype,"name",void 0),tY([(0,C.Cb)()],tK.prototype,"imageSrc",void 0),tY([(0,C.Cb)({type:Boolean})],tK.prototype,"selected",void 0),tK=tY([b("wui-network-image")],tK);var tX=(0,l.iv)`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,tJ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tQ=class extends l.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return(0,l.dy)`
      <button data-selected=${(0,tb.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?(0,l.dy)`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,tb.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:(0,l.dy)`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,tb.o)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};tQ.styles=[g,w,tX],tJ([(0,C.Cb)()],tQ.prototype,"name",void 0),tJ([(0,C.Cb)()],tQ.prototype,"type",void 0),tJ([(0,C.Cb)()],tQ.prototype,"imageSrc",void 0),tJ([(0,C.Cb)({type:Boolean})],tQ.prototype,"disabled",void 0),tJ([(0,C.Cb)({type:Boolean})],tQ.prototype,"selected",void 0),tJ([(0,C.Cb)({type:Boolean})],tQ.prototype,"installed",void 0),tQ=tJ([b("wui-card-select")],tQ);var t0=(0,l.iv)`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`,t1=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t2=class extends l.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return(0,l.dy)`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:tv.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?(0,l.dy)`<wui-image src=${this.imageSrc}></wui-image>`:null}};t2.styles=[g,w,t0],t1([(0,C.Cb)()],t2.prototype,"variant",void 0),t1([(0,C.Cb)()],t2.prototype,"imageSrc",void 0),t1([(0,C.Cb)({type:Boolean})],t2.prototype,"disabled",void 0),t1([(0,C.Cb)()],t2.prototype,"icon",void 0),t1([(0,C.Cb)()],t2.prototype,"href",void 0),t1([(0,C.Cb)()],t2.prototype,"text",void 0),t2=t1([b("wui-chip")],t2);var t3=(0,l.iv)`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,t5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t4=class extends l.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return(0,l.dy)`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?(0,l.dy)`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};t4.styles=[g,w,t3],t5([(0,C.Cb)()],t4.prototype,"size",void 0),t5([(0,C.Cb)({type:Boolean})],t4.prototype,"loading",void 0),t4=t5([b("wui-connect-button")],t4);var t6=(0,l.iv)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,t8=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t9=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,l.dy)`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};t9.styles=[g,w,t6],t8([(0,C.Cb)({type:Boolean})],t9.prototype,"disabled",void 0),t8([(0,C.Cb)()],t9.prototype,"label",void 0),t8([(0,C.Cb)()],t9.prototype,"buttonLabel",void 0),t9=t8([b("wui-cta-button")],t9);var t7=(0,l.iv)`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;let re=class extends l.oi{render(){return(0,l.dy)`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};re.styles=[g,w,t7],re=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([b("wui-details-group")],re);var rt=(0,l.iv)`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`,rr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ri=class extends l.oi{constructor(){super(...arguments),this.name=""}render(){return(0,l.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};ri.styles=[g,w,rt],rr([(0,C.Cb)()],ri.prototype,"name",void 0),ri=rr([b("wui-details-group-item")],ri);var rn=r(69178),ro=(0,l.iv)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,ra=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rs=class extends l.oi{constructor(){super(...arguments),this.inputElementRef=(0,rn.V)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let e=`wui-size-${this.size}`;return(0,l.dy)` ${this.templateIcon()}
      <input
        ${(0,rn.i)(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,tb.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?(0,l.dy)`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};rs.styles=[g,w,ro],ra([(0,C.Cb)()],rs.prototype,"size",void 0),ra([(0,C.Cb)()],rs.prototype,"icon",void 0),ra([(0,C.Cb)({type:Boolean})],rs.prototype,"disabled",void 0),ra([(0,C.Cb)()],rs.prototype,"placeholder",void 0),ra([(0,C.Cb)()],rs.prototype,"type",void 0),ra([(0,C.Cb)()],rs.prototype,"keyHint",void 0),ra([(0,C.Cb)()],rs.prototype,"value",void 0),rs=ra([b("wui-input-text")],rs);var rl=(0,l.iv)`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,rc=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ru=class extends l.oi{constructor(){super(...arguments),this.disabled=!1}render(){return(0,l.dy)`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?(0,l.dy)`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};ru.styles=[g,rl],rc([(0,C.Cb)()],ru.prototype,"errorMessage",void 0),rc([(0,C.Cb)({type:Boolean})],ru.prototype,"disabled",void 0),rc([(0,C.Cb)()],ru.prototype,"value",void 0),ru=rc([b("wui-email-input")],ru);var rd=(0,l.iv)`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,rh=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rp=class extends l.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,(0,l.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};rp.styles=[g,w,m,rd],rh([(0,C.Cb)()],rp.prototype,"size",void 0),rh([(0,C.Cb)({type:Boolean})],rp.prototype,"disabled",void 0),rh([(0,C.Cb)()],rp.prototype,"icon",void 0),rh([(0,C.Cb)()],rp.prototype,"iconColor",void 0),rp=rh([b("wui-icon-link")],rp);var rf=(0,l.iv)`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,rg=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rw=class extends l.oi{constructor(){super(...arguments),this.icon="copy"}render(){return(0,l.dy)`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};rw.styles=[g,w,rf],rg([(0,C.Cb)()],rw.prototype,"icon",void 0),rw=rg([b("wui-input-element")],rw);var rm=(0,l.iv)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`,rb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rv=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return(0,l.dy)`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};rv.styles=[g,w,rm],rb([(0,C.Cb)({type:Boolean})],rv.prototype,"disabled",void 0),rb([(0,C.Cb)({type:String})],rv.prototype,"value",void 0),rv=rb([b("wui-input-numeric")],rv);var ry=(0,l.iv)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,rC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rx=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return(0,l.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};rx.styles=[g,w,ry],rC([(0,C.Cb)({type:Boolean})],rx.prototype,"disabled",void 0),rC([(0,C.Cb)()],rx.prototype,"color",void 0),rx=rC([b("wui-link")],rx);var rk=(0,l.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,rE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r_=class extends l.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return(0,l.dy)`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,tb.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return(0,l.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return(0,l.dy)`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return(0,l.dy)`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?(0,l.dy)`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:(0,l.dy)``}chevronTemplate(){return this.chevron?(0,l.dy)`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};r_.styles=[g,w,rk],rE([(0,C.Cb)()],r_.prototype,"icon",void 0),rE([(0,C.Cb)()],r_.prototype,"iconSize",void 0),rE([(0,C.Cb)()],r_.prototype,"variant",void 0),rE([(0,C.Cb)()],r_.prototype,"iconVariant",void 0),rE([(0,C.Cb)({type:Boolean})],r_.prototype,"disabled",void 0),rE([(0,C.Cb)()],r_.prototype,"imageSrc",void 0),rE([(0,C.Cb)()],r_.prototype,"alt",void 0),rE([(0,C.Cb)({type:Boolean})],r_.prototype,"chevron",void 0),rE([(0,C.Cb)({type:Boolean})],r_.prototype,"loading",void 0),r_=rE([b("wui-list-item")],r_),(a=s||(s={})).approve="approved",a.bought="bought",a.borrow="borrowed",a.burn="burnt",a.cancel="canceled",a.claim="claimed",a.deploy="deployed",a.deposit="deposited",a.execute="executed",a.mint="minted",a.receive="received",a.repay="repaid",a.send="sent",a.sell="sold",a.stake="staked",a.trade="swapped",a.unstake="unstaked",a.withdraw="withdrawn";var rA=(0,l.iv)`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,rS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rR=class extends l.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,(0,l.dy)`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?(0,l.dy)`<div class="swap-images-container">
        ${e?.url?(0,l.dy)`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?(0,l.dy)`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?(0,l.dy)`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?(0,l.dy)`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:(0,l.dy)`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?(0,l.dy)`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};rR.styles=[rA],rS([(0,C.Cb)()],rR.prototype,"type",void 0),rS([(0,C.Cb)()],rR.prototype,"status",void 0),rS([(0,C.Cb)()],rR.prototype,"direction",void 0),rS([(0,C.Cb)({type:Boolean})],rR.prototype,"onlyDirectionIcon",void 0),rS([(0,C.Cb)({type:Array})],rR.prototype,"images",void 0),rS([(0,C.Cb)({type:Object})],rR.prototype,"secondImage",void 0),rR=rS([b("wui-transaction-visual")],rR);var r$=(0,l.iv)`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,rO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rT=class extends l.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return(0,l.dy)`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,tb.o)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,tb.o)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${s[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?(0,l.dy)`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?(0,l.dy)`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};rT.styles=[g,r$],rO([(0,C.Cb)()],rT.prototype,"type",void 0),rO([(0,C.Cb)({type:Array})],rT.prototype,"descriptions",void 0),rO([(0,C.Cb)()],rT.prototype,"date",void 0),rO([(0,C.Cb)({type:Boolean})],rT.prototype,"onlyDirectionIcon",void 0),rO([(0,C.Cb)()],rT.prototype,"status",void 0),rO([(0,C.Cb)()],rT.prototype,"direction",void 0),rO([(0,C.Cb)({type:Array})],rT.prototype,"images",void 0),rO([(0,C.Cb)({type:Array})],rT.prototype,"price",void 0),rO([(0,C.Cb)({type:Array})],rT.prototype,"amount",void 0),rO([(0,C.Cb)({type:Array})],rT.prototype,"symbol",void 0),rT=rO([b("wui-transaction-list-item")],rT);var rP=(0,l.iv)`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let rI=class extends l.oi{render(){return(0,l.dy)`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};rI.styles=[g,rP],rI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([b("wui-transaction-list-item-loader")],rI);var rN=(0,l.iv)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 9px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,rj=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rM=class extends l.oi{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e="md"===this.size?"mini-700":"micro-700";return(0,l.dy)`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};rM.styles=[g,rN],rj([(0,C.Cb)()],rM.prototype,"variant",void 0),rj([(0,C.Cb)()],rM.prototype,"size",void 0),rM=rj([b("wui-tag")],rM);var rL=(0,l.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,rB=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rD=class extends l.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return(0,l.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?(0,l.dy)` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?(0,l.dy)` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?(0,l.dy)`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:(0,l.dy)`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?(0,l.dy)`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?(0,l.dy)`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rD.styles=[g,w,rL],rB([(0,C.Cb)({type:Array})],rD.prototype,"walletImages",void 0),rB([(0,C.Cb)()],rD.prototype,"imageSrc",void 0),rB([(0,C.Cb)()],rD.prototype,"name",void 0),rB([(0,C.Cb)()],rD.prototype,"tagLabel",void 0),rB([(0,C.Cb)()],rD.prototype,"tagVariant",void 0),rB([(0,C.Cb)()],rD.prototype,"icon",void 0),rB([(0,C.Cb)()],rD.prototype,"walletIcon",void 0),rB([(0,C.Cb)({type:Boolean})],rD.prototype,"installed",void 0),rB([(0,C.Cb)({type:Boolean})],rD.prototype,"disabled",void 0),rB([(0,C.Cb)({type:Boolean})],rD.prototype,"showAllWallets",void 0),rD=rB([b("wui-list-wallet")],rD);var rU=(0,l.iv)`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,rz=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rF=class extends l.oi{constructor(){super(...arguments),this.logo="google"}render(){return(0,l.dy)`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rF.styles=[g,rU],rz([(0,C.Cb)()],rF.prototype,"logo",void 0),rF=rz([b("wui-logo")],rF);var rW=(0,l.iv)`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rH=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rZ=class extends l.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return(0,l.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rZ.styles=[g,w,rW],rH([(0,C.Cb)()],rZ.prototype,"logo",void 0),rH([(0,C.Cb)({type:Boolean})],rZ.prototype,"disabled",void 0),rZ=rH([b("wui-logo-select")],rZ);var rV=(0,l.iv)`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`,rq=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rG=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return(0,l.dy)`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?(0,l.dy)`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?(0,l.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,l.dy)`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rG.styles=[g,w,rV],rq([(0,C.Cb)()],rG.prototype,"imageSrc",void 0),rq([(0,C.Cb)({type:Boolean})],rG.prototype,"isUnsupportedChain",void 0),rq([(0,C.Cb)({type:Boolean})],rG.prototype,"disabled",void 0),rG=rq([b("wui-network-button")],rG);var rY=(0,l.iv)`
  :host {
    position: relative;
    display: block;
  }
`,rK=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rX=class extends l.oi{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let n=i.selectionStart;switch(e.key){case"ArrowLeft":n&&i.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):this.updateInput(i,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&(i.disabled=!1,i.focus())}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return(0,l.dy)`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>(0,l.dy)`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){let i=this.numerics[t],n=e||(i?this.getInputElement(i):void 0);n&&(n.value=r,this.values=this.values.map((e,i)=>i===t?r:e))}selectInput(e){let t=e.target;if(t){let e=this.getInputElement(t);e?.select()}}handleInput(e,t){let r=e.target,i=this.getInputElement(r);if(i){let r=i.value;"insertFromPaste"===e.inputType?this.handlePaste(i,r,t):tv.isNumber(r)&&e.data?(this.updateInput(i,t,e.data),this.focusInputField("next",t)):this.updateInput(i,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){let i=t[0];if(i&&tv.isNumber(i)){this.updateInput(e,r,i);let n=t.substring(1);if(r+1<this.length&&n.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};rX.styles=[g,rY],rK([(0,C.Cb)({type:Number})],rX.prototype,"length",void 0),rK([(0,C.Cb)({type:String})],rX.prototype,"otp",void 0),rK([(0,C.SB)()],rX.prototype,"values",void 0),rX=rK([b("wui-otp")],rX);var rJ=r(92592);function rQ(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let r0={generate(e,t,r){let i="#141414",n=[],o=function(e,t){let r=Array.prototype.slice.call(rJ.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(o.length-7)*a*e,c=(o.length-7)*a*t;for(let e=0;e<s.length;e+=1){let t=a*(7-2*e);n.push((0,l.YP)`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+a*e+2.5:c+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}});let c=Math.floor((r+25)/a),u=o.length/2-c/2,d=o.length/2+c/2-1,h=[];o.forEach((e,t)=>{e.forEach((e,r)=>{!o[t][r]||t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>u&&t<d&&r>u&&r<d||h.push([t*a+a/2,r*a+a/2])})});let p={};return h.forEach(([e,t])=>{p[e]?p[e]?.push(t):p[e]=[t]}),Object.entries(p).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!rQ(e,t,a)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{n.push((0,l.YP)`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)})}),Object.entries(p).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>rQ(e,t,a)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>rQ(e,t,a)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{n.push((0,l.YP)`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),n}};var r1=(0,l.iv)`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,r2=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r3=class extends l.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,(0,l.dy)`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return(0,l.YP)`
      <svg height=${e} width=${e}>
        ${r0.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,l.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:(0,l.dy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};r3.styles=[g,r1],r2([(0,C.Cb)()],r3.prototype,"uri",void 0),r2([(0,C.Cb)({type:Number})],r3.prototype,"size",void 0),r2([(0,C.Cb)()],r3.prototype,"theme",void 0),r2([(0,C.Cb)()],r3.prototype,"imageSrc",void 0),r2([(0,C.Cb)()],r3.prototype,"alt",void 0),r2([(0,C.Cb)({type:Boolean})],r3.prototype,"arenaClear",void 0),r3=r2([b("wui-qr-code")],r3);var r5=(0,l.iv)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let r4=class extends l.oi{constructor(){super(...arguments),this.inputComponentRef=(0,rn.V)()}render(){return(0,l.dy)`
      <wui-input-text
        ${(0,rn.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};r4.styles=[g,r5],r4=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([b("wui-search-bar")],r4);var r6=(0,l.iv)`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,r8=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r9=class extends l.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return(0,l.dy)`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};r9.styles=[g,r6],r8([(0,C.Cb)()],r9.prototype,"backgroundColor",void 0),r8([(0,C.Cb)()],r9.prototype,"iconColor",void 0),r8([(0,C.Cb)()],r9.prototype,"icon",void 0),r8([(0,C.Cb)()],r9.prototype,"message",void 0),r9=r8([b("wui-snackbar")],r9);var r7=(0,l.iv)`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,ie=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let it=class extends l.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return(0,l.dy)`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?(0,l.dy)`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],i=this.buttons[e],n=r?.querySelector("wui-text"),o=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};it.styles=[g,w,r7],ie([(0,C.Cb)({type:Array})],it.prototype,"tabs",void 0),ie([(0,C.Cb)()],it.prototype,"onTabChange",void 0),ie([(0,C.Cb)({type:Array})],it.prototype,"buttons",void 0),ie([(0,C.Cb)({type:Boolean})],it.prototype,"disabled",void 0),ie([(0,C.Cb)()],it.prototype,"localTabWidth",void 0),ie([(0,C.SB)()],it.prototype,"activeTab",void 0),ie([(0,C.SB)()],it.prototype,"isDense",void 0),it=ie([b("wui-tabs")],it);var ir=(0,l.iv)`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-width: 0px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`,ii=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let io=class extends l.oi{constructor(){super(...arguments),this.text=""}render(){return(0,l.dy)`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?(0,l.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,l.dy)`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};io.styles=[g,w,ir],ii([(0,C.Cb)()],io.prototype,"imageSrc",void 0),ii([(0,C.Cb)()],io.prototype,"text",void 0),io=ii([b("wui-token-button")],io);var ia=(0,l.iv)`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,is=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let il=class extends l.oi{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,(0,l.dy)`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};il.styles=[g,w,ia],is([(0,C.Cb)()],il.prototype,"placement",void 0),is([(0,C.Cb)()],il.prototype,"variant",void 0),is([(0,C.Cb)()],il.prototype,"message",void 0),il=is([b("wui-tooltip")],il);var ic=(0,l.iv)`
  :host > wui-flex {
    cursor: pointer;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition: background-color 0.2s linear;
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > wui-image::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`,iu=r(77832),id=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ih=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0}render(){let e=iu.C6.multiply(this.price,this.amount)?.toFixed(3);return(0,l.dy)`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100">${this.name}</wui-text>
            ${e?(0,l.dy)`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${tv.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200">${this.symbol}</wui-text>
            ${this.amount&&(0,l.dy)`<wui-text variant="small-400" color="fg-200"
              >${tv.formatNumberToLocalString(this.amount,4)}</wui-text
            >`}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageSrc?(0,l.dy)`<wui-image width="40" height="40" src=${this.imageSrc}></wui-image>`:null}};ih.styles=[g,w,ic],id([(0,C.Cb)()],ih.prototype,"imageSrc",void 0),id([(0,C.Cb)()],ih.prototype,"name",void 0),id([(0,C.Cb)()],ih.prototype,"symbol",void 0),id([(0,C.Cb)()],ih.prototype,"price",void 0),id([(0,C.Cb)()],ih.prototype,"amount",void 0),ih=id([b("wui-token-list-item")],ih);var ip=(0,l.iv)`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,ig=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iw=class extends l.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,(0,l.dy)`${this.templateVisual()}`}templateVisual(){return this.imageSrc?(0,l.dy)`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:(0,l.dy)`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};iw.styles=[g,ip],ig([(0,C.Cb)()],iw.prototype,"imageSrc",void 0),ig([(0,C.Cb)()],iw.prototype,"alt",void 0),ig([(0,C.Cb)({type:Boolean})],iw.prototype,"borderRadiusFull",void 0),iw=ig([b("wui-visual-thumbnail")],iw);var im=(0,l.iv)`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`,ib=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iv=class extends l.oi{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return(0,l.dy)`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};iv.styles=[g,w,im],ib([(0,C.Cb)()],iv.prototype,"label",void 0),ib([(0,C.Cb)()],iv.prototype,"description",void 0),ib([(0,C.Cb)()],iv.prototype,"icon",void 0),iv=ib([b("wui-notice-card")],iv);var iy=(0,l.iv)`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,iC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ix=class extends l.oi{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(".heightContent"),t=this.shadowRoot?.querySelector(".textContent");if(e&&t){this.scrollElement=e;let r=t?.scrollHeight;r&&r>100&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}})}render(){return(0,l.dy)`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?(0,l.dy)` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};ix.styles=[g,w,iy],iC([(0,C.Cb)()],ix.prototype,"textTitle",void 0),iC([(0,C.Cb)()],ix.prototype,"overflowedContent",void 0),ix=iC([b("wui-list-accordion")],ix);var ik=(0,l.iv)`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,iE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i_=class extends l.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return(0,l.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?(0,l.dy)`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?(0,l.dy)` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:(0,l.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};i_.styles=[g,w,ik],iE([(0,C.Cb)()],i_.prototype,"imageSrc",void 0),iE([(0,C.Cb)()],i_.prototype,"textTitle",void 0),iE([(0,C.Cb)()],i_.prototype,"textValue",void 0),i_=iE([b("wui-list-content")],i_);var iA=(0,l.iv)`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,iS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iR=class extends l.oi{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return(0,l.dy)`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?(0,l.dy)`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:(0,l.dy)`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};iR.styles=[g,w,iA],iS([(0,C.Cb)()],iR.prototype,"imageSrc",void 0),iS([(0,C.Cb)()],iR.prototype,"name",void 0),iS([(0,C.Cb)({type:Boolean})],iR.prototype,"disabled",void 0),iS([(0,C.Cb)({type:Boolean})],iR.prototype,"transparent",void 0),iR=iS([b("wui-list-network")],iR);var i$=(0,l.iv)`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,iO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iT=class extends l.oi{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return(0,l.dy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?(0,l.dy)`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:(0,l.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};iT.styles=[g,w,i$],iO([(0,C.Cb)()],iT.prototype,"amount",void 0),iO([(0,C.Cb)()],iT.prototype,"networkCurreny",void 0),iO([(0,C.Cb)()],iT.prototype,"networkImageUrl",void 0),iO([(0,C.Cb)()],iT.prototype,"receiverAddress",void 0),iO([(0,C.Cb)()],iT.prototype,"addressExplorerUrl",void 0),iT=iO([b("wui-list-wallet-transaction")],iT);var iP=(0,l.iv)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,iI=r(9482),iN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ij=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return(0,l.dy)`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?(0,l.dy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:(0,l.dy)`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await iI.ApiController._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return(0,l.dy)`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){let e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return(0,l.dy)`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return(0,l.dy)`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};ij.styles=[g,w,iP],iN([(0,C.Cb)({type:Boolean})],ij.prototype,"disabled",void 0),iN([(0,C.Cb)()],ij.prototype,"color",void 0),iN([(0,C.Cb)()],ij.prototype,"label",void 0),iN([(0,C.Cb)()],ij.prototype,"purchaseValue",void 0),iN([(0,C.Cb)()],ij.prototype,"purchaseCurrency",void 0),iN([(0,C.Cb)()],ij.prototype,"date",void 0),iN([(0,C.Cb)({type:Boolean})],ij.prototype,"completed",void 0),iN([(0,C.Cb)({type:Boolean})],ij.prototype,"inProgress",void 0),iN([(0,C.Cb)({type:Boolean})],ij.prototype,"failed",void 0),iN([(0,C.Cb)()],ij.prototype,"onClick",void 0),iN([(0,C.Cb)()],ij.prototype,"symbol",void 0),iN([(0,C.Cb)()],ij.prototype,"icon",void 0),ij=iN([b("wui-onramp-activity-item")],ij);var iM=(0,l.iv)`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,iL=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iB=class extends l.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return(0,l.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${(0,tb.o)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?(0,l.dy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:(0,l.dy)`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let e=iI.NetworkController.getRequestedCaipNetworks(),t=e?.filter(e=>e?.imageId)?.slice(0,5);return(0,l.dy)`
      <wui-flex class="networks">
        ${t?.map(e=>l.dy`
            <wui-flex class="network-icon">
              <wui-image src=${tb.o(iI.fz.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};iB.styles=[g,w,iM],iL([(0,C.Cb)({type:Boolean})],iB.prototype,"disabled",void 0),iL([(0,C.Cb)()],iB.prototype,"color",void 0),iL([(0,C.Cb)()],iB.prototype,"name",void 0),iL([(0,C.Cb)()],iB.prototype,"label",void 0),iL([(0,C.Cb)()],iB.prototype,"feeRange",void 0),iL([(0,C.Cb)({type:Boolean})],iB.prototype,"loading",void 0),iL([(0,C.Cb)()],iB.prototype,"onClick",void 0),iB=iL([b("wui-onramp-provider-item")],iB);var iD=(0,l.iv)`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-060);
    }
  }
`,iU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iz=class extends l.oi{constructor(){super(...arguments),this.text=""}render(){return(0,l.dy)`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};iz.styles=[g,w,iD],iU([(0,C.Cb)()],iz.prototype,"text",void 0),iz=iU([b("wui-promo")],iz);var iF=(0,l.iv)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-accent-glass-020);
    }
  }
`,iW=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iH=class extends l.oi{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return(0,l.dy)`<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`}onMouseEnter(){let e=this.shadowRoot?.querySelector("wui-tooltip");e&&e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease",duration:250})}onMouseLeave(){let e=this.shadowRoot?.querySelector("wui-tooltip");e&&e?.animate([{opacity:1},{opacity:0}],{fill:"forwards",easing:"ease",duration:200})}};iH.styles=[g,w,iF],iW([(0,C.Cb)()],iH.prototype,"text",void 0),iW([(0,C.Cb)()],iH.prototype,"icon",void 0),iH=iW([b("wui-tooltip-select")],iH);var iZ=(0,l.iv)`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,iV=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iq=class extends l.oi{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return(0,l.dy)`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};iq.styles=[g,iZ],iV([(0,C.Cb)()],iq.prototype,"dollars",void 0),iV([(0,C.Cb)()],iq.prototype,"pennies",void 0),iq=iV([b("wui-balance")],iq);var iG=(0,l.iv)`
  button {
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,iY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iK=class extends l.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.isProfileName=!1,this.address="",this.icon="chevronBottom"}render(){return(0,l.dy)`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${tv.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:4,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?(0,l.dy)`<wui-image src=${this.networkSrc}></wui-image>`:(0,l.dy)`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};iK.styles=[g,w,iG],iY([(0,C.Cb)()],iK.prototype,"networkSrc",void 0),iY([(0,C.Cb)()],iK.prototype,"avatarSrc",void 0),iY([(0,C.Cb)({type:Boolean})],iK.prototype,"isProfileName",void 0),iY([(0,C.Cb)()],iK.prototype,"address",void 0),iY([(0,C.Cb)()],iK.prototype,"icon",void 0),iK=iY([b("wui-profile-button")],iK);var iX=(0,l.iv)`
  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='shade'],
  button[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  button[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  button[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  button[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  button[data-variant='transparent'],
  button[data-variant='success'],
  button[data-variant='shadeSmall'],
  button[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 8px;
  }

  button[data-variant='transparent']:has(wui-text:first-child),
  button[data-variant='success']:has(wui-text:first-child),
  button[data-variant='shadeSmall']:has(wui-text:first-child),
  button[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  button[data-variant='fill'],
  button[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-variant='fill']:has(wui-text:first-child),
  button[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  button[data-variant='fill'] > wui-image,
  button[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  button[data-variant='fill'] > wui-icon,
  button[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-image,
  button[data-variant='success'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image,
  button[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-icon,
  button[data-variant='success'] > wui-icon,
  button[data-variant='shadeSmall'] > wui-icon,
  button[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='shade']:focus-visible,
  button[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  button[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  button.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:hover,
    button[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    button[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    button[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    button[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  button[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='shade']:active,
  button[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  button[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  button[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`,iJ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iQ=class extends l.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.text=""}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return(0,l.dy)`
      <button class=${this.disabled?"disabled":""} data-variant=${this.variant}>
        <wui-image src=${this.imageSrc}></wui-image>
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};iQ.styles=[g,w,iX],iJ([(0,C.Cb)()],iQ.prototype,"variant",void 0),iJ([(0,C.Cb)()],iQ.prototype,"imageSrc",void 0),iJ([(0,C.Cb)({type:Boolean})],iQ.prototype,"disabled",void 0),iJ([(0,C.Cb)()],iQ.prototype,"icon",void 0),iJ([(0,C.Cb)()],iQ.prototype,"text",void 0),iQ=iJ([b("wui-chip-button")],iQ);var i0=(0,l.iv)`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,i1=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i2=class extends l.oi{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return(0,l.dy)`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return(0,l.dy)` <wui-flex class="networks">
      ${e?.map(e=>l.dy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};i2.styles=[g,w,i0],i1([(0,C.Cb)({type:Array})],i2.prototype,"networkImages",void 0),i1([(0,C.Cb)()],i2.prototype,"text",void 0),i2=i1([b("wui-compatible-network")],i2);var i3=(0,l.iv)`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,i5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i4=class extends l.oi{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return(0,l.dy)`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};i4.styles=[g,w,i3],i5([(0,C.Cb)()],i4.prototype,"icon",void 0),i5([(0,C.Cb)()],i4.prototype,"text",void 0),i4=i5([b("wui-banner")],i4);var i6=(0,l.iv)`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }
`,i8=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i9=class extends l.oi{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return(0,l.dy)`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          <wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${tv.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}};i9.styles=[g,w,i6],i8([(0,C.Cb)()],i9.prototype,"tokenName",void 0),i8([(0,C.Cb)()],i9.prototype,"tokenImageUrl",void 0),i8([(0,C.Cb)({type:Number})],i9.prototype,"tokenValue",void 0),i8([(0,C.Cb)()],i9.prototype,"tokenAmount",void 0),i8([(0,C.Cb)()],i9.prototype,"tokenCurrency",void 0),i8([(0,C.Cb)({type:Boolean})],i9.prototype,"clickable",void 0),i9=i8([b("wui-list-token")],i9);var i7=(0,l.iv)`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,ne=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nt=class extends l.oi{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return(0,l.dy)`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?(0,l.dy)` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:(0,l.dy)`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};nt.styles=[g,w,i7],ne([(0,C.Cb)()],nt.prototype,"icon",void 0),ne([(0,C.Cb)()],nt.prototype,"text",void 0),ne([(0,C.Cb)()],nt.prototype,"description",void 0),ne([(0,C.Cb)()],nt.prototype,"tag",void 0),ne([(0,C.Cb)()],nt.prototype,"iconBackgroundColor",void 0),ne([(0,C.Cb)()],nt.prototype,"iconColor",void 0),ne([(0,C.Cb)({type:Boolean})],nt.prototype,"disabled",void 0),nt=ne([b("wui-list-description")],nt);var nr=(0,l.iv)`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;let ni=/[.*+?^${}()|[\]\\]/gu,nn=/[0-9,.]/u;var no=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let na=class extends l.oi{constructor(){super(...arguments),this.inputElementRef=(0,rn.V)(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),(0,l.dy)`<input
      ${(0,rn.i)(this.inputElementRef)}
      type="text"
      inputmode="numeric"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){let t=e.data;t&&!nn.test(t)&&this.inputElementRef?.value&&(this.inputElementRef.value.value=this.value.replace(RegExp(t.replace(ni,"\\$&"),"gu"),"")),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};na.styles=[g,w,nr],no([(0,C.Cb)({type:Boolean})],na.prototype,"disabled",void 0),no([(0,C.Cb)({type:String})],na.prototype,"value",void 0),no([(0,C.Cb)({type:String})],na.prototype,"placeholder",void 0),na=no([b("wui-input-amount")],na);var ns=(0,l.iv)`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-002);
  }
`,nl=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nc=class extends l.oi{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return(0,l.dy)`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?(0,l.dy)`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?(0,l.dy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,l.dy)`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};nc.styles=[g,w,ns],nl([(0,C.Cb)()],nc.prototype,"text",void 0),nl([(0,C.Cb)()],nc.prototype,"address",void 0),nl([(0,C.Cb)()],nc.prototype,"imageSrc",void 0),nl([(0,C.Cb)({type:Boolean})],nc.prototype,"isAddress",void 0),nc=nl([b("wui-preview-item")],nc);var nu=(0,l.iv)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,nd=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nh=class extends l.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tv.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tv.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tv.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tv.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tv.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tv.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tv.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tv.getSpacingStyles(this.margin,3)};
    `,(0,l.dy)`<slot></slot>`}};nh.styles=[g,nu],nd([(0,C.Cb)()],nh.prototype,"gridTemplateRows",void 0),nd([(0,C.Cb)()],nh.prototype,"gridTemplateColumns",void 0),nd([(0,C.Cb)()],nh.prototype,"justifyItems",void 0),nd([(0,C.Cb)()],nh.prototype,"alignItems",void 0),nd([(0,C.Cb)()],nh.prototype,"justifyContent",void 0),nd([(0,C.Cb)()],nh.prototype,"alignContent",void 0),nd([(0,C.Cb)()],nh.prototype,"columnGap",void 0),nd([(0,C.Cb)()],nh.prototype,"rowGap",void 0),nd([(0,C.Cb)()],nh.prototype,"gap",void 0),nd([(0,C.Cb)()],nh.prototype,"padding",void 0),nd([(0,C.Cb)()],nh.prototype,"margin",void 0),nh=nd([b("wui-grid")],nh);var np=(0,l.iv)`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,nf=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ng=class extends l.oi{constructor(){super(...arguments),this.text=""}render(){return(0,l.dy)`${this.template()}`}template(){return this.text?(0,l.dy)`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ng.styles=[g,np],nf([(0,C.Cb)()],ng.prototype,"text",void 0),ng=nf([b("wui-separator")],ng);let nw=["receive","deposit","borrow","claim"],nm=["withdraw","repay","burn"],nb={getMonthName(e){let t=new Date;return t.setMonth(e),t.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(e,t){let r=iu.Em.getYear(),i=this.getMonthName(t);return e===r?i:`${i} ${e}`},getTransactionImages(e){let[t,r]=e,i=!!t&&e?.every(e=>!!e.nft_info),n=e?.length>1;return e?.length!==2||i?n?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage:e=>({type:nb.getTransactionTransferTokenType(e),url:nb.getTransactionImageURL(e)}),getTransactionImageURL(e){let t;let r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e){let t=e?.metadata?.operationType,r=e?.transfers,i=e?.transfers?.length>0,n=e?.transfers?.length>1,o=i&&r?.every(e=>!!e?.fungible_info),[a,s]=r,l=this.getTransferDescription(a);if(this.getTransferDescription(s),!i)return("send"===t||"receive"===t)&&o?[l=tv.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),tv.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(n)return r.map(e=>this.getTransferDescription(e));let c="";return nw.includes(t)?c="+":nm.includes(t)&&(c="-"),[l=c.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},69782:function(e,t,r){"use strict";let i,n,o;function a(){if(!n)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await n?.open(e)},close:async function(){await n?.close()}}}r.d(t,{OY:function(){return oq},k_:function(){return a}}),r(67294);var s,l,c,u,d,h,p,f=r(23510),g=r(87675);async function w(e,t){let r;if((r="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new g.wi;try{e.setState(e=>({...e,status:"connecting"})),r.emitter.emit("message",{type:"connecting"});let i=await r.connect({chainId:t.chainId}),n=i.accounts;return r.emitter.off("connect",e._internal.events.connect),r.emitter.on("change",e._internal.events.change),r.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",r.id),e.setState(e=>({...e,connections:new Map(e.connections).set(r.uid,{accounts:n,chainId:i.chainId,connector:r}),current:r.uid,status:"connected"})),{accounts:n,chainId:i.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}var m=r(6590),b=r(14503),v=r(8998),y=r(92106);async function C(e,{account:t=e.account,message:r}){if(!t)throw new v.o({docsPath:"/docs/actions/wallet/signMessage"});let i=(0,b.T)(t);if("local"===i.type)return i.signMessage({message:r});let n="string"==typeof r?(0,y.$G)(r):r.raw instanceof Uint8Array?(0,y.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[n,i.address]},{retryCount:0})}var x=r(81946),k=r(75230);async function E(e,t){let r;let{account:i,connector:n,...o}=t;return r="object"==typeof i&&"local"===i.type?e.getClient():await (0,k.e)(e,{account:i,connector:n}),(0,x.s)(r,C,"signMessage")({...o,...i?{account:i}:{}})}var _=r(33397),A=r(16693),S=r(47864),R=r(21746),$=r(62027),O=r(97405);function T(e,t){if(!(e instanceof $.G))return!1;let r=e.walk(e=>e instanceof O.Lu);return r instanceof O.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.data?.errorName==="ResolverNotContract"||r.data?.errorName==="ResolverError"||r.data?.errorName==="HttpError"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===R.$[50])}var P=r(11187),I=r(91734),N=r(15102);function j(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,N.v)(t)?t:null}function M(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,P.qX)(t).byteLength+2),i=0,n=t.split(".");for(let e=0;e<n.length;e++){let t=(0,P.qX)(n[e]);if(t.byteLength>255){var o;t=(0,P.qX)((o=function(e){let t=new Uint8Array(32).fill(0);return e?j(e)||(0,I.w)((0,P.qX)(e)):(0,y.ci)(t)}(n[e]),`[${o.slice(2)}]`))}r[i]=t.length,r.set(t,i+1),i+=t.length+1}return r.byteLength!==i+1?r.slice(0,i+1):r}var L=r(93714),B=r(88819);async function D(e,{address:t,blockNumber:r,blockTag:i,gatewayUrls:n,strict:o,universalResolverAddress:a}){let s=a;if(!s){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");s=(0,S.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let l=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let o={address:s,abi:A.du,functionName:"reverse",args:[(0,y.NC)(M(l))],blockNumber:r,blockTag:i},a=(0,L.s)(e,B.L,"readContract"),[c,u]=n?await a({...o,args:[...o.args,n]}):await a(o);if(t.toLowerCase()!==u.toLowerCase())return null;return c}catch(e){if(o)throw e;if(T(e,"reverse"))return null;throw e}}class U extends $.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class z extends $.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class F extends $.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class W extends $.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let H=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Z=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,V=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,q=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function G(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function Y(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function K({uri:e,gatewayUrls:t}){let r=V.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let i=Y(t?.ipfs,"https://ipfs.io"),n=Y(t?.arweave,"https://arweave.net"),o=e.match(H),{protocol:a,subpath:s,target:l,subtarget:c=""}=o?.groups||{},u="ipns:/"===a||"ipns/"===s,d="ipfs:/"===a||"ipfs/"===s||Z.test(e);if(e.startsWith("http")&&!u&&!d){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&l)return{uri:`${n}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(q,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new F({uri:e})}function X(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new U({data:e});return e.image||e.image_url||e.image_data}async function J({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json());return await Q({gatewayUrls:e,uri:X(r)})}catch{throw new F({uri:t})}}async function Q({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:i}=K({uri:t,gatewayUrls:e});if(i||await G(r))return r;throw new F({uri:t})}async function ee(e,{nft:t}){if("erc721"===t.namespace)return(0,B.L)(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return(0,B.L)(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new W({namespace:t.namespace})}async function et(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?er(e,{gatewayUrls:t,record:r}):Q({uri:r,gatewayUrls:t})}async function er(e,{gatewayUrls:t,record:r}){let i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,i,n]=t.split("/"),[o,a]=r.split(":"),[s,l]=i.split(":");if(!o||"eip155"!==o.toLowerCase())throw new z({reason:"Only EIP-155 supported"});if(!a)throw new z({reason:"Chain ID not found"});if(!l)throw new z({reason:"Contract address not found"});if(!n)throw new z({reason:"Token ID not found"});if(!s)throw new z({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:l,tokenID:n}}(r),{uri:n,isOnChain:o,isEncoded:a}=K({uri:await ee(e,{nft:i}),gatewayUrls:t});if(o&&(n.includes("data:application/json;base64,")||n.startsWith("{")))return Q({uri:X(JSON.parse(a?atob(n.replace("data:application/json;base64,","")):n)),gatewayUrls:t});let s=i.tokenID;return"erc1155"===i.namespace&&(s=s.replace("0x","").padStart(64,"0")),J({gatewayUrls:t,uri:n.replace(/(?:0x)?{id}/,s)})}var ei=r(7210),en=r(55629),eo=r(57040);async function ea(e,{blockNumber:t,blockTag:r,name:i,key:n,gatewayUrls:o,strict:a,universalResolverAddress:s}){let l=s;if(!l){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");l=(0,S.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a={address:l,abi:A.k3,functionName:"resolve",args:[(0,y.NC)(M(i)),(0,en.R)({abi:A.nZ,functionName:"text",args:[function(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,y.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let i=j(r[e]),n=i?(0,P.O0)(i):(0,I.w)((0,P.qX)(r[e]),"bytes");t=(0,I.w)((0,eo.zo)([t,n]),"bytes")}return(0,y.ci)(t)}(i),n]})],blockNumber:t,blockTag:r},s=(0,L.s)(e,B.L,"readContract"),c=o?await s({...a,args:[...a.args,o]}):await s(a);if("0x"===c[0])return null;let u=(0,ei.k)({abi:A.nZ,functionName:"text",data:c[0]});return""===u?null:u}catch(e){if(a)throw e;if(T(e,"resolve"))return null;throw e}}async function es(e,{blockNumber:t,blockTag:r,assetGatewayUrls:i,name:n,gatewayUrls:o,strict:a,universalResolverAddress:s}){let l=await (0,L.s)(e,ea,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:n,universalResolverAddress:s,gatewayUrls:o,strict:a});if(!l)return null;try{return await et(e,{record:l,gatewayUrls:i})}catch{return null}}var el=r(35001),ec=r(66403),eu=r(9482),ed=r(28080),eh=r(77996),ep=r(37380),ef=r(35592),eg=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ew=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=eu.AccountController.state.address,this.balanceVal=eu.AccountController.state.balance,this.balanceSymbol=eu.AccountController.state.balanceSymbol,this.profileName=eu.AccountController.state.profileName,this.profileImage=eu.AccountController.state.profileImage,this.network=eu.NetworkController.state.caipNetwork,this.isUnsupportedChain=eu.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(eu.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),eu.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),eu.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=eu.fz.getNetworkImage(this.network),t="show"===this.balance;return(0,eh.dy)`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${(0,ef.o)(this.address)}
        profileName=${(0,ef.o)(this.profileName)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,ef.o)(e)}
        avatarSrc=${(0,ef.o)(this.profileImage)}
        balance=${t?eu.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?eu.IN.open({view:"UnsupportedChain"}):eu.IN.open()}};eg([(0,ep.Cb)({type:Boolean})],ew.prototype,"disabled",void 0),eg([(0,ep.Cb)()],ew.prototype,"balance",void 0),eg([(0,ep.Cb)()],ew.prototype,"charsStart",void 0),eg([(0,ep.Cb)()],ew.prototype,"charsEnd",void 0),eg([(0,ep.SB)()],ew.prototype,"address",void 0),eg([(0,ep.SB)()],ew.prototype,"balanceVal",void 0),eg([(0,ep.SB)()],ew.prototype,"balanceSymbol",void 0),eg([(0,ep.SB)()],ew.prototype,"profileName",void 0),eg([(0,ep.SB)()],ew.prototype,"profileImage",void 0),eg([(0,ep.SB)()],ew.prototype,"network",void 0),eg([(0,ep.SB)()],ew.prototype,"isUnsupportedChain",void 0),ew=eg([(0,ed.customElement)("w3m-account-button")],ew);var em=(0,eh.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,eb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ev=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=eu.AccountController.state.isConnected,this.unsubscribe.push(eu.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?(0,eh.dy)`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,ef.o)(this.balance)}
            .charsStart=${(0,ef.o)(this.charsStart)}
            .charsEnd=${(0,ef.o)(this.charsEnd)}
          >
          </w3m-account-button>
        `:(0,eh.dy)`
          <w3m-connect-button
            size=${(0,ef.o)(this.size)}
            label=${(0,ef.o)(this.label)}
            loadingLabel=${(0,ef.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};ev.styles=em,eb([(0,ep.Cb)({type:Boolean})],ev.prototype,"disabled",void 0),eb([(0,ep.Cb)()],ev.prototype,"balance",void 0),eb([(0,ep.Cb)()],ev.prototype,"size",void 0),eb([(0,ep.Cb)()],ev.prototype,"label",void 0),eb([(0,ep.Cb)()],ev.prototype,"loadingLabel",void 0),eb([(0,ep.Cb)()],ev.prototype,"charsStart",void 0),eb([(0,ep.Cb)()],ev.prototype,"charsEnd",void 0),eb([(0,ep.SB)()],ev.prototype,"isAccount",void 0),ev=eb([(0,ed.customElement)("w3m-button")],ev);var ey=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eC=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=eu.IN.state.open,this.loading=eu.IN.state.loading,this.unsubscribe.push(eu.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return(0,eh.dy)`
      <wui-connect-button
        size=${(0,ef.o)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?eu.IN.close():this.loading||eu.IN.open()}};ey([(0,ep.Cb)()],eC.prototype,"size",void 0),ey([(0,ep.Cb)()],eC.prototype,"label",void 0),ey([(0,ep.Cb)()],eC.prototype,"loadingLabel",void 0),ey([(0,ep.SB)()],eC.prototype,"open",void 0),ey([(0,ep.SB)()],eC.prototype,"loading",void 0),eC=ey([(0,ed.customElement)("w3m-connect-button")],eC),r(90078);var ex=(0,eh.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,ek=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eE=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=eu.NetworkController.state.caipNetwork,this.connected=eu.AccountController.state.isConnected,this.loading=eu.IN.state.loading,this.isUnsupportedChain=eu.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(eu.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),eu.AccountController.subscribeKey("isConnected",e=>this.connected=e),eu.IN.subscribeKey("loading",e=>this.loading=e),eu.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${(0,ef.o)(eu.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(eu.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),eu.IN.open({view:"Networks"}))}};eE.styles=ex,ek([(0,ep.Cb)({type:Boolean})],eE.prototype,"disabled",void 0),ek([(0,ep.SB)()],eE.prototype,"network",void 0),ek([(0,ep.SB)()],eE.prototype,"connected",void 0),ek([(0,ep.SB)()],eE.prototype,"loading",void 0),ek([(0,ep.SB)()],eE.prototype,"isUnsupportedChain",void 0),eE=ek([(0,ed.customElement)("w3m-network-button")],eE);var e_=(0,eh.iv)`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,eA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eS=class extends eh.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=eu.RouterController.state.view,this.unsubscribe.push(eu.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return(0,eh.dy)`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return(0,eh.dy)`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return(0,eh.dy)`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return(0,eh.dy)`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return(0,eh.dy)`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return(0,eh.dy)`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return(0,eh.dy)`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return(0,eh.dy)`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return(0,eh.dy)`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return(0,eh.dy)`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return(0,eh.dy)`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return(0,eh.dy)`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return(0,eh.dy)`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return(0,eh.dy)`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return(0,eh.dy)`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return(0,eh.dy)`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return(0,eh.dy)`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return(0,eh.dy)`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return(0,eh.dy)`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return(0,eh.dy)`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return(0,eh.dy)`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return(0,eh.dy)`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return(0,eh.dy)`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return(0,eh.dy)`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return(0,eh.dy)`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return(0,eh.dy)`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return(0,eh.dy)`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return(0,eh.dy)`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return(0,eh.dy)`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return(0,eh.dy)`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return(0,eh.dy)`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WalletSend":return(0,eh.dy)`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return(0,eh.dy)`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return(0,eh.dy)`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`}}async onViewChange(e){let{history:t}=eu.RouterController.state,r=-10,i=10;t.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};eS.styles=e_,eA([(0,ep.SB)()],eS.prototype,"view",void 0),eS=eA([(0,ed.customElement)("w3m-router")],eS);var eR=(0,eh.iv)`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,e$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eO={USD:"$",EUR:"€",GBP:"\xa3"},eT=[100,250,500,1e3],eP=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=eu.AccountController.state.isConnected,this.loading=eu.IN.state.loading,this.paymentCurrency=eu.ph.state.paymentCurrency,this.paymentAmount=eu.ph.state.paymentAmount,this.purchaseAmount=eu.ph.state.purchaseAmount,this.quoteLoading=eu.ph.state.quotesLoading,this.unsubscribe.push(eu.AccountController.subscribeKey("isConnected",e=>{this.connected=e}),eu.IN.subscribeKey("loading",e=>{this.loading=e}),eu.ph.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${eT.map(e=>(0,eh.dy)`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${eO[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?(0,eh.dy)`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:(0,eh.dy)`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||eu.IN.open({view:"OnRampProviders"})}openModal(){eu.IN.open({view:"Connect"})}async onPaymentAmountChange(e){eu.ph.setPaymentAmount(Number(e.detail)),await eu.ph.getQuote()}async selectPresetAmount(e){eu.ph.setPaymentAmount(e),await eu.ph.getQuote()}};eP.styles=eR,e$([(0,ep.Cb)({type:Boolean})],eP.prototype,"disabled",void 0),e$([(0,ep.SB)()],eP.prototype,"connected",void 0),e$([(0,ep.SB)()],eP.prototype,"loading",void 0),e$([(0,ep.SB)()],eP.prototype,"paymentCurrency",void 0),e$([(0,ep.SB)()],eP.prototype,"paymentAmount",void 0),e$([(0,ep.SB)()],eP.prototype,"purchaseAmount",void 0),e$([(0,ep.SB)()],eP.prototype,"quoteLoading",void 0),eP=e$([(0,ed.customElement)("w3m-onramp-widget")],eP);var eI=(0,eh.iv)`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`,eN=r(48764);"undefined"==typeof window||(window.Buffer||(window.Buffer=eN.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));let ej={SECURE_SITE_SDK:r(83454).env.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR"},eM={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};(s=u||(u={})).assertEqual=e=>e,s.assertIs=function(e){},s.assertNever=function(e){throw Error()},s.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},s.getValidEnumValues=e=>{let t=s.objectKeys(e).filter(t=>"number"!=typeof e[e[t]]),r={};for(let i of t)r[i]=e[i];return s.objectValues(r)},s.objectValues=e=>s.objectKeys(e).map(function(t){return e[t]}),s.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},s.find=(e,t)=>{for(let r of e)if(t(r))return r},s.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,s.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},s.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(d||(d={})).mergeShapes=(e,t)=>({...e,...t});let eL=u.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),eB=e=>{switch(typeof e){case"undefined":return eL.undefined;case"string":return eL.string;case"number":return isNaN(e)?eL.nan:eL.number;case"boolean":return eL.boolean;case"function":return eL.function;case"bigint":return eL.bigint;case"symbol":return eL.symbol;case"object":if(Array.isArray(e))return eL.array;if(null===e)return eL.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return eL.promise;if("undefined"!=typeof Map&&e instanceof Map)return eL.map;if("undefined"!=typeof Set&&e instanceof Set)return eL.set;if("undefined"!=typeof Date&&e instanceof Date)return eL.date;return eL.object;default:return eL.unknown}},eD=u.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class eU extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},i=e=>{for(let n of e.issues)if("invalid_union"===n.code)n.unionErrors.map(i);else if("invalid_return_type"===n.code)i(n.returnTypeError);else if("invalid_arguments"===n.code)i(n.argumentsError);else if(0===n.path.length)r._errors.push(t(n));else{let e=r,i=0;for(;i<n.path.length;){let r=n.path[i];i===n.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(n))):e[r]=e[r]||{_errors:[]},e=e[r],i++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,u.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let i of this.issues)i.path.length>0?(t[i.path[0]]=t[i.path[0]]||[],t[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}eU.create=e=>new eU(e);let ez=(e,t)=>{let r;switch(e.code){case eD.invalid_type:r=e.received===eL.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case eD.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,u.jsonStringifyReplacer)}`;break;case eD.unrecognized_keys:r=`Unrecognized key(s) in object: ${u.joinValues(e.keys,", ")}`;break;case eD.invalid_union:r="Invalid input";break;case eD.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${u.joinValues(e.options)}`;break;case eD.invalid_enum_value:r=`Invalid enum value. Expected ${u.joinValues(e.options)}, received '${e.received}'`;break;case eD.invalid_arguments:r="Invalid function arguments";break;case eD.invalid_return_type:r="Invalid function return type";break;case eD.invalid_date:r="Invalid date";break;case eD.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:u.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case eD.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case eD.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case eD.custom:r="Invalid input";break;case eD.invalid_intersection_types:r="Intersection results could not be merged";break;case eD.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case eD.not_finite:r="Number must be finite";break;default:r=t.defaultError,u.assertNever(e)}return{message:r}},eF=ez;function eW(){return eF}let eH=e=>{let{data:t,path:r,errorMaps:i,issueData:n}=e,o=[...r,...n.path||[]],a={...n,path:o},s="";for(let e of i.filter(e=>!!e).slice().reverse())s=e(a,{data:t,defaultError:s}).message;return{...n,path:o,message:n.message||s}};function eZ(e,t){let r=eH({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,eW(),ez].filter(e=>!!e)});e.common.issues.push(r)}class eV{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let i of t){if("aborted"===i.status)return eq;"dirty"===i.status&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t)r.push({key:await e.key,value:await e.value});return eV.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let i of t){let{key:t,value:n}=i;if("aborted"===t.status||"aborted"===n.status)return eq;"dirty"===t.status&&e.dirty(),"dirty"===n.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==n.value||i.alwaysSet)&&(r[t.value]=n.value)}return{status:e.value,value:r}}}let eq=Object.freeze({status:"aborted"}),eG=e=>({status:"dirty",value:e}),eY=e=>({status:"valid",value:e}),eK=e=>"aborted"===e.status,eX=e=>"dirty"===e.status,eJ=e=>"valid"===e.status,eQ=e=>"undefined"!=typeof Promise&&e instanceof Promise;(l=h||(h={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},l.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class e0{constructor(e,t,r,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let e1=(e,t)=>{if(eJ(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new eU(e.common.issues);return this._error=t,this._error}}};function e2(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:i,description:n}=e;if(t&&(r||i))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:n}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=i?i:t.defaultError}:{message:null!=r?r:t.defaultError},description:n}}class e3{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return eB(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:eB(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new eV,ctx:{common:e.parent.common,data:e.data,parsedType:eB(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(eQ(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let i={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:eB(e)},n=this._parseSync({data:e,path:i.path,parent:i});return e1(i,n)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:eB(e)},i=this._parse({data:e,path:r.path,parent:r});return e1(r,await (eQ(i)?i:Promise.resolve(i)))}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,i)=>{let n=e(t),o=()=>i.addIssue({code:eD.custom,...r(t)});return"undefined"!=typeof Promise&&n instanceof Promise?n.then(e=>!!e||(o(),!1)):!!n||(o(),!1)})}refinement(e,t){return this._refinement((r,i)=>!!e(r)||(i.addIssue("function"==typeof t?t(r,i):t),!1))}_refinement(e){return new tT({schema:this,typeName:p.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return tP.create(this,this._def)}nullable(){return tI.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return tf.create(this,this._def)}promise(){return tO.create(this,this._def)}or(e){return tw.create([this,e],this._def)}and(e){return tv.create(this,e,this._def)}transform(e){return new tT({...e2(this._def),schema:this,typeName:p.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new tN({...e2(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:p.ZodDefault})}brand(){return new tB({typeName:p.ZodBranded,type:this,...e2(this._def)})}catch(e){return new tj({...e2(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:p.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return tD.create(this,e)}readonly(){return tU.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let e5=/^c[^\s-]{8,}$/i,e4=/^[a-z][a-z0-9]*$/,e6=/^[0-9A-HJKMNP-TV-Z]{26}$/,e8=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,e9=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,e7=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,te=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,tt=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):0===e.precision?e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class tr extends e3{_parse(e){let t;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==eL.string){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.string,received:t.parsedType}),eq}let r=new eV;for(let a of this._def.checks)if("min"===a.kind)e.data.length<a.value&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if("max"===a.kind)e.data.length>a.value&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if("length"===a.kind){let i=e.data.length>a.value,n=e.data.length<a.value;(i||n)&&(t=this._getOrReturnCtx(e,t),i?eZ(t,{code:eD.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):n&&eZ(t,{code:eD.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if("email"===a.kind)e9.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"email",code:eD.invalid_string,message:a.message}),r.dirty());else if("emoji"===a.kind)i||(i=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),i.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"emoji",code:eD.invalid_string,message:a.message}),r.dirty());else if("uuid"===a.kind)e8.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"uuid",code:eD.invalid_string,message:a.message}),r.dirty());else if("cuid"===a.kind)e5.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"cuid",code:eD.invalid_string,message:a.message}),r.dirty());else if("cuid2"===a.kind)e4.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"cuid2",code:eD.invalid_string,message:a.message}),r.dirty());else if("ulid"===a.kind)e6.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"ulid",code:eD.invalid_string,message:a.message}),r.dirty());else if("url"===a.kind)try{new URL(e.data)}catch(i){eZ(t=this._getOrReturnCtx(e,t),{validation:"url",code:eD.invalid_string,message:a.message}),r.dirty()}else if("regex"===a.kind)a.regex.lastIndex=0,a.regex.test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"regex",code:eD.invalid_string,message:a.message}),r.dirty());else if("trim"===a.kind)e.data=e.data.trim();else if("includes"===a.kind)e.data.includes(a.value,a.position)||(eZ(t=this._getOrReturnCtx(e,t),{code:eD.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty());else if("toLowerCase"===a.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===a.kind)e.data=e.data.toUpperCase();else if("startsWith"===a.kind)e.data.startsWith(a.value)||(eZ(t=this._getOrReturnCtx(e,t),{code:eD.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty());else if("endsWith"===a.kind)e.data.endsWith(a.value)||(eZ(t=this._getOrReturnCtx(e,t),{code:eD.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty());else if("datetime"===a.kind)tt(a).test(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{code:eD.invalid_string,validation:"datetime",message:a.message}),r.dirty());else if("ip"===a.kind){var n,o;n=e.data,("v4"===(o=a.version)||!o)&&e7.test(n)||("v6"===o||!o)&&te.test(n)||(eZ(t=this._getOrReturnCtx(e,t),{validation:"ip",code:eD.invalid_string,message:a.message}),r.dirty())}else u.assertNever(a);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:eD.invalid_string,...h.errToObj(r)})}_addCheck(e){return new tr({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...h.errToObj(e)})}url(e){return this._addCheck({kind:"url",...h.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...h.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...h.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...h.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...h.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...h.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...h.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...h.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...h.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...h.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...h.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...h.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...h.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...h.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...h.errToObj(t)})}nonempty(e){return this.min(1,h.errToObj(e))}trim(){return new tr({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new tr({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new tr({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}tr.create=e=>{var t;return new tr({checks:[],typeName:p.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...e2(e)})};class ti extends e3{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==eL.number){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.number,received:t.parsedType}),eq}let r=new eV;for(let i of this._def.checks)"int"===i.kind?u.isInteger(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{code:eD.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"multipleOf"===i.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,n=r>i?r:i;return parseInt(e.toFixed(n).replace(".",""))%parseInt(t.toFixed(n).replace(".",""))/Math.pow(10,n)}(e.data,i.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):"finite"===i.kind?Number.isFinite(e.data)||(eZ(t=this._getOrReturnCtx(e,t),{code:eD.not_finite,message:i.message}),r.dirty()):u.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,h.toString(t))}gt(e,t){return this.setLimit("min",e,!1,h.toString(t))}lte(e,t){return this.setLimit("max",e,!0,h.toString(t))}lt(e,t){return this.setLimit("max",e,!1,h.toString(t))}setLimit(e,t,r,i){return new ti({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:h.toString(i)}]})}_addCheck(e){return new ti({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:h.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:h.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:h.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:h.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:h.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:h.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:h.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:h.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:h.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&u.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ti.create=e=>new ti({checks:[],typeName:p.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...e2(e)});class tn extends e3{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==eL.bigint){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.bigint,received:t.parsedType}),eq}let r=new eV;for(let i of this._def.checks)"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"multipleOf"===i.kind?e.data%i.value!==BigInt(0)&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):u.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,h.toString(t))}gt(e,t){return this.setLimit("min",e,!1,h.toString(t))}lte(e,t){return this.setLimit("max",e,!0,h.toString(t))}lt(e,t){return this.setLimit("max",e,!1,h.toString(t))}setLimit(e,t,r,i){return new tn({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:h.toString(i)}]})}_addCheck(e){return new tn({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:h.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:h.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:h.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:h.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:h.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}tn.create=e=>{var t;return new tn({checks:[],typeName:p.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...e2(e)})};class to extends e3{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==eL.boolean){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.boolean,received:t.parsedType}),eq}return eY(e.data)}}to.create=e=>new to({typeName:p.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...e2(e)});class ta extends e3{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==eL.date){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.date,received:t.parsedType}),eq}if(isNaN(e.data.getTime()))return eZ(this._getOrReturnCtx(e),{code:eD.invalid_date}),eq;let r=new eV;for(let i of this._def.checks)"min"===i.kind?e.data.getTime()<i.value&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):"max"===i.kind?e.data.getTime()>i.value&&(eZ(t=this._getOrReturnCtx(e,t),{code:eD.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):u.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ta({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:h.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:h.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}ta.create=e=>new ta({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:p.ZodDate,...e2(e)});class ts extends e3{_parse(e){if(this._getType(e)!==eL.symbol){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.symbol,received:t.parsedType}),eq}return eY(e.data)}}ts.create=e=>new ts({typeName:p.ZodSymbol,...e2(e)});class tl extends e3{_parse(e){if(this._getType(e)!==eL.undefined){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.undefined,received:t.parsedType}),eq}return eY(e.data)}}tl.create=e=>new tl({typeName:p.ZodUndefined,...e2(e)});class tc extends e3{_parse(e){if(this._getType(e)!==eL.null){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.null,received:t.parsedType}),eq}return eY(e.data)}}tc.create=e=>new tc({typeName:p.ZodNull,...e2(e)});class tu extends e3{constructor(){super(...arguments),this._any=!0}_parse(e){return eY(e.data)}}tu.create=e=>new tu({typeName:p.ZodAny,...e2(e)});class td extends e3{constructor(){super(...arguments),this._unknown=!0}_parse(e){return eY(e.data)}}td.create=e=>new td({typeName:p.ZodUnknown,...e2(e)});class th extends e3{_parse(e){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.never,received:t.parsedType}),eq}}th.create=e=>new th({typeName:p.ZodNever,...e2(e)});class tp extends e3{_parse(e){if(this._getType(e)!==eL.undefined){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.void,received:t.parsedType}),eq}return eY(e.data)}}tp.create=e=>new tp({typeName:p.ZodVoid,...e2(e)});class tf extends e3{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==eL.array)return eZ(t,{code:eD.invalid_type,expected:eL.array,received:t.parsedType}),eq;if(null!==i.exactLength){let e=t.data.length>i.exactLength.value,n=t.data.length<i.exactLength.value;(e||n)&&(eZ(t,{code:e?eD.too_big:eD.too_small,minimum:n?i.exactLength.value:void 0,maximum:e?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(null!==i.minLength&&t.data.length<i.minLength.value&&(eZ(t,{code:eD.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),null!==i.maxLength&&t.data.length>i.maxLength.value&&(eZ(t,{code:eD.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>i.type._parseAsync(new e0(t,e,t.path,r)))).then(e=>eV.mergeArray(r,e));let n=[...t.data].map((e,r)=>i.type._parseSync(new e0(t,e,t.path,r)));return eV.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new tf({...this._def,minLength:{value:e,message:h.toString(t)}})}max(e,t){return new tf({...this._def,maxLength:{value:e,message:h.toString(t)}})}length(e,t){return new tf({...this._def,exactLength:{value:e,message:h.toString(t)}})}nonempty(e){return this.min(1,e)}}tf.create=(e,t)=>new tf({type:e,minLength:null,maxLength:null,exactLength:null,typeName:p.ZodArray,...e2(t)});class tg extends e3{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=u.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==eL.object){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.object,received:t.parsedType}),eq}let{status:t,ctx:r}=this._processInputParams(e),{shape:i,keys:n}=this._getCached(),o=[];if(!(this._def.catchall instanceof th&&"strip"===this._def.unknownKeys))for(let e in r.data)n.includes(e)||o.push(e);let a=[];for(let e of n){let t=i[e],n=r.data[e];a.push({key:{status:"valid",value:e},value:t._parse(new e0(r,n,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof th){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of o)a.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)o.length>0&&(eZ(r,{code:eD.unrecognized_keys,keys:o}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of o){let i=r.data[t];a.push({key:{status:"valid",value:t},value:e._parse(new e0(r,i,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of a){let r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>eV.mergeObjectSync(t,e)):eV.mergeObjectSync(t,a)}get shape(){return this._def.shape()}strict(e){return h.errToObj,new tg({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var i,n,o,a;let s=null!==(o=null===(n=(i=this._def).errorMap)||void 0===n?void 0:n.call(i,t,r).message)&&void 0!==o?o:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=h.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}})}strip(){return new tg({...this._def,unknownKeys:"strip"})}passthrough(){return new tg({...this._def,unknownKeys:"passthrough"})}extend(e){return new tg({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new tg({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:p.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new tg({...this._def,catchall:e})}pick(e){let t={};return u.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new tg({...this._def,shape:()=>t})}omit(e){let t={};return u.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new tg({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof tg){let r={};for(let i in t.shape){let n=t.shape[i];r[i]=tP.create(e(n))}return new tg({...t._def,shape:()=>r})}return t instanceof tf?new tf({...t._def,type:e(t.element)}):t instanceof tP?tP.create(e(t.unwrap())):t instanceof tI?tI.create(e(t.unwrap())):t instanceof ty?ty.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return u.objectKeys(this.shape).forEach(r=>{let i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()}),new tg({...this._def,shape:()=>t})}required(e){let t={};return u.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof tP;)e=e._def.innerType;t[r]=e}}),new tg({...this._def,shape:()=>t})}keyof(){return tS(u.objectKeys(this.shape))}}tg.create=(e,t)=>new tg({shape:()=>e,unknownKeys:"strip",catchall:th.create(),typeName:p.ZodObject,...e2(t)}),tg.strictCreate=(e,t)=>new tg({shape:()=>e,unknownKeys:"strict",catchall:th.create(),typeName:p.ZodObject,...e2(t)}),tg.lazycreate=(e,t)=>new tg({shape:e,unknownKeys:"strip",catchall:th.create(),typeName:p.ZodObject,...e2(t)});class tw extends e3{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new eU(e.ctx.common.issues));return eZ(t,{code:eD.invalid_union,unionErrors:r}),eq});{let e;let i=[];for(let n of r){let r={...t,common:{...t.common,issues:[]},parent:null},o=n._parseSync({data:t.data,path:t.path,parent:r});if("valid"===o.status)return o;"dirty"!==o.status||e||(e={result:o,ctx:r}),r.common.issues.length&&i.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let n=i.map(e=>new eU(e));return eZ(t,{code:eD.invalid_union,unionErrors:n}),eq}}get options(){return this._def.options}}tw.create=(e,t)=>new tw({options:e,typeName:p.ZodUnion,...e2(t)});let tm=e=>{if(e instanceof t_)return tm(e.schema);if(e instanceof tT)return tm(e.innerType());if(e instanceof tA)return[e.value];if(e instanceof tR)return e.options;if(e instanceof t$)return Object.keys(e.enum);if(e instanceof tN)return tm(e._def.innerType);if(e instanceof tl)return[void 0];else if(e instanceof tc)return[null];else return null};class tb extends e3{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eL.object)return eZ(t,{code:eD.invalid_type,expected:eL.object,received:t.parsedType}),eq;let r=this.discriminator,i=t.data[r],n=this.optionsMap.get(i);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):(eZ(t,{code:eD.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),eq)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let i=new Map;for(let r of t){let t=tm(r.shape[e]);if(!t)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let n of t){if(i.has(n))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);i.set(n,r)}}return new tb({typeName:p.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,...e2(r)})}}class tv extends e3{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=(e,i)=>{if(eK(e)||eK(i))return eq;let n=function e(t,r){let i=eB(t),n=eB(r);if(t===r)return{valid:!0,data:t};if(i===eL.object&&n===eL.object){let i=u.objectKeys(r),n=u.objectKeys(t).filter(e=>-1!==i.indexOf(e)),o={...t,...r};for(let i of n){let n=e(t[i],r[i]);if(!n.valid)return{valid:!1};o[i]=n.data}return{valid:!0,data:o}}if(i===eL.array&&n===eL.array){if(t.length!==r.length)return{valid:!1};let i=[];for(let n=0;n<t.length;n++){let o=e(t[n],r[n]);if(!o.valid)return{valid:!1};i.push(o.data)}return{valid:!0,data:i}}return i===eL.date&&n===eL.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,i.value);return n.valid?((eX(e)||eX(i))&&t.dirty(),{status:t.value,value:n.data}):(eZ(r,{code:eD.invalid_intersection_types}),eq)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>i(e,t)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}tv.create=(e,t,r)=>new tv({left:e,right:t,typeName:p.ZodIntersection,...e2(r)});class ty extends e3{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eL.array)return eZ(r,{code:eD.invalid_type,expected:eL.array,received:r.parsedType}),eq;if(r.data.length<this._def.items.length)return eZ(r,{code:eD.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),eq;!this._def.rest&&r.data.length>this._def.items.length&&(eZ(r,{code:eD.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...r.data].map((e,t)=>{let i=this._def.items[t]||this._def.rest;return i?i._parse(new e0(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(i).then(e=>eV.mergeArray(t,e)):eV.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new ty({...this._def,rest:e})}}ty.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new ty({items:e,typeName:p.ZodTuple,rest:null,...e2(t)})};class tC extends e3{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eL.object)return eZ(r,{code:eD.invalid_type,expected:eL.object,received:r.parsedType}),eq;let i=[],n=this._def.keyType,o=this._def.valueType;for(let e in r.data)i.push({key:n._parse(new e0(r,e,r.path,e)),value:o._parse(new e0(r,r.data[e],r.path,e))});return r.common.async?eV.mergeObjectAsync(t,i):eV.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,r){return new tC(t instanceof e3?{keyType:e,valueType:t,typeName:p.ZodRecord,...e2(r)}:{keyType:tr.create(),valueType:e,typeName:p.ZodRecord,...e2(t)})}}class tx extends e3{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eL.map)return eZ(r,{code:eD.invalid_type,expected:eL.map,received:r.parsedType}),eq;let i=this._def.keyType,n=this._def.valueType,o=[...r.data.entries()].map(([e,t],o)=>({key:i._parse(new e0(r,e,r.path,[o,"key"])),value:n._parse(new e0(r,t,r.path,[o,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of o){let i=await r.key,n=await r.value;if("aborted"===i.status||"aborted"===n.status)return eq;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of o){let i=r.key,n=r.value;if("aborted"===i.status||"aborted"===n.status)return eq;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}}}}tx.create=(e,t,r)=>new tx({valueType:t,keyType:e,typeName:p.ZodMap,...e2(r)});class tk extends e3{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eL.set)return eZ(r,{code:eD.invalid_type,expected:eL.set,received:r.parsedType}),eq;let i=this._def;null!==i.minSize&&r.data.size<i.minSize.value&&(eZ(r,{code:eD.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),null!==i.maxSize&&r.data.size>i.maxSize.value&&(eZ(r,{code:eD.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());let n=this._def.valueType;function o(e){let r=new Set;for(let i of e){if("aborted"===i.status)return eq;"dirty"===i.status&&t.dirty(),r.add(i.value)}return{status:t.value,value:r}}let a=[...r.data.values()].map((e,t)=>n._parse(new e0(r,e,r.path,t)));return r.common.async?Promise.all(a).then(e=>o(e)):o(a)}min(e,t){return new tk({...this._def,minSize:{value:e,message:h.toString(t)}})}max(e,t){return new tk({...this._def,maxSize:{value:e,message:h.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}tk.create=(e,t)=>new tk({valueType:e,minSize:null,maxSize:null,typeName:p.ZodSet,...e2(t)});class tE extends e3{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eL.function)return eZ(t,{code:eD.invalid_type,expected:eL.function,received:t.parsedType}),eq;function r(e,r){return eH({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,eW(),ez].filter(e=>!!e),issueData:{code:eD.invalid_arguments,argumentsError:r}})}function i(e,r){return eH({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,eW(),ez].filter(e=>!!e),issueData:{code:eD.invalid_return_type,returnTypeError:r}})}let n={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof tO){let e=this;return eY(async function(...t){let a=new eU([]),s=await e._def.args.parseAsync(t,n).catch(e=>{throw a.addIssue(r(t,e)),a}),l=await Reflect.apply(o,this,s);return await e._def.returns._def.type.parseAsync(l,n).catch(e=>{throw a.addIssue(i(l,e)),a})})}{let e=this;return eY(function(...t){let a=e._def.args.safeParse(t,n);if(!a.success)throw new eU([r(t,a.error)]);let s=Reflect.apply(o,this,a.data),l=e._def.returns.safeParse(s,n);if(!l.success)throw new eU([i(s,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new tE({...this._def,args:ty.create(e).rest(td.create())})}returns(e){return new tE({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new tE({args:e||ty.create([]).rest(td.create()),returns:t||td.create(),typeName:p.ZodFunction,...e2(r)})}}class t_ extends e3{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}t_.create=(e,t)=>new t_({getter:e,typeName:p.ZodLazy,...e2(t)});class tA extends e3{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return eZ(t,{received:t.data,code:eD.invalid_literal,expected:this._def.value}),eq}return{status:"valid",value:e.data}}get value(){return this._def.value}}function tS(e,t){return new tR({values:e,typeName:p.ZodEnum,...e2(t)})}tA.create=(e,t)=>new tA({value:e,typeName:p.ZodLiteral,...e2(t)});class tR extends e3{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return eZ(t,{expected:u.joinValues(r),received:t.parsedType,code:eD.invalid_type}),eq}if(-1===this._def.values.indexOf(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return eZ(t,{received:t.data,code:eD.invalid_enum_value,options:r}),eq}return eY(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){return tR.create(e)}exclude(e){return tR.create(this.options.filter(t=>!e.includes(t)))}}tR.create=tS;class t$ extends e3{_parse(e){let t=u.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==eL.string&&r.parsedType!==eL.number){let e=u.objectValues(t);return eZ(r,{expected:u.joinValues(e),received:r.parsedType,code:eD.invalid_type}),eq}if(-1===t.indexOf(e.data)){let e=u.objectValues(t);return eZ(r,{received:r.data,code:eD.invalid_enum_value,options:e}),eq}return eY(e.data)}get enum(){return this._def.values}}t$.create=(e,t)=>new t$({values:e,typeName:p.ZodNativeEnum,...e2(t)});class tO extends e3{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==eL.promise&&!1===t.common.async?(eZ(t,{code:eD.invalid_type,expected:eL.promise,received:t.parsedType}),eq):eY((t.parsedType===eL.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}tO.create=(e,t)=>new tO({type:e,typeName:p.ZodPromise,...e2(t)});class tT extends e3{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===p.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=this._def.effect||null,n={addIssue:e=>{eZ(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),"preprocess"===i.type){let e=i.transform(r.data,n);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r})):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===i.type){let e=e=>{let t=i.refinement(e,n);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?eq:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===i.status?eq:("dirty"===i.status&&t.dirty(),e(i.value),{status:t.value,value:i.value})}}if("transform"===i.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>eJ(e)?Promise.resolve(i.transform(e.value,n)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!eJ(e))return e;let o=i.transform(e.value,n);if(o instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}}u.assertNever(i)}}tT.create=(e,t,r)=>new tT({schema:e,typeName:p.ZodEffects,effect:t,...e2(r)}),tT.createWithPreprocess=(e,t,r)=>new tT({schema:t,effect:{type:"preprocess",transform:e},typeName:p.ZodEffects,...e2(r)});class tP extends e3{_parse(e){return this._getType(e)===eL.undefined?eY(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tP.create=(e,t)=>new tP({innerType:e,typeName:p.ZodOptional,...e2(t)});class tI extends e3{_parse(e){return this._getType(e)===eL.null?eY(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tI.create=(e,t)=>new tI({innerType:e,typeName:p.ZodNullable,...e2(t)});class tN extends e3{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===eL.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}tN.create=(e,t)=>new tN({innerType:e,typeName:p.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...e2(t)});class tj extends e3{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return eQ(i)?i.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new eU(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===i.status?i.value:this._def.catchValue({get error(){return new eU(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}tj.create=(e,t)=>new tj({innerType:e,typeName:p.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...e2(t)});class tM extends e3{_parse(e){if(this._getType(e)!==eL.nan){let t=this._getOrReturnCtx(e);return eZ(t,{code:eD.invalid_type,expected:eL.nan,received:t.parsedType}),eq}return{status:"valid",value:e.data}}}tM.create=e=>new tM({typeName:p.ZodNaN,...e2(e)});let tL=Symbol("zod_brand");class tB extends e3{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class tD extends e3{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?eq:"dirty"===e.status?(t.dirty(),eG(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?eq:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new tD({in:e,out:t,typeName:p.ZodPipeline})}}class tU extends e3{_parse(e){let t=this._def.innerType._parse(e);return eJ(t)&&(t.value=Object.freeze(t.value)),t}}tU.create=(e,t)=>new tU({innerType:e,typeName:p.ZodReadonly,...e2(t)});let tz=(e,t={},r)=>e?tu.create().superRefine((i,n)=>{var o,a;if(!e(i)){let e="function"==typeof t?t(i):"string"==typeof t?{message:t}:t,s=null===(a=null!==(o=e.fatal)&&void 0!==o?o:r)||void 0===a||a;n.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:s})}}):tu.create(),tF={object:tg.lazycreate};(c=p||(p={})).ZodString="ZodString",c.ZodNumber="ZodNumber",c.ZodNaN="ZodNaN",c.ZodBigInt="ZodBigInt",c.ZodBoolean="ZodBoolean",c.ZodDate="ZodDate",c.ZodSymbol="ZodSymbol",c.ZodUndefined="ZodUndefined",c.ZodNull="ZodNull",c.ZodAny="ZodAny",c.ZodUnknown="ZodUnknown",c.ZodNever="ZodNever",c.ZodVoid="ZodVoid",c.ZodArray="ZodArray",c.ZodObject="ZodObject",c.ZodUnion="ZodUnion",c.ZodDiscriminatedUnion="ZodDiscriminatedUnion",c.ZodIntersection="ZodIntersection",c.ZodTuple="ZodTuple",c.ZodRecord="ZodRecord",c.ZodMap="ZodMap",c.ZodSet="ZodSet",c.ZodFunction="ZodFunction",c.ZodLazy="ZodLazy",c.ZodLiteral="ZodLiteral",c.ZodEnum="ZodEnum",c.ZodEffects="ZodEffects",c.ZodNativeEnum="ZodNativeEnum",c.ZodOptional="ZodOptional",c.ZodNullable="ZodNullable",c.ZodDefault="ZodDefault",c.ZodCatch="ZodCatch",c.ZodPromise="ZodPromise",c.ZodBranded="ZodBranded",c.ZodPipeline="ZodPipeline",c.ZodReadonly="ZodReadonly";let tW=tr.create,tH=ti.create,tZ=tM.create,tV=tn.create,tq=to.create,tG=ta.create,tY=ts.create,tK=tl.create,tX=tc.create,tJ=tu.create,tQ=td.create,t0=th.create,t1=tp.create,t2=tf.create,t3=tg.create,t5=tg.strictCreate,t4=tw.create,t6=tb.create,t8=tv.create,t9=ty.create,t7=tC.create,re=tx.create,rt=tk.create,rr=tE.create,ri=t_.create,rn=tA.create,ro=tR.create,ra=t$.create,rs=tO.create,rl=tT.create,rc=tP.create,ru=tI.create,rd=tT.createWithPreprocess,rh=tD.create;var rp=Object.freeze({__proto__:null,defaultErrorMap:ez,setErrorMap:function(e){eF=e},getErrorMap:eW,makeIssue:eH,EMPTY_PATH:[],addIssueToContext:eZ,ParseStatus:eV,INVALID:eq,DIRTY:eG,OK:eY,isAborted:eK,isDirty:eX,isValid:eJ,isAsync:eQ,get util(){return u},get objectUtil(){return d},ZodParsedType:eL,getParsedType:eB,ZodType:e3,ZodString:tr,ZodNumber:ti,ZodBigInt:tn,ZodBoolean:to,ZodDate:ta,ZodSymbol:ts,ZodUndefined:tl,ZodNull:tc,ZodAny:tu,ZodUnknown:td,ZodNever:th,ZodVoid:tp,ZodArray:tf,ZodObject:tg,ZodUnion:tw,ZodDiscriminatedUnion:tb,ZodIntersection:tv,ZodTuple:ty,ZodRecord:tC,ZodMap:tx,ZodSet:tk,ZodFunction:tE,ZodLazy:t_,ZodLiteral:tA,ZodEnum:tR,ZodNativeEnum:t$,ZodPromise:tO,ZodEffects:tT,ZodTransformer:tT,ZodOptional:tP,ZodNullable:tI,ZodDefault:tN,ZodCatch:tj,ZodNaN:tM,BRAND:tL,ZodBranded:tB,ZodPipeline:tD,ZodReadonly:tU,custom:tz,Schema:e3,ZodSchema:e3,late:tF,get ZodFirstPartyTypeKind(){return p},coerce:{string:e=>tr.create({...e,coerce:!0}),number:e=>ti.create({...e,coerce:!0}),boolean:e=>to.create({...e,coerce:!0}),bigint:e=>tn.create({...e,coerce:!0}),date:e=>ta.create({...e,coerce:!0})},any:tJ,array:t2,bigint:tV,boolean:tq,date:tG,discriminatedUnion:t6,effect:rl,enum:ro,function:rr,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>tz(t=>t instanceof e,t),intersection:t8,lazy:ri,literal:rn,map:re,nan:tZ,nativeEnum:ra,never:t0,null:tX,nullable:ru,number:tH,object:t3,oboolean:()=>tq().optional(),onumber:()=>tH().optional(),optional:rc,ostring:()=>tW().optional(),pipeline:rh,preprocess:rd,promise:rs,record:t7,set:rt,strictObject:t5,string:tW,symbol:tY,transformer:rl,tuple:t9,undefined:tK,union:t4,unknown:tQ,void:t1,NEVER:eq,ZodIssueCode:eD,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:eU});let rf=rp.object({message:rp.string()});function rg(e){return rp.literal(ej[e])}rp.object({accessList:rp.array(rp.string()),blockHash:rp.string().nullable(),blockNumber:rp.string().nullable(),chainId:rp.string(),from:rp.string(),gas:rp.string(),hash:rp.string(),input:rp.string().nullable(),maxFeePerGas:rp.string(),maxPriorityFeePerGas:rp.string(),nonce:rp.string(),r:rp.string(),s:rp.string(),to:rp.string(),transactionIndex:rp.string().nullable(),type:rp.string(),v:rp.string(),value:rp.string()});let rw=rp.object({chainId:rp.number()}),rm=rp.object({email:rp.string().email()}),rb=rp.object({otp:rp.string()}),rv=rp.object({chainId:rp.optional(rp.number()),preferredAccountType:rp.optional(rp.string())}),ry=rp.object({email:rp.string().email()}),rC=rp.object({otp:rp.string()}),rx=rp.object({otp:rp.string()}),rk=rp.object({themeMode:rp.optional(rp.enum(["light","dark"])),themeVariables:rp.optional(rp.record(rp.string(),rp.string().or(rp.number())))}),rE=rp.object({metadata:rp.object({name:rp.string(),description:rp.string(),url:rp.string(),icons:rp.array(rp.string())}).optional(),sdkVersion:rp.string(),projectId:rp.string()}),r_=rp.object({type:rp.string()}),rA=rp.object({action:rp.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),rS=rp.object({email:rp.string().email(),address:rp.string(),chainId:rp.number(),smartAccountDeployed:rp.optional(rp.boolean())}),rR=rp.object({isConnected:rp.boolean()}),r$=rp.object({chainId:rp.number()}),rO=rp.object({chainId:rp.number()}),rT=rp.object({newEmail:rp.string().email()}),rP=rp.object({smartAccountEnabledNetworks:rp.array(rp.number())});rp.object({address:rp.string(),isDeployed:rp.boolean()});let rI=rp.object({type:rp.string(),address:rp.string()}),rN=rp.any(),rj=rp.object({method:rp.literal("eth_accounts")}),rM=rp.object({method:rp.literal("eth_blockNumber")}),rL=rp.object({method:rp.literal("eth_call"),params:rp.array(rp.any())}),rB=rp.object({method:rp.literal("eth_chainId")}),rD=rp.object({method:rp.literal("eth_estimateGas"),params:rp.array(rp.any())}),rU=rp.object({method:rp.literal("eth_feeHistory"),params:rp.array(rp.any())}),rz=rp.object({method:rp.literal("eth_gasPrice")}),rF=rp.object({method:rp.literal("eth_getAccount"),params:rp.array(rp.any())}),rW=rp.object({method:rp.literal("eth_getBalance"),params:rp.array(rp.any())}),rH=rp.object({method:rp.literal("eth_getBlockByHash"),params:rp.array(rp.any())}),rZ=rp.object({method:rp.literal("eth_getBlockByNumber"),params:rp.array(rp.any())}),rV=rp.object({method:rp.literal("eth_getBlockReceipts"),params:rp.array(rp.any())}),rq=rp.object({method:rp.literal("eth_getBlockTransactionCountByHash"),params:rp.array(rp.any())}),rG=rp.object({method:rp.literal("eth_getBlockTransactionCountByNumber"),params:rp.array(rp.any())}),rY=rp.object({method:rp.literal("eth_getCode"),params:rp.array(rp.any())}),rK=rp.object({method:rp.literal("eth_getFilterChanges"),params:rp.array(rp.any())}),rX=rp.object({method:rp.literal("eth_getFilterLogs"),params:rp.array(rp.any())}),rJ=rp.object({method:rp.literal("eth_getLogs"),params:rp.array(rp.any())}),rQ=rp.object({method:rp.literal("eth_getProof"),params:rp.array(rp.any())}),r0=rp.object({method:rp.literal("eth_getStorageAt"),params:rp.array(rp.any())}),r1=rp.object({method:rp.literal("eth_getTransactionByBlockHashAndIndex"),params:rp.array(rp.any())}),r2=rp.object({method:rp.literal("eth_getTransactionByBlockNumberAndIndex"),params:rp.array(rp.any())}),r3=rp.object({method:rp.literal("eth_getTransactionByHash"),params:rp.array(rp.any())}),r5=rp.object({method:rp.literal("eth_getTransactionCount"),params:rp.array(rp.any())}),r4=rp.object({method:rp.literal("eth_getTransactionReceipt"),params:rp.array(rp.any())}),r6=rp.object({method:rp.literal("eth_getUncleCountByBlockHash"),params:rp.array(rp.any())}),r8=rp.object({method:rp.literal("eth_getUncleCountByBlockNumber"),params:rp.array(rp.any())}),r9=rp.object({method:rp.literal("eth_maxPriorityFeePerGas")}),r7=rp.object({method:rp.literal("eth_newBlockFilter")}),ie=rp.object({method:rp.literal("eth_newFilter"),params:rp.array(rp.any())}),it=rp.object({method:rp.literal("eth_newPendingTransactionFilter")}),ir=rp.object({method:rp.literal("eth_sendRawTransaction"),params:rp.array(rp.any())}),ii=rp.object({method:rp.literal("eth_syncing"),params:rp.array(rp.any())}),io=rp.object({method:rp.literal("eth_uninstallFilter"),params:rp.array(rp.any())}),ia=rp.object({method:rp.literal("personal_sign"),params:rp.array(rp.any())}),is=rp.object({method:rp.literal("eth_signTypedData_v4"),params:rp.array(rp.any())}),il=rp.object({method:rp.literal("eth_sendTransaction"),params:rp.array(rp.any())}),ic=rp.object({token:rp.string()});rp.object({type:rg("APP_SWITCH_NETWORK"),payload:rw}).or(rp.object({type:rg("APP_CONNECT_EMAIL"),payload:rm})).or(rp.object({type:rg("APP_CONNECT_DEVICE")})).or(rp.object({type:rg("APP_CONNECT_OTP"),payload:rb})).or(rp.object({type:rg("APP_GET_USER"),payload:rp.optional(rv)})).or(rp.object({type:rg("APP_SIGN_OUT")})).or(rp.object({type:rg("APP_IS_CONNECTED"),payload:rp.optional(ic)})).or(rp.object({type:rg("APP_GET_CHAIN_ID")})).or(rp.object({type:rg("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(rp.object({type:rg("APP_INIT_SMART_ACCOUNT")})).or(rp.object({type:rg("APP_SET_PREFERRED_ACCOUNT"),payload:r_})).or(rp.object({type:rg("APP_RPC_REQUEST"),payload:ia.or(il).or(rj).or(rM).or(rL).or(rB).or(rD).or(rU).or(rz).or(rF).or(rW).or(rH).or(rZ).or(rV).or(rq).or(rG).or(rY).or(rK).or(rX).or(rJ).or(rQ).or(r0).or(r1).or(r2).or(r3).or(r5).or(r4).or(r6).or(r8).or(r9).or(r7).or(ie).or(it).or(ir).or(ii).or(io).or(ia).or(is).or(il)})).or(rp.object({type:rg("APP_UPDATE_EMAIL"),payload:ry})).or(rp.object({type:rg("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:rC})).or(rp.object({type:rg("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:rx})).or(rp.object({type:rg("APP_SYNC_THEME"),payload:rk})).or(rp.object({type:rg("APP_SYNC_DAPP_DATA"),payload:rE})),rp.object({type:rg("FRAME_SWITCH_NETWORK_ERROR"),payload:rf}).or(rp.object({type:rg("FRAME_SWITCH_NETWORK_SUCCESS"),payload:rO})).or(rp.object({type:rg("FRAME_CONNECT_EMAIL_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_CONNECT_EMAIL_SUCCESS"),payload:rA})).or(rp.object({type:rg("FRAME_CONNECT_OTP_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_CONNECT_OTP_SUCCESS")})).or(rp.object({type:rg("FRAME_CONNECT_DEVICE_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_CONNECT_DEVICE_SUCCESS")})).or(rp.object({type:rg("FRAME_GET_USER_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_GET_USER_SUCCESS"),payload:rS})).or(rp.object({type:rg("FRAME_SIGN_OUT_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_SIGN_OUT_SUCCESS")})).or(rp.object({type:rg("FRAME_IS_CONNECTED_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_IS_CONNECTED_SUCCESS"),payload:rR})).or(rp.object({type:rg("FRAME_GET_CHAIN_ID_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_GET_CHAIN_ID_SUCCESS"),payload:r$})).or(rp.object({type:rg("FRAME_RPC_REQUEST_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_RPC_REQUEST_SUCCESS"),payload:rN})).or(rp.object({type:rg("FRAME_SESSION_UPDATE"),payload:ic})).or(rp.object({type:rg("FRAME_UPDATE_EMAIL_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_UPDATE_EMAIL_SUCCESS")})).or(rp.object({type:rg("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(rp.object({type:rg("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:rT})).or(rp.object({type:rg("FRAME_SYNC_THEME_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_SYNC_THEME_SUCCESS")})).or(rp.object({type:rg("FRAME_SYNC_DAPP_DATA_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(rp.object({type:rg("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:rP})).or(rp.object({type:rg("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:rf})).or(rp.object({type:rg("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:rI})).or(rp.object({type:rg("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:rf}));let iu={set(e,t){ih.isClient&&localStorage.setItem(`${ej.STORAGE_KEY}${e}`,t)},get:e=>ih.isClient?localStorage.getItem(`${ej.STORAGE_KEY}${e}`):null,delete(e){ih.isClient&&localStorage.removeItem(`${ej.STORAGE_KEY}${e}`)}},id=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],ih={getBlockchainApiUrl(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return id.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){let e=iu.get(ej.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)throw Error(`Please try again after ${Math.ceil((3e4-t)/1e3)} seconds`)}},getTimeToNextEmailLogin(){let e=iu.get(ej.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0},checkIfRequestExists(e){let t=this.getRequestMethod(e);return eM.NOT_SAFE_RPC_METHODS.includes(t)||eM.SAFE_RPC_METHODS.includes(t)},getRequestMethod:e=>e?.payload?.method,checkIfRequestIsAllowed(e){let t=this.getRequestMethod(e);return eM.SAFE_RPC_METHODS.includes(t)},getPreferredAccountType:()=>iu.get(ej.PREFERRED_ACCOUNT_TYPE)||eM.ACCOUNT_TYPES.EOA,isClient:"undefined"!=typeof window};var ip=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ig=class extends eh.oi{constructor(){super(),this.usubscribe=[],this.networkImages=eu.WM.state.networkImages,this.address=eu.AccountController.state.address,this.profileImage=eu.AccountController.state.profileImage,this.profileName=eu.AccountController.state.profileName,this.network=eu.NetworkController.state.caipNetwork,this.disconnecting=!1,this.loading=!1,this.usubscribe.push(eu.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName):eu.IN.close()}),eu.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.imageId??""];return(0,eh.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,ef.o)(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${this.profileName?ed.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ed.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,ef.o)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=eu.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(eu.j1.copyToClopboard(this.address),eu.SnackController.showSuccess("Address copied"))}catch{eu.SnackController.showError("Failed to copy")}}emailBtnTemplate(){let e=eu.MO.getConnectedConnector(),t=eu.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;let r=t.provider.getEmail()??"";return(0,eh.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}togglePreferredAccountBtnTemplate(){let e=eu.NetworkController.checkIfSmartAccountEnabled(),t=eu.MO.getConnectedConnector();if(!eu.ConnectorController.getEmailConnector()||"EMAIL"!==t||!e)return null;let r=ih.getPreferredAccountType()===eM.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account";return(0,eh.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}async changePreferredAccountType(){let e=eu.NetworkController.checkIfSmartAccountEnabled(),t=ih.getPreferredAccountType()!==eM.ACCOUNT_TYPES.SMART_ACCOUNT&&e?eM.ACCOUNT_TYPES.SMART_ACCOUNT:eM.ACCOUNT_TYPES.EOA,r=eu.ConnectorController.getEmailConnector();r&&(this.loading=!0,await r?.provider.setPreferredAccount(t),this.loading=!1,this.requestUpdate())}onGoToUpdateEmail(e){eu.RouterController.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&eu.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await eu.ConnectionController.disconnect(),eu.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),eu.IN.close()}catch{eu.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),eu.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};ig.styles=eI,ip([(0,ep.SB)()],ig.prototype,"address",void 0),ip([(0,ep.SB)()],ig.prototype,"profileImage",void 0),ip([(0,ep.SB)()],ig.prototype,"profileName",void 0),ip([(0,ep.SB)()],ig.prototype,"network",void 0),ip([(0,ep.SB)()],ig.prototype,"disconnecting",void 0),ip([(0,ep.SB)()],ig.prototype,"loading",void 0),ig=ip([(0,ed.customElement)("w3m-account-settings-view")],ig);let iw=class extends eh.oi{render(){let e=eu.MO.getConnectedConnector();return(0,eh.dy)`
      ${eu.OptionsController.state.enableWalletFeatures&&"EMAIL"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return(0,eh.dy)`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return(0,eh.dy)`<w3m-account-default-widget></w3m-account-default-widget>`}};iw=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-account-view")],iw);var im=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ib=class extends eh.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=eu.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return(0,eh.dy)`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?(0,eh.dy)`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:(0,eh.dy)`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return eu.j1.isMobile()?(0,eh.dy)`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){eu.RouterController.push("ConnectingWalletConnect")}};im([(0,ep.SB)()],ib.prototype,"search",void 0),ib=im([(0,ed.customElement)("w3m-all-wallets-view")],ib);var iv=(0,eh.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,iy=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iC=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=eu.ph.state.selectedProvider,this.uri=eu.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(eu.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let t=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return(0,eh.dy)`
      <wui-flex
        data-error=${(0,ef.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,ef.o)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{let e=eu.AccountController.state.address,t=eu.OptionsController.state.projectId;if(!e)throw Error("No address found");(await eu.Lr.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter(e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status).length?(clearInterval(this.intervalId),eu.RouterController.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){eu.SnackController.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,eu.j1.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?(0,eh.dy)`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=eu.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,eh.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){eu.SnackController.showError("No link found"),eu.RouterController.goBack();return}try{eu.j1.copyToClopboard(this.selectedOnRampProvider.url),eu.SnackController.showSuccess("Link copied")}catch{eu.SnackController.showError("Failed to copy")}}};iC.styles=iv,iy([(0,ep.SB)()],iC.prototype,"selectedOnRampProvider",void 0),iy([(0,ep.SB)()],iC.prototype,"uri",void 0),iy([(0,ep.SB)()],iC.prototype,"ready",void 0),iy([(0,ep.SB)()],iC.prototype,"showRetry",void 0),iy([(0,ep.SB)()],iC.prototype,"buffering",void 0),iy([(0,ep.SB)()],iC.prototype,"error",void 0),iy([(0,ep.SB)()],iC.prototype,"intervalId",void 0),iy([(0,ep.SB)()],iC.prototype,"startTime",void 0),iy([(0,ep.Cb)({type:Boolean})],iC.prototype,"isMobile",void 0),iy([(0,ep.Cb)()],iC.prototype,"onRetry",void 0),iC=iy([(0,ed.customElement)("w3m-buy-in-progress-view")],iC);var ix=(0,eh.iv)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let ik={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.1.6"},iE={ConnectorExplorerIds:{[ik.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[ik.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[ik.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[ik.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ik.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ik.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[ik.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[ik.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[ik.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[ik.INJECTED_CONNECTOR_ID]:"Browser Wallet",[ik.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[ik.COINBASE_CONNECTOR_ID]:"Coinbase",[ik.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[ik.LEDGER_CONNECTOR_ID]:"Ledger",[ik.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[ik.INJECTED_CONNECTOR_ID]:"INJECTED",[ik.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[ik.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[ik.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},i_={getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${ik.EIP155}:${e}`]=r}),t}};var iA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iS=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.connectors=eu.ConnectorController.state.connectors,this.count=eu.ApiController.state.count,this.unsubscribe.push(eu.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),eu.ApiController.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(eu.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?(0,eh.dy)`
      <wui-list-wallet
        imageSrc=${(0,ef.o)(eu.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=eu.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map(e=>(0,eh.dy)`
        <wui-list-wallet
          imageSrc=${(0,ef.o)(eu.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          data-testid=${`wallet-selector-${e.id}`}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{featured:e}=eu.ApiController.state;return e.length?this.filterOutDuplicateWallets(e).map(e=>(0,eh.dy)`
        <wui-list-wallet
          imageSrc=${(0,ef.o)(eu.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return eu.MO.getRecentWallets().map(e=>(0,eh.dy)`
        <wui-list-wallet
          imageSrc=${(0,ef.o)(eu.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:(0,eh.dy)`
        <wui-list-wallet
          imageSrc=${(0,ef.o)(eu.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>"INJECTED"===e.type&&eu.ConnectionController.checkInstalled()?(0,eh.dy)`
        <wui-list-wallet
          imageSrc=${(0,ef.o)(eu.fz.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `:null)}externalTemplate(){let e=eu.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(ik.CONNECTOR_RDNS_MAP[t.id])?null:(0,eh.dy)`
        <wui-list-wallet
          imageSrc=${(0,ef.o)(eu.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type),{allWallets:t}=eu.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!eu.j1.isMobile())return null;let r=eu.ApiController.state.featured.length,i=this.count+r,n=i<10?i:10*Math.floor(i/10),o=n<i?`${n}+`:`${n}`;return(0,eh.dy)`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${o}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{recommended:e}=eu.ApiController.state,{customWallets:t,featuredWalletIds:r}=eu.OptionsController.state,{connectors:i}=eu.ConnectorController.state,n=eu.MO.getRecentWallets(),o=i.filter(e=>"INJECTED"===e.type).filter(e=>"Browser Wallet"!==e.name);if(r||t||!e.length)return null;let a=o.length+n.length;return this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-a)).map(e=>(0,eh.dy)`
        <wui-list-wallet
          imageSrc=${(0,ef.o)(eu.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?eu.j1.isMobile()?eu.RouterController.push("AllWallets"):eu.RouterController.push("ConnectingWalletConnect"):eu.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let t=eu.MO.getRecentWallets(),r=this.connectors.map(e=>e.info?.rdns).filter(Boolean),i=t.map(e=>e.rdns).filter(Boolean),n=r.concat(i);return e.filter(e=>!n.includes(String(e?.rdns)))}onAllWallets(){eu.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),eu.RouterController.push("AllWallets")}onConnectWallet(e){eu.RouterController.push("ConnectingWalletConnect",{wallet:e})}};iS.styles=ix,iA([(0,ep.SB)()],iS.prototype,"connectors",void 0),iA([(0,ep.SB)()],iS.prototype,"count",void 0),iS=iA([(0,ed.customElement)("w3m-connect-view")],iS);var iR=(0,eh.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,i$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class iO extends eh.oi{constructor(){super(),this.wallet=eu.RouterController.state.data?.wallet,this.connector=eu.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=eu.fz.getWalletImage(this.wallet)??eu.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=eu.ConnectionController.state.wcUri,this.error=eu.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(eu.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),eu.ConnectionController.subscribeKey("wcError",e=>this.error=e),eu.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),(0,eh.dy)`
      <wui-flex
        data-error=${(0,ef.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,ef.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?(0,eh.dy)`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(eu.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=eu.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,eh.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(eu.j1.copyToClopboard(this.uri),eu.SnackController.showSuccess("Link copied"))}catch{eu.SnackController.showError("Failed to copy")}}}iO.styles=iR,i$([(0,ep.SB)()],iO.prototype,"uri",void 0),i$([(0,ep.SB)()],iO.prototype,"error",void 0),i$([(0,ep.SB)()],iO.prototype,"ready",void 0),i$([(0,ep.SB)()],iO.prototype,"showRetry",void 0),i$([(0,ep.SB)()],iO.prototype,"buffering",void 0),i$([(0,ep.Cb)({type:Boolean})],iO.prototype,"isMobile",void 0),i$([(0,ep.Cb)()],iO.prototype,"onRetry",void 0);let iT=class extends iO{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");eu.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&eu.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await eu.ConnectionController.connectExternal(this.connector),eu.OptionsController.state.isSiweEnabled?eu.RouterController.push("ConnectingSiwe"):eu.IN.close(),eu.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){eu.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};iT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-connecting-external-view")],iT);var iP=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iI=class extends eh.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=eu.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),eu.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),(0,eh.dy)`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):(0,eh.dy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=eu.ConnectionController.state;if(e||eu.j1.isPairingExpired(t)){if(eu.ConnectionController.connectWalletConnect(),this.wallet){let e=eu.fz.getWalletImage(this.wallet);e&&eu.MO.setConnectedWalletImageUrl(e)}else{let e=eu.ConnectorController.state.connectors.find(e=>"WALLET_CONNECT"===e.type),t=eu.fz.getConnectorImage(e);t&&eu.MO.setConnectedWalletImageUrl(t)}await eu.ConnectionController.state.wcPromise,this.finalizeConnection(),eu.OptionsController.state.isSiweEnabled?eu.RouterController.push("ConnectingSiwe"):eu.IN.close()}}catch(e){eu.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),eu.ConnectionController.setWcError(!0),eu.j1.isAllowedRetry(this.lastRetry)&&(eu.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=eu.ConnectionController.state;e&&eu.MO.setWalletConnectDeepLink(e),t&&eu.MO.setWeb3ModalRecent(t),eu.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:i,rdns:n}=this.wallet,o=i?.map(({injected_id:e})=>e).filter(Boolean),a=n?[n]:o??[],s=a.length,l=eu.ConnectionController.checkInstalled(a),c=s&&l,u=t&&!eu.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(eu.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,eh.dy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return(0,eh.dy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return(0,eh.dy)`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return(0,eh.dy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,eh.dy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return(0,eh.dy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,eh.dy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};iP([(0,ep.SB)()],iI.prototype,"platform",void 0),iP([(0,ep.SB)()],iI.prototype,"platforms",void 0),iI=iP([(0,ed.customElement)("w3m-connecting-wc-view")],iI);let iN=class extends eh.oi{constructor(){super(...arguments),this.wallet=eu.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,eh.dy)`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,eh.dy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,eh.dy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,eh.dy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,eh.dy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&eu.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&eu.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eu.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eu.j1.openHref(this.wallet.homepage,"_blank")}};iN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-downloads-view")],iN);let ij=class extends eh.oi{render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{eu.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=eu.ApiController.state,{customWallets:r}=eu.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map(e=>(0,eh.dy)`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,ef.o)(eu.fz.getWalletImage(e))}
          @click=${()=>{eu.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};ij=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-get-wallet-view")],ij);var iM=(0,eh.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,iL=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iB=class extends eh.oi{constructor(){super(),this.network=eu.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return(0,eh.dy)`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,ef.o)(eu.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:(0,eh.dy)`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await eu.NetworkController.switchActiveNetwork(this.network),eu.OptionsController.state.isSiweEnabled||eu._4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};iB.styles=iM,iL([(0,ep.SB)()],iB.prototype,"showRetry",void 0),iL([(0,ep.SB)()],iB.prototype,"error",void 0),iB=iL([(0,ed.customElement)("w3m-network-switch-view")],iB);var iD=(0,eh.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,iU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iz=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=eu.NetworkController.state.caipNetwork,this.unsubscribe.push(eu.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){eu.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),eu.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=eu.NetworkController.state,i=eu.j1.sortRequestedNetworks(e,t);return i?.map(t=>eh.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${ef.o(eu.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=eu.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=eu.NetworkController.state,{data:o}=eu.RouterController.state;t&&n?.id!==e.id?r?.includes(e.id)?(await eu.NetworkController.switchActiveNetwork(e),eu._4.navigateAfterNetworkSwitch()):i&&eu.RouterController.push("SwitchNetwork",{...o,network:e}):t||(eu.NetworkController.setCaipNetwork(e),eu.RouterController.push("Connect"))}};iz.styles=iD,iU([(0,ep.SB)()],iz.prototype,"caipNetwork",void 0),iz=iU([(0,ed.customElement)("w3m-networks-view")],iz);var iF=r(77832),iW=(0,eh.iv)`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,iH=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iZ=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=eu.ph.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=eu.sl.state.coinbaseTransactions,this.tokenImages=eu.WM.state.tokenImages,this.unsubscribe.push(eu.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),eu.WM.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},eu.sl.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),eu.sl.clearCursor(),this.fetchTransactions()}render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(e=>{let t=iF.Em.formatDate(e?.metadata?.minedAt),r=e.transfers[0],i=r?.fungible_info;if(!i)return null;let n=i?.icon?.url||this.tokenImages?.[i.symbol||""];return eh.dy`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${ef.o(i.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${t}
          icon=${ef.o(n)}
          symbol=${ef.o(i.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(e=>{let t=parseInt(e,10);return Array(12).fill(null).map((e,t)=>t).reverse().map(e=>{let r=ed.TransactionUtil.getTransactionGroupTitle(t,e),i=this.coinbaseTransactions[t]?.[e];return i?(0,eh.dy)`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(i)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){let e=eu.AccountController.state.address,t=eu.OptionsController.state.projectId;if(!e)throw Error("No address found");if(!t)throw Error("No projectId found");this.loading=!0,await eu.sl.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){let e=new Date;if(0===(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter(e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status).length){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{let e=eu.AccountController.state.address;await eu.sl.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(7).fill((0,eh.dy)` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};iZ.styles=iW,iH([(0,ep.SB)()],iZ.prototype,"selectedOnRampProvider",void 0),iH([(0,ep.SB)()],iZ.prototype,"loading",void 0),iH([(0,ep.SB)()],iZ.prototype,"coinbaseTransactions",void 0),iH([(0,ep.SB)()],iZ.prototype,"tokenImages",void 0),iZ=iH([(0,ed.customElement)("w3m-onramp-activity-view")],iZ);var iV=(0,eh.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,iq=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iG=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=eu.ph.state.paymentCurrency,this.currencies=eu.ph.state.paymentCurrencies,this.currencyImages=eu.WM.state.currencyImages,this.unsubscribe.push(eu.ph.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),eu.WM.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>(0,eh.dy)`
        <wui-list-item
          imageSrc=${(0,ef.o)(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(eu.ph.setPaymentCurrency(e),eu.IN.close())}};iG.styles=iV,iq([(0,ep.SB)()],iG.prototype,"selectedCurrency",void 0),iq([(0,ep.SB)()],iG.prototype,"currencies",void 0),iq([(0,ep.SB)()],iG.prototype,"currencyImages",void 0),iG=iq([(0,ed.customElement)("w3m-onramp-fiat-select-view")],iG);var iY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iK=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.providers=eu.ph.state.providers,this.unsubscribe.push(eu.ph.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){Promise.all(this.providers.map(async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url))).then(e=>{this.providers=this.providers.map((t,r)=>({...t,url:e[r]||""}))})}render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>(0,eh.dy)`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){eu.ph.setSelectedProvider(e),eu.RouterController.push("BuyInProgress"),eu.j1.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){let e=eu.AccountController.state.address,t=eu.NetworkController.state.caipNetwork;if(!e)throw Error("No address found");if(!t?.name)throw Error("No network found");let r=eu.bq.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??eu.bq.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,i=eu.ph.state.purchaseCurrency,n=i?[i.symbol]:eu.ph.state.purchaseCurrencies.map(e=>e.symbol);return await eu.Lr.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:eu.bq.WC_COINBASE_PAY_SDK_CHAINS,assets:n}],partnerUserId:e,purchaseAmount:eu.ph.state.purchaseAmount})}};iY([(0,ep.SB)()],iK.prototype,"providers",void 0),iK=iY([(0,ed.customElement)("w3m-onramp-providers-view")],iK);var iX=(0,eh.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,iJ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iQ=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=eu.ph.state.purchaseCurrencies,this.tokens=eu.ph.state.purchaseCurrencies,this.tokenImages=eu.WM.state.tokenImages,this.unsubscribe.push(eu.ph.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),eu.WM.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>(0,eh.dy)`
        <wui-list-item
          imageSrc=${(0,ef.o)(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(eu.ph.setPurchaseCurrency(e),eu.IN.close())}};iQ.styles=iX,iJ([(0,ep.SB)()],iQ.prototype,"selectedCurrency",void 0),iJ([(0,ep.SB)()],iQ.prototype,"tokens",void 0),iJ([(0,ep.SB)()],iQ.prototype,"tokenImages",void 0),iQ=iJ([(0,ed.customElement)("w3m-onramp-token-select-view")],iQ);var i0=(0,eh.iv)`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let i1=class extends eh.oi{render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};i1.styles=i0,i1=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-transactions-view")],i1);let i2=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],i3=class extends eh.oi{render(){return(0,eh.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${i2}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{eu.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};i3=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-what-is-a-network-view")],i3);let i5=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],i4=class extends eh.oi{render(){return(0,eh.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${i5}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){eu.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),eu.RouterController.push("GetWallet")}};i4=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-what-is-a-wallet-view")],i4);let i6=class extends eh.oi{render(){return(0,eh.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${eu.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};i6=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-what-is-a-buy-view")],i6);var i8=(0,eh.iv)`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,i9=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i7=class extends eh.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=ih.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=eu.RouterController.state.data?.email,this.emailConnector=eu.ConnectorController.getEmailConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return(0,eh.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?(0,eh.dy)`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:(0,eh.dy)` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?(0,eh.dy)`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=ih.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=ih.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.emailConnector&&6===this.otp.length&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=eu.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!eu.ConnectorController.getEmailConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),eu.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){eu.SnackController.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};i7.styles=i8,i9([(0,ep.SB)()],i7.prototype,"loading",void 0),i9([(0,ep.SB)()],i7.prototype,"timeoutTimeLeft",void 0),i9([(0,ep.SB)()],i7.prototype,"error",void 0),i7=i9([(0,ed.customElement)("w3m-email-otp-widget")],i7);var ne=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nt=class extends i7{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=eu.AccountController.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.emailConnector){let t=eu.NetworkController.checkIfSmartAccountEnabled();await this.emailConnector.provider.connectOtp({otp:e}),eu.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await eu.ConnectionController.connectExternal(this.emailConnector),eu.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.emailConnector.name||"Unknown"}}),t&&!this.smartAccountDeployed?eu.RouterController.push("UpgradeToSmartAccount"):eu.IN.close()}}catch(e){throw eu.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),eu.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(eu.AccountController.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};ne([(0,ep.SB)()],nt.prototype,"smartAccountDeployed",void 0),nt=ne([(0,ed.customElement)("w3m-email-verify-otp-view")],nt);var nr=(0,eh.iv)`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,ni=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nn=class extends eh.oi{constructor(){super(),this.email=eu.RouterController.state.data?.email,this.emailConnector=eu.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw Error("w3m-email-verify-device-view: No email connector provided");return(0,eh.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector)try{await this.emailConnector.provider.connectDevice(),eu.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),eu.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),eu.RouterController.replace("EmailVerifyOtp",{email:this.email})}catch(e){eu.RouterController.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),eu.SnackController.showSuccess("Code email resent")}}catch(e){eu.SnackController.showError(e)}finally{this.loading=!1}}};nn.styles=nr,ni([(0,ep.SB)()],nn.prototype,"loading",void 0),nn=ni([(0,ed.customElement)("w3m-email-verify-device-view")],nn);var no=(0,eh.iv)`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,na=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ns=class extends eh.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(eu.IN.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";let e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{let t=e?.getBoundingClientRect()??{left:0,top:0,width:0,height:0};this.iframe.style.width="360px",this.iframe.style.height=`${t.height-10}px`,this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top=`${t.top+5}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),(0,eh.dy)`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}async syncTheme(){let e=eu.ConnectorController.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:eu.ThemeController.getSnapshot().themeVariables})}};ns.styles=no,na([(0,ep.SB)()],ns.prototype,"ready",void 0),ns=na([(0,ed.customElement)("w3m-approve-transaction-view")],ns);let nl=class extends eh.oi{render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${eu.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${eu.bq.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};nl=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-upgrade-wallet-view")],nl);var nc=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nu=class extends eh.oi{constructor(){super(...arguments),this.emailConnector=eu.ConnectorController.getEmailConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.emailConnector)try{this.loading=!0,await this.emailConnector.provider.setPreferredAccount(eM.ACCOUNT_TYPES.SMART_ACCOUNT),await this.emailConnector.provider.connect({preferredAccountType:eM.ACCOUNT_TYPES.SMART_ACCOUNT}),this.loading=!1,eu.RouterController.push("Account")}catch(e){eu.SnackController.showError("Error upgrading to smart account")}}}render(){return(0,eh.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return(0,eh.dy)` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,eh.dy)`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accentBg"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){eu.RouterController.push("Account")}};nc([(0,ep.SB)()],nu.prototype,"emailConnector",void 0),nc([(0,ep.SB)()],nu.prototype,"loading",void 0),nu=nc([(0,ed.customElement)("w3m-upgrade-to-smart-account-view")],nu);var nd=r(69178),nh=(0,eh.iv)`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,np=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nf=class extends eh.oi{constructor(){super(...arguments),this.formRef=(0,nd.V)(),this.initialEmail=eu.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return(0,eh.dy)`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,nd.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${eu.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=eu.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),eu.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),eu.RouterController.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){eu.SnackController.showError(e),this.loading=!1}}};nf.styles=nh,np([(0,ep.SB)()],nf.prototype,"email",void 0),np([(0,ep.SB)()],nf.prototype,"loading",void 0),nf=np([(0,ed.customElement)("w3m-update-email-wallet-view")],nf);let ng=class extends i7{constructor(){super(),this.email=eu.RouterController.state.data?.email,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:e}),eu.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),eu.RouterController.replace("UpdateEmailSecondaryOtp",eu.RouterController.state.data))}catch(e){throw eu.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{eu.RouterController.replace("UpdateEmailWallet",eu.RouterController.state.data)}}};ng=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-update-email-primary-otp-view")],ng);let nw=class extends i7{constructor(){super(),this.email=eu.RouterController.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:e}),eu.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),eu.RouterController.reset("Account"))}catch(e){throw eu.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{eu.RouterController.replace("UpdateEmailWallet",eu.RouterController.state.data)}}};nw=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-update-email-secondary-otp-view")],nw);var nm=(0,eh.iv)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,nb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nv=class extends eh.oi{constructor(){super(...arguments),this.disconecting=!1}render(){return(0,eh.dy)`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=eu.NetworkController.state;return eu.j1.sortRequestedNetworks(e,t).map(e=>(0,eh.dy)`
        <wui-list-network
          imageSrc=${(0,ef.o)(eu.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await eu.ConnectionController.disconnect(),eu.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),eu.IN.close()}catch{eu.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),eu.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){let{isConnected:t}=eu.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=eu.NetworkController.state,{data:o}=eu.RouterController.state;t&&n?.id!==e.id?r?.includes(e.id)?(await eu.NetworkController.switchActiveNetwork(e),eu._4.navigateAfterNetworkSwitch()):i&&eu.RouterController.push("SwitchNetwork",{...o,network:e}):t||(eu.NetworkController.setCaipNetwork(e),eu.RouterController.push("Connect"))}};nv.styles=nm,nb([(0,ep.SB)()],nv.prototype,"disconecting",void 0),nv=nb([(0,ed.customElement)("w3m-unsupported-chain-view")],nv);var ny=(0,eh.iv)`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`,nC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nx=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.address=eu.AccountController.state.address,this.profileName=eu.AccountController.state.profileName,this.network=eu.NetworkController.state.caipNetwork,this.unsubscribe.push(eu.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):eu.SnackController.showError("Account not found")}),eu.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let e=eu.fz.getNetworkImage(this.network);return(0,eh.dy)` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${ed.UiHelperUtil.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${eu.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=eu.NetworkController.getRequestedCaipNetworks(),t=eu.NetworkController.checkIfSmartAccountEnabled(),r=eu.NetworkController.state.caipNetwork;if(ih.getPreferredAccountType()===eM.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?(0,eh.dy)`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[eu.fz.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;let i=(e?.filter(e=>e?.imageId)?.slice(0,5)).map(eu.fz.getNetworkImage).filter(Boolean);return(0,eh.dy)`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${i}
    ></wui-compatible-network>`}onReceiveClick(){eu.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(eu.j1.copyToClopboard(this.address),eu.SnackController.showSuccess("Address copied"))}catch{eu.SnackController.showError("Failed to copy")}}};nx.styles=ny,nC([(0,ep.SB)()],nx.prototype,"address",void 0),nC([(0,ep.SB)()],nx.prototype,"profileName",void 0),nC([(0,ep.SB)()],nx.prototype,"network",void 0),nx=nC([(0,ed.customElement)("w3m-wallet-receive-view")],nx);var nk=(0,eh.iv)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let nE=class extends eh.oi{render(){return(0,eh.dy)` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,caipNetwork:r}=eu.NetworkController.state,i=eu.NetworkController.checkIfSmartAccountEnabled(),n=ih.getPreferredAccountType(),o=eu.j1.sortRequestedNetworks(e,t);if(i&&n===eM.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;o=[r]}return o.map(e=>(0,eh.dy)`
        <wui-list-network
          imageSrc=${(0,ef.o)(eu.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};nE.styles=nk,nE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-wallet-compatible-networks-view")],nE);var n_=(0,eh.iv)`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,nA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nS=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.token=eu.Si.state.token,this.sendTokenAmount=eu.Si.state.sendTokenAmount,this.receiverAddress=eu.Si.state.receiverAddress,this.message="Preview Send",this.unsubscribe.push(eu.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),(0,eh.dy)` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address .receiverAddress=${this.receiverAddress}></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="fill"
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}onButtonClick(){eu.RouterController.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!eu.j1.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.token||(this.message="Select Token")}};nS.styles=n_,nA([(0,ep.SB)()],nS.prototype,"token",void 0),nA([(0,ep.SB)()],nS.prototype,"sendTokenAmount",void 0),nA([(0,ep.SB)()],nS.prototype,"receiverAddress",void 0),nA([(0,ep.SB)()],nS.prototype,"message",void 0),nS=nA([(0,ed.customElement)("w3m-wallet-send-view")],nS);var nR=(0,eh.iv)`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`,n$=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nO=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=eu.AccountController.state.tokenBalance,this.search="",this.onDebouncedSearch=eu.j1.debounce(e=>{this.search=e}),this.unsubscribe.push(eu.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return(0,eh.dy)`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.search?this.tokens=this.tokenBalance?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.tokens=this.tokenBalance,(0,eh.dy)`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.tokens&&this.tokens.length>0?this.tokens.map(e=>(0,eh.dy)`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):(0,eh.dy)`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){eu.RouterController.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){eu.Si.setToken(e),eu.Si.setTokenAmount(void 0),eu.RouterController.goBack()}};nO.styles=nR,n$([(0,ep.SB)()],nO.prototype,"tokenBalance",void 0),n$([(0,ep.SB)()],nO.prototype,"tokens",void 0),n$([(0,ep.SB)()],nO.prototype,"search",void 0),nO=n$([(0,ed.customElement)("w3m-wallet-send-select-token-view")],nO);var nT=(0,eh.iv)`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`,nP=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nI=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.token=eu.Si.state.token,this.sendTokenAmount=eu.Si.state.sendTokenAmount,this.receiverAddress=eu.Si.state.receiverAddress,this.caipNetwork=eu.NetworkController.state.caipNetwork,this.unsubscribe.push(eu.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}),eu.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${Number(this.token?.quantity.numeric).toFixed(2)} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text=${ed.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
            address=${this.receiverAddress??""}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="shade"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="fill"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price*this.sendTokenAmount;return(0,eh.dy)`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`}return null}onSendClick(){eu.RouterController.reset("Account"),setTimeout(()=>{eu.Si.resetSend()},200)}onCancelClick(){eu.RouterController.goBack()}};nI.styles=nT,nP([(0,ep.SB)()],nI.prototype,"token",void 0),nP([(0,ep.SB)()],nI.prototype,"sendTokenAmount",void 0),nP([(0,ep.SB)()],nI.prototype,"receiverAddress",void 0),nP([(0,ep.SB)()],nI.prototype,"caipNetwork",void 0),nI=nP([(0,ed.customElement)("w3m-wallet-send-preview-view")],nI);var nN=(0,eh.iv)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function nj(e){let{connectors:t}=eu.ConnectorController.state,r=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{});return e.map(e=>({...e,installed:!!e.rdns&&!!r[e.rdns??""]})).sort((e,t)=>Number(t.installed)-Number(e.installed))}var nM=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nL="local-paginator",nB=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!eu.ApiController.state.wallets.length,this.wallets=eu.ApiController.state.wallets,this.recommended=eu.ApiController.state.recommended,this.featured=eu.ApiController.state.featured,this.unsubscribe.push(eu.ApiController.subscribeKey("wallets",e=>this.wallets=e),eu.ApiController.subscribeKey("recommended",e=>this.recommended=e),eu.ApiController.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return(0,eh.dy)`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await eu.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>(0,eh.dy)`
        <wui-card-select-loader type="wallet" id=${(0,ef.o)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return nj([...this.featured,...this.recommended,...this.wallets]).map(e=>(0,eh.dy)`
        <wui-card-select
          imageSrc=${(0,ef.o)(eu.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:i}=eu.ApiController.state,n=window.innerWidth<352?3:4,o=e.length+t.length,a=Math.ceil(o/n)*n-o+n;return(a-=e.length?r.length%n:0,0===i&&r.length>0)?null:0===i||[...r,...e,...t].length<i?this.shimmerTemplate(a,nL):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${nL}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=eu.ApiController.state;r.length<t&&eu.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let t=eu.ConnectorController.getConnector(e.id,e.rdns);t?eu.RouterController.push("ConnectingExternal",{connector:t}):eu.RouterController.push("ConnectingWalletConnect",{wallet:e})}};nB.styles=nN,nM([(0,ep.SB)()],nB.prototype,"initial",void 0),nM([(0,ep.SB)()],nB.prototype,"wallets",void 0),nM([(0,ep.SB)()],nB.prototype,"recommended",void 0),nM([(0,ep.SB)()],nB.prototype,"featured",void 0),nB=nM([(0,ed.customElement)("w3m-all-wallets-list")],nB);var nD=(0,eh.iv)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,nU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nz=class extends eh.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?(0,eh.dy)`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await eu.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=eu.ApiController.state,t=nj(e);return e.length?(0,eh.dy)`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>(0,eh.dy)`
            <wui-card-select
              imageSrc=${(0,ef.o)(eu.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:(0,eh.dy)`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let t=eu.ConnectorController.getConnector(e.id,e.rdns);t?eu.RouterController.push("ConnectingExternal",{connector:t}):eu.RouterController.push("ConnectingWalletConnect",{wallet:e})}};nz.styles=nD,nU([(0,ep.SB)()],nz.prototype,"loading",void 0),nU([(0,ep.Cb)()],nz.prototype,"query",void 0),nz=nU([(0,ed.customElement)("w3m-all-wallets-search")],nz);var nF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nW=class extends eh.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(eu.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return(0,eh.dy)`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};nF([(0,ep.Cb)({type:Array})],nW.prototype,"platforms",void 0),nF([(0,ep.Cb)()],nW.prototype,"onSelectPlatfrom",void 0),nF([(0,ep.SB)()],nW.prototype,"buffering",void 0),nW=nF([(0,ed.customElement)("w3m-connecting-header")],nW);let nH=class extends iO{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),eu.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=eu.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await eu.ConnectionController.connectExternal(t):r&&await eu.ConnectionController.connectExternal(r),eu.IN.close(),eu.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){eu.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};nH=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-connecting-wc-browser")],nH);let nZ=class extends iO{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),eu.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:i}=eu.j1.formatNativeUrl(e,this.uri);eu.ConnectionController.setWcLinking({name:t,href:i}),eu.ConnectionController.setRecentWallet(this.wallet),eu.j1.openHref(r,"_blank")}catch{this.error=!0}}};nZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-connecting-wc-desktop")],nZ);let nV=class extends iO{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),eu.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:i}=eu.j1.formatNativeUrl(e,this.uri);eu.ConnectionController.setWcLinking({name:t,href:i}),eu.ConnectionController.setRecentWallet(this.wallet),eu.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=eu.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(eu.ConnectionController.setBuffering(!0),setTimeout(()=>{eu.ConnectionController.setBuffering(!1)},5e3))}};nV=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-connecting-wc-mobile")],nV);var nq=(0,eh.iv)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let nG=class extends iO{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),eu.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,eh.dy)`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return eu.ConnectionController.setWcLinking(void 0),eu.ConnectionController.setRecentWallet(this.wallet),(0,eh.dy)` <wui-qr-code
      size=${e}
      theme=${eu.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,ef.o)(eu.fz.getWalletImage(this.wallet))}
      alt=${(0,ef.o)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,eh.dy)`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};nG.styles=nq,nG=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-connecting-wc-qrcode")],nG);let nY=class extends eh.oi{constructor(){if(super(),this.wallet=eu.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");eu.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return(0,eh.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,ef.o)(eu.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};nY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-connecting-wc-unsupported")],nY);let nK=class extends iO{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",eu.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:i}=eu.j1.formatUniversalUrl(e,this.uri);eu.ConnectionController.setWcLinking({name:t,href:i}),eu.ConnectionController.setRecentWallet(this.wallet),eu.j1.openHref(r,"_blank")}catch{this.error=!0}}};nK=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-connecting-wc-web")],nK);var nX=(0,eh.iv)`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-gray-glass-002);
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`,nJ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let nQ=class extends eh.oi{constructor(){super(...arguments),this.detailsOpen=!1,this.slippageRate=.5}render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100"
                  >1 ${this.sourceTokenSymbol} =
                  ${ed.UiHelperUtil.formatNumberToLocalString(this.toTokenConvertedAmount,3)}
                  ${this.toTokenSymbol}</wui-text
                >
                <wui-text variant="small-400" color="fg-200">
                  $${ed.UiHelperUtil.formatNumberToLocalString(this.sourceTokenPrice)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?(0,eh.dy)`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Network cost</wui-text>
                      <wui-text variant="small-400" color="fg-100">
                        $${ed.UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?(0,eh.dy)` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Price impact</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${ed.UiHelperUtil.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceTokenSymbol?(0,eh.dy)`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Max. slippage</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${ed.UiHelperUtil.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.sourceTokenSymbol} ${this.slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Provider fee</wui-text>
                      <wui-flex alignItems="center" justifyContent="center" class="free-badge">
                        <wui-text variant="micro-700" color="success-100">Free</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};nQ.styles=[nX],nJ([(0,ep.Cb)()],nQ.prototype,"detailsOpen",void 0),nJ([(0,ep.Cb)()],nQ.prototype,"sourceTokenSymbol",void 0),nJ([(0,ep.Cb)()],nQ.prototype,"sourceTokenPrice",void 0),nJ([(0,ep.Cb)()],nQ.prototype,"toTokenSymbol",void 0),nJ([(0,ep.Cb)()],nQ.prototype,"toTokenConvertedAmount",void 0),nJ([(0,ep.Cb)()],nQ.prototype,"gasPriceInUSD",void 0),nJ([(0,ep.Cb)()],nQ.prototype,"priceImpact",void 0),nJ([(0,ep.Cb)()],nQ.prototype,"slippageRate",void 0),nJ([(0,ep.Cb)()],nQ.prototype,"maxSlippage",void 0),nQ=nJ([(0,ed.customElement)("w3m-convert-details")],nQ);var n0=(0,eh.iv)`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-gray-glass-005);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-gray-glass-002);
  }

  :host wui-flex.focus .input_mask__border {
    fill: var(--wui-gray-glass-020);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-200);
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .token-select-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-select-button:hover {
    background: var(--wui-gray-glass-005);
  }

  .token-select-button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-gray-glass-020);
  }

  .market-value {
    min-height: 18px;
  }
`,n1=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let n2=class extends eh.oi{constructor(){super(...arguments),this.focused=!1,this.price=0,this.marketValue="$1.0345,00",this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){let e=this.marketValue||"0",t=iF.C6.bigNumber(e).isGreaterThan(0);return(0,eh.dy)`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        ${"sourceToken"===this.target?ed.convertInputMaskTopSvg:ed.convertInputMaskBottomSvg}
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${this.marketValue}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){let t=","===e.key,r="."===e.key,i=e.key>="0"&&e.key<="9",n=this.value;i||["Backspace","Meta","Ctrl","a","c","v","ArrowLeft","ArrowRight","Tab"].includes(e.key)||r||t||e.preventDefault(),(t||r)&&(n?.includes(".")||n?.includes(","))&&e.preventDefault()}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;let t=e.target.value;","===t||"."===t?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){if(!this.token)return(0,eh.dy)` <wui-button
        class="swap-token-button"
        size="md"
        variant="accentBg"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;let e=this.token.logoURI?(0,eh.dy)`<wui-image src=${this.token.logoURI}></wui-image>`:(0,eh.dy)`
          <wui-icon-box
            size="sm"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="networkPlaceholder"
          ></wui-icon-box>
        `;return(0,eh.dy)`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <button
          size="sm"
          variant="shade"
          class="token-select-button"
          @click=${this.onSelectToken.bind(this)}
        >
          ${e}
          <wui-text variant="paragraph-600" color="fg-100">${this.token.symbol}</wui-text>
        </button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `}tokenBalanceTemplate(){let e=iF.C6.multiply(this.balance,this.price),t=!!e&&e?.isGreaterThan(5e-5);return(0,eh.dy)`
      ${t?(0,eh.dy)`<wui-text variant="small-400" color="fg-200">
            ${ed.UiHelperUtil.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?(0,eh.dy)` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:(0,eh.dy)` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){eu.Xs.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"})}onBuyToken(){eu.RouterController.push("OnRampProviders")}};n2.styles=[n0],n1([(0,ep.Cb)()],n2.prototype,"focused",void 0),n1([(0,ep.Cb)()],n2.prototype,"balance",void 0),n1([(0,ep.Cb)()],n2.prototype,"value",void 0),n1([(0,ep.Cb)()],n2.prototype,"price",void 0),n1([(0,ep.Cb)()],n2.prototype,"marketValue",void 0),n1([(0,ep.Cb)()],n2.prototype,"disabled",void 0),n1([(0,ep.Cb)()],n2.prototype,"target",void 0),n1([(0,ep.Cb)()],n2.prototype,"token",void 0),n1([(0,ep.Cb)()],n2.prototype,"onSetAmount",void 0),n1([(0,ep.Cb)()],n2.prototype,"onSetMaxValue",void 0),n2=n1([(0,ed.customElement)("w3m-convert-input")],n2);var n3=(0,eh.iv)`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,n5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function n4(){let e=eu.RouterController.state.data?.connector?.name,t=eu.RouterController.state.data?.wallet?.name,r=eu.RouterController.state.data?.network?.name,i=t??e,n=eu.ConnectorController.getConnectors(),o=1===n.length&&n[0]?.id==="w3m-email";return{Connect:`Connect ${o?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token"}}let n6=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.heading=n4()[eu.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(eu.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),eu.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){eu.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),eu.RouterController.push("WhatIsAWallet")}async onClose(){if(eu.OptionsController.state.isSiweEnabled){let{SIWEController:e}=await r.e(707).then(r.bind(r,20707));"success"!==e.state.status&&await eu.ConnectionController.disconnect()}eu.IN.close()}titleTemplate(){return(0,eh.dy)`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=eu.RouterController.state;return this.showBack&&!("ApproveTransaction"===e||"UpgradeToSmartAccount"===e)?(0,eh.dy)`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:(0,eh.dy)`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?(0,eh.dy)`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=n4()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=eu.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===eu.RouterController.state.view?eu.RouterController.push("Connect"):eu.RouterController.goBack()}};n6.styles=[n3],n5([(0,ep.SB)()],n6.prototype,"heading",void 0),n5([(0,ep.SB)()],n6.prototype,"buffering",void 0),n5([(0,ep.SB)()],n6.prototype,"showBack",void 0),n6=n5([(0,ed.customElement)("w3m-header")],n6);var n8=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let n9=class extends eh.oi{constructor(){super(...arguments),this.data=[]}render(){return(0,eh.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>(0,eh.dy)`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>(0,eh.dy)`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};n8([(0,ep.Cb)({type:Array})],n9.prototype,"data",void 0),n9=n8([(0,ed.customElement)("w3m-help-widget")],n9);var n7=(0,eh.iv)`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,oe=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ot=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=eu.WM.state.currencyImages,this.tokenImages=eu.WM.state.tokenImages,this.unsubscribe.push(eu.ph.subscribeKey("purchaseCurrency",e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),eu.ph.subscribeKey("paymentCurrency",e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),eu.ph.subscribe(e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),eu.WM.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){eu.ph.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return(0,eh.dy)` <wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?(0,eh.dy)` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>eu.IN.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,ef.o)(t)}></wui-image>
            <wui-text color="fg-100"> ${this.selectedCurrency.symbol} </wui-text>
          </wui-flex>`:(0,eh.dy)`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};ot.styles=n7,oe([(0,ep.Cb)({type:String})],ot.prototype,"type",void 0),oe([(0,ep.Cb)({type:Number})],ot.prototype,"value",void 0),oe([(0,ep.SB)()],ot.prototype,"currencies",void 0),oe([(0,ep.SB)()],ot.prototype,"selectedCurrency",void 0),oe([(0,ep.SB)()],ot.prototype,"currencyImages",void 0),oe([(0,ep.SB)()],ot.prototype,"tokenImages",void 0),ot=oe([(0,ed.customElement)("w3m-swap-input")],ot);var or=(0,eh.iv)`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let oi=class extends eh.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=eu.OptionsController.state;return e||t?(0,eh.dy)`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=eu.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=eu.OptionsController.state;return e?(0,eh.dy)`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=eu.OptionsController.state;return e?(0,eh.dy)`<a href=${e}>Privacy Policy</a>`:null}};oi.styles=[or],oi=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-legal-footer")],oi);var on=(0,eh.iv)`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,oo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let oa=class extends eh.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:i,homepage:n}=this.wallet,o=eu.j1.isMobile(),a=eu.j1.isIos(),s=eu.j1.isAndroid(),l=[t,r,n,i].filter(Boolean).length>1,c=ed.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?(0,eh.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>eu.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&n?(0,eh.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?(0,eh.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?(0,eh.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&eu.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eu.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eu.j1.openHref(this.wallet.homepage,"_blank")}};oa.styles=[on],oo([(0,ep.Cb)({type:Object})],oa.prototype,"wallet",void 0),oa=oo([(0,ed.customElement)("w3m-mobile-download-links")],oa);var os=(0,eh.iv)`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let ol=class extends eh.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=eu.OptionsController.state;return e||t?(0,eh.dy)`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return(0,eh.dy)` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){eu.RouterController.push("WhatIsABuy")}};ol.styles=[os],ol=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-onramp-providers-footer")],ol);var oc=(0,eh.iv)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,ou=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let od={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},oh=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=eu.SnackController.state.open,this.unsubscribe.push(eu.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=eu.SnackController.state,r=od[t];return(0,eh.dy)`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>eu.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};oh.styles=oc,ou([(0,ep.SB)()],oh.prototype,"open",void 0),oh=ou([(0,ed.customElement)("w3m-snackbar")],oh);var op=(0,eh.iv)`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`,of=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let og=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.formRef=(0,nd.V)(),this.connectors=eu.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(eu.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.length>1;return this.connectors.find(e=>"EMAIL"===e.type)?(0,eh.dy)`
      <form ${(0,nd.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?(0,eh.dy)`<wui-separator text="or"></wui-separator>`:null}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?(0,eh.dy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?(0,eh.dy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=eu.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-email-login-widget: Email connector not found");let{action:r}=await t.provider.connectEmail({email:this.email});eu.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(eu.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),eu.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&eu.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=eu.j1.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":eu.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){eu.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};og.styles=op,of([(0,ep.SB)()],og.prototype,"connectors",void 0),of([(0,ep.SB)()],og.prototype,"email",void 0),of([(0,ep.SB)()],og.prototype,"loading",void 0),of([(0,ep.SB)()],og.prototype,"error",void 0),og=of([(0,ed.customElement)("w3m-email-login-widget")],og);var ow=(0,eh.iv)`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`,om=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ob=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.address=eu.AccountController.state.address,this.profileImage=eu.AccountController.state.profileImage,this.profileName=eu.AccountController.state.profileName,this.network=eu.NetworkController.state.caipNetwork,this.disconnecting=!1,this.balance=eu.AccountController.state.balance,this.balanceSymbol=eu.AccountController.state.balanceSymbol,this.unsubscribe.push(eu.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||eu.SnackController.showError("Account not found")}),eu.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=eu.fz.getNetworkImage(this.network);return(0,eh.dy)`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${(0,ef.o)(this.address)}
          address=${(0,ef.o)(this.address)}
          imageSrc=${(0,ef.o)(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?ed.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ed.UiHelperUtil.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${eu.j1.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,ef.o)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){let{enableOnramp:e}=eu.OptionsController.state;return e?(0,eh.dy)`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){let e=eu.MO.getConnectedConnector(),t=eu.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(eu.bq.SECURE_SITE)?null:(0,eh.dy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){eu.RouterController.push("OnRampProviders")}explorerBtnTemplate(){let{addressExplorerUrl:e}=eu.AccountController.state;return e?(0,eh.dy)`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){let e=eu.MO.getConnectedConnector(),t=eu.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;let r=t.provider.getEmail()??"";return(0,eh.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=eu.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(eu.j1.copyToClopboard(this.address),eu.SnackController.showSuccess("Address copied"))}catch{eu.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(eu.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),eu.RouterController.push("Networks"))}onTransactions(){eu.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),eu.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await eu.ConnectionController.disconnect(),eu.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),eu.IN.close()}catch{eu.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),eu.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let{addressExplorerUrl:e}=eu.AccountController.state;e&&eu.j1.openHref(e,"_blank")}onGoToUpgradeView(){eu.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),eu.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){eu.RouterController.push("UpdateEmailWallet",{email:e})}};ob.styles=ow,om([(0,ep.SB)()],ob.prototype,"address",void 0),om([(0,ep.SB)()],ob.prototype,"profileImage",void 0),om([(0,ep.SB)()],ob.prototype,"profileName",void 0),om([(0,ep.SB)()],ob.prototype,"network",void 0),om([(0,ep.SB)()],ob.prototype,"disconnecting",void 0),om([(0,ep.SB)()],ob.prototype,"balance",void 0),om([(0,ep.SB)()],ob.prototype,"balanceSymbol",void 0),ob=om([(0,ed.customElement)("w3m-account-default-widget")],ob);var ov=(0,eh.iv)`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let oy=[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}];var oC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ox=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.address=eu.AccountController.state.address,this.profileImage=eu.AccountController.state.profileImage,this.profileName=eu.AccountController.state.profileName,this.smartAccountDeployed=eu.AccountController.state.smartAccountDeployed,this.network=eu.NetworkController.state.caipNetwork,this.currentTab=eu.AccountController.state.currentTab,this.tokenBalance=eu.AccountController.state.tokenBalance,this.unsubscribe.push(eu.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed):eu.IN.close()}),eu.NetworkController.subscribe(e=>{this.network=e.caipNetwork}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=eu.fz.getNetworkImage(this.network);return(0,eh.dy)`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,ef.o)(this.address)}
        networkSrc=${(0,ef.o)(e)}
        icon="chevronBottom"
        avatarSrc=${(0,ef.o)(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${!!this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Convert" icon="recycleHorizontal"></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onSendClick.bind(this)}
          text="Send"
          icon="send"
        ></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${oy}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}listContentTemplate(){return 0===this.currentTab?(0,eh.dy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?(0,eh.dy)`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?(0,eh.dy)`<w3m-account-activity-widget></w3m-account-activity-widget>`:(0,eh.dy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=eu.j1.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:r="00"}=eu.j1.formatTokenBalance(e);return(0,eh.dy)`<wui-balance dollars=${t} pennies=${r}></wui-balance>`}return(0,eh.dy)`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){let e=eu.NetworkController.checkIfSmartAccountEnabled(),t=ih.getPreferredAccountType();return!e||t===eM.ACCOUNT_TYPES.SMART_ACCOUNT||this.smartAccountDeployed?null:(0,eh.dy)` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){eu.AccountController.setCurrentTab(e)}onProfileButtonClick(){eu.RouterController.push("AccountSettings")}onBuyClick(){eu.RouterController.push("OnRampProviders")}onReceiveClick(){eu.RouterController.push("WalletReceive")}onSendClick(){eu.RouterController.push("WalletSend")}onUpdateToSmartAccount(){eu.RouterController.push("UpgradeToSmartAccount")}};ox.styles=ov,oC([(0,ep.SB)()],ox.prototype,"address",void 0),oC([(0,ep.SB)()],ox.prototype,"profileImage",void 0),oC([(0,ep.SB)()],ox.prototype,"profileName",void 0),oC([(0,ep.SB)()],ox.prototype,"smartAccountDeployed",void 0),oC([(0,ep.SB)()],ox.prototype,"network",void 0),oC([(0,ep.SB)()],ox.prototype,"currentTab",void 0),oC([(0,ep.SB)()],ox.prototype,"tokenBalance",void 0),ox=oC([(0,ed.customElement)("w3m-account-wallet-features-widget")],ox);var ok=(0,eh.iv)`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;let oE=class extends eh.oi{render(){return(0,eh.dy)`<w3m-activity-list page="account"></w3m-activity-list>`}};oE.styles=ok,oE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-account-activity-widget")],oE);var o_=(0,eh.iv)`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let oA=class extends eh.oi{render(){return(0,eh.dy)`${this.nftTemplate()}`}nftTemplate(){return(0,eh.dy)` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){eu.RouterController.push("WalletReceive")}};oA.styles=o_,oA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,ed.customElement)("w3m-account-nfts-widget")],oA);var oS=(0,eh.iv)`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`,oR=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let o$=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=eu.AccountController.state.tokenBalance,this.unsubscribe.push(eu.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){eu.AccountController.fetchTokenBalance()}render(){return(0,eh.dy)`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?(0,eh.dy)`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:(0,eh.dy)` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map(e=>eh.dy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){eu.RouterController.push("WalletReceive")}onBuyClick(){eu.RouterController.push("OnRampProviders")}};o$.styles=oS,oR([(0,ep.SB)()],o$.prototype,"tokenBalance",void 0),o$=oR([(0,ed.customElement)("w3m-account-tokens-widget")],o$);var oO=(0,eh.iv)`
  :host {
    height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,oT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let oP="last-transaction",oI=class extends eh.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=eu.AccountController.state.address,this.transactionsByYear=eu.sl.state.transactionsByYear,this.loading=eu.sl.state.loading,this.empty=eu.sl.state.empty,this.next=eu.sl.state.next,eu.sl.clearCursor(),this.unsubscribe.push(eu.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,eu.sl.resetTransactions(),eu.sl.fetchTransactions(e.address))}),eu.sl.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){eu.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,eh.dy)` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{let i=r===e.length-1,n=parseInt(t,10);return Array(12).fill(null).map((e,t)=>t).reverse().map(e=>{let t=ed.TransactionUtil.getTransactionGroupTitle(n,e),r=this.transactionsByYear[n]?.[e];return r?(0,eh.dy)`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(r,i)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:n,isAllNFT:o,images:a,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1;return l?.length!==2||o?u?l.map((e,i)=>{let n=ed.TransactionUtil.getTransferDescription(e),o=t&&i===l.length-1;return(0,eh.dy)` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?oP:""}
          status=${s}
          type=${c}
          .onlyDirectionIcon=${!0}
          .images=${[a[i]]}
          .descriptions=${[n]}
        ></wui-transaction-list-item>`}):(0,eh.dy)`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?oP:""}
        status=${s}
        type=${c}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `:(0,eh.dy)`
        <wui-transaction-list-item
          date=${r}
          .direction=${n}
          id=${t&&this.next?oP:""}
          status=${s}
          type=${c}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map((r,i)=>{let n=t&&i===e.length-1;return(0,eh.dy)`${this.templateRenderTransaction(r,n)}`})}emptyStateActivity(){return(0,eh.dy)`<wui-flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return(0,eh.dy)`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?(0,eh.dy)`${this.emptyStateAccount()}`:(0,eh.dy)`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill((0,eh.dy)` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){eu.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=eu.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(eu.sl.fetchTransactions(this.address),eu.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${oP}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=iF.Em.formatDate(e?.metadata?.minedAt),r=ed.TransactionUtil.getTransactionDescriptions(e),i=e?.transfers,n=e?.transfers?.[0],o=!!n&&e?.transfers?.every(e=>!!e.nft_info),a=ed.TransactionUtil.getTransactionImages(i);return{date:t,direction:n?.direction,descriptions:r,isAllNFT:o,images:a,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};oI.styles=oO,oT([(0,ep.Cb)()],oI.prototype,"page",void 0),oT([(0,ep.SB)()],oI.prototype,"address",void 0),oT([(0,ep.SB)()],oI.prototype,"transactionsByYear",void 0),oT([(0,ep.SB)()],oI.prototype,"loading",void 0),oT([(0,ep.SB)()],oI.prototype,"empty",void 0),oT([(0,ep.SB)()],oI.prototype,"next",void 0),oI=oT([(0,ed.customElement)("w3m-activity-list")],oI);var oN=(0,eh.iv)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`,oj=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let oM=class extends eh.oi{render(){return(0,eh.dy)` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?(0,eh.dy)`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
        >Select token</wui-token-button
      >`:(0,eh.dy)`<wui-button
      size="md"
      variant="accentBg"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){eu.RouterController.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price*this.sendTokenAmount;return(0,eh.dy)`<wui-text variant="small-400" color="fg-200">$${e.toFixed(2)}</wui-text>`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?(0,eh.dy)` <wui-text variant="small-400" color="error-100">
          ${ed.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:(0,eh.dy)` <wui-text variant="small-400" color="fg-200">
        ${ed.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?(0,eh.dy)`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:(0,eh.dy)`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){eu.Si.setTokenAmount(e.detail)}onMaxClick(){this.token&&eu.Si.setTokenAmount(Number(this.token?.quantity.numeric))}onBuyClick(){eu.RouterController.push("OnRampProviders")}};oM.styles=oN,oj([(0,ep.Cb)({type:Object})],oM.prototype,"token",void 0),oj([(0,ep.Cb)({type:Number})],oM.prototype,"sendTokenAmount",void 0),oM=oj([(0,ed.customElement)("w3m-input-token")],oM);var oL=(0,eh.iv)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`,oB=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let oD=class extends eh.oi{constructor(){super(...arguments),this.inputElementRef=(0,nd.V)(),this.instructionElementRef=(0,nd.V)(),this.instructionHidden=!!this.receiverAddress}firstUpdated(){this.receiverAddress&&(this.instructionHidden=!0),this.checkHidden()}render(){return(0,eh.dy)` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${(0,nd.i)(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          size="sm"
          variant="shade"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        ?disabled=${!this.instructionHidden}
        ${(0,nd.i)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.receiverAddress??""}
        autocomplete="off"
      >
${this.receiverAddress??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.receiverAddress||this.instructionHidden||this.focusInput()}onBlur(){!this.receiverAddress&&this.instructionHidden&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){let e=await navigator.clipboard.readText();eu.Si.setReceiverAddress(e)}onInputChange(e){let t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),eu.Si.setReceiverAddress(t.value)}};oD.styles=oL,oB([(0,ep.Cb)()],oD.prototype,"receiverAddress",void 0),oB([(0,ep.SB)()],oD.prototype,"instructionHidden",void 0),oD=oB([(0,ed.customElement)("w3m-input-address")],oD);var oU=(0,eh.iv)`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-gray-glass-010);
  }
`,oz=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let oF=class extends eh.oi{render(){return(0,eh.dy)` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$3.20"></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${ed.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?(0,eh.dy)` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,ef.o)(eu.fz.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&eu.RouterController.push("Networks",{network:e})}};oF.styles=oU,oz([(0,ep.Cb)()],oF.prototype,"receiverAddress",void 0),oz([(0,ep.Cb)({type:Object})],oF.prototype,"caipNetwork",void 0),oF=oz([(0,ed.customElement)("w3m-wallet-send-details")],oF);let oW=!1;class oH{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{eu.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{eu.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{eu.AccountController.setBalance(e,t)},this.fetchTokenBalance=()=>{eu.AccountController.fetchTokenBalance()},this.setProfileName=e=>{eu.AccountController.setProfileName(e)},this.setProfileImage=e=>{eu.AccountController.setProfileImage(e)},this.resetAccount=()=>{eu.AccountController.resetAccount()},this.setCaipNetwork=e=>{eu.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>eu.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{eu.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>eu.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{eu.NetworkController.resetNetwork()},this.setConnectors=e=>{eu.ConnectorController.setConnectors(e)},this.addConnector=e=>{eu.ConnectorController.addConnector(e)},this.getConnectors=()=>eu.ConnectorController.getConnectors(),this.resetWcConnection=()=>{eu.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>eu.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{eu.AccountController.setAddressExplorerUrl(e)},this.setSmartAccountDeployed=e=>{eu.AccountController.setSmartAccountDeployed(e)},this.setConnectedWalletInfo=e=>{eu.AccountController.setConnectedWalletInfo(e)},this.setSmartAccountEnabledNetworks=e=>{eu.NetworkController.setSmartAccountEnabledNetworks(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),eu.IN.open(e)}async close(){await this.initOrContinue(),eu.IN.close()}setLoading(e){eu.IN.setLoading(e)}getThemeMode(){return eu.ThemeController.state.themeMode}getThemeVariables(){return eu.ThemeController.state.themeVariables}setThemeMode(e){eu.ThemeController.setThemeMode(e),(0,ed.setColorTheme)(eu.ThemeController.state.themeMode)}setThemeVariables(e){eu.ThemeController.setThemeVariables(e),(0,ed.setThemeVariables)(eu.ThemeController.state.themeVariables)}subscribeTheme(e){return eu.ThemeController.subscribe(e)}getWalletInfo(){return eu.AccountController.state.connectedWalletInfo}subscribeWalletInfo(e){return eu.AccountController.subscribeKey("connectedWalletInfo",e)}getState(){return{...eu.Ie.state}}subscribeState(e){return eu.Ie.subscribe(e)}showErrorMessage(e){eu.SnackController.showError(e)}showSuccessMessage(e){eu.SnackController.showSuccess(e)}getEvent(){return{...eu.Xs.state}}subscribeEvents(e){return eu.Xs.subscribe(e)}async initControllers(e){if(eu.NetworkController.setClient(e.networkControllerClient),eu.NetworkController.setDefaultCaipNetwork(e.defaultChain),eu.OptionsController.setProjectId(e.projectId),eu.OptionsController.setAllWallets(e.allWallets),eu.OptionsController.setIncludeWalletIds(e.includeWalletIds),eu.OptionsController.setExcludeWalletIds(e.excludeWalletIds),eu.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),eu.OptionsController.setTokens(e.tokens),eu.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),eu.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),eu.OptionsController.setCustomWallets(e.customWallets),eu.OptionsController.setEnableAnalytics(e.enableAnalytics),eu.OptionsController.setSdkVersion(e._sdkVersion),eu.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient){let{SIWEController:t}=await r.e(707).then(r.bind(r,20707));t.setSIWEClient(e.siweControllerClient)}e.metadata&&eu.OptionsController.setMetadata(e.metadata),e.themeMode&&eu.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&eu.ThemeController.setThemeVariables(e.themeVariables),e.enableOnramp&&eu.OptionsController.setOnrampEnabled(!!e.enableOnramp),e.enableWalletFeatures&&eu.OptionsController.setWalletFeaturesEnabled(!!e.enableWalletFeatures),e.allowUnsupportedChain&&eu.NetworkController.setAllowUnsupportedChain(e.allowUnsupportedChain)}async initOrContinue(){return!this.initPromise&&!oW&&eu.j1.isClient()&&(oW=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,28080)),Promise.resolve().then(r.bind(r,90078))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}async function oZ(e){if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let t=await e?.getProvider(),r=t?.signer?.session?.namespaces,i=r?.[ik.EIP155]?.methods,n=r?.[ik.EIP155]?.chains;return{supportsAllNetworks:!!i?.includes(ik.ADD_CHAIN_METHOD),approvedCaipNetworkIds:n}}class oV extends oH{constructor(e){let{wagmiConfig:t,siweConfig:r,defaultChain:i,tokens:n,_sdkVersion:o,...a}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async e=>{let t=iF.p1.caipNetworkIdToNumber(e?.id);t&&await (0,f.c)(this.wagmiConfig,{chainId:t})},getApprovedCaipNetworksData:async()=>new Promise(e=>{let r=new Map(t.state.connections).get(t.state.current||"");r?.connector?.id===ik.EMAIL_CONNECTOR_ID?e({supportsAllNetworks:!1,approvedCaipNetworkIds:iE.WalletConnectRpcChainIds.map(e=>`${ik.EIP155}:${e}`)}):r?.connector?.id===ik.WALLET_CONNECT_CONNECTOR_ID&&e(oZ(t.connectors.find(e=>e.id===ik.WALLET_CONNECT_CONNECTOR_ID))),e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},connectionControllerClient:{connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===ik.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await r.getProvider()).on("display_uri",t=>{e(t)});let i=iF.p1.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await w(this.wagmiConfig,{connector:r,chainId:i})},connectExternal:async({id:e,provider:r,info:i})=>{let n=t.connectors.find(t=>t.id===e);if(!n)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&i&&n.id===ik.EIP6963_CONNECTOR_ID&&n.setEip6963Wallet?.({provider:r,info:i});let o=iF.p1.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await w(this.wagmiConfig,{connector:n,chainId:o})},checkInstalled:e=>{let t=this.getConnectors().find(e=>"INJECTED"===e.type);return e?!!t&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)]):!!window.ethereum},disconnect:async()=>{await (0,m.z)(this.wagmiConfig),r?.options?.signOutOnDisconnect&&await r.signOut()},signMessage:async e=>E(this.wagmiConfig,{message:e})},siweControllerClient:r,defaultChain:function(e){if(e)return{id:`${ik.EIP155}:${e.id}`,name:e.name,imageId:iE.EIP155NetworkImageIds[e.id]}}(i),tokens:i_.getCaipTokens(n),_sdkVersion:o??`html-wagmi-${ik.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),this.initEmailConnectorListeners([...t.connectors]),function(e,t){let{onChange:r}=t;e._internal.connectors.subscribe((e,t)=>{r(Object.values(e),t)})}(this.wagmiConfig,{onChange:e=>this.syncConnectors(e)}),(0,_.u)(this.wagmiConfig,{onChange:e=>this.syncAccount({...e})})}getState(){let e=super.getState();return{...e,selectedNetworkId:iF.p1.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:iF.p1.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${ik.EIP155}:${e.id}`,name:e.name,imageId:iE.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:r,connector:i}){if(this.resetAccount(),this.syncNetwork(e,r,t),t&&e&&r){let n=`${ik.EIP155}:${r}:${e}`;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.syncConnectedWalletInfo(i),this.fetchTokenBalance(),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e,t,r){let i=this.wagmiConfig.chains.find(e=>e.id===t);if(i||t){let n=i?.name??t?.toString(),o=Number(i?.id??t),a=`${ik.EIP155}:${o}`;if(this.setCaipNetwork({id:a,name:n,imageId:iE.EIP155NetworkImageIds[o],imageUrl:this.options?.chainImages?.[o]}),r&&e&&t){let r=`${ik.EIP155}:${o}:${e}`;if(this.setCaipAddress(r),i?.blockExplorers?.default?.url){let t=`${i.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,t),await this.syncBalance(e,t))}}}async syncProfile(e,t){if(t!==ec.R.id){this.setProfileName(null),this.setProfileImage(null);return}try{let{name:r,avatar:i}=await this.fetchIdentity({caipChainId:`${ik.EIP155}:${t}`,address:e});this.setProfileName(r),this.setProfileImage(i)}catch{let r=await function(e,t){let{chainId:r,...i}=t,n=e.getClient({chainId:r});return(0,x.s)(n,D,"getEnsName")(i)}(this.wagmiConfig,{address:e,chainId:t});if(r){this.setProfileName(r);let e=await function(e,t){let{chainId:r,...i}=t,n=e.getClient({chainId:r});return(0,x.s)(n,es,"getEnsAvatar")(i)}(this.wagmiConfig,{name:r,chainId:t});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=this.wagmiConfig.chains.find(e=>e.id===t);if(r){let t=await (0,el.s)(this.wagmiConfig,{address:e,chainId:r.id,token:this.options?.tokens?.[r.id]?.address});this.setBalance(t.formatted,t.symbol);return}this.setBalance(void 0,void 0)}async syncConnectedWalletInfo(e){if(!e)throw Error("syncConnectedWalletInfo - connector is undefined");if(e.id===ik.WALLET_CONNECT_CONNECTOR_ID&&e.getProvider){let t=await e.getProvider();t.session&&this.setConnectedWalletInfo({...t.session.peer.metadata,name:t.session.peer.metadata.name,icon:t.session.peer.metadata.icons?.[0]})}else this.setConnectedWalletInfo({name:e.name,icon:e.icon})}syncConnectors(e){let t=new Set,r=e.filter(e=>!t.has(e.id)&&t.add(e.id)),i=[],n=ik.COINBASE_SDK_CONNECTOR_ID,o=r.find(e=>e.id===ik.CONNECTOR_RDNS_MAP[ik.COINBASE_CONNECTOR_ID]);r.forEach(({id:e,name:t,type:r,icon:a})=>{o&&e===n||ik.EMAIL_CONNECTOR_ID===e||i.push({id:e,explorerId:iE.ConnectorExplorerIds[e],imageUrl:this.options?.connectorImages?.[e]??a,name:iE.ConnectorNamesMap[e]??t,imageId:iE.ConnectorImageIds[e],type:iE.ConnectorTypesMap[r]??"EXTERNAL",info:{rdns:e}})}),this.setConnectors(i),this.syncEmailConnector(r)}async syncEmailConnector(e){let t=e.find(({id:e})=>e===ik.EMAIL_CONNECTOR_ID);if(t){let e=await t.getProvider();this.addConnector({id:ik.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e})}}async initEmailConnectorListeners(e){let t=e.find(({id:e})=>e===ik.EMAIL_CONNECTOR_ID);t&&(await this.listenEmailConnector(t),await this.listenModal(t))}async listenEmailConnector(e){if("undefined"!=typeof window&&e){super.setLoading(!0);let t=await e.getProvider(),r=t.getLoginEmailUsed();super.setLoading(r),r&&this.setIsConnected(!1),t.onRpcRequest(e=>{if(ih.checkIfRequestExists(e))ih.checkIfRequestIsAllowed(e)||super.open({view:"ApproveTransaction"});else{super.open();let r=ih.getRequestMethod(e);console.error(eM.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:r}),setTimeout(()=>{this.showErrorMessage(eM.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),t.rejectRpcRequest()}}),t.onRpcResponse(()=>{super.close()}),t.onNotConnected(()=>{this.setIsConnected(!1),super.setLoading(!1)}),t.onIsConnected(e=>{this.setIsConnected(!0),this.setSmartAccountDeployed(!!e.smartAccountDeployed),super.setLoading(!1)}),t.onGetSmartAccountEnabledNetworks(e=>{this.setSmartAccountEnabledNetworks(e)}),t.onSetPreferredAccount(({address:t})=>{if(!t)return;let r=iF.p1.caipNetworkIdToNumber(this.getCaipNetwork()?.id);this.syncAccount({address:t,chainId:r,isConnected:!0,connector:e})})}}async listenModal(e){let t=await e.getProvider();this.subscribeState(e=>{e.open||t.rejectRpcRequest()})}}function oq(e){return!o&&(n=o=new oV({...e,_sdkVersion:`react-wagmi-${ik.VERSION}`})),o}},5121:function(e,t,r){"use strict";let i,n,o;r.d(t,{Z:function(){return eH}});var a={};function s(e,t){return function(){return e.apply(t,arguments)}}r.r(a),r.d(a,{hasBrowserEnv:function(){return eo},hasStandardBrowserEnv:function(){return ea},hasStandardBrowserWebWorkerEnv:function(){return es}});let{toString:l}=Object.prototype,{getPrototypeOf:c}=Object,u=(i=Object.create(null),e=>{let t=l.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())}),d=e=>(e=e.toLowerCase(),t=>u(t)===e),h=e=>t=>typeof t===e,{isArray:p}=Array,f=h("undefined"),g=d("ArrayBuffer"),w=h("string"),m=h("function"),b=h("number"),v=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==u(e))return!1;let t=c(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},C=d("Date"),x=d("File"),k=d("Blob"),E=d("FileList"),_=d("URLSearchParams");function A(e,t,{allOwnKeys:r=!1}={}){let i,n;if(null!=e){if("object"!=typeof e&&(e=[e]),p(e))for(i=0,n=e.length;i<n;i++)t.call(null,e[i],i,e);else{let n;let o=r?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;for(i=0;i<a;i++)n=o[i],t.call(null,e[n],n,e)}}}function S(e,t){let r;t=t.toLowerCase();let i=Object.keys(e),n=i.length;for(;n-- >0;)if(t===(r=i[n]).toLowerCase())return r;return null}let R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,$=e=>!f(e)&&e!==R,O=(n="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>n&&e instanceof n),T=d("HTMLFormElement"),P=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),I=d("RegExp"),N=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),i={};A(r,(r,n)=>{let o;!1!==(o=t(r,n,e))&&(i[n]=o||r)}),Object.defineProperties(e,i)},j="abcdefghijklmnopqrstuvwxyz",M="0123456789",L={DIGIT:M,ALPHA:j,ALPHA_DIGIT:j+j.toUpperCase()+M},B=d("AsyncFunction");var D={isArray:p,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=u(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer)},isString:w,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:y,isUndefined:f,isDate:C,isFile:x,isBlob:k,isRegExp:I,isFunction:m,isStream:e=>v(e)&&m(e.pipe),isURLSearchParams:_,isTypedArray:O,isFileList:E,forEach:A,merge:function e(){let{caseless:t}=$(this)&&this||{},r={},i=(i,n)=>{let o=t&&S(r,n)||n;y(r[o])&&y(i)?r[o]=e(r[o],i):y(i)?r[o]=e({},i):p(i)?r[o]=i.slice():r[o]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&A(arguments[e],i);return r},extend:(e,t,r,{allOwnKeys:i}={})=>(A(t,(t,i)=>{r&&m(t)?e[i]=s(t,r):e[i]=t},{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,i)=>{let n,o,a;let s={};if(t=t||{},null==e)return t;do{for(o=(n=Object.getOwnPropertyNames(e)).length;o-- >0;)a=n[o],(!i||i(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=!1!==r&&c(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:d,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let i=e.indexOf(t,r);return -1!==i&&i===r},toArray:e=>{if(!e)return null;if(p(e))return e;let t=e.length;if(!b(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let i=(e&&e[Symbol.iterator]).call(e);for(;(r=i.next())&&!r.done;){let i=r.value;t.call(e,i[0],i[1])}},matchAll:(e,t)=>{let r;let i=[];for(;null!==(r=e.exec(t));)i.push(r);return i},isHTMLForm:T,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:N,freezeMethods:e=>{N(e,(t,r)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(m(e[r])){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(p(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:S,global:R,isContextDefined:$,ALPHABET:L,generateString:(e=16,t=L.ALPHA_DIGIT)=>{let r="",{length:i}=t;for(;e--;)r+=t[Math.random()*i|0];return r},isSpecCompliantForm:function(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,i)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;let n=p(e)?[]:{};return A(e,(e,t)=>{let o=r(e,i+1);f(o)||(n[t]=o)}),t[i]=void 0,n}}return e};return r(e,0)},isAsyncFn:B,isThenable:e=>e&&(v(e)||m(e))&&m(e.then)&&m(e.catch)};function U(e,t,r,i,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),i&&(this.request=i),n&&(this.response=n)}D.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let z=U.prototype,F={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{F[e]={value:e}}),Object.defineProperties(U,F),Object.defineProperty(z,"isAxiosError",{value:!0}),U.from=(e,t,r,i,n,o)=>{let a=Object.create(z);return D.toFlatObject(e,a,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),U.call(a,e.message,t,r,i,n),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};var W=r(48764).Buffer;function H(e){return D.isPlainObject(e)||D.isArray(e)}function Z(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}function V(e,t,r){return e?e.concat(t).map(function(e,t){return e=Z(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}let q=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});var G=function(e,t,r){if(!D.isObject(e))throw TypeError("target must be an object");t=t||new FormData;let i=(r=D.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!D.isUndefined(t[e])})).metaTokens,n=r.visitor||c,o=r.dots,a=r.indexes,s=(r.Blob||"undefined"!=typeof Blob&&Blob)&&D.isSpecCompliantForm(t);if(!D.isFunction(n))throw TypeError("visitor must be a function");function l(e){if(null===e)return"";if(D.isDate(e))return e.toISOString();if(!s&&D.isBlob(e))throw new U("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(e)||D.isTypedArray(e)?s&&"function"==typeof Blob?new Blob([e]):W.from(e):e}function c(e,r,n){let s=e;if(e&&!n&&"object"==typeof e){if(D.endsWith(r,"{}"))r=i?r:r.slice(0,-2),e=JSON.stringify(e);else{var c;if(D.isArray(e)&&(c=e,D.isArray(c)&&!c.some(H))||(D.isFileList(e)||D.endsWith(r,"[]"))&&(s=D.toArray(e)))return r=Z(r),s.forEach(function(e,i){D.isUndefined(e)||null===e||t.append(!0===a?V([r],i,o):null===a?r:r+"[]",l(e))}),!1}}return!!H(e)||(t.append(V(n,r,o),l(e)),!1)}let u=[],d=Object.assign(q,{defaultVisitor:c,convertValue:l,isVisitable:H});if(!D.isObject(e))throw TypeError("data must be an object");return!function e(r,i){if(!D.isUndefined(r)){if(-1!==u.indexOf(r))throw Error("Circular reference detected in "+i.join("."));u.push(r),D.forEach(r,function(r,o){!0===(!(D.isUndefined(r)||null===r)&&n.call(t,r,D.isString(o)?o.trim():o,i,d))&&e(r,i?i.concat(o):[o])}),u.pop()}}(e),t};function Y(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function K(e,t){this._pairs=[],e&&G(e,this,t)}let X=K.prototype;function J(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Q(e,t,r){let i;if(!t)return e;let n=r&&r.encode||J,o=r&&r.serialize;if(i=o?o(t,r):D.isURLSearchParams(t)?t.toString():new K(t,r).toString(n)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}X.append=function(e,t){this._pairs.push([e,t])},X.toString=function(e){let t=e?function(t){return e.call(this,t,Y)}:Y;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};class ee{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(t){null!==t&&e(t)})}}var et={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},er="undefined"!=typeof URLSearchParams?URLSearchParams:K,ei="undefined"!=typeof FormData?FormData:null,en="undefined"!=typeof Blob?Blob:null;let eo="undefined"!=typeof window&&"undefined"!=typeof document,ea=(o="undefined"!=typeof navigator&&navigator.product,eo&&0>["ReactNative","NativeScript","NS"].indexOf(o)),es="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var el={...a,isBrowser:!0,classes:{URLSearchParams:er,FormData:ei,Blob:en},protocols:["http","https","file","blob","url","data"]},ec=function(e){if(D.isFormData(e)&&D.isFunction(e.entries)){let t={};return D.forEachEntry(e,(e,r)=>{!function e(t,r,i,n){let o=t[n++];if("__proto__"===o)return!0;let a=Number.isFinite(+o),s=n>=t.length;return(o=!o&&D.isArray(i)?i.length:o,s)?D.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r:(i[o]&&D.isObject(i[o])||(i[o]=[]),e(t,r,i[o],n)&&D.isArray(i[o])&&(i[o]=function(e){let t,r;let i={},n=Object.keys(e),o=n.length;for(t=0;t<o;t++)i[r=n[t]]=e[r];return i}(i[o]))),!a}(D.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};let eu={transitional:et,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let i=t.getContentType()||"",n=i.indexOf("application/json")>-1,o=D.isObject(e);if(o&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return n?JSON.stringify(ec(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1){var a,s;return(a=e,s=this.formSerializer,G(a,new el.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,i){return el.isNode&&D.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},s))).toString()}if((r=D.isFileList(e))||i.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return G(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e,t,r){if(D.isString(e))try{return(0,JSON.parse)(e),D.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||eu.transitional,r=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&D.isString(e)&&(r&&!this.responseType||i)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&i){if("SyntaxError"===e.name)throw U.from(e,U.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:el.classes.FormData,Blob:el.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],e=>{eu.headers[e]={}});let ed=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var eh=e=>{let t,r,i;let n={};return e&&e.split("\n").forEach(function(e){i=e.indexOf(":"),t=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!t||n[t]&&ed[t]||("set-cookie"===t?n[t]?n[t].push(r):n[t]=[r]:n[t]=n[t]?n[t]+", "+r:r)}),n};let ep=Symbol("internals");function ef(e){return e&&String(e).trim().toLowerCase()}function eg(e){return!1===e||null==e?e:D.isArray(e)?e.map(eg):String(e)}let ew=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function em(e,t,r,i,n){if(D.isFunction(i))return i.call(this,t,r);if(n&&(t=r),D.isString(t)){if(D.isString(i))return -1!==t.indexOf(i);if(D.isRegExp(i))return i.test(t)}}class eb{constructor(e){e&&this.set(e)}set(e,t,r){let i=this;function n(e,t,r){let n=ef(t);if(!n)throw Error("header name must be a non-empty string");let o=D.findKey(i,n);o&&void 0!==i[o]&&!0!==r&&(void 0!==r||!1===i[o])||(i[o||t]=eg(e))}let o=(e,t)=>D.forEach(e,(e,r)=>n(e,r,t));return D.isPlainObject(e)||e instanceof this.constructor?o(e,t):D.isString(e)&&(e=e.trim())&&!ew(e)?o(eh(e),t):null!=e&&n(t,e,r),this}get(e,t){if(e=ef(e)){let r=D.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=i.exec(e);)r[t[1]]=t[2];return r}(e);if(D.isFunction(t))return t.call(this,e,r);if(D.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ef(e)){let r=D.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||em(this,this[r],r,t)))}return!1}delete(e,t){let r=this,i=!1;function n(e){if(e=ef(e)){let n=D.findKey(r,e);n&&(!t||em(r,r[n],n,t))&&(delete r[n],i=!0)}}return D.isArray(e)?e.forEach(n):n(e),i}clear(e){let t=Object.keys(this),r=t.length,i=!1;for(;r--;){let n=t[r];(!e||em(this,this[n],n,e,!0))&&(delete this[n],i=!0)}return i}normalize(e){let t=this,r={};return D.forEach(this,(i,n)=>{let o=D.findKey(r,n);if(o){t[o]=eg(i),delete t[n];return}let a=e?n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(n).trim();a!==n&&delete t[n],t[a]=eg(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return D.forEach(this,(r,i)=>{null!=r&&!1!==r&&(t[i]=e&&D.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=(this[ep]=this[ep]={accessors:{}}).accessors,r=this.prototype;function i(e){let i=ef(e);t[i]||(!function(e,t){let r=D.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+r,{value:function(e,r,n){return this[i].call(this,t,e,r,n)},configurable:!0})})}(r,e),t[i]=!0)}return D.isArray(e)?e.forEach(i):i(e),this}}function ev(e,t){let r=this||eu,i=t||r,n=eb.from(i.headers),o=i.data;return D.forEach(e,function(e){o=e.call(r,o,n.normalize(),t?t.status:void 0)}),n.normalize(),o}function ey(e){return!!(e&&e.__CANCEL__)}function eC(e,t,r){U.call(this,null==e?"canceled":e,U.ERR_CANCELED,t,r),this.name="CanceledError"}eb.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),D.reduceDescriptors(eb.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),D.freezeMethods(eb),D.inherits(eC,U,{__CANCEL__:!0});var ex=el.hasStandardBrowserEnv?{write(e,t,r,i,n,o){let a=[e+"="+encodeURIComponent(t)];D.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),D.isString(i)&&a.push("path="+i),D.isString(n)&&a.push("domain="+n),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function ek(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e:t}var eE=el.hasStandardBrowserEnv?function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){let i=e;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){let r=D.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},e_=function(e,t){let r;let i=Array(e=e||10),n=Array(e),o=0,a=0;return t=void 0!==t?t:1e3,function(s){let l=Date.now(),c=n[a];r||(r=l),i[o]=s,n[o]=l;let u=a,d=0;for(;u!==o;)d+=i[u++],u%=e;if((o=(o+1)%e)===a&&(a=(a+1)%e),l-r<t)return;let h=c&&l-c;return h?Math.round(1e3*d/h):void 0}};function eA(e,t){let r=0,i=e_(50,250);return n=>{let o=n.loaded,a=n.lengthComputable?n.total:void 0,s=o-r,l=i(s);r=o;let c={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&o<=a?(a-o)/l:void 0,event:n};c[t?"download":"upload"]=!0,e(c)}}let eS={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){let i,n,o=e.data,a=eb.from(e.headers).normalize(),{responseType:s,withXSRFToken:l}=e;function c(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}if(D.isFormData(o)){if(el.hasStandardBrowserEnv||el.hasStandardBrowserWebWorkerEnv)a.setContentType(!1);else if(!1!==(n=a.getContentType())){let[e,...t]=n?n.split(";").map(e=>e.trim()).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}}let u=new XMLHttpRequest;if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(t+":"+r))}let d=ek(e.baseURL,e.url);function h(){if(!u)return;let i=eb.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,r){let i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(new U("Request failed with status code "+r.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),c()},function(e){r(e),c()},{data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:i,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),Q(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(h)},u.onabort=function(){u&&(r(new U("Request aborted",U.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new U("Network Error",U.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",i=e.transitional||et;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new U(t,i.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,u)),u=null},el.hasStandardBrowserEnv&&(l&&D.isFunction(l)&&(l=l(e)),l||!1!==l&&eE(d))){let t=e.xsrfHeaderName&&e.xsrfCookieName&&ex.read(e.xsrfCookieName);t&&a.set(e.xsrfHeaderName,t)}void 0===o&&a.setContentType(null),"setRequestHeader"in u&&D.forEach(a.toJSON(),function(e,t){u.setRequestHeader(t,e)}),D.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",eA(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",eA(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{u&&(r(!t||t.type?new eC(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));let p=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);if(p&&-1===el.protocols.indexOf(p)){r(new U("Unsupported protocol "+p+":",U.ERR_BAD_REQUEST,e));return}u.send(o||null)})}};D.forEach(eS,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}});let eR=e=>`- ${e}`,e$=e=>D.isFunction(e)||null===e||!1===e;var eO=e=>{let t,r;let{length:i}=e=D.isArray(e)?e:[e],n={};for(let o=0;o<i;o++){let i;if(r=t=e[o],!e$(t)&&void 0===(r=eS[(i=String(t)).toLowerCase()]))throw new U(`Unknown adapter '${i}'`);if(r)break;n[i||"#"+o]=r}if(!r){let e=Object.entries(n).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new U("There is no suitable adapter to dispatch the request "+(i?e.length>1?"since :\n"+e.map(eR).join("\n"):" "+eR(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function eT(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new eC(null,e)}function eP(e){return eT(e),e.headers=eb.from(e.headers),e.data=ev.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),eO(e.adapter||eu.adapter)(e).then(function(t){return eT(e),t.data=ev.call(e,e.transformResponse,t),t.headers=eb.from(t.headers),t},function(t){return!ey(t)&&(eT(e),t&&t.response&&(t.response.data=ev.call(e,e.transformResponse,t.response),t.response.headers=eb.from(t.response.headers))),Promise.reject(t)})}let eI=e=>e instanceof eb?{...e}:e;function eN(e,t){t=t||{};let r={};function i(e,t,r){return D.isPlainObject(e)&&D.isPlainObject(t)?D.merge.call({caseless:r},e,t):D.isPlainObject(t)?D.merge({},t):D.isArray(t)?t.slice():t}function n(e,t,r){return D.isUndefined(t)?D.isUndefined(e)?void 0:i(void 0,e,r):i(e,t,r)}function o(e,t){if(!D.isUndefined(t))return i(void 0,t)}function a(e,t){return D.isUndefined(t)?D.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function s(r,n,o){return o in t?i(r,n):o in e?i(void 0,r):void 0}let l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t)=>n(eI(e),eI(t),!0)};return D.forEach(Object.keys(Object.assign({},e,t)),function(i){let o=l[i]||n,a=o(e[i],t[i],i);D.isUndefined(a)&&o!==s||(r[i]=a)}),r}let ej="1.6.8",eM={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{eM[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});let eL={};eM.transitional=function(e,t,r){function i(e,t){return"[Axios v"+ej+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,n,o)=>{if(!1===e)throw new U(i(n," has been removed"+(t?" in "+t:"")),U.ERR_DEPRECATED);return t&&!eL[n]&&(eL[n]=!0,console.warn(i(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,o)}};var eB={assertOptions:function(e,t,r){if("object"!=typeof e)throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);let i=Object.keys(e),n=i.length;for(;n-- >0;){let o=i[n],a=t[o];if(a){let t=e[o],r=void 0===t||a(t,o,e);if(!0!==r)throw new U("option "+o+" must be "+r,U.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new U("Unknown option "+o,U.ERR_BAD_OPTION)}},validators:eM};let eD=eB.validators;class eU{constructor(e){this.defaults=e,this.interceptors={request:new ee,response:new ee}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=Error();let r=t.stack?t.stack.replace(/^.+\n/,""):"";e.stack?r&&!String(e.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+r):e.stack=r}throw e}}_request(e,t){let r,i;"string"==typeof e?(t=t||{}).url=e:t=e||{};let{transitional:n,paramsSerializer:o,headers:a}=t=eN(this.defaults,t);void 0!==n&&eB.assertOptions(n,{silentJSONParsing:eD.transitional(eD.boolean),forcedJSONParsing:eD.transitional(eD.boolean),clarifyTimeoutError:eD.transitional(eD.boolean)},!1),null!=o&&(D.isFunction(o)?t.paramsSerializer={serialize:o}:eB.assertOptions(o,{encode:eD.function,serialize:eD.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=a&&D.merge(a.common,a[t.method]);a&&D.forEach(["delete","get","head","post","put","patch","common"],e=>{delete a[e]}),t.headers=eb.concat(s,a);let l=[],c=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(c=c&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});let u=[];this.interceptors.response.forEach(function(e){u.push(e.fulfilled,e.rejected)});let d=0;if(!c){let e=[eP.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,u),i=e.length,r=Promise.resolve(t);d<i;)r=r.then(e[d++],e[d++]);return r}i=l.length;let h=t;for(d=0;d<i;){let e=l[d++],t=l[d++];try{h=e(h)}catch(e){t.call(this,e);break}}try{r=eP.call(this,h)}catch(e){return Promise.reject(e)}for(d=0,i=u.length;d<i;)r=r.then(u[d++],u[d++]);return r}getUri(e){return Q(ek((e=eN(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(e){eU.prototype[e]=function(t,r){return this.request(eN(r||{},{method:e,url:t,data:(r||{}).data}))}}),D.forEach(["post","put","patch"],function(e){function t(t){return function(r,i,n){return this.request(eN(n||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:i}))}}eU.prototype[e]=t(),eU.prototype[e+"Form"]=t(!0)});class ez{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;let i=new Promise(e=>{r.subscribe(e),t=e}).then(e);return i.cancel=function(){r.unsubscribe(t)},i},e(function(e,i,n){r.reason||(r.reason=new eC(e,i,n),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new ez(function(t){e=t}),cancel:e}}}let eF={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eF).forEach(([e,t])=>{eF[t]=e});let eW=function e(t){let r=new eU(t),i=s(eU.prototype.request,r);return D.extend(i,eU.prototype,r,{allOwnKeys:!0}),D.extend(i,r,null,{allOwnKeys:!0}),i.create=function(r){return e(eN(t,r))},i}(eu);eW.Axios=eU,eW.CanceledError=eC,eW.CancelToken=ez,eW.isCancel=ey,eW.VERSION=ej,eW.toFormData=G,eW.AxiosError=U,eW.Cancel=eW.CanceledError,eW.all=function(e){return Promise.all(e)},eW.spread=function(e){return function(t){return e.apply(null,t)}},eW.isAxiosError=function(e){return D.isObject(e)&&!0===e.isAxiosError},eW.mergeConfig=eN,eW.AxiosHeaders=eb,eW.formToJSON=e=>ec(D.isHTMLForm(e)?new FormData(e):e),eW.getAdapter=eO,eW.HttpStatusCode=eF,eW.default=eW;var eH=eW},37380:function(e,t,r){"use strict";r.d(t,{Cb:function(){return a},SB:function(){return s}});var i=r(97286);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},o=(e=n,t,r)=>{let{kind:i,metadata:o}=r,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(e){return a({...e,state:!0,attribute:!1})}},35592:function(e,t,r){"use strict";r.d(t,{o:function(){return n}});var i=r(69699);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=e=>e??i.Ld},69178:function(e,t,r){"use strict";r.d(t,{V:function(){return f},i:function(){return m}});var i=r(69699);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{I:n}=i._$LH,o=e=>void 0===e.strings;var a=r(48476);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),s(e,t);return!0},l=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},c=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),h(t)}};function u(e){void 0!==this._$AN?(l(this),this._$AM=e,c(this)):this._$AM=e}function d(e,t=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)s(i[e],!1),l(i[e]);else null!=i&&(s(i,!1),l(i))}else s(this,e)}}let h=e=>{e.type==a.pX.CHILD&&(e._$AP??=d,e._$AQ??=u)};class p extends a.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),c(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s(this,e),l(this))}setValue(e){if(o(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=()=>new g;class g{}let w=new WeakMap,m=(0,a.XM)(class extends p{render(e){return i.Ld}update(e,[t]){let r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i.Ld}rt(e){if("function"==typeof this.Y){let t=this.ht??globalThis,r=w.get(t);void 0===r&&(r=new WeakMap,w.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?w.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},77996:function(e,t,r){"use strict";r.d(t,{oi:function(){return ep},iv:function(){return c},dy:function(){return G},YP:function(){return Y},$m:function(){return l}}),r(97286),r(69699);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,o),u=(e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},d=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:h,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:g,getOwnPropertySymbols:w,getPrototypeOf:m}=Object,b=globalThis,v=b.trustedTypes,y=v?v.emptyScript:"",C=b.reactiveElementPolyfillSupport,x=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!h(e,t),_={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&p(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let e=this.properties;for(let t of[...g(e),...w(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(d(r));else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:k).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??E)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,C?.({ReactiveElement:A}),(b.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=globalThis,R=S.trustedTypes,$=R?R.createPolicy("lit-html",{createHTML:e=>e}):void 0,O="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,P="?"+T,I=`<${P}>`,N=document,j=()=>N.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,B=e=>L(e)||"function"==typeof e?.[Symbol.iterator],D="[ 	\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,W=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,Z=/"/g,V=/^(?:script|style|textarea|title)$/i,q=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),G=q(1),Y=q(2),K=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),J=new WeakMap,Q=N.createTreeWalker(N,129);function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(t):t}let et=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",a=U;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===U?"!--"===l[1]?a=z:void 0!==l[1]?a=F:void 0!==l[2]?(V.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=W):void 0!==l[3]&&(a=W):a===W?">"===l[0]?(a=n??U,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?W:'"'===l[3]?Z:H):a===Z||a===H?a=W:a===z||a===F?a=U:(a=W,n=void 0);let d=a===W&&e[t+1].startsWith("/>")?" ":"";o+=a===U?r+I:c>=0?(i.push(s),r.slice(0,c)+O+r.slice(c)+T+d):r+T+(-2===c?t:d)}return[ee(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class er{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0,a=e.length-1,s=this.parts,[l,c]=et(e,t);if(this.el=er.createElement(l,r),Q.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Q.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(O)){let t=c[o++],r=i.getAttribute(e).split(T),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?es:"?"===a[1]?el:"@"===a[1]?ec:ea}),i.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(V.test(i.tagName)){let e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=R?R.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],j()),Q.nextNode(),s.push({type:2,index:++n});i.append(e[t],j())}}}else if(8===i.nodeType){if(i.data===P)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(T,e+1));)s.push({type:7,index:n}),e+=T.length-1}}n++}}static createElement(e,t){let r=N.createElement("template");return r.innerHTML=e,r}}function ei(e,t,r=e,i){if(t===K)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=M(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=ei(e,n._$AS(e,t.values),n,i)),t}class en{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??N).importNode(t,!0);Q.currentNode=i;let n=Q.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new eo(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new eu(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=Q.nextNode(),o++)}return Q.currentNode=N,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class eo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){M(e=ei(this,e,t))?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):B(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==X&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=er.createElement(ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new en(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new er(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new eo(this.S(j()),this.S(j()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ea{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=X}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!M(e=ei(this,e,t,0))||e!==this._$AH&&e!==K)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=ei(this,s[r+i],t,i))===K&&(a=this._$AH[i]),o||=!M(a)||a!==this._$AH[i],a===X?e=X:e!==X&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class es extends ea{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}}class el extends ea{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class ec extends ea{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=ei(this,e,t,0)??X)===K)return;let r=this._$AH,i=e===X&&r!==X||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==X&&(r===X||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class eu{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ei(this,e)}}let ed=S.litHtmlPolyfillSupport;ed?.(er,eo),(S.litHtmlVersions??=[]).push("3.1.2");let eh=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new eo(t.insertBefore(j(),e),e,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ep extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eh(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}ep._$litElement$=!0,ep.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ep});let ef=globalThis.litElementPolyfillSupport;ef?.({LitElement:ep}),(globalThis.litElementVersions??=[]).push("4.0.4")},97286:function(e,t,r){"use strict";r.d(t,{Ts:function(){return x},Qu:function(){return k}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=(e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},u=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:d,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:w}=Object,m=globalThis,b=m.trustedTypes,v=b?b.emptyScript:"",y=m.reactiveElementPolyfillSupport,C=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},k=(e,t)=>!d(e,t),E={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=E){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&h(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let o=i?.call(this);n.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??E}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties;for(let t of[...f(e),...g(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(u(r));else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=i,this[i]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??k)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[C("elementProperties")]=new Map,_[C("finalized")]=new Map,y?.({ReactiveElement:_}),(m.reactiveElementVersions??=[]).push("2.0.4")},48476:function(e,t,r){"use strict";r.d(t,{XM:function(){return n},Xe:function(){return o},pX:function(){return i}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},69699:function(e,t,r){"use strict";r.d(t,{Jb:function(){return E},Ld:function(){return _},_$LH:function(){return D}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,n=i.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,f=e=>p(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,b=/>/g,v=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,C=/"/g,x=/^(?:script|style|textarea|title)$/i,k=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),E=(k(1),k(2),Symbol.for("lit-noChange")),_=Symbol.for("lit-nothing"),A=new WeakMap,S=u.createTreeWalker(u,129);function R(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}let $=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":"",l=w;for(let t=0;t<r;t++){let r=e[t],u,d,h=-1,p=0;for(;p<r.length&&(l.lastIndex=p,null!==(d=l.exec(r)));)p=l.lastIndex,l===w?"!--"===d[1]?l=m:void 0!==d[1]?l=b:void 0!==d[2]?(x.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=v):void 0!==d[3]&&(l=v):l===v?">"===d[0]?(l=n??w,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,u=d[1],l=void 0===d[3]?v:'"'===d[3]?C:y):l===C||l===y?l=v:l===m||l===b?l=w:(l=v,n=void 0);let f=l===v&&e[t+1].startsWith("/>")?" ":"";o+=l===w?r+c:h>=0?(i.push(u),r.slice(0,h)+a+r.slice(h)+s+f):r+s+(-2===h?t:f)}return[R(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class O{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,c=0,u=e.length-1,h=this.parts,[p,f]=$(e,t);if(this.el=O.createElement(p,r),S.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=S.nextNode())&&h.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(a)){let t=f[c++],r=i.getAttribute(e).split(s),n=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?j:"?"===n[1]?M:"@"===n[1]?L:N}),i.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:o}),i.removeAttribute(e));if(x.test(i.tagName)){let e=i.textContent.split(s),t=e.length-1;if(t>0){i.textContent=n?n.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],d()),S.nextNode(),h.push({type:2,index:++o});i.append(e[t],d())}}}else if(8===i.nodeType){if(i.data===l)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(s,e+1));)h.push({type:7,index:o}),e+=s.length-1}}o++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function T(e,t,r=e,i){if(t===E)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=h(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=T(e,n._$AS(e,t.values),n,i)),t}class P{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??u).importNode(t,!0);S.currentNode=i;let n=S.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new I(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new B(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=S.nextNode(),o++)}return S.currentNode=u,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class I{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){h(e=T(this,e,t))?e===_||null==e||""===e?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==E&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):f(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=O.createElement(R(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new P(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new O(e)),t}k(e){p(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new I(this.S(d()),this.S(d()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!h(e=T(this,e,t,0))||e!==this._$AH&&e!==E)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=T(this,s[r+i],t,i))===E&&(a=this._$AH[i]),o||=!h(a)||a!==this._$AH[i],a===_?e=_:e!==_&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class j extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class M extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class L extends N{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=T(this,e,t,0)??_)===E)return;let r=this._$AH,i=e===_&&r!==_||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==_&&(r===_||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}}let D={P:a,A:s,C:l,M:1,L:$,R:P,D:f,V:T,I:I,H:N,N:M,U:L,B:j,F:B},U=i.litHtmlPolyfillSupport;U?.(O,I),(i.litHtmlVersions??=[]).push("3.1.2")},17740:function(e,t,r){"use strict";r.d(t,{R:function(){return d}});var i=r(67294),n=r(72478),o=r(61688),a=r(86949);let{use:s}=i,{useSyncExternalStore:l}=o,c=(e,t)=>{let r=(0,i.useRef)();(0,i.useEffect)(()=>{r.current=(0,n.h8)(e,t,!0)}),(0,i.useDebugValue)(r.current)},u=new WeakMap;function d(e,t){let r=null==t?void 0:t.sync,o=(0,i.useRef)(),d=(0,i.useRef)(),h=!0,p=l((0,i.useCallback)(t=>{let i=(0,a.Ld)(e,t,r);return t(),i},[e,r]),()=>{let t=(0,a.CO)(e,s);try{if(!h&&o.current&&d.current&&!(0,n.ln)(o.current,t,d.current,new WeakMap))return o.current}catch(e){}return t},()=>(0,a.CO)(e,s));h=!1;let f=new WeakMap;(0,i.useEffect)(()=>{o.current=p,d.current=f}),c(p,f);let g=(0,i.useMemo)(()=>new WeakMap,[]);return(0,n.DM)(p,f,g,u)}},86949:function(e,t,r){"use strict";r.d(t,{CO:function(){return u},Ld:function(){return c},sj:function(){return l}});var i=r(72478);let n=e=>"object"==typeof e&&null!==e,o=new WeakMap,a=new WeakSet,[s]=((e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>n(e)&&!a.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),s=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},l=new WeakMap,c=(e,t,r=s)=>{let n=l.get(e);if((null==n?void 0:n[0])===t)return n[1];let u=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return(0,i.jc)(u,!0),l.set(e,[t,u]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(u,t))return;let n=Reflect.get(e,t),{enumerable:s}=Reflect.getOwnPropertyDescriptor(e,t),l={value:n,enumerable:s,configurable:!0};if(a.has(n))(0,i.jc)(n,!1);else if(n instanceof Promise)delete l.value,l.get=()=>r(n);else if(o.has(n)){let[e,t]=o.get(n);l.value=c(e,t(),r)}Object.defineProperty(u,t,l)}),Object.preventExtensions(u)},u=new WeakMap,d=[1,1],h=s=>{if(!n(s))throw Error("object required");let l=u.get(s);if(l)return l;let p=d[0],f=new Set,g=(e,t=++d[0])=>{p!==t&&(p=t,f.forEach(r=>r(e,t)))},w=d[1],m=(e=++d[1])=>(w===e||f.size||(w=e,v.forEach(([t])=>{let r=t[1](e);r>p&&(p=r)})),p),b=e=>(t,r)=>{let i=[...t];i[1]=[e,...i[1]],g(i,r)},v=new Map,y=(e,t)=>{if(v.has(e))throw Error("prop listener already exists");if(f.size){let r=t[3](b(e));v.set(e,[t,r])}else v.set(e,[t])},C=e=>{var t;let r=v.get(e);r&&(v.delete(e),null==(t=r[1])||t.call(r))},x=e=>{f.add(e),1===f.size&&v.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let i=e[3](b(r));v.set(r,[e,i])});let t=()=>{f.delete(e),0===f.size&&v.forEach(([e,t],r)=>{t&&(t(),v.set(r,[e]))})};return t},k=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),E={deleteProperty(e,t){let r=Reflect.get(e,t);C(t);let i=Reflect.deleteProperty(e,t);return i&&g(["delete",[t],r]),i},set(t,s,l,c){let d=Reflect.has(t,s),p=Reflect.get(t,s,c);if(d&&(e(p,l)||u.has(l)&&e(p,u.get(l))))return!0;C(s),n(l)&&(l=(0,i.o5)(l)||l);let f=l;if(l instanceof Promise)l.then(e=>{l.status="fulfilled",l.value=e,g(["resolve",[s],e])}).catch(e=>{l.status="rejected",l.reason=e,g(["reject",[s],e])});else{!o.has(l)&&r(l)&&(f=h(l));let e=!a.has(f)&&o.get(f);e&&y(s,e)}return Reflect.set(t,s,f,c),g(["set",[s],l,p]),!0}},_=t(k,E);u.set(s,_);let A=[k,m,c,x];return o.set(_,A),Reflect.ownKeys(s).forEach(e=>{let t=Object.getOwnPropertyDescriptor(s,e);"value"in t&&(_[e]=s[e],delete t.value,delete t.writable),Object.defineProperty(k,e,t)}),_})=>[h,o,a,e,t,r,s,l,c,u,d])();function l(e={}){return s(e)}function c(e,t,r){let i;let n=o.get(e);n||console.warn("Please use proxy object");let a=[],s=n[3],l=!1,c=s(e=>{if(a.push(e),r){t(a.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,l&&t(a.splice(0))}))});return l=!0,()=>{l=!1,c()}}function u(e,t){let r=o.get(e);r||console.warn("Please use proxy object");let[i,n,a]=r;return a(i,n(),t)}},14503:function(e,t,r){"use strict";function i(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return i}})},61376:function(e,t,r){"use strict";r.d(t,{RE:function(){return x}});var i=r(14503),n=r(16693),o=r(26087),a=r(62027),s=r(80377),l=r(97405),c=r(69760),u=r(20443),d=r(7210),h=r(55629),p=r(60480),f=r(47864),g=r(92106),w=r(26445),m=r(87469),b=r(61163),v=r(74688),y=r(32357),C=r(47531);async function x(e,t){let{account:n=e.account,batch:c=!!e.batch?.multicall,blockNumber:d,blockTag:h="latest",accessList:f,blobs:y,data:x,gas:_,gasPrice:A,maxFeePerBlobGas:S,maxFeePerGas:R,maxPriorityFeePerGas:$,nonce:O,to:T,value:P,stateOverride:I,...N}=t,j=n?(0,i.T)(n):void 0;try{(0,C.F)(t);let r=(d?(0,g.eC)(d):void 0)||h,i=function(e){if(!e)return;let t={};for(let{address:r,...i}of e){if(!(0,p.U)(r,{strict:!1}))throw new o.b({address:r});if(t[r])throw new u.Nc({address:r});t[r]=function(e){let{balance:t,nonce:r,state:i,stateDiff:n,code:o}=e,a={};if(void 0!==o&&(a.code=o),void 0!==t&&(a.balance=(0,g.eC)(t)),void 0!==r&&(a.nonce=(0,g.eC)(r)),void 0!==i&&(a.state=E(i)),void 0!==n){if(a.state)throw new u.Z8;a.stateDiff=E(n)}return a}(i)}return t}(I),n=e.chain?.formatters?.transactionRequest?.format,a=(n||v.tG)({...(0,b.K)(N,{format:n}),from:j?.address,accessList:f,blobs:y,data:x,gas:_,gasPrice:A,maxFeePerBlobGas:S,maxFeePerGas:R,maxPriorityFeePerGas:$,nonce:O,to:T,value:P});if(c&&function({request:e}){let{data:t,to:r,...i}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(i).filter(e=>void 0!==e).length>0)}({request:a})&&!i)try{return await k(e,{...a,blockNumber:d,blockTag:h})}catch(e){if(!(e instanceof s.pZ)&&!(e instanceof s.mm))throw e}let l=await e.request({method:"eth_call",params:i?[a,r,i]:[a,r]});if("0x"===l)return{data:void 0};return{data:l}}catch(s){let i=function(e){if(!(e instanceof a.G))return;let t=e.walk();return"object"==typeof t?.data?t.data?.data:t.data}(s),{offchainLookup:n,offchainLookupSignature:o}=await r.e(422).then(r.bind(r,10422));if(!1!==e.ccipRead&&i?.slice(0,10)===o&&T)return{data:await n(e,{data:i,to:T})};throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,m.k)(e,r);return t instanceof w.cj?e:t})();return new l.cg(i,{docsPath:t,...r})}(s,{...t,account:j,chain:e.chain})}}async function k(e,t){let{batchSize:r=1024,wait:i=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:a="latest",data:c,multicallAddress:u,to:p}=t,w=u;if(!w){if(!e.chain)throw new s.pZ;w=(0,f.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let m=(o?(0,g.eC)(o):void 0)||a,{schedule:b}=(0,y.S)({id:`${e.uid}.${m}`,wait:i,shouldSplitBatch:e=>e.reduce((e,{data:t})=>e+(t.length-2),0)>2*r,fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),i=(0,h.R)({abi:n.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:i,to:w},m]});return(0,d.k)({abi:n.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:v,success:C}]=await b({data:c,to:p});if(!C)throw new l.VQ({data:v});return"0x"===v?{data:void 0}:{data:v}}function E(e){if(e&&0!==e.length)return e.reduce((e,{slot:t,value:r})=>{if(66!==t.length)throw new c.W_({size:t.length,targetSize:66,type:"hex"});if(66!==r.length)throw new c.W_({size:r.length,targetSize:66,type:"hex"});return e[t]=r,e},{})}},88819:function(e,t,r){"use strict";r.d(t,{L:function(){return l}});var i=r(7210),n=r(55629),o=r(72365),a=r(93714),s=r(61376);async function l(e,t){let{abi:r,address:l,args:c,functionName:u,...d}=t,h=(0,n.R)({abi:r,args:c,functionName:u});try{let{data:t}=await (0,a.s)(e,s.RE,"call")({...d,data:h,to:l});return(0,i.k)({abi:r,args:c,functionName:u,data:t||"0x"})}catch(e){throw(0,o.S)(e,{abi:r,address:l,args:c,docsPath:"/docs/contract/readContract",functionName:u})}}},66403:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});let i=(0,r(86164).a)({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},16189:function(e,t,r){"use strict";let i;r.d(t,{e:function(){return a}});var n=r(14503);let o=256;function a(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,ccipRead:a,key:s="base",name:l="Base Client",pollingInterval:c=4e3,type:u="base"}=e,d=e.chain,h=e.account?(0,n.T)(e.account):void 0,{config:p,request:f,value:g}=e.transport({chain:d,pollingInterval:c}),w={account:h,batch:t,cacheTime:r,ccipRead:a,chain:d,key:s,name:l,pollingInterval:c,request:f,transport:{...p,...g},type:u,uid:function(e=11){if(!i||o+e>512){i="",o=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(o,o+++e)}()};return Object.assign(w,{extend:function e(t){return r=>{let i=r(t);for(let e in w)delete i[e];let n={...t,...i};return Object.assign(n,{extend:e(n)})}}(w)})}},91628:function(e,t,r){"use strict";r.d(t,{q:function(){return s}});var i=r(62027),n=r(78863),o=r(39028),a=r(97933);function s({key:e,name:t,request:r,retryCount:s=3,retryDelay:l=150,timeout:c,type:u},d){return{config:{key:e,name:t,request:r,retryCount:s,retryDelay:l,timeout:c,type:u},request:function(e,t={}){return async(r,s={})=>{let{retryDelay:l=150,retryCount:c=3}={...t,...s};return(0,a.J)(async()=>{try{return await e(r)}catch(e){switch(e.code){case o.s7.code:throw new o.s7(e);case o.B.code:throw new o.B(e);case o.LX.code:throw new o.LX(e);case o.nY.code:throw new o.nY(e);case o.XS.code:throw new o.XS(e);case o.yR.code:throw new o.yR(e);case o.Og.code:throw new o.Og(e);case o.pT.code:throw new o.pT(e);case o.KB.code:throw new o.KB(e);case o.gS.code:throw new o.gS(e);case o.Pv.code:throw new o.Pv(e);case o.GD.code:throw new o.GD(e);case o.ab.code:throw new o.ab(e);case o.PE.code:throw new o.PE(e);case o.Ts.code:throw new o.Ts(e);case o.u5.code:throw new o.u5(e);case o.I0.code:throw new o.I0(e);case o.x3.code:throw new o.x3(e);case 5e3:throw new o.ab(e);default:if(e instanceof i.G)throw e;throw new o.ir(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof n.Gg){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*l},retryCount:c,shouldRetry:({error:e})=>"code"in e&&"number"==typeof e.code?-1===e.code||e.code===o.Pv.code||e.code===o.XS.code:!(e instanceof n.Gg)||!e.status||403===e.status||408===e.status||413===e.status||429===e.status||500===e.status||502===e.status||503===e.status||504===e.status})}}(r,{retryCount:s,retryDelay:l}),value:d}}},16693:function(e,t,r){"use strict";r.d(t,{F8:function(){return i},du:function(){return a},k3:function(){return o},nZ:function(){return s}});let i=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],n=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],o=[...n,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...n,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}]},21746:function(e,t,r){"use strict";r.d(t,{$:function(){return i},Up:function(){return n},hZ:function(){return o}});let i={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},n={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},84192:function(e,t,r){"use strict";r.d(t,{Bd:function(){return o},Zn:function(){return n},ez:function(){return i}});let i={gwei:9,wei:18},n={ether:-9,wei:9},o={ether:-18,gwei:-9}},57412:function(e,t,r){"use strict";r.d(t,{CI:function(){return w},M4:function(){return c},MX:function(){return p},S4:function(){return f},dh:function(){return g},fs:function(){return u},gr:function(){return l},hn:function(){return m},wM:function(){return b},wb:function(){return s},xB:function(){return a},xL:function(){return h},yP:function(){return d}});var i=r(80522),n=r(39135),o=r(62027);class a extends o.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,i.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class s extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class l extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class c extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,n.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class d extends o.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class h extends o.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class p extends o.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class f extends o.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,i.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,i.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class g extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class w extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class m extends o.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class b extends o.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},8998:function(e,t,r){"use strict";r.d(t,{o:function(){return n}});var i=r(62027);class n extends i.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26087:function(e,t,r){"use strict";r.d(t,{b:function(){return n}});var i=r(62027);class n extends i.G{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},62027:function(e,t,r){"use strict";r.d(t,{G:function(){return n}});var i=r(35280);class n extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,i.bo)()});let r=t.cause instanceof n?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof n&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},80377:function(e,t,r){"use strict";r.d(t,{Bk:function(){return a},Yl:function(){return o},mm:function(){return n},pZ:function(){return s}});var i=r(62027);class n extends i.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends i.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends i.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends i.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},97405:function(e,t,r){"use strict";r.d(t,{cg:function(){return m},uq:function(){return b},Lu:function(){return v},Dk:function(){return y},VQ:function(){return C}});var i=r(14503),n=r(21746),o=r(86899),a=r(80522),s=r(96070);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:i=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${i&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(3640),u=r(39625),d=r(67795),h=r(57412),p=r(62027),f=r(20443),g=r(33639),w=r(35280);class m extends p.G{constructor(e,{account:t,docsPath:r,chain:n,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:h,to:p,value:w,stateOverride:m}){let b=t?(0,i.T)(t):void 0,v=(0,g.xr)({from:b?.address,to:p,value:void 0!==w&&`${(0,u.d)(w)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,nonce:h});m&&(v+=`
${(0,f.Bj)(m)}`),super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class b extends p.G{constructor(e,{abi:t,args:r,contractAddress:i,docsPath:n,functionName:o,sender:s}){let u=(0,c.mE)({abi:t,args:r,name:o}),d=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0;super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",(0,g.xr)({address:i&&(0,w.CR)(i),function:u?(0,a.t)(u,{includeName:!0}):void 0,args:d&&"()"!==d&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:s})].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=o,this.sender=s}}class v extends p.G{constructor({abi:e,data:t,functionName:r,message:i}){let s,c,u,d,p;if(t&&"0x"!==t)try{let{abiItem:r,errorName:i,args:s}=p=(0,o.p)({abi:e,data:t});if("Error"===i)u=s[0];else if("Panic"===i){let[e]=s;u=n.$[e]}else{let e=r?(0,a.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else i&&(u=i);s instanceof h.yP&&(d=s.signature,c=[`Unable to decode signature "${d}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${r}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=p,this.reason=u,this.signature=d}}class y extends p.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class C extends p.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},69760:function(e,t,r){"use strict";r.d(t,{$s:function(){return o},W_:function(){return a},mV:function(){return n}});var i=r(62027);class n extends i.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class a extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}},87788:function(e,t,r){"use strict";r.d(t,{J5:function(){return n},M6:function(){return a},yr:function(){return o}});var i=r(62027);class n extends i.G{constructor({max:e,min:t,signed:r,size:i,value:n}){super(`Number "${n}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends i.G{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class a extends i.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},26445:function(e,t,r){"use strict";r.d(t,{C_:function(){return d},G$:function(){return s},Hh:function(){return a},M_:function(){return o},WF:function(){return h},ZI:function(){return l},cj:function(){return w},cs:function(){return g},dR:function(){return p},pZ:function(){return f},se:function(){return u},vU:function(){return c}});var i=r(67795),n=r(62027);class o extends n.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends n.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class f extends n.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends n.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,i.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class w extends n.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},78863:function(e,t,r){"use strict";r.d(t,{Gg:function(){return a},W5:function(){return l},bs:function(){return s}});var i=r(96070),n=r(62027),o=r(35280);class a extends n.G{constructor({body:e,details:t,headers:r,status:n,url:a}){super("HTTP request failed.",{details:t,metaMessages:[n&&`Status: ${n}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,i.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=n,this.url=a}}class s extends n.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class l extends n.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},39028:function(e,t,r){"use strict";r.d(t,{B:function(){return l},GD:function(){return b},I0:function(){return k},KB:function(){return g},LX:function(){return c},Og:function(){return p},PE:function(){return y},Pv:function(){return m},Ts:function(){return C},XS:function(){return d},ab:function(){return v},gS:function(){return w},ir:function(){return _},nY:function(){return u},pT:function(){return f},s7:function(){return s},u5:function(){return x},x3:function(){return E},yR:function(){return h}});var i=r(62027),n=r(78863);class o extends i.G{constructor(e,{code:t,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof n.bs?e.code:t??-1}}class a extends o{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends o{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends o{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends o{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends o{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends o{constructor(e){super(e,{code:d.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class h extends o{constructor(e){super(e,{code:h.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class p extends o{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class f extends o{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends o{constructor(e){super(e,{code:g.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class w extends o{constructor(e){super(e,{code:w.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class m extends o{constructor(e){super(e,{code:m.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class b extends o{constructor(e){super(e,{code:b.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class v extends a{constructor(e){super(e,{code:v.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class y extends a{constructor(e){super(e,{code:y.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class C extends a{constructor(e){super(e,{code:C.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class x extends a{constructor(e){super(e,{code:x.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class k extends a{constructor(e){super(e,{code:k.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class E extends a{constructor(e){super(e,{code:E.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class _ extends o{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},20443:function(e,t,r){"use strict";r.d(t,{Bj:function(){return s},Nc:function(){return n},Z8:function(){return o}});var i=r(62027);class n extends i.G{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class o extends i.G{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function a(e){return e.reduce((e,{slot:t,value:r})=>`${e}        ${t}: ${r}
`,"")}function s(e){return e.reduce((e,{address:t,...r})=>{let i=`${e}    ${t}:
`;return r.nonce&&(i+=`      nonce: ${r.nonce}
`),r.balance&&(i+=`      balance: ${r.balance}
`),r.code&&(i+=`      code: ${r.code}
`),r.state&&(i+="      state:\n"+a(r.state)),r.stateDiff&&(i+="      stateDiff:\n"+a(r.stateDiff)),i},"  State Override:\n").slice(0,-1)}},33639:function(e,t,r){"use strict";r.d(t,{j3:function(){return l},mk:function(){return c},xY:function(){return s},xr:function(){return a}});var i=r(39625),n=r(67795),o=r(62027);function a(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends o.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class c extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:f}){super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:p,value:void 0!==f&&`${(0,i.d)(f)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,n.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,n.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,n.o)(d)} gwei`,nonce:h})].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}},35280:function(e,t,r){"use strict";r.d(t,{CR:function(){return i},Gr:function(){return n},bo:function(){return o}});let i=e=>e,n=e=>e,o=()=>"viem@2.9.15"},78398:function(e,t,r){"use strict";r.d(t,{r:function(){return g}});var i=r(57412),n=r(45775),o=r(47539),a=r(39135),s=r(3972),l=r(61836),c=r(87788),u=r(95946),d=r(92106);function h(e,t={}){void 0!==t.size&&(0,u.Yf)(e,{size:t.size});let r=(0,d.ci)(e,t);return(0,u.ly)(r,t)}var p=r(11187),f=r(45444);function g(e,t){let r="string"==typeof t?(0,p.nr)(t):t,g=(0,o.q)(r);if(0===(0,a.d)(r)&&e.length>0)throw new i.wb;if((0,a.d)(t)&&32>(0,a.d)(t))throw new i.xB({data:"string"==typeof t?t:(0,d.ci)(t),params:e,size:(0,a.d)(t)});let m=0,b=[];for(let t=0;t<e.length;++t){let r=e[t];g.setPosition(m);let[o,a]=function e(t,r,{staticPosition:o}){let a=(0,f.S)(r.type);if(a){let[i,n]=a;return function(t,r,{length:i,staticPosition:n}){if(!i){let i=n+h(t.readBytes(32)),o=i+32;t.setPosition(i);let a=h(t.readBytes(32)),s=w(r),l=0,c=[];for(let i=0;i<a;++i){t.setPosition(o+(s?32*i:l));let[n,a]=e(t,r,{staticPosition:o});l+=a,c.push(n)}return t.setPosition(n+32),[c,32]}if(w(r)){let o=n+h(t.readBytes(32)),a=[];for(let n=0;n<i;++n){t.setPosition(o+32*n);let[i]=e(t,r,{staticPosition:o});a.push(i)}return t.setPosition(n+32),[a,32]}let o=0,a=[];for(let s=0;s<i;++s){let[i,s]=e(t,r,{staticPosition:n+o});o+=s,a.push(i)}return[a,o]}(t,{...r,type:n},{length:i,staticPosition:o})}if("tuple"===r.type)return function(t,r,{staticPosition:i}){let n=0===r.components.length||r.components.some(({name:e})=>!e),o=n?[]:{},a=0;if(w(r)){let s=i+h(t.readBytes(32));for(let i=0;i<r.components.length;++i){let l=r.components[i];t.setPosition(s+a);let[c,u]=e(t,l,{staticPosition:s});a+=u,o[n?i:l?.name]=c}return t.setPosition(i+32),[o,32]}for(let s=0;s<r.components.length;++s){let l=r.components[s],[c,u]=e(t,l,{staticPosition:i});o[n?s:l?.name]=c,a+=u}return[o,a]}(t,r,{staticPosition:o});if("address"===r.type)return function(e){let t=e.readBytes(32);return[(0,n.x)((0,d.ci)((0,s.T4)(t,-20))),32]}(t);if("bool"===r.type)return[function(e,t={}){let r=e;if(void 0!==t.size&&((0,u.Yf)(r,{size:t.size}),r=(0,l.f)(r)),r.length>1||r[0]>1)throw new c.yr(r);return!!r[0]}(t.readBytes(32),{size:32}),32];if(r.type.startsWith("bytes"))return function(e,t,{staticPosition:r}){let[i,n]=t.type.split("bytes");if(!n){let t=h(e.readBytes(32));e.setPosition(r+t);let i=h(e.readBytes(32));if(0===i)return e.setPosition(r+32),["0x",32];let n=e.readBytes(i);return e.setPosition(r+32),[(0,d.ci)(n),32]}return[(0,d.ci)(e.readBytes(parseInt(n),32)),32]}(t,r,{staticPosition:o});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,t){let r=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),n=e.readBytes(32);return[i>48?function(e,t={}){void 0!==t.size&&(0,u.Yf)(e,{size:t.size});let r=(0,d.ci)(e,t);return(0,u.y_)(r,t)}(n,{signed:r}):h(n,{signed:r}),32]}(t,r);if("string"===r.type)return function(e,{staticPosition:t}){let r=h(e.readBytes(32));e.setPosition(t+r);let i=h(e.readBytes(32));if(0===i)return e.setPosition(t+32),["",32];let n=e.readBytes(i,32),o=function(e,t={}){let r=e;return void 0!==t.size&&((0,u.Yf)(r,{size:t.size}),r=(0,l.f)(r,{dir:"right"})),new TextDecoder().decode(r)}((0,l.f)(n));return e.setPosition(t+32),[o,32]}(t,{staticPosition:o});throw new i.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}(g,r,{staticPosition:0});m+=a,b.push(o)}return b}function w(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(w);let r=(0,f.S)(e.type);return!!(r&&w({...e,type:r[1]}))}},86899:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var i=r(21746),n=r(57412),o=r(3972),a=r(58034),s=r(78398),l=r(80522);function c(e){let{abi:t,data:r}=e,c=(0,o.tP)(r,0,4);if("0x"===c)throw new n.wb;let u=[...t||[],i.Up,i.hZ].find(e=>"error"===e.type&&c===(0,a.C)((0,l.t)(e)));if(!u)throw new n.yP(c,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.r)(u.inputs,(0,o.tP)(r,4)):void 0,errorName:u.name}}},7210:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var i=r(57412),n=r(78398),o=r(3640);let a="/docs/contract/decodeFunctionResult";function s(e){let{abi:t,args:r,functionName:s,data:l}=e,c=t[0];if(s){let e=(0,o.mE)({abi:t,args:r,name:s});if(!e)throw new i.xL(s,{docsPath:a});c=e}if("function"!==c.type)throw new i.xL(void 0,{docsPath:a});if(!c.outputs)throw new i.MX(c.name,{docsPath:a});let u=(0,n.r)(c.outputs,l);return u&&u.length>1?u:u&&1===u.length?u[0]:void 0}},45444:function(e,t,r){"use strict";r.d(t,{E:function(){return h},S:function(){return f}});var i=r(57412),n=r(26087),o=r(62027),a=r(60480),s=r(57040),l=r(61769),c=r(39135),u=r(3972),d=r(92106);function h(e,t){if(e.length!==t.length)throw new i.fs({expectedLength:e.length,givenLength:t.length});let r=p(function({params:e,values:t}){let r=[];for(let h=0;h<e.length;h++)r.push(function e({param:t,value:r}){let h=f(t.type);if(h){let[n,o]=h;return function(t,{length:r,param:n}){let o=null===r;if(!Array.isArray(t))throw new i.hn(t);if(!o&&t.length!==r)throw new i.gr({expectedLength:r,givenLength:t.length,type:`${n.type}[${r}]`});let a=!1,l=[];for(let r=0;r<t.length;r++){let i=e({param:n,value:t[r]});i.dynamic&&(a=!0),l.push(i)}if(o||a){let e=p(l);if(o){let t=(0,d.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,s.zo)([t,e]):t}}if(a)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,s.zo)(l.map(({encoded:e})=>e))}}(r,{length:n,param:{...t,type:o}})}if("tuple"===t.type)return function(t,{param:r}){let i=!1,n=[];for(let o=0;o<r.components.length;o++){let a=r.components[o],s=Array.isArray(t)?o:a.name,l=e({param:a,value:t[s]});n.push(l),l.dynamic&&(i=!0)}return{dynamic:i,encoded:i?p(n):(0,s.zo)(n.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,a.U)(e))throw new n.b({address:e});return{dynamic:!1,encoded:(0,l.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return function(e){if("boolean"!=typeof e)throw new o.G(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:(0,l.gc)((0,d.C4)(e))}}(r);if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,d.eC)(e,{size:32,signed:t})}}(r,{signed:t.type.startsWith("int")});if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),n=(0,c.d)(e);if(!r){let t=e;return n%32!=0&&(t=(0,l.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,s.zo)([(0,l.gc)((0,d.eC)(n,{size:32})),t])}}if(n!==parseInt(r))throw new i.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,l.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,d.$G)(e),r=Math.ceil((0,c.d)(t)/32),i=[];for(let e=0;e<r;e++)i.push((0,l.gc)((0,u.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,s.zo)([(0,l.gc)((0,d.eC)((0,c.d)(t),{size:32})),...i])}}(r);throw new i.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[h],value:t[h]}));return r}({params:e,values:t}));return 0===r.length?"0x":r}function p(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:i,encoded:n}=e[r];i?t+=32:t+=(0,c.d)(n)}let r=[],i=[],n=0;for(let o=0;o<e.length;o++){let{dynamic:a,encoded:s}=e[o];a?(r.push((0,d.eC)(t+n,{size:32})),i.push(s),n+=(0,c.d)(s)):r.push(s)}return(0,s.zo)([...r,...i])}function f(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},55629:function(e,t,r){"use strict";r.d(t,{R:function(){return u}});var i=r(57040),n=r(45444),o=r(57412),a=r(58034),s=r(80522),l=r(3640);let c="/docs/contract/encodeFunctionData";function u(e){let{args:t}=e,{abi:r,functionName:u}=1===e.abi.length&&e.functionName?.startsWith("0x")?e:function(e){let{abi:t,args:r,functionName:i}=e,n=t[0];if(i){let e=(0,l.mE)({abi:t,args:r,name:i});if(!e)throw new o.xL(i,{docsPath:c});n=e}if("function"!==n.type)throw new o.xL(void 0,{docsPath:c});return{abi:[n],functionName:(0,a.C)((0,s.t)(n))}}(e),d=r[0],h="inputs"in d&&d.inputs?(0,n.E)(d.inputs,t??[]):void 0;return(0,i.SM)([u,h??"0x"])}},80522:function(e,t,r){"use strict";r.d(t,{h:function(){return o},t:function(){return n}});var i=r(57412);function n(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new i.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},3640:function(e,t,r){"use strict";r.d(t,{mE:function(){return l}});var i=r(57412),n=r(15102),o=r(60480);let a=r(67684).r;var s=r(58034);function l(e){let t;let{abi:r,args:l=[],name:c}=e,u=(0,n.v)(c,{strict:!1}),d=r.filter(e=>u?"function"===e.type?(0,s.C)(e)===c:"event"===e.type&&a(e)===c:"name"in e&&e.name===c);if(0!==d.length){if(1===d.length)return d[0];for(let e of d)if("inputs"in e){if(!l||0===l.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===l.length&&l.every((t,r)=>{let i="inputs"in e&&e.inputs[r];return!!i&&function e(t,r){let i=typeof t,n=r.type;switch(n){case"address":return(0,o.U)(t,{strict:!1});case"bool":return"boolean"===i;case"function":case"string":return"string"===i;default:if("tuple"===n&&"components"in r)return Object.values(r.components).every((r,i)=>e(Object.values(t)[i],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n))return"number"===i||"bigint"===i;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))return"string"===i||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:n.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,i)})){if(t&&"inputs"in t&&t.inputs){let r=function e(t,r,i){for(let n in t){let a=t[n],s=r[n];if("tuple"===a.type&&"tuple"===s.type&&"components"in a&&"components"in s)return e(a.components,s.components,i[n]);let l=[a.type,s.type];if(l.includes("address")&&l.includes("bytes20")||(l.includes("address")&&l.includes("string")||l.includes("address")&&l.includes("bytes"))&&(0,o.U)(i[n],{strict:!1}))return l}}(e.inputs,t.inputs,l);if(r)throw new i.S4({abiItem:e,type:r[0]},{abiItem:t,type:r[1]})}t=e}}return t||d[0]}}},45775:function(e,t,r){"use strict";r.d(t,{K:function(){return l},x:function(){return s}});var i=r(26087),n=r(11187),o=r(91734),a=r(60480);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=(0,o.w)((0,n.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&i[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function l(e,t){if(!(0,a.U)(e,{strict:!1}))throw new i.b({address:e});return s(e,t)}},60480:function(e,t,r){"use strict";r.d(t,{U:function(){return s}});class i extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}var n=r(45775);let o=/^0x[a-fA-F0-9]{40}$/,a=new i(8192);function s(e,t){let{strict:r=!0}=t??{};if(a.has(e))return a.get(e);let i=!!o.test(e)&&(e.toLowerCase()===e||!r||(0,n.x)(e)===e);return a.set(e,i),i}},86164:function(e,t,r){"use strict";function i(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}r.d(t,{a:function(){return i}})},47864:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var i=r(80377);function n({blockNumber:e,chain:t,contract:r}){let n=t?.contracts?.[r];if(!n)throw new i.mm({chain:t,contract:{name:r}});if(e&&n.blockCreated&&n.blockCreated>e)throw new i.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:n.blockCreated}});return n.address}},47539:function(e,t,r){"use strict";r.d(t,{q:function(){return l}});var i=r(62027);class n extends i.G{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class o extends i.G{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class a extends i.G{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}let s={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new a({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new o({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new n({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new n({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let r=this.inspectBytes(e);return this.position+=t??e,r},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function l(e,{recursiveReadLimit:t=8192}={}){let r=Object.create(s);return r.bytes=e,r.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=t,r}},57040:function(e,t,r){"use strict";function i(e){return"string"==typeof e[0]?n(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),i=0;for(let t of e)r.set(t,i),i+=t.length;return r}(e)}function n(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:function(){return n},zo:function(){return i}})},15102:function(e,t,r){"use strict";function i(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:function(){return i}})},61769:function(e,t,r){"use strict";r.d(t,{gc:function(){return o},vk:function(){return n}});var i=r(69760);function n(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new i.$s({size:e.length,targetSize:r,type:"bytes"});let n=new Uint8Array(r);for(let i=0;i<r;i++){let o="right"===t;n[o?i:r-i-1]=e[o?i:e.length-i-1]}return n}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;let n=e.replace("0x","");if(n.length>2*r)throw new i.$s({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n["right"===t?"padEnd":"padStart"](2*r,"0")}`}},39135:function(e,t,r){"use strict";r.d(t,{d:function(){return n}});var i=r(15102);function n(e){return(0,i.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3972:function(e,t,r){"use strict";r.d(t,{T4:function(){return c},tP:function(){return a}});var i=r(69760),n=r(15102),o=r(39135);function a(e,t,r,{strict:i}={}){return(0,n.v)(e,{strict:!1})?function(e,t,r,{strict:i}={}){s(e,t);let n=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return i&&l(n,t,r),n}(e,t,r,{strict:i}):c(e,t,r,{strict:i})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new i.mV({offset:t,position:"start",size:(0,o.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new i.mV({offset:r,position:"end",size:(0,o.d)(e)})}function c(e,t,r,{strict:i}={}){s(e,t);let n=e.slice(t,r);return i&&l(n,t,r),n}},61836:function(e,t,r){"use strict";function i(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,i=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)i++;return(r="left"===t?r.slice(i):r.slice(0,r.length-i),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:function(){return i}})},95946:function(e,t,r){"use strict";r.d(t,{Yf:function(){return s},ly:function(){return c},rR:function(){return u},y_:function(){return l}});var i=r(87788),n=r(39135),o=r(61836),a=r(11187);function s(e,{size:t}){if((0,n.d)(e)>t)throw new i.M6({givenSize:(0,n.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let i=BigInt(e);if(!r)return i;let n=(e.length-2)/2;return i<=(1n<<8n*BigInt(n)-1n)-1n?i:i-BigInt(`0x${"f".padStart(2*n,"f")}`)-1n}function c(e,t={}){return Number(l(e,t))}function u(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},11187:function(e,t,r){"use strict";r.d(t,{O0:function(){return c},nr:function(){return h},qX:function(){return p}});var i=r(62027),n=r(15102),o=r(61769),a=r(95946),s=r(92106);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?h((0,s.eC)(e,t)):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,n.v)(e)?h(e,t):p(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);let s=n.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=d(n.charCodeAt(t++)),o=d(n.charCodeAt(t++));if(void 0===r||void 0===o)throw new i.G(`Invalid byte sequence ("${n[t-2]}${n[t-1]}" in "${n}").`);l[e]=16*r+o}return l}function p(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},92106:function(e,t,r){"use strict";r.d(t,{$G:function(){return h},C4:function(){return l},NC:function(){return s},ci:function(){return c},eC:function(){return u}});var i=r(87788),n=r(61769),o=r(95946);let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,n.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];let i=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(i,{size:t.size}),(0,n.vk)(i,{dir:"right",size:t.size})):i}function u(e,t={}){let r;let{signed:o,size:a}=t,s=BigInt(e);a?r=o?(1n<<8n*BigInt(a)-1n)-1n:2n**(8n*BigInt(a))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&o?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new i.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:o,size:a,value:`${e}${t}`})}let c=`0x${(o&&s<0?(1n<<BigInt(8*a))+BigInt(s):s).toString(16)}`;return a?(0,n.vk)(c,{size:a}):c}let d=new TextEncoder;function h(e,t={}){return c(d.encode(e),t)}},72365:function(e,t,r){"use strict";r.d(t,{S:function(){return s}});var i=r(57412),n=r(62027),o=r(97405),a=r(39028);function s(e,{abi:t,address:r,args:s,docsPath:l,functionName:c,sender:u}){let{code:d,data:h,message:p,shortMessage:f}=e instanceof o.VQ?e:e instanceof n.G?e.walk(e=>"data"in e)||e.walk():{},g=e instanceof i.wb?new o.Dk({functionName:c}):[3,a.XS.code].includes(d)&&(h||p||f)?new o.Lu({abi:t,data:"object"==typeof h?h.data:h,functionName:c,message:f??p}):e;return new o.uq(g,{abi:t,args:s,contractAddress:r,docsPath:l,functionName:c,sender:u})}},87469:function(e,t,r){"use strict";r.d(t,{k:function(){return o}});var i=r(62027),n=r(26445);function o(e,t){let r=(e.details||"").toLowerCase(),o=e instanceof i.G?e.walk(e=>e.code===n.M_.code):e;return o instanceof i.G?new n.M_({cause:e,message:o.details}):n.M_.nodeMessage.test(r)?new n.M_({cause:e,message:e.details}):n.Hh.nodeMessage.test(r)?new n.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.G$.nodeMessage.test(r)?new n.G$({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.ZI.nodeMessage.test(r)?new n.ZI({cause:e,nonce:t?.nonce}):n.vU.nodeMessage.test(r)?new n.vU({cause:e,nonce:t?.nonce}):n.se.nodeMessage.test(r)?new n.se({cause:e,nonce:t?.nonce}):n.C_.nodeMessage.test(r)?new n.C_({cause:e}):n.WF.nodeMessage.test(r)?new n.WF({cause:e,gas:t?.gas}):n.dR.nodeMessage.test(r)?new n.dR({cause:e,gas:t?.gas}):n.pZ.nodeMessage.test(r)?new n.pZ({cause:e}):n.cs.nodeMessage.test(r)?new n.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new n.cj({cause:e})}},61163:function(e,t,r){"use strict";function i(e,{format:t}){if(!t)return{};let r={};return!function t(i){for(let n of Object.keys(i))n in e&&(r[n]=e[n]),i[n]&&"object"==typeof i[n]&&!Array.isArray(i[n])&&t(i[n])}(t(e||{})),r}r.d(t,{K:function(){return i}})},74688:function(e,t,r){"use strict";r.d(t,{tG:function(){return o}});var i=r(92106);let n={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function o(e){let t={};return void 0!==e.accessList&&(t.accessList=e.accessList),void 0!==e.blobVersionedHashes&&(t.blobVersionedHashes=e.blobVersionedHashes),void 0!==e.blobs&&("string"!=typeof e.blobs[0]?t.blobs=e.blobs.map(e=>(0,i.ci)(e)):t.blobs=e.blobs),void 0!==e.data&&(t.data=e.data),void 0!==e.from&&(t.from=e.from),void 0!==e.gas&&(t.gas=(0,i.eC)(e.gas)),void 0!==e.gasPrice&&(t.gasPrice=(0,i.eC)(e.gasPrice)),void 0!==e.maxFeePerBlobGas&&(t.maxFeePerBlobGas=(0,i.eC)(e.maxFeePerBlobGas)),void 0!==e.maxFeePerGas&&(t.maxFeePerGas=(0,i.eC)(e.maxFeePerGas)),void 0!==e.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=(0,i.eC)(e.maxPriorityFeePerGas)),void 0!==e.nonce&&(t.nonce=(0,i.eC)(e.nonce)),void 0!==e.to&&(t.to=e.to),void 0!==e.type&&(t.type=n[e.type]),void 0!==e.value&&(t.value=(0,i.eC)(e.value)),t}},93714:function(e,t,r){"use strict";function i(e,t,r){return i=>e[t.name||r]?.(i)??t(e,i)}r.d(t,{s:function(){return i}})},91734:function(e,t,r){"use strict";r.d(t,{w:function(){return $}});var i=r(41656);let n=BigInt(4294967296-1),o=BigInt(32),a=(e,t,r)=>e<<r|t>>>32-r,s=(e,t,r)=>t<<r|e>>>32-r,l=(e,t,r)=>t<<r-32|e>>>64-r,c=(e,t,r)=>e<<r-32|t>>>64-r;var u=r(92203);let[d,h,p]=[[],[],[]],f=BigInt(0),g=BigInt(1),w=BigInt(2),m=BigInt(7),b=BigInt(256),v=BigInt(113);for(let e=0,t=g,r=1,i=0;e<24;e++){[r,i]=[i,(2*r+3*i)%5],d.push(2*(5*i+r)),h.push((e+1)*(e+2)/2%64);let n=f;for(let e=0;e<7;e++)(t=(t<<g^(t>>m)*v)%b)&w&&(n^=g<<(g<<BigInt(e))-g);p.push(n)}let[y,C]=function(e,t=!1){let r=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let a=0;a<e.length;a++){let{h:s,l}=function(e,t=!1){return t?{h:Number(e&n),l:Number(e>>o&n)}:{h:0|Number(e>>o&n),l:0|Number(e&n)}}(e[a],t);[r[a],i[a]]=[s,l]}return[r,i]}(p,!0),x=(e,t,r)=>r>32?l(e,t,r):a(e,t,r),k=(e,t,r)=>r>32?c(e,t,r):s(e,t,r);class E extends u.kb{constructor(e,t,r,n=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=n,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,i.Rx)(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,u.Jq)(this.state)}keccak(){!function(e,t=24){let r=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let i=(t+8)%10,n=(t+2)%10,o=r[n],a=r[n+1],s=x(o,a,1)^r[i],l=k(o,a,1)^r[i+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],n=e[3];for(let r=0;r<24;r++){let i=h[r],o=x(t,n,i),a=k(t,n,i),s=d[r];t=e[s],n=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let i=0;i<10;i++)r[i]=e[t+i];for(let i=0;i<10;i++)e[t+i]^=~r[(i+2)%10]&r[(i+4)%10]}e[0]^=y[i],e[1]^=C[i]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){(0,i.Gg)(this);let{blockLen:t,state:r}=this,n=(e=(0,u.O0)(e)).length;for(let i=0;i<n;){let o=Math.min(t-this.pos,n-i);for(let t=0;t<o;t++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:i}=this;e[r]^=t,(128&t)!=0&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){(0,i.Gg)(this,!1),(0,i.aI)(e),this.finish();let t=this.state,{blockLen:r}=this;for(let i=0,n=e.length;i<n;){this.posOut>=r&&this.keccak();let o=Math.min(r-this.posOut,n-i);e.set(t.subarray(this.posOut,this.posOut+o),i),this.posOut+=o,i+=o}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,i.Rx)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,i.J8)(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:i,rounds:n,enableXOF:o}=this;return e||(e=new E(t,r,i,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=r,e.outputLen=i,e.enableXOF=o,e.destroyed=this.destroyed,e}}let _=(0,u.hE)(()=>new E(136,1,32));var A=r(15102),S=r(11187),R=r(92106);function $(e,t){let r=_((0,A.v)(e,{strict:!1})?(0,S.O0)(e):e);return"bytes"===(t||"hex")?r:(0,R.NC)(r)}},58034:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var i=r(3972),n=r(67684);let o=e=>(0,i.tP)((0,n.r)(e),0,4)},67684:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var i=r(11187),n=r(91734);let o=e=>(0,n.w)((0,i.O0)(e)),a=/^tuple(?<array>(\[(\d*)\])*)$/;function s(e){let t="",r=e.length;for(let i=0;i<r;i++)t+=function e(t){let r=t.type;if(a.test(t.type)&&"components"in t){r="(";let i=t.components.length;for(let n=0;n<i;n++)r+=e(t.components[n]),n<i-1&&(r+=", ");let n=function(e,t){let r=e.exec(t);return r?.groups}(a,t.type);return r+=`)${n?.array??""}`,e({...t,type:r})}return("indexed"in t&&t.indexed&&(r=`${r} indexed`),t.name)?`${r} ${t.name}`:r}(e[i]),i!==r-1&&(t+=", ");return t}var l=r(62027);let c=e=>{var t;return function(e){let t=!0,r="",i=0,n="",o=!1;for(let a=0;a<e.length;a++){let s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&i++,")"===s&&i--,t){if(0===i){if(" "===s&&["event","function",""].includes(n))n="";else if(n+=s,")"===s){o=!0;break}continue}if(" "===s){","!==e[a-1]&&","!==r&&",("!==r&&(r="",t=!1);continue}n+=s,r+=s}}if(!o)throw new l.G("Unable to normalize signature.");return n}("string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${s(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${s(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${s(t.inputs)})`:"error"===t.type?`error ${t.name}(${s(t.inputs)})`:"constructor"===t.type?`constructor(${s(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable")};function u(e){return o(c(e))}},32357:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});let i=new Map;function n({fn:e,id:t,shouldSplitBatch:r,wait:n=0,sort:o}){let a=async()=>{let t=c();s();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.resolve?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.reject?.(e)}})},s=()=>i.delete(t),l=()=>c().map(({args:e})=>e),c=()=>i.get(t)||[],u=e=>i.set(t,[...c(),e]);return{flush:s,async schedule(e){let t={},i=new Promise((e,r)=>{t.resolve=e,t.reject=r});return(r?.([...l(),e])&&a(),c().length>0)?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(a,n)),i}}}},97933:function(e,t,r){"use strict";async function i(e){return new Promise(t=>setTimeout(t,e))}function n(e,{delay:t=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((o,a)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await i(r),s({count:l+1})};try{let t=await e();o(t)}catch(e){if(l<r&&await n({count:l,error:e}))return c({error:e});a(e)}};s()})}r.d(t,{J:function(){return n}})},96070:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});let i=(e,t,r)=>JSON.stringify(e,(e,r)=>{let i="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,i):i},r)},47531:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var i=r(14503),n=r(26087),o=r(26445),a=r(33639),s=r(60480);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,d=t?(0,i.T)(t):void 0;if(d&&!(0,s.U)(d.address))throw new n.b({address:d.address});if(u&&!(0,s.U)(u))throw new n.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new a.xY;if(l&&l>2n**256n-1n)throw new o.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new o.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},39625:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var i=r(84192),n=r(15229);function o(e,t="wei"){return(0,n.b)(e,i.ez[t])}},67795:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var i=r(84192),n=r(15229);function o(e,t="wei"){return(0,n.b)(e,i.Zn[t])}},15229:function(e,t,r){"use strict";function i(e,t){let r=e.toString(),i=r.startsWith("-");i&&(r=r.slice(1));let[n,o]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${o?`.${o}`:""}`}r.d(t,{b:function(){return i}})},41656:function(e,t,r){"use strict";function i(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function n(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}function a(e,t){n(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}r.d(t,{Gg:function(){return o},J8:function(){return a},Rx:function(){return i},aI:function(){return n}})},92203:function(e,t,r){"use strict";r.d(t,{GL:function(){return o},Jq:function(){return n},O0:function(){return s},hE:function(){return c},kb:function(){return l},np:function(){return a}});/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */let i=e=>e instanceof Uint8Array,n=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),o=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),a=(e,t)=>e<<32-t|e>>>t;if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw Error("Non little-endian hardware is not supported");function s(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!i(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}class l{clone(){return this._cloneInto()}}function c(e){let t=t=>e().update(s(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}},99931:function(e,t,r){"use strict";r.d(t,{V:function(){return s},F:function(){return l}});var i=r(67294);let n=!1;async function o(e,t={}){let r;if(n)return[];n=!0,e.setState(e=>({...e,status:e.current?"reconnecting":"connecting"}));let i=[];if(t.connectors?.length)for(let r of t.connectors){let t;t="function"==typeof r?e._internal.connectors.setup(r):r,i.push(t)}else i.push(...e.connectors);try{r=await e.storage?.getItem("recentConnectorId")}catch{}let o={};for(let[,t]of e.state.connections)o[t.connector.id]=1;r&&(o[r]=0);let a=Object.keys(o).length>0?[...i].sort((e,t)=>(o[e.id]??10)-(o[t.id]??10)):i,s=!1,l=[],c=[];for(let t of a){let r=await t.getProvider();if(!r||c.some(e=>e===r)||!await t.isAuthorized())continue;let i=await t.connect({isReconnecting:!0}).catch(()=>null);i&&(t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),e.setState(e=>{let r=new Map(s?e.connections:new Map).set(t.uid,{accounts:i.accounts,chainId:i.chainId,connector:t});return{...e,current:s?e.current:t.uid,connections:r}}),l.push({accounts:i.accounts,chainId:i.chainId,connector:t}),c.push(r),s=!0)}return("reconnecting"===e.state.status||"connecting"===e.state.status)&&(s?e.setState(e=>({...e,status:"connected"})):e.setState(e=>({...e,connections:new Map,current:void 0,status:"disconnected"}))),n=!1,l}function a(e){let{children:t,config:r,initialState:n,reconnectOnMount:a=!0}=e,{onMount:s}=function(e,t){let{initialState:r,reconnectOnMount:i}=t;return r&&!e._internal.store.persist.hasHydrated()&&e.setState({...r,connections:i?r.connections:new Map,status:i?"reconnecting":"disconnected"}),{async onMount(){if(e._internal.ssr){await e._internal.store.persist.rehydrate();let t=e._internal.mipd?.getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);e._internal.connectors.setState(e=>[...e,...t??[]])}i?o(e):e.storage&&e.setState(e=>({...e,connections:new Map}))}}}(r,{initialState:n,reconnectOnMount:a});r._internal.ssr||s();let l=(0,i.useRef)(!0);return(0,i.useEffect)(()=>{if(l.current&&r._internal.ssr)return s(),()=>{l.current=!1}},[]),t}let s=(0,i.createContext)(void 0);function l(e){let{children:t,config:r}=e;return(0,i.createElement)(a,e,(0,i.createElement)(s.Provider,{value:r},t))}},92321:function(e,t,r){"use strict";r.d(t,{m:function(){return u}});var i=r(33397),n=r(52425),o=r(37122),a=r(74751),s=r(67294),l=r(52798);let c=e=>"object"==typeof e&&!Array.isArray(e);function u(e={}){let t=(0,o.Z)(e);return function(e,t,r=t,i=a.v){let n=(0,s.useRef)([]),o=(0,l.useSyncExternalStoreWithSelector)(e,t,r,e=>e,(e,t)=>{if(c(e)&&c(t)&&n.current.length){for(let r of n.current)if(!i(e[r],t[r]))return!1;return!0}return i(e,t)});if(c(o)){let e={...o};return Object.defineProperties(e,Object.entries(e).reduce((e,[t,r])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(n.current.includes(t)||n.current.push(t),r)}}),{})),e}return o}(e=>(0,i.u)(t,{onChange:e}),()=>(0,n.D)(t))}},37122:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(67294),n=r(99931),o=r(7066);let a=()=>"wagmi@2.5.19";class s extends o.G{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/react"}get version(){return a()}}class l extends s{constructor(){super("`useConfig` must be used within `WagmiProvider`.",{docsPath:"/api/WagmiProvider"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiProviderNotFoundError"})}}function c(e={}){let t=e.config??(0,i.useContext)(n.V);if(!t)throw new l;return t}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);