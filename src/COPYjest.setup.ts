import "@testing-library/jest-dom";

Object.defineProperty(global, "localStorage", {
    value: {
        getItem: jest.fn(() => "false"), // Default mock value
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
    },
    writable: true,
});
