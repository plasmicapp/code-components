import * as ReactWeb from '@plasmicapp/react-web';
import { setPlumeStrictMode } from '@plasmicapp/react-web';
import * as mobx from 'mobx';
import { observable } from 'mobx';
import * as mobxReactLite from 'mobx-react-lite';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useEffect, createElement, Component } from 'react';
import * as ReactDOM from 'react-dom';
import * as slate from 'slate';
import * as slateReact from 'slate-react';
import ResizeObserver from 'resize-observer-polyfill';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function isString(x) {
  return typeof x === "string";
}
function ensure(x, msg) {
  if (msg === void 0) {
    msg = "";
  }

  if (x === null || x === undefined) {
    debugger;
    msg = (isString(msg) ? msg : msg()) || "";
    throw new Error("Value must not be undefined or null" + (msg ? "- " + msg : ""));
  } else {
    return x;
  }
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var _marked4 = /*#__PURE__*/runtime_1.mark(traverseGenerator);

/*
from https://github.com/bendtherules/react-fiber-traverse

The MIT License (MIT)

Copyright (c) 2019-present bendtherules <abhasbhattacharya2@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

/**
 * Traverse nodes recursively using generators.
 *
 * This is the advanced traverse function, which can be used used
 * to write other variants of traversal and find.
 *
 * Type signature for generator.next first argument is `{ skipChild?: boolean; skipSibling?: boolean } | void `
 * Throw any error into the generator to finish the generator and let it cleanup its internals.
 *
 * It allows inversion of control -
 * so, application code can decide to
 * 1. change order of traversal,
 * 2. skip some elements,
 * 3. cancel traversal mid-way.
 *
 * @example
 * ```js
 * // Basic use (for-of)
 *
 * const nodeIterator = traverseGenerator(rootNode);
 * for (const node of nodeIterator) {
 *  // do something with each node here
 * }
 * ```
 * ------
 *
 * @example
 * ```js
 * // Breadth-first
 *
 * // note the order below
 * const nodeIterator = traverseGenerator(rootNode, ["self", "sibling", "child"]);
 * // rest - same as above
 * ```
 * -----
 *
 * @example
 * ```js
 * // Get first 3 nodes and then stop the generator
 *
 * const nodeIterator = traverseGenerator(rootNode);
 *
 * var count = 0;
 * var next;
 * while (
 *    count < 3 &&
 *    !(next = nodeIterator.next()).done
 * ) {
 *    count++;
 *    const node = next.value;
 *    // do something with each node here
 * }
 *
 * // Finish generator, to prevent memory leak
 * nodeIterator.throw(new Error());
 * ```
 * -----
 *
 */
function traverseGenerator(node, _temp) {
  var _marked, _marked2, _marked3, _ref, _ref$order, order, _ref$skipSiblingForSt, skipSiblingForStartNode, _ref$skipSelfForStart, skipSelfForStartNode, skipChild, skipSibling, skipSelf, traverseSelf, traverseChild, traverseSibling, traverseMap, orderedGenerators, _iterator, _step, eachGen;

  return runtime_1.wrap(function traverseGenerator$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          traverseSibling = function _traverseSibling() {
            var nextNode;
            return runtime_1.wrap(function traverseSibling$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(!skipSibling && node.sibling !== null)) {
                      _context3.next = 3;
                      break;
                    }

                    nextNode = node.sibling;
                    return _context3.delegateYield(traverseGenerator(nextNode, {
                      order: order,
                      skipSiblingForStartNode: false,
                      skipSelfForStartNode: false
                    }), "t0", 3);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _marked3);
          };

          traverseChild = function _traverseChild() {
            var nextNode;
            return runtime_1.wrap(function traverseChild$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(!skipChild && node.child !== null)) {
                      _context2.next = 3;
                      break;
                    }

                    nextNode = node.child;
                    return _context2.delegateYield(traverseGenerator(nextNode, {
                      order: order,
                      skipSiblingForStartNode: false,
                      skipSelfForStartNode: false
                    }), "t0", 3);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _marked2);
          };

          traverseSelf = function _traverseSelf() {
            var controlInput, _controlInput$skipChi, _controlInput$skipSib;

            return runtime_1.wrap(function traverseSelf$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (skipSelf) {
                      _context.next = 5;
                      break;
                    }

                    _context.next = 3;
                    return node;

                  case 3:
                    controlInput = _context.sent;

                    if (controlInput !== undefined) {
                      _controlInput$skipChi = controlInput.skipChild;
                      skipChild = _controlInput$skipChi === void 0 ? skipChild : _controlInput$skipChi;
                      _controlInput$skipSib = controlInput.skipSibling;
                      skipSibling = _controlInput$skipSib === void 0 ? skipSibling : _controlInput$skipSib;
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _marked);
          };

          _marked = /*#__PURE__*/runtime_1.mark(traverseSelf), _marked2 = /*#__PURE__*/runtime_1.mark(traverseChild), _marked3 = /*#__PURE__*/runtime_1.mark(traverseSibling);
          _ref = _temp === void 0 ? {} : _temp, _ref$order = _ref.order, order = _ref$order === void 0 ? ["self", "child", "sibling"] : _ref$order, _ref$skipSiblingForSt = _ref.skipSiblingForStartNode, skipSiblingForStartNode = _ref$skipSiblingForSt === void 0 ? true : _ref$skipSiblingForSt, _ref$skipSelfForStart = _ref.skipSelfForStartNode, skipSelfForStartNode = _ref$skipSelfForStart === void 0 ? false : _ref$skipSelfForStart;
          skipChild = false, skipSibling = skipSiblingForStartNode, skipSelf = skipSelfForStartNode;
          traverseMap = {
            self: traverseSelf,
            child: traverseChild,
            sibling: traverseSibling
          }; // For each item mentioned in order, find generator functions to run

          orderedGenerators = order.map(function (step) {
            return traverseMap[step];
          }).filter(function (tmp) {
            return tmp !== undefined;
          }); // Now run each generator till end

          _iterator = _createForOfIteratorHelperLoose(orderedGenerators);

        case 9:
          if ((_step = _iterator()).done) {
            _context4.next = 14;
            break;
          }

          eachGen = _step.value;
          return _context4.delegateYield(eachGen(), "t0", 12);

        case 12:
          _context4.next = 9;
          break;

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Traverse nodes recursively in depth-first manner, starting from a start node.
 *
 * This is the default and basic traversal function, which covers basic use cases.
 * You can't do advanced things like change the order of traversal, skip or cancel traversal after any node, etc.
 * For more advanced usecases, see {@link traverseGenerator}
 *
 * @example
 * ```js
 * // calls fn for each node inside startNode
 * traverse(startNode, fn);
 * ```
 *
 */


function traverse(node, fn, traverseConfig) {
  var nodeIterator = traverseGenerator(node, traverseConfig);

  for (var _iterator2 = _createForOfIteratorHelperLoose(nodeIterator), _step2; !(_step2 = _iterator2()).done;) {
    var tmpNode = _step2.value;
    fn.call(null, tmpNode);
  }
}

var root = /*#__PURE__*/require("window-or-global");

var searchParams = /*#__PURE__*/function () {
  try {
    var _window, _window$parent;

    return new URLSearchParams(location.search || new URL(location.toString().replace(/#/, "?")).searchParams.get("searchParams") || ((_window = window) == null ? void 0 : (_window$parent = _window.parent) == null ? void 0 : _window$parent.location.search) || "");
  } catch (_unused) {
    return new URLSearchParams();
  }
}(); // For now we only use our hook when enabling code components as it might
// impact performance


var codeComponents = /*#__PURE__*/searchParams.get("codeComponents") === "true";
var officialHook = root.__REACT_DEVTOOLS_GLOBAL_HOOK__;

if (codeComponents) {
  ensure(officialHook); // Return true if this is a canvas frame's tree.
  // Performs a BFS and checks if any of the first 30 nodes contain the
  // "frameInfo" property.
  // Right now we rely on one of the first elements in the tree passing a prop
  // with this name. It's not the first element in the React tree because
  // it's below some React context providers for example.
  // It's important to filter canvas frames to avoid performance regressions.

  var isCanvasFrame = function isCanvasFrame(rootNode) {
    var nodeIterator = traverseGenerator(rootNode, {
      order: ["self", "sibling", "child"]
    });
    var count = 0;
    var next; // Get first 30 nodes and then stop the generator

    while (count < 30 && !(next = nodeIterator.next()).done) {
      count++;
      var node = next.value;

      if ([].concat(Object.keys(node.pendingProps || {}), Object.keys(node.memoizedProps || {})).includes("frameInfo")) {
        return true;
      }
    } // Finish generator, to prevent memory leak


    nodeIterator["return"] == null ? void 0 : nodeIterator["return"]();
    return false;
  };

  if (!officialHook.plasmic) {
    var officialHookProps = /*#__PURE__*/_extends({}, officialHook);

    var valNodeData = "data-plasmic-valnode";
    officialHook.plasmic = {
      uidToFiber: /*#__PURE__*/new Map(),
      startedEvalCount: 0,
      finishedEvalCount: 0
    }; // To avoid unnecessary traversals, we keep track of the number of evals
    // that started before the current root commit, and the number of finished
    // evals before the last time a react tree has been traversed. This way,
    // we won't miss any change that happended during eval (so we will traverse
    // on every commit between eval starts and eval finishes) but won't traverse
    // on changes that didn't happen in the eval phase to avoid performance
    // regressions.

    var lastSynced = 0;

    var tryGetValNodeUid = function tryGetValNodeUid(node) {
      var hasValNodeData = function hasValNodeData(v) {
        return typeof v === "object" && v !== null && valNodeData in v;
      };

      if (hasValNodeData(node.memoizedProps)) {
        return +node.memoizedProps[valNodeData];
      }

      if (hasValNodeData(node.pendingProps)) {
        return +node.pendingProps[valNodeData];
      }

      return undefined;
    };

    var customHookProps = {
      onCommitFiberRoot: function onCommitFiberRoot(rendererID, fiberRoot, priorityLevel) {
        if (lastSynced < officialHook.plasmic.startedEvalCount) {
          var rootNode = fiberRoot.current; // We only need to traverse canvas frames

          if (isCanvasFrame(rootNode)) {
            traverse(rootNode, function (node) {
              var valNodeUid = tryGetValNodeUid(node);

              if (valNodeUid) {
                officialHook.plasmic.uidToFiber.set(valNodeUid, node);
              }
            }, {
              // If several nodes receive the data props, we want the root to
              // overwrite them, so it should be the last one to be visited.
              order: ["child", "sibling", "self"]
            });
            lastSynced = officialHook.plasmic.finishedEvalCount;
          }
        }

        officialHookProps.onCommitFiberRoot(rendererID, fiberRoot, priorityLevel);
      }
    };

    for (var _i = 0, _Object$entries = /*#__PURE__*/Object.entries(customHookProps); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      // only transfer functions
      if (typeof value == "function") {
        officialHook[key] = value;
      }
    }
  }
}

var globalHookCtx = (officialHook == null ? void 0 : officialHook.plasmic) || {
  uidToFiber: /*#__PURE__*/new Map(),
  startedEvalCount: 0,
  finishedEvalCount: 0
};

var root$1 = /*#__PURE__*/require("window-or-global");

root$1.__PlasmicHostVersion = "1";
root$1.__PlasmicComponentRegistry = [];
root$1.__PlasmicFetcherRegistry = [];
function registerComponent(component, meta) {
  root$1.__PlasmicComponentRegistry.push({
    component: component,
    meta: meta
  });
}
function registerFetcher(fetcher, meta) {
  root$1.__PlasmicFetcherRegistry.push({
    fetcher: fetcher,
    meta: meta
  });
}
var plasmicRootNode = /*#__PURE__*/observable.box(null, {
  deep: false
});
root$1.__Sub = {
  React: React,
  ReactDOM: ReactDOM,
  ReactWeb: ReactWeb,
  ResizeObserver: ResizeObserver,
  mobx: mobx,
  mobxReactLite: mobxReactLite,
  slate: slate,
  slateReact: slateReact,
  localObject: Object,
  localElement: typeof window !== "undefined" ? Element : undefined,
  globalHookCtx: globalHookCtx,
  setPlasmicRootNode: setPlasmicRootNode,
  registerRenderErrorListener: registerRenderErrorListener
};

function getPlasmicOrigin() {
  var params = new URL("https://fakeurl/" + location.hash.replace(/#/, "?")).searchParams;
  return ensure(params.get("origin"));
}

function renderStudioIntoIframe() {
  var script = document.createElement("script");
  var plasmicOrigin = getPlasmicOrigin();
  script.src = plasmicOrigin + "/static/js/studio.js";
  document.body.appendChild(script);
}

var renderCount = 0;

function setPlasmicRootNode(node) {
  // Keep track of renderCount, which we use as key to ErrorBoundary, so
  // we can reset the error on each render
  renderCount++;
  plasmicRootNode.set(node);
}

var PlasmicCanvasHost = /*#__PURE__*/observer(function PlasmicCanvasHost() {
  // If window.parent is null, then this is a window whose containing iframe
  // has been detached from the DOM (for the top window, window.parent === window).
  // In that case, we shouldn't do anything.  If window.parent is null, by the way,
  // location.hash will also be null.
  var isFrameAttached = !!window.parent;
  var shouldRenderStudio = isFrameAttached && !document.querySelector("#plasmic-studio-tag") && !location.hash.match(/\bcanvas=true\b/) && !location.hash.match(/\blive=true\b/);
  useEffect(function () {
    if (shouldRenderStudio && isFrameAttached) {
      renderStudioIntoIframe();
    }
  }, [shouldRenderStudio, isFrameAttached]);
  useEffect(function () {
    if (!shouldRenderStudio && !document.querySelector("#getlibs") && location.hash.match(/\blive=true\b/)) {
      var scriptElt = document.createElement("script");
      scriptElt.id = "getlibs";
      scriptElt.src = getPlasmicOrigin() + "/static/js/getlibs.js";
      scriptElt.async = false;

      scriptElt.onload = function () {
        window.__GetlibsReadyResolver == null ? void 0 : window.__GetlibsReadyResolver();
      };

      document.head.append(scriptElt);
    }
  }, [shouldRenderStudio]);

  if (!isFrameAttached) {
    return null;
  }

  if (shouldRenderStudio) {
    return null;
  }

  return createElement("div", {
    id: "app",
    className: "__wab_user-body"
  }, createElement(ErrorBoundary, {
    key: "" + renderCount
  }, plasmicRootNode.get()));
});
var renderErrorListeners = [];

function registerRenderErrorListener(listener) {
  renderErrorListeners.push(listener);
  return function () {
    var index = renderErrorListeners.indexOf(listener);

    if (index >= 0) {
      renderErrorListeners.splice(index, 1);
    }
  };
}

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  ErrorBoundary.getDerivedStateFromError = function getDerivedStateFromError(error) {
    return {
      error: error
    };
  };

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidCatch = function componentDidCatch(error) {
    renderErrorListeners.forEach(function (listener) {
      return listener(error);
    });
  };

  _proto.render = function render() {
    if (this.state.error) {
      return createElement("div", null, "Error: ", "" + this.state.error.message);
    } else {
      return this.props.children;
    }
  };

  return ErrorBoundary;
}(Component);

setPlumeStrictMode(false);

export { PlasmicCanvasHost, registerComponent, registerFetcher };
//# sourceMappingURL=host.esm.js.map
