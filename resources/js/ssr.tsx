import "../css/app.css";

import { createRoot } from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createServer(
    (page) =>
        createInertiaApp({
            page,
            title: (title) => `${title} - ${appName}`,
            render: ReactDOMServer.renderToString,
            resolve: (name) =>
                resolvePageComponent(
                    `./Pages/${name}.tsx`,
                    import.meta.glob("./Pages/**/*.tsx"),
                ),
            setup: ({ App, props }) => <App {...props} />,
        }),
);
