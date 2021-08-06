import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const useWindowWidth = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const debouncedHandleWindowResize = debounce(() => {
            setWindowWidth(window.innerWidth);
        }, 1000);
        window.addEventListener('resize', debouncedHandleWindowResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleWindowResize);
        }
    }, []);
    console.log(windowWidth);
    return windowWidth;
};

export default useWindowWidth;