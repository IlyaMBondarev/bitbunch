"use strict";document.querySelector(".page").classList.add("loaded");let e=document.querySelector(".main-screen__anim").querySelector("svg").querySelectorAll("g");setTimeout((()=>{e.forEach(((e,t)=>{setTimeout((()=>{e.classList.add("animated")}),100*t)}))}),500);let t=document.querySelectorAll(".popup-opener"),o=document.querySelectorAll(".popup-closer"),p=document.querySelector(".popup"),s=p.querySelector(".popup-ticket"),r=p.querySelector(".popup-thanks");t.forEach((e=>{e.addEventListener("click",(()=>{p.classList.add("popup-opened"),s.classList.add("popup-opened")}))})),o.forEach((e=>{e.addEventListener("click",(()=>{p.classList.remove("popup-opened"),s.classList.remove("popup-opened"),r.classList.remove("popup-opened")}))}));let c=s.querySelector("form"),l=c.querySelectorAll(".popup__form_block > input, .popup__form_block > textarea");l.forEach((e=>{e.addEventListener("input",(()=>{""!==e.value?e.classList.add("not-empty"):e.classList.remove("not-empty")}))})),c.addEventListener("submit",(e=>{e.preventDefault();l.forEach((e=>{e.value="",e.classList.remove("not-empty")})),r.classList.add("popup-opened")}));