import { create } from 'zustand';

const TARGET_VALUES = [16, 36, 73];

const useRegulatorStore = create((set, get) => ({
    pressures: [82, 69, 27],
    target: TARGET_VALUES,
    status: 'running',

    setPressure: (index, value) =>
        set((state) => {
            const newPressures = [...state.pressures];
            newPressures[index] = value;
            return { pressures: newPressures };
        }),

    setStatus: (status) => set({ status }),

    reset: () =>
        set({
            pressures: [82, 69, 27],
            status: 'running',
        }),

    checkSolution: () => {
        const { pressures } = get();
        const isCorrect = pressures.every((val, i) => val === TARGET_VALUES[i]);
        set({ status: isCorrect ? 'success' : 'failure' });
    },
}));

export default useRegulatorStore;
