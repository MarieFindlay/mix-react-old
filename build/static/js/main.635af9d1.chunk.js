(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(e,n,t){},23:function(e,n,t){e.exports=t(42)},38:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(14),o=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(3),u=t(7),c=t(8),l="SELECT_VIEW",m="UPDATE_CURRENT_PAGE",d="UPDATE_SEARCH_INPUT_VALUE",h="SELECT_COCKTAIL",g="ADD_COCKTAIL_TO_SHOPPING_LIST",p="CLEAR_SHOPPING_LIST",f="CHOOSE_COCKTAILS",v="SHOPPING_LIST",k="SAVED_RECIPES",E=Object(s.combineReducers)({selectedView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return n.view;default:return e}},currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:return n.requestIsPrevious?e-1:e+1;default:return e}},searchInputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d:return n.inputValue;default:return e}},selectedCocktailId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h:return n.id;case l:return null;default:return e}},shoppingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return 0!==n.servings?e.hasOwnProperty(n.id)?Object(c.a)({},e,Object(u.a)({},n.id,e[n.id]+n.servings)):Object(c.a)({},e,Object(u.a)({},n.id,n.servings)):e;case p:return{};default:return e}}}),b=t(1),w=t(16),C=(t(6),[{view:f,label:"CHOOSE"},{view:v,label:"SHOP"},{view:k,label:"MIX"}]),y=Object(b.b)(function(e,n){return{selectedView:e.selectedView}},function(e,n){return{onClick:function(n){e({type:l,view:n})}}})(function(e){var n=e.onClick,t=e.selectedView;return i.a.createElement("div",{className:"NavBarContainer"},C.map(function(e){var a=e.view,r=e.label;return i.a.createElement("h2",{key:r,onClick:function(){return n(a)},className:t===a?"navHeaderSelected":"navHeaderUnselected"},r)}))}),S=Object(b.b)(function(e,n){return{searchInputValue:e.searchInputValue}},function(e,n){return{onChange:function(n){e(function(e){return{type:d,inputValue:e}}(n))}}})(function(e){var n=e.onChange,t=e.searchInputValue,a=e.disabled;return i.a.createElement("input",{onChange:function(e){return n(e.target.value)},value:t,className:"searchInput",type:"text",placeholder:"Search",disabled:a})}),I=t(17),L=t.n(I),N=function(e){["twist","lime","tsp","cube","lemon","slice","drop"].includes(e.unit)?1!==e.amount&&(e.unit="".concat(e.unit,"s")):["dash"].includes(e.unit)?1!==e.amount&&(e.unit="".concat(e.unit,"es")):"cherry"===e.unit?1!==e.amount&&(e.unit="cherries"):"leaf"===e.unit&&1!==e.amount&&(e.unit="leaves")},O=function(e){var n=e.selectedItemId,t=e.item,a=e.onClick;return i.a.createElement("div",null,i.a.createElement("li",{className:L()("cocktailListItem",{cocktailListItemSelected:n===t.id,cocktailListItemUnselected:n!==t.id}),onClick:function(){return a(t.id)}},t.name))},z=Object(b.b)(function(e,n){return{selectedItemId:e.selectedCocktailId,searchInputValue:e.searchInputValue,currentPage:e.currentPage}},function(e,n){return{onClick:function(n){e(function(e){return{type:h,id:e}}(n))}}})(function(e){var n=e.cocktails,t=e.selectedItemId,a=e.onClick,r=function(e,n){var t=15*e,a=t+15;return n.slice(t,a)}(e.currentPage,function(e,n){return e.filter(function(e){return e.name.toUpperCase().startsWith(n.toUpperCase())})}(n,e.searchInputValue)).map(function(e){return i.a.createElement(O,{key:e.id,item:e,selectedItemId:t,onClick:a})});return i.a.createElement("ul",{className:"cocktailList"},r)}),P=Object(b.b)(function(e,n){return{currentPage:e.currentPage,selectedView:e.selectedView}},function(e,n){return{onClick:function(n){e(function(e){return{type:m,requestIsPrevious:e}}(n))}}})(function(e){var n=e.currentPage,t=(e.selectedView,e.numberOfPages),a=e.onClick;return i.a.createElement("div",{className:"prevNextButtonContainer"},i.a.createElement("button",{onClick:function(){return a(!0)},className:"prevButton",disabled:0===n},"PREV"),i.a.createElement("button",{onClick:function(){return a(!1)},className:"nextButton",disabled:n===t},"NEXT"))}),T=function(e){var n=e.slice();return n.forEach(function(e){e.ingredients.forEach(function(e){"oz"===e.unit&&(e.amount=30*e.amount,e.unit="ml")})}),n}(function(e){var n=e.slice();return n.forEach(function(e){e.ingredients.forEach(function(e){return N(e)})}),n}([{id:100,name:"Long Island Iced Tea",ingredients:[{name:"Vodka",amount:.5,unit:"oz"},{name:"Tequila",amount:.5,unit:"oz"},{name:"Light rum",amount:.5,unit:"oz"},{name:"Gin",amount:.5,unit:"oz"},{name:"Coca cola",amount:1,unit:"dash"},{name:"Lemon peel",amount:1,unit:"twist"}],instructions:["Mix all contents in a highball glass and stir gently","Add dash of Coca-Cola for the coloring","Garnish with lemon or lime twist"]},{id:1,name:"Daiquiri",ingredients:[{name:"Light rum",amount:.5,unit:"oz"},{name:"Lime juice",amount:.5,unit:"lime"},{name:"Granulated sugar",amount:1,unit:"tsp"}],instructions:["Pour all ingredients into shaker with ice cubes","Shake well","Strain into chilled cocktail glass"]},{id:2,name:"Espresso Martini",ingredients:[{name:"Vodka",amount:1.75,unit:"oz"},{name:"Kahlua",amount:.35,unit:"oz"},{name:"Sugar syrup",amount:1,unit:"dash"}],instructions:["Pour ingredients into shaker filled with ice","Shake vigorously","Strain into chilled martini glass"]},{id:3,name:"Old Fashioned",ingredients:[{name:"Bourbon",amount:45,unit:"ml"},{name:"Angostura bitters",amount:2,unit:"dash"},{name:"Sugar cube",amount:1,unit:"cube"},{name:"Water",amount:1,unit:"dash"},{name:"Orange peel",amount:1,unit:"twist"},{name:"Cocktail cherry",amount:1,unit:"cherry"}],instructions:["Place sugar cube in an old fashioned glass and saturate with bitters","Add a dash of plain water","Mix until dissolved","Fill the glass with ice cubes and add whiskey","Garnish with orange twist and a cocktail cherry"]},{id:4,name:"Negroni",ingredients:[{name:"Gin",amount:1,unit:"oz"},{name:"Campari",amount:1,unit:"oz"},{name:"Sweet vermouth",amount:1,unit:"oz"}],instructions:["Stir into glass over ice, garnish and serve"]},{id:5,name:"Whiskey Sour",ingredients:[{name:"Blended bourbon",amount:2,unit:"oz"},{name:"Lemon juice",amount:.5,unit:"lemon"},{name:"Granulated sugar",amount:.5,unit:"tsp"},{name:"Cocktail cherry",amount:1,unit:"cherry"},{name:"Lemon slice",amount:1,unit:"slice"}],instructions:["Shake with ice","Strain into chilled glass, garnish and serve","If served on the rocks, strain ingredients into old-fashioned glass filled with ice"]},{id:6,name:"Margarita",ingredients:[{name:"Tequila",amount:1.5,unit:"oz"},{name:"Triple sec",amount:.5,unit:"oz"},{name:"Lime juice",amount:.3,unit:"lime"},{name:"Salt",amount:1,unit:"dash"}],instructions:["Rub the rim of the glass with the lime slice to make the salt stick to it","Take care to moisten only the outer rim and sprinkle the salt on it","The salt should present to the lips of the imbiber and never mix into the cocktail","Shake the other ingredients with ice, then carefully pour into the glass"]},{id:7,name:"Manhattan",ingredients:[{name:"Sweet vermouth",amount:.75,unit:"oz"},{name:"Blended bourbon",amount:2.5,unit:"oz"},{name:"Angostura bitters",amount:1,unit:"dash"},{name:"Ice",amount:3,unit:"cube"},{name:"Cocktail cherry",amount:1,unit:"cherry"},{name:"Orange peel",amount:1,unit:"twist"}],instructions:["Stir over ice","Strained into a chilled glass","Garnish and serve up"]},{id:8,name:"Moscow Mule",ingredients:[{name:"Vodka",amount:2,unit:"oz"},{name:"Lime juice",amount:2,unit:"oz"},{name:"Ginger ale",amount:8,unit:"oz"}],instructions:["Combine vodka and ginger beer in a highball glass filled with ice","Add lime juice","Stir gently","Garnish"]},{id:9,name:"Mojito",ingredients:[{name:"Light rum",amount:3,unit:"oz"},{name:"Lime juice",amount:1,unit:"lime"},{name:"Granulated sugar",amount:2,unit:"tsp"},{name:"Mint",amount:3,unit:"leaf"},{name:"Soda water",amount:1,unit:"dash"}],instructions:["Muddle mint leaves with sugar and lime juice","Add a splash of soda water and fill the glass with cracked ice","Pour the rum and top with soda water","Garnish and serve with straw"]},{id:10,name:"Boulevardier",ingredients:[{name:"Campari",amount:1,unit:"oz"},{name:"Sweet vermouth",amount:1,unit:"oz"},{name:"Rye whiskey",amount:1.25,unit:"oz"},{name:"Orange peel",amount:1,unit:"twist"}],instructions:["Stir with ice, strain, garnish and serve"]},{id:11,name:"Sazerac",ingredients:[{name:"Ricard",amount:1,unit:"tsp"},{name:"Granulated sugar",amount:1,unit:"tsp"},{name:"Peychaud bitters",amount:2,unit:"dash"},{name:"Water",amount:2,unit:"oz"},{name:"Bourbon",amount:2,unit:"oz"},{name:"Lemon peel",amount:1,unit:"twist"}],instructions:["Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set aside","Stir the remaining ingredients over ice and set it aside","Discard the ice and any excess absinthe from the prepared glass and strain the drink into the glass","Add the lemon peel for garnish"]},{id:12,name:"Bloody Mary",ingredients:[{name:"Vodka",amount:1.5,unit:"oz"},{name:"Tomato juice",amount:3,unit:"oz"},{name:"Lemon juice",amount:1,unit:"dash"},{name:"Worcestershire sauce",amount:.5,unit:"tsp"},{name:"Tabasco sauce",amount:3,unit:"drop"},{name:"Lime slice",amount:1,unit:"slice"}],instructions:["Stirring gently, pour all ingredients into highball glass","Garnish with the lime slice"]},{id:13,name:"Penecillin",ingredients:[{name:"Blended scotch",amount:2,unit:"oz"},{name:"Lemon juice",amount:.75,unit:"oz"},{name:"Honey syrup",amount:2,unit:"tsp"},{name:"Ginger syrup",amount:2,unit:"tsp"},{name:"Islay single malt scotch",amount:.25,unit:"oz"}],instructions:["Shake blended scotch, lemon juice, honey syrup and ginger syrup with ice","Strain over large ice in chilled rocks glass","Float smoky Scotch on top (be sure to use a smoky Scotch such as an Islay single malt)","Garnish with candied ginger"]},{id:14,name:"Gin Fizz",ingredients:[{name:"Gin",amount:2,unit:"oz"},{name:"Lemon juice",amount:.5,unit:"lemon"},{name:"Granulated sugar",amount:1,unit:"tsp"},{name:"Soda water",amount:1,unit:"dash"}],instructions:["Shake all ingredients with ice cubes, except soda water","Pour into glass","Top with soda water"]},{id:15,name:"Mai Tai",ingredients:[{name:"Light rum",amount:1,unit:"oz"},{name:"Orgeat syrup",amount:.5,unit:"oz"},{name:"Triple sec",amount:.5,unit:"oz"},{name:"Sweet and sour",amount:1.5,unit:"oz"},{name:"Cherry",amount:1,unit:"cherry"}],instructions:["Shake all ingredients with ice","Strain into glass","Garnish and serve with straw"]},{id:16,name:"Pisco Sour",ingredients:[{name:"Pisco",amount:2,unit:"oz"},{name:"Lemon juice",amount:1,unit:"oz"},{name:"Granulated sugar",amount:6,unit:"tsp"}],instructions:["Vigorously shake and strain contents in a cocktail shaker with ice cubes","Pour into glass and garnish with bitters"]}].sort(function(e,n){return e.name<n.name?-1:e.name>n.name?1:0}))).map(function(e){return Object(c.a)({},e,{quantityInShoppingList:0})}),j=Object(b.b)(function(e){return{selectedView:e.selectedView,cocktailsToDisplay:e.selectedView===f?T:(n=T,t=e.shoppingList,n.filter(function(e){return t.hasOwnProperty(e.id)}))};var n,t})(function(e){var n,t=e.selectedView,a=e.cocktailsToDisplay;return i.a.createElement("div",{className:"cocktailsColumn"},i.a.createElement(y,null),(t===f||t===k&&a.length>0)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{disabled:0===a.length}),i.a.createElement(z,{cocktails:a}),i.a.createElement(P,{numberOfPages:(n=a,Math.floor(n.length/15))})))}),V=(t(2),function(e){var n=e.instruction;return i.a.createElement("li",null,n)}),G=function(e){var n=e.selectedCocktail,t=e.header,a=n.instructions.map(function(e,n){return i.a.createElement(V,{key:n,instruction:e})});return i.a.createElement("div",{className:"instructionsContainer"},i.a.createElement("h3",{className:"instructionsHeader"},t),i.a.createElement("ol",{className:"instructionsList"},a))},A=function(e){var n=e.ingredient;return i.a.createElement("tr",{className:"ingredientTableRow"},i.a.createElement("td",{className:"ingredientNameData"},n.name),i.a.createElement("td",{className:"ingredientTableData"},n.amount+" "+n.unit))},M=function(e){var n=e.ingredients,t=e.header,a=n.map(function(e,n){return i.a.createElement(A,{key:n,ingredient:e})});return i.a.createElement("div",{className:"ingredientsContainer"},i.a.createElement("h3",{className:"ingredientsHeader"},t),i.a.createElement("table",null,i.a.createElement("tbody",null,a)))},x=t(18),B=t(19),D=t(21),H=t(20),_=t(22),R=function(e){function n(e){var t;return Object(x.a)(this,n),(t=Object(D.a)(this,Object(H.a)(n).call(this,e))).state={inputValue:""},t}return Object(_.a)(n,e),Object(B.a)(n,[{key:"render",value:function(){var e=this,n=this.props.selectedItemId,t=this.state.inputValue,a=this.props.onClick;return i.a.createElement("form",{className:"servingsForm"},i.a.createElement("input",{className:"servingsInput",type:"number",placeholder:"Servings",value:t,onChange:function(n){return e.setState({inputValue:parseInt(n.target.value)})}}),i.a.createElement("button",{className:0===t?"servingsSubmitButtonDisabled":"servingsSubmitButton",onClick:function(e){return a(e,t,n)}},"+ ADD"))}}]),n}(i.a.Component),U=Object(b.b)(function(e,n){return{selectedItemId:e.selectedCocktailId}},function(e,n){return{onClick:function(n,t,a){n.preventDefault(),e({type:g,servings:t,id:a}),alert("Added to shopping list!")}}})(R),W=function(e){var n=e.selectedCocktailId,t=e.selectedView,a=e.shoppingList;if(n){var r=T.find(function(e){return n===e.id});return i.a.createElement("div",{className:"selectedCocktailContainer"},i.a.createElement("h2",{className:"selectedCocktailHeader"},r.name.toUpperCase()),i.a.createElement("div",{className:"selectedCocktailInnerContainer"},i.a.createElement(U,null),i.a.createElement(M,{ingredients:r.ingredients,header:"Ingredients"}),i.a.createElement(G,{selectedCocktail:r,header:"Instructions"})))}return t===f?i.a.createElement("p",{className:"noCocktailSelectedText"},"Welcome to Mix, your cocktail party planner.",i.a.createElement("br",null),i.a.createElement("br",null),"To start, choose your cocktails and add ingredients to your shopping list.",i.a.createElement("br",null),i.a.createElement("br",null),"Go to Shop to view your shopping list.",i.a.createElement("br",null),i.a.createElement("br",null),"Then head to Mix to view saved recipes and start making your cocktails!"):0===Object.keys(a).length?i.a.createElement("p",{className:"noCocktailSelectedText"},"First choose your cocktails, then view your saved recipes here."):i.a.createElement("p",{className:"noCocktailSelectedText"},"Select one of your saved cocktails to view its recipe.")},F=function(e){var n=e.cocktailQuantityPair;return i.a.createElement("div",null,i.a.createElement("li",null,n[1]+" x "+n[0].name))},q=function(e){var n=e.cocktailsInShoppingList.map(function(e,n){return i.a.createElement(F,{key:n,cocktailQuantityPair:e})});return i.a.createElement("ul",{className:"cocktailsInShoppingList"},n)},K=function(e){var n=e.onClick;return i.a.createElement("button",{onClick:n,className:"clearShoppingListButton"},"CLEAR LIST")},J=Object(b.b)(function(e,n){return{cocktailsInShoppingList:Object.entries(e.shoppingList).map(function(e){return[T.find(function(n){return parseInt(e[0])===n.id}),e[1]]})}},function(e,n){return{onClick:function(){e({type:p})}}})(function(e){var n=e.cocktailsInShoppingList,t=e.onClick;if(0===Object.keys(n).length)return i.a.createElement("p",{className:"shoppingListEmptyText"},"You shopping list is empty. ",i.a.createElement("br",null)," ",i.a.createElement("br",null)," First choose your cocktails, then come to Shop to find out you what you need.");var a=[];return n.forEach(function(e){e[0].ingredients.forEach(function(n){a.includes(n.name)?a.find(function(e){return e.name===n.name}).amount+=e[1]*n.amount:a.push({name:n.name,amount:e[1]*n.amount,unit:n.unit})}),a.forEach(function(e){return N(e)})}),i.a.createElement("div",{className:"shoppingListContainer"},i.a.createElement("h2",{className:"shoppingListHeader"},"SHOPPING LIST"),i.a.createElement("div",{className:"shoppingListInnerContainer"},i.a.createElement(K,{onClick:t}),i.a.createElement("h3",{className:"shoppingListCocktailsHeader"},"TO MAKE"),i.a.createElement(q,{cocktailsInShoppingList:n}),i.a.createElement(M,{ingredients:a,header:"YOU NEED"})))}),Q=Object(b.b)(function(e,n){return{selectedView:e.selectedView,selectedCocktailId:e.selectedCocktailId,shoppingList:e.shoppingList}})(function(e){var n=e.selectedView,t=e.shoppingList,a=e.selectedCocktailId;e.onClearShoppingList;return n===f||n===k?i.a.createElement("div",{className:"detailsColumn"},i.a.createElement(W,{selectedCocktailId:a,selectedView:n,shoppingList:t})):i.a.createElement("div",{className:"detailsColumn"},i.a.createElement(J,null))}),X=(t(38),function(){return i.a.createElement("div",{className:"mainScreenContainer"},i.a.createElement("div",{className:"imgColumn"}),i.a.createElement(j,null),i.a.createElement(Q,null))}),Y=Object(s.createStore)(E,Object(w.devToolsEnhancer)());o.a.render(i.a.createElement(b.a,{store:Y},i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,n,t){}},[[23,2,1]]]);
//# sourceMappingURL=main.635af9d1.chunk.js.map