// Example demonstrating line numbers.
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, LineNumberRestartFormat, Packer, Paragraph } from "../build";

const doc = new Document(
    {},
    {
        lineNumberCountBy: 1,
        lineNumberRestart: LineNumberRestartFormat.CONTINUOUS,
    },
);

doc.addParagraph(new Paragraph("Hello").heading1());
doc.createParagraph(
    "Himenaeos duis luctus nullam fermentum lobortis potenti vivamus non dis, sed facilisis ultricies scelerisque aenean risus hac senectus. Adipiscing id venenatis justo ante gravida placerat, ac curabitur dis pellentesque proin bibendum risus, aliquam porta taciti vulputate primis. Tortor ipsum fermentum quam vel convallis primis nisl praesent tincidunt, lobortis quisque felis vitae condimentum class ut sem nam, aenean potenti pretium ac amet lacinia himenaeos mi. Aliquam nisl turpis hendrerit est morbi malesuada, augue interdum mus inceptos curabitur tristique, parturient feugiat sodales nulla facilisi. Aliquam non pulvinar purus nulla ex integer, velit faucibus vitae at bibendum quam, risus elit aenean adipiscing posuere.",
);
doc.createParagraph(
    "Sed laoreet id mattis egestas nam mollis elit lacinia convallis dui tincidunt ultricies habitant, pharetra per maximus interdum neque tempor risus efficitur morbi imperdiet senectus. Lectus laoreet senectus finibus inceptos donec potenti fermentum, ultrices eleifend odio suscipit magnis tellus maximus nibh, ac sit nullam eget felis himenaeos. Diam class sem magnis aenean commodo faucibus id proin mi, nullam sodales nec mus parturient ornare ad inceptos velit hendrerit, bibendum placerat eleifend integer facilisis urna dictumst suspendisse.",
);

const packer = new Packer();

packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
