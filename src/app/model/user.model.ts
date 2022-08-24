export interface User {
    id: number;
    ipAdress: string;
    password: string;
    nom: string;
    prenom: string;
    adresse: string;
    telephone: string;
    promos: Array<any>;
    roles: Array<any>;
    cin: string;
    email: string;
    username: string;
}
