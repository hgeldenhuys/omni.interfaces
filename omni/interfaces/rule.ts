import {DataType} from "../core/types";
import {IdentifierInterface} from "./identifier";

export interface RuleInterface extends IdentifierInterface {
    aliases?: string[];
    sampleValue?: string;
    statedAs?: string;
    dataType?: DataType;
    type?: "Rule";
}
