var url = 'https://restcountries.eu/rest/v2/name/{name}?fields=name;capital;languages';

$('#search').click(searchCountries);

function searchCountries() {

    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';

    $.ajax({
        url: url.replace('{name}', countryName),
        method: 'GET',
        success: showCountriesList
    });
}
function findLanguage(languages) {
    var languageName = '';
    for (var i = 0; i < languages.length; i++) {
        languageName += languages[i].name;
        if (i < languages.length-1){
            languageName += ', ';
        }
    }
    return languageName;
}
function showCountriesList(resp) {
    var tr = '<tr><th>Country</th><th>Capital</th><th>Language</th></tr>';
    resp.forEach(function(item) {
        tr += '<tr><td>' + item.name + '</td><td>' + item.capital + '</td>' + '<td>' + findLanguage(item.languages) + '</td></tr>';
    });
    $('table').empty().append(tr);
}

