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

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    // forca uma tipagem - "nao tem problema pois esse valor nao e' utilizado"
    {} as TransactionsContextData
)

export function TransactionsProvider({children}: TransactionProviderProps) {
    
    // toda vez que for amarzenar uma info se cria um estado
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transaction: TransactionInput) {
        await api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}