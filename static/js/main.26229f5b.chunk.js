(this.webpackJsonpphikulthaibistro=this.webpackJsonpphikulthaibistro||[]).push([[0],{100:function(e,a,r){},131:function(e,a,r){},134:function(e,a,r){},135:function(e,a,r){},136:function(e,a,r){},137:function(e,a,r){},138:function(e,a,r){"use strict";r.r(a);var i=r(0),t=r.n(i),n=r(12),o=r.n(n),c=(r(99),r(26)),l=r(15),s=(r(100),r(43)),m=r(3),d=r.n(m);r(62);function h(e){var a=e.className,r=e.children,i=Object(s.a)(e,["className","children"]),n=i.primary,o=i.secondary,c=i.gray,l=i.white,m=i.link,h=d()(a,{"body-copy":!0,"primary-color":n,"secondary-color":o,"gray-color":c,"white-color":l,"link-color":m});return t.a.createElement("p",Object.assign({className:h},i),r)}function p(e){var a=e.className,r=e.children,i=Object(s.a)(e,["className","children"]),n=i.primary,o=i.secondary,c=i.gray,l=i.white,m=i.link,h=d()(a,{"header-copy":!0,"primary-color":n,"secondary-color":o,"gray-color":c,"white-color":l,"link-color":m});return t.a.createElement("p",Object.assign({className:h},i),r)}function u(e){var a=e.className,r=e.children,i=Object(s.a)(e,["className","children"]),n=i.primary,o=i.secondary,c=i.gray,l=i.white,m=i.link,h=d()(a,{"subheader-copy":!0,"primary-color":n,"secondary-color":o,"gray-color":c,"white-color":l,"link-color":m});return t.a.createElement("p",Object.assign({className:h},i),r)}var f=r(92),g=r(140),k=r(11),w=r(14);function $(){return t.a.createElement(t.a.Fragment,null,t.a.createElement(g.a,{className:"left-menu-wrapper",mode:window.innerWidth>1024?"horizontal":"inline"},t.a.createElement(g.a.Item,{key:"home",className:"nav-heder"},t.a.createElement(c.b,{to:"/"},t.a.createElement(p,{white:window.innerWidth>1024?"true":null},t.a.createElement(k.a,{icon:w.e})))),t.a.createElement(g.a.Item,{key:"menu",className:"nav-heder"},t.a.createElement("div",null,t.a.createElement(c.b,{to:"/menu"},t.a.createElement(p,{white:window.innerWidth>1024?"true":null},"Menu"))))))}var E=r(66);function b(e){return t.a.createElement(t.a.Fragment,null,t.a.createElement(g.a,{className:"right-menu-wrapper",mode:window.innerWidth>1280?"horizontal":"vertical"},t.a.createElement(g.a.Item,{key:"phone"},t.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"tel:+1-816-894-3993"},t.a.createElement(h,{white:"true",link:"true"},t.a.createElement(k.a,Object.assign({className:"link-color",icon:w.g},e))," ","(816) 894 - 3993"))),t.a.createElement(g.a.Item,{key:"facebook"},t.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/PhikulThaiBistro",rel:"noopener noreferrer"},t.a.createElement(h,{white:"true",link:"true"},t.a.createElement(k.a,Object.assign({className:"link-color",icon:E.a},e)))))))}var y=r(87),P=r.n(y),S=r(141);r(131);function v(){var e=Object(i.useState)(!1),a=Object(f.a)(e,2),r=a[0],n=a[1],o=function(){n(!1)};return t.a.createElement("nav",{className:"menu-bar"},t.a.createElement("div",{className:"logo"},t.a.createElement(c.b,{to:"/"},t.a.createElement("img",{className:"navbar-logo",alt:"Phikul Thai Bistro",src:P.a}))),t.a.createElement("div",{className:"menu-content"},t.a.createElement("div",{className:"left-menu"},t.a.createElement($,null)),t.a.createElement("div",{className:"right-menu"},t.a.createElement(b,null)),t.a.createElement("div",{className:"navbar-mobile"},t.a.createElement("div",{className:"bars-menu"},t.a.createElement(k.a,{icon:w.b,onClick:function(){n(!0)}})))),t.a.createElement(S.a,{title:t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"left-float"}),t.a.createElement("div",{className:"right-float"},t.a.createElement(k.a,{icon:w.a,onClick:o}))),className:"drawer-menu",width:"80%",placement:"left",key:"top",closable:!1,onClose:o,onClick:o,visible:r,bodyStyle:{color:"#272725",backgroundColor:"#272725"}},t.a.createElement($,null),t.a.createElement(b,null)))}r(134);function T(e){return t.a.createElement("nav",{className:"nav-footer"},t.a.createElement("div",{className:"footer-content"},t.a.createElement("div",{className:"footer-item"},t.a.createElement(h,{white:"true"},"\xa9 2020 Phikul Thai Bistro. All rights reserved."))))}var N=r(139),C=function(e){return console.log(e.imageAlt,e.isPortrait),t.a.createElement("div",{className:"thumbnail"},t.a.createElement("img",{src:e.imagePath,className:e.isPortrait?"portrait":"",alt:e.imageAlt?e.imageAlt:"Thai food in Kansas City image"}))},B=(r(135),function(e){var a,r,i,n,o=e.name,c=e.description,l=e.image,s=e.price,m=e.divider,d=e.desktop;return 1!==s.lunch.length&&1!==s.lunch.dinner||(i=!0,n=s.lunch[0]?s.lunch[0]:s.dinner[0]),s.lunch.length>0&&(a=!0),s.dinner.length>0&&(r=!0),t.a.createElement("div",null,t.a.createElement("h2",{className:"menu-display-name"},o),t.a.createElement("p",{className:"menu-display-description"},c),d&&l&&t.a.createElement(C,{imagePath:l.path,imageAlt:o,isPortrait:l.isPortrait}),!i&&t.a.createElement(t.a.Fragment,null,a&&t.a.createElement("div",{className:"price-row"},t.a.createElement("div",{className:"price-heading"},t.a.createElement(h,null,"Lunch")),t.a.createElement("div",null,s.lunch.map((function(e){return t.a.createElement("span",{key:"".concat(o,"-price-").concat(e)},e,t.a.createElement("br",null))})))),r&&t.a.createElement("div",{className:"price-row"},t.a.createElement("div",{className:"price-heading"},t.a.createElement(h,null,"Dinner")),t.a.createElement("div",null,s.dinner.map((function(e){return t.a.createElement("span",{key:"".concat(o,"-price-").concat(e)},e,t.a.createElement("br",null))}))))),i&&t.a.createElement("p",{className:"menu-price text-align-center"},t.a.createElement("span",null,n,t.a.createElement("br",null))),m?t.a.createElement(N.a,null):null)}),j=r(89),F=r.n(j),M=r(90),x=r.n(M),A=r(91),R=r.n(A);r(136);function O(e){return t.a.createElement("div",{className:"landing-page-wrapper"},t.a.createElement("div",{className:"landing-page-header"},t.a.createElement(p,{white:"true",className:"extra-tall"},"WELCOME"),t.a.createElement(p,{white:"true",className:"tall"},"TO PHIKUL THAI BISTRO"),t.a.createElement(u,{white:"true",className:"tall left"},"Thai Comfort Food at Kansas City's River Market")),t.a.createElement("img",{className:"hero-image",src:F.a,alt:"Phikul Thai Bistro is located  next to the City Market streetcar stop"}),t.a.createElement("div",{className:"row"},t.a.createElement("div",{className:"col-2lg"},t.a.createElement("div",{className:"square-image-wrapper"},t.a.createElement("img",{className:"sub-image",src:x.a,alt:"Phikul Thai Bistro is located  next to the City Market streetcar stop"}))),t.a.createElement("div",{className:"col-2sm about"},t.a.createElement(p,{white:"true",className:"tall"},"About Phikul Thai Bistro"),t.a.createElement(u,{white:"true",className:"normal"},"Given that one of the first things Thais ask each other when they meet up is \"Have you eaten yet?\", it's clear Thailand is a nation that's extremely passionate about its eats. We are excited to show the flavors of both world-famous and worth trying Thai cuisine to the Kansas City's River Market, available for dine-in and pick-up."),t.a.createElement("div",{className:"action-item"},t.a.createElement(c.b,{to:"/menu"},t.a.createElement(u,{className:"normal",link:"true",white:"true"},t.a.createElement(k.a,{className:"link-color",icon:w.c})," ","View Our Menu"))),t.a.createElement("div",{className:"action-item"},t.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/Phikul-Thai-Bistro-Takeout-Menu.pdf"},t.a.createElement(u,{className:"normal",link:"true",white:"true"},t.a.createElement(k.a,{className:"link-color",icon:w.d})," ","Download Our PDF Menu"))))),t.a.createElement("div",{className:"row"},t.a.createElement("div",{className:"col-2sm hours"},t.a.createElement(p,{white:"true",className:"tall"},"Hours"),t.a.createElement(u,{white:"true",className:"normal"},"Tuesday 11 AM-9 PM",t.a.createElement("br",null)," Wednesday 11 AM-9 PM",t.a.createElement("br",null)," Thursday 11 AM-9 PM",t.a.createElement("br",null)," Friday 11 AM-10 PM",t.a.createElement("br",null)," Saturday 11 AM-10 PM",t.a.createElement("br",null)," Sunday 11 AM-8 PM",t.a.createElement("br",null)," Monday Closed",t.a.createElement("br",null),t.a.createElement("br",null),"Seating at Phikul Thai Bistro is available on a walk-in basis only.")),t.a.createElement("div",{className:"col-2lg"},t.a.createElement("div",{className:"square-image-wrapper"},t.a.createElement("img",{className:"sub-image",src:R.a,alt:"Phikul Thai Bistro is located  next to the City Market streetcar stop"})))),t.a.createElement("div",{className:"row"},t.a.createElement("div",{className:"col-2-sm"},t.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.919349585775!2d-94.58428034867876!3d39.108306279438224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f140c24064bb%3A0x2ee8039378a7720f!2sPhikul%20Thai%20Bistro!5e0!3m2!1sen!2sus!4v1600271861803!5m2!1sen!2sus",width:"400",height:"300",frameborder:"0",style:{border:0},allowfullscreen:"","aria-hidden":"false",tabindex:"0"})),t.a.createElement("div",{className:"col-2lg location"},t.a.createElement(p,{white:"true",className:"tall"},"Location"),t.a.createElement(u,{white:"true",className:"normal"},"17 East 5th Street",t.a.createElement("br",null)," Kansas City, MO 64106"),t.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/7tyySYPeNj9Nbcoh9"},t.a.createElement(u,{className:"normal",white:"true",link:"true"},"Get Directions")),t.a.createElement(p,{white:"true",className:"tall"},"Contact Us"),t.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"tel:+1-816-894-3993"},t.a.createElement(u,{className:"normal",white:"true",link:"true"},"Tel. (816) 894-3993")))),t.a.createElement(T,null))}var G=r(28),I=r.n(G),W=(r(137),[{name:"Crab Rangoon (8 Pcs)",description:"Fried wonton wrapped and filled with blend of cream-cheese, imitation crab meat and garlic flavored seasoning served with homemade sweet chili sauce.",image:{path:"https://i.imgur.com/gwLBQAk.jpg",isPortrait:!0},price:{lunch:["$7.99"],dinner:["$7.99"]}},{name:"Chicken Satay (4 Skewers)",description:"Skewers of tender marinated chicken barbecued over charcoal and served with peanut sauce and cucumber dip.",image:{path:"https://i.imgur.com/ntVNPxZ.jpg",isPortrait:!1},price:{lunch:["$8.99"],dinner:["$8.99"]}},{name:"Crispy Sping Roll (3 Pcs)",description:"Deep fried spring rolls stuff with minced chicken or only vegetables, egg, glass noodle and mixed vegetable, served with homemade sweet chili sauce.",image:{path:"https://s3-media3.fl.yelpcdn.com/bphoto/Pwx74lme9XoPeLmuYRFPnQ/o.jpg",isPortrait:!1},price:{lunch:["$7.99"],dinner:["$7.99"]}},{name:"Soft Sping Roll (3 Pcs)",description:"Fresh spring rolls made with chicken or only vegetables, noodles, bean sprouts, and lettuce wrapped in rice paper. Served with sweet chili sauce and crushed roasted peanuts.",image:{path:"https://s3-media3.fl.yelpcdn.com/bphoto/Ji_6x-VqwNoGw46r4U-Sqg/o.jpg",isPortrait:!1},price:{lunch:["$7.99"],dinner:["$7.99"]}},{name:"Baramee Thai Roll (3 Pcs)",description:"Crab meat, cream-cheese, cucumber, green leaf lettuce, bean sprout, and carrot wrapped in rice paper served with sweet chili sauce and crushed roasted peanuts.",image:{path:"https://s3-media1.fl.yelpcdn.com/bphoto/KNdNUOne1Fh5GUvJbiHy8w/o.jpg",isPortrait:!1},price:{lunch:["$8.99"],dinner:["$8.99"]}},{name:"Tiger Cry Beef",description:"Spicy dish of grilled sirloin of beef, thinly sliced and marinated with a hint of garlic, black pepper, garnished with cabbage and served with spicy chili homemade sauce.",image:{path:"https://i.imgur.com/iHMZhUx.jpg",isPortrait:!1},price:{lunch:["$10.99"],dinner:["$10.99"]}},{name:"Crispy Tofu",description:"Delicately fried, and complemented with a homemade chili sauce.",image:{path:"https://s3-media4.fl.yelpcdn.com/bphoto/BWiUC7nLxeUHyXyYX-JuSA/o.jpg",isPortrait:!0},price:{lunch:["$8.99"],dinner:["$8.99"]}},{name:"Golden Calamari",description:"Crispy tempura style calamari with a hint of spices and green onions. Served with sriracha dipping sauce.",image:{path:"https://i.imgur.com/xsySaVc.jpg",isPortrait:!1},price:{lunch:["$10.99"],dinner:["$10.99"]}},{name:"Baramee Thai Wings",description:"Marinated in a spicy garlic sauce with fresh basil. Deep fried to perfection.",image:{path:"https://i.imgur.com/QbF7NGu.jpg",isPortrait:!1},price:{lunch:["$10.99"],dinner:["$10.99"]}},{name:"Spring Roll Deluxe",description:"Two of our soft spring rolls and two of our crispy spring rolls.",image:null,price:{lunch:["$9.99"],dinner:["$9.99"]}},{name:"Baramee Thai Platter",description:"A delicious of Thai mixed appetizers with Crab Rangoon (4 Pcs), Soft Spring Roll (2 Pcs) and Crispy Spring roll (2 Pcs)",image:{path:"https://i.imgur.com/agdjyz3.jpg",isPortrait:!1},price:{lunch:["$11.99"],dinner:["$11.99"]}},{name:"Fresh Shrimp Rolls",description:null,image:null,price:{lunch:["$9.99"],dinner:["$9.99"]}},{name:"Edamame",description:"Lightly salted and steamed soy beans.",image:{path:"https://s3-media1.fl.yelpcdn.com/bphoto/tqero_VtxfKOaGO93MrjtA/o.jpg",isPortrait:!1},price:{lunch:["$6.99"],dinner:["$6.99"]}}]),H=[{name:"Panang Curry",description:"Our most popular curry. Our delicious coconut milk and peanut panang sauce garnished with kaffir lime leaves.",image:{path:"https://i.imgur.com/2w60mPj.jpg",isPortrait:!1},price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $11.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Green Curry",description:"A well know medium hot Thai curry with meat or Tofu, egg plant, cooked in green curry paste and coconut milk, garnished with Thai basil leaves.",price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $11.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Red Curry",description:"A medium hot Thai red curry dish with meat or Tofu and young bamboo shoot and bell pepper cooked in red curry paste and coconut milk, flavored with Thai basil leaves.",image:{path:"https://i.imgur.com/WJJpeg4.jpg",isPortrait:!1},price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $11.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Gang Ka Ree",description:"Yellow curry powder with chunk potatoes, carrots, yellow onion, and topped with dry garlic.",price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $11.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Gang Massaman",description:"Traditional mild curry dish, meat or tofu cooked slowly with potatoes, yellow onions and roasted peanuts.",image:{path:"https://i.imgur.com/PIjij92.jpg",isPortrait:!1},price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $11.99","Beef or Shrimp $15.99","Seafood $19.99"]}}],D=[{name:"Pad Ka Prao (House Favorite)",description:"Stir-fried meat with sweet basil leaves, fresh chili and garlic. Served over rice with a pan fried egg.",image:{path:"https://s3-media2.fl.yelpcdn.com/bphoto/FGHH7p9ZL40ogeMl0vPJbA/o.jpg",isPortrait:!1},price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Thai Cashew Nuts",description:"Meat or Tofu stir-fried with chili oil and roasted cashew nuts, onion, broccoli, fresh carrot and bell peppers.",image:{path:"https://i.imgur.com/hwXPb1Il.jpg",isPortrait:!1},price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Garlic and Pepper",description:" A delicious stir-fried with garlic and ground black pepper, presented in bed of cabbages.",price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Vegetable Fried Rice",description:" Stir-fried rice with egg, and mixed vegetables.",image:{path:"https://i.imgur.com/xjD9dpv.jpg",isPortrait:!1},price:{lunch:[],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Thai Fried Rice",description:"Stir-fried rice with egg, onion, spring onions and your choice of meat.",image:{path:"https://s3-media4.fl.yelpcdn.com/bphoto/QIykuSu7EGpwGtbhkgE1eQ/o.jpg",isPortrait:!1},price:{lunch:[],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Basil Fried Rice",description:" Stir-fried rice with egg, onion, spring onions, basil and your choice of meats.",price:{lunch:[],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Crab Fried Rice",description:"Stir-fried rice with crab meat, egg, onion and spring onions.",price:{lunch:[],dinner:["$15.99"]}},{name:"Yellow Curry Fried Rice",description:"Traditional fried rice with onions, cabbage, napa and scallions and the addition of a wonderful yellow curry flavor.",price:{lunch:[],dinner:["$15.99","Seafood $19.99"]}},{name:"Pineapple Fried Rice",description:"Fried rice with shrimp, egg and pineapple combined with cashew nuts and raisins.",price:{lunch:[],dinner:["$15.99","Seafood $19.99"]}},{name:"Green Bean Chicken",description:"Saut\xe9ed with green beans in a spicy curry sauce.",price:{lunch:[],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Fried Rice Seafood",description:"Our signature fried rice made with jumbo shrimp, scallops, imatation crab meat and squid.",price:{lunch:[],dinner:["$19.99"]}},{name:"Crispy Garlic Shrimp",description:"Jumbo shrimp flash fried and then saut\xe9ed in our delicious garlic sauce. Served over a bed of steamed vegetables.",image:{path:"https://i.imgur.com/Qsq3xhal.jpg",isPortrait:!0},price:{lunch:[],dinner:["$19.99"]}},{name:"Pad Pak Rom",description:"Stir-fried mixed vegetable with homemade garlic brown sauce.",image:{path:"https://s3-media1.fl.yelpcdn.com/bphoto/EfvXh4yo48pXRLVh-W4o2w/o.jpg",isPortrait:!0},price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Pad Khing",description:"Meat or Tofu Stir fried with fresh ginger root, chinese mushroom, onion, scallion and bell pepper.",image:{path:"https://s3-media1.fl.yelpcdn.com/bphoto/1aXmOe2NSVJQLIFa9aA3kQ/o.jpg",isPortrait:!1},price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Pad Pong Karee Rom",description:"Combination of seafood (Prawn, Scallop, Squid, Imatation Crab Meat) stir-fried with yellow curry powder, egg, onion, celery, bell pepper, spring onion and napa.",price:{lunch:[],dinner:["$19.99"]}}],_=[{name:"Thai Noodle Soup",description:"Rice noodles and vegetables in a savory broth.",image:{path:"https://s3-media3.fl.yelpcdn.com/bphoto/0hqoBjSi112Wz52MsHGixw/o.jpg",isPortrait:!0},price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $12.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Tom Yum Soup",description:"A signature Thai soup of straw mushrooms, fresh chilies, kaffir leaves, lemongrass, galangal, and a splash of lime juice. Served in a spicy broth and topped with a hint of cilantro and spring onions.",image:{path:"https://i.imgur.com/VggK9rA.jpg",isPortrait:!1},price:{lunch:["Bowl:","Chicken, Pork, or Tofu $8.99","Beef or Shrimp $10.99","Seafood $15.99","Pot:","Chicken, Pork, or Tofu $12.99","Beef or Shrimp $15.99","Seafood $19.99"],dinner:["Bowl:","Chicken, Pork, or Tofu $8.99","Beef or Shrimp $10.99","Seafood $15.99","Pot:","Chicken, Pork, or Tofu $12.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Tom Kha Soup",description:"A rich coconut milk broth flavored with lemongrass, kaffir leaves, fresh chilies, galangal, and sprinkled with cilantro and spring onions.",image:{path:"https://s3-media4.fl.yelpcdn.com/bphoto/h_VfDgWxIZbV0IXvsBEnXQ/o.jpg",isPortrait:!1},price:{lunch:["Bowl:","Chicken, Pork, or Tofu $8.99","Beef or Shrimp $10.99","Seafood $15.99","Pot:","Chicken, Pork, or Tofu $12.99","Beef or Shrimp $15.99","Seafood $19.99"],dinner:["Bowl:","Chicken, Pork, or Tofu $8.99","Beef or Shrimp $10.99","Seafood $15.99","Pot:","Chicken, Pork, or Tofu $12.99","Beef or Shrimp $15.99","Seafood $19.99"]}}],L=[{name:"Papaya Salad",description:"Freshly shredded papaya complemented by tomatoes, garlic, chilies and roasted peanuts. Made in a tangy fish sauce or vegetarian sweet sauce. Served with sticky rice.",image:{path:"https://i.imgur.com/95HBgrZ.jpg",isPortrait:!1},price:{lunch:["$12.99"],dinner:["$12.99"]}},{name:"Cucumber Salad",description:"Freshly Shredded Cucumber complemented by tomatos, garlic, chillies and roasted peanuts. Made in a tangy fish sauce or vegetarian sweet sauce. Served with sticky rice.",image:null,price:{lunch:["$12.99"],dinner:["$12.99"]}},{name:"Labb Salad",description:"Traditional north eastern dish of finely chopped chicken, pork or beef mixed together with ground roasted rice, coriander and chili.",image:{path:"https://i.imgur.com/s6CZ1lM.jpg",isPortrait:!1},price:{lunch:["Chicken, Pork, or Tofu $10.99","Beef or Shrimp $15.99","Seafood $19.99"],dinner:["Chicken, Pork, or Tofu $12.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Yum Woon Sen",description:"A traditional spicy Thai salad where the meat or Tofu are first cooked then tossed together with glass noodles, shallots, tomatoes, celery and cilantro.",image:{path:"https://i.imgur.com/XRG0wjbl.jpg",isPortrait:!1},price:{lunch:[],dinner:["Chicken, Pork, or Tofu $11.99","Beef or Shrimp $15.99","Seafood $19.99"]}}],K=[{name:"Pad Thai (House Favorite)",description:"Famous rice noodle dish stir-fried with meat or tofu, egg, bean sprouts, spring onion and cabbages with added tamarind sauce for a tangy after taste. Served with ground peanuts.",image:{path:"https://i.imgur.com/BWmpC9C.jpg",isPortrait:!0},price:{lunch:["Chicken, Pork, or Tofu $12.99","Beef or Shrimp $13.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Pad Sew Eaew",description:"Stir-fried flat noodles in dark, rich and sweet soy sauce with broccoli and Gai lan.",image:{path:"https://s3-media2.fl.yelpcdn.com/bphoto/kZGaVheivp0Aea4H8U1UFw/o.jpg",isPortrait:!0},price:{lunch:["Chicken, Pork, or Tofu $12.99","Beef or Shrimp $13.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Pad Key Maw",description:"A spicy noodle dish, stir-fried flat noodles with fresh chili, garlic, bell pepper, and basil leaves.",image:{path:"https://s3-media1.fl.yelpcdn.com/bphoto/AxXIauad_2G8STN0Dir0Ag/o.jpg",isPortrait:!1},price:{lunch:["Chicken, Pork, or Tofu $12.99","Beef or Shrimp $13.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Pad Woon Sen",description:"Stir-fried glass noodle with meats or tofu, bean sprouts, spring onion and cabbage.",image:{path:"https://s3-media3.fl.yelpcdn.com/bphoto/7qrGRuBYl1JP-lb6vVmWMw/o.jpg",isPortrait:!1},price:{lunch:["Chicken, Pork, or Tofu $12.99","Beef or Shrimp $13.99","Seafood $15.99"],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Rad Na Talay (House Favorite)",description:"Wide rice noodles with vegetables and your choice of protein, stir-fried in a dark soy sauce and covered with a thick, savory sauce. A favorite lunch item in Thailand.",image:{path:"https://i.imgur.com/s3Av7vDl.jpg",isPortrait:!1},price:{lunch:["$19.99"],dinner:["$19.99"]}}],V=[{name:"Sweet Mango Sticky Rice",description:"Mango sticky rice is a traditional Thai dessert made with glutinous rice, sweet mango and coconut milk.",image:{path:"https://i.imgur.com/lGZgLXfl.jpg",isPortrait:!1},price:{lunch:["$8.00"],dinner:["$8.00"]}},{name:"Coconut Ice Cream",description:null,price:{lunch:["$5.00"],dinner:["$5.00"]}},{name:"Mango Ice Cream",description:null,price:{lunch:["$5.00"],dinner:["$5.00"]}},{name:"Taro Ice Cream",description:null,image:{path:"https://s3-media2.fl.yelpcdn.com/bphoto/ldh9i3L2lOA9agp35V9Dlw/o.jpg",isPortrait:!1},price:{lunch:["$5.00"],dinner:["$5.00"]}},{name:"Fried Banana with Ice Cream",description:null,price:{lunch:["$6.00"],dinner:["$6.00"]}}],X=[{name:"Bubble Drinks",description:null,image:{path:"https://s3-media2.fl.yelpcdn.com/bphoto/Bx7ObqljtFXWnnE8I3T_-g/o.jpg",isPortrait:!0},price:{lunch:["$4.25"],dinner:["$4.25"]}},{name:"Thai Iced Tea / Thai Iced Coffee",description:null,image:{path:"https://s3-media4.fl.yelpcdn.com/bphoto/j-_yGtrE1cBH260pxGD3rA/o.jpg",isPortrait:!0},price:{lunch:["$4.00"],dinner:["$4.00"]}},{name:"Hot Tea / Iced Tea",description:null,price:{lunch:["$2.99"],dinner:["$2.99"]}},{name:"Hot Coffee",description:null,price:{lunch:["$2.99"],dinner:["$2.99"]}},{name:"Coke Products Fountain Drinks",description:null,price:{lunch:["$2.99"],dinner:["$2.99"]}}],J=[{name:"Pad Ka Prao",description:"Stir-fried meat with sweet basil leaves, fresh chili and garlic. Served over rice with a pan fried egg.",image:{path:"https://s3-media2.fl.yelpcdn.com/bphoto/FGHH7p9ZL40ogeMl0vPJbA/o.jpg",isPortrait:!1},price:{lunch:[],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Labb Isaan",description:"Traditional north eastern dish of finely chopped chicken, pork or beef mixed together with ground roasted rice, coriander and chili.",image:{path:"https://i.imgur.com/s6CZ1lM.jpg",isPortrait:!1},price:{lunch:[],dinner:["Chicken, Pork, or Tofu $12.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Cucumber Salad",description:"Freshly Shredded Cucumber complemented by tomatos, garlic, chillies and roasted peanuts. Made in a tangy fish sauce or vegetarian sweet sauce. Served with sticky rice.",price:{lunch:[],dinner:["$12.99"]}},{name:"Papaya Salad",description:"Freshly shredded papaya complemented by tomatoes, garlic, chilies and roasted peanuts. Made in a tangy fish sauce or vegetarian sweet sauce. Served with sticky rice.",image:{path:"https://i.imgur.com/95HBgrZ.jpg",isPortrait:!1},price:{lunch:[],dinner:["$12.99"]}},{name:"Pad Thai",description:"Famous rice noodle dish stir-fried with meat or tofu, egg, bean sprouts, spring onion and cabbages with added tamarind sauce for a tangy after taste. Served with ground peanuts.",image:{path:"https://i.imgur.com/BWmpC9C.jpg",isPortrait:!0},price:{lunch:[],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Panang Curry",description:"Our most popular curry. Our delicious coconut milk and peanut panang sauce garnished with kaffir lime leaves.",image:{path:"https://i.imgur.com/2w60mPj.jpg",isPortrait:!1},price:{lunch:[],dinner:["Chicken, Pork, or Tofu $13.99","Beef or Shrimp $15.99","Seafood $19.99"]}},{name:"Mali Thai Catfish",description:"Two crispy catfish fillets served over a bed of steamed vegetables and covered in your choice of one of our three signature sauces - Sweet and spicy Sam Rod sauces, Thai basil sauce, or our stir-fried Red Curry sauce.",price:{lunch:[],dinner:["$19.99"]}},{name:"Rad Na Talay",description:"Wide rice noodles with vegetables and your choice of protein, stir-fried in a dark soy sauce and covered with a thick, savory sauce. A favorite lunch item in Thailand.",image:{path:"https://i.imgur.com/s3Av7vDl.jpg",isPortrait:!1},price:{lunch:[],dinner:["$19.99"]}}];function q(e){return!(window.innerWidth>620),t.a.createElement("div",{className:"menu-page-wrapper"},t.a.createElement("div",{className:"menu-page-header"},t.a.createElement(p,{white:"true",className:"extra-tall"},"Menu"),t.a.createElement(u,{white:"true",className:"normal"},"Our flavorful fried rice dishes, stir-frys, noodles and curries are available in mild ",t.a.createElement(k.a,{icon:w.f})," , medium"," ",t.a.createElement(k.a,{icon:w.f}),t.a.createElement(k.a,{icon:w.f})," , hot"," ",t.a.createElement(k.a,{icon:w.f}),t.a.createElement(k.a,{icon:w.f}),t.a.createElement(k.a,{icon:w.f})," , and Thai hot"," ",t.a.createElement(k.a,{icon:w.f}),t.a.createElement(k.a,{icon:w.f}),t.a.createElement(k.a,{icon:w.f}),t.a.createElement(k.a,{icon:w.f}),"."),t.a.createElement("div",{className:"download"},t.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/Phikul-Thai-Bistro-Takeout-Menu.pdf"},t.a.createElement(u,{className:"normal",link:"true",white:"true"},t.a.createElement(k.a,{className:"link-color",icon:w.d})," ","Download Our PDF Menu")))),t.a.createElement("div",{className:"row"},t.a.createElement("div",{className:"col-3"},t.a.createElement("div",{className:"menu-card"},t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a}),t.a.createElement("div",{className:"menu-category"},t.a.createElement(u,{className:"medium"},"Appetizers"),W.map((function(e){return t.a.createElement(B,{key:e.name,name:e.name,description:e.description,price:e.price,desktop:!0})}))),t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a}),t.a.createElement("div",{className:"menu-category"},t.a.createElement(u,{className:"medium"},"House Favorites"),J.map((function(e){return t.a.createElement(B,{key:e.name,name:e.name,description:e.description,price:e.price,desktop:!0})}))),t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a}))),t.a.createElement("div",{className:"col-3"},t.a.createElement("div",{className:"menu-card"},t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a}),t.a.createElement("div",{className:"menu-category"},t.a.createElement(u,{className:"medium"},"From The Wok"),D.map((function(e){return t.a.createElement(B,{key:e.name,name:e.name,description:e.description,price:e.price,desktop:!0})}))),t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a}),t.a.createElement("div",{className:"menu-category"},t.a.createElement(u,{className:"medium"},"Noodles"),K.map((function(e){return t.a.createElement(B,{key:e.name,name:e.name,description:e.description,price:e.price,desktop:!0})}))),t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a}))),t.a.createElement("div",{className:"col-3"},t.a.createElement("div",{className:"menu-card"},t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a}),t.a.createElement("div",{className:"menu-category"},t.a.createElement(u,{className:"medium"},"Soups and Salads"),_.map((function(e){return t.a.createElement(B,{key:e.name,name:e.name,description:e.description,price:e.price,desktop:!0})})),L.map((function(e){return t.a.createElement(B,{key:e.name,name:e.name,description:e.description,price:e.price,desktop:!0})}))),t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a}),t.a.createElement("div",{className:"menu-category"},t.a.createElement(u,{className:"medium"},"Curries"),H.map((function(e){return t.a.createElement(B,{key:e.name,name:e.name,description:e.description,price:e.price,desktop:!0})}))),t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a}),t.a.createElement("div",{className:"menu-category"},t.a.createElement(u,{className:"medium"},"Desserts and Drinks"),V.map((function(e){return t.a.createElement(B,{key:e.name,name:e.name,description:e.description,price:e.price,desktop:!0})})),X.map((function(e){return t.a.createElement(B,{key:e.name,name:e.name,description:e.description,price:e.price,desktop:!0})}))),t.a.createElement("img",{className:"phikul-icon",alt:"Phikul Thai Flower",src:I.a})))),t.a.createElement(T,null))}function Z(e){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"notfound-page"},"NotFound Page"))}function U(e){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"menu-page"},"OurStory Page"))}function Q(e){return t.a.createElement(t.a.Fragment,null,t.a.createElement(v,null),t.a.createElement(l.d,null,t.a.createElement(l.b,{exact:!0,path:"/",component:O}),t.a.createElement(l.b,{path:"/menu",component:q}),t.a.createElement(l.b,{path:"/ourstory",component:U}),t.a.createElement(l.b,{path:"/404",component:Z}),t.a.createElement(l.a,{from:"*",to:"/404"})))}var Y=function(){return t.a.createElement(c.a,null,t.a.createElement(l.d,null,t.a.createElement(l.b,{path:"/",component:Q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,a,r){e.exports=r.p+"static/media/phikul_icon.4f88cbf5.png"},62:function(e,a,r){},87:function(e,a,r){e.exports=r.p+"static/media/phikulthaibistro_logo.172713a5.png"},89:function(e,a,r){e.exports=r.p+"static/media/hero_phikulthai_1.5dc10a80.jpg"},90:function(e,a,r){e.exports=r.p+"static/media/hero_phikulthai_2.4106ab79.jpg"},91:function(e,a,r){e.exports=r.p+"static/media/hero_phikulthai_mobile_1.82235a85.jpg"},94:function(e,a,r){e.exports=r(138)},99:function(e,a,r){}},[[94,1,2]]]);
//# sourceMappingURL=main.26229f5b.chunk.js.map