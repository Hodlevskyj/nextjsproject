import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FavoriteArticlesPage from '../src/app/articles/favorite/page'

describe('FavoritePage', () => {
    it('should render properly', () => {
        render(<FavoriteArticlesPage />);
        const header = screen.getByRole('heading');
        const headerText ='https://jsonplaceholder.typicode.com/posts/${id}';
        expect(header).toBeInTheDocument(headerText);

    })
})