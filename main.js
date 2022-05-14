let movie = { nazov: "", rok: "", herec: "" };

let movies = [];
console.log(movies);

function fAdd() {
  movie.nazov = document.getElementById("nazov").value;
  movie.rok = document.getElementById("rok").value;
  movie.herec = document.getElementById("herec").value;
  movies.push(movie);
  console.log(movies);
  console.log("******* Aktuálny zoznam filmov *******");
  for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
  }
}
function fDel() {
  movies.pop();
  console.log(movies);
  console.log("******* Aktuálny zoznam filmov *******");
  for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
  }
}

function fDelAll() {
  for (let i = movies.length; i > 0; i--) {
    movies.pop();
  }
  console.log(movies);
  console.log("******* Aktuálny zoznam filmov *******");
  for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
  }
}

/*
function fThrough() {
  for ((i = 0), i > movies.length; i++) {
    console.log(movies[i]);
  }
}
*/
