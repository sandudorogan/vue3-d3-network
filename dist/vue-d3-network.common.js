/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

// NAMESPACE OBJECT: ./node_modules/d3-force/src/index.js
var d3_force_src_namespaceObject = {};
__webpack_require__.r(d3_force_src_namespaceObject);
__webpack_require__.d(d3_force_src_namespaceObject, {
  "forceCenter": function() { return center; },
  "forceCollide": function() { return collide; },
  "forceLink": function() { return src_link; },
  "forceManyBody": function() { return manyBody; },
  "forceRadial": function() { return radial; },
  "forceSimulation": function() { return simulation; },
  "forceX": function() { return src_x; },
  "forceY": function() { return src_y; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/d3-force/src/center.js
/* harmony default export */ function center(x, y) {
  var nodes;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
}

;// CONCATENATED MODULE: ./node_modules/d3-force/src/constant.js
/* harmony default export */ function constant(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-force/src/jiggle.js
/* harmony default export */ function jiggle() {
  return (Math.random() - 0.5) * 1e-6;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/add.js
/* harmony default export */ function add(d) {
  var x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add_add(this.cover(x, y), x, y, d);
}

function add_add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, abort.
  if (x0 > x1 || y0 > y1) return this;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add_add(this, xz[i], yz[i], data[i]);
  }

  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/cover.js
/* harmony default export */ function cover(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else {
    var z = x1 - x0,
        node = this._root,
        parent,
        i;

    while (x0 > x || x >= x1 || y0 > y || y >= y1) {
      i = (y < y0) << 1 | (x < x0);
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0: x1 = x0 + z, y1 = y0 + z; break;
        case 1: x0 = x1 - z, y1 = y0 + z; break;
        case 2: x1 = x0 + z, y0 = y1 - z; break;
        case 3: x0 = x1 - z, y0 = y1 - z; break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/data.js
/* harmony default export */ function data() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/extent.js
/* harmony default export */ function extent(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/quad.js
/* harmony default export */ function quad(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/find.js


/* harmony default export */ function find(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new quad(node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new quad(node[3], xm, ym, x2, y2),
        new quad(node[2], x1, ym, xm, y2),
        new quad(node[1], xm, y1, x2, ym),
        new quad(node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/remove.js
/* harmony default export */ function remove(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return (next ? previous.next = next : delete previous.next), this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
}

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/root.js
/* harmony default export */ function root() {
  return this._root;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/size.js
/* harmony default export */ function size() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/visit.js


/* harmony default export */ function visit(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new quad(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new quad(child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new quad(child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new quad(child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new quad(child, x0, y0, xm, ym));
    }
  }
  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/visitAfter.js


/* harmony default export */ function visitAfter(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new quad(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new quad(child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new quad(child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new quad(child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new quad(child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/x.js
function defaultX(d) {
  return d[0];
}

/* harmony default export */ function x(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/y.js
function defaultY(d) {
  return d[1];
}

/* harmony default export */ function y(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

;// CONCATENATED MODULE: ./node_modules/d3-quadtree/src/quadtree.js













function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = add;
treeProto.addAll = addAll;
treeProto.cover = cover;
treeProto.data = data;
treeProto.extent = extent;
treeProto.find = find;
treeProto.remove = remove;
treeProto.removeAll = removeAll;
treeProto.root = root;
treeProto.size = size;
treeProto.visit = visit;
treeProto.visitAfter = visitAfter;
treeProto.x = x;
treeProto.y = y;

;// CONCATENATED MODULE: ./node_modules/d3-force/src/collide.js




function collide_x(d) {
  return d.x + d.vx;
}

function collide_y(d) {
  return d.y + d.vy;
}

/* harmony default export */ function collide(radius) {
  var nodes,
      radii,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = constant(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = quadtree(nodes, collide_x, collide_y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = jiggle(), l += x * x;
            if (y === 0) y = jiggle(), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), initialize(), force) : radius;
  };

  return force;
}

;// CONCATENATED MODULE: ./node_modules/d3-collection/src/map.js
var prefix = "$";

function Map() {}

Map.prototype = map_map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map_map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ var src_map = (map_map);

;// CONCATENATED MODULE: ./node_modules/d3-collection/src/nest.js


/* harmony default export */ function nest() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = map(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
}

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return map();
}

function setMap(map, key, value) {
  map.set(key, value);
}

;// CONCATENATED MODULE: ./node_modules/d3-collection/src/set.js


function Set() {}

var proto = src_map.prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ var src_set = ((/* unused pure expression or super */ null && (set)));

;// CONCATENATED MODULE: ./node_modules/d3-collection/src/index.js







;// CONCATENATED MODULE: ./node_modules/d3-force/src/link.js




function index(d) {
  return d.index;
}

function link_find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("missing: " + nodeId);
  return node;
}

/* harmony default export */ function src_link(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = constant(30),
      distances,
      nodes,
      count,
      bias,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || jiggle();
        y = target.y + target.vy - source.y - source.vy || jiggle();
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = src_map(nodes, id),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = link_find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = link_find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initializeStrength(), force) : strength;
  };

  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : constant(+_), initializeDistance(), force) : distance;
  };

  return force;
}

;// CONCATENATED MODULE: ./node_modules/d3-dispatch/src/dispatch.js
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = dispatch_set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = dispatch_set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function dispatch_set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ var src_dispatch = (dispatch);

;// CONCATENATED MODULE: ./node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-force/src/simulation.js




function simulation_x(d) {
  return d.x;
}

function simulation_y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

/* harmony default export */ function simulation(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = src_map(),
      stepper = timer(step),
      event = src_dispatch("tick", "end");

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick(iterations) {
    var i, n = nodes.length, node;

    if (iterations === undefined) iterations = 1;

    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;

      forces.each(function (force) {
        force(alpha);
      });

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }

    return simulation;
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-force/src/manyBody.js





/* harmony default export */ function manyBody() {
  var nodes,
      node,
      alpha,
      strength = constant(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i, n = nodes.length, tree = quadtree(nodes, simulation_x, simulation_y).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0, q, c, weight = 0, x, y, i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index];
      while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = jiggle(), l += x * x;
        if (y === 0) y = jiggle(), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = jiggle(), l += x * x;
      if (y === 0) y = jiggle(), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
  };

  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
}

;// CONCATENATED MODULE: ./node_modules/d3-force/src/radial.js


/* harmony default export */ function radial(radius, x, y) {
  var nodes,
      strength = constant(0.1),
      strengths,
      radiuses;

  if (typeof radius !== "function") radius = constant(+radius);
  if (x == null) x = 0;
  if (y == null) y = 0;

  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i],
          dx = node.x - x || 1e-6,
          dy = node.y - y || 1e-6,
          r = Math.sqrt(dx * dx + dy * dy),
          k = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k;
      node.vy += dy * k;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);
    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _, initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), initialize(), force) : radius;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
}

;// CONCATENATED MODULE: ./node_modules/d3-force/src/x.js


/* harmony default export */ function src_x(x) {
  var strength = constant(0.1),
      nodes,
      strengths,
      xz;

  if (typeof x !== "function") x = constant(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
  };

  force.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant(+_), initialize(), force) : x;
  };

  return force;
}

;// CONCATENATED MODULE: ./node_modules/d3-force/src/y.js


/* harmony default export */ function src_y(y) {
  var strength = constant(0.1),
      nodes,
      strengths,
      yz;

  if (typeof y !== "function") y = constant(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
  };

  force.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant(+_), initialize(), force) : y;
  };

  return force;
}

;// CONCATENATED MODULE: ./node_modules/d3-force/src/index.js









;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/svgRenderer.vue?vue&type=template&id=056f92f2


const _hoisted_1 = ["width", "height"]
const _hoisted_2 = {
  id: "l-links",
  class: "links"
}
const _hoisted_3 = ["d", "id", "onClick", "onTouchstartPassive"]
const _hoisted_4 = {
  key: 0,
  id: "l-nodes",
  class: "nodes"
}
const _hoisted_5 = ["viewBox", "width", "height", "onClick", "onTouchendPassive", "onMousedown", "onTouchstart", "x", "y", "title", "innerHTML"]
const _hoisted_6 = ["r", "onClick", "onTouchendPassive", "onMousedown", "onTouchstart", "cx", "cy", "title"]
const _hoisted_7 = {
  key: 1,
  class: "labels",
  id: "link-labels"
}
const _hoisted_8 = {
  class: "link-label",
  fontSize: "fontSize"
}
const _hoisted_9 = ["xlink:href"]
const _hoisted_10 = {
  key: 2,
  class: "labels",
  id: "node-labels"
}
const _hoisted_11 = ["x", "y", "font-size", "stroke-width"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    ref: "svg",
    width: $props.size.w,
    height: $props.size.h,
    class: "net-svg",
    onMouseup: _cache[0] || (_cache[0] = $event => ($options.emit('dragEnd', [$event]))),
    onTouchendPassive: _cache[1] || (_cache[1] = $event => ($options.emit('dragEnd', [$event])))
  }, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("g", _hoisted_2, [
      ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($props.links, (link) => {
        return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("path", (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
          d: $options.linkPath(link),
          id: link.id,
          onClick: $event => ($options.emit('linkClick', [$event,link])),
          onTouchstartPassive: $event => ($options.emit('linkClick', [$event,link]))
        }, $options.linkAttrs(link), {
          class: $options.linkClass(link.id),
          style: $options.linkStyle(link)
        }), null, 16, _hoisted_3))
      }), 256))
    ]),
    (!$props.noNodes)
      ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("g", _hoisted_4, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($props.nodes, (node, key) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, { key: key }, [
              ($options.svgIcon(node))
                ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
                    key: 0,
                    viewBox: $options.svgIcon(node).attrs.viewBox,
                    width: $options.getNodeSize(node, 'width'),
                    height: $options.getNodeSize(node, 'height'),
                    onClick: $event => ($options.emit('nodeClick',[$event,node])),
                    onTouchendPassive: $event => ($options.emit('nodeClick',[$event,node])),
                    onMousedown: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)($event => ($options.emit('dragStart',[$event,key])), ["prevent"]),
                    onTouchstart: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)($event => ($options.emit('dragStart',[$event,key])), ["prevent"]),
                    x: node.x - $options.getNodeSize(node, 'width') / 2,
                    y: node.y - $options.getNodeSize(node, 'height') / 2,
                    style: $options.nodeStyle(node),
                    title: node.name,
                    class: $options.nodeClass(node,['node-svg']),
                    innerHTML: $options.svgIcon(node).data
                  }, node._svgAttrs), null, 16, _hoisted_5))
                : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("circle", (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
                    key: 1,
                    r: $options.getNodeSize(node) / 2,
                    onClick: $event => ($options.emit('nodeClick',[$event,node])),
                    onTouchendPassive: $event => ($options.emit('nodeClick',[$event,node])),
                    onMousedown: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)($event => ($options.emit('dragStart',[$event,key])), ["prevent"]),
                    onTouchstart: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)($event => ($options.emit('dragStart',[$event,key])), ["prevent"]),
                    cx: node.x,
                    cy: node.y,
                    style: $options.nodeStyle(node),
                    title: node.name,
                    class: $options.nodeClass(node)
                  }, node._svgAttrs), null, 16, _hoisted_6))
            ], 64))
          }), 128))
        ]))
      : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
    ($props.linkLabels)
      ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("g", _hoisted_7, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($props.links, (link) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("text", _hoisted_8, [
              (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("textPath", {
                "xlink:href": '#' + link.id,
                startOffset: "50%"
              }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(link.name), 9, _hoisted_9)
            ]))
          }), 256))
        ]))
      : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true),
    ($props.nodeLabels)
      ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("g", _hoisted_10, [
          ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($props.nodes, (node) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("text", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["node-label", (node._labelClass) ? node._labelClass : '']),
              x: node.x + ($options.getNodeSize(node) / 2) + ($props.fontSize / 2),
              y: node.y + $props.labelOffset.y,
              "font-size": $props.fontSize,
              "stroke-width": $props.fontSize / 8
            }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(node.name), 11, _hoisted_11))
          }), 256))
        ]))
      : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)
  ], 40, _hoisted_1))
}
;// CONCATENATED MODULE: ./src/components/svgRenderer.vue?vue&type=template&id=056f92f2

