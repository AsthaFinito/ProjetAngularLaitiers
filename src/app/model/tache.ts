export interface Tache {
    _id?:string;
    titre:string;
    termine:boolean;
    statut:string;
}
export interface Liste{

    _id?:string;
    TitreListe:string;
    
    ListeTaches:Array<Tache>;
    
}
