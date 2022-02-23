import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/src/item"
import Script2 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script3 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const redButton = new Entity('redButton')
engine.addEntity(redButton)
redButton.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redButton.addComponentOrReplace(transform3)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(15.5, 2, 13),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.92386531829834, 5.6953125, 1.0005927085876465)
})
nftPictureFrame2.addComponentOrReplace(transform4)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8.5, 13, 15.5),
  rotation: new Quaternion(3.0981581063376906e-15, 0, 1.088531040241566e-15, -1),
  scale: new Vector3(9.94230842590332, 10.597467422485352, 1.1141860485076904)
})
plainText.addComponentOrReplace(transform5)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0.49999988079071045, 1, 3),
  rotation: new Quaternion(-6.433131378134633e-15, -0.6949041485786438, 8.283903696337802e-8, -0.7191024422645569),
  scale: new Vector3(7.382902145385742, 7.59375, 1.0011801719665527)
})
nftPictureFrame5.addComponentOrReplace(transform6)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15.5, 5.5, 14),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(3.1219496726989746, 3.2676851749420166, 1.0011814832687378)
})
nftPictureFrame.addComponentOrReplace(transform7)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(0.49999988079071045, 6, 2),
  rotation: new Quaternion(-6.433131378134633e-15, -0.6949041485786438, 8.283903696337802e-8, -0.7191024422645569),
  scale: new Vector3(2.7739856243133545, 2.84765625, 1.0005968809127808)
})
nftPictureFrame3.addComponentOrReplace(transform8)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(0.5, 13, 13.5),
  rotation: new Quaternion(-6.433131378134633e-15, -0.6949041485786438, 8.283903696337802e-8, -0.7191024422645569),
  scale: new Vector3(2.773984670639038, 2.84765625, 1.0005983114242554)
})
nftPictureFrame4.addComponentOrReplace(transform9)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(15.5, 12.5, 2),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(2.08210825920105, 2.1784567832946777, 1.0005968809127808)
})
nftPictureFrame6.addComponentOrReplace(transform10)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(15.5, 15.5, 3),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(7.382950305938721, 8.54296875, 1.0011796951293945)
})
nftPictureFrame7.addComponentOrReplace(transform11)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(0.5, 16, 13),
  rotation: new Quaternion(-6.433131378134633e-15, -0.6949041485786438, 8.283903696337802e-8, -0.7191024422645569),
  scale: new Vector3(5.541504859924316, 5.6953125, 1.0011823177337646)
})
nftPictureFrame8.addComponentOrReplace(transform12)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(redButton, {}, createChannel(channelId, redButton, channelBus))
script2.spawn(nftPictureFrame2, {"id":"19707794715962039650013670819326392846345927146224565303908839317122909732964","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script3.spawn(plainText, {"text":"PARTY inc.","font":"SF_Heavy","color":"#808080"}, createChannel(channelId, plainText, channelBus))
script2.spawn(nftPictureFrame5, {"id":"4959213124438965641461090154321913525620066269592130338760311886272687767553","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script2.spawn(nftPictureFrame, {"id":"19707794715962039650013670819326392846345927146224565303908839358904351588402","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script2.spawn(nftPictureFrame3, {"id":"19707794715962039650013670819326392846345927146224565303908839292933653921892","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script2.spawn(nftPictureFrame4, {"id":"19707794715962039650013670819326392846345927146224565303908839291834142294116","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script2.spawn(nftPictureFrame6, {"id":"19707794715962039650013670819326392846345927146224565303908839296232188805220","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script2.spawn(nftPictureFrame7, {"id":"19707794715962039650013670819326392846345927146224565303908839328118026010724","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script2.spawn(nftPictureFrame8, {"id":"19707794715962039650013670819326392846345927146224565303908839311625351594084","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))