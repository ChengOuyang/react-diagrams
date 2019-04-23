(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["_", "react"], factory);
	else if(typeof exports === 'object')
		exports["storm-react-diagrams"] = factory(require("lodash"), require("react"));
	else
		root["storm-react-diagrams"] = factory(root["_"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/closest/index.js":
/*!***************************************!*\
  !*** ./node_modules/closest/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var matches = __webpack_require__(/*! matches-selector */ "./node_modules/matches-selector/index.js")

module.exports = function (element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode

  while (parent && parent !== document) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode
  }
}


/***/ }),

/***/ "./node_modules/heap/index.js":
/*!************************************!*\
  !*** ./node_modules/heap/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/heap */ "./node_modules/heap/lib/heap.js");


/***/ }),

/***/ "./node_modules/heap/lib/heap.js":
/*!***************************************!*\
  !*** ./node_modules/heap/lib/heap.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// Generated by CoffeeScript 1.8.0
(function() {
  var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;

  floor = Math.floor, min = Math.min;


  /*
  Default comparison function to be used
   */

  defaultCmp = function(x, y) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  };


  /*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */

  insort = function(a, x, lo, hi, cmp) {
    var mid;
    if (lo == null) {
      lo = 0;
    }
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (lo < 0) {
      throw new Error('lo must be non-negative');
    }
    if (hi == null) {
      hi = a.length;
    }
    while (lo < hi) {
      mid = floor((lo + hi) / 2);
      if (cmp(x, a[mid]) < 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return ([].splice.apply(a, [lo, lo - lo].concat(x)), x);
  };


  /*
  Push item onto heap, maintaining the heap invariant.
   */

  heappush = function(array, item, cmp) {
    if (cmp == null) {
      cmp = defaultCmp;
    }
    array.push(item);
    return _siftdown(array, 0, array.length - 1, cmp);
  };


  /*
  Pop the smallest item off the heap, maintaining the heap invariant.
   */

  heappop = function(array, cmp) {
    var lastelt, returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    lastelt = array.pop();
    if (array.length) {
      returnitem = array[0];
      array[0] = lastelt;
      _siftup(array, 0, cmp);
    } else {
      returnitem = lastelt;
    }
    return returnitem;
  };


  /*
  Pop and return the current smallest value, and add the new item.
  
  This is more efficient than heappop() followed by heappush(), and can be
  more appropriate when using a fixed size heap. Note that the value
  returned may be larger than item! That constrains reasonable use of
  this routine unless written as part of a conditional replacement:
      if item > array[0]
        item = heapreplace(array, item)
   */

  heapreplace = function(array, item, cmp) {
    var returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    returnitem = array[0];
    array[0] = item;
    _siftup(array, 0, cmp);
    return returnitem;
  };


  /*
  Fast version of a heappush followed by a heappop.
   */

  heappushpop = function(array, item, cmp) {
    var _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (array.length && cmp(array[0], item) < 0) {
      _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
      _siftup(array, 0, cmp);
    }
    return item;
  };


  /*
  Transform list into a heap, in-place, in O(array.length) time.
   */

  heapify = function(array, cmp) {
    var i, _i, _j, _len, _ref, _ref1, _results, _results1;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    _ref1 = (function() {
      _results1 = [];
      for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--){ _results1.push(_j); }
      return _results1;
    }).apply(this).reverse();
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      i = _ref1[_i];
      _results.push(_siftup(array, i, cmp));
    }
    return _results;
  };


  /*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */

  updateItem = function(array, item, cmp) {
    var pos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    pos = array.indexOf(item);
    if (pos === -1) {
      return;
    }
    _siftdown(array, 0, pos, cmp);
    return _siftup(array, pos, cmp);
  };


  /*
  Find the n largest elements in a dataset.
   */

  nlargest = function(array, n, cmp) {
    var elem, result, _i, _len, _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    result = array.slice(0, n);
    if (!result.length) {
      return result;
    }
    heapify(result, cmp);
    _ref = array.slice(n);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      elem = _ref[_i];
      heappushpop(result, elem, cmp);
    }
    return result.sort(cmp).reverse();
  };


  /*
  Find the n smallest elements in a dataset.
   */

  nsmallest = function(array, n, cmp) {
    var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (n * 10 <= array.length) {
      result = array.slice(0, n).sort(cmp);
      if (!result.length) {
        return result;
      }
      los = result[result.length - 1];
      _ref = array.slice(n);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elem = _ref[_i];
        if (cmp(elem, los) < 0) {
          insort(result, elem, 0, null, cmp);
          result.pop();
          los = result[result.length - 1];
        }
      }
      return result;
    }
    heapify(array, cmp);
    _results = [];
    for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      _results.push(heappop(array, cmp));
    }
    return _results;
  };

  _siftdown = function(array, startpos, pos, cmp) {
    var newitem, parent, parentpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    newitem = array[pos];
    while (pos > startpos) {
      parentpos = (pos - 1) >> 1;
      parent = array[parentpos];
      if (cmp(newitem, parent) < 0) {
        array[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }
    return array[pos] = newitem;
  };

  _siftup = function(array, pos, cmp) {
    var childpos, endpos, newitem, rightpos, startpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    endpos = array.length;
    startpos = pos;
    newitem = array[pos];
    childpos = 2 * pos + 1;
    while (childpos < endpos) {
      rightpos = childpos + 1;
      if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
        childpos = rightpos;
      }
      array[pos] = array[childpos];
      pos = childpos;
      childpos = 2 * pos + 1;
    }
    array[pos] = newitem;
    return _siftdown(array, startpos, pos, cmp);
  };

  Heap = (function() {
    Heap.push = heappush;

    Heap.pop = heappop;

    Heap.replace = heapreplace;

    Heap.pushpop = heappushpop;

    Heap.heapify = heapify;

    Heap.updateItem = updateItem;

    Heap.nlargest = nlargest;

    Heap.nsmallest = nsmallest;

    function Heap(cmp) {
      this.cmp = cmp != null ? cmp : defaultCmp;
      this.nodes = [];
    }

    Heap.prototype.push = function(x) {
      return heappush(this.nodes, x, this.cmp);
    };

    Heap.prototype.pop = function() {
      return heappop(this.nodes, this.cmp);
    };

    Heap.prototype.peek = function() {
      return this.nodes[0];
    };

    Heap.prototype.contains = function(x) {
      return this.nodes.indexOf(x) !== -1;
    };

    Heap.prototype.replace = function(x) {
      return heapreplace(this.nodes, x, this.cmp);
    };

    Heap.prototype.pushpop = function(x) {
      return heappushpop(this.nodes, x, this.cmp);
    };

    Heap.prototype.heapify = function() {
      return heapify(this.nodes, this.cmp);
    };

    Heap.prototype.updateItem = function(x) {
      return updateItem(this.nodes, x, this.cmp);
    };

    Heap.prototype.clear = function() {
      return this.nodes = [];
    };

    Heap.prototype.empty = function() {
      return this.nodes.length === 0;
    };

    Heap.prototype.size = function() {
      return this.nodes.length;
    };

    Heap.prototype.clone = function() {
      var heap;
      heap = new Heap();
      heap.nodes = this.nodes.slice(0);
      return heap;
    };

    Heap.prototype.toArray = function() {
      return this.nodes.slice(0);
    };

    Heap.prototype.insert = Heap.prototype.push;

    Heap.prototype.top = Heap.prototype.peek;

    Heap.prototype.front = Heap.prototype.peek;

    Heap.prototype.has = Heap.prototype.contains;

    Heap.prototype.copy = Heap.prototype.clone;

    return Heap;

  })();

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = Heap;
  } else {
    window.Heap = Heap;
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../usr/local/lib/node_modules/webpack/buildin/module.js */ "../../../../../../usr/local/lib/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/matches-selector/index.js":
/*!************************************************!*\
  !*** ./node_modules/matches-selector/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/***/ }),

/***/ "./node_modules/pathfinding/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pathfinding/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/PathFinding */ "./node_modules/pathfinding/src/PathFinding.js");


/***/ }),

/***/ "./node_modules/pathfinding/src/PathFinding.js":
/*!*****************************************************!*\
  !*** ./node_modules/pathfinding/src/PathFinding.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'Heap'                      : __webpack_require__(/*! heap */ "./node_modules/heap/index.js"),
    'Node'                      : __webpack_require__(/*! ./core/Node */ "./node_modules/pathfinding/src/core/Node.js"),
    'Grid'                      : __webpack_require__(/*! ./core/Grid */ "./node_modules/pathfinding/src/core/Grid.js"),
    'Util'                      : __webpack_require__(/*! ./core/Util */ "./node_modules/pathfinding/src/core/Util.js"),
    'DiagonalMovement'          : __webpack_require__(/*! ./core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js"),
    'Heuristic'                 : __webpack_require__(/*! ./core/Heuristic */ "./node_modules/pathfinding/src/core/Heuristic.js"),
    'AStarFinder'               : __webpack_require__(/*! ./finders/AStarFinder */ "./node_modules/pathfinding/src/finders/AStarFinder.js"),
    'BestFirstFinder'           : __webpack_require__(/*! ./finders/BestFirstFinder */ "./node_modules/pathfinding/src/finders/BestFirstFinder.js"),
    'BreadthFirstFinder'        : __webpack_require__(/*! ./finders/BreadthFirstFinder */ "./node_modules/pathfinding/src/finders/BreadthFirstFinder.js"),
    'DijkstraFinder'            : __webpack_require__(/*! ./finders/DijkstraFinder */ "./node_modules/pathfinding/src/finders/DijkstraFinder.js"),
    'BiAStarFinder'             : __webpack_require__(/*! ./finders/BiAStarFinder */ "./node_modules/pathfinding/src/finders/BiAStarFinder.js"),
    'BiBestFirstFinder'         : __webpack_require__(/*! ./finders/BiBestFirstFinder */ "./node_modules/pathfinding/src/finders/BiBestFirstFinder.js"),
    'BiBreadthFirstFinder'      : __webpack_require__(/*! ./finders/BiBreadthFirstFinder */ "./node_modules/pathfinding/src/finders/BiBreadthFirstFinder.js"),
    'BiDijkstraFinder'          : __webpack_require__(/*! ./finders/BiDijkstraFinder */ "./node_modules/pathfinding/src/finders/BiDijkstraFinder.js"),
    'IDAStarFinder'             : __webpack_require__(/*! ./finders/IDAStarFinder */ "./node_modules/pathfinding/src/finders/IDAStarFinder.js"),
    'JumpPointFinder'           : __webpack_require__(/*! ./finders/JumpPointFinder */ "./node_modules/pathfinding/src/finders/JumpPointFinder.js"),
};


/***/ }),

/***/ "./node_modules/pathfinding/src/core/DiagonalMovement.js":
/*!***************************************************************!*\
  !*** ./node_modules/pathfinding/src/core/DiagonalMovement.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var DiagonalMovement = {
    Always: 1,
    Never: 2,
    IfAtMostOneObstacle: 3,
    OnlyWhenNoObstacles: 4
};

module.exports = DiagonalMovement;

/***/ }),

/***/ "./node_modules/pathfinding/src/core/Grid.js":
/*!***************************************************!*\
  !*** ./node_modules/pathfinding/src/core/Grid.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Node = __webpack_require__(/*! ./Node */ "./node_modules/pathfinding/src/core/Node.js");
var DiagonalMovement = __webpack_require__(/*! ./DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * The Grid class, which serves as the encapsulation of the layout of the nodes.
 * @constructor
 * @param {number|Array<Array<(number|boolean)>>} width_or_matrix Number of columns of the grid, or matrix
 * @param {number} height Number of rows of the grid.
 * @param {Array<Array<(number|boolean)>>} [matrix] - A 0-1 matrix
 *     representing the walkable status of the nodes(0 or false for walkable).
 *     If the matrix is not supplied, all the nodes will be walkable.  */
function Grid(width_or_matrix, height, matrix) {
    var width;

    if (typeof width_or_matrix !== 'object') {
        width = width_or_matrix;
    } else {
        height = width_or_matrix.length;
        width = width_or_matrix[0].length;
        matrix = width_or_matrix;
    }

    /**
     * The number of columns of the grid.
     * @type number
     */
    this.width = width;
    /**
     * The number of rows of the grid.
     * @type number
     */
    this.height = height;

    /**
     * A 2D array of nodes.
     */
    this.nodes = this._buildNodes(width, height, matrix);
}

/**
 * Build and return the nodes.
 * @private
 * @param {number} width
 * @param {number} height
 * @param {Array<Array<number|boolean>>} [matrix] - A 0-1 matrix representing
 *     the walkable status of the nodes.
 * @see Grid
 */
Grid.prototype._buildNodes = function(width, height, matrix) {
    var i, j,
        nodes = new Array(height);

    for (i = 0; i < height; ++i) {
        nodes[i] = new Array(width);
        for (j = 0; j < width; ++j) {
            nodes[i][j] = new Node(j, i);
        }
    }


    if (matrix === undefined) {
        return nodes;
    }

    if (matrix.length !== height || matrix[0].length !== width) {
        throw new Error('Matrix size does not fit');
    }

    for (i = 0; i < height; ++i) {
        for (j = 0; j < width; ++j) {
            if (matrix[i][j]) {
                // 0, false, null will be walkable
                // while others will be un-walkable
                nodes[i][j].walkable = false;
            }
        }
    }

    return nodes;
};


Grid.prototype.getNodeAt = function(x, y) {
    return this.nodes[y][x];
};


/**
 * Determine whether the node at the given position is walkable.
 * (Also returns false if the position is outside the grid.)
 * @param {number} x - The x coordinate of the node.
 * @param {number} y - The y coordinate of the node.
 * @return {boolean} - The walkability of the node.
 */
Grid.prototype.isWalkableAt = function(x, y) {
    return this.isInside(x, y) && this.nodes[y][x].walkable;
};


/**
 * Determine whether the position is inside the grid.
 * XXX: `grid.isInside(x, y)` is wierd to read.
 * It should be `(x, y) is inside grid`, but I failed to find a better
 * name for this method.
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
Grid.prototype.isInside = function(x, y) {
    return (x >= 0 && x < this.width) && (y >= 0 && y < this.height);
};


/**
 * Set whether the node on the given position is walkable.
 * NOTE: throws exception if the coordinate is not inside the grid.
 * @param {number} x - The x coordinate of the node.
 * @param {number} y - The y coordinate of the node.
 * @param {boolean} walkable - Whether the position is walkable.
 */
Grid.prototype.setWalkableAt = function(x, y, walkable) {
    this.nodes[y][x].walkable = walkable;
};


/**
 * Get the neighbors of the given node.
 *
 *     offsets      diagonalOffsets:
 *  +---+---+---+    +---+---+---+
 *  |   | 0 |   |    | 0 |   | 1 |
 *  +---+---+---+    +---+---+---+
 *  | 3 |   | 1 |    |   |   |   |
 *  +---+---+---+    +---+---+---+
 *  |   | 2 |   |    | 3 |   | 2 |
 *  +---+---+---+    +---+---+---+
 *
 *  When allowDiagonal is true, if offsets[i] is valid, then
 *  diagonalOffsets[i] and
 *  diagonalOffsets[(i + 1) % 4] is valid.
 * @param {Node} node
 * @param {DiagonalMovement} diagonalMovement
 */
Grid.prototype.getNeighbors = function(node, diagonalMovement) {
    var x = node.x,
        y = node.y,
        neighbors = [],
        s0 = false, d0 = false,
        s1 = false, d1 = false,
        s2 = false, d2 = false,
        s3 = false, d3 = false,
        nodes = this.nodes;

    // ↑
    if (this.isWalkableAt(x, y - 1)) {
        neighbors.push(nodes[y - 1][x]);
        s0 = true;
    }
    // →
    if (this.isWalkableAt(x + 1, y)) {
        neighbors.push(nodes[y][x + 1]);
        s1 = true;
    }
    // ↓
    if (this.isWalkableAt(x, y + 1)) {
        neighbors.push(nodes[y + 1][x]);
        s2 = true;
    }
    // ←
    if (this.isWalkableAt(x - 1, y)) {
        neighbors.push(nodes[y][x - 1]);
        s3 = true;
    }

    if (diagonalMovement === DiagonalMovement.Never) {
        return neighbors;
    }

    if (diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
        d0 = s3 && s0;
        d1 = s0 && s1;
        d2 = s1 && s2;
        d3 = s2 && s3;
    } else if (diagonalMovement === DiagonalMovement.IfAtMostOneObstacle) {
        d0 = s3 || s0;
        d1 = s0 || s1;
        d2 = s1 || s2;
        d3 = s2 || s3;
    } else if (diagonalMovement === DiagonalMovement.Always) {
        d0 = true;
        d1 = true;
        d2 = true;
        d3 = true;
    } else {
        throw new Error('Incorrect value of diagonalMovement');
    }

    // ↖
    if (d0 && this.isWalkableAt(x - 1, y - 1)) {
        neighbors.push(nodes[y - 1][x - 1]);
    }
    // ↗
    if (d1 && this.isWalkableAt(x + 1, y - 1)) {
        neighbors.push(nodes[y - 1][x + 1]);
    }
    // ↘
    if (d2 && this.isWalkableAt(x + 1, y + 1)) {
        neighbors.push(nodes[y + 1][x + 1]);
    }
    // ↙
    if (d3 && this.isWalkableAt(x - 1, y + 1)) {
        neighbors.push(nodes[y + 1][x - 1]);
    }

    return neighbors;
};


/**
 * Get a clone of this grid.
 * @return {Grid} Cloned grid.
 */
Grid.prototype.clone = function() {
    var i, j,

        width = this.width,
        height = this.height,
        thisNodes = this.nodes,

        newGrid = new Grid(width, height),
        newNodes = new Array(height);

    for (i = 0; i < height; ++i) {
        newNodes[i] = new Array(width);
        for (j = 0; j < width; ++j) {
            newNodes[i][j] = new Node(j, i, thisNodes[i][j].walkable);
        }
    }

    newGrid.nodes = newNodes;

    return newGrid;
};

module.exports = Grid;


/***/ }),

/***/ "./node_modules/pathfinding/src/core/Heuristic.js":
/*!********************************************************!*\
  !*** ./node_modules/pathfinding/src/core/Heuristic.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @namespace PF.Heuristic
 * @description A collection of heuristic functions.
 */
module.exports = {

  /**
   * Manhattan distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} dx + dy
   */
  manhattan: function(dx, dy) {
      return dx + dy;
  },

  /**
   * Euclidean distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy)
   */
  euclidean: function(dx, dy) {
      return Math.sqrt(dx * dx + dy * dy);
  },

  /**
   * Octile distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} sqrt(dx * dx + dy * dy) for grids
   */
  octile: function(dx, dy) {
      var F = Math.SQRT2 - 1;
      return (dx < dy) ? F * dx + dy : F * dy + dx;
  },

  /**
   * Chebyshev distance.
   * @param {number} dx - Difference in x.
   * @param {number} dy - Difference in y.
   * @return {number} max(dx, dy)
   */
  chebyshev: function(dx, dy) {
      return Math.max(dx, dy);
  }

};


/***/ }),

/***/ "./node_modules/pathfinding/src/core/Node.js":
/*!***************************************************!*\
  !*** ./node_modules/pathfinding/src/core/Node.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A node in grid. 
 * This class holds some basic information about a node and custom 
 * attributes may be added, depending on the algorithms' needs.
 * @constructor
 * @param {number} x - The x coordinate of the node on the grid.
 * @param {number} y - The y coordinate of the node on the grid.
 * @param {boolean} [walkable] - Whether this node is walkable.
 */
function Node(x, y, walkable) {
    /**
     * The x coordinate of the node on the grid.
     * @type number
     */
    this.x = x;
    /**
     * The y coordinate of the node on the grid.
     * @type number
     */
    this.y = y;
    /**
     * Whether this node can be walked through.
     * @type boolean
     */
    this.walkable = (walkable === undefined ? true : walkable);
}

module.exports = Node;


/***/ }),

/***/ "./node_modules/pathfinding/src/core/Util.js":
/*!***************************************************!*\
  !*** ./node_modules/pathfinding/src/core/Util.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Backtrace according to the parent records and return the path.
 * (including both start and end nodes)
 * @param {Node} node End node
 * @return {Array<Array<number>>} the path
 */
function backtrace(node) {
    var path = [[node.x, node.y]];
    while (node.parent) {
        node = node.parent;
        path.push([node.x, node.y]);
    }
    return path.reverse();
}
exports.backtrace = backtrace;

/**
 * Backtrace from start and end node, and return the path.
 * (including both start and end nodes)
 * @param {Node}
 * @param {Node}
 */
function biBacktrace(nodeA, nodeB) {
    var pathA = backtrace(nodeA),
        pathB = backtrace(nodeB);
    return pathA.concat(pathB.reverse());
}
exports.biBacktrace = biBacktrace;

/**
 * Compute the length of the path.
 * @param {Array<Array<number>>} path The path
 * @return {number} The length of the path
 */
function pathLength(path) {
    var i, sum = 0, a, b, dx, dy;
    for (i = 1; i < path.length; ++i) {
        a = path[i - 1];
        b = path[i];
        dx = a[0] - b[0];
        dy = a[1] - b[1];
        sum += Math.sqrt(dx * dx + dy * dy);
    }
    return sum;
}
exports.pathLength = pathLength;


/**
 * Given the start and end coordinates, return all the coordinates lying
 * on the line formed by these coordinates, based on Bresenham's algorithm.
 * http://en.wikipedia.org/wiki/Bresenham's_line_algorithm#Simplification
 * @param {number} x0 Start x coordinate
 * @param {number} y0 Start y coordinate
 * @param {number} x1 End x coordinate
 * @param {number} y1 End y coordinate
 * @return {Array<Array<number>>} The coordinates on the line
 */
function interpolate(x0, y0, x1, y1) {
    var abs = Math.abs,
        line = [],
        sx, sy, dx, dy, err, e2;

    dx = abs(x1 - x0);
    dy = abs(y1 - y0);

    sx = (x0 < x1) ? 1 : -1;
    sy = (y0 < y1) ? 1 : -1;

    err = dx - dy;

    while (true) {
        line.push([x0, y0]);

        if (x0 === x1 && y0 === y1) {
            break;
        }
        
        e2 = 2 * err;
        if (e2 > -dy) {
            err = err - dy;
            x0 = x0 + sx;
        }
        if (e2 < dx) {
            err = err + dx;
            y0 = y0 + sy;
        }
    }

    return line;
}
exports.interpolate = interpolate;


/**
 * Given a compressed path, return a new path that has all the segments
 * in it interpolated.
 * @param {Array<Array<number>>} path The path
 * @return {Array<Array<number>>} expanded path
 */
function expandPath(path) {
    var expanded = [],
        len = path.length,
        coord0, coord1,
        interpolated,
        interpolatedLen,
        i, j;

    if (len < 2) {
        return expanded;
    }

    for (i = 0; i < len - 1; ++i) {
        coord0 = path[i];
        coord1 = path[i + 1];

        interpolated = interpolate(coord0[0], coord0[1], coord1[0], coord1[1]);
        interpolatedLen = interpolated.length;
        for (j = 0; j < interpolatedLen - 1; ++j) {
            expanded.push(interpolated[j]);
        }
    }
    expanded.push(path[len - 1]);

    return expanded;
}
exports.expandPath = expandPath;


/**
 * Smoothen the give path.
 * The original path will not be modified; a new path will be returned.
 * @param {PF.Grid} grid
 * @param {Array<Array<number>>} path The path
 */
function smoothenPath(grid, path) {
    var len = path.length,
        x0 = path[0][0],        // path start x
        y0 = path[0][1],        // path start y
        x1 = path[len - 1][0],  // path end x
        y1 = path[len - 1][1],  // path end y
        sx, sy,                 // current start coordinate
        ex, ey,                 // current end coordinate
        newPath,
        i, j, coord, line, testCoord, blocked;

    sx = x0;
    sy = y0;
    newPath = [[sx, sy]];

    for (i = 2; i < len; ++i) {
        coord = path[i];
        ex = coord[0];
        ey = coord[1];
        line = interpolate(sx, sy, ex, ey);

        blocked = false;
        for (j = 1; j < line.length; ++j) {
            testCoord = line[j];

            if (!grid.isWalkableAt(testCoord[0], testCoord[1])) {
                blocked = true;
                break;
            }
        }
        if (blocked) {
            lastValidCoord = path[i - 1];
            newPath.push(lastValidCoord);
            sx = lastValidCoord[0];
            sy = lastValidCoord[1];
        }
    }
    newPath.push([x1, y1]);

    return newPath;
}
exports.smoothenPath = smoothenPath;


/**
 * Compress a path, remove redundant nodes without altering the shape
 * The original path is not modified
 * @param {Array<Array<number>>} path The path
 * @return {Array<Array<number>>} The compressed path
 */
