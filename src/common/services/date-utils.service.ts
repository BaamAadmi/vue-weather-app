export class DateUtilsService {
  static readonly localTimeFromUTCOffset = (offsetInSeconds: number): string => {
    const utcDate = new Date();
    const offsetInMilliseconds = offsetInSeconds * 1000;
    const localTime = new Date(utcDate.getTime() + offsetInMilliseconds);
    return localTime.toLocaleTimeString();
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
