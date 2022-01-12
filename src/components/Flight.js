import './Flight.css';

const Flight = (props) => {
    const {item: {mission_name, launch_year, links: {mission_patch}}}=props;
    return (
        <div className={'cardFlight'}>
            {mission_name} - {launch_year}
            <img className={'imgFlight'} src={mission_patch} alt="mission_patch"/>
        </div>
    );
};

export default Flight;