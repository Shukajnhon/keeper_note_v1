//
import React from 'react';
// import { ReactDOM } from 'react';

import Avatar from './Avatar';
import Detail from './Detail';

function Card(props) {
    // console.log(props)

    return (
        <div className='card'>
            <div className='top'>
                <h2 className='card-title name'>{props.name}</h2>
                <Avatar img={props.img} />
            </div>
            <div className='card-body info'>
                <Detail
                    detailInfo={props.tel}
                />
                <Detail
                    detailInfo={props.email}
                />
                {/* <p className='card-text'>{props.email}</p> */}
            </div>

        </div>
    )
}

export default Card;