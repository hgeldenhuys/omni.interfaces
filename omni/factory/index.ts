import {AggregateInterface, BasicIdentifier, RuleInterface} from "../interfaces";

function getName(init: BasicIdentifier): string | undefined {
    return (init.name && init.name.replace(/[\W]+/g,"")) || (init.title && init.title.replace(/[\W_]+/g,""));
}
function getTitle(init: BasicIdentifier): string {
    return (init.name && init.name.replace(/[\W_]+/g," ")) || init.title || "";
}

export class Factory {
    static rule(init: BasicIdentifier | RuleInterface): RuleInterface {
        const ruleInterface = init as RuleInterface;
        const name = getName(init);
        const title = getTitle(init);
        if (!name) {
            throw new Error("Identifier needs a name value");
        }
        return {
            type: "Rule",
            title: title.trim(),
            name,
            id: ruleInterface.id || Math.floor(Math.random() * 10000000000000),
            dataType: ruleInterface.dataType || "string",
            aliases: ruleInterface.aliases,
            description: ruleInterface.description,
            sampleValue: ruleInterface.sampleValue,
            statedAs: ruleInterface.statedAs
        };
    }
    static aggregate(init: BasicIdentifier | AggregateInterface): AggregateInterface {
        const aggregateInterface = init as AggregateInterface;
        const name = getName(init);
        const title = getTitle(init);
        if (!name) {
            throw new Error("Identifier needs a name value");
        }
        return {
            facts: aggregateInterface.facts || [],
            type: "Aggregate",
            title: title.trim(),
            name,
            id: aggregateInterface.id || Math.floor(Math.random() * 10000000000000),
            version: aggregateInterface.version,
            description: aggregateInterface.description,
            decisionObjectType: aggregateInterface.decisionObjectType
        };
    }
}


// const aggregate = Factory.aggregate({title: "An Aggregate!", version: {major: 0, minor: 0, patch: 0}});
//
// console.log(aggregate, aggregate.facts);
//
// const rule = Factory.rule({name: "An_RULE!!!!!", id: 100, statedAs: "SIMPLE"});
//
// console.log(rule);

