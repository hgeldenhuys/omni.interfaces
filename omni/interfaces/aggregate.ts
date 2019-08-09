import {FactInterface} from "./fact";
import {IdentifierInterface} from "./identifier";
import {VersionInterface} from "./version";
import {DecisionObjectType} from "../types";

export interface AggregateInterface extends IdentifierInterface {
    version?: VersionInterface;
    facts: FactInterface[];
    decisionObjectType?: DecisionObjectType;
    type?: "Aggregate"
}
