
import React, { useRef, useState } from 'react'
import './gallery.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import movie1 from '../assets/Gallery/movie1.mp4'
import ReactPlayer from 'react-player';


export default function Video() {
    const [Index, setIndex] = useState(0);
    const videoRefs = useRef([]);
  
    const handleSlide = (selectedIndex) => {
      // Pause the current video when navigating to another slide
      const currentVideo = videoRefs.current[Index];
      if (currentVideo && currentVideo.getInternalPlayer) {
        const player = currentVideo.getInternalPlayer();
        if (player && typeof player.pause === 'function') {
          player.pause();
        }
      }
      setIndex(selectedIndex);
    };
  
    const handleVideoRef = (ref, index) => {
      videoRefs.current[index] = ref;
    };
      const videos  = [        
          {
              id : 1,
              src: movie1,
              
          },
  
          {
              id : 2,
              src: movie1,
          },
      ]
  return (
    <>
            <div>
      <h1 className='h1 textSm0 text-center py-3 text-muted'>Wellcome to StayEase Gallery</h1>
      <Carousel Index={Index} onSelect={handleSlide} interval="5000000" className='container'>
        {videos.map((video, index) => (
          <Carousel.Item key={video.id}  >
            <ReactPlayer
              ref={(ref) => handleVideoRef(ref, index)}
              url={video.src}
              width="100%"
              height="auto"
              controls
              playing={index === Index}
            />
          </Carousel.Item>
        ))}
            </Carousel>
    </div>
    </>
  )
}
