import 'reflect-metadata';
import {constructor} from "tsyringe/dist/typings/types";
import {container} from "tsyringe";

export function containerDi<T>(token: constructor<T> | string) {
    return container.resolve(token);
}