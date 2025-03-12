export interface Transaction {
    id: number;
    receiverName: string,
    receiverPrenom: string,
    receiverAccountNumber: string,
    montant: number,
    motif: string,
    securePin: string
    dateTransaction: string; 
    typeTransaction: 'emise' | 'recue';
}
