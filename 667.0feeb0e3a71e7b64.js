"use strict";(self.webpackChunkvalor_software_site=self.webpackChunkvalor_software_site||[]).push([[667],{2667:(k,d,a)=>{a.r(d),a.d(d,{LibertyFlightsPageComponent:()=>c,LibertyFlightsPageModule:()=>F});var s=a(4755),l=a(8879),e=a(2657),h=a(8655),p=a(9331),u=a(7239),f=a(6674),b=a(5766),r=a(2670);function y(t,n){if(1&t&&(e.ynx(0),e._UZ(1,"breadCrumbs",43),e.BQk()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("changeTitle",o.changeBreadCrumbTitle)}}function w(t,n){if(1&t&&(e.TgZ(0,"div",45),e._UZ(1,"img",46),e.qZA()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("src",o,e.LSH)}}function v(t,n){1&t&&e.YNc(0,w,2,1,"ng-template",44)}function x(t,n){if(1&t&&(e.TgZ(0,"div",45),e._UZ(1,"img",46),e.qZA()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("src",o,e.LSH)}}function _(t,n){1&t&&e.YNc(0,x,2,1,"ng-template",44)}function Z(t,n){1&t&&e._UZ(0,"div",52)}function T(t,n){if(1&t&&(e.TgZ(0,"div")(1,"div",47)(2,"div",48)(3,"p",49),e._uU(4),e.qZA(),e.TgZ(5,"p",50),e._uU(6),e.qZA()(),e.YNc(7,Z,1,0,"div",51),e.qZA()()),2&t){const o=n.$implicit,i=n.index,g=e.oxw();e.xp6(4),e.hij(" ",i+1,""),e.xp6(2),e.hij(" ",o," "),e.xp6(1),e.Q6J("ngIf",i!==g.seoOptimizationList.length-1)}}function A(t,n){1&t&&e._UZ(0,"div",59)}function L(t,n){if(1&t&&(e.TgZ(0,"div")(1,"div",53)(2,"div",47)(3,"p",54),e._uU(4),e.qZA(),e.YNc(5,A,1,0,"div",55),e.qZA(),e.TgZ(6,"div",56)(7,"p",57),e._uU(8),e.qZA(),e.TgZ(9,"p",58),e._uU(10),e.qZA()()()()),2&t){const o=n.$implicit,i=n.index,g=e.oxw();e.xp6(4),e.hij(" ",i+1,""),e.xp6(1),e.Q6J("ngIf",i!==g.deliveredFeatureList.length-1),e.xp6(3),e.hij(" ",o.title," "),e.xp6(2),e.Oqu(o.description)}}l.ZP.use([l.tl,l.pt]);let c=(()=>{class t{constructor(){this.changeBreadCrumbTitle=[{path:"projects",title:"Portfolio"},{path:"liberty-flights",title:"Liberty Flights"}],this.seoStyleImages=["assets/img/bg-img/liberty_flights_page/seo_friendly/1.png","assets/img/bg-img/liberty_flights_page/seo_friendly/2.png","assets/img/bg-img/liberty_flights_page/seo_friendly/3.png"],this.mobileImages=["assets/img/bg-img/liberty_flights_page/seo_friendly/4.png","assets/img/bg-img/liberty_flights_page/seo_friendly/5.png"],this.seoOptimizationList=["On-page audit","Optimizing conversions using Hotjar and Google Analytics tools","Keyword research","Crowd marketing campaign creation","PBN link-building campaign creation","Disavowed lots of toxic backlinks","Resolved critical indexation issues"],this.seoOptimizationImpactList=[["Improved conversion rates"],["Keywords, titles, meta desc optimized"],["Fixed indexation and eliminated toxic backlinks"]],this.balancerToGCPImpactList=[["The cost for servers usage decreased from around 100$ a month to 10$"],["Stable website performance through peak loads"]],this.deliveredFeaturesImpactList=[["Eased checkout for customers, minimized abandoned carts, and maximized conversions with new payment methods"],["Higher customers engagement and sales rates with a Multibuy option and special wholesale deals"],["Increased marketing reach, optimized sales cycle, and more loyal customers with a Referral program"]],this.deliveredFeatureList=[{title:"Added GBG ID Scan",description:"this service identifies passport or ID data and verifies user age before enabling the purchase."},{title:"Multi-buy",description:"Enabled the Multi-buy option that supports different prices for goods depending on their amount in the shopping cart."},{title:"Advanced Order Flow",description:"Advanced order flow which now supports retail and wholesale deals with a separate validation for wholesale orders \u2013 customers can buy more than available in stock."},{title:"Push Notifications",description:"Also added Push notifications to share the latest news and arrivals on Liberty Flights with pop-ups."},{title:"Referral Program",description:"Presented the Referral program for retail customers with the ability to send the referral link with a promo code for a discount to a friend or share the link on social networks."},{title:"New Payment Systems",description:"Finally, we integrated two payment systems: Axxess Payments and HSBC. The latter is the second-largest bank in Europe, and in the future, this integration will enable quick payments for the products through almost all UK banks."}],this.migrationChallenge={challenge:{title:"The Challenge",description:["We dealt with a codebase written differently from the Valor's standards, which made the migration more complicated. \n                 Another obstacle we faced was that the frontend part aimed to work inside the browser, which is typical for Angular. This influenced the work accuracy and negatively affected SEO. Since the web page content varied based on the results of work in the browser instead of coming directly from the server, we couldn\u2019t display the requested info in the search results.\n                Due to updates in Angular 10, a whole lot of issues arose during the deployment process. But the worst part was the necessity to turn off the production site during the deployment for maintenance. Sometimes it led to nearly an hour of downtime, which was unacceptable."]},solution:{title:"Solution:",description:["Adding Angular Universal for server-side rendering (SSR) helped us solve the SEO challenge as the pages started loading fully and displayed correct search engine results. Later, once it became available, we switched to Scully instead of SSR. Scully allowed us to completely rework the build and deployment processes and eliminated the need to use the maintenance page before deploying to the app (especially when it comes to the deployment of features on the frontend)."]},footer:{title:"Impact",list:["Improved SEO in Angular using Scully","Streamlined build process and decreased deployment time","Eliminated an hour-long downtime of the production website"]}},this.technologiesCards=[{title:"Frontend",smJustify:"between",lgJustify:"between",technologies:[{src:"assets/img/technologies/active/angular.png",title:"Angular 12"},{src:"assets/img/technologies/active/ngrx.png",title:"NgRx"},{src:"assets/img/technologies/others/scully.png",title:"Scully"}]},{title:"Backend",smJustify:"between",lgJustify:"between",technologies:[{src:"assets/img/technologies/others/node_js.png",title:"Node.js"},{src:"assets/img/technologies/active/nest_js.png",title:"Nest.js",wrapText:!0},{src:"assets/img/technologies/others/type_script.png",title:"Typescript"}]}],this.swiperConfig={slidesPerView:1,spaceBetween:40,centeredSlides:!0,initialSlide:0,slideToClickedSlide:!0,pagination:{clickable:!0},speed:800,autoplay:{delay:3e3}},this.seoImpactList=[["At least 20% lower bounce rates thanks to the upgraded UI","and the availability of the mobile version of the website"],["The page view rates increased by 40%"],["Improved SEO metrics thanks to the SEO-friendly website design"]]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["liberty-flights-page"]],decls:88,vars:13,consts:[[1,"first-section","landing-section","pb-0","mx-5","lg:mx-0"],[1,"flex-column","lg:flex","justify-center","lg:justify-between","items-center","mb-18","pt-16","lg:pt-0",2,"max-height","100%"],[1,"lg:w-4/12","lg:mx-auto","md:mt-0","mb-18"],[4,"ngIf"],[1,"text-light_title_col","lg:text-64","text-40","lg:leading-66","leading-44","mb-10","lg:mb-12","font-bold"],[1,"leading-6","text-grey_font_col","text-16","mb-10"],[1,"flex-column","lg:flex","justify-start","items-center"],[1,"w-full","lg:w-auto","flex","lg:mr-6","mb-4","w-full"],["href","https://www.liberty-flights.co.uk/","target","_blank",1,"btn-pink","w-full","flex","justify-center","items-center"],["src","assets/img/icons/arrow.svg","alt","",1,"ml-2","-rotate-45","mb-2"],[1,"hidden","lg:block"],["src","assets/img/portfolio/liberty_header.png","alt","",1,"max-w-678"],[1,"block","lg:hidden","m-auto"],["src","assets/img/portfolio/liberty_header_resp.png","alt","",1,"m-auto"],[1,"main-title","lg:mb-10"],[1,"container"],[1,"flex","lg:flex-row","flex-col","justify-between","lg:gap-24","gap-8","mt-10","mb-10"],[1,"m-auto"],[1,"leading-6","text-grey_font_col","text-16","mb-8"],[1,"leading-6","text-grey_font_col","text-16"],["src","assets/img/bg-img/liberty_flights_page/background_bg.png","alt","liberty_flights_background",1,"lg:w-5/12","m-auto"],[1,"mt-1"],[1,"text-light_title_col","text-left","text-32","lg:text-40","font-bold","mb-6"],[3,"technologiesCards"],[1,"md:-ml-8","lg:-ml-10","mt-2","green-circle"],[1,"lg:w-8/12","lg:mb-10","mb-8"],[1,"text-light_title_col","text-left","lg:m-l0","ml-5","text-32","lg:text-40","font-bold","mb-4"],[1,"text-grey_font_col","text-left","text-16","tracking-tightest"],[1,"pink_swiper","mb-16",3,"config"],[4,"ngFor","ngForOf"],[1,"text-grey_font_col","text-left","text-16"],[1,"mb-16"],[3,"impactCardList"],[1,"lg:w-8/12","lg:mb-16","mb-8"],[1,"text-light_title_col","text-left","text-32","lg:ml-0","ml-5","lg:text-40","font-bold","mb-4"],[3,"challengeCard"],[1,"lg:w-8/12","mb-8","mb-8"],[1,"my-8"],[1,"lg:w-65%","mb-8","mb-8"],[1,"text-grey_font_col","text-left","text-16","mb-8"],[1,"mb-10","md:mb-12"],[1,"text-grey_font_col","text-left","text-16","mb-8","tracking-tightest"],[1,"px-5","lg:px-0"],[1,"w-full","hidden","lg:block","lg:mb-24",3,"changeTitle"],["swiperSlide",""],[1,"h-full","w-full","m-auto"],["alt","SEO-friendly",1,"m-auto","w-full",3,"src"],[1,"flex","flex-col"],[1,"flex","flex-row","gap-6"],[1,"text-12","text-large","text-green","font-bold"],[1,"text-light_title_col","text-left","text-xl","font-bold","ml-2","my-auto"],["class","ml-2 bg-green h-6 w-0.5",4,"ngIf"],[1,"ml-2","bg-green","h-6","w-0.5"],[1,"flex","flex-row","h-full"],[1,"m-auto","text-12","text-large","text-green","font-bold","-mt-3"],["class","m-auto bg-green h-full w-0.5 mb-4",4,"ngIf"],[1,"flex","flex-col","max-w-fit","ml-8","text-light_title_col"],[1,"font-bold","lg:max-w-400","leading-6","md:leading-8","mb-4","text-24","md:text-32"],[1,"text-grey_font_col","mb-8","mr-8","tracking-tightest"],[1,"m-auto","bg-green","h-full","w-0.5","mb-4"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e.YNc(3,y,2,1,"ng-container",3),e.TgZ(4,"h1",4),e._uU(5," Liberty Flights "),e.qZA(),e.TgZ(6,"p",5),e._uU(7," An online store of UK made premium vaping devices and kits. "),e.qZA(),e.TgZ(8,"div",6)(9,"button",7)(10,"a",8),e._uU(11,"Visit the site "),e._UZ(12,"img",9),e.qZA()()()(),e.TgZ(13,"div",10),e._UZ(14,"img",11),e.qZA(),e.TgZ(15,"div",12),e._UZ(16,"img",13),e.qZA()()(),e.TgZ(17,"section")(18,"h1",14),e._uU(19,"Background"),e.qZA(),e.TgZ(20,"div",15)(21,"div",16)(22,"div",17)(23,"p",18),e._uU(24," Liberty Flights is a leading specialist in the vape industry, established in 2009. They specialize in the UK-made premium E-Liquid and quality vaping devices and are recognized as one of the highest quality manufacturers and suppliers of vape liquids and electronic cigarettes by customers across the globe. "),e.qZA(),e.TgZ(25,"p",19),e._uU(26," When we started working with Liberty Flights, the client had been looking for ways to expand. Anticipating the need for convenient scaling and maintenance of the website, our first move was to migrate the platform from ASP.NET to Nest.js. Later we had great success in increasing the page view rates by at least 40% and decreasing bounce rates as we tuned SEO score and the platform usability. "),e.qZA()(),e._UZ(27,"img",20),e.qZA(),e.TgZ(28,"div",21)(29,"h2",22),e._uU(30," Technologies & services:"),e.qZA(),e._UZ(31,"technologies-card",23),e.qZA()()(),e.TgZ(32,"section")(33,"h1",14),e._uU(34,"Deliverables"),e.qZA(),e.TgZ(35,"div",15),e._UZ(36,"div",24),e.TgZ(37,"div",25)(38,"h2",26),e._uU(39," A new SEO-friendly design and a mobile version released "),e.qZA(),e.TgZ(40,"p",27),e._uU(41," Initially the client wanted to redesign the banners on the website, but having analyzed the website design in detail, we came to a conclusion that a complete renewal is the way to go. Valor suggested a new color scheme, new fonts, product cards, and users' profiles, and then adopted banners to the new style. "),e.qZA()(),e.TgZ(42,"swiper",28),e.YNc(43,v,1,0,null,29),e.qZA(),e.TgZ(44,"div",25)(45,"p",30),e._uU(46," While redesigning the platform, we also analyzed user data from Google Analytics and noticed that most of Liberty Flights\u2019 clients visit the website using mobile devices. So we developed a mobile version of the platform. "),e.qZA()(),e.TgZ(47,"swiper",28),e.YNc(48,_,1,0,null,29),e.qZA(),e.TgZ(49,"div",31),e._UZ(50,"impact-card",32),e.qZA(),e._UZ(51,"div",24),e.TgZ(52,"div",33)(53,"h2",34),e._uU(54," Migrated the site from ASP.NET to Angular & Nest.js "),e.qZA(),e.TgZ(55,"p",30),e._uU(56," To simplify the future work with the website and reduce development time, maintenance effort, and bugs, we moved Liberty Flights to Nest.js. The framework has a diverse ecosystem with plenty of well-supported packages and test frameworks the project can benefit from. Even though we had huge reasons for this migration, it also became one of the biggest challenges for the Valor team. "),e.qZA()(),e._UZ(57,"challenge-card",35)(58,"div",24),e.TgZ(59,"div",36)(60,"h2",34),e._uU(61," SEO optimization "),e.qZA(),e.TgZ(62,"p",30),e._uU(63," To improve the visibility and searchability of Liberty Flights, we\u2019ve optimized the on-site content and created crowd marketing campaigns to increase the conversion rates. In a nutshell, the following activities helped users to find out about LF and start using the service: "),e.qZA()(),e.YNc(64,T,8,3,"div",29),e.TgZ(65,"div",37),e._UZ(66,"impact-card",32),e.qZA(),e._UZ(67,"div",24),e.TgZ(68,"div",38)(69,"h2",34),e._uU(70," Switched from Load Balancer to GCP "),e.qZA(),e.TgZ(71,"p",39),e._uU(72," Since the website traffic depends on numerous factors like the day of the week, time, etc., the traffic rates aren\u2019t stable, and peak loads wave-likely vary. We had to ensure the LF platform could perform stably during the peak loads while remaining cost-effective for our client. "),e.qZA(),e.TgZ(73,"p",30),e._uU(74," Having analyzed user and peak loads, we moved servers to Google Cloud Platform (GCP), which helps Liberty Flights balance the number of nodes used depending on the number of users. When they have users\u2019 growth, extra nodes roll out on GCP automatically. "),e.qZA()(),e.TgZ(75,"div",40),e._UZ(76,"impact-card",32),e.qZA(),e._UZ(77,"div",24),e.TgZ(78,"div",38)(79,"h2",34),e._uU(80," Delivered numerous features to improve usability "),e.qZA(),e.TgZ(81,"p",41),e._uU(82," Valor Software has added some new functionality that improved the user experience with the platform and simplified the purchase flow. "),e.qZA(),e.TgZ(83,"div",42),e.YNc(84,L,11,4,"div",29),e.qZA()(),e.TgZ(85,"div",40),e._UZ(86,"impact-card",32),e.qZA()()(),e._UZ(87,"next-project")),2&o&&(e.xp6(3),e.Q6J("ngIf",null==i.changeBreadCrumbTitle?null:i.changeBreadCrumbTitle.length),e.xp6(28),e.Q6J("technologiesCards",i.technologiesCards),e.xp6(11),e.Q6J("config",i.swiperConfig),e.xp6(1),e.Q6J("ngForOf",i.seoStyleImages),e.xp6(4),e.Q6J("config",i.swiperConfig),e.xp6(1),e.Q6J("ngForOf",i.mobileImages),e.xp6(2),e.Q6J("impactCardList",i.seoImpactList),e.xp6(7),e.Q6J("challengeCard",i.migrationChallenge),e.xp6(7),e.Q6J("ngForOf",i.seoOptimizationList),e.xp6(2),e.Q6J("impactCardList",i.seoOptimizationImpactList),e.xp6(10),e.Q6J("impactCardList",i.balancerToGCPImpactList),e.xp6(8),e.Q6J("ngForOf",i.deliveredFeatureList),e.xp6(2),e.Q6J("impactCardList",i.deliveredFeaturesImpactList))},dependencies:[s.sg,s.O5,h.t,p.T,u.P,f.r,b.T,r.nF,r.YC],encapsulation:2}),t})();const m=[{path:"",component:c}];var C=a(9658),U=a(5568);let F=(()=>{class t{}return t.routes=m,t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,C.Bz.forChild(m),U.c4,r.kz]}),t})()}}]);