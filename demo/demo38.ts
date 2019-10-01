// Example of how to "wrap" text around an image
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
// import { Document, Packer, Paragraph } from "../build";
import { Document, Packer, TextWrappingSide, TextWrappingType } from "../build";

const doc = new Document();

doc.createParagraph(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula nec nulla vitae efficitur. Ut interdum mauris eu ipsum rhoncus, nec pharetra velit placerat. Sed vehicula libero ac urna molestie, id pharetra est pellentesque. Praesent iaculis vehicula fringilla. Duis pretium gravida orci eu vestibulum. Mauris tincidunt ipsum dolor, ut ornare dolor pellentesque id. Integer in nulla gravida, lacinia ante non, commodo ex. Vivamus vulputate nisl id lectus finibus vulputate. Ut et nisl mi. Cras fermentum augue arcu, ac accumsan elit euismod id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ac posuere nisi. Pellentesque tincidunt vehicula bibendum. Phasellus eleifend viverra nisl.",
);

doc.createParagraph(
    "Proin ac purus faucibus, porttitor magna ut, cursus nisl. Vivamus ante purus, porta accumsan nibh eget, eleifend dignissim odio. Integer sed dictum est, aliquam lacinia justo. Donec ultrices auctor venenatis. Etiam interdum et elit nec elementum. Pellentesque nec viverra mauris. Etiam suscipit leo nec velit fringilla mattis. Pellentesque justo lacus, sodales eu condimentum in, dapibus finibus lacus. Morbi vitae nibh sit amet sem molestie feugiat. In non porttitor enim.",
);

doc.createParagraph(
    "Ut eget diam cursus quam accumsan interdum at id ante. Ut mollis mollis arcu, eu scelerisque dui tempus in. Quisque aliquam, augue quis ornare aliquam, ex purus ultrices mauris, ut porta dolor dolor nec justo. Nunc a tempus odio, eu viverra arcu. Suspendisse vitae nibh nec mi pharetra tempus. Mauris ut ullamcorper sapien, et sagittis sapien. Vestibulum in urna metus. In scelerisque, massa id bibendum tempus, quam orci rutrum turpis, a feugiat nisi ligula id metus. Praesent id dictum purus. Proin interdum ipsum nulla.",
);

doc.createImage(fs.readFileSync("./demo/images/pizza.gif"), 200, 200, {
    floating: {
        horizontalPosition: {
            offset: 2014400,
        },
        verticalPosition: {
            offset: 2014400,
        },
        wrap: {
            type: TextWrappingType.SQUARE,
            side: TextWrappingSide.BOTH_SIDES,
        },
        margins: {
            top: 201440,
            bottom: 201440,
        },
    },
});

const packer = new Packer();

packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
