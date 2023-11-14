import { IInitState, ISoundObject } from "./types";


const getPathFromMedia = {
    image: (mediaName: string) => `${process.env.PUBLIC_URL}/assets/media/images/sound-images/${mediaName}.jpg`,
    audio: (mediaName: string) => `${process.env.PUBLIC_URL}/assets/media/sounds/${mediaName}.mp3`,
    video: (mediaName: string) => `${process.env.PUBLIC_URL}/assets/media/video/${mediaName}.mp4`,
};

const soundsNameList: Array<{ soundName: string, title: string, text: string }> = [
    {
        soundName: 'space',
        title: 'The Earth',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam at, eveniet nostrum accusamus natus animi dolorum unde harum, quia sunt dolore sed esse nisi? Voluptates neque eos et voluptas odit!'
    },
    {
        soundName: 'evening',
        title: 'Sounds of night',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam at, eveniet nostrum accusamus natus animi dolorum unde harum, quia sunt dolore sed esse nisi? Voluptates neque eos et voluptas odit!'
    },
    {
        soundName: 'fire',
        title: 'The magic of fire',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam at, eveniet nostrum accusamus natus animi dolorum unde harum, quia sunt dolore sed esse nisi? Voluptates neque eos et voluptas odit!'
    },
    {
        soundName: 'ocean',
        title: 'Sounds of waves',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam at, eveniet nostrum accusamus natus animi dolorum unde harum, quia sunt dolore sed esse nisi? Voluptates neque eos et voluptas odit!'
    },
    {
        soundName: 'rain',
        title: 'Rain outside',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam at, eveniet nostrum accusamus natus animi dolorum unde harum, quia sunt dolore sed esse nisi? Voluptates neque eos et voluptas odit!'
    },
    {
        soundName: 'snow',
        title: 'Winter',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam at, eveniet nostrum accusamus natus animi dolorum unde harum, quia sunt dolore sed esse nisi? Voluptates neque eos et voluptas odit!'
    }
];

const soundsDefaultList: Array<ISoundObject> = soundsNameList.map(({ title, soundName, text }) => ({
    title: title,
    imageUrl: getPathFromMedia.image(soundName),
    audioUrl: getPathFromMedia.audio(soundName),
    videoUrl: getPathFromMedia.video(soundName),
    text: text,
    customPlaylist: false,
}));

export const initState: IInitState = {
    currentSound: soundsDefaultList[0],
    soundsList: soundsDefaultList,
    recentlyList: null,
    userCustomList: null,
}
