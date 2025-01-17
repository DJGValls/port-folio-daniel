import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { CustomMiddleware, MiddlewareFactory } from "./chain";

export const locales = ['cat', 'es', 'en'];
export const defaultLocale = 'en';

export const i18nMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: locales,
   
    // Used when no locale matches
    defaultLocale: defaultLocale,
});

export const locale: MiddlewareFactory = (middleware: CustomMiddleware) => {
    return async(request: NextRequest, _next: NextFetchEvent, response: NextResponse) => {
        // si la ruta no contiene locale
        const regex = new RegExp(`^\\/(${locales.join('|')})\\/?`);
        if (!request.nextUrl.pathname.match(regex)) {
            const url = new URL(`/${defaultLocale}${request.nextUrl.pathname}`, request.url);
            url.search = request.nextUrl.search;
            const redirect = NextResponse.redirect(url, request);
            return middleware(request, _next, redirect);
        }

        return middleware(request, _next, i18nMiddleware(request));
    }
}