import{_ as h,o as a,c as i,t as f,n as b,x,r as _,i as T,y as k,F as w,z as P,l as u,k as d,a as y,A as q,b as C,B as A}from"./entry.230bb997.js";import{u as S}from"./useMeta.7b6e4dee.js";const H={__name:"Item",props:{text:{type:String,required:!0},value:{type:String,required:!0},isActive:{type:Boolean,required:!1,default:!1}},emits:["select"],setup(e,{emit:r}){const t=e,o=()=>r("select",t.value);return(n,s)=>(a(),i("div",{class:b(["tab-item",{active:e.isActive}]),onClick:o},f(e.text),3))}},$=h(H,[["__scopeId","data-v-951f4249"]]);const B={class:"tab-switch-container"},G={__name:"index",props:{tabs:{type:Array,required:!0}},emits:["change"],setup(e,{emit:r}){const t=e,o=x(),n=_(null),s=l=>n.value=l;return T(n,()=>r("change",n.value)),k(()=>{n.value=o.query.tab?o.query.tab:t.tabs[0].value}),(l,c)=>{const m=$;return a(),i("div",B,[(a(!0),i(w,null,P(e.tabs,({text:v,value:p},g)=>(a(),u(m,{text:v,value:p,"is-active":d(n)===p,key:g,onSelect:s},null,8,["text","value","is-active"]))),128))])}}},I=h(G,[["__scopeId","data-v-cdad4217"]]);const N=["innerHTML"],W={__name:"ExpansionPanel",props:{question:{type:String,required:!0},answer:{type:String,required:!0},isActive:{type:Boolean,required:!1,default:!1}},emits:["change"],setup(e,{emit:r}){const t=()=>r("change");return(o,n)=>(a(),i("div",{class:b(["expansion-panel",{"is-active":e.isActive}])},[y("strong",{class:"question",onClick:t},f(e.question),1),y("div",{innerHTML:e.isActive?e.answer:"",class:"answer"},null,8,N)],2))}},j=h(W,[["__scopeId","data-v-a15c6208"]]),L=`<html lang="en">\r
<body>\r
    <p>\r
        Pokémon are creatures of all shapes and sizes who live in the wild or alongside their human partners.\r
    </p>\r
</body>\r
</html>`,F=`<html lang="en">\r
<body>\r
    <p>\r
        A Pokédex is designed to catalogue and provide information about the various species of Pokémon as you encounter them.\r
    </p>\r
</body>\r
</html>\r
`,D=`<html lang="en">\r
<head>\r
    <style>\r
        .text-container {\r
            display: flex;\r
            flex-direction: column;\r
            row-gap: 20px;\r
        }\r
\r
        .container {\r
            display: flex;\r
            justify-content: space-between;\r
        }\r
\r
        .badges {\r
            width: 100px;\r
            object-fit: contain;\r
        }\r
\r
        .badges-info {\r
            flex-direction: column;\r
        }\r
\r
        .all-badges-img {\r
            height: 250px;\r
            object-fit: contain;\r
            margin-top: 10px;\r
        }\r
\r
        @media (orientation: landscape) {\r
            .badges-info {\r
                flex-direction: row-reverse;\r
                align-items: center;\r
                column-gap: 5%;\r
            }\r
\r
            .all-badges-img {\r
                width: 200px;\r
                height: auto;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article class="text-container">\r
        <div class="container">\r
            <p>\r
                Pokémon Gyms offer Pokémon trainers to train their Pokémon to be stronger.\r
                A Pokémon gym will have a few trainers and finally a Gym Leader.\r
            </p>\r
            <img src="images/help/faqs/badges.png" alt="gym-badge" class="badges">\r
        </div>\r
        <div class="container badges-info">\r
            <div>\r
                <p>\r
                    On beating the Gym Leader you'll receive a Gym Badge.\r
                    There are 8 Gyms throughout the game, on defeating all the Gym Leaders you'll be able to compete to\r
                    become the Pokémon champion.\r
                </p>\r
                <br>\r
                <p>\r
                    The badges you receive can be viewed in the "Gym Badges" page.\r
                </p>\r
            </div>\r
            <img src="images/help/faqs/all-badges.png" alt="all-badges" class="all-badges-img">\r
        </div>\r
    </article>\r
</body>\r
</html>`,E=`<html lang="en">\r
<body>\r
    <p>\r
        You can keep upto 6 Pokémon with you at all times, these Pokémon are called the "Party Pokémon".\r
        These are the Pokémon that you'll be able to use in battles, trade, and other in game activities.\r
        Atleast one Pokémon should always be in your party.\r
    </p>\r
</body>\r
</html>\r
`,R=`<html lang="en">\r
<body>\r
    <p>\r
        The "PC" is a storage unit for your Pokémon.\r
        You can keep the Pokémon that you don't want with you at the moment in the PC.\r
        When you have more than 6 Pokémon with you, the next Pokémon is automatically transfered to the PC.\r
    </p>\r
</body>\r
</html>\r
`,z=`<html lang="en">\r
<body>\r
    <p>\r
        Releasing a Pokémon is simply releasing the Pokémon you caught back to the wild.\r
        Some people release their Pokémon when they find another Pokémon of the same species of a higher strength, or it's evolved form.\r
    </p>\r
    <p>\r
        Pokémon that are released <strong>can't</strong> be recovered they are gone for ever.\r
    </p>\r
</body>\r
</html>\r
`,M=`<html lang="en">\r
<body>\r
    <p>\r
        To make your Pokémon grow stronger, you'll need to level it up.\r
        To level up your Pokémon, it complete a Pokémon battle without faining.\r
        Different Pokémon levels-up at different rate.\r
    </p>\r
    <br>\r
    <p>\r
        You can also use the Rare Candy to level up your Pokémon to the next level instantly.\r
        Rare Candies can be purchased in the in-game store, however they are very expensive.\r
    </p>\r
</body>\r
</html>\r
`,V=`<html lang="en">\r
<head>\r
    <style>\r
        .evolution-methods {\r
            display: flex;\r
            flex-direction: column;\r
            row-gap: 10px;\r
            list-style: none;\r
            padding-left: 2.5%;\r
        }\r
\r
        .evolution-title {\r
            display: block;\r
            margin-bottom: 5px;\r
        }\r
\r
        .evolution-description {\r
            color: #AAA;\r
            font-weight: 400;\r
            font-size: small;\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <p>\r
        Different Pokémon evolve in different ways based on their species.\r
        Not all Pokémon can evolve.\r
        The common methods that Pokémon evolve are listed below.\r
    </p>\r
    <br>\r
    <ul class="evolution-methods">\r
        <li>\r
            <span class="evolution-title">\r
                Leveling Up\r
            </span>\r
            <p class="evolution-description">\r
                Some Pokémon evolve when they hit a certain level.\r
                Different Pokémon evolve at different levels.\r
            </p>\r
        </li>\r
        <li>\r
            <span class="evolution-title">\r
                Happiness\r
            </span>\r
            <p class="evolution-description">\r
                Some Pokémon evolve when they hit a certain level of happiness.\r
                Different Pokémon evolve at different happiness.\r
            </p>\r
        </li>\r
        <li>\r
            <span class="evolution-title">\r
                Trading\r
            </span>\r
            <p class="evolution-description">\r
                Some Pokémon evolve when they are traded with another Pokémon trainer.\r
                The evolution happens once the trade is completed for such Pokémon.\r
            </p>\r
        </li>\r
        <li>\r
            <span class="evolution-title">\r
                Use of evolution items\r
            </span>\r
            <p class="evolution-description">\r
                Some Pokémon evolve when they are given a specific item.\r
                These items are called evolution stones.\r
                Each Pokémon have a specific evolution stone required to evolve.\r
                The same can't be said about the Pokémon Eevee, it's evolution is a bit different and can be triggered with a few of the evolution stones.\r
            </p>\r
        </li>\r
    </ul>\r
</body>\r
</html>`,Y=`<html lang="en">\r
<head>\r
    <style>\r
        .text-container {\r
            display: flex;\r
            flex-direction: column;\r
            row-gap: 20px;\r
        }\r
\r
        .container {\r
            display: flex;\r
            column-gap: 25px;\r
        }\r
\r
        .coin-image {\r
            align-self: flex-end;\r
            width: 80px;\r
        }\r
\r
        .shop-image {\r
            height: 250px;\r
            object-fit: contain;\r
            margin-top: 10px;\r
        }\r
\r
        .shop-info {\r
            flex-direction: row-reverse;\r
            align-items: center;\r
        }\r
\r
        @media (orientation: landscape) {\r
            .container {\r
                justify-content: space-evenly;\r
            }\r
\r
            p {\r
                width: 50%;\r
            }\r
\r
            .coin-image {\r
                width: 125px;\r
            }\r
\r
            .shop-info {\r
                flex-direction: row-reverse;\r
                column-gap: 5%;\r
            }\r
\r
            .shop-image {\r
                width: 200px;\r
                height: auto;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article class="text-container">\r
        <div class="container">\r
            <p>\r
                Pokécoins are in game currency that can be used to purchase items from the shop.\r
            </p>\r
            <img src="images/help/faqs/pokecoin.png" alt="Pokécoin" class="coin-image">\r
        </div>\r
        <div class="container shop-info">\r
            <p>\r
                Several types of items can be found in the shop, each of the items have specific purpose.\r
            </p>\r
            <img src="images/help/faqs/shop.png" alt="Shop" class="shop-image">\r
        </div>\r
    </article>\r
</body>\r
</html> `,U=`<html lang="en">\r
<head>\r
    <style>\r
        .text-container {\r
            display: flex;\r
            flex-direction: column;\r
            row-gap: 30px;\r
        }\r
\r
        .container {\r
            display: flex;\r
            justify-content: space-between;\r
            align-items: center;\r
            column-gap: 20px;\r
        }\r
\r
        .event-image {\r
            height: 250px;\r
            object-fit: contain;\r
            margin-top: 10px;\r
        }\r
\r
        @media (orientation: landscape) {\r
            p {\r
                width: 70%;\r
            }\r
\r
            .event-image {\r
                width: 200px;\r
                height: auto;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <article class="text-container">\r
        <div class="container">\r
            <p>\r
                You participate in the Arcade events, face different battles and earn Pokécoins on successfully completing the challenge.\r
                These events are free to participate in.\r
            </p>\r
            <img src="images/help/faqs/arcade-events.png" alt="Arcade" class="event-image">\r
        </div>\r
        <div class="container">\r
            <img src="images/help/faqs/carnival-events.png" alt="Carnival" class="event-image">\r
            <p>\r
                Participate in the Carnival events, play different minigames, some of these events will help you to gain Pokécoins.\r
                Some of these events are free while others require payment to participate in.\r
            </p>\r
        </div>\r
    </article>\r
</body>\r
</html>`,Q=[{question:"What is a Pokémon?",answer:L},{question:"What is a Pokédex?",answer:F},{question:"What are Gyms & Gym Badges?",answer:D},{question:'What is "Party Pokémon"?',answer:E},{question:"What is the PC?",answer:R},{question:"What does it mean to release a Pokémon?",answer:z},{question:"How to make my Pokémon stronger?",answer:M},{question:"How to evolve my Pokémon?",answer:V},{question:"What are Pokécoins?",answer:Y},{question:"How to get Pokécoins?",answer:U}];const O={class:"faq-section"},J={__name:"index",setup(e){const r=x(),t=q(),o=_(null),n=s=>{if(o.value===s){o.value=null;const{qNo:l,...c}=r.query;t.replace({query:c})}else o.value=s,t.replace({query:{...r.query,qNo:s+1}})};return k(()=>{r.query.qNo&&n(r.query.qNo-1)}),(s,l)=>{const c=j;return a(),i("section",O,[(a(!0),i(w,null,P(d(Q),({question:m,answer:v},p)=>(a(),u(c,{question:m,answer:v,"is-active":d(o)===p,key:p,onChange:g=>n(p)},null,8,["question","answer","is-active","onChange"]))),128))])}}},K=h(J,[["__scopeId","data-v-13710fe0"]]);const X={};function Z(e,r){return" video "}const ee=h(X,[["render",Z],["__scopeId","data-v-da840414"]]),ne=[{text:"FAQ",value:"faq"},{text:"Tutorials",value:"videos"}];const re={class:"tab-container"},te={__name:"help",setup(e){S("Help");const r=q(),t=_(null),o=n=>{t.value=n,r.replace({query:{tab:n}})};return(n,s)=>{const l=I,c=K,m=ee;return a(),i("div",re,[C(l,{tabs:d(ne),onChange:o},null,8,["tabs"]),d(t)==="faq"?(a(),u(c,{key:0})):d(t)==="videos"?(a(),u(m,{key:1})):A("",!0)])}}},se=h(te,[["__scopeId","data-v-3b9886e3"]]);export{se as default};
