import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: "358px", height: '180px' }}
        />

      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}/>
    </Card>
  )
}

export default VideoCard
