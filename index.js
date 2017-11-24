/**
 * Builds and gets the JSON representation of the jsx
 * @param {*String} type
 * @param {*Object} attributes
 * @param {*Array} children
 */

var mountNode = document.getElementById('container');
function build(type, attributes, ...children) {
    return {
        type,
        attributes: (attributes || {}),
        children: []
            .concat
            .apply([], children)
    };
}
/**
 * Test function with some jsx output
 */
function see() {
    return <div id="app">
        <div id="one">Level 1.1</div>
        <div id="two">Level 1.2</div>
    </div>
}

function create(node) {
    if (typeof node === "string") {
        return document.createTextNode(node);
    }
    let el = document.createElement(node.type);
    node
        .children
        .map(create)
        .forEach(el.appendChild.bind(el));

    return el;
}
function render() {
    mountNode.append(create(see(0)))
}