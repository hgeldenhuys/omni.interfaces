import {expect} from "chai";
import "mocha";
import {Factory} from "../omni/factory";

describe(`Rule factory`, () => {
    it(`must equal this JSON`, async () => {
        let rule = Factory.rule({name: "An_RULE!!!!!", id: 100, statedAs: "SIMPLE"});
        console.log(JSON.stringify(rule));
        expect(rule).to.not.equal(`{"type":"Rule","title":"An RULE","name":"An_RULE","id":100,"dataType":"string","statedAs":"SIMPLE"}`);
        rule = Factory.rule({name: "An_RULE!!!!!", statedAs: "SIMPLE"});
    });
});

