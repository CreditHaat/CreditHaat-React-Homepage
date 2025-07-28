import React, { useState, useEffect } from 'react';
import './CreditCardList.css'; // Ensure this file is correctly imported and styled

function CreditCardLenders() {
    const storedUserData = sessionStorage.getItem('sucessData');
    const mydata = JSON.parse(storedUserData);

    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowConfetti(false);
        }, 4000); // Stop confetti after 2 seconds

        return () => clearTimeout(timeout);
    }, []);

    function getRandomColor() {
        const colors = ['#FFD700', '#FF6347', '#ADFF2F', '#8A2BE2', '#FF69B4'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <div className="credit-congratulations-container">
            <div className="container">
                <h2 style={{ textAlign: "center" }}>Postpaid Cards:</h2>
                <div className="credit-card-grid">
                    {mydata.data.lender_details.filter(lender => lender.card_type === 1).map((company, index) => (
                        <div key={index} className="credit-card-item">
                            <div className="credit-company-names">
                                <div className='allclass' style={{ display: 'flex', textAlign: 'center' }}>
                                    <div className='credit-company-names-first'>
                                        <img src={company.card_img} alt='Card' />
                                    </div>
                                    <div className='logoc'>
                                        <img src={company.logo} alt='Logo' />
                                    </div>
                                </div>
                                <div className='credit-company-names-second'>
                                    <hr className="credit-credit-company-divider" />
                                    <p>{company.point_one}</p>
                                    <p>{company.point_two}</p>
                                    <p>{company.point_three}</p>
                                    <p>{company.point_four}</p>
                                </div>
                                <div className="credit-congraths-button-container">
                                    <button onClick={() => window.location.href = company.applicationlink} className="credit-congraths-button">Continue</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <h2 style={{ textAlign: "center" }}>Prepaid Cards:</h2>
                <div className="credit-card-grid">
                    {mydata.data.lender_details.filter(lender => lender.card_type === 0).map((company, index) => (
                        <div key={index} className="credit-card-item">
                            <div className="credit-company-names">
                                <div className='allclass' style={{ display: 'flex', textAlign: 'center' }}>
                                    <div className='credit-company-names-first'>
                                        <img src={company.card_img} alt='Card' />
                                    </div>
                                    <div className='logoc'>
                                        <img src={company.logo} alt='Logo' />
                                    </div>
                                </div>
                                <div className='credit-company-names-second'>
                                    <hr className="credit-credit-company-divider" />
                                    <p>{company.point_one}</p>
                                    <p>{company.point_two}</p>
                                    <p>{company.point_three}</p>
                                    <p>{company.point_four}</p>
                                </div>
                                <div className="credit-congraths-button-container">
                                    <button onClick={() => window.location.href = company.applicationlink} className="credit-congraths-button">Continue</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Render celebratory confetti */}
            {showConfetti && (
                <div className="credit-confetti-container">
                    {[...Array(100)].map((_, index) => (
                        <div key={index} className="confetti-piece" style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh`, backgroundColor: getRandomColor(), transform: `rotate(${Math.random() * 360}deg)` }} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CreditCardLenders;
