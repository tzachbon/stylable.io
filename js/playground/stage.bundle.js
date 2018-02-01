/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	(function(){
/******/ 	    if (typeof document !== 'undefined') {
/******/ 	        var style = document.getElementById("stage.css");
/******/ 	        if(!style){
/******/ 	            style = document.createElement('style');
/******/ 	            style.id = "stage.css";
/******/ 	            document.head.appendChild(style);
/******/ 	        }
/******/ 	        style.textContent = "";
/******/ 	    }
/******/ 	    return ;
/******/ 	}())
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 915);
/******/ })
/************************************************************************/
/******/ ({

/***/ 455:
/*!******************************!*\
  !*** ./src/module-system.ts ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst eventemitter3_1 = __webpack_require__(/*! eventemitter3 */ 90);\nexports.ModuleSystemEvents = {\n    RELOAD: 'reload'\n};\nclass ModuleSystem {\n    constructor(rabbit, targetScope = 'window') {\n        this.rabbit = rabbit;\n        this.targetScope = targetScope;\n        this.loadedModules = {};\n        this.events = new eventemitter3_1.EventEmitter();\n        this.reload = async (changedFiles) => {\n            let needsReload = new Set();\n            Object.keys(changedFiles).forEach(path => {\n                if (this.loadedModules[path]) {\n                    needsReload.add(path);\n                }\n            });\n            const needsNewResolutionMap = !!Array.from(needsReload.values()).filter((updatedFile) => changedFiles[updatedFile]).find((updatedFile) => {\n                return !!(Object.values(changedFiles[updatedFile]).find((dependency) => {\n                    return !this.loadedModules[dependency];\n                }));\n            });\n            if (needsNewResolutionMap) {\n                this.loadedModules = {};\n                return this.resolveAndRender();\n            }\n            needsReload.forEach(path => {\n                this.getDependants(path, needsReload);\n            });\n            if (needsReload.size) {\n                const fetchMap = {};\n                needsReload.forEach(path => {\n                    delete this.loadedModules[path];\n                    fetchMap[path] = this.rabbit.generateCompiledCode(path);\n                });\n                const m = await this.evalModule(this.renderedModule, this.resolutionMap, fetchMap);\n                console.log('re-rendered');\n                this.events.emit(exports.ModuleSystemEvents.RELOAD, {\n                    rootReloaded: true,\n                    reloadedModules: needsReload\n                });\n            }\n        };\n    }\n    async require(modulePath) {\n        this.renderedModule = modulePath;\n        // resetRootModule();\n        // this.rabbit.init(this.reload);\n        return this.resolveAndRender();\n    }\n    async resolveAndRender() {\n        this.resolutionMap = await this.rabbit.generateResolutionMap(this.renderedModule);\n        this.reversedResolutionMap = this.createReverseMap(this.resolutionMap);\n        const fetchMap = this.fetchModuleWithDeps(this.renderedModule, this.resolutionMap);\n        return await this.evalModule(this.renderedModule, this.resolutionMap, fetchMap);\n    }\n    getDependants(path, dependants) {\n        let moduleDeps = [];\n        if (this.reversedResolutionMap[path]) {\n            Object.values(this.reversedResolutionMap[path]).forEach((path) => {\n                dependants.add(path);\n            });\n            if (moduleDeps.length) {\n                moduleDeps.forEach(dependant => this.getDependants(dependant, dependants));\n            }\n        }\n        ;\n        return dependants;\n    }\n    createReverseMap(map) {\n        const res = {};\n        Object.keys(map).forEach(importer => {\n            const imports = map[importer];\n            if (imports) {\n                Object.keys(imports).forEach(imported => {\n                    res[imports[imported]] = res[imports[imported]] || {};\n                    res[imports[imported]][importer] = importer;\n                });\n            }\n        });\n        return res;\n    }\n    async evalModule(fileName, importsMap, fetchMap) {\n        if (!this.loadedModules[fileName]) {\n            const moduleImports = this.getModuleImports(fileName, importsMap);\n            // wait for all dependencies to load before proceeding\n            if (moduleImports !== null) {\n                for (let importFileName of Object.values(moduleImports)) {\n                    await this.evalModule(importFileName, importsMap, fetchMap);\n                }\n            }\n            // wait for the fetching of this module's code\n            const moduleCode = await fetchMap[fileName];\n            if (fileName.endsWith('.json')) {\n                // json-loader\n                this.loadedModules[fileName] = JSON.parse(moduleCode);\n            }\n            else {\n                // js loader\n                const require = (importName) => {\n                    return moduleImports && this.loadedModules[moduleImports[importName]];\n                };\n                const process = { env: {}, argv: [] };\n                try {\n                    const moduleCtx = { exports: {}, id: fileName, filename: fileName };\n                    const win = this.targetScope === 'window' ? ', window' : '';\n                    // we use eval instead of function constructor because function constructor offsets the line numbers, invalidating source maps\n                    eval(`(function(exports, require, module, __filename, __dirname, process, global){${moduleCode}\\n})(moduleCtx.exports, require, moduleCtx, moduleCtx.filename, '', process ${win});`);\n                    this.loadedModules[fileName] = moduleCtx.exports;\n                }\n                catch (e) {\n                    console.error(e);\n                    this.loadedModules[fileName] = `error loading ${fileName}`;\n                }\n            }\n        }\n        return this.loadedModules[fileName];\n    }\n    fetchModuleWithDeps(fileName, importsMap, fetchMap = {}) {\n        if (!fetchMap[fileName]) {\n            fetchMap[fileName] = this.rabbit.generateCompiledCode(fileName);\n            const moduleImports = this.getModuleImports(fileName, importsMap);\n            if (moduleImports !== null) {\n                for (let importFileName of Object.values(moduleImports)) {\n                    if (!fetchMap[importFileName]) {\n                        this.fetchModuleWithDeps(importFileName, importsMap, fetchMap);\n                    }\n                }\n            }\n        }\n        return fetchMap;\n    }\n    getModuleImports(fileName, importsMap) {\n        const moduleImports = importsMap[fileName];\n        if (moduleImports === undefined) {\n            if (fileName.startsWith('#')) {\n                return {};\n            }\n            throw new Error(`error locating ${fileName}`);\n        }\n        return moduleImports;\n    }\n}\nexports.ModuleSystem = ModuleSystem;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/module-system.ts\n// module id = 455\n// module chunks = 0 1 2 3 4 5 8\n\n//# sourceURL=webpack:///./src/module-system.ts?");

/***/ }),

/***/ 708:
/*!*****************************!*\
  !*** ./src/rabbit-proxy.ts ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst simple_link_1 = __webpack_require__(/*! ./simple-link/simple-link */ 88);\nasync function consumeRabbit(config) {\n    const eventTarget = {\n        render: () => Promise.resolve()\n    };\n    const methods = await simple_link_1.connect(config, eventTarget);\n    return Object.assign({}, methods, { init: (render) => {\n            eventTarget.render = render;\n        } });\n}\nexports.consumeRabbit = consumeRabbit;\nasync function exposeRabbit(rabbit, config) {\n    const methods = {\n        generateCompiledCode: rabbit.generateCompiledCode.bind(rabbit),\n        generateResolutionMap: rabbit.generateResolutionMap.bind(rabbit)\n    };\n    const remoteRabbitConsumer = await simple_link_1.connect(config, methods);\n    rabbit.init(remoteRabbitConsumer.render);\n}\nexports.exposeRabbit = exposeRabbit;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/rabbit-proxy.ts\n// module id = 708\n// module chunks = 0 1 6 7 8\n\n//# sourceURL=webpack:///./src/rabbit-proxy.ts?");

