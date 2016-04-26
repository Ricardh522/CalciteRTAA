define([
  'intern!bdd',
  'intern/chai!expect',
  'dijit/registry',
  'app/Card',
  'app/HomepageBanner',
  'app/PageBanner',
  'dojo/domReady!'
], function(bdd, expect, registry, Card, HomepageBanner,
PageBanner) {

  bdd.describe('widgets that make up the app', function() {
    var destroy = function (widget) {
        registry.forEach(function(e) {
            registry.remove(e.id);
        });
    };

    var card;
    var homepage_banner;
    var page_banner;

    bdd.describe('the Card Widget', function() {

      bdd.beforeEach(function () {
        card = new Card();
      });

      bdd.afterEach(function () {
        destroy(card);
      });

      bdd.it('should be a card', function() {
        expect(card).to.be.an.instanceof(Card);
      });
    });
  });
});