import { useEffect } from 'react';

interface KeyHandlers {
    [key: string]: (event?: React.SyntheticEvent) => void;
}

const useKeydown = (keyMap: KeyHandlers) => {
    const keyHandler = event => keyMap[event.code] && keyMap[event.code](event);

    useEffect(() => {
        document.addEventListener('keydown', keyHandler);

        return () => document.removeEventListener('keydown', keyHandler);
    });
};

export default useKeydown;
