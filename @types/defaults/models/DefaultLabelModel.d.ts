import { LabelModel } from "../../models/LabelModel";
import { DiagramEngine } from "../../DiagramEngine";
export declare class DefaultLabelModel extends LabelModel {
    label: string;
    constructor();
    setLabel(label: string): void;
    deSerialize(ob: any, engine: DiagramEngine): void;
    serialize(): any;
}
