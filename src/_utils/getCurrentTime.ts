interface ICurrentTime {
    hours: number,
    minutes: number,
    seconds?: number
}

type GetTime = () => ICurrentTime;

export const getCurrentTime: GetTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return { hours, minutes, seconds };
}