/***/ }),

/***/ 88:
/*!****************************************!*\
  !*** ./src/simple-link/simple-link.ts ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isMessageType(t, m) {\n    return m.type === t;\n}\nfunction isMessagePort(endpoint) {\n    return endpoint.constructor.name === 'MessagePort';\n}\nfunction activateEndpoint(endpoint) {\n    if (isMessagePort(endpoint))\n        endpoint.start();\n}\nfunction shallowClone(target) {\n    const res = {};\n    Object.keys(target).forEach((key) => {\n        res[key] = target[key];\n    });\n    return res;\n}\nfunction fillProxy(proxy, inner) {\n    Object.keys(inner).forEach((key) => {\n        if (!proxy[key]) {\n            proxy[key] = (...args) => inner[key].apply(inner, args);\n        }\n    });\n    return proxy;\n}\n;\nconst connections = [];\nasync function connect(config, offeredAPI) {\n    activateEndpoint(config.target);\n    const offeredCapabilites = getCapablities(offeredAPI);\n    let otherTargets = [];\n    await new Promise((resolveConnection) => {\n        config.target.addEventListener('message', (event) => {\n            const payload = extractMessage(event);\n            if (payload.senderId !== config.otherSideId) {\n                return;\n            }\n            if (isMessageType('handshake', payload)) {\n                post(config, {\n                    type: 'handshake-confirm',\n                    targets: offeredCapabilites,\n                    senderId: config.thisSideId\n                });\n                otherTargets = payload.targets;\n                resolveConnection();\n            }\n            else if (isMessageType('handshake-confirm', payload)) {\n                otherTargets = payload.targets;\n                resolveConnection();\n            }\n        });\n        post(config, {\n            type: 'handshake',\n            targets: offeredCapabilites,\n            senderId: config.thisSideId\n        });\n    });\n    const wrappedOfferedApi = { api: offeredAPI };\n    const remoteApi = buildProxy(config, otherTargets, wrappedOfferedApi);\n    connections.push({\n        config,\n        localApi: wrappedOfferedApi,\n        remoteApi\n    });\n    return remoteApi.proxy;\n}\nexports.connect = connect;\nfunction post(config, message) {\n    try {\n        config.target.postMessage(message);\n        // console.log(config.thisSideId + '->' + config.otherSideId + ':', JSON.stringify(message, null, 4))\n    }\n    catch (err) {\n        console.log(config.thisSideId + '->' + config.otherSideId + ':failed to execute PostMessage \\n target:', config.target, 'message:', message);\n    }\n}\nfunction getCapablities(api) {\n    return Object.keys(api);\n}\nlet counter = 0;\nfunction nextId() {\n    return counter++;\n}\nfunction extractMessage(event) {\n    let payload = event.data;\n    if (isMessageType('wrapped', payload)) {\n        payload = payload.inner;\n    }\n    return payload;\n}\nfunction buildProxy(config, targets, offeredAPI) {\n    const proxy = {};\n    const inner = {};\n    const pendingCallbacks = [];\n    const dispose = (fromOtherSide = false) => {\n        config.target.removeEventListener('message', messageListener);\n        const notifyDisposed = (event) => {\n            const payload = extractMessage(event);\n            if (payload.senderId === config.otherSideId) {\n                post(config, { type: 'dispose', senderId: config.thisSideId });\n                config.target.removeEventListener('message', notifyDisposed);\n            }\n        };\n        config.target.addEventListener('message', notifyDisposed);\n        Object.keys(proxy).forEach((key) => {\n            proxy[key] = () => {\n                throw new Error(fromOtherSide ? 'Connection has been disposed from the other side' : 'Connection has been disposed');\n            };\n        });\n    };\n    const res = {\n        proxy,\n        dispose,\n        innerRemoteApi: inner\n    };\n    targets.forEach((target) => {\n        inner[target] = function (...args) {\n            const id = nextId();\n            const promise = new Promise((resolve, reject) => {\n                pendingCallbacks.push({\n                    id, reject, resolve,\n                    toString() {\n                        return `${target}(${args.map(a => JSON.stringify(a, null, 4)).join()})`;\n                    }\n                });\n            });\n            const message = {\n                type: 'apply',\n                target: target,\n                id,\n                arguments: args,\n                senderId: config.thisSideId\n            };\n            post(config, message);\n            return promise;\n        };\n        proxy[target] = function (...args) {\n            return res.innerRemoteApi[target].apply(res.innerRemoteApi, args);\n        };\n    });\n    const messageListener = async (event) => {\n        const payload = extractMessage(event);\n        if (payload.senderId !== config.otherSideId) {\n            return;\n        }\n        if (isMessageType('dispose', payload)) {\n            pendingCallbacks.forEach(pending => {\n                pending.reject('Connection has been disposed from the other side');\n            });\n            dispose(true);\n        }\n        if (isMessageType('apply', payload)) {\n            let method = offeredAPI.api[payload.target];\n            if (method) {\n                let message;\n                try {\n                    const res = await method.apply(offeredAPI.api, payload.arguments);\n                    message = {\n                        type: 'resolve',\n                        description: payload.target,\n                        id: payload.id,\n                        res,\n                        senderId: config.thisSideId\n                    };\n                }\n                catch (err) {\n                    let reason = 'unknown-error';\n                    let stack = undefined;\n                    if (typeof err === 'string') {\n                        reason = err;\n                    }\n                    else if (err instanceof Error) {\n                        reason = err.message;\n                        stack = err.stack;\n                    }\n                    message = {\n                        type: 'reject',\n                        description: payload.target,\n                        id: payload.id,\n                        reason,\n                        stack,\n                        senderId: config.thisSideId\n                    };\n                }\n                post(config, message);\n            }\n            else {\n                throw new Error(`has no target ${payload.target}`);\n            }\n        }\n        else if (isMessageType('resolve', payload)) {\n            const pendingIndex = pendingCallbacks.findIndex((pending) => pending.id === payload.id);\n            if (pendingIndex === -1) {\n                throw (new Error('simple-link unexpected callback ' + payload.description));\n            }\n            const cb = pendingCallbacks.splice(pendingIndex, 1)[0];\n            cb.resolve(payload.res);\n        }\n        else if (isMessageType('reject', payload)) {\n            const pendingIndex = pendingCallbacks.findIndex((pending) => pending.id === payload.id);\n            if (pendingIndex === -1) {\n                throw (new Error('simple-link unexpected callback rejection ' + payload.description));\n            }\n            const cb = pendingCallbacks.splice(pendingIndex, 1)[0];\n            cb.reject(new RejectionError(cb.toString(), payload.senderId, payload.reason, payload.stack));\n        }\n    };\n    config.target.addEventListener('message', messageListener);\n    return res;\n}\nclass RejectionError extends Error {\n    constructor(action, originName, message, stack) {\n        super(message);\n        this.name = `Rejection of ${action} by '${originName}'`;\n        this.message = message;\n        Object.defineProperty(this, 'stack', { value: stack ? this.stack + '\\n---\\nRemote stack:\\n' + stack : this.stack });\n    }\n}\n/**\n * wrap an endpoint so it never receives its own messages\n * for communication over pub-sub\n */\nclass NoFeedbackEndpoint {\n    constructor(ep) {\n        this.ep = ep;\n        this.id = nextId() + '';\n        this.listeners = [];\n    }\n    postMessage(inner) {\n        this.ep.postMessage({ type: 'wrapped', senderId: this.id, inner });\n    }\n    addEventListener(type, handler) {\n        const wrappedListener = (event) => {\n            if (!isMessageType('wrapped', event.data) || event.data.senderId !== this.id) {\n                handler(event);\n            }\n        };\n        this.ep.addEventListener(type, wrappedListener);\n        this.listeners.push({\n            orig: handler,\n            wrapped: wrappedListener\n        });\n    }\n    removeEventListener(type, listener, options) {\n        const idx = this.listeners.findIndex((listenerObj) => listenerObj.orig === listener);\n        if (idx === -1) {\n            throw new Error('connect remove unexisting listener');\n        }\n        const listenerObj = this.listeners.splice(idx, 1)[0];\n        this.ep.removeEventListener(type, listenerObj.wrapped);\n    }\n}\nexports.NoFeedbackEndpoint = NoFeedbackEndpoint;\nfunction windowEndpoint(targetWindow, sourceWindow = self) {\n    const listeners = [];\n    return {\n        sourceWindow, targetWindow,\n        addEventListener(type, handler) {\n            const wrappedListener = (event) => {\n                if (targetWindow === event.source) {\n                    handler(event);\n                }\n            };\n            sourceWindow.addEventListener(type, wrappedListener);\n            listeners.push({\n                orig: handler,\n                wrapped: wrappedListener\n            });\n        },\n        removeEventListener(type, listener, options) {\n            const idx = listeners.findIndex((listenerObj) => listenerObj.orig === listener);\n            if (idx === -1) {\n                throw new Error('connect remove unexisting listener');\n            }\n            const listenerObj = listeners.splice(idx, 1)[0];\n            sourceWindow.removeEventListener(type, listenerObj.wrapped);\n        },\n        postMessage: (message) => targetWindow.postMessage(message, '*'),\n    };\n}\nexports.windowEndpoint = windowEndpoint;\nfunction disposeConnection(proxy) {\n    const connectionDataIndex = connections.findIndex((connection) => connection.remoteApi.proxy === proxy);\n    if (connectionDataIndex === -1) {\n        throw new Error('cannot clear unknown connection');\n    }\n    const connectionData = connections.splice(connectionDataIndex, 1)[0];\n    connectionData.remoteApi.dispose();\n}\nexports.disposeConnection = disposeConnection;\nfunction disposeAllConnections() {\n    while (connections.length) {\n        disposeConnection(connections[0].remoteApi.proxy);\n    }\n}\nexports.disposeAllConnections = disposeAllConnections;\nfunction replaceRemoteApi(fromLink, toLink, proxy) {\n    const connectionData = connections.find((connection) => {\n        return (connection.config.thisSideId === fromLink && connection.config.otherSideId === toLink);\n    });\n    if (!connectionData) {\n        throw new Error('replaceRemoteApi failed ' + fromLink + '->' + toLink);\n    }\n    connectionData.remoteApi.innerRemoteApi = fillProxy(proxy(connectionData.remoteApi.innerRemoteApi), connectionData.remoteApi.innerRemoteApi);\n}\nexports.replaceRemoteApi = replaceRemoteApi;\nfunction replaceLocalApi(fromLink, toLink, proxy) {\n    const connectionData = connections.find((connection) => {\n        return (connection.config.otherSideId === fromLink && connection.config.thisSideId === toLink);\n    });\n    if (!connectionData) {\n        throw new Error('replaceLocalApi failed ' + fromLink + '->' + toLink);\n    }\n    connectionData.localApi.api = fillProxy(proxy(connectionData.localApi.api), connectionData.localApi.api);\n}\nexports.replaceLocalApi = replaceLocalApi;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/simple-link/simple-link.ts\n// module id = 88\n// module chunks = 0 1 2 3 4 5 6 7 8\n\n//# sourceURL=webpack:///./src/simple-link/simple-link.ts?");

