import { useEffect, useState } from 'react';

const Email = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Directly set the message as "Thanks for registration"
        setMessage('Thanks for registration! Your email has been verified successfully.');
    }, []);

    return (
        <div className="verification-container">
            <h1>{message}</h1>
        </div>
    );
};

export default Email;
