import React from "react";
import './portfolio.scss';
import {connect} from 'react-redux';
import Header from "../../components/header/header";

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <section className={'portfolio'} data-component="main-class">
                <div className={'container'}>
                    <Header title={'Portfolio'} note={''}/>
                    <div className={'content'}>
                    </div>
                </div>
            </section>
        )
    }
}


const mapDispatchToProps = (dispatch, oldProps) => {
    return {
        dispatch
    }
};

const mapStateToProps = ({userReducer}) => {
    return {
        userReducer
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)