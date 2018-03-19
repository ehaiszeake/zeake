'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),b=function(){function b(){_classCallCheck(this,b),this.content=[],this.node=document.querySelector('#event .content')}return _createClass(b,[{key:'loadContent',/**
     * get the content of elements to display
     */value:function loadContent(){if(!('undefined'==typeof CONTENT||zaeke.js.isAnEmptyObject(CONTENT))){var _c=[];for(var d in CONTENT)CONTENT.hasOwnProperty(d)&&(this.content.push(d),CONTENT[d].top&&(_c.push(d),this.content.pop()));this.content=_c.reverse().concat(this.content.reverse())}}/**
     * render the content to display the elements
     */},{key:'renderContent',value:function renderContent(){var _this=this;this.content.forEach(function(c,d,e){CONTENT[c].hasOwnProperty('single')?_this.renderSingleContent(_this.node,CONTENT[c]):CONTENT[c].hasOwnProperty('video')?_this.renderVideoContent(_this.node,CONTENT[c]):_this.renderImagesContent(_this.node,CONTENT[c])})}/**
     * render single sentence
     */},{key:'renderSingleContent',value:function renderSingleContent(c,d){var e='<div class="single"><div class="time"><div class="timeContent">'+d.time+'</div></div><div class="point"></div><div class="notes"><div class="notesContent">'+d.content+'</div></div></div>';c.innerHTML+=e}/**
     * render video content
     */},{key:'renderVideoContent',value:function renderVideoContent(c,d){var e='<div class="post"><div class="time"><div class="timeContent">'+d.time+'</div></div><div class="point"></div><a href="#"><div data-type="videoContent">'+d.video+'</div><div class="postinfo"><div class="postinfoContent">'+d.content+'</div></div></a></div>';c.innerHTML+=e}/**
     * render images content
     */},{key:'renderImagesContent',value:function renderImagesContent(c,d){var e='',g=this.lengthOfObject(d.img),h=void 0;// iterator
// "more images" button
if(0===g)// prevent with no images, downcast it to single content
return this.renderSingleContent(c,d);for(var f in d.img)e+='<img src="'+d.img[f]+'">';2<g&&(h='<div data-type="collapse">更多图片</div>',e+=h);var k='<div class="post"><div class="time"><div class="timeContent">'+d.time+'</div></div><div class="point"></div><a href="javascript:void(0);">'+e+'<div class="postinfo"><div class="postinfoContent">'+d.content+'</div></div></a></div>';c.innerHTML+=k}/**
     * return the "length" of an object(actually object's keys' count)
     */},{key:'lengthOfObject',value:function lengthOfObject(c){var d=[];for(var e in c)c.hasOwnProperty(e)&&d.push(e);return d.length}/**
     * with multiple images, hide others
     * bind "more images" button's click event
     */},{key:'init',value:function init(){var c=null,d=null,e=null,f=null;// container to wrap the images
c=document.querySelectorAll('.post');for(var g=0;g<c.length;g++)if(d=c[g].querySelectorAll('img'),2<d.length){e=document.createElement('div'),e.setAttribute('data-type','container'),e.style.height=0,e.style.overflow='hidden',e.style.transition='height 0.5s';for(var _h6=0;_h6<d.length;_h6++)1<_h6&&e.appendChild(d[_h6]);// insert container into DOM
f=c[g].querySelector('[data-type=collapse]'),f.parentNode.insertBefore(e,f),c[g].setAttribute('data-collapse','true')}this.bindPhotosEvent()}/**
     * "more images" button's click event
     */},{key:'bindPhotosEvent',value:function bindPhotosEvent(){// button's parentNode
// images's container
// images's count in container
for(var _loop=function _loop(_c2,_d2,_e2,_f2,_g,_h4){_c2[_h4].addEventListener('click',function(){_d2=this.parentNode.parentNode,_e2=this.previousElementSibling,_f2=_e2.querySelectorAll('img').length,'true'===_d2.getAttribute('data-collapse')?(_e2.style.height=zaeke.js.isMobileDevice()?_g.judgeLine(_f2,1)*(225*(0.96*(0.94*window.innerWidth))/300)+20+'px':245*_g.judgeLine(_f2,2)+'px',this.innerText='收起',_d2.setAttribute('data-collapse','false')):(_e2.style.height=0,this.innerText='更多图片',_d2.setAttribute('data-collapse','true'))},!1),_d=_d2,_e=_e2,_f=_f2},_c2=document.querySelectorAll('[data-type=collapse]'),_d=void 0,_e=null,_f=void 0,_g=this,_h4=0;_h4<_c2.length;_h4++)_loop(_c2,_d,_e,_f,_g,_h4);// all buttons
}/**
     * calculate how many lines needed to display the hidden images
     */},{key:'judgeLine',value:function judgeLine(c,d){return 0==c%d?c/d:parseInt(c/d)+1}},{key:'load',value:function load(){this.loadContent(),this.renderContent(),this.init()}}]),b}(),loader=new b;/**
 * loader to load `CONTENT` and render the `CONTENT` on page
 */function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}loader.load();