import React from 'react';
import './SongCard.css';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import {getSong} from "../../functions/songs";
import keys from "../../api/keys/keys";

// = {title, description, tags, channelTitle, videoId, thumbnail}
async function PlaySong(data) {
    getSong(keys.youtube, data.id).then(value => {
        console.log(value)
    })
}

function SongCard(props) {
    const video_ = props.video.snippet;
    return (
        <Card className={'SongCard'} onClick={() => PlaySong(props.video)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={video_.thumbnails.standard.url}
                    title={video_.title}
                    loading={'lazy'}

                />
                <CardContent className={'text-left'}>
                    <Typography gutterBottom variant="h6" component="p" className={'text-truncate'}>
                        {video_.title.slice(0, 70) + " ..."}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={'text-truncate'}>
                        {video_.description.slice(0, 70) + " ..."}
                        <span className={'text-muted'}>
                        {video_.channelTitle}
                    </span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

SongCard.propTypes = {};

SongCard.defaultProps = {};

export default SongCard;