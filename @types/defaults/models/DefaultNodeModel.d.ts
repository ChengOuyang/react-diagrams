import { DefaultPortModel } from "./DefaultPortModel";
import { NodeModel } from "../../models/NodeModel";
import { DiagramEngine } from "../../DiagramEngine";
/**
 * @author Dylan Vorster
 */
export declare class DefaultNodeModel extends NodeModel {
    name: string;
    color: string;
    ports: {
        [s: string]: DefaultPortModel;
    };
    constructor(name?: string, color?: string);
    addInPort(label: string): DefaultPortModel;
    addOutPort(label: string): DefaultPortModel;
    deSerialize(object: any, engine: DiagramEngine): void;
    serialize(): any;
    getInPorts(): DefaultPortModel[];
    getOutPorts(): DefaultPortModel[];
}
