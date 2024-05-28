import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../mycss.css';
import '../App.css'

const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiURL = process.env.REACT_APP_API_URL + '/api/getDefaultData';
        const token = process.env.REACT_APP_TOKEN;
        console.log(token);
        const requestBody = {

        };
        const response = await axios.post(apiURL, requestBody, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

          },
        });
        setData(response.data);

        setLoading(false);
      } catch (error) {
        if (error.response) {

          console.error('Response error status:', error.response.status);
          console.error('Response error data:', error.response.data);
        } else if (error.request) {

          console.error('Request error:', error.request);
        } else {

          console.error('Error:', error.message);
        }
        console.error('Error config:', error.config);
        setLoading(false);
      }
    };


    fetchData();
  }, []);


  return (
    <>
      <div>
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
      {/* <div>
      <h1></h1>
      <ul>
  {data.map((item) => (
    <li key={item.Id}>
    <div>Cat_Id: {item.Id}</div>
    <div>Category Name: {item.MagFile}</div>
    <div>Language ID: {item.lang_id}</div>
    <div>Story File: {item.title}</div>
    <div>Publish Date: {item.publishDate}</div>
    <div>Status: {item.status}</div>
    <div>Active: {item.active}</div>
    </li>
  ))}
</ul>
    </div> */}
    </>


  );
};

export default Data;
