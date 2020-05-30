module.exports = {
  purge: [],
  theme: {
    extend: {
        transitionProperty: {
            'visibility': 'visibility'
        },
        spacing: {
            '72': '18rem',
            '84': '21rem',
            '96': '24rem',
        },
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
        }
    },
  },
  variants: {
      visibility: ['responsive', 'hover', 'focus', 'group-hover'],
      transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
      boxShadow: ['responsive', 'first', 'last', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
}
