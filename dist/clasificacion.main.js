(()=>{"use strict";var t={765:(t,o,n)=>{n.d(o,{UR:()=>r});const r={nombre:"Marina",apellido:"Laguna",correo:"marinalaguna2004@gmail.com",contrasena:"admin123",nick:"marina"}}},o={};function n(r){var e=o[r];if(void 0!==e)return e.exports;var a=o[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.d=(t,o)=>{for(var r in o)n.o(o,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},n.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),(()=>{var t=n(765);function o(t){let o=0;return t.forEach((t=>{const n=t.resultadosPorGrandesPremios||{};for(const t in n)if(n.hasOwnProperty(t)){const r=n[t],e=[25,18,15,12,10,8,6,4,2,1];r<=e.length&&(o+=e[r-1])}})),o}window.addEventListener("load",(function(){const n=document.getElementById("tablaClasificacion"),r=JSON.parse(localStorage.getItem("usuario"))||{},e=JSON.parse(localStorage.getItem("jugador1"))||{},a=JSON.parse(localStorage.getItem("jugador2"))||{};asignarPilotos(t.UR),asignarPilotos(e),asignarPilotos(a);const i=[t.UR.pilotoTitular,t.UR.pilotoSuplente],s=[e.pilotoTitular,e.pilotoSuplente],l=[a.pilotoTitular,a.pilotoSuplente],p=(pilotos,o(i)),d=o(s),u=o(l),c=[{nombre:r.nombre,puntos:p},{nombre:e.nombre,puntos:d},{nombre:a.nombre,puntos:u}].sort(((t,o)=>o.puntos-t.puntos)).map(((t,o)=>`\n            <tr>\n                <td>${o+1}</td>\n                <td>${t.nombre} </td>\n                <td>${t.apellidos}</td>\n                <td>${t.puntos}</td>\n            </tr>\n        `));n.innerHTML=`\n        <thead>\n            <tr>\n                <th>Posición</th>\n                <th>Nombre</th>\n                <th>Apellido</th>\n                <th>Puntos</th>\n            </tr>\n        </thead>\n        <tbody>\n            ${c.join("")}\n        </tbody>\n    `}))})()})();