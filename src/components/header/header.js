import React from 'react';
import connect from "react-redux/es/connect/connect";
import './header.scss';
class Header extends React.Component{
    render(){
        return (
            <header className={'header'} >
                <h2 className="header-title">{this.props.title}</h2>
                <h5 className="section-description">{this.props.note}</h5>
            </header>
        )
    }
}


const MapDispatchToProps = (dispatch, oldProps) => {
    return {
        dispatch
    }
};
const MapStateToProps = ({userReducer}) => {
    return {
        userReducer
    }
};
export default connect(MapStateToProps, MapDispatchToProps)(Header);