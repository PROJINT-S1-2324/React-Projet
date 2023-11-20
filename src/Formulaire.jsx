import React, { useState } from 'react';

const MessageSender = () => {
    const [messageDto, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Envoi de la requête POST au serveur Spring Boot

        try {
            //const response = await fetch('http://localhost:8080/logMyMessage', {
            const response = await fetch('/api/logMyMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message :messageDto }),  // Assurez-vous que le corps est correctement défini ici
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
                        value={messageDto}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default MessageSender;
