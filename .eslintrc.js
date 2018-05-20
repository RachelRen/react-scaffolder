module.exports = {
	"env": {
        "browser": true,
        //"commonjs": true,
        "es6": true,
        //"node": true
    },
    "extends": ["eslint-config-airbnb"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "ecmaVersion": 6
    },
    "plugins": ["babel", "prettier"],
    "rules": {
        "linebreak-style":0,
        "react/jsx-indent": [4,'tab'],
        "indent": ["error", 4],
        'import/extensions': ['off', 'never'],
        "import/no-unresolved": "off",
        "one-var": ["error", "always"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to" ]
        }]
         /*"linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"]*/
    }
};