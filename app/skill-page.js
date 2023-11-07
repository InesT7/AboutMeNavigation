const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const frameModule = require("@nativescript/core/ui/frame");

export function onLoaded (args) {
    const page = args.object;
    const listView = page.getViewById("mySkillsListView");

        const itemList = new ObservableArray([

            { category: "Programming Skills"},
            { skill: "C#" },
            { skill: "Java" },
            { skill: "JavaScript" },
            { skill: "MySQL" },
            { skill: "C++" },
            { skill: "Visual Basic" },
            { skill: "Database Management"},
            { category: "Troubleshooting Skills" },
            { skill: "Software-Hardware Troubleshooting" },
            { skill: "Software Development Life Cycle (SDLC)" },
            { skill: "Ios, Windows " },
            { category: "Soft Skills" },
            { skill: "Detail Oriented" },
            { skill: "Problem Solving" },
            { skill: "Critical Thinking" },
            { skill: "Collaboration and Teamwork" },
        ]);
        listView.items = itemList;
}
exports.onItemTap = function(args) {
    const listView = args.object;
    const index = args.index;
    const tappedItem = listView.items.getItem(index);
  
    frameModule.Frame.topmost().navigate({
      moduleName: "skills-page",
      context: tappedItem,
      animated: true
    });
  };