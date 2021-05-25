

let songobj = {
  songname: "Happy New Year",
  artistname: "Abba",
  length: "4:28",
  image:
    "https://m.media-amazon.com/images/M/MV5BZTM5ZTllNmYtMGUxMC00N2Y0LWJkZGMtZDc3YzY0NjhiOWExXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
  link: "https://www.youtube.com/watch?v=vS2lWkn4g9g"
};


let songobj1 = {
  songname: "All I Want For Christmas Is You",
  artistname: "Mariah Carey",
  length: "4:03",
  image: "https://i.ytimg.com/vi/aAkMkVFwAoo/maxresdefault.jpg",
  link: "https://www.youtube.com/watch?v=aAkMkVFwAoo"
};

let multipleSongs = [songobj, songobj1];

$("button").click(function() {
  let inputSong = $("#songName").val();
  let inputArtist = $("#artistName").val();
  let inputSongLength = $("#songLength").val();
  let inputSongImage = $("#songImage").val();
  let inputSongLink = $("#songLink").val();
  
  let songobj2 = {
    songname: inputSong,
    artistname: inputArtist,
    length: inputSongLength,
    image: inputSongImage,
    link: inputSongLink
  };
  
  $(".songs").empty();
  $(".artists").empty();
  $(".songlength").empty();
  $(".songimages").empty();
  $(".songlink").empty();
  
 multipleSongs.push(songobj2);
  
  for (let song of multipleSongs) {
    $(".songs").append("<p>" +song.songname+ "</p>");
    $(".artists").append("<p>" + song.artistname + "</p>");
    $(".songlength").append("<p>" + song.length + "</p>");
    $(".songimages").append("<p>"+`<img src =${song.image}>`+"</p>");
    $(".songlink").append("<p>" + song.link + "</p>");
  }
  
  console.log(multipleSongs);
});
//use attr to change src of image
