jQuery(document).ready((function(e){function a(){TweenLite.set(i,{x:"0%"}),TweenLite.set(u,{autoAlpha:0}),TweenLite.set($allGlow,{autoAlpha:0}),TweenLite.set(d,{className:"-=loading"})}function t(e,a,t,s,o){var i=new TimelineMax({onComplete:n(e,a)}),r=new TimelineMax,w=new TimelineMax,c=new TimelineMax;e.index()<a.index()?0==e.index()?w.set(l,{className:"+=is-animating"}).to(o,.25,{autoAlpha:0,ease:Power4.easeInOut}).to(t,.25,{autoAlpha:1,ease:Power4.easeInOut},"0").to(v,1,{y:"+=300"}).to(e,1,{autoAlpha:0,ease:Power4.easeInOut,clearProps:"all"}).to(u,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(a,0,{autoAlpha:0,x:"0%",ease:Power4.easeInOut}).to(a,1,{autoAlpha:1,ease:Power4.easeInOut}).set(l,{className:"-=is-animating"}):i.set(l,{className:"+=is-animating"}).to(e,.5,{x:"-=100%",ease:Power4.easeInOut,clearProps:"all"},"0").to(o,.25,{autoAlpha:0,ease:Power4.easeInOut},"0").to(t,.25,{autoAlpha:1,ease:Power4.easeInOut}).to(a,.5,{x:"0%",ease:Power4.easeInOut},"0").set(l,{className:"-=is-animating"}):0==a.index()?c.set(l,{className:"+=is-animating"}).to(o,.25,{autoAlpha:0,ease:Power4.easeInOut}).to(t,.25,{autoAlpha:1,ease:Power4.easeInOut},"0").to(e,1,{autoAlpha:0,ease:Power4.easeInOut,clearProps:"all"}).to(a,0,{autoAlpha:0,x:"0%",ease:Power4.easeInOut}).to(u,1,{autoAlpha:0,ease:Power4.easeInOut}).to(v,1,{y:"-=300"}).to(a,1,{autoAlpha:1,ease:Power4.easeInOut}).set(l,{className:"-=is-animating"}):r.set(l,{className:"+=is-animating"}).set(a,{x:"-100%"}).to(a,.5,{x:"0%",ease:Power4.easeInOut},"0").to(o,.25,{autoAlpha:0,ease:Power4.easeInOut},"0").to(t,.25,{autoAlpha:1,ease:Power4.easeInOut}).to(e,.5,{x:"100%",ease:Power4.easeInOut},"0").set(l,{className:"-=is-animating"})}function n(e,a){e.removeClass("is-active"),a.addClass("is-active")}e("h1").click((function(){alert("con")}));var s,o=e(".slide"),i=e(".slide.is-active"),l=e("body"),u=l.find(".bottom-nav"),r=u.find("#00"),w=u.find("#01"),c=u.find("#02"),d=u.find("#03"),h=u.find("#04"),m=u.find("#05");$navLink=u.find("ul a"),$allGlow=u.find(".glow"),$navNoGlow=u.find(".no-glow");var p=e(".home .keyword"),f=e(".home h1"),P=e(".home p"),v=e("body .planet");a(),e("#slide00 ul li a").on("click",(function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var t=parseInt(e(this).attr("href").substring(7,8))+1;console.log(t),e(".bottom-nav ul li:nth-child("+t+") a").trigger("click")})),$navLink.on("click",(function(a){var n=e(this).find(".glow"),s=e(this).find(".no-glow");if(console.log(n,s),a.preventDefault?a.preventDefault():a.returnValue=!1,!l.hasClass("is-animating")){var o=e(".slide.is-active"),i=e(this).attr("href"),u=e("div"+i);o.attr("id")!=u.attr("id")&&t(o,u,n,s,$allGlow)}}))}));