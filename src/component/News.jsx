import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../mycss.css';
import '../App.css';
import PdfViewer from './PdfViewer';
import SideViews from './sideViews';

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [urlPdf, setUrlPdf] = useState('');
  const [urlThumb, setUrlThumb] = useState('');
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const fetchData = async () => {
    try {
      const apiURL = process.env.REACT_APP_API_URL + '/api/getNewsData';
      const token = process.env.REACT_APP_TOKEN;
      const requestBody = {

        lang_id: selectedLanguage.language_id
      };
      const response = await axios.post(apiURL, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news data:', error);
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const apiURL1 = 'http://localhost:58195/api/getlanguage';
        const token = process.env.REACT_APP_TOKEN;
        const requestBody = {};
        const response = await axios.post(apiURL1, requestBody, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        setLanguages(response.data);
        setSelectedLanguage(response.data[0]);
        console.log("hii", response.data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchLanguages();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedLanguage]);

  const handleLanguageChange = async (event) => {
    const selectedLanguageId = event.target.value;
    const selectedLang = languages.find(lang => lang.language_id === selectedLanguageId);
    setSelectedLanguage(selectedLang);

    if (selectedLanguageId === '1') {
      try {
        await fetchData();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const showFile = (pdfUrl, thumbUrl) => {
    setUrlPdf(pdfUrl);
    setUrlThumb(thumbUrl);
    const iframe = document.getElementById('iFrame1');
    iframe.src = pdfUrl;
    document.getElementById('md_dw').style.display = "none";
    iframe.style.display = "block";
  };
  useEffect(() => {

  })

  const handlePdfViewerClick = (pdfUrl, thumbUrl) => {
    setUrlPdf(pdfUrl);
    setUrlThumb(thumbUrl);
    console.log(pdfUrl, urlThumb);
    document.getElementById('md_dw').style.display = "none";
    document.getElementById('iFrame1').style.display = "block";
  };


  let datt, yr_link, mon_th, full_lnkk, url_pdf, url_pdf1, url_thumb, category_n;

  return (
    <div className="container">

      <ul className="breadcrumb">
        <li><a href="News.aspx">Home</a></li>
        <li><a href="#">News Articles</a></li>
        <li><a href="#"></a></li>
      </ul>
      <div className="container">
        <div className="M_yr">
          <div className="row marg_n">
            <div className="col-md-3 row marg_n">
              <div className="col-6">
                <label>Select Language</label>
              </div>
              <div className="col-6">
                <select
                  value={selectedLanguage.id}
                  onChange={handleLanguageChange}
                  className="form-control"
                >
                  {languages.map(lang => (
                    <option key={lang.language_id} value={lang.language_id}>{lang.language_name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div id="mgzine_w" />
            {data.length > 0 ? (
              data.map((item, index) => {
                const datte = item.publishDate;
                const dateParts = item.publishDate.split('-');
                const dateK = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
                const yr_link = dateK.getFullYear();
                const mon_th = dateK.toLocaleDateString('en-US', { month: 'short' }).toLowerCase();
                const dateFormat = dateK.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
                const full_lnkk = `${yr_link}/${mon_th}`;
                const i_lnkk = item.StoryFile ? item.StoryFile.split('.') : [];

                const url_pdf1 = `https://newindiasamachar.pib.gov.in/WriteReadData/story/${full_lnkk}/${item.MagFile}`;
                const url_pdf = `https://newindiasamachar.pib.gov.in/WriteReadData/story/${full_lnkk}/${item.StoryFile}`;
                url_thumb = `https://newindiasamachar.pib.gov.in/WriteReadData/Magazine/${full_lnkk}/${item.thumbFile}`;
                const category_n = item.Category_name;
                //console.log(url_thumb);


                return (
                  <div key={index} className="fl_x">
                    <div className="col-2 pd_m">
                      <div className="card lft_m">
                        <div className="card-body">{index + 1}</div>
                      </div>
                    </div>
                    <div className="col-10 pd_m">
                      <div className="card rgt_m">
                        <div className="card-body f_bd" onClick={() => showFile(url_pdf, url_thumb)}>
                          {category_n}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No data available</div>
            )}
          </div>
          {console.log(urlThumb)}
          <div className="col-md-8 cont" style={{ position: 'relative' }}>
            <div id='md_dw' style={{ display: 'block' }} >
              <div className='md_dw' >
                <a href={url_pdf1} className='dwn_n' download>
                  Download <i className='fa fa-download'></i>
                </a>
              </div>
              <img src={url_thumb} alt='' width='100%' height='auto' className='im_in' />
            </div>
            <iframe id="iFrame1" style={{ display: 'none' }} src={urlPdf} class="fmr_rr"></iframe>
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
        </div>
      </div>
    </div>
  )
}

export default News;
