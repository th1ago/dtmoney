import { useState } from 'react'
import logo from '../../assets/logo.svg'
import Modal from 'react-modal';
import { Container, Content } from './styles'

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transacao
                </button>

                <Modal 
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>teste</h2>
                </Modal>
            </Content>
        </Container>
    )
}