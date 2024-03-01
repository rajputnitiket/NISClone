import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiURL = 'http://localhost:51259/api/getfiltered_data'; 
        const token = 'xfS_6z2hddIJzwRZitnA6c3VxqqPVFc08mtn3WfHQ9nci-UdvJJo7O0CMcjSplP4P7ol7tlrGUC_VeXdrPRc7-eTMW9oNfZb_hWJNjRv2ttCVHc9YnIn5RBrtkqojzPEih3tPM6KeklL5GtHE5NodXNLADW7EGngLVlJkELIWggp7W4BQdxVjdPlXHgss-wiilKg-cCZ6ovjZ6PskvZe-hgoiIlrMewNw4s4UiWQ7xuhpS378fFS-k6jTxI1O98_EIRP67SbeCse4rO9joYw8iV-owxZ1e_zLdHmrJ-Bwfo';
        const requestBody = {
            lang_id:'1'
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
          // The request was made and the server responded with a status code
          console.error('Response error status:', error.response.status);
          console.error('Response error data:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Request error:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
        }
        console.error('Error config:', error.config);
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      <h1>Data from SQL API</h1>
      <ul>
  {data.map((item) => (
    <li key={item.Cat_Id}>
    <div>Cat_Id: {item.Cat_Id}</div>
    <div>Category Name: {item.Category_name}</div>
    <div>Language ID: {item.lang_id}</div>
    <div>Story File: {item.StoryFile}</div>
    <div>Publish Date: {item.publishDate}</div>
    <div>Status: {item.status}</div>
    <div>Active: {item.active}</div>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Data;
