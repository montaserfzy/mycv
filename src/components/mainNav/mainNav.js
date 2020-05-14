import React from 'react';
import {Nav as NavItem, Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import './nav.scss';
import {withRouter} from "react-router-dom";
import {setNavigationState} from '../../actions/user';

const logo = require('../../assets/profile/muntasir.jpeg');

class MainNav extends React.Component {
    openPage(page) {
        this.props.history.push(page);
        this.props.dispatch(setNavigationState(false));
    };

    isActive(page){
        let pathname = this.props.history.location.pathname.replace('/', '');
        if (page.toLowerCase() === pathname.toLowerCase())
            return 'active';
        return '';
    };

    openMobileNav = ()=>{
        this.props.dispatch(setNavigationState(!this.props.userReducer.isOpenNav))
    };

    render() {
        let {isOpenNav} = this.props.userReducer;

        return (
            <div>
                <Navbar className='horizontal-nav'>
                    <Navbar.Collapse id="basic-navbar-nav" className={'horizontal-navbar-container'}>
                        <label className={'nav-bar-username'}>
                            Muntaser Almuhasen
                        </label>
                        <div className={'nav-bar-button'} onClick={this.openMobileNav}>
                            <i className="fa fa-bars"></i>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar className={`vertical-nav ${isOpenNav ? 'open' : ''}`}>
                    <Navbar.Brand>
                        <div className='my-avatar'>
                            <img src={logo} className={'avatar-logo'} title={'Muntaser profile'} alt='Muntaser profile'/>
                        </div>
                        <div className='my-name'>
                            <h1>Muntaser Almuhasen</h1>
                            <p>Senior Frontend Engineer</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className={'navbar-container'}>
                        <NavItem className="mr-auto vertical-items">
                            <button onClick={() => this.openPage("/")}
                                    className={`item-link ${this.isActive('')}`}>Home
                            </button>
                            <button onClick={() => this.openPage("/aboutMe")}
                                    className={`item-link ${this.isActive('AboutMe')}`}>About Me
                            </button>
                            <button onClick={() => this.openPage("/resume")}
                                    className={`item-link ${this.isActive('Resume')}`}>Resume
                            </button>
                            {
                                false &&
                                <button onClick={() => this.openPage("/portfolio")}
                                        className={`item-link ${this.isActive('Portfolio')}`}>Portfolio
                                </button>
                            }

                            <button onClick={() => this.openPage("/contact")}
                                    className={`item-link ${this.isActive('Contact')}`}>Contact
                            </button>
                        </NavItem>
                    </Navbar.Collapse>
                    <ul className="social-links">
                        <li>
                            <a className="tip social-button"
                               href="https://www.linkedin.com/in/mmohesen/" title="LinkedIn"
                               target='_blank'
                               rel="noopener noreferrer">
                                <i className="fa fa-linkedin lin"></i>

                            </a>
                        </li>
                        <li>
                            <a className="tip social-button" href="https://www.facebook.com/montaserfzy"
                               title="Facebook" target='_blank' rel="noopener noreferrer">
                                <i className="fa fa-facebook-square fb"></i>
                            </a>
                        </li>
                        <li>
                            <a className="tip social-button" href="mailto:montaserfzy@gmail.com" title="Google Plus"
                               target='_blank' rel="noopener noreferrer">
                                <i className="fa fa-google-plus-square text-danger"></i>
                            </a>
                        </li>
                    </ul>
                </Navbar>
            </div>
        )
    };
};


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
export default withRouter(connect(MapStateToProps, MapDispatchToProps)(MainNav));