;// CONCATENATED MODULE: ./src/lib/js/svgExport.js
/* eslint-disable */
/* harmony default export */ var svgExport = ({
  NS: 'http://www.w3.org/2000/svg',
  // svgOrg: svg element
  // allCss : true includes all svg css styles, false includes only matched styles
  export (svgOrg, allCss) {
    let svg = null
    if (this.isSvgData(svgOrg)) {
      svg = svgOrg.cloneNode(true)
      let childs = svgOrg.parentNode.querySelectorAll('*')
      let cssStyle = {}
      let rules = this.getcssRules()

      for (let child of childs) {
        let elRules = rules
        if (!allCss) {
          elRules = rules.filter((rule) => {
            return child.matches(rule.selectorText)
          })
        }
        for (let rule of elRules) {
          cssStyle[rule.selectorText] = rule.cssText
        }
      }
      let css = Object.values(cssStyle).join('\n')
      if (css) {
        let style = document.createElementNS(this.NS, 'style')
        style.type = 'text/css'
        svg.insertBefore(style, svg.childNodes[0])
        style.innerHTML = css
        svg.appendChild(style)
      }
    }
    return svg
  },

  makeCanvas (width, height, background) {
    let canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = background || 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    return canvas
  },

  serialize (svg) {
    return (new XMLSerializer()).serializeToString(svg)
  },

  svgToImg (svg, canvas, cb) {
    let xml = this.serialize(svg)
    let img = new Image()
    let ctx = canvas.getContext('2d')
    img.onload = function () {
      ctx.drawImage(this, 0, 0)
      let png = canvas.toDataURL('image/png')
      cb(null, png, ctx)
    }
    img.onerror = function (err) {
      cb(err)
    }
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(xml)))
  },

  save (svg) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(this.serialize(svg))
  },

  getcssRules () {
    let rules = []
    for (let styles of document.styleSheets) {
      let styleRules = this.readRules(styles)
      for (let rule of styleRules) {
        if (rule && rule.cssText) {
          rules.push(rule)
        }
      }
    }
    return rules
  },

  readRules (styles) {
    try {
      if (!styles.cssRules) return styles.rules || []
    } catch (e) {
      // Firefox returns Security Error if stylesheet originates from different domain
      if (e.name !== 'SecurityError') throw e
      return []
    }
    return styles.cssRules
  },

  toDom (svgData) {
    let div = document.createElement('div')
    div.innerHTML = svgData
    return div.firstChild || null
  },

  toObject (svg) {
    if (svg) {
      let attrs = {}
      if (svg.attributes) {
        for (let i = svg.attributes.length; i >= 0; i--) {
          let a = svg.attributes[i]
          if (a) attrs[a.name] = a.value
        }
      }
      let data = svg.innerHTML
      if (data) return { attrs, data }
    }
    return null
  },

  svgElFromString (svgData) {
    let svgEl = this.toDom(svgData)
    if (!this.isSvgData(svgEl)) return
    svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    return svgEl
  },

  svgDataToUrl (svgData, attrs) {
    if (typeof (attrs) === 'object') {
      for (let a in attrs) {
        let attribute = (attrs[a]) ? (attrs[a]) : ''
        svgData.setAttribute(a, attribute)
      }
    }
    let svg = this.export(svgData)
    if (svg) return this.svgToUrl(this.serialize(svg))
    return null
  },

  isSvgData (svgData) {
    if (!svgData.firstChild) return false
    return (svgData.firstChild.parentNode.nodeName === 'svg')
  },

  svgToUrl (svg) {
    let xml = new Blob([svg], { type: 'image/svg+xml' })
    let url = URL.createObjectURL(xml)
    return url
  }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/svgRenderer.vue?vue&type=script&lang=js



