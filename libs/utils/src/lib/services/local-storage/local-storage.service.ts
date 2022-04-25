import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '@types';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  public setItem(key: LocalStorageKeys, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: LocalStorageKeys): unknown {
    const result = localStorage.getItem(key);

    return result ? JSON.parse(result) : undefined;
  }

  public removeItem(key: LocalStorageKeys): void {
    localStorage.removeItem(key);
  }
}
