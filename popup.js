  $(document).ready(function(){
    
    
    $('.form_built .btn').click(function(e){
      e.preventDefault();
      var varid = $(this).parents('.form_built').find('.hide .name').val();
      var qty = 1;
      data = {
        "id": varid,
        "quantity": qty
      }
      jQuery.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: data,
        dataType: 'json',
        success: function() { 
          $.ajax({
            type: 'GET',
            url: '/cart',
            dataType: 'HTML',
            success: function(data) { 
              var final_data = $(data).find('.cartitem-popup').html(); 
              $('.cart-poppup').html(final_data);
              $('.cart-poppup').addClass('transit-popup');
            }

          })
        }
      });
    })
    
    $(document).on('click', '.cart-popup__close' , function() {
        $('.cart-poppup').removeClass('transit-popup');
      
    });
    
    
    $('.variant_bk').click(function(){
      var variant_id = $(this).attr('data-vid');
      $(this).parents('.grid_pro').find('.form_built select').val(variant_id).trigger('change');

    })
    
    
  });
