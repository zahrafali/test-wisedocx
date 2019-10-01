// mathml equations (xml)
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, MathML, Packer, Paragraph } from "../build";

const doc = new Document();

const para = new Paragraph();

const mathStr = `<?xml version="1.0"?><m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:mml="http://www.w3.org/1998/Math/MathML"><m:nary><m:naryPr><m:chr m:val="∫"/><m:limLoc m:val="subSup"/><m:grow m:val="1"/><m:subHide m:val="off"/></m:naryPr><m:sub><m:r><m:t>0</m:t></m:r></m:sub><m:sup><m:r><m:t>5</m:t></m:r></m:sup><m:e/></m:nary><m:r><m:t>2xdx</m:t></m:r></m:oMath>`;
const xmR = new MathML(mathStr);
para.addMath(xmR);
doc.addParagraph(para);
const packer = new Packer();

packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
