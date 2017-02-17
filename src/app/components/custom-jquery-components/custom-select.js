var customSelect = function(){
  $('.custom_select').each(function(){
    var list = $(this).children('ul'),
      select = $(this).find('select'),
      title = $(this).find('.select_title');
    title.css('min-width',title.outerWidth());

    // select items to list items

    if($(this).find('[data-filter]').length){
      for(var i = 0,len = select.children('option').length;i < len;i++){
        list.append('<li data-filter="'+select.children('option').eq(i).data('filter')+'" class="tr_delay_hover">'+select.children('option').eq(i).text()+'</li>')
      }
    }
    else{
      for(var i = 0,len = select.children('option').length;i < len;i++){
        list.append('<li class="tr_delay_hover">'+select.children('option').eq(i).text()+'</li>')
      }
    }
    select.hide();

    // open list

    title.on('click',function(){
      list.slideToggle(400);
      $(this).toggleClass('active');
    });

    // selected option

    list.on('click','li',function(){
      var val = $(this).text();
      title.text(val);
      list.slideUp(400);
      select.val(val);
      title.toggleClass('active');
    });

  });

};

export default customSelect;
