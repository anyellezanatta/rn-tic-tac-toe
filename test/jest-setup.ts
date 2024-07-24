import "@/theme/unistyles";
import { jest } from "@jest/globals";

import "@testing-library/react-native/extend-expect";

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

jest.useFakeTimers();
