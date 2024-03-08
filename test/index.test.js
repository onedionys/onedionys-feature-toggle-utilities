const assert = require('assert');
const FeatureToggle = require('../src/featureToggle');

describe('FeatureToggle', function() {
  const features = {
    featureA: true,
    featureB: false
  };

  const featureToggle = new FeatureToggle(features);

  describe('#isEnabled()', function() {
    it('should return true if the feature is enabled', function() {
      assert.strictEqual(featureToggle.isEnabled('featureA'), true);
    });

    it('should return false if the feature is not enabled', function() {
      assert.strictEqual(featureToggle.isEnabled('featureB'), false);
    });

    it('should return false if the feature does not exist', function() {
      assert.strictEqual(featureToggle.isEnabled('featureC'), false);
    });
  });
});
