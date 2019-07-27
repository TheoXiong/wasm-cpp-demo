# wasm-cpp-demo
A simple CPP WASM demo

English | [简体中文](./README.zh-CN.md)

## Usage

### Install Emscripten 
First you need to install emscripten toolchain, see [Getting Started](https://emscripten.org/docs/getting_started/index.html)

### Run Demo
Install node modules
```
npm install
```

Build c++ to webassembly
```
npm run build 
```

run the demo on Node
```
npm run dist
```

run the demo on browser
```
npm run html
```