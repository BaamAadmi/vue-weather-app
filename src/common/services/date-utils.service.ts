export class DateUtilsService {
  static readonly localTimeFromTimestamp = (dt: number): string => {
    const timestamp = dt * 1000;
    const dateObject = new Date(timestamp);
    return dateObject.toLocaleTimeString();
  };

  static readonly formatTime = (dt_txt: string): string => {
    return new Date(dt_txt).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  static readonly formatDay = (dateStr: string): string => {
    return new Date(dateStr).toLocaleDateString(undefined, {
      weekday: 'long',
    });
  };
}
