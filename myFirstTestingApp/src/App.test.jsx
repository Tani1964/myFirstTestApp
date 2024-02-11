import {render,screen} from '@testing-library/react'
import App from './App';

test('url is correct', () => { 
    WebGL2RenderingContext(<App/>);
    const linkElement = screen.getByText(/learn react/);
    expect(linkElement.href).toContain('ultimateqa.com')
 })