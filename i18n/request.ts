import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { locales } from '../middlewares/locale.middleware';
 
export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();
    
    try {
        return (await import(`@/messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
});