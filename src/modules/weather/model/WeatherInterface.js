// @flow
export interface WeatherInterface {
    getTemperature(): ?string;

    setTemperature(value: string): WeatherInterface;
}
