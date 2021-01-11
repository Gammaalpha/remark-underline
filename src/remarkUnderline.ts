let findAndReplace = require('mdast-util-find-and-replace');

export const RemarkUnderline = (options?: any) => {
    const marker = !!options && !!options.marker ? options.marker : "!!"
    const escapedMarker = utilEscapeRegExp(marker)
    return transformer

    function transformer(tree: any) {
        const regex = new RegExp("(" + escapedMarker + ")(.*?)(" + escapedMarker + ")", "gi")
        findAndReplace(tree, regex, (val: any) => {
            const data = val.split(regex).filter((x: any) => x !== "" && x !== marker)
            return underlineNodeGenerator(data[0])
        })

    }
}


const underlineNodeGenerator = (str: string) => {
    return {
        type: 'content',
        children: [
            { type: 'text', value: str }
        ],
        data: {
            hName: 'u'
        }
    }
}


/**
 * Returns an escaped string based on the inputted value.
 * @param inputString input string to escape
 */
const utilEscapeRegExp = (inputString: string) => {
    return inputString.replace(/[.*+!_?^${}()|[\]\\]/gi, '\\$&'); // $& means the whole matched string
}