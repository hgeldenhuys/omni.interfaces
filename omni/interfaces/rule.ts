import {IdentifierInterface} from "./identifier";
import {DataType, RuleBehaviour} from "../types";

export interface RuleInterface extends IdentifierInterface {
    aliases?: string[];
    sampleValue?: string;
    statedAs?: string;
    dataType?: DataType;
    type?: "Rule";
    behaviour?: RuleBehaviour;
    documentation?: string;
}
