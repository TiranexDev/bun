var Kf=(N)=>{return import.meta.require(N)};var $=function(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null},g=function(N,J,f){if(N&&typeof N==="object"&&N instanceof $)return N;var X=new $;return X.parse(N,J,f),X},t=function(N){if(typeof N==="string")N=g(N);if(!(N instanceof $))return $.prototype.format.call(N);return N.format()},ff=function(N,J){return g(N,!1,!0).resolve(J)},Nf=function(N,J){if(!N)return J;return g(N,!1,!0).resolveObject(J)},Bf=function(N){const J={protocol:N.protocol,hostname:typeof N.hostname==="string"&&N.hostname.startsWith("[")?N.hostname.slice(1,-1):N.hostname,hash:N.hash,search:N.search,pathname:N.pathname,path:`${N.pathname||""}${N.search||""}`,href:N.href};if(N.port!=="")J.port=Number(N.port);if(N.username||N.password)J.auth=`${decodeURIComponent(N.username)}:${decodeURIComponent(N.password)}`;return J},{URL:n,URLSearchParams:H}=globalThis,i=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,u=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,a=["<",">",'"',"`"," ","\r","\n","\t"],l=["{","}","|","\\","^","`"].concat(a),E=["'"].concat(l),m=["%","/","?",";","#"].concat(E),c=["/","?","#"],s=255,P=/^[+a-z0-9A-Z_-]{0,63}$/,r=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,e={javascript:!0,"javascript:":!0},d={javascript:!0,"javascript:":!0},L={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};$.prototype.parse=function(N,J,f){if(typeof N!=="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof N);var X=N.indexOf("?"),V=X!==-1&&X<N.indexOf("#")?"?":"#",O=N.split(V),_=/\\/g;O[0]=O[0].replace(_,"/"),N=O.join(V);var B=N;if(B=B.trim(),!f&&N.split("#").length===1){var D=u.exec(B);if(D){if(this.path=B,this.href=B,this.pathname=D[1],D[2])if(this.search=D[2],J)this.query=new H(this.search.substr(1)).toJSON();else this.query=this.search.substr(1);else if(J)this.search="",this.query={};return this}}var Y=i.exec(B);if(Y){Y=Y[0];var I=Y.toLowerCase();this.protocol=I,B=B.substr(Y.length)}if(f||Y||B.match(/^\/\/[^@/]+@[^@/]+/)){var w=B.substr(0,2)==="//";if(w&&!(Y&&d[Y]))B=B.substr(2),this.slashes=!0}if(!d[Y]&&(w||Y&&!L[Y])){var W=-1;for(var K=0;K<c.length;K++){var T=B.indexOf(c[K]);if(T!==-1&&(W===-1||T<W))W=T}var A,Z;if(W===-1)Z=B.lastIndexOf("@");else Z=B.lastIndexOf("@",W);if(Z!==-1)A=B.slice(0,Z),B=B.slice(Z+1),this.auth=decodeURIComponent(A);W=-1;for(var K=0;K<m.length;K++){var T=B.indexOf(m[K]);if(T!==-1&&(W===-1||T<W))W=T}if(W===-1)W=B.length;this.host=B.slice(0,W),B=B.slice(W),this.parseHost(),this.hostname=this.hostname||"";var R=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!R){var G=this.hostname.split(/\./);for(var K=0,M=G.length;K<M;K++){var x=G[K];if(!x)continue;if(!x.match(P)){var z="";for(var C=0,S=x.length;C<S;C++)if(x.charCodeAt(C)>127)z+="x";else z+=x[C];if(!z.match(P)){var q=G.slice(0,K),F=G.slice(K+1),Q=x.match(r);if(Q)q.push(Q[1]),F.unshift(Q[2]);if(F.length)B="/"+F.join(".")+B;this.hostname=q.join(".");break}}}}if(this.hostname.length>s)this.hostname="";else this.hostname=this.hostname.toLowerCase();if(!R)this.hostname=new n("http://"+this.hostname).hostname;var b=this.port?":"+this.port:"",v=this.hostname||"";if(this.host=v+b,this.href+=this.host,R){if(this.hostname=this.hostname.substr(1,this.hostname.length-2),B[0]!=="/")B="/"+B}}if(!e[I])for(var K=0,M=E.length;K<M;K++){var j=E[K];if(B.indexOf(j)===-1)continue;var y=encodeURIComponent(j);if(y===j)y=escape(j);B=B.split(j).join(y)}var k=B.indexOf("#");if(k!==-1)this.hash=B.substr(k),B=B.slice(0,k);var U=B.indexOf("?");if(U!==-1){if(this.search=B.substr(U),this.query=B.substr(U+1),J)this.query=new H(this.query);B=B.slice(0,U)}else if(J)this.search="",this.query={};if(B)this.pathname=B;if(L[I]&&this.hostname&&!this.pathname)this.pathname="/";if(this.pathname||this.search){var b=this.pathname||"",h=this.search||"";this.path=b+h}return this.href=this.format(),this};$.prototype.format=function(){var N=this.auth||"";if(N)N=encodeURIComponent(N),N=N.replace(/%3A/i,":"),N+="@";var J=this.protocol||"",f=this.pathname||"",X=this.hash||"",V=!1,O="";if(this.host)V=N+this.host;else if(this.hostname){if(V=N+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port)V+=":"+this.port}if(this.query&&typeof this.query==="object"&&Object.keys(this.query).length)O=new H(this.query).toString();var _=this.search||O&&"?"+O||"";if(J&&J.substr(-1)!==":")J+=":";if(this.slashes||(!J||L[J])&&V!==!1){if(V="//"+(V||""),f&&f.charAt(0)!=="/")f="/"+f}else if(!V)V="";if(X&&X.charAt(0)!=="#")X="#"+X;if(_&&_.charAt(0)!=="?")_="?"+_;return f=f.replace(/[?#]/g,function(B){return encodeURIComponent(B)}),_=_.replace("#","%23"),J+V+f+_+X};$.prototype.resolve=function(N){return this.resolveObject(g(N,!1,!0)).format()};$.prototype.resolveObject=function(N){if(typeof N==="string"){var J=new $;J.parse(N,!1,!0),N=J}var f=new $,X=Object.keys(this);for(var V=0;V<X.length;V++){var O=X[V];f[O]=this[O]}if(f.hash=N.hash,N.href==="")return f.href=f.format(),f;if(N.slashes&&!N.protocol){var _=Object.keys(N);for(var B=0;B<_.length;B++){var D=_[B];if(D!=="protocol")f[D]=N[D]}if(L[f.protocol]&&f.hostname&&!f.pathname)f.pathname="/",f.path=f.pathname;return f.href=f.format(),f}if(N.protocol&&N.protocol!==f.protocol){if(!L[N.protocol]){var Y=Object.keys(N);for(var I=0;I<Y.length;I++){var w=Y[I];f[w]=N[w]}return f.href=f.format(),f}if(f.protocol=N.protocol,!N.host&&!d[N.protocol]){var M=(N.pathname||"").split("/");while(M.length&&!(N.host=M.shift()));if(!N.host)N.host="";if(!N.hostname)N.hostname="";if(M[0]!=="")M.unshift("");if(M.length<2)M.unshift("");f.pathname=M.join("/")}else f.pathname=N.pathname;if(f.search=N.search,f.query=N.query,f.host=N.host||"",f.auth=N.auth,f.hostname=N.hostname||N.host,f.port=N.port,f.pathname||f.search){var W=f.pathname||"",K=f.search||"";f.path=W+K}return f.slashes=f.slashes||N.slashes,f.href=f.format(),f}var T=f.pathname&&f.pathname.charAt(0)==="/",A=N.host||N.pathname&&N.pathname.charAt(0)==="/",Z=A||T||f.host&&N.pathname,R=Z,G=f.pathname&&f.pathname.split("/")||[],M=N.pathname&&N.pathname.split("/")||[],x=f.protocol&&!L[f.protocol];if(x){if(f.hostname="",f.port=null,f.host)if(G[0]==="")G[0]=f.host;else G.unshift(f.host);if(f.host="",N.protocol){if(N.hostname=null,N.port=null,N.host)if(M[0]==="")M[0]=N.host;else M.unshift(N.host);N.host=null}Z=Z&&(M[0]===""||G[0]==="")}if(A)f.host=N.host||N.host===""?N.host:f.host,f.hostname=N.hostname||N.hostname===""?N.hostname:f.hostname,f.search=N.search,f.query=N.query,G=M;else if(M.length){if(!G)G=[];G.pop(),G=G.concat(M),f.search=N.search,f.query=N.query}else if(N.search!=null){if(x){f.host=G.shift(),f.hostname=f.host;var z=f.host&&f.host.indexOf("@")>0?f.host.split("@"):!1;if(z)f.auth=z.shift(),f.hostname=z.shift(),f.host=f.hostname}if(f.search=N.search,f.query=N.query,f.pathname!==null||f.search!==null)f.path=(f.pathname?f.pathname:"")+(f.search?f.search:"");return f.href=f.format(),f}if(!G.length){if(f.pathname=null,f.search)f.path="/"+f.search;else f.path=null;return f.href=f.format(),f}var C=G.slice(-1)[0],S=(f.host||N.host||G.length>1)&&(C==="."||C==="..")||C==="",q=0;for(var F=G.length;F>=0;F--)if(C=G[F],C===".")G.splice(F,1);else if(C==="..")G.splice(F,1),q++;else if(q)G.splice(F,1),q--;if(!Z&&!R)for(;q--;q)G.unshift("..");if(Z&&G[0]!==""&&(!G[0]||G[0].charAt(0)!=="/"))G.unshift("");if(S&&G.join("/").substr(-1)!=="/")G.push("");var Q=G[0]===""||G[0]&&G[0].charAt(0)==="/";if(x){f.hostname=Q?"":G.length?G.shift():"",f.host=f.hostname;var z=f.host&&f.host.indexOf("@")>0?f.host.split("@"):!1;if(z)f.auth=z.shift(),f.hostname=z.shift(),f.host=f.hostname}if(Z=Z||f.host&&G.length,Z&&!Q)G.unshift("");if(G.length>0)f.pathname=G.join("/");else f.pathname=null,f.path=null;if(f.pathname!==null||f.search!==null)f.path=(f.pathname?f.pathname:"")+(f.search?f.search:"");return f.auth=N.auth||f.auth,f.slashes=f.slashes||N.slashes,f.href=f.format(),f};$.prototype.parseHost=function(){var N=this.host,J=o.exec(N);if(J){if(J=J[0],J!==":")this.port=J.substr(1);N=N.substr(0,N.length-J.length)}if(N)this.hostname=N};var p=globalThis[Symbol.for("Bun.lazy")],Gf=p("pathToFileURL"),Jf=p("fileURLToPath"),Vf={parse:g,resolve:ff,resolveObject:Nf,format:t,Url:$,URLSearchParams:H,URL:n,pathToFileURL:Gf,fileURLToPath:Jf,urlToHttpOptions:Bf,[Symbol.for("CommonJS")]:0};export{Bf as urlToHttpOptions,Nf as resolveObject,ff as resolve,Gf as pathToFileURL,g as parse,t as format,Jf as fileURLToPath,Vf as default,$ as Url,H as URLSearchParams,n as URL};