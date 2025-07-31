export class Restaurante {
    constructor(
        public categoria: string,
        public descricao: string,
        public imagem: string,
        public infos: string[], // pode incluir "Destaque da semana", "Japonesa", etc.
        public title: string,
        public nota: string,
        public id: number
    ) {}
}

export class PratosRestaurantes {
    constructor( 
        public title: string,
        public imagem: string,
        public conteudo:string,
        public id:  number
    ) {}
}