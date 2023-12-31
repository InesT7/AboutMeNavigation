const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const frameModule = require("@nativescript/core/ui/frame");

export function pageLoaded (args) {
    const page = args.object;
    const listView = page.getViewById("mySkillsListView");

        const itemList = new ObservableArray([
            { category: "PROGRAMMING SKILLS"},
            { skill: "C#" },
            { skill: "Java" },
            { skill: "JavaScript" },
            { skill: "MySQL" },
            { skill: "C++" },
            { skill: "Visual Basic" },
            { skill: "Database Management"},
            { category: "TROUBLESHOOTING SKILLS" },
            { skill: "Software-Hardware Troubleshooting" },
            { skill: "Software Development Life Cycle (SDLC)" },
            { skill: "Ios, Windows " },
            { category: "SOFT SKILLS" },
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