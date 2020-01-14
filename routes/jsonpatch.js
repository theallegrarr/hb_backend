/* eslint-disable consistent-return */
const { body, validationResult } = require('express-validator/check');
const jsonpatch = require('fast-json-patch');
const router = require('express').Router();
const validateToken = require('../middlewares/validateToken');

router.post('/',
  body('jsonObject', 'should have json object.').isLength({ min: 1 }),
  body('jsonPatchObject', 'should have json patch.').isLength({ min: 1 }),
  validateToken,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())res.status(400).json({ error: errors.array() });

    const { jsonObject } = req.body;
    const jsonPatch = req.body.jsonPatchObject;

    const patchedObject = jsonpatch.applyPatch(jsonObject, jsonPatch).newDocument;

    res.status(200).json({ patchedObject });
  });

module.exports = router;