/***/ }),

/***/ 90:
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = Object.prototype.hasOwnProperty\n  , prefix = '~';\n\n/**\n * Constructor to create a storage for our `EE` objects.\n * An `Events` instance is a plain object whose properties are event names.\n *\n * @constructor\n * @api private\n */\nfunction Events() {}\n\n//\n// We try to not inherit from `Object.prototype`. In some engines creating an\n// instance in this way is faster than calling `Object.create(null)` directly.\n// If `Object.create(null)` is not supported we prefix the event names with a\n// character to make sure that the built-in object properties are not\n// overridden or used as an attack vector.\n//\nif (Object.create) {\n  Events.prototype = Object.create(null);\n\n  //\n  // This hack is needed because the `__proto__` property is still inherited in\n  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.\n  //\n  if (!new Events().__proto__) prefix = false;\n}\n\n/**\n * Representation of a single event listener.\n *\n * @param {Function} fn The listener function.\n * @param {Mixed} context The context to invoke the listener with.\n * @param {Boolean} [once=false] Specify if the listener is a one-time listener.\n * @constructor\n * @api private\n */\nfunction EE(fn, context, once) {\n  this.fn = fn;\n  this.context = context;\n  this.once = once || false;\n}\n\n/**\n * Minimal `EventEmitter` interface that is molded against the Node.js\n * `EventEmitter` interface.\n *\n * @constructor\n * @api public\n */\nfunction EventEmitter() {\n  this._events = new Events();\n  this._eventsCount = 0;\n}\n\n/**\n * Return an array listing the events for which the emitter has registered\n * listeners.\n *\n * @returns {Array}\n * @api public\n */\nEventEmitter.prototype.eventNames = function eventNames() {\n  var names = []\n    , events\n    , name;\n\n  if (this._eventsCount === 0) return names;\n\n  for (name in (events = this._events)) {\n    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);\n  }\n\n  if (Object.getOwnPropertySymbols) {\n    return names.concat(Object.getOwnPropertySymbols(events));\n  }\n\n  return names;\n};\n\n/**\n * Return the listeners registered for a given event.\n *\n * @param {String|Symbol} event The event name.\n * @param {Boolean} exists Only check if there are listeners.\n * @returns {Array|Boolean}\n * @api public\n */\nEventEmitter.prototype.listeners = function listeners(event, exists) {\n  var evt = prefix ? prefix + event : event\n    , available = this._events[evt];\n\n  if (exists) return !!available;\n  if (!available) return [];\n  if (available.fn) return [available.fn];\n\n  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {\n    ee[i] = available[i].fn;\n  }\n\n  return ee;\n};\n\n/**\n * Calls each of the listeners registered for a given event.\n *\n * @param {String|Symbol} event The event name.\n * @returns {Boolean} `true` if the event had listeners, else `false`.\n * @api public\n */\nEventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return false;\n\n  var listeners = this._events[evt]\n    , len = arguments.length\n    , args\n    , i;\n\n  if (listeners.fn) {\n    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);\n\n    switch (len) {\n      case 1: return listeners.fn.call(listeners.context), true;\n      case 2: return listeners.fn.call(listeners.context, a1), true;\n      case 3: return listeners.fn.call(listeners.context, a1, a2), true;\n      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;\n      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;\n      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;\n    }\n\n    for (i = 1, args = new Array(len -1); i < len; i++) {\n      args[i - 1] = arguments[i];\n    }\n\n    listeners.fn.apply(listeners.context, args);\n  } else {\n    var length = listeners.length\n      , j;\n\n    for (i = 0; i < length; i++) {\n      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);\n\n      switch (len) {\n        case 1: listeners[i].fn.call(listeners[i].context); break;\n        case 2: listeners[i].fn.call(listeners[i].context, a1); break;\n        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;\n        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;\n        default:\n          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {\n            args[j - 1] = arguments[j];\n          }\n\n          listeners[i].fn.apply(listeners[i].context, args);\n      }\n    }\n  }\n\n  return true;\n};\n\n/**\n * Add a listener for a given event.\n *\n * @param {String|Symbol} event The event name.\n * @param {Function} fn The listener function.\n * @param {Mixed} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @api public\n */\nEventEmitter.prototype.on = function on(event, fn, context) {\n  var listener = new EE(fn, context || this)\n    , evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;\n  else if (!this._events[evt].fn) this._events[evt].push(listener);\n  else this._events[evt] = [this._events[evt], listener];\n\n  return this;\n};\n\n/**\n * Add a one-time listener for a given event.\n *\n * @param {String|Symbol} event The event name.\n * @param {Function} fn The listener function.\n * @param {Mixed} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @api public\n */\nEventEmitter.prototype.once = function once(event, fn, context) {\n  var listener = new EE(fn, context || this, true)\n    , evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;\n  else if (!this._events[evt].fn) this._events[evt].push(listener);\n  else this._events[evt] = [this._events[evt], listener];\n\n  return this;\n};\n\n/**\n * Remove the listeners of a given event.\n *\n * @param {String|Symbol} event The event name.\n * @param {Function} fn Only remove the listeners that match this function.\n * @param {Mixed} context Only remove the listeners that have this context.\n * @param {Boolean} once Only remove one-time listeners.\n * @returns {EventEmitter} `this`.\n * @api public\n */\nEventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return this;\n  if (!fn) {\n    if (--this._eventsCount === 0) this._events = new Events();\n    else delete this._events[evt];\n    return this;\n  }\n\n  var listeners = this._events[evt];\n\n  if (listeners.fn) {\n    if (\n         listeners.fn === fn\n      && (!once || listeners.once)\n      && (!context || listeners.context === context)\n    ) {\n      if (--this._eventsCount === 0) this._events = new Events();\n      else delete this._events[evt];\n    }\n  } else {\n    for (var i = 0, events = [], length = listeners.length; i < length; i++) {\n      if (\n           listeners[i].fn !== fn\n        || (once && !listeners[i].once)\n        || (context && listeners[i].context !== context)\n      ) {\n        events.push(listeners[i]);\n      }\n    }\n\n    //\n    // Reset the array, or remove it completely if we have no more listeners.\n    //\n    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;\n    else if (--this._eventsCount === 0) this._events = new Events();\n    else delete this._events[evt];\n  }\n\n  return this;\n};\n\n/**\n * Remove all listeners, or those of the specified event.\n *\n * @param {String|Symbol} [event] The event name.\n * @returns {EventEmitter} `this`.\n * @api public\n */\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {\n  var evt;\n\n  if (event) {\n    evt = prefix ? prefix + event : event;\n    if (this._events[evt]) {\n      if (--this._eventsCount === 0) this._events = new Events();\n      else delete this._events[evt];\n    }\n  } else {\n    this._events = new Events();\n    this._eventsCount = 0;\n  }\n\n  return this;\n};\n\n//\n// Alias methods names because people roll like that.\n//\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n//\n// This function doesn't apply anymore.\n//\nEventEmitter.prototype.setMaxListeners = function setMaxListeners() {\n  return this;\n};\n\n//\n// Expose the prefix.\n//\nEventEmitter.prefixed = prefix;\n\n//\n// Allow `EventEmitter` to be imported as module namespace.\n//\nEventEmitter.EventEmitter = EventEmitter;\n\n//\n// Expose the module.\n//\nif (true) {\n  module.exports = EventEmitter;\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/eventemitter3/index.js\n// module id = 90\n// module chunks = 0 1 2 3 4 5 6 7 8\n\n//# sourceURL=webpack:///./node_modules/eventemitter3/index.js?");

