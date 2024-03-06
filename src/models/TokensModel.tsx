export interface TokensDTO{
    user: string,
    fecha: Date,
    idRandom: string,
    idEnablon: string,
    lat: number,
    lon: number,
    foto: string
}

export interface landigPageDTO{
    listadoTokens?: TokensDTO[]
}