export const MainBanner = () => {
    const imgPath: string = process.env.PUBLIC_URL + '/assets/media/images/headphones.png';
    const wavesPath: string = process.env.PUBLIC_URL + '/assets/media/images/waves.png';

    return (
        <section className="relative max-w-2xl h-[200px] mt-6 md:mt-0 md:h-auto bg-turquoise flex justify-between rounded-[40px] overflow-hidden">
            <div className="z-10 py-10 px-11 text-m-sm flex flex-col justify-between">
                <p>Take a break</p>
                <div className="max-w-[276px]">
                    <h2 className="text-m-xl">ASMR Sounds</h2>
                    <p>A variety of different sounds for your maximum recovery and relaxation</p>
                </div>
                <p>Just listen, breathe and relax</p>
            </div>

            <img src={imgPath} alt="human" className="hidden sm:block z-10 max-h-[370px] pr-10" />
            <img src={wavesPath} alt="waves" className="absolute top-16 sm:top-0 -right-10 sm:right-0 h-full z-0" />
        </section>
    )
}

