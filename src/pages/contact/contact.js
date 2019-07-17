import React from "react";
import './contact.scss';
import {connect} from 'react-redux';
import Header from "../../components/header/header";

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <section className={'contact'} data-component="main-class">
                <div className={'container'}>
                    <Header title={'Contact'} note={'Get in Touch'}/>
                    <div className={'content'}>
                        <div className={'row'}>
                            <div className="col-sm-6 col-md-6 subpage-block">
                                <div className="block-title mb-3">
                                    <h3>Get in Touch</h3>
                                </div>
                                <p>
                                    I am a highly motivated individual with strong work ethics and I enjoy nothing less
                                    then a challenge. I’ve worked with companies on numerous projects.
                                </p>
                                <p>
                                    I have a strong desire to learn more about new forms of web development and software
                                    engineering.
                                </p>
                                <div className="contact-info-block">
                                    <div className="ci-icon">
                                        <i className="form-control-icon fa fa-map-marker"></i>
                                    </div>
                                    <div className="ci-text">
                                        <h5>Airport Street, Amman, Jordan</h5>
                                    </div>
                                </div>
                                <div className="contact-info-block">
                                    <div className="ci-icon">
                                        <i className="form-control-icon fa fa-envelope"></i>
                                    </div>
                                    <div className="ci-text">
                                        <h5>montaserfzy@gmail.com</h5>
                                    </div>
                                </div>
                                <div className="contact-info-block">
                                    <div className="ci-icon">
                                        <i className="form-control-icon fa fa-phone"></i>
                                    </div>
                                    <div className="ci-text">
                                        <h5>+962797590040</h5>
                                    </div>
                                </div>
                                <div className="contact-info-block">
                                    <div className="ci-icon">
                                        <i className="form-control-icon fa fa-skype"></i>
                                    </div>
                                    <div className="ci-text">
                                        <h5>MMohesen</h5>
                                    </div>
                                </div>
                                <div className="contact-info-block">
                                    <div className="ci-icon">
                                        <i className="form-control-icon fa fa-check-circle"></i>
                                    </div>
                                    <div className="ci-text">
                                        <h5>Full Time Available</h5>
                                    </div>
                                </div>
                            </div>
                            {
                                false &&
                                <div className="col-sm-6 col-md-6 subpage-block">
                                    <div className="block-title mb-3">
                                        <h3>Contact Form</h3>
                                    </div>
                                    <form id="contact-form" method="post" action="contact_form/contact_form.php"
                                          noValidate="true">

                                        <div className="messages"></div>

                                        <div className="controls">
                                            <div className="form-group">
                                                <input id="form_name" type="text" name="name" className="form-control"
                                                       placeholder="Full Name" required="required"
                                                       data-error="Name is required."/>
                                                <div className="form-control-border"></div>
                                                <i className="form-control-icon fa fa-user"></i>
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group">
                                                <input id="form_email" type="email" name="email"
                                                       className="form-control"
                                                       placeholder="Email Address" required="required"
                                                       data-error="Valid email is required."/>
                                                <div className="form-control-border"></div>
                                                <i className="form-control-icon fa fa-envelope"></i>
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group">
                                        <textarea id="form_message" name="message" className="form-control"
                                                  placeholder="Message for me" rows="4" required="required"
                                                  data-error="Please, leave me a message."></textarea>
                                                <div className="form-control-border"></div>
                                                <i className="form-control-icon fa fa-comment"></i>
                                                <div className="help-block with-errors"></div>
                                            </div>


                                            <input type="submit" className="button btn-send disabled"
                                                   value="Send message"/>
                                        </div>
                                    </form>
                                </div>
                            }

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

export default connect(mapStateToProps, mapDispatchToProps)(Contact)