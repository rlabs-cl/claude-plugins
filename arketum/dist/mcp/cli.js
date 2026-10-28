#!/usr/bin/env node
import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);
import {
  $ZodObject,
  $ZodType,
  $constructor,
  CallToolRequestSchema,
  CallToolResultSchema,
  CancelTaskRequestSchema,
  CancelTaskResultSchema,
  CancelledNotificationSchema,
  CompleteRequestSchema,
  CreateMessageResultSchema,
  CreateMessageResultWithToolsSchema,
  CreateTaskResultSchema,
  ElicitResultSchema,
  EmptyResultSchema,
  ErrorCode,
  GetPromptRequestSchema,
  GetTaskPayloadRequestSchema,
  GetTaskRequestSchema,
  GetTaskResultSchema,
  InitializeRequestSchema,
  InitializedNotificationSchema,
  JSONRPCMessageSchema,
  L,
  LATEST_PROTOCOL_VERSION,
  ListPromptsRequestSchema,
  ListResourceTemplatesRequestSchema,
  ListResourcesRequestSchema,
  ListRootsResultSchema,
  ListTasksRequestSchema,
  ListTasksResultSchema,
  ListToolsRequestSchema,
  LoggingLevelSchema,
  M,
  McpError,
  O,
  PingRequestSchema,
  ProgressNotificationSchema,
  RELATED_TASK_META_KEY,
  ReadResourceRequestSchema,
  SUPPORTED_PROTOCOL_VERSIONS,
  SetLevelRequestSchema,
  TaskStatusNotificationSchema,
  ZodOptional,
  assertCompleteRequestPrompt,
  assertCompleteRequestResourceTemplate,
  bB,
  bO,
  bP,
  bX,
  ba,
  be,
  bg,
  bi as bi2,
  bk,
  bs,
  cE,
  clone,
  dB,
  dR as dR2,
  defineLazy,
  dp,
  e3,
  e6,
  e8 as e82,
  ec,
  ed,
  ee,
  external_exports,
  fM,
  fN,
  fO,
  fV,
  fW,
  g3,
  i7,
  isJSONRPCErrorResponse,
  isJSONRPCNotification,
  isJSONRPCRequest,
  isJSONRPCResultResponse,
  isTaskAugmentedRequestParams,
  normalizeParams,
  parse,
  parseAsync,
  safeParse,
  safeParseAsync,
  toJSONSchema
} from "./comun-PEYGTZVX.js";
import {
  A,
  AX,
  BV,
  CL,
  CV,
  CW,
  CX,
  D0,
  D1,
  D2,
  D3,
  D4,
  DB,
  DF,
  DG,
  DH,
  DI,
  DS,
  DT,
  DW,
  DX,
  Db,
  Ds,
  E0,
  EV,
  Ei,
  G9,
  GB,
  GC,
  GE,
  GF,
  GH,
  GI,
  GL,
  GM,
  GN,
  GS,
  GU,
  GV,
  Gc,
  Gd,
  Gg,
  Gi,
  Gj,
  Gk,
  Go,
  Gq,
  Gr,
  Gs,
  Gt,
  Gv,
  Gx,
  IT,
  Iq,
  J3,
  J6,
  Jb,
  Je,
  Jg,
  __commonJS,
  __toESM,
  aA,
  bi,
  cw,
  dD,
  dR,
  dj,
  dr,
  dv,
  e7,
  e8,
  e9,
  gK,
  gX,
  gw,
  gx,
  gy,
  h1,
  h5,
  h6,
  h7,
  h9,
  ha,
  j,
  k,
  kB,
  kZ,
  l0,
  l3,
  le,
  mY,
  n4,
  o,
  pc,
  pj,
  pk,
  pv,
  pw,
  px,
  py,
  q,
  r,
  sI,
  sX,
  sY,
  te,
  uD,
  uc,
  up,
  xA
} from "./comun-FGC64UAE.js";

// node_modules/ajv/dist/compile/codegen/code.js
var require_code = __commonJS({
  "node_modules/ajv/dist/compile/codegen/code.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
    var _CodeOrName = class {
    };
    exports._CodeOrName = _CodeOrName;
    exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var Name = class extends _CodeOrName {
      constructor(s2) {
        super();
        if (!exports.IDENTIFIER.test(s2))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = s2;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return false;
      }
      get names() {
        return { [this.str]: 1 };
      }
    };
    exports.Name = Name;
    var _Code = class extends _CodeOrName {
      constructor(code) {
        super();
        this._items = typeof code === "string" ? [code] : code;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return false;
        const item = this._items[0];
        return item === "" || item === '""';
      }
      get str() {
        var _a;
        return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce((s2, c2) => `${s2}${c2}`, "");
      }
      get names() {
        var _a;
        return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce((names, c2) => {
          if (c2 instanceof Name)
            names[c2.str] = (names[c2.str] || 0) + 1;
          return names;
        }, {});
      }
    };
    exports._Code = _Code;
    exports.nil = new _Code("");
    function _(strs, ...args) {
      const code = [strs[0]];
      let i2 = 0;
      while (i2 < args.length) {
        addCodeArg(code, args[i2]);
        code.push(strs[++i2]);
      }
      return new _Code(code);
    }
    exports._ = _;
    var plus = new _Code("+");
    function str(strs, ...args) {
      const expr = [safeStringify(strs[0])];
      let i2 = 0;
      while (i2 < args.length) {
        expr.push(plus);
        addCodeArg(expr, args[i2]);
        expr.push(plus, safeStringify(strs[++i2]));
      }
      optimize(expr);
      return new _Code(expr);
    }
    exports.str = str;
    function addCodeArg(code, arg) {
      if (arg instanceof _Code)
        code.push(...arg._items);
      else if (arg instanceof Name)
        code.push(arg);
      else
        code.push(interpolate(arg));
    }
    exports.addCodeArg = addCodeArg;
    function optimize(expr) {
      let i2 = 1;
      while (i2 < expr.length - 1) {
        if (expr[i2] === plus) {
          const res = mergeExprItems(expr[i2 - 1], expr[i2 + 1]);
          if (res !== void 0) {
            expr.splice(i2 - 1, 3, res);
            continue;
          }
          expr[i2++] = "+";
        }
        i2++;
      }
    }
    function mergeExprItems(a5, b2) {
      if (b2 === '""')
        return a5;
      if (a5 === '""')
        return b2;
      if (typeof a5 == "string") {
        if (b2 instanceof Name || a5[a5.length - 1] !== '"')
          return;
        if (typeof b2 != "string")
          return `${a5.slice(0, -1)}${b2}"`;
        if (b2[0] === '"')
          return a5.slice(0, -1) + b2.slice(1);
        return;
      }
      if (typeof b2 == "string" && b2[0] === '"' && !(a5 instanceof Name))
        return `"${a5}${b2.slice(1)}`;
      return;
    }
    function strConcat(c1, c2) {
      return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str`${c1}${c2}`;
    }
    exports.strConcat = strConcat;
    function interpolate(x2) {
      return typeof x2 == "number" || typeof x2 == "boolean" || x2 === null ? x2 : safeStringify(Array.isArray(x2) ? x2.join(",") : x2);
    }
    function stringify(x2) {
      return new _Code(safeStringify(x2));
    }
    exports.stringify = stringify;
    function safeStringify(x2) {
      return JSON.stringify(x2).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    exports.safeStringify = safeStringify;
    function getProperty(key) {
      return typeof key == "string" && exports.IDENTIFIER.test(key) ? new _Code(`.${key}`) : _`[${key}]`;
    }
    exports.getProperty = getProperty;
    function getEsmExportName(key) {
      if (typeof key == "string" && exports.IDENTIFIER.test(key)) {
        return new _Code(`${key}`);
      }
      throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
    }
    exports.getEsmExportName = getEsmExportName;
    function regexpCode(rx) {
      return new _Code(rx.toString());
    }
    exports.regexpCode = regexpCode;
  }
});

// node_modules/ajv/dist/compile/codegen/scope.js
var require_scope = __commonJS({
  "node_modules/ajv/dist/compile/codegen/scope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
    var code_1 = require_code();
    var ValueError = class extends Error {
      constructor(name) {
        super(`CodeGen: "code" for ${name} not defined`);
        this.value = name.value;
      }
    };
    var UsedValueState;
    (function(UsedValueState2) {
      UsedValueState2[UsedValueState2["Started"] = 0] = "Started";
      UsedValueState2[UsedValueState2["Completed"] = 1] = "Completed";
    })(UsedValueState || (exports.UsedValueState = UsedValueState = {}));
    exports.varKinds = {
      const: new code_1.Name("const"),
      let: new code_1.Name("let"),
      var: new code_1.Name("var")
    };
    var Scope = class {
      constructor({ prefixes, parent } = {}) {
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
      }
      toName(nameOrPrefix) {
        return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
      }
      name(prefix) {
        return new code_1.Name(this._newName(prefix));
      }
      _newName(prefix) {
        const ng = this._names[prefix] || this._nameGroup(prefix);
        return `${prefix}${ng.index++}`;
      }
      _nameGroup(prefix) {
        var _a, _b;
        if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
          throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
        }
        return this._names[prefix] = { prefix, index: 0 };
      }
    };
    exports.Scope = Scope;
    var ValueScopeName = class extends code_1.Name {
      constructor(prefix, nameStr) {
        super(nameStr);
        this.prefix = prefix;
      }
      setValue(value, { property, itemIndex }) {
        this.value = value;
        this.scopePath = (0, code_1._)`.${new code_1.Name(property)}[${itemIndex}]`;
      }
    };
    exports.ValueScopeName = ValueScopeName;
    var line = (0, code_1._)`\n`;
    var ValueScope = class extends Scope {
      constructor(opts) {
        super(opts);
        this._values = {};
        this._scope = opts.scope;
        this.opts = { ...opts, _n: opts.lines ? line : code_1.nil };
      }
      get() {
        return this._scope;
      }
      name(prefix) {
        return new ValueScopeName(prefix, this._newName(prefix));
      }
      value(nameOrPrefix, value) {
        var _a;
        if (value.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const name = this.toName(nameOrPrefix);
        const { prefix } = name;
        const valueKey = (_a = value.key) !== null && _a !== void 0 ? _a : value.ref;
        let vs = this._values[prefix];
        if (vs) {
          const _name = vs.get(valueKey);
          if (_name)
            return _name;
        } else {
          vs = this._values[prefix] = /* @__PURE__ */ new Map();
        }
        vs.set(valueKey, name);
        const s2 = this._scope[prefix] || (this._scope[prefix] = []);
        const itemIndex = s2.length;
        s2[itemIndex] = value.ref;
        name.setValue(value, { property: prefix, itemIndex });
        return name;
      }
      getValue(prefix, keyOrRef) {
        const vs = this._values[prefix];
        if (!vs)
          return;
        return vs.get(keyOrRef);
      }
      scopeRefs(scopeName, values = this._values) {
        return this._reduceValues(values, (name) => {
          if (name.scopePath === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return (0, code_1._)`${scopeName}${name.scopePath}`;
        });
      }
      scopeCode(values = this._values, usedValues, getCode) {
        return this._reduceValues(values, (name) => {
          if (name.value === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return name.value.code;
        }, usedValues, getCode);
      }
      _reduceValues(values, valueCode, usedValues = {}, getCode) {
        let code = code_1.nil;
        for (const prefix in values) {
          const vs = values[prefix];
          if (!vs)
            continue;
          const nameSet = usedValues[prefix] = usedValues[prefix] || /* @__PURE__ */ new Map();
          vs.forEach((name) => {
            if (nameSet.has(name))
              return;
            nameSet.set(name, UsedValueState.Started);
            let c2 = valueCode(name);
            if (c2) {
              const def = this.opts.es5 ? exports.varKinds.var : exports.varKinds.const;
              code = (0, code_1._)`${code}${def} ${name} = ${c2};${this.opts._n}`;
            } else if (c2 = getCode === null || getCode === void 0 ? void 0 : getCode(name)) {
              code = (0, code_1._)`${code}${c2}${this.opts._n}`;
            } else {
              throw new ValueError(name);
            }
            nameSet.set(name, UsedValueState.Completed);
          });
        }
        return code;
      }
    };
    exports.ValueScope = ValueScope;
  }
});

// node_modules/ajv/dist/compile/codegen/index.js
var require_codegen = __commonJS({
  "node_modules/ajv/dist/compile/codegen/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
    var code_1 = require_code();
    var scope_1 = require_scope();
    var code_2 = require_code();
    Object.defineProperty(exports, "_", { enumerable: true, get: function() {
      return code_2._;
    } });
    Object.defineProperty(exports, "str", { enumerable: true, get: function() {
      return code_2.str;
    } });
    Object.defineProperty(exports, "strConcat", { enumerable: true, get: function() {
      return code_2.strConcat;
    } });
    Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
      return code_2.nil;
    } });
    Object.defineProperty(exports, "getProperty", { enumerable: true, get: function() {
      return code_2.getProperty;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return code_2.stringify;
    } });
    Object.defineProperty(exports, "regexpCode", { enumerable: true, get: function() {
      return code_2.regexpCode;
    } });
    Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
      return code_2.Name;
    } });
    var scope_2 = require_scope();
    Object.defineProperty(exports, "Scope", { enumerable: true, get: function() {
      return scope_2.Scope;
    } });
    Object.defineProperty(exports, "ValueScope", { enumerable: true, get: function() {
      return scope_2.ValueScope;
    } });
    Object.defineProperty(exports, "ValueScopeName", { enumerable: true, get: function() {
      return scope_2.ValueScopeName;
    } });
    Object.defineProperty(exports, "varKinds", { enumerable: true, get: function() {
      return scope_2.varKinds;
    } });
    exports.operators = {
      GT: new code_1._Code(">"),
      GTE: new code_1._Code(">="),
      LT: new code_1._Code("<"),
      LTE: new code_1._Code("<="),
      EQ: new code_1._Code("==="),
      NEQ: new code_1._Code("!=="),
      NOT: new code_1._Code("!"),
      OR: new code_1._Code("||"),
      AND: new code_1._Code("&&"),
      ADD: new code_1._Code("+")
    };
    var Node = class {
      optimizeNodes() {
        return this;
      }
      optimizeNames(_names, _constants) {
        return this;
      }
    };
    var Def = class extends Node {
      constructor(varKind, name, rhs) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.rhs = rhs;
      }
      render({ es5, _n }) {
        const varKind = es5 ? scope_1.varKinds.var : this.varKind;
        const rhs = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${varKind} ${this.name}${rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (!names[this.name.str])
          return;
        if (this.rhs)
          this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
      }
      get names() {
        return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
      }
    };
    var Assign = class extends Node {
      constructor(lhs, rhs, sideEffects) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
        this.sideEffects = sideEffects;
      }
      render({ _n }) {
        return `${this.lhs} = ${this.rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (this.lhs instanceof code_1.Name && !names[this.lhs.str] && !this.sideEffects)
          return;
        this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
      }
      get names() {
        const names = this.lhs instanceof code_1.Name ? {} : { ...this.lhs.names };
        return addExprNames(names, this.rhs);
      }
    };
    var AssignOp = class extends Assign {
      constructor(lhs, op, rhs, sideEffects) {
        super(lhs, rhs, sideEffects);
        this.op = op;
      }
      render({ _n }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
      }
    };
    var Label = class extends Node {
      constructor(label) {
        super();
        this.label = label;
        this.names = {};
      }
      render({ _n }) {
        return `${this.label}:` + _n;
      }
    };
    var Break = class extends Node {
      constructor(label) {
        super();
        this.label = label;
        this.names = {};
      }
      render({ _n }) {
        const label = this.label ? ` ${this.label}` : "";
        return `break${label};` + _n;
      }
    };
    var Throw = class extends Node {
      constructor(error) {
        super();
        this.error = error;
      }
      render({ _n }) {
        return `throw ${this.error};` + _n;
      }
      get names() {
        return this.error.names;
      }
    };
    var AnyCode = class extends Node {
      constructor(code) {
        super();
        this.code = code;
      }
      render({ _n }) {
        return `${this.code};` + _n;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(names, constants) {
        this.code = optimizeExpr(this.code, names, constants);
        return this;
      }
      get names() {
        return this.code instanceof code_1._CodeOrName ? this.code.names : {};
      }
    };
    var ParentNode = class extends Node {
      constructor(nodes = []) {
        super();
        this.nodes = nodes;
      }
      render(opts) {
        return this.nodes.reduce((code, n2) => code + n2.render(opts), "");
      }
      optimizeNodes() {
        const { nodes } = this;
        let i2 = nodes.length;
        while (i2--) {
          const n2 = nodes[i2].optimizeNodes();
          if (Array.isArray(n2))
            nodes.splice(i2, 1, ...n2);
          else if (n2)
            nodes[i2] = n2;
          else
            nodes.splice(i2, 1);
        }
        return nodes.length > 0 ? this : void 0;
      }
      optimizeNames(names, constants) {
        const { nodes } = this;
        let i2 = nodes.length;
        while (i2--) {
          const n2 = nodes[i2];
          if (n2.optimizeNames(names, constants))
            continue;
          subtractNames(names, n2.names);
          nodes.splice(i2, 1);
        }
        return nodes.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((names, n2) => addNames(names, n2.names), {});
      }
    };
    var BlockNode = class extends ParentNode {
      render(opts) {
        return "{" + opts._n + super.render(opts) + "}" + opts._n;
      }
    };
    var Root = class extends ParentNode {
    };
    var Else = class extends BlockNode {
    };
    Else.kind = "else";
    var If = class _If extends BlockNode {
      constructor(condition, nodes) {
        super(nodes);
        this.condition = condition;
      }
      render(opts) {
        let code = `if(${this.condition})` + super.render(opts);
        if (this.else)
          code += "else " + this.else.render(opts);
        return code;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const cond = this.condition;
        if (cond === true)
          return this.nodes;
        let e2 = this.else;
        if (e2) {
          const ns = e2.optimizeNodes();
          e2 = this.else = Array.isArray(ns) ? new Else(ns) : ns;
        }
        if (e2) {
          if (cond === false)
            return e2 instanceof _If ? e2 : e2.nodes;
          if (this.nodes.length)
            return this;
          return new _If(not(cond), e2 instanceof _If ? [e2] : e2.nodes);
        }
        if (cond === false || !this.nodes.length)
          return void 0;
        return this;
      }
      optimizeNames(names, constants) {
        var _a;
        this.else = (_a = this.else) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        if (!(super.optimizeNames(names, constants) || this.else))
          return;
        this.condition = optimizeExpr(this.condition, names, constants);
        return this;
      }
      get names() {
        const names = super.names;
        addExprNames(names, this.condition);
        if (this.else)
          addNames(names, this.else.names);
        return names;
      }
    };
    If.kind = "if";
    var For = class extends BlockNode {
    };
    For.kind = "for";
    var ForLoop = class extends For {
      constructor(iteration) {
        super();
        this.iteration = iteration;
      }
      render(opts) {
        return `for(${this.iteration})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
          return;
        this.iteration = optimizeExpr(this.iteration, names, constants);
        return this;
      }
      get names() {
        return addNames(super.names, this.iteration.names);
      }
    };
    var ForRange = class extends For {
      constructor(varKind, name, from, to) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.from = from;
        this.to = to;
      }
      render(opts) {
        const varKind = opts.es5 ? scope_1.varKinds.var : this.varKind;
        const { name, from, to } = this;
        return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
      }
      get names() {
        const names = addExprNames(super.names, this.from);
        return addExprNames(names, this.to);
      }
    };
    var ForIter = class extends For {
      constructor(loop, varKind, name, iterable) {
        super();
        this.loop = loop;
        this.varKind = varKind;
        this.name = name;
        this.iterable = iterable;
      }
      render(opts) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
          return;
        this.iterable = optimizeExpr(this.iterable, names, constants);
        return this;
      }
      get names() {
        return addNames(super.names, this.iterable.names);
      }
    };
    var Func = class extends BlockNode {
      constructor(name, args, async) {
        super();
        this.name = name;
        this.args = args;
        this.async = async;
      }
      render(opts) {
        const _async = this.async ? "async " : "";
        return `${_async}function ${this.name}(${this.args})` + super.render(opts);
      }
    };
    Func.kind = "func";
    var Return = class extends ParentNode {
      render(opts) {
        return "return " + super.render(opts);
      }
    };
    Return.kind = "return";
    var Try = class extends BlockNode {
      render(opts) {
        let code = "try" + super.render(opts);
        if (this.catch)
          code += this.catch.render(opts);
        if (this.finally)
          code += this.finally.render(opts);
        return code;
      }
      optimizeNodes() {
        var _a, _b;
        super.optimizeNodes();
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
        return this;
      }
      optimizeNames(names, constants) {
        var _a, _b;
        super.optimizeNames(names, constants);
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNames(names, constants);
        return this;
      }
      get names() {
        const names = super.names;
        if (this.catch)
          addNames(names, this.catch.names);
        if (this.finally)
          addNames(names, this.finally.names);
        return names;
      }
    };
    var Catch = class extends BlockNode {
      constructor(error) {
        super();
        this.error = error;
      }
      render(opts) {
        return `catch(${this.error})` + super.render(opts);
      }
    };
    Catch.kind = "catch";
    var Finally = class extends BlockNode {
      render(opts) {
        return "finally" + super.render(opts);
      }
    };
    Finally.kind = "finally";
    var CodeGen = class {
      constructor(extScope, opts = {}) {
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = { ...opts, _n: opts.lines ? "\n" : "" };
        this._extScope = extScope;
        this._scope = new scope_1.Scope({ parent: extScope });
        this._nodes = [new Root()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(prefix) {
        return this._scope.name(prefix);
      }
      // reserves unique name in the external scope
      scopeName(prefix) {
        return this._extScope.name(prefix);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(prefixOrName, value) {
        const name = this._extScope.value(prefixOrName, value);
        const vs = this._values[name.prefix] || (this._values[name.prefix] = /* @__PURE__ */ new Set());
        vs.add(name);
        return name;
      }
      getScopeValue(prefix, keyOrRef) {
        return this._extScope.getValue(prefix, keyOrRef);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(scopeName) {
        return this._extScope.scopeRefs(scopeName, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(varKind, nameOrPrefix, rhs, constant) {
        const name = this._scope.toName(nameOrPrefix);
        if (rhs !== void 0 && constant)
          this._constants[name.str] = rhs;
        this._leafNode(new Def(varKind, name, rhs));
        return name;
      }
      // `const` declaration (`var` in es5 mode)
      const(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
      }
      // `var` declaration with optional assignment
      var(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
      }
      // assignment code
      assign(lhs, rhs, sideEffects) {
        return this._leafNode(new Assign(lhs, rhs, sideEffects));
      }
      // `+=` code
      add(lhs, rhs) {
        return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
      }
      // appends passed SafeExpr to code or executes Block
      code(c2) {
        if (typeof c2 == "function")
          c2();
        else if (c2 !== code_1.nil)
          this._leafNode(new AnyCode(c2));
        return this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...keyValues) {
        const code = ["{"];
        for (const [key, value] of keyValues) {
          if (code.length > 1)
            code.push(",");
          code.push(key);
          if (key !== value || this.opts.es5) {
            code.push(":");
            (0, code_1.addCodeArg)(code, value);
          }
        }
        code.push("}");
        return new code_1._Code(code);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(condition, thenBody, elseBody) {
        this._blockNode(new If(condition));
        if (thenBody && elseBody) {
          this.code(thenBody).else().code(elseBody).endIf();
        } else if (thenBody) {
          this.code(thenBody).endIf();
        } else if (elseBody) {
          throw new Error('CodeGen: "else" body without "then" body');
        }
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(condition) {
        return this._elseNode(new If(condition));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new Else());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(If, Else);
      }
      _for(node, forBody) {
        this._blockNode(node);
        if (forBody)
          this.code(forBody).endFor();
        return this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(iteration, forBody) {
        return this._for(new ForLoop(iteration), forBody);
      }
      // `for` statement for a range of values
      forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForRange(varKind, name, from, to), () => forBody(name));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
        const name = this._scope.toName(nameOrPrefix);
        if (this.opts.es5) {
          const arr = iterable instanceof code_1.Name ? iterable : this.var("_arr", iterable);
          return this.forRange("_i", 0, (0, code_1._)`${arr}.length`, (i2) => {
            this.var(name, (0, code_1._)`${arr}[${i2}]`);
            forBody(name);
          });
        }
        return this._for(new ForIter("of", varKind, name, iterable), () => forBody(name));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
        if (this.opts.ownProperties) {
          return this.forOf(nameOrPrefix, (0, code_1._)`Object.keys(${obj})`, forBody);
        }
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForIter("in", varKind, name, obj), () => forBody(name));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(For);
      }
      // `label` statement
      label(label) {
        return this._leafNode(new Label(label));
      }
      // `break` statement
      break(label) {
        return this._leafNode(new Break(label));
      }
      // `return` statement
      return(value) {
        const node = new Return();
        this._blockNode(node);
        this.code(value);
        if (node.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(Return);
      }
      // `try` statement
      try(tryBody, catchCode, finallyCode) {
        if (!catchCode && !finallyCode)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const node = new Try();
        this._blockNode(node);
        this.code(tryBody);
        if (catchCode) {
          const error = this.name("e");
          this._currNode = node.catch = new Catch(error);
          catchCode(error);
        }
        if (finallyCode) {
          this._currNode = node.finally = new Finally();
          this.code(finallyCode);
        }
        return this._endBlockNode(Catch, Finally);
      }
      // `throw` statement
      throw(error) {
        return this._leafNode(new Throw(error));
      }
      // start self-balancing block
      block(body, nodeCount) {
        this._blockStarts.push(this._nodes.length);
        if (body)
          this.code(body).endBlock(nodeCount);
        return this;
      }
      // end the current self-balancing block
      endBlock(nodeCount) {
        const len = this._blockStarts.pop();
        if (len === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const toClose = this._nodes.length - len;
        if (toClose < 0 || nodeCount !== void 0 && toClose !== nodeCount) {
          throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
        }
        this._nodes.length = len;
        return this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(name, args = code_1.nil, async, funcBody) {
        this._blockNode(new Func(name, args, async));
        if (funcBody)
          this.code(funcBody).endFunc();
        return this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(Func);
      }
      optimize(n2 = 1) {
        while (n2-- > 0) {
          this._root.optimizeNodes();
          this._root.optimizeNames(this._root.names, this._constants);
        }
      }
      _leafNode(node) {
        this._currNode.nodes.push(node);
        return this;
      }
      _blockNode(node) {
        this._currNode.nodes.push(node);
        this._nodes.push(node);
      }
      _endBlockNode(N1, N2) {
        const n2 = this._currNode;
        if (n2 instanceof N1 || N2 && n2 instanceof N2) {
          this._nodes.pop();
          return this;
        }
        throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
      }
      _elseNode(node) {
        const n2 = this._currNode;
        if (!(n2 instanceof If)) {
          throw new Error('CodeGen: "else" without "if"');
        }
        this._currNode = n2.else = node;
        return this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const ns = this._nodes;
        return ns[ns.length - 1];
      }
      set _currNode(node) {
        const ns = this._nodes;
        ns[ns.length - 1] = node;
      }
    };
    exports.CodeGen = CodeGen;
    function addNames(names, from) {
      for (const n2 in from)
        names[n2] = (names[n2] || 0) + (from[n2] || 0);
      return names;
    }
    function addExprNames(names, from) {
      return from instanceof code_1._CodeOrName ? addNames(names, from.names) : names;
    }
    function optimizeExpr(expr, names, constants) {
      if (expr instanceof code_1.Name)
        return replaceName(expr);
      if (!canOptimize(expr))
        return expr;
      return new code_1._Code(expr._items.reduce((items, c2) => {
        if (c2 instanceof code_1.Name)
          c2 = replaceName(c2);
        if (c2 instanceof code_1._Code)
          items.push(...c2._items);
        else
          items.push(c2);
        return items;
      }, []));
      function replaceName(n2) {
        const c2 = constants[n2.str];
        if (c2 === void 0 || names[n2.str] !== 1)
          return n2;
        delete names[n2.str];
        return c2;
      }
      function canOptimize(e2) {
        return e2 instanceof code_1._Code && e2._items.some((c2) => c2 instanceof code_1.Name && names[c2.str] === 1 && constants[c2.str] !== void 0);
      }
    }
    function subtractNames(names, from) {
      for (const n2 in from)
        names[n2] = (names[n2] || 0) - (from[n2] || 0);
    }
    function not(x2) {
      return typeof x2 == "boolean" || typeof x2 == "number" || x2 === null ? !x2 : (0, code_1._)`!${par(x2)}`;
    }
    exports.not = not;
    var andCode = mappend(exports.operators.AND);
    function and(...args) {
      return args.reduce(andCode);
    }
    exports.and = and;
    var orCode = mappend(exports.operators.OR);
    function or(...args) {
      return args.reduce(orCode);
    }
    exports.or = or;
    function mappend(op) {
      return (x2, y2) => x2 === code_1.nil ? y2 : y2 === code_1.nil ? x2 : (0, code_1._)`${par(x2)} ${op} ${par(y2)}`;
    }
    function par(x2) {
      return x2 instanceof code_1.Name ? x2 : (0, code_1._)`(${x2})`;
    }
  }
});

// node_modules/ajv/dist/compile/util.js
var require_util = __commonJS({
  "node_modules/ajv/dist/compile/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkStrictMode = exports.getErrorPath = exports.Type = exports.useFunc = exports.setEvaluated = exports.evaluatedPropsToName = exports.mergeEvaluated = exports.eachItem = exports.unescapeJsonPointer = exports.escapeJsonPointer = exports.escapeFragment = exports.unescapeFragment = exports.schemaRefOrVal = exports.schemaHasRulesButRef = exports.schemaHasRules = exports.checkUnknownRules = exports.alwaysValidSchema = exports.toHash = void 0;
    var codegen_1 = require_codegen();
    var code_1 = require_code();
    function toHash(arr) {
      const hash = {};
      for (const item of arr)
        hash[item] = true;
      return hash;
    }
    exports.toHash = toHash;
    function alwaysValidSchema(it, schema) {
      if (typeof schema == "boolean")
        return schema;
      if (Object.keys(schema).length === 0)
        return true;
      checkUnknownRules(it, schema);
      return !schemaHasRules(schema, it.self.RULES.all);
    }
    exports.alwaysValidSchema = alwaysValidSchema;
    function checkUnknownRules(it, schema = it.schema) {
      const { opts, self } = it;
      if (!opts.strictSchema)
        return;
      if (typeof schema === "boolean")
        return;
      const rules = self.RULES.keywords;
      for (const key in schema) {
        if (!rules[key])
          checkStrictMode(it, `unknown keyword: "${key}"`);
      }
    }
    exports.checkUnknownRules = checkUnknownRules;
    function schemaHasRules(schema, rules) {
      if (typeof schema == "boolean")
        return !schema;
      for (const key in schema)
        if (rules[key])
          return true;
      return false;
    }
    exports.schemaHasRules = schemaHasRules;
    function schemaHasRulesButRef(schema, RULES) {
      if (typeof schema == "boolean")
        return !schema;
      for (const key in schema)
        if (key !== "$ref" && RULES.all[key])
          return true;
      return false;
    }
    exports.schemaHasRulesButRef = schemaHasRulesButRef;
    function schemaRefOrVal({ topSchemaRef, schemaPath }, schema, keyword, $data) {
      if (!$data) {
        if (typeof schema == "number" || typeof schema == "boolean")
          return schema;
        if (typeof schema == "string")
          return (0, codegen_1._)`${schema}`;
      }
      return (0, codegen_1._)`${topSchemaRef}${schemaPath}${(0, codegen_1.getProperty)(keyword)}`;
    }
    exports.schemaRefOrVal = schemaRefOrVal;
    function unescapeFragment(str) {
      return unescapeJsonPointer(decodeURIComponent(str));
    }
    exports.unescapeFragment = unescapeFragment;
    function escapeFragment(str) {
      return encodeURIComponent(escapeJsonPointer(str));
    }
    exports.escapeFragment = escapeFragment;
    function escapeJsonPointer(str) {
      if (typeof str == "number")
        return `${str}`;
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    exports.escapeJsonPointer = escapeJsonPointer;
    function unescapeJsonPointer(str) {
      return str.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    exports.unescapeJsonPointer = unescapeJsonPointer;
    function eachItem(xs, f2) {
      if (Array.isArray(xs)) {
        for (const x2 of xs)
          f2(x2);
      } else {
        f2(xs);
      }
    }
    exports.eachItem = eachItem;
    function makeMergeEvaluated({ mergeNames, mergeToName, mergeValues: mergeValues2, resultToName }) {
      return (gen, from, to, toName) => {
        const res = to === void 0 ? from : to instanceof codegen_1.Name ? (from instanceof codegen_1.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen_1.Name ? (mergeToName(gen, to, from), from) : mergeValues2(from, to);
        return toName === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
      };
    }
    exports.mergeEvaluated = {
      props: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => {
          gen.if((0, codegen_1._)`${from} === true`, () => gen.assign(to, true), () => gen.assign(to, (0, codegen_1._)`${to} || {}`).code((0, codegen_1._)`Object.assign(${to}, ${from})`));
        }),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => {
          if (from === true) {
            gen.assign(to, true);
          } else {
            gen.assign(to, (0, codegen_1._)`${to} || {}`);
            setEvaluated(gen, to, from);
          }
        }),
        mergeValues: (from, to) => from === true ? true : { ...from, ...to },
        resultToName: evaluatedPropsToName
      }),
      items: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => gen.assign(to, (0, codegen_1._)`${from} === true ? true : ${to} > ${from} ? ${to} : ${from}`)),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => gen.assign(to, from === true ? true : (0, codegen_1._)`${to} > ${from} ? ${to} : ${from}`)),
        mergeValues: (from, to) => from === true ? true : Math.max(from, to),
        resultToName: (gen, items) => gen.var("items", items)
      })
    };
    function evaluatedPropsToName(gen, ps) {
      if (ps === true)
        return gen.var("props", true);
      const props = gen.var("props", (0, codegen_1._)`{}`);
      if (ps !== void 0)
        setEvaluated(gen, props, ps);
      return props;
    }
    exports.evaluatedPropsToName = evaluatedPropsToName;
    function setEvaluated(gen, props, ps) {
      Object.keys(ps).forEach((p2) => gen.assign((0, codegen_1._)`${props}${(0, codegen_1.getProperty)(p2)}`, true));
    }
    exports.setEvaluated = setEvaluated;
    var snippets = {};
    function useFunc(gen, f2) {
      return gen.scopeValue("func", {
        ref: f2,
        code: snippets[f2.code] || (snippets[f2.code] = new code_1._Code(f2.code))
      });
    }
    exports.useFunc = useFunc;
    var Type;
    (function(Type2) {
      Type2[Type2["Num"] = 0] = "Num";
      Type2[Type2["Str"] = 1] = "Str";
    })(Type || (exports.Type = Type = {}));
    function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
      if (dataProp instanceof codegen_1.Name) {
        const isNumber = dataPropType === Type.Num;
        return jsPropertySyntax ? isNumber ? (0, codegen_1._)`"[" + ${dataProp} + "]"` : (0, codegen_1._)`"['" + ${dataProp} + "']"` : isNumber ? (0, codegen_1._)`"/" + ${dataProp}` : (0, codegen_1._)`"/" + ${dataProp}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
    }
    exports.getErrorPath = getErrorPath;
    function checkStrictMode(it, msg, mode = it.opts.strictSchema) {
      if (!mode)
        return;
      msg = `strict mode: ${msg}`;
      if (mode === true)
        throw new Error(msg);
      it.self.logger.warn(msg);
    }
    exports.checkStrictMode = checkStrictMode;
  }
});

// node_modules/ajv/dist/compile/names.js
var require_names = __commonJS({
  "node_modules/ajv/dist/compile/names.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var names = {
      // validation function arguments
      data: new codegen_1.Name("data"),
      // data passed to validation function
      // args passed from referencing schema
      valCxt: new codegen_1.Name("valCxt"),
      // validation/data context - should not be used directly, it is destructured to the names below
      instancePath: new codegen_1.Name("instancePath"),
      parentData: new codegen_1.Name("parentData"),
      parentDataProperty: new codegen_1.Name("parentDataProperty"),
      rootData: new codegen_1.Name("rootData"),
      // root data - same as the data passed to the first/top validation function
      dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
      // used to support recursiveRef and dynamicRef
      // function scoped variables
      vErrors: new codegen_1.Name("vErrors"),
      // null or array of validation errors
      errors: new codegen_1.Name("errors"),
      // counter of validation errors
      this: new codegen_1.Name("this"),
      // "globals"
      self: new codegen_1.Name("self"),
      scope: new codegen_1.Name("scope"),
      // JTD serialize/parse name for JSON string and position
      json: new codegen_1.Name("json"),
      jsonPos: new codegen_1.Name("jsonPos"),
      jsonLen: new codegen_1.Name("jsonLen"),
      jsonPart: new codegen_1.Name("jsonPart")
    };
    exports.default = names;
  }
});

// node_modules/ajv/dist/compile/errors.js
var require_errors = __commonJS({
  "node_modules/ajv/dist/compile/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var names_1 = require_names();
    exports.keywordError = {
      message: ({ keyword }) => (0, codegen_1.str)`must pass "${keyword}" keyword validation`
    };
    exports.keyword$DataError = {
      message: ({ keyword, schemaType }) => schemaType ? (0, codegen_1.str)`"${keyword}" keyword must be ${schemaType} ($data)` : (0, codegen_1.str)`"${keyword}" keyword is invalid ($data)`
    };
    function reportError(cxt, error = exports.keywordError, errorPaths, overrideAllErrors) {
      const { it } = cxt;
      const { gen, compositeRule, allErrors } = it;
      const errObj = errorObjectCode(cxt, error, errorPaths);
      if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) {
        addError(gen, errObj);
      } else {
        returnErrors(it, (0, codegen_1._)`[${errObj}]`);
      }
    }
    exports.reportError = reportError;
    function reportExtraError(cxt, error = exports.keywordError, errorPaths) {
      const { it } = cxt;
      const { gen, compositeRule, allErrors } = it;
      const errObj = errorObjectCode(cxt, error, errorPaths);
      addError(gen, errObj);
      if (!(compositeRule || allErrors)) {
        returnErrors(it, names_1.default.vErrors);
      }
    }
    exports.reportExtraError = reportExtraError;
    function resetErrorsCount(gen, errsCount) {
      gen.assign(names_1.default.errors, errsCount);
      gen.if((0, codegen_1._)`${names_1.default.vErrors} !== null`, () => gen.if(errsCount, () => gen.assign((0, codegen_1._)`${names_1.default.vErrors}.length`, errsCount), () => gen.assign(names_1.default.vErrors, null)));
    }
    exports.resetErrorsCount = resetErrorsCount;
    function extendErrors({ gen, keyword, schemaValue, data, errsCount, it }) {
      if (errsCount === void 0)
        throw new Error("ajv implementation error");
      const err = gen.name("err");
      gen.forRange("i", errsCount, names_1.default.errors, (i2) => {
        gen.const(err, (0, codegen_1._)`${names_1.default.vErrors}[${i2}]`);
        gen.if((0, codegen_1._)`${err}.instancePath === undefined`, () => gen.assign((0, codegen_1._)`${err}.instancePath`, (0, codegen_1.strConcat)(names_1.default.instancePath, it.errorPath)));
        gen.assign((0, codegen_1._)`${err}.schemaPath`, (0, codegen_1.str)`${it.errSchemaPath}/${keyword}`);
        if (it.opts.verbose) {
          gen.assign((0, codegen_1._)`${err}.schema`, schemaValue);
          gen.assign((0, codegen_1._)`${err}.data`, data);
        }
      });
    }
    exports.extendErrors = extendErrors;
    function addError(gen, errObj) {
      const err = gen.const("err", errObj);
      gen.if((0, codegen_1._)`${names_1.default.vErrors} === null`, () => gen.assign(names_1.default.vErrors, (0, codegen_1._)`[${err}]`), (0, codegen_1._)`${names_1.default.vErrors}.push(${err})`);
      gen.code((0, codegen_1._)`${names_1.default.errors}++`);
    }
    function returnErrors(it, errs) {
      const { gen, validateName, schemaEnv } = it;
      if (schemaEnv.$async) {
        gen.throw((0, codegen_1._)`new ${it.ValidationError}(${errs})`);
      } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, errs);
        gen.return(false);
      }
    }
    var E2 = {
      keyword: new codegen_1.Name("keyword"),
      schemaPath: new codegen_1.Name("schemaPath"),
      // also used in JTD errors
      params: new codegen_1.Name("params"),
      propertyName: new codegen_1.Name("propertyName"),
      message: new codegen_1.Name("message"),
      schema: new codegen_1.Name("schema"),
      parentSchema: new codegen_1.Name("parentSchema")
    };
    function errorObjectCode(cxt, error, errorPaths) {
      const { createErrors } = cxt.it;
      if (createErrors === false)
        return (0, codegen_1._)`{}`;
      return errorObject(cxt, error, errorPaths);
    }
    function errorObject(cxt, error, errorPaths = {}) {
      const { gen, it } = cxt;
      const keyValues = [
        errorInstancePath(it, errorPaths),
        errorSchemaPath(cxt, errorPaths)
      ];
      extraErrorProps(cxt, error, keyValues);
      return gen.object(...keyValues);
    }
    function errorInstancePath({ errorPath }, { instancePath }) {
      const instPath = instancePath ? (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(instancePath, util_1.Type.Str)}` : errorPath;
      return [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, instPath)];
    }
    function errorSchemaPath({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
      let schPath = parentSchema ? errSchemaPath : (0, codegen_1.str)`${errSchemaPath}/${keyword}`;
      if (schemaPath) {
        schPath = (0, codegen_1.str)`${schPath}${(0, util_1.getErrorPath)(schemaPath, util_1.Type.Str)}`;
      }
      return [E2.schemaPath, schPath];
    }
    function extraErrorProps(cxt, { params, message }, keyValues) {
      const { keyword, data, schemaValue, it } = cxt;
      const { opts, propertyName, topSchemaRef, schemaPath } = it;
      keyValues.push([E2.keyword, keyword], [E2.params, typeof params == "function" ? params(cxt) : params || (0, codegen_1._)`{}`]);
      if (opts.messages) {
        keyValues.push([E2.message, typeof message == "function" ? message(cxt) : message]);
      }
      if (opts.verbose) {
        keyValues.push([E2.schema, schemaValue], [E2.parentSchema, (0, codegen_1._)`${topSchemaRef}${schemaPath}`], [names_1.default.data, data]);
      }
      if (propertyName)
        keyValues.push([E2.propertyName, propertyName]);
    }
  }
});

// node_modules/ajv/dist/compile/validate/boolSchema.js
var require_boolSchema = __commonJS({
  "node_modules/ajv/dist/compile/validate/boolSchema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolOrEmptySchema = exports.topBoolOrEmptySchema = void 0;
    var errors_1 = require_errors();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var boolError = {
      message: "boolean schema is false"
    };
    function topBoolOrEmptySchema(it) {
      const { gen, schema, validateName } = it;
      if (schema === false) {
        falseSchemaError(it, false);
      } else if (typeof schema == "object" && schema.$async === true) {
        gen.return(names_1.default.data);
      } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, null);
        gen.return(true);
      }
    }
    exports.topBoolOrEmptySchema = topBoolOrEmptySchema;
    function boolOrEmptySchema(it, valid) {
      const { gen, schema } = it;
      if (schema === false) {
        gen.var(valid, false);
        falseSchemaError(it);
      } else {
        gen.var(valid, true);
      }
    }
    exports.boolOrEmptySchema = boolOrEmptySchema;
    function falseSchemaError(it, overrideAllErrors) {
      const { gen, data } = it;
      const cxt = {
        gen,
        keyword: "false schema",
        data,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it
      };
      (0, errors_1.reportError)(cxt, boolError, void 0, overrideAllErrors);
    }
  }
});

// node_modules/ajv/dist/compile/rules.js
var require_rules = __commonJS({
  "node_modules/ajv/dist/compile/rules.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRules = exports.isJSONType = void 0;
    var _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
    var jsonTypes = new Set(_jsonTypes);
    function isJSONType(x2) {
      return typeof x2 == "string" && jsonTypes.has(x2);
    }
    exports.isJSONType = isJSONType;
    function getRules() {
      const groups = {
        number: { type: "number", rules: [] },
        string: { type: "string", rules: [] },
        array: { type: "array", rules: [] },
        object: { type: "object", rules: [] }
      };
      return {
        types: { ...groups, integer: true, boolean: true, null: true },
        rules: [{ rules: [] }, groups.number, groups.string, groups.array, groups.object],
        post: { rules: [] },
        all: {},
        keywords: {}
      };
    }
    exports.getRules = getRules;
  }
});

// node_modules/ajv/dist/compile/validate/applicability.js
var require_applicability = __commonJS({
  "node_modules/ajv/dist/compile/validate/applicability.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shouldUseRule = exports.shouldUseGroup = exports.schemaHasRulesForType = void 0;
    function schemaHasRulesForType({ schema, self }, type) {
      const group = self.RULES.types[type];
      return group && group !== true && shouldUseGroup(schema, group);
    }
    exports.schemaHasRulesForType = schemaHasRulesForType;
    function shouldUseGroup(schema, group) {
      return group.rules.some((rule) => shouldUseRule(schema, rule));
    }
    exports.shouldUseGroup = shouldUseGroup;
    function shouldUseRule(schema, rule) {
      var _a;
      return schema[rule.keyword] !== void 0 || ((_a = rule.definition.implements) === null || _a === void 0 ? void 0 : _a.some((kwd) => schema[kwd] !== void 0));
    }
    exports.shouldUseRule = shouldUseRule;
  }
});

// node_modules/ajv/dist/compile/validate/dataType.js
var require_dataType = __commonJS({
  "node_modules/ajv/dist/compile/validate/dataType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = void 0;
    var rules_1 = require_rules();
    var applicability_1 = require_applicability();
    var errors_1 = require_errors();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var DataType;
    (function(DataType2) {
      DataType2[DataType2["Correct"] = 0] = "Correct";
      DataType2[DataType2["Wrong"] = 1] = "Wrong";
    })(DataType || (exports.DataType = DataType = {}));
    function getSchemaTypes(schema) {
      const types = getJSONTypes(schema.type);
      const hasNull = types.includes("null");
      if (hasNull) {
        if (schema.nullable === false)
          throw new Error("type: null contradicts nullable: false");
      } else {
        if (!types.length && schema.nullable !== void 0) {
          throw new Error('"nullable" cannot be used without "type"');
        }
        if (schema.nullable === true)
          types.push("null");
      }
      return types;
    }
    exports.getSchemaTypes = getSchemaTypes;
    function getJSONTypes(ts) {
      const types = Array.isArray(ts) ? ts : ts ? [ts] : [];
      if (types.every(rules_1.isJSONType))
        return types;
      throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
    }
    exports.getJSONTypes = getJSONTypes;
    function coerceAndCheckDataType(it, types) {
      const { gen, data, opts } = it;
      const coerceTo = coerceToTypes(types, opts.coerceTypes);
      const checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, applicability_1.schemaHasRulesForType)(it, types[0]));
      if (checkTypes) {
        const wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
        gen.if(wrongType, () => {
          if (coerceTo.length)
            coerceData(it, types, coerceTo);
          else
            reportTypeError(it);
        });
      }
      return checkTypes;
    }
    exports.coerceAndCheckDataType = coerceAndCheckDataType;
    var COERCIBLE = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
    function coerceToTypes(types, coerceTypes) {
      return coerceTypes ? types.filter((t) => COERCIBLE.has(t) || coerceTypes === "array" && t === "array") : [];
    }
    function coerceData(it, types, coerceTo) {
      const { gen, data, opts } = it;
      const dataType = gen.let("dataType", (0, codegen_1._)`typeof ${data}`);
      const coerced = gen.let("coerced", (0, codegen_1._)`undefined`);
      if (opts.coerceTypes === "array") {
        gen.if((0, codegen_1._)`${dataType} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, () => gen.assign(data, (0, codegen_1._)`${data}[0]`).assign(dataType, (0, codegen_1._)`typeof ${data}`).if(checkDataTypes(types, data, opts.strictNumbers), () => gen.assign(coerced, data)));
      }
      gen.if((0, codegen_1._)`${coerced} !== undefined`);
      for (const t of coerceTo) {
        if (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") {
          coerceSpecificType(t);
        }
      }
      gen.else();
      reportTypeError(it);
      gen.endIf();
      gen.if((0, codegen_1._)`${coerced} !== undefined`, () => {
        gen.assign(data, coerced);
        assignParentData(it, coerced);
      });
      function coerceSpecificType(t) {
        switch (t) {
          case "string":
            gen.elseIf((0, codegen_1._)`${dataType} == "number" || ${dataType} == "boolean"`).assign(coerced, (0, codegen_1._)`"" + ${data}`).elseIf((0, codegen_1._)`${data} === null`).assign(coerced, (0, codegen_1._)`""`);
            return;
          case "number":
            gen.elseIf((0, codegen_1._)`${dataType} == "boolean" || ${data} === null
              || (${dataType} == "string" && ${data} && ${data} == +${data})`).assign(coerced, (0, codegen_1._)`+${data}`);
            return;
          case "integer":
            gen.elseIf((0, codegen_1._)`${dataType} === "boolean" || ${data} === null
              || (${dataType} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`).assign(coerced, (0, codegen_1._)`+${data}`);
            return;
          case "boolean":
            gen.elseIf((0, codegen_1._)`${data} === "false" || ${data} === 0 || ${data} === null`).assign(coerced, false).elseIf((0, codegen_1._)`${data} === "true" || ${data} === 1`).assign(coerced, true);
            return;
          case "null":
            gen.elseIf((0, codegen_1._)`${data} === "" || ${data} === 0 || ${data} === false`);
            gen.assign(coerced, null);
            return;
          case "array":
            gen.elseIf((0, codegen_1._)`${dataType} === "string" || ${dataType} === "number"
              || ${dataType} === "boolean" || ${data} === null`).assign(coerced, (0, codegen_1._)`[${data}]`);
        }
      }
    }
    function assignParentData({ gen, parentData, parentDataProperty }, expr) {
      gen.if((0, codegen_1._)`${parentData} !== undefined`, () => gen.assign((0, codegen_1._)`${parentData}[${parentDataProperty}]`, expr));
    }
    function checkDataType(dataType, data, strictNums, correct = DataType.Correct) {
      const EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ;
      let cond;
      switch (dataType) {
        case "null":
          return (0, codegen_1._)`${data} ${EQ} null`;
        case "array":
          cond = (0, codegen_1._)`Array.isArray(${data})`;
          break;
        case "object":
          cond = (0, codegen_1._)`${data} && typeof ${data} == "object" && !Array.isArray(${data})`;
          break;
        case "integer":
          cond = numCond((0, codegen_1._)`!(${data} % 1) && !isNaN(${data})`);
          break;
        case "number":
          cond = numCond();
          break;
        default:
          return (0, codegen_1._)`typeof ${data} ${EQ} ${dataType}`;
      }
      return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
      function numCond(_cond = codegen_1.nil) {
        return (0, codegen_1.and)((0, codegen_1._)`typeof ${data} == "number"`, _cond, strictNums ? (0, codegen_1._)`isFinite(${data})` : codegen_1.nil);
      }
    }
    exports.checkDataType = checkDataType;
    function checkDataTypes(dataTypes, data, strictNums, correct) {
      if (dataTypes.length === 1) {
        return checkDataType(dataTypes[0], data, strictNums, correct);
      }
      let cond;
      const types = (0, util_1.toHash)(dataTypes);
      if (types.array && types.object) {
        const notObj = (0, codegen_1._)`typeof ${data} != "object"`;
        cond = types.null ? notObj : (0, codegen_1._)`!${data} || ${notObj}`;
        delete types.null;
        delete types.array;
        delete types.object;
      } else {
        cond = codegen_1.nil;
      }
      if (types.number)
        delete types.integer;
      for (const t in types)
        cond = (0, codegen_1.and)(cond, checkDataType(t, data, strictNums, correct));
      return cond;
    }
    exports.checkDataTypes = checkDataTypes;
    var typeError = {
      message: ({ schema }) => `must be ${schema}`,
      params: ({ schema, schemaValue }) => typeof schema == "string" ? (0, codegen_1._)`{type: ${schema}}` : (0, codegen_1._)`{type: ${schemaValue}}`
    };
    function reportTypeError(it) {
      const cxt = getTypeErrorContext(it);
      (0, errors_1.reportError)(cxt, typeError);
    }
    exports.reportTypeError = reportTypeError;
    function getTypeErrorContext(it) {
      const { gen, data, schema } = it;
      const schemaCode = (0, util_1.schemaRefOrVal)(it, schema, "type");
      return {
        gen,
        keyword: "type",
        data,
        schema: schema.type,
        schemaCode,
        schemaValue: schemaCode,
        parentSchema: schema,
        params: {},
        it
      };
    }
  }
});

// node_modules/ajv/dist/compile/validate/defaults.js
var require_defaults = __commonJS({
  "node_modules/ajv/dist/compile/validate/defaults.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assignDefaults = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    function assignDefaults(it, ty) {
      const { properties, items } = it.schema;
      if (ty === "object" && properties) {
        for (const key in properties) {
          assignDefault(it, key, properties[key].default);
        }
      } else if (ty === "array" && Array.isArray(items)) {
        items.forEach((sch, i2) => assignDefault(it, i2, sch.default));
      }
    }
    exports.assignDefaults = assignDefaults;
    function assignDefault(it, prop, defaultValue) {
      const { gen, compositeRule, data, opts } = it;
      if (defaultValue === void 0)
        return;
      const childData = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(prop)}`;
      if (compositeRule) {
        (0, util_1.checkStrictMode)(it, `default is ignored for: ${childData}`);
        return;
      }
      let condition = (0, codegen_1._)`${childData} === undefined`;
      if (opts.useDefaults === "empty") {
        condition = (0, codegen_1._)`${condition} || ${childData} === null || ${childData} === ""`;
      }
      gen.if(condition, (0, codegen_1._)`${childData} = ${(0, codegen_1.stringify)(defaultValue)}`);
    }
  }
});

// node_modules/ajv/dist/vocabularies/code.js
var require_code2 = __commonJS({
  "node_modules/ajv/dist/vocabularies/code.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateUnion = exports.validateArray = exports.usePattern = exports.callValidateCode = exports.schemaProperties = exports.allSchemaProperties = exports.noPropertyInData = exports.propertyInData = exports.isOwnProperty = exports.hasPropFunc = exports.reportMissingProp = exports.checkMissingProp = exports.checkReportMissingProp = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var names_1 = require_names();
    var util_2 = require_util();
    function checkReportMissingProp(cxt, prop) {
      const { gen, data, it } = cxt;
      gen.if(noPropertyInData(gen, data, prop, it.opts.ownProperties), () => {
        cxt.setParams({ missingProperty: (0, codegen_1._)`${prop}` }, true);
        cxt.error();
      });
    }
    exports.checkReportMissingProp = checkReportMissingProp;
    function checkMissingProp({ gen, data, it: { opts } }, properties, missing) {
      return (0, codegen_1.or)(...properties.map((prop) => (0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._)`${missing} = ${prop}`)));
    }
    exports.checkMissingProp = checkMissingProp;
    function reportMissingProp(cxt, missing) {
      cxt.setParams({ missingProperty: missing }, true);
      cxt.error();
    }
    exports.reportMissingProp = reportMissingProp;
    function hasPropFunc(gen) {
      return gen.scopeValue("func", {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref: Object.prototype.hasOwnProperty,
        code: (0, codegen_1._)`Object.prototype.hasOwnProperty`
      });
    }
    exports.hasPropFunc = hasPropFunc;
    function isOwnProperty(gen, data, property) {
      return (0, codegen_1._)`${hasPropFunc(gen)}.call(${data}, ${property})`;
    }
    exports.isOwnProperty = isOwnProperty;
    function propertyInData(gen, data, property, ownProperties) {
      const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} !== undefined`;
      return ownProperties ? (0, codegen_1._)`${cond} && ${isOwnProperty(gen, data, property)}` : cond;
    }
    exports.propertyInData = propertyInData;
    function noPropertyInData(gen, data, property, ownProperties) {
      const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} === undefined`;
      return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
    }
    exports.noPropertyInData = noPropertyInData;
    function allSchemaProperties(schemaMap) {
      return schemaMap ? Object.keys(schemaMap).filter((p2) => p2 !== "__proto__") : [];
    }
    exports.allSchemaProperties = allSchemaProperties;
    function schemaProperties(it, schemaMap) {
      return allSchemaProperties(schemaMap).filter((p2) => !(0, util_1.alwaysValidSchema)(it, schemaMap[p2]));
    }
    exports.schemaProperties = schemaProperties;
    function callValidateCode({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, func, context, passSchema) {
      const dataAndSchema = passSchema ? (0, codegen_1._)`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data;
      const valCxt = [
        [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, errorPath)],
        [names_1.default.parentData, it.parentData],
        [names_1.default.parentDataProperty, it.parentDataProperty],
        [names_1.default.rootData, names_1.default.rootData]
      ];
      if (it.opts.dynamicRef)
        valCxt.push([names_1.default.dynamicAnchors, names_1.default.dynamicAnchors]);
      const args = (0, codegen_1._)`${dataAndSchema}, ${gen.object(...valCxt)}`;
      return context !== codegen_1.nil ? (0, codegen_1._)`${func}.call(${context}, ${args})` : (0, codegen_1._)`${func}(${args})`;
    }
    exports.callValidateCode = callValidateCode;
    var newRegExp = (0, codegen_1._)`new RegExp`;
    function usePattern({ gen, it: { opts } }, pattern) {
      const u2 = opts.unicodeRegExp ? "u" : "";
      const { regExp } = opts.code;
      const rx = regExp(pattern, u2);
      return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: (0, codegen_1._)`${regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp)}(${pattern}, ${u2})`
      });
    }
    exports.usePattern = usePattern;
    function validateArray(cxt) {
      const { gen, data, keyword, it } = cxt;
      const valid = gen.name("valid");
      if (it.allErrors) {
        const validArr = gen.let("valid", true);
        validateItems(() => gen.assign(validArr, false));
        return validArr;
      }
      gen.var(valid, true);
      validateItems(() => gen.break());
      return valid;
      function validateItems(notValid) {
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        gen.forRange("i", 0, len, (i2) => {
          cxt.subschema({
            keyword,
            dataProp: i2,
            dataPropType: util_1.Type.Num
          }, valid);
          gen.if((0, codegen_1.not)(valid), notValid);
        });
      }
    }
    exports.validateArray = validateArray;
    function validateUnion(cxt) {
      const { gen, schema, keyword, it } = cxt;
      if (!Array.isArray(schema))
        throw new Error("ajv implementation error");
      const alwaysValid = schema.some((sch) => (0, util_1.alwaysValidSchema)(it, sch));
      if (alwaysValid && !it.opts.unevaluated)
        return;
      const valid = gen.let("valid", false);
      const schValid = gen.name("_valid");
      gen.block(() => schema.forEach((_sch, i2) => {
        const schCxt = cxt.subschema({
          keyword,
          schemaProp: i2,
          compositeRule: true
        }, schValid);
        gen.assign(valid, (0, codegen_1._)`${valid} || ${schValid}`);
        const merged = cxt.mergeValidEvaluated(schCxt, schValid);
        if (!merged)
          gen.if((0, codegen_1.not)(valid));
      }));
      cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
    }
    exports.validateUnion = validateUnion;
  }
});

// node_modules/ajv/dist/compile/validate/keyword.js
var require_keyword = __commonJS({
  "node_modules/ajv/dist/compile/validate/keyword.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = void 0;
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var code_1 = require_code2();
    var errors_1 = require_errors();
    function macroKeywordCode(cxt, def) {
      const { gen, keyword, schema, parentSchema, it } = cxt;
      const macroSchema = def.macro.call(it.self, schema, parentSchema, it);
      const schemaRef = useKeyword(gen, keyword, macroSchema);
      if (it.opts.validateSchema !== false)
        it.self.validateSchema(macroSchema, true);
      const valid = gen.name("valid");
      cxt.subschema({
        schema: macroSchema,
        schemaPath: codegen_1.nil,
        errSchemaPath: `${it.errSchemaPath}/${keyword}`,
        topSchemaRef: schemaRef,
        compositeRule: true
      }, valid);
      cxt.pass(valid, () => cxt.error(true));
    }
    exports.macroKeywordCode = macroKeywordCode;
    function funcKeywordCode(cxt, def) {
      var _a;
      const { gen, keyword, schema, parentSchema, $data, it } = cxt;
      checkAsyncKeyword(it, def);
      const validate = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
      const validateRef = useKeyword(gen, keyword, validate);
      const valid = gen.let("valid");
      cxt.block$data(valid, validateKeyword);
      cxt.ok((_a = def.valid) !== null && _a !== void 0 ? _a : valid);
      function validateKeyword() {
        if (def.errors === false) {
          assignValid();
          if (def.modifying)
            modifyData(cxt);
          reportErrs(() => cxt.error());
        } else {
          const ruleErrs = def.async ? validateAsync() : validateSync();
          if (def.modifying)
            modifyData(cxt);
          reportErrs(() => addErrs(cxt, ruleErrs));
        }
      }
      function validateAsync() {
        const ruleErrs = gen.let("ruleErrs", null);
        gen.try(() => assignValid((0, codegen_1._)`await `), (e2) => gen.assign(valid, false).if((0, codegen_1._)`${e2} instanceof ${it.ValidationError}`, () => gen.assign(ruleErrs, (0, codegen_1._)`${e2}.errors`), () => gen.throw(e2)));
        return ruleErrs;
      }
      function validateSync() {
        const validateErrs = (0, codegen_1._)`${validateRef}.errors`;
        gen.assign(validateErrs, null);
        assignValid(codegen_1.nil);
        return validateErrs;
      }
      function assignValid(_await = def.async ? (0, codegen_1._)`await ` : codegen_1.nil) {
        const passCxt = it.opts.passContext ? names_1.default.this : names_1.default.self;
        const passSchema = !("compile" in def && !$data || def.schema === false);
        gen.assign(valid, (0, codegen_1._)`${_await}${(0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)}`, def.modifying);
      }
      function reportErrs(errors) {
        var _a2;
        gen.if((0, codegen_1.not)((_a2 = def.valid) !== null && _a2 !== void 0 ? _a2 : valid), errors);
      }
    }
    exports.funcKeywordCode = funcKeywordCode;
    function modifyData(cxt) {
      const { gen, data, it } = cxt;
      gen.if(it.parentData, () => gen.assign(data, (0, codegen_1._)`${it.parentData}[${it.parentDataProperty}]`));
    }
    function addErrs(cxt, errs) {
      const { gen } = cxt;
      gen.if((0, codegen_1._)`Array.isArray(${errs})`, () => {
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`).assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
        (0, errors_1.extendErrors)(cxt);
      }, () => cxt.error());
    }
    function checkAsyncKeyword({ schemaEnv }, def) {
      if (def.async && !schemaEnv.$async)
        throw new Error("async keyword in sync schema");
    }
    function useKeyword(gen, keyword, result) {
      if (result === void 0)
        throw new Error(`keyword "${keyword}" failed to compile`);
      return gen.scopeValue("keyword", typeof result == "function" ? { ref: result } : { ref: result, code: (0, codegen_1.stringify)(result) });
    }
    function validSchemaType(schema, schemaType, allowUndefined = false) {
      return !schemaType.length || schemaType.some((st) => st === "array" ? Array.isArray(schema) : st === "object" ? schema && typeof schema == "object" && !Array.isArray(schema) : typeof schema == st || allowUndefined && typeof schema == "undefined");
    }
    exports.validSchemaType = validSchemaType;
    function validateKeywordUsage({ schema, opts, self, errSchemaPath }, def, keyword) {
      if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
        throw new Error("ajv implementation error");
      }
      const deps = def.dependencies;
      if (deps === null || deps === void 0 ? void 0 : deps.some((kwd) => !Object.prototype.hasOwnProperty.call(schema, kwd))) {
        throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`);
      }
      if (def.validateSchema) {
        const valid = def.validateSchema(schema[keyword]);
        if (!valid) {
          const msg = `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` + self.errorsText(def.validateSchema.errors);
          if (opts.validateSchema === "log")
            self.logger.error(msg);
          else
            throw new Error(msg);
        }
      }
    }
    exports.validateKeywordUsage = validateKeywordUsage;
  }
});

// node_modules/ajv/dist/compile/validate/subschema.js
var require_subschema = __commonJS({
  "node_modules/ajv/dist/compile/validate/subschema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extendSubschemaMode = exports.extendSubschemaData = exports.getSubschema = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    function getSubschema(it, { keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef }) {
      if (keyword !== void 0 && schema !== void 0) {
        throw new Error('both "keyword" and "schema" passed, only one allowed');
      }
      if (keyword !== void 0) {
        const sch = it.schema[keyword];
        return schemaProp === void 0 ? {
          schema: sch,
          schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}`
        } : {
          schema: sch[schemaProp],
          schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}${(0, codegen_1.getProperty)(schemaProp)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}/${(0, util_1.escapeFragment)(schemaProp)}`
        };
      }
      if (schema !== void 0) {
        if (schemaPath === void 0 || errSchemaPath === void 0 || topSchemaRef === void 0) {
          throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        }
        return {
          schema,
          schemaPath,
          topSchemaRef,
          errSchemaPath
        };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }
    exports.getSubschema = getSubschema;
    function extendSubschemaData(subschema, it, { dataProp, dataPropType: dpType, data, dataTypes, propertyName }) {
      if (data !== void 0 && dataProp !== void 0) {
        throw new Error('both "data" and "dataProp" passed, only one allowed');
      }
      const { gen } = it;
      if (dataProp !== void 0) {
        const { errorPath, dataPathArr, opts } = it;
        const nextData = gen.let("data", (0, codegen_1._)`${it.data}${(0, codegen_1.getProperty)(dataProp)}`, true);
        dataContextProps(nextData);
        subschema.errorPath = (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax)}`;
        subschema.parentDataProperty = (0, codegen_1._)`${dataProp}`;
        subschema.dataPathArr = [...dataPathArr, subschema.parentDataProperty];
      }
      if (data !== void 0) {
        const nextData = data instanceof codegen_1.Name ? data : gen.let("data", data, true);
        dataContextProps(nextData);
        if (propertyName !== void 0)
          subschema.propertyName = propertyName;
      }
      if (dataTypes)
        subschema.dataTypes = dataTypes;
      function dataContextProps(_nextData) {
        subschema.data = _nextData;
        subschema.dataLevel = it.dataLevel + 1;
        subschema.dataTypes = [];
        it.definedProperties = /* @__PURE__ */ new Set();
        subschema.parentData = it.data;
        subschema.dataNames = [...it.dataNames, _nextData];
      }
    }
    exports.extendSubschemaData = extendSubschemaData;
    function extendSubschemaMode(subschema, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
      if (compositeRule !== void 0)
        subschema.compositeRule = compositeRule;
      if (createErrors !== void 0)
        subschema.createErrors = createErrors;
      if (allErrors !== void 0)
        subschema.allErrors = allErrors;
      subschema.jtdDiscriminator = jtdDiscriminator;
      subschema.jtdMetadata = jtdMetadata;
    }
    exports.extendSubschemaMode = extendSubschemaMode;
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a5, b2) {
      if (a5 === b2) return true;
      if (a5 && b2 && typeof a5 == "object" && typeof b2 == "object") {
        if (a5.constructor !== b2.constructor) return false;
        var length, i2, keys;
        if (Array.isArray(a5)) {
          length = a5.length;
          if (length != b2.length) return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal(a5[i2], b2[i2])) return false;
          return true;
        }
        if (a5.constructor === RegExp) return a5.source === b2.source && a5.flags === b2.flags;
        if (a5.valueOf !== Object.prototype.valueOf) return a5.valueOf() === b2.valueOf();
        if (a5.toString !== Object.prototype.toString) return a5.toString() === b2.toString();
        keys = Object.keys(a5);
        length = keys.length;
        if (length !== Object.keys(b2).length) return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return false;
        for (i2 = length; i2-- !== 0; ) {
          var key = keys[i2];
          if (!equal(a5[key], b2[key])) return false;
        }
        return true;
      }
      return a5 !== a5 && b2 !== b2;
    };
  }
});

// node_modules/json-schema-traverse/index.js
var require_json_schema_traverse = __commonJS({
  "node_modules/json-schema-traverse/index.js"(exports, module) {
    "use strict";
    var traverse = module.exports = function(schema, opts, cb) {
      if (typeof opts == "function") {
        cb = opts;
        opts = {};
      }
      cb = opts.cb || cb;
      var pre = typeof cb == "function" ? cb : cb.pre || function() {
      };
      var post = cb.post || function() {
      };
      _traverse(opts, pre, post, schema, "", schema);
    };
    traverse.keywords = {
      additionalItems: true,
      items: true,
      contains: true,
      additionalProperties: true,
      propertyNames: true,
      not: true,
      if: true,
      then: true,
      else: true
    };
    traverse.arrayKeywords = {
      items: true,
      allOf: true,
      anyOf: true,
      oneOf: true
    };
    traverse.propsKeywords = {
      $defs: true,
      definitions: true,
      properties: true,
      patternProperties: true,
      dependencies: true
    };
    traverse.skipKeywords = {
      default: true,
      enum: true,
      const: true,
      required: true,
      maximum: true,
      minimum: true,
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: true,
      maxLength: true,
      minLength: true,
      pattern: true,
      format: true,
      maxItems: true,
      minItems: true,
      uniqueItems: true,
      maxProperties: true,
      minProperties: true
    };
    function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (schema && typeof schema == "object" && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for (var key in schema) {
          var sch = schema[key];
          if (Array.isArray(sch)) {
            if (key in traverse.arrayKeywords) {
              for (var i2 = 0; i2 < sch.length; i2++)
                _traverse(opts, pre, post, sch[i2], jsonPtr + "/" + key + "/" + i2, rootSchema, jsonPtr, key, schema, i2);
            }
          } else if (key in traverse.propsKeywords) {
            if (sch && typeof sch == "object") {
              for (var prop in sch)
                _traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
            }
          } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
            _traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
          }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      }
    }
    function escapeJsonPtr(str) {
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }
});

// node_modules/ajv/dist/compile/resolve.js
var require_resolve = __commonJS({
  "node_modules/ajv/dist/compile/resolve.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = void 0;
    var util_1 = require_util();
    var equal = require_fast_deep_equal();
    var traverse = require_json_schema_traverse();
    var SIMPLE_INLINED = /* @__PURE__ */ new Set([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum",
      "const"
    ]);
    function inlineRef(schema, limit = true) {
      if (typeof schema == "boolean")
        return true;
      if (limit === true)
        return !hasRef(schema);
      if (!limit)
        return false;
      return countKeys(schema) <= limit;
    }
    exports.inlineRef = inlineRef;
    var REF_KEYWORDS = /* @__PURE__ */ new Set([
      "$ref",
      "$recursiveRef",
      "$recursiveAnchor",
      "$dynamicRef",
      "$dynamicAnchor"
    ]);
    function hasRef(schema) {
      for (const key in schema) {
        if (REF_KEYWORDS.has(key))
          return true;
        const sch = schema[key];
        if (Array.isArray(sch) && sch.some(hasRef))
          return true;
        if (typeof sch == "object" && hasRef(sch))
          return true;
      }
      return false;
    }
    function countKeys(schema) {
      let count = 0;
      for (const key in schema) {
        if (key === "$ref")
          return Infinity;
        count++;
        if (SIMPLE_INLINED.has(key))
          continue;
        if (typeof schema[key] == "object") {
          (0, util_1.eachItem)(schema[key], (sch) => count += countKeys(sch));
        }
        if (count === Infinity)
          return Infinity;
      }
      return count;
    }
    function getFullPath(resolver, id = "", normalize) {
      if (normalize !== false)
        id = normalizeId(id);
      const p2 = resolver.parse(id);
      return _getFullPath(resolver, p2);
    }
    exports.getFullPath = getFullPath;
    function _getFullPath(resolver, p2) {
      const serialized = resolver.serialize(p2);
      return serialized.split("#")[0] + "#";
    }
    exports._getFullPath = _getFullPath;
    var TRAILING_SLASH_HASH = /#\/?$/;
    function normalizeId(id) {
      return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
    }
    exports.normalizeId = normalizeId;
    function resolveUrl(resolver, baseId, id) {
      id = normalizeId(id);
      return resolver.resolve(baseId, id);
    }
    exports.resolveUrl = resolveUrl;
    var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
    function getSchemaRefs(schema, baseId) {
      if (typeof schema == "boolean")
        return {};
      const { schemaId, uriResolver } = this.opts;
      const schId = normalizeId(schema[schemaId] || baseId);
      const baseIds = { "": schId };
      const pathPrefix = getFullPath(uriResolver, schId, false);
      const localRefs = {};
      const schemaRefs = /* @__PURE__ */ new Set();
      traverse(schema, { allKeys: true }, (sch, jsonPtr, _, parentJsonPtr) => {
        if (parentJsonPtr === void 0)
          return;
        const fullPath = pathPrefix + jsonPtr;
        let innerBaseId = baseIds[parentJsonPtr];
        if (typeof sch[schemaId] == "string")
          innerBaseId = addRef.call(this, sch[schemaId]);
        addAnchor.call(this, sch.$anchor);
        addAnchor.call(this, sch.$dynamicAnchor);
        baseIds[jsonPtr] = innerBaseId;
        function addRef(ref) {
          const _resolve = this.opts.uriResolver.resolve;
          ref = normalizeId(innerBaseId ? _resolve(innerBaseId, ref) : ref);
          if (schemaRefs.has(ref))
            throw ambiguos(ref);
          schemaRefs.add(ref);
          let schOrRef = this.refs[ref];
          if (typeof schOrRef == "string")
            schOrRef = this.refs[schOrRef];
          if (typeof schOrRef == "object") {
            checkAmbiguosRef(sch, schOrRef.schema, ref);
          } else if (ref !== normalizeId(fullPath)) {
            if (ref[0] === "#") {
              checkAmbiguosRef(sch, localRefs[ref], ref);
              localRefs[ref] = sch;
            } else {
              this.refs[ref] = fullPath;
            }
          }
          return ref;
        }
        function addAnchor(anchor) {
          if (typeof anchor == "string") {
            if (!ANCHOR.test(anchor))
              throw new Error(`invalid anchor "${anchor}"`);
            addRef.call(this, `#${anchor}`);
          }
        }
      });
      return localRefs;
      function checkAmbiguosRef(sch1, sch2, ref) {
        if (sch2 !== void 0 && !equal(sch1, sch2))
          throw ambiguos(ref);
      }
      function ambiguos(ref) {
        return new Error(`reference "${ref}" resolves to more than one schema`);
      }
    }
    exports.getSchemaRefs = getSchemaRefs;
  }
});

// node_modules/ajv/dist/compile/validate/index.js
var require_validate = __commonJS({
  "node_modules/ajv/dist/compile/validate/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getData = exports.KeywordCxt = exports.validateFunctionCode = void 0;
    var boolSchema_1 = require_boolSchema();
    var dataType_1 = require_dataType();
    var applicability_1 = require_applicability();
    var dataType_2 = require_dataType();
    var defaults_1 = require_defaults();
    var keyword_1 = require_keyword();
    var subschema_1 = require_subschema();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var resolve_1 = require_resolve();
    var util_1 = require_util();
    var errors_1 = require_errors();
    function validateFunctionCode(it) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          topSchemaObjCode(it);
          return;
        }
      }
      validateFunction(it, () => (0, boolSchema_1.topBoolOrEmptySchema)(it));
    }
    exports.validateFunctionCode = validateFunctionCode;
    function validateFunction({ gen, validateName, schema, schemaEnv, opts }, body) {
      if (opts.code.es5) {
        gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${names_1.default.valCxt}`, schemaEnv.$async, () => {
          gen.code((0, codegen_1._)`"use strict"; ${funcSourceUrl(schema, opts)}`);
          destructureValCxtES5(gen, opts);
          gen.code(body);
        });
      } else {
        gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, () => gen.code(funcSourceUrl(schema, opts)).code(body));
      }
    }
    function destructureValCxt(opts) {
      return (0, codegen_1._)`{${names_1.default.instancePath}="", ${names_1.default.parentData}, ${names_1.default.parentDataProperty}, ${names_1.default.rootData}=${names_1.default.data}${opts.dynamicRef ? (0, codegen_1._)`, ${names_1.default.dynamicAnchors}={}` : codegen_1.nil}}={}`;
    }
    function destructureValCxtES5(gen, opts) {
      gen.if(names_1.default.valCxt, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.instancePath}`);
        gen.var(names_1.default.parentData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentData}`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentDataProperty}`);
        gen.var(names_1.default.rootData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.rootData}`);
        if (opts.dynamicRef)
          gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.dynamicAnchors}`);
      }, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._)`""`);
        gen.var(names_1.default.parentData, (0, codegen_1._)`undefined`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`undefined`);
        gen.var(names_1.default.rootData, names_1.default.data);
        if (opts.dynamicRef)
          gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`{}`);
      });
    }
    function topSchemaObjCode(it) {
      const { schema, opts, gen } = it;
      validateFunction(it, () => {
        if (opts.$comment && schema.$comment)
          commentKeyword(it);
        checkNoDefault(it);
        gen.let(names_1.default.vErrors, null);
        gen.let(names_1.default.errors, 0);
        if (opts.unevaluated)
          resetEvaluated(it);
        typeAndKeywords(it);
        returnResults(it);
      });
      return;
    }
    function resetEvaluated(it) {
      const { gen, validateName } = it;
      it.evaluated = gen.const("evaluated", (0, codegen_1._)`${validateName}.evaluated`);
      gen.if((0, codegen_1._)`${it.evaluated}.dynamicProps`, () => gen.assign((0, codegen_1._)`${it.evaluated}.props`, (0, codegen_1._)`undefined`));
      gen.if((0, codegen_1._)`${it.evaluated}.dynamicItems`, () => gen.assign((0, codegen_1._)`${it.evaluated}.items`, (0, codegen_1._)`undefined`));
    }
    function funcSourceUrl(schema, opts) {
      const schId = typeof schema == "object" && schema[opts.schemaId];
      return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._)`/*# sourceURL=${schId} */` : codegen_1.nil;
    }
    function subschemaCode(it, valid) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          subSchemaObjCode(it, valid);
          return;
        }
      }
      (0, boolSchema_1.boolOrEmptySchema)(it, valid);
    }
    function schemaCxtHasRules({ schema, self }) {
      if (typeof schema == "boolean")
        return !schema;
      for (const key in schema)
        if (self.RULES.all[key])
          return true;
      return false;
    }
    function isSchemaObj(it) {
      return typeof it.schema != "boolean";
    }
    function subSchemaObjCode(it, valid) {
      const { schema, gen, opts } = it;
      if (opts.$comment && schema.$comment)
        commentKeyword(it);
      updateContext(it);
      checkAsyncSchema(it);
      const errsCount = gen.const("_errs", names_1.default.errors);
      typeAndKeywords(it, errsCount);
      gen.var(valid, (0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
    }
    function checkKeywords(it) {
      (0, util_1.checkUnknownRules)(it);
      checkRefsAndKeywords(it);
    }
    function typeAndKeywords(it, errsCount) {
      if (it.opts.jtd)
        return schemaKeywords(it, [], false, errsCount);
      const types = (0, dataType_1.getSchemaTypes)(it.schema);
      const checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it, types);
      schemaKeywords(it, types, !checkedTypes, errsCount);
    }
    function checkRefsAndKeywords(it) {
      const { schema, errSchemaPath, opts, self } = it;
      if (schema.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema, self.RULES)) {
        self.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
      }
    }
    function checkNoDefault(it) {
      const { schema, opts } = it;
      if (schema.default !== void 0 && opts.useDefaults && opts.strictSchema) {
        (0, util_1.checkStrictMode)(it, "default is ignored in the schema root");
      }
    }
    function updateContext(it) {
      const schId = it.schema[it.opts.schemaId];
      if (schId)
        it.baseId = (0, resolve_1.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
    }
    function checkAsyncSchema(it) {
      if (it.schema.$async && !it.schemaEnv.$async)
        throw new Error("async schema in sync schema");
    }
    function commentKeyword({ gen, schemaEnv, schema, errSchemaPath, opts }) {
      const msg = schema.$comment;
      if (opts.$comment === true) {
        gen.code((0, codegen_1._)`${names_1.default.self}.logger.log(${msg})`);
      } else if (typeof opts.$comment == "function") {
        const schemaPath = (0, codegen_1.str)`${errSchemaPath}/$comment`;
        const rootName = gen.scopeValue("root", { ref: schemaEnv.root });
        gen.code((0, codegen_1._)`${names_1.default.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`);
      }
    }
    function returnResults(it) {
      const { gen, schemaEnv, validateName, ValidationError, opts } = it;
      if (schemaEnv.$async) {
        gen.if((0, codegen_1._)`${names_1.default.errors} === 0`, () => gen.return(names_1.default.data), () => gen.throw((0, codegen_1._)`new ${ValidationError}(${names_1.default.vErrors})`));
      } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, names_1.default.vErrors);
        if (opts.unevaluated)
          assignEvaluated(it);
        gen.return((0, codegen_1._)`${names_1.default.errors} === 0`);
      }
    }
    function assignEvaluated({ gen, evaluated, props, items }) {
      if (props instanceof codegen_1.Name)
        gen.assign((0, codegen_1._)`${evaluated}.props`, props);
      if (items instanceof codegen_1.Name)
        gen.assign((0, codegen_1._)`${evaluated}.items`, items);
    }
    function schemaKeywords(it, types, typeErrors, errsCount) {
      const { gen, schema, data, allErrors, opts, self } = it;
      const { RULES } = self;
      if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema, RULES))) {
        gen.block(() => keywordCode(it, "$ref", RULES.all.$ref.definition));
        return;
      }
      if (!opts.jtd)
        checkStrictTypes(it, types);
      gen.block(() => {
        for (const group of RULES.rules)
          groupKeywords(group);
        groupKeywords(RULES.post);
      });
      function groupKeywords(group) {
        if (!(0, applicability_1.shouldUseGroup)(schema, group))
          return;
        if (group.type) {
          gen.if((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
          iterateKeywords(it, group);
          if (types.length === 1 && types[0] === group.type && typeErrors) {
            gen.else();
            (0, dataType_2.reportTypeError)(it);
          }
          gen.endIf();
        } else {
          iterateKeywords(it, group);
        }
        if (!allErrors)
          gen.if((0, codegen_1._)`${names_1.default.errors} === ${errsCount || 0}`);
      }
    }
    function iterateKeywords(it, group) {
      const { gen, schema, opts: { useDefaults } } = it;
      if (useDefaults)
        (0, defaults_1.assignDefaults)(it, group.type);
      gen.block(() => {
        for (const rule of group.rules) {
          if ((0, applicability_1.shouldUseRule)(schema, rule)) {
            keywordCode(it, rule.keyword, rule.definition, group.type);
          }
        }
      });
    }
    function checkStrictTypes(it, types) {
      if (it.schemaEnv.meta || !it.opts.strictTypes)
        return;
      checkContextTypes(it, types);
      if (!it.opts.allowUnionTypes)
        checkMultipleTypes(it, types);
      checkKeywordTypes(it, it.dataTypes);
    }
    function checkContextTypes(it, types) {
      if (!types.length)
        return;
      if (!it.dataTypes.length) {
        it.dataTypes = types;
        return;
      }
      types.forEach((t) => {
        if (!includesType(it.dataTypes, t)) {
          strictTypesError(it, `type "${t}" not allowed by context "${it.dataTypes.join(",")}"`);
        }
      });
      narrowSchemaTypes(it, types);
    }
    function checkMultipleTypes(it, ts) {
      if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
        strictTypesError(it, "use allowUnionTypes to allow union type keyword");
      }
    }
    function checkKeywordTypes(it, ts) {
      const rules = it.self.RULES.all;
      for (const keyword in rules) {
        const rule = rules[keyword];
        if (typeof rule == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
          const { type } = rule.definition;
          if (type.length && !type.some((t) => hasApplicableType(ts, t))) {
            strictTypesError(it, `missing type "${type.join(",")}" for keyword "${keyword}"`);
          }
        }
      }
    }
    function hasApplicableType(schTs, kwdT) {
      return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
    }
    function includesType(ts, t) {
      return ts.includes(t) || t === "integer" && ts.includes("number");
    }
    function narrowSchemaTypes(it, withTypes) {
      const ts = [];
      for (const t of it.dataTypes) {
        if (includesType(withTypes, t))
          ts.push(t);
        else if (withTypes.includes("integer") && t === "number")
          ts.push("integer");
      }
      it.dataTypes = ts;
    }
    function strictTypesError(it, msg) {
      const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
      msg += ` at "${schemaPath}" (strictTypes)`;
      (0, util_1.checkStrictMode)(it, msg, it.opts.strictTypes);
    }
    var KeywordCxt = class {
      constructor(it, def, keyword) {
        (0, keyword_1.validateKeywordUsage)(it, def, keyword);
        this.gen = it.gen;
        this.allErrors = it.allErrors;
        this.keyword = keyword;
        this.data = it.data;
        this.schema = it.schema[keyword];
        this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
        this.schemaValue = (0, util_1.schemaRefOrVal)(it, this.schema, keyword, this.$data);
        this.schemaType = def.schemaType;
        this.parentSchema = it.schema;
        this.params = {};
        this.it = it;
        this.def = def;
        if (this.$data) {
          this.schemaCode = it.gen.const("vSchema", getData(this.$data, it));
        } else {
          this.schemaCode = this.schemaValue;
          if (!(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
            throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`);
          }
        }
        if ("code" in def ? def.trackErrors : def.errors !== false) {
          this.errsCount = it.gen.const("_errs", names_1.default.errors);
        }
      }
      result(condition, successAction, failAction) {
        this.failResult((0, codegen_1.not)(condition), successAction, failAction);
      }
      failResult(condition, successAction, failAction) {
        this.gen.if(condition);
        if (failAction)
          failAction();
        else
          this.error();
        if (successAction) {
          this.gen.else();
          successAction();
          if (this.allErrors)
            this.gen.endIf();
        } else {
          if (this.allErrors)
            this.gen.endIf();
          else
            this.gen.else();
        }
      }
      pass(condition, failAction) {
        this.failResult((0, codegen_1.not)(condition), void 0, failAction);
      }
      fail(condition) {
        if (condition === void 0) {
          this.error();
          if (!this.allErrors)
            this.gen.if(false);
          return;
        }
        this.gen.if(condition);
        this.error();
        if (this.allErrors)
          this.gen.endIf();
        else
          this.gen.else();
      }
      fail$data(condition) {
        if (!this.$data)
          return this.fail(condition);
        const { schemaCode } = this;
        this.fail((0, codegen_1._)`${schemaCode} !== undefined && (${(0, codegen_1.or)(this.invalid$data(), condition)})`);
      }
      error(append, errorParams, errorPaths) {
        if (errorParams) {
          this.setParams(errorParams);
          this._error(append, errorPaths);
          this.setParams({});
          return;
        }
        this._error(append, errorPaths);
      }
      _error(append, errorPaths) {
        ;
        (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
      }
      $dataError() {
        (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0)
          throw new Error('add "trackErrors" to keyword definition');
        (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(cond) {
        if (!this.allErrors)
          this.gen.if(cond);
      }
      setParams(obj, assign) {
        if (assign)
          Object.assign(this.params, obj);
        else
          this.params = obj;
      }
      block$data(valid, codeBlock, $dataValid = codegen_1.nil) {
        this.gen.block(() => {
          this.check$data(valid, $dataValid);
          codeBlock();
        });
      }
      check$data(valid = codegen_1.nil, $dataValid = codegen_1.nil) {
        if (!this.$data)
          return;
        const { gen, schemaCode, schemaType, def } = this;
        gen.if((0, codegen_1.or)((0, codegen_1._)`${schemaCode} === undefined`, $dataValid));
        if (valid !== codegen_1.nil)
          gen.assign(valid, true);
        if (schemaType.length || def.validateSchema) {
          gen.elseIf(this.invalid$data());
          this.$dataError();
          if (valid !== codegen_1.nil)
            gen.assign(valid, false);
        }
        gen.else();
      }
      invalid$data() {
        const { gen, schemaCode, schemaType, def, it } = this;
        return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
        function wrong$DataType() {
          if (schemaType.length) {
            if (!(schemaCode instanceof codegen_1.Name))
              throw new Error("ajv implementation error");
            const st = Array.isArray(schemaType) ? schemaType : [schemaType];
            return (0, codegen_1._)`${(0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong)}`;
          }
          return codegen_1.nil;
        }
        function invalid$DataSchema() {
          if (def.validateSchema) {
            const validateSchemaRef = gen.scopeValue("validate$data", { ref: def.validateSchema });
            return (0, codegen_1._)`!${validateSchemaRef}(${schemaCode})`;
          }
          return codegen_1.nil;
        }
      }
      subschema(appl, valid) {
        const subschema = (0, subschema_1.getSubschema)(this.it, appl);
        (0, subschema_1.extendSubschemaData)(subschema, this.it, appl);
        (0, subschema_1.extendSubschemaMode)(subschema, appl);
        const nextContext = { ...this.it, ...subschema, items: void 0, props: void 0 };
        subschemaCode(nextContext, valid);
        return nextContext;
      }
      mergeEvaluated(schemaCxt, toName) {
        const { it, gen } = this;
        if (!it.opts.unevaluated)
          return;
        if (it.props !== true && schemaCxt.props !== void 0) {
          it.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
        }
        if (it.items !== true && schemaCxt.items !== void 0) {
          it.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
        }
      }
      mergeValidEvaluated(schemaCxt, valid) {
        const { it, gen } = this;
        if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
          gen.if(valid, () => this.mergeEvaluated(schemaCxt, codegen_1.Name));
          return true;
        }
      }
    };
    exports.KeywordCxt = KeywordCxt;
    function keywordCode(it, keyword, def, ruleType) {
      const cxt = new KeywordCxt(it, def, keyword);
      if ("code" in def) {
        def.code(cxt, ruleType);
      } else if (cxt.$data && def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
      } else if ("macro" in def) {
        (0, keyword_1.macroKeywordCode)(cxt, def);
      } else if (def.compile || def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
      }
    }
    var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
    var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function getData($data, { dataLevel, dataNames, dataPathArr }) {
      let jsonPointer;
      let data;
      if ($data === "")
        return names_1.default.rootData;
      if ($data[0] === "/") {
        if (!JSON_POINTER.test($data))
          throw new Error(`Invalid JSON-pointer: ${$data}`);
        jsonPointer = $data;
        data = names_1.default.rootData;
      } else {
        const matches = RELATIVE_JSON_POINTER.exec($data);
        if (!matches)
          throw new Error(`Invalid JSON-pointer: ${$data}`);
        const up2 = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer === "#") {
          if (up2 >= dataLevel)
            throw new Error(errorMsg("property/index", up2));
          return dataPathArr[dataLevel - up2];
        }
        if (up2 > dataLevel)
          throw new Error(errorMsg("data", up2));
        data = dataNames[dataLevel - up2];
        if (!jsonPointer)
          return data;
      }
      let expr = data;
      const segments = jsonPointer.split("/");
      for (const segment of segments) {
        if (segment) {
          data = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment))}`;
          expr = (0, codegen_1._)`${expr} && ${data}`;
        }
      }
      return expr;
      function errorMsg(pointerType, up2) {
        return `Cannot access ${pointerType} ${up2} levels up, current level is ${dataLevel}`;
      }
    }
    exports.getData = getData;
  }
});

// node_modules/ajv/dist/runtime/validation_error.js
var require_validation_error = __commonJS({
  "node_modules/ajv/dist/runtime/validation_error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationError = class extends Error {
      constructor(errors) {
        super("validation failed");
        this.errors = errors;
        this.ajv = this.validation = true;
      }
    };
    exports.default = ValidationError;
  }
});

// node_modules/ajv/dist/compile/ref_error.js
var require_ref_error = __commonJS({
  "node_modules/ajv/dist/compile/ref_error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var resolve_1 = require_resolve();
    var MissingRefError = class extends Error {
      constructor(resolver, baseId, ref, msg) {
        super(msg || `can't resolve reference ${ref} from id ${baseId}`);
        this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref);
        this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, this.missingRef));
      }
    };
    exports.default = MissingRefError;
  }
});

// node_modules/ajv/dist/compile/index.js
var require_compile = __commonJS({
  "node_modules/ajv/dist/compile/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveSchema = exports.getCompilingSchema = exports.resolveRef = exports.compileSchema = exports.SchemaEnv = void 0;
    var codegen_1 = require_codegen();
    var validation_error_1 = require_validation_error();
    var names_1 = require_names();
    var resolve_1 = require_resolve();
    var util_1 = require_util();
    var validate_1 = require_validate();
    var SchemaEnv = class {
      constructor(env) {
        var _a;
        this.refs = {};
        this.dynamicAnchors = {};
        let schema;
        if (typeof env.schema == "object")
          schema = env.schema;
        this.schema = env.schema;
        this.schemaId = env.schemaId;
        this.root = env.root || this;
        this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, resolve_1.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
        this.schemaPath = env.schemaPath;
        this.localRefs = env.localRefs;
        this.meta = env.meta;
        this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
        this.refs = {};
      }
    };
    exports.SchemaEnv = SchemaEnv;
    function compileSchema(sch) {
      const _sch = getCompilingSchema.call(this, sch);
      if (_sch)
        return _sch;
      const rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId);
      const { es5, lines } = this.opts.code;
      const { ownProperties } = this.opts;
      const gen = new codegen_1.CodeGen(this.scope, { es5, lines, ownProperties });
      let _ValidationError;
      if (sch.$async) {
        _ValidationError = gen.scopeValue("Error", {
          ref: validation_error_1.default,
          code: (0, codegen_1._)`require("ajv/dist/runtime/validation_error").default`
        });
      }
      const validateName = gen.scopeName("validate");
      sch.validateName = validateName;
      const schemaCxt = {
        gen,
        allErrors: this.opts.allErrors,
        data: names_1.default.data,
        parentData: names_1.default.parentData,
        parentDataProperty: names_1.default.parentDataProperty,
        dataNames: [names_1.default.data],
        dataPathArr: [codegen_1.nil],
        // TODO can its length be used as dataLevel if nil is removed?
        dataLevel: 0,
        dataTypes: [],
        definedProperties: /* @__PURE__ */ new Set(),
        topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? { ref: sch.schema, code: (0, codegen_1.stringify)(sch.schema) } : { ref: sch.schema }),
        validateName,
        ValidationError: _ValidationError,
        schema: sch.schema,
        schemaEnv: sch,
        rootId,
        baseId: sch.baseId || rootId,
        schemaPath: codegen_1.nil,
        errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, codegen_1._)`""`,
        opts: this.opts,
        self: this
      };
      let sourceCode;
      try {
        this._compilations.add(sch);
        (0, validate_1.validateFunctionCode)(schemaCxt);
        gen.optimize(this.opts.code.optimize);
        const validateCode = gen.toString();
        sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${validateCode}`;
        if (this.opts.code.process)
          sourceCode = this.opts.code.process(sourceCode, sch);
        const makeValidate = new Function(`${names_1.default.self}`, `${names_1.default.scope}`, sourceCode);
        const validate = makeValidate(this, this.scope.get());
        this.scope.value(validateName, { ref: validate });
        validate.errors = null;
        validate.schema = sch.schema;
        validate.schemaEnv = sch;
        if (sch.$async)
          validate.$async = true;
        if (this.opts.code.source === true) {
          validate.source = { validateName, validateCode, scopeValues: gen._values };
        }
        if (this.opts.unevaluated) {
          const { props, items } = schemaCxt;
          validate.evaluated = {
            props: props instanceof codegen_1.Name ? void 0 : props,
            items: items instanceof codegen_1.Name ? void 0 : items,
            dynamicProps: props instanceof codegen_1.Name,
            dynamicItems: items instanceof codegen_1.Name
          };
          if (validate.source)
            validate.source.evaluated = (0, codegen_1.stringify)(validate.evaluated);
        }
        sch.validate = validate;
        return sch;
      } catch (e2) {
        delete sch.validate;
        delete sch.validateName;
        if (sourceCode)
          this.logger.error("Error compiling schema, function code:", sourceCode);
        throw e2;
      } finally {
        this._compilations.delete(sch);
      }
    }
    exports.compileSchema = compileSchema;
    function resolveRef(root, baseId, ref) {
      var _a;
      ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref);
      const schOrFunc = root.refs[ref];
      if (schOrFunc)
        return schOrFunc;
      let _sch = resolve2.call(this, root, ref);
      if (_sch === void 0) {
        const schema = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref];
        const { schemaId } = this.opts;
        if (schema)
          _sch = new SchemaEnv({ schema, schemaId, root, baseId });
      }
      if (_sch === void 0)
        return;
      return root.refs[ref] = inlineOrCompile.call(this, _sch);
    }
    exports.resolveRef = resolveRef;
    function inlineOrCompile(sch) {
      if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs))
        return sch.schema;
      return sch.validate ? sch : compileSchema.call(this, sch);
    }
    function getCompilingSchema(schEnv) {
      for (const sch of this._compilations) {
        if (sameSchemaEnv(sch, schEnv))
          return sch;
      }
    }
    exports.getCompilingSchema = getCompilingSchema;
    function sameSchemaEnv(s1, s2) {
      return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
    }
    function resolve2(root, ref) {
      let sch;
      while (typeof (sch = this.refs[ref]) == "string")
        ref = sch;
      return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
    }
    function resolveSchema(root, ref) {
      const p2 = this.opts.uriResolver.parse(ref);
      const refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p2);
      let baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, void 0);
      if (Object.keys(root.schema).length > 0 && refPath === baseId) {
        return getJsonPointer.call(this, p2, root);
      }
      const id = (0, resolve_1.normalizeId)(refPath);
      const schOrRef = this.refs[id] || this.schemas[id];
      if (typeof schOrRef == "string") {
        const sch = resolveSchema.call(this, root, schOrRef);
        if (typeof (sch === null || sch === void 0 ? void 0 : sch.schema) !== "object")
          return;
        return getJsonPointer.call(this, p2, sch);
      }
      if (typeof (schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object")
        return;
      if (!schOrRef.validate)
        compileSchema.call(this, schOrRef);
      if (id === (0, resolve_1.normalizeId)(ref)) {
        const { schema } = schOrRef;
        const { schemaId } = this.opts;
        const schId = schema[schemaId];
        if (schId)
          baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        return new SchemaEnv({ schema, schemaId, root, baseId });
      }
      return getJsonPointer.call(this, p2, schOrRef);
    }
    exports.resolveSchema = resolveSchema;
    var PREVENT_SCOPE_CHANGE = /* @__PURE__ */ new Set([
      "properties",
      "patternProperties",
      "enum",
      "dependencies",
      "definitions"
    ]);
    function getJsonPointer(parsedRef, { baseId, schema, root }) {
      var _a;
      if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/")
        return;
      for (const part of parsedRef.fragment.slice(1).split("/")) {
        if (typeof schema === "boolean")
          return;
        const partSchema = schema[(0, util_1.unescapeFragment)(part)];
        if (partSchema === void 0)
          return;
        schema = partSchema;
        const schId = typeof schema === "object" && schema[this.opts.schemaId];
        if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
          baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        }
      }
      let env;
      if (typeof schema != "boolean" && schema.$ref && !(0, util_1.schemaHasRulesButRef)(schema, this.RULES)) {
        const $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
        env = resolveSchema.call(this, root, $ref);
      }
      const { schemaId } = this.opts;
      env = env || new SchemaEnv({ schema, schemaId, root, baseId });
      if (env.schema !== env.root.schema)
        return env;
      return void 0;
    }
  }
});

// node_modules/ajv/dist/refs/data.json
var require_data = __commonJS({
  "node_modules/ajv/dist/refs/data.json"(exports, module) {
    module.exports = {
      $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
      type: "object",
      required: ["$data"],
      properties: {
        $data: {
          type: "string",
          anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
        }
      },
      additionalProperties: false
    };
  }
});

// node_modules/fast-uri/lib/utils.js
var require_utils = __commonJS({
  "node_modules/fast-uri/lib/utils.js"(exports, module) {
    "use strict";
    var isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu);
    var isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    var isHexPair = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu);
    var isUnreserved = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu);
    var isPathCharacter = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
    function stringArrayToHexStripped(input) {
      let acc = "";
      let code = 0;
      let i2 = 0;
      for (i2 = 0; i2 < input.length; i2++) {
        code = input[i2].charCodeAt(0);
        if (code === 48) {
          continue;
        }
        if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
          return "";
        }
        acc += input[i2];
        break;
      }
      for (i2 += 1; i2 < input.length; i2++) {
        code = input[i2].charCodeAt(0);
        if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
          return "";
        }
        acc += input[i2];
      }
      return acc;
    }
    var nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function consumeIsZone(buffer) {
      buffer.length = 0;
      return true;
    }
    function consumeHextets(buffer, address, output) {
      if (buffer.length) {
        const hex = stringArrayToHexStripped(buffer);
        if (hex !== "") {
          address.push(hex);
        } else {
          output.error = true;
          return false;
        }
        buffer.length = 0;
      }
      return true;
    }
    function getIPV6(input) {
      let tokenCount = 0;
      const output = { error: false, address: "", zone: "" };
      const address = [];
      const buffer = [];
      let endipv6Encountered = false;
      let endIpv6 = false;
      let consume = consumeHextets;
      for (let i2 = 0; i2 < input.length; i2++) {
        const cursor = input[i2];
        if (cursor === "[" || cursor === "]") {
          continue;
        }
        if (cursor === ":") {
          if (endipv6Encountered === true) {
            endIpv6 = true;
          }
          if (!consume(buffer, address, output)) {
            break;
          }
          if (++tokenCount > 7) {
            output.error = true;
            break;
          }
          if (i2 > 0 && input[i2 - 1] === ":") {
            endipv6Encountered = true;
          }
          address.push(":");
          continue;
        } else if (cursor === "%") {
          if (!consume(buffer, address, output)) {
            break;
          }
          consume = consumeIsZone;
        } else {
          buffer.push(cursor);
          continue;
        }
      }
      if (buffer.length) {
        if (consume === consumeIsZone) {
          output.zone = buffer.join("");
        } else if (endIpv6) {
          address.push(buffer.join(""));
        } else {
          address.push(stringArrayToHexStripped(buffer));
        }
      }
      output.address = address.join("");
      return output;
    }
    function normalizeIPv6(host) {
      if (findToken(host, ":") < 2) {
        return { host, isIPV6: false };
      }
      const ipv6 = getIPV6(host);
      if (!ipv6.error) {
        let newHost = ipv6.address;
        let escapedHost = ipv6.address;
        if (ipv6.zone) {
          newHost += "%" + ipv6.zone;
          escapedHost += "%25" + ipv6.zone;
        }
        return { host: newHost, isIPV6: true, escapedHost };
      } else {
        return { host, isIPV6: false };
      }
    }
    function findToken(str, token) {
      let ind = 0;
      for (let i2 = 0; i2 < str.length; i2++) {
        if (str[i2] === token) ind++;
      }
      return ind;
    }
    function removeDotSegments(path) {
      let input = path;
      const output = [];
      let nextSlash = -1;
      let len = 0;
      while (len = input.length) {
        if (len === 1) {
          if (input === ".") {
            break;
          } else if (input === "/") {
            output.push("/");
            break;
          } else {
            output.push(input);
            break;
          }
        } else if (len === 2) {
          if (input[0] === ".") {
            if (input[1] === ".") {
              break;
            } else if (input[1] === "/") {
              input = input.slice(2);
              continue;
            }
          } else if (input[0] === "/") {
            if (input[1] === "." || input[1] === "/") {
              output.push("/");
              break;
            }
          }
        } else if (len === 3) {
          if (input === "/..") {
            if (output.length !== 0) {
              output.pop();
            }
            output.push("/");
            break;
          }
        }
        if (input[0] === ".") {
          if (input[1] === ".") {
            if (input[2] === "/") {
              input = input.slice(3);
              continue;
            }
          } else if (input[1] === "/") {
            input = input.slice(2);
            continue;
          }
        } else if (input[0] === "/") {
          if (input[1] === ".") {
            if (input[2] === "/") {
              input = input.slice(2);
              continue;
            } else if (input[2] === ".") {
              if (input[3] === "/") {
                input = input.slice(3);
                if (output.length !== 0) {
                  output.pop();
                }
                continue;
              }
            }
          }
        }
        if ((nextSlash = input.indexOf("/", 1)) === -1) {
          output.push(input);
          break;
        } else {
          output.push(input.slice(0, nextSlash));
          input = input.slice(nextSlash);
        }
      }
      return output.join("");
    }
    var HOST_DELIMS = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" };
    var HOST_DELIM_RE = /[@/?#:]/g;
    var HOST_DELIM_NO_COLON_RE = /[@/?#]/g;
    function reescapeHostDelimiters(host, isIP) {
      const re = isIP ? HOST_DELIM_NO_COLON_RE : HOST_DELIM_RE;
      re.lastIndex = 0;
      return host.replace(re, (ch) => HOST_DELIMS[ch]);
    }
    function normalizePercentEncoding(input, decodeUnreserved = false) {
      if (input.indexOf("%") === -1) {
        return input;
      }
      let output = "";
      for (let i2 = 0; i2 < input.length; i2++) {
        if (input[i2] === "%" && i2 + 2 < input.length) {
          const hex = input.slice(i2 + 1, i2 + 3);
          if (isHexPair(hex)) {
            const normalizedHex = hex.toUpperCase();
            const decoded = String.fromCharCode(parseInt(normalizedHex, 16));
            if (decodeUnreserved && isUnreserved(decoded)) {
              output += decoded;
            } else {
              output += "%" + normalizedHex;
            }
            i2 += 2;
            continue;
          }
        }
        output += input[i2];
      }
      return output;
    }
    function normalizePathEncoding(input) {
      let output = "";
      for (let i2 = 0; i2 < input.length; i2++) {
        if (input[i2] === "%" && i2 + 2 < input.length) {
          const hex = input.slice(i2 + 1, i2 + 3);
          if (isHexPair(hex)) {
            const normalizedHex = hex.toUpperCase();
            const decoded = String.fromCharCode(parseInt(normalizedHex, 16));
            if (decoded !== "." && isUnreserved(decoded)) {
              output += decoded;
            } else {
              output += "%" + normalizedHex;
            }
            i2 += 2;
            continue;
          }
        }
        if (isPathCharacter(input[i2])) {
          output += input[i2];
        } else {
          output += escape(input[i2]);
        }
      }
      return output;
    }
    function escapePreservingEscapes(input) {
      let output = "";
      for (let i2 = 0; i2 < input.length; i2++) {
        if (input[i2] === "%" && i2 + 2 < input.length) {
          const hex = input.slice(i2 + 1, i2 + 3);
          if (isHexPair(hex)) {
            output += "%" + hex.toUpperCase();
            i2 += 2;
            continue;
          }
        }
        output += escape(input[i2]);
      }
      return output;
    }
    function recomposeAuthority(component) {
      const uriTokens = [];
      if (component.userinfo !== void 0) {
        uriTokens.push(component.userinfo);
        uriTokens.push("@");
      }
      if (component.host !== void 0) {
        let host = unescape(component.host);
        if (!isIPv4(host)) {
          const ipV6res = normalizeIPv6(host);
          if (ipV6res.isIPV6 === true) {
            host = `[${ipV6res.escapedHost}]`;
          } else {
            host = reescapeHostDelimiters(host, false);
          }
        }
        uriTokens.push(host);
      }
      if (typeof component.port === "number" || typeof component.port === "string") {
        uriTokens.push(":");
        uriTokens.push(String(component.port));
      }
      return uriTokens.length ? uriTokens.join("") : void 0;
    }
    module.exports = {
      nonSimpleDomain,
      recomposeAuthority,
      reescapeHostDelimiters,
      normalizePercentEncoding,
      normalizePathEncoding,
      escapePreservingEscapes,
      removeDotSegments,
      isIPv4,
      isUUID,
      normalizeIPv6,
      stringArrayToHexStripped
    };
  }
});

// node_modules/fast-uri/lib/schemes.js
var require_schemes = __commonJS({
  "node_modules/fast-uri/lib/schemes.js"(exports, module) {
    "use strict";
    var { isUUID } = require_utils();
    var URN_REG = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
    var supportedSchemeNames = (
      /** @type {const} */
      [
        "http",
        "https",
        "ws",
        "wss",
        "urn",
        "urn:uuid"
      ]
    );
    function isValidSchemeName(name) {
      return supportedSchemeNames.indexOf(
        /** @type {*} */
        name
      ) !== -1;
    }
    function wsIsSecure(wsComponent) {
      if (wsComponent.secure === true) {
        return true;
      } else if (wsComponent.secure === false) {
        return false;
      } else if (wsComponent.scheme) {
        return wsComponent.scheme.length === 3 && (wsComponent.scheme[0] === "w" || wsComponent.scheme[0] === "W") && (wsComponent.scheme[1] === "s" || wsComponent.scheme[1] === "S") && (wsComponent.scheme[2] === "s" || wsComponent.scheme[2] === "S");
      } else {
        return false;
      }
    }
    function httpParse(component) {
      if (!component.host) {
        component.error = component.error || "HTTP URIs must have a host.";
      }
      return component;
    }
    function httpSerialize(component) {
      const secure = String(component.scheme).toLowerCase() === "https";
      if (component.port === (secure ? 443 : 80) || component.port === "") {
        component.port = void 0;
      }
      if (!component.path) {
        component.path = "/";
      }
      return component;
    }
    function wsParse(wsComponent) {
      wsComponent.secure = wsIsSecure(wsComponent);
      wsComponent.resourceName = (wsComponent.path || "/") + (wsComponent.query ? "?" + wsComponent.query : "");
      wsComponent.path = void 0;
      wsComponent.query = void 0;
      return wsComponent;
    }
    function wsSerialize(wsComponent) {
      if (wsComponent.port === (wsIsSecure(wsComponent) ? 443 : 80) || wsComponent.port === "") {
        wsComponent.port = void 0;
      }
      if (typeof wsComponent.secure === "boolean") {
        wsComponent.scheme = wsComponent.secure ? "wss" : "ws";
        wsComponent.secure = void 0;
      }
      if (wsComponent.resourceName) {
        const [path, query] = wsComponent.resourceName.split("?");
        wsComponent.path = path && path !== "/" ? path : void 0;
        wsComponent.query = query;
        wsComponent.resourceName = void 0;
      }
      wsComponent.fragment = void 0;
      return wsComponent;
    }
    function urnParse(urnComponent, options) {
      if (!urnComponent.path) {
        urnComponent.error = "URN can not be parsed";
        return urnComponent;
      }
      const matches = urnComponent.path.match(URN_REG);
      if (matches) {
        const scheme = options.scheme || urnComponent.scheme || "urn";
        urnComponent.nid = matches[1].toLowerCase();
        urnComponent.nss = matches[2];
        const urnScheme = `${scheme}:${options.nid || urnComponent.nid}`;
        const schemeHandler = getSchemeHandler(urnScheme);
        urnComponent.path = void 0;
        if (schemeHandler) {
          urnComponent = schemeHandler.parse(urnComponent, options);
        }
      } else {
        urnComponent.error = urnComponent.error || "URN can not be parsed.";
      }
      return urnComponent;
    }
    function urnSerialize(urnComponent, options) {
      if (urnComponent.nid === void 0) {
        throw new Error("URN without nid cannot be serialized");
      }
      const scheme = options.scheme || urnComponent.scheme || "urn";
      const nid = urnComponent.nid.toLowerCase();
      const urnScheme = `${scheme}:${options.nid || nid}`;
      const schemeHandler = getSchemeHandler(urnScheme);
      if (schemeHandler) {
        urnComponent = schemeHandler.serialize(urnComponent, options);
      }
      const uriComponent = urnComponent;
      const nss = urnComponent.nss;
      uriComponent.path = `${nid || options.nid}:${nss}`;
      options.skipEscape = true;
      return uriComponent;
    }
    function urnuuidParse(urnComponent, options) {
      const uuidComponent = urnComponent;
      uuidComponent.uuid = uuidComponent.nss;
      uuidComponent.nss = void 0;
      if (!options.tolerant && (!uuidComponent.uuid || !isUUID(uuidComponent.uuid))) {
        uuidComponent.error = uuidComponent.error || "UUID is not valid.";
      }
      return uuidComponent;
    }
    function urnuuidSerialize(uuidComponent) {
      const urnComponent = uuidComponent;
      urnComponent.nss = (uuidComponent.uuid || "").toLowerCase();
      return urnComponent;
    }
    var http = (
      /** @type {SchemeHandler} */
      {
        scheme: "http",
        domainHost: true,
        parse: httpParse,
        serialize: httpSerialize
      }
    );
    var https = (
      /** @type {SchemeHandler} */
      {
        scheme: "https",
        domainHost: http.domainHost,
        parse: httpParse,
        serialize: httpSerialize
      }
    );
    var ws = (
      /** @type {SchemeHandler} */
      {
        scheme: "ws",
        domainHost: true,
        parse: wsParse,
        serialize: wsSerialize
      }
    );
    var wss = (
      /** @type {SchemeHandler} */
      {
        scheme: "wss",
        domainHost: ws.domainHost,
        parse: ws.parse,
        serialize: ws.serialize
      }
    );
    var urn = (
      /** @type {SchemeHandler} */
      {
        scheme: "urn",
        parse: urnParse,
        serialize: urnSerialize,
        skipNormalize: true
      }
    );
    var urnuuid = (
      /** @type {SchemeHandler} */
      {
        scheme: "urn:uuid",
        parse: urnuuidParse,
        serialize: urnuuidSerialize,
        skipNormalize: true
      }
    );
    var SCHEMES = (
      /** @type {Record<SchemeName, SchemeHandler>} */
      {
        http,
        https,
        ws,
        wss,
        urn,
        "urn:uuid": urnuuid
      }
    );
    Object.setPrototypeOf(SCHEMES, null);
    function getSchemeHandler(scheme) {
      return scheme && (SCHEMES[
        /** @type {SchemeName} */
        scheme
      ] || SCHEMES[
        /** @type {SchemeName} */
        scheme.toLowerCase()
      ]) || void 0;
    }
    module.exports = {
      wsIsSecure,
      SCHEMES,
      isValidSchemeName,
      getSchemeHandler
    };
  }
});

// node_modules/fast-uri/index.js
var require_fast_uri = __commonJS({
  "node_modules/fast-uri/index.js"(exports, module) {
    "use strict";
    var { normalizeIPv6, removeDotSegments, recomposeAuthority, normalizePercentEncoding, normalizePathEncoding, escapePreservingEscapes, reescapeHostDelimiters, isIPv4, nonSimpleDomain } = require_utils();
    var { SCHEMES, getSchemeHandler } = require_schemes();
    function normalize(uri, options) {
      if (typeof uri === "string") {
        uri = /** @type {T} */
        normalizeString(uri, options);
      } else if (typeof uri === "object") {
        uri = /** @type {T} */
        parse2(serialize(uri, options), options);
      }
      return uri;
    }
    function resolve2(baseURI, relativeURI, options) {
      const schemelessOptions = options ? Object.assign({ scheme: "null" }, options) : { scheme: "null" };
      const { parsed: baseParsed, malformedAuthorityOrPort: baseMalformed } = parseWithStatus(baseURI, schemelessOptions);
      const { parsed: relativeParsed, malformedAuthorityOrPort: relativeMalformed } = parseWithStatus(relativeURI, schemelessOptions);
      if (baseMalformed || relativeMalformed) {
        throw new Error(baseParsed.error || relativeParsed.error || "URI is malformed.");
      }
      const resolved = resolveComponent(baseParsed, relativeParsed, schemelessOptions, true);
      schemelessOptions.skipEscape = true;
      return serialize(resolved, schemelessOptions);
    }
    function resolveComponent(base, relative2, options, skipNormalization) {
      const target = {};
      if (!skipNormalization) {
        base = parse2(serialize(base, options), options);
        relative2 = parse2(serialize(relative2, options), options);
      }
      options = options || {};
      if (!options.tolerant && relative2.scheme) {
        target.scheme = relative2.scheme;
        target.userinfo = relative2.userinfo;
        target.host = relative2.host;
        target.port = relative2.port;
        target.path = removeDotSegments(relative2.path || "");
        target.query = relative2.query;
      } else {
        if (relative2.userinfo !== void 0 || relative2.host !== void 0 || relative2.port !== void 0) {
          target.userinfo = relative2.userinfo;
          target.host = relative2.host;
          target.port = relative2.port;
          target.path = removeDotSegments(relative2.path || "");
          target.query = relative2.query;
        } else {
          if (!relative2.path) {
            target.path = base.path;
            if (relative2.query !== void 0) {
              target.query = relative2.query;
            } else {
              target.query = base.query;
            }
          } else {
            if (relative2.path[0] === "/") {
              target.path = removeDotSegments(relative2.path);
            } else {
              if ((base.userinfo !== void 0 || base.host !== void 0 || base.port !== void 0) && !base.path) {
                target.path = "/" + relative2.path;
              } else if (!base.path) {
                target.path = relative2.path;
              } else {
                target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative2.path;
              }
              target.path = removeDotSegments(target.path);
            }
            target.query = relative2.query;
          }
          target.userinfo = base.userinfo;
          target.host = base.host;
          target.port = base.port;
        }
        target.scheme = base.scheme;
      }
      target.fragment = relative2.fragment;
      return target;
    }
    function equal(uriA, uriB, options) {
      const normalizedA = normalizeComparableURI(uriA, options);
      const normalizedB = normalizeComparableURI(uriB, options);
      return normalizedA !== void 0 && normalizedB !== void 0 && normalizedA.toLowerCase() === normalizedB.toLowerCase();
    }
    function serialize(cmpts, opts) {
      const component = {
        host: cmpts.host,
        scheme: cmpts.scheme,
        userinfo: cmpts.userinfo,
        port: cmpts.port,
        path: cmpts.path,
        query: cmpts.query,
        nid: cmpts.nid,
        nss: cmpts.nss,
        uuid: cmpts.uuid,
        fragment: cmpts.fragment,
        reference: cmpts.reference,
        resourceName: cmpts.resourceName,
        secure: cmpts.secure,
        error: ""
      };
      const options = Object.assign({}, opts);
      const uriTokens = [];
      const schemeHandler = getSchemeHandler(options.scheme || component.scheme);
      if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(component, options);
      if (component.path !== void 0) {
        if (!options.skipEscape) {
          component.path = escapePreservingEscapes(component.path);
          if (component.scheme !== void 0) {
            component.path = component.path.split("%3A").join(":");
          }
        } else {
          component.path = normalizePercentEncoding(component.path);
        }
      }
      if (options.reference !== "suffix" && component.scheme) {
        uriTokens.push(component.scheme, ":");
      }
      const authority = recomposeAuthority(component);
      if (authority !== void 0) {
        if (options.reference !== "suffix") {
          uriTokens.push("//");
        }
        uriTokens.push(authority);
        if (component.path && component.path[0] !== "/") {
          uriTokens.push("/");
        }
      }
      if (component.path !== void 0) {
        let s2 = component.path;
        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
          s2 = removeDotSegments(s2);
        }
        if (authority === void 0 && s2[0] === "/" && s2[1] === "/") {
          s2 = "/%2F" + s2.slice(2);
        }
        uriTokens.push(s2);
      }
      if (component.query !== void 0) {
        uriTokens.push("?", component.query);
      }
      if (component.fragment !== void 0) {
        uriTokens.push("#", component.fragment);
      }
      return uriTokens.join("");
    }
    var URI_PARSE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    var AUTHORITY_PREFIX = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
    var AUTHORITY_INTRODUCER_REGION = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
    function getParseError(parsed, matches) {
      if (matches[2] !== void 0 && parsed.path && parsed.path[0] !== "/") {
        return 'URI path must start with "/" when authority is present.';
      }
      if (typeof parsed.port === "number" && (parsed.port < 0 || parsed.port > 65535)) {
        return "URI port is malformed.";
      }
      return void 0;
    }
    function parseWithStatus(uri, opts) {
      const options = Object.assign({}, opts);
      const parsed = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
      };
      let malformedAuthorityOrPort = false;
      let isIP = false;
      if (options.reference === "suffix") {
        if (options.scheme) {
          uri = options.scheme + ":" + uri;
        } else {
          uri = "//" + uri;
        }
      }
      const authorityMatch = uri.match(AUTHORITY_PREFIX);
      if (authorityMatch !== null && authorityMatch[1].indexOf("\\") !== -1) {
        parsed.error = "URI authority must not contain a literal backslash.";
        malformedAuthorityOrPort = true;
      }
      const introducerMatch = uri.match(AUTHORITY_INTRODUCER_REGION);
      if (introducerMatch !== null) {
        const region = introducerMatch[1];
        const normalizedRegion = region.replace(/[\t\n\r]/g, "");
        if (normalizedRegion.length >= 2) {
          if (normalizedRegion.slice(0, 2) !== "//") {
            parsed.error = parsed.error || "URI authority must not contain a literal backslash.";
            malformedAuthorityOrPort = true;
          } else if (region.length !== normalizedRegion.length) {
            parsed.error = parsed.error || "URI authority introducer must not contain whitespace.";
            malformedAuthorityOrPort = true;
          }
        }
      }
      const matches = uri.match(URI_PARSE);
      if (matches) {
        parsed.scheme = matches[1];
        parsed.userinfo = matches[3];
        parsed.host = matches[4];
        parsed.port = parseInt(matches[5], 10);
        parsed.path = matches[6] || "";
        parsed.query = matches[7];
        parsed.fragment = matches[8];
        if (isNaN(parsed.port)) {
          parsed.port = matches[5];
        }
        const parseError = getParseError(parsed, matches);
        if (parseError !== void 0) {
          parsed.error = parsed.error || parseError;
          malformedAuthorityOrPort = true;
        }
        if (parsed.host) {
          const ipv4result = isIPv4(parsed.host);
          if (ipv4result === false) {
            const ipv6result = normalizeIPv6(parsed.host);
            parsed.host = ipv6result.host.toLowerCase();
            isIP = ipv6result.isIPV6;
          } else {
            isIP = true;
          }
        }
        if (parsed.scheme === void 0 && parsed.userinfo === void 0 && parsed.host === void 0 && parsed.port === void 0 && parsed.query === void 0 && !parsed.path) {
          parsed.reference = "same-document";
        } else if (parsed.scheme === void 0) {
          parsed.reference = "relative";
        } else if (parsed.fragment === void 0) {
          parsed.reference = "absolute";
        } else {
          parsed.reference = "uri";
        }
        if (options.reference && options.reference !== "suffix" && options.reference !== parsed.reference) {
          parsed.error = parsed.error || "URI is not a " + options.reference + " reference.";
        }
        const schemeHandler = getSchemeHandler(options.scheme || parsed.scheme);
        if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
          if (parsed.host && (options.domainHost || schemeHandler && schemeHandler.domainHost) && isIP === false && nonSimpleDomain(parsed.host)) {
            try {
              parsed.host = new URL("http://" + parsed.host).hostname;
            } catch (e2) {
              parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + e2;
            }
          }
        }
        if (!schemeHandler || schemeHandler && !schemeHandler.skipNormalize) {
          if (uri.indexOf("%") !== -1) {
            if (parsed.scheme !== void 0) {
              parsed.scheme = unescape(parsed.scheme);
            }
            if (parsed.host !== void 0) {
              parsed.host = reescapeHostDelimiters(unescape(parsed.host), isIP);
            }
          }
          if (parsed.path) {
            parsed.path = normalizePathEncoding(parsed.path);
          }
          if (parsed.fragment) {
            try {
              parsed.fragment = encodeURI(decodeURIComponent(parsed.fragment));
            } catch {
              parsed.error = parsed.error || "URI malformed";
            }
          }
        }
        if (schemeHandler && schemeHandler.parse) {
          schemeHandler.parse(parsed, options);
        }
      } else {
        parsed.error = parsed.error || "URI can not be parsed.";
      }
      return { parsed, malformedAuthorityOrPort };
    }
    function parse2(uri, opts) {
      return parseWithStatus(uri, opts).parsed;
    }
    function normalizeString(uri, opts) {
      return normalizeStringWithStatus(uri, opts).normalized;
    }
    function normalizeStringWithStatus(uri, opts) {
      const { parsed, malformedAuthorityOrPort } = parseWithStatus(uri, opts);
      return {
        normalized: malformedAuthorityOrPort ? uri : serialize(parsed, opts),
        malformedAuthorityOrPort
      };
    }
    function normalizeComparableURI(uri, opts) {
      if (typeof uri === "string") {
        const { normalized, malformedAuthorityOrPort } = normalizeStringWithStatus(uri, opts);
        return malformedAuthorityOrPort ? void 0 : normalized;
      }
      if (typeof uri === "object") {
        return serialize(uri, opts);
      }
    }
    var fastUri = {
      SCHEMES,
      normalize,
      resolve: resolve2,
      resolveComponent,
      equal,
      serialize,
      parse: parse2
    };
    module.exports = fastUri;
    module.exports.default = fastUri;
    module.exports.fastUri = fastUri;
  }
});

// node_modules/ajv/dist/runtime/uri.js
var require_uri = __commonJS({
  "node_modules/ajv/dist/runtime/uri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var uri = require_fast_uri();
    uri.code = 'require("ajv/dist/runtime/uri").default';
    exports.default = uri;
  }
});

// node_modules/ajv/dist/core.js
var require_core = __commonJS({
  "node_modules/ajv/dist/core.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
    var validate_1 = require_validate();
    Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
      return validate_1.KeywordCxt;
    } });
    var codegen_1 = require_codegen();
    Object.defineProperty(exports, "_", { enumerable: true, get: function() {
      return codegen_1._;
    } });
    Object.defineProperty(exports, "str", { enumerable: true, get: function() {
      return codegen_1.str;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return codegen_1.stringify;
    } });
    Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
      return codegen_1.nil;
    } });
    Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
      return codegen_1.Name;
    } });
    Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
      return codegen_1.CodeGen;
    } });
    var validation_error_1 = require_validation_error();
    var ref_error_1 = require_ref_error();
    var rules_1 = require_rules();
    var compile_1 = require_compile();
    var codegen_2 = require_codegen();
    var resolve_1 = require_resolve();
    var dataType_1 = require_dataType();
    var util_1 = require_util();
    var $dataRefSchema = require_data();
    var uri_1 = require_uri();
    var defaultRegExp = (str, flags) => new RegExp(str, flags);
    defaultRegExp.code = "new RegExp";
    var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
    var EXT_SCOPE_NAMES = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]);
    var removedOptions = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    };
    var deprecatedOptions = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    };
    var MAX_EXPRESSION = 200;
    function requiredOptions(o3) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
      const s2 = o3.strict;
      const _optz = (_a = o3.code) === null || _a === void 0 ? void 0 : _a.optimize;
      const optimize = _optz === true || _optz === void 0 ? 1 : _optz || 0;
      const regExp = (_c = (_b = o3.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
      const uriResolver = (_d = o3.uriResolver) !== null && _d !== void 0 ? _d : uri_1.default;
      return {
        strictSchema: (_f = (_e = o3.strictSchema) !== null && _e !== void 0 ? _e : s2) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o3.strictNumbers) !== null && _g !== void 0 ? _g : s2) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o3.strictTypes) !== null && _j !== void 0 ? _j : s2) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o3.strictTuples) !== null && _l !== void 0 ? _l : s2) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o3.strictRequired) !== null && _o !== void 0 ? _o : s2) !== null && _p !== void 0 ? _p : false,
        code: o3.code ? { ...o3.code, optimize, regExp } : { optimize, regExp },
        loopRequired: (_q = o3.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
        loopEnum: (_r = o3.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
        meta: (_s = o3.meta) !== null && _s !== void 0 ? _s : true,
        messages: (_t = o3.messages) !== null && _t !== void 0 ? _t : true,
        inlineRefs: (_u = o3.inlineRefs) !== null && _u !== void 0 ? _u : true,
        schemaId: (_v = o3.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o3.addUsedSchema) !== null && _w !== void 0 ? _w : true,
        validateSchema: (_x = o3.validateSchema) !== null && _x !== void 0 ? _x : true,
        validateFormats: (_y = o3.validateFormats) !== null && _y !== void 0 ? _y : true,
        unicodeRegExp: (_z = o3.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
        int32range: (_0 = o3.int32range) !== null && _0 !== void 0 ? _0 : true,
        uriResolver
      };
    }
    var Ajv2 = class {
      constructor(opts = {}) {
        this.schemas = {};
        this.refs = {};
        this.formats = /* @__PURE__ */ Object.create(null);
        this._compilations = /* @__PURE__ */ new Set();
        this._loading = {};
        this._cache = /* @__PURE__ */ new Map();
        opts = this.opts = { ...opts, ...requiredOptions(opts) };
        const { es5, lines } = this.opts.code;
        this.scope = new codegen_2.ValueScope({ scope: {}, prefixes: EXT_SCOPE_NAMES, es5, lines });
        this.logger = getLogger(opts.logger);
        const formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, rules_1.getRules)();
        checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
        checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = getMetaSchemaOptions.call(this);
        if (opts.formats)
          addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords)
          addInitialKeywords.call(this, opts.keywords);
        if (typeof opts.meta == "object")
          this.addMetaSchema(opts.meta);
        addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data, meta: meta2, schemaId } = this.opts;
        let _dataRefSchema = $dataRefSchema;
        if (schemaId === "id") {
          _dataRefSchema = { ...$dataRefSchema };
          _dataRefSchema.id = _dataRefSchema.$id;
          delete _dataRefSchema.$id;
        }
        if (meta2 && $data)
          this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
      }
      defaultMeta() {
        const { meta: meta2, schemaId } = this.opts;
        return this.opts.defaultMeta = typeof meta2 == "object" ? meta2[schemaId] || meta2 : void 0;
      }
      validate(schemaKeyRef, data) {
        let v2;
        if (typeof schemaKeyRef == "string") {
          v2 = this.getSchema(schemaKeyRef);
          if (!v2)
            throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
        } else {
          v2 = this.compile(schemaKeyRef);
        }
        const valid = v2(data);
        if (!("$async" in v2))
          this.errors = v2.errors;
        return valid;
      }
      compile(schema, _meta) {
        const sch = this._addSchema(schema, _meta);
        return sch.validate || this._compileSchemaEnv(sch);
      }
      compileAsync(schema, meta2) {
        if (typeof this.opts.loadSchema != "function") {
          throw new Error("options.loadSchema should be a function");
        }
        const { loadSchema } = this.opts;
        return runCompileAsync.call(this, schema, meta2);
        async function runCompileAsync(_schema, _meta) {
          await loadMetaSchema.call(this, _schema.$schema);
          const sch = this._addSchema(_schema, _meta);
          return sch.validate || _compileAsync.call(this, sch);
        }
        async function loadMetaSchema($ref) {
          if ($ref && !this.getSchema($ref)) {
            await runCompileAsync.call(this, { $ref }, true);
          }
        }
        async function _compileAsync(sch) {
          try {
            return this._compileSchemaEnv(sch);
          } catch (e2) {
            if (!(e2 instanceof ref_error_1.default))
              throw e2;
            checkLoaded.call(this, e2);
            await loadMissingSchema.call(this, e2.missingSchema);
            return _compileAsync.call(this, sch);
          }
        }
        function checkLoaded({ missingSchema: ref, missingRef }) {
          if (this.refs[ref]) {
            throw new Error(`AnySchema ${ref} is loaded but ${missingRef} cannot be resolved`);
          }
        }
        async function loadMissingSchema(ref) {
          const _schema = await _loadSchema.call(this, ref);
          if (!this.refs[ref])
            await loadMetaSchema.call(this, _schema.$schema);
          if (!this.refs[ref])
            this.addSchema(_schema, ref, meta2);
        }
        async function _loadSchema(ref) {
          const p2 = this._loading[ref];
          if (p2)
            return p2;
          try {
            return await (this._loading[ref] = loadSchema(ref));
          } finally {
            delete this._loading[ref];
          }
        }
      }
      // Adds schema to the instance
      addSchema(schema, key, _meta, _validateSchema = this.opts.validateSchema) {
        if (Array.isArray(schema)) {
          for (const sch of schema)
            this.addSchema(sch, void 0, _meta, _validateSchema);
          return this;
        }
        let id;
        if (typeof schema === "object") {
          const { schemaId } = this.opts;
          id = schema[schemaId];
          if (id !== void 0 && typeof id != "string") {
            throw new Error(`schema ${schemaId} must be string`);
          }
        }
        key = (0, resolve_1.normalizeId)(key || id);
        this._checkUnique(key);
        this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
        return this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(schema, key, _validateSchema = this.opts.validateSchema) {
        this.addSchema(schema, key, true, _validateSchema);
        return this;
      }
      //  Validate schema against its meta-schema
      validateSchema(schema, throwOrLogError) {
        if (typeof schema == "boolean")
          return true;
        let $schema;
        $schema = schema.$schema;
        if ($schema !== void 0 && typeof $schema != "string") {
          throw new Error("$schema must be a string");
        }
        $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
        if (!$schema) {
          this.logger.warn("meta-schema not available");
          this.errors = null;
          return true;
        }
        const valid = this.validate($schema, schema);
        if (!valid && throwOrLogError) {
          const message = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(message);
          else
            throw new Error(message);
        }
        return valid;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(keyRef) {
        let sch;
        while (typeof (sch = getSchEnv.call(this, keyRef)) == "string")
          keyRef = sch;
        if (sch === void 0) {
          const { schemaId } = this.opts;
          const root = new compile_1.SchemaEnv({ schema: {}, schemaId });
          sch = compile_1.resolveSchema.call(this, root, keyRef);
          if (!sch)
            return;
          this.refs[keyRef] = sch;
        }
        return sch.validate || this._compileSchemaEnv(sch);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(schemaKeyRef) {
        if (schemaKeyRef instanceof RegExp) {
          this._removeAllSchemas(this.schemas, schemaKeyRef);
          this._removeAllSchemas(this.refs, schemaKeyRef);
          return this;
        }
        switch (typeof schemaKeyRef) {
          case "undefined":
            this._removeAllSchemas(this.schemas);
            this._removeAllSchemas(this.refs);
            this._cache.clear();
            return this;
          case "string": {
            const sch = getSchEnv.call(this, schemaKeyRef);
            if (typeof sch == "object")
              this._cache.delete(sch.schema);
            delete this.schemas[schemaKeyRef];
            delete this.refs[schemaKeyRef];
            return this;
          }
          case "object": {
            const cacheKey = schemaKeyRef;
            this._cache.delete(cacheKey);
            let id = schemaKeyRef[this.opts.schemaId];
            if (id) {
              id = (0, resolve_1.normalizeId)(id);
              delete this.schemas[id];
              delete this.refs[id];
            }
            return this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(definitions) {
        for (const def of definitions)
          this.addKeyword(def);
        return this;
      }
      addKeyword(kwdOrDef, def) {
        let keyword;
        if (typeof kwdOrDef == "string") {
          keyword = kwdOrDef;
          if (typeof def == "object") {
            this.logger.warn("these parameters are deprecated, see docs for addKeyword");
            def.keyword = keyword;
          }
        } else if (typeof kwdOrDef == "object" && def === void 0) {
          def = kwdOrDef;
          keyword = def.keyword;
          if (Array.isArray(keyword) && !keyword.length) {
            throw new Error("addKeywords: keyword must be string or non-empty array");
          }
        } else {
          throw new Error("invalid addKeywords parameters");
        }
        checkKeyword.call(this, keyword, def);
        if (!def) {
          (0, util_1.eachItem)(keyword, (kwd) => addRule.call(this, kwd));
          return this;
        }
        keywordMetaschema.call(this, def);
        const definition = {
          ...def,
          type: (0, dataType_1.getJSONTypes)(def.type),
          schemaType: (0, dataType_1.getJSONTypes)(def.schemaType)
        };
        (0, util_1.eachItem)(keyword, definition.type.length === 0 ? (k3) => addRule.call(this, k3, definition) : (k3) => definition.type.forEach((t) => addRule.call(this, k3, definition, t)));
        return this;
      }
      getKeyword(keyword) {
        const rule = this.RULES.all[keyword];
        return typeof rule == "object" ? rule.definition : !!rule;
      }
      // Remove keyword
      removeKeyword(keyword) {
        const { RULES } = this;
        delete RULES.keywords[keyword];
        delete RULES.all[keyword];
        for (const group of RULES.rules) {
          const i2 = group.rules.findIndex((rule) => rule.keyword === keyword);
          if (i2 >= 0)
            group.rules.splice(i2, 1);
        }
        return this;
      }
      // Add format
      addFormat(name, format) {
        if (typeof format == "string")
          format = new RegExp(format);
        this.formats[name] = format;
        return this;
      }
      errorsText(errors = this.errors, { separator = ", ", dataVar = "data" } = {}) {
        if (!errors || errors.length === 0)
          return "No errors";
        return errors.map((e2) => `${dataVar}${e2.instancePath} ${e2.message}`).reduce((text, msg) => text + separator + msg);
      }
      $dataMetaSchema(metaSchema, keywordsJsonPointers) {
        const rules = this.RULES.all;
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        for (const jsonPointer of keywordsJsonPointers) {
          const segments = jsonPointer.split("/").slice(1);
          let keywords = metaSchema;
          for (const seg of segments)
            keywords = keywords[seg];
          for (const key in rules) {
            const rule = rules[key];
            if (typeof rule != "object")
              continue;
            const { $data } = rule.definition;
            const schema = keywords[key];
            if ($data && schema)
              keywords[key] = schemaOrData(schema);
          }
        }
        return metaSchema;
      }
      _removeAllSchemas(schemas, regex) {
        for (const keyRef in schemas) {
          const sch = schemas[keyRef];
          if (!regex || regex.test(keyRef)) {
            if (typeof sch == "string") {
              delete schemas[keyRef];
            } else if (sch && !sch.meta) {
              this._cache.delete(sch.schema);
              delete schemas[keyRef];
            }
          }
        }
      }
      _addSchema(schema, meta2, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
        let id;
        const { schemaId } = this.opts;
        if (typeof schema == "object") {
          id = schema[schemaId];
        } else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          else if (typeof schema != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let sch = this._cache.get(schema);
        if (sch !== void 0)
          return sch;
        baseId = (0, resolve_1.normalizeId)(id || baseId);
        const localRefs = resolve_1.getSchemaRefs.call(this, schema, baseId);
        sch = new compile_1.SchemaEnv({ schema, schemaId, meta: meta2, baseId, localRefs });
        this._cache.set(sch.schema, sch);
        if (addSchema && !baseId.startsWith("#")) {
          if (baseId)
            this._checkUnique(baseId);
          this.refs[baseId] = sch;
        }
        if (validateSchema)
          this.validateSchema(schema, true);
        return sch;
      }
      _checkUnique(id) {
        if (this.schemas[id] || this.refs[id]) {
          throw new Error(`schema with key or id "${id}" already exists`);
        }
      }
      _compileSchemaEnv(sch) {
        if (sch.meta)
          this._compileMetaSchema(sch);
        else
          compile_1.compileSchema.call(this, sch);
        if (!sch.validate)
          throw new Error("ajv implementation error");
        return sch.validate;
      }
      _compileMetaSchema(sch) {
        const currentOpts = this.opts;
        this.opts = this._metaOpts;
        try {
          compile_1.compileSchema.call(this, sch);
        } finally {
          this.opts = currentOpts;
        }
      }
    };
    Ajv2.ValidationError = validation_error_1.default;
    Ajv2.MissingRefError = ref_error_1.default;
    exports.default = Ajv2;
    function checkOptions(checkOpts, options, msg, log = "error") {
      for (const key in checkOpts) {
        const opt = key;
        if (opt in options)
          this.logger[log](`${msg}: option ${key}. ${checkOpts[opt]}`);
      }
    }
    function getSchEnv(keyRef) {
      keyRef = (0, resolve_1.normalizeId)(keyRef);
      return this.schemas[keyRef] || this.refs[keyRef];
    }
    function addInitialSchemas() {
      const optsSchemas = this.opts.schemas;
      if (!optsSchemas)
        return;
      if (Array.isArray(optsSchemas))
        this.addSchema(optsSchemas);
      else
        for (const key in optsSchemas)
          this.addSchema(optsSchemas[key], key);
    }
    function addInitialFormats() {
      for (const name in this.opts.formats) {
        const format = this.opts.formats[name];
        if (format)
          this.addFormat(name, format);
      }
    }
    function addInitialKeywords(defs) {
      if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const keyword in defs) {
        const def = defs[keyword];
        if (!def.keyword)
          def.keyword = keyword;
        this.addKeyword(def);
      }
    }
    function getMetaSchemaOptions() {
      const metaOpts = { ...this.opts };
      for (const opt of META_IGNORE_OPTIONS)
        delete metaOpts[opt];
      return metaOpts;
    }
    var noLogs = { log() {
    }, warn() {
    }, error() {
    } };
    function getLogger(logger) {
      if (logger === false)
        return noLogs;
      if (logger === void 0)
        return console;
      if (logger.log && logger.warn && logger.error)
        return logger;
      throw new Error("logger must implement log, warn and error methods");
    }
    var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
    function checkKeyword(keyword, def) {
      const { RULES } = this;
      (0, util_1.eachItem)(keyword, (kwd) => {
        if (RULES.keywords[kwd])
          throw new Error(`Keyword ${kwd} is already defined`);
        if (!KEYWORD_NAME.test(kwd))
          throw new Error(`Keyword ${kwd} has invalid name`);
      });
      if (!def)
        return;
      if (def.$data && !("code" in def || "validate" in def)) {
        throw new Error('$data keyword must have "code" or "validate" function');
      }
    }
    function addRule(keyword, definition, dataType) {
      var _a;
      const post = definition === null || definition === void 0 ? void 0 : definition.post;
      if (dataType && post)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES } = this;
      let ruleGroup = post ? RULES.post : RULES.rules.find(({ type: t }) => t === dataType);
      if (!ruleGroup) {
        ruleGroup = { type: dataType, rules: [] };
        RULES.rules.push(ruleGroup);
      }
      RULES.keywords[keyword] = true;
      if (!definition)
        return;
      const rule = {
        keyword,
        definition: {
          ...definition,
          type: (0, dataType_1.getJSONTypes)(definition.type),
          schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType)
        }
      };
      if (definition.before)
        addBeforeRule.call(this, ruleGroup, rule, definition.before);
      else
        ruleGroup.rules.push(rule);
      RULES.all[keyword] = rule;
      (_a = definition.implements) === null || _a === void 0 ? void 0 : _a.forEach((kwd) => this.addKeyword(kwd));
    }
    function addBeforeRule(ruleGroup, rule, before) {
      const i2 = ruleGroup.rules.findIndex((_rule) => _rule.keyword === before);
      if (i2 >= 0) {
        ruleGroup.rules.splice(i2, 0, rule);
      } else {
        ruleGroup.rules.push(rule);
        this.logger.warn(`rule ${before} is not defined`);
      }
    }
    function keywordMetaschema(def) {
      let { metaSchema } = def;
      if (metaSchema === void 0)
        return;
      if (def.$data && this.opts.$data)
        metaSchema = schemaOrData(metaSchema);
      def.validateSchema = this.compile(metaSchema, true);
    }
    var $dataRef = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function schemaOrData(schema) {
      return { anyOf: [schema, $dataRef] };
    }
  }
});

// node_modules/ajv/dist/vocabularies/core/id.js
var require_id = __commonJS({
  "node_modules/ajv/dist/vocabularies/core/id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var def = {
      keyword: "id",
      code() {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/core/ref.js
var require_ref = __commonJS({
  "node_modules/ajv/dist/vocabularies/core/ref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.callRef = exports.getValidate = void 0;
    var ref_error_1 = require_ref_error();
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var compile_1 = require_compile();
    var util_1 = require_util();
    var def = {
      keyword: "$ref",
      schemaType: "string",
      code(cxt) {
        const { gen, schema: $ref, it } = cxt;
        const { baseId, schemaEnv: env, validateName, opts, self } = it;
        const { root } = env;
        if (($ref === "#" || $ref === "#/") && baseId === root.baseId)
          return callRootRef();
        const schOrEnv = compile_1.resolveRef.call(self, root, baseId, $ref);
        if (schOrEnv === void 0)
          throw new ref_error_1.default(it.opts.uriResolver, baseId, $ref);
        if (schOrEnv instanceof compile_1.SchemaEnv)
          return callValidate(schOrEnv);
        return inlineRefSchema(schOrEnv);
        function callRootRef() {
          if (env === root)
            return callRef(cxt, validateName, env, env.$async);
          const rootName = gen.scopeValue("root", { ref: root });
          return callRef(cxt, (0, codegen_1._)`${rootName}.validate`, root, root.$async);
        }
        function callValidate(sch) {
          const v2 = getValidate(cxt, sch);
          callRef(cxt, v2, sch, sch.$async);
        }
        function inlineRefSchema(sch) {
          const schName = gen.scopeValue("schema", opts.code.source === true ? { ref: sch, code: (0, codegen_1.stringify)(sch) } : { ref: sch });
          const valid = gen.name("valid");
          const schCxt = cxt.subschema({
            schema: sch,
            dataTypes: [],
            schemaPath: codegen_1.nil,
            topSchemaRef: schName,
            errSchemaPath: $ref
          }, valid);
          cxt.mergeEvaluated(schCxt);
          cxt.ok(valid);
        }
      }
    };
    function getValidate(cxt, sch) {
      const { gen } = cxt;
      return sch.validate ? gen.scopeValue("validate", { ref: sch.validate }) : (0, codegen_1._)`${gen.scopeValue("wrapper", { ref: sch })}.validate`;
    }
    exports.getValidate = getValidate;
    function callRef(cxt, v2, sch, $async) {
      const { gen, it } = cxt;
      const { allErrors, schemaEnv: env, opts } = it;
      const passCxt = opts.passContext ? names_1.default.this : codegen_1.nil;
      if ($async)
        callAsyncRef();
      else
        callSyncRef();
      function callAsyncRef() {
        if (!env.$async)
          throw new Error("async schema referenced by sync schema");
        const valid = gen.let("valid");
        gen.try(() => {
          gen.code((0, codegen_1._)`await ${(0, code_1.callValidateCode)(cxt, v2, passCxt)}`);
          addEvaluatedFrom(v2);
          if (!allErrors)
            gen.assign(valid, true);
        }, (e2) => {
          gen.if((0, codegen_1._)`!(${e2} instanceof ${it.ValidationError})`, () => gen.throw(e2));
          addErrorsFrom(e2);
          if (!allErrors)
            gen.assign(valid, false);
        });
        cxt.ok(valid);
      }
      function callSyncRef() {
        cxt.result((0, code_1.callValidateCode)(cxt, v2, passCxt), () => addEvaluatedFrom(v2), () => addErrorsFrom(v2));
      }
      function addErrorsFrom(source) {
        const errs = (0, codegen_1._)`${source}.errors`;
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`);
        gen.assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
      }
      function addEvaluatedFrom(source) {
        var _a;
        if (!it.opts.unevaluated)
          return;
        const schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
        if (it.props !== true) {
          if (schEvaluated && !schEvaluated.dynamicProps) {
            if (schEvaluated.props !== void 0) {
              it.props = util_1.mergeEvaluated.props(gen, schEvaluated.props, it.props);
            }
          } else {
            const props = gen.var("props", (0, codegen_1._)`${source}.evaluated.props`);
            it.props = util_1.mergeEvaluated.props(gen, props, it.props, codegen_1.Name);
          }
        }
        if (it.items !== true) {
          if (schEvaluated && !schEvaluated.dynamicItems) {
            if (schEvaluated.items !== void 0) {
              it.items = util_1.mergeEvaluated.items(gen, schEvaluated.items, it.items);
            }
          } else {
            const items = gen.var("items", (0, codegen_1._)`${source}.evaluated.items`);
            it.items = util_1.mergeEvaluated.items(gen, items, it.items, codegen_1.Name);
          }
        }
      }
    }
    exports.callRef = callRef;
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/core/index.js
var require_core2 = __commonJS({
  "node_modules/ajv/dist/vocabularies/core/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var id_1 = require_id();
    var ref_1 = require_ref();
    var core = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      { keyword: "$comment" },
      "definitions",
      id_1.default,
      ref_1.default
    ];
    exports.default = core;
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitNumber.js
var require_limitNumber = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitNumber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var ops = codegen_1.operators;
    var KWDs = {
      maximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
      minimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
      exclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
      exclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
    };
    var error = {
      message: ({ keyword, schemaCode }) => (0, codegen_1.str)`must be ${KWDs[keyword].okStr} ${schemaCode}`,
      params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
    };
    var def = {
      keyword: Object.keys(KWDs),
      type: "number",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        cxt.fail$data((0, codegen_1._)`${data} ${KWDs[keyword].fail} ${schemaCode} || isNaN(${data})`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/multipleOf.js
var require_multipleOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/multipleOf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must be multiple of ${schemaCode}`,
      params: ({ schemaCode }) => (0, codegen_1._)`{multipleOf: ${schemaCode}}`
    };
    var def = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, schemaCode, it } = cxt;
        const prec = it.opts.multipleOfPrecision;
        const res = gen.let("res");
        const invalid = prec ? (0, codegen_1._)`Math.abs(Math.round(${res}) - ${res}) > 1e-${prec}` : (0, codegen_1._)`${res} !== parseInt(${res})`;
        cxt.fail$data((0, codegen_1._)`(${schemaCode} === 0 || (${res} = ${data}/${schemaCode}, ${invalid}))`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/runtime/ucs2length.js
var require_ucs2length = __commonJS({
  "node_modules/ajv/dist/runtime/ucs2length.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ucs2length(str) {
      const len = str.length;
      let length = 0;
      let pos = 0;
      let value;
      while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 55296 && value <= 56319 && pos < len) {
          value = str.charCodeAt(pos);
          if ((value & 64512) === 56320)
            pos++;
        }
      }
      return length;
    }
    exports.default = ucs2length;
    ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitLength.js
var require_limitLength = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitLength.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var ucs2length_1 = require_ucs2length();
    var error = {
      message({ keyword, schemaCode }) {
        const comp = keyword === "maxLength" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} characters`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    };
    var def = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode, it } = cxt;
        const op = keyword === "maxLength" ? codegen_1.operators.GT : codegen_1.operators.LT;
        const len = it.opts.unicode === false ? (0, codegen_1._)`${data}.length` : (0, codegen_1._)`${(0, util_1.useFunc)(cxt.gen, ucs2length_1.default)}(${data})`;
        cxt.fail$data((0, codegen_1._)`${len} ${op} ${schemaCode}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/pattern.js
var require_pattern = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var util_1 = require_util();
    var codegen_1 = require_codegen();
    var error = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must match pattern "${schemaCode}"`,
      params: ({ schemaCode }) => (0, codegen_1._)`{pattern: ${schemaCode}}`
    };
    var def = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        const u2 = it.opts.unicodeRegExp ? "u" : "";
        if ($data) {
          const { regExp } = it.opts.code;
          const regExpCode = regExp.code === "new RegExp" ? (0, codegen_1._)`new RegExp` : (0, util_1.useFunc)(gen, regExp);
          const valid = gen.let("valid");
          gen.try(() => gen.assign(valid, (0, codegen_1._)`${regExpCode}(${schemaCode}, ${u2}).test(${data})`), () => gen.assign(valid, false));
          cxt.fail$data((0, codegen_1._)`!${valid}`);
        } else {
          const regExp = (0, code_1.usePattern)(cxt, schema);
          cxt.fail$data((0, codegen_1._)`!${regExp}.test(${data})`);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitProperties.js
var require_limitProperties = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message({ keyword, schemaCode }) {
        const comp = keyword === "maxProperties" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} properties`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    };
    var def = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxProperties" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`Object.keys(${data}).length ${op} ${schemaCode}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/required.js
var require_required = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/required.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { missingProperty } }) => (0, codegen_1.str)`must have required property '${missingProperty}'`,
      params: ({ params: { missingProperty } }) => (0, codegen_1._)`{missingProperty: ${missingProperty}}`
    };
    var def = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: true,
      error,
      code(cxt) {
        const { gen, schema, schemaCode, data, $data, it } = cxt;
        const { opts } = it;
        if (!$data && schema.length === 0)
          return;
        const useLoop = schema.length >= opts.loopRequired;
        if (it.allErrors)
          allErrorsMode();
        else
          exitOnErrorMode();
        if (opts.strictRequired) {
          const props = cxt.parentSchema.properties;
          const { definedProperties } = cxt.it;
          for (const requiredKey of schema) {
            if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === void 0 && !definedProperties.has(requiredKey)) {
              const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
              const msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
              (0, util_1.checkStrictMode)(it, msg, it.opts.strictRequired);
            }
          }
        }
        function allErrorsMode() {
          if (useLoop || $data) {
            cxt.block$data(codegen_1.nil, loopAllRequired);
          } else {
            for (const prop of schema) {
              (0, code_1.checkReportMissingProp)(cxt, prop);
            }
          }
        }
        function exitOnErrorMode() {
          const missing = gen.let("missing");
          if (useLoop || $data) {
            const valid = gen.let("valid", true);
            cxt.block$data(valid, () => loopUntilMissing(missing, valid));
            cxt.ok(valid);
          } else {
            gen.if((0, code_1.checkMissingProp)(cxt, schema, missing));
            (0, code_1.reportMissingProp)(cxt, missing);
            gen.else();
          }
        }
        function loopAllRequired() {
          gen.forOf("prop", schemaCode, (prop) => {
            cxt.setParams({ missingProperty: prop });
            gen.if((0, code_1.noPropertyInData)(gen, data, prop, opts.ownProperties), () => cxt.error());
          });
        }
        function loopUntilMissing(missing, valid) {
          cxt.setParams({ missingProperty: missing });
          gen.forOf(missing, schemaCode, () => {
            gen.assign(valid, (0, code_1.propertyInData)(gen, data, missing, opts.ownProperties));
            gen.if((0, codegen_1.not)(valid), () => {
              cxt.error();
              gen.break();
            });
          }, codegen_1.nil);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitItems.js
var require_limitItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitItems.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message({ keyword, schemaCode }) {
        const comp = keyword === "maxItems" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} items`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    };
    var def = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxItems" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`${data}.length ${op} ${schemaCode}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS({
  "node_modules/ajv/dist/runtime/equal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var equal = require_fast_deep_equal();
    equal.code = 'require("ajv/dist/runtime/equal").default';
    exports.default = equal;
  }
});

// node_modules/ajv/dist/vocabularies/validation/uniqueItems.js
var require_uniqueItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/uniqueItems.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dataType_1 = require_dataType();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var equal_1 = require_equal();
    var error = {
      message: ({ params: { i: i2, j: j3 } }) => (0, codegen_1.str)`must NOT have duplicate items (items ## ${j3} and ${i2} are identical)`,
      params: ({ params: { i: i2, j: j3 } }) => (0, codegen_1._)`{i: ${i2}, j: ${j3}}`
    };
    var def = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schema, parentSchema, schemaCode, it } = cxt;
        if (!$data && !schema)
          return;
        const valid = gen.let("valid");
        const itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
        cxt.block$data(valid, validateUniqueItems, (0, codegen_1._)`${schemaCode} === false`);
        cxt.ok(valid);
        function validateUniqueItems() {
          const i2 = gen.let("i", (0, codegen_1._)`${data}.length`);
          const j3 = gen.let("j");
          cxt.setParams({ i: i2, j: j3 });
          gen.assign(valid, true);
          gen.if((0, codegen_1._)`${i2} > 1`, () => (canOptimize() ? loopN : loopN2)(i2, j3));
        }
        function canOptimize() {
          return itemTypes.length > 0 && !itemTypes.some((t) => t === "object" || t === "array");
        }
        function loopN(i2, j3) {
          const item = gen.name("item");
          const wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong);
          const indices = gen.const("indices", (0, codegen_1._)`{}`);
          gen.for((0, codegen_1._)`;${i2}--;`, () => {
            gen.let(item, (0, codegen_1._)`${data}[${i2}]`);
            gen.if(wrongType, (0, codegen_1._)`continue`);
            if (itemTypes.length > 1)
              gen.if((0, codegen_1._)`typeof ${item} == "string"`, (0, codegen_1._)`${item} += "_"`);
            gen.if((0, codegen_1._)`typeof ${indices}[${item}] == "number"`, () => {
              gen.assign(j3, (0, codegen_1._)`${indices}[${item}]`);
              cxt.error();
              gen.assign(valid, false).break();
            }).code((0, codegen_1._)`${indices}[${item}] = ${i2}`);
          });
        }
        function loopN2(i2, j3) {
          const eql = (0, util_1.useFunc)(gen, equal_1.default);
          const outer = gen.name("outer");
          gen.label(outer).for((0, codegen_1._)`;${i2}--;`, () => gen.for((0, codegen_1._)`${j3} = ${i2}; ${j3}--;`, () => gen.if((0, codegen_1._)`${eql}(${data}[${i2}], ${data}[${j3}])`, () => {
            cxt.error();
            gen.assign(valid, false).break(outer);
          })));
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/const.js
var require_const = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/const.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var equal_1 = require_equal();
    var error = {
      message: "must be equal to constant",
      params: ({ schemaCode }) => (0, codegen_1._)`{allowedValue: ${schemaCode}}`
    };
    var def = {
      keyword: "const",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schemaCode, schema } = cxt;
        if ($data || schema && typeof schema == "object") {
          cxt.fail$data((0, codegen_1._)`!${(0, util_1.useFunc)(gen, equal_1.default)}(${data}, ${schemaCode})`);
        } else {
          cxt.fail((0, codegen_1._)`${schema} !== ${data}`);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/enum.js
var require_enum = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var equal_1 = require_equal();
    var error = {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode }) => (0, codegen_1._)`{allowedValues: ${schemaCode}}`
    };
    var def = {
      keyword: "enum",
      schemaType: "array",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        if (!$data && schema.length === 0)
          throw new Error("enum must have non-empty array");
        const useLoop = schema.length >= it.opts.loopEnum;
        let eql;
        const getEql = () => eql !== null && eql !== void 0 ? eql : eql = (0, util_1.useFunc)(gen, equal_1.default);
        let valid;
        if (useLoop || $data) {
          valid = gen.let("valid");
          cxt.block$data(valid, loopEnum);
        } else {
          if (!Array.isArray(schema))
            throw new Error("ajv implementation error");
          const vSchema = gen.const("vSchema", schemaCode);
          valid = (0, codegen_1.or)(...schema.map((_x, i2) => equalCode(vSchema, i2)));
        }
        cxt.pass(valid);
        function loopEnum() {
          gen.assign(valid, false);
          gen.forOf("v", schemaCode, (v2) => gen.if((0, codegen_1._)`${getEql()}(${data}, ${v2})`, () => gen.assign(valid, true).break()));
        }
        function equalCode(vSchema, i2) {
          const sch = schema[i2];
          return typeof sch === "object" && sch !== null ? (0, codegen_1._)`${getEql()}(${data}, ${vSchema}[${i2}])` : (0, codegen_1._)`${data} === ${sch}`;
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/index.js
var require_validation = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var limitNumber_1 = require_limitNumber();
    var multipleOf_1 = require_multipleOf();
    var limitLength_1 = require_limitLength();
    var pattern_1 = require_pattern();
    var limitProperties_1 = require_limitProperties();
    var required_1 = require_required();
    var limitItems_1 = require_limitItems();
    var uniqueItems_1 = require_uniqueItems();
    var const_1 = require_const();
    var enum_1 = require_enum();
    var validation = [
      // number
      limitNumber_1.default,
      multipleOf_1.default,
      // string
      limitLength_1.default,
      pattern_1.default,
      // object
      limitProperties_1.default,
      required_1.default,
      // array
      limitItems_1.default,
      uniqueItems_1.default,
      // any
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      const_1.default,
      enum_1.default
    ];
    exports.default = validation;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/additionalItems.js
var require_additionalItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/additionalItems.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateAdditionalItems = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
      params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
    };
    var def = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error,
      code(cxt) {
        const { parentSchema, it } = cxt;
        const { items } = parentSchema;
        if (!Array.isArray(items)) {
          (0, util_1.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        validateAdditionalItems(cxt, items);
      }
    };
    function validateAdditionalItems(cxt, items) {
      const { gen, schema, data, keyword, it } = cxt;
      it.items = true;
      const len = gen.const("len", (0, codegen_1._)`${data}.length`);
      if (schema === false) {
        cxt.setParams({ len: items.length });
        cxt.pass((0, codegen_1._)`${len} <= ${items.length}`);
      } else if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
        const valid = gen.var("valid", (0, codegen_1._)`${len} <= ${items.length}`);
        gen.if((0, codegen_1.not)(valid), () => validateItems(valid));
        cxt.ok(valid);
      }
      function validateItems(valid) {
        gen.forRange("i", items.length, len, (i2) => {
          cxt.subschema({ keyword, dataProp: i2, dataPropType: util_1.Type.Num }, valid);
          if (!it.allErrors)
            gen.if((0, codegen_1.not)(valid), () => gen.break());
        });
      }
    }
    exports.validateAdditionalItems = validateAdditionalItems;
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/items.js
var require_items = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/items.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateTuple = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var code_1 = require_code2();
    var def = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(cxt) {
        const { schema, it } = cxt;
        if (Array.isArray(schema))
          return validateTuple(cxt, "additionalItems", schema);
        it.items = true;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        cxt.ok((0, code_1.validateArray)(cxt));
      }
    };
    function validateTuple(cxt, extraItems, schArr = cxt.schema) {
      const { gen, parentSchema, data, keyword, it } = cxt;
      checkStrictTuple(parentSchema);
      if (it.opts.unevaluated && schArr.length && it.items !== true) {
        it.items = util_1.mergeEvaluated.items(gen, schArr.length, it.items);
      }
      const valid = gen.name("valid");
      const len = gen.const("len", (0, codegen_1._)`${data}.length`);
      schArr.forEach((sch, i2) => {
        if ((0, util_1.alwaysValidSchema)(it, sch))
          return;
        gen.if((0, codegen_1._)`${len} > ${i2}`, () => cxt.subschema({
          keyword,
          schemaProp: i2,
          dataProp: i2
        }, valid));
        cxt.ok(valid);
      });
      function checkStrictTuple(sch) {
        const { opts, errSchemaPath } = it;
        const l2 = schArr.length;
        const fullTuple = l2 === sch.minItems && (l2 === sch.maxItems || sch[extraItems] === false);
        if (opts.strictTuples && !fullTuple) {
          const msg = `"${keyword}" is ${l2}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
          (0, util_1.checkStrictMode)(it, msg, opts.strictTuples);
        }
      }
    }
    exports.validateTuple = validateTuple;
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/prefixItems.js
var require_prefixItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/prefixItems.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var items_1 = require_items();
    var def = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: (cxt) => (0, items_1.validateTuple)(cxt, "items")
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/items2020.js
var require_items2020 = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/items2020.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var code_1 = require_code2();
    var additionalItems_1 = require_additionalItems();
    var error = {
      message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
      params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
    };
    var def = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error,
      code(cxt) {
        const { schema, parentSchema, it } = cxt;
        const { prefixItems } = parentSchema;
        it.items = true;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        if (prefixItems)
          (0, additionalItems_1.validateAdditionalItems)(cxt, prefixItems);
        else
          cxt.ok((0, code_1.validateArray)(cxt));
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/contains.js
var require_contains = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/contains.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1.str)`must contain at least ${min} valid item(s)` : (0, codegen_1.str)`must contain at least ${min} and no more than ${max} valid item(s)`,
      params: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1._)`{minContains: ${min}}` : (0, codegen_1._)`{minContains: ${min}, maxContains: ${max}}`
    };
    var def = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, parentSchema, data, it } = cxt;
        let min;
        let max;
        const { minContains, maxContains } = parentSchema;
        if (it.opts.next) {
          min = minContains === void 0 ? 1 : minContains;
          max = maxContains;
        } else {
          min = 1;
        }
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        cxt.setParams({ min, max });
        if (max === void 0 && min === 0) {
          (0, util_1.checkStrictMode)(it, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
          return;
        }
        if (max !== void 0 && min > max) {
          (0, util_1.checkStrictMode)(it, `"minContains" > "maxContains" is always invalid`);
          cxt.fail();
          return;
        }
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
          let cond = (0, codegen_1._)`${len} >= ${min}`;
          if (max !== void 0)
            cond = (0, codegen_1._)`${cond} && ${len} <= ${max}`;
          cxt.pass(cond);
          return;
        }
        it.items = true;
        const valid = gen.name("valid");
        if (max === void 0 && min === 1) {
          validateItems(valid, () => gen.if(valid, () => gen.break()));
        } else if (min === 0) {
          gen.let(valid, true);
          if (max !== void 0)
            gen.if((0, codegen_1._)`${data}.length > 0`, validateItemsWithCount);
        } else {
          gen.let(valid, false);
          validateItemsWithCount();
        }
        cxt.result(valid, () => cxt.reset());
        function validateItemsWithCount() {
          const schValid = gen.name("_valid");
          const count = gen.let("count", 0);
          validateItems(schValid, () => gen.if(schValid, () => checkLimits(count)));
        }
        function validateItems(_valid, block) {
          gen.forRange("i", 0, len, (i2) => {
            cxt.subschema({
              keyword: "contains",
              dataProp: i2,
              dataPropType: util_1.Type.Num,
              compositeRule: true
            }, _valid);
            block();
          });
        }
        function checkLimits(count) {
          gen.code((0, codegen_1._)`${count}++`);
          if (max === void 0) {
            gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, true).break());
          } else {
            gen.if((0, codegen_1._)`${count} > ${max}`, () => gen.assign(valid, false).break());
            if (min === 1)
              gen.assign(valid, true);
            else
              gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, true));
          }
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/dependencies.js
var require_dependencies = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/dependencies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var code_1 = require_code2();
    exports.error = {
      message: ({ params: { property, depsCount, deps } }) => {
        const property_ies = depsCount === 1 ? "property" : "properties";
        return (0, codegen_1.str)`must have ${property_ies} ${deps} when property ${property} is present`;
      },
      params: ({ params: { property, depsCount, deps, missingProperty } }) => (0, codegen_1._)`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
      // TODO change to reference
    };
    var def = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: exports.error,
      code(cxt) {
        const [propDeps, schDeps] = splitDependencies(cxt);
        validatePropertyDeps(cxt, propDeps);
        validateSchemaDeps(cxt, schDeps);
      }
    };
    function splitDependencies({ schema }) {
      const propertyDeps = {};
      const schemaDeps = {};
      for (const key in schema) {
        if (key === "__proto__")
          continue;
        const deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
      }
      return [propertyDeps, schemaDeps];
    }
    function validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
      const { gen, data, it } = cxt;
      if (Object.keys(propertyDeps).length === 0)
        return;
      const missing = gen.let("missing");
      for (const prop in propertyDeps) {
        const deps = propertyDeps[prop];
        if (deps.length === 0)
          continue;
        const hasProperty = (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
          property: prop,
          depsCount: deps.length,
          deps: deps.join(", ")
        });
        if (it.allErrors) {
          gen.if(hasProperty, () => {
            for (const depProp of deps) {
              (0, code_1.checkReportMissingProp)(cxt, depProp);
            }
          });
        } else {
          gen.if((0, codegen_1._)`${hasProperty} && (${(0, code_1.checkMissingProp)(cxt, deps, missing)})`);
          (0, code_1.reportMissingProp)(cxt, missing);
          gen.else();
        }
      }
    }
    exports.validatePropertyDeps = validatePropertyDeps;
    function validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
      const { gen, data, keyword, it } = cxt;
      const valid = gen.name("valid");
      for (const prop in schemaDeps) {
        if ((0, util_1.alwaysValidSchema)(it, schemaDeps[prop]))
          continue;
        gen.if(
          (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties),
          () => {
            const schCxt = cxt.subschema({ keyword, schemaProp: prop }, valid);
            cxt.mergeValidEvaluated(schCxt, valid);
          },
          () => gen.var(valid, true)
          // TODO var
        );
        cxt.ok(valid);
      }
    }
    exports.validateSchemaDeps = validateSchemaDeps;
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/propertyNames.js
var require_propertyNames = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/propertyNames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: "property name must be valid",
      params: ({ params }) => (0, codegen_1._)`{propertyName: ${params.propertyName}}`
    };
    var def = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error,
      code(cxt) {
        const { gen, schema, data, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        const valid = gen.name("valid");
        gen.forIn("key", data, (key) => {
          cxt.setParams({ propertyName: key });
          cxt.subschema({
            keyword: "propertyNames",
            data: key,
            dataTypes: ["string"],
            propertyName: key,
            compositeRule: true
          }, valid);
          gen.if((0, codegen_1.not)(valid), () => {
            cxt.error(true);
            if (!it.allErrors)
              gen.break();
          });
        });
        cxt.ok(valid);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js
var require_additionalProperties = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var util_1 = require_util();
    var error = {
      message: "must NOT have additional properties",
      params: ({ params }) => (0, codegen_1._)`{additionalProperty: ${params.additionalProperty}}`
    };
    var def = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: true,
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, parentSchema, data, errsCount, it } = cxt;
        if (!errsCount)
          throw new Error("ajv implementation error");
        const { allErrors, opts } = it;
        it.props = true;
        if (opts.removeAdditional !== "all" && (0, util_1.alwaysValidSchema)(it, schema))
          return;
        const props = (0, code_1.allSchemaProperties)(parentSchema.properties);
        const patProps = (0, code_1.allSchemaProperties)(parentSchema.patternProperties);
        checkAdditionalProperties();
        cxt.ok((0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
        function checkAdditionalProperties() {
          gen.forIn("key", data, (key) => {
            if (!props.length && !patProps.length)
              additionalPropertyCode(key);
            else
              gen.if(isAdditional(key), () => additionalPropertyCode(key));
          });
        }
        function isAdditional(key) {
          let definedProp;
          if (props.length > 8) {
            const propsSchema = (0, util_1.schemaRefOrVal)(it, parentSchema.properties, "properties");
            definedProp = (0, code_1.isOwnProperty)(gen, propsSchema, key);
          } else if (props.length) {
            definedProp = (0, codegen_1.or)(...props.map((p2) => (0, codegen_1._)`${key} === ${p2}`));
          } else {
            definedProp = codegen_1.nil;
          }
          if (patProps.length) {
            definedProp = (0, codegen_1.or)(definedProp, ...patProps.map((p2) => (0, codegen_1._)`${(0, code_1.usePattern)(cxt, p2)}.test(${key})`));
          }
          return (0, codegen_1.not)(definedProp);
        }
        function deleteAdditional(key) {
          gen.code((0, codegen_1._)`delete ${data}[${key}]`);
        }
        function additionalPropertyCode(key) {
          if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
            deleteAdditional(key);
            return;
          }
          if (schema === false) {
            cxt.setParams({ additionalProperty: key });
            cxt.error();
            if (!allErrors)
              gen.break();
            return;
          }
          if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
            const valid = gen.name("valid");
            if (opts.removeAdditional === "failing") {
              applyAdditionalSchema(key, valid, false);
              gen.if((0, codegen_1.not)(valid), () => {
                cxt.reset();
                deleteAdditional(key);
              });
            } else {
              applyAdditionalSchema(key, valid);
              if (!allErrors)
                gen.if((0, codegen_1.not)(valid), () => gen.break());
            }
          }
        }
        function applyAdditionalSchema(key, valid, errors) {
          const subschema = {
            keyword: "additionalProperties",
            dataProp: key,
            dataPropType: util_1.Type.Str
          };
          if (errors === false) {
            Object.assign(subschema, {
              compositeRule: true,
              createErrors: false,
              allErrors: false
            });
          }
          cxt.subschema(subschema, valid);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/properties.js
var require_properties = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/properties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var validate_1 = require_validate();
    var code_1 = require_code2();
    var util_1 = require_util();
    var additionalProperties_1 = require_additionalProperties();
    var def = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(cxt) {
        const { gen, schema, parentSchema, data, it } = cxt;
        if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === void 0) {
          additionalProperties_1.default.code(new validate_1.KeywordCxt(it, additionalProperties_1.default, "additionalProperties"));
        }
        const allProps = (0, code_1.allSchemaProperties)(schema);
        for (const prop of allProps) {
          it.definedProperties.add(prop);
        }
        if (it.opts.unevaluated && allProps.length && it.props !== true) {
          it.props = util_1.mergeEvaluated.props(gen, (0, util_1.toHash)(allProps), it.props);
        }
        const properties = allProps.filter((p2) => !(0, util_1.alwaysValidSchema)(it, schema[p2]));
        if (properties.length === 0)
          return;
        const valid = gen.name("valid");
        for (const prop of properties) {
          if (hasDefault(prop)) {
            applyPropertySchema(prop);
          } else {
            gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties));
            applyPropertySchema(prop);
            if (!it.allErrors)
              gen.else().var(valid, true);
            gen.endIf();
          }
          cxt.it.definedProperties.add(prop);
          cxt.ok(valid);
        }
        function hasDefault(prop) {
          return it.opts.useDefaults && !it.compositeRule && schema[prop].default !== void 0;
        }
        function applyPropertySchema(prop) {
          cxt.subschema({
            keyword: "properties",
            schemaProp: prop,
            dataProp: prop
          }, valid);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/patternProperties.js
var require_patternProperties = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/patternProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var util_2 = require_util();
    var def = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(cxt) {
        const { gen, schema, data, parentSchema, it } = cxt;
        const { opts } = it;
        const patterns = (0, code_1.allSchemaProperties)(schema);
        const alwaysValidPatterns = patterns.filter((p2) => (0, util_1.alwaysValidSchema)(it, schema[p2]));
        if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) {
          return;
        }
        const checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
        const valid = gen.name("valid");
        if (it.props !== true && !(it.props instanceof codegen_1.Name)) {
          it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
        }
        const { props } = it;
        validatePatternProperties();
        function validatePatternProperties() {
          for (const pat of patterns) {
            if (checkProperties)
              checkMatchingProperties(pat);
            if (it.allErrors) {
              validateProperties(pat);
            } else {
              gen.var(valid, true);
              validateProperties(pat);
              gen.if(valid);
            }
          }
        }
        function checkMatchingProperties(pat) {
          for (const prop in checkProperties) {
            if (new RegExp(pat).test(prop)) {
              (0, util_1.checkStrictMode)(it, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
            }
          }
        }
        function validateProperties(pat) {
          gen.forIn("key", data, (key) => {
            gen.if((0, codegen_1._)`${(0, code_1.usePattern)(cxt, pat)}.test(${key})`, () => {
              const alwaysValid = alwaysValidPatterns.includes(pat);
              if (!alwaysValid) {
                cxt.subschema({
                  keyword: "patternProperties",
                  schemaProp: pat,
                  dataProp: key,
                  dataPropType: util_2.Type.Str
                }, valid);
              }
              if (it.opts.unevaluated && props !== true) {
                gen.assign((0, codegen_1._)`${props}[${key}]`, true);
              } else if (!alwaysValid && !it.allErrors) {
                gen.if((0, codegen_1.not)(valid), () => gen.break());
              }
            });
          });
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/not.js
var require_not = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/not.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: true,
      code(cxt) {
        const { gen, schema, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
          cxt.fail();
          return;
        }
        const valid = gen.name("valid");
        cxt.subschema({
          keyword: "not",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, valid);
        cxt.failResult(valid, () => cxt.reset(), () => cxt.error());
      },
      error: { message: "must NOT be valid" }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/anyOf.js
var require_anyOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/anyOf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var def = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: true,
      code: code_1.validateUnion,
      error: { message: "must match a schema in anyOf" }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/oneOf.js
var require_oneOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/oneOf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: "must match exactly one schema in oneOf",
      params: ({ params }) => (0, codegen_1._)`{passingSchemas: ${params.passing}}`
    };
    var def = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, parentSchema, it } = cxt;
        if (!Array.isArray(schema))
          throw new Error("ajv implementation error");
        if (it.opts.discriminator && parentSchema.discriminator)
          return;
        const schArr = schema;
        const valid = gen.let("valid", false);
        const passing = gen.let("passing", null);
        const schValid = gen.name("_valid");
        cxt.setParams({ passing });
        gen.block(validateOneOf);
        cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
        function validateOneOf() {
          schArr.forEach((sch, i2) => {
            let schCxt;
            if ((0, util_1.alwaysValidSchema)(it, sch)) {
              gen.var(schValid, true);
            } else {
              schCxt = cxt.subschema({
                keyword: "oneOf",
                schemaProp: i2,
                compositeRule: true
              }, schValid);
            }
            if (i2 > 0) {
              gen.if((0, codegen_1._)`${schValid} && ${valid}`).assign(valid, false).assign(passing, (0, codegen_1._)`[${passing}, ${i2}]`).else();
            }
            gen.if(schValid, () => {
              gen.assign(valid, true);
              gen.assign(passing, i2);
              if (schCxt)
                cxt.mergeEvaluated(schCxt, codegen_1.Name);
            });
          });
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/allOf.js
var require_allOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/allOf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: "allOf",
      schemaType: "array",
      code(cxt) {
        const { gen, schema, it } = cxt;
        if (!Array.isArray(schema))
          throw new Error("ajv implementation error");
        const valid = gen.name("valid");
        schema.forEach((sch, i2) => {
          if ((0, util_1.alwaysValidSchema)(it, sch))
            return;
          const schCxt = cxt.subschema({ keyword: "allOf", schemaProp: i2 }, valid);
          cxt.ok(valid);
          cxt.mergeEvaluated(schCxt);
        });
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/if.js
var require_if = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/if.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params }) => (0, codegen_1.str)`must match "${params.ifClause}" schema`,
      params: ({ params }) => (0, codegen_1._)`{failingKeyword: ${params.ifClause}}`
    };
    var def = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, parentSchema, it } = cxt;
        if (parentSchema.then === void 0 && parentSchema.else === void 0) {
          (0, util_1.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
        }
        const hasThen = hasSchema(it, "then");
        const hasElse = hasSchema(it, "else");
        if (!hasThen && !hasElse)
          return;
        const valid = gen.let("valid", true);
        const schValid = gen.name("_valid");
        validateIf();
        cxt.reset();
        if (hasThen && hasElse) {
          const ifClause = gen.let("ifClause");
          cxt.setParams({ ifClause });
          gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
        } else if (hasThen) {
          gen.if(schValid, validateClause("then"));
        } else {
          gen.if((0, codegen_1.not)(schValid), validateClause("else"));
        }
        cxt.pass(valid, () => cxt.error(true));
        function validateIf() {
          const schCxt = cxt.subschema({
            keyword: "if",
            compositeRule: true,
            createErrors: false,
            allErrors: false
          }, schValid);
          cxt.mergeEvaluated(schCxt);
        }
        function validateClause(keyword, ifClause) {
          return () => {
            const schCxt = cxt.subschema({ keyword }, schValid);
            gen.assign(valid, schValid);
            cxt.mergeValidEvaluated(schCxt, valid);
            if (ifClause)
              gen.assign(ifClause, (0, codegen_1._)`${keyword}`);
            else
              cxt.setParams({ ifClause: keyword });
          };
        }
      }
    };
    function hasSchema(it, keyword) {
      const schema = it.schema[keyword];
      return schema !== void 0 && !(0, util_1.alwaysValidSchema)(it, schema);
    }
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/thenElse.js
var require_thenElse = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/thenElse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword, parentSchema, it }) {
        if (parentSchema.if === void 0)
          (0, util_1.checkStrictMode)(it, `"${keyword}" without "if" is ignored`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/index.js
var require_applicator = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var additionalItems_1 = require_additionalItems();
    var prefixItems_1 = require_prefixItems();
    var items_1 = require_items();
    var items2020_1 = require_items2020();
    var contains_1 = require_contains();
    var dependencies_1 = require_dependencies();
    var propertyNames_1 = require_propertyNames();
    var additionalProperties_1 = require_additionalProperties();
    var properties_1 = require_properties();
    var patternProperties_1 = require_patternProperties();
    var not_1 = require_not();
    var anyOf_1 = require_anyOf();
    var oneOf_1 = require_oneOf();
    var allOf_1 = require_allOf();
    var if_1 = require_if();
    var thenElse_1 = require_thenElse();
    function getApplicator(draft2020 = false) {
      const applicator = [
        // any
        not_1.default,
        anyOf_1.default,
        oneOf_1.default,
        allOf_1.default,
        if_1.default,
        thenElse_1.default,
        // object
        propertyNames_1.default,
        additionalProperties_1.default,
        dependencies_1.default,
        properties_1.default,
        patternProperties_1.default
      ];
      if (draft2020)
        applicator.push(prefixItems_1.default, items2020_1.default);
      else
        applicator.push(additionalItems_1.default, items_1.default);
      applicator.push(contains_1.default);
      return applicator;
    }
    exports.default = getApplicator;
  }
});

// node_modules/ajv/dist/vocabularies/format/format.js
var require_format = __commonJS({
  "node_modules/ajv/dist/vocabularies/format/format.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must match format "${schemaCode}"`,
      params: ({ schemaCode }) => (0, codegen_1._)`{format: ${schemaCode}}`
    };
    var def = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: true,
      error,
      code(cxt, ruleType) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        const { opts, errSchemaPath, schemaEnv, self } = it;
        if (!opts.validateFormats)
          return;
        if ($data)
          validate$DataFormat();
        else
          validateFormat();
        function validate$DataFormat() {
          const fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          const fDef = gen.const("fDef", (0, codegen_1._)`${fmts}[${schemaCode}]`);
          const fType = gen.let("fType");
          const format = gen.let("format");
          gen.if((0, codegen_1._)`typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`, () => gen.assign(fType, (0, codegen_1._)`${fDef}.type || "string"`).assign(format, (0, codegen_1._)`${fDef}.validate`), () => gen.assign(fType, (0, codegen_1._)`"string"`).assign(format, fDef));
          cxt.fail$data((0, codegen_1.or)(unknownFmt(), invalidFmt()));
          function unknownFmt() {
            if (opts.strictSchema === false)
              return codegen_1.nil;
            return (0, codegen_1._)`${schemaCode} && !${format}`;
          }
          function invalidFmt() {
            const callFormat = schemaEnv.$async ? (0, codegen_1._)`(${fDef}.async ? await ${format}(${data}) : ${format}(${data}))` : (0, codegen_1._)`${format}(${data})`;
            const validData = (0, codegen_1._)`(typeof ${format} == "function" ? ${callFormat} : ${format}.test(${data}))`;
            return (0, codegen_1._)`${format} && ${format} !== true && ${fType} === ${ruleType} && !${validData}`;
          }
        }
        function validateFormat() {
          const formatDef = self.formats[schema];
          if (!formatDef) {
            unknownFormat();
            return;
          }
          if (formatDef === true)
            return;
          const [fmtType, format, fmtRef] = getFormat(formatDef);
          if (fmtType === ruleType)
            cxt.pass(validCondition());
          function unknownFormat() {
            if (opts.strictSchema === false) {
              self.logger.warn(unknownMsg());
              return;
            }
            throw new Error(unknownMsg());
            function unknownMsg() {
              return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
            }
          }
          function getFormat(fmtDef) {
            const code = fmtDef instanceof RegExp ? (0, codegen_1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(schema)}` : void 0;
            const fmt = gen.scopeValue("formats", { key: schema, ref: fmtDef, code });
            if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) {
              return [fmtDef.type || "string", fmtDef.validate, (0, codegen_1._)`${fmt}.validate`];
            }
            return ["string", fmtDef, fmt];
          }
          function validCondition() {
            if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
              if (!schemaEnv.$async)
                throw new Error("async format in sync schema");
              return (0, codegen_1._)`await ${fmtRef}(${data})`;
            }
            return typeof format == "function" ? (0, codegen_1._)`${fmtRef}(${data})` : (0, codegen_1._)`${fmtRef}.test(${data})`;
          }
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/format/index.js
var require_format2 = __commonJS({
  "node_modules/ajv/dist/vocabularies/format/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var format_1 = require_format();
    var format = [format_1.default];
    exports.default = format;
  }
});

// node_modules/ajv/dist/vocabularies/metadata.js
var require_metadata = __commonJS({
  "node_modules/ajv/dist/vocabularies/metadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.contentVocabulary = exports.metadataVocabulary = void 0;
    exports.metadataVocabulary = [
      "title",
      "description",
      "default",
      "deprecated",
      "readOnly",
      "writeOnly",
      "examples"
    ];
    exports.contentVocabulary = [
      "contentMediaType",
      "contentEncoding",
      "contentSchema"
    ];
  }
});

// node_modules/ajv/dist/vocabularies/draft7.js
var require_draft7 = __commonJS({
  "node_modules/ajv/dist/vocabularies/draft7.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require_core2();
    var validation_1 = require_validation();
    var applicator_1 = require_applicator();
    var format_1 = require_format2();
    var metadata_1 = require_metadata();
    var draft7Vocabularies = [
      core_1.default,
      validation_1.default,
      (0, applicator_1.default)(),
      format_1.default,
      metadata_1.metadataVocabulary,
      metadata_1.contentVocabulary
    ];
    exports.default = draft7Vocabularies;
  }
});

// node_modules/ajv/dist/vocabularies/discriminator/types.js
var require_types = __commonJS({
  "node_modules/ajv/dist/vocabularies/discriminator/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiscrError = void 0;
    var DiscrError;
    (function(DiscrError2) {
      DiscrError2["Tag"] = "tag";
      DiscrError2["Mapping"] = "mapping";
    })(DiscrError || (exports.DiscrError = DiscrError = {}));
  }
});

// node_modules/ajv/dist/vocabularies/discriminator/index.js
var require_discriminator = __commonJS({
  "node_modules/ajv/dist/vocabularies/discriminator/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var types_1 = require_types();
    var compile_1 = require_compile();
    var ref_error_1 = require_ref_error();
    var util_1 = require_util();
    var error = {
      message: ({ params: { discrError, tagName } }) => discrError === types_1.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
      params: ({ params: { discrError, tag, tagName } }) => (0, codegen_1._)`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
    };
    var def = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error,
      code(cxt) {
        const { gen, data, schema, parentSchema, it } = cxt;
        const { oneOf } = parentSchema;
        if (!it.opts.discriminator) {
          throw new Error("discriminator: requires discriminator option");
        }
        const tagName = schema.propertyName;
        if (typeof tagName != "string")
          throw new Error("discriminator: requires propertyName");
        if (schema.mapping)
          throw new Error("discriminator: mapping is not supported");
        if (!oneOf)
          throw new Error("discriminator: requires oneOf keyword");
        const valid = gen.let("valid", false);
        const tag = gen.const("tag", (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(tagName)}`);
        gen.if((0, codegen_1._)`typeof ${tag} == "string"`, () => validateMapping(), () => cxt.error(false, { discrError: types_1.DiscrError.Tag, tag, tagName }));
        cxt.ok(valid);
        function validateMapping() {
          const mapping = getMapping();
          gen.if(false);
          for (const tagValue in mapping) {
            gen.elseIf((0, codegen_1._)`${tag} === ${tagValue}`);
            gen.assign(valid, applyTagSchema(mapping[tagValue]));
          }
          gen.else();
          cxt.error(false, { discrError: types_1.DiscrError.Mapping, tag, tagName });
          gen.endIf();
        }
        function applyTagSchema(schemaProp) {
          const _valid = gen.name("valid");
          const schCxt = cxt.subschema({ keyword: "oneOf", schemaProp }, _valid);
          cxt.mergeEvaluated(schCxt, codegen_1.Name);
          return _valid;
        }
        function getMapping() {
          var _a;
          const oneOfMapping = {};
          const topRequired = hasRequired(parentSchema);
          let tagRequired = true;
          for (let i2 = 0; i2 < oneOf.length; i2++) {
            let sch = oneOf[i2];
            if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
              const ref = sch.$ref;
              sch = compile_1.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, ref);
              if (sch instanceof compile_1.SchemaEnv)
                sch = sch.schema;
              if (sch === void 0)
                throw new ref_error_1.default(it.opts.uriResolver, it.baseId, ref);
            }
            const propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
            if (typeof propSch != "object") {
              throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
            }
            tagRequired = tagRequired && (topRequired || hasRequired(sch));
            addMappings(propSch, i2);
          }
          if (!tagRequired)
            throw new Error(`discriminator: "${tagName}" must be required`);
          return oneOfMapping;
          function hasRequired({ required: required2 }) {
            return Array.isArray(required2) && required2.includes(tagName);
          }
          function addMappings(sch, i2) {
            if (sch.const) {
              addMapping(sch.const, i2);
            } else if (sch.enum) {
              for (const tagValue of sch.enum) {
                addMapping(tagValue, i2);
              }
            } else {
              throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
            }
          }
          function addMapping(tagValue, i2) {
            if (typeof tagValue != "string" || tagValue in oneOfMapping) {
              throw new Error(`discriminator: "${tagName}" values must be unique strings`);
            }
            oneOfMapping[tagValue] = i2;
          }
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/refs/json-schema-draft-07.json
var require_json_schema_draft_07 = __commonJS({
  "node_modules/ajv/dist/refs/json-schema-draft-07.json"(exports, module) {
    module.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "http://json-schema.org/draft-07/schema#",
      title: "Core schema meta-schema",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $ref: "#" }
        },
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }]
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: true,
          default: []
        }
      },
      type: ["object", "boolean"],
      properties: {
        $id: {
          type: "string",
          format: "uri-reference"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        $ref: {
          type: "string",
          format: "uri-reference"
        },
        $comment: {
          type: "string"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: true,
        readOnly: {
          type: "boolean",
          default: false
        },
        examples: {
          type: "array",
          items: true
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: { $ref: "#" },
        items: {
          anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
          default: true
        },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: false
        },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }]
          }
        },
        propertyNames: { $ref: "#" },
        const: true,
        enum: {
          type: "array",
          items: true,
          minItems: 1,
          uniqueItems: true
        },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: true
            }
          ]
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: { $ref: "#" },
        then: { $ref: "#" },
        else: { $ref: "#" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      default: true
    };
  }
});

// node_modules/ajv/dist/ajv.js
var require_ajv = __commonJS({
  "node_modules/ajv/dist/ajv.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv = void 0;
    var core_1 = require_core();
    var draft7_1 = require_draft7();
    var discriminator_1 = require_discriminator();
    var draft7MetaSchema = require_json_schema_draft_07();
    var META_SUPPORT_DATA = ["/properties"];
    var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
    var Ajv2 = class extends core_1.default {
      _addVocabularies() {
        super._addVocabularies();
        draft7_1.default.forEach((v2) => this.addVocabulary(v2));
        if (this.opts.discriminator)
          this.addKeyword(discriminator_1.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        if (!this.opts.meta)
          return;
        const metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
        this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
        this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0);
      }
    };
    exports.Ajv = Ajv2;
    module.exports = exports = Ajv2;
    module.exports.Ajv = Ajv2;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Ajv2;
    var validate_1 = require_validate();
    Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
      return validate_1.KeywordCxt;
    } });
    var codegen_1 = require_codegen();
    Object.defineProperty(exports, "_", { enumerable: true, get: function() {
      return codegen_1._;
    } });
    Object.defineProperty(exports, "str", { enumerable: true, get: function() {
      return codegen_1.str;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return codegen_1.stringify;
    } });
    Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
      return codegen_1.nil;
    } });
    Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
      return codegen_1.Name;
    } });
    Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
      return codegen_1.CodeGen;
    } });
    var validation_error_1 = require_validation_error();
    Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function() {
      return validation_error_1.default;
    } });
    var ref_error_1 = require_ref_error();
    Object.defineProperty(exports, "MissingRefError", { enumerable: true, get: function() {
      return ref_error_1.default;
    } });
  }
});

// node_modules/ajv-formats/dist/formats.js
var require_formats = __commonJS({
  "node_modules/ajv-formats/dist/formats.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatNames = exports.fastFormats = exports.fullFormats = void 0;
    function fmtDef(validate, compare) {
      return { validate, compare };
    }
    exports.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: fmtDef(date, compareDate),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: fmtDef(getTime(true), compareTime),
      "date-time": fmtDef(getDateTime(true), compareDateTime),
      "iso-time": fmtDef(getTime(), compareIsoTime),
      "iso-date-time": fmtDef(getDateTime(), compareIsoDateTime),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      byte,
      // signed 32 bit integer
      int32: { type: "number", validate: validateInt32 },
      // signed 64 bit integer
      int64: { type: "number", validate: validateInt64 },
      // C-type float
      float: { type: "number", validate: validateNumber },
      // C-type double
      double: { type: "number", validate: validateNumber },
      // hint to the UI to hide input strings
      password: true,
      // unchecked string payload
      binary: true
    };
    exports.fastFormats = {
      ...exports.fullFormats,
      date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
      time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareTime),
      "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
      "iso-time": fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoTime),
      "iso-date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoDateTime),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    };
    exports.formatNames = Object.keys(exports.fullFormats);
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function date(str) {
      const matches = DATE.exec(str);
      if (!matches)
        return false;
      const year = +matches[1];
      const month = +matches[2];
      const day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    function compareDate(d1, d2) {
      if (!(d1 && d2))
        return void 0;
      if (d1 > d2)
        return 1;
      if (d1 < d2)
        return -1;
      return 0;
    }
    var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function getTime(strictTimeZone) {
      return function time(str) {
        const matches = TIME.exec(str);
        if (!matches)
          return false;
        const hr = +matches[1];
        const min = +matches[2];
        const sec = +matches[3];
        const tz = matches[4];
        const tzSign = matches[5] === "-" ? -1 : 1;
        const tzH = +(matches[6] || 0);
        const tzM = +(matches[7] || 0);
        if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
          return false;
        if (hr <= 23 && min <= 59 && sec < 60)
          return true;
        const utcMin = min - tzM * tzSign;
        const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
        return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
      };
    }
    function compareTime(s1, s2) {
      if (!(s1 && s2))
        return void 0;
      const t1 = (/* @__PURE__ */ new Date("2020-01-01T" + s1)).valueOf();
      const t2 = (/* @__PURE__ */ new Date("2020-01-01T" + s2)).valueOf();
      if (!(t1 && t2))
        return void 0;
      return t1 - t2;
    }
    function compareIsoTime(t1, t2) {
      if (!(t1 && t2))
        return void 0;
      const a12 = TIME.exec(t1);
      const a22 = TIME.exec(t2);
      if (!(a12 && a22))
        return void 0;
      t1 = a12[1] + a12[2] + a12[3];
      t2 = a22[1] + a22[2] + a22[3];
      if (t1 > t2)
        return 1;
      if (t1 < t2)
        return -1;
      return 0;
    }
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function getDateTime(strictTimeZone) {
      const time = getTime(strictTimeZone);
      return function date_time(str) {
        const dateTime = str.split(DATE_TIME_SEPARATOR);
        return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
      };
    }
    function compareDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const d1 = new Date(dt1).valueOf();
      const d2 = new Date(dt2).valueOf();
      if (!(d1 && d2))
        return void 0;
      return d1 - d2;
    }
    function compareIsoDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const [d1, t1] = dt1.split(DATE_TIME_SEPARATOR);
      const [d2, t2] = dt2.split(DATE_TIME_SEPARATOR);
      const res = compareDate(d1, d2);
      if (res === void 0)
        return void 0;
      return res || compareTime(t1, t2);
    }
    var NOT_URI_FRAGMENT = /\/|:/;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri(str) {
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }
    var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(str) {
      BYTE.lastIndex = 0;
      return BYTE.test(str);
    }
    var MIN_INT32 = -(2 ** 31);
    var MAX_INT32 = 2 ** 31 - 1;
    function validateInt32(value) {
      return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
    }
    function validateInt64(value) {
      return Number.isInteger(value);
    }
    function validateNumber() {
      return true;
    }
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str))
        return false;
      try {
        new RegExp(str);
        return true;
      } catch (e2) {
        return false;
      }
    }
  }
});

// node_modules/ajv-formats/dist/limit.js
var require_limit = __commonJS({
  "node_modules/ajv-formats/dist/limit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatLimitDefinition = void 0;
    var ajv_1 = require_ajv();
    var codegen_1 = require_codegen();
    var ops = codegen_1.operators;
    var KWDs = {
      formatMaximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
      formatMinimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
      formatExclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
    };
    var error = {
      message: ({ keyword, schemaCode }) => (0, codegen_1.str)`should be ${KWDs[keyword].okStr} ${schemaCode}`,
      params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
    };
    exports.formatLimitDefinition = {
      keyword: Object.keys(KWDs),
      type: "string",
      schemaType: "string",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, schemaCode, keyword, it } = cxt;
        const { opts, self } = it;
        if (!opts.validateFormats)
          return;
        const fCxt = new ajv_1.KeywordCxt(it, self.RULES.all.format.definition, "format");
        if (fCxt.$data)
          validate$DataFormat();
        else
          validateFormat();
        function validate$DataFormat() {
          const fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          const fmt = gen.const("fmt", (0, codegen_1._)`${fmts}[${fCxt.schemaCode}]`);
          cxt.fail$data((0, codegen_1.or)((0, codegen_1._)`typeof ${fmt} != "object"`, (0, codegen_1._)`${fmt} instanceof RegExp`, (0, codegen_1._)`typeof ${fmt}.compare != "function"`, compareCode(fmt)));
        }
        function validateFormat() {
          const format = fCxt.schema;
          const fmtDef = self.formats[format];
          if (!fmtDef || fmtDef === true)
            return;
          if (typeof fmtDef != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function") {
            throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
          }
          const fmt = gen.scopeValue("formats", {
            key: format,
            ref: fmtDef,
            code: opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(format)}` : void 0
          });
          cxt.fail$data(compareCode(fmt));
        }
        function compareCode(fmt) {
          return (0, codegen_1._)`${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    var formatLimitPlugin = (ajv) => {
      ajv.addKeyword(exports.formatLimitDefinition);
      return ajv;
    };
    exports.default = formatLimitPlugin;
  }
});

// node_modules/ajv-formats/dist/index.js
var require_dist = __commonJS({
  "node_modules/ajv-formats/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var formats_1 = require_formats();
    var limit_1 = require_limit();
    var codegen_1 = require_codegen();
    var fullName = new codegen_1.Name("fullFormats");
    var fastName = new codegen_1.Name("fastFormats");
    var formatsPlugin = (ajv, opts = { keywords: true }) => {
      if (Array.isArray(opts)) {
        addFormats(ajv, opts, formats_1.fullFormats, fullName);
        return ajv;
      }
      const [formats, exportName] = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName];
      const list = opts.formats || formats_1.formatNames;
      addFormats(ajv, list, formats, exportName);
      if (opts.keywords)
        (0, limit_1.default)(ajv);
      return ajv;
    };
    formatsPlugin.get = (name, mode = "full") => {
      const formats = mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats;
      const f2 = formats[name];
      if (!f2)
        throw new Error(`Unknown format "${name}"`);
      return f2;
    };
    function addFormats(ajv, list, fs, exportName) {
      var _a;
      var _b;
      (_a = (_b = ajv.opts.code).formats) !== null && _a !== void 0 ? _a : _b.formats = (0, codegen_1._)`require("ajv-formats/dist/formats").${exportName}`;
      for (const f2 of list)
        ajv.addFormat(f2, fs[f2]);
    }
    module.exports = exports = formatsPlugin;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = formatsPlugin;
  }
});

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k3) => typeof obj[obj[k3]] !== "number");
    const filtered = {};
    for (const k3 of validKeys) {
      filtered[k3] = obj[k3];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e2) {
      return obj[e2];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object2) => {
    const keys = [];
    for (const key in object2) {
      if (Object.prototype.hasOwnProperty.call(object2, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i2 = 0;
          while (i2 < issue.path.length) {
            const el = issue.path[i2];
            const terminal = i2 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i2++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = /* @__PURE__ */ Object.create(null);
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x2) => !!x2)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      if (s2.status === "dirty")
        status.dirty();
      arrayValue.push(s2.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x2) => x2.status === "aborted";
var isDirty = (x2) => x2.status === "dirty";
var isValid = (x2) => x2.status === "valid";
var isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional2.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i2) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i2) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional2.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional2) {
    return ZodOptional2.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional2) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional2) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a5, b2) {
  const aType = getParsedType(a5);
  const bType = getParsedType(b2);
  if (a5 === b2) {
    return { valid: true, data: a5 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b2);
    const sharedKeys = util.objectKeys(a5).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a5, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a5[key], b2[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a5.length !== b2.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a5.length; index++) {
      const itemA = a5[index];
      const itemB = b2[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a5 === +b2) {
    return { valid: true, data: a5 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x2) => !!x2);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e2) => {
          error.addIssue(makeArgsIssue(args, e2));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e2) => {
          error.addIssue(makeReturnsIssue(result, e2));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional2 = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional2.create = (type, params) => {
  return new ZodOptional2({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a5, b2) {
    return new _ZodPipeline({
      in: a5,
      out: b2,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional2.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;

// node_modules/zod/v4/mini/schemas.js
var ZodMiniType = /* @__PURE__ */ $constructor("ZodMiniType", (inst, def) => {
  if (!inst._zod)
    throw new Error("Uninitialized schema in ZodMiniType.");
  $ZodType.init(inst, def);
  inst.def = def;
  inst.type = def.type;
  inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
  inst.check = (...checks) => {
    return inst.clone({
      ...def,
      checks: [
        ...def.checks ?? [],
        ...checks.map((ch) => typeof ch === "function" ? {
          _zod: { check: ch, def: { check: "custom" }, onattach: [] }
        } : ch)
      ]
    }, { parent: true });
  };
  inst.with = inst.check;
  inst.clone = (_def, params) => clone(inst, _def, params);
  inst.brand = () => inst;
  inst.register = (reg, meta2) => {
    reg.add(inst, meta2);
    return inst;
  };
  inst.apply = (fn) => fn(inst);
});
var ZodMiniObject = /* @__PURE__ */ $constructor("ZodMiniObject", (inst, def) => {
  $ZodObject.init(inst, def);
  ZodMiniType.init(inst, def);
  defineLazy(inst, "shape", () => def.shape);
});
// @__NO_SIDE_EFFECTS__
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...normalizeParams(params)
  };
  return new ZodMiniObject(def);
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-compat.js
function isZ4Schema(s2) {
  const schema = s2;
  return !!schema._zod;
}
function objectFromShape(shape) {
  const values = Object.values(shape);
  if (values.length === 0)
    return object({});
  const allV4 = values.every(isZ4Schema);
  const allV3 = values.every((s2) => !isZ4Schema(s2));
  if (allV4)
    return object(shape);
  if (allV3)
    return objectType(shape);
  throw new Error("Mixed Zod versions detected in object shape.");
}
function safeParse2(schema, data) {
  if (isZ4Schema(schema)) {
    const result2 = safeParse(schema, data);
    return result2;
  }
  const v3Schema = schema;
  const result = v3Schema.safeParse(data);
  return result;
}
async function safeParseAsync2(schema, data) {
  if (isZ4Schema(schema)) {
    const result2 = await safeParseAsync(schema, data);
    return result2;
  }
  const v3Schema = schema;
  const result = await v3Schema.safeParseAsync(data);
  return result;
}
function getObjectShape(schema) {
  if (!schema)
    return void 0;
  let rawShape;
  if (isZ4Schema(schema)) {
    const v4Schema = schema;
    rawShape = v4Schema._zod?.def?.shape;
  } else {
    const v3Schema = schema;
    rawShape = v3Schema.shape;
  }
  if (!rawShape)
    return void 0;
  if (typeof rawShape === "function") {
    try {
      return rawShape();
    } catch {
      return void 0;
    }
  }
  return rawShape;
}
function normalizeObjectSchema(schema) {
  if (!schema)
    return void 0;
  if (typeof schema === "object") {
    const asV3 = schema;
    const asV4 = schema;
    if (!asV3._def && !asV4._zod) {
      const values = Object.values(schema);
      if (values.length > 0 && values.every((v2) => typeof v2 === "object" && v2 !== null && (v2._def !== void 0 || v2._zod !== void 0 || typeof v2.parse === "function"))) {
        return objectFromShape(schema);
      }
    }
  }
  if (isZ4Schema(schema)) {
    const v4Schema = schema;
    const def = v4Schema._zod?.def;
    if (def && (def.type === "object" || def.shape !== void 0)) {
      return schema;
    }
  } else {
    const v3Schema = schema;
    if (v3Schema.shape !== void 0) {
      return schema;
    }
  }
  return void 0;
}
function getDotPath(path) {
  if (path.length === 0) {
    return "object root";
  }
  return path.reduce((acc, seg, index) => {
    if (index === 0) {
      return String(seg);
    }
    if (typeof seg === "number") {
      return `${acc}[${seg}]`;
    }
    return `${acc}.${seg}`;
  }, "");
}
function getParseErrorMessage(error) {
  if (error && typeof error === "object") {
    if ("issues" in error && Array.isArray(error.issues) && error.issues.length > 0) {
      return error.issues.map((i2) => {
        if (!i2.path?.length) {
          return i2.message;
        }
        return `${i2.message} at ${getDotPath(i2.path)}`;
      }).join("\n");
    }
    if ("message" in error && typeof error.message === "string") {
      return error.message;
    }
    try {
      return JSON.stringify(error);
    } catch {
      return String(error);
    }
  }
  return String(error);
}
function getSchemaDescription(schema) {
  return schema.description;
}
function isSchemaOptional(schema) {
  if (isZ4Schema(schema)) {
    const v4Schema = schema;
    return v4Schema._zod?.def?.type === "optional";
  }
  const v3Schema = schema;
  if (typeof schema.isOptional === "function") {
    return schema.isOptional();
  }
  return v3Schema._def?.typeName === "ZodOptional";
}
function getLiteralValue(schema) {
  if (isZ4Schema(schema)) {
    const v4Schema = schema;
    const def2 = v4Schema._zod?.def;
    if (def2) {
      if (def2.value !== void 0)
        return def2.value;
      if (Array.isArray(def2.values) && def2.values.length > 0) {
        return def2.values[0];
      }
    }
  }
  const v3Schema = schema;
  const def = v3Schema._def;
  if (def) {
    if (def.value !== void 0)
      return def.value;
    if (Array.isArray(def.values) && def.values.length > 0) {
      return def.values[0];
    }
  }
  const directValue = schema.value;
  if (directValue !== void 0)
    return directValue;
  return void 0;
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/interfaces.js
function isTerminal(status) {
  return status === "completed" || status === "failed" || status === "cancelled";
}

// node_modules/zod-to-json-schema/dist/esm/Options.js
var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  markdownDescription: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType"
};
var getDefaultOptions = (options) => typeof options === "string" ? {
  ...defaultOptions,
  name: options
} : {
  ...defaultOptions,
  ...options
};

// node_modules/zod-to-json-schema/dist/esm/Refs.js
var getRefs = (options) => {
  const _options = getDefaultOptions(options);
  const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
  return {
    ..._options,
    flags: { hasReferencedOpenAiAnyType: false },
    currentPath,
    propertyPath: void 0,
    seen: new Map(Object.entries(_options.definitions).map(([name, def]) => [
      def._def,
      {
        def: def._def,
        path: [..._options.basePath, _options.definitionPath, name],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
};

// node_modules/zod-to-json-schema/dist/esm/errorMessages.js
function addErrorMessage(res, key, errorMessage, refs) {
  if (!refs?.errorMessages)
    return;
  if (errorMessage) {
    res.errorMessage = {
      ...res.errorMessage,
      [key]: errorMessage
    };
  }
}
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
  res[key] = value;
  addErrorMessage(res, key, errorMessage, refs);
}

// node_modules/zod-to-json-schema/dist/esm/getRelativePath.js
var getRelativePath = (pathA, pathB) => {
  let i2 = 0;
  for (; i2 < pathA.length && i2 < pathB.length; i2++) {
    if (pathA[i2] !== pathB[i2])
      break;
  }
  return [(pathA.length - i2).toString(), ...pathB.slice(i2)].join("/");
};

// node_modules/zod-to-json-schema/dist/esm/parsers/any.js
function parseAnyDef(refs) {
  if (refs.target !== "openAi") {
    return {};
  }
  const anyDefinitionPath = [
    ...refs.basePath,
    refs.definitionPath,
    refs.openAiAnyTypeName
  ];
  refs.flags.hasReferencedOpenAiAnyType = true;
  return {
    $ref: refs.$refStrategy === "relative" ? getRelativePath(anyDefinitionPath, refs.currentPath) : anyDefinitionPath.join("/")
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/array.js
function parseArrayDef(def, refs) {
  const res = {
    type: "array"
  };
  if (def.type?._def && def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny) {
    res.items = parseDef(def.type._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
  }
  if (def.minLength) {
    setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs);
  }
  if (def.maxLength) {
    setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
  }
  if (def.exactLength) {
    setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
    setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
  }
  return res;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js
function parseBigintDef(def, refs) {
  const res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMinimum = true;
          }
          setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
        }
        break;
      case "max":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMaximum = true;
          }
          setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
        }
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  }
  return res;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js
function parseBooleanDef() {
  return {
    type: "boolean"
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/branded.js
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}

// node_modules/zod-to-json-schema/dist/esm/parsers/catch.js
var parseCatchDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};

// node_modules/zod-to-json-schema/dist/esm/parsers/date.js
function parseDateDef(def, refs, overrideDateStrategy) {
  const strategy = overrideDateStrategy ?? refs.dateStrategy;
  if (Array.isArray(strategy)) {
    return {
      anyOf: strategy.map((item, i2) => parseDateDef(def, refs, item))
    };
  }
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def, refs);
  }
}
var integerDateParser = (def, refs) => {
  const res = {
    type: "integer",
    format: "unix-time"
  };
  if (refs.target === "openApi3") {
    return res;
  }
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        setResponseValueAndErrors(
          res,
          "minimum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
      case "max":
        setResponseValueAndErrors(
          res,
          "maximum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
    }
  }
  return res;
};

// node_modules/zod-to-json-schema/dist/esm/parsers/default.js
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/effects.js
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef(refs);
}

// node_modules/zod-to-json-schema/dist/esm/parsers/enum.js
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js
var isJsonSchema7AllOfType = (type) => {
  if ("type" in type && type.type === "string")
    return false;
  return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
  const allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x2) => !!x2);
  let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0;
  const mergedAllOf = [];
  allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema)) {
      mergedAllOf.push(...schema.allOf);
      if (schema.unevaluatedProperties === void 0) {
        unevaluatedProperties = void 0;
      }
    } else {
      let nestedSchema = schema;
      if ("additionalProperties" in schema && schema.additionalProperties === false) {
        const { additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      } else {
        unevaluatedProperties = void 0;
      }
      mergedAllOf.push(nestedSchema);
    }
  });
  return mergedAllOf.length ? {
    allOf: mergedAllOf,
    ...unevaluatedProperties
  } : void 0;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/literal.js
function parseLiteralDef(def, refs) {
  const parsedType = typeof def.value;
  if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
    return {
      type: Array.isArray(def.value) ? "array" : "object"
    };
  }
  if (refs.target === "openApi3") {
    return {
      type: parsedType === "bigint" ? "integer" : parsedType,
      enum: [def.value]
    };
  }
  return {
    type: parsedType === "bigint" ? "integer" : parsedType,
    const: def.value
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/string.js
var emojiRegex2 = void 0;
var zodPatterns = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => {
    if (emojiRegex2 === void 0) {
      emojiRegex2 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
    }
    return emojiRegex2;
  },
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  const res = {
    type: "string"
  };
  if (def.checks) {
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
          break;
        case "max":
          setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check.message, refs);
              break;
            case "pattern:zod":
              addPattern(res, zodPatterns.email, check.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check.message, refs);
          break;
        case "regex":
          addPattern(res, check.regex, check.message, refs);
          break;
        case "cuid":
          addPattern(res, zodPatterns.cuid, check.message, refs);
          break;
        case "cuid2":
          addPattern(res, zodPatterns.cuid2, check.message, refs);
          break;
        case "startsWith":
          addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
          break;
        case "endsWith":
          addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
          break;
        case "datetime":
          addFormat(res, "date-time", check.message, refs);
          break;
        case "date":
          addFormat(res, "date", check.message, refs);
          break;
        case "time":
          addFormat(res, "time", check.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check.message, refs);
          break;
        case "length":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
          setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "includes": {
          addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
          break;
        }
        case "ip": {
          if (check.version !== "v6") {
            addFormat(res, "ipv4", check.message, refs);
          }
          if (check.version !== "v4") {
            addFormat(res, "ipv6", check.message, refs);
          }
          break;
        }
        case "base64url":
          addPattern(res, zodPatterns.base64url, check.message, refs);
          break;
        case "jwt":
          addPattern(res, zodPatterns.jwt, check.message, refs);
          break;
        case "cidr": {
          if (check.version !== "v6") {
            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
          }
          if (check.version !== "v4") {
            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
          }
          break;
        }
        case "emoji":
          addPattern(res, zodPatterns.emoji(), check.message, refs);
          break;
        case "ulid": {
          addPattern(res, zodPatterns.ulid, check.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              setResponseValueAndErrors(res, "contentEncoding", "base64", check.message, refs);
              break;
            }
            case "pattern:zod": {
              addPattern(res, zodPatterns.base64, check.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid": {
          addPattern(res, zodPatterns.nanoid, check.message, refs);
        }
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          /* @__PURE__ */ ((_) => {
          })(check);
      }
    }
  }
  return res;
}
function escapeLiteralCheckValue(literal, refs) {
  return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i2 = 0; i2 < source.length; i2++) {
    if (!ALPHA_NUMERIC.has(source[i2])) {
      result += "\\";
    }
    result += source[i2];
  }
  return result;
}
function addFormat(schema, value, message, refs) {
  if (schema.format || schema.anyOf?.some((x2) => x2.format)) {
    if (!schema.anyOf) {
      schema.anyOf = [];
    }
    if (schema.format) {
      schema.anyOf.push({
        format: schema.format,
        ...schema.errorMessage && refs.errorMessages && {
          errorMessage: { format: schema.errorMessage.format }
        }
      });
      delete schema.format;
      if (schema.errorMessage) {
        delete schema.errorMessage.format;
        if (Object.keys(schema.errorMessage).length === 0) {
          delete schema.errorMessage;
        }
      }
    }
    schema.anyOf.push({
      format: value,
      ...message && refs.errorMessages && { errorMessage: { format: message } }
    });
  } else {
    setResponseValueAndErrors(schema, "format", value, message, refs);
  }
}
function addPattern(schema, regex, message, refs) {
  if (schema.pattern || schema.allOf?.some((x2) => x2.pattern)) {
    if (!schema.allOf) {
      schema.allOf = [];
    }
    if (schema.pattern) {
      schema.allOf.push({
        pattern: schema.pattern,
        ...schema.errorMessage && refs.errorMessages && {
          errorMessage: { pattern: schema.errorMessage.pattern }
        }
      });
      delete schema.pattern;
      if (schema.errorMessage) {
        delete schema.errorMessage.pattern;
        if (Object.keys(schema.errorMessage).length === 0) {
          delete schema.errorMessage;
        }
      }
    }
    schema.allOf.push({
      pattern: stringifyRegExpWithFlags(regex, refs),
      ...message && refs.errorMessages && { errorMessage: { pattern: message } }
    });
  } else {
    setResponseValueAndErrors(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
  }
}
function stringifyRegExpWithFlags(regex, refs) {
  if (!refs.applyRegexFlags || !regex.flags) {
    return regex.source;
  }
  const flags = {
    i: regex.flags.includes("i"),
    m: regex.flags.includes("m"),
    s: regex.flags.includes("s")
    // `.` matches newlines
  };
  const source = flags.i ? regex.source.toLowerCase() : regex.source;
  let pattern = "";
  let isEscaped = false;
  let inCharGroup = false;
  let inCharRange = false;
  for (let i2 = 0; i2 < source.length; i2++) {
    if (isEscaped) {
      pattern += source[i2];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i2].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i2];
            pattern += `${source[i2 - 2]}-${source[i2]}`.toUpperCase();
            inCharRange = false;
          } else if (source[i2 + 1] === "-" && source[i2 + 2]?.match(/[a-z]/)) {
            pattern += source[i2];
            inCharRange = true;
          } else {
            pattern += `${source[i2]}${source[i2].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i2].match(/[a-z]/)) {
        pattern += `[${source[i2]}${source[i2].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i2] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i2] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i2] === ".") {
      pattern += inCharGroup ? `${source[i2]}\r
` : `[${source[i2]}\r
]`;
      continue;
    }
    pattern += source[i2];
    if (source[i2] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i2] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i2] === "[") {
      inCharGroup = true;
    }
  }
  try {
    new RegExp(pattern);
  } catch {
    console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
    return regex.source;
  }
  return pattern;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/record.js
function parseRecordDef(def, refs) {
  if (refs.target === "openAi") {
    console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
  }
  if (refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      type: "object",
      required: def.keyType._def.values,
      properties: def.keyType._def.values.reduce((acc, key) => ({
        ...acc,
        [key]: parseDef(def.valueType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "properties", key]
        }) ?? parseAnyDef(refs)
      }), {}),
      additionalProperties: refs.rejectedAdditionalProperties
    };
  }
  const schema = {
    type: "object",
    additionalProperties: parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    }) ?? refs.allowedAdditionalProperties
  };
  if (refs.target === "openApi3") {
    return schema;
  }
  if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
    const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      ...schema,
      propertyNames: {
        enum: def.keyType._def.values
      }
    };
  } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.type._def.checks?.length) {
    const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  }
  return schema;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/map.js
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record") {
    return parseRecordDef(def, refs);
  }
  const keys = parseDef(def.keyType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "0"]
  }) || parseAnyDef(refs);
  const values = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "1"]
  }) || parseAnyDef(refs);
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js
function parseNativeEnumDef(def) {
  const object2 = def.values;
  const actualKeys = Object.keys(def.values).filter((key) => {
    return typeof object2[object2[key]] !== "number";
  });
  const actualValues = actualKeys.map((key) => object2[key]);
  const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
  return {
    type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: actualValues
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/never.js
function parseNeverDef(refs) {
  return refs.target === "openAi" ? void 0 : {
    not: parseAnyDef({
      ...refs,
      currentPath: [...refs.currentPath, "not"]
    })
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/null.js
function parseNullDef(refs) {
  return refs.target === "openApi3" ? {
    enum: ["null"],
    nullable: true
  } : {
    type: "null"
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/union.js
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  if (refs.target === "openApi3")
    return asAnyOf(def, refs);
  const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (options.every((x2) => x2._def.typeName in primitiveMappings && (!x2._def.checks || !x2._def.checks.length))) {
    const types = options.reduce((types2, x2) => {
      const type = primitiveMappings[x2._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x2) => x2._def.typeName === "ZodLiteral" && !x2.description)) {
    const types = options.reduce((acc, x2) => {
      const type = typeof x2._def.value;
      switch (type) {
        case "string":
        case "number":
        case "boolean":
          return [...acc, type];
        case "bigint":
          return [...acc, "integer"];
        case "object":
          if (x2._def.value === null)
            return [...acc, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return acc;
      }
    }, []);
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x2, i2, a5) => a5.indexOf(x2) === i2);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce((acc, x2) => {
          return acc.includes(x2._def.value) ? acc : [...acc, x2._def.value];
        }, [])
      };
    }
  } else if (options.every((x2) => x2._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce((acc, x2) => [
        ...acc,
        ...x2._def.values.filter((x3) => !acc.includes(x3))
      ], [])
    };
  }
  return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
  const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x2, i2) => parseDef(x2._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", `${i2}`]
  })).filter((x2) => !!x2 && (!refs.strictUnions || typeof x2 === "object" && Object.keys(x2).length > 0));
  return anyOf.length ? { anyOf } : void 0;
};

// node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
function parseNullableDef(def, refs) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
    if (refs.target === "openApi3") {
      return {
        type: primitiveMappings[def.innerType._def.typeName],
        nullable: true
      };
    }
    return {
      type: [
        primitiveMappings[def.innerType._def.typeName],
        "null"
      ]
    };
  }
  if (refs.target === "openApi3") {
    const base2 = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath]
    });
    if (base2 && "$ref" in base2)
      return { allOf: [base2], nullable: true };
    return base2 && { ...base2, nullable: true };
  }
  const base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/number.js
function parseNumberDef(def, refs) {
  const res = {
    type: "number"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "int":
        res.type = "integer";
        addErrorMessage(res, "type", check.message, refs);
        break;
      case "min":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMinimum = true;
          }
          setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
        }
        break;
      case "max":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMaximum = true;
          }
          setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
        }
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  }
  return res;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/object.js
function parseObjectDef(def, refs) {
  const forceOptionalIntoNullable = refs.target === "openAi";
  const result = {
    type: "object",
    properties: {}
  };
  const required2 = [];
  const shape = def.shape();
  for (const propName in shape) {
    let propDef = shape[propName];
    if (propDef === void 0 || propDef._def === void 0) {
      continue;
    }
    let propOptional = safeIsOptional(propDef);
    if (propOptional && forceOptionalIntoNullable) {
      if (propDef._def.typeName === "ZodOptional") {
        propDef = propDef._def.innerType;
      }
      if (!propDef.isNullable()) {
        propDef = propDef.nullable();
      }
      propOptional = false;
    }
    const parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    if (parsedDef === void 0) {
      continue;
    }
    result.properties[propName] = parsedDef;
    if (!propOptional) {
      required2.push(propName);
    }
  }
  if (required2.length) {
    result.required = required2;
  }
  const additionalProperties = decideAdditionalProperties(def, refs);
  if (additionalProperties !== void 0) {
    result.additionalProperties = additionalProperties;
  }
  return result;
}
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever") {
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  }
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
  }
}
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch {
    return true;
  }
}

// node_modules/zod-to-json-schema/dist/esm/parsers/optional.js
var parseOptionalDef = (def, refs) => {
  if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
    return parseDef(def.innerType._def, refs);
  }
  const innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema ? {
    anyOf: [
      {
        not: parseAnyDef(refs)
      },
      innerSchema
    ]
  } : parseAnyDef(refs);
};

// node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js
var parsePipelineDef = (def, refs) => {
  if (refs.pipeStrategy === "input") {
    return parseDef(def.in._def, refs);
  } else if (refs.pipeStrategy === "output") {
    return parseDef(def.out._def, refs);
  }
  const a5 = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const b2 = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a5 ? "1" : "0"]
  });
  return {
    allOf: [a5, b2].filter((x2) => x2 !== void 0)
  };
};

// node_modules/zod-to-json-schema/dist/esm/parsers/promise.js
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}

// node_modules/zod-to-json-schema/dist/esm/parsers/set.js
function parseSetDef(def, refs) {
  const items = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  });
  const schema = {
    type: "array",
    uniqueItems: true,
    items
  };
  if (def.minSize) {
    setResponseValueAndErrors(schema, "minItems", def.minSize.value, def.minSize.message, refs);
  }
  if (def.maxSize) {
    setResponseValueAndErrors(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
  }
  return schema;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js
function parseTupleDef(def, refs) {
  if (def.rest) {
    return {
      type: "array",
      minItems: def.items.length,
      items: def.items.map((x2, i2) => parseDef(x2._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i2}`]
      })).reduce((acc, x2) => x2 === void 0 ? acc : [...acc, x2], []),
      additionalItems: parseDef(def.rest._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalItems"]
      })
    };
  } else {
    return {
      type: "array",
      minItems: def.items.length,
      maxItems: def.items.length,
      items: def.items.map((x2, i2) => parseDef(x2._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i2}`]
      })).reduce((acc, x2) => x2 === void 0 ? acc : [...acc, x2], [])
    };
  }
}

// node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js
function parseUndefinedDef(refs) {
  return {
    not: parseAnyDef(refs)
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js
function parseUnknownDef(refs) {
  return parseAnyDef(refs);
}

// node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js
var parseReadonlyDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};

// node_modules/zod-to-json-schema/dist/esm/selectParser.js
var selectParser = (def, typeName, refs) => {
  switch (typeName) {
    case ZodFirstPartyTypeKind.ZodString:
      return parseStringDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNumber:
      return parseNumberDef(def, refs);
    case ZodFirstPartyTypeKind.ZodObject:
      return parseObjectDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return parseBigintDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return parseBooleanDef();
    case ZodFirstPartyTypeKind.ZodDate:
      return parseDateDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return parseUndefinedDef(refs);
    case ZodFirstPartyTypeKind.ZodNull:
      return parseNullDef(refs);
    case ZodFirstPartyTypeKind.ZodArray:
      return parseArrayDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return parseUnionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return parseIntersectionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodTuple:
      return parseTupleDef(def, refs);
    case ZodFirstPartyTypeKind.ZodRecord:
      return parseRecordDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return parseLiteralDef(def, refs);
    case ZodFirstPartyTypeKind.ZodEnum:
      return parseEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return parseNativeEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNullable:
      return parseNullableDef(def, refs);
    case ZodFirstPartyTypeKind.ZodOptional:
      return parseOptionalDef(def, refs);
    case ZodFirstPartyTypeKind.ZodMap:
      return parseMapDef(def, refs);
    case ZodFirstPartyTypeKind.ZodSet:
      return parseSetDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => def.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return parsePromiseDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return parseNeverDef(refs);
    case ZodFirstPartyTypeKind.ZodEffects:
      return parseEffectsDef(def, refs);
    case ZodFirstPartyTypeKind.ZodAny:
      return parseAnyDef(refs);
    case ZodFirstPartyTypeKind.ZodUnknown:
      return parseUnknownDef(refs);
    case ZodFirstPartyTypeKind.ZodDefault:
      return parseDefaultDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBranded:
      return parseBrandedDef(def, refs);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return parseReadonlyDef(def, refs);
    case ZodFirstPartyTypeKind.ZodCatch:
      return parseCatchDef(def, refs);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return parsePipelineDef(def, refs);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return void 0;
    default:
      return /* @__PURE__ */ ((_) => void 0)(typeName);
  }
};

// node_modules/zod-to-json-schema/dist/esm/parseDef.js
function parseDef(def, refs, forceResolution = false) {
  const seenItem = refs.seen.get(def);
  if (refs.override) {
    const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
    if (overrideResult !== ignoreOverride) {
      return overrideResult;
    }
  }
  if (seenItem && !forceResolution) {
    const seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== void 0) {
      return seenSchema;
    }
  }
  const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
  refs.seen.set(def, newItem);
  const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
  const jsonSchema = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
  if (jsonSchema) {
    addMeta(def, refs, jsonSchema);
  }
  if (refs.postProcess) {
    const postProcessResult = refs.postProcess(jsonSchema, def, refs);
    newItem.jsonSchema = jsonSchema;
    return postProcessResult;
  }
  newItem.jsonSchema = jsonSchema;
  return jsonSchema;
}
var get$ref = (item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen": {
      if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
        console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
        return parseAnyDef(refs);
      }
      return refs.$refStrategy === "seen" ? parseAnyDef(refs) : void 0;
    }
  }
};
var addMeta = (def, refs, jsonSchema) => {
  if (def.description) {
    jsonSchema.description = def.description;
    if (refs.markdownDescription) {
      jsonSchema.markdownDescription = def.description;
    }
  }
  return jsonSchema;
};

// node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js
var zodToJsonSchema = (schema, options) => {
  const refs = getRefs(options);
  let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name2, schema2]) => ({
    ...acc,
    [name2]: parseDef(schema2._def, {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name2]
    }, true) ?? parseAnyDef(refs)
  }), {}) : void 0;
  const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
  const main = parseDef(schema._def, name === void 0 ? refs : {
    ...refs,
    currentPath: [...refs.basePath, refs.definitionPath, name]
  }, false) ?? parseAnyDef(refs);
  const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
  if (title !== void 0) {
    main.title = title;
  }
  if (refs.flags.hasReferencedOpenAiAnyType) {
    if (!definitions) {
      definitions = {};
    }
    if (!definitions[refs.openAiAnyTypeName]) {
      definitions[refs.openAiAnyTypeName] = {
        // Skipping "object" as no properties can be defined and additionalProperties must be "false"
        type: ["string", "number", "integer", "boolean", "array", "null"],
        items: {
          $ref: refs.$refStrategy === "relative" ? "1" : [
            ...refs.basePath,
            refs.definitionPath,
            refs.openAiAnyTypeName
          ].join("/")
        }
      };
    }
  }
  const combined = name === void 0 ? definitions ? {
    ...main,
    [refs.definitionPath]: definitions
  } : main : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name]: main
    }
  };
  if (refs.target === "jsonSchema7") {
    combined.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") {
    combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
  }
  if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) {
    console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
  }
  return combined;
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-json-schema-compat.js
function mapMiniTarget(t) {
  if (!t)
    return "draft-7";
  if (t === "jsonSchema7" || t === "draft-7")
    return "draft-7";
  if (t === "jsonSchema2019-09" || t === "draft-2020-12")
    return "draft-2020-12";
  return "draft-7";
}
function toJsonSchemaCompat(schema, opts) {
  if (isZ4Schema(schema)) {
    return toJSONSchema(schema, {
      target: mapMiniTarget(opts?.target),
      io: opts?.pipeStrategy ?? "input"
    });
  }
  return zodToJsonSchema(schema, {
    strictUnions: opts?.strictUnions ?? true,
    pipeStrategy: opts?.pipeStrategy ?? "input"
  });
}
function getMethodLiteral(schema) {
  const shape = getObjectShape(schema);
  const methodSchema = shape?.method;
  if (!methodSchema) {
    throw new Error("Schema is missing a method literal");
  }
  const value = getLiteralValue(methodSchema);
  if (typeof value !== "string") {
    throw new Error("Schema method literal must be a string");
  }
  return value;
}
function parseWithCompat(schema, data) {
  const result = safeParse2(schema, data);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/protocol.js
var DEFAULT_REQUEST_TIMEOUT_MSEC = 6e4;
var Protocol = class {
  constructor(_options) {
    this._options = _options;
    this._requestMessageId = 0;
    this._requestHandlers = /* @__PURE__ */ new Map();
    this._requestHandlerAbortControllers = /* @__PURE__ */ new Map();
    this._notificationHandlers = /* @__PURE__ */ new Map();
    this._responseHandlers = /* @__PURE__ */ new Map();
    this._progressHandlers = /* @__PURE__ */ new Map();
    this._timeoutInfo = /* @__PURE__ */ new Map();
    this._pendingDebouncedNotifications = /* @__PURE__ */ new Set();
    this._taskProgressTokens = /* @__PURE__ */ new Map();
    this._requestResolvers = /* @__PURE__ */ new Map();
    this.setNotificationHandler(CancelledNotificationSchema, (notification) => {
      this._oncancel(notification);
    });
    this.setNotificationHandler(ProgressNotificationSchema, (notification) => {
      this._onprogress(notification);
    });
    this.setRequestHandler(
      PingRequestSchema,
      // Automatic pong by default.
      (_request) => ({})
    );
    this._taskStore = _options?.taskStore;
    this._taskMessageQueue = _options?.taskMessageQueue;
    if (this._taskStore) {
      this.setRequestHandler(GetTaskRequestSchema, async (request, extra) => {
        const task = await this._taskStore.getTask(request.params.taskId, extra.sessionId);
        if (!task) {
          throw new McpError(ErrorCode.InvalidParams, "Failed to retrieve task: Task not found");
        }
        return {
          ...task
        };
      });
      this.setRequestHandler(GetTaskPayloadRequestSchema, async (request, extra) => {
        const handleTaskResult = async () => {
          const taskId = request.params.taskId;
          if (this._taskMessageQueue) {
            let queuedMessage;
            while (queuedMessage = await this._taskMessageQueue.dequeue(taskId, extra.sessionId)) {
              if (queuedMessage.type === "response" || queuedMessage.type === "error") {
                const message = queuedMessage.message;
                const requestId = message.id;
                const resolver = this._requestResolvers.get(requestId);
                if (resolver) {
                  this._requestResolvers.delete(requestId);
                  if (queuedMessage.type === "response") {
                    resolver(message);
                  } else {
                    const errorMessage = message;
                    const error = new McpError(errorMessage.error.code, errorMessage.error.message, errorMessage.error.data);
                    resolver(error);
                  }
                } else {
                  const messageType = queuedMessage.type === "response" ? "Response" : "Error";
                  this._onerror(new Error(`${messageType} handler missing for request ${requestId}`));
                }
                continue;
              }
              await this._transport?.send(queuedMessage.message, { relatedRequestId: extra.requestId });
            }
          }
          const task = await this._taskStore.getTask(taskId, extra.sessionId);
          if (!task) {
            throw new McpError(ErrorCode.InvalidParams, `Task not found: ${taskId}`);
          }
          if (!isTerminal(task.status)) {
            await this._waitForTaskUpdate(taskId, extra.signal);
            return await handleTaskResult();
          }
          if (isTerminal(task.status)) {
            const result = await this._taskStore.getTaskResult(taskId, extra.sessionId);
            this._clearTaskQueue(taskId);
            return {
              ...result,
              _meta: {
                ...result._meta,
                [RELATED_TASK_META_KEY]: {
                  taskId
                }
              }
            };
          }
          return await handleTaskResult();
        };
        return await handleTaskResult();
      });
      this.setRequestHandler(ListTasksRequestSchema, async (request, extra) => {
        try {
          const { tasks, nextCursor } = await this._taskStore.listTasks(request.params?.cursor, extra.sessionId);
          return {
            tasks,
            nextCursor,
            _meta: {}
          };
        } catch (error) {
          throw new McpError(ErrorCode.InvalidParams, `Failed to list tasks: ${error instanceof Error ? error.message : String(error)}`);
        }
      });
      this.setRequestHandler(CancelTaskRequestSchema, async (request, extra) => {
        try {
          const task = await this._taskStore.getTask(request.params.taskId, extra.sessionId);
          if (!task) {
            throw new McpError(ErrorCode.InvalidParams, `Task not found: ${request.params.taskId}`);
          }
          if (isTerminal(task.status)) {
            throw new McpError(ErrorCode.InvalidParams, `Cannot cancel task in terminal status: ${task.status}`);
          }
          await this._taskStore.updateTaskStatus(request.params.taskId, "cancelled", "Client cancelled task execution.", extra.sessionId);
          this._clearTaskQueue(request.params.taskId);
          const cancelledTask = await this._taskStore.getTask(request.params.taskId, extra.sessionId);
          if (!cancelledTask) {
            throw new McpError(ErrorCode.InvalidParams, `Task not found after cancellation: ${request.params.taskId}`);
          }
          return {
            _meta: {},
            ...cancelledTask
          };
        } catch (error) {
          if (error instanceof McpError) {
            throw error;
          }
          throw new McpError(ErrorCode.InvalidRequest, `Failed to cancel task: ${error instanceof Error ? error.message : String(error)}`);
        }
      });
    }
  }
  async _oncancel(notification) {
    if (!notification.params.requestId) {
      return;
    }
    const controller = this._requestHandlerAbortControllers.get(notification.params.requestId);
    controller?.abort(notification.params.reason);
  }
  _setupTimeout(messageId, timeout, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = false) {
    this._timeoutInfo.set(messageId, {
      timeoutId: setTimeout(onTimeout, timeout),
      startTime: Date.now(),
      timeout,
      maxTotalTimeout,
      resetTimeoutOnProgress,
      onTimeout
    });
  }
  _resetTimeout(messageId) {
    const info = this._timeoutInfo.get(messageId);
    if (!info)
      return false;
    const totalElapsed = Date.now() - info.startTime;
    if (info.maxTotalTimeout && totalElapsed >= info.maxTotalTimeout) {
      this._timeoutInfo.delete(messageId);
      throw McpError.fromError(ErrorCode.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: info.maxTotalTimeout,
        totalElapsed
      });
    }
    clearTimeout(info.timeoutId);
    info.timeoutId = setTimeout(info.onTimeout, info.timeout);
    return true;
  }
  _cleanupTimeout(messageId) {
    const info = this._timeoutInfo.get(messageId);
    if (info) {
      clearTimeout(info.timeoutId);
      this._timeoutInfo.delete(messageId);
    }
  }
  /**
   * Attaches to the given transport, starts it, and starts listening for messages.
   *
   * The Protocol object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
   */
  async connect(transport) {
    if (this._transport) {
      throw new Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
    }
    this._transport = transport;
    const _onclose = this.transport?.onclose;
    this._transport.onclose = () => {
      _onclose?.();
      this._onclose();
    };
    const _onerror = this.transport?.onerror;
    this._transport.onerror = (error) => {
      _onerror?.(error);
      this._onerror(error);
    };
    const _onmessage = this._transport?.onmessage;
    this._transport.onmessage = (message, extra) => {
      _onmessage?.(message, extra);
      if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) {
        this._onresponse(message);
      } else if (isJSONRPCRequest(message)) {
        this._onrequest(message, extra);
      } else if (isJSONRPCNotification(message)) {
        this._onnotification(message);
      } else {
        this._onerror(new Error(`Unknown message type: ${JSON.stringify(message)}`));
      }
    };
    await this._transport.start();
  }
  _onclose() {
    const responseHandlers = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map();
    this._progressHandlers.clear();
    this._taskProgressTokens.clear();
    this._pendingDebouncedNotifications.clear();
    for (const info of this._timeoutInfo.values()) {
      clearTimeout(info.timeoutId);
    }
    this._timeoutInfo.clear();
    for (const controller of this._requestHandlerAbortControllers.values()) {
      controller.abort();
    }
    this._requestHandlerAbortControllers.clear();
    const error = McpError.fromError(ErrorCode.ConnectionClosed, "Connection closed");
    this._transport = void 0;
    this.onclose?.();
    for (const handler of responseHandlers.values()) {
      handler(error);
    }
  }
  _onerror(error) {
    this.onerror?.(error);
  }
  _onnotification(notification) {
    const handler = this._notificationHandlers.get(notification.method) ?? this.fallbackNotificationHandler;
    if (handler === void 0) {
      return;
    }
    Promise.resolve().then(() => handler(notification)).catch((error) => this._onerror(new Error(`Uncaught error in notification handler: ${error}`)));
  }
  _onrequest(request, extra) {
    const handler = this._requestHandlers.get(request.method) ?? this.fallbackRequestHandler;
    const capturedTransport = this._transport;
    const relatedTaskId = request.params?._meta?.[RELATED_TASK_META_KEY]?.taskId;
    if (handler === void 0) {
      const errorResponse = {
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: ErrorCode.MethodNotFound,
          message: "Method not found"
        }
      };
      if (relatedTaskId && this._taskMessageQueue) {
        this._enqueueTaskMessage(relatedTaskId, {
          type: "error",
          message: errorResponse,
          timestamp: Date.now()
        }, capturedTransport?.sessionId).catch((error) => this._onerror(new Error(`Failed to enqueue error response: ${error}`)));
      } else {
        capturedTransport?.send(errorResponse).catch((error) => this._onerror(new Error(`Failed to send an error response: ${error}`)));
      }
      return;
    }
    const abortController = new AbortController();
    this._requestHandlerAbortControllers.set(request.id, abortController);
    const taskCreationParams = isTaskAugmentedRequestParams(request.params) ? request.params.task : void 0;
    const taskStore = this._taskStore ? this.requestTaskStore(request, capturedTransport?.sessionId) : void 0;
    const fullExtra = {
      signal: abortController.signal,
      sessionId: capturedTransport?.sessionId,
      _meta: request.params?._meta,
      sendNotification: async (notification) => {
        if (abortController.signal.aborted)
          return;
        const notificationOptions = { relatedRequestId: request.id };
        if (relatedTaskId) {
          notificationOptions.relatedTask = { taskId: relatedTaskId };
        }
        await this.notification(notification, notificationOptions);
      },
      sendRequest: async (r3, resultSchema, options) => {
        if (abortController.signal.aborted) {
          throw new McpError(ErrorCode.ConnectionClosed, "Request was cancelled");
        }
        const requestOptions = { ...options, relatedRequestId: request.id };
        if (relatedTaskId && !requestOptions.relatedTask) {
          requestOptions.relatedTask = { taskId: relatedTaskId };
        }
        const effectiveTaskId = requestOptions.relatedTask?.taskId ?? relatedTaskId;
        if (effectiveTaskId && taskStore) {
          await taskStore.updateTaskStatus(effectiveTaskId, "input_required");
        }
        return await this.request(r3, resultSchema, requestOptions);
      },
      authInfo: extra?.authInfo,
      requestId: request.id,
      requestInfo: extra?.requestInfo,
      taskId: relatedTaskId,
      taskStore,
      taskRequestedTtl: taskCreationParams?.ttl,
      closeSSEStream: extra?.closeSSEStream,
      closeStandaloneSSEStream: extra?.closeStandaloneSSEStream
    };
    Promise.resolve().then(() => {
      if (taskCreationParams) {
        this.assertTaskHandlerCapability(request.method);
      }
    }).then(() => handler(request, fullExtra)).then(async (result) => {
      if (abortController.signal.aborted) {
        return;
      }
      const response = {
        result,
        jsonrpc: "2.0",
        id: request.id
      };
      if (relatedTaskId && this._taskMessageQueue) {
        await this._enqueueTaskMessage(relatedTaskId, {
          type: "response",
          message: response,
          timestamp: Date.now()
        }, capturedTransport?.sessionId);
      } else {
        await capturedTransport?.send(response);
      }
    }, async (error) => {
      if (abortController.signal.aborted) {
        return;
      }
      const errorResponse = {
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: Number.isSafeInteger(error["code"]) ? error["code"] : ErrorCode.InternalError,
          message: error.message ?? "Internal error",
          ...error["data"] !== void 0 && { data: error["data"] }
        }
      };
      if (relatedTaskId && this._taskMessageQueue) {
        await this._enqueueTaskMessage(relatedTaskId, {
          type: "error",
          message: errorResponse,
          timestamp: Date.now()
        }, capturedTransport?.sessionId);
      } else {
        await capturedTransport?.send(errorResponse);
      }
    }).catch((error) => this._onerror(new Error(`Failed to send response: ${error}`))).finally(() => {
      if (this._requestHandlerAbortControllers.get(request.id) === abortController) {
        this._requestHandlerAbortControllers.delete(request.id);
      }
    });
  }
  _onprogress(notification) {
    const { progressToken, ...params } = notification.params;
    const messageId = Number(progressToken);
    const handler = this._progressHandlers.get(messageId);
    if (!handler) {
      this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(notification)}`));
      return;
    }
    const responseHandler = this._responseHandlers.get(messageId);
    const timeoutInfo = this._timeoutInfo.get(messageId);
    if (timeoutInfo && responseHandler && timeoutInfo.resetTimeoutOnProgress) {
      try {
        this._resetTimeout(messageId);
      } catch (error) {
        this._responseHandlers.delete(messageId);
        this._progressHandlers.delete(messageId);
        this._cleanupTimeout(messageId);
        responseHandler(error);
        return;
      }
    }
    handler(params);
  }
  _onresponse(response) {
    const messageId = Number(response.id);
    const resolver = this._requestResolvers.get(messageId);
    if (resolver) {
      this._requestResolvers.delete(messageId);
      if (isJSONRPCResultResponse(response)) {
        resolver(response);
      } else {
        const error = new McpError(response.error.code, response.error.message, response.error.data);
        resolver(error);
      }
      return;
    }
    const handler = this._responseHandlers.get(messageId);
    if (handler === void 0) {
      this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(response)}`));
      return;
    }
    this._responseHandlers.delete(messageId);
    this._cleanupTimeout(messageId);
    let isTaskResponse = false;
    if (isJSONRPCResultResponse(response) && response.result && typeof response.result === "object") {
      const result = response.result;
      if (result.task && typeof result.task === "object") {
        const task = result.task;
        if (typeof task.taskId === "string") {
          isTaskResponse = true;
          this._taskProgressTokens.set(task.taskId, messageId);
        }
      }
    }
    if (!isTaskResponse) {
      this._progressHandlers.delete(messageId);
    }
    if (isJSONRPCResultResponse(response)) {
      handler(response);
    } else {
      const error = McpError.fromError(response.error.code, response.error.message, response.error.data);
      handler(error);
    }
  }
  get transport() {
    return this._transport;
  }
  /**
   * Closes the connection.
   */
  async close() {
    await this._transport?.close();
  }
  /**
   * Sends a request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * @example
   * ```typescript
   * const stream = protocol.requestStream(request, resultSchema, options);
   * for await (const message of stream) {
   *   switch (message.type) {
   *     case 'taskCreated':
   *       console.log('Task created:', message.task.taskId);
   *       break;
   *     case 'taskStatus':
   *       console.log('Task status:', message.task.status);
   *       break;
   *     case 'result':
   *       console.log('Final result:', message.result);
   *       break;
   *     case 'error':
   *       console.error('Error:', message.error);
   *       break;
   *   }
   * }
   * ```
   *
   * @experimental Use `client.experimental.tasks.requestStream()` to access this method.
   */
  async *requestStream(request, resultSchema, options) {
    const { task } = options ?? {};
    if (!task) {
      try {
        const result = await this.request(request, resultSchema, options);
        yield { type: "result", result };
      } catch (error) {
        yield {
          type: "error",
          error: error instanceof McpError ? error : new McpError(ErrorCode.InternalError, String(error))
        };
      }
      return;
    }
    let taskId;
    try {
      const createResult = await this.request(request, CreateTaskResultSchema, options);
      if (createResult.task) {
        taskId = createResult.task.taskId;
        yield { type: "taskCreated", task: createResult.task };
      } else {
        throw new McpError(ErrorCode.InternalError, "Task creation did not return a task");
      }
      while (true) {
        const task2 = await this.getTask({ taskId }, options);
        yield { type: "taskStatus", task: task2 };
        if (isTerminal(task2.status)) {
          if (task2.status === "completed") {
            const result = await this.getTaskResult({ taskId }, resultSchema, options);
            yield { type: "result", result };
          } else if (task2.status === "failed") {
            yield {
              type: "error",
              error: new McpError(ErrorCode.InternalError, `Task ${taskId} failed`)
            };
          } else if (task2.status === "cancelled") {
            yield {
              type: "error",
              error: new McpError(ErrorCode.InternalError, `Task ${taskId} was cancelled`)
            };
          }
          return;
        }
        if (task2.status === "input_required") {
          const result = await this.getTaskResult({ taskId }, resultSchema, options);
          yield { type: "result", result };
          return;
        }
        const pollInterval = task2.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
        await new Promise((resolve2) => setTimeout(resolve2, pollInterval));
        options?.signal?.throwIfAborted();
      }
    } catch (error) {
      yield {
        type: "error",
        error: error instanceof McpError ? error : new McpError(ErrorCode.InternalError, String(error))
      };
    }
  }
  /**
   * Sends a request and waits for a response.
   *
   * Do not use this method to emit notifications! Use notification() instead.
   */
  request(request, resultSchema, options) {
    const { relatedRequestId, resumptionToken, onresumptiontoken, task, relatedTask } = options ?? {};
    return new Promise((resolve2, reject) => {
      const earlyReject = (error) => {
        reject(error);
      };
      if (!this._transport) {
        earlyReject(new Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === true) {
        try {
          this.assertCapabilityForMethod(request.method);
          if (task) {
            this.assertTaskCapability(request.method);
          }
        } catch (e2) {
          earlyReject(e2);
          return;
        }
      }
      options?.signal?.throwIfAborted();
      const messageId = this._requestMessageId++;
      const jsonrpcRequest = {
        ...request,
        jsonrpc: "2.0",
        id: messageId
      };
      if (options?.onprogress) {
        this._progressHandlers.set(messageId, options.onprogress);
        jsonrpcRequest.params = {
          ...request.params,
          _meta: {
            ...request.params?._meta || {},
            progressToken: messageId
          }
        };
      }
      if (task) {
        jsonrpcRequest.params = {
          ...jsonrpcRequest.params,
          task
        };
      }
      if (relatedTask) {
        jsonrpcRequest.params = {
          ...jsonrpcRequest.params,
          _meta: {
            ...jsonrpcRequest.params?._meta || {},
            [RELATED_TASK_META_KEY]: relatedTask
          }
        };
      }
      const cancel = (reason) => {
        this._responseHandlers.delete(messageId);
        this._progressHandlers.delete(messageId);
        this._cleanupTimeout(messageId);
        this._transport?.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: messageId,
            reason: String(reason)
          }
        }, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error2) => this._onerror(new Error(`Failed to send cancellation: ${error2}`)));
        const error = reason instanceof McpError ? reason : new McpError(ErrorCode.RequestTimeout, String(reason));
        reject(error);
      };
      this._responseHandlers.set(messageId, (response) => {
        if (options?.signal?.aborted) {
          return;
        }
        if (response instanceof Error) {
          return reject(response);
        }
        try {
          const parseResult = safeParse2(resultSchema, response.result);
          if (!parseResult.success) {
            reject(parseResult.error);
          } else {
            resolve2(parseResult.data);
          }
        } catch (error) {
          reject(error);
        }
      });
      options?.signal?.addEventListener("abort", () => {
        cancel(options?.signal?.reason);
      });
      const timeout = options?.timeout ?? DEFAULT_REQUEST_TIMEOUT_MSEC;
      const timeoutHandler = () => cancel(McpError.fromError(ErrorCode.RequestTimeout, "Request timed out", { timeout }));
      this._setupTimeout(messageId, timeout, options?.maxTotalTimeout, timeoutHandler, options?.resetTimeoutOnProgress ?? false);
      const relatedTaskId = relatedTask?.taskId;
      if (relatedTaskId) {
        const responseResolver = (response) => {
          const handler = this._responseHandlers.get(messageId);
          if (handler) {
            handler(response);
          } else {
            this._onerror(new Error(`Response handler missing for side-channeled request ${messageId}`));
          }
        };
        this._requestResolvers.set(messageId, responseResolver);
        this._enqueueTaskMessage(relatedTaskId, {
          type: "request",
          message: jsonrpcRequest,
          timestamp: Date.now()
        }).catch((error) => {
          this._cleanupTimeout(messageId);
          reject(error);
        });
      } else {
        this._transport.send(jsonrpcRequest, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error) => {
          this._cleanupTimeout(messageId);
          reject(error);
        });
      }
    });
  }
  /**
   * Gets the current status of a task.
   *
   * @experimental Use `client.experimental.tasks.getTask()` to access this method.
   */
  async getTask(params, options) {
    return this.request({ method: "tasks/get", params }, GetTaskResultSchema, options);
  }
  /**
   * Retrieves the result of a completed task.
   *
   * @experimental Use `client.experimental.tasks.getTaskResult()` to access this method.
   */
  async getTaskResult(params, resultSchema, options) {
    return this.request({ method: "tasks/result", params }, resultSchema, options);
  }
  /**
   * Lists tasks, optionally starting from a pagination cursor.
   *
   * @experimental Use `client.experimental.tasks.listTasks()` to access this method.
   */
  async listTasks(params, options) {
    return this.request({ method: "tasks/list", params }, ListTasksResultSchema, options);
  }
  /**
   * Cancels a specific task.
   *
   * @experimental Use `client.experimental.tasks.cancelTask()` to access this method.
   */
  async cancelTask(params, options) {
    return this.request({ method: "tasks/cancel", params }, CancelTaskResultSchema, options);
  }
  /**
   * Emits a notification, which is a one-way message that does not expect a response.
   */
  async notification(notification, options) {
    if (!this._transport) {
      throw new Error("Not connected");
    }
    this.assertNotificationCapability(notification.method);
    const relatedTaskId = options?.relatedTask?.taskId;
    if (relatedTaskId) {
      const jsonrpcNotification2 = {
        ...notification,
        jsonrpc: "2.0",
        params: {
          ...notification.params,
          _meta: {
            ...notification.params?._meta || {},
            [RELATED_TASK_META_KEY]: options.relatedTask
          }
        }
      };
      await this._enqueueTaskMessage(relatedTaskId, {
        type: "notification",
        message: jsonrpcNotification2,
        timestamp: Date.now()
      });
      return;
    }
    const debouncedMethods = this._options?.debouncedNotificationMethods ?? [];
    const canDebounce = debouncedMethods.includes(notification.method) && !notification.params && !options?.relatedRequestId && !options?.relatedTask;
    if (canDebounce) {
      if (this._pendingDebouncedNotifications.has(notification.method)) {
        return;
      }
      this._pendingDebouncedNotifications.add(notification.method);
      Promise.resolve().then(() => {
        this._pendingDebouncedNotifications.delete(notification.method);
        if (!this._transport) {
          return;
        }
        let jsonrpcNotification2 = {
          ...notification,
          jsonrpc: "2.0"
        };
        if (options?.relatedTask) {
          jsonrpcNotification2 = {
            ...jsonrpcNotification2,
            params: {
              ...jsonrpcNotification2.params,
              _meta: {
                ...jsonrpcNotification2.params?._meta || {},
                [RELATED_TASK_META_KEY]: options.relatedTask
              }
            }
          };
        }
        this._transport?.send(jsonrpcNotification2, options).catch((error) => this._onerror(error));
      });
      return;
    }
    let jsonrpcNotification = {
      ...notification,
      jsonrpc: "2.0"
    };
    if (options?.relatedTask) {
      jsonrpcNotification = {
        ...jsonrpcNotification,
        params: {
          ...jsonrpcNotification.params,
          _meta: {
            ...jsonrpcNotification.params?._meta || {},
            [RELATED_TASK_META_KEY]: options.relatedTask
          }
        }
      };
    }
    await this._transport.send(jsonrpcNotification, options);
  }
  /**
   * Registers a handler to invoke when this protocol object receives a request with the given method.
   *
   * Note that this will replace any previous request handler for the same method.
   */
  setRequestHandler(requestSchema, handler) {
    const method = getMethodLiteral(requestSchema);
    this.assertRequestHandlerCapability(method);
    this._requestHandlers.set(method, (request, extra) => {
      const parsed = parseWithCompat(requestSchema, request);
      return Promise.resolve(handler(parsed, extra));
    });
  }
  /**
   * Removes the request handler for the given method.
   */
  removeRequestHandler(method) {
    this._requestHandlers.delete(method);
  }
  /**
   * Asserts that a request handler has not already been set for the given method, in preparation for a new one being automatically installed.
   */
  assertCanSetRequestHandler(method) {
    if (this._requestHandlers.has(method)) {
      throw new Error(`A request handler for ${method} already exists, which would be overridden`);
    }
  }
  /**
   * Registers a handler to invoke when this protocol object receives a notification with the given method.
   *
   * Note that this will replace any previous notification handler for the same method.
   */
  setNotificationHandler(notificationSchema, handler) {
    const method = getMethodLiteral(notificationSchema);
    this._notificationHandlers.set(method, (notification) => {
      const parsed = parseWithCompat(notificationSchema, notification);
      return Promise.resolve(handler(parsed));
    });
  }
  /**
   * Removes the notification handler for the given method.
   */
  removeNotificationHandler(method) {
    this._notificationHandlers.delete(method);
  }
  /**
   * Cleans up the progress handler associated with a task.
   * This should be called when a task reaches a terminal status.
   */
  _cleanupTaskProgressHandler(taskId) {
    const progressToken = this._taskProgressTokens.get(taskId);
    if (progressToken !== void 0) {
      this._progressHandlers.delete(progressToken);
      this._taskProgressTokens.delete(taskId);
    }
  }
  /**
   * Enqueues a task-related message for side-channel delivery via tasks/result.
   * @param taskId The task ID to associate the message with
   * @param message The message to enqueue
   * @param sessionId Optional session ID for binding the operation to a specific session
   * @throws Error if taskStore is not configured or if enqueue fails (e.g., queue overflow)
   *
   * Note: If enqueue fails, it's the TaskMessageQueue implementation's responsibility to handle
   * the error appropriately (e.g., by failing the task, logging, etc.). The Protocol layer
   * simply propagates the error.
   */
  async _enqueueTaskMessage(taskId, message, sessionId) {
    if (!this._taskStore || !this._taskMessageQueue) {
      throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    }
    const maxQueueSize = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(taskId, message, sessionId, maxQueueSize);
  }
  /**
   * Clears the message queue for a task and rejects any pending request resolvers.
   * @param taskId The task ID whose queue should be cleared
   * @param sessionId Optional session ID for binding the operation to a specific session
   */
  async _clearTaskQueue(taskId, sessionId) {
    if (this._taskMessageQueue) {
      const messages = await this._taskMessageQueue.dequeueAll(taskId, sessionId);
      for (const message of messages) {
        if (message.type === "request" && isJSONRPCRequest(message.message)) {
          const requestId = message.message.id;
          const resolver = this._requestResolvers.get(requestId);
          if (resolver) {
            resolver(new McpError(ErrorCode.InternalError, "Task cancelled or completed"));
            this._requestResolvers.delete(requestId);
          } else {
            this._onerror(new Error(`Resolver missing for request ${requestId} during task ${taskId} cleanup`));
          }
        }
      }
    }
  }
  /**
   * Waits for a task update (new messages or status change) with abort signal support.
   * Uses polling to check for updates at the task's configured poll interval.
   * @param taskId The task ID to wait for
   * @param signal Abort signal to cancel the wait
   * @returns Promise that resolves when an update occurs or rejects if aborted
   */
  async _waitForTaskUpdate(taskId, signal) {
    let interval = this._options?.defaultTaskPollInterval ?? 1e3;
    try {
      const task = await this._taskStore?.getTask(taskId);
      if (task?.pollInterval) {
        interval = task.pollInterval;
      }
    } catch {
    }
    return new Promise((resolve2, reject) => {
      if (signal.aborted) {
        reject(new McpError(ErrorCode.InvalidRequest, "Request cancelled"));
        return;
      }
      const timeoutId = setTimeout(resolve2, interval);
      signal.addEventListener("abort", () => {
        clearTimeout(timeoutId);
        reject(new McpError(ErrorCode.InvalidRequest, "Request cancelled"));
      }, { once: true });
    });
  }
  requestTaskStore(request, sessionId) {
    const taskStore = this._taskStore;
    if (!taskStore) {
      throw new Error("No task store configured");
    }
    return {
      createTask: async (taskParams) => {
        if (!request) {
          throw new Error("No request provided");
        }
        return await taskStore.createTask(taskParams, request.id, {
          method: request.method,
          params: request.params
        }, sessionId);
      },
      getTask: async (taskId) => {
        const task = await taskStore.getTask(taskId, sessionId);
        if (!task) {
          throw new McpError(ErrorCode.InvalidParams, "Failed to retrieve task: Task not found");
        }
        return task;
      },
      storeTaskResult: async (taskId, status, result) => {
        await taskStore.storeTaskResult(taskId, status, result, sessionId);
        const task = await taskStore.getTask(taskId, sessionId);
        if (task) {
          const notification = TaskStatusNotificationSchema.parse({
            method: "notifications/tasks/status",
            params: task
          });
          await this.notification(notification);
          if (isTerminal(task.status)) {
            this._cleanupTaskProgressHandler(taskId);
          }
        }
      },
      getTaskResult: (taskId) => {
        return taskStore.getTaskResult(taskId, sessionId);
      },
      updateTaskStatus: async (taskId, status, statusMessage) => {
        const task = await taskStore.getTask(taskId, sessionId);
        if (!task) {
          throw new McpError(ErrorCode.InvalidParams, `Task "${taskId}" not found - it may have been cleaned up`);
        }
        if (isTerminal(task.status)) {
          throw new McpError(ErrorCode.InvalidParams, `Cannot update task "${taskId}" from terminal status "${task.status}" to "${status}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        }
        await taskStore.updateTaskStatus(taskId, status, statusMessage, sessionId);
        const updatedTask = await taskStore.getTask(taskId, sessionId);
        if (updatedTask) {
          const notification = TaskStatusNotificationSchema.parse({
            method: "notifications/tasks/status",
            params: updatedTask
          });
          await this.notification(notification);
          if (isTerminal(updatedTask.status)) {
            this._cleanupTaskProgressHandler(taskId);
          }
        }
      },
      listTasks: (cursor) => {
        return taskStore.listTasks(cursor, sessionId);
      }
    };
  }
};
function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function mergeCapabilities(base, additional) {
  const result = { ...base };
  for (const key in additional) {
    const k3 = key;
    const addValue = additional[k3];
    if (addValue === void 0)
      continue;
    const baseValue = result[k3];
    if (isPlainObject(baseValue) && isPlainObject(addValue)) {
      result[k3] = { ...baseValue, ...addValue };
    } else {
      result[k3] = addValue;
    }
  }
  return result;
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/validation/ajv-provider.js
var import_ajv = __toESM(require_ajv(), 1);
var import_ajv_formats = __toESM(require_dist(), 1);
function createDefaultAjvInstance() {
  const ajv = new import_ajv.default({
    strict: false,
    validateFormats: true,
    validateSchema: false,
    allErrors: true
  });
  const addFormats = import_ajv_formats.default;
  addFormats(ajv);
  return ajv;
}
var AjvJsonSchemaValidator = class {
  /**
   * Create an AJV validator
   *
   * @param ajv - Optional pre-configured AJV instance. If not provided, a default instance will be created.
   *
   * @example
   * ```typescript
   * // Use default configuration (recommended for most cases)
   * import { AjvJsonSchemaValidator } from '@modelcontextprotocol/sdk/validation/ajv';
   * const validator = new AjvJsonSchemaValidator();
   *
   * // Or provide custom AJV instance for advanced configuration
   * import { Ajv } from 'ajv';
   * import addFormats from 'ajv-formats';
   *
   * const ajv = new Ajv({ validateFormats: true });
   * addFormats(ajv);
   * const validator = new AjvJsonSchemaValidator(ajv);
   * ```
   */
  constructor(ajv) {
    this._ajv = ajv ?? createDefaultAjvInstance();
  }
  /**
   * Create a validator for the given JSON Schema
   *
   * The validator is compiled once and can be reused multiple times.
   * If the schema has an $id, it will be cached by AJV automatically.
   *
   * @param schema - Standard JSON Schema object
   * @returns A validator function that validates input data
   */
  getValidator(schema) {
    const ajvValidator = "$id" in schema && typeof schema.$id === "string" ? this._ajv.getSchema(schema.$id) ?? this._ajv.compile(schema) : this._ajv.compile(schema);
    return (input) => {
      const valid = ajvValidator(input);
      if (valid) {
        return {
          valid: true,
          data: input,
          errorMessage: void 0
        };
      } else {
        return {
          valid: false,
          data: void 0,
          errorMessage: this._ajv.errorsText(ajvValidator.errors)
        };
      }
    };
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/server.js
var ExperimentalServerTasks = class {
  constructor(_server) {
    this._server = _server;
  }
  /**
   * Sends a request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * This method provides streaming access to request processing, allowing you to
   * observe intermediate task status updates for task-augmented requests.
   *
   * @param request - The request to send
   * @param resultSchema - Zod schema for validating the result
   * @param options - Optional request options (timeout, signal, task creation params, etc.)
   * @returns AsyncGenerator that yields ResponseMessage objects
   *
   * @experimental
   */
  requestStream(request, resultSchema, options) {
    return this._server.requestStream(request, resultSchema, options);
  }
  /**
   * Sends a sampling request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * For task-augmented requests, yields 'taskCreated' and 'taskStatus' messages
   * before the final result.
   *
   * @example
   * ```typescript
   * const stream = server.experimental.tasks.createMessageStream({
   *     messages: [{ role: 'user', content: { type: 'text', text: 'Hello' } }],
   *     maxTokens: 100
   * }, {
   *     onprogress: (progress) => {
   *         // Handle streaming tokens via progress notifications
   *         console.log('Progress:', progress.message);
   *     }
   * });
   *
   * for await (const message of stream) {
   *     switch (message.type) {
   *         case 'taskCreated':
   *             console.log('Task created:', message.task.taskId);
   *             break;
   *         case 'taskStatus':
   *             console.log('Task status:', message.task.status);
   *             break;
   *         case 'result':
   *             console.log('Final result:', message.result);
   *             break;
   *         case 'error':
   *             console.error('Error:', message.error);
   *             break;
   *     }
   * }
   * ```
   *
   * @param params - The sampling request parameters
   * @param options - Optional request options (timeout, signal, task creation params, onprogress, etc.)
   * @returns AsyncGenerator that yields ResponseMessage objects
   *
   * @experimental
   */
  createMessageStream(params, options) {
    const clientCapabilities = this._server.getClientCapabilities();
    if ((params.tools || params.toolChoice) && !clientCapabilities?.sampling?.tools) {
      throw new Error("Client does not support sampling tools capability.");
    }
    if (params.messages.length > 0) {
      const lastMessage = params.messages[params.messages.length - 1];
      const lastContent = Array.isArray(lastMessage.content) ? lastMessage.content : [lastMessage.content];
      const hasToolResults = lastContent.some((c2) => c2.type === "tool_result");
      const previousMessage = params.messages.length > 1 ? params.messages[params.messages.length - 2] : void 0;
      const previousContent = previousMessage ? Array.isArray(previousMessage.content) ? previousMessage.content : [previousMessage.content] : [];
      const hasPreviousToolUse = previousContent.some((c2) => c2.type === "tool_use");
      if (hasToolResults) {
        if (lastContent.some((c2) => c2.type !== "tool_result")) {
          throw new Error("The last message must contain only tool_result content if any is present");
        }
        if (!hasPreviousToolUse) {
          throw new Error("tool_result blocks are not matching any tool_use from the previous message");
        }
      }
      if (hasPreviousToolUse) {
        const toolUseIds = new Set(previousContent.filter((c2) => c2.type === "tool_use").map((c2) => c2.id));
        const toolResultIds = new Set(lastContent.filter((c2) => c2.type === "tool_result").map((c2) => c2.toolUseId));
        if (toolUseIds.size !== toolResultIds.size || ![...toolUseIds].every((id) => toolResultIds.has(id))) {
          throw new Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
        }
      }
    }
    return this.requestStream({
      method: "sampling/createMessage",
      params
    }, CreateMessageResultSchema, options);
  }
  /**
   * Sends an elicitation request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * For task-augmented requests (especially URL-based elicitation), yields 'taskCreated'
   * and 'taskStatus' messages before the final result.
   *
   * @example
   * ```typescript
   * const stream = server.experimental.tasks.elicitInputStream({
   *     mode: 'url',
   *     message: 'Please authenticate',
   *     elicitationId: 'auth-123',
   *     url: 'https://example.com/auth'
   * }, {
   *     task: { ttl: 300000 } // Task-augmented for long-running auth flow
   * });
   *
   * for await (const message of stream) {
   *     switch (message.type) {
   *         case 'taskCreated':
   *             console.log('Task created:', message.task.taskId);
   *             break;
   *         case 'taskStatus':
   *             console.log('Task status:', message.task.status);
   *             break;
   *         case 'result':
   *             console.log('User action:', message.result.action);
   *             break;
   *         case 'error':
   *             console.error('Error:', message.error);
   *             break;
   *     }
   * }
   * ```
   *
   * @param params - The elicitation request parameters
   * @param options - Optional request options (timeout, signal, task creation params, etc.)
   * @returns AsyncGenerator that yields ResponseMessage objects
   *
   * @experimental
   */
  elicitInputStream(params, options) {
    const clientCapabilities = this._server.getClientCapabilities();
    const mode = params.mode ?? "form";
    switch (mode) {
      case "url": {
        if (!clientCapabilities?.elicitation?.url) {
          throw new Error("Client does not support url elicitation.");
        }
        break;
      }
      case "form": {
        if (!clientCapabilities?.elicitation?.form) {
          throw new Error("Client does not support form elicitation.");
        }
        break;
      }
    }
    const normalizedParams = mode === "form" && params.mode === void 0 ? { ...params, mode: "form" } : params;
    return this.requestStream({
      method: "elicitation/create",
      params: normalizedParams
    }, ElicitResultSchema, options);
  }
  /**
   * Gets the current status of a task.
   *
   * @param taskId - The task identifier
   * @param options - Optional request options
   * @returns The task status
   *
   * @experimental
   */
  async getTask(taskId, options) {
    return this._server.getTask({ taskId }, options);
  }
  /**
   * Retrieves the result of a completed task.
   *
   * @param taskId - The task identifier
   * @param resultSchema - Zod schema for validating the result
   * @param options - Optional request options
   * @returns The task result
   *
   * @experimental
   */
  async getTaskResult(taskId, resultSchema, options) {
    return this._server.getTaskResult({ taskId }, resultSchema, options);
  }
  /**
   * Lists tasks with optional pagination.
   *
   * @param cursor - Optional pagination cursor
   * @param options - Optional request options
   * @returns List of tasks with optional next cursor
   *
   * @experimental
   */
  async listTasks(cursor, options) {
    return this._server.listTasks(cursor ? { cursor } : void 0, options);
  }
  /**
   * Cancels a running task.
   *
   * @param taskId - The task identifier
   * @param options - Optional request options
   *
   * @experimental
   */
  async cancelTask(taskId, options) {
    return this._server.cancelTask({ taskId }, options);
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/helpers.js
function assertToolsCallTaskCapability(requests, method, entityName) {
  if (!requests) {
    throw new Error(`${entityName} does not support task creation (required for ${method})`);
  }
  switch (method) {
    case "tools/call":
      if (!requests.tools?.call) {
        throw new Error(`${entityName} does not support task creation for tools/call (required for ${method})`);
      }
      break;
    default:
      break;
  }
}
function assertClientRequestTaskCapability(requests, method, entityName) {
  if (!requests) {
    throw new Error(`${entityName} does not support task creation (required for ${method})`);
  }
  switch (method) {
    case "sampling/createMessage":
      if (!requests.sampling?.createMessage) {
        throw new Error(`${entityName} does not support task creation for sampling/createMessage (required for ${method})`);
      }
      break;
    case "elicitation/create":
      if (!requests.elicitation?.create) {
        throw new Error(`${entityName} does not support task creation for elicitation/create (required for ${method})`);
      }
      break;
    default:
      break;
  }
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/index.js
var Server = class extends Protocol {
  /**
   * Initializes this server with the given name and version information.
   */
  constructor(_serverInfo, options) {
    super(options);
    this._serverInfo = _serverInfo;
    this._loggingLevels = /* @__PURE__ */ new Map();
    this.LOG_LEVEL_SEVERITY = new Map(LoggingLevelSchema.options.map((level, index) => [level, index]));
    this.isMessageIgnored = (level, sessionId) => {
      const currentLevel = this._loggingLevels.get(sessionId);
      return currentLevel ? this.LOG_LEVEL_SEVERITY.get(level) < this.LOG_LEVEL_SEVERITY.get(currentLevel) : false;
    };
    this._capabilities = options?.capabilities ?? {};
    this._instructions = options?.instructions;
    this._jsonSchemaValidator = options?.jsonSchemaValidator ?? new AjvJsonSchemaValidator();
    this.setRequestHandler(InitializeRequestSchema, (request) => this._oninitialize(request));
    this.setNotificationHandler(InitializedNotificationSchema, () => this.oninitialized?.());
    if (this._capabilities.logging) {
      this.setRequestHandler(SetLevelRequestSchema, async (request, extra) => {
        const transportSessionId = extra.sessionId || extra.requestInfo?.headers["mcp-session-id"] || void 0;
        const { level } = request.params;
        const parseResult = LoggingLevelSchema.safeParse(level);
        if (parseResult.success) {
          this._loggingLevels.set(transportSessionId, parseResult.data);
        }
        return {};
      });
    }
  }
  /**
   * Access experimental features.
   *
   * WARNING: These APIs are experimental and may change without notice.
   *
   * @experimental
   */
  get experimental() {
    if (!this._experimental) {
      this._experimental = {
        tasks: new ExperimentalServerTasks(this)
      };
    }
    return this._experimental;
  }
  /**
   * Registers new capabilities. This can only be called before connecting to a transport.
   *
   * The new capabilities will be merged with any existing capabilities previously given (e.g., at initialization).
   */
  registerCapabilities(capabilities) {
    if (this.transport) {
      throw new Error("Cannot register capabilities after connecting to transport");
    }
    this._capabilities = mergeCapabilities(this._capabilities, capabilities);
  }
  /**
   * Override request handler registration to enforce server-side validation for tools/call.
   */
  setRequestHandler(requestSchema, handler) {
    const shape = getObjectShape(requestSchema);
    const methodSchema = shape?.method;
    if (!methodSchema) {
      throw new Error("Schema is missing a method literal");
    }
    const methodValue = getLiteralValue(methodSchema);
    if (typeof methodValue !== "string") {
      throw new Error("Schema method literal must be a string");
    }
    const method = methodValue;
    if (method === "tools/call") {
      const wrappedHandler = async (request, extra) => {
        const validatedRequest = safeParse2(CallToolRequestSchema, request);
        if (!validatedRequest.success) {
          const errorMessage = validatedRequest.error instanceof Error ? validatedRequest.error.message : String(validatedRequest.error);
          throw new McpError(ErrorCode.InvalidParams, `Invalid tools/call request: ${errorMessage}`);
        }
        const { params } = validatedRequest.data;
        const result = await Promise.resolve(handler(request, extra));
        if (params.task) {
          const taskValidationResult = safeParse2(CreateTaskResultSchema, result);
          if (!taskValidationResult.success) {
            const errorMessage = taskValidationResult.error instanceof Error ? taskValidationResult.error.message : String(taskValidationResult.error);
            throw new McpError(ErrorCode.InvalidParams, `Invalid task creation result: ${errorMessage}`);
          }
          return taskValidationResult.data;
        }
        const validationResult = safeParse2(CallToolResultSchema, result);
        if (!validationResult.success) {
          const errorMessage = validationResult.error instanceof Error ? validationResult.error.message : String(validationResult.error);
          throw new McpError(ErrorCode.InvalidParams, `Invalid tools/call result: ${errorMessage}`);
        }
        return validationResult.data;
      };
      return super.setRequestHandler(requestSchema, wrappedHandler);
    }
    return super.setRequestHandler(requestSchema, handler);
  }
  assertCapabilityForMethod(method) {
    switch (method) {
      case "sampling/createMessage":
        if (!this._clientCapabilities?.sampling) {
          throw new Error(`Client does not support sampling (required for ${method})`);
        }
        break;
      case "elicitation/create":
        if (!this._clientCapabilities?.elicitation) {
          throw new Error(`Client does not support elicitation (required for ${method})`);
        }
        break;
      case "roots/list":
        if (!this._clientCapabilities?.roots) {
          throw new Error(`Client does not support listing roots (required for ${method})`);
        }
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(method) {
    switch (method) {
      case "notifications/message":
        if (!this._capabilities.logging) {
          throw new Error(`Server does not support logging (required for ${method})`);
        }
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources) {
          throw new Error(`Server does not support notifying about resources (required for ${method})`);
        }
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools) {
          throw new Error(`Server does not support notifying of tool list changes (required for ${method})`);
        }
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts) {
          throw new Error(`Server does not support notifying of prompt list changes (required for ${method})`);
        }
        break;
      case "notifications/elicitation/complete":
        if (!this._clientCapabilities?.elicitation?.url) {
          throw new Error(`Client does not support URL elicitation (required for ${method})`);
        }
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(method) {
    if (!this._capabilities) {
      return;
    }
    switch (method) {
      case "completion/complete":
        if (!this._capabilities.completions) {
          throw new Error(`Server does not support completions (required for ${method})`);
        }
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging) {
          throw new Error(`Server does not support logging (required for ${method})`);
        }
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts) {
          throw new Error(`Server does not support prompts (required for ${method})`);
        }
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources) {
          throw new Error(`Server does not support resources (required for ${method})`);
        }
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) {
          throw new Error(`Server does not support tools (required for ${method})`);
        }
        break;
      case "tasks/get":
      case "tasks/list":
      case "tasks/result":
      case "tasks/cancel":
        if (!this._capabilities.tasks) {
          throw new Error(`Server does not support tasks capability (required for ${method})`);
        }
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  assertTaskCapability(method) {
    assertClientRequestTaskCapability(this._clientCapabilities?.tasks?.requests, method, "Client");
  }
  assertTaskHandlerCapability(method) {
    if (!this._capabilities) {
      return;
    }
    assertToolsCallTaskCapability(this._capabilities.tasks?.requests, method, "Server");
  }
  async _oninitialize(request) {
    const requestedVersion = request.params.protocolVersion;
    this._clientCapabilities = request.params.capabilities;
    this._clientVersion = request.params.clientInfo;
    const protocolVersion = SUPPORTED_PROTOCOL_VERSIONS.includes(requestedVersion) ? requestedVersion : LATEST_PROTOCOL_VERSION;
    return {
      protocolVersion,
      capabilities: this.getCapabilities(),
      serverInfo: this._serverInfo,
      ...this._instructions && { instructions: this._instructions }
    };
  }
  /**
   * After initialization has completed, this will be populated with the client's reported capabilities.
   */
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  /**
   * After initialization has completed, this will be populated with information about the client's name and version.
   */
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({ method: "ping" }, EmptyResultSchema);
  }
  // Implementation
  async createMessage(params, options) {
    if (params.tools || params.toolChoice) {
      if (!this._clientCapabilities?.sampling?.tools) {
        throw new Error("Client does not support sampling tools capability.");
      }
    }
    if (params.messages.length > 0) {
      const lastMessage = params.messages[params.messages.length - 1];
      const lastContent = Array.isArray(lastMessage.content) ? lastMessage.content : [lastMessage.content];
      const hasToolResults = lastContent.some((c2) => c2.type === "tool_result");
      const previousMessage = params.messages.length > 1 ? params.messages[params.messages.length - 2] : void 0;
      const previousContent = previousMessage ? Array.isArray(previousMessage.content) ? previousMessage.content : [previousMessage.content] : [];
      const hasPreviousToolUse = previousContent.some((c2) => c2.type === "tool_use");
      if (hasToolResults) {
        if (lastContent.some((c2) => c2.type !== "tool_result")) {
          throw new Error("The last message must contain only tool_result content if any is present");
        }
        if (!hasPreviousToolUse) {
          throw new Error("tool_result blocks are not matching any tool_use from the previous message");
        }
      }
      if (hasPreviousToolUse) {
        const toolUseIds = new Set(previousContent.filter((c2) => c2.type === "tool_use").map((c2) => c2.id));
        const toolResultIds = new Set(lastContent.filter((c2) => c2.type === "tool_result").map((c2) => c2.toolUseId));
        if (toolUseIds.size !== toolResultIds.size || ![...toolUseIds].every((id) => toolResultIds.has(id))) {
          throw new Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
        }
      }
    }
    if (params.tools) {
      return this.request({ method: "sampling/createMessage", params }, CreateMessageResultWithToolsSchema, options);
    }
    return this.request({ method: "sampling/createMessage", params }, CreateMessageResultSchema, options);
  }
  /**
   * Creates an elicitation request for the given parameters.
   * For backwards compatibility, `mode` may be omitted for form requests and will default to `'form'`.
   * @param params The parameters for the elicitation request.
   * @param options Optional request options.
   * @returns The result of the elicitation request.
   */
  async elicitInput(params, options) {
    const mode = params.mode ?? "form";
    switch (mode) {
      case "url": {
        if (!this._clientCapabilities?.elicitation?.url) {
          throw new Error("Client does not support url elicitation.");
        }
        const urlParams = params;
        return this.request({ method: "elicitation/create", params: urlParams }, ElicitResultSchema, options);
      }
      case "form": {
        if (!this._clientCapabilities?.elicitation?.form) {
          throw new Error("Client does not support form elicitation.");
        }
        const formParams = params.mode === "form" ? params : { ...params, mode: "form" };
        const result = await this.request({ method: "elicitation/create", params: formParams }, ElicitResultSchema, options);
        if (result.action === "accept" && result.content && formParams.requestedSchema) {
          try {
            const validator = this._jsonSchemaValidator.getValidator(formParams.requestedSchema);
            const validationResult = validator(result.content);
            if (!validationResult.valid) {
              throw new McpError(ErrorCode.InvalidParams, `Elicitation response content does not match requested schema: ${validationResult.errorMessage}`);
            }
          } catch (error) {
            if (error instanceof McpError) {
              throw error;
            }
            throw new McpError(ErrorCode.InternalError, `Error validating elicitation response: ${error instanceof Error ? error.message : String(error)}`);
          }
        }
        return result;
      }
    }
  }
  /**
   * Creates a reusable callback that, when invoked, will send a `notifications/elicitation/complete`
   * notification for the specified elicitation ID.
   *
   * @param elicitationId The ID of the elicitation to mark as complete.
   * @param options Optional notification options. Useful when the completion notification should be related to a prior request.
   * @returns A function that emits the completion notification when awaited.
   */
  createElicitationCompletionNotifier(elicitationId, options) {
    if (!this._clientCapabilities?.elicitation?.url) {
      throw new Error("Client does not support URL elicitation (required for notifications/elicitation/complete)");
    }
    return () => this.notification({
      method: "notifications/elicitation/complete",
      params: {
        elicitationId
      }
    }, options);
  }
  async listRoots(params, options) {
    return this.request({ method: "roots/list", params }, ListRootsResultSchema, options);
  }
  /**
   * Sends a logging message to the client, if connected.
   * Note: You only need to send the parameters object, not the entire JSON RPC message
   * @see LoggingMessageNotification
   * @param params
   * @param sessionId optional for stateless and backward compatibility
   */
  async sendLoggingMessage(params, sessionId) {
    if (this._capabilities.logging) {
      if (!this.isMessageIgnored(params.level, sessionId)) {
        return this.notification({ method: "notifications/message", params });
      }
    }
  }
  async sendResourceUpdated(params) {
    return this.notification({
      method: "notifications/resources/updated",
      params
    });
  }
  async sendResourceListChanged() {
    return this.notification({
      method: "notifications/resources/list_changed"
    });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/completable.js
var COMPLETABLE_SYMBOL = Symbol.for("mcp.completable");
function isCompletable(schema) {
  return !!schema && typeof schema === "object" && COMPLETABLE_SYMBOL in schema;
}
function getCompleter(schema) {
  const meta2 = schema[COMPLETABLE_SYMBOL];
  return meta2?.complete;
}
var McpZodTypeKind;
(function(McpZodTypeKind2) {
  McpZodTypeKind2["Completable"] = "McpCompletable";
})(McpZodTypeKind || (McpZodTypeKind = {}));

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/toolNameValidation.js
var TOOL_NAME_REGEX = /^[A-Za-z0-9._-]{1,128}$/;
function validateToolName(name) {
  const warnings = [];
  if (name.length === 0) {
    return {
      isValid: false,
      warnings: ["Tool name cannot be empty"]
    };
  }
  if (name.length > 128) {
    return {
      isValid: false,
      warnings: [`Tool name exceeds maximum length of 128 characters (current: ${name.length})`]
    };
  }
  if (name.includes(" ")) {
    warnings.push("Tool name contains spaces, which may cause parsing issues");
  }
  if (name.includes(",")) {
    warnings.push("Tool name contains commas, which may cause parsing issues");
  }
  if (name.startsWith("-") || name.endsWith("-")) {
    warnings.push("Tool name starts or ends with a dash, which may cause parsing issues in some contexts");
  }
  if (name.startsWith(".") || name.endsWith(".")) {
    warnings.push("Tool name starts or ends with a dot, which may cause parsing issues in some contexts");
  }
  if (!TOOL_NAME_REGEX.test(name)) {
    const invalidChars = name.split("").filter((char) => !/[A-Za-z0-9._-]/.test(char)).filter((char, index, arr) => arr.indexOf(char) === index);
    warnings.push(`Tool name contains invalid characters: ${invalidChars.map((c2) => `"${c2}"`).join(", ")}`, "Allowed characters are: A-Z, a-z, 0-9, underscore (_), dash (-), and dot (.)");
    return {
      isValid: false,
      warnings
    };
  }
  return {
    isValid: true,
    warnings
  };
}
function issueToolNameWarning(name, warnings) {
  if (warnings.length > 0) {
    console.warn(`Tool name validation warning for "${name}":`);
    for (const warning of warnings) {
      console.warn(`  - ${warning}`);
    }
    console.warn("Tool registration will proceed, but this may cause compatibility issues.");
    console.warn("Consider updating the tool name to conform to the MCP tool naming standard.");
    console.warn("See SEP: Specify Format for Tool Names (https://github.com/modelcontextprotocol/modelcontextprotocol/issues/986) for more details.");
  }
}
function validateAndWarnToolName(name) {
  const result = validateToolName(name);
  issueToolNameWarning(name, result.warnings);
  return result.isValid;
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/mcp-server.js
var ExperimentalMcpServerTasks = class {
  constructor(_mcpServer) {
    this._mcpServer = _mcpServer;
  }
  registerToolTask(name, config, handler) {
    const execution = { taskSupport: "required", ...config.execution };
    if (execution.taskSupport === "forbidden") {
      throw new Error(`Cannot register task-based tool '${name}' with taskSupport 'forbidden'. Use registerTool() instead.`);
    }
    const mcpServerInternal = this._mcpServer;
    return mcpServerInternal._createRegisteredTool(name, config.title, config.description, config.inputSchema, config.outputSchema, config.annotations, execution, config._meta, handler);
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/mcp.js
var McpServer = class {
  constructor(serverInfo, options) {
    this._registeredResources = {};
    this._registeredResourceTemplates = {};
    this._registeredTools = {};
    this._registeredPrompts = {};
    this._toolHandlersInitialized = false;
    this._completionHandlerInitialized = false;
    this._resourceHandlersInitialized = false;
    this._promptHandlersInitialized = false;
    this.server = new Server(serverInfo, options);
  }
  /**
   * Access experimental features.
   *
   * WARNING: These APIs are experimental and may change without notice.
   *
   * @experimental
   */
  get experimental() {
    if (!this._experimental) {
      this._experimental = {
        tasks: new ExperimentalMcpServerTasks(this)
      };
    }
    return this._experimental;
  }
  /**
   * Attaches to the given transport, starts it, and starts listening for messages.
   *
   * The `server` object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
   */
  async connect(transport) {
    return await this.server.connect(transport);
  }
  /**
   * Closes the connection.
   */
  async close() {
    await this.server.close();
  }
  setToolRequestHandlers() {
    if (this._toolHandlersInitialized) {
      return;
    }
    this.server.assertCanSetRequestHandler(getMethodValue(ListToolsRequestSchema));
    this.server.assertCanSetRequestHandler(getMethodValue(CallToolRequestSchema));
    this.server.registerCapabilities({
      tools: {
        listChanged: true
      }
    });
    this.server.setRequestHandler(ListToolsRequestSchema, () => ({
      tools: Object.entries(this._registeredTools).filter(([, tool]) => tool.enabled).map(([name, tool]) => {
        const toolDefinition = {
          name,
          title: tool.title,
          description: tool.description,
          inputSchema: (() => {
            const obj = normalizeObjectSchema(tool.inputSchema);
            return obj ? toJsonSchemaCompat(obj, {
              strictUnions: true,
              pipeStrategy: "input"
            }) : EMPTY_OBJECT_JSON_SCHEMA;
          })(),
          annotations: tool.annotations,
          execution: tool.execution,
          _meta: tool._meta
        };
        if (tool.outputSchema) {
          const obj = normalizeObjectSchema(tool.outputSchema);
          if (obj) {
            toolDefinition.outputSchema = toJsonSchemaCompat(obj, {
              strictUnions: true,
              pipeStrategy: "output"
            });
          }
        }
        return toolDefinition;
      })
    }));
    this.server.setRequestHandler(CallToolRequestSchema, async (request, extra) => {
      try {
        const tool = this._registeredTools[request.params.name];
        if (!tool) {
          throw new McpError(ErrorCode.InvalidParams, `Tool ${request.params.name} not found`);
        }
        if (!tool.enabled) {
          throw new McpError(ErrorCode.InvalidParams, `Tool ${request.params.name} disabled`);
        }
        const isTaskRequest = !!request.params.task;
        const taskSupport = tool.execution?.taskSupport;
        const isTaskHandler = "createTask" in tool.handler;
        if ((taskSupport === "required" || taskSupport === "optional") && !isTaskHandler) {
          throw new McpError(ErrorCode.InternalError, `Tool ${request.params.name} has taskSupport '${taskSupport}' but was not registered with registerToolTask`);
        }
        if (taskSupport === "required" && !isTaskRequest) {
          throw new McpError(ErrorCode.MethodNotFound, `Tool ${request.params.name} requires task augmentation (taskSupport: 'required')`);
        }
        if (taskSupport === "optional" && !isTaskRequest && isTaskHandler) {
          return await this.handleAutomaticTaskPolling(tool, request, extra);
        }
        const args = await this.validateToolInput(tool, request.params.arguments, request.params.name);
        const result = await this.executeToolHandler(tool, args, extra);
        if (isTaskRequest) {
          return result;
        }
        await this.validateToolOutput(tool, result, request.params.name);
        return result;
      } catch (error) {
        if (error instanceof McpError) {
          if (error.code === ErrorCode.UrlElicitationRequired) {
            throw error;
          }
        }
        return this.createToolError(error instanceof Error ? error.message : String(error));
      }
    });
    this._toolHandlersInitialized = true;
  }
  /**
   * Creates a tool error result.
   *
   * @param errorMessage - The error message.
   * @returns The tool error result.
   */
  createToolError(errorMessage) {
    return {
      content: [
        {
          type: "text",
          text: errorMessage
        }
      ],
      isError: true
    };
  }
  /**
   * Validates tool input arguments against the tool's input schema.
   */
  async validateToolInput(tool, args, toolName) {
    if (!tool.inputSchema) {
      return void 0;
    }
    const inputObj = normalizeObjectSchema(tool.inputSchema);
    const schemaToParse = inputObj ?? tool.inputSchema;
    const parseResult = await safeParseAsync2(schemaToParse, args);
    if (!parseResult.success) {
      const error = "error" in parseResult ? parseResult.error : "Unknown error";
      const errorMessage = getParseErrorMessage(error);
      throw new McpError(ErrorCode.InvalidParams, `Input validation error: Invalid arguments for tool ${toolName}: ${errorMessage}`);
    }
    return parseResult.data;
  }
  /**
   * Validates tool output against the tool's output schema.
   */
  async validateToolOutput(tool, result, toolName) {
    if (!tool.outputSchema) {
      return;
    }
    if (!("content" in result)) {
      return;
    }
    if (result.isError) {
      return;
    }
    if (!result.structuredContent) {
      throw new McpError(ErrorCode.InvalidParams, `Output validation error: Tool ${toolName} has an output schema but no structured content was provided`);
    }
    const outputObj = normalizeObjectSchema(tool.outputSchema);
    const parseResult = await safeParseAsync2(outputObj, result.structuredContent);
    if (!parseResult.success) {
      const error = "error" in parseResult ? parseResult.error : "Unknown error";
      const errorMessage = getParseErrorMessage(error);
      throw new McpError(ErrorCode.InvalidParams, `Output validation error: Invalid structured content for tool ${toolName}: ${errorMessage}`);
    }
  }
  /**
   * Executes a tool handler (either regular or task-based).
   */
  async executeToolHandler(tool, args, extra) {
    const handler = tool.handler;
    const isTaskHandler = "createTask" in handler;
    if (isTaskHandler) {
      if (!extra.taskStore) {
        throw new Error("No task store provided.");
      }
      const taskExtra = { ...extra, taskStore: extra.taskStore };
      if (tool.inputSchema) {
        const typedHandler = handler;
        return await Promise.resolve(typedHandler.createTask(args, taskExtra));
      } else {
        const typedHandler = handler;
        return await Promise.resolve(typedHandler.createTask(taskExtra));
      }
    }
    if (tool.inputSchema) {
      const typedHandler = handler;
      return await Promise.resolve(typedHandler(args, extra));
    } else {
      const typedHandler = handler;
      return await Promise.resolve(typedHandler(extra));
    }
  }
  /**
   * Handles automatic task polling for tools with taskSupport 'optional'.
   */
  async handleAutomaticTaskPolling(tool, request, extra) {
    if (!extra.taskStore) {
      throw new Error("No task store provided for task-capable tool.");
    }
    const args = await this.validateToolInput(tool, request.params.arguments, request.params.name);
    const handler = tool.handler;
    const taskExtra = { ...extra, taskStore: extra.taskStore };
    const createTaskResult = args ? await Promise.resolve(handler.createTask(args, taskExtra)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await Promise.resolve(handler.createTask(taskExtra))
    );
    const taskId = createTaskResult.task.taskId;
    let task = createTaskResult.task;
    const pollInterval = task.pollInterval ?? 5e3;
    while (task.status !== "completed" && task.status !== "failed" && task.status !== "cancelled") {
      await new Promise((resolve2) => setTimeout(resolve2, pollInterval));
      const updatedTask = await extra.taskStore.getTask(taskId);
      if (!updatedTask) {
        throw new McpError(ErrorCode.InternalError, `Task ${taskId} not found during polling`);
      }
      task = updatedTask;
    }
    return await extra.taskStore.getTaskResult(taskId);
  }
  setCompletionRequestHandler() {
    if (this._completionHandlerInitialized) {
      return;
    }
    this.server.assertCanSetRequestHandler(getMethodValue(CompleteRequestSchema));
    this.server.registerCapabilities({
      completions: {}
    });
    this.server.setRequestHandler(CompleteRequestSchema, async (request) => {
      switch (request.params.ref.type) {
        case "ref/prompt":
          assertCompleteRequestPrompt(request);
          return this.handlePromptCompletion(request, request.params.ref);
        case "ref/resource":
          assertCompleteRequestResourceTemplate(request);
          return this.handleResourceCompletion(request, request.params.ref);
        default:
          throw new McpError(ErrorCode.InvalidParams, `Invalid completion reference: ${request.params.ref}`);
      }
    });
    this._completionHandlerInitialized = true;
  }
  async handlePromptCompletion(request, ref) {
    const prompt = this._registeredPrompts[ref.name];
    if (!prompt) {
      throw new McpError(ErrorCode.InvalidParams, `Prompt ${ref.name} not found`);
    }
    if (!prompt.enabled) {
      throw new McpError(ErrorCode.InvalidParams, `Prompt ${ref.name} disabled`);
    }
    if (!prompt.argsSchema) {
      return EMPTY_COMPLETION_RESULT;
    }
    const promptShape = getObjectShape(prompt.argsSchema);
    const field = promptShape?.[request.params.argument.name];
    if (!isCompletable(field)) {
      return EMPTY_COMPLETION_RESULT;
    }
    const completer = getCompleter(field);
    if (!completer) {
      return EMPTY_COMPLETION_RESULT;
    }
    const suggestions = await completer(request.params.argument.value, request.params.context);
    return createCompletionResult(suggestions);
  }
  async handleResourceCompletion(request, ref) {
    const template = Object.values(this._registeredResourceTemplates).find((t) => t.resourceTemplate.uriTemplate.toString() === ref.uri);
    if (!template) {
      if (this._registeredResources[ref.uri]) {
        return EMPTY_COMPLETION_RESULT;
      }
      throw new McpError(ErrorCode.InvalidParams, `Resource template ${request.params.ref.uri} not found`);
    }
    const completer = template.resourceTemplate.completeCallback(request.params.argument.name);
    if (!completer) {
      return EMPTY_COMPLETION_RESULT;
    }
    const suggestions = await completer(request.params.argument.value, request.params.context);
    return createCompletionResult(suggestions);
  }
  setResourceRequestHandlers() {
    if (this._resourceHandlersInitialized) {
      return;
    }
    this.server.assertCanSetRequestHandler(getMethodValue(ListResourcesRequestSchema));
    this.server.assertCanSetRequestHandler(getMethodValue(ListResourceTemplatesRequestSchema));
    this.server.assertCanSetRequestHandler(getMethodValue(ReadResourceRequestSchema));
    this.server.registerCapabilities({
      resources: {
        listChanged: true
      }
    });
    this.server.setRequestHandler(ListResourcesRequestSchema, async (request, extra) => {
      const resources = Object.entries(this._registeredResources).filter(([_, resource]) => resource.enabled).map(([uri, resource]) => ({
        uri,
        name: resource.name,
        ...resource.metadata
      }));
      const templateResources = [];
      for (const template of Object.values(this._registeredResourceTemplates)) {
        if (!template.resourceTemplate.listCallback) {
          continue;
        }
        const result = await template.resourceTemplate.listCallback(extra);
        for (const resource of result.resources) {
          templateResources.push({
            ...template.metadata,
            // the defined resource metadata should override the template metadata if present
            ...resource
          });
        }
      }
      return { resources: [...resources, ...templateResources] };
    });
    this.server.setRequestHandler(ListResourceTemplatesRequestSchema, async () => {
      const resourceTemplates = Object.entries(this._registeredResourceTemplates).map(([name, template]) => ({
        name,
        uriTemplate: template.resourceTemplate.uriTemplate.toString(),
        ...template.metadata
      }));
      return { resourceTemplates };
    });
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request, extra) => {
      const uri = new URL(request.params.uri);
      const resource = this._registeredResources[uri.toString()];
      if (resource) {
        if (!resource.enabled) {
          throw new McpError(ErrorCode.InvalidParams, `Resource ${uri} disabled`);
        }
        return resource.readCallback(uri, extra);
      }
      for (const template of Object.values(this._registeredResourceTemplates)) {
        const variables = template.resourceTemplate.uriTemplate.match(uri.toString());
        if (variables) {
          return template.readCallback(uri, variables, extra);
        }
      }
      throw new McpError(ErrorCode.InvalidParams, `Resource ${uri} not found`);
    });
    this._resourceHandlersInitialized = true;
  }
  setPromptRequestHandlers() {
    if (this._promptHandlersInitialized) {
      return;
    }
    this.server.assertCanSetRequestHandler(getMethodValue(ListPromptsRequestSchema));
    this.server.assertCanSetRequestHandler(getMethodValue(GetPromptRequestSchema));
    this.server.registerCapabilities({
      prompts: {
        listChanged: true
      }
    });
    this.server.setRequestHandler(ListPromptsRequestSchema, () => ({
      prompts: Object.entries(this._registeredPrompts).filter(([, prompt]) => prompt.enabled).map(([name, prompt]) => {
        return {
          name,
          title: prompt.title,
          description: prompt.description,
          arguments: prompt.argsSchema ? promptArgumentsFromSchema(prompt.argsSchema) : void 0
        };
      })
    }));
    this.server.setRequestHandler(GetPromptRequestSchema, async (request, extra) => {
      const prompt = this._registeredPrompts[request.params.name];
      if (!prompt) {
        throw new McpError(ErrorCode.InvalidParams, `Prompt ${request.params.name} not found`);
      }
      if (!prompt.enabled) {
        throw new McpError(ErrorCode.InvalidParams, `Prompt ${request.params.name} disabled`);
      }
      if (prompt.argsSchema) {
        const argsObj = normalizeObjectSchema(prompt.argsSchema);
        const parseResult = await safeParseAsync2(argsObj, request.params.arguments);
        if (!parseResult.success) {
          const error = "error" in parseResult ? parseResult.error : "Unknown error";
          const errorMessage = getParseErrorMessage(error);
          throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for prompt ${request.params.name}: ${errorMessage}`);
        }
        const args = parseResult.data;
        const cb = prompt.callback;
        return await Promise.resolve(cb(args, extra));
      } else {
        const cb = prompt.callback;
        return await Promise.resolve(cb(extra));
      }
    });
    this._promptHandlersInitialized = true;
  }
  resource(name, uriOrTemplate, ...rest) {
    let metadata;
    if (typeof rest[0] === "object") {
      metadata = rest.shift();
    }
    const readCallback = rest[0];
    if (typeof uriOrTemplate === "string") {
      if (this._registeredResources[uriOrTemplate]) {
        throw new Error(`Resource ${uriOrTemplate} is already registered`);
      }
      const registeredResource = this._createRegisteredResource(name, void 0, uriOrTemplate, metadata, readCallback);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResource;
    } else {
      if (this._registeredResourceTemplates[name]) {
        throw new Error(`Resource template ${name} is already registered`);
      }
      const registeredResourceTemplate = this._createRegisteredResourceTemplate(name, void 0, uriOrTemplate, metadata, readCallback);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResourceTemplate;
    }
  }
  registerResource(name, uriOrTemplate, config, readCallback) {
    if (typeof uriOrTemplate === "string") {
      if (this._registeredResources[uriOrTemplate]) {
        throw new Error(`Resource ${uriOrTemplate} is already registered`);
      }
      const registeredResource = this._createRegisteredResource(name, config.title, uriOrTemplate, config, readCallback);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResource;
    } else {
      if (this._registeredResourceTemplates[name]) {
        throw new Error(`Resource template ${name} is already registered`);
      }
      const registeredResourceTemplate = this._createRegisteredResourceTemplate(name, config.title, uriOrTemplate, config, readCallback);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResourceTemplate;
    }
  }
  _createRegisteredResource(name, title, uri, metadata, readCallback) {
    const registeredResource = {
      name,
      title,
      metadata,
      readCallback,
      enabled: true,
      disable: () => registeredResource.update({ enabled: false }),
      enable: () => registeredResource.update({ enabled: true }),
      remove: () => registeredResource.update({ uri: null }),
      update: (updates) => {
        if (typeof updates.uri !== "undefined" && updates.uri !== uri) {
          delete this._registeredResources[uri];
          if (updates.uri)
            this._registeredResources[updates.uri] = registeredResource;
        }
        if (typeof updates.name !== "undefined")
          registeredResource.name = updates.name;
        if (typeof updates.title !== "undefined")
          registeredResource.title = updates.title;
        if (typeof updates.metadata !== "undefined")
          registeredResource.metadata = updates.metadata;
        if (typeof updates.callback !== "undefined")
          registeredResource.readCallback = updates.callback;
        if (typeof updates.enabled !== "undefined")
          registeredResource.enabled = updates.enabled;
        this.sendResourceListChanged();
      }
    };
    this._registeredResources[uri] = registeredResource;
    return registeredResource;
  }
  _createRegisteredResourceTemplate(name, title, template, metadata, readCallback) {
    const registeredResourceTemplate = {
      resourceTemplate: template,
      title,
      metadata,
      readCallback,
      enabled: true,
      disable: () => registeredResourceTemplate.update({ enabled: false }),
      enable: () => registeredResourceTemplate.update({ enabled: true }),
      remove: () => registeredResourceTemplate.update({ name: null }),
      update: (updates) => {
        if (typeof updates.name !== "undefined" && updates.name !== name) {
          delete this._registeredResourceTemplates[name];
          if (updates.name)
            this._registeredResourceTemplates[updates.name] = registeredResourceTemplate;
        }
        if (typeof updates.title !== "undefined")
          registeredResourceTemplate.title = updates.title;
        if (typeof updates.template !== "undefined")
          registeredResourceTemplate.resourceTemplate = updates.template;
        if (typeof updates.metadata !== "undefined")
          registeredResourceTemplate.metadata = updates.metadata;
        if (typeof updates.callback !== "undefined")
          registeredResourceTemplate.readCallback = updates.callback;
        if (typeof updates.enabled !== "undefined")
          registeredResourceTemplate.enabled = updates.enabled;
        this.sendResourceListChanged();
      }
    };
    this._registeredResourceTemplates[name] = registeredResourceTemplate;
    const variableNames = template.uriTemplate.variableNames;
    const hasCompleter = Array.isArray(variableNames) && variableNames.some((v2) => !!template.completeCallback(v2));
    if (hasCompleter) {
      this.setCompletionRequestHandler();
    }
    return registeredResourceTemplate;
  }
  _createRegisteredPrompt(name, title, description, argsSchema, callback) {
    const registeredPrompt = {
      title,
      description,
      argsSchema: argsSchema === void 0 ? void 0 : objectFromShape(argsSchema),
      callback,
      enabled: true,
      disable: () => registeredPrompt.update({ enabled: false }),
      enable: () => registeredPrompt.update({ enabled: true }),
      remove: () => registeredPrompt.update({ name: null }),
      update: (updates) => {
        if (typeof updates.name !== "undefined" && updates.name !== name) {
          delete this._registeredPrompts[name];
          if (updates.name)
            this._registeredPrompts[updates.name] = registeredPrompt;
        }
        if (typeof updates.title !== "undefined")
          registeredPrompt.title = updates.title;
        if (typeof updates.description !== "undefined")
          registeredPrompt.description = updates.description;
        if (typeof updates.argsSchema !== "undefined")
          registeredPrompt.argsSchema = objectFromShape(updates.argsSchema);
        if (typeof updates.callback !== "undefined")
          registeredPrompt.callback = updates.callback;
        if (typeof updates.enabled !== "undefined")
          registeredPrompt.enabled = updates.enabled;
        this.sendPromptListChanged();
      }
    };
    this._registeredPrompts[name] = registeredPrompt;
    if (argsSchema) {
      const hasCompletable = Object.values(argsSchema).some((field) => {
        const inner = field instanceof ZodOptional ? field._def?.innerType : field;
        return isCompletable(inner);
      });
      if (hasCompletable) {
        this.setCompletionRequestHandler();
      }
    }
    return registeredPrompt;
  }
  _createRegisteredTool(name, title, description, inputSchema, outputSchema, annotations, execution, _meta, handler) {
    validateAndWarnToolName(name);
    const registeredTool = {
      title,
      description,
      inputSchema: getZodSchemaObject(inputSchema),
      outputSchema: getZodSchemaObject(outputSchema),
      annotations,
      execution,
      _meta,
      handler,
      enabled: true,
      disable: () => registeredTool.update({ enabled: false }),
      enable: () => registeredTool.update({ enabled: true }),
      remove: () => registeredTool.update({ name: null }),
      update: (updates) => {
        if (typeof updates.name !== "undefined" && updates.name !== name) {
          if (typeof updates.name === "string") {
            validateAndWarnToolName(updates.name);
          }
          delete this._registeredTools[name];
          if (updates.name)
            this._registeredTools[updates.name] = registeredTool;
        }
        if (typeof updates.title !== "undefined")
          registeredTool.title = updates.title;
        if (typeof updates.description !== "undefined")
          registeredTool.description = updates.description;
        if (typeof updates.paramsSchema !== "undefined")
          registeredTool.inputSchema = objectFromShape(updates.paramsSchema);
        if (typeof updates.outputSchema !== "undefined")
          registeredTool.outputSchema = objectFromShape(updates.outputSchema);
        if (typeof updates.callback !== "undefined")
          registeredTool.handler = updates.callback;
        if (typeof updates.annotations !== "undefined")
          registeredTool.annotations = updates.annotations;
        if (typeof updates._meta !== "undefined")
          registeredTool._meta = updates._meta;
        if (typeof updates.enabled !== "undefined")
          registeredTool.enabled = updates.enabled;
        this.sendToolListChanged();
      }
    };
    this._registeredTools[name] = registeredTool;
    this.setToolRequestHandlers();
    this.sendToolListChanged();
    return registeredTool;
  }
  /**
   * tool() implementation. Parses arguments passed to overrides defined above.
   */
  tool(name, ...rest) {
    if (this._registeredTools[name]) {
      throw new Error(`Tool ${name} is already registered`);
    }
    let description;
    let inputSchema;
    let outputSchema;
    let annotations;
    if (typeof rest[0] === "string") {
      description = rest.shift();
    }
    if (rest.length > 1) {
      const firstArg = rest[0];
      if (isZodRawShapeCompat(firstArg)) {
        inputSchema = rest.shift();
        if (rest.length > 1 && typeof rest[0] === "object" && rest[0] !== null && !isZodRawShapeCompat(rest[0])) {
          annotations = rest.shift();
        }
      } else if (typeof firstArg === "object" && firstArg !== null) {
        if (Object.values(firstArg).some((v2) => typeof v2 === "object" && v2 !== null)) {
          throw new Error(`Tool ${name} expected a Zod schema or ToolAnnotations, but received an unrecognized object`);
        }
        annotations = rest.shift();
      }
    }
    const callback = rest[0];
    return this._createRegisteredTool(name, void 0, description, inputSchema, outputSchema, annotations, { taskSupport: "forbidden" }, void 0, callback);
  }
  /**
   * Registers a tool with a config object and callback.
   */
  registerTool(name, config, cb) {
    if (this._registeredTools[name]) {
      throw new Error(`Tool ${name} is already registered`);
    }
    const { title, description, inputSchema, outputSchema, annotations, _meta } = config;
    return this._createRegisteredTool(name, title, description, inputSchema, outputSchema, annotations, { taskSupport: "forbidden" }, _meta, cb);
  }
  prompt(name, ...rest) {
    if (this._registeredPrompts[name]) {
      throw new Error(`Prompt ${name} is already registered`);
    }
    let description;
    if (typeof rest[0] === "string") {
      description = rest.shift();
    }
    let argsSchema;
    if (rest.length > 1) {
      argsSchema = rest.shift();
    }
    const cb = rest[0];
    const registeredPrompt = this._createRegisteredPrompt(name, void 0, description, argsSchema, cb);
    this.setPromptRequestHandlers();
    this.sendPromptListChanged();
    return registeredPrompt;
  }
  /**
   * Registers a prompt with a config object and callback.
   */
  registerPrompt(name, config, cb) {
    if (this._registeredPrompts[name]) {
      throw new Error(`Prompt ${name} is already registered`);
    }
    const { title, description, argsSchema } = config;
    const registeredPrompt = this._createRegisteredPrompt(name, title, description, argsSchema, cb);
    this.setPromptRequestHandlers();
    this.sendPromptListChanged();
    return registeredPrompt;
  }
  /**
   * Checks if the server is connected to a transport.
   * @returns True if the server is connected
   */
  isConnected() {
    return this.server.transport !== void 0;
  }
  /**
   * Sends a logging message to the client, if connected.
   * Note: You only need to send the parameters object, not the entire JSON RPC message
   * @see LoggingMessageNotification
   * @param params
   * @param sessionId optional for stateless and backward compatibility
   */
  async sendLoggingMessage(params, sessionId) {
    return this.server.sendLoggingMessage(params, sessionId);
  }
  /**
   * Sends a resource list changed event to the client, if connected.
   */
  sendResourceListChanged() {
    if (this.isConnected()) {
      this.server.sendResourceListChanged();
    }
  }
  /**
   * Sends a tool list changed event to the client, if connected.
   */
  sendToolListChanged() {
    if (this.isConnected()) {
      this.server.sendToolListChanged();
    }
  }
  /**
   * Sends a prompt list changed event to the client, if connected.
   */
  sendPromptListChanged() {
    if (this.isConnected()) {
      this.server.sendPromptListChanged();
    }
  }
};
var EMPTY_OBJECT_JSON_SCHEMA = {
  type: "object",
  properties: {}
};
function isZodTypeLike(value) {
  return value !== null && typeof value === "object" && "parse" in value && typeof value.parse === "function" && "safeParse" in value && typeof value.safeParse === "function";
}
function isZodSchemaInstance(obj) {
  return "_def" in obj || "_zod" in obj || isZodTypeLike(obj);
}
function isZodRawShapeCompat(obj) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  if (isZodSchemaInstance(obj)) {
    return false;
  }
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return Object.values(obj).some(isZodTypeLike);
}
function getZodSchemaObject(schema) {
  if (!schema) {
    return void 0;
  }
  if (isZodRawShapeCompat(schema)) {
    return objectFromShape(schema);
  }
  if (!isZodSchemaInstance(schema)) {
    throw new Error("inputSchema must be a Zod schema or raw shape, received an unrecognized object");
  }
  return schema;
}
function promptArgumentsFromSchema(schema) {
  const shape = getObjectShape(schema);
  if (!shape)
    return [];
  return Object.entries(shape).map(([name, field]) => {
    const description = getSchemaDescription(field);
    const isOptional = isSchemaOptional(field);
    return {
      name,
      description,
      required: !isOptional
    };
  });
}
function getMethodValue(schema) {
  const shape = getObjectShape(schema);
  const methodSchema = shape?.method;
  if (!methodSchema) {
    throw new Error("Schema is missing a method literal");
  }
  const value = getLiteralValue(methodSchema);
  if (typeof value === "string") {
    return value;
  }
  throw new Error("Schema method literal must be a string");
}
function createCompletionResult(suggestions) {
  return {
    completion: {
      values: suggestions.slice(0, 100),
      total: suggestions.length,
      hasMore: suggestions.length > 100
    }
  };
}
var EMPTY_COMPLETION_RESULT = {
  completion: {
    values: [],
    hasMore: false
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/stdio.js
import process2 from "node:process";

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/stdio.js
var STDIO_DEFAULT_MAX_BUFFER_SIZE = 10 * 1024 * 1024;
var ReadBuffer = class {
  constructor(options) {
    this._maxBufferSize = options?.maxBufferSize ?? STDIO_DEFAULT_MAX_BUFFER_SIZE;
  }
  append(chunk) {
    const newSize = (this._buffer?.length ?? 0) + chunk.length;
    if (newSize > this._maxBufferSize) {
      this.clear();
      throw new Error(`ReadBuffer exceeded maximum size of ${this._maxBufferSize} bytes`);
    }
    this._buffer = this._buffer ? Buffer.concat([this._buffer, chunk]) : chunk;
  }
  readMessage() {
    if (!this._buffer) {
      return null;
    }
    const index = this._buffer.indexOf("\n");
    if (index === -1) {
      return null;
    }
    const line = this._buffer.toString("utf8", 0, index).replace(/\r$/, "");
    this._buffer = this._buffer.subarray(index + 1);
    return deserializeMessage(line);
  }
  clear() {
    this._buffer = void 0;
  }
};
function deserializeMessage(line) {
  return JSONRPCMessageSchema.parse(JSON.parse(line));
}
function serializeMessage(message) {
  return JSON.stringify(message) + "\n";
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/stdio.js
var StdioServerTransport = class {
  constructor(_stdin = process2.stdin, _stdout = process2.stdout, options) {
    this._stdin = _stdin;
    this._stdout = _stdout;
    this._started = false;
    this._ondata = (chunk) => {
      try {
        this._readBuffer.append(chunk);
        this.processReadBuffer();
      } catch (error) {
        this.onerror?.(error);
        this.close().catch(() => {
        });
      }
    };
    this._onerror = (error) => {
      this.onerror?.(error);
    };
    this._readBuffer = new ReadBuffer({ maxBufferSize: options?.maxBufferSize });
  }
  /**
   * Starts listening for messages on stdin.
   */
  async start() {
    if (this._started) {
      throw new Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
    }
    this._started = true;
    this._stdin.on("data", this._ondata);
    this._stdin.on("error", this._onerror);
  }
  processReadBuffer() {
    while (true) {
      try {
        const message = this._readBuffer.readMessage();
        if (message === null) {
          break;
        }
        this.onmessage?.(message);
      } catch (error) {
        this.onerror?.(error);
      }
    }
  }
  async close() {
    this._stdin.off("data", this._ondata);
    this._stdin.off("error", this._onerror);
    const remainingDataListeners = this._stdin.listenerCount("data");
    if (remainingDataListeners === 0) {
      this._stdin.pause();
    }
    this._readBuffer.clear();
    this.onclose?.();
  }
  send(message) {
    return new Promise((resolve2) => {
      const json = serializeMessage(message);
      if (this._stdout.write(json)) {
        resolve2();
      } else {
        this._stdout.once("drain", resolve2);
      }
    });
  }
};

// arketum/dist/mcp/cli.js
import { randomUUID } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { basename, isAbsolute, join, relative, resolve } from "node:path";
import { createHash } from "node:crypto";
var cf = b;
(function(a5, a6) {
  const ce = b, a7 = a5();
  while (!![]) {
    try {
      const a8 = -parseInt(ce(460)) / 1 + parseInt(ce(524)) / 2 * (parseInt(ce(887)) / 3) + -parseInt(ce(782)) / 4 + parseInt(ce(1042)) / 5 + parseInt(ce(700)) / 6 * (-parseInt(ce(761)) / 7) + -parseInt(ce(535)) / 8 + -parseInt(ce(580)) / 9 * (-parseInt(ce(949)) / 10);
      if (a8 === a6) break;
      else a7["push"](a7["shift"]());
    } catch (a9) {
      a7["push"](a7["shift"]());
    }
  }
})(a, 979786);
function a() {
  const cT = ["DgHLigLUChv0imkR", "C3bSAwnL", "icaTia", "Dg91y2HxAxrO", "iYmGqxj0AwzHy3rZ", "ks4Gq29YCSoTz2vSBYbHig1HBM8GEsb2DwvSDMuGysbLBNrYzwDHCI4", "C2vJDwvUy2LH", "C2LUigZdRw1PDgu", "y2fUzgLKyxrVCW", "icaGia", "lMfYA2v0Dw0VChjVEwvJDg8UEwfTBa", "CMvJAgf6ywrV", "sgf5ihvUic5HCMTLDhvTl2fYy2HLDhLWzs55yw1SoIbJB24GChjVEwvJDg8GBM8GC2uGDxnHlG", "y29TCgXLDge", "BM8GAhvIBYbYzxnWDwvZDgeGka", "ywrK", "ycWGB3iGCMvTB3zLihrOzsbGzxH0zw5KC2aGyw5KigrLy2XHCMuGDgHLihDOB2XLihbVBgLJEsbPBIb0AguGyxjJAgv0ExbLigL0C2vSzI4", "mc4WlJa", "yg9Wzw5GoIb3Agf0igLZihrVigjLigfJAgLLDMvKlG", "lsbbCMTLDhvTig5VigvQzwn1DgeGBMfKytOGBgfZihbYDwvIyxmGEsbSB3mGy29Tyw5KB3mGBg9ZignVCNjLCYb0W7OGEsbLBNrYzwDHCYbZDsbLDMLKzw5JAweU", "DgfYz2v0lNLHBwW", "WRSGBM8GC2uGDxnHoIbTyw5KysbLBcbKzwWGAw52zw50yxjPBYWGWQS", "lcbHC8oTihf1zsbSyxmG", "Aw5JBhvKzxm", "yxzPC28", "qxj0zwzHy3rVimkR", "tM8GAgf5ia", "Aw50zw50Aw9UCY55yw1S", "AxmGBM90ihvZzwq", "u2KGzgvJAwrLCZOGBg8GzgvJAwrPzg8", "y29UlwjHC2u", "mtG5ode5vfHewxfb", "CMvZB2X1DgLVBNm", "Dg9ku09ou2nOzw1H", "oIbLC3rLignVCNb1CYb0B2rHDSoTysbUBYbKzwnSyxjHihn1ihbVBmoTDgLJys4GtmoTC3rHBwuGC3vZihj1DgfZigvUigbWyxrOC2aG4OcuBgfZihf1zsbXDwLLCMfZigDVyMvYBMfYlcbZAw4GBgfZignHCNbLDgfZigDLBMvYywrHC+kaLcb5ihrLigrLDNvLBhzVihvUignHBMrPzgf0BYbJB24GBg8GCxvLihnLig9IC2vYDMeGEsbSyxmGChjLz3vUDgfZigrLigXVihf1zsbUBY4GtgLZDgfYigvZihr1Ew87ig1PCMfYigrLBNrYBYbKzsbSB3mGzMLJAgvYB3mGBM8GAgfJzsbMywX0ys4", "CMv0CM9Hy3rPDMe", "icbotYbtrsbsrvnvruXwrtOG", "twLLBNrYyxmGDw5HigLUy29TCgf0AwjPBgLKywqGC2LNysbHyMLLCNrHlcbZDsbYyw1Hihf1zwrHigrLDgvUAwrHlIbfBcbYzxn0BYbKzwWGCgXHBIbZzsbWDwvKzsbLAMvJDxrHCIbPz3vHBdOGDw5HigrLy2LZACoZBIbWzw5KAwvUDguGBM8Gy29Uz2vSysbSysbTAwDYywnPW7nUigvUDgvYys4", "ignHBM5VDcbIzsbYzwfKoIa", "lsdcQW", "z2v0", "lsaQkKfJDhvHBgL6yxiUkIOGrwWGW61UzgLJzsbUBYbZzsbLzgL0ytOGC2uGy2fSy3vSys4Gvw5HihvUAwrHzcbXDwuGy2fTyMLHigzPy2HLCM9ZigrLihvUigfYDgvMywn0BYbJB24GCMvXDwLZAxrVCYbKzwnSyxjHihf1W6KGCMvXDwLZAxrVCYb0B2pdSZOGzwXLBwvUDg9ZigrLihjLCxvPC2L0BYbLBIbZDsbquKqGkgb0ExbLycb5igbYzxf1AxnPDg9GksWGzxzPzgvUy2LHignVBIbGC2f0AxnMAwvZycWGBYdcQ3nPBIbYzxf1AxnPDg/cUYbJB24GC3uGBw90AxzVigfSignLCNjHCIaOyg5VuMvXDwLYzw1LBNrGks4Gu2KGBM8Sig5VignPzxjYys4", "zxzLCNK", "ygf1zgL0ydOGDgHLigDHChmGyw5KigrYAwz0CYbbCMTLDhvTignVBxb1DgvZicHZAwDUywXZig9MihrOzsbZAgfWzsbJAgfUz2vKigj5igHHBMqSig91Dhb1DhmGB2yGDgHLihnOyxbLihDPDgHVDxqGysbZDgfJAYb3AxrOigzPEhr1CMvZlcb3Agf0igfUigfYy2HPDgvJDhvYzsbHzgrLzcbHzNrLCIb0AguGyxv0Ag9YAw5NihDHCYbHChbYB3zLzcWGyM91BMrHCMLLCYb3AxrOB3v0igeGCgfPCIbVCIb1BMrLy2XHCMvKlcb0D2LUihjLCxvPCMvTzw50CZOGysbZDgf0zw1LBNqGDgHHDcbVBMX5ihjLCgvHDhmGAxrZihrPDgXLlcbVCIbHigz1BMn0Aw9UywWGyw5KigeGDgvJAg5Py2fSihjLCxvPCMvTzw50ihDPDgGGDgHLihnHBwuGDgL0BguGB3iGC3rHDgvTzw50ksWGzwfJAcbVBMuGyxmGysb0B3bPyYb3AxrOigL0CYbWCM9WB3nHBc4", "uMvXDwvZDfrPBwvVDxq", "DgHLignSAwvUDcbUyw1LCYbVzIbHignHDgfSB2CGy2fUBM90igjLihvZzwq6ia", "ycWGAwXLz2LIBgu6ia", "lIbbBIbVBgqGB25LigLZigXLzNqGDw5KAxn0CMLIDxrLzc4", "icbYzxnVBhzLzdOG", "ygfYDgLMywn0ycbPCYbTAxnZAw5NoIbZyxKGD2HPy2GGyxj0AwzHy3qGD2HHDcb5B3uGC3vIBwL0igjLBg9Uz3mGDg8UifrOAxmGChjVAMvJDcbKzwnSyxjLCYa", "yNL0zuXLBMD0Aa", "DhjPBq", "igLUia", "sg93igL0igLZihjLC29SDMvK", "FcbbCNrLzMfJDg8GFcbsyCoTEIb8iefYCxvLDgLWBYb8ierLCgvUzguGzguGFcbtzsb0B2nHignVBIb8", "y29UDgLUDwe", "DMvYC2LVBG", "iYmGqxj0zwzHy3rVCW", "y2fUy2vS", "tM90yq", "lMfYA2v0Dw0V", "lsaQkKXLzxiUkIOGqwWGywjYAxiGBYbYzxrVBwfYihvUysb1BMLKywqSigXHigD1W61HihrYywuGzwWGkIRdRw5KAwnLigrLihjLCxvPC2L0B3mQkJOGBmoPzwXVigfUDgvZigrLihrVy2fYig5HzgeU", "C2nVCgu", "lsaQkKrVCYbSB29WCZOGBgeGy2fWDhvYysb5igXHigLTCgXLBwvUDgfJACoZBI4QkIbbBcbLBxbLEMfYihvUysbZzxnPW7nUlcbWCMvNW7PUDgfSzsbHigXHihbLCNnVBMeGC2KGDhjHyMfQysbLBIbWyxjHBgvSBYbVigvUihnLy3vLBMnPysb5ihrYyw5ZBCoTDgvSBYbJB24GygfJDgLVBJOGBw9KzwaGkgnVBIbGC3vIywDLBNrZoIb0CNvLycbZAsb0DsbJBgLLBNrLihb1zwrLigrLBgvNyxiGzw4GC3vIywDLBNrLCYKUiefSihrLCM1PBMfYihvUysbKzwzPBMLJACoZBIWGqxjRzxr1BsbWCMvZzw50ysbXDCoPigHHy2vYignVBIbSBYbSAxn0BYb5igXHihjVBMrHihnPz3vPzw50ztOGzw4GCgfYywXLBg8SignHzgeGDw5PzgfKihf1zsbZywXLimkRBgfUEMfYWRSGDMeGysb1BIbZDwjHz2vUDguGCxvLigvTCgLLEMeGy29UigbHy3rPB246ihjLC3vTzwaSihKGDmo6ihz1zwX2zxmGysbSysbJyxb0DxjHoYbLBIbZzwn1zw5JAweSigXHigLTCgXLBwvUDgfZigfUDgvZigrLigfICMLYig90CMeUifnPigLTCgXLBwvUDgfZihKGBM8GChvLzgvZihnLz3vPCIbZAw4GBgeGCgvYC29UysWGBCoHCMnHBgeGy29UigbHy3rPB246igjSB2nRycb5igbYzwfZB25GlcbZAw4GAw50zxjYDw1WAxiGBgeGy2fWDhvYys4", "yNvPBgq", "CM9VDa", "lsbbigXHihbLCNnVBMeGC2uGBguGChjLz3vUDgeGBg8GCxvLigvZihn1Ew86igXVihf1zsbZzsbJB25ZDhj1EwuSigXVihf1zsbJAg9JysbJB24GBg8GzgvJAwrPzg8SigvSigrLC3bSAwvNDwuGEsWGywWGDgvYBwLUyxiSihnPihf1zwtdSYbJB21Vihf1zxldRweGkgXHignVBMzPCM1Hy2NdS24Gzw4GDgfUzgePlIbmB3mGz2f0zxmGzgvSihbYB2nLC28GkgfICMLYihvUysb1BMLKywqSigvSihjHzgLVigrLigfSy2fUy2uPigXVCYbWDwvKzsbKzwXLz2fYigvSBgeGy29UigbHy3rPB246igrLBgvNyxrLycb5ihvUihrVCguGkg8Gyg5Vx2XPBwL0ycWGAgfZDgeGCxvLigXHihjLDM9XDwuSignVBIb1BIbYzxn1BwvUihbLCMNdS2rPy28Gzw4GBgeGDgfUzgePoIbLBNrVBMnLCYbZzsbHChj1zwjHBIbZB2XVCYWGy29UignHBMfSigbKzwXLz2fKB2aUie5VigXHignVBMnLzgfZihtdUJOGC2uGBgeGCgLKzsbbCMTLDhvTlG", "ygf1zgL0ydOGDgHLihjLCg9YDcbVzIb0AguGygnODw5RycaOyhjLDMLLD2vYycWGyhjLDMLLD2vKycWGygzPBMrPBMDZycbHBMqGygnVBNnVBgLKyxrPB25ZydOGD2HHDcbWDxjZDwvZihrOzsbZyw1LihrOAw5NlcbWCM9WB3nLzcbHCYbHignVBNnVBgLKyxrLzcbquKqPlcb0AguGC2fTzsbHCYb0AguGCMv0CM9Hy3rPDMuGDMfSAwrHDgLVBUkaMxmUigbKCMLMDga6ihrOzsbMDw5JDgLVBMfSigrYAwz0ihjLCg9YDcb5B3uGD3jPDguGEw91CNnLBgy6igbYzxj1BNnGicHLywnOihjLCxvPCMvTzw50ig9Uy2uSihDPDgGGDgHLigv4ywn0ignVBw1HBMqGyw5KigL0CYbGzxHPDenVzgvGlcbVCIbGBM90rxHLy3v0ywjSzwaGD2L0Acb0AguGCMvHC29UksbHBMqGyg5VuMvXDwLYzw1LBNrGicH3Agf0ihDHCYbKB25LihrOyxqGAxmGAw4GBM8GCMvXDwLYzw1LBNqPlIbxAxrOB3v0igL0lcbGzhjPzNrGihnHExmGD2HHDcb0BYbYzxj1BI4GsxqGy2HHBMDLCYbUBYbZDgf0zs4", "ygrLzMvYydOGDgHLigrLywrSAw5LlcbHBIbju08GodyWmsbKyxrLlG", "BgvUz3rO", "oYbMyw5VDxq6ia", "zgvSzxrL", "ywnJzxb0zwq", "ufjpwuvdve8Gq09oiejbu0u6igvZDgeGy2fYCgv0ysbUBYb0AwvUzsbG", "lsaOBM90AgLUzYK", "B2jQzxrPDM8", "vgHLigrVy3vTzw50CYb3AxrOihDOAwnOihrOzsbWzxjZB24GzgvZy3jPyMvZihDOyxqGDgHLEsb3yw50oIb0Agv5igfYzsbUzwL0AgvYihn5C3rLBsbUB3iGC2nHzMzVBgrPBMCUifDOyxqGy2HHBMDLzcbPBIb0AgvTigLZihrOzsbIyxnLig9MihrOzsbUzxH0ihvUAxqGD2L0AcbLBgLJAxrHDgLVBIWGD2HPy2GGAxrZigfUywX5C3qGCMvHzhmGAw4GzNvSBdO", "icaGigrLAMeGC2LUihbYB3LLy2nPW7nUigv2ywX1ywjSztOG", "lsbuAguGkIPWCM9Qzwn0ihbVBgLJEsOQicHG", "u2KGC2uGCMv0AxjHihvUytOGy3xdOwW", "EwvZ", "ignHBM5VDcbIzsbYzwfKicG", "WRSSihjVB3qGya", "y2f0y2G", "zwXPy2L0sw5WDxq", "zhjHzNqTnW", "DMvYzwrPy3rV", "uhjVAMvJDcdcQW", "ydOG", "ChvZAa", "lsbxB3jRigDVzxmGAw4GkIP3B3jRihvUAxrZkIO6ig9UzsbPCYbVCgvUzwqGD2L0AcbGywn0Aw9UoIbVCgvUycWGysbSyw5LlcbHBIbVyMPLy3rPDMuGyw5KihrOzsbHCNrPzMfJDhmGAxqGDg91y2HLCY4", "ycbHBMqGBM8Gy29KzsWGyNv0igL0igHHCYbKB2n1BwvUDhmGkgj5ihrOzwLYigv4DgvUC2LVBJSGqxjRzxr1BsbKB2vZig5VDcbYzwfKihrOzw0PlIbjDcbKB2vZig5VDcbZDgfYDcbMCM9TihnJCMf0y2G6ihrOzxKGyxjLihrOzsbcqvnflcb3Agf0ihrOzsbWzxjZB24GAgfZigfSCMvHzhKGD3jPDhrLBIbHyM91Dcb3Agf0ihrOzxKGD2fUDc4Gv3jPDguGDgHPCYbTAw5PBwfSiga", "ihvUzgvJAwrLzcbJB250CMfKAwn0Aw9UkhmP", "yg9Wzw5GoIb0AguGBgfUzsWGyNKGBMfTzsbHBMqSigLMihDHBNrLzcWGzxHHy3qGDMvYC2LVBI4", "C3vJy2vZCW", "yhrLBgvTzxrYEwa6ihDOzxrOzxiGDgHLihbLCNnVBIbHy2nLChrZicHGDhj1zwaPig9Yig5VDcaOygzHBhnLycKGC2vUzgLUzYb0AguGyw5VBNLTB3vZihvZywDLihn1Bw1HCNKSihDPDgGGyhf1B3rLycWGDgHLAxiGBgL0zxjHBcb3B3jKCY4GtMv2zxiGEw91CNmU", "WRSGBM8GzxHPC3rLoIbGCM9VDgaGzxmGBgeGy2fYCgv0ysbKzwWGChjVEwvJDg8SignVBIbZDsbYDxrHigfIC29SDxrHlG", "tgfZihvUAwrHzgvZigrLihrYywjHAM8GBMvJzxnPDgfUiga", "zgvZDgLUBW", "zgvJAxnPB24", "ksWGCxvPESoHigrLihvUysbYyw1HigrLBcaXig1LEMnSywrHoIbUBYbZzsbSzwvUlIbGywn0Aw9UoIb1CgrHDgvFC3rVCMvGigXHCYbPBMnVCNbVCMeSignVBIbSysbTAxnTysbNyxjHBNtdRweGkhnPig5VignOB2nHBIbJB24GDw5HignVCgLHigrLBcaYks4", "ycaOCMvTB3zPBMCGAxqGAxmGysbWB2XPy3KGy2HHBMDLihrOzsbWzxjZB24GzgvJAwrLCYK", "ycbUAsbJW7nKAwDVlcbWzxjVihrPzw5LigrVy3vTzw50B3mGkhbVCIbZDsbLEhrLBNnPW7nUoYbbCMTLDhvTig5VigXVCYbSzwuPlIboBYbZzsbWyxj0zsbKzsbJzxjVoIbZB24GBgeGqKftrsWGBg8GCxvLigXHihbLCNnVBMeGEweGzxnJCMLIACoZigrLigXVihf1zsbXDwLLCMuUievZy3jPyMuGDmo6igvZDguGya", "Dg9Wzq", "iokaLca", "igfYDgvMywn0BYHZks4", "yhjLCxvPCMvTzw50ydOGDgHLihjLCxvPCMvTzw50CYb5B3uGBg9VAYb1CcWGydXHCNrPzMfJDd46pgLKpMaSig9YihrOzsb1BNr5CgvKigLUDgvUDhmSiga8yxj0AwzHy3q+lZXPzd5GlG", "BgfUz3vHz2u", "B2jQzwn0AxzL", "zxHPC3rLBNrL", "lsbfywnOihvUAxqGzM9SBg93CYb0AguGC3rLChmGB2yGAxrZicOQBgfUzsOQoYbLywnOigfYDgLMywn0igrLC2nLBMrZigL0CYbSywrKzxiGBgv2zwWGyNKGBgv2zwWGD2L0AcbGywn0Aw9UoIbZDwjTAxrGlG", "Agf5ia", "icbNDwfYzgfKBYbLBIbG", "zgvZy3jPyMvZ", "ycWGEsbZAwD1zsbMDw5JAw9Uyw5KBYbJB21VihnPzw1WCMuUifbHCMeGCgfZyxiGysbSysbKAwDLC3rPW7nUoIbLC2nYAwjLigvSiga", "B2jZB2XLDg8", "igvUia", "zMLUza", "BwLNCMfJAw9U", "BwfW", "BMfTzq", "AhvLBgXH", "Aw5WDxq", "lsbbCMTLDhvTihj1BNmGBM90AgLUzZOGEw91ihj1BIb0AguGDgvZDhmGyw5KihrOzsbJB21Tyw5KCYbHBMqGC3vIBwL0ihrOzwLYigv2AwrLBMnLlG", "ygrLy2LKzwaGyxqGysbJB250CMfKAwn0Aw9U4OczCYbNyxrLoIbOB3CGDgHLihbLCNnVBIbYzxnVBhzLzcbPDcaOD2HPy2GGB25LihbYzxzHAwXZlcb3AgLJAcbVBMuGAxmGD2L0AgrYyxDUlcb3AgvUigvHy2GGB25LigfWCgXPzxmSig9YigrLzMvYks4", "yxzPC29Z", "z2v0q2XPzw50vMvYC2LVBG", "pceTlsbhzw5LCMf0zwqGyNKGqxjRzxr1BsbMCM9Tia", "yg9Wzw5GoIb0AguGC2HVCNqGBMfTzsbVzIb0AguGDw5PDdSGAxrZigLKigLZiga8BgfUzt4TphnSDwC+yc4", "yhrVCgLJydOGBgvHDMuGysb0B3bPyYb0BYbKAxnJDxnZicHGDgL0BgvGlcbGzNjVBwa6igbWzxjZB25GihDPDgGGDgHLAxiGyhDVCMrZycb2zxjIyxrPBsWGB3iGygfNzw50ycbPzIb5B3uGChjVCg9ZzsbPDdSGygnVBNrLEhrGlcbGCxvLC3rPB25ZycbHBMqGyhbYB3bVC2fSycbVChrPB25HBdOGDgHLihvUAxqGDgHHDcb3B3vSzcb0ywnRBguGAxqSihDPDgGGygXHBMvGlcbGB2jQzwn0AxzLycbHBMqSigLMig5LzwrLzcWGygnSyxnZycWGygLKC2aSigb0B3vJAgvZycbHBMqGyg9WDgLVBNnGlcb0AguGCgf0AhmGDgHLihbLCNnVBIbJAg9VC2vZigfTB25NksbVCIbJBg9ZzsbPDcaOygnSB3nLC2a6igL0CYbPzdSGygHVD2a6igbJB252zxj0zwrGihDPDgGGDgHLigb1BML0ycb0Agf0ihDHCYbVCgvUzwqSig9YigbKAxnJyxjKzwrGihDPDgGGDgHLigbYzwfZB25GigfUzcb0AguGCgvYC29U4OczCYbGD29YzhnGksbVCIbYzwXHEsb3Agf0ihrOzsbWzxjZB24Gyw5ZD2vYzwqGDg8GAxqGDgHYB3vNAcb0AguGy2HHDcaOygfUC3DLCNnGoIbPDhmGAwqSihDPDgGGDgHLAxiGyhDVCMrZycb2zxjIyxrPBtSGAxqGzg9LCYbUB3qGy2XVC2uGAxqPlcbVCIbJBg9ZzsbHihDOB2XLigDYB3vWigf0ig9Uy2uGAwyGDgHLihbLCNnVBIbKzwnPzgvZihnVicHGy2XVC2vZr3jVDxbGoIb0AguGz3jVDxdIGjLZigLKigfUzcbPDhmGygzPBMDLCNbYAw50ycWGDgHLig9Uzsb0AguGyMf0y2GGyw5Kigb0B3bPy2aGD2L0AcbGz3jVDxbGigDPDMuSihDPDgGGygHVD2aGyw5KihrOzsbZyw1LigfZihDOzw4Gy2XVC2LUzYbVBMuPlIbxAxrOB3v0igb0B3bPy2aSigL0igXPC3rZihrOzsbVCgvUig9UzxmGz3jVDxbLzcbIEsbVCMLNAw4Gyw5KigLUDgvUDcaOB2yGzwfJAcbNCM91CcWGDgHLigzPCNn0ig9Uzxm7igeGD2HVBguGB25Llcb3AxrOigbNCM91CgaPlIbGB3bLBMa6ihrOzsbPzcbVzIbHBIbVCgvUihrVCgLJicHHihrLEhqPoIb3Agf0igrVzxmGBM90ignVBwuGAw4GDgHLignHBgWGAxmGDgfRzw4GzNjVBsbPDhmGChjVCg9ZywWGkgXHBMuSig9IAMvJDgL2zsWGDg91y2HLzcbHCNrPzMfJDhmSignSyxnZAwzPy2f0Aw9UoYb0AguGC2X1zYWGAxrZigLKksWGyw5Kig9Uig9Wzw5PBMCGAxqGAxmGy2XVC2vKigfZignVBNzLCNrLzcbPBNrVihrOzsb1BML0lG", "q28TCMvXDwLZAxrVCZO", "u2KGyxbYDwvIyxm6ignHDmoHBg9NBYbKB25KzsbZzsbWDwjSAwnHigvSigfYCxvLDgLWBW", "ycbHBMqGDgHLigfYy2HLDhLWzxmPigLZihbPBM5Lzcb3AgvUigvHy2GGDw5PDcbZDgfYDhmUierVig5VDcbLzgL0igL0igj5igHHBMqGDg8Gy2XVC2u6ihDOyxqGqxjRzxr1Bsb3CML0zxmGDgHYB3vNAcbHigDHDguGy291BNrZlcb3Agf0igLZigvKAxrLzcbIEsbOyw5KigrVzxmGBM90icHGCg9SAwn5x2nOyw5NzwrGks4GswyGAxqGBMvLzhmGDg8Gy2HHBMDLlcbGywn0Aw9UoIbWB2XPy3LGihbYB3bVC2vZigL0igfUzcb0AguGCgvYC29UigrLy2LKzxmGAxqU", "C3rYAw5NAwz5", "zNvZAw9UywjSzq", "CgfYyw1Z", "sxqGzg9LCYbUB3qGCMvZB2X2zsbPBIb0AguGChjVAMvJDokaMxmGy2f0ywXVz3m6ihrOzsbZDgf0DxmGC2f5CYb3AhKU", "rgvJAxnPW7nU", "ygbGEwfTBaO", "yhn1yM1PDgaGAw4Gysb1BML04OczCYbZExn0zw0GC3rLCdOGygLUDMvUDg9YEs5PDgvTC2aGy2fYCMLLCYbVBMX5ihDOyxqGAxmGBMv3igfUzcb3Agf0ignOyw5Nzwq7ihrOzsbYzxn0igLZigLUAgvYAxrLzcbMCM9TihrOzsbIyxnLBgLUzsaODgHLihnHBwuGBgv2zwWGB2yGDgHLigfYDgLMywn0igLUihrOzsbSyxn0ignSB3nLzcb1BML0ihrOyxqGzgvZy2vUzgvKigL0ksWGyw5KiefYA2v0Dw0Gy29TCg9ZzxmGDgHLihDOB2XLigXLDMvSlIboB3qGDMfSAwqGB24GysbMzwqGtdaU", "t3b0Aw9UywWUifrOzsbZDgfYDgLUzYbPBNzLBNrVCNKGyw5KihrOzsbWCM9WB3nLzcbJAgfUz2uSihnVihrOyxqGDgHLihzLCMrPy3qGDgvSBhmGD2HHDcb0AgLZignOyw5NzsbPBNrYB2r1y2vKigzYB20GD2HHDcb3yxmGywXYzwfKEsbICM9Rzw4UieLUC2LKzsbHihvUAxqSiefYA2v0Dw0GC2v0CYb0AguGyMfZzwXPBMuGkhrOzsbSzxzLBcbVzIb0AguGBgfZDcbJBg9ZzwqGDw5PDcb0Agf0igrLC2nLBMrLzcb0AguGyxj0AwzHy3qPoIbKzwnSyxjLig9UBhKGygrLBhrHC2aU", "CgvYC29Uyq", "CgfYDgu", "AxngAw5PDgu", "zxnWzxjHCG", "C3rYAwn0", "y29UDgvUDa", "WRSGzguGya", "yxj0AwzHy3q", "DMfSB3i", "C29YDa", "mtu2mZe4vhneyw14", "qvjlrvrvtv9hqvrfuW", "ywn0DwfSAxPHCI1HBc1LBNrYyxi", "x21LDge", "iYmGug9SW610AwnHigrLignHzgeGyxjXDwv0AxbV", "WRSSihDOyxqGDg8GywrQDxn0lG", "q2fUBM90igrLC2nLBMqGWQS", "BM90zq", "zgvMzwn0BW", "AwrPB21H", "yxbYB2jHzg8", "y29UzgLJAw9U", "BwvKAwe", "C3vWzxjszwzPBMu", "ignVBIbGywn0Aw9UydOGzgvUDhjVigrLihvUysb1BMLKywqGzguGDhjHyMfQBYbZzsbLBNrYzwDHignVBIbGywn0Aw9UoIbZDwjTAxrGihKGC3uGyhvUAxrGlG", "vgHLigLKig9MihrOzsb3B3jRihvUAxqGkga8BgfUzt4TphnSDwC+ycKSigLUigv2zxj5igfJDgLVBIbIDxqGyg9Wzw5GicHPBIbGCMvXDwLYzw1LBNrGlcbVChrPB25HBcKU", "zw50CMfKyq", "ygLKzw50Axr5ydOGDgHLig5HBwuGDgHLihbLCNnVBIbZywLKihrVigLKzw50Awz5ihrOzw1ZzwX2zxmGD2L0AcaOBM8GBg9NAw4PlIbozxzLCIbVBMuGEw91igLUzMvYCMvKlG", "ig5VDcbMB3vUza", "WRSSihf1zsbUBYbLCYb1BIb2ywXVCIb2W6fSAwrVlcb5ihnLigLNBM9YytOGDMfSzw4GygnOyxrGicHWCMvNDw50yxiGCg9YigvSignOyxqGyxvUCxvLigvSignSAwvUDguGzgvJBgfYzsbLBcbMB3jTDwXHCMLVksb5igbMB3jTDwXHCMLVycaOAw50zw50yxiGC2LLBxbYzsbLBcbMB3jTDwXHCMLVlcbZAw4GCMvJB3jKyxiGDw4Gy2XPzw50zsbXDwuGBg8Gzgv2B2X2ACoZihnPBIbYzxnWDwvZDgePlG", "lIbezsbSyxmG", "C2LNBMfS", "BM8GAhvIBYbYzxnWDwvZDgeGkhnLignHBMnLBmoZigvSigzVCM11BgfYAw8P", "zMXHDa", "Dhj1C3q", "zw52", "AxnbCNjHEq", "CxvPDgfY", "D2HLBG", "yc4kcK5pihnLigHHigfYCMfUy2fKBYbUywrHlcb5igvZigeGChjVCmoZC2L0BY4Gr29IzxjUyxiGy29UigvSigHPAM8GysbZzwnHCYbHCgXPy2fYW61Hig1LzgLHihbVBmoTDgLJysdIGjrZAw4GBg9ZihrPCg9ZlcbSB3mGzxH0CMfJDg9YzxmSigXVCYbJBY1Yzxf1AxnPDg9Zig5PigXVCYbUAxzLBgvZigrLigXHigjHC2xIGjqGEsbbrevnW4ftignVBIbKB3mGy29TChjVyMfJAw9UzxmGyxbHz2fKyxmSihbVCNf1zsbSysbJB25MB3jTAwrHzcbKzsb1BIbHCNf1zxrPCg8GCxvLigHLCMvKysbZzsbHCgXHEMeGAgfZDgeGCMvZB2X2zxjSBY4Gvw4GyxbSyxPHBwLLBNrVihf1zsbUBYbZzsbJDw1WBguGzxmGDw5HignVBxbYB2jHy2NdS24GCxvLig5Vigv4Axn0zsWGEsb1BMeGCxvLig5Vigv4Axn0zsbLCYbWzw9Yihf1zsb1BMeGCxvLigzHBgXHlGOku2fSAwrHCYWGBgfZigrVCYb2W6fSAwrHCZOGCg9UigXHigjHC2uGzw4Gya", "lsaQkLf1ACoPBIbMAxjTys4QkIbezwnSW6fYyxrLignVBIbGywDLBNrGigfSigfICMLYihvUysb1BMLKywqUifnPigvYzxmGDw4GC3vIywDLBNrLlcbWyxnHigbHz2vUDgaGzw4Gy2fKysbSBgfTywrHihf1zsbYzwDPC3rYzsbHBgDVoIbJB21Wyxj0zxmGBgeGy29UzxHPW7nUigrLBcbHz2vUDguGChjPBMnPCgfSlcb5igfZW60GBg8GDhv5BYbXDwvKysbHihr1ig5VBwjYzsbZAw4Gy2fTyMLHCIbLBcbZDxLVlG", "C3rHDhvZ", "zM9YrwfJAa", "zhvKyq", "CMvTB3zLuMvXDwvZDeHHBMrSzxi", "C2vUze5VDgLMAwnHDgLVBG", "sxrLBsbRAw5KCZO", "zxHLy3v0Aw9U", "ycWGEsbLC2eGyMfZzsbUBYbLC3tdOs4Gu2uGyNvZy8oZigvUiga", "C2nHzMzVBgrPBMC6ifS", "BMfTztOG", "zgvJAwrPCG", "icbUAxzLBd0", "vgHLigfYDgLMywn0imkR", "Dg9VBhmVy2fSBa", "swyGCMvTB3zLzdOGD2HPy2GGyxj0AwzHy3rZigXLyxzLlcbZzxbHCMf0zwqGyNKGy29TBwfZicHLBxb0Esa9igfSBcK", "zxn0CMLJDg8", "lsbuAguGCgvYC29UigLZigfZA2vKihDOyxqGAxmGDgHLAxjZoIb3Agf0igDLDhmGyNvPBhqSihDOyxqGy2XHC2HLCYb3AxrOihDOyxqGD2fZigrLy2LKzwqSihrOzsbKzxbSB3LTzw50igfUzcWGyxqGDgHLigvUzcWGD2HLDgHLCIbPDcb0DxjUzwqGB3v0igfZihrOzxKGD2fUDgvKicH0AguGy29UzMLYBwf0Aw9UigLUihrOzsbIyxrJAcKUifrOzsbWCM9JzxnZigDHDgvZicHVCgvUAw5NigeGDw5PDcWGDgHLihnJB3bLihjHzgL1CYKGy2fUigjLigrLBgvNyxrLzcbIEsb0AgvTihDPDgGGygfJDgLVBJOGzgvSzwDHDgvGigfUzcbHigXPBwL0icHVCIbGBM9FBgLTAxrGlcb1BNrPBcb0Agv5ihjLDM9RzsbPDcWGD2L0AcbHihbLCMLVzgLJihn1Bw1HCNKGAw4GDgHLigjHDgnOktOGDgHLBIb0Agv5igfYzsbHChbYB3zLzcbVBIb0AgvPCIbVD24SihDPDgGGy2HHBM5LBcbGzgvSzwDHzg9GlIbeBYbUB3qGz3jHBNqGAxqGEw91CNnLBgy6iefYA2v0Dw0GyxnRCYb0AgvTigzVCIbPDc4", "B3jPz2vU", "BgeGCgvYC29UysbUBYbSBYbLBNrLBMrPW7m6ig5VihnLigfWCNvLyMeGBMfKyq", "Cgf0DgvYBG", "ycb8iga", "BgfUz3vHz2u6igfZAW", "lsaQkLjLywqUkIOGv2HLBIbVCgvUAw5Nig9YihjLC3vTAw5NigeGDw5PDcWGDgHLigD1AwrLigjYAw5NCYb0AguGkIPYzxf1AxjLBwvUDcbPBMrLEcOQoIbYzwfKigL0igjLzM9Yzsb0B3vJAgLUzYbHBNL0AgLUzY4", "rmoZBMrLihzPDMuGy2fKysb0AxbVicHYzwXHDgL2BYbHigXHihjHW616igrLBcbHCNrLzMfJDg8PoG", "vgLWB3mGzguGzwXLBwvUDg86", "Aw52ywXPzge", "icH5igrLy2ZdOxjHBg8Gzw4GzwWGyw5Kyw1PywPLigrLiga", "tgfZig9Wy2LVBMvZoIa", "zMLSDgvY", "Cg9ZAxrPDMu", "mZi5z3HyAgr0", "y29YCMvV", "igf0ihrOzsbYB290ig9MihrOzsbWCM9Qzwn0icG", "oIbLC3rVCYbMAwnOzxjVCYbKzsaUyxjRzxr1Bs8GBM8Gy2fYz2fUoGO", "vg9VBca", "iezVCM1HigrLBcbZAxn0zw1HoIa", "ycbUBYbZzsb1C2eGC2LUigb1BML0ydOGzwWGCgfXDwv0zsbKzsb1BIbWyxbLBcbLCYbLBcbKzsb1BMeGDw5PzgfKignVBIbSzxzHBNrHBwLLBNrVlG", "AgfZt3DU", "qvjlrvrvtv9fu1bfuKfFrevFufjfr1vovefFtvm", "lsbdB25MB3jTyw5JzsWGD2L0AgrYyxDHBcWGysbYzxbVCNrLzcbKzwzLy3qGyw5KigrLy2LKAw5NigeGygrLy2LZAw9UycbHCMuGzgvJAwrLzcbIEsb0AguGCgvYC29UigLUC2LKzsbHihvUAxq6igfZAYbMB3iGDgHLBsb3AxrOigbHy3rPB246igfZA2aU", "ydOGDgHLihbHDgHZihLVDsbKzwnSyxjLicHGBg9JyxrPB25GlcbHBMqGDgHVC2uGB2yGysbKzwX0ysKGyxjLihjLBgf0AxzLihrVihrOyxqGCM9VDcWGANvZDcbSAwTLihrOzsbWyxr0zxjUCYbVzIbPDhmGyxjJAgv0ExbLlGOk", "vgHLCMuGAxmGysaUyxjRzxr1Bs90yxjNzxqUEwfTBdOGD2L0AcbHihbYB2PLy3qGBM8GBwLNCMf0Aw9UCYbHCMuGy29TChv0zwqU", "igvUDhjHzgeOCYKGy29UigXVCYbUB21ICMvZigrLBcbMB3jTyxrVideGzw4GDw4GywXTywpdQw4GzgvSidiGka", "yMXVCxvLyq", "CMvZDw1L", "Bgf0zxi", "CMv2B2TLza", "ihnVBg8G", "BNvTyMvY", "sgf5ihvUic5HCMTLDhvTl3rHCMDLDc55yw1SoIbJB24GChjVEwvJDg8GBM8GC2uGy2fSy3vSyw4GBwLNCMfJAw9UzxmU", "ig5VihnLihb1zwrLigXLzxiGka", "mtC3mta0Bw5QswnZ", "ktOGD3jPDguGAxqGEw91CNnLBgySigj5DguGzM9Yigj5DguSihDOzxjLihLVDxiGywDLBNqGD2LSBcbYzwfKigL0lIbuAguGC3rHDhvZigrVzxmGBM90ignVBxbHCMuGAxqGD2L0AcbHBNKGzMLSzs4kcG", "qw5ZD2vY", "CMvJAgf6ywrVCW", "iYmGug9SAwn5ig9MigvHy2GGyxjJAgv0ExbL", "BM90yq", "y292zxjHz2u6ia", "ywn0DwfSAxPHCL9HBg1Hy2vU", "ycWGBM8GC2uGChvLzguGBgvLCJOG", "ygrLzMvYydOGDgHLihn0zxaGDgHHDcbPCYbKzwzLCNjLzc4GygrLy2LKzwa6ihrOzsbNyxrLihLVDsbWCMvZzw50zwqGkgbSyw5LycbVCIb0AguGC3rLCokaMxmGAwqPlIbGC3vIBwL0ycb3AxrOigbLDMLKzw5Jzwa6ihrOzsbZDgvWlcbPzIbZzxzLCMfSihnOyxjLihrOzsbYzxf1AxjLBwvUDc4", "BgL0zxjHBa", "Cg9SAxrPy2e", "zxjYB3i", "BM9Fzw50AwvUzg8", "ChjLy2vKzw5Jzq", "ywnJzxb0", "oIbUB3qGysbWyxjHBwv0zxiGB2yGygj1AwXKycbPBIbLAxrOzxiGBgfUz3vHz2uSigfUzcbUB3qGDxnLzc4", "lcbLEgnLChqG", "zgvJAwrL", "DgfYz2v0", "zxn0ywrVswXLz2LIBgu", "ksWGBgv2zwWG", "ihj1DgfZihf1zsbOyxmGBgLZDgfKBYbUBYbZzsb1C2fUihbHCMeGBMfKysbHCxxdRtOGChjVCg9UzxiGDw5HihbVBmoTDgLJysbZB2XVihrPzw5LihnLBNrPzg8Gzg9UzguGBM8GBgeGAgf5lIbwDwvSDMuGysbSBgfTyxiGC2LUigbWyxrOC2aUcGO", "lsbG", "CMvXDwLYzwrsB2XLCW", "Bw92Aw1Pzw50B3m", "zgvMzxjYzwq", "igzVCIa", "oIbSBYbXDwuGzxnJCMLIAxn0zsb0AwvUzsbMB3jTysbKzsbZzwnYzxrVicG", "icaGihDOyxqGAxmGyxzHAwXHyMXLlcb3AxrOig5VihbYzwzLCMvUy2u6ia", "C2X1zW", "BM90AgLUzYbHy2nLChrLza", "BM8GAhvIBYbYzxnWDwvZDgeGkgXHihjLC3b1zxn0ysbUBYb0CMhdRweGDw4GAwrPB21HihBdOwXPzg8P", "Dw5PDa", "Dw5PzgfKqwjPzxj0yq", "ksWGCgvYAgfWCYbMCM9TigeGzM9YBwf0ideGyNjHBMnOihrOyxqGD2fZig1LCMDLzdOGDgHLEsbHCMuGBM90ihjLywqUigbHy3rPB246ihvWzgf0zv9ZDg9YzwaGDgfRzxmGDgHLBsbPBIWGD2L0Acb0AguGC2fTzsbNDwfYyw50zwuGkgLMihrOzxKGzg8GBM90ignSyxnOihDPDgGGysbMB3jTyxqGmIbJB3b5ks4", "CMvXDwLZAxrV", "BM8GAhvIBYbYzxnWDwvZDgeGkgXHihjLC3b1zxn0ysbUBYb0CMhdRweGDw4GDMvYzwrPy3rVihBdOwXPzg8P", "yxjJAgv0ExbL", "BM8GBgLTAxq", "ufjpwuvdve8GtLvfvK86ihbHCMeGzw1WzxPHCIbJB24GDw5PzgfKzxmGzguGDhjHyMfQBYbKzxnKzsb1BMeGy2fYCgv0ysb2ywpdRweSigvZy3jPyMuGDmo6igvZDguGya", "B3bJAw9Uzxm", "swyGEw91ihjLAMvJDdOGAxmGAxqGA2vWDcbVCIbYzw1VDMvKpW", "zMXHDe1HCa", "u2KGzwWGBw90AxzVign1zxn0Aw9Uysb1BIbWyxnVigfUDgvYAw9YoIbKzxnKzsbJDCoHBcbZzsbYzxrVBwe", "lsaQkLDOzw4GEw91ihn0yxj0ihDVCMTPBMCQkIWGyNjPBMCGDxaGDgHLihbLCNnVBUkaMxmGCgfUzwWGD2L0AcbGywn0Aw9UoIbWyw5LBgaGyw5KigDPDMuGDgHLBsbPDhmGywrKCMvZCZOGAxqGAxmGD2HLCMuGDgHLEsbZzwuGDgHLihn0yxr1CYbHBMqGzgvJAwrLihrOzwLYihbLBMrPBMCGAxrLBxmSihDPDgHVDxqGyw4GywDLBNqU", "C2HHCgu", "y29KAwDV", "icbWCM9NCMvZCZ0", "icbZyxzLzcbPBIbG", "ycWGBw92zsbGyxjJAgv0ExbLlNLHBwXGihrVigbHCNf1zxrPCg9Zl2aGAw4GDgHLihbYB2PLy3qGy2f0ywXVzYaOC2vLihrOzsbZzwn0Aw9Uig9Uig1VDMLUzYbMCM9TihrOzsbVBgqGzM9YBwf0lcbGzg9JCY9SAwzLy3LJBguUBwrGimkNmYKGyw5Kig9Wzw4Gysb1BML0igLUihrOzsbGzgLNzxn0ycbSyw5LoYbKAwDLC3rPB24GDxnLCYbPDcbHCYb0AguGyxjJAgv0ExbLig9MigeGC2LUz2XLlwXHEwvYigfYDgLMywn0lG", "ks4GvgHLEsbHCMuGy2HLy2TLzcb0B2DLDgHLCIb3AxrOihrOzsbGy2HLy2TGigXHBMuSigjLzM9YzsbKzxbSB3LPBMCU", "BM8Gyw5ZD2vYicH0AguGCMvZCg9UC2uGzgLKig5VDcbJyxjYEsbHihzHBgLKigXHBMD1ywDLkq", "DgvTyq", "ygrLy2LKzwaGyxqGysbYzxf1AxjLBwvUDokaMxmGz2f0ztOGD2H5icHYzxf1AxjLzcb3AxrOigbYzxrPCMvGlcbGzgvJAwrLycbHBMqGyg5Vx2uYzwaPlG", "yhbYB3bVC2fSycbUzwvKCYbGyMfZzwXPBMvGig91DhnPzguGysb1BML0oIb0AguGC3rHCNrPBMCGAw52zw50B3j5igfNywLUC3qGD2HPy2GGDgHLignOyw5NzsbPCYbTzwfZDxjLzc4", "yMvMB3jL", "t3b0Aw9UywWSig9UBhKGD2L0AcbGlMfYA2v0Dw0VChjVAMvJDc55yw1SydOGD2HHDcb0BYbKBYb3AxrOigeGD29YAYb1BML0lIbGC3rHDhvZycaOD2L0AcbGDw5PDgaSihrOyxqGDw5PDdSGD2L0Ag91DcbPDcWGDgHLihbYB2PLy3qSihrOzsb1BML0igLUzgv4igfUzcb0AguGCMvXDwLYzw1LBNqGAw5KzxGPlcbGB3bLBMaSigbYzxn1BwvGlcbGC3vIBwL0ycWGygrLzMvYycWGyhbHDxnLycWGygnSB3nLycWGygrLy2LKzwaSigbYzxnJB3bLycWGyhjLBMv3ycaOChjVCg9ZzsbYzw5LD2LUzYb0AguGDhjLzsbZBMfWC2HVDcKSigbWB2XPy3LGicHWCM9WB3nLihbPBM5PBMCGDgHLihbYB2PLy3tIGjLZign1CNjLBNqGCg9SAwn5ihDOzw4GAxqGzgLMzMvYCYbMCM9TihrOzsbVBMuGCgLUBMvKigLUihrOzsb1BML0oIbHigDHDguPlcbGAw5ZDhj1y3rPB25ZycaODgHLihrLEhqGB2yGDgHLigLUC3rYDwn0Aw9UigzPBgvZihrOzsbJyxrHBg9NCYbKzwnSyxjLlcbNzw5LCMf0zwqGzNjVBsb0AguGCg9SAwn5ksWGyhjLCxvPCMvTzw50ycaODgHLigrLDgfPBcbVzIb0AguGCMvXDwLYzw1LBNrZigLUigbPzhnGksbVCIbGyxnRycaOyxnRihrOzsbWzxjZB24GDg8GzgvJAwrLigfIB3v0ig9UzsbVzIb0AguGDg91y2HLzcbYzxf1AxjLBwvUDhm6igeGz2f0zsKSigbLBgLJAxrGicHHihbHCNqGB2yGCgHHC2uGmsWGDgHLigvSAwnPDgf0Aw9Ulcb3AxrOigL0CYbGCM9SzwaPlcbGC2HHCgvZycaODgHLihn5C3rLBsbZAgfWzxm6ihrOzwLYigbHCgXPy2fGlcb0AgvPCIbKzxnPz24Gyw5KihrOzwLYigDHChmSihDOAwnOigfWCgX5igDPDMvUihnVBwuGyhnPz25HBhnGigfUzcb3AhKGDgHLig90AgvYCYbKBYbUB3q7ihDPDgGGyhn0ywnRCZOGDhj1zwaSigfSC28GDgHLihn0ywnRCYKSigbKCMLMDgaGkhrOzsbMDw5JDgLVBMfSigrYAwz0oIb3Agf0ihrVihjLCNvUig9Ylcb3AxrOigbYzxbVCNrGlcbPDhmGzMLUzgLUz3mPlcbGy2HVB3nLycaOCMvSyxKGD2HPy2GGDMvYC2LVBIb0AguGCgvYC29UignOB3nLigLUigeGC2vTyw50AwmGy29UzMXPy3qPlcbGDxbKyxrLx3n0B3jLycaOD2L0Ag91DcbGDw5PDga6ihvWzgf0zsb0AguGzM9YBwf0ig9MihrOzsbZDg9YzsWGyc5HCMTLDhvTl2a6ihrOzsbKzwnPC2LVBNmGzNjVBsbHihnPBMDSzsbMAwXLihrVig9UzsbMAwXLihbLCIbKzwnPC2LVBJSGysbZDg9YzsbVzIbHBIbLyxjSAwvYigzVCM1HDcbPCYbHBhnVihvWzgf0zwqGyNKGAxrZzwXMig9UihrOzsbMAxjZDcbJywXSlcb3Agf0zxzLCIb0AguGywn0Aw9Ulcb3AxrOig9UzsbSAw5Ligf0ihrOzsbLBMqGB2yGDgHLigfUC3DLCJSGyg1Pz3jHDgvGlcbPDhmGzM9YBwvYig5HBwuSigLZihjLAMvJDgvKihbVAw50Aw5NigHLCMuGB3iGDg8GDgHLigfYy2HLDhLWzsbTAwDYyxrPB247igL0igLZig5VDcb0ywTPBMCGDgHLihjLCg8GDg8Gyw5VDgHLCIbHCMnOzxr5CguPlcbGB3zLCNzPzxDGicH3AxrOB3v0igb1BML0ydOGDgHLignVBxb1DgvKihn0yxr1CYbVzIb0AguGChjVAMvJDcWGy29TCgfJDdOGD2HHDcbHD2fPDhmGDgHLihbLCNnVBIWGD2HHDcbPCYbPBIbWCM9NCMvZCYbHBMqGC2LUy2uGD2HLBJSGDgHLigrLDgfPBcWGD2L0AcbGC3rHDhvZycKGB3iGygjHDgnOycaOD2L0Ag91DcbGDw5PDga6ihjLy29YzhmGD2HHDcb0AguGCgvYC29Uig1HCMTLzcbPBIbGlMfYA2v0Dw0VCgvUzgLUzY1KzwnPC2LVBNmUBwrGigfUzcb3CML0zxmGAxqGywDHAw4GD2L0Acb3Agf0igLZihbLBMrPBMC7ihDPDgGGyhDHAxrGlcbPDcbMAxjZDcb3ywL0CYbMB3iGDgHLBsb0BYbZyxzLigL0ksWGygLKzw50Axr5ycaOD2L0Ag91DcbGDw5PDga6ihDOBYbKzwnPzgvZig9UihrOAxmGBwfJAgLUzsWGD2L0AcbGBMfTzwaGB3iGygvTywLSycWGyxmGDgHLihbLCNnVBIbZywLKigL0ksWGygfIyw5KB25GicHSzwf2zsbHihvUAxqGC3rPBgWGD2L0Ag91DcbJBg9ZAw5NigL0lcb3AxrOigfUig9WDgLVBMfSigbYzwfZB25GksWGyhrVCgLJycaOD2L0Ag91DcbGDw5PDga6ihrOzsb0B3bPy3mGDg8GzgLZy3vZCZSGD2L0AcbGDg9WAwnGlcbSzwf2zsbVBMuSignSB3nLigL0ig9YigfUC3DLCIbPDcKSigbTyxbGicH3AxrOB3v0igb1BML0ydOGDgHLihbYB2PLy3tIGjLZigLUDgvNCMf0Aw9Uig1HCcWGy29TChv0zwqGzNjVBsb0AguGyM91BMrHCMLLCZSGD2L0AcbGyxj0AwzHy3rGlcb0Agf0ig9Mig9UzsbHCNrPzMfJDcKSigbHDwrPDgaGkhDPDgHVDxqGyhvUAxrGoIb0AguGB24TzgvTyw5Kigf1zgL0ig9MihrOzsbPBMrLEcWGAw4Gy2H1BMTZig9MihDOyxqGAxmGywXPA2uSigzYB20GBMv3zxn0ihrVig9SzgvZDcbHBMqGC2TPChbPBMCGD2HHDcbKAwqGBM90ignOyw5NztSGD2L0AcbGzNvSBdOGDhj1zwaSigv2zxj5DgHPBMC7ihDPDgGGyhjLCg9YDgaGyw5KigbJAhvUA2aSigL0CYbMAw5KAw5NCYbHBMqGAxrZignVBNnVBgLKyxrPB25Zigj5igLUDgvUDcWGD2HPy2GGCMvTywLUigfZihrVCgLJCZSGzwfJAcbJAhvUAYbHBhnVigfZA3mGywjVDxqGD2HHDcbPCYbPBNnLy3vYzsWGywDHAw5ZDcbGCg9SAwn5ycbPzIb0AguGCgvYC29Uig5HBwvKihrOzwLYihnLy3vYAxr5ihbVBgLJAwvZksWGyhbYzgaGkhDPDgHVDxqGyhvUAxrGoIb0AguGBgL2Aw5NifbsrcWGy29TChv0zwq6ihbLCIbHCNrPzMfJDcWGDgHLihjLCxvPCMvTzw50CYbPBIbMB3jJzsbNCM91CgvKigj5ignSB3nLBMvZCYbVzIb3B3jKCYaODgHLigf1zgL04OczCYbJAhvUA3m7igL0igLZig5VDcbHigP1zgDTzw50ig9MigLUDgvUDcKGD2L0Acb0AgvPCIbZDgf0DxmSihrOzwLYihzLCNnPB24Gyw5KihrOzsb1BML0ihrOyxqGBgvMDcbPDcWGyw5KihrOzsbHBwvUzg1LBNrZigjLDhDLzw4GufjeCZSGD2L0AcbGyxj0AwzHy3rGlcb0Agf0ig9Mig9UztSGyNKGCgfNzxmSihDPDgGGyhbHz2vGksWGyhbHBMvSycaOD2L0Ag91DcbGDw5PDgaSihDOzw4GEw91ihn0yxj0ihDVCMTPBMC6ihjLz2LZDgvYCYb0AguGChjVAMvJDcbPBIb0AguGBwfJAgLUzEkaMxmGCgfUzwWSigXLyxzLCYb0AguGC2nYAxb0ihrVigjYAw5NigL0ihvWigfUzcbZyxLZigL0CYbHzgrYzxnZig9YihDOyxqGDg8GCNvUihrVigjYAw5NigL0ihvWksWGyg1VzgvGicH3AxrOB3v0igb1BML0ydOGAg93ihrOAxmGC2vZC2LVBIb3B3jRCYWGyxmGDgHLihbLCNnVBIbJAg9ZztOGyhbHCMfSBgvSycWGy2fWDhvYzsbNB2vZig9UihDOAwXLihDOyxqGAxmGCMvHzhKGz2v0CYbPBxbSzw1LBNrLzcWGB3iGyhnLCxvLBMnLycWGAxqGAxmGAw1WBgvTzw50zwqGyMvMB3jLigrLzMLUAw5Nigz1CNrOzxi7ihDPDgGGyhn1yMfNzw50C2aSihDOzxrOzxiGEw91CIbJBgLLBNqGy2fUigrLBgvNyxrLihrVihn1yMfNzw50CZSGD2L0Ag91DcbGBw9KzwaSihrOzsbVBMuGAw4GzM9Yy2uPlcbGyMXVy2TGicHTyxjRihrOzsb1BML0ihLVDsbHCMuGAw1WBgvTzw50Aw5NigfZigjSB2nRzwqSihDPDgGGyhjLyxnVBMa6ihDOyxqGEw91ignHBM5VDcbYzxnVBhzLihDPDgHVDxqGDgHLihbLCNnVBJSGAxqGzg9LCYbUB3qGAw50zxjYDxb0ihrOzsbJyxb0DxjLksWGyhvUyMXVy2TGicH3Agf0igjSB2nRzwqGAxqGD2fZihjLC29SDMvKlcb3AxrOigfUig9WDgLVBMfSigbUB3rLycKGB3iGyhrLBgvTzxrYEwaGkhDPDgHVDxqGyhvUAxrGoIb3Agf0ihrOzsbWzxjZB24GC2fPzcb3AgvUiefYA2v0Dw0GyxnRzwqGEw91ihrVigfZAYb0AgvTihDOzxrOzxiGDgHLEsbHy2nLChqGC2vUzgLUzYbHBIbHBM9UEw1VDxmGDxnHz2uGC3vTBwfYEsWGB3iGD2HLBIb0Agv5ihDHBNqGDg8Gy2HHBMDLigL0lcb3AxrOigbHy2nLChrZycbHBMqGyhf1B3rLydSGD2L0Ag91DcbGywnJzxb0C2aGB3iGyhf1B3rLycWGD2HHDcb3B3vSzcbIzsbZzw50lcb0BYbZAg93igL0ihrVihrOzw07igL0igjLBg9Uz3mGDg8GDgHLigLUC3rHBgXHDgLVBIWGBM90ihrVihrOzsbWCM9Qzwn0ksbVCIbGBgfUz3vHz2vGicH3AxrOB3v0igb1BML0ydOGDgHLihbYB2PLy3qGBgfUz3vHz2uGDgHLihbLCNnVBIbJAg9ZzsWGD2L0AcbGBgfUz3vHz2vGigfUzcbGCxvVDgvGoYbMCM9TihrOzw4GB24GzxzLCNL0AgLUzYbJB21LCYbVDxqGAw4GDgHHDcbSyw5NDwfNzsKUifDPDgHVDxqGygfJDgLVBMaSihrOzsbKB29YigrLBgL2zxjZihbLCIbHCNrPzMfJDcWGB3v0C2LKzsbHihvUAxqU", "BwfUAwzPzxn0BW", "C2vSzLjLDMLLDW", "ycWGCMvXDwvZDgvKigfYy2HLDhLWztOG", "A2v5CW", "tgeGCMhdRxOGWQS", "CMvKywn0ywrVCW", "ihKG", "lsbfDMvYEsbYzxnWB25ZzsbVzIbHihvUAxqGzw5KCYb3AxrOigeGz3vPzgu6ihrOzsaQkM5LEhqGywn0Aw9UkIOGy29TzxmGzMLYC3qUiezVBgXVDYbPDc4", "BM8GAhvIBYbYzxnWDwvZDgeGkhzLBMnPW7mGBgeGzxnWzxjHkq", "FcbbCNrPzMfJDcb8ifjVB3qGFcbbCMnOzxr5CguGFcbezxbLBMrZig9UihWGvg91y2HLzcb3AxrOihW", "u2KGC2uGCxvPDge6ihf1W6KGyxj0zwzHy3rVCYbZywXLBIWGC2vWyxjHzg9ZihbVCIbJB21HCYaODMfJW61Vid0GDg9KB3mP", "yg9Wzw5GoIb0AguGywrQDxn0BwvUDcb0Agf0ihDHCYbLEgnLzwrLzcaOygv4y2vKzv9HANvZDgvGksbHBMqGDgHHDcb0AgLZihvUAxqGy29UDgLUDwvZoIbPDcbPCYbKAxnJyxjKzwqGD2HLBIb0AgLZig9UzsbVCgvUCYWGyw5KihrOAxmGB25LigLUAgvYAxrZigL0CYbZBMfWC2HVDcbHBMqGAxrZihbVBgLJEs4", "Agv4", "C3rYAw5N", "ywnLChrH", "oIbjigrVig5VDcbRBM93ihDOBYbKzwnPzgvZig9UihrOAxmGBwfJAgLUzs4GqxnRihrOzsbWzxjZB24GzM9YihrOzwLYig5HBwuGB3iGDgHLAxiGzw1HAwWGkg5VigXVz2LU", "zw50CNK", "WRSSihf1zsbLBgXHignVBMzPCM1Hig8Gy2fTyMLH", "BM8GC2uGDxnHBG", "v2H5icHYzxf1AxjLzcb3AgvUihjLDM9RAw5Nlcb3AgvUigrLy2LKAw5NigfUzcb3AxrOimkR", "C3bSAxq", "C2LUx2rLy2LKAxi", "Dg9ju09tDhjPBMC", "lIbuAgLZigLZihrOzsb0zxH0icG", "BMv3", "zgf0yq", "v2HVihLVDsbHCMuGkgzVCIbLEgfTCgXLlcbGpgnSAwvUDd4GlYa8Bw9KzwW+ycKSig1HCMTLzcbHCYbKzwnSyxjLzc4Gv2L0AcbGB3bLBMaGkg9YihDPDgGGyhjLC3vTzwaSigLMihrOzsb1BML0igHHCYbUBYbHz2vUDcb5zxqGB24GDgHPCYbJB25Uzwn0Aw9UksWGAxqGC2LNBNmGD2HHDcbMB2XSB3DZigLUihrOyxqGDw5PDdSGAw4Gyw55ig90AgvYignHBgWGDgHHDcbYzwnVCMrZihnVBwv0AgLUzYWGAxqGC2LNBNmGB25SEsb0Agf0ignHBgWUieeGC3vIywDLBNqGCgfZC2vZigL0ig9Uigv2zxj5ignHBgW6igL0ihnOyxjLCYb0AguGBwfPBIbHz2vUDokaMxmGy29UBMvJDgLVBI4", "iYmJia", "lsbmysb1BMLKywqGC2uGy2LLCNjHignVBIbGywn0Aw9UoIbJBg9ZzwaSihf1zsb2DwvSDMuGysbLBNrYzwDHCIbSB3mGzgvZy2vUC29ZihKGy29TChj1zwjHigXHCYbJB25KAwnPB25LCYbKzsbJAwvYCMuU", "BgfUzq", "zxHPDenVzgu", "AwrLBNrPzgfK", "pceTlsbhzw5LCMfKBYbWB3iGqxjRzxr1BsbHihbHCNrPCIbKzsa", "CMvJB3jK", "zM9YBxvSyxjPBW", "rK9stufutYbwsuvktZOGzxn0zsbWCM95zwn0BYb0AwvUzsbGlMfYA2v0Dw0VyxjJAgv0ExbLlNLHBwXGihKGBM8Gya", "BwfUDgvUzxi", "y29szxf1AxjLBwvUDhm", "vgHLia", "t3b0Aw9UywWUifrOzsbHBNn3zxiGDg8GDgHLihnLBgyTCMv2Awv3ihrOzsbHCMnOzxr5CguGzgvJBgfYzxmSigLUihrOzsbLEgfJDcbMB3jTyxqGDgHHDcb3yxmGCMvXDwvZDgvKlIbjDcbPCYbJB2XSzwn0zwqSihnHDMvKigLUigaUyxjRzxr1Bs9GigfUzcbZAg93BI4GsxqGAxmGtK9uigv2ywX1yxrLzcbHBMqGzg9LCYbot1qGyMXVy2S6ig5VigfUC3DLCIbZDg9WCYb0AguGzgvZy2vUDc4", "CMvNAxn0zxjuB29S", "y29Kzq", "zgvJBgLUzq", "iYmGu2nHzMzVBgrPBMC", "yhn1yM1PDgaGAw4Gyw4GzxzPzgvUy2uGB3iGBwLSzxn0B25Lihn0zxa6igvHy2GGCgLLy2uGB2yGzxzPzgvUy2uGD2L0Acb0AguGCMvXDwLYzw1LBNqGAxqGyw5ZD2vYCYaOyhjLCxvPCMvTzw50ycKGyw5KigL0CYbJBgfZCY4Gqw4GzxHLy3v0Aw9UihLVDsbYDw4GEw91CNnLBgyGyw5KigjYAw5NihrOzsbJB21Tyw5KlcbVDxrWDxqSigv4AxqGy29KzsbHBMqGyg9UycaOygjLzM9YzwaSigbJAgfUz2vGlcbVCIbGzw52AxjVBM1LBNrGigzVCIb3Agf0ihj1BNmGywDHAw5ZDcbHihjLywWGzw52AxjVBM1LBNq6igfJy2vZCYbHBMqGzgvWBg95BwvUDcK7igeGCMvWB3j0lcbPDhmGC291CMnLlcbYzwzLCMvUy2uGyw5KignVBNrLBNq7igeGC3rHDgvTzw50lcb3Ag8Gyw5KihDOyxqGkefYA2v0Dw0GC2v0CYb0AguGy2HHBM5LBcKUiefUigv4zwn1DgLVBIbJyw4GzgvJBgfYzsbGC2f0AxnMAwvZydOGDgHLihjLCxvPCMvTzw50CYaOydXHCNrPzMfJDd46pgLKpMaPigL0ihnHDgLZzMLLCY4GvgHLihn0yxrLBwvUDcbVzIb0AguGztjLihn1AxrLicHGC2fSAwrHCY88yxj0AwzHy3q+l2uYzwaPig5HBwvZigLUigbKzwzLy3rZycb0AguGCMvXDwLYzw1LBNrZigLUihjLCg9YDgvKigrLzMvJDcbPDcbMywLSCYbVBI4GvgHLignVBMzPCM1HDgLVBIbVzIb0AguGBwLSzxn0B25LicHGzgvZCgXPzwD1zs88zw52AxjVBM1LBNq+l2nVBMzPCM1Hy2LVBMaPigLZigeGC3rHDgvTzw50ihDPDgGGBM8GzNvYDgHLCIbMAwvSzhm6iefYA2v0Dw0GyxnRCYb0AguGCgvYC29UihrOCM91z2GGDgHLigLUDgvYywn0AxzLignOyw5UzwWGD2HLDgHLCIbPDcb3yxmGzgvWBg95zwqGyw5KihjHBJSGyw4GzxHLy3v0Aw9Uig9YigeGCMvWB3j0igzVCIb0Agf0ihjLCxvPCMvTzw50igfYzsbVChrPB25HBcbIywnRAw5NlG", "zM9YBq", "zw51Bq", "mta3otC5D1jjvMjw", "Aw52zw50B3j5", "C2vJCMv0BW", "rxn0zsbWCM95zwn0BYb5ysbKzwnSyxjHihn1ihbVBmoTDgLJysbLBIa", "v29YAYb1BML0CZO", "C2LUuMvXDwLZAxrV", "yxjLig5VDcb1C2vK", "lsbdywrHihvUAwrHzcbZAwD1zsbSB3mGCgfZB3mGzguGC3uGkIPJyxjYAwWQkJSGy2fKysbHCNrLzMfJDg8GzgvZy2LLBMrLihn1igvZy2fSzxjHig5PDMvSigeGBML2zwWGy29UigbHy3rPB246ihn1yM1PDgaU", "igv4Axn0CYbIDxqGy2fUBM90igjLihjLywq6ia", "BwvUC2fQzq", "WRSG4OAsimkR", "ydOGC2KGBM8SigvZy3jPyMLYBg8GzxmGDw4Gy2fTyMLVigrLig5PBMFdUM4Gyxj0zwzHy3rVks4", "Bgv2zwXZ", "Aw5JB21WyxrPyMLSAwrHzgvZ", "Dw5PB24", "lsaQkKnSyxnZAwz5lIOQienSyxnZAwz5ihrOzsbYzxf1zxn0igfNywLUC3qGDgHLigLUzgv4oIbHigrLzMvJDcaODgHLihjLCxvPCMvTzw50igv4Axn0CYbHBMqGAxmGBM90ig1LDcKSigeGy2HHBMDLicHHig5LDYb2zxjZAw9UoIb0AguGC2fTzsbPzcbPBIb0AguGufjeksWGC29TzxrOAw5Nig5LDYaOysbUzxCGCMvXDwLYzw1LBNqPlcbVBMuGDgHHDcbLEhrLBMrZigfUigv4Axn0Aw5Nig9UzsaOygv4DgvUzhnGoIbVBMuGBw9YzsbMzwf0DxjLig9MigL0lcbHCYbHig5LDYb2zxjZAw9UksbVCIbHignSyxnOihDPDgGGysbGDgvJAg5Py2fSycbVCIbHigbKzwnPC2LVBMaGkgbJBgfZAgvZv2L0AgaPlG", "ywn0Aw9U", "igrLia", "Bwf4", "vgHLig9UBhKGzg9VCI4Gq2fSBcb3AxrOB3v0igbPBNzLBNrVCNLGihrVigXLyxjUihDOyxqGy29TzxmGBMv4DdSGy2fSBcb3AxrOigbPBNzLBNrVCNLGihrVigrLBgL2zxiGAxqUieLMihrOzsbSzxzLBcbKB2vZig5VDcbYzwnVBMnPBguGD2L0Acb0AguGChjLDMLVDxmGB25LlcbPDcbPCYbYzwPLy3rLzcbHBMqGzg9LCYbot1qGywr2yw5Jzs4Gsw4GysbWCM9Qzwn0ihDPDgGGyc5HCMTLDhvTl3bYB2PLy3qUEwfTBgaSihrOzsb3B3jRigDVzxmGAw4GD29YAYb1BML0CZOGygfJDgLVBMaGB3bLBNmSihjLC3vTzxmSihn1yM1PDhmSigrLzMvYCYWGCgf1C2vZigfUzcbJBg9ZzxmGDgHLBs4Gv2HLBIb5B3uGC3rHCNqGD29YA2LUzYbVBIbHihbYB2PLy3qSigjYAw5NihvWihrOzsbWzxjZB27IGjLZihbHBMvSihDPDgGGygfJDgLVBJOGCgfUzwXGigfUzcbNAxzLihrOzw0GAxrZigfKzhjLC3mU", "phDOBYb5B3uGyxjLpG", "DgvZDa", "yxjYyxK", "DgL0DwXV", "Dw5RBM93BG", "WRSGAxmGBM90igrLy2XHCMvKigLUia", "z2fUyq", "WRSGAxmGBM90ihvZzwq6ihrOzsbPBNzLBNrVCNKNCYbVBMuGD2LUCYWGWQS", "zgvZy29UB2nPzg9Z", "yxj0AwzHy3rZ", "AwrPB21Hrgu", "vw5PzgfKzxmGzguGDhjHyMfQBZOGBMLUz3vUys4", "tMfKysbXDwuGBw92zxiGEsbUywrHihf1zsbKzwnPzgLYoIbSysbLC3rYDwn0DxjHihLHihrPzw5LigXHigzVCM1HigrLBcbKzxn0Aw5VlG", "oYbYzxbHCNrVoIa", "tMLUz8o6BIbHCNf1zxrPCg8Gz29IAwvYBMeGzxn0BYWGEsbbCMTLDhvTig5VigvUDhjHoG", "DgL0Bgu", "CgfYyq", "ywX0yq", "Dg9JywrVCW", "ygrLBgvNyxrLydOGD2HHDcb0AguGCgvYC29UigfUC3DLCMvKlcb0AhjVDwDOihrOzsbJAgf0lcb0BYb0AguGzgvSzwDHDgLVBIbZDw1Tyxj5ihrOyxqGAxmGzhvLoIbGy29UDgLUDwvGig9YigbYzxzVA2vGicH3AxrOigbUB3rLycWGDgHLAxiGy29TBwvUDcWGAwyGyw55ks4GsxqGBgvHDMvZihrOzsbZyw1LigzHy3qGyxmGDgHLigjHDgnOigfUzcb0AguGCgfUzwWUierVig5VDcbKzwnPzguGEw91CNnLBgyU", "vgHPCYbWCM9Qzwn0igfSCMvHzhKGzgvJBgfYzxmGAxrZihbVBgLJEsbPBIa", "ywnJAw9U", "B3b0Aw9UywW", "yM9VBgvHBG", "lsaQkLvWzgf0zs4QkIbuAguGAw5KzxGGAxmGBM90igvKAxrLzdOGAxqGAxmGy29TChv0zwqUieeGDw5PDcb0Agf0ignOyw5NzxmGzMLSzxmGB2yGyw4Gyxj0AwzHy3qGD2L0AcbYzxf1AxjLBwvUDhmGzgvJBgfYzxmGD2HPy2GGCMvXDwLYzw1LBNrZigL0ihrVDwnOzwq6ihjLCxvPCMvTzw50igL0zw1ZigLUigL0CYbquKqGkgb0ExbLycbHBMqGyhjLCxvPC2L0B2aPlcbLDMLKzw5Jzsb3AxrOigbZyxrPC2zPzxnGlcbVCIdcQ25VihjLCxvPCMvTzw50WRSGD2L0AcbPDhmGCMvHC29Uig9UignSB3nPBMCGkgbUB1jLCxvPCMvTzw50ycKUie90AgvYD2LZzsWGAxqGzg9LCYbUB3qGy2XVC2uU", "yg9Wzw5GoIb0AguGy2XHC3mGB2yGDgHLihjLCxvLC3qGywDHAw5ZDcb0AguGCMvXDwLYzw1LBNqGAw5KzxGGyw5KihrOzsbPBMrLEcbPzhmGAxqGBMfTzxmGkga8yxj0AwzHy3q+oJXPzd5Gks4GuMvXDwLYzwqGAw4GysbSyw5LihDPDgGGzwXPy2L0yxrPB247igL0igrLy2LKzxmGD2HLDgHLCIb0AguGBgfUzsbMAxrZlIbdBgfZC2LMEsbHzNrLCIbSB2fKAw5NihrOzsbJyw5KAwrHDgvZ4OczigrLDgfPBcb3AxrOigbYzxf1AxjLBwvUDgaU", "yg9Wzw5GihDPDgGGyhrVCgLJydOGDgHLihbHDgGGB2yGDgHLihbYB3bVC2fSihrOzsbWzxjZB24Gy2HVC2uGkgzYB20GmsKU", "y2f1C2e", "ygrLzMvYycbHBMqGyhjLC2nVCgvGoIb3AhKUigbKzwnPzgvGihDPDgGGyhjLAMvJDgvKydOGDgHLihjLyxnVBIbMB3iGDgHLihjLAMvJDgLVBIWGywXZBYbYzxf1AxjLzcb3AxrOigbYzw1VDMvGlIbGyMXVy2TGoIb3Agf0ihLVDsbJyw5UB3qGCMvZB2X2zsb3AxrOB3v0ihrOzsbWzxjZB24GkhjLCxvPCMvKlcbLEgnLChqGD2L0AcbGyw1LBMrTzw50ycKU", "ignVBNrYywrPy2nPW7nUkgvZksbZAw4GzgvJAwrPCG", "tgfKzgvYoG", "oYbSysbTW6fXDwLUysbZDwDPzxjLimkR", "Cgf0Aa", "y2L0yq", "zMLLBgq", "Fc0TlxWTls18ls0TFc0TlxWTls18", "iYmGuMvXDwLZAxrVCZOGC2LLBxbYzsbSzwvYihKGC2LLBxbYzsbHy3r1ywXPEMfY", "DgLWB3m", "WRSGzgvJBgfYzxmGygv4DgvUzhm6ia", "y292zxjHz2u", "phf1ACoPBIbLCMvZpG", "y3jLywnPB25LCW", "ndqWq1PMDMD0", "Dgv4Dg8", "ygf1zgL0ydOGD2L0AcbGDhj1zwaSigL0igf1zgL0CYbLDMvYExrOAw5NoYb3AxrOB3v0igL0lcbMCM9Tig5LD2vZDcb0BYbVBgrLC3qSihnRAxbWAw5NihDOyxqGzgLKig5VDcbJAgfUz2uGC2LUy2uGDgHLigXHC3qGy2XVC2vKihbHC3mGkgv4y2vWDcbPDhmGBMvPz2HIB3jZigj5ignSB3nLBMvZCYKU", "ygLKzw50Axr5ydOGDgHLigvTywLSihrOzsbWzxjZB24GC2fPzcb0BYbPzgvUDgLMEsb0AgvTC2vSDMvZihDPDgGU", "ywP1C3rHCG", "lNLHBwW", "CMvWBgfJzq", "y2f0ywXVz28", "yefss0vuvu1Fr0furvnGihzHBguGWQS", "BNvLDM8", "C3rHDgvTzw50", "Aw50", "zwWGy2XPzw50zsbKzxzVBhzPW7mGzwWGzM9YBxvSyxjPBYbZAw4GCMvZChvLC3rHoIbWDwvKzsbXDwuGBM8GBg8GBw9ZDhjHCMe", "yMfQyq", "zxrPCxvLDgfZ", "igzYB20G", "yc4kcK5pveHjtKCGAgfZigjLzw4GC3rHCNrLzcWGyw5Kig9Uihb1CNbVC2uUieDVDMvYBMLUzYb3AxrOihrOzsbJAgLSzcbHBg9Uzsb3B3vSzcbHChbSEsbOywXMigeGCg9SAwn5iokaLhDPDgHVDxqGDgHLigjHC2uGDhLWzxmSigv4DhjHy3rVCNmSignVlxjLCxvPC2L0zxmGB3iGBgv2zwXZ4OcuigfUzcbptIbut1aGt0yGveHbvcb3AxrOihr3BYbJAgvJA3mGC3DPDgnOzwqGB2zMlcbIzwnHDxnLihrOzsbJB25MB3jTyw5JzsbVzIbHBIbHCMnOzxr5CguGDgHHDcbPBMHLCML0CYbPCYbKzwzLCNjLzcb1BNrPBcbPDcbPCYbYzxnVBhzLzc4GqsbKzwzLCNjHBcb0Agf0igLZig5LDMvYignHCNjPzwqGB3v0igLZigeGy2HLy2SGDgHHDcbKB2vZig5VDcbLEgLZDcWGyw5Kig9Uzsb0Agf0igrVzxmGBM90igv4Axn0igLZihDVCNnLihrOyw4GB25LihrOyxqGzMfPBhmUcGPxyxLZig91DcWGyM90Acb2ywXPzdOGChv0ihrOzsbIyxnLigLUiga", "zw5mDwDHCKrL", "swyGEw91igrLy2LKztOGD2HHDcb3yxmGzgvJAwrLza", "CNv0yq", "lMfYA2v0Dw0VAw50zw5JAw9UzxmV", "ks4Gu2uGy29TChj1zwjHBIbQDw50B3mGy29UigvSignHCNjPBcbGy2HLy2TGlcbHBNrLCYbKzsbKzxnWBgvNyxiU", "Dw5PzgfKuMv0B21Hzge", "CgfWzwW", "Bgv2zwW", "ug9Yihf1W6KGkg9IBgLNyxrVCMLVigfSihjLDgLYyxiSigfSigrLy2LKAxiGEsbJB24GWQS", "ig9MihrOzsbHCMnOzxr5Cgu6cG", "BwvZC2fNzq", "zMfUB3v0", "ywzLy3rH", "BM9Fzw50AwvUzgu", "B2jQzwn0", "lY5HCMTLDhvTlYWGyxpdRsbXDwuGBgfZia", "ygf1zgL0ydOGDgHLig51BwjLCIbVzIb0AguGy2H1BMSGEw91ihjLCxvLC3qGB3iGCMvWB3j0lG", "oYb0AguGBwfJAgLUzsbZDwDNzxn0CYdcQW", "zxHJBhvKAw5N", "Aw50zw50Aw9UCW", "cGPuAguGygfYDgLMywn0ycdcQW", "tgfZDcbJBg9ZzwqGCgfZCYbVzIb0AguGChjVAMvJDcbHDwrPDdOGDgHLihjLy29YzcbJB3vSzcbUB3qGyMuGCMvHzc4", "C2fMzvbHCNnL", "BwfYA2rVD24k", "lsaQkKfZAYbVBMX5igzVCIb0AguGzgv0ywLSihLVDsb0B3vJAcOQlcb3AxrOigbHy3rPB246ihjLCxvPCMvTzw50ycbHBMqGAxrZigbPzhnGoYbKBYbUB3qGBg9Hzcb0AguGB3rOzxjZ4OczlG", "Cg9YCxvL", "A2LUza", "vg8GD29YAYbPBNnPzguGysb1BML0oIbGywn0Aw9UoIbVCgvUycaOB3iGyhjLC3vTzwaGD2L0AcbPDhmGyhvUAxrGks4Gt3v0C2LKzsbHihvUAxqSignHBgWGD2L0AcbGyxj0AwzHy3rGicHVCIbZDwjTAxqGyw4GAw52zw50B3j5ihDPDgGGAxrZigbHCNrPzMfJDgaPlG", "C2vYDMvY", "DgLWBW", "ywXJyw5Jzxm", "sw52ywXPzcbVChrPB246igv4CgvJDgvKig9UzsbVzIa", "cGPG", "ks4Gww91ignHCNj5ihrOzw0GB3v0oYb0AguGDg9VBcbKB2vZig5VDcb0B3vJAcbHihnPBMDSzsbMAwXLlGO", "vw5JAgvJA2vKigfKANvZDg1LBNrZoIa", "zw50B3jUBW", "y29UDMvUDgLVBNm", "CMv2B2nHCG", "ydOGB3rOzxj3AxnLlcb3CML0Aw5NigL0igLZigeGy2HHBMDLihrVig5VigfYDgLMywn0ks4", "y29UzM9YBwu", "ChjVEwvJDg8", "v29YAYb1BML0CYbUzwvKiga", "ycWGzxzLCNKGy2fSBcbYzwnLAxzLCYb0AguGyM9VDhn0CMfWihrOyxqGBwf0y2HLCYb0AguGzM9SzgvYlIK", "yhn1yM1PDgaGAw5ZAwrLigeGDw5PDdOGC2v2zxjHBcbSzxzLBhmGAw4GB3jKzxiSigvHy2GGB25LigfZigeGC3rHBMrHBg9UzsbKzwXPDMvYEsaOD2L0AcbPDhmGB3DUigbPBMHLCML0ycWGyhjLBw92zwaSigbWCM9WB3nHBgaGyw5KigbZzwXMuMv2Awv3ycKUieL0ihn0B3bZigf0ihrOzsbMAxjZDcbVBMuGDgHHDcbKB2vZig5VDcbHzhzHBMnLlG", "pg5VBwjYzs1JB3j0BZ4", "AhvLCMzHBMfZ", "v29YAYb1BML0CZOGBM9Uzs4", "A2LUzhm", "icdIHPiGia", "ksWGyw5KiefYA2v0Dw0GBMv2zxiGC3rVCMvZigeGC2vJCMv0lIboB3rOAw5NihDHCYbYzwnVCMrLzdOGyw5ZD2vYigfNywLUihDPDgHVDxqGDgHLihzHBhvLicH3AxrOigL0CYbYzwzLCMvUy2uSiga8C2nOzw1LpJO8Cgf0Ad5GlcbPzIbUzwvKzwqPlGOk", "zgvZy3jPyMu", "C2vUywXLCW", "qxj0AwzHy3qGWQS", "su5uru5dsu9orvmGu0Loifbst1Lfq0njW5noievwquXvqujmrsbLBIbLBcbKzxn0Aw5VicG", "CMv0AxjH", "zM9YBwe", "y2XHC3m", "y29TCgXLDgvK", "yMfZzwXPBMu", "uxxdQsbKzwnPzgvZ", "oMaGteLtvcbxsvriifrirsbqrvjtt04Gyw5KihjLBw92zsb3Agf0zxzLCIbPCYbUB3qGyMfZzsaOD2HHDgv2zxiGEw91ihjLBw92zsWGzgvJBgfYzsbPDcbPBIb0AguGC2nHzMzVBgrPBMCGB3iGzgvSzxrLigL0ks4GvgHLBIbVCgvUigeGDw5PDcbPBIb0AguGyg5LD2aGBgfUztOGB25JzsbPDhmGBgfUzsbPCYbHChbYB3zLzcWGqxjRzxr1BsbZzxrZihrOzsbPBNb1DcbKB2n1BwvUDhmGyxmGDgHLigjHC2uGB2yGDgHLihvUAxqSigfUzcbPDhmGyw5HBhLZDcbYzwfKCYbHBgWGB2yGAxqSihbYzxnLBNrZigL0CYbYzwfKAw5NihrVihLVDsbHBMqGyxnRCYbVBMX5igfIB3v0ignVBNrYywrPy3rPB25ZlcbNyxbZigfUzcbYzwzPBMvTzw50CZSGB25JzsbPDhmGyxjJAgL0zwn0DxjLigLZigfWChjVDMvKlcbbCMTLDhvTigfKzhmGDgHLigfYDgLMywn0CY4kcMbGyhLHBwWk", "u2KGzxmGy29UzgLJAw9UywW6ign1W6fUzg8GDMfSzsbJywrHihvUyq", "DMfSDwvZ", "t3b0Aw9UywWSig9UBhKGAw4GysbWCM9Qzwn0ihDPDgGGyc5HCMTLDhvTl3bYB2PLy3qUEwfTBga6ihrOzsbHCNrPzMfJDcb5B3uGyxnRigfIB3v0ihDOzw4GEw91igrVig5VDcbKzwXPDMvYigfUigLUDMvUDg9YEs4Gv2L0Ag91DcbPDcWGDgHLigfUC3DLCIbPCYb0AguGChjVAMvJDcbZDgf0DxmUifDPDgGGygfJDgLVBJOGzhjPzNrGlcb0AguGyxj0AwzHy3qGAxqGAxmGBgLTAxrLzcb0BY4", "ygnSB3nLydOGDgHLigzPBgvZihrOzsb1BML0igrLBgv0zwqGDgHHDcb3zxjLig91DhnPzguGzxzLCNKGCM9VDcbPBIbPDhmGC25HChnOB3qGkhbHDgHZigzYB20GDgHLihbYB2PLy3qGCM9VDcK6ignVBMrPDgLVBIa1igrVzxmGBM90ignVDw50ihrOzw0U", "ygbGcGPuAgvUig9Wzw4GDgHLihvUAxqGD2L0Acb0AgLZignHBgWGkhDOyxqGz29LCYbIzxr3zwvUiga84OcMpMaGAxmGEw91CNm7ihrOzsbZBhvNigLUigXVD2vYy2fZzsbHBMqGD2L0AcbOExbOzw5ZktOkcMbGygPZB24k", "zgvJAxnPB25LCW", "Dgv4Da", "C2nHzMzVBgrPBMC", "AgfZ", "ygbGcGPezxnWDCoPCYWGywjYzsbSysb1BMLKywqGy29UigvZDgeGBgXHBwfKysaOBg8GCxvLihzHigvUDhjLiga84OcMpMaGzxmGDhv5BZSGzwWGC2X1zYWGzw4GBwLUW7PZy3vSyxmGEsbJB24Gz3vPB25LCYK6cGPGygbQC29UcG", "icaGihnVDxjJztOGia", "ycWGDw5YzwfKywjSztOG", "ywDLBNq", "ycaODw4GzMLJAgvYBYbXDwuGBMLUz8o6BIbHCNf1zxrPCg8GCMvJBgfTysbZzsbPBMzVCM1HigfSignLCNjHCIKU", "BMvNyxrPDMe", "ntmZntq3mgnUteXlrq", "DgfUzge", "y29UDhjHzgLJy2LVBG", "oIbLC3rVCYbMAwnOzxjVCYbKzsaUyxjRzxr1Bs8GBM8Gy2fYz2fUlcb5ig5VihnLihnPz3vLigHHC3rHihf1zsbZzsbYzxn1zwX2yw4GkhvUysbMDxnPW7nUig1HBcbYzxn1zwX0ysbZzsbHCNjLz2XHignVBIbSysbOzxjYyw1Pzw50ysbKzwWGChjVEwvJDg87ihvUigzVCM1HDg8GCM90BYWGysbTyw5VktOk", "icbJB21WB3nLzcbVzIb0AguGC2HHCguGWQS", "BM8Gyw5ZD2vYicH0AguGCMvZCg9UC2uGzgLKig5VDcbJyxjYEsbHihzHBgLKigrLy2LZAw9Ukq", "zgvZzgu", "vgHLihrVDwnOzwqGB25LCZOG", "CgfUzwW", "Bg9Zig5VBwjYzxmGzguGBg9ZignSAwvUDgvZigrLihvUignHDmoHBg9NBYbUBYbZzsbWDwvKzw4GDxnHCJOG", "v2HPBguGyw4GAw5JB21WyxrPyMLSAxr5ihn0yxLZig9Wzw4SigL0CYbICMfUy2GGAxmGAgfSDgvKlIbuAguGCMvZDcbVzIb0AguGCgXHBIbJyw4GyMuGy2fYCMLLzcbVDxqGyw55D2f5oIbHihbLBMrPBMCGzgvJAxnPB24Gzg9LCYbUB3qGzNjLzxPLihrOzsb3Ag9SzsbTAwDYyxrPB24U", "lsbuAguGDw5PDcbPCYbJBg9ZzwqGD2L0AcbGywn0Aw9UoIbJBg9ZzwaSihDOAwnOihjLC3vIBwL0CYb0AguGzgvZy2vUDhmGyw5KignOzwnRCYb0AguGy2XVC2LUzYbJB25KAxrPB25ZlG", "q29UimkR", "ycWGyw5KigL0igTLzxbZihDVCMTPBMCGyxmGywX3yxLZlIbuBYbTB3zLihrVigrPz2vZDgLVBJOGD3jPDguGDgHLig1PBMLTywWGya", "mtm2nZmWmxHkr2jSvq", "ygnSB3nLydOGDgHLihjLDhjVywn0AxzLihzHBgLKyxrPB24SigLMihrOzsb1BML0igjYAw5NCYbYzxf1AxjLBwvUDhmGyw5KihrOzxjLigfYzsbLyxjSAwvYig9UzxmGAw4GD2HHDcbPDcb0B3vJAgvZicHGy2XVC2vGihDPDgHVDxqGAxqGz2L2zxmGDgHLihnJB3bLktOGD2HVigP1zgDLzcaOyhjLDMLLD2vYydSGyMvZDcWGysbZDwjHz2vUDcb3AxrOB3v0ihLVDxiGy29UDgv4DcKSihrOzsbYzxzPzxDLzcbVBMvZihDPDgHVDxqGysbMAw5KAw5NigfUzcb0AguGygzPBMrPBMDZycaOCMvXDwLYzw1LBNqSignSyxnZlcbYzwfZB24Gyw5KigbWCM9WB3nHBga6igbUB25LycbVCIb0AguGDw5PDcWGD2L0AcbGBgfUzwaGyw5KigbVyMPLy3rPDMvGlcbHBMqGD2HLBIbTzxjNAw5NlcbGBwvYz2vZycbHBMqGygTLzxbZycKUiefUzcbGy29UC29SAwrHDgLVBNnGoIbVBMuGAw50zw50ihnJyxr0zxjLzcbHy3jVC3mGC2v2zxjHBcbYzxf1AxjLBwvUDhmGkgbPBNrLBNrGlcbGCMvXDwLYzw1LBNrZycbMCM9TihrOzsbPBMrLEcWGyhjLyxnVBMaGyw5KigbWCM9WB3nHBgaGB2yGDgHLignVBNnVBgLKyxrLzcbquKq6igbSyw5LycWGyg9IAMvJDgL2zwaSigbRzwvWC2aGyw5KigbZCgXPDhnGig9WDgLVBMfSks4", "FcbG", "yxjNCW", "Aw50zw5JAw9Uzxm", "swyGEw91igrVig5VDcb1BMrLCNn0yw5KoIb3Agf0ihLVDsbKBYbUB3qGDw5KzxjZDgfUza", "ks4Gtg9ZigvQzwn1DgfZihtdUJSGBgeGAgvYCMfTAwvUDgeGBM8GDg9Jysb1BIbZB2XVigzPy2HLCM8UcG", "q28TCMvXDwLYzw1LBNrZoG", "yxv0B25VBxK", "vgHLihjVB3qGWQS", "C3vIAMvJDa", "ihWG", "tgfUz3vHz2uGWRCGswrPB21H", "B3bLBG", "C2LUx3rVCgu", "vgHLCMuGAxmGBM8G", "ygrLy2LKzwaGD2L0AcbGCMvQzwn0zwrGoIb3Agv0AgvYihrOzsbMzwf0DxjLigLZigTLChqGB3iGCMvTB3zLzdSGyM90AcWGD2L0AcbGCMvHC29Uyc4", "icaTihSGAw5JBhvPzg86igvQzw1WBg8GFq", "DgvSzw1LDhjPyq", "ihbHDgHZihLVDsbSAxn0zwqGyxjLig5VDcb1C2vKigzVCIbHBNL0AgLUzYbOzxjLlIbdywXSigfNywLUihDPDgHVDxqGyhbHDgHZyc4", "Dw5PzgfK", "ycb5B3vYC2vSzIaOqxjRzxr1BsbKB2vZig5VDcb3CML0zsbPDdOGAxqGC3vNz2vZDhmSigL0igrVzxmGBM90igv4zwn1DguPoIb0AguGzg9JDw1LBNrZigDVigLUiga", "su5tvfjvq1rjt05toIbUBYbJyxrHBg9Nig9MihrOzsbWCM9Qzwn0igrLy2XHCMvZihrOzsbPBNn0CNvJDgLVBIbMAwXLCYaOygLUC3rYDwn0Aw9UCZPGigLUigL0CYbGywDLBNrZlNLHBwXGkq", "DgHLihbLCNnVBIbKAwqGBM90ihvUzgvYC3rHBMqGAxq6ig5VDgHPBMCGAxmGyxbWCM92zwq", "zxzPzgvUy2u", "zM9YBxvSyxjPB19ZAw5FCMvZChvLC3rH", "y29UzMLNDxjHy2LVBG", "ygfZA2a6ihrOzsbYzxf1AxjLBwvUDcaOydXHCNrPzMfJDd46pgLKpMaPihrOzsbWzxjZB24GAxmGyxnRzwqGDg8GzgvJAwrLigfIB3v0lIbGzgvJAwrLydOGDgHLihjLCxvPCMvTzw50ihDOB3nLigDHDguGAxmGzgvJAwrLzc4", "DMfSzq", "cGPfBcbGyxj0AwzHy3rGimkR", "WRSGzgvJBgfYysbGzxH0zw5KCZOG", "AM9PBG", "ygfZA2a6ihDOyxqGDgHLihbLCNnVBIbPCYbHC2TLzcb0BYbKzwnPzguGkgbUB19LmMvGoIb0Agf0igeGzNvUy3rPB25HBcbYzxf1AxjLBwvUDcbKB2vZig5VDcbHzg1PDcbHBIbHDxrVBwf0zwqGzw5KlxrVlwvUzcb0zxn0ks4", "C2XPy2u", "uMvZChvLC3rH", "WRS6ia", "cMbGya", "yg9Wzw5GigfUzcbGCMvZy29Wzwa6ihrOzsbWCM9Qzwn0igfYDgLMywn0CYb0AguGDw5PDcb0B3vJAgvZlIbGzgvJAwrLycb3AxrOigbYzwPLy3rLzgaGyw5KigbYzw1VDMvGigLUigeGC3LZDgvTihn0zxa6ihrOzsbVBMvZihrOyxqGBgvHDMuU", "zgLNzxn0", "C2v0", "y29UDMvYDgLKBW", "ChjVCg9ZywW", "zw50CMLLCW", "ihDPDgGGygfJDgLVBJOG", "ksWG", "tM90zq", "oMaSihKGBg9ZigzPy2HLCM9ZigrLBcbZAxn0zw1Hig9WzxjHDgL2BYb5igXHCYbJyxjWzxrHCYbKzsbJB25MAwD1CMfJACoZBIbKzwWGzwrPDg9YlcbLBIbLBcbHBMrHBwLHAMuUiefovevtlcbsrvzju0eGteeGteLtveeGreuGya", "Bw9KB0rLBefYCxvLDgLWBW", "cGOOyhbHDgHZycbUBYbZzsb1C2e6ihnPBIbG", "y2fTyMLV", "pgXVihf1zsbWAwrLigXHihbLCNnVBMe+", "iYmGq8oZBw8GC2uGDhjHyMfQysbHCxxdRq", "ycaOysbMAwXLihrOyxqGBM8GyxjJAgv0ExbLignSywLTCYbPCYbYzxbVCNrLzcbVBIbJBg9ZAw5Nks4", "ywXJyw5Jzq", "CMvWB3j0", "FcdIGjqGFcdIGjqGFcdIGjqGFcdIGjqGFcdIGjqGFa", "ycb5B3vYC2vSzIaOqxjRzxr1BsbKB2vZig5VDcb3CML0zsbPDdOGAxqGC3vNz2vZDhmSigL0igrVzxmGBM90igv4zwn1DguPigfUzcbVCgvUigeGDw5PDcbPBIb0AguGyg5LD2aGBgfUztSGB25JzsbPDhmGyxjJAgL0zwn0DxjLigLZigfWChjVDMvKlcbbCMTLDhvTigfKzhmGDgHLigfYDgLMywn0CY4kcMbGyhLHBwWk", "BM9fBNrPzw5KBW", "yg9Wzw5GigfUzcbGCMvZy29Wzwa6ihrOzsbVChrPB25HBcbZDgvWCYbVzIb0AguGBgfUzsb0Agf0ihrOzsb1BML0igLUy2X1zgvZlG", "ksWGCxvLigvSigrLC3rPBM8GzxHPz2uGCg9YignVlxjLCxvPC2L0BY4GrxmGDhjHyMfQBYWGBM8GDw5HigrLy2LZACoZBJOGC2uGChvLzguGAgfJzxiUcG", "y2fTCg8", "C2LUx2uYzq", "vgHLCMuGAxmGysaUyxjRzxr1Bs9HCMnOzxr5CguUEwfTBdOGD2L0AcbHihbYB2PLy3qGAxqGAxmGBM90ihvZzwqU", "v2HHDcbOyxmGyMvLBIbKzxjPDMvKigLZihrOzsbtsefqrsbVzIb0AguGy29YChvZlIbxAgf0igHHCYbUB3qGyMvLBIbKzxjPDMvKlcbHBMqGD2LSBcbUB3qGyMuGyxr0zw1WDgvKlcbPCYb3Agf0igvHy2GGCgLLy2uGzxHPC3rZigzVCJOGDgHHDcbPCYbUB3qGAw4GysbMB2XKzxiSigfUzcbKzwr1y2LUzYbPDcbMCM9TihDOyxqGAxmGDgHLCMuGD291BgqGy291BNqGAxqGyxmGzNvSzMLSBgvKigj5ihrOzsbTzxjLigzHy3qGDgHHDcb3Agf0igLZihrOzxjLigv4Axn0CY4", "otjMC2nOwLO", "iYbqCM95zwn0BYdcQW", "Aw5ZDhj1y3rPB24", "DMvYzwrPy3rVCW", "BM9TyNjL", "WRSGBM8GzxHPC3rLoIbYzxn0W6f1CMfSysbVihf1W610ywXHigrLigbLBNrYywrHoMaGzw4Gya", "tM8GC2uGCMvZDwvSDMuGzw4GBg9ZignHDmoHBg9NB3mGzgvSihbYB3LLy3rVoIbLBcbLC3rHzg8GzgLJzsbWB3iGCxxdQs4", "ChjVEwvJDg8UEwfTBa", "yg9Wzw5GoIb3Agv0AgvYigL0igLZihvYz2vUDdSGB25SEsbHBIb1CMDLBNqGDw5PDcbKzwzLCNmGC3rLChmU", "AgvYzwrH", "ks4GvgHLEsbHCMuGBM90igzPBMrPBMDZoIb5B3uGy2fUBM90igzPEcb0AgvTigj5ihn1yM1PDhrPBMCGC29TzxrOAw5NigvSC2uSigfUzcb5B3uGBxvZDcbot1qGCMvZB2X2zsb0AgvTigj5ignOB29ZAw5NihLVDxjZzwXMlIbfywnOig9UzsbUzwvKCYbHihDYAxr0zw4GzgvJAxnPB24UcGO", "mJC5mZC2wwrlsxfL", "C2HHmJu2", "Dg90ywW", "Cgf0Ahm", "ChjVz3jLC3nuB2TLBG", "ywrKsxnZDwu", "zxjYB3jZ", "y2f0ywXVz29Z", "ywX0zxjUyxrPDMvZ", "y29UzMLHBNPH", "tg9ZihrVy2fKB3m6ia", "su5tvfjvq0njt05fuZOGBMLUz8o6BIbJyxtdOwXVz28GzgvSihbYB3LLy3rVigrLy2XHCMeGBg9ZigzPy2HLCM9ZigrLigLUC3rYDwnJAw9UzxmGkgbPBNn0CNvJDgLVBNm6ycbLBIbZDsbGywDLBNrZlNLHBwXGkq", "AxmGDMfSAwq", "BM8GAhvIBYbYzxnWDwvZDgeGkgXHihjLC3b1zxn0ysbUBYbJDw1WBmoTysbLBcbMB3jTDwXHCMLVoIa"];
  a = function() {
    return cT;
  };
  return a();
}
var c = () => ({ "es": cf(872) + e9(".arketum/proyecto.yaml") + " y de los arquetipos que resuelve; no editar a mano: se regenera con `action: instructions`. -->", "en": cf(676) + e9(cf(559)) + " and the archetypes it resolves; do not edit by hand: it is regenerated with `action: instructions`. -->" });
var d = (a5) => a5["trim"]()[cf(955)](/\s+/g, " ");
function e(a5) {
  const cg = cf, a6 = [cg(867) + a5["name"] + " " + a5[cg(605)], "", d(A(a5["description"])), ""];
  a6["push"](o({ "es": cg(755), "en": cg(736) }));
  for (const a8 of a5[cg(1013)]) a6[cg(638)]("- `" + a8[cg(669)] + "`: " + d(A(a8[cg(662)])));
  const a7 = a5["extractors"][cg(759)]((a9) => a9["mechanism"] === cg(939) && a9["pattern"] !== void 0);
  if (a7[cg(618)] > 0) {
    a6[cg(638)]("", o({ "es": cg(754), "en": "Where each kind lives (relative to the artifact\u2019s root):" }));
    for (const a9 of a7) {
      const aa = (a9["excluding"] ?? [])["length"] > 0 ? o({ "es": ", salvo " + a9[cg(984)]["map"]((ab) => "`" + ab + "`")[cg(491)](", "), "en": cg(799) + a9["excluding"][cg(668)]((ab) => "`" + ab + "`")[cg(491)](", ") }) : "";
      a6[cg(638)]("- " + [a9[cg(750)], ...a9[cg(543)] ?? []]["map"]((ab) => "`" + ab + "`")[cg(491)](", ") + " \u2192 `" + a9["kind"] + "`" + aa);
    }
  }
  if (a5[cg(877)]["length"] > 0) {
    a6[cg(638)]("", o({ "es": cg(679), "en": cg(467) }));
    for (const ab of a5["coRequirements"]) {
      const ac = ab["requires"]["map"]((ad) => "`" + ad + "`")["join"](", ");
      a6["push"](o({ "es": "- si aparece `" + ab[cg(728)] + "`, tambi\xE9n " + ac, "en": "- if `" + ab["when"] + "` appears, also " + ac }));
    }
  }
  a6["push"]("", o({ "es": "Escalera:", "en": cg(937) }));
  for (const ad of a5[cg(899)]) {
    const ae = ad[cg(977)]?.["min"] ?? 0, af = ad[cg(977)]?.["max"] ?? o({ "es": cg(556), "en": cg(821) }), ag = ad["fanout"] === void 0 ? "" : ad[cg(977)][cg(905)] !== void 0 && ad[cg(977)]["estricto"] !== !![] ? o({ "es": " (orientativo)", "en": " (indicative)" }) : ad[cg(977)][cg(746)] === !![] ? o({ "es": " (estricto)", "en": " (strict)" }) : "", ah = [ad[cg(922)] === void 0 ? "" : cg(653) + A(ad["title"]), (ad["requiredRoles"] ?? [])[cg(618)] > 0 ? "; roles: " + ad[cg(806)][cg(491)](", ") : "", ad[cg(977)] === void 0 ? "" : o({ "es": cg(920) + ae + "\u2013" + af + ag, "en": cg(619) + ae + "\u2013" + af + ag })][cg(491)]("");
    a6["push"]("- " + ad["id"] + ah + (ad[cg(526)] === void 0 ? "" : ". " + d(A(ad[cg(526)]))));
  }
  if (Object[cg(843)](a5[cg(1002)] ?? {})["some"]((ai) => /^oficio\.\d+$/[cg(908)](ai))) {
    a6["push"]("", o({ "es": "Oficio:", "en": "Craft:" }));
    for (const ai of gX(a5)) a6["push"]("- " + d(ai));
  }
  return [...a6, ""];
}
function f(a5, a6) {
  const ch = cf, a7 = h5(a5, a6);
  if (a7["length"] === 0) return [];
  return [o({ "es": "Carpetas que generan las herramientas de los stacks (dentro de la ra\xEDz de su artefacto, a cualquier profundidad): no se reclaman ni cuentan como cambio; no hace falta borrarlas.", "en": "Folders that the stacks\u2019 tools generate (inside their artifact\u2019s root, at any depth): they are not claimed and do not count as a change; there is no need to delete them." }), "", ...a7["map"]((a8) => ch(805) + a8[ch(614)] + "`: " + a8["dirs"]["map"]((a9) => "`" + a9 + "/`")["join"](", ")), ""];
}
var g = () => ({ "es": [cf(511), "", "Este proyecto se gobierna con Arketum, a trav\xE9s de una sola herramienta MCP, `build`:", "", "- **Al comenzar a trabajar**, levanta el panel de la persona con `action: panel` y dale su direcci\xF3n: es donde ella ve el estado y decide sus pendientes, sin agente.", "- El trabajo va en **unidades de trabajo**: se abre una con `action: open`, un carril, un objetivo y los artefactos que toca.", cf(894), "- Cada respuesta de una unidad termina con una gu\xEDa: la **acci\xF3n siguiente** va primero. S\xEDguela.", "- La gu\xEDa no repite lo que esta conexi\xF3n ya mand\xF3 y no cambi\xF3: lo nombra en una l\xEDnea. Si no lo tienes en tu contexto (eres un subagente, o tu contexto se compact\xF3), pide la gu\xEDa entera con `action: status` y `unit` (o, si eres el agente principal, con `action: resume`).", cf(730), "- Los **gates** los decide la persona. Si tu cliente no puede preguntarle, pres\xE9ntale el resumen, preg\xFAntale en el chat y transmite su decisi\xF3n con `action: decide`. No decidas t\xFA.", cf(615), "- **Un cambio chico** sobre piezas que ya existen va por el carril `tweak`, si el cat\xE1logo lo tiene: el pedido literal de la persona, un radio corto (qu\xE9 pieza toca y qu\xE9 m\xE1s podr\xEDa tocar) y el descenso heredado; cierra sin comprobar, y los ajustes se comprueban juntos con `check`, antes de desplegar. El tama\xF1o lo mide Arketum: si se excede, se contin\xFAa en `feature` con `continues`.", "- **Lo que queda por conversar** se deja como tema con `action: topic`: si la persona dice que algo queda pendiente, con sus palabras tal cual (`from: person`); si t\xFA ves algo que conviene conversar, como propuesta tuya (`from: agent`). Un tema no bloquea nada y se cierra cuando se convierte en una unidad de trabajo o la persona descarta la idea. Si la persona responde un tema por el chat, transm\xEDtelo con `topic.answers` y sus palabras tal cual (no lo cierra); lo que respondi\xF3 en la tanda o el panel lo ves con `action: topic`.", cf(612), cf(568), cf(868), "- La **pol\xEDtica del proyecto** (`" + e9(cf(559)) + "` y los arquetipos) se fija al empezar cada unidad. No la edites a mano para cerrar: lo que escribe Arketum por un gate cuenta, lo editado a mano no (`policy_changed`). Si hace falta cambiarla, `action: policy` lo propone y la persona lo decide.", "", cf(943), "", cf(610), "- **Clasificar.** Clasifica la petici\xF3n contra el \xEDndice: un defecto (el requisito existe y no se cumple), un cambio (una versi\xF3n nueva: el mismo id en el PRD), algo nuevo (un requisito nuevo), una que ampl\xEDa uno que ya existe (`extends`: una caracter\xEDstica m\xE1s de \xE9l, como versi\xF3n nueva) o un choque con un `technical` o una `decision` (`clashesWith`).", "- **Pedir solo el detalle que tocas**, con `action: requirement` y sus `ids`; no cargues el de los dem\xE1s.", cf(590), "- La conformidad, el retiro, un defecto reportado y decidir una `decision` los decide la persona dentro de una unidad: p\xEDdelos con `action: ask`.", ""]["join"]("\n"), "en": ["## How work is done here", "", "This project is governed with Arketum, through a single MCP tool, `build`:", "", cf(827), cf(639), cf(659), cf(847), "- The guide does not repeat what this connection already sent and did not change: it names it in one line. If you do not have it in your context (you are a subagent, or your context was compacted), ask for the whole guide with `action: status` and `unit` (or, if you are the main agent, with `action: resume`).", "- **Who signs.** Declare yourself with `agent` when opening a unit. If you are a subagent, pass `agent` in every call that records something: you share the main agent\u2019s connection, and this way what is yours goes in your name without changing theirs.", "- The **gates** are decided by the person. If your client cannot ask them, present the summary to them, ask them in the chat and relay their decision with `action: decide`. Do not decide yourself.", cf(747), "- **A small change** on pieces that already exist goes through the `tweak` lane, if the catalog has it: the person\u2019s literal request, a short radius (which piece it touches and what else it could touch) and the inherited descent; it closes without checking, and the adjustments are checked together with `check`, before deploying. Arketum measures the size: if it is exceeded, it continues in `feature` with `continues`.", "- **What remains to be discussed** is left as a topic with `action: topic`: if the person says something is pending, with their words verbatim (`from: person`); if you see something worth discussing, as your proposal (`from: agent`). A topic blocks nothing and is closed when it becomes a work unit or the person discards the idea. If the person answers a topic through the chat, relay it with `topic.answers` and their words verbatim (it does not close it); what they answered in the batch or the panel you see with `action: topic`.", "- **Two loops: capture and implementation.** When a session starts, ask the person whether they work in parallel or in sequence and relay it with `action: mode` (with `subagents: true` if your client can delegate to subagents). When a definition is finished, Arketum presents what to do with what is ready and the next round: in parallel, each unit marked \xABlaunch\xBB goes to a subagent that starts with `action: resume`, and you go back to the capture; in sequence, you implement it before opening another. If you are implementing and cannot go on without the person, mark it with `action: block` and `reason`, without interrupting the capture.", cf(672), cf(457), cf(627) + e9(".arketum/proyecto.yaml") + cf(681), "", "## Requirements: always read and always update", "", cf(753), cf(902), cf(990), cf(931), cf(770), ""][cf(491)]("\n") });
function h(a5, a6) {
  const ci = cf, a7 = [o(c()), "", o({ "es": ci(525) + a5[ci(669)] + "\xBB", "en": "# Project \xAB" + a5[ci(669)] + "\xBB" }), ""];
  a7[ci(638)](...o(g())[ci(860)]("\n")), a7["push"](o({ "es": ci(606), "en": ci(553) }), "", o({ "es": ci(603), "en": ci(849) }), ci(942));
  for (const a9 of a5[ci(916)]) {
    const aa = a9["archetype"] === void 0 ? h6(a9) : a9["archetype"][ci(605)] === void 0 ? a9[ci(820)][ci(669)] : a9[ci(820)]["name"] + "@" + a9[ci(820)][ci(605)];
    a7[ci(638)](ci(462) + a9["id"] + ci(751) + a9["root"] + "` | " + aa + " | " + (a9["dependsOn"]["join"](", ") || "\u2014") + " | " + (a9[ci(552)]["join"](", ") || "\u2014") + " |");
  }
  if (a5["artifacts"]["length"] === 0) a7["push"](ci(515));
  a7[ci(638)](""), a7[ci(638)](o({ "es": "`touchWith`: una unidad que toca un artefacto tiene que tocar tambi\xE9n los que nombra su columna \xABSe toca con\xBB.", "en": "`touchWith`: a unit that touches an artifact also has to touch the ones its \xABTouched with\xBB column names." }), "", o({ "es": "## Andamiaje", "en": ci(883) }), "", o({ "es": ci(921), "en": "No archetype governs this, and Arketum does not go in:" }), "", ...a5["scaffolding"][ci(618)] === 0 ? [o({ "es": "- (nada)", "en": ci(623) })] : a5[ci(1034)]["map"]((ab) => ci(805) + ab + "`"), "", ...(a5[ci(716)] ?? [])[ci(618)] === 0 ? [] : [o({ "es": "## Entrada", "en": "## Input" }), "", o({ "es": "Los documentos con que la persona describe lo que quiere: no son sistema ni andamiaje. Lo que cambi\xF3 de ellos es la base de la unidad siguiente con levantamiento, que su analista lee entera:", "en": ci(625) }), "", ...a5["entrada"]["map"]((ab) => ci(805) + ab + "`"), ""], ...f(a5, a6), a5[ci(946)] === ci(774) ? o({ "es": "Cobertura: `" + a5[ci(946)] + "` (un fichero que ning\xFAn arquetipo reclama en un artefacto tocado impide cerrar).", "en": "Coverage: `" + a5["coverage"] + "` (a file that no archetype claims in a touched artifact prevents closing)." }) : o({ "es": "Cobertura: `" + a5[ci(946)] + ci(1040), "en": "Coverage: `" + a5["coverage"] + ci(512) }), "", o({ "es": ci(704), "en": ci(786) }), "");
  const a8 = /* @__PURE__ */ new Set();
  for (const ab of a5["artifacts"]) {
    let ac;
    try {
      ac = h1(ab, a5[ci(1021)], a6)[ci(820)];
    } catch {
      ac = void 0;
    }
    const ad = ac === void 0 ? "?" + h6(ab) : ac["name"] + "@" + ac[ci(605)];
    if (a8[ci(1035)](ad)) continue;
    a8[ci(564)](ad);
    if (ac !== void 0) a7[ci(638)](...e(ac));
    else a7["push"](ci(867) + (ab[ci(820)] === void 0 ? h6(ab) : "" + ab[ci(820)][ci(669)] + (ab["archetype"]["version"] === void 0 ? "" : " " + ab["archetype"]["version"])), "", o({ "es": ci(530), "en": ci(685) }), "");
  }
  return a7["join"]("\n")["replace"](/\n+$/, "") + "\n";
}
var i = (a5) => "sha256:" + createHash(cf(536))["update"](a5)[cf(498)](cf(852));
function j2(a5) {
  const cj = cf, a6 = Math[cj(905)](0, ...[...a5["matchAll"](/`+/g)]["map"]((a7) => a7[0][cj(618)]));
  return "`"["repeat"](Math[cj(905)](4, a6 + 1));
}
var k2 = cf(906);
var l = { "root": "The project root.", "paths": "The corpus paths. They are only used with a `.arketum/` without `project.yaml` (and not in the old format): they yield the legacy candidate of an archetype and its questionnaire. Without `.arketum/` they are ignored: every call receives the bootstrap of the folder (new, with a base, or existing). The tool proposes, it never installs.", "hereda": cf(688), "quitar": "With `inherit`: the baseline ids that leave the level.", "tope": "`delegate`: the delegation\u2019s limit, in units opened under it (5, 10 or 20; 10 by default), or `no_limit`: in force until the person revokes it, with a summary in the batch every `summaryEvery` units.", "resumenCada": "`delegate` with `limit: no_limit`: every how many units opened under the delegation (5, 10 or 20, counting the unit where it is granted; 10 by default) the summary of what was approved on its own reaches the batch.", "veredictos": "`decide` with `step: confirmation`: for each functional requirement (`<artifact>:<id>`), `yes`, `no` or `later`, what the person answered; with `because` if any is `no`.", "revocar": "`delegate`: withdraw the delegation in force; Arketum asks the person at every gate again. It leaves the same fact as `revoke` in the batch\u2019s summary.", "resumen": cf(926), "continua": cf(851), "inventories": cf(1009), "proposal": cf(689), "artifact": cf(1029), "lote": cf(982), "completa": cf(951), "politica": "`audit`: the source of the security rules the person named (their policies or their organization\u2019s: a path, a URL or its name); without it, each chunk is judged against current general good practice.", "pagina": "`prd`: the page of the living PRD you request (from 1).", "informe": cf(616), "borrados": cf(1030), "action": cf(839), "unit": cf(715), "agent": cf(866), "ids": cf(655), "clasificacion": cf(932), "papel": "`elicit`: the elicitation role that delivers the part (`analyst` or `architect`, declared). `status` with `unit`: that role\u2019s package for the current stage; in the system step or the evidence step, also an implementation role of the shape\u2019s variant (the guide names them).", "parte": "`elicit`: the elicitation part, with its `kind` (`situation`, `direction`, `conversation`, `sketch`, `signals`, `proposal`, `answers`, `consolidation`, `out_of_scope`, `request` or `reopen`) and its fields.", "senales": "`shapes`: the system\u2019s signals (those the shapes declare, with their type), to know which shapes apply.", "stacks": "`shapes`: with `true`, it also lists the stacks (with their example tree) and the single-layer archetypes, which the architecture chooses.", "requisito": cf(487), "pide": cf(492), "opciones": "`ask` with `asks: decision`: the options the person decides among.", "veredicto": "`decide` at a requirement\u2019s gate: what the person decided in the chat (`undecided` withdraws the request without deciding). Never yours.", "porque": cf(836), "texto": "`decide` with `decide`: the decided text, which creates the new version of the `decision`.", "cita": "`decide`: the person\u2019s literal words with which they already decided this gate in the conversation; it is recorded through the chat without asking them again. `telemetry`: those with which they accepted or not. `language`: those with which they chose the project language. Only if they really said it: never yours.", "esperar": "`batch`: minutes (up to 30) the call waits for the person to save `.arketum/pending-decisions.md`; if the client cuts the call earlier, call again or ask them to let you know.", "tema": cf(678), "opcion": cf(933), "grupo": "`topic` without `topic`: the id of a group of open topics (the list, the batch and the overview give it), to list it whole.", "huecos": cf(592), "nombre": cf(717), "correo": cf(952), "gana": "`choose`: the unit whose version the person chose in a semantic conflict (with `requirement` and `because`, their words). Never yours.", "retroactiva": cf(461), "fronteras": "`close`: the boundaries of the touched artifacts, derived from the code and informative: per artifact, what is new or changed (`add`: `id`, `direction` `inbound`/`outbound`, `mechanism`, `counterpart`, `contract` if there is one, `impacts` with the functional requirements and `paths` of the code), what is no longer there (`remove`, ids) or `none`.", "sinRequisito": "`close`: the touched artifacts whose changes touch no requirement (for example, scaffolding), each one with its reason.", "lane": cf(642), "slug": cf(677), "objective": cf(567), "optional": cf(518), "urgent": cf(532), "milestone": "`open`: the milestone, if the milestone step is chosen: `deployment`, `delivery` or `execution`, with its detail.", "touches": cf(497), "step": cf(791), "reason": cf(935), "modo": "`mode`: what the person chose for this session: `parallel` (the capture goes on while implementing) or `sequence` (it is implemented before defining further). Never yours.", "acepta": cf(644), "subagentes": "`mode`: whether your client can delegate to subagents (you declare it); without declaring it, Arketum suggests sequence.", "enmienda": "`block`: the unit whose new definition amends the one being implemented, if the person chose to amend it (lp-f05); Arketum sets the reason.", "owner": "`defer`: who answers for the debt.", "due": cf(617), "evidence": cf(884), "resolution": cf(673), "catalog": "`decide` when approving a step with a candidate archetype: the catalog where the person chose to publish it (the summary lists them).", "scope": cf(476), "desde": "`decide` with `rejected` and `keep`: the earlier step to resume from, if the reason questions it.", "note": "`pause`: what is left and where to continue. `unblock`: how it was resolved (optional). `decide`: with `adjust`, what to adjust (required); with `dont_understand`, the person\u2019s doubt (optional).", "decision": "`decide`: the decision the person gave in the chat, only if your client cannot ask them. Never yours. They are the same four options as in the batch and the panel: `approved` (approve), `adjust` (with `note`), `rejected` (reject, with `reason`) and `dont_understand` (with their doubt in `note`, if they said it), which approves nothing and returns to you what to explain to them.", "selfReview": cf(879), "idioma": "`language`: the project language the person chose (`es` or `en`), with `quote`, her literal words; from then on everything Arketum generates for the project comes out in it. `open`: on the first `open` of a project that still asks for its language, the one the person chose, with `quote`. Never yours." };
var m = external_exports[cf(980)]({ "level": external_exports["enum"](["L0", "L1", "L2", "L3", "L4"]), "artifact": external_exports["string"]()["optional"](), "items": external_exports[cf(909)](external_exports["object"]({ "id": external_exports[cf(853)](), "kind": external_exports[cf(853)](), "label": external_exports["string"](), "parents": external_exports["array"](external_exports[cf(853)]())["default"]([]), "role": external_exports[cf(853)]()["optional"](), "location": external_exports["string"]()[cf(929)](), "attrs": external_exports[cf(873)](external_exports[cf(853)](), external_exports[cf(901)]([external_exports[cf(853)](), external_exports["number"](), external_exports[cf(930)]()]))[cf(929)](), "projection": external_exports[cf(980)]({ "relation": external_exports["string"]()[cf(713)]((a5, a6) => {
  const ck = cf, a7 = gK(a5);
  if (a7 !== void 0) a6[ck(540)]({ "code": "custom", "message": a7 });
}), "args": external_exports[cf(873)](external_exports[cf(853)](), external_exports[cf(911)]())["default"]({}) })["strict"]()["optional"]() })) })[cf(694)]();
var n = external_exports["object"]({ "baseline": m["optional"](), "deltas": external_exports[cf(909)](external_exports["object"]({ "path": external_exports["string"](), "op": external_exports["enum"]([cf(564), "modify", "delete", "rename"]), "previousPath": external_exports[cf(853)]()[cf(929)]() }))["default"]([]) });
function o2(a5, a6) {
  const cl = cf;
  if (a6 === void 0 || a6[cl(618)] === 0) return o({ "es": "No hay " + e9(".arketum/proyecto.yaml") + cl(665) + a5 + cl(583), "en": "There is no " + e9(cl(559)) + cl(601) + a5 + ": this corpus does not declare its policy yet. List its paths for me in `paths` \u2014the ones you want to govern, without the generated folders\u2014 and I will return a candidate with what is observed and questions about what is not. Listing is your job; looking inside the files is not needed." });
  const a7 = pc([...a6]), a8 = cl(687) + pj(a7) + "```\n\n", a9 = pk(a7) + "\n\n";
  return o({ "es": cl(575) + e9(".arketum/proyecto.yaml") + cl(665) + a5 + cl(720) + a6[cl(618)] + " rutas que has listado sale este CANDIDATO. No lo he escrito en ning\xFAn sitio y no lo voy a escribir: rev\xEDsalo con quien manda, corr\xEDgelo, y cuando sea vuestra pol\xEDtica gu\xE1rdalo t\xFA en .arketum/archetype.yaml.\n\n" + a8 + a9 + "Lo que se ha derivado es la FORMA del corpus. Lo que no se ha derivado, ni se intentar\xE1, es para qu\xE9 existe cada pieza: eso no est\xE1 en una carpeta, y deducirlo de lo que hay lo dar\xEDa por cumplido por el mero hecho de existir lo que hay.", "en": cl(475) + e9(".arketum/proyecto.yaml") + " in " + a5 + ". From the " + a6["length"] + " paths you listed comes this CANDIDATE. I have not written it anywhere and I will not: review it with whoever is in charge, correct it, and once it is your policy, save it yourself in .arketum/archetype.yaml.\n\n" + a8 + a9 + cl(523) });
}
async function p(a5, a6) {
  const cm = cf, a7 = await GF(a5, a6);
  if ("negativa" in a7) return a7["negativa"];
  const a8 = h(a6, a7), { instrucciones: a9, problemas: aa } = sX(a7), ab = i(a8), ac = aa[cm(618)] === 0 ? "" : "; " + aa[cm(491)]("; "), ad = a9[cm(668)]((af) => "`" + af + "`")["join"](o({ "es": cm(846), "en": " and " })), ae = a9[cm(618)] === 0 ? o({ "es": cm(546) + ac + ". Este es el texto (" + ab + "): escr\xEDbelo t\xFA, byte a byte, donde lo lea tu agente. El estado no lo compara con ning\xFAn fichero.\n\n", "en": cm(482) + ac + cm(863) + ab + cm(783) }) : o({ "es": "INSTRUCCIONES: escribe este texto, byte a byte, en " + ad + " en la ra\xEDz del proyecto (" + ab + "). Arketum no los escribe; el estado avisa cuando dejan de coincidir con la pol\xEDtica.\n\n", "en": "INSTRUCTIONS: write this text, byte for byte, to " + ad + cm(763) + ab + "). Arketum does not write them; the status warns when they stop matching the policy.\n\n" });
  return "" + ae + j2(a8) + cm(989) + a8 + j2(a8);
}
var q2 = new Set(Object[cf(1028)](M)["flat"]()["filter"]((a5) => ![cf(888), "proposal", cf(841), cf(697)][cf(572)](a5)));
var r2 = /* @__PURE__ */ new Set(["status", "estado", "instructions", cf(789), cf(871), cf(478), cf(454)]);
function s(a5) {
  if (a5 === void 0 || !isAbsolute(a5)) return dR;
  try {
    return D2(a5);
  } catch {
    return dR;
  }
}
function u(a5) {
  return EV(a5);
}
async function v() {
  return sX([await GE()]);
}
function b(c2, d2) {
  c2 = c2 - 447;
  const e2 = a();
  let f2 = e2[c2];
  if (b["FVdoEI"] === void 0) {
    var g2 = function(l2) {
      const m2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let n2 = "", o3 = "";
      for (let p2 = 0, q3, r3, s2 = 0; r3 = l2["charAt"](s2++); ~r3 && (q3 = p2 % 4 ? q3 * 64 + r3 : r3, p2++ % 4) ? n2 += String["fromCharCode"](255 & q3 >> (-2 * p2 & 6)) : 0) {
        r3 = m2["indexOf"](r3);
      }
      for (let t = 0, u2 = n2["length"]; t < u2; t++) {
        o3 += "%" + ("00" + n2["charCodeAt"](t)["toString"](16))["slice"](-2);
      }
      return decodeURIComponent(o3);
    };
    b["VRfcDA"] = g2, b["OICrac"] = {}, b["FVdoEI"] = !![];
  }
  const h2 = e2[0], i2 = c2 + h2, j3 = b["OICrac"][i2];
  return !j3 ? (f2 = b["VRfcDA"](f2), b["OICrac"][i2] = f2) : f2 = j3, f2;
}
var w = (a5, a6) => (a7, a8) => le(a7, a5, { "catalog": [], "scaffolding": sY(a6) }, a8);
async function x(a5, a6) {
  const cn = cf, a7 = a6 ?? await v(), a8 = (ac) => pw(ac, a7["configuracion"]), a9 = w(a5, a7), aa = await DX(a5, (ac, ad) => a9(ac, ad) || a8(ac) || !ad && (px(ac) || pv(ac)))[cn(632)](() => !![]);
  if (aa) return { "tipo": cn(658) };
  const ab = await DW(a5, a9)["catch"](() => void 0);
  if (ab === void 0) return { "tipo": cn(658) };
  if (!ab["some"]((ac) => px(ac) && !a8(ac))) return { "tipo": cn(958), "so": [...new Set(ab[cn(668)]((ac) => ac["includes"]("/") ? ac[cn(860)]("/")[0] + "/" : ac))][cn(699)]() };
  return { "tipo": cn(579), "propuesta": py(ab, a7[cn(486)]) };
}
async function y(a5) {
  const co = cf, a6 = await v(), a7 = await x(a5, a6);
  if (a7["tipo"] === "existente") return C(a5, a6);
  if (a7["tipo"] === co(579)) return G(a5, a7["propuesta"], a6);
  return H(a5, a6, a7["so"]);
}
function A2(a5, a6, a7, a8 = {}) {
  const cp = cf, a9 = sY(a7), aa = [cp(740) + JSON["stringify"](basename(a5)), cp(752), cp(788) + a6, cp(739) + [...a9, ...(a8[cp(1034)] ?? [])["filter"]((ab) => !a9["includes"](ab))][cp(491)](", ") + "]", ...(a8[cp(716)] ?? [])["length"] === 0 ? [] : ["entrada: [" + a8[cp(716)][cp(491)](", ") + "]"], "catalog:", cp(477), "artifacts: []", ""][cp(491)]("\n");
  return e8() === 1 ? aa : BV(aa, cp(1006));
}
var B = (a5, a6) => e8() === 1 ? a5 : a6;
function C(a5, a6) {
  const cq = cf, a7 = A2(a5, cq(573), a6), a8 = JSON[cq(682)]({ "root": a5, "action": "open", "lane": { "name": "digest" }, "slug": o(D["slug"]), "objective": o(D["objetivo"]), "agent": o(D["agente"]) });
  return o({ "es": "PROYECTO EXISTENTE: esta carpeta tiene c\xF3digo y no tiene `" + e9(cq(559)) + "`. Para que Arketum la gobierne, se DIGIERE: escribe t\xFA este `" + e9(".arketum/proyecto.yaml") + "` m\xEDnimo (cobertura `" + B(cq(573), "warning") + "`, la que se sugiere sobre un c\xF3digo que ya existe; Arketum no lo escribe: sugiere, no ejecuta) y abre una unidad del carril `digest`. Su paso propone la estructura base \u2014los artefactos con su stack y su componente (o su arquetipo), la forma con su variante y sus escalones, el andamiaje y la cobertura\u2014 y la persona la confirma en su gate; al aprobarse, Arketum la escribe en `" + e9(cq(531)) + "` sin cambiar c\xF3digo ni inferir requisitos. Un carril que digiere se abre sin `classification`.\n\n```yaml\n" + a7 + cq(1036) + a8 + "\n```\n\n(El candidato antiguo de un arquetipo de una sola capa, sacado de las rutas, solo sale con un `.arketum/` sin `" + e9("proyecto.yaml") + "`, llamando sin `action` y con `paths`.)", "en": "EXISTING PROJECT: this folder has code and no `" + e9(cq(559)) + "`. For Arketum to govern it, it is DIGESTED: write this minimal `" + e9(cq(559)) + "` yourself (coverage `" + B("aviso", "warning") + "`, the one suggested over code that already exists; Arketum does not write it: it suggests, it does not execute) and open a unit in the `digest` lane. Its step proposes the base structure \u2014the artifacts with their stack and their component (or their archetype), the shape with its variant and its tiers, the scaffolding and the coverage\u2014 and the person confirms it at its gate; once approved, Arketum writes it to `" + e9("proyecto.yaml") + "` without changing code or inferring requirements. A digesting lane is opened without `classification`.\n\n```yaml\n" + a7 + "```\n\nThen open the unit with this call (what goes between `<\u2026>` is yours; the slug in lowercase and with hyphens):\n\n```json\n" + a8 + "\n```\n\n(The old candidate of a single-layer archetype, derived from the paths, only comes out with a `.arketum/` without `" + e9(cq(531)) + "`, calling without `action` and with `paths`.)" });
}
var D = { "slug": { "es": cf(1010), "en": "<short-name>" }, "objetivo": { "es": cf(510), "en": "<what the person asks for>" }, "agente": { "es": cf(947), "en": cf(907) } };
var E = () => ({ "es": cf(875) + e9(cf(531)) + cf(663) + e9("proyecto.yaml") + "` m\xEDnimo, lleva `archetype.yaml` a `arquetipos/` del cat\xE1logo del proyecto (ver \xABPasar del formato viejo\xBB en `docs/lifecycle.md` \xA73) y abre una unidad del carril `digest`; la digesti\xF3n lo usa como el arquetipo de un artefacto de una sola capa.", "en": "OLD FORMAT: this project has `.arketum/archetype.yaml` and no `" + e9(cf(531)) + cf(459) + e9(cf(531)) + cf(832) });
var F = (a5) => JSON[cf(682)]({ "root": a5, "action": cf(473), "lane": { "name": "new" }, "slug": o(D["slug"]), "objective": o(D[cf(624)]), "classification": { "class": cf(864), "ids": [] }, "agent": o(D["agente"]) });
function G(a5, a6, a7) {
  const cr = cf, a8 = A2(a5, cr(774), a7, { "scaffolding": a6[cr(1034)], "entrada": a6[cr(716)] }), a9 = F(a5);
  return o({ "es": cr(622) + e9(cr(559)) + cr(651) + e9(cr(559)) + "` m\xEDnimo (Arketum no lo escribe: sugiere, no ejecuta): los documentos van en `" + B(cr(716), cr(856)) + cr(506) + B("entrada", "entry") + ":` CON LA PERSONA y quita lo que no sea base (lo que quites, decl\xE1ralo en el andamiaje o b\xF3rralo). Despu\xE9s abre una unidad del carril `new`: al aprobarse su carril, Arketum fija como base de la unidad los documentos de la entrada, y su analista la lee entera, te presenta su lectura y pregunta solo por contradicciones, huecos y refinamientos; al aprobarse su arquitectura, Arketum a\xF1ade los artefactos.\n\n```yaml\n" + a8 + "```\n\nDespu\xE9s, abre la unidad con esta llamada (lo que va entre `<\u2026>` es tuyo; el slug, en min\xFAsculas y con guiones):\n\n```json\n" + a9 + "\n```", "en": "PROJECT WITH A BASE: this folder has no `" + e9(cr(559)) + cr(640) + e9(".arketum/proyecto.yaml") + cr(481) + B("entrada", cr(856)) + ":`, and the operating system files and the editor configuration folders, in the scaffolding. FIRST, REVIEW THE `" + B(cr(716), cr(856)) + cr(1026) + a8 + cr(1031) + a9 + "\n```" });
}
function H(a5, a6, a7 = []) {
  const cs = cf, a8 = A2(a5, cs(774), a6, { "scaffolding": a7 }), a9 = F(a5);
  return o({ "es": cs(822) + e9(cs(559)) + "` m\xEDnimo (Arketum no lo escribe: sugiere, no ejecuta) y abre una unidad del carril `nuevo`; al aprobarse su arquitectura, Arketum a\xF1ade los artefactos.\n\n```yaml\n" + a8 + cs(1036) + a9 + cs(496), "en": "NEW PROJECT: to start with work units from an empty folder, write this minimal `" + e9(".arketum/proyecto.yaml") + cs(516) + a8 + "```\n\nThen open the unit with this call (what goes between `<\u2026>` is yours; the slug in lowercase and with hyphens):\n\n```json\n" + a9 + cs(496) });
}
function I(a5, a6, a7) {
  const ct = cf, { conformes: a8, total: a9 } = a7["avance"], aa = [o({ "es": "MIGRACI\xD3N DECLARADA: \xAB" + a5 + ct(897) + a6 + "\xBB.", "en": "DECLARED MIGRATION: \xAB" + a5 + ct(897) + a6 + "\xBB." }), o({ "es": "Avance " + a8 + "/" + a9 + " piezas ya conformes con el destino. Ese n\xFAmero se calcula de las ubicaciones declaradas; no lo declara nadie.", "en": "Progress " + a8 + "/" + a9 + " pieces already conform to the target. That number is computed from the declared locations; nobody declares it." })];
  if (a7["incompatibilidades"]["length"] > 0) {
    const ab = a7["incompatibilidades"]["length"], ac = a7["incompatibilidades"]["map"]((ad) => {
      const cu = ct, ae = ["  " + ad["id"], o({ "es": cu(558) + ad[cu(992)] + " sobre \xAB" + ad["subject"] + "\xBB", "en": cu(558) + ad[cu(992)] + " on \xAB" + ad[cu(470)] + "\xBB" }), o({ "es": "    origen:  " + ad[cu(748)], "en": cu(1037) + ad["origen"] }), o({ "es": "    destino: " + ad["destino"], "en": "    target:  " + ad["destino"] })];
      if (ad["candidatos"] !== void 0 && ad[cu(557)]["length"] > 0) {
        const af = ad[cu(557)]["join"](", ");
        ae[cu(638)](o({ "es": "    lo disponible, sin preferencia: " + af, "en": cu(811) + af }));
      }
      if (ad["afecta"] !== void 0 && ad[cu(978)]["length"] > 0) {
        const ag = ad["afecta"]["join"](", ");
        ae["push"](o({ "es": cu(626) + ag, "en": "    leaves without an evaluable projection: " + ag }));
      }
      return ae[cu(491)]("\n");
    })[ct(491)]("\n\n");
    aa[ct(638)](o({ "es": "DECISIONES REQUERIDAS (" + ab + "). No son hallazgos: no las puedes arreglar entregando otra cosa, y NO debes resolverlas eligiendo t\xFA. Cada una necesita una decisi\xF3n escrita.\n\n" + ac, "en": "DECISIONS REQUIRED (" + ab + ct(534) + ac })), aa["push"](o({ "es": ct(586), "en": ct(456) }));
  }
  if (a7[ct(807)][ct(618)] > 0) {
    const ad = a7["movimientos"]["length"], ae = a7["movimientos"]["map"]((af) => "  " + af["de"] + ct(1014) + af["a"])["join"]("\n");
    aa["push"](o({ "es": "MOVIMIENTOS (" + ad + ct(466) + ae, "en": "MOVES (" + ad + ct(999) + ae }));
  }
  if (a7[ct(948)]["length"] > 0) {
    const af = a7["creaciones"][ct(618)], ag = a7["creaciones"][ct(668)]((ah) => o({ "es": "  " + ah["kind"] + " para " + ah["para"], "en": "  " + ah["kind"] + ct(809) + ah[ct(923)] }))[ct(491)]("\n");
    aa[ct(638)](o({ "es": "POR CREAR (" + af + ct(519) + ag, "en": "TO CREATE (" + af + "), which the target requires as a co-requisite. It is work, not a decision: it can be done.\n" + ag }));
  }
  if (a7[ct(1011)][ct(618)] > 0) {
    const ah = a7[ct(1011)][ct(618)], ai = a7["huerfanas"][ct(491)](", ");
    aa["push"](o({ "es": ct(1019) + ah + "): " + ai + ".\nQue una estuviera satisfecha bajo el vocabulario viejo no la deja satisfecha bajo el nuevo: la marca se gan\xF3 contra otra definici\xF3n. Qu\xE9 se hace con ellas es la decisi\xF3n de arriba, no una tarea.", "en": "INTENTIONS WITHOUT AN EVALUABLE PROJECTION in the target (" + ah + "): " + ai + ".\nThat one was satisfied under the old vocabulary does not leave it satisfied under the new one: the mark was earned against another definition. What to do with them is the decision above, not a task." }));
  }
  return a7[ct(900)][ct(618)] === 0 && a7["movimientos"][ct(618)] === 0 && aa[ct(638)](o({ "es": ct(919), "en": "Nothing to move and nothing to decide: the structure already has the shape of the target." })), aa[ct(491)]("\n\n");
}
async function J(a5, a6, a7) {
  const cv = cf, a8 = dj(a6);
  if (a8["extends"] === void 0) return { "archetype": a8 };
  const a9 = await DI(a5, a8["extends"]);
  if (a9 === null) {
    const aa = Db(CL), ab = a8[cv(669)], ac = a8["extends"], ad = o({ "es": a7, "en": a7 === "vigente" ? "current" : cv(801) });
    return { "negativa": o({ "es": "El arquetipo " + ad + " \xAB" + ab + cv(490) + ac + cv(738) + aa + cv(729) + aa + "`, o quita el `extends` y declara la pol\xEDtica entera en el propio arquetipo.", "en": cv(878) + ad + " archetype \xAB" + ab + cv(945) + ac + "`, and that base is not there. It was looked for in `" + aa + cv(965) + aa + cv(565) }) };
  }
  return { "archetype": dv(a8, dj(a9)) };
}
async function K(a5, a6, a7) {
  const cw2 = cf, a8 = await DH(a5);
  if (a8 === null) return void 0;
  const a9 = await J(a5, a8, "objetivo");
  if ("negativa" in a9) return a9;
  const aa = a9[cw2(820)];
  if (aa["name"] === a6[cw2(820)]["name"]) return void 0;
  const ab = Object[cw2(843)](a6[cw2(621)]), ac = a7 ?? (ab[cw2(618)] > 0 ? a6[cw2(621)][ab[ab[cw2(618)] - 1]] : void 0) ?? { "level": a6["level"], "artifact": a6[cw2(697)], "items": [] };
  return { "destino": aa, "plan": uc(a6["archetype"], aa, ac, { "intenciones": a6["intentions"], "aceptados": ab }) };
}
function L2(a5 = {}) {
  const cx = cf, a6 = new McpServer({ "name": "arketum", "version": Iq === xA ? cx(566) : Iq }), a7 = randomUUID(), a8 = /* @__PURE__ */ new Map(), a9 = /* @__PURE__ */ new Map(), aa = /* @__PURE__ */ new Map(), ab = /* @__PURE__ */ new Map(), ac = external_exports["object"]({ "root": external_exports[cx(853)]()["describe"](l["root"]), "paths": external_exports[cx(909)](external_exports["string"]())[cx(929)]()[cx(1016)](l[cx(538)]), "inventory": m[cx(929)](), "hereda": external_exports["boolean"]()["optional"]()["describe"](l[cx(533)]), "quitar": external_exports["array"](external_exports[cx(853)]())["optional"]()[cx(1016)](l["quitar"]), "tope": external_exports["union"]([external_exports[cx(779)]()["int"](), external_exports[cx(792)](cx(474))])[cx(929)]()[cx(1016)](l[cx(652)]), "resumenCada": external_exports[cx(779)]()[cx(960)]()["optional"]()["describe"](l["resumenCada"]), "veredictos": external_exports["record"](external_exports[cx(853)](), external_exports[cx(853)]())["optional"]()[cx(1016)](l[cx(527)]), "revocar": external_exports["boolean"]()["optional"]()[cx(1016)](l["revocar"]), "resumen": external_exports[cx(886)](["sigue", cx(1003)])[cx(929)]()["describe"](l["resumen"]), "continua": external_exports[cx(853)]()[cx(929)]()[cx(1016)](l[cx(604)]), "inventories": external_exports[cx(909)](m["extend"]({ "hereda": external_exports["boolean"]()[cx(929)](), "quitar": external_exports[cx(909)](external_exports[cx(853)]())["optional"](), "proposal": n["optional"](), "selfReview": external_exports["string"]()["optional"]() })[cx(694)]())[cx(929)]()[cx(1016)](l["inventories"]), "proposal": n[cx(929)]()[cx(1016)](l[cx(501)]), "artifact": external_exports["string"]()[cx(929)]()["describe"](l["artifact"]), "lote": external_exports["number"]()["int"]()["positive"]()["optional"]()[cx(1016)](l["lote"]), "completa": external_exports["boolean"]()["optional"]()[cx(1016)](l[cx(562)]), "politica": external_exports[cx(853)]()["optional"]()["describe"](l[cx(793)]), "pagina": external_exports[cx(779)]()["int"]()["positive"]()["optional"]()[cx(1016)](l["pagina"]), "informe": external_exports[cx(873)](external_exports["string"](), external_exports["unknown"]())["optional"]()["describe"](l["informe"]), "borrados": external_exports["array"](external_exports["string"]())[cx(929)]()[cx(1016)](l["borrados"]), "action": external_exports["enum"](L)[cx(929)]()["describe"](l[cx(903)]), "unit": external_exports[cx(853)]()["optional"]()[cx(1016)](l["unit"]), "agent": external_exports[cx(853)]()["optional"]()[cx(1016)](l["agent"]), "ids": external_exports["array"](external_exports["string"]())[cx(929)]()["describe"](l["ids"]), "clasificacion": external_exports["object"]({ "clase": external_exports["enum"](["defecto", cx(509), cx(958), "choque", "amplia"]), "ids": external_exports[cx(909)](external_exports["string"]())["optional"]() })["strict"]()[cx(929)]()["describe"](l["clasificacion"]), "papel": external_exports[cx(853)]()["optional"]()[cx(1016)](l[cx(972)]), "parte": external_exports[cx(873)](external_exports["string"](), external_exports["unknown"]())["optional"]()["describe"](l[cx(691)]), "senales": external_exports[cx(873)](external_exports[cx(853)](), external_exports[cx(901)]([external_exports[cx(930)](), external_exports["number"](), external_exports["string"]()]))[cx(929)]()[cx(1016)](l[cx(1017)]), "stacks": external_exports["boolean"]()["optional"]()["describe"](l["stacks"]), "requisito": external_exports[cx(853)]()[cx(929)]()["describe"](l["requisito"]), "pide": external_exports["enum"](["conformidad", "retiro", cx(708), "decision", "sin_e2e"])[cx(929)]()["describe"](l["pide"]), "opciones": external_exports["array"](external_exports[cx(853)]())["optional"]()[cx(1016)](l[cx(823)]), "veredicto": external_exports[cx(886)]([cx(1005), "retirar", cx(708), cx(741), cx(861), cx(521)])["optional"]()["describe"](l["veredicto"]), "porque": external_exports["string"]()[cx(929)]()[cx(1016)](l[cx(991)]), "texto": external_exports[cx(853)]()["optional"]()["describe"](l[cx(950)]), "cita": external_exports[cx(853)]()[cx(929)]()["describe"](l[cx(940)]), "esperar": external_exports["number"]()[cx(929)]()["describe"](l[cx(693)]), "tema": external_exports[cx(901)]([external_exports[cx(853)](), external_exports["object"]({ "titulo": external_exports["string"]()[cx(929)](), "contexto": external_exports[cx(853)]()[cx(929)](), "preguntas": external_exports[cx(909)](external_exports["string"]())[cx(929)](), "de": external_exports["enum"]([cx(690), "agente"])["optional"](), "palabras": external_exports["string"]()[cx(929)](), "propuesta": external_exports[cx(980)]({ "carril": external_exports["string"](), "objetivo": external_exports["string"](), "clase": external_exports[cx(853)]()["optional"](), "ids": external_exports[cx(909)](external_exports[cx(853)]())["optional"](), "toca": external_exports["array"](external_exports["string"]())[cx(929)](), "opciones": external_exports["array"](external_exports["object"]({ "camino": external_exports[cx(853)](), "carril": external_exports[cx(853)]()["optional"](), "clase": external_exports[cx(853)]()[cx(929)](), "ids": external_exports["array"](external_exports[cx(853)]())[cx(929)](), "toca": external_exports["array"](external_exports["string"]())["optional"]() })[cx(694)]())["optional"]() })[cx(694)]()[cx(929)](), "cierra": external_exports[cx(853)]()["optional"](), "cierra_grupo": external_exports["string"]()[cx(929)](), "huella": external_exports[cx(853)]()[cx(929)](), "como": external_exports[cx(886)]([cx(500), "descartado"])["optional"](), "unidad": external_exports[cx(853)]()[cx(929)](), "motivo": external_exports[cx(853)]()[cx(929)](), "responde": external_exports[cx(853)]()["optional"]() })["strict"]()])[cx(929)]()[cx(1016)](l["tema"]), "opcion": external_exports[cx(779)]()[cx(960)]()[cx(760)]()[cx(929)]()["describe"](l["opcion"]), "grupo": external_exports[cx(853)]()["optional"]()[cx(1016)](l["grupo"]), "huecos": external_exports[cx(930)]()["optional"]()[cx(1016)](l["huecos"]), "nombre": external_exports["string"]()[cx(929)]()[cx(1016)](l[cx(528)]), "correo": external_exports[cx(853)]()["optional"]()[cx(1016)](l[cx(762)]), "gana": external_exports[cx(853)]()[cx(929)]()[cx(1016)](l[cx(913)]), "retroactiva": external_exports[cx(980)]({ "revisor": external_exports["string"](), "revisados": external_exports[cx(909)](external_exports[cx(853)]())["optional"](), "hallazgos": external_exports[cx(909)](external_exports["object"]({ "requisito": external_exports["string"](), "clase": external_exports[cx(886)](["contradice", "redundante", cx(683), cx(664), "inseguro"]), "motivo": external_exports[cx(853)](), "seguridad": external_exports["object"]({ "severidad": external_exports["enum"]([cx(924), cx(712), cx(962)]), "regla": external_exports["string"](), "rutas": external_exports[cx(909)](external_exports[cx(853)]()) })[cx(694)]()[cx(929)](), "propuesta": external_exports[cx(901)]([external_exports["literal"]("nada"), external_exports[cx(980)]({ "carril": external_exports["string"](), "objetivo": external_exports[cx(853)](), "fusiona": external_exports["array"](external_exports[cx(853)]())[cx(929)](), "queda": external_exports["string"]()[cx(929)]() })["strict"]()])["optional"]() })[cx(694)]())["optional"](), "consolidaciones": external_exports["array"](external_exports["object"]({ "intencion": external_exports[cx(853)](), "requisitos": external_exports[cx(909)](external_exports[cx(853)]()), "motivo": external_exports["string"](), "propuesta": external_exports[cx(980)]({ "carril": external_exports["string"](), "objetivo": external_exports[cx(853)](), "queda": external_exports["string"]()[cx(929)](), "separa": external_exports[cx(909)](external_exports["string"]())["optional"]() })["strict"]() })[cx(694)]())[cx(929)]() })["strict"]()["optional"]()["describe"](l[cx(584)]), "fronteras": external_exports["array"](external_exports["object"]({ "artifact": external_exports["string"](), "pone": external_exports["array"](external_exports["object"]({ "id": external_exports["string"](), "direccion": external_exports[cx(886)](["entrada", "salida"]), "mecanismo": external_exports["string"](), "contraparte": external_exports["string"](), "contrato": external_exports[cx(853)]()[cx(929)](), "impacta": external_exports[cx(909)](external_exports[cx(853)]())["optional"](), "rutas": external_exports[cx(909)](external_exports["string"]()) })[cx(694)]())["optional"](), "quita": external_exports["array"](external_exports["string"]())["optional"](), "ninguna": external_exports["boolean"]()["optional"]() })[cx(694)]())["optional"]()[cx(1016)](l["fronteras"]), "sinRequisito": external_exports["array"](external_exports[cx(980)]({ "artifact": external_exports[cx(853)](), "reason": external_exports[cx(853)]() })["strict"]())["optional"]()["describe"](l[cx(892)]), "lane": external_exports["object"]({ "name": external_exports["string"](), "version": external_exports[cx(853)]()["optional"]() })["strict"]()["optional"]()[cx(1016)](l["lane"]), "slug": external_exports[cx(853)]()[cx(929)]()["describe"](l[cx(812)]), "objective": external_exports[cx(853)]()["optional"]()[cx(1016)](l[cx(657)]), "optional": external_exports[cx(909)](external_exports["string"]())[cx(929)]()["describe"](l["optional"]), "urgent": external_exports["boolean"]()[cx(929)]()["describe"](l["urgent"]), "milestone": external_exports["object"]({ "kind": external_exports[cx(853)](), "detail": external_exports["string"]() })[cx(694)]()[cx(929)]()[cx(1016)](l["milestone"]), "touches": external_exports["array"](external_exports["string"]())["optional"]()["describe"](l["touches"]), "step": external_exports["string"]()["optional"]()[cx(1016)](l["step"]), "reason": external_exports[cx(853)]()["optional"]()["describe"](l["reason"]), "modo": external_exports[cx(886)](["paralelo", cx(555)])[cx(929)]()["describe"](l["modo"]), "acepta": external_exports[cx(930)]()["optional"]()[cx(1016)](l[cx(854)]), "subagentes": external_exports["boolean"]()["optional"]()[cx(1016)](l["subagentes"]), "enmienda": external_exports[cx(853)]()[cx(929)]()["describe"](l["enmienda"]), "owner": external_exports[cx(853)]()[cx(929)]()["describe"](l["owner"]), "due": external_exports[cx(853)]()[cx(929)]()["describe"](l["due"]), "evidence": external_exports[cx(909)](external_exports[cx(980)]({ "requirement": external_exports[cx(853)](), "class": external_exports["enum"]([cx(737), "report", cx(959)]), "command": external_exports["string"]()["optional"](), "output": external_exports["string"]()[cx(929)](), "exitCode": external_exports["number"]()["int"]()[cx(929)](), "on": external_exports[cx(886)]([cx(838), "change", cx(1001)])["optional"](), "source": external_exports["string"]()[cx(929)](), "reference": external_exports["string"]()[cx(929)](), "content": external_exports[cx(853)]()["optional"](), "who": external_exports[cx(853)]()[cx(929)](), "satisfies": external_exports[cx(909)](external_exports[cx(853)]())["optional"](), "defectos": external_exports[cx(909)](external_exports["string"]())["optional"]() })["strict"]())["optional"]()["describe"](l["evidence"]), "resolution": external_exports["object"]({ "kind": external_exports[cx(886)](["precedence", "revoked", "conditional", cx(808)]), "winner": external_exports["string"]()["optional"](), "revoked": external_exports[cx(853)]()[cx(929)](), "condition": external_exports["string"]()["optional"]() })[cx(694)]()[cx(929)]()[cx(1016)](l["resolution"]), "catalog": external_exports["string"]()["optional"]()[cx(1016)](l["catalog"]), "scope": external_exports["enum"]([cx(876), cx(727)])[cx(929)]()["describe"](l[cx(611)]), "desde": external_exports["string"]()[cx(929)]()[cx(1016)](l[cx(452)]), "note": external_exports["string"]()[cx(929)]()[cx(1016)](l[cx(707)]), "decision": external_exports["enum"](O)["optional"]()["describe"](l[cx(648)]), "selfReview": external_exports[cx(853)]()["optional"]()[cx(1016)](l["selfReview"]), "idioma": external_exports["enum"](["es", "en"])["optional"]()[cx(1016)](l[cx(709)]) }), ad = /* @__PURE__ */ new WeakMap(), ae = external_exports["preprocess"]((an) => e3(an, Jb)[cx(463)], ac), af = k2, ag = /* @__PURE__ */ new Set(), ah = (an) => {
    const cy = cx;
    return ag[cy(564)](resolve(an)), y(an);
  }, ai = async (an) => {
    const cz = cx, ao = an === void 0 ? void 0 : await Je(an, ag[cz(1035)](resolve(an))), ap = a5[cz(917)] !== void 0 && an !== void 0 ? await a5[cz(917)](an) : ao === void 0 ? Jb : Jg(ao);
    return { "idioma": ap, "leido": ao };
  }, aj = async (an, ao, ap) => {
    const cA = cx;
    if (an === void 0 || !isAbsolute(an) || ao === cA(789)) return void 0;
    if (!fM(an) || !await EV(an)["catch"](() => ![])) return void 0;
    return bX(JSON["stringify"]([resolve(an), cA(702)]), async () => {
      if (!fM(an)) return { "otra": !![] };
      return e7(s(an), async () => {
        const aq = await Gx(an, ap);
        if (aq === null || "negativa" in aq) return void 0;
        if ((await E0(an, aA))["length"] > 0) return void 0;
        return fO({ "action": "actualizar_almacen", "root": an, "manifiesto": aq["manifiesto"] }, a5["actualizacion"]);
      });
    });
  }, ak = async (an, ao) => {
    const cB = cx, ap = typeof an["root"] === "string" ? an[cB(614)] : void 0, aq = ad[cB(589)](an), { idioma: ar, leido: as } = aq !== void 0 ? { "idioma": aq[cB(709)], "leido": aq["leido"] } : await ai(ap);
    let at;
    const au = await j(ar, () => e7(s(ap), async () => O2(ad["get"](an)?.[cB(915)] ?? [], await (async () => {
      const cC = cB, av = ad["get"](an), { args: aw, enviados: ax } = av !== void 0 ? { "args": an, "enviados": av["enviados"] } : e3(an), ay = aw, az = (aO) => ax[cC(589)](aO) ?? aO, aA2 = av !== void 0 ? av[cC(928)] : an[cC(903)], aB = typeof aA2 === "string" ? aA2 : ay["action"], aC = Q(ay);
      if ("rechazo" in aC) return GI(aC["rechazo"]);
      const aD = aC[cC(463)], aE = await stat(aD[cC(614)])[cC(632)](() => void 0);
      if (aE === void 0 || !aE["isDirectory"]()) {
        const aO = aD[cC(614)];
        return GI(aE === void 0 ? o({ "es": "La ra\xEDz \xAB" + aO + cC(645), "en": cC(469) + aO + "\xBB does not exist: `root` is the project folder, with its absolute path." }) : o({ "es": cC(844) + aO + "\xBB no es una carpeta: `root` es la carpeta del proyecto, con su ruta absoluta.", "en": cC(469) + aO + "\xBB is not a folder: `root` is the project folder, with its absolute path." }));
      }
      if (CW(aD["root"]) && !await EV(aD[cC(614)])) return GI(CX(aD[cC(614)], (/* @__PURE__ */ new Date())[cC(862)]()));
      if (!await EV(aD["root"]) && J6(aD["root"], IT)) return GI(o(mY[cC(573)]) + ": " + o(fV()));
      const aF = aD["action"] === void 0 && Object[cC(843)](aD)["some"]((aP) => aD[aP] !== void 0 && aP !== cC(614) && q2[cC(1035)](aP)), aG = aF ? void 0 : await aj(aD[cC(614)], aD["action"], as);
      if (aG !== void 0) {
        ag[cC(620)](resolve(aD["root"]));
        if ("no" in aG) {
          if (aD["action"] !== void 0 && !r2[cC(1035)](aD[cC(903)])) return GI(aG["no"]);
          at = aG["no"];
        } else {
          const aP = { ...an }, aQ = await ai(ap);
          if (aq !== void 0) ad["set"](aP, { ...aq, "desconocidos": [], ...aQ });
          const aR = await ak(aP, ao);
          return "hecha" in aG ? N(j(aQ[cC(709)], () => fN(aG["hecha"])), aR) : aR;
        }
      }
      if (!await u(aD[cC(614)])) {
        const aS = aD["paths"] !== void 0 && aD["paths"][cC(618)] > 0, aT = await ah(aD["root"]);
        return GI(aT + (aS ? o({ "es": cC(508) + e9(".arketum/proyecto.yaml") + "`, toda llamada recibe el arranque que corresponde a la carpeta.)", "en": "\n\n(`paths` is not used: without `" + e9(cC(559)) + cC(1008) }) : ""));
      }
      const aH = aD[cC(903)] === cC(789) && D0(aD["root"]) ? void 0 : await D3(aD[cC(614)]);
      if (aH !== void 0) return GI(aH);
      if (aD["action"] !== void 0 && !r2["has"](aD[cC(903)]) && D1(aD["root"])) return GI(D4());
      if (aD[cC(903)] !== void 0 && (aD[cC(903)] === cC(789) || !r2[cC(1035)](aD["action"])) && CW(aD["root"])) return GI(CX(aD["root"], (/* @__PURE__ */ new Date())[cC(862)]()));
      const aI = await E0(aD["root"], aA), aJ = aD["action"] === cC(731) || aD[cC(903)] === "estado" || aD[cC(903)] === void 0 && aD["inventory"] === void 0 && aD[cC(501)] === void 0 && aD["artifact"] === void 0, aK = aI[cC(668)]((aU) => cC(551) + aU["file"] + ": " + aU["problem"])[cC(491)]("\n");
      if (aI[cC(618)] > 0 && !aJ) {
        const aU = o(mY[cC(802)]);
        return GI(o({ "es": aU + cC(449) + aK, "en": aU + ": these .arketum/ files do not load, and nothing goes on until they are resolved (a badly resolved merge is fixed with the project's tool; a broken format, by hand):\n" + aK }));
      }
      const aL = await (async () => {
        const cD = cC, { root: aV, paths: aW, inventory: aX, proposal: aY, selfReview: aZ, artifact: b0 } = aD, b1 = Object[cD(843)](aD)["filter"]((bg2) => aD[bg2] !== void 0 && bg2 !== cD(614)), b2 = new Set(Object["values"](M)[cD(723)]()[cD(759)]((bg2) => ![cD(888), "proposal", "selfReview", "artifact"][cD(572)](bg2)));
        if (aD[cD(903)] === void 0) {
          const bg2 = b1["filter"]((bh) => b2[cD(1035)](bh));
          if (bg2[cD(618)] > 0) {
            const bh = bg2["map"]((bj) => "`" + az(bj) + "`")["join"](", "), bi3 = q(bg2["length"], { "es": [cD(488), "valen"], "en": [cD(547), "are valid"] });
            return GI(o({ "es": bh + cD(778) + bi3 + cD(714), "en": bh + " " + bi3 + " only with `action`: inside a work unit you submit with `action: submit` and its `unit`." }));
          }
        } else {
          const bj = await Gx(aV, as);
          if (bj === null) {
            const bG = await DF(aV)["catch"](() => null) !== null;
            return GI((bG ? o(E()) + "\n\n" : "") + o({ "es": cD(646) + e9(".arketum/proyecto.yaml") + "`: el carril se resuelve desde los cat\xE1logos del proyecto.\n\n", "en": cD(1007) + e9(".arketum/proyecto.yaml") + "`: the lane is resolved from the project catalogs.\n\n" }) + await ah(aV));
          }
          if ("negativa" in bj) return GI(bj["negativa"]);
          const bk2 = /* @__PURE__ */ new Set([cD(903), ...M[aD["action"]]]), bl = b1[cD(759)]((bH) => !bk2[cD(1035)](bH)), bm = bl[cD(618)] === 0 ? "" : (() => {
            const cE2 = cD, bH = bl["map"]((bJ) => "`" + az(bJ) + "`")[cE2(491)](", "), bI = q(bl[cE2(618)], { "es": ["no se usa", cE2(858)], "en": [cE2(577), cE2(893)] });
            return o({ "es": "\n\n" + bH + " " + bI + " con `action: " + aB + "`.", "en": "\n\n" + bH + " " + bI + cE2(503) + aB + "`." });
          })(), bn = bj[cD(840)];
          if (aD[cD(903)] === "instructions") return GI(await G9(() => p(aV, bn)) + bm);
          if (aD["action"] === "status" && aD["unit"] === void 0) {
            const bH = az(cD(972)), bI = aD[cD(972)] === void 0 ? "" : o({ "es": "\n\n`" + bH + cD(767), "en": cD(998) + bH + "` is not used without `unit`: a role's package is that of a unit with an elicitation." });
            return GI(await R(aV, bn, aI[cD(618)] === 0) + bm + bI);
          }
          const bo = aD[cD(1039)] !== void 0 && aD["agent"]["trim"]() !== "" ? aD["agent"][cD(600)]() : void 0, bp = aD[cD(903)] === cD(473) ? aD[cD(869)] !== void 0 && aD["slug"] !== void 0 ? aD[cD(869)][cD(669)] + "-" + aD[cD(812)] : void 0 : aD[cD(815)], bq = bp === void 0 ? void 0 : JSON[cD(682)]([resolve(aV), bp]), br = aD["action"] === cD(447) ? void 0 : bo ?? (bq === void 0 ? void 0 : a8["get"](bq)), bs2 = process["env"][cD(701)] === cD(874) ? void 0 : a6["server"][cD(675)]()?.["name"], bt = await GL(bs2, aV);
          let bu = "";
          const bv = bt ? void 0 : a3(a6, ao?.["signal"]), bw = bv === void 0 ? void 0 : async (bJ) => {
            const cF = cD, bK = await bv(bJ);
            return "sinRespuesta" in bK && bK[cF(934)] === "decline" && await GM(bs2, aV, (/* @__PURE__ */ new Date())["toISOString"]()) && (bu = "\n\n" + GN(bs2)), bK;
          }, bx = ao?.[cD(703)]?.[cD(539)], by = bx === void 0 || ao === void 0 ? void 0 : async (bJ) => {
            const cG = cD;
            await ao[cG(735)]({ "method": "notifications/progress", "params": { "progressToken": bx, "progress": bJ } })["catch"](() => void 0);
          }, bz = await GS();
          let bA = "";
          if (bz === void 0 && (aD[cD(903)] === "open" || aD[cD(903)] === "resume")) {
            const bJ = GV(), bK = o(mY[cD(573)]), bL = bJ === void 0 ? "" : o({ "es": cD(938) + bJ + cD(857), "en": cD(983) + bJ + "\xBB, which she confirms or changes" });
            bA = o({ "es": "\n\n" + bK + ": no s\xE9 qui\xE9n decide en esta m\xE1quina. Preg\xFAntale a la persona su nombre o su correo (sin login" + bL + ") y transm\xEDtelo con `action: identity` (`name` o `email`); tambi\xE9n lo puede escribir en la tanda o en el panel. Va en cada decisi\xF3n suya; no lo inventes.", "en": "\n\n" + bK + cD(855) + bL + ") and relay it with `action: identity` (`name` or `email`); they can also write it in the batch or in the panel. It goes with each of their decisions; do not make it up." });
          }
          const bB2 = U(a6) && V();
          let bC;
          const bD = await i7({ ...aD, "action": aD["action"], "root": aV, "manifiesto": bn, "firma": { "sesion": a7, ...br === void 0 ? {} : { "agente": br } }, "aperturas": a9, "guias": aa, "dichos": ab, ...bB2 ? { "motivoDelChat": "forzado" } : bt && U(a6) ? { "motivoDelChat": cD(485) } : {}, ...bw === void 0 ? {} : { "preguntar": bw }, ...bs2 === void 0 ? {} : { "cliente": bs2 }, ...a6[cD(994)]["getClientVersion"]()?.["name"] === void 0 ? {} : { "nombreDelCliente": a6[cD(994)][cD(675)]()[cD(669)] }, ...GU(bz) === void 0 ? {} : { "quien": GU(bz) }, ...by === void 0 ? {} : { "progreso": by }, ...ao?.["signal"] === void 0 ? {} : { "senal": ao[cD(721)] }, ...aI[cD(618)] > 0 ? { "soloLectura": !![] } : {}, ...aD[cD(903)] === "open" && aD[cD(835)] !== void 0 ? { "alAbrirDesdeTema": (bM) => bC = bM } : {} }), bE = aD["action"] === "open" ? n4["test"](bD) : aD["action"] === cD(775) && r(bD, mY[cD(971)]), bF = bC !== void 0 ? JSON["stringify"]([resolve(aV), bC]) : bq;
          if (bE && bo !== void 0 && bF !== void 0 && (aD["action"] === "open" || !a8["has"](bF))) a8[cD(499)](bF, bo);
          if (aD[cD(903)] === "open" && r(bD, mY[cD(816)])) await CV(aV);
          return GI(bD + bu + bA + bm);
        }
        const b3 = await Gx(aV, as);
        if (b3 !== null && "negativa" in b3) return GI(b3[cD(1041)]);
        const b4 = b3?.["manifiesto"];
        if (b4 !== void 0 && !aX && b0 === void 0) {
          if (aW !== void 0 && aW[cD(618)] > 0) {
            const bM = aW["length"];
            return GI(o({ "es": cD(890) + aV + "/" + e9(".arketum/proyecto.yaml") + cD(571) + bM + " rutas que has listado no se usan para nada aqu\xED. Vuelve a llamar sin `paths`.", "en": cD(927) + aV + "/" + e9(cD(559)) + ", so the " + bM + cD(479) }));
          }
          return GI(await R(aV, b4, aI["length"] === 0));
        }
        let b5 = ".", b6 = aV, b7;
        if (b4 !== void 0) {
          const bN = aX?.[cD(697)] ?? b0, bO2 = b4[cD(916)][cD(668)]((bP2) => "\xAB" + bP2["id"] + "\xBB")["join"](", ");
          if (bN === void 0) return GI(b4["artifacts"][cD(618)] === 0 ? o({ "es": "Este proyecto todav\xEDa no declara ning\xFAn artefacto: los decide la arquitectura de una unidad del carril `new`.", "en": "This project does not declare any artifact yet: they are decided by the architecture of a unit in the `new` lane." }) : o({ "es": "Falta `artifact`: di a qu\xE9 artefacto pertenece lo que entregas. Este proyecto declara " + bO2 + ".", "en": cD(598) + bO2 + "." }));
          b7 = b4[cD(916)][cD(666)]((bP2) => bP2["id"] === bN);
          if (b7 === void 0) return GI(o({ "es": "El artefacto \xAB" + bN + "\xBB no est\xE1 declarado en " + e9(cD(559)) + ". Los que hay son " + bO2 + ".", "en": cD(743) + bN + cD(912) + e9(".arketum/proyecto.yaml") + ". The ones there are " + bO2 + "." }));
          b5 = b7["id"], b6 = b7["root"] === "." ? aV : join(aV, b7[cD(614)]);
        }
        const b8 = b4 === void 0 && b0 !== void 0 && b0 !== "." && aX?.["artifact"] === void 0 ? o({ "es": cD(489) + b0 + "\xBB no se usa: sin " + e9(".arketum/proyecto.yaml") + " hay un solo artefacto.", "en": cD(986) + b0 + "\xBB is not used: without " + e9(cD(559)) + " there is a single artifact." }) : aX?.[cD(697)] !== void 0 && b0 !== void 0 && b0 !== aX[cD(697)] ? o({ "es": "\n\nEl `artifact` \xAB" + b0 + cD(570) + aX["artifact"] + "\xBB.", "en": cD(986) + b0 + cD(914) + aX[cD(697)] + "\xBB." }) : "", b9 = aX === void 0 ? void 0 : { ...aX, "artifact": aX["artifact"] ?? b5 };
        if (aY !== void 0 && aY["baseline"] === void 0) return GI(o({ "es": "`proposal` necesita `baseline` fuera de una unidad: el inventario de partida contra el que se mide el cambio.", "en": cD(837) }));
        const ba2 = aY === void 0 ? void 0 : { ...aY, "baseline": { ...aY["baseline"], "artifact": aY[cD(1024)]["artifact"] ?? b5 } }, bb = Gj(aV, b5), bc = (bP2) => GI(Gt(bb, bP2) + b8);
        let bd = Gd[cD(589)](bb);
        if (!bd) {
          if (b7 === void 0) {
            const bQ = await DF(aV);
            if (bQ === null) {
              const bT = aW === void 0 || aW[cD(618)] === 0, bU = await v(), bV = bT ? await x(aV, bU) : void 0;
              if (bV !== void 0 && bV["tipo"] !== "nuevo") return bc(await ah(aV));
              const bW = bV?.[cD(995)] === cD(958) ? bV["so"] : await x(aV, bU)["then"]((bX2) => bX2["tipo"] === "nuevo" ? bX2["so"] : []);
              return ag["add"](resolve(aV)), bc(o2(aV, aW) + "\n\n" + H(aV, bU, bW));
            }
            const bR = await J(aV, bQ, "vigente");
            if ("negativa" in bR) return bc(bR["negativa"]);
            const bS = await DB(aV);
            bd = up(bR["archetype"], ".", bS?.[cD(985)] ?? []);
          } else {
            const bX2 = await GH(aV, b4, b7);
            if (cD(1041) in bX2) return bc(bX2["negativa"]);
            let bY;
            try {
              bY = await Ei(aV, b7["id"]);
            } catch (bZ) {
              const c0 = b7["id"], c1 = bZ[cD(976)]["split"]("\n")[0];
              return bc(o({ "es": "No se puede descender \xAB" + c0 + cD(495) + Db("intenciones", c0 + cD(954)) + cD(781) + c1 + cD(554), "en": cD(706) + c0 + cD(495) + Db(cD(464), c0 + cD(954)) + cD(630) + c1 + "). Fix it by hand and submit again." }));
            }
            bd = up(bX2[cD(820)], b7["id"], bY?.[cD(985)] ?? [], void 0, { "resolutions": bY?.[cD(581)] ?? [] });
          }
          const bP2 = Gd[cD(589)](bb);
          if (bP2 !== void 0) bd = bP2;
          else Gd["set"](bb, bd), Gi[cD(499)](bb, b6);
        }
        b6 = Gi[cD(589)](bb) ?? b6;
        const be2 = relative(aV, b6) || ".", bf = { "root": aV, "clave": bb, "raizDelArbol": b6, "guardado": Gk(b5), "leer": () => DS(aV, b5), "escribir": (c2) => DT(aV, c2, b5), ...b4 === void 0 || be2 !== "." || Gc(b4, b5) === void 0 ? {} : { "excluir": Gc(b4, b5) } };
        bd = await Gs(aV, bd);
        if (b7 === void 0) {
          const c2 = await K(aV, bd, b9);
          if (c2 !== void 0 && cD(1041) in c2) return bc(c2["negativa"]);
          bd = c2 === void 0 ? bd : { ...bd, "migracion": c2 };
        }
        if (!Gg[cD(1035)](bb)) {
          bd = await Gr(bf, bd);
          if (b7 === void 0) {
            const c3 = await K(aV, bd, b9);
            if (c3 !== void 0 && "negativa" in c3) return bc(c3[cD(1041)]);
            bd = { ...bd, "migracion": c3 };
          }
        } else {
          const c4 = Gd[cD(589)](bb);
          if (c4 !== void 0 && (c4["level"] !== bd[cD(973)] || JSON["stringify"](c4[cD(621)]) !== JSON[cD(682)](bd[cD(621)]))) {
            bd = { ...c4, "autonomy": bd[cD(468)] };
            if (b7 === void 0) {
              const c5 = await K(aV, bd, b9);
              if (c5 !== void 0 && "negativa" in c5) return bc(c5["negativa"]);
              bd = { ...bd, "migracion": c5 };
            }
          }
        }
        Gd["set"](bb, bd);
        if (aW !== void 0 && aW[cD(618)] > 0 && !b9) {
          const c6 = aW[cD(618)];
          return bc(o({ "es": cD(890) + aV + cD(981) + c6 + cD(804), "en": "This project already declares its policy in " + aV + "/.arketum/, so the " + c6 + " paths you listed are not used for anything here: proposing a policy only makes sense where there is none. Call again without `paths`.\n\n" }) + Go(bd["archetype"], bd[cD(973)]));
        }
        if (!b9) {
          const c7 = b7 === void 0 ? await Ds(aV) : cD(1006);
          if (c7 === "migracion" && bd[cD(667)] !== void 0) return bc(I(bd["archetype"]["name"], bd["migracion"][cD(647)][cD(669)], bd[cD(667)]["plan"]));
          const c8 = uD(bd), c9 = dr(bd["archetype"]), ca = bd["level"], cb = c9[cD(668)]((cd) => cD(551) + cd[cD(941)] + ": " + cd["problem"])[cD(491)]("\n"), cc = o(mY[cD(674)]);
          return bc((b7 === void 0 ? o(E()) + "\n\n" : "") + o({ "es": "modo=" + ha("modoDelArquetipo", c7) + cD(742) + ca + "  avance=" + c8[cD(1023)] + "/" + c8[cD(537)] + "\n\n", "en": "mode=" + ha(cD(507), c7) + "  level=" + ca + cD(830) + c8["completed"] + "/" + c8[cD(537)] + "\n\n" }) + (b7 === void 0 ? "" : o({ "es": cD(574) + b7["id"] + "\xBB, ra\xEDz `" + be2 + "`: las rutas que declares (`location`, y las de un delta) son relativas a esa ra\xEDz, igual que los patrones de su arquetipo.\n\n", "en": cD(1018) + b7["id"] + cD(631) + be2 + cD(771) })) + Go(bd[cD(820)], bd["level"]) + (c9["length"] > 0 ? o({ "es": "\n\n" + cc + " del arquetipo:\n" + cb, "en": "\n\n" + cc + cD(975) + cb }) : ""));
        }
        return bc(await Gq(bf, bd, b9, ba2, aZ));
      })();
      if (aI[cC(618)] === 0) return aL;
      const aM = o(mY["estadoIlegible"]), aN = aL[cC(695)][cC(668)]((aV) => aV["text"])[cC(491)]("\n");
      return GI(o({ "es": aN + "\n\n" + aM + cC(764) + aK, "en": aN + "\n\n" + aM + ": these .arketum/ files do not load:\n" + aK }));
    })())));
    return N(at, au);
  };
  a6[cx(880)](cx(613), { "description": af, "inputSchema": ae }, ak);
  let al;
  const am = () => al ??= e6(external_exports[cx(582)](ac, { "io": cx(671), "target": cx(634) }));
  return a6[cx(994)]["removeRequestHandler"]("tools/list"), a6["server"]["setRequestHandler"](ListToolsRequestSchema, () => ({ "tools": [{ "name": cx(613), "description": af, "inputSchema": structuredClone(am()) }] })), a6["server"][cx(734)](cx(744)), a6[cx(994)]["setRequestHandler"](CallToolRequestSchema, async (an, ao) => {
    const cH = cx;
    try {
      if (an["params"][cH(669)] !== cH(613)) throw new McpError(ErrorCode["InvalidParams"], cH(765) + an[cH(684)][cH(669)] + cH(718));
      const ap = an["params"]["arguments"] ?? {}, { args: aq, enviados: ar } = e3(ap, Jb), as = Object[cH(843)](aq)["filter"]((aw) => !Object[cH(768)](ac[cH(828)], aw)), { idioma: at, leido: au } = await ai(typeof aq["root"] === cH(853) ? aq[cH(614)] : void 0), av = j(at, () => ac[cH(988)](aq));
      if (!av[cH(643)]) {
        const aw = P(av[cH(794)]["issues"])["map"]((ax) => ax[cH(968)]["length"] === 0 ? ax[cH(896)] : ax[cH(896)] + " at " + kZ(ax["ruta"])[cH(491)]("."))["join"]("\n");
        throw new McpError(ErrorCode["InvalidParams"], "Input validation error: Invalid arguments for tool build: " + aw);
      }
      return ad[cH(499)](av[cH(865)], { "enviados": ar, "accion": ap["action"], "desconocidos": as, "idioma": at, "leido": au }), await ak(av[cH(865)], ao);
    } catch (ax) {
      return { "content": [{ "type": "text", "text": ax instanceof Error ? ax[cH(976)] : String(ax) }], "isError": !![] };
    }
  }), a6;
}
var M2 = (a5) => ({ "es": a5 + ": no es un par\xE1metro de `build` en ning\xFAn idioma, y no se usa.", "en": a5 + cf(798) });
function N(a5, a6) {
  const cI = cf;
  if (a5 === void 0) return a6;
  return { "content": a6["content"]["map"]((a7, a8) => a8 === a6["content"][cI(618)] - 1 ? { ...a7, "text": a7["text"] + "\n\n" + a5 } : a7) };
}
function O2(a5, a6) {
  const cJ = cf;
  if (a5["length"] === 0) return a6;
  const a7 = o(M2(a5["map"]((a8) => "`" + a8 + "`")[cJ(491)](", ")));
  return { "content": a6["content"]["map"]((a8, a9) => a9 === a6["content"][cJ(618)] - 1 ? { ...a8, "text": a8[cJ(1033)] + "\n\n" + a7 } : a8) };
}
function P(a5, a6 = []) {
  return a5["flatMap"]((a7) => {
    const cK = b, a8 = [...a6, ...a7[cK(939)]];
    if (a7[cK(881)] === "invalid_union" && a7[cK(541)]["length"] > 0) {
      const aa = a7["errors"]["find"]((ab) => ab[cK(618)] > 0 && ab[cK(591)]((ac) => ac[cK(939)]["length"] > 0)) ?? a7[cK(541)][0];
      return P(aa, a8);
    }
    const a9 = a7[cK(881)] === "invalid_value" ? cK(997) + l0(a8, a7["values"])[cK(668)]((ab) => JSON["stringify"](ab))[cK(491)]("|") : a7["message"];
    return [{ "mensaje": a9, "ruta": a8 }];
  });
}
function Q(a5) {
  const cM = cf, { root: a6, ...a7 } = a5, a8 = (ab) => {
    const cL = b, ac = /^evidence\[(\d+)\]\.(output|content)$/["exec"](ab);
    if (ac === null) return ![];
    const ad = a5["evidence"]?.[Number(ac[1])] ?? {};
    return ac[2] === "output" && ad[cL(1022)] === cL(737) || ac[2] === "content" && ad["class"] === cL(514);
  }, a9 = bO(a7, a8);
  if (a9[cM(785)][cM(618)] > 0) return { "rechazo": bP(a9["rechazados"], a5[cM(903)] === cM(800) ? "persona" : "agente") };
  const aa = { ...a9[cM(698)], "root": a6 };
  if (a9[cM(845)]["length"] > 0 && Array[cM(726)](aa[cM(484)])) {
    const ab = new Set(a9["redactados"][cM(668)]((ac) => Number(/^evidence\[(\d+)\]/["exec"](ac)?.[1])));
    aa["evidence"] = aa[cM(484)][cM(668)]((ac, ad) => ab[cM(1035)](ad) ? { ...ac, "redactada": !![] } : ac);
  }
  return { "args": aa };
}
function R(a5, a6, a7 = !![]) {
  return G9(() => S(a5, a6, a7));
}
async function S(a5, a6, a7) {
  const cN = cf, a8 = [await ec(a5, a6), "", .../* @__PURE__ */ ((aj) => aj === void 0 ? [] : [aj, ""])(await dR2(a5)), o({ "es": "Proyecto \xAB" + a6[cN(669)] + cN(495) + a6["artifacts"]["length"] + cN(654), "en": cN(636) + a6[cN(669)] + "\xBB: " + a6["artifacts"]["length"] + " artifact(s)." }) + (a6["forma"] === void 0 ? "" : ((aj) => o({ "es": cN(766) + aj + " (la aprob\xF3 un levantamiento).", "en": " System shape: " + aj + " (approved by an elicitation)." }))(bi(a6["forma"]))), ""], a9 = [...fW(a5, (/* @__PURE__ */ new Date())["toISOString"]())];
  if (D2(a5) === 2) {
    const aj = await J3(a5, 2);
    if (aj["length"] > 0) {
      const ak = "" + aj[cN(493)](0, 5)[cN(668)]((al) => "`" + al + "`")["join"](", ") + (aj[cN(618)] > 5 ? "\u2026" : "");
      a9["push"](o({ "es": cN(660) + aj["length"] + cN(773) + ak + cN(649), "en": "there are " + aj["length"] + " entr(ies) with format 1 names in a format 2 store (" + ak + cN(817) }));
    }
  }
  const aa = W();
  if (aa !== void 0) a9[cN(638)](aa);
  const ab = await GF(a5, a6)["catch"]((al) => ({ "negativa": al["message"] }));
  if ("negativa" in ab) a9[cN(638)](ab[cN(1041)]);
  else a9["push"](...AX(ab, k()));
  const ac = /* @__PURE__ */ new Map();
  for (const al of a6[cN(916)]) {
    const am = al[cN(614)] === "." ? a5 : join(a5, al["root"]), an = h6(al);
    ac["set"](al["id"], o({ "es": "- \xAB" + al["id"] + "\xBB en `" + al[cN(614)] + "`, arquetipo pedido: " + an, "en": cN(588) + al["id"] + "\xBB at `" + al["root"] + cN(842) + an })), a8["push"](ac["get"](al["id"]));
    const ao = Gd["get"](Gj(a5, al["id"]));
    if (ao !== void 0) {
      const ar = Gi["get"](Gj(a5, al["id"])), as = relative(a5, ar ?? a5) || ".", at = ar !== void 0 && ar !== am ? o({ "es": ", con la ra\xEDz con que se abri\xF3: `" + as + "`", "en": ", with the root it was opened with: `" + as + "`" }) : "", { name: au, version: av } = ao["archetype"], aw = dD(ao[cN(820)]), ax = ao["level"];
      a8["push"](o({ "es": "  en sesi\xF3n: " + au + " " + av + " (" + aw + "), nivel " + ax + at, "en": "  in session: " + au + " " + av + " (" + aw + cN(803) + ax + at }));
    } else {
      if (!(cN(1041) in ab)) try {
        const ay = h1(al, a6["forma"], ab);
        a8["push"](o({ "es": "  resuelto: " + ay[cN(669)] + " " + ay[cN(605)] + cN(904) + ay["root"] + " (" + ha(cN(544), ay[cN(724)]) + cN(504) + ay[cN(670)], "en": cN(597) + ay["name"] + " " + ay["version"] + " from " + ay["root"] + " (" + ha(cN(544), ay[cN(724)]) + cN(504) + ay["huella"] }));
        if (ay["capas"] !== void 0) {
          const { forma: az, stack: aA2 } = ay["capas"];
          a8[cN(638)](o({ "es": "  compuesto de la forma \xAB" + az[cN(669)] + "\xBB " + az[cN(605)] + " (" + ha("confianza", az[cN(724)]) + ") y el stack \xAB" + aA2[cN(669)] + "\xBB " + aA2["version"] + " de " + aA2["root"] + " (" + ha(cN(544), aA2["trust"]) + ")", "en": cN(450) + az["name"] + "\xBB " + az[cN(605)] + " (" + ha(cN(544), az["trust"]) + ") and the stack \xAB" + aA2["name"] + "\xBB " + aA2[cN(605)] + cN(964) + aA2[cN(614)] + " (" + ha("confianza", aA2[cN(724)]) + ")" }));
        }
      } catch (aB) {
        const aC = aB[cN(976)]["split"]("\n")[cN(491)](" ");
        a8[cN(638)](o({ "es": cN(585) + aC, "en": "  DOES NOT RESOLVE: " + aC }));
      }
    }
    const ap = Gk(al["id"]);
    let aq = null;
    try {
      aq = await DS(a5, al["id"]);
    } catch (aD) {
      const aE = aD[cN(976)]["split"]("\n")[0];
      a8[cN(638)](o({ "es": cN(661) + ap + cN(790) + aE, "en": cN(831) + ap + "`, cannot be read: " + aE }));
    }
    if (aq !== null) try {
      const aF = kB(aq), aG = cw["filter"]((aI) => aF["accepted"][aI] !== void 0), aH = aG[cN(618)] > 0 ? aG["join"](", ") : o({ "es": "nada aceptado", "en": cN(813) });
      a8["push"](o({ "es": cN(661) + ap + cN(637) + aH + " (fuera de una unidad)", "en": "  saved in `" + ap + "`: " + aH + " (outside a unit)" }));
    } catch (aI) {
      const aJ = aI[cN(976)][cN(860)]("\n")[0];
      a8[cN(638)](o({ "es": cN(661) + ap + cN(595) + aJ, "en": "  saved in `" + ap + cN(1038) + aJ }));
    }
  }
  const ad = async (aK, aL, aM) => {
    const cO = cN;
    try {
      const aN = await aK();
      if (aN !== null && aN !== ![]) a9[cO(638)](o(aM));
    } catch (aO) {
      const aP = aO["message"][cO(860)]("\n")[0];
      a9[cO(638)](o({ "es": cO(609) + aL + " existe pero no se puede leer: " + aP, "en": cO(609) + aL + cO(895) + aP }));
    }
  };
  await ad(() => DF(a5), "archetype.yaml", { "es": cN(561), "en": cN(522) }), await ad(() => DG(a5), cN(576), { "es": "Hay un " + e9(".arketum/intentions.yaml") + ": con proyecto no se usa; las intenciones van por artefacto en " + e9(cN(969)) + ". Queda uno viejo sin repartir.", "en": "There is a " + e9(".arketum/intentions.yaml") + ": with a project it is not used; intentions go per artifact in " + e9(".arketum/intenciones/") + cN(596) });
  for (const aK of a6["artifacts"]) {
    try {
      const aL = await bi2(a5, aK["id"]);
      if (aL === null) continue;
      const aM = sI([aK["id"]], { [aK["id"]]: aL[cN(985)] }, { [aK["id"]]: aL[cN(581)] }), aN = aL["intentions"]["length"], aO = aM[cN(618)], aP = aO === 0 ? o({ "es": "  intenciones: " + aN, "en": "  intentions: " + aN }) : o({ "es": "  intenciones: " + aN + ", " + aO + cN(936), "en": "  intentions: " + aN + ", " + aO + cN(641) }), aQ = a8["indexOf"](ac["get"](aK["id"]) ?? "");
      if (aQ === -1) a8["push"](cN(588) + aK["id"] + "\xBB", aP);
      else a8[cN(550)](aQ + 1, 0, aP);
    } catch (aR) {
      const aS = aR[cN(976)][cN(860)]("\n")[0];
      a9["push"](o({ "es": Db("intenciones", aK["id"] + ".yaml") + " no se puede leer: " + aS, "en": Db(cN(464), aK["id"] + ".yaml") + cN(587) + aS }));
    }
  }
  await ad(() => DH(a5), cN(569), { "es": cN(780), "en": cN(772) });
  if (!(cN(1041) in ab)) {
    const aT = h(a6, ab), aU = i(aT), aV = sX(ab);
    for (const aW of aV["problemas"]) a9[cN(638)](o({ "es": cN(455) + aW, "en": cN(594) + aW }));
    for (const aX of aV["instrucciones"]) {
      try {
        const aY = (await stat(join(a5, aX)))["size"] !== Buffer[cN(599)](aT) || i(await readFile(join(a5, aX))) !== aU;
        aY && a9["push"](o({ "es": aX + " no es el que se generar\xEDa ahora con la pol\xEDtica vigente: regen\xE9ralo con `action: instructions` y escr\xEDbelo t\xFA", "en": aX + " is not the one that would be generated now with the current policy: regenerate it with `action: instructions` and write it yourself" }) + (a6[cN(1034)][cN(572)](aX) ? "." : o({ "es": cN(757) + e9(cN(531)) + cN(898), "en": " (and declare it in the scaffolding of `" + e9(cN(531)) + cN(1004) })));
      } catch {
      }
    }
  }
  if (!("negativa" in ab)) a9["push"](...h7(a6, ab));
  for (const aZ of await bs(a5, a6)) {
    a9[cN(638)](o({ "es": "la entrada \xAB" + aZ + cN(529) + e9("proyecto.yaml") + "` (quitarla es un cambio de pol\xEDtica que decide la persona)", "en": cN(549) + aZ + "\xBB does not exist: restore it or remove it from `entrada:` in `" + e9("proyecto.yaml") + cN(650) }));
  }
  a9["push"](...await ba(a5, a6[cN(916)][cN(668)]((b0) => b0["id"])));
  for (const b0 of gw(a6, a5, Gv(), GC(), GB)) {
    a9["push"](gx(b0));
  }
  if (!(cN(1041) in ab)) for (const b1 of ab[cN(759)]((b2) => b2["enLugarDe"] !== void 0)) {
    const b2 = ((b3) => b3 === "" || b3["startsWith"]("..") ? b1[cN(966)] : b3)(relative(a5, b1["enLugarDe"]));
    a9["push"](o({ "es": "el cat\xE1logo \xAB" + b2 + cN(696) + e9("proyecto.yaml") + "` no existe: se lee en su lugar el cat\xE1logo de ejemplo que trae Arketum, con su 1.x congelado detr\xE1s. Si esa carpeta era una copia tuya, rest\xE1urala; si no, " + o(gy("example")), "en": "the catalog \xAB" + b2 + "\xBB in `" + e9("proyecto.yaml") + "` does not exist: the example catalog Arketum ships is read in its place, with its frozen 1.x behind it. If that folder was your own copy, restore it; otherwise, " + o(gy("example")) }));
  }
  if (a7) a9["push"](...await ee(a5, a6));
  if (a9["length"] > 0) a8["push"]("", o(mY[cN(674)]) + ":", ...a9["map"]((b3) => "  - " + b3));
  const ae = await e82(a5, a6);
  a8[cN(638)]("", ae[cN(618)] === 0 ? o({ "es": cN(918), "en": cN(1012) }) : o({ "es": "Unidades de trabajo:", "en": cN(891) }), ...ae);
  const af = await ed(a5, a6);
  if (af !== "") a8[cN(638)]("", af);
  a8["push"]("", await cE(a5)["catch"](() => o({ "es": "\xDAltima pasada cerrada de la auditor\xEDa del proyecto: no se pudo leer el registro.", "en": cN(987) })));
  const ag = await bk(a5, a6);
  a8[cN(638)]("", ...te(a6[cN(669)], await be(a5, a6), ag["length"]));
  if (ag["length"] > 0) {
    const b3 = ag["length"], b4 = ag["map"]((b5) => b5[cN(480)] + ": " + Object["keys"](b5["artefactos"])[cN(491)](", "))["join"]("; ");
    a8[cN(638)]("", o({ "es": "Ajustes sin comprobar: " + b3 + " (" + b4 + cN(970), "en": cN(1e3) + b3 + " (" + b4 + cN(833) }));
  }
  const ah = await dp(a5, a6)["catch"](() => "");
  if (ah !== "") a8["push"]("", ah);
  a8[cN(638)]("", await bg(a5, a6)), a8[cN(638)]("", await bB(a5, a6));
  const ai = await dB(a5, a6);
  if (ai !== "") a8["push"]("", ai);
  return a8[cN(638)]("", o({ "es": "Para trabajar dentro de una unidad: `action: open` (o `resume` con su `unit`). Fuera de una unidad, llama con `artifact` (o entrega un inventario con su `artifact`).", "en": cN(993) })), a8[cN(491)]("\n");
}
var T = 30 * 60 * 1e3;
var U = (a5) => a5[cf(994)]["getClientCapabilities"]()?.["elicitation"]?.[cf(885)] !== void 0;
var V = () => process[cf(725)]["ARKETUM_GATES"] === "chat";
function W() {
  const cP = cf, a5 = process[cP(725)]["ARKETUM_GATES"];
  if (a5 === void 0 || a5 === "" || a5 === "chat" || a5 === cP(874)) return void 0;
  return o({ "es": cP(957) + a5 + cP(719), "en": "`ARKETUM_GATES` is \xAB" + a5 + "\xBB, which is not a valid value, and it is ignored: the valid ones are `chat` (ask through the chat even if the client declares the form) and `formulario` (always try the form, without remembering a client that returned it without an answer)." });
}
function X(a5, a6) {
  const cQ = cf;
  return { "etiquetas": a5["map"]((a7) => o(a6(a7))), "codigo": (a7) => typeof a7 === cQ(853) ? a5["find"]((a8) => a7 === a8 || a7 === a6(a8)["es"] || a7 === a6(a8)["en"]) : void 0 };
}
var Y = (a5) => (a6) => ({ "es": a6, "en": l3(a5, a6) });
var Z = (a5) => a5 === "no_entiendo" ? h9["opcionDeGate"][cf(795)] : Y(["decision"])(a5);
var a0 = { "aprobado": { "es": "s\xED", "en": cf(629) }, "rechazado": { "es": "no", "en": "no" } };
var a1 = { "si": { "es": "s\xED", "en": "yes" }, "no": { "es": "no", "en": "no" }, "despues": { "es": "despu\xE9s", "en": cf(776) } };
var a2 = { "decline": { "es": cf(961), "en": "the client returned the form without an answer: it may not have shown it" }, "cancel": { "es": cf(722), "en": "no answer (the form was cancelled)" }, "vencimiento": { "es": cf(848), "en": "no answer (the wait timed out)" } };
function a3(a5, a6) {
  if (!U(a5) || V()) return void 0;
  return async (a7) => {
    const cR = b, a8 = Number(process[cR(725)][cR(769)]), a9 = Number[cR(692)](a8) && a8 > 0 ? a8 : T, aa = a7["siNo"] === !![] ? X([cR(710), cR(560)], (ag) => a0[ag]) : X([...a7[cR(1032)], ...a7[cR(517)] === !![] ? ["no_entiendo"] : []], Z), ab = X(Object[cR(843)](a1), (ag) => a1[ag]), ac = X(a7["alcances"], Y([cR(611)])), ad = X(a7["requisito"]?.[cR(527)] ?? [], Y([cR(635)])), ae = { "decision": a7["siNo"] === !![] ? { "type": cR(853), "title": o({ "es": cR(494), "en": cR(784) }), "enum": aa["etiquetas"] } : { "type": cR(853), "title": o({ "es": cR(686), "en": "Decision" }), "enum": aa[cR(963)] } };
    if (a7["noEntiendo"] === !![]) ae["duda"] = { "type": cR(853), "title": o({ "es": "Si no entiendes: qu\xE9 no entiendes", "en": cR(465) }) };
    const af = a7[cR(447)];
    af !== void 0 && (delete ae["decision"], af[cR(732)]((ag, ah) => ae["r" + ah] = { "type": cR(853), "title": ag[cR(910)], "description": ag["id"], "enum": ab["etiquetas"] }), ae["porque"] = { "type": "string", "title": o({ "es": "Si alguno no es lo que quer\xEDas: qu\xE9 falla", "en": "If any is not what you wanted: what is wrong" }) });
    if (a7[cR(1032)][cR(572)](cR(953))) {
      const ag = o(Z("ajustar"));
      ae[cR(787)] = { "type": "string", "title": o({ "es": cR(608), "en": cR(505) }), "description": o({ "es": cR(458) + ag + "\xBB, qu\xE9 ajustar.", "en": "With \xAB" + ag + cR(705) }) };
    }
    a7[cR(448)] !== void 0 && (ae[cR(995)] = { "type": "string", "title": o({ "es": "C\xF3mo se resuelve", "en": cR(602) }), "enum": [cR(796), cR(777), "conditional", "deferred"] }, ae["gana"] = { "type": cR(853), "title": o({ "es": "Si es precedencia: cu\xE1l manda", "en": "If precedence: which one wins" }), "enum": [...a7[cR(448)]] }, ae[cR(1020)] = { "type": cR(853), "title": o({ "es": cR(628), "en": "If one is revoked: which one" }), "enum": [...a7["contradiccion"]] }, ae["condicion"] = { "type": "string", "title": o({ "es": cR(1027), "en": "If conditional: when each one applies" }) });
    if (a7[cR(818)] !== void 0) {
      ae["veredicto"] = { "type": "string", "title": o({ "es": cR(1025), "en": "What you decide" }), "enum": ad[cR(963)] };
      const ah = o({ "es": "sin e2e", "en": l3(["veredicto"], "sin_e2e") });
      ae["porque"] = { "type": cR(853), "title": o({ "es": cR(974) + ah + "\xBB)", "en": cR(859) + ah + "\xBB)" }) }, a7[cR(818)]["veredictos"][cR(572)](cR(741)) && (ae[cR(950)] = { "type": "string", "title": o({ "es": cR(578), "en": cR(967) }), ...a7["requisito"]["opciones"] === void 0 ? {} : ((ai) => ({ "description": o({ "es": cR(758) + ai, "en": "The options: " + ai }) }))(a7["requisito"][cR(823)]["join"](cR(471))) });
    }
    a7[cR(542)] !== void 0 && a7[cR(542)][cR(618)] > 0 && (ae[cR(956)] = { "type": cR(853), "title": o({ "es": cR(680), "en": "If you approve: catalog where the archetype is published" }), "enum": [...a7["catalogos"]] });
    if (a7["alcances"][cR(618)] > 0) {
      ae[cR(513)] = { "type": "string", "title": o({ "es": "Si rechazas: \xBFse mantiene o se quita?", "en": cR(824) }), "enum": ac["etiquetas"] };
      if (a7[cR(996)]["includes"]("mantener")) ae["motivo"] = { "type": cR(853), "title": o({ "es": "Si se mantiene: por qu\xE9 se rechaza", "en": "If kept: why it is rejected" }) };
      a7["desde"]["length"] > 0 && (ae[cR(452)] = { "type": "string", "title": o({ "es": cR(826), "en": "If the reason questions an earlier step: which one to resume from" }), "enum": [...a7[cR(452)]] }), a7[cR(925)][cR(618)] > 0 && (ae[cR(925)] = { "type": cR(853), "title": o({ "es": cR(850), "en": cR(745) }), "description": ((ai) => o({ "es": cR(545) + ai, "en": cR(453) + ai }))(a7[cR(925)]["join"](", ")) });
    }
    try {
      if (a7["idioma"] === !![]) {
        const ar = await a5[cR(994)]["elicitInput"]({ "mode": "form", "message": a7["mensaje"], "requestedSchema": { "type": "object", "properties": { "language": { "type": "string", "title": cR(472), "enum": Object["keys"](g3) } }, "required": [cR(656)] } }, a6 === void 0 ? { "timeout": a9 } : { "timeout": a9, "signal": a6 });
        if (ar[cR(903)] !== "accept") {
          const at = ar["action"] === cR(882) ? cR(882) : cR(607);
          return { "sinRespuesta": o(a2[at]), "causa": at };
        }
        const as = ar["content"]?.["language"];
        if (typeof as !== cR(853) || !Object["hasOwn"](g3, as)) return { "sinRespuesta": o({ "es": cR(814), "en": cR(834) }), "causa": cR(756) };
        return { "decision": cR(710), "idioma": g3[as] };
      }
      let ai = a7[cR(896)], aj;
      for (let au = 0; au < 2; au += 1) {
        aj = await a5["server"][cR(633)]({ "mode": cR(885), "message": ai, "requestedSchema": { "type": cR(980), "properties": ae, "required": af === void 0 ? ["decision"] : af[cR(668)]((aA2, aB) => "r" + aB) } }, a6 === void 0 ? { "timeout": a9 } : { "timeout": a9, "signal": a6 });
        if (aj["action"] !== cR(797)) break;
        const av = Object["fromEntries"](Object[cR(502)](aj[cR(695)] ?? {})["filter"](([, aA2]) => typeof aA2 === "string")), aw = bO(av, () => ![])[cR(785)];
        if (aw[cR(618)] === 0) break;
        if (au === 1) {
          const aA2 = bP(aw, "persona");
          return { "sinRespuesta": o({ "es": "no hubo respuesta v\xE1lida: " + aA2, "en": "no valid answer: " + aA2 }), "causa": cR(889) };
        }
        const ax = aw[cR(668)]((aB) => "\xAB" + aB[cR(520)] + "\xBB")[cR(491)](", "), ay = [...new Set(aw[cR(825)]((aB) => aB[cR(944)]))][cR(491)](", "), az = a7["mensaje"];
        ai = o({ "es": ax + cR(810) + ay + "), y Arketum nunca guarda un secreto. No se ha registrado nada: vuelve a responder sin el valor (con su referencia, `<esquema>:<ruta>`, si hace falta).\n\n" + az, "en": ax + ": what you wrote looks like a secret (" + ay + cR(1015) + az });
      }
      if (aj === void 0 || aj[cR(903)] !== cR(797)) {
        const aB = aj?.[cR(903)] === "decline" ? "decline" : "cancel";
        return { "sinRespuesta": o(a2[aB]), "causa": aB };
      }
      const ak = aj[cR(695)] ?? {};
      if (af !== void 0) {
        const aC = Object["fromEntries"](af[cR(668)]((aE, aF) => [aE["id"], ab[cR(829)](ak["r" + aF]) ?? "despues"])), aD = typeof ak["porque"] === cR(853) && ak["porque"]["trim"]() !== "" ? ak[cR(991)] : void 0;
        return { "decision": cR(710), "tanda": aC, ...aD === void 0 ? {} : { "porque": aD } };
      }
      const al = aa["codigo"](ak[cR(648)]);
      if (a7["noEntiendo"] === !![] && al === "no_entiendo") {
        const aE = typeof ak["duda"] === cR(853) && ak[cR(733)][cR(600)]() !== "" ? ak["duda"]["trim"]() : void 0;
        return { "sinRespuesta": o({ "es": cR(749), "en": cR(483) }), "causa": cR(979), ...aE === void 0 ? {} : { "duda": aE } };
      }
      const am = al;
      if (typeof am !== "string" || !a7["decisiones"][cR(572)](am)) return { "sinRespuesta": o({ "es": "no hubo respuesta (la respuesta no tra\xEDa una decisi\xF3n v\xE1lida)", "en": cR(451) }), "causa": "invalida" };
      const an = (aF) => typeof ak[aF] === "string" && ak[aF]["trim"]() !== "" ? ak[aF] : void 0, ao = ac[cR(829)](ak[cR(513)]), ap = ak[cR(925)], aq = Array[cR(726)](ap) ? ap[cR(759)]((aF) => typeof aF === cR(853)) : typeof ap === cR(853) ? ap[cR(860)](",")["map"]((aF) => aF["trim"]())[cR(759)]((aF) => aF !== "") : [];
      if (a7[cR(818)] !== void 0) {
        const aF = ad[cR(829)](ak[cR(635)]);
        if (aF === void 0) return { "sinRespuesta": o({ "es": cR(819), "en": "no answer (the response did not carry a valid verdict)" }), "causa": "invalida" };
        return { "decision": "aprobado", "veredicto": aF, ...an("porque") === void 0 ? {} : { "porque": an(cR(991)) }, ...an(cR(950)) === void 0 ? {} : { "texto": an("texto") } };
      }
      if (a7[cR(448)] !== void 0) {
        const aG = an("tipo");
        if (aG !== "precedence" && aG !== cR(777) && aG !== "conditional" && aG !== "deferred") return { "sinRespuesta": o({ "es": "no hubo respuesta (la respuesta no dec\xEDa c\xF3mo se resuelve la contradicci\xF3n)", "en": "no answer (the response did not say how the contradiction is resolved)" }), "causa": cR(756) };
        return { "decision": "aprobado", "resolucion": { "kind": aG, ...an(cR(913)) === void 0 ? {} : { "winner": an("gana") }, ...an(cR(1020)) === void 0 ? {} : { "revoked": an("retira") }, ...an(cR(711)) === void 0 ? {} : { "condition": an(cR(711)) } } };
      }
      if (am !== cR(560)) return { "decision": am, ...an(cR(787)) === void 0 ? {} : { "nota": an(cR(787)) }, ...am === "aprobado" && an("catalogo") !== void 0 ? { "catalogo": an(cR(956)) } : {} };
      return { "decision": am, ...an(cR(787)) === void 0 ? {} : { "nota": an("nota") }, ...ao === cR(876) || ao === cR(727) ? { "scope": ao } : {}, ...an("motivo") === void 0 ? {} : { "motivo": an("motivo") }, ...an("desde") === void 0 ? {} : { "desde": an(cR(452)) }, ...aq[cR(618)] === 0 ? {} : { "tocados": aq } };
    } catch (aH) {
      if (a6?.["aborted"] === !![]) return { "sinRespuesta": o(a2[cR(607)]), "causa": cR(607) };
      if (aH instanceof McpError && aH[cR(881)] === ErrorCode[cR(593)]) return { "sinRespuesta": o(a2["vencimiento"]), "causa": "vencimiento" };
      if (aH instanceof McpError && aH[cR(881)] === ErrorCode["InvalidParams"]) return { "sinRespuesta": o({ "es": cR(548) + aH[cR(976)] + ")", "en": "no answer (the response did not comply with the form: " + aH["message"] + ")" }), "causa": "invalida" };
      const aI = aH[cR(976)];
      return { "sinRespuesta": o({ "es": cR(563) + aI + ")", "en": "no answer (" + aI + ")" }), "causa": cR(794) };
    }
  };
}
async function a4() {
  const a5 = L2();
  await a5["connect"](new StdioServerTransport());
}
a4()[cf(632)]((a5) => {
  const cS = cf, a6 = a5 instanceof Error ? a5["stack"] ?? a5["message"] : String(a5);
  process["stderr"]["write"]("arketum-mcp: the server could not start.\n" + a6 + "\n"), process[cS(870)] = 1;
});
