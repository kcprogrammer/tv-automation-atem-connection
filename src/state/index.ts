import { DeviceInfo } from './info'
import { AtemVideoState } from './video'
import { AtemAudioState } from './audio'
import { MediaState } from './media'
import { InputChannel } from './input'
import { MacroState } from './macro'
import { SettingsState } from './settings'

import * as AtemStateUtil from './util'
export { AtemStateUtil }

export interface AtemState {
	info: DeviceInfo
	video: AtemVideoState
	audio: AtemAudioState
	media: MediaState
	inputs: { [inputId: number]: InputChannel | undefined }
	macro: MacroState
	settings: SettingsState
}

export class InvalidIdError extends Error {
	constructor(message: string, ...ids: number[]) {
		super(InvalidIdError.BuildErrorString(message, ids))
		Object.setPrototypeOf(this, new.target.prototype)
	}

	private static BuildErrorString(message: string, ids: number[]): string {
		if (ids && ids.length > 0) {
			return `${message} ${ids.join('-')} is not valid`
		} else {
			return message
		}
	}
}
