import React, { useState} from 'react';
interface TitleContext {
    title: string;
    setTitle: (newTitle: string) => void;
}
const voidContext: TitleContext = {
    title: '',
    setTitle: newTitle => {},
};
const TitleContext = React.createContext<TitleContext>(voidContext);

const TitleProvider: React.FC = ({ children }) => {
    const [title, setTitle] = useState('Proyecto final de ingeniería');

    const TitleHandler = {
        title,
        setTitle,
    };

    return <TitleContext.Provider value={TitleHandler}>{children}</TitleContext.Provider>;
};

export { TitleContext, TitleProvider };
