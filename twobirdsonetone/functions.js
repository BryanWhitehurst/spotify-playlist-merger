function retrieveTokens(){
    let arr = [];
    $.ajax({
            type: 'GET',
            url: "retrieveTokens.php",
            success: function(data){
                arr = JSON.parse(data);
            },
            async:false
        });
    return arr;
}

function deleteTokens(){
    $.ajax({
            type: 'POST',
            url: "deletetokens.php",
            success: function(data){
            },
            async:false
        });
}

function getUserID(access_token){
    let usr1_id;
    $.ajax({ 
        type : "GET", 
        url : "https://api.spotify.com/v1/me", 
        headers: {'Authorization': 'Bearer ' + access_token},
        async: false,
        success : function(result) { 
            usr1_id = result.id;
        }, 
        error : function(result) { 
        //handle the error 
        } 
    });
    return usr1_id;
}

// sends an api get request for the user's playlists, saves each playlist object into a playlists array and returns that array 
function getUserPlaylists(access_token){
    let playlists = []; 
    $.ajax({ 
        type : "GET", 
        url : "https://api.spotify.com/v1/me/playlists", 
        headers: {'Authorization': 'Bearer ' + access_token},
        success : function(result) { 
            result.items.forEach(playlist =>{
                playlists.push(playlist.id);
            })                        
        }, 
        async: false,
        error : function(result) { 
        //handle the error 
        } 
    });
    return playlists;
}

//takes playlistID param, sends request for tracks of a specified playlist
function getPlaylistLength(access_token, playlistID){
    let playlistLength;
    $.ajax({ 
        type : "GET", 
        url : `https://api.spotify.com/v1/playlists/${playlistID}/tracks`, 
        headers: {'Authorization': 'Bearer ' + access_token},
        success : function(result) { 
            playlistLength = result.total;                      
        }, 
        async: false,
        error : function(result) { 
        //handle the error 
        } 
    });
    return playlistLength;
}

function getPlaylistTracks(access_token, playlistID, offset = 0){
    let tracks = [];
    $.ajax({ 
        type : "GET", 
        url : `https://api.spotify.com/v1/playlists/${playlistID}/tracks?offset=${offset}`, 
        headers: {'Authorization': 'Bearer ' + access_token},
        success : function(result) { 
            result.items.forEach(trackObject =>{
                tracks.push(trackObject.uri);
            });                      
        }, 
        async: false,
        error : function(result) { 
        //handle the error 
        } 
    });
    return tracks;
}
//returns array of track ids in user's library
function getUserLibrary(access_token, offset = 0){
    let uris = [];
    $.ajax({ 
        type : "GET", 
        url : `https://api.spotify.com/v1/me/tracks?limit=50&offset=${offset}`, 
        headers: {'Authorization': 'Bearer ' + access_token},
        success : function(result) { 
            result.items.forEach(item =>{
                uris.push(item.track.uri);
            })                      
        }, 
        async: false,
        error : function(result) { 
        //handle the error 
        } 
    });
    return uris;
}

function getNumTracks(access_token){
    let numTracks;

    $.ajax({ 
        type : "GET", 
        url : `https://api.spotify.com/v1/me/tracks?limit=50`, 
        headers: {'Authorization': 'Bearer ' + access_token},
        success : function(result) { 
            numTracks = result.total;                   
        }, 
        async: false,
        error : function(result) { 
        //handle the error 
        } 
    });           

    return numTracks;
}

function createPlaylist(user_id, access_token){
    let playlist_id;
    $.ajax({ 
        type : "POST", 
        url : `https://api.spotify.com/v1/users/${user_id}/playlists`, 
        headers: {
           'Authorization': 'Bearer ' + access_token,
           'Content-Type': 'application/json'
         },
         data: JSON.stringify({name: 'TBOT Common Songs'}),

        success : function(result) { 
            playlist_id = result.id;
                                  
        }, 
        async: false,
        error : function(result) { 
            console.log(result);
        } 
    });
    return playlist_id;
}

function addTracks(playlist_id, songs, access_token){
    $.ajax({ 
        type : "POST", 
        url : `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, 
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-type':'application/json'
        },
        data: JSON.stringify({"uris": songs}),
        success : function(result) { 
        
                                  
        }, 
        async: false,
        error : function(result) { 
            console.log(result);
        } 
    });
}

function pausePlayback(deviceID, access_token){
    $.ajax({ 
            type : "PUT", 
            url : `https://api.spotify.com/v1/me/player/pause?device_id=${deviceID}`, 
            headers: {'Authorization': 'Bearer ' + access_token},
            success : function(result) { 
                                    
            }, 
            async: false,
            success: function(result){
                console.log(result);
            },
            error : function(result) { 
                console.log(result);
            } 
        });
}

    function startPlayback(deviceID, matchingTracks){
        $.ajax({ 
            type : "PUT", 
            url : `https://api.spotify.com/v1/me/player/play?device_id=${deviceID}`, 
            headers: {'Authorization': 'Bearer ' + token1},
            success : function(result) { 
                                  
            }, 
            data:JSON.stringify({"uris": matchingTracks}),
            async: false,
            success: function(result){

            },
            error : function(result) { 
                console.log(result);
            } 
        });
    }

    function getTotalTopTracks(access_token){
        let total;
        $.ajax({ 
            type : "GET", 
            url : `https://api.spotify.com/v1/me/top/tracks?limit=50`, 
            headers: {'Authorization': 'Bearer ' + access_token},
            success : function(result) { 
                total = result.total;               
            }, 
            async: false,
            error : function(result) { 
            console.log(result);
            } 
        });
        return total;      
    }

    function getTopTracks(access_token, offset = 0){
        let topTracks = [];
    
        $.ajax({ 
            type : "GET", 
            url : `https://api.spotify.com/v1/me/top/tracks?limit=50&offset=${offset}`, 
            headers: {'Authorization': 'Bearer ' + access_token},
            success : function(result) { 
                result.items.forEach(track =>{
                    topTracks.push(track.uri);
                })                   
            }, 
            async: false,
            error : function(result) { 
            console.log(result); 
            } 
        });           
    
        return topTracks;
    }