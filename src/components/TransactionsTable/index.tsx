import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createAt: string,
}

export function TransactionsTable(){
    // toda vez que for amarzenar uma info se cria um estado
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <Container>
             <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}