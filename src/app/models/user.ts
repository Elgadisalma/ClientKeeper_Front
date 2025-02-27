export interface User {
    id: number;
    nom: string;
    prenom: string;
    cin: string;
    dateNaissance: string;
    sexe: string;
    adresse: string;
    profession: string;
    phoneNumber: string; 
    email: string;
    password: string;
    securePin: string;
    numeroCompte: string;
    churn_score?: number;
}