(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var ev=$('ev-p');if(ev){function e(){var r=ev.closest('.ds-eve').getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight-r.top)/(innerHeight*.7)));ev.style.strokeDashoffset=(1-p).toFixed(3);}addEventListener('scroll',e,{passive:true});e();}
var P=[['Light &amp; citrus',['Lemon posset','Citrus tart','Fruit sorbet'],'A bright, sharp dessert echoes the freshness of fish and keeps the whole meal light.'],
 ['Fruit &amp; cream',['Apple tart','Berry pavlova','Vanilla panna cotta'],'Roast chicken is gentle and savoury, so fruit with something creamy feels generous without being heavy.'],
 ['Rich &amp; small',['Chocolate pots','Crème caramel','Caramel tart'],'After red meat a richer finish works, but keep the portion small and add fruit on the side.'],
 ['Cool &amp; fragrant',['Mango with cardamom yogurt','Kulfi','Rose rice pudding'],'Cool, creamy desserts soothe the heat of spices, and fragrant notes carry the meal through.'],
 ['Sharp &amp; fresh',['Lemon sorbet','Poached pears','Fruit salad with mint'],'A rich, creamy pasta needs a fresh, acidic finish to cut through the cream.'],
 ['Nutty &amp; warm',['Pistachio cake','Fruit crumble','Chocolate tart'],'A vegetable-led meal leaves room for something warm, nutty or indulgent.']];
var pc=[].slice.call(document.querySelectorAll('#pw-c button'));if(pc.length){var w=$('pw-w'),cur=0,rot=0;function pw(i){var d=((-i*60-rot)%360+540)%360-180;rot+=d;if(!rm)rot+=0;w.style.transform='rotate('+rot+'deg)';pc.forEach(function(b,j){b.classList.toggle('on',i===j);b.setAttribute('aria-pressed',i===j);});var p=P[i];$('pw-o').innerHTML='<h3>'+p[0]+'</h3><ul>'+p[1].map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul><p>'+p[2]+'</p>';}pc.forEach(function(b,i){b.addEventListener('click',function(){pw(i);});});pw(0);}
var D={pc:['Panna cotta',[['Warm the cream and set the mixture',20],['Pour into glasses and chill until set',240],['Make a fruit sauce',15]],10,'Turn out or top with fruit'],
 mo:['Chocolate mousse pots',[['Melt chocolate and fold in whipped cream',30],['Spoon into pots and chill',180]],5,'Add berries and a biscuit'],
 lt:['Lemon tart',[['Make pastry and let it rest',30],['Bake the case',25],['Fill and bake',30],['Cool, then chill',150]],10,'Slice with a hot knife'],
 pv:['Pavlova',[['Whisk the meringue',20],['Bake low and slow',75],['Leave to cool in the oven',120]],15,'Whip cream and add fruit'],
 cc:['Crème caramel',[['Make caramel and custard',30],['Bake in a water bath',45],['Cool, then chill',270]],10,'Turn out onto plates'],
 cr:['Fruit crumble',[['Prepare fruit and topping, then chill',25]],45,'Bake as the main course is served']};
var tt=$('tm-t');if(tt){var tg=$('tm-g'),td=$('tm-d');function hm(m){m=((m%1440)+1440)%1440;return String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0');}
 function tm(){var v=(tt.value||'19:30').split(':'),start=+v[0]*60+ +v[1],serve=start+ +tg.value,d=D[td.value],buf=15,steps=d[1],tot=steps.reduce(function(a,s){return a+s[1];},0),t;
  if(td.value==='cr'){t=serve-d[2]-buf-tot-60;}else{t=serve-d[2]-buf-tot;}var L=[],x=t;steps.forEach(function(s){L.push('<li><b>'+hm(x)+'</b>'+s[0]+'</li>');x+=s[1];});
  if(td.value==='cr'){L.push('<li><b>'+hm(serve-d[2])+'</b>'+d[3]+'</li>');}else{L.push('<li><b>'+hm(x)+'</b>Ready and waiting in the fridge</li>');L.push('<li><b>'+hm(serve-d[2])+'</b>'+d[3]+'</li>');}L.push('<li><b>'+hm(serve)+'</b>'+d[0]+' reaches the table</li>');
  $('tm-l').innerHTML=L.join('');$('tm-s').textContent=hm(t);$('tm-sv').textContent=(serve-t>=60?Math.floor((serve-t)/60)+' h ':'')+((serve-t)%60?(serve-t)%60+' min':'')+' before dessert';$('tm-a').style.strokeDasharray=Math.min(100,(serve-t)/480*100).toFixed(1)+' 100';}
 [tt,tg,td].forEach(function(e){e.addEventListener('input',tm);e.addEventListener('change',tm);});tm();}
})();
