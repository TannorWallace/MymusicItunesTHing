export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    // need a template use a Bootstrap card thing?
    get Template() {
        return `
  
           
                 <div class="card col-3 m-1">
                    <div class="card-body border border-dark  ">
                        <img src="${this.albumArt}" alt="Album Art"> 
                        <h5 class="card-title">Artist:${this.artist}</h5>
                        <h5 class="card-text ">Title:${this.title}</h5>
                        <h5 class="card-text">Collection:${this.collection}</h5> 
                        <h5 class="card-text">Price:${this.price}</h5>
                      Preview: <audio controls src="${this.preview}"></audio>

                    </div>
                 </div>
            
        `
    }
}