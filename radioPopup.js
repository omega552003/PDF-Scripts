// Adobe Acrobat form radio button selection popup
if (
  // Read if Radio button group 1 has set a No output
  this.getField("1").valueAsString == "No" ||
  (this.getfield("comments").value == "" && this.field("comments").required == true))
{app.alert("Please add comments for checklist NO responses.")}