function compressPath(path) {

    // nothing to compress
    if(path.length < 3) {
        return path;
    }

    var compressed = [],
        sx = path[0][0], // start x
        sy = path[0][1], // start y
        px = path[1][0], // second point x
        py = path[1][1], // second point y
        dx = px - sx, // direction between the two points
        dy = py - sy, // direction between the two points
        lx, ly,
        ldx, ldy,
        sq, i;

    // normalize the direction
    sq = Math.sqrt(dx*dx + dy*dy);
    dx /= sq;
    dy /= sq;

    // start the new path
    compressed.push([sx,sy]);

    for(i = 2; i < path.length; i++) {

        // store the last point
        lx = px;
        ly = py;

        // store the last direction
        ldx = dx;
        ldy = dy;

        // next point
        px = path[i][0];
        py = path[i][1];

        // next direction
        dx = px - lx;
        dy = py - ly;

        // normalize
        sq = Math.sqrt(dx*dx + dy*dy);
        dx /= sq;
        dy /= sq;

        // if the direction has changed, store the point
        if ( dx !== ldx || dy !== ldy ) {
            compressed.push([lx,ly]);
        }
    }

    // store the last point
    compressed.push([px,py]);

    return compressed;
}
exports.compressPath = compressPath;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/AStarFinder.js":
/*!*************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/AStarFinder.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Heap       = __webpack_require__(/*! heap */ "./node_modules/heap/index.js");
var Util       = __webpack_require__(/*! ../core/Util */ "./node_modules/pathfinding/src/core/Util.js");
var Heuristic  = __webpack_require__(/*! ../core/Heuristic */ "./node_modules/pathfinding/src/core/Heuristic.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * A* path-finder. Based upon https://github.com/bgrins/javascript-astar
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching 
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 */
function AStarFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.weight = opt.weight || 1;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }

    // When diagonal movement is allowed the manhattan heuristic is not
    //admissible. It should be octile instead
    if (this.diagonalMovement === DiagonalMovement.Never) {
        this.heuristic = opt.heuristic || Heuristic.manhattan;
    } else {
        this.heuristic = opt.heuristic || Heuristic.octile;
    }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
AStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var openList = new Heap(function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        }),
        startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        heuristic = this.heuristic,
        diagonalMovement = this.diagonalMovement,
        weight = this.weight,
        abs = Math.abs, SQRT2 = Math.SQRT2,
        node, neighbors, neighbor, i, l, x, y, ng;

    // set the `g` and `f` value of the start node to be 0
    startNode.g = 0;
    startNode.f = 0;

    // push the start node into the open list
    openList.push(startNode);
    startNode.opened = true;

    // while the open list is not empty
    while (!openList.empty()) {
        // pop the position of node which has the minimum `f` value.
        node = openList.pop();
        node.closed = true;

        // if reached the end position, construct the path and return it
        if (node === endNode) {
            return Util.backtrace(endNode);
        }

        // get neigbours of the current node
        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h || weight * heuristic(abs(x - endX), abs(y - endY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    openList.push(neighbor);
                    neighbor.opened = true;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    openList.updateItem(neighbor);
                }
            }
        } // end for each neighbor
    } // end while not open list empty

    // fail to find the path
    return [];
};

module.exports = AStarFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/BestFirstFinder.js":
/*!*****************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/BestFirstFinder.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AStarFinder = __webpack_require__(/*! ./AStarFinder */ "./node_modules/pathfinding/src/finders/AStarFinder.js");

/**
 * Best-First-Search path-finder.
 * @constructor
 * @extends AStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 */
function BestFirstFinder(opt) {
    AStarFinder.call(this, opt);

    var orig = this.heuristic;
    this.heuristic = function(dx, dy) {
        return orig(dx, dy) * 1000000;
    };
}

BestFirstFinder.prototype = new AStarFinder();
BestFirstFinder.prototype.constructor = BestFirstFinder;

module.exports = BestFirstFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/BiAStarFinder.js":
/*!***************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/BiAStarFinder.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Heap       = __webpack_require__(/*! heap */ "./node_modules/heap/index.js");
var Util       = __webpack_require__(/*! ../core/Util */ "./node_modules/pathfinding/src/core/Util.js");
var Heuristic  = __webpack_require__(/*! ../core/Heuristic */ "./node_modules/pathfinding/src/core/Heuristic.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * A* path-finder.
 * based upon https://github.com/bgrins/javascript-astar
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 */
function BiAStarFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.weight = opt.weight || 1;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }

    //When diagonal movement is allowed the manhattan heuristic is not admissible
    //It should be octile instead
    if (this.diagonalMovement === DiagonalMovement.Never) {
        this.heuristic = opt.heuristic || Heuristic.manhattan;
    } else {
        this.heuristic = opt.heuristic || Heuristic.octile;
    }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
BiAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var cmp = function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        },
        startOpenList = new Heap(cmp),
        endOpenList = new Heap(cmp),
        startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        heuristic = this.heuristic,
        diagonalMovement = this.diagonalMovement,
        weight = this.weight,
        abs = Math.abs, SQRT2 = Math.SQRT2,
        node, neighbors, neighbor, i, l, x, y, ng,
        BY_START = 1, BY_END = 2;

    // set the `g` and `f` value of the start node to be 0
    // and push it into the start open list
    startNode.g = 0;
    startNode.f = 0;
    startOpenList.push(startNode);
    startNode.opened = BY_START;

    // set the `g` and `f` value of the end node to be 0
    // and push it into the open open list
    endNode.g = 0;
    endNode.f = 0;
    endOpenList.push(endNode);
    endNode.opened = BY_END;

    // while both the open lists are not empty
    while (!startOpenList.empty() && !endOpenList.empty()) {

        // pop the position of start node which has the minimum `f` value.
        node = startOpenList.pop();
        node.closed = true;

        // get neigbours of the current node
        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened === BY_END) {
                return Util.biBacktrace(node, neighbor);
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h ||
                    weight * heuristic(abs(x - endX), abs(y - endY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    startOpenList.push(neighbor);
                    neighbor.opened = BY_START;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    startOpenList.updateItem(neighbor);
                }
            }
        } // end for each neighbor


        // pop the position of end node which has the minimum `f` value.
        node = endOpenList.pop();
        node.closed = true;

        // get neigbours of the current node
        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened === BY_START) {
                return Util.biBacktrace(neighbor, node);
            }

            x = neighbor.x;
            y = neighbor.y;

            // get the distance between current node and the neighbor
            // and calculate the next g score
            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

            // check if the neighbor has not been inspected yet, or
            // can be reached with smaller cost from the current node
            if (!neighbor.opened || ng < neighbor.g) {
                neighbor.g = ng;
                neighbor.h = neighbor.h ||
                    weight * heuristic(abs(x - startX), abs(y - startY));
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = node;

                if (!neighbor.opened) {
                    endOpenList.push(neighbor);
                    neighbor.opened = BY_END;
                } else {
                    // the neighbor can be reached with smaller cost.
                    // Since its f value has been updated, we have to
                    // update its position in the open list
                    endOpenList.updateItem(neighbor);
                }
            }
        } // end for each neighbor
    } // end while not open list empty

    // fail to find the path
    return [];
};

module.exports = BiAStarFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/BiBestFirstFinder.js":
/*!*******************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/BiBestFirstFinder.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BiAStarFinder = __webpack_require__(/*! ./BiAStarFinder */ "./node_modules/pathfinding/src/finders/BiAStarFinder.js");

/**
 * Bi-direcitional Best-First-Search path-finder.
 * @constructor
 * @extends BiAStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 */
function BiBestFirstFinder(opt) {
    BiAStarFinder.call(this, opt);

    var orig = this.heuristic;
    this.heuristic = function(dx, dy) {
        return orig(dx, dy) * 1000000;
    };
}

BiBestFirstFinder.prototype = new BiAStarFinder();
BiBestFirstFinder.prototype.constructor = BiBestFirstFinder;

module.exports = BiBestFirstFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/BiBreadthFirstFinder.js":
/*!**********************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/BiBreadthFirstFinder.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../core/Util */ "./node_modules/pathfinding/src/core/Util.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * Bi-directional Breadth-First-Search path finder.
 * @constructor
 * @param {object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function BiBreadthFirstFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }
}


/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
BiBreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        startOpenList = [], endOpenList = [],
        neighbors, neighbor, node,
        diagonalMovement = this.diagonalMovement,
        BY_START = 0, BY_END = 1,
        i, l;

    // push the start and end nodes into the queues
    startOpenList.push(startNode);
    startNode.opened = true;
    startNode.by = BY_START;

    endOpenList.push(endNode);
    endNode.opened = true;
    endNode.by = BY_END;

    // while both the queues are not empty
    while (startOpenList.length && endOpenList.length) {

        // expand start open list

        node = startOpenList.shift();
        node.closed = true;

        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened) {
                // if this node has been inspected by the reversed search,
                // then a path is found.
                if (neighbor.by === BY_END) {
                    return Util.biBacktrace(node, neighbor);
                }
                continue;
            }
            startOpenList.push(neighbor);
            neighbor.parent = node;
            neighbor.opened = true;
            neighbor.by = BY_START;
        }

        // expand end open list

        node = endOpenList.shift();
        node.closed = true;

        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            if (neighbor.closed) {
                continue;
            }
            if (neighbor.opened) {
                if (neighbor.by === BY_START) {
                    return Util.biBacktrace(neighbor, node);
                }
                continue;
            }
            endOpenList.push(neighbor);
            neighbor.parent = node;
            neighbor.opened = true;
            neighbor.by = BY_END;
        }
    }

    // fail to find the path
    return [];
};

module.exports = BiBreadthFirstFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/BiDijkstraFinder.js":
/*!******************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/BiDijkstraFinder.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BiAStarFinder = __webpack_require__(/*! ./BiAStarFinder */ "./node_modules/pathfinding/src/finders/BiAStarFinder.js");

/**
 * Bi-directional Dijkstra path-finder.
 * @constructor
 * @extends BiAStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function BiDijkstraFinder(opt) {
    BiAStarFinder.call(this, opt);
    this.heuristic = function(dx, dy) {
        return 0;
    };
}

BiDijkstraFinder.prototype = new BiAStarFinder();
BiDijkstraFinder.prototype.constructor = BiDijkstraFinder;

module.exports = BiDijkstraFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/BreadthFirstFinder.js":
/*!********************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/BreadthFirstFinder.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ../core/Util */ "./node_modules/pathfinding/src/core/Util.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * Breadth-First-Search path finder.
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function BreadthFirstFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }
}

/**
 * Find and return the the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
BreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var openList = [],
        diagonalMovement = this.diagonalMovement,
        startNode = grid.getNodeAt(startX, startY),
        endNode = grid.getNodeAt(endX, endY),
        neighbors, neighbor, node, i, l;

    // push the start pos into the queue
    openList.push(startNode);
    startNode.opened = true;

    // while the queue is not empty
    while (openList.length) {
        // take the front node from the queue
        node = openList.shift();
        node.closed = true;

        // reached the end position
        if (node === endNode) {
            return Util.backtrace(endNode);
        }

        neighbors = grid.getNeighbors(node, diagonalMovement);
        for (i = 0, l = neighbors.length; i < l; ++i) {
            neighbor = neighbors[i];

            // skip this neighbor if it has been inspected before
            if (neighbor.closed || neighbor.opened) {
                continue;
            }

            openList.push(neighbor);
            neighbor.opened = true;
            neighbor.parent = node;
        }
    }
    
    // fail to find the path
    return [];
};

module.exports = BreadthFirstFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/DijkstraFinder.js":
/*!****************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/DijkstraFinder.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AStarFinder = __webpack_require__(/*! ./AStarFinder */ "./node_modules/pathfinding/src/finders/AStarFinder.js");

/**
 * Dijkstra path-finder.
 * @constructor
 * @extends AStarFinder
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function DijkstraFinder(opt) {
    AStarFinder.call(this, opt);
    this.heuristic = function(dx, dy) {
        return 0;
    };
}

DijkstraFinder.prototype = new AStarFinder();
DijkstraFinder.prototype.constructor = DijkstraFinder;

module.exports = DijkstraFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/IDAStarFinder.js":
/*!***************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/IDAStarFinder.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util       = __webpack_require__(/*! ../core/Util */ "./node_modules/pathfinding/src/core/Util.js");
var Heuristic  = __webpack_require__(/*! ../core/Heuristic */ "./node_modules/pathfinding/src/core/Heuristic.js");
var Node       = __webpack_require__(/*! ../core/Node */ "./node_modules/pathfinding/src/core/Node.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * Iterative Deeping A Star (IDA*) path-finder.
 *
 * Recursion based on:
 *   http://www.apl.jhu.edu/~hall/AI-Programming/IDA-Star.html
 *
 * Path retracing based on:
 *  V. Nageshwara Rao, Vipin Kumar and K. Ramesh
 *  "A Parallel Implementation of Iterative-Deeping-A*", January 1987.
 *  ftp://ftp.cs.utexas.edu/.snapshot/hourly.1/pub/AI-Lab/tech-reports/UT-AI-TR-87-46.pdf
 *
 * @author Gerard Meier (www.gerardmeier.com)
 *
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {number} opt.weight Weight to apply to the heuristic to allow for
 *     suboptimal paths, in order to speed up the search.
 * @param {boolean} opt.trackRecursion Whether to track recursion for
 *     statistical purposes.
 * @param {number} opt.timeLimit Maximum execution time. Use <= 0 for infinite.
 */
function IDAStarFinder(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.weight = opt.weight || 1;
    this.trackRecursion = opt.trackRecursion || false;
    this.timeLimit = opt.timeLimit || Infinity; // Default: no time limit.

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }

    // When diagonal movement is allowed the manhattan heuristic is not
    // admissible, it should be octile instead
    if (this.diagonalMovement === DiagonalMovement.Never) {
        this.heuristic = opt.heuristic || Heuristic.manhattan;
    } else {
        this.heuristic = opt.heuristic || Heuristic.octile;
    }
}

/**
 * Find and return the the path. When an empty array is returned, either
 * no path is possible, or the maximum execution time is reached.
 *
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
IDAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
    // Used for statistics:
    var nodesVisited = 0;

    // Execution time limitation:
    var startTime = new Date().getTime();

    // Heuristic helper:
    var h = function(a, b) {
        return this.heuristic(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
    }.bind(this);

    // Step cost from a to b:
    var cost = function(a, b) {
        return (a.x === b.x || a.y === b.y) ? 1 : Math.SQRT2;
    };

    /**
     * IDA* search implementation.
     *
     * @param {Node} The node currently expanding from.
     * @param {number} Cost to reach the given node.
     * @param {number} Maximum search depth (cut-off value).
     * @param {Array<Array<number>>} The found route.
     * @param {number} Recursion depth.
     *
     * @return {Object} either a number with the new optimal cut-off depth,
     * or a valid node instance, in which case a path was found.
     */
    var search = function(node, g, cutoff, route, depth) {
        nodesVisited++;

        // Enforce timelimit:
        if (this.timeLimit > 0 &&
            new Date().getTime() - startTime > this.timeLimit * 1000) {
            // Enforced as "path-not-found".
            return Infinity;
        }

        var f = g + h(node, end) * this.weight;

        // We've searched too deep for this iteration.
        if (f > cutoff) {
            return f;
        }

        if (node == end) {
            route[depth] = [node.x, node.y];
            return node;
        }

        var min, t, k, neighbour;

        var neighbours = grid.getNeighbors(node, this.diagonalMovement);

        // Sort the neighbours, gives nicer paths. But, this deviates
        // from the original algorithm - so I left it out.
        //neighbours.sort(function(a, b){
        //    return h(a, end) - h(b, end);
        //});

        
        /*jshint -W084 *///Disable warning: Expected a conditional expression and instead saw an assignment
        for (k = 0, min = Infinity; neighbour = neighbours[k]; ++k) {
        /*jshint +W084 *///Enable warning: Expected a conditional expression and instead saw an assignment
            if (this.trackRecursion) {
                // Retain a copy for visualisation. Due to recursion, this
                // node may be part of other paths too.
                neighbour.retainCount = neighbour.retainCount + 1 || 1;

                if(neighbour.tested !== true) {
                    neighbour.tested = true;
                }
            }

            t = search(neighbour, g + cost(node, neighbour), cutoff, route, depth + 1);

            if (t instanceof Node) {
                route[depth] = [node.x, node.y];

                // For a typical A* linked list, this would work:
                // neighbour.parent = node;
                return t;
            }

            // Decrement count, then determine whether it's actually closed.
            if (this.trackRecursion && (--neighbour.retainCount) === 0) {
                neighbour.tested = false;
            }

            if (t < min) {
                min = t;
            }
        }

        return min;

    }.bind(this);

    // Node instance lookups:
    var start = grid.getNodeAt(startX, startY);
    var end   = grid.getNodeAt(endX, endY);

    // Initial search depth, given the typical heuristic contraints,
    // there should be no cheaper route possible.
    var cutOff = h(start, end);

    var j, route, t;

    // With an overflow protection.
    for (j = 0; true; ++j) {

        route = [];

        // Search till cut-off depth:
        t = search(start, 0, cutOff, route, 0);

        // Route not possible, or not found in time limit.
        if (t === Infinity) {
            return [];
        }

        // If t is a node, it's also the end node. Route is now
        // populated with a valid path to the end node.
        if (t instanceof Node) {
            return route;
        }

        // Try again, this time with a deeper cut-off. The t score
        // is the closest we got to the end node.
        cutOff = t;
    }

    // This _should_ never to be reached.
    return [];
};

module.exports = IDAStarFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/JPFAlwaysMoveDiagonally.js":
/*!*************************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/JPFAlwaysMoveDiagonally.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = __webpack_require__(/*! ./JumpPointFinderBase */ "./node_modules/pathfinding/src/finders/JumpPointFinderBase.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * Path finder using the Jump Point Search algorithm which always moves
 * diagonally irrespective of the number of obstacles.
 */
function JPFAlwaysMoveDiagonally(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFAlwaysMoveDiagonally.prototype = new JumpPointFinderBase();
JPFAlwaysMoveDiagonally.prototype.constructor = JPFAlwaysMoveDiagonally;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFAlwaysMoveDiagonally.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    // check for forced neighbors
    // along the diagonal
    if (dx !== 0 && dy !== 0) {
        if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
            (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
            return [x, y];
        }
        // when moving diagonally, must check for vertical/horizontal jump points
        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
        }
    }
    // horizontally/vertically
    else {
        if( dx !== 0 ) { // moving along x
            if((grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1)) ||
               (grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1))) {
                return [x, y];
            }
        }
        else {
            if((grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y)) ||
               (grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y))) {
                return [x, y];
            }
        }
    }

    return this._jump(x + dx, y + dy, x, y);
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFAlwaysMoveDiagonally.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        // search diagonally
        if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x + dx, y + dy)) {
                neighbors.push([x + dx, y + dy]);
            }
            if (!grid.isWalkableAt(x - dx, y)) {
                neighbors.push([x - dx, y + dy]);
            }
            if (!grid.isWalkableAt(x, y - dy)) {
                neighbors.push([x + dx, y - dy]);
            }
        }
        // search horizontally/vertically
        else {
            if(dx === 0) {
                if (grid.isWalkableAt(x, y + dy)) {
                    neighbors.push([x, y + dy]);
                }
                if (!grid.isWalkableAt(x + 1, y)) {
                    neighbors.push([x + 1, y + dy]);
                }
                if (!grid.isWalkableAt(x - 1, y)) {
                    neighbors.push([x - 1, y + dy]);
                }
            }
            else {
                if (grid.isWalkableAt(x + dx, y)) {
                    neighbors.push([x + dx, y]);
                }
                if (!grid.isWalkableAt(x, y + 1)) {
                    neighbors.push([x + dx, y + 1]);
                }
                if (!grid.isWalkableAt(x, y - 1)) {
                    neighbors.push([x + dx, y - 1]);
                }
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.Always);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFAlwaysMoveDiagonally;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/JPFMoveDiagonallyIfAtMostOneObstacle.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/JPFMoveDiagonallyIfAtMostOneObstacle.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = __webpack_require__(/*! ./JumpPointFinderBase */ "./node_modules/pathfinding/src/finders/JumpPointFinderBase.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * Path finder using the Jump Point Search algorithm which moves
 * diagonally only when there is at most one obstacle.
 */
function JPFMoveDiagonallyIfAtMostOneObstacle(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFMoveDiagonallyIfAtMostOneObstacle.prototype = new JumpPointFinderBase();
JPFMoveDiagonallyIfAtMostOneObstacle.prototype.constructor = JPFMoveDiagonallyIfAtMostOneObstacle;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFMoveDiagonallyIfAtMostOneObstacle.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    // check for forced neighbors
    // along the diagonal
    if (dx !== 0 && dy !== 0) {
        if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
            (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
            return [x, y];
        }
        // when moving diagonally, must check for vertical/horizontal jump points
        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
        }
    }
    // horizontally/vertically
    else {
        if( dx !== 0 ) { // moving along x
            if((grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1)) ||
               (grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1))) {
                return [x, y];
            }
        }
        else {
            if((grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y)) ||
               (grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y))) {
                return [x, y];
            }
        }
    }

    // moving diagonally, must make sure one of the vertical/horizontal
    // neighbors is open to allow the path
    if (grid.isWalkableAt(x + dx, y) || grid.isWalkableAt(x, y + dy)) {
        return this._jump(x + dx, y + dy, x, y);
    } else {
        return null;
    }
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFMoveDiagonallyIfAtMostOneObstacle.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        // search diagonally
        if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x, y + dy) || grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y + dy]);
            }
            if (!grid.isWalkableAt(x - dx, y) && grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x - dx, y + dy]);
            }
            if (!grid.isWalkableAt(x, y - dy) && grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y - dy]);
            }
        }
        // search horizontally/vertically
        else {
            if(dx === 0) {
                if (grid.isWalkableAt(x, y + dy)) {
                    neighbors.push([x, y + dy]);
                    if (!grid.isWalkableAt(x + 1, y)) {
                        neighbors.push([x + 1, y + dy]);
                    }
                    if (!grid.isWalkableAt(x - 1, y)) {
                        neighbors.push([x - 1, y + dy]);
                    }
                }
            }
            else {
                if (grid.isWalkableAt(x + dx, y)) {
                    neighbors.push([x + dx, y]);
                    if (!grid.isWalkableAt(x, y + 1)) {
                        neighbors.push([x + dx, y + 1]);
                    }
                    if (!grid.isWalkableAt(x, y - 1)) {
                        neighbors.push([x + dx, y - 1]);
                    }
                }
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.IfAtMostOneObstacle);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFMoveDiagonallyIfAtMostOneObstacle;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/JPFMoveDiagonallyIfNoObstacles.js":
/*!********************************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/JPFMoveDiagonallyIfNoObstacles.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = __webpack_require__(/*! ./JumpPointFinderBase */ "./node_modules/pathfinding/src/finders/JumpPointFinderBase.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * Path finder using the Jump Point Search algorithm which moves
 * diagonally only when there are no obstacles.
 */
function JPFMoveDiagonallyIfNoObstacles(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFMoveDiagonallyIfNoObstacles.prototype = new JumpPointFinderBase();
JPFMoveDiagonallyIfNoObstacles.prototype.constructor = JPFMoveDiagonallyIfNoObstacles;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFMoveDiagonallyIfNoObstacles.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    // check for forced neighbors
    // along the diagonal
    if (dx !== 0 && dy !== 0) {
        // if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
            // (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
            // return [x, y];
        // }
        // when moving diagonally, must check for vertical/horizontal jump points
        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
            return [x, y];
        }
    }
    // horizontally/vertically
    else {
        if (dx !== 0) {
            if ((grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1)) ||
                (grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1))) {
                return [x, y];
            }
        }
        else if (dy !== 0) {
            if ((grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy)) ||
                (grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy))) {
                return [x, y];
            }
            // When moving vertically, must check for horizontal jump points
            // if (this._jump(x + 1, y, x, y) || this._jump(x - 1, y, x, y)) {
                // return [x, y];
            // }
        }
    }

    // moving diagonally, must make sure one of the vertical/horizontal
    // neighbors is open to allow the path
    if (grid.isWalkableAt(x + dx, y) && grid.isWalkableAt(x, y + dy)) {
        return this._jump(x + dx, y + dy, x, y);
    } else {
        return null;
    }
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFMoveDiagonallyIfNoObstacles.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        // search diagonally
        if (dx !== 0 && dy !== 0) {
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
            if (grid.isWalkableAt(x, y + dy) && grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y + dy]);
            }
        }
        // search horizontally/vertically
        else {
            var isNextWalkable;
            if (dx !== 0) {
                isNextWalkable = grid.isWalkableAt(x + dx, y);
                var isTopWalkable = grid.isWalkableAt(x, y + 1);
                var isBottomWalkable = grid.isWalkableAt(x, y - 1);

                if (isNextWalkable) {
                    neighbors.push([x + dx, y]);
                    if (isTopWalkable) {
                        neighbors.push([x + dx, y + 1]);
                    }
                    if (isBottomWalkable) {
                        neighbors.push([x + dx, y - 1]);
                    }
                }
                if (isTopWalkable) {
                    neighbors.push([x, y + 1]);
                }
                if (isBottomWalkable) {
                    neighbors.push([x, y - 1]);
                }
            }
            else if (dy !== 0) {
                isNextWalkable = grid.isWalkableAt(x, y + dy);
                var isRightWalkable = grid.isWalkableAt(x + 1, y);
                var isLeftWalkable = grid.isWalkableAt(x - 1, y);

                if (isNextWalkable) {
                    neighbors.push([x, y + dy]);
                    if (isRightWalkable) {
                        neighbors.push([x + 1, y + dy]);
                    }
                    if (isLeftWalkable) {
                        neighbors.push([x - 1, y + dy]);
                    }
                }
                if (isRightWalkable) {
                    neighbors.push([x + 1, y]);
                }
                if (isLeftWalkable) {
                    neighbors.push([x - 1, y]);
                }
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.OnlyWhenNoObstacles);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFMoveDiagonallyIfNoObstacles;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/JPFNeverMoveDiagonally.js":
/*!************************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/JPFNeverMoveDiagonally.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var JumpPointFinderBase = __webpack_require__(/*! ./JumpPointFinderBase */ "./node_modules/pathfinding/src/finders/JumpPointFinderBase.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * Path finder using the Jump Point Search algorithm allowing only horizontal
 * or vertical movements.
 */
function JPFNeverMoveDiagonally(opt) {
    JumpPointFinderBase.call(this, opt);
}

JPFNeverMoveDiagonally.prototype = new JumpPointFinderBase();
JPFNeverMoveDiagonally.prototype.constructor = JPFNeverMoveDiagonally;

/**
 * Search recursively in the direction (parent -> child), stopping only when a
 * jump point is found.
 * @protected
 * @return {Array<Array<number>>} The x, y coordinate of the jump point
 *     found, or null if not found
 */
JPFNeverMoveDiagonally.prototype._jump = function(x, y, px, py) {
    var grid = this.grid,
        dx = x - px, dy = y - py;

    if (!grid.isWalkableAt(x, y)) {
        return null;
    }

    if(this.trackJumpRecursion === true) {
        grid.getNodeAt(x, y).tested = true;
    }

    if (grid.getNodeAt(x, y) === this.endNode) {
        return [x, y];
    }

    if (dx !== 0) {
        if ((grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1)) ||
            (grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1))) {
            return [x, y];
        }
    }
    else if (dy !== 0) {
        if ((grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy)) ||
            (grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy))) {
            return [x, y];
        }
        //When moving vertically, must check for horizontal jump points
        if (this._jump(x + 1, y, x, y) || this._jump(x - 1, y, x, y)) {
            return [x, y];
        }
    }
    else {
        throw new Error("Only horizontal and vertical movements are allowed");
    }

    return this._jump(x + dx, y + dy, x, y);
};

