import { ParsedUrlQuery } from "querystring";

export const getParamId = ( params: ParsedUrlQuery ): string => {
    const id = params.id;
    if ( id === undefined ){ throw new Error('id is required') } //TODO Refactor
    if( Array.isArray(id)){ return id[0] }
    return id;
}