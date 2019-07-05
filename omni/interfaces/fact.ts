import {RuleInterface} from "./rule";
import {PathMappingInterface} from "./pathmapping";
import {DataType} from "../core/types";

export interface FactInterface {
    path?: string;
    rule?: RuleInterface;
    pathMapping?: PathMappingInterface[];
    dataType: DataType;
    type?: "Fact";
}