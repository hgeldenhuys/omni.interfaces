import {ModuleInterface} from "./module.interface";
import {IdentifierInterface} from "./identifier";

export interface DomainModelInterface extends IdentifierInterface {
    modules: ModuleInterface[];
    type: "DomainModel";
}