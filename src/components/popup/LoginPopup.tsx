import React from 'react';
import styled from 'styled-components';

interface LoginPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <PopupContainer>
            <PopupContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <h3>Login Form</h3>
                {/* Add your login form elements here */}
            </PopupContent>
        </PopupContainer>
    );
};

const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const PopupContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;

export default LoginPopup;