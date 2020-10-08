# Basic setup of a React project

This is _NOT_ a npm package intended for installation. So do _NOT_ install it.

This is a basic setup of React with Babel, Webpack, including least packages to get you started.

## Get started
Go to https://github.com/ohxyz/react-get-started

1. Create a folder e.g. `my-react-project`.
2. Copy all<sup>[1]</sup> content of this repo to the folder created.<sup>[2]</sup>
3. Go to `my-react-project`, run `npm i`.
4. Run `npm run dev`.

### Foot notes
[1] If you are not using Git, then don't copy `.gitignore`.

[2] Click the green button `Code` in this Github page and select `Download ZIP`. Unzip the file, and you'll get e.g. `react-get-started-master`. Copy all the content in `react-get-started-master` to `my-react-project`.

### Tips
If you don't like the browser auto-reloads every time you change the code, then add `inline: false` to `devServer` property in `webpack.dev.js`.

```
...
devServer: {
    contentBase: outputPath,
    compress: true,
    port: 5000,
    inline: false
}
...
```

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