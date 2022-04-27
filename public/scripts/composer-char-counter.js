

$(document).ready(function() {

  const texareaLimit = 140;

  $("textarea").change(function() {
    const textareaLength = $(this).val().length;
    const counterElement = $(this).siblings('.button-counter').find('.counter');
    const counter = texareaLimit - textareaLength;
    counterElement.val(counter);
    
    if (counter < 0) {
      counterElement.css('color', 'red');
    } else {
      counterElement.css('color', '#545149');
    }
  });
});



