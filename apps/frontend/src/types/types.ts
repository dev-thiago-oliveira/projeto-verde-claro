export type IBook = {
    title: string;
    author: string;
    description: string;
    link: string;
    store: string;
    id?: string;
}

export enum ELanguages {
    PT_BR = 'pt',
    EN = 'en',
    ES = 'es'
}