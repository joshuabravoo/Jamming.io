import React, { useCallback } from "react";
import "./Playlist.css";
import TrackList from "../Tracklist/Tracklist";

function Playlist(props) {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        }, 
        [props.onNameChange]
    );

    return (
        <div class="Playlist">
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <TrackList tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} />
            <button className="Playlist-save" onClick={props.onSave}>
                Save To Spotify
            </button>
        </div>
    );
}

export default Playlist;