var playlist = {Beyonce: "All the single ladies"}

function updatePlaylist(playlist, artist, title){
  playlist.artist = title
  return playlist
}
updatePlaylist(playlist, "fergie", "myhump")
console.log(playlist)