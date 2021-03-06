// @flow

// Note: we define properties with JSdoc since documentation.js doesn't recognize
// exported types yet. See https://github.com/documentationjs/documentation/issues/680

/**
 * @property {string}  fontFamily
 * @property {?string}  fontFilePath
 * @property {?string}  fontStretch
 * @property {?string}  fontStyle
 * @property {?string}  fontVariant
 * @property {?string}  fontWeight
 * @property {?Array<string>}  fileFormats
 * @property {?Array<string>}  localFonts
 * @property {?string}  unicodeRange
 * @property {?string}  fontDisplay
 * @property {?string}  fontVariationSettings
 * @property {?string}  fontFeatureSettings
 */
export type FontFaceConfiguration = {
  fontFamily: string,
  fontFilePath?: string,
  fontStretch?: string,
  fontStyle?: string,
  fontVariant?: string,
  fontWeight?: string,
  fileFormats?: Array<string>,
  localFonts?: Array<string>,
  unicodeRange?: string,
  fontDisplay?: string,
  fontVariationSettings?: string,
  fontFeatureSettings?: string,
}
