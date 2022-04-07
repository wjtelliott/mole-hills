import { useEffect, useState } from 'react';
//import moleImg from '';

function Mole(props) {

    const [isHiding, setIsHiding] = useState(true);

    const moleClicked = () => {
        if (isHiding) return;
        setIsHiding(true);
        props.handleClick();
    };

    useEffect(() => {
        const randSeconds = Math.floor(Math.random() * 1200) + 400;
        const timer = setTimeout(() => setIsHiding(!isHiding), randSeconds);

        return () => clearTimeout(timer);
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