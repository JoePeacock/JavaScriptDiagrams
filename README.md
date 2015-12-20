## JavaScript Diagram Creator

A quick tool for storing and creating JavaScript/HTML animated diagrams.

### Install 

1. ``` $ git clone ```
2. ``` $ npm install -g gulp ```
3. ``` $ npm install ```

### Usage

To create a new diagram use:

``` $ gulp new --name SpiralFractal ```

Name should be a single world. A new directory will be created in /lib and you can begin working immediately with the template found in /lib/<NAME>.

To compile a diagram:

``` $ gulp compile --name SpiralFractal ```

Name should match a project that you already have. It will compiile everything inside of lib/<NAME>/js to a single build file that you can import where needed.