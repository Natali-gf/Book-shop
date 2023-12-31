module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["warn", "always"],
		"quotes": ["warn", "double"],
        "no-duplicate-imports": ["warn", { "includeExports": true }],
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-empty-function": "warn",
        "no-implicit-globals": "warn",
        "no-magic-numbers": "warn",
        "no-var": "error",
        "prefer-const": "warn",
        "arrow-spacing": ["warn", { "before": true, "after": true }],
        "block-spacing": "warn",
        "brace-style": "warn",
        "comma-dangle": ["warn", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
        }],
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "comma-style": ["warn", "last"],
        "computed-property-spacing": ["warn", "never"],
        "dot-location": ["warn", "property"],
        "keyword-spacing": ["warn", {
            "overrides": {
                "if": { "after": false },
                "for": { "after": false },
                "while": { "after": false },
            }
        }],
        "max-len": ["warn", { "code": 80, "tabWidth": 4 }],
        "max-statements-per-line": ["warn", { "max": 1 }],
        "newline-per-chained-call": ["warn", { "ignoreChainWithDepth": 2 }],
        "no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
        "no-multi-spaces": "warn",
        "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1, maxBOF: 0 }],
        "no-whitespace-before-property": "warn",
        "nonblock-statement-body-position": ["warn", "beside"],
        "operator-linebreak": ["warn", "before", {
            "overrides": { "?": "before", ":": "before" }
        }],
        "padding-line-between-statements": ["warn",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let"], next: "*"},
            { blankLine: "any", prev: ["const", "let"], next: ["const", "let"]}
        ],
        "quotes": ["warn", "single", { "avoidEscape": true }],
        "rest-spread-spacing": ["warn", "never"],
        "semi": ["warn", "always"],
        "semi-spacing": ["warn", { "before": false, "after": true }],
        "space-before-blocks": "warn",
        "space-before-function-paren": ["warn", "never"],
        "space-in-parens": ["warn", "never"],
        "space-infix-ops": "warn",
        "space-unary-ops": ["warn", {
            "words": true,
            "nonwords": false,
        }],
        "switch-colon-spacing": ["warn", {"after": true, "before": false}],
        "wrap-regex": "warn",
        "no-trailing-spaces": "warn",
    }
}
