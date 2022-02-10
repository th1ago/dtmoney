import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { Container } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const {transactions} = useContext(TransactionsContext)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas"/>
                </header>
                <strong>R$ 1,000</strong>
            </div>
            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcome} alt="Saida"/>
                </header>
                <strong>- R$ 500</strong>
            </div>
            <div className="highline-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total"/>
                </header>
                <strong>R$ 500</strong>
            </div>
        </Container>
    );
}