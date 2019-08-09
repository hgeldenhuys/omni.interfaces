import {IdentifierInterface} from "./identifier";
import {ModuleInterface} from "./module";

export interface DomainModelInterface extends IdentifierInterface {
    modules: ModuleInterface[];
    type: "DomainModel";
}