$(document).on('page:change', function() {
  $('.reset-stop-id').on('click', function(e) {
    e.preventDefault();
    var parent = $(this).parentsUntil('form')
    parent.find('#stopId').val('');
    parent.find('#stopName').val('');

  })

  $('.reset-destination-id').on('click', function(e) {
    e.preventDefault();
    var parent = $(this).parentsUntil('form')
    parent.find('#destinationId').val('');
    parent.find('#destinationName').val('');

  })

  $('.reset-line-id').on('click', function(e) {
    e.preventDefault();
    var parent = $(this).parentsUntil('form')
    parent.find('#lineId').val('');
    parent.find('#lineName').val('');

  })

  // $('#siri-server-choice').on('click','ul li a', function(e) {
	 //  var text = $(this).text();
	 //  var value = $(this).attr('data-value');
	 //  var version = $(this).attr('data-version');
	 //  var requestor = $(this).attr('data-requestor');

	 //  var node = $("#siri-server-value");
	 //  node.text(text).append('<span class="caret"></span>');
	 //  node.attr('data-value', value);
	 //  node.attr('data-version', version);
	 //  node.attr('data-requestor', requestor);

	 //  if(version == '1.3'){
		//   $(".siri_24").css("display", "none");
	 //  }else{
		//   $(".siri_24").css("display", "block");
	 //  }

	 //  autocomplete();

	 //  $('.pannel-trigger').hide();
  // });
});
