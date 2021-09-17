import { render } from '@nestjs/common';
import AddDiveLog from './views/AddDiveLog.svelte';

describe('AddDiveLog', () => {
  describe('Layout', () => {
    it('has AddDiveLog header', () => {
      render(AddDiveLog);
      const header = screen.getByRole('heading', { name: 'Add DiveLog' });
      expect(header).toBeInTheDocument();
    });
  });
});