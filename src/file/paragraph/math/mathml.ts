function mathArray(OMML: string): string {
    const finalOMML = removeXmlTag(OMML);
    return finalOMML;
}

function removeXmlTag(xml: string): string {
    let slicedXml = xml;
    if (xml.includes("<?xml")) {
        slicedXml = xml.slice(xml.indexOf("<m:oMath"));
    }
    return slicedXml;
}

/* finalXml replaces the custom placeholder tags, added for math, with OMML */
// tslint:disable-next-line: no-any
function finalXml(xml: string, math: any): string {
    if (math && math.length) {
        let xmlReplaced = xml;
        let i = 0;
        if (Array.isArray(math)) {
            for (const val of math) {
                xmlReplaced = xmlReplaced.replace(`<mathPlaceholder${i}/>`, val);
                i++;
            }
        }
        return xmlReplaced;
    }
    return xml;
}

export {
    mathArray,
    finalXml,
};
