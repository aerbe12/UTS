$(document).ready(function(){
  $.ajax({
    type: "GET",
  url: "stats.json",
  success: function(province){

    var dataProvince = province.regions;
    for (var list = 0; list <= dataProvince.length; list++) {
      $("#dataProvince").append(
        "<option value = " +
        dataProvince[list].name +
        ">" +
        dataProvince[list].name +
        "</option>"
      );
      
    }
  },
  });


$.ajax ({
  type: "GET",
  url: "stats.json",
  success: function(data){

    $('#infected').append(data.numbers.infected+'<br> case')
    $('#recovered').append(data.numbers.recovered+' <br> case')
    $('#fatal').append(data.numbers.fatal+' <br> case')

  
  }

})

}
)