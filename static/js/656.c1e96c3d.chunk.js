"use strict";(self.webpackChunkportfolio_page=self.webpackChunkportfolio_page||[]).push([[656],{656:(o,e,i)=>{i.d(e,{Collider:()=>u});var s=i(4409);const t=.5,n=10,a=0;function d(o,e,i,d,l,c){const r=(0,s.qE)(o.options.collisions.absorb.speed*l.factor/n,a,d);o.size.value+=r*t,i.size.value-=r,d<=c&&(i.size.value=0,i.destroy())}const l=o=>{void 0===o.collisionMaxSpeed&&(o.collisionMaxSpeed=(0,s.VG)(o.options.collisions.maxSpeed)),o.velocity.length>o.collisionMaxSpeed&&(o.velocity.length=o.collisionMaxSpeed)};function c(o,e){(0,s.pE)((0,s.Tg)(o),(0,s.Tg)(e)),l(o),l(e)}function r(o,e,i,s){switch(o.options.collisions.mode){case"absorb":!function(o,e,i,s){const t=o.getRadius(),n=e.getRadius();void 0===t&&void 0!==n?o.destroy():void 0!==t&&void 0===n?e.destroy():void 0!==t&&void 0!==n&&(t>=n?d(o,0,e,n,i,s):d(e,0,o,t,i,s))}(o,e,i,s);break;case"bounce":c(o,e);break;case"destroy":!function(o,e){o.unbreakable||e.unbreakable||c(o,e),void 0===o.getRadius()&&void 0!==e.getRadius()?o.destroy():void 0!==o.getRadius()&&void 0===e.getRadius()?e.destroy():void 0!==o.getRadius()&&void 0!==e.getRadius()&&(o.getRadius()>=e.getRadius()?e:o).destroy()}(o,e)}}class u extends s.U4{constructor(o){super(o)}clear(){}init(){}interact(o,e){if(o.destroyed||o.spawning)return;const i=this.container,t=o.getPosition(),n=o.getRadius(),a=i.particles.quadTree.queryCircle(t,2*n);for(const d of a){if(o===d||!d.options.collisions.enable||o.options.collisions.mode!==d.options.collisions.mode||d.destroyed||d.spawning)continue;const a=d.getPosition(),l=d.getRadius();if(Math.abs(Math.round(t.z)-Math.round(a.z))>n+l)continue;(0,s.Yf)(t,a)>n+l||r(o,d,e,i.retina.pixelRatio)}}isEnabled(o){return o.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=656.c1e96c3d.chunk.js.map