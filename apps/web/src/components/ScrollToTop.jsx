import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        const previousRestoration = window.history.scrollRestoration;
        window.history.scrollRestoration = 'manual';

        return () => {
            window.history.scrollRestoration = previousRestoration;
        };
    }, []);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}

export default ScrollToTop;