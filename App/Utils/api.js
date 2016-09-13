var api = {
  getMarkers(){
    url = 'https://map-catcher.firebaseio.com/markers.json'
    return fetch(url).then((res) => res.json())
  },
  addMarker(latitude, longitude){
    url = 'https://map-catcher.firebaseio.com/markers.json'
    body = {
      latitude,
      longitude
    }
    return fetch(url, {
      method: 'post',
      body:JSON.stringify(body)
    }).then((res) => res.json());
  }
}


// addNote(username, note){
//   username = username.toLowerCase().trim();
//   var url = `https://github-notetaker-ada57.firebaseio.com/${username}.json`;
//   return fetch(url,{
//   method: 'post',
//   body: JSON.stringify(note)
// }).then((res) => res.json());
// }
export default api;
