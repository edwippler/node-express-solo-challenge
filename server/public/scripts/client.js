$(document).ready(function() {
  var newJoke = {}; //will pass in proerties to send object for POST request
  getJokes();

$('button').on('click', function() {
  newJoke.jokeQuestion = $('#newJokePrompt').val();
  newJoke.punchLine = $('#newPunchLine').val();
  newJoke.whoseJoke = $('#newJokester').val();
  // console.log(newJoke);
  $('#jokeContainer').empty();
  $.ajax({
    type: 'POST',
    url: '/jokes/new',
    data: newJoke,
    success: function(response){
      alert('Your joke has been added! Lol');
    }
  });
  emptyFields(); 
  getJokes ();
});


});

function getJokes(){
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response) { //upon success this will append existing jokes to the DOM
      for (var i = 0; i < response.length; i++) {
        $('#jokeContainer').append('<h3>Q: ' + response[i].jokeQuestion +
      '</h3><h3>A: ' + response[i].punchLine + '</h3><p>As told by: ' +
      response[i].whoseJoke);
    };
    }
  });
}

function emptyFields(){
  $('#newJokePrompt').val('');
  $('#newPunchLine').val('');
  $('#newJokester').val('');
}
