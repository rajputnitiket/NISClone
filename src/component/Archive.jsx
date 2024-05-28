import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../mycss.css';
import '../App.css'



const Archive = () => {
  const currentYr = new Date().getFullYear();
  const [data, setData] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [fortnight, setFortnight] = useState('01');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [selectedmonth, setSelectedMonth] = useState('')



  const handleFortnightChange = (e) => {
    setFortnight(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [fortnight])

  const handleMonthChange = (e) => {
    const currentMonth = new Date().getMonth() + 1;
    const currentMonthName = months[new Date().getMonth()];
    //const selectedMonthId = e.target.value !== '' ? e.target.value  : currentMonth;
    //const selectedMonthName = e.target.value !== '' ? months[e.target.value] : currentMonthName;
    const selectedMonthId = e.target.value;
    const selectedMonthName = months.selectedMonthId;
    setMonth(selectedMonthName);
    setSelectedMonth(selectedMonthId);
    console.log(selectedMonthName, selectedMonthId);

    if (selectedMonthId === '') {
      try {
        fetchData();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };



  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const fetchData = async () => {
    try {
      //console.log(year);
      const apiURL = process.env.REACT_APP_API_URL + '/api/getArchiveData';
      const token = process.env.REACT_APP_TOKEN;
      const requestBody = {

        lang_id: selectedLanguage.language_id,
        Date: fortnight,
        Month: selectedmonth,
        Year: year

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
        const apiURL1 = process.env.REACT_APP_API_URL + '/api/getlanguage';
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
        //console.log("hii", response.data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchLanguages();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedLanguage]);

  useEffect(() => {
    fetchData();
  }, [selectedmonth]);

  useEffect(() => {
    fetchData();
  }, [year]);

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

  const months = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(0, index);
    return date.toLocaleString('default', { month: 'long' });
  });



  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= currentYear - 3; i--) {
    years.push(i);
  }



  return (
    <>
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

            <div className="col-md-3 row marg_n">
              <div className="col-6">
                <label>Select FortNight </label>
              </div>
              <div className="col-6">
                <select className="form-control" value={fortnight} onChange={handleFortnightChange}>
                  <option value="01">1st</option>
                  <option value="16">2nd</option>
                </select>
              </div>
            </div>

            <div className="col-md-3 row marg_n">
              <div className="col-6">
                <label>Select Month </label>
              </div>
              <div className="col-6">
                <select className="form-control" value={month} onChange={handleMonthChange}>
                  <option value="">Select Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>{month}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-3 row marg_n">
              <div className="col-6">
                <label>Select Year </label>
              </div>
              <div className="col-6">
                <select className="form-control" value={year} onChange={handleYearChange}>
                  <option value="">Select Year</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='component'>
          <div id="mgzine_w">
            <ul className='align'>
              {data.length > 0 ? (
                data.map((rd, index) => {
                  const datte = rd.publishDate;
                  //console.log(datte);
                  const dateParts = rd.publishDate.split('-');
                  const dateK = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
                  const yr_link = dateK.getFullYear();

                  const mon_th = dateK.toLocaleDateString('en-US', { month: 'short' }).toLowerCase();

                  const dateFormat = dateK.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });

                  const url_ll = rd.url;

                  const flip_path1 = `/${yr_link}/${mon_th}`;
                  const flip_path = `/WriteReadData/flipbook/${flip_path1}/${rd.Language}`;

                  const url_thumb = `http://newindiasamachar.pib.gov.in/WriteReadData/Magazine/${flip_path1}/${rd.thumbFile}`;
                  const url_pdf = `http://newindiasamachar.pib.gov.in/WriteReadData/Magazine/${flip_path1}/${rd.MagFile}`;

                  return (
                    <li key={index}>
                      <div className='card wh_bx'>
                        <figure className='book'>
                          <ul className='hardcover_front'>
                            <li>
                              <img src={url_thumb} alt='' width='100%' height='100%' onClick={() => console.log(dateK)} />
                              <span className='ribbon bestseller'>New</span>
                            </li>
                            <li></li>
                          </ul>
                          <ul className='page'>
                            <li></li>
                            <li>
                              <a className='btn' href={url_pdf} target='_blank' title={rd.title}>
                                Download <i className='fa fa-download'></i>
                              </a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                          <ul className='hardcover_back'>
                            <li></li>
                            <li></li>
                          </ul>
                        </figure>
                        <figcaption className='cap_pp'></figcaption>
                        <div className='ln_book'>{rd.Language}</div>
                        {url_ll !== '' && (
                          <a href={flip_path} className='more11' target='_blank'>
                            Flip Book
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })
              ) : (
                <div className='ftr'>No data found</div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Archive