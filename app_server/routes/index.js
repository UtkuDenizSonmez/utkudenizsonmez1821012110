var express = require('express');
var router = express.Router();
var crtlMekanlar = require("../controllers/mekanlar");
var crtlDigerleri = require("../controllers/digerleri");

/* GET home page. */
router.get('/', crtlMekanlar.anaSayfa);
router.get('/mekan', crtlMekanlar.mekanBilgisi);
router.get('/mekan/yorum/yeni', crtlMekanlar.yorumEkle);
router.get('/hakkinda', crtlDigerleri.hakkinda);

module.exports = router;