import React from 'react';
import './SelectionCriteria.css'; // Import your CSS file
import policy from "../NewHomePage/NewHomePageImages/privacypolicyimage.png";
import NavBar from './NavBar';
import NewCityFooter from './newCityFooter';
import NewHomePageFooter from './NewHomePageFooter';

const selectioncriteria = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="privacy-container">
                <div className="text-sect">
                    <h1>Approach for lender selection and listing order</h1>
                </div>
                <div className="image-sect">
                    <img src={policy}  alt="privacy Image" />
                </div>
            </div>
            <div className='Content-sect' style={{ padding: "20px" }}>
                <div className="content-of-privacy">
                    <h2>Approach for lender selection and listing order</h2>
                    <p>All “Borrower/s” on the loan facility are hereby informed that the company has the following approach and considers following factors for assessing gradation of risks for each Borrower and matching them to the appropriate lender or loan service provider:</p>
                    <h2>Personal information :</h2>
                    <p>Personal Information (“PI”) means any information/ documents/ details that relates to a natural person, which either directly or indirectly in combination with other information available with CreditHaat, can identify such person.</p>
                    <p>• Profile, financial stability, and market reputation</p>
                    <p>• Credit history and duration of credit relationship with each lender</p>
                    <p>• Group strength, overall customer yield, future potential, repayment capacity based on cash flows and other financial commitments</p>
                    <p>• Interest, default risk in related customer segment</p>
                    <p>• The security for the loan as represented by the underlying assets</p>
                    <p>• Loan to value ratio</p>
                    <p>• Mode of payment</p>
                    <p>• Tenure of the loan</p>
                    <p>• Geography (location) of the Borrower</p>
                    <p>• End use</p>
                    <p>• RBI guidelines</p>
                    <p>Other laws or any other factors on a case-by-case basis, as applicable.</p>
                </div>
                <div className="content-of-privacy">
                    <h2>We further; match and list the lenders from our partner lenders based on- </h2>
                    <p>• Lender specific cuts for income, employment type, geographic location, mode of payment and lender specific credit policies</p>
                    <p>• Historic data on likelihood of approval of similar profiles by the lender.</p>
                    <p>• Historic data on likelihood of acceptance of lender offer by users of similar profiles.</p>
                </div>
            </div>
            <NewHomePageFooter/>
            <NewCityFooter/>

                    
                    </>
                    );
                    }
         export default selectioncriteria;