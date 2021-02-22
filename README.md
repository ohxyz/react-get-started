# Basic setup of a React project

This is _NOT_ a npm package intended for installation. So do _NOT_ install it.

This is a basic setup of React with Babel, Webpack with minimum dependencies to get you started.

## Get started
```
npx react-get-started my-app
```

### Tips
If you don't like the browser auto-reloads every time you change the code, then add `inline: false` to `devServer` property in `webpack.dev.js`.

```
...
devServer: {
    compress: true,
    port: 5000,
    overlay: true,
    inline: false
}
...
```

### Hot reload in Windows 10 WSL2
Refer to https://stackoverflow.com/questions/62780245

## Develop with `Sass`
```
npm i --save-dev sass sass-loader
```

In `webpack.dev.js`, add settings of plugins in `rules`.
```
rules: [
    ...,
    
    {
        test: /\.s[ac]ss$/i,
        use: [ 
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }
]
```

Then, you can add paths of `Sass` files in your source code, e.g.
```
import React from 'react';
import './index.scss';
```

## Add TypeScript
```
npm i --save-dev @babel/preset-typescript @types/node @types/react @types/react-dom ts-loader typescript
```

### Update Webpack config

#### Add TypeScript loader
```
rules: [
    ...,
    
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
    },
    ...
]
```

#### Resolve file extensions

Add `extensions` with `ts`, `tsx` so when import TypeScript modules, you don't have to type `.ts` or `.tsx`.

```
resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
},
modules: { 
    ... 
},
```

Quoted from Webpack official site

```
Using this will override the default array, meaning that webpack will no longer try to resolve modules using the default extensions.
```

#### Update `entry` with a `tsx` file, for example

```
entry: './src/index.tsx',
output: { 
    ... 
},    
```

## Update `.babelrc`

```
{
  "presets": [
        ...,
        "@babel/preset-typescript"
    ]
}
```

## Add `tsconfig.json`
Here is an example. Some adjustments may be required as per project's needs.

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react",
    "outDir": "./built"
  },
  "include": [
    "src"
  ]
}
```