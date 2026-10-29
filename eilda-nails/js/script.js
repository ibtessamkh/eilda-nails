(() => {
  const photos = [
    'WhatsApp Image 2026-10-08 at 17.57.49.jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.50.jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.50 (1).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.50 (2).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.50 (3).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.50 (4).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.51.jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.51 (1).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.51 (2).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.51 (3).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.51 (4).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.51 (5).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.51 (6).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.51 (7).jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.52.jpeg',
    'WhatsApp Image 2026-10-08 at 17.57.52 (1).jpeg'
  ];
  const fr = {
    skip:'Aller au contenu',darkMode:'Activer le mode sombre',lightMode:'Activer le mode clair',navCollection:'La collection',navGuide:'Guide des tailles',navAbout:'La maison',navAccount:'Mon espace',heroEyebrow:'LE GESTE BEAUTÉ, À VOTRE FAÇON',heroTitle:'De petits détails.<br><em>Une grande allure.</em>',heroText:'Des press-on nails faits main en Algérie, imaginés pour accompagner chaque moment de votre vie.',heroCta:'Découvrir les modèles',heroNote:'Faits à la main · Sur commande · Pensés pour vous',heroCaption:'Votre prochaine signature.',introEyebrow:'L’ART DE PRENDRE SOIN DE SOI',introTitle:'Votre style, <em>jusqu’au bout des doigts.</em>',introText:'Une petite parenthèse de beauté, prête à porter. Choisissez votre modèle, trouvez votre taille et laissez-nous préparer votre set avec soin.',collectionEyebrow:'LA SÉLECTION EILDA',collectionTitle:'Des modèles <em>à aimer.</em>',collectionText:'Chaque set est réalisé avec attention. Enregistrez vos favoris et contactez-nous pour commander.',storyEyebrow:'UNE NOTE DE LA MAISON',storyTitle:'La beauté qui vous <em>ressemble.</em>',storyText:'Chez Eilda Nails, chaque détail compte. Nos sets sont façonnés à la main pour vous offrir une manucure soignée, facile à porter et à changer au gré de vos envies.',storyLink:'Comment choisir ma taille',guideEyebrow:'LE BON AJUSTEMENT',guideTitle:'Votre taille,<br><em>tout simplement.</em>',guideText:'Mesurez chaque ongle au point le plus large, d’un bord à l’autre. Notez vos mesures en millimètres.',stepOneTitle:'Mesurez',stepOne:'Posez une bande de papier ou un ruban souple sur la partie la plus large de l’ongle.',stepTwoTitle:'Repérez',stepTwo:'Marquez les deux côtés de l’ongle, puis mesurez la distance en millimètres.',stepThreeTitle:'Envoyez',stepThree:'Envoyez-nous les mesures de vos dix ongles sur WhatsApp. Nous vous aiderons à choisir.',guideCta:'Besoin d’un conseil ?',accountEyebrow:'VOTRE PETIT CARNET',accountTitle:'Tout ce que vous <em>aimez.</em>',accountText:'Retrouvez vos coups de cœur et les commandes enregistrées sur cet appareil.',favorites:'Mes favoris',orders:'Mes achats',contactEyebrow:'ON SE RETROUVE ?',contactTitle:'Parlons de votre <em>prochain set.</em>',contactText:'Une question, une idée ou envie de commander ? Écrivez-nous, nous serons ravies de vous répondre.',contactCta:'Écrire sur WhatsApp',footerText:'Fait avec soin, en Algérie.',backTop:'Retour en haut ↑',favorite:'Ajouter aux favoris',unfavorite:'Retirer des favoris',viewModel:'Commander ce modèle',emptyFavorites:'Vos modèles préférés apparaîtront ici.',emptyOrders:'Vos commandes apparaîtront ici.',order:'Commande',remove:'Retirer',menu:'Ouvrir le menu',navLabel:'Navigation principale',brandLabel:'Eilda Nails — accueil',languageLabel:'Basculer en arabe'
  };
  const ar = {
    skip:'انتقل إلى المحتوى',darkMode:'تفعيل الوضع الداكن',lightMode:'تفعيل الوضع الفاتح',navCollection:'التشكيلة',navGuide:'دليل المقاسات',navAbout:'عن العلامة',navAccount:'مساحتي',heroEyebrow:'جمالكِ، على طريقتكِ',heroTitle:'تفاصيل صغيرة.<br><em>أناقة كبيرة.</em>',heroText:'أظافر لاصقة مصنوعة يدوياً في الجزائر، لترافق أجمل لحظاتكِ.',heroCta:'اكتشفي التصاميم',heroNote:'صناعة يدوية · حسب الطلب · لأجلكِ',heroCaption:'لمستكِ القادمة.',introEyebrow:'فن العناية بالنفس',introTitle:'أسلوبكِ <em>حتى أطراف أصابعكِ.</em>',introText:'لحظة جمال صغيرة وجاهزة للارتداء. اختاري التصميم والمقاس، ودعينا نجهز طقمكِ بعناية.',collectionEyebrow:'اختيارات إيلدا',collectionTitle:'تصاميم <em>تأسر القلب.</em>',collectionText:'كل طقم مصنوع بعناية. احفظي المفضلة وتواصلي معنا للطلب.',storyEyebrow:'من قلب العلامة',storyTitle:'جمال يشبه <em>شخصيتكِ.</em>',storyText:'في إيلدا نيلز، كل تفصيل مهم. نصنع كل طقم يدوياً لتحصلي على أظافر أنيقة وسهلة الارتداء والتغيير متى أردتِ.',storyLink:'كيف أختار مقاسي؟',guideEyebrow:'مقاس مريح',guideTitle:'مقاسكِ،<br><em>بكل بساطة.</em>',guideText:'قيسي كل ظفر عند أعرض نقطة من جانب إلى آخر، وسجلي القياسات بالميليمتر.',stepOneTitle:'قيسي',stepOne:'ضعي شريطاً ورقياً أو شريط قياس مرناً على أعرض جزء من الظفر.',stepTwoTitle:'حددي',stepTwo:'حددي جانبي الظفر ثم قيسي المسافة بالميليمتر.',stepThreeTitle:'أرسلي',stepThree:'أرسلي قياسات الأظافر العشرة عبر واتساب وسنساعدكِ في اختيار المقاس.',guideCta:'هل تحتاجين المساعدة؟',accountEyebrow:'دفتر اختياراتكِ',accountTitle:'كل ما <em>تحبينه.</em>',accountText:'تصفحي مفضلاتكِ وطلباتكِ المحفوظة على هذا الجهاز.',favorites:'مفضلتي',orders:'طلباتي',contactEyebrow:'يسعدنا تواصلكِ',contactTitle:'لنتحدث عن <em>طقمكِ القادم.</em>',contactText:'لديكِ سؤال أو فكرة أو ترغبين بالطلب؟ أرسلي لنا رسالة وسنكون سعيدات بمساعدتكِ.',contactCta:'راسِلينا عبر واتساب',footerText:'صنع بكل عناية في الجزائر.',backTop:'العودة للأعلى ↑',favorite:'أضيفي إلى المفضلة',unfavorite:'إزالة من المفضلة',viewModel:'اسألي عن هذا التصميم',emptyFavorites:'ستجد تصاميمكِ المفضلة مكانها هنا.',emptyOrders:'ستظهر طلباتكِ هنا عند حفظها.',order:'طلب',remove:'إزالة'
  };
  const $ = (s, root=document) => root.querySelector(s);
  const t = key => (document.documentElement.lang === 'ar' ? ar : fr)[key] || key;
  const read = (key, fallback=[]) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } };
  let favorites = read('eilda-favorites');
  let orders = read('eilda-orders');
  let activeTab = 'favorites';
  let lang = localStorage.getItem('eilda-language') || 'fr';
  let theme = localStorage.getItem('eilda-theme') || 'light';
  function translate(){
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = theme;
    const themeButton=$('.theme-toggle');
    themeButton.innerHTML=`<span aria-hidden="true">${theme==='dark'?'☀':'☾'}</span>`;
    themeButton.setAttribute('aria-label',t(theme==='dark'?'lightMode':'darkMode'));
    themeButton.title=t(theme==='dark'?'lightMode':'darkMode');
    document.querySelectorAll('[data-i18n]').forEach(el => { const value=t(el.dataset.i18n); el.innerHTML=value; });
    $('.lang-toggle').textContent = lang === 'ar' ? 'FR' : 'عربي';
    $('.lang-toggle').setAttribute('aria-label', lang === 'ar' ? 'التبديل إلى الفرنسية' : 'Basculer en arabe');
    document.title=lang==='ar'?'إيلدا نيلز — جمالكِ على طريقتكِ':'Eilda Nails — La beauté à votre façon';
    $('.menu-toggle').setAttribute('aria-label',lang==='ar'?'فتح القائمة':'Ouvrir le menu');
    $('#navigation').setAttribute('aria-label',lang==='ar'?'التنقل الرئيسي':'Navigation principale');
    $('.brand').setAttribute('aria-label',lang==='ar'?'إيلدا نيلز — الرئيسية':'Eilda Nails — accueil');
    renderProducts(); renderAccount();
  }
  function renderProducts(){
    const grid=$('#product-grid'); grid.replaceChildren();
    photos.forEach((file,index)=>{
      const id=`EN-${String(index+1).padStart(3,'0')}`,src=`photo/${file}`;
      const card=document.createElement('article');card.className='product-card';
      const image=document.createElement('div');image.className='product-image';
      const img=document.createElement('img');img.src=src;img.alt=`${lang==='ar'?'تصميم أظافر':'Modèle de press-on nails'} ${index+1}`;img.loading='lazy';img.onerror=()=>{img.remove();image.classList.add('photo-missing');};image.append(img);
      const fav=document.createElement('button');fav.className=`favorite-button${favorites.includes(id)?' is-favorite':''}`;fav.type='button';fav.textContent=favorites.includes(id)?'♥':'♡';fav.setAttribute('aria-label',t(favorites.includes(id)?'unfavorite':'favorite'));fav.addEventListener('click',()=>toggleFavorite(id));image.append(fav);
      const info=document.createElement('div');info.className='product-info';
      const title=document.createElement('h3');title.textContent=lang==='ar'?`تصميم إيلدا ${String(index+1).padStart(2,'0')}`:`L’éclat ${String(index+1).padStart(2,'0')}`;
      const description=document.createElement('p');description.textContent=lang==='ar'?'طقم مصنوع يدوياً حسب الطلب':'Un set fait main, préparé sur commande.';
      const link=document.createElement('a');link.className='product-link';link.href=`https://wa.me/213698853527?text=${encodeURIComponent((lang==='ar'?'مرحباً، أود الاستفسار عن التصميم ':'Bonjour, je souhaite commander le modèle ')+id)}`;link.target='_blank';link.rel='noopener';link.textContent=t('viewModel')+' ↗';link.addEventListener('click',()=>{orders.push({name:title.textContent,date:new Date().toISOString()});localStorage.setItem('eilda-orders',JSON.stringify(orders));$('#bag-count').textContent=orders.length;renderAccount();});
      info.append(title,description,link);card.append(image,info);grid.append(card);
    });$('#bag-count').textContent=orders.length;
    $('#favorite-count').textContent=favorites.length;
  }
  function toggleFavorite(id){favorites=favorites.includes(id)?favorites.filter(item=>item!==id):[...favorites,id];localStorage.setItem('eilda-favorites',JSON.stringify(favorites));renderProducts();renderAccount();}
  function renderAccount(){
    const root=$('#account-content');if(!root)return;root.replaceChildren();
    if(activeTab==='favorites'){
      const entries=favorites.map(id=>({id,file:photos[Number(id.slice(-3))-1]})).filter(item=>item.file);
      if(!entries.length){root.innerHTML=`<p class="empty-state">${t('emptyFavorites')}</p>`;return;}
      const list=document.createElement('div');list.className='saved-list';entries.forEach(({id,file})=>{const row=document.createElement('div');row.className='saved-item';const img=document.createElement('img');img.src=`photo/${file}`;img.alt='';const name=document.createElement('span');name.textContent=`${lang==='ar'?'تصميم إيلدا':'L’éclat'} ${id.slice(-3)}`;const remove=document.createElement('button');remove.type='button';remove.textContent='×';remove.setAttribute('aria-label',t('remove'));remove.addEventListener('click',()=>toggleFavorite(id));row.append(img,name,remove);list.append(row);});root.append(list);
    }else{
      if(!orders.length){root.innerHTML=`<p class="empty-state">${t('emptyOrders')}</p>`;return;}
      const list=document.createElement('div');list.className='order-list';orders.slice().reverse().forEach(order=>{const row=document.createElement('div');row.className='order-item';const name=document.createElement('span');name.textContent=order.name;const date=document.createElement('time');date.textContent=new Date(order.date).toLocaleDateString(lang==='ar'?'ar-DZ':'fr-DZ');row.append(name,date);list.append(row);});root.append(list);
    }
  }
  function init(){
    translate();
    $('.lang-toggle').addEventListener('click',()=>{lang=lang==='fr'?'ar':'fr';localStorage.setItem('eilda-language',lang);translate();});
    $('.theme-toggle').addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';localStorage.setItem('eilda-theme',theme);translate();});
    document.querySelectorAll('.account-tab').forEach(tab=>tab.addEventListener('click',()=>{activeTab=tab.dataset.tab;document.querySelectorAll('.account-tab').forEach(item=>{const active=item===tab;item.classList.toggle('active',active);item.setAttribute('aria-selected',String(active));});renderAccount();}));
    const menu=$('.menu-toggle'),nav=$('#navigation');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
  }
  document.addEventListener('DOMContentLoaded',init);
})();
