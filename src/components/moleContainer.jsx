import Mole from './mole'

function MoleContainer (props) {

    const handleClick = () => props.setScore(props.score + 1);

    return (
            <Mole handleClick={handleClick} />
    );
}
export default MoleContainer;