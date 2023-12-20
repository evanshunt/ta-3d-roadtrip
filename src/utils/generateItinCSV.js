const generateItinCSV = (destinations) => {
  //@TODO: cols are a bit off.
  // to import into mymaps on google
  // NO API for mymaps https://issuetracker.google.com/issues/35820262?pli=1
  // can be added as layer manually

  const itin = destinations.map((destination, i) => {
    const item = [];
    if (destination.hideFromItinerary) return;

    item.push(destination.day);
    item.push(destination.details.links[0].text);
    item.push(destination.details.description);
    item.push(destination.details.links[1].url);
    item.push(destination.details.links[1].text);

    return item.toString().replace(/^,/gm, "") + "\n";
  });
  const cols = ["Day", "Title", "Description", "Link", "Link Text"];
  // prepend cols to itin as string
  itin.unshift(cols.toString().replace(/^,/gm, "") + "\n");

  const encodedUri = encodeURI(
    "data:text/csv;charset=utf-8," + itin.toString().replace(/^,/gm, "")
  );

  window.open(encodedUri);
};

export default generateItinCSV;
