import React, { useRef } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Route, Switch, Link } from 'react-router-dom';
import {
    Calibration,
    Console,
    CurrentSituation,
    MainBlocks,
    Title,
    WhatIs,
    pageIndex,
} from './pages';
import { useTitle, useKeyDown } from './hooks';
import './App.scss';

const RouteContainer = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 },
    collapsed: { height: 0 },
});

const Header = posed.span({
    collapsed: {
        fontSize: '1em',
        height: '5vh',
        transition: { duration: 500 },
    },
    expanded: {
        fontSize: '3em',
        height: '50vh',
        transition: { duration: 500 },
    },
});
const Controls = posed.div({
    collapsed: {
        height: '5vh',
    },
    expanded: {
        height: '50vh',
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
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
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
                            <RouteContainer
                                className={'router'}
                                key={`routerContainer${location.key}`}
                                pose={index === -1 && `collapsed`}>
                                <Switch location={location} key={'switch'}>
                                    <Route path={`/title`} component={Title} key="title" />
                                    <Route path={`/what-is`} component={WhatIs} key="what-is" />
                                    <Route
                                        path={`/calibration`}
                                        component={Calibration}
                                        key="calibration"
                                    />
                                    <Route
                                        path={`/main-blocks`}
                                        component={MainBlocks}
                                        key="main-blocks"
                                    />
                                    <Route path={`/console`} component={Console} key="console" />
                                    <Route
                                        path={`/current-situation`}
                                        component={CurrentSituation}
                                        key="current-situation"
                                    />
                                </Switch>
                            </RouteContainer>
                            <Controls
                                key="controls"
                                className="controls"
                                pose={index === -1 ? 'expanded' : 'collapsed'}>
                                {index >= 0 && (
                                    <Link ref={leftArrow} id="backButton" to={`/${prevSlide}`}>
                                        <img className="left" src="../Icons/arrow-right.png" />
                                    </Link>
                                )}
                                {index >= 0 && <span className="index">{index}</span>}
                                {index < pageIndex.length && (
                                    <Link ref={rightArrow} to={`/${nextSlide}`}>
                                        {index >= 0 ? (
                                            <img src="../Icons/arrow-right.png" />
                                        ) : (
                                            <img src="../Icons/play.png" />
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
