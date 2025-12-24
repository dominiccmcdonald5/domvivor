import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

export default function Location() {
  const { id } = useParams();
  const locationNumber = id?.replace('location-', '') || '1';

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#87CEEB] via-[#4A90E2] to-[#2C5F8D] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link to="/idol-hunt">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 px-6 py-3 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-xl text-white font-bold shadow-lg hover:bg-white/30 transition-all duration-300"
          >
            ← Back to Idol Hunt
          </motion.button>
        </Link>

        {/* Location Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            📍 LOCATION {locationNumber}
          </h1>
          <div className="h-1 w-48 bg-gradient-to-r from-white/60 to-white/20 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/20 backdrop-blur-md border-4 border-white/40 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl min-h-[400px]"
        >
          {locationNumber === '1' ? (
            <div className="max-h-[600px] overflow-y-auto">
              <p className="text-white/90 font-mono text-sm leading-relaxed break-all">
                {(() => {
                  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
                  const fullText = alphabet.repeat(1000);
                  
                  // Find all 'k' positions
                  const kPositions: number[] = [];
                  for (let i = 0; i < fullText.length; i++) {
                    if (fullText[i] === 'k') {
                      kPositions.push(i);
                    }
                  }
                  
                  // Pick a random k position
                  const randomIndex = Math.floor(Math.random() * kPositions.length);
                  const boldKPosition = kPositions[randomIndex];
                  
                  // Split the text and insert bold k
                  const before = fullText.slice(0, boldKPosition);
                  const after = fullText.slice(boldKPosition + 1);
                  
                  return (
                    <>
                      {before}
                      <strong className="font-bold text-white text-lg">k</strong>
                      {after}
                    </>
                  );
                })()}
              </p>
            </div>
          ) : locationNumber === '3' ? (
            <div className="max-h-[600px] overflow-y-auto">
              <div className="text-white/90 text-base leading-relaxed space-y-4">
                <p>The frozen winds sweep across the vast tundra with relentless force.</p>
                <p>Snow blankets everything in sight, creating a pristine white landscape.</p>
                <p>Ice crystals form intricate patterns on every surface they touch.</p>
                <p>Storms gather on the horizon, dark and foreboding in their approach.</p>
                <p>Rivers carve through the frozen earth, their waters flowing beneath thick ice.</p>
                <p>Eagles soar high above the clouds, surveying the land below.</p>
                <p>Trees stand bare and skeletal against the winter sky.</p>
                <p>Thunder rumbles in the distance, echoing through the valleys.</p>
                <p>Echoes of ancient songs drift through the mountain passes.</p>
                <p>Light filters through the clouds in brilliant rays of gold.</p>
                <p>Energy pulses through the frozen ground with each passing moment.</p>
                <p>Howling winds carry stories from distant lands across the ice.</p>
                <p>Twilight descends upon the landscape, painting everything in shades of purple.</p>
                <p>Frost clings to every branch and leaf throughout the forest.</p>
                <p>Ocean waves crash against the icy shores with tremendous power.</p>
                <p>Evening stars begin to appear in the darkening sky above.</p>
                <p>Northern lights dance across the heavens in ethereal beauty.</p>
                <p>Onwards the journey continues through this harsh and unforgiving land.</p>
              </div>
            </div>
          ) : locationNumber === '8' ? (
            <div className="max-h-[600px] overflow-y-auto flex items-center justify-center">
              <div className="text-white/90 text-xl leading-relaxed space-y-6 text-center max-w-3xl">
                <p className="text-5xl">🗿</p>
                <p className="text-2xl font-bold">Check the "studio" channel in the "Announcement" category</p>
                <div className="mt-6 p-6 bg-white/20 backdrop-blur-md rounded-2xl border-2 border-white/40">
                  <p className="text-lg">If there is an <span className="font-bold text-yellow-200">idol reaction</span> at the top of the channel, one of the letters is <span className="font-bold text-3xl text-green-300">B</span></p>
                  <p className="text-lg mt-4">If not, then there is <span className="font-bold text-red-300">no letter</span> in this location.</p>
                </div>
              </div>
            </div>
          ) : locationNumber === '7' ? (
            <div className="max-h-[600px] overflow-y-auto flex items-center justify-center">
              <div className="text-white/90 text-xl leading-relaxed space-y-6 text-center max-w-3xl">
                <p className="text-5xl">🥗</p>
                <p className="text-2xl font-bold">Look for who has the :salad: Salad role in the server.</p>
                <div className="mt-6 p-6 bg-white/20 backdrop-blur-md rounded-2xl border-2 border-white/40">
                  <p className="text-lg">If the person who has it is <span className="font-bold text-yellow-200">Tacocat</span>, this location doesn't have a letter.</p>
                  <p className="text-lg mt-4">If the person who has it is <span className="font-bold text-yellow-200">NOT Tacocat</span>, the letter is <span className="font-bold text-3xl text-green-300">c</span></p>
                </div>
              </div>
            </div>
          ) : locationNumber === '6' ? (
            <div className="max-h-[600px] overflow-y-auto flex items-center justify-center">
              <div className="text-white/90 text-xl leading-relaxed space-y-6 text-center max-w-3xl">
                <p className="text-5xl">🧩</p>
                <a 
                  href="https://www.proprofsgames.com/ugc/puzzle/sliding/domvivor-the-frozen-cavern-1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white/30 backdrop-blur-md border-2 border-white/50 rounded-xl text-white text-2xl font-bold shadow-2xl hover:bg-white/40 hover:scale-105 transition-all duration-300"
                >
                  Click Here for Sliding Puzzle
                </a>
                <p className="text-sm text-white/70 mt-4">https://www.proprofsgames.com/ugc/puzzle/sliding/domvivor-the-frozen-cavern-1/</p>
              </div>
            </div>
          ) : locationNumber === '5' ? (
            <div className="max-h-[600px] overflow-y-auto flex items-center justify-center">
              <div className="text-white/90 text-xl leading-relaxed space-y-6 text-center max-w-3xl">
                <p className="text-5xl">🧩</p>
                <a 
                  href="https://www.jigsawplanet.com/?rc=play&pid=32a57592b2cb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white/30 backdrop-blur-md border-2 border-white/50 rounded-xl text-white text-2xl font-bold shadow-2xl hover:bg-white/40 hover:scale-105 transition-all duration-300"
                >
                  Click Here for Puzzle
                </a>
                <p className="text-sm text-white/70 mt-4">https://www.jigsawplanet.com/?rc=play&pid=32a57592b2cb</p>
              </div>
            </div>
          ) : locationNumber === '4' ? (
            <div className="max-h-[600px] overflow-y-auto flex items-center justify-center">
              <div className="text-white/90 text-xl leading-relaxed space-y-6 text-center max-w-3xl">
                <p className="text-3xl font-bold">😏</p>
                <p>I made a fake out idol hunt in the server.</p>
                <p>To be nice, the 3rd letter of the command you used (Not including the ?) is one of the letters for the actual idol.</p>
              </div>
            </div>
          ) : locationNumber === '2' ? (
            <div className="max-h-[600px] overflow-y-auto">
              <p className="text-white/90 text-sm leading-relaxed">
                {(() => {
                  const words = ['apple', 'blanket', 'crystal', 'dragon', 'elephant', 'forest', 'garden', 'hammer', 'island', 'jungle', 'kernel', 'laptop', 'mountain', 'network', 'orange', 'pencil', 'question', 'rainbow', 'silver', 'thunder', 'umbrella', 'volcano', 'window', 'xylophone', 'yellow', 'zebra', 'anchor', 'button', 'candle', 'dolphin', 'engine', 'feather', 'guitar', 'helmet', 'igloo', 'jacket', 'kitten', 'lantern', 'marble', 'needle', 'octopus', 'purple', 'quartz', 'rocket', 'spider', 'turtle', 'uniform', 'violet', 'wagon', 'zipper', 'airplane', 'bicycle', 'camera', 'diamond', 'eagle', 'flower', 'glacier', 'honey', 'ink', 'jigsaw', 'kayak', 'lemon', 'mirror', 'nebula', 'ocean', 'pyramid', 'quill', 'river', 'shadow', 'temple', 'unicorn', 'valley', 'whale', 'yarn', 'zephyr', 'amber', 'bridge', 'castle', 'desert', 'echo', 'falcon', 'galaxy', 'harbor', 'iron', 'jasmine', 'kingdom', 'leopard', 'melody', 'necklace', 'oasis', 'palace', 'quicksand', 'ruby', 'sunset', 'tornado', 'universe', 'vortex', 'waterfall', 'xenon', 'yacht', 'zodiac', 'abstract', 'boulder', 'comet', 'dagger', 'emerald', 'fossil', 'geyser', 'horizon', 'iceberg', 'javelin', 'knapsack', 'lighthouse', 'meteor', 'nexus', 'orbit', 'panther', 'quantum', 'raven', 'sapphire', 'tiger', 'utopia', 'vertex', 'wizard', 'xylem', 'yonder', 'zenith', 'abyss', 'beacon', 'cipher', 'delta', 'eclipse', 'fusion', 'garnet', 'helix', 'impulse', 'jewel', 'krypton', 'lunar', 'magma', 'nimbus', 'opal', 'phoenix', 'quasar', 'radiant', 'stellar', 'titan', 'ultra', 'vapor', 'warden', 'xenolith', 'yamato', 'zircon', 'arctic', 'badger', 'canyon', 'dawn', 'ember', 'fjord', 'gravel', 'haze', 'ivory', 'jaguar', 'kelp', 'lynx', 'mesa', 'north', 'osprey', 'pearl', 'quest', 'ridge', 'storm', 'tundra', 'umber', 'vessel', 'willow', 'xenial', 'youth', 'zest', 'alpine', 'birch', 'coral', 'dune', 'ebony', 'fern', 'granite', 'heath', 'iris', 'jade', 'kite', 'lotus', 'moss', 'nova', 'onyx', 'pine', 'quorum', 'reef', 'sage', 'thyme', 'upland', 'vine', 'wood', 'xeric', 'yew', 'zinc', 'acorn', 'brook', 'clay', 'drift', 'elm', 'fog', 'glen', 'hill', 'isle', 'jay', 'knoll', 'leaf', 'mist', 'nest', 'oak', 'pond', 'quake', 'rain', 'sand', 'tide', 'vale', 'wave', 'yucca', 'azure', 'blaze', 'cloud', 'dust', 'earth', 'flame', 'grass', 'hail', 'iron', 'jet', 'kindle', 'lava', 'mud', 'night', 'ore', 'peak', 'quill', 'rock', 'snow', 'tree', 'wind', 'gold', 'berry', 'cave', 'deep', 'edge', 'field', 'grove', 'hedge', 'inlet', 'joint', 'keep', 'lake', 'moor', 'node', 'olive', 'path', 'range', 'slope', 'trail', 'union', 'vault', 'well', 'zone', 'basin', 'cliff', 'dell', 'fall', 'gulf', 'knob', 'marsh', 'plain', 'shoal', 'swamp', 'beach', 'coast', 'drain', 'estuary', 'flat', 'gully', 'inlet', 'ledge', 'outlet', 'rapid', 'shore', 'strait', 'tributary', 'basin', 'brook', 'canal', 'creek', 'delta', 'fjord', 'gorge', 'haven', 'lagoon', 'ravine', 'sound', 'spring', 'stream', 'torrent', 'cascade', 'current', 'eddy', 'flood', 'geyser', 'pool', 'source', 'spout', 'surge', 'trough', 'whirlpool', 'alpine', 'barren', 'crest', 'divide', 'escarpment', 'foothill', 'highland', 'incline', 'junction', 'massif', 'precipice', 'ridge', 'summit', 'tableland', 'upland', 'volcano', 'bluff', 'butte', 'dome', 'elevation', 'foothill', 'gradient', 'height', 'knoll', 'mesa', 'mound', 'outcrop', 'pinnacle', 'plateau', 'promontory', 'rise', 'scarp', 'slope', 'spur', 'terrace', 'basin', 'cavity', 'chasm', 'crater', 'crevice', 'depression', 'fissure', 'gorge', 'grotto', 'hollow', 'pit', 'sinkhole', 'trench', 'void', 'cavern', 'chamber', 'corridor', 'gallery', 'passage', 'shaft', 'tunnel', 'alder', 'aspen', 'beech', 'cedar', 'cypress', 'dogwood', 'elder', 'fig', 'hazel', 'holly', 'juniper', 'larch', 'maple', 'myrtle', 'palm', 'poplar', 'rowan', 'spruce', 'teak', 'walnut', 'bamboo', 'cactus', 'clover', 'daisy', 'fern', 'heather', 'ivy', 'jasmine', 'lavender', 'lily', 'orchid', 'poppy', 'rose', 'sage', 'thistle', 'tulip', 'violet', 'yarrow', 'azalea', 'begonia', 'carnation', 'daffodil', 'edelweiss', 'forsythia', 'gardenia', 'hibiscus', 'iris', 'jonquil', 'kalmia', 'laurel', 'magnolia', 'narcissus', 'oleander', 'peony', 'quince', 'rhododendron', 'sunflower', 'tansy', 'ursinia', 'verbena', 'wisteria', 'xeranthemum', 'yarrow', 'zinnia', 'acacia', 'balsam', 'columbine', 'dahlia', 'erica', 'freesia', 'gentian', 'hyacinth', 'impatiens', 'jasmine', 'knapweed', 'lobelia', 'marigold', 'nemesia', 'oxalis', 'primrose', 'ranunculus', 'snapdragon', 'tuberose', 'urtica', 'vinca', 'wallflower', 'xyris', 'yucca', 'zoysia', 'algae', 'bryophyte', 'lichen', 'fungus', 'kelp', 'moss', 'plankton', 'seaweed', 'spore', 'thallus', 'badger', 'beaver', 'bison', 'bobcat', 'caribou', 'chipmunk', 'cougar', 'coyote', 'deer', 'elk', 'ermine', 'ferret', 'fox', 'gopher', 'groundhog', 'hare', 'hedgehog', 'lemming', 'lynx', 'marmot', 'mink', 'moose', 'mouse', 'muskrat', 'opossum', 'otter', 'porcupine', 'prairie', 'rabbit', 'raccoon', 'rat', 'seal', 'shrew', 'skunk', 'squirrel', 'stoat', 'vole', 'weasel', 'wolf', 'wolverine', 'woodchuck', 'albatross', 'bittern', 'blackbird', 'bluebird', 'bunting', 'buzzard', 'cardinal', 'chickadee', 'condor', 'cormorant', 'crane', 'crow', 'cuckoo', 'curlew', 'dipper', 'dove', 'duck', 'dunlin', 'egret', 'finch', 'flamingo', 'flycatcher', 'gannet', 'godwit', 'goldfinch', 'goose', 'grackle', 'grebe', 'grosbeak', 'grouse', 'gull', 'harrier', 'heron', 'ibis', 'jay', 'junco', 'kestrel', 'kingfisher', 'kite', 'lark', 'loon', 'magpie', 'mallard', 'martin', 'meadowlark', 'merganser', 'mockingbird', 'nighthawk', 'nuthatch', 'oriole', 'osprey', 'owl', 'oystercatcher', 'partridge', 'pelican', 'petrel', 'pewee', 'pheasant', 'pigeon', 'pipit', 'plover', 'puffin', 'quail', 'rail', 'raven', 'redpoll', 'redstart', 'robin', 'sandpiper', 'sapsucker', 'shearwater', 'shrike', 'siskin', 'snipe', 'sparrow', 'starling', 'stork', 'swallow', 'swan', 'swift', 'tanager', 'teal', 'tern', 'thrasher', 'thrush', 'titmouse', 'towhee', 'turnstone', 'vireo', 'vulture', 'warbler', 'waxwing', 'whimbrel', 'woodpecker', 'wren', 'yellowlegs', 'alligator', 'anaconda', 'asp', 'basilisk', 'boa', 'chameleon', 'cobra', 'crocodile', 'gecko', 'iguana', 'komodo', 'lizard', 'monitor', 'python', 'rattlesnake', 'salamander', 'skink', 'snake', 'tortoise', 'turtle', 'viper', 'bass', 'carp', 'catfish', 'chub', 'cod', 'dace', 'darter', 'dory', 'eel', 'flounder', 'goby', 'grayling', 'grouper', 'guppy', 'haddock', 'halibut', 'herring', 'mackerel', 'marlin', 'minnow', 'mullet', 'perch', 'pike', 'plaice', 'salmon', 'sardine', 'shad', 'shark', 'smelt', 'snapper', 'sole', 'sturgeon', 'swordfish', 'tilapia', 'trout', 'tuna', 'turbot', 'walleye', 'beetle', 'butterfly', 'caterpillar', 'cicada', 'cricket', 'dragonfly', 'firefly', 'grasshopper', 'hornet', 'ladybug', 'locust', 'mantis', 'mayfly', 'mosquito', 'moth', 'wasp', 'clam', 'conch', 'crab', 'crayfish', 'lobster', 'mussel', 'nautilus', 'octopus', 'oyster', 'prawn', 'scallop', 'shrimp', 'slug', 'snail', 'squid', 'starfish', 'urchin', 'whelk', 'abalone', 'barnacle', 'chiton', 'cockle', 'cowrie', 'limpet', 'periwinkle', 'winkle', 'aluminum', 'brass', 'bronze', 'chromium', 'cobalt', 'copper', 'gold', 'iridium', 'iron', 'lead', 'manganese', 'mercury', 'nickel', 'osmium', 'palladium', 'platinum', 'rhodium', 'ruthenium', 'silver', 'steel', 'tantalum', 'tin', 'titanium', 'tungsten', 'uranium', 'vanadium', 'zinc', 'zirconium', 'carbon', 'diamond', 'graphite', 'silicon', 'sulfur', 'phosphorus', 'nitrogen', 'oxygen', 'hydrogen', 'helium', 'neon', 'argon', 'krypton', 'xenon', 'radon', 'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'];
                  
                  // Generate exactly 1000 unique words by cycling through the base array
                  const uniqueWords: string[] = [];
                  let counter = 0;
                  
                  while (uniqueWords.length < 1000) {
                    const baseWord = words[counter % words.length];
                    const suffix = Math.floor(counter / words.length);
                    const word = suffix > 0 ? `${baseWord}${suffix}` : baseWord;
                    uniqueWords.push(word);
                    counter++;
                  }
                  
                  return uniqueWords.join(' ');
                })()}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="text-8xl mb-6">❄️</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Explore This Location
              </h2>
              <p className="text-xl text-white/90 text-center leading-relaxed">
                Search carefully... there might be a hidden letter somewhere in this frozen location.
              </p>
              
              {/* Placeholder for content - you can add clues, images, or hidden letters here */}
              <div className="mt-8 p-6 bg-white/10 rounded-2xl border-2 border-white/30 w-full">
                <p className="text-lg text-white/80 italic text-center">
                  🔍 Keep your eyes open for clues...
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation to other locations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center"
        >
          {parseInt(locationNumber) > 1 && (
            <Link to={`/idol-hunt/location-${parseInt(locationNumber) - 1}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-xl text-white font-bold shadow-lg hover:bg-white/30 transition-all duration-300"
              >
                ← Previous Location
              </motion.button>
            </Link>
          )}
          
          <div className="flex-1"></div>
          
          {parseInt(locationNumber) < 15 && (
            <Link to={`/idol-hunt/location-${parseInt(locationNumber) + 1}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-xl text-white font-bold shadow-lg hover:bg-white/30 transition-all duration-300"
              >
                Next Location →
              </motion.button>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}
