(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/characteristics/[sign]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CharacteristicsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CharacteristicsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const sign = params.sign;
    const [characteristics, setCharacteristics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CharacteristicsPage.useEffect": ()=>{
            if (sign) {
                generateCharacteristics(sign);
            }
        }
    }["CharacteristicsPage.useEffect"], [
        sign
    ]);
    const generateCharacteristics = async (signName)=>{
        setLoading(true);
        try {
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            const characteristicsData = getSignCharacteristics(signName);
            setCharacteristics(characteristicsData);
        } catch (error) {
            console.error('Error generating characteristics:', error);
        } finally{
            setLoading(false);
        }
    };
    const getSignCharacteristics = (signName)=>{
        const data = {
            'Áries': {
                name: 'Áries',
                symbol: '♈',
                element: 'Fogo',
                planet: 'Marte',
                qualities: [
                    'Corajoso',
                    'Determinado',
                    'Líder natural',
                    'Energético',
                    'Independente'
                ],
                defects: [
                    'Impulsivo',
                    'Impaciente',
                    'Agressivo',
                    'Egoísta',
                    'Teimoso'
                ],
                strengths: [
                    'Iniciativa',
                    'Coragem',
                    'Otimismo',
                    'Honestidade',
                    'Paixão'
                ],
                weaknesses: [
                    'Impaciência',
                    'Temperamento explosivo',
                    'Falta de tato',
                    'Imprudência'
                ],
                personality: 'Áries é o pioneiro do zodíaco, sempre pronto para novos desafios. São pessoas dinâmicas, corajosas e cheias de energia. Gostam de liderar e não têm medo de tomar iniciativas. Sua personalidade forte e determinada os torna excelentes em situações que exigem coragem e decisão rápida.',
                career: 'Profissões ideais incluem liderança, empreendedorismo, esportes, militar, bombeiros, cirurgia e qualquer área que permita autonomia e desafios constantes.',
                relationships: 'Nos relacionamentos, Áries é apaixonado e intenso. Precisa de um parceiro que acompanhe sua energia e independência. Pode ser possessivo, mas é extremamente leal e protetor com quem ama.',
                health: 'Deve cuidar da cabeça, evitar acidentes por imprudência e controlar o estresse. Exercícios físicos regulares são essenciais para canalizar sua energia.'
            },
            'Touro': {
                name: 'Touro',
                symbol: '♉',
                element: 'Terra',
                planet: 'Vênus',
                qualities: [
                    'Estável',
                    'Confiável',
                    'Paciente',
                    'Prático',
                    'Sensual'
                ],
                defects: [
                    'Teimoso',
                    'Possessivo',
                    'Materialista',
                    'Lento',
                    'Inflexível'
                ],
                strengths: [
                    'Determinação',
                    'Lealdade',
                    'Paciência',
                    'Senso prático',
                    'Estabilidade'
                ],
                weaknesses: [
                    'Teimosia',
                    'Resistência a mudanças',
                    'Ciúme',
                    'Preguiça'
                ],
                personality: 'Touro é conhecido pela estabilidade e determinação. São pessoas práticas, confiáveis e que valorizam o conforto e a segurança. Têm um forte senso estético e apreciam as coisas boas da vida. Sua natureza paciente os torna excelentes em projetos de longo prazo.',
                career: 'Destacam-se em finanças, arte, culinária, agricultura, arquitetura, design e qualquer profissão que envolva beleza, estabilidade ou trabalho com as mãos.',
                relationships: 'Nos relacionamentos, Touro é leal e dedicado. Busca estabilidade e segurança emocional. Pode ser possessivo, mas oferece muito amor e cuidado ao parceiro.',
                health: 'Deve cuidar da garganta, pescoço e sistema digestivo. Precisa evitar excessos alimentares e manter uma rotina de exercícios para não ficar sedentário.'
            },
            'Gêmeos': {
                name: 'Gêmeos',
                symbol: '♊',
                element: 'Ar',
                planet: 'Mercúrio',
                qualities: [
                    'Comunicativo',
                    'Inteligente',
                    'Versátil',
                    'Curioso',
                    'Adaptável'
                ],
                defects: [
                    'Inconstante',
                    'Superficial',
                    'Ansioso',
                    'Indeciso',
                    'Fofoqueiro'
                ],
                strengths: [
                    'Comunicação',
                    'Inteligência',
                    'Adaptabilidade',
                    'Humor',
                    'Criatividade'
                ],
                weaknesses: [
                    'Inconstância',
                    'Superficialidade',
                    'Nervosismo',
                    'Dispersão'
                ],
                personality: 'Gêmeos é o comunicador do zodíaco. São pessoas inteligentes, curiosas e versáteis, sempre em busca de novos conhecimentos e experiências. Sua mente ágil e capacidade de adaptação os torna excelentes em situações que exigem flexibilidade.',
                career: 'Profissões ideais incluem jornalismo, comunicação, vendas, ensino, tradução, tecnologia e qualquer área que envolva comunicação e variedade.',
                relationships: 'Nos relacionamentos, Gêmeos precisa de estímulo intelectual e variedade. São parceiros divertidos e interessantes, mas podem ter dificuldade com compromissos de longo prazo.',
                health: 'Deve cuidar do sistema nervoso, pulmões e braços. Precisa controlar a ansiedade e encontrar formas de relaxar a mente agitada.'
            },
            'Câncer': {
                name: 'Câncer',
                symbol: '♋',
                element: 'Água',
                planet: 'Lua',
                qualities: [
                    'Emotivo',
                    'Intuitivo',
                    'Protetor',
                    'Carinhoso',
                    'Familiar'
                ],
                defects: [
                    'Dramático',
                    'Grudento',
                    'Pessimista',
                    'Inseguro',
                    'Manipulador'
                ],
                strengths: [
                    'Intuição',
                    'Empatia',
                    'Lealdade',
                    'Cuidado',
                    'Memória'
                ],
                weaknesses: [
                    'Sensibilidade excessiva',
                    'Mudanças de humor',
                    'Insegurança',
                    'Apego'
                ],
                personality: 'Câncer é o cuidador do zodíaco. São pessoas emotivas, intuitivas e profundamente ligadas à família e ao lar. Sua natureza protetora e carinhosa os torna excelentes em cuidar dos outros.',
                career: 'Destacam-se em enfermagem, psicologia, educação infantil, gastronomia, hotelaria e qualquer profissão que envolva cuidar de pessoas.',
                relationships: 'Nos relacionamentos, Câncer é dedicado e protetor. Busca segurança emocional e um parceiro que valorize a família e o lar.',
                health: 'Deve cuidar do estômago, seios e sistema digestivo. Precisa controlar as emoções e evitar comer por ansiedade.'
            },
            'Leão': {
                name: 'Leão',
                symbol: '♌',
                element: 'Fogo',
                planet: 'Sol',
                qualities: [
                    'Generoso',
                    'Carismático',
                    'Criativo',
                    'Corajoso',
                    'Leal'
                ],
                defects: [
                    'Orgulhoso',
                    'Egocêntrico',
                    'Dramático',
                    'Dominador',
                    'Vaidoso'
                ],
                strengths: [
                    'Liderança',
                    'Criatividade',
                    'Generosidade',
                    'Carisma',
                    'Coragem'
                ],
                weaknesses: [
                    'Orgulho',
                    'Necessidade de atenção',
                    'Teimosia',
                    'Arrogância'
                ],
                personality: 'Leão é o rei do zodíaco. São pessoas carismáticas, generosas e naturalmente atraem atenção. Sua criatividade e liderança natural os destacam em qualquer ambiente.',
                career: 'Profissões ideais incluem arte, teatro, política, liderança empresarial, moda e qualquer área que permita brilhar e ser reconhecido.',
                relationships: 'Nos relacionamentos, Leão é romântico e generoso. Precisa de admiração e reconhecimento do parceiro, mas oferece muito amor e lealdade em troca.',
                health: 'Deve cuidar do coração, coluna e sistema circulatório. Precisa de exercícios regulares e deve evitar o estresse excessivo.'
            },
            'Virgem': {
                name: 'Virgem',
                symbol: '♍',
                element: 'Terra',
                planet: 'Mercúrio',
                qualities: [
                    'Organizado',
                    'Prático',
                    'Analítico',
                    'Confiável',
                    'Prestativo'
                ],
                defects: [
                    'Crítico',
                    'Perfeccionista',
                    'Preocupado',
                    'Tímido',
                    'Pessimista'
                ],
                strengths: [
                    'Organização',
                    'Análise',
                    'Dedicação',
                    'Precisão',
                    'Serviço'
                ],
                weaknesses: [
                    'Perfeccionismo',
                    'Crítica excessiva',
                    'Preocupação',
                    'Timidez'
                ],
                personality: 'Virgem é o perfeccionista do zodíaco. São pessoas práticas, organizadas e sempre buscam a excelência. Sua atenção aos detalhes e dedicação os torna indispensáveis em qualquer equipe.',
                career: 'Destacam-se em medicina, contabilidade, pesquisa, edição, administração e qualquer profissão que exija precisão e organização.',
                relationships: 'Nos relacionamentos, Virgem é dedicado e prestativo. Pode ser crítico, mas oferece muito cuidado e atenção aos detalhes do parceiro.',
                health: 'Deve cuidar do sistema digestivo, intestinos e sistema nervoso. Precisa controlar a ansiedade e não se sobrecarregar com preocupações.'
            },
            'Libra': {
                name: 'Libra',
                symbol: '♎',
                element: 'Ar',
                planet: 'Vênus',
                qualities: [
                    'Harmonioso',
                    'Diplomático',
                    'Charmoso',
                    'Justo',
                    'Sociável'
                ],
                defects: [
                    'Indeciso',
                    'Superficial',
                    'Dependente',
                    'Vaidoso',
                    'Evita conflitos'
                ],
                strengths: [
                    'Diplomacia',
                    'Senso de justiça',
                    'Charme',
                    'Equilíbrio',
                    'Sociabilidade'
                ],
                weaknesses: [
                    'Indecisão',
                    'Dependência',
                    'Superficialidade',
                    'Evitar confrontos'
                ],
                personality: 'Libra é o diplomata do zodíaco. São pessoas charmosas, equilibradas e sempre buscam a harmonia. Sua natureza sociável e senso de justiça os torna excelentes mediadores.',
                career: 'Profissões ideais incluem direito, diplomacia, arte, moda, decoração, relações públicas e qualquer área que envolva beleza e relacionamentos.',
                relationships: 'Nos relacionamentos, Libra busca harmonia e parceria. São românticos e charmosos, mas podem ter dificuldade em tomar decisões importantes.',
                health: 'Deve cuidar dos rins, bexiga e sistema endócrino. Precisa manter o equilíbrio e evitar excessos de qualquer tipo.'
            },
            'Escorpião': {
                name: 'Escorpião',
                symbol: '♏',
                element: 'Água',
                planet: 'Plutão',
                qualities: [
                    'Intenso',
                    'Determinado',
                    'Intuitivo',
                    'Leal',
                    'Transformador'
                ],
                defects: [
                    'Ciumento',
                    'Vingativo',
                    'Obsessivo',
                    'Secreto',
                    'Controlador'
                ],
                strengths: [
                    'Intensidade',
                    'Determinação',
                    'Intuição',
                    'Lealdade',
                    'Transformação'
                ],
                weaknesses: [
                    'Ciúme',
                    'Vingança',
                    'Obsessão',
                    'Desconfiança'
                ],
                personality: 'Escorpião é o mais intenso do zodíaco. São pessoas profundas, determinadas e com grande poder de transformação. Sua intuição aguçada e lealdade os torna amigos e parceiros únicos.',
                career: 'Destacam-se em psicologia, investigação, medicina, pesquisa, ocultismo e qualquer profissão que envolva mistérios ou transformação.',
                relationships: 'Nos relacionamentos, Escorpião é intenso e leal. Pode ser ciumento e possessivo, mas oferece uma conexão profunda e transformadora.',
                health: 'Deve cuidar dos órgãos reprodutivos, sistema excretor e área pélvica. Precisa canalizar suas emoções intensas de forma saudável.'
            },
            'Sagitário': {
                name: 'Sagitário',
                symbol: '♐',
                element: 'Fogo',
                planet: 'Júpiter',
                qualities: [
                    'Otimista',
                    'Aventureiro',
                    'Honesto',
                    'Filosófico',
                    'Livre'
                ],
                defects: [
                    'Imprudente',
                    'Irresponsável',
                    'Insensível',
                    'Impaciente',
                    'Exagerado'
                ],
                strengths: [
                    'Otimismo',
                    'Aventura',
                    'Honestidade',
                    'Filosofia',
                    'Liberdade'
                ],
                weaknesses: [
                    'Imprudência',
                    'Irresponsabilidade',
                    'Insensibilidade',
                    'Impaciência'
                ],
                personality: 'Sagitário é o aventureiro do zodíaco. São pessoas otimistas, livres e sempre em busca de novos horizontes. Sua natureza filosófica e amor pela liberdade os torna exploradores natos.',
                career: 'Profissões ideais incluem turismo, ensino superior, filosofia, esportes, aviação, comércio exterior e qualquer área que envolva viagens ou conhecimento.',
                relationships: 'Nos relacionamentos, Sagitário precisa de liberdade e aventura. São parceiros honestos e otimistas, mas podem ter dificuldade com compromissos restritivos.',
                health: 'Deve cuidar das coxas, quadris e fígado. Precisa evitar excessos e acidentes por imprudência durante aventuras.'
            },
            'Capricórnio': {
                name: 'Capricórnio',
                symbol: '♑',
                element: 'Terra',
                planet: 'Saturno',
                qualities: [
                    'Ambicioso',
                    'Disciplinado',
                    'Responsável',
                    'Prático',
                    'Persistente'
                ],
                defects: [
                    'Frio',
                    'Materialista',
                    'Pessimista',
                    'Rígido',
                    'Workaholic'
                ],
                strengths: [
                    'Ambição',
                    'Disciplina',
                    'Responsabilidade',
                    'Persistência',
                    'Praticidade'
                ],
                weaknesses: [
                    'Frieza',
                    'Materialismo',
                    'Pessimismo',
                    'Rigidez'
                ],
                personality: 'Capricórnio é o executivo do zodíaco. São pessoas ambiciosas, disciplinadas e focadas no sucesso. Sua determinação e senso de responsabilidade os leva ao topo de suas áreas.',
                career: 'Destacam-se em administração, política, engenharia, arquitetura, finanças e qualquer profissão que envolva liderança e responsabilidade.',
                relationships: 'Nos relacionamentos, Capricórnio é leal e responsável. Pode parecer frio, mas oferece estabilidade e segurança ao parceiro.',
                health: 'Deve cuidar dos ossos, joelhos, pele e dentes. Precisa equilibrar trabalho e descanso para evitar o esgotamento.'
            },
            'Aquário': {
                name: 'Aquário',
                symbol: '♒',
                element: 'Ar',
                planet: 'Urano',
                qualities: [
                    'Independente',
                    'Inovador',
                    'Humanitário',
                    'Original',
                    'Amigável'
                ],
                defects: [
                    'Distante',
                    'Rebelde',
                    'Imprevisível',
                    'Teimoso',
                    'Frio'
                ],
                strengths: [
                    'Independência',
                    'Inovação',
                    'Humanitarismo',
                    'Originalidade',
                    'Amizade'
                ],
                weaknesses: [
                    'Distanciamento',
                    'Rebeldia',
                    'Imprevisibilidade',
                    'Frieza emocional'
                ],
                personality: 'Aquário é o revolucionário do zodíaco. São pessoas independentes, inovadoras e preocupadas com o bem da humanidade. Sua originalidade e visão futurista os torna únicos.',
                career: 'Profissões ideais incluem tecnologia, ciência, astrologia, trabalho social, invenções e qualquer área que envolva inovação ou causas humanitárias.',
                relationships: 'Nos relacionamentos, Aquário valoriza a amizade e independência. Podem parecer distantes, mas são leais e oferecem uma perspectiva única.',
                health: 'Deve cuidar das pernas, tornozelos e sistema circulatório. Precisa manter a atividade física e cuidar da saúde mental.'
            },
            'Peixes': {
                name: 'Peixes',
                symbol: '♓',
                element: 'Água',
                planet: 'Netuno',
                qualities: [
                    'Sensível',
                    'Intuitivo',
                    'Compassivo',
                    'Criativo',
                    'Espiritual'
                ],
                defects: [
                    'Escapista',
                    'Dramático',
                    'Indeciso',
                    'Vítima',
                    'Ilusório'
                ],
                strengths: [
                    'Sensibilidade',
                    'Intuição',
                    'Compaixão',
                    'Criatividade',
                    'Espiritualidade'
                ],
                weaknesses: [
                    'Escapismo',
                    'Drama',
                    'Indecisão',
                    'Vitimização'
                ],
                personality: 'Peixes é o sonhador do zodíaco. São pessoas sensíveis, intuitivas e profundamente conectadas com o mundo espiritual. Sua compaixão e criatividade os torna únicos e inspiradores.',
                career: 'Destacam-se em arte, música, psicologia, medicina alternativa, trabalho social e qualquer profissão que envolva criatividade ou ajudar outros.',
                relationships: 'Nos relacionamentos, Peixes é romântico e dedicado. Podem ser dramáticos, mas oferecem uma conexão emocional profunda e compreensão.',
                health: 'Deve cuidar dos pés, sistema linfático e evitar vícios. Precisa de tempo para sonhar e se conectar com sua espiritualidade.'
            }
        };
        return data[signName] || data['Áries'];
    };
    const handleGoBack = ()=>{
        router.push('/horoscope');
    };
    const handleGoHome = ()=>{
        router.push('/');
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl",
                    children: "Carregando características..."
                }, void 0, false, {
                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, this);
    }
    if (!characteristics) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl",
                    children: "Signo não encontrado"
                }, void 0, false, {
                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                    lineNumber: 248,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
            lineNumber: 246,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-4xl font-bold mb-4 font-space-grotesk",
                            children: [
                                characteristics.symbol,
                                " ",
                                characteristics.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "bg-slate-700",
                                    children: [
                                        "Elemento: ",
                                        characteristics.element
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "bg-slate-700",
                                    children: [
                                        "Planeta: ",
                                        characteristics.planet
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300 text-lg",
                            children: "Características gerais e personalidade"
                        }, void 0, false, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 bg-slate-800/50 border-slate-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold mb-4",
                                    children: "🌟 Personalidade"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 leading-relaxed",
                                    children: characteristics.personality
                                }, void 0, false, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 bg-slate-800/50 border-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-green-400",
                                            children: "✅ Qualidades"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: characteristics.qualities.map((quality, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: "bg-green-600 hover:bg-green-700",
                                                    children: quality
                                                }, index, false, {
                                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 bg-slate-800/50 border-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-red-400",
                                            children: "⚠️ Defeitos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: characteristics.defects.map((defect, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    className: "bg-red-600 hover:bg-red-700",
                                                    children: defect
                                                }, index, false, {
                                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 bg-slate-800/50 border-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-blue-400",
                                            children: "💪 Pontos Fortes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: characteristics.strengths.map((strength, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-gray-300",
                                                    children: [
                                                        "• ",
                                                        strength
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 bg-slate-800/50 border-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-orange-400",
                                            children: "⚡ Pontos Fracos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: characteristics.weaknesses.map((weakness, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-gray-300",
                                                    children: [
                                                        "• ",
                                                        weakness
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 bg-slate-800/50 border-slate-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-4",
                                    children: "💼 Carreira e Profissão"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 leading-relaxed",
                                    children: characteristics.career
                                }, void 0, false, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 bg-slate-800/50 border-slate-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-4",
                                    children: "💕 Relacionamentos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 leading-relaxed",
                                    children: characteristics.relationships
                                }, void 0, false, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 bg-slate-800/50 border-slate-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-4",
                                    children: "🏥 Saúde"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 leading-relaxed",
                                    children: characteristics.health
                                }, void 0, false, {
                                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4 mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "border-gray-600 text-gray-300 hover:bg-slate-700",
                            onClick: handleGoBack,
                            children: "← Voltar ao Horóscopo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "border-gray-600 text-gray-300 hover:bg-slate-700",
                            onClick: handleGoHome,
                            children: "🏠 Início"
                        }, void 0, false, {
                            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/characteristics/[sign]/page.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s(CharacteristicsPage, "vB8KGSJqxtS41wefhKQzNllaRuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CharacteristicsPage;
var _c;
__turbopack_context__.k.register(_c, "CharacteristicsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_55944785._.js.map