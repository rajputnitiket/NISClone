import React from 'react'
import Data from './Data'
import { Connect, connect } from 'react-redux'
import '../mycss.css';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const DefaultPage = (props) => {
  return (
    <>
      <div className="container">
        <ul className="breadcrumb">
          <li><a href="Default.aspx">Home</a></li>
          <li><a href="#">Latest Issue</a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>

      <div class="container">
        <div class="component">
          <Data></Data>

        </div>
      </div >


    </>
  )
}

export default connect()(DefaultPage)