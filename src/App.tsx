import React, { useRef } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Route, Switch, Link } from 'react-router-dom';
import {
    Calibration,
    Console,
    CurrentSituation,
    MainBlocks,
    pageIndex,
    Title,
    WhatIs,
    Speed,
    Thanks,
    Torque,
} from './pages';
import { useTitle, useKeyDown } from './hooks';
import './App.scss';

const RouteContainer = posed.div({
    enter: {
        opacity: 1,
        left: 0,
        transition: {
            default: { duration: 500 },
        },
    },
    exit: { opacity: 0, left: '-30%' },
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
const App: React.FC = () => {
    const leftArrow = useRef(null);
    const rightArrow = useRef(null);
    const { title } = useTitle();
    useKeyDown({
        ArrowLeft: _ => {
            if (leftArrow && leftArrow.current && typeof leftArrow.current.click === 'function')
                leftArrow.current.click();
        },
    });
    useKeyDown({
        ArrowRight: _ => {
            if (rightArrow && rightArrow.current && typeof rightArrow.current.click === 'function')
                rightArrow.current.click();
        },
    });
    return (
        <div className="app">
            <div className="bg"></div>
            <Route
                render={({ location }) => {
                    const { pathname } = location;
                    const index = pageIndex.indexOf(pathname.replace('/', ''));
                    const nextSlide = pageIndex[index + 1] || '';
                    const prevSlide = pageIndex[index - 1] || '';
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
                                    <Route
                                        path={`/calibration`}
                                        component={Calibration}
                                        key="calibration"
                                    />
                                    <Route path={`/console`} component={Console} key="console" />
                                    <Route
                                        path={`/current-situation`}
                                        component={CurrentSituation}
                                        key="current-situation"
                                    />

                                    <Route
                                        path={`/main-blocks`}
                                        component={MainBlocks}
                                        key="main-blocks"
                                    />
                                    <Route path={`/speed`} component={Speed} key="speed" />
                                    <Route path={`/thanks`} component={Thanks} key="thanks" />
                                    <Route path={`/title`} component={Title} key="title" />
                                    <Route path={`/torque`} component={Torque} key="torque" />
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
                                            src="../Icons/arrow-right.png"
                                        />
                                    </Link>
                                )}
                                {index >= 0 && <span className="index">{index}</span>}
                                {index < pageIndex.length && (
                                    <Link ref={rightArrow} to={`/${nextSlide}`}>
                                        {index >= 0 ? (
                                            <img
                                                alt="icon-arrow-right"
                                                src="../Icons/arrow-right.png"
                                            />
                                        ) : (
                                            <img alt="icon-play" src="../Icons/play.png" />
                                        )}
                                    </Link>
                                )}
                            </Controls>
                        </PoseGroup>
                    );
                }}
            />
        </div>
    );
};

export default App;
