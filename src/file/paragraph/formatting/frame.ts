import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

export interface IFrameAttributesProperties {
    readonly wrap?: string;
    readonly vAnchor?: string;
    readonly hAnchor?: string;
    readonly x?: number;
    readonly y?: number;
}

class FrameAttributes extends XmlAttributeComponent<IFrameAttributesProperties> {
    protected readonly xmlKeys = {
        wrap: "w:wrap",
        vAnchor: "w:vAnchor",
        hAnchor: "w:hAnchor",
        x: "w:x",
        y: "w:y",
    };
}

export class Frame extends XmlComponent {
    constructor(attrs: IFrameAttributesProperties) {
        super("w:framePr");
        this.root.push(new FrameAttributes(attrs));
    }
}
