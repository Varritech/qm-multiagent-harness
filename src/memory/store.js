export class MemoryStore {
  constructor() {
    this.conversations = new Map();
  }

  getSession(sessionId) {
    if (!this.conversations.has(sessionId)) {
      this.conversations.set(sessionId, []);
    }
    return this.conversations.get(sessionId);
  }

  add(sessionId, entry) {
    const session = this.getSession(sessionId);
    session.push({ ...entry, timestamp: Date.now() });
  }
}
