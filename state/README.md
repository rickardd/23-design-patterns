# State Pattern - PhotoShop tool switching

## UML

![Pattern UML](./img/state.png)

## Implementation

This example demonstrate how to handle different states e.g swiching between tools in PhotoShop.
For instance each tool has a mouse-down and a mouse-up event but the implementation is different.
The brush tool will draw lines while the selection tool will draw a dashed square.

This implementation will console different outputs for mouse down and up depending on what tool is used.
