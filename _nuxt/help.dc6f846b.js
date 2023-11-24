import{_ as u,o as s,c as l,t as x,n as S,u as A,r as g,e as C,f as B,F as k,g as P,h as y,i as p,a as _,j as $,k as j,l as w,b,w as q,T}from"./entry.db873682.js";import{u as I}from"./useMeta.681472f7.js";const H={__name:"Item",props:{text:{type:String,required:!0},value:{type:String,required:!0},isActive:{type:Boolean,required:!1,default:!1}},emits:["select"],setup(e,{emit:n}){const a=e,t=()=>n("select",a.value);return(o,r)=>(s(),l("div",{class:S(["tab-item",{active:e.isActive}]),onClick:t},x(e.text),3))}},G=u(H,[["__scopeId","data-v-fcef66bb"]]);const Y={class:"tab-switch-container"},D={__name:"index",props:{tabs:{type:Array,required:!0}},emits:["change"],setup(e,{emit:n}){const a=e,t=A(),o=g(null),r=c=>o.value=c;return C(o,()=>n("change",o.value)),B(()=>{o.value=t.query.tab?t.query.tab:a.tabs[0].value}),(c,i)=>{const m=G;return s(),l("div",Y,[(s(!0),l(k,null,P(e.tabs,({text:d,value:h},v)=>(s(),y(m,{text:d,value:h,"is-active":p(o)===h,key:v,onSelect:r},null,8,["text","value","is-active"]))),128))])}}},R=u(D,[["__scopeId","data-v-c56c45de"]]);const M=["innerHTML"],L={__name:"ExpansionPanel",props:{question:{type:String,required:!0},answer:{type:String,required:!0},isActive:{type:Boolean,required:!1,default:!1}},emits:["change"],setup(e,{emit:n}){const a=()=>n("change");return(t,o)=>(s(),l("div",{class:S(["expansion-panel",{"is-active":e.isActive}])},[_("strong",{class:"question",onClick:a},x(e.question),1),_("div",{innerHTML:e.isActive?e.answer:"",class:"answer"},null,8,M)],2))}},W=u(L,[["__scopeId","data-v-86fbe58c"]]),N=`<html lang="en">
<body>
    <article>
        <p>
            Pokémon are creatures of all shapes and sizes who live in the wild or alongside their human partners.
        </p>
    </article>
</body>
</html>`,z=`<html lang="en">
<body>
    <article>
        The starter Pokémon is the first Pokémon you'll have.
        You'll get this Pokémon from Professor Oak after your introducion.
    </article>
</body>
</html>
`,E=`<html lang="en">
<body>
    <article>
        <p>
            A Pokédex is designed to catalogue and provide information about the various species of Pokémon as you encounter them.
        </p>
    </article>
</body>
</html>
`,F=`<html lang="en">
<head>
    <style>
        .text-container {
            display: flex;
            flex-direction: column;
            row-gap: 20px;
        }

        .container {
            display: flex;
            justify-content: space-between;
        }

        .badges {
            width: 100px;
            object-fit: contain;
        }

        .badges-info {
            flex-direction: column-reverse;
        }

        .all-badges-img {
            height: 250px;
            object-fit: contain;
            margin-top: 10px;
        }

        @media (orientation: landscape) {
            .badges-info {
                flex-direction: row;
                align-items: center;
                column-gap: 5%;
            }

            .all-badges-img {
                width: 200px;
                height: auto;
            }
        }
    </style>
</head>

<body>
    <article class="text-container">
        <div class="container">
            <p>
                Pokémon Gyms offer Pokémon trainers to train their Pokémon to be stronger.
                A Pokémon gym will have a few trainers and finally a Gym Leader.
            </p>
            <img src="/images/help/faqs/badges.png" alt="gym-badge" class="badges">
        </div>
        <div class="container badges-info">
            <img src="/images/help/faqs/all-badges.png" alt="all-badges" class="all-badges-img">
            <div>
                <p>
                    On beating the Gym Leader you'll receive a Gym Badge.
                    There are 8 Gyms throughout the game, on defeating all the Gym Leaders you'll be able to compete to
                    become the Pokémon champion.
                </p>
                <br>
                <p>
                    The badges you receive can be viewed in the "Gym Badges" page.
                </p>
            </div>
        </div>
    </article>
</body>
</html>`,V=`<html lang="en">
<body>
    <article>
        <p>
            You can keep upto 6 Pokémon with you at all times, these Pokémon are called the "Party Pokémon".
            These are the Pokémon that you'll be able to use in battles, trade, and other in game activities.
            Atleast one Pokémon should always be in your party.
        </p>
    </article>
</body>
</html>
`,U=`<html lang="en">
<body>
    <article>
        <p>
            The "PC" is a storage unit for your Pokémon.
            You can keep the Pokémon that you don't want with you at the moment in the PC.
            When you have more than 6 Pokémon with you, the next Pokémon is automatically transfered to the PC.
        </p>
    </article>
</body>
</html>
`,O=`<html lang="en">
<body>
    <article>
        <p>
            Releasing a Pokémon is simply releasing the Pokémon you caught back to the wild.
            Some people release their Pokémon when they find another Pokémon of the same species of a higher strength, or it's evolved form.
        </p>
        <p>
            Pokémon that are released <strong>can't</strong> be recovered they are gone for ever.
        </p>
    </article>
</body>
</html>
`,Q=`<html lang="en">
<head>
    <style>
        .level-progress {
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            margin-top: 25px;
        }
        
        .gifs {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            height: 300px;
        }

        .level-progress img {
            width: auto;
            height: 100%;
        }
    </style>
</head>
<body>
    <article>
        <p>
            To make your Pokémon grow stronger, you'll need to level it up.
            To level up your Pokémon, it complete a Pokémon battle without fainting.
            Different Pokémon levels-up at different rate.
        </p>
        <br />
        <p>
            You can also use the Rare Candy to level up your Pokémon to the next level instantly.
            Rare Candies can be purchased in the in-game store, however they are very expensive.
        </p>
    </article>

    <article class="level-progress">
        <div class="gifs">
            <img src="/images/help/faqs/level-progress/low.gif" />
            <img src="/images/help/faqs/level-progress/high.gif" />
        </div>
        <p>
            How close the Pokémon is to levelling up is indicated using the level progress meter.
            In the example shown above, you can see that the level progress in the 2<sup>nd</sup> image is higher than the 1<sup>st</sup>.
        </p>
    </article>
</body>
</html>
`,J=`<html lang="en">
<head>
    <style>
        .evolution-methods {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            list-style: none;
            padding-left: 2.5%;
        }

        .evolution-title {
            display: block;
            margin-bottom: 5px;
        }

        .evolution-description {
            color: #AAA;
            font-weight: 400;
            font-size: small;
        }
    </style>
</head>

<body>
    <article>
        <p>
            Different Pokémon evolve in different ways based on their species.
            Not all Pokémon can evolve.
            The common methods that Pokémon evolve are listed below.
        </p>
        <br>
        <ul class="evolution-methods">
            <li>
                <span class="evolution-title">
                    Leveling Up
                </span>
                <p class="evolution-description">
                    Some Pokémon evolve when they hit a certain level.
                    Different Pokémon evolve at different levels.
                </p>
            </li>
            <li>
                <span class="evolution-title">
                    Happiness
                </span>
                <p class="evolution-description">
                    Some Pokémon evolve when they hit a certain level of happiness.
                    Different Pokémon evolve at different happiness.
                </p>
            </li>
            <li>
                <span class="evolution-title">
                    Trading
                </span>
                <p class="evolution-description">
                    Some Pokémon evolve when they are traded with another Pokémon trainer.
                    The evolution happens once the trade is completed for such Pokémon.
                </p>
            </li>
            <li>
                <span class="evolution-title">
                    Use of evolution items
                </span>
                <p class="evolution-description">
                    Some Pokémon evolve when they are given a specific item.
                    These items are called evolution stones.
                    Each Pokémon have a specific evolution stone required to evolve.
                    The same can't be said about the Pokémon Eevee, it's evolution is a bit different and can be triggered with a few of the evolution stones.
                </p>
            </li>
        </ul>
    </article>
</body>
</html>`,K=`<html lang="en">
<head>
    <style>
        .text-container {
            display: flex;
            flex-direction: column;
            row-gap: 20px;
        }

        .container {
            display: flex;
            column-gap: 25px;
        }

        .coin-image {
            align-self: flex-end;
            width: 80px;
        }

        .shop-image {
            height: 250px;
            object-fit: contain;
            margin-top: 10px;
        }

        .shop-info {
            flex-direction: row-reverse;
            align-items: center;
        }

        @media (orientation: landscape) {
            .container {
                justify-content: space-evenly;
            }

            p {
                width: 50%;
            }

            .coin-image {
                width: 125px;
            }

            .shop-info {
                flex-direction: row-reverse;
                column-gap: 5%;
            }

            .shop-image {
                width: 200px;
                height: auto;
            }
        }
    </style>
</head>

<body>
    <article class="text-container">
        <div class="container">
            <p>
                Pokécoins are in game currency that can be used to purchase items from the shop.
            </p>
            <img src="/images/help/faqs/pokecoin.png" alt="Pokécoin" class="coin-image">
        </div>
        <div class="container shop-info">
            <p>
                Several types of items can be found in the shop, each of the items have specific purpose.
            </p>
            <img src="/images/help/faqs/shop.png" alt="Shop" class="shop-image">
        </div>
    </article>
</body>
</html> `,X=`<html lang="en">
<head>
    <style>
        .text-container {
            display: flex;
            flex-direction: column;
            row-gap: 30px;
        }

        .container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            column-gap: 20px;
        }
        .container:nth-child(odd) {
            flex-direction: row-reverse;
        }

        .get-coin-img {
            height: 250px;
            object-fit: contain;
            margin-top: 10px;
        }
        .get-coin-img.story-mode-highlighted {
            border: 1px solid;
            border-radius: 5px;
        }

        @media (orientation: landscape) {
            p {
                width: 65%;
            }

            .get-coin-img {
                width: 150px;
                height: auto;
            }
        }
    </style>
</head>

<body>
    <article class="text-container">
        <div class="container">
            <img src="/images/help/faqs/story-mode-highlighted.png" alt="Story Mode" class="get-coin-img story-mode-highlighted">
            <p>
                You'll receive Pokécoins upon defeating other trainers in the <strong> Story mode </strong>.
                The amount of Pokécoins you receive will vary with each opponent, but it will increase as you move forward.
            </p>
        </div>
        <div class="container">
            <img src="/images/help/faqs/arcade-events.png" alt="Arcade" class="get-coin-img">
            <p>
                You participate in the Arcade events, face different battles and earn Pokécoins on successfully completing the challenge.
                These events are free to participate in.
            </p>
        </div>
        <div class="container">
            <img src="/images/help/faqs/carnival-events.png" alt="Carnival" class="get-coin-img">
            <p>
                Participate in the Carnival events, play different minigames, some of these events will help you to gain Pokécoins.
                Some of these events are free while others require payment to participate in.
            </p>
        </div>
    </article>
</body>
</html>`,Z=`<html lang="en">
<head>
    <style>
        .daily-rewards-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .daily-rewards-container.main {
            row-gap: 15px;
            margin-bottom: 30px;
        }
        .daily-rewards-container.mystery-box {
            row-gap: 5px;
        }
        
        .daily-rewards-img {
            height: 300px;
            object-fit: contain;
            border: 1px solid;
            border-radius: 5px;
        }

        .mystery-box-img {
            width: clamp(100px, 30%, 150px);
        }

        .text-container {
            width: 50%;
        }

        .note {
            margin-top: 25px;
            padding: 10px;
            background-color: #0007;
            border-radius: 3px;
        }

        @media (orientation: landscape) {
            .daily-rewards-container {
                flex-direction: row;
                justify-content: space-evenly;
                column-gap: 25px;
            }
            .daily-rewards-container.main {
                align-items: flex-start;
            }
            .daily-rewards-container.mystery-box {
                align-items: center;
            }

            .daily-rewards-container p {
                width: 35%;
            }
            .daily-rewards-container.mystery-box p:last-of-type {
                order: 2;
            }

            .mystery-box-img {
                order: 1;
            }

            .note {
                border-radius: 5px;
            }
        }
    </style>
</head>

<body>
    <article class="daily-rewards-container main">
        <p>
            You'll receive items as a reward each day you start to play the game.
            The items you are rewarded will depend on be based on the "Daily Reward Streak".
        </p>
        <img src="/images/help/faqs/daily-rewards.png" alt="Story Mode" class="daily-rewards-img">
        <p>
            You'll receive better items by collecting the rewards daily.
            After a 7 days streak, a new streak will be started.
        </p>
    </article>

    <article class="daily-rewards-container mystery-box">
        <img src="/images/help/faqs/mystery-box.png" alt="Story Mode" class="mystery-box-img">
        <p>
            The <strong> Mystery Box </strong> will reward you with random items.
            You'll surely receive better rewards collected from Mystery Boxes when your Daily Streak is higher.
        </p>
        <p>
            These rewards maybe anything from <em> Pokéballs </em> to <em> Evolution Items </em>, and you might even receive a <em> Master ball </em> if you're lucky enough.
        </p>
    </article>

    <aside class="note">
        To get a new reward you'll have to wait atleast 24 hours after collecting the previous.
        And if you wait more than 48 hours to collect the daily reward, your daily reward streak will be reset.
    </aside>
</body>
</html>
`,ee=`<html lang="en">
<body>
    <article>
        <p>
            Currently the game you can only play the game in one device.
            If you try to play the game on another device or another browser in the same device, you'll be starting a new game.
        </p>
        <p>
            Also keep in mind the game progress will be cleared if you clear the browser storage.
        </p>
    </article>
</body>
</html>
`,ne=[{question:"What is a Pokémon?",answer:N},{question:"What is a starter Pokémon?",answer:z},{question:"What is a Pokédex?",answer:E},{question:"What are Gyms & Gym Badges?",answer:F},{question:'What is "Party Pokémon"?',answer:V},{question:"What is the PC?",answer:U},{question:"What does it mean to release a Pokémon?",answer:O},{question:"How to make my Pokémon stronger?",answer:Q},{question:"How to evolve my Pokémon?",answer:J},{question:"What are Pokécoins?",answer:K},{question:"How to get Pokécoins?",answer:X},{question:"Daily Rewards",answer:Z},{question:"Can I play using multiple devices?",answer:ee}];const te={class:"faq-section"},oe={__name:"index",setup(e){const n=A(),a=$(),t=g(null),o=i=>{if(t.value===i){t.value=null;const{qNo:m,...d}=n.query;a.replace({query:d})}else t.value=i,a.replace({query:{...n.query,qNo:i+1}})},r=j(),c=i=>i.replaceAll(/\"\//g,`${r.public.baseURL}/`).replaceAll(/\"/g,"");return B(()=>{n.query.qNo&&o(n.query.qNo-1)}),(i,m)=>{const d=W;return s(),l("section",te,[(s(!0),l(k,null,P(p(ne),({question:h,answer:v},f)=>(s(),y(d,{question:h,answer:c(v),"is-active":p(t)===f,key:f,onChange:_e=>o(f)},null,8,["question","answer","is-active","onChange"]))),128))])}}},ae=u(oe,[["__scopeId","data-v-399371f4"]]);const se=["src","autoplay","controls"],ie={key:0,class:"overlay"},le={class:"title"},re={__name:"Item",props:{url:{type:String,required:!0},title:{type:String,required:!0},play:{type:Boolean,required:!1,default:!1}},emits:["pause","play"],setup(e,{emit:n}){const a=e,t=g(null);C(()=>a.play,r=>{r||t.value.pause()});const o=()=>{a.play?(n("pause"),t.value.pause()):(n("play"),t.value.play())};return(r,c)=>(s(),l("div",{class:"video-item",onClick:o},[_("video",{ref_key:"video",ref:t,src:e.url,autoplay:e.play,class:"video",controls:e.play},null,8,se),e.play?w("",!0):(s(),l("div",ie,[_("span",le,x(e.title),1)]))]))}},ce=u(re,[["__scopeId","data-v-94146bc3"]]),de=[{title:"Selecting a Starter",video:"https://d360zdw5tkn3j9.cloudfront.net/Template_Block_Assets/Template_sample_clips/one_click_preview/production/Gaming_Tips_YouTube_Shorts_production_story_24755_9_16_1671172591721_SD2.mp4"},{title:"Trainer Battle",video:"https://d360zdw5tkn3j9.cloudfront.net/Template_Block_Assets/Template_sample_clips/one_click_preview/production/Gaming_Tips_YouTube_Shorts_production_story_24755_9_16_1671172591721_SD2.mp4"},{title:"Catching Pokémon",video:"https://d360zdw5tkn3j9.cloudfront.net/Template_Block_Assets/Template_sample_clips/one_click_preview/production/Gaming_Tips_YouTube_Shorts_production_story_24755_9_16_1671172591721_SD2.mp4"},{title:"Trading Pokémon",video:"https://d360zdw5tkn3j9.cloudfront.net/Template_Block_Assets/Template_sample_clips/one_click_preview/production/Gaming_Tips_YouTube_Shorts_production_story_24755_9_16_1671172591721_SD2.mp4"}];const pe={class:"video-section"},me={__name:"index",setup(e){const n=g(null),a=()=>{n.value=null},t=o=>{n.value=o};return(o,r)=>{const c=ce;return s(),l("div",pe,[(s(!0),l(k,null,P(p(de),({title:i,video:m},d)=>(s(),y(c,{title:i,url:m,play:p(n)===d,onPause:a,onPlay:h=>t(d)},null,8,["title","url","play","onPlay"]))),256))])}}},ue=u(me,[["__scopeId","data-v-151d69c7"]]),he=[{text:"FAQ",value:"faq"},{text:"Tutorials",value:"videos"}];const ye={class:"tab-container"},ge={__name:"help",setup(e){I("Help");const n=$(),a=g(null),t=o=>{a.value=o,n.replace({query:{tab:o}})};return(o,r)=>{const c=R,i=ae,m=ue;return s(),l("div",ye,[b(c,{tabs:p(he),onChange:t},null,8,["tabs"]),b(T,{name:"fade"},{default:q(()=>[p(a)==="faq"?(s(),y(i,{key:0})):w("",!0)]),_:1}),b(T,{name:"fade"},{default:q(()=>[p(a)==="videos"?(s(),y(m,{key:0})):w("",!0)]),_:1})])}}},be=u(ge,[["__scopeId","data-v-c5da1161"]]);export{be as default};
