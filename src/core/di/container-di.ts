import {container} from "tsyringe";
import {constructor} from "tsyringe/dist/typings/types";

export function resolve<T>(token: constructor<T> | string, ) {
    return container.resolve(token);
}

export function register<T>(provider: symbol | string, classInstance: constructor<T>){
    container.register(provider, { useClass: classInstance })
}