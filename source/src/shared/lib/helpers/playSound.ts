import { SoundTypes } from '../enums/SoundTypes'
import DefaultSoundPath from '@/shared/audio/default.mp3'
import ErrorSoundPath from '@/shared/audio/error.mp3'
import RightSoundPath from '@/shared/audio/right.mp3'
import WarningSoundPath from '@/shared/audio/warning.wav'

export const playSound = (type: SoundTypes) => {
    const audio = new Audio()
    const context = new window.AudioContext()

    audio.src = (type == SoundTypes.DEFAULT) ? DefaultSoundPath:
        (type == SoundTypes.ERROR) ? ErrorSoundPath:
        (type == SoundTypes.RIGHT) ? RightSoundPath:
        (type == SoundTypes.WARNING) ? WarningSoundPath: ''

    audio.addEventListener('canplay', () => {
        const source = context.createMediaElementSource(audio)
        source.connect(context.destination)
    })

    audio.play()
}