/**
 * Find the neighbors for the given node. If the node has a parent,
 * prune the neighbors based on the jump point search algorithm, otherwise
 * return all available neighbors.
 * @return {Array<Array<number>>} The neighbors found.
 */
JPFNeverMoveDiagonally.prototype._findNeighbors = function(node) {
    var parent = node.parent,
        x = node.x, y = node.y,
        grid = this.grid,
        px, py, nx, ny, dx, dy,
        neighbors = [], neighborNodes, neighborNode, i, l;

    // directed pruning: can ignore most neighbors, unless forced.
    if (parent) {
        px = parent.x;
        py = parent.y;
        // get the normalized direction of travel
        dx = (x - px) / Math.max(Math.abs(x - px), 1);
        dy = (y - py) / Math.max(Math.abs(y - py), 1);

        if (dx !== 0) {
            if (grid.isWalkableAt(x, y - 1)) {
                neighbors.push([x, y - 1]);
            }
            if (grid.isWalkableAt(x, y + 1)) {
                neighbors.push([x, y + 1]);
            }
            if (grid.isWalkableAt(x + dx, y)) {
                neighbors.push([x + dx, y]);
            }
        }
        else if (dy !== 0) {
            if (grid.isWalkableAt(x - 1, y)) {
                neighbors.push([x - 1, y]);
            }
            if (grid.isWalkableAt(x + 1, y)) {
                neighbors.push([x + 1, y]);
            }
            if (grid.isWalkableAt(x, y + dy)) {
                neighbors.push([x, y + dy]);
            }
        }
    }
    // return all neighbors
    else {
        neighborNodes = grid.getNeighbors(node, DiagonalMovement.Never);
        for (i = 0, l = neighborNodes.length; i < l; ++i) {
            neighborNode = neighborNodes[i];
            neighbors.push([neighborNode.x, neighborNode.y]);
        }
    }

    return neighbors;
};

module.exports = JPFNeverMoveDiagonally;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/JumpPointFinder.js":
/*!*****************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/JumpPointFinder.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author aniero / https://github.com/aniero
 */
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");
var JPFNeverMoveDiagonally = __webpack_require__(/*! ./JPFNeverMoveDiagonally */ "./node_modules/pathfinding/src/finders/JPFNeverMoveDiagonally.js");
var JPFAlwaysMoveDiagonally = __webpack_require__(/*! ./JPFAlwaysMoveDiagonally */ "./node_modules/pathfinding/src/finders/JPFAlwaysMoveDiagonally.js");
var JPFMoveDiagonallyIfNoObstacles = __webpack_require__(/*! ./JPFMoveDiagonallyIfNoObstacles */ "./node_modules/pathfinding/src/finders/JPFMoveDiagonallyIfNoObstacles.js");
var JPFMoveDiagonallyIfAtMostOneObstacle = __webpack_require__(/*! ./JPFMoveDiagonallyIfAtMostOneObstacle */ "./node_modules/pathfinding/src/finders/JPFMoveDiagonallyIfAtMostOneObstacle.js");

/**
 * Path finder using the Jump Point Search algorithm
 * @param {Object} opt
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 * @param {DiagonalMovement} opt.diagonalMovement Condition under which diagonal
 *      movement will be allowed.
 */
function JumpPointFinder(opt) {
    opt = opt || {};
    if (opt.diagonalMovement === DiagonalMovement.Never) {
        return new JPFNeverMoveDiagonally(opt);
    } else if (opt.diagonalMovement === DiagonalMovement.Always) {
        return new JPFAlwaysMoveDiagonally(opt);
    } else if (opt.diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
        return new JPFMoveDiagonallyIfNoObstacles(opt);
    } else {
        return new JPFMoveDiagonallyIfAtMostOneObstacle(opt);
    }
}

module.exports = JumpPointFinder;


/***/ }),

/***/ "./node_modules/pathfinding/src/finders/JumpPointFinderBase.js":
/*!*********************************************************************!*\
  !*** ./node_modules/pathfinding/src/finders/JumpPointFinderBase.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author imor / https://github.com/imor
 */
var Heap       = __webpack_require__(/*! heap */ "./node_modules/heap/index.js");
var Util       = __webpack_require__(/*! ../core/Util */ "./node_modules/pathfinding/src/core/Util.js");
var Heuristic  = __webpack_require__(/*! ../core/Heuristic */ "./node_modules/pathfinding/src/core/Heuristic.js");
var DiagonalMovement = __webpack_require__(/*! ../core/DiagonalMovement */ "./node_modules/pathfinding/src/core/DiagonalMovement.js");

/**
 * Base class for the Jump Point Search algorithm
 * @param {object} opt
 * @param {function} opt.heuristic Heuristic function to estimate the distance
 *     (defaults to manhattan).
 */
function JumpPointFinderBase(opt) {
    opt = opt || {};
    this.heuristic = opt.heuristic || Heuristic.manhattan;
    this.trackJumpRecursion = opt.trackJumpRecursion || false;
}

/**
 * Find and return the path.
 * @return {Array<Array<number>>} The path, including both start and
 *     end positions.
 */
JumpPointFinderBase.prototype.findPath = function(startX, startY, endX, endY, grid) {
    var openList = this.openList = new Heap(function(nodeA, nodeB) {
            return nodeA.f - nodeB.f;
        }),
        startNode = this.startNode = grid.getNodeAt(startX, startY),
        endNode = this.endNode = grid.getNodeAt(endX, endY), node;

    this.grid = grid;


    // set the `g` and `f` value of the start node to be 0
    startNode.g = 0;
    startNode.f = 0;

    // push the start node into the open list
    openList.push(startNode);
    startNode.opened = true;

    // while the open list is not empty
    while (!openList.empty()) {
        // pop the position of node which has the minimum `f` value.
        node = openList.pop();
        node.closed = true;

        if (node === endNode) {
            return Util.expandPath(Util.backtrace(endNode));
        }

        this._identifySuccessors(node);
    }

    // fail to find the path
    return [];
};

/**
 * Identify successors for the given node. Runs a jump point search in the
 * direction of each available neighbor, adding any points found to the open
 * list.
 * @protected
 */
JumpPointFinderBase.prototype._identifySuccessors = function(node) {
    var grid = this.grid,
        heuristic = this.heuristic,
        openList = this.openList,
        endX = this.endNode.x,
        endY = this.endNode.y,
        neighbors, neighbor,
        jumpPoint, i, l,
        x = node.x, y = node.y,
        jx, jy, dx, dy, d, ng, jumpNode,
        abs = Math.abs, max = Math.max;

    neighbors = this._findNeighbors(node);
    for(i = 0, l = neighbors.length; i < l; ++i) {
        neighbor = neighbors[i];
        jumpPoint = this._jump(neighbor[0], neighbor[1], x, y);
        if (jumpPoint) {

            jx = jumpPoint[0];
            jy = jumpPoint[1];
            jumpNode = grid.getNodeAt(jx, jy);

            if (jumpNode.closed) {
                continue;
            }

            // include distance, as parent may not be immediately adjacent:
            d = Heuristic.octile(abs(jx - x), abs(jy - y));
            ng = node.g + d; // next `g` value

            if (!jumpNode.opened || ng < jumpNode.g) {
                jumpNode.g = ng;
                jumpNode.h = jumpNode.h || heuristic(abs(jx - endX), abs(jy - endY));
                jumpNode.f = jumpNode.g + jumpNode.h;
                jumpNode.parent = node;

                if (!jumpNode.opened) {
                    openList.push(jumpNode);
                    jumpNode.opened = true;
                } else {
                    openList.updateItem(jumpNode);
                }
            }
        }
    }
};

module.exports = JumpPointFinderBase;


/***/ }),

/***/ "./node_modules/paths-js/geom.js":
/*!***************************************!*\
  !*** ./node_modules/paths-js/geom.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var sq = function sq(x) {
  return x * x;
};

var distPointToPoint = function distPointToPoint(_ref, _ref3) {
  var _ref2 = _slicedToArray(_ref, 2);

  var ax = _ref2[0];
  var ay = _ref2[1];

  var _ref32 = _slicedToArray(_ref3, 2);

  var bx = _ref32[0];
  var by = _ref32[1];
  return Math.sqrt(sq(ax - bx) + sq(ay - by));
};

var distPointToParabol = function distPointToParabol(a, f) {
  var p = distPointToPoint(a, f);

  return p == 0 ? Infinity : sq(p) / (2 * Math.abs(a[1] - f[1]));
};

var circumCenter = function circumCenter(a, b, c) {
  var d = (a[0] - c[0]) * (b[1] - c[1]) - (b[0] - c[0]) * (a[1] - c[1]);

  if (d == 0) return [Infinity, Infinity];

  var xc = (((a[0] - c[0]) * (a[0] + c[0]) + (a[1] - c[1]) * (a[1] + c[1])) / 2 * (b[1] - c[1]) - ((b[0] - c[0]) * (b[0] + c[0]) + (b[1] - c[1]) * (b[1] + c[1])) / 2 * (a[1] - c[1])) / d;
  var yc = (((b[0] - c[0]) * (b[0] + c[0]) + (b[1] - c[1]) * (b[1] + c[1])) / 2 * (a[0] - c[0]) - ((a[0] - c[0]) * (a[0] + c[0]) + (a[1] - c[1]) * (a[1] + c[1])) / 2 * (b[0] - c[0])) / d;
  return [xc, yc];
};

var parabolsCrossX = function parabolsCrossX(fa, fb, q) {
  if (fa[1] === fb[1]) return [(fa[0] + fb[0]) / 2, (fa[0] + fb[0]) / 2];

  var s1 = (fa[1] * fb[0] - fa[0] * fb[1] + fa[0] * q - fb[0] * q + Math.sqrt((fa[0] * fa[0] + fa[1] * fa[1] - 2 * fa[0] * fb[0] + fb[0] * fb[0] - 2 * fa[1] * fb[1] + fb[1] * fb[1]) * (fa[1] * fb[1] - fa[1] * q - fb[1] * q + q * q))) / (fa[1] - fb[1]);
  var s2 = (fa[1] * fb[0] - fa[0] * fb[1] + fa[0] * q - fb[0] * q - Math.sqrt((fa[0] * fa[0] + fa[1] * fa[1] - 2 * fa[0] * fb[0] + fb[0] * fb[0] - 2 * fa[1] * fb[1] + fb[1] * fb[1]) * (fa[1] * fb[1] - fa[1] * q - fb[1] * q + q * q))) / (fa[1] - fb[1]);

  return s1 < s2 ? [s1, s2] : [s2, s1];
};

var doHalflinesCross = function doHalflinesCross(sa, sb) {
  var approx = arguments.length <= 2 || arguments[2] === undefined ? 1e-10 : arguments[2];
  //sa, sb are Segment instance
  var dx = sb.ps[0] - sa.ps[0];
  var dy = sb.ps[1] - sa.ps[1];

  if (sa.m == Infinity) return sa.hp * (sb.m * dx - dy) <= approx && sb.vec[0] * dx <= approx;
  if (sb.m == Infinity) return sb.hp * (sa.m * dx - dy) >= -approx && sa.vec[0] * dx >= -approx;

  var det = sb.vec[0] * sa.vec[1] - sb.vec[1] * sa.vec[0];

  if (det === 0) return false;

  var u = (dy * sb.vec[0] - dx * sb.vec[1]) / det;
  var v = (dy * sa.vec[0] - dx * sa.vec[1]) / det;

  return u >= -approx && v >= approx || u >= approx && v >= -approx;
};

var matrixTransform = function matrixTransform(points, matrix) {
  return points.map(function (point) {
    return {
      x: point.x * matrix[0] + point.y * matrix[2] + matrix[4],
      y: point.x * matrix[1] + point.y * matrix[3] + matrix[5]
    };
  });
};

var transformEllipse = function transformEllipse(rx, ry, ax, m) {
  var torad = Math.PI / 180;
  var epsilon = 0.0000000001;

  var c = Math.cos(ax * torad),
      s = Math.sin(ax * torad);
  var ma = [rx * (m[0] * c + m[2] * s), rx * (m[1] * c + m[3] * s), ry * (-m[0] * s + m[2] * c), ry * (-m[1] * s + m[3] * c)];

  var J = ma[0] * ma[0] + ma[2] * ma[2],
      K = ma[1] * ma[1] + ma[3] * ma[3];

  var D = ((ma[0] - ma[3]) * (ma[0] - ma[3]) + (ma[2] + ma[1]) * (ma[2] + ma[1])) * ((ma[0] + ma[3]) * (ma[0] + ma[3]) + (ma[2] - ma[1]) * (ma[2] - ma[1]));

  var JK = (J + K) / 2;

  if (D < epsilon * JK) {
    return {
      rx: Math.sqrt(JK),
      ry: Math.sqrt(JK),
      ax: 0,
      isDegenerate: false
    };
  }

  var L = ma[0] * ma[1] + ma[2] * ma[3];
  D = Math.sqrt(D);

  var l1 = JK + D / 2,
      l2 = JK - D / 2;

  var newAx = undefined,
      newRx = undefined,
      newRy = undefined;
  newAx = Math.abs(L) < epsilon && Math.abs(l1 - K) < epsilon ? 90 : Math.atan(Math.abs(L) > Math.abs(l1 - K) ? (l1 - J) / L : L / (l1 - K)) * 180 / Math.PI;

  if (newAx >= 0) {
    newRx = Math.sqrt(l1);
    newRy = Math.sqrt(l2);
  } else {
    newAx += 90;
    newRx = Math.sqrt(l2);
    newRy = Math.sqrt(l1);
  }

  return {
    rx: newRx,
    ry: newRy,
    ax: newAx,
    isDegenerate: newRx < epsilon * newRy || newRy < epsilon * newRx
  };
};

exports["default"] = { distPointToPoint: distPointToPoint, distPointToParabol: distPointToParabol, circumCenter: circumCenter,
  parabolsCrossX: parabolsCrossX, doHalflinesCross: doHalflinesCross, matrixTransform: matrixTransform, transformEllipse: transformEllipse };
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/paths-js/path.js":
/*!***************************************!*\
  !*** ./node_modules/paths-js/path.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _geom = __webpack_require__(/*! ./geom */ "./node_modules/paths-js/geom.js");

