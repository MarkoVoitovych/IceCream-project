!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequirefe28;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},t.parcelRequirefe28=r),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return o.default(e)};var n,o=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o.default(e,t)};var n,o=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),function(){var e={openHeaderMobileBtn:document.querySelector("[data-header-mobile-open]"),openHeaderModalBtn:document.querySelector("[data-header-modal-open]"),closeHeaderModalBtn:document.querySelector("[data-header-modal-close]"),headerModal:document.querySelector("[data-header-modal]"),headerMenu:document.querySelector(".header-menu"),headerMenuButton:document.querySelector(".header-menu__buy-btn")};function t(){document.body.classList.toggle("modal-header-open"),e.headerModal.classList.toggle("is-hidden")}e.openHeaderMobileBtn.addEventListener("click",t),e.openHeaderModalBtn.addEventListener("click",t),e.closeHeaderModalBtn.addEventListener("click",t),e.headerMenuButton.addEventListener("click",(function(){e.headerMenu.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}))}(),function(){var e={openHeaderMenuBtn:document.querySelector(".header-menu__toggle-open"),closeHeaderMenuBtn:document.querySelector(".header-menu__toggle-close"),headerMenu:document.querySelector(".header-menu"),headerMenuList:document.querySelector(".header-menu__nav-list")};function t(){document.body.classList.toggle("no-scroll"),e.headerMenu.classList.toggle("is-hidden")}e.openHeaderMenuBtn.addEventListener("click",t),e.closeHeaderMenuBtn.addEventListener("click",t),e.headerMenuList.addEventListener("click",(function(){e.headerMenu.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}))}();var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return i.default(e)||a.default(e)||c.default(e)||s.default()};var i=l(r("kMC0W")),a=l(r("7AJDX")),s=l(r("8CtQK")),c=l(r("auk6i"));function l(e){return e&&e.__esModule?e:{default:e}}var u={openProductModalBtn:document.querySelectorAll(".js-open-product-modal"),closeProductModalBtn:document.querySelectorAll(".js-close-product-modal"),productModal:document.querySelectorAll(".js-product-backdrop"),productModalWindow:document.querySelectorAll(".js-product-window"),productModalForm:document.querySelectorAll(".js-products-form"),productFormHeaders:document.querySelectorAll(".js-product-header"),productFormWrapImg:document.querySelectorAll(".js-form-wrap-img"),productFormImg:document.querySelectorAll(".js-product-form-img"),productFormList:document.querySelectorAll(".js-product-form-list"),productFormDescriptionList:document.querySelectorAll(".js-product-description-list"),productFormDescriptionHeader:document.querySelectorAll(".js-product-description-title"),productFormIndicatorText:document.querySelectorAll(".js-product-form-text"),productFormIndicatorCircles:document.querySelectorAll(".js-circle")},f=e(d)(u.openProductModalBtn),p=e(d)(u.productModal),m=e(d)(u.closeProductModalBtn),y=(e(d)(u.productModalWindow),e(d)(u.productModalForm)),v=e(d)(u.productFormHeaders),L=e(d)(u.productFormWrapImg),g=e(d)(u.productFormImg),h=e(d)(u.productFormList),S=e(d)(u.productFormDescriptionList),b=e(d)(u.productFormDescriptionHeader),M=e(d)(u.productFormIndicatorText),w=e(d)(u.productFormIndicatorCircles);function k(e){var t=e.currentTarget,n=f.indexOf(t);m[n].addEventListener("click",E),p[n].addEventListener("click",q),document.addEventListener("keydown",_),p[n].classList.remove("is-hidden"),p[n].classList.add("opened"),v[n].classList.add("animation-fade-in"),L[n].classList.add("animation-fade-in"),g[n].classList.add("animation-ping-pong"),h[n].classList.add("animation-fade-in"),S[n].classList.add("animation-fade-in"),b[n].classList.add("animation-fade-in"),y[n].classList.add("animation-fade-in"),M.filter((function(e){return M.indexOf(e)>=8*n&&M.indexOf(e)<8*n+8})).forEach((function(e){return e.classList.add("animation-rotate")})),w.filter((function(e){return w.indexOf(e)>=4*n&&w.indexOf(e)<4*n+4})).forEach((function(e){return e.classList.add("animation-rotate")}))}function E(e){var t=p.find((function(e){return e.classList.contains("opened")})),n=p.indexOf(t);p[n].classList.toggle("is-hidden"),p[n].classList.toggle("opened"),v[n].classList.toggle("animation-fade-in"),L[n].classList.toggle("animation-fade-in"),g[n].classList.toggle("animation-ping-pong"),h[n].classList.toggle("animation-fade-in"),S[n].classList.toggle("animation-fade-in"),b[n].classList.toggle("animation-fade-in"),y[n].classList.toggle("animation-fade-in"),M.filter((function(e){return M.indexOf(e)>=8*n&&M.indexOf(e)<8*n+8})).forEach((function(e){return e.classList.remove("animation-rotate")})),w.filter((function(e){return w.indexOf(e)>=4*n&&w.indexOf(e)<4*n+4})).forEach((function(e){return e.classList.remove("animation-rotate")})),m[n].removeEventListener("click",E),p[n].removeEventListener("click",q),document.removeEventListener("keydown",_),y[n].reset()}function q(e){e.composedPath().includes(u.productModalWindow)||E()}function _(e){"Escape"!==e.key||E()}u.openProductModalBtn.forEach((function(e){return e.addEventListener("click",k)}));var x=document.querySelector(".about-btn"),O=document.querySelector(".about-close-btn"),j=document.querySelector(".about-backdrop"),A=document.querySelector(".about-modal");x.addEventListener("click",(function(){j.classList.remove("is-hidden")})),O.addEventListener("click",(function(){j.classList.toggle("is-hidden")})),j.addEventListener("click",(function(e){e.composedPath().includes(A)||j.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&j.classList.add("is-hidden")}));new Swiper(".gallerySwiper",{effect:"fade",speed:1200,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},autoplay:{stopOnLastSlide:!1,disableOnInteraction:!1}});var P=new Swiper(".reviewsSwiper",{effect:"coverflow",speed:1500,spaceBetween:113,slidesPerView:1,rewind:!0,grabCursor:!0,simulateTouch:!0,initialSlide:1,autoplay:{delay:1300,stopOnLastSlide:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensitivity:1,eventsTarget:".swiper-slide"},a11y:{enabled:!0,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide"}}),F=document.querySelector(".reviewsSwiper");F.addEventListener("mouseleave",(function(e){P.params.autoplay.disableOnInteraction=!1,P.params.autoplay.delay=1300,P.autoplay.start()})),F.addEventListener("mouseenter",(function(e){P.autoplay.stop()}));var B=document.querySelector(".footer-franchisee-open-btn"),I=document.querySelector(".footer-franchisee__close-btn"),H=document.querySelector(".footer-franchisee-overlay"),T=document.querySelector(".footer-franchisee"),C=document.querySelector(".franchisee-form");B.addEventListener("click",(function(){H.classList.remove("is-hidden")})),I.addEventListener("click",(function(){H.classList.toggle("is-hidden"),C.reset()})),H.addEventListener("click",(function(e){e.composedPath().includes(T)||(H.classList.add("is-hidden"),C.reset())})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(H.classList.add("is-hidden"),C.reset())}));var D=document.querySelector(".footer-map-open-btn"),W=document.querySelector(".footer-map__close-btn"),N=document.querySelector(".footer-map-overlay"),V=document.querySelector(".footer-map");D.addEventListener("click",(function(){N.classList.remove("is-hidden")})),W.addEventListener("click",(function(){N.classList.toggle("is-hidden")})),N.addEventListener("click",(function(e){e.composedPath().includes(V)||N.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&N.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.1c00ad01.js.map
