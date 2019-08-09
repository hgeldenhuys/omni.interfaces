import {RuleBehaviour} from "../types";

export interface RuleStructureInterface {
    name: string;
    code: string;
    ruleCode?: string;
    behaviour?: RuleBehaviour;
    absolute?: boolean;
    variables?: string[];
    enumerations?: string[];
}