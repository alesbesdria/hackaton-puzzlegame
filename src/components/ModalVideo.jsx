import { useState } from 'react';
import '../css/ModalVideo.css';

export default function ModalVideo() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [themeUnlock, setThemeUnlock] = useState({
    lotus: true,
    beach: true,
    cascade: true,
    meditation: true,
  });

  const handleButtonClick = (theme) => {
    if (themeUnlock[theme]) {
      setIsVideoVisible(true); 
      setVideoUrl(`/themes/${theme}.mp4`);
    }
  };

  return (
    <div>
      <div>
      <div className="button-container">
        <button className='btn' onClick={() => handleButtonClick('lotus')} style={{backgroundColor:'#E8B4B8'}}>Lotus</button>
        <button className='btn' onClick={() => handleButtonClick('beach')} style={{backgroundColor:'#FCE79C'}}>Plage</button>
        <button className='btn' onClick={() => handleButtonClick('cascade')} style={{backgroundColor:'#A7C7E7'}}>Cascade</button>
        <button className='btn' onClick={() => handleButtonClick('meditation')} style={{backgroundColor:'#A7D7C5'}}>Méditation</button>
      </div>
        
        {isVideoVisible && (
          <div className="video-container">
            <video
              src={videoUrl}
              autoPlay
              controls
              width="75%"
              height="auto"
            />
        <button
          className="modal-video-close-button"
          onClick={() => setIsVideoVisible(false)} 
        >
          x
        </button>
          </div>
        )}

      </div>
    </div>
  );
}
