import dayjs from 'dayjs'

const formatToTime = (date: Date) => {
  return dayjs(date).format('HH:mm:ss')
}

export { formatToTime }
