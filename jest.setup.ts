import "@testing-library/jest-dom";

Object.defineProperty(global, "localStorage", {
    value: {
        getItem: jest.fn(() => "false"),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
    },
    writable: true,
});

// Alternatively, if `import.meta.env` is still problematic, use `process.env`
process.env.VITE_API_URL = "http://localhost:3000";
