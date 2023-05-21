import HomeRoute from '../pages/HomePage/home';
import BooksRoutes from '../pages/books'
import StoryRoutes from '../pages/story'
import SearchRoutes from '../pages/search'
import IARoutes from '../pages/ia'
export default [
    ...HomeRoute, 
    ...BooksRoutes,
    ...StoryRoutes,
    ...SearchRoutes,
    ...IARoutes,

]