import { type } from "os";
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

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

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

    function createTransaction(transaction: TransactionInput) {
        api.post('./transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}