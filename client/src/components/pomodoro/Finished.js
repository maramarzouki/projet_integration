import React, {useEffect} from 'react'
import Confetti from 'react-confetti';
import useSound from 'use-sound';

import alarmclock from '../../sound/alarmclock2.mp3';

function Finished() {
    let width = window.innerWidth;

    const [play] = useSound(alarmclock, {volume: .25});

    //useeffect will play this sound just once , when finished component showed in screen  
    useEffect(()=>{
        play();
    }, [play])
  return (

    <div style={{textAlign:'center'}}>
        <Confetti width={width}/>
        <p style={{fontSize:"15px"}}>Congratulations 🎊, enjoy your break now</p>
    </div>
  )
}

export default Finished