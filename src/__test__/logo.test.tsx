import { render, screen } from '@testing-library/react';
import App from '../App';

test("teste logo", () => {
   render(<App/>);
   screen.getByRole("link");
});