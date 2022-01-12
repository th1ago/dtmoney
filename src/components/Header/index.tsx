import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface propsHeader {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: propsHeader) {

    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transacao
                </button>
            </Content>
        </Container>
    )
}