var Path = function Path(init) {
  var _instructions = init || [];

  var push = function push(arr, el) {
    var copy = arr.slice(0, arr.length);
    copy.push(el);
    return copy;
  };

  var areEqualPoints = function areEqualPoints(_ref, _ref3) {
    var _ref2 = _slicedToArray(_ref, 2);

    var a1 = _ref2[0];
    var b1 = _ref2[1];

    var _ref32 = _slicedToArray(_ref3, 2);

    var a2 = _ref32[0];
    var b2 = _ref32[1];
    return a1 === a2 && b1 === b2;
  };

  var trimZeros = function trimZeros(string, char) {
    var l = string.length;
    while (string.charAt(l - 1) === '0') {
      l = l - 1;
    }
    if (string.charAt(l - 1) === '.') {
      l = l - 1;
    }
    return string.substr(0, l);
  };

  var round = function round(number, digits) {
    var str = number.toFixed(digits);
    return trimZeros(str);
  };

  var printInstrunction = function printInstrunction(_ref4) {
    var command = _ref4.command;
    var params = _ref4.params;

    var numbers = params.map(function (param) {
      return round(param, 6);
    });
    return command + ' ' + numbers.join(' ');
  };

  var point = function point(_ref5, prev) {
    var command = _ref5.command;
    var params = _ref5.params;

    switch (command) {
      case 'M':
        return [params[0], params[1]];
      case 'L':
        return [params[0], params[1]];
      case 'H':
        return [params[0], prev[1]];
      case 'V':
        return [prev[0], params[0]];
      case 'Z':
        return null;
      case 'C':
        return [params[4], params[5]];
      case 'S':
        return [params[2], params[3]];
      case 'Q':
        return [params[2], params[3]];
      case 'T':
        return [params[0], params[1]];
      case 'A':
        return [params[5], params[6]];
    }
  };

  var transformParams = function transformParams(instruction, matrix, prev) {
    var p = instruction.params;

    var transformer = {
      'V': function V(instruction, matrix, prev) {
        var pts = [{ x: prev[0], y: p[1] }];
        var newPts = (0, _geom.matrixTransform)(pts, matrix);
        if (newPts[0].x === (0, _geom.matrixTransform)([{ x: prev[0], y: prev[1] }])[0].x) {
          return {
            command: 'V',
            params: [newPts[0].y]
          };
        } else {
          return {
            command: 'L',
            params: [newPts[0].x, newPts[0].y]
          };
        }
      },
      'H': function H(instruction, matrix, prev) {
        var pts = [{ x: p[0], y: prev[1] }];
        var newPts = (0, _geom.matrixTransform)(pts, matrix);
        if (newPts[0].y === (0, _geom.matrixTransform)([{ x: prev[0], y: prev[1] }])[0].y) {
          return {
            command: 'H',
            params: [newPts[0].x]
          };
        } else {
          return {
            command: 'L',
            params: [newPts[0].x, newPts[0].y]
          };
        }
      },
      'A': function A(instruction, matrix, prev) {
        // transform rx, ry, and x-axis rotation
        var r = (0, _geom.transformEllipse)(p[0], p[1], p[2], matrix);

        var sweepFlag = p[4];
        if (matrix[0] * matrix[3] - matrix[1] * matrix[2] < 0) {
          sweepFlag = sweepFlag ? '0' : '1';
        }

        // transform endpoint
        var pts = [{ x: p[5], y: p[6] }];
        var newPts = (0, _geom.matrixTransform)(pts, matrix);

        if (r.isDegenerate) {
          return {
            command: 'L',
            params: [newPts[0].x, newPts[0].y]
          };
        } else {
          return {
            command: 'A',
            params: [r.rx, r.ry, r.ax, p[3], sweepFlag, newPts[0].x, newPts[0].y]
          };
        }
      },
      'C': function C(instruction, matrix, prev) {
        var pts = [{ x: p[0], y: p[1] }, { x: p[2], y: p[3] }, { x: p[4], y: p[5] }];
        var newPts = (0, _geom.matrixTransform)(pts, matrix);
        return {
          command: 'C',
          params: [newPts[0].x, newPts[0].y, newPts[1].x, newPts[1].y, newPts[2].x, newPts[2].y]
        };
      },
      'Z': function Z(instruction, matrix, prev) {
        return {
          command: 'Z',
          params: []
        };
      },
      'default': function _default(instruction, matrix, prev) {
        var pts = [{ x: p[0], y: p[1] }];
        var newPts = (0, _geom.matrixTransform)(pts, matrix);
        var newParams = instruction.params.slice(0, instruction.params.length);
        newParams.splice(0, 2, newPts[0].x, newPts[0].y);
        return {
          command: instruction.command,
          params: newParams
        };
      }
    };

    if (transformer[instruction.command]) {
      return transformer[instruction.command](instruction, matrix, prev);
    } else {
      return transformer['default'](instruction, matrix, prev);
    }
  };

  var verbosify = function verbosify(keys, f) {
    return function (a) {
      var args = typeof a === 'object' ? keys.map(function (k) {
        return a[k];
      }) : arguments;
      return f.apply(null, args);
    };
  };

  var plus = function plus(instruction) {
    return Path(push(_instructions, instruction));
  };

  return {
    moveto: verbosify(['x', 'y'], function (x, y) {
      return plus({
        command: 'M',
        params: [x, y]
      });
    }),
    lineto: verbosify(['x', 'y'], function (x, y) {
      return plus({
        command: 'L',
        params: [x, y]
      });
    }),
    hlineto: verbosify(['x'], function (x) {
      return plus({
        command: 'H',
        params: [x]
      });
    }),
    vlineto: verbosify(['y'], function (y) {
      return plus({
        command: 'V',
        params: [y]
      });
    }),
    closepath: function closepath() {
      return plus({
        command: 'Z',
        params: []
      });
    },
    curveto: verbosify(['x1', 'y1', 'x2', 'y2', 'x', 'y'], function (x1, y1, x2, y2, x, y) {
      return plus({
        command: 'C',
        params: [x1, y1, x2, y2, x, y]
      });
    }),
    smoothcurveto: verbosify(['x2', 'y2', 'x', 'y'], function (x2, y2, x, y) {
      return plus({
        command: 'S',
        params: [x2, y2, x, y]
      });
    }),
    qcurveto: verbosify(['x1', 'y1', 'x', 'y'], function (x1, y1, x, y) {
      return plus({
        command: 'Q',
        params: [x1, y1, x, y]
      });
    }),
    smoothqcurveto: verbosify(['x', 'y'], function (x, y) {
      return plus({
        command: 'T',
        params: [x, y]
      });
    }),
    arc: verbosify(['rx', 'ry', 'xrot', 'largeArcFlag', 'sweepFlag', 'x', 'y'], function (rx, ry, xrot, largeArcFlag, sweepFlag, x, y) {
      return plus({
        command: 'A',
        params: [rx, ry, xrot, largeArcFlag, sweepFlag, x, y]
      });
    }),
    translate: verbosify(['dx', 'dy'], function () {
      var dx = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
      var dy = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      if (dx !== 0 || dx !== 0) {
        var _ret = (function () {
          var prev = [0, 0];
          var matrix = [1, 0, 0, 1, dx, dy];
          var newInstructions = _instructions.map(function (instruction) {
            var p = transformParams(instruction, matrix, prev);
            prev = point(instruction, prev);
            return p;
          });
          return {
            v: Path(newInstructions)
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      } else {
        return Path(_instructions);
      }
    }),
    rotate: verbosify(['angle', 'rx', 'ry'], function (angle) {
      var rx = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var ry = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

      if (angle !== 0) {
        var _ret2 = (function () {
          var prev = undefined;
          var matrix = undefined;
          var newInstructions = _instructions;

          if (rx !== 0 && ry !== 0) {
            prev = [0, 0];
            matrix = [1, 0, 0, 1, -rx, -ry];
            newInstructions = newInstructions.map(function (instruction) {
              var p = transformParams(instruction, matrix, prev);
              prev = point(instruction, prev);
              return p;
            });
          }

          var rad = angle * Math.PI / 180;
          var cos = Math.cos(rad);
          var sin = Math.sin(rad);

          prev = [0, 0];
          matrix = [cos, sin, -sin, cos, 0, 0];
          newInstructions = newInstructions.map(function (instruction) {
            var p = transformParams(instruction, matrix, prev);
            prev = point(instruction, prev);
            return p;
          });

          if (rx !== 0 && ry !== 0) {
            prev = [0, 0];
            matrix = [1, 0, 0, 1, rx, ry];
            newInstructions = newInstructions.map(function (instruction) {
              var p = transformParams(instruction, matrix, prev);
              prev = point(instruction, prev);
              return p;
            });
          }

          return {
            v: Path(newInstructions)
          };
        })();

        if (typeof _ret2 === 'object') return _ret2.v;
      } else {
        return Path(_instructions);
      }
    }),
    scale: verbosify(['sx', 'sy'], function () {
      var sx = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
      var sy = arguments.length <= 1 || arguments[1] === undefined ? sx : arguments[1];
      return (function () {
        if (sx !== 1 || sy !== 1) {
          var _ret3 = (function () {
            var prev = [0, 0];
            var matrix = [sx, 0, 0, sy, 0, 0];
            var newInstructions = _instructions.map(function (instruction) {
              var p = transformParams(instruction, matrix, prev);
              prev = point(instruction, prev);
              return p;
            });
            return {
              v: Path(newInstructions)
            };
          })();

          if (typeof _ret3 === 'object') return _ret3.v;
        } else {
          return Path(_instructions);
        }
      })();
    }),
    shearX: verbosify(['angle'], function () {
      var angle = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (angle !== 0) {
        var _ret4 = (function () {
          var prev = [0, 0];
          var matrix = [1, 0, Math.tan(angle * Math.PI / 180), 1, 0, 0];
          var newInstructions = _instructions.map(function (instruction) {
            var p = transformParams(instruction, matrix, prev);
            prev = point(instruction, prev);
            return p;
          });
          return {
            v: Path(newInstructions)
          };
        })();

        if (typeof _ret4 === 'object') return _ret4.v;
      } else {
        return Path(_instructions);
      }
    }),
    shearY: verbosify(['angle'], function () {
      var angle = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (angle !== 0) {
        var _ret5 = (function () {
          var prev = [0, 0];
          var matrix = [1, Math.tan(angle * Math.PI / 180), 0, 1, 0, 0];
          var newInstructions = _instructions.map(function (instruction) {
            var p = transformParams(instruction, matrix, prev);
            prev = point(instruction, prev);
            return p;
          });
          return {
            v: Path(newInstructions)
          };
        })();

        if (typeof _ret5 === 'object') return _ret5.v;
      } else {
        return Path(_instructions);
      }
    }),
    print: function print() {
      return _instructions.map(printInstrunction).join(' ');
    },
    toString: function toString() {
      return undefined.print();
    },
    points: function points() {
      var ps = [];
      var prev = [0, 0];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _instructions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var instruction = _step.value;

          var p = point(instruction, prev);
          prev = p;
          if (p) {
            ps.push(p);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return ps;
    },
    instructions: function instructions() {
      return _instructions.slice(0, _instructions.length);
    },
    connect: function connect(path) {
      var ps = this.points();
      var last = ps[ps.length - 1];
      var first = path.points()[0];
      var newInstructions = undefined;
      if (_instructions[_instructions.length - 1].command !== 'Z') {
        newInstructions = path.instructions().slice(1);
        if (!areEqualPoints(last, first)) {
          newInstructions.unshift({
            command: "L",
            params: first
          });
        }
      } else {
        newInstructions = path.instructions();
      }
      return Path(this.instructions().concat(newInstructions));
    }
  };
};

exports['default'] = function () {
  return Path();
};

module.exports = exports['default'];

/***/ }),

/***/ "./src/BaseEntity.ts":
/*!***************************!*\
  !*** ./src/BaseEntity.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var BaseEntity = /** @class */ (function () {
    function BaseEntity(id) {
        this.listeners = {};
        this.id = id || Toolkit_1.Toolkit.UID();
        this.locked = false;
    }
    BaseEntity.prototype.getID = function () {
        return this.id;
    };
    BaseEntity.prototype.doClone = function (lookupTable, clone) {
        if (lookupTable === void 0) { lookupTable = {}; }
        /*noop*/
    };
    BaseEntity.prototype.clone = function (lookupTable) {
        if (lookupTable === void 0) { lookupTable = {}; }
        // try and use an existing clone first
        if (lookupTable[this.id]) {
            return lookupTable[this.id];
        }
        var clone = _.clone(this);
        clone.id = Toolkit_1.Toolkit.UID();
        clone.clearListeners();
        lookupTable[this.id] = clone;
        this.doClone(lookupTable, clone);
        return clone;
    };
    BaseEntity.prototype.clearListeners = function () {
        this.listeners = {};
    };
    BaseEntity.prototype.deSerialize = function (data, engine) {
        this.id = data.id;
    };
    BaseEntity.prototype.serialize = function () {
        return {
            id: this.id
        };
    };
    BaseEntity.prototype.iterateListeners = function (cb) {
        var event = {
            id: Toolkit_1.Toolkit.UID(),
            firing: true,
            entity: this,
            stopPropagation: function () {
                event.firing = false;
            }
        };
        for (var i in this.listeners) {
            if (this.listeners.hasOwnProperty(i)) {
                // propagation stopped
                if (!event.firing) {
                    return;
                }
                cb(this.listeners[i], event);
            }
        }
    };
    BaseEntity.prototype.removeListener = function (listener) {
        if (this.listeners[listener]) {
            delete this.listeners[listener];
            return true;
        }
        return false;
    };
    BaseEntity.prototype.addListener = function (listener) {
        var uid = Toolkit_1.Toolkit.UID();
        this.listeners[uid] = listener;
        return uid;
    };
    BaseEntity.prototype.isLocked = function () {
        return this.locked;
    };
    BaseEntity.prototype.setLocked = function (locked) {
        if (locked === void 0) { locked = true; }
        this.locked = locked;
        this.iterateListeners(function (listener, event) {
            if (listener.lockChanged) {
                listener.lockChanged(__assign({}, event, { locked: locked }));
            }
        });
    };
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;


/***/ }),

/***/ "./src/DiagramEngine.ts":
/*!******************************!*\
  !*** ./src/DiagramEngine.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity_1 = __webpack_require__(/*! ./BaseEntity */ "./src/BaseEntity.ts");
var DiagramModel_1 = __webpack_require__(/*! ./models/DiagramModel */ "./src/models/DiagramModel.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var NodeModel_1 = __webpack_require__(/*! ./models/NodeModel */ "./src/models/NodeModel.ts");
var PointModel_1 = __webpack_require__(/*! ./models/PointModel */ "./src/models/PointModel.ts");
var main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
var PathFinding_1 = __webpack_require__(/*! ./routing/PathFinding */ "./src/routing/PathFinding.ts");
var DefaultPortFactory_1 = __webpack_require__(/*! ./defaults/factories/DefaultPortFactory */ "./src/defaults/factories/DefaultPortFactory.tsx");
var DefaultLabelFactory_1 = __webpack_require__(/*! ./defaults/factories/DefaultLabelFactory */ "./src/defaults/factories/DefaultLabelFactory.tsx");
var Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
/**
 * Passed as a parameter to the DiagramWidget
 */
var DiagramEngine = /** @class */ (function (_super) {
    __extends(DiagramEngine, _super);
    function DiagramEngine() {
        var _this = _super.call(this) || this;
        // calculated only when smart routing is active
        _this.canvasMatrix = [];
        _this.routingMatrix = [];
        // used when at least one element has negative coordinates
        _this.hAdjustmentFactor = 0;
        _this.vAdjustmentFactor = 0;
        /**
         * Despite being a long method, we simply iterate over all three collections (nodes, ports and points)
         * to find the highest X and Y dimensions, so we can build the matrix large enough to contain all elements.
         */
        _this.calculateMatrixDimensions = function () {
            var allNodesCoords = _.values(_this.diagramModel.nodes).map(function (item) { return ({
                x: item.x,
                width: item.width,
                y: item.y,
                height: item.height
            }); });
            var allLinks = _.values(_this.diagramModel.links);
            var allPortsCoords = _.flatMap(allLinks.map(function (link) { return [link.sourcePort, link.targetPort]; }))
                .filter(function (port) { return port !== null; })
                .map(function (item) { return ({
                x: item.x,
                width: item.width,
                y: item.y,
                height: item.height
            }); });
            var allPointsCoords = _.flatMap(allLinks.map(function (link) { return link.points; })).map(function (item) { return ({
                // points don't have width/height, so let's just use 0
                x: item.x,
                width: 0,
                y: item.y,
                height: 0
            }); });
            var canvas = _this.canvas;
            var minX = Math.floor(Math.min(_.minBy(_.concat(allNodesCoords, allPortsCoords, allPointsCoords), function (item) { return item.x; }).x, 0) /
                PathFinding_1.ROUTING_SCALING_FACTOR) * PathFinding_1.ROUTING_SCALING_FACTOR;
            var maxXElement = _.maxBy(_.concat(allNodesCoords, allPortsCoords, allPointsCoords), function (item) { return item.x + item.width; });
            var maxX = Math.max(maxXElement.x + maxXElement.width, canvas.offsetWidth);
            var minY = Math.floor(Math.min(_.minBy(_.concat(allNodesCoords, allPortsCoords, allPointsCoords), function (item) { return item.y; }).y, 0) /
                PathFinding_1.ROUTING_SCALING_FACTOR) * PathFinding_1.ROUTING_SCALING_FACTOR;
            var maxYElement = _.maxBy(_.concat(allNodesCoords, allPortsCoords, allPointsCoords), function (item) { return item.y + item.height; });
            var maxY = Math.max(maxYElement.y + maxYElement.height, canvas.offsetHeight);
            return {
                width: Math.ceil(Math.abs(minX) + maxX),
                hAdjustmentFactor: Math.abs(minX) / PathFinding_1.ROUTING_SCALING_FACTOR + 1,
                height: Math.ceil(Math.abs(minY) + maxY),
                vAdjustmentFactor: Math.abs(minY) / PathFinding_1.ROUTING_SCALING_FACTOR + 1
            };
        };
        /**
         * Updates (by reference) where nodes will be drawn on the matrix passed in.
         */
        _this.markNodes = function (matrix) {
            _.values(_this.diagramModel.nodes).forEach(function (node) {
                var startX = Math.floor(node.x / PathFinding_1.ROUTING_SCALING_FACTOR);
                var endX = Math.ceil((node.x + node.width) / PathFinding_1.ROUTING_SCALING_FACTOR);
                var startY = Math.floor(node.y / PathFinding_1.ROUTING_SCALING_FACTOR);
                var endY = Math.ceil((node.y + node.height) / PathFinding_1.ROUTING_SCALING_FACTOR);
                for (var x = startX - 1; x <= endX + 1; x++) {
                    for (var y = startY - 1; y < endY + 1; y++) {
                        _this.markMatrixPoint(matrix, _this.translateRoutingX(x), _this.translateRoutingY(y));
                    }
                }
            });
        };
        /**
         * Updates (by reference) where ports will be drawn on the matrix passed in.
         */
        _this.markPorts = function (matrix) {
            var allElements = _.flatMap(_.values(_this.diagramModel.links).map(function (link) { return [].concat(link.sourcePort, link.targetPort); }));
            allElements.filter(function (port) { return port !== null; }).forEach(function (port) {
                var startX = Math.floor(port.x / PathFinding_1.ROUTING_SCALING_FACTOR);
                var endX = Math.ceil((port.x + port.width) / PathFinding_1.ROUTING_SCALING_FACTOR);
                var startY = Math.floor(port.y / PathFinding_1.ROUTING_SCALING_FACTOR);
                var endY = Math.ceil((port.y + port.height) / PathFinding_1.ROUTING_SCALING_FACTOR);
                for (var x = startX - 1; x <= endX + 1; x++) {
                    for (var y = startY - 1; y < endY + 1; y++) {
                        _this.markMatrixPoint(matrix, _this.translateRoutingX(x), _this.translateRoutingY(y));
                    }
                }
            });
        };
        _this.markMatrixPoint = function (matrix, x, y) {
            if (matrix[y] !== undefined && matrix[y][x] !== undefined) {
                matrix[y][x] = 1;
            }
        };
        _this.diagramModel = new DiagramModel_1.DiagramModel();
        _this.nodeFactories = {};
        _this.linkFactories = {};
        _this.portFactories = {};
        _this.labelFactories = {};
        _this.canvas = null;
        _this.paintableWidgets = null;
        _this.linksThatHaveInitiallyRendered = {};
        if (Toolkit_1.Toolkit.TESTING) {
            Toolkit_1.Toolkit.TESTING_UID = 0;
            //pop it onto the window so our E2E helpers can find it
            if (window) {
                window["diagram_instance"] = _this;
            }
        }
        return _this;
    }
    DiagramEngine.prototype.installDefaultFactories = function () {
        this.registerNodeFactory(new main_1.DefaultNodeFactory());
        this.registerLinkFactory(new main_1.DefaultLinkFactory());
        this.registerPortFactory(new DefaultPortFactory_1.DefaultPortFactory());
        this.registerLabelFactory(new DefaultLabelFactory_1.DefaultLabelFactory());
    };
    DiagramEngine.prototype.repaintCanvas = function () {
        this.iterateListeners(function (listener) {
            if (listener.repaintCanvas) {
                listener.repaintCanvas();
            }
        });
    };
    DiagramEngine.prototype.clearRepaintEntities = function () {
        this.paintableWidgets = null;
    };
    DiagramEngine.prototype.enableRepaintEntities = function (entities) {
        var _this = this;
        this.paintableWidgets = {};
        entities.forEach(function (entity) {
            //if a node is requested to repaint, add all of its links
            if (entity instanceof NodeModel_1.NodeModel) {
                _.forEach(entity.getPorts(), function (port) {
                    _.forEach(port.getLinks(), function (link) {
                        _this.paintableWidgets[link.getID()] = true;
                    });
                });
            }
            if (entity instanceof PointModel_1.PointModel) {
                _this.paintableWidgets[entity.getLink().getID()] = true;
            }
            _this.paintableWidgets[entity.getID()] = true;
        });
    };
    /**
     * Checks to see if a model is locked by running through
     * its parents to see if they are locked first
     */
    DiagramEngine.prototype.isModelLocked = function (model) {
        //always check the diagram model
        if (this.diagramModel.isLocked()) {
            return true;
        }
        return model.isLocked();
    };
    DiagramEngine.prototype.recalculatePortsVisually = function () {
        this.nodesRendered = false;
        this.linksThatHaveInitiallyRendered = {};
    };
    DiagramEngine.prototype.canEntityRepaint = function (baseModel) {
        //no rules applied, allow repaint
        if (this.paintableWidgets === null) {
            return true;
        }
        return this.paintableWidgets[baseModel.getID()] !== undefined;
    };
    DiagramEngine.prototype.setCanvas = function (canvas) {
        this.canvas = canvas;
    };
    DiagramEngine.prototype.setDiagramModel = function (model) {
        this.diagramModel = model;
        this.recalculatePortsVisually();
    };
    DiagramEngine.prototype.getDiagramModel = function () {
        return this.diagramModel;
    };
    //!-------------- FACTORIES ------------
    DiagramEngine.prototype.getNodeFactories = function () {
        return this.nodeFactories;
    };
    DiagramEngine.prototype.getLinkFactories = function () {
        return this.linkFactories;
    };
    DiagramEngine.prototype.getLabelFactories = function () {
        return this.labelFactories;
    };
    DiagramEngine.prototype.registerLabelFactory = function (factory) {
        this.labelFactories[factory.getType()] = factory;
        this.iterateListeners(function (listener) {
            if (listener.labelFactoriesUpdated) {
                listener.labelFactoriesUpdated();
            }
        });
    };
    DiagramEngine.prototype.registerPortFactory = function (factory) {
        this.portFactories[factory.getType()] = factory;
        this.iterateListeners(function (listener) {
            if (listener.portFactoriesUpdated) {
                listener.portFactoriesUpdated();
            }
        });
    };
    DiagramEngine.prototype.registerNodeFactory = function (factory) {
        this.nodeFactories[factory.getType()] = factory;
        this.iterateListeners(function (listener) {
            if (listener.nodeFactoriesUpdated) {
                listener.nodeFactoriesUpdated();
            }
        });
    };
    DiagramEngine.prototype.registerLinkFactory = function (factory) {
        this.linkFactories[factory.getType()] = factory;
        this.iterateListeners(function (listener) {
            if (listener.linkFactoriesUpdated) {
                listener.linkFactoriesUpdated();
            }
        });
    };
    DiagramEngine.prototype.getPortFactory = function (type) {
        if (this.portFactories[type]) {
            return this.portFactories[type];
        }
        throw new Error("cannot find factory for port of type: [" + type + "]");
    };
    DiagramEngine.prototype.getNodeFactory = function (type) {
        if (this.nodeFactories[type]) {
            return this.nodeFactories[type];
        }
        throw new Error("cannot find factory for node of type: [" + type + "]");
    };
    DiagramEngine.prototype.getLinkFactory = function (type) {
        if (this.linkFactories[type]) {
            return this.linkFactories[type];
        }
        throw new Error("cannot find factory for link of type: [" + type + "]");
    };
    DiagramEngine.prototype.getLabelFactory = function (type) {
        if (this.labelFactories[type]) {
            return this.labelFactories[type];
        }
        throw new Error("cannot find factory for label of type: [" + type + "]");
    };
    DiagramEngine.prototype.getFactoryForNode = function (node) {
        return this.getNodeFactory(node.getType());
    };
    DiagramEngine.prototype.getFactoryForLink = function (link) {
        return this.getLinkFactory(link.getType());
    };
    DiagramEngine.prototype.getFactoryForLabel = function (label) {
        return this.getLabelFactory(label.getType());
    };
    DiagramEngine.prototype.generateWidgetForLink = function (link) {
        var linkFactory = this.getFactoryForLink(link);
        if (!linkFactory) {
            throw new Error("Cannot find link factory for link: " + link.getType());
        }
        return linkFactory.generateReactWidget(this, link);
    };
    DiagramEngine.prototype.generateWidgetForNode = function (node) {
        var nodeFactory = this.getFactoryForNode(node);
        if (!nodeFactory) {
            throw new Error("Cannot find widget factory for node: " + node.getType());
        }
        return nodeFactory.generateReactWidget(this, node);
    };
    DiagramEngine.prototype.getRelativeMousePoint = function (event) {
        var point = this.getRelativePoint(event.clientX, event.clientY);
        return {
            x: (point.x - this.diagramModel.getOffsetX()) / (this.diagramModel.getZoomLevel() / 100.0),
            y: (point.y - this.diagramModel.getOffsetY()) / (this.diagramModel.getZoomLevel() / 100.0)
        };
    };
    DiagramEngine.prototype.getRelativePoint = function (x, y) {
        var canvasRect = this.canvas.getBoundingClientRect();
        return { x: x - canvasRect.left, y: y - canvasRect.top };
    };
    DiagramEngine.prototype.getNodeElement = function (node) {
        var selector = this.canvas.querySelector(".node[data-nodeid=\"" + node.getID() + "\"]");
        if (selector === null) {
            throw new Error("Cannot find Node element with nodeID: [" + node.getID() + "]");
        }
        return selector;
    };
    DiagramEngine.prototype.getNodePortElement = function (port) {
        var selector = this.canvas.querySelector(".port[data-name=\"" + port.getName() + "\"][data-nodeid=\"" + port.getParent().getID() + "\"]");
        if (selector === null) {
            throw new Error("Cannot find Node Port element with nodeID: [" +
                port.getParent().getID() +
                "] and name: [" +
                port.getName() +
                "]");
        }
        return selector;
    };
    DiagramEngine.prototype.getPortCenter = function (port) {
        var sourceElement = this.getNodePortElement(port);
        var sourceRect = sourceElement.getBoundingClientRect();
        var rel = this.getRelativePoint(sourceRect.left, sourceRect.top);
        return {
            x: sourceElement.offsetWidth / 2 +
                (rel.x - this.diagramModel.getOffsetX()) / (this.diagramModel.getZoomLevel() / 100.0),
            y: sourceElement.offsetHeight / 2 +
                (rel.y - this.diagramModel.getOffsetY()) / (this.diagramModel.getZoomLevel() / 100.0)
        };
    };
    /**
     * Calculate rectangular coordinates of the port passed in.
     */
    DiagramEngine.prototype.getPortCoords = function (port) {
        var sourceElement = this.getNodePortElement(port);
        var sourceRect = sourceElement.getBoundingClientRect();
        var canvasRect = this.canvas.getBoundingClientRect();
        return {
            x: (sourceRect.x - this.diagramModel.getOffsetX()) / (this.diagramModel.getZoomLevel() / 100.0) -
                canvasRect.left,
            y: (sourceRect.y - this.diagramModel.getOffsetY()) / (this.diagramModel.getZoomLevel() / 100.0) -
                canvasRect.top,
            width: sourceRect.width,
            height: sourceRect.height
        };
    };
    /**
     * Determine the width and height of the node passed in.
     * It currently assumes nodes have a rectangular shape, can be overriden for customised shapes.
     */
    DiagramEngine.prototype.getNodeDimensions = function (node) {
        if (!this.canvas) {
            return {
                width: 0,
                height: 0
            };
        }
        var nodeElement = this.getNodeElement(node);
        var nodeRect = nodeElement.getBoundingClientRect();
        return {
            width: nodeRect.width,
            height: nodeRect.height
        };
    };
    DiagramEngine.prototype.getMaxNumberPointsPerLink = function () {
        return this.maxNumberPointsPerLink;
    };
    DiagramEngine.prototype.setMaxNumberPointsPerLink = function (max) {
        this.maxNumberPointsPerLink = max;
    };
    DiagramEngine.prototype.isSmartRoutingEnabled = function () {
        return !!this.smartRouting;
    };
    DiagramEngine.prototype.setSmartRoutingStatus = function (status) {
        this.smartRouting = status;
    };
    /**
     * A representation of the canvas in the following format:
     *
     * +-----------------+
     * | 0 0 0 0 0 0 0 0 |
     * | 0 0 0 0 0 0 0 0 |
     * | 0 0 0 0 0 0 0 0 |
     * | 0 0 0 0 0 0 0 0 |
     * | 0 0 0 0 0 0 0 0 |
     * +-----------------+
     *
     * In which all walkable points are marked by zeros.
     * It uses @link{#ROUTING_SCALING_FACTOR} to reduce the matrix dimensions and improve performance.
     */
    DiagramEngine.prototype.getCanvasMatrix = function () {
        if (this.canvasMatrix.length === 0) {
            this.calculateCanvasMatrix();
        }
        return this.canvasMatrix;
    };
    DiagramEngine.prototype.calculateCanvasMatrix = function () {
        var _a = this.calculateMatrixDimensions(), canvasWidth = _a.width, hAdjustmentFactor = _a.hAdjustmentFactor, canvasHeight = _a.height, vAdjustmentFactor = _a.vAdjustmentFactor;
        this.hAdjustmentFactor = hAdjustmentFactor;
        this.vAdjustmentFactor = vAdjustmentFactor;
        var matrixWidth = Math.ceil(canvasWidth / PathFinding_1.ROUTING_SCALING_FACTOR);
        var matrixHeight = Math.ceil(canvasHeight / PathFinding_1.ROUTING_SCALING_FACTOR);
        this.canvasMatrix = _.range(0, matrixHeight).map(function () {
            return new Array(matrixWidth).fill(0);
        });
    };
    /**
     * A representation of the canvas in the following format:
     *
     * +-----------------+
     * | 0 0 1 1 0 0 0 0 |
     * | 0 0 1 1 0 0 1 1 |
     * | 0 0 0 0 0 0 1 1 |
     * | 1 1 0 0 0 0 0 0 |
     * | 1 1 0 0 0 0 0 0 |
     * +-----------------+
     *
     * In which all points blocked by a node (and its ports) are
     * marked as 1; points were there is nothing (ie, free) receive 0.
     */
    DiagramEngine.prototype.getRoutingMatrix = function () {
        if (this.routingMatrix.length === 0) {
            this.calculateRoutingMatrix();
        }
        return this.routingMatrix;
    };
    DiagramEngine.prototype.calculateRoutingMatrix = function () {
        var matrix = _.cloneDeep(this.getCanvasMatrix());
        // nodes need to be marked as blocked points
        this.markNodes(matrix);
        // same thing for ports
        this.markPorts(matrix);
        this.routingMatrix = matrix;
    };
    /**
     * The routing matrix does not have negative indexes, but elements could be negatively positioned.
     * We use the functions below to translate back and forth between these coordinates, relying on the
     * calculated values of hAdjustmentFactor and vAdjustmentFactor.
     */
    DiagramEngine.prototype.translateRoutingX = function (x, reverse) {
        if (reverse === void 0) { reverse = false; }
        return x + this.hAdjustmentFactor * (reverse ? -1 : 1);
    };
    DiagramEngine.prototype.translateRoutingY = function (y, reverse) {
        if (reverse === void 0) { reverse = false; }
        return y + this.vAdjustmentFactor * (reverse ? -1 : 1);
    };
    DiagramEngine.prototype.zoomToFit = function () {
        var xFactor = this.canvas.clientWidth / this.canvas.scrollWidth;
        var yFactor = this.canvas.clientHeight / this.canvas.scrollHeight;
        var zoomFactor = xFactor < yFactor ? xFactor : yFactor;
        this.diagramModel.setZoomLevel(this.diagramModel.getZoomLevel() * zoomFactor);
        this.diagramModel.setOffset(0, 0);
        this.repaintCanvas();
    };
    return DiagramEngine;
}(BaseEntity_1.BaseEntity));
exports.DiagramEngine = DiagramEngine;


/***/ }),

