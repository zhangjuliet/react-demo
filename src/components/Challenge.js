import Popup from "./Popup";
import Backdrop from "./Backdrop";

import { useState } from 'react';

function Challenge(props){
    const [isOpen, setIsOpen] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    function submitChall()
    {
        setIsSolved(true);
    }

    function closePopup()
    {
        setIsOpen(false);
    }

    function viewHandler()
    {
        setIsOpen(true);
    }

    return(
        <div className={isSolved ? 'chall-solved' : 'chall'}>
        <h2>{props.name}</h2>
        <div className='actions'>
          <button className='button' onClick={viewHandler}>view</button>
        </div>
        {isOpen ? <Popup close={closePopup} submit={submitChall}/> : null}
        {isOpen ? <Backdrop close={closePopup}/> : null}
      </div>
    );
}

export default Challenge;