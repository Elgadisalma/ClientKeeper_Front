export interface Transaction {
    id: number;
    senderName?: string;
    senderPrenom?: string;
    senderAccountNumber?: string;
    receiverName: string,
    receiverPrenom: string,
    receiverAccountNumber: string,
    montant: number,
    motif: string,
    securePin: string
    dateTransaction: string; 
    typeTransaction: 'emise' | 'recue';
}
