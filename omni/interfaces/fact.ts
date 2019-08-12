import {RuleInterface} from "./rule";
import {PathMappingInterface} from "./pathmapping";
import {DataType} from "../types";

export interface FactInterface {
    name?: string;
    path?: string;
    rule?: RuleInterface;
    rules?: RuleInterface[];
    pathMapping?: PathMappingInterface[];
    dataType?: DataType;
    type?: "Fact";
    sampleValue?: any;
    enumerations?: string[];
    documentation?: string;
}