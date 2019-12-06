import { DeserializedCommand } from '../CommandBase'
import { AtemState } from '../../state'
import { AtemCapabilites } from '../../state/info'

export class TopologyCommand extends DeserializedCommand<AtemCapabilites> {
	public static readonly rawName = '_top'

	public static deserialize (rawCommand: Buffer) {
		const properties = {
			mixEffects: rawCommand[0],
			sources: rawCommand[1],
			colorGenerators: rawCommand[2],
			auxilliaries: rawCommand[3],
			talkbackOutputs: rawCommand[4],
			mediaPlayers: rawCommand[5],
			serialPorts: rawCommand[6],
			maxHyperdecks: rawCommand[7],
			DVEs: rawCommand[8],
			stingers: rawCommand[9],
			superSources: rawCommand[10],
			talkbackOverSDI: rawCommand[13],

			// TODO - define the below properly
			multiViewers: 2,
			downstreamKeyers: 2,
			upstreamKeyers: 2
		}

		return new TopologyCommand(properties)
	}

	public applyToState (state: AtemState) {
		state.info.capabilities = {
			...state.info.capabilities,
			...this.properties
		}
		return `info.capabilities`
	}
}
