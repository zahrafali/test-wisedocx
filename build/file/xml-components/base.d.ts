import { IXmlableObject } from "./xmlable-object";
export declare abstract class BaseXmlComponent {
    protected readonly rootKey: string;
    protected deleted: boolean;
    protected xmlCode: string;
    constructor(rootKey: string);
    abstract prepForXml(): IXmlableObject | undefined;
    readonly IsDeleted: boolean;
}
