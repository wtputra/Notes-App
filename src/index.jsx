import React from 'react';
import NoteApp from './Component/NoteApp';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css'

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);