/***/ "./src/Toolkit.ts":
/*!************************!*\
  !*** ./src/Toolkit.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable no-bitwise
var closest = __webpack_require__(/*! closest */ "./node_modules/closest/index.js");
var PathFinding_1 = __webpack_require__(/*! ./routing/PathFinding */ "./src/routing/PathFinding.ts");
var Path = __webpack_require__(/*! paths-js/path */ "./node_modules/paths-js/path.js");
/**
 * @author Dylan Vorster
 */
var Toolkit = /** @class */ (function () {
    function Toolkit() {
    }
    /**
     * Generats a unique ID (thanks Stack overflow :3)
     * @returns {String}
     */
    Toolkit.UID = function () {
        if (Toolkit.TESTING) {
            Toolkit.TESTING_UID++;
            return "" + Toolkit.TESTING_UID;
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0;
            var v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    /**
     * Finds the closest element as a polyfill
     *
     * @param  {Element} element  [description]
     * @param  {string}  selector [description]
     */
    Toolkit.closest = function (element, selector) {
        if (document.body.closest) {
            return element.closest(selector);
        }
        return closest(element, selector);
    };
    Toolkit.generateLinePath = function (firstPoint, lastPoint) {
        return "M" + firstPoint.x + "," + firstPoint.y + " L " + lastPoint.x + "," + lastPoint.y;
    };
    Toolkit.generateCurvePath = function (firstPoint, lastPoint, curvy) {
        if (curvy === void 0) { curvy = 0; }
        var isHorizontal = Math.abs(firstPoint.x - lastPoint.x) > Math.abs(firstPoint.y - lastPoint.y);
        var curvyX = isHorizontal ? curvy : 0;
        var curvyY = isHorizontal ? 0 : curvy;
        return "M" + firstPoint.x + "," + firstPoint.y + " C " + (firstPoint.x + curvyX) + "," + (firstPoint.y + curvyY) + "\n    " + (lastPoint.x - curvyX) + "," + (lastPoint.y - curvyY) + " " + lastPoint.x + "," + lastPoint.y;
    };
    Toolkit.generateDynamicPath = function (pathCoords) {
        var path = Path();
        path = path.moveto(pathCoords[0][0] * PathFinding_1.ROUTING_SCALING_FACTOR, pathCoords[0][1] * PathFinding_1.ROUTING_SCALING_FACTOR);
        pathCoords.slice(1).forEach(function (coords) {
            path = path.lineto(coords[0] * PathFinding_1.ROUTING_SCALING_FACTOR, coords[1] * PathFinding_1.ROUTING_SCALING_FACTOR);
        });
        return path.print();
    };
    Toolkit.TESTING = false;
    Toolkit.TESTING_UID = 0;
    return Toolkit;
}());
exports.Toolkit = Toolkit;


/***/ }),

/***/ "./src/actions/BaseAction.ts":
/*!***********************************!*\
  !*** ./src/actions/BaseAction.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseAction = /** @class */ (function () {
    function BaseAction(mouseX, mouseY) {
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.ms = new Date().getTime();
    }
    return BaseAction;
}());
exports.BaseAction = BaseAction;


/***/ }),

/***/ "./src/actions/MoveCanvasAction.ts":
/*!*****************************************!*\
  !*** ./src/actions/MoveCanvasAction.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAction_1 = __webpack_require__(/*! ./BaseAction */ "./src/actions/BaseAction.ts");
var MoveCanvasAction = /** @class */ (function (_super) {
    __extends(MoveCanvasAction, _super);
    function MoveCanvasAction(mouseX, mouseY, diagramModel) {
        var _this = _super.call(this, mouseX, mouseY) || this;
        _this.initialOffsetX = diagramModel.getOffsetX();
        _this.initialOffsetY = diagramModel.getOffsetY();
        return _this;
    }
    return MoveCanvasAction;
}(BaseAction_1.BaseAction));
exports.MoveCanvasAction = MoveCanvasAction;


/***/ }),

/***/ "./src/actions/MoveItemsAction.ts":
/*!****************************************!*\
  !*** ./src/actions/MoveItemsAction.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAction_1 = __webpack_require__(/*! ./BaseAction */ "./src/actions/BaseAction.ts");
var MoveItemsAction = /** @class */ (function (_super) {
    __extends(MoveItemsAction, _super);
    function MoveItemsAction(mouseX, mouseY, diagramEngine) {
        var _this = _super.call(this, mouseX, mouseY) || this;
        _this.moved = false;
        diagramEngine.enableRepaintEntities(diagramEngine.getDiagramModel().getSelectedItems());
        var selectedItems = diagramEngine.getDiagramModel().getSelectedItems();
        //dont allow items which are locked to move
        selectedItems = selectedItems.filter(function (item) {
            return !diagramEngine.isModelLocked(item);
        });
        _this.selectionModels = selectedItems.map(function (item) {
            return {
                model: item,
                initialX: item.x,
                initialY: item.y
            };
        });
        return _this;
    }
    return MoveItemsAction;
}(BaseAction_1.BaseAction));
exports.MoveItemsAction = MoveItemsAction;


/***/ }),

/***/ "./src/actions/SelectingAction.ts":
/*!****************************************!*\
  !*** ./src/actions/SelectingAction.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAction_1 = __webpack_require__(/*! ./BaseAction */ "./src/actions/BaseAction.ts");
var SelectingAction = /** @class */ (function (_super) {
    __extends(SelectingAction, _super);
    function SelectingAction(mouseX, mouseY) {
        var _this = _super.call(this, mouseX, mouseY) || this;
        _this.mouseX2 = mouseX;
        _this.mouseY2 = mouseY;
        return _this;
    }
    SelectingAction.prototype.getBoxDimensions = function () {
        return {
            left: this.mouseX2 > this.mouseX ? this.mouseX : this.mouseX2,
            top: this.mouseY2 > this.mouseY ? this.mouseY : this.mouseY2,
            width: Math.abs(this.mouseX2 - this.mouseX),
            height: Math.abs(this.mouseY2 - this.mouseY),
            right: this.mouseX2 < this.mouseX ? this.mouseX : this.mouseX2,
            bottom: this.mouseY2 < this.mouseY ? this.mouseY : this.mouseY2
        };
    };
    SelectingAction.prototype.containsElement = function (x, y, diagramModel) {
        var z = diagramModel.getZoomLevel() / 100.0;
        var dimensions = this.getBoxDimensions();
        return (x * z + diagramModel.getOffsetX() > dimensions.left &&
            x * z + diagramModel.getOffsetX() < dimensions.right &&
            y * z + diagramModel.getOffsetY() > dimensions.top &&
            y * z + diagramModel.getOffsetY() < dimensions.bottom);
    };
    return SelectingAction;
}(BaseAction_1.BaseAction));
exports.SelectingAction = SelectingAction;


/***/ }),

/***/ "./src/defaults/factories/DefaultLabelFactory.tsx":
/*!********************************************************!*\
  !*** ./src/defaults/factories/DefaultLabelFactory.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var AbstractLabelFactory_1 = __webpack_require__(/*! ../../factories/AbstractLabelFactory */ "./src/factories/AbstractLabelFactory.ts");
var DefaultLabelModel_1 = __webpack_require__(/*! ../models/DefaultLabelModel */ "./src/defaults/models/DefaultLabelModel.tsx");
var DefaultLabelWidget_1 = __webpack_require__(/*! ../widgets/DefaultLabelWidget */ "./src/defaults/widgets/DefaultLabelWidget.tsx");
/**
 * @author Dylan Vorster
 */
var DefaultLabelFactory = /** @class */ (function (_super) {
    __extends(DefaultLabelFactory, _super);
    function DefaultLabelFactory() {
        return _super.call(this, "default") || this;
    }
    DefaultLabelFactory.prototype.generateReactWidget = function (diagramEngine, label) {
        return React.createElement(DefaultLabelWidget_1.DefaultLabelWidget, { model: label });
    };
    DefaultLabelFactory.prototype.getNewInstance = function (initialConfig) {
        return new DefaultLabelModel_1.DefaultLabelModel();
    };
    return DefaultLabelFactory;
}(AbstractLabelFactory_1.AbstractLabelFactory));
exports.DefaultLabelFactory = DefaultLabelFactory;


/***/ }),

/***/ "./src/defaults/factories/DefaultLinkFactory.tsx":
/*!*******************************************************!*\
  !*** ./src/defaults/factories/DefaultLinkFactory.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var DefaultLinkWidget_1 = __webpack_require__(/*! ../widgets/DefaultLinkWidget */ "./src/defaults/widgets/DefaultLinkWidget.tsx");
var AbstractLinkFactory_1 = __webpack_require__(/*! ../../factories/AbstractLinkFactory */ "./src/factories/AbstractLinkFactory.ts");
var DefaultLinkModel_1 = __webpack_require__(/*! ../models/DefaultLinkModel */ "./src/defaults/models/DefaultLinkModel.ts");
/**
 * @author Dylan Vorster
 */
var DefaultLinkFactory = /** @class */ (function (_super) {
    __extends(DefaultLinkFactory, _super);
    function DefaultLinkFactory() {
        return _super.call(this, "default") || this;
    }
    DefaultLinkFactory.prototype.generateReactWidget = function (diagramEngine, link) {
        return React.createElement(DefaultLinkWidget_1.DefaultLinkWidget, {
            link: link,
            diagramEngine: diagramEngine
        });
    };
    DefaultLinkFactory.prototype.getNewInstance = function (initialConfig) {
        return new DefaultLinkModel_1.DefaultLinkModel();
    };
    DefaultLinkFactory.prototype.generateLinkSegment = function (model, widget, selected, path) {
        return (React.createElement("path", { className: selected ? widget.bem("--path-selected") : "", strokeWidth: model.width, stroke: model.color, d: path }));
    };
    return DefaultLinkFactory;
}(AbstractLinkFactory_1.AbstractLinkFactory));
exports.DefaultLinkFactory = DefaultLinkFactory;


/***/ }),

/***/ "./src/defaults/factories/DefaultNodeFactory.ts":
/*!******************************************************!*\
  !*** ./src/defaults/factories/DefaultNodeFactory.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNodeModel_1 = __webpack_require__(/*! ../models/DefaultNodeModel */ "./src/defaults/models/DefaultNodeModel.ts");
var React = __webpack_require__(/*! react */ "react");
var DefaultNodeWidget_1 = __webpack_require__(/*! ../widgets/DefaultNodeWidget */ "./src/defaults/widgets/DefaultNodeWidget.tsx");
var AbstractNodeFactory_1 = __webpack_require__(/*! ../../factories/AbstractNodeFactory */ "./src/factories/AbstractNodeFactory.ts");
/**
 * @author Dylan Vorster
 */
var DefaultNodeFactory = /** @class */ (function (_super) {
    __extends(DefaultNodeFactory, _super);
    function DefaultNodeFactory() {
        return _super.call(this, "default") || this;
    }
    DefaultNodeFactory.prototype.generateReactWidget = function (diagramEngine, node) {
        return React.createElement(DefaultNodeWidget_1.DefaultNodeWidget, {
            node: node,
            diagramEngine: diagramEngine
        });
    };
    DefaultNodeFactory.prototype.getNewInstance = function (initialConfig) {
        return new DefaultNodeModel_1.DefaultNodeModel();
    };
    return DefaultNodeFactory;
}(AbstractNodeFactory_1.AbstractNodeFactory));
exports.DefaultNodeFactory = DefaultNodeFactory;


/***/ }),

/***/ "./src/defaults/factories/DefaultPortFactory.tsx":
/*!*******************************************************!*\
  !*** ./src/defaults/factories/DefaultPortFactory.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultPortModel_1 = __webpack_require__(/*! ../models/DefaultPortModel */ "./src/defaults/models/DefaultPortModel.ts");
var AbstractPortFactory_1 = __webpack_require__(/*! ../../factories/AbstractPortFactory */ "./src/factories/AbstractPortFactory.ts");
var DefaultPortFactory = /** @class */ (function (_super) {
    __extends(DefaultPortFactory, _super);
    function DefaultPortFactory() {
        return _super.call(this, "default") || this;
    }
    DefaultPortFactory.prototype.getNewInstance = function (initialConfig) {
        return new DefaultPortModel_1.DefaultPortModel(true, "unknown");
    };
    return DefaultPortFactory;
}(AbstractPortFactory_1.AbstractPortFactory));
exports.DefaultPortFactory = DefaultPortFactory;


/***/ }),

/***/ "./src/defaults/models/DefaultLabelModel.tsx":
/*!***************************************************!*\
  !*** ./src/defaults/models/DefaultLabelModel.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LabelModel_1 = __webpack_require__(/*! ../../models/LabelModel */ "./src/models/LabelModel.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var DefaultLabelModel = /** @class */ (function (_super) {
    __extends(DefaultLabelModel, _super);
    function DefaultLabelModel() {
        var _this = _super.call(this, "default") || this;
        _this.offsetY = -23;
        return _this;
    }
    DefaultLabelModel.prototype.setLabel = function (label) {
        this.label = label;
    };
    DefaultLabelModel.prototype.deSerialize = function (ob, engine) {
        _super.prototype.deSerialize.call(this, ob, engine);
        this.label = ob.label;
    };
    DefaultLabelModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            label: this.label
        });
    };
    return DefaultLabelModel;
}(LabelModel_1.LabelModel));
exports.DefaultLabelModel = DefaultLabelModel;


/***/ }),

/***/ "./src/defaults/models/DefaultLinkModel.ts":
/*!*************************************************!*\
  !*** ./src/defaults/models/DefaultLinkModel.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author Dylan Vorster
 */
var LinkModel_1 = __webpack_require__(/*! ../../models/LinkModel */ "./src/models/LinkModel.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var DefaultLabelModel_1 = __webpack_require__(/*! ./DefaultLabelModel */ "./src/defaults/models/DefaultLabelModel.tsx");
var LabelModel_1 = __webpack_require__(/*! ../../models/LabelModel */ "./src/models/LabelModel.ts");
var DefaultLinkModel = /** @class */ (function (_super) {
    __extends(DefaultLinkModel, _super);
    function DefaultLinkModel(type) {
        if (type === void 0) { type = "default"; }
        var _this = _super.call(this, type) || this;
        _this.color = "rgba(255,255,255,0.5)";
        _this.width = 3;
        _this.curvyness = 50;
        return _this;
    }
    DefaultLinkModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            width: this.width,
            color: this.color,
            curvyness: this.curvyness
        });
    };
    DefaultLinkModel.prototype.deSerialize = function (ob, engine) {
        _super.prototype.deSerialize.call(this, ob, engine);
        this.color = ob.color;
        this.width = ob.width;
        this.curvyness = ob.curvyness;
    };
    DefaultLinkModel.prototype.addLabel = function (label) {
        if (label instanceof LabelModel_1.LabelModel) {
            return _super.prototype.addLabel.call(this, label);
        }
        var labelOb = new DefaultLabelModel_1.DefaultLabelModel();
        labelOb.setLabel(label);
        return _super.prototype.addLabel.call(this, labelOb);
    };
    DefaultLinkModel.prototype.setWidth = function (width) {
        this.width = width;
        this.iterateListeners(function (listener, event) {
            if (listener.widthChanged) {
                listener.widthChanged(__assign({}, event, { width: width }));
            }
        });
    };
    DefaultLinkModel.prototype.setColor = function (color) {
        this.color = color;
        this.iterateListeners(function (listener, event) {
            if (listener.colorChanged) {
                listener.colorChanged(__assign({}, event, { color: color }));
            }
        });
    };
    return DefaultLinkModel;
}(LinkModel_1.LinkModel));
exports.DefaultLinkModel = DefaultLinkModel;


/***/ }),

/***/ "./src/defaults/models/DefaultNodeModel.ts":
/*!*************************************************!*\
  !*** ./src/defaults/models/DefaultNodeModel.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultPortModel_1 = __webpack_require__(/*! ./DefaultPortModel */ "./src/defaults/models/DefaultPortModel.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var NodeModel_1 = __webpack_require__(/*! ../../models/NodeModel */ "./src/models/NodeModel.ts");
var Toolkit_1 = __webpack_require__(/*! ../../Toolkit */ "./src/Toolkit.ts");
/**
 * @author Dylan Vorster
 */
var DefaultNodeModel = /** @class */ (function (_super) {
    __extends(DefaultNodeModel, _super);
    function DefaultNodeModel(name, color) {
        if (name === void 0) { name = "Untitled"; }
        if (color === void 0) { color = "rgb(0,192,255)"; }
        var _this = _super.call(this, "default") || this;
        _this.name = name;
        _this.color = color;
        return _this;
    }
    DefaultNodeModel.prototype.addInPort = function (label) {
        return this.addPort(new DefaultPortModel_1.DefaultPortModel(true, Toolkit_1.Toolkit.UID(), label));
    };
    DefaultNodeModel.prototype.addOutPort = function (label) {
        return this.addPort(new DefaultPortModel_1.DefaultPortModel(false, Toolkit_1.Toolkit.UID(), label));
    };
    DefaultNodeModel.prototype.deSerialize = function (object, engine) {
        _super.prototype.deSerialize.call(this, object, engine);
        this.name = object.name;
        this.color = object.color;
    };
    DefaultNodeModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            name: this.name,
            color: this.color
        });
    };
    DefaultNodeModel.prototype.getInPorts = function () {
        return _.filter(this.ports, function (portModel) {
            return portModel.in;
        });
    };
    DefaultNodeModel.prototype.getOutPorts = function () {
        return _.filter(this.ports, function (portModel) {
            return !portModel.in;
        });
    };
    return DefaultNodeModel;
}(NodeModel_1.NodeModel));
exports.DefaultNodeModel = DefaultNodeModel;


/***/ }),

/***/ "./src/defaults/models/DefaultPortModel.ts":
/*!*************************************************!*\
  !*** ./src/defaults/models/DefaultPortModel.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(/*! lodash */ "lodash");
var PortModel_1 = __webpack_require__(/*! ../../models/PortModel */ "./src/models/PortModel.ts");
var DefaultLinkModel_1 = __webpack_require__(/*! ./DefaultLinkModel */ "./src/defaults/models/DefaultLinkModel.ts");
var DefaultPortModel = /** @class */ (function (_super) {
    __extends(DefaultPortModel, _super);
    function DefaultPortModel(isInput, name, label, id) {
        if (label === void 0) { label = null; }
        var _this = _super.call(this, name, "default", id) || this;
        _this.in = isInput;
        _this.label = label || name;
        return _this;
    }
    DefaultPortModel.prototype.deSerialize = function (object, engine) {
        _super.prototype.deSerialize.call(this, object, engine);
        this.in = object.in;
        this.label = object.label;
    };
    DefaultPortModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            in: this.in,
            label: this.label
        });
    };
    DefaultPortModel.prototype.link = function (port) {
        var link = this.createLinkModel();
        link.setSourcePort(this);
        link.setTargetPort(port);
        return link;
    };
    DefaultPortModel.prototype.canLinkToPort = function (port) {
        if (port instanceof DefaultPortModel) {
            return this.in !== port.in;
        }
        return true;
    };
    DefaultPortModel.prototype.createLinkModel = function () {
        var link = _super.prototype.createLinkModel.call(this);
        return link || new DefaultLinkModel_1.DefaultLinkModel();
    };
    return DefaultPortModel;
}(PortModel_1.PortModel));
exports.DefaultPortModel = DefaultPortModel;


/***/ }),

/***/ "./src/defaults/widgets/DefaultLabelWidget.tsx":
/*!*****************************************************!*\
  !*** ./src/defaults/widgets/DefaultLabelWidget.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var BaseWidget_1 = __webpack_require__(/*! ../../widgets/BaseWidget */ "./src/widgets/BaseWidget.tsx");
var DefaultLabelWidget = /** @class */ (function (_super) {
    __extends(DefaultLabelWidget, _super);
    function DefaultLabelWidget(props) {
        return _super.call(this, "srd-default-label", props) || this;
    }
    DefaultLabelWidget.prototype.render = function () {
        return React.createElement("div", __assign({}, this.getProps()), this.props.model.label);
    };
    return DefaultLabelWidget;
}(BaseWidget_1.BaseWidget));
exports.DefaultLabelWidget = DefaultLabelWidget;


/***/ }),

/***/ "./src/defaults/widgets/DefaultLinkWidget.tsx":
/*!****************************************************!*\
  !*** ./src/defaults/widgets/DefaultLinkWidget.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var PointModel_1 = __webpack_require__(/*! ../../models/PointModel */ "./src/models/PointModel.ts");
