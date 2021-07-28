import CommunityPage from './CommunityPage'
import { render, screen } from '@testing-library/react';

describe('CommunityPage', ()=>{
    it('should render communities list', () => {
        render(<CommunityPage/>)
        const communitiesList = screen.findByTestId('communities-table');
        expect(communitiesList).toBeInTheDocument();
    })
})