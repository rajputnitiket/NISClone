
import React from 'react';
import '../mycss.css';
import '../App.css';

class SideViews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlThumb: props.urlThumb,
            urlPdf: props.urlPdf,

        };
    }

    sharePdf = () => {
        console.log(urlPdf, urlThumb);
        const { urlPdf } = this.state;
        const { urlThumb } = this.state;
        const scl_m = (
            <div className='sticky-social'>
                <ul className='social'>
                    <li className='fb_b'>
                        <a href={'http://www.facebook.com/share.php?u=' + urlPdf} target='_blank'>
                            <i className='fa fa-facebook fa_a' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li className='twitter_r'>
                        <a href={'https://twitter.com/intent/tweet?url=' + urlPdf} target='_blank'>
                            <i className='fa fa-twitter fa_a' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li className='whatsapp_r'>
                        <a href={'https://api.whatsapp.com/send?text=' + urlPdf} target='_blank'>
                            <i className='fa fa-whatsapp fa_a' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li className='fa-envelope_r'>
                        <a href={'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=NEWINDIASAMACHAR&body=' + urlPdf + '&ui=2&tf=1&pli=1'} title='Share by Email' target='_blank'>
                            <i className='fa fa-envelope-o fa_a' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li className='fa-linkedin_r'>
                        <a href={'https://www.linkedin.com/shareArticle?mini=true&url=' + urlPdf + '&summary=My%20favorite%20developer%20program&source=LinkedIn'} target='_blank'>
                            <i className='fa fa-linkedin fa_a' aria-hidden='true'></i>
                        </a>
                    </li>
                </ul>
            </div>
        );



    };

    render() {
        const { urlPdf } = this.state;
        const { urlThumb } = this.state;

        return (
            <div>
                <div id='md_dw' className='md_dw'>
                    <a href={urlPdf} className='dwn_n' download>
                        Download <i className='fa fa-download'></i>
                    </a>
                </div>
                <img src={urlThumb} alt='' width='100%' height='auto' className='im_in' />

                <div id="mg_fl">
                    <div className="sticky-social">
                        <ul className="social">
                            <li>
                                <a href={`http://www.facebook.com/share.php?u=${urlPdf}`} target="_blank">
                                    <i className="fa fa-facebook fa_a" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href={`https://twitter.com/intent/tweet?url=${urlPdf}`} target="_blank">
                                    <i className="fa fa-twitter fa_a" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href={`https://api.whatsapp.com/send?text=${urlPdf}`} target="_blank">
                                    <i className="fa fa-whatsapp fa_a" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=NEWINDIASAMACHAR&body=${urlPdf}&ui=2&tf=1&pli=1`} title="Share by Email" target="_blank">
                                    <i className="fa fa-envelope-o fa_a" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${urlPdf}&summary=My%20favorite%20developer%20program&source=LinkedIn`} target="_blank">
                                    <i className="fa fa-linkedin fa_a" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideViews;
