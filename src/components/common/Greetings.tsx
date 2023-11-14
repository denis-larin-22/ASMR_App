import { getCurrentTime } from "../../_utils";

export const Greetings = () => {
    const { hours } = getCurrentTime();
    enum GreetingVariants {
        Morning = 'Good morning',
        Day = 'Good afternoon',
        Evening = 'Good evening',
    }
    let greeting: string;

    if (hours > 4 && hours < 10) {
        greeting = GreetingVariants.Morning;
    } else if (hours >= 10 && hours <= 17) {
        greeting = GreetingVariants.Day;
    } else {
        greeting = GreetingVariants.Evening;
    }

    return (
        <h1 className='text-m-lg ml-12 mt-1 lg:ml-0 lg:mt-0'>{greeting}</h1>
    )
}