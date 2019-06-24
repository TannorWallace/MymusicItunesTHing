export default class Song {
    constructor(song) {
        this.title = song.trackName
        // NOTE  Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    // REVIEW  need a template use a Bootstrap card thing?
    get Template() {
        // FIXME  add popover
        return `
                
                 <div class="col-12 col-md-3  mb-1">
  
                    <div class="card border border-dark ">
                        <img class="center" src="${this.albumArt}" alt="Album Art"> 
                        <h5 class="card-title">Artist:${this.artist}</h5>
                        <h5 class="card-text ">Title:${this.title}</h5>
                        <h5 class="card-text text-truncate">Collection:${this.collection}</h5> 
                        <h5 class="card-text">Price:$${this.price}</h5>
                      Preview: <audio class="player" controls src="${this.preview}"></audio>

                    </div>
                 </div>
            
        `
    }
}