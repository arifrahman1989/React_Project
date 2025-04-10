import React from 'react';
import '../CSS/player.css';
import { useState, useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link } from 'react-router-dom';



const ticks = Array.from(Array(10));


function Player(){
    const [playing, setPlaying] = useState(false);
    const animation = useRef(null);

    const handleClick = () => {
        playing ? animation.current.pause() : animation.current.play();
        setPlaying(!playing);
      };

      useEffect(() => {
        animation.current = anime.timeline({
          direction: "alternate",
          loop: true,
          autoplay: false,
          easing: "easeInOutSine",
        });

        for (const tick in ticks) {
            animation.current.add(
              {
                targets: `.point li:nth-child(${Number(tick) + 1})`,
                scaleY: 1.5 + Math.random() * 4,
                duration: 300 + Math.random() * 300
              },
              Math.random() * 600
            );
          }
        }, []);

    return(
        <div className='start'>
          <h2 className='topSection'>Music Player</h2>
            <ul className='point'>
            {ticks.map((_, i) => (
          <li key={i} />
        ))}
            </ul>
            <button className='my-btn' onClick={handleClick}>{playing ? 'Pause': 'Play'}</button>
            <Link to='/' className='btn btn-success mt-3'>Back</Link>
        </div>
        
    )
}
export default Player;

//www.upbeatcode.com/react/how-to-use-anime-js-in-react/#:~:text=Can%20We%20Use%20Anime%20Js,on%20top%20of%20Anime%20JS.