import React from 'react';
import '../common/style.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {AboutMe, Contact, Home, Portfolio, Resume} from '../pages/index';
import MainNav from "../components/mainNav/mainNav";

class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isActive = to => (match, location) => location.pathname.includes(to);
        return (
            <BrowserRouter>
                <MainNav {...this.props} />
                <Route render={({location}) => {
                    const {pathname, key} = location
                    return (
                        <Switch location={location}>
                            <Route exact path="/home" isActive={isActive('main')} component={Home}/>
                            <Route exact path="/aboutMe" isActive={isActive('aboutMe')} component={AboutMe}/>
                            <Route exact path="/resume" isActive={isActive('resume')} component={Resume}/>
                            <Route exact path="/portfolio" isActive={isActive('portfolio')}
                                   component={Portfolio}/>
                            <Route exact path="/contact" isActive={isActive('contact')} component={Contact}/>
                            <Route component={Home}/>
                        </Switch>
                    )
                }}/>
            </BrowserRouter>
        )
    }
}

export default Router;