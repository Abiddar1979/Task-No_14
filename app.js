/*Task#:Guest_list :If you could invite anyone, living or deceased ,to dinner who would you
 invite?Make a list that includes at least three people would like invite to dinner.
 Then use your list to print a massage to each person inviting them to dinner.*/
var Guest_List = ["Abid", "Sabtain", "Zohair"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear ".concat(Guest_List[i], ", \nYou are invited to dinner! \n"));
}
