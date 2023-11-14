type Value = string | undefined

interface IProps {
    title: Value,
    imagePath: Value,
    text: Value
}

export const SoundCardMain = ({ title, imagePath, text }: IProps): JSX.Element => {

    return (
        <div className="h-full p-5 ml-0 lg:ml-24 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start gap-4">
            <img src={imagePath} alt="" className="w-[100px] md:w-[280px] h-[100px] md:h-[280px] object-cover rounded-2xl" />
            <div className="max-w-lg">
                <h3 className="my-5 text-m-xl">{title}</h3>
                <p className="text-m-md">{text}</p>
            </div>
        </div>
    )
}