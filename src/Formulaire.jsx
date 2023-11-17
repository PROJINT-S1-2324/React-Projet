import React, { useState } from 'react';

const MessageSender = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Envoi de la requête POST au serveur Spring Boot
        try {
            const response = await fetch('http://localhost:8080/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (response.ok) {
                console.log('Message envoyé avec succès!');
            } else {
                console.error('Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur réseau:', error);
        }

        // Réinitialisation du champ de texte après l'envoi
        setMessage('');
    };

    return (
        <div className="message-sender">
            <h2>Envoyer un message</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Message:
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default MessageSender;
