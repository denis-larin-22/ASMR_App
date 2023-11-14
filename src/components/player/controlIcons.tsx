interface IIconList {
    [key: string]: JSX.Element;
}

export const controlIcons: IIconList = {
    back: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M13.4933 5.586V11.966C13.4933 13.2727 12.0733 14.0927 10.94 13.4393L8.17334 11.846L5.40667 10.246C4.27334 9.59266 4.27334 7.95933 5.40667 7.306L8.17334 5.706L10.94 4.11266C12.0733 3.45933 13.4933 4.27266 13.4933 5.586Z" fill="white" />
            <path d="M2.50668 13.3927C2.23335 13.3927 2.00668 13.166 2.00668 12.8927V4.65271C2.00668 4.37938 2.23335 4.15271 2.50668 4.15271C2.78002 4.15271 3.00668 4.37938 3.00668 4.65271V12.8927C3.00668 13.166 2.78002 13.3927 2.50668 13.3927Z" fill="white" />
        </svg>
    ),
    play: (
        <svg width="16" height="17" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333344 4.77269V2.95366C0.333344 0.619264 1.98563 -0.33566 4.0017 0.831537L5.57814 1.741L7.15463 2.65047C9.17069 3.81767 9.17069 5.7277 7.15463 6.8949L5.57814 7.80437L4.0017 8.71383C1.98563 9.88103 0.333344 8.92611 0.333344 6.59171V4.77269Z" fill="#EFEEE0" />
        </svg>
    ),
    pause: (
        <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 -960 960 960" width="16">
            <path d="M525-200v-560h235v560H525Zm-325 0v-560h235v560H200Zm385-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z" fill="#EFEEE0" />
        </svg>
    ),
    next: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.50667 5.586V11.966C2.50667 13.2727 3.92667 14.0927 5.06 13.4393L7.82667 11.846L10.5933 10.246C11.7267 9.59266 11.7267 7.95933 10.5933 7.306L7.82667 5.706L5.06 4.11266C3.92667 3.45933 2.50667 4.27266 2.50667 5.586Z" fill="white" />
            <path d="M13.4933 13.3927C13.22 13.3927 12.9933 13.166 12.9933 12.8927V4.65271C12.9933 4.37938 13.22 4.15271 13.4933 4.15271C13.7667 4.15271 13.9933 4.37938 13.9933 4.65271V12.8927C13.9933 13.166 13.7733 13.3927 13.4933 13.3927Z" fill="white" />
        </svg>
    ),
    fullScreen: (
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="17">
            <path d="M140.001-140.001v-290.255h50.255v205.001l544.489-544.489H529.744v-50.255h290.255v290.255h-50.255v-205.001L225.255-190.256h205.001v50.255H140.001Z" fill='white' />
        </svg>
    ),
    fold: (
        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" fill="white" /></svg>
    ),
    unfold: (
        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" fill="white" /></svg>
    ),
    arrowDown: (
        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M480-360 280-560h400L480-360Z" fill="#EFEEE0" /></svg>
    ),
    arrowUp: (
        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="m280-400 200-200 200 200H280Z" fill="#EFEEE0" /></svg>
    )
}