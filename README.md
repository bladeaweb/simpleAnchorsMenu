# simpleAnchorMenu by Alexander Sharkov
v.1.0.0

### What is it?
>It's a little jQuery module developed to help for website developers, when they need to create automatically and dinamicly menu items to headers with id's.

### [Demo](https://bladeaweb.github.io/simpleAnchorMenu/)

### 1.Getting Started
* Download source or clone repository

###### If you use Bower
```
    bower install simpleAnchorMenu -save
```
###### If you use NPM
```
    npm install simpleanchorsmenu
```
* Load jQuery(1.7+) 
* Include source files simpleAnchorMenu.min.js or simpleAnchorMenu.js 
of simpleAnchorMenu into your project
* And read this manual to start work the script in your project.

###### Html before close body
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="your path/simpleAnchorMenu.min.js"></script>
```
### 2.Call the plugin
Now call the simpleAnchorMenu initialize function for your selector 
and after that you could see inserted links to anchors to selected menu <ul> container.

###### JavaScript default call
```javascript
$("#some-id").simpleAnchorMenu();
```
###### JavaScript call with options (in this case I show you what is default values for options)
```javascript
$("#some-id").simpleAnchorMenu({
    menu: "#subMenu",
    menuOutOfContainer: false,
    createMenu: false,
    newMenuSetting: {
      parent: "",
      menuAttributes: "",
      menuClasses: "",
      menuId: ""
    },
    startHeader: 2,
    lastHeader: 5,
    linkTextData: "text",
    listItemAttributes: "",
    listItemUlAttributes: "",
    itemAttributes: ""
});
```
### 3.Options list
Option | Type | Default | Description |
------ | ---- | ------- | ----------- |
menu | string | "#subMenu" | This is a very important parameter for create a menu. It should be class, id or other attribute for script understanding in what menu to add links (if it will be some special attribute it should look like '[attribute-name="some-data"]') |
menuOutOfContainer | boolean | false | If menu should be out of container with Headers it parameter should be: true. |
createMenu | boolean | false | If you want to create ul menu automatically you need set it parameter to: true. |
newMenuSetting | object | {...} | Option contains a object with several parameters. Look options list in [newMenuSetting options](#newMenuSetting). |
startHeader | index | 2 | Start header number, value 2 means h2 header will be first header of header items in container to create links. | 
lastHeader | index | 5 | Last header number, value 5 means h5 header will be last header item of header items in container to create links.| 
linkTextData | string | "text" | This parameter need to select what attribute will use to get text of new created links from headers. | 
listItemAttributes | string | "" | Attributes for "\<li\>" tag. | 
listItemUlAttributes | string | "" | Attributes for "\<ul\>" tag, it's "\<ul\>" tags what will insert to "\<li\>" tag. | 
itemAttributes | string | "" | Attributes for "\<a\>" tag. |


#### <a id="newMenuSetting"></a> newMenuSetting options
Option | Type | Default | Description |
------ | ---- | ------- | ----------- |
parent | string | "" | It should be class, id or other attribute for script understanding in what parent element will use to create menu (if it will be some special attribute it will look like '[attribute-name="some-data"]') |
menuAttributes | string | "" | String with any attributes. |
menuClasses | string | "" | String with classes names (example: "class_1 class_2 class_3"). If use class in  "menu" parameter it class should be add in this param. |
menuId | string | "" | String with Id. If use id in "menu" parameter, it id value should be install here. |
