
interface ILocationContext {
    location: GeolocationCoordinates | undefined
    isLocationLoading: boolean
    locationError: GeolocationPositionError | undefined
}
