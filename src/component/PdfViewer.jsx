import React from 'react';
import '../mycss.css';
import '../App.css';

class PdfViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlPdf: props.urlPdf,
            urlThumb: props.urlThumb,

        };
    }

    sharePdf = () => {
        console.log(urlPdf);
        const { urlPdf } = this.state;
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


        document.getElementById('mg_fl').style.display = 'block';
        document.getElementById('re_val').innerHTML = scl_m;
        document.getElementById('front_t').style.display = 'none';
    };

    render() {
        const { urlPdf } = this.state;

        return (
            <div>

                <iframe id='iFrame1' src={urlPdf}></iframe>
                <div id='fr_tmg' style={{ display: 'none' }}></div>
                <button onClick={this.sharePdf}>Share PDF</button>
                <div id='mg_fl' style={{ display: 'none' }}></div>
                <div id='re_val'></div>
                <div id='front_t' style={{ display: 'block' }}></div>
            </div>
        );
    }
}

export default PdfViewer;
