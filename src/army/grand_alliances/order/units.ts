import { uniqBy } from 'lodash'
import DaughtersOfKhaine from 'army/daughters_of_khaine'
import Dispossessed from 'army/dispossessed'
import Fyreslayers from 'army/fyreslayers'
import IdonethDeepkin from 'army/idoneth'
import KharadronOverlords from 'army/kharadron_overlords'
import Seraphon from 'army/seraphon'
import StormcastEternals from 'army/stormcast_eternals'
import Sylvaneth from 'army/sylvaneth'
import { TUnits } from 'types/army'

// Unit Names
export const Units: TUnits = uniqBy(
  [
    ...DaughtersOfKhaine.Units,
    ...Dispossessed.Units,
    ...Fyreslayers.Units,
    ...IdonethDeepkin.Units,
    ...KharadronOverlords.Units,
    ...Seraphon.Units,
    ...StormcastEternals.Units,
    ...Sylvaneth.Units,
  ],
  'name'
)