var Toolkit_1 = __webpack_require__(/*! ../../Toolkit */ "./src/Toolkit.ts");
var PathFinding_1 = __webpack_require__(/*! ../../routing/PathFinding */ "./src/routing/PathFinding.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var BaseWidget_1 = __webpack_require__(/*! ../../widgets/BaseWidget */ "./src/widgets/BaseWidget.tsx");
var DefaultLinkWidget = /** @class */ (function (_super) {
    __extends(DefaultLinkWidget, _super);
    function DefaultLinkWidget(props) {
        var _this = _super.call(this, "srd-default-link", props) || this;
        _this.addPointToLink = function (event, index) {
            if (!event.shiftKey &&
                !_this.props.diagramEngine.isModelLocked(_this.props.link) &&
                _this.props.link.points.length - 1 <= _this.props.diagramEngine.getMaxNumberPointsPerLink()) {
                var point = new PointModel_1.PointModel(_this.props.link, _this.props.diagramEngine.getRelativeMousePoint(event));
                point.setSelected(true);
                _this.forceUpdate();
                _this.props.link.addPoint(point, index);
                _this.props.pointAdded(point, event);
            }
        };
        _this.findPathAndRelativePositionToRenderLabel = function (index) {
            // an array to hold all path lengths, making sure we hit the DOM only once to fetch this information
            var lengths = _this.refPaths.map(function (path) { return path.getTotalLength(); });
            // calculate the point where we want to display the label
            var labelPosition = lengths.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0) *
                (index / (_this.props.link.labels.length + 1));
            // find the path where the label will be rendered and calculate the relative position
            var pathIndex = 0;
            while (pathIndex < _this.refPaths.length) {
                if (labelPosition - lengths[pathIndex] < 0) {
                    return {
                        path: _this.refPaths[pathIndex],
                        position: labelPosition
                    };
                }
                // keep searching
                labelPosition -= lengths[pathIndex];
                pathIndex++;
            }
        };
        _this.calculateLabelPosition = function (label, index) {
            if (!_this.refLabels[label.id]) {
                // no label? nothing to do here
                return;
            }
            var _a = _this.findPathAndRelativePositionToRenderLabel(index), path = _a.path, position = _a.position;
            var labelDimensions = {
                width: _this.refLabels[label.id].offsetWidth,
                height: _this.refLabels[label.id].offsetHeight
            };
            var pathCentre = path.getPointAtLength(position);
            var labelCoordinates = {
                x: pathCentre.x - labelDimensions.width / 2 + label.offsetX,
                y: pathCentre.y - labelDimensions.height / 2 + label.offsetY
            };
            _this.refLabels[label.id].setAttribute("style", "transform: translate(" + labelCoordinates.x + "px, " + labelCoordinates.y + "px);");
        };
        _this.refLabels = {};
        _this.refPaths = [];
        _this.state = {
            selected: false
        };
        if (props.diagramEngine.isSmartRoutingEnabled()) {
            _this.pathFinding = new PathFinding_1.default(_this.props.diagramEngine);
        }
        return _this;
    }
    DefaultLinkWidget.prototype.calculateAllLabelPosition = function () {
        var _this = this;
        _.forEach(this.props.link.labels, function (label, index) {
            _this.calculateLabelPosition(label, index + 1);
        });
    };
    DefaultLinkWidget.prototype.componentDidUpdate = function () {
        if (this.props.link.labels.length > 0) {
            window.requestAnimationFrame(this.calculateAllLabelPosition.bind(this));
        }
    };
    DefaultLinkWidget.prototype.componentDidMount = function () {
        if (this.props.link.labels.length > 0) {
            window.requestAnimationFrame(this.calculateAllLabelPosition.bind(this));
        }
    };
    DefaultLinkWidget.prototype.generatePoint = function (pointIndex) {
        var _this = this;
        var x = this.props.link.points[pointIndex].x;
        var y = this.props.link.points[pointIndex].y;
        return (React.createElement("g", { key: "point-" + this.props.link.points[pointIndex].id },
            React.createElement("circle", { cx: x, cy: y, r: 5, className: "point " +
                    this.bem("__point") +
                    (this.props.link.points[pointIndex].isSelected() ? this.bem("--point-selected") : "") }),
            React.createElement("circle", { onMouseLeave: function () {
                    _this.setState({ selected: false });
                }, onMouseEnter: function () {
                    _this.setState({ selected: true });
                }, "data-id": this.props.link.points[pointIndex].id, "data-linkid": this.props.link.id, cx: x, cy: y, r: 15, opacity: 0, className: "point " + this.bem("__point") })));
    };
    DefaultLinkWidget.prototype.generateLabel = function (label) {
        var _this = this;
        var canvas = this.props.diagramEngine.canvas;
        return (React.createElement("foreignObject", { key: label.id, className: this.bem("__label"), width: canvas.offsetWidth, height: canvas.offsetHeight },
            React.createElement("div", { ref: function (ref) { return (_this.refLabels[label.id] = ref); } }, this.props.diagramEngine
                .getFactoryForLabel(label)
                .generateReactWidget(this.props.diagramEngine, label))));
    };
    DefaultLinkWidget.prototype.generateLink = function (path, extraProps, id) {
        var _this = this;
        var props = this.props;
        var Bottom = React.cloneElement(props.diagramEngine.getFactoryForLink(this.props.link).generateLinkSegment(this.props.link, this, this.state.selected || this.props.link.isSelected(), path), {
            ref: function (ref) { return ref && _this.refPaths.push(ref); }
        });
        var Top = React.cloneElement(Bottom, __assign({}, extraProps, { strokeLinecap: "round", onMouseLeave: function () {
                _this.setState({ selected: false });
            }, onMouseEnter: function () {
                _this.setState({ selected: true });
            }, ref: null, "data-linkid": this.props.link.getID(), strokeOpacity: this.state.selected ? 0.1 : 0, strokeWidth: 20, onContextMenu: function () {
                if (!_this.props.diagramEngine.isModelLocked(_this.props.link)) {
                    event.preventDefault();
                    _this.props.link.remove();
                }
            } }));
        return (React.createElement("g", { key: "link-" + id },
            Bottom,
            Top));
    };
    /**
     * Smart routing is only applicable when all conditions below are true:
     * - smart routing is set to true on the engine
     * - current link is between two nodes (not between a node and an empty point)
     * - no custom points exist along the line
     */
    DefaultLinkWidget.prototype.isSmartRoutingApplicable = function () {
        var _a = this.props, diagramEngine = _a.diagramEngine, link = _a.link;
        if (!diagramEngine.isSmartRoutingEnabled()) {
            return false;
        }
        if (link.points.length !== 2) {
            return false;
        }
        if (link.sourcePort === null || link.targetPort === null) {
            return false;
        }
        return true;
    };
    DefaultLinkWidget.prototype.render = function () {
        var _this = this;
        var diagramEngine = this.props.diagramEngine;
        if (!diagramEngine.nodesRendered) {
            return null;
        }
        //ensure id is present for all points on the path
        var points = this.props.link.points;
        var paths = [];
        if (this.isSmartRoutingApplicable()) {
            // first step: calculate a direct path between the points being linked
            var directPathCoords = this.pathFinding.calculateDirectPath(_.first(points), _.last(points));
            var routingMatrix = diagramEngine.getRoutingMatrix();
            // now we need to extract, from the routing matrix, the very first walkable points
            // so they can be used as origin and destination of the link to be created
            var smartLink = this.pathFinding.calculateLinkStartEndCoords(routingMatrix, directPathCoords);
            if (smartLink) {
                var start = smartLink.start, end = smartLink.end, pathToStart = smartLink.pathToStart, pathToEnd = smartLink.pathToEnd;
                // second step: calculate a path avoiding hitting other elements
                var simplifiedPath = this.pathFinding.calculateDynamicPath(routingMatrix, start, end, pathToStart, pathToEnd);
                paths.push(
                //smooth: boolean, extraProps: any, id: string | number, firstPoint: PointModel, lastPoint: PointModel
                this.generateLink(Toolkit_1.Toolkit.generateDynamicPath(simplifiedPath), {
                    onMouseDown: function (event) {
                        _this.addPointToLink(event, 1);
                    }
                }, "0"));
            }
        }
        // true when smart routing was skipped or not enabled.
        // See @link{#isSmartRoutingApplicable()}.
        if (paths.length === 0) {
            if (points.length === 2) {
                var isHorizontal = Math.abs(points[0].x - points[1].x) > Math.abs(points[0].y - points[1].y);
                var xOrY = isHorizontal ? "x" : "y";
                //draw the smoothing
                //if the points are too close, just draw a straight line
                var margin = 50;
                if (Math.abs(points[0][xOrY] - points[1][xOrY]) < 50) {
                    margin = 5;
                }
                var pointLeft = points[0];
                var pointRight = points[1];
                //some defensive programming to make sure the smoothing is
                //always in the right direction
                if (pointLeft[xOrY] > pointRight[xOrY]) {
                    pointLeft = points[1];
                    pointRight = points[0];
                }
                paths.push(this.generateLink(Toolkit_1.Toolkit.generateCurvePath(pointLeft, pointRight, this.props.link.curvyness), {
                    onMouseDown: function (event) {
                        _this.addPointToLink(event, 1);
                    }
                }, "0"));
                // draw the link as dangeling
                if (this.props.link.targetPort === null) {
                    paths.push(this.generatePoint(1));
                }
            }
            else {
                var _loop_1 = function (j) {
                    paths.push(this_1.generateLink(Toolkit_1.Toolkit.generateLinePath(points[j], points[j + 1]), {
                        "data-linkid": this_1.props.link.id,
                        "data-point": j,
                        onMouseDown: function (event) {
                            _this.addPointToLink(event, j + 1);
                        }
                    }, j));
                };
                var this_1 = this;
                //draw the multiple anchors and complex line instead
                for (var j = 0; j < points.length - 1; j++) {
                    _loop_1(j);
                }
                //render the circles
                for (var i = 1; i < points.length - 1; i++) {
                    paths.push(this.generatePoint(i));
                }
                if (this.props.link.targetPort === null) {
                    paths.push(this.generatePoint(points.length - 1));
                }
            }
        }
        this.refPaths = [];
        return (React.createElement("g", __assign({}, this.getProps()),
            paths,
            _.map(this.props.link.labels, function (labelModel) {
                return _this.generateLabel(labelModel);
            })));
    };
    DefaultLinkWidget.defaultProps = {
        color: "black",
        width: 3,
        link: null,
        engine: null,
        smooth: false,
        diagramEngine: null
    };
    return DefaultLinkWidget;
}(BaseWidget_1.BaseWidget));
exports.DefaultLinkWidget = DefaultLinkWidget;


/***/ }),

/***/ "./src/defaults/widgets/DefaultNodeWidget.tsx":
/*!****************************************************!*\
  !*** ./src/defaults/widgets/DefaultNodeWidget.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var _ = __webpack_require__(/*! lodash */ "lodash");
var DefaultPortLabelWidget_1 = __webpack_require__(/*! ./DefaultPortLabelWidget */ "./src/defaults/widgets/DefaultPortLabelWidget.tsx");
var BaseWidget_1 = __webpack_require__(/*! ../../widgets/BaseWidget */ "./src/widgets/BaseWidget.tsx");
/**
 * @author Dylan Vorster
 */
var DefaultNodeWidget = /** @class */ (function (_super) {
    __extends(DefaultNodeWidget, _super);
    function DefaultNodeWidget(props) {
        var _this = _super.call(this, "srd-default-node", props) || this;
        _this.state = {};
        return _this;
    }
    DefaultNodeWidget.prototype.generatePort = function (port) {
        return React.createElement(DefaultPortLabelWidget_1.DefaultPortLabel, { model: port, key: port.id });
    };
    DefaultNodeWidget.prototype.render = function () {
        return (React.createElement("div", __assign({}, this.getProps(), { style: { background: this.props.node.color } }),
            React.createElement("div", { className: this.bem("__title") },
                React.createElement("div", { className: this.bem("__name") }, this.props.node.name)),
            React.createElement("div", { className: this.bem("__ports") },
                React.createElement("div", { className: this.bem("__in") }, _.map(this.props.node.getInPorts(), this.generatePort.bind(this))),
                React.createElement("div", { className: this.bem("__out") }, _.map(this.props.node.getOutPorts(), this.generatePort.bind(this))))));
    };
    return DefaultNodeWidget;
}(BaseWidget_1.BaseWidget));
exports.DefaultNodeWidget = DefaultNodeWidget;


/***/ }),

/***/ "./src/defaults/widgets/DefaultPortLabelWidget.tsx":
/*!*********************************************************!*\
  !*** ./src/defaults/widgets/DefaultPortLabelWidget.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var PortWidget_1 = __webpack_require__(/*! ../../widgets/PortWidget */ "./src/widgets/PortWidget.tsx");
var BaseWidget_1 = __webpack_require__(/*! ../../widgets/BaseWidget */ "./src/widgets/BaseWidget.tsx");
/**
 * @author Dylan Vorster
 */
var DefaultPortLabel = /** @class */ (function (_super) {
    __extends(DefaultPortLabel, _super);
    function DefaultPortLabel(props) {
        return _super.call(this, "srd-default-port", props) || this;
    }
    DefaultPortLabel.prototype.getClassName = function () {
        return _super.prototype.getClassName.call(this) + (this.props.model.in ? this.bem("--in") : this.bem("--out"));
    };
    DefaultPortLabel.prototype.render = function () {
        var port = React.createElement(PortWidget_1.PortWidget, { node: this.props.model.getParent(), name: this.props.model.name });
        var label = React.createElement("div", { className: "name" }, this.props.model.label);
        return (React.createElement("div", __assign({}, this.getProps()),
            this.props.model.in ? port : label,
            this.props.model.in ? label : port));
    };
    return DefaultPortLabel;
}(BaseWidget_1.BaseWidget));
exports.DefaultPortLabel = DefaultPortLabel;


/***/ }),

/***/ "./src/factories/AbstractFactory.ts":
/*!******************************************!*\
  !*** ./src/factories/AbstractFactory.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory(name) {
        this.type = name;
    }
    AbstractFactory.prototype.getType = function () {
        return this.type;
    };
    return AbstractFactory;
}());
exports.AbstractFactory = AbstractFactory;


/***/ }),

/***/ "./src/factories/AbstractLabelFactory.ts":
/*!***********************************************!*\
  !*** ./src/factories/AbstractLabelFactory.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/factories/AbstractFactory.ts");
var AbstractLabelFactory = /** @class */ (function (_super) {
    __extends(AbstractLabelFactory, _super);
    function AbstractLabelFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AbstractLabelFactory;
}(AbstractFactory_1.AbstractFactory));
exports.AbstractLabelFactory = AbstractLabelFactory;


/***/ }),

/***/ "./src/factories/AbstractLinkFactory.ts":
/*!**********************************************!*\
  !*** ./src/factories/AbstractLinkFactory.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/factories/AbstractFactory.ts");
var AbstractLinkFactory = /** @class */ (function (_super) {
    __extends(AbstractLinkFactory, _super);
    function AbstractLinkFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AbstractLinkFactory;
}(AbstractFactory_1.AbstractFactory));
exports.AbstractLinkFactory = AbstractLinkFactory;


/***/ }),

/***/ "./src/factories/AbstractNodeFactory.ts":
/*!**********************************************!*\
  !*** ./src/factories/AbstractNodeFactory.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/factories/AbstractFactory.ts");
var AbstractNodeFactory = /** @class */ (function (_super) {
    __extends(AbstractNodeFactory, _super);
    function AbstractNodeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AbstractNodeFactory;
}(AbstractFactory_1.AbstractFactory));
exports.AbstractNodeFactory = AbstractNodeFactory;


/***/ }),

/***/ "./src/factories/AbstractPortFactory.ts":
/*!**********************************************!*\
  !*** ./src/factories/AbstractPortFactory.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/factories/AbstractFactory.ts");
var AbstractPortFactory = /** @class */ (function (_super) {
    __extends(AbstractPortFactory, _super);
    function AbstractPortFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AbstractPortFactory;
}(AbstractFactory_1.AbstractFactory));
exports.AbstractPortFactory = AbstractPortFactory;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author Dylan Vorster
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts"));
__export(__webpack_require__(/*! ./BaseEntity */ "./src/BaseEntity.ts"));
__export(__webpack_require__(/*! ./DiagramEngine */ "./src/DiagramEngine.ts"));
__export(__webpack_require__(/*! ./defaults/models/DefaultNodeModel */ "./src/defaults/models/DefaultNodeModel.ts"));
__export(__webpack_require__(/*! ./defaults/models/DefaultPortModel */ "./src/defaults/models/DefaultPortModel.ts"));
__export(__webpack_require__(/*! ./defaults/models/DefaultLinkModel */ "./src/defaults/models/DefaultLinkModel.ts"));
__export(__webpack_require__(/*! ./defaults/models/DefaultLabelModel */ "./src/defaults/models/DefaultLabelModel.tsx"));
__export(__webpack_require__(/*! ./defaults/factories/DefaultLinkFactory */ "./src/defaults/factories/DefaultLinkFactory.tsx"));
__export(__webpack_require__(/*! ./defaults/factories/DefaultNodeFactory */ "./src/defaults/factories/DefaultNodeFactory.ts"));
__export(__webpack_require__(/*! ./defaults/factories/DefaultPortFactory */ "./src/defaults/factories/DefaultPortFactory.tsx"));
__export(__webpack_require__(/*! ./defaults/factories/DefaultLabelFactory */ "./src/defaults/factories/DefaultLabelFactory.tsx"));
__export(__webpack_require__(/*! ./defaults/widgets/DefaultLinkWidget */ "./src/defaults/widgets/DefaultLinkWidget.tsx"));
__export(__webpack_require__(/*! ./defaults/widgets/DefaultLabelWidget */ "./src/defaults/widgets/DefaultLabelWidget.tsx"));
__export(__webpack_require__(/*! ./defaults/widgets/DefaultNodeWidget */ "./src/defaults/widgets/DefaultNodeWidget.tsx"));
__export(__webpack_require__(/*! ./defaults/widgets/DefaultPortLabelWidget */ "./src/defaults/widgets/DefaultPortLabelWidget.tsx"));
__export(__webpack_require__(/*! ./factories/AbstractFactory */ "./src/factories/AbstractFactory.ts"));
__export(__webpack_require__(/*! ./factories/AbstractLabelFactory */ "./src/factories/AbstractLabelFactory.ts"));
__export(__webpack_require__(/*! ./factories/AbstractLinkFactory */ "./src/factories/AbstractLinkFactory.ts"));
__export(__webpack_require__(/*! ./factories/AbstractNodeFactory */ "./src/factories/AbstractNodeFactory.ts"));
__export(__webpack_require__(/*! ./factories/AbstractPortFactory */ "./src/factories/AbstractPortFactory.ts"));
__export(__webpack_require__(/*! ./routing/PathFinding */ "./src/routing/PathFinding.ts"));
__export(__webpack_require__(/*! ./actions/BaseAction */ "./src/actions/BaseAction.ts"));
__export(__webpack_require__(/*! ./actions/MoveCanvasAction */ "./src/actions/MoveCanvasAction.ts"));
__export(__webpack_require__(/*! ./actions/MoveItemsAction */ "./src/actions/MoveItemsAction.ts"));
__export(__webpack_require__(/*! ./actions/SelectingAction */ "./src/actions/SelectingAction.ts"));
__export(__webpack_require__(/*! ./models/BaseModel */ "./src/models/BaseModel.ts"));
__export(__webpack_require__(/*! ./models/DiagramModel */ "./src/models/DiagramModel.ts"));
__export(__webpack_require__(/*! ./models/LinkModel */ "./src/models/LinkModel.ts"));
__export(__webpack_require__(/*! ./models/NodeModel */ "./src/models/NodeModel.ts"));
__export(__webpack_require__(/*! ./models/PointModel */ "./src/models/PointModel.ts"));
__export(__webpack_require__(/*! ./models/PortModel */ "./src/models/PortModel.ts"));
__export(__webpack_require__(/*! ./models/LabelModel */ "./src/models/LabelModel.ts"));
__export(__webpack_require__(/*! ./widgets/DiagramWidget */ "./src/widgets/DiagramWidget.tsx"));
__export(__webpack_require__(/*! ./widgets/LinkWidget */ "./src/widgets/LinkWidget.tsx"));
__export(__webpack_require__(/*! ./widgets/NodeWidget */ "./src/widgets/NodeWidget.tsx"));
__export(__webpack_require__(/*! ./widgets/PortWidget */ "./src/widgets/PortWidget.tsx"));
__export(__webpack_require__(/*! ./widgets/BaseWidget */ "./src/widgets/BaseWidget.tsx"));
__export(__webpack_require__(/*! ./widgets/layers/LinkLayerWidget */ "./src/widgets/layers/LinkLayerWidget.tsx"));
__export(__webpack_require__(/*! ./widgets/layers/NodeLayerWidget */ "./src/widgets/layers/NodeLayerWidget.tsx"));


/***/ }),

/***/ "./src/models/BaseModel.ts":
/*!*********************************!*\
  !*** ./src/models/BaseModel.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity_1 = __webpack_require__(/*! ../BaseEntity */ "./src/BaseEntity.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
/**
 * @author Dylan Vorster
 */
var BaseModel = /** @class */ (function (_super) {
    __extends(BaseModel, _super);
    function BaseModel(type, id) {
        var _this = _super.call(this, id) || this;
        _this.type = type;
        _this.selected = false;
        return _this;
    }
    BaseModel.prototype.getParent = function () {
        return this.parent;
    };
    BaseModel.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    BaseModel.prototype.getSelectedEntities = function () {
        if (this.isSelected()) {
            return [this];
        }
        return [];
    };
    BaseModel.prototype.deSerialize = function (ob, engine) {
        _super.prototype.deSerialize.call(this, ob, engine);
        this.type = ob.type;
        this.selected = ob.selected;
    };
    BaseModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            type: this.type,
            selected: this.selected
        });
    };
    BaseModel.prototype.getType = function () {
        return this.type;
    };
    BaseModel.prototype.getID = function () {
        return this.id;
    };
    BaseModel.prototype.isSelected = function () {
        return this.selected;
    };
    BaseModel.prototype.setSelected = function (selected) {
        if (selected === void 0) { selected = true; }
        this.selected = selected;
        this.iterateListeners(function (listener, event) {
            if (listener.selectionChanged) {
                listener.selectionChanged(__assign({}, event, { isSelected: selected }));
            }
        });
    };
    BaseModel.prototype.remove = function () {
        this.iterateListeners(function (listener, event) {
            if (listener.entityRemoved) {
                listener.entityRemoved(event);
            }
        });
    };
    return BaseModel;
}(BaseEntity_1.BaseEntity));
exports.BaseModel = BaseModel;


/***/ }),

/***/ "./src/models/DiagramModel.ts":
/*!************************************!*\
  !*** ./src/models/DiagramModel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity_1 = __webpack_require__(/*! ../BaseEntity */ "./src/BaseEntity.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var LinkModel_1 = __webpack_require__(/*! ./LinkModel */ "./src/models/LinkModel.ts");
var NodeModel_1 = __webpack_require__(/*! ./NodeModel */ "./src/models/NodeModel.ts");
var PortModel_1 = __webpack_require__(/*! ./PortModel */ "./src/models/PortModel.ts");
var PointModel_1 = __webpack_require__(/*! ./PointModel */ "./src/models/PointModel.ts");
/**
 *
 */
var DiagramModel = /** @class */ (function (_super) {
    __extends(DiagramModel, _super);
    function DiagramModel() {
        var _this = _super.call(this) || this;
        _this.links = {};
        _this.nodes = {};
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.zoom = 100;
        _this.rendered = false;
        _this.gridSize = 0;
        return _this;
    }
    DiagramModel.prototype.setGridSize = function (size) {
        if (size === void 0) { size = 0; }
        this.gridSize = size;
        this.iterateListeners(function (listener, event) {
            if (listener.gridUpdated) {
                listener.gridUpdated(__assign({}, event, { size: size }));
            }
        });
    };
    DiagramModel.prototype.getGridPosition = function (pos) {
        if (this.gridSize === 0) {
            return pos;
        }
        return this.gridSize * Math.floor((pos + this.gridSize / 2) / this.gridSize);
    };
    DiagramModel.prototype.deSerializeDiagram = function (object, diagramEngine) {
        var _this = this;
        this.deSerialize(object, diagramEngine);
        this.offsetX = object.offsetX;
        this.offsetY = object.offsetY;
        this.zoom = object.zoom;
        this.gridSize = object.gridSize;
        // deserialize nodes
        _.forEach(object.nodes, function (node) {
            var nodeOb = diagramEngine.getNodeFactory(node.type).getNewInstance(node);
            nodeOb.setParent(_this);
            nodeOb.deSerialize(node, diagramEngine);
            _this.addNode(nodeOb);
        });
        // deserialze links
        _.forEach(object.links, function (link) {
            var linkOb = diagramEngine.getLinkFactory(link.type).getNewInstance();
            linkOb.setParent(_this);
            linkOb.deSerialize(link, diagramEngine);
            _this.addLink(linkOb);
        });
    };
    DiagramModel.prototype.serializeDiagram = function () {
        return _.merge(this.serialize(), {
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            zoom: this.zoom,
            gridSize: this.gridSize,
            links: _.map(this.links, function (link) {
                return link.serialize();
            }),
            nodes: _.map(this.nodes, function (node) {
                return node.serialize();
            })
        });
    };
    DiagramModel.prototype.clearSelection = function (ignore) {
        if (ignore === void 0) { ignore = null; }
        _.forEach(this.getSelectedItems(), function (element) {
            if (ignore && ignore.getID() === element.getID()) {
                return;
            }
            element.setSelected(false); //TODO dont fire the listener
        });
    };
    DiagramModel.prototype.getSelectedItems = function () {
        var filters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filters[_i] = arguments[_i];
        }
        if (!Array.isArray(filters)) {
            filters = [filters];
        }
        var items = [];
        // run through nodes
        items = items.concat(_.flatMap(this.nodes, function (node) {
            return node.getSelectedEntities();
        }));
        // find all the links
        items = items.concat(_.flatMap(this.links, function (link) {
            return link.getSelectedEntities();
        }));
        //find all points
        items = items.concat(_.flatMap(this.links, function (link) {
            return _.flatMap(link.points, function (point) {
                return point.getSelectedEntities();
            });
        }));
        items = _.uniq(items);
        if (filters.length > 0) {
            items = _.filter(_.uniq(items), function (item) {
                if (_.includes(filters, "node") && item instanceof NodeModel_1.NodeModel) {
                    return true;
                }
                if (_.includes(filters, "link") && item instanceof LinkModel_1.LinkModel) {
                    return true;
                }
                if (_.includes(filters, "port") && item instanceof PortModel_1.PortModel) {
                    return true;
                }
                if (_.includes(filters, "point") && item instanceof PointModel_1.PointModel) {
                    return true;
                }
                return false;
            });
        }
        return items;
    };
    DiagramModel.prototype.setZoomLevel = function (zoom) {
        this.zoom = zoom;
        this.iterateListeners(function (listener, event) {
            if (listener.zoomUpdated) {
                listener.zoomUpdated(__assign({}, event, { zoom: zoom }));
            }
        });
    };
    DiagramModel.prototype.setOffset = function (offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.iterateListeners(function (listener, event) {
            if (listener.offsetUpdated) {
                listener.offsetUpdated(__assign({}, event, { offsetX: offsetX, offsetY: offsetY }));
            }
        });
    };
    DiagramModel.prototype.setOffsetX = function (offsetX) {
        var _this = this;
        this.offsetX = offsetX;
        this.iterateListeners(function (listener, event) {
            if (listener.offsetUpdated) {
                listener.offsetUpdated(__assign({}, event, { offsetX: offsetX, offsetY: _this.offsetY }));
            }
        });
    };
    DiagramModel.prototype.setOffsetY = function (offsetY) {
        var _this = this;
        this.offsetY = offsetY;
        this.iterateListeners(function (listener, event) {
            if (listener.offsetUpdated) {
                listener.offsetUpdated(__assign({}, event, { offsetX: _this.offsetX, offsetY: _this.offsetY }));
            }
        });
    };
    DiagramModel.prototype.getOffsetY = function () {
        return this.offsetY;
    };
    DiagramModel.prototype.getOffsetX = function () {
        return this.offsetX;
    };
    DiagramModel.prototype.getZoomLevel = function () {
        return this.zoom;
    };
    DiagramModel.prototype.getNode = function (node) {
        if (node instanceof NodeModel_1.NodeModel) {
            return node;
        }
        if (!this.nodes[node]) {
            return null;
        }
        return this.nodes[node];
    };
    DiagramModel.prototype.getLink = function (link) {
        if (link instanceof LinkModel_1.LinkModel) {
            return link;
        }
        if (!this.links[link]) {
            return null;
        }
        return this.links[link];
    };
    DiagramModel.prototype.addAll = function () {
        var _this = this;
        var models = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            models[_i] = arguments[_i];
        }
        _.forEach(models, function (model) {
            if (model instanceof LinkModel_1.LinkModel) {
                _this.addLink(model);
            }
            else if (model instanceof NodeModel_1.NodeModel) {
                _this.addNode(model);
            }
        });
        return models;
    };
    DiagramModel.prototype.addLink = function (link) {
        var _this = this;
        link.addListener({
            entityRemoved: function () {
                _this.removeLink(link);
            }
        });
        this.links[link.getID()] = link;
        this.iterateListeners(function (listener, event) {
            if (listener.linksUpdated) {
                listener.linksUpdated(__assign({}, event, { link: link, isCreated: true }));
            }
        });
        return link;
    };
    DiagramModel.prototype.addNode = function (node) {
        var _this = this;
        node.addListener({
            entityRemoved: function () {
                _this.removeNode(node);
            }
        });
        this.nodes[node.getID()] = node;
        this.iterateListeners(function (listener, event) {
            if (listener.nodesUpdated) {
                listener.nodesUpdated(__assign({}, event, { node: node, isCreated: true }));
            }
        });
        return node;
    };
    DiagramModel.prototype.removeLink = function (link) {
        link = this.getLink(link);
        delete this.links[link.getID()];
        this.iterateListeners(function (listener, event) {
            if (listener.linksUpdated) {
                listener.linksUpdated(__assign({}, event, { link: link, isCreated: false }));
            }
        });
    };
    DiagramModel.prototype.removeNode = function (node) {
        node = this.getNode(node);
        delete this.nodes[node.getID()];
        this.iterateListeners(function (listener, event) {
            if (listener.nodesUpdated) {
                listener.nodesUpdated(__assign({}, event, { node: node, isCreated: false }));
            }
        });
    };
    DiagramModel.prototype.getLinks = function () {
        return this.links;
    };
    DiagramModel.prototype.getNodes = function () {
        return this.nodes;
    };
    return DiagramModel;
}(BaseEntity_1.BaseEntity));
exports.DiagramModel = DiagramModel;


