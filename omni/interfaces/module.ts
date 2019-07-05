import {EntityInterface} from "./entity";
import {IdentifierInterface} from "./identifier";

export interface ModuleInterface extends IdentifierInterface {
    entities: EntityInterface[]
}
