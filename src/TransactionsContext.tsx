import { createContext, ReactNode } from "react";
import { useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createAt: string,
}

interface TransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({children}: TransactionProviderProps) {
    
    // toda vez que for amarzenar uma info se cria um estado
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>

        </TransactionsContext.Provider>
    )
}