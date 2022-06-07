"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partlyExpandAnimation = exports.collapseAnimation = exports.expandAnimation = exports.COLLAPSE_ANIMATION_TIMING = void 0;
const animations_1 = require("@angular/animations");
exports.COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
exports.expandAnimation = [
    animations_1.style({ height: 0, visibility: 'hidden' }),
    animations_1.animate(exports.COLLAPSE_ANIMATION_TIMING, animations_1.style({ height: '*', visibility: 'visible' }))
];
exports.collapseAnimation = [
    animations_1.style({ height: '*', visibility: 'visible' }),
    animations_1.animate(exports.COLLAPSE_ANIMATION_TIMING, animations_1.style({ height: 0, visibility: 'hidden' }))
];
exports.partlyExpandAnimation = [
    animations_1.style({ height: '30%', visibility: 'hidden' }),
    animations_1.animate(exports.COLLAPSE_ANIMATION_TIMING, animations_1.style({ height: '*', visibility: 'visible' }))
];
//# sourceMappingURL=collapse-animations.js.map