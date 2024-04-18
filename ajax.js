$.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon',
    method: 'GET',
    success: function(response){
        // Iterate over each Pokémon in the results array
        response.results.forEach(function(pokemon) {
            $('#myList').append('<li>' + pokemon.name + '</li>');
        });
    },
    error: function(xhr, status, error){
        console.error(status);
    }
});