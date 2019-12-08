import React, { useRef, useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Route, Switch, Link, useHistory, useLocation } from 'react-router-dom';
import socketIo from 'socket.io-client';
import QRCode from 'react-qr-code';
import {
    Break,
    Calibration,
    Conclusions,
    Console,
    CurrentSituation,
    Enhancements,
    Linealization,
    MainBlocks,
    Objectives,
    pageIndex,
    Requirements,
    Speed,
    Schematic,
    Thanks,
    Title,
    Torque,
    Video,
    WhatIs,
} from './pages';
import { useTitle, useKeyDown } from './hooks';
import './App.scss';

const socket = socketIo('http://localhost:3002');

declare global {
    interface Window {
        serverIP: string;
    }
}

interface Update {
    title: string;
    index: number;
}
interface Shortcut {
    index: number;
}
const App: React.FC = () => {
    const leftArrow = useRef(null);
    const rightArrow = useRef(null);
    const { title } = useTitle();
    const history = useHistory();
    const location = useLocation();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';

    const clickRight = (): void => {
        if (rightArrow && rightArrow.current && typeof rightArrow.current.click === 'function')
            rightArrow.current.click();
    };
    const clickLeft = (): void => {
        if (leftArrow && leftArrow.current && typeof leftArrow.current.click === 'function')
            leftArrow.current.click();
    };
    useKeyDown({
        ArrowLeft: clickLeft,
    });
    useKeyDown({
        ArrowRight: clickRight,
    });
    // notify slide changes
    useEffect(() => {
        const slide = location.pathname.replace('/', '');
        const index = pageIndex.indexOf(slide);
        socket.emit('update', {
            index: index >= 0 ? index : 0,
            slide,
        });
    }, [location]);

    useEffect(() => {
        // process commands
        socket.on('command', ({ command }: { command: string }) => {
            if (command === 'next') clickRight();
            else clickLeft();
        });
        // shortcut to the slide
        socket.on('shortcut', (shortcut: Shortcut) => {
            const { index = 0 } = shortcut;

            const route = `/${pageIndex[index]}`;
            history.push(route);
        });
        // broadcast to update the range max value
        socket.on('new user', () => {
            socket.emit('count', pageIndex.length);
        });
    }, []);

    return (
        <div className="app">
            <Route
                render={({ location }) => {
                    const { pathname } = location;
                    const index = pageIndex.indexOf(pathname.replace('/', ''));
                    const nextSlide = pageIndex[index + 1] || '';
                    const prevSlide = pageIndex[index - 1] || '';
                    const { serverIP = 'localhost' } = window;
                    return (
                        <PoseGroup>
                            <Header
                                className="header"
                                key="header"
                                pose={index === -1 ? 'expanded' : 'collapsed'}>
                                {title}
                            </Header>
                            <RouteContainer key={`routerContainer${location.key}`}>
                                <Switch location={location} key={'switch'}>
                                    <Route path={`/break`} component={Break} key="break" />
                                    <Route
                                        path={`/calibration`}
                                        component={Calibration}
                                        key="calibration"
                                    />
                                    <Route path={`/console`} component={Console} key="console" />
                                    <Route
                                        path={`/conclusions`}
                                        component={Conclusions}
                                        key="conclusions"
                                    />
                                    <Route
                                        path={`/current-situation`}
                                        component={CurrentSituation}
                                        key="current-situation"
                                    />
                                    <Route
                                        path={`/enhancements`}
                                        component={Enhancements}
                                        key="enhancements"
                                    />
                                    <Route
                                        path={`/linealization`}
                                        component={Linealization}
                                        key="linealization"
                                    />
                                    <Route
                                        path={`/main-blocks`}
                                        component={MainBlocks}
                                        key="main-blocks"
                                    />
                                    <Route
                                        path={`/objectives`}
                                        component={Objectives}
                                        key="objectives"
                                    />
                                    <Route
                                        path={`/requirements`}
                                        component={Requirements}
                                        key="requirements"
                                    />
                                    <Route
                                        path={`/schematic`}
                                        component={Schematic}
                                        key="schematic"
                                    />
                                    <Route path={`/speed`} component={Speed} key="speed" />
                                    <Route path={`/thanks`} component={Thanks} key="thanks" />
                                    <Route path={`/title`} component={Title} key="title" />
                                    <Route path={`/torque`} component={Torque} key="torque" />
                                    <Route path={`/video`} component={Video} key="video" />
                                    <Route path={`/what-is`} component={WhatIs} key="what-is" />
                                </Switch>
                            </RouteContainer>
                            <Controls
                                key="controls"
                                className="controls"
                                pose={index === -1 ? 'expanded' : 'collapsed'}>
                                {index >= 0 && (
                                    <Link ref={leftArrow} id="backButton" to={`/${prevSlide}`}>
                                        <img
                                            alt="icon-arrow-right"
                                            className="left"
                                            src={`${urlPrefix}/arrow-right.png`}
                                        />
                                    </Link>
                                )}
                                {index >= 0 && <span className="index">{index}</span>}
                                {index < pageIndex.length && (
                                    <Link
                                        ref={rightArrow}
                                        to={`/${nextSlide}`}
                                        className="noDecoration">
                                        {index >= 0 ? (
                                            <img
                                                alt="icon-arrow-right"
                                                src={`${urlPrefix}/arrow-right.png`}
                                            />
                                        ) : (
                                            <>
                                                {' '}
                                                <QRCode
                                                    level="L"
                                                    fgColor="#212121"
                                                    size={150}
                                                    bgColor="#ffffff00"
                                                    value={`http://${serverIP}:3002/control`}
                                                />
                                                <p className="qrdetail">Conectar control</p>
                                            </>
                                        )}
                                    </Link>
                                )}
                            </Controls>
                        </PoseGroup>
                    );
                }}
            />
            <div className="bg" />
        </div>
    );
};

export default App;

const RouteContainer = posed.div({
    enter: {
        opacity: 1,
        left: 0,
        transition: {
            default: { duration: 200 },
            beforeChildren: true,
        },
    },
    exit: { opacity: 0, left: '-20%' },
});

const Header = posed.span({
    collapsed: {
        fontSize: '2em',
        height: '10vh',
        transition: { duration: 200 },
    },
    expanded: {
        fontSize: '3em',
        height: '50vh',
        transition: { duration: 200 },
    },
});
const Controls = posed.div({
    collapsed: {
        height: '5vh',
        transition: { duration: 200 },
    },
    expanded: {
        height: '50vh',
        transition: { duration: 200 },
    },
});
