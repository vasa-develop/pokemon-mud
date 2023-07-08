import { create } from 'zustand'
import { SetupResult } from "./mud/setup";

export const mudStore = create<SetupResult | undefined>((set) => (undefined))