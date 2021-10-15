import React from 'react';

const Expert = ({expert}) => {
    const {name, expertize, img} = expert;
    return (
        <div className = 'col-lg-4 col-md-6 col-sm-12'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className = 'text-danger'>{expertize}</p>
        </div>
    );
};

export default Expert;