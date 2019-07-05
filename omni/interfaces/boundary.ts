import {AggregateInterface} from "./aggregate";
import {IdentifierInterface} from "./identifier";
import {DomainModelInterface} from "./domainmodel";

export interface BoundaryInterface extends IdentifierInterface{
    aggregates: AggregateInterface[];
    domainModel: DomainModelInterface;
    type: "Boundary";
}