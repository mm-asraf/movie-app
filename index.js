


async function getmovies() {

    var passkey = document.getElementById("movie").value

    console.log(passkey)
    //data.Search={};
    try {
        let res = await fetch(`https://www.omdbapi.com/?apikey=9edee339&s=${passkey}`)
        let data = await res.json();

        console.log("data", data.Search);


        var movielists = document.getElementById("movies");
        movielists.innerHTML = null;

        for (var i = 0; i < data.Search.length; i++) {


            var div = document.createElement("div");
            div.setAttribute("class", "divstyle");
            div.setAttribute("style", "color:#FFFFFF;text-align:center;")

            var title = document.createElement("p");
            title.innerHTML = data.Search[i].Title;
            title.setAttribute("style", "font-size:25px;color:#4FC3F7;font-style:bold")


            var year = document.createElement("p");
            year.innerHTML = data.Search[i].Year;
            div.setAttribute("style", "color:#00E5FF;text-align:center;font-size:18px")


            var type = document.createElement("p");
            type.innerHTML = data.Search[i].Type;


            var image = document.createElement("img");
            image.src = data.Search[i].Poster;
            image.setAttribute("style", "width:300px;height:370px;border:10px solid grey;border-radius:6px;")


            div.append(image, title, year, type);
            movielists.append(div);


        }

    }

    catch (err) {
        let img = document.createElement("img");
        img.src = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
        img.setAttribute("style", "margin-left:500px")
        if (err) {
            movies.append(img);
        }

    }
}




