export default class VirtualDOM {
    constructor() {}

    static build(type, attributes, ...children) {
        return {
            type,
            attributes: (attributes || {}),
            children: []
                .concat
                .apply([], children)
        };
    }
    render() {
        return <div id="app">
            <div id="one"></div>
            <div id="two"></div>
        </div>
    }
}
