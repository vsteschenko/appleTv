import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const Logo = () => {
    const apple = <FontAwesomeIcon icon={faApple} />;
    return (
        <>
            <div className="Apple">      
                {apple}TV+
            </div>
        </>
    )
};
export default Logo;