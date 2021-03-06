import {Ng2ol3Layer} from './@index';

export class Ng2ol3LayerGroup {

    name: string;
    children: any[];
    expanded: boolean;

    constructor(options: any) {
        this.name = options.name;
        this.children = [];
        this.expanded = options.expanded || true;
    }

    public getName(): string {
        return this.name;
    }

    public getChildren(): any[] {
        return this.children;
    }

    public getExpanded(): boolean {
        return this.expanded;
    }

    public setExpanded(value): void {
        this.expanded = value;
    }
}