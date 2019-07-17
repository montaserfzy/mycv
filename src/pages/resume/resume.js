import React from "react";
import './resume.scss';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {connect} from 'react-redux';
import Header from "../../components/header/header";
import {Skills, Education, Experience} from '../../common/data';

class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }


    }

    componentWillMount() {
    }

    componentDidMount() {
    }


    render() {
        return (
            <section className={'resume'} data-component="main-class">
                <div className={'container'}>
                    <Header title={'Resume'} note={'+6 Years of Experience'}/>
                    <div className={'content'}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 subpage-block  mb-5">
                                <div className="block-title">
                                    <h3>Experience</h3>
                                </div>
                                <div className="timeline">
                                    {
                                        Experience.map((item, index) => {
                                            return (
                                                <div key={index} className="timeline-event te-primary mt-4">
                                                    <h5 className="event-date">{item.date}</h5>
                                                    <h4 className="event-name">{item.position}</h4>
                                                    <span className="event-description">{item.companyName}</span>
                                                    <p>{item.note}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 subpage-block">
                                <div className="block-title">
                                    <h3>Skills</h3>
                                </div>
                                <div className="skills-info">
                                    {
                                        Skills.map((item, index) => {
                                            return (
                                                <div className={'mt-4'} key={index}>
                                                    <h4>{item.name}</h4>
                                                    <div key={index} className="skill-container">
                                                        <ProgressBar now={item.value} className={'skill-container'}/>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-6 subpage-block mt-5">
                                <div className="block-title">
                                    <h3>Educations</h3>
                                </div>
                                <div className="timeline">
                                    {
                                        Education.map((item, index) => {
                                            return (
                                                <div key={index} className="timeline-event te-primary mt-4">
                                                    <h5 className="event-date">{item.date}</h5>
                                                    <h4 className="event-name">{item.position}</h4>
                                                    <span className="event-description">{item.companyName}</span>
                                                    <p>{item.note}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-6 subpage-block mt-5">
                                <div className="block-title">
                                    <a className="button btn-send" target={'_blank'} href={'https://drive.google.com/file/d/1Hehz0TEI5z3m3ihfcUHGUMjFdgVSJ_js/view?usp=sharing'}> Open CV File</a>
                                </div>
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Resume)
//https://docs.google.com/document/d/1U3XEkOz37T_R7r4HkZ7CBn5lk8OCs1AxZ-OKKLKbokI/edit