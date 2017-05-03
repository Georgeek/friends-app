import React from 'react';

function Friend(props) {
    return (
        <div className="friend--wrap">
            <div className="friend--photo">
                <img className="" src={props.img} alt=""/>
            </div>
            <div className="friend--info">
                <div className="friend--info__title">hello {props.name}</div>
                <div className="friend--info__description">Awesome description about {props.name}</div>
                <button className="friend--info__btn">Написать сообщение {props.name}</button>
            </div>
        </div>
    );
}

export default Friend;