/***/ }),

/***/ "./src/models/LabelModel.ts":
/*!**********************************!*\
  !*** ./src/models/LabelModel.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var LabelModel = /** @class */ (function (_super) {
    __extends(LabelModel, _super);
    function LabelModel(type, id) {
        var _this = _super.call(this, type, id) || this;
        _this.offsetX = 0;
        _this.offsetY = 0;
        return _this;
    }
    LabelModel.prototype.deSerialize = function (ob, engine) {
        _super.prototype.deSerialize.call(this, ob, engine);
        this.offsetX = ob.offsetX;
        this.offsetY = ob.offsetY;
    };
    LabelModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            offsetX: this.offsetX,
            offsetY: this.offsetY
        });
    };
    return LabelModel;
}(BaseModel_1.BaseModel));
exports.LabelModel = LabelModel;


/***/ }),

/***/ "./src/models/LinkModel.ts":
/*!*********************************!*\
  !*** ./src/models/LinkModel.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.ts");
var PointModel_1 = __webpack_require__(/*! ./PointModel */ "./src/models/PointModel.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var LinkModel = /** @class */ (function (_super) {
    __extends(LinkModel, _super);
    function LinkModel(linkType, id) {
        if (linkType === void 0) { linkType = "default"; }
        var _this = _super.call(this, linkType, id) || this;
        _this.points = [new PointModel_1.PointModel(_this, { x: 0, y: 0 }), new PointModel_1.PointModel(_this, { x: 0, y: 0 })];
        _this.extras = {};
        _this.sourcePort = null;
        _this.targetPort = null;
        _this.labels = [];
        return _this;
    }
    LinkModel.prototype.deSerialize = function (ob, engine) {
        var _this = this;
        _super.prototype.deSerialize.call(this, ob, engine);
        this.extras = ob.extras;
        this.points = _.map(ob.points || [], function (point) {
            var p = new PointModel_1.PointModel(_this, { x: point.x, y: point.y });
            p.deSerialize(point, engine);
            return p;
        });
        //deserialize labels
        _.forEach(ob.labels || [], function (label) {
            var labelOb = engine.getLabelFactory(label.type).getNewInstance();
            labelOb.deSerialize(label, engine);
            _this.addLabel(labelOb);
        });
        if (ob.target) {
            this.setTargetPort(this.getParent()
                .getNode(ob.target)
                .getPortFromID(ob.targetPort));
        }
        if (ob.source) {
            this.setSourcePort(this.getParent()
                .getNode(ob.source)
                .getPortFromID(ob.sourcePort));
        }
    };
    LinkModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            source: this.sourcePort ? this.sourcePort.getParent().id : null,
            sourcePort: this.sourcePort ? this.sourcePort.id : null,
            target: this.targetPort ? this.targetPort.getParent().id : null,
            targetPort: this.targetPort ? this.targetPort.id : null,
            points: _.map(this.points, function (point) {
                return point.serialize();
            }),
            extras: this.extras,
            labels: _.map(this.labels, function (label) {
                return label.serialize();
            })
        });
    };
    LinkModel.prototype.doClone = function (lookupTable, clone) {
        if (lookupTable === void 0) { lookupTable = {}; }
        clone.setPoints(_.map(this.getPoints(), function (point) {
            return point.clone(lookupTable);
        }));
        if (this.sourcePort) {
            clone.setSourcePort(this.sourcePort.clone(lookupTable));
        }
        if (this.targetPort) {
            clone.setTargetPort(this.targetPort.clone(lookupTable));
        }
    };
    LinkModel.prototype.remove = function () {
        if (this.sourcePort) {
            this.sourcePort.removeLink(this);
        }
        if (this.targetPort) {
            this.targetPort.removeLink(this);
        }
        _super.prototype.remove.call(this);
    };
    LinkModel.prototype.isLastPoint = function (point) {
        var index = this.getPointIndex(point);
        return index === this.points.length - 1;
    };
    LinkModel.prototype.getPointIndex = function (point) {
        return this.points.indexOf(point);
    };
    LinkModel.prototype.getPointModel = function (id) {
        for (var i = 0; i < this.points.length; i++) {
            if (this.points[i].id === id) {
                return this.points[i];
            }
        }
        return null;
    };
    LinkModel.prototype.getPortForPoint = function (point) {
        if (this.sourcePort !== null && this.getFirstPoint().getID() === point.getID()) {
            return this.sourcePort;
        }
        if (this.targetPort !== null && this.getLastPoint().getID() === point.getID()) {
            return this.targetPort;
        }
        return null;
    };
    LinkModel.prototype.getPointForPort = function (port) {
        if (this.sourcePort !== null && this.sourcePort.getID() === port.getID()) {
            return this.getFirstPoint();
        }
        if (this.targetPort !== null && this.targetPort.getID() === port.getID()) {
            return this.getLastPoint();
        }
        return null;
    };
    LinkModel.prototype.getFirstPoint = function () {
        return this.points[0];
    };
    LinkModel.prototype.getLastPoint = function () {
        return this.points[this.points.length - 1];
    };
    LinkModel.prototype.setSourcePort = function (port) {
        if (port !== null) {
            port.addLink(this);
        }
        if (this.sourcePort !== null) {
            this.sourcePort.removeLink(this);
        }
        this.sourcePort = port;
        this.iterateListeners(function (listener, event) {
            if (listener.sourcePortChanged) {
                listener.sourcePortChanged(__assign({}, event, { port: port }));
            }
        });
    };
    LinkModel.prototype.getSourcePort = function () {
        return this.sourcePort;
    };
    LinkModel.prototype.getTargetPort = function () {
        return this.targetPort;
    };
    LinkModel.prototype.setTargetPort = function (port) {
        if (port !== null) {
            port.addLink(this);
        }
        if (this.targetPort !== null) {
            this.targetPort.removeLink(this);
        }
        this.targetPort = port;
        this.iterateListeners(function (listener, event) {
            if (listener.targetPortChanged) {
                listener.targetPortChanged(__assign({}, event, { port: port }));
            }
        });
    };
    LinkModel.prototype.point = function (x, y) {
        return this.addPoint(this.generatePoint(x, y));
    };
    LinkModel.prototype.addLabel = function (label) {
        label.setParent(this);
        this.labels.push(label);
    };
    LinkModel.prototype.getPoints = function () {
        return this.points;
    };
    LinkModel.prototype.setPoints = function (points) {
        var _this = this;
        _.forEach(points, function (point) {
            point.setParent(_this);
        });
        this.points = points;
    };
    LinkModel.prototype.removePoint = function (pointModel) {
        this.points.splice(this.getPointIndex(pointModel), 1);
    };
    LinkModel.prototype.removePointsBefore = function (pointModel) {
        this.points.splice(0, this.getPointIndex(pointModel));
    };
    LinkModel.prototype.removePointsAfter = function (pointModel) {
        this.points.splice(this.getPointIndex(pointModel) + 1);
    };
    LinkModel.prototype.removeMiddlePoints = function () {
        if (this.points.length > 2) {
            this.points.splice(0, this.points.length - 2);
        }
    };
    LinkModel.prototype.addPoint = function (pointModel, index) {
        if (index === void 0) { index = 1; }
        pointModel.setParent(this);
        this.points.splice(index, 0, pointModel);
        return pointModel;
    };
    LinkModel.prototype.generatePoint = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return new PointModel_1.PointModel(this, { x: x, y: y });
    };
    return LinkModel;
}(BaseModel_1.BaseModel));
exports.LinkModel = LinkModel;


/***/ }),

/***/ "./src/models/NodeModel.ts":
/*!*********************************!*\
  !*** ./src/models/NodeModel.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var NodeModel = /** @class */ (function (_super) {
    __extends(NodeModel, _super);
    function NodeModel(nodeType, id) {
        if (nodeType === void 0) { nodeType = "default"; }
        var _this = _super.call(this, nodeType, id) || this;
        _this.x = 0;
        _this.y = 0;
        _this.extras = {};
        _this.ports = {};
        return _this;
    }
    NodeModel.prototype.setPosition = function (x, y) {
        //store position
        var oldX = this.x;
        var oldY = this.y;
        _.forEach(this.ports, function (port) {
            _.forEach(port.getLinks(), function (link) {
                var point = link.getPointForPort(port);
                point.x = point.x + x - oldX;
                point.y = point.y + y - oldY;
            });
        });
        this.x = x;
        this.y = y;
    };
    NodeModel.prototype.getSelectedEntities = function () {
        var entities = _super.prototype.getSelectedEntities.call(this);
        // add the points of each link that are selected here
        if (this.isSelected()) {
            _.forEach(this.ports, function (port) {
                entities = entities.concat(_.map(port.getLinks(), function (link) {
                    return link.getPointForPort(port);
                }));
            });
        }
        return entities;
    };
    NodeModel.prototype.deSerialize = function (ob, engine) {
        var _this = this;
        _super.prototype.deSerialize.call(this, ob, engine);
        this.x = ob.x;
        this.y = ob.y;
        this.extras = ob.extras;
        //deserialize ports
        _.forEach(ob.ports, function (port) {
            var portOb = engine.getPortFactory(port.type).getNewInstance();
            portOb.deSerialize(port, engine);
            _this.addPort(portOb);
        });
    };
    NodeModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            x: this.x,
            y: this.y,
            extras: this.extras,
            ports: _.map(this.ports, function (port) {
                return port.serialize();
            })
        });
    };
    NodeModel.prototype.doClone = function (lookupTable, clone) {
        if (lookupTable === void 0) { lookupTable = {}; }
        // also clone the ports
        clone.ports = {};
        _.forEach(this.ports, function (port) {
            clone.addPort(port.clone(lookupTable));
        });
    };
    NodeModel.prototype.remove = function () {
        _super.prototype.remove.call(this);
        _.forEach(this.ports, function (port) {
            _.forEach(port.getLinks(), function (link) {
                link.remove();
            });
        });
    };
    NodeModel.prototype.getPortFromID = function (id) {
        for (var i in this.ports) {
            if (this.ports[i].id === id) {
                return this.ports[i];
            }
        }
        return null;
    };
    NodeModel.prototype.getPort = function (name) {
        return this.ports[name];
    };
    NodeModel.prototype.getPorts = function () {
        return this.ports;
    };
    NodeModel.prototype.removePort = function (port) {
        //clear the parent node reference
        if (this.ports[port.name]) {
            this.ports[port.name].setParent(null);
            delete this.ports[port.name];
        }
    };
    NodeModel.prototype.addPort = function (port) {
        port.setParent(this);
        this.ports[port.name] = port;
        return port;
    };
    NodeModel.prototype.updateDimensions = function (_a) {
        var width = _a.width, height = _a.height;
        this.width = width;
        this.height = height;
    };
    return NodeModel;
}(BaseModel_1.BaseModel));
exports.NodeModel = NodeModel;


/***/ }),

/***/ "./src/models/PointModel.ts":
/*!**********************************!*\
  !*** ./src/models/PointModel.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var PointModel = /** @class */ (function (_super) {
    __extends(PointModel, _super);
    function PointModel(link, points) {
        var _this = _super.call(this) || this;
        _this.x = points.x;
        _this.y = points.y;
        _this.parent = link;
        return _this;
    }
    PointModel.prototype.getSelectedEntities = function () {
        if (_super.prototype.isSelected.call(this) && !this.isConnectedToPort()) {
            return [this];
        }
        return [];
    };
    PointModel.prototype.isConnectedToPort = function () {
        return this.parent.getPortForPoint(this) !== null;
    };
    PointModel.prototype.getLink = function () {
        return this.getParent();
    };
    PointModel.prototype.deSerialize = function (ob, engine) {
        _super.prototype.deSerialize.call(this, ob, engine);
        this.x = ob.x;
        this.y = ob.y;
    };
    PointModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            x: this.x,
            y: this.y
        });
    };
    PointModel.prototype.remove = function () {
        //clear references
        if (this.parent) {
            this.parent.removePoint(this);
        }
        _super.prototype.remove.call(this);
    };
    PointModel.prototype.updateLocation = function (points) {
        this.x = points.x;
        this.y = points.y;
    };
    PointModel.prototype.getX = function () {
        return this.x;
    };
    PointModel.prototype.getY = function () {
        return this.y;
    };
    PointModel.prototype.isLocked = function () {
        return _super.prototype.isLocked.call(this) || this.getParent().isLocked();
    };
    return PointModel;
}(BaseModel_1.BaseModel));
exports.PointModel = PointModel;


/***/ }),

/***/ "./src/models/PortModel.ts":
/*!*********************************!*\
  !*** ./src/models/PortModel.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.ts");
var _ = __webpack_require__(/*! lodash */ "lodash");
var PortModel = /** @class */ (function (_super) {
    __extends(PortModel, _super);
    function PortModel(name, type, id, maximumLinks) {
        var _this = _super.call(this, type, id) || this;
        _this.name = name;
        _this.links = {};
        _this.maximumLinks = maximumLinks;
        return _this;
    }
    PortModel.prototype.deSerialize = function (ob, engine) {
        _super.prototype.deSerialize.call(this, ob, engine);
        this.name = ob.name;
        this.maximumLinks = ob.maximumLinks;
    };
    PortModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            name: this.name,
            parentNode: this.parent.id,
            links: _.map(this.links, function (link) {
                return link.id;
            }),
            maximumLinks: this.maximumLinks
        });
    };
    PortModel.prototype.doClone = function (lookupTable, clone) {
        if (lookupTable === void 0) { lookupTable = {}; }
        clone.links = {};
        clone.parentNode = this.getParent().clone(lookupTable);
    };
    PortModel.prototype.getNode = function () {
        return this.getParent();
    };
    PortModel.prototype.getName = function () {
        return this.name;
    };
    PortModel.prototype.getMaximumLinks = function () {
        return this.maximumLinks;
    };
    PortModel.prototype.setMaximumLinks = function (maximumLinks) {
        this.maximumLinks = maximumLinks;
    };
    PortModel.prototype.removeLink = function (link) {
        delete this.links[link.getID()];
    };
    PortModel.prototype.addLink = function (link) {
        this.links[link.getID()] = link;
    };
    PortModel.prototype.getLinks = function () {
        return this.links;
    };
    PortModel.prototype.createLinkModel = function () {
        if (_.isFinite(this.maximumLinks)) {
            var numberOfLinks = _.size(this.links);
            if (this.maximumLinks === 1 && numberOfLinks >= 1) {
                return _.values(this.links)[0];
            }
            else if (numberOfLinks >= this.maximumLinks) {
                return null;
            }
        }
        return null;
    };
    PortModel.prototype.updateCoords = function (_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };
    PortModel.prototype.canLinkToPort = function (port) {
        return true;
    };
    PortModel.prototype.isLocked = function () {
        return _super.prototype.isLocked.call(this) || this.getParent().isLocked();
    };
    return PortModel;
}(BaseModel_1.BaseModel));
exports.PortModel = PortModel;


/***/ }),

/***/ "./src/routing/PathFinding.ts":
/*!************************************!*\
  !*** ./src/routing/PathFinding.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PF = __webpack_require__(/*! pathfinding */ "./node_modules/pathfinding/index.js");
/*
it can be very expensive to calculate routes when every single pixel on the canvas
is individually represented. Using the factor below, we combine values in order
to achieve the best trade-off between accuracy and performance.
*/
exports.ROUTING_SCALING_FACTOR = 5;
var pathFinderInstance = new PF.JumpPointFinder({
    heuristic: PF.Heuristic.manhattan,
    diagonalMovement: PF.DiagonalMovement.Never
});
var PathFinding = /** @class */ (function () {
    function PathFinding(diagramEngine) {
        this.instance = pathFinderInstance;
        this.diagramEngine = diagramEngine;
    }
    /**
     * Taking as argument a fully unblocked walking matrix, this method
     * finds a direct path from point A to B.
     */
    PathFinding.prototype.calculateDirectPath = function (from, to) {
        var matrix = this.diagramEngine.getCanvasMatrix();
        var grid = new PF.Grid(matrix);
        return pathFinderInstance.findPath(this.diagramEngine.translateRoutingX(Math.floor(from.x / exports.ROUTING_SCALING_FACTOR)), this.diagramEngine.translateRoutingY(Math.floor(from.y / exports.ROUTING_SCALING_FACTOR)), this.diagramEngine.translateRoutingX(Math.floor(to.x / exports.ROUTING_SCALING_FACTOR)), this.diagramEngine.translateRoutingY(Math.floor(to.y / exports.ROUTING_SCALING_FACTOR)), grid);
    };
    /**
     * Using @link{#calculateDirectPath}'s result as input, we here
     * determine the first walkable point found in the matrix that includes
     * blocked paths.
     */
    PathFinding.prototype.calculateLinkStartEndCoords = function (matrix, path) {
        var startIndex = path.findIndex(function (point) { return matrix[point[1]][point[0]] === 0; });
        var endIndex = path.length -
            1 -
            path
                .slice()
                .reverse()
                .findIndex(function (point) { return matrix[point[1]][point[0]] === 0; });
        // are we trying to create a path exclusively through blocked areas?
        // if so, let's fallback to the linear routing
        if (startIndex === -1 || endIndex === -1) {
            return undefined;
        }
        var pathToStart = path.slice(0, startIndex);
        var pathToEnd = path.slice(endIndex);
        return {
            start: {
                x: path[startIndex][0],
                y: path[startIndex][1]
            },
            end: {
                x: path[endIndex][0],
                y: path[endIndex][1]
            },
            pathToStart: pathToStart,
            pathToEnd: pathToEnd
        };
    };
    /**
     * Puts everything together: merges the paths from/to the centre of the ports,
     * with the path calculated around other elements.
     */
    PathFinding.prototype.calculateDynamicPath = function (routingMatrix, start, end, pathToStart, pathToEnd) {
        var _this = this;
        // generate the path based on the matrix with obstacles
        var grid = new PF.Grid(routingMatrix);
        var dynamicPath = pathFinderInstance.findPath(start.x, start.y, end.x, end.y, grid);
        // aggregate everything to have the calculated path ready for rendering
        var pathCoords = pathToStart
            .concat(dynamicPath, pathToEnd)
            .map(function (coords) { return [
            _this.diagramEngine.translateRoutingX(coords[0], true),
            _this.diagramEngine.translateRoutingY(coords[1], true)
        ]; });
        return PF.Util.compressPath(pathCoords);
    };
    return PathFinding;
}());
exports.default = PathFinding;


/***/ }),

/***/ "./src/widgets/BaseWidget.tsx":
/*!************************************!*\
  !*** ./src/widgets/BaseWidget.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var BaseWidget = /** @class */ (function (_super) {
    __extends(BaseWidget, _super);
    function BaseWidget(name, props) {
        var _this = _super.call(this, props) || this;
        _this.className = name;
        return _this;
    }
    BaseWidget.prototype.bem = function (selector) {
        return (this.props.baseClass || this.className) + selector + " ";
    };
    BaseWidget.prototype.getClassName = function () {
        return ((this.props.baseClass || this.className) + " " + (this.props.className ? this.props.className + " " : ""));
    };
    BaseWidget.prototype.getProps = function () {
        return __assign({}, (this.props.extraProps || {}), { className: this.getClassName() });
    };
    return BaseWidget;
}(React.Component));
exports.BaseWidget = BaseWidget;


/***/ }),

/***/ "./src/widgets/DiagramWidget.tsx":
/*!***************************************!*\
  !*** ./src/widgets/DiagramWidget.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var _ = __webpack_require__(/*! lodash */ "lodash");
var LinkLayerWidget_1 = __webpack_require__(/*! ./layers/LinkLayerWidget */ "./src/widgets/layers/LinkLayerWidget.tsx");
var NodeLayerWidget_1 = __webpack_require__(/*! ./layers/NodeLayerWidget */ "./src/widgets/layers/NodeLayerWidget.tsx");
var Toolkit_1 = __webpack_require__(/*! ../Toolkit */ "./src/Toolkit.ts");
var MoveCanvasAction_1 = __webpack_require__(/*! ../actions/MoveCanvasAction */ "./src/actions/MoveCanvasAction.ts");
var MoveItemsAction_1 = __webpack_require__(/*! ../actions/MoveItemsAction */ "./src/actions/MoveItemsAction.ts");
var SelectingAction_1 = __webpack_require__(/*! ../actions/SelectingAction */ "./src/actions/SelectingAction.ts");
var NodeModel_1 = __webpack_require__(/*! ../models/NodeModel */ "./src/models/NodeModel.ts");
var PointModel_1 = __webpack_require__(/*! ../models/PointModel */ "./src/models/PointModel.ts");
var PortModel_1 = __webpack_require__(/*! ../models/PortModel */ "./src/models/PortModel.ts");
var BaseWidget_1 = __webpack_require__(/*! ./BaseWidget */ "./src/widgets/BaseWidget.tsx");
/**
 * @author Dylan Vorster
 */
