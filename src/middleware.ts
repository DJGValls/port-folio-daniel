import { chain, MiddlewareFactory } from "../middlewares/chain";
import { locale } from "../middlewares/locale.middleware";


const middlewareStack: MiddlewareFactory[] = [
    locale,
    // auth,
];

export default chain(middlewareStack);

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets/).*)']
}