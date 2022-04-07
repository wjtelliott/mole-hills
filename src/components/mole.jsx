import { useEffect, useState } from 'react';

function Mole(props) {

    const [isHiding, setIsHiding] = useState(true);

    const moleClicked = () => {
        // Guard clause. Is this mole visible?
        if (isHiding) return;

        // Hide the mole, handle the parent click
        setIsHiding(true);
        props.handleClick();
    };

    useEffect(() => {
        const randSeconds = Math.floor(Math.random() * 1200) + 400;

        // Set a timer for the random seconds, and flip/flop the mole's hiding value
        const timer = setTimeout(() => setIsHiding(!isHiding), randSeconds);

        return () => clearTimeout(timer);

        // This effect will 'call itself' immediately after the internal timer finishes
    }, [isHiding]);

    return (
        <div>
            <img
            src={ isHiding ? '/molehill.PNG' : '/mole.PNG'}
            onClick={moleClicked} />
        </div>
    );

}
export default Mole;