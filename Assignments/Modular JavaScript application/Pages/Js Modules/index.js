import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.body.prepend(createNavbar());
document.body.appendChild(createFooter());
