// Browser storage (localStorage): test session, student profile, unsent results.
const SESSION_KEY = 'ef_session_v1';
const PROFILE_KEY = 'ef_profile_v1';
const PENDING_KEY = 'ef_pending_v1';

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or blocked: ignore */
  }
}

export const loadSession = () => read(SESSION_KEY, null);
export const saveSession = (s) => write(SESSION_KEY, s);
export const clearSession = () => {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
};

export const loadProfile = () => read(PROFILE_KEY, { name: '', group: '' });
export const saveProfile = (p) => write(PROFILE_KEY, p);

export const loadPending = () => read(PENDING_KEY, []);
export const savePending = (list) => write(PENDING_KEY, list);
