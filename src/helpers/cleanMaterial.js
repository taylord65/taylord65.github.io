/*
 * Helper to clean three materials
 *
 */

const cleanMaterial = material => {
  material.dispose()
  for (const key of Object.keys(material)) {
    const value = material[key]
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose()
    }
  }
}

exports.cleanMaterial = cleanMaterial;