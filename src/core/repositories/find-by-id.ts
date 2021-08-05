export interface FindById<T>{
    findById(id: string): Promise<T>
}