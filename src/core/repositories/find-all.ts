export interface FindAll<T>{
    find(): Promise<T[]>;
}