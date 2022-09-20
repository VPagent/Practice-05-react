import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage'));
const HeroListPage = lazy(() => import('../../pages/HeroListPage'));
const SingleHeroPage = lazy(() => import('../../pages/SingleHeroPage'));

const ClientRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hero-list-page" element={<HeroListPage />} /> 
        <Route path="/hero-list-page/:id" element={<SingleHeroPage />}/>
      </Routes>
    </Suspense>
  );
};
export default ClientRoutes;
