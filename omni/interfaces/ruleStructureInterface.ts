import {RuleBehaviour} from "../types";

export interface RuleStructureInterface {
    name: string;
    code: string;
    variables: string[];
    ruleCode: string;
    behaviour?: RuleBehaviour;
    enumerations?: string[];
}
