import { createRoot } from 'react-dom/client';
import App from './App';

const app = <App />;
const here = document.getElementById('here');
const root = createRoot(here);

root.render(app);
