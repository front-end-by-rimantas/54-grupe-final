import { BrowserRouter, Route, Routes } from 'react-router';
import { UserContextWrapper } from './context/UserContextWrapper';

import { PublicLayout } from './layout/PublicLayout';
import { PrivateLayout } from './layout/PrivateLayout';

import { PageHome } from './pages/public/home/PageHome';
import { PageNotFound } from './pages/PageNotFound';

import { PageMovies } from './pages/public/movies/PageMovies';
import { PageMovieInner } from './pages/public/movies/PageMovieInner';

import { PageCategories } from './pages/public/categories/PageCategories';
import { PageCategoryInner } from './pages/public/categories/PageCategoryInner';

import { PageLogin } from './pages/public/auth/PageLogin';
import { PageRegister } from './pages/public/auth/PageRegister';

import { PageDashboard } from './pages/admin/PageDashboard';
import { PageAllCategories } from './pages/admin/categories/PageAllCategories';
import { PageEditCategory } from './pages/admin/categories/PageEditCategory';
import { PagePublishedCategories } from './pages/admin/categories/PagePublishedCategories';
import { PageDraftCategories } from './pages/admin/categories/PageDraftCategories';
import { PageNewCategory } from './pages/admin/categories/PageNewCategory';

export function App() {
  return (
    <UserContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route Component={PublicLayout}>
            <Route index path='/' element={<PageHome />} />
            <Route path='/movies' element={<PageMovies />} />
            <Route path='/movies/:movie' element={<PageMovieInner />} />
            <Route path='/categories' element={<PageCategories />} />
            <Route path='/categories/:category' element={<PageCategoryInner />} />
            <Route path='/register' element={<PageRegister />} />
            <Route path='/login' element={<PageLogin />} />
          </Route>
          <Route Component={PrivateLayout}>
            <Route path='/admin' element={<PageDashboard />} />
            <Route path='/admin/categories' element={<PageAllCategories />} />
            <Route path='/admin/categories/new' element={<PageNewCategory />} />
            <Route path='/admin/categories/published' element={<PagePublishedCategories />} />
            <Route path='/admin/categories/draft' element={<PageDraftCategories />} />
            <Route path='/admin/categories/:category' element={<PageDashboard />} />
            <Route path='/admin/categories/:category/edit' element={<PageEditCategory />} />
            <Route path='/admin/movies' element={<PageDashboard />} />
            <Route path='/admin/movies/new' element={<PageDashboard />} />
            <Route path='/admin/movies/published' element={<PageDashboard />} />
            <Route path='/admin/movies/draft' element={<PageDashboard />} />
            <Route path='/admin/movies/:movie' element={<PageDashboard />} />
            <Route path='/admin/movies/:movie/edit' element={<PageDashboard />} />
          </Route>
          <Route Component={PublicLayout}>
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextWrapper>
  );
}
