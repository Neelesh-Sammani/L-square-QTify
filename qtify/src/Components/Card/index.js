// import { Tooltip } from '@mui/material';
import './card.css';

const Card = ({imgSrc,followersCount,label}) => {
    return (
        <div className='card-wrapper'>
            {/* <Tooltip title='songs'> */}
            <div className='card'>
                <div className='card-img-frame'>
                    <img src={imgSrc} alt='card'/>
                </div>
                <div className='card-content'>
                    <span className='card-content-pill'>
                        {followersCount} Follows
                    </span>
                </div>
            </div>
            <p className='card-label'>{label}</p>
            {/* </Tooltip> */}
        </div>
    )
}

export default Card;