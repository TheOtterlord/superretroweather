import type { FC } from 'preact/compat';
import { formatDateMMDDYY } from '../../helper/formatDateMMDDYY';
import { formatTime } from '../../helper/formatTime';
import type { ICurrentConditions } from '../../typedefs/ICurrentConditions'
import type { TConditionImageType } from '../../typedefs/TConditionImageType';
import WeatherConditionImage from './WeatherConditionImage';

interface CurrentConditionsProps {
  conditions: ICurrentConditions;
}

const CurrentConditions: FC<CurrentConditionsProps> = ({ conditions }) => {
  const conditionIcon = conditions.icon ? conditions.icon as TConditionImageType : 'clear';

  const {
    temp,
    sunrise,
    visibility,
    wspd,
    cloudcover,
    datetime,
    precip,
    sunset,
    humidity,
    wgust
  } = conditions;

  return (
    <div className="flex flex-col mt-5 items-center justify-center text-center">
      <h1 id="current-conditions-date" className="text-white text-3xl max-sm:text-xl">{formatDateMMDDYY(datetime)}</h1>
      <div className="flex flex-row space-x-5 items-center justify-center py-4">
        <WeatherConditionImage
          imageId="current-conditions-image"
          condition={conditionIcon}
          width={100}
          height={100}
        />
        <h1 id="current-conditions-temp" className="text-white text-4xl max-sm:text-2xl">{Math.round(temp)}º</h1>
      </div>
      <div className="flex flex-row items-center justify-center space-x-5">
        <h5 id="current-conditions-wspd" className="text-lg max-md:text-sm text-white">WSPD: {Math.round(wspd)}</h5>
        <h5 id="current-conditions-gust" className="text-lg max-md:text-sm text-white">GUST: {Math.round(wgust)}</h5>
      </div>
      <div className="flex flex-row items-center justify-center space-x-5">
        <h5 id="current-conditions-vis" className="text-lg max-md:text-sm text-white">VISIBILITY: {Math.round(visibility)}</h5>
      </div>
      <div className="flex flex-row items-center justify-center space-x-5">
        <h5 id="current-conditions-cloud-cover" className="text-lg max-md:text-sm text-white">CLOUD COVER: {Math.round(cloudcover)}</h5>
      </div>
      <div className="flex flex-row items-center justify-center space-x-5">
        <h5 id="current-conditions-humidity" className="text-lg max-md:text-sm text-white">HUMIDITY: {Math.round(humidity)}</h5>
      </div>
      <div className="flex flex-row items-center justify-center space-x-5">
        <h5 id="current-conditions-precip" className="text-lg max-md:text-sm text-white">PRECIP: {Math.round(precip)}</h5>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-2 space-y-1">
        <div className="flex flex-row items-center justify-center space-x-2">
          <p id="current-conditions-sunrise" className="text-lg max-md:text-sm text-white">SUNRISE:</p>
          <h5 id="current-conditions-sunrise-time" className="text-lg max-md:text-sm text-white">{sunrise ? `${formatTime(sunrise)}` : 'N/D'}</h5>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
          <p id="current-conditions-sunset" className="text-lg max-md:text-sm text-white">SUNSET:</p>
          <h5 id="current-conditions-sunset-time" className="text-lg max-md:text-sm text-white">{sunset ? formatTime(sunset) : 'N/D'}</h5>
        </div>
      </div>
    </div>
  )
}

export default CurrentConditions