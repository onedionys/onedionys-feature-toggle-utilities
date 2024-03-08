class FeatureToggle {
    constructor(features) {
      this.features = features;
    }
  
    isEnabled(featureName) {
      return this.features[featureName] || false;
    }
  }
  
  module.exports = FeatureToggle;
  