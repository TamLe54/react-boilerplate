import '@testing-library/jest-dom/vitest';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { vi } from 'vitest';

vi.mock('zustand');

i18n.use(initReactI18next).init({});
