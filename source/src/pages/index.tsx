import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexPage } from './index/ui';
import { StartPage } from './start';
import { SettingsPage } from './settings';
import { LevelsPage } from './levels';
import { LevelPage } from './level';
import { HelpPage } from './help';
import { StatisticsPage } from './statistics';
import { ThemesPage } from './themes';
import { LocalRoutes } from '../shared/config'
import { SocialMedia } from '../widgets/social-media';
import { SolvePage } from './solve';


const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <SocialMedia />
            <Routes>
                <Route path={LocalRoutes.start} element={<StartPage />} />
                <Route path={LocalRoutes.index} element={<IndexPage />} />
                <Route path={LocalRoutes.solve} element={<SolvePage />} />
                <Route path={LocalRoutes.settings} element={<SettingsPage />} />
                <Route path={LocalRoutes.levels} element={<LevelsPage />} />
                <Route path={LocalRoutes.level} element={<LevelPage />} />
                <Route path={LocalRoutes.statistics} element={<StatisticsPage />} />
                <Route path={LocalRoutes.help} element={<HelpPage />} />
                <Route path={LocalRoutes.themes} element={<ThemesPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router