/**
 * Transform Style PropTypes
 */

/**
 * Imports
 */
import PropTypes from 'prop-types';

/**
 * Defines the PropTypes for Transform Style
 */
const TransformsStylePropTypes = {
  transform: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        perspective: PropTypes.number
      }),
      PropTypes.shape({
        rotate: PropTypes.string
      }),
      PropTypes.shape({
        rotateX: PropTypes.string
      }),
      PropTypes.shape({
        rotateY: PropTypes.string
      }),
      PropTypes.shape({
        rotateZ: PropTypes.string
      }),
      PropTypes.shape({
        scale: PropTypes.number
      }),
      PropTypes.shape({
        scaleX: PropTypes.number
      }),
      PropTypes.shape({
        scaleY: PropTypes.number
      }),
      PropTypes.shape({
        translateX: PropTypes.number
      }),
      PropTypes.shape({
        translateY: PropTypes.number
      }),
      PropTypes.shape({
        skewX: PropTypes.string
      }),
      PropTypes.shape({
        skewY: PropTypes.string
      }),
      PropTypes.shape({
        matrix: PropTypes.arrayOf(PropTypes.number)
      })
    ])
  )
};

export default TransformsStylePropTypes;
