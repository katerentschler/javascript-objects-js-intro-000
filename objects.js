var playlist = new Object();
var playlist = {Shakira:"Hips Don't Lie"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.[artistName];
  return playlist;
}