/* harmony default export */ var svgRenderervue_type_script_lang_js = ({
  name: 'svg-renderer',
  props: [
    'size',
    'nodes',
    'noNodes',
    'selected',
    'linksSelected',
    'links',
    'nodeSize',
    'padding',
    'fontSize',
    'strLinks',
    'linkWidth',
    'nodeLabels',
    'linkLabels',
    'labelOffset',
    'nodeSym'
  ],
  computed: {
    nodeSvg () {
      if (this.nodeSym) {
        return svgExport.toObject(this.nodeSym)
      }
      return null
    }
  },
  methods: {
    getNodeSize (node, side) {
      let size = node._size || this.nodeSize
      if (side) size = node['_' + side] || size
      return size
    },
    svgIcon (node) {
      return node.svgObj || this.nodeSvg
    },
    emit (e, args) {
      this.$emit('action', e, args)
    },
    svgScreenShot (cb, toSvg, background, allCss) {
      let svg = svgExport["export"](this.$refs.svg, allCss)
      if (!toSvg) {
        if (!background) background = this.searchBackground()
        let canvas = svgExport.makeCanvas(this.size.w, this.size.h, background)
        svgExport.svgToImg(svg, canvas, (err, img) => {
          if (err) cb(err)
          else cb(null, img)
        })
      } else {
        cb(null, svgExport.save(svg))
      }
    },
    linkClass (linkId) {
      let cssClass = ['link']
      if (this.linksSelected.hasOwnProperty(linkId)) {
        cssClass.push('selected')
      }
      if (!this.strLinks) {
        cssClass.push('curve')
      }
      return cssClass
    },
    linkPath (link) {
      let d = {
        M: [link.source.x | 0, link.source.y | 0],
        X: [link.target.x | 0, link.target.y | 0]
      }
      if (this.strLinks) {
        return 'M ' + d.M.join(' ') + ' L' + d.X.join(' ')
      } else {
        d.Q = [link.source.x, link.target.y]
        return 'M ' + d.M + ' Q ' + d.Q.join(' ') + ' ' + d.X
      }
    },
    nodeStyle (node) {
      return (node._color) ? 'fill: ' + node._color : ''
    },
    linkStyle (link) {
      let style = {}
      if (link._color) style.stroke = link._color
      return style
    },
    nodeClass (node, classes = []) {
      let cssClass = (node._cssClass) ? node._cssClass : []
      if (!Array.isArray(cssClass)) cssClass = [cssClass]
      cssClass.push('node')
      classes.forEach(c => cssClass.push(c))
      if (this.selected[node.id]) cssClass.push('selected')
      if (node.fx || node.fy) cssClass.push('pinned')
      return cssClass
    },
    searchBackground () {
      let vm = this
      while (vm.$parent) {
        let style = window.getComputedStyle(vm.$el)
        let background = style.getPropertyValue('background-color')
        let rgb = background.replace(/[^\d,]/g, '').split(',')
        let sum = rgb.reduce((a, b) => parseInt(a) + parseInt(b), 0)
        if (sum > 0) return background
        vm = vm.$parent
      }
      return 'white'
    },
    spriteSymbol () {
      let svg = this.nodeSym
      if (svg) {
        return svgExport.toSymbol(svg)
      }
    },
    linkAttrs (link) {
      let attrs = link._svgAttrs || {}
      attrs['stroke-width'] = attrs['stroke-width'] || this.linkWidth
      return attrs
    }
  }
});

