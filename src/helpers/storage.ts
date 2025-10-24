import type { RootState } from "../app/store";

const LS_KEY = "appState";

export function saveToLocalStorage(state: RootState) {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify(state));
    } catch { }
}

export function loadFromLocalStorage(): RootState | undefined {
    try {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) return undefined;
        return JSON.parse(raw)
    } catch {
        return undefined;
    }
}
