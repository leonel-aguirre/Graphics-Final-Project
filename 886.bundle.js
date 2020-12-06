(self.webpackChunkgraphics_final_project=self.webpackChunkgraphics_final_project||[]).push([[886],{886:(e,t,n)=>{"use strict";n.r(t),n.d(t,{OrbitControls:()=>a,MapControls:()=>i});var o=n(212),a=function(e,t){var n,a,i,s,c,r;void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new o.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:o.RsA.ROTATE,MIDDLE:o.RsA.DOLLY,RIGHT:o.RsA.PAN},this.touches={ONE:o.QmN.ROTATE,TWO:o.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.saveState=function(){u.target0.copy(u.target),u.position0.copy(u.object.position),u.zoom0=u.object.zoom},this.reset=function(){u.target.copy(u.target0),u.object.position.copy(u.position0),u.object.zoom=u.zoom0,u.object.updateProjectionMatrix(),u.dispatchEvent(m),u.update(),d=h.NONE},this.update=(n=new o.Pa4,a=(new o._fP).setFromUnitVectors(e.up,new o.Pa4(0,1,0)),i=a.clone().invert(),s=new o.Pa4,c=new o._fP,r=2*Math.PI,function(){var e=u.object.position;n.copy(e).sub(u.target),n.applyQuaternion(a),f.setFromVector3(n),u.autoRotate&&d===h.NONE&&k(2*Math.PI/60/60*u.autoRotateSpeed),u.enableDamping?(f.theta+=E.theta*u.dampingFactor,f.phi+=E.phi*u.dampingFactor):(f.theta+=E.theta,f.phi+=E.phi);var t=u.minAzimuthAngle,o=u.maxAzimuthAngle;return isFinite(t)&&isFinite(o)&&(t<-Math.PI?t+=r:t>Math.PI&&(t-=r),o<-Math.PI?o+=r:o>Math.PI&&(o-=r),f.theta=t<=o?Math.max(t,Math.min(o,f.theta)):f.theta>(t+o)/2?Math.max(t,f.theta):Math.min(o,f.theta)),f.phi=Math.max(u.minPolarAngle,Math.min(u.maxPolarAngle,f.phi)),f.makeSafe(),f.radius*=g,f.radius=Math.max(u.minDistance,Math.min(u.maxDistance,f.radius)),!0===u.enableDamping?u.target.addScaledVector(v,u.dampingFactor):u.target.add(v),n.setFromSpherical(f),n.applyQuaternion(i),e.copy(u.target).add(n),u.object.lookAt(u.target),!0===u.enableDamping?(E.theta*=1-u.dampingFactor,E.phi*=1-u.dampingFactor,v.multiplyScalar(1-u.dampingFactor)):(E.set(0,0,0),v.set(0,0,0)),g=1,!!(O||s.distanceToSquared(u.object.position)>b||8*(1-c.dot(u.object.quaternion))>b)&&(u.dispatchEvent(m),s.copy(u.object.position),c.copy(u.object.quaternion),O=!1,!0)}),this.dispose=function(){u.domElement.removeEventListener("contextmenu",te,!1),u.domElement.removeEventListener("pointerdown",Q,!1),u.domElement.removeEventListener("wheel",W,!1),u.domElement.removeEventListener("touchstart",$,!1),u.domElement.removeEventListener("touchend",ee,!1),u.domElement.removeEventListener("touchmove",J,!1),u.domElement.ownerDocument.removeEventListener("pointermove",G,!1),u.domElement.ownerDocument.removeEventListener("pointerup",K,!1),u.domElement.removeEventListener("keydown",q,!1)};var u=this,m={type:"change"},l={type:"start"},p={type:"end"},h={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},d=h.NONE,b=1e-6,f=new o.$V,E=new o.$V,g=1,v=new o.Pa4,O=!1,P=new o.FM8,y=new o.FM8,T=new o.FM8,A=new o.FM8,N=new o.FM8,w=new o.FM8,L=new o.FM8,R=new o.FM8,j=new o.FM8;function M(){return Math.pow(.95,u.zoomSpeed)}function k(e){E.theta-=e}function D(e){E.phi-=e}var Y,x=(Y=new o.Pa4,function(e,t){Y.setFromMatrixColumn(t,0),Y.multiplyScalar(-e),v.add(Y)}),C=function(){var e=new o.Pa4;return function(t,n){!0===u.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(u.object.up,e)),e.multiplyScalar(t),v.add(e)}}(),S=function(){var e=new o.Pa4;return function(t,n){var o=u.domElement;if(u.object.isPerspectiveCamera){var a=u.object.position;e.copy(a).sub(u.target);var i=e.length();i*=Math.tan(u.object.fov/2*Math.PI/180),x(2*t*i/o.clientHeight,u.object.matrix),C(2*n*i/o.clientHeight,u.object.matrix)}else u.object.isOrthographicCamera?(x(t*(u.object.right-u.object.left)/u.object.zoom/o.clientWidth,u.object.matrix),C(n*(u.object.top-u.object.bottom)/u.object.zoom/o.clientHeight,u.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),u.enablePan=!1)}}();function F(e){u.object.isPerspectiveCamera?g/=e:u.object.isOrthographicCamera?(u.object.zoom=Math.max(u.minZoom,Math.min(u.maxZoom,u.object.zoom*e)),u.object.updateProjectionMatrix(),O=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),u.enableZoom=!1)}function _(e){u.object.isPerspectiveCamera?g*=e:u.object.isOrthographicCamera?(u.object.zoom=Math.max(u.minZoom,Math.min(u.maxZoom,u.object.zoom/e)),u.object.updateProjectionMatrix(),O=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),u.enableZoom=!1)}function H(e){P.set(e.clientX,e.clientY)}function z(e){A.set(e.clientX,e.clientY)}function I(e){if(1==e.touches.length)P.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);P.set(t,n)}}function X(e){if(1==e.touches.length)A.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);A.set(t,n)}}function Z(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);L.set(0,o)}function U(e){if(1==e.touches.length)y.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);y.set(t,n)}T.subVectors(y,P).multiplyScalar(u.rotateSpeed);var o=u.domElement;k(2*Math.PI*T.x/o.clientHeight),D(2*Math.PI*T.y/o.clientHeight),P.copy(y)}function V(e){if(1==e.touches.length)N.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);N.set(t,n)}w.subVectors(N,A).multiplyScalar(u.panSpeed),S(w.x,w.y),A.copy(N)}function B(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);R.set(0,o),j.set(0,Math.pow(R.y/L.y,u.zoomSpeed)),F(j.y),L.copy(R)}function Q(e){if(!1!==u.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){var t;switch(e.preventDefault(),u.domElement.focus?u.domElement.focus():window.focus(),e.button){case 0:t=u.mouseButtons.LEFT;break;case 1:t=u.mouseButtons.MIDDLE;break;case 2:t=u.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.RsA.DOLLY:if(!1===u.enableZoom)return;!function(e){L.set(e.clientX,e.clientY)}(e),d=h.DOLLY;break;case o.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===u.enablePan)return;z(e),d=h.PAN}else{if(!1===u.enableRotate)return;H(e),d=h.ROTATE}break;case o.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===u.enableRotate)return;H(e),d=h.ROTATE}else{if(!1===u.enablePan)return;z(e),d=h.PAN}break;default:d=h.NONE}d!==h.NONE&&(u.domElement.ownerDocument.addEventListener("pointermove",G,!1),u.domElement.ownerDocument.addEventListener("pointerup",K,!1),u.dispatchEvent(l))}(e)}}function G(e){if(!1!==u.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1!==u.enabled)switch(e.preventDefault(),d){case h.ROTATE:if(!1===u.enableRotate)return;!function(e){y.set(e.clientX,e.clientY),T.subVectors(y,P).multiplyScalar(u.rotateSpeed);var t=u.domElement;k(2*Math.PI*T.x/t.clientHeight),D(2*Math.PI*T.y/t.clientHeight),P.copy(y),u.update()}(e);break;case h.DOLLY:if(!1===u.enableZoom)return;!function(e){R.set(e.clientX,e.clientY),j.subVectors(R,L),j.y>0?F(M()):j.y<0&&_(M()),L.copy(R),u.update()}(e);break;case h.PAN:if(!1===u.enablePan)return;!function(e){N.set(e.clientX,e.clientY),w.subVectors(N,A).multiplyScalar(u.panSpeed),S(w.x,w.y),A.copy(N),u.update()}(e)}}(e)}}function K(e){switch(e.pointerType){case"mouse":case"pen":u.domElement.ownerDocument.removeEventListener("pointermove",G,!1),u.domElement.ownerDocument.removeEventListener("pointerup",K,!1),!1!==u.enabled&&(u.dispatchEvent(p),d=h.NONE)}}function W(e){!1===u.enabled||!1===u.enableZoom||d!==h.NONE&&d!==h.ROTATE||(e.preventDefault(),e.stopPropagation(),u.dispatchEvent(l),function(e){e.deltaY<0?_(M()):e.deltaY>0&&F(M()),u.update()}(e),u.dispatchEvent(p))}function q(e){!1!==u.enabled&&!1!==u.enableKeys&&!1!==u.enablePan&&function(e){var t=!1;switch(e.keyCode){case u.keys.UP:S(0,u.keyPanSpeed),t=!0;break;case u.keys.BOTTOM:S(0,-u.keyPanSpeed),t=!0;break;case u.keys.LEFT:S(u.keyPanSpeed,0),t=!0;break;case u.keys.RIGHT:S(-u.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),u.update())}(e)}function $(e){if(!1!==u.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(u.touches.ONE){case o.QmN.ROTATE:if(!1===u.enableRotate)return;I(e),d=h.TOUCH_ROTATE;break;case o.QmN.PAN:if(!1===u.enablePan)return;X(e),d=h.TOUCH_PAN;break;default:d=h.NONE}break;case 2:switch(u.touches.TWO){case o.QmN.DOLLY_PAN:if(!1===u.enableZoom&&!1===u.enablePan)return;!function(e){u.enableZoom&&Z(e),u.enablePan&&X(e)}(e),d=h.TOUCH_DOLLY_PAN;break;case o.QmN.DOLLY_ROTATE:if(!1===u.enableZoom&&!1===u.enableRotate)return;!function(e){u.enableZoom&&Z(e),u.enableRotate&&I(e)}(e),d=h.TOUCH_DOLLY_ROTATE;break;default:d=h.NONE}break;default:d=h.NONE}d!==h.NONE&&u.dispatchEvent(l)}}function J(e){if(!1!==u.enabled)switch(e.preventDefault(),e.stopPropagation(),d){case h.TOUCH_ROTATE:if(!1===u.enableRotate)return;U(e),u.update();break;case h.TOUCH_PAN:if(!1===u.enablePan)return;V(e),u.update();break;case h.TOUCH_DOLLY_PAN:if(!1===u.enableZoom&&!1===u.enablePan)return;!function(e){u.enableZoom&&B(e),u.enablePan&&V(e)}(e),u.update();break;case h.TOUCH_DOLLY_ROTATE:if(!1===u.enableZoom&&!1===u.enableRotate)return;!function(e){u.enableZoom&&B(e),u.enableRotate&&U(e)}(e),u.update();break;default:d=h.NONE}}function ee(e){!1!==u.enabled&&(u.dispatchEvent(p),d=h.NONE)}function te(e){!1!==u.enabled&&e.preventDefault()}u.domElement.addEventListener("contextmenu",te,!1),u.domElement.addEventListener("pointerdown",Q,!1),u.domElement.addEventListener("wheel",W,!1),u.domElement.addEventListener("touchstart",$,!1),u.domElement.addEventListener("touchend",ee,!1),u.domElement.addEventListener("touchmove",J,!1),u.domElement.addEventListener("keydown",q,!1),this.update()};a.prototype=Object.create(o.pBf.prototype),a.prototype.constructor=a;var i=function(e,t){a.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=o.RsA.PAN,this.mouseButtons.RIGHT=o.RsA.ROTATE,this.touches.ONE=o.QmN.PAN,this.touches.TWO=o.QmN.DOLLY_ROTATE};i.prototype=Object.create(o.pBf.prototype),i.prototype.constructor=i}}]);