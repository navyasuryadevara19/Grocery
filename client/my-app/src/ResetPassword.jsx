import React, { useState } from 'react';
import './PasswordOtp.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 


    const handleResetPassword = async (e) => {
        e.preventDefault();

         // Check if passwords match
         if (newPassword !== ConfirmPassword) {
          window.alert('Passwords do not match.');
          return;
         }

        try {
            const response = await Axios.post('http://localhost:5000/reset-password', {newPassword});
            if (response.status === 200) {
                window.alert('Password reset successful.');
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            window.alert('Failed to reset password.');
        }
    };

  return (
   

<div className='H'>
   <div className="container">
      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword}>
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" className="box" required/>
<input type="password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  placeholder="Confirm Password" className="box" required/>
<input type="submit" value="Submit" className="btn" />
</form>
      
    </div> 
  </div>

  )
};

export default ResetPassword;
