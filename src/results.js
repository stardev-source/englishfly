import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase.js';
import { loadPending, savePending } from './storage.js';

async function send(result) {
  await setDoc(doc(db, 'results', result.id), { ...result, createdAt: serverTimestamp() });
}

function addPending(result) {
  const list = loadPending().filter((r) => r.id !== result.id);
  savePending([...list, result]);
}
function removePending(id) {
  savePending(loadPending().filter((r) => r.id !== id));
}

// Save the result locally first, then send it to Firestore.
// If the device is offline or the page closes, it is re-sent on the next visit.
export async function submitResult(result) {
  addPending(result);
  try {
    await send(result);
    removePending(result.id);
    return true;
  } catch {
    return false;
  }
}

export async function flushPending() {
  for (const r of loadPending()) {
    try {
      await send(r);
      removePending(r.id);
    } catch {
      /* will retry later */
    }
  }
}
