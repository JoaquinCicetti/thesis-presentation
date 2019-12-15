import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Title.scss';

const Title: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';
    useEffect(() => {
        updateTitle('Proyecto final de ingeniería');
    }, [updateTitle]);
    return (
        <div className="slide">
            <p className="main-title">
                Automatización de un banco de pruebas de un motor a combustión
            </p>
            <div className="author">
                <span>Alumnos</span>
                <hr />
                <div>
                    <img className="avatar" alt="avatar-icon" src={`${urlPrefix}/avatar.png`} />
                    Cicetti, Joaquín
                </div>
                <div>
                    <img className="avatar" alt="avatar-icon" src={`${urlPrefix}/avatar.png`} />
                    Morelli, Nahuel
                </div>
                <span>Director</span>
                <hr />
                <div>
                    <img
                        className="avatar director"
                        alt="avatar-icon"
                        src={`${urlPrefix}/avatar-director.png`}
                    />
                    Simón, José
                </div>
            </div>
            <hr />
            <p className="date">Rosario, Diciembre de 2019</p>
        </div>
    );
};

export default Title;
