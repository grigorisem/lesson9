//import {addNum, result} from "./src/script/ls7"
//import * as testFile from "./src/script/ls7"
import {seasons} from "./src/script/data"
import {Tseason} from "./src/script/types"
let maxincom: Tseason | null = null;
let maxseasons: string | null = null;
let minseason: string | null = null;
let maxhired: Tseason | null = null;
let maxhiredseason: string | null = null;
let minincom: Tseason | null = null;
let maxdismissed: Tseason | null = null;
let maxdismissedseason: string | null = null;
Object.entries(seasons).forEach(([season, seasonInfo]) => {
    if(!maxincom || maxincom.income <seasonInfo.income) {
        maxincom = seasonInfo;
        maxseasons = season
    }
    if(!maxhired || maxhired.hired < seasonInfo.hired) {
        maxhired = seasonInfo;
        maxhiredseason = season
    }
    if(!minincom || minincom.income > seasonInfo.income) {
        minincom = seasonInfo;
        minseason = season
    }
    if(!maxdismissed || maxdismissed.dismissed > seasonInfo.dismissed) {
        maxdismissed = seasonInfo;
        maxdismissedseason = season 
    }
})
console.log(maxincom);
console.log(minincom);
console.log(maxdismissedseason);
console.log(maxdismissedseason);
console.log("new");