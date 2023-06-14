const apiKey = '7f504c8b';
const formSearch = document.querySelector("form");

formSearch.onsubmit = (e) => {
    e.preventDefault();
    
    const search = e.target.search.value;

    if (search == ""){
        alert("Please enter a search term");
        return;
    }

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
        .then(result => result.json())
        .then(json => loadList(json));
}

const loadList = (json) => {
    const list = document.querySelector("div.lista");
    list.innerHTML = "";



    if (json.Response == 'False'){
        alert('No movie was found');
        return
    }



    json.Search.forEach(movie => {
        /*console.log(movie);*/

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = '<img src="' + movie.Poster + '" /> <h2>' + movie.Title + '</h2>';
        list.appendChild(item);
    })
}