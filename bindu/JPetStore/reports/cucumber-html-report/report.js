$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testcase.feature");
formatter.feature({
  "line": 2,
  "name": "JPetStore website",
  "description": "",
  "id": "jpetstore-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JPetStore_Feature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To check that the application is taking the valid credentials.",
  "description": "",
  "id": "jpetstore-website;to-check-that-the-application-is-taking-the-valid-credentials.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_jpetstorelogin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the user launched the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user open the JPetStore website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user enters the username and password clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "login_step.the_user_launched_the_chromebrowser()"
});
formatter.result({
  "duration": 23470640900,
  "status": "passed"
});
formatter.match({
  "location": "login_step.the_user_open_the_JPetStore_website()"
});
formatter.result({
  "duration": 2356167600,
  "status": "passed"
});
formatter.match({
  "location": "login_step.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1817106800,
  "status": "passed"
});
formatter.match({
  "location": "login_step.the_user_enters_the_username_and_password_clicks_on_login_button()"
});
formatter.result({
  "duration": 5222725400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To check if the application is adding its items in the cart",
  "description": "",
  "id": "jpetstore-website;to-check-if-the-application-is-adding-its-items-in-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@tc02_addtocart"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "open the url in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the url is launched click on search and enter search content",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on product id",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Item ID",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on addtocart",
  "keyword": "And "
});
formatter.match({
  "location": "addtocart_step.open_the_url_in_browser()"
});
formatter.result({
  "duration": 15423922100,
  "status": "passed"
});
formatter.match({
  "location": "addtocart_step.the_url_is_launched_click_on_search_and_enter_search_content()"
});
formatter.result({
  "duration": 133098300,
  "status": "passed"
});
formatter.match({
  "location": "addtocart_step.click_on_search_button()"
});
formatter.result({
  "duration": 606150300,
  "status": "passed"
});
formatter.match({
  "location": "addtocart_step.click_on_product_id()"
});
formatter.result({
  "duration": 546208200,
  "status": "passed"
});
formatter.match({
  "location": "addtocart_step.click_on_Item_ID()"
});
formatter.result({
  "duration": 444566100,
  "status": "passed"
});
formatter.match({
  "location": "addtocart_step.click_on_addtocart()"
});
formatter.result({
  "duration": 1118838900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To check that the application is updating cart in the JPet Store application.",
  "description": "",
  "id": "jpetstore-website;to-check-that-the-application-is-updating-cart-in-the-jpet-store-application.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tc03_updatecart"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Open the url in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the url is launched click on search and enter search content in search",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click on the searchbutton bar",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on the product id",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on the Item ID",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on the addtocart",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "change the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on the update cart",
  "keyword": "And "
});
formatter.match({
  "location": "updatecart_step.open_the_url_in_browser()"
});
formatter.result({
  "duration": 13325081400,
  "status": "passed"
});
formatter.match({
  "location": "updatecart_step.the_url_is_launched_click_on_search_and_enter_search_content_in_search()"
});
formatter.result({
  "duration": 93590100,
  "status": "passed"
});
formatter.match({
  "location": "updatecart_step.click_on_the_searchbutton_bar()"
});
formatter.result({
  "duration": 688102000,
  "status": "passed"
});
formatter.match({
  "location": "updatecart_step.click_on_the_product_id()"
});
formatter.result({
  "duration": 381725200,
  "status": "passed"
});
formatter.match({
  "location": "updatecart_step.click_on_the_Item_ID()"
});
formatter.result({
  "duration": 534798200,
  "status": "passed"
});
formatter.match({
  "location": "updatecart_step.click_on_the_addtocart()"
});
formatter.result({
  "duration": 577279700,
  "status": "passed"
});
formatter.match({
  "location": "updatecart_step.change_the_quantity()"
});
formatter.result({
  "duration": 155467900,
  "status": "passed"
});
formatter.match({
  "location": "updatecart_step.click_on_the_update_cart()"
});
formatter.result({
  "duration": 1004221600,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "To check that the application is removing item from the cart in the JPet Store application.",
  "description": "",
  "id": "jpetstore-website;to-check-that-the-application-is-removing-item-from-the-cart-in-the-jpet-store-application.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@tc04_removefromcart"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "open the given url in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "the url is launched then click on search and enter search content",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "click on the Search button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on product ID",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on Item id",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "click on AddToCart",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click on RemoveFromCart",
  "keyword": "And "
});
formatter.match({
  "location": "removefromcart_step.open_the_given_url_in_the_browser()"
});
formatter.result({
  "duration": 13012907200,
  "status": "passed"
});
formatter.match({
  "location": "removefromcart_step.the_url_is_launched_then_click_on_search_and_enter_search_content()"
});
formatter.result({
  "duration": 146416500,
  "status": "passed"
});
formatter.match({
  "location": "removefromcart_step.click_on_the_Search_button()"
});
formatter.result({
  "duration": 752577500,
  "status": "passed"
});
formatter.match({
  "location": "removefromcart_step.click_on_product_ID()"
});
formatter.result({
  "duration": 363596900,
  "status": "passed"
});
formatter.match({
  "location": "removefromcart_step.click_on_Item_id()"
});
formatter.result({
  "duration": 399580400,
  "status": "passed"
});
formatter.match({
  "location": "removefromcart_step.click_on_AddToCart()"
});
formatter.result({
  "duration": 550147200,
  "status": "passed"
});
formatter.match({
  "location": "removefromcart_step.click_on_RemoveFromCart()"
});
formatter.result({
  "duration": 879738800,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "To check thet the application is Signing out from the JPet Store application.",
  "description": "",
  "id": "jpetstore-website;to-check-thet-the-application-is-signing-out-from-the-jpet-store-application.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@tc05_signout"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "the user has launched the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "the user opens the JPetStore website",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user clicking on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "the user enterS the username and password clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "after login sign out from the application",
  "keyword": "And "
});
formatter.match({
  "location": "signout_step.the_user_has_launched_the_chromebrowser()"
});
formatter.result({
  "duration": 10148931200,
  "status": "passed"
});
formatter.match({
  "location": "signout_step.the_user_opens_the_JPetStore_website()"
});
formatter.result({
  "duration": 1445621500,
  "status": "passed"
});
formatter.match({
  "location": "signout_step.user_clicking_on_login_button()"
});
formatter.result({
  "duration": 784995900,
  "status": "passed"
});
formatter.match({
  "location": "signout_step.the_user_enterS_the_username_and_password_clicks_on_login_button()"
});
formatter.result({
  "duration": 607124500,
  "status": "passed"
});
formatter.match({
  "location": "signout_step.after_login_sign_out_from_the_application()"
});
formatter.result({
  "duration": 1025124900,
  "status": "passed"
});
});