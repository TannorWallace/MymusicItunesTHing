import ItunesService from "./itunes-service.js";
import Song from "../../models/Song.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)
  let songs = itunesService.Songs
  let songElem = document.querySelector("#songs")
  let template = ""
  songs.forEach(song => { template += song.Template })
  songElem.innerHTML = template

}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    console.log("wheres the music?")
    itunesService.addSubscriber("songs", drawSongs)
    drawSongs()
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(event) {
    event.preventDefault();
    var artist = event.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}

export default ItunesController
