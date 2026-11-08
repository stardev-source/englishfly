import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Teacher from './Teacher.jsx';
import './styles.css';

const isTeacherHash = () => window.location.hash.startsWith('#/teacher');

function Root() {
  const [teacher, setTeacher] = useState(isTeacherHash);
  useEffect(() => {
    const onChange = () => setTeacher(isTeacherHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return teacher ? <Teacher /> : <App />;
}

createRoot(document.getElementById('root')).render(<Root />);