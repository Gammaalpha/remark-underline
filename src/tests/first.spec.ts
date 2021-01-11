import { Plugin } from "./plugin";


let result = "";
let resultCustomChar = ""
describe("not section", () => {
    beforeAll(() => {
        result = Plugin();
        resultCustomChar = Plugin("^^")
    })
    it('should have the underline translated node', () => {
        expect(result).toMatch(/(\<ins\>underlined_1\<\/ins\>)/i);
    })
    it('should have the underline translated node', () => {
        expect(resultCustomChar).toMatch(/(\<ins\>underlined_2\<\/ins\>)/i);
    })
});
