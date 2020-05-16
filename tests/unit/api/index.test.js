/// Gerekli kütüphaneler
var request = require('supertest')
var api = require('@arc/controllers/api')

/// Mock
var express = require('express')
var app = express()

app.use(api)

/**
 * Time api testleri
 */
describe('v1 api tests', function () {

    // Hedeflenen sürüm.
    var url = '/api'

    /**
       * Hedeflenen sürüm için, global test.
       */
    it(url, function (done) {

        // SuperTest talep ediliyor.
        request(app)

            // YÖnlendiricilerin testi
            .get(url)

            // Başarılı cevabı alınması gerekli.
            .expect(200, 'api')
            .end(done)
    })
})
