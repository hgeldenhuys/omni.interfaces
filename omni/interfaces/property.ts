import {EntityInterface} from "./entity";

export interface PropertyInterface {
    description?: string;
    type: "number" | "string" | "date" | "boolean" | "array" | "object";
    enum?: string[] | number[];
    nullable?: boolean;
    reference?: EntityInterface;
}