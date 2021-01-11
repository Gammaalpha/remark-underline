import { Plugin } from "./plugin";


let result = "";
let resultCustomChar = ""
describe("not section", () => {
    beforeAll(() => {
        result = Plugin();
        resultCustomChar = Plugin("^^")
    })
    it('should have the underline translated node', () => {
        expect(result).toMatch(/(\<u\>underlined_1\<\/u\>)/i);
    })
    it('should have the underline translated node', () => {
        expect(resultCustomChar).toMatch(/(\<u\>underlined_2\<\/u\>)/i);
    })
});