;// CONCATENATED MODULE: ./src/components/svgRenderer.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/svgRenderer.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(svgRenderervue_type_script_lang_js, [['render',render]])

/* harmony default export */ var svgRenderer = (__exports__);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/canvasRenderer.vue?vue&type=template&id=2becc798


const canvasRenderervue_type_template_id_2becc798_hoisted_1 = ["width", "height"]

function canvasRenderervue_type_template_id_2becc798_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_render_canvas = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveDirective)("render-canvas")

  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)(((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("canvas", {
    id: "canvas",
    ref: "canvas",
    width: $props.size.w,
    height: $props.size.h,
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)($options.canvasStyle),
    onMouseup: _cache[0] || (_cache[0] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)((...args) => ($options.canvasClick && $options.canvasClick(...args)), ["prevent"])),
    onMousedown: _cache[1] || (_cache[1] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)((...args) => ($options.canvasClick && $options.canvasClick(...args)), ["prevent"])),
    onTouchstart: _cache[2] || (_cache[2] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)((...args) => ($options.canvasClick && $options.canvasClick(...args)), ["prevent"])),
    onTouchendPassive: _cache[3] || (_cache[3] = (...args) => ($options.canvasClick && $options.canvasClick(...args)))
  }, null, 44, canvasRenderervue_type_template_id_2becc798_hoisted_1)), [
    [_directive_render_canvas, {links: $props.links, nodes: $props.nodes}]
  ])
}
;// CONCATENATED MODULE: ./src/components/canvasRenderer.vue?vue&type=template&id=2becc798

;// CONCATENATED MODULE: ./src/lib/js/canvasStyles.js
/**
 *  This styles are used to 'map' svg-css styles to canvas elements
 *  creating svg elements and getting computed styles properties from them
 *
 *  Object keys as style names.
 *  Property '_cssClass', Required, String, css class to pick style
 *  Property '_svgElement', Optional, String type of svg element,
 *  Property '_svgAttrs', Optional,Object, svg element attributes
 *  see supported elements in stylePicker -> canvasPicker()
 *  or add property _svgAttrs to use any svg element
 *
 */
/* harmony default export */ var canvasStyles = ({
  background: {
    _cssClass: 'net-svg',
    fillStyle: 'white'
  },
  node: {
    _cssClass: 'node', // name of the class to pick properties
    fillStyle: 'green',
    strokeStyle: 'orange',
    lineWidth: 2
  },
  link: {
    _cssClass: 'link',
    strokeStyle: 'blue',
    lineWidth: 1
  },
  labels: {
    _cssClass: 'node-label',
    _svgElement: 'text', // svg element to pick properties
    fillStyle: 'black',
    fontFamily: 'Arial'
  },
  nodeSelected: {
    _cssClass: 'node selected',
    fillStyle: 'red',
    strokeStyle: 'orange',
    lineWidth: 2
  },
  linkSelected: {
    _cssClass: 'link selected',
    strokeStyle: 'green',
    lineWidth: 2
  },
  nodePinned: {
    _cssClass: 'node pinned',
    fillStyle: 'green',
    strokeStyle: 'red'
  },
  nodeSelectedPinned: {
    _cssClass: 'node selected pinned',
    fillStyle: 'green',
    strokeStyle: 'red'
  }
});

