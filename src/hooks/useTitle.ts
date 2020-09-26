import { TitleContext } from '../context/Title';
import { useContext } from 'react';

interface Handler {
    title: string;
    updateTitle: (newTitle: string) => void;
}

const useTitle = () => {
    const { title, setTitle } = useContext(TitleContext);
    const updateTitle = (newTitle: string) => {
        if (newTitle) setTitle(newTitle);
    };
    return {
        title,
        updateTitle,
    };
};

export default useTitle;
