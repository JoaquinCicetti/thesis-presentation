import React, { useEffect} from 'react';
import { useTitle } from '../../hooks';
import './Calibration.scss';

const Calibration: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Calibración');
    }, []);
    return (
        <div className="slide">
          <h1>Calibracion de la celda de carga</h1>
        </div>
    );
};

export default Calibration;
