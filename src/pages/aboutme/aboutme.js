import React from "react";
import './aboutme.scss';
import {connect} from 'react-redux';
import Header from "../../components/header/header";
import Carousel from 'react-bootstrap/Carousel'
import blank_bg from '../../assets/images/blank_bg.png';
import MenaITech from '../../assets/icons/menaitech.png';
import mbc from '../../assets/icons/mbc.png';
import etq from '../../assets/icons/etq.svg';
import homie from '../../assets/icons/homie.png';
import marker from '../../assets/icons/marker.png';
import GoogleMapReact from 'google-map-react';
import {Companies, Reviewer} from '../../common/data';

const mapStyles = require('../../common/mapStyle.json')

class AboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            direction: '',
            activeIndex: '',
            center: {
                lat: 31.9539,
                lng: 35.9106
            },
            zoom: 16
        }

        this.handleSelect = this.handleSelect.bind(this);
    }


    componentWillMount() {
        let {center} = this.props;
        center = {
            lat: Companies[0].lat,
            lng: Companies[0].lng
        }
    }

    componentDidMount() {
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            activeIndex: selectedIndex,
            direction: e
        });
    };

    handleApiLoaded(map, maps) {
    }

    onMapParamsChange = ({setMapParams}) => ({center, zoom, bounds}) => {

        setMapParams({center, zoom, bounds});
    }


    render() {
        const MapDiv = ({text, link}) => {
            return (
                <div className={'marker-box'}>
                    <a href={link} target={'_blank'}>
                        <img src={marker} className={'marker-img'}/>
                        <div className={'marker-title'}>{text}</div>
                    </a>
                </div>
            )
        };
        let {activeIndex, direction} = this.state;
        return (
            <section className={'about-me'} data-component="main-class">
                <div className={'container'}>
                    <Header title={'About Me'} note={'Creativity, Hard Working and Self Learning'}/>
                    <div className={'content'}>
                        <div className="row">
                            <div className="col-sm-6 col-md-6 subpage-block">
                                <div className="general-info">
                                    <h3 className={'title'}>I am Senior FrontEnd Engineer at&nbsp;
                                        <a href={'http://www.homie.rent'} target={'_blank'}>Homie.rent</a></h3>
                                    <ul className={'skills-list'}>
                                        <li>Front-end development using latest HTML5 and CSS3 techniques, backed by
                                            jQuery and other Javascript frameworks to enable optimum user experience
                                            throughout the site.
                                        </li>
                                        <li>Working on legacy System to get the business done</li>
                                        <li>Build Chrome Ext. to help Homies team</li>
                                        <li>Build Website to help marketing team</li>
                                        <li>Build Admin Site to help the company managing rentals</li>
                                        <li>Add new features and Bugs fixes</li>
                                        <li>Created custom plugins, templates, and functions for our sites</li>
                                        <li>Executed and monitored standards for user interfaces and page design
                                            development
                                        </li>
                                        <li>Investigate frameworks, libraries and techniques to use on our system</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 subpage-block mt-5">
                                <div className="block-title mt-2 mb-2">
                                    <h3 className={'section-title'}>My Reviews</h3>
                                </div>
                                <Carousel activeIndex={activeIndex}
                                          direction={direction}
                                          interval={null}
                                          wrap={true}
                                          fade={true}
                                          keyboard={true}
                                          pauseOnHover={true}
                                          onSelect={this.handleSelect}>
                                    {
                                        Reviewer.map((review, index) => {
                                            return (
                                                <Carousel.Item key={index}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={blank_bg}
                                                    />
                                                    <Carousel.Caption>
                                                        <img src={review.image} className={'review-image'}
                                                             alt={review.name} title={`${review.name} personal photo`}/>
                                                        <h3 className={'review-name'}>{review.name}</h3>
                                                        <h5 className={'review-position'}>{review.position}</h5>
                                                        <p className={'review-note'}>{review.note}</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            )
                                        })
                                    }

                                </Carousel>
                            </div>
                        </div>
                        <div className={'row mt-5'} key={'3'}>
                            <div className="col-sm-12 col-md-12 subpage-block mt-5">
                                <div className="block-title mt-2 mb-2">
                                    <h3 className={'section-title'}>Companies</h3>
                                </div>
                                <div className="row dark-row">
                                    <div className="col-sm-4 col-md-3 subpage-block-images">
                                        <div className="client_block">
                                            <a href="https://www.menaitech.com/en/" target="_blank">
                                                <img src={MenaITech} alt="MenaITech" className={'company-logo'}
                                                     width="273px" height="129px"/>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-md-3  subpage-block-images">
                                        <div className="client_block">
                                            <a href="https://www.etq.com/" target="_blank">
                                                <img src={etq} alt={'etq'} className={'company-logo'} width="273px"
                                                     height="90px"/>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-md-3  subpage-block-images">
                                        <div className="client_block">
                                            <a href="https://www.mbc.net/" target="_blank">
                                                <img src={mbc} alt="mbc" className={'company-logo'} width="273px"
                                                     height="129px"/>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-md-3  subpage-block-images">
                                        <div className="client_block">
                                            <a href="https://www.homie.rent/" target="_blank">
                                                <img src={homie} alt="homie" className={'company-logo'} width="273px"
                                                     height="129px"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'row mt-5'} key={'4'}>
                            <div className="col-sm-12 col-md-12 subpage-block mt-5">
                                <div className="block-title mt-2 mb-2">
                                    <h3 className={'section-title'}>On Map</h3>
                                </div>
                                <div className={'google-map-box'} style={{height: '450px', width: '100%'}}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{key: 'AIzaSyBDDPW76s2PDSCZ49AeCenVyoVKfGY9TcM'}}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                        onChange={this.onMapParamsChange}
                                        defaultOptions={{
                                            disableDefaultUI: true, // disable default map UI
                                            draggable: true, // make map draggable
                                            keyboardShortcuts: false, // disable keyboard shortcuts
                                            scaleControl: true, // allow scale controle
                                            scrollwheel: true, // allow scroll wheel
                                            styles: mapStyles // change default map styles
                                        }}
                                        onGoogleApiLoaded={({map, maps}) => this.handleApiLoaded(map, maps)}
                                    >
                                        {
                                            Companies.map((company, index) => {
                                                return (
                                                    <MapDiv
                                                        key={index}
                                                        lat={company.lat}
                                                        lng={company.lng}
                                                        text={company.name}
                                                        link={company.link}
                                                    />
                                                )
                                            })
                                        }


                                    </GoogleMapReact>
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
        dispatch,
    }
};

const mapStateToProps = ({userReducer}) => {
    return {
        userReducer,
        center: {
            lat: parseFloat(Companies[0].lat),
            lng: parseFloat(Companies[0].lng)
        },
        zoom: 13,
        bounds: ''
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)