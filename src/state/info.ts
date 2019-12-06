import { Model, ProtocolVersion } from '../enums'

export interface AtemCapabilites {
	readonly mixEffects: number
	readonly sources: number
	readonly colorGenerators: number
	readonly auxilliaries: number
	readonly talkbackOutputs: number
	readonly mediaPlayers: number
	readonly serialPorts: number
	readonly maxHyperdecks: number
	readonly DVEs: number
	readonly stingers: number
	readonly superSources: number
	readonly talkbackOverSDI: number
	readonly downstreamKeyers: number
	readonly multiViewers: number
	readonly upstreamKeyers: number
}

export interface SuperSourceInfo {
	boxCount: number
}

export class DeviceInfo {
	public apiVersion: ProtocolVersion = 0
	public capabilities?: AtemCapabilites
	public model: Model = Model.Unknown
	public productIdentifier?: string
	public superSources: SuperSourceInfo[] = []
	public power: boolean[] = []
}
