/*
To update this type when adding new items:

Open the game, and run the following code in the browser console

copy(`type ItemNameType
    = ${[...new Set(Object.values(ItemList).map(i => i.name))].map(i => `'${i.replace(/'/g, "\\'")}'`).join('\n    | ')};`);

Replace the everything in this file (except for this comment) with what was copied
*/

export type ItemNameType
= 'xAttack'
| 'xClick'
| 'Lucky_egg'
| 'Token_collector'
| 'Dowsing_machine'
| 'Lucky_incense'
| 'ChopleBerry'
| 'KebiaBerry'
| 'ShucaBerry'
| 'ChartiBerry'
| 'SmallRestore'
| 'MediumRestore'
| 'LargeRestore'
| 'Dungeon_ticket'
| 'Explorer_kit'
| 'Event_calendar'
| 'Squirtbottle'
| 'Sprinklotad'
| 'Explosive_Charge'
| 'Treasure_Scanner'
| 'Boost_Mulch'
| 'Rich_Mulch'
| 'Surprise_Mulch'
| 'Amaze_Mulch'
| 'Freeze_Mulch'
| 'Pokeball'
| 'Greatball'
| 'Ultraball'
| 'Masterball'
| 'Fastball'
| 'Quickball'
| 'Timerball'
| 'Duskball'
| 'Luxuryball'
| 'Diveball'
| 'Lureball'
| 'Nestball'
| 'Repeatball'
| 'Beastball'
| 'Berry_Shovel'
| 'Mulch_Shovel'
| 'PokeBlock_Black'
| 'PokeBlock_Red'
| 'PokeBlock_Blue'
| 'PokeBlock_Pink'
| 'PokeBlock_Green'
| 'PokeBlock_Yellow'
| 'PokeBlock_Gold'
| 'PokeBlock_Purple'
| 'PokeBlock_Indigo'
| 'PokeBlock_Brown'
| 'PokeBlock_Light_Blue'
| 'PokeBlock_Olive'
| 'PokeBlock_Beige'
| 'PokeBlock_Gray'
| 'PokeBlock_White'
| 'Abomasite'
| 'Absolite'
| 'Aerodactylite'
| 'Aggronite'
| 'Alakazite'
| 'Altarianite'
| 'Ampharosite'
| 'Audinite'
| 'Beedrillite'
| 'Blastoisinite'
| 'Blazikenite'
| 'Blue_Orb'
| 'Cameruptite'
| 'Charizardite_X'
| 'Charizardite_Y'
| 'Diancite'
| 'Galladite'
| 'Garchompite'
| 'Gardevoirite'
| 'Gengarite'
| 'Glalitite'
| 'Gyaradosite'
| 'Heracronite'
| 'Houndoominite'
| 'Kangaskhanite'
| 'Latiasite'
| 'Latiosite'
| 'Lopunnite'
| 'Lucarionite'
| 'Manectite'
| 'Mawilite'
| 'Metagrossite'
| 'Meteorite'
| 'Pidgeotite'
| 'Pinsirite'
| 'Red_Orb'
| 'Sablenite'
| 'Salamencite'
| 'Sceptilite'
| 'Scizorite'
| 'Sharpedonite'
| 'Slowbronite'
| 'Steelixite'
| 'Swampertite'
| 'Tyranitarite'
| 'Venusaurite'
| 'Fire_egg'
| 'Water_egg'
| 'Grass_egg'
| 'Fighting_egg'
| 'Electric_egg'
| 'Dragon_egg'
| 'Pokemon_egg'
| 'Mystery_egg'
| 'Meteorite_Bills_Errand'
| 'Tidal_Bell_Lugia'
| 'Clear_Bell_Hooh'
| 'GS_Ball_Celebi'
| 'Eon_Ticket_Latis'
| 'Celios_Errand_Ruby'
| 'Celios_Errand_Sapphire'
| 'Crystalline_Cocoon_Jirachi'
| 'Meteorite_Shard_Delta'
| 'Mysterious_Vial_Detective_Pikachu'
| 'Heart_Diamond_Diancie'
| 'Red_Petal_Mina'
| 'Orange_Petal_Mina'
| 'Yellow_Petal_Mina'
| 'Green_Petal_Mina'
| 'Blue_Petal_Mina'
| 'Purple_Petal_Mina'
| 'Pink_Petal_Mina'
| 'Sand_Bag_Magikarp_Jump'
| 'Jump_Counter_Magikarp_Jump'
| 'Timber_Magikarp_Jump'
| 'Rock_Cruncher_Magikarp_Jump'
| 'Power_Generator_Magikarp_Jump'
| 'Pokeball_Smash_Magikarp_Jump'
| 'Push_Dwebble_Magikarp_Jump'
| 'Push_Boldore_Magikarp_Jump'
| 'Push_Forretress_Magikarp_Jump'
| 'Push_Golem_Magikarp_Jump'
| 'Push_Steelix_Magikarp_Jump'
| 'Prison_Bottle'
| 'Fighting_Memory_Silvally'
| 'Rock_Memory_Silvally'
| 'Dark_Memory_Silvally'
| 'Fairy_Memory_Silvally'
| 'Water_Memory_Silvally'
| 'Grass_Memory_Silvally'
| 'Fire_Memory_Silvally'
| 'Electric_Memory_Silvally'
| 'Ice_Memory_Silvally'
| 'Ground_Memory_Silvally'
| 'Bug_Memory_Silvally'
| 'Flying_Memory_Silvally'
| 'Poison_Memory_Silvally'
| 'Ghost_Memory_Silvally'
| 'Psychic_Memory_Silvally'
| 'Steel_Memory_Silvally'
| 'Dragon_Memory_Silvally'
| 'Max_Mushroom_IoA'
| 'Shaderoot_Carrot_Calyrex'
| 'Iceroot_Carrot_Calyrex'
| 'Protein'
| 'Calcium'
| 'Carbos'
| 'Rare_Candy'
| 'Leaf_stone'
| 'Fire_stone'
| 'Water_stone'
| 'Thunder_stone'
| 'Moon_stone'
| 'Linking_cord'
| 'Sun_stone'
| 'Soothe_bell'
| 'Metal_coat'
| 'Kings_rock'
| 'Upgrade'
| 'Dragon_scale'
| 'Prism_scale'
| 'Deepsea_tooth'
| 'Deepsea_scale'
| 'Shiny_stone'
| 'Dusk_stone'
| 'Dawn_stone'
| 'Razor_claw'
| 'Razor_fang'
| 'Electirizer'
| 'Magmarizer'
| 'Protector'
| 'Dubious_disc'
| 'Reaper_cloth'
| 'Black_DNA'
| 'White_DNA'
| 'Sachet'
| 'Whipped_dream'
| 'Key_stone'
| 'Ice_stone'
| 'Solar_light'
| 'Lunar_light'
| 'Pure_light'
| 'Sweet_apple'
| 'Tart_apple'
| 'Cracked_pot'
| 'Galarica_cuff'
| 'Galarica_wreath'
| 'Black_mane_hair'
| 'White_mane_hair'
| 'Black_augurite'
| 'Peat_block'
| 'Auspicious_armor'
| 'Malicious_armor'
| 'Leaders_crest'
| 'Gimmighoul_coin'
| 'Syrupy_apple'
| 'Unremarkable_teacup'
| 'FarmHandBailey'
| 'FarmHandKerry'
| 'FarmHandRiley'
| 'FarmHandJamie'
| 'Yellow_Flute'
| 'Time_Flute'
| 'Black_Flute'
| 'Red_Flute'
| 'White_Flute'
| 'Blue_Flute'
| 'HatcheryHelperJasmine'
| 'HatcheryHelperDakota'
| 'HatcheryHelperCameron'
| 'HatcheryHelperCarey'
| 'HatcheryHelperKris'
| 'HatcheryHelperNoel'
| 'Wonder_Chest'
| 'Miracle_Chest'
| 'Joy_Scent'
| 'Excite_Scent'
| 'Vivid_Scent'
| 'Muscle_Band'
| 'Light_Ball'
| 'Quick_Powder'
| 'Thick_Club'
| 'Soul_Dew'
| 'Adamant_Orb'
| 'Lustrous_Orb'
| 'Griseous_Orb'
| 'Burn_Drive'
| 'Chill_Drive'
| 'Douse_Drive'
| 'Shock_Drive'
| 'Leek'
| 'Rusted_Sword'
| 'Rusted_Shield'
| 'Black_Belt'
| 'Black_Glasses'
| 'Charcoal'
| 'Dragon_Fang'
| 'Magnet'
| 'Metal_Powder'
| 'Miracle_Seed'
| 'Mystic_Water'
| 'Never_Melt_Ice'
| 'Pink_Bow'
| 'Poison_Barb'
| 'Rock_Incense'
| 'Sharp_Beak'
| 'Silk_Scarf'
| 'Silver_Powder'
| 'Soft_Sand'
| 'Spell_Tag'
| 'Twisted_Spoon'
| 'Power_Herb'
| 'Macho_Brace'
| 'Power_Bracer'
| 'Pinkan Arbok'
| 'Pinkan Oddish'
| 'Pinkan Poliwhirl'
| 'Pinkan Geodude'
| 'Pinkan Dodrio'
| 'Charity Chansey'
| 'Exeggcute (Single)'
| 'Lickitung'
| 'Pinkan Weezing'
| 'Pinkan Scyther'
| 'Mr. Mime'
| 'Pinkan Electabuzz'
| 'Jynx'
| 'Magikarp'
| 'Magikarp Brown Stripes'
| 'Magikarp Blue Raindrops'
| 'Magikarp Saucy Violet'
| 'Magikarp (Feebas)'
| 'Eevee'
| 'Porygon'
| 'Togepi'
| 'Hoppip (Chimecho)'
| 'Beldum'
| 'Skorupi'
| 'Combee'
| 'Burmy (Plant)'
| 'Cherubi'
| 'Spiritomb'
| 'Zorua'
| 'Meloetta (Pirouette)'
| 'Furfrou (Debutante)'
| 'Furfrou (Diamond)'
| 'Furfrou (Matron)'
| 'Furfrou (Dandy)'
| 'Furfrou (Kabuki)'
| 'Furfrou (Pharaoh)'
| 'Furfrou (Star)'
| 'Furfrou (La Reine)'
| 'Type: Null'
| 'Poipole'
| 'Silvally (Fighting) 1'
| 'Silvally (Fighting) 2'
| 'Silvally (Rock) 1'
| 'Silvally (Rock) 2'
| 'Silvally (Dark) 1'
| 'Silvally (Dark) 2'
| 'Silvally (Fairy) 1'
| 'Silvally (Fairy) 2'
| 'Silvally (Water) 1'
| 'Silvally (Water) 2'
| 'Silvally (Grass) 1'
| 'Silvally (Grass) 2'
| 'Silvally (Fire) 1'
| 'Silvally (Fire) 2'
| 'Silvally (Electric) 1'
| 'Silvally (Electric) 2'
| 'Silvally (Ice) 1'
| 'Silvally (Ice) 2'
| 'Silvally (Ground) 1'
| 'Silvally (Ground) 2'
| 'Silvally (Bug) 1'
| 'Silvally (Bug) 2'
| 'Silvally (Flying) 1'
| 'Silvally (Flying) 2'
| 'Silvally (Poison) 1'
| 'Silvally (Poison) 2'
| 'Silvally (Ghost) 1'
| 'Silvally (Ghost) 2'
| 'Silvally (Psychic) 1'
| 'Silvally (Psychic) 2'
| 'Silvally (Steel) 1'
| 'Silvally (Steel) 2'
| 'Silvally (Dragon) 1'
| 'Silvally (Dragon) 2'
| 'Dracozolt'
| 'Arctozolt'
| 'Dracovish'
| 'Arctovish'
| 'Zarude (Dada)'
| 'Staryu'
| 'Igglybuff'
| 'Shuckle'
| 'Smoochum'
| 'Ralts'
| 'Swablu'
| 'Drifloon'
| 'Bronzor'
| 'Riolu'
| 'Rotom'
| 'Munna'
| 'Sigilyph'
| 'Tornadus (Therian)'
| 'Thundurus (Therian)'
| 'Landorus (Therian)'
| 'Dugtrio (Punk)'
| 'Gengar (Punk)'
| 'Goldeen (Diva)'
| 'Onix (Rocker)'
| 'Tangela (Pom-pom)'
| 'Weepinbell (Fancy)'
| 'Sudowoodo (Golden)'
| 'Pikachu (Rock Star)'
| 'Pikachu (Belle)'
| 'Pikachu (Pop Star)'
| 'Pikachu (Ph. D.)'
| 'Pikachu (Libre)'
| 'Normalium Z'
| 'Firium Z'
| 'Waterium Z'
| 'Electrium Z'
| 'Grassium Z'
| 'Icium Z'
| 'Fightinium Z'
| 'Poisonium Z'
| 'Groundium Z'
| 'Flyinium Z'
| 'Psychium Z'
| 'Buginium Z'
| 'Rockium Z'
| 'Ghostium Z'
| 'Dragonium Z'
| 'Darkinium Z'
| 'Steelium Z'
| 'Fairium Z'
| 'Great_Twisted_Spoon';
