"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('../models'),
  sequelize = _require.sequelize,
  Comment = _require.Comment,
  User = _require.User,
  CommentLike = _require.CommentLike,
  Sequelize = _require.Sequelize;
var Op = Sequelize.Op;

// 댓글 수 조회
var countTotalComments = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cardId) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Comment.count({
            where: {
              card_id: cardId
            }
          });
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function countTotalComments(_x) {
    return _ref.apply(this, arguments);
  };
}();

// 상위 댓글 리스트 조회
var fetchTopComments = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cardId) {
    var limit,
      topComments,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          limit = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 2;
          _context2.prev = 1;
          _context2.next = 4;
          return Comment.findAll({
            where: {
              card_id: cardId
            },
            include: [{
              model: User,
              attributes: ['userid', 'nickname']
            }],
            attributes: {
              include: [[sequelize.literal("(\n              SELECT COUNT(*)\n              FROM CommentLike AS cl\n              WHERE cl.comment_id = Comment.comment_id\n            )"), 'likeCount']]
            },
            order: [[sequelize.literal('likeCount'), 'DESC'], ['createdAt', 'DESC']],
            limit: limit
          });
        case 4:
          topComments = _context2.sent;
          return _context2.abrupt("return", topComments);
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.error('Error fetching top comments:', _context2.t0);
          throw _context2.t0;
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function fetchTopComments(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// 나머지 댓글 리스트 조회
var fetchComments = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cardId, offset) {
    var excludeIds,
      comments,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          excludeIds = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : [];
          _context3.prev = 1;
          _context3.next = 4;
          return Comment.findAll({
            where: {
              card_id: cardId,
              comment_id: _defineProperty({}, Op.notIn, excludeIds)
            },
            include: [{
              model: User,
              attributes: ['userid', 'nickname']
            }],
            attributes: {
              include: [[sequelize.literal("(\n              SELECT COUNT(*)\n              FROM CommentLike AS cl\n              WHERE cl.comment_id = Comment.comment_id\n            )"), 'likeCount']]
            },
            offset: offset,
            order: [['createdAt', 'DESC']]
          });
        case 4:
          comments = _context3.sent;
          return _context3.abrupt("return", comments);
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          console.error('Error fetching comments:', _context3.t0);
          throw _context3.t0;
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function fetchComments(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

// 댓글 조회
var getComments = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(cardId) {
    var page,
      limit,
      offset,
      totalComments,
      topComments,
      topCommentIds,
      comments,
      totalPages,
      mergedComments,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          page = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 1;
          limit = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 5;
          offset = (page - 1) * limit;
          _context4.next = 5;
          return countTotalComments(cardId);
        case 5:
          totalComments = _context4.sent;
          _context4.next = 8;
          return fetchTopComments(cardId);
        case 8:
          topComments = _context4.sent;
          topCommentIds = topComments.map(function (comment) {
            return comment.comment_id;
          }); // 나머지 댓글 최신순으로 조회, 상위 2개의 댓글 제외
          // const comments = await fetchComments(cardId, limit, offset, topCommentIds);
          // const totalPages = Math.ceil(totalComments / limit);
          _context4.next = 12;
          return fetchComments(cardId, offset, topCommentIds);
        case 12:
          comments = _context4.sent;
          totalPages = Math.ceil(totalComments / limit); // 상위 2개의 댓글을 앞에 추가
          mergedComments = [].concat(_toConsumableArray(topComments), _toConsumableArray(comments));
          return _context4.abrupt("return", {
            comments: mergedComments,
            totalPages: totalPages,
            currentPage: page
          });
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getComments(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

// 댓글 보여주기
exports.showComments = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var cardId, page, _yield$getComments, comments, totalPages, currentPage;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          cardId = req.query.card_id;
          page = parseInt(req.query.page) || 1;
          _context5.prev = 2;
          _context5.next = 5;
          return getComments(cardId, page);
        case 5:
          _yield$getComments = _context5.sent;
          comments = _yield$getComments.comments;
          totalPages = _yield$getComments.totalPages;
          currentPage = _yield$getComments.currentPage;
          if (!(req.xhr || req.headers.accept.indexOf('json') > -1)) {
            _context5.next = 13;
            break;
          }
          return _context5.abrupt("return", res.json({
            comments: comments,
            totalPages: totalPages,
            currentPage: currentPage
          }));
        case 13:
          res.render('comment', {
            comments: comments,
            currentPage: currentPage,
            totalPages: totalPages,
            user: req.user,
            cardId: cardId
          });
        case 14:
          _context5.next = 20;
          break;
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](2);
          console.error('Error fetching comments:', _context5.t0);
          res.status(500).send('Internal Server Error');
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 16]]);
  }));
  return function (_x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();

// 댓글 추가
exports.addComment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body, comment_contents, card_id, newComment, createdComment, fullComment, totalComments, totalPages;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (req.user) {
            _context6.next = 2;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            message: '현재 로그인된 유저 없음'
          }));
        case 2:
          _req$body = req.body, comment_contents = _req$body.comment_contents, card_id = _req$body.card_id;
          newComment = {
            comment_contents: comment_contents,
            userid: req.user.userId,
            card_id: card_id,
            createdAt: new Date() // 명시적으로 createdAt 값을 설정하여 일관성 유지
          };
          _context6.prev = 4;
          _context6.next = 7;
          return Comment.create(newComment);
        case 7:
          createdComment = _context6.sent;
          _context6.next = 10;
          return Comment.findByPk(createdComment.comment_id, {
            include: [{
              model: User,
              attributes: ['nickname']
            }]
          });
        case 10:
          fullComment = _context6.sent;
          _context6.next = 13;
          return Comment.count({
            where: {
              card_id: card_id
            }
          });
        case 13:
          totalComments = _context6.sent;
          totalPages = Math.ceil(totalComments / 5); // 5개씩 페이지네이션
          // 좋아요 수 포함
          fullComment.dataValues.likeCount = 0;
          res.status(201).json({
            comment: fullComment,
            totalComments: totalComments,
            totalPages: totalPages
          });
          _context6.next = 23;
          break;
        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](4);
          console.error('Error posting comment:', _context6.t0);
          res.status(500).send('Internal Server Error');
        case 23:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[4, 19]]);
  }));
  return function (_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();

// 댓글 수정
exports.editComment = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, comment_contents, comment;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (req.user) {
            _context7.next = 2;
            break;
          }
          return _context7.abrupt("return", res.status(401).json({
            message: '현재 로그인된 유저 없음'
          }));
        case 2:
          id = req.params.id;
          comment_contents = req.body.comment_contents;
          _context7.next = 6;
          return Comment.findByPk(id);
        case 6:
          comment = _context7.sent;
          if (!(comment.userid !== req.user.userId)) {
            _context7.next = 9;
            break;
          }
          return _context7.abrupt("return", res.status(403).json({
            message: 'Forbidden'
          }));
        case 9:
          comment.comment_contents = comment_contents;
          _context7.next = 12;
          return comment.save();
        case 12:
          res.status(200).json(comment);
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}();

