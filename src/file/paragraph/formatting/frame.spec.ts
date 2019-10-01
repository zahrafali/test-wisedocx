import { expect } from "chai";

import { Formatter } from "export/formatter";

import { Frame } from "./frame";

describe("ParagraphStyle", () => {
    let frame: Frame;

    describe("#constructor()", () => {
        it("should create a frame with given value", () => {
            frame = new Frame({ wrap: "auto", vAnchor: "page", hAnchor: "page", x: 868, y: 14401 });
            const tree = new Formatter().format(frame);
            expect(tree).to.deep.equal({
                "w:framePr": {
                    _attr: {
                        "w:wrap": "auto",
                        "w:vAnchor": "page",
                        "w:hAnchor": "page",
                        "w:x": 868,
                        "w:y": 14401,
                    },
                },
            });
        });
    });
});
