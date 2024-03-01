import React from 'react'

function Footer() {
  return (
    <div>
    <div className="container-fluid text-center wimhover" style={{ marginTop: '0px', backgroundColor: '#ffffcc', color: '#000', padding: '10px' }}>
      <a title="New India Samachar on Akashvani" href="https://newsonair.gov.in/Talks-and-Current-Affairs-Search.aspx?cat=NIS">
        <h6 style={{ color: '#000' }}><b>New India Samachar on Akashvani</b></h6>
      </a>
    </div>
    <div className="jumbotron text-center" style={{ marginBottom: '0' }}>
      <div className="container" style={{ fontFamily: 'Lato, sans-serif', fontSize: '108%' }}>
        Site is designed and hosted by National Informatics Centre (NIC), Information is
        provided and updated by Press Information Bureau "A" - Wing, Shastri Bhawan, Dr.
        Rajendra Prasad Road, New Delhi - 110 001 Phone 23389338
      </div>
    </div>
  </div>
  )
}

export default Footer