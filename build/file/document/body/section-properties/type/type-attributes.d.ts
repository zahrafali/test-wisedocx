import { XmlAttributeComponent } from "../../../../../file/xml-components";
export interface ITypeAttributes {
    readonly val?: string;
}
export declare class TypeAttributes extends XmlAttributeComponent<ITypeAttributes> {
    protected readonly xmlKeys: {
        val: string;
    };
}
