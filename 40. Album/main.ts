type Album = {
    name:string,
    album_name: string,
    tracks?: number,
}
function make_album(artist: string, album: string, noOfTracks?: number){
    let t: Album = {
        name: artist,
        album_name: album,
    }
    if(noOfTracks !== undefined){
        t.tracks = noOfTracks
    }
    console.log(t)
    return t
}
let album1 = make_album("Ustad Nusrat Fateh Ali khan", "Dil Pe Zakhm khaate Hain")
let album2 = make_album("Harris Glenn", "Divine")
let album3 = make_album("Chahat Fateh Ali Khan", "Bado Badi", 8)