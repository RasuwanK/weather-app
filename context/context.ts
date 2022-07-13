import { createContext, useContext } from "react";
import { ILocationContext } from "../interfaces/context";

export const LocationContext = createContext<ILocationContext>({
    location: undefined,
    isLocationLoading: false,
    locationError: undefined
});

export const useLocationContext = () => {
    return useContext(LocationContext)
}
