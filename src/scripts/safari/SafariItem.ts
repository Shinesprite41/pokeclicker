class SafariItem {
    constructor(public x: number, public y: number) {
    }
}

type SafariItemWeighed = {
    item: BagItem,
    weight: number,
    requirement?: Requirement
}

class SafariItemController {
    public static list: Record<GameConstants.Region, Array<SafariItemWeighed>> = {
        [GameConstants.Region.kanto]: [
            {item: {id: 'Razz', type: ItemType.berry}, weight: 1.8},
            {item: {id: 'Nanab', type: ItemType.berry}, weight: 1.8},
            {item: {id: 'Pinap', type: ItemType.berry}, weight: 1.8},
            {item: {id: 'Sitrus', type: ItemType.berry}, weight: 1.8},
            {item: {id: 'Oran', type: ItemType.berry}, weight: 1.8},
            {item: {id: 'Leaf Stone', type: ItemType.underground}, weight: 0.25},
            {item: {id: 'Fire Stone', type: ItemType.underground}, weight: 0.25},
            {item: {id: 'Thunder Stone', type: ItemType.underground}, weight: 0.25},
            {item: {id: 'Water Stone', type: ItemType.underground}, weight: 0.25},
            {item: {id: 'MediumRestore', type: ItemType.item}, weight: 2.25},
            {item: {id: 'LargeRestore', type: ItemType.item}, weight: 1.25},
            {item: {id: 'Protein', type: ItemType.item}, weight: 0.25},
            {item: {id: 'Rare_Candy', type : ItemType.item}, weight : 1},
            {item: {id: 'Revive', type: ItemType.underground}, weight: 2.5},
            {item: {id: 'Max Revive', type: ItemType.underground}, weight: 1.5},
            {item: {id: 'Exeggcute (Single)', type: ItemType.item}, weight: 0.25, requirement: new MultiRequirement([new SafariLevelRequirement(5), new ObtainedPokemonRequirement('Exeggcute')])},
            {item: {id: 'Pinsirite', type: ItemType.item}, weight: 1, requirement: new MultiRequirement([new MaxRegionRequirement(GameConstants.Region.kalos), new ObtainedPokemonRequirement('Pinsir'), new SafariLevelRequirement(10)])},
        ],
        [GameConstants.Region.johto]: [
            {item: {id: 'Nestball', type: ItemType.item}, weight: 1},
            {item: {id: 'Fastball', type: ItemType.item}, weight: 1},
            {item: {id: 'Luxuryball', type: ItemType.item}, weight: 1},
            {item: {id: 'MediumRestore', type: ItemType.item}, weight: 1},
            {item: {id: 'LargeRestore', type: ItemType.item}, weight: 1},
            {item: {id: 'Boost_Mulch', type: ItemType.item}, weight: 2},
            {item: {id: 'Rich_Mulch', type: ItemType.item}, weight: 2},
            {item: {id: 'Surprise_Mulch', type: ItemType.item}, weight: 2},
            {item: {id: 'Amaze_Mulch', type: ItemType.item}, weight: 2},
            {item: {id: 'Freeze_Mulch', type: ItemType.item}, weight: 2},
            {item: {id: 'Berry_Shovel', type: ItemType.item}, weight: 1},
            {item: {id: 'Mulch_Shovel', type: ItemType.item}, weight: 1},
            {item: {id: 'Rare_Candy', type : ItemType.item}, weight : 1},
            {item: {id: 'Sun Stone', type: ItemType.underground}, weight: 1},
            {item: {id: 'Everstone', type: ItemType.underground}, weight: 1},

        ],
        [GameConstants.Region.kalos]: [
            {item: {id: 'Mago', type: ItemType.berry}, weight: 1.95},
            {item: {id: 'Iapapa', type: ItemType.berry}, weight: 1.95},
            {item: {id: 'Hondew', type: ItemType.berry}, weight: 1.95},
            {item: {id: 'Tamato', type: ItemType.berry}, weight: 1.95},
            {item: {id: 'Durin', type: ItemType.berry}, weight: 1.95},
            {item: {id: 'Shiny Stone', type: ItemType.underground}, weight: 0.33},
            {item: {id: 'Dusk Stone', type: ItemType.underground}, weight: 0.33},
            {item: {id: 'Dawn Stone', type: ItemType.underground}, weight: 0.34},
            {item: {id: 'Carbos', type: ItemType.item}, weight: 0.25},
            {item: {id: 'Calcium', type: ItemType.item}, weight: 0.25},
            {item: {id: 'Rare_Candy', type : ItemType.item}, weight : 1},
            {item: {id: 'Duskball', type: ItemType.item}, weight: 2},
            {item: {id: 'Luxuryball', type: ItemType.item}, weight: 2},
            {item: {id: 'Repeatball', type: ItemType.item}, weight: 1.5},
            {item: {id: 'Star Piece', type: ItemType.underground}, weight: 1},
            {item: {id: 'Exeggcute (Single)', type: ItemType.item}, weight: 0.25, requirement: new MultiRequirement([new SafariLevelRequirement(5), new ObtainedPokemonRequirement('Exeggcute')])},
            {item: {id: 'Scizorite', type: ItemType.item}, weight: 1, requirement: new MultiRequirement([new MaxRegionRequirement(GameConstants.Region.kalos), new ObtainedPokemonRequirement('Scizor'), new SafariLevelRequirement(15)])},
        ],
    }

    public static getRandomItem() {
        if (!SafariItemController.list[player.region]) {
            return undefined;
        }
        const list = SafariItemController.list[player.region].filter((i) => (!i.requirement || i.requirement.isCompleted()) && BagHandler.isAvailable(i.item));
        return Rand.fromWeightedArray(list.map((i) => i.item), list.map((i) => i.weight));
    }

    public static currentRegionHasItems() : boolean {
        if (SafariItemController.getRandomItem()) {
            return true;
        }
        return false;
    }
}
