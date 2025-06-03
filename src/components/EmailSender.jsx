import React, { useState } from 'react';

const EmailSender = ({ configuratorData }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendEmail = async () => {
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(configuratorData)
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Email sent successfully!');
      } else {
        setMessage('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Error sending email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleSendEmail}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
      >
        {loading ? 'Sending...' : 'Send Configurator Data via Email'}
      </button>
      {message && <p className="mt-2 text-center text-blue-800">{message}</p>}
    </div>
  );
};

export default EmailSender;
