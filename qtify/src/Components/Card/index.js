import './card.css';

const Card = ({imgSrc,followersCount,label}) => {
    return (
        <div className='card-wrapper'>
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
        </div>
    )
}

export default Card;