var DiagramWidget = /** @class */ (function (_super) {
    __extends(DiagramWidget, _super);
    function DiagramWidget(props) {
        var _this = _super.call(this, "srd-diagram", props) || this;
        _this.onKeyUpPointer = null;
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.state = {
            listenWheel: false,
            action: null,
            wasMoved: false,
            renderedNodes: false,
            windowListener: null,
            diagramEngineListener: null,
            document: null
        };
        return _this;
    }
    DiagramWidget.prototype.componentWillUnmount = function () {
        this.props.diagramEngine.removeListener(this.state.diagramEngineListener);
        this.props.diagramEngine.setCanvas(null);
        window.removeEventListener("keyup", this.onKeyUpPointer);
        window.removeEventListener("mouseUp", this.onMouseUp);
        window.removeEventListener("mouseMove", this.onMouseMove);
    };
    DiagramWidget.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.props.diagramEngine !== nextProps.diagramEngine) {
            this.props.diagramEngine.removeListener(this.state.diagramEngineListener);
            var diagramEngineListener = nextProps.diagramEngine.addListener({
                repaintCanvas: function () { return _this.forceUpdate(); }
            });
            this.setState({ diagramEngineListener: diagramEngineListener });
        }
    };
    DiagramWidget.prototype.componentWillUpdate = function (nextProps) {
        if (this.props.diagramEngine.diagramModel.id !== nextProps.diagramEngine.diagramModel.id) {
            this.setState({ renderedNodes: false });
            nextProps.diagramEngine.diagramModel.rendered = true;
        }
        if (!nextProps.diagramEngine.diagramModel.rendered) {
            this.setState({ renderedNodes: false });
            nextProps.diagramEngine.diagramModel.rendered = true;
        }
    };
    DiagramWidget.prototype.componentDidUpdate = function () {
        if (!this.state.renderedNodes) {
            this.setState({
                renderedNodes: true
            });
        }
    };
    DiagramWidget.prototype.componentDidMount = function () {
        var _this = this;
        this.onKeyUpPointer = this.onKeyUp.bind(this);
        //add a keyboard listener
        this.setState({
            document: document,
            renderedNodes: true,
            diagramEngineListener: this.props.diagramEngine.addListener({
                repaintCanvas: function () {
                    _this.forceUpdate();
                }
            })
        });
        window.addEventListener("keyup", this.onKeyUpPointer, false);
        // dont focus the window when in test mode - jsdom fails
        if (true) {
            window.focus();
        }
    };
    /**
     * Gets a model and element under the mouse cursor
     */
    DiagramWidget.prototype.getMouseElement = function (event) {
        var target = event.target;
        var diagramModel = this.props.diagramEngine.diagramModel;
        //is it a port
        var element = Toolkit_1.Toolkit.closest(target, ".port[data-name]");
        if (element) {
            var nodeElement = Toolkit_1.Toolkit.closest(target, ".node[data-nodeid]");
            return {
                model: diagramModel
                    .getNode(nodeElement.getAttribute("data-nodeid"))
                    .getPort(element.getAttribute("data-name")),
                element: element
            };
        }
        //look for a point
        element = Toolkit_1.Toolkit.closest(target, ".point[data-id]");
        if (element) {
            return {
                model: diagramModel
                    .getLink(element.getAttribute("data-linkid"))
                    .getPointModel(element.getAttribute("data-id")),
                element: element
            };
        }
        //look for a link
        element = Toolkit_1.Toolkit.closest(target, "[data-linkid]");
        if (element) {
            return {
                model: diagramModel.getLink(element.getAttribute("data-linkid")),
                element: element
            };
        }
        //look for a node
        element = Toolkit_1.Toolkit.closest(target, ".node[data-nodeid]");
        if (element) {
            return {
                model: diagramModel.getNode(element.getAttribute("data-nodeid")),
                element: element
            };
        }
        return null;
    };
    DiagramWidget.prototype.fireAction = function () {
        if (this.state.action && this.props.actionStillFiring) {
            this.props.actionStillFiring(this.state.action);
        }
    };
    DiagramWidget.prototype.stopFiringAction = function (shouldSkipEvent) {
        if (this.props.actionStoppedFiring && !shouldSkipEvent) {
            this.props.actionStoppedFiring(this.state.action);
        }
        this.setState({ action: null });
    };
    DiagramWidget.prototype.startFiringAction = function (action) {
        var setState = true;
        if (this.props.actionStartedFiring) {
            setState = this.props.actionStartedFiring(action);
        }
        if (setState) {
            this.setState({ action: action });
        }
    };
    DiagramWidget.prototype.onMouseMove = function (event) {
        var _this = this;
        var diagramEngine = this.props.diagramEngine;
        var diagramModel = diagramEngine.getDiagramModel();
        //select items so draw a bounding box
        if (this.state.action instanceof SelectingAction_1.SelectingAction) {
            var relative = diagramEngine.getRelativePoint(event.clientX, event.clientY);
            _.forEach(diagramModel.getNodes(), function (node) {
                if (_this.state.action.containsElement(node.x, node.y, diagramModel)) {
                    node.setSelected(true);
                }
            });
            _.forEach(diagramModel.getLinks(), function (link) {
                var allSelected = true;
                _.forEach(link.points, function (point) {
                    if (_this.state.action.containsElement(point.x, point.y, diagramModel)) {
                        point.setSelected(true);
                    }
                    else {
                        allSelected = false;
                    }
                });
                if (allSelected) {
                    link.setSelected(true);
                }
            });
            this.state.action.mouseX2 = relative.x;
            this.state.action.mouseY2 = relative.y;
            this.fireAction();
            this.setState({ action: this.state.action });
            return;
        }
        else if (this.state.action instanceof MoveItemsAction_1.MoveItemsAction) {
            var amountX_1 = event.clientX - this.state.action.mouseX;
            var amountY_1 = event.clientY - this.state.action.mouseY;
            var amountZoom_1 = diagramModel.getZoomLevel() / 100;
            _.forEach(this.state.action.selectionModels, function (model) {
                // in this case we need to also work out the relative grid position
                if (model.model instanceof NodeModel_1.NodeModel ||
                    (model.model instanceof PointModel_1.PointModel && !model.model.isConnectedToPort())) {
                    model.model.x = diagramModel.getGridPosition(model.initialX + amountX_1 / amountZoom_1);
                    model.model.y = diagramModel.getGridPosition(model.initialY + amountY_1 / amountZoom_1);
                    // update port coordinates as well
                    if (model.model instanceof NodeModel_1.NodeModel) {
                        _.forEach(model.model.getPorts(), function (port) {
                            var portCoords = _this.props.diagramEngine.getPortCoords(port);
                            port.updateCoords(portCoords);
                        });
                    }
                    if (diagramEngine.isSmartRoutingEnabled()) {
                        diagramEngine.calculateRoutingMatrix();
                    }
                }
                else if (model.model instanceof PointModel_1.PointModel) {
                    // we want points that are connected to ports, to not necessarily snap to grid
                    // this stuff needs to be pixel perfect, dont touch it
                    model.model.x = model.initialX + diagramModel.getGridPosition(amountX_1 / amountZoom_1);
                    model.model.y = model.initialY + diagramModel.getGridPosition(amountY_1 / amountZoom_1);
                }
            });
            if (diagramEngine.isSmartRoutingEnabled()) {
                diagramEngine.calculateCanvasMatrix();
            }
            this.fireAction();
            if (!this.state.wasMoved) {
                this.setState({ wasMoved: true });
            }
            else {
                this.forceUpdate();
            }
        }
        else if (this.state.action instanceof MoveCanvasAction_1.MoveCanvasAction) {
            //translate the actual canvas
            if (this.props.allowCanvasTranslation) {
                diagramModel.setOffset(this.state.action.initialOffsetX + (event.clientX - this.state.action.mouseX), this.state.action.initialOffsetY + (event.clientY - this.state.action.mouseY));
                this.fireAction();
                this.forceUpdate();
            }
        }
    };
    DiagramWidget.prototype.onKeyUp = function (event) {
        var _this = this;
        //delete all selected
        if (this.props.deleteKeys.indexOf(event.keyCode) !== -1) {
            _.forEach(this.props.diagramEngine.getDiagramModel().getSelectedItems(), function (element) {
                //only delete items which are not locked
                if (!_this.props.diagramEngine.isModelLocked(element)) {
                    element.remove();
                }
            });
            this.forceUpdate();
        }
    };
    DiagramWidget.prototype.onMouseUp = function (event) {
        var _this = this;
        var diagramEngine = this.props.diagramEngine;
        //are we going to connect a link to something?
        if (this.state.action instanceof MoveItemsAction_1.MoveItemsAction) {
            var element = this.getMouseElement(event);
            _.forEach(this.state.action.selectionModels, function (model) {
                //only care about points connecting to things
                if (!(model.model instanceof PointModel_1.PointModel)) {
                    return;
                }
                if (element && element.model instanceof PortModel_1.PortModel && !diagramEngine.isModelLocked(element.model)) {
                    var link = model.model.getLink();
                    if (link.getTargetPort() !== null) {
                        //if this was a valid link already and we are adding a node in the middle, create 2 links from the original
                        if (link.getTargetPort() !== element.model && link.getSourcePort() !== element.model) {
                            var targetPort = link.getTargetPort();
                            var newLink = link.clone({});
                            newLink.setSourcePort(element.model);
                            newLink.setTargetPort(targetPort);
                            link.setTargetPort(element.model);
                            targetPort.removeLink(link);
                            newLink.removePointsBefore(newLink.getPoints()[link.getPointIndex(model.model)]);
                            link.removePointsAfter(model.model);
                            diagramEngine.getDiagramModel().addLink(newLink);
                            //if we are connecting to the same target or source, remove tweener points
                        }
                        else if (link.getTargetPort() === element.model) {
                            link.removePointsAfter(model.model);
                        }
                        else if (link.getSourcePort() === element.model) {
                            link.removePointsBefore(model.model);
                        }
                    }
                    else {
                        link.setTargetPort(element.model);
                    }
                    delete _this.props.diagramEngine.linksThatHaveInitiallyRendered[link.getID()];
                }
            });
            //check for / remove any loose links in any models which have been moved
            if (!this.props.allowLooseLinks && this.state.wasMoved) {
                _.forEach(this.state.action.selectionModels, function (model) {
                    //only care about points connecting to things
                    if (!(model.model instanceof PointModel_1.PointModel)) {
                        return;
                    }
                    var selectedPoint = model.model;
                    var link = selectedPoint.getLink();
                    if (link.getSourcePort() === null || link.getTargetPort() === null) {
                        link.remove();
                    }
                });
            }
            //remove any invalid links
            _.forEach(this.state.action.selectionModels, function (model) {
                //only care about points connecting to things
                if (!(model.model instanceof PointModel_1.PointModel)) {
                    return;
                }
                var link = model.model.getLink();
                var sourcePort = link.getSourcePort();
                var targetPort = link.getTargetPort();
                if (sourcePort !== null && targetPort !== null) {
                    if (!sourcePort.canLinkToPort(targetPort)) {
                        //link not allowed
                        link.remove();
                    }
                    else if (_.some(_.values(targetPort.getLinks()), function (l) {
                        return l !== link && (l.getSourcePort() === sourcePort || l.getTargetPort() === sourcePort);
                    })) {
                        //link is a duplicate
                        link.remove();
                    }
                }
            });
            diagramEngine.clearRepaintEntities();
            this.stopFiringAction(!this.state.wasMoved);
        }
        else {
            diagramEngine.clearRepaintEntities();
            this.stopFiringAction();
        }
        this.state.document.removeEventListener("mousemove", this.onMouseMove);
        this.state.document.removeEventListener("mouseup", this.onMouseUp);
    };
    DiagramWidget.prototype.drawSelectionBox = function () {
        var dimensions = this.state.action.getBoxDimensions();
        return (React.createElement("div", { className: this.bem("__selector"), style: {
                top: dimensions.top,
                left: dimensions.left,
                width: dimensions.width,
                height: dimensions.height
            } }));
    };
    DiagramWidget.prototype.render = function () {
        var _this = this;
        var diagramEngine = this.props.diagramEngine;
        diagramEngine.setMaxNumberPointsPerLink(this.props.maxNumberPointsPerLink);
        diagramEngine.setSmartRoutingStatus(this.props.smartRouting);
        var diagramModel = diagramEngine.getDiagramModel();
        return (React.createElement("div", __assign({}, this.getProps(), { ref: function (ref) {
                if (ref) {
                    _this.props.diagramEngine.setCanvas(ref);
                    !_this.state.listenWheel && ref.addEventListener('mousewheel', function (event) {
                        if (_this.props.allowCanvasZoom) {
                            event.preventDefault();
                            event.stopPropagation();
                            var oldZoomFactor = diagramModel.getZoomLevel() / 100;
                            var scrollDelta = _this.props.inverseZoom ? -event.deltaY : event.deltaY;
                            //check if it is pinch gesture
                            if (event.ctrlKey && scrollDelta % 1 !== 0) {
                                /*Chrome and Firefox sends wheel event with deltaY that
                    have fractional part, also `ctrlKey` prop of the event is true
                    though ctrl isn't pressed
                  */
                                scrollDelta /= 3;
                            }
                            else {
                                scrollDelta /= 60;
                            }
                            if (diagramModel.getZoomLevel() + scrollDelta > 0) {
                                diagramModel.setZoomLevel(diagramModel.getZoomLevel() + scrollDelta);
                            }
                            var zoomFactor = diagramModel.getZoomLevel() / 100;
                            var boundingRect = event.currentTarget.getBoundingClientRect();
                            var clientWidth = boundingRect.width;
                            var clientHeight = boundingRect.height;
                            // compute difference between rect before and after scroll
                            var widthDiff = clientWidth * zoomFactor - clientWidth * oldZoomFactor;
                            var heightDiff = clientHeight * zoomFactor - clientHeight * oldZoomFactor;
                            // compute mouse coords relative to canvas
                            var clientX = event.clientX - boundingRect.left;
                            var clientY = event.clientY - boundingRect.top;
                            // compute width and height increment factor
                            var xFactor = (clientX - diagramModel.getOffsetX()) / oldZoomFactor / clientWidth;
                            var yFactor = (clientY - diagramModel.getOffsetY()) / oldZoomFactor / clientHeight;
                            diagramModel.setOffset(diagramModel.getOffsetX() - widthDiff * xFactor, diagramModel.getOffsetY() - heightDiff * yFactor);
                            diagramEngine.enableRepaintEntities([]);
                            _this.forceUpdate();
                        }
                    }, { passive: false });
                    _this.setState({ listenWheel: true });
                    // this.state.listenWheel = true;
                }
            }, 
            // 	onWheel={event => {
            // 		if (this.props.allowCanvasZoom) {
            // 			event.preventDefault();
            // 			event.stopPropagation();
            // 			const oldZoomFactor = diagramModel.getZoomLevel() / 100;
            // 			let scrollDelta = this.props.inverseZoom ? -event.deltaY : event.deltaY;
            // 			//check if it is pinch gesture
            // 			if (event.ctrlKey && scrollDelta % 1 !== 0) {
            // 				/*Chrome and Firefox sends wheel event with deltaY that
            //     have fractional part, also `ctrlKey` prop of the event is true
            //     though ctrl isn't pressed
            //   */
            // 				scrollDelta /= 3;
            // 			} else {
            // 				scrollDelta /= 60;
            //             }
            // 			if (diagramModel.getZoomLevel() + scrollDelta > 0) {
            // 				diagramModel.setZoomLevel(diagramModel.getZoomLevel() + scrollDelta);
            // 			}
            // 			const zoomFactor = diagramModel.getZoomLevel() / 100;
            // 			const boundingRect = event.currentTarget.getBoundingClientRect();
            // 			const clientWidth = boundingRect.width;
            // 			const clientHeight = boundingRect.height;
            // 			// compute difference between rect before and after scroll
            // 			const widthDiff = clientWidth * zoomFactor - clientWidth * oldZoomFactor;
            // 			const heightDiff = clientHeight * zoomFactor - clientHeight * oldZoomFactor;
            // 			// compute mouse coords relative to canvas
            // 			const clientX = event.clientX - boundingRect.left;
            // 			const clientY = event.clientY - boundingRect.top;
            // 			// compute width and height increment factor
            // 			const xFactor = (clientX - diagramModel.getOffsetX()) / oldZoomFactor / clientWidth;
            // 			const yFactor = (clientY - diagramModel.getOffsetY()) / oldZoomFactor / clientHeight;
            // 			diagramModel.setOffset(
            // 				diagramModel.getOffsetX() - widthDiff * xFactor,
            // 				diagramModel.getOffsetY() - heightDiff * yFactor
            // 			);
            // 			diagramEngine.enableRepaintEntities([]);
            // 			this.forceUpdate();
            // 		}
            // 	}}
            onMouseDown: function (event) {
                _this.setState(__assign({}, _this.state, { wasMoved: false }));
                diagramEngine.clearRepaintEntities();
                var model = _this.getMouseElement(event);
                //the canvas was selected
                if (model === null) {
                    //is it a multiple selection
                    if (event.shiftKey) {
                        var relative = diagramEngine.getRelativePoint(event.clientX, event.clientY);
                        _this.startFiringAction(new SelectingAction_1.SelectingAction(relative.x, relative.y));
                    }
                    else {
                        //its a drag the canvas event
                        diagramModel.clearSelection();
                        _this.startFiringAction(new MoveCanvasAction_1.MoveCanvasAction(event.clientX, event.clientY, diagramModel));
                    }
                }
                else if (model.model instanceof PortModel_1.PortModel) {
                    //its a port element, we want to drag a link
                    if (!_this.props.diagramEngine.isModelLocked(model.model)) {
                        var relative = diagramEngine.getRelativeMousePoint(event);
                        var sourcePort = model.model;
                        var link = sourcePort.createLinkModel();
                        link.setSourcePort(sourcePort);
                        if (link) {
                            link.removeMiddlePoints();
                            if (link.getSourcePort() !== sourcePort) {
                                link.setSourcePort(sourcePort);
                            }
                            link.setTargetPort(null);
                            link.getFirstPoint().updateLocation(relative);
                            link.getLastPoint().updateLocation(relative);
                            diagramModel.clearSelection();
                            link.getLastPoint().setSelected(true);
                            diagramModel.addLink(link);
                            _this.startFiringAction(new MoveItemsAction_1.MoveItemsAction(event.clientX, event.clientY, diagramEngine));
                        }
                    }
                    else {
                        diagramModel.clearSelection();
                    }
                }
                else {
                    //its some or other element, probably want to move it
                    if (!event.shiftKey && !model.model.isSelected()) {
                        diagramModel.clearSelection();
                    }
                    model.model.setSelected(true);
                    _this.startFiringAction(new MoveItemsAction_1.MoveItemsAction(event.clientX, event.clientY, diagramEngine));
                }
                _this.state.document.addEventListener("mousemove", _this.onMouseMove);
                _this.state.document.addEventListener("mouseup", _this.onMouseUp);
            } }),
            this.state.renderedNodes && (React.createElement(LinkLayerWidget_1.LinkLayerWidget, { diagramEngine: diagramEngine, pointAdded: function (point, event) {
                    _this.state.document.addEventListener("mousemove", _this.onMouseMove);
                    _this.state.document.addEventListener("mouseup", _this.onMouseUp);
                    event.stopPropagation();
                    diagramModel.clearSelection(point);
                    _this.setState({
                        action: new MoveItemsAction_1.MoveItemsAction(event.clientX, event.clientY, diagramEngine)
                    });
                } })),
            React.createElement(NodeLayerWidget_1.NodeLayerWidget, { diagramEngine: diagramEngine }),
            this.state.action instanceof SelectingAction_1.SelectingAction && this.drawSelectionBox()));
    };
    DiagramWidget.defaultProps = {
        diagramEngine: null,
        allowLooseLinks: true,
        allowCanvasTranslation: true,
        allowCanvasZoom: true,
        inverseZoom: false,
        maxNumberPointsPerLink: Infinity,
        smartRouting: false,
        deleteKeys: [46, 8]
    };
    return DiagramWidget;
}(BaseWidget_1.BaseWidget));
exports.DiagramWidget = DiagramWidget;


/***/ }),

/***/ "./src/widgets/LinkWidget.tsx":
/*!************************************!*\
  !*** ./src/widgets/LinkWidget.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseWidget_1 = __webpack_require__(/*! ./BaseWidget */ "./src/widgets/BaseWidget.tsx");
/**
 * @author Dylan Vorster
 */
var LinkWidget = /** @class */ (function (_super) {
    __extends(LinkWidget, _super);
    function LinkWidget(props) {
        var _this = _super.call(this, "srd-link", props) || this;
        _this.state = {};
        return _this;
    }
    LinkWidget.prototype.shouldComponentUpdate = function () {
        return this.props.diagramEngine.canEntityRepaint(this.props.link);
    };
    LinkWidget.prototype.render = function () {
        return this.props.children;
    };
    return LinkWidget;
}(BaseWidget_1.BaseWidget));
exports.LinkWidget = LinkWidget;


/***/ }),

/***/ "./src/widgets/NodeWidget.tsx":
/*!************************************!*\
  !*** ./src/widgets/NodeWidget.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var BaseWidget_1 = __webpack_require__(/*! ./BaseWidget */ "./src/widgets/BaseWidget.tsx");
/**
 * @author Dylan Vorster
 */
var NodeWidget = /** @class */ (function (_super) {
    __extends(NodeWidget, _super);
    function NodeWidget(props) {
        var _this = _super.call(this, "srd-node", props) || this;
        _this.state = {};
        return _this;
    }
    NodeWidget.prototype.shouldComponentUpdate = function () {
        return this.props.diagramEngine.canEntityRepaint(this.props.node);
    };
    NodeWidget.prototype.getClassName = function () {
        return "node " + _super.prototype.getClassName.call(this) + (this.props.node.isSelected() ? this.bem("--selected") : "");
    };
    NodeWidget.prototype.render = function () {
        return (React.createElement("div", __assign({}, this.getProps(), { "data-nodeid": this.props.node.id, style: {
                top: this.props.node.y,
                left: this.props.node.x
            } }), this.props.children));
    };
    return NodeWidget;
}(BaseWidget_1.BaseWidget));
exports.NodeWidget = NodeWidget;


/***/ }),

/***/ "./src/widgets/PortWidget.tsx":
/*!************************************!*\
  !*** ./src/widgets/PortWidget.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var BaseWidget_1 = __webpack_require__(/*! ./BaseWidget */ "./src/widgets/BaseWidget.tsx");
/**
 * @author Dylan Vorster
 */
var PortWidget = /** @class */ (function (_super) {
    __extends(PortWidget, _super);
    function PortWidget(props) {
        var _this = _super.call(this, "srd-port", props) || this;
        _this.state = {
            selected: false
        };
        return _this;
    }
    PortWidget.prototype.getClassName = function () {
        return "port " + _super.prototype.getClassName.call(this) + (this.state.selected ? this.bem("--selected") : "");
    };
    PortWidget.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", __assign({}, this.getProps(), { onMouseEnter: function () {
                _this.setState({ selected: true });
            }, onMouseLeave: function () {
                _this.setState({ selected: false });
            }, "data-name": this.props.name, "data-nodeid": this.props.node.getID() })));
    };
    return PortWidget;
}(BaseWidget_1.BaseWidget));
exports.PortWidget = PortWidget;


/***/ }),

/***/ "./src/widgets/layers/LinkLayerWidget.tsx":
/*!************************************************!*\
  !*** ./src/widgets/layers/LinkLayerWidget.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var LinkWidget_1 = __webpack_require__(/*! ../LinkWidget */ "./src/widgets/LinkWidget.tsx");
var _ = __webpack_require__(/*! lodash */ "lodash");
var BaseWidget_1 = __webpack_require__(/*! ../BaseWidget */ "./src/widgets/BaseWidget.tsx");
/**
 * @author Dylan Vorster
 */
var LinkLayerWidget = /** @class */ (function (_super) {
    __extends(LinkLayerWidget, _super);
    function LinkLayerWidget(props) {
        var _this = _super.call(this, "srd-link-layer", props) || this;
        _this.state = {};
        return _this;
    }
    LinkLayerWidget.prototype.render = function () {
        var _this = this;
        var diagramModel = this.props.diagramEngine.getDiagramModel();
        return (React.createElement("svg", __assign({}, this.getProps(), { style: {
                transform: "translate(" +
                    diagramModel.getOffsetX() +
                    "px," +
                    diagramModel.getOffsetY() +
                    "px) scale(" +
                    diagramModel.getZoomLevel() / 100.0 +
                    ")"
            } }), //only perform these actions when we have a diagram
        this.props.diagramEngine.canvas &&
            _.map(diagramModel.getLinks(), function (link) {
                if (_this.props.diagramEngine.nodesRendered &&
                    !_this.props.diagramEngine.linksThatHaveInitiallyRendered[link.id]) {
                    if (link.sourcePort !== null) {
                        try {
                            var portCenter = _this.props.diagramEngine.getPortCenter(link.sourcePort);
                            link.points[0].updateLocation(portCenter);
                            var portCoords = _this.props.diagramEngine.getPortCoords(link.sourcePort);
                            link.sourcePort.updateCoords(portCoords);
                            _this.props.diagramEngine.linksThatHaveInitiallyRendered[link.id] = true;
                        }
                        catch (ignore) {
                            /*noop*/
                        }
                    }
                    if (link.targetPort !== null) {
                        try {
                            var portCenter = _this.props.diagramEngine.getPortCenter(link.targetPort);
                            _.last(link.points).updateLocation(portCenter);
                            var portCoords = _this.props.diagramEngine.getPortCoords(link.targetPort);
                            link.targetPort.updateCoords(portCoords);
                            _this.props.diagramEngine.linksThatHaveInitiallyRendered[link.id] = true;
                        }
                        catch (ignore) {
                            /*noop*/
                        }
                    }
                }
                //generate links
                var generatedLink = _this.props.diagramEngine.generateWidgetForLink(link);
                if (!generatedLink) {
                    throw new Error("no link generated for type: " + link.getType());
                }
                return (React.createElement(LinkWidget_1.LinkWidget, { key: link.getID(), link: link, diagramEngine: _this.props.diagramEngine }, React.cloneElement(generatedLink, {
                    pointAdded: _this.props.pointAdded
                })));
            })));
    };
    return LinkLayerWidget;
}(BaseWidget_1.BaseWidget));
exports.LinkLayerWidget = LinkLayerWidget;


/***/ }),

/***/ "./src/widgets/layers/NodeLayerWidget.tsx":
/*!************************************************!*\
  !*** ./src/widgets/layers/NodeLayerWidget.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var _ = __webpack_require__(/*! lodash */ "lodash");
var NodeWidget_1 = __webpack_require__(/*! ../NodeWidget */ "./src/widgets/NodeWidget.tsx");
var BaseWidget_1 = __webpack_require__(/*! ../BaseWidget */ "./src/widgets/BaseWidget.tsx");
var NodeLayerWidget = /** @class */ (function (_super) {
    __extends(NodeLayerWidget, _super);
    function NodeLayerWidget(props) {
        var _this = _super.call(this, "srd-node-layer", props) || this;
        _this.updateNodeDimensions = function () {
            if (!_this.props.diagramEngine.nodesRendered) {
                var diagramModel = _this.props.diagramEngine.getDiagramModel();
                _.map(diagramModel.getNodes(), function (node) {
                    node.updateDimensions(_this.props.diagramEngine.getNodeDimensions(node));
                });
            }
        };
        _this.state = {};
        return _this;
    }
    NodeLayerWidget.prototype.componentDidUpdate = function () {
        this.updateNodeDimensions();
        this.props.diagramEngine.nodesRendered = true;
    };
    NodeLayerWidget.prototype.render = function () {
        var _this = this;
        var diagramModel = this.props.diagramEngine.getDiagramModel();
        return (React.createElement("div", __assign({}, this.getProps(), { style: {
                transform: "translate(" +
                    diagramModel.getOffsetX() +
                    "px," +
                    diagramModel.getOffsetY() +
                    "px) scale(" +
                    diagramModel.getZoomLevel() / 100.0 +
                    ")"
            } }), _.map(diagramModel.getNodes(), function (node) {
            return React.createElement(NodeWidget_1.NodeWidget, {
                diagramEngine: _this.props.diagramEngine,
                key: node.id,
                node: node
            }, _this.props.diagramEngine.generateWidgetForNode(node));
        })));
    };
    return NodeLayerWidget;
}(BaseWidget_1.BaseWidget));
exports.NodeLayerWidget = NodeLayerWidget;


/***/ }),

/***/ "lodash":
/*!********************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"_","root":"_"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map