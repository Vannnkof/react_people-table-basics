(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(7),r=(c(33),c(34),c(35),c(3)),s=c(11),j=c.n(s),i=c(2),l=function(){var e=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:e,to:"/people",children:"People"})]})})})},o=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(r.b,{})})})]})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),h=c(0),O=function(e){var t=e.person,c=t.slug,n=t.sex,r=t.name;return Object(i.jsx)(a.b,{to:c,className:j()({"has-text-danger":"f"===n}),children:r})},u=function(e){var t=e.person,c=e.selectedSlug,n=t.born,a=t.died,r=t.fatherName,s=t.motherName,l=t.sex,o=t.father,b=t.mother,d=t.slug;return Object(i.jsxs)("tr",{className:j()({"has-background-warning":c===d}),"data-cy":"person",children:[Object(i.jsx)("td",{children:Object(i.jsx)(O,{person:t})}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:b?Object(i.jsx)(O,{person:b}):s||"-"}),Object(i.jsx)("td",{children:o?Object(i.jsx)(O,{person:o}):r||"-"})]})},x=function(e){var t=e.people,c=Object(r.r)().personSlug,n=void 0===c?"":c;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(u,{person:e,selectedSlug:n},e.slug)}))})]})},p=c(22);c(37);var m=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})};function f(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var v=function(){var e=Object(h.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!1),r=Object(d.a)(a,2),s=r[0],j=r[1],l=Object(h.useState)(!1),o=Object(d.a)(l,2),b=o[0],O=o[1];Object(h.useEffect)((function(){j(!0),f().then((function(e){n(function(e){return e.map((function(t){return Object(p.a)(Object(p.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))}(e))})).catch((function(){O(!0)})).finally((function(){j(!1)}))}),[]);var u=b&&!s,v=!c.length&&!s&&!b,g=!!c.length&&!b;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[s&&Object(i.jsx)(m,{}),u&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),v&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),g&&Object(i.jsx)(x,{people:c})]})})]})},g=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},N=function(){return Object(i.jsx)("div",{"data-cy":"app",children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(b,{})}),Object(i.jsx)(r.c,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.c,{path:"people",element:Object(i.jsx)(v,{}),children:Object(i.jsx)(r.c,{path:":personSlug"})}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(g,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(N,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.1ce58153.chunk.js.map