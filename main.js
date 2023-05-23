const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code ==="Enter"){
        search();
    }
});

document.getElementById("google-search").addEventListener("click", search);

function search(){
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q="+ input +"&oq="+ input +"&aqs=chrome..69i57j46i67i433i650j0i67i650j46i433i512l2j0i433i512j0i67i650j46i433i512j0i433i512j0i67i650.869j0j7&sourceid=chrome&ie=UTF-8"
}