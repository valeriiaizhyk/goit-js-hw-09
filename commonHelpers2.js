import"./assets/reset-7cbcc927.js";const t=document.querySelector(".feedback-form"),r="feedback-form-state",a=t.elements.email,o=t.elements.message,s=lokalStorage.getItem(r);if(s)try{const e=JSON.parse(s);e.email&&e.message&&(a.value=e.email,o.value=e.message)}catch(e){console.log(e.name),console.log(e.message)}t.addEventListener("input",()=>{const e={email:a.value.trim(),message:o.value.trim()};lokalStorage.setItem(r,JSON.stringify(e))});t.addEventListener("submit",e=>{if(e.preventDefault(),a.value.trim()===""||o.value.trim()===""){alert("You need to write a message!");return}localStorage.removeItem(r),console.log({email:a.value.trim(),message:o.value.trim()}),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
