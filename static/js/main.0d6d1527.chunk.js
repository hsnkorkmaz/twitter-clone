(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{44:function(c,e,t){},45:function(c,e,t){"use strict";t.r(e);var s=t(11),a=t.n(s),r=t(32),l=t.n(r),i=(t(6),t(33)),n=t(36),j=t(35),h=Object(i.a)({apiKey:"AIzaSyC-PmaLAvcRTUHQPO-nrw2CYLFK-uGnDSo",authDomain:"twitter-clone-react-64af4.firebaseapp.com",projectId:"twitter-clone-react-64af4",storageBucket:"twitter-clone-react-64af4.appspot.com",messagingSenderId:"801273624021",appId:"1:801273624021:web:9313fef3b899043ecdf95c",measurementId:"G-3H921T3B6Q"}),o=(Object(n.a)(h),Object(j.a)(h),t(4)),x=function(c){var e=c.children;return Object(o.jsx)("div",{className:"flex min-h-screen max-w-7xl mx-auto",children:e})},b=t(12),m=function(c){var e=c.name,t=c.Icon,s=c.active,a=c.onMenuItemClick,r=s===e;return Object(o.jsx)("li",{className:"cursor-pointer text-xl group",onClick:function(){return a(e)},children:Object(o.jsx)("a",{href:e.toLowerCase(),className:"pointer-events-none",children:Object(o.jsx)("div",{className:"inline-block",children:Object(o.jsxs)("div",{className:"flex items-center group-hover:bg-twitterPrimary-light group-hover:text-twitterPrimary-base rounded-full pl-3 pr-8 py-4\n                    ".concat(r?"text-twitterPrimary-base italic":""),children:[t,Object(o.jsx)("span",{className:"ml-4 font-normal ",children:e})]})})})})},d=function(){return Object(o.jsxs)("div",{className:"flex justify-between items-center mb-6 hover:bg-twitterPrimary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200",children:[Object(o.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1450414029927768066/HPgKL10H_400x400.jpg",alt:"Profile",className:"w-11 h-11 rounded-full"}),Object(o.jsxs)("div",{className:"flex flex-col",children:[Object(o.jsx)("span",{className:"font-bold text-twitterBlack",children:"Hasan Mustafa"}),Object(o.jsx)("span",{className:"text-sm",children:"@hasan_nu_"})]}),Object(o.jsxs)("div",{className:"flex space-x-1",children:[Object(o.jsx)("div",{className:"w-1 h-1 bg-gray-600 rounded-full"}),Object(o.jsx)("div",{className:"w-1 h-1 bg-gray-600 rounded-full"}),Object(o.jsx)("div",{className:"w-1 h-1 bg-gray-600 rounded-full"})]})]})},O={Logo:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})}),Home:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"})}),Explore:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"})}),Notifications:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"})}),Messages:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"})}),Bookmarks:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"})}),Lists:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{d:"M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"}),Object(o.jsx)("path",{d:"M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"})]}),Profile:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"})}),More:Object(o.jsxs)("g",{children:[Object(o.jsx)("circle",{cx:"17",cy:"12",r:"1.5"}),Object(o.jsx)("circle",{cx:"12",cy:"12",r:"1.5"}),Object(o.jsx)("circle",{cx:"7",cy:"12",r:"1.5"}),Object(o.jsx)("path",{d:"M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"})]}),TopTweets:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"})}),Image:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{d:"M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"}),Object(o.jsx)("circle",{cx:"8.868",cy:"8.309",r:"1.542"})]}),Gif:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{d:"M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"}),Object(o.jsx)("path",{d:"M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"})]}),Poll:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"})}),Emoji:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{d:"M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"}),Object(o.jsx)("path",{d:"M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"}),Object(o.jsx)("circle",{cx:"14.738",cy:"9.458",r:"1.478"}),Object(o.jsx)("circle",{cx:"9.262",cy:"9.458",r:"1.478"})]}),Schedule:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{d:"M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"}),Object(o.jsx)("path",{d:"M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"}),Object(o.jsx)("path",{d:"M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"}),Object(o.jsx)("path",{d:"M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"})]}),Reply:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"})}),Retweet:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"})}),Like:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"})}),Share:Object(o.jsxs)("g",{children:[Object(o.jsx)("path",{d:"M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"}),Object(o.jsx)("path",{d:"M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"})]}),Search:Object(o.jsx)("g",{children:Object(o.jsx)("path",{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})})},v=function(c){var e=c.children,t=c.className;return Object(o.jsx)("svg",{viewBox:"0 0 24 24",className:"fill-current ".concat(t),children:e})},p=function(c){var e=c.iconName,t=c.className;return Object(o.jsx)(v,{className:t,children:O[e]})},u="w-6 h-6",f=[{Name:"Home",Icon:Object(o.jsx)(p,{iconName:"Home",className:u})},{Name:"Explore",Icon:Object(o.jsx)(p,{iconName:"Explore",className:u})},{Name:"Notifications",Icon:Object(o.jsx)(p,{iconName:"Notifications",className:u})},{Name:"Messages",Icon:Object(o.jsx)(p,{iconName:"Messages",className:u})},{Name:"Bookmarks",Icon:Object(o.jsx)(p,{iconName:"Bookmarks",className:u})},{Name:"Lists",Icon:Object(o.jsx)(p,{iconName:"Lists",className:u})},{Name:"Profile",Icon:Object(o.jsx)(p,{iconName:"Profile",className:u})},{Name:"More",Icon:Object(o.jsx)(p,{iconName:"More",className:u})}],g=function(){var c=Object(s.useState)("Home"),e=Object(b.a)(c,2),t=e[0],a=e[1],r=function(c){a(c)};return Object(o.jsxs)("div",{className:"h-screen sticky top-0 flex flex-col justify-between w-72 px-2",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-twitterGray-lightest  transform transition-colors duration-300",children:Object(o.jsx)(p,{iconName:"Logo",className:"w-7 h-7 text-twitterPrimary-base"})}),Object(o.jsx)("nav",{className:"mb-4",children:Object(o.jsx)("ul",{children:f.map((function(c){var e=c.Name,s=c.Icon;return Object(o.jsx)(m,{name:e,Icon:s,active:t,onMenuItemClick:r})}))})}),Object(o.jsx)("button",{className:"bg-twitterPrimary-base hover:bg-twitterPrimary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-300",children:"Tweet"})]}),Object(o.jsx)("div",{children:Object(o.jsx)(d,{})})]})},N=t(37),z=function(){var c=Object(o.jsx)(p,{iconName:"Logo",className:"w-7 h-7"});return Object(o.jsxs)("div",{className:"w-80",children:[Object(o.jsxs)("div",{className:"flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-twitterGray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-twitterPrimary-base focus-within:text-twitterPrimary-base",children:[c,Object(o.jsx)("input",{type:"text",placeholder:"Search Twitter",className:"placeholder-twitterGray-dark bg-transparent outline-none w-full text-sm focus:outline-none"})]}),Object(o.jsx)("div",{className:"mt-5",children:Object(o.jsx)(N.a,{dataSource:{sourceType:"profile",screenName:"reactjs"},options:{height:"90vh"}})})]})},w=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"tweetbox"})})},M=function(){return Object(o.jsxs)("main",{className:"flex-1 flex flex-col border-r border-l border-twitterGray-extraLight",children:[Object(o.jsxs)("header",{className:"bg-white sticky top-0 z-10 flex justify-between items-center p-4 border-b border-twitterGray-extraLight",children:[Object(o.jsx)("span",{className:"font-bold text-xl text-gray-900",children:"Home"}),Object(o.jsx)(p,{iconName:"TopTweets",className:"w-6 h-6 text-twitterPrimary-base"})]}),Object(o.jsxs)("div",{className:"flex space-x-4 px-4 py-3",children:[Object(o.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1450414029927768066/HPgKL10H_400x400.jpg",alt:"Profile",className:"w-11 h-11 rounded-full"}),Object(o.jsx)(w,{})]})]})},H=function(){return Object(o.jsxs)(x,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(M,{}),Object(o.jsx)(z,{})]})},y=function(c){c&&c instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(e){var t=e.getCLS,s=e.getFID,a=e.getFCP,r=e.getLCP,l=e.getTTFB;t(c),s(c),a(c),r(c),l(c)}))};t(44);l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(H,{})}),document.getElementById("root")),y()}},[[45,1,2]]]);
//# sourceMappingURL=main.0d6d1527.chunk.js.map