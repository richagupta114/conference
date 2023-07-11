import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [charge, setCharge] = useState('200INR');
  const [agreed, setAgreed] = useState(false); // New state for the checkbox

  const validateName = () => {
    if (!name) {
      setNameError('Name is required');
    } else if (!/^[A-Za-z]+$/.test(name)) {
      setNameError('Invalid name');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  };
  const validateContactNumber = () => {
    if (!contactNumber) {
      setContactNumberError('Contact number is required');
    } else if (!/^\d{10}$/.test(contactNumber)) {
      setContactNumberError('Invalid contact number. Please enter a 10-digit number.');
    } else {
      setContactNumberError('');
    }
  };
  const validateAgreement = () => {
    if (!agreed) {
      // Show an error message or take appropriate action
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validateContactNumber();
    validateAgreement(); // Validate the agreement checkbox

    // Perform other form submission logic here if validation passes
  };
  return (
<>
<style>
        {`
          body {
            font-family: 'Montserrat', sans-serif;
          }
        `}
      </style>

<div 
style={{ display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f2f2f2', }}>
<div 
style={{
        width: '1000px',
        border: '1px solid #DDDDDD',
        padding: '20px',
        height: '564px',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <h2 style={{ fontWeight: 'regular' ,textAlign: 'left', color:'#252422'}}>REGISTER NOW!</h2>
      <form onSubmit={handleSubmit}>
        <div  style={{ marginBottom: '30px' }}>
          <label  style={{ marginRight: '43px',color:'#9A9A9A',width:'38px',height:'15px' }}>NAME</label>
          
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            style={{ width: '698px', height: '40px', border: '#DDDDDD',borderRadius: '8px',paddingLeft: '8px',}}
            />
           {nameError && <span style={{ marginLeft: '10px', color: 'red' }}>{nameError}</span>}
              
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label  style={{ marginRight: '45px', color:'#9A9A9A',width:'38px',height:'15px'}}>EMAIL</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            style={{ width: '698px', height: '40px',border: '#DDDDDD' ,borderRadius: '8px',paddingLeft: '8px',}}
          />
          {emailError && <span style={{ marginLeft: '10px', color: 'red' }}>{emailError}</span>}
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label  style={{ marginRight: '21px' ,color:'#9A9A9A',width:'53px',height:'15px'}}>CONTACT</label> &nbsp;
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            onBlur={validateContactNumber}
            style={{ width: '698px', height: '40px' ,border: '#DDDDDD',borderRadius: '8px',paddingLeft: '8px',}}
          />
          {contactNumberError && <span style={{ marginLeft: '10px', color: 'red' }}>{contactNumberError}</span>}
        </div>
        <div style={{ marginBottom: '50px' }}>
          <label  style={{ marginRight: '30px',color:'#9A9A9A',width:'53px',height:'15px' }}>CHARGE</label>
          <input
            type="text"
            value={charge}
            readOnly // Make the input read-only
            style={{ backgroundColor: '#DDDDDD',width:'286px',height:'40px' , color:'#66615B' ,border: '#DDDDDD',borderRadius: '8px',paddingLeft: '8px',}} // Apply grey background color
          />
        </div>
        <div style={{ marginBottom: '70px' ,color:'#9A9A9A'  }}>
              <label style={{ marginRight: '10px',color:'#9A9A9A',width:'600px',height:'15px' }}>
                Agreement &nbsp;&nbsp;
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  style={{ width: '26px', height: '26px' ,backgroundColor:'#AAA7A4',borderRadius: '8px',paddingLeft: '8px',}}
                />
              &nbsp;
                I hereby agree to the &nbsp;
                <a href="/terms-and-conditions">terms and conditions</a>
              </label>
            </div>
            <div style={{ marginBottom: '10px',margintop:'900px' }}>
        <button  type="submit" style={{ marginRight: '50px',backgroundColor:'#6BD098',width:'90px',height:'40px',color:'#FFFFFF',borderRadius: '8px',paddingLeft: '8px',fontSize:'15px'}}>CONFIRM</button>
        <button type="button" onClick={() => console.log('PAY button clicked')} style={{  backgroundColor:'#EF8157',width:'90px',height:'40px',color:'#FFFFFF',borderRadius: '8px',paddingLeft: '8px',fontSize:'15px'}}>PAY</button>
        </div>
       <div style={{color:'#252422' , width:'267px',height:'21px',marginBottom: '5px'}}>For help: conferencehelp@gmail.com</div>
      </form>
      </div>
      </div>
    </>
  );
}
