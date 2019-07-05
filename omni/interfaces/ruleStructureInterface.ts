import {RuleBehaviour} from "../core/types";

export interface RuleStructureInterface {
    name: string;
    code: string;
    behaviour?: RuleBehaviour;
    absolute?: boolean;
    variables?: string[];
}