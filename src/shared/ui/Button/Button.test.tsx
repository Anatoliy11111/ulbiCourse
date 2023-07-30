import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('fsdsdf', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText).toBeInTheDocument();
    });
});
