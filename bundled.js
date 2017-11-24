"use strict";

/**
 * Builds and gets the JSON representation of the jsx
 * @param {*String} type
 * @param {*Object} attributes
 * @param {*Array} children
 */

var mountNode = document.getElementById('container');
function build(type, attributes) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    return {
        type: type,
        attributes: attributes || {},
        children: [].concat.apply([], children)
    };
}
/**
 * Test function with some jsx output
 */
function see() {
    return build(
        "div",
        { id: "app" },
        build(
            "div",
            { id: "one" },
            "Level 1.1"
        ),
        build(
            "div",
            { id: "two" },
            "Level 1.2"
        )
    );
}

function create(node) {
    if (typeof node === "string") {
        return document.createTextNode(node);
    }
    var el = document.createElement(node.type);
    node.children.map(create).forEach(el.appendChild.bind(el));

    return el;
}
function render() {
    mountNode.append(create(see(0)));
}
