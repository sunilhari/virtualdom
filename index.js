import {setTimeout} from "timers";

/**
 * Builds and gets the JSON representation of the jsx
 * @param {*String} type
 * @param {*Object} attributes
 * @param {*Array} children
 */

const mountNode = document.getElementById('container'),
    const TIME_OUT_ONE = 500,
        TIME_OUT_TWO = 500,
        REFRESH_TIMES = 20,
        attributeMap = {
            "className": "class"
        }
    /**
 * Triggered by the JSX Parser.
 * @param {*String} type
 * @param {*Object} attributes
 * @param {*Array} children
 */
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
    function see(index) {
        return <div id="app" className="first-class">
            <div id="one">Level 1.1</div>
            <div id="two">Level 1.2</div>
        </div>
    }
    /**
 * Sets the attributes to a dom node
 * @param {*node} el
 * @param {*array} attributes
 */
    function setProperties(el, attributes) {
        Object
            .keys(attributes)
            .forEach(name => {
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
 *Converts JSX attributes such as className to class.
 * @param {*String} name
 */
    function mapAttributes(name) {
        return attributeMap[name]
            ? attributeMap[name]
            : name;
    }
    /**
 * Creates the dom elements recursively.
 * @param {*object} node
 */
    function create(node) {
        if (typeof node === "string") {
            return document.createTextNode(node);
        }
        let el = document.createElement(node.type);
        setProperties(el, node.attributes);
        node
            .children
            .map(create)
            .forEach(el.appendChild.bind(el));

        return el;
    }
    /**
 * renders the elements to the mount node
 */
    function render(index) {
        mountNode.append(create(see(index)))
    }
    /**
 * runs dom update for specified amount of time
 * @param {*Number} milliseconds
 */
    function refreshEvery(milliseconds) {
        setTimeout(() => doRefresh(mountNode, 0), milliseconds);
    }
    /**
 * Refreshes it that many number of times
 * @param {*node} node
 * @param {*Number} times
 */
    function doRefresh(node, times) {
        if (times > REFRESH_TIMES) {
            return false;
        }
        applyChanges(mountNode, getChanges(render(times + 1), render(times)));
        setTimeout(() => doRefresh(node, times + 1), 500);
    }
    /**
     * gets the delta of changes
     * @param {*} current
     * @param {*} old
     */
    function getChanges(current, old) {
        return deltaOf(current, old);
    }
    /**
     * Applies changes between current and old
     * @param {*}mountNode
     * @param {*}delta
     */
    function applyChanges(mountNode, delta) {}
    /**
     * Gets delta
     * @param {*} current
     * @param {*} old
     */
    function deltaOf(current, old) {}