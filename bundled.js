"use strict";

/**
 * Builds and gets the JSON representation of the jsx
 * @param {*String} type
 * @param {*Object} attributes
 * @param {*Array} children
 */

var mountNode = document.getElementById('container');
var attributeMap = {
    "className": "class"
    /**
     * Triggered by the JSX Parser.
     * @param {*String} type
     * @param {*Object} attributes
     * @param {*Array} children
     */
};function build(type, attributes) {
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
        { id: "app", className: "first-class" },
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
/**
 * Sets the attributes to a dom node
 * @param {*node} el
 * @param {*array} attributes
 */
function setProperties(el, attributes) {
    Object.keys(attributes).forEach(function (name) {
        setProperty(el, name, attributes[name]);
    });
}
/**
 * Sets a single attribute value
 * @param {*node} el
 * @param {*String} attribute
 * @param {*any} value
 */
function setProperty(el, attribute, value) {
    el.setAttribute(mapAttributes(attribute), value);
}
/**
 *Converts JSX attribues such as className to class.
 * @param {*String} name 
 */
function mapAttributes(name) {
    return attributeMap[name] ? attributeMap[name] : name;
}
/**
 * Creates the dom elements recursively.
 * @param {*object} node
 */
function create(node) {
    if (typeof node === "string") {
        return document.createTextNode(node);
    }
    var el = document.createElement(node.type);
    setProperties(el, node.attributes);
    node.children.map(create).forEach(el.appendChild.bind(el));

    return el;
}
/**
 * renders the elements to the mount node
 */
function render() {
    mountNode.append(create(see(0)));
}
