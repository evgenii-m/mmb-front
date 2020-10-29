import './ArtistPanelComponent.css'
import './../component/library/ListComponentStyles.css'
import React from 'react'
import { useParams } from 'react-router-dom';
import {$ArtistService} from "../service/ArtistService";

interface Props {
    services: $ArtistService
}

function ArtistPanelComponent(props: Props) {
    let { artistId } = useParams();
    let artistData = props.services.artistService.getArtistDataById(artistId);

    return (
        <div className="artist-panel">
            {artistData &&
            <div>
                <div className="header-title">{artistData.name}</div>
                <div className="header-image-container">
                    <img src={artistData.imageUrl} alt="Image"/>
                </div>
                <div className="header-info-container">
                    <div className="artist-listening-count line-bold-italic">Listening count: {artistData.listeningCount}</div>
                    {artistData.tags &&
                    <div>
                        Tags:
                        <ul className="tags-container">
                            {artistData.tags.map((tag) => <li><a href="#/library/artists">#{tag}</a></li>)}
                        </ul>
                    </div>
                    }
                    {artistData.lastFmLink &&
                    <div className="lookup-link-container">
                        <a href={artistData.lastFmLink}>Look up on last.fm</a>
                    </div>
                    }
                </div>
            </div>
            }
        </div>
    )
}

export default ArtistPanelComponent