/***/ }),

/***/ 915:
/*!****************************************!*\
  !*** multi ./src/playground-stage.tsx ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/playground-stage.tsx */916);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi ./src/playground-stage.tsx\n// module id = 915\n// module chunks = 8\n\n//# sourceURL=webpack:///multi_./src/playground-stage.tsx?");

/***/ }),

/***/ 916:
/*!**********************************!*\
  !*** ./src/playground-stage.tsx ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst module_system_1 = __webpack_require__(/*! ./module-system */ 455);\nconst rabbit_proxy_1 = __webpack_require__(/*! ./rabbit-proxy */ 708);\nconst simple_link_1 = __webpack_require__(/*! ./simple-link/simple-link */ 88);\nwindow.initPlayground = async (targetWindow, relativePath) => {\n    let rabbit = await rabbit_proxy_1.consumeRabbit({\n        thisSideId: 'preview',\n        otherSideId: 'main',\n        target: simple_link_1.windowEndpoint(targetWindow)\n    });\n    const moduleSystem = new module_system_1.ModuleSystem(rabbit);\n    rabbit.init(moduleSystem.reload);\n    moduleSystem.require(relativePath);\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/playground-stage.tsx\n// module id = 916\n// module chunks = 8\n\n//# sourceURL=webpack:///./src/playground-stage.tsx?");

/***/ })

/******/ });