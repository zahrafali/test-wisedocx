import { XmlComponent } from "../../../file/xml-components";
export interface IFrameAttributesProperties {
    readonly wrap?: string;
    readonly vAnchor?: string;
    readonly hAnchor?: string;
    readonly x?: number;
    readonly y?: number;
}
export declare class Frame extends XmlComponent {
    constructor(attrs: IFrameAttributesProperties);
}
