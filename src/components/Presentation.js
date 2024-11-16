import Modal from "react-modal"
import React, { useState } from "react";
import '../css/presentation.css'
Modal.setAppElement('#root');

const Presentation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        closeModal();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <img src='../assets/images/ProfilePicture.png' className="section-presentation-picture" alt="Profile-picture of me, pixel art style"></img >
            <div className="section-presentation-intro">
                <p className="my-scrollable-element"> Salut ! Moi, c'est Florian j'ai 24 ans, je vis à Lille.
                    Après plusieurs années passées dans le commerce, j'ai décidé de me lancer dans une reconversion professionnelle pour suivre ma passion :
                    le développement web. Actuellement en formation chez OpenClassrooms dans le parcours Développeur Web,
                    j'acquiers les compétences nécessaires pour créer des projets modernes et interactifs. Passionné par les jeux vidéo,
                    j'aime intégrer un aspect ludique et créatif dans mon travail.
                </p>
                <button onClick={openModal}>Me contacter !</button>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Formulaire de contact"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                    ariaHideApp={false}
                >
                    <h2>Me contacter !</h2>
                    <form onSubmit={handleSubmit} className="modal-form">
                        <div className="name-container">
                            <label htmlFor="firstName" className="label-name">Prénom:</label>
                            <input
                                className="input-name"
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                placeholder="Votre prénom"
                            />
                        </div>
                        <div className="lastname-container">
                            <label htmlFor="lastName" className="label-lastname">Nom:</label>
                            <input
                                className="input-lastname"
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="email-container">
                            <label htmlFor="email" className="label-email">Adresse Email:</label>
                            <input
                                className="input-email"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Adresse E-mail"
                            />
                        </div>
                        <div className="message-container">
                            <label htmlFor="message" className="label-message">Message:</label>
                            <textarea
                                className="input-message"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Votre message…"
                            />
                        </div>
                        <button type="submit" className="input-submit">Envoyer</button>
                    </form>
                    <button onClick={closeModal} className="input-close">Fermer</button>
                </Modal>
            </div>
        </>
    )
}

export default Presentation