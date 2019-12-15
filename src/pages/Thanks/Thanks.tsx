import React, { useEffect, useState } from 'react';
import { MorphingIcon } from '../../components';
import { useTitle, useKeyDown } from '../../hooks';
import './Thanks.scss';

const CurrentSituation: React.FC = () => {
    const { updateTitle } = useTitle();
    const [status, setStatus] = useState(false);
    const iterate = () => {
        setStatus((prev: boolean) => {
            return !prev;
        });
    };

    useKeyDown({
        KeyI: iterate,
        Space: iterate,
    });
    useEffect(() => {
        updateTitle('Fin');
    }, [updateTitle]);
    return (
        <div className="slide ">
            <span className="line left top" />
            <MorphingIcon width={260} height={120} icon={status ? 'thanks' : 'line'} />
        </div>
    );
};

export default CurrentSituation;
