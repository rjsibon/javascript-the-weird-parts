import{translatableStrings}from"./_translations.js";export{translate};function translateString(t,n){const a=document.querySelector('[data-translate="'+n+'"]');let e,r;e=null!==translatableStrings[t][n]&&void 0!==translatableStrings[t][n]?translatableStrings[t][n]:translatableStrings.en[n],a&&("INPUT"===a.nodeName?"submit"===a.type?a.value=e:a.setAttribute("placeholder",e):(r=a.innerHTML,a.innerHTML=a.innerHTML.replace(r,e)))}function translate(t,n=!1){if(n)"string"==typeof n&&translateString(t,n);else for(const n in translatableStrings[t])translateString(t,n)}