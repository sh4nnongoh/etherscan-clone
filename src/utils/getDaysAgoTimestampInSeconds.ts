const getDaysAgoTimestampInSeconds = (days: number) => (
  new Date(
    (new Date()).setDate((new Date()).getDate() - days + 1)
  )
).setHours(0, 0, 0, 0) / 1000;
export default getDaysAgoTimestampInSeconds;
