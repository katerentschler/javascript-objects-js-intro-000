var playlist = new Object();
var playlist = {artistName:songTitle};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
