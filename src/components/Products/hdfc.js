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

                     <h2 style={{fontWeight:"normal"}}>Product Features :</h2>
                    <br/>
                    <h2 style={{fontWeight:"normal"}}>Loan on Credit Cards-Important Links : <span className="additional-hdfc-info"> <a href="https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/useful-links/important-messages/product-features-and-policy/loan-on-credit-card.pdf" target='_blank' >https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/personal-banking/discover-products/useful-links/important-messages/product-features-and-policy/loan-on-credit-card.pdf</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>Personal Loan Product & Feature : <span className="additional-hdfc-info"> <a href="https://www.hdfc.bank.in/personal-loan" target='_blank' >https://www.hdfc.bank.in/personal-loan</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>Salary Plus Product & Feature : <span className="additional-hdfc-info"> <a href="https://www.hdfc.bank.in/salary-plus" target='_blank' >https://www.hdfc.bank.in/salary-plus</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>Business Loan Product & Feature : <span className="additional-hdfc-info"> <a href="https://www.hdfc.bank.in/business-loan" target='_blank' >https://www.hdfc.bank.in/business-loan</a></span></h2>
                     <br/>                    
                     <h2 style={{fontWeight:"normal"}}>Professionals Product & Features : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/business-loan/loan-for-professionals" target='_blank' >https://www.hdfc.bank.in/business-loan/loan-for-professionals</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>Loan Against property : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/loan-against-property" target='_blank' >https://www.hdfc.bank.in/loan-against-property</a></span></h2>
                     <br/>                    
                     <h2 style={{fontWeight:"normal"}}>Loan against Securities Product & Feature : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/loan-against-securities" target='_blank' >https://www.hdfc.bank.in/loan-against-securities</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>Loan against Mutual Fund Product & Feature : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/digital-loan-against-mutual-funds" target='_blank' >https://www.hdfc.bank.in/digital-loan-against-mutual-funds</a></span></h2>
                     <br/>                    
                     <h2 style={{fontWeight:"normal"}}>Auto Loan Feature : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/car-loan" target='_blank' >https://www.hdfc.bank.in/car-loan</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>Two Wheeler Loan Feature : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/two-wheeler-loan" target='_blank' >https://www.hdfc.bank.in/two-wheeler-loan</a></span></h2>
                     <br/>                    
                     <h2 style={{fontWeight:"normal"}}>Super Bike Loan Feature : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/super-bike-loan" target='_blank' >https://www.hdfc.bank.in/super-bike-loan</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>Overdraft Against Fixed Deposits : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/fixed-deposit/overdraft-against-fixed-deposits" target='_blank' >https://www.hdfc.bank.in/fixed-deposit/overdraft-against-fixed-deposits</a></span></h2>
                     <br/>                    
                     <h2 style={{fontWeight:"normal"}}>Cardless EasyEMI : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/easyemi" target='_blank' >https://www.hdfc.bank.in/easyemi</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>EasyEMI On Debit Card : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/easyemi/debit-card" target='_blank' >https://www.hdfc.bank.in/easyemi/debit-card</a></span></h2>
                     <br/>                    
                     <h2 style={{fontWeight:"normal"}}>Xpress Top-up Home Loan : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/home-loan/top-up" target='_blank' >https://www.hdfc.bank.in/home-loan/top-up</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>Gold Loan Top Up : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/gold-loan/top-up-loan" target='_blank' >https://www.hdfc.bank.in/gold-loan/top-up-loan</a></span></h2>
                     <br/>
                     <h2 style={{fontWeight:"normal"}}>GST OD : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/msme-banking/business-overdraft-loan/gst-overdraft-loan" target='_blank' >https://www.hdfc.bank.in/msme-banking/business-overdraft-loan/gst-overdraft-loan</a></span></h2>
                     <br/>
                    <h2 style={{fontWeight:"normal"}}>OD Dukandar : <span className="additional-hdfc-info"><a href="https://www.hdfc.bank.in/msme-banking/business-overdraft-loan/dukandar-overdraft-facility" target='_blank' >https://www.hdfc.bank.in/msme-banking/business-overdraft-loan/dukandar-overdraft-facility</a></span></h2>
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
