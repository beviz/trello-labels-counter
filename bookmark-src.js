(function($) {
  var countLabels = function(labelName) {
  $('.list-wrapper').each(function() {
    var $wrapper = $(this)
    var $labels = $(".card-label:visible[title='" + labelName + "']", this)
    var count = $labels.length

    var labelBackgroundColor = $labels.first().css('background-color')
    var $counter = $("<span class='labels_count'/>").css({
      color: labelBackgroundColor,
      fontSize: "16px",
      fontWeight: "bold",
      float: "right",
      margin: '1px 0 0 4px'
    }).text(count)

    var $header = $wrapper.find('.list-header')
    var $existsCounter = $header.find('.labels_count')
    if ($existsCounter.length) {
      $existsCounter.replaceWith($counter)
    } else {
      $header.append($counter)
    }
  })
}

window.counterInterval = setInterval(function() {
  countLabels("Bug")
}, 1000)
})(jQuery)
