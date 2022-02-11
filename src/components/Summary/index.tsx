import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { Container } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const {transactions} = useContext(TransactionsContext)

    // acc - acumulador 
    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas"/>
                </header>
                <strong>{summary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcome} alt="Saida"/>
                </header>
                <strong>{summary.withdraws}</strong>
            </div>
            <div className="highline-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total"/>
                </header>
                <strong>{summary.total}</strong>
            </div>
        </Container>
    );
}