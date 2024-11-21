$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    });
    // setTimeout(() =>
    //   {
    //     document.getElementById("loader").style.display = "none";
    //     document.getElementById("container").style.display = "block";
    //   }, 1000);
})
