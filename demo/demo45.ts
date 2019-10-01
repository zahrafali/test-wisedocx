// Sections with multiple columns
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun } from "../build";

const doc = new Document();

doc.createParagraph("Sample text");

doc.Styles.createParagraphStyle("framebox", "Frame Box")
    .frame({ wrap: "auto", vAnchor: "page", hAnchor: "page", x: 868, y: 14401 });

const para = new Paragraph().createBorder();
para.style("framebox");
para.Borders.addTopBorder();
para.leftTabStop(300).addRun(new TextRun("Frame text with top border.  ").tab());

doc.addParagraph(para);

const packer = new Packer();

packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
