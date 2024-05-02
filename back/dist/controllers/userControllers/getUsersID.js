"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, res) {
    var userid = req.params.id;
    res.json("Obtener el detalle de un usuario espec\u00EDfico ".concat(userid));
});
