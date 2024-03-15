export const checkSoundState = () => {
    return JSON.parse(localStorage.getItem('isSound')).isSound
}