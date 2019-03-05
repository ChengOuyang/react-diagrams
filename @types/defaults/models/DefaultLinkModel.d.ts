/**
 * @author Dylan Vorster
 */
import { LinkModel, LinkModelListener } from "../../models/LinkModel";
import { BaseEvent } from "../../BaseEntity";
import { DiagramEngine } from "../../DiagramEngine";
import { LabelModel } from "../../models/LabelModel";
export interface DefaultLinkModelListener extends LinkModelListener {
    colorChanged?(event: BaseEvent<DefaultLinkModel> & {
        color: null | string;
    }): void;
    widthChanged?(event: BaseEvent<DefaultLinkModel> & {
        width: 0 | number;
    }): void;
}
export declare class DefaultLinkModel extends LinkModel<DefaultLinkModelListener> {
    width: number;
    color: string;
    curvyness: number;
    constructor(type?: string);
    serialize(): any;
    deSerialize(ob: any, engine: DiagramEngine): void;
    addLabel(label: LabelModel | string): void;
    setWidth(width: number): void;
    setColor(color: string): void;
}