// 댓글 삭제
exports.deleteComment = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, comment;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          if (req.user) {
            _context8.next = 2;
            break;
          }
          return _context8.abrupt("return", res.status(401).json({
            message: '현재 로그인된 유저 없음'
          }));
        case 2:
          id = req.params.id;
          _context8.next = 5;
          return Comment.findByPk(id);
        case 5:
          comment = _context8.sent;
          if (!(comment.userid !== req.user.userId)) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(403).json({
            message: 'Forbidden'
          }));
        case 8:
          _context8.next = 10;
          return comment.destroy();
        case 10:
          res.status(200).json({
            message: '삭제 완료'
          });
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();

// 좋아요 토글
exports.toggleLike = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body2, comment_id, card_id, user_id, transaction, existingLike, likeCount, _yield$getComments2, comments, totalPages, currentPage;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          if (req.user) {
            _context9.next = 2;
            break;
          }
          return _context9.abrupt("return", res.status(401).json({
            message: '로그인이 필요합니다. '
          }));
        case 2:
          _req$body2 = req.body, comment_id = _req$body2.comment_id, card_id = _req$body2.card_id; // card_id 추가
          user_id = req.user.userId;
          _context9.next = 6;
          return sequelize.transaction();
        case 6:
          transaction = _context9.sent;
          _context9.prev = 7;
          _context9.next = 10;
          return CommentLike.findOne({
            where: {
              comment_id: comment_id,
              user_id: user_id
            },
            transaction: transaction
          });
        case 10:
          existingLike = _context9.sent;
          if (!existingLike) {
            _context9.next = 16;
            break;
          }
          _context9.next = 14;
          return existingLike.destroy({
            transaction: transaction
          });
        case 14:
          _context9.next = 18;
          break;
        case 16:
          _context9.next = 18;
          return CommentLike.create({
            comment_id: comment_id,
            user_id: user_id,
            card_id: card_id
          }, {
            transaction: transaction
          });
        case 18:
          _context9.next = 20;
          return CommentLike.count({
            where: {
              comment_id: comment_id
            },
            transaction: transaction
          });
        case 20:
          likeCount = _context9.sent;
          _context9.next = 23;
          return transaction.commit();
        case 23:
          _context9.next = 25;
          return getComments(card_id, 1, 5);
        case 25:
          _yield$getComments2 = _context9.sent;
          comments = _yield$getComments2.comments;
          totalPages = _yield$getComments2.totalPages;
          currentPage = _yield$getComments2.currentPage;
          return _context9.abrupt("return", res.status(200).json({
            message: '좋아요 토글 완료',
            likeCount: likeCount,
            comments: comments,
            totalPages: totalPages,
            currentPage: currentPage
          }));
        case 32:
          _context9.prev = 32;
          _context9.t0 = _context9["catch"](7);
          _context9.next = 36;
          return transaction.rollback();
        case 36:
          console.error('Error toggling like:', _context9.t0);
          return _context9.abrupt("return", res.status(500).json({
            message: 'Internal Server Error'
          }));
        case 38:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[7, 32]]);
  }));
  return function (_x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();