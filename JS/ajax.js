jQuery(function($){
    jQuery('#form-feedback_contacts').click(function(){
        form = $(this).parent('form');
        $.ajax({
            url: 'form.php',
            type: 'GET',
            dataType: 'json',
            data: ({
                'name': $(this).parent('form').find('input[name=userName]').val(),
                'phone': $(this).parent('form').find('input[name=userPhone]').val(),
                'comment': $(this).parent('form').find('textarea').val()
                }),
            success: function(response){
                if (response){
                    form.append('<div class="mes-success">Спасибо за ваше сообщение</div>');
                } else {
                    form.append('<div class="mes-error">Ошибка!</div>');
                }
            }
        });
    });
     
});