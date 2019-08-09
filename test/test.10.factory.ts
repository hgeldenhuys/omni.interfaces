import {expect} from "chai";
import "mocha";
import {Factory} from "../omni/factory";

describe(`Rule factory`, () => {
    it(`must equal this JSON`, async () => {
        let rule = Factory.rule({name: "An_RULE!!!!!", id: 100, statedAs: "SIMPLE"});
        expect(JSON.stringify(rule)).to.equal(`{"type":"Rule","title":"An RULE","name":"An_RULE","id":100,"dataType":"string","statedAs":"SIMPLE"}`);
        rule = Factory.rule({name: "An_RULE!!!!!"});
        expect(JSON.stringify(rule)).to.not.equal(`{"type":"Rule","title":"An RULE","name":"An_RULE","id":100,"dataType":"string","statedAs":"SIMPLE"}`);
        expect(rule.id).to.not.equal(100);
    });
});

describe(`Aggregate factory`, () => {
    it(`must equal this JSON`, async () => {
        let aggregateInterface = Factory.aggregate({name: "An Aggregate!!!!!", id: 100, facts: [
                {
                    rule: Factory.rule({title: "A Rule", id: 200})
                }
            ]});
        expect(JSON.stringify(aggregateInterface)).to.equal(`{"facts":[{"rule":{"type":"Rule","title":"A Rule","name":"ARule","id":200,"dataType":"string"}}],"type":"Aggregate","title":"An Aggregate","name":"AnAggregate","id":100}`);
        aggregateInterface = Factory.aggregate({name: "An Aggregate!!!!!",});
        expect(aggregateInterface.id).to.not.equal(100);
    });
});

