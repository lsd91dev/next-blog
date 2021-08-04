export interface FindById<T>{
    findById(id: number): Promise<T>
}