;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.fn.simpleAnchorMenu = function (options) {
    options = $.extend({
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
      linkTextData: "text", // header attribute name for get link text.
      listItemAttributes: "", // tag <li> additional attributes
      listItemUlAttributes: "", // tag <li> additional attributes
      itemAttributes: "" // tag <a> additional attributes
    }, options);
    var element = this,
        menu = options.menu,
        menuOutOfContainer = options.menuOutOfContainer,
        createMenu = options.createMenu,
        newMenuSetting = options.newMenuSetting,
        startHeader = parseInt(options.startHeader),
        lastHeader = parseInt(options.lastHeader),
        linkTextData = options.linkTextData,
        listItemAttributes = options.listItemAttributes,
        listItemUlAttributes = options.listItemAttributes,
        itemAttributes = options.itemAttributes;
    var init = function init() {
      listItemAttributes = listItemAttributes.replace(/data-header=".+"/i, '');
      listItemUlAttributes = listItemUlAttributes.replace(/data-header-container=".+"/i, '');
      itemAttributes = itemAttributes.replace(/href=".+"/i, '');

      if (createMenu && $(newMenuSetting.parent).length > 0) {
        newMenuSetting.menuId = newMenuSetting.menuId === undefined ? "" : newMenuSetting.menuId;
        newMenuSetting.menuClasses = newMenuSetting.menuClasses === undefined ? "" : newMenuSetting.menuClasses;
        newMenuSetting.menuAttributes = newMenuSetting.menuAttributes === undefined ? "" : newMenuSetting.menuAttributes;
        $(newMenuSetting.parent).append('<ul id="'+newMenuSetting.menuId+'" class="'+newMenuSetting.menuClasses+'" '+newMenuSetting.menuAttributes+'></ul>')
      }

      for(var i = 0; i < element.length; i++){
        createMenuItem(element[i]);
      }
    }();

    function createMenuItem (element) {
      var menuElement = menuOutOfContainer ? $('body').find(menu) : $(element).find(menu);
      for (var i = startHeader; i <= lastHeader; i++) {
          headerItem = $(element).find('h'+i);
        headerItem.each(function() {
          if ($(this).attr('id')) {
            if (i > startHeader) {
              var parItem = false;
              for (var j = i-1; j >= startHeader && parItem === false; j--) {
                parItem = getParentItem($(this).prevAll('h'+j));
              }
            }

            var parentItem = i === startHeader ? menuElement : parItem === false ? menuElement : $(menuElement).find('[data-header="'+$(parItem[0]).attr('id')+'"]'),
                linkText = linkTextData === 'text' ? $(this).text() : $(this).attr(linkTextData),
                headerId = $(this).attr('id'),
                linkHref = '#'+headerId;

            if ($(parentItem).attr('data-header') !== undefined) {
              if ($(parentItem).find('[data-header-container="'+$(parItem[0]).attr('id')+'"]').length === 0) {
                $(parentItem).append('<ul data-header-container="'+$(parItem[0]).attr('id')+'" '+listItemUlAttributes+'></ul>');
              }
              parentItem = $(parentItem).find('[data-header-container="'+$(parItem[0]).attr('id')+'"]')
            }

            $(parentItem).append('<li '+listItemAttributes+' data-header="'+headerId+'"><a href="'+linkHref+'" '+itemAttributes+'>'+linkText+'</a></li>')
          }
        });
      }
    }

    function getParentItem(item) {
      return $(item[0]).attr('id') === undefined ? false : item;
    }
  };
}));