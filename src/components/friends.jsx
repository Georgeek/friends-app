import React from 'react';

function Friend(props) {
    return (
        <div className="friend--wrap">
            <div className="friend--photo">
                <img className="" src={props.img} alt=""/>
            </div>
            <div className="friend--info">
                <div className="friend--info__title">hello {props.name}</div>
                <div className="friend--info__description">large awesome text about this good person for science!! Awesome description about {props.name}</div>
                <button className="some--button">Написать сообщение {props.name}</button>
            </div>
        </div>
    );
}

export default Friend;