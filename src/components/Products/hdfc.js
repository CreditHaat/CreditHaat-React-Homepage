import React from 'react';
import './hdfc.css'; // Import your CSS file
import impimg from "../NewHomePage/NewHomePageImages/groimg.png";
import NavBar from '../NewHomePage/NavBar';
import NewCityFooter from '../NewHomePage/newCityFooter';
import NewHomePageFooter from '../NewHomePage/NewHomePageFooter';


const Hdfc = () => {
    return (
        <>
            <div className="hdfc-page">
                <NavBar/>
            
                <div className="hdfc-container">
                <div className="text-content-hdfc"  style={{marginTop:"50px"}}>
                     <h1 style={{fontWeight:"normal"}}>Detail Information and Important Links of <span style={{ color: "#3e2780" }}>HDFC</span></h1>
                </div>
                <div className="image-section-hdfc">
                    <img src={impimg} alt="important links of hdfc" />
                </div>
            </div>
      
    <div className='text-part-hdfc' style={{ padding: "20px" }}>
         <div className='text-part-hdfc' style={{ padding: "20px" }}>

            <div className="content-of-hdfc">
                    <h2 style={{fontWeight:"normal"}}>GrievanceRedressalOfficer : <span className="additional-hdfc-info1">Ms. Shalini Tandon</span></h2>
                    <h2 style={{fontWeight:"normal"}}>Company name : <span className="additional-hdfc-info1"> HDFC Ltd</span></h2>
                    <h2 style={{fontWeight:"normal"}}>Contact Number : <span className="additional-hdfc-info1"> 1800 266 4060</span></h2>
                    <h2 style={{fontWeight:"normal"}}>Email : <span className="additional-hdfc-info1"> grievance.redressaldl@hdfcbank.com</span></h2>

                     <br/>
                     <h2 style={{fontWeight:"normal"}}>Important inks :</h2>
                     <br/>
                     <h2 style={{fontWeight:"normal"}}>HDFC Bank - List of Lending Service Providers (LSPs) : <span className="additional-hdfc-info"> <a href="https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/important-messages/HDFC-Bank-List-of-Lending-Service-Providers-LSPs.pdf" target='_blank'>https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/important-messages/HDFC-Bank-List-of-Lending-Service-Providers-LSPs.pdf</a></span></h2>
                     <br/>
                     <h2 style={{fontWeight:"normal"}}>HDFC Bank- List of Digital Lending Apps/Platforms (DLAs) and its digital lending products : <span className="additional-hdfc-info"> <a href="https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/important-messages/product-features-and-policy/hdfc-bank-list-of-digital-lending-products-and-its-dlas.pdf" target='_blank'>https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/important-messages/product-features-and-policy/hdfc-bank-list-of-digital-lending-products-and-its-dlas.pdf</a></span></h2>
                     <br/>
                     <h2 style={{fontWeight:"normal"}}>Privacy Policy of HDFC Bank : <span className="additional-hdfc-info"> <a href="https://www.hdfc.bank.in/privacy-policy" target='_blank' >https://www.hdfc.bank.in/privacy-policy</a></span></h2>
                     <br/>
                     <h2 style={{fontWeight:"normal"}}>Customer Care : <span className="additional-hdfc-info"> <a href="https://www.hdfc.bank.in/contact-us" target='_blank' >https://www.hdfc.bank.in/contact-us</a></span></h2>
                     <br/>
                     <h2 style={{fontWeight:"normal"}}>Grievance Redressal Officer for Digital Lending Product : <span className="additional-hdfc-info"> <a href="https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/important-messages/product-features-and-policy/hdfc-bank-list-of-digital-lending-products-and-its-dlas.pdf" target='_blank'>https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/important-messages/product-features-and-policy/hdfc-bank-list-of-digital-lending-products-and-its-dlas.pdf</a></span></h2>
                     <br/>
                     <h2 style={{fontWeight:"normal"}}>Sachet Portal : <span className="additional-hdfc-info"> <a href="https://sachet.rbi.org.in/" target='_blank' >https://sachet.rbi.org.in/</a></span></h2>
                     <br/>
                     <h2 style={{fontWeight:"normal"}}>Complaint Management System (CMS) portal under the Reserve Bank-Integrated Ombudsman Scheme (RB-IOS) : <span className="additional-hdfc-info"> <a href="https://cms.rbi.org.in/cms/indexpage.html#eng" target='_blank' >https://cms.rbi.org.in/cms/indexpage.html#eng</a></span></h2>
              <br/>
                </div>
        </div>
      </div>
                    <NewHomePageFooter/>
                    <NewCityFooter/>
                    </div>
                   
                </>
    );
}

export default Hdfc;
