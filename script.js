function fetchVideo(){
    const url = document.getElementById("url").value;
    const urlCode = url.slice(-11);
    const content = document.getElementById("content");

    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id='+urlCode+'&key=AIzaSyCqo2xiP5iJKsjAC54l1ZZv0geDjpz9LWg')
    .then(res => res.json())
    .then(data => {
        content.innerHTML += `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${urlCode}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `
        console.log(data)
    })
}