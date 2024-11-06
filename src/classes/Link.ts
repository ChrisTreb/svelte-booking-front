export class Link {
    name!: string;
    target!: string;
    constructor(
        name: string,
        target: string
    ) {
        this.name = name;
        this.target = target;
    }
}