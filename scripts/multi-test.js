//get script from multi-lib
const multiLib=require("multi-lib/wrapper");
//you can use GenericSmelter
const multi=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"multi",{
// you can customize here ex) draw(tile)
},
/*length of output, input, crafTimes should be same.
if not, I'm not sure which error happens.
length of recipes is not limited now.

output
-first place : array of items      *IF YOU DON't NEED IT, YOU MUST SET NULL*
-second place: array of liquids    *IF YOU DON't NEED IT, YOU MUST SET NULL*
-third place: power                *IF YOU DON't NEED IT, YOU MUST SET NULL*

input
-first place : array of items      *IF YOU DON't NEED IT, YOU MUST SET NULL*
-second place: array of liquids    *IF YOU DON't NEED IT, YOU MUST SET NULL*
-third place: power                *IF YOU DON't NEED IT, YOU MUST SET NULL*

craftTimes
-1=1frame=1/60second
-NOT NULLABLE

[item,amount]
Vanilla item : "item-name"
list: scrap, copper, lead, graphite, coal, titanium, thorium, silicon, plastanium, phase-fabric, surge-alloy,
    spore-pod, sand, blast-compound, pyratite, metaglass

Modded item : "Mod-Name"+"-"+"item-name"
item-name is .json file name

[liquid,amount]
Vanilla liquids : "liquid-name"

Modded liquids :"Mod-Name"+"-"+"liquid-name"
liquid-name is .json file name

*/

{
  _output:[
    [/*items*/ null                                                      /*liquids*/,null                        /*power*/,null],
    [/*items*/ [          ["thorium",1]   ,   ["surge-alloy",2]         ]/*liquids*/,[        ["slag",5]        ]/*power*/,null],
    [/*items*/ [  ["scrap",1]  ,  ["plastanium",2]  ,  ["spore-pod",2]  ]/*liquids*/,[        ["oil",5]         ]/*power*/,null],
    [/*items*/ [                    ["silicon",1]                       ]/*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["multi-lib-example"+"-"+"gun-powder",1]          ]/*liquids*/,null                        /*power*/,null],
    [/*items*/ [          ["thorium",1]   ,   ["surge-alloy",3]         ]/*liquids*/,[        ["slag",3]        ]/*power*/,null],
    [/*items*/ [  ["scrap",1]  ,  ["plastanium",2]  ,  ["spore-pod",2]  ]/*liquids*/,[        ["oil",5]         ]/*power*/,null],
    [/*items*/ [                    ["silicon",1]                       ]/*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["multi-lib-example"+"-"+"gun-powder",1]          ]/*liquids*/,null                        /*power*/,null],
    [/*items*/ [          ["thorium",1]   ,   ["surge-alloy",3]         ]/*liquids*/,[  ["slag",5] , ["oil",4]  ]/*power*/,null],
  ],
  _input:[
    [/*items*/ [      ["sand",1]   ,   ["lead",2]             ]/*liquids*/,[  ["water",5] , ["cryofluid",3] ]/*power*/,null],
    [/*items*/ [      ["coal",1]   ,   ["sand",1]             ]/*liquids*/,[          ["water",5]           ]/*power*/,1],
    [/*items*/ [  ["pyratite",1]   ,   ["blast-compound",1]   ]/*liquids*/,[          ["water",5]           ]/*power*/,1],
    [/*items*/ [                  ["sand",1]                  ]/*liquids*/,null                              /*power*/,null],
    [/*items*/ [      ["sand",1]   ,   ["lead",2]             ]/*liquids*/,[          ["water",5]           ]/*power*/,null],
    [/*items*/ [      ["coal",1]   ,   ["sand",1]             ]/*liquids*/,[          ["water",5]           ]/*power*/,1],
    [/*items*/ [  ["pyratite",1]   ,   ["blast-compound",1]   ]/*liquids*/,[          ["water",5]           ]/*power*/,1],
    [/*items*/ [                  ["sand",1]                  ]/*liquids*/,null                              /*power*/,null],
    [/*items*/ [      ["sand",1]   ,   ["lead",2]             ]/*liquids*/,[          ["water",5]           ]/*power*/,null],
    [/*items*/ [      ["coal",1]   ,   ["sand",1]             ]/*liquids*/,[          ["water",5]           ]/*power*/,1],
  ],
  craftTimes:[12,60,72,30,12,60,72,30,12,60],
  //DON'T MODIFY THESE
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
  //
});
/*true: enable displaying inventory
false:disable displaying inventory*/
multi.enableInv=false;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
multi.dumpToggle=false;

/*
YOU MUST NOT MODIFY VALUE OF
THESE

configurable=true;
outputsPower=true;
hasItems=true;
hasLiquids=true;
hasPower=true;

*/
//using this without json. not recommanded because can cause error.
multi.localizedName="multi";
multi.description="multi";
multi.itemCapacity= 30;
multi.liquidCapacity= 20;
multi.size= 4;
multi.health= 100;
multi.craftEffect= Fx.pulverizeMedium;
multi.updateEffect=Fx.none;

multi.requirements(Category.crafting,ItemStack.with(Items.copper,75));
