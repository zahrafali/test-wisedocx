/* tslint:disable:typedef space-before-function-paren */
import { XmlComponent } from "file/xml-components";
import { mathArray } from "./mathml";
/**
 * @ignore
 */

let count = 0;

/* adding an extra attribute "xmlCode" to the object from which math code will
 be extracted and letr injected into xml document */
export class MathML extends XmlComponent {
  constructor(xml: string) {
    // const placeholder = `mathPlaceholder` + count;
    super(`mathPlaceholder` + count);
    count++;
    const finalXml = mathArray(xml); // mathArray function removes unncesary xml tag
    this.xmlCode = finalXml;
  }
}
