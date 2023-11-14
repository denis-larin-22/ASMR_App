interface IProps {
    title: string,
    imagePath: string,
}

export const SoundPreviewCard = ({ title, imagePath }: IProps): JSX.Element => {

    return (
        <div className="bg-dark-alt hover:bg-dark-opacity hover:translate-x-2 hover:-translate-y-1 hover:shadow-xl duration-150 rounded-3xl p-3 cursor-pointer">
            <img src={imagePath} alt="bcg" className="w-[153px] h-[153px] object-cover rounded-3xl mb-2" />
            <div className="flex items-center justify-between">
                <h4 className="text-m-sm pb-2 pt-1">{title}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" fill="rgba(255, 255, 255, 0.2)" /></svg>
            </div>
        </div>
    )
}