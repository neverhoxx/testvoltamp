import React from "react";
import settings from '../../images/settings-2-svgrepo-com.svg';

const ProductCharacteristics = ({ characteristics }) => {
    return (
        <div className="characteristics-block">
            <div className="characteristics-block-title">
                <h1>Omadused</h1> <img src={settings} alt="" />
            </div>
            <div className="characteristics">
                <ul>
                    {Object.entries(characteristics).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductCharacteristics;