;// CONCATENATED MODULE: ./src/lib/js/stylePicker.js
/* harmony default export */ var stylePicker = ({
  randomId () {
    return Math.random().toString(36).substring(7)
  },

  // gets canvas style from css properties
  fillStyle (style, svg) {
    let pseudo = null
    let id = 'picker-' + this.randomId()
    let el = this.canvasPicker(style, id)
    // to replace 'px'
    svg.appendChild(el)
    let props = {
      fillStyle: 'fill',
      strokeStyle: 'stroke',
      lineWidth: 'stroke-width',
      fontFamily: 'font-family'
    }
    style = this.mapStyle(id, props, style, pseudo)
    svg.removeChild(el)
    return style
  },
  mapStyle (id, props, style, pseudo, numberValues) {
    let cStyle = window.getComputedStyle(document.getElementById(id), pseudo)
    numberValues = numberValues || ['lineWidth']
    for (let p in props) {
      let value = cStyle.getPropertyValue(props[p])
      if (numberValues.indexOf(p) > -1) value = parseInt(value, 10)
      if (value) {
        style[p] = value
      }
    }
    return style
  },
  // creates svg elements to pick css properties
  canvasPicker (style, id) {
    let attrs = style._svgAttrs || {}
    let element = style._svgElement || 'circle'
    if (!style._svgAttrs) {
      switch (element) {
        case 'text':
          attrs = { x: 10, y: 10, fontSize: 20 }
          break
        case 'circle':
          attrs = { cx: 10, cy: 10, r: 10 }
          break
      }
    }
    attrs.class = style._cssClass
    attrs.id = id
    return this.svgCreate(element, attrs)
  },
  compColor (color) {
    let el = document.createElement('div')
    el.style.backgroundColor = color
    document.body.appendChild(el)
    let nColor = window.getComputedStyle(el, null).getPropertyValue('background-color')
    document.body.removeChild(el)
    return nColor
  },
  // creates svg element
  svgCreate (element, attrs) {
    let el = document.createElementNS('http://www.w3.org/2000/svg', element)
    for (let a in attrs) {
      el.setAttributeNS(null, a, attrs[a])
    }
    return el
  },
  create (element, idPref, appendTo) {
    appendTo = appendTo || 'body'
    let el = document.createElement(element)
    let id = idPref || ''
    id += this.randomId()
    el.setAttribute('id', id)
    document[appendTo].appendChild(el)
    return el
  }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/canvasRenderer.vue?vue&type=script&lang=js




/* harmony default export */ var canvasRenderervue_type_script_lang_js = ({
  name: 'canvas-renderer',
  props: [
    'size',
    'offset',
    'padding',
    'nodes',
    'selected',
    'linksSelected',
    'links',
    'nodeSize',
    'fontSize',
    'strLinks',
    'linkWidth',
    'nodeLabels',
    'labelOffset',
    'canvasStyles',
    'nodeSym',
    'noNodes'
  ],
  data () {
    return {
      hitCanvas: null,
      shapes: {},
      drag: null,
      stylesReady: false,
      CssStyles: true, // load style from css props
      // canvas styles
      styles: canvasStyles,
      sprites: {}
    }
  },
  computed: {
    nodeSvg () {
      return this.nodeSym
    },
    canvasStyle () {
      let left = this.padding.x + 'px'
      let top = this.padding.y + 'px'
      return { left, top }
    }
  },
  directives: {
    renderCanvas: {
      mounted (canvas, data, vnode) {
        let nodes = data.value.nodes
        let links = data.value.links
        vnode.context.draw(nodes, links, canvas)
      }
    }
  },
  created () {
    if (this.canvasStyles) {
      for (let o in this.canvasStyles) {
        this.styles[o] = this.canvasStyles[o]
      }
    }
  },
  mounted () {
    let vm = this
    this.$nextTick(() => {
      vm.hitCanvas.width = vm.size.w
      vm.hitCanvas.height = vm.size.h
    })
  },
  watch: {
    nodeSize () {
      this.resetSprites()
    },
    canvasStyles () {
      this.resetSprites()
    }
  },
  methods: {
    //  canvas to png
    canvasScreenShot (cb, bgColor) {
      let graph = this.$refs.canvas
      let canvas = document.createElement('canvas')
      canvas.width = graph.width
      canvas.height = graph.height
      // background color
      let background = this.styles.background
      if (bgColor) background = this.getCssColor(bgColor)
      let ctx = canvas.getContext('2d')
      ctx = this.setCtx(ctx, background)
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(graph, 0, 0)
      let img = canvas.toDataURL('image/png')
      if (img) cb(null, img)
      else cb(new Error('error generating canvas image'))
    },
    // emits events as 'action'
    emit (e, args) {
      this.$emit('action', e, args)
    },
    // creates 'virtual' canvas to catch mouse interaction
    canvasInit () {
      let hitCanvas = document.createElement('canvas')
      hitCanvas.width = this.size.w
      hitCanvas.height = this.size.h
      hitCanvas.top = this.offset.y
      hitCanvas.left = this.offset.x
      hitCanvas.id = 'hit-canvas'
      this.hitCanvas = hitCanvas
      this.resetSprites()
    },
    resetSprites () {
      this.sprites = {}
      let sprites = ['node', 'nodeSelected', 'nodePinned', 'nodeSelectedPinned']
      for (let sp of sprites) {
        this.sprites[sp] = this.nodeSprite(this.styles[sp])
      }
    },
    // canvas click handler
    canvasClick (event) {
      let hitCtx = this.hitCanvas.getContext('2d')
      let e = (event.touches) ? event.touches[0] || event.changedTouches[0] : event
      let scrollTop = document.body.scrollTop
      let scrollLeft = document.body.scrollLeft
      let x = e.clientX + scrollLeft - this.padding.x
      let y = e.clientY + scrollTop - this.padding.y

      let pixel = hitCtx.getImageData(x, y, 1, 1).data
      let color = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`
      let shape = this.shapes[color]
      if (shape) {
        let col = shape.type + 's'
        let item = this[col][shape.index]
        if (item) {
          if (event.type === 'mouseup' || event.type === 'touchend') {
            if (this.drag) {
              this.drag = null
              this.emit('dragEnd')
            }
            this.emit(shape.type + 'Click', [event, item])
          } else if (event.type === 'mousedown' || event.type === 'touchstart') {
            this.drag = item
            this.emit('dragStart', [event, item.index])
          }
        }
      }
    },
    // draw circ node to canvas
    drawNode (ctx, node) {
      ctx.beginPath()
      ctx.arc(node.x, node.y, this.nodeSize / 2, 0, 2 * Math.PI, false)
      let fillStyle = ctx.fillStyle
      let strokeStyle = ctx.strokeStyle
      if (node._color) ctx.fillStyle = node._color
      if (node._borderColor) ctx.strokeStyle = node._borderColor
      ctx.fill()
      ctx.stroke()
      ctx.closePath()
      ctx.fillStyle = fillStyle
      ctx.strokeStyle = strokeStyle
    },
    // draw link to canvas
    drawLink (ctx, link) {
      ctx.beginPath()
      ctx.moveTo(link.source.x, link.source.y)
      ctx.lineTo(link.target.x, link.target.y)
      ctx.lineWidth = this.linkWidth
      ctx.strokeStyle = (link._color) ? link._color : link.color
      ctx.stroke()
    },
    // draw text to canvas
    drawText (item, ctx, style, key) {
      ctx = this.setCtx(ctx, style)
      if (this.fontSize) ctx.font = this.fontSize + 'px ' + style.fontFamily
      let text = (key) ? item[key] : item.name
      // let x = (item.size) ? item.x + item.size : item.x
      // let y = (item.size) ? item.y + (item.size / 2) : item.y
      let x = item.x + this.labelOffset.x
      let y = item.y + this.labelOffset.y
      ctx.fillText(text, x, y)
    },
    // render canvas
    draw (nodes, links, canvas) {
      if (!this.hitCanvas) this.canvasInit()
      let ctx = canvas.getContext('2d')
      let hitCtx = this.hitCanvas.getContext('2d')
      if (!this.stylesReady && this.CssStyles) {
        this.getCssStyles()
        this.resetSprites()
      }
      // clean canvas
      ctx.clearRect(0, 0, this.size.w, this.size.h)

      // draw  links
      ctx = this.setCtx(ctx, this.styles.link)
      for (let link of links) {
        if (!this.linksSelected[link.id]) {
          this.drawLink(ctx, link)
        }
        this.mapShape(link, 'link', this.drawLink, hitCtx)
      }

      // draw selected links
      ctx = this.setCtx(ctx, this.styles.linkSelected)
      for (let lid in this.linksSelected) {
        let link = this.linksSelected[lid]

        if (this.isOnView(link.source) && this.isOnView(link.target)) {
          this.drawLink(ctx, link)
        }
      }

      // draw nodes
      ctx = this.setCtx(ctx, this.styles.node)
      for (let node of nodes) {
        if (this.isOnView(node)) {
          if (!this.noNodes) {
            let sprite = this.getNodeSprite(node)
            ctx.drawImage(sprite, node.x - sprite.width / 2, node.y - sprite.height / 2)
            // map node shape
            this.mapShape(node, 'node', this.drawNode, hitCtx)
          }
          // draw  node labels
          if (this.nodeLabels) {
            node.size = this.nodeSize
            this.drawText(node, ctx, this.labelStyle(node))
            // ctx = this.setCtx(ctx, this.styles.node)
          }
        }
      }
      // draw selected nodes
      ctx = this.setCtx(ctx, this.styles.nodeSelected)
      for (let nid in this.selected) {
        let node = this.selected[nid]
        if (this.isOnView(node)) {
          // this.drawNode(node, ctx)
          // let sprite = this.sprites.nodeSelected
          let sprite = this.getNodeSprite(node)
          ctx.drawImage(sprite, node.x - sprite.width / 2, node.y - sprite.height / 2)
        }
      }
    },
    getNodeSprite (node) {
      let name = this.nodeSpriteName(node)
      let sprite = this.sprites[name]
      if (!sprite) { // set style and create sprite
        let style = this.loadNodeStyle(node)
        sprite = this.nodeSprite(style)
        this.sprites[name] = sprite
      }
      return sprite
    },
    nodeSpriteName (node) {
      let name = 'node'
      if (this.selected[node.id]) name += 'Selected'
      if (node.pinned) name += 'Pinned'
      if (node._cssClass) name += '-' + node._cssClass
      if (node._color) name += '-' + stylePicker.compColor(node._color)
      return name
    },
    nodeSprite (style) {
      let size = this.nodeSize + this.styles.node.lineWidth
      let canvasSize = (this.nodeSvg) ? size : size * 2
      let canvas = this.spriteCanvas(canvasSize)
      let ctx = canvas.getContext('2d')
      if (this.nodeSvg) {
        let attrs = { width: size, height: size, class: style._cssClass || '', style: style._cssStyle || '' }
        let url = svgExport.svgDataToUrl(this.nodeSvg, attrs)
        if (url) {
          let img = new Image()
          img.onload = () => {
            ctx.drawImage(img, 0, 0)
            URL.revokeObjectURL(url)
          }
          img.onerror = (error) => {
            // eslint-disable-next-line
            console.log('error creating node image', error)
          }
          img.src = url
        }
      } else {
        ctx = this.setCtx(ctx, style)
        this.drawNode(ctx, { x: size, y: size })
      }
      return canvas
    },
    spriteCanvas (size) {
      let canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      return canvas
    },
    isOnView (obj) {
      return (obj.x > 0 && obj.y > 0 && obj.x < this.size.w && obj.y < this.size.h)
    },
    // index shapes by random colors
    mapShape (shape, type, drawFunc, hitCtx) {
      // search unique color index
      if (!shape.colorIndex) shape.colorIndex = this.newColorIndex()
      let nShape = Object.assign({}, shape)
      nShape.color = shape.colorIndex.rgb
      nShape.borderColor = shape.colorIndex.rgb
      nShape.type = type
      // uncoment to debug
      // hitCtx = this.$refs.canvas.getContext('2d') // to debug
      let sprite = this.sprites[type] // the color is not important
      if (sprite) {
        sprite = this.cloneCanvas(sprite)
        sprite = this.fillCanvas(sprite, shape.colorIndex)
        hitCtx.drawImage(sprite, shape.x - sprite.width / 2, shape.y - sprite.height / 2)
      } else {
        drawFunc(hitCtx, nShape)
      }
      this.shapes[shape.colorIndex.rgb] = nShape
    },
    fillCanvas (canvas, color) {
      let ctx = canvas.getContext('2d')
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      let pixels = canvas.width * canvas.height * 4
      for (let p = 3; p <= pixels; p += 4) {
        if (imgData.data[p] > 0) { // a
          imgData.data[p] = 255 // sers alpha max to prevent transparency match
          imgData.data[p - 3] = color.r // r
          imgData.data[p - 2] = color.g // g
          imgData.data[p - 1] = color.b // b
        }
      }
      ctx.putImageData(imgData, 0, 0)
      return canvas
    },
    // generates color intex to shapes
    newColorIndex () {
      while (true) {
        let color = this.randomColor()
        if (!this.shapes[color.rgb]) return color
      }
    },
    // generates random color
    randomColor () {
      const r = Math.round(Math.random() * 255)
      const g = Math.round(Math.random() * 255)
      const b = Math.round(Math.random() * 255)
      return { r, g, b, rgb: `rgb(${r},${g},${b})` }
    },
    // sets canvas context style
    setCtx (ctx, conf) {
      for (let p in conf) {
        ctx[p] = conf[p]
      }
      return ctx
    },
    cloneCanvas (canvas) {
      let newCanvas = document.createElement('canvas')
      let ctx = newCanvas.getContext('2d')
      newCanvas.width = canvas.width
      newCanvas.height = canvas.height
      ctx.drawImage(canvas, 0, 0)
      return newCanvas
    },
    Sprite (name, cb) {
      if (!this.sprites[name]) {
        this.sprites[name] = cb()
      }
      return this.sprites[name]
    },
    // sets canvas properties form css properies
    getCssStyles () {
      let svg = stylePicker.create('svg', 'css-picker')
      for (let styleName in this.styles) {
        let style = this.styles[styleName] || {}
        style = stylePicker.fillStyle(style, svg)
      }
      document.body.removeChild(svg)
      this.stylesReady = true
    },
    loadNodeStyle (node) {
      let styleName = 'node'
      let selected = this.selected[node.id]
      if (selected) styleName = 'nodeSelected'
      if (node.pinned) styleName = 'nodePinned'
      if (selected && node.pinned) styleName = 'nodeSelectedPinned'
      // merge styles and update
      if (node._cssClass) {
        let name = styleName + '-' + node._cssClass
        if (!this.styles[name]) {
          let cStyle = Object.assign({}, this.styles[styleName] || {})
          cStyle._cssClass = cStyle._cssClass || ''
          cStyle._cssClass += ' ' + node._cssClass
          this.updateStyle(name, cStyle)
        }
        styleName = name
      }
      let style = Object.assign({}, this.styles[styleName] || this.updateStyle(styleName))
      if (node._color) {
        style.fillStyle = node._color
        style._cssStyle = 'fill:' + node._color
      }
      if (node._cssClass) {
        style._cssClass += ' ' + node._cssClass
      }
      return style
    },
    updateStyle (styleName, style) {
      style = style || this.styles[styleName] || {}
      let svg = stylePicker.create('svg', 'css-picker')
      style = stylePicker.fillStyle(style, svg)
      this.styles[styleName] = style
      document.body.removeChild(svg)
      return style
    },
    getCssColor (color) {
      let el = stylePicker.create('div', 'color-picker')
      let id = el.id
      el.setAttribute('style', 'background-color:' + color)
      let style = stylePicker.mapStyle(id, { fillStyle: 'background-color' }, [])
      document.body.removeChild(el)
      return style
    },
    labelStyle (node) {
      let style = this.styles.labels
      let labelClass = node._labelClass
      if (labelClass) {
        let styleName = 'labels-' + labelClass
        let labelStyle = this.styles[styleName]
        if (!labelStyle) {
          labelStyle = Object.assign({}, style)
          labelStyle._cssClass += ' ' + labelClass
          labelStyle = this.updateStyle(styleName, labelStyle)
        }
        style = labelStyle
      }
      return style
    }
  }
});

;// CONCATENATED MODULE: ./src/components/canvasRenderer.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-39.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-39.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-39.use[2]!./node_modules/stylus-loader/index.js??clonedRuleSet-39.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/canvasRenderer.vue?vue&type=style&index=0&id=2becc798&lang=stylus
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/canvasRenderer.vue?vue&type=style&index=0&id=2becc798&lang=stylus

;// CONCATENATED MODULE: ./src/components/canvasRenderer.vue




;


const canvasRenderer_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(canvasRenderervue_type_script_lang_js, [['render',canvasRenderervue_type_template_id_2becc798_render]])

/* harmony default export */ var canvasRenderer = (canvasRenderer_exports_);
;// CONCATENATED MODULE: ./src/lib/js/saveImage.js
/* eslint-disable */
/* harmony default export */ var saveImage = ({
  save (img, name) {
    if (img) {
      img = this.dataURIToBlob(img, (blob) => {
        let url = URL.createObjectURL(blob)
        this.download(url, name)
      })
    }
  },
  dataURIToBlob (dataURI, cb) {
    let binStr = atob(dataURI.split(',')[1])
    let len = binStr.length
    let arr = new Uint8Array(len)
    for (var i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i)
    }
    cb(new Blob([arr]))
  },
  download (url, name) {
    name = name || ''
    let link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', name)
    let el = document.body.appendChild(link)
    link.click()
    document.body.removeChild(el)
  }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-d3-network.vue?vue&type=script&lang=js

/* eslint-disable */






const d3 = Object.assign({}, d3_force_src_namespaceObject)

/* harmony default export */ var vue_d3_networkvue_type_script_lang_js = ({
  name: 'd3-network',
  components: {
    canvasRenderer: canvasRenderer,
    svgRenderer: svgRenderer
  },
  props: {
    netNodes: {
      type: Array
    },
    netLinks: {
      type: Array
    },
    options: {
      type: Object
    },
    nodeSym: {
      type: String
    },
    nodeCb: {
      type: Function
    },
    linkCb: {
      type: Function
    },
    simCb: {
      type: Function
    },
    customForces: {
      type: Object
    },
    selection: {
      type: Object,
      default: () => {
        return {
          nodes: {},
          links: {}
        }
      }
    }
  },
  data () {
    return {
      canvas: false,
      nodes: [],
      links: [],
      size: {
        w: 500,
        h: 500
      },
      offset: {
        x: 0,
        y: 0
      },
      clientOffset: {
        x: 0,
        y: 0
      },
      force: 500,
      forces: {
        Center: false,
        X: 0.5,
        Y: 0.5,
        ManyBody: true,
        Link: true
      },
      noNodes: false,
      strLinks: true,
      fontSize: 10,
      dragging: false,
      linkWidth: 1,
      nodeLabels: false,
      linkLabels: false,
      nodeSize: 5,
      mouseOfst: {
        x: 0,
        y: 0
      },
      padding: {
        x: 0,
        y: 0
      },
      simulation: null,
      nodeSvg: null,
      resizeListener: true
    }
  },
  render () {
    let ref = 'svg'
    let props = {}
    let renderer = svgRenderer
    let bindProps = [
      'size',
      'nodes',
      'links',
      'selected',
      'linksSelected',
      'strLinks',
      'linkWidth',
      'nodeLabels',
      'linkLabels',
      'fontSize',
      'labelOffset',
      'offset',
      'padding',
      'nodeSize',
      'noNodes'
    ]

    for (let prop of bindProps) {
      props[prop] = this[prop]
    }
    props.nodeSym = this.nodeSvg

    if (this.canvas) {
      renderer = canvasRenderer
      ref = 'canvas'
      props.canvasStyles = this.options.canvasStyles
    }

    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)(
      'div', {
        class: ['net'],
        onMouseMove: this.move,
        onTouchMove: this.move 
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)(
        renderer, {
          ...props, ref, onAction: this.methodCall
        }
      )]
    )
  },
  created () {
    this.updateOptions(this.options)
    this.buildNodes(this.netNodes)
    this.links = this.buildLinks(this.netLinks)
    this.updateNodeSvg()
  },
  mounted () {
    this.onResize()
    this.$nextTick(() => {
      this.animate()
    })
    if (this.resizeListener) window.addEventListener('resize', this.onResize)
  },
  beforeUnmount () {
    if (this.resizeListener) window.removeEventListener('resize', this.onResize)
  },
  computed: {
    selected () {
      return this.selection.nodes
    },
    linksSelected () {
      return this.selection.links
    },
    center () {
      return {
        x: this.size.w / 2 + (this.size.w / 200) + this.offset.x,
        y: this.size.h / 2 + (this.size.h / 200) + this.offset.y
      }
    },
    labelOffset () {
      return {
        x: (this.nodeSize / 2) + (this.fontSize / 2),
        y: this.fontSize / 2
      }
    }
  },
  emits: ['node-click', 'link-click'],
  watch: {
    netNodes (newValue) {
      this.buildNodes(newValue)
      this.reset()
    },
    netLinks (newValue, oldValue) {
      this.links = this.buildLinks(newValue)
      this.reset()
    },
    nodeSym () {
      this.updateNodeSvg()
    },
    options (newValue, oldValue) {
      this.updateOptions(newValue)
      if (oldValue.size && newValue.size) {
        if ((oldValue.size.w !== newValue.size.w) || (oldValue.size.h !== newValue.size.h)) {
          this.onResize()
        }
      }
      this.animate()
    }
  },
  methods: {
    updateNodeSvg () {
      let svg = null
      if (this.nodeSym) {
        svg = svgExport.svgElFromString(this.nodeSym)
      }
      this.nodeSvg = svg
    },
    methodCall (action, args) {
      let method = this[action]
      if (method && typeof (method) === 'function') {
        if (args) method(...args)
        else method()
      }
    },
    onResize () {
      let size = this.options.size
      if (!size || !size.w) this.size.w = this.$el.clientWidth
      if (!size || !size.h) this.size.h = this.$el.clientHeight
      this.padding.x = 0
      this.padding.y = 0
      // serach offsets of parents
      let vm = this
      while (vm.$parent) {
        this.padding.x += vm.$el.offsetLeft || 0
        this.padding.y += vm.$el.offsetTop || 0
        vm = vm.$parent
      }
      this.animate()
    },
    // -- Data
    updateOptions (options) {
      for (let op in options) {
        if (typeof this[op] !== 'undefined') {
          this[op] = options[op]
        }
      }
    },
    buildNodes (nodes) {
      this.nodes = nodes.map((node, index) => {
        // node formatter option
        node = this.itemCb(this.nodeCb, node)
        // index as default node id
        if (!node.id && node.id !== 0) node.id = index
        // initialize node coords
        if (!node.x) node.x = 0
        if (!node.y) node.y = 0 
        // node default name, allow string 0 as name
        if (!node.name && node.name !== '0') node.name = 'node ' + node.id
        if (node.svgSym) {
          node.svgIcon = svgExport.svgElFromString(node.svgSym)
          if (!this.canvas && node.svgIcon && !node.svgObj) node.svgObj = svgExport.toObject(node.svgIcon)
        }
        return node
      })
    },

    buildLinks (links) {
      return links.concat().map((link, index) => {
        // link formatter option
        link = this.itemCb(this.linkCb, link)
        // source and target for d3
        link.source = link.sid
        link.target = link.tid
        if (!link.id) link.id = 'link-' + index
        return link
      })
    },
    itemCb (cb, item) {
      if (cb && typeof (cb) === 'function') item = cb(item)
      return item
    },
    // -- Animation
    simulate (nodes, links) {
      let forces = this.forces
      let sim = d3.forceSimulation()
          .stop()
          .alpha(0.5)
          // .alphaMin(0.05)
          .nodes(nodes)

      if (forces.Center !== false) sim.force('center', d3.forceCenter(this.center.x, this.center.y))
      if (forces.X !== false) {
        sim.force('X', d3.forceX(this.center.x).strength(forces.X))
      }
      if (forces.Y !== false) {
        sim.force('Y', d3.forceY(this.center.y).strength(forces.Y))
      }
      if (forces.ManyBody !== false) {
        sim.force('charge', d3.forceManyBody().strength(-this.force))
      }
      if (forces.Link !== false) {
        sim.force('link', d3.forceLink(links).id(function (d) { return d.id }))
      }
      sim = this.setCustomForces(sim)
      sim = this.itemCb(this.simCb, sim)
      return sim
    },
    setCustomForces (sim) {
      let forces = this.customForces
      if (forces) {
        for (let f in forces) {
          let d3Func = this.getD3Func('force' + f)
          if (d3Func) {
            let args = forces[f]
            sim.force('custom' + f, d3Func(...args))
          }
        }
      }
      return sim
    },
    getD3Func (name) {
      let func = d3[name]
      if (func && typeof (func) === 'function') return func
      return null
    },
    animate () {
      if (this.simulation) this.simulation.stop()
      if (this.forces.Link !== false) this.simulation = this.simulate(this.nodes, this.links)
      else this.simulation = this.simulate(this.nodes)
      this.simulation.restart()
    },
    reset () {
      this.animate()
      this.nodes = this.simulation.nodes()
      if (this.forces.links) this.links = this.simulation.force('link').links()
    },
    // -- Mouse Interaction
    move (event) {
      let pos = this.clientPos(event)
      if (this.dragging !== false) {
        if (this.nodes[this.dragging]) {
          this.simulation.restart()
          this.simulation.alpha(0.5)
          this.nodes[this.dragging].fx = pos.x - this.mouseOfst.x
          this.nodes[this.dragging].fy = pos.y - this.mouseOfst.y
        }
      }
    },
    clientPos (event) {
      let x = (event.touches) ? event.touches[0].clientX : event.clientX
      let y = (event.touches) ? event.touches[0].clientY : event.clientY
      x = x || 0
      y = y || 0
      return { x, y }
    },
    dragStart (event, nodeKey) {
      this.dragging = (nodeKey === false) ? false : nodeKey
      this.setMouseOffset(event, this.nodes[nodeKey])
      if (this.dragging === false) {
        this.simulation.alpha(0.1)
        this.simulation.restart()
        this.setMouseOffset()
      }
    },
    dragEnd () {
      let node = this.nodes[this.dragging]
      if (node && !node.pinned) {
        // unfix node position
        node.fx = null
        node.fy = null
      }
      this.dragStart(false)
    },
    // -- Render helpers
    nodeClick (event, node) {
      this.$emit('node-click', event, node)
    },
    linkClick (event, link) {
      this.$emit('link-click', event, link)
    },
    setMouseOffset (event, node) {
      let x = 0
      let y = 0
      if (event && node) {
        let pos = this.clientPos(event)
        x = (pos.x) ? pos.x - node.x : node.x
        y = (pos.y) ? pos.y - node.y : node.y
      }
      this.mouseOfst = { x, y }
    },
    screenShot (name, bgColor, toSVG, svgAllCss) {
      let exportFunc
      let args = []
      if (this.canvas) {
        toSVG = false
        exportFunc = this.$refs.canvas.canvasScreenShot
        args = [bgColor]
      } else {
        exportFunc = this.$refs.svg.svgScreenShot
        args = [toSVG, bgColor, svgAllCss]
      }
      if (toSVG) name = name || 'export.svg'

      exportFunc((err, url) => {
        if (!err) {
          if (!toSVG) saveImage.save(url, name)
          else saveImage.download(url, name)
        }
        this.$emit('screen-shot', err)
      }, ...args)
    }
  }
});

;// CONCATENATED MODULE: ./src/vue-d3-network.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-39.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-39.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-39.use[2]!./node_modules/stylus-loader/index.js??clonedRuleSet-39.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-d3-network.vue?vue&type=style&index=0&id=3d42cb6e&lang=stylus
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/vue-d3-network.vue?vue&type=style&index=0&id=3d42cb6e&lang=stylus

;// CONCATENATED MODULE: ./src/vue-d3-network.vue



;

const vue_d3_network_exports_ = vue_d3_networkvue_type_script_lang_js;

/* harmony default export */ var vue_d3_network = (vue_d3_network_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (vue_d3_network);


}();
module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=vue-d3-network.common.js.map