export type types = "Rule" | "Aggregate" | "Boundary" | "Entity" | "Property" | "DomainModel" | "Module";

export interface NameIdentifier {
    id?: number;
    name: string;
    title?: string;
}

export interface TitleIdentifier {
    id?: number;
    title: string;
    name?: string;
}

export type BasicIdentifier = NameIdentifier | TitleIdentifier;

export interface IdentifierInterface {
    id?: number;
    name: string;
    title?: string;
    description?: string;
    type?: types;
}